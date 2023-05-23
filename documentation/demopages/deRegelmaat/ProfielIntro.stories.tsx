import type { Meta, StoryObj } from '@storybook/react';
import ProfielIntro from './ProfielIntro';

const meta: Meta<typeof ProfielIntro> = {
  title: "Demo pagina's/de Regelmaat/Profiel intro",
  component: ProfielIntro,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProfielIntro>;

export const Default: Story = { name: 'Profiel intro' };
