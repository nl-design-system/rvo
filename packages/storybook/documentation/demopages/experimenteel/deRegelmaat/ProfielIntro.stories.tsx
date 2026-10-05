import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ProfielIntro from './ProfielIntro';

export default {
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
} satisfies Meta<typeof ProfielIntro>;
type Story = StoryObj<typeof ProfielIntro>;

export const Default: Story = { name: 'Profiel intro' };
