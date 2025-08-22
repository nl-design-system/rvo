import type { Meta, StoryObj } from '@storybook/react';
import { UtilityBackground } from './src/template';

const meta: Meta<typeof UtilityBackground> = {
  title: 'Utilities/Colors/Background-color',
  component: UtilityBackground,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-background',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UtilityBackground>;

export const Default: Story = { name: 'Background-color' };
