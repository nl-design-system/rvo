import type { Meta, StoryObj } from '@storybook/react';
import Profiel from './Profiel';

const meta: Meta<typeof Profiel> = {
  title: "Pagina's/Experimenteel/Mijn Percelen/Profiel",
  component: Profiel,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Profiel>;

export const Default: Story = { name: 'Profiel' };
