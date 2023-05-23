import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Header } from './template';

const meta: Meta<typeof Header> = {
  title: 'Componenten/Header',
  component: Header,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'header',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = { args: defaultArgs, name: 'Header' };
