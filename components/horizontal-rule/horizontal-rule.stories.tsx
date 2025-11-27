import type { Meta, StoryObj } from '@storybook/react';
import { Hr } from './src/template';

const meta: Meta<typeof Hr> = {
  title: 'Componenten/Horizontal rule',
  component: Hr,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'horizontal-rule',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-2211&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Hr>;

export const Default: Story = { name: 'Horizontal rule' };
