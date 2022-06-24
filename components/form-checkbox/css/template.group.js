/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import { Checkbox } from './template';

export const argTypes = {
  layout: {
    options: ['vertical', 'horizontal'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  layout: 'vertical',
};

export const CheckboxGroup = ({ layout = defaultArgs.layout }) => {
  let markup = `<div class="${clsx(
    'rvo-checkbox__group',
    layout === 'horizontal' && 'rvo-checkbox__group--horizontal',
    layout === 'vertical' && 'rvo-checkbox__group--vertical',
  )}">`;
  markup += Checkbox({ id: 'optionA', name: 'group', labelText: 'Option A' });
  markup += Checkbox({ id: 'optionB', name: 'group', labelText: 'Option B' });
  markup += Checkbox({ id: 'optionC', name: 'group', labelText: 'Option C' });
  markup += Checkbox({ id: 'optionD', name: 'group', labelText: 'Option D' });
  markup += '</div>';
  return markup;
};
