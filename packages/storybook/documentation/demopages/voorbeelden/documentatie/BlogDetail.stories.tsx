/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import BlogDetail from './BlogDetail';

export default {
  title: "Pagina's/Voorbeelden/Documentatie/Blog detail",
  component: BlogDetail,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof BlogDetail>;
type Story = StoryObj<typeof BlogDetail>;

export const Default: Story = { name: 'Blog detail' };
