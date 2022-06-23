/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import { RadioButton } from './template';

export const argTypes = {
  layout: {
    options: ['vertical', 'horizontal'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  layout: 'vertical',
};

export const RadioButtonGroup = ({ layout = defaultArgs.layout }) => {
  let markup = `<div class="${clsx(
    'rvo-custom-checkbox__group',
    layout === 'horizontal' && 'rvo-custom-checkbox__group--horizontal',
    layout === 'vertical' && 'rvo-custom-checkbox__group--vertical',
  )}">`;
  markup += RadioButton({ id: 'optionA', name: 'group', labelText: 'Option A' });
  markup += RadioButton({ id: 'optionB', name: 'group', labelText: 'Option B' });
  markup += RadioButton({ id: 'optionC', name: 'group', labelText: 'Option C' });
  markup += RadioButton({ id: 'optionD', name: 'group', labelText: 'Option D' });
  markup += '</div>';
  return markup;
};
