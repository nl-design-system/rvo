import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { CheckboxGroup } from './src/template';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Componenten/Checkbox group',
  component: CheckboxGroup,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-checkbox-group',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = { args: defaultArgs, name: 'Checkbox group' };
