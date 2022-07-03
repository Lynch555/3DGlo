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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('06 october 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDeyValue = 1;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDeyValue = 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDeyValue = 1.5;\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDeyValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        if (totalValue !== 0) {\r\n\t\t\t(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n\t\t\t  duration: 1000,\r\n\t\t\t  timing(timeFraction) {\r\n\t\t\t\treturn timeFraction;\r\n\t\t\t  },\r\n\t\t\t  draw(progress) {\r\n\t\t\t\ttotal.textContent = Math.round(totalValue * progress);\r\n\t\t\t  },\r\n\t\t\t});\r\n\t\t  }\r\n    };\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc();\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\r\n    const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const mainInput = document.querySelectorAll(\".form-name\")[0];\r\n  const modalInput = document.querySelectorAll(\".form-name\")[1];\r\n  const footerInput = document.getElementById(\"form2-name\");\r\n  const messageInput = document.getElementById(\"form2-message\");\r\n  const emailInputs = document.querySelectorAll(\".form-email\");\r\n  const phoneInputs = document.querySelectorAll(\".form-phone\");\r\n\r\n  const numberCheck = (input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n    });\r\n  };\r\n\r\n  const textCheck = (input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яё\\-\\s]/i, \"\");\r\n    });\r\n  };\r\n\r\n  const mailCheck = (input) => {\r\n    input.forEach((item) => {\r\n      item.addEventListener(\"input\", () => {\r\n        item.value = item.value.replace(/[^a-z\\^0-9\\@\\-\\_\\.\\!\\~\\*\\']/i, \"\");\r\n      });\r\n    });\r\n  };\r\n\r\n  const phoneCheck = (input) => {\r\n    input.forEach((item) => {\r\n      item.addEventListener(\"input\", () => {\r\n        item.value = item.value.replace(/[^0-9\\-\\(\\)]/i, \"\");\r\n      });\r\n    });\r\n  };\r\n\r\n  numberCheck(calcSquare);\r\n  numberCheck(calcCount);\r\n  numberCheck(calcDay);\r\n  textCheck(mainInput);\r\n  textCheck(modalInput);\r\n  textCheck(footerInput);\r\n  textCheck(messageInput);\r\n  mailCheck(emailInputs);\r\n  phoneCheck(phoneInputs);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://3dglo/./src/modules/forms.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction)\r\n  ;\r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n    });\r\n  };\r\n  \r\n  \n\n//# sourceURL=webpack://3dglo/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n    const miniLink = document.querySelector('main>a');\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    closeBtn.addEventListener('click', handleMenu);\r\n\r\n    // УСЛОЖНЕННОЕ ЗАДАНИЕ\r\n\r\n    menuItems.forEach(menuItem => {\r\n        menuItem.addEventListener('click', (event) => {\r\n            handleMenu();\r\n            event.preventDefault(); \r\n\r\n            let href = menuItem.getAttribute('href').substring(1); \r\n            const scrollTarget = document.getElementById(href);\r\n            const elementPosition = scrollTarget.getBoundingClientRect().top; \r\n\r\n            window.scrollBy({ \r\n                top: elementPosition,\r\n                behavior: \"smooth\"\r\n            });\r\n        });\r\n    });\r\n\r\n    miniLink.addEventListener('click', (event) => {  \r\n        const scrollTarget = document.getElementById('service-block');\r\n        const elementPosition = scrollTarget.getBoundingClientRect().top;\r\n        event.preventDefault();\r\n\r\n        window.scrollBy({\r\n            top: elementPosition,\r\n            behavior: \"smooth\"\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const popupContent = modal.querySelector('.popup-content');\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      popupContent.style.top = 0;\r\n      modal.style.display = 'block';\r\n      \r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 350,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n            popupContent.style.top = (25 * progress) + \"%\";\r\n        },\r\n      });\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (\r\n      !e.target.closest('.popup-content') ||\r\n      e.target.classList.contains('popup-close')\r\n    ) {\r\n      modal.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderBlock = document.querySelector('.portfolio-content');\n    const slides = document.querySelectorAll('.portfolio-item');\n\n    const timeInterval = 2000;\n\n    let currentSlide = 0;\n    let interval;\n\n    const createDots = () => {\n        let dotList = document.createElement(\"ul\");\n        dotList.classList.add('portfolio-dots');\n        sliderBlock.append(dotList);\n\n        for (let i = 0; i < slides.length; i++) {\n            let dot = document.createElement(\"li\");\n            dot.classList.add('dot');\n            dotList.append(dot);\n        }\n    };\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass);\n    };\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass);\n    };\n\n    const autoSlide = () => {\n        const dots = document.querySelectorAll('.dot');\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n        currentSlide++;\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0;\n        }\n\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    };\n\n    const startSlide = (timer = 1500) => {\n        interval = setInterval(autoSlide, timer);\n    };\n\n    const stopSlide = () => {\n        clearInterval(interval);\n    };\n\n    sliderBlock.addEventListener('click', (e) => {\n        const dots = document.querySelectorAll('.dot');\n        e.preventDefault();\n\n        if (!e.target.matches('.dot, .portfolio-btn')) {\n            return;\n        }\n\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n\n        if (e.target.matches('#arrow-right')) {\n            currentSlide++;\n        } else if (e.target.matches('#arrow-left')) {\n            currentSlide--;\n        } else if (e.target.classList.contains('dot')) {\n            dots.forEach((dot, index) => {\n                if (e.target === dot) {\n                    currentSlide = index;\n                }\n            });\n        }\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0;\n        }\n\n        if (currentSlide < 0) {\n            currentSlide = slides.length - 1;\n        }\n\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    });\n\n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide();\n        }\n    }, true);\n\n    sliderBlock.addEventListener('mouseleave', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timeInterval);\n        }\n    }, true);\n\n    createDots();\n    startSlide(timeInterval);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n  \r\n    tabPanel.addEventListener('click', (e) => {\r\n      if (e.target.closest('.service-header-tab')) {\r\n        tabs.forEach((tab, index) => {\r\n          const tabBtn = e.target.closest('.service-header-tab');\r\n          // console.log(tabBtn)\r\n          if (tab === tabBtn) {\r\n            tab.classList.add('active');\r\n            tabContent[index].classList.remove('d-none');\r\n          } else {\r\n            tab.classList.remove('active');\r\n            tabContent[index].classList.add('d-none');\r\n          }\r\n        });\r\n      }\r\n    });\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n    \r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let hours = Math.floor(timeRemaining / 60 / 60)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n    \r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n\r\n        if (getTime.hours < 10) {\r\n            timerHours.textContent = '0' + getTime.hours\r\n        } else {\r\n            timerHours.textContent = getTime.hours\r\n        }\r\n\r\n        if (getTime.minutes < 10) {\r\n            timerMinutes.textContent = '0' + getTime.minutes\r\n        } else {\r\n            timerMinutes.textContent = getTime.minutes\r\n        }\r\n\r\n        if (getTime.seconds < 10) {\r\n            timerSeconds.textContent = '0' + getTime.seconds\r\n        } else {\r\n            timerSeconds.textContent = getTime.seconds\r\n        }\r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            clearInterval(idInterval)\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n        }\r\n    }\r\n    let idInterval = setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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