import { argTypes, Table } from './template';

export default {
  title: 'Componenten/Table/Column types',
  component: Table,
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

export const Default = {
  render: Table.bind({}),
  name: 'Default',

  args: {
    description: 'Table with default column types.',

    columns: [
      {
        label: 'Title',
      },
      {
        label: 'Text',
      },
    ],

    rows: [
      ['Title value 1', 'Text value 1'],
      ['Title value 2', 'Text value 2'],
      ['Title value 3', 'Text value 3'],
      ['Title value 4', 'Text value 4'],
    ],
  },
};

export const Numeric = {
  render: Table.bind({}),
  name: 'Numeric',

  args: {
    description: 'Table with a numeric price column',

    columns: [
      {
        label: 'Title',
      },
      {
        label: 'Price',
        type: 'numeric',
      },
    ],

    rows: [
      ['Title value 1', '1.50'],
      ['Title value 2', '2.75'],
      ['Title value 3', '3.25'],
      ['Title value 4', '4.80'],
    ],
  },
};
