import type { Meta, StoryObj } from '@storybook/react';
import ScreenshotsUitgangspositie from './ScreenshotsUitgangspositie';

const meta: Meta<typeof ScreenshotsUitgangspositie> = {
  title: "Demo pagina's/Mijn Percelen/Screenshots Uitgangspositie",
  component: ScreenshotsUitgangspositie,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ScreenshotsUitgangspositie>;

export const Default: Story = { name: 'Screenshots Uitgangspositie' };
