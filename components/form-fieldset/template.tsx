/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FieldsetLegend, Fieldset as FieldsetUtrecht } from '@utrecht/component-library-react';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { ITextInputFieldProps, TextInputField } from '../form-field-textinput/template';
import './index.scss';
import parseContentMarkup from '../utils/parseContentMarkup';
export interface IFieldsetProps {
  legend: string;
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

export const Fieldset: React.FC<IFieldsetProps> = ({
  legend = defaultArgs.legend,
  disabled = defaultArgs.disabled,
  fields,
  children,
}: IFieldsetProps) => {
  return (
    <FieldsetUtrecht disabled={disabled || null} className="rvo-form-fieldset">
      {legend && <FieldsetLegend>{legend}</FieldsetLegend>}
      {children
        ? parseContentMarkup(children)
        : fields &&
          fields.map((fieldProps) => <TextInputField key={fieldProps.id} fieldId={fieldProps.id} {...fieldProps} />)}
    </FieldsetUtrecht>
  );
};

export default Fieldset;
