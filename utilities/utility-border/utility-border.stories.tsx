import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { UtilityBorder } from './src/template';

const meta: Meta<typeof UtilityBorder> = {
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
};
export default meta;

type Story = StoryObj<typeof UtilityBorder>;

export const Default: Story = { name: 'Border-color' };
