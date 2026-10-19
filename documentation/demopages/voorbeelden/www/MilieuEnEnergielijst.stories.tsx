import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { MilieuEnEnergielijst } from './MilieuEnEnergielijst';

export default {
  title: "Pagina's/Voorbeelden/www/Milieu- en Energielijst",
  component: MilieuEnEnergielijst,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof MilieuEnEnergielijst>;
type Story = StoryObj<typeof MilieuEnEnergielijst>;

export const Default: Story = { name: 'Milieu- en Energielijst' };
