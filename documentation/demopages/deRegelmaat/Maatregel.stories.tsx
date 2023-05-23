import type { Meta, StoryObj } from '@storybook/react';
import Maatregel from './Maatregel';

const meta: Meta<typeof Maatregel> = {
  title: "Demo pagina's/de Regelmaat/Maatregel",
  component: Maatregel,
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

type Story = StoryObj<typeof Maatregel>;

export const Default: Story = { name: 'Maatregel' };
