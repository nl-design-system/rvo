import { linkTo } from '@storybook/addon-links';

export const defaultMenuBarItemsJV = [
  {
    label: 'Terug naar Mijn RVO',
    icon: 'terug' as const,
    link: linkTo("Demo pagina's/Mijn RVO/Zaak"),
  },
  {
    label: 'Uitloggen',
    link: linkTo("Demo pagina's/Mijn RVO/Inloggen"),
    align: 'right' as const,
  },
];
