import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DocumentenClean from './DocumentenClean';

export default {
  title: "Pagina's/Voorbeelden/CMOR/Documenten",
  component: DocumentenClean,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof DocumentenClean>;
type Story = StoryObj<typeof DocumentenClean>;

export const Default: Story = { name: 'Documenten' };
