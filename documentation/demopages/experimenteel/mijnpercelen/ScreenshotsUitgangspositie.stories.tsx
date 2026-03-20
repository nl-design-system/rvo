import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ScreenshotsUitgangspositie from './ScreenshotsUitgangspositie';

export default {
  title: "Pagina's/Experimenteel/Mijn Percelen/Screenshots Uitgangspositie",
  component: ScreenshotsUitgangspositie,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ScreenshotsUitgangspositie>;
type Story = StoryObj<typeof ScreenshotsUitgangspositie>;

export const Default: Story = { name: 'Screenshots Uitgangspositie' };
