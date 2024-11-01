import type { Meta, StoryObj } from '@storybook/react';
import ClickableRows from './ClickableRows';

const meta: Meta<typeof ClickableRows> = {
  title: "Pagina's/Voorbeelden/CMOR/Clickable Rows",
  component: ClickableRows,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ClickableRows>;

export const Default: Story = { name: 'Clickable Rows' };
