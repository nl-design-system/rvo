/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { ITextInputFieldProps, TextInputField } from '../../form-field-textinput/src/template';
import './index.scss';
import parseContentMarkup from '../../utils/parseContentMarkup';
import clsx from 'clsx';
export interface IFieldsetProps {
  legend?: string;
  disabled?: boolean;
  /** @uxpinignoreprop */
  fields?: ITextInputFieldProps[];
  /** @uxpinpropname Fields */
  children?: ReactNode | undefined;
}

export const argTypes = {
  legend: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
  fields: {
    type: {
      name: 'array',
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Fieldset: React.FC<IFieldsetProps & React.HTMLAttributes<HTMLDivElement>> = ({
  legend = defaultArgs.legend,
  disabled = defaultArgs.disabled,
  fields,
  children,
  ...rootElementProps
}) => {
  return (
    <div
      className={clsx('rvo-form-fieldset', disabled && 'rvo-form-fieldset--disabled')}
      role="group"
      {...rootElementProps}
    >
      {legend && <legend className="rvo-form-fieldset__legend">{legend}</legend>}
      {children
        ? parseContentMarkup(children)
        : fields &&
          fields.map((fieldProps) => <TextInputField key={fieldProps.id} {...fieldProps} disabled={disabled} />)}
    </div>
  );
};

export default Fieldset;
