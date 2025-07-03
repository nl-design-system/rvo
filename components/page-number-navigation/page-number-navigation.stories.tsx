import type { Meta, StoryObj } from '@storybook/react';
import PageNumberNavigation, { IPageNumberNavigation } from './src/template';

export const defaultArgs: IPageNumberNavigation = {
  numberOfPages: 30,
  activePage: 10,
};

export const argTypes = {
  numberOfPages: {
    control: 'number',
  },
  activePage: {
    control: 'number',
  },
  onPageChange: {
    table: {
      disable: true,
    },
  },
};

const meta: Meta<typeof PageNumberNavigation> = {
  title: 'Componenten/Page Number Navigation',
  component: PageNumberNavigation,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'page-number-navigation',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PageNumberNavigation>;

export const Default: Story = { args: defaultArgs, name: 'PageNumberNavigation' };
