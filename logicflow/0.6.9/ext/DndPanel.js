!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=166)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(54))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(0),o=e(32),i=e(2),u=e(27),c=e(34),f=e(59),a=o("wks"),s=r.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(5),o=e(31),i=e(8),u=e(22),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(5),o=e(6),i=e(15);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(0),o=e(26).f,i=e(7),u=e(14),c=e(18),f=e(51),a=e(38);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[d]||c(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},,function(t,n,e){var r=e(29),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(21);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(0),o=e(7),i=e(2),u=e(18),c=e(30),f=e(28),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var f,a=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(f=s(e)).source||(f.source=l.join("string"==typeof n?n:""))),t!==r?(a?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(0),o=e(7);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(18),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(52),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(32),o=e(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(5),o=e(47),i=e(15),u=e(11),c=e(22),f=e(2),a=e(31),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r,o,i,u=e(55),c=e(0),f=e(3),a=e(7),s=e(2),l=e(19),p=e(24),v=e(16),d=c.WeakMap;if(u){var h=l.state||(l.state=new d),y=h.get,m=h.has,b=h.set;r=function(t,n){return n.facade=t,b.call(h,t,n),n},o=function(t){return y.call(h,t)||{}},i=function(t){return m.call(h,t)}}else{var x=p("state");v[x]=!0,r=function(t,n){return n.facade=t,a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(1),o=e(17),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(19),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(5),o=e(1),i=e(35);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(33),o=e(19);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.1",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(0),o=e(3),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(2),o=e(11),i=e(46).indexOf,u=e(16);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(17);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(5),o=e(1),i=e(2),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,l=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){var r=e(50);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},,function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(3),o=e(37),i=e(4)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},,function(t,n,e){var r=e(36),o=e(25).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(11),o=e(12),i=e(42),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n){n.f=Object.getOwnPropertySymbols},,function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(2),o=e(56),i=e(26),u=e(6);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){"use strict";var r=e(57).forEach,o=e(58),i=e(39),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(30),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(20),o=e(45),i=e(48),u=e(8);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(40),o=e(29),i=e(13),u=e(12),c=e(43),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(d,h,y,m){for(var b,x,g=i(d),S=o(g),w=r(h,y,3),O=u(S.length),E=0,L=m||c,j=n?L(d,O):e||p?L(d,0):void 0;O>E;E++)if((v||E in S)&&(x=w(b=S[E],E,g),t))if(n)j[E]=x;else if(x)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:f.call(j,b)}else switch(t){case 4:return!1;case 7:f.call(j,b)}return l?-1:a||s?s:j}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6),filterOut:a(7)}},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(34);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},,,,,,,,function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,,,,,function(t,n,e){"use strict";var r=e(9),o=e(53);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(0),o=e(67),i=e(53),u=e(7);for(var c in o){var f=r[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){var r=e(9),o=e(5);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(6).f})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n),e.d(n,"DndPanel",(function(){return o}));e(74),e(100),e(75);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(n){var e=this,r=n.lf;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.lf=void 0,this.shapeList=void 0,this.panelEl=void 0,this.lf=r,this.lf.setPatternItems=function(t){e.shapeList=t}}var n,e,o;return n=t,(e=[{key:"render",value:function(t,n){var e=this;this.panelEl&&n.removeChild(this.panelEl),this.shapeList&&0!==this.shapeList.length&&(this.panelEl=document.createElement("div"),this.panelEl.className="lf-dndpanel",this.shapeList.forEach((function(t){e.panelEl.appendChild(e.createDndItem(t))})),n.appendChild(this.panelEl))}},{key:"createDndItem",value:function(t){var n=this,e=document.createElement("div");e.className=t.className?"lf-dnd-item ".concat(t.className):"lf-dnd-item";var r=document.createElement("div");if(r.className="lf-dnd-shape",t.icon&&(r.style.backgroundImage="url(".concat(t.icon,")")),e.appendChild(r),t.label){var o=document.createElement("div");o.innerText=t.label,o.className="lf-dnd-text",e.appendChild(o)}return e.onmousedown=function(){t.type&&n.lf.dnd.startDrag({type:t.type,properties:t.properties,text:t.text}),t.callback&&t.callback()},e}}])&&r(n.prototype,e),o&&r(n,o),t}();o.pluginName="DndPanel"}])}));