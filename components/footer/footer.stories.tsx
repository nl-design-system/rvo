import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Footer } from './src/template';

const meta: Meta<typeof Footer> = {
  title: 'Componenten/Footer',
  component: Footer,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'footer',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = { args: defaultArgs, name: 'Footer' };
