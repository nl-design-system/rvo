import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SiteWideAlert from './SiteWideAlert';

const meta: Meta<typeof SiteWideAlert> = {
  title: "Pagina's/Experimenteel/Site wide Alert/Site wide Alert Content",
  component: SiteWideAlert,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SiteWideAlert>;

export const Default: Story = { name: 'Site wide Alert Content' };
