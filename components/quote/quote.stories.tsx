import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { IQuoteProps, Quote } from './src/template';

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

const meta: Meta<typeof Quote> = {
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
};
export default meta;

type Story = StoryObj<typeof Quote>;

export const Default: Story = { args: defaultArgs, name: 'Quote' };
