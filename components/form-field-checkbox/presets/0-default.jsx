import Checkbox from '../../form-checkbox/template';
import { defaultArgs } from '../defaultArgs';
import CheckboxField from '../template';

export default (
  <CheckboxField uxpId="checkboxField" {...defaultArgs}>
    <Checkbox uxpId="checkbox1" name="group" label="Value A" value="valueA" />
    <Checkbox uxpId="checkbox2" name="group" label="Value B" value="valueB" />
  </CheckboxField>
);
