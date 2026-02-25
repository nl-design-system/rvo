import { argTypes, Dialog } from './src/template';

export default {
  title: 'Componenten/Dialog/Centered sizes',
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

export const DialogCenteredSmall = {
  render: Dialog.bind({}),
  name: 'Small',

  args: {
    type: 'centered-dialog',
    centeredDialogSize: 'sm',
    content: 'Dialog content',
  },
};

export const DialogCenteredMedium = {
  render: Dialog.bind({}),
  name: 'Medium',

  args: {
    type: 'centered-dialog',
    centeredDialogSize: 'md',
    content: 'Dialog content',
  },
};

export const DialogCenteredLarge = {
  render: Dialog.bind({}),
  name: 'Large',

  args: {
    type: 'centered-dialog',
    centeredDialogSize: 'lg',
    content: 'Dialog content',
  },
};

export const DialogCenteredExtraLarge = {
  render: Dialog.bind({}),
  name: 'Extra large',

  args: {
    type: 'centered-dialog',
    centeredDialogSize: 'xl',
    content: 'Dialog content',
  },
};
