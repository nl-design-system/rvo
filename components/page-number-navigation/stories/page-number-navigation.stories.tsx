import { IPageNumberNavigation, PageNumberNavigation } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export const DefaultArgs: IPageNumberNavigation = {
  numberOfPages: 30,
  activePage: 10,
};

export const ArgTypes = {
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
  args: DefaultArgs,
  ArgTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'page-number-navigation',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=220-4774&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PageNumberNavigation>;

export const Default: Story = { args: DefaultArgs, name: 'PageNumberNavigation' };
