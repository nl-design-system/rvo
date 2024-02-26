import type { Meta, StoryObj } from '@storybook/react';
import ImportGegevens from './ImportGegevens';

const meta: Meta<typeof ImportGegevens> = {
  title: "Demo pagina's/I&R/ImportGegevens",
  component: ImportGegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ImportGegevens>;

export const Default: Story = { name: 'ImportGegevens' };
