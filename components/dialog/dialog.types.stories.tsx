import { argTypes, Dialog } from './src/template';

export default {
  title: 'Componenten/Dialog/Types',
  component: Dialog,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'dialog',
    },
  },
};

export const DialogCentered = {
  render: Dialog.bind({}),
  name: 'Centered dialog',

  args: {
    title: 'Dialog title',
    type: 'centered-dialog',
    content: 'Dialog content',
  },
};

export const DialogDrawerLeft = {
  render: Dialog.bind({}),
  name: 'Drawer left',

  args: {
    title: 'Dialog title',
    type: 'drawer-left',
    content: 'Dialog content',
  },
};

export const DialogDrawerRight = {
  render: Dialog.bind({}),
  name: 'Drawer right',

  args: {
    title: 'Dialog title',
    type: 'drawer-right',
    content: 'Dialog content',
  },
};
