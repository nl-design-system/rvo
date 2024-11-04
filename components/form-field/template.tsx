/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FormField } from '@utrecht/component-library-react';
import React, { PropsWithChildren, ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { ExpandableText } from '../expandable-text/template';
import { Feedback } from '../form-feedback/template';
import { Label } from '../form-field-label/template';
import parseContentMarkup from '../utils/parseContentMarkup';
import './index.scss';

export interface IFieldProps {
  fieldId?: string;
  label?: string;
  labelSize?: 'sm' | 'md';
  labelType?: 'default' | 'optional' | 'required';
  helperText?: ReactNode | undefined;
  helperTextId?: string;
  expandableHelperText?: boolean;
  expandableHelperTextTitle?: string;
  warningText?: string;
  errorText?: string;
  /** @uxpinignoreprop */
  className?: string;
  /** @uxpinignoreprop */
  children?: ReactNode | undefined;
}

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

export const Field: React.FC<PropsWithChildren<IFieldProps>> = ({
  fieldId = defaultArgs.fieldId,
  label = defaultArgs.label,
  labelSize = defaultArgs.labelSize,
  labelType = defaultArgs.label,
  helperText = defaultArgs.helperText,
  helperTextId = defaultArgs.helperTextId,
  expandableHelperText = defaultArgs.expandableHelperText,
  expandableHelperTextTitle = defaultArgs.expandableHelperTextTitle,
  warningText = defaultArgs.warningText,
  errorText = defaultArgs.errorText,
  children,
  className,
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
        <ExpandableText title={expandableHelperTextTitle ?? ''}>{parseContentMarkup(helperText)}</ExpandableText>
      </div>
    );
  }

  const fieldLabelId = `${fieldId}-label`;

  return (
    <FormField className="rvo-form-field" role="group" aria-labelledby={fieldLabelId}>
      <div className="rvo-form-field__label">
        <Label id={fieldLabelId} size={labelSize} type={labelType as any} htmlFor={fieldId}>
          {label}
        </Label>
        {helperTextMarkup}
        {errorText && <Feedback text={errorText} type="error" />}
        {warningText && <Feedback text={warningText} type="warning" />}
      </div>
      {(className && <div className={className}>{parseContentMarkup(children)}</div>) || parseContentMarkup(children)}
    </FormField>
  );
};
