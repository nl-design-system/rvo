import { Accordion, IAccordionItemProps } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

type AccordionStoryArgs = React.ComponentProps<typeof Accordion> & {
  items: IAccordionItemProps[];
};

const meta: Meta<AccordionStoryArgs> = {
  title: 'Componenten/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    items: {
      control: 'object',
      name: 'children',
    },
  },
  args: {
    items: [
      { title: 'Accordion Item 1', teaser: 'Teaser for accordion item 1', children: 'Item Content 1' },
      { title: 'Accordion Item 2', teaser: 'Teaser for accordion item 2', children: 'Item Content 2' },
      { title: 'Accordion Item 3', teaser: 'Teaser for accordion item 3', children: 'Item Content 3' },
      { title: 'Accordion Item 4', teaser: 'Teaser for accordion item 4', children: 'Item Content 4' },
      { title: 'Accordion Item 5', teaser: 'Teaser for accordion item 5', children: 'Item Content 5' },
    ],
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
};

export default meta;
type Story = StoryObj<AccordionStoryArgs>;

export const Base: Story = {
  name: 'Accordion',
  render: ({ items, ...args }) => (
    <Accordion {...args}>
      {items.map((item, index) => (
        <Accordion.Item key={index} title={item.title} teaser={item.teaser}>
          {item.content}
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};
