!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var e in r)("object"==typeof exports?exports:t)[e]=r[e]}}(window,(function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=182)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(54))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(0),o=r(32),i=r(2),u=r(27),c=r(34),f=r(59),a=o("wks"),s=e.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(5),o=r(31),i=r(8),u=r(22),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(5),o=r(6),i=r(15);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(0),o=r(26).f,i=r(7),u=r(14),c=r(18),f=r(51),a=r(38);t.exports=function(t,n){var r,s,l,p,d,y=t.target,v=t.global,x=t.stat;if(r=v?e:x?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(r,s))&&d.value:r[s],!a(v?s:y+(x?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},,function(t,n,r){var e=r(29),o=r(21);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(21);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(0),o=r(7),i=r(2),u=r(18),c=r(30),f=r(28),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var f,a=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(f=s(r)).source||(f.source=l.join("string"==typeof n?n:""))),t!==e?(a?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(0),o=r(7);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(18),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(52),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(32),o=r(27),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(5),o=r(47),i=r(15),u=r(11),c=r(22),f=r(2),a=r(31),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e,o,i,u=r(55),c=r(0),f=r(3),a=r(7),s=r(2),l=r(19),p=r(24),d=r(16),y=c.WeakMap;if(u){var v=l.state||(l.state=new y),x=v.get,h=v.has,g=v.set;e=function(t,n){return n.facade=t,g.call(v,t,n),n},o=function(t){return x.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var m=p("state");d[m]=!0,e=function(t,n){return n.facade=t,a(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(1),o=r(17),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(19),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(5),o=r(1),i=r(35);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(33),o=r(19);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.1",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(0),o=r(3),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(2),o=r(11),i=r(46).indexOf,u=r(16);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(17);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(5),o=r(1),i=r(2),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,l=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,l)}))}},,,function(t,n,r){var e=r(23),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n,r){var e=r(3),o=r(37),i=r(4)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},,function(t,n,r){var e=r(36),o=r(25).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(11),o=r(12),i=r(42),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e,o,i=r(0),u=r(68),c=i.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},,function(t,n,r){var e=r(2),o=r(56),i=r(26),u=r(6);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(0);t.exports=e},,function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(30),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(20),o=r(45),i=r(48),u=r(8);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},,,function(t,n,r){var e=r(34);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},,,,,function(t,n,r){var e=r(1),o=r(4),i=r(49),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},,,,function(t,n,r){var e=r(20);t.exports=e("navigator","userAgent")||""},,function(t,n,r){"use strict";var e=r(22),o=r(6),i=r(15);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},,,,,,,,,,,,function(t,n,r){"use strict";var e=r(9),o=r(1),i=r(37),u=r(3),c=r(13),f=r(12),a=r(70),s=r(43),l=r(64),p=r(4),d=r(49),y=p("isConcatSpreadable"),v=d>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),x=l("concat"),h=function(t){if(!u(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!v||!x},{concat:function(t){var n,r,e,o,i,u=c(this),l=s(u,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(h(i=-1===n?u:arguments[n])){if(p+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&a(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(l,p++,i)}return l.length=p,l}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";var e=r(9),o=r(3),i=r(37),u=r(42),c=r(12),f=r(11),a=r(70),s=r(4),l=r(64),p=r(39),d=l("slice"),y=p("slice",{ACCESSORS:!0,0:0,1:2}),v=s("species"),x=[].slice,h=Math.max;e({target:"Array",proto:!0,forced:!d||!y},{slice:function(t,n){var r,e,s,l=f(this),p=c(l.length),d=u(t,p),y=u(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(r=l.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[v])&&(r=void 0):r=void 0,r===Array||void 0===r))return x.call(l,d,y);for(e=new(void 0===r?Array:r)(h(y-d,0)),s=0;d<y;d++,s++)d in l&&a(e,s,l[d]);return e.length=s,e}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n),r.d(n,"InsertNodeInPolyline",(function(){return a}));var e;r(82),r(133);!function(t){t.HORIZONTAL="horizontal",t.VERTICAL="vertical"}(e||(e={}));var o=function(t,n,r){var e=t.x,o=t.y;return(e-n.x)*(e-r.x)<=0&&(o-n.y)*(o-r.y)<=0},i=function(t,n,r){var o=function(t){var n=t.x,r=t.y,e=t.width,o=t.height;return{minX:n-e/2,minY:r-o/2,maxX:n+e/2,maxY:r+o/2,x:n,y:r,width:e,height:o,centerX:n,centerY:r}}(t),i=function(t,n){var r;return t.x===n.x?r=e.VERTICAL:t.y===n.y&&(r=e.HORIZONTAL),r}(n,r),u=Math.max(n.x,r.x),c=Math.min(n.x,r.x),f=Math.max(n.y,r.y),a=Math.min(n.y,r.y),s=t.x,l=t.y,p=t.width,d=t.height;if(i===e.HORIZONTAL){if(n.y===l&&u>=o.maxX&&c<=o.minX)return{startCrossPoint:{x:n.x>r.x?s+p/2:s-p/2,y:l},endCrossPoint:{x:n.x>r.x?s-p/2:s+p/2,y:l}}}else if(i===e.VERTICAL&&n.x===t.x&&f>=o.maxY&&a<=o.minY)return{startCrossPoint:{x:s,y:n.y>r.y?l+d/2:l-d/2},endCrossPoint:{x:s,y:n.y>r.y?l-d/2:l+d/2}}},u=function(t,n){for(var r=t.x,e=t.y,u=n.pointsList,c=0;c<u.length-1;c++)if(o({x:r,y:e},u[c],u[c+1])){var f=i(t,u[c],u[c+1]);if(f)return{crossIndex:c+1,crossPoints:f}}return{crossIndex:-1,crossPoints:{startCrossPoint:{x:0,y:0},endCrossPoint:{x:0,y:0}}}};function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return f(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var a={pluginName:"insert-node-in-polyline",_lf:null,dndAdd:!0,dropAdd:!0,install:function(t){a._lf=t,this.eventHandler()},eventHandler:function(){var t=this;a.dndAdd&&a._lf.on("node:dnd-add",(function(t){var n=t.data;a.insetNode(n)})),a.dropAdd&&a._lf.on("node:drop",(function(n){for(var r=n.data,e=t._lf.graphModel.edges,o=r.id,i=!0,u=0;u<e.length;u++)if(e[u].sourceNodeId===o||e[u].targetNodeId===o){i=!1;break}i&&a.insetNode(r)}))},insetNode:function(t){for(var n=this._lf.graphModel.edges,r=this._lf.getNodeModel(t.id),e=0;e<n.length;e++){var o=u(r,n[e]),i=o.crossIndex,f=o.crossPoints;if(i>=0){var a=n[e],s=a.sourceNodeId,l=a.targetNodeId,p=a.id,d=a.type,y=a.pointsList;this._lf.createEdge({type:d,sourceNodeId:s,targetNodeId:t.id,pointsList:[].concat(c(y.slice(0,i)),[f.startCrossPoint])}),this._lf.createEdge({type:d,sourceNodeId:t.id,targetNodeId:l,pointsList:[f.endCrossPoint].concat(c(y.slice(i)))}),this._lf.deleteEdge(p);break}}}};n.default=a}])}));