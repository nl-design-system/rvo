import { ExpandableTable } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/expandable-table/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
