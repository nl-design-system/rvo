"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[8744],{3028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>g,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=t(2913),s=(t(1855),t(2403));const i={toc:[{value:"Libraries installeren met NPM",id:"libraries-installeren-met-npm",level:2},{value:"Libraries inladen via CDN",id:"libraries-inladen-via-cdn",level:2},{value:"RVO theme class toevoegen",id:"rvo-theme-class-toevoegen",level:2},{value:"CSS &#39;Components&#39; gebruiken",id:"css-components-gebruiken",level:2},{value:"Bijdragen",id:"bijdragen",level:2}]},o="wrapper";function r(e){let{components:n,...t}=e;return(0,s.yg)(o,(0,a.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"aan-de-slag-met-roos"},"Aan de slag met ROOS"),(0,s.yg)("p",null,"Om te starten met het design system gebruik je een drietal libraries.\nDeze zijn gepubliceerd op NPM onder de organisatie 'nl-rvo'."),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Design tokens: ",(0,s.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@nl-rvo/design-tokens"},"https://www.npmjs.com/package/@nl-rvo/design-tokens"),"\nBevat de ROOS design tokens in de vorm van o.a. CSS variabelen.")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"CSS voor components: ",(0,s.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@nl-rvo/component-library-css"},"https://www.npmjs.com/package/@nl-rvo/component-library-css"),"\nBevat de CSS styling van alle ROOS componenten.")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Assets: ",(0,s.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@nl-rvo/assets"},"https://www.npmjs.com/package/@nl-rvo/assets"),"\nBevat alle assets als icons, plaatjes, fonts e.d."))),(0,s.yg)("h2",{id:"libraries-installeren-met-npm"},"Libraries installeren met NPM"),(0,s.yg)("p",null,"De aanbevolen manier om de libraries te gebruiken is met behulp van NPM:"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"npm install --save-dev --save-exact @nl-rvo/design-tokens@1.0.0-alpha.89"),"\n",(0,s.yg)("inlineCode",{parentName:"p"},"npm install --save-dev --save-exact @nl-rvo/component-library-css@1.0.0-alpha.145"),"\n",(0,s.yg)("inlineCode",{parentName:"p"},"npm install --save-dev --save-exact @nl-rvo/assets@1.0.0-alpha.80")),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"Let op: Gebruik altijd exacte versie-nummers. Op deze manier blijft alles foutloos werken en kun je zelf testen op 'breaking changes' voor het upgraden naar een nieuwe release.")),(0,s.yg)("h2",{id:"libraries-inladen-via-cdn"},"Libraries inladen via CDN"),(0,s.yg)("p",null,"Het is mogelijk om de Design tokens en Components via open source CDN's als Unpckg of Jsdelivr in te laden:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@nl-rvo/design-tokens@1.0.0-alpha.89" />\n<link\n  rel="stylesheet"\n  type="text/css"\n  href="https://cdn.jsdelivr.net/npm/@nl-rvo/component-library-css@1.0.0-alpha.145"\n/>\n')),(0,s.yg)("p",null,"Er is alleen een nadeel. Helaas wordt op dit moment de Assets library nog niet gebruikt door de components als deze via CDN worden ingeladen. Dit betekent dat gebruikte icons, plaatjes e.d. in de components niet zichtbaar zijn.\nHet is wel mogelijk om assets in de Assets library direct te linken. Bijvoorbeeld:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-html"},'<img\n  src="https://cdn.jsdelivr.net/npm/@nl-rvo/assets@latest/images/logo.svg"\n  class="rvo-logo-img rvo-header__logo-img"\n/>\n')),(0,s.yg)("p",null,"We raden daarom op dit moment aan om de libraries met behulp van NPM te integreren."),(0,s.yg)("h2",{id:"rvo-theme-class-toevoegen"},"RVO theme class toevoegen"),(0,s.yg)("p",null,"Als de Design Tokens, Components en Assets libraries zijn toegevoegd kun je het design system gebruiken door aan de root van je applicatie de CSS-class ",(0,s.yg)("inlineCode",{parentName:"p"},"rvo-theme")," toe te voegen:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-html"},'<body class="rvo-theme"></body>\n')),(0,s.yg)("h2",{id:"css-components-gebruiken"},"CSS 'Components' gebruiken"),(0,s.yg)("p",null,"Nu kunnen code snippets van componenten direct uit Storybook worden gekopieerd. Omdat het hier gaat om puur CSS styling is er verder geen bindende javascript functionaliteit of manier om componenten te gebruiken. Je kunt dus zelf de componenten naar wens combineren en waar nodig javascript functionaliteit toevoegen. Let wel op dat je de principes van het design system intact houdt."),(0,s.yg)("h2",{id:"bijdragen"},"Bijdragen"),(0,s.yg)("p",null,"Heb je eigen componenten of styling ontwikkeld die past binnen het design system? Laat het ons vooral weten!\nStuur dan een e-mail naar ",(0,s.yg)("a",{parentName:"p",href:"mailto:designsystem@rvo.nl"},"designsystem@rvo.nl"),".\nWe werken graag samen verder aan het design system."))}r.isMDXComponent=!0;const l={title:"Aan de slag met ROOS",hide_title:!0,slug:"getting-started",sidebar_position:1},g=void 0,d={unversionedId:"getting-started/getting-started.docusaurus",id:"getting-started/getting-started.docusaurus",title:"Aan de slag met ROOS",description:"",source:"@site/../../documentation/pages/getting-started/getting-started.docusaurus.mdx",sourceDirName:"getting-started",slug:"/getting-started/getting-started",permalink:"/rvo/docs/getting-started/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Aan de slag met ROOS",hide_title:!0,slug:"getting-started",sidebar_position:1},sidebar:"getting-started",previous:{title:"Introductie",permalink:"/rvo/docs/getting-started/introduction"}},p={},m=[],c={toc:m},u="wrapper";function v(e){let{components:n,...t}=e;return(0,s.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)(r,{mdxType:"Doc"}))}v.isMDXComponent=!0}}]);