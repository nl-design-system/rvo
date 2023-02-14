/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FormField, FormLabel } from '@utrecht/component-library-react';
import React, { PropsWithChildren } from 'react';
import { ExpandableText } from '../expandable-text/template';
import { Feedback } from '../form-feedback/template';
import validateHTML from '../utils/validateHTML';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IFieldProps {
  fieldId?: string;
  label?: string;
  helperText?: string | React.ReactNode;
  expandableHelperText?: boolean;
  expandableHelperTextTitle?: string;
  warningText?: string;
  errorText?: string;
  className?: string;
}

export const argTypes = {
  fieldId: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  helperText: { control: 'text' },
  expandableHelperText: { control: 'boolean' },
  expandableHelperTextTitle: { control: 'text' },
  warningText: { control: 'text' },
  errorText: { control: 'text' },
};

export const Field: React.FC<PropsWithChildren<IFieldProps>> = ({
  fieldId = defaultArgs.fieldId,
  label = defaultArgs.label,
  helperText,
  expandableHelperText,
  expandableHelperTextTitle,
  warningText,
  errorText,
  children,
}) => {
  let helperTextMarkup: React.ReactNode;
  // Parse default helper text markup (strings or react node)
  if (helperText) {
    helperTextMarkup = <div className="utrecht-form-field-description">{helperText}</div>;

    // Parse helper text markup for expandable text
    if (expandableHelperText) {
      helperTextMarkup = (
        <div className="utrecht-form-field-description">
          <ExpandableText title={expandableHelperTextTitle} content={helperText} />
        </div>
      );
    }

    // Parse helper text markup for HTML strings
    else if (typeof helperText === 'string' && helperText.length) {
      const isValidHTML = validateHTML(helperText);
      if (isValidHTML) {
        helperTextMarkup = (
          <div className="utrecht-form-field-description" dangerouslySetInnerHTML={{ __html: helperText }}></div>
        );
      } else {
        helperTextMarkup = <div className="utrecht-form-field-description">{helperText}</div>;
      }
    }
  }

  return (
    <FormField className="rvo-form-field">
      <div className="rvo-form-field__label">
        <FormLabel htmlFor={fieldId}>{label}</FormLabel>
        {helperTextMarkup}
        {errorText && <Feedback text={errorText} type="error" />}
        {warningText && <Feedback text={warningText} type="warning" />}
      </div>
      {children}
    </FormField>
  );
};
