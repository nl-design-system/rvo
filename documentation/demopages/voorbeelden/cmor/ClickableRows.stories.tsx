import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ClickableRows from './ClickableRows';

export default {
  title: "Pagina's/Voorbeelden/CMOR/Clickable Rows",
  component: ClickableRows,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ClickableRows>;
type Story = StoryObj<typeof ClickableRows>;

export const Default: Story = { name: 'Clickable Rows' };
