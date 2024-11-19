import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Heading } from './src/template';

const meta: Meta<typeof Heading> = {
  title: 'Componenten/Heading',
  component: Heading,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'heading',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = { args: defaultArgs, name: 'Heading' };
