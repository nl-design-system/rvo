import type { Meta, StoryObj } from '@storybook/react-webpack5';
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
};

const meta: Meta<typeof ExpandableTable> = {
  title: 'Experimentele Componenten/ExpandableTable',
  component: ExpandableTable,
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
  name: 'Expandable Table',
  args: defaultArgs,
};
