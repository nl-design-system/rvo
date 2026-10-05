import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TrainingModule from './TrainingModule';

export default {
  title: "Pagina's/Voorbeelden/www/Training module",
  component: TrainingModule,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof TrainingModule>;
type Story = StoryObj<typeof TrainingModule>;

export const Default: Story = { name: 'Training module' };
