import RadioButton from '../../../form-radio-button/template';
import { defaultArgs } from '../defaultArgs';
import RadioButtonField from '../template';

export default (
  <RadioButtonField uxpId="radioButtonField" {...defaultArgs}>
    <RadioButton uxpId="radio1" name="group" label="Value A" value="valueA" />
    <RadioButton uxpId="radio2" name="group" label="Value B" value="valueB" />
  </RadioButtonField>
);
