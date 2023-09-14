/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import { Heading, Link } from './index';

export interface IFooterMenuLinkProps {
  textContent: string;
  href?: string;
}

export interface IFooterMenuProps {
  links: IFooterMenuLinkProps[];
  heading?: string;
}

export const FooterMenu = ({ links, heading }: IFooterMenuProps) => {
  return (
    <ul className="rvo-footer-menu">
      {heading?.length && (
        <li className="rvo-footer-menu-title">
          <Heading level={3}>{heading}</Heading>
        </li>
      )}
      {links.map((item, itemIndex) => {
        let itemMarkup;

        if (typeof item.href === 'string') {
          itemMarkup = (
            <Link
              href={item.href}
              showIcon="before"
              icon="delta-naar-rechts"
              iconSize="sm"
              iconColor="wit"
              noUnderline={true}
            >
              {item.textContent}
            </Link>
          );
        } else if (typeof item.textContent === 'string') {
          itemMarkup = item.textContent;
        }

        return (
          <li key={itemIndex} className="rvo-footer-menu-item">
            {itemMarkup}
          </li>
        );
      })}
    </ul>
  );
};
