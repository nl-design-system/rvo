import TableBody from '@nl-rvo/components/expandable-table/src/table-body/template';
import TableCell from '@nl-rvo/components/expandable-table/src/table-cell/template';
import TableHead from '@nl-rvo/components/expandable-table/src/table-head/template';
import TableRow from '@nl-rvo/components/expandable-table/src/table-row/template';
import { ITableProps } from './template';

export const defaultArgs: ITableProps = {
  caption: 'My table description',
  children: (
    <>
      <TableHead>
        <TableRow>
          <TableCell header>Title</TableCell>
          <TableCell header />
          <TableCell header>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow id="foo">
          <TableCell>Title value 1</TableCell>
          <TableCell aria-controls="first-title-descr" expandable>
            <h1>Expandable Titel</h1>
            <p>Meer content hier...</p>
          </TableCell>
          <TableCell>3,50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Title value 2</TableCell>
          <TableCell />
          <TableCell>4,28</TableCell>
        </TableRow>
      </TableBody>
    </>
  ),
};
