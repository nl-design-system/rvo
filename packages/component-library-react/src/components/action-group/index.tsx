/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Button, IButtonProps } from '../../button/src/';
import '@nl-rvo/css-layout-flow/dist/index.css';
import '@nl-rvo/css-action-group/dist/index.css';

export interface IActionGroupProps {
  /** @uxpinignoreprop */
  buttonsLeft?: IButtonProps[];
  /** @uxpinignoreprop */
  buttonsRight?: IButtonProps[];
  fullWidth?: boolean;
  position?: 'left' | 'right';
  /** @uxpinpropname Buttons */
  children?: ReactNode | undefined;
  className?: string;
}

export const argTypes = {
  buttonsLeft: {
    type: {
      name: 'array',
      required: false,
    },
  },
  buttonsRight: {
    type: {
      name: 'array',
      required: true,
    },
  },
  fullWidth: {
    type: {
      name: 'boolean',
      required: false,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const ActionGroup: React.FC<IActionGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({
  buttonsLeft = defaultArgs.buttonsLeft,
  buttonsRight = defaultArgs.buttonsRight,
  children,
  fullWidth = defaultArgs.fullWidth,
  className,
  position = defaultArgs.position,
  ...rootElementProps
}) => {
  return (
    <div
      className={clsx(
        'rvo-action-group',
        fullWidth && 'rvo-action-group--full-width',
        position === 'right' && 'rvo-action-group--position-right',
        className,
      )}
      {...rootElementProps}
    >
      {children}
      {!children &&
        buttonsLeft?.map((buttonProps, index) => {
          return <Button key={index} {...buttonProps} />;
        })}
      {!children && buttonsRight?.map((buttonProps, index) => <Button key={index} {...buttonProps} />)}
    </div>
  );
};

export default ActionGroup;
