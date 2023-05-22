import { defaultArgs } from './defaultArgs';
import { argTypes, LayoutColumnRow } from './template';

export default {
  title: 'Componenten/Layout column & row',
  component: LayoutColumnRow,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'layout-column-row',
    },
  },
};

export const RowAlignToTop = {
  render: LayoutColumnRow.bind({}),
  name: 'Row align to top',

  args: {
    ...defaultArgs,
    row: true,
    alignToTop: true,
  },
};
