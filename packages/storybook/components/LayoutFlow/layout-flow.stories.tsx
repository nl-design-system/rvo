import { LayoutFlow } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Layout/Flow',
  component: LayoutFlow,
  args: {
    gap: 'md',
    row: false,
    wrap: false,
    alignItems: '',
    alignContent: '',
    justifyItems: '',
    justifyContent: '',
  },
  argTypes: {
    gap: {
      options: ['0', '3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: { type: 'radio' },
    },
    row: {
      control: 'boolean',
    },
    wrap: {
      control: 'boolean',
    },
    alignItems: {
      options: ['', 'start', 'center', 'end'],
      control: { type: 'select' },
    },
    alignContent: {
      options: ['', 'start', 'center', 'end', 'space-between'],
      control: { type: 'select' },
    },
    justifyItems: {
      options: ['', 'start', 'center', 'end'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['', 'start', 'center', 'end', 'space-between'],
      control: { type: 'select' },
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
      link: 'layout-flow',
    },
  },
} satisfies Meta<typeof LayoutFlow>;
type Story = StoryObj<typeof LayoutFlow>;

export const Base: Story = {};
