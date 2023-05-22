// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, DataList as DataListComponent } from './template';

export default {
  title: 'Componenten/Data list/Data list',
  component: DataListComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'data-list',
    },
  },
};

export const DataList = {
  render: DataListComponent.bind({}),
  name: 'Data list',
  args: defaultArgs,
};
