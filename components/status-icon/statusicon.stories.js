// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, StatusIcon as StatusIconComponent } from './template';

export default {
  title: 'Componenten/Icon/Status Icon',
  argTypes: argTypes,
  component: StatusIconComponent,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'status-icon',
    },
  },
};

export const StatusIcon = {
  render: StatusIconComponent.bind({}),
  name: 'Status Icon',
  args: defaultArgs,
};
