"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[1273],{"../../documentation/pages/design-tokens/design-tokens.space.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>design_tokens_space_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),design_tokens_dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),proprietary_design_tokens_dist=__webpack_require__("../../proprietary/design-tokens/dist/index.js"),helpers=__webpack_require__("../../documentation/componenten/helpers.ts");const SpaceDesignTokens=({tokens})=>(0,jsx_runtime.jsx)("div",{className:"rvo-design-tokens__container",children:tokens.map((({path,attributes,value,name})=>(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__row",children:[(0,jsx_runtime.jsx)("div",{className:"rvo-design-tokens__column rvo-design-tokens__column--20",style:{maxWidth:"200px"},children:(0,jsx_runtime.jsx)("div",{style:{display:"inline-block",backgroundColor:proprietary_design_tokens_dist.YcN,height:value,width:value}})}),(0,jsx_runtime.jsxs)("div",{className:"rvo-design-tokens__column",children:[(0,jsx_runtime.jsx)("strong",{children:attributes.item.replace(/(^\w{1})|(\s+\w{1})/g,(letter=>letter.toUpperCase()))}),(0,jsx_runtime.jsx)("div",{children:value})]}),(0,jsx_runtime.jsx)("code",{children:(0,helpers.z)(path)})]},name)))});SpaceDesignTokens.displayName="SpaceDesignTokens";try{SpaceDesignTokens.displayName="SpaceDesignTokens",SpaceDesignTokens.__docgenInfo={description:"",displayName:"SpaceDesignTokens",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../documentation/componenten/design-tokens/SpaceDesignTokens.tsx#SpaceDesignTokens"]={docgenInfo:SpaceDesignTokens.__docgenInfo,name:"SpaceDesignTokens",path:"../../documentation/componenten/design-tokens/SpaceDesignTokens.tsx#SpaceDesignTokens"})}catch(__react_docgen_typescript_loader_error){}const tokens=design_tokens_dist.filter((({filePath})=>filePath.includes("src/brand/rvo/space.tokens.json")));function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Er zijn ",tokens.length," design tokens voor spaces. Ruimtes tussen onderdelen worden bepaald met stapjes van 2 pixels."]})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Wanneer je een waarde nodig hebt die niet in de lijst is opgenomen kun je waarden combineren zoals:"}),"\n",(0,jsx_runtime.jsx)("strong",{children:"rvo-space-3xs + rvo-space-md"}),"\n",(0,jsx_runtime.jsx)(SpaceDesignTokens,{tokens})]})}const design_tokens_space=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function design_tokens_space_docpage_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Huisstijl/Ruimte"}),"\n",(0,jsx_runtime.jsx)(design_tokens_space,{})]})}const design_tokens_space_docpage=function design_tokens_space_docpage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(design_tokens_space_docpage_createMdxContent,props)})):design_tokens_space_docpage_createMdxContent()}}}]);