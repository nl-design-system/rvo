import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ImportGegevens from './ImportGegevens';

const meta: Meta<typeof ImportGegevens> = {
  title: "Pagina's/Voorbeelden/I&R/ImportGegevens",
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
