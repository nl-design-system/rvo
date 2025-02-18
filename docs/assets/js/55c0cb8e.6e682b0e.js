"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([["7858"],{5305:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>f,default:()=>v,assets:()=>p,toc:()=>x,frontMatter:()=>k});var o=JSON.parse('{"id":"checkbox-filter/checkbox-filter.docusaurus","title":"Checkbox Filter","description":"Standard component:","source":"@site/../../components/checkbox-filter/checkbox-filter.docusaurus.mdx","sourceDirName":"checkbox-filter","slug":"/checkbox-filter/","permalink":"/rvo/docs/componenten/checkbox-filter/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Checkbox Filter","hide_title":false,"hide_table_of_contents":true,"slug":"."},"sidebar":"components","previous":{"title":"Checkbox field","permalink":"/rvo/docs/componenten/form-field-checkbox/"},"next":{"title":"Counter Badge","permalink":"/rvo/docs/componenten/counter-badge/"}}'),t=i("7458"),l=i("8607");function r(e){let n={code:"code",p:"p",...(0,l.a)(),...e.components};return(0,t.jsxs)(n.p,{children:["Dit component wordt voornamelijk gebruikt op een zoekpagina. De filters die je kun toepassen bij het zoeken kun je hierin verwerken door ",(0,t.jsx)(n.code,{children:"options"}),". Met ",(0,t.jsx)(n.code,{children:"optionsOnChange"})," kun je in je eigen applicatie bepalen hoe deze selectie afgehandeld moet worden. Je kan door middel van een input veld door de lijst filteren, dit is aan te zetten door de ",(0,t.jsx)(n.code,{children:"showInputField"})," parameter. Vergeet dan niet de ",(0,t.jsx)(n.code,{children:"inputFieldOnChange"})," ook mee te geven."]})}function s(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}var d=i("2983"),c=i("7117"),a=i("774"),u=i("8112"),h=i("2792");let b=e=>{let{label:n,options:i,limit:o=5,showInputField:l,inputFieldPlaceholder:r,inputFieldOnChange:s,optionsOnChange:b,showMoreText:m="Toon meer",showLessText:k="Toon minder",...f}=e,[p,x]=(0,d.useState)([]),[g,v]=(0,d.useState)(!1);(0,d.useEffect)(()=>{let e=[...i];x(i?.length>o&&!g?e.splice(0,o):e)},[i]);let j=e=>{e.preventDefault();let n=[...i];!1===g?(v(!0),x(n)):(v(!1),x(n.splice(0,o)))};return(0,t.jsxs)("details",{open:!0,className:"rvo-checkbox-filter",...f,children:[(0,t.jsxs)("summary",{className:"rvo-checkbox-filter__label",children:[n," ",(0,t.jsx)(u.ZP,{className:"rvo-checkbox-filter__icon",icon:"delta-omhoog",color:"logoblauw"})]}),l&&(0,t.jsx)(a.ZP,{placeholder:r,onChange:s,label:" ",size:"max"}),(0,t.jsx)("div",{className:"rvo-checkbox-filter__checkbox-container",children:(0,t.jsx)(c.ZP,{label:" ",invalid:!1,options:p,onChange:b})}),i?.length>o&&(0,t.jsx)(h.ZP,{icon:"plus",iconSize:"md",showIcon:"before",noUnderline:!0,color:"logoblauw",iconColor:"logoblauw",onClick:e=>j(e),children:g?k:m})]})};var m=i("6688");let k={title:"Checkbox Filter",hide_title:!1,hide_table_of_contents:!0,slug:"."},f=void 0,p={},x=[{value:"Standard component:",id:"standard-component",level:2},{value:"Checkbox filter met zoekveld:",id:"checkbox-filter-met-zoekveld",level:2},{value:"Documentatie",id:"documentatie",level:2}];function g(e){let n={h2:"h2",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"standard-component",children:"Standard component:"}),"\n",(0,t.jsx)(m.Z,{storyName:"componenten-checkbox-filter--default",children:(0,t.jsx)(b,{label:"Subsidies",options:[{id:"Agro en visserij",label:"Agro en visserij"},{id:"Biotechnologie",label:"Biotechnologie"},{id:"Bosbouw en hout(bewerkings)industrie",label:"Bosbouw en hout(bewerkings)industrie"},{id:"Bouw en infrastructuur",label:"Bouw en infrastructuur"},{id:"Chemie en kunststoffen",label:"Chemie en kunststoffen"},{id:"Chemische industrie",label:"Chemische industrie"},{id:"Consumentengoederen en detailhandel",label:"Consumentengoederen en detailhandel"},{id:"Creatieve industrie",label:"Creatieve industrie"},{id:"Dienstensector",label:"Dienstensector"},{id:"Elektronica-industrie",label:"Elektronica-industrie"},{id:"Energiesector",label:"Energiesector"}]})}),"\n",(0,t.jsx)(n.h2,{id:"checkbox-filter-met-zoekveld",children:"Checkbox filter met zoekveld:"}),"\n",(0,t.jsx)(m.Z,{storyName:"componenten-checkbox-filter--default",children:(0,t.jsx)(b,{options:[{id:"Agro en visserij",label:"Agro en visserij"},{id:"Biotechnologie",label:"Biotechnologie"},{id:"Bosbouw en hout(bewerkings)industrie",label:"Bosbouw en hout(bewerkings)industrie"},{id:"Bouw en infrastructuur",label:"Bouw en infrastructuur"},{id:"Chemie en kunststoffen",label:"Chemie en kunststoffen"},{id:"Chemische industrie",label:"Chemische industrie"},{id:"Consumentengoederen en detailhandel",label:"Consumentengoederen en detailhandel"},{id:"Creatieve industrie",label:"Creatieve industrie"},{id:"Dienstensector",label:"Dienstensector"},{id:"Elektronica-industrie",label:"Elektronica-industrie"},{id:"Energiesector",label:"Energiesector"}],label:"Subsidies",showInputField:!0,inputFieldPlaceholder:"Zoek..."})}),"\n",(0,t.jsx)(n.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,t.jsx)(s,{})]})}function v(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}}}]);