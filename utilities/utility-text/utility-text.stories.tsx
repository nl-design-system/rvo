import type { Meta, StoryObj } from '@storybook/react';
import { UtilityText } from './src/template';

const meta: Meta<typeof UtilityText> = {
  title: 'Utilities/Colors/Text-color',
  component: UtilityText,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UtilityText>;

export const Default: Story = { name: 'Text-color' };
