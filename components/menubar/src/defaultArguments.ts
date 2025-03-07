import { IMenuBarProps } from './menubar/template';
import { IconType } from '../../icon/src/types';

export const defaultItems = [
  { label: 'Home', link: '#' },
  {
    label: 'Onderwerpen',
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
      {
        label: 'Ondernemen & Bedrijfsvoering',
        link: '#',
        icon: 'ondernemingsklimaat' as IconType,
      },
      {
        label: 'Bouwen & Wonen',
        link: '#',
        icon: 'grootstedelijk' as IconType,
      },
      {
        label: 'Visserij',
        link: '#',
        icon: 'vis' as IconType,
      },
      {
        label: 'Gezondheid, Zorg & Welzijn',
        link: '#',
        icon: 'hart-tussen-2-uitgestoken-handen' as IconType,
      },
      {
        label: 'Dier & Natuur',
        link: '#',
        icon: 'eend-zwemmend-bij-riet' as IconType,
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

export const defaultArgs: IMenuBarProps = {
  size: 'md',
  direction: 'horizontal',
  items: defaultItems,
  useIcons: true,
  iconPlacement: 'before',
  maxWidth: 'none',
  horizontalRule: true,
  linkColor: 'logoblauw',
  grid: true,
};
