(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_diegolaya_Desktop_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_App_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_firebase_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),initialize=!1;function App(){var database=_firebase_js__WEBPACK_IMPORTED_MODULE_3__.a.database(),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(_Users_diegolaya_Desktop_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),operation=_useState2[0],setOperation=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("0"),_useState4=Object(_Users_diegolaya_Desktop_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState6=Object(_Users_diegolaya_Desktop_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),executable=_useState6[0],setExecutable=_useState6[1];function detectNewOperation(){database.ref("/").on("child_added",(function(_,e){updateHistory()}))}function enter(){if(executable){setOperation(result);var sendResult=eval(result).toFixed(3).toString();setResult(sendResult);var amount=checkAmount(),position=amount-1,path="history/"+position.toString();database.ref("count").set(--amount),database.ref(path).set(result+" = "+sendResult)}}function updateHistory(_){database.ref("history/").off(),database.ref("history/").orderByKey().limitToFirst(10).on("value",(function(_){document.getElementById("history-block").innerHTML="",_.forEach((function(_){var e='<div class="calculation">'+_.val()+"</div>";document.getElementById("history-block").innerHTML+=e}))}))}function checkAmount(){var _=0;return database.ref("count").on("value",(function(e){_=e.val()})),_}function allClear(){setResult("0"),setOperation("")}function backspace(){1==result.length?setResult("0"):setResult(result.substring(0,result.length-1)),setOperation("")}function addInput(_){var e=_.target.id;"0"==result?setResult(e):"("==e&&Number.isInteger(parseInt(result.substring(result.length,result.length-1)))?setResult(result+"*"+e):setResult(result+e),setOperation("")}function validateInput(){try{eval(result),document.getElementById("resultParent").style.borderColor="#E7FFE5",setExecutable(!0)}catch(error){document.getElementById("resultParent").style.borderColor="#FFE5E5",setExecutable(!1)}}return initialize||(detectNewOperation(),checkAmount(),initialize=!0),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"navbar",children:"Simple Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{id:"content",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{id:"calculator-side",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{id:"resultParent",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"operation",children:operation}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{onChange:setTimeout(validateInput,1),id:"result",children:result})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"calculator",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{id:"buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"1",className:"button",onClick:addInput,children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"2",className:"button",onClick:addInput,children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"3",className:"button",onClick:addInput,children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"-",className:"button operator",onClick:addInput,children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"4",className:"button",onClick:addInput,children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"5",className:"button",onClick:addInput,children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"6",className:"button",onClick:addInput,children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"+",className:"button operator",onClick:addInput,children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"7",className:"button",onClick:addInput,children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"8",className:"button",onClick:addInput,children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"9",className:"button",onClick:addInput,children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"*",className:"button operator",onClick:addInput,children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"button",onClick:allClear,children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"0",className:"button",onClick:addInput,children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:".",className:"button",onClick:addInput,children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"/",className:"button operator",onClick:addInput,children:"\xf7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:"(",className:"button operator",onClick:addInput,children:"("}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{id:")",className:"button operator",onClick:addInput,children:")"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"button operator",onClick:backspace,children:"DEL"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"button special-key",onClick:enter,children:"="})]})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"history-side",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{id:"history-block"})})]})]})}__webpack_exports__.a=App},11:function(_,e,t){"use strict";var a=t(17);t(19);var s=a.default.initializeApp({apiKey:"AIzaSyBlF2zwwVgGCFEIKsAfr49F6oEmoXqJs84",authDomain:"calcula-b3dc6.firebaseapp.com",projectId:"calcula-b3dc6",storageBucket:"calcula-b3dc6.appspot.com",messagingSenderId:"509205100675",appId:"1:509205100675:web:52498b8bc616df1dc9c3b6"});e.a=s},16:function(_,e,t){},24:function(_,e,t){"use strict";t.r(e);var a=t(4),s=t.n(a),n=t(9),r=t.n(n),c=t(10),i=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,a=e.getFID,s=e.getFCP,n=e.getLCP,r=e.getTTFB;t(_),a(_),s(_),n(_),r(_)}))},u=t(2);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(c.a,{})}),document.getElementById("root")),i()}},[[24,1,2]]]);
//# sourceMappingURL=main.483cb1e8.chunk.js.map