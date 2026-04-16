import { Heading } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/heading/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const argTypes = {
  type: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    control: { type: 'select' },
  },
  noMargins: {
    control: 'boolean',
  },
  fontWeightNormal: {
    control: 'boolean',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'select' },
  },
  icon: {
    control: 'string',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'Componenten/Heading',
  component: Heading,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'heading',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=107-1382&embed-host=share',
    },
  },
} satisfies Meta<typeof Heading>;
type Story = StoryObj<typeof Heading>;

export const Default: Story = { args: defaultArgs, name: 'Heading' };

export const HeadingIconBefore: Story = {
  args: defaultArgs,
  name: 'Heading with Icon Before',
  render: (args) => (
    <Heading {...args} showIcon="before" icon="home">
      Heading with Icon before
    </Heading>
  ),
};

export const HeadingIconAfter: Story = {
  args: defaultArgs,
  name: 'Heading with Icon After',
  render: (args) => (
    <Heading {...args} showIcon="before" icon="home">
      Heading with Icon after
    </Heading>
  ),
};
