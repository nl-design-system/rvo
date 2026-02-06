import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArguments';
import MenuBar from './src/menubar/template';

const meta: Meta<typeof MenuBar> = {
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
};
export default meta;

type Story = StoryObj<typeof MenuBar>;

export const Default: Story = { args: defaultArgs, name: 'Menubar' };
