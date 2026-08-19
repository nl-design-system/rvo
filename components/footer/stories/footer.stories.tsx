import {
  Footer,
  FooterColumnInterface,
  FooterInterface,
  FooterItemInterface,
  Icon,
} from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const defaultFooterMenu: FooterColumnInterface[] = [
  {
    orientation: 'horizontal',
    items: [
      { content: <Icon icon="home" size="2xl" color="wit" />, link: '#' },
      { content: <Icon icon="tekstballon-met-hart" size="2xl" color="wit" />, link: '#' },
      { content: <Icon icon="netwerk" size="2xl" color="wit" />, link: '#' },
      { content: <Icon icon="rss" size="2xl" color="wit" />, link: '#' },
    ],
  },
  {
    label: 'Over RVO',
    items: [
      { content: 'Over ons', link: '#' },
      { content: 'Onze klantbeloften', link: '#' },
      { content: 'Pers', link: '#' },
      { content: 'Zaken regelen bij RVO', link: '#' },
      { content: 'english.rvo.nl', link: '#' },
    ],
  },
  {
    label: 'Snel naar',
    items: [
      { content: 'Onderwerpen A t/m Z', link: '#' },
      { content: 'Documenten en publicaties', link: '#' },
      { content: 'Open data', link: '#' },
      { content: 'projecten.rvo.nl', link: '#' },
      { content: 'europese-subsidies.rvo.nl', link: '#' },
      { content: 'Klantenpanel', link: '#' },
    ],
  },
  {
    label: 'Blijf op de hoogte',
    items: [
      { content: 'E-mailnotificaties', link: '#' },
      { content: 'Nieuwsbrieven', link: '#' },
      { content: 'Higherlevel ondernemersforum', link: '#' },
    ],
  },
];

const defaultSecondaryFooterMenu: FooterItemInterface[] = [
  { content: 'Contact', link: '#' },
  { content: 'Cookies en anti-spam', link: '#' },
  { content: 'Privacy', link: '#' },
  { content: 'Toegankelijkheid', link: '#' },
  { content: 'Proclaimer', link: '#' },
  { content: 'Kwetsbaarheid melden', link: '#' },
  { content: 'Webarchief', link: '#' },
];

const defaultArgs: FooterInterface = {
  primaryMenu: defaultFooterMenu,
  secondaryMenu: defaultSecondaryFooterMenu,
  maxWidth: 'lg',
  payOff: 'We helpen u graag vooruit!',
};

const argTypes = {
  primaryMenu: {
    control: {
      name: 'object',
      required: true,
    },
  },
  secondaryMenu: {
    control: {
      name: 'object',
      required: true,
    },
  },
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  payOff: {
    control: {
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

export default {
  title: 'Componenten/Footer',
  component: Footer,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'footer',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=287-6733&embed-host=share',
    },
  },
} satisfies Meta<typeof Footer>;
type Story = StoryObj<typeof Footer>;

export const Default: Story = { args: defaultArgs, name: 'Footer' };
