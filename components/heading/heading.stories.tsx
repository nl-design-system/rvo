import type { Meta, StoryObj } from '@storybook/react';
import { Heading, IHeadingProps } from './src/template';
import { iconNames as iconOptions } from '../icon/src/template';

const defaultArgs: IHeadingProps = {
  type: 'h1',
  title: 'Heading',
  url: '',
  showIcon: 'no',
  icon: undefined,
  iconAriaLabel: '',
  noMargins: false,
  fontWeightNormal: false,
};

const argTypes = {
  type: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    control: { type: 'select' },
  },
  title: {
    control: 'text',
  },
  url: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconOptions,
  },
  iconAriaLabel: { control: 'text' },
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
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = { args: defaultArgs, name: 'Heading' };
