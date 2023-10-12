import type { Meta, StoryObj } from '@storybook/react';
import LogoUpdate from './LogoUpdate';

const meta: Meta<typeof LogoUpdate> = {
  title: "Demo pagina's/Rijkshuisstijl Update/LogoUpdate",
  component: LogoUpdate,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof LogoUpdate>;

export const Default: Story = { name: 'LogoUpdate' };
