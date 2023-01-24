/*! For license information please see 72ab1475.86cc0279.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[5184],{7522:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>b});var o=r(9901);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=o.createContext({}),l=function(t){var e=o.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),s=l(r),p=n,b=s["".concat(c,".").concat(p)]||s[p]||m[p]||a;return r?o.createElement(b,i(i({ref:e},d),{},{components:r})):o.createElement(b,i({ref:e},d))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u[s]="string"==typeof t?t:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9817:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=r(2798),n=(r(9901),r(7522)),a=r(4810);const i={title:"Radiobutton",hide_title:!1,slug:"."},u=void 0,c={unversionedId:"form-radio-button/form-radio-button.docs",id:"form-radio-button/form-radio-button.docs",title:"Radiobutton",description:"Documentation for radiobutton",source:"@site/../../components/form-radio-button/form-radio-button.docs.mdx",sourceDirName:"form-radio-button",slug:"/form-radio-button/",permalink:"/rvo/docs/components/form-radio-button/",draft:!1,editUrl:"https://github.com/nl-design-system/rvo/tree/main/components/../../components/form-radio-button/form-radio-button.docs.mdx",tags:[],version:"current",frontMatter:{title:"Radiobutton",hide_title:!1,slug:"."},sidebar:"components",previous:{title:"Form layout",permalink:"/rvo/docs/components/form-layout/"},next:{title:"Radiobutton Group",permalink:"/rvo/docs/components/form-radio-button-group/"}},l={},d=[],s={toc:d};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{mdxType:"RadioButton"}),(0,n.kt)("br",null),"Documentation for radiobutton")}m.isMDXComponent=!0},4810:(t,e,r)=>{r.d(e,{EU:()=>i,ZP:()=>u});var o=r(4517);r(9901);const n={id:"field",name:"group",label:"Label",checked:!1,hover:!1,disabled:!1,active:!1,focus:!1,invalid:!1,required:!1};var a=r(1250);const i=t=>{let{id:e=n.id,name:r=n.name,label:i=n.label,checked:u=n.checked,hover:c=n.hover,disabled:l=n.disabled,active:d=n.active,focus:s=n.focus,invalid:m=n.invalid,required:p=n.required,onChange:b,onUpdateGroup:f,...v}=t;return(0,a.jsxs)("label",{className:"rvo-layout-row rvo-layout-gap--sm",htmlFor:e,children:[(0,a.jsx)("input",{id:e,name:r,type:"radio",checked:u||null,disabled:l||null,required:p||null,className:(0,o.Z)("utrecht-custom-radio-button",u&&"utrecht-custom-radio-button--checked",c&&"rvo-custom-radio-button--hover",l&&"utrecht-custom-radio-button--disabled",d&&"utrecht-custom-radio-button--active",s&&"utrecht-custom-radio-button--focus-visible",m&&"utrecht-custom-radio-button--invalid",p&&"utrecht-custom-radio-button--required"),onChange:t=>{b?.(t),f?.(t)},...v}),i]})},u=i}}]);