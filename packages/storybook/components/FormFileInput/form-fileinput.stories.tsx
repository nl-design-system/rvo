import { FileInput } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/File input',
  component: FileInput,
  argTypes: {
    id: { control: 'text' },
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    accept: {
      control: 'text',
    },
    multiple: {
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
      link: 'form-fileinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9168-59&embed-host=share',
    },
  },
} satisfies Meta<typeof FileInput>;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = { name: 'File input' };
