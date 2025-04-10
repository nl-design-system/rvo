import type { Meta, StoryObj } from '@storybook/react';
import { Hero, IHeroProps } from './src/template';

const argTypes = {
  image: {
    control: { type: 'object' },
  },
  imageAlt: {
    control: { type: 'text' },
  },
  title: {
    control: 'text',
  },
  subtitle: {
    control: 'text',
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  className: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

const defaultArgs: IHeroProps = {
  image: { src: '', alt: '' },
  title: 'Rijksdienst voor Ondernemend Nederland',
  subtitle: 'Wij helpen u graag vooruit!',
  content: '',
};

const meta: Meta<typeof Hero> = {
  title: 'Componenten/Hero',
  component: Hero,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'hero',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    ...defaultArgs,
    image: { src: 'images/www/home.jpg', alt: 'homepage image' },
    // customImage: <img src="images/www/nieuwsbrief.webp" />,
  },
  name: 'Hero',
};

export const CustomImageHero: Story = {
  args: {
    ...defaultArgs,
    image: <img src="images/www/nieuwsbrief.webp" />,
  },
  name: 'Hero - Custom image',
};
