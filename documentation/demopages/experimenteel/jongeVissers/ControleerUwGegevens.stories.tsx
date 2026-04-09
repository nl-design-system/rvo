import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ControleerUwGegevens from './ControleerUwGegevens';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Controleer uw gegevens",
  component: ControleerUwGegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ControleerUwGegevens>;
type Story = StoryObj<typeof ControleerUwGegevens>;

export const Default: Story = { name: 'Controleer uw gegevens' };
