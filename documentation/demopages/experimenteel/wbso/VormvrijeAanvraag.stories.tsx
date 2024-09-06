import type { Meta, StoryObj } from '@storybook/react';
import VormvrijeAanvraag from './VormvrijeAanvraag';

const meta: Meta<typeof VormvrijeAanvraag> = {
  title: "Pagina's/Experimenteel/WBSO/Vormvrije aanvraag",
  component: VormvrijeAanvraag,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof VormvrijeAanvraag>;

export const Default: Story = { name: 'Vormvrije aanvraag' };
