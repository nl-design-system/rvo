import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Label } from './template';

const meta: Meta<typeof Label> = {
  title: 'Componenten/Form/Label',
  component: Label,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-field-label',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = { args: defaultArgs, name: 'Label' };
