import ExpandableTableRow from './template';
import TableCell from '../table-cell/template';
import Details from './details/template';

export const ExpandableTableRowExample = () => (
  <ExpandableTableRow>
    <TableCell>Cell B1</TableCell>
    <TableCell>Cell B1</TableCell>
    <TableCell>Cell B1</TableCell>
    <TableCell>Cell B1</TableCell>
    <Details>
      <h2>Details Rij B</h2>
    </Details>
  </ExpandableTableRow>
);
