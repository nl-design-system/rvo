import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import Table from './src/template';

const argTypes = {
  tableDescription: {
    control: {
      type: 'text',
    },
  },
  className: {
    control: {
      type: 'text',
    },
  },
};

const meta: Meta<typeof Table> = {
  title: 'Experimentele Componenten/ExpandableTable',
  component: Table,
  args: defaultArgs,
  argTypes,
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
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Table',
  args: defaultArgs,
};
