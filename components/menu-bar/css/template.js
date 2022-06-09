/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';

export const argTypes = {};

export const defaultArgs = {};

export const MenuBar = ({ useIcons = false }) =>
  `
  <nav class="rvo-topnav">
    <ul class="utrecht-topnav__list">
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="https://example.com/">
          ${useIcons ? `<span class="rvo-icon rvo-icon--home rvo-icon--medium rvo-icon--wit"></span> ` : ''}
        Wonen en leven</a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="https://example.com/">
          ${useIcons ? `<span class="rvo-icon rvo-icon--kalender rvo-icon--medium rvo-icon--wit"></span> ` : ''}
          Werk en inkomen
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="https://example.com/">
          ${useIcons ? `<span class="rvo-icon rvo-icon--nieuws rvo-icon--medium rvo-icon--wit"></span> ` : ''}
          Ondernemen
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="https://example.com/">
          ${useIcons ? `<span class="rvo-icon rvo-icon--versleutelen rvo-icon--medium rvo-icon--wit"></span> ` : ''}
          Bestuur en organisatie
        </a>
      </li>
    </ul>
  </nav>
`;
