webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/private/var/www/vue_final/src/module/about/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd8aa172", Component.options)
  } else {
    hotAPI.reload("data-v-dd8aa172", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = {
    methods: {
        handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            text: '',
            obj: [{ text: '学习java' }],
            current: ''

        };
    },
    created: function created() {
        console.log('game start!');
    },
    methods: {
        add: function add() {
            this.obj.push({ 'text': this.text });
        }
    }, watch: {
        obj: function obj(current) {
            //这是当前的弹幕即为最后一条
            var currentDanmu = current[current.length - 1].text;
            console.log(currentDanmu);
            //get this 因为不是一个对象
            var _this = this;
            self.setInterval(function () {

                _this.current = '<h1>' + currentDanmu + '</h1>';
                console.log(_this.current);
            }, 1000);
        }
    }
};

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_header__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_danmu_danmu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_danmu_danmu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_danmu_danmu__);
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

//APP.vue为入口文件进行查找的路由


/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    common: __WEBPACK_IMPORTED_MODULE_0__components_common_header___default.a, danmu: __WEBPACK_IMPORTED_MODULE_1__components_danmu_danmu___default.a
  }
};

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.input[data-v-be0ea756] {\n    bottom: -370px;\n    position: relative;\n}\n\n/*设置展示框样式*/\ninput[type=\"text\"][data-v-be0ea756],\ninput[type=\"password\"][data-v-be0ea756] {\n\n    border: 1px solid #ccc;\n    padding: 2px;\n    font-size: 1.2rem;\n    color: #444;\n    width: 200px;\n}\n\n/*设置主背景颜色&style*/\n.background[data-v-be0ea756] {\n    background-color: #b3b3b3;\n    font-family: \"Courier New\", Courier, monospace;\n    width: 400px;\n    height: 400px;\n}\n\n\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  "data-v-42f6acba",
  /* cssModules */
  null
)
Component.options.__file = "/private/var/www/vue_final/src/components/common/header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42f6acba", Component.options)
  } else {
    hotAPI.reload("data-v-42f6acba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  "data-v-be0ea756",
  /* cssModules */
  null
)
Component.options.__file = "/private/var/www/vue_final/src/components/danmu/danmu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] danmu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-be0ea756", Component.options)
  } else {
    hotAPI.reload("data-v-be0ea756", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-row', {
    staticClass: "tac"
  }, [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": "2"
    },
    on: {
      "open": _vm.handleOpen,
      "close": _vm.handleClose
    }
  }, [_c('el-submenu', {
    attrs: {
      "index": "1"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-message"
  }), _vm._v("导航一")]), _vm._v(" "), _c('el-menu-item-group', [_c('template', {
    slot: "title"
  }, [_vm._v("分组一")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-1"
    }
  }, [_vm._v("选项1")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-2"
    }
  }, [_vm._v("选项2")])], 2), _vm._v(" "), _c('el-menu-item-group', {
    attrs: {
      "title": "分组2"
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "1-3"
    }
  }, [_vm._v("选项3")])], 1), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "1-4"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("选项4")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-4-1"
    }
  }, [_vm._v("选项1")])], 2)], 2), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "2"
    }
  }, [_c('i', {
    staticClass: "el-icon-menu"
  }), _vm._v("导航二")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "3"
    }
  }, [_c('i', {
    staticClass: "el-icon-setting"
  }), _vm._v("导航三")])], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42f6acba", module.exports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h4'), _vm._v("\n    " + _vm._s(_vm.text) + "\n\n    "), _c('div', {
    staticClass: "background"
  }, [_c('div', {
    attrs: {
      "id": "danmu"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.current)
    }
  }, [_vm._v("\n            " + _vm._s(_vm.current) + "\n\n\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.text),
      expression: "text"
    }],
    attrs: {
      "type": "text",
      "value": "输入"
    },
    domProps: {
      "value": (_vm.text)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.add($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.text = $event.target.value
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-be0ea756", module.exports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('common'), _vm._v(" "), _c('danmu')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dd8aa172", module.exports)
  }
}

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5f3312ef", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-42f6acba\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-42f6acba\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("d711c482", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-be0ea756\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./danmu.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-be0ea756\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./danmu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);



/* eslint-disable no-new */
//s
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#body',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ })
],[30]);