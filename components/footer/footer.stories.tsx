import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Footer } from './src/template';

export const argTypes = {
  primaryMenu: {
    type: {
      name: 'array',
      required: true,
    },
  },
  secondaryMenu: {
    type: {
      name: 'array',
      required: true,
    },
  },
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  payOff: {
    type: {
      name: 'string',
      required: false,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

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
