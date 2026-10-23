import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TrainingModuleTest from './TrainingModuleTest';

export default {
  title: "Pagina's/Voorbeelden/www/Training module test",
  component: TrainingModuleTest,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof TrainingModuleTest>;
type Story = StoryObj<typeof TrainingModuleTest>;

export const Default: Story = { name: 'Training module test' };
