import type { Meta, StoryObj } from '@storybook/react';
import Buttons from './Buttons';

const meta: Meta<typeof Buttons> = {
  title: "Demo pagina's/Rijkshuisstijl Update/Buttons",
  component: Buttons,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Buttons>;

export const Default: Story = { name: 'Buttons' };
