import type { Meta, StoryObj } from '@storybook/react';
import TrainingModule from './TrainingModule';

const meta: Meta<typeof TrainingModule> = {
  title: "Pagina's/Voorbeelden/www/Training module",
  component: TrainingModule,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TrainingModule>;

export const Default: Story = { name: 'Training module' };
