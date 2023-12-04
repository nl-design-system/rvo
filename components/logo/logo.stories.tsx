import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Logo } from './template';

const meta: Meta<typeof Logo> = {
  title: 'Componenten/Logo',
  component: Logo,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'logo',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Logo',
};

export const AlternateText: Story = {
  args: { ...defaultArgs, title: 'Ministerie van Economische Zaken en Klimaat' },
  name: 'Alternatieve tekst',
};
