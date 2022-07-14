/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import './index.scss';

export interface IRadioButtonProps {
  id: string;
  name: string;
  labelText: string;
  checked?: boolean;
  hover?: boolean;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  invalid?: boolean;
  required?: boolean;
}

export const argTypes = {
  id: { control: 'text' },
  name: { control: 'text' },
  labelText: { control: 'text' },
  checked: { control: 'boolean' },
  hover: { control: 'boolean' },
  disabled: { control: 'boolean' },
  active: { control: 'boolean' },
  focus: { control: 'boolean' },
  invalid: { control: 'boolean' },
  required: { control: 'boolean' },
};

export const defaultArgs: IRadioButtonProps = {
  id: 'field',
  name: 'group',
  labelText: 'Label',
  checked: false,
  hover: false,
  disabled: false,
  active: false,
  focus: false,
  invalid: false,
  required: false,
};

export const RadioButton: React.FC<IRadioButtonProps> = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  labelText = defaultArgs.labelText,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
}) => (
  <label className="rvo-custom-radio-button__label" htmlFor={id}>
    <input
      id={id}
      name={name}
      autoFocus={true}
      type="radio"
      defaultChecked={checked || null}
      disabled={disabled || null}
      required={required || null}
      className={clsx(
        'utrecht-custom-radio-button',
        checked && 'utrecht-custom-radio-button--checked',
        hover && 'rvo-custom-radio-button--hover',
        disabled && 'utrecht-custom-radio-button--disabled',
        active && 'utrecht-custom-radio-button--active',
        focus && 'utrecht-custom-radio-button--focus-visible',
        invalid && 'utrecht-custom-radio-button--invalid',
        required && 'utrecht-custom-radio-button--required',
      )}
    />
    {labelText}
  </label>
);
