import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { Fieldset } from './src/template';

const meta: Meta<typeof Fieldset> = {
  title: 'Componenten/Fieldset',
  component: Fieldset,
  args: defaultArgs,
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
};
export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = { args: defaultArgs, name: 'Fieldset' };
