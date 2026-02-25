/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import '@nl-rvo/css-progress-tracker/dist/index.css';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { IProgressTrackerStepProps, ProgressTrackerStep } from './progress-tracker-step';

export interface IProgressTrackerProps {
  /** @uxpinignoreprop */
  steps?: IProgressTrackerStepProps[];
  /** @uxpinpropname Steps */
  children?: ReactNode | undefined;
}

export const argTypes = {
  steps: {
    type: {
      name: 'array',
      required: true,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const ProgressTracker: React.FC<IProgressTrackerProps & React.HTMLAttributes<HTMLDivElement>> = ({
  steps = defaultArgs.steps,
  children,
  ...rootElementProps
}) => {
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
