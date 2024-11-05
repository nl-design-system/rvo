"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[9344],{3826:(e,t,n)=>{n.d(t,{V:()=>l,t:()=>c});var s=n(1855),i=n(7270),a=n(3159);const o=Symbol("EmptyContext"),r=s.createContext(o);function l(e){let{children:t,name:n,items:i}=e;const o=(0,s.useMemo)((()=>n&&i?{name:n,items:i}:null),[n,i]);return(0,a.jsx)(r.Provider,{value:o,children:t})}function c(){const e=(0,s.useContext)(r);if(e===o)throw new i.dV("DocsSidebarProvider");return e}},1415:(e,t,n)=>{n.d(t,{B5:()=>g,Nr:()=>d,OF:()=>v,Y:()=>x,w8:()=>h});var s=n(1855),i=n(3178),a=n(8294),o=n(365),r=n(9875),l=n(6194),c=n(3826);function d(e){return"link"!==e.type||e.unlisted?"category"===e.type?function(e){if(e.href&&!e.linkUnlisted)return e.href;for(const t of e.items){const e=d(t);if(e)return e}}(e):void 0:e.href}const u=(e,t)=>void 0!==e&&(0,r.ys)(e,t),m=(e,t)=>e.some((e=>h(e,t)));function h(e,t){return"link"===e.type?u(e.href,t):"category"===e.type&&(u(e.href,t)||m(e.items,t))}function f(e,t){switch(e.type){case"category":return h(e,t)||e.items.some((e=>f(e,t)));case"link":return!e.unlisted||h(e,t);default:return!0}}function x(e,t){return(0,s.useMemo)((()=>e.filter((e=>f(e,t)))),[e,t])}function p(e){let{sidebarItems:t,pathname:n,onlyCategories:s=!1}=e;const i=[];return function e(t){for(const a of t)if("category"===a.type&&((0,r.ys)(a.href,n)||e(a.items))||"link"===a.type&&(0,r.ys)(a.href,n)){return s&&"category"!==a.type||i.unshift(a),!0}return!1}(t),i}function v(){const e=(0,c.t)(),{pathname:t}=(0,i.zy)(),n=(0,o.vT)()?.pluginData.breadcrumbs;return!1!==n&&e?p({sidebarItems:e.items,pathname:t}):null}function g(e){let{route:t}=e;const n=(0,i.zy)(),s=(0,l.r)(),o=t.routes,r=o.find((e=>(0,i.B6)(n.pathname,e)));if(!r)return null;const c=r.sidebar,d=c?s.docsSidebars[c]:void 0;return{docElement:(0,a.v)(o),sidebarName:c,sidebarItems:d}}},6194:(e,t,n)=>{n.d(t,{n:()=>r,r:()=>l});var s=n(1855),i=n(7270),a=n(3159);const o=s.createContext(null);function r(e){let{children:t,version:n}=e;return(0,a.jsx)(o.Provider,{value:n,children:t})}function l(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocsVersionProvider");return e}},9344:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_t});var s=n(1855),i=n(6690),a=n(7270),o=n(3159);const r=s.createContext(null);function l(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(r.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(r);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(i.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(1038),m=n(9623),h=n(6165),f=n(5889);function x(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(f.A,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(f.A,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function p(){const{metadata:e}=c();return(0,o.jsx)(x,{previous:e.previous,next:e.next})}var v=n(1500),g=n(6132),j=n(365),b=n(6589),A=n(271),N=n(6194);const y={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=y[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(g.A,{to:n,onClick:s,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,v.A)(),{pluginId:i}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:a}=(0,A.g1)(i),{latestDocSuggestion:r,latestVersionSuggestion:l}=(0,j.HW)(i),c=r??(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.A)(t,b.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(C,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(L,{versionLabel:l.label,to:c.path,onClick:()=>a(l.name)})})]})}function T(e){let{className:t}=e;const n=(0,N.r)();return n.banner?(0,o.jsx)(_,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,N.r)();return n.badge?(0,o.jsx)("span",{className:(0,u.A)(t,b.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const k={tag:"tag_HTn2",tagRegular:"tagRegular_udxR",tagWithCount:"tagWithCount_GcLK"};function M(e){let{permalink:t,label:n,count:s,description:i}=e;return(0,o.jsxs)(g.A,{href:t,title:i,className:(0,u.A)(k.tag,s?k.tagWithCount:k.tagRegular),children:[n,s&&(0,o.jsx)("span",{children:s})]})}const H={tags:"tags_gXeB",tag:"tag_AJFe"};function B(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.A)(H.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:H.tag,children:(0,o.jsx)(M,{...e})},e.permalink)))})]})}const U={iconEdit:"iconEdit_l4z4"};function E(e){let{className:t,...n}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(U.iconEdit,t),"aria-hidden":"true",...n,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,o.jsxs)(g.A,{to:t,className:b.G.common.editThisPage,children:[(0,o.jsx)(E,{}),(0,o.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function S(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,v.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,v.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function V(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=S({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,o.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function z(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function R(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,o.jsxs)("span",{className:b.G.common.lastUpdated,children:[(0,o.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(V,{lastUpdatedAt:t}):"",byUser:n?(0,o.jsx)(z,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const D={lastUpdated:"lastUpdated_zQhr"};function O(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:i}=e;return(0,o.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:n&&(0,o.jsx)(I,{editUrl:n})}),(0,o.jsx)("div",{className:(0,u.A)("col",D.lastUpdated),children:(s||i)&&(0,o.jsx)(R,{lastUpdatedAt:s,lastUpdatedBy:i})})]})}function F(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:i}=e,a=i.length>0,r=!!(t||n||s);return a||r?(0,o.jsxs)("footer",{className:(0,u.A)(b.G.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",b.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(B,{tags:i})})}),r&&(0,o.jsx)(O,{className:(0,u.A)("margin-top--sm",b.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var P=n(1544),G=n(9372);function q(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function $(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=$({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function W(e){const t=e.getBoundingClientRect();return t.top===t.bottom?W(e.parentNode):t}function Y(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>W(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(W(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function K(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,G.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Q(e){const t=(0,s.useRef)(void 0),n=K();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),l=Y(r,{anchorTopOffset:n.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}function Z(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,o.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,o.jsxs)("li",{children:[(0,o.jsx)(g.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,o.jsx)(Z,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const J=s.memo(Z);function X(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:l,...c}=e;const d=(0,G.p)(),u=r??d.tableOfContents.minHeadingLevel,m=l??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>$({toc:q(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return Q((0,s.useMemo)((()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}}),[i,a,u,m])),(0,o.jsx)(J,{toc:h,className:n,linkClassName:i,...c})}const ee={tocCollapsibleButton:"tocCollapsibleButton_m_bV",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_RZgk"};function te(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_qkfi",tocCollapsibleContent:"tocCollapsibleContent_Ey6q",tocCollapsibleExpanded:"tocCollapsibleExpanded_rNvn"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:r}=(0,P.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(ne.tocCollapsible,!a&&ne.tocCollapsibleExpanded,n),children:[(0,o.jsx)(te,{collapsed:a,onClick:r}),(0,o.jsx)(P.N,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:a,children:(0,o.jsx)(X,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const ie={tocMobile:"tocMobile_pnYB"};function ae(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(b.G.docs.docTocMobile,ie.tocMobile)})}const oe={tableOfContents:"tableOfContents_rrky",docItemContainer:"docItemContainer_YlbR"},re="table-of-contents__link toc-highlight",le="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,u.A)(oe.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(X,{...n,linkClassName:re,linkActiveClassName:le})})}function de(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.G.docs.docTocDesktop})}var ue=n(2454),me=n(9520),he=n(3154),fe=n(6553);function xe(e){return(0,o.jsx)("code",{...e})}var pe=n(7153),ve=n(4469);const ge="details_QyrM",je="isBrowser_Kr_Z",be="collapsibleContent_PfAI";function Ae(e){return!!e&&("SUMMARY"===e.tagName||Ae(e.parentElement))}function Ne(e,t){return!!e&&(e===t||Ne(e.parentElement,t))}function ye(e){let{summary:t,children:n,...i}=e;(0,pe.A)().collectAnchor(i.id);const a=(0,ve.A)(),r=(0,s.useRef)(null),{collapsed:l,setCollapsed:c}=(0,P.u)({initialState:!i.open}),[d,m]=(0,s.useState)(i.open),h=s.isValidElement(t)?t:(0,o.jsx)("summary",{children:t??"Details"});return(0,o.jsxs)("details",{...i,ref:r,open:d,"data-collapsed":l,className:(0,u.A)(ge,a&&je,i.className),onMouseDown:e=>{Ae(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ae(t)&&Ne(t,r.current)&&(e.preventDefault(),l?(c(!1),m(!0)):c(!0))},children:[h,(0,o.jsx)(P.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,o.jsx)("div",{className:be,children:n})})]})}const Ce="details_aEqK";function Le(e){let{...t}=e;return(0,o.jsx)(ye,{...t,className:(0,u.A)("alert alert--info",Ce,t.className)})}function _e(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),i=(0,o.jsx)(o.Fragment,{children:t.filter((e=>e!==n))});return(0,o.jsx)(Le,{...e,summary:n,children:i})}function Te(e){return(0,o.jsx)(ue.A,{...e})}const we="containsTaskList_iitT";function ke(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&we)}const Me="img_veeK";function He(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:i.length>0?(0,o.jsx)(o.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}const Be="admonition_YbVq",Ue="admonitionHeading_GdNV",Ee="admonitionIcon_f3cp",Ie="admonitionContent_aEyj";function Se(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,u.A)(b.G.common.admonition,b.G.common.admonitionType(t),Be,n),children:s})}function Ve(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:Ue,children:[(0,o.jsx)("span",{className:Ee,children:t}),n]})}function ze(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:Ie,children:t}):null}function Re(e){const{type:t,icon:n,title:s,children:i,className:a}=e;return(0,o.jsxs)(Se,{type:t,className:a,children:[s||n?(0,o.jsx)(Ve,{title:s,icon:n}):null,(0,o.jsx)(ze,{children:i})]})}function De(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const Oe={icon:(0,o.jsx)(De,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Fe(e){return(0,o.jsx)(Re,{...Oe,...e,className:(0,u.A)("alert alert--secondary",e.className),children:e.children})}function Pe(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const Ge={icon:(0,o.jsx)(Pe,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function qe(e){return(0,o.jsx)(Re,{...Ge,...e,className:(0,u.A)("alert alert--success",e.className),children:e.children})}function $e(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const We={icon:(0,o.jsx)($e,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function Ye(e){return(0,o.jsx)(Re,{...We,...e,className:(0,u.A)("alert alert--info",e.className),children:e.children})}function Ke(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const Qe={icon:(0,o.jsx)(Ke,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Ze(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Je={icon:(0,o.jsx)(Ze,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Xe={icon:(0,o.jsx)(Ke,{}),title:(0,o.jsx)(h.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const et={...{note:Fe,tip:qe,info:Ye,warning:function(e){return(0,o.jsx)(Re,{...Qe,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(Re,{...Je,...e,className:(0,u.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(Fe,{title:"secondary",...e}),important:e=>(0,o.jsx)(Ye,{title:"important",...e}),success:e=>(0,o.jsx)(qe,{title:"success",...e}),caution:function(e){return(0,o.jsx)(Re,{...Xe,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})}}};function tt(e){const t=He(e),n=(s=t.type,et[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),et.info));var s;return(0,o.jsx)(n,{...t})}const nt={Head:he.A,details:_e,Details:_e,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,o.jsx)(xe,{...e}):(0,o.jsx)(fe.A,{...e})},a:function(e){return(0,o.jsx)(g.A,{...e})},pre:function(e){return(0,o.jsx)(o.Fragment,{children:e.children})},ul:function(e){return(0,o.jsx)("ul",{...e,className:ke(e.className)})},li:function(e){return(0,pe.A)().collectAnchor(e.id),(0,o.jsx)("li",{...e})},img:function(e){return(0,o.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,Me))});var t},h1:e=>(0,o.jsx)(Te,{as:"h1",...e}),h2:e=>(0,o.jsx)(Te,{as:"h2",...e}),h3:e=>(0,o.jsx)(Te,{as:"h3",...e}),h4:e=>(0,o.jsx)(Te,{as:"h4",...e}),h5:e=>(0,o.jsx)(Te,{as:"h5",...e}),h6:e=>(0,o.jsx)(Te,{as:"h6",...e}),admonition:tt,mermaid:()=>null};function st(e){let{children:t}=e;return(0,o.jsx)(me.x,{components:nt,children:t})}function it(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(b.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(ue.A,{as:"h1",children:n})}),(0,o.jsx)(st,{children:t})]})}var at=n(1415),ot=n(9875),rt=n(3455);function lt(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ct={breadcrumbHomeIcon:"breadcrumbHomeIcon_VDQe"};function dt(){const e=(0,rt.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(g.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(lt,{className:ct.breadcrumbHomeIcon})})})}const ut={breadcrumbsContainer:"breadcrumbsContainer_vcS6"};function mt(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,o.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,o.jsx)(g.A,{className:i,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:i,children:t})}function ht(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,o.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ft(){const e=(0,at.OF)(),t=(0,ot.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(b.G.docs.docBreadcrumbs,ut.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(dt,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(ht,{active:s,index:n,addMicrodata:!!i,children:(0,o.jsx)(mt,{href:i,isLast:s,children:t.label})},n)}))]})}):null}function xt(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function pt(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function vt(){return(0,o.jsx)(he.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function gt(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function jt(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function bt(e){let{className:t}=e;return(0,o.jsx)(tt,{type:"caution",title:(0,o.jsx)(gt,{}),className:(0,u.A)(t,b.G.common.draftBanner),children:(0,o.jsx)(jt,{})})}function At(e){let{className:t}=e;return(0,o.jsx)(tt,{type:"caution",title:(0,o.jsx)(xt,{}),className:(0,u.A)(t,b.G.common.unlistedBanner),children:(0,o.jsx)(pt,{})})}function Nt(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(vt,{}),(0,o.jsx)(At,{...e})]})}function yt(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(Nt,{}),s.draft&&(0,o.jsx)(bt,{})]})}const Ct={docItemContainer:"docItemContainer_kIyO",docItemCol:"docItemCol_iiI5"};function Lt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,o.jsx)(ae,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(de,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&Ct.docItemCol),children:[(0,o.jsx)(yt,{metadata:s}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:Ct.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ft,{}),(0,o.jsx)(w,{}),n.mobile,(0,o.jsx)(it,{children:t}),(0,o.jsx)(F,{})]}),(0,o.jsx)(p,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function _t(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(l,{content:e.content,children:(0,o.jsxs)(i.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(Lt,{children:(0,o.jsx)(n,{})})]})})}},1544:(e,t,n)=>{n.d(t,{N:()=>v,u:()=>c});var s=n(1855),i=n(1499),a=n(4695),o=n(4763),r=n(3159);const l="ease-in-out";function c(e){let{initialState:t}=e;const[n,i]=(0,s.useState)(t??!1),a=(0,s.useCallback)((()=>{i((e=>!e))}),[]);return{collapsed:n,setCollapsed:i,toggleCollapsed:a}}const d={display:"none",overflow:"hidden",height:"0px"},u={display:"block",overflow:"visible",height:"auto"};function m(e,t){const n=t?d:u;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function h(e){let{collapsibleRef:t,collapsed:n,animation:i}=e;const a=(0,s.useRef)(!1);(0,s.useEffect)((()=>{const e=t.current;function s(){const t=e.scrollHeight,n=i?.duration??function(e){if((0,o.O)())return 1;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(t);return{transition:`height ${n}ms ${i?.easing??l}`,height:`${t}px`}}function r(){const t=s();e.style.transition=t.transition,e.style.height=t.height}if(!a.current)return m(e,n),void(a.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(r(),requestAnimationFrame((()=>{e.style.height=d.height,e.style.overflow=d.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{r()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,i])}function f(e){if(!i.A.canUseDOM)return e?d:u}function x(e){let{as:t="div",collapsed:n,children:i,animation:a,onCollapseTransitionEnd:o,className:l,disableSSRStyle:c}=e;const d=(0,s.useRef)(null);return h({collapsibleRef:d,collapsed:n,animation:a}),(0,r.jsx)(t,{ref:d,style:c?void 0:f(n),onTransitionEnd:e=>{"height"===e.propertyName&&(m(d.current,n),o?.(n))},className:l,children:i})}function p(e){let{collapsed:t,...n}=e;const[i,o]=(0,s.useState)(!t),[l,c]=(0,s.useState)(t);return(0,a.A)((()=>{t||o(!0)}),[t]),(0,a.A)((()=>{i&&c(t)}),[i,t]),i?(0,r.jsx)(x,{...n,collapsed:l}):null}function v(e){let{lazy:t,...n}=e;const s=t?p:x;return(0,r.jsx)(s,{...n})}},4763:(e,t,n)=>{function s(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}n.d(t,{O:()=>s})},9875:(e,t,n)=>{n.d(t,{Dt:()=>r,ys:()=>o});var s=n(1855),i=n(8668),a=n(1500);function o(e,t){const n=e=>(!e||e.endsWith("/")?e:`${e}/`)?.toLowerCase();return n(e)===n(t)}function r(){const{baseUrl:e}=(0,a.A)().siteConfig;return(0,s.useMemo)((()=>function(e){let{baseUrl:t,routes:n}=e;function s(e){return e.path===t&&!0===e.exact}function i(e){return e.path===t&&!e.exact}return function e(t){if(0===t.length)return;return t.find(s)||e(t.filter(i).flatMap((e=>e.routes??[])))}(n)}({routes:i.A,baseUrl:e})),[e])}}}]);