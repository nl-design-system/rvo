// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Select as SelectComponent } from './template';

export default {
  title: 'Componenten/Form/Select/Select',
  component: SelectComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-select',
    },
  },
};

export const Select = {
  render: SelectComponent.bind({}),
  name: 'Select',
  args: defaultArgs,
};
