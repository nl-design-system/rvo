import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ImportGegevens from './ImportGegevens';

export default {
  title: "Pagina's/Voorbeelden/I&R/ImportGegevens",
  component: ImportGegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ImportGegevens>;
type Story = StoryObj<typeof ImportGegevens>;

export const Default: Story = { name: 'ImportGegevens' };
