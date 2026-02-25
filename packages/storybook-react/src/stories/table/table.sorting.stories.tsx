import { argTypes, Table } from './src/template';

export default {
  title: 'Componenten/Table/Column sorting',
  component: Table,
  argTypes: argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'table',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-7705&embed-host=share',
    },
  },
};

export const AscendingSorting = {
  render: Table.bind({}),
  name: 'Ascending sorting',

  args: {
    description: 'Table with titles in ascending order.',

    rows: [
      ['Title value 1', 'Text value 1'],
      ['Title value 2', 'Text value 2'],
      ['Title value 3', 'Text value 3'],
      ['Title value 4', 'Text value 4'],
    ],

    columns: [
      {
        label: 'Title',
        sortable: true,
        sortDirection: 'ASC',
      },
      {
        label: 'Text',
      },
    ],
  },
};

export const DescendingSorting = {
  render: Table.bind({}),
  name: 'Descending sorting',

  args: {
    description: 'Table with titles in descending order.',

    rows: [
      ['Title value 1', 'Text value 1'],
      ['Title value 2', 'Text value 2'],
      ['Title value 3', 'Text value 3'],
      ['Title value 4', 'Text value 4'],
    ],

    columns: [
      {
        label: 'Title',
        sortable: true,
        sortDirection: 'DESC',
      },
      {
        label: 'Text',
      },
    ],
  },
};
