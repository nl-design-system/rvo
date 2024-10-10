import { defaultArgs } from '../defaultArgs';
import SidebarLayoutBar from '../sidebar-layout-bar/template';
import SidebarLayoutContent from '../sidebar-layout-content/template';
import SidebarLayout from '../template';

export default (
  <SidebarLayout uxpId="sidebarLayout" {...defaultArgs} sidebarContent={''} sidebarChildren="Sidebar" content={''}>
    <SidebarLayoutBar uxpId="sidebarLayoutBar">Sidebar</SidebarLayoutBar>
    <SidebarLayoutContent uxpId="sidebarLayoutContent">Content</SidebarLayoutContent>
  </SidebarLayout>
);
