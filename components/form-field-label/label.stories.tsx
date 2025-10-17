import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './src/template';

const argTypes = {
  small: {
    control: { type: 'boolean' },
  },
  type: {
    options: ['none', 'optional', 'required'],
    control: { type: 'select' },
  },
  id: {
    table: {
      disable: true,
    },
  },
  htmlFor: {
    table: {
      disable: true,
    },
  },
  parameters: {
    table: {
      disable: true,
    },
  },
};

const meta: Meta<typeof Label> = {
  title: 'Componenten/Label',
  component: Label,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-label',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  name: 'Label',
  render: (args) => <Label {...args}>Field label</Label>,
};
