import { MobileMenuBar } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Mobile Menubar',
  component: MobileMenuBar,
  args: {
    size: 'md',
    items: [
      { label: 'Home', icon: 'home', link: '#' },
      {
        label: 'Mijn aanvragen',
        icon: 'publicatie',
        link: '#',
        submenu: [
          {
            label: 'Klimaat & energie',
            link: '#',
            icon: 'milieu',
          },
          {
            label: 'Landbouw',
            link: '#',
            icon: 'koe-met-tekst-co2',
          },
        ],
      },
      { label: 'Nieuwe aanvraag', icon: 'plus', link: '#' },
      { label: 'Uitloggen', icon: 'versleutelen', link: '#', useDivider: true, align: 'right' as const },
    ],
    useIcons: true,
    iconPlacement: 'before',
    isOpen: false,
    horizontalRule: true,
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'menubar-mobile',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2742-22&embed-host=share',
    },
  },
} satisfies Meta<typeof MobileMenuBar>;
type Story = StoryObj<typeof MobileMenuBar>;

const Container = ({ children }) => <div style={{ minHeight: '500px' }}>{children}</div>;

export const Base: Story = {
  render: (args) => (
    <Container>
      <MobileMenuBar {...args} />
    </Container>
  ),
};
