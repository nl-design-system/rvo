import Button from '../../../button/css/template';
import { defaultArgs } from '../defaultArgs';
import ButtonGroup from '../template';

export default (
  <ButtonGroup uxpId="button-group">
    {defaultArgs.buttonsLeft.map((buttonLeft, index) => (
      <Button key={index} kind={buttonLeft.kind} size={buttonLeft.size} label={buttonLeft.label} />
    ))}
    {defaultArgs.buttonsRight.map((buttonRight, index) => (
      <Button
        key={index}
        kind={buttonRight.kind}
        size={buttonRight.size}
        label={buttonRight.label}
        classNames={['rvo-button-group__align-right']}
      />
    ))}
  </ButtonGroup>
);
