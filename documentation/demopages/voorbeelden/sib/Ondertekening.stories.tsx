import type { Meta, StoryObj } from '@storybook/react';
import Ondertekening from './Ondertekening';

const meta: Meta<typeof Ondertekening> = {
  title: "Pagina's/Voorbeelden/SIB/Ondertekening",
  component: Ondertekening,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Ondertekening>;

export const Default: Story = { name: 'Ondertekening' };
