import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Profiel from './Profiel';

export default {
  title: "Pagina's/Experimenteel/Mijn Percelen/Profiel",
  component: Profiel,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Profiel>;
type Story = StoryObj<typeof Profiel>;

export const Default: Story = { name: 'Profiel' };
