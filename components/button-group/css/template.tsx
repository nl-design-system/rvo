/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import React, { PropsWithChildren } from 'react';
import { Button, IButtonProps } from '../../button/css/template';

interface IButtonGroupProps {
  buttonsLeft: IButtonProps[];
  buttonsRight: IButtonProps[];
}

const defaultButtonsLeft = [
  {
    kind: 'secondary',
    size: 'md',
    textContent: 'Secondary action',
  },
];

const defaultButtonsRight = [
  {
    kind: 'primary',
    size: 'md',
    textContent: 'Primary action',
  },
];

export const argTypes = {
  buttonsLeft: {
    type: {
      name: 'array',
      required: true,
    },
  },
  buttonsRight: {
    type: {
      name: 'array',
      required: false,
    },
  },
};

export const defaultArgs: IButtonGroupProps = {
  buttonsLeft: defaultButtonsLeft,
  buttonsRight: defaultButtonsRight,
};

export const ButtonGroup: React.FC<PropsWithChildren<IButtonGroupProps>> = ({
  buttonsLeft = defaultArgs.buttonsLeft,
  buttonsRight = defaultArgs.buttonsRight,
  children,
}) => {
  return (
    <div className="rvo-button-group rvo-layout-row rvo-layout-gap--md">
      {children}
      {!children && buttonsLeft.map((buttonProps, index) => <Button key={index} {...buttonProps} />)}
      {!children &&
        buttonsRight.length > 0 &&
        buttonsRight.map((buttonProps, index) => {
          if (index === 0) {
            buttonProps.classNames = ['rvo-button-group__align-right'];
          }
          return <Button key={index} {...buttonProps} />;
        })}
    </div>
  );
};
