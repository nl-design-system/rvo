import { Grid } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    gap: {
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: { type: 'radio' },
    },
    columns: {
      options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
      control: { type: 'radio' },
    },
    division: {
      control: 'text',
      placeholder: '2fr 1fr',
    },
    marginEnd: {
      options: ['none', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
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
      link: 'grid',
    },
  },
} satisfies Meta<typeof Grid>;
type Story = StoryObj<typeof Grid>;

export const Default: Story = { name: 'Grid' };
