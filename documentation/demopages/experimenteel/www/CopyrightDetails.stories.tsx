import type { Meta, StoryObj } from '@storybook/react-webpack5';
import CopyrightDetails from './CopyrightDetails';

const meta: Meta<typeof CopyrightDetails> = {
  title: "Pagina's/Experimenteel/www/Copyright Details",
  component: CopyrightDetails,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CopyrightDetails>;

export const Default: Story = { name: 'Copyright Details' };
