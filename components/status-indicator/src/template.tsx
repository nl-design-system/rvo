/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IStatusIndicatorProps {
  color: 'groen' | 'groen-300' | 'oranje' | 'oranje-300' | 'rood' | 'rood-300' | 'hemelblauw' | 'hemelblauw-300';
}

export const argTypes = {
  color: {
    options: ['groen', 'groen-300', 'oranje', 'oranje-300', 'rood', 'rood-300', 'hemelblauw', 'hemelblauw-300'],
    control: { type: 'radio' },
  },
};

export const StatusIndicator: React.FC<IStatusIndicatorProps> = ({
  color = defaultArgs.color,
}: IStatusIndicatorProps) => <div className={clsx('rvo-status-indicator', `rvo-status-indicator--${color}`)} />;

export default StatusIndicator;
