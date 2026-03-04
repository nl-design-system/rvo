import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/link/defaultArgs';
import { Link } from '@nl-rvo/component-library-react';

const meta: Meta<typeof Link> = {
  title: 'Componenten/Link',
  component: Link,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'link',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-5544&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = { args: defaultArgs, name: 'Link' };
