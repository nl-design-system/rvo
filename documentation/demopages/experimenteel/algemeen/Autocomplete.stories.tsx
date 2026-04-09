import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Autocomplete from './Autocomplete';

export default {
  title: "Pagina's/Experimenteel/Algemeen/Autocomplete",
  component: Autocomplete,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Autocomplete>;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = { name: 'Autocomplete' };
