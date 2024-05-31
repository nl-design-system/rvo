import type { Meta, StoryObj } from '@storybook/react';
import MijnDossier from './MijnDossier';

const meta: Meta<typeof MijnDossier> = {
  title: "Demo pagina's/CMOR/Mijn Dossier",
  component: MijnDossier,
  parameters: {
    status: {
      type: 'HIDDEN',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MijnDossier>;

export const Default: Story = { name: 'MijnDossier' };
