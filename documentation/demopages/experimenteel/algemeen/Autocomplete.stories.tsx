import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Autocomplete from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: "Pagina's/Experimenteel/Algemeen/Autocomplete",
  component: Autocomplete,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = { name: 'Autocomplete' };
