/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FieldsetLegend, Fieldset as FieldsetUtrecht } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { ITextInputFieldProps, TextInputField } from '../../form-field/css/textinput-field.template';
import './index.scss';
interface IFieldsetProps {
  legend: string;
  disabled?: boolean;
  fields?: ITextInputFieldProps[];
  hideFields?: boolean;
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
  hideFields: {
    control: 'boolean',
  },
};

const defaultFields = [
  { id: 'fieldA', label: 'Field', helperText: '' },
  {
    id: 'fieldB',
    label: 'Field met helper tekst',
    helperText: 'Deze helpertekst kan gebruikt worden voor instructies',
    value: '',
  },
  {
    id: 'fieldC',
    label: 'Field met waarschuwing',
    warningText: 'Dit is een waarschuwing',
    value: '',
  },
  {
    id: 'fieldD',
    label: 'Field met foutmelding',
    errorText: 'Dit is een foutmelding',
    value: '',
  },
];

export const defaultArgs: IFieldsetProps = {
  legend: 'Fieldset legend',
  disabled: false,
  fields: defaultFields,
  hideFields: false,
};

export const Fieldset: React.FC<PropsWithChildren<IFieldsetProps>> = ({
  legend = defaultArgs.legend,
  disabled = defaultArgs.disabled,
  fields,
  hideFields,
  children,
}) => {
  return (
    <FieldsetUtrecht
      className={clsx('rvo-layout-column rvo-layout-gap--xl', hideFields && 'utrecht-form-fieldset--hidden')}
      disabled={disabled || null}
    >
      {legend && <FieldsetLegend>{legend}</FieldsetLegend>}
      {fields &&
        fields.map((fieldProps) => <TextInputField key={fieldProps.id} fieldId={fieldProps.id} {...fieldProps} />)}
      {children}
    </FieldsetUtrecht>
  );
};
