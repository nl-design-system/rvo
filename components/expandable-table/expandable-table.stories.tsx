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
    <ExpandableTable>
      <TableHead>
        <TableRow isHeader>
          <TableCell isHeader={true}>VZC-nummer</TableCell>
          <TableCell isHeader={true}>Laaddatum</TableCell>
          <TableCell isHeader={true}>Leverancier</TableCell>
          <TableCell isHeader={true}>Vervoerder</TableCell>
          <TableCell isHeader={true}>Afnemer</TableCell>
          <TableCell isHeader={true}>Totaal gewicht(ton)</TableCell>
          <TableCell isHeader={true}>Fosfaat / Stikstof (kg)</TableCell>
          <TableCell isHeader={true}>Analyze nummer</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>975172003</TableCell>
          <TableCell>20-06-2019</TableCell>
          <TableCell>Loos & van Dries</TableCell>
          <TableCell>L. Grave</TableCell>
          <TableCell>D. Janssen</TableCell>
          <TableCell>23,8</TableCell>
          <TableCell>1/1</TableCell>
          <TableCell>07AS00E</TableCell>
        </TableRow>
        <ExpandableTableRow>
          <TableCell>975172002</TableCell>
          <TableCell>08-05-2019</TableCell>
          <TableCell>I.D. van de Herik</TableCell>
          <TableCell>S.Siegers</TableCell>
          <TableCell>S.Siegers</TableCell>
          <TableCell>25,0</TableCell>
          <TableCell>1/1</TableCell>
          <TableCell>07AS00D</TableCell>
          <Details>
            <h2>Detail1</h2>
          </Details>
        </ExpandableTableRow>
      </TableBody>
    </ExpandableTable>
  ),
};
