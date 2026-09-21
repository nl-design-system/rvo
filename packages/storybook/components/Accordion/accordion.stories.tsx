import { Accordion } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Accordion',
  component: Accordion,
  argTypes: {
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
type Story = StoryObj;

export const Default: Story = {
  name: 'Accordion',
  render: () => (
    <Accordion>
      <Accordion.Item title="Accordion Item 1" teaser="Teaser for accordion item 1">
        Item Content
      </Accordion.Item>
      <Accordion.Item title="Accordion Item 2" teaser="Teaser for accordion item 2">
        Item Content
      </Accordion.Item>
      <Accordion.Item title="Accordion Item 3" teaser="Teaser for accordion item 3">
        Item Content
      </Accordion.Item>
      <Accordion.Item title="Accordion Item 4" teaser="Teaser for accordion item 4">
        Item Content
      </Accordion.Item>
      <Accordion.Item title="Accordion Item 5" teaser="Teaser for accordion item 5">
        Item Content
      </Accordion.Item>
    </Accordion>
  ),
};
