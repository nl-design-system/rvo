import type { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterColumnInterface, FooterInterface, FooterItemInterface } from './src/template';
import Icon from '../icon/src/template';

const defaultFooterMenu: FooterColumnInterface[] = [
  {
    label: 'RVO',
    orientation: 'horizontal',
    items: [
      { content: <Icon icon="home" size="2xl" color="wit" />, link: '#' },
      { content: <Icon icon="tekstballon-met-hart" size="2xl" color="wit" />, link: '#' },
      { content: <Icon icon="computer" size="2xl" color="wit" />, link: '#' },
      { content: <Icon icon="drone" size="2xl" color="wit" />, link: '#' },
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

const defaultSecondaryFooterMenu: FooterItemInterface[] = [
  { content: 'Contact', link: 'https://www.rvo.nl/onderwerpen/contact' },
  { content: 'Privacy', link: 'https://www.rvo.nl/onderwerpen/privacy' },
  { content: 'Cookies en anti-spam', link: 'https://www.rvo.nl/onderwerpen/cookies' },
  { content: 'Toegankelijkheid', link: 'https://www.rvo.nl/onderwerpen/toegankelijkheid' },
  { content: 'Proclaimer', link: 'https://www.rvo.nl/onderwerpen/proclaimer' },
  { content: 'Kwetsbaarheid melden', link: 'https://www.rvo.nl/onderwerpen/kwetsbaarheid' },
];

const defaultArgs: FooterInterface = {
  primaryMenu: defaultFooterMenu,
  secondaryMenu: defaultSecondaryFooterMenu,
  maxWidth: 'lg',
  payOff: 'We helpen u graag vooruit!',
};

export const argTypes = {
  primaryMenu: {
    type: {
      name: 'array',
      required: true,
    },
  },
  secondaryMenu: {
    type: {
      name: 'array',
      required: true,
    },
  },
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  payOff: {
    type: {
      name: 'string',
      required: false,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

const meta: Meta<typeof Footer> = {
  title: 'Componenten/Footer',
  component: Footer,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'footer',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = { args: defaultArgs, name: 'Footer' };
