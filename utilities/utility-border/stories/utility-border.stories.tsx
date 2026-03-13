import { UtilityBorder } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Utilities/Colors/Border-color',
  component: UtilityBorder,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-border',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=605-19508&embed-host=share',
    },
  },
} satisfies Meta<typeof UtilityBorder>;
type Story = StoryObj<typeof UtilityBorder>;

export const Default: Story = { name: 'Border-color' };
