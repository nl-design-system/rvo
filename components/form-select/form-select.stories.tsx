import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Select } from './src/template';

const meta: Meta<typeof Select> = {
  title: 'Componenten/Select',
  component: Select,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-select',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = { args: defaultArgs, name: 'Select' };
