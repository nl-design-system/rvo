import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Hero } from './template';

const meta: Meta<typeof Hero> = {
  title: 'Componenten/Hero',
  component: Hero,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'hero',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Hero',
};
