import { IQuoteProps, Quote } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const defaultArgs = {
  quote: 'Stories of imagination tend to upset those without one.',
  user: {
    name: 'Terry Pratchett',
    role: 'Author',
    image: {
      src: 'https://i0.wp.com/terrypratchett.com/management/wp-content/uploads/2022/09/Sir-terry.jpg?resize=1024%2C678&ssl=1',
      alt: 'Image of Terry Pratchett',
    },
  },
} as IQuoteProps;

export default {
  title: 'Componenten/Quote',
  component: Quote,
  args: {},
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'quote',
    },
  },
} satisfies Meta<typeof Quote>;
type Story = StoryObj<typeof Quote>;

export const Default: Story = { args: defaultArgs, name: 'Quote' };
