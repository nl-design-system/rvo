/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { Textarea as UtrechtTextarea } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { HTMLAttributes, useState } from 'react';
import { defaultArgs } from './defaultArgs';

export interface ITextareaProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  /** @uxpinignoreprop */
  key?: string;
  /** @uxpinignoreprop */
  id?: string;
  disabled?: boolean;
  /** @uxpinpropname Has focus */
  focus?: boolean;
  /** @uxpinpropname Is invalid */
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string;
  maxLength?: number | undefined;
  /** @uxpinpropname Max length indicator (textarea) */
  maxLengthIndicator?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onInvalid?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const argTypes = {
  id: { control: 'text' },
  disabled: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
  readOnly: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },

  placeholder: {
    control: 'text',
  },
  value: {
    control: 'text',
  },
  maxLength: {
    control: 'number',
  },
  maxLengthIndicator: {
    control: 'boolean',
  },
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
};

export const Textarea: React.FC<ITextareaProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  placeholder = defaultArgs.placeholder,
  value = defaultArgs.value,
  maxLength = defaultArgs.maxLength,
  maxLengthIndicator = defaultArgs.maxLengthIndicator,
  ...otherProps
}: ITextareaProps) => {
  const props = {
    id,
    disabled,
    invalid,
    required,
    readOnly,
    placeholder,
    defaultValue: value,
    maxLength,
    ...otherProps,
  };

  const [currentValue, setCurrentValue] = useState(value);

  if (maxLength && maxLengthIndicator) {
    // Override onChange
    props.onChange = (event) => {
      otherProps.onChange?.(event);
      setCurrentValue(event.target.value);
    };
    return (
      <div className={clsx('rvo-layout-column', 'rvo-layout-gap--xs')}>
        <UtrechtTextarea
          {...props}
          className={clsx(focus && ['utrecht-textbox--focus', 'utrecht-textbox--focus-visible'])}
        />
        <span className="utrecht-textbox-remaining-chars">
          Nog {maxLength - (currentValue?.length || 0)} teken{maxLength - (currentValue?.length || 0) > 1 && 's'} over
        </span>
      </div>
    );
  } else {
    return (
      <UtrechtTextarea
        {...props}
        className={clsx(focus && ['utrecht-textbox--focus', 'utrecht-textbox--focus-visible'])}
      />
    );
  }
};

export default Textarea;
