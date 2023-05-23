import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Footer } from './template';

const meta: Meta<typeof Footer> = {
  title: 'Componenten/Footer',
  component: Footer,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'footer',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = { args: defaultArgs, name: 'Footer' };
