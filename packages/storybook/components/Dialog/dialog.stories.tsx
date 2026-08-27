import { ActionGroup, Button, Dialog } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Dialog',
  component: Dialog,
  argTypes: {
    type: {
      options: ['centered-dialog', 'inset-inline-start', 'inset-inline-end'],
      control: { type: 'radio' },
    },
    isModal: {
      control: 'boolean',
    },
    centeredDialogSize: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    backgroundColor: {
      options: ['wit', 'grijs-200'],
      control: { type: 'radio' },
    },
    children: {
      table: {
        disable: true,
      },
    },
    actionGroup: {
      table: {
        disable: true,
      },
    },
    content: {
      control: 'text',
    },
    isOpen: {
      control: 'boolean',
    },
    onClose: {
      action: 'onClose',
    },
    className: {
      control: 'text',
    },
    ariaLabel: {
      control: 'text',
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'dialog',
    },
  },
} satisfies Meta<typeof Dialog>;
type Story = StoryObj<typeof Dialog>;

const Container = ({ children }) => <div style={{ minHeight: '500px' }}>{children}</div>;

export const Base: Story = {
  render: (args) => (
    <Container>
      <Dialog {...args}>Dialog content</Dialog>
    </Container>
  ),
};

export const WithActionGroup: Story = {
  render: Dialog.bind({}),
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

// Backgrounds
export const BackgroundWhite: Story = {
  name: 'Achtergrond Wit',
  render: (args) => (
    <Container>
      <Dialog {...args} backgroundColor="wit">
        Dialog content
      </Dialog>
    </Container>
  ),
};

export const BackgroundGrijs200: Story = {
  name: 'Achtergrond Grijs-200',
  render: (args) => (
    <Container>
      <Dialog {...args} backgroundColor="grijs-200">
        Dialog content
      </Dialog>
    </Container>
  ),
};

// Sizes
export const SizeSm: Story = {
  render: (args) => (
    <Container>
      <Dialog {...args} centeredDialogSize="sm">
        Dialog content
      </Dialog>
    </Container>
  ),
};

export const SizeMd: Story = {
  render: (args) => (
    <Container>
      <Dialog {...args} centeredDialogSize="md">
        Dialog content
      </Dialog>
    </Container>
  ),
};

export const SizeLg: Story = {
  render: (args) => (
    <Container>
      <Dialog {...args} centeredDialogSize="lg">
        Dialog content
      </Dialog>
    </Container>
  ),
};

export const SizeXl: Story = {
  render: (args) => (
    <Container>
      <Dialog {...args} centeredDialogSize="xl">
        Dialog content
      </Dialog>
    </Container>
  ),
};

// Types
export const InsetInlineStart: Story = {
  render: (args) => (
    <Container>
      <Dialog {...args} type="inset-inline-start">
        Dialog content
      </Dialog>
    </Container>
  ),
};

export const InsetInlineEnd: Story = {
  render: (args) => (
    <Container>
      <Dialog {...args} type="inset-inline-end">
        Dialog content
      </Dialog>
    </Container>
  ),
};
