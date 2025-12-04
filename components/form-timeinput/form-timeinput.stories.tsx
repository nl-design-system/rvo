import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { TimeInput } from './src/template';

const meta: Meta<typeof TimeInput> = {
  title: 'Componenten/Time input',
  component: TimeInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-timeinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-2196&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TimeInput>;

export const Default: Story = { args: defaultArgs, name: 'Time input' };
