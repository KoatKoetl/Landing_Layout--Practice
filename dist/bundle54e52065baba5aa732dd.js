/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carousel: () => (/* binding */ carousel)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Carousel = /*#__PURE__*/function () {
  function Carousel() {
    _classCallCheck(this, Carousel);
    this.isDown = false;
  }
  _createClass(Carousel, [{
    key: "activateCarousel",
    value: function activateCarousel(carouselId) {
      var _this = this;
      var startX;
      var scrollLeft;
      carouselId.addEventListener('mousedown', function (e) {
        _this.isDown = true;
        carouselId.classList.add('cards__card--active');
        startX = e.pageX - carouselId.offsetLeft;
        scrollLeft = carouselId.scrollLeft;
      });
      carouselId.addEventListener('mouseleave', function (_) {
        _this.isDown = false;
        carouselId.classList.remove('cards__card--active');
      });
      carouselId.addEventListener('mouseup', function (_) {
        _this.isDown = false;
        carouselId.classList.remove('cards__card--active');
      });
      carouselId.addEventListener('mousemove', function (e) {
        if (!_this.isDown) return;
        e.preventDefault();
        var x = e.pageX - carouselId.offsetLeft;
        var SCROLL_SPEED = 3;
        var walk = (x - startX) * SCROLL_SPEED;
        carouselId.scrollLeft = scrollLeft - walk;
      });
    }
  }]);
  return Carousel;
}();
var carousel = new Carousel();


/***/ }),

/***/ "./src/headerBurgerMenu.js":
/*!*********************************!*\
  !*** ./src/headerBurgerMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BurgerMenu = /*#__PURE__*/function () {
  function BurgerMenu() {
    _classCallCheck(this, BurgerMenu);
    this.burgerIcon = document.querySelector('.icon.burger-icon');
    this.dropDownMenu = document.querySelector('.menu.dropDown-menu');
    this.menuRightBlock = document.querySelector('.menu.dropDown-menu > .nav.right-block');
    this.menuLeftBlock = document.querySelector('.menu.dropDown-menu > .nav.left-block');
    this.menuCloseIcon = document.querySelector('.button.close > .icon.close-icon');
  }

  // Open burger menu when clicked on icon
  _createClass(BurgerMenu, [{
    key: "toggleBurgerMenu",
    value: function toggleBurgerMenu() {
      var _this = this;
      this.burgerIcon.addEventListener('click', function () {
        var windowInnerWidth = window.innerWidth;

        // Show the drop down menu
        _this.dropDownMenu.style.opacity = 1;
        _this.dropDownMenu.style.visibility = 'visible';

        // Show the right side items in drop down menu
        _this.menuRightBlock.style.opacity = 1;
        _this.menuRightBlock.style.visibility = 'visible';

        // If windows is smalller than 961px, show in menu remaining items
        if (windowInnerWidth < 961) {
          _this.menuLeftBlock.style.opacity = 1;
          _this.menuLeftBlock.style.visibility = 'visible';
        }
      });
    }

    // Hide menu when screen size is changeg and items don't fit in
  }, {
    key: "hideMenuOnResize",
    value: function hideMenuOnResize() {
      var _this2 = this;
      addEventListener('resize', function () {
        var windowInnerWidth = window.innerWidth;

        // Hide elements if window width > 1200
        if (windowInnerWidth > 1350) {
          // Hide the drop down menu
          _this2.dropDownMenu.style.opacity = 0;
          _this2.dropDownMenu.style.visibility = 'hidden';
          // Hide the right side items from drop down menu
          _this2.menuRightBlock.style.opacity = 0;
          _this2.menuRightBlock.style.visibility = 'hidden';
        }

        // Hide elements if window width > 960
        if (windowInnerWidth > 960) {
          // Hide left side items from drop down menu
          _this2.menuLeftBlock.style.opacity = 0;
          _this2.menuLeftBlock.style.visibility = 'hidden';
        }
        // Show items if window is smaller than 960
        else {
          _this2.menuLeftBlock.style.opacity = 1;
          _this2.menuLeftBlock.style.visibility = 'visible';
        }
      });
    }

    // Close drop down menu by click on icon X
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      var _this3 = this;
      this.menuCloseIcon.addEventListener('click', function () {
        // Hide the drop down menu
        _this3.dropDownMenu.style.opacity = 0;
        _this3.dropDownMenu.style.visibility = 'hidden';

        // Hide the right side items on close
        _this3.menuRightBlock.style.opacity = 0;
        _this3.menuRightBlock.style.visibility = 'hidden';

        // Hide left side items on close
        _this3.menuLeftBlock.style.opacity = 0;
        _this3.menuLeftBlock.style.visibility = 'hidden';
      });
    }
  }, {
    key: "enableHeaderBurgerMenu",
    value: function enableHeaderBurgerMenu() {
      burgerMenu.toggleBurgerMenu();
      burgerMenu.hideMenuOnResize();
      burgerMenu.closeMenu();
    }
  }]);
  return BurgerMenu;
}();
var burgerMenu = new BurgerMenu();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/home-background.svg */ "./src/assets/home-background.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-heart.svg */ "./src/assets/icon-heart.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-flag.svg */ "./src/assets/icon-flag.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/man-in-glasses.svg */ "./src/assets/man-in-glasses.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/round-graphics.svg */ "./src/assets/round-graphics.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/rating.svg */ "./src/assets/rating.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/product-cover(first-card).png */ "./src/assets/product-cover(first-card).png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/product-cover-176.png */ "./src/assets/product-cover-176.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/product-cover-175.png */ "./src/assets/product-cover-175.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icn-favorite.svg */ "./src/assets/icn-favorite.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icn-basket.svg */ "./src/assets/icn-basket.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icn-view.svg */ "./src/assets/icn-view.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-emojione-star.svg */ "./src/assets/icon-emojione-star.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-sales.svg */ "./src/assets/icon-sales.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-clock.svg */ "./src/assets/icon-clock.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-carbon-chart-area-smooth.svg */ "./src/assets/icon-carbon-chart-area-smooth.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-ant-design-area-chart-outlined.svg */ "./src/assets/icon-ant-design-area-chart-outlined.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icn-arrow-right.svg */ "./src/assets/icn-arrow-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/testimonial-user-cover-150.png */ "./src/assets/testimonial-user-cover-150.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icn-bxs-full-star.svg */ "./src/assets/icn-bxs-full-star.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icn-empty-star.svg */ "./src/assets/icn-empty-star.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/ant-design_facebook-filled.svg */ "./src/assets/ant-design_facebook-filled.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/ant-design_instagram-outlined.svg */ "./src/assets/ant-design_instagram-outlined.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/ant-design_twitter-outlined.svg */ "./src/assets/ant-design_twitter-outlined.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_23___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: 'Montserrat', sans-serif;
  color: white;
  background-color: rgb(37, 43, 66);
  position: relative;
}

p,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* Main container */
.container--primary {
  position: relative;
}

/* Main container background image */
.background.image {
  display: block;
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
}

/* Section welcome block start*/

.container--primary.welcome-block {
  position: relative;
  z-index: 1;
  padding: 0 10%;
  background: linear-gradient(90deg, #000 0.13%, #000 0.14%, rgba(0, 0, 0, 0) 99.56%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.header.main-header {
  font-weight: 800;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
}

.header.main-header .nav.left-block {
  display: flex;
  align-items: center;
}

.nav.left-block .brand-name {
  font-size: 2rem;
  padding: 1rem 0;
}

.nav.left-block .nav-links-list ul {
  display: flex;
  margin-left: 4rem;
}

.nav.left-block .nav-links-list li {
  margin-left: 1rem;
}

.nav.left-block .nav-links-list a {
  color: white;
  text-decoration: none;
  padding: 1rem;
}

.nav.left-block .nav-links-list a:hover {
  color: rgb(35, 166, 240);
  text-decoration: underline;
  text-underline-offset: 0.5rem;
}

.nav.left-block .nav-links-list a:active {
  color: rgba(255, 255, 255, 0.75);
}

.header.main-header .nav.right-block {
  display: flex;
  align-items: center;
}

.nav.button-login a {
  font-weight: 800;
  color: white;
  text-decoration: none;
  padding: 1rem;
  border: none;
}

.nav.right-block .nav.button-login a:hover {
  color: rgb(35, 166, 240);
  text-decoration: underline;
  text-underline-offset: 0.5rem;
}

.nav.right-block .nav.button-login a:active {
  color: rgba(255, 255, 255, 0.75);
}

.nav.button-signIn button {
  font-size: 1rem;
  font-weight: 800;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  padding: 1.2rem 1.5rem;
  min-width: max-content;
  background-color: rgb(35, 166, 240);
  border: 2px solid rgb(35, 166, 240);
  border-radius: 0.3rem;
  cursor: pointer;
}

.nav.right-block .nav.button-signIn button:hover {
  background-color: transparent;
  transition-duration: 0.5s;
}

.nav.right-block .nav.button-signIn button:active {
  background-color: rgb(35, 166, 240);
  transition-duration: 0.1s;
}

.button.dropDown-menu {
  display: none;
  align-items: center;
}

.button.dropDown-menu .icon.burger-icon {
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

.button.dropDown-menu .icon.burger-icon:hover {
  transform: scale(1.2);
  transition: 0.5s;
}

.button.dropDown-menu .icon.burger-icon:active {
  transform: scale(1);
  transition: 0.3s;
}

.menu.dropDown-menu {
  display: flex;
  visibility: hidden;
  position: absolute;
  z-index: 2;
  gap: 1rem;
  right: 10%;
  padding: 0.3rem;
  background-color: rgba(35, 166, 240, 0.95);
  border-radius: 0.3rem;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.5s;
}

.menu.dropDown-menu .nav.left-block {
  visibility: hidden;
  width: 0;
  height: 0;
  opacity: 0;
  transition: opacity 1s;
}

.menu.dropDown-menu .nav.right-block {
  visibility: hidden;
  margin: 1rem;
  opacity: 0;
  transition: opacity 1s, visibility 0.5s;
}

.menu.dropDown-menu .button.close {
  color: white;
  text-align: right;
  position: relative;
  padding-top: 0.3rem;
}

.button.close .icon.close-icon {
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  padding: 0.3rem;
  cursor: pointer;
}

.button.close .icon.close-icon:hover {
  transform: scale(0.9);
}

.button.close .icon.close-icon:active {
  transform: scale(1);
}

.menu.dropDown-menu a {
  font-size: 1.2rem;
  font-weight: 800;
  color: white;
  text-decoration: none;
}

.menu.dropDown-menu a:hover {
  text-decoration: underline;
  text-underline-offset: 0.5rem;
}

.menu.dropDown-menu ul {
  list-style-type: none;
  padding: 0;
}

.menu.dropDown-menu li {
  padding: 0.5rem 0;
}

/* Main header end */

/* Top container with info start */
.container--info {
  padding: 7% 0;
}

.container--info .text.greeting .greeting-message {
  font-weight: 700;
  color: rgb(35, 166, 240);
}

.container--info .text.headline-text {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.5em;
  margin: 3rem 0;
  max-width: 70dvh;
}

.container--info .text.quote {
  line-height: 2em;
  padding-bottom: 3rem;
  max-width: 70dvh;
}

.container--info .text.quote .quote-text {
  font-size: 1.5rem;
  font-weight: 300;
}

.container--info .button .signIn-button {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  padding: 1.2rem 1.5rem;
  min-width: max-content;
  background-color: rgb(35, 166, 240);
  border: 2px solid rgb(35, 166, 240);
  border-radius: 0.3rem;
  cursor: pointer;
}

.container--info .button .signIn-button:hover {
  background-color: transparent;
  transition-duration: 0.5s;
}

.container--info .button .signIn-button:active {
  background-color: rgb(35, 166, 240);
  transition-duration: 0.1s;
}

/* Section welcome block end*/

/* Section cards start */

.container--page-sections {
  padding: 0 10%;
}

.container__cards {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  padding: 10% 0;
}

.container__cards .main-content .text {
  text-align: center;
}

.container__cards .main-content .text .text-content {
  font-weight: 700;
  color: rgb(35, 166, 240);
  letter-spacing: 0.2px;
}

.container__cards .main-content .text .title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin: 0;
  padding: 1rem 0;
}

.container__cards .main-content .text .quote:first-child {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 1.5rem;
}

.container__cards .cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.cards .card {
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 2.2rem 2.5rem;
  background-color: white;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
}

.cards .card .text {
  display: flex;
  justify-content: center;
}

.cards .card .text .title {
  font-weight: 700;
  color: #252b42;
}

.cards .card .element.divide-line {
  min-width: 3.2rem;
  border: 1px solid #e74040;
}

.cards .card .text .text-content {
  font-weight: 400;
  color: #737373;
  max-width: 50%;
}

.cards .card .icon-block {
  display: flex;
  justify-content: center;
}

.cards .card .icon-block .background {
  padding: 1.4rem 1.2rem;
  background-color: #e74040;
  border-radius: 0.6rem;
}

.cards .card .icon-block .image {
  width: 2rem;
  height: 2rem;
}

.cards .card.card-1 .icon-block .image {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.cards .card.card-2 .icon-block .image {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

/* Section cards end */

/* Course review container start */

.container--page-sections .container--course-review {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 10% 0;
}

.container--course-review .sideblock.main-content {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: max-content;
}

.sideblock.main-content .element.divide-line {
  height: 7px;
  max-width: 6rem;
  background-color: #e74040;
}

.sideblock.main-content .text .title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin: 0;
}

.sideblock.main-content .text .quote-text {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 1.3rem;
}

.sideblock.main-content .link {
  display: flex;
}

.sideblock.main-content .link a {
  font-weight: 700;
  color: rgb(35, 166, 240);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.sideblock.main-content .link a:hover {
  text-decoration: underline;
  text-underline-offset: 0.5rem;
}

.sideblock.main-content .link a:active {
  color: rgba(255, 255, 255, 0.75);
}

.sideblock.main-content .link .icon {
  font-size: 1.5rem;
}

.container--course-review .sideblock.images {
  position: relative;
  width: 401px;
  height: 507px;
}

.sideblock.images .main-image {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 408px;
  height: 408px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 83px;
  box-shadow: #00087e 30px 22px;
}

.sideblock.images .image.round-graphic {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 76px;
  width: 247px;
  height: 247px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.sideblock.images .image.rating {
  position: absolute;
  z-index: 2;
  top: 50px;
  right: 0px;
  width: 115px;
  height: 58px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  display: grid;
  grid-gap: 80px;
  justify-content: center;
  padding: 160px 0;
}

.main-content {
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.2px;
  display: grid;
  grid-gap: 10px;
}

.main-content__section-tag {
  color: rgb(35, 166, 240);
  line-height: 24px;
}

.main-content__title {
  font-size: 40px;
  line-height: 50px;
}

.main-content__quote {
  font-weight: 400;
  line-height: 20px;
  max-width: 500px;
  justify-self: center;
}

.cards {
  justify-self: center;
}

.cards__carousel {
  display: flex;
  gap: 15px;
  width: 710px;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
}

.cards__card--active {
  scroll-snap-type: unset;
}

.cards__card {
  flex: 1 0 330px;
  scroll-margin: 5px;
}

.cards__product-image {
  position: relative;
  height: 300px;
  max-width: 330px;
  background-color: lightgray;
  background-position: center;
  background-repeat: no-repeat;
}

.cards__product-image-1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

.cards__product-image-2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}

.cards__product-image-3 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}

.cards__tag {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 24px;
  display: inline-flex;
  margin: 20px;
  padding: 0 10px;
  background-color: #e74040;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}

.cards__product-actions {
  display: inline-flex;
  position: absolute;
  gap: 10px;
  right: 27%;
  bottom: 24px;
  left: 27%;
}

.cards__action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 44.786px;
}

.cards__icon {
  width: 20px;
  height: 20px;
}

.cards__icon--favorite {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
}

.cards__icon--basket {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
}

.cards__icon--view {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
}

.cards__description {
  color: #000;
  display: grid;
  grid-gap: 10px;
  padding: 25px 25px 35px 25px;
  max-width: 330px;
  background-color: white;
}

.cards__header-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cards__link {
  font-size: 14px;
  font-weight: 700;
  color: rgb(35, 166, 240);
  text-decoration: none;
  letter-spacing: 0.2px;
  line-height: 24px;
}

.cards__rating {
  color: white;
  display: flex;
  gap: 5px;
  padding: 5px;
  background-color: #252b42;
  border-radius: 20px;
}

.cards__rating-icon {
  width: 16px;
  height: 16px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
}

.cards__rating-number {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 16px;
}

.cards__title {
  font-size: 16px;
  font-weight: 700;
  color: #252b42;
  letter-spacing: 0.1px;
  line-height: 24px;
}

.cards__text-content {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #737373;
  letter-spacing: 0.2px;
  line-height: 20px; /* 142.857% */
}

.cards__sales {
  color: #737373;
  display: flex;
  gap: 10px;
  align-items: center;
}

.cards__sales-number {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 24px;
}

.cards__sales-image {
  width: 16px;
  height: 16px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
}

.cards__price {
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 24px;
  display: flex;
  gap: 10px;
}

.cards__price--color-gray {
  font-size: 16px;
  color: #bdbdbd;
}

.cards__price--color-green {
  font-size: 16px;
  color: #40bb15;
}

.cards__short-overview {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: #737373;
  letter-spacing: 0.2px;
  line-height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.cards__short-overview-block {
  display: flex;
  gap: 5px;
}

.cards__short-overview-icon {
  width: 16px;
  height: 16px;
}

.cards__short-overview-icon--clock {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
}

.cards__short-overview-icon--chart {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
}

.cards__short-overview-icon--graph {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
}

.cards__button--small {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid rgb(35, 166, 240);
  border-radius: 37px;
}

.cards__button-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  color: rgb(35, 166, 240);
  letter-spacing: 0.2px;
  line-height: 24px; /* 171.429% */
}

.cards__button-icon {
  width: 9px;
  height: 16px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
}

.testimonials {
  display: grid;
  justify-content: center;
}

.testimonials__carousel {
  display: flex;
  gap: 15px;
  max-width: 50dvw;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
}

.cards__card--active {
  scroll-snap-type: unset;
}

.testimonials__item {
  flex: 1 0 400px;
  padding: 25px 25px 0 25px;
  background-color: white;
  scroll-margin: 5px;
}

.testimonials__user-cover {
  display: flex;
  justify-content: center;
}

.testimonials__user-cover-image {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
}

.testimonials__content {
  display: grid;
  grid-gap: 15px;
  padding: 30px;
}

.testimonials__text-content {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 20px;
  max-width: 50%;
  justify-self: center;
}

.testimonials__rating {
  display: flex;
  justify-content: center;
  background-color: transparent;
}

.testimonials__rating-icon {
  width: 22px;
  height: 22px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
}

.testimonials__rating-icon.cards__rating-icon--empty {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
}

.testimonials__employee-fullName {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: #252b42;
  text-align: center;
  letter-spacing: 0.1px;
  line-height: 24px; /* 150% */
}

.testimonials__employee-position {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  color: #737373;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 24px; /* 171.429% */
}

.form__dispatch--email-subscribe {
  display: flex;
  justify-content: center;
}

.form__dispatch-input {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 28px; /* 200% */
  padding: 15px 20px;
  width: 40dvw;
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px 0 0 5px;
}

.button__subscribe {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: white;
  letter-spacing: 0.2px;
  line-height: 28px; /* 200% */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 22.5px;
  background-color: rgb(35, 166, 240);
  border: 1px solid #e6e6e6;
  border-radius: 0px 5px 5px 0px;
}

.button__subscribe:hover {
  background-color: rgba(35, 166, 240, 0.85);
}

.footer__content {
  padding: 80px 10%;
}

.footer__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 30px;
}

.footer__col {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 1fr;
}

.footer__col--1 {
  grid-gap: 25px;
}

.footer__col-title {
  grid-column: 1/3;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.1px;
}

.footer__col-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.2px;
  grid-column: 1/3;
}

.footer__links {
  display: grid;
  grid-gap: 10px;
}

.footer__link {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.2px;
}

.footer__media {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 20px;
}

.footer__media-icon {
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.footer__media-icon--1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___});
}
.footer__media-icon--2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___});
}
.footer__media-icon--3 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___});
}

@media screen and (max-width: 1350px) {
  .header.header.main-header .nav.right-block {
    display: none;
  }
  .header.header.main-header .button.dropDown-menu {
    display: flex;
  }
}

@media screen and (max-width: 960px) {
  .container--primary.welcome-block {
    padding: 0 5%;
  }
  .menu.dropDown-menu {
    right: 5%;
  }
  .header.main-header .nav.left-block .nav-links-list {
    display: none;
  }
  .menu.dropDown-menu .nav.left-block {
    margin: 1rem;
    width: auto;
    height: auto;
  }
}

@media screen and (max-width: 900px) {
  .testimonials__item {
    flex-basis: fit-content;
  }
  .testimonials__carousel {
    max-width: 300px;
  }
}

@media screen and (max-width: 768px) {
  .form__dispatch-input {
    width: 100%;
  }
}

@media screen and (max-width: 750px) {
  .cards__carousel {
    width: 400px;
  }
}

@media screen and (max-width: 600px) {
  .container--course-review .sideblock.images {
    height: 320px;
    max-width: 80lvw;
  }
  .sideblock.images .image.rating {
    top: 0;
    right: 10%;
  }
  .sideblock.images .main-image {
    width: 250px;
    height: 250px;
    background-size: 250px;
  }
  .sideblock.images .image.round-graphic {
    width: 123px;
    height: 123px;
    background-size: 123px;
  }
}

@media screen and (max-width: 425px) {
  .container--info .text.headline-text {
    font-size: 2em;
    margin: 2rem 0;
  }
  .container--info .text.quote .quote-text {
    font-size: 1rem;
    padding-bottom: 2rem;
  }
  .sideblock.images .image.image.rating {
    top: 0;
    right: -15px;
  }
  .cards .card .text .text-content {
    min-width: min-content;
  }
  .container--page-sections {
    padding: 0 5%;
  }
  .cards__card {
    flex-basis: 290px;
  }
  .cards__carousel {
    width: 290px;
  }
  .testimonials__item {
    flex-basis: 290px;
    padding: 0;
  }
  .testimonials__content {
    padding: 30px 0;
  }
  .testimonials__carousel {
    max-width: 290px;
  }
  .footer__content {
    padding: 0 5%;
  }
}

@media (pointer: none), (pointer: coarse) {
  .cards__carousel {
    overflow-x: scroll;
  }
  .testimonials__carousel {
    overflow-x: scroll;
  }
}
`, "",{"version":3,"sources":["webpack://./src/CSS/style.css"],"names":[],"mappings":"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Cf,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,iBAAiB,EAAE,SAAS;EAC5B,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,iBAAiB,EAAE,SAAS;EAC5B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;EACpB,mCAAmC;EACnC,yBAAyB;EACzB,8BAA8B;AAChC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB,EAAE,aAAa;EAChC,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB,EAAE,aAAa;EAChC,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB,EAAE,aAAa;EAChC,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,0DAA+D;AACjE;AACA;EACE,0DAAkE;AACpE;AACA;EACE,0DAAgE;AAClE;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,SAAS;EACX;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;IACZ,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,aAAa;IACb,gBAAgB;EAClB;EACA;IACE,MAAM;IACN,UAAU;EACZ;EACA;IACE,YAAY;IACZ,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,YAAY;IACZ,aAAa;IACb,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,cAAc;IACd,cAAc;EAChB;EACA;IACE,eAAe;IACf,oBAAoB;EACtB;EACA;IACE,MAAM;IACN,YAAY;EACd;EACA;IACE,sBAAsB;EACxB;EACA;IACE,aAAa;EACf;EACA;IACE,iBAAiB;EACnB;EACA;IACE,YAAY;EACd;EACA;IACE,iBAAiB;IACjB,UAAU;EACZ;EACA;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["@import '~normalize.css/normalize.css';\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700;800&display=swap');\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  color: white;\n  background-color: rgb(37, 43, 66);\n  position: relative;\n}\n\np,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n}\n\nul,\nol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n/* Main container */\n.container--primary {\n  position: relative;\n}\n\n/* Main container background image */\n.background.image {\n  display: block;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(../assets/home-background.svg);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/* Section welcome block start*/\n\n.container--primary.welcome-block {\n  position: relative;\n  z-index: 1;\n  padding: 0 10%;\n  background: linear-gradient(90deg, #000 0.13%, #000 0.14%, rgba(0, 0, 0, 0) 99.56%);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n.header.main-header {\n  font-weight: 800;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  padding: 2rem 0;\n}\n\n.header.main-header .nav.left-block {\n  display: flex;\n  align-items: center;\n}\n\n.nav.left-block .brand-name {\n  font-size: 2rem;\n  padding: 1rem 0;\n}\n\n.nav.left-block .nav-links-list ul {\n  display: flex;\n  margin-left: 4rem;\n}\n\n.nav.left-block .nav-links-list li {\n  margin-left: 1rem;\n}\n\n.nav.left-block .nav-links-list a {\n  color: white;\n  text-decoration: none;\n  padding: 1rem;\n}\n\n.nav.left-block .nav-links-list a:hover {\n  color: rgb(35, 166, 240);\n  text-decoration: underline;\n  text-underline-offset: 0.5rem;\n}\n\n.nav.left-block .nav-links-list a:active {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.header.main-header .nav.right-block {\n  display: flex;\n  align-items: center;\n}\n\n.nav.button-login a {\n  font-weight: 800;\n  color: white;\n  text-decoration: none;\n  padding: 1rem;\n  border: none;\n}\n\n.nav.right-block .nav.button-login a:hover {\n  color: rgb(35, 166, 240);\n  text-decoration: underline;\n  text-underline-offset: 0.5rem;\n}\n\n.nav.right-block .nav.button-login a:active {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.nav.button-signIn button {\n  font-size: 1rem;\n  font-weight: 800;\n  color: white;\n  display: flex;\n  align-items: center;\n  margin-left: 2rem;\n  padding: 1.2rem 1.5rem;\n  min-width: max-content;\n  background-color: rgb(35, 166, 240);\n  border: 2px solid rgb(35, 166, 240);\n  border-radius: 0.3rem;\n  cursor: pointer;\n}\n\n.nav.right-block .nav.button-signIn button:hover {\n  background-color: transparent;\n  transition-duration: 0.5s;\n}\n\n.nav.right-block .nav.button-signIn button:active {\n  background-color: rgb(35, 166, 240);\n  transition-duration: 0.1s;\n}\n\n.button.dropDown-menu {\n  display: none;\n  align-items: center;\n}\n\n.button.dropDown-menu .icon.burger-icon {\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.button.dropDown-menu .icon.burger-icon:hover {\n  transform: scale(1.2);\n  transition: 0.5s;\n}\n\n.button.dropDown-menu .icon.burger-icon:active {\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.menu.dropDown-menu {\n  display: flex;\n  visibility: hidden;\n  position: absolute;\n  z-index: 2;\n  gap: 1rem;\n  right: 10%;\n  padding: 0.3rem;\n  background-color: rgba(35, 166, 240, 0.95);\n  border-radius: 0.3rem;\n  opacity: 0;\n  transition: opacity 0.3s, visibility 0.5s;\n}\n\n.menu.dropDown-menu .nav.left-block {\n  visibility: hidden;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.menu.dropDown-menu .nav.right-block {\n  visibility: hidden;\n  margin: 1rem;\n  opacity: 0;\n  transition: opacity 1s, visibility 0.5s;\n}\n\n.menu.dropDown-menu .button.close {\n  color: white;\n  text-align: right;\n  position: relative;\n  padding-top: 0.3rem;\n}\n\n.button.close .icon.close-icon {\n  font-size: 1.2rem;\n  position: absolute;\n  right: 0;\n  padding: 0.3rem;\n  cursor: pointer;\n}\n\n.button.close .icon.close-icon:hover {\n  transform: scale(0.9);\n}\n\n.button.close .icon.close-icon:active {\n  transform: scale(1);\n}\n\n.menu.dropDown-menu a {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: white;\n  text-decoration: none;\n}\n\n.menu.dropDown-menu a:hover {\n  text-decoration: underline;\n  text-underline-offset: 0.5rem;\n}\n\n.menu.dropDown-menu ul {\n  list-style-type: none;\n  padding: 0;\n}\n\n.menu.dropDown-menu li {\n  padding: 0.5rem 0;\n}\n\n/* Main header end */\n\n/* Top container with info start */\n.container--info {\n  padding: 7% 0;\n}\n\n.container--info .text.greeting .greeting-message {\n  font-weight: 700;\n  color: rgb(35, 166, 240);\n}\n\n.container--info .text.headline-text {\n  font-size: 4rem;\n  font-weight: 700;\n  line-height: 1.5em;\n  margin: 3rem 0;\n  max-width: 70dvh;\n}\n\n.container--info .text.quote {\n  line-height: 2em;\n  padding-bottom: 3rem;\n  max-width: 70dvh;\n}\n\n.container--info .text.quote .quote-text {\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n\n.container--info .button .signIn-button {\n  font-size: 1rem;\n  font-weight: 700;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding: 1.2rem 1.5rem;\n  min-width: max-content;\n  background-color: rgb(35, 166, 240);\n  border: 2px solid rgb(35, 166, 240);\n  border-radius: 0.3rem;\n  cursor: pointer;\n}\n\n.container--info .button .signIn-button:hover {\n  background-color: transparent;\n  transition-duration: 0.5s;\n}\n\n.container--info .button .signIn-button:active {\n  background-color: rgb(35, 166, 240);\n  transition-duration: 0.1s;\n}\n\n/* Section welcome block end*/\n\n/* Section cards start */\n\n.container--page-sections {\n  padding: 0 10%;\n}\n\n.container__cards {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n  align-items: center;\n  padding: 10% 0;\n}\n\n.container__cards .main-content .text {\n  text-align: center;\n}\n\n.container__cards .main-content .text .text-content {\n  font-weight: 700;\n  color: rgb(35, 166, 240);\n  letter-spacing: 0.2px;\n}\n\n.container__cards .main-content .text .title {\n  font-size: 3rem;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  margin: 0;\n  padding: 1rem 0;\n}\n\n.container__cards .main-content .text .quote:first-child {\n  font-size: 1rem;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  line-height: 1.5rem;\n}\n\n.container__cards .cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.cards .card {\n  color: black;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: center;\n  padding: 2.2rem 2.5rem;\n  background-color: white;\n  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);\n}\n\n.cards .card .text {\n  display: flex;\n  justify-content: center;\n}\n\n.cards .card .text .title {\n  font-weight: 700;\n  color: #252b42;\n}\n\n.cards .card .element.divide-line {\n  min-width: 3.2rem;\n  border: 1px solid #e74040;\n}\n\n.cards .card .text .text-content {\n  font-weight: 400;\n  color: #737373;\n  max-width: 50%;\n}\n\n.cards .card .icon-block {\n  display: flex;\n  justify-content: center;\n}\n\n.cards .card .icon-block .background {\n  padding: 1.4rem 1.2rem;\n  background-color: #e74040;\n  border-radius: 0.6rem;\n}\n\n.cards .card .icon-block .image {\n  width: 2rem;\n  height: 2rem;\n}\n\n.cards .card.card-1 .icon-block .image {\n  background-image: url(../assets/icon-heart.svg);\n}\n\n.cards .card.card-2 .icon-block .image {\n  background-image: url(../assets/icon-flag.svg);\n}\n\n/* Section cards end */\n\n/* Course review container start */\n\n.container--page-sections .container--course-review {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n  align-items: center;\n  padding: 10% 0;\n}\n\n.container--course-review .sideblock.main-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2.2rem;\n  width: max-content;\n}\n\n.sideblock.main-content .element.divide-line {\n  height: 7px;\n  max-width: 6rem;\n  background-color: #e74040;\n}\n\n.sideblock.main-content .text .title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  margin: 0;\n}\n\n.sideblock.main-content .text .quote-text {\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  line-height: 1.3rem;\n}\n\n.sideblock.main-content .link {\n  display: flex;\n}\n\n.sideblock.main-content .link a {\n  font-weight: 700;\n  color: rgb(35, 166, 240);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n\n.sideblock.main-content .link a:hover {\n  text-decoration: underline;\n  text-underline-offset: 0.5rem;\n}\n\n.sideblock.main-content .link a:active {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.sideblock.main-content .link .icon {\n  font-size: 1.5rem;\n}\n\n.container--course-review .sideblock.images {\n  position: relative;\n  width: 401px;\n  height: 507px;\n}\n\n.sideblock.images .main-image {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 408px;\n  height: 408px;\n  background-image: url(../assets/man-in-glasses.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0 83px;\n  box-shadow: #00087e 30px 22px;\n}\n\n.sideblock.images .image.round-graphic {\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: 76px;\n  width: 247px;\n  height: 247px;\n  background-image: url(../assets/round-graphics.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.sideblock.images .image.rating {\n  position: absolute;\n  z-index: 2;\n  top: 50px;\n  right: 0px;\n  width: 115px;\n  height: 58px;\n  background-image: url(../assets/rating.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.container {\n  display: grid;\n  grid-gap: 80px;\n  justify-content: center;\n  padding: 160px 0;\n}\n\n.main-content {\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 0.2px;\n  display: grid;\n  grid-gap: 10px;\n}\n\n.main-content__section-tag {\n  color: rgb(35, 166, 240);\n  line-height: 24px;\n}\n\n.main-content__title {\n  font-size: 40px;\n  line-height: 50px;\n}\n\n.main-content__quote {\n  font-weight: 400;\n  line-height: 20px;\n  max-width: 500px;\n  justify-self: center;\n}\n\n.cards {\n  justify-self: center;\n}\n\n.cards__carousel {\n  display: flex;\n  gap: 15px;\n  width: 710px;\n  overflow-x: hidden;\n  scroll-snap-type: x mandatory;\n}\n\n.cards__card--active {\n  scroll-snap-type: unset;\n}\n\n.cards__card {\n  flex: 1 0 330px;\n  scroll-margin: 5px;\n}\n\n.cards__product-image {\n  position: relative;\n  height: 300px;\n  max-width: 330px;\n  background-color: lightgray;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.cards__product-image-1 {\n  background-image: url(../assets/product-cover\\(first-card\\).png);\n}\n\n.cards__product-image-2 {\n  background-image: url(../assets/product-cover-176.png);\n}\n\n.cards__product-image-3 {\n  background-image: url(../assets/product-cover-175.png);\n}\n\n.cards__tag {\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  line-height: 24px;\n  display: inline-flex;\n  margin: 20px;\n  padding: 0 10px;\n  background-color: #e74040;\n  border-radius: 3px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n\n.cards__product-actions {\n  display: inline-flex;\n  position: absolute;\n  gap: 10px;\n  right: 27%;\n  bottom: 24px;\n  left: 27%;\n}\n\n.cards__action {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background-color: white;\n  border-radius: 44.786px;\n}\n\n.cards__icon {\n  width: 20px;\n  height: 20px;\n}\n\n.cards__icon--favorite {\n  background-image: url(../assets/icn-favorite.svg);\n}\n\n.cards__icon--basket {\n  background-image: url(../assets/icn-basket.svg);\n}\n\n.cards__icon--view {\n  background-image: url(../assets/icn-view.svg);\n}\n\n.cards__description {\n  color: #000;\n  display: grid;\n  grid-gap: 10px;\n  padding: 25px 25px 35px 25px;\n  max-width: 330px;\n  background-color: white;\n}\n\n.cards__header-text {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cards__link {\n  font-size: 14px;\n  font-weight: 700;\n  color: rgb(35, 166, 240);\n  text-decoration: none;\n  letter-spacing: 0.2px;\n  line-height: 24px;\n}\n\n.cards__rating {\n  color: white;\n  display: flex;\n  gap: 5px;\n  padding: 5px;\n  background-color: #252b42;\n  border-radius: 20px;\n}\n\n.cards__rating-icon {\n  width: 16px;\n  height: 16px;\n  background-image: url(../assets/icon-emojione-star.svg);\n}\n\n.cards__rating-number {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  line-height: 16px;\n}\n\n.cards__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #252b42;\n  letter-spacing: 0.1px;\n  line-height: 24px;\n}\n\n.cards__text-content {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  color: #737373;\n  letter-spacing: 0.2px;\n  line-height: 20px; /* 142.857% */\n}\n\n.cards__sales {\n  color: #737373;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.cards__sales-number {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  line-height: 24px;\n}\n\n.cards__sales-image {\n  width: 16px;\n  height: 16px;\n  background-image: url(../assets/icon-sales.svg);\n}\n\n.cards__price {\n  font-weight: 700;\n  letter-spacing: 0.1px;\n  line-height: 24px;\n  display: flex;\n  gap: 10px;\n}\n\n.cards__price--color-gray {\n  font-size: 16px;\n  color: #bdbdbd;\n}\n\n.cards__price--color-green {\n  font-size: 16px;\n  color: #40bb15;\n}\n\n.cards__short-overview {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  color: #737373;\n  letter-spacing: 0.2px;\n  line-height: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0;\n}\n\n.cards__short-overview-block {\n  display: flex;\n  gap: 5px;\n}\n\n.cards__short-overview-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.cards__short-overview-icon--clock {\n  background-image: url(../assets/icon-clock.svg);\n}\n\n.cards__short-overview-icon--chart {\n  background-image: url(../assets/icon-carbon-chart-area-smooth.svg);\n}\n\n.cards__short-overview-icon--graph {\n  background-image: url(../assets/icon-ant-design-area-chart-outlined.svg);\n}\n\n.cards__button--small {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  padding: 10px 20px;\n  background-color: transparent;\n  border: 1px solid rgb(35, 166, 240);\n  border-radius: 37px;\n}\n\n.cards__button-text {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  color: rgb(35, 166, 240);\n  letter-spacing: 0.2px;\n  line-height: 24px; /* 171.429% */\n}\n\n.cards__button-icon {\n  width: 9px;\n  height: 16px;\n  background-image: url(../assets/icn-arrow-right.svg);\n}\n\n.testimonials {\n  display: grid;\n  justify-content: center;\n}\n\n.testimonials__carousel {\n  display: flex;\n  gap: 15px;\n  max-width: 50dvw;\n  overflow-x: hidden;\n  scroll-snap-type: x mandatory;\n}\n\n.cards__card--active {\n  scroll-snap-type: unset;\n}\n\n.testimonials__item {\n  flex: 1 0 400px;\n  padding: 25px 25px 0 25px;\n  background-color: white;\n  scroll-margin: 5px;\n}\n\n.testimonials__user-cover {\n  display: flex;\n  justify-content: center;\n}\n\n.testimonials__user-cover-image {\n  background-image: url(../assets/testimonial-user-cover-150.png);\n}\n\n.testimonials__content {\n  display: grid;\n  grid-gap: 15px;\n  padding: 30px;\n}\n\n.testimonials__text-content {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  text-align: center;\n  letter-spacing: 0.2px;\n  line-height: 20px;\n  max-width: 50%;\n  justify-self: center;\n}\n\n.testimonials__rating {\n  display: flex;\n  justify-content: center;\n  background-color: transparent;\n}\n\n.testimonials__rating-icon {\n  width: 22px;\n  height: 22px;\n  background-image: url(../assets/icn-bxs-full-star.svg);\n}\n\n.testimonials__rating-icon.cards__rating-icon--empty {\n  background-image: url(../assets/icn-empty-star.svg);\n}\n\n.testimonials__employee-fullName {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  color: #252b42;\n  text-align: center;\n  letter-spacing: 0.1px;\n  line-height: 24px; /* 150% */\n}\n\n.testimonials__employee-position {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  color: #737373;\n  text-align: center;\n  letter-spacing: 0.2px;\n  line-height: 24px; /* 171.429% */\n}\n\n.form__dispatch--email-subscribe {\n  display: flex;\n  justify-content: center;\n}\n\n.form__dispatch-input {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  line-height: 28px; /* 200% */\n  padding: 15px 20px;\n  width: 40dvw;\n  background: #f9f9f9;\n  border: 1px solid #e6e6e6;\n  border-radius: 5px 0 0 5px;\n}\n\n.button__subscribe {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  color: white;\n  letter-spacing: 0.2px;\n  line-height: 28px; /* 200% */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 22.5px;\n  background-color: rgb(35, 166, 240);\n  border: 1px solid #e6e6e6;\n  border-radius: 0px 5px 5px 0px;\n}\n\n.button__subscribe:hover {\n  background-color: rgba(35, 166, 240, 0.85);\n}\n\n.footer__content {\n  padding: 80px 10%;\n}\n\n.footer__cols {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-rows: auto;\n  grid-gap: 30px;\n}\n\n.footer__col {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 2fr 1fr;\n}\n\n.footer__col--1 {\n  grid-gap: 25px;\n}\n\n.footer__col-title {\n  grid-column: 1/3;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 32px; /* 133.333% */\n  letter-spacing: 0.1px;\n}\n\n.footer__col-text {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px; /* 142.857% */\n  letter-spacing: 0.2px;\n  grid-column: 1/3;\n}\n\n.footer__links {\n  display: grid;\n  grid-gap: 10px;\n}\n\n.footer__link {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 24px; /* 171.429% */\n  letter-spacing: 0.2px;\n}\n\n.footer__media {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  grid-gap: 20px;\n}\n\n.footer__media-icon {\n  width: 24px;\n  height: 24px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.footer__media-icon--1 {\n  background-image: url(../assets/ant-design_facebook-filled.svg);\n}\n.footer__media-icon--2 {\n  background-image: url(../assets/ant-design_instagram-outlined.svg);\n}\n.footer__media-icon--3 {\n  background-image: url(../assets/ant-design_twitter-outlined.svg);\n}\n\n@media screen and (max-width: 1350px) {\n  .header.header.main-header .nav.right-block {\n    display: none;\n  }\n  .header.header.main-header .button.dropDown-menu {\n    display: flex;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .container--primary.welcome-block {\n    padding: 0 5%;\n  }\n  .menu.dropDown-menu {\n    right: 5%;\n  }\n  .header.main-header .nav.left-block .nav-links-list {\n    display: none;\n  }\n  .menu.dropDown-menu .nav.left-block {\n    margin: 1rem;\n    width: auto;\n    height: auto;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .testimonials__item {\n    flex-basis: fit-content;\n  }\n  .testimonials__carousel {\n    max-width: 300px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .form__dispatch-input {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 750px) {\n  .cards__carousel {\n    width: 400px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .container--course-review .sideblock.images {\n    height: 320px;\n    max-width: 80lvw;\n  }\n  .sideblock.images .image.rating {\n    top: 0;\n    right: 10%;\n  }\n  .sideblock.images .main-image {\n    width: 250px;\n    height: 250px;\n    background-size: 250px;\n  }\n  .sideblock.images .image.round-graphic {\n    width: 123px;\n    height: 123px;\n    background-size: 123px;\n  }\n}\n\n@media screen and (max-width: 425px) {\n  .container--info .text.headline-text {\n    font-size: 2em;\n    margin: 2rem 0;\n  }\n  .container--info .text.quote .quote-text {\n    font-size: 1rem;\n    padding-bottom: 2rem;\n  }\n  .sideblock.images .image.image.rating {\n    top: 0;\n    right: -15px;\n  }\n  .cards .card .text .text-content {\n    min-width: min-content;\n  }\n  .container--page-sections {\n    padding: 0 5%;\n  }\n  .cards__card {\n    flex-basis: 290px;\n  }\n  .cards__carousel {\n    width: 290px;\n  }\n  .testimonials__item {\n    flex-basis: 290px;\n    padding: 0;\n  }\n  .testimonials__content {\n    padding: 30px 0;\n  }\n  .testimonials__carousel {\n    max-width: 290px;\n  }\n  .footer__content {\n    padding: 0 5%;\n  }\n}\n\n@media (pointer: none), (pointer: coarse) {\n  .cards__carousel {\n    overflow-x: scroll;\n  }\n  .testimonials__carousel {\n    overflow-x: scroll;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/ant-design_facebook-filled.svg":
/*!***************************************************!*\
  !*** ./src/assets/ant-design_facebook-filled.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ant-design_facebook-filled.svg";

/***/ }),

/***/ "./src/assets/ant-design_instagram-outlined.svg":
/*!******************************************************!*\
  !*** ./src/assets/ant-design_instagram-outlined.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ant-design_instagram-outlined.svg";

/***/ }),

/***/ "./src/assets/ant-design_twitter-outlined.svg":
/*!****************************************************!*\
  !*** ./src/assets/ant-design_twitter-outlined.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ant-design_twitter-outlined.svg";

/***/ }),

/***/ "./src/assets/home-background.svg":
/*!****************************************!*\
  !*** ./src/assets/home-background.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home-background.svg";

/***/ }),

/***/ "./src/assets/icn-arrow-right.svg":
/*!****************************************!*\
  !*** ./src/assets/icn-arrow-right.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icn-arrow-right.svg";

/***/ }),

/***/ "./src/assets/icn-basket.svg":
/*!***********************************!*\
  !*** ./src/assets/icn-basket.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icn-basket.svg";

/***/ }),

/***/ "./src/assets/icn-bxs-full-star.svg":
/*!******************************************!*\
  !*** ./src/assets/icn-bxs-full-star.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icn-bxs-full-star.svg";

/***/ }),

/***/ "./src/assets/icn-empty-star.svg":
/*!***************************************!*\
  !*** ./src/assets/icn-empty-star.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icn-empty-star.svg";

/***/ }),

/***/ "./src/assets/icn-favorite.svg":
/*!*************************************!*\
  !*** ./src/assets/icn-favorite.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icn-favorite.svg";

/***/ }),

/***/ "./src/assets/icn-view.svg":
/*!*********************************!*\
  !*** ./src/assets/icn-view.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icn-view.svg";

/***/ }),

/***/ "./src/assets/icon-ant-design-area-chart-outlined.svg":
/*!************************************************************!*\
  !*** ./src/assets/icon-ant-design-area-chart-outlined.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-ant-design-area-chart-outlined.svg";

/***/ }),

/***/ "./src/assets/icon-carbon-chart-area-smooth.svg":
/*!******************************************************!*\
  !*** ./src/assets/icon-carbon-chart-area-smooth.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-carbon-chart-area-smooth.svg";

/***/ }),

/***/ "./src/assets/icon-clock.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-clock.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-clock.svg";

/***/ }),

/***/ "./src/assets/icon-emojione-star.svg":
/*!*******************************************!*\
  !*** ./src/assets/icon-emojione-star.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-emojione-star.svg";

/***/ }),

/***/ "./src/assets/icon-flag.svg":
/*!**********************************!*\
  !*** ./src/assets/icon-flag.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-flag.svg";

/***/ }),

/***/ "./src/assets/icon-heart.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-heart.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-heart.svg";

/***/ }),

/***/ "./src/assets/icon-sales.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-sales.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-sales.svg";

/***/ }),

/***/ "./src/assets/man-in-glasses.svg":
/*!***************************************!*\
  !*** ./src/assets/man-in-glasses.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "man-in-glasses.svg";

/***/ }),

/***/ "./src/assets/product-cover(first-card).png":
/*!**************************************************!*\
  !*** ./src/assets/product-cover(first-card).png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-cover(first-card).png";

/***/ }),

/***/ "./src/assets/product-cover-175.png":
/*!******************************************!*\
  !*** ./src/assets/product-cover-175.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-cover-175.png";

/***/ }),

/***/ "./src/assets/product-cover-176.png":
/*!******************************************!*\
  !*** ./src/assets/product-cover-176.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "product-cover-176.png";

/***/ }),

/***/ "./src/assets/rating.svg":
/*!*******************************!*\
  !*** ./src/assets/rating.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rating.svg";

/***/ }),

/***/ "./src/assets/round-graphics.svg":
/*!***************************************!*\
  !*** ./src/assets/round-graphics.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "round-graphics.svg";

/***/ }),

/***/ "./src/assets/testimonial-user-cover-150.png":
/*!***************************************************!*\
  !*** ./src/assets/testimonial-user-cover-150.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "testimonial-user-cover-150.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _headerBurgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerBurgerMenu */ "./src/headerBurgerMenu.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./src/carousel.js");



var primaryCarousel = document.querySelector('.cards__carousel');
var secondaryCarousel = document.querySelector('.testimonials__carousel');
_headerBurgerMenu__WEBPACK_IMPORTED_MODULE_1__.burgerMenu.enableHeaderBurgerMenu();
_carousel__WEBPACK_IMPORTED_MODULE_2__.carousel.activateCarousel(primaryCarousel);
_carousel__WEBPACK_IMPORTED_MODULE_2__.carousel.activateCarousel(secondaryCarousel);
})();

/******/ })()
;
//# sourceMappingURL=bundle54e52065baba5aa732dd.js.map