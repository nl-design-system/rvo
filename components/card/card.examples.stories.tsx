import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Card } from './template';

const meta: Meta<typeof Card> = {
  title: 'Componenten/Card/Examples',
  component: Card,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'card',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: 'Standard',
  args: {
    ...defaultArgs,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    content: 'content',
  },
};

export const Outline: Story = {
  name: 'Outline',
  args: {
    ...defaultArgs,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    outline: true,
    content: 'content',
  },
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
};

export const CardWithImageSm: Story = {
  name: 'Image (small)',
  args: {
    ...defaultArgs,
    fullCardLink: true,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    image: 'home.jpg',
    imageSize: 'sm',
    outline: true,
    content: 'content',
  },
};

export const CardWithImageMd: Story = {
  name: 'Image (big)',
  args: {
    ...defaultArgs,
    fullCardLink: true,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    image: 'home.jpg',
    imageSize: 'md',
    outline: true,
    content: 'content',
  },
};

export const ImageBackground: Story = {
  name: 'Image background',
  args: {
    ...defaultArgs,
    fullCardLink: true,
    title: 'Investeringssubsidie duurzame energie en energiebesparing',
    background: 'image',
    backgroundImage: 'mobiel.webp',
    outline: false,
    content: 'content',
    invertedColors: true,
  },
};
