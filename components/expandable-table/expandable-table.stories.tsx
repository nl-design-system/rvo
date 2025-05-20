import TableBody from '@nl-rvo/components/expandable-table/src/table-body/template';
import TableCell from '@nl-rvo/components/expandable-table/src/table-cell/template';
import TableHead from '@nl-rvo/components/expandable-table/src/table-head/template';
import TableRow from '@nl-rvo/components/expandable-table/src/table-row/template';
import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import Table, { IExpandableTableProps } from './src/template';

const argTypes = {
  caption: {
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
  title: 'Componenten/ExpandableTable',
  component: Table,
  args: defaultArgs,
  argTypes,
  parameters: {
    controls: {
      exclude: ['children'],
    },
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
  name: 'Table',
  args: defaultArgs,
  render: ({ caption, className }: IExpandableTableProps) => (
    <Table caption={caption} className={className}>
      <TableHead>
        <TableRow>
          <TableCell header />
          <TableCell header>Title</TableCell>
          <TableCell header>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow id="foo">
          <TableCell aria-controls="first-title-descr" expandable>
            <h1>Expandable Titel</h1>
            <p>Meer content hier...</p>
          </TableCell>
          <TableCell>Title value 2</TableCell>
          <TableCell>1,50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell>Title value 2</TableCell>
          <TableCell>4,28</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
