/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import { ButtonGroup as ButtonGroupNL } from '@utrecht/component-library-react';
import React, { PropsWithChildren } from 'react';
import { Button, IButtonProps } from '../../button/css/template';

interface IButtonGroupProps {
  buttonsRight: IButtonProps[];
  buttonsLeft: IButtonProps[];
}

const defaultButtonsRight = [
  {
    kind: 'secondary',
    size: 'md',
    textContent: 'Secondary action',
  },
];

const defaultButtonsLeft = [
  {
    kind: 'primary',
    size: 'md',
    textContent: 'Primary action',
  },
];

export const argTypes = {
  buttonsRight: {
    type: {
      name: 'array',
      required: true,
    },
  },
  buttonsLeft: {
    type: {
      name: 'array',
      required: false,
    },
  },
};

export const defaultArgs: IButtonGroupProps = {
  buttonsRight: defaultButtonsRight,
  buttonsLeft: defaultButtonsLeft,
};

export const ButtonGroup: React.FC<PropsWithChildren<IButtonGroupProps>> = ({
  buttonsRight = defaultArgs.buttonsRight,
  buttonsLeft = defaultArgs.buttonsLeft,
  children,
}) => {
  return (
    <ButtonGroupNL>
      {children}
      {!children &&
        buttonsLeft.map((buttonProps, index) => {
          return <Button key={index} {...buttonProps} />;
        })}
      {!children && buttonsRight.map((buttonProps, index) => <Button key={index} {...buttonProps} />)}
    </ButtonGroupNL>
  );
};
