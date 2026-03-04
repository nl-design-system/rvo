import { Select } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-select/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Select> = {
  title: 'Componenten/Select',
  component: Select,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-select',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=136-2522&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = { args: defaultArgs, name: 'Select' };
