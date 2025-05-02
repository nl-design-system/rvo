/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react';
import Details from './src/expandable-table-row/details/template';
import ExpandableTableRow from './src/expandable-table-row/template';
import TableBody from './src/table-body/template';
import TableCell from './src/table-cell/template';
import TableHead from './src/table-head/template';
import TableRow from './src/table-row/template';
import ExpandableTable from './src/template';

const argTypes = {
  className: {
    control: { type: 'text' },
  },
};

const meta: Meta<typeof ExpandableTable> = {
  title: 'Componenten/ExpandableTable',
  component: ExpandableTable,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'loader',
    },
  },
};
export default meta;

// Stories
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Expandable table',
  parameters: {},
  render: () => (
    <ExpandableTable className="test className">
      <TableHead>
        <TableRow isHeader>
          <TableCell isHeader={true}>A heading</TableCell>
          <TableCell isHeader={true}>B heading</TableCell>
          <TableCell isHeader={true}>C heading</TableCell>
          <TableCell isHeader={true}>D heading</TableCell>
          <TableCell isHeader={true}>E heading</TableCell>
          <TableCell isHeader={true}>F heading</TableCell>
          <TableCell isHeader={true}>G heading</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Cell A1</TableCell>
          <TableCell>Cell B1</TableCell>
          <TableCell>Cell C1</TableCell>
          <TableCell>Cell D1</TableCell>
          <TableCell>Cell E1</TableCell>
          <TableCell>Cell F1</TableCell>
          <TableCell>Cell G1</TableCell>
        </TableRow>
        <ExpandableTableRow>
          <TableCell>Cell A2</TableCell>
          <TableCell>Cell B2</TableCell>
          <TableCell>Cell C2</TableCell>
          <TableCell>Cell D2</TableCell>
          <TableCell>Cell E2</TableCell>
          <TableCell>Cell F2</TableCell>
          <TableCell>Cell G2</TableCell>
          <Details>
            <h2>Dit zijn details</h2>
          </Details>
        </ExpandableTableRow>
        <ExpandableTableRow>
          <TableCell>Cell A3</TableCell>
          <TableCell>Cell B3</TableCell>
          <TableCell>Cell C3</TableCell>
          <TableCell>Cell D3</TableCell>
          <TableCell>Cell E3</TableCell>
          <TableCell>Cell F3</TableCell>
          <TableCell>Cell G3</TableCell>
          <Details>
            <h2>Nog meer details</h2>
          </Details>
        </ExpandableTableRow>
      </TableBody>
    </ExpandableTable>
  ),
};
