import { RadioButtonGroup } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-radio-button-group/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Radio button group',
  component: RadioButtonGroup,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-radio-button-group',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=450-11252&embed-host=share',
    },
  },
} satisfies Meta<typeof RadioButtonGroup>;
type Story = StoryObj<typeof RadioButtonGroup>;

export const Default: Story = { args: defaultArgs, name: 'Radio button group' };
