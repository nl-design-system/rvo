/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Icon } from '@nl-rvo/react-icon';
import '@nl-rvo/css-expandable-content';
import { IExpandableContentProps } from './ExpandableContent.types';

export const ExpandableContent: React.FC<IExpandableContentProps> = ({
  title,
  open = false,
  subtle,
  children,
  showIcon = false,
  ...rootElementProps
}) => (
  <details
    className={clsx(
      'rvo-expandable-content',
      subtle && 'rvo-expandable-content--subtle',
      showIcon && 'rvo-expandable-content--with-icon',
    )}
    open={open}
    {...rootElementProps}
  >
    <summary className="rvo-expandable-content__summary">
      {showIcon && <Icon color="hemelblauw" size="md" icon="info" />}
      {title}
    </summary>
    <div className="rvo-expandable-content__details">{children}</div>
  </details>
);

export default ExpandableContent;
