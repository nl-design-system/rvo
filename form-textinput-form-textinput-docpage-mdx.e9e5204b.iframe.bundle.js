/*! For license information please see form-textinput-form-textinput-docpage-mdx.e9e5204b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[5766,3960],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/form-textinput/form-textinput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/form-textinput/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Form/Text input",component:__webpack_require__("../../components/form-textinput/template.tsx").ks,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"form-textinput"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Text input"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Text input'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/form-textinput/form-textinput.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>form_textinput_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.2.65_encoding@0.1.13_react-d_3n2uj44ig3vw264klrh4jnyozm/node_modules/@storybook/blocks/dist/index.mjs");const CHANGELOG_namespaceObject="# `@nl-rvo/form-textinput`\n\n## Pre-releases\n\n*@nl-rvo/component-library-css@1.0.0-alpha.288*:\nAdded xs size option (`utrecht-textbox--xs`)\n\n*@nl-rvo/component-library-css@1.0.0-alpha.238*:\nAdded max length + remaining characters indicator\n\n*@nl-rvo/component-library-css@1.0.0-alpha.17*:\nAdded component",README_namespaceObject="Documentatie voor text input\n";var form_textinput_stories=__webpack_require__("../../components/form-textinput/form-textinput.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx"),README=__webpack_require__("../../components/form-field/README.md");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:form_textinput_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:form_textinput_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:CHANGELOG_namespaceObject})]})}const form_textinput_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/form-textinput/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/form-textinput/template.tsx");const defaultArgs={id:"field",disabled:!1,focus:!1,invalid:!1,readOnly:!1,required:!1,inputType:"text",placeholder:"",value:"",validation:"text",prefix:"",suffix:"",size:"lg",maxLength:null,maxLengthIndicator:!0}},"../../components/form-textinput/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Uv:()=>argTypes,ks:()=>TextInput});__webpack_require__("../../components/form-textinput/index.scss");var _utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@utrecht+component-library-react@3.0.1-alpha.22_date-fns@3.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@utrecht/component-library-react/dist/index.esm.js"),clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_defaultArgs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/form-textinput/defaultArgs.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={id:{control:"text"},disabled:{control:"boolean"},focus:{control:"boolean"},invalid:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"},inputType:{options:["text","textarea"],control:{type:"radio"}},placeholder:{control:"text"},value:{control:"text"},validation:{options:["text","number","currency"],control:{type:"radio"}},prefix:{control:"text"},suffix:{control:"text"},size:{options:["xs","sm","md","lg"],control:{type:"radio"}},maxLength:{control:"number"},maxLengthIndicator:{control:"boolean"}},TextInput=({id=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.id,disabled=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.disabled,focus=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.focus,invalid=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.invalid,readOnly=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.readOnly,required=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.required,inputType=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.inputType,placeholder=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.placeholder,value=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.value,validation=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.validation,prefix=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.prefix,suffix=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.suffix,size=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.size,maxLength=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.maxLength,maxLengthIndicator=_defaultArgs__WEBPACK_IMPORTED_MODULE_2__.D.maxLengthIndicator,...otherProps})=>{const props={id,disabled,invalid,required,readOnly,placeholder,defaultValue:value,...("number"===validation||"currency"===validation)&&{inputMode:"numeric",pattern:"currency"===validation?"[0-9.,]*":"[0-9]*"},maxLength,...otherProps},[currentValue,setCurrentValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);if("text"===inputType){const inputMarkup=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_4__.Rj,{...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.A)("xs"===size&&"utrecht-textbox--xs","sm"===size&&"utrecht-textbox--sm","md"===size&&"utrecht-textbox--md",focus&&["utrecht-textbox--focus","utrecht-textbox--focus-visible"])});return prefix||suffix?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.A)("rvo-layout-row","rvo-layout-gap--md"),children:[prefix,inputMarkup,suffix]}):inputMarkup}return maxLength&&maxLengthIndicator?(props.onChange=event=>{otherProps.onChange?.(event),setCurrentValue(event.target.value)},(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.A)("rvo-layout-column","rvo-layout-gap--xs"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_4__.TM,{...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.A)(focus&&["utrecht-textbox--focus","utrecht-textbox--focus-visible"])}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{className:"utrecht-textbox-remaining-chars",children:["Nog ",maxLength-currentValue.length," teken",maxLength-currentValue.length>1&&"s"," over"]})]})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_4__.TM,{...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.A)(focus&&["utrecht-textbox--focus","utrecht-textbox--focus-visible"])})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"",name:"focus",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"defaultArgs.readOnly"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},inputType:{defaultValue:{value:"defaultArgs.inputType"},description:"",name:"inputType",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"defaultArgs.placeholder"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:"defaultArgs.value"},description:"",name:"value",required:!1,type:{name:"string"}},validation:{defaultValue:{value:"defaultArgs.validation"},description:"",name:"validation",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"defaultArgs.prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"defaultArgs.suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"string"}},maxLength:{defaultValue:{value:"defaultArgs.maxLength"},description:"",name:"maxLength",required:!1,type:{name:"number"}},maxLengthIndicator:{defaultValue:{value:"defaultArgs.maxLengthIndicator"},description:"",name:"maxLengthIndicator",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: any) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"(event: any) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-textinput/template.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"../../components/form-textinput/template.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"",name:"focus",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"defaultArgs.readOnly"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},inputType:{defaultValue:{value:"defaultArgs.inputType"},description:"",name:"inputType",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"defaultArgs.placeholder"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:"defaultArgs.value"},description:"",name:"value",required:!1,type:{name:"string"}},validation:{defaultValue:{value:"defaultArgs.validation"},description:"",name:"validation",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"defaultArgs.prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"defaultArgs.suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"string"}},maxLength:{defaultValue:{value:"defaultArgs.maxLength"},description:"",name:"maxLength",required:!1,type:{name:"number"}},maxLengthIndicator:{defaultValue:{value:"defaultArgs.maxLengthIndicator"},description:"",name:"maxLengthIndicator",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: any) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"(event: any) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-textinput/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/form-textinput/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.2.65_encoding@0.1.13_react-d_3n2uj44ig3vw264klrh4jnyozm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/form-textinput/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-textbox{height:45px}textarea.utrecht-textbox{min-height:96px;resize:vertical}.utrecht-textbox:disabled,.utrecht-textbox[aria-disabled=true],.utrecht-textbox.utrecht-textbox--disabled{outline:none}.utrecht-textbox:focus,.utrecht-textbox--focus{outline-offset:var(--rvo-textbox-outline-offset)}.utrecht-textbox--focus.utrecht-textbox--invalid,.utrecht-textbox:focus.utrecht-textbox--invalid,.utrecht-textbox--focus.utrecht-textbox:invalid,.utrecht-textbox:focus.utrecht-textbox:invalid{border-color:var(--rvo-textbox-invalid-focus-border-color);outline-color:var(--rvo-textbox-invalid-focus-outline-color)}.utrecht-textbox--xs{width:var(--rvo-textbox-xs-width)}.utrecht-textbox--sm{width:var(--rvo-textbox-sm-width)}.utrecht-textbox--md{width:var(--rvo-textbox-md-width)}.utrecht-textbox-remaining-chars{align-self:flex-end}","",{version:3,sources:["webpack://./../../components/form-textinput/index.scss"],names:[],mappings:"AAKA,iBACE,WAAA,CAGF,yBACE,eAAA,CACA,eAAA,CAGF,0GAGE,YAAA,CAGF,+CAEE,gDAAA,CAGF,gMAIE,0DAAA,CACA,4DAAA,CAGF,qBACE,iCAAA,CAGF,qBACE,iCAAA,CAGF,qBACE,iCAAA,CAGF,iCACE,mBAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.utrecht-textbox {\n  height: 45px;\n}\n\ntextarea.utrecht-textbox {\n  min-height: 96px;\n  resize: vertical;\n}\n\n.utrecht-textbox:disabled,\n.utrecht-textbox[aria-disabled="true"],\n.utrecht-textbox.utrecht-textbox--disabled {\n  outline: none;\n}\n\n.utrecht-textbox:focus,\n.utrecht-textbox--focus {\n  outline-offset: var(--rvo-textbox-outline-offset);\n}\n\n.utrecht-textbox--focus.utrecht-textbox--invalid,\n.utrecht-textbox:focus.utrecht-textbox--invalid,\n.utrecht-textbox--focus.utrecht-textbox:invalid,\n.utrecht-textbox:focus.utrecht-textbox:invalid {\n  border-color: var(--rvo-textbox-invalid-focus-border-color);\n  outline-color: var(--rvo-textbox-invalid-focus-outline-color);\n}\n\n.utrecht-textbox--xs {\n  width: var(--rvo-textbox-xs-width);\n}\n\n.utrecht-textbox--sm {\n  width: var(--rvo-textbox-sm-width);\n}\n\n.utrecht-textbox--md {\n  width: var(--rvo-textbox-md-width);\n}\n\n.utrecht-textbox-remaining-chars {\n  align-self: flex-end;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../components/form-textinput/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/form-textinput/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals},"../../components/form-field/README.md":module=>{"use strict";module.exports="Algemene veldregels:\n\n- Gebruik (optioneel) bij optionele formulier velden in plaats van \\* (verplicht) bij verplichte formulier velden\n- Gebruik expandable tekst in plaats van een toggle knop\n- Gebruik expandable tekst in plaats van een ‘?’ uitleg icoontje\n"}}]);