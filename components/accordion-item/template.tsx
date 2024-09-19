/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import Heading from '../heading/template';
import Icon from '../icon/template';
import parseContentMarkup from '../utils/parseContentMarkup';

export interface IAccordionItemProps {
  title: string;
  teaser?: string;
  /** @uxpinignoreprop */
  content?: string | ReactNode;
  open?: boolean;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
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
  let teaserMarkup: string | React.ReactNode = parseContentMarkup(teaser);
  let contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);

  return (
    <details className="rvo-accordion__item" {...(open ? { open } : {})}>
      <summary className="rvo-accordion__item-summary">
        <Heading type="h3" noMargins={true} className="rvo-accordion__item-title" mixedBoldAndNormal={true}>
          <Icon icon="delta-omlaag" size="md" color="hemelblauw" className="rvo-accordion__item-icon--closed" />
          <Icon icon="delta-omhoog" size="md" color="hemelblauw" className="rvo-accordion__item-icon--open" />
          {title}
        </Heading>
        <span className="rvo-accordion-teaser">{teaserMarkup}</span>
      </summary>
      <div className="rvo-accordion__content">{contentMarkup}</div>
    </details>
  );
};

export default AccordionItem;
