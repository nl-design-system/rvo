import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Ondertekening from './Ondertekening';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Ondertekening",
  component: Ondertekening,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Ondertekening>;
type Story = StoryObj<typeof Ondertekening>;

export const Default: Story = { name: 'Ondertekening' };
