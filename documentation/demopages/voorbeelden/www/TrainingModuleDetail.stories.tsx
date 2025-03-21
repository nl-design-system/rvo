import type { Meta, StoryObj } from '@storybook/react';
import TrainingModuleDetail from './TrainingModuleDetail';

const meta: Meta<typeof TrainingModuleDetail> = {
  title: "Pagina's/Voorbeelden/www/Training module detailpagina",
  component: TrainingModuleDetail,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TrainingModuleDetail>;

export const Default: Story = { name: 'Training module detailpagina' };
