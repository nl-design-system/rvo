import { IFieldsetProps } from './template';

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
};
