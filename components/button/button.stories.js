// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Button as ButtonComponent } from './template';

export default {
  title: 'Componenten/Button',
  component: ButtonComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'button',
    },
  },
};

export const Button = {
  render: ButtonComponent.bind({}),
  name: 'Button',
  args: defaultArgs,
};
