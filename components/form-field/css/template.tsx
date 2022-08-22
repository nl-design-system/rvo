/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { ExpandableText } from '../../expandable-text/css/template';
import { FormFeedback } from '../../form-feedback/css/template';
import validateHTML from '../../utils/validateHTML';

export interface IFieldProps {
  fieldId?: string;
  labelText: string;
  helperText?: string;
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

export const Field: React.FC<IFieldProps> = ({
  fieldId = defaultArgs.fieldId,
  labelText = defaultArgs.labelText,
  helperText,
  expandableHelperText,
  expandableHelperTextTitle,
  warningText,
  errorText,
  children,
}) => {
  // Parse helper text markup
  let helperTextMarkup;
  if (helperText && helperText.length) {
    if (!expandableHelperText) {
      const isValidHTML = validateHTML(helperText);
      helperTextMarkup = isValidHTML ? (
        <div className="rvo-form-field__helper-text" dangerouslySetInnerHTML={{ __html: helperText }}></div>
      ) : (
        <div className="rvo-form-field__helper-text">{helperText}</div>
      );
    } else {
      helperTextMarkup = (
        <div className="rvo-form-field__helper-text">
          <ExpandableText title={expandableHelperTextTitle} text={helperText} />
        </div>
      );
    }
  }

  return (
    <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
      <label className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs" htmlFor={fieldId}>
        <span className="rvo-form-field__label-text">{labelText}</span>
        {helperTextMarkup}
        {errorText && <FormFeedback text={errorText} type="error" />}
        {warningText && <FormFeedback text={warningText} type="warning" />}
      </label>
      {children}
    </div>
  );
};
