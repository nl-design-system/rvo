// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, MenuBar as MenuBarComponent } from './template';

export default {
  title: 'Componenten/Menubar',
  component: MenuBarComponent,
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

export const Menubar = {
  render: MenuBarComponent.bind({}),
  name: 'Menubar',
  args: defaultArgs,
};
