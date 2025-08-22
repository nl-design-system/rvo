/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { colorTokens } from '@nl-rvo/design-tokens/dist/colors.js'; // auto-generated

export const UtilityBackground = () => {
  return (
    <div className="rvo-layout-container rvo-padding--2xl">
      <h1>Utility Classes for Background Colors</h1>
      <p>
        Deze pagina toont een visueel overzicht van de beschikbare achtergrondkleuren binnen het ROOS design systeem,
        toegepast via utility classes. Elke kleur wordt weergegeven met de bijbehorende class (bijv.
        .rvo-bg--hemelblauw). Gebruik deze utility classes <strong>(alleen als het niet anders kan)</strong> om snel en
        consistent achtergrondkleuren toe te passen in componenten of layouts.
      </p>
      {colorTokens.map(([, name]) => {
        const isLight = name === 'rvo-wit';
        const className = name.replace(/^rvo-/, 'rvo-bg--');

        return (
          <div className="rvo-layout-row" key={name}>
            <div
              className="rvo-margin--sm"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
              }}
            >
              <div
                className={className}
                style={{
                  borderRadius: '1.5em',
                  height: '3em',
                  width: '3em',
                  outline: isLight ? '1px solid black' : 'none',
                }}
              ></div>
              <code>.{className}</code>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UtilityBackground;
