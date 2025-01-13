/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Heading } from '../../heading/src/template';
import HorizontalRule from '../../horizontal-rule/src/template';
import Link from '../../link/src/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';

interface FooterItemInterface {
  content: string | ReactNode;
  link?: string;
}

interface FooterColumnInterface {
  orientation?: 'vertical' | 'horizontal';
  label?: string;
  items?: FooterItemInterface[];
}

export interface FooterInterface {
  /** @uxpinignoreprop */
  primaryMenu?: FooterColumnInterface[];
  maxWidth?: 'none' | 'sm' | 'md' | 'lg';
  /** @uxpinpropname Footer columns */
  children?: ReactNode;
  payOff?: string;
  /** @uxpinpropname Secondary menu items */
  secondaryMenu?: FooterItemInterface[];
}

export const argTypes = {
  primaryMenu: {
    type: {
      name: 'array',
      required: true,
    },
  },
  secondaryMenu: {
    type: {
      name: 'array',
      required: true,
    },
  },
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  payOff: {
    type: {
      name: 'string',
      required: false,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Footer: React.FC<FooterInterface> = ({
  primaryMenu = defaultArgs.primaryMenu,
  maxWidth = defaultArgs.maxWidth,
  payOff = defaultArgs.payOff,
  secondaryMenu = defaultArgs.secondaryMenu,
  children,
}: FooterInterface) => {
  return (
    <UtrechtPageFooter className="rvo-footer">
      <div
        className={clsx(
          'rvo-footer__container',
          maxWidth === 'sm' && 'rvo-footer__container--sm',
          maxWidth === 'md' && 'rvo-footer__container--md',
          maxWidth === 'lg' && 'rvo-footer__container--lg',
        )}
      >
        <div className="rvo-footer__menu-container">
          {children ||
            primaryMenu?.map((column, columnIndex) => (
              <div key={`primary-menu-${columnIndex}`} className="rvo-footer__column">
                {column && column.label.length > 0 && (
                  <Heading
                    type="h3"
                    textContent={parseContentMarkup(column.label)}
                    className="rvo-footer__column-title"
                  />
                )}
                <ul className="rvo-footer__menu">
                  {column.items?.map((item, itemIndex) => (
                    <li key={`primary-menu-item-${itemIndex}`} className="rvo-footer__menu-item">
                      <Link
                        href={item.link}
                        showIcon="before"
                        icon="delta-naar-rechts"
                        iconSize="sm"
                        iconColor="wit"
                        noUnderline={true}
                      >
                        {parseContentMarkup(item.content)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        {payOff && payOff.length > 0 && <div className="rvo-footer__payoff">{payOff}</div>}
        {secondaryMenu && (
          <>
            {((primaryMenu && primaryMenu.length > 0) || (payOff && payOff.length > 0)) && <HorizontalRule />}
            <div className="rvo-footer__menu-container rvo-footer__menu-container--small">
              {secondaryMenu.map((item, itemIndex) => {
                return (
                  <Link
                    key={`secondary-menu-item-${itemIndex}`}
                    color="wit"
                    href={item.link}
                    noUnderline={true}
                    weight="normal"
                  >
                    {item.content}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </UtrechtPageFooter>
  );
};

export default Footer;
