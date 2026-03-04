import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/tabs/defaultArgs';
import { Tabs } from '@nl-rvo/component-library-react';

const meta: Meta<typeof Tabs> = {
  title: 'Componenten/Tabs',
  component: Tabs,
  args: defaultArgs,
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
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = { args: defaultArgs, name: 'Tabs' };
