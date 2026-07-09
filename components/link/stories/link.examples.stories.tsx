import { Link } from '@nl-rvo/component-library-react';
import { argTypes } from './argTypes';
import { defaultArgs } from './defaultArgs';

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
    children: 'Terug',
    icon: 'terug',
    showIcon: 'before',
  },
};

export const VerderLink = {
  render: Link.bind({}),
  name: 'Verder link',

  args: {
    ...defaultArgs,
    children: 'Verder',
    icon: 'pijl-naar-rechts',
    showIcon: 'after',
  },
};

export const ExterneLink = {
  render: Link.bind({}),
  name: 'Externe link',

  args: {
    ...defaultArgs,
    children: 'Externe link',
    icon: 'pijl-naar-rechtsboven',
    showIcon: 'after',
  },
};

export const ZonderUnderline = {
  render: Link.bind({}),
  name: 'Zonder underline',

  args: {
    ...defaultArgs,
    children: 'Verder',
    icon: 'pijl-naar-rechts',
    showIcon: 'after',
    noUnderline: true,
  },
};

export const SmallIcon = {
  render: Link.bind({}),
  name: 'Small icon',

  args: {
    ...defaultArgs,
    children: 'Verder',
    icon: 'pijl-naar-rechts',
    showIcon: 'after',
    iconSize: 'sm',
  },
};
