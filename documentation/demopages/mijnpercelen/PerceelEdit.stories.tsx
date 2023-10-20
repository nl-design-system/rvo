import type { Meta, StoryObj } from '@storybook/react';
import PerceelEdit from '../mijnpercelen/PerceelEdit';

const meta: Meta<typeof PerceelEdit> = {
  title: "Demo pagina's/Mijn Percelen/PerceelEdit",
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
