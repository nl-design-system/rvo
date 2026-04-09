import { Card } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/card/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

// override some values.
defaultArgs.padding = 'sm';

export default {
  title: 'Componenten/Card',
  component: Card,
  args: defaultArgs,
  argTypes,
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
} satisfies Meta<typeof Card>;
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
