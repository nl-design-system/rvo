// import changeLog from './CHANGELOG.md';
// import markdown from './README.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Table as TableComponent } from './template';

export default {
  title: 'Componenten/Table/Table',
  component: TableComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'table',
    },
  },
};

export const Table = {
  render: TableComponent.bind({}),
  name: 'Table',
  args: defaultArgs,
};
