import { Dialog } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/dialog/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Dialog> = {
  title: 'Componenten/Dialog',
  component: Dialog,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'dialog',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Dialog>;

const Container = ({ children }) => <div style={{ minHeight: '500px' }}>{children}</div>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Dialog',
  render: (args) => (
    <Container>
      <Dialog {...args}>Dialog content</Dialog>
    </Container>
  ),
};
