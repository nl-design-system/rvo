import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './src';

const meta: Meta<typeof Tabs> = {
  title: 'Componenten/Tabs',
  component: Tabs,
  args: {
    ariaLabel: 'Voorbeeld tabs',
    defaultActiveTab: 0,
    size: 'md',
    activationMode: 'auto',
    items: [
      {
        label: 'Tab 1',
        panel: (
          <>
            <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 1</h2>
            <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 1</p>
          </>
        ),
      },
      {
        label: 'Tab 2',
        panel: (
          <>
            <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 2</h2>
            <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 2</p>
          </>
        ),
      },
      {
        label: 'Tab 3 met icoon',
        before: (
          <span
            className="utrecht-icon rvo-icon rvo-icon-home rvo-icon--md rvo-icon--hemelblauw"
            role="img"
            aria-label="Home"
          />
        ),
        panel: (
          <>
            <h2 className="utrecht-heading-2 rvo-heading rvo-heading--margin-1 rvo-heading--gap-sm">Tab 3</h2>
            <p className="rvo-paragraph rvo-paragraph--grijs-900">Content van tab 3</p>
          </>
        ),
      },
    ],
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'tabs',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=3669-2&embed-host=share',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = { name: 'Tabs' };
