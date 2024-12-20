"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[5032],{"../../components/card/card.examples.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardWithImageMd:()=>CardWithImageMd,CardWithImageSm:()=>CardWithImageSm,ColoredBackground:()=>ColoredBackground,Default:()=>Default,FullCardLink:()=>FullCardLink,ImageBackground:()=>ImageBackground,InvertedColors:()=>InvertedColors,Outline:()=>Outline,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/card/src/defaultArgs.ts"),_src_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/card/src/template.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Card/Examples",component:_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,args:_src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"PRODUCTION"},docusaurus:{link:"card"}}},Container=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"500px"},children});Container.displayName="Container";const Default={name:"Standard",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,title:"Investeringssubsidie duurzame energie en energiebesparing",content:"content"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,{...args})})},Outline={name:"Outline",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,title:"Investeringssubsidie duurzame energie en energiebesparing",outline:!0,content:"content"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,{...args})})},ColoredBackground={name:"Colored background",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,title:"Investeringssubsidie duurzame energie en energiebesparing",background:"color",backgroundColor:"grijs-100",outline:!0,content:"content"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,{...args})})},InvertedColors={name:"Inverted colors",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,title:"Investeringssubsidie duurzame energie en energiebesparing",background:"color",backgroundColor:"hemelblauw",outline:!1,content:"content",invertedColors:!0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,{...args})})},FullCardLink={name:"Full card link",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,fullCardLink:!0,title:"Investeringssubsidie duurzame energie en energiebesparing",outline:!0,content:"content"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,{...args})})},CardWithImageSm={name:"Image (small)",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,fullCardLink:!0,title:"Investeringssubsidie duurzame energie en energiebesparing",image:"images/www/home.jpg",imageSize:"sm",outline:!0,content:"content"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,{...args})})},CardWithImageMd={name:"Image (big)",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,fullCardLink:!0,title:"Investeringssubsidie duurzame energie en energiebesparing",image:"images/www/home.jpg",imageSize:"md",outline:!0,content:"content"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,{...args})})},ImageBackground={name:"Image background",args:{..._src_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,fullCardLink:!0,title:"Investeringssubsidie duurzame energie en energiebesparing",background:"image",backgroundImage:"images/www/mobiel.webp",outline:!1,content:"content",invertedColors:!0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_template__WEBPACK_IMPORTED_MODULE_1__.Zp,{...args})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'Standard',\n  args: {\n    ...defaultArgs,\n    title: 'Investeringssubsidie duurzame energie en energiebesparing',\n    content: 'content'\n  },\n  render: args => <Container>\n      <Card {...args} />\n    </Container>\n}",...Default.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:"{\n  name: 'Outline',\n  args: {\n    ...defaultArgs,\n    title: 'Investeringssubsidie duurzame energie en energiebesparing',\n    outline: true,\n    content: 'content'\n  },\n  render: args => <Container>\n      <Card {...args} />\n    </Container>\n}",...Outline.parameters?.docs?.source}}},ColoredBackground.parameters={...ColoredBackground.parameters,docs:{...ColoredBackground.parameters?.docs,source:{originalSource:"{\n  name: 'Colored background',\n  args: {\n    ...defaultArgs,\n    title: 'Investeringssubsidie duurzame energie en energiebesparing',\n    background: 'color',\n    backgroundColor: 'grijs-100',\n    outline: true,\n    content: 'content'\n  },\n  render: args => <Container>\n      <Card {...args} />\n    </Container>\n}",...ColoredBackground.parameters?.docs?.source}}},InvertedColors.parameters={...InvertedColors.parameters,docs:{...InvertedColors.parameters?.docs,source:{originalSource:"{\n  name: 'Inverted colors',\n  args: {\n    ...defaultArgs,\n    title: 'Investeringssubsidie duurzame energie en energiebesparing',\n    background: 'color',\n    backgroundColor: 'hemelblauw',\n    outline: false,\n    content: 'content',\n    invertedColors: true\n  },\n  render: args => <Container>\n      <Card {...args} />\n    </Container>\n}",...InvertedColors.parameters?.docs?.source}}},FullCardLink.parameters={...FullCardLink.parameters,docs:{...FullCardLink.parameters?.docs,source:{originalSource:"{\n  name: 'Full card link',\n  args: {\n    ...defaultArgs,\n    fullCardLink: true,\n    title: 'Investeringssubsidie duurzame energie en energiebesparing',\n    outline: true,\n    content: 'content'\n  },\n  render: args => <Container>\n      <Card {...args} />\n    </Container>\n}",...FullCardLink.parameters?.docs?.source}}},CardWithImageSm.parameters={...CardWithImageSm.parameters,docs:{...CardWithImageSm.parameters?.docs,source:{originalSource:"{\n  name: 'Image (small)',\n  args: {\n    ...defaultArgs,\n    fullCardLink: true,\n    title: 'Investeringssubsidie duurzame energie en energiebesparing',\n    image: 'images/www/home.jpg',\n    imageSize: 'sm',\n    outline: true,\n    content: 'content'\n  },\n  render: args => <Container>\n      <Card {...args} />\n    </Container>\n}",...CardWithImageSm.parameters?.docs?.source}}},CardWithImageMd.parameters={...CardWithImageMd.parameters,docs:{...CardWithImageMd.parameters?.docs,source:{originalSource:"{\n  name: 'Image (big)',\n  args: {\n    ...defaultArgs,\n    fullCardLink: true,\n    title: 'Investeringssubsidie duurzame energie en energiebesparing',\n    image: 'images/www/home.jpg',\n    imageSize: 'md',\n    outline: true,\n    content: 'content'\n  },\n  render: args => <Container>\n      <Card {...args} />\n    </Container>\n}",...CardWithImageMd.parameters?.docs?.source}}},ImageBackground.parameters={...ImageBackground.parameters,docs:{...ImageBackground.parameters?.docs,source:{originalSource:"{\n  name: 'Image background',\n  args: {\n    ...defaultArgs,\n    fullCardLink: true,\n    title: 'Investeringssubsidie duurzame energie en energiebesparing',\n    background: 'image',\n    backgroundImage: 'images/www/mobiel.webp',\n    outline: false,\n    content: 'content',\n    invertedColors: true\n  },\n  render: args => <Container>\n      <Card {...args} />\n    </Container>\n}",...ImageBackground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Outline","ColoredBackground","InvertedColors","FullCardLink","CardWithImageSm","CardWithImageMd","ImageBackground"]},"../../components/utils/parseContentMarkup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _validateHTML__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/utils/validateHTML.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(content,props=void 0)=>"string"==typeof content&&content.length&&(0,_validateHTML__WEBPACK_IMPORTED_MODULE_2__.A)(content)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,dangerouslySetInnerHTML:{__html:content}}):props?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...props,children:content}):content},"../../components/utils/validateHTML.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=htmlString=>{if("undefined"!=typeof window){let htmlStringToParse=htmlString;const containsHTML=/<[a-z][\s\S]*>/i.test(htmlString);if(/<([A-Z][\w]*)(\s*[^>]*)?\/?>/.test(htmlString))return!1;containsHTML&&(htmlStringToParse=`<div>${htmlString}</div>`);return null===(new DOMParser).parseFromString(htmlStringToParse,"application/xml").querySelector("parsererror")}return!0}}}]);