// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, CheckboxGroup as CheckboxGroupComponent } from './template';

export default {
  title: 'Componenten/Form/Checkbox/Checkbox group',
  component: CheckboxGroupComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-checkbox-group',
    },
  },
};

export const CheckboxGroup = {
  render: CheckboxGroupComponent.bind({}),
  name: 'Checkbox group',
  args: defaultArgs,
};
