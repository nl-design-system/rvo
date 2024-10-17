/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface IDataListItemProps {
  label: string | ReactNode;
  value: string | ReactNode;
}

export const DataListItem: React.FC<IDataListItemProps> = ({
  label = defaultArgs.label,
  value = defaultArgs.value,
}: IDataListItemProps) => {
  let dtMarkup: string | React.ReactNode = label && parseContentMarkup(label);
  let ddMarkup: string | React.ReactNode = value && parseContentMarkup(value);

  return (
    <React.Fragment>
      <dt>{dtMarkup}</dt>
      <dd>{ddMarkup}</dd>
    </React.Fragment>
  );
};

export default DataListItem;
