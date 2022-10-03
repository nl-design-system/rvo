/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
interface IDataListItem {
  key: string;
  value: string;
}

interface IDataListProps {
  items: IDataListItem[];
}

export const argTypes = {
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs: IDataListProps = {
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
    },
  ],
};
export const DataList = ({ items }) => (
  <dl className={clsx('rvo-data-list')}>
    {items.map(({ key, value }) => (
      <>
        <dt>{key}</dt>
        <dd>{value}</dd>
      </>
    ))}
  </dl>
);
