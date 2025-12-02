/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import { PageFooter as UtrechtPageFooter } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import HorizontalRule from '../../horizontal-rule/src/template';
import Link from '../../link/src/template';
import parseContentMarkup from '../../utils/parseContentMarkup';
import './index.scss';

export interface FooterItemInterface {
  content: string | ReactNode;
  link?: string;
}

export interface FooterColumnInterface {
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

export const Footer: React.FC<FooterInterface & React.HTMLAttributes<HTMLDivElement>> = ({
  primaryMenu,
  maxWidth,
  payOff,
  secondaryMenu,
  children,
  ...rootElementProps
}: FooterInterface) => {
  return (
    <UtrechtPageFooter className="rvo-footer" {...rootElementProps}>
      <div
        className={clsx(
          'rvo-footer__container',
          maxWidth === 'sm' && 'rvo-footer__container--sm',
          maxWidth === 'md' && 'rvo-footer__container--md',
          maxWidth === 'lg' && 'rvo-footer__container--lg',
        )}
      >
        {children ||
          (primaryMenu && (
            <div className={clsx('rvo-footer__menu-container', maxWidth === 'sm' && 'rvo-footer__menu-container--sm')}>
              {children ||
                primaryMenu?.map((column, columnIndex) => (
                  <div key={`primary-menu-${columnIndex}`} className="rvo-footer__column">
                    {column && column.label && <span className="rvo-footer__column-title">{column.label}</span>}
                    <ul
                      className={clsx(
                        'rvo-footer__menu',
                        column.orientation === 'horizontal' && 'rvo-footer__menu--horizontal',
                      )}
                    >
                      {column.items?.map((item, itemIndex) => (
                        <li key={`primary-menu-item-${itemIndex}`} className="rvo-footer__menu-item">
                          <Link
                            href={item.link}
                            showIcon={column.orientation === 'horizontal' ? 'no' : 'before'}
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
          ))}
        {payOff && payOff.length > 0 && <div className="rvo-footer__payoff">{payOff}</div>}
        {secondaryMenu && (
          <>
            {((primaryMenu && primaryMenu.length > 0) || (payOff && payOff.length > 0)) && <HorizontalRule />}
            <div
              className={clsx(
                'rvo-footer__menu-container',
                'rvo-footer__menu-container--secondary',
                maxWidth === 'sm' && 'rvo-footer__menu-container--sm',
              )}
            >
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
