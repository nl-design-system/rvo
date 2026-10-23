import { Feedback } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Feedback',
  component: Feedback,
  args: {
    children: 'Dit is een melding.',
    type: 'waarschuwing',
  },
  argTypes: {
    type: {
      options: ['waarschuwing', 'foutmelding'],
      control: { type: 'radio' },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-feedback',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=377-10857&embed-host=share',
    },
  },
} satisfies Meta<typeof Feedback>;
type Story = StoryObj<typeof Feedback>;

export const Base: Story = { name: 'Basis Component' };
