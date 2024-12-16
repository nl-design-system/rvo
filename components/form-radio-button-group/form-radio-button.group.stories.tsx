import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { RadioButtonGroup } from './src/template';

const meta: Meta<typeof RadioButtonGroup> = {
  title: 'Componenten/Radio button group',
  component: RadioButtonGroup,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-radio-button-group',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButtonGroup>;

export const Default: Story = { args: defaultArgs, name: 'Radio button group' };
