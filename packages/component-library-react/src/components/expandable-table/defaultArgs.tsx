import TableBody from './table-body';
import TableCell from './table-cell';
import TableHead from './table-head';
import TableRow from './table-row';
import { ITableProps } from './';

export const defaultArgs: ITableProps = {
  caption: 'My table description',
  children: (
    <>
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
          <TableCell>Title value 1</TableCell>
          <TableCell>3,50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell>Title value 2</TableCell>
          <TableCell>4,28</TableCell>
        </TableRow>
      </TableBody>
    </>
  ),
};
