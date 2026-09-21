import { Textarea } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Textarea',
  component: Textarea,
  argTypes: {
    id: { control: 'text' },
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },

    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    maxLength: {
      control: 'number',
    },
    maxLengthIndicator: {
      control: 'boolean',
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
    onInput: {
      table: {
        disable: true,
      },
    },
    onInvalid: {
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
      link: 'form-textarea',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5910-272&embed-host=share',
    },
  },
} satisfies Meta<typeof Textarea>;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { maxLength: 300, maxLengthIndicator: true }, name: 'Textarea' };
