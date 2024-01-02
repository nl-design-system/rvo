import type { Meta, StoryObj } from '@storybook/react';
import { TextHelpers } from './template';

const meta: Meta<typeof TextHelpers> = {
  title: 'Componenten/Text helpers',
  component: TextHelpers,
  parameters: {
    status: {
      type: 'HIDDEN',
    },
    docusaurus: {
      link: 'text-helpers',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextHelpers>;

export const Default: Story = { name: 'Text helpers' };
