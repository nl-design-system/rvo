// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Checkbox as CheckboxComponent } from './template';

export default {
  title: 'Componenten/Form/Checkbox/Checkbox',
  component: CheckboxComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-checkbox',
    },
  },
};

export const Checkbox = {
  render: CheckboxComponent.bind({}),
  name: 'Checkbox',
  args: defaultArgs,
};
