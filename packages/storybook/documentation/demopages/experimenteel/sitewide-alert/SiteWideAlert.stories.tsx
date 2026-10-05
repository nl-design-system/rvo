import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SiteWideAlert from './SiteWideAlert';

export default {
  title: "Pagina's/Experimenteel/Site wide Alert/Site wide Alert Content",
  component: SiteWideAlert,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof SiteWideAlert>;
type Story = StoryObj<typeof SiteWideAlert>;

export const Default: Story = { name: 'Site wide Alert Content' };
