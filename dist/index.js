/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://calculator/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\nconst calcBtnNum = document.querySelectorAll('.calc-btn-num');\r\nconst calcInput = document.querySelector('.calc-input');\r\nconst calcBtnMul = document.querySelector('.calc-btn-mul');\r\nconst calcBtnDiv = document.querySelector('.calc-btn-div');\r\nconst calcBtnMinus = document.querySelector('.calc-btn-m');\r\nconst calcBtnPlus = document.querySelector('.calc-btn-plus');\r\nconst calcBtnEr = document.querySelector('.calc-btn-er');\r\nconst calcBtnDel = document.querySelector('.calc-btn-del');\r\nconst calcBtnEq = document.querySelector('.calc-btn-eq');\r\nconst calcBtnMp = document.querySelector('.calc-btn-mp');\r\nconst calcBtnMm = document.querySelector('.calc-btn-mm');\r\nconst calcBtnMs = document.querySelector('.calc-btn-ms');\r\nconst calcBtnMr = document.querySelector('.calc-btn-mr');\r\nconst calcBtnMc = document.querySelector('.calc-btn-mc');\r\nconst calcBtnBra = document.querySelectorAll('.calc-btn-bra');\r\nconst calcBtnPOrM = document.querySelector('.calc-btn-p-or-m');\r\n\r\ncalcInput.addEventListener('click', () => {\r\n    calcInput.blur();\r\n})\r\n\r\nconst check = (str) => {\r\n    let calcInputStr = calcInput.value.split('');\r\n    let cISLS = calcInputStr.at(-1);\r\n    if (cISLS !== str && calcInputStr.length !== 0) {\r\n        calcInput.value += str;\r\n    }\r\n    if (cISLS == '(' || cISLS == ')') {\r\n        calcInput.value += '';\r\n    }\r\n    if ((cISLS == '/' || cISLS == '*' || cISLS == '+' || cISLS == '-') && (cISLS !== '(' && cISLS !== ')')) {\r\n        cISLS = str;\r\n        calcInputStr = calcInputStr.slice(0, calcInputStr.length - 1);\r\n        calcInput.value = calcInputStr.join('');\r\n        calcInput.value += str;\r\n    }\r\n} \r\n\r\ncalcBtnNum.forEach((el) => {\r\n    el.addEventListener('click', () => {\r\n        if (calcInput.value == '0') {\r\n            calcInput.value = '';\r\n        }\r\n        if (calcInput.value.length <= 13) {\r\n            calcInput.value += el.textContent;\r\n        }\r\n    });\r\n});\r\n\r\ncalcBtnMul.addEventListener('click', () => {\r\n    if (calcInput.value.length <= 13) {\r\n        check('*');\r\n    }\r\n});\r\n\r\ncalcBtnDiv.addEventListener('click', () => {\r\n    if (calcInput.value.length <= 13) {\r\n        check('/');\r\n    }\r\n});\r\n\r\ncalcBtnPlus.addEventListener('click', () => {\r\n    if (calcInput.value.length <= 13) {\r\n        check('+');\r\n    }\r\n});\r\n\r\ncalcBtnMinus.addEventListener('click', () => {\r\n    if (calcInput.value == 0) {\r\n        calcInput.value = '-';\r\n    }\r\n    if (calcInput.value.length <= 13) {\r\n        check('-');\r\n    }\r\n});\r\n\r\ncalcBtnBra[0].addEventListener('click', () => {\r\n    let calcInputStr = calcInput.value.split('');\r\n    let cISLS = calcInputStr.at(-1);\r\n    if (calcInputStr.length == 1 && calcInputStr.at(-1) == 0) {\r\n        calcInput.value = '';\r\n        calcInput.value += '(';\r\n    }\r\n    if (cISLS == '/' || cISLS == '*' || cISLS == '+' || cISLS == '-') {\r\n        calcInput.value += '(';\r\n    }\r\n});\r\n\r\ncalcBtnBra[1].addEventListener('click', () => {\r\n    let calcInputStr = calcInput.value.split('');\r\n    let cISLS = calcInputStr.at(-1);\r\n    if (cISLS !== '/' && cISLS !== '*' && cISLS !== '+' && cISLS !== '-' && calcInputStr.length !== 1) {\r\n        let p = false;\r\n        for (let i = 0; i < calcInputStr.length; i++) {\r\n            if (calcInputStr[i] === '(') {\r\n                p = true;\r\n            }\r\n        }\r\n        if (p === true) {\r\n            calcInput.value += ')';\r\n        }\r\n    } else if (cISLS == '/' || cISLS == '*' || cISLS == '+' || cISLS == '-') {\r\n        let p = false;\r\n        for (let i = 0; i < calcInputStr.length; i++) {\r\n            if (calcInputStr[i] === '(') {\r\n                p = true;\r\n            }\r\n        }\r\n        if (p === true) {\r\n            cISLS = ')';\r\n            calcInputStr = calcInputStr.slice(0, calcInputStr.length - 1);\r\n            calcInput.value = calcInputStr.join('');\r\n            calcInput.value += cISLS;\r\n        }\r\n    }\r\n});\r\n\r\ncalcBtnEr.addEventListener('click', () => {\r\n    calcInput.value = '0';\r\n});\r\n\r\ncalcBtnDel.addEventListener('click', () => {\r\n    let calcInputStr = calcInput.value.split('');\r\n    calcInputStr = calcInputStr.slice(0, calcInputStr.length - 1);\r\n    calcInput.value = calcInputStr.join('');\r\n    if (calcInputStr.length === 0) {\r\n        calcInput.value = '0';\r\n    }\r\n});\r\n\r\ncalcBtnEq.addEventListener('click', () => {\r\n    let calcInputStr = calcInput.value;\r\n    let cISLS = calcInputStr.split('').at(-1);\r\n    if (cISLS == '/' || cISLS == '*' || cISLS == '+' || cISLS == '-') {\r\n        calcInputStr = calcInputStr.split('').slice(0, calcInputStr.length - 1);\r\n        calcInputStr = calcInputStr.join('');\r\n        calcInput.value = calcInputStr;\r\n    }\r\n    try {\r\n        if (eval(calcInputStr) !== Infinity) {\r\n            if (`${eval(calcInputStr)}`.length < 14) {\r\n                calcInput.value = eval(calcInputStr);\r\n            } else {\r\n                let a = eval(calcInputStr);\r\n                calcInput.value = `${`${a}`.split('').slice(0, 10).join('')}`;\r\n            }\r\n        } else {\r\n            alert('Erorr :(');\r\n            calcInput.value = 0;\r\n        }\r\n    } catch {\r\n        alert('Erorr :(');\r\n    }\r\n});\r\n\r\n// Memory\r\n\r\nlet memory = '';\r\n\r\ncalcBtnMs.addEventListener('click', () => {\r\n    document.querySelector('.memory').style.display = 'flex';\r\n    let numbers = `${(calcInput.value).match(/\\d{1,}/g)}`.split(',');\r\n    memory = numbers.at(-1);\r\n});\r\n\r\ncalcBtnMc.addEventListener('click', () => {\r\n    document.querySelector('.memory').style.display = 'none';\r\n    memory = '';\r\n});\r\n\r\ncalcBtnMr.addEventListener('click', () => {\r\n    calcInput.value += memory;\r\n});\r\n\r\ncalcBtnMp.addEventListener('click', () => {\r\n    calcInput.value += `+${memory}`;\r\n});\r\n\r\ncalcBtnMm.addEventListener('click', () => {\r\n    calcInput.value += `-${memory}`;\r\n});\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;