/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import './index.scss';
import { colorTokens } from '@nl-rvo/design-tokens/dist/colors'; // auto-generated

export const UtilityBorder = () => {
  return (
    <div className="rvo-layout-container rvo-padding--2xl">
      <h1>Utility Classes for Border Colors</h1>
      <p>
        Deze pagina toont een visueel overzicht van de beschikbare borderkleuren binnen het ROOS design systeem,
        toegepast via utility classes. Elke kleur wordt weergegeven met de bijbehorende class (bijv.
        .rvo-border--hemelblauw). Gebruik deze utility classes <strong>(alleen als het niet anders kan)</strong> om snel
        en consistent borderkleuren toe te passen in componenten of layouts.
      </p>
      {colorTokens.map(([, name]) => {
        const className = name.replace(/^rvo-/, 'rvo-border--');

        return (
          <div className="rvo-layout-row" key={name}>
            <div
              style={{
                minWidth: '220px',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <p
                className={className}
                style={{
                  padding: '.25em .75em',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  width: 'fit-content',
                }}
              >
                <code>.{className}</code>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UtilityBorder;
