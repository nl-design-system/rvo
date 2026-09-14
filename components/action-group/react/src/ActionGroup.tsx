/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Button } from '@nl-rvo/react-button';
import '@nl-rvo/css-action-group';
import '@nl-rvo/css-layout-flow';
import { IActionGroupProps } from './ActionGroup.types';

export const ActionGroup: React.FC<IActionGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({
  buttonsLeft,
  buttonsRight,
  children,
  fullWidth,
  className,
  position,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'rvo-action-group',
        fullWidth && 'rvo-action-group--full-width',
        position === 'right' && 'rvo-action-group--position-right',
        className,
      )}
      {...rest}
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
