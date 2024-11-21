import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { argTypes, Breadcrumbs } from './src/template';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Componenten/Breadcrumbs',
  component: Breadcrumbs,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'breadcrumbs',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = { args: defaultArgs, name: 'Breadcrumbs' };
