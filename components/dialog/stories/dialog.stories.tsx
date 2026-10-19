import { Dialog } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

const defaultArgs = {
  type: 'centered-dialog' as const,
  isModal: true,
  centeredDialogSize: 'md' as const,
  backgroundColor: 'wit' as const,
  isOpen: true,
  ariaLabel: 'Dialog aria label',
};

export default {
  title: 'Componenten/Dialog',
  component: Dialog,
  args: defaultArgs,
  argTypes,
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

export const Default: Story = {
  name: 'Dialog',
  render: (args) => (
    <Container>
      <Dialog {...args}>Dialog content</Dialog>
    </Container>
  ),
};
