import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ZaakClean from './ZaakClean';

export default {
  title: "Pagina's/Voorbeelden/CMOR/Zaak",
  component: ZaakClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ZaakClean>;
type Story = StoryObj<typeof ZaakClean>;

export const Default: Story = { name: 'Zaak' };
