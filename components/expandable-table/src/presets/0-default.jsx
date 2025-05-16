import { defaultArgs } from '../defaultArgs';
import ExpandableTable from '../template';

export default (
  <ExpandableTable uxpId="expandableTable" {...defaultArgs}>
    {defaultArgs.children}
  </ExpandableTable>
);
