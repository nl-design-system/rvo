/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { colorTokens } from '@nl-rvo/design-tokens/dist/colors.js'; // auto-generated

export const UtilityText = () => {
  return (
    <div className="rvo-layout-container rvo-padding--2xl">
      <h1>Utility Classes for Text Colors</h1>
      <p>
        Deze pagina toont een visueel overzicht van de beschikbare tekstkleuren binnen het ROOS design systeem,
        toegepast via utility classes. Elke kleur wordt weergegeven met de bijbehorende class (bijv.
        .rvo-text--hemelblauw). Gebruik deze utility classes <strong>(alleen als het niet anders kan)</strong> om snel
        en consistent tekstkleuren toe te passen in componenten of layouts.
      </p>
      {colorTokens.map(([, name]) => {
        const matchNumber = name.match(/\d+$/); // find digits at the end
        const number = matchNumber ? parseInt(matchNumber[0], 10) : null;

        const isLight = name === 'rvo-wit' || (number && number < 250);
        const className = name.replace(/^rvo-/, 'rvo-text--');

        return (
          <div
            className="rvo-layout-row"
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div
              style={{
                minWidth: '220px',
              }}
            >
              <p
                className={className}
                style={{
                  padding: '.25em .75em',
                  backgroundColor: isLight ? '#000' : 'unset',
                  width: 'fit-content',
                }}
              >
                {name}
              </p>
            </div>
            <code>.{className}</code>
          </div>
        );
      })}
    </div>
  );
};
export default UtilityText;
