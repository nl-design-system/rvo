import { ScrollableContent } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/scrollable-content/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
