import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ExpandableArea from './ExpandableArea';

export default {
  title: "Pagina's/Experimenteel/Algemeen/ExpandableArea",
  component: ExpandableArea,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ExpandableArea>;
type Story = StoryObj<typeof ExpandableArea>;

export const Default: Story = { name: 'ExpandableArea' };
