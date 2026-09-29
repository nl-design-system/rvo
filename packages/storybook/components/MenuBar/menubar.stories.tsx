import { MenuBar } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const defaultItems = [
  { label: 'Home', link: '#' },
  {
    label: 'Onderwerpen',
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
      {
        label: 'Ondernemen & Bedrijfsvoering',
        link: '#',
        icon: 'ondernemingsklimaat',
      },
      {
        label: 'Bouwen & Wonen',
        link: '#',
        icon: 'grootstedelijk',
      },
      {
        label: 'Visserij',
        link: '#',
        icon: 'vis',
      },
      {
        label: 'Gezondheid, Zorg & Welzijn',
        link: '#',
        icon: 'hart-tussen-2-uitgestoken-handen',
      },
      {
        label: 'Dier & Natuur',
        link: '#',
        icon: 'eend-zwemmend-bij-riet',
      },
    ],
  },
  {
    label: 'Subsidies en financiering',
    link: '#',
    submenu: [
      { label: 'Subsidies', link: '#' },
      { label: 'Financiering', link: '#' },
    ],
  },
  { label: 'Zoeken', link: '#', align: 'right' as const },
  { label: 'Uitloggen', link: '#', align: 'right' as const },
];

const defaultArgs = {
  size: 'md',
  items: defaultItems,
  useIcons: true,
  iconPlacement: 'before',
  horizontalRule: true,
  linkColor: 'lintblauw',
};

export default {
  title: 'Componenten/Menubar',
  component: MenuBar,
  args: defaultArgs as any,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'menubar',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=10-26&embed-host=share',
    },
  },
} satisfies Meta<typeof MenuBar>;
type Story = StoryObj<typeof MenuBar>;

export const Base: Story = { name: 'Basis Component'};
