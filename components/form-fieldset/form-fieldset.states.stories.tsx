import { defaultArgs } from './defaultArgs';
import { argTypes, Fieldset as FieldsetComponent } from './template';

export default {
  title: 'Componenten/Form/Fieldset/States',
  component: FieldsetComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'form-fieldset',
    },
  },
};

export const Disabled = {
  render: FieldsetComponent.bind({}),
  name: 'Disabled',

  args: {
    ...defaultArgs,
    disabled: true,
    withFields: true,
  },
};
