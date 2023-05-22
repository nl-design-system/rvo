// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Fieldset as FieldsetComponent } from './template';

export default {
  title: 'Componenten/Form/Fieldset',
  component: FieldsetComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-fieldset',
    },
  },
};

export const Fieldset = {
  render: FieldsetComponent.bind({}),
  name: 'Fieldset',
  args: defaultArgs,
};
