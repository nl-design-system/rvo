import { UtilityTextTypes } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Utilities/Typografie/Text-types',
  decorators: [
    (Story) => (
      <div className="rvo-layout-container rvo-padding--2xl">
        <h1>Utility Classes for Text Types</h1>
        <Story />
      </div>
    ),
  ],
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
} satisfies Meta<typeof UtilityTextTypes>;
type Story = StoryObj<typeof UtilityTextTypes>;

export const Default: Story = { name: 'Text-types' };
