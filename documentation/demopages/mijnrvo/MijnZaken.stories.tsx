import type { Meta, StoryObj } from '@storybook/react';
import MijnZaken from './MijnZaken';

const meta: Meta<typeof MijnZaken> = {
  title: "Demo pagina's/Mijn RVO/Mijn zaken",
  component: MijnZaken,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MijnZaken>;

export const Default: Story = { name: 'Mijn zaken' };
