import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TrainingModuleDetail from './TrainingModuleDetail';

export default {
  title: "Pagina's/Voorbeelden/www/Training module detailpagina",
  component: TrainingModuleDetail,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof TrainingModuleDetail>;
type Story = StoryObj<typeof TrainingModuleDetail>;

export const Default: Story = { name: 'Training module detailpagina' };
