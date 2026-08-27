import { Button } from '@nl-rvo/component-library-react';
import { iconNames as iconOptions } from '@nl-rvo/component-library-react/src/components/icon';
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
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    showIcon: {
      options: ['no', 'before', 'after'],
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
    label: 'Button',
    disabled: false,
    onClick: () => {
      console.log('Button Clicked');
    },
  },
};

export const Kinds: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} kind="primary" label="Primary" />
      <Button {...args} kind="secondary" label="Secondary" />
      <Button {...args} kind="tertiary" label="Tertiary" />
      <Button {...args} kind="quaternary" label="Quaternary" />
      <Button {...args} kind="subtle" label="Subtle" />
      <Button {...args} kind="warning-subtle" label="Warning Subtle" />
      <Button {...args} kind="warning" label="Warning" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} size="md" label="MD Button" />
      <Button {...args} size="sm" label="SM Button" />
      <Button {...args} size="xs" label="XS Button" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} icon="home" showIcon="before" label="Icon Before" />
      <Button {...args} icon="home" showIcon="after" label="Icon After" />
    </div>
  ),
};
