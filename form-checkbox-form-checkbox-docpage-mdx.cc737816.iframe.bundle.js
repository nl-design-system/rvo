/*! For license information please see form-checkbox-form-checkbox-docpage-mdx.cc737816.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[1259,3859],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/form-checkbox/form-checkbox.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>form_checkbox_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.14_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");var form_checkbox_stories=__webpack_require__("../../components/form-checkbox/form-checkbox.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",em:"em"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:form_checkbox_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.Dx,{}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:form_checkbox_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"Documentatie voor checkbox\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"*@nl-rvo/component-library-css@1.0.0-alpha.290*:\nUpdated snippet to link helper text to field with `aria-described-by`.\n\n*@nl-rvo/component-library-css@1.0.0-alpha.280*:\nSimplified snippet by removing `.rvo-layout-row` and `.rvo-layout-gap--sm`\n\n*@nl-rvo/component-library-css@1.0.0-alpha.27*:\nAdded component"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.em,{children:"@nl-rvo/assets/icons"})})]})}const form_checkbox_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/form-checkbox/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/form-checkbox/template.tsx");const defaultArgs={id:"field",name:"group",label:"Label",checked:!1,hover:!1,disabled:!1,active:!1,focus:!1,indeterminate:!1,invalid:!1,required:!1,value:"",helperTextId:""}},"../../components/form-checkbox/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XZ:()=>Checkbox});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),defaultArgs=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/form-checkbox/defaultArgs.ts")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),form_checkbox=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/form-checkbox/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(form_checkbox.Z,options);form_checkbox.Z&&form_checkbox.Z.locals&&form_checkbox.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Checkbox=({id=defaultArgs._.id,name=defaultArgs._.name,label=defaultArgs._.label,checked=defaultArgs._.checked,hover=defaultArgs._.hover,disabled=defaultArgs._.disabled,active=defaultArgs._.active,focus=defaultArgs._.focus,indeterminate=defaultArgs._.indeterminate,invalid=defaultArgs._.invalid,required=defaultArgs._.required,value=defaultArgs._.value,helperTextId=defaultArgs._.helperTextId,onChange,onUpdateGroup,...otherProps})=>(0,jsx_runtime.jsxs)("label",{className:(0,clsx_m.Z)("rvo-checkbox",active&&"rvo-checkbox--active",hover&&"rvo-checkbox--hover",checked&&"rvo-checkbox--checked",!checked&&"rvo-checkbox--not-checked",disabled&&"rvo-checkbox--disabled",focus&&"rvo-checkbox--focus-visible",invalid&&"rvo-checkbox--invalid",indeterminate&&"rvo-checkbox--indeterminate",required&&"rvo-checkbox--required"),htmlFor:id,children:[(0,jsx_runtime.jsx)("input",{id,name,className:"rvo-checkbox__input",type:"checkbox",checked:checked||void 0,disabled:disabled||void 0,required:required||void 0,value:value||"",onChange:event=>{onChange?.(event),onUpdateGroup?.(event)},...otherProps,"aria-describedby":helperTextId?.length?helperTextId:null}),label]});Checkbox.displayName="Checkbox";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:{value:"defaultArgs.name"},description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:"defaultArgs.label"},description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"defaultArgs.checked"},description:"@uxpinbind onChange 0.target.checked",name:"checked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"defaultArgs.hover"},description:"",name:"hover",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"defaultArgs.active"},description:"",name:"active",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"",name:"focus",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"defaultArgs.indeterminate"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"defaultArgs.value"},description:"",name:"value",required:!1,type:{name:"string"}},helperTextId:{defaultValue:{value:"defaultArgs.helperTextId"},description:"",name:"helperTextId",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: any) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: any) => void"}},onUpdateGroup:{defaultValue:null,description:"@uxpinignoreprop",name:"onUpdateGroup",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-checkbox/template.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"../../components/form-checkbox/template.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:{value:"defaultArgs.name"},description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:"defaultArgs.label"},description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"defaultArgs.checked"},description:"@uxpinbind onChange 0.target.checked",name:"checked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"defaultArgs.hover"},description:"",name:"hover",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"defaultArgs.active"},description:"",name:"active",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"",name:"focus",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"defaultArgs.indeterminate"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"defaultArgs.value"},description:"",name:"value",required:!1,type:{name:"string"}},helperTextId:{defaultValue:{value:"defaultArgs.helperTextId"},description:"",name:"helperTextId",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: any) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: any) => void"}},onUpdateGroup:{defaultValue:null,description:"@uxpinignoreprop",name:"onUpdateGroup",required:!1,type:{name:"(event: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-checkbox/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/form-checkbox/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/form-checkbox/form-checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/form-checkbox/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Form/Checkbox",component:__webpack_require__("../../components/form-checkbox/template.tsx").XZ,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"form-checkbox"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__._,name:"Checkbox"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Checkbox'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/form-checkbox/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.rvo-layout-column{display:flex;flex-direction:column}.rvo-layout-column-inline{display:inline-flex;flex-direction:column}.rvo-layout-row--align-top{align-items:flex-start}.rvo-layout-row,.rvo-checkbox{align-items:center;display:flex;flex-direction:row}.rvo-layout-row-inline{display:inline-flex;flex-direction:row}.rvo-layout-row--flex-start{align-items:flex-start}.rvo-layout--wrap{flex-wrap:wrap}.rvo-layout-gap--2xs{gap:var(--rvo-space-3xs)}.rvo-layout-gap--xs{gap:var(--rvo-space-2xs)}.rvo-layout-gap--sm,.rvo-checkbox{gap:var(--rvo-space-xs)}.rvo-layout-gap--md{gap:var(--rvo-space-md)}.rvo-layout-gap--lg{gap:var(--rvo-space-lg)}.rvo-layout-gap--xl{gap:var(--rvo-space-xl)}.rvo-layout-gap--2xl{gap:var(--rvo-space-2xl)}.rvo-layout-gap--3xl{gap:var(--rvo-space-3xl)}.rvo-layout-gap--4xl{gap:var(--rvo-space-4xl)}.rvo-layout-margin-horizontal--3xs{margin-inline:var(--rvo-space-3xs)}.rvo-layout-margin-horizontal--2xs{margin-inline:var(--rvo-space-2xs)}.rvo-layout-margin-horizontal--xs{margin-inline:var(--rvo-space-xs)}.rvo-layout-margin-horizontal--sm{margin-inline:var(--rvo-space-sm)}.rvo-layout-margin-horizontal--md{margin-inline:var(--rvo-space-md)}.rvo-layout-margin-horizontal--lg{margin-inline:var(--rvo-space-lg)}.rvo-layout-margin-horizontal--xl{margin-inline:var(--rvo-space-xl)}.rvo-layout-margin-horizontal--2xl{margin-inline:var(--rvo-space-2xl)}.rvo-layout-margin-horizontal--3xl{margin-inline:var(--rvo-space-3xl)}.rvo-layout-margin-horizontal--4xl{margin-inline:var(--rvo-space-4xl)}.rvo-layout-margin-vertical--3xs{margin-block:var(--rvo-space-3xs)}.rvo-layout-margin-vertical--2xs{margin-block:var(--rvo-space-2xs)}.rvo-layout-margin-vertical--xs{margin-block:var(--rvo-space-xs)}.rvo-layout-margin-vertical--sm{margin-block:var(--rvo-space-sm)}.rvo-layout-margin-vertical--md{margin-block:var(--rvo-space-md)}.rvo-layout-margin-vertical--lg{margin-block:var(--rvo-space-lg)}.rvo-layout-margin-vertical--xl{margin-block:var(--rvo-space-xl)}.rvo-layout-margin-vertical--2xl{margin-block:var(--rvo-space-2xl)}.rvo-layout-margin-vertical--3xl{margin-block:var(--rvo-space-3xl)}.rvo-layout-margin-vertical--4xl{margin-block:var(--rvo-space-4xl)}.rvo-checkbox__group--error{border-left:3px solid var(--rvo-color-rood);padding-inline-start:var(--rvo-space-md)}.rvo-checkbox__input{align-self:flex-start;-webkit-appearance:none;appearance:none;background-color:var(--rvo-checkbox-background-color, var(--utrecht-form-input-background-color));border-color:var(--rvo-checkbox-border-color, var(--utrecht-form-input-border-color));border-radius:var(--rvo-checkbox-border-radius);border-style:solid;border-width:var(--rvo-checkbox-border-width, var(--utrecht-form-input-border-width));display:grid;flex:24px 0 0;height:var(--rvo-checkbox-size);margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;place-content:center;width:var(--rvo-checkbox-size)}.rvo-checkbox__input:focus,.rvo-checkbox__input:focus-visible,.rvo-checkbox--focus-visible .rvo-checkbox__input{background-color:var(--rvo-checkbox-focus-background-color, var(--utrecht-form-input-background-color));border-color:var(--rvo-checkbox-focus-border-color, var(--utrecht-form-input-border-color));border-width:var(--rvo-checkbox-focus-border-width, var(--utrecht-form-input-border-width));box-shadow:0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);outline-color:var(--utrecht-focus-outline-color);outline-offset:var(--utrecht-focus-outline-offset);outline-style:var(--utrecht-focus-outline-style);outline-width:var(--utrecht-focus-outline-width)}.rvo-checkbox__input:hover,.rvo-checkbox--hover .rvo-checkbox__input{border-color:var(--rvo-checkbox-hover-border-color)}.rvo-checkbox__input:disabled,.rvo-checkbox--disabled{background-color:var(--rvo-checkbox-disabled-background-color, var(--utrecht-form-input-disabled-background-color));border-color:var(--rvo-checkbox-disabled-border-color, var(--utrecht-form-input-disabled-border-color));border-width:var(--rvo-checkbox-disabled-border-width, var(--utrecht-form-input-disabled-border-width));color:var(--rvo-checkbox-disabled-color, var(--utrecht-form-input-disabled-color))}.rvo-checkbox__input:focus:not(:focus-visible){box-shadow:none;outline-style:none}.rvo-checkbox__input::before{content:"";height:var(--rvo-checkbox-icon-size);width:var(--rvo-checkbox-icon-size)}.rvo-checkbox__input::after{content:"";height:var(--rvo-checkbox-icon-size);margin-block-start:calc((var(--rvo-checkbox-size) - var(--rvo-checkbox-icon-size))/4);margin-inline-start:calc((var(--rvo-checkbox-size) - var(--rvo-checkbox-icon-size))/4);position:absolute;width:var(--rvo-checkbox-icon-size)}.rvo-checkbox__input:checked::before{background-color:var(--rvo-checkbox-checked-background-color);border-radius:var(--rvo-checkbox-checked-border-radius)}.rvo-checkbox__input:checked::after{background-color:var(--rvo-checkbox-icon-color);margin-block-start:var(--rvo-checkbox-icon-margin-block-start);margin-inline-start:var(--rvo-checkbox-icon-margin-inline-start);-webkit-mask-image:var(--rvo-icon-vinkje);mask-image:var(--rvo-icon-vinkje);-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:85% !important;mask-size:85% !important}.rvo-checkbox--indeterminate .rvo-checkbox__input:checked::after{background-color:var(--rvo-checkbox-checked-background-color);color:var(--rvo-checkbox-icon-color);content:"-";font-weight:900;-webkit-mask-image:none;mask-image:none;text-align:center}.rvo-checkbox__input:checked:hover::before{background-color:var(--rvo-checkbox-hover-background-color)}',"",{version:3,sources:["webpack://./../../components/layout-column-row/index.scss","webpack://./../../components/form-checkbox/index.scss"],names:[],mappings:"AAAA,mBACE,YAAA,CACA,qBAAA,CAGF,0BACE,mBAAA,CACA,qBAAA,CAGF,2BACE,sBAAA,CAGF,8BACE,kBAAA,CACA,YAAA,CACA,kBAAA,CAGF,uBACE,mBAAA,CACA,kBAAA,CAGF,4BACE,sBAAA,CAGF,kBACE,cAAA,CAGF,qBACE,wBAAA,CAGF,oBACE,wBAAA,CAGF,kCACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAKF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAKF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CC3IF,4BACE,2CAAA,CACA,wCAAA,CAGF,qBACE,qBAAA,CACA,uBAAA,CACA,eAAA,CACA,iGAAA,CACA,qFAAA,CACA,+CAAA,CACA,kBAAA,CACA,qFAAA,CACA,YAAA,CACA,aAAA,CACA,+BAAA,CACA,kBAAA,CACA,oBAAA,CACA,mBAAA,CACA,qBAAA,CACA,oBAAA,CACA,8BAAA,CAGF,gHAGE,uGAAA,CACA,2FAAA,CACA,2FAAA,CACA,oHAAA,CACA,gDAAA,CACA,kDAAA,CACA,gDAAA,CACA,gDAAA,CAGF,qEAEE,mDAAA,CAGF,sDAEE,mHAAA,CACA,uGAAA,CACA,uGAAA,CACA,kFAAA,CAGF,+CACE,eAAA,CACA,kBAAA,CAGF,6BACE,UAAA,CACA,oCAAA,CACA,mCAAA,CAGF,4BACE,UAAA,CACA,oCAAA,CACA,qFAAA,CACA,sFAAA,CACA,iBAAA,CACA,mCAAA,CAGF,qCACE,6DAAA,CACA,uDAAA,CAGF,oCACE,+CAAA,CACA,8DAAA,CACA,gEAAA,CACA,yCAAA,CACA,iCAAA,CACA,mCAAA,CACA,2BAAA,CACA,6BAAA,CACA,qBAAA,CACA,gCAAA,CACA,wBAAA,CAGF,iEACE,6DAAA,CACA,oCAAA,CACA,WAAA,CACA,eAAA,CACA,uBAAA,CACA,eAAA,CACA,iBAAA,CAGF,2CACE,2DAAA",sourcesContent:[".rvo-layout-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.rvo-layout-column-inline {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.rvo-layout-row--align-top {\n  align-items: flex-start;\n}\n\n.rvo-layout-row {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row-inline {\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row--flex-start {\n  align-items: flex-start;\n}\n\n.rvo-layout--wrap {\n  flex-wrap: wrap;\n}\n\n.rvo-layout-gap--2xs {\n  gap: var(--rvo-space-3xs);\n}\n\n.rvo-layout-gap--xs {\n  gap: var(--rvo-space-2xs);\n}\n\n.rvo-layout-gap--sm {\n  gap: var(--rvo-space-xs);\n}\n\n.rvo-layout-gap--md {\n  gap: var(--rvo-space-md);\n}\n\n.rvo-layout-gap--lg {\n  gap: var(--rvo-space-lg);\n}\n\n.rvo-layout-gap--xl {\n  gap: var(--rvo-space-xl);\n}\n\n.rvo-layout-gap--2xl {\n  gap: var(--rvo-space-2xl);\n}\n\n.rvo-layout-gap--3xl {\n  gap: var(--rvo-space-3xl);\n}\n\n.rvo-layout-gap--4xl {\n  gap: var(--rvo-space-4xl);\n}\n\n// Horizontal margin\n\n.rvo-layout-margin-horizontal--3xs {\n  margin-inline: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-horizontal--2xs {\n  margin-inline: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-horizontal--xs {\n  margin-inline: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-horizontal--sm {\n  margin-inline: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-horizontal--md {\n  margin-inline: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-horizontal--lg {\n  margin-inline: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-horizontal--xl {\n  margin-inline: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-horizontal--2xl {\n  margin-inline: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-horizontal--3xl {\n  margin-inline: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-horizontal--4xl {\n  margin-inline: var(--rvo-space-4xl);\n}\n\n// Vertical margin\n\n.rvo-layout-margin-vertical--3xs {\n  margin-block: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-vertical--2xs {\n  margin-block: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-vertical--xs {\n  margin-block: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-vertical--sm {\n  margin-block: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-vertical--md {\n  margin-block: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-vertical--lg {\n  margin-block: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-vertical--xl {\n  margin-block: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-vertical--2xl {\n  margin-block: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-vertical--3xl {\n  margin-block: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-vertical--4xl {\n  margin-block: var(--rvo-space-4xl);\n}\n",'/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n@import "../layout-column-row/index";\n\n.rvo-checkbox {\n  @extend .rvo-layout-row;\n  @extend .rvo-layout-gap--sm;\n}\n\n.rvo-checkbox__group--error {\n  border-left: 3px solid var(--rvo-color-rood);\n  padding-inline-start: var(--rvo-space-md);\n}\n\n.rvo-checkbox__input {\n  align-self: flex-start;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--rvo-checkbox-background-color, var(--utrecht-form-input-background-color));\n  border-color: var(--rvo-checkbox-border-color, var(--utrecht-form-input-border-color));\n  border-radius: var(--rvo-checkbox-border-radius);\n  border-style: solid;\n  border-width: var(--rvo-checkbox-border-width, var(--utrecht-form-input-border-width));\n  display: grid;\n  flex: 24px 0 0;\n  height: var(--rvo-checkbox-size);\n  margin-block-end: 0;\n  margin-block-start: 0;\n  margin-inline-end: 0;\n  margin-inline-start: 0;\n  place-content: center;\n  width: var(--rvo-checkbox-size);\n}\n\n.rvo-checkbox__input:focus,\n.rvo-checkbox__input:focus-visible,\n.rvo-checkbox--focus-visible .rvo-checkbox__input {\n  background-color: var(--rvo-checkbox-focus-background-color, var(--utrecht-form-input-background-color));\n  border-color: var(--rvo-checkbox-focus-border-color, var(--utrecht-form-input-border-color));\n  border-width: var(--rvo-checkbox-focus-border-width, var(--utrecht-form-input-border-width));\n  box-shadow: 0 0 0 var(--utrecht-focus-box-shadow-spread-radius, 0) var(--utrecht-focus-box-shadow-color, transparent);\n  outline-color: var(--utrecht-focus-outline-color);\n  outline-offset: var(--utrecht-focus-outline-offset);\n  outline-style: var(--utrecht-focus-outline-style);\n  outline-width: var(--utrecht-focus-outline-width);\n}\n\n.rvo-checkbox__input:hover,\n.rvo-checkbox--hover .rvo-checkbox__input {\n  border-color: var(--rvo-checkbox-hover-border-color);\n}\n\n.rvo-checkbox__input:disabled,\n.rvo-checkbox--disabled {\n  background-color: var(--rvo-checkbox-disabled-background-color, var(--utrecht-form-input-disabled-background-color));\n  border-color: var(--rvo-checkbox-disabled-border-color, var(--utrecht-form-input-disabled-border-color));\n  border-width: var(--rvo-checkbox-disabled-border-width, var(--utrecht-form-input-disabled-border-width));\n  color: var(--rvo-checkbox-disabled-color, var(--utrecht-form-input-disabled-color));\n}\n\n.rvo-checkbox__input:focus:not(:focus-visible) {\n  box-shadow: none;\n  outline-style: none;\n}\n\n.rvo-checkbox__input::before {\n  content: "";\n  height: var(--rvo-checkbox-icon-size);\n  width: var(--rvo-checkbox-icon-size);\n}\n\n.rvo-checkbox__input::after {\n  content: "";\n  height: var(--rvo-checkbox-icon-size);\n  margin-block-start: calc((var(--rvo-checkbox-size) - var(--rvo-checkbox-icon-size)) / 4);\n  margin-inline-start: calc((var(--rvo-checkbox-size) - var(--rvo-checkbox-icon-size)) / 4);\n  position: absolute;\n  width: var(--rvo-checkbox-icon-size);\n}\n\n.rvo-checkbox__input:checked::before {\n  background-color: var(--rvo-checkbox-checked-background-color);\n  border-radius: var(--rvo-checkbox-checked-border-radius);\n}\n\n.rvo-checkbox__input:checked::after {\n  background-color: var(--rvo-checkbox-icon-color);\n  margin-block-start: var(--rvo-checkbox-icon-margin-block-start);\n  margin-inline-start: var(--rvo-checkbox-icon-margin-inline-start);\n  -webkit-mask-image: var(--rvo-icon-vinkje);\n  mask-image: var(--rvo-icon-vinkje);\n  -webkit-mask-position: center center;\n  mask-position: center center;\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-size: 85% !important;\n  mask-size: 85% !important;\n}\n\n.rvo-checkbox--indeterminate .rvo-checkbox__input:checked::after {\n  background-color: var(--rvo-checkbox-checked-background-color);\n  color: var(--rvo-checkbox-icon-color);\n  content: "-";\n  font-weight: 900;\n  -webkit-mask-image: none;\n  mask-image: none;\n  text-align: center;\n}\n\n.rvo-checkbox__input:checked:hover::before {\n  background-color: var(--rvo-checkbox-hover-background-color);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);