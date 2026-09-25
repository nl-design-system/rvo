import { Toggle } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { iconOptions } from '@nl-rvo/component-library-react';

export default {
  title: 'Componenten/Toggle',
  component: Toggle,
  argTypes: {
    iconPlacement: {
      options: ['-', 'left', 'right'],
      control: { type: 'select' },
      mapping: {
        '-': undefined,
      },
    },
    icon: {
      control: { type: 'select' },
      options: iconOptions,
    },
    active: {
      control: 'boolean',
    },
    link: {
      control: 'text',
    },
    linkTarget: {
      options: ['-', '_blank', '_self', '_parent', '_top'],
      control: { type: 'select' },
      mapping: {
        '-': undefined,
      },
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

export const Base: Story = { name: 'Basis Component', render: (args) => <Toggle {...args}>Toggle</Toggle> };

export const WithIcon: Story = {
  name: 'Met Icoon',
  args: { icon: 'home' },
  render: (args) => (
    <div style={{ display: 'inline-flex', gap: '1rem', flexDirection: 'column' }}>
      <Toggle iconPlacement="left" {...args}>
        Toggle met Icon links
      </Toggle>
      <Toggle iconPlacement="right" {...args}>
        Toggle met Icon rechts
      </Toggle>
    </div>
  ),
};
