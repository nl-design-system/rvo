import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { FileInput } from './template';

const meta: Meta<typeof FileInput> = {
  title: 'Componenten/Form/File input',
  component: FileInput,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'form-fileinput',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FileInput>;

export const Default: Story = { args: defaultArgs, name: 'File input' };
