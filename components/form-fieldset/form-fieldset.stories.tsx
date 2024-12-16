import type { Meta, StoryObj } from '@storybook/react';
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
  },
};
export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = { args: defaultArgs, name: 'Fieldset' };
