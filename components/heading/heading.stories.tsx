import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { Heading } from './src/template';
import Icon from '../icon/src/template';

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
  children: {
    table: {
      disable: true,
    },
  },
};

const meta: Meta<typeof Heading> = {
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
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = { args: defaultArgs, name: 'Heading' };

export const HeadingIconBefore: Story = {
  args: defaultArgs,
  name: 'Heading with Icon Before',
  render: (args) => (
    <Heading {...args}>
      <Icon icon={'home'} />
      Heading with Icon
    </Heading>
  ),
};

export const HeadingIconAfter: Story = {
  args: defaultArgs,
  name: 'Heading with Icon After',
  render: (args) => (
    <Heading {...args}>
      Heading with Icon
      <Icon icon={'home'} />
    </Heading>
  ),
};
