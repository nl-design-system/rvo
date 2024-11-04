import TabItem from '../tab-item/template';
import Tabs from '../template';

export default (
  <Tabs uxpId="tabs" activeTab={0}>
    <TabItem uxpId="tabItem1" label="Tab item 1" href="#tab-2" selected={true} />
    <TabItem uxpId="tabItem2" label="Tab item 2" href="#tab-2" />
  </Tabs>
);
