import { defaultArgs } from './src/defaultArgs';
import { argTypes, TextInput } from './src/template';

export default {
  title: 'Componenten/Text input/Prefix Suffix',
  component: TextInput,
  argTypes: argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-textinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=1313-17903&embed-host=share',
    },
  },
};

export const Prefix = {
  render: TextInput.bind({}),
  name: 'Prefix',

  args: {
    ...defaultArgs,
    valueType: 'currency',
    prefix: '€',
  },
};

export const Suffix = {
  render: TextInput.bind({}),
  name: 'Suffix',

  args: {
    ...defaultArgs,
    valueType: 'number',
    suffix: 'm³',
  },
};
