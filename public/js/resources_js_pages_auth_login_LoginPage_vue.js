(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_login_LoginPage_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GuestHeader"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/login/LoginPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/login/LoginPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mixins */ "./resources/js/utils/mixins.js");
/* harmony import */ var _includes_GuestHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../includes/GuestHeader */ "./resources/js/pages/auth/includes/GuestHeader.vue");
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/FormInput */ "./resources/js/components/FormInput.vue");
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
  name: "LoginPage",
  components: {
    GuestHeader: _includes_GuestHeader__WEBPACK_IMPORTED_MODULE_1__.default,
    FormInput: _components_FormInput__WEBPACK_IMPORTED_MODULE_2__.default
  },
  computed: {
    validationErrors: function validationErrors() {
      return this.errors.loginValidation || {};
    },
    responseErrorMessage: function responseErrorMessage() {
      return this.response.type == "error" ? this.response.message : null;
    }
  },
  data: function data() {
    return {
      pageTitle: "Beepo Exam - Log in",
      form: this.$inertia.form({
        email: "",
        password: ""
      }),
      isRequesting: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.isRequesting = true;
      this.form.post('/api/login', {
        onFinish: function onFinish() {
          return _this.onSubmitFinish();
        }
      });
    },
    onSubmitFinish: function onSubmitFinish() {
      this.isRequesting = false;
      this.form.password = null;
    },
    failedToLogin: function failedToLogin(error) {
      this.promptFormErrors(this.$refs, error);
      this.form.password = "";
    }
  },
  mixins: [_utils_mixins__WEBPACK_IMPORTED_MODULE_0__.default],
  props: {
    errors: Object,
    response: Object
  },
  watch: {
    validationErrors: function validationErrors(newValue) {
      this.displayValidationErrors(this.$refs, newValue);
    }
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

/***/ "./resources/js/pages/auth/includes/GuestHeader.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/auth/includes/GuestHeader.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GuestHeader_vue_vue_type_template_id_26aa4c0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestHeader.vue?vue&type=template&id=26aa4c0f& */ "./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=template&id=26aa4c0f&");
/* harmony import */ var _GuestHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestHeader.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GuestHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GuestHeader_vue_vue_type_template_id_26aa4c0f___WEBPACK_IMPORTED_MODULE_0__.render,
  _GuestHeader_vue_vue_type_template_id_26aa4c0f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/includes/GuestHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/login/LoginPage.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/auth/login/LoginPage.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginPage_vue_vue_type_template_id_53e42f54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=template&id=53e42f54& */ "./resources/js/pages/auth/login/LoginPage.vue?vue&type=template&id=53e42f54&");
/* harmony import */ var _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/login/LoginPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LoginPage_vue_vue_type_template_id_53e42f54___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoginPage_vue_vue_type_template_id_53e42f54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/login/LoginPage.vue"
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

/***/ "./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/auth/login/LoginPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/auth/login/LoginPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/login/LoginPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=template&id=26aa4c0f&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=template&id=26aa4c0f& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestHeader_vue_vue_type_template_id_26aa4c0f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestHeader_vue_vue_type_template_id_26aa4c0f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestHeader_vue_vue_type_template_id_26aa4c0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestHeader.vue?vue&type=template&id=26aa4c0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=template&id=26aa4c0f&");


/***/ }),

/***/ "./resources/js/pages/auth/login/LoginPage.vue?vue&type=template&id=53e42f54&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/auth/login/LoginPage.vue?vue&type=template&id=53e42f54& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_53e42f54___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_53e42f54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_53e42f54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginPage.vue?vue&type=template&id=53e42f54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/login/LoginPage.vue?vue&type=template&id=53e42f54&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=template&id=26aa4c0f&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/includes/GuestHeader.vue?vue&type=template&id=26aa4c0f& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "flex items-center justify-between flex-wrap bg-teal p-6 bg-blue-500 text-white"
    },
    [
      _c(
        "div",
        { staticClass: "flex items-center flex-no-shrink text-white mr-6" },
        [
          _c(
            "inertia-link",
            {
              staticClass: "font-semibold text-xl tracking-tight",
              attrs: { href: "/" }
            },
            [_vm._v("Beepo Exam App")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "inline-block text-right text-center w-auto font-semibold"
        },
        [
          _c(
            "div",
            [
              _c(
                "inertia-link",
                { staticClass: "btn btn-primary", attrs: { href: "/login" } },
                [_vm._v("Log in")]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/login/LoginPage.vue?vue&type=template&id=53e42f54&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/login/LoginPage.vue?vue&type=template&id=53e42f54& ***!
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
  return _c(
    "div",
    [
      _c("guest-header"),
      _vm._v(" "),
      _c("div", { staticClass: "h-64 bg-blue-500 w-screen" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "-mt-36 h-auto flex flex-col space-y-10 justify-center items-center"
        },
        [
          _c("div", { staticClass: "login-pane" }, [
            _c("h1", { staticClass: "text-5xl font-medium mb-3" }, [
              _vm._v("Log in")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-sm text-gray-500" }, [
              _vm._v("Log in to get started")
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "space-y-5 mt-5",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [
                _c("form-input", {
                  ref: "email",
                  attrs: { type: "text", placeholder: "Email" },
                  model: {
                    value: _vm.form.email,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "email", $$v)
                    },
                    expression: "form.email"
                  }
                }),
                _vm._v(" "),
                _c("form-input", {
                  ref: "password",
                  attrs: { type: "password", placeholder: "Password" },
                  model: {
                    value: _vm.form.password,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "password", $$v)
                    },
                    expression: "form.password"
                  }
                }),
                _vm._v(" "),
                _vm.responseErrorMessage
                  ? _c("div", { staticClass: "error-message" }, [
                      _c("i", {
                        staticClass: "fas fa-exclamation-triangle icon"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "text",
                        domProps: {
                          textContent: _vm._s(_vm.responseErrorMessage)
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "w-full text-right" }, [
                  !_vm.isRequesting
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-warning",
                          attrs: { type: "submit" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-sign-in-alt mr-1" }),
                          _vm._v(" Log in\n                    ")
                        ]
                      )
                    : _c(
                        "button",
                        {
                          staticClass: "btn-disabled",
                          attrs: { disabled: "" }
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-spin fa-spinner mr-2"
                          }),
                          _vm._v(" Please wait\n                    ")
                        ]
                      )
                ])
              ],
              1
            )
          ])
        ]
      )
    ],
    1
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