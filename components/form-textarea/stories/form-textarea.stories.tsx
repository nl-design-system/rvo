import { Textarea } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-textarea/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Textarea',
  component: Textarea,
  args: defaultArgs,
  argTypes,
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
} satisfies Meta<typeof Textarea>;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { ...defaultArgs, maxLength: 300, maxLengthIndicator: true }, name: 'Textarea' };
