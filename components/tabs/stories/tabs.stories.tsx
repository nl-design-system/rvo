import { Tabs } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/tabs/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Tabs',
  component: Tabs,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'tabs',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=3669-2&embed-host=share',
    },
  },
} satisfies Meta<typeof Tabs>;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = { args: defaultArgs, name: 'Tabs' };
