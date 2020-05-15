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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//dom node collection\n\nclass DOMNodeCollection {\n  constructor (htmlElements) {\n    // debugger;\n    this.htmlElements = htmlElements;\n  }\n\n  addClass(className) {\n    for (let i = 0; i < this.htmlElements.length; i++) {\n      this.htmlElements[i].classList.add(className);\n    }\n\n    return this;\n  }\n\n  removeClass(className) {\n    for (let i = 0; i < this.htmlElements.length; i++) {\n      this.htmlElements[i].classList.remove(className);\n    }\n\n    return this;\n  }\n\n  toggleClass(className) {\n    for (let i = 0; i < this.htmlElements.length; i++) {\n      if (this.htmlElements[i].classList.contains(className)) {\n        this.htmlElements[i].classList.remove(className);\n      } else {\n        this.htmlElements[i].classList.add(className);\n      }\n    }\n\n    return this;\n  }\n\n  html(string) {\n    console.log(typeof string);\n    if (string === undefined) {\n      return this.htmlElements[0].innerHTML;\n    } else if (typeof string === \"string\") {\n      for (let i = 0; i < this.htmlElements.length; i++) {\n        this.htmlElements[i].innerHTML = string;\n      } \n    } else { \n      alert(\"Pysch! That's not a valid argument!\");\n    }\n  }\n\n  empty () {\n    this.html(\"\");\n  }\n\n  append(...args) {\n    for (let i = 0; i < args.length; i++) {\n      if (!((typeof args[i] === \"string\") || (args[i] instanceof HTMLElement) || (args[i] instanceof DOMNodeCollection))) {\n        alert(\"The argument has to be an DOMNodeCollection, an HTMLElement, or a string representation of HTML!\")\n      }\n  \n      if (args[i] instanceof DOMNodeCollection) {\n        for (let j = 0; j < args[i].htmlElements.length; j++) {\n          this.appendHelper(args[i].htmlElements[j]);\n        }\n      } else {\n        let ele = args[i];\n        \n        if (typeof args[i] === \"string\") {\n          const wrapper = document.createElement(\"div\");\n          wrapper.innerHTML = args[i];\n          ele = wrapper.firstChild;\n        }\n\n        this.appendHelper(ele);\n      }\n    }\n  }\n\n  appendHelper(ele) { // ele must be an HTMLElement\n    this.htmlElements[this.htmlElements.length - 1].appendChild(ele);\n\n    if (this.htmlElements.length > 1) {\n      for (let i = 0; i < this.htmlElements.length - 1; i++) {\n        this.htmlElements[i].appendChild(ele.cloneNode(true));\n      }\n    }\n  }\n\n  attr(attribute, value) {\n    if (value === undefined) {\n      return this.htmlElements[0].getAttribute(attribute);\n    } else {\n      \n    }\n\n  }\n\n\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nfunction $l(arg) { // \"lite\" version of jQuery's $ function. hence the \"l\"\n  // debugger;\n  if (typeof arg === \"string\") { // Selector-style\n    const nodeList = document.querySelectorAll(arg); // array-like object\n    const nodeArr = Array.from(nodeList); // array of nodes\n    return new DOMNodeCollection(nodeArr);\n  } else if (arg instanceof HTMLElement) { // Wrapper-style?\n    const htmlElement = [arg];\n    return new DOMNodeCollection(htmlElement);\n  }\n}\n\n\n\nwindow.$l = $l;\n\ndocument.addEventListener(\"DOMContentLoaded\", (e) => {\n  // debugger;\n  const $testLi = $(\"#ele-1\");\n\n  window.$testLi = $testLi\n});\n\nfunction debugFunc() {\n  $(\"div\").append($testLi);\n}\n\nwindow.debugFunc = debugFunc;\n\n// e.g. $l(\".class\")\n// $(\"#id\")\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });