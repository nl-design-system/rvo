import React from 'react';

export interface IFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'warning' | 'error';
}
