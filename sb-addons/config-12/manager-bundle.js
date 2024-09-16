try{
(()=>{var rt=__STORYBOOK_API__,{ActiveTabs:nt,Consumer:at,ManagerContext:ct,Provider:it,addons:M,combineParameters:st,controlOrMetaKey:pt,controlOrMetaSymbol:dt,eventMatchesShortcut:lt,eventToShortcut:xt,isMacLike:ut,isShortcutTaken:gt,keyToSymbol:vt,merge:ht,mockChannel:mt,optionOrAltSymbol:Bt,shortcutMatchesShortcut:Ft,shortcutToHumanString:bt,types:Ct,useAddonState:ft,useArgTypes:St,useArgs:kt,useChannel:Pt,useGlobalTypes:It,useGlobals:yt,useParameter:Tt,useSharedState:Et,useStoryPrepared:Dt,useStorybookApi:Lt,useStorybookState:Mt}=__STORYBOOK_API__;var X="#007BC7";var $="#B3D7EE";var N="#475569";var Q="'RijksoverheidSansWebText'",U="'Verdana', 'Calibri', 'Arial', sans-serif";var K=(()=>{let o;return typeof window<"u"?o=window:typeof globalThis<"u"?o=globalThis:typeof window<"u"?o=window:typeof self<"u"?o=self:o={},o})();var Nt=__STORYBOOK_CLIENT_LOGGER__,{deprecate:Qt,logger:Y,once:Ut,pretty:Kt}=__STORYBOOK_CLIENT_LOGGER__;function F(){return F=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r])}return o},F.apply(this,arguments)}function so(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function b(o,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},b(o,t)}function po(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,b(o,t)}function z(o){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(o)}function lo(o){try{return Function.toString.call(o).indexOf("[native code]")!==-1}catch{return typeof o=="function"}}function xo(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(o,t,e){return xo()?k=Reflect.construct.bind():k=function(r,n,a){var c=[null];c.push.apply(c,n);var s=Function.bind.apply(r,c),p=new s;return a&&b(p,a.prototype),p},k.apply(null,arguments)}function O(o){var t=typeof Map=="function"?new Map:void 0;return O=function(e){if(e===null||!lo(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return k(e,arguments,z(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),b(r,e)},O(o)}var uo={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

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
`};function go(){for(var o=arguments.length,t=new Array(o),e=0;e<o;e++)t[e]=arguments[e];var r=t[0],n=[],a;for(a=1;a<t.length;a+=1)n.push(t[a]);return n.forEach(function(c){r=r.replace(/%[a-z]/,c)}),r}var l=function(o){po(t,o);function t(e){for(var r,n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];return r=o.call(this,go.apply(void 0,[uo[e]].concat(a)))||this,so(r)}return t}(O(Error));function A(o){return Math.round(o*255)}function vo(o,t,e){return A(o)+","+A(t)+","+A(e)}function C(o,t,e,r){if(r===void 0&&(r=vo),t===0)return r(e,e,e);var n=(o%360+360)%360/60,a=(1-Math.abs(2*e-1))*t,c=a*(1-Math.abs(n%2-1)),s=0,p=0,d=0;n>=0&&n<1?(s=a,p=c):n>=1&&n<2?(s=c,p=a):n>=2&&n<3?(p=a,d=c):n>=3&&n<4?(p=c,d=a):n>=4&&n<5?(s=c,d=a):n>=5&&n<6&&(s=a,d=c);var m=e-a/2,B=s+m,x=p+m,L=d+m;return r(B,x,L)}var J={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ho(o){if(typeof o!="string")return o;var t=o.toLowerCase();return J[t]?"#"+J[t]:o}var mo=/^#[a-fA-F0-9]{6}$/,Bo=/^#[a-fA-F0-9]{8}$/,Fo=/^#[a-fA-F0-9]{3}$/,bo=/^#[a-fA-F0-9]{4}$/,H=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Co=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,fo=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,So=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function T(o){if(typeof o!="string")throw new l(3);var t=ho(o);if(t.match(mo))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Bo)){var e=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:e}}if(t.match(Fo))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(bo)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var n=H.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var a=Co.exec(t.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var c=fo.exec(t);if(c){var s=parseInt(""+c[1],10),p=parseInt(""+c[2],10)/100,d=parseInt(""+c[3],10)/100,m="rgb("+C(s,p,d)+")",B=H.exec(m);if(!B)throw new l(4,t,m);return{red:parseInt(""+B[1],10),green:parseInt(""+B[2],10),blue:parseInt(""+B[3],10)}}var x=So.exec(t.substring(0,50));if(x){var L=parseInt(""+x[1],10),ao=parseInt(""+x[2],10)/100,co=parseInt(""+x[3],10)/100,q="rgb("+C(L,ao,co)+")",S=H.exec(q);if(!S)throw new l(4,t,q);return{red:parseInt(""+S[1],10),green:parseInt(""+S[2],10),blue:parseInt(""+S[3],10),alpha:parseFloat(""+x[4])>1?parseFloat(""+x[4])/100:parseFloat(""+x[4])}}throw new l(5)}function ko(o){var t=o.red/255,e=o.green/255,r=o.blue/255,n=Math.max(t,e,r),a=Math.min(t,e,r),c=(n+a)/2;if(n===a)return o.alpha!==void 0?{hue:0,saturation:0,lightness:c,alpha:o.alpha}:{hue:0,saturation:0,lightness:c};var s,p=n-a,d=c>.5?p/(2-n-a):p/(n+a);switch(n){case t:s=(e-r)/p+(e<r?6:0);break;case e:s=(r-t)/p+2;break;default:s=(t-e)/p+4;break}return s*=60,o.alpha!==void 0?{hue:s,saturation:d,lightness:c,alpha:o.alpha}:{hue:s,saturation:d,lightness:c}}function oo(o){return ko(T(o))}var Po=function(o){return o.length===7&&o[1]===o[2]&&o[3]===o[4]&&o[5]===o[6]?"#"+o[1]+o[3]+o[5]:o},j=Po;function h(o){var t=o.toString(16);return t.length===1?"0"+t:t}function R(o){return h(Math.round(o*255))}function Io(o,t,e){return j("#"+R(o)+R(t)+R(e))}function I(o,t,e){return C(o,t,e,Io)}function yo(o,t,e){if(typeof o=="number"&&typeof t=="number"&&typeof e=="number")return I(o,t,e);if(typeof o=="object"&&t===void 0&&e===void 0)return I(o.hue,o.saturation,o.lightness);throw new l(1)}function To(o,t,e,r){if(typeof o=="number"&&typeof t=="number"&&typeof e=="number"&&typeof r=="number")return r>=1?I(o,t,e):"rgba("+C(o,t,e)+","+r+")";if(typeof o=="object"&&t===void 0&&e===void 0&&r===void 0)return o.alpha>=1?I(o.hue,o.saturation,o.lightness):"rgba("+C(o.hue,o.saturation,o.lightness)+","+o.alpha+")";throw new l(2)}function _(o,t,e){if(typeof o=="number"&&typeof t=="number"&&typeof e=="number")return j("#"+h(o)+h(t)+h(e));if(typeof o=="object"&&t===void 0&&e===void 0)return j("#"+h(o.red)+h(o.green)+h(o.blue));throw new l(6)}function f(o,t,e,r){if(typeof o=="string"&&typeof t=="number"){var n=T(o);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof o=="number"&&typeof t=="number"&&typeof e=="number"&&typeof r=="number")return r>=1?_(o,t,e):"rgba("+o+","+t+","+e+","+r+")";if(typeof o=="object"&&t===void 0&&e===void 0&&r===void 0)return o.alpha>=1?_(o.red,o.green,o.blue):"rgba("+o.red+","+o.green+","+o.blue+","+o.alpha+")"}throw new l(7)}var Eo=function(o){return typeof o.red=="number"&&typeof o.green=="number"&&typeof o.blue=="number"&&(typeof o.alpha!="number"||typeof o.alpha>"u")},Do=function(o){return typeof o.red=="number"&&typeof o.green=="number"&&typeof o.blue=="number"&&typeof o.alpha=="number"},Lo=function(o){return typeof o.hue=="number"&&typeof o.saturation=="number"&&typeof o.lightness=="number"&&(typeof o.alpha!="number"||typeof o.alpha>"u")},Mo=function(o){return typeof o.hue=="number"&&typeof o.saturation=="number"&&typeof o.lightness=="number"&&typeof o.alpha=="number"};function to(o){if(typeof o!="object")throw new l(8);if(Do(o))return f(o);if(Eo(o))return _(o);if(Mo(o))return To(o);if(Lo(o))return yo(o);throw new l(8)}function eo(o,t,e){return function(){var r=e.concat(Array.prototype.slice.call(arguments));return r.length>=t?o.apply(this,r):eo(o,t,r)}}function E(o){return eo(o,o.length,[])}function D(o,t,e){return Math.max(o,Math.min(t,e))}function Ao(o,t){if(t==="transparent")return t;var e=oo(t);return to(F({},e,{lightness:D(0,1,e.lightness-parseFloat(o))}))}var Ho=E(Ao),Ro=Ho;function Wo(o,t){if(t==="transparent")return t;var e=oo(t);return to(F({},e,{lightness:D(0,1,e.lightness+parseFloat(o))}))}var wo=E(Wo),zo=wo;function Oo(o,t){if(t==="transparent")return t;var e=T(t),r=typeof e.alpha=="number"?e.alpha:1,n=F({},e,{alpha:D(0,1,(r*100+parseFloat(o)*100)/100)});return f(n)}var ee=E(Oo);function jo(o,t){if(t==="transparent")return t;var e=T(t),r=typeof e.alpha=="number"?e.alpha:1,n=F({},e,{alpha:D(0,1,+(r*100-parseFloat(o)*100).toFixed(2)/100)});return f(n)}var _o=E(jo),Go=_o,i={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},Z={app:"#F6F9FC",bar:i.lightest,content:i.lightest,preview:i.lightest,gridCellSize:10,hoverable:Go(.9,i.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},y={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},qo={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:Z.app,appContentBg:i.lightest,appPreviewBg:i.lightest,appBorderColor:i.border,appBorderRadius:4,fontBase:y.fonts.base,fontCode:y.fonts.mono,textColor:i.darkest,textInverseColor:i.lightest,textMutedColor:i.dark,barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:i.lightest,buttonBg:Z.app,buttonBorder:i.medium,booleanBg:i.mediumlight,booleanSelectedBg:i.lightest,inputBg:i.lightest,inputBorder:i.border,inputTextColor:i.darkest,inputBorderRadius:4},V=qo,Xo={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:i.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:y.fonts.base,fontCode:y.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:i.lightest,inputBorderRadius:4},$o=Xo,{window:W}=K;var No=o=>typeof o!="string"?(Y.warn(`Color passed to theme object should be a string. Instead ${o}(${typeof o}) was passed.`),!1):!0,Qo=o=>!/(gradient|var|calc)/.test(o),Uo=(o,t)=>o==="darken"?f(`${Ro(1,t)}`,.95):o==="lighten"?f(`${zo(1,t)}`,.95):t,ro=o=>t=>{if(!No(t)||!Qo(t))return t;try{return Uo(o,t)}catch{return t}},re=ro("lighten"),ne=ro("darken"),Ko=()=>!W||!W.matchMedia?"light":W.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",P={light:V,dark:$o,normal:V},w=Ko(),G=(o={base:w},t)=>{let e={...P[w],...P[o.base]||{},...o,base:P[o.base]?o.base:w};return{...t,...e,barSelectedColor:o.barSelectedColor||e.colorSecondary}};var no=G({base:"light",colorPrimary:X,colorSecondary:$,appBg:"white",appContentBg:"transparent",textColor:`${N}`,fontBase:`${Q}, ${U}`,fontCode:"monospace",brandTitle:"NL Design System: RVO",brandUrl:`${document.location.protocol}//${document.location.host}${document.location.pathname}`,brandTarget:"_self",brandImage:"https://www.rvo.nl/assets/logos/logo-nl-nowhitespace.svg"});M.setConfig({theme:no});function Yo(o){return new Promise(t=>{if(document.querySelector(o))return t(document.querySelectorAll(o));let e=new MutationObserver(()=>{document.querySelector(o)&&(t(document.querySelectorAll(o)),e.disconnect())});return e.observe(document.body,{childList:!0,subtree:!0}),null})}M.register("HIDE_STORIES_ADDON",()=>{Yo('div[id="storybook-explorer-menu"] span[type="HIDDEN"]').then(o=>{o.forEach(t=>{let e=t.closest("a").getAttribute("id");var r=document.createElement("style");r.innerHTML=`div[id="storybook-explorer-menu"] a[id="${e}"] { display: none; }`,document.getElementsByTagName("head")[0].appendChild(r)})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
