import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Maatregel from './Maatregel';

export default {
  title: "Pagina's/Experimenteel/de Regelmaat/Maatregel",
  component: Maatregel,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof Maatregel>;
type Story = StoryObj<typeof Maatregel>;

export const Default: Story = { name: 'Maatregel' };
