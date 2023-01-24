/*! For license information please see 7377d29d.dcca62ec.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[1987],{7522:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9901);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(2798),o=(t(9901),t(7522)),i=t(6662);const a={title:"Heading",hide_title:!1,slug:"."},c=void 0,l={unversionedId:"heading/heading.docs",id:"heading/heading.docs",title:"Heading",description:"Alle headings van niveau 1 t/m 6:",source:"@site/../../components/heading/heading.docs.mdx",sourceDirName:"heading",slug:"/heading/",permalink:"/rvo/docs/components/heading/",draft:!1,editUrl:"https://github.com/nl-design-system/rvo/tree/main/components/../../components/heading/heading.docs.mdx",tags:[],version:"current",frontMatter:{title:"Heading",hide_title:!1,slug:"."},sidebar:"components",previous:{title:"Header",permalink:"/rvo/docs/components/header/"},next:{title:"Icon",permalink:"/rvo/docs/components/icon/"}},s={},d=[],p={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("br",null),"Alle headings van niveau 1 t/m 6:",(0,o.kt)(i.ZP,{type:"h1",mdxType:"Heading"},"Heading 1"),(0,o.kt)(i.ZP,{type:"h2",mdxType:"Heading"},"Heading 2"),(0,o.kt)(i.ZP,{type:"h3",mdxType:"Heading"},"Heading 3"),(0,o.kt)(i.ZP,{type:"h4",mdxType:"Heading"},"Heading 4"),(0,o.kt)(i.ZP,{type:"h5",mdxType:"Heading"},"Heading 5"),(0,o.kt)(i.ZP,{type:"h6",mdxType:"Heading"},"Heading 6"),(0,o.kt)("br",null),"Documentation for heading")}u.isMDXComponent=!0},6662:(e,n,t)=>{t.d(n,{X6:()=>c,ZP:()=>l});var r=t(4517),o=(t(9901),t(3121));const i={type:"h1",textContent:"Heading",link:""};var a=t(1250);const c=e=>{let{type:n=i.type,textContent:t=i.textContent,link:c=i.link}=e;const l={className:(0,r.Z)(`utrecht-heading-${n.replace("h","")}`)};let s;switch(n){default:case"h1":s=(0,a.jsx)("h1",{...l,children:t});break;case"h2":s=(0,a.jsx)("h2",{...l,children:t});break;case"h3":s=(0,a.jsx)("h3",{...l,children:t});break;case"h4":s=(0,a.jsx)("h4",{...l,children:t});break;case"h5":s=(0,a.jsx)("h5",{...l,children:t});break;case"h6":s=(0,a.jsx)("h6",{...l,children:t})}return c&&c.length?(0,a.jsx)(o.rU,{url:c,content:s,noUnderline:!0}):s},l=c},3121:(e,n,t)=>{t.d(n,{rU:()=>c,ZP:()=>l});var r=t(4517),o=(t(9901),t(3722));const i={content:"Dit is een link",url:"#",showIcon:"no",hover:!1,icon:"home",iconSize:"md",iconColor:"hemelblauw",active:!1,focus:!1,noUnderline:!1};var a=t(1250);o.YM,o.Ax;const c=e=>{let{content:n=i.content,url:t=i.url,showIcon:c=i.showIcon,icon:l=i.icon,iconSize:s=i.iconSize,iconColor:d=i.iconColor,hover:p=i.hover,active:u=i.active,focus:h=i.focus,noUnderline:m=i.noUnderline,classNames:f=[]}=e;const g=[];"before"===c&&g.push("rvo-link__icon--before"),"after"===c&&g.push("rvo-link__icon--after");const v=(0,o.JO)({icon:l,size:s,color:d,classNames:g});return(0,a.jsxs)("a",{href:t,className:(0,r.Z)("rvo-link",f,{"rvo-link--active":u,"rvo-link--hover":p,"rvo-link--focus":h},"no"!==c&&["rvo-layout-row","rvo-layout-gap--sm"],m&&"rvo-link--no-underline"),children:["before"===c&&v,n,"after"===c&&v]})},l=c}}]);