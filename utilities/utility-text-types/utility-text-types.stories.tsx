import type { Meta, StoryObj } from '@storybook/react';
import { UtilityTextTypes } from './src/template';

const meta: Meta<typeof UtilityTextTypes> = {
  title: 'Utilities/Typografie/Text-types',
  component: UtilityTextTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-text-types',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UtilityTextTypes>;

export const Default: Story = { name: 'Text-types' };
