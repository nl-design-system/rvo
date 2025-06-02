import type { Meta, StoryObj } from '@storybook/react';
import { ICardContentProps } from './src/components/CardContent';
import { ICardHeaderProps } from './src/components/CardHeader';
import { ICardImageProps } from './src/components/CardImage';
import { CardExperimental, ICardProps } from './src/template';

type CardArguments = ICardProps & ICardImageProps & ICardHeaderProps & ICardContentProps;

const defaultArgs: CardArguments = {
  backgroundColor: 'none',
  backgroundImage: '',
  content: 'Content',
  fullCardLink: false,
  href: '',
  imageSize: 'md',
  imageSrc: '',
  invertedColors: false,
  outline: false,
  padding: 'sm',
  showLinkIndicator: false,
  title: 'Title',
};

const meta: Meta<typeof CardExperimental> = {
  title: 'Componenten/CardExperimental',
  component: CardExperimental,
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

type Story = StoryObj<CardArguments>;

const Container = ({ children }) => <div>{children}</div>;

export const Default: Story = {
  args: defaultArgs,
  name: 'CardExperimental',
  render: (args) => (
    <Container>
      <CardExperimental
        backgroundColor={args.backgroundColor}
        backgroundImage={args.backgroundImage}
        invertedColors={args.invertedColors}
        outline={args.outline}
        padding={args.padding}
      >
        {args.imageSrc ? (
          <CardExperimental.Image imageSrc={args.imageSrc} imageSize={args.imageSize} imageAlt={args.imageAlt} />
        ) : null}
        {args.title ? (
          <CardExperimental.Header
            href={args.href}
            fullCardLink={args.fullCardLink}
            showLinkIndicator={args.showLinkIndicator}
            LinkComponent={args.LinkComponent}
          >
            {args.title}
          </CardExperimental.Header>
        ) : null}
        {args.content ? <CardExperimental.Content>{args.content}</CardExperimental.Content> : null}
      </CardExperimental>
    </Container>
  ),
};
