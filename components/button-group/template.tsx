/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import { ButtonGroup as UtrechtButtonGroup } from '@utrecht/component-library-react';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import { Button, IButtonProps } from '../button/template';
import '../layout-column-row/index.scss';
import './index.scss';

export interface IButtonGroupProps {
  buttonsLeft?: IButtonProps[];
  buttonsRight?: IButtonProps[];
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
};

export const ButtonGroup: React.FC<PropsWithChildren<IButtonGroupProps>> = ({
  buttonsLeft = defaultArgs.buttonsLeft,
  buttonsRight = defaultArgs.buttonsRight,
  children,
}: PropsWithChildren<IButtonGroupProps>) => {
  return (
    <UtrechtButtonGroup>
      {children}
      {!children &&
        buttonsLeft.map((buttonProps, index) => {
          return <Button key={index} {...buttonProps} />;
        })}
      {!children &&
        buttonsRight.map((buttonProps, index) => (
          <Button key={index} {...buttonProps} className="utrecht-button-group__align-right" />
        ))}
    </UtrechtButtonGroup>
  );
};

export default ButtonGroup;
