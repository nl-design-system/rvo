/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { PropsWithChildren } from 'react';
import parseContentMarkup from '../../../../packages/component-library-react/src/utils/parseContentMarkup';
import { ExpandableContent } from '@nl-rvo/react-expandable-content';
import { Feedback } from '@nl-rvo/react-form-feedback';
import { FormFieldLabel } from '@nl-rvo/react-form-field-label';
import '@nl-rvo/css-form-field';
import { IFieldProps } from './FormField.types';

export type FieldPropsWithoutFieldId = Omit<IFieldProps, 'fieldId'>;

export const argTypes = {
  fieldId: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  labelSize: {
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  labelType: {
    options: ['default', 'optional', 'required'],
    control: { type: 'select' },
  },
  helperText: { control: 'text' },
  helperTextId: { control: 'text' },
  expandableHelperText: { control: 'boolean' },
  expandableHelperTextTitle: { control: 'text' },
  warningText: { control: 'text' },
  errorText: { control: 'text' },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Field: React.FC<PropsWithChildren<IFieldProps> & React.HTMLAttributes<HTMLDivElement>> = ({
  fieldId,
  label,
  labelSize,
  labelType,
  helperText,
  helperTextId,
  expandableHelperText,
  expandableHelperTextTitle,
  warningText,
  errorText,
  children,
  className,
  ...rootElementProps
}) => {
  let helperTextMarkup: React.ReactNode;
  // Parse default helper text markup (strings or react node)
  if (helperText) {
    helperTextMarkup = (
      <div className="utrecht-form-field-description" id={helperTextId}>
        {parseContentMarkup(helperText)}
      </div>
    );
  }

  // Parse helper text markup for expandable text
  if (expandableHelperText) {
    helperTextMarkup = (
      <div className="utrecht-form-field-description">
        <ExpandableContent title={expandableHelperTextTitle ?? ''}>{parseContentMarkup(helperText)}</ExpandableContent>
      </div>
    );
  }

  const fieldLabelId = `${fieldId}-label`;

  return (
    <div
      className="utrecht-form-field utrecht-form-field--text rvo-form-field"
      role="group"
      aria-labelledby={fieldLabelId}
      {...rootElementProps}
    >
      <div className="rvo-form-field__label">
        <FormFieldLabel
          id={fieldLabelId}
          small={labelSize === 'sm'}
          type={labelType as 'default' | 'optional' | 'required'}
          htmlFor={fieldId}
        >
          {label}
        </FormFieldLabel>
        {helperTextMarkup}
        {errorText && <Feedback text={errorText} type="error" />}
        {warningText && <Feedback text={warningText} type="warning" />}
      </div>
      {(className && <div className={className}>{parseContentMarkup(children)}</div>) || parseContentMarkup(children)}
    </div>
  );
};
