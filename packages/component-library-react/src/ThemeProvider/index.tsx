import { FC, PropsWithChildren } from 'react';
import './index.css';
import '@nl-rvo/component-library-css/dist/utilities/utility-background.css';
import '@nl-rvo/component-library-css/dist/utilities/utility-border.css';
import '@nl-rvo/component-library-css/dist/utilities/utility-margin.css';
import '@nl-rvo/component-library-css/dist/utilities/utility-padding.css';
import '@nl-rvo/component-library-css/dist/utilities/utility-text.css';
import '@nl-rvo/component-library-css/dist/utilities/utility-text-types.css';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <div className="rvo-theme">{children}</div>;
};

export default ThemeProvider;
