import { IFooterProps } from './template';

const defaultColumns = [
  {
    label: 'RVO',
    items: [
      { content: 'Over ons', link: '#' },
      { content: 'Contact', link: '#' },
      { content: 'Pers', link: '#' },
      { content: 'Zaken regelen bij RVO', link: '#' },
    ],
  },
  {
    label: 'Over deze site',
    items: [
      { content: 'Privacy', link: '#' },
      { content: 'Cookies en anti-spam', link: '#' },
      { content: 'Toegankelijkheid', link: '#' },
      { content: 'Proclaimer', link: '#' },
    ],
  },
  {
    label: 'Snel naar',
    items: [
      { content: 'Onderwerpen A t/m Z', link: '#' },
      { content: 'Klantenpanel', link: '#' },
      { content: 'Documenten en publicaties', link: '#' },
      { content: 'Overheidspublicaties en auteursrecht', link: '#' },
    ],
  },
  {
    label: 'Blijf op de hoogte',
    items: [
      { content: 'Social media', link: '#' },
      { content: 'Higherlevel.nl ondernemersforum', link: '#' },
      { content: 'RSS', link: '#' },
      { content: 'Gratis nieuwsbrief', link: '#' },
    ],
  },
];

export const defaultArgs: IFooterProps = {
  columns: defaultColumns,
  maxWidth: 'lg',
};
