import { MenuBar } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/menubar/defaultArguments';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Menubar',
  component: MenuBar,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'menubar',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=10-26&embed-host=share',
    },
  },
} satisfies Meta<typeof MenuBar>;
type Story = StoryObj<typeof MenuBar>;

export const Default: Story = { args: defaultArgs, name: 'Menubar' };
