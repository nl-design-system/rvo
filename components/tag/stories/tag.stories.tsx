import { Tag } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/tag/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Tag',
  component: Tag,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'tag',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=263-3553&embed-host=share',
    },
  },
} satisfies Meta<typeof Tag>;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: defaultArgs, name: 'Tag' };
