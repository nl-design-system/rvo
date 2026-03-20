import { SkipLink } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/skip-link/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Skip link',
  component: SkipLink,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'skip-link',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-5325&embed-host=share',
    },
  },
} satisfies Meta<typeof SkipLink>;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = { args: defaultArgs, name: 'Skip link' };
