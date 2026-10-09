import type { Meta, StoryObj } from '@storybook/react-webpack5';
import KostenOpvoeren from './KostenOpvoeren';

export default {
  title: "Pagina's/Experimenteel/Jonge Vissers/Kosten opvoeren",
  component: KostenOpvoeren,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof KostenOpvoeren>;
type Story = StoryObj<typeof KostenOpvoeren>;

export const Default: Story = { name: 'Kosten opvoeren' };
