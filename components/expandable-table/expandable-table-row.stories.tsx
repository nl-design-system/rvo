import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableTableRowExample } from './src/expandable-table-row/example';
import ExpandableTableRow from './src/expandable-table-row/template';

const meta: Meta<typeof ExpandableTableRow> = {
  title: 'Componenten/ExpandableTable/Expandable Table Row',
  component: ExpandableTableRow,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'expandable-table-row',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Expandable Table Row',
  render: () => <ExpandableTableRowExample />,
};
