import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SiteWideAlertTop from './SiteWideAlertTop';

const meta: Meta<typeof SiteWideAlertTop> = {
  title: "Pagina's/Experimenteel/Site wide Alert/Site wide Alert Top",
  component: SiteWideAlertTop,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SiteWideAlertTop>;

export const Default: Story = { name: 'Site wide Alert Top' };
