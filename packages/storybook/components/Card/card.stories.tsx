import { Card } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Card',
  component: Card,
  args: {
    content: 'Card Content',
    title: 'Card Title',
  },
  argTypes: {
    background: {
      options: ['none', 'color', 'image'],
      control: { type: 'radio' },
    },
    backgroundColor: {
      if: { arg: 'background', eq: 'color' },
      options: ['', 'grijs-100'],
      control: { type: 'radio' },
    },
    backgroundImage: { if: { arg: 'background', eq: 'image' }, control: { type: 'text' } },
    padding: {
      options: ['none', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    outline: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    link: { control: { type: 'text' } },
    fullCardLink: { control: { type: 'boolean' } },
    image: { control: { type: 'text' } },
    imageSize: {
      if: { arg: 'background', eq: 'image' },
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    imageLine: {
      options: ['none', 'top-right', 'bottom-left'],
      control: { type: 'radio' },
    },
    showLinkIndicator: { control: { type: 'boolean' } },
    invertedColors: { control: { type: 'boolean' } },
    content: { control: { type: 'text' } },
    children: {
      table: {
        disable: true,
      },
    },
    onClick: {
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
      link: 'card',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-118&embed-host=share',
    },
  },
} satisfies Meta<typeof Card>;
type Story = StoryObj<typeof Card>;

const Container = ({ children }) => <div>{children}</div>;

export const Base: Story = {
  args: {},
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const Outlined: Story = {
  args: {
    outline: true,
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const FullCardLink: Story = {
  args: {
    outline: true,
  },
  render: (args) => (
    <Container>
      <Card {...args} fullCardLink link="www.google.nl" />
    </Container>
  ),
};

export const ColoredBackground: Story = {
  args: {
    outline: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Card {...args} background="color" backgroundColor="grijs-100" />
      <Card {...args} background="color" backgroundColor="hemelblauw" />
      <Card {...args} background="color" backgroundColor="lichtblauw-150" />
      <Card {...args} background="color" backgroundColor="wit" />
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    outline: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Card {...args} imageSize="sm" image="images/www/home.jpg" />
      <Card {...args} imageSize="md" image="images/www/home.jpg" />
    </div>
  ),
};
