import Checkbox from '../../form-checkbox/template';
import { defaultArgs } from '../defaultArgs';
import CheckboxGroup from '../template';

export default (
  <CheckboxGroup uxpId="checkboxGroup" {...defaultArgs}>
    <Checkbox uxpId="checkbox1" name="group" label="Value A" value="valueA" />
    <Checkbox uxpId="checkbox2" name="group" label="Value B" value="valueB" />
  </CheckboxGroup>
);
