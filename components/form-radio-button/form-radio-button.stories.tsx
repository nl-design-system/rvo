import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { RadioButton } from './template';

const meta: Meta<typeof RadioButton> = {
  title: 'Componenten/Form/Radio button',
  component: RadioButton,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-radio-button',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = { args: defaultArgs, name: 'Radio button' };
