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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/scriptFull.js");
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

/***/ "./public/js/FullControlBox.js":
/*!*************************************!*\
  !*** ./public/js/FullControlBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FullControlBox; });
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




var FullControlBox = /*#__PURE__*/function (_AdjustableBox) {
  _inherits(FullControlBox, _AdjustableBox);

  var _super = _createSuper(FullControlBox);

  function FullControlBox() {
    _classCallCheck(this, FullControlBox);

    return _super.apply(this, arguments);
  }

  _createClass(FullControlBox, [{
    key: "initState",
    value: function initState(state) {
      var defaultState = {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        leftBottom: 90,
        rightBottom: 90,
        topRight: 90,
        bottomRight: 90,
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
        bottom: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.bottom, this.updateState.bind(this), 'x', this.state.bottom, this.saveUrlParams.bind(this)),
        leftBottom: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.leftBottom, this.updateState.bind(this), 'y', this.state.leftBottom, this.saveUrlParams.bind(this)),
        rightBottom: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.rightBottom, this.updateState.bind(this), 'y', this.state.rightBottom, this.saveUrlParams.bind(this)),
        topRight: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.topRight, this.updateState.bind(this), 'x', this.state.topRight, this.saveUrlParams.bind(this)),
        bottomRight: new _movable__WEBPACK_IMPORTED_MODULE_1__["default"](moveableElems.bottomRight, this.updateState.bind(this), 'x', this.state.bottomRight, this.saveUrlParams.bind(this))
      };
    }
  }, {
    key: "updateBorderRadius",
    value: function updateBorderRadius() {
      var brd = this.state.top + '% ';
      brd += 100 - this.state.topRight + '% ';
      brd += 100 - this.state.bottomRight + '% ';
      brd += this.state.bottom + '% / ';
      brd += this.state.left + '% ';
      brd += this.state.right + '% ';
      brd += 100 - this.state.rightBottom + '% ';
      brd += 100 - this.state.leftBottom + '% ';
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
          height = _this$state.height,
          leftBottom = _this$state.leftBottom,
          topRight = _this$state.topRight,
          rightBottom = _this$state.rightBottom,
          bottomRight = _this$state.bottomRight;
      var hash = "".concat(left, ".").concat(top, ".").concat(right, ".").concat(bottom, "-").concat(leftBottom, ".").concat(topRight, ".").concat(rightBottom, ".").concat(bottomRight, "-").concat(height, ".").concat(width);
      this.setUrlHash(hash);
    }
  }]);

  return FullControlBox;
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

/***/ "./public/scriptFull.js":
/*!******************************!*\
  !*** ./public/scriptFull.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./public/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_FullControlBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/FullControlBox */ "./public/js/FullControlBox.js");


var movables = {
  left: document.getElementById('left'),
  right: document.getElementById('right'),
  bottom: document.getElementById('bottom'),
  top: document.getElementById('top'),
  leftBottom: document.getElementById('leftBottom'),
  rightBottom: document.getElementById('rightBottom'),
  bottomRight: document.getElementById('bottomRight'),
  topRight: document.getElementById('topRight')
};
var params = _js_FullControlBox__WEBPACK_IMPORTED_MODULE_1__["default"].loadUrlParams(window.location.href);
var myBox = new _js_FullControlBox__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC1wb2x5ZmlsbC9idWlsZC9jbGlwYm9hcmQtcG9seWZpbGwucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkLXBvbHlmaWxsL2Rpc3QvY2xpcGJvYXJkLXBvbHlmaWxsLnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvQWRqdXN0YWJsZUJveC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvRnVsbENvbnRyb2xCb3guanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21vdmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NjcmlwdEZ1bGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Njc3MvbWFpbi5zY3NzP2RjZTYiXSwibmFtZXMiOlsiQWRqdXN0YWJsZUJveCIsInNoYXBlRWxlbUlkIiwiZ2VuZXJhdG9yRWxlbUlkIiwiY29weUNvZGVJZCIsImNvcGllZENvZGVJZCIsImJveENvbnRhaW5lcklkIiwid2lkdGhJbnB1dElkIiwiaGVpZ2h0SW5wdXRJZCIsImVuYWJsZUFkdmFuY2VkSWQiLCJpbml0U3RhdGUiLCJtb3ZlYWJsZUVsZW1zIiwiZ2VuZXJhdG9yRWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaGFwZUVsZW0iLCJjb3BpZWRDb2RlIiwiYm94Q29udGFpbmVyIiwid2lkdGhJbnB1dCIsImhlaWdodElucHV0Iiwib25jaGFuZ2UiLCJ1cGRhdGVTdGF0ZSIsInZhbHVlIiwiZW5hYmxlQWR2YW5jZWQiLCJvbmNsaWNrIiwiZW5hYmxlQWR2YW5jZWRPbkNsaWNrIiwiYmluZCIsImluaXRBZHZhbmNlZCIsImhhbmRsZXMiLCJpbml0SGFuZGxlcyIsInNldENsaXBib2FyZCIsIkVycm9yIiwic3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsImNoZWNrZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJ1cGRhdGVVSSIsInJlbW92ZSIsInN0eWxlIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaW5uZXJIVE1MIiwidGhlbiIsInNldFRpbWVvdXQiLCJoYXNoIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwidmFsIiwia2V5IiwidXBkYXRlQm9yZGVyUmFkaXVzIiwidXBkYXRlQm94Iiwic3R5bGVIZWlnaHQiLCJzdHlsZVdpZHRoIiwidXJsIiwicmVnZXgiLCJwYXJhbXNUb0F0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJtIiwidGVzdCIsImxhc3RJbmRleCIsImV4ZWMiLCJmb3JFYWNoIiwibWF0Y2giLCJncm91cEluZGV4IiwiRnVsbENvbnRyb2xCb3giLCJkZWZhdWx0U3RhdGUiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0Qm90dG9tIiwicmlnaHRCb3R0b20iLCJ0b3BSaWdodCIsImJvdHRvbVJpZ2h0IiwiYWR2YW5jZWRNb2RlIiwiTW92YWJsZSIsInNhdmVVcmxQYXJhbXMiLCJicmQiLCJzZXRVcmxIYXNoIiwiZWxlbSIsIm9uQ2hhbmdlIiwiYXhpcyIsImluaXRQb3NpdGlvbiIsIm9uRHJhZ0VuZCIsInBvcyIsIm9ubW91c2Vkb3duIiwiZHJhZ01vdXNlRG93biIsIm9udG91Y2hzdGFydCIsInNldEluaXRQb3MiLCJpZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50U3BhbiIsInRhcmdldCIsIm9ubW91c2V1cCIsImNsb3NlRHJhZ0VsZW1lbnQiLCJvbnRvdWNoZW5kIiwib25tb3VzZW1vdmUiLCJlbGVtZW50RHJhZyIsIm9udG91Y2htb3ZlIiwiVG91Y2hFdmVudCIsInRvdWNob2JqIiwiY2hhbmdlZFRvdWNoZXMiLCJzZXRQb3MiLCJjbGllbnRYIiwiY2xpZW50WSIsIl9wb3NYIiwiX3Bvc1kiLCJib3hSZWN0IiwicGFyZW50Tm9kZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZhbEJldHdlZW4iLCJ0b0ZpeGVkIiwidiIsIm1pbiIsIm1heCIsIk1hdGgiLCJtb3ZhYmxlcyIsInBhcmFtcyIsImxvYWRVcmxQYXJhbXMiLCJocmVmIiwibXlCb3giXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEw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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDekxZOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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Q0FETztBQUViNEQsT0FBSyxFQUFFN0QsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBRk07QUFHYjhELFFBQU0sRUFBRS9ELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUhLO0FBSWI2RCxLQUFHLEVBQUU5RCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FKUTtBQUtiK0QsWUFBVSxFQUFFaEUsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBTEM7QUFNYmdFLGFBQVcsRUFBRWpFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQU5BO0FBT2JrRSxhQUFXLEVBQUVuRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FQQTtBQVFiaUUsVUFBUSxFQUFFbEUsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCO0FBUkcsQ0FBZjtBQVVBLElBQUkrRyxNQUFNLEdBQUd0RCwwREFBYyxDQUFDdUQsYUFBZixDQUE2QjVFLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQjBFLElBQTdDLENBQWI7QUFDQSxJQUFJQyxLQUFLLEdBQUcsSUFBSXpELDBEQUFKLENBQW1CO0FBQUM1RCxlQUFhLEVBQUVpSCxRQUFoQjtBQUEwQmxILFdBQVMsRUFBRW1IO0FBQXJDLENBQW5CLENBQVosQzs7Ozs7Ozs7Ozs7QUNkQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLCtNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbkZ1bGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9zY3JpcHRGdWxsLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vZGlzdC9jbGlwYm9hcmQtcG9seWZpbGwucHJvbWlzZVwiKVxuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6ZSgpfSgwLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXt2YXIgZT10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIGUucmVzb2x2ZSh0KCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbn0pfSxmdW5jdGlvbihuKXtyZXR1cm4gZS5yZXNvbHZlKHQoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBlLnJlamVjdChuKX0pfSl9ZnVuY3Rpb24gZSh0KXtyZXR1cm4hKCF0fHx2b2lkIDA9PT10Lmxlbmd0aCl9ZnVuY3Rpb24gbigpe31mdW5jdGlvbiByKHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHIpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9MCx0aGlzLl9oYW5kbGVkPSExLHRoaXMuX3ZhbHVlPXZvaWQgMCx0aGlzLl9kZWZlcnJlZHM9W10sYyh0LHRoaXMpfWZ1bmN0aW9uIG8odCxlKXtmb3IoOzM9PT10Ll9zdGF0ZTspdD10Ll92YWx1ZTswIT09dC5fc3RhdGU/KHQuX2hhbmRsZWQ9ITAsci5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt2YXIgbj0xPT09dC5fc3RhdGU/ZS5vbkZ1bGZpbGxlZDplLm9uUmVqZWN0ZWQ7aWYobnVsbCE9PW4pe3ZhciByO3RyeXtyPW4odC5fdmFsdWUpfWNhdGNoKHQpe3JldHVybiB2b2lkIGEoZS5wcm9taXNlLHQpfWkoZS5wcm9taXNlLHIpfWVsc2UoMT09PXQuX3N0YXRlP2k6YSkoZS5wcm9taXNlLHQuX3ZhbHVlKX0pKTp0Ll9kZWZlcnJlZHMucHVzaChlKX1mdW5jdGlvbiBpKHQsZSl7dHJ5e2lmKGU9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpKXt2YXIgbj1lLnRoZW47aWYoZSBpbnN0YW5jZW9mIHIpcmV0dXJuIHQuX3N0YXRlPTMsdC5fdmFsdWU9ZSx2b2lkIHUodCk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbilyZXR1cm4gdm9pZCBjKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dC5hcHBseShlLGFyZ3VtZW50cyl9fShuLGUpLHQpfXQuX3N0YXRlPTEsdC5fdmFsdWU9ZSx1KHQpfWNhdGNoKGUpe2EodCxlKX19ZnVuY3Rpb24gYSh0LGUpe3QuX3N0YXRlPTIsdC5fdmFsdWU9ZSx1KHQpfWZ1bmN0aW9uIHUodCl7Mj09PXQuX3N0YXRlJiYwPT09dC5fZGVmZXJyZWRzLmxlbmd0aCYmci5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt0Ll9oYW5kbGVkfHxyLl91bmhhbmRsZWRSZWplY3Rpb25Gbih0Ll92YWx1ZSl9KTtmb3IodmFyIGU9MCxuPXQuX2RlZmVycmVkcy5sZW5ndGg7bj5lO2UrKylvKHQsdC5fZGVmZXJyZWRzW2VdKTt0Ll9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiBjKHQsZSl7dmFyIG49ITE7dHJ5e3QoZnVuY3Rpb24odCl7bnx8KG49ITAsaShlLHQpKX0sZnVuY3Rpb24odCl7bnx8KG49ITAsYShlLHQpKX0pfWNhdGNoKHQpe2lmKG4pcmV0dXJuO249ITAsYShlLHQpfX12YXIgZj1zZXRUaW1lb3V0O3IucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX0sci5wcm90b3R5cGUudGhlbj1mdW5jdGlvbih0LGUpe3ZhciByPW5ldyB0aGlzLmNvbnN0cnVjdG9yKG4pO3JldHVybiBvKHRoaXMsbmV3IGZ1bmN0aW9uKHQsZSxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLnByb21pc2U9bn0odCxlLHIpKSxyfSxyLnByb3RvdHlwZS5maW5hbGx5PXQsci5hbGw9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyByKGZ1bmN0aW9uKG4scil7ZnVuY3Rpb24gbyh0LGUpe3RyeXtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpKXt2YXIgdT1lLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdSlyZXR1cm4gdm9pZCB1LmNhbGwoZSxmdW5jdGlvbihlKXtvKHQsZSl9LHIpfWlbdF09ZSwwPT0tLWEmJm4oaSl9Y2F0Y2godCl7cih0KX19aWYoIWUodCkpcmV0dXJuIHIobmV3IFR5cGVFcnJvcihcIlByb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXlcIikpO3ZhciBpPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpO2lmKDA9PT1pLmxlbmd0aClyZXR1cm4gbihbXSk7Zm9yKHZhciBhPWkubGVuZ3RoLHU9MDtpLmxlbmd0aD51O3UrKylvKHUsaVt1XSl9KX0sci5yZXNvbHZlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3Rvcj09PXI/dDpuZXcgcihmdW5jdGlvbihlKXtlKHQpfSl9LHIucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcihmdW5jdGlvbihlLG4pe24odCl9KX0sci5yYWNlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcihmdW5jdGlvbihuLG8pe2lmKCFlKHQpKXJldHVybiBvKG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlLnJhY2UgYWNjZXB0cyBhbiBhcnJheVwiKSk7Zm9yKHZhciBpPTAsYT10Lmxlbmd0aDthPmk7aSsrKXIucmVzb2x2ZSh0W2ldKS50aGVuKG4sbyl9KX0sci5faW1tZWRpYXRlRm49XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0SW1tZWRpYXRlJiZmdW5jdGlvbih0KXtzZXRJbW1lZGlhdGUodCl9fHxmdW5jdGlvbih0KXtmKHQsMCl9LHIuX3VuaGFuZGxlZFJlamVjdGlvbkZuPWZ1bmN0aW9uKHQpe3ZvaWQgMCE9PWNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIix0KX07dmFyIHM9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZilyZXR1cm4gc2VsZjtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3c7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbClyZXR1cm4gZ2xvYmFsO3Rocm93IEVycm9yKFwidW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0XCIpfSgpO1wiUHJvbWlzZVwiaW4gcz9zLlByb21pc2UucHJvdG90eXBlLmZpbmFsbHl8fChzLlByb21pc2UucHJvdG90eXBlLmZpbmFsbHk9dCk6cy5Qcm9taXNlPXJ9KSxmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP2UoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLGUpOmUoKHQ9dHx8c2VsZikuY2xpcGJvYXJkPXt9KX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsZSxuLHIpe3JldHVybiBuZXcobnx8KG49UHJvbWlzZSkpKGZ1bmN0aW9uKG8saSl7ZnVuY3Rpb24gYSh0KXt0cnl7YyhyLm5leHQodCkpfWNhdGNoKHQpe2kodCl9fWZ1bmN0aW9uIHUodCl7dHJ5e2Moci50aHJvdyh0KSl9Y2F0Y2godCl7aSh0KX19ZnVuY3Rpb24gYyh0KXt0LmRvbmU/byh0LnZhbHVlKTpuZXcgbihmdW5jdGlvbihlKXtlKHQudmFsdWUpfSkudGhlbihhLHUpfWMoKHI9ci5hcHBseSh0LGV8fFtdKSkubmV4dCgpKX0pfWZ1bmN0aW9uIG4odCxlKXt2YXIgbixyLG8saSxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBpPXtuZXh0OnUoMCksdGhyb3c6dSgxKSxyZXR1cm46dSgyKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoaVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxpO2Z1bmN0aW9uIHUoaSl7cmV0dXJuIGZ1bmN0aW9uKHUpe3JldHVybiBmdW5jdGlvbihpKXtpZihuKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7YTspdHJ5e2lmKG49MSxyJiYobz0yJmlbMF0/ci5yZXR1cm46aVswXT9yLnRocm93fHwoKG89ci5yZXR1cm4pJiZvLmNhbGwociksMCk6ci5uZXh0KSYmIShvPW8uY2FsbChyLGlbMV0pKS5kb25lKXJldHVybiBvO3N3aXRjaChyPTAsbyYmKGk9WzImaVswXSxvLnZhbHVlXSksaVswXSl7Y2FzZSAwOmNhc2UgMTpvPWk7YnJlYWs7Y2FzZSA0OnJldHVybiBhLmxhYmVsKysse3ZhbHVlOmlbMV0sZG9uZTohMX07Y2FzZSA1OmEubGFiZWwrKyxyPWlbMV0saT1bMF07Y29udGludWU7Y2FzZSA3Omk9YS5vcHMucG9wKCksYS50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShvPShvPWEudHJ5cykubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pJiYoNj09PWlbMF18fDI9PT1pWzBdKSl7YT0wO2NvbnRpbnVlfWlmKDM9PT1pWzBdJiYoIW98fGlbMV0+b1swXSYmaVsxXTxvWzNdKSl7YS5sYWJlbD1pWzFdO2JyZWFrfWlmKDY9PT1pWzBdJiZhLmxhYmVsPG9bMV0pe2EubGFiZWw9b1sxXSxvPWk7YnJlYWt9aWYobyYmYS5sYWJlbDxvWzJdKXthLmxhYmVsPW9bMl0sYS5vcHMucHVzaChpKTticmVha31vWzJdJiZhLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWV9aT1lLmNhbGwodCxhKX1jYXRjaCh0KXtpPVs2LHRdLHI9MH1maW5hbGx5e249bz0wfWlmKDUmaVswXSl0aHJvdyBpWzFdO3JldHVybnt2YWx1ZTppWzBdP2lbMV06dm9pZCAwLGRvbmU6ITB9fShbaSx1XSl9fX12YXIgcj1bXCJ0ZXh0L3BsYWluXCIsXCJ0ZXh0L2h0bWxcIl07dmFyIG89ZnVuY3Rpb24oKXsoY29uc29sZS53YXJufHxjb25zb2xlLmxvZykuY2FsbChhcmd1bWVudHMpfS5iaW5kKGNvbnNvbGUsXCJbY2xpcGJvYXJkLXBvbHlmaWxsXVwiKSxpPSEwO3ZhciBhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMubT17fX1yZXR1cm4gdC5wcm90b3R5cGUuc2V0RGF0YT1mdW5jdGlvbih0LGUpe2kmJi0xPT09ci5pbmRleE9mKHQpJiZvKFwiVW5rbm93biBkYXRhIHR5cGU6IFwiK3QsXCJDYWxsIGNsaXBib2FyZC5zdXBwcmVzc1dhcm5pbmdzKCkgdG8gc3VwcHJlc3MgdGhpcyB3YXJuaW5nLlwiKSx0aGlzLm1bdF09ZX0sdC5wcm90b3R5cGUuZ2V0RGF0YT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tW3RdfSx0LnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSBpbiB0aGlzLm0pdCh0aGlzLm1bZV0sZSl9LHR9KCksdT1mdW5jdGlvbih0KXt9LGM9ITA7dmFyIGY9ZnVuY3Rpb24oKXsoY29uc29sZS53YXJufHxjb25zb2xlLmxvZykuYXBwbHkoY29uc29sZSxhcmd1bWVudHMpfS5iaW5kKFwiW2NsaXBib2FyZC1wb2x5ZmlsbF1cIikscz1cInRleHQvcGxhaW5cIjtmdW5jdGlvbiBsKHQpe3U9dH1mdW5jdGlvbiBkKCl7Yz0hMSxpPSExfWZ1bmN0aW9uIHAodCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGU7cmV0dXJuIG4odGhpcyxmdW5jdGlvbihuKXtpZihjJiYhdC5nZXREYXRhKHMpJiZmKFwiY2xpcGJvYXJkLndyaXRlKCkgd2FzIGNhbGxlZCB3aXRob3V0IGEgYHRleHQvcGxhaW5gIGRhdGEgdHlwZS4gT24gc29tZSBwbGF0Zm9ybXMsIHRoaXMgbWF5IHJlc3VsdCBpbiBhbiBlbXB0eSBjbGlwYm9hcmQuIENhbGwgY2xpcGJvYXJkLnN1cHByZXNzV2FybmluZ3MoKSB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcuXCIpLGooKSl7aWYoZnVuY3Rpb24odCl7dmFyIGU9dC5nZXREYXRhKHMpO2lmKHZvaWQgMCE9PWUpcmV0dXJuIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEoXCJUZXh0XCIsZSk7dGhyb3cgbmV3IEVycm9yKFwiTm8gYHRleHQvcGxhaW5gIHZhbHVlIHdhcyBzcGVjaWZpZWQuXCIpfSh0KSlyZXR1cm5bMl07dGhyb3cgbmV3IEVycm9yKFwiQ29weWluZyBmYWlsZWQsIHBvc3NpYmx5IGJlY2F1c2UgdGhlIHVzZXIgcmVqZWN0ZWQgaXQuXCIpfWlmKHgodCkpcmV0dXJuIHUoXCJyZWd1bGFyIGV4ZWNDb3B5IHdvcmtlZFwiKSxbMl07aWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKT4tMSlyZXR1cm4gdSgnVUEgXCJFZGdlXCIgPT4gYXNzdW1pbmcgc3VjY2VzcycpLFsyXTtpZihfKGRvY3VtZW50LmJvZHksdCkpcmV0dXJuIHUoXCJjb3B5VXNpbmdUZW1wU2VsZWN0aW9uIHdvcmtlZFwiKSxbMl07aWYoZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCItd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0ICFpbXBvcnRhbnRcIiksZS50ZXh0Q29udGVudD1cInRlbXBvcmFyeSBlbGVtZW50XCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTt2YXIgbj1fKGUsdCk7cmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZSksbn0odCkpcmV0dXJuIHUoXCJjb3B5VXNpbmdUZW1wRWxlbSB3b3JrZWRcIiksWzJdO2lmKHZvaWQgMCE9PShlPXQuZ2V0RGF0YShzKSkmJmZ1bmN0aW9uKHQpe3UoXCJjb3B5VGV4dFVzaW5nRE9NXCIpO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50XCIpO3ZhciBuPWU7ZS5hdHRhY2hTaGFkb3cmJih1KFwiVXNpbmcgc2hhZG93IERPTS5cIiksbj1lLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pKTt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyLmlubmVyVGV4dD10LG4uYXBwZW5kQ2hpbGQociksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKSxUKHIpO3ZhciBvPWRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtyZXR1cm4gRSgpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZSksb30oZSkpcmV0dXJuIHUoXCJjb3B5VGV4dFVzaW5nRE9NIHdvcmtlZFwiKSxbMl07dGhyb3cgbmV3IEVycm9yKFwiQ29weSBjb21tYW5kIGZhaWxlZC5cIil9KX0pfWZ1bmN0aW9uIGgodCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZCYmbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQ/KHUoXCJVc2luZyBgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoKWAuXCIpLFsyLG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHQpXSk6WzIscChEKHQpKV19KX0pfWZ1bmN0aW9uIHYoKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKGUpe3N3aXRjaChlLmxhYmVsKXtjYXNlIDA6cmV0dXJuIHQ9RCxbNCx5KCldO2Nhc2UgMTpyZXR1cm5bMix0LmFwcGx5KHZvaWQgMCxbZS5zZW50KCldKV19fSl9KX1mdW5jdGlvbiB5KCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcyxmdW5jdGlvbih0KXtpZihuYXZpZ2F0b3IuY2xpcGJvYXJkJiZuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KXJldHVybiB1KFwiVXNpbmcgYG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKWAuXCIpLFsyLG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKV07aWYoaigpKXJldHVybiB1KFwiUmVhZGluZyB0ZXh0IHVzaW5nIElFIHN0cmF0ZWd5LlwiKSxbMixDKCldO3Rocm93IG5ldyBFcnJvcihcIlJlYWQgaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIGJyb3dzZXIuXCIpfSl9KX12YXIgbT0hMTtmdW5jdGlvbiB3KCl7bXx8KGMmJmYoJ1RoZSBkZXByZWNhdGVkIGRlZmF1bHQgb2JqZWN0IG9mIGBjbGlwYm9hcmQtcG9seWZpbGxgIHdhcyBjYWxsZWQuIFBsZWFzZSBzd2l0Y2ggdG8gYGltcG9ydCAqIGFzIGNsaXBib2FyZCBmcm9tIFwiY2xpcGJvYXJkLXBvbHlmaWxsXCJgIGFuZCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2xnYXJyb24vY2xpcGJvYXJkLXBvbHlmaWxsL2lzc3Vlcy8xMDEgZm9yIG1vcmUgaW5mby4nKSxtPSEwKX12YXIgYj17RFQ6YSxzZXREZWJ1Z0xvZzpmdW5jdGlvbih0KXtyZXR1cm4gdygpLGwodCl9LHN1cHByZXNzV2FybmluZ3M6ZnVuY3Rpb24oKXtyZXR1cm4gdygpLGQoKX0sd3JpdGU6ZnVuY3Rpb24odCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdygpLFsyLHAodCldfSl9KX0sd3JpdGVUZXh0OmZ1bmN0aW9uKHQpe3JldHVybiBlKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3JldHVybiBuKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHcoKSxbMixoKHQpXX0pfSl9LHJlYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKHQpe3JldHVybiB3KCksWzIsdigpXX0pfSl9LHJlYWRUZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcyxmdW5jdGlvbih0KXtyZXR1cm4gdygpLFsyLHkoKV19KX0pfX0sZz1mdW5jdGlvbigpe3RoaXMuc3VjY2Vzcz0hMX07ZnVuY3Rpb24geCh0KXt2YXIgZT1uZXcgZyxuPWZ1bmN0aW9uKHQsZSxuKXt1KFwibGlzdGVuZXIgY2FsbGVkXCIpLHQuc3VjY2Vzcz0hMCxlLmZvckVhY2goZnVuY3Rpb24oZSxyKXt2YXIgbz1uLmNsaXBib2FyZERhdGE7by5zZXREYXRhKHIsZSkscj09PXMmJm8uZ2V0RGF0YShyKSE9PWUmJih1KFwic2V0dGluZyB0ZXh0L3BsYWluIGZhaWxlZFwiKSx0LnN1Y2Nlc3M9ITEpfSksbi5wcmV2ZW50RGVmYXVsdCgpfS5iaW5kKHRoaXMsZSx0KTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLG4pO3RyeXtkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIil9ZmluYWxseXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29weVwiLG4pfXJldHVybiBlLnN1Y2Nlc3N9ZnVuY3Rpb24gXyh0LGUpe1QodCk7dmFyIG49eChlKTtyZXR1cm4gRSgpLG59ZnVuY3Rpb24gVCh0KXt2YXIgZT1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtpZihlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVSYW5nZSgpO24uc2VsZWN0Tm9kZUNvbnRlbnRzKHQpLGUucmVtb3ZlQWxsUmFuZ2VzKCksZS5hZGRSYW5nZShuKX19ZnVuY3Rpb24gRSgpe3ZhciB0PWRvY3VtZW50LmdldFNlbGVjdGlvbigpO3QmJnQucmVtb3ZlQWxsUmFuZ2VzKCl9ZnVuY3Rpb24gRCh0KXt2YXIgZT1uZXcgYTtyZXR1cm4gZS5zZXREYXRhKHMsdCksZX1mdW5jdGlvbiBqKCl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIENsaXBib2FyZEV2ZW50JiZ2b2lkIDAhPT13aW5kb3cuY2xpcGJvYXJkRGF0YSYmdm9pZCAwIT09d2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YX1mdW5jdGlvbiBDKCl7cmV0dXJuIGUodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIG4odGhpcyxmdW5jdGlvbihlKXtpZihcIlwiPT09KHQ9d2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIikpKXRocm93IG5ldyBFcnJvcihcIkVtcHR5IGNsaXBib2FyZCBvciBjb3VsZCBub3QgcmVhZCBwbGFpbiB0ZXh0IGZyb20gY2xpcGJvYXJkXCIpO3JldHVyblsyLHRdfSl9KX10LkRUPWEsdC5kZWZhdWx0PWIsdC5yZWFkPXYsdC5yZWFkVGV4dD15LHQuc2V0RGVidWdMb2c9bCx0LnN1cHByZXNzV2FybmluZ3M9ZCx0LndyaXRlPXAsdC53cml0ZVRleHQ9aCxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcGJvYXJkLXBvbHlmaWxsLnByb21pc2UuanMubWFwXG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBtb3JwaCB7XFxuICAwJSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCUgNjAlIDQwJSAvIDcwJSAzMCUgNzAlIDMwJTsgfVxcbiAgMTAwJSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCU7IH0gfVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTsgfSB9XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzI1Q0VBNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnZmFudGFzeScsIGZhbnRhc3k7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG5cXG4uYWxlcnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAzMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGNvbG9yOiAjMDAwMDIyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gIG1pbi1oZWlnaHQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMDsgfVxcbiAgLmZvb3Rlcl9faGVhcnQge1xcbiAgICBwYWRkaW5nOiAwIDAuMTI1ZW07XFxuICAgIGNvbG9yOiAjMzAyM0FFOyB9XFxuICAuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmhlYWRlcl9fbGlua3Mge1xcbiAgICBtYXJnaW46IDAuNWVtIGF1dG8gMDtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcXG4gICAgbWF4LXdpZHRoOiAyNi43NXJlbTsgfVxcbiAgICAuaGVhZGVyX19saW5rcyBhIHtcXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgY29sb3I6ICNGRjAwOTk7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7IH1cXG4gICAgICAuaGVhZGVyX19saW5rcyBhIHN2ZyB7XFxuICAgICAgICB3aWR0aDogMS4zNWVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjM1ZW07XFxuICAgICAgICBmaWxsOiAjMDAwMDIyO1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IC0wLjNlbTsgfVxcbiAgICAgIC5oZWFkZXJfX2xpbmtzIGE6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgLmhlYWRlcl9fYnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDIyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGl0YWxpYztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cyBlYXNlLWluO1xcbiAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5oZWFkZXJfX2J1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzMwMjNBRTsgfVxcblxcbmgxIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDUwLCAyNTUsIDAsIDAuNCk7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBtYXJnaW46IDAgMCAwLjEyNWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDM2LjI1cmVtKSBhbmQgKG1pbi13aWR0aDogMjVyZW0pIHtcXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfSB9XFxuXFxuLmdlbmVyYXRvciB7XFxuICB3aWR0aDogNjB2bWluO1xcbiAgaGVpZ2h0OiA2MHZtaW47XFxuICBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMS44NzVyZW0pIHtcXG4gICAgLmdlbmVyYXRvciB7XFxuICAgICAgd2lkdGg6IDUwdm1pbjtcXG4gICAgICBoZWlnaHQ6IDUwdm1pbjsgfSB9XFxuICAuZ2VuZXJhdG9yX19zaGFwZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMjI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzMwMjNBRSAwJSwgIzAwMDAyMiAxMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlIDcwJSA3MCUgMzAlIC8gMzAlIDMwJSA3MCUgNzAlO1xcbiAgICBib3gtc2hhZG93OiAtMTB2bWluIDEwdm1pbiAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7IH1cXG4gICAgLmdlbmVyYXRvcl9fc2hhcGUtLTh2IHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xMTVkZWcsICNGRkZGRkYgMCUsIHJnYmEoMzcsIDIwNiwgMTY3LCAwKSA0MCUsIHJnYmEoMCwgMjU1LCAyNTUsIDApIDYwJSwgIzBmZiAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzAyM0FFIDAlLCAjMDAwMDIyIDEwMCUpOyB9XFxuICAuZ2VuZXJhdG9yX19oYW5kbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogMi41cmVtOyB9XFxuICAgIC5nZW5lcmF0b3JfX2hhbmRsZTpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMXJlbTtcXG4gICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgbGVmdDogMC43NXJlbTtcXG4gICAgICB0b3A6IDAuNzVyZW07XFxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDIyO1xcbiAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLW91dDtcXG4gICAgICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdzsgfVxcbiAgICAuZ2VuZXJhdG9yX19oYW5kbGUtLXNlY29uZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICMzMDIzQUU7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjsgfVxcbiAgICAuZ2VuZXJhdG9yX19oYW5kbGUtLXRoaXJkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogIzAwMDAyMjtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGOyB9XFxuICAgIC5nZW5lcmF0b3JfX2hhbmRsZS0tZm91cnRoOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZDogIzBmZjsgfVxcbiAgICAuZ2VuZXJhdG9yX19oYW5kbGUtLTh2LmFjdGl2ZTpiZWZvcmUsIC5nZW5lcmF0b3JfX2hhbmRsZS0tOHY6aG92ZXI6YmVmb3JlIHtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggI0ZGRjtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDIyOyB9XFxuICAgIC5nZW5lcmF0b3JfX2hhbmRsZTpub3QoLmdlbmVyYXRvcl9faGFuZGxlLS04dikuYWN0aXZlOmJlZm9yZSwgLmdlbmVyYXRvcl9faGFuZGxlOm5vdCguZ2VuZXJhdG9yX19oYW5kbGUtLTh2KTpob3ZlcjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICMwZmY7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNGRkY7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAyMjsgfVxcbiAgLmdlbmVyYXRvciAjdG9wIHtcXG4gICAgdG9wOiAtMS4yNXJlbTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gICAgLmdlbmVyYXRvciAjdG9wLmdlbmVyYXRvcl9faGFuZGxlLS04diB7XFxuICAgICAgbGVmdDogMTAlOyB9XFxuICAuZ2VuZXJhdG9yICNib3R0b20ge1xcbiAgICBib3R0b206IC0xLjI1cmVtO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgICAuZ2VuZXJhdG9yICNib3R0b20uZ2VuZXJhdG9yX19oYW5kbGUtLTh2IHtcXG4gICAgICBsZWZ0OiAxMCU7IH1cXG4gIC5nZW5lcmF0b3IgI2xlZnQge1xcbiAgICBsZWZ0OiAtMS4yNXJlbTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgICAuZ2VuZXJhdG9yICNsZWZ0LmdlbmVyYXRvcl9faGFuZGxlLS04diB7XFxuICAgICAgdG9wOiAxMCU7IH1cXG4gIC5nZW5lcmF0b3IgI3JpZ2h0IHtcXG4gICAgcmlnaHQ6IC0xLjI1cmVtO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuICAgIC5nZW5lcmF0b3IgI3JpZ2h0LmdlbmVyYXRvcl9faGFuZGxlLS04diB7XFxuICAgICAgdG9wOiAxMCU7IH1cXG4gIC5nZW5lcmF0b3IgI3RvcFJpZ2h0IHtcXG4gICAgdG9wOiAtMS4yNXJlbTtcXG4gICAgbGVmdDogOTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIC5nZW5lcmF0b3IgI2JvdHRvbVJpZ2h0IHtcXG4gICAgYm90dG9tOiAtMS4yNXJlbTtcXG4gICAgbGVmdDogOTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIC5nZW5lcmF0b3IgI2xlZnRCb3R0b20ge1xcbiAgICBsZWZ0OiAtMS4yNXJlbTtcXG4gICAgdG9wOiA5MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgLmdlbmVyYXRvciAjcmlnaHRCb3R0b20ge1xcbiAgICByaWdodDogLTEuMjVyZW07XFxuICAgIHRvcDogOTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG5cXG4ub3V0cHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG4gIC5vdXRwdXRfX2xhYmVsIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgfVxcbiAgLm91dHB1dF9fY29kZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGNvbG9yOiAjMDAwMDIyO1xcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjYyNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtOyB9XFxuICAub3V0cHV0X19idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDIyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgZWFzZS1pbjtcXG4gICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAub3V0cHV0X19idXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICMzMDIzQUU7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwLjg3NXJlbSkge1xcbiAgICAub3V0cHV0IHtcXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07IH1cXG4gICAgICAub3V0cHV0X19jb2RlIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xcbiAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgICAgIC5vdXRwdXRfX2J1dHRvbiB7XFxuICAgICAgICBmbGV4LXNocmluazogMTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzcmVtKSB7XFxuICAgIC5vdXRwdXQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICBtYXgtd2lkdGg6IDM5cmVtOyB9IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmNvbnRhaW5lcjo6YmVmb3JlLCAuY29udGFpbmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogNzB2bWF4O1xcbiAgICBoZWlnaHQ6IDcwdm1heDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xcbiAgICBsZWZ0OiAtMjB2bWluO1xcbiAgICB0b3A6IC0yMHZtaW47XFxuICAgIGFuaW1hdGlvbjogbW9ycGggMTVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUsIHNwaW4gMjBzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lsbC1jaGFuZ2U6IGJvcmRlci1yYWRpdXMsIHRyYW5zZm9ybTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTUlIDU1JTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gIC5jb250YWluZXI6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDcwdm1pbjtcXG4gICAgaGVpZ2h0OiA3MHZtaW47XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIHJpZ2h0OiAtMTB2bWluO1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYW5pbWF0aW9uOiBtb3JwaCAxMHMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSwgc3BpbiAyNnMgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDIwJSAyMCU7IH1cXG5cXG4uYWR2YW5jZWQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogMzlyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luOiAwLjVlbSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTYwcHgpIHtcXG4gICAgLmFkdmFuY2VkIHtcXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07IH0gfVxcbiAgLmFkdmFuY2VkX19zd2l0Y2gge1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07IH1cXG4gIC5hZHZhbmNlZF9fc2V0dGluZ3Mge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5hZHZhbmNlZF9fc2V0dGluZ3MudmlzaWJsZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMxLjI1cmVtKSB7XFxuICAgICAgICAuYWR2YW5jZWRfX3NldHRpbmdzLnZpc2libGUge1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9IH1cXG4gIC5hZHZhbmNlZF9fY2hlY2sge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG4gIC5hZHZhbmNlZCAuaW5wdXQtZ3JvdXAge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC5hZHZhbmNlZCAuaW5wdXQtZ3JvdXAgbGFiZWwge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07IH1cXG4gICAgLmFkdmFuY2VkIC5pbnB1dC1ncm91cCBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgICAgd2lkdGg6IDQuNXJlbTsgfVxcbiAgLmFkdmFuY2VkX19jaGVjazpjaGVja2VkICsgLmFkdmFuY2VkX190cmlnZ2VyIHNwYW46YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjRkYwMDk5O1xcbiAgICBsZWZ0OiAxLjE1ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDM3JSA2MyUgNTUlIDQ1JSAvIDI1JSA1MCUgNTAlIDc1JTsgfVxcbiAgLmFkdmFuY2VkX190cmlnZ2VyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmFkdmFuY2VkX190cmlnZ2VyIHNwYW4ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICB3aWR0aDogMmVtO1xcbiAgICAgIGhlaWdodDogMWVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzcmVtKSB7XFxuICAgICAgICAuYWR2YW5jZWRfX3RyaWdnZXIgc3BhbiB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtOyB9IH1cXG4gICAgICAuYWR2YW5jZWRfX3RyaWdnZXIgc3BhbjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAwLjdlbTtcXG4gICAgICAgIGhlaWdodDogMC43ZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgNTYlIDI5JSA3MCUgLyA1MCUgNzMlIDM4JSA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDIyO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMC4xNWVtO1xcbiAgICAgICAgdG9wOiAwLjE1ZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1vdXQsIGJhY2tncm91bmQgMC4zcyBlYXNlLW91dCwgYm9yZGVyLXJhZGl1cyAwLjRzIGVhc2UtaW4tb3V0OyB9XFxuXFxuLmlucHV0LWdyb3VwIGlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBmb250LWZhbWlseTogJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6ICMwMDAwMjI7XFxuICBwYWRkaW5nOiAwLjVlbSAwLjYyNWVtOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAuODVyZW0pIHtcXG4gIC5pbnB1dC1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgY2xpcGJvYXJkIGZyb20gJ2NsaXBib2FyZC1wb2x5ZmlsbC9idWlsZC9jbGlwYm9hcmQtcG9seWZpbGwucHJvbWlzZSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkanVzdGFibGVCb3gge1xuICBjb25zdHJ1Y3RvciAoe1xuICAgIHNoYXBlRWxlbUlkID0gJ3NoYXBlJyxcbiAgICBnZW5lcmF0b3JFbGVtSWQgPSAnY29kZScsXG4gICAgY29weUNvZGVJZCA9ICdjb3B5JyxcbiAgICBjb3BpZWRDb2RlSWQgPSAnY2xpcGJvYXJkX2NvcGllZCcsXG4gICAgYm94Q29udGFpbmVySWQgPSAnYm94JyxcbiAgICB3aWR0aElucHV0SWQgPSAnd2lkdGgnLFxuICAgIGhlaWdodElucHV0SWQgPSAnaGVpZ2h0JyxcbiAgICBlbmFibGVBZHZhbmNlZElkID0gJ2VuYWJsZS1hZHZhbmNlZCcsXG4gICAgaW5pdFN0YXRlID0gbnVsbCxcbiAgICBtb3ZlYWJsZUVsZW1zIH1cbiAgICA9IHt9KSB7XG4gICAgdGhpcy5nZW5lcmF0b3JFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2VuZXJhdG9yRWxlbUlkKVxuICAgIHRoaXMuc2hhcGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hhcGVFbGVtSWQpXG4gICAgdGhpcy5jb3BpZWRDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29waWVkQ29kZUlkKVxuICAgIHRoaXMuYm94Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm94Q29udGFpbmVySWQpXG4gICAgdGhpcy53aWR0aElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2lkdGhJbnB1dElkKVxuICAgIHRoaXMuaGVpZ2h0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoZWlnaHRJbnB1dElkKVxuICAgIHRoaXMud2lkdGhJbnB1dC5vbmNoYW5nZSA9ICgpID0+IHsgdGhpcy51cGRhdGVTdGF0ZSh0aGlzLndpZHRoSW5wdXQudmFsdWUsICd3aWR0aCcpIH1cbiAgICB0aGlzLmhlaWdodElucHV0Lm9uY2hhbmdlID0gKCkgPT4geyB0aGlzLnVwZGF0ZVN0YXRlKHRoaXMuaGVpZ2h0SW5wdXQudmFsdWUsICdoZWlnaHQnKSB9XG4gICAgdGhpcy5lbmFibGVBZHZhbmNlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVuYWJsZUFkdmFuY2VkSWQpXG4gICAgdGhpcy5lbmFibGVBZHZhbmNlZC5vbmNsaWNrID0gdGhpcy5lbmFibGVBZHZhbmNlZE9uQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuaW5pdFN0YXRlKGluaXRTdGF0ZSlcbiAgICB0aGlzLmluaXRBZHZhbmNlZCgpXG4gICAgdGhpcy5oYW5kbGVzID0gdGhpcy5pbml0SGFuZGxlcyhtb3ZlYWJsZUVsZW1zKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvcHlDb2RlSWQpLm9uY2xpY2sgPSB0aGlzLnNldENsaXBib2FyZC5iaW5kKHRoaXMpXG4gIH1cbiAgaW5pdEhhbmRsZXMgKG1vdmVhYmxlRWxlbXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgbWV0aG9kIGluaXRIYW5kbGVzIScpXG4gIH1cbiAgdXBkYXRlQm9yZGVyUmFkaXVzICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgbWV0aG9kIHVwZGF0ZUJvcmRlclJhZGl1cyEnKVxuICB9XG4gIGluaXRTdGF0ZSAoc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgbWV0aG9kIGluaXRTdGF0ZSEnKVxuICB9XG4gIGluaXRBZHZhbmNlZCAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUud2lkdGggIT09ICcnICYmIHRoaXMuc3RhdGUuaGVpZ2h0ICE9PSAnJykge1xuICAgICAgdGhpcy5lbmFibGVBZHZhbmNlZC5jaGVja2VkID0gdHJ1ZVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpbWVuc2lvbi1pbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKVxuICAgIH1cbiAgfVxuICBlbmFibGVBZHZhbmNlZE9uQ2xpY2sgKGUpIHtcbiAgICBpZiAodGhpcy5lbmFibGVBZHZhbmNlZC5jaGVja2VkKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGltZW5zaW9uLWlucHV0JykuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXG4gICAgICB0aGlzLnN0YXRlLndpZHRoID0gdGhpcy5ib3hDb250YWluZXIub2Zmc2V0V2lkdGhcbiAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5ib3hDb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgICB0aGlzLnVwZGF0ZVVJKClcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpbWVuc2lvbi1pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKVxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnJywgJ3dpZHRoJylcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoJycsICdoZWlnaHQnKVxuICAgICAgdGhpcy5ib3hDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJydcbiAgICAgIHRoaXMuYm94Q29udGFpbmVyLnN0eWxlLndpZHRoID0gJydcbiAgICB9XG4gIH1cblxuICBzZXRDbGlwYm9hcmQgKCkge1xuICAgIGNsaXBib2FyZC53cml0ZVRleHQodGhpcy5nZW5lcmF0b3JFbGVtLmlubmVySFRNTCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmNvcGllZENvZGUuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJhbGVydFwiPkNvcGllZCB0byBjbGlwYm9hcmQ8L2Rpdj4nXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5jb3BpZWRDb2RlLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnRcIj5Ob3QgU3VwcG9ydGVkPC9kaXY+J1xuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvcGllZENvZGUuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gICAgICAsIDIwMDApXG4gIH1cbiAgc2V0VXJsSGFzaCAoaGFzaCkge1xuICAgIGlmICh3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeSkge1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgJyMnICsgaGFzaClcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoXG4gICAgfVxuICB9XG4gIHVwZGF0ZVN0YXRlICh2YWwsIGtleSkge1xuICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbFxuICAgIHRoaXMudXBkYXRlVUkoKVxuICB9XG4gIHVwZGF0ZVVJICgpIHtcbiAgICB0aGlzLnVwZGF0ZUJvcmRlclJhZGl1cygpXG4gICAgdGhpcy51cGRhdGVCb3goKVxuICB9XG4gIHVwZGF0ZUJveCAoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZUFkdmFuY2VkLmNoZWNrZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgc3R5bGVIZWlnaHQgPSB0aGlzLnN0YXRlLmhlaWdodCA9PSAnJyA/ICcnIDogdGhpcy5zdGF0ZS5oZWlnaHQgKyAncHgnXG4gICAgbGV0IHN0eWxlV2lkdGggPSB0aGlzLnN0YXRlLndpZHRoID09ICcnID8gJycgOiB0aGlzLnN0YXRlLndpZHRoICsgJ3B4J1xuICAgIHRoaXMuYm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHN0eWxlSGVpZ2h0XG4gICAgdGhpcy5ib3hDb250YWluZXIuc3R5bGUud2lkdGggPSBzdHlsZVdpZHRoXG4gICAgdGhpcy5oZWlnaHRJbnB1dC52YWx1ZSA9IHRoaXMuc3RhdGUuaGVpZ2h0XG4gICAgdGhpcy53aWR0aElucHV0LnZhbHVlID0gdGhpcy5zdGF0ZS53aWR0aFxuICB9XG4gIHNhdmVVcmxQYXJhbXMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBtZXRob2Qgc2F2ZVVybFBhcmFtcyEnKVxuICB9XG4gIHN0YXRpYyBsb2FkVXJsUGFyYW1zICh1cmwpIHtcbiAgICBjb25zdCByZWdleCA9IC8jKFxcZFxcZD98MTAwKVxcLihcXGRcXGQ/fDEwMClcXC4oXFxkXFxkP3wxMDApXFwuKFxcZFxcZD98MTAwKS0oPzooXFxkXFxkP3wxMDApXFwuKFxcZFxcZD98MTAwKVxcLihcXGRcXGQ/fDEwMClcXC4oXFxkXFxkP3wxMDApKT8tKFxcZCopLihcXGQqKS9nbVxuICAgIGxldCBwYXJhbXNUb0F0dHJpYnV0ZSA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnRCb3R0b20nLCAndG9wUmlnaHQnLCAncmlnaHRCb3R0b20nLCAnYm90dG9tUmlnaHQnLCAnaGVpZ2h0JywgJ3dpZHRoJ11cbiAgICBsZXQgYXR0cmlidXRlcyA9IHt9XG4gICAgbGV0IG1cbiAgICBpZiAoIXJlZ2V4LnRlc3QodXJsKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmVnZXgubGFzdEluZGV4ID0gMFxuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWModXJsKSkgIT09IG51bGwpIHtcbiAgICAgIG0uZm9yRWFjaCgobWF0Y2gsIGdyb3VwSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGdyb3VwSW5kZXggIT0gMCkge1xuICAgICAgICAgIGF0dHJpYnV0ZXNbcGFyYW1zVG9BdHRyaWJ1dGVbZ3JvdXBJbmRleCAtIDFdXSA9IG1hdGNoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH1cbn1cbiIsImltcG9ydCBBZGp1c3RhYmxlQm94IGZyb20gJy4vQWRqdXN0YWJsZUJveCdcbmltcG9ydCBNb3ZhYmxlIGZyb20gJy4vbW92YWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbENvbnRyb2xCb3ggZXh0ZW5kcyBBZGp1c3RhYmxlQm94IHtcbiAgaW5pdFN0YXRlIChzdGF0ZSkge1xuICAgIGxldCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgICBsZWZ0OiAxMCxcbiAgICAgIHJpZ2h0OiAxMCxcbiAgICAgIHRvcDogMTAsXG4gICAgICBib3R0b206IDEwLFxuICAgICAgbGVmdEJvdHRvbTogOTAsXG4gICAgICByaWdodEJvdHRvbTogOTAsXG4gICAgICB0b3BSaWdodDogOTAsXG4gICAgICBib3R0b21SaWdodDogOTAsXG4gICAgICB3aWR0aDogJycsXG4gICAgICBoZWlnaHQ6ICcnLFxuICAgICAgYWR2YW5jZWRNb2RlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgPT0gbnVsbCA/IGRlZmF1bHRTdGF0ZSA6IHN0YXRlXG4gIH1cblxuICBpbml0SGFuZGxlcyAobW92ZWFibGVFbGVtcykge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBuZXcgTW92YWJsZShtb3ZlYWJsZUVsZW1zLmxlZnQsIHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKSwgJ3knLCB0aGlzLnN0YXRlLmxlZnQsIHRoaXMuc2F2ZVVybFBhcmFtcy5iaW5kKHRoaXMpKSxcbiAgICAgIHJpZ2h0OiBuZXcgTW92YWJsZShtb3ZlYWJsZUVsZW1zLnJpZ2h0LCB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyksICd5JywgdGhpcy5zdGF0ZS5yaWdodCwgdGhpcy5zYXZlVXJsUGFyYW1zLmJpbmQodGhpcykpLFxuICAgICAgdG9wOiBuZXcgTW92YWJsZShtb3ZlYWJsZUVsZW1zLnRvcCwgdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpLCAneCcsIHRoaXMuc3RhdGUudG9wLCB0aGlzLnNhdmVVcmxQYXJhbXMuYmluZCh0aGlzKSksXG4gICAgICBib3R0b206IG5ldyBNb3ZhYmxlKG1vdmVhYmxlRWxlbXMuYm90dG9tLCB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyksICd4JywgdGhpcy5zdGF0ZS5ib3R0b20sIHRoaXMuc2F2ZVVybFBhcmFtcy5iaW5kKHRoaXMpKSxcbiAgICAgIGxlZnRCb3R0b206IG5ldyBNb3ZhYmxlKG1vdmVhYmxlRWxlbXMubGVmdEJvdHRvbSwgdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpLCAneScsIHRoaXMuc3RhdGUubGVmdEJvdHRvbSwgdGhpcy5zYXZlVXJsUGFyYW1zLmJpbmQodGhpcykpLFxuICAgICAgcmlnaHRCb3R0b206IG5ldyBNb3ZhYmxlKG1vdmVhYmxlRWxlbXMucmlnaHRCb3R0b20sIHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKSwgJ3knLCB0aGlzLnN0YXRlLnJpZ2h0Qm90dG9tLCB0aGlzLnNhdmVVcmxQYXJhbXMuYmluZCh0aGlzKSksXG4gICAgICB0b3BSaWdodDogbmV3IE1vdmFibGUobW92ZWFibGVFbGVtcy50b3BSaWdodCwgdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpLCAneCcsIHRoaXMuc3RhdGUudG9wUmlnaHQsIHRoaXMuc2F2ZVVybFBhcmFtcy5iaW5kKHRoaXMpKSxcbiAgICAgIGJvdHRvbVJpZ2h0OiBuZXcgTW92YWJsZShtb3ZlYWJsZUVsZW1zLmJvdHRvbVJpZ2h0LCB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyksICd4JywgdGhpcy5zdGF0ZS5ib3R0b21SaWdodCwgdGhpcy5zYXZlVXJsUGFyYW1zLmJpbmQodGhpcykpXG4gICAgfVxuICB9XG4gIHVwZGF0ZUJvcmRlclJhZGl1cyAoKSB7XG4gICAgdmFyIGJyZCA9IHRoaXMuc3RhdGUudG9wICsgJyUgJ1xuICAgIGJyZCArPSAoMTAwIC0gdGhpcy5zdGF0ZS50b3BSaWdodCkgKyAnJSAnXG4gICAgYnJkICs9ICgxMDAgLSB0aGlzLnN0YXRlLmJvdHRvbVJpZ2h0KSArICclICdcbiAgICBicmQgKz0gdGhpcy5zdGF0ZS5ib3R0b20gKyAnJSAvICdcbiAgICBicmQgKz0gdGhpcy5zdGF0ZS5sZWZ0ICsgJyUgJ1xuICAgIGJyZCArPSB0aGlzLnN0YXRlLnJpZ2h0ICsgJyUgJ1xuICAgIGJyZCArPSAoMTAwIC0gdGhpcy5zdGF0ZS5yaWdodEJvdHRvbSkgKyAnJSAnXG4gICAgYnJkICs9ICgxMDAgLSB0aGlzLnN0YXRlLmxlZnRCb3R0b20pICsgJyUgJ1xuICAgIHRoaXMuc2hhcGVFbGVtLnN0eWxlWydib3JkZXItcmFkaXVzJ10gPSBicmRcbiAgICB0aGlzLmdlbmVyYXRvckVsZW0uaW5uZXJIVE1MID0gYnJkXG4gIH1cbiAgc2F2ZVVybFBhcmFtcyAoKSB7XG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQsIGxlZnRCb3R0b20sIHRvcFJpZ2h0LCByaWdodEJvdHRvbSwgYm90dG9tUmlnaHQgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgaGFzaCA9IGAke2xlZnR9LiR7dG9wfS4ke3JpZ2h0fS4ke2JvdHRvbX0tJHtsZWZ0Qm90dG9tfS4ke3RvcFJpZ2h0fS4ke3JpZ2h0Qm90dG9tfS4ke2JvdHRvbVJpZ2h0fS0ke2hlaWdodH0uJHt3aWR0aH1gXG4gICAgdGhpcy5zZXRVcmxIYXNoKGhhc2gpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmFibGUge1xuICBjb25zdHJ1Y3RvciAoZWxlbSwgb25DaGFuZ2UsIGF4aXMgPSAneCcsIGluaXRQb3NpdGlvbiA9IDMwLCBvbkRyYWdFbmQgPSAoKSA9PiB7fSkge1xuICAgIHRoaXMuYXhpcyA9IGF4aXNcbiAgICB0aGlzLnBvcyA9IGluaXRQb3NpdGlvblxuICAgIHRoaXMuZWxlbSA9IGVsZW1cblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZVxuICAgIHRoaXMub25EcmFnRW5kID0gb25EcmFnRW5kXG4gICAgdGhpcy5lbGVtLm9ubW91c2Vkb3duID0gdGhpcy5kcmFnTW91c2VEb3duLmJpbmQodGhpcylcbiAgICB0aGlzLmVsZW0ub250b3VjaHN0YXJ0ID0gdGhpcy5kcmFnTW91c2VEb3duLmJpbmQodGhpcylcbiAgICB0aGlzLnNldEluaXRQb3MoaW5pdFBvc2l0aW9uKVxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5wb3MsIHRoaXMuZWxlbS5pZClcbiAgfVxuICBkcmFnTW91c2VEb3duIChlKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jdXJyZW50U3BhbiA9IGUudGFyZ2V0XG4gICAgdGhpcy5jdXJyZW50U3Bhbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgZG9jdW1lbnQub25tb3VzZXVwID0gdGhpcy5jbG9zZURyYWdFbGVtZW50LmJpbmQodGhpcylcbiAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gdGhpcy5jbG9zZURyYWdFbGVtZW50LmJpbmQodGhpcylcblxuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5lbGVtZW50RHJhZy5iaW5kKHRoaXMpXG4gICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSB0aGlzLmVsZW1lbnREcmFnLmJpbmQodGhpcylcbiAgfVxuICBlbGVtZW50RHJhZyAoZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudFxuICAgIGlmICh0eXBlb2YgVG91Y2hFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgIHZhciB0b3VjaG9iaiA9IGUuY2hhbmdlZFRvdWNoZXNbMF0gLy8gZmlyc3QgZmluZ2VyXG4gICAgICB0aGlzLnNldFBvcyh0b3VjaG9iai5jbGllbnRYLCB0b3VjaG9iai5jbGllbnRZKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFBvcyhlLmNsaWVudFgsIGUuY2xpZW50WSlcbiAgICB9XG4gIH1cbiAgc2V0SW5pdFBvcyhwb3MpIHtcbiAgICBpZiAodGhpcy5heGlzID09ICd4Jykge1xuICAgICAgdGhpcy5lbGVtLnN0eWxlLmxlZnQgPSBwb3MgKyAnJSdcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtLnN0eWxlLnRvcCA9IHBvcyArICclJ1xuICAgIH1cbiAgfVxuICBzZXRQb3MgKF9wb3NYLCBfcG9zWSkge1xuICAgIGxldCBib3hSZWN0ID0gdGhpcy5lbGVtLnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAodGhpcy5heGlzID09ICd4Jykge1xuICAgICAgdGhpcy5wb3MgPSB0aGlzLnZhbEJldHdlZW4oKChfcG9zWCAtIDUgLSBib3hSZWN0WydsZWZ0J10pLnRvRml4ZWQoMCkgKiAxMDAgLyBib3hSZWN0Wyd3aWR0aCddKS50b0ZpeGVkKDApLCAwLCAxMDApXG4gICAgICB0aGlzLmVsZW0uc3R5bGUubGVmdCA9IHRoaXMucG9zICsgJyUnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zID0gdGhpcy52YWxCZXR3ZWVuKCgoX3Bvc1kgLSA1IC0gYm94UmVjdFsndG9wJ10pLnRvRml4ZWQoMCkgKiAxMDAgLyBib3hSZWN0WydoZWlnaHQnXSkudG9GaXhlZCgwKSwgMCwgMTAwKVxuICAgICAgdGhpcy5lbGVtLnN0eWxlLnRvcCA9IHRoaXMucG9zICsgJyUnXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5wb3MsIHRoaXMuZWxlbS5pZClcbiAgfVxuXG4gIGNsb3NlRHJhZ0VsZW1lbnQgKCkge1xuICAgIHRoaXMuY3VycmVudFNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB0aGlzLm9uRHJhZ0VuZCgpXG4gICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbFxuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbFxuICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsXG4gICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsXG4gIH1cblxuICB2YWxCZXR3ZWVuICh2LCBtaW4sIG1heCkge1xuICAgIHJldHVybiAoTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHYpKSlcbiAgfVxufSIsImltcG9ydCAnLi9zY3NzL21haW4uc2NzcydcbmltcG9ydCBGdWxsQ29udHJvbEJveCBmcm9tIFwiLi9qcy9GdWxsQ29udHJvbEJveFwiO1xuXG52YXIgbW92YWJsZXMgPSB7XG4gIGxlZnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0JyksXG4gIHJpZ2h0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKSxcbiAgYm90dG9tOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90dG9tJyksXG4gIHRvcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcCcpLFxuICBsZWZ0Qm90dG9tOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEJvdHRvbScpLFxuICByaWdodEJvdHRvbTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Qm90dG9tJyksXG4gIGJvdHRvbVJpZ2h0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90dG9tUmlnaHQnKSxcbiAgdG9wUmlnaHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BSaWdodCcpXG59XG5sZXQgcGFyYW1zID0gRnVsbENvbnRyb2xCb3gubG9hZFVybFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZilcbnZhciBteUJveCA9IG5ldyBGdWxsQ29udHJvbEJveCh7bW92ZWFibGVFbGVtczogbW92YWJsZXMsIGluaXRTdGF0ZTogcGFyYW1zfSlcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9