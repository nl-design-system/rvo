import type { Meta, StoryObj } from '@storybook/react';
import MobileMenuBar, { IMobileMenuBarProps } from './src/template';
import { IconType } from '../icon/src/types';

export const defaultArgs: IMobileMenuBarProps = {
  size: 'md',
  items: [
    { label: 'Home', icon: 'home' as IconType, link: '#' },
    {
      label: 'Mijn aanvragen',
      icon: 'publicatie' as IconType,
      link: '#',
      submenu: [
        {
          label: 'Klimaat & energie',
          link: '#',
          icon: 'milieu' as IconType,
        },
        {
          label: 'Landbouw',
          link: '#',
          icon: 'koe-met-tekst-co2' as IconType,
        },
      ],
    },
    { label: 'Nieuwe aanvraag', icon: 'plus' as IconType, link: '#' },
    { label: 'Uitloggen', icon: 'versleutelen' as IconType, link: '#', useDivider: true, align: 'right' as const },
  ],
  useIcons: true,
  iconPlacement: 'before',
  isOpen: false,
  horizontalRule: true,
};

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
