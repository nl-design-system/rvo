import Button from '../../button/template';
import { defaultArgs } from '../defaultArgs';
import ButtonGroup from '../template';

export default (
  <ButtonGroup uxpId="button-group" {...defaultArgs}>
    <Button uxpId="button-group-button-1" label="Primary action" />
    <Button uxpId="button-group-button-2" label="Secondary action" kind="secondary" alignToRightInGroup={true} />
  </ButtonGroup>
);
