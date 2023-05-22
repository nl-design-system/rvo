// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, MobileMenuBar as MobileMenuBarComponent } from './template';

export default {
  title: 'Componenten/Menubar/Mobile',
  component: MobileMenuBarComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'menubar-mobile',
    },
  },
};

export const Mobile = {
  render: MobileMenuBarComponent.bind({}),
  name: 'Mobile',

  args: {
    ...defaultArgs,
    isOpen: true,
  },
};
