import RadioButton from '../../../form-radio-button/src/template';
import { defaultArgs } from '../defaultArgs';
import RadioButtonGroup from '../template';

export default (
  <RadioButtonGroup uxpId="radioButtonGroup" {...defaultArgs}>
    <RadioButton uxpId="radio1" name="group" label="Value A" value="valueA" />
    <RadioButton uxpId="radio2" name="group" label="Value B" value="valueB" />
  </RadioButtonGroup>
);
