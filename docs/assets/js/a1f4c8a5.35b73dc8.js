/*! For license information please see a1f4c8a5.35b73dc8.js.LICENSE.txt */
"use strict";(self.webpackChunk_nl_rvo_docusaurus=self.webpackChunk_nl_rvo_docusaurus||[]).push([[1040],{8442:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(2798),n=(o(9901),o(7522)),l=o(1985);const i={title:"TextInput field",hide_title:!1,slug:"."},a=void 0,s={unversionedId:"form-field-textinput/form-field-textinput.docs",id:"form-field-textinput/form-field-textinput.docs",title:"TextInput field",description:"Documentation for text input field",source:"@site/../../components/form-field-textinput/form-field-textinput.docs.mdx",sourceDirName:"form-field-textinput",slug:"/form-field-textinput/",permalink:"/rvo/docs/components/form-field-textinput/",draft:!1,editUrl:"https://github.com/nl-design-system/rvo/tree/main/components/../../components/form-field-textinput/form-field-textinput.docs.mdx",tags:[],version:"current",frontMatter:{title:"TextInput field",hide_title:!1,slug:"."},sidebar:"components",previous:{title:"Select field",permalink:"/rvo/docs/components/form-field-select/"},next:{title:"TimeInput field",permalink:"/rvo/docs/components/form-field-timeinput/"}},d={},c=[],x={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},x,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.ZP,{mdxType:"FormFieldTextInput"}),(0,n.kt)("br",null),"Documentation for text input field")}u.isMDXComponent=!0},1578:(e,t,o)=>{o.d(t,{DZ:()=>a,ZP:()=>s});o(9901);var r=o(3722),n=o(5795);const l={title:"Expandable text title",content:"Expandable text content",open:!1};var i=o(1250);const a=e=>{let{title:t=l.title,content:o=l.content,open:a=l.open,children:s}=e,d=(0,n.Z)(s||o,{className:"rvo-expandable-text__details"});return(0,i.jsxs)("details",{className:"rvo-expandable-text",open:a||void 0,children:[(0,i.jsxs)("summary",{className:"rvo-expandable-text__summary",children:[(0,i.jsx)(r.JO,{color:"hemelblauw",size:"md",icon:"info"}),t]}),d]})},s=a},696:(e,t,o)=>{o.d(t,{x2:()=>a,ZP:()=>s});var r=o(7350),n=(o(9901),o(3722));const l={text:"Dit is een melding.",type:"warning"};var i=o(1250);const a=e=>{let{text:t=l.text,type:o=l.type}=e;return"warning"===o?(0,i.jsxs)(r.ue,{warning:!0,className:"rvo-form-feedback rvo-form-feedback--warning rvo-layout-row rvo-layout-gap--sm",children:[(0,i.jsx)(n.JO,{icon:"waarschuwing",size:"md",classNames:["rvo-status-icon-waarschuwing"]}),t]}):(0,i.jsxs)(r.ue,{invalid:!0,className:"rvo-form-feedback rvo-form-feedback--error rvo-layout-row rvo-layout-gap--sm",children:[(0,i.jsx)(n.JO,{icon:"foutmelding",size:"md",classNames:["rvo-status-icon-foutmelding"]}),t]})},s=a},1985:(e,t,o)=>{o.d(t,{YI:()=>a,ZP:()=>s});o(9901);var r=o(8980),n=o(692),l=o(8561),i=o(1250);r.P,n.PG;const a=e=>{const t=(0,l.Z)(e,r.P),o=(0,l.Z)(e,n.PG);return(0,i.jsx)(r.g,{...t,children:(0,i.jsx)(n.oi,{...o})})},s=a},8980:(e,t,o)=>{o.d(t,{g:()=>c,P:()=>d});var r=o(7350),n=(o(9901),o(1578)),l=o(696),i=o(9469);const a={fieldId:"fieldId",label:"Field label",helperText:"Helper text",expandableHelperText:!1,expandableHelperTextTitle:"Expandable helper text title",warningText:"",errorText:""};var s=o(1250);const d={fieldId:{control:"text"},label:{control:"text"},helperText:{control:"text"},expandableHelperText:{control:"boolean"},expandableHelperTextTitle:{control:"text"},warningText:{control:"text"},errorText:{control:"text"}},c=e=>{let t,{fieldId:o=a.fieldId,label:d=a.label,helperText:c,expandableHelperText:x,expandableHelperTextTitle:u,warningText:p,errorText:m,children:f}=e;if(c)if(t=(0,s.jsx)("div",{className:"utrecht-form-field-description rvo-form-field__helper-text",children:c}),x)t=(0,s.jsx)("div",{className:"utrecht-form-field-description rvo-form-field__helper-text",children:(0,s.jsx)(n.DZ,{title:u,content:c})});else if("string"==typeof c&&c.length){t=(0,i.Z)(c)?(0,s.jsx)("div",{className:"utrecht-form-field-description rvo-form-field__helper-text",dangerouslySetInnerHTML:{__html:c}}):(0,s.jsx)("div",{className:"utrecht-form-field-description rvo-form-field__helper-text",children:c})}return(0,s.jsxs)(r.Wi,{className:"rvo-form-field rvo-layout-column rvo-layout-gap--sm",children:[(0,s.jsxs)("div",{className:"rvo-layout-column rvo-layout-gap--2xs",children:[(0,s.jsx)(r.lX,{htmlFor:o,children:d}),t,m&&(0,s.jsx)(l.x2,{text:m,type:"error"}),p&&(0,s.jsx)(l.x2,{text:p,type:"warning"})]}),f]})}},692:(e,t,o)=>{o.d(t,{oi:()=>d,PG:()=>s,ZP:()=>c});var r=o(7350),n=o(4517),l=o(9901);const i={id:"field",disabled:!1,focus:!1,invalid:!1,readOnly:!1,required:!1,inputType:"text",placeholder:"",value:"",validation:"text",prefix:"",suffix:"",size:"lg",maxLength:null,maxLengthIndicator:!0};var a=o(1250);const s={id:{control:"text"},disabled:{control:"boolean"},focus:{control:"boolean"},invalid:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"},inputType:{options:["text","textarea"],control:{type:"radio"}},placeholder:{control:"text"},value:{control:"text"},validation:{options:["text","number","currency"],control:{type:"radio"}},prefix:{control:"text"},suffix:{control:"text"},size:{options:["sm","md","lg"],control:{type:"radio"}},maxLength:{control:"number"},maxLengthIndicator:{control:"boolean"}},d=e=>{let{id:t=i.id,disabled:o=i.disabled,focus:s=i.focus,invalid:d=i.invalid,readOnly:c=i.readOnly,required:x=i.required,inputType:u=i.inputType,placeholder:p=i.placeholder,value:m=i.value,validation:f=i.validation,prefix:v=i.prefix,suffix:h=i.suffix,size:b=i.size,maxLength:g=i.maxLength,maxLengthIndicator:y=i.maxLengthIndicator,...T}=e;const j={id:t,disabled:o,invalid:d,required:x,readOnly:c,placeholder:p,defaultValue:m,...("number"===f||"currency"===f)&&{inputMode:"numeric",pattern:"currency"===f?"[0-9.,]*":"[0-9]*"},maxLength:g,...T},[_,N]=(0,l.useState)(m);if("text"===u){const e=(0,a.jsx)(r.fE,{...j,className:(0,n.Z)("sm"===b&&"utrecht-textbox--sm","md"===b&&"utrecht-textbox--md",s&&["utrecht-textbox--focus","utrecht-textbox--focus-visible"])});return v||h?(0,a.jsxs)("div",{className:(0,n.Z)("rvo-layout-row","rvo-layout-gap--md"),children:[v,e,h]}):e}return g&&y?(j.onChange=e=>{T.onChange?.(e),N(e.target.value)},(0,a.jsxs)("div",{className:(0,n.Z)("rvo-layout-column","rvo-layout-gap--xs"),children:[(0,a.jsx)(r.gx,{...j,className:(0,n.Z)(s&&["utrecht-textbox--focus","utrecht-textbox--focus-visible"])}),(0,a.jsxs)("span",{className:"utrecht-textbox-remaining-chars",children:["Nog ",g-_.length," teken",g-_.length>1&&"s"," over"]})]})):(0,a.jsx)(r.gx,{...j,className:(0,n.Z)(s&&["utrecht-textbox--focus","utrecht-textbox--focus-visible"])})},c=d},8561:(e,t,o)=>{o.d(t,{Z:()=>r});const r=(e,t)=>{const o={};return Object.keys(t).forEach((t=>{o[t]=e[t]})),o}},5795:(e,t,o)=>{o.d(t,{Z:()=>l});o(9901);var r=o(9469),n=o(1250);const l=function(e,t){return void 0===t&&(t=void 0),"string"==typeof e&&e.length&&(0,r.Z)(e)?(0,n.jsx)("div",{...t,dangerouslySetInnerHTML:{__html:e}}):t?(0,n.jsx)("div",{...t,children:e}):e}},9469:(e,t,o)=>{o.d(t,{Z:()=>r});const r=e=>{let t=`<div>${e}</div>`;return null===(new DOMParser).parseFromString(t,"application/xml").querySelector("parsererror")}}}]);