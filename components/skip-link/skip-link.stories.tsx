import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { SkipLink } from './src/template';

const meta: Meta<typeof SkipLink> = {
  title: 'Componenten/Skip link',
  component: SkipLink,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'skip-link',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-5325&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = { args: defaultArgs, name: 'Skip link' };
