import { argTypes, Dialog } from './src/template';

export default {
  title: 'Componenten/Dialog/Background colors',
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

export const DialogCenteredWhite = {
  render: Dialog.bind({}),
  name: 'Wit',

  args: {
    title: 'Dialog title',
    type: 'centered-dialog',
    backgroundColor: 'wit',
    content: 'Dialog content',
  },
};

export const DialogCenteredGray200 = {
  render: Dialog.bind({}),
  name: 'Grijs-200',

  args: {
    title: 'Dialog title',
    type: 'centered-dialog',
    backgroundColor: 'grijs-200',
    content: 'Dialog content',
  },
};
