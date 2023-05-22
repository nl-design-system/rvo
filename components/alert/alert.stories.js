// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { Alert as AlertComponent, argTypes } from './template';

export default {
  title: 'Componenten/Alert/Alert',
  component: AlertComponent,
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

export const Alert = {
  render: AlertComponent.bind({}),
  name: 'Alert',
  args: defaultArgs,
};
