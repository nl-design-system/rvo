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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=575-18745&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  name: 'Label',
  render: (args) => <Label {...args}>Field label</Label>,
};
