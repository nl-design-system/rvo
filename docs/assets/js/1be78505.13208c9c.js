"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[9514,1317],{9121:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var a=n(9901),s=n(4517),i=n(7640),o=n(7455),l=n(5783),r=n(9655),c=n(9423),d=n(2160),u=n(3839),h=n(1722),m=n(8768);const p="backToTopButton_AxB5",b="backToTopButtonShow_QyNR";var x=n(1250);function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,s]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,h.Ct)();return(0,h.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(i.current?i.current=!1:a>=o?(l(),s(!1)):a<t?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,m.S)((e=>{e.location.hash&&(i.current=!0,s(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,x.jsx)("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,s.Z)("clean-btn",o.k.common.backToTopButton,p,e&&b),type:"button",onClick:t})}const g={docMainContainer:"docMainContainer_yslY",docMainContainerEnhanced:"docMainContainerEnhanced_wnNX",docItemWrapperEnhanced:"docItemWrapperEnhanced_XfvE"};function v(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,d.V)();return(0,x.jsx)("main",{className:(0,s.Z)(g.docMainContainer,(t||!a)&&g.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,s.Z)("container padding-top--md padding-bottom--lg",g.docItemWrapper,t&&g.docItemWrapperEnhanced),children:n})})}var j=n(6172);function _(e){return(0,x.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const C="expandButton_TUTM",k="expandButtonIcon_yV1_";function y(e){let{toggleSidebar:t}=e;return(0,x.jsx)("div",{className:C,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,x.jsx)(_,{className:k})})}var N=n(3861),S=n(1901);const I="collapseSidebarButton_MELu",w="collapseSidebarButtonIcon_o5ED";function Z(e){let{onClick:t}=e;return(0,x.jsx)("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,s.Z)("button button--secondary button--outline",I),onClick:t,children:(0,x.jsx)(_,{className:w})})}var T=n(3983),L=n(7533);const E=Symbol("EmptyContext"),M=a.createContext(E);function A(e){let{children:t}=e;const[n,s]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:s})),[n]);return(0,x.jsx)(M.Provider,{value:i,children:t})}var F=n(6348),P=n(9300),B=n(9814),R=n(2625);function H(e){let{categoryLabel:t,onClick:n}=e;return(0,x.jsx)("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(e){let{item:t,onItemClick:n,activePath:i,level:l,index:c,...d}=e;const{items:u,label:h,collapsible:m,className:p,href:b}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,S.L)(),g=function(e){const t=(0,R.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0),[e,t])}(t),v=(0,r._F)(t,i),j=(0,P.Mg)(b,i),{collapsed:_,setCollapsed:C}=(0,F.u)({initialState:()=>!!m&&(!v&&t.collapsed)}),{expandedItem:k,setExpandedItem:y}=function(){const e=(0,a.useContext)(M);if(e===E)throw new L.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=function(e){void 0===e&&(e=!_),y(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:s}=e;const i=(0,L.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&s(!1)}),[t,i,n,s])}({isActive:v,collapsed:_,updateCollapsed:N}),(0,a.useEffect)((()=>{m&&null!=k&&k!==c&&f&&C(!0)}),[m,k,c,C,f]),(0,x.jsxs)("li",{className:(0,s.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":_},p),children:[(0,x.jsxs)("div",{className:(0,s.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":j}),children:[(0,x.jsx)(B.Z,{className:(0,s.Z)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!b&&m,"menu__link--active":v}),onClick:m?e=>{n?.(t),b?N(!1):(e.preventDefault(),N())}:()=>{n?.(t)},"aria-current":j?"page":void 0,"aria-expanded":m?!_:void 0,href:m?g??"#":g,...d,children:h}),b&&m&&(0,x.jsx)(H,{categoryLabel:h,onClick:e=>{e.preventDefault(),N()}})]}),(0,x.jsx)(F.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_,children:(0,x.jsx)(X,{items:u,tabIndex:_?-1:0,onItemClick:n,activePath:i,level:l+1})})]})}var W=n(9543),z=n(9668);const q="inactiveLink_z6al",V="activeLink_aVuL";function U(e){let{item:t,onItemClick:n,activePath:a,level:i}=e;const{href:l,label:c,className:d}=t,u=(0,r._F)(t,a),h=(0,W.Z)(l);return(0,x.jsx)("li",{className:(0,s.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",d),children:(0,x.jsx)(z.Link,{content:c,href:l,showIcon:!h,className:(0,s.Z)(u?V:q),icon:"external-link",...h&&{onClick:n?()=>n(t):void 0},active:u,"aria-current":u?"page":void 0})},c)}const Y="menuHtmlItem_MG_q";function $(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,x.jsx)("li",{className:(0,s.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),l&&[Y,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},a)}function G(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,x.jsx)(D,{item:t,...n});case"html":return(0,x.jsx)($,{item:t,...n});default:return(0,x.jsx)(U,{item:t,...n})}}function O(e){let{items:t,...n}=e;return(0,x.jsx)(A,{children:t.map(((e,t)=>(0,x.jsx)(G,{item:e,index:t,...n},t)))})}const X=(0,a.memo)(O),K="menu_Y1UP",Q="menuWithAnnouncementBar_fPny";function J(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,h.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,x.jsx)("nav",{className:(0,s.Z)("menu thin-scrollbar",K,l&&Q,i),style:{paddingInlineStart:"var(--rvo-topnav-link-padding-inline-start)"},children:(0,x.jsx)("ul",{className:(0,s.Z)(o.k.docs.docSidebarMenu,"menu__list","rvo-layout-column","rvo-layout-gap--md"),children:(0,x.jsx)(X,{items:n,activePath:t,level:1})})})}var ee=n(1582),te=n(5529),ne=n(1623);function ae(e){let{logo:t,alt:n,imageClassName:a}=e;const s={light:(0,ee.Z)(t.src),dark:(0,ee.Z)(t.srcDark||t.src)},i=(0,x.jsx)(ne.Z,{className:t.className,sources:s,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,x.jsx)("div",{className:a,children:i}):i}function se(e){const{siteConfig:{title:t}}=(0,te.Z)(),{navbar:{title:n,logo:a}}=(0,S.L)(),{imageClassName:s,titleClassName:i,...o}=e,l=(0,ee.Z)(a?.href||"/"),r=n?"":t,c=a?.alt??r;return(0,x.jsxs)(B.Z,{to:l,...o,...a?.target&&{target:a.target},children:[a&&(0,x.jsx)(ae,{logo:a,alt:c,imageClassName:s}),null!=n&&(0,x.jsx)("b",{className:i,children:n})]})}const ie="sidebar_mhZE",oe="sidebarWithHideableNavbar__6UL",le="sidebarHidden__LRd",re="sidebarLogo_F_0z";function ce(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:l}}}=(0,S.L)();return(0,x.jsxs)("div",{className:(0,s.Z)(ie,o&&oe,i&&le),children:[o&&(0,x.jsx)(se,{tabIndex:-1,className:re}),(0,x.jsx)(J,{path:t,sidebar:n}),l&&(0,x.jsx)(Z,{onClick:a})]})}const de=a.memo(ce);var ue=n(7598),he=n(7470);const me=e=>{let{sidebar:t,path:n}=e;const a=(0,he.e)();return(0,x.jsx)("ul",{className:(0,s.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(X,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function pe(e){return(0,x.jsx)(ue.Zo,{component:me,props:e})}const be=a.memo(pe);function xe(e){const t=(0,N.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,x.jsxs)(x.Fragment,{children:[n&&(0,x.jsx)(de,{...e}),a&&(0,x.jsx)(be,{...e})]})}const fe="docSidebarContainer_rpaz",ge="docSidebarContainerHidden_wC1p";function ve(e){let{children:t}=e;const n=(0,d.V)();return(0,x.jsx)(a.Fragment,{children:t},n&&n.name||"noSidebar")}function je(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,j.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),i((e=>!e))}),[i,r]);return(0,x.jsxs)("aside",{className:(0,s.Z)(o.k.docs.docSidebarContainer,fe,n&&ge),onTransitionEnd:e=>{e.currentTarget.classList.contains(fe)&&n&&c(!0)},style:{paddingTop:"2.2rem",border:"none",width:"200px"},children:[(0,x.jsx)(ve,{children:(0,x.jsx)(xe,{sidebar:t,path:l,onCollapse:d,isHidden:r})}),r&&(0,x.jsx)(y,{toggleSidebar:d})]})}var _e=n(1940);const Ce="docPage_qMb8",ke="docsWrapper_W2AM";function ye(e){let{children:t}=e;const n=(0,d.V)(),[i,o]=(0,a.useState)(!1);return(0,x.jsxs)(_e.Z,{wrapperClassName:ke,children:[(0,x.jsx)(f,{}),(0,x.jsxs)("div",{className:(0,s.Z)(Ce,"rvo-max-width-layout","rvo-max-width-layout--lg"),children:[n&&(0,x.jsx)(je,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),(0,x.jsx)(v,{hiddenSidebarContainer:i,children:t})]})]})}var Ne=n(1317),Se=n(6632);function Ie(e){const{versionMetadata:t}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Se.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),(0,x.jsx)(i.d,{children:t.noIndex&&(0,x.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}function we(e){const{versionMetadata:t}=e,n=(0,r.hI)(e);if(!n)return(0,x.jsx)(Ne.default,{});const{docElement:a,sidebarName:l,sidebarItems:u}=n;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ie,{...e}),(0,x.jsx)(i.FG,{className:(0,s.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className),children:(0,x.jsx)(c.q,{version:t,children:(0,x.jsx)(d.b,{name:l,items:u,children:(0,x.jsx)(ye,{children:a})})})})]})}},1317:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(9901);var a=n(3839),s=n(7640),i=n(1940),o=n(1250);function l(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,o.jsx)(i.Z,{children:(0,o.jsx)("main",{className:"container margin-vert--xl",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)("h1",{className:"hero__title",children:(0,o.jsx)(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}},6348:(e,t,n)=>{n.d(t,{u:()=>o,z:()=>p});var a=n(9901),s=n(3802),i=n(1250);function o(e){let{initialState:t}=e;const[n,s]=(0,a.useState)(t??!1),i=(0,a.useCallback)((()=>{s((e=>!e))}),[]);return{collapsed:n,setCollapsed:s,toggleCollapsed:i}}const l={display:"none",overflow:"hidden",height:"0px"},r={display:"block",overflow:"visible",height:"auto"};function c(e,t){const n=t?l:r;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function d(e){let{collapsibleRef:t,collapsed:n,animation:s}=e;const i=(0,a.useRef)(!1);(0,a.useEffect)((()=>{const e=t.current;function a(){const t=e.scrollHeight,n=s?.duration??function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(t);return{transition:`height ${n}ms ${s?.easing??"ease-in-out"}`,height:`${t}px`}}function o(){const t=a();e.style.transition=t.transition,e.style.height=t.height}if(!i.current)return c(e,n),void(i.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(o(),requestAnimationFrame((()=>{e.style.height=l.height,e.style.overflow=l.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{o()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,s])}function u(e){if(!s.Z.canUseDOM)return e?l:r}function h(e){let{as:t="div",collapsed:n,children:s,animation:o,onCollapseTransitionEnd:l,className:r,disableSSRStyle:h}=e;const m=(0,a.useRef)(null);return d({collapsibleRef:m,collapsed:n,animation:o}),(0,i.jsx)(t,{ref:m,style:h?void 0:u(n),onTransitionEnd:e=>{"height"===e.propertyName&&(c(m.current,n),l?.(n))},className:r,children:s})}function m(e){let{collapsed:t,...n}=e;const[s,o]=(0,a.useState)(!t),[l,r]=(0,a.useState)(t);return(0,a.useLayoutEffect)((()=>{t||o(!0)}),[t]),(0,a.useLayoutEffect)((()=>{s&&r(t)}),[s,t]),s?(0,i.jsx)(h,{...n,collapsed:l}):null}function p(e){let{lazy:t,...n}=e;const a=t?m:h;return(0,i.jsx)(a,{...n})}},9423:(e,t,n)=>{n.d(t,{E:()=>r,q:()=>l});var a=n(9901),s=n(7533),i=n(1250);const o=a.createContext(null);function l(e){let{children:t,version:n}=e;return(0,i.jsx)(o.Provider,{value:n,children:t})}function r(){const e=(0,a.useContext)(o);if(null===e)throw new s.i6("DocsVersionProvider");return e}}}]);