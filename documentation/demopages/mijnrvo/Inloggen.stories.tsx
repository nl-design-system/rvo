import type { Meta, StoryObj } from '@storybook/react';
import Inloggen from './Inloggen';

const meta: Meta<typeof Inloggen> = {
  title: "Demo pagina's/Mijn RVO/Inloggen [HIDDEN]",
  component: Inloggen,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Inloggen>;

export const Default: Story = { name: 'Inloggen [HIDDEN]' };
