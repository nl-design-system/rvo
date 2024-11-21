import Button from '../../../button/src/template';
import { defaultArgs } from '../defaultArgs';
import ActionGroup from '../template';

export default (
  <ActionGroup uxpId="button-group" {...defaultArgs}>
    <Button uxpId="button-group-button-1" label="Primary action" />
    <Button uxpId="button-group-button-2" label="Secondary action" kind="secondary" alignToRightInGroup={true} />
  </ActionGroup>
);
