(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_dashboard_DashboardPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  computed: {
    hasError: function hasError() {
      return this.error && (!this.isArrayAnEmptyString() || this.isArrayAnEmptyArray());
    },
    errorMessage: function errorMessage() {
      return Array.isArray(this.error) ? this.error[0] : this.error;
    }
  },
  data: function data() {
    return {
      data: this.value,
      error: ""
    };
  },
  methods: {
    clearError: function clearError() {
      this.error = null;
    },
    input: function input(event) {
      if (this.hasError) {
        this.clearError();
      }

      if (this.type.toLowerCase() === "integer") {
        var value = parseInt(event.target.value);
        this.emmitInput(isNaN(value) ? 0 : value);
        return;
      } else if (this.type.toLowerCase() === "decimal" && event.target.value.split(".").length > 2) {
        this.emmitInput(parseFloat(event.target.value));
        return;
      }

      this.emmitInput(event.target.value);
    },
    emmitInput: function emmitInput(value) {
      this.$emit("input", this.$refs.input.value = this.data = value);
    },
    blur: function blur(event) {
      this.$emit("blur", event);
    },
    focus: function focus(event) {
      this.$emit("focus", event);
    },
    isArrayAnEmptyString: function isArrayAnEmptyString() {
      return typeof this.error === "string" && !this.error.trim().length;
    },
    isArrayAnEmptyArray: function isArrayAnEmptyArray() {
      return Array.isArray(this.error) && !this.error.length;
    }
  },
  props: {
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: String,
    type: {
      "default": 'text',
      type: String
    },
    value: String | Number | Object | Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/DashboardPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/DashboardPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mixins */ "./resources/js/utils/mixins.js");
/* harmony import */ var _includes_AuthHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../includes/AuthHeader */ "./resources/js/pages/includes/AuthHeader.vue");
/* harmony import */ var _tasks_TaskCreateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCreateForm */ "./resources/js/pages/tasks/TaskCreateForm.vue");
/* harmony import */ var _tasks_TaskListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/TaskListItem */ "./resources/js/pages/tasks/TaskListItem.vue");
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
  name: "DashboardPage",
  components: {
    AuthHeader: _includes_AuthHeader__WEBPACK_IMPORTED_MODULE_1__.default,
    TaskCreateForm: _tasks_TaskCreateForm__WEBPACK_IMPORTED_MODULE_2__.default,
    TaskListItem: _tasks_TaskListItem__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      pageTitle: "Beepo To-do App - Dashboard"
    };
  },
  mixins: [_utils_mixins__WEBPACK_IMPORTED_MODULE_0__.default],
  props: {
    user: Object,
    tasks: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/includes/AuthHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/includes/AuthHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "AuthHeader",
  props: {
    user: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/FormInput */ "./resources/js/components/FormInput.vue");
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TaskCreateForm",
  components: {
    FormInput: _components_FormInput__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        parent_id: this.parentId || null,
        context: ""
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      console.log("SUBMIT CALLED");
      console.log(this.form);
      this.form.post('/api/tasks', {
        onFinish: function onFinish() {
          return _this.onSubmitFinish();
        }
      });
    },
    onSubmitFinish: function onSubmitFinish() {
      this.form.context = null;
    }
  },
  props: {
    parentId: [Number],
    errors: [Object],
    response: [Object]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskListItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskListItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/FormInput */ "./resources/js/components/FormInput.vue");
/* harmony import */ var _TaskCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskCreateForm */ "./resources/js/pages/tasks/TaskCreateForm.vue");
/* harmony import */ var _utils_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/mixins */ "./resources/js/utils/mixins.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
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
  name: "TaskListItem",
  components: {
    FormInput: _components_FormInput__WEBPACK_IMPORTED_MODULE_0__.default,
    TaskCreateForm: _TaskCreateForm__WEBPACK_IMPORTED_MODULE_1__.default
  },
  computed: {
    hasSubTasks: function hasSubTasks() {
      return this.task.sub_tasks && this.task.sub_tasks.length > 0;
    },
    isCompleted: function isCompleted() {
      return this.form.is_completed;
    },
    contextClass: function contextClass() {
      return {
        "flex-grow m-0": true,
        "line-through": this.isCompleted
      };
    }
  },
  data: function data() {
    return {
      editable: false,
      showAddTask: false,
      form: this.$inertia.form({
        is_completed: this.task.is_completed,
        parent_id: this.task.parent_id,
        context: this.task.context
      })
    };
  },
  methods: {
    toggleEdit: function toggleEdit() {
      if (this.editable) {
        this.form.reset("context");
      }

      this.editable = !this.editable;
    },
    displayAddItem: function displayAddItem() {
      this.showAddTask = true;
    },
    cancelAddItem: function cancelAddItem() {
      this.showAddTask = false;
    },
    update: function update() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default().put("/api/tasks/".concat(this.task.id), {
        context: this.form.context
      }).then(function (response) {
        return _this.updated(response);
      })["catch"](function (error) {
        return _this.failedToUpdate(error);
      });
    },
    updated: function updated(response) {
      this.editable = false;
      var task = response.data.result.task;
      this.form = this.$inertia.form({
        is_completed: task.is_completed,
        parent_id: task.parent_id,
        context: task.context
      });
    },
    failedToUpdate: function failedToUpdate(error) {
      if (!error.response.data) {
        return console.log(error);
      }

      if (error.response.data.errors && error.response.data.errors.context) {
        this.$refs.context.error = error.response.data.errors.context;
      }

      if (error.response.data.message) {
        this.promptErrors(error.response.data.message);
      }
    },
    toggleCompletion: function toggleCompletion() {
      this.$inertia.patch("/api/tasks/".concat(this.task.id, "/toggle-completion"));
    },
    destroy: function destroy() {
      this.$inertia["delete"]("/api/tasks/".concat(this.task.id));
    }
  },
  watch: {
    isCompleted: function isCompleted(newValue, oldValue) {
      if (oldValue !== null && oldValue !== undefined) {
        this.toggleCompletion();
      }
    }
  },
  mixins: [_utils_mixins__WEBPACK_IMPORTED_MODULE_2__.default],
  props: {
    task: [Object],
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

/***/ "./resources/js/components/FormInput.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/FormInput.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormInput_vue_vue_type_template_id_8b7986ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormInput.vue?vue&type=template&id=8b7986ea& */ "./resources/js/components/FormInput.vue?vue&type=template&id=8b7986ea&");
/* harmony import */ var _FormInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInput.vue?vue&type=script&lang=js& */ "./resources/js/components/FormInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FormInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FormInput_vue_vue_type_template_id_8b7986ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormInput_vue_vue_type_template_id_8b7986ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/DashboardPage.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/dashboard/DashboardPage.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardPage_vue_vue_type_template_id_0fc7bce2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=template&id=0fc7bce2& */ "./resources/js/pages/dashboard/DashboardPage.vue?vue&type=template&id=0fc7bce2&");
/* harmony import */ var _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/DashboardPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DashboardPage_vue_vue_type_template_id_0fc7bce2___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashboardPage_vue_vue_type_template_id_0fc7bce2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/DashboardPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/includes/AuthHeader.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/includes/AuthHeader.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthHeader_vue_vue_type_template_id_31816be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthHeader.vue?vue&type=template&id=31816be0& */ "./resources/js/pages/includes/AuthHeader.vue?vue&type=template&id=31816be0&");
/* harmony import */ var _AuthHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthHeader.vue?vue&type=script&lang=js& */ "./resources/js/pages/includes/AuthHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AuthHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AuthHeader_vue_vue_type_template_id_31816be0___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthHeader_vue_vue_type_template_id_31816be0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/includes/AuthHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/tasks/TaskCreateForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/tasks/TaskCreateForm.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskCreateForm_vue_vue_type_template_id_106eec22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskCreateForm.vue?vue&type=template&id=106eec22& */ "./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=template&id=106eec22&");
/* harmony import */ var _TaskCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskCreateForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TaskCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TaskCreateForm_vue_vue_type_template_id_106eec22___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskCreateForm_vue_vue_type_template_id_106eec22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/tasks/TaskCreateForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/tasks/TaskListItem.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/tasks/TaskListItem.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskListItem_vue_vue_type_template_id_6c7e0fc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=template&id=6c7e0fc0& */ "./resources/js/pages/tasks/TaskListItem.vue?vue&type=template&id=6c7e0fc0&");
/* harmony import */ var _TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=script&lang=js& */ "./resources/js/pages/tasks/TaskListItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TaskListItem_vue_vue_type_template_id_6c7e0fc0___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskListItem_vue_vue_type_template_id_6c7e0fc0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/tasks/TaskListItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormInput.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/FormInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/dashboard/DashboardPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/dashboard/DashboardPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/DashboardPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/includes/AuthHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/includes/AuthHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/includes/AuthHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskCreateForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/tasks/TaskListItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/tasks/TaskListItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskListItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/FormInput.vue?vue&type=template&id=8b7986ea&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FormInput.vue?vue&type=template&id=8b7986ea& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_template_id_8b7986ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_template_id_8b7986ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInput_vue_vue_type_template_id_8b7986ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormInput.vue?vue&type=template&id=8b7986ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormInput.vue?vue&type=template&id=8b7986ea&");


/***/ }),

/***/ "./resources/js/pages/dashboard/DashboardPage.vue?vue&type=template&id=0fc7bce2&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/DashboardPage.vue?vue&type=template&id=0fc7bce2& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_0fc7bce2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_0fc7bce2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_0fc7bce2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=template&id=0fc7bce2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/DashboardPage.vue?vue&type=template&id=0fc7bce2&");


/***/ }),

/***/ "./resources/js/pages/includes/AuthHeader.vue?vue&type=template&id=31816be0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/includes/AuthHeader.vue?vue&type=template&id=31816be0& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthHeader_vue_vue_type_template_id_31816be0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthHeader_vue_vue_type_template_id_31816be0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthHeader_vue_vue_type_template_id_31816be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthHeader.vue?vue&type=template&id=31816be0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/includes/AuthHeader.vue?vue&type=template&id=31816be0&");


/***/ }),

/***/ "./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=template&id=106eec22&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=template&id=106eec22& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreateForm_vue_vue_type_template_id_106eec22___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreateForm_vue_vue_type_template_id_106eec22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCreateForm_vue_vue_type_template_id_106eec22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskCreateForm.vue?vue&type=template&id=106eec22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=template&id=106eec22&");


/***/ }),

/***/ "./resources/js/pages/tasks/TaskListItem.vue?vue&type=template&id=6c7e0fc0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/tasks/TaskListItem.vue?vue&type=template&id=6c7e0fc0& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_6c7e0fc0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_6c7e0fc0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_6c7e0fc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskListItem.vue?vue&type=template&id=6c7e0fc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskListItem.vue?vue&type=template&id=6c7e0fc0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormInput.vue?vue&type=template&id=8b7986ea&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FormInput.vue?vue&type=template&id=8b7986ea& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("input", {
      ref: "input",
      staticClass: "form-input",
      attrs: {
        type: _vm.type,
        readonly: _vm.disabled,
        placeholder: _vm.placeholder,
        autocomplete: "off"
      },
      domProps: { value: _vm.value },
      on: { input: _vm.input, blur: _vm.blur, focus: _vm.focus }
    }),
    _vm._v(" "),
    _vm.hasError
      ? _c("span", {
          staticClass: "text-red-500",
          domProps: { textContent: _vm._s(_vm.errorMessage) }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/DashboardPage.vue?vue&type=template&id=0fc7bce2&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/DashboardPage.vue?vue&type=template&id=0fc7bce2& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "bg-gray-200 min-h-screen" },
    [
      _c("auth-header", { attrs: { user: _vm.user } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "md:container md:mx-auto bg-white mt-5 card" },
        [
          _c("task-create-form"),
          _vm._v(" "),
          _c(
            "div",
            {},
            _vm._l(_vm.tasks, function(task) {
              return _c("task-list-item", {
                key: task.id,
                attrs: { task: task }
              })
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/includes/AuthHeader.vue?vue&type=template&id=31816be0&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/includes/AuthHeader.vue?vue&type=template&id=31816be0& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "nav",
    {
      staticClass:
        "flex items-center justify-between flex-wrap p-6 bg-blue-500 text-white"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "md:text-right text-center md:w-auto w-full md:inline-block block"
        },
        [
          _c(
            "div",
            { staticClass: "md:space-x-3 md:inline-block flex flex-col" },
            [
              _c("inertia-link", {
                staticClass: "link md:inline-block sm:block",
                attrs: { href: "/" },
                domProps: { textContent: _vm._s(_vm.user.name) }
              }),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass: "btn btn-primary md:inline-block sm:block",
                  attrs: { href: "/logout" }
                },
                [_vm._v("Log out")]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "md:flex md:flex-no-shrink block items-center text-white md:w-auto w-full md:text-left text-center"
      },
      [
        _c("span", { staticClass: "font-semibold text-xl tracking-tight" }, [
          _vm._v("Beepo Exam App")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=template&id=106eec22&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskCreateForm.vue?vue&type=template&id=106eec22& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c("form-input", {
          ref: "password",
          attrs: {
            placeholder: "Create a task",
            disabled: _vm.form.processing
          },
          model: {
            value: _vm.form.context,
            callback: function($$v) {
              _vm.$set(_vm.form, "context", $$v)
            },
            expression: "form.context"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskListItem.vue?vue&type=template&id=6c7e0fc0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/tasks/TaskListItem.vue?vue&type=template&id=6c7e0fc0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.is_completed,
              expression: "form.is_completed"
            }
          ],
          staticClass: "flex-none mt-2",
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.form.is_completed)
              ? _vm._i(_vm.form.is_completed, null) > -1
              : _vm.form.is_completed
          },
          on: {
            change: function($event) {
              var $$a = _vm.form.is_completed,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 &&
                    _vm.$set(_vm.form, "is_completed", $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.form,
                      "is_completed",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.form, "is_completed", $$c)
              }
            }
          }
        }),
        _vm._v(" "),
        !_vm.editable
          ? _c("h4", {
              class: _vm.contextClass,
              domProps: { textContent: _vm._s(_vm.form.context) }
            })
          : _c(
              "form",
              {
                staticClass: "flex-grow m-0",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.update($event)
                  }
                }
              },
              [
                _c("form-input", {
                  ref: "context",
                  attrs: { placeholder: "Task" },
                  model: {
                    value: _vm.form.context,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "context", $$v)
                    },
                    expression: "form.context"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-gray-300" }, [
                  _vm._v("Press enter to save")
                ])
              ],
              1
            ),
        _vm._v(" "),
        !_vm.editable
          ? _c("div", [
              !_vm.showAddTask
                ? _c(
                    "button",
                    {
                      staticClass: "flex-none btn btn-primary",
                      on: { click: _vm.displayAddItem }
                    },
                    [_c("i", { staticClass: "fa fa-plus" })]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "flex-none btn btn-warning",
                  on: { click: _vm.toggleEdit }
                },
                [_c("i", { staticClass: "fa fa-pen" })]
              )
            ])
          : _c("div", [
              _c(
                "button",
                {
                  staticClass: "flex-none btn btn-warning",
                  on: { click: _vm.toggleEdit }
                },
                [_vm._v("\n                Cancel Edit\n            ")]
              )
            ]),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            {
              staticClass: "flex-none btn btn-danger",
              on: { click: _vm.destroy }
            },
            [_c("i", { staticClass: "fa fa-trash" })]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "px-5" }, [
        _vm.hasSubTasks
          ? _c(
              "div",
              { staticClass: "space-y-3" },
              _vm._l(_vm.task.sub_tasks, function(subTask) {
                return _c("task-list-item", {
                  key: subTask.id,
                  attrs: { task: subTask }
                })
              }),
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.showAddTask
          ? _c(
              "div",
              { staticClass: "flex flex-row space-x-2 py-3" },
              [
                _c("task-create-form", {
                  staticClass: "flex-grow m-0",
                  attrs: { "parent-id": _vm.task.id }
                }),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "button",
                    {
                      staticClass: "flex-none btn btn-default",
                      on: { click: _vm.cancelAddItem }
                    },
                    [_c("i", { staticClass: "fa fa-ban" })]
                  )
                ])
              ],
              1
            )
          : _vm._e()
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