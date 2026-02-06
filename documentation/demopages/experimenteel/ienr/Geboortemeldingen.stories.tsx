import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Geboortemeldingen from './Geboortemeldingen';

const meta: Meta<typeof Geboortemeldingen> = {
  title: "Pagina's/Experimenteel/I&R/Geboortemeldingen",
  component: Geboortemeldingen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Geboortemeldingen>;

export const Default: Story = { name: 'Geboortemeldingen' };
