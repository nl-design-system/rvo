import { StatusIndicator } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/status-indicator/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Status indicator',
  component: StatusIndicator,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'status-indicator',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-3033&embed-host=share',
    },
  },
} satisfies Meta<typeof StatusIndicator>;
type Story = StoryObj<typeof StatusIndicator>;

export const Default: Story = { args: defaultArgs, name: 'Status indicator' };
