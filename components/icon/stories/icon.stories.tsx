import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Icon } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/icon/defaultArgs';

const meta: Meta<typeof Icon> = {
  title: 'Componenten/Icon',
  component: Icon,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'icon',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=50-13&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: defaultArgs, name: 'Icon' };
