import { defaultArgs } from './src/defaultArgs';
import { argTypes, Link } from './src/template';

export default {
  title: 'Componenten/Link/Voorbeelden',
  component: Link,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'link',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-5544&embed-host=share',
    },
  },
};

export const TerugLink = {
  render: Link.bind({}),
  name: 'Terug link',

  args: {
    ...defaultArgs,
    content: 'Terug',
    icon: 'terug',
    showIcon: 'before',
    iconAriaLabel: 'Ga terug',
  },
};

export const VerderLink = {
  render: Link.bind({}),
  name: 'Verder link',

  args: {
    ...defaultArgs,
    content: 'Verder',
    icon: 'pijl-naar-rechts',
    showIcon: 'after',
    iconAriaLabel: 'Ga verder',
  },
};

export const ExterneLink = {
  render: Link.bind({}),
  name: 'Externe link',

  args: {
    ...defaultArgs,
    content: 'Externe link',
    icon: 'pijl-naar-rechtsboven',
    showIcon: 'after',
    iconAriaLabel: 'Ga naar www.rvo.nl (externe link)',
  },
};

export const ZonderUnderline = {
  render: Link.bind({}),
  name: 'Zonder underline',

  args: {
    ...defaultArgs,
    content: 'Verder',
    icon: 'pijl-naar-rechts',
    showIcon: 'after',
    noUnderline: true,
    iconAriaLabel: 'Ga verder',
  },
};

export const SmallIcon = {
  render: Link.bind({}),
  name: 'Small icon',

  args: {
    ...defaultArgs,
    content: 'Verder',
    icon: 'pijl-naar-rechts',
    showIcon: 'after',
    iconSize: 'sm',
    iconAriaLabel: 'Ga verder',
  },
};
