/*! For license information please see form-radio-button-form-radio-button-docpage-mdx.b5bf239c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[843,6720],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/form-radio-button/form-radio-button.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>form_radio_button_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.14_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var form_radio_button_stories=__webpack_require__("../../components/form-radio-button/form-radio-button.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:form_radio_button_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.Dx,{}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:form_radio_button_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"Een radio button zorgt ervoor dat een gebruiker een keuze kan maken uit verschillende opties.\n\n## Wanneer gebruik je een radio button?\n\nWanneer een gebruiker een keuze moet maken uit verschillende opties en het mogelijk is om slechts één optie te kiezen.\n\n## Anatomie van een radio button\n\nEen radio button bestaat uit:\n\n- Een radio button input\n- Een label\n\n## Richtlijnen\n\n- Selecteer standaard een optie. Zo weet de gebruiker dat er een optie gekozen moet worden.\n- Zorg ervoor dat de meest gebruikte optie standaard geselecteerd staat. Hierdoor hoeft een gebruiker niet extra te klikken.\n- Vermijd horizontale radio buttons. Deze zijn lastig te scannen omdat het onduidelijk is welke input bij welk label hoort.\n- Zorg ervoor dat zowel de input als de label aanklikbaar zijn. Omdat de input relatief klein is kan het voor sommige gebruikers lastig zijn deze aan te klikken.\n\n## Rijkshuisstijl\n\nDe omlijning van de radio button is zwart in plaats van donkergrijs zoals staat opgenomen in de Rijkshuisstijl om deze visueel gelijk te houden met de andere input elementen.\n\n## Bronnen\n\n- [Radio Buttons: Select One by Default or Leave All Unselected? - Kara Pernice](https://web.archive.org/web/20220808214536/https://www.nngroup.com/articles/radio-buttons-default-selection/)\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"*@nl-rvo/component-library-css@1.0.0-alpha.281*:\nSimplified snippet by replacing `rvo-layout-column`, `rvo-layout-gap--md` and `rvo-layout--wrap` with `rvo-radio-button`\n\n*@nl-rvo/component-library-css@1.0.0-alpha.24*:\nAdded component"})]})}const form_radio_button_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/form-radio-button/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/form-radio-button/template.tsx");const defaultArgs={id:"field",name:"group",label:"Label",checked:!1,hover:!1,disabled:!1,active:!1,focus:!1,invalid:!1,required:!1}},"../../components/form-radio-button/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EU:()=>RadioButton,PG:()=>argTypes});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),defaultArgs=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/form-radio-button/defaultArgs.ts")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),form_radio_button=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/form-radio-button/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(form_radio_button.Z,options);form_radio_button.Z&&form_radio_button.Z.locals&&form_radio_button.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={id:{control:"text"},name:{control:"text"},label:{control:"text"},checked:{control:"boolean"},hover:{control:"boolean"},disabled:{control:"boolean"},active:{control:"boolean"},focus:{control:"boolean"},invalid:{control:"boolean"},required:{control:"boolean"}},RadioButton=({id=defaultArgs._.id,name=defaultArgs._.name,label=defaultArgs._.label,checked=defaultArgs._.checked,hover=defaultArgs._.hover,disabled=defaultArgs._.disabled,active=defaultArgs._.active,focus=defaultArgs._.focus,invalid=defaultArgs._.invalid,required=defaultArgs._.required,onChange,onUpdateGroup,...otherProps})=>(0,jsx_runtime.jsxs)("label",{className:"rvo-custom-radio-button",htmlFor:id,children:[(0,jsx_runtime.jsx)("input",{id,name,type:"radio",checked:checked||null,disabled:disabled||null,required:required||null,className:(0,clsx_m.Z)("utrecht-custom-radio-button",checked&&"utrecht-custom-radio-button--checked",hover&&"rvo-radio-button--hover",disabled&&"utrecht-custom-radio-button--disabled",active&&"utrecht-custom-radio-button--active",focus&&"utrecht-custom-radio-button--focus-visible",invalid&&"utrecht-custom-radio-button--invalid",required&&"utrecht-custom-radio-button--required"),onChange:event=>{onChange?.(event),onUpdateGroup?.(event)},...otherProps}),label]});RadioButton.displayName="RadioButton";try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:{value:"defaultArgs.name"},description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:"defaultArgs.label"},description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"defaultArgs.checked"},description:"@uxpinbind onChange 0.target.checked",name:"checked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"defaultArgs.hover"},description:"",name:"hover",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"defaultArgs.active"},description:"",name:"active",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"",name:"focus",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: any) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: any) => void"}},onUpdateGroup:{defaultValue:null,description:"@uxpinignoreprop",name:"onUpdateGroup",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-radio-button/template.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"../../components/form-radio-button/template.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:{value:"defaultArgs.name"},description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:"defaultArgs.label"},description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"defaultArgs.checked"},description:"@uxpinbind onChange 0.target.checked",name:"checked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"defaultArgs.hover"},description:"",name:"hover",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"defaultArgs.active"},description:"",name:"active",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"",name:"focus",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: any) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: any) => void"}},onUpdateGroup:{defaultValue:null,description:"@uxpinignoreprop",name:"onUpdateGroup",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-radio-button/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/form-radio-button/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/form-radio-button/form-radio-button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/form-radio-button/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Form/Radio button",component:__webpack_require__("../../components/form-radio-button/template.tsx").EU,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"form-radio-button"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,name:"Radio button"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Radio button'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/form-radio-button/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-layout-column{display:flex;flex-direction:column}.rvo-layout-column-inline{display:inline-flex;flex-direction:column}.rvo-layout-row--align-top{align-items:flex-start}.rvo-layout-row,.rvo-custom-radio-button{align-items:center;display:flex;flex-direction:row}.rvo-layout-row-inline{display:inline-flex;flex-direction:row}.rvo-layout-row--flex-start{align-items:flex-start}.rvo-layout--wrap{flex-wrap:wrap}.rvo-layout-gap--2xs{gap:var(--rvo-space-3xs)}.rvo-layout-gap--xs{gap:var(--rvo-space-2xs)}.rvo-layout-gap--sm,.rvo-custom-radio-button{gap:var(--rvo-space-xs)}.rvo-layout-gap--md{gap:var(--rvo-space-md)}.rvo-layout-gap--lg{gap:var(--rvo-space-lg)}.rvo-layout-gap--xl{gap:var(--rvo-space-xl)}.rvo-layout-gap--2xl{gap:var(--rvo-space-2xl)}.rvo-layout-gap--3xl{gap:var(--rvo-space-3xl)}.rvo-layout-gap--4xl{gap:var(--rvo-space-4xl)}.rvo-layout-margin-horizontal--3xs{margin-inline:var(--rvo-space-3xs)}.rvo-layout-margin-horizontal--2xs{margin-inline:var(--rvo-space-2xs)}.rvo-layout-margin-horizontal--xs{margin-inline:var(--rvo-space-xs)}.rvo-layout-margin-horizontal--sm{margin-inline:var(--rvo-space-sm)}.rvo-layout-margin-horizontal--md{margin-inline:var(--rvo-space-md)}.rvo-layout-margin-horizontal--lg{margin-inline:var(--rvo-space-lg)}.rvo-layout-margin-horizontal--xl{margin-inline:var(--rvo-space-xl)}.rvo-layout-margin-horizontal--2xl{margin-inline:var(--rvo-space-2xl)}.rvo-layout-margin-horizontal--3xl{margin-inline:var(--rvo-space-3xl)}.rvo-layout-margin-horizontal--4xl{margin-inline:var(--rvo-space-4xl)}.rvo-layout-margin-vertical--3xs{margin-block:var(--rvo-space-3xs)}.rvo-layout-margin-vertical--2xs{margin-block:var(--rvo-space-2xs)}.rvo-layout-margin-vertical--xs{margin-block:var(--rvo-space-xs)}.rvo-layout-margin-vertical--sm{margin-block:var(--rvo-space-sm)}.rvo-layout-margin-vertical--md{margin-block:var(--rvo-space-md)}.rvo-layout-margin-vertical--lg{margin-block:var(--rvo-space-lg)}.rvo-layout-margin-vertical--xl{margin-block:var(--rvo-space-xl)}.rvo-layout-margin-vertical--2xl{margin-block:var(--rvo-space-2xl)}.rvo-layout-margin-vertical--3xl{margin-block:var(--rvo-space-3xl)}.rvo-layout-margin-vertical--4xl{margin-block:var(--rvo-space-4xl)}.utrecht-custom-radio-button{align-self:flex-start;flex:24px 0 0;margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0}.utrecht-custom-radio-button:checked,.utrecht-custom-radio-button--checked{background:var(--rvo-radio-button-checked-background)}.utrecht-custom-radio-button--disabled,.utrecht-custom-radio-button:disabled{background:none;border-color:var(--utrecht-custom-radio-button-disabled-border-color)}.utrecht-custom-radio-button--disabled+.rvo-radio-button__label,.utrecht-custom-radio-button:disabled+.rvo-radio-button__label{color:var(--rvo-radio-button-label-disabled-color)}.utrecht-custom-radio-button:not(:disabled):not([aria-disabled=true]):not(.utrecht-custom-radio-button--disabled):not(.utrecht-custom-radio-button--invalid).utrecht-custom-radio-button:hover,.utrecht-custom-radio-button:not(:disabled):not([aria-disabled=true]):not(.utrecht-custom-radio-button--disabled):not(.utrecht-custom-radio-button--invalid).rvo-radio-button--hover,.utrecht-custom-radio-button:not(:disabled):not([aria-disabled=true]):not(.utrecht-custom-radio-button--disabled):not(.utrecht-custom-radio-button--invalid)+.rvo-radio-button__label:hover{border-color:var(--rvo-radio-button-hover-border-color)}","",{version:3,sources:["webpack://./../../components/layout-column-row/index.scss","webpack://./../../components/form-radio-button/index.scss"],names:[],mappings:"AAAA,mBACE,YAAA,CACA,qBAAA,CAGF,0BACE,mBAAA,CACA,qBAAA,CAGF,2BACE,sBAAA,CAGF,yCACE,kBAAA,CACA,YAAA,CACA,kBAAA,CAGF,uBACE,mBAAA,CACA,kBAAA,CAGF,4BACE,sBAAA,CAGF,kBACE,cAAA,CAGF,qBACE,wBAAA,CAGF,oBACE,wBAAA,CAGF,6CACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAKF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAKF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CCvIF,6BACE,qBAAA,CACA,aAAA,CACA,kBAAA,CACA,oBAAA,CACA,mBAAA,CACA,qBAAA,CAGF,2EAEE,qDAAA,CAIF,6EAEE,eAAA,CACA,qEAAA,CACA,+HACE,kDAAA,CAMF,gjBAGE,uDAAA",sourcesContent:[".rvo-layout-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.rvo-layout-column-inline {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.rvo-layout-row--align-top {\n  align-items: flex-start;\n}\n\n.rvo-layout-row {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row-inline {\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row--flex-start {\n  align-items: flex-start;\n}\n\n.rvo-layout--wrap {\n  flex-wrap: wrap;\n}\n\n.rvo-layout-gap--2xs {\n  gap: var(--rvo-space-3xs);\n}\n\n.rvo-layout-gap--xs {\n  gap: var(--rvo-space-2xs);\n}\n\n.rvo-layout-gap--sm {\n  gap: var(--rvo-space-xs);\n}\n\n.rvo-layout-gap--md {\n  gap: var(--rvo-space-md);\n}\n\n.rvo-layout-gap--lg {\n  gap: var(--rvo-space-lg);\n}\n\n.rvo-layout-gap--xl {\n  gap: var(--rvo-space-xl);\n}\n\n.rvo-layout-gap--2xl {\n  gap: var(--rvo-space-2xl);\n}\n\n.rvo-layout-gap--3xl {\n  gap: var(--rvo-space-3xl);\n}\n\n.rvo-layout-gap--4xl {\n  gap: var(--rvo-space-4xl);\n}\n\n// Horizontal margin\n\n.rvo-layout-margin-horizontal--3xs {\n  margin-inline: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-horizontal--2xs {\n  margin-inline: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-horizontal--xs {\n  margin-inline: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-horizontal--sm {\n  margin-inline: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-horizontal--md {\n  margin-inline: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-horizontal--lg {\n  margin-inline: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-horizontal--xl {\n  margin-inline: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-horizontal--2xl {\n  margin-inline: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-horizontal--3xl {\n  margin-inline: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-horizontal--4xl {\n  margin-inline: var(--rvo-space-4xl);\n}\n\n// Vertical margin\n\n.rvo-layout-margin-vertical--3xs {\n  margin-block: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-vertical--2xs {\n  margin-block: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-vertical--xs {\n  margin-block: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-vertical--sm {\n  margin-block: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-vertical--md {\n  margin-block: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-vertical--lg {\n  margin-block: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-vertical--xl {\n  margin-block: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-vertical--2xl {\n  margin-block: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-vertical--3xl {\n  margin-block: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-vertical--4xl {\n  margin-block: var(--rvo-space-4xl);\n}\n",'/* stylelint-disable no-descending-specificity */\n\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n@import "../layout-column-row/index";\n\n.rvo-custom-radio-button {\n  @extend .rvo-layout-row;\n  @extend .rvo-layout-gap--sm;\n}\n\n// Overrides\n.utrecht-custom-radio-button {\n  align-self: flex-start;\n  flex: 24px 0 0;\n  margin-block-end: 0;\n  margin-block-start: 0;\n  margin-inline-end: 0;\n  margin-inline-start: 0;\n}\n\n.utrecht-custom-radio-button:checked,\n.utrecht-custom-radio-button--checked {\n  background: var(--rvo-radio-button-checked-background);\n}\n\n// Disabled state\n.utrecht-custom-radio-button--disabled,\n.utrecht-custom-radio-button:disabled {\n  background: none;\n  border-color: var(--utrecht-custom-radio-button-disabled-border-color);\n  + .rvo-radio-button__label {\n    color: var(--rvo-radio-button-label-disabled-color);\n  }\n}\n\n// Hover state\n.utrecht-custom-radio-button:not(:disabled):not([aria-disabled="true"]):not(.utrecht-custom-radio-button--disabled):not(.utrecht-custom-radio-button--invalid) {\n  &.utrecht-custom-radio-button:hover,\n  &.rvo-radio-button--hover,\n  + .rvo-radio-button__label:hover {\n    border-color: var(--rvo-radio-button-hover-border-color);\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);