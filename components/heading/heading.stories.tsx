import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Heading } from './template';

const meta: Meta<typeof Heading> = {
  title: 'Componenten/Heading',
  component: Heading,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'heading',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = { args: defaultArgs, name: 'Heading' };
