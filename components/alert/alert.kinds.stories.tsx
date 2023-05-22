import { defaultArgs } from './defaultArgs';
import { Alert, argTypes } from './template';

export default {
  title: 'Componenten/Alert/Kinds',
  component: Alert,
  argTypes: argTypes,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'alert',
    },
  },
};

export const Info = {
  render: Alert.bind({}),
  name: 'Info',
  args: {
    ...defaultArgs,
    content: 'This is an example of an info alert',
    kind: 'info',
  },
};

export const Warning = {
  render: Alert.bind({}),
  name: 'Warning',
  args: {
    ...defaultArgs,
    content: 'This is an example of a warning alert',
    kind: 'warning',
  },
};

export const Error = {
  render: Alert.bind({}),
  name: 'Error',
  args: {
    ...defaultArgs,
    content: 'This is an example of an error alert',
    kind: 'error',
  },
};

export const Success = {
  render: Alert.bind({}),
  name: 'Success',
  args: {
    ...defaultArgs,
    content: 'This is an example of a success alert',
    kind: 'success',
  },
};
