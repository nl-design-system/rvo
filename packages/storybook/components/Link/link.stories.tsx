import { Link } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { iconColors, iconOptions } from '@nl-rvo/component-library-react/src/components/icon';

export default {
  title: 'Componenten/Link',
  component: Link,
  args: {
    active: false,
    callToAction: false,
    children: 'Dit is een link',
    color: 'hemelblauw',
    focus: false,
    fullContainerLink: false,
    hover: false,
    href: '#',
    icon: 'home',
    iconAriaLabel: '',
    iconColor: 'hemelblauw',
    iconSize: 'md',
    noUnderline: false,
    showIcon: 'no',
    weight: 'bold',
  },
  argTypes: {
    content: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    callToAction: {
      control: 'boolean',
    },
    color: {
      control: { type: 'select' },
      options: ['hemelblauw', 'donkerblauw', 'lintblauw', 'wit', 'zwart', 'grijs-700'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
    },
    showIcon: {
      options: ['no', 'before', 'after'],
      control: { type: 'radio' },
    },
    icon: {
      control: { type: 'select' },
      options: iconOptions,
    },
    iconSize: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    iconColor: {
      options: iconColors,
      control: { type: 'radio' },
    },
    iconAriaLabel: { control: 'text' },
    hover: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
    focus: {
      control: 'boolean',
    },
    noUnderline: {
      control: 'boolean',
    },
    fullContainerLink: {
      control: 'boolean',
    },
    children: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
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
} satisfies Meta<typeof Link>;
type Story = StoryObj<typeof Link>;

export const Base: Story = {};
