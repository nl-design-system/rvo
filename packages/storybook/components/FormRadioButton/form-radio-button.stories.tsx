import { RadioButton } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Radio button',
  component: RadioButton,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    hover: { control: 'boolean' },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    focus: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
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
    onUpdateGroup: {
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
      link: 'form-radio-button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-7950&embed-host=share',
    },
  },
} satisfies Meta<typeof RadioButton>;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = { name: 'Radio button' };
