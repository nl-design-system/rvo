/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { IProgressTrackerStepProps, ProgressTrackerStep } from './progress-tracker-step/template';

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

export const ProgressTracker: React.FC<IProgressTrackerProps> = ({
  steps = defaultArgs.steps,
  children,
}: IProgressTrackerProps) => {
  return (
    <div className="rvo-progress-tracker">
      {(children &&
        React.Children.map(children, (child, index) => (
          <ProgressTrackerStep key={index} {...(child as any).props} />
        ))) ||
        (steps && steps.map((stepProps, index) => <ProgressTrackerStep key={index} {...stepProps} />))}
    </div>
  );
};

export default ProgressTracker;
