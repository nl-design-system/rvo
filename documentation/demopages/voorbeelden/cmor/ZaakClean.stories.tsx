import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ZaakClean from './ZaakClean';

const meta: Meta<typeof ZaakClean> = {
  title: "Pagina's/Voorbeelden/CMOR/Zaak",
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
