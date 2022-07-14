/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Link } from '../../link/css/template';
import './index.scss';

export interface IProgressTrackerStepProps {
  state: string;
  line: string;
  size: string;
  label: string;
  link: string;
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

export const defaultArgs: IProgressTrackerStepProps = {
  state: 'incomplete',
  line: 'none',
  size: 'medium',
  label: 'Step label',
  link: '#',
};

export const Step: React.FC<IProgressTrackerStepProps> = ({
  state = defaultArgs.state,
  line = defaultArgs.line,
  size = defaultArgs.size,
  label = defaultArgs.label,
  link = defaultArgs.link,
}) => {
  let labelMarkup: string | React.ReactNode = label;
  if (state === 'incomplete' || state === 'doing' || state === 'completed') {
    labelMarkup = <Link content={label} url={link} classNames={['rvo-progress-tracker__step-link']} />;
  }

  return (
    <div
      className={clsx(
        'rvo-progress-tracker__step',
        `rvo-progress-tracker__step--${line !== 'substep-start' ? size : 'md'}`,
        `rvo-progress-tracker__step--${state}`,
        line !== 'none' && `rvo-progress-tracker__step--${line}`,
      )}
    >
      {labelMarkup}
    </div>
  );
};
