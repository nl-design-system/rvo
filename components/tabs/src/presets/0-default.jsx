import Tabs from '../template';

export default (
  <Tabs
    uxpId="tabs"
    ariaLabel="Tabs"
    defaultActiveTab={0}
    items={[
      {
        id: 'tab-1',
        label: 'Tab item 1',
        panel: <div>Tab 1 content</div>,
      },
      {
        id: 'tab-2',
        label: 'Tab item 2',
        panel: <div>Tab 2 content</div>,
      },
    ]}
  />
);
