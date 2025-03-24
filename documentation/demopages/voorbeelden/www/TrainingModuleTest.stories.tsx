import type { Meta, StoryObj } from '@storybook/react';
import TrainingModuleTest from './TrainingModuleTest';

const meta: Meta<typeof TrainingModuleTest> = {
  title: "Pagina's/Voorbeelden/www/Training module test",
  component: TrainingModuleTest,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TrainingModuleTest>;

export const Default: Story = { name: 'Training module test' };
