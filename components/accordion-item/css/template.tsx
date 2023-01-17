/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import Icon from '../../icon/css/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IAccordionItemProps {
  title: string;
  teaser?: string | React.ReactNode;
  content?: string | React.ReactNode;
  open?: boolean;
  children?: React.ReactNode;
}

export const argTypes = {
  title: {
    control: 'text',
  },
  teaser: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  open: {
    control: 'boolean',
  },
};

export const AccordionItem: React.FC<IAccordionItemProps> = ({
  title = defaultArgs.title,
  teaser = defaultArgs.teaser,
  content = defaultArgs.content,
  open = defaultArgs.open,
  children,
}: IAccordionItemProps) => {
  let teaserMarkup: string | React.ReactNode = parseContentMarkup(children || teaser);
  let contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);

  return (
    <details className="rvo-accordion__item" {...(open ? { open } : {})}>
      <summary className="rvo-accordion__item-summary">
        <h3 className="rvo-link">
          <span className="rvo-accordion__item-title rvo-layout-row rvo-layout-row--flex-start rvo-layout-gap--sm">
            <Icon icon="delta-omlaag" size="md" color="hemelblauw" classNames={['rvo-accordion__item-icon--closed']} />
            <Icon icon="delta-omhoog" size="md" color="hemelblauw" classNames={['rvo-accordion__item-icon--open']} />
            {title}
          </span>
        </h3>
        <span className="rvo-accordion-teaser">{teaserMarkup}</span>
      </summary>
      <div className="rvo-accordion__content">{contentMarkup}</div>
    </details>
  );
};

export default AccordionItem;
