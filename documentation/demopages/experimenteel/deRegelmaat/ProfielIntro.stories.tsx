import type { Meta, StoryObj } from '@storybook/react';
import ProfielIntro from './ProfielIntro';

const meta: Meta<typeof ProfielIntro> = {
  title: "Pagina's/Experimenteel/de Regelmaat/Profiel intro",
  component: ProfielIntro,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProfielIntro>;

export const Default: Story = { name: 'Profiel intro' };
