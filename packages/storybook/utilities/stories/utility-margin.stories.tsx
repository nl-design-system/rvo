import { UtilityMargin } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Utilities/Spacing/Margin',
  decorators: [
    (Story) => (
      <div className="rvo-layout-container rvo-padding--2xl">
        <h1>Utility Classes for Margins</h1>
        <Story />
      </div>
    ),
  ],
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
