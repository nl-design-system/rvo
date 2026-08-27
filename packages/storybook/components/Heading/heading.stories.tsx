import { Heading } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Heading',
  component: Heading,
  args: { type: 'h1', children: 'Heading' },
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    noMargins: {
      control: 'boolean',
    },
    fontWeightNormal: {
      control: 'boolean',
    },
    showIcon: {
      options: ['no', 'before', 'after'],
      control: { type: 'select' },
    },
    icon: {
      control: 'text',
    },
    children: {
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
      link: 'heading',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=107-1382&embed-host=share',
    },
  },
} satisfies Meta<typeof Heading>;
type Story = StoryObj<typeof Heading>;

export const Base: Story = {};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Heading type="h1">H1 Heading</Heading>
      <Heading type="h2">H2 Heading</Heading>
      <Heading type="h3">H3 Heading</Heading>
      <Heading type="h4">H4 Heading</Heading>
      <Heading type="h5">H5 Heading</Heading>
      <Heading type="h6">H6 Heading</Heading>
    </div>
  ),
};

export const HeadingIconBefore: Story = {
  name: 'Heading with Icon Before',
  render: (args) => (
    <Heading {...args} showIcon="before" icon="home">
      Heading with Icon before
    </Heading>
  ),
};

export const HeadingIconAfter: Story = {
  name: 'Heading with Icon After',
  render: (args) => (
    <Heading {...args} showIcon="after" icon="home">
      Heading with Icon after
    </Heading>
  ),
};
