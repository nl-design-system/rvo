import { Fieldset } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-fieldset/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Fieldset',
  component: Fieldset,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-fieldset',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9151-320&embed-host=share',
    },
  },
} satisfies Meta<typeof Fieldset>;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = { args: defaultArgs, name: 'Fieldset' };
