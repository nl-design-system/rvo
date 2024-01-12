/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import { IProgressTrackerStepProps, ProgressTrackerStep } from '../progress-tracker-step/template';

export interface IProgressTrackerProps {
  /** @uxpinignoreprop */
  steps?: IProgressTrackerStepProps[];
}

export const argTypes = {
  steps: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const ProgressTracker: React.FC<PropsWithChildren<IProgressTrackerProps>> = ({
  steps = defaultArgs.steps,
  children,
}: PropsWithChildren<IProgressTrackerProps>) => {
  return (
    <div className="rvo-progress-tracker">
      {(children &&
        React.Children.map(children, (child, index) => (
          <ProgressTrackerStep key={index} {...(child as any).props} />
        ))) ||
        steps.map((stepProps, index) => <ProgressTrackerStep key={index} {...stepProps} />)}
    </div>
  );
};

export default ProgressTracker;
