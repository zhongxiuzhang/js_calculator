(this.webpackJsonpjs_calculator=this.webpackJsonpjs_calculator||[]).push([[0],{13:function(_,e,t){},8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Users_zhongxiuzhang_Documents_Coding_web_projects_react_app_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_Users_zhongxiuzhang_Documents_Coding_web_projects_react_app_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_Users_zhongxiuzhang_Documents_Coding_web_projects_react_app_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_Users_zhongxiuzhang_Documents_Coding_web_projects_react_app_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),react_dom__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__),_index_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(13),_index_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),JSCalculator=function(_React$Component){Object(_Users_zhongxiuzhang_Documents_Coding_web_projects_react_app_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(JSCalculator,_React$Component);var _super=Object(_Users_zhongxiuzhang_Documents_Coding_web_projects_react_app_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(JSCalculator);function JSCalculator(_){var e;return Object(_Users_zhongxiuzhang_Documents_Coding_web_projects_react_app_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,JSCalculator),(e=_super.call(this,_)).state={formula:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{children:"\xa0"}),result:0,prevFormula:"",deciMode:!1,deciNum:0},e}return Object(_Users_zhongxiuzhang_Documents_Coding_web_projects_react_app_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(JSCalculator,[{key:"handleClear",value:function(){this.setState({formula:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{children:"\xa0"}),result:0,prevFormula:"",deciMode:!1,deciNum:0})}},{key:"handleDecimal",value:function(){this.state.deciMode||this.setState({deciMode:!0,deciNum:1})}},{key:"handleNumberInput",value:function(_){var e;"number"===typeof this.state.result?(this.state.deciMode?(e=this.state.result+_/Math.pow(10,this.state.deciNum),e=Math.round(e*Math.pow(10,this.state.deciNum))/Math.pow(10,this.state.deciNum),this.setState({deciNum:this.state.deciNum+1})):e=10*this.state.result+_,this.setState({formula:this.state.prevFormula+e.toString(),result:e})):this.setState({formula:this.state.prevFormula+_.toString(),result:_})}},{key:"handleOperation",value:function(_){var e=new Set(["/","*","+","-"]),t=!1,r=!1;this.state.prevFormula.length>0&&e.has(this.state.prevFormula.charAt(this.state.prevFormula.length-1))&&e.has(this.state.result)&&(t=!0,"-"!==this.state.prevFormula.charAt(this.state.prevFormula.length-1)&&"-"===_&&(r=!0)),t?r?this.setState({formula:this.state.prevFormula+_,prevFormula:this.state.prevFormula+_}):this.setState({formula:this.state.prevFormula.substring(0,this.state.prevFormula.length-1)+_,prevFormula:this.state.prevFormula.substring(0,this.state.prevFormula.length-1)+_}):this.setState({formula:this.state.prevFormula+this.state.result+_,prevFormula:this.state.prevFormula+this.state.result+_}),this.setState({result:_})}},{key:"handleEqual",value:function handleEqual(){var finalRes=eval(this.state.formula);finalRes=Math.round(finalRes*Math.pow(10,4))/Math.pow(10,4),this.setState({formula:this.state.formula+"="+finalRes.toString(),result:finalRes,prevFormula:"",deciMode:!1,deciNum:0})}},{key:"render",value:function(){var _=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{children:"JS Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"calculator-box",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"display",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"display-formula",children:this.state.formula}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"display-result",children:this.state.result})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"input-panel",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"clear",onClick:function(){return _.handleClear()},children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"divide",onClick:function(){return _.handleOperation("/")},children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"multiply",onClick:function(){return _.handleOperation("*")},children:"X"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"seven",onClick:function(){return _.handleNumberInput(7)},children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"eight",onClick:function(){return _.handleNumberInput(8)},children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"nine",onClick:function(){return _.handleNumberInput(9)},children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"subtract",onClick:function(){return _.handleOperation("-")},children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"four",onClick:function(){return _.handleNumberInput(4)},children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"five",onClick:function(){return _.handleNumberInput(5)},children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"six",onClick:function(){return _.handleNumberInput(6)},children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"add",onClick:function(){return _.handleOperation("+")},children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"one",onClick:function(){return _.handleNumberInput(1)},children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"two",onClick:function(){return _.handleNumberInput(2)},children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"three",onClick:function(){return _.handleNumberInput(3)},children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"equals",onClick:function(){return _.handleEqual()},children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"zero",onClick:function(){return _.handleNumberInput(0)},children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{id:"decimal",onClick:function(){return _.handleDecimal()},children:"."})]})]})]})}}]),JSCalculator}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(JSCalculator,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.dbf6f8b6.chunk.js.map