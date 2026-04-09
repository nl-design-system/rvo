import { Checkbox } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-checkbox/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Checkbox',
  component: Checkbox,
  args: defaultArgs,
  argTypes,
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
} satisfies Meta<typeof Checkbox>;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: defaultArgs, name: 'Checkbox' };
