import { FC, PropsWithChildren } from 'react';
import './index.css';
import '@nl-rvo/utility-background/dist/index.css';
import '@nl-rvo/utility-border/dist/index.css';
import '@nl-rvo/utility-margin/dist/index.css';
import '@nl-rvo/utility-padding/dist/index.css';
import '@nl-rvo/utility-text/dist/index.css';
import '@nl-rvo/utility-text-types/dist/index.css';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <div className="rvo-theme">{children}</div>;
};

export default ThemeProvider;
