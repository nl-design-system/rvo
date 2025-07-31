/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Icon } from '../../icon/src/template';
import './index.scss';

export interface IExpandableContentProps {
  title: string;
  open: boolean;
  subtle?: boolean;
  showIcon?: boolean;
  children: ReactNode | string;
}

export const ExpandableContent: React.FC<IExpandableContentProps> = ({
  title,
  open,
  subtle,
  children,
  showIcon = false,
}: IExpandableContentProps) => (
  <details
    className={clsx(
      'rvo-expandable-content',
      subtle && 'rvo-expandable-content--subtle',
      showIcon && 'rvo-expandable-content--with-icon',
    )}
    open={open}
  >
    <summary className="rvo-expandable-content__summary">
      {showIcon && <Icon color="hemelblauw" size="md" icon="info" />}
      {title}
    </summary>
    <div className="rvo-expandable-content__details">{children}</div>
  </details>
);

export default ExpandableContent;
