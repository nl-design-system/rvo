import { Accordion } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Accordion',
  component: Accordion,
  argTypes: {
    items: {
      control: 'object',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    status: 'PRODUCTION',
    docusaurus: {
      link: 'accordion',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5155-13404&embed-host=share',
    },
  },
} satisfies Meta<typeof Accordion>;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: 'Accordion',
  args: {
    items: [
      { title: 'Accordion item 1', teaser: 'Teaser for accordion item 1', content: 'Item content' },
      { title: 'Accordion item 2', teaser: 'Teaser for accordion item 2', content: 'Item content' },
      { title: 'Accordion item 3', teaser: 'Teaser for accordion item 3', content: 'Item content' },
      { title: 'Accordion item 4', teaser: 'Teaser for accordion item 4', content: 'Item content' },
      { title: 'Accordion item 5', teaser: 'Teaser for accordion item 5', content: 'Item content' },
    ],
  },
};
