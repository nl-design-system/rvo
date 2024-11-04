import type { Meta, StoryObj } from '@storybook/react';
import PercelenRegistreren from './PercelenRegistreren';

const meta: Meta<typeof PercelenRegistreren> = {
  title: "Pagina's/Experimenteel/www/PercelenRegistreren",
  component: PercelenRegistreren,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PercelenRegistreren>;

export const Default: Story = { name: 'PercelenRegistreren' };
