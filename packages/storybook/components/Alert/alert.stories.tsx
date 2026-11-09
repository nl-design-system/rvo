import { Alert } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Alert',
  component: Alert,
  argTypes: {
    kind: {
      options: ['info', 'warning', 'error', 'success'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'info' | 'warning' | 'error' | 'success'",
        },
        defaultValue: {
          summary: "'info'",
        },
      },
    },
    heading: {
      control: 'text',
    },
    closable: {
      control: 'boolean',
    },
    padding: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
        },
        defaultValue: {
          summary: "'md'",
        },
      },
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
    children: `This is an example of an alert, with a <a href="#" class="rvo-link rvo-link--lintblauw">link</a> inside.`,
    closable: false,
    padding: 'md',
  },
  name: 'Basis Component',
};

export const Kinds: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert {...args} kind="info">
        "Info Alert"
      </Alert>
      <Alert {...args} kind="warning">
        "Warning Alert"
      </Alert>
      <Alert {...args} kind="error">
        "Error Alert"
      </Alert>
      <Alert {...args} kind="success">
        "Success Alert"
      </Alert>
    </div>
  ),
  name: 'Soorten',
};

export const Padding: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert {...args} padding="xs">
        "XS Padding Alert"
      </Alert>
      <Alert {...args} padding="sm">
        "SM Padding Alert"
      </Alert>
      <Alert {...args} padding="md">
        "MD Padding Alert"
      </Alert>
      <Alert {...args} padding="lg">
        "LG Padding Alert"
      </Alert>
      <Alert {...args} padding="xl">
        "XL Padding Alert"
      </Alert>
      <Alert {...args} padding="2xl">
        "2XL Padding Alert"
      </Alert>
    </div>
  ),
  name: 'Padding',
};
