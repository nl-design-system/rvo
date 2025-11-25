import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { RadioButton } from './src/template';

const meta: Meta<typeof RadioButton> = {
  title: 'Componenten/Radio button',
  component: RadioButton,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-radio-button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-7950&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = { args: defaultArgs, name: 'Radio button' };
