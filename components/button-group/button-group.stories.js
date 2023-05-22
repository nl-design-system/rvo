// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, ButtonGroup as ButtonGroupComponent } from './template';

export default {
  title: 'Componenten/Button group/Button group',
  component: ButtonGroupComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'button-group',
    },
  },
};

export const ButtonGroup = {
  render: ButtonGroupComponent.bind({}),
  name: 'Button group',
  args: defaultArgs,
};
