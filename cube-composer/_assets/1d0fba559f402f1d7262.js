/*! Sortable 1.14.0 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function A(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n;e=o,t=i[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o=function(t,e){if(null==t)return{};for(var n,o={},i=Object.keys(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function r(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),w=t(/Edge/i),s=t(/firefox/i),u=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),c=t(/chrome/i)&&t(/android/i),d={capture:!1,passive:!1};function h(t,e,n){t.addEventListener(e,n,!y&&d)}function f(t,e,n){t.removeEventListener(e,n,!y&&d)}function p(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function N(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&p(t,e)||o&&t===n)return t}while(t!==n&&(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode))}var i;return null}var g,m=/\s+/g;function I(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(m," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(m," ")))}function P(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=P(t,"transform")}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function b(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function O(){var t=document.scrollingElement;return t||document.documentElement}function k(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==P(i,"transform")||n&&"static"!==P(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(P(i,"border-top-width")),l-=h.left+parseInt(P(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=v(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function R(t,e,n){for(var o=M(t,!0),i=k(t)[e];o;){var r=k(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===O())break;o=M(o,!1)}return!1}function X(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Bt.ghost&&(o||a[r]!==Bt.dragged)&&N(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function Y(t,e){for(var n=t.lastElementChild;n&&(n===Bt.ghost||"none"===P(n,"display")||e&&!p(n,e));)n=n.previousElementSibling;return n||null}function B(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Bt.clone||e&&!p(t,e)||n++;return n}function E(t){var e=0,n=0,o=O();if(t)do{var i=v(t),r=i.a,i=i.d}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return[e,n]}function M(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=P(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=!0}}}while(n=n.parentNode);return O()}function D(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function S(e,n){return function(){var t;g||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),g=setTimeout(function(){g=void 0},n))}}function F(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function _(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function C(t,e){P(t,"position","absolute"),P(t,"top",e.top),P(t,"left",e.left),P(t,"width",e.width),P(t,"height",e.height)}function T(t){P(t,"position",""),P(t,"top",""),P(t,"left",""),P(t,"width",""),P(t,"height","")}var j="Sortable"+(new Date).getTime();function x(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==P(t,"display")&&t!==Bt.ghost&&(o.push({target:t,rect:k(t)}),e=A({},o[o.length-1].rect),!t.thisAnimationDuration||(n=v(t,!0))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e)})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=k(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&D(r,i)&&!D(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),D(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){var i,r;o&&(P(t,"transition",""),P(t,"transform",""),i=(r=v(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,P(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,P(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),P(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){P(t,"transition",""),P(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o))}}}var H=[],L={initializeByDefault:!0},K={mount:function(e){for(var t in L)!L.hasOwnProperty(t)||t in e||(e[t]=L[t]);H.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),H.push(e)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";H.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](A({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](A({sortable:n},o)))})},initializePlugins:function(n,o,i,t){for(var e in H.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults))}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r))}},getEventProperties:function(e,n){var o={};return H.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return H.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function W(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var v,b=A(A({},p),K.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g)}}function z(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=i(o,G);K.pluginEvent.bind(Bt)(t,e,A({dragEl:q,parentEl:V,ghostEl:Z,rootEl:$,nextEl:Q,lastDownEl:J,cloneEl:tt,cloneHidden:et,dragStarted:pt,putSortable:lt,activeSortable:Bt.active,originalEvent:n,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt,hideGhostForTarget:kt,unhideGhostForTarget:Rt,cloneNowHidden:function(){et=!0},cloneNowShown:function(){et=!1},dispatchSortableEvent:function(t){U({sortable:e,name:t,originalEvent:n})}},o))}var G=["evt"];function U(t){W(A({putSortable:lt,cloneEl:tt,targetEl:q,rootEl:$,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt},t))}var q,V,Z,$,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,mt,vt,bt,yt=!1,wt=!1,Et=[],Dt=!1,St=!1,_t=[],Ct=!1,Tt=[],xt="undefined"!=typeof document,Ot=n,Mt=w||y?"cssFloat":"float",At=xt&&!c&&!n&&"draggable"in document.createElement("div"),Nt=function(){if(xt){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),It=function(t,e){var n=P(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=X(t,0,e),r=X(t,1,e),a=i&&P(i),l=r&&P(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+k(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+k(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Mt]||r&&"none"===n[Mt]&&o<s+t)?"vertical":"horizontal"},Pt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return!0===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,!0),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e},kt=function(){!Nt&&Z&&P(Z,"display","none")},Rt=function(){!Nt&&Z&&P(Z,"display","")};xt&&document.addEventListener("click",function(t){if(wt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),wt=!1},!0);function Xt(t){if(q){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,Et.some(function(t){var e=t[j].options.emptyInsertThreshold;if(e&&!Y(t)){var n=k(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[j]._onDragOver(o)}}var i,r,a}function Yt(t){q&&q.parentNode[j]._isOutsideThisEl(t.target)}function Bt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return It(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Bt.supportPointer&&"PointerEvent"in window&&!u,emptyInsertThreshold:5};for(n in K.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in Pt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&At,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?h(t,"pointerdown",this._onTapStart):(h(t,"mousedown",this._onTapStart),h(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(h(t,"dragover",this),h(t,"dragenter",this)),Et.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,x())}function Ft(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||k(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function jt(t){t.draggable=!1}function Ht(){Ct=!1}function Lt(t){return setTimeout(t,0)}function Kt(t){return clearTimeout(t)}Bt.prototype={constructor:Bt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(gt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){Tt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Tt.push(o)}}(o),!q&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=N(l,t.draggable,o,!1))&&l.animated||J===l)){if(nt=B(l),it=B(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return U({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),z("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=N(s,t.trim(),o,!1))return U({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),z("filter",n,{evt:e}),!0}))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!N(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!q&&n.parentNode===r&&(o=k(n),$=r,V=(q=n).parentNode,Q=q.nextSibling,J=n,at=a.group,st={target:Bt.dragged=q,clientX:(e||t).clientX,clientY:(e||t).clientY},ht=st.clientX-o.left,ft=st.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,q.style["will-change"]="all",o=function(){z("delayEnded",i,{evt:t}),Bt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!s&&i.nativeDraggable&&(q.draggable=!0),i._triggerDragStart(t,e),U({sortable:i,name:"choose",originalEvent:t}),I(q,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){b(q,t.trim(),jt)}),h(l,"dragover",Xt),h(l,"mousemove",Xt),h(l,"touchmove",Xt),h(l,"mouseup",i._onDrop),h(l,"touchend",i._onDrop),h(l,"touchcancel",i._onDrop),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,q.draggable=!0),z("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():Bt.eventCanceled?this._onDrop():(h(l,"mouseup",i._disableDelayedDrag),h(l,"touchend",i._disableDelayedDrag),h(l,"touchcancel",i._disableDelayedDrag),h(l,"mousemove",i._delayedDragTouchMoveHandler),h(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&h(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)))},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){q&&jt(q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._disableDelayedDrag),f(t,"touchend",this._disableDelayedDrag),f(t,"touchcancel",this._disableDelayedDrag),f(t,"mousemove",this._delayedDragTouchMoveHandler),f(t,"touchmove",this._delayedDragTouchMoveHandler),f(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?h(document,"pointermove",this._onTouchMove):h(document,e?"touchmove":"mousemove",this._onTouchMove):(h(q,"dragend",this),h($,"dragstart",this._onDragStart));try{document.selection?Lt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){var n;yt=!1,$&&q?(z("dragStarted",this,{evt:e}),this.nativeDraggable&&h(document,"dragover",Yt),n=this.options,t||I(q,n.dragClass,!1),I(q,n.ghostClass,!0),Bt.active=this,t&&this._appendGhost(),U({sortable:this,name:"start",originalEvent:e})):this._nulling()},_emulateDragOver:function(){if(ct){this._lastX=ct.clientX,this._lastY=ct.clientY,kt();for(var t=document.elementFromPoint(ct.clientX,ct.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ct.clientX,ct.clientY))!==e;)e=t;if(q.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j])if(e[j]._onDragOver({clientX:ct.clientX,clientY:ct.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=(t=e).parentNode);Rt()}},_onTouchMove:function(t){if(st){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&v(Z,!0),a=Z&&r&&r.a,l=Z&&r&&r.d,e=Ot&&bt&&E(bt),a=(i.clientX-st.clientX+o.x)/(a||1)+(e?e[0]-_t[0]:0)/(a||1),l=(i.clientY-st.clientY+o.y)/(l||1)+(e?e[1]-_t[1]:0)/(l||1);if(!Bt.active&&!yt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}Z&&(r?(r.e+=a-(ut||0),r.f+=l-(dt||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),P(Z,"webkitTransform",r),P(Z,"mozTransform",r),P(Z,"msTransform",r),P(Z,"transform",r),ut=a,dt=l,ct=i),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:$,e=k(q,!0,Ot,!0,t),n=this.options;if(Ot){for(bt=t;"static"===P(bt,"position")&&"none"===P(bt,"transform")&&bt!==document;)bt=bt.parentNode;bt!==document.body&&bt!==document.documentElement?(bt===document&&(bt=O()),e.top+=bt.scrollTop,e.left+=bt.scrollLeft):bt=O(),_t=E(bt)}I(Z=q.cloneNode(!0),n.ghostClass,!1),I(Z,n.fallbackClass,!0),I(Z,n.dragClass,!0),P(Z,"transition",""),P(Z,"transform",""),P(Z,"box-sizing","border-box"),P(Z,"margin",0),P(Z,"top",e.top),P(Z,"left",e.left),P(Z,"width",e.width),P(Z,"height",e.height),P(Z,"opacity","0.8"),P(Z,"position",Ot?"absolute":"fixed"),P(Z,"zIndex","100000"),P(Z,"pointerEvents","none"),Bt.ghost=Z,t.appendChild(Z),P(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+ft/parseInt(Z.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;z("dragStart",this,{evt:t}),Bt.eventCanceled?this._onDrop():(z("setupClone",this),Bt.eventCanceled||((tt=_(q)).draggable=!1,tt.style["will-change"]="",this._hideClone(),I(tt,this.options.chosenClass,!1),Bt.clone=tt),n.cloneId=Lt(function(){z("clone",n),Bt.eventCanceled||(n.options.removeCloneOnHide||$.insertBefore(tt,q),n._hideClone(),U({sortable:n,name:"clone"}))}),e||I(q,i.dragClass,!0),e?(wt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(f(document,"mouseup",n._onDrop),f(document,"touchend",n._onDrop),f(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,q)),h(document,"drop",n),P(q,"transform","translateZ(0)")),yt=!0,n._dragStartId=Lt(n._dragStarted.bind(n,e,t)),h(document,"selectstart",n),pt=!0,u&&P(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,t,a=this.el,l=n.target,e=this.options,s=e.group,c=Bt.active,u=at===s,d=e.sort,h=lt||c,f=this,p=!1;if(!Ct){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=N(l,e.draggable,a,!0),T("dragOver"),Bt.eventCanceled)return p;if(q.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||f._ignoreWhileAnimating===l)return O(!1);if(wt=!1,c&&!e.disabled&&(u?d||(i=V!==$):lt===this||(this.lastPutMode=at.checkPull(this,c,q,n))&&s.checkPut(this,c,q,n))){if(r="vertical"===this._getDirection(n,l),o=k(q),T("dragOverValid"),Bt.eventCanceled)return p;if(i)return V=$,x(),this._hideClone(),T("revert"),Bt.eventCanceled||(Q?$.insertBefore(q,Q):$.appendChild(q)),O(!0);var g=Y(a,e.draggable);if(!g||function(t,e,n){n=k(Y(n.el,n.options.draggable));return e?t.clientX>n.right+10||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+10}(n,r,this)&&!g.animated){if(g===q)return O(!1);if((l=g&&a===n.target?g:l)&&(w=k(l)),!1!==Ft($,a,q,o,l,w,n,!!l))return x(),a.appendChild(q),V=a,M(),O(!0)}else if(g&&function(t,e,n){n=k(X(n.el,0,n.options,!0));return e?t.clientX<n.left-10||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-10||t.clientY<n.bottom&&t.clientX<n.left}(n,r,this)){var m=X(a,0,e,!0);if(m===q)return O(!1);if(w=k(l=m),!1!==Ft($,a,q,o,l,w,n,!1))return x(),a.insertBefore(q,m),V=a,M(),O(!0)}else if(l.parentNode===a){var v,b,y,w=k(l),E=q.parentNode!==a,D=(D=q.animated&&q.toRect||o,C=l.animated&&l.toRect||w,S=(t=r)?D.left:D.top,s=t?D.right:D.bottom,g=t?D.width:D.height,m=t?C.left:C.top,D=t?C.right:C.bottom,C=t?C.width:C.height,!(S===m||s===D||S+g/2===m+C/2)),S=r?"top":"left",g=R(l,"top","top")||R(q,"top","top"),m=g?g.scrollTop:void 0;if(gt!==l&&(b=w[S],Dt=!1,St=!D&&e.invertSwap||E),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=!1;if(!a)if(l&&vt<c*i){if(Dt=!Dt&&(1===mt?t+c*r/2<s:s<o-c*r/2)?!0:Dt)n=!0;else if(1===mt?s<t+vt:o-vt<s)return-mt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return B(q)<B(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,w,r,D?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,St,gt===l)))for(var _=B(q);(y=V.children[_-=v])&&("none"===P(y,"display")||y===Z););if(0===v||y===l)return O(!1);mt=v;var C=(gt=l).nextElementSibling,E=!1,D=Ft($,a,q,o,l,w,n,E=1===v);if(!1!==D)return 1!==D&&-1!==D||(E=1===D),Ct=!0,setTimeout(Ht,30),x(),E&&!C?a.appendChild(q):l.parentNode.insertBefore(q,E?C:l),g&&F(g,0,m-g.scrollTop),V=q.parentNode,void 0===b||St||(vt=Math.abs(b-k(l)[S])),M(),O(!0)}if(a.contains(q))return O(!1)}return!1}function T(t,e){z(t,f,A({evt:n,isOwner:u,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:w,canSort:d,fromSortable:h,target:l,completed:O,onMove:function(t,e){return Ft($,a,q,o,t,k(t),n,e)},changed:M},e))}function x(){T("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function O(t){return T("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(I(q,(lt||c).options.ghostClass,!1),I(q,e.ghostClass,!0)),lt!==f&&f!==Bt.active?lt=f:f===Bt.active&&lt&&(lt=null),h===f&&(f._ignoreWhileAnimating=l),f.animateAll(function(){T("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(l===q&&!q.animated||l===a&&!l.animated)&&(gt=null),e.dragoverBubble||n.rootEl||l===document||(q.parentNode[j]._isOutsideThisEl(n.target),t||Xt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function M(){ot=B(q),rt=B(q,e.draggable),U({sortable:f,name:"change",toEl:a,newIndex:ot,newDraggableIndex:rt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){f(document,"mousemove",this._onTouchMove),f(document,"touchmove",this._onTouchMove),f(document,"pointermove",this._onTouchMove),f(document,"dragover",Xt),f(document,"mousemove",Xt),f(document,"touchmove",Xt)},_offUpEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._onDrop),f(t,"touchend",this._onDrop),f(t,"pointerup",this._onDrop),f(t,"touchcancel",this._onDrop),f(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;ot=B(q),rt=B(q,n.draggable),z("drop",this,{evt:t}),V=q&&q.parentNode,ot=B(q),rt=B(q,n.draggable),Bt.eventCanceled||(Dt=St=yt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Kt(this.cloneId),Kt(this._dragStartId),this.nativeDraggable&&(f(document,"drop",this),f(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&P(document.body,"user-select",""),P(q,"transform",""),t&&(pt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),($===V||lt&&"clone"!==lt.lastPutMode)&&tt&&tt.parentNode&&tt.parentNode.removeChild(tt),q&&(this.nativeDraggable&&f(q,"dragend",this),jt(q),q.style["will-change"]="",pt&&!yt&&I(q,(lt||this).options.ghostClass,!1),I(q,this.options.chosenClass,!1),U({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),$!==V?(0<=ot&&(U({rootEl:V,name:"add",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"remove",toEl:V,originalEvent:t}),U({rootEl:V,name:"sort",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),lt&&lt.save()):ot!==nt&&0<=ot&&(U({sortable:this,name:"update",toEl:V,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),Bt.active&&(null!=ot&&-1!==ot||(ot=nt,rt=it),U({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){z("nulling",this),$=q=V=Z=Q=tt=J=et=st=ct=pt=ot=rt=nt=it=gt=mt=lt=at=Bt.dragged=Bt.ghost=Bt.clone=Bt.active=null,Tt.forEach(function(t){t.checked=!0}),Tt.length=ut=dt=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":q&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)N(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];N(e,this.options.draggable,o,!1)&&(n[t]=e)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return N(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=K.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Pt(n)},destroy:function(){z("destroy",this);var t=this.el;t[j]=null,f(t,"mousedown",this._onTapStart),f(t,"touchstart",this._onTapStart),f(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(f(t,"dragover",this),f(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Et.splice(Et.indexOf(this.el),1),this.el=t=null},_hideClone:function(){et||(z("hideClone",this),Bt.eventCanceled||(P(tt,"display","none"),this.options.removeCloneOnHide&&tt.parentNode&&tt.parentNode.removeChild(tt),et=!0))},_showClone:function(t){"clone"===t.lastPutMode?et&&(z("showClone",this),Bt.eventCanceled||(q.parentNode!=$||this.options.group.revertClone?Q?$.insertBefore(tt,Q):$.appendChild(tt):$.insertBefore(tt,q),this.options.group.revertClone&&this.animate(q,tt),P(tt,"display",""),et=!1)):this._hideClone()}},xt&&h(document,"touchmove",function(t){(Bt.active||yt)&&t.cancelable&&t.preventDefault()}),Bt.utils={on:h,off:f,css:P,find:b,is:function(t,e){return!!N(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:S,closest:N,toggleClass:I,clone:_,index:B,nextTick:Lt,cancelNextTick:Kt,detectDirection:It,getChild:X},Bt.get=function(t){return t[j]},Bt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Bt.utils=A(A({},Bt.utils),t.utils)),K.mount(t)})},Bt.create=function(t,e){return new Bt(t,e)};var Wt,zt,Gt,Ut,qt,Vt,Zt=[],$t=!(Bt.version="1.14.0");function Qt(){Zt.forEach(function(t){clearInterval(t.pid)}),Zt=[]}function Jt(){clearInterval(Vt)}var te,ee=S(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=!1;zt!==e&&(zt=e,Qt(),Wt=t.scroll,i=t.scrollFn,!0===Wt&&(Wt=M(e,!0)));var d=0,h=Wt;do{var f=h,p=k(f),g=p.top,m=p.bottom,v=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=P(f),T=f.scrollLeft,p=f.scrollTop,D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),p=D&&(Math.abs(m-a)<=l&&p+w<_)-(Math.abs(g-a)<=l&&!!p);if(!Zt[d])for(var x=0;x<=d;x++)Zt[x]||(Zt[x]={});Zt[d].vx==T&&Zt[d].vy==p&&Zt[d].el===f||(Zt[d].el=f,Zt[d].vx=T,Zt[d].vy=p,clearInterval(Zt[d].pid),0==T&&0==p||(u=!0,Zt[d].pid=setInterval(function(){o&&0===this.layer&&Bt.active._onTouchMove(qt);var t=Zt[this.layer].vy?Zt[this.layer].vy*s:0,e=Zt[this.layer].vx?Zt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Bt.dragged.parentNode[j],e,t,n,qt,Zt[this.layer].el)||F(Zt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=M(h,!1)));$t=u}},30),n=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})))};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=X(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:n},a(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll()},drop:n},a(oe,{pluginName:"removeOnSpill"});var ie,re,ae,le,se,ce=[],ue=[],de=!1,he=!1,fe=!1;function pe(n,o){ue.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)})}function ge(){ce.forEach(function(t){t!==ae&&t.parentNode&&t.parentNode.removeChild(t)})}return Bt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?h(document,"dragover",this._handleAutoScroll):this.options.supportPointer?h(document,"pointermove",this._handleFallbackAutoScroll):t.touches?h(document,"touchmove",this._handleFallbackAutoScroll):h(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?f(document,"dragover",this._handleAutoScroll):(f(document,"pointermove",this._handleFallbackAutoScroll),f(document,"touchmove",this._handleFallbackAutoScroll),f(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),Qt(),clearTimeout(g),g=void 0},nulling:function(){qt=zt=Wt=$t=Vt=Gt=Ut=null,Zt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);qt=e,n||this.options.forceAutoScrollFallback||w||y||u?(ee(e,this.options,t,n),o=M(t,!0),!$t||Vt&&r===Gt&&a===Ut||(Vt&&Jt(),Vt=setInterval(function(){var t=M(document.elementFromPoint(r,a),!0);t!==o&&(o=t,Qt()),ee(e,i.options,t,n)},10),Gt=r,Ut=a)):this.options.bubbleScroll&&M(t,!0)!==O()?ee(e,this.options,M(t,!1),!1):Qt()}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Bt.mount(oe,ne),Bt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){t=t.dragEl;te=t},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=te,te=!1!==o(n)?(I(n,i.swapClass,!0),n):null,t&&t!==te&&I(t,i.swapClass,!1)),r(),e(!0),a())},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;te&&I(te,l.swapClass,!1),te&&(l.swap||i&&i.options.swap)&&r!==te&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=te,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=B(e),r=B(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){te=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:te}}})}),Bt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?h(document,"pointerup",this._deselectMultiDrag):(h(document,"mouseup",this._deselectMultiDrag),h(document,"touchend",this._deselectMultiDrag)),h(document,"keydown",this._checkKeyDown),h(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";ce.length&&re===o?ce.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){t=t.dragEl;ae=t},delayEnded:function(){this.isMultiDrag=~ce.indexOf(ae)},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<ce.length;n++)ue.push(_(ce[n])),ue[n].sortableIndex=ce[n].sortableIndex,ue[n].draggable=!1,ue[n].style["will-change"]="",I(ue[n],this.options.selectedClass,!1),ce[n]===ae&&I(ue[n],this.options.chosenClass,!1);e._hideClone(),t()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||ce.length&&re===e&&(pe(!0,n),o("clone"),t()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(pe(!1,n),ue.forEach(function(t){P(t,"display","")}),e(),se=!1,t())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(ue.forEach(function(t){P(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),se=!0,t())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&re&&re.multiDrag._deselectMultiDrag(),ce.forEach(function(t){t.sortableIndex=B(t)}),ce=ce.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),fe=!0},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(ce.forEach(function(t){t!==ae&&P(t,"position","absolute")}),e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&C(t,e)}),de=he=!0)),t.animateAll(function(){de=he=!1,n.options.animation&&ce.forEach(function(t){T(t)}),n.options.sort&&ge()}))},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;he&&~ce.indexOf(e)&&(n(!1),t())},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<ce.length&&(ce.forEach(function(t){r.addAnimationState({target:t,rect:he?k(t):a}),T(t),t.fromRect=a,e.removeAnimationState(t)}),he=!1,n=!this.options.removeCloneOnHide,o=i,ce.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)}))},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),de=!1,t.animation&&1<ce.length&&(he||!o&&!r.options.sort&&!l)&&(e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&(C(t,e),a.appendChild(t))}),he=!0),o||(he||ge(),1<ce.length?(o=se,r._showClone(n),r.options.animation&&!se&&o&&ue.forEach(function(t){r.addAnimationState({target:t,rect:le}),t.fromRect=le,t.thisAnimationDuration=null})):r._showClone(n)))},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;ce.forEach(function(t){t.thisAnimationDuration=null}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(le=a({},e),e=v(ae,!0),le.top-=e.f,le.left-=e.e)},dragOverAnimationComplete:function(){he&&(he=!1,ge())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c,u,d,h=this.options,f=o.children;if(!fe)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),I(ae,h.selectedClass,!~ce.indexOf(ae)),~ce.indexOf(ae))ce.splice(ce.indexOf(ae),1),ie=null,W({sortable:i,rootEl:n,name:"deselect",targetEl:ae,originalEvt:e});else{if(ce.push(ae),W({sortable:i,rootEl:n,name:"select",targetEl:ae,originalEvt:e}),e.shiftKey&&ie&&i.el.contains(ie)){var p=B(ie),t=B(ae);if(~p&&~t&&p!==t)for(var g,m=p<t?(g=p,t):(g=t,p+1);g<m;g++)~ce.indexOf(f[g])||(I(f[g],h.selectedClass,!0),ce.push(f[g]),W({sortable:i,rootEl:n,name:"select",targetEl:f[g],originalEvt:e}))}else ie=ae;re=s}fe&&this.isMultiDrag&&(he=!1,(o[j].options.sort||o!==n)&&1<ce.length&&(c=k(ae),u=B(ae,":not(."+this.options.selectedClass+")"),!de&&h.animation&&(ae.thisAnimationDuration=null),s.captureAnimationState(),de||(h.animation&&(ae.fromRect=c,ce.forEach(function(t){var e;t.thisAnimationDuration=null,t!==ae&&(e=he?k(t):c,t.fromRect=e,s.addAnimationState({target:t,rect:e}))})),ge(),ce.forEach(function(t){f[u]?o.insertBefore(t,f[u]):o.appendChild(t),u++}),a===B(ae)&&(d=!1,ce.forEach(function(t){t.sortableIndex!==B(t)&&(d=!0)}),d&&r("update"))),ce.forEach(function(t){T(t)}),s.animateAll()),re=s),(n===o||l&&"clone"!==l.lastPutMode)&&ue.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=fe=!1,ue.length=0},destroyGlobal:function(){this._deselectMultiDrag(),f(document,"pointerup",this._deselectMultiDrag),f(document,"mouseup",this._deselectMultiDrag),f(document,"touchend",this._deselectMultiDrag),f(document,"keydown",this._checkKeyDown),f(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==fe&&fe||re!==this.sortable||t&&N(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;ce.length;){var e=ce[0];I(e,this.options.selectedClass,!1),ce.shift(),W({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~ce.indexOf(t)&&(re&&re!==e&&(re.multiDrag._deselectMultiDrag(),re=e),I(t,e.options.selectedClass,!0),ce.push(t))},deselect:function(t){var e=t.parentNode[j],n=ce.indexOf(t);e&&e.options.multiDrag&&~n&&(I(t,e.options.selectedClass,!1),ce.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return ce.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=he&&t!==ae?-1:he?B(t,":not(."+n.options.selectedClass+")"):B(t),i.push({multiDragElement:t,index:e})}),{items:r(ce),clones:[].concat(ue),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Bt});// Generated by psc-bundle 0.11.6
var PS = {};
(function(exports) {exports.analyticsEvent = function(category) {
    return function(action) {
      return function(label) {
        return function() {
          ga('send', 'event', category, action, label);
          return {};
        };
      };
    };
  };
})(PS["Analytics"] = PS["Analytics"] || {});
(function(exports) {
    "use strict";

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };

  exports.runPure = function (f) {
    return f();
  };

  exports.foreachE = function (as) {
    return function (f) {
      return function () {
        for (var i = 0, l = as.length; i < l; i++) {
          f(as[i])();
        }
      };
    };
  };
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Semigroupoid = function (compose) {
      this.compose = compose;
  };
  var semigroupoidFn = new Semigroupoid(function (f) {
      return function (g) {
          return function (x) {
              return f(g(x));
          };
      };
  });
  var compose = function (dict) {
      return dict.compose;
  };
  exports["Semigroupoid"] = Semigroupoid;
  exports["compose"] = compose;
  exports["semigroupoidFn"] = semigroupoidFn;
})(PS["Control.Semigroupoid"] = PS["Control.Semigroupoid"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];        
  var Category = function (Semigroupoid0, id) {
      this.Semigroupoid0 = Semigroupoid0;
      this.id = id;
  };
  var id = function (dict) {
      return dict.id;
  };
  var categoryFn = new Category(function () {
      return Control_Semigroupoid.semigroupoidFn;
  }, function (x) {
      return x;
  });
  exports["Category"] = Category;
  exports["id"] = id;
  exports["categoryFn"] = categoryFn;
})(PS["Control.Category"] = PS["Control.Category"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var otherwise = true;
  exports["otherwise"] = otherwise;
})(PS["Data.Boolean"] = PS["Data.Boolean"] || {});
(function(exports) {
    "use strict";

  exports.refEq = function (r1) {
    return function (r2) {
      return r1 === r2;
    };
  };
})(PS["Data.Eq"] = PS["Data.Eq"] || {});
(function(exports) {
    "use strict";

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
    "use strict";

  exports.showIntImpl = function (n) {
    return n.toString();
  };

  exports.showNumberImpl = function (n) {
    var str = n.toString();
    return isNaN(str + ".0") ? str : str + ".0";
  };

  exports.showStringImpl = function (s) {
    var l = s.length;
    return "\"" + s.replace(
      /[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
      function (c, i) {
        switch (c) {
          case "\"":
          case "\\":
            return "\\" + c;
          case "\x07": return "\\a";
          case "\b": return "\\b";
          case "\f": return "\\f";
          case "\n": return "\\n";
          case "\r": return "\\r";
          case "\t": return "\\t";
          case "\v": return "\\v";
        }
        var k = i + 1;
        var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
        return "\\" + c.charCodeAt(0).toString(10) + empty;
      }
    ) + "\"";
  };

  exports.showArrayImpl = function (f) {
    return function (xs) {
      var ss = [];
      for (var i = 0, l = xs.length; i < l; i++) {
        ss[i] = f(xs[i]);
      }
      return "[" + ss.join(",") + "]";
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Show"];     
  var Show = function (show) {
      this.show = show;
  };
  var showString = new Show($foreign.showStringImpl);
  var showNumber = new Show($foreign.showNumberImpl);
  var showInt = new Show($foreign.showIntImpl);
  var show = function (dict) {
      return dict.show;
  };
  var showArray = function (dictShow) {
      return new Show($foreign.showArrayImpl(show(dictShow)));
  };
  exports["Show"] = Show;
  exports["show"] = show;
  exports["showInt"] = showInt;
  exports["showNumber"] = showNumber;
  exports["showString"] = showString;
  exports["showArray"] = showArray;
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Unit"];
  var Data_Show = PS["Data.Show"];
  exports["unit"] = $foreign.unit;
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Eq"];
  var Data_Unit = PS["Data.Unit"];
  var Data_Void = PS["Data.Void"];        
  var Eq = function (eq) {
      this.eq = eq;
  };
  var Eq1 = function (eq1) {
      this.eq1 = eq1;
  }; 
  var eqString = new Eq($foreign.refEq);
  var eqNumber = new Eq($foreign.refEq);
  var eqInt = new Eq($foreign.refEq); 
  var eqBoolean = new Eq($foreign.refEq);
  var eq1 = function (dict) {
      return dict.eq1;
  };
  var eq = function (dict) {
      return dict.eq;
  }; 
  var notEq = function (dictEq) {
      return function (x) {
          return function (y) {
              return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
          };
      };
  };
  exports["Eq"] = Eq;
  exports["Eq1"] = Eq1;
  exports["eq"] = eq;
  exports["eq1"] = eq1;
  exports["notEq"] = notEq;
  exports["eqBoolean"] = eqBoolean;
  exports["eqInt"] = eqInt;
  exports["eqNumber"] = eqNumber;
  exports["eqString"] = eqString;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});
(function(exports) {
    "use strict";

  exports.unsafeCompareImpl = function (lt) {
    return function (eq) {
      return function (gt) {
        return function (x) {
          return function (y) {
            return x < y ? lt : x === y ? eq : gt;
          };
        };
      };
    };
  };
})(PS["Data.Ord.Unsafe"] = PS["Data.Ord.Unsafe"] || {});
(function(exports) {
    "use strict";

  exports.concatString = function (s1) {
    return function (s2) {
      return s1 + s2;
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Semigroup"];
  var Data_Unit = PS["Data.Unit"];
  var Data_Void = PS["Data.Void"];        
  var Semigroup = function (append) {
      this.append = append;
  }; 
  var semigroupString = new Semigroup($foreign.concatString);
  var append = function (dict) {
      return dict.append;
  };
  exports["Semigroup"] = Semigroup;
  exports["append"] = append;
  exports["semigroupString"] = semigroupString;
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_Eq = PS["Data.Eq"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];        
  var LT = (function () {
      function LT() {

      };
      LT.value = new LT();
      return LT;
  })();
  var GT = (function () {
      function GT() {

      };
      GT.value = new GT();
      return GT;
  })();
  var EQ = (function () {
      function EQ() {

      };
      EQ.value = new EQ();
      return EQ;
  })();
  var eqOrdering = new Data_Eq.Eq(function (v) {
      return function (v1) {
          if (v instanceof LT && v1 instanceof LT) {
              return true;
          };
          if (v instanceof GT && v1 instanceof GT) {
              return true;
          };
          if (v instanceof EQ && v1 instanceof EQ) {
              return true;
          };
          return false;
      };
  });
  exports["LT"] = LT;
  exports["GT"] = GT;
  exports["EQ"] = EQ;
  exports["eqOrdering"] = eqOrdering;
})(PS["Data.Ordering"] = PS["Data.Ordering"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Ord.Unsafe"];
  var Data_Ordering = PS["Data.Ordering"];        
  var unsafeCompare = $foreign.unsafeCompareImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value);
  exports["unsafeCompare"] = unsafeCompare;
})(PS["Data.Ord.Unsafe"] = PS["Data.Ord.Unsafe"] || {});
(function(exports) {
    "use strict";

  exports.intAdd = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x + y | 0;
    };
  };

  exports.intMul = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x * y | 0;
    };
  };

  exports.numAdd = function (n1) {
    return function (n2) {
      return n1 + n2;
    };
  };

  exports.numMul = function (n1) {
    return function (n2) {
      return n1 * n2;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Semiring"];
  var Data_Unit = PS["Data.Unit"];        
  var Semiring = function (add, mul, one, zero) {
      this.add = add;
      this.mul = mul;
      this.one = one;
      this.zero = zero;
  };
  var zero = function (dict) {
      return dict.zero;
  };                                 
  var semiringNumber = new Semiring($foreign.numAdd, $foreign.numMul, 1.0, 0.0);
  var semiringInt = new Semiring($foreign.intAdd, $foreign.intMul, 1, 0);
  var one = function (dict) {
      return dict.one;
  };
  var mul = function (dict) {
      return dict.mul;
  };
  var add = function (dict) {
      return dict.add;
  };
  exports["Semiring"] = Semiring;
  exports["add"] = add;
  exports["mul"] = mul;
  exports["one"] = one;
  exports["zero"] = zero;
  exports["semiringInt"] = semiringInt;
  exports["semiringNumber"] = semiringNumber;
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Ord"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Ord_Unsafe = PS["Data.Ord.Unsafe"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Unit = PS["Data.Unit"];
  var Data_Void = PS["Data.Void"];        
  var Ord = function (Eq0, compare) {
      this.Eq0 = Eq0;
      this.compare = compare;
  }; 
  var ordString = new Ord(function () {
      return Data_Eq.eqString;
  }, Data_Ord_Unsafe.unsafeCompare);
  var ordNumber = new Ord(function () {
      return Data_Eq.eqNumber;
  }, Data_Ord_Unsafe.unsafeCompare);
  var ordInt = new Ord(function () {
      return Data_Eq.eqInt;
  }, Data_Ord_Unsafe.unsafeCompare);
  var compare = function (dict) {
      return dict.compare;
  };
  var comparing = function (dictOrd) {
      return function (f) {
          return function (x) {
              return function (y) {
                  return compare(dictOrd)(f(x))(f(y));
              };
          };
      };
  };
  var lessThanOrEq = function (dictOrd) {
      return function (a1) {
          return function (a2) {
              var v = compare(dictOrd)(a1)(a2);
              if (v instanceof Data_Ordering.GT) {
                  return false;
              };
              return true;
          };
      };
  };
  var max = function (dictOrd) {
      return function (x) {
          return function (y) {
              var v = compare(dictOrd)(x)(y);
              if (v instanceof Data_Ordering.LT) {
                  return y;
              };
              if (v instanceof Data_Ordering.EQ) {
                  return x;
              };
              if (v instanceof Data_Ordering.GT) {
                  return x;
              };
              throw new Error("Failed pattern match at Data.Ord line 122, column 3 - line 125, column 12: " + [ v.constructor.name ]);
          };
      };
  };
  var min = function (dictOrd) {
      return function (x) {
          return function (y) {
              var v = compare(dictOrd)(x)(y);
              if (v instanceof Data_Ordering.LT) {
                  return x;
              };
              if (v instanceof Data_Ordering.EQ) {
                  return x;
              };
              if (v instanceof Data_Ordering.GT) {
                  return y;
              };
              throw new Error("Failed pattern match at Data.Ord line 113, column 3 - line 116, column 12: " + [ v.constructor.name ]);
          };
      };
  }; 
  var clamp = function (dictOrd) {
      return function (low) {
          return function (hi) {
              return function (x) {
                  return min(dictOrd)(hi)(max(dictOrd)(low)(x));
              };
          };
      };
  };
  exports["Ord"] = Ord;
  exports["clamp"] = clamp;
  exports["compare"] = compare;
  exports["comparing"] = comparing;
  exports["lessThanOrEq"] = lessThanOrEq;
  exports["max"] = max;
  exports["min"] = min;
  exports["ordInt"] = ordInt;
  exports["ordNumber"] = ordNumber;
  exports["ordString"] = ordString;
})(PS["Data.Ord"] = PS["Data.Ord"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Category = PS["Control.Category"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  };
  var $$const = function (a) {
      return function (v) {
          return a;
      };
  };
  var applyFlipped = function (x) {
      return function (f) {
          return f(x);
      };
  };
  exports["applyFlipped"] = applyFlipped;
  exports["const"] = $$const;
  exports["flip"] = flip;
})(PS["Data.Function"] = PS["Data.Function"] || {});
(function(exports) {
    "use strict";

  exports.arrayMap = function (f) {
    return function (arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Functor"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Unit = PS["Data.Unit"];        
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  var mapFlipped = function (dictFunctor) {
      return function (fa) {
          return function (f) {
              return map(dictFunctor)(f)(fa);
          };
      };
  };
  var $$void = function (dictFunctor) {
      return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
  };                                                                                             
  var functorArray = new Functor($foreign.arrayMap);
  exports["Functor"] = Functor;
  exports["map"] = map;
  exports["mapFlipped"] = mapFlipped;
  exports["void"] = $$void;
  exports["functorArray"] = functorArray;
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];        
  var Apply = function (Functor0, apply) {
      this.Functor0 = Functor0;
      this.apply = apply;
  };                      
  var apply = function (dict) {
      return dict.apply;
  };
  var applySecond = function (dictApply) {
      return function (a) {
          return function (b) {
              return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"](Control_Category.id(Control_Category.categoryFn)))(a))(b);
          };
      };
  };
  var lift2 = function (dictApply) {
      return function (f) {
          return function (a) {
              return function (b) {
                  return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b);
              };
          };
      };
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
  exports["applySecond"] = applySecond;
  exports["lift2"] = lift2;
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Applicative = function (Apply0, pure) {
      this.Apply0 = Apply0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  var when = function (dictApplicative) {
      return function (v) {
          return function (v1) {
              if (v) {
                  return v1;
              };
              if (!v) {
                  return pure(dictApplicative)(Data_Unit.unit);
              };
              throw new Error("Failed pattern match at Control.Applicative line 57, column 1 - line 57, column 63: " + [ v.constructor.name, v1.constructor.name ]);
          };
      };
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
          };
      };
  };
  exports["Applicative"] = Applicative;
  exports["liftA1"] = liftA1;
  exports["pure"] = pure;
  exports["when"] = when;
})(PS["Control.Applicative"] = PS["Control.Applicative"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Control.Bind"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Bind = function (Apply0, bind) {
      this.Apply0 = Apply0;
      this.bind = bind;
  };
  var Discard = function (discard) {
      this.discard = discard;
  };
  var discard = function (dict) {
      return dict.discard;
  };                     
  var bind = function (dict) {
      return dict.bind;
  };
  var bindFlipped = function (dictBind) {
      return Data_Function.flip(bind(dictBind));
  };
  var discardUnit = new Discard(function (dictBind) {
      return bind(dictBind);
  });
  exports["Bind"] = Bind;
  exports["Discard"] = Discard;
  exports["bind"] = bind;
  exports["bindFlipped"] = bindFlipped;
  exports["discard"] = discard;
  exports["discardUnit"] = discardUnit;
})(PS["Control.Bind"] = PS["Control.Bind"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Monad = function (Applicative0, Bind1) {
      this.Applicative0 = Applicative0;
      this.Bind1 = Bind1;
  };
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad.Bind1())(f)(function (v) {
                  return Control_Bind.bind(dictMonad.Bind1())(a)(function (v1) {
                      return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
                  });
              });
          };
      };
  };
  exports["Monad"] = Monad;
  exports["ap"] = ap;
})(PS["Control.Monad"] = PS["Control.Monad"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Function = PS["Data.Function"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Monoid = function (Semigroup0, mempty) {
      this.Semigroup0 = Semigroup0;
      this.mempty = mempty;
  };                 
  var monoidString = new Monoid(function () {
      return Data_Semigroup.semigroupString;
  }, "");  
  var mempty = function (dict) {
      return dict.mempty;
  };
  exports["Monoid"] = Monoid;
  exports["mempty"] = mempty;
  exports["monoidString"] = monoidString;
})(PS["Data.Monoid"] = PS["Data.Monoid"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Control.Monad.Eff"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Unit = PS["Data.Unit"];        
  var monadEff = new Control_Monad.Monad(function () {
      return applicativeEff;
  }, function () {
      return bindEff;
  });
  var bindEff = new Control_Bind.Bind(function () {
      return applyEff;
  }, $foreign.bindE);
  var applyEff = new Control_Apply.Apply(function () {
      return functorEff;
  }, Control_Monad.ap(monadEff));
  var applicativeEff = new Control_Applicative.Applicative(function () {
      return applyEff;
  }, $foreign.pureE);
  var functorEff = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEff));
  exports["functorEff"] = functorEff;
  exports["applyEff"] = applyEff;
  exports["applicativeEff"] = applicativeEff;
  exports["bindEff"] = bindEff;
  exports["monadEff"] = monadEff;
  exports["foreachE"] = $foreign.foreachE;
  exports["runPure"] = $foreign.runPure;
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
    "use strict";

  exports.topInt = 2147483647;
  exports.bottomInt = -2147483648;
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Bounded"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Unit = PS["Data.Unit"];        
  var Bounded = function (Ord0, bottom, top) {
      this.Ord0 = Ord0;
      this.bottom = bottom;
      this.top = top;
  };
  var top = function (dict) {
      return dict.top;
  };                                            
  var boundedInt = new Bounded(function () {
      return Data_Ord.ordInt;
  }, $foreign.bottomInt, $foreign.topInt);
  var bottom = function (dict) {
      return dict.bottom;
  };
  exports["Bounded"] = Bounded;
  exports["bottom"] = bottom;
  exports["top"] = top;
  exports["boundedInt"] = boundedInt;
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_Functor = PS["Data.Functor"];
  var Data_Semigroup = PS["Data.Semigroup"];        
  var Alt = function (Functor0, alt) {
      this.Functor0 = Functor0;
      this.alt = alt;
  };                                                       
  var alt = function (dict) {
      return dict.alt;
  };
  exports["Alt"] = Alt;
  exports["alt"] = alt;
})(PS["Control.Alt"] = PS["Control.Alt"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Data_Functor = PS["Data.Functor"];        
  var Plus = function (Alt0, empty) {
      this.Alt0 = Alt0;
      this.empty = empty;
  };       
  var empty = function (dict) {
      return dict.empty;
  };
  exports["Plus"] = Plus;
  exports["empty"] = empty;
})(PS["Control.Plus"] = PS["Control.Plus"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Functor = PS["Data.Functor"];        
  var Alternative = function (Applicative0, Plus1) {
      this.Applicative0 = Applicative0;
      this.Plus1 = Plus1;
  };
  exports["Alternative"] = Alternative;
})(PS["Control.Alternative"] = PS["Control.Alternative"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var MonadZero = function (Alternative1, Monad0) {
      this.Alternative1 = Alternative1;
      this.Monad0 = Monad0;
  }; 
  var guard = function (dictMonadZero) {
      return function (v) {
          if (v) {
              return Control_Applicative.pure((dictMonadZero.Alternative1()).Applicative0())(Data_Unit.unit);
          };
          if (!v) {
              return Control_Plus.empty((dictMonadZero.Alternative1()).Plus1());
          };
          throw new Error("Failed pattern match at Control.MonadZero line 54, column 1 - line 54, column 52: " + [ v.constructor.name ]);
      };
  };
  exports["MonadZero"] = MonadZero;
  exports["guard"] = guard;
})(PS["Control.MonadZero"] = PS["Control.MonadZero"] || {});
(function(exports) {
    "use strict";

  exports.foldrArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };

  exports.foldlArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  var maybe = function (v) {
      return function (v1) {
          return function (v2) {
              if (v2 instanceof Nothing) {
                  return v;
              };
              if (v2 instanceof Just) {
                  return v1(v2.value0);
              };
              throw new Error("Failed pattern match at Data.Maybe line 219, column 1 - line 219, column 51: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
          };
      };
  };                                                         
  var isJust = maybe(false)(Data_Function["const"](true));
  var functorMaybe = new Data_Functor.Functor(function (v) {
      return function (v1) {
          if (v1 instanceof Just) {
              return new Just(v(v1.value0));
          };
          return Nothing.value;
      };
  });
  var fromMaybe = function (a) {
      return maybe(a)(Control_Category.id(Control_Category.categoryFn));
  };
  var fromJust = function (dictPartial) {
      return function (v) {
          var __unused = function (dictPartial1) {
              return function ($dollar35) {
                  return $dollar35;
              };
          };
          return __unused(dictPartial)((function () {
              if (v instanceof Just) {
                  return v.value0;
              };
              throw new Error("Failed pattern match at Data.Maybe line 270, column 1 - line 270, column 46: " + [ v.constructor.name ]);
          })());
      };
  };
  var applyMaybe = new Control_Apply.Apply(function () {
      return functorMaybe;
  }, function (v) {
      return function (v1) {
          if (v instanceof Just) {
              return Data_Functor.map(functorMaybe)(v.value0)(v1);
          };
          if (v instanceof Nothing) {
              return Nothing.value;
          };
          throw new Error("Failed pattern match at Data.Maybe line 68, column 1 - line 68, column 35: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var bindMaybe = new Control_Bind.Bind(function () {
      return applyMaybe;
  }, function (v) {
      return function (v1) {
          if (v instanceof Just) {
              return v1(v.value0);
          };
          if (v instanceof Nothing) {
              return Nothing.value;
          };
          throw new Error("Failed pattern match at Data.Maybe line 127, column 1 - line 127, column 33: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var applicativeMaybe = new Control_Applicative.Applicative(function () {
      return applyMaybe;
  }, Just.create);
  var monadMaybe = new Control_Monad.Monad(function () {
      return applicativeMaybe;
  }, function () {
      return bindMaybe;
  });
  var altMaybe = new Control_Alt.Alt(function () {
      return functorMaybe;
  }, function (v) {
      return function (v1) {
          if (v instanceof Nothing) {
              return v1;
          };
          return v;
      };
  });
  var plusMaybe = new Control_Plus.Plus(function () {
      return altMaybe;
  }, Nothing.value);
  var alternativeMaybe = new Control_Alternative.Alternative(function () {
      return applicativeMaybe;
  }, function () {
      return plusMaybe;
  });
  var monadZeroMaybe = new Control_MonadZero.MonadZero(function () {
      return alternativeMaybe;
  }, function () {
      return monadMaybe;
  });
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;
  exports["fromJust"] = fromJust;
  exports["fromMaybe"] = fromMaybe;
  exports["isJust"] = isJust;
  exports["maybe"] = maybe;
  exports["functorMaybe"] = functorMaybe;
  exports["applyMaybe"] = applyMaybe;
  exports["applicativeMaybe"] = applicativeMaybe;
  exports["altMaybe"] = altMaybe;
  exports["plusMaybe"] = plusMaybe;
  exports["alternativeMaybe"] = alternativeMaybe;
  exports["bindMaybe"] = bindMaybe;
  exports["monadMaybe"] = monadMaybe;
  exports["monadZeroMaybe"] = monadZeroMaybe;
})(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Prelude = PS["Prelude"];        
  var Newtype = function (unwrap, wrap) {
      this.unwrap = unwrap;
      this.wrap = wrap;
  };
  var wrap = function (dict) {
      return dict.wrap;
  };
  var unwrap = function (dict) {
      return dict.unwrap;
  };
  exports["Newtype"] = Newtype;
  exports["unwrap"] = unwrap;
  exports["wrap"] = wrap;
})(PS["Data.Newtype"] = PS["Data.Newtype"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Foldable"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Endo = PS["Data.Monoid.Endo"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Foldable = function (foldMap, foldl, foldr) {
      this.foldMap = foldMap;
      this.foldl = foldl;
      this.foldr = foldr;
  };
  var foldr = function (dict) {
      return dict.foldr;
  };
  var traverse_ = function (dictApplicative) {
      return function (dictFoldable) {
          return function (f) {
              return foldr(dictFoldable)(function ($195) {
                  return Control_Apply.applySecond(dictApplicative.Apply0())(f($195));
              })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
          };
      };
  };
  var for_ = function (dictApplicative) {
      return function (dictFoldable) {
          return Data_Function.flip(traverse_(dictApplicative)(dictFoldable));
      };
  };
  var foldl = function (dict) {
      return dict.foldl;
  };
  var intercalate = function (dictFoldable) {
      return function (dictMonoid) {
          return function (sep) {
              return function (xs) {
                  var go = function (v) {
                      return function (x) {
                          if (v.init) {
                              return {
                                  init: false, 
                                  acc: x
                              };
                          };
                          return {
                              init: false, 
                              acc: Data_Semigroup.append(dictMonoid.Semigroup0())(v.acc)(Data_Semigroup.append(dictMonoid.Semigroup0())(sep)(x))
                          };
                      };
                  };
                  return (foldl(dictFoldable)(go)({
                      init: true, 
                      acc: Data_Monoid.mempty(dictMonoid)
                  })(xs)).acc;
              };
          };
      };
  };
  var sum = function (dictFoldable) {
      return function (dictSemiring) {
          return foldl(dictFoldable)(Data_Semiring.add(dictSemiring))(Data_Semiring.zero(dictSemiring));
      };
  }; 
  var foldableMaybe = new Foldable(function (dictMonoid) {
      return function (f) {
          return function (v) {
              if (v instanceof Data_Maybe.Nothing) {
                  return Data_Monoid.mempty(dictMonoid);
              };
              if (v instanceof Data_Maybe.Just) {
                  return f(v.value0);
              };
              throw new Error("Failed pattern match at Data.Foldable line 131, column 1 - line 131, column 41: " + [ f.constructor.name, v.constructor.name ]);
          };
      };
  }, function (v) {
      return function (z) {
          return function (v1) {
              if (v1 instanceof Data_Maybe.Nothing) {
                  return z;
              };
              if (v1 instanceof Data_Maybe.Just) {
                  return v(z)(v1.value0);
              };
              throw new Error("Failed pattern match at Data.Foldable line 131, column 1 - line 131, column 41: " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
          };
      };
  }, function (v) {
      return function (z) {
          return function (v1) {
              if (v1 instanceof Data_Maybe.Nothing) {
                  return z;
              };
              if (v1 instanceof Data_Maybe.Just) {
                  return v(v1.value0)(z);
              };
              throw new Error("Failed pattern match at Data.Foldable line 131, column 1 - line 131, column 41: " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
          };
      };
  });
  var foldMapDefaultR = function (dictFoldable) {
      return function (dictMonoid) {
          return function (f) {
              return foldr(dictFoldable)(function (x) {
                  return function (acc) {
                      return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
                  };
              })(Data_Monoid.mempty(dictMonoid));
          };
      };
  };
  var foldableArray = new Foldable(function (dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
  }, $foreign.foldlArray, $foreign.foldrArray);
  var foldMap = function (dict) {
      return dict.foldMap;
  };
  var fold = function (dictFoldable) {
      return function (dictMonoid) {
          return foldMap(dictFoldable)(dictMonoid)(Control_Category.id(Control_Category.categoryFn));
      };
  };
  var find = function (dictFoldable) {
      return function (p) {
          var go = function (v) {
              return function (v1) {
                  if (v instanceof Data_Maybe.Nothing && p(v1)) {
                      return new Data_Maybe.Just(v1);
                  };
                  return v;
              };
          };
          return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
      };
  };
  exports["Foldable"] = Foldable;
  exports["find"] = find;
  exports["fold"] = fold;
  exports["foldMap"] = foldMap;
  exports["foldMapDefaultR"] = foldMapDefaultR;
  exports["foldl"] = foldl;
  exports["foldr"] = foldr;
  exports["for_"] = for_;
  exports["intercalate"] = intercalate;
  exports["sum"] = sum;
  exports["traverse_"] = traverse_;
  exports["foldableArray"] = foldableArray;
  exports["foldableMaybe"] = foldableMaybe;
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
    "use strict";

  // jshint maxparams: 3

  exports.traverseArrayImpl = function () {
    function Cont(fn) {
      this.fn = fn;
    }

    var emptyList = {};

    var ConsCell = function (head, tail) {
      this.head = head;
      this.tail = tail;
    };

    function consList(x) {
      return function (xs) {
        return new ConsCell(x, xs);
      };
    }

    function listToArray(list) {
      var arr = [];
      var xs = list;
      while (xs !== emptyList) {
        arr.push(xs.head);
        xs = xs.tail;
      }
      return arr;
    }

    return function (apply) {
      return function (map) {
        return function (pure) {
          return function (f) {
            var buildFrom = function (x, ys) {
              return apply(map(consList)(f(x)))(ys);
            };

            var go = function (acc, currentLen, xs) {
              if (currentLen === 0) {
                return acc;
              } else {
                var last = xs[currentLen - 1];
                return new Cont(function () {
                  return go(buildFrom(last, acc), currentLen - 1, xs);
                });
              }
            };

            return function (array) {
              var result = go(pure(emptyList), array.length, array);
              while (result instanceof Cont) {
                result = result.fn();
              }

              return map(listToArray)(result);
            };
          };
        };
      };
    };
  }();
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Traversable_Accum = PS["Data.Traversable.Accum"];
  var Prelude = PS["Prelude"];
  var stateL = function (v) {
      return v;
  }; 
  var functorStateL = new Data_Functor.Functor(function (f) {
      return function (k) {
          return function (s) {
              var v = stateL(k)(s);
              return {
                  accum: v.accum, 
                  value: f(v.value)
              };
          };
      };
  });
  var applyStateL = new Control_Apply.Apply(function () {
      return functorStateL;
  }, function (f) {
      return function (x) {
          return function (s) {
              var v = stateL(f)(s);
              var v1 = stateL(x)(v.accum);
              return {
                  accum: v1.accum, 
                  value: v.value(v1.value)
              };
          };
      };
  });
  var applicativeStateL = new Control_Applicative.Applicative(function () {
      return applyStateL;
  }, function (a) {
      return function (s) {
          return {
              accum: s, 
              value: a
          };
      };
  });
  exports["stateL"] = stateL;
  exports["functorStateL"] = functorStateL;
  exports["applyStateL"] = applyStateL;
  exports["applicativeStateL"] = applicativeStateL;
})(PS["Data.Traversable.Accum.Internal"] = PS["Data.Traversable.Accum.Internal"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Traversable"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Traversable_Accum = PS["Data.Traversable.Accum"];
  var Data_Traversable_Accum_Internal = PS["Data.Traversable.Accum.Internal"];
  var Prelude = PS["Prelude"];        
  var Traversable = function (Foldable1, Functor0, sequence, traverse) {
      this.Foldable1 = Foldable1;
      this.Functor0 = Functor0;
      this.sequence = sequence;
      this.traverse = traverse;
  };
  var traverse = function (dict) {
      return dict.traverse;
  }; 
  var sequenceDefault = function (dictTraversable) {
      return function (dictApplicative) {
          return traverse(dictTraversable)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
      };
  };
  var traversableArray = new Traversable(function () {
      return Data_Foldable.foldableArray;
  }, function () {
      return Data_Functor.functorArray;
  }, function (dictApplicative) {
      return sequenceDefault(traversableArray)(dictApplicative);
  }, function (dictApplicative) {
      return $foreign.traverseArrayImpl(Control_Apply.apply(dictApplicative.Apply0()))(Data_Functor.map((dictApplicative.Apply0()).Functor0()))(Control_Applicative.pure(dictApplicative));
  });
  var sequence = function (dict) {
      return dict.sequence;
  };
  var mapAccumL = function (dictTraversable) {
      return function (f) {
          return function (s0) {
              return function (xs) {
                  return Data_Traversable_Accum_Internal.stateL(traverse(dictTraversable)(Data_Traversable_Accum_Internal.applicativeStateL)(function (a) {
                      return function (s) {
                          return f(s)(a);
                      };
                  })(xs))(s0);
              };
          };
      };
  };
  var scanl = function (dictTraversable) {
      return function (f) {
          return function (b0) {
              return function (xs) {
                  return (mapAccumL(dictTraversable)(function (b) {
                      return function (a) {
                          var b$prime = f(b)(a);
                          return {
                              accum: b$prime, 
                              value: b$prime
                          };
                      };
                  })(b0)(xs)).value;
              };
          };
      };
  };
  exports["Traversable"] = Traversable;
  exports["mapAccumL"] = mapAccumL;
  exports["scanl"] = scanl;
  exports["sequence"] = sequence;
  exports["sequenceDefault"] = sequenceDefault;
  exports["traverse"] = traverse;
  exports["traversableArray"] = traversableArray;
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifoldable = PS["Data.Bifoldable"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Bitraversable = PS["Data.Bitraversable"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Prelude = PS["Prelude"];        
  var Left = (function () {
      function Left(value0) {
          this.value0 = value0;
      };
      Left.create = function (value0) {
          return new Left(value0);
      };
      return Left;
  })();
  var Right = (function () {
      function Right(value0) {
          this.value0 = value0;
      };
      Right.create = function (value0) {
          return new Right(value0);
      };
      return Right;
  })();
  var functorEither = new Data_Functor.Functor(function (v) {
      return function (v1) {
          if (v1 instanceof Left) {
              return new Left(v1.value0);
          };
          if (v1 instanceof Right) {
              return new Right(v(v1.value0));
          };
          throw new Error("Failed pattern match at Data.Either line 36, column 1 - line 36, column 45: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });                                                                                                     
  var fromRight = function (dictPartial) {
      return function (v) {
          var __unused = function (dictPartial1) {
              return function ($dollar62) {
                  return $dollar62;
              };
          };
          return __unused(dictPartial)((function () {
              if (v instanceof Right) {
                  return v.value0;
              };
              throw new Error("Failed pattern match at Data.Either line 252, column 1 - line 252, column 52: " + [ v.constructor.name ]);
          })());
      };
  };
  var either = function (v) {
      return function (v1) {
          return function (v2) {
              if (v2 instanceof Left) {
                  return v(v2.value0);
              };
              if (v2 instanceof Right) {
                  return v1(v2.value0);
              };
              throw new Error("Failed pattern match at Data.Either line 229, column 1 - line 229, column 64: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
          };
      };
  };
  exports["Left"] = Left;
  exports["Right"] = Right;
  exports["either"] = either;
  exports["fromRight"] = fromRight;
  exports["functorEither"] = functorEither;
})(PS["Data.Either"] = PS["Data.Either"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Biapplicative = PS["Control.Biapplicative"];
  var Control_Biapply = PS["Control.Biapply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifoldable = PS["Data.Bifoldable"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Bitraversable = PS["Data.Bitraversable"];
  var Data_BooleanAlgebra = PS["Data.BooleanAlgebra"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_CommutativeRing = PS["Data.CommutativeRing"];
  var Data_Distributive = PS["Data.Distributive"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var Type_Equality = PS["Type.Equality"];        
  var Tuple = (function () {
      function Tuple(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Tuple.create = function (value0) {
          return function (value1) {
              return new Tuple(value0, value1);
          };
      };
      return Tuple;
  })();
  exports["Tuple"] = Tuple;
})(PS["Data.Tuple"] = PS["Data.Tuple"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Unfoldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unit = PS["Data.Unit"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];        
  var Unfoldable = function (unfoldr) {
      this.unfoldr = unfoldr;
  };
  var unfoldr = function (dict) {
      return dict.unfoldr;
  };
  exports["Unfoldable"] = Unfoldable;
  exports["unfoldr"] = unfoldr;
})(PS["Data.Unfoldable"] = PS["Data.Unfoldable"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semigroup_Foldable = PS["Data.Semigroup.Foldable"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_TraversableWithIndex = PS["Data.TraversableWithIndex"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Data_Unfoldable1 = PS["Data.Unfoldable1"];
  var Prelude = PS["Prelude"];        
  var NonEmpty = (function () {
      function NonEmpty(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      NonEmpty.create = function (value0) {
          return function (value1) {
              return new NonEmpty(value0, value1);
          };
      };
      return NonEmpty;
  })();
  var singleton = function (dictPlus) {
      return function (a) {
          return new NonEmpty(a, Control_Plus.empty(dictPlus));
      };
  };
  var functorNonEmpty = function (dictFunctor) {
      return new Data_Functor.Functor(function (f) {
          return function (v) {
              return new NonEmpty(f(v.value0), Data_Functor.map(dictFunctor)(f)(v.value1));
          };
      });
  };
  var foldableNonEmpty = function (dictFoldable) {
      return new Data_Foldable.Foldable(function (dictMonoid) {
          return function (f) {
              return function (v) {
                  return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v.value0))(Data_Foldable.foldMap(dictFoldable)(dictMonoid)(f)(v.value1));
              };
          };
      }, function (f) {
          return function (b) {
              return function (v) {
                  return Data_Foldable.foldl(dictFoldable)(f)(f(b)(v.value0))(v.value1);
              };
          };
      }, function (f) {
          return function (b) {
              return function (v) {
                  return f(v.value0)(Data_Foldable.foldr(dictFoldable)(f)(b)(v.value1));
              };
          };
      });
  };
  exports["NonEmpty"] = NonEmpty;
  exports["singleton"] = singleton;
  exports["functorNonEmpty"] = functorNonEmpty;
  exports["foldableNonEmpty"] = foldableNonEmpty;
})(PS["Data.NonEmpty"] = PS["Data.NonEmpty"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Char = PS["Data.Char"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Data_Unit = PS["Data.Unit"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];
  var Enum = function (Ord0, pred, succ) {
      this.Ord0 = Ord0;
      this.pred = pred;
      this.succ = succ;
  };
  var BoundedEnum = function (Bounded0, Enum1, cardinality, fromEnum, toEnum) {
      this.Bounded0 = Bounded0;
      this.Enum1 = Enum1;
      this.cardinality = cardinality;
      this.fromEnum = fromEnum;
      this.toEnum = toEnum;
  };
  var toEnum = function (dict) {
      return dict.toEnum;
  };
  var succ = function (dict) {
      return dict.succ;
  };
  var pred = function (dict) {
      return dict.pred;
  };
  var fromEnum = function (dict) {
      return dict.fromEnum;
  }; 
  var enumFromTo = function (dictEnum) {
      return function (dictUnfoldable) {
          return function (from) {
              return function (to) {
                  var go = function (mx) {
                      return Control_Bind.bind(Data_Maybe.bindMaybe)(mx)(function (v) {
                          return Control_Bind.discard(Control_Bind.discardUnit)(Data_Maybe.bindMaybe)(Control_MonadZero.guard(Data_Maybe.monadZeroMaybe)(Data_Ord.lessThanOrEq(dictEnum.Ord0())(v)(to)))(function () {
                              return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(new Data_Tuple.Tuple(v, succ(dictEnum)(v)));
                          });
                      });
                  };
                  return Data_Unfoldable.unfoldr(dictUnfoldable)(go)(new Data_Maybe.Just(from));
              };
          };
      };
  };
  var defaultSucc = function (toEnum$prime) {
      return function (fromEnum$prime) {
          return function (a) {
              return toEnum$prime(fromEnum$prime(a) + 1 | 0);
          };
      };
  };
  var defaultPred = function (toEnum$prime) {
      return function (fromEnum$prime) {
          return function (a) {
              return toEnum$prime(fromEnum$prime(a) - 1 | 0);
          };
      };
  };                                                                                               
  var cardinality = function (dict) {
      return dict.cardinality;
  };
  exports["BoundedEnum"] = BoundedEnum;
  exports["Enum"] = Enum;
  exports["cardinality"] = cardinality;
  exports["defaultPred"] = defaultPred;
  exports["defaultSucc"] = defaultSucc;
  exports["enumFromTo"] = enumFromTo;
  exports["fromEnum"] = fromEnum;
  exports["pred"] = pred;
  exports["succ"] = succ;
  exports["toEnum"] = toEnum;
})(PS["Data.Enum"] = PS["Data.Enum"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semigroup_Foldable = PS["Data.Semigroup.Foldable"];
  var Data_Semigroup_Traversable = PS["Data.Semigroup.Traversable"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_TraversableWithIndex = PS["Data.TraversableWithIndex"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Prelude = PS["Prelude"];        
  var Nil = (function () {
      function Nil() {

      };
      Nil.value = new Nil();
      return Nil;
  })();
  var Cons = (function () {
      function Cons(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Cons.create = function (value0) {
          return function (value1) {
              return new Cons(value0, value1);
          };
      };
      return Cons;
  })();
  var NonEmptyList = function (x) {
      return x;
  };
  var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
      return function (f) {
          return Data_Foldable.foldl(foldableList)(function (acc) {
              return function ($158) {
                  return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f($158));
              };
          })(Data_Monoid.mempty(dictMonoid));
      };
  }, function (f) {
      var go = function ($copy_b) {
          return function ($copy_v) {
              var $tco_var_b = $copy_b;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(b, v) {
                  if (v instanceof Nil) {
                      $tco_done = true;
                      return b;
                  };
                  if (v instanceof Cons) {
                      $tco_var_b = f(b)(v.value0);
                      $copy_v = v.value1;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List.Types line 81, column 12 - line 83, column 30: " + [ v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_b, $copy_v);
              };
              return $tco_result;
          };
      };
      return go;
  }, function (f) {
      return function (b) {
          var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value);
          return function ($159) {
              return Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b)(rev($159));
          };
      };
  });
  var functorList = new Data_Functor.Functor(function (f) {
      return Data_Foldable.foldr(foldableList)(function (x) {
          return function (acc) {
              return new Cons(f(x), acc);
          };
      })(Nil.value);
  });
  var functorNonEmptyList = Data_NonEmpty.functorNonEmpty(functorList);
  var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
      return function (ys) {
          return Data_Foldable.foldr(foldableList)(Cons.create)(ys)(xs);
      };
  });
  var monoidList = new Data_Monoid.Monoid(function () {
      return semigroupList;
  }, Nil.value);
  var traversableList = new Data_Traversable.Traversable(function () {
      return foldableList;
  }, function () {
      return functorList;
  }, function (dictApplicative) {
      return Data_Traversable.traverse(traversableList)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
  }, function (dictApplicative) {
      return function (f) {
          return function ($162) {
              return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value))(Data_Foldable.foldl(foldableList)(function (acc) {
                  return function ($163) {
                      return Control_Apply.lift2(dictApplicative.Apply0())(Data_Function.flip(Cons.create))(acc)(f($163));
                  };
              })(Control_Applicative.pure(dictApplicative)(Nil.value))($162));
          };
      };
  });
  var unfoldableList = new Data_Unfoldable.Unfoldable(function (f) {
      return function (b) {
          var go = function ($copy_source) {
              return function ($copy_memo) {
                  var $tco_var_source = $copy_source;
                  var $tco_done = false;
                  var $tco_result;
                  function $tco_loop(source, memo) {
                      var v = f(source);
                      if (v instanceof Data_Maybe.Nothing) {
                          $tco_done = true;
                          return Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value)(memo);
                      };
                      if (v instanceof Data_Maybe.Just) {
                          $tco_var_source = v.value0.value1;
                          $copy_memo = new Cons(v.value0.value0, memo);
                          return;
                      };
                      throw new Error("Failed pattern match at Data.List.Types line 105, column 22 - line 107, column 52: " + [ v.constructor.name ]);
                  };
                  while (!$tco_done) {
                      $tco_result = $tco_loop($tco_var_source, $copy_memo);
                  };
                  return $tco_result;
              };
          };
          return go(b)(Nil.value);
      };
  });
  var eq1List = new Data_Eq.Eq1(function (dictEq) {
      return function (xs) {
          return function (ys) {
              var go = function ($copy_v) {
                  return function ($copy_v1) {
                      return function ($copy_v2) {
                          var $tco_var_v = $copy_v;
                          var $tco_var_v1 = $copy_v1;
                          var $tco_done = false;
                          var $tco_result;
                          function $tco_loop(v, v1, v2) {
                              if (!v2) {
                                  $tco_done = true;
                                  return false;
                              };
                              if (v instanceof Nil && v1 instanceof Nil) {
                                  $tco_done = true;
                                  return v2;
                              };
                              if (v instanceof Cons && v1 instanceof Cons) {
                                  $tco_var_v = v.value1;
                                  $tco_var_v1 = v1.value1;
                                  $copy_v2 = v2 && Data_Eq.eq(dictEq)(v1.value0)(v.value0);
                                  return;
                              };
                              $tco_done = true;
                              return false;
                          };
                          while (!$tco_done) {
                              $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
                          };
                          return $tco_result;
                      };
                  };
              };
              return go(xs)(ys)(true);
          };
      };
  });
  var eqList = function (dictEq) {
      return new Data_Eq.Eq(Data_Eq.eq1(eq1List)(dictEq));
  }; 
  var applyList = new Control_Apply.Apply(function () {
      return functorList;
  }, function (v) {
      return function (v1) {
          if (v instanceof Nil) {
              return Nil.value;
          };
          if (v instanceof Cons) {
              return Data_Semigroup.append(semigroupList)(Data_Functor.map(functorList)(v.value0)(v1))(Control_Apply.apply(applyList)(v.value1)(v1));
          };
          throw new Error("Failed pattern match at Data.List.Types line 120, column 1 - line 120, column 33: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var applyNonEmptyList = new Control_Apply.Apply(function () {
      return functorNonEmptyList;
  }, function (v) {
      return function (v1) {
          return new Data_NonEmpty.NonEmpty(v.value0(v1.value0), Data_Semigroup.append(semigroupList)(Control_Apply.apply(applyList)(v.value1)(new Cons(v1.value0, Nil.value)))(Control_Apply.apply(applyList)(new Cons(v.value0, v.value1))(v1.value1)));
      };
  });
  var bindList = new Control_Bind.Bind(function () {
      return applyList;
  }, function (v) {
      return function (v1) {
          if (v instanceof Nil) {
              return Nil.value;
          };
          if (v instanceof Cons) {
              return Data_Semigroup.append(semigroupList)(v1(v.value0))(Control_Bind.bind(bindList)(v.value1)(v1));
          };
          throw new Error("Failed pattern match at Data.List.Types line 127, column 1 - line 127, column 31: " + [ v.constructor.name, v1.constructor.name ]);
      };
  });                                              
  var altList = new Control_Alt.Alt(function () {
      return functorList;
  }, Data_Semigroup.append(semigroupList));
  var plusList = new Control_Plus.Plus(function () {
      return altList;
  }, Nil.value);
  var applicativeNonEmptyList = new Control_Applicative.Applicative(function () {
      return applyNonEmptyList;
  }, function ($168) {
      return NonEmptyList(Data_NonEmpty.singleton(plusList)($168));
  });
  exports["Nil"] = Nil;
  exports["Cons"] = Cons;
  exports["NonEmptyList"] = NonEmptyList;
  exports["eqList"] = eqList;
  exports["eq1List"] = eq1List;
  exports["semigroupList"] = semigroupList;
  exports["monoidList"] = monoidList;
  exports["functorList"] = functorList;
  exports["foldableList"] = foldableList;
  exports["unfoldableList"] = unfoldableList;
  exports["traversableList"] = traversableList;
  exports["applyList"] = applyList;
  exports["bindList"] = bindList;
  exports["altList"] = altList;
  exports["plusList"] = plusList;
  exports["functorNonEmptyList"] = functorNonEmptyList;
  exports["applyNonEmptyList"] = applyNonEmptyList;
  exports["applicativeNonEmptyList"] = applicativeNonEmptyList;
})(PS["Data.List.Types"] = PS["Data.List.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var tail = function (v) {
      if (v instanceof Data_List_Types.Nil) {
          return Data_Maybe.Nothing.value;
      };
      if (v instanceof Data_List_Types.Cons) {
          return new Data_Maybe.Just(v.value1);
      };
      throw new Error("Failed pattern match at Data.List line 245, column 1 - line 245, column 43: " + [ v.constructor.name ]);
  };
  var span = function (v) {
      return function (v1) {
          if (v1 instanceof Data_List_Types.Cons && v(v1.value0)) {
              var v2 = span(v)(v1.value1);
              return {
                  init: new Data_List_Types.Cons(v1.value0, v2.init), 
                  rest: v2.rest
              };
          };
          return {
              init: Data_List_Types.Nil.value, 
              rest: v1
          };
      };
  };
  var snoc = function (xs) {
      return function (x) {
          return Data_Foldable.foldr(Data_List_Types.foldableList)(Data_List_Types.Cons.create)(new Data_List_Types.Cons(x, Data_List_Types.Nil.value))(xs);
      };
  };
  var singleton = function (a) {
      return new Data_List_Types.Cons(a, Data_List_Types.Nil.value);
  };
  var sortBy = function (cmp) {
      var merge = function (v) {
          return function (v1) {
              if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                  if (Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1.value0))(Data_Ordering.GT.value)) {
                      return new Data_List_Types.Cons(v1.value0, merge(v)(v1.value1));
                  };
                  if (Data_Boolean.otherwise) {
                      return new Data_List_Types.Cons(v.value0, merge(v.value1)(v1));
                  };
              };
              if (v instanceof Data_List_Types.Nil) {
                  return v1;
              };
              if (v1 instanceof Data_List_Types.Nil) {
                  return v;
              };
              throw new Error("Failed pattern match at Data.List line 473, column 3 - line 473, column 38: " + [ v.constructor.name, v1.constructor.name ]);
          };
      };
      var mergePairs = function (v) {
          if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Cons) {
              return new Data_List_Types.Cons(merge(v.value0)(v.value1.value0), mergePairs(v.value1.value1));
          };
          return v;
      };
      var mergeAll = function ($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
              if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                  $tco_done = true;
                  return v.value0;
              };
              $copy_v = mergePairs(v);
              return;
          };
          while (!$tco_done) {
              $tco_result = $tco_loop($copy_v);
          };
          return $tco_result;
      };
      var sequences = function (v) {
          if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Cons) {
              if (Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v.value1.value0))(Data_Ordering.GT.value)) {
                  return descending(v.value1.value0)(singleton(v.value0))(v.value1.value1);
              };
              if (Data_Boolean.otherwise) {
                  return ascending(v.value1.value0)(function (v1) {
                      return new Data_List_Types.Cons(v.value0, v1);
                  })(v.value1.value1);
              };
          };
          return singleton(v);
      };
      var descending = function ($copy_a) {
          return function ($copy_as) {
              return function ($copy_v) {
                  var $tco_var_a = $copy_a;
                  var $tco_var_as = $copy_as;
                  var $tco_done = false;
                  var $tco_result;
                  function $tco_loop(a, as, v) {
                      if (v instanceof Data_List_Types.Cons && Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(a)(v.value0))(Data_Ordering.GT.value)) {
                          $tco_var_a = v.value0;
                          $tco_var_as = new Data_List_Types.Cons(a, as);
                          $copy_v = v.value1;
                          return;
                      };
                      $tco_done = true;
                      return new Data_List_Types.Cons(new Data_List_Types.Cons(a, as), sequences(v));
                  };
                  while (!$tco_done) {
                      $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
                  };
                  return $tco_result;
              };
          };
      };
      var ascending = function ($copy_a) {
          return function ($copy_as) {
              return function ($copy_v) {
                  var $tco_var_a = $copy_a;
                  var $tco_var_as = $copy_as;
                  var $tco_done = false;
                  var $tco_result;
                  function $tco_loop(a, as, v) {
                      if (v instanceof Data_List_Types.Cons && Data_Eq.notEq(Data_Ordering.eqOrdering)(cmp(a)(v.value0))(Data_Ordering.GT.value)) {
                          $tco_var_a = v.value0;
                          $tco_var_as = function (ys) {
                              return as(new Data_List_Types.Cons(a, ys));
                          };
                          $copy_v = v.value1;
                          return;
                      };
                      $tco_done = true;
                      return new Data_List_Types.Cons(as(singleton(a)), sequences(v));
                  };
                  while (!$tco_done) {
                      $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
                  };
                  return $tco_result;
              };
          };
      };
      return function ($333) {
          return mergeAll(sequences($333));
      };
  };
  var sort = function (dictOrd) {
      return function (xs) {
          return sortBy(Data_Ord.compare(dictOrd))(xs);
      };
  };
  var reverse = (function () {
      var go = function ($copy_acc) {
          return function ($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return acc;
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                      $copy_v = v.value1;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List line 368, column 3 - line 368, column 19: " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_acc, $copy_v);
              };
              return $tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  })();
  var unsnoc = function (lst) {
      var go = function ($copy_v) {
          return function ($copy_acc) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, acc) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return Data_Maybe.Nothing.value;
                  };
                  if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return new Data_Maybe.Just({
                          revInit: acc, 
                          last: v.value0
                      });
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      $tco_var_v = v.value1;
                      $copy_acc = new Data_List_Types.Cons(v.value0, acc);
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List line 270, column 3 - line 270, column 23: " + [ v.constructor.name, acc.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_v, $copy_acc);
              };
              return $tco_result;
          };
      };
      return Data_Functor.map(Data_Maybe.functorMaybe)(function (h) {
          return {
              init: reverse(h.revInit), 
              last: h.last
          };
      })(go(lst)(Data_List_Types.Nil.value));
  };
  var zipWith = function (f) {
      return function (xs) {
          return function (ys) {
              var go = function ($copy_v) {
                  return function ($copy_v1) {
                      return function ($copy_acc) {
                          var $tco_var_v = $copy_v;
                          var $tco_var_v1 = $copy_v1;
                          var $tco_done = false;
                          var $tco_result;
                          function $tco_loop(v, v1, acc) {
                              if (v instanceof Data_List_Types.Nil) {
                                  $tco_done = true;
                                  return acc;
                              };
                              if (v1 instanceof Data_List_Types.Nil) {
                                  $tco_done = true;
                                  return acc;
                              };
                              if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                                  $tco_var_v = v.value1;
                                  $tco_var_v1 = v1.value1;
                                  $copy_acc = new Data_List_Types.Cons(f(v.value0)(v1.value0), acc);
                                  return;
                              };
                              throw new Error("Failed pattern match at Data.List line 708, column 3 - line 708, column 21: " + [ v.constructor.name, v1.constructor.name, acc.constructor.name ]);
                          };
                          while (!$tco_done) {
                              $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_acc);
                          };
                          return $tco_result;
                      };
                  };
              };
              return reverse(go(xs)(ys)(Data_List_Types.Nil.value));
          };
      };
  };
  var partition = function (p) {
      return function (xs) {
          var select = function (x) {
              return function (v) {
                  var $222 = p(x);
                  if ($222) {
                      return {
                          no: v.no, 
                          yes: new Data_List_Types.Cons(x, v.yes)
                      };
                  };
                  return {
                      no: new Data_List_Types.Cons(x, v.no), 
                      yes: v.yes
                  };
              };
          };
          return Data_Foldable.foldr(Data_List_Types.foldableList)(select)({
              no: Data_List_Types.Nil.value, 
              yes: Data_List_Types.Nil.value
          })(xs);
      };
  };
  var $$null = function (v) {
      if (v instanceof Data_List_Types.Nil) {
          return true;
      };
      return false;
  };                                                                                          
  var mapMaybe = function (f) {
      var go = function ($copy_acc) {
          return function ($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return reverse(acc);
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      var v1 = f(v.value0);
                      if (v1 instanceof Data_Maybe.Nothing) {
                          $tco_var_acc = acc;
                          $copy_v = v.value1;
                          return;
                      };
                      if (v1 instanceof Data_Maybe.Just) {
                          $tco_var_acc = new Data_List_Types.Cons(v1.value0, acc);
                          $copy_v = v.value1;
                          return;
                      };
                      throw new Error("Failed pattern match at Data.List line 419, column 5 - line 421, column 32: " + [ v1.constructor.name ]);
                  };
                  throw new Error("Failed pattern match at Data.List line 417, column 3 - line 417, column 27: " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_acc, $copy_v);
              };
              return $tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  };
  var length = Data_Foldable.foldl(Data_List_Types.foldableList)(function (acc) {
      return function (v) {
          return acc + 1 | 0;
      };
  })(0);
  var last = function ($copy_v) {
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v) {
          if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
              $tco_done = true;
              return new Data_Maybe.Just(v.value0);
          };
          if (v instanceof Data_List_Types.Cons) {
              $copy_v = v.value1;
              return;
          };
          $tco_done = true;
          return Data_Maybe.Nothing.value;
      };
      while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
      };
      return $tco_result;
  };
  var init = function (lst) {
      return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
          return v.init;
      })(unsnoc(lst));
  };
  var head = function (v) {
      if (v instanceof Data_List_Types.Nil) {
          return Data_Maybe.Nothing.value;
      };
      if (v instanceof Data_List_Types.Cons) {
          return new Data_Maybe.Just(v.value0);
      };
      throw new Error("Failed pattern match at Data.List line 230, column 1 - line 230, column 22: " + [ v.constructor.name ]);
  };
  var fromFoldable = function (dictFoldable) {
      return Data_Foldable.foldr(dictFoldable)(Data_List_Types.Cons.create)(Data_List_Types.Nil.value);
  };
  var findIndex = function (fn) {
      var go = function ($copy_v) {
          return function ($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                  if (v1 instanceof Data_List_Types.Cons) {
                      if (fn(v1.value0)) {
                          $tco_done = true;
                          return new Data_Maybe.Just(v);
                      };
                      if (Data_Boolean.otherwise) {
                          $tco_var_v = v + 1 | 0;
                          $copy_v1 = v1.value1;
                          return;
                      };
                  };
                  if (v1 instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return Data_Maybe.Nothing.value;
                  };
                  throw new Error("Failed pattern match at Data.List line 301, column 3 - line 301, column 35: " + [ v.constructor.name, v1.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_v, $copy_v1);
              };
              return $tco_result;
          };
      };
      return go(0);
  };
  var filter = function (p) {
      var go = function ($copy_acc) {
          return function ($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return reverse(acc);
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      if (p(v.value0)) {
                          $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                          $copy_v = v.value1;
                          return;
                      };
                      if (Data_Boolean.otherwise) {
                          $tco_var_acc = acc;
                          $copy_v = v.value1;
                          return;
                      };
                  };
                  throw new Error("Failed pattern match at Data.List line 390, column 3 - line 390, column 27: " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_acc, $copy_v);
              };
              return $tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  };
  var elemIndex = function (dictEq) {
      return function (x) {
          return findIndex(function (v) {
              return Data_Eq.eq(dictEq)(v)(x);
          });
      };
  };
  var dropWhile = function (p) {
      var go = function ($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
              if (v instanceof Data_List_Types.Cons && p(v.value0)) {
                  $copy_v = v.value1;
                  return;
              };
              $tco_done = true;
              return v;
          };
          while (!$tco_done) {
              $tco_result = $tco_loop($copy_v);
          };
          return $tco_result;
      };
      return go;
  };
  var concatMap = Data_Function.flip(Control_Bind.bind(Data_List_Types.bindList));
  var concat = function (v) {
      return Control_Bind.bind(Data_List_Types.bindList)(v)(Control_Category.id(Control_Category.categoryFn));
  };
  exports["concat"] = concat;
  exports["concatMap"] = concatMap;
  exports["dropWhile"] = dropWhile;
  exports["elemIndex"] = elemIndex;
  exports["filter"] = filter;
  exports["findIndex"] = findIndex;
  exports["fromFoldable"] = fromFoldable;
  exports["head"] = head;
  exports["init"] = init;
  exports["last"] = last;
  exports["length"] = length;
  exports["mapMaybe"] = mapMaybe;
  exports["null"] = $$null;
  exports["partition"] = partition;
  exports["reverse"] = reverse;
  exports["singleton"] = singleton;
  exports["snoc"] = snoc;
  exports["sort"] = sort;
  exports["sortBy"] = sortBy;
  exports["span"] = span;
  exports["tail"] = tail;
  exports["unsnoc"] = unsnoc;
  exports["zipWith"] = zipWith;
})(PS["Data.List"] = PS["Data.List"] || {});
(function(exports) {
    "use strict";

  exports._copyEff = function (m) {
    return function () {
      var r = {};
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r[k] = m[k];
        }
      }
      return r;
    };
  };

  exports.empty = {};

  exports.runST = function (f) {
    return f;
  };

  exports._fmapStrMap = function (m0, f) {
    var m = {};
    for (var k in m0) {
      if (hasOwnProperty.call(m0, k)) {
        m[k] = f(m0[k]);
      }
    }
    return m;
  };

  exports._foldM = function (bind) {
    return function (f) {
      return function (mz) {
        return function (m) {
          var acc = mz;
          function g(k) {
            return function (z) {
              return f(z)(k)(m[k]);
            };
          }
          for (var k in m) {
            if (hasOwnProperty.call(m, k)) {
              acc = bind(acc)(g(k));
            }
          }
          return acc;
        };
      };
    };
  };

  exports._lookup = function (no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  };

  function toArrayWithKey(f) {
    return function (m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }

  exports.toArrayWithKey = toArrayWithKey;

  exports.keys = Object.keys || toArrayWithKey(function (k) {
    return function () { return k; };
  });
})(PS["Data.StrMap"] = PS["Data.StrMap"] || {});
(function(exports) {
    "use strict";       

  exports.fromFoldableImpl = (function () {
    function Cons(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    var emptyList = {};

    function curryCons(head) {
      return function (tail) {
        return new Cons(head, tail);
      };
    }

    function listToArray(list) {
      var result = [];
      var count = 0;
      var xs = list;
      while (xs !== emptyList) {
        result[count++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }

    return function (foldr) {
      return function (xs) {
        return listToArray(foldr(curryCons)(emptyList)(xs));
      };
    };
  })();
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Array"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array_ST = PS["Data.Array.ST"];
  var Data_Array_ST_Iterator = PS["Data.Array.ST.Iterator"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];
  var fromFoldable = function (dictFoldable) {
      return $foreign.fromFoldableImpl(Data_Foldable.foldr(dictFoldable));
  };
  exports["fromFoldable"] = fromFoldable;
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function(exports) {
    "use strict";

  exports.runFn4 = function (fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Function.Uncurried"];
  var Data_Unit = PS["Data.Unit"];
  exports["runFn4"] = $foreign.runFn4;
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});
(function(exports) {
    "use strict";

  exports["new"] = function () {
    return {};
  };

  exports.poke = function (m) {
    return function (k) {
      return function (v) {
        return function () {
          m[k] = v;
          return m;
        };
      };
    };
  };

  exports["delete"] = function (m) {
    return function (k) {
      return function () {
        delete m[k];
        return m;
      };
    };
  };
})(PS["Data.StrMap.ST"] = PS["Data.StrMap.ST"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.StrMap.ST"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Data_Maybe = PS["Data.Maybe"];
  exports["delete"] = $foreign["delete"];
  exports["new"] = $foreign["new"];
  exports["poke"] = $foreign.poke;
})(PS["Data.StrMap.ST"] = PS["Data.StrMap.ST"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.StrMap"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_FoldableWithIndex = PS["Data.FoldableWithIndex"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Functor = PS["Data.Functor"];
  var Data_FunctorWithIndex = PS["Data.FunctorWithIndex"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_StrMap_ST = PS["Data.StrMap.ST"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_TraversableWithIndex = PS["Data.TraversableWithIndex"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Prelude = PS["Prelude"];                                   
  var thawST = $foreign._copyEff;
  var pureST = function (f) {
      return Control_Monad_Eff.runPure($foreign.runST(f));
  };
  var mutate = function (f) {
      return function (m) {
          return pureST(function __do() {
              var v = thawST(m)();
              var v1 = f(v)();
              return v;
          });
      };
  };
  var member = Data_Function_Uncurried.runFn4($foreign._lookup)(false)(Data_Function["const"](true));
  var lookup = Data_Function_Uncurried.runFn4($foreign._lookup)(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
  var insert = function (k) {
      return function (v) {
          return mutate(function (s) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_StrMap_ST.poke(s)(k)(v));
          });
      };
  };
  var functorStrMap = new Data_Functor.Functor(function (f) {
      return function (m) {
          return $foreign._fmapStrMap(m, f);
      };
  });
  var fromFoldable = function (dictFoldable) {
      return function (l) {
          return pureST(function __do() {
              var v = Data_StrMap_ST["new"]();
              Control_Monad_Eff.foreachE(Data_Array.fromFoldable(dictFoldable)(l))(function (v1) {
                  return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_StrMap_ST.poke(v)(v1.value0)(v1.value1));
              })();
              return v;
          });
      };
  };
  var foldM = function (dictMonad) {
      return function (f) {
          return function (z) {
              return $foreign._foldM(Control_Bind.bind(dictMonad.Bind1()))(f)(Control_Applicative.pure(dictMonad.Applicative0())(z));
          };
      };
  };
  var union = function (m) {
      return mutate(function (s) {
          return Data_Functor["void"](Control_Monad_Eff.functorEff)(foldM(Control_Monad_Eff.monadEff)(Data_StrMap_ST.poke)(s)(m));
      });
  };
  var unions = function (dictFoldable) {
      return Data_Foldable.foldl(dictFoldable)(union)($foreign.empty);
  };
  var fold = $foreign._foldM(Data_Function.applyFlipped);
  var $$delete = function (k) {
      return mutate(function (s) {
          return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_StrMap_ST["delete"](s)(k));
      });
  };
  exports["delete"] = $$delete;
  exports["fold"] = fold;
  exports["foldM"] = foldM;
  exports["fromFoldable"] = fromFoldable;
  exports["insert"] = insert;
  exports["lookup"] = lookup;
  exports["member"] = member;
  exports["pureST"] = pureST;
  exports["thawST"] = thawST;
  exports["union"] = union;
  exports["unions"] = unions;
  exports["functorStrMap"] = functorStrMap;
  exports["empty"] = $foreign.empty;
  exports["keys"] = $foreign.keys;
})(PS["Data.StrMap"] = PS["Data.StrMap"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Enum = PS["Data.Enum"];
  var Data_Eq = PS["Data.Eq"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Show = PS["Data.Show"];
  var Data_StrMap = PS["Data.StrMap"];
  var Prelude = PS["Prelude"];        
  var Easy = (function () {
      function Easy() {

      };
      Easy.value = new Easy();
      return Easy;
  })();
  var Medium = (function () {
      function Medium() {

      };
      Medium.value = new Medium();
      return Medium;
  })();
  var Hard = (function () {
      function Hard() {

      };
      Hard.value = new Hard();
      return Hard;
  })();
  var Cyan = (function () {
      function Cyan() {

      };
      Cyan.value = new Cyan();
      return Cyan;
  })();
  var Brown = (function () {
      function Brown() {

      };
      Brown.value = new Brown();
      return Brown;
  })();
  var Red = (function () {
      function Red() {

      };
      Red.value = new Red();
      return Red;
  })();
  var Orange = (function () {
      function Orange() {

      };
      Orange.value = new Orange();
      return Orange;
  })();
  var Yellow = (function () {
      function Yellow() {

      };
      Yellow.value = new Yellow();
      return Yellow;
  })();
  var showDifficulty = new Data_Show.Show(function (v) {
      if (v instanceof Easy) {
          return "Easy";
      };
      if (v instanceof Medium) {
          return "Medium";
      };
      if (v instanceof Hard) {
          return "Hard";
      };
      throw new Error("Failed pattern match at Types line 87, column 1 - line 87, column 43: " + [ v.constructor.name ]);
  });
  var showCube = new Data_Show.Show(function (v) {
      if (v instanceof Cyan) {
          return "Cyan";
      };
      if (v instanceof Brown) {
          return "Brown";
      };
      if (v instanceof Red) {
          return "Red";
      };
      if (v instanceof Orange) {
          return "Orange";
      };
      if (v instanceof Yellow) {
          return "Yellow";
      };
      throw new Error("Failed pattern match at Types line 26, column 1 - line 26, column 31: " + [ v.constructor.name ]);
  });
  var cubeToEnum = function (v) {
      if (v === 0) {
          return new Data_Maybe.Just(Cyan.value);
      };
      if (v === 1) {
          return new Data_Maybe.Just(Brown.value);
      };
      if (v === 2) {
          return new Data_Maybe.Just(Red.value);
      };
      if (v === 3) {
          return new Data_Maybe.Just(Orange.value);
      };
      if (v === 4) {
          return new Data_Maybe.Just(Yellow.value);
      };
      return Data_Maybe.Nothing.value;
  };
  var cubeFromEnum = function (v) {
      if (v instanceof Cyan) {
          return 0;
      };
      if (v instanceof Brown) {
          return 1;
      };
      if (v instanceof Red) {
          return 2;
      };
      if (v instanceof Orange) {
          return 3;
      };
      if (v instanceof Yellow) {
          return 4;
      };
      throw new Error("Failed pattern match at Types line 52, column 1 - line 52, column 28: " + [ v.constructor.name ]);
  };
  var ordCube = new Data_Ord.Ord(function () {
      return eqCube;
  }, function (a) {
      return function (b) {
          return Data_Ord.compare(Data_Ord.ordInt)(Data_Enum.fromEnum(boundedEnumCube)(a))(Data_Enum.fromEnum(boundedEnumCube)(b));
      };
  });
  var eqCube = new Data_Eq.Eq(function (a) {
      return function (b) {
          return Data_Enum.fromEnum(boundedEnumCube)(a) === Data_Enum.fromEnum(boundedEnumCube)(b);
      };
  });
  var enumCube = new Data_Enum.Enum(function () {
      return ordCube;
  }, Data_Enum.defaultPred(cubeToEnum)(cubeFromEnum), Data_Enum.defaultSucc(cubeToEnum)(cubeFromEnum));
  var boundedEnumCube = new Data_Enum.BoundedEnum(function () {
      return boundedCube;
  }, function () {
      return enumCube;
  }, 5, cubeFromEnum, cubeToEnum);
  var boundedCube = new Data_Bounded.Bounded(function () {
      return ordCube;
  }, Cyan.value, Yellow.value);
  exports["Cyan"] = Cyan;
  exports["Brown"] = Brown;
  exports["Red"] = Red;
  exports["Orange"] = Orange;
  exports["Yellow"] = Yellow;
  exports["Easy"] = Easy;
  exports["Medium"] = Medium;
  exports["Hard"] = Hard;
  exports["showCube"] = showCube;
  exports["eqCube"] = eqCube;
  exports["ordCube"] = ordCube;
  exports["boundedCube"] = boundedCube;
  exports["enumCube"] = enumCube;
  exports["boundedEnumCube"] = boundedEnumCube;
  exports["showDifficulty"] = showDifficulty;
})(PS["Types"] = PS["Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Analytics"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var Prelude = PS["Prelude"];
  var Types = PS["Types"];        
  var analyticsLevelChanged = $foreign.analyticsEvent("level")("changed");
  exports["analyticsLevelChanged"] = analyticsLevelChanged;
})(PS["Analytics"] = PS["Analytics"] || {});
(function(exports) {
    "use strict";

  // module Data.Int

  exports.fromNumberImpl = function (just) {
    return function (nothing) {
      return function (n) {
        /* jshint bitwise: false */
        return (n | 0) === n ? just(n) : nothing;
      };
    };
  };

  exports.toNumber = function (n) {
    return n;
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});
(function(exports) {
  /* globals exports */
  "use strict";         

  exports.infinity = Infinity;
})(PS["Global"] = PS["Global"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Global"];
  exports["infinity"] = $foreign.infinity;
})(PS["Global"] = PS["Global"] || {});
(function(exports) {
    "use strict";

  // module Math

  exports.abs = Math.abs;  

  exports.asin = Math.asin;

  exports.cos = Math.cos;

  exports.remainder = function (n) {
    return function (m) {
      return n % m;
    };
  };

  exports.round = Math.round;

  exports.sin = Math.sin;

  exports.sqrt = Math.sqrt;    

  exports.pi = Math.PI;
})(PS["Math"] = PS["Math"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Math"];
  exports["abs"] = $foreign.abs;
  exports["asin"] = $foreign.asin;
  exports["cos"] = $foreign.cos;
  exports["pi"] = $foreign.pi;
  exports["remainder"] = $foreign.remainder;
  exports["round"] = $foreign.round;
  exports["sin"] = $foreign.sin;
  exports["sqrt"] = $foreign.sqrt;
})(PS["Math"] = PS["Math"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Int"];
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_CommutativeRing = PS["Data.CommutativeRing"];
  var Data_DivisionRing = PS["Data.DivisionRing"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Field = PS["Data.Field"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Int_Bits = PS["Data.Int.Bits"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Global = PS["Global"];
  var $$Math = PS["Math"];
  var Prelude = PS["Prelude"];      
  var fromNumber = $foreign.fromNumberImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
  var unsafeClamp = function (x) {
      if (x === Global.infinity) {
          return 0;
      };
      if (x === -Global.infinity) {
          return 0;
      };
      if (x >= $foreign.toNumber(Data_Bounded.top(Data_Bounded.boundedInt))) {
          return Data_Bounded.top(Data_Bounded.boundedInt);
      };
      if (x <= $foreign.toNumber(Data_Bounded.bottom(Data_Bounded.boundedInt))) {
          return Data_Bounded.bottom(Data_Bounded.boundedInt);
      };
      if (Data_Boolean.otherwise) {
          return Data_Maybe.fromMaybe(0)(fromNumber(x));
      };
      throw new Error("Failed pattern match at Data.Int line 64, column 1 - line 64, column 29: " + [ x.constructor.name ]);
  };
  var round = function ($23) {
      return unsafeClamp($$Math.round($23));
  };
  var even = function (x) {
      return (x & 1) === 0;
  };
  exports["even"] = even;
  exports["fromNumber"] = fromNumber;
  exports["round"] = round;
  exports["toNumber"] = $foreign.toNumber;
})(PS["Data.Int"] = PS["Data.Int"] || {});
(function(exports) {
    "use strict";

  exports._indexOf = function (just) {
    return function (nothing) {
      return function (x) {
        return function (s) {
          var i = s.indexOf(x);
          return i === -1 ? nothing : just(i);
        };
      };
    };
  };
})(PS["Data.String"] = PS["Data.String"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.String"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_String_Unsafe = PS["Data.String.Unsafe"];
  var Prelude = PS["Prelude"];                                                                
  var indexOf = $foreign._indexOf(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
  var contains = function (pat) {
      return function ($48) {
          return Data_Maybe.isJust(indexOf(pat)($48));
      };
  };
  exports["contains"] = contains;
  exports["indexOf"] = indexOf;
})(PS["Data.String"] = PS["Data.String"] || {});
(function(exports) {
    "use strict";

  exports["regex'"] = function (left) {
    return function (right) {
      return function (s1) {
        return function (s2) {
          try {
            return right(new RegExp(s1, s2));
          } catch (e) {
            return left(e.message);
          }
        };
      };
    };
  };

  exports.replace = function (r) {
    return function (s1) {
      return function (s2) {
        return s2.replace(r, s1);
      };
    };
  };
})(PS["Data.String.Regex"] = PS["Data.String.Regex"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Prelude = PS["Prelude"];        
  var RegexFlags = (function () {
      function RegexFlags(value0) {
          this.value0 = value0;
      };
      RegexFlags.create = function (value0) {
          return new RegexFlags(value0);
      };
      return RegexFlags;
  })();
  exports["RegexFlags"] = RegexFlags;
})(PS["Data.String.Regex.Flags"] = PS["Data.String.Regex.Flags"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.String.Regex"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Data_String_Regex_Flags = PS["Data.String.Regex.Flags"];
  var Prelude = PS["Prelude"];                                                    
  var renderFlags = function (v) {
      return (function () {
          if (v.value0.global) {
              return "g";
          };
          return "";
      })() + ((function () {
          if (v.value0.ignoreCase) {
              return "i";
          };
          return "";
      })() + ((function () {
          if (v.value0.multiline) {
              return "m";
          };
          return "";
      })() + ((function () {
          if (v.value0.sticky) {
              return "y";
          };
          return "";
      })() + (function () {
          if (v.value0.unicode) {
              return "u";
          };
          return "";
      })())));
  };
  var regex = function (s) {
      return function (f) {
          return $foreign["regex'"](Data_Either.Left.create)(Data_Either.Right.create)(s)(renderFlags(f));
      };
  };
  var parseFlags = function (s) {
      return new Data_String_Regex_Flags.RegexFlags({
          global: Data_String.contains("g")(s), 
          ignoreCase: Data_String.contains("i")(s), 
          multiline: Data_String.contains("m")(s), 
          sticky: Data_String.contains("y")(s), 
          unicode: Data_String.contains("u")(s)
      });
  };
  exports["parseFlags"] = parseFlags;
  exports["regex"] = regex;
  exports["renderFlags"] = renderFlags;
  exports["replace"] = $foreign.replace;
})(PS["Data.String.Regex"] = PS["Data.String.Regex"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Int = PS["Data.Int"];
  var Data_Int_Bits = PS["Data.Int.Bits"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Data_String_Regex = PS["Data.String.Regex"];
  var $$Math = PS["Math"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];
  var HSLA = (function () {
      function HSLA(value0, value1, value2, value3) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
      };
      HSLA.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return new HSLA(value0, value1, value2, value3);
                  };
              };
          };
      };
      return HSLA;
  })();
  var modPos = function (x) {
      return function (y) {
          return $$Math.remainder($$Math.remainder(x)(y) + y)(y);
      };
  };
  var rgba = function (red$prime) {
      return function (green$prime) {
          return function (blue$prime) {
              return function (alpha) {
                  var red = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(red$prime);
                  var r = Data_Int.toNumber(red) / 255.0;
                  var green = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(green$prime);
                  var g = Data_Int.toNumber(green) / 255.0;
                  var blue = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(blue$prime);
                  var maxChroma = Data_Ord.max(Data_Ord.ordInt)(Data_Ord.max(Data_Ord.ordInt)(red)(green))(blue);
                  var minChroma = Data_Ord.min(Data_Ord.ordInt)(Data_Ord.min(Data_Ord.ordInt)(red)(green))(blue);
                  var chroma = maxChroma - minChroma | 0;
                  var chroma$prime = Data_Int.toNumber(chroma) / 255.0;
                  var lightness = Data_Int.toNumber(maxChroma + minChroma | 0) / (255.0 * 2.0);
                  var saturation = (function () {
                      if (chroma === 0) {
                          return 0.0;
                      };
                      if (Data_Boolean.otherwise) {
                          return chroma$prime / (1.0 - $$Math.abs(2.0 * lightness - 1.0));
                      };
                      throw new Error("Failed pattern match at Color line 148, column 5 - line 149, column 75: " + [  ]);
                  })();
                  var b = Data_Int.toNumber(blue) / 255.0;
                  var hue$prime = function (v) {
                      if (v === 0) {
                          return 0.0;
                      };
                      if (maxChroma === red) {
                          return modPos((g - b) / chroma$prime)(6.0);
                      };
                      if (maxChroma === green) {
                          return (b - r) / chroma$prime + 2.0;
                      };
                      if (Data_Boolean.otherwise) {
                          return (r - g) / chroma$prime + 4.0;
                      };
                      throw new Error("Failed pattern match at Color line 139, column 5 - line 140, column 5: " + [ v.constructor.name ]);
                  };
                  var hue = 60.0 * hue$prime(chroma);
                  return new HSLA(hue, saturation, lightness, alpha);
              };
          };
      };
  };
  var rgb = function (r) {
      return function (g) {
          return function (b) {
              return rgba(r)(g)(b)(1.0);
          };
      };
  };
  var hsla = function (h) {
      return function (s) {
          return function (l) {
              return function (a) {
                  var s$prime = Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(1.0)(s);
                  var l$prime = Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(1.0)(l);
                  var h$prime = (function () {
                      var $61 = h === 360.0;
                      if ($61) {
                          return h;
                      };
                      return modPos(h)(360.0);
                  })();
                  var a$prime = Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(1.0)(a);
                  return new HSLA(h$prime, s$prime, l$prime, a$prime);
              };
          };
      };
  };
  var lighten = function (f) {
      return function (v) {
          return hsla(v.value0)(v.value1)(v.value2 + f)(v.value3);
      };
  };
  var hsl = function (h) {
      return function (s) {
          return function (l) {
              return hsla(h)(s)(l)(1.0);
          };
      };
  };                             
  var graytone = function (l) {
      return hsl(0.0)(0.0)(l);
  };
  var cssStringHSLA = function (v) {
      var toString = function (n) {
          return Data_Show.show(Data_Show.showNumber)(Data_Int.toNumber(Data_Int.round(100.0 * n)) / 100.0);
      };
      var saturation = toString(v.value1 * 100.0) + "%";
      var lightness = toString(v.value2 * 100.0) + "%";
      var hue = toString(v.value0);
      var alpha = Data_Show.show(Data_Show.showNumber)(v.value3);
      var $95 = v.value3 === 1.0;
      if ($95) {
          return "hsl(" + (hue + (", " + (saturation + (", " + (lightness + ")")))));
      };
      return "hsla(" + (hue + (", " + (saturation + (", " + (lightness + (", " + (alpha + ")")))))));
  };
  exports["cssStringHSLA"] = cssStringHSLA;
  exports["graytone"] = graytone;
  exports["hsl"] = hsl;
  exports["hsla"] = hsla;
  exports["lighten"] = lighten;
  exports["rgb"] = rgb;
  exports["rgba"] = rgba;
})(PS["Color"] = PS["Color"] || {});
(function(exports) {
    "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Console"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var logShow = function (dictShow) {
      return function (a) {
          return $foreign.log(Data_Show.show(dictShow)(a));
      };
  };
  exports["logShow"] = logShow;
  exports["log"] = $foreign.log;
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var MonadThrow = function (Monad0, throwError) {
      this.Monad0 = Monad0;
      this.throwError = throwError;
  };
  var throwError = function (dict) {
      return dict.throwError;
  };
  exports["MonadThrow"] = MonadThrow;
  exports["throwError"] = throwError;
})(PS["Control.Monad.Error.Class"] = PS["Control.Monad.Error.Class"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Cont_Class = PS["Control.Monad.Cont.Class"];
  var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Reader_Class = PS["Control.Monad.Reader.Class"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Monad_State_Class = PS["Control.Monad.State.Class"];
  var Control_Monad_Trans_Class = PS["Control.Monad.Trans.Class"];
  var Control_Monad_Writer_Class = PS["Control.Monad.Writer.Class"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];        
  var ExceptT = function (x) {
      return x;
  };
  var runExceptT = function (v) {
      return v;
  }; 
  var mapExceptT = function (f) {
      return function (v) {
          return f(v);
      };
  };
  var functorExceptT = function (dictFunctor) {
      return new Data_Functor.Functor(function (f) {
          return mapExceptT(Data_Functor.map(dictFunctor)(Data_Functor.map(Data_Either.functorEither)(f)));
      });
  };
  var except = function (dictApplicative) {
      return function ($96) {
          return ExceptT(Control_Applicative.pure(dictApplicative)($96));
      };
  };
  var monadExceptT = function (dictMonad) {
      return new Control_Monad.Monad(function () {
          return applicativeExceptT(dictMonad);
      }, function () {
          return bindExceptT(dictMonad);
      });
  };
  var bindExceptT = function (dictMonad) {
      return new Control_Bind.Bind(function () {
          return applyExceptT(dictMonad);
      }, function (v) {
          return function (k) {
              return Control_Bind.bind(dictMonad.Bind1())(v)(Data_Either.either(function ($97) {
                  return Control_Applicative.pure(dictMonad.Applicative0())(Data_Either.Left.create($97));
              })(function (a) {
                  var v1 = k(a);
                  return v1;
              }));
          };
      });
  };
  var applyExceptT = function (dictMonad) {
      return new Control_Apply.Apply(function () {
          return functorExceptT(((dictMonad.Bind1()).Apply0()).Functor0());
      }, Control_Monad.ap(monadExceptT(dictMonad)));
  };
  var applicativeExceptT = function (dictMonad) {
      return new Control_Applicative.Applicative(function () {
          return applyExceptT(dictMonad);
      }, function ($98) {
          return ExceptT(Control_Applicative.pure(dictMonad.Applicative0())(Data_Either.Right.create($98)));
      });
  };
  var monadThrowExceptT = function (dictMonad) {
      return new Control_Monad_Error_Class.MonadThrow(function () {
          return monadExceptT(dictMonad);
      }, function ($102) {
          return ExceptT(Control_Applicative.pure(dictMonad.Applicative0())(Data_Either.Left.create($102)));
      });
  };
  exports["ExceptT"] = ExceptT;
  exports["except"] = except;
  exports["mapExceptT"] = mapExceptT;
  exports["runExceptT"] = runExceptT;
  exports["functorExceptT"] = functorExceptT;
  exports["applyExceptT"] = applyExceptT;
  exports["applicativeExceptT"] = applicativeExceptT;
  exports["bindExceptT"] = bindExceptT;
  exports["monadExceptT"] = monadExceptT;
  exports["monadThrowExceptT"] = monadThrowExceptT;
})(PS["Control.Monad.Except.Trans"] = PS["Control.Monad.Except.Trans"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad = PS["Control.Monad"];
  var Data_BooleanAlgebra = PS["Data.BooleanAlgebra"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_CommutativeRing = PS["Data.CommutativeRing"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Field = PS["Data.Field"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Prelude = PS["Prelude"];        
  var Identity = function (x) {
      return x;
  };
  var newtypeIdentity = new Data_Newtype.Newtype(function (n) {
      return n;
  }, Identity);
  var functorIdentity = new Data_Functor.Functor(function (f) {
      return function (v) {
          return f(v);
      };
  });
  var applyIdentity = new Control_Apply.Apply(function () {
      return functorIdentity;
  }, function (v) {
      return function (v1) {
          return v(v1);
      };
  });
  var bindIdentity = new Control_Bind.Bind(function () {
      return applyIdentity;
  }, function (v) {
      return function (f) {
          return f(v);
      };
  });
  var applicativeIdentity = new Control_Applicative.Applicative(function () {
      return applyIdentity;
  }, Identity);
  var monadIdentity = new Control_Monad.Monad(function () {
      return applicativeIdentity;
  }, function () {
      return bindIdentity;
  });
  exports["Identity"] = Identity;
  exports["newtypeIdentity"] = newtypeIdentity;
  exports["functorIdentity"] = functorIdentity;
  exports["applyIdentity"] = applyIdentity;
  exports["applicativeIdentity"] = applicativeIdentity;
  exports["bindIdentity"] = bindIdentity;
  exports["monadIdentity"] = monadIdentity;
})(PS["Data.Identity"] = PS["Data.Identity"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Newtype = PS["Data.Newtype"];
  var Prelude = PS["Prelude"];                                                           
  var runExcept = function ($0) {
      return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(Control_Monad_Except_Trans.runExceptT($0));
  };
  exports["runExcept"] = runExcept;
})(PS["Control.Monad.Except"] = PS["Control.Monad.Except"] || {});
(function(exports) {
    "use strict";

  exports.eventListener = function (fn) {
    return function (event) {
      return fn(event)();
    };
  };

  exports.addEventListener = function (type) {
    return function (listener) {
      return function (useCapture) {
        return function (target) {
          return function () {
            target.addEventListener(type, listener, useCapture);
            return {};
          };
        };
      };
    };
  };
})(PS["DOM.Event.EventTarget"] = PS["DOM.Event.EventTarget"] || {});
(function(exports) {
    "use strict";

  exports.toForeign = function (value) {
    return value;
  };

  exports.unsafeFromForeign = function (value) {
    return value;
  };

  exports.tagOf = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1);
  };
})(PS["Data.Foreign"] = PS["Data.Foreign"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semigroup_Foldable = PS["Data.Semigroup.Foldable"];
  var Data_Semigroup_Traversable = PS["Data.Semigroup.Traversable"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];
  var singleton = function ($160) {
      return Data_List_Types.NonEmptyList(Data_NonEmpty.singleton(Data_List_Types.plusList)($160));
  };
  exports["singleton"] = singleton;
})(PS["Data.List.NonEmpty"] = PS["Data.List.NonEmpty"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Foreign"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
  var Control_Monad_Except = PS["Control.Monad.Except"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Identity = PS["Data.Identity"];
  var Data_Int = PS["Data.Int"];
  var Data_List_NonEmpty = PS["Data.List.NonEmpty"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_String = PS["Data.String"];
  var Prelude = PS["Prelude"];
  var TypeMismatch = (function () {
      function TypeMismatch(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      TypeMismatch.create = function (value0) {
          return function (value1) {
              return new TypeMismatch(value0, value1);
          };
      };
      return TypeMismatch;
  })();
  var fail = function ($121) {
      return Control_Monad_Error_Class.throwError(Control_Monad_Except_Trans.monadThrowExceptT(Data_Identity.monadIdentity))(Data_List_NonEmpty.singleton($121));
  };
  var unsafeReadTagged = function (tag) {
      return function (value) {
          if ($foreign.tagOf(value) === tag) {
              return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))($foreign.unsafeFromForeign(value));
          };
          if (Data_Boolean.otherwise) {
              return fail(new TypeMismatch(tag, $foreign.tagOf(value)));
          };
          throw new Error("Failed pattern match at Data.Foreign line 104, column 1 - line 104, column 55: " + [ tag.constructor.name, value.constructor.name ]);
      };
  };
  exports["TypeMismatch"] = TypeMismatch;
  exports["fail"] = fail;
  exports["unsafeReadTagged"] = unsafeReadTagged;
  exports["toForeign"] = $foreign.toForeign;
})(PS["Data.Foreign"] = PS["Data.Foreign"] || {});
(function(exports) {
    "use strict";

  // module Unsafe.Coerce

  exports.unsafeCoerce = function (x) {
    return x;
  };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Unsafe.Coerce"];
  exports["unsafeCoerce"] = $foreign.unsafeCoerce;
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.Event.Types"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Either = PS["Data.Either"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Identity = PS["Data.Identity"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];                         
  var readKeyboardEvent = Data_Foreign.unsafeReadTagged("KeyboardEvent");
  exports["readKeyboardEvent"] = readKeyboardEvent;
})(PS["DOM.Event.Types"] = PS["DOM.Event.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.Event.EventTarget"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
  var DOM = PS["DOM"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var Prelude = PS["Prelude"];
  exports["addEventListener"] = $foreign.addEventListener;
  exports["eventListener"] = $foreign.eventListener;
})(PS["DOM.Event.EventTarget"] = PS["DOM.Event.EventTarget"] || {});
(function(exports) {
  /* global window */
  "use strict";

  exports.window = function () {
    return window;
  };
})(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
(function(exports) {
    "use strict";

  exports._readHTMLElement = function (failure) {
    return function (success) {
      return function (value) {
        var tag = Object.prototype.toString.call(value);
        if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
          return success(value);
        } else {
          return failure(tag);
        }
      };
    };
  };
})(PS["DOM.HTML.Types"] = PS["DOM.HTML.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_Util_FFI = PS["DOM.Util.FFI"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];
  var elementToParentNode = Unsafe_Coerce.unsafeCoerce;              
  var elementToNode = Unsafe_Coerce.unsafeCoerce;
  var elementToEventTarget = Unsafe_Coerce.unsafeCoerce;
  var documentToNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
  exports["documentToNonElementParentNode"] = documentToNonElementParentNode;
  exports["elementToEventTarget"] = elementToEventTarget;
  exports["elementToNode"] = elementToNode;
  exports["elementToParentNode"] = elementToParentNode;
})(PS["DOM.Node.Types"] = PS["DOM.Node.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.HTML.Types"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Either = PS["Data.Either"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Identity = PS["Data.Identity"];
  var Data_List_Types = PS["Data.List.Types"];
  var Prelude = PS["Prelude"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];        
  var windowToEventTarget = Unsafe_Coerce.unsafeCoerce;                        
  var readHTMLElement = $foreign._readHTMLElement(function ($0) {
      return Control_Monad_Except_Trans.except(Data_Identity.applicativeIdentity)(Data_Either.Left.create(Control_Applicative.pure(Data_List_Types.applicativeNonEmptyList)(Data_Foreign.TypeMismatch.create("HTMLElement")($0))));
  })(function ($1) {
      return Control_Monad_Except_Trans.except(Data_Identity.applicativeIdentity)(Data_Either.Right.create($1));
  });                                                
  var htmlElementToEventTarget = Unsafe_Coerce.unsafeCoerce;
  var htmlElementToElement = Unsafe_Coerce.unsafeCoerce;     
  var htmlDocumentToDocument = Unsafe_Coerce.unsafeCoerce;
  exports["htmlDocumentToDocument"] = htmlDocumentToDocument;
  exports["htmlElementToElement"] = htmlElementToElement;
  exports["htmlElementToEventTarget"] = htmlElementToEventTarget;
  exports["readHTMLElement"] = readHTMLElement;
  exports["windowToEventTarget"] = windowToEventTarget;
})(PS["DOM.HTML.Types"] = PS["DOM.HTML.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.HTML"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  exports["window"] = $foreign.window;
})(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var keydown = "keydown";  
  var click = "click";
  var change = "change";
  exports["change"] = change;
  exports["click"] = click;
  exports["keydown"] = keydown;
})(PS["DOM.HTML.Event.EventTypes"] = PS["DOM.HTML.Event.EventTypes"] || {});
(function(exports) {
    "use strict";

  exports.document = function (window) {
    return function () {
      return window.document;
    };
  };
})(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
(function(exports) {
    "use strict";        

  exports.nullable = function (a, r, f) {
    return a == null ? r : f(a);
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Nullable"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];                                          
  var toMaybe = function (n) {
      return $foreign.nullable(n, Data_Maybe.Nothing.value, Data_Maybe.Just.create);
  };
  exports["toMaybe"] = toMaybe;
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.HTML.Window"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_WebStorage_Types = PS["DOM.WebStorage.Types"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Nullable = PS["Data.Nullable"];
  var Data_Ord = PS["Data.Ord"];
  var Prelude = PS["Prelude"];
  exports["document"] = $foreign.document;
})(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
(function(exports) {
    "use strict";

  exports.createElement = function (localName) {
    return function (doc) {
      return function () {
        return doc.createElement(localName);
      };
    };
  };
})(PS["DOM.Node.Document"] = PS["DOM.Node.Document"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.Node.Document"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Nullable = PS["Data.Nullable"];
  var Prelude = PS["Prelude"];
  exports["createElement"] = $foreign.createElement;
})(PS["DOM.Node.Document"] = PS["DOM.Node.Document"] || {});
(function(exports) {
    "use strict";

  exports.setAttribute = function (name) {
    return function (value) {
      return function (element) {
        return function () {
          element.setAttribute(name, value);
          return {};
        };
      };
    };
  };

  exports._getAttribute = function (name) {
    return function (element) {
      return function () {
        return element.getAttribute(name);
      };
    };
  };
})(PS["DOM.Node.Element"] = PS["DOM.Node.Element"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.Node.Element"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Nullable = PS["Data.Nullable"];
  var Prelude = PS["Prelude"];
  var getAttribute = function (attr) {
      return function ($3) {
          return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._getAttribute(attr)($3));
      };
  };
  exports["getAttribute"] = getAttribute;
  exports["setAttribute"] = $foreign.setAttribute;
})(PS["DOM.Node.Element"] = PS["DOM.Node.Element"] || {});
(function(exports) {
    "use strict";

  var getEffProp = function (name) {
    return function (node) {
      return function () {
        return node[name];
      };
    };
  };                                             

  exports._parentElement = getEffProp("parentElement");

  exports.textContent = getEffProp("textContent");

  exports.setTextContent = function (value) {
    return function (node) {
      return function () {
        node.textContent = value;
        return {};
      };
    };
  };

  exports.appendChild = function (node) {
    return function (parent) {
      return function () {
        return parent.appendChild(node);
      };
    };
  };
})(PS["DOM.Node.Node"] = PS["DOM.Node.Node"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.Node.Node"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Node_NodeType = PS["DOM.Node.NodeType"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Enum = PS["Data.Enum"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Nullable = PS["Data.Nullable"];
  var Prelude = PS["Prelude"];
  var parentElement = function ($3) {
      return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._parentElement($3));
  };
  exports["parentElement"] = parentElement;
  exports["appendChild"] = $foreign.appendChild;
  exports["setTextContent"] = $foreign.setTextContent;
})(PS["DOM.Node.Node"] = PS["DOM.Node.Node"] || {});
(function(exports) {
    "use strict";

  exports._getElementById = function (id) {
    return function (node) {
      return function () {
        return node.getElementById(id);
      };
    };
  };
})(PS["DOM.Node.NonElementParentNode"] = PS["DOM.Node.NonElementParentNode"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.Node.NonElementParentNode"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Nullable = PS["Data.Nullable"];
  var Prelude = PS["Prelude"];        
  var getElementById = function (eid) {
      return function ($0) {
          return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._getElementById(eid)($0));
      };
  };
  exports["getElementById"] = getElementById;
})(PS["DOM.Node.NonElementParentNode"] = PS["DOM.Node.NonElementParentNode"] || {});
(function(exports) {
    "use strict";

  var getEffProp = function (name) {
    return function (node) {
      return function () {
        return node[name];
      };
    };
  };

  exports.children = getEffProp("children");
})(PS["DOM.Node.ParentNode"] = PS["DOM.Node.ParentNode"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOM.Node.ParentNode"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Nullable = PS["Data.Nullable"];
  var Data_Ord = PS["Data.Ord"];
  var Prelude = PS["Prelude"];
  exports["children"] = $foreign.children;
})(PS["DOM.Node.ParentNode"] = PS["DOM.Node.ParentNode"] || {});
(function(exports) {exports.getSelectedValue = function (src) {
      return function() {
          return src.options[src.selectedIndex].value;
      };
  };

  exports.setInnerHTML = function (value) {
    return function (element) {
      return function () {
        element.innerHTML = value;
        return {};
      };
    };
  };

  exports.htmlCollectionToArray = function (collection) {
    return Array.prototype.slice.call(collection);
  };

  exports.keyCode = function (ev) {
    return ev.keyCode;
  };

  exports.ctrlKey = function (ev) {
    return ev.ctrlKey;
  };

  exports.setStyleAttribute = function (name) {
    return function (value) {
      return function (element) {
        return function () {
          element.style[name] = value;
          return {};
        };
      };
    };
  };


  exports.classAdd = function (value) {
    return function (element) {
      return function () {
        element.classList.add(value);
        return {};
      };
    };
  };

  exports.classRemove = function (value) {
    return function (element) {
      return function () {
        element.classList.remove(value);
        return {};
      };
    };
  };
})(PS["DOMHelper"] = PS["DOMHelper"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["DOMHelper"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Except = PS["Control.Monad.Except"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Event_EventTarget = PS["DOM.Event.EventTarget"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_HTML = PS["DOM.HTML"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_HTML_Window = PS["DOM.HTML.Window"];
  var DOM_Node_Element = PS["DOM.Node.Element"];
  var DOM_Node_NonElementParentNode = PS["DOM.Node.NonElementParentNode"];
  var DOM_Node_ParentNode = PS["DOM.Node.ParentNode"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Either = PS["Data.Either"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Unit = PS["Data.Unit"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];        
  var unsafeGetAttribute = function (key) {
      return function (el) {
          return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Maybe.fromJust())(DOM_Node_Element.getAttribute(key)(el));
      };
  };
  var unsafeEventToKeyboardEvent = function ($3) {
      return Data_Either.fromRight()(Control_Monad_Except.runExcept(DOM_Event_Types.readKeyboardEvent(Data_Foreign.toForeign($3))));
  };
  var unsafeElementToHTMLElement = function ($4) {
      return Data_Either.fromRight()(Control_Monad_Except.runExcept(DOM_HTML_Types.readHTMLElement(Data_Foreign.toForeign($4))));
  };
  var getElementById$prime = function (id) {
      return function (doc) {
          var docNode = DOM_Node_Types.documentToNonElementParentNode(doc);
          return DOM_Node_NonElementParentNode.getElementById(id)(docNode);
      };
  };
  var withElementById = function (id) {
      return function (doc) {
          return function (action) {
              return Control_Bind.bind(Control_Monad_Eff.bindEff)(getElementById$prime(id)(doc))(Data_Maybe.maybe(Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit))(action));
          };
      };
  };
  var getDocument = Data_Functor.mapFlipped(Control_Monad_Eff.functorEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(DOM_HTML.window)(DOM_HTML_Window.document))(DOM_HTML_Types.htmlDocumentToDocument);
  var children$prime = function (el) {
      return Data_Functor.map(Control_Monad_Eff.functorEff)($foreign.htmlCollectionToArray)(DOM_Node_ParentNode.children(DOM_Node_Types.elementToParentNode(el)));
  };
  var addEventListener$prime = function (etype) {
      return function (listener) {
          return function (target) {
              return DOM_Event_EventTarget.addEventListener(etype)(DOM_Event_EventTarget.eventListener(listener))(true)(target);
          };
      };
  };
  exports["addEventListener'"] = addEventListener$prime;
  exports["children'"] = children$prime;
  exports["getDocument"] = getDocument;
  exports["getElementById'"] = getElementById$prime;
  exports["unsafeElementToHTMLElement"] = unsafeElementToHTMLElement;
  exports["unsafeEventToKeyboardEvent"] = unsafeEventToKeyboardEvent;
  exports["unsafeGetAttribute"] = unsafeGetAttribute;
  exports["withElementById"] = withElementById;
  exports["classAdd"] = $foreign.classAdd;
  exports["classRemove"] = $foreign.classRemove;
  exports["ctrlKey"] = $foreign.ctrlKey;
  exports["getSelectedValue"] = $foreign.getSelectedValue;
  exports["keyCode"] = $foreign.keyCode;
  exports["setInnerHTML"] = $foreign.setInnerHTML;
  exports["setStyleAttribute"] = $foreign.setStyleAttribute;
})(PS["DOMHelper"] = PS["DOMHelper"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Prelude = PS["Prelude"];        
  var toList = function (v) {
      return new Data_List_Types.Cons(v.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value1.value1.value0, v.value1.value1.value1)));
  };
  var reverse = function (v) {
      var v1 = Data_List.reverse(v.value1.value1.value1);
      if (v1 instanceof Data_List_Types.Nil) {
          return new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value0, new Data_NonEmpty.NonEmpty(v.value0, Data_List_Types.Nil.value)));
      };
      if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil) {
          return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value))));
      };
      if (v1 instanceof Data_List_Types.Cons && (v1.value1 instanceof Data_List_Types.Cons && v1.value1.value1 instanceof Data_List_Types.Nil)) {
          return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value)))));
      };
      if (v1 instanceof Data_List_Types.Cons && (v1.value1 instanceof Data_List_Types.Cons && v1.value1.value1 instanceof Data_List_Types.Cons)) {
          return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value1.value0, Data_Semigroup.append(Data_List_Types.semigroupList)(v1.value1.value1.value1)(new Data_List_Types.Cons(v.value1.value1.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value)))))));
      };
      throw new Error("Failed pattern match at Data.List.ThreeOrMore line 25, column 3 - line 29, column 64: " + [ v1.constructor.name ]);
  };
  var last = function (v) {
      return Data_Maybe.fromMaybe(v.value1.value1.value0)(Data_List.last(v.value1.value1.value1));
  };
  exports["last"] = last;
  exports["reverse"] = reverse;
  exports["toList"] = toList;
})(PS["Data.List.ThreeOrMore"] = PS["Data.List.ThreeOrMore"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.getCanvasElementByIdImpl = function(id, Just, Nothing) {
      return function() {
          var el = document.getElementById(id);
          if (el && el instanceof HTMLCanvasElement) {
              return Just(el);
          } else {
              return Nothing;
          }
      };
  };

  exports.getContext2D = function(c) {
      return function() {
          return c.getContext('2d');
      };
  };

  exports.getCanvasWidth = function(canvas) {
      return function() {
          return canvas.width;
      };
  };

  exports.getCanvasHeight = function(canvas) {
      return function() {
          return canvas.height;
      };
  };

  exports.setLineWidth = function(width) {
      return function(ctx) {
          return function() {
              ctx.lineWidth = width;
              return ctx;
          };
      };
  };

  exports.setFillStyle = function(style) {
      return function(ctx) {
          return function() {
              ctx.fillStyle = style;
              return ctx;
          };
      };
  };

  exports.setStrokeStyle = function(style) {
      return function(ctx) {
          return function() {
              ctx.strokeStyle = style;
              return ctx;
          };
      };
  };

  exports.setShadowColor = function(color) {
      return function(ctx) {
          return function() {
              ctx.shadowColor = color;
              return ctx;
          };
      };
  };

  exports.setShadowBlur = function(blur) {
      return function(ctx) {
          return function() {
              ctx.shadowBlur = blur;
              return ctx;
          };
      };
  };

  exports.setShadowOffsetX = function(offsetX) {
      return function(ctx) {
          return function() {
              ctx.shadowOffsetX = offsetX;
              return ctx;
          };
      };
  };

  exports.setShadowOffsetY = function(offsetY) {
      return function(ctx) {
          return function() {
              ctx.shadowOffsetY = offsetY;
              return ctx;
          };
      };
  };

  exports.beginPath = function(ctx) {
      return function() {
          ctx.beginPath();
          return ctx;
      };
  };

  exports.stroke = function(ctx) {
      return function() {
          ctx.stroke();
          return ctx;
      };
  };

  exports.fill = function(ctx) {
      return function() {
          ctx.fill();
          return ctx;
      };
  };

  exports.clip = function(ctx) {
      return function() {
          ctx.clip();
          return ctx;
      };
  };

  exports.lineTo = function(ctx) {
      return function(x) {
          return function(y) {
              return function() {
                  ctx.lineTo(x, y);
                  return ctx;
              };
          };
      };
  };

  exports.moveTo = function(ctx) {
      return function(x) {
          return function(y) {
              return function() {
                  ctx.moveTo(x, y);
                  return ctx;
              };
          };
      };
  };

  exports.closePath = function(ctx) {
      return function() {
          ctx.closePath();
          return ctx;
      };
  };

  exports.arc = function(ctx) {
      return function(a) {
          return function() {
              ctx.arc(a.x, a.y, a.r, a.start, a.end);
              return ctx;
          };
      };
  };

  exports.rect = function(ctx) {
      return function(r) {
          return function() {
              ctx.rect(r.x, r.y, r.w, r.h);
              return ctx;
          };
      };
  };

  exports.scale = function(t) {
      return function(ctx) {
          return function() {
              ctx.scale(t.scaleX, t.scaleY);
              return ctx;
          };
      };
  };

  exports.rotate = function(angle) {
      return function(ctx) {
          return function() {
              ctx.rotate(angle);
              return ctx;
          };
      };
  };

  exports.translate = function(t) {
      return function(ctx) {
          return function() {
              ctx.translate(t.translateX, t.translateY);
              return ctx;
          };
      };
  };

  exports.clearRect = function(ctx) {
      return function(r) {
          return function() {
              ctx.clearRect(r.x, r.y, r.w, r.h);
              return ctx;
          };
      };
  };

  exports.font = function(ctx) {
      return function() {
          return ctx.font;
      };
  };

  exports.setFont = function(fontspec) {
      return function(ctx) {
          return function() {
              ctx.font = fontspec;
              return ctx;
          };
      };
  };

  exports.fillText = function(ctx) {
      return function(text) {
          return function(x) {
              return function(y) {
                  return function() {
                      ctx.fillText(text, x, y);
                      return ctx;
                  };
              };
          };
      };
  };

  exports.save = function(ctx) {
      return function() {
          ctx.save();
          return ctx;
      };
  };

  exports.restore = function(ctx) {
      return function() {
          ctx.restore();
          return ctx;
      };
  };
})(PS["Graphics.Canvas"] = PS["Graphics.Canvas"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Graphics.Canvas"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Exception_Unsafe = PS["Control.Monad.Eff.Exception.Unsafe"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_ArrayBuffer_Types = PS["Data.ArrayBuffer.Types"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];
  var withContext = function (ctx) {
      return function (action) {
          return function __do() {
              var v = $foreign.save(ctx)();
              var v1 = action();
              var v2 = $foreign.restore(ctx)();
              return v1;
          };
      };
  };
  var strokePath = function (ctx) {
      return function (path) {
          return function __do() {
              var v = $foreign.beginPath(ctx)();
              var v1 = path();
              var v2 = $foreign.stroke(ctx)();
              return v1;
          };
      };
  };
  var getCanvasElementById = function (elId) {
      return $foreign.getCanvasElementByIdImpl(elId, Data_Maybe.Just.create, Data_Maybe.Nothing.value);
  };
  var fillPath = function (ctx) {
      return function (path) {
          return function __do() {
              var v = $foreign.beginPath(ctx)();
              var v1 = path();
              var v2 = $foreign.fill(ctx)();
              return v1;
          };
      };
  };
  exports["fillPath"] = fillPath;
  exports["getCanvasElementById"] = getCanvasElementById;
  exports["strokePath"] = strokePath;
  exports["withContext"] = withContext;
  exports["arc"] = $foreign.arc;
  exports["clearRect"] = $foreign.clearRect;
  exports["clip"] = $foreign.clip;
  exports["closePath"] = $foreign.closePath;
  exports["fillText"] = $foreign.fillText;
  exports["getCanvasHeight"] = $foreign.getCanvasHeight;
  exports["getCanvasWidth"] = $foreign.getCanvasWidth;
  exports["getContext2D"] = $foreign.getContext2D;
  exports["lineTo"] = $foreign.lineTo;
  exports["moveTo"] = $foreign.moveTo;
  exports["rect"] = $foreign.rect;
  exports["rotate"] = $foreign.rotate;
  exports["scale"] = $foreign.scale;
  exports["setFillStyle"] = $foreign.setFillStyle;
  exports["setFont"] = $foreign.setFont;
  exports["setLineWidth"] = $foreign.setLineWidth;
  exports["setShadowBlur"] = $foreign.setShadowBlur;
  exports["setShadowColor"] = $foreign.setShadowColor;
  exports["setShadowOffsetX"] = $foreign.setShadowOffsetX;
  exports["setShadowOffsetY"] = $foreign.setShadowOffsetY;
  exports["setStrokeStyle"] = $foreign.setStrokeStyle;
  exports["translate"] = $foreign.translate;
})(PS["Graphics.Canvas"] = PS["Graphics.Canvas"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"]; 
  var optionsString = function (v) {
      return Data_Foldable.intercalate(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(" ")([ Data_Foldable.fold(Data_Foldable.foldableMaybe)(Data_Monoid.monoidString)(v.style), Data_Foldable.fold(Data_Foldable.foldableMaybe)(Data_Monoid.monoidString)(v.variant), Data_Foldable.fold(Data_Foldable.foldableMaybe)(Data_Monoid.monoidString)(v.weight) ]);
  };
  var fontString = function (v) {
      return optionsString(v.value2) + (" " + (Data_Show.show(Data_Show.showInt)(v.value1) + ("px " + v.value0)));
  };
  exports["fontString"] = fontString;
})(PS["Graphics.Drawing.Font"] = PS["Graphics.Drawing.Font"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Color = PS["Color"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Unit = PS["Data.Unit"];
  var Graphics_Canvas = PS["Graphics.Canvas"];
  var Graphics_Drawing_Font = PS["Graphics.Drawing.Font"];
  var $$Math = PS["Math"];
  var Prelude = PS["Prelude"];
  var Path = (function () {
      function Path(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Path.create = function (value0) {
          return function (value1) {
              return new Path(value0, value1);
          };
      };
      return Path;
  })();
  var Rectangle = (function () {
      function Rectangle(value0) {
          this.value0 = value0;
      };
      Rectangle.create = function (value0) {
          return new Rectangle(value0);
      };
      return Rectangle;
  })();
  var Arc = (function () {
      function Arc(value0) {
          this.value0 = value0;
      };
      Arc.create = function (value0) {
          return new Arc(value0);
      };
      return Arc;
  })();
  var Composite = (function () {
      function Composite(value0) {
          this.value0 = value0;
      };
      Composite.create = function (value0) {
          return new Composite(value0);
      };
      return Composite;
  })();
  var Fill = (function () {
      function Fill(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Fill.create = function (value0) {
          return function (value1) {
              return new Fill(value0, value1);
          };
      };
      return Fill;
  })();
  var Outline = (function () {
      function Outline(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Outline.create = function (value0) {
          return function (value1) {
              return new Outline(value0, value1);
          };
      };
      return Outline;
  })();
  var Text = (function () {
      function Text(value0, value1, value2, value3, value4) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value2;
          this.value3 = value3;
          this.value4 = value4;
      };
      Text.create = function (value0) {
          return function (value1) {
              return function (value2) {
                  return function (value3) {
                      return function (value4) {
                          return new Text(value0, value1, value2, value3, value4);
                      };
                  };
              };
          };
      };
      return Text;
  })();
  var Many = (function () {
      function Many(value0) {
          this.value0 = value0;
      };
      Many.create = function (value0) {
          return new Many(value0);
      };
      return Many;
  })();
  var Scale = (function () {
      function Scale(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Scale.create = function (value0) {
          return function (value1) {
              return new Scale(value0, value1);
          };
      };
      return Scale;
  })();
  var Translate = (function () {
      function Translate(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Translate.create = function (value0) {
          return function (value1) {
              return new Translate(value0, value1);
          };
      };
      return Translate;
  })();
  var Rotate = (function () {
      function Rotate(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Rotate.create = function (value0) {
          return function (value1) {
              return new Rotate(value0, value1);
          };
      };
      return Rotate;
  })();
  var Clipped = (function () {
      function Clipped(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Clipped.create = function (value0) {
          return function (value1) {
              return new Clipped(value0, value1);
          };
      };
      return Clipped;
  })();
  var WithShadow = (function () {
      function WithShadow(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      WithShadow.create = function (value0) {
          return function (value1) {
              return new WithShadow(value0, value1);
          };
      };
      return WithShadow;
  })();
  var translate = function (tx) {
      return function (ty) {
          return Translate.create({
              translateX: tx, 
              translateY: ty
          });
      };
  }; 
  var semigroupDrawing = new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
          if (v instanceof Many) {
              return new Many(Data_Semigroup.append(Data_List_Types.semigroupList)(v.value0)(Data_List.singleton(v1)));
          };
          if (v1 instanceof Many) {
              return new Many(new Data_List_Types.Cons(v, v1.value0));
          };
          return new Many(new Data_List_Types.Cons(v, new Data_List_Types.Cons(v1, Data_List_Types.Nil.value)));
      };
  });
  var scale = function (sx) {
      return function (sy) {
          return Scale.create({
              scaleX: sx, 
              scaleY: sy
          });
      };
  };
  var rotate = Rotate.create;
  var render = function (ctx) {
      var renderShape = function (v) {
          if (v instanceof Path && v.value1 instanceof Data_List_Types.Nil) {
              return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
          };
          if (v instanceof Path && v.value1 instanceof Data_List_Types.Cons) {
              return function __do() {
                  var v1 = Graphics_Canvas.moveTo(ctx)(v.value1.value0.x)(v.value1.value0.y)();
                  Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(v.value1.value1)(function (pt) {
                      return Graphics_Canvas.lineTo(ctx)(pt.x)(pt.y);
                  })();
                  return Control_Applicative.when(Control_Monad_Eff.applicativeEff)(v.value0)(Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.closePath(ctx)))();
              };
          };
          if (v instanceof Rectangle) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.rect(ctx)(v.value0));
          };
          if (v instanceof Arc) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.arc(ctx)(v.value0));
          };
          if (v instanceof Composite) {
              return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(v.value0)(renderShape);
          };
          throw new Error("Failed pattern match at Graphics.Drawing line 289, column 3 - line 289, column 67: " + [ v.constructor.name ]);
      };
      var applyShadow = function (v) {
          return function __do() {
              Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.color)(function (color) {
                  return Graphics_Canvas.setShadowColor(Color.cssStringHSLA(color))(ctx);
              })();
              Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.blur)(function (blur) {
                  return Graphics_Canvas.setShadowBlur(blur)(ctx);
              })();
              return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.offset)(function (offset) {
                  return function __do() {
                      var v1 = Graphics_Canvas.setShadowOffsetX(offset.x)(ctx)();
                      return Graphics_Canvas.setShadowOffsetY(offset.y)(ctx)();
                  };
              })();
          };
      };
      var applyOutlineStyle = function (v) {
          return function __do() {
              Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.color)(function (color) {
                  return Graphics_Canvas.setStrokeStyle(Color.cssStringHSLA(color))(ctx);
              })();
              return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.lineWidth)(function (width) {
                  return Graphics_Canvas.setLineWidth(width)(ctx);
              })();
          };
      };
      var applyFillStyle = function (v) {
          return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.color)(function (color) {
              return Graphics_Canvas.setFillStyle(Color.cssStringHSLA(color))(ctx);
          });
      };
      var go = function (v) {
          if (v instanceof Fill) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                  applyFillStyle(v.value1)();
                  return Graphics_Canvas.fillPath(ctx)(renderShape(v.value0))();
              }));
          };
          if (v instanceof Outline) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                  applyOutlineStyle(v.value1)();
                  return Graphics_Canvas.strokePath(ctx)(renderShape(v.value0))();
              }));
          };
          if (v instanceof Many) {
              return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(v.value0)(go);
          };
          if (v instanceof Scale) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                  var v1 = Graphics_Canvas.scale(v.value0)(ctx)();
                  return go(v.value1)();
              }));
          };
          if (v instanceof Translate) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                  var v1 = Graphics_Canvas.translate(v.value0)(ctx)();
                  return go(v.value1)();
              }));
          };
          if (v instanceof Rotate) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                  var v1 = Graphics_Canvas.rotate(v.value0)(ctx)();
                  return go(v.value1)();
              }));
          };
          if (v instanceof Clipped) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                  renderShape(v.value0)();
                  var v1 = Graphics_Canvas.clip(ctx)();
                  return go(v.value1)();
              }));
          };
          if (v instanceof WithShadow) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                  applyShadow(v.value0)();
                  return go(v.value1)();
              }));
          };
          if (v instanceof Text) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                  var v1 = Graphics_Canvas.setFont(Graphics_Drawing_Font.fontString(v.value0))(ctx)();
                  applyFillStyle(v.value3)();
                  return Graphics_Canvas.fillText(ctx)(v.value4)(v.value1)(v.value2)();
              }));
          };
          throw new Error("Failed pattern match at Graphics.Drawing line 242, column 3 - line 245, column 21: " + [ v.constructor.name ]);
      };
      return go;
  }; 
  var monoidDrawing = new Data_Monoid.Monoid(function () {
      return semigroupDrawing;
  }, new Many(Data_Monoid.mempty(Data_List_Types.monoidList)));
  var lineWidth = function (c) {
      return {
          color: Data_Maybe.Nothing.value, 
          lineWidth: new Data_Maybe.Just(c)
      };
  };
  var filled = Data_Function.flip(Fill.create);
  var fillColor = function (c) {
      return {
          color: new Data_Maybe.Just(c)
      };
  }; 
  var closed = function (dictFoldable) {
      return function ($204) {
          return Path.create(true)(Data_List.fromFoldable(dictFoldable)($204));
      };
  };                           
  var arc = function (x) {
      return function (y) {
          return function (start) {
              return function (end) {
                  return function (r) {
                      return new Arc({
                          x: x, 
                          y: y, 
                          start: start, 
                          end: end, 
                          r: r
                      });
                  };
              };
          };
      };
  };
  exports["arc"] = arc;
  exports["closed"] = closed;
  exports["fillColor"] = fillColor;
  exports["filled"] = filled;
  exports["lineWidth"] = lineWidth;
  exports["render"] = render;
  exports["rotate"] = rotate;
  exports["scale"] = scale;
  exports["translate"] = translate;
  exports["semigroupDrawing"] = semigroupDrawing;
  exports["monoidDrawing"] = monoidDrawing;
})(PS["Graphics.Drawing"] = PS["Graphics.Drawing"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Graphics_Drawing = PS["Graphics.Drawing"];
  var Graphics_Isometric_Types = PS["Graphics.Isometric.Types"];
  var $$Math = PS["Math"];
  var Prelude = PS["Prelude"];        
  var vector = function (v) {
      return function (v1) {
          return {
              x: v1.x - v.x, 
              y: v1.y - v.y, 
              z: v1.z - v.z
          };
      };
  };
  var translateZ = function (dz) {
      return function (v) {
          return {
              x: v.x, 
              y: v.y, 
              z: v.z + dz
          };
      };
  };
  var translate = function (v) {
      return function (v1) {
          return {
              x: v.x + v1.x, 
              y: v.y + v1.y, 
              z: v.z + v1.z
          };
      };
  };
  var scale = function (f) {
      return function (v) {
          return {
              x: f * v.x, 
              y: f * v.y, 
              z: f * v.z
          };
      };
  };
  var rotateZ = function (phi) {
      return function (v) {
          return {
              x: $$Math.cos(phi) * v.x - $$Math.sin(phi) * v.y, 
              y: $$Math.sin(phi) * v.x + $$Math.cos(phi) * v.y, 
              z: v.z
          };
      };
  };
  var rotateX = function (phi) {
      return function (v) {
          return {
              x: v.x, 
              y: $$Math.cos(phi) * v.y - $$Math.sin(phi) * v.z, 
              z: $$Math.sin(phi) * v.y + $$Math.cos(phi) * v.z
          };
      };
  };
  var from2D = function (v) {
      return {
          x: v.x, 
          y: v.y, 
          z: 0.0
      };
  };
  var dot = function (v) {
      return function (v1) {
          return v.x * v1.x + v.y * v1.y + v.z * v1.z;
      };
  };
  var norm = function (p) {
      return $$Math.sqrt(dot(p)(p));
  };
  var normalize = function (p) {
      var n = norm(p);
      return {
          x: p.x / n, 
          y: p.y / n, 
          z: p.z / n
      };
  };
  var depth = function (p) {
      return p.x + p.y + p.z;
  };
  var cross = function (v) {
      return function (v1) {
          return {
              x: v.y * v1.z - v.z * v1.y, 
              y: v.z * v1.x - v.x * v1.z, 
              z: v.x * v1.y - v.y * v1.x
          };
      };
  };
  exports["cross"] = cross;
  exports["depth"] = depth;
  exports["dot"] = dot;
  exports["from2D"] = from2D;
  exports["norm"] = norm;
  exports["normalize"] = normalize;
  exports["rotateX"] = rotateX;
  exports["rotateZ"] = rotateZ;
  exports["scale"] = scale;
  exports["translate"] = translate;
  exports["translateZ"] = translateZ;
  exports["vector"] = vector;
})(PS["Graphics.Isometric.Point"] = PS["Graphics.Isometric.Point"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Color = PS["Color"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Int = PS["Data.Int"];
  var Data_List = PS["Data.List"];
  var Data_List_ThreeOrMore = PS["Data.List.ThreeOrMore"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Graphics_Drawing = PS["Graphics.Drawing"];
  var Graphics_Isometric_Point = PS["Graphics.Isometric.Point"];
  var Graphics_Isometric_Types = PS["Graphics.Isometric.Types"];
  var $$Math = PS["Math"];
  var Prelude = PS["Prelude"];        
  var Fill = (function () {
      function Fill(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Fill.create = function (value0) {
          return function (value1) {
              return new Fill(value0, value1);
          };
      };
      return Fill;
  })();
  var Many = (function () {
      function Many(value0) {
          this.value0 = value0;
      };
      Many.create = function (value0) {
          return new Many(value0);
      };
      return Many;
  })();
  var transform = function (t) {
      var go = function (v) {
          if (v instanceof Fill) {
              return new Fill(v.value0, Data_Functor.map(Data_List_Types.functorList)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(t))(v.value1));
          };
          if (v instanceof Many) {
              return new Many(Data_Functor.map(Data_List_Types.functorList)(transform(t))(v.value0));
          };
          throw new Error("Failed pattern match at Graphics.Isometric line 149, column 5 - line 149, column 57: " + [ v.constructor.name ]);
      };
      return go;
  };
  var translateZ = function (dz) {
      return transform(Graphics_Isometric_Point.translateZ(dz));
  };
  var semigroupScene = new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
          if (v instanceof Many) {
              return new Many(Data_Semigroup.append(Data_List_Types.semigroupList)(v.value0)(Data_List.singleton(v1)));
          };
          if (v1 instanceof Many) {
              return new Many(new Data_List_Types.Cons(v, v1.value0));
          };
          return new Many(new Data_List_Types.Cons(v, new Data_List_Types.Cons(v1, Data_List_Types.Nil.value)));
      };
  });
  var scale = function (factor) {
      return transform(Graphics_Isometric_Point.scale(factor));
  };
  var rotateZ = function (angle) {
      return transform(Graphics_Isometric_Point.rotateZ(angle));
  };
  var rotateX = function (angle) {
      return transform(Graphics_Isometric_Point.rotateX(angle));
  };
  var move = function (v) {
      return Data_Functor.map(Data_List_Types.functorList)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(Graphics_Isometric_Point.translate(v)));
  };
  var monoidScene = new Data_Monoid.Monoid(function () {
      return semigroupScene;
  }, new Many(Data_Monoid.mempty(Data_List_Types.monoidList)));
  var isometricAngle = $$Math.pi / 2.0 - $$Math.asin(1.0 / $$Math.sqrt(3.0));
  var project = function (p) {
      var beta = $$Math.pi / 4.0;
      var rotated = Graphics_Isometric_Point.rotateX(isometricAngle)(Graphics_Isometric_Point.rotateZ(beta)(p));
      return {
          x: -rotated.x, 
          y: rotated.y
      };
  };
  var renderFace = function (dir) {
      return function (color) {
          return function (v) {
              var path = Graphics_Drawing.closed(Data_NonEmpty.foldableNonEmpty(Data_NonEmpty.foldableNonEmpty(Data_NonEmpty.foldableNonEmpty(Data_List_Types.foldableList))))(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(project)(v));
              var normal = Graphics_Isometric_Point.normalize(Graphics_Isometric_Point.cross(Graphics_Isometric_Point.vector(v.value0)(v.value1.value0))(Graphics_Isometric_Point.vector(v.value0)(v.value1.value1.value0)));
              var amount = 0.2 * Graphics_Isometric_Point.dot(dir)(normal);
              var col = Color.lighten(amount)(color);
              return Graphics_Drawing.filled(Graphics_Drawing.fillColor(col))(path);
          };
      };
  };
  var filled = Fill.create;
  var fillShape = function (dir) {
      return function (color) {
          return function (faces) {
              var totalDepth = function (face) {
                  return Data_Foldable.sum(Data_NonEmpty.foldableNonEmpty(Data_NonEmpty.foldableNonEmpty(Data_NonEmpty.foldableNonEmpty(Data_List_Types.foldableList))))(Data_Semiring.semiringNumber)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(Graphics_Isometric_Point.depth)(face));
              };
              var sortedFaces = Data_List.sortBy(Data_Ord.comparing(Data_Ord.ordNumber)(totalDepth))(faces);
              return Data_Foldable.foldMap(Data_List_Types.foldableList)(Graphics_Drawing.monoidDrawing)(renderFace(dir)(color))(sortedFaces);
          };
      };
  };
  var renderScene = function (dir) {
      return function (scene) {
          var dir$prime = Graphics_Isometric_Point.normalize(dir);
          var go = function (v) {
              if (v instanceof Fill) {
                  return fillShape(dir$prime)(v.value0)(v.value1);
              };
              if (v instanceof Many) {
                  return Data_Foldable.foldMap(Data_List_Types.foldableList)(Graphics_Drawing.monoidDrawing)(go)(v.value0);
              };
              throw new Error("Failed pattern match at Graphics.Isometric line 212, column 9 - line 212, column 59: " + [ v.constructor.name ]);
          };
          return go(scene);
      };
  };
  var extrude = function (path2D) {
      return function (height) {
          var raise = Graphics_Isometric_Point.translateZ(height);
          var side = function (p1) {
              return function (p2) {
                  return new Data_NonEmpty.NonEmpty(p1, new Data_NonEmpty.NonEmpty(p2, new Data_NonEmpty.NonEmpty(raise(p2), new Data_List_Types.Cons(raise(p1), Data_List_Types.Nil.value))));
              };
          };
          var path = Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(Graphics_Isometric_Point.from2D)(path2D);
          var sides = Data_List.zipWith(side)(Data_List_ThreeOrMore.toList(path))(new Data_List_Types.Cons(Data_List_ThreeOrMore.last(path), Data_List_ThreeOrMore.toList(path)));
          var top = Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(raise)(path);
          return new Data_List_Types.Cons(path, new Data_List_Types.Cons(Data_List_ThreeOrMore.reverse(top), sides));
      };
  };
  var prism = function (p) {
      return function (dx) {
          return function (dy) {
              return function (dz) {
                  var rectangle = new Data_NonEmpty.NonEmpty({
                      x: 0.0, 
                      y: 0.0
                  }, new Data_NonEmpty.NonEmpty({
                      x: 0.0, 
                      y: dy
                  }, new Data_NonEmpty.NonEmpty({
                      x: dx, 
                      y: dy
                  }, new Data_List_Types.Cons({
                      x: dx, 
                      y: 0.0
                  }, Data_List_Types.Nil.value))));
                  return move(p)(extrude(rectangle)(dz));
              };
          };
      };
  };
  var cube = function (p) {
      return function (dl) {
          return prism(p)(dl)(dl)(dl);
      };
  };
  exports["Fill"] = Fill;
  exports["Many"] = Many;
  exports["cube"] = cube;
  exports["extrude"] = extrude;
  exports["filled"] = filled;
  exports["prism"] = prism;
  exports["renderScene"] = renderScene;
  exports["rotateX"] = rotateX;
  exports["rotateZ"] = rotateZ;
  exports["scale"] = scale;
  exports["translateZ"] = translateZ;
  exports["semigroupScene"] = semigroupScene;
  exports["monoidScene"] = monoidScene;
})(PS["Graphics.Isometric"] = PS["Graphics.Isometric"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_StrMap = PS["Data.StrMap"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];
  var Types = PS["Types"];        
  var tuple = function (a) {
      return function (b) {
          return new Data_Tuple.Tuple(a, b);
      };
  };
  var fromArray = Data_StrMap.fromFoldable(Data_Foldable.foldableArray);
  var convert = function ($0) {
      return Data_List.fromFoldable(Data_Foldable.foldableArray)(Data_Functor.map(Data_Functor.functorArray)(Data_List.fromFoldable(Data_Foldable.foldableArray))($0));
  };
  var level = function (lid) {
      return function (entry) {
          return tuple(lid)({
              name: entry.name, 
              help: entry.help, 
              difficulty: entry.difficulty, 
              initial: convert(entry.initial), 
              target: convert(entry.target)
          });
      };
  };
  exports["convert"] = convert;
  exports["fromArray"] = fromArray;
  exports["level"] = level;
  exports["tuple"] = tuple;
})(PS["Helper"] = PS["Helper"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Traversable = PS["Data.Traversable"];
  var Prelude = PS["Prelude"];
  var Types = PS["Types"];
  var replaceMultiple = function (a) {
      return function (bs) {
          var replace = function (x) {
              var $2 = Data_Eq.eq(Types.eqCube)(x)(a);
              if ($2) {
                  return bs;
              };
              return Data_List.singleton(x);
          };
          return Data_Functor.map(Data_List_Types.functorList)(Data_List.concatMap(replace));
      };
  };
  var reject = function (f) {
      return Data_List.filter(function ($4) {
          return !f($4);
      });
  };
  var mapStack = function (c) {
      return Data_Functor.map(Data_List_Types.functorList)(function (v) {
          return Data_List.snoc(v)(c);
      });
  };
  var map2d = function ($5) {
      return Data_Functor.map(Data_List_Types.functorList)(Data_Functor.map(Data_List_Types.functorList)($5));
  };
  var replaceSingle = function (a) {
      return function (b) {
          var replace = function (x) {
              var $3 = Data_Eq.eq(Types.eqCube)(x)(a);
              if ($3) {
                  return b;
              };
              return x;
          };
          return map2d(replace);
      };
  };
  var clearEmpty = reject(Data_List["null"]);
  var mapReject = function (c) {
      return function ($6) {
          return clearEmpty(Data_Functor.map(Data_List_Types.functorList)(reject(function (v) {
              return Data_Eq.eq(Types.eqCube)(v)(c);
          }))($6));
      };
  };
  var allSteps = function (ts) {
      return function (initial) {
          return new Data_List_Types.Cons(initial, Data_Traversable.scanl(Data_List_Types.traversableList)(Data_Function.applyFlipped)(initial)(ts));
      };
  };
  exports["allSteps"] = allSteps;
  exports["clearEmpty"] = clearEmpty;
  exports["map2d"] = map2d;
  exports["mapReject"] = mapReject;
  exports["mapStack"] = mapStack;
  exports["reject"] = reject;
  exports["replaceMultiple"] = replaceMultiple;
  exports["replaceSingle"] = replaceSingle;
})(PS["Transformer"] = PS["Transformer"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var Prelude = PS["Prelude"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];        
  var chapter0 = {
      name: "Introduction", 
      transformers: Helper.fromArray([ Helper.tuple("replaceYbyR")({
          name: "map {Yellow}\u21a6{Red}", 
          "function": Transformer.replaceSingle(Types.Yellow.value)(Types.Red.value)
      }), Helper.tuple("stackY")({
          name: "map (stack {Yellow})", 
          "function": Data_Functor.map(Data_List_Types.functorList)(function (v) {
              return Data_List.snoc(v)(Types.Yellow.value);
          })
      }), Helper.tuple("replaceYbyYR")({
          name: "map {Yellow}\u21a6[{Red}{Yellow}]", 
          "function": Transformer.replaceMultiple(Types.Yellow.value)(new Data_List_Types.Cons(Types.Yellow.value, new Data_List_Types.Cons(Types.Red.value, Data_List_Types.Nil.value)))
      }), Helper.tuple("rejectY")({
          name: "map (reject {Yellow})", 
          "function": Transformer.mapReject(Types.Yellow.value)
      }) ]), 
      levels: Helper.fromArray([ Helper.level("0.1")({
          name: "Transformation", 
          help: new Data_Maybe.Just("In this game, your goal is to create a sequence of functions which\x0a                          transforms the colored cubes into the desired pattern (shown above).\x0a                          To change yellow cubes to red cubes, add the function `replaceYbyR` to your program.\x0a                          You can do so by clicking on the function or by dragging it to the\x0a                          program on the right."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value, Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value, Types.Red.value ] ]
      }), Helper.level("0.2")({
          name: "Rejection", 
          help: new Data_Maybe.Just("To remove all cubes of a specified color, use the <code>reject</code>\x0a                          function."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ] ]
      }), Helper.level("0.3")({
          name: "Composition", 
          help: new Data_Maybe.Just("Most levels require a combination of two or more functions. Try to\x0a                          add the functions `stackY` and `rejectY` to your program. Note that\x0a                          you can change the order of the functions by drag and drop. Try to\x0a                          understand the effect of `stackY` by observing how the cubes change."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ] ]
      }), Helper.level("0.4")({
          name: "Spanish flag", 
          help: new Data_Maybe.Just("Try this on your own. You need to compose three\x0a                          functions."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ] ]
      }) ])
  };
  exports["chapter0"] = chapter0;
})(PS["Levels.Chapter0"] = PS["Levels.Chapter0"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_Function = PS["Data.Function"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Prelude = PS["Prelude"];        
  var contains = function (dictEq) {
      return function (x) {
          return function (xs) {
              return Data_Maybe.isJust(Data_List.elemIndex(dictEq)(x)(xs));
          };
      };
  };
  exports["contains"] = contains;
})(PS["ListHelper"] = PS["ListHelper"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var ListHelper = PS["ListHelper"];
  var Prelude = PS["Prelude"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];        
  var chapter1 = {
      name: "Chapter 1", 
      transformers: Helper.fromArray([ Helper.tuple("mapYtoYR")({
          name: "map {Yellow}\u21a6[{Red}{Yellow}]", 
          "function": Transformer.replaceMultiple(Types.Yellow.value)(new Data_List_Types.Cons(Types.Yellow.value, new Data_List_Types.Cons(Types.Red.value, Data_List_Types.Nil.value)))
      }), Helper.tuple("mapCtoRC")({
          name: "map {Cyan}\u21a6[{Cyan}{Red}]", 
          "function": Transformer.replaceMultiple(Types.Cyan.value)(new Data_List_Types.Cons(Types.Red.value, new Data_List_Types.Cons(Types.Cyan.value, Data_List_Types.Nil.value)))
      }), Helper.tuple("rejectY")({
          name: "map (reject {Yellow})", 
          "function": Transformer.mapReject(Types.Yellow.value)
      }), Helper.tuple("rejectC")({
          name: "map (reject {Cyan})", 
          "function": Transformer.mapReject(Types.Cyan.value)
      }), Helper.tuple("filterContainsR")({
          name: "filter (contains {Red})", 
          "function": function ($1) {
              return Transformer.clearEmpty(Data_List.filter(ListHelper.contains(Types.eqCube)(Types.Red.value))($1));
          }
      }), Helper.tuple("stackR")({
          name: "map (stack {Red})", 
          "function": Data_Functor.map(Data_List_Types.functorList)(function (v) {
              return Data_List.snoc(v)(Types.Red.value);
          })
      }), Helper.tuple("mapReverse")({
          name: "map reverse", 
          "function": Data_Functor.map(Data_List_Types.functorList)(Data_List.reverse)
      }) ]), 
      levels: Helper.fromArray([ Helper.level("1.1")({
          name: "Mercury", 
          help: new Data_Maybe.Just("There are some new types of functions in this chapter. We will\x0a                          introduce them when they are needed. Note that you can always\x0a                          skip levels and come back later."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Cyan.value ] ], 
          target: [ [ Types.Red.value, Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Red.value, Types.Red.value ] ]
      }), Helper.level("1.2")({
          name: "Venus", 
          help: new Data_Maybe.Just("The function `filterContainsR` removes columns without a red cube."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Cyan.value ] ], 
          target: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ] ]
      }), Helper.level("1.3")({
          name: "Earth", 
          help: new Data_Maybe.Just("You can flip each column vertically with `mapReverse`."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Cyan.value, Types.Cyan.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Yellow.value ] ], 
          target: [ [ Types.Red.value, Types.Cyan.value, Types.Cyan.value ], [ Types.Red.value, Types.Cyan.value ], [ Types.Red.value, Types.Cyan.value ], [ Types.Red.value, Types.Cyan.value, Types.Cyan.value ] ]
      }), Helper.level("1.4")({
          name: "Mars", 
          help: new Data_Maybe.Just("In case you were wondering: the level names <s>have a rather deep\x0a                          philosophical meaning</s> are chosen randomly."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Cyan.value ] ], 
          target: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ] ]
      }) ])
  };
  exports["chapter1"] = chapter1;
})(PS["Levels.Chapter1"] = PS["Levels.Chapter1"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_Eq = PS["Data.Eq"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var Prelude = PS["Prelude"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];        
  var stackEqualColumns = function (v) {
      if (v instanceof Data_List_Types.Nil) {
          return Data_List_Types.Nil.value;
      };
      if (v instanceof Data_List_Types.Cons) {
          var split = Data_List.span(function (v1) {
              return Data_Eq.eq(Data_List_Types.eqList(Types.eqCube))(v1)(v.value0);
          })(v.value1);
          return new Data_List_Types.Cons(Data_List.concat(new Data_List_Types.Cons(v.value0, split.init)), stackEqualColumns(split.rest));
      };
      throw new Error("Failed pattern match at Levels.Chapter2 line 12, column 1 - line 12, column 33: " + [ v.constructor.name ]);
  };
  var chapter2 = {
      name: "Chapter 2", 
      transformers: Helper.fromArray([ Helper.tuple("replaceYbyB")({
          name: "map {Yellow}\u21a6{Brown}", 
          "function": Transformer.replaceSingle(Types.Yellow.value)(Types.Brown.value)
      }), Helper.tuple("replaceYbyBY")({
          name: "map {Yellow}\u21a6[{Yellow}{Brown}]", 
          "function": Transformer.replaceMultiple(Types.Yellow.value)(new Data_List_Types.Cons(Types.Brown.value, new Data_List_Types.Cons(Types.Yellow.value, Data_List_Types.Nil.value)))
      }), Helper.tuple("replaceBbyOO")({
          name: "map {Brown}\u21a6[{Orange}{Orange}]", 
          "function": Transformer.replaceMultiple(Types.Brown.value)(new Data_List_Types.Cons(Types.Orange.value, new Data_List_Types.Cons(Types.Orange.value, Data_List_Types.Nil.value)))
      }), Helper.tuple("rejectO")({
          name: "map (reject {Orange})", 
          "function": Transformer.mapReject(Types.Orange.value)
      }), Helper.tuple("stackY")({
          name: "map (stack {Yellow})", 
          "function": Transformer.mapStack(Types.Yellow.value)
      }), Helper.tuple("stackEqualColumns")({
          name: "stackEqualColumns", 
          "function": stackEqualColumns
      }) ]), 
      levels: Helper.fromArray([ Helper.level("2.1")({
          name: "Bricklayer", 
          help: new Data_Maybe.Just("This chapter introduces a new function `stackEqualColumns`. It\x0a                          takes <i>adjacent equal columns</i> and stacks them on top of\x0a                          each other. Try it!"), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Brown.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Brown.value ] ]
      }), Helper.level("2.2")({
          name: "Gizeh", 
          help: new Data_Maybe.Just("You are on your own now..."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Brown.value, Types.Brown.value ], [ Types.Orange.value, Types.Brown.value, Types.Orange.value, Types.Brown.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Orange.value, Types.Brown.value, Types.Orange.value, Types.Brown.value ], [ Types.Brown.value, Types.Brown.value ] ]
      }), Helper.level("2.3")({
          name: "Poseidon", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Brown.value, Types.Brown.value ], [ Types.Brown.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value ], [ Types.Brown.value, Types.Brown.value ] ]
      }), Helper.level("2.4")({
          name: "Bowl", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Orange.value, Types.Orange.value, Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value, Types.Orange.value, Types.Orange.value ] ]
      }), Helper.level("2.5")({
          name: "Stamp", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Yellow.value, Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ] ]
      }) ])
  };
  exports["chapter2"] = chapter2;
  exports["stackEqualColumns"] = stackEqualColumns;
})(PS["Levels.Chapter2"] = PS["Levels.Chapter2"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var Prelude = PS["Prelude"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];        
  var ooToC = function (v) {
      if (v instanceof Data_List_Types.Nil) {
          return Data_List_Types.Nil.value;
      };
      if (v instanceof Data_List_Types.Cons && (v.value0 instanceof Types.Orange && (v.value1 instanceof Data_List_Types.Cons && v.value1.value0 instanceof Types.Orange))) {
          return new Data_List_Types.Cons(Types.Cyan.value, ooToC(v.value1.value1));
      };
      if (v instanceof Data_List_Types.Cons) {
          return new Data_List_Types.Cons(v.value0, ooToC(v.value1));
      };
      throw new Error("Failed pattern match at Levels.Chapter3 line 16, column 1 - line 16, column 24: " + [ v.constructor.name ]);
  };
  var cxToX = function (v) {
      if (v instanceof Data_List_Types.Nil) {
          return Data_List_Types.Nil.value;
      };
      if (v instanceof Data_List_Types.Cons && (v.value0 instanceof Types.Cyan && v.value1 instanceof Data_List_Types.Cons)) {
          return new Data_List_Types.Cons(v.value1.value0, cxToX(v.value1.value1));
      };
      if (v instanceof Data_List_Types.Cons) {
          return new Data_List_Types.Cons(v.value0, cxToX(v.value1));
      };
      throw new Error("Failed pattern match at Levels.Chapter3 line 11, column 1 - line 11, column 24: " + [ v.constructor.name ]);
  };
  var chapter3 = {
      name: "Chapter 3", 
      transformers: Helper.fromArray([ Helper.tuple("mapXtoOX")({
          name: "map {X}\u21a6[{X}{Orange}]", 
          "function": Data_Functor.map(Data_List_Types.functorList)(Data_List.concatMap(function (x) {
              return new Data_List_Types.Cons(Types.Orange.value, new Data_List_Types.Cons(x, Data_List_Types.Nil.value));
          }))
      }), Helper.tuple("mapCXtoX")({
          name: "map [{X}{Cyan}]\u21a6{X}", 
          "function": Data_Functor.map(Data_List_Types.functorList)(cxToX)
      }), Helper.tuple("mapOOtoC")({
          name: "map [{Orange}{Orange}]\u21a6{Cyan}", 
          "function": Data_Functor.map(Data_List_Types.functorList)(ooToC)
      }), Helper.tuple("mapCtoO")({
          name: "map {Cyan}\u21a6{Orange}", 
          "function": Transformer.replaceSingle(Types.Cyan.value)(Types.Orange.value)
      }) ]), 
      levels: Helper.fromArray([ Helper.level("3.1")({
          name: "Brick", 
          help: new Data_Maybe.Just("This chapter introduces wildcard cubes: {X}."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value, Types.Orange.value ] ], 
          target: [ [ Types.Cyan.value ], [ Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value ], [ Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value ] ]
      }), Helper.level("3.2")({
          name: "Fort", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value, Types.Orange.value ] ], 
          target: [ [ Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Cyan.value ] ]
      }), Helper.level("3.3")({
          name: "Castle", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value, Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value ] ], 
          target: [ [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Orange.value ] ]
      }) ])
  };
  exports["chapter3"] = chapter3;
  exports["cxToX"] = cxToX;
  exports["ooToC"] = ooToC;
})(PS["Levels.Chapter3"] = PS["Levels.Chapter3"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var ListHelper = PS["ListHelper"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];        
  var partitionContains = function (cube) {
      return function (wall) {
          var parts = Data_List.partition(ListHelper.contains(Types.eqCube)(cube))(wall);
          return Data_List.concat(new Data_List_Types.Cons(parts.no, new Data_List_Types.Cons(parts.yes, Data_List_Types.Nil.value)));
      };
  };
  var chapter4 = {
      name: "Chapter 4", 
      transformers: Helper.fromArray([ Helper.tuple("replaceYbyR")({
          name: "map {Yellow}\u21a6{Red}", 
          "function": Transformer.replaceSingle(Types.Yellow.value)(Types.Red.value)
      }), Helper.tuple("replaceRbyC")({
          name: "map {Red}\u21a6{Cyan}", 
          "function": Transformer.replaceSingle(Types.Red.value)(Types.Cyan.value)
      }), Helper.tuple("replaceCbyY")({
          name: "map {Cyan}\u21a6{Yellow}", 
          "function": Transformer.replaceSingle(Types.Cyan.value)(Types.Yellow.value)
      }), Helper.tuple("partitionContainsC")({
          name: "partition (contains {Cyan})", 
          "function": partitionContains(Types.Cyan.value)
      }), Helper.tuple("partitionContainsR")({
          name: "partition (contains {Red})", 
          "function": partitionContains(Types.Red.value)
      }) ]), 
      levels: Helper.fromArray([ Helper.level("4.1")({
          name: "Take sides!", 
          help: new Data_Maybe.Just("This chapter introduces partitioning. The function `partitionContainsR` reorders the columns\x0a                          so that the columns which do not contain a red cube are grouped on the left, and the columns\x0a                          which do are gouped on the right."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Cyan.value, Types.Red.value ], [ Types.Cyan.value, Types.Cyan.value ], [ Types.Red.value, Types.Red.value ], [ Types.Cyan.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Red.value ] ], 
          target: [ [ Types.Cyan.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Cyan.value, Types.Red.value ] ]
      }), Helper.level("4.2")({
          name: "Take sides \u2013 again!", 
          help: new Data_Maybe.Just("Note that within each partition \u2013 the columns which don't satisfy the condition and the\x0a                          columns which do \u2013 the order remains the same as it was prior to partitioning."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Cyan.value, Types.Red.value ], [ Types.Cyan.value, Types.Cyan.value ], [ Types.Red.value, Types.Red.value ], [ Types.Cyan.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Red.value ] ], 
          target: [ [ Types.Cyan.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Cyan.value ], [ Types.Red.value, Types.Red.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Cyan.value, Types.Red.value ] ]
      }), Helper.level("4.3")({
          name: "Shift", 
          help: new Data_Maybe.Just("Can you partition this?"), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Cyan.value, Types.Red.value ], [ Types.Red.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Red.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Red.value, Types.Cyan.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Red.value, Types.Cyan.value ] ]
      }), Helper.level("4.4")({
          name: "Robot eyes", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value, Types.Yellow.value, Types.Brown.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value, Types.Yellow.value, Types.Brown.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value ] ], 
          target: [ [ Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value, Types.Yellow.value, Types.Brown.value ], [ Types.Brown.value, Types.Yellow.value, Types.Brown.value ] ]
      }), Helper.level("4.5")({
          name: "Mountains", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Brown.value, Types.Brown.value, Types.Red.value, Types.Red.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Cyan.value ], [ Types.Brown.value, Types.Yellow.value, Types.Yellow.value, Types.Yellow.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Red.value ], [ Types.Brown.value, Types.Brown.value, Types.Cyan.value, Types.Cyan.value ], [ Types.Brown.value, Types.Brown.value, Types.Yellow.value, Types.Yellow.value ] ], 
          target: [ [ Types.Brown.value, Types.Cyan.value, Types.Cyan.value, Types.Cyan.value ], [ Types.Brown.value, Types.Brown.value, Types.Cyan.value, Types.Cyan.value ], [ Types.Brown.value, Types.Brown.value, Types.Cyan.value, Types.Cyan.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Cyan.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Cyan.value ], [ Types.Brown.value, Types.Brown.value, Types.Cyan.value, Types.Cyan.value ] ]
      }) ])
  };
  exports["chapter4"] = chapter4;
  exports["partitionContains"] = partitionContains;
})(PS["Levels.Chapter4"] = PS["Levels.Chapter4"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Int = PS["Data.Int"];
  var Data_Int_Bits = PS["Data.Int.Bits"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semiring = PS["Data.Semiring"];
  var Helper = PS["Helper"];
  var Prelude = PS["Prelude"];
  var Types = PS["Types"];        
  var toDigit = function (v) {
      if (v instanceof Types.Orange) {
          return 0;
      };
      return 1;
  };
  var toInt = function (w) {
      return Data_Foldable.sum(Data_List_Types.foldableList)(Data_Semiring.semiringInt)(Data_List.zipWith(function (f) {
          return function (c) {
              return f * toDigit(c) | 0;
          };
      })(new Data_List_Types.Cons(1, new Data_List_Types.Cons(2, new Data_List_Types.Cons(4, Data_List_Types.Nil.value))))(w));
  };
  var toCube = function (v) {
      if (v === 0) {
          return Types.Orange.value;
      };
      return Types.Brown.value;
  };
  var digits = function (n) {
      var bit = function (m) {
          var $7 = (n & m) === m;
          if ($7) {
              return 1;
          };
          return 0;
      };
      return Data_Functor.map(Data_Functor.functorArray)(bit)([ 1, 2, 4 ]);
  };
  var toAStack = function (num) {
      return Data_Functor.map(Data_Functor.functorArray)(toCube)(digits(num));
  };
  var toStack = function ($8) {
      return Data_List.fromFoldable(Data_Foldable.foldableArray)(toAStack($8));
  };
  var mapNumbers = function (f) {
      return Data_Functor.map(Data_List_Types.functorList)(function ($9) {
          return toStack(f(toInt($9)));
      });
  };
  var chapter5 = {
      name: "Chapter 5", 
      transformers: Helper.fromArray([ Helper.tuple("mapAdd1")({
          name: "map (+1)", 
          "function": mapNumbers(function (v) {
              return v + 1 | 0;
          })
      }), Helper.tuple("mapSub1")({
          name: "map (-1)", 
          "function": mapNumbers(function (v) {
              return v - 1 | 0;
          })
      }), Helper.tuple("mapMul2")({
          name: "map (\xd72)", 
          "function": mapNumbers(function (v) {
              return v * 2 | 0;
          })
      }), Helper.tuple("mapPow2")({
          name: "map (^2)", 
          "function": mapNumbers(function (x) {
              return x * x | 0;
          })
      }), Helper.tuple("filterEven")({
          name: "filter even", 
          "function": Data_List.filter(function ($10) {
              return Data_Int.even(toInt($10));
          })
      }) ]), 
      levels: Helper.fromArray([ Helper.level("5.1")({
          name: "0b0 .. 0b111", 
          help: new Data_Maybe.Just("What could be the meaning of the title <code>0b0 .. 0b111</code>?\x0a                          Read from top to bottom. Calculate modulo eight."), 
          difficulty: Types.Medium.value, 
          initial: Data_Functor.map(Data_Functor.functorArray)(toAStack)([ 0, 1, 2, 3, 4, 5, 6, 7 ]), 
          target: Data_Functor.map(Data_Functor.functorArray)(toAStack)([ 1, 3, 5, 7, 1, 3, 5, 7 ])
      }), Helper.level("5.2")({
          name: "Odd..", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Easy.value, 
          initial: Data_Functor.map(Data_Functor.functorArray)(toAStack)([ 0, 1, 2, 3, 4, 5, 6, 7 ]), 
          target: Data_Functor.map(Data_Functor.functorArray)(toAStack)([ 1, 3, 5, 7 ])
      }), Helper.level("5.3")({
          name: "Zero", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: Data_Functor.map(Data_Functor.functorArray)(toAStack)([ 0, 1, 2, 3, 4, 5, 6, 7 ]), 
          target: Data_Functor.map(Data_Functor.functorArray)(toAStack)([ 0, 0, 0, 0, 0, 0, 0, 0 ])
      }), Helper.level("5.4")({
          name: "Don't panic", 
          help: new Data_Maybe.Just("This is the last level ... for now. But you can design your own puzzles!\x0a                          See the <a href=\"https://github.com/sharkdp/cube-composer\">GitHub repository</a>\x0a                          for more information. I hope you enjoyed the game."), 
          difficulty: Types.Hard.value, 
          initial: Data_Functor.map(Data_Functor.functorArray)(toAStack)([ 0, 1, 2, 3, 4, 5, 6, 7 ]), 
          target: Data_Functor.map(Data_Functor.functorArray)(toAStack)([ 4, 2, 4, 2, 4, 2, 4, 2 ])
      }) ])
  };
  exports["chapter5"] = chapter5;
  exports["digits"] = digits;
  exports["mapNumbers"] = mapNumbers;
  exports["toAStack"] = toAStack;
  exports["toCube"] = toCube;
  exports["toDigit"] = toDigit;
  exports["toInt"] = toInt;
  exports["toStack"] = toStack;
})(PS["Levels.Chapter5"] = PS["Levels.Chapter5"] || {});
(function(exports) {exports.unsafeError = function(msg) {
      // Try to recover from this error by resetting the global state.
      if (confirm(msg + ". Clear localStorage and reload?")) {
          localStorage.clear();
          location.reload();
      }

      // Abort execution
      throw new Error(msg);
  };
})(PS["Unsafe"] = PS["Unsafe"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Unsafe"];
  exports["unsafeError"] = $foreign.unsafeError;
})(PS["Unsafe"] = PS["Unsafe"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Bind = PS["Control.Bind"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_StrMap = PS["Data.StrMap"];
  var Levels_Chapter0 = PS["Levels.Chapter0"];
  var Levels_Chapter1 = PS["Levels.Chapter1"];
  var Levels_Chapter2 = PS["Levels.Chapter2"];
  var Levels_Chapter3 = PS["Levels.Chapter3"];
  var Levels_Chapter4 = PS["Levels.Chapter4"];
  var Levels_Chapter5 = PS["Levels.Chapter5"];
  var Prelude = PS["Prelude"];
  var Types = PS["Types"];
  var Unsafe = PS["Unsafe"];        
  var levelTitle = function (lid) {
      return function (level) {
          return lid + (" - " + (level.name + (" (" + (Data_Show.show(Types.showDifficulty)(level.difficulty) + ")"))));
      };
  };
  var getTransformerRecord = function (chapter) {
      return function (tid) {
          return Data_StrMap.lookup(tid)(chapter.transformers);
      };
  };
  var getTransformer = function (ch) {
      return function (tid) {
          return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
              return v["function"];
          })(getTransformerRecord(ch)(tid));
      };
  };
  var allChapters = new Data_List_Types.Cons(Levels_Chapter0.chapter0, new Data_List_Types.Cons(Levels_Chapter1.chapter1, new Data_List_Types.Cons(Levels_Chapter2.chapter2, new Data_List_Types.Cons(Levels_Chapter3.chapter3, new Data_List_Types.Cons(Levels_Chapter4.chapter4, new Data_List_Types.Cons(Levels_Chapter5.chapter5, Data_List_Types.Nil.value))))));
  var allLevelIds = Control_Bind.bind(Data_List_Types.bindList)(allChapters)(function ($9) {
      return Data_List.sort(Data_Ord.ordString)((function ($10) {
          return Data_List.fromFoldable(Data_Foldable.foldableArray)(Data_StrMap.keys($10));
      })((function (v) {
          return v.levels;
      })($9)));
  });
  var firstLevel = Data_Maybe.fromMaybe("")(Data_List.head(allLevelIds));
  var allLevels = Data_StrMap.unions(Data_List_Types.foldableList)(Data_Functor.map(Data_List_Types.functorList)(function (v) {
      return v.levels;
  })(allChapters));
  var getLevel = function (lid) {
      var v = Data_StrMap.lookup(lid)(allLevels);
      if (v instanceof Data_Maybe.Just) {
          return v.value0;
      };
      if (v instanceof Data_Maybe.Nothing) {
          return Unsafe.unsafeError("Could not find level " + Data_Show.show(Data_Show.showString)(lid));
      };
      throw new Error("Failed pattern match at Levels line 38, column 5 - line 40, column 70: " + [ v.constructor.name ]);
  };
  var getChapter = function (lid) {
      var hasLevel = function (ch) {
          return Data_StrMap.member(lid)(ch.levels);
      };
      var v = Data_Foldable.find(Data_List_Types.foldableList)(hasLevel)(allChapters);
      if (v instanceof Data_Maybe.Just) {
          return v.value0;
      };
      if (v instanceof Data_Maybe.Nothing) {
          return Unsafe.unsafeError("Could not find chapter " + Data_Show.show(Data_Show.showString)(lid));
      };
      throw new Error("Failed pattern match at Levels line 49, column 5 - line 51, column 72: " + [ v.constructor.name ]);
  };
  exports["allChapters"] = allChapters;
  exports["allLevelIds"] = allLevelIds;
  exports["allLevels"] = allLevels;
  exports["firstLevel"] = firstLevel;
  exports["getChapter"] = getChapter;
  exports["getLevel"] = getLevel;
  exports["getTransformer"] = getTransformer;
  exports["getTransformerRecord"] = getTransformerRecord;
  exports["levelTitle"] = levelTitle;
})(PS["Levels"] = PS["Levels"] || {});
(function(exports) {exports.installSortable = function (el) {
    return function(sortHandler) {
      return function() {
        new Sortable(el, {
          group: 'function-lists',
          ghostClass: 'sortable-ghost',
          animation: 150,
          onSort: sortHandler
        });
      };
    };
  };
})(PS["Sortable"] = PS["Sortable"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Sortable"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Prelude = PS["Prelude"];
  exports["installSortable"] = $foreign.installSortable;
})(PS["Sortable"] = PS["Sortable"] || {});
(function(exports) {exports.unsafeLoadGameState = function (just) {
      return function(nothing) {
          return function() {
              var data = localStorage.getItem('gameState');
              if (!data) {
                  return nothing;
              }
              return just(JSON.parse(data));
          };
      };
  };

  exports.unsafeSaveGameState = function (gs) {
      return function() {
          localStorage.setItem('gameState', JSON.stringify(gs));
          return {};
      };
  };
})(PS["Storage"] = PS["Storage"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Storage"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor = PS["Data.Functor"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_StrMap = PS["Data.StrMap"];
  var Prelude = PS["Prelude"];
  var Types = PS["Types"];        
  var toSaveable = function (gs) {
      return {
          currentLevel: gs.currentLevel, 
          levelState: Data_Functor.map(Data_StrMap.functorStrMap)(Data_Array.fromFoldable(Data_List_Types.foldableList))(gs.levelState)
      };
  };
  var saveGameState = function ($0) {
      return $foreign.unsafeSaveGameState(toSaveable($0));
  };
  var fromSaveable = function (sgs) {
      return {
          currentLevel: sgs.currentLevel, 
          levelState: Data_Functor.map(Data_StrMap.functorStrMap)(Data_List.fromFoldable(Data_Foldable.foldableArray))(sgs.levelState)
      };
  };
  var loadGameState = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Functor.map(Data_Maybe.functorMaybe)(fromSaveable))($foreign.unsafeLoadGameState(Data_Maybe.Just.create)(Data_Maybe.Nothing.value));
  exports["fromSaveable"] = fromSaveable;
  exports["loadGameState"] = loadGameState;
  exports["saveGameState"] = saveGameState;
  exports["toSaveable"] = toSaveable;
})(PS["Storage"] = PS["Storage"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Analytics = PS["Analytics"];
  var Color = PS["Color"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var DOM = PS["DOM"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_HTML = PS["DOM.HTML"];
  var DOM_HTML_Event_EventTypes = PS["DOM.HTML.Event.EventTypes"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_Node_Document = PS["DOM.Node.Document"];
  var DOM_Node_Element = PS["DOM.Node.Element"];
  var DOM_Node_Node = PS["DOM.Node.Node"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var DOMHelper = PS["DOMHelper"];
  var Data_Array = PS["Data.Array"];
  var Data_Either = PS["Data.Either"];
  var Data_Enum = PS["Data.Enum"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Int = PS["Data.Int"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_StrMap = PS["Data.StrMap"];
  var Data_String_Regex = PS["Data.String.Regex"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Unit = PS["Data.Unit"];
  var Graphics_Canvas = PS["Graphics.Canvas"];
  var Graphics_Drawing = PS["Graphics.Drawing"];
  var Graphics_Isometric = PS["Graphics.Isometric"];
  var Levels = PS["Levels"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];
  var Sortable = PS["Sortable"];
  var Storage = PS["Storage"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];        
  var unsafeFromJust = Data_Maybe.fromJust();
  var traverseWithKey_ = function (dictMonad) {
      return function (f) {
          return function (sm) {
              return Data_StrMap.foldM(dictMonad)(Data_Function["const"](f))(Data_Unit.unit)(sm);
          };
      };
  };
  var spacing = 5.5;
  var replaceAll = function (regexString) {
      return function (replacement) {
          var flags = Data_String_Regex.parseFlags("g");
          var pattern = Data_Either.fromRight()(Data_String_Regex.regex(regexString)(flags));
          return Data_String_Regex.replace(pattern)(replacement);
      };
  };
  var replaceColors = function (s$prime) {
      var replacement = function (c) {
          return "<div class=\"cube " + (c + "\"> </div>");
      };
      var pattern = function (c) {
          return "{" + (c + "}");
      };
      var replaceColor = function (s) {
          return function (c) {
              return replaceAll(pattern(c))(replacement(c))(s);
          };
      };
      return Data_Foldable.foldl(Data_List_Types.foldableList)(replaceColor)(s$prime)(new Data_List_Types.Cons("X", Data_Functor.map(Data_List_Types.functorList)(Data_Show.show(Types.showCube))(Data_Enum.enumFromTo(Types.enumCube)(Data_List_Types.unfoldableList)(Types.Cyan.value)(Types.Yellow.value))));
  };
  var replaceStacks = function ($119) {
      return replaceAll("\\[")("<div class=\"stack\">")(replaceAll("\\]")("</div>")($119));
  };
  var replaceTransformers = function (ch) {
      return function (initial) {
          var replacement = function (tr) {
              return "<span class=\"transformer\">" + (tr.name + "</span>");
          };
          var pattern = function (id) {
              return "`" + (id + "`");
          };
          var replaceT = function (text) {
              return function (id) {
                  return function (tr) {
                      return replaceAll(pattern(id))(replacement(tr))(text);
                  };
              };
          };
          return Data_StrMap.fold(replaceT)(initial)(ch.transformers);
      };
  };
  var nameToHTML = function ($120) {
      return replaceColors(replaceStacks($120));
  };
  var initialGS = {
      currentLevel: Levels.firstLevel, 
      levelState: Data_StrMap.empty
  };
  var getCurrentIds = function (gs) {
      var v = Data_StrMap.lookup(gs.currentLevel)(gs.levelState);
      if (v instanceof Data_Maybe.Just) {
          return v.value0;
      };
      if (v instanceof Data_Maybe.Nothing) {
          return Data_List_Types.Nil.value;
      };
      throw new Error("Failed pattern match at Main line 95, column 20 - line 97, column 38: " + [ v.constructor.name ]);
  };
  var foldMapIndexed = function (dictMonoid) {
      return function (f) {
          return function (xs$prime) {
              var go = function (v) {
                  return function (v1) {
                      if (v1 instanceof Data_List_Types.Nil) {
                          return Data_Monoid.mempty(dictMonoid);
                      };
                      if (v1 instanceof Data_List_Types.Cons) {
                          return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v)(v1.value0))(go(v + 1 | 0)(v1.value1));
                      };
                      throw new Error("Failed pattern match at Main line 59, column 11 - line 59, column 36: " + [ v.constructor.name, v1.constructor.name ]);
                  };
              };
              return go(0)(xs$prime);
          };
      };
  };
  var cubeColor = function (v) {
      if (v instanceof Types.Cyan) {
          return Color.rgb(0)(160)(176);
      };
      if (v instanceof Types.Brown) {
          return Color.rgb(106)(74)(60);
      };
      if (v instanceof Types.Red) {
          return Color.rgb(204)(51)(63);
      };
      if (v instanceof Types.Orange) {
          return Color.rgb(235)(104)(65);
      };
      if (v instanceof Types.Yellow) {
          return Color.rgb(237)(201)(81);
      };
      throw new Error("Failed pattern match at Main line 45, column 1 - line 45, column 27: " + [ v.constructor.name ]);
  };
  var renderCube = function (x) {
      return function (y) {
          return function (z) {
              return function (c) {
                  var point = {
                      x: Data_Int.toNumber(-x | 0), 
                      y: spacing * Data_Int.toNumber(y), 
                      z: Data_Int.toNumber(z)
                  };
                  return Graphics_Isometric.filled(cubeColor(c))(Graphics_Isometric.cube(point)(0.9));
              };
          };
      };
  };
  var renderStack = function (len) {
      return function (y) {
          return function (x) {
              return function (stack) {
                  return foldMapIndexed(Graphics_Isometric.monoidScene)(renderCube(len - x | 0)(y))(stack);
              };
          };
      };
  };
  var renderWall = function (y) {
      return function (v) {
          if (v instanceof Data_List_Types.Nil) {
              var gray = Color.graytone(0.4);
              return Graphics_Isometric.filled(gray)(Graphics_Isometric.prism({
                  x: -8.0, 
                  y: spacing * Data_Int.toNumber(y), 
                  z: 0.0
              })(8.0)(0.9)(0.1));
          };
          var len = Data_List.length(v);
          return foldMapIndexed(Graphics_Isometric.monoidScene)(renderStack(len)(y))(Data_List.reverse(v));
      };
  };
  var renderTarget = function (target) {
      return renderWall(0)(target);
  };
  var renderWalls = function (walls) {
      return foldMapIndexed(Graphics_Isometric.monoidScene)(renderWall)(walls);
  };
  var appendTransformerElement = function (ul) {
      return function (id) {
          return function (t) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)(function __do() {
                  var v = DOMHelper.getDocument();
                  var v1 = DOM_Node_Document.createElement("li")(v)();
                  DOM_Node_Element.setAttribute("id")(id)(v1)();
                  DOMHelper.setInnerHTML(nameToHTML(t.name))(v1)();
                  return DOM_Node_Node.appendChild(DOM_Node_Types.elementToNode(v1))(DOM_Node_Types.elementToNode(ul))();
              });
          };
      };
  };
  var appendLevelElement = function (select) {
      return function (currentId) {
          return function (lid) {
              return Data_Functor["void"](Control_Monad_Eff.functorEff)((function () {
                  var level = Levels.getLevel(lid);
                  var chapter = Levels.getChapter(lid);
                  return function __do() {
                      var v = DOMHelper.getDocument();
                      var v1 = DOM_Node_Document.createElement("option")(v)();
                      DOM_Node_Element.setAttribute("value")(lid)(v1)();
                      Control_Applicative.when(Control_Monad_Eff.applicativeEff)(currentId === lid)(DOM_Node_Element.setAttribute("selected")("selected")(v1))();
                      DOM_Node_Node.setTextContent(Levels.levelTitle(lid)(level))(DOM_Node_Types.elementToNode(v1))();
                      return DOM_Node_Node.appendChild(DOM_Node_Types.elementToNode(v1))(DOM_Node_Types.elementToNode(select))();
                  };
              })());
          };
      };
  };
  var render = function (setupUI) {
      return function (gs) {
          return function __do() {
              var v = DOMHelper.getDocument();
              var v1 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(Graphics_Canvas.getCanvasElementById("canvas"))();
              var v2 = Graphics_Canvas.getContext2D(v1)();
              var v3 = Graphics_Canvas.getCanvasWidth(v1)();
              var v4 = Graphics_Canvas.getCanvasHeight(v1)();
              var tids = getCurrentIds(gs);
              var level = Levels.getLevel(gs.currentLevel);
              var chapter = Levels.getChapter(gs.currentLevel);
              Control_Applicative.when(Control_Monad_Eff.applicativeEff)(setupUI)(function __do() {
                  var v5 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("available")(v))();
                  var v6 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("program")(v))();
                  DOMHelper.setInnerHTML("")(v5)();
                  DOMHelper.setInnerHTML("")(v6)();
                  var unused = Data_Foldable.foldl(Data_List_Types.foldableList)(Data_Function.flip(Data_StrMap["delete"]))(chapter.transformers)(tids);
                  var insert = function (sm) {
                      return function (id) {
                          var v7 = Levels.getTransformerRecord(chapter)(id);
                          if (v7 instanceof Data_Maybe.Just) {
                              return Data_StrMap.insert(id)(v7.value0)(sm);
                          };
                          if (v7 instanceof Data_Maybe.Nothing) {
                              return sm;
                          };
                          throw new Error("Failed pattern match at Main line 122, column 28 - line 124, column 47: " + [ v7.constructor.name ]);
                      };
                  };
                  var active = Data_Foldable.foldl(Data_List_Types.foldableList)(insert)(Data_StrMap.empty)(tids);
                  traverseWithKey_(Control_Monad_Eff.monadEff)(appendTransformerElement(v5))(unused)();
                  traverseWithKey_(Control_Monad_Eff.monadEff)(appendTransformerElement(v6))(active)();
                  var installClickHandler = function (li) {
                      return DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.click)(clickLi(DOM_HTML_Types.htmlElementToElement(li)))(DOM_HTML_Types.htmlElementToEventTarget(li));
                  };
                  Control_Bind.bind(Control_Monad_Eff.bindEff)(DOMHelper["children'"](v5))(Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(installClickHandler))();
                  Control_Bind.bind(Control_Monad_Eff.bindEff)(DOMHelper["children'"](v6))(Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(installClickHandler))();
                  return DOMHelper.withElementById("levels")(v)(function (selectLevel) {
                      return function __do() {
                          DOMHelper.setInnerHTML("")(selectLevel)();
                          return Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(appendLevelElement(selectLevel)(gs.currentLevel))(Levels.allLevelIds)();
                      };
                  })();
              })();
              var transformers = Data_List.mapMaybe(Levels.getTransformer(chapter))(tids);
              var steps = Transformer.allSteps(transformers)(level.initial);
              var lightPos = {
                  x: -2.0, 
                  y: 1.0, 
                  z: 3.0
              };
              var v5 = Graphics_Canvas.clearRect(v2)({
                  x: 0.0, 
                  y: 0.0, 
                  w: v3, 
                  h: v4
              })();
              var renderCanvas = function (x) {
                  return function (y) {
                      return function (s) {
                          return function (scene) {
                              return Graphics_Drawing.render(v2)(Graphics_Drawing.translate(x)(y)(Graphics_Isometric.renderScene(lightPos)(Graphics_Isometric.scale(s)(scene))));
                          };
                      };
                  };
              };
              renderCanvas(2.0)(284.0)(49.0)(renderWalls(steps))();
              renderCanvas(1280.0)(380.0)(35.0)(renderTarget(level.target))();
              var solved = Data_Maybe.maybe(false)(function (v6) {
                  return Data_Eq.eq(Data_List_Types.eqList(Data_List_Types.eqList(Types.eqCube)))(v6)(level.target);
              })(Data_List.last(steps));
              var visibility = (function () {
                  if (solved) {
                      return "visible";
                  };
                  return "hidden";
              })();
              var cssAction = (function () {
                  if (solved) {
                      return DOMHelper.classAdd("flash");
                  };
                  return DOMHelper.classRemove("flash");
              })();
              DOMHelper.withElementById("message")(v)(function ($121) {
                  return DOMHelper.setStyleAttribute("visibility")(visibility)(DOMHelper.unsafeElementToHTMLElement($121));
              })();
              DOMHelper.withElementById("solved")(v)(cssAction)();
              var helpHTML = Data_Maybe.maybe("")(function ($122) {
                  return nameToHTML(replaceTransformers(chapter)($122));
              })(level.help);
              DOMHelper.withElementById("help")(v)(DOMHelper.setInnerHTML(helpHTML))();
              var toArray = Data_Array.fromFoldable(Data_List_Types.foldableList);
              var toArrays = function ($123) {
                  return toArray(Data_Functor.map(Data_List_Types.functorList)(toArray)($123));
              };
              Control_Monad_Eff_Console.log("Program: " + Data_Show.show(Data_Show.showArray(Data_Show.showString))(toArray(tids)))();
              Control_Monad_Eff_Console.log("Target: " + Data_Show.show(Data_Show.showArray(Data_Show.showArray(Types.showCube)))(toArrays(level.target)))();
              Control_Monad_Eff_Console.log("Steps:")();
              Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(function ($124) {
                  return Control_Monad_Eff_Console.logShow(Data_Show.showArray(Data_Show.showArray(Types.showCube)))(toArrays($124));
              })(steps)();
              return Control_Monad_Eff_Console.log("")();
          };
      };
  };
  var modifyGameStateAndRender = function (setupUI) {
      return function (modifyGS) {
          return function __do() {
              var v = Storage.loadGameState();
              var gs = Data_Maybe.fromMaybe(initialGS)(v);
              var gs$prime = modifyGS(gs);
              render(setupUI)(gs$prime)();
              return Storage.saveGameState(gs$prime)();
          };
      };
  };
  var clickLi = function (liEl) {
      return function (event) {
          var modify = function (ulId) {
              return function (clicked) {
                  return function (gs) {
                      var program = getCurrentIds(gs);
                      var program$prime = (function () {
                          var $75 = ulId === "available";
                          if ($75) {
                              return Data_List.snoc(program)(clicked);
                          };
                          return Data_List.filter(function (v) {
                              return v !== clicked;
                          })(program);
                      })();
                      var $76 = {};
                      for (var $77 in gs) {
                          if ({}.hasOwnProperty.call(gs, $77)) {
                              $76[$77] = gs[$77];
                          };
                      };
                      $76.levelState = Data_StrMap.insert(gs.currentLevel)(program$prime)(gs.levelState);
                      return $76;
                  };
              };
          };
          return function __do() {
              var v = DOMHelper.unsafeGetAttribute("id")(liEl)();
              var v1 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOM_Node_Node.parentElement(DOM_Node_Types.elementToNode(liEl)))();
              var v2 = DOMHelper.unsafeGetAttribute("id")(v1)();
              return modifyGameStateAndRender(true)(modify(v2)(v))();
          };
      };
  };
  var levelChangeHandler = function (selectLevel) {
      return function (v) {
          return function __do() {
              var v1 = DOMHelper.getSelectedValue(selectLevel)();
              Analytics.analyticsLevelChanged(v1)();
              return modifyGameStateAndRender(true)(function (gs) {
                  var $83 = {};
                  for (var $84 in gs) {
                      if ({}.hasOwnProperty.call(gs, $84)) {
                          $83[$84] = gs[$84];
                      };
                  };
                  $83.currentLevel = v1;
                  return $83;
              })();
          };
      };
  };
  var nextLevel = (function () {
      var next = function (cur) {
          return Data_Maybe.fromMaybe(cur)(Control_Bind.bindFlipped(Data_Maybe.bindMaybe)(Data_List.head)(Data_List.tail(Data_List.dropWhile(function (v) {
              return v !== cur;
          })(Levels.allLevelIds))));
      };
      var mod = function (gs) {
          var $86 = {};
          for (var $87 in gs) {
              if ({}.hasOwnProperty.call(gs, $87)) {
                  $86[$87] = gs[$87];
              };
          };
          $86.currentLevel = next(gs.currentLevel);
          return $86;
      };
      return function __do() {
          var v = Storage.loadGameState();
          var gs$prime = Data_Maybe.fromMaybe(initialGS)(v);
          Analytics.analyticsLevelChanged(next(gs$prime.currentLevel))();
          return modifyGameStateAndRender(true)(mod)();
      };
  })();
  var prevLevel = (function () {
      var before = function ($copy_v) {
          return function ($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                  if (v1 instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return Data_Maybe.Nothing.value;
                  };
                  if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil) {
                      $tco_done = true;
                      return Data_Maybe.Nothing.value;
                  };
                  if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Cons) {
                      var $94 = v === v1.value1.value0;
                      if ($94) {
                          $tco_done = true;
                          return new Data_Maybe.Just(v1.value0);
                      };
                      $tco_var_v = v;
                      $copy_v1 = new Data_List_Types.Cons(v1.value1.value0, v1.value1.value1);
                      return;
                  };
                  throw new Error("Failed pattern match at Main line 213, column 11 - line 213, column 51: " + [ v.constructor.name, v1.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_v, $copy_v1);
              };
              return $tco_result;
          };
      };
      var prev = function (cur) {
          return Data_Maybe.fromMaybe(cur)(before(cur)(Levels.allLevelIds));
      };
      var mod = function (gs) {
          var $99 = {};
          for (var $100 in gs) {
              if ({}.hasOwnProperty.call(gs, $100)) {
                  $99[$100] = gs[$100];
              };
          };
          $99.currentLevel = prev(gs.currentLevel);
          return $99;
      };
      return modifyGameStateAndRender(true)(mod);
  })();
  var reprogramHandler = function __do() {
      var v = DOMHelper.getDocument();
      var v1 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("program")(v))();
      var v2 = DOMHelper["children'"](v1)();
      var getId = function ($125) {
          return DOMHelper.unsafeGetAttribute("id")(DOM_HTML_Types.htmlElementToElement($125));
      };
      var v3 = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_List.fromFoldable(Data_Foldable.foldableArray))(Data_Traversable.traverse(Data_Traversable.traversableArray)(Control_Monad_Eff.applicativeEff)(getId)(v2))();
      return modifyGameStateAndRender(false)(function (gs) {
          var $106 = {};
          for (var $107 in gs) {
              if ({}.hasOwnProperty.call(gs, $107)) {
                  $106[$107] = gs[$107];
              };
          };
          $106.levelState = Data_StrMap.insert(gs.currentLevel)(v3)(gs.levelState);
          return $106;
      })();
  };
  var resetLevel = (function () {
      var mod = function (gs) {
          var $109 = {};
          for (var $110 in gs) {
              if ({}.hasOwnProperty.call(gs, $110)) {
                  $109[$110] = gs[$110];
              };
          };
          $109.levelState = Data_StrMap.insert(gs.currentLevel)(Data_List_Types.Nil.value)(gs.levelState);
          return $109;
      };
      return modifyGameStateAndRender(true)(mod);
  })();
  var keyPress = function (event) {
      return Data_Functor["void"](Control_Monad_Eff.functorEff)(function __do() {
          var v = DOMHelper.getDocument();
          var kev = DOMHelper.unsafeEventToKeyboardEvent(event);
          var ctrlPressed = DOMHelper.ctrlKey(kev);
          var code = DOMHelper.keyCode(kev);
          return Control_Applicative.when(Control_Monad_Eff.applicativeEff)(!ctrlPressed)((function () {
              if (code === 82) {
                  return resetLevel;
              };
              if (code === 37) {
                  return prevLevel;
              };
              if (code === 80) {
                  return prevLevel;
              };
              if (code === 39) {
                  return nextLevel;
              };
              if (code === 78) {
                  return nextLevel;
              };
              return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
          })())();
      });
  };
  var main = function __do() {
      var v = DOMHelper.getDocument();
      var v1 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("available")(v))();
      var v2 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("program")(v))();
      Sortable.installSortable(v1)(Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit))();
      Sortable.installSortable(v2)(reprogramHandler)();
      var v3 = Data_Functor.map(Control_Monad_Eff.functorEff)(DOM_HTML_Types.windowToEventTarget)(DOM_HTML.window)();
      DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.keydown)(keyPress)(v3)();
      DOMHelper.withElementById("levels")(v)(function (selectLevel) {
          return DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.change)(levelChangeHandler(selectLevel))(DOM_Node_Types.elementToEventTarget(selectLevel));
      })();
      DOMHelper.withElementById("reset")(v)(function (button) {
          return DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.click)(Data_Function["const"](resetLevel))(DOM_Node_Types.elementToEventTarget(button));
      })();
      DOMHelper.withElementById("nextlevel")(v)(function (button) {
          return DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.click)(Data_Function["const"](nextLevel))(DOM_Node_Types.elementToEventTarget(button));
      })();
      var v4 = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Maybe.fromMaybe(initialGS))(Storage.loadGameState)();
      Storage.saveGameState(v4)();
      return render(true)(v4)();
  };
  exports["main"] = main;
})(PS["Main"] = PS["Main"] || {});
PS["Main"].main();