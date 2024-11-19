import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { ScrollableContent } from './src/template';

const meta: Meta<typeof ScrollableContent> = {
  title: 'Componenten/Scrollable content',
  component: ScrollableContent,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'scrollable-content',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ScrollableContent>;

export const Default: Story = { args: { ...defaultArgs, useStyleAttribute: true }, name: 'Scrollable content' };
