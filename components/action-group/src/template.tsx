/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import { ButtonGroup } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Button, IButtonProps } from '../../button/src/template';
import '../../layout-flow/src/index.scss';
import './index.scss';

export interface IActionGroupProps {
  /** @uxpinignoreprop */
  buttonsLeft?: IButtonProps[];
  /** @uxpinignoreprop */
  buttonsRight?: IButtonProps[];
  fullWidth?: boolean;
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

export const ActionGroup: React.FC<IActionGroupProps> = ({
  buttonsLeft = defaultArgs.buttonsLeft,
  buttonsRight = defaultArgs.buttonsRight,
  children,
  fullWidth = defaultArgs.fullWidth,
  className,
}: IActionGroupProps) => {
  return (
    <ButtonGroup
      className={clsx(
        {
          'rvo-action-group--full-width': fullWidth,
        },
        className,
      )}
    >
      {children}
      {!children &&
        buttonsLeft?.map((buttonProps, index) => {
          return <Button key={index} {...buttonProps} />;
        })}
      {!children &&
        buttonsRight?.map((buttonProps, index) => (
          <Button key={index} {...buttonProps} className="rvo-action-group--align-right" />
        ))}
    </ButtonGroup>
  );
};

export default ActionGroup;
