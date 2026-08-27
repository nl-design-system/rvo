import { Paragraph } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Paragraph',
  component: Paragraph,
  args: {
    content: 'Paragraph Content',
  },
  argTypes: {
    content: {
      control: 'text',
    },
    color: {
      control: { type: 'select' },
      options: ['lintblauw', 'wit', 'zwart', 'grijs-500', 'grijs-900'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    noSpacing: {
      control: 'boolean',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'paragraph',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=1274-18388&embed-host=share',
    },
  },
} satisfies Meta<typeof Paragraph>;

type Story = StoryObj<typeof Paragraph>;

export const Base: Story = {};

// sizes
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Paragraph {...args} size="sm" />
      <Paragraph {...args} size="md" />
      <Paragraph {...args} size="lg" />
    </div>
  ),
};

// colors
export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Paragraph {...args} color="lintblauw" />
      <Paragraph {...args} color="wit" />
      <Paragraph {...args} color="zwart" />
      <Paragraph {...args} color="grijs-500" />
      <Paragraph {...args} color="grijs-900" />
    </div>
  ),
};
