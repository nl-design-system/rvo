import { linkTo } from '@storybook/addon-links';

export const defaultMenuBarItemsMijnRVO = [
  { label: 'Zaken', onClick: linkTo("Demo pagina's/Mijn RVO/Mijn zaken") },
  { label: 'Diensten', onClick: linkTo("Demo pagina's/Mijn RVO/Diensten") },
  { label: 'Help', link: '#' },
  { label: 'Profiel', onClick: linkTo("Demo pagina's/Mijn RVO/Profiel") },
  {
    label: 'Uitloggen',
    onClick: linkTo("Demo pagina's/Mijn RVO/Inloggen"),
    align: 'right' as const,
  },
  { label: 'English', icon: 'wereldbol' as const, link: '#', align: 'right' as const },
];
