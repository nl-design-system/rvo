import { argTypes, Dialog } from './src/template';

export default {
  title: 'Componenten/Dialog',
  component: Dialog,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'menubar-mobile',
    },
  },
};

export const DialogOther = {
  render: Dialog.bind({}),
  name: 'Dialog other option',

  args: {
    useIcons: true,
    iconPlacement: 'before',
    isOpen: true,
  },
};
