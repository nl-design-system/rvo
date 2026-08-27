import { Table } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Table',
  component: Table,
  args: {
    description: 'Table description.',
    columns: [
      { label: 'Title', sortable: true, size: 'md' },
      { label: 'Text', sortable: true, sortDirection: 'ASC' },
      { label: 'Price ($)', sortable: true, type: 'numeric' },
      { label: 'Link', sortable: true },
    ],
    rows: [
      ['Title value 1', 'Text value 1', '57', '<a href="#" class="rvo-link">Link 1</a>'],
      ['Title value 2', 'Text value 2', '12.50', '<a href="#" class="rvo-link">Link 2</a>'],
      ['Title value 3', 'Text value 3', '90', '<a href="#" class="rvo-link">Link 3</a>'],
      ['Title value 4', 'Text value 4', '1.50', '<a href="#" class="rvo-link">Link 4</a>'],
    ],
  },
  argTypes: {
    description: {
      control: 'text',
    },
    columns: {
      name: 'array',
      required: true,
    },
    rows: {
      name: 'array',
      required: true,
    },
  },
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
} satisfies Meta<typeof Table>;
type Story = StoryObj<typeof Table>;

export const Base: Story = {};

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

export const Numeric = {
  render: Table.bind({}),

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
