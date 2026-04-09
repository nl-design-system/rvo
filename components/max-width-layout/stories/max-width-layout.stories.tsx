import { MaxWidthLayout } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/max-width-layout/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Layout/Max width layout',
  component: MaxWidthLayout,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'max-width-layout',
    },
  },
} satisfies Meta<typeof MaxWidthLayout>;
type Story = StoryObj<typeof MaxWidthLayout>;

export const Default: Story = { args: defaultArgs, name: 'Max width layout' };
