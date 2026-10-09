import type { Meta, StoryObj } from '@storybook/react-webpack5';
import PerceelEdit from './PerceelEdit';

export default {
  title: "Pagina's/Experimenteel/Mijn Percelen/PerceelEdit",
  component: PerceelEdit,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof PerceelEdit>;
type Story = StoryObj<typeof PerceelEdit>;

export const Default: Story = { name: 'PerceelEdit' };
