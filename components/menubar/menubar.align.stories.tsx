import { defaultArgs } from './defaultArgs';
import { argTypes, MenuBar } from './template';

export default {
  title: 'Componenten/Menubar/Align to right',
  component: MenuBar,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'menubar',
    },
  },
};

export const MenuItemAlignment = {
  render: MenuBar.bind({}),
  name: 'Align to right',
  args: defaultArgs,
};
