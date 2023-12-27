import type { Meta, StoryObj } from '@storybook/react';
import * as ReactDOMServer from 'react-dom/server';
import Link from '../link/template';
import StatusIcon from '../status-icon/template';
import { defaultArgs } from './defaultArgs';
import { Card } from './template';

const meta: Meta<typeof Card> = {
  title: 'Componenten/Card',
  component: Card,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'card',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: 'Card',
  args: {
    ...defaultArgs,
    content: ReactDOMServer.renderToStaticMarkup(
      <>
        <h3 className="utrecht-heading-3">
          <Link href="#" color="zwart" className="rvo-link--full-click">
            Investeringssubsidie duurzame energie en energiebesparing
          </Link>
        </h3>
        <div className="rvo-layout-column rvo-layout-gap--xs">
          <p className="rvo-paragraph rvo-paragraph--sm rvo-paragraph--subtle">Content</p>
          <div className="rvo-card__status">
            <StatusIcon type="waarschuwing" size="md" />
            <div className="rvo-card__status-text">Status text</div>
          </div>
        </div>
      </>,
    ),
  },
};
