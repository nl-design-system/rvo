import { defaultArgs } from './src/defaultArgs';
import { argTypes, Fieldset as FieldsetComponent } from './src/template';

export default {
  title: 'Componenten/Fieldset/States',
  component: FieldsetComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'form-fieldset',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9151-320&embed-host=share',
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
