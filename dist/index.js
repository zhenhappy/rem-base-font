!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["init-rem"]=e():t["init-rem"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,c=n(6),u=Object.prototype.propertyIsEnumerable,l=!u.call({toString:null},"toString"),a=u.call(function(){},"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(t){var e=t.constructor;return e&&e.prototype===t},s={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!s["$"+t]&&r.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{p(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),b=function(t){if("undefined"==typeof window||!y)return p(t);try{return p(t)}catch(t){return!1}},d=function(t){var e=null!==t&&"object"==typeof t,n="[object Function]"===o.call(t),i=c(t),u=e&&"[object String]"===o.call(t),p=[];if(!e&&!n&&!i)throw new TypeError("Object.keys called on a non-object");var s=a&&n;if(u&&t.length>0&&!r.call(t,0))for(var y=0;y<t.length;++y)p.push(String(y));if(i&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var g in t)s&&"prototype"===g||!r.call(t,g)||p.push(String(g));if(l)for(var j=b(t),O=0;O<f.length;++O)j&&"constructor"===f[O]||!r.call(t,f[O])||p.push(f[O]);return p};d.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var t=Object.keys;Object.keys=function(e){return t(c(e)?i.call(e):e)}}}else Object.keys=d;return Object.keys||d},t.exports=d},function(t,e,n){"use strict";var r=n(0),o=n(7),i="function"==typeof Symbol&&"symbol"==typeof Symbol(),c=Object.prototype.toString,u=function(t){return"function"==typeof t&&"[object Function]"===c.call(t)},l=Object.defineProperty&&function(){var t={};try{Object.defineProperty(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(t){return!1}}(),a=function(t,e,n,r){(!(e in t)||u(r)&&r())&&(l?Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n,writable:!0}):t[e]=n)},f=function(t,e){var n=arguments.length>2?arguments[2]:{},c=r(e);i&&(c=c.concat(Object.getOwnPropertySymbols(e))),o(c,function(r){a(t,r,e[r],n[r])})};f.supportsDescriptors=!!l,t.exports=f},function(t,e,n){"use strict";var r=n(0),o=n(8),i=function(t){return void 0!==t&&null!==t},c=n(10)(),u=Object,l=o.call(Function.call,Array.prototype.push),a=o.call(Function.call,Object.prototype.propertyIsEnumerable),f=c?Object.getOwnPropertySymbols:null;t.exports=function(t,e){if(!i(t))throw new TypeError("target must be an object");var n,o,p,s,y,b,d,g=u(t);for(n=1;n<arguments.length;++n){o=u(arguments[n]),s=r(o);var j=c&&(Object.getOwnPropertySymbols||f);if(j)for(y=j(o),p=0;p<y.length;++p)d=y[p],a(o,d)&&l(s,d);for(p=0;p<s.length;++p)d=s[p],b=o[d],a(o,d)&&(g[d]=b)}return g}},function(t,e,n){"use strict";var r=n(2),o=function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),n={},r=0;r<e.length;++r)n[e[r]]=e[r];var o=Object.assign({},n),i="";for(var c in o)i+=c;return t!==i},i=function(){if(!Object.assign||!Object.preventExtensions)return!1;var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1};t.exports=function(){return Object.assign?o()?r:i()?r:Object.assign:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||n(5),o=e.initRem=function(t){function e(){document.body?document.body.style.fontSize=t.bodyFontSize+"px":document.addEventListener("DOMContentLoaded",e,!1)}function n(){var e=t.baseFontSize*(t.clientWidth>t.maxWidth?t.maxWidth:t.clientWidth)/t.designWidth;document.documentElement.style.fontSize=e+"px"}t=r({clientWidth:document.documentElement.clientWidth,designWidth:375,maxWidth:500,bodyFontSize:14,baseFontSize:100},t),n(),e(),function(){document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("orientationchange"in window?"orientationchange":"resize",n,!1)}()};e.default=o},function(t,e,n){"use strict";var r=n(1),o=n(2),i=n(3),c=n(11),u=i();r(u,{implementation:o,getPolyfill:i,shim:c}),t.exports=u},function(t,e,n){"use strict";var r=Object.prototype.toString;t.exports=function(t){var e=r.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===r.call(t.callee)),n}},function(t,e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString;t.exports=function(t,e,o){if("[object Function]"!==r.call(e))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var c=0;c<i;c++)e.call(o,t[c],c,t);else for(var u in t)n.call(t,u)&&e.call(o,t[u],u,t)}},function(t,e,n){"use strict";var r=n(9);t.exports=Function.prototype.bind||r},function(t,e,n){"use strict";var r=Array.prototype.slice,o=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==o.call(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var n,i=r.call(arguments,1),c=function(){if(this instanceof n){var o=e.apply(this,i.concat(r.call(arguments)));return Object(o)===o?o:this}return e.apply(t,i.concat(r.call(arguments)))},u=Math.max(0,e.length-i.length),l=[],a=0;a<u;a++)l.push("$"+a);if(n=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(c),e.prototype){var f=function(){};f.prototype=e.prototype,n.prototype=new f,f.prototype=null}return n}},function(t,e,n){"use strict";var r=n(0);t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),n=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;t[e]=42;for(e in t)return!1;if(0!==r(t).length)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,e);if(42!==i.value||!0!==i.enumerable)return!1}return!0}},function(t,e,n){"use strict";var r=n(1),o=n(3);t.exports=function(){var t=o();return r(Object,{assign:t},{assign:function(){return Object.assign!==t}}),t}}])});