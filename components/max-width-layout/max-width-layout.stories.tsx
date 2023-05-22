import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { MaxWidthLayout } from './template';

const meta: Meta<typeof MaxWidthLayout> = {
  title: 'Componenten/Layout/Max width layout',
  component: MaxWidthLayout,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'max-width-layout',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MaxWidthLayout>;

export const Default: Story = { args: defaultArgs, name: 'Max width layout' };
