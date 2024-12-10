/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon } from '../../icon/src/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';
export interface IExpandableContentProps {
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

export const ExpandableContent: React.FC<IExpandableContentProps> = ({
  title = defaultArgs.title,
  content = defaultArgs.content,
  open = defaultArgs.open,
  subtle = defaultArgs.subtle,
  children,
}: IExpandableContentProps) => {
  // Parse content markup (either a string, HTML string, React node or children)
  let contentMarkup: string | React.ReactNode = parseContentMarkup(children || content, {
    className: 'rvo-expandable-content__details',
  });
  return (
    <details
      className={clsx('rvo-expandable-content', subtle && 'rvo-expandable-content--subtle')}
      open={open || undefined}
    >
      <summary className="rvo-expandable-content__summary">
        <Icon color="hemelblauw" size="md" icon="info" />
        {title}
      </summary>
      {contentMarkup}
    </details>
  );
};

export default ExpandableContent;
