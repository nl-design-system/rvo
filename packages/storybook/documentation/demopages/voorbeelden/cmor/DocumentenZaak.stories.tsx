import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DocumentenZaak from './DocumentenZaak';

export default {
  title: "Pagina's/Voorbeelden/CMOR/Zaak documenten",
  component: DocumentenZaak,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof DocumentenZaak>;
type Story = StoryObj<typeof DocumentenZaak>;

export const Default: Story = { name: 'Zaak documenten' };
