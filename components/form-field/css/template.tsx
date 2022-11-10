/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { FormField, FormLabel } from '@utrecht/component-library-react';
import React, { PropsWithChildren } from 'react';
import { ExpandableText } from '../../expandable-text/css/template';
import { FormFeedback } from '../../form-feedback/css/template';
import validateHTML from '../../utils/validateHTML';

export interface IFieldProps {
  fieldId?: string;
  labelText: string;
  helperText?: string | React.ReactNode;
  expandableHelperText?: boolean;
  expandableHelperTextTitle?: string;
  warningText?: string;
  errorText?: string;
}

export const argTypes = {
  fieldId: {
    control: 'text',
  },
  labelText: {
    control: 'text',
  },
  helperText: { control: 'text' },
  expandableHelperText: { control: 'boolean' },
  expandableHelperTextTitle: { control: 'text' },
  warningText: { control: 'text' },
  errorText: { control: 'text' },
};

export const defaultArgs: IFieldProps = {
  fieldId: 'fieldId',
  labelText: 'Field label',
  helperText: 'Helper text',
  expandableHelperText: false,
  expandableHelperTextTitle: 'Expandable helper text title',
  warningText: '',
  errorText: '',
};

export const Field: React.FC<PropsWithChildren<IFieldProps>> = ({
  fieldId = defaultArgs.fieldId,
  labelText = defaultArgs.labelText,
  helperText,
  expandableHelperText,
  expandableHelperTextTitle,
  warningText,
  errorText,
  children,
}) => {
  let helperTextMarkup;
  // Parse default helper text markup (strings or react node)
  if (helperText) {
    helperTextMarkup = <div className="utrecht-form-field-description rvo-form-field__helper-text">{helperText}</div>;

    // Parse helper text markup for expandable text
    if (expandableHelperText) {
      helperTextMarkup = (
        <div className="utrecht-form-field-description rvo-form-field__helper-text">
          <ExpandableText title={expandableHelperTextTitle} text={helperText} />
        </div>
      );
    }

    // Parse helper text markup for HTML strings
    else if (typeof helperText === 'string' && helperText.length) {
      const isValidHTML = validateHTML(helperText);
      if (isValidHTML) {
        helperTextMarkup = (
          <div
            className="utrecht-form-field-description rvo-form-field__helper-text"
            dangerouslySetInnerHTML={{ __html: helperText }}
          ></div>
        );
      } else {
        helperTextMarkup = (
          <div className="utrecht-form-field-description rvo-form-field__helper-text">{helperText}</div>
        );
      }
    }
  }

  return (
    <FormField className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
      <div className="rvo-layout-column rvo-layout-gap--2xs">
        <FormLabel htmlFor={fieldId}>{labelText}</FormLabel>
        {helperTextMarkup}
        {errorText && <FormFeedback text={errorText} type="error" />}
        {warningText && <FormFeedback text={warningText} type="warning" />}
      </div>
      {children}
    </FormField>
  );
};
