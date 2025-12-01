import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableContent, IExpandableContentProps } from './src/template';

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

const meta: Meta<typeof ExpandableContent> = {
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
};
export default meta;

type Story = StoryObj<typeof ExpandableContent>;

export const Default: Story = { args: defaultArgs, name: 'Expandable content' };
