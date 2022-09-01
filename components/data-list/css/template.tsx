/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import clsx from 'clsx';
import React from 'react';

interface IDataListItem {
  key: string;
  value: string;
  multiline?: boolean;
  actions?: React.ReactNode | React.ReactNode[];
}

interface IDataListProps {
  items: IDataListItem[];
  appearance: 'rows' | '-';
}

export const argTypes = {
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  appearance: {
    options: ['-', 'rows'],
    control: { type: 'select' },
  },
};

export const defaultArgs: IDataListProps = {
  appearance: 'rows',
  items: [
    {
      key: 'Voornaam',
      value: 'Mees',
    },
    {
      key: 'Achternaam',
      value: 'de Vos',
    },
    {
      key: 'Adres',
      value: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
      multiline: true,
    },
  ],
};
export const DataList = ({ appearance, items }) => (
  <dl className={clsx('utrecht-data-list', appearance === 'rows' && 'utrecht-data-list--rows')}>
    {items.map(({ key, value, actions, multiline }) => (
      <div key={`${key}${value}`} className="utrecht-data-list__item">
        <dt className="utrecht-data-list__item-key">{key}</dt>
        <dd
          className={clsx(
            'utrecht-data-list__item-value',
            'utrecht-data-list__item-value--html-dd',
            multiline && 'utrecht-data-list__item-value--multiline',
          )}
        >
          {value}
        </dd>
        {actions && <dd className="utrecht-data-list__actions utrecht-data-list__actions--html-dd">{actions}</dd>}
      </div>
    ))}
  </dl>
);
