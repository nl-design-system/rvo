import { ExpandableTableRowExample } from './expandable-table-row/example';
import TableBody from './table-body/template';
import TableCell from './table-cell/template';
import TableHead from './table-head/template';
import TableRow from './table-row/template';
import { IExpandableTableProps } from './template';

export const defaultArgs: IExpandableTableProps = {
  tableDescription: 'My table description',
  children: (
    <>
      <TableHead>
        <TableRow isHeader>
          <TableCell isHeader>Kolom A</TableCell>
          <TableCell isHeader>Kolom B</TableCell>
          <TableCell isHeader>Kolom C</TableCell>
          <TableCell isHeader>Kolom D</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Cell A1</TableCell>
          <TableCell>Cell A2</TableCell>
          <TableCell>Cell A3</TableCell>
          <TableCell>Cell A4</TableCell>
        </TableRow>
        <ExpandableTableRowExample />
      </TableBody>
    </>
  ),
};
