import { Accordion } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/accordion/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Accordion',
  component: Accordion,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: 'PRODUCTION',
    docusaurus: {
      link: 'accordion',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5155-13404&embed-host=share',
    },
  },
} satisfies Meta<typeof Accordion>;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Accordion',
};
