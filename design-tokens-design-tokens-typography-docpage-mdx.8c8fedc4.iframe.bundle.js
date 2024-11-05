"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[386],{"../../documentation/pages/design-tokens/design-tokens.typography.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>design_tokens_typography_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),design_tokens_dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),proprietary_design_tokens_dist=__webpack_require__("../../proprietary/design-tokens/dist/index.js"),helpers=__webpack_require__("../../documentation/componenten/helpers.ts");__webpack_require__("../../documentation/componenten/design-tokens/styles.scss");const FontFamilyDesignTokens=({tokens})=>(0,jsx_runtime.jsx)("div",{className:"rvo-design-tokens__container",style:{marginBlockEnd:"var(--rvo-space-3xl)"},children:tokens.map((({name,path,attributes,value})=>{let fontName=value.split(",")[0].replace(/"/g,"");const isFallback=attributes.item.indexOf("fallback")>-1,cssVar=(0,helpers.z)(path),fontNameTitleStyle={fontSize:isFallback?proprietary_design_tokens_dist.TUz:proprietary_design_tokens_dist.ogj,fontFamily:cssVar,fontWeight:proprietary_design_tokens_dist.s5y};return(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__row",style:isFallback?{marginBlockEnd:"1em"}:{},children:[(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__column rvo-design-tokens__column--30",children:[isFallback&&"Fallback: ",(0,jsx_runtime.jsx)("div",{style:fontNameTitleStyle,children:fontName})]}),(0,jsx_runtime.jsx)("code",{className:"rvo-design-tokens__column",children:cssVar})]},name)}))});FontFamilyDesignTokens.displayName="FontFamilyDesignTokens";const design_tokens_FontFamilyDesignTokens=FontFamilyDesignTokens;try{FontFamilyDesignTokens.displayName="FontFamilyDesignTokens",FontFamilyDesignTokens.__docgenInfo={description:"",displayName:"FontFamilyDesignTokens",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../documentation/componenten/design-tokens/FontFamilyDesignTokens.tsx#FontFamilyDesignTokens"]={docgenInfo:FontFamilyDesignTokens.__docgenInfo,name:"FontFamilyDesignTokens",path:"../../documentation/componenten/design-tokens/FontFamilyDesignTokens.tsx#FontFamilyDesignTokens"})}catch(__react_docgen_typescript_loader_error){}const FontSizeDesignTokens=({tokens})=>(0,jsx_runtime.jsx)("div",{className:"rvo-design-tokens__container",style:{marginBlockEnd:"var(--rvo-space-3xl)"},children:tokens.map((({name,path,attributes,value})=>(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__row",style:{marginBlockEnd:"var(--rvo-space-md)"},children:[(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__column rvo-design-tokens__column--15",children:[(0,jsx_runtime.jsx)("strong",{children:attributes.item}),`${16*parseFloat(value)}px / ${value}`]}),(0,jsx_runtime.jsx)("div",{className:"rvo-design-tokens__column rvo-design-tokens__column--50",style:{fontSize:value,lineHeight:"1em"},children:"Rijksdienst voor Ondernemend Nederland"}),(0,jsx_runtime.jsx)("code",{className:"rvo-design-tokens__column rvo-design-tokens__column--flex",children:(0,helpers.z)(path)})]},name)))});FontSizeDesignTokens.displayName="FontSizeDesignTokens";const design_tokens_FontSizeDesignTokens=FontSizeDesignTokens;try{FontSizeDesignTokens.displayName="FontSizeDesignTokens",FontSizeDesignTokens.__docgenInfo={description:"",displayName:"FontSizeDesignTokens",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../documentation/componenten/design-tokens/FontSizeDesignTokens.tsx#FontSizeDesignTokens"]={docgenInfo:FontSizeDesignTokens.__docgenInfo,name:"FontSizeDesignTokens",path:"../../documentation/componenten/design-tokens/FontSizeDesignTokens.tsx#FontSizeDesignTokens"})}catch(__react_docgen_typescript_loader_error){}const FontWeightDesignTokens=({tokens})=>(0,jsx_runtime.jsx)("div",{className:"rvo-design-tokens__container",style:{marginBlockEnd:"var(--rvo-space-3xl)"},children:tokens.map((({name,path,value})=>(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__row",children:[(0,jsx_runtime.jsx)("div",{className:"rvo-design-tokens__column",style:{fontWeight:(0,helpers.z)(path)},children:value}),(0,jsx_runtime.jsx)("code",{children:(0,helpers.z)(path)})]},name)))});FontWeightDesignTokens.displayName="FontWeightDesignTokens";const design_tokens_FontWeightDesignTokens=FontWeightDesignTokens;try{FontWeightDesignTokens.displayName="FontWeightDesignTokens",FontWeightDesignTokens.__docgenInfo={description:"",displayName:"FontWeightDesignTokens",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../documentation/componenten/design-tokens/FontWeightDesignTokens.tsx#FontWeightDesignTokens"]={docgenInfo:FontWeightDesignTokens.__docgenInfo,name:"FontWeightDesignTokens",path:"../../documentation/componenten/design-tokens/FontWeightDesignTokens.tsx#FontWeightDesignTokens"})}catch(__react_docgen_typescript_loader_error){}const LineHeightDesignTokens=({tokens})=>(0,jsx_runtime.jsx)("div",{className:"rvo-design-tokens__container",style:{marginBlockEnd:"var(--rvo-space-3xl)"},children:tokens.map((({name,path,value})=>(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__row",style:{marginBlockStart:"var(--rvo-space-md)"},children:[(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__column rvo-design-tokens__column--30",style:{lineHeight:(0,helpers.z)(path)},children:[value,(0,jsx_runtime.jsx)("br",{}),"Voor ondernemende Nederlanders.",(0,jsx_runtime.jsx)("br",{}),"Wij helpen u graag vooruit."]}),(0,jsx_runtime.jsx)("code",{className:"rvo-design-tokens__column",children:(0,helpers.z)(path)})]},name)))});LineHeightDesignTokens.displayName="LineHeightDesignTokens";const design_tokens_LineHeightDesignTokens=LineHeightDesignTokens;try{LineHeightDesignTokens.displayName="LineHeightDesignTokens",LineHeightDesignTokens.__docgenInfo={description:"",displayName:"LineHeightDesignTokens",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../documentation/componenten/design-tokens/LineHeightDesignTokens.tsx#LineHeightDesignTokens"]={docgenInfo:LineHeightDesignTokens.__docgenInfo,name:"LineHeightDesignTokens",path:"../../documentation/componenten/design-tokens/LineHeightDesignTokens.tsx#LineHeightDesignTokens"})}catch(__react_docgen_typescript_loader_error){}const tokens=design_tokens_dist.filter((({filePath})=>filePath.includes("src/brand/rvo/typography.tokens.json")));function _createMdxContent(props){const _components=Object.assign({p:"p",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{children:["Er zijn ",tokens.length," design tokens voor typografie."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"De RVO huisstijl is een afgeleide van de Rijkshuisstijl en gebruikt daarom alleen lettertypen die beschikbaar zijn binnen\nde Rijkshuisstijl."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"family",children:"Family"}),"\n",(0,jsx_runtime.jsx)(design_tokens_FontFamilyDesignTokens,{tokens:tokens.filter((token=>"font"===token.attributes.type))}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"weight",children:"Weight"}),"\n",(0,jsx_runtime.jsx)(design_tokens_FontWeightDesignTokens,{tokens:tokens.filter((token=>"font-weight"===token.attributes.type))}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"line-height",children:"Line-height"}),"\n",(0,jsx_runtime.jsx)(design_tokens_LineHeightDesignTokens,{tokens:tokens.filter((token=>"line-height"===token.attributes.type))}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(design_tokens_FontSizeDesignTokens,{tokens:tokens.filter((token=>"font-size"===token.attributes.type))})]})}const design_tokens_typography=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function design_tokens_typography_docpage_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Huisstijl/Lettertype"}),"\n",(0,jsx_runtime.jsx)(design_tokens_typography,{})]})}const design_tokens_typography_docpage=function design_tokens_typography_docpage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(design_tokens_typography_docpage_createMdxContent,props)})):design_tokens_typography_docpage_createMdxContent()}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../documentation/componenten/design-tokens/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-design-tokens__container{margin-block-end:8em;margin-block-start:2em}.rvo-design-tokens__row{align-items:center;display:flex;gap:2em;margin-block-end:1em !important;width:100%}.rvo-design-tokens__column{display:flex;flex-direction:column;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rvo-design-tokens__column--15{width:15%}.rvo-design-tokens__column--20{width:20%}.rvo-design-tokens__column--30{width:30%}.rvo-design-tokens__column--50{width:50%}.rvo-design-tokens__column--flex{flex:1}","",{version:3,sources:["webpack://./../../documentation/componenten/design-tokens/styles.scss"],names:[],mappings:"AAAA,8BACE,oBAAA,CACA,sBAAA,CAGF,wBACE,kBAAA,CACA,YAAA,CACA,OAAA,CACA,+BAAA,CACA,UAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,aAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAGF,+BACE,SAAA,CAGF,+BACE,SAAA,CAGF,+BACE,SAAA,CAGF,+BACE,SAAA,CAGF,iCACE,MAAA",sourcesContent:[".rvo-design-tokens__container {\n  margin-block-end: 8em;\n  margin-block-start: 2em;\n}\n\n.rvo-design-tokens__row {\n  align-items: center;\n  display: flex;\n  gap: 2em;\n  margin-block-end: 1em !important;\n  width: 100%;\n}\n\n.rvo-design-tokens__column {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.rvo-design-tokens__column--15 {\n  width: 15%;\n}\n\n.rvo-design-tokens__column--20 {\n  width: 20%;\n}\n\n.rvo-design-tokens__column--30 {\n  width: 30%;\n}\n\n.rvo-design-tokens__column--50 {\n  width: 50%;\n}\n\n.rvo-design-tokens__column--flex {\n  flex: 1;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../documentation/componenten/design-tokens/styles.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../documentation/componenten/design-tokens/styles.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);