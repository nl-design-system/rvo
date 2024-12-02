"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([["9914"],{8323:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7458);a(2983);var i=a(7848),r=a(3242),o=a(9961);function l(e){let{className:t}=e;return(0,n.jsx)("main",{className:(0,i.Z)("container margin-vert--xl",t),children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,n.jsx)(o.Z,{as:"h1",className:"hero__title",children:(0,n.jsx)(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,n.jsx)("p",{children:(0,n.jsx)(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,n.jsx)("p",{children:(0,n.jsx)(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},3111:function(e,t,a){a.r(t),a.d(t,{default:()=>eb});var n=a("7458"),i=a("9030"),r=a("7576"),o=a("8398"),l=a("7738"),s=a("2983"),d=a("7848"),c=a("3242"),u=a("2136"),m=a("6598");let b={backToTopButton:"backToTopButton_JwQ4",backToTopButtonShow:"backToTopButtonShow_JhlR"};function h(){let{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e,[a,n]=(0,s.useState)(!1),i=(0,s.useRef)(!1),{startScroll:r,cancelScroll:o}=(0,u.Ct)();return(0,u.RF)((e,a)=>{let{scrollY:r}=e,l=a?.scrollY;if(!!l)i.current?i.current=!1:r>=l?(o(),n(!1)):r<t?n(!1):r+window.innerHeight<document.documentElement.scrollHeight&&n(!0)}),(0,m.S)(e=>{e.location.hash&&(i.current=!0,n(!1))}),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return(0,n.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,d.Z)("clean-btn",l.k.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}let p={docMainContainer:"docMainContainer_hjYf",row:"row_aSu7",docMainContainerEnhanced:"docMainContainerEnhanced_of6x",docItemWrapperEnhanced:"docItemWrapperEnhanced_s6pk"};function x(e){let{hiddenSidebarContainer:t,children:a}=e,i=(0,r.V)();return(0,n.jsx)("main",{className:(0,d.Z)(p.docMainContainer,(t||!i)&&p.docMainContainerEnhanced),children:(0,n.jsx)("div",{className:(0,d.Z)("container padding-bottom--lg",p.docItemWrapper,t&&p.docItemWrapperEnhanced),children:a})})}var f=a("3729"),g=a("7612");function j(e){return(0,n.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,n.jsxs)("g",{fill:"#7a7a7a",children:[(0,n.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,n.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}let _="expandButton_v8ux",v="expandButtonIcon_oZgL";function k(e){let{toggleSidebar:t}=e;return(0,n.jsx)("div",{className:_,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,n.jsx)(j,{className:v})})}var S=a("6089"),C=a("6520");let I="collapseSidebarButton_mO31",N="collapseSidebarButtonIcon_o3Ii";function y(e){let{onClick:t}=e;return(0,n.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",I),onClick:t,children:(0,n.jsx)(j,{className:N})})}var Z=a("9574"),T=a("2725");let w=Symbol("EmptyContext"),L=s.createContext(w);function A(e){let{children:t}=e,[a,i]=(0,s.useState)(null),r=(0,s.useMemo)(()=>({expandedItem:a,setExpandedItem:i}),[a]);return(0,n.jsx)(L.Provider,{value:r,children:t})}var H=a("8695"),B=a("9813"),E=a("7129"),M=a("655");function P(e){let{collapsed:t,categoryLabel:a,onClick:i}=e;return(0,n.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:i})}function F(e){let{item:t,onItemClick:a,activePath:r,level:o,index:c}=e,{items:u,label:m,collapsible:b,className:h,href:p}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,C.L)(),f=function(e){let t=(0,E.Z)();return(0,s.useMemo)(()=>{if(e.href&&!e.linkUnlisted)return e.href;if(!t&&!!e.collapsible)return(0,i.LM)(e)},[e,t])}(t),g=(0,i._F)(t,r),j=(0,B.Mg)(p,r),{collapsed:_,setCollapsed:v}=(0,H.u)({initialState:()=>!!b&&!g&&t.collapsed}),{expandedItem:k,setExpandedItem:S}=function(){let e=(0,s.useContext)(L);if(e===w)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),I=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!_;S(e?null:c),v(e)};return!function(e){let{isActive:t,collapsed:a,updateCollapsed:n}=e,i=(0,T.D9)(t);(0,s.useEffect)(()=>{t&&!i&&a&&n(!1)},[t,i,a,n])}({isActive:g,collapsed:_,updateCollapsed:I}),(0,s.useEffect)(()=>{b&&null!==k&&k!==c&&x&&v(!0)},[b,k,c,v,x]),(0,n.jsxs)("li",{className:(0,d.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":_},h),children:[(0,n.jsxs)("div",{className:(0,d.Z)(b&&"menu__list-item-collapsible",{"menu__list-item-collapsible--active":j}),children:[(0,n.jsx)(M.Heading,{className:(0,d.Z)({"menu__link--sublist":b,"menu__link--sublist-caret":!p&&b,"menu__link--active":g}),type:"h3",onClick:b?e=>{a?.(t),p?I(!1):(e.preventDefault(),I())}:()=>{a?.(t)},"aria-current":j?"page":void 0,role:b&&!p?"button":void 0,"aria-expanded":b&&!p?!_:void 0,link:b?void 0:f,noMargins:!0,children:m}),p&&b&&(0,n.jsx)(P,{collapsed:_,categoryLabel:m,onClick:e=>{e.preventDefault(),I()}})]}),(0,n.jsx)(H.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_,children:(0,n.jsx)(Y,{items:u,tabIndex:_?-1:0,onItemClick:a,activePath:r,level:o+1})})]})}var R=a("6250"),W=a("6069");function D(e){let{item:t,onItemClick:a,activePath:r,level:o,...s}=e,{href:c,label:u,className:m}=t,b=(0,i._F)(t,r),h=(0,R.Z)(c);return(0,n.jsx)("li",{className:(0,d.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),children:(0,n.jsx)(M.Link,{href:(0,W.ZP)(c),noUnderline:!b,color:"grijs-700",weight:b?"bold":"normal","aria-current":b?"page":void 0,...h&&{onClick:a?()=>a(t):void 0},...s,showIcon:h?"no":"after",icon:h?void 0:"externe-link",children:u})},u)}let V={menuHtmlItem:"menuHtmlItem_stQ3"};function z(e){let{item:t,level:a,index:i}=e,{value:r,defaultStyle:o,className:s}=t;return(0,n.jsx)("li",{className:(0,d.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(a),o&&[V.menuHtmlItem,"menu__list-item"],s),dangerouslySetInnerHTML:{__html:r}},i)}function U(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,n.jsx)(F,{item:t,...a});case"html":return(0,n.jsx)(z,{item:t,...a});default:return(0,n.jsx)(D,{item:t,...a})}}let Y=(0,s.memo)(function(e){let{items:t,...a}=e,r=(0,i.f)(t,a.activePath);return(0,n.jsx)(A,{children:r.map((e,t)=>(0,n.jsx)(U,{item:e,index:t,...a},t))})}),J={menu:"menu_Y1UP",menuWithAnnouncementBar:"menuWithAnnouncementBar_fPny"};function Q(e){let{path:t,sidebar:a,className:i}=e,r=function(){let{isActive:e}=(0,Z.n)(),[t,a]=(0,s.useState)(e);return(0,u.RF)(t=>{let{scrollY:n}=t;e&&a(0===n)},[e]),e&&t}();return(0,n.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,d.Z)("menu thin-scrollbar",J.menu,r&&J.menuWithAnnouncementBar,i),children:(0,n.jsx)("ul",{className:(0,d.Z)(l.k.docs.docSidebarMenu,"menu__list","rvo-layout-column","rvo-layout-gap--sm"),children:(0,n.jsx)(Y,{items:a,activePath:t,level:1})})})}var G=a("9244"),K=a("3519"),O=a("9718");function q(e){let{logo:t,alt:a,imageClassName:i}=e,r={light:(0,W.ZP)(t.src),dark:(0,W.ZP)(t.srcDark||t.src)},o=(0,n.jsx)(O.Z,{className:t.className,sources:r,height:t.height,width:t.width,alt:a,style:t.style});return i?(0,n.jsx)("div",{className:i,children:o}):o}function X(e){let{siteConfig:{title:t}}=(0,K.Z)(),{navbar:{title:a,logo:i}}=(0,C.L)(),{imageClassName:r,titleClassName:o,...l}=e,s=(0,W.ZP)(i?.href||"/"),d=i?.alt??(a?"":t);return(0,n.jsxs)(G.Z,{to:s,...l,...i?.target&&{target:i.target},children:[i&&(0,n.jsx)(q,{logo:i,alt:d,imageClassName:r}),null!=a&&(0,n.jsx)("b",{className:o,children:a})]})}let $={sidebar:"sidebar_mhZE",sidebarWithHideableNavbar:"sidebarWithHideableNavbar__6UL",sidebarHidden:"sidebarHidden__LRd",sidebarLogo:"sidebarLogo_F_0z"},ee=s.memo(function(e){let{path:t,sidebar:a,onCollapse:i,isHidden:r}=e,{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:l}}}=(0,C.L)();return(0,n.jsxs)("div",{className:(0,d.Z)($.sidebar,o&&$.sidebarWithHideableNavbar,r&&$.sidebarHidden,"rvo-sidebar-layout__sidebar rvo-max-width-layout--md rvo-sidebar-layout__sidebar--bg"),children:[o&&(0,n.jsx)(X,{tabIndex:-1,className:$.sidebarLogo}),(0,n.jsx)(Q,{path:t,sidebar:a}),l&&(0,n.jsx)(y,{onClick:i})]})});var et=a("9254"),ea=a("262");let en=e=>{let{sidebar:t,path:a}=e,i=(0,ea.e)();return(0,n.jsx)("ul",{className:(0,d.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,n.jsx)(Y,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&i.toggle(),"link"===e.type&&i.toggle()},level:1})})},ei=s.memo(function(e){return(0,n.jsx)(et.Zo,{component:en,props:e})});function er(e){let t=(0,S.i)();return(0,n.jsxs)(n.Fragment,{children:[("desktop"===t||"ssr"===t)&&(0,n.jsx)(ee,{...e}),"mobile"===t&&(0,n.jsx)(ei,{...e})]})}let eo={docSidebarContainer:"docSidebarContainer_RSuS",docSidebarContainerHidden:"docSidebarContainerHidden_kI50",sidebarViewport:"sidebarViewport_pYEE"};function el(e){let{children:t}=e,a=(0,r.V)();return(0,n.jsx)(s.Fragment,{children:t},a?.name??"noSidebar")}function es(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:i}=e,{pathname:r}=(0,f.TH)(),[o,c]=(0,s.useState)(!1),u=(0,s.useCallback)(()=>{o&&c(!1),!o&&(0,g.n)()&&c(!0),i(e=>!e)},[i,o]);return(0,n.jsx)("aside",{className:(0,d.Z)(l.k.docs.docSidebarContainer,eo.docSidebarContainer,a&&eo.docSidebarContainerHidden),onTransitionEnd:e=>{if(!!e.currentTarget.classList.contains(eo.docSidebarContainer))a&&c(!0)},children:(0,n.jsx)(el,{children:(0,n.jsxs)("div",{className:(0,d.Z)(eo.sidebarViewport,o&&eo.sidebarViewportHidden),children:[(0,n.jsx)(er,{sidebar:t,path:r,onCollapse:u,isHidden:o}),o&&(0,n.jsx)(k,{toggleSidebar:u})]})})})}let ed="docPage_F0g8",ec="docsWrapper_bSxm";function eu(e){let{children:t}=e,a=(0,r.V)(),[i,o]=(0,s.useState)(!1);return(0,n.jsxs)("div",{className:ec,children:[(0,n.jsx)(h,{}),(0,n.jsxs)("div",{className:(0,d.Z)(ed,"rvo-max-width-layout","rvo-max-width-layout--lg"),children:[a&&(0,n.jsx)(es,{sidebar:a.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),(0,n.jsx)(x,{hiddenSidebarContainer:i,children:t})]})]})}var em=a("8323");function eb(e){let t=(0,i.SN)(e);if(!t)return(0,n.jsx)(em.Z,{});let{docElement:a,sidebarName:s,sidebarItems:c}=t;return(0,n.jsx)(o.FG,{className:(0,d.Z)(l.k.page.docsDocPage),children:(0,n.jsx)(r.b,{name:s,items:c,children:(0,n.jsx)(eu,{children:a})})})}}}]);