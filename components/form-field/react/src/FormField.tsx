/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { PropsWithChildren } from 'react';
import parseContentMarkup from '../../../../packages/component-library-react/src/utils/parseContentMarkup';
import { ExpandableContent } from '@nl-rvo/react-expandable-content';
import { Feedback } from '@nl-rvo/react-form-feedback';
import '@nl-rvo/css-form-field';
import { IFieldProps } from './FormField.types';
import clsx from 'clsx';
import { TextInput, ITextInputProps } from '@nl-rvo/react-form-text-input';
import { Checkbox, ICheckboxProps } from '@nl-rvo/react-form-checkbox';
import { CheckboxGroup, ICheckboxGroupProps } from '@nl-rvo/react-form-checkbox-group';
import { FileInput, IFileInputProps } from '@nl-rvo/react-form-file-input';
import { RadioButton, IRadioButtonProps } from '@nl-rvo/react-form-radio-button';
import { RadioButtonGroup, IRadioButtonGroupProps } from '@nl-rvo/react-form-radio-button-group';
import { Select, ISelectProps } from '@nl-rvo/react-form-select';
import { Textarea, ITextareaProps } from '@nl-rvo/react-form-textarea';

interface FormFieldInputField {
  Text: React.FC<ITextInputProps>;
  Date: React.FC<ITextInputProps>;
  Checkbox: React.FC<ICheckboxProps>;
  CheckboxGroup: React.FC<ICheckboxGroupProps>;
  FileInput: React.FC<IFileInputProps>;
  RadioButton: React.FC<IRadioButtonProps>;
  RadioButtonGroup: React.FC<IRadioButtonGroupProps>;
  Select: React.FC<ISelectProps>;
  TextArea: React.FC<ITextareaProps>;
}

const FormField: React.FC<PropsWithChildren<IFieldProps>> & FormFieldInputField = ({
  id,
  label,
  labelSize,
  labelType,
  helperText,
  helperTextId,
  warningText,
  errorText,
  children,
  className,
  expandableHelperText,
  ...rootElementProps
}) => {
  const child = React.Children.only(children);
  const childWithId = React.cloneElement(child, { id });

  return (
    <div
      className="utrecht-form-field utrecht-form-field--text rvo-form-field"
      role="group"
      aria-labelledby={`${id}-label`}
      {...rootElementProps}
    >
      <div className="rvo-form-field__label">
        <label
          className={clsx(
            'rvo-label',
            'rvo-label--sm',
            labelType && 'rvo-label--has-after-field',
            labelSize && `rvo-label--${labelSize}`,
            (labelType === 'optional' || labelType === 'required') && `rvo-label--${labelType}`,
          )}
          id={id}
        >
          {label}
        </label>
        <div className="utrecht-form-field-description" id={helperTextId}>
          {expandableHelperText ? (
            <ExpandableContent title={expandableHelperText.title ?? ''}>
              {parseContentMarkup(helperText)}
            </ExpandableContent>
          ) : (
            parseContentMarkup(helperText)
          )}
        </div>
        {errorText && <Feedback type="error">{errorText}</Feedback>}
        {warningText && <Feedback type="warning">{warningText}</Feedback>}
      </div>
      {(className && <div className={className}>{childWithId}</div>) || childWithId}
    </div>
  );
};

FormField.Text = TextInput;
FormField.Date = (params) => <TextInput type="date" {...params} />;
FormField.Checkbox = Checkbox;
FormField.CheckboxGroup = CheckboxGroup;
FormField.FileInput = FileInput;
FormField.RadioButton = RadioButton;
FormField.RadioButtonGroup = RadioButtonGroup;
FormField.Select = Select;
FormField.TextArea = Textarea;

export { FormField };
