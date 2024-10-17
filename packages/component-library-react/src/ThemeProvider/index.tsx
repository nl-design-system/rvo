import { FC, PropsWithChildren } from 'react';
import './index.scss';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <div className="rvo-theme">{children}</div>;
};

export default ThemeProvider;
