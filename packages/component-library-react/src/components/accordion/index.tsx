/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import '@nl-rvo/css-accordion/dist/index.css';

import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { AccordionItem, IAccordionItemProps } from './accordion-item';
import { defaultArgs } from './defaultArgs';

export interface IAccordionProps {
  /** @uxpinignoreprop */
  items?: IAccordionItemProps[];
  /** @uxpinpropname Accordion items */
  children?: ReactNode | undefined;
}

export const argTypes = {
  items: {
    control: 'object',
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Accordion: React.FC<IAccordionProps & React.HTMLAttributes<HTMLDivElement>> = ({
  items = defaultArgs.items,
  children,
  ...props
}) => {
  return (
    <div className={clsx('rvo-accordion')} {...props}>
      {(children &&
        React.Children.map(children, (child, index) => <AccordionItem key={index} {...(child as any).props} />)) ||
        items?.map((itemProps, index) => <AccordionItem key={index} {...itemProps} />)}
    </div>
  );
};

export default Accordion;
