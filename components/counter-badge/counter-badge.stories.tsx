import type { Meta, StoryObj } from '@storybook/react';
import { CounterBadge } from './src/template';

// Setup arguments for the component
const argTypes = { count: { control: 'number' } };
const defaultArgs = { count: 20 };

const meta: Meta<typeof CounterBadge> = {
  title: 'Componenten/Counter Badge',
  component: CounterBadge,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'button',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CounterBadge>;

export const Default: Story = { args: defaultArgs, name: 'Counter Badge' };
