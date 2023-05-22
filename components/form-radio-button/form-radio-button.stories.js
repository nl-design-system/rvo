// import changeLog from './CHANGELOG.md';
// import markdown from './README.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, RadioButton as RadioButtonComponent } from './template';

export default {
  title: 'Componenten/Form/Radio button',
  component: RadioButtonComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-radio-button',
    },
  },
};

export const RadioButton = {
  render: RadioButtonComponent.bind({}),
  name: 'Radio button',
  args: defaultArgs,
};
