import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { argTypes, Button } from './src/template';

const meta: Meta<typeof Button> = {
  title: 'Componenten/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const Default: Story = { args: defaultArgs, name: 'My Button' };
