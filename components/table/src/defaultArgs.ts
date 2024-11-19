import { ITableProps } from './template';

export const defaultArgs: ITableProps = {
  description: 'Table description.',
  columns: [
    { label: 'Title' },
    { label: 'Text', sortable: true, sortDirection: 'ASC' },
    { label: 'Price ($)', type: 'numeric' },
    { label: 'Link' },
  ],
  rows: [
    ['Title value 1', 'Text value 1', '57', '<a href="#" class="rvo-link">Link 1</a>'],
    ['Title value 2', 'Text value 2', '12.50', '<a href="#" class="rvo-link">Link 2</a>'],
    ['Title value 3', 'Text value 3', '90', '<a href="#" class="rvo-link">Link 3</a>'],
    ['Title value 4', 'Text value 4', '1.50', '<a href="#" class="rvo-link">Link 4</a>'],
  ],
};
