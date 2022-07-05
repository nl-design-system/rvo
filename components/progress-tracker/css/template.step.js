/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import extractArgs from '../../utils/extractArgs';
import { argTypes as iconArgTypes, defaultArgs as iconDefaultArgs, StepIcon } from './template.step-icon';
import { argTypes as labelArgTypes, defaultArgs as labelDefaultArgs, StepLabel } from './template.step-label';

export const argTypes = {
  ...iconArgTypes,
  ...labelArgTypes,
  size: {
    options: ['small', 'medium'],
    mapping: { small: 'sm', medium: 'md' },
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  ...iconDefaultArgs,
  ...labelDefaultArgs,
  size: 'medium',
};

export const Step = (args) => {
  const iconArgs = extractArgs(args, iconArgTypes);
  const labelArgs = extractArgs(args, labelArgTypes);

  return `<div class="${clsx('rvo-progress-tracker__step', `rvo-progress-tracker__step--${args.size}`)}">${StepIcon(
    iconArgs,
  )}${StepLabel(labelArgs)}</div>`;
};
