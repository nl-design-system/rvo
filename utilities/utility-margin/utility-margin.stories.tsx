import type { Meta, StoryObj } from '@storybook/react';
import { UtilityMargin } from './src/template';

const meta: Meta<typeof UtilityMargin> = {
  title: 'Utilities/Spacing/Margin',
  component: UtilityMargin,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-margin',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UtilityMargin>;

export const Default: Story = { name: 'Margin' };
