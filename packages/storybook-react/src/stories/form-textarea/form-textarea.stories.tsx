import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { Textarea } from './src/template';

const meta: Meta<typeof Textarea> = {
  title: 'Componenten/Textarea',
  component: Textarea,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-textarea',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5910-272&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { ...defaultArgs, maxLength: 300, maxLengthIndicator: true }, name: 'Textarea' };
