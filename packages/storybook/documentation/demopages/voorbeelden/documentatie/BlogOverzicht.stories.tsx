/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import BlogOverzicht from './BlogOverzicht';

export default {
  title: "Pagina's/Voorbeelden/Documentatie/Blog overzicht",
  component: BlogOverzicht,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof BlogOverzicht>;
type Story = StoryObj<typeof BlogOverzicht>;

export const Default: Story = { name: 'Blog overzicht' };
