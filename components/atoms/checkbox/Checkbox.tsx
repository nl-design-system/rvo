/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
// import { defaultArgs } from './defaultArgs';
import './checkbox.scss';
import { ComponentProps } from 'react';

export interface CheckboxProps extends ComponentProps<'input'> {
  id?: string;
  // name?: string;
  label: string;
  // checked?: boolean;
  // hover?: boolean;
  // disabled?: boolean;
  // active?: boolean;
  // focus?: boolean;
  // indeterminate?: boolean;
  // invalid?: boolean;
  // value?: string;
  // helperTextId?: string;
  // onFocus?: (event) => void;
  // onBlur?: (event) => void;
  // onChange?: (event) => void;
  // onClick?: (event) => void;
  // onInvalid?: (event) => void;
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
  indeterminate: { control: 'boolean' },
  invalid: { control: 'boolean' },
  required: { control: 'boolean' },
  value: { control: 'text' },
  helperTextId: { control: 'text' },
};

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const { id, label, type = 'checkbox', onChange, onUpdateGroup, required, ...rest } = props;
  return (
    <label className={clsx('rvo-checkbox')} data-required={required || false} htmlFor={id}>
      <input
        id={id}
        type={type}
        className="rvo-checkbox__input"
        onChange={(event) => {
          onChange?.(event);
          onUpdateGroup?.(event);
        }}
        // aria-describedby={helperTextId?.length ? helperTextId : null} // gewoon aria describe gebruiken
        {...rest}
      />
      {label}
    </label>
  );
};

export default Checkbox;
