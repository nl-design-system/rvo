/*! For license information please see text-helpers-text-helpers-docpage-mdx.94a27f04.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[8698,1446],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/text-helpers/text-helpers.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>text_helpers_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.14_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var text_helpers_stories=__webpack_require__("../../components/text-helpers/text-helpers.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:text_helpers_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.Dx,{}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:text_helpers_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"Documentation for text helper classes\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"*@nl-rvo/component-library-css@1.0.0-alpha.371*:\nAdded text helper classes\n"})]})}const text_helpers_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/text-helpers/text-helpers.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>text_helpers_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),text_helpers=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/text-helpers/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(text_helpers.Z,options);text_helpers.Z&&text_helpers.Z.locals&&text_helpers.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const TextHelpers=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:"De volgende helperklassen kunnen optioneel worden gebruikt voor tekst:"}),(0,jsx_runtime.jsx)("p",{className:"rvo-text--subtle",children:"Gebruik .rvo-text--subtle voor subtiele tekst"}),(0,jsx_runtime.jsx)("p",{className:"rvo-text--sm",children:"Gebruik .rvo-text--sm voor kleine tekst"}),(0,jsx_runtime.jsx)("p",{className:"rvo-text--md",children:"Gebruik .rvo-text--md voor middelgrote tekst"}),(0,jsx_runtime.jsx)("p",{className:"rvo-text--lg",children:"Gebruik .rvo-text--lg voor grote tekst"}),(0,jsx_runtime.jsx)("p",{className:"rvo-text--xl",children:"Gebruik .rvo-text--xl voor extra grote tekst"}),(0,jsx_runtime.jsx)("p",{className:"rvo-text--error",children:"Gebruik .rvo-text--error voor fouttekst"}),(0,jsx_runtime.jsx)("p",{className:"rvo-text--bold",children:"Gebruik .rvo-text--bold voor vetgedrukte tekst"}),(0,jsx_runtime.jsx)("p",{className:"rvo-text--italic",children:"Gebruik .rvo-text--italic voor cursieve tekst"})]});TextHelpers.displayName="TextHelpers";try{TextHelpers.displayName="TextHelpers",TextHelpers.__docgenInfo={description:"",displayName:"TextHelpers",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/text-helpers/template.tsx#TextHelpers"]={docgenInfo:TextHelpers.__docgenInfo,name:"TextHelpers",path:"../../components/text-helpers/template.tsx#TextHelpers"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/text-helpers/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/text-helpers/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}const text_helpers_stories={title:"Componenten/Text helpers",component:TextHelpers,parameters:{status:{type:"HIDDEN"},docusaurus:{link:"text-helpers"}}},Default={name:"Text helpers"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'Text helpers'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/text-helpers/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-text--subtle{color:var(--rvo-color-grijs-500)}.rvo-text--sm{font-size:var(--rvo-font-size-sm)}.rvo-text--md{font-size:var(--rvo-font-size-md)}.rvo-text--lg{font-size:var(--rvo-font-size-lg)}.rvo-text--xl{font-size:var(--rvo-font-size-xl)}.rvo-text--error{color:var(--rvo-color-rood)}.rvo-text--bold{font-weight:var(--rvo-font-weight-bold)}.rvo-text--italic{font-style:italic}","",{version:3,sources:["webpack://./../../components/text-helpers/index.scss"],names:[],mappings:"AAKA,kBACE,gCAAA,CAGF,cACE,iCAAA,CAGF,cACE,iCAAA,CAGF,cACE,iCAAA,CAGF,cACE,iCAAA,CAGF,iBACE,2BAAA,CAGF,gBACE,uCAAA,CAGF,kBACE,iBAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-text--subtle {\n  color: var(--rvo-color-grijs-500);\n}\n\n.rvo-text--sm {\n  font-size: var(--rvo-font-size-sm);\n}\n\n.rvo-text--md {\n  font-size: var(--rvo-font-size-md);\n}\n\n.rvo-text--lg {\n  font-size: var(--rvo-font-size-lg);\n}\n\n.rvo-text--xl {\n  font-size: var(--rvo-font-size-xl);\n}\n\n.rvo-text--error {\n  color: var(--rvo-color-rood);\n}\n\n.rvo-text--bold {\n  font-weight: var(--rvo-font-weight-bold);\n}\n\n.rvo-text--italic {\n  font-style: italic;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);