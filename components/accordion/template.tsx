/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { defaultArgs } from './defaultArgs';
import { AccordionItem, IAccordionItemProps } from '../accordion-item/template';

export interface IAccordionProps {
  /** @uxpinignoreprop */
  items: IAccordionItemProps[];
  grijs?: boolean;
}

export const argTypes = {
  items: {
    control: 'object',
  },
  grijs: {
    control: 'boolean',
  },
};

export const Accordion: React.FC<PropsWithChildren<IAccordionProps>> = ({
  items = defaultArgs.items,
  grijs = defaultArgs.grijs,
  children,
}: PropsWithChildren<IAccordionProps>) => {
  return (
    <div className={clsx('rvo-accordion', grijs && 'rvo-accordion--grijs')}>
      {(children &&
        React.Children.map(children, (child, index) => <AccordionItem key={index} {...(child as any).props} />)) ||
        items.map((itemProps, index) => <AccordionItem key={index} {...itemProps} />)}
    </div>
  );
};

export default Accordion;
