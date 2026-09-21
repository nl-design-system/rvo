import { Toggle } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { iconOptions } from '@nl-rvo/component-library-react';

export default {
  title: 'Componenten/Toggle',
  component: Toggle,
  argTypes: {
    showIcon: {
      options: ['no', 'before', 'after'],
      control: { type: 'radio' },
    },
    icon: {
      control: { type: 'select' },
      options: iconOptions,
    },
    showHover: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
    link: {
      control: 'text',
    },
    linkTarget: {
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'radio' },
    },
    children: {
      table: {
        disable: true,
      },
    },
    onToggle: {
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
      link: 'toggle',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-3038&embed-host=share',
    },
  },
} satisfies Meta<typeof Toggle>;
type Story = StoryObj;

export const Base: Story = { render: () => (<Toggle>Toggle</Toggle>) };