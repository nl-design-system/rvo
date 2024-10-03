import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Form/Checkbox',
  component: Checkbox,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-checkbox',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { name: 'Checkbox' };
