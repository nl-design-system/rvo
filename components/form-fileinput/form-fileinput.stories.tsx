import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { FileInput } from './src/template';

const meta: Meta<typeof FileInput> = {
  title: 'Componenten/File input',
  component: FileInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-fileinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9168-59&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FileInput>;

export const Default: Story = { args: defaultArgs, name: 'File input' };
