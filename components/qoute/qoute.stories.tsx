import type { Meta, StoryObj } from '@storybook/react';
import { IQouteProps, Qoute } from './src/template';

const defaultArgs = {
  qoute: 'Stories of imagination tend to upset those without one.',
  user: {
    name: 'Terry Pratchett',
    role: 'Author',
    image: {
      src: 'https://i0.wp.com/terrypratchett.com/management/wp-content/uploads/2022/09/Sir-terry.jpg?resize=1024%2C678&ssl=1',
      alt: 'Image of Terry Pratchett',
    },
  },
} as IQouteProps;

const meta: Meta<typeof Qoute> = {
  title: 'Componenten/Qoute',
  component: Qoute,
  args: {},
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'qoute',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Qoute>;

export const Default: Story = { args: defaultArgs, name: 'Qoute' };
