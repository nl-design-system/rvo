export const defaultMenuBarItemsMijnRVO = [
  { label: 'Zaken', link: 'iframe.html?args=&id=demo-pagina-s-mijn-rvo--mijn-zaken&viewMode=story' },
  { label: 'Diensten', link: 'iframe.html?args=&id=demo-pagina-s-mijn-rvo--diensten&viewMode=story' },
  { label: 'Help', link: '#' },
  { label: 'Profiel', link: 'iframe.html?args=&id=demo-pagina-s-mijn-rvo--profiel&viewMode=story' },
  {
    label: 'Uitloggen',
    link: 'iframe.html?args=&id=demo-pagina-s-mijn-rvo--inloggen&viewMode=story',
    align: 'right' as const,
  },
  { label: 'English', icon: 'wereldbol' as const, link: '#', align: 'right' as const },
];
