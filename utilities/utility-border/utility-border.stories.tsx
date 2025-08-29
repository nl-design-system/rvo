import type { Meta, StoryObj } from '@storybook/react';
import { UtilityBorder } from './src/template';

const meta: Meta<typeof UtilityBorder> = {
  title: 'Utilities/Colors/Border-color',
  component: UtilityBorder,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-border',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UtilityBorder>;

export const Default: Story = { name: 'Border-color' };
