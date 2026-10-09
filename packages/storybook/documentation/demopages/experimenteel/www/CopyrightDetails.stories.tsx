import type { Meta, StoryObj } from '@storybook/react-webpack5';
import CopyrightDetails from './CopyrightDetails';

export default {
  title: "Pagina's/Experimenteel/www/Copyright Details",
  component: CopyrightDetails,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof CopyrightDetails>;
type Story = StoryObj<typeof CopyrightDetails>;

export const Default: Story = { name: 'Copyright Details' };
