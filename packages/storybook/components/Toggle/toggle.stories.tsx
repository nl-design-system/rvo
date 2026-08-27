import { Toggle } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { iconOptions } from '@nl-rvo/component-library-react/src/components/icon';

const defaultArgs = {
  content: 'Toggle',
};

export default {
  title: 'Componenten/Toggle',
  component: Toggle,
  argTypes: {
    content: {
      control: 'text',
    },
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
    focus: {
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
type Story = StoryObj<typeof Toggle>;

export const Base: Story = { args: defaultArgs };

export const Hover = {
  render: Toggle.bind({}),

  args: {
    ...defaultArgs,
    hover: true,
    showIcon: 'before',
    icon: 'home',
  },
};

export const Active = {
  render: Toggle.bind({}),

  args: {
    ...defaultArgs,
    active: true,
    showIcon: 'before',
    icon: 'home',
  },
};

export const Focus = {
  render: Toggle.bind({}),

  args: {
    ...defaultArgs,
    focus: true,
    showIcon: 'before',
    icon: 'home',
  },
};
