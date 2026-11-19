import type { Meta, StoryObj } from '@storybook/react-webpack5';
import StelJeVraag from './StelJeVraag';

export default {
  title: "Pagina's/Voorbeelden/www/Stel je vraag",
  component: StelJeVraag,
  // Hidden from the sidebar, only reachable through a direct link
  tags: ['!dev'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof StelJeVraag>;
type Story = StoryObj<typeof StelJeVraag>;

export const Default: Story = { name: 'Stel je vraag' };
