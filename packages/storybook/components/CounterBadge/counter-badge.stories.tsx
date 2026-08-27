import { CounterBadge } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// Setup arguments for the component
const defaultArgs = { count: 20 };

export default {
  title: 'Componenten/Counter badge',
  component: CounterBadge,
  args: defaultArgs,
  argTypes: {
    count: { control: 'number' },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=6597-159&embed-host=share',
    },
  },
} satisfies Meta<typeof CounterBadge>;
type Story = StoryObj<typeof CounterBadge>;

export const Base: Story = { args: defaultArgs, name: 'Counter badge' };
