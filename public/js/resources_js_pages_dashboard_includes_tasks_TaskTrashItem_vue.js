(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_dashboard_includes_tasks_TaskTrashItem_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/mixins */ "./resources/js/utils/mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TaskTrashItem",
  computed: {
    hasSubTasks: function hasSubTasks() {
      return this.task.sub_tasks && this.task.sub_tasks.length > 0;
    }
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        status: this.task.status,
        parent_id: this.task.parent_id,
        context: this.task.context
      })
    };
  },
  methods: {
    restore: function restore() {
      this.$inertia.patch("/api/tasks/".concat(this.task.id, "/restore"));
    },
    destroy: function destroy() {
      this.$inertia["delete"]("/api/tasks/".concat(this.task.id, "/permanent-delete"));
    }
  },
  mixins: [_utils_mixins__WEBPACK_IMPORTED_MODULE_0__.default],
  props: {
    task: [Object],
    statuses: [Array],
    errors: [Object],
    response: [Object]
  }
});

/***/ }),

/***/ "./resources/js/utils/mixins.js":
/*!**************************************!*\
  !*** ./resources/js/utils/mixins.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mixins": () => (/* binding */ mixins)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mixins = {
  methods: {
    inititalizePageTitle: function inititalizePageTitle() {
      if (this.pageTitle) {
        document.title = this.pageTitle;
      }
    },
    displayValidationErrors: function displayValidationErrors(refs, error) {
      for (var field in error) {
        if (refs[field]) {
          refs[field].error = error[field];
        }
      }
    },
    promptErrors: function promptErrors(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Something went wrong";

      if (_typeof(message) === "object") {
        title = message.title;
        message = message.message;
      }

      this.$swal({
        icon: "error",
        title: title,
        text: message,
        confirmButtonText: 'Okay'
      });
    }
  },
  mounted: function mounted() {
    this.inititalizePageTitle();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixins);


/***/ }),

/***/ "./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskTrashItem_vue_vue_type_template_id_5df2b6f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskTrashItem.vue?vue&type=template&id=5df2b6f6& */ "./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=template&id=5df2b6f6&");
/* harmony import */ var _TaskTrashItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskTrashItem.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TaskTrashItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TaskTrashItem_vue_vue_type_template_id_5df2b6f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskTrashItem_vue_vue_type_template_id_5df2b6f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTrashItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskTrashItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTrashItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=template&id=5df2b6f6&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=template&id=5df2b6f6& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTrashItem_vue_vue_type_template_id_5df2b6f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTrashItem_vue_vue_type_template_id_5df2b6f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTrashItem_vue_vue_type_template_id_5df2b6f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskTrashItem.vue?vue&type=template&id=5df2b6f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=template&id=5df2b6f6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=template&id=5df2b6f6&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/includes/tasks/TaskTrashItem.vue?vue&type=template&id=5df2b6f6& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "p-3 border-b border-l border-r border-gray-200" },
    [
      _c("div", { staticClass: "flex flex-row space-x-2 pb-2" }, [
        _c("div", { staticClass: "flex-grow" }, [
          _c("h4", {
            staticClass: "m-0 font-semibold",
            domProps: { textContent: _vm._s(_vm.form.context) }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "mt-3 text-gray-400",
            domProps: { textContent: _vm._s(_vm.form.status) }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            {
              staticClass: "flex-none btn btn-primary text-xs",
              on: { click: _vm.restore }
            },
            [
              _c("i", { staticClass: "fas fa-trash-restore mr-1" }),
              _vm._v("Restore\n            ")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "flex-none btn btn-danger text-xs",
              on: { click: _vm.destroy }
            },
            [
              _c("i", { staticClass: "fa fa-trash mr-1" }),
              _vm._v(" Permanently Delete\n            ")
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);