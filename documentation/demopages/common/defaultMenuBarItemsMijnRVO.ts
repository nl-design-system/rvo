import { linkTo } from '@storybook/addon-links';

export const defaultMenuBarItemsMijnRVO = [
  { label: 'Zaken', link: linkTo("Demo pagina's/Mijn RVO/Mijn zaken") },
  { label: 'Diensten', link: linkTo("Demo pagina's/Mijn RVO/Diensten") },
  { label: 'Help', link: '#' },
  { label: 'Profiel', link: linkTo("Demo pagina's/Mijn RVO/Profiel") },
  {
    label: 'Uitloggen',
    link: linkTo("Demo pagina's/Mijn RVO/Inloggen"),
    align: 'right' as const,
  },
  { label: 'English', icon: 'wereldbol' as const, link: '#', align: 'right' as const },
];
