import { ActionGroup, Button, argTypes, Dialog } from '@nl-rvo/component-library-react';

export default {
  title: 'Componenten/Dialog/Examples',
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

export const DialogNonModal = {
  render: Dialog.bind({}),
  name: 'Non-modal dialog',

  args: {
    type: 'centered-dialog',
    isModal: false,
    content: 'Dialog content',
  },
};

export const DialogWithActionGroup = {
  render: Dialog.bind({}),
  name: 'With action group',

  args: {
    type: 'centered-dialog',
    backgroundColor: 'grijs-200',
    content: 'Dialog content',
    actionGroup: (
      <ActionGroup>
        <Button kind="primary">Ok</Button>
        <Button kind="secondary">Annuleren</Button>
      </ActionGroup>
    ),
  },
};
