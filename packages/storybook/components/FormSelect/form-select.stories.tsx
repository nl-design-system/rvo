import { Select } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Select',
  component: Select,
  argTypes: {
    id: { control: 'text' },
    disabled: {
      control: 'boolean',
    },
    focus: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'max'],
      control: { type: 'select' },
    },
    onFocus: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    onInvalid: {
      table: {
        disable: true,
      },
    },
    defaultValue: { control: 'text' },
    value: { control: 'text' },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-select',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=136-2522&embed-host=share',
    },
  },
} satisfies Meta<typeof Select>;
type Story = StoryObj<typeof Select>;

export const Default: Story = { name: 'Select' };
