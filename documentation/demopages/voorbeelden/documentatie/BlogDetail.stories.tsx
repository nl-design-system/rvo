/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import BlogDetail from './BlogDetail';

const meta: Meta<typeof BlogDetail> = {
  title: "Pagina's/Voorbeelden/Documentatie/Blog detail",
  component: BlogDetail,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof BlogDetail>;

export const Default: Story = { name: 'Blog detail' };
