import { MenuBar as MenubarSnippet } from '@nl-rvo/components/menubar/css/template';
import parse from 'html-react-parser';
import React from 'react';

export const defaultItems = [
  { label: 'Home', icon: 'home', link: '#' },
  { label: 'Mijn aanvragen', icon: 'publicatie', link: '#' },
  { label: 'Nieuwe aanvraag', icon: 'plus', link: '#' },
  { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
];

const MenuBar = (props) => <>{parse(MenubarSnippet(props))}</>;

export default MenuBar;
