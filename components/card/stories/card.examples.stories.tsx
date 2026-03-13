import { Card } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/card/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

// override some values.
defaultArgs.padding = 'sm';

export default {
  title: 'Componenten/Card/Examples',
  component: Card,
  args: defaultArgs,
  argTypes,
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

export const Default: Story = {
  name: 'Standard',
  args: {
    ...defaultArgs,
    padding: 'none',
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    content: 'content',
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const Outline: Story = {
  args: {
    ...defaultArgs,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    outline: true,
    content: 'content',
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const ColoredBackground: Story = {
  name: 'Colored background',
  args: {
    ...defaultArgs,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    background: 'color',
    backgroundColor: 'grijs-100',
    outline: true,
    content: 'content',
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const InvertedColors: Story = {
  name: 'Inverted colors',
  args: {
    ...defaultArgs,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    background: 'color',
    backgroundColor: 'hemelblauw',
    outline: false,
    content: 'content',
    invertedColors: true,
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const FullCardLink: Story = {
  name: 'Full card link',
  args: {
    ...defaultArgs,
    fullCardLink: true,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    outline: true,
    content: 'content',
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const CardWithImageSm: Story = {
  name: 'Image (small)',
  args: {
    ...defaultArgs,
    background: 'image',
    fullCardLink: true,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    image: 'images/www/home.jpg',
    imageSize: 'sm',
    outline: true,
    content: 'content',
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const CardWithImageMd: Story = {
  name: 'Image (big)',
  args: {
    ...defaultArgs,
    background: 'image',
    fullCardLink: true,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    image: 'images/www/home.jpg',
    imageSize: 'md',
    outline: true,
    content: 'content',
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};

export const ImageBackground: Story = {
  name: 'Image background',
  args: {
    ...defaultArgs,
    fullCardLink: true,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    background: 'image',
    backgroundImage: 'images/www/mobiel.webp',
    outline: false,
    content: 'content',
    invertedColors: true,
  },
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};
