/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import React from 'react';
import { Heading } from '../../heading/css/template';
import { Link } from '../../link/css/template';
import { MaxWidthLayout } from '../../max-width-layout/css/template';
import validateHTML from '../../utils/validateHTML';

interface IFooterItem {
  content: string;
  link?: string;
}

interface IFooterColumn {
  label?: string;
  items: IFooterItem[];
}

interface IFooterProps {
  columns: IFooterColumn[];
}

const defaultColumns = [
  {
    label: 'RVO',
    items: [
      { content: 'Over ons', link: '#' },
      { content: 'Contact', link: '#' },
      { content: 'Pers', link: '#' },
      { content: 'Zaken regelen bij RVO', link: '#' },
    ],
  },
  {
    label: 'Over deze site',
    items: [
      { content: 'Privacy', link: '#' },
      { content: 'Cookies en anti-spam', link: '#' },
      { content: 'Toegankelijkheid', link: '#' },
      { content: 'Proclaimer', link: '#' },
    ],
  },
  {
    label: 'Snel naar',
    items: [
      { content: 'Onderwerpen A t/m Z', link: '#' },
      { content: 'Klantenpanel', link: '#' },
      { content: 'Documenten en publicaties', link: '#' },
      { content: 'Overheidspublicaties en auteursrecht', link: '#' },
    ],
  },
  {
    label: 'Blijf op de hoogte',
    items: [
      { content: 'Social media', link: '#' },
      { content: 'Higherlevel.nl ondernemersforum', link: '#' },
      { content: 'RSS', link: '#' },
      { content: 'Gratis nieuwsbrief', link: '#' },
    ],
  },
];

export const argTypes = {
  columns: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs: IFooterProps = {
  columns: defaultColumns,
};

export const Footer: React.FC<IFooterProps> = ({ columns = defaultArgs.columns }) => {
  return (
    <footer className="rvo-footer">
      <MaxWidthLayout size="lg">
        {columns.map((column, columnIndex) => (
          <ul key={columnIndex} className="rvo-footer-menu">
            {column.label?.length && (
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent={column.label}></Heading>
              </li>
            )}
            {column.items.map((item, itemIndex) => {
              let itemMarkup;

              if (item.link?.length) {
                itemMarkup = (
                  <Link
                    content={item.content}
                    url={item.link}
                    showIcon="before"
                    icon="delta-naar-rechts"
                    iconSize="sm"
                    iconColor="wit"
                    noUnderline={true}
                  />
                );
              } else if (typeof item.content === 'string' && item.content.length && validateHTML(item.content)) {
                itemMarkup = <div dangerouslySetInnerHTML={{ __html: item.content }}></div>;
              } else {
                itemMarkup = item.content;
              }

              return (
                <li key={itemIndex} className="rvo-footer-menu-item">
                  {itemMarkup}
                </li>
              );
            })}
          </ul>
        ))}
      </MaxWidthLayout>
    </footer>
  );
};
