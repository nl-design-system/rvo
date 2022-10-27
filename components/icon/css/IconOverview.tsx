/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import styled from '@emotion/styled/macro';
import iconList from '@nl-rvo/assets/icons/index.js';
import React from 'react';
import { Icon, iconColors } from './template';

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
              {categoryName}
            </option>
          ))}
        </select>
      </CategorySelector>

      {Object.entries(iconList).map(([categoryName, categoryIcons]) => {
        return (
          <React.Fragment key={categoryName}>
            <CategoryName id={categoryName}>{categoryName}</CategoryName>
            <IconTable>
              {Object.keys(categoryIcons).map((iconName) => {
                return (
                  <IconContainer key={`${categoryName}-${iconName}`}>
                    <Icon icon={iconName} size="3xl" color={iconColors[0]} />
                    <span>{iconName.toLowerCase()}</span>
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
  margin-top: 2em;
  margin-bottom: 4em;
`;

const CategorySelector = styled.div`
  position: sticky;
  top: 10px;
  display: flex;
  gap: 1em;
  z-index: 10;
`;

const CategoryName = styled.h2`
  padding-block-start: 40px;
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

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
