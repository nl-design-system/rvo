import { FooterInterface } from './template';

const defaultPrimaryMenu = [
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

const defaultSecondaryMenu = [
  { content: 'Contact', link: 'https://www.rvo.nl/onderwerpen/contact' },
  { content: 'Privacy', link: 'https://www.rvo.nl/onderwerpen/privacy' },
  { content: 'Cookies en anti-spam', link: 'https://www.rvo.nl/onderwerpen/cookies' },
  { content: 'Toegankelijkheid', link: 'https://www.rvo.nl/onderwerpen/toegankelijkheid' },
  { content: 'Proclaimer', link: 'https://www.rvo.nl/onderwerpen/proclaimer' },
  { content: 'Kwetsbaarheid melden', link: 'https://www.rvo.nl/onderwerpen/kwetsbaarheid' },
];

export const defaultArgs: FooterInterface = {
  primaryMenu: defaultPrimaryMenu,
  secondaryMenu: defaultSecondaryMenu,
  maxWidth: 'lg',
  payOff: 'We helpen u graag vooruit!',
};
