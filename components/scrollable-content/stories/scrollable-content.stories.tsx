import { ScrollableContent } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/scrollable-content/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Scrollable content',
  component: ScrollableContent,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'scrollable-content',
    },
  },
} satisfies Meta<typeof ScrollableContent>;
type Story = StoryObj<typeof ScrollableContent>;

export const Default: Story = { args: { ...defaultArgs, useStyleAttribute: true }, name: 'Scrollable content' };
