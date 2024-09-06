import type { Meta, StoryObj } from '@storybook/react';
import KostenOpvoeren from './KostenOpvoeren';

const meta: Meta<typeof KostenOpvoeren> = {
  title: "Pagina's/Experimenteel/Jonge Vissers/Kosten opvoeren",
  component: KostenOpvoeren,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof KostenOpvoeren>;

export const Default: Story = { name: 'Kosten opvoeren' };
