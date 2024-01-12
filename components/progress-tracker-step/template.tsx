/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import { Link } from '../link/template';
import './index.scss';

export interface IProgressTrackerStepProps {
  state: string;
  line: string;
  size: string;
  label: string;
  link?: string;
  onClick?: (event) => void;
}

export const argTypes = {
  state: {
    options: ['start', 'incomplete', 'doing', 'completed', 'disabled', 'end'],
    control: { type: 'radio' },
  },
  line: {
    options: ['none', 'straight', 'substep-start', 'substep-end'],
    control: { type: 'radio' },
  },
  size: {
    options: ['small', 'medium'],
    mapping: { small: 'sm', medium: 'md' },
    control: { type: 'radio' },
  },
  label: {
    control: 'text',
  },
  link: {
    control: 'text',
  },
};

export const ProgressTrackerStep: React.FC<IProgressTrackerStepProps> = ({
  state = defaultArgs.state,
  line = defaultArgs.line,
  size = defaultArgs.size,
  label = defaultArgs.label,
  link = defaultArgs.link,
  onClick = defaultArgs.onClick,
}: IProgressTrackerStepProps) => {
  let labelMarkup: string | React.ReactNode = label;
  if (state === 'incomplete' || state === 'doing' || state === 'completed') {
    labelMarkup = <Link content={label} href={link} className="rvo-progress-tracker__step-link" onClick={onClick} />;
  }

  let stateImageCssClassname;
  switch (state) {
    case 'start':
    case 'end':
      stateImageCssClassname = 'start-end';
      break;
    case 'disabled':
      stateImageCssClassname = 'incomplete';
      break;
    default:
      stateImageCssClassname = state;
  }

  return (
    <div
      className={clsx(
        'rvo-progress-tracker__step',
        `rvo-progress-tracker__step--${line !== 'substep-start' ? size : 'md'}`,
        `rvo-progress-tracker__step--${state}`,
        `rvo-image-bg-progress-tracker-${stateImageCssClassname}-${line !== 'substep-start' ? size : 'md'}--after`,
        line !== 'none' && `rvo-progress-tracker__step--${line}`,
        line !== 'none' && `rvo-image-bg-progress-tracker-line-${line}--before`,
      )}
    >
      {labelMarkup}
    </div>
  );
};

export default ProgressTrackerStep;
