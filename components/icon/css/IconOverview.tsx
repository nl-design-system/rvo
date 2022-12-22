/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import styled from '@emotion/styled/macro';
import iconList from '@nl-rvo/assets/icons/index.js';
import React from 'react';
import { Icon, iconColors, toProperCase } from './template';

interface IIconProps {
  icon: string;
  size?: string;
  color?: string;
  classNames?: string[];
}

export const IconOverview: React.FC<IIconProps> = () => {
  return (
    <Container>
      <CategorySelector>
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
      </CategorySelector>

      {Object.entries(iconList).map(([categoryName, categoryIcons]) => {
        return (
          <React.Fragment key={categoryName}>
            <CategoryName id={categoryName}>{toProperCase(categoryName)}</CategoryName>
            <IconTable>
              {Object.keys(categoryIcons).map((iconName) => {
                const parsedIconName = iconName.replace(/_/g, '-').toLowerCase();
                const parsedIconCategory = categoryName.replace(/_/g, '-').toLowerCase();
                const iconDownloadURL = `static/media/../../proprietary/assets/icons/${parsedIconCategory}/${parsedIconName}.svg`;
                return (
                  <IconContainer
                    key={`${categoryName}-${parsedIconName}`}
                    download={`${parsedIconName}.svg`}
                    href={iconDownloadURL}
                    title={parsedIconName}
                  >
                    <Icon icon={parsedIconName as any} size="3xl" color={iconColors[0] as any} />
                    <span>{parsedIconName}</span>
                  </IconContainer>
                );
              })}
            </IconTable>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-block-start: 2em;
  margin-block-end: 4em;
`;

const CategorySelector = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  gap: 1em;
  z-index: 10;
  padding-block-start: 1em;
  padding-block-end: 1em;
  background: white;
`;

const CategoryName = styled.h2`
  padding-block-start: 55px;
`;

const IconTable = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 0.6em;
  row-gap: 1.2em;
  overflow-wrap: anywhere;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--utrecht-icon-color);
`;
