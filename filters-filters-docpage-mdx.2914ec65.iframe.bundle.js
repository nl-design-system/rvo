"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[0],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/filters/filters.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>filters_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.14_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Componenten/Filters/Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"# Filters\n\nFilters maken het voor gebruikers makkelijker om informatie te ontsluiten. Door het instellen van een of meerdere filters wordt er een overzicht van items getoond die gefilterd zijn op de gemaakte keuzes.\n\n## Wanneer gebruik je filters\n\nAls er een grote hoeveelheid informatie ontsloten moet worden waarbij de gebruiker zelf invloed moet kunnen uitoefenen op het gewenste resultaat.\n\n## Anatomie van filters\n\nFilters bestaan uit:\n\n- Filtercategorie\n- Filterwaarden in een filtercategorie\n- Sorteermogelijkheid\n- Actieve filters overzicht\n\n## Richtlijnen\n\n- Toon de filters horizontaal wanneer er voldoende ruimte is omdat er een beperkt aantal filtercategorieën getoond hoeft te worden\n- Toon de filters vertical aan de linkerkant wanneer er beperkt ruimte is bovenaan de pagina in het geval er veel filtercategorieën getoond moeten worden\n- Filtercategorieën moeten de belangrijkste aspecten bevatten die relevant zijn voor de wensen van de gebruiker\n- Creëer indien nodig aparte filtercategorieën per overzichtspagina\n- Gebruik geen vakjargon en schrijf duidelijke labels voor de filterwaarden\n- Bepaal de volgorde van de filtercategorieën op basis van belangrijkheid. Waarbij de globale filtercategorieën als eerste getoond worden en daarna de specifiekere filtercategorieën\n- Bepaal per filtercategorie op welke manier de filterwaarden gesorteerd moeten worden. In sommige gevallen is dit alfabetisch maar in andere gevallen is een handmatige sortering logischer\n- Maak het mogelijk om meerdere filterwaarden binnen een filtercategorie te kiezen waar dit van toepassing is\n- Laat zien welke filterwaarden een gebruiker geselecteerd heeft op de plek waar de gebruiker deze heeft geselecteerd\n- Toon de actieve filters bovenaan het overzicht met de mogelijkheid om de filterwaarde te verwijderen\n- Pas de filters automatisch toe wanneer ze gekozen worden. Dit zorgt ervoor dat de gebruiker direct resultaat ziet en het bespaart ruimte om dat er geen submit button getoond hoeft te worden\n\n## Rijkshuisstijl\n\nVanuit de Rijkshuisstijl zijn er geen richtlijnen wat betreft filters.\n\n## Bronnen\n\n- [Defining Helpful Filter Categories and Values for Better UX - Kate Moran](https://web.archive.org/web/20210813184550/https://www.nngroup.com/articles/filter-categories-values/)\n- [How to craft a kickass filtering UX - Laura Cuhna](https://uxdesign.cc/crafting-a-kickass-filtering-ux-beea1798d64b)\n- [Filtering UI - Baymard Institute](https://web.archive.org/web/20211016121449/https://baymard.com/blog/horizontal-filtering-sorting-design)\n"})]})}const filters_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}}}]);