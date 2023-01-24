/*! For license information please see f0908d3b.fa05eda7.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[1437],{7522:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),b=o,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>b,toc:()=>v});var n=r(2798),o=(r(9901),r(7522)),a=r(4517),l=r(3722),s=r(9469);const c={description:"Table description.",columns:[{label:"Title"},{label:"Text",sortable:!0,sortDirection:"ASC"},{label:"Price ($)",type:"numeric"},{label:""}],rows:[["Title value 1","Text value 1","57",'<a href="#" class="rvo-link">Link 1</a>'],["Title value 2","Text value 2","12.50",'<a href="#" class="rvo-link">Link 2</a>'],["Title value 3","Text value 3","90",'<a href="#" class="rvo-link">Link 3</a>'],["Title value 4","Text value 4","1.50",'<a href="#" class="rvo-link">Link 4</a>']]};var i=r(1250);const u=e=>{let{description:t=c.description,columns:r=c.columns,rows:n=c.rows}=e;return(0,i.jsx)("div",{className:"rvo-table--responsive",children:(0,i.jsxs)("table",{className:"rvo-table",children:[(0,i.jsx)("caption",{className:"rvo-caption",children:t}),(0,i.jsx)("thead",{className:"rvo-table-head",children:(0,i.jsx)("tr",{className:"rvo-table-row",children:r.map(((e,t)=>{let r;return r="ASC"===e.sortDirection?"delta-omhoog":"DESC"===e.sortDirection?"delta-omlaag":"",(0,i.jsxs)("th",{scope:"col",className:(0,a.Z)("rvo-table-header",e.sortable&&"rvo-table-header--sortable",e.sortable&&e.sortDirection.length>1&&["rvo-layout-row","rvo-layout-gap--sm"],"numeric"===e.type&&"rvo-table-header--numeric"),children:[e.label,e.sortable&&e.sortDirection.length>0&&(0,i.jsx)(l.JO,{size:"sm",color:"hemelblauw",icon:r})]},t)}))})}),(0,i.jsx)("tbody",{className:"rvo-table-body",children:n.map(((e,t)=>(0,i.jsx)("tr",{className:"rvo-table-row",children:r.map(((t,r)=>{const n=e[r],o=(0,a.Z)("rvo-table-cell","numeric"===t.type&&"rvo-table-cell--numeric");let l=(0,i.jsx)("td",{className:o,children:n},r);return"string"==typeof n&&n.length&&(0,s.Z)(n)&&(l=(0,i.jsx)("td",{className:o,dangerouslySetInnerHTML:{__html:n}},r)),l}))},t)))})]})})},p={title:"Table",hide_title:!1,slug:"."},m=void 0,b={unversionedId:"table/table.docs",id:"table/table.docs",title:"Table",description:"Documentation for table",source:"@site/../../components/table/table.docs.mdx",sourceDirName:"table",slug:"/table/",permalink:"/rvo/docs/components/table/",draft:!1,editUrl:"https://github.com/nl-design-system/rvo/tree/main/components/../../components/table/table.docs.mdx",tags:[],version:"current",frontMatter:{title:"Table",hide_title:!1,slug:"."},sidebar:"components",previous:{title:"Status icon",permalink:"/rvo/docs/components/status-icon/"},next:{title:"Tag",permalink:"/rvo/docs/components/tag/"}},d={},v=[],f={toc:v};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{mdxType:"Table"}),(0,o.kt)("br",null),"Documentation for table")}y.isMDXComponent=!0},9469:(e,t,r)=>{r.d(t,{Z:()=>n});const n=e=>{let t=`<div>${e}</div>`;return null===(new DOMParser).parseFromString(t,"application/xml").querySelector("parsererror")}}}]);