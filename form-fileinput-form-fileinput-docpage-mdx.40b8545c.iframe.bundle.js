/*! For license information please see form-fileinput-form-fileinput-docpage-mdx.40b8545c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[7644,7146],{"../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/form-fileinput/form-fileinput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/form-fileinput/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Form/File input",component:__webpack_require__("../../components/form-fileinput/template.tsx").zp,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"form-fileinput"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"File input"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'File input'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/form-fileinput/form-fileinput.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>form_fileinput_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.2.65_encoding@0.1.13_react-d_3n2uj44ig3vw264klrh4jnyozm/node_modules/@storybook/blocks/dist/index.mjs");const CHANGELOG_namespaceObject="# `@nl-rvo/form-fileinput`\n\n## Pre-releases\n\n*@nl-rvo/component-library-css@1.0.0-alpha.290*:\nUpdated snippet to link helper text to field with `aria-described-by`.\n\n*@nl-rvo/component-library-css@1.0.0-alpha.61*:\nAdded component",README_namespaceObject="Regels:\n\n- Toon altijd bestandsrestricties (formaat, extensies, maximale bestandsgroote etc.) onder de upload knop.\n";var form_fileinput_stories=__webpack_require__("../../components/form-fileinput/form-fileinput.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx"),README=__webpack_require__("../../components/form-field/README.md");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:form_fileinput_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:form_fileinput_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:CHANGELOG_namespaceObject})]})}const form_fileinput_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/form-fileinput/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/form-fileinput/template.tsx");const defaultArgs={id:"field",disabled:!1,focus:!1,invalid:!1,required:!1,accept:"",multiple:!0}},"../../components/form-fileinput/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zp:()=>FileInput,Uv:()=>argTypes});var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),defaultArgs=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/form-fileinput/defaultArgs.ts")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),form_fileinput=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/form-fileinput/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(form_fileinput.A,options);form_fileinput.A&&form_fileinput.A.locals&&form_fileinput.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={id:{control:"text"},disabled:{control:"boolean"},focus:{control:"boolean"},invalid:{control:"boolean"},required:{control:"boolean"},accept:{control:"text"},multiple:{control:"boolean"}},FileInput=({id=defaultArgs.D.id,disabled=defaultArgs.D.disabled,focus=defaultArgs.D.focus,invalid=defaultArgs.D.invalid,required=defaultArgs.D.required,accept=defaultArgs.D.accept,multiple=defaultArgs.D.multiple,...otherProps})=>(0,jsx_runtime.jsx)("input",{id,type:"file",className:(0,clsx.A)("rvo-file-input",disabled&&"rvo-file-input--disabled",focus&&"rvo-file-input--focus rvo-file-input--focus-visible",invalid&&"rvo-file-input--invalid",required&&"rvo-file-input--required"),disabled:disabled||null,"aria-invalid":invalid||null,accept:accept.length&&accept||null,multiple:multiple||null,...otherProps});FileInput.displayName="FileInput";try{FileInput.displayName="FileInput",FileInput.__docgenInfo={description:"",displayName:"FileInput",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"",name:"focus",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},accept:{defaultValue:{value:"defaultArgs.accept"},description:"",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"defaultArgs.multiple"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: any) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-fileinput/template.tsx#FileInput"]={docgenInfo:FileInput.__docgenInfo,name:"FileInput",path:"../../components/form-fileinput/template.tsx#FileInput"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"",name:"focus",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},accept:{defaultValue:{value:"defaultArgs.accept"},description:"",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"defaultArgs.multiple"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: any) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-fileinput/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/form-fileinput/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.2.65_encoding@0.1.13_react-d_3n2uj44ig3vw264klrh4jnyozm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/form-fileinput/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.2__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_2_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-file-input::file-selector-button{background-color:rgba(0,0,0,0);border:none;color:var(--rvo-file-input-color, var(--utrecht-form-control-color));font-family:var(--utrecht-form-control-font-family, var(--utrecht-document-font-family));font-weight:var(--rvo-file-input-font-weight)}.rvo-file-input{background-color:var(--rvo-file-input-background-color, var(--utrecht-form-control-background-color));border-color:var(--rvo-file-input-border-color, var(--utrecht-form-control-border-color));border-radius:var(--rvo-file-input-border-radius, var(--utrecht-form-control-border-radius));border-style:solid;border-width:var(--rvo-file-input-border-width, var(--utrecht-form-control-border-width));font-family:var(--utrecht-form-control-font-family, var(--utrecht-document-font-family));height:45px;padding-block-end:var(--rvo-file-input-padding-block-end, var(--utrecht-form-control-padding-block-end));padding-block-start:var(--rvo-file-input-padding-block-start, var(--utrecht-form-control-padding-block-start));padding-inline-end:var(--rvo-file-input-padding-inline-end, var(--utrecht-form-control-padding-inline-end));padding-inline-start:var(--rvo-file-input-padding-inline-start, var(--utrecht-form-control-padding-inline-start));z-index:1}.rvo-file-input:focus:not(:disabled,[aria-disabled=true],.rvo-file-input--disabled),.rvo-file-input--focus:not(:disabled,[aria-disabled=true],.rvo-file-input--disabled){background-color:var(--rvo-file-input-focus-background-color, var(--utrecht-form-control-background-color));border-color:var(--rvo-file-input-focus-border-color, var(--utrecht-form-control-border-color));border-width:var(--rvo-file-input-focus-border-width, var(--utrecht-form-control-border-width));box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--rvo-file-input-focus-outline-color, var(--utrecht-focus-outline-color));outline-offset:var(--rvo-file-input-focus-outline-offset, var(--utrecht-focus-outline-offset));outline-style:var(--rvo-file-input-focus-outline-style, var(--utrecht-focus-outline-style));outline-width:var(--rvo-file-input-focus-outline-width, var(--utrecht-focus-outline-width))}.rvo-file-input:disabled,.rvo-file-input--disabled{background-color:var(--rvo-file-input-disabled-background-color, var(--utrecht-form-control-disabled-background-color));border-color:var(--rvo-file-input-disabled-border-color, var(--utrecht-form-control-disabled-border-color));border-width:var(--rvo-file-input-disabled-border-width, var(--utrecht-form-control-disabled-border-width));color:var(--rvo-file-input-disabled-color, var(--utrecht-form-control-disabled-color))}.rvo-file-input:invalid,.rvo-file-input--invalid{background-color:var(--rvo-file-input-invalid-background-color, var(--utrecht-form-control-invalid-background-color));border-color:var(--rvo-file-input-invalid-border-color, var(--utrecht-form-control-invalid-border-color));border-width:var(--rvo-file-input-invalid-border-width, var(--utrecht-form-control-invalid-border-width))}","",{version:3,sources:["webpack://./../../components/form-fileinput/index.scss"],names:[],mappings:"AAKA,sCACE,8BAAA,CACA,WAAA,CACA,oEAAA,CACA,wFAAA,CACA,6CAAA,CAGF,gBACE,qGAAA,CACA,yFAAA,CACA,4FAAA,CACA,kBAAA,CACA,yFAAA,CACA,wFAAA,CACA,WAAA,CACA,wGAAA,CACA,8GAAA,CACA,2GAAA,CACA,iHAAA,CACA,SAAA,CAGF,yKAEE,2GAAA,CACA,+FAAA,CACA,+FAAA,CACA,oHAAA,CACA,2FAAA,CACA,8FAAA,CACA,2FAAA,CACA,2FAAA,CAGF,mDAEE,uHAAA,CAIA,2GAAA,CACA,2GAAA,CACA,sFAAA,CAGF,iDAEE,qHAAA,CAIA,yGAAA,CACA,yGAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-file-input::file-selector-button {\n  background-color: transparent;\n  border: none;\n  color: var(--rvo-file-input-color, var(--utrecht-form-control-color));\n  font-family: var(--utrecht-form-control-font-family, var(--utrecht-document-font-family));\n  font-weight: var(--rvo-file-input-font-weight);\n}\n\n.rvo-file-input {\n  background-color: var(--rvo-file-input-background-color, var(--utrecht-form-control-background-color));\n  border-color: var(--rvo-file-input-border-color, var(--utrecht-form-control-border-color));\n  border-radius: var(--rvo-file-input-border-radius, var(--utrecht-form-control-border-radius));\n  border-style: solid;\n  border-width: var(--rvo-file-input-border-width, var(--utrecht-form-control-border-width));\n  font-family: var(--utrecht-form-control-font-family, var(--utrecht-document-font-family));\n  height: 45px;\n  padding-block-end: var(--rvo-file-input-padding-block-end, var(--utrecht-form-control-padding-block-end));\n  padding-block-start: var(--rvo-file-input-padding-block-start, var(--utrecht-form-control-padding-block-start));\n  padding-inline-end: var(--rvo-file-input-padding-inline-end, var(--utrecht-form-control-padding-inline-end));\n  padding-inline-start: var(--rvo-file-input-padding-inline-start, var(--utrecht-form-control-padding-inline-start));\n  z-index: 1;\n}\n\n.rvo-file-input:focus:not(:disabled, [aria-disabled="true"], .rvo-file-input--disabled),\n.rvo-file-input--focus:not(:disabled, [aria-disabled="true"], .rvo-file-input--disabled) {\n  background-color: var(--rvo-file-input-focus-background-color, var(--utrecht-form-control-background-color));\n  border-color: var(--rvo-file-input-focus-border-color, var(--utrecht-form-control-border-color));\n  border-width: var(--rvo-file-input-focus-border-width, var(--utrecht-form-control-border-width));\n  box-shadow: 0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);\n  outline-color: var(--rvo-file-input-focus-outline-color, var(--utrecht-focus-outline-color));\n  outline-offset: var(--rvo-file-input-focus-outline-offset, var(--utrecht-focus-outline-offset));\n  outline-style: var(--rvo-file-input-focus-outline-style, var(--utrecht-focus-outline-style));\n  outline-width: var(--rvo-file-input-focus-outline-width, var(--utrecht-focus-outline-width));\n}\n\n.rvo-file-input:disabled,\n.rvo-file-input--disabled {\n  background-color: var(\n    --rvo-file-input-disabled-background-color,\n    var(--utrecht-form-control-disabled-background-color)\n  );\n  border-color: var(--rvo-file-input-disabled-border-color, var(--utrecht-form-control-disabled-border-color));\n  border-width: var(--rvo-file-input-disabled-border-width, var(--utrecht-form-control-disabled-border-width));\n  color: var(--rvo-file-input-disabled-color, var(--utrecht-form-control-disabled-color));\n}\n\n.rvo-file-input:invalid,\n.rvo-file-input--invalid {\n  background-color: var(\n    --rvo-file-input-invalid-background-color,\n    var(--utrecht-form-control-invalid-background-color)\n  );\n  border-color: var(--rvo-file-input-invalid-border-color, var(--utrecht-form-control-invalid-border-color));\n  border-width: var(--rvo-file-input-invalid-border-width, var(--utrecht-form-control-invalid-border-width));\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../components/form-field/README.md":module=>{"use strict";module.exports="Algemene veldregels:\n\n- Gebruik (optioneel) bij optionele formulier velden in plaats van \\* (verplicht) bij verplichte formulier velden\n- Gebruik expandable tekst in plaats van een toggle knop\n- Gebruik expandable tekst in plaats van een ‘?’ uitleg icoontje\n"}}]);