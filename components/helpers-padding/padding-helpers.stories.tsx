import type { Meta, StoryObj } from '@storybook/react';
import { PaddingHelpers } from './src/template';

const meta: Meta<typeof PaddingHelpers> = {
  title: 'Componenten/Helper classes/Padding',
  component: PaddingHelpers,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'helpers-padding',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PaddingHelpers>;

export const Default: Story = { name: 'Padding' };
