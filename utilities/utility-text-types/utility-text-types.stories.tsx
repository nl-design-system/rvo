import type { Meta, StoryObj } from '@storybook/react';
import { UtilityTextTypes } from './src/template';

const meta: Meta<typeof UtilityTextTypes> = {
  title: 'Utilities/Typografie/Text-types',
  component: UtilityTextTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'utility-text-types',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=43-226&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UtilityTextTypes>;

export const Default: Story = { name: 'Text-types' };
