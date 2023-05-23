import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { FormLayout } from './template';

const meta: Meta<typeof FormLayout> = {
  title: 'Componenten/Form/Form layout',
  component: FormLayout,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-layout',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FormLayout>;

export const Default: Story = { args: defaultArgs, name: 'Form layout' };
