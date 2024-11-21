/*! For license information please see ordered-unordered-list-ordered-unordered-list-docpage-mdx.27f03886.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[3078,9416],{"../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/ordered-unordered-list/ordered-unordered-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/ordered-unordered-list/src/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Ordered & unordered list",component:__webpack_require__("../../components/ordered-unordered-list/src/template.tsx").B8,args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"list"}}},Default={args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Ordered & unordered list"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Ordered & unordered list'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/ordered-unordered-list/ordered-unordered-list.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ordered_unordered_list_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs");var ordered_unordered_list_stories=__webpack_require__("../../components/ordered-unordered-list/ordered-unordered-list.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ordered_unordered_list_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:ordered_unordered_list_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:"Documentatie voor ordered/unordered list\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:"# `@nl-rvo/css-ordered-unordered-list`\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.376_:\nAdded component\n"})]})}const ordered_unordered_list_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/ordered-unordered-list/src/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/ordered-unordered-list/src/template.tsx");const defaultArgs={type:"unordered",items:["Item 1","Item 2","Item 3","Item 4","Item 5"],bulletType:"icon",bulletIcon:"option-1",noMargin:!0,noPadding:!0}},"../../components/ordered-unordered-list/src/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B8:()=>List});var clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_defaultArgs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/ordered-unordered-list/src/defaultArgs.ts"),_utils_parseChildren__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../components/ordered-unordered-list/src/index.scss"),__webpack_require__("../../components/utils/parseChildren.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const List=({type=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.type,items=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.items,bulletType=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.bulletType,bulletIcon=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.bulletIcon,noMargin=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.noMargin,noPadding=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.noPadding,children=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.children})=>{const ListTag="unordered"===type?"ul":"ol",listClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_5__.A)("unordered"===type&&"rvo-ul","unordered"===type&&noMargin&&"rvo-ul--no-margin","unordered"===type&&noPadding&&"rvo-ul--no-padding","unordered"===type&&"none"===bulletType&&"rvo-ul--none","unordered"===type&&"icon"===bulletType&&`rvo-ul--icon rvo-ul--icon-${bulletIcon}`,"ordered"===type&&"rvo-ol","ordered"===type&&noPadding&&"rvo-ol--no-padding","ordered"===type&&noMargin&&"rvo-ol--no-margin");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ListTag,{className:listClassName,children:children?react__WEBPACK_IMPORTED_MODULE_0__.Children.map((0,_utils_parseChildren__WEBPACK_IMPORTED_MODULE_3__.H)(children),((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{children:child},index))):items.map(((itemContent,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{children:itemContent},index)))})};List.displayName="List";try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{type:{defaultValue:{value:"defaultArgs.type"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"unordered"'},{value:'"ordered"'}]}},items:{defaultValue:{value:"defaultArgs.items"},description:"@uxpinignoreprop",name:"items",required:!1,type:{name:'["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]'}},bulletType:{defaultValue:{value:"defaultArgs.bulletType"},description:"@uxpinpropname Unordered bullet type",name:"bulletType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"icon"'},{value:'"disc"'}]}},bulletIcon:{defaultValue:{value:"defaultArgs.bulletIcon"},description:"@uxpinpropname Unordered bullet icon",name:"bulletIcon",required:!1,type:{name:"enum",value:[{value:'"option-1"'},{value:'"option-2"'},{value:'"option-3"'}]}},noMargin:{defaultValue:{value:"defaultArgs.noMargin"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"defaultArgs.noPadding"},description:"",name:"noPadding",required:!1,type:{name:"boolean"}},children:{defaultValue:{value:"defaultArgs.children"},description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/ordered-unordered-list/src/template.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"../../components/ordered-unordered-list/src/template.tsx#List"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{type:{defaultValue:{value:"defaultArgs.type"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"unordered"'},{value:'"ordered"'}]}},items:{defaultValue:{value:"defaultArgs.items"},description:"@uxpinignoreprop",name:"items",required:!1,type:{name:'["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]'}},bulletType:{defaultValue:{value:"defaultArgs.bulletType"},description:"@uxpinpropname Unordered bullet type",name:"bulletType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"icon"'},{value:'"disc"'}]}},bulletIcon:{defaultValue:{value:"defaultArgs.bulletIcon"},description:"@uxpinpropname Unordered bullet icon",name:"bulletIcon",required:!1,type:{name:"enum",value:[{value:'"option-1"'},{value:'"option-2"'},{value:'"option-3"'}]}},noMargin:{defaultValue:{value:"defaultArgs.noMargin"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"defaultArgs.noPadding"},description:"",name:"noPadding",required:!1,type:{name:"boolean"}},children:{defaultValue:{value:"defaultArgs.children"},description:"@uxpinpropname Content",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/ordered-unordered-list/src/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/ordered-unordered-list/src/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/utils/parseChildren.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>parseChildren});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const parseChildren=children=>"string"==typeof children?children.split(/\r?\n|\r|\n/g):children;try{parseChildren.displayName="parseChildren",parseChildren.__docgenInfo={description:"",displayName:"parseChildren",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/utils/parseChildren.tsx#parseChildren"]={docgenInfo:parseChildren.__docgenInfo,name:"parseChildren",path:"../../components/utils/parseChildren.tsx#parseChildren"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/ordered-unordered-list/src/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.rvo-ul{list-style-type:disc}.rvo-ul--none{list-style-type:none}.rvo-ul--icon li{align-items:center;display:flex;list-style-type:none}.rvo-ul--icon li::before{background-size:var(--rvo-list-icon-size) var(--rvo-list-icon-size);content:"";display:inline-block;height:var(--rvo-list-icon-size);margin-inline-end:var(--rvo-list-icon-gap);width:var(--rvo-list-icon-size)}.rvo-ul--icon-option-1 li::before{background-image:var(--rvo-list-icon-option-1-image)}.rvo-ul--icon-option-2 li::before{background-image:var(--rvo-list-icon-option-2-image)}.rvo-ul--icon-option-3 li::before{background-image:var(--rvo-list-icon-option-3-image)}.rvo-ol--no-margin,.rvo-ul--no-margin{margin-block-end:0;margin-block-start:0}.rvo-ul--no-padding{padding-inline-start:0}.rvo-ol--no-padding,.rvo-ul--no-padding:not(.rvo-ul--icon,.rvo-ul--none){padding-inline-start:var(--rvo-list-zero-padding-offset)}',"",{version:3,sources:["webpack://./../../components/ordered-unordered-list/src/index.scss"],names:[],mappings:"AAKA,QACE,oBAAA,CAGF,cACE,oBAAA,CAGF,iBACE,kBAAA,CACA,YAAA,CACA,oBAAA,CAEA,yBACE,mEAAA,CACA,UAAA,CACA,oBAAA,CACA,gCAAA,CACA,0CAAA,CACA,+BAAA,CAIJ,kCACE,oDAAA,CAGF,kCACE,oDAAA,CAGF,kCACE,oDAAA,CAGF,sCAEE,kBAAA,CACA,oBAAA,CAGF,oBACE,sBAAA,CAGF,yEAEE,wDAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-ul {\n  list-style-type: disc;\n}\n\n.rvo-ul--none {\n  list-style-type: none;\n}\n\n.rvo-ul--icon li {\n  align-items: center;\n  display: flex;\n  list-style-type: none;\n\n  &::before {\n    background-size: var(--rvo-list-icon-size) var(--rvo-list-icon-size);\n    content: "";\n    display: inline-block;\n    height: var(--rvo-list-icon-size);\n    margin-inline-end: var(--rvo-list-icon-gap);\n    width: var(--rvo-list-icon-size);\n  }\n}\n\n.rvo-ul--icon-option-1 li::before {\n  background-image: var(--rvo-list-icon-option-1-image);\n}\n\n.rvo-ul--icon-option-2 li::before {\n  background-image: var(--rvo-list-icon-option-2-image);\n}\n\n.rvo-ul--icon-option-3 li::before {\n  background-image: var(--rvo-list-icon-option-3-image);\n}\n\n.rvo-ol--no-margin,\n.rvo-ul--no-margin {\n  margin-block-end: 0;\n  margin-block-start: 0;\n}\n\n.rvo-ul--no-padding {\n  padding-inline-start: 0;\n}\n\n.rvo-ol--no-padding,\n.rvo-ul--no-padding:not(.rvo-ul--icon, .rvo-ul--none) {\n  padding-inline-start: var(--rvo-list-zero-padding-offset);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../components/ordered-unordered-list/src/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.96.1_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/ordered-unordered-list/src/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_1_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);