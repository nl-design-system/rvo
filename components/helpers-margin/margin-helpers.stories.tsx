import type { Meta, StoryObj } from '@storybook/react';
import { MarginHelpers } from './src/template';

const meta: Meta<typeof MarginHelpers> = {
  title: 'Componenten/Helper classes/Margin',
  component: MarginHelpers,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'helpers-margin',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MarginHelpers>;

export const Default: Story = { name: 'Margin' };
