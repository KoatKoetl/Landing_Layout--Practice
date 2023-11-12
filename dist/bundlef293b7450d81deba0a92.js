/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
      burgerMenu.logInConsole();
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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: rgb(37, 43, 66);
  font-family: 'Montserrat', sans-serif;
  color: white;
}

/* Main container */
.container {
  position: relative;
}

/* Main container background image */
.background.image {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  display: block;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

/* Section welcome block start*/

.container.welcome-block {
  position: relative;
  padding: 0 10%;
  z-index: 1;
  background: linear-gradient(90deg, #000 0.13%, #000 0.14%, rgba(0, 0, 0, 0) 99.56%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.header.main-header {
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  color: white;
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
  list-style-type: none;
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
  color: white;
  font-weight: 800;
  padding: 1rem;
  border: none;
  text-decoration: none;
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
  display: flex;
  align-items: center;
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 1.2rem 1.5rem;
  border: 2px solid rgb(35, 166, 240);
  border-radius: 0.3rem;
  background-color: rgb(35, 166, 240);
  margin-left: 2rem;
  min-width: max-content;
  cursor: pointer;
}

.nav.right-block .nav.button-signIn button:hover {
  transition-duration: 0.5s;
  background-color: transparent;
}

.nav.right-block .nav.button-signIn button:active {
  transition-duration: 0.1s;
  background-color: rgb(35, 166, 240);
}

.button.dropDown-menu {
  display: none;
  align-items: center;
}

.button.dropDown-menu .icon.burger-icon {
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
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
  gap: 1rem;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: 2;
  right: 10%;
  padding: 0.3rem;
  border-radius: 0.3rem;
  background-color: rgba(35, 166, 240, 0.95);
  transition: opacity 0.3s, visibility 0.5s;
}

.menu.dropDown-menu .nav.left-block {
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
  transition: opacity 1s;
}

.menu.dropDown-menu .nav.right-block {
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s, visibility 0.5s;
  margin: 1rem;
}

.menu.dropDown-menu .button.close {
  position: relative;
  color: white;
  padding-top: 0.3rem;
  text-align: right;
}

.button.close .icon.close-icon {
  position: absolute;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.3rem;
  right: 0;
}

.button.close .icon.close-icon:hover {
  transform: scale(0.9);
}

.button.close .icon.close-icon:active {
  transform: scale(1);
}

.menu.dropDown-menu a {
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.2rem;
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

@media screen and (max-width: 1350px) {
  .header.header.main-header .nav.right-block {
    display: none;
  }
  .header.header.main-header .button.dropDown-menu {
    display: flex;
  }
}

@media screen and (max-width: 960px) {
  .container.welcome-block {
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

/* Main header end */

/* Top container with info start */
.container.info {
  padding: 7% 0;
}

.container.info .text.greeting .greeting-message {
  font-weight: 700;
  color: rgb(35, 166, 240);
}

.container.info .text.headline-text {
  margin: 3rem 0;
  font-size: 4rem;
  font-weight: 700;
  max-width: 70dvh;
  line-height: 1.5em;
}

.container.info .text.quote {
  max-width: 70dvh;
  padding-bottom: 3rem;
  line-height: 2em;
}

.container.info .text.quote .quote-text {
  font-weight: 300;
  font-size: 1.5rem;
}

.container.info .button .signIn-button {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 1.2rem 1.5rem;
  border: 2px solid rgb(35, 166, 240);
  border-radius: 0.3rem;
  background-color: rgb(35, 166, 240);
  min-width: max-content;
  cursor: pointer;
}

.container.info .button .signIn-button:hover {
  transition-duration: 0.5s;
  background-color: transparent;
}

.container.info .button .signIn-button:active {
  transition-duration: 0.1s;
  background-color: rgb(35, 166, 240);
}

@media screen and (max-width: 425px) {
  .container.info .text.headline-text {
    margin: 2rem 0;
    font-size: 2em;
  }
  .container.info .text.quote .quote-text {
    font-size: 1rem;
    padding-bottom: 2rem;
  }
}

/* Section welcome block end*/

/* Section cards start */

.container.page-sections {
  padding: 0 10%;
}

.container.cards {
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.container.cards .main-content .text {
  text-align: center;
}

.container.cards .main-content .text .text-content {
  font-weight: 700;
  color: rgb(35, 166, 240);
  letter-spacing: 0.2px;
}

.container.cards .main-content .text .title {
  font-weight: 700;
  font-size: 3rem;
  margin: 0;
  padding: 1rem 0;
  letter-spacing: 0.2px;
}

.container.cards .main-content .text .quote:first-child {
  font-weight: 600;
  line-height: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.container.cards .cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.cards .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.2rem 2.5rem;
  gap: 1.5rem;
  background-color: white;
  color: black;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
  text-align: center;
}

.cards .card .text {
  display: flex;
  justify-content: center;
}

.cards .card .text .title {
  color: #252b42;
  font-weight: 700;
}

.cards .card .element.divide-line {
  border: 1px solid #e74040;
  min-width: 3.2rem;
}

.cards .card .text .text-content {
  color: #737373;
  font-weight: 400;
  max-width: 50%;
}

.cards .card .icon-block {
  display: flex;
  justify-content: center;
}

.cards .card .icon-block .background {
  padding: 1.4rem 1.2rem;
  border-radius: 0.6rem;
  background-color: #e74040;
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

@media screen and (max-width: 425px) {
  .cards .card .text .text-content {
    min-width: min-content;
  }
}

/* Section cards end */

/* Course review container start */

.container.page-sections .container.course-review {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10% 0;
  gap: 2rem;
}

.container.course-review .sideblock.main-content {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}

.sideblock.main-content .element.divide-line {
  max-width: 6rem;
  height: 7px;
  background-color: #e74040;
}

.sideblock.main-content .text .title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin: 0;
}

.sideblock.main-content .text .quote-text {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2px;
  line-height: 1.3rem;
}

.sideblock.main-content .link {
  display: flex;
}

.sideblock.main-content .link a {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: rgb(35, 166, 240);
  text-decoration: none;
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

.container.course-review .sideblock.images {
  width: 401px;
  height: 507px;
  position: relative;
}

.sideblock.images .main-image {
  width: 408px;
  height: 408px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 83px;
  z-index: 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: #00087e 30px 22px;
}

.sideblock.images .image.round-graphic {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 247px;
  height: 247px;
  position: absolute;
  bottom: 0;
  left: 76px;
  z-index: 1;
}

.sideblock.images .image.rating {
  width: 115px;
  height: 58px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: 2;
  right: -100px;
  top: 80px;
}

@media screen and (max-width: 507px) {
  .container.course-review .sideblock.images {
    width: 80lvw;
    height: 320px;
  }
  .sideblock.images .main-image {
    height: 250px;
    width: 250px;
    background-size: 250px;
  }
  .sideblock.images .image.round-graphic {
    width: 123px;
    height: 123px;
    background-size: 123px;
  }
  .sideblock.images .image.image.rating {
    right: -30px;
  }
}

@media screen and (max-width: 425px) {
  .sideblock.images .image.image.rating {
    top: 0;
  }
}

/* Course review container end*/
`, "",{"version":3,"sources":["webpack://./src/CSS/style.css"],"names":[],"mappings":"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","sourcesContent":["@import '~normalize.css/normalize.css';\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700;800&display=swap');\n\nbody {\n  background-color: rgb(37, 43, 66);\n  font-family: 'Montserrat', sans-serif;\n  color: white;\n}\n\n/* Main container */\n.container {\n  position: relative;\n}\n\n/* Main container background image */\n.background.image {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 0;\n  display: block;\n  background-image: url(../assets/home-background.svg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n\n/* Section welcome block start*/\n\n.container.welcome-block {\n  position: relative;\n  padding: 0 10%;\n  z-index: 1;\n  background: linear-gradient(90deg, #000 0.13%, #000 0.14%, rgba(0, 0, 0, 0) 99.56%);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n.header.main-header {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 800;\n  color: white;\n  padding: 2rem 0;\n}\n\n.header.main-header .nav.left-block {\n  display: flex;\n  align-items: center;\n}\n\n.nav.left-block .brand-name {\n  font-size: 2rem;\n  padding: 1rem 0;\n}\n\n.nav.left-block .nav-links-list ul {\n  display: flex;\n  list-style-type: none;\n}\n\n.nav.left-block .nav-links-list li {\n  margin-left: 1rem;\n}\n\n.nav.left-block .nav-links-list a {\n  color: white;\n  text-decoration: none;\n  padding: 1rem;\n}\n\n.nav.left-block .nav-links-list a:hover {\n  color: rgb(35, 166, 240);\n  text-decoration: underline;\n  text-underline-offset: 0.5rem;\n}\n\n.nav.left-block .nav-links-list a:active {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.header.main-header .nav.right-block {\n  display: flex;\n  align-items: center;\n}\n\n.nav.button-login a {\n  color: white;\n  font-weight: 800;\n  padding: 1rem;\n  border: none;\n  text-decoration: none;\n}\n\n.nav.right-block .nav.button-login a:hover {\n  color: rgb(35, 166, 240);\n  text-decoration: underline;\n  text-underline-offset: 0.5rem;\n}\n\n.nav.right-block .nav.button-login a:active {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.nav.button-signIn button {\n  display: flex;\n  align-items: center;\n  color: white;\n  font-weight: 800;\n  font-size: 1rem;\n  padding: 1.2rem 1.5rem;\n  border: 2px solid rgb(35, 166, 240);\n  border-radius: 0.3rem;\n  background-color: rgb(35, 166, 240);\n  margin-left: 2rem;\n  min-width: max-content;\n  cursor: pointer;\n}\n\n.nav.right-block .nav.button-signIn button:hover {\n  transition-duration: 0.5s;\n  background-color: transparent;\n}\n\n.nav.right-block .nav.button-signIn button:active {\n  transition-duration: 0.1s;\n  background-color: rgb(35, 166, 240);\n}\n\n.button.dropDown-menu {\n  display: none;\n  align-items: center;\n}\n\n.button.dropDown-menu .icon.burger-icon {\n  cursor: pointer;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n}\n\n.button.dropDown-menu .icon.burger-icon:hover {\n  transform: scale(1.2);\n  transition: 0.5s;\n}\n\n.button.dropDown-menu .icon.burger-icon:active {\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.menu.dropDown-menu {\n  display: flex;\n  gap: 1rem;\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  z-index: 2;\n  right: 10%;\n  padding: 0.3rem;\n  border-radius: 0.3rem;\n  background-color: rgba(35, 166, 240, 0.95);\n  transition: opacity 0.3s, visibility 0.5s;\n}\n\n.menu.dropDown-menu .nav.left-block {\n  opacity: 0;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n  transition: opacity 1s;\n}\n\n.menu.dropDown-menu .nav.right-block {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 1s, visibility 0.5s;\n  margin: 1rem;\n}\n\n.menu.dropDown-menu .button.close {\n  position: relative;\n  color: white;\n  padding-top: 0.3rem;\n  text-align: right;\n}\n\n.button.close .icon.close-icon {\n  position: absolute;\n  cursor: pointer;\n  font-size: 1.2rem;\n  padding: 0.3rem;\n  right: 0;\n}\n\n.button.close .icon.close-icon:hover {\n  transform: scale(0.9);\n}\n\n.button.close .icon.close-icon:active {\n  transform: scale(1);\n}\n\n.menu.dropDown-menu a {\n  color: white;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 1.2rem;\n}\n\n.menu.dropDown-menu a:hover {\n  text-decoration: underline;\n  text-underline-offset: 0.5rem;\n}\n\n.menu.dropDown-menu ul {\n  list-style-type: none;\n  padding: 0;\n}\n\n.menu.dropDown-menu li {\n  padding: 0.5rem 0;\n}\n\n@media screen and (max-width: 1350px) {\n  .header.header.main-header .nav.right-block {\n    display: none;\n  }\n  .header.header.main-header .button.dropDown-menu {\n    display: flex;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .container.welcome-block {\n    padding: 0 5%;\n  }\n  .menu.dropDown-menu {\n    right: 5%;\n  }\n  .header.main-header .nav.left-block .nav-links-list {\n    display: none;\n  }\n  .menu.dropDown-menu .nav.left-block {\n    margin: 1rem;\n    width: auto;\n    height: auto;\n  }\n}\n\n/* Main header end */\n\n/* Top container with info start */\n.container.info {\n  padding: 7% 0;\n}\n\n.container.info .text.greeting .greeting-message {\n  font-weight: 700;\n  color: rgb(35, 166, 240);\n}\n\n.container.info .text.headline-text {\n  margin: 3rem 0;\n  font-size: 4rem;\n  font-weight: 700;\n  max-width: 70dvh;\n  line-height: 1.5em;\n}\n\n.container.info .text.quote {\n  max-width: 70dvh;\n  padding-bottom: 3rem;\n  line-height: 2em;\n}\n\n.container.info .text.quote .quote-text {\n  font-weight: 300;\n  font-size: 1.5rem;\n}\n\n.container.info .button .signIn-button {\n  display: flex;\n  align-items: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 1.2rem 1.5rem;\n  border: 2px solid rgb(35, 166, 240);\n  border-radius: 0.3rem;\n  background-color: rgb(35, 166, 240);\n  min-width: max-content;\n  cursor: pointer;\n}\n\n.container.info .button .signIn-button:hover {\n  transition-duration: 0.5s;\n  background-color: transparent;\n}\n\n.container.info .button .signIn-button:active {\n  transition-duration: 0.1s;\n  background-color: rgb(35, 166, 240);\n}\n\n@media screen and (max-width: 425px) {\n  .container.info .text.headline-text {\n    margin: 2rem 0;\n    font-size: 2em;\n  }\n  .container.info .text.quote .quote-text {\n    font-size: 1rem;\n    padding-bottom: 2rem;\n  }\n}\n\n/* Section welcome block end*/\n\n/* Section cards start */\n\n.container.page-sections {\n  padding: 0 10%;\n}\n\n.container.cards {\n  padding: 10% 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5rem;\n}\n\n.container.cards .main-content .text {\n  text-align: center;\n}\n\n.container.cards .main-content .text .text-content {\n  font-weight: 700;\n  color: rgb(35, 166, 240);\n  letter-spacing: 0.2px;\n}\n\n.container.cards .main-content .text .title {\n  font-weight: 700;\n  font-size: 3rem;\n  margin: 0;\n  padding: 1rem 0;\n  letter-spacing: 0.2px;\n}\n\n.container.cards .main-content .text .quote:first-child {\n  font-weight: 600;\n  line-height: 1.5rem;\n  font-size: 1rem;\n  letter-spacing: 0.2px;\n}\n\n.container.cards .cards {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n\n.cards .card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.2rem 2.5rem;\n  gap: 1.5rem;\n  background-color: white;\n  color: black;\n  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);\n  text-align: center;\n}\n\n.cards .card .text {\n  display: flex;\n  justify-content: center;\n}\n\n.cards .card .text .title {\n  color: #252b42;\n  font-weight: 700;\n}\n\n.cards .card .element.divide-line {\n  border: 1px solid #e74040;\n  min-width: 3.2rem;\n}\n\n.cards .card .text .text-content {\n  color: #737373;\n  font-weight: 400;\n  max-width: 50%;\n}\n\n.cards .card .icon-block {\n  display: flex;\n  justify-content: center;\n}\n\n.cards .card .icon-block .background {\n  padding: 1.4rem 1.2rem;\n  border-radius: 0.6rem;\n  background-color: #e74040;\n}\n\n.cards .card .icon-block .image {\n  width: 2rem;\n  height: 2rem;\n}\n\n.cards .card.card-1 .icon-block .image {\n  background-image: url(../assets/icon-heart.svg);\n}\n\n.cards .card.card-2 .icon-block .image {\n  background-image: url(../assets/icon-flag.svg);\n}\n\n@media screen and (max-width: 425px) {\n  .cards .card .text .text-content {\n    min-width: min-content;\n  }\n}\n\n/* Section cards end */\n\n/* Course review container start */\n\n.container.page-sections .container.course-review {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 10% 0;\n  gap: 2rem;\n}\n\n.container.course-review .sideblock.main-content {\n  width: max-content;\n  display: flex;\n  flex-direction: column;\n  gap: 2.2rem;\n}\n\n.sideblock.main-content .element.divide-line {\n  max-width: 6rem;\n  height: 7px;\n  background-color: #e74040;\n}\n\n.sideblock.main-content .text .title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  margin: 0;\n}\n\n.sideblock.main-content .text .quote-text {\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.2px;\n  line-height: 1.3rem;\n}\n\n.sideblock.main-content .link {\n  display: flex;\n}\n\n.sideblock.main-content .link a {\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n  color: rgb(35, 166, 240);\n  text-decoration: none;\n}\n\n.sideblock.main-content .link a:hover {\n  text-decoration: underline;\n  text-underline-offset: 0.5rem;\n}\n\n.sideblock.main-content .link a:active {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.sideblock.main-content .link .icon {\n  font-size: 1.5rem;\n}\n\n.container.course-review .sideblock.images {\n  width: 401px;\n  height: 507px;\n  position: relative;\n}\n\n.sideblock.images .main-image {\n  width: 408px;\n  height: 408px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 0 83px;\n  z-index: 0;\n  background-image: url(../assets/man-in-glasses.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: #00087e 30px 22px;\n}\n\n.sideblock.images .image.round-graphic {\n  background-image: url(../assets/round-graphics.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 247px;\n  height: 247px;\n  position: absolute;\n  bottom: 0;\n  left: 76px;\n  z-index: 1;\n}\n\n.sideblock.images .image.rating {\n  width: 115px;\n  height: 58px;\n  background-image: url(../assets/rating.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  z-index: 2;\n  right: -100px;\n  top: 80px;\n}\n\n@media screen and (max-width: 507px) {\n  .container.course-review .sideblock.images {\n    width: 80lvw;\n    height: 320px;\n  }\n  .sideblock.images .main-image {\n    height: 250px;\n    width: 250px;\n    background-size: 250px;\n  }\n  .sideblock.images .image.round-graphic {\n    width: 123px;\n    height: 123px;\n    background-size: 123px;\n  }\n  .sideblock.images .image.image.rating {\n    right: -30px;\n  }\n}\n\n@media screen and (max-width: 425px) {\n  .sideblock.images .image.image.rating {\n    top: 0;\n  }\n}\n\n/* Course review container end*/\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/home-background.svg":
/*!****************************************!*\
  !*** ./src/assets/home-background.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home-background.svg";

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

/***/ "./src/assets/man-in-glasses.svg":
/*!***************************************!*\
  !*** ./src/assets/man-in-glasses.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "man-in-glasses.svg";

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


_headerBurgerMenu__WEBPACK_IMPORTED_MODULE_1__.burgerMenu.enableHeaderBurgerMenu();
})();

/******/ })()
;
//# sourceMappingURL=bundlef293b7450d81deba0a92.js.map