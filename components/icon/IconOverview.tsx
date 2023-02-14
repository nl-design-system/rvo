/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons/index.js';
import React from 'react';
import { Icon, iconColors, toProperCase } from './template';

export const IconOverview: React.FC = () => {
  return (
    <div
      style={{
        marginBlockStart: '2em',
        marginBlockEnd: '4em',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          gap: '1em',
          zIndex: 10,
          paddingBlockStart: '1em',
          paddingBlockEnd: '1em',
          background: 'white',
        }}
      >
        <label htmlFor="categories">Ga direct naar categorie:</label>
        <select
          name="categories"
          id="categories"
          onChange={(event) => {
            const category = document.getElementById(event.target.value);
            category.scrollIntoView();
          }}
        >
          {Object.keys(iconList).map((categoryName) => (
            <option key={categoryName} value={categoryName}>
              {toProperCase(categoryName)}
            </option>
          ))}
        </select>
      </div>
      <span>Je kunt iconen downloaden door erop te klikken.</span>

      {Object.entries(iconList).map(([categoryName, categoryIcons]) => {
        return (
          <React.Fragment key={categoryName}>
            <h2 id={categoryName} style={{ paddingBlockStart: '55px' }}>
              {toProperCase(categoryName)}
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                fontSize: '0.6em',
                rowGap: '1.2em',
                overflowWrap: 'anywhere',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {Object.keys(categoryIcons).map((iconName) => {
                const parsedIconName = iconName.replace(/_/g, '-').toLowerCase();
                const parsedIconCategory = categoryName.replace(/_/g, '-').toLowerCase();
                const iconDownloadURL = `static/icons/${parsedIconCategory}/${parsedIconName}.svg`;
                return (
                  <a
                    key={`${categoryName}-${parsedIconName}`}
                    download={`${parsedIconName}.svg`}
                    href={iconDownloadURL}
                    title={parsedIconName}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'var(--utrecht-icon-color)',
                    }}
                  >
                    <Icon icon={parsedIconName as any} size="3xl" color={iconColors[0] as any} />
                    <span>{parsedIconName}</span>
                  </a>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
