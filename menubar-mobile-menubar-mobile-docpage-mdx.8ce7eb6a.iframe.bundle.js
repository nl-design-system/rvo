/*! For license information please see menubar-mobile-menubar-mobile-docpage-mdx.8ce7eb6a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[1562,4044],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/menubar-mobile/menubar.mobile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/menubar-mobile/src/defaultArgs.ts"),_src_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/menubar-mobile/src/template.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Mobile Menubar",component:_src_template__WEBPACK_IMPORTED_MODULE_1__.A,args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"menubar-mobile"}}},Container=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{minHeight:"500px"},children});Container.displayName="Container";const Default={args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Mobile Menubar",render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.A,{...args})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Mobile Menubar',\n  render: args => <Container>\n      <MobileMenuBar {...args} />\n    </Container>\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/menubar-mobile/menubar.mobile.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>menubar_mobile_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs");var menubar_mobile_stories=__webpack_require__("../../components/menubar-mobile/menubar.mobile.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",em:"em"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:menubar_mobile_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:menubar_mobile_stories.Default,layout:"fullscreen",className:"autoHeight"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:"Richtlijnen:\n\n- Zet altijd als laatste een knop 'uitloggen' in de mobile Menubar.\n- Zorg ervoor dat een gebruiker altijd naar de sluit knop kan navigeren met het keyboard wanneer het menu geopend is.\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:"# `@nl-rvo/css-menubar-mobile`\n\n## 1.3.0\n\n### Minor Changes\n\n- c56b5ac: Used a Dialog component in mobile Menubar (so include dialog css when updating)\n\n## 1.2.2\n\n### Patch Changes\n\n- 8fccd6c: Fixed subitem rendering in mobile Menubar\n- 8fccd6c: Fixed z-index for close button in mobile Menubar\n\n## 1.2.1\n\n### Patch Changes\n\n- f966df8: Fixed subitem rendering in mobile Menubar\n\n## 1.2.0\n\n### Minor Changes\n\n- 0cdf4eb: Remove utrecht-components-css reference and include utrecht css per component when needed\n\n## 1.0.1\n\n### Patch Changes\n\n- 5f65632: Made props like items and size in mobile MenuBar optional\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.365_:\nAdd option for menu item divider by using `rvo-topnav__item--with-divider` modifier\n\n_@nl-rvo/component-library-css@1.0.0-alpha.290_:\nAdjusted top bar to be a `button`\n\n_@nl-rvo/component-library-css@1.0.0-alpha.282_:\nSimplified snippet by removing `rvo-layout-row` and `rvo-layout-gap--sm`\n\n_@nl-rvo/component-library-css@1.0.0-alpha.231_:\nAdded component\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.em,{children:"@nl-rvo/assets/icons"}),"\n",(0,jsx_runtime.jsx)(_components.em,{children:"@nl-rvo/css-icon"}),"\n",(0,jsx_runtime.jsx)(_components.em,{children:"@nl-rvo/css-button"}),"\n",(0,jsx_runtime.jsx)(_components.em,{children:"@nl-rvo/css-dialog"}),"\n",(0,jsx_runtime.jsx)(_components.em,{children:"@nl-rvo/css-menubar"})]})]})}const menubar_mobile_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);