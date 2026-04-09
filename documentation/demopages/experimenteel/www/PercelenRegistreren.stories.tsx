import type { Meta, StoryObj } from '@storybook/react-webpack5';
import PercelenRegistreren from './PercelenRegistreren';

export default {
  title: "Pagina's/Experimenteel/www/PercelenRegistreren",
  component: PercelenRegistreren,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof PercelenRegistreren>;
type Story = StoryObj<typeof PercelenRegistreren>;

export const Default: Story = { name: 'PercelenRegistreren' };
