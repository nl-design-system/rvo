import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ControleerUwGegevens from './ControleerUwGegevens';

const meta: Meta<typeof ControleerUwGegevens> = {
  title: "Pagina's/Experimenteel/Jonge Vissers/Controleer uw gegevens",
  component: ControleerUwGegevens,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ControleerUwGegevens>;

export const Default: Story = { name: 'Controleer uw gegevens' };
