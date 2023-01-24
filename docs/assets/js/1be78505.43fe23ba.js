/*! For license information please see 1be78505.43fe23ba.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[9514,1317],{3121:(e,t,n)=>{n.d(t,{rU:()=>l,ZP:()=>r});var o=n(4517),a=(n(9901),n(3722));const i={content:"Dit is een link",url:"#",showIcon:"no",hover:!1,icon:"home",iconSize:"md",iconColor:"hemelblauw",active:!1,focus:!1,noUnderline:!1};var s=n(1250);a.YM,a.Ax;const l=e=>{let{content:t=i.content,url:n=i.url,showIcon:l=i.showIcon,icon:r=i.icon,iconSize:c=i.iconSize,iconColor:d=i.iconColor,hover:u=i.hover,active:h=i.active,focus:m=i.focus,noUnderline:p=i.noUnderline,classNames:b=[]}=e;const f=[];"before"===l&&f.push("rvo-link__icon--before"),"after"===l&&f.push("rvo-link__icon--after");const x=(0,a.JO)({icon:r,size:c,color:d,classNames:f});return(0,s.jsxs)("a",{href:n,className:(0,o.Z)("rvo-link",b,{"rvo-link--active":h,"rvo-link--hover":u,"rvo-link--focus":m},"no"!==l&&["rvo-layout-row","rvo-layout-gap--sm"],p&&"rvo-link--no-underline"),children:["before"===l&&x,t,"after"===l&&x]})},r=l},9660:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Se});var o=n(9901),a=n(4517),i=n(7640),s=n(7455),l=n(5783),r=n(9655),c=n(9423),d=n(2160),u=n(3839),h=n(1722),m=n(8768);const p="backToTopButton_AxB5",b="backToTopButtonShow_QyNR";var f=n(1250);function x(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,a]=(0,o.useState)(!1),i=(0,o.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,h.Ct)();return(0,h.RF)(((e,n)=>{let{scrollY:o}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:o>=s?(l(),a(!1)):o<t?a(!1):o+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,m.S)((e=>{e.location.hash&&(i.current=!0,a(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,f.jsx)("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.Z)("clean-btn",s.k.common.backToTopButton,p,e&&b),type:"button",onClick:t})}const v={docMainContainer:"docMainContainer_yslY",docMainContainerEnhanced:"docMainContainerEnhanced_wnNX",docItemWrapperEnhanced:"docItemWrapperEnhanced_XfvE"};function g(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return(0,f.jsx)("main",{className:(0,a.Z)(v.docMainContainer,(t||!o)&&v.docMainContainerEnhanced),children:(0,f.jsx)("div",{className:(0,a.Z)("container padding-top--md padding-bottom--lg",v.docItemWrapper,t&&v.docItemWrapperEnhanced),children:n})})}var j=n(6172);function k(e){return(0,f.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,f.jsxs)("g",{fill:"#7a7a7a",children:[(0,f.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,f.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const C="expandButton_TUTM",_="expandButtonIcon_yV1_";function y(e){let{toggleSidebar:t}=e;return(0,f.jsx)("div",{className:C,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,f.jsx)(k,{className:_})})}var N=n(3861),S=n(1901),I=n(9814),w=n(1582),Z=n(5529),T=n(1623);function E(e){let{logo:t,alt:n,imageClassName:o}=e;const a={light:(0,w.Z)(t.src),dark:(0,w.Z)(t.srcDark||t.src)},i=(0,f.jsx)(T.Z,{className:t.className,sources:a,height:t.height,width:t.width,alt:n,style:t.style});return o?(0,f.jsx)("div",{className:o,children:i}):i}function L(e){const{siteConfig:{title:t}}=(0,Z.Z)(),{navbar:{title:n,logo:o}}=(0,S.L)(),{imageClassName:a,titleClassName:i,...s}=e,l=(0,w.Z)(o?.href||"/"),r=n?"":t,c=o?.alt??r;return(0,f.jsxs)(I.Z,{to:l,...s,...o?.target&&{target:o.target},children:[o&&(0,f.jsx)(E,{logo:o,alt:c,imageClassName:a}),null!=n&&(0,f.jsx)("b",{className:i,children:n})]})}const M="collapseSidebarButton_MELu",A="collapseSidebarButtonIcon_o5ED";function F(e){let{onClick:t}=e;return(0,f.jsx)("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.Z)("button button--secondary button--outline",M),onClick:t,children:(0,f.jsx)(k,{className:A})})}var P=n(3983),B=n(7533);const H=Symbol("EmptyContext"),R=o.createContext(H);function z(e){let{children:t}=e;const[n,a]=(0,o.useState)(null),i=(0,o.useMemo)((()=>({expandedItem:n,setExpandedItem:a})),[n]);return(0,f.jsx)(R.Provider,{value:i,children:t})}var D=n(6348),W=n(9300),U=n(2625);function q(e){let{categoryLabel:t,onClick:n}=e;return(0,f.jsx)("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function Y(e){let{item:t,onItemClick:n,activePath:i,level:l,index:c,...d}=e;const{items:u,label:h,collapsible:m,className:p,href:b}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,S.L)(),v=function(e){const t=(0,U.Z)();return(0,o.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0),[e,t])}(t),g=(0,r._F)(t,i),j=(0,W.Mg)(b,i),{collapsed:k,setCollapsed:C}=(0,D.u)({initialState:()=>!!m&&(!g&&t.collapsed)}),{expandedItem:_,setExpandedItem:y}=function(){const e=(0,o.useContext)(R);if(e===H)throw new B.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=function(e){void 0===e&&(e=!k),y(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e;const i=(0,B.D9)(t);(0,o.useEffect)((()=>{t&&!i&&n&&a(!1)}),[t,i,n,a])}({isActive:g,collapsed:k,updateCollapsed:N}),(0,o.useEffect)((()=>{m&&null!=_&&_!==c&&x&&C(!0)}),[m,_,c,C,x]),(0,f.jsxs)("li",{className:(0,a.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":k},p),children:[(0,f.jsxs)("div",{className:(0,a.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":j}),children:[(0,f.jsx)(I.Z,{className:(0,a.Z)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!b&&m,"menu__link--active":g}),onClick:m?e=>{n?.(t),b?N(!1):(e.preventDefault(),N())}:()=>{n?.(t)},"aria-current":j?"page":void 0,"aria-expanded":m?!k:void 0,href:m?v??"#":v,...d,children:h}),b&&m&&(0,f.jsx)(q,{categoryLabel:h,onClick:e=>{e.preventDefault(),N()}})]}),(0,f.jsx)(D.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,f.jsx)(Q,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:i,level:l+1})})]})}var V=n(9543),O=n(3121);function $(e){let{item:t,onItemClick:n,activePath:o,level:i}=e;const{href:l,label:c,className:d}=t,u=(0,r._F)(t,o),h=(0,V.Z)(l);return(0,f.jsx)("li",{className:(0,a.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",d),children:(0,f.jsx)(O.ZP,{content:c,url:l,showIcon:!h,icon:"external-link",...h&&{onClick:n?()=>n(t):void 0},active:u,"aria-current":u?"page":void 0,noUnderline:!0})},c)}const G="menuHtmlItem_MG_q";function X(e){let{item:t,level:n,index:o}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,f.jsx)("li",{className:(0,a.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[G,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},o)}function J(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,f.jsx)(Y,{item:t,...n});case"html":return(0,f.jsx)(X,{item:t,...n});default:return(0,f.jsx)($,{item:t,...n})}}function K(e){let{items:t,...n}=e;return(0,f.jsx)(z,{children:t.map(((e,t)=>(0,f.jsx)(J,{item:e,index:t,...n},t)))})}const Q=(0,o.memo)(K),ee="menu_Y1UP",te="menuWithAnnouncementBar_fPny";function ne(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,P.nT)(),[t,n]=(0,o.useState)(e);return(0,h.RF)((t=>{let{scrollY:o}=t;e&&n(0===o)}),[e]),e&&t}();return(0,f.jsx)("nav",{className:(0,a.Z)("menu thin-scrollbar",ee,l&&te,i),style:{paddingInlineStart:"var(--rvo-topnav-link-padding-inline-start)"},children:(0,f.jsx)("ul",{className:(0,a.Z)(s.k.docs.docSidebarMenu,"menu__list","rvo-layout-column","rvo-layout-gap--md"),children:(0,f.jsx)(Q,{items:n,activePath:t,level:1})})})}const oe="sidebar_vSuq",ae="sidebarWithHideableNavbar_YN02",ie="sidebarHidden_nfzp",se="sidebarLogo_gmiY";function le(e){let{path:t,sidebar:n,onCollapse:o,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,S.L)();return(0,f.jsxs)("div",{className:(0,a.Z)(oe,s&&ae,i&&ie),children:[s&&(0,f.jsx)(L,{tabIndex:-1,className:se}),(0,f.jsx)(ne,{path:t,sidebar:n}),l&&(0,f.jsx)(F,{onClick:o})]})}const re=o.memo(le);var ce=n(7598),de=n(7470);const ue=e=>{let{sidebar:t,path:n}=e;const o=(0,de.e)();return(0,f.jsx)("ul",{className:(0,a.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,f.jsx)(Q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1})})};function he(e){return(0,f.jsx)(ce.Zo,{component:ue,props:e})}const me=o.memo(he);function pe(e){const t=(0,N.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return(0,f.jsxs)(f.Fragment,{children:[n&&(0,f.jsx)(re,{...e}),o&&(0,f.jsx)(me,{...e})]})}const be="docSidebarContainer_rpaz",fe="docSidebarContainerHidden_wC1p";function xe(e){let{children:t}=e;const n=(0,d.V)();return(0,f.jsx)(o.Fragment,{children:t},n&&n.name||"noSidebar")}function ve(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,j.TH)(),[r,c]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{r&&c(!1),i((e=>!e))}),[i,r]);return(0,f.jsxs)("aside",{className:(0,a.Z)(s.k.docs.docSidebarContainer,be,n&&fe),onTransitionEnd:e=>{e.currentTarget.classList.contains(be)&&n&&c(!0)},style:{paddingTop:"2.2rem",border:"none",width:"200px"},children:[(0,f.jsx)(xe,{children:(0,f.jsx)(pe,{sidebar:t,path:l,onCollapse:d,isHidden:r})}),r&&(0,f.jsx)(y,{toggleSidebar:d})]})}var ge=n(1710);const je="docPage_qMb8",ke="docsWrapper_W2AM";function Ce(e){let{children:t}=e;const n=(0,d.V)(),[i,s]=(0,o.useState)(!1);return(0,f.jsxs)(ge.Z,{wrapperClassName:ke,children:[(0,f.jsx)(x,{}),(0,f.jsxs)("div",{className:(0,a.Z)(je,"rvo-max-width-layout","rvo-max-width-layout--lg"),children:[n&&(0,f.jsx)(ve,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:s}),(0,f.jsx)(g,{hiddenSidebarContainer:i,children:t})]})]})}var _e=n(1317),ye=n(6632);function Ne(e){const{versionMetadata:t}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(ye.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),(0,f.jsx)(i.d,{children:t.noIndex&&(0,f.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}function Se(e){const{versionMetadata:t}=e,n=(0,r.hI)(e);if(!n)return(0,f.jsx)(_e.default,{});const{docElement:o,sidebarName:l,sidebarItems:u}=n;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ne,{...e}),(0,f.jsx)(i.FG,{className:(0,a.Z)(s.k.wrapper.docsPages,s.k.page.docsDocPage,e.versionMetadata.className),children:(0,f.jsx)(c.q,{version:t,children:(0,f.jsx)(d.b,{name:l,items:u,children:(0,f.jsx)(Ce,{children:o})})})})]})}},1317:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(9901);var o=n(3839),a=n(7640),i=n(1710),s=n(1250);function l(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,s.jsx)(i.Z,{children:(0,s.jsx)("main",{className:"container margin-vert--xl",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)("h1",{className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}},6348:(e,t,n)=>{n.d(t,{u:()=>s,z:()=>p});var o=n(9901),a=n(3802),i=n(1250);function s(e){let{initialState:t}=e;const[n,a]=(0,o.useState)(t??!1),i=(0,o.useCallback)((()=>{a((e=>!e))}),[]);return{collapsed:n,setCollapsed:a,toggleCollapsed:i}}const l={display:"none",overflow:"hidden",height:"0px"},r={display:"block",overflow:"visible",height:"auto"};function c(e,t){const n=t?l:r;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function d(e){let{collapsibleRef:t,collapsed:n,animation:a}=e;const i=(0,o.useRef)(!1);(0,o.useEffect)((()=>{const e=t.current;function o(){const t=e.scrollHeight,n=a?.duration??function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(t);return{transition:`height ${n}ms ${a?.easing??"ease-in-out"}`,height:`${t}px`}}function s(){const t=o();e.style.transition=t.transition,e.style.height=t.height}if(!i.current)return c(e,n),void(i.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(s(),requestAnimationFrame((()=>{e.style.height=l.height,e.style.overflow=l.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{s()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,a])}function u(e){if(!a.Z.canUseDOM)return e?l:r}function h(e){let{as:t="div",collapsed:n,children:a,animation:s,onCollapseTransitionEnd:l,className:r,disableSSRStyle:h}=e;const m=(0,o.useRef)(null);return d({collapsibleRef:m,collapsed:n,animation:s}),(0,i.jsx)(t,{ref:m,style:h?void 0:u(n),onTransitionEnd:e=>{"height"===e.propertyName&&(c(m.current,n),l?.(n))},className:r,children:a})}function m(e){let{collapsed:t,...n}=e;const[a,s]=(0,o.useState)(!t),[l,r]=(0,o.useState)(t);return(0,o.useLayoutEffect)((()=>{t||s(!0)}),[t]),(0,o.useLayoutEffect)((()=>{a&&r(t)}),[a,t]),a?(0,i.jsx)(h,{...n,collapsed:l}):null}function p(e){let{lazy:t,...n}=e;const o=t?m:h;return(0,i.jsx)(o,{...n})}},9423:(e,t,n)=>{n.d(t,{E:()=>r,q:()=>l});var o=n(9901),a=n(7533),i=n(1250);const s=o.createContext(null);function l(e){let{children:t,version:n}=e;return(0,i.jsx)(s.Provider,{value:n,children:t})}function r(){const e=(0,o.useContext)(s);if(null===e)throw new a.i6("DocsVersionProvider");return e}}}]);