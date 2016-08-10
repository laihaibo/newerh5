/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	* @Author: laihaibo
	* @Date:   2016-08-10 12:10:03
	* @Last Modified by:   laihaibo
	* @Last Modified time: 2016-08-10 14:14:02
	*/

	'use strict';
	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(11);
	// require("./css/index.css");
	var H5ComponentBase = __webpack_require__(13);
	var H5ComponentBar = __webpack_require__(14);
	var H5ComponentPoint = __webpack_require__(15);
	var H5 = __webpack_require__(16);
	var H5_loading = __webpack_require__(17);
	$(function () {
	  var h5 = new H5();
	  h5.whenAddPage = function () {
	    this.addComponent('slide_up', {
	      bg: 'imgs/next.png',
	      center: true,
	      css: {
	        opacity: 0,
	        left: 0, bottom: -20, width: 20, height: 25, zIndex: 999
	      },
	      animateIn: {
	        opacity: 1, bottom: '-1px'
	      },
	      animateOut: {
	        opacity: 0, bottom: '-20px'
	      },
	      delay: 2000
	    })
	  };

	  h5
	    .addPage('face')
	    .addComponent('topic', {
	      center: true,
	      width: 395,
	      height: 130,
	      bg: 'imgs/face_logo.png',
	      css: {
	        top: 0,
	        opacity: 0
	      },
	      animateIn: {
	        top: 100,
	        opacity: 1
	      },
	      animateOut: {
	        top: 0,
	        opacity: 0
	      }
	    })
	    .addComponent('slogan', {
	      center: true,
	      width: 365,
	      height: 99,
	      bg: 'imgs/face_slogan.png',
	      css: {
	        top: 180,
	        opacity: 0
	      },
	      animateIn: {
	        left: '50%',
	        opacity: 1
	      },
	      animateOut: {
	        left: '0',
	        opacity: 0
	      },
	      delay: 500
	    })
	    .addComponent('face_ad_left', {
	      width: 370,
	      height: 493,
	      bg: 'imgs/face_img_left.png',
	      css: {
	        left: -50,
	        bottom: -50,
	        opacity: 0
	      },
	      animateIn: {
	        left: 0,
	        bottom: 0,
	        opacity: 1
	      },
	      animateOut: {
	        left: -50,
	        bottom: -50,
	        opacity: 0
	      },
	      delay: 800
	    })
	    .addComponent('face_ad_right', {
	      width: 276,
	      height: 449,
	      bg: 'imgs/face_img_right.png',
	      css: {
	        right: -50,
	        bottom: -50,
	        opacity: 0
	      },
	      animateIn: {
	        right: 0,
	        bottom: 0,
	        opacity: 1
	      },
	      animateOut: {
	        right: -50,
	        bottom: -50,
	        opacity: 0
	      },
	      delay: 800
	    })
	    .addPage('desc')
	    .addComponent('caption', {
	      text: '核心理念'
	    })
	    .addComponent('text', {
	      center: true,
	      width: 500,
	      height: 30,
	      text: 'IT教育网=只学有用的',
	      css: {
	        top: 160,
	        opacity: 0, textAlign: 'center', color: 'red', fontSize: '26px'
	      },
	      animateIn: {
	        top: 160,
	        opacity: 1
	      },
	      animateOut: {
	        top: 240,
	        opacity: 0
	      },
	      delay: 0
	    })
	    .addComponent('description', {
	      center: true,
	      width: 481,
	      height: 295,
	      bg: 'imgs/description_bg.gif',
	      text: 'IT教育网=只学有用的',
	      css: {
	        top: 300,
	        opacity: 0, boxSizing: 'border-box', padding: '8px 5px 10px', color: '#fff', fontSize: '15px', lineHeight: '18px', textAlign: 'justify'
	      },
	      text: '2013年，IT教育网的诞生引领中国IT职业教育进入新时代；高质量实战课程、全新教学模式、实时互动学习，以领先优势打造行业品牌；迄今为止，IT教育网已成为中国规模最大、互动性最高的IT技能学习平台。',
	      animateIn: {
	        top: 240,
	        opacity: 1
	      },
	      animateOut: {
	        top: 300,
	        opacity: 0
	      },
	      delay: 1000
	    })
	    .addComponent('people', {
	      center: true,
	      width: 515,
	      height: 305,
	      bg: 'imgs/p1_people.png',
	      css: {
	        bottom: 0,
	        opacity: 0
	      },
	      animateIn: {
	        bottom: 40,
	        opacity: 1
	      },
	      animateOut: {
	        bottom: 0,
	        opacity: 0
	      },
	      delay: 500
	    })
	    .addPage('qdkfkc')
	    .addComponent('caption', { text: '前端开发课程' })//Bar
	    .addComponent('bar', {
	      type: 'bar',
	      data: [
	        ['HTML5', .5, 'green'],
	        ['CSS3', .1, 'blue', 0, '110%'],
	        ['JS', .1, 'red', 0, '-50%'],
	      ],


	      width: 530,
	      height: 600,

	      css: {
	        top: 180,
	        opacity: 0,
	      },
	      animateIn: { top: 300, opacity: 1, },
	      animateOut: { top: 180, opacity: 0, },
	      center: true
	    })
	    .addComponent('msg', {
	      text: '前端开发课程JS占到50%',
	      css: {
	        opacity: 0, bottom: 120,
	        textAlign: 'center', width: '100%', color: '#ff7676'
	      },
	      animateIn: { opacity: 1 },
	      animateOut: { opacity: 0 }
	    })
	    .addPage('kcndfb')
	    .addComponent('caption', { text: '课程难度分布' })//Point
	    .addComponent('point', {
	      type: 'point',
	      data: [
	        ['HTML5', .5, 'green', '20%', '0'],
	        ['CSS3', .3, 'aqua', 0, '110%'],
	        ['JS', .3, 'red', '-20%', '-50%'],
	      ],


	      width: 300,
	      height: 300,

	      css: {
	        bottom: 0,
	        opacity: 0,
	      },
	      animateIn: { bottom: '40%', opacity: 1, },
	      animateOut: { bottom: 0, opacity: 0, },
	      center: true,
	    })
	    .addComponent('msg', {
	      text: '课程难度最高为50%',
	      css: {
	        opacity: 0, bottom: 120,
	        textAlign: 'center', width: '100%', color: '#ff7676'
	      },
	      animateIn: { opacity: 1 },
	      animateOut: { opacity: 0 }
	    })
	    .addPage('tails')
	    .addComponent('logo', {
	      center: true,
	      width: 359,
	      height: 129,
	      bg: 'imgs/tail_logo.png',
	      css: {
	        top: 240,
	        opacity: 0
	      },
	      animateIn: {
	        opacity: 1,
	        top: 210
	      },
	      animateOut: {
	        opacity: 0,
	        top: 240
	      },
	    })
	    .addComponent('slogan', {
	      center: true,
	      width: 359,
	      height: 129,
	      bg: 'imgs/tail_slogan.png',
	      css: {
	        top: 280,
	        opacity: 0
	      },
	      animateIn: {
	        opacity: 1,
	        left: '50%'
	      },
	      animateOut: {
	        opacity: 0,
	        left: '0%'
	      },
	      delay: 500,
	    })
	    .addComponent('share', {
	      width: 128,
	      height: 120,
	      bg: 'imgs/tail_share.png',
	      css: {
	        top: 110,
	        opacity: 0
	      },
	      animateIn: {
	        opacity: 1,
	        top: 10,
	        right: 10,
	        right: 10
	      },
	      animateOut: {
	        opacity: 0,
	        top: 110,
	        right: 110
	      },
	      delay: 500,
	    })
	    .addComponent('back', {
	      center: true,
	      width: 52,
	      height: 50,
	      bg: 'imgs/tail_back.png',
	      onclick: function () {
	        $.fn.fullpage.moveTo(1);
	      }
	    })
	    .loader(['imgs/tail_back.png', 'imgs/tail_share.png', 'imgs/tail_slogan.png', 'imgs/footer.png']);
	});
	// $(function(){
	//             $('#h5_fullpage').fullpage({
	//             anchors:['page1','page2','page3','page4','page5'],
	//           });
	//         });


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* H5对象的全局样式 */\r\n.h5{\r\n  height: 100%;\r\n}\r\n.h5_page{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #ddd;\r\n  background-size: 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5_loading.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5_loading.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*loading动画样式*/\r\nbody{\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.loading{\r\n  width: 60px;\r\n  height: 60px;\r\n  position: relative;\r\n  margin: -30px auto;\r\n  top: 50%;\r\n  background-color: #ccc;\r\n}\r\n\r\n.loading #rate{\r\n  font-size: 9px;\r\n  width: 100%;\r\n  text-align: center;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  color: #0062e0;\r\n  position: absolute;\r\n  top: 100%;\r\n}\r\n.double-bounce1,.double-bounce2{\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  background-color: #0062e0;\r\n  left: 0;\r\n  top: 0;\r\n  position: absolute;\r\n  opacity: .7;\r\n}\r\n.double-bounce1{\r\n  -webkit-animation:bounce 2s infinite ease-in-out 0s;\r\n}\r\n.double-bounce2{\r\n  -webkit-animation:bounce2 2s infinite ease-in-out 0s;\r\n}\r\n@-webkit-keyframes bounce{\r\n  0%,100%{\r\n    transform: scale(0);\r\n  }\r\n  50%{\r\n    transform: scale(1);\r\n  }\r\n}\r\n@-webkit-keyframes bounce2{\r\n  0%,100%{\r\n    transform: scale(1);\r\n  }\r\n  50%{\r\n    transform: scale(0);\r\n  }\r\n}\r\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentBase.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentBase.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* 基本图文组件样式 */\r\n.h5_component{\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  position: absolute;\r\n}\r\n.h5_component{\r\n  /*transition: all 0.1s;*/\r\n}\r\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentBar.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentBar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* 柱状组件样式 */\r\n.ht_component_bar{\r\n\r\n}\r\n.h5_component_bar .bar{\r\n  height: 15px;\r\n  font-size: 12px;\r\n  line-height: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n.h5_component_bar .name{\r\n  width: 60px;\r\n  float: left;\r\n  color: #000;\r\n  text-align: center;\r\n}\r\n.h5_component_bar .rate{\r\n  height: 15px;\r\n  margin-left: 5px;\r\n  float: left;\r\n  position: relative;\r\n}\r\n.h5_component_bar .rate .bg{\r\n  background-color: #99c0ff;\r\n  width: 0%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.h5_component_bar .per{\r\n  width: 20px;\r\n  color: #99c0ff;\r\n  margin-left: 5px;\r\n  float: left;\r\n}\r\n.h5_component_bar_load .rate .bg{\r\n  -webkit-transition:all 0.5s 0.5s;\r\n  width: 100%;\r\n}\r\n.h5_component_bar_load .per{\r\n  -webkit-transition:all 1s 1.5s;\r\n  opacity: 1;\r\n}\r\n\r\n.h5_component_bar_leave .rate .bg{\r\n  width:0%;\r\n}\r\n.h5_component_bar_leave .per{\r\n  opacity: 0;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./H5ComponentPoint.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./H5ComponentPoint.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* 散点图组件样式 */\r\n.h5_component_point{\r\n  color: #fff;\r\n}\r\n\r\n.h5_component_point .point{\r\n  display: block;\r\n  background-color: #ccc;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n}\r\n.h5_component_point .point_name{\r\n  height: 30px;\r\n  width: 100%;\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  font-size: 22px;\r\n}\r\n.h5_component_point .point_rate{\r\n  display: block;\r\n  width: 100%;\r\n  font-size: 0.5em;\r\n}\r\n\r\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* 基本图文组件对象 */

	var H5ComponentBase = function (name, cfg) {
	  var cfg = cfg || {};
	  var id = ('h5_c' + Math.random()).replace('.', '_');
	  //把当前的组件类型添加到样式中进行标记
	  var cls = ' h5_component_' + cfg.type;
	  var component = $('<div class="h5_component h5_component_name_' + name + cls + '" id="' + id + '">');

	  cfg.text && component.text(cfg.text);
	  cfg.width && component.width(cfg.width / 2);
	  cfg.height && component.height(cfg.height / 2);

	  cfg.css && component.css(cfg.css);
	  cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');

	  if (cfg.center === true) {
	    component.css({
	      marginLeft: (cfg.width / 4 * -1) + 'px',
	      left: '50%'
	    })
	  }
	  if (typeof cfg.onclick === 'function') {
	    component.on('click', cfg.onclick);
	  }

	  component.on('onLoad', function () {
	    // $(this).fadeIn();
	    setTimeout(function () {
	      component.addClass(cls + '_load').removeClass(cls + '_leave');
	      cfg.animateIn && component.animate(cfg.animateIn);
	    }, cfg.delay || 0);
	    return false;
	  });
	  component.on('onLeave', function () {
	    // $(this).fadeOut();
	    setTimeout(function () {
	      component.addClass(cls + '_leave').removeClass(cls + '_load');
	      cfg.animateOut && component.animate(cfg.animateOut);
	    }, cfg.delay || 0);
	    return false;
	  });

	  return component;
	}

	module.exports = H5ComponentBase;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* 柱图组件对象 */
	var H5ComponentBase = __webpack_require__(13);
	var H5ComponentBar = function (name, cfg) {
	  var component = new H5ComponentBase(name, cfg);
	  $.each(cfg.data, function (idx, item) {
	    console.log(item);
	    var bar = $('<div class="bar">');
	    var name = $('<div class="name">');
	    var rate = $('<div class="rate">');
	    var per = $('<div class="per">');

	    var width = item[1] * 100 + '%';
	    var bgStyle = '';
	    if (item[2]) {
	      bgStyle = 'style="background-color:' + item[2] + '"';
	    }
	    rate.html('<div class="bg"' + bgStyle + '></div>')
	    rate.css('width', width);
	    name.text(item[0]);
	    per.text(width);
	    bar.append(name).append(rate).append(per);;
	    component.append(bar);
	  });
	  return component;
	}
	module.exports = H5ComponentBar;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* 散点图表组件对象 */
	var H5ComponentBase = __webpack_require__(13);
	var H5ComponentPoint = function (name, cfg) {
	  var component = new H5ComponentBase(name, cfg);
	  var base = cfg.data[0][1];

	  $.each(cfg.data, function (idx, item) {
	    var point = $('<div class="point point_"' + idx + '>');
	    var name = $('<div class="point_name">' + item[0] + '</div>');
	    var rate = $('<span class="point_rate">' + (item[1] * 100) + '%</span>')
	    // point.text(item[0]+'-'+item[1]);
	    name.append(rate);
	    point.append(name);
	    var per = (item[1] / base * 100) + '%';
	    point.width(per).height(per);
	    if (item[2]) {
	      point.css('backgroundColor', item[2])
	    }
	    if (item[3] !== undefined && item[4] !== undefined) {
	      point.css('left', item[3]).css('top', item[4]);
	    }
	    component.append(point);
	  });
	  return component;
	}
	module.exports = H5ComponentPoint;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* 内容管理对象 */
	var H5ComponentBase = __webpack_require__(13);
	var H5ComponentBar = __webpack_require__(14);
	var H5ComponentPoint = __webpack_require__(15);
	var H5 = function () {
	  // this.id = ('h5_'+Math.random()).replace('.','_');
	  this.id = ('h5_fullpage');
	  this.el = $('<div class="h5" id="' + this.id + '">').hide();
	  this.pages = [];
	  $('body').append(this.el);
	  this.addPage = function (name, text) {
	    var page = $('<div class="h5_page section">');
	    if (name != undefined) {
	      page.addClass('h5_page_' + name);
	    }
	    if (text != undefined) {
	      page.text(text);
	    }
	    this.el.append(page);
	    this.pages.push(page);
	    if (typeof this.whenAddPage === 'function') {
	      this.whenAddPage();
	    }
	    return this;
	  }
	  this.addComponent = function (name, cfg) {
	    var cfg = cfg || {};
	    cfg = $.extend({
	      type: 'base',
	    }, cfg);
	    var component;
	    var page = this.pages.slice(-1)[0];
	    switch (cfg.type) {
	      case 'base':
	        component = new H5ComponentBase(name, cfg);
	        break;
	      case 'point':
	        component = new H5ComponentPoint(name, cfg);
	        break;
	      case 'bar':
	        component = new H5ComponentBar(name, cfg);
	        break;

	      default:

	    }
	    page.append(component);
	    return this;

	  }

	  this.loader = function (firstPage) {
	    this.el.fullpage({
	      onLeave: function (index, nextIndex, direction) {
	        $(this).find('.h5_component').trigger('onLeave');
	      },
	      afterLoad: function (anchorLink, index) {
	        $(this).find('.h5_component').trigger('onLoad');
	      }
	    });
	    this.pages[0].find('.h5_component').trigger('onLoad');
	    this.el.show();
	    if (firstPage) {
	      $.fn.fullpage.moveTo(firstPage);
	    }
	  }
	  this.loader = typeof H5_loading == 'function' ? H5_loading : this.loader;
	  return this;

	}

	module.exports = H5;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
	* @Author: laihaibo
	* @Date:   2016-08-08 02:36:24
	* @Last Modified by:   laihaibo
	* @Last Modified time: 2016-08-10 12:10:17
	*/


	var H5_loading = function (images, firstPage) {
	    var id = this.id;

	    if (this._images === undefined) { //  第一次进入

	        this._images = (images || []).length;
	        this._loaded = 0;


	        window[id] = this;      //   把当前对象存储在全局对象 window 中，用来进行某个图片加载完成之后的回调


	        for (s in images) {
	            var item = images[s];
	            var img = new Image;
	            img.onload = function () {
	                window[id].loader();
	            }
	            img.src = item;
	        }

	        $('#rate').text('0%');
	        return this;

	    } else {

	        this._loaded++;
	        $('#rate').text(((this._loaded / this._images * 100) >> 0) + '%');

	        if (this._loaded < this._images) {
	            return this;
	        }
	    }

	    window[id] = null;
	    this.el.fullpage({
	        onLeave: function (index, nextIndex, direction) {
	            $(this).find('.h5_component').trigger('onLeave');
	        },
	        afterLoad: function (anchorLink, index) {
	            $(this).find('.h5_component').trigger('onLoad');
	        }
	    });
	    this.pages[0].find('.h5_component').trigger('onLoad');
	    this.el.show();
	    if (firstPage) {
	        $.fn.fullpage.moveTo(firstPage);
	    }
	}
	module.exports = H5_loading;


/***/ }
/******/ ]);