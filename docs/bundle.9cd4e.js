!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/social-img/",e(e.s="pwNi")}({"0c/n":function(t){t.exports={app:"app__-4egw",home:"home__17AGB"}},"2/q8":function(t){t.exports={textAreaWrapper:"textAreaWrapper__Ue99K",editInput:"editInput__1AkJX",textArea:"textArea__3gMEN","textArea--italic":"textArea--italic__3KAoM","textArea--editing":"textArea--editing__20TFB",editFormOption:"editFormOption__1HnmW",editPanel:"editPanel__j2j2l"}},"6DVU":function(t){t.exports={container:"container__QWvWP",fullSize:"fullSize__3WW5i",textAreasWrapper:"textAreasWrapper__ogZOH",gradientWrapper:"gradientWrapper__1GLl4",imageWrapper:"imageWrapper__1R4Ai","imageWrapper--bordered":"imageWrapper--bordered__1HSS1"}},"9qb7":function(t,e){var n,r;!function(){"use strict";function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n))t.push(o.apply(null,n));else if("object"===r)for(var a in n)i.call(n,a)&&n[a]&&t.push(a)}}return t.join(" ")}var i={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=o:(n=[],void 0!==(r=function(){return o}.apply(e,n))&&(t.exports=r))}()},Clin:function(t){t.exports={imageInput:"imageInput__2INQt"}},JkW7:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){void 0===n&&(n=B);var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),l=0;l<c.length;l++){var s=c[l].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=a(t.replace(o,"")),e=a(e||"");for(var p=Math.max(t.length,e.length),f=0;f<p;f++)if(e[f]&&":"===e[f].charAt(0)){var h=e[f].replace(/(^\:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||B)[0]||"",_=~d.indexOf("+"),b=~d.indexOf("*"),y=t[f]||"";if(!y&&!b&&(d.indexOf("?")<0||_)){r=!1;break}if(u[h]=decodeURIComponent(y),_||b){u[h]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){var n=t.attributes||B,r=e.attributes||B;return n.default?1:r.default?-1:u(n.path)-u(r.path)||n.path.length-r.path.length}function a(t){return c(t).split("/")}function u(t){return(c(t).match(/\/+/g)||"").length}function c(t){return t.replace(/(^\/+|\/+$)/g,"")}function l(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function s(t,e){void 0===e&&(e="push"),F&&F[e]?F[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function p(){var t;return t=F&&F.location?F.location:F&&F.getCurrentLocation?F.getCurrentLocation():"undefined"!=typeof location?location:G,""+(t.pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),h(t)&&s(t,e?"replace":"push"),d(t)}function h(t){for(var e=H.length;e--;)if(H[e].canRoute(t))return!0;return!1}function d(t){for(var e=!1,n=0;n<H.length;n++)!0===H[n].routeTo(t)&&(e=!0);for(var r=D.length;r--;)D[r](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function b(t){if(0==t.button)return _(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&l(e)){if(e.hasAttribute("native"))return;if(_(e))return y(t)}}while(e=e.parentNode)}}function v(){K||("function"==typeof addEventListener&&(F||addEventListener("popstate",function(){return d(p())}),addEventListener("click",g)),K=!0)}function m(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function x(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function S(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function T(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function U(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function W(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function M(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function V(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function L(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var z=n("KM04"),B={},F=null,H=[],D=[],G={},K=!1,$=function(t){function e(e){t.call(this,e),e.history&&(F=e.history),this.state={url:e.url||p()},v()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){H.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;F&&(this.unlisten=F.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),H.splice(H.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.slice().sort(i).map(function(t){var i=t.attributes||{},a=i.path,u=o(e,a,i);if(u){if(!1!==n){var c={url:e,matches:u};return r(c,u),Object(z.cloneElement)(t,c)}return t}return!1}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),a=i[0]||null;this._didRoute=!!a;var u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:a})),a},e}(z.Component),J=function(t){return Object(z.h)("a",r({onClick:b},t))},Q=function(t){return Object(z.h)(t.component,t)};$.subscribers=D,$.getCurrentUrl=p,$.route=f,$.Router=$,$.Route=Q,$.Link=J;var q=n("Clin"),Z=n.n(q),X=function(t){return Object(z.h)("input",{type:"text",class:Z.a.imageInput,placeholder:"Image URL",value:t.imageUrl,onChange:function(e){return t.updateImageUrl(e.srcElement.value)}})},Y=n("9qb7"),tt=n.n(Y),et=n("2/q8"),nt=n.n(et),rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ot=Object(z.h)("option",{value:"300"},"300"),it=Object(z.h)("option",{value:"400"},"400"),at=Object(z.h)("option",{value:"600"},"600"),ut=Object(z.h)("option",{value:"700"},"700"),ct=function(t){function e(e){var n=m(this,t.call(this,e));return n.state=rt({},e.model),n}return O(e,t),e.prototype.toggleItalic=function(){this.setState(function(t){return{italic:!t.italic}})},e.prototype.setEditMode=function(t){this.setState(function(){return{isEditEnabled:t}})},e.prototype.setFontSize=function(t){this.setState(function(){return{fontSize:t}})},e.prototype.setText=function(t){this.setState(function(){return{text:t}})},e.prototype.setFontWeight=function(t){this.setState(function(){return{fontWeight:t}})},e.prototype.setTop=function(t){this.setState(function(){return{top:t}})},e.prototype.renderItalicCheckbox=function(){var t=this;return Object(z.h)("label",null,Object(z.h)("span",{class:nt.a.editFormOption},"Italic"),Object(z.h)("input",{type:"checkbox",value:this.state.italic,onChange:function(){return t.toggleItalic()}}))},e.prototype.renderFontSizeInput=function(){var t=this;return Object(z.h)("label",null,Object(z.h)("span",{class:nt.a.editFormOption},"Font size"),Object(z.h)("input",{type:"number",min:"0",value:this.state.fontSize,onChange:function(e){return t.setFontSize(e.srcElement.value)}}))},e.prototype.renderTopInput=function(){var t=this;return Object(z.h)("label",null,Object(z.h)("span",{class:nt.a.editFormOption},"Top"),Object(z.h)("input",{type:"number",value:this.state.top,onChange:function(e){return t.setTop(e.srcElement.value)}}))},e.prototype.renderRemoveBtn=function(){return Object(z.h)("button",{onClick:function(){return onRemove()}},"Remove × ")},e.prototype.renderCloseBtn=function(){var t=this;return Object(z.h)("button",{onClick:function(){return t.setEditMode(!1)}},"Close")},e.prototype.renderTextInput=function(){var t=this;return Object(z.h)("input",{class:nt.a.editInput,type:"text",value:this.state.text,onChange:function(e){return t.setText(e.srcElement.value)}})},e.prototype.renderWeightSelector=function(){var t=this;return Object(z.h)("label",null,Object(z.h)("span",{class:nt.a.editFormOption},"Font weight"),Object(z.h)("select",{onChange:function(e){return t.setFontWeight(e.srcElement.value)}},ot,it,at,ut))},e.prototype.render=function(){var t,e=this,n=tt()((t={},t[nt.a.textArea]=!0,t[nt.a["textArea--editing"]]=this.state.isEditEnabled,t[nt.a["textArea--italic"]]=this.state.italic,t)),r={"font-size":this.state.fontSize+"px","font-weight":this.state.fontWeight};return Object(z.h)("div",{class:nt.a.textAreaWrapper,style:{top:this.state.top+"px"}},Object(z.h)("p",{class:n,style:r,onClick:function(){return e.setEditMode(!0)}},this.state.text),this.state.isEditEnabled&&Object(z.h)("div",{class:nt.a.editPanel},this.renderTextInput(),Object(z.h)("div",null,this.renderItalicCheckbox(),this.renderFontSizeInput(),this.renderTopInput(),this.renderWeightSelector(),this.renderCloseBtn(),this.renderRemoveBtn())))},e}(z.Component),lt=n("6DVU"),st=n.n(lt),pt=function(t){function e(n){return C(this,e),j(this,t.call(this,n))}return x(e,t),e.prototype.renderGradient=function(t){var e=t.gradientUrl,n={"background-image":"url("+e+")"},r=tt()(st.a.fullSize,st.a.gradientWrapper);return Object(z.h)("div",{class:r,style:n})},e.prototype.renderImage=function(t){var e,n=t.imageUrl,r=t.blurValue,o={"background-image":"url("+n+")",filter:"blur("+r+"px)"},i=tt()(st.a.fullSize,st.a.imageWrapper,(e={},e[st.a["imageWrapper--bordered"]]=!n,e));return Object(z.h)("div",{class:i,style:o})},e.prototype.renderTextAreas=function(t){var e=t.textAreaModels,n=tt()(st.a.fullSize,st.a.textAreasWrapper);return Object(z.h)("div",{class:n},e.map(function(t){return Object(z.h)(ct,{model:t})}))},e.prototype.render=function(t){return Object(z.h)("div",{class:st.a.container},this.renderTextAreas(t),this.renderGradient(t),this.renderImage(t))},e}(z.Component),ft=n("oPeZ"),ht=n.n(ft),dt=Object(z.h)("option",{value:""},"Pick gradient style"),_t=function(t){var e="/social-img";return Object(z.h)("div",{class:ht.a.gradientPickerContainer},Object(z.h)("p",{class:ht.a.gradientPickerTitle},"Gradient"),Object(z.h)("select",{class:ht.a.gradientPickerSelect,onChange:function(e){return t.onChange(e.srcElement.value)}},dt,Object(z.h)("option",{value:e+"/assets/gradients/1.png"},"Style 1"),Object(z.h)("option",{value:e+"/assets/gradients/2.png"},"Style 2"),Object(z.h)("option",{value:e+"/assets/gradients/3.png"},"Style 3"),Object(z.h)("option",{value:e+"/assets/gradients/4.png"},"Style 4")))},bt=n("MnJD"),yt=n.n(bt),gt=function(t){function e(n){w(this,e);var r=P(this,t.call(this,n));return r.state={blurValue:0},r}return S(e,t),e.prototype.onRangeChange=function(t){this.setState(function(){return{blurValue:t}}),this.props.onChange(t)},e.prototype.render=function(){var t=this;return Object(z.h)("div",null,Object(z.h)("p",{class:yt.a.blurRangeTitle},"Blur"),Object(z.h)("input",{class:yt.a.inputStyle,type:"range",min:"0",max:"20",step:"1",value:this.state.blurValue,onChange:function(e){return t.onRangeChange(e.srcElement.value)}}))},e}(z.Component),vt=n("ctQH"),mt=n.n(vt),Ot=function(t){function e(n){k(this,e);var r=E(this,t.call(this,n));return r.state={isHidden:!0},r}return T(e,t),e.prototype.toggleVisibility=function(){this.setState(function(t){return{isHidden:!t.isHidden}})},e.prototype.renderControls=function(t){var e,n=t.onGradientChange,r=t.onBlurChange,o=t.onNewTextArea,i=tt()(mt.a.controlPanelPopup,(e={},e[mt.a["controlPanelPopup--hidden"]]=this.state.isHidden,e));return Object(z.h)("div",{class:i},Object(z.h)(_t,{onChange:n}),Object(z.h)(gt,{onChange:r}),Object(z.h)("button",{onClick:o,class:mt.a.controlPanelButton},"+ Add text area"))},e.prototype.render=function(t){var e=this;return Object(z.h)("div",{class:mt.a.controlPanel},Object(z.h)("button",{class:mt.a.controlPanelButton,onClick:function(){return e.toggleVisibility()}},"Customize"),this.renderControls(t))},e}(z.Component),Ct=n("uK8n"),jt=n.n(Ct),xt=function(t){function e(){U(this,e);var n=A(this,t.call(this));return n.state={imageUrl:"",gradientUrl:"",blurValue:0,textAreaModels:[]},n}return W(e,t),e.prototype.updateImageUrl=function(t){this.setState(function(){return{imageUrl:t}})},e.prototype.onGradientChange=function(t){this.setState(function(){return{gradientUrl:t}})},e.prototype.onBlurChange=function(t){this.setState(function(){return{blurValue:t}})},e.prototype.onNewTextArea=function(){this.setState(function(t){return{textAreaModels:[].concat(t.textAreaModels,[{text:"Click to edit",top:100,italic:!1,fontSize:30,fontWeight:400,isEditEnabled:!1}])}})},e.prototype.render=function(){return Object(z.h)("div",null,Object(z.h)("div",{class:jt.a.inputContainer},Object(z.h)(X,{imageUrl:this.state.imageUrl,updateImageUrl:this.updateImageUrl.bind(this)}),Object(z.h)(Ot,{onGradientChange:this.onGradientChange.bind(this),onBlurChange:this.onBlurChange.bind(this),onNewTextArea:this.onNewTextArea.bind(this)})),Object(z.h)(pt,{imageUrl:this.state.imageUrl,gradientUrl:this.state.gradientUrl,blurValue:this.state.blurValue,textAreaModels:this.state.textAreaModels}))},e}(z.Component),wt=n("u3et"),Pt=n.n(wt),St=Object(z.h)("h1",null,"Social Images Generator"),kt=function(t){function e(){return N(this,e),I(this,t.apply(this,arguments))}return M(e,t),e.prototype.render=function(){return Object(z.h)("header",{class:Pt.a.header},St)},e}(z.Component),Et=n("0c/n"),Tt=n.n(Et),Ut=Object(z.h)(kt,null),At=Object(z.h)(xt,null),Wt=function(t){function e(){var n,r,o;R(this,e);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=r=V(this,t.call.apply(t,[this].concat(a))),r.handleRoute=function(t){r.currentUrl=t.url},o=n,V(r,o)}return L(e,t),e.prototype.render=function(){return Object(z.h)("div",{id:"app",class:Tt.a.app},Ut,Object(z.h)("div",{class:Tt.a.home},At))},e}(z.Component);e.default=Wt},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var r,o,i,a,u=W;for(a=arguments.length;a-- >2;)A.push(arguments[a]);for(n&&null!=n.children&&(A.length||A.push(n.children),delete n.children);A.length;)if((o=A.pop())&&void 0!==o.pop)for(a=o.length;a--;)A.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?u[u.length-1]+=o:u===W?u=[o]:u.push(o),r=i;var c=new e;return c.nodeName=t,c.children=u,c.attributes=null==n?void 0:n,c.key=null==n?void 0:n.key,void 0!==U.vnode&&U.vnode(c),c}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,r(r({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==M.push(t)&&(U.debounceRendering||N)(a)}function a(){var t,e=M;for(M=[];t=e.pop();)t.__d&&P(t)}function u(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=r({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function s(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function p(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===I.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,d,a):t.removeEventListener(e,d,a),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)h(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var u=o&&e!==(e=e.replace(/^xlink\:?/,""));null==r||!1===r?u?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(u?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function h(t,e,n){try{t[e]=n}catch(t){}}function d(t){return this.__l[t.type](U.event&&U.event(t)||t)}function _(){for(var t;t=R.pop();)U.afterMount&&U.afterMount(t),t.componentDidMount&&t.componentDidMount()}function b(t,e,n,r,o,i){V++||(L=null!=o&&void 0!==o.ownerSVGElement,z=null!=t&&!("__preactattr_"in t));var a=y(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--V||(z=!1,i||_()),a}function y(t,e,n,r,o){var i=t,a=L;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0))),i.__preactattr_=!0,i;var u=e.nodeName;if("function"==typeof u)return S(t,e,n,r);if(L="svg"===u||"foreignObject"!==u&&L,u+="",(!t||!c(t,u))&&(i=s(u,L),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0)}var l=i.firstChild,p=i.__preactattr_,f=e.children;if(null==p){p=i.__preactattr_={};for(var h=i.attributes,d=h.length;d--;)p[h[d].name]=h[d].value}return!z&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&g(i,f,n,r,z||null!=p.dangerouslySetInnerHTML),O(i,e.attributes,p),L=a,i}function g(t,e,n,r,o){var i,a,c,l,s,f=t.childNodes,h=[],d={},_=0,b=0,g=f.length,m=0,O=e?e.length:0;if(0!==g)for(var C=0;C<g;C++){var j=f[C],x=j.__preactattr_,w=O&&x?j._component?j._component.__k:x.key:null;null!=w?(_++,d[w]=j):(x||(void 0!==j.splitText?!o||j.nodeValue.trim():o))&&(h[m++]=j)}if(0!==O)for(var C=0;C<O;C++){l=e[C],s=null;var w=l.key;if(null!=w)_&&void 0!==d[w]&&(s=d[w],d[w]=void 0,_--);else if(!s&&b<m)for(i=b;i<m;i++)if(void 0!==h[i]&&u(a=h[i],l,o)){s=a,h[i]=void 0,i===m-1&&m--,i===b&&b++;break}s=y(s,l,n,r),c=f[C],s&&s!==t&&s!==c&&(null==c?t.appendChild(s):s===c.nextSibling?p(c):t.insertBefore(s,c))}if(_)for(var C in d)void 0!==d[C]&&v(d[C],!1);for(;b<=m;)void 0!==(s=h[m--])&&v(s,!1)}function v(t,e){var n=t._component;n?k(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||p(t),m(t))}function m(t){for(t=t.lastChild;t;){var e=t.previousSibling;v(t,!0),t=e}}function O(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||f(t,r,n[r],n[r]=void 0,L);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||f(t,r,n[r],n[r]=e[r],L)}function C(t){var e=t.constructor.name;(B[e]||(B[e]=[])).push(t)}function j(t,e,n){var r,o=B[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),E.call(r,e,n)):(r=new E(e,n),r.constructor=t,r.render=x),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.__b=o[i].__b,o.splice(i,1);break}return r}function x(t,e,n){return this.constructor(t,n)}function w(t,e,n,r,o){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===U.syncComponentUpdates&&t.base?i(t):P(t,1,o)),t.__r&&t.__r(t))}function P(t,e,n,o){if(!t.__x){var i,a,u,c=t.props,s=t.state,p=t.context,f=t.__p||c,h=t.__s||s,d=t.__c||p,y=t.base,g=t.__b,m=y||g,O=t._component,C=!1;if(y&&(t.props=f,t.state=h,t.context=d,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,s,p)?C=!0:t.componentWillUpdate&&t.componentWillUpdate(c,s,p),t.props=c,t.state=s,t.context=p),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!C){i=t.render(c,s,p),t.getChildContext&&(p=r(r({},p),t.getChildContext()));var x,S,E=i&&i.nodeName;if("function"==typeof E){var T=l(i);a=O,a&&a.constructor===E&&T.key==a.__k?w(a,T,1,p,!1):(x=a,t._component=a=j(E,T,p),a.__b=a.__b||g,a.__u=t,w(a,T,0,p,!1),P(a,1,n,!0)),S=a.base}else u=m,x=O,x&&(u=t._component=null),(m||1===e)&&(u&&(u._component=null),S=b(u,i,p,n||!y,m&&m.parentNode,!0));if(m&&S!==m&&a!==O){var A=m.parentNode;A&&S!==A&&(A.replaceChild(S,m),x||(m._component=null,v(m,!1)))}if(x&&k(x),t.base=S,S&&!o){for(var W=t,N=t;N=N.__u;)(W=N).base=S;S._component=W,S._componentConstructor=W.constructor}}if(!y||n?R.unshift(t):C||(t.componentDidUpdate&&t.componentDidUpdate(f,h,d),U.afterUpdate&&U.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);V||o||_()}}function S(t,e,n,r){for(var o=t&&t._component,i=o,a=t,u=o&&t._componentConstructor===e.nodeName,c=u,s=l(e);o&&!c&&(o=o.__u);)c=o.constructor===e.nodeName;return o&&c&&(!r||o._component)?(w(o,s,3,n,r),t=o.base):(i&&!u&&(k(i),t=a=null),o=j(e.nodeName,s,n),t&&!o.__b&&(o.__b=t,a=null),w(o,s,1,n,r),t=o.base,a&&t!==a&&(a._component=null,v(a,!1))),t}function k(t){U.beforeUnmount&&U.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?k(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,p(e),C(t),m(e)),t.__r&&t.__r(null)}function E(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function T(t,e,n){return b(n,t,{},!1,e,!1)}var U={},A=[],W=[],N="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,I=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,M=[],R=[],V=0,L=!1,z=!1,B={};r(E.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),P(this,2)},render:function(){}});var F={h:n,createElement:n,cloneElement:o,Component:E,render:T,rerender:a,options:U};t.exports=F}()},MnJD:function(t){t.exports={blurRangeTitle:"blurRangeTitle__2M7KV",inputStyle:"inputStyle__3mItr"}},ctQH:function(t){t.exports={controlPanel:"controlPanel__3w6vQ",controlPanelPopup:"controlPanelPopup__WPeh7","controlPanelPopup--hidden":"controlPanelPopup--hidden__3vPt1",controlPanelButton:"controlPanelButton__V__fY"}},oPeZ:function(t){t.exports={gradientPickerSelect:"gradientPickerSelect__2boIS",gradientPickerContainer:"gradientPickerContainer__2gcpX",gradientPickerTitle:"gradientPickerTitle__3c7eV"}},pwNi:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};a()}},u3et:function(t){t.exports={header:"header__3QGkI"}},uK8n:function(t){t.exports={inputContainer:"inputContainer__32aD2"}}});
//# sourceMappingURL=bundle.9cd4e.js.map