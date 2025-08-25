import type { Meta, StoryObj } from '@storybook/react';
import { UtilityPadding } from './src/template';

const meta: Meta<typeof UtilityPadding> = {
  title: 'Utilities/Spacing/Padding',
  component: UtilityPadding,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-padding',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UtilityPadding>;

export const Default: Story = { name: 'Padding' };
