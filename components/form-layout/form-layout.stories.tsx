import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { FormLayout } from './src/template';

const meta: Meta<typeof FormLayout> = {
  title: 'Componenten/Form/Form layout',
  component: FormLayout,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-layout',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FormLayout>;

export const Default: Story = { args: defaultArgs, name: 'Form layout' };
