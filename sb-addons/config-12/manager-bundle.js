try{
var eo=__STORYBOOKAPI__,{ActiveTabs:ro,Consumer:no,ManagerContext:ao,Provider:co,addons:E,combineParameters:io,controlOrMetaKey:so,controlOrMetaSymbol:po,eventMatchesShortcut:lo,eventToShortcut:uo,isMacLike:xo,isShortcutTaken:fo,keyToSymbol:go,merge:ho,mockChannel:vo,optionOrAltSymbol:mo,shortcutMatchesShortcut:bo,shortcutToHumanString:Bo,types:Co,useAddonState:ko,useArgTypes:So,useArgs:Fo,useChannel:yo,useGlobalTypes:Io,useGlobals:To,useParameter:Po,useSharedState:Lo,useStoryPrepared:Do,useStorybookApi:Ao,useStorybookState:Eo}=__STORYBOOKAPI__;var $="#007bc7",N="#b2d7ee";var X="#535353";var U="'RijksoverheidSansWebText'",Q="'Calibri', 'Verdana', 'Arial', sans-serif";var K=(()=>{let t;return typeof window<"u"?t=window:typeof globalThis<"u"?t=globalThis:typeof window<"u"?t=window:typeof self<"u"?t=self:t={},t})();var $o=__STORYBOOKCLIENTLOGGER__,{deprecate:No,logger:Y,once:Xo,pretty:Uo}=__STORYBOOKCLIENTLOGGER__;function b(){return b=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},b.apply(this,arguments)}function st(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t,o){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},B(t,o)}function pt(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,B(t,o)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},M(t)}function dt(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function lt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function F(t,o,e){return lt()?F=Reflect.construct.bind():F=function(r,n,a){var c=[null];c.push.apply(c,n);var s=Function.bind.apply(r,c),p=new s;return a&&B(p,a.prototype),p},F.apply(null,arguments)}function O(t){var o=typeof Map=="function"?new Map:void 0;return O=function(e){if(e===null||!dt(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof o<"u"){if(o.has(e))return o.get(e);o.set(e,r)}function r(){return F(e,arguments,M(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),B(r,e)},O(t)}var ut={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function xt(){for(var t=arguments.length,o=new Array(t),e=0;e<t;e++)o[e]=arguments[e];var r=o[0],n=[],a;for(a=1;a<o.length;a+=1)n.push(o[a]);return n.forEach(function(c){r=r.replace(/%[a-z]/,c)}),r}var l=function(t){pt(o,t);function o(e){for(var r,n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];return r=t.call(this,xt.apply(void 0,[ut[e]].concat(a)))||this,st(r)}return o}(O(Error));function H(t){return Math.round(t*255)}function ft(t,o,e){return H(t)+","+H(o)+","+H(e)}function C(t,o,e,r){if(r===void 0&&(r=ft),o===0)return r(e,e,e);var n=(t%360+360)%360/60,a=(1-Math.abs(2*e-1))*o,c=a*(1-Math.abs(n%2-1)),s=0,p=0,d=0;n>=0&&n<1?(s=a,p=c):n>=1&&n<2?(s=c,p=a):n>=2&&n<3?(p=a,d=c):n>=3&&n<4?(p=c,d=a):n>=4&&n<5?(s=c,d=a):n>=5&&n<6&&(s=a,d=c);var v=e-a/2,m=s+v,u=p+v,A=d+v;return r(m,u,A)}var J={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function gt(t){if(typeof t!="string")return t;var o=t.toLowerCase();return J[o]?"#"+J[o]:t}var ht=/^#[a-fA-F0-9]{6}$/,vt=/^#[a-fA-F0-9]{8}$/,mt=/^#[a-fA-F0-9]{3}$/,bt=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Bt=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Ct=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,kt=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function P(t){if(typeof t!="string")throw new l(3);var o=gt(t);if(o.match(ht))return{red:parseInt(""+o[1]+o[2],16),green:parseInt(""+o[3]+o[4],16),blue:parseInt(""+o[5]+o[6],16)};if(o.match(vt)){var e=parseFloat((parseInt(""+o[7]+o[8],16)/255).toFixed(2));return{red:parseInt(""+o[1]+o[2],16),green:parseInt(""+o[3]+o[4],16),blue:parseInt(""+o[5]+o[6],16),alpha:e}}if(o.match(mt))return{red:parseInt(""+o[1]+o[1],16),green:parseInt(""+o[2]+o[2],16),blue:parseInt(""+o[3]+o[3],16)};if(o.match(bt)){var r=parseFloat((parseInt(""+o[4]+o[4],16)/255).toFixed(2));return{red:parseInt(""+o[1]+o[1],16),green:parseInt(""+o[2]+o[2],16),blue:parseInt(""+o[3]+o[3],16),alpha:r}}var n=R.exec(o);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var a=Bt.exec(o.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var c=Ct.exec(o);if(c){var s=parseInt(""+c[1],10),p=parseInt(""+c[2],10)/100,d=parseInt(""+c[3],10)/100,v="rgb("+C(s,p,d)+")",m=R.exec(v);if(!m)throw new l(4,o,v);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10)}}var u=kt.exec(o.substring(0,50));if(u){var A=parseInt(""+u[1],10),at=parseInt(""+u[2],10)/100,ct=parseInt(""+u[3],10)/100,G="rgb("+C(A,at,ct)+")",S=R.exec(G);if(!S)throw new l(4,o,G);return{red:parseInt(""+S[1],10),green:parseInt(""+S[2],10),blue:parseInt(""+S[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])}}throw new l(5)}function St(t){var o=t.red/255,e=t.green/255,r=t.blue/255,n=Math.max(o,e,r),a=Math.min(o,e,r),c=(n+a)/2;if(n===a)return t.alpha!==void 0?{hue:0,saturation:0,lightness:c,alpha:t.alpha}:{hue:0,saturation:0,lightness:c};var s,p=n-a,d=c>.5?p/(2-n-a):p/(n+a);switch(n){case o:s=(e-r)/p+(e<r?6:0);break;case e:s=(r-o)/p+2;break;default:s=(o-e)/p+4;break}return s*=60,t.alpha!==void 0?{hue:s,saturation:d,lightness:c,alpha:t.alpha}:{hue:s,saturation:d,lightness:c}}function tt(t){return St(P(t))}var Ft=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t},j=Ft;function h(t){var o=t.toString(16);return o.length===1?"0"+o:o}function w(t){return h(Math.round(t*255))}function yt(t,o,e){return j("#"+w(t)+w(o)+w(e))}function I(t,o,e){return C(t,o,e,yt)}function It(t,o,e){if(typeof t=="number"&&typeof o=="number"&&typeof e=="number")return I(t,o,e);if(typeof t=="object"&&o===void 0&&e===void 0)return I(t.hue,t.saturation,t.lightness);throw new l(1)}function Tt(t,o,e,r){if(typeof t=="number"&&typeof o=="number"&&typeof e=="number"&&typeof r=="number")return r>=1?I(t,o,e):"rgba("+C(t,o,e)+","+r+")";if(typeof t=="object"&&o===void 0&&e===void 0&&r===void 0)return t.alpha>=1?I(t.hue,t.saturation,t.lightness):"rgba("+C(t.hue,t.saturation,t.lightness)+","+t.alpha+")";throw new l(2)}function _(t,o,e){if(typeof t=="number"&&typeof o=="number"&&typeof e=="number")return j("#"+h(t)+h(o)+h(e));if(typeof t=="object"&&o===void 0&&e===void 0)return j("#"+h(t.red)+h(t.green)+h(t.blue));throw new l(6)}function k(t,o,e,r){if(typeof t=="string"&&typeof o=="number"){var n=P(t);return"rgba("+n.red+","+n.green+","+n.blue+","+o+")"}else{if(typeof t=="number"&&typeof o=="number"&&typeof e=="number"&&typeof r=="number")return r>=1?_(t,o,e):"rgba("+t+","+o+","+e+","+r+")";if(typeof t=="object"&&o===void 0&&e===void 0&&r===void 0)return t.alpha>=1?_(t.red,t.green,t.blue):"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")"}throw new l(7)}var Pt=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&(typeof t.alpha!="number"||typeof t.alpha>"u")},Lt=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&typeof t.alpha=="number"},Dt=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&(typeof t.alpha!="number"||typeof t.alpha>"u")},At=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&typeof t.alpha=="number"};function ot(t){if(typeof t!="object")throw new l(8);if(Lt(t))return k(t);if(Pt(t))return _(t);if(At(t))return Tt(t);if(Dt(t))return It(t);throw new l(8)}function et(t,o,e){return function(){var r=e.concat(Array.prototype.slice.call(arguments));return r.length>=o?t.apply(this,r):et(t,o,r)}}function L(t){return et(t,t.length,[])}function D(t,o,e){return Math.max(t,Math.min(o,e))}function Et(t,o){if(o==="transparent")return o;var e=tt(o);return ot(b({},e,{lightness:D(0,1,e.lightness-parseFloat(t))}))}var Ht=L(Et),Rt=Ht;function wt(t,o){if(o==="transparent")return o;var e=tt(o);return ot(b({},e,{lightness:D(0,1,e.lightness+parseFloat(t))}))}var Wt=L(wt),zt=Wt;function Mt(t,o){if(o==="transparent")return o;var e=P(o),r=typeof e.alpha=="number"?e.alpha:1,n=b({},e,{alpha:D(0,1,(r*100+parseFloat(t)*100)/100)});return k(n)}var te=L(Mt);function Ot(t,o){if(o==="transparent")return o;var e=P(o),r=typeof e.alpha=="number"?e.alpha:1,n=b({},e,{alpha:D(0,1,+(r*100-parseFloat(t)*100).toFixed(2)/100)});return k(n)}var jt=L(Ot),_t=jt,i={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},Z={app:"#F6F9FC",bar:i.lightest,content:i.lightest,gridCellSize:10,hoverable:_t(.93,i.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},T={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},qt={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:Z.app,appContentBg:i.lightest,appBorderColor:i.border,appBorderRadius:4,fontBase:T.fonts.base,fontCode:T.fonts.mono,textColor:i.darkest,textInverseColor:i.lightest,textMutedColor:i.mediumdark,barTextColor:i.mediumdark,barSelectedColor:i.secondary,barBg:i.lightest,buttonBg:Z.app,buttonBorder:i.medium,booleanBg:i.mediumlight,booleanSelectedBg:i.lightest,inputBg:i.lightest,inputBorder:i.border,inputTextColor:i.darkest,inputBorderRadius:4},V=qt,Gt={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:T.fonts.base,fontCode:T.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:i.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:i.lightest,inputBorderRadius:4},$t=Gt,{window:W}=K;var Nt=t=>typeof t!="string"?(Y.warn(`Color passed to theme object should be a string. Instead ${t}(${typeof t}) was passed.`),!1):!0,Xt=t=>!/(gradient|var|calc)/.test(t),Ut=(t,o)=>t==="darken"?k(`${Rt(1,o)}`,.95):t==="lighten"?k(`${zt(1,o)}`,.95):o,rt=t=>o=>{if(!Nt(o)||!Xt(o))return o;try{return Ut(t,o)}catch{return o}},oe=rt("lighten"),ee=rt("darken"),Qt=()=>!W||!W.matchMedia?"light":W.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",y={light:V,dark:$t,normal:V},z=Qt(),q=(t={base:z},o)=>{let e={...y[z],...y[t.base]||{},...t,base:y[t.base]?t.base:z};return{...o,...e,barSelectedColor:t.barSelectedColor||e.colorSecondary}};var nt=q({base:"light",colorPrimary:$,colorSecondary:N,appBg:"white",appContentBg:"transparent",textColor:`${X}`,fontBase:`${U}, ${Q}`,fontCode:"monospace",brandTitle:"NL Design System: RVO",brandUrl:`${document.location.protocol}//${document.location.host}${document.location.pathname}`,brandTarget:"_self",brandImage:"https://www.rvo.nl/assets/logos/logo-nl-nowhitespace.svg"});E.setConfig({theme:nt});function Kt(t){return new Promise(o=>{if(document.querySelector(t))return o(document.querySelectorAll(t));let e=new MutationObserver(()=>{document.querySelector(t)&&(o(document.querySelectorAll(t)),e.disconnect())});return e.observe(document.body,{childList:!0,subtree:!0}),null})}E.register("HIDE_STORIES_ADDON",()=>{Kt('div[id="storybook-explorer-menu"] span[type="HIDDEN"]').then(t=>{t.forEach(o=>{let e=o.closest("a").getAttribute("id");var r=document.createElement("style");r.innerHTML=`div[id="storybook-explorer-menu"] a[id="${e}"] { display: none; }`,document.getElementsByTagName("head")[0].appendChild(r)})})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
