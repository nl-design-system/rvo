import { ExpandableContent, IExpandableContentProps } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const defaultArgs: IExpandableContentProps = {
  title: 'Expandable content title',
  children: 'Expandable content',
  open: false,
  subtle: false,
  showIcon: true,
};

const argTypes = {
  title: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  open: {
    control: 'boolean',
  },
  showIcon: {
    control: 'boolean',
  },
  subtle: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'Componenten/Expandable content',
  component: ExpandableContent,
  argTypes,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'expandable-content',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=105-1742&embed-host=share',
    },
  },
} satisfies Meta<typeof ExpandableContent>;
type Story = StoryObj<typeof ExpandableContent>;

export const Default: Story = { args: defaultArgs, name: 'Expandable content' };
