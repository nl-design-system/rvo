import { UtilityPadding } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
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
} satisfies Meta<typeof UtilityPadding>;
type Story = StoryObj<typeof UtilityPadding>;

export const Default: Story = { name: 'Padding' };
