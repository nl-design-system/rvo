import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Checkbox } from './template';

const meta: Meta<typeof Checkbox> = {
  title: 'Componenten/Form/Checkbox',
  component: Checkbox,
  args: defaultArgs,
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

export const Default: Story = { args: defaultArgs, name: 'Checkbox' };
