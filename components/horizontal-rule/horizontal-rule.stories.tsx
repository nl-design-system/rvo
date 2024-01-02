import type { Meta, StoryObj } from '@storybook/react';
import { Hr } from './template';

const meta: Meta<typeof Hr> = {
  title: 'Componenten/Horizontal rule',
  component: Hr,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'horizontal-rule',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Hr>;

export const Default: Story = { name: 'Horizontal rule' };
