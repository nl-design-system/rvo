import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { CheckboxGroup } from './template';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Componenten/Form/Checkbox group',
  component: CheckboxGroup,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-checkbox-group',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = { args: defaultArgs, name: 'Checkbox group' };
