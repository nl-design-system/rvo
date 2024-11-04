import type { Meta, StoryObj } from '@storybook/react';
import DocumentenClean from './DocumentenClean';

const meta: Meta<typeof DocumentenClean> = {
  title: "Pagina's/Voorbeelden/CMOR/Documenten",
  component: DocumentenClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DocumentenClean>;

export const Default: Story = { name: 'Documenten' };
