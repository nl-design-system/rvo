// import changeLog from './CHANGELOG.md';
// import markdown from './README.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Label as LabelComponent } from './template';

export default {
  title: 'Componenten/Form/Label',
  component: LabelComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-field-label',
    },
  },
};

export const Label = {
  render: LabelComponent.bind({}),
  name: 'Label',

  args: {
    ...defaultArgs,
    helperText: 'Helper text',
  },
};
