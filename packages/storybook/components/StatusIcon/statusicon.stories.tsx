import { StatusIcon } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Icon/Status icon',
  component: StatusIcon,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'bevestiging', 'foutmelding', 'waarschuwing'],
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'status-icon',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=50-13&embed-host=share',
    },
  },
} satisfies Meta<typeof StatusIcon>;
type Story = StoryObj<typeof StatusIcon>;

export const Base: Story = {
  args: {
    type: 'bevestiging',
    size: 'sm',
    ignoreDefaultIconColor: false,
  },
};
