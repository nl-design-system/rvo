/*! For license information please see 58a6613a.f299c220.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[6764],{2470:(t,o,n)=>{n.r(o),n.d(o,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>b,metadata:()=>d,toc:()=>m});var e=n(2798),r=(n(9901),n(7522)),u=n(7350),s=n(7418);const i={buttonsLeft:[{kind:"primary",size:"md",label:"Primary action"}],buttonsRight:[{kind:"secondary",size:"md",label:"Secondary action"}]};var a=n(1250);const c=t=>{let{buttonsLeft:o=i.buttonsLeft,buttonsRight:n=i.buttonsRight,children:e}=t;return(0,a.jsxs)(u.hE,{children:[e,!e&&o.map(((t,o)=>(0,a.jsx)(s.zx,{...t},o))),!e&&n.map(((t,o)=>(0,a.jsx)(s.zx,{...t},o)))]})},b={title:"ButtonGroup",hide_title:!1,slug:"."},l=void 0,d={unversionedId:"button-group/button-group.docs",id:"button-group/button-group.docs",title:"ButtonGroup",description:"Documentation for button group",source:"@site/../../components/button-group/button-group.docs.mdx",sourceDirName:"button-group",slug:"/button-group/",permalink:"/rvo/docs/components/button-group/",draft:!1,editUrl:"https://github.com/nl-design-system/rvo/tree/main/components/../../components/button-group/button-group.docs.mdx",tags:[],version:"current",frontMatter:{title:"ButtonGroup",hide_title:!1,slug:"."},sidebar:"components",previous:{title:"Button",permalink:"/rvo/docs/components/button/"},next:{title:"Card",permalink:"/rvo/docs/components/card/"}},p={},m=[],h={toc:m};function g(t){let{components:o,...n}=t;return(0,r.kt)("wrapper",(0,e.Z)({},h,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"ButtonGroup"}),(0,r.kt)("br",null),"Documentation for button group")}g.isMDXComponent=!0},7418:(t,o,n)=>{n.d(o,{zx:()=>a,ZP:()=>c});var e=n(7350),r=n(4517),u=(n(9901),n(3722));const s={kind:"primary",size:"md",active:!1,busy:!1,disabled:!1,focus:!1,focusVisible:!1,hover:!1,label:"Button",showIcon:"no",icon:"home"};var i=n(1250);u.W;const a=t=>{let{kind:o=s.kind,size:n=s.size,active:a=s.active,busy:c=s.busy,disabled:b=s.disabled,focus:l=s.focus,focusVisible:d=s.focusVisible,hover:p=s.hover,label:m=s.label,children:h,showIcon:g=s.showIcon,icon:v=s.icon,classNames:y=[],alignToRightInGroup:f,...x}=t;const k=(0,i.jsx)(u.JO,{icon:v,size:"md"});let w;switch(o){case"primary":case"warning":w="primary-action-button";break;case"secondary":w="secondary-action-button";break;case"subtle":case"warning-subtle":w="subtle-button"}return(0,i.jsxs)(e.zx,{className:(0,r.Z)(y,"tertiary"===o&&"utrecht-button--rvo-tertiary-action","quaternary"===o&&"utrecht-button--rvo-quaternary-action",a&&"utrecht-button--active",c&&"utrecht-button--busy",p&&"utrecht-button--hover",l&&"utrecht-button--focus",d&&"utrecht-button--focus-visible","rvo-layout-row-inline","xs"===n&&"rvo-layout-gap--xs","sm"===n&&"rvo-layout-gap--sm","md"===n&&"rvo-layout-gap--md","xs"===n&&"utrecht-button--rvo-xs","sm"===n&&"utrecht-button--rvo-sm","md"===n&&"utrecht-button--rvo-md",f&&"rvo-button-group__align-right"),disabled:b||void 0,appearance:w,hint:"warning"===o||"warning-subtle"===o?"warning":void 0,...x,children:["before"===g&&k,h||m,"after"===g&&k]})},c=a}}]);