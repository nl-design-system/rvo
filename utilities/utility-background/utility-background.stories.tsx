import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { UtilityBackground } from './src/template';

const meta: Meta<typeof UtilityBackground> = {
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
};
export default meta;

type Story = StoryObj<typeof UtilityBackground>;

export const Default: Story = { name: 'Background-color' };
