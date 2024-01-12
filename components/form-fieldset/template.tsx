/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FieldsetLegend, Fieldset as FieldsetUtrecht } from '@utrecht/component-library-react';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import { ITextInputFieldProps, TextInputField } from '../form-field-textinput/template';
import './index.scss';
export interface IFieldsetProps {
  legend: string;
  disabled?: boolean;
  fields?: ITextInputFieldProps[];
  children?: React.ReactNode;
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
};

export const Fieldset: React.FC<PropsWithChildren<IFieldsetProps>> = ({
  legend = defaultArgs.legend,
  disabled = defaultArgs.disabled,
  fields,
  children,
}: PropsWithChildren<IFieldsetProps>) => {
  return (
    <FieldsetUtrecht disabled={disabled || null} className="rvo-form-fieldset">
      {legend && <FieldsetLegend>{legend}</FieldsetLegend>}
      {children ||
        (fields &&
          fields.map((fieldProps) => <TextInputField key={fieldProps.id} fieldId={fieldProps.id} {...fieldProps} />))}
    </FieldsetUtrecht>
  );
};

export default Fieldset;
