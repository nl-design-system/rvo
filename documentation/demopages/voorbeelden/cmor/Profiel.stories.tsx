import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Profiel from './Profiel';

const meta: Meta<typeof Profiel> = {
  title: "Pagina's/Voorbeelden/CMOR/Profiel",
  component: Profiel,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Profiel>;

export const Default: Story = { name: 'Profiel' };
