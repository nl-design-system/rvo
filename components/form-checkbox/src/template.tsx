/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface ICheckboxProps extends HTMLAttributes<HTMLInputElement> {
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
  /** @uxpinpropname Has focus */
  focus?: boolean;
  indeterminate?: boolean;
  /** @uxpinpropname Is invalid */
  invalid?: boolean;
  required?: boolean;
  helperTextId?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.InvalidEvent<HTMLInputElement>) => void;
  /** @uxpinignoreprop */
  onUpdateGroup?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  indeterminate: { control: 'boolean' },
  invalid: { control: 'boolean' },
  required: { control: 'boolean' },
  helperTextId: { control: 'text' },
  onFocus: {
    table: {
      disable: true,
    },
  },
  onBlur: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
  onInput: {
    table: {
      disable: true,
    },
  },
  onInvalid: {
    table: {
      disable: true,
    },
  },
  onUpdateGroup: {
    table: {
      disable: true,
    },
  },
};

export const Checkbox: React.FC<ICheckboxProps> = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  label = defaultArgs.label,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  indeterminate = defaultArgs.indeterminate,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  helperTextId = defaultArgs.helperTextId,
  onChange,
  onUpdateGroup,
  ...otherProps
}: ICheckboxProps) => (
  <label
    className={clsx(
      'rvo-checkbox',
      active && 'rvo-checkbox--active',
      hover && 'rvo-checkbox--hover',
      checked && 'rvo-checkbox--checked',
      !checked && 'rvo-checkbox--not-checked',
      disabled && 'rvo-checkbox--disabled',
      focus && 'rvo-checkbox--focus-visible',
      invalid && 'rvo-checkbox--invalid',
      indeterminate && 'rvo-checkbox--indeterminate',
      required && 'rvo-checkbox--required',
    )}
    htmlFor={id}
  >
    <input
      id={id}
      name={name}
      className="rvo-checkbox__input"
      type="checkbox"
      checked={checked}
      disabled={disabled}
      required={required}
      onChange={(event) => {
        onChange?.(event);
        onUpdateGroup?.(event);
      }}
      {...otherProps}
      aria-describedby={helperTextId?.length ? helperTextId : undefined}
    />
    {label}
  </label>
);

export default Checkbox;
