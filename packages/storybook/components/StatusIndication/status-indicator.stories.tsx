import { StatusIndicator } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Status Indicator',
  component: StatusIndicator,
  argTypes: {
    color: {
      options: ['groen', 'groen-300', 'oranje', 'oranje-300', 'rood', 'rood-300', 'hemelblauw', 'hemelblauw-300'],
      control: { type: 'select' },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'status-indicator',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-3033&embed-host=share',
    },
  },
} satisfies Meta<typeof StatusIndicator>;
type Story = StoryObj<typeof StatusIndicator>;

export const Base: Story = {
  name: 'Basis Component',
  args: { color: 'groen' },
};
