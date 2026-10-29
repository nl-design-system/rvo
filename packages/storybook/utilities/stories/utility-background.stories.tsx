import { UtilityBackground } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Utilities/Colors/Background-color',
  component: UtilityBackground,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-background',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=605-19508&embed-host=share',
    },
  },
} satisfies Meta<typeof UtilityBackground>;
type Story = StoryObj<typeof UtilityBackground>;

export const Default: Story = { name: 'Background-color' };
