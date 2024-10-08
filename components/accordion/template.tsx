/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { AccordionItem, IAccordionItemProps } from './accordion-item/template';
import { defaultArgs } from './defaultArgs';

export interface IAccordionProps {
  /** @uxpinignoreprop */
  items: IAccordionItemProps[];
  grijs?: boolean;
  /** @uxpinpropname Accordion items */
  children?: ReactNode | undefined;
}

export const argTypes = {
  items: {
    control: 'object',
  },
  grijs: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Accordion: React.FC<IAccordionProps> = ({
  items = defaultArgs.items,
  grijs = defaultArgs.grijs,
  children,
}: IAccordionProps) => {
  return (
    <div className={clsx('rvo-accordion', grijs && 'rvo-accordion--grijs')}>
      {(children &&
        React.Children.map(children, (child, index) => <AccordionItem key={index} {...(child as any).props} />)) ||
        items.map((itemProps, index) => <AccordionItem key={index} {...itemProps} />)}
    </div>
  );
};

export default Accordion;
