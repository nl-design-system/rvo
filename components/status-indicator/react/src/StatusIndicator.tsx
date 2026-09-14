/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import '@nl-rvo/css-status-indicator';
import { IStatusIndicatorProps } from './StatusIndicator.types';

export const StatusIndicator: React.FC<IStatusIndicatorProps> = ({
  color,
  ...rootElementProps
}: IStatusIndicatorProps) => (
  <div className={clsx('rvo-status-indicator', `rvo-status-indicator--${color}`)} {...rootElementProps} />
);

export default StatusIndicator;
