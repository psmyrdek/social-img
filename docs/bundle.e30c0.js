!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var u,a,c=0,l=[];c<e.length;c++)a=e[c],o[a]&&l.push(o[a][0]),o[a]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);for(n&&n(e,r,i);l.length;)l.shift()()};var r={},o={1:0};e.e=function(t){function n(){a.onerror=a.onload=null,clearTimeout(c);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var u=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,e.nc&&a.setAttribute("nonce",e.nc),a.src=e.p+""+({0:"route-home"}[t]||t)+".chunk."+{0:"6348f"}[t]+".js";var c=setTimeout(n,12e4);return a.onerror=a.onload=n,u.appendChild(a),i},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s="pwNi")}({"/QC5":function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){void 0===n&&(n=C);var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),a={};if(i&&i[1])for(var c=i[1].split("&"),l=0;l<c.length;l++){var p=c[l].split("=");a[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=u(t.replace(o,"")),e=u(e||"");for(var s=Math.max(t.length,e.length),f=0;f<s;f++)if(e[f]&&":"===e[f].charAt(0)){var h=e[f].replace(/(^\:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||C)[0]||"",_=~d.indexOf("+"),v=~d.indexOf("*"),m=t[f]||"";if(!m&&!v&&(d.indexOf("?")<0||_)){r=!1;break}if(a[h]=decodeURIComponent(m),_||v){a[h]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&a}function i(t,e){var n=t.attributes||C,r=e.attributes||C;return n.default?1:r.default?-1:a(n.path)-a(r.path)||n.path.length-r.path.length}function u(t){return c(t).split("/")}function a(t){return(c(t).match(/\/+/g)||"").length}function c(t){return t.replace(/(^\/+|\/+$)/g,"")}function l(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function p(t,e){void 0===e&&(e="push"),w&&w[e]?w[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function s(){var t;return t=w&&w.location?w.location:w&&w.getCurrentLocation?w.getCurrentLocation():"undefined"!=typeof location?location:j,""+(t.pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),h(t)&&p(t,e?"replace":"push"),d(t)}function h(t){for(var e=x.length;e--;)if(x[e].canRoute(t))return!0;return!1}function d(t){for(var e=!1,n=0;n<x.length;n++)!0===x[n].routeTo(t)&&(e=!0);for(var r=O.length;r--;)O[r](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function v(t){if(0==t.button)return _(t.currentTarget||t.target||this),m(t)}function m(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&l(e)){if(e.hasAttribute("native"))return;if(_(e))return m(t)}}while(e=e.parentNode)}}function b(){k||("function"==typeof addEventListener&&(w||addEventListener("popstate",function(){return d(s())}),addEventListener("click",y)),k=!0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"subscribers",function(){return O}),n.d(e,"getCurrentUrl",function(){return s}),n.d(e,"route",function(){return f}),n.d(e,"Router",function(){return N}),n.d(e,"Route",function(){return M}),n.d(e,"Link",function(){return U});var g=n("KM04"),C=(n.n(g),{}),w=null,x=[],O=[],j={},k=!1,N=function(t){function e(e){t.call(this,e),e.history&&(w=e.history),this.state={url:e.url||s()},b()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){x.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;w&&(this.unlisten=w.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),x.splice(x.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.slice().sort(i).map(function(t){var i=t.attributes||{},u=i.path,a=o(e,u,i);if(a){if(!1!==n){var c={url:e,matches:a};return r(c,a),Object(g.cloneElement)(t,c)}return t}return!1}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:u})),u},e}(g.Component),U=function(t){return Object(g.h)("a",r({onClick:v},t))},M=function(t){return Object(g.h)(t.component,t)};N.subscribers=O,N.getCurrentUrl=s,N.route=f,N.Router=N,N.Route=M,N.Link=U,e.default=N},"7N8r":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;r.Component.call(this);var n=function(t){e.setState({child:t&&t.default||t})},o=t(n);o&&o.then&&o.then(n)}return e.prototype=new r.Component,e.prototype.constructor=e,e.prototype.render=function(t,e){return(0,r.h)(e.child,t)},e};var r=n("KM04")},JkW7:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t){n.e(0).then(function(){t(n("cKdl"))}.bind(null,n)).catch(n.oe)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=(n("rq4c"),n("KM04")),p=n("/QC5"),s=n("sw5u"),f=n("u3et"),h=n.n(f),d=Object(l.h)("h1",null,"Social Images Generator"),_=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(){return Object(l.h)("header",{class:h.a.header},d,Object(l.h)("nav",null,Object(l.h)(s.Link,{activeClassName:h.a.active,href:"/"},"Home")))},e}(l.Component),v=n("7N8r"),m=n.n(v),y=m()(i),b=Object(l.h)(_,null),g=Object(l.h)(y,{path:"/"}),C=function(t){function e(){var n,r,o;u(this,e);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return n=r=a(this,t.call.apply(t,[this].concat(c))),r.handleRoute=function(t){r.currentUrl=t.url},o=n,a(r,o)}return c(e,t),e.prototype.render=function(){return Object(l.h)("div",{id:"app"},b,Object(l.h)(p.Router,{onChange:this.handleRoute},g))},e}(l.Component);e.default=C},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var r,o,i,u,a=E;for(u=arguments.length;u-- >2;)R.push(arguments[u]);for(n&&null!=n.children&&(R.length||R.push(n.children),delete n.children);R.length;)if((o=R.pop())&&void 0!==o.pop)for(u=o.length;u--;)R.push(o[u]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?a[a.length-1]+=o:a===E?a=[o]:a.push(o),r=i;var c=new e;return c.nodeName=t,c.children=a,c.attributes=null==n?void 0:n,c.key=null==n?void 0:n.key,void 0!==L.vnode&&L.vnode(c),c}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,r(r({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==W.push(t)&&(L.debounceRendering||S)(u)}function u(){var t,e=W;for(W=[];t=e.pop();)t.__d&&k(t)}function a(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=r({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function p(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function s(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===T.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var u=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,d,u):t.removeEventListener(e,d,u),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)h(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var a=o&&e!==(e=e.replace(/^xlink\:?/,""));null==r||!1===r?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function h(t,e,n){try{t[e]=n}catch(t){}}function d(t){return this.__l[t.type](L.event&&L.event(t)||t)}function _(){for(var t;t=A.pop();)L.afterMount&&L.afterMount(t),t.componentDidMount&&t.componentDidMount()}function v(t,e,n,r,o,i){I++||(K=null!=o&&void 0!==o.ownerSVGElement,D=null!=t&&!("__preactattr_"in t));var u=m(t,e,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--I||(D=!1,i||_()),u}function m(t,e,n,r,o){var i=t,u=K;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0))),i.__preactattr_=!0,i;var a=e.nodeName;if("function"==typeof a)return N(t,e,n,r);if(K="svg"===a||"foreignObject"!==a&&K,a+="",(!t||!c(t,a))&&(i=p(a,K),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0)}var l=i.firstChild,s=i.__preactattr_,f=e.children;if(null==s){s=i.__preactattr_={};for(var h=i.attributes,d=h.length;d--;)s[h[d].name]=h[d].value}return!D&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&y(i,f,n,r,D||null!=s.dangerouslySetInnerHTML),C(i,e.attributes,s),K=u,i}function y(t,e,n,r,o){var i,u,c,l,p,f=t.childNodes,h=[],d={},_=0,v=0,y=f.length,g=0,C=e?e.length:0;if(0!==y)for(var w=0;w<y;w++){var x=f[w],O=x.__preactattr_,j=C&&O?x._component?x._component.__k:O.key:null;null!=j?(_++,d[j]=x):(O||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(h[g++]=x)}if(0!==C)for(var w=0;w<C;w++){l=e[w],p=null;var j=l.key;if(null!=j)_&&void 0!==d[j]&&(p=d[j],d[j]=void 0,_--);else if(!p&&v<g)for(i=v;i<g;i++)if(void 0!==h[i]&&a(u=h[i],l,o)){p=u,h[i]=void 0,i===g-1&&g--,i===v&&v++;break}p=m(p,l,n,r),c=f[w],p&&p!==t&&p!==c&&(null==c?t.appendChild(p):p===c.nextSibling?s(c):t.insertBefore(p,c))}if(_)for(var w in d)void 0!==d[w]&&b(d[w],!1);for(;v<=g;)void 0!==(p=h[g--])&&b(p,!1)}function b(t,e){var n=t._component;n?U(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||s(t),g(t))}function g(t){for(t=t.lastChild;t;){var e=t.previousSibling;b(t,!0),t=e}}function C(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||f(t,r,n[r],n[r]=void 0,K);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||f(t,r,n[r],n[r]=e[r],K)}function w(t){var e=t.constructor.name;($[e]||($[e]=[])).push(t)}function x(t,e,n){var r,o=$[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),M.call(r,e,n)):(r=new M(e,n),r.constructor=t,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.__b=o[i].__b,o.splice(i,1);break}return r}function O(t,e,n){return this.constructor(t,n)}function j(t,e,n,r,o){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===L.syncComponentUpdates&&t.base?i(t):k(t,1,o)),t.__r&&t.__r(t))}function k(t,e,n,o){if(!t.__x){var i,u,a,c=t.props,p=t.state,s=t.context,f=t.__p||c,h=t.__s||p,d=t.__c||s,m=t.base,y=t.__b,g=m||y,C=t._component,w=!1;if(m&&(t.props=f,t.state=h,t.context=d,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,p,s)?w=!0:t.componentWillUpdate&&t.componentWillUpdate(c,p,s),t.props=c,t.state=p,t.context=s),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!w){i=t.render(c,p,s),t.getChildContext&&(s=r(r({},s),t.getChildContext()));var O,N,M=i&&i.nodeName;if("function"==typeof M){var P=l(i);u=C,u&&u.constructor===M&&P.key==u.__k?j(u,P,1,s,!1):(O=u,t._component=u=x(M,P,s),u.__b=u.__b||y,u.__u=t,j(u,P,0,s,!1),k(u,1,n,!0)),N=u.base}else a=g,O=C,O&&(a=t._component=null),(g||1===e)&&(a&&(a._component=null),N=v(a,i,s,n||!m,g&&g.parentNode,!0));if(g&&N!==g&&u!==C){var R=g.parentNode;R&&N!==R&&(R.replaceChild(N,g),O||(g._component=null,b(g,!1)))}if(O&&U(O),t.base=N,N&&!o){for(var E=t,S=t;S=S.__u;)(E=S).base=N;N._component=E,N._componentConstructor=E.constructor}}if(!m||n?A.unshift(t):w||(t.componentDidUpdate&&t.componentDidUpdate(f,h,d),L.afterUpdate&&L.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);I||o||_()}}function N(t,e,n,r){for(var o=t&&t._component,i=o,u=t,a=o&&t._componentConstructor===e.nodeName,c=a,p=l(e);o&&!c&&(o=o.__u);)c=o.constructor===e.nodeName;return o&&c&&(!r||o._component)?(j(o,p,3,n,r),t=o.base):(i&&!a&&(U(i),t=u=null),o=x(e.nodeName,p,n),t&&!o.__b&&(o.__b=t,u=null),j(o,p,1,n,r),t=o.base,u&&t!==u&&(u._component=null,b(u,!1))),t}function U(t){L.beforeUnmount&&L.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?U(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,s(e),w(t),g(e)),t.__r&&t.__r(null)}function M(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function P(t,e,n){return v(n,t,{},!1,e,!1)}var L={},R=[],E=[],S="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,T=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,W=[],A=[],I=0,K=!1,D=!1,$={};r(M.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),k(this,2)},render:function(){}});var V={h:n,createElement:n,cloneElement:o,Component:M,render:P,rerender:u,options:L};t.exports=V}()},pwNi:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,u=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};u()}},rq4c:function(){},sw5u:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n("KM04"),c=n("/QC5"),l=e.Match=function(t){function e(){for(var e,n,r,i=arguments.length,u=Array(i),a=0;a<i;a++)u[a]=arguments[a];return e=n=o(this,t.call.apply(t,[this].concat(u))),n.update=function(t){n.nextUrl=t,n.setState({})},r=e,o(n,r)}return i(e,t),e.prototype.componentDidMount=function(){c.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,c.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children[0]&&t.children[0]({url:e,path:n,matches:n===t.path})},e}(a.Component),p=function(t){var e=t.activeClassName,n=t.path,o=r(t,["activeClassName","path"]);return(0,a.h)(l,{path:n||o.href},function(t){var n=t.matches;return(0,a.h)(c.Link,u({},o,{class:[o.class||o.className,n&&e].filter(Boolean).join(" ")}))})};e.Link=p,e.default=l,l.Link=p},u3et:function(t){t.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.e30c0.js.map