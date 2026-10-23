import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VormvrijeAanvraag from './VormvrijeAanvraag';

export default {
  title: "Pagina's/Experimenteel/WBSO/Vormvrije aanvraag",
  component: VormvrijeAanvraag,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof VormvrijeAanvraag>;
type Story = StoryObj<typeof VormvrijeAanvraag>;

export const Default: Story = { name: 'Vormvrije aanvraag' };
