import { Button } from '@nl-rvo/component-library-react';
import { iconNames as iconOptions } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Button',
  component: Button,
  argTypes: {
    kind: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'subtle', 'warning-subtle', 'warning'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'subtle' | 'warning-subtle' | 'warning'",
        },
        defaultValue: {
          summary: "'primary'",
        },
      },
    },
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'radio' },
      table: {
        type: {
          // Displays the pipe-separated allowed options under the "Type" column
          summary: "'xs' | 'sm' | 'md'",
        },
        defaultValue: {
          // Displays the initial value under the "Default" column
          summary: "'md'",
        },
      },
    },
    disabled: {
      control: 'boolean',
    },
    iconPlacement: {
      options: ['no', 'left', 'right'],
      control: { type: 'radio' },
    },
    icon: {
      control: { type: 'select' },
      options: iconOptions,
    },
    iconAriaLabel: { control: 'text' },
    fullWidth: {
      control: 'boolean',
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=46-529&embed-host=share',
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Button',
    disabled: false,
    onClick: () => {
      console.log('Button Clicked');
    },
  },
};

export const Kinds: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} kind="primary">
        Primary
      </Button>
      <Button {...args} kind="secondary">
        Secondary
      </Button>
      <Button {...args} kind="tertiary">
        Tertiary
      </Button>
      <Button {...args} kind="quaternary">
        Quaternary
      </Button>
      <Button {...args} kind="subtle">
        Subtle
      </Button>
      <Button {...args} kind="warning-subtle">
        Warning Subtle
      </Button>
      <Button {...args} kind="warning">
        Warning
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} size="md">
        MD Button
      </Button>
      <Button {...args} size="sm">
        SM Button
      </Button>
      <Button {...args} size="xs">
        XS Button
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} icon="home" iconPlacement="left">
        Icon Left
      </Button>
      <Button {...args} icon="home" iconPlacement="right">
        Icon Right
      </Button>
    </div>
  ),
};
