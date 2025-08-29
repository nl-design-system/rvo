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
    type: 'centered-dialog',
    content: 'Dialog content',
  },
};

export const DialogDrawerLeft = {
  render: Dialog.bind({}),
  name: 'Position left',

  args: {
    type: 'position-left',
    content: 'Dialog content',
  },
};

export const DialogDrawerRight = {
  render: Dialog.bind({}),
  name: 'Position right',

  args: {
    type: 'position-right',
    content: 'Dialog content',
  },
};
