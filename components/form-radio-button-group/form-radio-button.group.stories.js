// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, RadioButtonGroup as RadioButtonGroupComponent } from './template';

export default {
  title: 'Componenten/Form/Radio button/Radio button group',
  component: RadioButtonGroupComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-radio-button-group',
    },
  },
};

export const RadioButtonGroup = {
  render: RadioButtonGroupComponent.bind({}),
  name: 'Radio button group',
  args: defaultArgs,
};
