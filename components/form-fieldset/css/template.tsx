/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { ITextInputFieldProps, TextInputField } from '../../form-field/css/textinput-field.template';

interface IFieldsetProps {
  legend: string;
  disabled?: boolean;
  fields: ITextInputFieldProps[];
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

const defaultFields = [
  { id: 'fieldA', labelText: 'Field', helperText: '' },
  {
    id: 'fieldB',
    labelText: 'Field met helper tekst',
    helperText: 'Deze helpertekst kan gebruikt worden voor instructies',
    value: '',
  },
  {
    id: 'fieldC',
    labelText: 'Field met waarschuwing',
    warningText: 'Dit is een waarschuwing',
    value: '',
  },
  {
    id: 'fieldD',
    labelText: 'Field met foutmelding',
    errorText: 'Dit is een foutmelding',
    value: '',
  },
];

export const defaultArgs: IFieldsetProps = {
  legend: 'Fieldset legend',
  disabled: false,
  fields: defaultFields,
};

export const Fieldset: React.FC<IFieldsetProps> = ({
  legend = defaultArgs.legend,
  disabled = defaultArgs.disabled,
  fields = defaultArgs.fields,
}) => {
  return (
    <fieldset className="utrecht-form-fieldset" disabled={disabled || null}>
      {legend && (
        <legend className="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--distanced">{legend}</legend>
      )}
      {fields.map((fieldProps) => (
        <TextInputField key={fieldProps.id} fieldId={fieldProps.id} {...fieldProps} />
      ))}
    </fieldset>
  );
};
