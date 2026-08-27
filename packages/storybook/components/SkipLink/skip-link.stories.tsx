import { SkipLink } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Skip link',
  component: SkipLink,
  argTypes: {
    textContent: {
      control: 'text',
    },
    anchorLink: {
      control: 'text',
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'skip-link',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-5325&embed-host=share',
    },
  },
} satisfies Meta<typeof SkipLink>;
type Story = StoryObj<typeof SkipLink>;

export const Base: Story = {
  args: {
    textContent: 'Direct naar de inhoud',
    anchorLink: '#main',
  },
};
