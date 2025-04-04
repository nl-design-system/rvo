import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Card } from './src/template';

const meta: Meta<typeof Card> = {
  title: 'Componenten/Card',
  component: Card,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'card',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

const Container = ({ children }) => <div>{children}</div>;

export const Default: Story = {
  args: { ...defaultArgs, outline: true },
  name: 'Card',
  render: (args) => (
    <Container>
      <Card {...args} />
    </Container>
  ),
};
