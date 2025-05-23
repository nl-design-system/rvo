import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Link } from './src/template';

const meta: Meta<typeof Link> = {
  title: 'Componenten/Link',
  component: Link,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'link',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = { args: defaultArgs, name: 'Link' };
