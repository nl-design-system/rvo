import Alert, { defaultArgs } from '../template';

export default (
  <Alert uxpId="alert" {...{ ...defaultArgs }}>
    {defaultArgs.content}
  </Alert>
);
