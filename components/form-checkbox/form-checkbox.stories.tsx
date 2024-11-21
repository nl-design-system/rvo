import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Checkbox } from './src/template';

const meta: Meta<typeof Checkbox> = {
  title: 'Componenten/Form/Checkbox',
  component: Checkbox,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-checkbox',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: defaultArgs, name: 'Checkbox' };
