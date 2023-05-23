import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Icon } from './template';

const meta: Meta<typeof Icon> = {
  title: 'Componenten/Icon',
  component: Icon,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'icon',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: defaultArgs, name: 'Icon' };
