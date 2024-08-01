import type { Meta, StoryObj } from '@storybook/react';
import ZaakClean from './ZaakClean';

const meta: Meta<typeof ZaakClean> = {
  title: "Demo pagina's/CMOR/Zaak",
  component: ZaakClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ZaakClean>;

export const Default: Story = { name: 'Zaak' };
