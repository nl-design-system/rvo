/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IRadioButtonProps {
  id?: string;
  name?: string;
  label: string;
  /**
   * @uxpinbind onChange 0.target.checked
   */
  checked?: boolean;
  hover?: boolean;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  invalid?: boolean;
  required?: boolean;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  onChange?: (event) => void;
  onClick?: (event) => void;
  onInvalid?: (event) => void;
  /** @uxpinignoreprop */
  onUpdateGroup?: (event) => void;
}

export const argTypes = {
  id: { control: 'text' },
  name: { control: 'text' },
  label: { control: 'text' },
  checked: { control: 'boolean' },
  hover: { control: 'boolean' },
  disabled: { control: 'boolean' },
  active: { control: 'boolean' },
  focus: { control: 'boolean' },
  invalid: { control: 'boolean' },
  required: { control: 'boolean' },
};

export const RadioButton: React.FC<IRadioButtonProps> = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  label = defaultArgs.label,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  onChange,
  onUpdateGroup,
  ...otherProps
}: IRadioButtonProps) => (
  <label className="rvo-radio-button" htmlFor={id}>
    <input
      id={id}
      name={name}
      type="radio"
      checked={checked || null}
      disabled={disabled || null}
      required={required || null}
      className={clsx(
        'utrecht-radio-button',
        checked && 'utrecht-radio-button--checked',
        hover && 'rvo-radio-button--hover',
        disabled && 'utrecht-radio-button--disabled',
        active && 'utrecht-radio-button--active',
        focus && 'utrecht-radio-button--focus-visible',
        invalid && 'utrecht-radio-button--invalid',
        required && 'utrecht-radio-button--required',
      )}
      onChange={(event) => {
        onChange?.(event);
        onUpdateGroup?.(event);
      }}
      {...otherProps}
    />
    {label}
  </label>
);

export default RadioButton;
