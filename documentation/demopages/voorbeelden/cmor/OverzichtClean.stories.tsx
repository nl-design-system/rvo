import type { Meta, StoryObj } from '@storybook/react-webpack5';
import OverzichtClean from './OverzichtClean';

export default {
  title: "Pagina's/Voorbeelden/CMOR/Overzicht",
  component: OverzichtClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof OverzichtClean>;
type Story = StoryObj<typeof OverzichtClean>;

export const Default: Story = { name: 'Overzicht' };
