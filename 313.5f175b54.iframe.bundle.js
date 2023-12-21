/*! For license information please see 313.5f175b54.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[313],{"../../components/max-width-layout/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs});__webpack_require__("../../components/max-width-layout/template.tsx");const defaultArgs={size:"md",content:"Deze gecentreerde layout container heeft een maximale breedte van {maxWidth}."}},"../../components/max-width-layout/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EM:()=>MaxWidthLayout,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _nl_rvo_design_tokens_dist__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../proprietary/design-tokens/dist/index.js"),clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),_defaultArgs__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/max-width-layout/defaultArgs.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../components/max-width-layout/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const MaxWidthLayout=({size=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__._.size,content=_defaultArgs__WEBPACK_IMPORTED_MODULE_1__._.content,children,className=[]})=>{let parsedContent=children||content;if("string"==typeof parsedContent&&parsedContent.indexOf("{maxWidth}")>-1){let maxWidth;switch(size){case"sm":maxWidth=_nl_rvo_design_tokens_dist__WEBPACK_IMPORTED_MODULE_4__.NCl;break;case"md":maxWidth=_nl_rvo_design_tokens_dist__WEBPACK_IMPORTED_MODULE_4__.Yvl;break;case"lg":maxWidth=_nl_rvo_design_tokens_dist__WEBPACK_IMPORTED_MODULE_4__.fYW}parsedContent=parsedContent.replace(/{maxWidth}/g,maxWidth)}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)("rvo-max-width-layout",`rvo-max-width-layout--${size}`,className),children:parsedContent})};MaxWidthLayout.displayName="MaxWidthLayout";const __WEBPACK_DEFAULT_EXPORT__=MaxWidthLayout;try{MaxWidthLayout.displayName="MaxWidthLayout",MaxWidthLayout.__docgenInfo={description:"",displayName:"MaxWidthLayout",props:{size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"string"}},content:{defaultValue:{value:"defaultArgs.content"},description:"",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:"[]"},description:"",name:"className",required:!1,type:{name:"string | string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/max-width-layout/template.tsx#MaxWidthLayout"]={docgenInfo:MaxWidthLayout.__docgenInfo,name:"MaxWidthLayout",path:"../../components/max-width-layout/template.tsx#MaxWidthLayout"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"string"}},content:{defaultValue:{value:"defaultArgs.content"},description:"",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:"[]"},description:"",name:"className",required:!1,type:{name:"string | string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/max-width-layout/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/max-width-layout/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../components/menubar/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultArgs,a:()=>defaultItems});__webpack_require__("../../components/menubar/template.tsx");const defaultItems=[{label:"Home",icon:"home",link:"#"},{label:"Mijn aanvragen",icon:"publicatie",link:"#"},{label:"Nieuwe aanvraag",icon:"plus",link:"#"},{label:"Uitloggen",icon:"versleutelen",link:"#",align:"right"}],defaultArgs={size:"md",items:defaultItems,useIcons:!0,iconPlacement:"before",menuMaxWidth:"none",type:"primary",useDeltaForActiveItem:!1}},"../../components/menubar/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j_:()=>MenuBar,IN:()=>MenuBarWithSubmenu,PG:()=>argTypes,YI:()=>parseMenuItem});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),icon_template=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/icon/template.tsx")),max_width_layout_template=__webpack_require__("../../components/max-width-layout/template.tsx"),defaultArgs=__webpack_require__("../../components/menubar/defaultArgs.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),menubar=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/menubar/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(menubar.Z,options);menubar.Z&&menubar.Z.locals&&menubar.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={size:{options:["sm","md","lg"],control:{type:"radio"}},items:{type:{name:"array",required:!0}},useIcons:{control:"boolean"},iconPlacement:{options:["before","after"],control:{type:"radio"}},menuMaxWidth:{options:["none","sm","md","lg"],control:{type:"radio"}},type:{options:["primary","sub","sub-grid"],control:{type:"radio"}},useDeltaForActiveItem:{control:"boolean"}},parseMenuItem=({key,label,icon,active,link,align="left",type=defaultArgs._.type,useIcon=defaultArgs._.useIcons,size=defaultArgs._.size,iconPlacement=defaultArgs._.iconPlacement,useDeltaForActiveItem=defaultArgs._.useDeltaForActiveItem,...otherProps})=>{let itemMarkup,deltaMarkup;if(void 0!==active&&"primary"===type&&useDeltaForActiveItem&&(deltaMarkup=(0,jsx_runtime.jsx)(icon_template.JO,{icon:active?"delta-omlaag":"delta-omhoog",size:"xs",color:"wit"})),useIcon&&icon){const iconMarkup=(0,jsx_runtime.jsx)(icon_template.JO,{icon,size,color:"wit"});itemMarkup="before"===iconPlacement?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[iconMarkup,label,deltaMarkup]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label,iconMarkup,deltaMarkup]})}else itemMarkup=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label,deltaMarkup]});return(0,jsx_runtime.jsx)("li",{className:(0,clsx_m.Z)("rvo-topnav__item",active&&"rvo-topnav__item--active","right"===align&&"rvo-topnav__item--align-right","sub"===type&&"rvo-topnav__item--sub"),...otherProps,children:(0,jsx_runtime.jsx)("a",{className:"rvo-topnav__link",..."function"==typeof link?{onClick:link}:{href:link},children:itemMarkup})},key)};parseMenuItem.displayName="parseMenuItem";const MenuBar=({size=defaultArgs._.size,items=defaultArgs._.items,useIcons=defaultArgs._.useIcons,iconPlacement=defaultArgs._.iconPlacement,menuMaxWidth=defaultArgs._.menuMaxWidth,type=defaultArgs._.type,useDeltaForActiveItem=defaultArgs._.useDeltaForActiveItem,children})=>{let itemsMarkup=null;return children?itemsMarkup=children:(itemsMarkup=items.filter((item=>"right"!==item.align)).map(((item,index)=>parseMenuItem({key:`${item.label}--${index}`,label:item.label,icon:item.icon,active:item.active,link:item.link,useIcon:useIcons,size,iconPlacement,useDeltaForActiveItem}))),itemsMarkup.push(items.filter((item=>"right"===item.align)).map(((item,index)=>parseMenuItem({key:`${item.label}--${index}`,label:item.label,icon:item.icon,active:item.active,link:item.link,useIcon:useIcons,align:0===index&&"right",size,iconPlacement,useDeltaForActiveItem}))))),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("rvo-topnav__background","sub"===type&&"rvo-topnav--sub","sub-grid"===type&&["rvo-topnav--sub","rvo-topnav--sub-grid"]),children:(0,jsx_runtime.jsx)(max_width_layout_template.ZP,{size:menuMaxWidth,children:(0,jsx_runtime.jsx)("nav",{className:(0,clsx_m.Z)(`rvo-topnav rvo-topnav--${size}`),children:(0,jsx_runtime.jsx)("ul",{className:"rvo-topnav__list",children:itemsMarkup})})})})};MenuBar.displayName="MenuBar";const MenuBarWithSubmenu=({primary,sub})=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(MenuBar,{...primary}),(0,jsx_runtime.jsx)(MenuBar,{...sub})]});MenuBarWithSubmenu.displayName="MenuBarWithSubmenu";try{parseMenuItem.displayName="parseMenuItem",parseMenuItem.__docgenInfo={description:"",displayName:"parseMenuItem",props:{key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"any"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"any"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"any"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"string"}},type:{defaultValue:{value:"defaultArgs.type"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"sub"'},{value:'"sub-grid"'}]}},useIcon:{defaultValue:{value:"defaultArgs.useIcons"},description:"",name:"useIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},iconPlacement:{defaultValue:{value:"defaultArgs.iconPlacement"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},useDeltaForActiveItem:{defaultValue:{value:"defaultArgs.useDeltaForActiveItem"},description:"",name:"useDeltaForActiveItem",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/menubar/template.tsx#parseMenuItem"]={docgenInfo:parseMenuItem.__docgenInfo,name:"parseMenuItem",path:"../../components/menubar/template.tsx#parseMenuItem"})}catch(__react_docgen_typescript_loader_error){}try{MenuBar.displayName="MenuBar",MenuBar.__docgenInfo={description:"",displayName:"MenuBar",props:{size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},items:{defaultValue:{value:"defaultArgs.items"},description:"",name:"items",required:!1,type:{name:"IMenuBarItem[]"}},useIcons:{defaultValue:{value:"defaultArgs.useIcons"},description:"",name:"useIcons",required:!1,type:{name:"boolean"}},iconPlacement:{defaultValue:{value:"defaultArgs.iconPlacement"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},menuMaxWidth:{defaultValue:{value:"defaultArgs.menuMaxWidth"},description:"",name:"menuMaxWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},type:{defaultValue:{value:"defaultArgs.type"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"sub"'},{value:'"sub-grid"'}]}},useDeltaForActiveItem:{defaultValue:{value:"defaultArgs.useDeltaForActiveItem"},description:"",name:"useDeltaForActiveItem",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/menubar/template.tsx#MenuBar"]={docgenInfo:MenuBar.__docgenInfo,name:"MenuBar",path:"../../components/menubar/template.tsx#MenuBar"})}catch(__react_docgen_typescript_loader_error){}try{MenuBarWithSubmenu.displayName="MenuBarWithSubmenu",MenuBarWithSubmenu.__docgenInfo={description:"",displayName:"MenuBarWithSubmenu",props:{primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"IMenuBarProps"}},sub:{defaultValue:null,description:"",name:"sub",required:!0,type:{name:"IMenuBarProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/menubar/template.tsx#MenuBarWithSubmenu"]={docgenInfo:MenuBarWithSubmenu.__docgenInfo,name:"MenuBarWithSubmenu",path:"../../components/menubar/template.tsx#MenuBarWithSubmenu"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{size:{defaultValue:{value:"defaultArgs.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},items:{defaultValue:{value:"defaultArgs.items"},description:"",name:"items",required:!1,type:{name:"IMenuBarItem[]"}},useIcons:{defaultValue:{value:"defaultArgs.useIcons"},description:"",name:"useIcons",required:!1,type:{name:"boolean"}},iconPlacement:{defaultValue:{value:"defaultArgs.iconPlacement"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},menuMaxWidth:{defaultValue:{value:"defaultArgs.menuMaxWidth"},description:"",name:"menuMaxWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},type:{defaultValue:{value:"defaultArgs.type"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"sub"'},{value:'"sub-grid"'}]}},useDeltaForActiveItem:{defaultValue:{value:"defaultArgs.useDeltaForActiveItem"},description:"",name:"useDeltaForActiveItem",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/menubar/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/menubar/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/max-width-layout/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-max-width-layout{margin-inline-end:auto;margin-inline-start:auto}.rvo-max-width-layout--sm{max-width:var(--rvo-layout-max-width-sm)}.rvo-max-width-layout--md{max-width:var(--rvo-layout-max-width-md)}.rvo-max-width-layout--lg{max-width:var(--rvo-layout-max-width-lg)}","",{version:3,sources:["webpack://./../../components/max-width-layout/index.scss"],names:[],mappings:"AAKA,sBACE,sBAAA,CACA,wBAAA,CAGF,0BACE,wCAAA,CAGF,0BACE,wCAAA,CAGF,0BACE,wCAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n.rvo-max-width-layout {\n  margin-inline-end: auto;\n  margin-inline-start: auto;\n}\n\n.rvo-max-width-layout--sm {\n  max-width: var(--rvo-layout-max-width-sm);\n}\n\n.rvo-max-width-layout--md {\n  max-width: var(--rvo-layout-max-width-md);\n}\n\n.rvo-max-width-layout--lg {\n  max-width: var(--rvo-layout-max-width-lg);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/menubar/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-layout-column{display:flex;flex-direction:column}.rvo-layout-column-inline{display:inline-flex;flex-direction:column}.rvo-layout-row--align-top{align-items:flex-start}.rvo-layout-row,.rvo-topnav__item .rvo-topnav__link{align-items:center;display:flex;flex-direction:row}.rvo-layout-row-inline{display:inline-flex;flex-direction:row}.rvo-layout-row--flex-start{align-items:flex-start}.rvo-layout--wrap{flex-wrap:wrap}.rvo-layout-gap--2xs{gap:var(--rvo-space-3xs)}.rvo-layout-gap--xs{gap:var(--rvo-space-2xs)}.rvo-layout-gap--sm,.rvo-topnav__item .rvo-topnav__link{gap:var(--rvo-space-xs)}.rvo-layout-gap--md{gap:var(--rvo-space-md)}.rvo-layout-gap--lg{gap:var(--rvo-space-lg)}.rvo-layout-gap--xl{gap:var(--rvo-space-xl)}.rvo-layout-gap--2xl{gap:var(--rvo-space-2xl)}.rvo-layout-gap--3xl{gap:var(--rvo-space-3xl)}.rvo-layout-gap--4xl{gap:var(--rvo-space-4xl)}.rvo-layout-margin-horizontal--3xs{margin-inline:var(--rvo-space-3xs)}.rvo-layout-margin-horizontal--2xs{margin-inline:var(--rvo-space-2xs)}.rvo-layout-margin-horizontal--xs{margin-inline:var(--rvo-space-xs)}.rvo-layout-margin-horizontal--sm{margin-inline:var(--rvo-space-sm)}.rvo-layout-margin-horizontal--md{margin-inline:var(--rvo-space-md)}.rvo-layout-margin-horizontal--lg{margin-inline:var(--rvo-space-lg)}.rvo-layout-margin-horizontal--xl{margin-inline:var(--rvo-space-xl)}.rvo-layout-margin-horizontal--2xl{margin-inline:var(--rvo-space-2xl)}.rvo-layout-margin-horizontal--3xl{margin-inline:var(--rvo-space-3xl)}.rvo-layout-margin-horizontal--4xl{margin-inline:var(--rvo-space-4xl)}.rvo-layout-margin-vertical--3xs{margin-block:var(--rvo-space-3xs)}.rvo-layout-margin-vertical--2xs{margin-block:var(--rvo-space-2xs)}.rvo-layout-margin-vertical--xs{margin-block:var(--rvo-space-xs)}.rvo-layout-margin-vertical--sm{margin-block:var(--rvo-space-sm)}.rvo-layout-margin-vertical--md{margin-block:var(--rvo-space-md)}.rvo-layout-margin-vertical--lg{margin-block:var(--rvo-space-lg)}.rvo-layout-margin-vertical--xl{margin-block:var(--rvo-space-xl)}.rvo-layout-margin-vertical--2xl{margin-block:var(--rvo-space-2xl)}.rvo-layout-margin-vertical--3xl{margin-block:var(--rvo-space-3xl)}.rvo-layout-margin-vertical--4xl{margin-block:var(--rvo-space-4xl)}.rvo-topnav{font-family:var(--rvo-topnav-font-family)}.rvo-topnav--sm{font-size:var(--rvo-topnav-sm-font-size)}.rvo-topnav--md{font-size:var(--rvo-topnav-md-font-size)}.rvo-topnav--lg{font-size:var(--rvo-topnav-lg-font-size)}.rvo-topnav__background{background-color:var(--rvo-topnav-list-background-color)}.rvo-topnav__list{background-color:rgba(0,0,0,0);display:flex;justify-content:normal;list-style-type:none;padding-inline-start:0}.rvo-topnav__item{cursor:pointer;flex:none}.rvo-topnav__item--active{font-weight:var(--rvo-topnav-item-active-font-weight)}.rvo-topnav__item--align-right{margin-inline-start:auto}.rvo-topnav__item .rvo-topnav__link{color:var(--rvo-topnav-link-color);display:inline-flex;padding-block-end:var(--rvo-topnav-link-padding-block-end);padding-block-start:var(--rvo-topnav-link-padding-block-start);padding-inline-end:var(--rvo-topnav-link-padding-inline-end);padding-inline-start:var(--rvo-topnav-link-padding-inline-start);text-decoration:var(--rvo-topnav-link-text-decoration)}.rvo-topnav__item .rvo-topnav__link:focus{color:var(--rvo-topnav-link-focus-color)}.rvo-topnav__item .rvo-topnav__link:hover{text-decoration:var(--rvo-topnav-link-hover-text-decoration)}.rvo-topnav__item .rvo-topnav__link .rvo-icon{--utrecht-icon-color: var(--rvo-topnav-link-color)}.rvo-topnav--sub.rvo-topnav__background{background-color:var(--rvo-topnav-submenu-background-color)}.rvo-topnav--sub .rvo-topnav__item--active .rvo-topnav__link:focus{background-color:var(--rvo-topnav-item-active-background-color)}.rvo-topnav--sub-grid .rvo-topnav__list{display:grid;grid-template-columns:repeat(4, 1fr)}","",{version:3,sources:["webpack://./../../components/layout-column-row/index.scss","webpack://./../../components/menubar/index.scss"],names:[],mappings:"AAAA,mBACE,YAAA,CACA,qBAAA,CAGF,0BACE,mBAAA,CACA,qBAAA,CAGF,2BACE,sBAAA,CAGF,oDACE,kBAAA,CACA,YAAA,CACA,kBAAA,CAGF,uBACE,mBAAA,CACA,kBAAA,CAGF,4BACE,sBAAA,CAGF,kBACE,cAAA,CAGF,qBACE,wBAAA,CAGF,oBACE,wBAAA,CAGF,wDACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAKF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAKF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CC/IF,YACE,yCAAA,CAGF,gBACE,wCAAA,CAGF,gBACE,wCAAA,CAGF,gBACE,wCAAA,CAGF,wBACE,wDAAA,CAGF,kBACE,8BAAA,CACA,YAAA,CACA,sBAAA,CACA,oBAAA,CACA,sBAAA,CAGF,kBACE,cAAA,CACA,SAAA,CAGF,0BACE,qDAAA,CAGF,+BACE,wBAAA,CAGF,oCACE,kCAAA,CACA,mBAAA,CACA,0DAAA,CACA,8DAAA,CACA,4DAAA,CACA,gEAAA,CACA,sDAAA,CAKA,0CACE,wCAAA,CAGF,0CACE,4DAAA,CAGF,8CACE,kDAAA,CAKJ,wCACE,2DAAA,CAGF,mEACE,+DAAA,CAIF,wCACE,YAAA,CACA,oCAAA",sourcesContent:[".rvo-layout-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.rvo-layout-column-inline {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.rvo-layout-row--align-top {\n  align-items: flex-start;\n}\n\n.rvo-layout-row {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row-inline {\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row--flex-start {\n  align-items: flex-start;\n}\n\n.rvo-layout--wrap {\n  flex-wrap: wrap;\n}\n\n.rvo-layout-gap--2xs {\n  gap: var(--rvo-space-3xs);\n}\n\n.rvo-layout-gap--xs {\n  gap: var(--rvo-space-2xs);\n}\n\n.rvo-layout-gap--sm {\n  gap: var(--rvo-space-xs);\n}\n\n.rvo-layout-gap--md {\n  gap: var(--rvo-space-md);\n}\n\n.rvo-layout-gap--lg {\n  gap: var(--rvo-space-lg);\n}\n\n.rvo-layout-gap--xl {\n  gap: var(--rvo-space-xl);\n}\n\n.rvo-layout-gap--2xl {\n  gap: var(--rvo-space-2xl);\n}\n\n.rvo-layout-gap--3xl {\n  gap: var(--rvo-space-3xl);\n}\n\n.rvo-layout-gap--4xl {\n  gap: var(--rvo-space-4xl);\n}\n\n// Horizontal margin\n\n.rvo-layout-margin-horizontal--3xs {\n  margin-inline: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-horizontal--2xs {\n  margin-inline: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-horizontal--xs {\n  margin-inline: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-horizontal--sm {\n  margin-inline: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-horizontal--md {\n  margin-inline: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-horizontal--lg {\n  margin-inline: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-horizontal--xl {\n  margin-inline: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-horizontal--2xl {\n  margin-inline: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-horizontal--3xl {\n  margin-inline: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-horizontal--4xl {\n  margin-inline: var(--rvo-space-4xl);\n}\n\n// Vertical margin\n\n.rvo-layout-margin-vertical--3xs {\n  margin-block: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-vertical--2xs {\n  margin-block: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-vertical--xs {\n  margin-block: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-vertical--sm {\n  margin-block: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-vertical--md {\n  margin-block: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-vertical--lg {\n  margin-block: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-vertical--xl {\n  margin-block: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-vertical--2xl {\n  margin-block: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-vertical--3xl {\n  margin-block: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-vertical--4xl {\n  margin-block: var(--rvo-space-4xl);\n}\n",'/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n@import "../layout-column-row/index";\n\n.rvo-topnav {\n  font-family: var(--rvo-topnav-font-family);\n}\n\n.rvo-topnav--sm {\n  font-size: var(--rvo-topnav-sm-font-size);\n}\n\n.rvo-topnav--md {\n  font-size: var(--rvo-topnav-md-font-size);\n}\n\n.rvo-topnav--lg {\n  font-size: var(--rvo-topnav-lg-font-size);\n}\n\n.rvo-topnav__background {\n  background-color: var(--rvo-topnav-list-background-color);\n}\n\n.rvo-topnav__list {\n  background-color: transparent;\n  display: flex;\n  justify-content: normal;\n  list-style-type: none;\n  padding-inline-start: 0;\n}\n\n.rvo-topnav__item {\n  cursor: pointer;\n  flex: none;\n}\n\n.rvo-topnav__item--active {\n  font-weight: var(--rvo-topnav-item-active-font-weight);\n}\n\n.rvo-topnav__item--align-right {\n  margin-inline-start: auto;\n}\n\n.rvo-topnav__item .rvo-topnav__link {\n  color: var(--rvo-topnav-link-color);\n  display: inline-flex;\n  padding-block-end: var(--rvo-topnav-link-padding-block-end);\n  padding-block-start: var(--rvo-topnav-link-padding-block-start);\n  padding-inline-end: var(--rvo-topnav-link-padding-inline-end);\n  padding-inline-start: var(--rvo-topnav-link-padding-inline-start);\n  text-decoration: var(--rvo-topnav-link-text-decoration);\n\n  @extend .rvo-layout-row;\n  @extend .rvo-layout-gap--sm;\n\n  &:focus {\n    color: var(--rvo-topnav-link-focus-color);\n  }\n\n  &:hover {\n    text-decoration: var(--rvo-topnav-link-hover-text-decoration);\n  }\n\n  .rvo-icon {\n    --utrecht-icon-color: var(--rvo-topnav-link-color);\n  }\n}\n\n// Submenu\n.rvo-topnav--sub.rvo-topnav__background {\n  background-color: var(--rvo-topnav-submenu-background-color);\n}\n\n.rvo-topnav--sub .rvo-topnav__item--active .rvo-topnav__link:focus {\n  background-color: var(--rvo-topnav-item-active-background-color);\n}\n\n// Submenu grid\n.rvo-topnav--sub-grid .rvo-topnav__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/max-width-layout/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.2.0_sass@1.56.2_webpack@5.75.0/node_modules/sass-loader/dist/cjs.js!../../components/max-width-layout/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_1_webpack_5_75_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_2_0_sass_1_56_2_webpack_5_75_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);