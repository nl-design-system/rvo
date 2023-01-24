/*! For license information please see ad524959.84200164.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[1630],{7522:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(9901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||c;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var o=r(2798),n=r(9901),c=r(7522),i=r(4517),a=r(3722),s=r(5795);const l={title:"Accordion item titel",teaser:"Teaser tekst",content:"Item content",open:!1};var d=r(1250);const m=e=>{let{title:t=l.title,teaser:r=l.teaser,content:o=l.content,open:n=l.open,children:c}=e,i=(0,s.Z)(c||r),m=(0,s.Z)(c||o);return(0,d.jsxs)("details",{className:"rvo-accordion__item",...n?{open:n}:{},children:[(0,d.jsxs)("summary",{className:"rvo-accordion__item-summary",children:[(0,d.jsx)("h3",{className:"rvo-link",children:(0,d.jsxs)("span",{className:"rvo-accordion__item-title rvo-layout-row rvo-layout-row--flex-start rvo-layout-gap--sm",children:[(0,d.jsx)(a.ZP,{icon:"delta-omlaag",size:"md",color:"hemelblauw",classNames:["rvo-accordion__item-icon--closed"]}),(0,d.jsx)(a.ZP,{icon:"delta-omhoog",size:"md",color:"hemelblauw",classNames:["rvo-accordion__item-icon--open"]}),t]})}),(0,d.jsx)("span",{className:"rvo-accordion-teaser",children:i})]}),(0,d.jsx)("div",{className:"rvo-accordion__content",children:m})]})},p={items:[{title:"Accordion item 1",teaser:"Teaser for accordion item 1",content:"Item content"},{title:"Accordion item 2",teaser:"Teaser for accordion item 2",content:"Item content"},{title:"Accordion item 3",teaser:"Teaser for accordion item 3",content:"Item content"},{title:"Accordion item 4",teaser:"Teaser for accordion item 4",content:"Item content"},{title:"Accordion item 5",teaser:"Teaser for accordion item 5",content:"Item content"}],grijs:!1},u=e=>{let{items:t=p.items,grijs:r=p.grijs,children:o}=e;return(0,d.jsx)("div",{className:(0,i.Z)("rvo-accordion",r&&"rvo-accordion--grijs","rvo-accordion--border-indicator"),children:o&&n.Children.map(o,((e,t)=>(0,d.jsx)(m,{...e.props},t)))||t.map(((e,t)=>(0,d.jsx)(m,{...e},t)))})},f={title:"Accordion",hide_title:!1,slug:"."},v=void 0,y={unversionedId:"accordion/accordion.docs",id:"accordion/accordion.docs",title:"Accordion",description:"Documentation for accordion",source:"@site/../../components/accordion/accordion.docs.mdx",sourceDirName:"accordion",slug:"/accordion/",permalink:"/rvo/docs/components/accordion/",draft:!1,editUrl:"https://github.com/nl-design-system/rvo/tree/main/components/../../components/accordion/accordion.docs.mdx",tags:[],version:"current",frontMatter:{title:"Accordion",hide_title:!1,slug:"."},sidebar:"components",next:{title:"Alert",permalink:"/rvo/docs/components/alert/"}},g={},h=[],b={toc:h};function j(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(u,{mdxType:"Accordion"}),(0,c.kt)("br",null),"Documentation for accordion")}j.isMDXComponent=!0},5795:(e,t,r)=>{r.d(t,{Z:()=>c});r(9901);var o=r(9469),n=r(1250);const c=function(e,t){return void 0===t&&(t=void 0),"string"==typeof e&&e.length&&(0,o.Z)(e)?(0,n.jsx)("div",{...t,dangerouslySetInnerHTML:{__html:e}}):t?(0,n.jsx)("div",{...t,children:e}):e}},9469:(e,t,r)=>{r.d(t,{Z:()=>o});const o=e=>{let t=`<div>${e}</div>`;return null===(new DOMParser).parseFromString(t,"application/xml").querySelector("parsererror")}}}]);