export interface IFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type: 'warning' | 'error';
}
