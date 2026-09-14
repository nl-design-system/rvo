/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import '@nl-rvo/css-accordion';
import clsx from 'clsx';
import React from 'react';
import { IAccordionItemProps, IAccordionProps } from './Accordion.types';
import { Icon } from '@nl-rvo/react-icon';
import { Heading } from '@nl-rvo/react-heading';
import parseContentMarkup from '@nl-rvo/components/utils/parseContentMarkup';

export const Accordion: React.FC<IAccordionProps> & {
  Item: React.FC<IAccordionItemProps>;
} = ({ children, ...props }) => {
  return (
    <div className={clsx('rvo-accordion')} {...props}>
      {children &&
        React.Children.map(children, (child, index) => <AccordionItem key={index} {...(child as any).props} />)}
    </div>
  );
};

const AccordionItem: React.FC<IAccordionItemProps> = ({ open, title, teaser, children }: IAccordionItemProps) => {
  let teaserMarkup: string | React.ReactNode = parseContentMarkup(teaser);
  let contentMarkup: string | React.ReactNode = parseContentMarkup(children);

  return (
    <details className="rvo-accordion__item" {...(open ? { open } : {})}>
      <summary className="rvo-accordion__item-summary">
        <div className="rvo-accordion__item-icon">
          <Icon icon="delta-omlaag" size="md" color="hemelblauw" className="rvo-accordion__item-icon--closed" />
          <Icon icon="delta-omhoog" size="md" color="hemelblauw" className="rvo-accordion__item-icon--open" />
        </div>
        <div className="rvo-accordion__item-title-container">
          <Heading type="h3" noMargins={true} className="rvo-accordion__item-title" fontWeightNormal={true}>
            {title}
          </Heading>
          {teaserMarkup && <div className="rvo-accordion-teaser">{teaserMarkup}</div>}
        </div>
      </summary>
      <div className="rvo-accordion__content">{contentMarkup}</div>
    </details>
  );
};
Accordion.Item = AccordionItem;

export default Accordion;
