import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DocumentenZaak from './DocumentenZaak';

const meta: Meta<typeof DocumentenZaak> = {
  title: "Pagina's/Voorbeelden/CMOR/Zaak documenten",
  component: DocumentenZaak,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DocumentenZaak>;

export const Default: Story = { name: 'Zaak documenten' };
