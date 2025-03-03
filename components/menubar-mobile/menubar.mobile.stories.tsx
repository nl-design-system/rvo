import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/navbar-mobile/src/defaultArgs';
import MobileNavigationBar from './src/template';

const meta: Meta<typeof MobileNavigationBar> = {
  title: 'Componenten/Mobile Menubar',
  component: MobileNavigationBar,
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

type Story = StoryObj<typeof MobileNavigationBar>;

const Container = ({ children }) => <div style={{ minHeight: '500px' }}>{children}</div>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Mobile Menubar',
  render: (args) => (
    <Container>
      <MobileNavigationBar {...args} />
    </Container>
  ),
};
