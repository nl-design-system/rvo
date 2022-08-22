/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import validateHTML from '../../utils/validateHTML';

interface IExpandableTextProps {
  title: string;
  text: string;
  open?: boolean;
}

export const argTypes = {
  title: {
    control: 'text',
  },
  text: {
    control: 'text',
  },
  open: {
    control: 'boolean',
  },
};

export const defaultArgs: IExpandableTextProps = {
  title: 'Expandable text title',
  text: 'Expandable text content',
  open: false,
};

export const ExpandableText: React.FC<IExpandableTextProps> = ({
  title = defaultArgs.title,
  text = defaultArgs.text,
  open = defaultArgs.open,
}) => {
  const isValidHTML = validateHTML(text);
  return (
    <details className="rvo-expandable-text" open={open || null}>
      <summary className="rvo-expandable-text__summary">
        <div className="rvo-icon rvo-icon-info rvo-icon--md rvo-icon--hemelblauw"></div>
        {title}
      </summary>
      {isValidHTML ? (
        <span className="rvo-expandable-text__details" dangerouslySetInnerHTML={{ __html: text }}></span>
      ) : (
        <span className="rvo-expandable-text__details">{text}</span>
      )}
    </details>
  );
};
