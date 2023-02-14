/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { PropsWithChildren } from 'react';
import { Icon } from '../icon/template';
import parseContentMarkup from '../utils/parseContentMarkup';
import { defaultArgs } from './defaultArgs';
import './index.scss';
export interface IExpandableTextProps {
  title: string;
  content: string | React.ReactNode;
  open?: boolean;
}

export const argTypes = {
  title: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  open: {
    control: 'boolean',
  },
};

export const ExpandableText: React.FC<PropsWithChildren<IExpandableTextProps>> = ({
  title = defaultArgs.title,
  content = defaultArgs.content,
  open = defaultArgs.open,
  children,
}: PropsWithChildren<IExpandableTextProps>) => {
  // Parse content markup (either a string, HTML string, React node or children)
  let contentMarkup: string | React.ReactNode = parseContentMarkup(children || content, {
    className: 'rvo-expandable-text__details',
  });
  return (
    <details className="rvo-expandable-text" open={open || undefined}>
      <summary className="rvo-expandable-text__summary">
        <Icon color="hemelblauw" size="md" icon="info" />
        {title}
      </summary>
      {contentMarkup}
    </details>
  );
};

export default ExpandableText;
