import { RadioButtonField } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-field-radio-button/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Radio button field',
  component: RadioButtonField,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-radio-button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=451-15347&embed-host=share',
    },
  },
} satisfies Meta<typeof RadioButtonField>;
type Story = StoryObj<typeof RadioButtonField>;

export const Default: Story = {
  args: { ...defaultArgs, helperText: 'Helper text', onChange: fn() },
  name: 'Radio button field',
};
