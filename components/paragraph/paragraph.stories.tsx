import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { Paragraph } from './src/template';

const meta: Meta<typeof Paragraph> = {
  title: 'Componenten/Paragraph',
  component: Paragraph,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'paragraph',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=1274-18388&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = { args: defaultArgs, name: 'Paragraph' };
