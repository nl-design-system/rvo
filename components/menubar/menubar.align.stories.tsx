import { defaultArgs } from './src/defaultArgs';
import { argTypes, MenuBar } from './src/template';

export default {
  title: 'Componenten/Menubar/Align to right',
  component: MenuBar,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
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
