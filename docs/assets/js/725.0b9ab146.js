"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[725],{1881:(e,t,n)=>{n.d(t,{_:()=>l,u:()=>o});var s=n(1855),i=n(7270),a=n(3159);const r=s.createContext(null);function l(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,a.jsx)(r.Provider,{value:i,children:t})}function o(){const e=(0,s.useContext)(r);if(null===e)throw new i.dV("DocProvider");return e}},3826:(e,t,n)=>{n.d(t,{V:()=>o,t:()=>c});var s=n(1855),i=n(7270),a=n(3159);const r=Symbol("EmptyContext"),l=s.createContext(r);function o(e){let{children:t,name:n,items:i}=e;const r=(0,s.useMemo)((()=>n&&i?{name:n,items:i}:null),[n,i]);return(0,a.jsx)(l.Provider,{value:r,children:t})}function c(){const e=(0,s.useContext)(l);if(e===r)throw new i.dV("DocsSidebarProvider");return e}},1415:(e,t,n)=>{n.d(t,{B5:()=>g,Nr:()=>d,OF:()=>v,Y:()=>p,w8:()=>h});var s=n(1855),i=n(3178),a=n(8294),r=n(365),l=n(9875),o=n(6194),c=n(3826);function d(e){return"link"!==e.type||e.unlisted?"category"===e.type?function(e){if(e.href&&!e.linkUnlisted)return e.href;for(const t of e.items){const e=d(t);if(e)return e}}(e):void 0:e.href}const u=(e,t)=>void 0!==e&&(0,l.ys)(e,t),m=(e,t)=>e.some((e=>h(e,t)));function h(e,t){return"link"===e.type?u(e.href,t):"category"===e.type&&(u(e.href,t)||m(e.items,t))}function f(e,t){switch(e.type){case"category":return h(e,t)||e.items.some((e=>f(e,t)));case"link":return!e.unlisted||h(e,t);default:return!0}}function p(e,t){return(0,s.useMemo)((()=>e.filter((e=>f(e,t)))),[e,t])}function x(e){let{sidebarItems:t,pathname:n,onlyCategories:s=!1}=e;const i=[];return function e(t){for(const a of t)if("category"===a.type&&((0,l.ys)(a.href,n)||e(a.items))||"link"===a.type&&(0,l.ys)(a.href,n)){return s&&"category"!==a.type||i.unshift(a),!0}return!1}(t),i}function v(){const e=(0,c.t)(),{pathname:t}=(0,i.zy)(),n=(0,r.vT)()?.pluginData.breadcrumbs;return!1!==n&&e?x({sidebarItems:e.items,pathname:t}):null}function g(e){let{route:t}=e;const n=(0,i.zy)(),s=(0,o.r)(),r=t.routes,l=r.find((e=>(0,i.B6)(n.pathname,e)));if(!l)return null;const c=l.sidebar,d=c?s.docsSidebars[c]:void 0;return{docElement:(0,a.v)(r),sidebarName:c,sidebarItems:d}}},6194:(e,t,n)=>{n.d(t,{n:()=>l,r:()=>o});var s=n(1855),i=n(7270),a=n(3159);const r=s.createContext(null);function l(e){let{children:t,version:n}=e;return(0,a.jsx)(r.Provider,{value:n,children:t})}function o(){const e=(0,s.useContext)(r);if(null===e)throw new i.dV("DocsVersionProvider");return e}},5103:(e,t,n)=>{n.d(t,{A:()=>B});var s=n(1855),i=n(3159);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),r=n?.props.children;return{mdxAdmonitionTitle:r,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var r=n(1038),l=n(6165),o=n(6589);const c="admonition_YbVq",d="admonitionHeading_GdNV",u="admonitionIcon_f3cp",m="admonitionContent_aEyj";function h(e){let{type:t,className:n,children:s}=e;return(0,i.jsx)("div",{className:(0,r.A)(o.G.common.admonition,o.G.common.admonitionType(t),c,n),children:s})}function f(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)("span",{className:u,children:t}),n]})}function p(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:m,children:t}):null}function x(e){const{type:t,icon:n,title:s,children:a,className:r}=e;return(0,i.jsxs)(h,{type:t,className:r,children:[s||n?(0,i.jsx)(f,{title:s,icon:n}):null,(0,i.jsx)(p,{children:a})]})}function v(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,i.jsx)(v,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,i.jsx)(x,{...g,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const A={icon:(0,i.jsx)(j,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function y(e){return(0,i.jsx)(x,{...A,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}function N(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const C={icon:(0,i.jsx)(N,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function L(e){return(0,i.jsx)(x,{...C,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}function T(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const _={icon:(0,i.jsx)(T,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function w(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const k={icon:(0,i.jsx)(w,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const H={icon:(0,i.jsx)(T,{}),title:(0,i.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const M={...{note:b,tip:y,info:L,warning:function(e){return(0,i.jsx)(x,{..._,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(x,{...k,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(b,{title:"secondary",...e}),important:e=>(0,i.jsx)(L,{title:"important",...e}),success:e=>(0,i.jsx)(y,{title:"success",...e}),caution:function(e){return(0,i.jsx)(x,{...H,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})}}};function B(e){const t=a(e),n=(s=t.type,M[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),M.info));var s;return(0,i.jsx)(n,{...t})}},3537:(e,t,n)=>{n.d(t,{A:()=>v});n(1855);var s=n(1038),i=n(6165),a=n(3154),r=n(3159);function l(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(a.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(6589),h=n(5103);function f(e){let{className:t}=e;return(0,r.jsx)(h.A,{type:"caution",title:(0,r.jsx)(d,{}),className:(0,s.A)(t,m.G.common.draftBanner),children:(0,r.jsx)(u,{})})}function p(e){let{className:t}=e;return(0,r.jsx)(h.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.A)(t,m.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function x(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{...e})]})}function v(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||s.unlisted)&&(0,r.jsx)(x,{}),s.draft&&(0,r.jsx)(f,{})]})}},717:(e,t,n)=>{n.d(t,{A:()=>v});n(1855);var s=n(1038),i=n(6589),a=n(1415),r=n(9875),l=n(6132),o=n(6165),c=n(3455),d=n(3159);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_VDQe"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const f={breadcrumbsContainer:"breadcrumbsContainer_vcS6"};function p(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function x(e){let{children:t,active:n,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function v(){const e=(0,a.OF)(),t=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(i.G.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(p,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},4515:(e,t,n)=>{n.d(t,{A:()=>U});var s=n(1855),i=n(1038),a=n(6589),r=n(1881),l=n(2330),o=n(9520),c=n(3154),d=n(6046),u=n(3159);function m(e){return(0,u.jsx)("code",{...e})}var h=n(6132);var f=n(7153),p=n(4469),x=n(1544);const v="details_QyrM",g="isBrowser_Kr_Z",b="collapsibleContent_PfAI";function j(e){return!!e&&("SUMMARY"===e.tagName||j(e.parentElement))}function A(e,t){return!!e&&(e===t||A(e.parentElement,t))}function y(e){let{summary:t,children:n,...a}=e;(0,f.A)().collectAnchor(a.id);const r=(0,p.A)(),l=(0,s.useRef)(null),{collapsed:o,setCollapsed:c}=(0,x.u)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,u.jsx)("summary",{children:t??"Details"});return(0,u.jsxs)("details",{...a,ref:l,open:d,"data-collapsed":o,className:(0,i.A)(v,r&&g,a.className),onMouseDown:e=>{j(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;j(t)&&A(t,l.current)&&(e.preventDefault(),o?(c(!1),m(!0)):c(!0))},children:[h,(0,u.jsx)(x.N,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,u.jsx)("div",{className:b,children:n})})]})}const N="details_aEqK";function C(e){let{...t}=e;return(0,u.jsx)(y,{...t,className:(0,i.A)("alert alert--info",N,t.className)})}function L(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),i=(0,u.jsx)(u.Fragment,{children:t.filter((e=>e!==n))});return(0,u.jsx)(C,{...e,summary:n,children:i})}function T(e){return(0,u.jsx)(l.A,{...e})}const _="containsTaskList_iitT";function w(e){if(void 0!==e)return(0,i.A)(e,e?.includes("contains-task-list")&&_)}const k="img_veeK";var H=n(5103);const M={Head:c.A,details:L,Details:L,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,u.jsx)(m,{...e}):(0,u.jsx)(d.A,{...e})},a:function(e){return(0,u.jsx)(h.A,{...e})},pre:function(e){return(0,u.jsx)(u.Fragment,{children:e.children})},ul:function(e){return(0,u.jsx)("ul",{...e,className:w(e.className)})},li:function(e){return(0,f.A)().collectAnchor(e.id),(0,u.jsx)("li",{...e})},img:function(e){return(0,u.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.A)(t,k))});var t},h1:e=>(0,u.jsx)(T,{as:"h1",...e}),h2:e=>(0,u.jsx)(T,{as:"h2",...e}),h3:e=>(0,u.jsx)(T,{as:"h3",...e}),h4:e=>(0,u.jsx)(T,{as:"h4",...e}),h5:e=>(0,u.jsx)(T,{as:"h5",...e}),h6:e=>(0,u.jsx)(T,{as:"h6",...e}),admonition:H.A,mermaid:()=>null};function B(e){let{children:t}=e;return(0,u.jsx)(o.x,{components:M,children:t})}function U(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,r.u)();return t.hide_title||void 0!==n?null:e.title}();return(0,u.jsxs)("div",{className:(0,i.A)(a.G.docs.docMarkdown,"markdown"),children:[n&&(0,u.jsx)("header",{children:(0,u.jsx)(l.A,{as:"h1",children:n})}),(0,u.jsx)(B,{children:t})]})}},3196:(e,t,n)=>{n.d(t,{A:()=>N});n(1855);var s=n(1038),i=n(6589),a=n(1881),r=n(6165),l=n(6132);const o={tag:"tag_HTn2",tagRegular:"tagRegular_udxR",tagWithCount:"tagWithCount_GcLK"};var c=n(3159);function d(e){let{permalink:t,label:n,count:i,description:a}=e;return(0,c.jsxs)(l.A,{href:t,title:a,className:(0,s.A)(o.tag,i?o.tagWithCount:o.tagRegular),children:[n,i&&(0,c.jsx)("span",{children:i})]})}const u={tags:"tags_gXeB",tag:"tag_AJFe"};function m(e){let{tags:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,s.A)(u.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,c.jsx)("li",{className:u.tag,children:(0,c.jsx)(d,{...e})},e.permalink)))})]})}const h={iconEdit:"iconEdit_l4z4"};function f(e){let{className:t,...n}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(h.iconEdit,t),"aria-hidden":"true",...n,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function p(e){let{editUrl:t}=e;return(0,c.jsxs)(l.A,{to:t,className:i.G.common.editThisPage,children:[(0,c.jsx)(f,{}),(0,c.jsx)(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var x=n(1500);function v(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,x.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,x.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function g(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=v({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,c.jsx)(r.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,c.jsx)("b",{children:(0,c.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function b(e){let{lastUpdatedBy:t}=e;return(0,c.jsx)(r.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,c.jsx)("b",{children:t})},children:" by {user}"})}function j(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,c.jsxs)("span",{className:i.G.common.lastUpdated,children:[(0,c.jsx)(r.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,c.jsx)(g,{lastUpdatedAt:t}):"",byUser:n?(0,c.jsx)(b,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const A={lastUpdated:"lastUpdated_zQhr"};function y(e){let{className:t,editUrl:n,lastUpdatedAt:i,lastUpdatedBy:a}=e;return(0,c.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,c.jsx)("div",{className:"col",children:n&&(0,c.jsx)(p,{editUrl:n})}),(0,c.jsx)("div",{className:(0,s.A)("col",A.lastUpdated),children:(i||a)&&(0,c.jsx)(j,{lastUpdatedAt:i,lastUpdatedBy:a})})]})}function N(){const{metadata:e}=(0,a.u)(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,tags:l}=e,o=l.length>0,d=!!(t||n||r);return o||d?(0,c.jsxs)("footer",{className:(0,s.A)(i.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,c.jsx)("div",{className:(0,s.A)("row margin-top--sm",i.G.docs.docFooterTagsRow),children:(0,c.jsx)("div",{className:"col",children:(0,c.jsx)(m,{tags:l})})}),d&&(0,c.jsx)(y,{className:(0,s.A)("margin-top--sm",i.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r})]}):null}},8681:(e,t,n)=>{n.d(t,{A:()=>o});n(1855);var s=n(1881),i=n(6165),a=n(6128),r=n(3159);function l(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(a.A,{...t,subLabel:(0,r.jsx)(i.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(a.A,{...n,subLabel:(0,r.jsx)(i.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function o(){const{metadata:e}=(0,s.u)();return(0,r.jsx)(l,{previous:e.previous,next:e.next})}},252:(e,t,n)=>{n.d(t,{A:()=>m});n(1855);var s=n(6589),i=n(1881),a=n(1038),r=n(868);const l={tableOfContents:"tableOfContents_rrky",docItemContainer:"docItemContainer_YlbR"};var o=n(3159);const c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,a.A)(l.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(r.A,{...n,linkClassName:c,linkActiveClassName:d})})}function m(){const{toc:e,frontMatter:t}=(0,i.u)();return(0,o.jsx)(u,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:s.G.docs.docTocDesktop})}},4399:(e,t,n)=>{n.d(t,{A:()=>p});n(1855);var s=n(1038),i=n(6589),a=n(1881),r=n(1544),l=n(868),o=n(6165);const c={tocCollapsibleButton:"tocCollapsibleButton_m_bV",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_RZgk"};var d=n(3159);function u(e){let{collapsed:t,...n}=e;return(0,d.jsx)("button",{type:"button",...n,className:(0,s.A)("clean-btn",c.tocCollapsibleButton,!t&&c.tocCollapsibleButtonExpanded,n.className),children:(0,d.jsx)(o.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const m={tocCollapsible:"tocCollapsible_qkfi",tocCollapsibleContent:"tocCollapsibleContent_Ey6q",tocCollapsibleExpanded:"tocCollapsibleExpanded_rNvn"};function h(e){let{toc:t,className:n,minHeadingLevel:i,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:c}=(0,r.u)({initialState:!0});return(0,d.jsxs)("div",{className:(0,s.A)(m.tocCollapsible,!o&&m.tocCollapsibleExpanded,n),children:[(0,d.jsx)(u,{collapsed:o,onClick:c}),(0,d.jsx)(r.N,{lazy:!0,className:m.tocCollapsibleContent,collapsed:o,children:(0,d.jsx)(l.A,{toc:t,minHeadingLevel:i,maxHeadingLevel:a})})]})}const f={tocMobile:"tocMobile_pnYB"};function p(){const{toc:e,frontMatter:t}=(0,a.u)();return(0,d.jsx)(h,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,s.A)(i.G.docs.docTocMobile,f.tocMobile)})}},2066:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});n(1855);var s=n(6690),i=n(1881),a=n(3159);function r(){const{metadata:e,frontMatter:t,assets:n}=(0,i.u)();return(0,a.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var l=n(8111);function o(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,a.jsx)(i._,{content:e.content,children:(0,a.jsxs)(s.e3,{className:t,children:[(0,a.jsx)(r,{}),(0,a.jsx)(l.A,{children:(0,a.jsx)(n,{})})]})})}},6065:(e,t,n)=>{n.d(t,{A:()=>o});n(1855);var s=n(1038),i=n(6165),a=n(6589),r=n(6194),l=n(3159);function o(e){let{className:t}=e;const n=(0,r.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},3368:(e,t,n)=>{n.d(t,{A:()=>x});n(1855);var s=n(1038),i=n(1500),a=n(6132),r=n(6165),l=n(365),o=n(6589),c=n(271),d=n(6194),u=n(3159);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function f(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(a.A,{to:n,onClick:s,children:(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,i.A)(),{pluginId:r}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(r),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,l.HW)(r),x=m??(v=p).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,s.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:a,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(f,{versionLabel:p.label,to:x.path,onClick:()=>d(p.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(p,{className:t,versionMetadata:n}):null}},868:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(1855),i=n(9372);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(6132),m=n(3159);function h(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const f=s.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const p=(0,i.p)(),x=c??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>r({toc:a(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:v});return d((0,s.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:x,maxHeadingLevel:v}}),[l,o,x,v])),(0,m.jsx)(f,{toc:g,className:n,linkClassName:l,...h})}},1544:(e,t,n)=>{n.d(t,{N:()=>v,u:()=>c});var s=n(1855),i=n(1499),a=n(4695),r=n(4763),l=n(3159);const o="ease-in-out";function c(e){let{initialState:t}=e;const[n,i]=(0,s.useState)(t??!1),a=(0,s.useCallback)((()=>{i((e=>!e))}),[]);return{collapsed:n,setCollapsed:i,toggleCollapsed:a}}const d={display:"none",overflow:"hidden",height:"0px"},u={display:"block",overflow:"visible",height:"auto"};function m(e,t){const n=t?d:u;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function h(e){let{collapsibleRef:t,collapsed:n,animation:i}=e;const a=(0,s.useRef)(!1);(0,s.useEffect)((()=>{const e=t.current;function s(){const t=e.scrollHeight,n=i?.duration??function(e){if((0,r.O)())return 1;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(t);return{transition:`height ${n}ms ${i?.easing??o}`,height:`${t}px`}}function l(){const t=s();e.style.transition=t.transition,e.style.height=t.height}if(!a.current)return m(e,n),void(a.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(l(),requestAnimationFrame((()=>{e.style.height=d.height,e.style.overflow=d.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{l()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,i])}function f(e){if(!i.A.canUseDOM)return e?d:u}function p(e){let{as:t="div",collapsed:n,children:i,animation:a,onCollapseTransitionEnd:r,className:o,disableSSRStyle:c}=e;const d=(0,s.useRef)(null);return h({collapsibleRef:d,collapsed:n,animation:a}),(0,l.jsx)(t,{ref:d,style:c?void 0:f(n),onTransitionEnd:e=>{"height"===e.propertyName&&(m(d.current,n),r?.(n))},className:o,children:i})}function x(e){let{collapsed:t,...n}=e;const[i,r]=(0,s.useState)(!t),[o,c]=(0,s.useState)(t);return(0,a.A)((()=>{t||r(!0)}),[t]),(0,a.A)((()=>{i&&c(t)}),[i,t]),i?(0,l.jsx)(p,{...n,collapsed:o}):null}function v(e){let{lazy:t,...n}=e;const s=t?x:p;return(0,l.jsx)(s,{...n})}},4763:(e,t,n)=>{function s(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}n.d(t,{O:()=>s})},9875:(e,t,n)=>{n.d(t,{Dt:()=>l,ys:()=>r});var s=n(1855),i=n(8668),a=n(1500);function r(e,t){const n=e=>(!e||e.endsWith("/")?e:`${e}/`)?.toLowerCase();return n(e)===n(t)}function l(){const{baseUrl:e}=(0,a.A)().siteConfig;return(0,s.useMemo)((()=>function(e){let{baseUrl:t,routes:n}=e;function s(e){return e.path===t&&!0===e.exact}function i(e){return e.path===t&&!e.exact}return function e(t){if(0===t.length)return;return t.find(s)||e(t.filter(i).flatMap((e=>e.routes??[])))}(n)}({routes:i.A,baseUrl:e})),[e])}}}]);