import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Fieldset } from './template';

const meta: Meta<typeof Fieldset> = {
  title: 'Componenten/Form/Fieldset',
  component: Fieldset,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-fieldset',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = { args: defaultArgs, name: 'Fieldset' };
