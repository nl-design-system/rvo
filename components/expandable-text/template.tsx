/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon } from '../icon/template';
import parseContentMarkup from '../utils/parseContentMarkup';
import './index.scss';
export interface IExpandableTextProps {
  title: string;
  /** @uxpinignoreprop */
  content?: string | ReactNode;
  open?: boolean;
  subtle?: boolean;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
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
  subtle: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const ExpandableText: React.FC<IExpandableTextProps> = ({
  title = defaultArgs.title,
  content = defaultArgs.content,
  open = defaultArgs.open,
  subtle = defaultArgs.subtle,
  children,
}: IExpandableTextProps) => {
  // Parse content markup (either a string, HTML string, React node or children)
  let contentMarkup: string | React.ReactNode = parseContentMarkup(children || content, {
    className: 'rvo-expandable-text__details',
  });
  return (
    <details className={clsx('rvo-expandable-text', subtle && 'rvo-expandable-text--subtle')} open={open || undefined}>
      <summary className="rvo-expandable-text__summary">
        <Icon color="hemelblauw" size="md" icon="info" />
        {title}
      </summary>
      {contentMarkup}
    </details>
  );
};

export default ExpandableText;
