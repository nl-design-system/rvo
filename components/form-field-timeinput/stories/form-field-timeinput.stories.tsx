import { TimeInputField } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-field-timeinput/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Time input field',
  component: TimeInputField,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-timeinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-2196&embed-host=share',
    },
  },
} satisfies Meta<typeof TimeInputField>;
type Story = StoryObj<typeof TimeInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper time' }, name: 'Time input field' };
