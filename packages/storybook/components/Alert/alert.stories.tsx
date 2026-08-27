import { Alert } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Alert',
  component: Alert,
  argTypes: {
    kind: {
      options: ['info', 'warning', 'error', 'success'],
      control: { type: 'radio' },
    },
    heading: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    closable: {
      control: 'boolean',
    },
    padding: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'radio' },
    },
    children: {
      table: {
        disable: true,
      },
    },
    onClose: {
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
      link: 'alert',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=46-516&embed-host=share',
    },
  },
} satisfies Meta<typeof Alert>;
type Story = StoryObj<typeof Alert>;

export const Base: Story = {
  args: {
    kind: 'info',
    heading: '',
    content: `This is an example of an alert, with a <a href="#" class="rvo-link rvo-link--lintblauw">link</a> inside.`,
    closable: false,
    padding: 'md',
  },
  name: 'Alert',
};

export const Kinds: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert {...args} kind="info" content="Info Alert" />
      <Alert {...args} kind="warning" content="Warning Alert" />
      <Alert {...args} kind="error" content="Error Alert" />
      <Alert {...args} kind="success" content="Success Alert" />
    </div>
  ),
};

export const Padding: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert {...args} padding="xs" content="XS Padding Alert" />
      <Alert {...args} padding="sm" content="SM Padding Alert" />
      <Alert {...args} padding="md" content="MD Padding Alert" />
      <Alert {...args} padding="lg" content="LG Padding Alert" />
      <Alert {...args} padding="xl" content="XL Padding Alert" />
      <Alert {...args} padding="2xl" content="2XL Padding Alert" />
    </div>
  ),
};
