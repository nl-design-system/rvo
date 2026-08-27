/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Button, IButtonProps } from '../button/';
import '@nl-rvo/component-library-css/dist/components/layout-flow.css';
import '@nl-rvo/component-library-css/dist/components/action-group.css';

export interface IActionGroupProps {
  buttonsLeft?: IButtonProps[];
  buttonsRight?: IButtonProps[];
  fullWidth?: boolean;
  position?: 'left' | 'right';
  children?: ReactNode | undefined;
  className?: string;
}

export const ActionGroup: React.FC<IActionGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({
  buttonsLeft,
  buttonsRight,
  children,
  fullWidth,
  className,
  position,
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
