import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { ItemList } from './template';
import Icon from '../icon/template';
import Link from '../link/template';
import StatusIndicator from '../status-indicator/template';

const meta: Meta<typeof ItemList> = {
  title: 'Componenten/Item list/Examples',
  component: ItemList,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'item-list',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ItemList>;

const args = {
  ...defaultArgs,
  items: [
    <div key="0" className="rvo-layout-row rvo-layout-gap--sm">
      <StatusIndicator color="groen" />
      <Link href="#" color="zwart" noUnderline={true}>
        ANLb-Collectieven
      </Link>
      <span>Open voor aanvragen</span>
      <Icon color="hemelblauw" icon={'delta-naar-rechts' as any} size="sm" />
    </div>,
    <div key="1" className="rvo-layout-row rvo-layout-gap--sm">
      <StatusIndicator color="rood" />
      <Link href="#" color="zwart" noUnderline={true}>
        ISDE
      </Link>
      <span>Gesloten voor aanvragen</span>
      <Icon color="hemelblauw" icon={'delta-naar-rechts' as any} size="sm" />
    </div>,
    <div key="2" className="rvo-layout-row rvo-layout-gap--sm">
      <StatusIndicator color="rood-300" />
      <Link href="#" color="zwart" noUnderline={true}>
        Gecombineerde opgave
      </Link>
      <span>Tijdelijk gesloten voor aanvragen</span>
      <Icon color="hemelblauw" icon={'delta-naar-rechts' as any} size="sm" />
    </div>,
  ],
};

export const StatusList: Story = { args, name: 'Status list' };

//  <div key="0" className="rvo-status-indicator rvo-status-indicator--open">
//       <div className="rvo-item-list-item-title">
//         <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
//           ANLb-Collectieven
//         </a>
//       </div>
//       <div className="rvo-item-list-item-description">Open voor aanvragen</div>
//     </div>,
//     <div key="0" className="rvo-status-indicator rvo-status-indicator--closed">
//       <div className="rvo-item-list-item-title">
//         <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
//           ISDE
//         </a>
//       </div>
//       <div className="rvo-item-list-item-description">Gesloten voor aanvragen</div>
//     </div>,
//     <div key="0" className="rvo-status-indicator rvo-status-indicator--tmp-closed">
//       <div className="rvo-item-list-item-title">
//         <a href="#" className="rvo-link rvo-link--full-click rvo-link--black">
//           Gecombineerde opgave
//         </a>
//       </div>
//       <div className="rvo-item-list-item-description">Tijdelijk gesloten voor aanvragen</div>
//     </div>,
