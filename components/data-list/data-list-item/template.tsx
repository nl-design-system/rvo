/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import { defaultArgs } from './defaultArgs';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface IDataListItemProps {
  label?: string;
  value?: string;
}

export const DataListItem: React.FC<IDataListItemProps> = ({
  label = defaultArgs.label,
  value = defaultArgs.value,
}: IDataListItemProps) => {
  let dtMarkup: string | React.ReactNode = parseContentMarkup(label);
  let ddMarkup: string | React.ReactNode = parseContentMarkup(value);

  return (
    <React.Fragment>
      <dt>{dtMarkup}</dt>
      <dd>{ddMarkup}</dd>
    </React.Fragment>
  );
};

export default DataListItem;
