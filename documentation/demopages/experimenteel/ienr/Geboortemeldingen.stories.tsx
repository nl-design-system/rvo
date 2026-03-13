import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Geboortemeldingen from './Geboortemeldingen';

export default {
  title: "Pagina's/Experimenteel/I&R/Geboortemeldingen",
  component: Geboortemeldingen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Geboortemeldingen>;
type Story = StoryObj<typeof Geboortemeldingen>;

export const Default: Story = { name: 'Geboortemeldingen' };
