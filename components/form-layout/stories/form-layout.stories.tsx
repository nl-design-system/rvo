import { FormLayout } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-layout/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof FormLayout> = {
  title: 'Componenten/Form layout',
  component: FormLayout,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-layout',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-2208&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FormLayout>;

export const Default: Story = { args: defaultArgs, name: 'Form layout' };
