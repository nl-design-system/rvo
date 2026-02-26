import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { TextInput } from './src/template';

const meta: Meta<typeof TextInput> = {
  title: 'Componenten/Text input',
  component: TextInput,
  args: defaultArgs,
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
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = { args: defaultArgs, name: 'Text input' };
