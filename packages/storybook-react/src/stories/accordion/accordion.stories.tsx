import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Accordion, argTypes } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/accordion/defaultArgs';

const meta: Meta<typeof Accordion> = {
  title: 'Componenten/Accordion',
  component: Accordion,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'accordion',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5155-13404&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Accordion',
};
