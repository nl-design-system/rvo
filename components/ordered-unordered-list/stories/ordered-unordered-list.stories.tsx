import { List } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/ordered-unordered-list/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof List> = {
  title: 'Componenten/Ordered & unordered list',
  component: List,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'list',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-3032&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = { args: defaultArgs, name: 'Ordered & unordered list' };
