import { UtilityMargin } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
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
} satisfies Meta<typeof UtilityMargin>;
type Story = StoryObj<typeof UtilityMargin>;

export const Default: Story = { name: 'Margin' };
