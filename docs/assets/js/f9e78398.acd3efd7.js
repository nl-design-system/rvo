"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[432],{7522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(9901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||o;return n?r.createElement(u,s(s({ref:t},d),{},{components:n})):r.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(2798),a=(n(9901),n(7522));const o={toc:[{value:"Libraries installeren met NPM",id:"libraries-installeren-met-npm",level:2},{value:"Libraries inladen via CDN",id:"libraries-inladen-via-cdn",level:2},{value:"RVO theme class toevoegen",id:"rvo-theme-class-toevoegen",level:2},{value:"CSS &#39;Components&#39; gebruiken",id:"css-components-gebruiken",level:2},{value:"Bijdragen",id:"bijdragen",level:2}]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aan-de-slag-met-rvo-design-system-roos"},"Aan de slag met RVO Design System (ROOS)"),(0,a.kt)("p",null,"Om te starten met het design system gebruik je een drietal libraries.\nDeze zijn gepubliceerd op NPM onder de organisatie 'nl-rvo'."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Design tokens: ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@nl-rvo/design-tokens"},"https://www.npmjs.com/package/@nl-rvo/design-tokens"),"\nBevat de ROOS design tokens in de vorm van o.a. CSS variabelen.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"CSS voor components: ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@nl-rvo/component-library-css"},"https://www.npmjs.com/package/@nl-rvo/component-library-css"),"\nBevat de CSS styling van alle ROOS componenten.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Assets: ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@nl-rvo/assets"},"https://www.npmjs.com/package/@nl-rvo/assets"),"\nBevat alle assets als icons, plaatjes, fonts e.d."))),(0,a.kt)("h2",{id:"libraries-installeren-met-npm"},"Libraries installeren met NPM"),(0,a.kt)("p",null,"De aanbevolen manier om de libraries te gebruiken is met behulp van NPM:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install --save-dev --save-exact @nl-rvo/design-tokens@1.0.0-alpha.89"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm install --save-dev --save-exact @nl-rvo/component-library-css@1.0.0-alpha.145"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm install --save-dev --save-exact @nl-rvo/assets@1.0.0-alpha.80")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let op: Gebruik altijd exacte versie-nummers. Op deze manier blijft alles foutloos werken en kun je zelf testen op 'breaking changes' voor het upgraden naar een nieuwe release.")),(0,a.kt)("h2",{id:"libraries-inladen-via-cdn"},"Libraries inladen via CDN"),(0,a.kt)("p",null,"Het is mogelijk om de Design tokens en Components via open source CDN's als Unpckg of Jsdelivr in te laden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@nl-rvo/design-tokens@1.0.0-alpha.89" />\n<link\n  rel="stylesheet"\n  type="text/css"\n  href="https://cdn.jsdelivr.net/npm/@nl-rvo/component-library-css@1.0.0-alpha.145"\n/>\n')),(0,a.kt)("p",null,"Er is alleen een nadeel. Helaas wordt op dit moment de Assets library nog niet gebruikt door de components als deze via CDN worden ingeladen. Dit betekent dat gebruikte icons, plaatjes e.d. in de components niet zichtbaar zijn.\nHet is wel mogelijk om assets in de Assets library direct te linken. Bijvoorbeeld:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<img\n  src="https://cdn.jsdelivr.net/npm/@nl-rvo/assets@latest/images/logo.svg"\n  class="rvo-logo-img rvo-header__logo-img"\n/>\n')),(0,a.kt)("p",null,"We raden daarom op dit moment aan om de libraries met behulp van NPM te integreren."),(0,a.kt)("h2",{id:"rvo-theme-class-toevoegen"},"RVO theme class toevoegen"),(0,a.kt)("p",null,"Als de Design Tokens, Components en Assets libraries zijn toegevoegd kun je het design system gebruiken door aan de root van je applicatie de CSS-class ",(0,a.kt)("inlineCode",{parentName:"p"},"rvo-theme")," toe te voegen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<body class="rvo-theme"></body>\n')),(0,a.kt)("h2",{id:"css-components-gebruiken"},"CSS 'Components' gebruiken"),(0,a.kt)("p",null,"Nu kunnen code snippets van componenten direct uit Storybook worden gekopieerd. Omdat het hier gaat om puur CSS styling is er verder geen bindende javascript functionaliteit of manier om componenten te gebruiken. Je kunt dus zelf de componenten naar wens combineren en waar nodig javascript functionaliteit toevoegen. Let wel op dat je de principes van het design system intact houdt."),(0,a.kt)("h2",{id:"bijdragen"},"Bijdragen"),(0,a.kt)("p",null,"Heb je eigen componenten of styling ontwikkeld die past binnen het design system? Laat het ons vooral weten!\nStuur dan een e-mail naar ",(0,a.kt)("a",{parentName:"p",href:"mailto:designsystem@rvo.nl"},"designsystem@rvo.nl"),".\nWe werken graag samen verder aan het design system."))}s.isMDXComponent=!0;const i={title:"Aan de slag",hide_title:!0,slug:"getting-started",sidebar_position:1},l=void 0,p={unversionedId:"getting-started/getting-started.docs",id:"getting-started/getting-started.docs",title:"Aan de slag",description:"",source:"@site/../../documentation/pages/getting-started/getting-started.docs.mdx",sourceDirName:"getting-started",slug:"/getting-started/getting-started",permalink:"/rvo/docs/getting-started/getting-started",draft:!1,editUrl:"https://github.com/nl-design-system/rvo/tree/main/documentation/../../documentation/pages/getting-started/getting-started.docs.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Aan de slag",hide_title:!0,slug:"getting-started",sidebar_position:1},sidebar:"getting-started",previous:{title:"Introduction",permalink:"/rvo/docs/getting-started/introduction"}},d={},c=[],m={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s,{mdxType:"Doc"}))}g.isMDXComponent=!0}}]);