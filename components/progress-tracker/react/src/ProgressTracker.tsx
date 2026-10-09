/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import '@nl-rvo/css-progress-tracker';
import React from 'react';
import { IProgressTrackerProps } from './ProgressTracker.types';
import ProgressTrackerStep from './ProgressTrackerStep';

export const ProgressTracker: React.FC<IProgressTrackerProps> = ({ children, steps, ...rootElementProps }) => {
  return (
    <div className="rvo-progress-tracker" {...rootElementProps}>
      {(children &&
        React.Children.map(children, (child, index) => (
          <ProgressTrackerStep key={index} {...(child as any).props} />
        ))) ||
        (steps && steps.map((stepProps, index) => <ProgressTrackerStep key={index} {...stepProps} />))}
    </div>
  );
};

export default ProgressTracker;
