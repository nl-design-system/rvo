import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { MaxWidthLayout } from './src/template';

const meta: Meta<typeof MaxWidthLayout> = {
  title: 'Layout/Max width layout',
  component: MaxWidthLayout,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'max-width-layout',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MaxWidthLayout>;

export const Default: Story = { args: defaultArgs, name: 'Max width layout' };
