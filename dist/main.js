/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/clipboard-polyfill/build/clipboard-polyfill.promise.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/clipboard-polyfill/build/clipboard-polyfill.promise.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../dist/clipboard-polyfill.promise */ "./node_modules/clipboard-polyfill/dist/clipboard-polyfill.promise.js")


/***/ }),

/***/ "./node_modules/clipboard-polyfill/dist/clipboard-polyfill.promise.js":
/*!****************************************************************************!*\
  !*** ./node_modules/clipboard-polyfill/dist/clipboard-polyfill.promise.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {!function(t,e){ true?e():undefined}(0,function(){"use strict";function t(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}function e(t){return!(!t||void 0===t.length)}function n(){}function r(t){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this)}function o(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,r._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void a(e.promise,t)}i(e.promise,r)}else(1===t._state?i:a)(e.promise,t._value)})):t._deferreds.push(e)}function i(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof r)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void c(function(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,u(t)}catch(e){a(t,e)}}function a(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&r._immediateFn(function(){t._handled||r._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;n>e;e++)o(t,t._deferreds[e]);t._deferreds=null}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,i(e,t))},function(t){n||(n=!0,a(e,t))})}catch(t){if(n)return;n=!0,a(e,t)}}var f=setTimeout;r.prototype.catch=function(t){return this.then(null,t)},r.prototype.then=function(t,e){var r=new this.constructor(n);return o(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,r)),r},r.prototype.finally=t,r.all=function(t){return new r(function(n,r){function o(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var u=e.then;if("function"==typeof u)return void u.call(e,function(e){o(t,e)},r)}i[t]=e,0==--a&&n(i)}catch(t){r(t)}}if(!e(t))return r(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(t);if(0===i.length)return n([]);for(var a=i.length,u=0;i.length>u;u++)o(u,i[u])})},r.resolve=function(t){return t&&"object"==typeof t&&t.constructor===r?t:new r(function(e){e(t)})},r.reject=function(t){return new r(function(e,n){n(t)})},r.race=function(t){return new r(function(n,o){if(!e(t))return o(new TypeError("Promise.race accepts an array"));for(var i=0,a=t.length;a>i;i++)r.resolve(t[i]).then(n,o)})},r._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){f(t,0)},r._unhandledRejectionFn=function(t){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var s=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in s?s.Promise.prototype.finally||(s.Promise.prototype.finally=t):s.Promise=r}),function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})}function n(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var r=["text/plain","text/html"];var o=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),i=!0;var a=function(){function t(){this.m={}}return t.prototype.setData=function(t,e){i&&-1===r.indexOf(t)&&o("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[t]=e},t.prototype.getData=function(t){return this.m[t]},t.prototype.forEach=function(t){for(var e in this.m)t(this.m[e],e)},t}(),u=function(t){},c=!0;var f=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),s="text/plain";function l(t){u=t}function d(){c=!1,i=!1}function p(t){return e(this,void 0,void 0,function(){var e;return n(this,function(n){if(c&&!t.getData(s)&&f("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),j()){if(function(t){var e=t.getData(s);if(void 0!==e)return window.clipboardData.setData("Text",e);throw new Error("No `text/plain` value was specified.")}(t))return[2];throw new Error("Copying failed, possibly because the user rejected it.")}if(x(t))return u("regular execCopy worked"),[2];if(navigator.userAgent.indexOf("Edge")>-1)return u('UA "Edge" => assuming success'),[2];if(_(document.body,t))return u("copyUsingTempSelection worked"),[2];if(function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=_(e,t);return document.body.removeChild(e),n}(t))return u("copyUsingTempElem worked"),[2];if(void 0!==(e=t.getData(s))&&function(t){u("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(u("Using shadow DOM."),n=e.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=t,n.appendChild(r),document.body.appendChild(e),T(r);var o=document.execCommand("copy");return E(),document.body.removeChild(e),o}(e))return u("copyTextUsingDOM worked"),[2];throw new Error("Copy command failed.")})})}function h(t){return e(this,void 0,void 0,function(){return n(this,function(e){return navigator.clipboard&&navigator.clipboard.writeText?(u("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(t)]):[2,p(D(t))]})})}function v(){return e(this,void 0,void 0,function(){var t;return n(this,function(e){switch(e.label){case 0:return t=D,[4,y()];case 1:return[2,t.apply(void 0,[e.sent()])]}})})}function y(){return e(this,void 0,void 0,function(){return n(this,function(t){if(navigator.clipboard&&navigator.clipboard.readText)return u("Using `navigator.clipboard.readText()`."),[2,navigator.clipboard.readText()];if(j())return u("Reading text using IE strategy."),[2,C()];throw new Error("Read is not supported in your browser.")})})}var m=!1;function w(){m||(c&&f('The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'),m=!0)}var b={DT:a,setDebugLog:function(t){return w(),l(t)},suppressWarnings:function(){return w(),d()},write:function(t){return e(this,void 0,void 0,function(){return n(this,function(e){return w(),[2,p(t)]})})},writeText:function(t){return e(this,void 0,void 0,function(){return n(this,function(e){return w(),[2,h(t)]})})},read:function(){return e(this,void 0,void 0,function(){return n(this,function(t){return w(),[2,v()]})})},readText:function(){return e(this,void 0,void 0,function(){return n(this,function(t){return w(),[2,y()]})})}},g=function(){this.success=!1};function x(t){var e=new g,n=function(t,e,n){u("listener called"),t.success=!0,e.forEach(function(e,r){var o=n.clipboardData;o.setData(r,e),r===s&&o.getData(r)!==e&&(u("setting text/plain failed"),t.success=!1)}),n.preventDefault()}.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function _(t,e){T(t);var n=x(e);return E(),n}function T(t){var e=document.getSelection();if(e){var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}function E(){var t=document.getSelection();t&&t.removeAllRanges()}function D(t){var e=new a;return e.setData(s,t),e}function j(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}function C(){return e(this,void 0,void 0,function(){var t;return n(this,function(e){if(""===(t=window.clipboardData.getData("Text")))throw new Error("Empty clipboard or could not read plain text from clipboard");return[2,t]})})}t.DT=a,t.default=b,t.read=v,t.readText=y,t.setDebugLog=l,t.suppressWarnings=d,t.write=p,t.writeText=h,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=clipboard-polyfill.promise.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/scss/main.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/scss/main.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes morph {\n  0% {\n    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%; }\n  100% {\n    border-radius: 40% 60%; } }\n\n@keyframes spin {\n  to {\n    transform: rotate(1turn); } }\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  background: #25CEA7;\n  color: white;\n  font-family: 'fantasy', fantasy;\n  overflow-x: hidden; }\n\n.alert {\n  position: fixed;\n  left: 50%;\n  top: 30%;\n  transform: translate(-50%, 0);\n  color: #000022;\n  font-size: 1.5rem;\n  pointer-events: none;\n  z-index: 100;\n  padding: 1em;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 0.5em;\n  white-space: nowrap; }\n\n.footer {\n  background: rgba(255, 255, 255, 0.15);\n  min-height: 2rem;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.875rem;\n  line-height: 1.2rem;\n  padding: 0.4rem 0; }\n  .footer__heart {\n    padding: 0 0.125em;\n    color: #3023AE; }\n  .footer a {\n    text-decoration: none;\n    color: rgba(255, 255, 255, 0.8); }\n\n.header {\n  text-align: center; }\n  .header__links {\n    margin: 0.5em auto 0;\n    padding-top: 0.25em;\n    max-width: 26.75rem; }\n    .header__links a {\n      font-size: 0.75rem;\n      color: #FF0099;\n      text-decoration: none;\n      opacity: 0.8;\n      transition: opacity 0.3s ease-out; }\n      .header__links a svg {\n        width: 1.35em;\n        height: 1.35em;\n        fill: #000022;\n        vertical-align: -0.3em; }\n      .header__links a:hover {\n        opacity: 1; }\n  .header__button {\n    text-align: center;\n    display: block;\n    border-radius: 2px;\n    background: #000022;\n    border: none;\n    color: rgba(255, 255, 255, 0.9);\n    padding: 0.5em 1em;\n    font-weight: italic;\n    width: 100%;\n    transition: background 0.4s ease-in;\n    will-change: background;\n    cursor: pointer; }\n    .header__button:hover {\n      background: #3023AE; }\n\nh1 {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  color: rgba(50, 255, 0, 0.4);\n  opacity: 0.9;\n  margin: 0 0 0.125em;\n  letter-spacing: 0.01em;\n  text-align: center; }\n  @media screen and (min-height: 36.25rem) and (min-width: 25rem) {\n    h1 {\n      font-size: 2rem; } }\n\n.generator {\n  width: 60vmin;\n  height: 60vmin;\n  border: 2px dashed rgba(255, 255, 255, 0.4);\n  position: relative;\n  z-index: 3;\n  margin-left: auto;\n  margin-right: auto; }\n  @media screen and (min-width: 31.875rem) {\n    .generator {\n      width: 50vmin;\n      height: 50vmin; } }\n  .generator__shape {\n    width: 100%;\n    height: 100%;\n    background: #000022;\n    background-image: linear-gradient(45deg, #3023AE 0%, #000022 100%);\n    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n    box-shadow: -10vmin 10vmin 0 rgba(255, 255, 255, 0.07); }\n    .generator__shape--8v {\n      border-radius: 10%;\n      background-image: linear-gradient(-115deg, #FFFFFF 0%, rgba(37, 206, 167, 0) 40%, rgba(0, 255, 255, 0) 60%, #0ff 100%), linear-gradient(45deg, #3023AE 0%, #000022 100%); }\n  .generator__handle {\n    display: block;\n    position: absolute;\n    cursor: pointer;\n    width: 2.5rem;\n    height: 2.5rem; }\n    .generator__handle:before {\n      content: \"\";\n      position: absolute;\n      width: 1rem;\n      height: 1rem;\n      left: 0.75rem;\n      top: 0.75rem;\n      background: #FFFFFF;\n      border: 2px solid #000022;\n      transition: box-shadow 0.2s ease-out;\n      will-change: box-shadow; }\n    .generator__handle--second:before {\n      background: #3023AE;\n      border: 2px solid #FFFFFF; }\n    .generator__handle--third:before {\n      background: #000022;\n      border: 2px solid #FFFFFF; }\n    .generator__handle--fourth:before {\n      background: #0ff; }\n    .generator__handle--8v.active:before, .generator__handle--8v:hover:before {\n      box-shadow: 0 0 0 4px #FFF;\n      border: 2px solid #000022; }\n    .generator__handle:not(.generator__handle--8v).active:before, .generator__handle:not(.generator__handle--8v):hover:before {\n      background: #0ff;\n      box-shadow: 0 0 0 4px #FFF;\n      border: 2px solid #000022; }\n  .generator #top {\n    top: -1.25rem;\n    left: 30%;\n    transform: translateX(-50%); }\n    .generator #top.generator__handle--8v {\n      left: 10%; }\n  .generator #bottom {\n    bottom: -1.25rem;\n    left: 30%;\n    transform: translateX(-50%); }\n    .generator #bottom.generator__handle--8v {\n      left: 10%; }\n  .generator #left {\n    left: -1.25rem;\n    top: 30%;\n    transform: translateY(-50%); }\n    .generator #left.generator__handle--8v {\n      top: 10%; }\n  .generator #right {\n    right: -1.25rem;\n    top: 30%;\n    transform: translateY(-50%); }\n    .generator #right.generator__handle--8v {\n      top: 10%; }\n  .generator #topRight {\n    top: -1.25rem;\n    left: 90%;\n    transform: translateX(-50%); }\n  .generator #bottomRight {\n    bottom: -1.25rem;\n    left: 90%;\n    transform: translateX(-50%); }\n  .generator #leftBottom {\n    left: -1.25rem;\n    top: 90%;\n    transform: translateY(-50%); }\n  .generator #rightBottom {\n    right: -1.25rem;\n    top: 90%;\n    transform: translateY(-50%); }\n\n.output {\n  width: 90%;\n  text-align: center;\n  margin-top: 1.5em;\n  font-size: 1.125rem;\n  line-height: 1.5;\n  margin-left: auto;\n  margin-right: auto; }\n  .output__label {\n    flex: 0 0 auto;\n    margin-bottom: 0.5em;\n    margin-right: 1em;\n    color: rgba(255, 255, 255, 0.9); }\n  .output__code {\n    display: block;\n    font-family: 'Ubuntu Mono', monospace;\n    flex-grow: 1;\n    color: #000022;\n    background: #ccc;\n    padding: 0.5em 0.625em;\n    border-radius: 2px;\n    margin-bottom: 0.5em; }\n  .output__button {\n    display: block;\n    border-radius: 2px;\n    background: #000022;\n    border: none;\n    color: rgba(255, 255, 255, 0.9);\n    padding: 0.5em 1em;\n    font-weight: bold;\n    width: 100%;\n    transition: background 0.4s ease-in;\n    will-change: background;\n    cursor: pointer; }\n    .output__button:hover {\n      background: #3023AE; }\n  @media screen and (min-width: 30.875rem) {\n    .output {\n      font-size: 1.25rem; }\n      .output__code {\n        border-radius: 2px 0 0 2px;\n        flex-grow: 1;\n        margin-bottom: 0; }\n      .output__button {\n        flex-shrink: 1;\n        border-radius: 0 2px 2px 0;\n        width: auto;\n        text-transform: uppercase;\n        letter-spacing: 0.1em; } }\n  @media screen and (min-width: 43rem) {\n    .output {\n      display: flex;\n      justify-content: stretch;\n      align-items: baseline;\n      max-width: 39rem; } }\n\n.container {\n  min-height: calc(100vh - 2rem);\n  padding-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-evenly;\n  overflow: hidden;\n  position: relative; }\n  .container::before, .container::after {\n    content: \"\";\n    width: 70vmax;\n    height: 70vmax;\n    position: absolute;\n    background: rgba(255, 255, 255, 0.07);\n    left: -20vmin;\n    top: -20vmin;\n    animation: morph 15s linear infinite alternate, spin 20s linear infinite;\n    z-index: 1;\n    will-change: border-radius, transform;\n    transform-origin: 55% 55%;\n    pointer-events: none; }\n  .container::after {\n    width: 70vmin;\n    height: 70vmin;\n    left: auto;\n    right: -10vmin;\n    top: auto;\n    bottom: 0;\n    animation: morph 10s linear infinite alternate, spin 26s linear infinite reverse;\n    transform-origin: 20% 20%; }\n\n.advanced {\n  width: 90%;\n  max-width: 39rem;\n  text-align: left;\n  margin: 0.5em auto;\n  position: relative;\n  z-index: 5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.9); }\n  @media screen and (min-width: 560px) {\n    .advanced {\n      font-size: 1.25rem; } }\n  .advanced__switch {\n    padding: 0.5em 0;\n    flex-shrink: 0;\n    margin-bottom: 0.5em; }\n  .advanced__settings {\n    display: none; }\n    .advanced__settings.visible {\n      display: flex;\n      justify-content: space-between;\n      flex-direction: column; }\n      @media screen and (min-width: 31.25rem) {\n        .advanced__settings.visible {\n          flex-direction: row; } }\n  .advanced__check {\n    visibility: hidden;\n    width: 0;\n    height: 0;\n    display: block;\n    border: none; }\n  .advanced .input-group {\n    align-items: center;\n    margin-left: 1em;\n    margin-bottom: 0.5em;\n    justify-content: space-between;\n    display: flex; }\n    .advanced .input-group label {\n      display: block;\n      margin-right: 0.5em; }\n    .advanced .input-group input[type=\"number\"] {\n      width: 4.5rem; }\n  .advanced__check:checked + .advanced__trigger span:after {\n    background: #FF0099;\n    left: 1.15em;\n    border-radius: 37% 63% 55% 45% / 25% 50% 50% 75%; }\n  .advanced__trigger {\n    display: block;\n    line-height: 1;\n    cursor: pointer; }\n    .advanced__trigger span {\n      display: inline-block;\n      width: 2em;\n      height: 1em;\n      border-radius: 0.5em;\n      background: rgba(255, 255, 255, 0.8);\n      vertical-align: bottom;\n      position: relative; }\n      @media screen and (min-width: 43rem) {\n        .advanced__trigger span {\n          margin-left: 2rem; } }\n      .advanced__trigger span:after {\n        content: \"\";\n        position: absolute;\n        width: 0.7em;\n        height: 0.7em;\n        border-radius: 50% 56% 29% 70% / 50% 73% 38% 50%;\n        background: #000022;\n        position: absolute;\n        left: 0.15em;\n        top: 0.15em;\n        transition: left 0.3s ease-out, background 0.3s ease-out, border-radius 0.4s ease-in-out; }\n\n.input-group input {\n  border-radius: 2px;\n  border: none;\n  background: #FFFFFF;\n  font-family: 'Ubuntu Mono', monospace;\n  color: #000022;\n  padding: 0.5em 0.625em; }\n\n@media screen and (min-width: 30.85rem) {\n  .input-group {\n    display: flex;\n    align-items: stretch;\n    flex-grow: 1;\n    margin-bottom: 0; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./public/js/AdjustableBox.js":
/*!************************************!*\
  !*** ./public/js/AdjustableBox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdjustableBox; });
/* harmony import */ var clipboard_polyfill_build_clipboard_polyfill_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard-polyfill/build/clipboard-polyfill.promise */ "./node_modules/clipboard-polyfill/build/clipboard-polyfill.promise.js");
/* harmony import */ var clipboard_polyfill_build_clipboard_polyfill_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard_polyfill_build_clipboard_polyfill_promise__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AdjustableBox = /*#__PURE__*/function () {
  function AdjustableBox() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$shapeElemId = _ref.shapeElemId,
        shapeElemId = _ref$shapeElemId === void 0 ? 'shape' : _ref$shapeElemId,
        _ref$generatorElemId = _ref.generatorElemId,
        generatorElemId = _ref$generatorElemId === void 0 ? 'code' : _ref$generatorElemId,
        _ref$copyCodeId = _ref.copyCodeId,
        copyCodeId = _ref$copyCodeId === void 0 ? 'copy' : _ref$copyCodeId,
        _ref$copiedCodeId = _ref.copiedCodeId,
        copiedCodeId = _ref$copiedCodeId === void 0 ? 'clipboard_copied' : _ref$copiedCodeId,
        _ref$boxContainerId = _ref.boxContainerId,
        boxContainerId = _ref$boxContainerId === void 0 ? 'box' : _ref$boxContainerId,
        _ref$widthInputId = _ref.widthInputId,
        widthInputId = _ref$widthInputId === void 0 ? 'width' : _ref$widthInputId,
        _ref$heightInputId = _ref.heightInputId,
        heightInputId = _ref$heightInputId === void 0 ? 'height' : _ref$heightInputId,
        _ref$enableAdvancedId = _ref.enableAdvancedId,
        enableAdvancedId = _ref$enableAdvancedId === void 0 ? 'enable-advanced' : _ref$enableAdvancedId,
        _ref$initState = _ref.initState,
        initState = _ref$initState === void 0 ? null : _ref$initState,
        moveableElems = _ref.moveableElems;

    _classCallCheck(this, AdjustableBox);

    this.generatorElem = document.getElementById(generatorElemId);
    this.shapeElem = document.getElementById(shapeElemId);
    this.copiedCode = document.getElementById(copiedCodeId);
    this.boxContainer = document.getElementById(boxContainerId);
    this.widthInput = document.getElementById(widthInputId);
    this.heightInput = document.getElementById(heightInputId);

    this.widthInput.onchange = function () {
      _this.updateState(_this.widthInput.value, 'width');
    };

    this.heightInput.onchange = function () {
      _this.updateState(_this.heightInput.value, 'height');
    };

    this.enableAdvanced = document.getElementById(enableAdvancedId);
    this.enableAdvanced.onclick = this.enableAdvancedOnClick.bind(this);
    this.initState(initState);
    this.initAdvanced();
    this.handles = this.initHandles(moveableElems);
    document.getElementById(copyCodeId).onclick = this.setClipboard.bind(this);
  }

  _createClass(AdjustableBox, [{
    key: "initHandles",
    value: function initHandles(moveableElems) {
      throw new Error('You have to implement the method initHandles!');
    }
  }, {
    key: "updateBorderRadius",
    value: function updateBorderRadius() {
      throw new Error('You have to implement the method updateBorderRadius!');
    }
  }, {
    key: "initState",
    value: function initState(state) {
      throw new Error('You have to implement the method initState!');
    }
  }, {
    key: "initAdvanced",
    value: function initAdvanced() {
      if (this.state.width !== '' && this.state.height !== '') {
        this.enableAdvanced.checked = true;
        document.getElementById('dimension-input').classList.add('visible');
      }
    }
  }, {
    key: "enableAdvancedOnClick",
    value: function enableAdvancedOnClick(e) {
      if (this.enableAdvanced.checked) {
        document.getElementById('dimension-input').classList.add('visible');
        this.state.width = this.boxContainer.offsetWidth;
        this.state.height = this.boxContainer.offsetHeight;
        this.updateUI();
      } else {
        document.getElementById('dimension-input').classList.remove('visible');
        this.updateState('', 'width');
        this.updateState('', 'height');
        this.boxContainer.style.height = '';
        this.boxContainer.style.width = '';
      }
    }
  }, {
    key: "setClipboard",
    value: function setClipboard() {
      var _this2 = this;

      clipboard_polyfill_build_clipboard_polyfill_promise__WEBPACK_IMPORTED_MODULE_0___default.a.writeText(this.generatorElem.innerHTML).then(function () {
        _this2.copiedCode.innerHTML = '<div class="alert">Copied to clipboard</div>';
      }, function () {
        _this2.copiedCode.innerHTML = '<div class="alert">Not Supported</div>';
      });
      setTimeout(function () {
        _this2.copiedCode.innerHTML = '';
      }, 2000);
    }
  }, {
    key: "setUrlHash",
    value: function setUrlHash(hash) {
      if (window.history && 'pushState' in window.history) {
        history.pushState(null, null, '#' + hash);
      } else {
        window.location.hash = hash;
      }
    }
  }, {
    key: "updateState",
    value: function updateState(val, key) {
      this.state[key] = val;
      this.updateUI();
    }
  }, {
    key: "updateUI",
    value: function updateUI() {
      this.updateBorderRadius();
      this.updateBox();
    }
  }, {
    key: "updateBox",
    value: function updateBox() {
      if (!this.enableAdvanced.checked) {
        return;
      }

      var styleHeight = this.state.height == '' ? '' : this.state.height + 'px';
      var styleWidth = this.state.width == '' ? '' : this.state.width + 'px';
      this.boxContainer.style.height = styleHeight;
      this.boxContainer.style.width = styleWidth;
      this.heightInput.value = this.state.height;
      this.widthInput.value = this.state.width;
    }
  }, {
    key: "saveUrlParams",
    value: function saveUrlParams() {
      throw new Error('You have to implement the method saveUrlParams!');
    }
  }], [{
    key: "loadUrlParams",
    value: function loadUrlParams(url) {
      var regex = /#(\d\d?|100)\.(\d\d?|100)\.(\d\d?|100)\.(\d\d?|100)-(?:(\d\d?|100)\.(\d\d?|100)\.(\d\d?|100)\.(\d\d?|100))?-(\d*).(\d*)/gm;
      var paramsToAttribute = ['left', 'top', 'right', 'bottom', 'leftBottom', 'topRight', 'rightBottom', 'bottomRight', 'height', 'width'];
      var attributes = {};
      var m;

      if (!regex.test(url)) {
        return null;
      }

      regex.lastIndex = 0;

      while ((m = regex.exec(url)) !== null) {
        m.forEach(function (match, groupIndex) {
          if (groupIndex != 0) {
            attributes[paramsToAttribute[groupIndex - 1]] = match;
          }
        });
      }

      return attributes;
    }
  }]);

  return AdjustableBox;
}();



/***/ }),

/***/ "./public/js/SimpleControlBox.js":
/*!***************************************!*\
  !*** ./public/js/SimpleControlBox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleControlBox; });
/* harmony import */ var _AdjustableBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdjustableBox */ "./public/js/AdjustableBox.js");
/* harmony import */ var _movable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movable */ "./public/js/movable.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SimpleControlBox = /*#__PURE__*/function (_AdjustableBox) {
  _inherits(SimpleControlBox, _AdjustableBox);

  var _super = _createSuper(SimpleControlBox);

  function SimpleControlBox() {
    _classCallCheck(this, SimpleControlBox);

    return _super.apply(this, arguments);
  }

  _createClass(SimpleControlBox, [{
    key: "initState",
    value: function initState(state) {
      var defaultState = {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
        width: '',
        height: '',
        advancedMode: false
      };
      this.state = state == null ? defaultState : state;
    }
  }, {
    key: "initHandles",
    value: function initHandles(moveableElems) {
      return {
        left: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.left, this.updateState.bind(this), 'y', this.state.left, this.saveUrlParams.bind(this)),
        right: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.right, this.updateState.bind(this), 'y', this.state.right, this.saveUrlParams.bind(this)),
        top: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.top, this.updateState.bind(this), 'x', this.state.top, this.saveUrlParams.bind(this)),
        bottom: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.bottom, this.updateState.bind(this), 'x', this.state.bottom, this.saveUrlParams.bind(this))
      };
    }
  }, {
    key: "updateBorderRadius",
    value: function updateBorderRadius() {
      var brd = this.state.top + '% ';
      brd += 100 - this.state.top + '% ';
      brd += 100 - this.state.bottom + '% ';
      brd += this.state.bottom + '% / ';
      brd += this.state.left + '% ';
      brd += this.state.right + '% ';
      brd += 100 - this.state.right + '% ';
      brd += 100 - this.state.left + '% ';
      this.shapeElem.style['border-radius'] = brd;
      this.generatorElem.innerHTML = brd;
    }
  }, {
    key: "saveUrlParams",
    value: function saveUrlParams() {
      var _this$state = this.state,
          left = _this$state.left,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          width = _this$state.width,
          height = _this$state.height;
      var hash = "".concat(left, ".").concat(top, ".").concat(right, ".").concat(bottom, "--").concat(height, ".").concat(width);
      this.setUrlHash(hash);
    }
  }]);

  return SimpleControlBox;
}(_AdjustableBox__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./public/js/movable.js":
/*!******************************!*\
  !*** ./public/js/movable.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movable; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Movable = /*#__PURE__*/function () {
  function Movable(elem, onChange) {
    var axis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';
    var initPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
    var onDragEnd = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};

    _classCallCheck(this, Movable);

    this.axis = axis;
    this.pos = initPosition;
    this.elem = elem;
    this.onChange = onChange;
    this.onDragEnd = onDragEnd;
    this.elem.onmousedown = this.dragMouseDown.bind(this);
    this.elem.ontouchstart = this.dragMouseDown.bind(this);
    this.setInitPos(initPosition);
    this.onChange(this.pos, this.elem.id);
  }

  _createClass(Movable, [{
    key: "dragMouseDown",
    value: function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      this.currentSpan = e.target;
      this.currentSpan.classList.add('active');
      document.onmouseup = this.closeDragElement.bind(this);
      document.ontouchend = this.closeDragElement.bind(this);
      document.onmousemove = this.elementDrag.bind(this);
      document.ontouchmove = this.elementDrag.bind(this);
    }
  }, {
    key: "elementDrag",
    value: function elementDrag(e) {
      e = e || window.event;

      if (typeof TouchEvent !== 'undefined' && e instanceof TouchEvent) {
        var touchobj = e.changedTouches[0]; // first finger

        this.setPos(touchobj.clientX, touchobj.clientY);
      } else {
        this.setPos(e.clientX, e.clientY);
      }
    }
  }, {
    key: "setInitPos",
    value: function setInitPos(pos) {
      if (this.axis == 'x') {
        this.elem.style.left = pos + '%';
      } else {
        this.elem.style.top = pos + '%';
      }
    }
  }, {
    key: "setPos",
    value: function setPos(_posX, _posY) {
      var boxRect = this.elem.parentNode.getBoundingClientRect();

      if (this.axis == 'x') {
        this.pos = this.valBetween(((_posX - 5 - boxRect['left']).toFixed(0) * 100 / boxRect['width']).toFixed(0), 0, 100);
        this.elem.style.left = this.pos + '%';
      } else {
        this.pos = this.valBetween(((_posY - 5 - boxRect['top']).toFixed(0) * 100 / boxRect['height']).toFixed(0), 0, 100);
        this.elem.style.top = this.pos + '%';
      }

      this.onChange(this.pos, this.elem.id);
    }
  }, {
    key: "closeDragElement",
    value: function closeDragElement() {
      this.currentSpan.classList.remove('active');
      this.onDragEnd();
      document.onmouseup = null;
      document.onmousemove = null;
      document.ontouchend = null;
      document.ontouchmove = null;
    }
  }, {
    key: "valBetween",
    value: function valBetween(v, min, max) {
      return Math.min(max, Math.max(min, v));
    }
  }]);

  return Movable;
}();



/***/ }),

/***/ "./public/script.js":
/*!**************************!*\
  !*** ./public/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./public/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_SimpleControlBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/SimpleControlBox */ "./public/js/SimpleControlBox.js");


var movables = {
  left: document.getElementById('left'),
  right: document.getElementById('right'),
  bottom: document.getElementById('bottom'),
  top: document.getElementById('top')
};
var params = _js_SimpleControlBox__WEBPACK_IMPORTED_MODULE_1__["default"].loadUrlParams(window.location.href);
var myBox = new _js_SimpleControlBox__WEBPACK_IMPORTED_MODULE_1__["default"]({
  moveableElems: movables,
  initState: params
});

/***/ }),

/***/ "./public/scss/main.scss":
/*!*******************************!*\
  !*** ./public/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC1wb2x5ZmlsbC9idWlsZC9jbGlwYm9hcmQtcG9seWZpbGwucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkLXBvbHlmaWxsL2Rpc3QvY2xpcGJvYXJkLXBvbHlmaWxsLnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvQWRqdXN0YWJsZUJveC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvU2ltcGxlQ29udHJvbEJveC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbW92YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zY3NzL21haW4uc2Nzcz9kY2U2Il0sIm5hbWVzIjpbIkFkanVzdGFibGVCb3giLCJzaGFwZUVsZW1JZCIsImdlbmVyYXRvckVsZW1JZCIsImNvcHlDb2RlSWQiLCJjb3BpZWRDb2RlSWQiLCJib3hDb250YWluZXJJZCIsIndpZHRoSW5wdXRJZCIsImhlaWdodElucHV0SWQiLCJlbmFibGVBZHZhbmNlZElkIiwiaW5pdFN0YXRlIiwibW92ZWFibGVFbGVtcyIsImdlbmVyYXRvckVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hhcGVFbGVtIiwiY29waWVkQ29kZSIsImJveENvbnRhaW5lciIsIndpZHRoSW5wdXQiLCJoZWlnaHRJbnB1dCIsIm9uY2hhbmdlIiwidXBkYXRlU3RhdGUiLCJ2YWx1ZSIsImVuYWJsZUFkdmFuY2VkIiwib25jbGljayIsImVuYWJsZUFkdmFuY2VkT25DbGljayIsImJpbmQiLCJpbml0QWR2YW5jZWQiLCJoYW5kbGVzIiwiaW5pdEhhbmRsZXMiLCJzZXRDbGlwYm9hcmQiLCJFcnJvciIsInN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwidXBkYXRlVUkiLCJyZW1vdmUiLCJzdHlsZSIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImlubmVySFRNTCIsInRoZW4iLCJzZXRUaW1lb3V0IiwiaGFzaCIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsb2NhdGlvbiIsInZhbCIsImtleSIsInVwZGF0ZUJvcmRlclJhZGl1cyIsInVwZGF0ZUJveCIsInN0eWxlSGVpZ2h0Iiwic3R5bGVXaWR0aCIsInVybCIsInJlZ2V4IiwicGFyYW1zVG9BdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwibSIsInRlc3QiLCJsYXN0SW5kZXgiLCJleGVjIiwiZm9yRWFjaCIsIm1hdGNoIiwiZ3JvdXBJbmRleCIsIlNpbXBsZUNvbnRyb2xCb3giLCJkZWZhdWx0U3RhdGUiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhZHZhbmNlZE1vZGUiLCJNb3ZhYmxlIiwic2F2ZVVybFBhcmFtcyIsImJyZCIsInNldFVybEhhc2giLCJlbGVtIiwib25DaGFuZ2UiLCJheGlzIiwiaW5pdFBvc2l0aW9uIiwib25EcmFnRW5kIiwicG9zIiwib25tb3VzZWRvd24iLCJkcmFnTW91c2VEb3duIiwib250b3VjaHN0YXJ0Iiwic2V0SW5pdFBvcyIsImlkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRTcGFuIiwidGFyZ2V0Iiwib25tb3VzZXVwIiwiY2xvc2VEcmFnRWxlbWVudCIsIm9udG91Y2hlbmQiLCJvbm1vdXNlbW92ZSIsImVsZW1lbnREcmFnIiwib250b3VjaG1vdmUiLCJUb3VjaEV2ZW50IiwidG91Y2hvYmoiLCJjaGFuZ2VkVG91Y2hlcyIsInNldFBvcyIsImNsaWVudFgiLCJjbGllbnRZIiwiX3Bvc1giLCJfcG9zWSIsImJveFJlY3QiLCJwYXJlbnROb2RlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidmFsQmV0d2VlbiIsInRvRml4ZWQiLCJ2IiwibWluIiwibWF4IiwiTWF0aCIsIm1vdmFibGVzIiwicGFyYW1zIiwibG9hZFVybFBhcmFtcyIsImhyZWYiLCJteUJveCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Es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RUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQzdGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUNHLFFBQVAsQ0FBZ0JzRSxJQUEvQyxDQUFiO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLElBQUlyRCw0REFBSixDQUFxQjtBQUFDNUQsZUFBYSxFQUFFNkcsUUFBaEI7QUFBMEI5RyxXQUFTLEVBQUUrRztBQUFyQyxDQUFyQixDQUFaLEM7Ozs7Ozs7Ozs7O0FDVkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywrTUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9zY3JpcHQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9kaXN0L2NsaXBib2FyZC1wb2x5ZmlsbC5wcm9taXNlXCIpXG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTplKCl9KDAsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3ZhciBlPXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihuKXtyZXR1cm4gZS5yZXNvbHZlKHQoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBufSl9LGZ1bmN0aW9uKG4pe3JldHVybiBlLnJlc29sdmUodCgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGUucmVqZWN0KG4pfSl9KX1mdW5jdGlvbiBlKHQpe3JldHVybiEoIXR8fHZvaWQgMD09PXQubGVuZ3RoKX1mdW5jdGlvbiBuKCl7fWZ1bmN0aW9uIHIodCl7aWYoISh0aGlzIGluc3RhbmNlb2YgcikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT0wLHRoaXMuX2hhbmRsZWQ9ITEsdGhpcy5fdmFsdWU9dm9pZCAwLHRoaXMuX2RlZmVycmVkcz1bXSxjKHQsdGhpcyl9ZnVuY3Rpb24gbyh0LGUpe2Zvcig7Mz09PXQuX3N0YXRlOyl0PXQuX3ZhbHVlOzAhPT10Ll9zdGF0ZT8odC5faGFuZGxlZD0hMCxyLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3ZhciBuPTE9PT10Ll9zdGF0ZT9lLm9uRnVsZmlsbGVkOmUub25SZWplY3RlZDtpZihudWxsIT09bil7dmFyIHI7dHJ5e3I9bih0Ll92YWx1ZSl9Y2F0Y2godCl7cmV0dXJuIHZvaWQgYShlLnByb21pc2UsdCl9aShlLnByb21pc2Uscil9ZWxzZSgxPT09dC5fc3RhdGU/aTphKShlLnByb21pc2UsdC5fdmFsdWUpfSkpOnQuX2RlZmVycmVkcy5wdXNoKGUpfWZ1bmN0aW9uIGkodCxlKXt0cnl7aWYoZT09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkpe3ZhciBuPWUudGhlbjtpZihlIGluc3RhbmNlb2YgcilyZXR1cm4gdC5fc3RhdGU9Myx0Ll92YWx1ZT1lLHZvaWQgdSh0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiB2b2lkIGMoZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt0LmFwcGx5KGUsYXJndW1lbnRzKX19KG4sZSksdCl9dC5fc3RhdGU9MSx0Ll92YWx1ZT1lLHUodCl9Y2F0Y2goZSl7YSh0LGUpfX1mdW5jdGlvbiBhKHQsZSl7dC5fc3RhdGU9Mix0Ll92YWx1ZT1lLHUodCl9ZnVuY3Rpb24gdSh0KXsyPT09dC5fc3RhdGUmJjA9PT10Ll9kZWZlcnJlZHMubGVuZ3RoJiZyLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3QuX2hhbmRsZWR8fHIuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHQuX3ZhbHVlKX0pO2Zvcih2YXIgZT0wLG49dC5fZGVmZXJyZWRzLmxlbmd0aDtuPmU7ZSsrKW8odCx0Ll9kZWZlcnJlZHNbZV0pO3QuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIGModCxlKXt2YXIgbj0hMTt0cnl7dChmdW5jdGlvbih0KXtufHwobj0hMCxpKGUsdCkpfSxmdW5jdGlvbih0KXtufHwobj0hMCxhKGUsdCkpfSl9Y2F0Y2godCl7aWYobilyZXR1cm47bj0hMCxhKGUsdCl9fXZhciBmPXNldFRpbWVvdXQ7ci5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfSxyLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKHQsZSl7dmFyIHI9bmV3IHRoaXMuY29uc3RydWN0b3Iobik7cmV0dXJuIG8odGhpcyxuZXcgZnVuY3Rpb24odCxlLG4pe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMucHJvbWlzZT1ufSh0LGUscikpLHJ9LHIucHJvdG90eXBlLmZpbmFsbHk9dCxyLmFsbD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IHIoZnVuY3Rpb24obixyKXtmdW5jdGlvbiBvKHQsZSl7dHJ5e2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkpe3ZhciB1PWUudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1KXJldHVybiB2b2lkIHUuY2FsbChlLGZ1bmN0aW9uKGUpe28odCxlKX0scil9aVt0XT1lLDA9PS0tYSYmbihpKX1jYXRjaCh0KXtyKHQpfX1pZighZSh0KSlyZXR1cm4gcihuZXcgVHlwZUVycm9yKFwiUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheVwiKSk7dmFyIGk9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCk7aWYoMD09PWkubGVuZ3RoKXJldHVybiBuKFtdKTtmb3IodmFyIGE9aS5sZW5ndGgsdT0wO2kubGVuZ3RoPnU7dSsrKW8odSxpW3VdKX0pfSxyLnJlc29sdmU9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yPT09cj90Om5ldyByKGZ1bmN0aW9uKGUpe2UodCl9KX0sci5yZWplY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyByKGZ1bmN0aW9uKGUsbil7bih0KX0pfSxyLnJhY2U9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyByKGZ1bmN0aW9uKG4sbyl7aWYoIWUodCkpcmV0dXJuIG8obmV3IFR5cGVFcnJvcihcIlByb21pc2UucmFjZSBhY2NlcHRzIGFuIGFycmF5XCIpKTtmb3IodmFyIGk9MCxhPXQubGVuZ3RoO2E+aTtpKyspci5yZXNvbHZlKHRbaV0pLnRoZW4obixvKX0pfSxyLl9pbW1lZGlhdGVGbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRJbW1lZGlhdGUmJmZ1bmN0aW9uKHQpe3NldEltbWVkaWF0ZSh0KX18fGZ1bmN0aW9uKHQpe2YodCwwKX0sci5fdW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24odCl7dm9pZCAwIT09Y29uc29sZSYmY29uc29sZSYmY29uc29sZS53YXJuKFwiUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOlwiLHQpfTt2YXIgcz1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmKXJldHVybiBzZWxmO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpcmV0dXJuIHdpbmRvdztpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsKXJldHVybiBnbG9iYWw7dGhyb3cgRXJyb3IoXCJ1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3RcIil9KCk7XCJQcm9taXNlXCJpbiBzP3MuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseXx8KHMuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseT10KTpzLlByb21pc2U9cn0pLGZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/ZShleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sZSk6ZSgodD10fHxzZWxmKS5jbGlwYm9hcmQ9e30pfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxlLG4scil7cmV0dXJuIG5ldyhufHwobj1Qcm9taXNlKSkoZnVuY3Rpb24obyxpKXtmdW5jdGlvbiBhKHQpe3RyeXtjKHIubmV4dCh0KSl9Y2F0Y2godCl7aSh0KX19ZnVuY3Rpb24gdSh0KXt0cnl7YyhyLnRocm93KHQpKX1jYXRjaCh0KXtpKHQpfX1mdW5jdGlvbiBjKHQpe3QuZG9uZT9vKHQudmFsdWUpOm5ldyBuKGZ1bmN0aW9uKGUpe2UodC52YWx1ZSl9KS50aGVuKGEsdSl9Yygocj1yLmFwcGx5KHQsZXx8W10pKS5uZXh0KCkpfSl9ZnVuY3Rpb24gbih0LGUpe3ZhciBuLHIsbyxpLGE9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGk9e25leHQ6dSgwKSx0aHJvdzp1KDEpLHJldHVybjp1KDIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihpW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLGk7ZnVuY3Rpb24gdShpKXtyZXR1cm4gZnVuY3Rpb24odSl7cmV0dXJuIGZ1bmN0aW9uKGkpe2lmKG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7Zm9yKDthOyl0cnl7aWYobj0xLHImJihvPTImaVswXT9yLnJldHVybjppWzBdP3IudGhyb3d8fCgobz1yLnJldHVybikmJm8uY2FsbChyKSwwKTpyLm5leHQpJiYhKG89by5jYWxsKHIsaVsxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKHI9MCxvJiYoaT1bMiZpWzBdLG8udmFsdWVdKSxpWzBdKXtjYXNlIDA6Y2FzZSAxOm89aTticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6aVsxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLHI9aVsxXSxpPVswXTtjb250aW51ZTtjYXNlIDc6aT1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89KG89YS50cnlzKS5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSkmJig2PT09aVswXXx8Mj09PWlbMF0pKXthPTA7Y29udGludWV9aWYoMz09PWlbMF0mJighb3x8aVsxXT5vWzBdJiZpWzFdPG9bM10pKXthLmxhYmVsPWlbMV07YnJlYWt9aWYoNj09PWlbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89aTticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKGkpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1pPWUuY2FsbCh0LGEpfWNhdGNoKHQpe2k9WzYsdF0scj0wfWZpbmFsbHl7bj1vPTB9aWYoNSZpWzBdKXRocm93IGlbMV07cmV0dXJue3ZhbHVlOmlbMF0/aVsxXTp2b2lkIDAsZG9uZTohMH19KFtpLHVdKX19fXZhciByPVtcInRleHQvcGxhaW5cIixcInRleHQvaHRtbFwiXTt2YXIgbz1mdW5jdGlvbigpeyhjb25zb2xlLndhcm58fGNvbnNvbGUubG9nKS5jYWxsKGFyZ3VtZW50cyl9LmJpbmQoY29uc29sZSxcIltjbGlwYm9hcmQtcG9seWZpbGxdXCIpLGk9ITA7dmFyIGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5tPXt9fXJldHVybiB0LnByb3RvdHlwZS5zZXREYXRhPWZ1bmN0aW9uKHQsZSl7aSYmLTE9PT1yLmluZGV4T2YodCkmJm8oXCJVbmtub3duIGRhdGEgdHlwZTogXCIrdCxcIkNhbGwgY2xpcGJvYXJkLnN1cHByZXNzV2FybmluZ3MoKSB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcuXCIpLHRoaXMubVt0XT1lfSx0LnByb3RvdHlwZS5nZXREYXRhPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1bdF19LHQucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIHRoaXMubSl0KHRoaXMubVtlXSxlKX0sdH0oKSx1PWZ1bmN0aW9uKHQpe30sYz0hMDt2YXIgZj1mdW5jdGlvbigpeyhjb25zb2xlLndhcm58fGNvbnNvbGUubG9nKS5hcHBseShjb25zb2xlLGFyZ3VtZW50cyl9LmJpbmQoXCJbY2xpcGJvYXJkLXBvbHlmaWxsXVwiKSxzPVwidGV4dC9wbGFpblwiO2Z1bmN0aW9uIGwodCl7dT10fWZ1bmN0aW9uIGQoKXtjPSExLGk9ITF9ZnVuY3Rpb24gcCh0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKG4pe2lmKGMmJiF0LmdldERhdGEocykmJmYoXCJjbGlwYm9hcmQud3JpdGUoKSB3YXMgY2FsbGVkIHdpdGhvdXQgYSBgdGV4dC9wbGFpbmAgZGF0YSB0eXBlLiBPbiBzb21lIHBsYXRmb3JtcywgdGhpcyBtYXkgcmVzdWx0IGluIGFuIGVtcHR5IGNsaXBib2FyZC4gQ2FsbCBjbGlwYm9hcmQuc3VwcHJlc3NXYXJuaW5ncygpIHRvIHN1cHByZXNzIHRoaXMgd2FybmluZy5cIiksaigpKXtpZihmdW5jdGlvbih0KXt2YXIgZT10LmdldERhdGEocyk7aWYodm9pZCAwIT09ZSlyZXR1cm4gd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShcIlRleHRcIixlKTt0aHJvdyBuZXcgRXJyb3IoXCJObyBgdGV4dC9wbGFpbmAgdmFsdWUgd2FzIHNwZWNpZmllZC5cIil9KHQpKXJldHVyblsyXTt0aHJvdyBuZXcgRXJyb3IoXCJDb3B5aW5nIGZhaWxlZCwgcG9zc2libHkgYmVjYXVzZSB0aGUgdXNlciByZWplY3RlZCBpdC5cIil9aWYoeCh0KSlyZXR1cm4gdShcInJlZ3VsYXIgZXhlY0NvcHkgd29ya2VkXCIpLFsyXTtpZihuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpPi0xKXJldHVybiB1KCdVQSBcIkVkZ2VcIiA9PiBhc3N1bWluZyBzdWNjZXNzJyksWzJdO2lmKF8oZG9jdW1lbnQuYm9keSx0KSlyZXR1cm4gdShcImNvcHlVc2luZ1RlbXBTZWxlY3Rpb24gd29ya2VkXCIpLFsyXTtpZihmdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Uuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcIi13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQgIWltcG9ydGFudFwiKSxlLnRleHRDb250ZW50PVwidGVtcG9yYXJ5IGVsZW1lbnRcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO3ZhciBuPV8oZSx0KTtyZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKSxufSh0KSlyZXR1cm4gdShcImNvcHlVc2luZ1RlbXBFbGVtIHdvcmtlZFwiKSxbMl07aWYodm9pZCAwIT09KGU9dC5nZXREYXRhKHMpKSYmZnVuY3Rpb24odCl7dShcImNvcHlUZXh0VXNpbmdET01cIik7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCItd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0ICFpbXBvcnRhbnRcIik7dmFyIG49ZTtlLmF0dGFjaFNoYWRvdyYmKHUoXCJVc2luZyBzaGFkb3cgRE9NLlwiKSxuPWUuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSkpO3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3IuaW5uZXJUZXh0PXQsbi5hcHBlbmRDaGlsZChyKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpLFQocik7dmFyIG89ZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO3JldHVybiBFKCksZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKSxvfShlKSlyZXR1cm4gdShcImNvcHlUZXh0VXNpbmdET00gd29ya2VkXCIpLFsyXTt0aHJvdyBuZXcgRXJyb3IoXCJDb3B5IGNvbW1hbmQgZmFpbGVkLlwiKX0pfSl9ZnVuY3Rpb24gaCh0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkJiZuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dD8odShcIlVzaW5nIGBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgpYC5cIiksWzIsbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodCldKTpbMixwKEQodCkpXX0pfSl9ZnVuY3Rpb24gdigpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciB0O3JldHVybiBuKHRoaXMsZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDpyZXR1cm4gdD1ELFs0LHkoKV07Y2FzZSAxOnJldHVyblsyLHQuYXBwbHkodm9pZCAwLFtlLnNlbnQoKV0pXX19KX0pfWZ1bmN0aW9uIHkoKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKHQpe2lmKG5hdmlnYXRvci5jbGlwYm9hcmQmJm5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQpcmV0dXJuIHUoXCJVc2luZyBgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpYC5cIiksWzIsbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpXTtpZihqKCkpcmV0dXJuIHUoXCJSZWFkaW5nIHRleHQgdXNpbmcgSUUgc3RyYXRlZ3kuXCIpLFsyLEMoKV07dGhyb3cgbmV3IEVycm9yKFwiUmVhZCBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgYnJvd3Nlci5cIil9KX0pfXZhciBtPSExO2Z1bmN0aW9uIHcoKXttfHwoYyYmZignVGhlIGRlcHJlY2F0ZWQgZGVmYXVsdCBvYmplY3Qgb2YgYGNsaXBib2FyZC1wb2x5ZmlsbGAgd2FzIGNhbGxlZC4gUGxlYXNlIHN3aXRjaCB0byBgaW1wb3J0ICogYXMgY2xpcGJvYXJkIGZyb20gXCJjbGlwYm9hcmQtcG9seWZpbGxcImAgYW5kIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbGdhcnJvbi9jbGlwYm9hcmQtcG9seWZpbGwvaXNzdWVzLzEwMSBmb3IgbW9yZSBpbmZvLicpLG09ITApfXZhciBiPXtEVDphLHNldERlYnVnTG9nOmZ1bmN0aW9uKHQpe3JldHVybiB3KCksbCh0KX0sc3VwcHJlc3NXYXJuaW5nczpmdW5jdGlvbigpe3JldHVybiB3KCksZCgpfSx3cml0ZTpmdW5jdGlvbih0KXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiB3KCksWzIscCh0KV19KX0pfSx3cml0ZVRleHQ6ZnVuY3Rpb24odCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdygpLFsyLGgodCldfSl9KX0scmVhZDpmdW5jdGlvbigpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsZnVuY3Rpb24odCl7cmV0dXJuIHcoKSxbMix2KCldfSl9KX0scmVhZFRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKHQpe3JldHVybiB3KCksWzIseSgpXX0pfSl9fSxnPWZ1bmN0aW9uKCl7dGhpcy5zdWNjZXNzPSExfTtmdW5jdGlvbiB4KHQpe3ZhciBlPW5ldyBnLG49ZnVuY3Rpb24odCxlLG4pe3UoXCJsaXN0ZW5lciBjYWxsZWRcIiksdC5zdWNjZXNzPSEwLGUuZm9yRWFjaChmdW5jdGlvbihlLHIpe3ZhciBvPW4uY2xpcGJvYXJkRGF0YTtvLnNldERhdGEocixlKSxyPT09cyYmby5nZXREYXRhKHIpIT09ZSYmKHUoXCJzZXR0aW5nIHRleHQvcGxhaW4gZmFpbGVkXCIpLHQuc3VjY2Vzcz0hMSl9KSxuLnByZXZlbnREZWZhdWx0KCl9LmJpbmQodGhpcyxlLHQpO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsbik7dHJ5e2RvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKX1maW5hbGx5e2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsbil9cmV0dXJuIGUuc3VjY2Vzc31mdW5jdGlvbiBfKHQsZSl7VCh0KTt2YXIgbj14KGUpO3JldHVybiBFKCksbn1mdW5jdGlvbiBUKHQpe3ZhciBlPWRvY3VtZW50LmdldFNlbGVjdGlvbigpO2lmKGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7bi5zZWxlY3ROb2RlQ29udGVudHModCksZS5yZW1vdmVBbGxSYW5nZXMoKSxlLmFkZFJhbmdlKG4pfX1mdW5jdGlvbiBFKCl7dmFyIHQ9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7dCYmdC5yZW1vdmVBbGxSYW5nZXMoKX1mdW5jdGlvbiBEKHQpe3ZhciBlPW5ldyBhO3JldHVybiBlLnNldERhdGEocyx0KSxlfWZ1bmN0aW9uIGooKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgQ2xpcGJvYXJkRXZlbnQmJnZvaWQgMCE9PXdpbmRvdy5jbGlwYm9hcmREYXRhJiZ2b2lkIDAhPT13aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhfWZ1bmN0aW9uIEMoKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKGUpe2lmKFwiXCI9PT0odD13aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKSkpdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgY2xpcGJvYXJkIG9yIGNvdWxkIG5vdCByZWFkIHBsYWluIHRleHQgZnJvbSBjbGlwYm9hcmRcIik7cmV0dXJuWzIsdF19KX0pfXQuRFQ9YSx0LmRlZmF1bHQ9Yix0LnJlYWQ9dix0LnJlYWRUZXh0PXksdC5zZXREZWJ1Z0xvZz1sLHQuc3VwcHJlc3NXYXJuaW5ncz1kLHQud3JpdGU9cCx0LndyaXRlVGV4dD1oLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGlwYm9hcmQtcG9seWZpbGwucHJvbWlzZS5qcy5tYXBcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIG1vcnBoIHtcXG4gIDAlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNDAlIDYwJSA2MCUgNDAlIC8gNzAlIDMwJSA3MCUgMzAlOyB9XFxuICAxMDAlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNDAlIDYwJTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pOyB9IH1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMjVDRUE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdmYW50YXN5JywgZmFudGFzeTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcblxcbi5hbGVydCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDMwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgY29sb3I6ICMwMDAwMjI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMTAwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgbWluLWhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwOyB9XFxuICAuZm9vdGVyX19oZWFydCB7XFxuICAgIHBhZGRpbmc6IDAgMC4xMjVlbTtcXG4gICAgY29sb3I6ICMzMDIzQUU7IH1cXG4gIC5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgfVxcblxcbi5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuaGVhZGVyX19saW5rcyB7XFxuICAgIG1hcmdpbjogMC41ZW0gYXV0byAwO1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbiAgICBtYXgtd2lkdGg6IDI2Ljc1cmVtOyB9XFxuICAgIC5oZWFkZXJfX2xpbmtzIGEge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgICBjb2xvcjogI0ZGMDA5OTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDsgfVxcbiAgICAgIC5oZWFkZXJfX2xpbmtzIGEgc3ZnIHtcXG4gICAgICAgIHdpZHRoOiAxLjM1ZW07XFxuICAgICAgICBoZWlnaHQ6IDEuMzVlbTtcXG4gICAgICAgIGZpbGw6ICMwMDAwMjI7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLTAuM2VtOyB9XFxuICAgICAgLmhlYWRlcl9fbGlua3MgYTpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAuaGVhZGVyX19idXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMjI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICBmb250LXdlaWdodDogaXRhbGljO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGVhc2UtaW47XFxuICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmhlYWRlcl9fYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMzAyM0FFOyB9XFxuXFxuaDEge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHJnYmEoNTAsIDI1NSwgMCwgMC40KTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIG1hcmdpbjogMCAwIDAuMTI1ZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMzYuMjVyZW0pIGFuZCAobWluLXdpZHRoOiAyNXJlbSkge1xcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtOyB9IH1cXG5cXG4uZ2VuZXJhdG9yIHtcXG4gIHdpZHRoOiA2MHZtaW47XFxuICBoZWlnaHQ6IDYwdm1pbjtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAzO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMxLjg3NXJlbSkge1xcbiAgICAuZ2VuZXJhdG9yIHtcXG4gICAgICB3aWR0aDogNTB2bWluO1xcbiAgICAgIGhlaWdodDogNTB2bWluOyB9IH1cXG4gIC5nZW5lcmF0b3JfX3NoYXBlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAyMjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzAyM0FFIDAlLCAjMDAwMDIyIDEwMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCUgNzAlIDcwJSAzMCUgLyAzMCUgMzAlIDcwJSA3MCU7XFxuICAgIGJveC1zaGFkb3c6IC0xMHZtaW4gMTB2bWluIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTsgfVxcbiAgICAuZ2VuZXJhdG9yX19zaGFwZS0tOHYge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTExNWRlZywgI0ZGRkZGRiAwJSwgcmdiYSgzNywgMjA2LCAxNjcsIDApIDQwJSwgcmdiYSgwLCAyNTUsIDI1NSwgMCkgNjAlLCAjMGZmIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMDIzQUUgMCUsICMwMDAwMjIgMTAwJSk7IH1cXG4gIC5nZW5lcmF0b3JfX2hhbmRsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07IH1cXG4gICAgLmdlbmVyYXRvcl9faGFuZGxlOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICBsZWZ0OiAwLjc1cmVtO1xcbiAgICAgIHRvcDogMC43NXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMjI7XFxuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xcbiAgICAgIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93OyB9XFxuICAgIC5nZW5lcmF0b3JfX2hhbmRsZS0tc2Vjb25kOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogIzMwMjNBRTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGOyB9XFxuICAgIC5nZW5lcmF0b3JfX2hhbmRsZS0tdGhpcmQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDIyO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7IH1cXG4gICAgLmdlbmVyYXRvcl9faGFuZGxlLS1mb3VydGg6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMGZmOyB9XFxuICAgIC5nZW5lcmF0b3JfX2hhbmRsZS0tOHYuYWN0aXZlOmJlZm9yZSwgLmdlbmVyYXRvcl9faGFuZGxlLS04djpob3ZlcjpiZWZvcmUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjRkZGO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMjI7IH1cXG4gICAgLmdlbmVyYXRvcl9faGFuZGxlOm5vdCguZ2VuZXJhdG9yX19oYW5kbGUtLTh2KS5hY3RpdmU6YmVmb3JlLCAuZ2VuZXJhdG9yX19oYW5kbGU6bm90KC5nZW5lcmF0b3JfX2hhbmRsZS0tOHYpOmhvdmVyOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogIzBmZjtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggI0ZGRjtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDIyOyB9XFxuICAuZ2VuZXJhdG9yICN0b3Age1xcbiAgICB0b3A6IC0xLjI1cmVtO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgICAuZ2VuZXJhdG9yICN0b3AuZ2VuZXJhdG9yX19oYW5kbGUtLTh2IHtcXG4gICAgICBsZWZ0OiAxMCU7IH1cXG4gIC5nZW5lcmF0b3IgI2JvdHRvbSB7XFxuICAgIGJvdHRvbTogLTEuMjVyZW07XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuICAgIC5nZW5lcmF0b3IgI2JvdHRvbS5nZW5lcmF0b3JfX2hhbmRsZS0tOHYge1xcbiAgICAgIGxlZnQ6IDEwJTsgfVxcbiAgLmdlbmVyYXRvciAjbGVmdCB7XFxuICAgIGxlZnQ6IC0xLjI1cmVtO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuICAgIC5nZW5lcmF0b3IgI2xlZnQuZ2VuZXJhdG9yX19oYW5kbGUtLTh2IHtcXG4gICAgICB0b3A6IDEwJTsgfVxcbiAgLmdlbmVyYXRvciAjcmlnaHQge1xcbiAgICByaWdodDogLTEuMjVyZW07XFxuICAgIHRvcDogMzAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG4gICAgLmdlbmVyYXRvciAjcmlnaHQuZ2VuZXJhdG9yX19oYW5kbGUtLTh2IHtcXG4gICAgICB0b3A6IDEwJTsgfVxcbiAgLmdlbmVyYXRvciAjdG9wUmlnaHQge1xcbiAgICB0b3A6IC0xLjI1cmVtO1xcbiAgICBsZWZ0OiA5MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgLmdlbmVyYXRvciAjYm90dG9tUmlnaHQge1xcbiAgICBib3R0b206IC0xLjI1cmVtO1xcbiAgICBsZWZ0OiA5MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgLmdlbmVyYXRvciAjbGVmdEJvdHRvbSB7XFxuICAgIGxlZnQ6IC0xLjI1cmVtO1xcbiAgICB0b3A6IDkwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuICAuZ2VuZXJhdG9yICNyaWdodEJvdHRvbSB7XFxuICAgIHJpZ2h0OiAtMS4yNXJlbTtcXG4gICAgdG9wOiA5MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcblxcbi5vdXRwdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxcbiAgLm91dHB1dF9fbGFiZWwge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyB9XFxuICAub3V0cHV0X19jb2RlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgY29sb3I6ICMwMDAwMjI7XFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuNjI1ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07IH1cXG4gIC5vdXRwdXRfX2J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMjI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cyBlYXNlLWluO1xcbiAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5vdXRwdXRfX2J1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzMwMjNBRTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAuODc1cmVtKSB7XFxuICAgIC5vdXRwdXQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxcbiAgICAgIC5vdXRwdXRfX2NvZGUge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgICAgLm91dHB1dF9fYnV0dG9uIHtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDNyZW0pIHtcXG4gICAgLm91dHB1dCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICAgIG1heC13aWR0aDogMzlyZW07IH0gfVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDJyZW0pO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY29udGFpbmVyOjpiZWZvcmUsIC5jb250YWluZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiA3MHZtYXg7XFxuICAgIGhlaWdodDogNzB2bWF4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XFxuICAgIGxlZnQ6IC0yMHZtaW47XFxuICAgIHRvcDogLTIwdm1pbjtcXG4gICAgYW5pbWF0aW9uOiBtb3JwaCAxNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSwgc3BpbiAyMHMgbGluZWFyIGluZmluaXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWxsLWNoYW5nZTogYm9yZGVyLXJhZGl1cywgdHJhbnNmb3JtO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1NSUgNTUlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgLmNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogNzB2bWluO1xcbiAgICBoZWlnaHQ6IDcwdm1pbjtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgcmlnaHQ6IC0xMHZtaW47XFxuICAgIHRvcDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBhbmltYXRpb246IG1vcnBoIDEwcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlLCBzcGluIDI2cyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMjAlIDIwJTsgfVxcblxcbi5hZHZhbmNlZCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiAzOXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW46IDAuNWVtIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA1O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjBweCkge1xcbiAgICAuYWR2YW5jZWQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfSB9XFxuICAuYWR2YW5jZWRfX3N3aXRjaCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTsgfVxcbiAgLmFkdmFuY2VkX19zZXR0aW5ncyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLmFkdmFuY2VkX19zZXR0aW5ncy52aXNpYmxlIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzEuMjVyZW0pIHtcXG4gICAgICAgIC5hZHZhbmNlZF9fc2V0dGluZ3MudmlzaWJsZSB7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH0gfVxcbiAgLmFkdmFuY2VkX19jaGVjayB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcbiAgLmFkdmFuY2VkIC5pbnB1dC1ncm91cCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgLmFkdmFuY2VkIC5pbnB1dC1ncm91cCBsYWJlbCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTsgfVxcbiAgICAuYWR2YW5jZWQgLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gICAgICB3aWR0aDogNC41cmVtOyB9XFxuICAuYWR2YW5jZWRfX2NoZWNrOmNoZWNrZWQgKyAuYWR2YW5jZWRfX3RyaWdnZXIgc3BhbjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6ICNGRjAwOTk7XFxuICAgIGxlZnQ6IDEuMTVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzclIDYzJSA1NSUgNDUlIC8gMjUlIDUwJSA1MCUgNzUlOyB9XFxuICAuYWR2YW5jZWRfX3RyaWdnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYWR2YW5jZWRfX3RyaWdnZXIgc3BhbiB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHdpZHRoOiAyZW07XFxuICAgICAgaGVpZ2h0OiAxZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDNyZW0pIHtcXG4gICAgICAgIC5hZHZhbmNlZF9fdHJpZ2dlciBzcGFuIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07IH0gfVxcbiAgICAgIC5hZHZhbmNlZF9fdHJpZ2dlciBzcGFuOmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDAuN2VtO1xcbiAgICAgICAgaGVpZ2h0OiAwLjdlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1NiUgMjklIDcwJSAvIDUwJSA3MyUgMzglIDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMjI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwLjE1ZW07XFxuICAgICAgICB0b3A6IDAuMTVlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlLW91dCwgYmFja2dyb3VuZCAwLjNzIGVhc2Utb3V0LCBib3JkZXItcmFkaXVzIDAuNHMgZWFzZS1pbi1vdXQ7IH1cXG5cXG4uaW5wdXQtZ3JvdXAgaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XFxuICBjb2xvcjogIzAwMDAyMjtcXG4gIHBhZGRpbmc6IDAuNWVtIDAuNjI1ZW07IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMC44NXJlbSkge1xcbiAgLmlucHV0LWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfSB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBjbGlwYm9hcmQgZnJvbSAnY2xpcGJvYXJkLXBvbHlmaWxsL2J1aWxkL2NsaXBib2FyZC1wb2x5ZmlsbC5wcm9taXNlJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRqdXN0YWJsZUJveCB7XG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2hhcGVFbGVtSWQgPSAnc2hhcGUnLFxuICAgIGdlbmVyYXRvckVsZW1JZCA9ICdjb2RlJyxcbiAgICBjb3B5Q29kZUlkID0gJ2NvcHknLFxuICAgIGNvcGllZENvZGVJZCA9ICdjbGlwYm9hcmRfY29waWVkJyxcbiAgICBib3hDb250YWluZXJJZCA9ICdib3gnLFxuICAgIHdpZHRoSW5wdXRJZCA9ICd3aWR0aCcsXG4gICAgaGVpZ2h0SW5wdXRJZCA9ICdoZWlnaHQnLFxuICAgIGVuYWJsZUFkdmFuY2VkSWQgPSAnZW5hYmxlLWFkdmFuY2VkJyxcbiAgICBpbml0U3RhdGUgPSBudWxsLFxuICAgIG1vdmVhYmxlRWxlbXMgfVxuICAgID0ge30pIHtcbiAgICB0aGlzLmdlbmVyYXRvckVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZW5lcmF0b3JFbGVtSWQpXG4gICAgdGhpcy5zaGFwZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGFwZUVsZW1JZClcbiAgICB0aGlzLmNvcGllZENvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb3BpZWRDb2RlSWQpXG4gICAgdGhpcy5ib3hDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib3hDb250YWluZXJJZClcbiAgICB0aGlzLndpZHRoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aWR0aElucHV0SWQpXG4gICAgdGhpcy5oZWlnaHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhlaWdodElucHV0SWQpXG4gICAgdGhpcy53aWR0aElucHV0Lm9uY2hhbmdlID0gKCkgPT4geyB0aGlzLnVwZGF0ZVN0YXRlKHRoaXMud2lkdGhJbnB1dC52YWx1ZSwgJ3dpZHRoJykgfVxuICAgIHRoaXMuaGVpZ2h0SW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7IHRoaXMudXBkYXRlU3RhdGUodGhpcy5oZWlnaHRJbnB1dC52YWx1ZSwgJ2hlaWdodCcpIH1cbiAgICB0aGlzLmVuYWJsZUFkdmFuY2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZW5hYmxlQWR2YW5jZWRJZClcbiAgICB0aGlzLmVuYWJsZUFkdmFuY2VkLm9uY2xpY2sgPSB0aGlzLmVuYWJsZUFkdmFuY2VkT25DbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbml0U3RhdGUoaW5pdFN0YXRlKVxuICAgIHRoaXMuaW5pdEFkdmFuY2VkKClcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLmluaXRIYW5kbGVzKG1vdmVhYmxlRWxlbXMpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29weUNvZGVJZCkub25jbGljayA9IHRoaXMuc2V0Q2xpcGJvYXJkLmJpbmQodGhpcylcbiAgfVxuICBpbml0SGFuZGxlcyAobW92ZWFibGVFbGVtcykge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBtZXRob2QgaW5pdEhhbmRsZXMhJylcbiAgfVxuICB1cGRhdGVCb3JkZXJSYWRpdXMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBtZXRob2QgdXBkYXRlQm9yZGVyUmFkaXVzIScpXG4gIH1cbiAgaW5pdFN0YXRlIChzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBtZXRob2QgaW5pdFN0YXRlIScpXG4gIH1cbiAgaW5pdEFkdmFuY2VkICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS53aWR0aCAhPT0gJycgJiYgdGhpcy5zdGF0ZS5oZWlnaHQgIT09ICcnKSB7XG4gICAgICB0aGlzLmVuYWJsZUFkdmFuY2VkLmNoZWNrZWQgPSB0cnVlXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGltZW5zaW9uLWlucHV0JykuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXG4gICAgfVxuICB9XG4gIGVuYWJsZUFkdmFuY2VkT25DbGljayAoZSkge1xuICAgIGlmICh0aGlzLmVuYWJsZUFkdmFuY2VkLmNoZWNrZWQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaW1lbnNpb24taW5wdXQnKS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcbiAgICAgIHRoaXMuc3RhdGUud2lkdGggPSB0aGlzLmJveENvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLmJveENvbnRhaW5lci5vZmZzZXRIZWlnaHRcbiAgICAgIHRoaXMudXBkYXRlVUkoKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGltZW5zaW9uLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCcnLCAnd2lkdGgnKVxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnJywgJ2hlaWdodCcpXG4gICAgICB0aGlzLmJveENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnJ1xuICAgICAgdGhpcy5ib3hDb250YWluZXIuc3R5bGUud2lkdGggPSAnJ1xuICAgIH1cbiAgfVxuXG4gIHNldENsaXBib2FyZCAoKSB7XG4gICAgY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLmdlbmVyYXRvckVsZW0uaW5uZXJIVE1MKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuY29waWVkQ29kZS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0XCI+Q29waWVkIHRvIGNsaXBib2FyZDwvZGl2PidcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmNvcGllZENvZGUuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJhbGVydFwiPk5vdCBTdXBwb3J0ZWQ8L2Rpdj4nXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29waWVkQ29kZS5pbm5lckhUTUwgPSAnJ1xuICAgIH1cbiAgICAgICwgMjAwMClcbiAgfVxuICBzZXRVcmxIYXNoIChoYXNoKSB7XG4gICAgaWYgKHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5KSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnIycgKyBoYXNoKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hcbiAgICB9XG4gIH1cbiAgdXBkYXRlU3RhdGUgKHZhbCwga2V5KSB7XG4gICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsXG4gICAgdGhpcy51cGRhdGVVSSgpXG4gIH1cbiAgdXBkYXRlVUkgKCkge1xuICAgIHRoaXMudXBkYXRlQm9yZGVyUmFkaXVzKClcbiAgICB0aGlzLnVwZGF0ZUJveCgpXG4gIH1cbiAgdXBkYXRlQm94ICgpIHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlQWR2YW5jZWQuY2hlY2tlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBzdHlsZUhlaWdodCA9IHRoaXMuc3RhdGUuaGVpZ2h0ID09ICcnID8gJycgOiB0aGlzLnN0YXRlLmhlaWdodCArICdweCdcbiAgICBsZXQgc3R5bGVXaWR0aCA9IHRoaXMuc3RhdGUud2lkdGggPT0gJycgPyAnJyA6IHRoaXMuc3RhdGUud2lkdGggKyAncHgnXG4gICAgdGhpcy5ib3hDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gc3R5bGVIZWlnaHRcbiAgICB0aGlzLmJveENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHN0eWxlV2lkdGhcbiAgICB0aGlzLmhlaWdodElucHV0LnZhbHVlID0gdGhpcy5zdGF0ZS5oZWlnaHRcbiAgICB0aGlzLndpZHRoSW5wdXQudmFsdWUgPSB0aGlzLnN0YXRlLndpZHRoXG4gIH1cbiAgc2F2ZVVybFBhcmFtcyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIG1ldGhvZCBzYXZlVXJsUGFyYW1zIScpXG4gIH1cbiAgc3RhdGljIGxvYWRVcmxQYXJhbXMgKHVybCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gLyMoXFxkXFxkP3wxMDApXFwuKFxcZFxcZD98MTAwKVxcLihcXGRcXGQ/fDEwMClcXC4oXFxkXFxkP3wxMDApLSg/OihcXGRcXGQ/fDEwMClcXC4oXFxkXFxkP3wxMDApXFwuKFxcZFxcZD98MTAwKVxcLihcXGRcXGQ/fDEwMCkpPy0oXFxkKikuKFxcZCopL2dtXG4gICAgbGV0IHBhcmFtc1RvQXR0cmlidXRlID0gWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdEJvdHRvbScsICd0b3BSaWdodCcsICdyaWdodEJvdHRvbScsICdib3R0b21SaWdodCcsICdoZWlnaHQnLCAnd2lkdGgnXVxuICAgIGxldCBhdHRyaWJ1dGVzID0ge31cbiAgICBsZXQgbVxuICAgIGlmICghcmVnZXgudGVzdCh1cmwpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZWdleC5sYXN0SW5kZXggPSAwXG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyh1cmwpKSAhPT0gbnVsbCkge1xuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoZ3JvdXBJbmRleCAhPSAwKSB7XG4gICAgICAgICAgYXR0cmlidXRlc1twYXJhbXNUb0F0dHJpYnV0ZVtncm91cEluZGV4IC0gMV1dID0gbWF0Y2hcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfVxufVxuIiwiaW1wb3J0IEFkanVzdGFibGVCb3ggZnJvbSAnLi9BZGp1c3RhYmxlQm94J1xuaW1wb3J0IE1vdmFibGUgZnJvbSAnLi9tb3ZhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVDb250cm9sQm94IGV4dGVuZHMgQWRqdXN0YWJsZUJveCB7XG4gIGluaXRTdGF0ZSAoc3RhdGUpIHtcbiAgICBsZXQgZGVmYXVsdFN0YXRlID0ge1xuICAgICAgbGVmdDogMzAsXG4gICAgICByaWdodDogMzAsXG4gICAgICB0b3A6IDMwLFxuICAgICAgYm90dG9tOiAzMCxcbiAgICAgIHdpZHRoOiAnJyxcbiAgICAgIGhlaWdodDogJycsXG4gICAgICBhZHZhbmNlZE1vZGU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSA9PSBudWxsID8gZGVmYXVsdFN0YXRlIDogc3RhdGVcbiAgfVxuICBpbml0SGFuZGxlcyAobW92ZWFibGVFbGVtcykge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBuZXcgTW92YWJsZShtb3ZlYWJsZUVsZW1zLmxlZnQsIHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKSwgJ3knLCB0aGlzLnN0YXRlLmxlZnQsIHRoaXMuc2F2ZVVybFBhcmFtcy5iaW5kKHRoaXMpKSxcbiAgICAgIHJpZ2h0OiBuZXcgTW92YWJsZShtb3ZlYWJsZUVsZW1zLnJpZ2h0LCB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyksICd5JywgdGhpcy5zdGF0ZS5yaWdodCwgdGhpcy5zYXZlVXJsUGFyYW1zLmJpbmQodGhpcykpLFxuICAgICAgdG9wOiBuZXcgTW92YWJsZShtb3ZlYWJsZUVsZW1zLnRvcCwgdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpLCAneCcsIHRoaXMuc3RhdGUudG9wLCB0aGlzLnNhdmVVcmxQYXJhbXMuYmluZCh0aGlzKSksXG4gICAgICBib3R0b206IG5ldyBNb3ZhYmxlKG1vdmVhYmxlRWxlbXMuYm90dG9tLCB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyksICd4JywgdGhpcy5zdGF0ZS5ib3R0b20sIHRoaXMuc2F2ZVVybFBhcmFtcy5iaW5kKHRoaXMpKVxuICAgIH1cbiAgfVxuICB1cGRhdGVCb3JkZXJSYWRpdXMgKCkge1xuICAgIHZhciBicmQgPSB0aGlzLnN0YXRlLnRvcCArICclICdcbiAgICBicmQgKz0gKDEwMCAtIHRoaXMuc3RhdGUudG9wKSArICclICdcbiAgICBicmQgKz0gKDEwMCAtIHRoaXMuc3RhdGUuYm90dG9tKSArICclICdcbiAgICBicmQgKz0gdGhpcy5zdGF0ZS5ib3R0b20gKyAnJSAvICdcbiAgICBicmQgKz0gdGhpcy5zdGF0ZS5sZWZ0ICsgJyUgJ1xuICAgIGJyZCArPSB0aGlzLnN0YXRlLnJpZ2h0ICsgJyUgJ1xuICAgIGJyZCArPSAoMTAwIC0gdGhpcy5zdGF0ZS5yaWdodCkgKyAnJSAnXG4gICAgYnJkICs9ICgxMDAgLSB0aGlzLnN0YXRlLmxlZnQpICsgJyUgJ1xuICAgIHRoaXMuc2hhcGVFbGVtLnN0eWxlWydib3JkZXItcmFkaXVzJ10gPSBicmRcbiAgICB0aGlzLmdlbmVyYXRvckVsZW0uaW5uZXJIVE1MID0gYnJkXG4gIH1cbiAgc2F2ZVVybFBhcmFtcyAoKSB7XG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgaGFzaCA9IGAke2xlZnR9LiR7dG9wfS4ke3JpZ2h0fS4ke2JvdHRvbX0tLSR7aGVpZ2h0fS4ke3dpZHRofWBcbiAgICB0aGlzLnNldFVybEhhc2goaGFzaClcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92YWJsZSB7XG4gIGNvbnN0cnVjdG9yIChlbGVtLCBvbkNoYW5nZSwgYXhpcyA9ICd4JywgaW5pdFBvc2l0aW9uID0gMzAsIG9uRHJhZ0VuZCA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy5heGlzID0gYXhpc1xuICAgIHRoaXMucG9zID0gaW5pdFBvc2l0aW9uXG4gICAgdGhpcy5lbGVtID0gZWxlbVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlXG4gICAgdGhpcy5vbkRyYWdFbmQgPSBvbkRyYWdFbmRcbiAgICB0aGlzLmVsZW0ub25tb3VzZWRvd24gPSB0aGlzLmRyYWdNb3VzZURvd24uYmluZCh0aGlzKVxuICAgIHRoaXMuZWxlbS5vbnRvdWNoc3RhcnQgPSB0aGlzLmRyYWdNb3VzZURvd24uYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0SW5pdFBvcyhpbml0UG9zaXRpb24pXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBvcywgdGhpcy5lbGVtLmlkKVxuICB9XG4gIGRyYWdNb3VzZURvd24gKGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnRcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmN1cnJlbnRTcGFuID0gZS50YXJnZXRcbiAgICB0aGlzLmN1cnJlbnRTcGFuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSB0aGlzLmNsb3NlRHJhZ0VsZW1lbnQuYmluZCh0aGlzKVxuICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSB0aGlzLmNsb3NlRHJhZ0VsZW1lbnQuYmluZCh0aGlzKVxuXG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLmVsZW1lbnREcmFnLmJpbmQodGhpcylcbiAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IHRoaXMuZWxlbWVudERyYWcuYmluZCh0aGlzKVxuICB9XG4gIGVsZW1lbnREcmFnIChlKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50XG4gICAgaWYgKHR5cGVvZiBUb3VjaEV2ZW50ICE9PSAndW5kZWZpbmVkJyAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgdmFyIHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXSAvLyBmaXJzdCBmaW5nZXJcbiAgICAgIHRoaXMuc2V0UG9zKHRvdWNob2JqLmNsaWVudFgsIHRvdWNob2JqLmNsaWVudFkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UG9zKGUuY2xpZW50WCwgZS5jbGllbnRZKVxuICAgIH1cbiAgfVxuICBzZXRJbml0UG9zKHBvcykge1xuICAgIGlmICh0aGlzLmF4aXMgPT0gJ3gnKSB7XG4gICAgICB0aGlzLmVsZW0uc3R5bGUubGVmdCA9IHBvcyArICclJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW0uc3R5bGUudG9wID0gcG9zICsgJyUnXG4gICAgfVxuICB9XG4gIHNldFBvcyAoX3Bvc1gsIF9wb3NZKSB7XG4gICAgbGV0IGJveFJlY3QgPSB0aGlzLmVsZW0ucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmICh0aGlzLmF4aXMgPT0gJ3gnKSB7XG4gICAgICB0aGlzLnBvcyA9IHRoaXMudmFsQmV0d2VlbigoKF9wb3NYIC0gNSAtIGJveFJlY3RbJ2xlZnQnXSkudG9GaXhlZCgwKSAqIDEwMCAvIGJveFJlY3RbJ3dpZHRoJ10pLnRvRml4ZWQoMCksIDAsIDEwMClcbiAgICAgIHRoaXMuZWxlbS5zdHlsZS5sZWZ0ID0gdGhpcy5wb3MgKyAnJSdcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3MgPSB0aGlzLnZhbEJldHdlZW4oKChfcG9zWSAtIDUgLSBib3hSZWN0Wyd0b3AnXSkudG9GaXhlZCgwKSAqIDEwMCAvIGJveFJlY3RbJ2hlaWdodCddKS50b0ZpeGVkKDApLCAwLCAxMDApXG4gICAgICB0aGlzLmVsZW0uc3R5bGUudG9wID0gdGhpcy5wb3MgKyAnJSdcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBvcywgdGhpcy5lbGVtLmlkKVxuICB9XG5cbiAgY2xvc2VEcmFnRWxlbWVudCAoKSB7XG4gICAgdGhpcy5jdXJyZW50U3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIHRoaXMub25EcmFnRW5kKClcbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsXG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsXG4gICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGxcbiAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGxcbiAgfVxuXG4gIHZhbEJldHdlZW4gKHYsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIChNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdikpKVxuICB9XG59IiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuaW1wb3J0IFNpbXBsZUNvbnRyb2xCb3ggZnJvbSAnLi9qcy9TaW1wbGVDb250cm9sQm94J1xuXG52YXIgbW92YWJsZXMgPSB7XG4gIGxlZnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0JyksXG4gIHJpZ2h0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKSxcbiAgYm90dG9tOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90dG9tJyksXG4gIHRvcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcCcpXG59XG5sZXQgcGFyYW1zID0gU2ltcGxlQ29udHJvbEJveC5sb2FkVXJsUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxudmFyIG15Qm94ID0gbmV3IFNpbXBsZUNvbnRyb2xCb3goe21vdmVhYmxlRWxlbXM6IG1vdmFibGVzLCBpbml0U3RhdGU6IHBhcmFtc30pIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=