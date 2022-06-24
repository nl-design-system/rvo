/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  id: { control: 'text' },
  name: { control: 'text' },
  labelText: { control: 'text' },
  checked: { control: 'boolean' },
  hover: { control: 'boolean' },
  disabled: { control: 'boolean' },
  active: { control: 'boolean' },
  focus: { control: 'boolean' },
  indeterminate: { control: 'boolean' },
  invalid: { control: 'boolean' },
  required: { control: 'boolean' },
  value: { control: 'text' },
};

export const defaultArgs = {
  id: 'field',
  name: 'group',
  labelText: 'Label',
  checked: false,
  hover: false,
  disabled: false,
  active: false,
  focus: false,
  indeterminate: false,
  invalid: false,
  required: false,
  value: '',
};

export const Checkbox = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  labelText = defaultArgs.labelText,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  indeterminate = defaultArgs.indeterminate,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  value = defaultArgs.value,
}) =>
  `
  <label class='rvo-custom-checkbox__label' htmlFor="${id}">${labelText}</label>
  <input id="${id}" name="${name}" type="checkbox"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}${
    required ? ' required' : ''
  }${value ? ` value="${value}"` : ''} class="utrecht-custom-checkbox__input">
  <div class="${clsx(
    'utrecht-custom-checkbox__box',
    active && 'utrecht-custom-checkbox__box--active',
    hover && 'rvo-custom-checkbox--hover',
    checked && 'utrecht-custom-checkbox__box--checked',
    !checked && 'utrecht-custom-checkbox__box--not-checked',
    disabled && 'utrecht-custom-checkbox__box--disabled',
    focus && 'utrecht-custom-checkbox__box--focus-visible',
    invalid && 'utrecht-custom-checkbox__box--invalid',
    indeterminate && 'utrecht-custom-checkbox__box--indeterminate',
  )}">
  <div class="rvo-icon rvo-icon--vinkje rvo-icon--md rvo-custom-checkbox__icon"></div>
  <div class="rvo-icon rvo-custom-checkbox__icon--indeterminate">-</div>
  </div>
</div>`;

<label htmlFor="checkbox-option-a" className="rvo-option">
  <input type="checkbox" id="checkbox-option-a" name="checkboxes-options"></input>Option A
</label>;

// <span class="utrecht-custom-checkbox__icon utrecht-custom-checkbox__icon--checked">✔</span>
