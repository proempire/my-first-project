/*! 版权所有，侵权必究 */
webpackJsonp([0],{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_not_found_vue__ = __webpack_require__(26);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_471dab70_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_not_found_vue__ = __webpack_require__(29);
var disposed = false;
function injectStyle(ssrContext) {
  if (disposed) return;
  __webpack_require__(31);
}
var normalizeComponent = __webpack_require__(3);






var __vue_template_functional__ = false;

var __vue_styles__ = injectStyle;

var __vue_scopeId__ = "data-v-471dab70";

var __vue_module_identifier__ = null;
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_script_index_0_bustCache_not_found_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_1_vue_loader_lib_template_compiler_index_id_data_v_471dab70_hasScoped_true_buble_transforms_node_modules_vue_loader_13_6_1_vue_loader_lib_selector_type_template_index_0_bustCache_not_found_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
Component.options.__file = "src\\components\\not-found.vue";

if (false) {
  (function () {
    var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api");
    hotAPI.install(require("vue"), false);
    if (!hotAPI.compatible) return;
    module.hot.accept();
    if (!module.hot.data) {
      hotAPI.createRecord("data-v-471dab70", Component.options);
    } else {
      hotAPI.reload("data-v-471dab70", Component.options);
    }
    module.hot.dispose(function (data) {
      disposed = true;
    });
  })();
}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {};
    },

    methods: {}
});

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard" }, [
    _vm._v("\n    standard 404\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-471dab70", esExports)
  }
}

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6b1e7e38", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-471dab70\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./not-found.vue", function() {
     var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_vue-loader@13.6.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-471dab70\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/_vue-loader@13.6.1@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./not-found.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});