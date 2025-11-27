import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Checkbox } from './src/template';

const meta: Meta<typeof Checkbox> = {
  title: 'Componenten/Checkbox',
  component: Checkbox,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-checkbox',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=131-3042&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: defaultArgs, name: 'Checkbox' };
