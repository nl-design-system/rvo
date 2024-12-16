import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Label } from './src/template';

const meta: Meta<typeof Label> = {
  title: 'Componenten/Label',
  component: Label,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-label',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = { args: defaultArgs, name: 'Label' };
