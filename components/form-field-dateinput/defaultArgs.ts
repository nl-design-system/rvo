import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as textInputDefaultArgs } from '../form-textinput/defaultArgs';
import { IDateInputFieldProps } from './template';

export const defaultArgs: IDateInputFieldProps = {
  ...{
    expandableHelperText: false,
    expandableHelperTextTitle: '',
    warningText: fieldDefaultArgs.warningText,
    errorText: fieldDefaultArgs.errorText,
  },
  ...{
    disabled: textInputDefaultArgs.disabled,
    invalid: textInputDefaultArgs.invalid,
    readOnly: textInputDefaultArgs.readOnly,
    required: textInputDefaultArgs.required,
  },
  label: 'Datum label',
  helperText: 'Bijvoorbeeld: 27 3 2007',
};
