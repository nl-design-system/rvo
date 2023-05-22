// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, LayoutColumnRow as LayoutColumnRowComponent } from './template';

export default {
  title: 'Componenten/Layout/Layout column & row',
  component: LayoutColumnRowComponent,
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

export const LayoutColumnRow = {
  render: LayoutColumnRowComponent.bind({}),
  name: 'Layout column & row',
  args: defaultArgs,
};
