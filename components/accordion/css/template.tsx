/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import React, { PropsWithChildren } from 'react';
import { AccordionItem, IAccordionItemProps } from '../../accordion-item/css/template';
import { defaultArgs } from './defaultArgs';

export interface IAccordionProps {
  /** @uxpinignoreprop */
  items: IAccordionItemProps[];
}

export const argTypes = {
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const Accordion: React.FC<PropsWithChildren<IAccordionProps>> = ({
  items = defaultArgs.items,
  children,
}: PropsWithChildren<IAccordionProps>) => {
  return (
    <div className="rvo-accordion rvo-accordion--colored rvo-accordion--border-indicator">
      {(children &&
        React.Children.map(children, (child, index) => <AccordionItem key={index} {...(child as any).props} />)) ||
        items.map((itemProps, index) => <AccordionItem key={index} {...itemProps} />)}
    </div>
  );
};

export default Accordion;
