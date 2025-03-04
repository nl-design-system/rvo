import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import MobileMenuBar from './src/template';

const meta: Meta<typeof MobileMenuBar> = {
  title: 'Componenten/Mobile Menubar',
  component: MobileMenuBar,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'menubar-mobile',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MobileMenuBar>;

const Container = ({ children }) => <div style={{ minHeight: '500px' }}>{children}</div>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Mobile Menubar',
  render: (args) => (
    <Container>
      <MobileMenuBar {...args} />
    </Container>
  ),
};
