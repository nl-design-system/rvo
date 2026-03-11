import type { Meta, StoryObj } from '@storybook/react-webpack5';
import PerceelEdit from './PerceelEdit';

const meta: Meta<typeof PerceelEdit> = {
  title: "Pagina's/Experimenteel/Mijn Percelen/PerceelEdit",
  component: PerceelEdit,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PerceelEdit>;

export const Default: Story = { name: 'PerceelEdit' };
