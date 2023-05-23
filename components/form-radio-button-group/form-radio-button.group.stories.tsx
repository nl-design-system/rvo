import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { RadioButtonGroup } from './template';

const meta: Meta<typeof RadioButtonGroup> = {
  title: 'Componenten/Form/Radio button group',
  component: RadioButtonGroup,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-radio-button-group',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButtonGroup>;

export const Default: Story = { args: defaultArgs, name: 'Radio button group' };
