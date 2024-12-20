/*! For license information please see form-timeinput-form-timeinput-stories.43eda066.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[6764],{"../../components/form-timeinput/form-timeinput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/form-timeinput/src/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Time input",component:__webpack_require__("../../components/form-timeinput/src/template.tsx").cz,args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"form-timeinput"}}},Default={args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Time input"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Time input'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/form-timeinput/src/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/form-timeinput/src/template.tsx");const defaultArgs={id:"field",disabled:!1,focus:!1,readOnly:!1,invalid:!1,required:!1,value:"",min:void 0,max:void 0,step:void 0,prefix:"",suffix:"",size:"sm"}},"../../components/form-timeinput/src/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Uv:()=>argTypes,cz:()=>TimeInput});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),_defaultArgs__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/form-timeinput/src/defaultArgs.ts")),_form_textinput_src_template__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/form-textinput/src/template.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={id:{control:"text"},disabled:{control:"boolean"},focus:{control:"boolean"},invalid:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"},value:{control:"text",description:'Time value in "hh:mm:ss" format'},min:{control:"text",description:'Time value in "hh:mm:ss" format'},max:{control:"text",description:'Time value in "hh:mm:ss" format'},step:{control:"number"},prefix:{control:"text"},suffix:{control:"text"},size:{options:["sm","md","lg","max"],control:{type:"radio"}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},onClick:{table:{disable:!0}},onInput:{table:{disable:!0}},onInvalid:{table:{disable:!0}}},TimeInput=({id=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.id,disabled=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.disabled,focus=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.focus,readOnly=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.readOnly,invalid=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.invalid,required=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.required,value=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.value,min=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.min,max=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.max,step=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.step,prefix=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.prefix,suffix=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.suffix,size=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__.D.size,...otherProps})=>{const props={id,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("utrecht-textbox","utrecht-textbox--html-input",disabled&&"utrecht-textbox--disabled",focus&&"utrecht-textbox--focus utrecht-textbox--focus-visible",invalid&&"utrecht-textbox--invalid",readOnly&&"utrecht-textbox--readonly",required&&"utrecht-textbox--required"),disabled:disabled||void 0,"aria-invalid":invalid||void 0,required:required||void 0,readOnly:readOnly||void 0,defaultValue:value,...min&&{min},...max&&{max},...step&&{step},...size&&{size},...prefix&&{prefix},...suffix&&{suffix},...otherProps};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_form_textinput_src_template__WEBPACK_IMPORTED_MODULE_2__.Ay,{type:"time",...props})};TimeInput.displayName="TimeInput";try{TimeInput.displayName="TimeInput",TimeInput.__docgenInfo={description:"",displayName:"TimeInput",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"@uxpinpropname Has focus",name:"focus",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"defaultArgs.readOnly"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"@uxpinpropname Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:"defaultArgs.value"},description:"@uxpinpropname Value (hh:mm:ss format)>",name:"value",required:!1,type:{name:"string"}},min:{defaultValue:{value:"defaultArgs.min"},description:"@uxpinpropname Min (hh:mm:ss format)>",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:{value:"defaultArgs.max"},description:"@uxpinpropname Max (hh:mm:ss format)>",name:"max",required:!1,type:{name:"string"}},step:{defaultValue:{value:"defaultArgs.step"},description:"",name:"step",required:!1,type:{name:"number"}},prefix:{defaultValue:{value:"defaultArgs.prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"defaultArgs.suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"max"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLInputElement, MouseEvent>) => void"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"(event: FormEvent<HTMLInputElement>) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: FormEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-timeinput/src/template.tsx#TimeInput"]={docgenInfo:TimeInput.__docgenInfo,name:"TimeInput",path:"../../components/form-timeinput/src/template.tsx#TimeInput"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"@uxpinpropname Has focus",name:"focus",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"defaultArgs.readOnly"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"@uxpinpropname Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:"defaultArgs.value"},description:"@uxpinpropname Value (hh:mm:ss format)>",name:"value",required:!1,type:{name:"string"}},min:{defaultValue:{value:"defaultArgs.min"},description:"@uxpinpropname Min (hh:mm:ss format)>",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:{value:"defaultArgs.max"},description:"@uxpinpropname Max (hh:mm:ss format)>",name:"max",required:!1,type:{name:"string"}},step:{defaultValue:{value:"defaultArgs.step"},description:"",name:"step",required:!1,type:{name:"number"}},prefix:{defaultValue:{value:"defaultArgs.prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"defaultArgs.suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"max"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLInputElement, MouseEvent>) => void"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"(event: FormEvent<HTMLInputElement>) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: FormEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-timeinput/src/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/form-timeinput/src/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);