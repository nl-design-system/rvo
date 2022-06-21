/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

export const argTypes = {
  fieldId: {
    control: 'text',
  },
  labelText: {
    control: 'text',
  },
  helperText: { control: 'text' },
  useExpandableHelperText: { control: 'boolean' },
  expandableHelperTextTitle: { control: 'text' },
  warningText: { control: 'text' },
  errorText: { control: 'text' },
};

export const defaultArgs = {
  fieldId: 'fieldId',
  labelText: 'Field label',
  helperText: 'Helper text which can be used for instructions.',
  useExpandableHelperText: false,
  expandableHelperTextTitle: '',
  warningText: '',
  errorText: '',
};

export const Field = ({
  fieldId = defaultArgs.fieldId,
  labelText = defaultArgs.labelText,
  helperText = defaultArgs.helperText,
  useExpandableHelperText = defaultArgs.expandableHelperText,
  expandableHelperTextTitle = defaultArgs.expandableHelperTextTitle,
  //   warningText = defaultArgs.warningText,
  //   errorText = defaultArgs.errorText,
}) => {
  let helperTextMarkup = '';

  if (helperText && !useExpandableHelperText) {
    helperTextMarkup = `<div class="rvo-form-field__helper-text">${helperText}</div>`;
  } else if (helperText && useExpandableHelperText) {
    helperTextMarkup = `<div class="rvo-form-field__helper-text"><details class="rvo-expandable-text"><summary class="rvo-expandable-text__summary">${expandableHelperTextTitle}</summary><span class="rvo-expandable-text__details">${helperText}</span></details></div>`;
  }

  return `<div class="rvo-form-field">
  <label class="rvo-form-field__label" for="${fieldId}"><span class="rvo-form-field__label-text">${labelText}</span>${helperTextMarkup}</label>
  <input id="${fieldId}" class="utrecht-textbox utrecht-textbox--html-input" value=""></input>
</fieldset>`;
};
