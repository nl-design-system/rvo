import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { SkipLink } from './template';

const meta: Meta<typeof SkipLink> = {
  title: 'Componenten/Skip link',
  component: SkipLink,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'skip-link',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = { args: defaultArgs, name: 'Skip link' };
