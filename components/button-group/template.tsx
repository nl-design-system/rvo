/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import { ButtonGroup as UtrechtButtonGroup } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Button, IButtonProps } from '../button/template';
import '../layout-flow/index.scss';
import './index.scss';

export interface IButtonGroupProps {
  /** @uxpinignoreprop */
  buttonsLeft?: IButtonProps[];
  /** @uxpinignoreprop */
  buttonsRight?: IButtonProps[];
  fullWidth?: boolean;
  /** @uxpinpropname Buttons */
  children?: ReactNode | undefined;
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

export const ButtonGroup: React.FC<IButtonGroupProps> = ({
  buttonsLeft = defaultArgs.buttonsLeft,
  buttonsRight = defaultArgs.buttonsRight,
  children,
  fullWidth = defaultArgs.fullWidth,
}: IButtonGroupProps) => {
  return (
    <UtrechtButtonGroup
      className={clsx({
        'utrecht-button-group--rvo-full-width': fullWidth,
      })}
    >
      {children}
      {!children &&
        buttonsLeft?.map((buttonProps, index) => {
          return <Button key={index} {...buttonProps} />;
        })}
      {!children &&
        buttonsRight?.map((buttonProps, index) => (
          <Button key={index} {...buttonProps} className="utrecht-button-group__align-right" />
        ))}
    </UtrechtButtonGroup>
  );
};

export default ButtonGroup;
