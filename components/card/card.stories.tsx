import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { Card } from './src/template';

// override some values.
defaultArgs.padding = 'sm';

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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-118&embed-host=share',
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
