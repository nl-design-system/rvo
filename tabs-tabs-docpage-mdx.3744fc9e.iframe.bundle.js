/*! For license information please see tabs-tabs-docpage-mdx.3744fc9e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[5386,6236],{"../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/tabs/tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/tabs/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Tabs",component:__webpack_require__("../../components/tabs/template.tsx").tU,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"tabs"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Tabs"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Tabs'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/tabs/tabs.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>tabs_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs");var tabs_stories=__webpack_require__("../../components/tabs/tabs.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:tabs_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:tabs_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:"# Tabs\n\nMet tabs kunnen gebruikers navigeren tussen verschillende secties content die gerelateerd zijn aan elkaar waar bij telkens één gekozen sectie wordt getoond. Hierbij blijft de gebruiker op dezelfde pagina zonder dat deze wordt herladen.\n\n## Wanneer gebruik je tabs\n\nAls je gebruikers snel wil laten schakelen tussen verschillende content secties met gerelateerde content op dezelfde pagina.\n\n## Anatomie van het component\n\nHet component bestaat uit:\n\n- Titel van een tab\n- Inhoud van een tab\n\n## Richtlijnen\n\n- Zorg ervoor dat de eerste actieve tab relevant is voor de meeste gebruikers.\n- Gebruik geen tabs als de gebruiker de content in de verschillende tabs in één overzicht moet kunnen zien en scannen.\n- Gebruik duidelijke titels van de tabs die aangeven welke content er in de sectie getoond wordt.\n- Gebruik tabs niet als vervanging van navigatie.\n- Tabs zijn niet geschikt wanneer een gebruiker secties met content met elkaar moet vergelijken.\n- Kijk eerst of de content versimpeld kan worden voordat er gebruik gemaakt wordt van tabs.\n- Onderzoek of het beter is om content op de te delen in verschillende pagina's.\n- Als er teveel tabs nodig zijn en er horizontaal een gebrek aan ruimte ontstaat kijk dan of een Accordion een betere oplossing is.\n\n## Rijkshuisstijl\n\nDe Rijkshuisstijl heeft geen specifieke eisen of richtlijnen wat betreft tabs.\n\n## Bronnen\n\n- [Tabs - GOV.UK Design System](https://web.archive.org/web/20240830090226/https://design-system.service.gov.uk/components/tabs/)\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:"# `@nl-rvo/tabs`\n\n## 1.0.0\n\n### Major Changes\n\n- 5a3bda4: Added tabs component\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.139_:\nAdded component\n"})]})}const tabs_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/tabs/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/tabs/template.tsx");const defaultArgs={tabs:[{label:"Tab 1",href:"#tab-1"},{label:"Tab 2",href:"#tab-2"}],activeTab:0}},"../../components/tabs/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{tU:()=>Tabs});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defaultArgs=__webpack_require__("../../components/tabs/defaultArgs.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tabs=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/tabs/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tabs.A,options);tabs.A&&tabs.A.locals&&tabs.A.locals;__webpack_require__("../../components/ordered-unordered-list/index.scss");var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs");const defaultArgs_defaultArgs_label="Tab Item label",defaultArgs_defaultArgs_href="#",defaultArgs_defaultArgs_selected=!1;var link_template=__webpack_require__("../../components/link/template.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const TabItem=({label=defaultArgs_defaultArgs_label,href=defaultArgs_defaultArgs_href,selected=defaultArgs_defaultArgs_selected,onClick,...props})=>(0,jsx_runtime.jsx)("li",{role:"presentation",className:"rvo-tabs__item",children:(0,jsx_runtime.jsx)(link_template.Ay,{role:"tab",href,"aria-selected":selected,className:(0,clsx.A)("rvo-tabs__item-link",selected&&"rvo-tabs__item-link--active"),noUnderline:!0,active:selected,weight:selected?"bold":"normal",onClick,...props,children:label})});TabItem.displayName="TabItem";const tab_item_template=TabItem;try{TabItem.displayName="TabItem",TabItem.__docgenInfo={description:"",displayName:"TabItem",props:{label:{defaultValue:{value:"defaultArgs.label"},description:"",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:"defaultArgs.href"},description:"",name:"href",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"defaultArgs.selected"},description:"@uxpinignoreprop",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"@uxpinignoreprop",name:"onClick",required:!1,type:{name:"(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/tabs/tab-item/template.tsx#TabItem"]={docgenInfo:TabItem.__docgenInfo,name:"TabItem",path:"../../components/tabs/tab-item/template.tsx#TabItem"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{label:{defaultValue:{value:"defaultArgs.label"},description:"",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:"defaultArgs.href"},description:"",name:"href",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"defaultArgs.selected"},description:"@uxpinignoreprop",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"@uxpinignoreprop",name:"onClick",required:!1,type:{name:"(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/tabs/tab-item/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/tabs/tab-item/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}const Tabs=({tabs=defaultArgs.D.tabs,activeTab=defaultArgs.D.activeTab,onChange,children})=>{const[currentTab,setCurrentTab]=(0,react.useState)(activeTab);(0,react.useEffect)((()=>{setCurrentTab(activeTab)}),[activeTab]);const handleTabClick=tabIndex=>{setCurrentTab(tabIndex),onChange?.(tabIndex)};return(0,jsx_runtime.jsx)("ul",{className:"rvo-tabs rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2",role:"tablist","aria-label":"Tabs",children:children&&react.Children.map(children,((child,index)=>(0,jsx_runtime.jsx)(tab_item_template,{label:child.props.label,href:child.props.href,selected:currentTab===index,onClick:e=>{e.preventDefault(),handleTabClick(index)}},`tab-${index}`)))||tabs&&tabs.map(((tab,index)=>(0,jsx_runtime.jsx)(tab_item_template,{label:tab.label,href:tab.href,selected:currentTab===index,onClick:e=>{e.preventDefault(),handleTabClick(index)}},`tab-${index}`)))})};Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:{value:"defaultArgs.tabs"},description:"@uxpinignoreprop",name:"tabs",required:!1,type:{name:"ITabItemProps[]"}},activeTab:{defaultValue:{value:"defaultArgs.activeTab"},description:"@uxpinbind onChange 0",name:"activeTab",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(activeTab: number) => void"}},children:{defaultValue:null,description:"@uxpinpropname Tab items",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/tabs/template.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"../../components/tabs/template.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{tabs:{defaultValue:{value:"defaultArgs.tabs"},description:"@uxpinignoreprop",name:"tabs",required:!1,type:{name:"ITabItemProps[]"}},activeTab:{defaultValue:{value:"defaultArgs.activeTab"},description:"@uxpinbind onChange 0",name:"activeTab",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(activeTab: number) => void"}},children:{defaultValue:null,description:"@uxpinpropname Tab items",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/tabs/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/tabs/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/ordered-unordered-list/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.rvo-ul{list-style-type:disc}.rvo-ul--none{list-style-type:none}.rvo-ul--icon li{align-items:center;display:flex;list-style-type:none}.rvo-ul--icon li::before{background-size:var(--rvo-list-icon-size) var(--rvo-list-icon-size);content:"";display:inline-block;height:var(--rvo-list-icon-size);margin-inline-end:var(--rvo-list-icon-gap);width:var(--rvo-list-icon-size)}.rvo-ul--icon-option-1 li::before{background-image:var(--rvo-list-icon-option-1-image)}.rvo-ul--icon-option-2 li::before{background-image:var(--rvo-list-icon-option-2-image)}.rvo-ul--icon-option-3 li::before{background-image:var(--rvo-list-icon-option-3-image)}.rvo-ol--no-margin,.rvo-ul--no-margin{margin-block-end:0;margin-block-start:0}.rvo-ul--no-padding{padding-inline-start:0}.rvo-ol--no-padding,.rvo-ul--no-padding:not(.rvo-ul--icon,.rvo-ul--none){padding-inline-start:var(--rvo-list-zero-padding-offset)}',"",{version:3,sources:["webpack://./../../components/ordered-unordered-list/index.scss"],names:[],mappings:"AAKA,QACE,oBAAA,CAGF,cACE,oBAAA,CAGF,iBACE,kBAAA,CACA,YAAA,CACA,oBAAA,CAEA,yBACE,mEAAA,CACA,UAAA,CACA,oBAAA,CACA,gCAAA,CACA,0CAAA,CACA,+BAAA,CAIJ,kCACE,oDAAA,CAGF,kCACE,oDAAA,CAGF,kCACE,oDAAA,CAGF,sCAEE,kBAAA,CACA,oBAAA,CAGF,oBACE,sBAAA,CAGF,yEAEE,wDAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-ul {\n  list-style-type: disc;\n}\n\n.rvo-ul--none {\n  list-style-type: none;\n}\n\n.rvo-ul--icon li {\n  align-items: center;\n  display: flex;\n  list-style-type: none;\n\n  &::before {\n    background-size: var(--rvo-list-icon-size) var(--rvo-list-icon-size);\n    content: "";\n    display: inline-block;\n    height: var(--rvo-list-icon-size);\n    margin-inline-end: var(--rvo-list-icon-gap);\n    width: var(--rvo-list-icon-size);\n  }\n}\n\n.rvo-ul--icon-option-1 li::before {\n  background-image: var(--rvo-list-icon-option-1-image);\n}\n\n.rvo-ul--icon-option-2 li::before {\n  background-image: var(--rvo-list-icon-option-2-image);\n}\n\n.rvo-ul--icon-option-3 li::before {\n  background-image: var(--rvo-list-icon-option-3-image);\n}\n\n.rvo-ol--no-margin,\n.rvo-ul--no-margin {\n  margin-block-end: 0;\n  margin-block-start: 0;\n}\n\n.rvo-ul--no-padding {\n  padding-inline-start: 0;\n}\n\n.rvo-ol--no-padding,\n.rvo-ul--no-padding:not(.rvo-ul--icon, .rvo-ul--none) {\n  padding-inline-start: var(--rvo-list-zero-padding-offset);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/tabs/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-tabs__item{list-style:none}.rvo-tabs__item .rvo-tabs__item-link{font-weight:var(--rvo-tabs-font-weight)}.rvo-tabs__item .rvo-tabs__item-link--active{font-weight:var(--rvo-tabs-active-font-weight)}@media(min-width: 600px){.rvo-tabs{display:inline-flex}.rvo-tabs li.rvo-tabs__item::before{display:none}.rvo-tabs li.rvo-tabs__item .rvo-tabs__item-link{border-bottom-color:var(--rvo-tabs-border-bottom-color);border-bottom-style:var(--rvo-tabs-border-bottom-style);border-bottom-width:var(--rvo-tabs-border-bottom-width);color:var(--rvo-tabs-color);margin-block-end:-1px;padding-block-end:var(--rvo-tabs-padding-block-end);padding-block-start:var(--rvo-tabs-padding-block-start);padding-inline-end:var(--rvo-tabs-padding-inline-end);padding-inline-start:var(--rvo-tabs-padding-inline-start);text-decoration:none}.rvo-tabs li.rvo-tabs__item .rvo-tabs__item-link:hover{border-bottom-color:var(--rvo-tabs-hover-border-bottom-color);border-bottom-style:var(--rvo-tabs-hover-border-bottom-style);border-bottom-width:var(--rvo-tabs-hover-border-bottom-width)}.rvo-tabs li.rvo-tabs__item .rvo-tabs__item-link--active{border-bottom-color:var(--rvo-tabs-active-border-bottom-color);border-bottom-style:var(--rvo-tabs-active-border-bottom-style);border-bottom-width:var(--rvo-tabs-active-border-bottom-width);color:var(--rvo-tabs-active-color);font-weight:var(--rvo-tabs-active-font-weight)}.rvo-tabs li.rvo-tabs__item .rvo-tabs__item-link--active:hover{color:var(--rvo-tabs-active-hover-color)}}","",{version:3,sources:["webpack://./../../components/tabs/index.scss"],names:[],mappings:"AAKA,gBACE,eAAA,CAEA,qCACE,uCAAA,CAGF,6CACE,8CAAA,CAIJ,yBACE,UACE,mBAAA,CAGE,oCACE,YAAA,CAGF,iDACE,uDAAA,CACA,uDAAA,CACA,uDAAA,CACA,2BAAA,CACA,qBAAA,CACA,mDAAA,CACA,uDAAA,CACA,qDAAA,CACA,yDAAA,CACA,oBAAA,CAEA,uDACE,6DAAA,CACA,6DAAA,CACA,6DAAA,CAIJ,yDACE,8DAAA,CACA,8DAAA,CACA,8DAAA,CACA,kCAAA,CACA,8CAAA,CAEA,+DACE,wCAAA,CAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-tabs__item {\n  list-style: none;\n\n  .rvo-tabs__item-link {\n    font-weight: var(--rvo-tabs-font-weight);\n  }\n\n  .rvo-tabs__item-link--active {\n    font-weight: var(--rvo-tabs-active-font-weight);\n  }\n}\n\n@media (min-width: 600px) {\n  .rvo-tabs {\n    display: inline-flex;\n\n    li.rvo-tabs__item {\n      &::before {\n        display: none;\n      }\n\n      .rvo-tabs__item-link {\n        border-bottom-color: var(--rvo-tabs-border-bottom-color);\n        border-bottom-style: var(--rvo-tabs-border-bottom-style);\n        border-bottom-width: var(--rvo-tabs-border-bottom-width);\n        color: var(--rvo-tabs-color);\n        margin-block-end: -1px;\n        padding-block-end: var(--rvo-tabs-padding-block-end);\n        padding-block-start: var(--rvo-tabs-padding-block-start);\n        padding-inline-end: var(--rvo-tabs-padding-inline-end);\n        padding-inline-start: var(--rvo-tabs-padding-inline-start);\n        text-decoration: none;\n\n        &:hover {\n          border-bottom-color: var(--rvo-tabs-hover-border-bottom-color);\n          border-bottom-style: var(--rvo-tabs-hover-border-bottom-style);\n          border-bottom-width: var(--rvo-tabs-hover-border-bottom-width);\n        }\n      }\n\n      .rvo-tabs__item-link--active {\n        border-bottom-color: var(--rvo-tabs-active-border-bottom-color);\n        border-bottom-style: var(--rvo-tabs-active-border-bottom-style);\n        border-bottom-width: var(--rvo-tabs-active-border-bottom-width);\n        color: var(--rvo-tabs-active-color);\n        font-weight: var(--rvo-tabs-active-font-weight);\n\n        &:hover {\n          color: var(--rvo-tabs-active-hover-color);\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../components/ordered-unordered-list/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.96.0_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/ordered-unordered-list/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_96_0_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);