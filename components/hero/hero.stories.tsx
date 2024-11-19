import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Hero } from './src/template';

const meta: Meta<typeof Hero> = {
  title: 'Componenten/Hero',
  component: Hero,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'hero',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: { ...defaultArgs, image: 'images/www/home.jpg' },
  name: 'Hero',
};
