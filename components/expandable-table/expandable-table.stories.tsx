import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import ExpandableTable from './src/template';

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
  children: {
    control: {
      type: 'object',
    },
  },
};

const meta: Meta<typeof ExpandableTable> = {
  title: 'Componenten/ExpandableTable',
  component: ExpandableTable,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'expandable-table',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Expandable Table',
  args: defaultArgs,
};
