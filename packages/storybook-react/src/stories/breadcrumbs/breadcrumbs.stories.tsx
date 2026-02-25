import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/breadcrumbs/defaultArgs';
import { argTypes, Breadcrumbs } from '@nl-rvo/component-library-react';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Componenten/Breadcrumbs',
  component: Breadcrumbs,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'breadcrumbs',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=373-9578&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Breadcrumbs',
};
