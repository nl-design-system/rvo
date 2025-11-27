import type { Meta, StoryObj } from '@storybook/react';
import { UtilityText } from './src/template';

const meta: Meta<typeof UtilityText> = {
  title: 'Utilities/Colors/Text-color',
  component: UtilityText,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-text',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=605-19508&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UtilityText>;

export const Default: Story = { name: 'Text-color' };
