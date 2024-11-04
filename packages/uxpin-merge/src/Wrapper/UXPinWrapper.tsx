import 'normalize.css/normalize.css';
import '@utrecht/component-library-css/dist/index.css';
import '@utrecht/design-tokens/dist/index.css';
import '@nl-rvo/assets/fonts/index.css';
import '@nl-rvo/assets/icons/index.css';
import '@nl-rvo/assets/images/index.css';
import '@nl-rvo/design-tokens/dist/index.css';
import './theme.scss';

document.body.classList.add('rvo-theme');

export default function UXPinWrapper({ children }) {
  return children;
}
