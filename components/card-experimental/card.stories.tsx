import type { Meta, StoryObj } from '@storybook/react';
import { CardArguments, defaultArgs } from './src/defaultArgs';
import { CardExperimental } from './src/template';

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
  args: { ...defaultArgs, outline: true },
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
        {args.imageSrc && (
          <CardExperimental.Image imageSrc={args.imageSrc} imageSize={args.imageSize} imageAlt={args.imageAlt} />
        )}
        <CardExperimental.Header
          href={args.href}
          fullCardLink={args.fullCardLink}
          showLinkIndicator={args.showLinkIndicator}
          LinkComponent={args.LinkComponent}
        >
          {args.title}
        </CardExperimental.Header>
        <CardExperimental.Content>{args.content}</CardExperimental.Content>
      </CardExperimental>
    </Container>
  ),
};
