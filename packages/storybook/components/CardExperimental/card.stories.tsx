import { CardExperimental } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const defaultArgs = {
  backgroundColor: 'none',
  backgroundImage: '',
  content: 'Content',
  fullCardLink: false,
  href: '',
  imageSize: 'md',
  imageSrc: '',
  invertedColors: false,
  outline: false,
  padding: 'none',
  showLinkIndicator: false,
  title: 'Title',
};

export default {
  title: 'Experimentele Componenten/CardExperimental',
  component: CardExperimental,
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
} satisfies Meta<typeof CardExperimental>;
type Story = StoryObj;

const Container = ({ children }) => <div>{children}</div>;

export const Base: Story = {
  args: defaultArgs,
  name: 'CardExperimental',
  render: () => (
    <Container>
      <CardExperimental></CardExperimental>
    </Container>
  ),
};
