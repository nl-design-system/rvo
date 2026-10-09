import { MaxWidthLayout } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Layout/Max width layout',
  component: MaxWidthLayout,
  args: {
    size: 'md',
    content: 'Deze gecentreerde layout container heeft een maximale breedte van {maxWidth}.',
    centered: true,
    inlinePadding: 'none',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    content: {
      control: 'text',
    },
    centered: {
      control: 'boolean',
    },
    inlinePadding: {
      options: ['none', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
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

export const Base: Story = {};
