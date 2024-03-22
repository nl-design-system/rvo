import type { Meta, StoryObj } from '@storybook/react';
import ExpandableArea from './ExpandableArea';

const meta: Meta<typeof ExpandableArea> = {
  title: "Demo pagina's/Algemeen/ExpandableArea",
  component: ExpandableArea,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ExpandableArea>;

export const Default: Story = { name: 'ExpandableArea' };
