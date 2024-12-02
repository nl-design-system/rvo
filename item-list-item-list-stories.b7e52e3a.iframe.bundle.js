/*! For license information please see item-list-item-list-stories.b7e52e3a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[4062],{"../../components/item-list/item-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/item-list/src/defaultArgs.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Item list",component:__webpack_require__("../../components/item-list/src/template.tsx").kk,args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"item-list"}}},Default={args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Item list"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Item list'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/item-list/src/defaultArgs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/item-list/src/template.tsx");const defaultArgs={items:["List item","List item","List item"]}},"../../components/item-list/src/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kk:()=>ItemList});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defaultArgs=__webpack_require__("../../components/item-list/src/defaultArgs.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.96.1_@swc+core@1.9.3_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),src=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@16.0.3_@rspack+core@1.1.4_@swc+helpers@0.5.13__sass-embedded@1.81.0_sass@1.81.0_w_ijwti3wlbjbyf3zrxszcgoktp4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!../../components/item-list/src/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(src.A,options);src.A&&src.A.locals&&src.A.locals;var parseChildren=__webpack_require__("../../components/utils/parseChildren.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ItemList=({items=defaultArgs.D.items,children})=>(0,jsx_runtime.jsx)("ul",{className:"rvo-item-list",children:children?react.Children.map((0,parseChildren.H)(children),((child,index)=>(0,jsx_runtime.jsx)("li",{className:"rvo-item-list__item",children:child},index))):items.map(((itemContent,index)=>(0,jsx_runtime.jsx)("li",{className:"rvo-item-list__item",children:itemContent},index)))});ItemList.displayName="ItemList";try{ItemList.displayName="ItemList",ItemList.__docgenInfo={description:"",displayName:"ItemList",props:{items:{defaultValue:{value:"defaultArgs.items"},description:"@uxpinignoreprop",name:"items",required:!1,type:{name:"string[] | ReactNode[]"}},children:{defaultValue:null,description:"@uxpinpropname Items",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/item-list/src/template.tsx#ItemList"]={docgenInfo:ItemList.__docgenInfo,name:"ItemList",path:"../../components/item-list/src/template.tsx#ItemList"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{items:{defaultValue:{value:"defaultArgs.items"},description:"@uxpinignoreprop",name:"items",required:!1,type:{name:"string[] | ReactNode[]"}},children:{defaultValue:null,description:"@uxpinpropname Items",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/item-list/src/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/item-list/src/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/utils/parseChildren.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>parseChildren});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const parseChildren=children=>"string"==typeof children?children.split(/\r?\n|\r|\n/g):children;try{parseChildren.displayName="parseChildren",parseChildren.__docgenInfo={description:"",displayName:"parseChildren",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/utils/parseChildren.tsx#parseChildren"]={docgenInfo:parseChildren.__docgenInfo,name:"parseChildren",path:"../../components/utils/parseChildren.tsx#parseChildren"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@16.0.3_@rspack+core@1.1.4_@swc+helpers@0.5.13__sass-embedded@1.81.0_sass@1.81.0_w_ijwti3wlbjbyf3zrxszcgoktp4/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!../../components/item-list/src/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_@rspack+core@1.1.4_@swc+helpers@0.5.13__webpack@5.96.1_@swc+core@1.9.3_@swc_7t6qq7k4ol4nw36vowh5e5ue74/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_rspack_core_1_1_4_swc_helpers_0_5_13_webpack_5_96_1_swc_core_1_9_3_swc_7t6qq7k4ol4nw36vowh5e5ue74_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-item-list{list-style:none;margin-block-end:0;margin-block-start:0;padding-inline-start:0}.rvo-item-list__item{border-bottom:var(--rvo-item-list-border-width) var(--rvo-item-list-border-style) var(--rvo-item-list-border-color);padding-block-end:var(--rvo-item-list-padding-block-end);padding-block-start:var(--rvo-item-list-padding-block-start);width:100%}","",{version:3,sources:["webpack://./../../components/item-list/src/index.scss"],names:[],mappings:"AAAA,eACE,eAAA,CACA,kBAAA,CACA,oBAAA,CACA,sBAAA,CAGF,qBACE,mHAAA,CACA,wDAAA,CACA,4DAAA,CACA,UAAA",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);