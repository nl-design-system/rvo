import { Checkbox } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-checkbox/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Checkbox',
  component: Checkbox,
  args: defaultArgs,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    hover: { control: 'boolean' },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    focus: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
    helperTextId: { control: 'text' },
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
      link: 'form-checkbox',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=131-3042&embed-host=share',
    },
  },
} satisfies Meta<typeof Checkbox>;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: defaultArgs, name: 'Checkbox' };
