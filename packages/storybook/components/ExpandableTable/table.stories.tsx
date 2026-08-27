import { ExpandableTable } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Experimentele Componenten/ExpandableTable',
  component: ExpandableTable,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'table',
    },
  },
} satisfies Meta<typeof ExpandableTable>;

type Story = StoryObj<typeof ExpandableTable>;

export const Base: Story = {
  name: 'Expandable Table',
  args: {
    caption: 'My table description',
  },
};
