(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/react/lib/ReactCurrentOwner.js
  var require_ReactCurrentOwner = __commonJS({
    "node_modules/react/lib/ReactCurrentOwner.js"(exports, module) {
      "use strict";
      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };
      module.exports = ReactCurrentOwner;
    }
  });

  // node_modules/fbjs/lib/ExecutionEnvironment.js
  var require_ExecutionEnvironment = __commonJS({
    "node_modules/fbjs/lib/ExecutionEnvironment.js"(exports, module) {
      "use strict";
      var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
      var ExecutionEnvironment = {
        canUseDOM,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen,
        isInWorker: !canUseDOM
        // For now, this is true - might change in the future.
      };
      module.exports = ExecutionEnvironment;
    }
  });

  // node_modules/fbjs/lib/invariant.js
  var require_invariant = __commonJS({
    "node_modules/fbjs/lib/invariant.js"(exports, module) {
      "use strict";
      function invariant(condition, format, a, b, c, d, e, f) {
        if (false) {
          if (format === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format === void 0) {
            error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
              return args[argIndex++];
            }));
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      }
      module.exports = invariant;
    }
  });

  // node_modules/fbjs/lib/toArray.js
  var require_toArray = __commonJS({
    "node_modules/fbjs/lib/toArray.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      function toArray(obj) {
        var length = obj.length;
        !(!Array.isArray(obj) && (typeof obj === "object" || typeof obj === "function")) ? false ? invariant(false, "toArray: Array-like object expected") : invariant(false) : void 0;
        !(typeof length === "number") ? false ? invariant(false, "toArray: Object needs a length property") : invariant(false) : void 0;
        !(length === 0 || length - 1 in obj) ? false ? invariant(false, "toArray: Object should have keys for indices") : invariant(false) : void 0;
        if (obj.hasOwnProperty) {
          try {
            return Array.prototype.slice.call(obj);
          } catch (e) {
          }
        }
        var ret = Array(length);
        for (var ii = 0; ii < length; ii++) {
          ret[ii] = obj[ii];
        }
        return ret;
      }
      module.exports = toArray;
    }
  });

  // node_modules/fbjs/lib/createArrayFromMixed.js
  var require_createArrayFromMixed = __commonJS({
    "node_modules/fbjs/lib/createArrayFromMixed.js"(exports, module) {
      "use strict";
      var toArray = require_toArray();
      function hasArrayNature(obj) {
        return (
          // not null/false
          !!obj && // arrays are objects, NodeLists are functions in Safari
          (typeof obj == "object" || typeof obj == "function") && // quacks like an array
          "length" in obj && // not window
          !("setInterval" in obj) && // no DOM node should be considered an array-like
          // a 'select' element has 'length' and 'item' properties on IE8
          typeof obj.nodeType != "number" && // a real array
          (Array.isArray(obj) || // arguments
          "callee" in obj || // HTMLCollection/NodeList
          "item" in obj)
        );
      }
      function createArrayFromMixed(obj) {
        if (!hasArrayNature(obj)) {
          return [obj];
        } else if (Array.isArray(obj)) {
          return obj.slice();
        } else {
          return toArray(obj);
        }
      }
      module.exports = createArrayFromMixed;
    }
  });

  // node_modules/fbjs/lib/getMarkupWrap.js
  var require_getMarkupWrap = __commonJS({
    "node_modules/fbjs/lib/getMarkupWrap.js"(exports, module) {
      "use strict";
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var invariant = require_invariant();
      var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement("div") : null;
      var shouldWrap = {};
      var selectWrap = [1, '<select multiple="true">', "</select>"];
      var tableWrap = [1, "<table>", "</table>"];
      var trWrap = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
      var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"];
      var markupWrap = {
        "*": [1, "?<div>", "</div>"],
        "area": [1, "<map>", "</map>"],
        "col": [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        "legend": [1, "<fieldset>", "</fieldset>"],
        "param": [1, "<object>", "</object>"],
        "tr": [2, "<table><tbody>", "</tbody></table>"],
        "optgroup": selectWrap,
        "option": selectWrap,
        "caption": tableWrap,
        "colgroup": tableWrap,
        "tbody": tableWrap,
        "tfoot": tableWrap,
        "thead": tableWrap,
        "td": trWrap,
        "th": trWrap
      };
      var svgElements = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
      svgElements.forEach(function(nodeName) {
        markupWrap[nodeName] = svgWrap;
        shouldWrap[nodeName] = true;
      });
      function getMarkupWrap(nodeName) {
        !!!dummyNode ? false ? invariant(false, "Markup wrapping node not initialized") : invariant(false) : void 0;
        if (!markupWrap.hasOwnProperty(nodeName)) {
          nodeName = "*";
        }
        if (!shouldWrap.hasOwnProperty(nodeName)) {
          if (nodeName === "*") {
            dummyNode.innerHTML = "<link />";
          } else {
            dummyNode.innerHTML = "<" + nodeName + "></" + nodeName + ">";
          }
          shouldWrap[nodeName] = !dummyNode.firstChild;
        }
        return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
      }
      module.exports = getMarkupWrap;
    }
  });

  // node_modules/fbjs/lib/createNodesFromMarkup.js
  var require_createNodesFromMarkup = __commonJS({
    "node_modules/fbjs/lib/createNodesFromMarkup.js"(exports, module) {
      "use strict";
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var createArrayFromMixed = require_createArrayFromMixed();
      var getMarkupWrap = require_getMarkupWrap();
      var invariant = require_invariant();
      var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement("div") : null;
      var nodeNamePattern = /^\s*<(\w+)/;
      function getNodeName(markup) {
        var nodeNameMatch = markup.match(nodeNamePattern);
        return nodeNameMatch && nodeNameMatch[1].toLowerCase();
      }
      function createNodesFromMarkup(markup, handleScript) {
        var node = dummyNode;
        !!!dummyNode ? false ? invariant(false, "createNodesFromMarkup dummy not initialized") : invariant(false) : void 0;
        var nodeName = getNodeName(markup);
        var wrap = nodeName && getMarkupWrap(nodeName);
        if (wrap) {
          node.innerHTML = wrap[1] + markup + wrap[2];
          var wrapDepth = wrap[0];
          while (wrapDepth--) {
            node = node.lastChild;
          }
        } else {
          node.innerHTML = markup;
        }
        var scripts = node.getElementsByTagName("script");
        if (scripts.length) {
          !handleScript ? false ? invariant(false, "createNodesFromMarkup(...): Unexpected <script> element rendered.") : invariant(false) : void 0;
          createArrayFromMixed(scripts).forEach(handleScript);
        }
        var nodes = createArrayFromMixed(node.childNodes);
        while (node.lastChild) {
          node.removeChild(node.lastChild);
        }
        return nodes;
      }
      module.exports = createNodesFromMarkup;
    }
  });

  // node_modules/fbjs/lib/emptyFunction.js
  var require_emptyFunction = __commonJS({
    "node_modules/fbjs/lib/emptyFunction.js"(exports, module) {
      "use strict";
      function makeEmptyFunction(arg) {
        return function() {
          return arg;
        };
      }
      function emptyFunction() {
      }
      emptyFunction.thatReturns = makeEmptyFunction;
      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
      emptyFunction.thatReturnsNull = makeEmptyFunction(null);
      emptyFunction.thatReturnsThis = function() {
        return this;
      };
      emptyFunction.thatReturnsArgument = function(arg) {
        return arg;
      };
      module.exports = emptyFunction;
    }
  });

  // node_modules/react/lib/Danger.js
  var require_Danger = __commonJS({
    "node_modules/react/lib/Danger.js"(exports, module) {
      "use strict";
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var createNodesFromMarkup = require_createNodesFromMarkup();
      var emptyFunction = require_emptyFunction();
      var getMarkupWrap = require_getMarkupWrap();
      var invariant = require_invariant();
      var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
      var RESULT_INDEX_ATTR = "data-danger-index";
      function getNodeName(markup) {
        return markup.substring(1, markup.indexOf(" "));
      }
      var Danger = {
        /**
         * Renders markup into an array of nodes. The markup is expected to render
         * into a list of root nodes. Also, the length of `resultList` and
         * `markupList` should be the same.
         *
         * @param {array<string>} markupList List of markup strings to render.
         * @return {array<DOMElement>} List of rendered nodes.
         * @internal
         */
        dangerouslyRenderMarkup: function(markupList) {
          !ExecutionEnvironment.canUseDOM ? false ? invariant(false, "dangerouslyRenderMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString for server rendering.") : invariant(false) : void 0;
          var nodeName;
          var markupByNodeName = {};
          for (var i = 0; i < markupList.length; i++) {
            !markupList[i] ? false ? invariant(false, "dangerouslyRenderMarkup(...): Missing markup.") : invariant(false) : void 0;
            nodeName = getNodeName(markupList[i]);
            nodeName = getMarkupWrap(nodeName) ? nodeName : "*";
            markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
            markupByNodeName[nodeName][i] = markupList[i];
          }
          var resultList = [];
          var resultListAssignmentCount = 0;
          for (nodeName in markupByNodeName) {
            if (!markupByNodeName.hasOwnProperty(nodeName)) {
              continue;
            }
            var markupListByNodeName = markupByNodeName[nodeName];
            var resultIndex;
            for (resultIndex in markupListByNodeName) {
              if (markupListByNodeName.hasOwnProperty(resultIndex)) {
                var markup = markupListByNodeName[resultIndex];
                markupListByNodeName[resultIndex] = markup.replace(
                  OPEN_TAG_NAME_EXP,
                  // This index will be parsed back out below.
                  "$1 " + RESULT_INDEX_ATTR + '="' + resultIndex + '" '
                );
              }
            }
            var renderNodes = createNodesFromMarkup(
              markupListByNodeName.join(""),
              emptyFunction
              // Do nothing special with <script> tags.
            );
            for (var j = 0; j < renderNodes.length; ++j) {
              var renderNode = renderNodes[j];
              if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
                resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
                renderNode.removeAttribute(RESULT_INDEX_ATTR);
                !!resultList.hasOwnProperty(resultIndex) ? false ? invariant(false, "Danger: Assigning to an already-occupied result index.") : invariant(false) : void 0;
                resultList[resultIndex] = renderNode;
                resultListAssignmentCount += 1;
              } else if (false) {
                console.error("Danger: Discarding unexpected node:", renderNode);
              }
            }
          }
          !(resultListAssignmentCount === resultList.length) ? false ? invariant(false, "Danger: Did not assign to every index of resultList.") : invariant(false) : void 0;
          !(resultList.length === markupList.length) ? false ? invariant(false, "Danger: Expected markup to render %s nodes, but rendered %s.", markupList.length, resultList.length) : invariant(false) : void 0;
          return resultList;
        },
        /**
         * Replaces a node with a string of markup at its current position within its
         * parent. The markup must render into a single root node.
         *
         * @param {DOMElement} oldChild Child node to replace.
         * @param {string} markup Markup to render in place of the child node.
         * @internal
         */
        dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
          !ExecutionEnvironment.canUseDOM ? false ? invariant(false, "dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.") : invariant(false) : void 0;
          !markup ? false ? invariant(false, "dangerouslyReplaceNodeWithMarkup(...): Missing markup.") : invariant(false) : void 0;
          !(oldChild.tagName.toLowerCase() !== "html") ? false ? invariant(false, "dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().") : invariant(false) : void 0;
          var newChild;
          if (typeof markup === "string") {
            newChild = createNodesFromMarkup(markup, emptyFunction)[0];
          } else {
            newChild = markup;
          }
          oldChild.parentNode.replaceChild(newChild, oldChild);
        }
      };
      module.exports = Danger;
    }
  });

  // node_modules/fbjs/lib/keyMirror.js
  var require_keyMirror = __commonJS({
    "node_modules/fbjs/lib/keyMirror.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      var keyMirror = function(obj) {
        var ret = {};
        var key;
        !(obj instanceof Object && !Array.isArray(obj)) ? false ? invariant(false, "keyMirror(...): Argument must be an object.") : invariant(false) : void 0;
        for (key in obj) {
          if (!obj.hasOwnProperty(key)) {
            continue;
          }
          ret[key] = key;
        }
        return ret;
      };
      module.exports = keyMirror;
    }
  });

  // node_modules/react/lib/ReactMultiChildUpdateTypes.js
  var require_ReactMultiChildUpdateTypes = __commonJS({
    "node_modules/react/lib/ReactMultiChildUpdateTypes.js"(exports, module) {
      "use strict";
      var keyMirror = require_keyMirror();
      var ReactMultiChildUpdateTypes = keyMirror({
        INSERT_MARKUP: null,
        MOVE_EXISTING: null,
        REMOVE_NODE: null,
        SET_MARKUP: null,
        TEXT_CONTENT: null
      });
      module.exports = ReactMultiChildUpdateTypes;
    }
  });

  // node_modules/react/lib/ReactPerf.js
  var require_ReactPerf = __commonJS({
    "node_modules/react/lib/ReactPerf.js"(exports, module) {
      "use strict";
      var ReactPerf = {
        /**
         * Boolean to enable/disable measurement. Set to false by default to prevent
         * accidental logging and perf loss.
         */
        enableMeasure: false,
        /**
         * Holds onto the measure function in use. By default, don't measure
         * anything, but we'll override this if we inject a measure function.
         */
        storedMeasure: _noMeasure,
        /**
         * @param {object} object
         * @param {string} objectName
         * @param {object<string>} methodNames
         */
        measureMethods: function(object, objectName, methodNames) {
          if (false) {
            for (var key in methodNames) {
              if (!methodNames.hasOwnProperty(key)) {
                continue;
              }
              object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
            }
          }
        },
        /**
         * Use this to wrap methods you want to measure. Zero overhead in production.
         *
         * @param {string} objName
         * @param {string} fnName
         * @param {function} func
         * @return {function}
         */
        measure: function(objName, fnName, func) {
          if (false) {
            var measuredFunc = null;
            var wrapper = function() {
              if (ReactPerf.enableMeasure) {
                if (!measuredFunc) {
                  measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
                }
                return measuredFunc.apply(this, arguments);
              }
              return func.apply(this, arguments);
            };
            wrapper.displayName = objName + "_" + fnName;
            return wrapper;
          }
          return func;
        },
        injection: {
          /**
           * @param {function} measure
           */
          injectMeasure: function(measure) {
            ReactPerf.storedMeasure = measure;
          }
        }
      };
      function _noMeasure(objName, fnName, func) {
        return func;
      }
      module.exports = ReactPerf;
    }
  });

  // node_modules/react/lib/setInnerHTML.js
  var require_setInnerHTML = __commonJS({
    "node_modules/react/lib/setInnerHTML.js"(exports, module) {
      "use strict";
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var WHITESPACE_TEST = /^[ \r\n\t\f]/;
      var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
      var setInnerHTML = function(node, html) {
        node.innerHTML = html;
      };
      if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
        setInnerHTML = function(node, html) {
          MSApp.execUnsafeLocalFunction(function() {
            node.innerHTML = html;
          });
        };
      }
      if (ExecutionEnvironment.canUseDOM) {
        testElement = document.createElement("div");
        testElement.innerHTML = " ";
        if (testElement.innerHTML === "") {
          setInnerHTML = function(node, html) {
            if (node.parentNode) {
              node.parentNode.replaceChild(node, node);
            }
            if (WHITESPACE_TEST.test(html) || html[0] === "<" && NONVISIBLE_TEST.test(html)) {
              node.innerHTML = String.fromCharCode(65279) + html;
              var textNode = node.firstChild;
              if (textNode.data.length === 1) {
                node.removeChild(textNode);
              } else {
                textNode.deleteData(0, 1);
              }
            } else {
              node.innerHTML = html;
            }
          };
        }
      }
      var testElement;
      module.exports = setInnerHTML;
    }
  });

  // node_modules/react/lib/escapeTextContentForBrowser.js
  var require_escapeTextContentForBrowser = __commonJS({
    "node_modules/react/lib/escapeTextContentForBrowser.js"(exports, module) {
      "use strict";
      var ESCAPE_LOOKUP = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
      };
      var ESCAPE_REGEX = /[&><"']/g;
      function escaper(match) {
        return ESCAPE_LOOKUP[match];
      }
      function escapeTextContentForBrowser(text) {
        return ("" + text).replace(ESCAPE_REGEX, escaper);
      }
      module.exports = escapeTextContentForBrowser;
    }
  });

  // node_modules/react/lib/setTextContent.js
  var require_setTextContent = __commonJS({
    "node_modules/react/lib/setTextContent.js"(exports, module) {
      "use strict";
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var escapeTextContentForBrowser = require_escapeTextContentForBrowser();
      var setInnerHTML = require_setInnerHTML();
      var setTextContent = function(node, text) {
        node.textContent = text;
      };
      if (ExecutionEnvironment.canUseDOM) {
        if (!("textContent" in document.documentElement)) {
          setTextContent = function(node, text) {
            setInnerHTML(node, escapeTextContentForBrowser(text));
          };
        }
      }
      module.exports = setTextContent;
    }
  });

  // node_modules/react/lib/DOMChildrenOperations.js
  var require_DOMChildrenOperations = __commonJS({
    "node_modules/react/lib/DOMChildrenOperations.js"(exports, module) {
      "use strict";
      var Danger = require_Danger();
      var ReactMultiChildUpdateTypes = require_ReactMultiChildUpdateTypes();
      var ReactPerf = require_ReactPerf();
      var setInnerHTML = require_setInnerHTML();
      var setTextContent = require_setTextContent();
      var invariant = require_invariant();
      function insertChildAt(parentNode, childNode, index) {
        var beforeChild = index >= parentNode.childNodes.length ? null : parentNode.childNodes.item(index);
        parentNode.insertBefore(childNode, beforeChild);
      }
      var DOMChildrenOperations = {
        dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,
        updateTextContent: setTextContent,
        /**
         * Updates a component's children by processing a series of updates. The
         * update configurations are each expected to have a `parentNode` property.
         *
         * @param {array<object>} updates List of update configurations.
         * @param {array<string>} markupList List of markup strings.
         * @internal
         */
        processUpdates: function(updates, markupList) {
          var update;
          var initialChildren = null;
          var updatedChildren = null;
          for (var i = 0; i < updates.length; i++) {
            update = updates[i];
            if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
              var updatedIndex = update.fromIndex;
              var updatedChild = update.parentNode.childNodes[updatedIndex];
              var parentID = update.parentID;
              !updatedChild ? false ? invariant(false, "processUpdates(): Unable to find child %s of element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.", updatedIndex, parentID) : invariant(false) : void 0;
              initialChildren = initialChildren || {};
              initialChildren[parentID] = initialChildren[parentID] || [];
              initialChildren[parentID][updatedIndex] = updatedChild;
              updatedChildren = updatedChildren || [];
              updatedChildren.push(updatedChild);
            }
          }
          var renderedMarkup;
          if (markupList.length && typeof markupList[0] === "string") {
            renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
          } else {
            renderedMarkup = markupList;
          }
          if (updatedChildren) {
            for (var j = 0; j < updatedChildren.length; j++) {
              updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
            }
          }
          for (var k = 0; k < updates.length; k++) {
            update = updates[k];
            switch (update.type) {
              case ReactMultiChildUpdateTypes.INSERT_MARKUP:
                insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
                break;
              case ReactMultiChildUpdateTypes.MOVE_EXISTING:
                insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
                break;
              case ReactMultiChildUpdateTypes.SET_MARKUP:
                setInnerHTML(update.parentNode, update.content);
                break;
              case ReactMultiChildUpdateTypes.TEXT_CONTENT:
                setTextContent(update.parentNode, update.content);
                break;
              case ReactMultiChildUpdateTypes.REMOVE_NODE:
                break;
            }
          }
        }
      };
      ReactPerf.measureMethods(DOMChildrenOperations, "DOMChildrenOperations", {
        updateTextContent: "updateTextContent"
      });
      module.exports = DOMChildrenOperations;
    }
  });

  // node_modules/react/lib/DOMProperty.js
  var require_DOMProperty = __commonJS({
    "node_modules/react/lib/DOMProperty.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      function checkMask(value, bitmask) {
        return (value & bitmask) === bitmask;
      }
      var DOMPropertyInjection = {
        /**
         * Mapping from normalized, camelcased property names to a configuration that
         * specifies how the associated DOM property should be accessed or rendered.
         */
        MUST_USE_ATTRIBUTE: 1,
        MUST_USE_PROPERTY: 2,
        HAS_SIDE_EFFECTS: 4,
        HAS_BOOLEAN_VALUE: 8,
        HAS_NUMERIC_VALUE: 16,
        HAS_POSITIVE_NUMERIC_VALUE: 32 | 16,
        HAS_OVERLOADED_BOOLEAN_VALUE: 64,
        /**
         * Inject some specialized knowledge about the DOM. This takes a config object
         * with the following properties:
         *
         * isCustomAttribute: function that given an attribute name will return true
         * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
         * attributes where it's impossible to enumerate all of the possible
         * attribute names,
         *
         * Properties: object mapping DOM property name to one of the
         * DOMPropertyInjection constants or null. If your attribute isn't in here,
         * it won't get written to the DOM.
         *
         * DOMAttributeNames: object mapping React attribute name to the DOM
         * attribute name. Attribute names not specified use the **lowercase**
         * normalized name.
         *
         * DOMAttributeNamespaces: object mapping React attribute name to the DOM
         * attribute namespace URL. (Attribute names not specified use no namespace.)
         *
         * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
         * Property names not specified use the normalized name.
         *
         * DOMMutationMethods: Properties that require special mutation methods. If
         * `value` is undefined, the mutation method should unset the property.
         *
         * @param {object} domPropertyConfig the config as described above.
         */
        injectDOMPropertyConfig: function(domPropertyConfig) {
          var Injection = DOMPropertyInjection;
          var Properties = domPropertyConfig.Properties || {};
          var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
          var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
          var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
          var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
          if (domPropertyConfig.isCustomAttribute) {
            DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
          }
          for (var propName in Properties) {
            !!DOMProperty.properties.hasOwnProperty(propName) ? false ? invariant(false, "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.", propName) : invariant(false) : void 0;
            var lowerCased = propName.toLowerCase();
            var propConfig = Properties[propName];
            var propertyInfo = {
              attributeName: lowerCased,
              attributeNamespace: null,
              propertyName: propName,
              mutationMethod: null,
              mustUseAttribute: checkMask(propConfig, Injection.MUST_USE_ATTRIBUTE),
              mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
              hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
              hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
              hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
              hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
              hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
            };
            !(!propertyInfo.mustUseAttribute || !propertyInfo.mustUseProperty) ? false ? invariant(false, "DOMProperty: Cannot require using both attribute and property: %s", propName) : invariant(false) : void 0;
            !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? false ? invariant(false, "DOMProperty: Properties that have side effects must use property: %s", propName) : invariant(false) : void 0;
            !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? false ? invariant(false, "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s", propName) : invariant(false) : void 0;
            if (false) {
              DOMProperty.getPossibleStandardName[lowerCased] = propName;
            }
            if (DOMAttributeNames.hasOwnProperty(propName)) {
              var attributeName = DOMAttributeNames[propName];
              propertyInfo.attributeName = attributeName;
              if (false) {
                DOMProperty.getPossibleStandardName[attributeName] = propName;
              }
            }
            if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
              propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
            }
            if (DOMPropertyNames.hasOwnProperty(propName)) {
              propertyInfo.propertyName = DOMPropertyNames[propName];
            }
            if (DOMMutationMethods.hasOwnProperty(propName)) {
              propertyInfo.mutationMethod = DOMMutationMethods[propName];
            }
            DOMProperty.properties[propName] = propertyInfo;
          }
        }
      };
      var defaultValueCache = {};
      var DOMProperty = {
        ID_ATTRIBUTE_NAME: "data-reactid",
        /**
         * Map from property "standard name" to an object with info about how to set
         * the property in the DOM. Each object contains:
         *
         * attributeName:
         *   Used when rendering markup or with `*Attribute()`.
         * attributeNamespace
         * propertyName:
         *   Used on DOM node instances. (This includes properties that mutate due to
         *   external factors.)
         * mutationMethod:
         *   If non-null, used instead of the property or `setAttribute()` after
         *   initial render.
         * mustUseAttribute:
         *   Whether the property must be accessed and mutated using `*Attribute()`.
         *   (This includes anything that fails `<propName> in <element>`.)
         * mustUseProperty:
         *   Whether the property must be accessed and mutated as an object property.
         * hasSideEffects:
         *   Whether or not setting a value causes side effects such as triggering
         *   resources to be loaded or text selection changes. If true, we read from
         *   the DOM before updating to ensure that the value is only set if it has
         *   changed.
         * hasBooleanValue:
         *   Whether the property should be removed when set to a falsey value.
         * hasNumericValue:
         *   Whether the property must be numeric or parse as a numeric and should be
         *   removed when set to a falsey value.
         * hasPositiveNumericValue:
         *   Whether the property must be positive numeric or parse as a positive
         *   numeric and should be removed when set to a falsey value.
         * hasOverloadedBooleanValue:
         *   Whether the property can be used as a flag as well as with a value.
         *   Removed when strictly equal to false; present without a value when
         *   strictly equal to true; present with a value otherwise.
         */
        properties: {},
        /**
         * Mapping from lowercase property names to the properly cased version, used
         * to warn in the case of missing properties. Available only in __DEV__.
         * @type {Object}
         */
        getPossibleStandardName: false ? {} : null,
        /**
         * All of the isCustomAttribute() functions that have been injected.
         */
        _isCustomAttributeFunctions: [],
        /**
         * Checks whether a property name is a custom attribute.
         * @method
         */
        isCustomAttribute: function(attributeName) {
          for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
            var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
            if (isCustomAttributeFn(attributeName)) {
              return true;
            }
          }
          return false;
        },
        /**
         * Returns the default property value for a DOM property (i.e., not an
         * attribute). Most default values are '' or false, but not all. Worse yet,
         * some (in particular, `type`) vary depending on the type of element.
         *
         * TODO: Is it better to grab all the possible properties when creating an
         * element to avoid having to create the same element twice?
         */
        getDefaultValueForProperty: function(nodeName, prop) {
          var nodeDefaults = defaultValueCache[nodeName];
          var testElement;
          if (!nodeDefaults) {
            defaultValueCache[nodeName] = nodeDefaults = {};
          }
          if (!(prop in nodeDefaults)) {
            testElement = document.createElement(nodeName);
            nodeDefaults[prop] = testElement[prop];
          }
          return nodeDefaults[prop];
        },
        injection: DOMPropertyInjection
      };
      module.exports = DOMProperty;
    }
  });

  // node_modules/react/lib/quoteAttributeValueForBrowser.js
  var require_quoteAttributeValueForBrowser = __commonJS({
    "node_modules/react/lib/quoteAttributeValueForBrowser.js"(exports, module) {
      "use strict";
      var escapeTextContentForBrowser = require_escapeTextContentForBrowser();
      function quoteAttributeValueForBrowser(value) {
        return '"' + escapeTextContentForBrowser(value) + '"';
      }
      module.exports = quoteAttributeValueForBrowser;
    }
  });

  // node_modules/fbjs/lib/warning.js
  var require_warning = __commonJS({
    "node_modules/fbjs/lib/warning.js"(exports, module) {
      "use strict";
      var emptyFunction = require_emptyFunction();
      var warning = emptyFunction;
      if (false) {
        warning = function(condition, format) {
          for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          if (format === void 0) {
            throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
          }
          if (format.indexOf("Failed Composite propType: ") === 0) {
            return;
          }
          if (!condition) {
            var argIndex = 0;
            var message = "Warning: " + format.replace(/%s/g, function() {
              return args[argIndex++];
            });
            if (typeof console !== "undefined") {
              console.error(message);
            }
            try {
              throw new Error(message);
            } catch (x) {
            }
          }
        };
      }
      module.exports = warning;
    }
  });

  // node_modules/react/lib/DOMPropertyOperations.js
  var require_DOMPropertyOperations = __commonJS({
    "node_modules/react/lib/DOMPropertyOperations.js"(exports, module) {
      "use strict";
      var DOMProperty = require_DOMProperty();
      var ReactPerf = require_ReactPerf();
      var quoteAttributeValueForBrowser = require_quoteAttributeValueForBrowser();
      var warning = require_warning();
      var VALID_ATTRIBUTE_NAME_REGEX = /^[a-zA-Z_][\w\.\-]*$/;
      var illegalAttributeNameCache = {};
      var validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
          return true;
        }
        if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
          return false;
        }
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
          validatedAttributeNameCache[attributeName] = true;
          return true;
        }
        illegalAttributeNameCache[attributeName] = true;
        false ? warning(false, "Invalid attribute name: `%s`", attributeName) : void 0;
        return false;
      }
      function shouldIgnoreValue(propertyInfo, value) {
        return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
      }
      if (false) {
        reactProps = {
          children: true,
          dangerouslySetInnerHTML: true,
          key: true,
          ref: true
        };
        warnedProperties = {};
        warnUnknownProperty = function(name) {
          if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
            return;
          }
          warnedProperties[name] = true;
          var lowerCasedName = name.toLowerCase();
          var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
          false ? warning(standardName == null, "Unknown DOM property %s. Did you mean %s?", name, standardName) : void 0;
        };
      }
      var reactProps;
      var warnedProperties;
      var warnUnknownProperty;
      var DOMPropertyOperations = {
        /**
         * Creates markup for the ID property.
         *
         * @param {string} id Unescaped ID.
         * @return {string} Markup string.
         */
        createMarkupForID: function(id) {
          return DOMProperty.ID_ATTRIBUTE_NAME + "=" + quoteAttributeValueForBrowser(id);
        },
        setAttributeForID: function(node, id) {
          node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
        },
        /**
         * Creates markup for a property.
         *
         * @param {string} name
         * @param {*} value
         * @return {?string} Markup string, or null if the property was invalid.
         */
        createMarkupForProperty: function(name, value) {
          var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
          if (propertyInfo) {
            if (shouldIgnoreValue(propertyInfo, value)) {
              return "";
            }
            var attributeName = propertyInfo.attributeName;
            if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
              return attributeName + '=""';
            }
            return attributeName + "=" + quoteAttributeValueForBrowser(value);
          } else if (DOMProperty.isCustomAttribute(name)) {
            if (value == null) {
              return "";
            }
            return name + "=" + quoteAttributeValueForBrowser(value);
          } else if (false) {
            warnUnknownProperty(name);
          }
          return null;
        },
        /**
         * Creates markup for a custom property.
         *
         * @param {string} name
         * @param {*} value
         * @return {string} Markup string, or empty string if the property was invalid.
         */
        createMarkupForCustomAttribute: function(name, value) {
          if (!isAttributeNameSafe(name) || value == null) {
            return "";
          }
          return name + "=" + quoteAttributeValueForBrowser(value);
        },
        /**
         * Sets the value for a property on a node.
         *
         * @param {DOMElement} node
         * @param {string} name
         * @param {*} value
         */
        setValueForProperty: function(node, name, value) {
          var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
          if (propertyInfo) {
            var mutationMethod = propertyInfo.mutationMethod;
            if (mutationMethod) {
              mutationMethod(node, value);
            } else if (shouldIgnoreValue(propertyInfo, value)) {
              this.deleteValueForProperty(node, name);
            } else if (propertyInfo.mustUseAttribute) {
              var attributeName = propertyInfo.attributeName;
              var namespace = propertyInfo.attributeNamespace;
              if (namespace) {
                node.setAttributeNS(namespace, attributeName, "" + value);
              } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
                node.setAttribute(attributeName, "");
              } else {
                node.setAttribute(attributeName, "" + value);
              }
            } else {
              var propName = propertyInfo.propertyName;
              if (!propertyInfo.hasSideEffects || "" + node[propName] !== "" + value) {
                node[propName] = value;
              }
            }
          } else if (DOMProperty.isCustomAttribute(name)) {
            DOMPropertyOperations.setValueForAttribute(node, name, value);
          } else if (false) {
            warnUnknownProperty(name);
          }
        },
        setValueForAttribute: function(node, name, value) {
          if (!isAttributeNameSafe(name)) {
            return;
          }
          if (value == null) {
            node.removeAttribute(name);
          } else {
            node.setAttribute(name, "" + value);
          }
        },
        /**
         * Deletes the value for a property on a node.
         *
         * @param {DOMElement} node
         * @param {string} name
         */
        deleteValueForProperty: function(node, name) {
          var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
          if (propertyInfo) {
            var mutationMethod = propertyInfo.mutationMethod;
            if (mutationMethod) {
              mutationMethod(node, void 0);
            } else if (propertyInfo.mustUseAttribute) {
              node.removeAttribute(propertyInfo.attributeName);
            } else {
              var propName = propertyInfo.propertyName;
              var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
              if (!propertyInfo.hasSideEffects || "" + node[propName] !== defaultValue) {
                node[propName] = defaultValue;
              }
            }
          } else if (DOMProperty.isCustomAttribute(name)) {
            node.removeAttribute(name);
          } else if (false) {
            warnUnknownProperty(name);
          }
        }
      };
      ReactPerf.measureMethods(DOMPropertyOperations, "DOMPropertyOperations", {
        setValueForProperty: "setValueForProperty",
        setValueForAttribute: "setValueForAttribute",
        deleteValueForProperty: "deleteValueForProperty"
      });
      module.exports = DOMPropertyOperations;
    }
  });

  // node_modules/react/lib/EventConstants.js
  var require_EventConstants = __commonJS({
    "node_modules/react/lib/EventConstants.js"(exports, module) {
      "use strict";
      var keyMirror = require_keyMirror();
      var PropagationPhases = keyMirror({ bubbled: null, captured: null });
      var topLevelTypes = keyMirror({
        topAbort: null,
        topBlur: null,
        topCanPlay: null,
        topCanPlayThrough: null,
        topChange: null,
        topClick: null,
        topCompositionEnd: null,
        topCompositionStart: null,
        topCompositionUpdate: null,
        topContextMenu: null,
        topCopy: null,
        topCut: null,
        topDoubleClick: null,
        topDrag: null,
        topDragEnd: null,
        topDragEnter: null,
        topDragExit: null,
        topDragLeave: null,
        topDragOver: null,
        topDragStart: null,
        topDrop: null,
        topDurationChange: null,
        topEmptied: null,
        topEncrypted: null,
        topEnded: null,
        topError: null,
        topFocus: null,
        topInput: null,
        topKeyDown: null,
        topKeyPress: null,
        topKeyUp: null,
        topLoad: null,
        topLoadedData: null,
        topLoadedMetadata: null,
        topLoadStart: null,
        topMouseDown: null,
        topMouseMove: null,
        topMouseOut: null,
        topMouseOver: null,
        topMouseUp: null,
        topPaste: null,
        topPause: null,
        topPlay: null,
        topPlaying: null,
        topProgress: null,
        topRateChange: null,
        topReset: null,
        topScroll: null,
        topSeeked: null,
        topSeeking: null,
        topSelectionChange: null,
        topStalled: null,
        topSubmit: null,
        topSuspend: null,
        topTextInput: null,
        topTimeUpdate: null,
        topTouchCancel: null,
        topTouchEnd: null,
        topTouchMove: null,
        topTouchStart: null,
        topVolumeChange: null,
        topWaiting: null,
        topWheel: null
      });
      var EventConstants = {
        topLevelTypes,
        PropagationPhases
      };
      module.exports = EventConstants;
    }
  });

  // node_modules/react/lib/EventPluginRegistry.js
  var require_EventPluginRegistry = __commonJS({
    "node_modules/react/lib/EventPluginRegistry.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      var EventPluginOrder = null;
      var namesToPlugins = {};
      function recomputePluginOrdering() {
        if (!EventPluginOrder) {
          return;
        }
        for (var pluginName in namesToPlugins) {
          var PluginModule = namesToPlugins[pluginName];
          var pluginIndex = EventPluginOrder.indexOf(pluginName);
          !(pluginIndex > -1) ? false ? invariant(false, "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.", pluginName) : invariant(false) : void 0;
          if (EventPluginRegistry.plugins[pluginIndex]) {
            continue;
          }
          !PluginModule.extractEvents ? false ? invariant(false, "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.", pluginName) : invariant(false) : void 0;
          EventPluginRegistry.plugins[pluginIndex] = PluginModule;
          var publishedEvents = PluginModule.eventTypes;
          for (var eventName in publishedEvents) {
            !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? false ? invariant(false, "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.", eventName, pluginName) : invariant(false) : void 0;
          }
        }
      }
      function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
        !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? false ? invariant(false, "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.", eventName) : invariant(false) : void 0;
        EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
        var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
        if (phasedRegistrationNames) {
          for (var phaseName in phasedRegistrationNames) {
            if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
              var phasedRegistrationName = phasedRegistrationNames[phaseName];
              publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
            }
          }
          return true;
        } else if (dispatchConfig.registrationName) {
          publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
          return true;
        }
        return false;
      }
      function publishRegistrationName(registrationName, PluginModule, eventName) {
        !!EventPluginRegistry.registrationNameModules[registrationName] ? false ? invariant(false, "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.", registrationName) : invariant(false) : void 0;
        EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
        EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
      }
      var EventPluginRegistry = {
        /**
         * Ordered list of injected plugins.
         */
        plugins: [],
        /**
         * Mapping from event name to dispatch config
         */
        eventNameDispatchConfigs: {},
        /**
         * Mapping from registration name to plugin module
         */
        registrationNameModules: {},
        /**
         * Mapping from registration name to event name
         */
        registrationNameDependencies: {},
        /**
         * Injects an ordering of plugins (by plugin name). This allows the ordering
         * to be decoupled from injection of the actual plugins so that ordering is
         * always deterministic regardless of packaging, on-the-fly injection, etc.
         *
         * @param {array} InjectedEventPluginOrder
         * @internal
         * @see {EventPluginHub.injection.injectEventPluginOrder}
         */
        injectEventPluginOrder: function(InjectedEventPluginOrder) {
          !!EventPluginOrder ? false ? invariant(false, "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.") : invariant(false) : void 0;
          EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
          recomputePluginOrdering();
        },
        /**
         * Injects plugins to be used by `EventPluginHub`. The plugin names must be
         * in the ordering injected by `injectEventPluginOrder`.
         *
         * Plugins can be injected as part of page initialization or on-the-fly.
         *
         * @param {object} injectedNamesToPlugins Map from names to plugin modules.
         * @internal
         * @see {EventPluginHub.injection.injectEventPluginsByName}
         */
        injectEventPluginsByName: function(injectedNamesToPlugins) {
          var isOrderingDirty = false;
          for (var pluginName in injectedNamesToPlugins) {
            if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
              continue;
            }
            var PluginModule = injectedNamesToPlugins[pluginName];
            if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
              !!namesToPlugins[pluginName] ? false ? invariant(false, "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.", pluginName) : invariant(false) : void 0;
              namesToPlugins[pluginName] = PluginModule;
              isOrderingDirty = true;
            }
          }
          if (isOrderingDirty) {
            recomputePluginOrdering();
          }
        },
        /**
         * Looks up the plugin for the supplied event.
         *
         * @param {object} event A synthetic event.
         * @return {?object} The plugin that created the supplied event.
         * @internal
         */
        getPluginModuleForEvent: function(event) {
          var dispatchConfig = event.dispatchConfig;
          if (dispatchConfig.registrationName) {
            return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
          }
          for (var phase in dispatchConfig.phasedRegistrationNames) {
            if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
              continue;
            }
            var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
            if (PluginModule) {
              return PluginModule;
            }
          }
          return null;
        },
        /**
         * Exposed for unit testing.
         * @private
         */
        _resetEventPlugins: function() {
          EventPluginOrder = null;
          for (var pluginName in namesToPlugins) {
            if (namesToPlugins.hasOwnProperty(pluginName)) {
              delete namesToPlugins[pluginName];
            }
          }
          EventPluginRegistry.plugins.length = 0;
          var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
          for (var eventName in eventNameDispatchConfigs) {
            if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
              delete eventNameDispatchConfigs[eventName];
            }
          }
          var registrationNameModules = EventPluginRegistry.registrationNameModules;
          for (var registrationName in registrationNameModules) {
            if (registrationNameModules.hasOwnProperty(registrationName)) {
              delete registrationNameModules[registrationName];
            }
          }
        }
      };
      module.exports = EventPluginRegistry;
    }
  });

  // node_modules/react/lib/ReactErrorUtils.js
  var require_ReactErrorUtils = __commonJS({
    "node_modules/react/lib/ReactErrorUtils.js"(exports, module) {
      "use strict";
      var caughtError = null;
      function invokeGuardedCallback(name, func, a, b) {
        try {
          return func(a, b);
        } catch (x) {
          if (caughtError === null) {
            caughtError = x;
          }
          return void 0;
        }
      }
      var ReactErrorUtils = {
        invokeGuardedCallback,
        /**
         * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
         * handler are sure to be rethrown by rethrowCaughtError.
         */
        invokeGuardedCallbackWithCatch: invokeGuardedCallback,
        /**
         * During execution of guarded functions we will capture the first error which
         * we will rethrow to be handled by the top level error handler.
         */
        rethrowCaughtError: function() {
          if (caughtError) {
            var error = caughtError;
            caughtError = null;
            throw error;
          }
        }
      };
      if (false) {
        if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
          fakeNode = document.createElement("react");
          ReactErrorUtils.invokeGuardedCallback = function(name, func, a, b) {
            var boundFunc = func.bind(null, a, b);
            var evtType = "react-" + name;
            fakeNode.addEventListener(evtType, boundFunc, false);
            var evt = document.createEvent("Event");
            evt.initEvent(evtType, false, false);
            fakeNode.dispatchEvent(evt);
            fakeNode.removeEventListener(evtType, boundFunc, false);
          };
        }
      }
      var fakeNode;
      module.exports = ReactErrorUtils;
    }
  });

  // node_modules/react/lib/EventPluginUtils.js
  var require_EventPluginUtils = __commonJS({
    "node_modules/react/lib/EventPluginUtils.js"(exports, module) {
      "use strict";
      var EventConstants = require_EventConstants();
      var ReactErrorUtils = require_ReactErrorUtils();
      var invariant = require_invariant();
      var warning = require_warning();
      var injection = {
        Mount: null,
        injectMount: function(InjectedMount) {
          injection.Mount = InjectedMount;
          if (false) {
            false ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, "EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode or getID.") : void 0;
          }
        }
      };
      var topLevelTypes = EventConstants.topLevelTypes;
      function isEndish(topLevelType) {
        return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
      }
      function isMoveish(topLevelType) {
        return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
      }
      function isStartish(topLevelType) {
        return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
      }
      if (false) {
        validateEventDispatches = function(event) {
          var dispatchListeners = event._dispatchListeners;
          var dispatchIDs = event._dispatchIDs;
          var listenersIsArr = Array.isArray(dispatchListeners);
          var idsIsArr = Array.isArray(dispatchIDs);
          var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
          var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
          false ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, "EventPluginUtils: Invalid `event`.") : void 0;
        };
      }
      function executeDispatch(event, simulated, listener, domID) {
        var type = event.type || "unknown-event";
        event.currentTarget = injection.Mount.getNode(domID);
        if (simulated) {
          ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
        } else {
          ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
        }
        event.currentTarget = null;
      }
      function executeDispatchesInOrder(event, simulated) {
        var dispatchListeners = event._dispatchListeners;
        var dispatchIDs = event._dispatchIDs;
        if (false) {
          validateEventDispatches(event);
        }
        if (Array.isArray(dispatchListeners)) {
          for (var i = 0; i < dispatchListeners.length; i++) {
            if (event.isPropagationStopped()) {
              break;
            }
            executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
          }
        } else if (dispatchListeners) {
          executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
        }
        event._dispatchListeners = null;
        event._dispatchIDs = null;
      }
      function executeDispatchesInOrderStopAtTrueImpl(event) {
        var dispatchListeners = event._dispatchListeners;
        var dispatchIDs = event._dispatchIDs;
        if (false) {
          validateEventDispatches(event);
        }
        if (Array.isArray(dispatchListeners)) {
          for (var i = 0; i < dispatchListeners.length; i++) {
            if (event.isPropagationStopped()) {
              break;
            }
            if (dispatchListeners[i](event, dispatchIDs[i])) {
              return dispatchIDs[i];
            }
          }
        } else if (dispatchListeners) {
          if (dispatchListeners(event, dispatchIDs)) {
            return dispatchIDs;
          }
        }
        return null;
      }
      function executeDispatchesInOrderStopAtTrue(event) {
        var ret = executeDispatchesInOrderStopAtTrueImpl(event);
        event._dispatchIDs = null;
        event._dispatchListeners = null;
        return ret;
      }
      function executeDirectDispatch(event) {
        if (false) {
          validateEventDispatches(event);
        }
        var dispatchListener = event._dispatchListeners;
        var dispatchID = event._dispatchIDs;
        !!Array.isArray(dispatchListener) ? false ? invariant(false, "executeDirectDispatch(...): Invalid `event`.") : invariant(false) : void 0;
        var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
        event._dispatchListeners = null;
        event._dispatchIDs = null;
        return res;
      }
      function hasDispatches(event) {
        return !!event._dispatchListeners;
      }
      var EventPluginUtils = {
        isEndish,
        isMoveish,
        isStartish,
        executeDirectDispatch,
        executeDispatchesInOrder,
        executeDispatchesInOrderStopAtTrue,
        hasDispatches,
        getNode: function(id) {
          return injection.Mount.getNode(id);
        },
        getID: function(node) {
          return injection.Mount.getID(node);
        },
        injection
      };
      module.exports = EventPluginUtils;
    }
  });

  // node_modules/react/lib/accumulateInto.js
  var require_accumulateInto = __commonJS({
    "node_modules/react/lib/accumulateInto.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      function accumulateInto(current, next) {
        !(next != null) ? false ? invariant(false, "accumulateInto(...): Accumulated items must not be null or undefined.") : invariant(false) : void 0;
        if (current == null) {
          return next;
        }
        var currentIsArray = Array.isArray(current);
        var nextIsArray = Array.isArray(next);
        if (currentIsArray && nextIsArray) {
          current.push.apply(current, next);
          return current;
        }
        if (currentIsArray) {
          current.push(next);
          return current;
        }
        if (nextIsArray) {
          return [current].concat(next);
        }
        return [current, next];
      }
      module.exports = accumulateInto;
    }
  });

  // node_modules/react/lib/forEachAccumulated.js
  var require_forEachAccumulated = __commonJS({
    "node_modules/react/lib/forEachAccumulated.js"(exports, module) {
      "use strict";
      var forEachAccumulated = function(arr, cb, scope) {
        if (Array.isArray(arr)) {
          arr.forEach(cb, scope);
        } else if (arr) {
          cb.call(scope, arr);
        }
      };
      module.exports = forEachAccumulated;
    }
  });

  // node_modules/react/lib/EventPluginHub.js
  var require_EventPluginHub = __commonJS({
    "node_modules/react/lib/EventPluginHub.js"(exports, module) {
      "use strict";
      var EventPluginRegistry = require_EventPluginRegistry();
      var EventPluginUtils = require_EventPluginUtils();
      var ReactErrorUtils = require_ReactErrorUtils();
      var accumulateInto = require_accumulateInto();
      var forEachAccumulated = require_forEachAccumulated();
      var invariant = require_invariant();
      var warning = require_warning();
      var listenerBank = {};
      var eventQueue = null;
      var executeDispatchesAndRelease = function(event, simulated) {
        if (event) {
          EventPluginUtils.executeDispatchesInOrder(event, simulated);
          if (!event.isPersistent()) {
            event.constructor.release(event);
          }
        }
      };
      var executeDispatchesAndReleaseSimulated = function(e) {
        return executeDispatchesAndRelease(e, true);
      };
      var executeDispatchesAndReleaseTopLevel = function(e) {
        return executeDispatchesAndRelease(e, false);
      };
      var InstanceHandle = null;
      var EventPluginHub = {
        /**
         * Methods for injecting dependencies.
         */
        injection: {
          /**
           * @param {object} InjectedMount
           * @public
           */
          injectMount: EventPluginUtils.injection.injectMount,
          /**
           * @param {object} InjectedInstanceHandle
           * @public
           */
          injectInstanceHandle: function(InjectedInstanceHandle) {
            InstanceHandle = InjectedInstanceHandle;
            if (false) {
              validateInstanceHandle();
            }
          },
          getInstanceHandle: function() {
            if (false) {
              validateInstanceHandle();
            }
            return InstanceHandle;
          },
          /**
           * @param {array} InjectedEventPluginOrder
           * @public
           */
          injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
          /**
           * @param {object} injectedNamesToPlugins Map from names to plugin modules.
           */
          injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
        },
        eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,
        registrationNameModules: EventPluginRegistry.registrationNameModules,
        /**
         * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
         *
         * @param {string} id ID of the DOM element.
         * @param {string} registrationName Name of listener (e.g. `onClick`).
         * @param {?function} listener The callback to store.
         */
        putListener: function(id, registrationName, listener) {
          !(typeof listener === "function") ? false ? invariant(false, "Expected %s listener to be a function, instead got type %s", registrationName, typeof listener) : invariant(false) : void 0;
          var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
          bankForRegistrationName[id] = listener;
          var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
          if (PluginModule && PluginModule.didPutListener) {
            PluginModule.didPutListener(id, registrationName, listener);
          }
        },
        /**
         * @param {string} id ID of the DOM element.
         * @param {string} registrationName Name of listener (e.g. `onClick`).
         * @return {?function} The stored callback.
         */
        getListener: function(id, registrationName) {
          var bankForRegistrationName = listenerBank[registrationName];
          return bankForRegistrationName && bankForRegistrationName[id];
        },
        /**
         * Deletes a listener from the registration bank.
         *
         * @param {string} id ID of the DOM element.
         * @param {string} registrationName Name of listener (e.g. `onClick`).
         */
        deleteListener: function(id, registrationName) {
          var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
          if (PluginModule && PluginModule.willDeleteListener) {
            PluginModule.willDeleteListener(id, registrationName);
          }
          var bankForRegistrationName = listenerBank[registrationName];
          if (bankForRegistrationName) {
            delete bankForRegistrationName[id];
          }
        },
        /**
         * Deletes all listeners for the DOM element with the supplied ID.
         *
         * @param {string} id ID of the DOM element.
         */
        deleteAllListeners: function(id) {
          for (var registrationName in listenerBank) {
            if (!listenerBank[registrationName][id]) {
              continue;
            }
            var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
            if (PluginModule && PluginModule.willDeleteListener) {
              PluginModule.willDeleteListener(id, registrationName);
            }
            delete listenerBank[registrationName][id];
          }
        },
        /**
         * Allows registered plugins an opportunity to extract events from top-level
         * native browser events.
         *
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {DOMEventTarget} topLevelTarget The listening component root node.
         * @param {string} topLevelTargetID ID of `topLevelTarget`.
         * @param {object} nativeEvent Native browser event.
         * @return {*} An accumulation of synthetic events.
         * @internal
         */
        extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
          var events;
          var plugins = EventPluginRegistry.plugins;
          for (var i = 0; i < plugins.length; i++) {
            var possiblePlugin = plugins[i];
            if (possiblePlugin) {
              var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
              if (extractedEvents) {
                events = accumulateInto(events, extractedEvents);
              }
            }
          }
          return events;
        },
        /**
         * Enqueues a synthetic event that should be dispatched when
         * `processEventQueue` is invoked.
         *
         * @param {*} events An accumulation of synthetic events.
         * @internal
         */
        enqueueEvents: function(events) {
          if (events) {
            eventQueue = accumulateInto(eventQueue, events);
          }
        },
        /**
         * Dispatches all synthetic events on the event queue.
         *
         * @internal
         */
        processEventQueue: function(simulated) {
          var processingEventQueue = eventQueue;
          eventQueue = null;
          if (simulated) {
            forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
          } else {
            forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
          }
          !!eventQueue ? false ? invariant(false, "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.") : invariant(false) : void 0;
          ReactErrorUtils.rethrowCaughtError();
        },
        /**
         * These are needed for tests only. Do not use!
         */
        __purge: function() {
          listenerBank = {};
        },
        __getListenerBank: function() {
          return listenerBank;
        }
      };
      module.exports = EventPluginHub;
    }
  });

  // node_modules/react/lib/ReactEventEmitterMixin.js
  var require_ReactEventEmitterMixin = __commonJS({
    "node_modules/react/lib/ReactEventEmitterMixin.js"(exports, module) {
      "use strict";
      var EventPluginHub = require_EventPluginHub();
      function runEventQueueInBatch(events) {
        EventPluginHub.enqueueEvents(events);
        EventPluginHub.processEventQueue(false);
      }
      var ReactEventEmitterMixin = {
        /**
         * Streams a fired top-level event to `EventPluginHub` where plugins have the
         * opportunity to create `ReactEvent`s to be dispatched.
         *
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {object} topLevelTarget The listening component root node.
         * @param {string} topLevelTargetID ID of `topLevelTarget`.
         * @param {object} nativeEvent Native environment event.
         */
        handleTopLevel: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
          var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
          runEventQueueInBatch(events);
        }
      };
      module.exports = ReactEventEmitterMixin;
    }
  });

  // node_modules/react/lib/ViewportMetrics.js
  var require_ViewportMetrics = __commonJS({
    "node_modules/react/lib/ViewportMetrics.js"(exports, module) {
      "use strict";
      var ViewportMetrics = {
        currentScrollLeft: 0,
        currentScrollTop: 0,
        refreshScrollValues: function(scrollPosition) {
          ViewportMetrics.currentScrollLeft = scrollPosition.x;
          ViewportMetrics.currentScrollTop = scrollPosition.y;
        }
      };
      module.exports = ViewportMetrics;
    }
  });

  // node_modules/react/lib/Object.assign.js
  var require_Object_assign = __commonJS({
    "node_modules/react/lib/Object.assign.js"(exports, module) {
      "use strict";
      function assign(target, sources) {
        if (target == null) {
          throw new TypeError("Object.assign target cannot be null or undefined");
        }
        var to = Object(target);
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
          var nextSource = arguments[nextIndex];
          if (nextSource == null) {
            continue;
          }
          var from = Object(nextSource);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
        }
        return to;
      }
      module.exports = assign;
    }
  });

  // node_modules/react/lib/isEventSupported.js
  var require_isEventSupported = __commonJS({
    "node_modules/react/lib/isEventSupported.js"(exports, module) {
      "use strict";
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var useHasFeature;
      if (ExecutionEnvironment.canUseDOM) {
        useHasFeature = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
        // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
        document.implementation.hasFeature("", "") !== true;
      }
      function isEventSupported(eventNameSuffix, capture) {
        if (!ExecutionEnvironment.canUseDOM || capture && !("addEventListener" in document)) {
          return false;
        }
        var eventName = "on" + eventNameSuffix;
        var isSupported = eventName in document;
        if (!isSupported) {
          var element = document.createElement("div");
          element.setAttribute(eventName, "return;");
          isSupported = typeof element[eventName] === "function";
        }
        if (!isSupported && useHasFeature && eventNameSuffix === "wheel") {
          isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
        }
        return isSupported;
      }
      module.exports = isEventSupported;
    }
  });

  // node_modules/react/lib/ReactBrowserEventEmitter.js
  var require_ReactBrowserEventEmitter = __commonJS({
    "node_modules/react/lib/ReactBrowserEventEmitter.js"(exports, module) {
      "use strict";
      var EventConstants = require_EventConstants();
      var EventPluginHub = require_EventPluginHub();
      var EventPluginRegistry = require_EventPluginRegistry();
      var ReactEventEmitterMixin = require_ReactEventEmitterMixin();
      var ReactPerf = require_ReactPerf();
      var ViewportMetrics = require_ViewportMetrics();
      var assign = require_Object_assign();
      var isEventSupported = require_isEventSupported();
      var alreadyListeningTo = {};
      var isMonitoringScrollValue = false;
      var reactTopListenersCounter = 0;
      var topEventMapping = {
        topAbort: "abort",
        topBlur: "blur",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topChange: "change",
        topClick: "click",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topScroll: "scroll",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topSelectionChange: "selectionchange",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTextInput: "textInput",
        topTimeUpdate: "timeupdate",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
        topWheel: "wheel"
      };
      var topListenersIDKey = "_reactListenersID" + String(Math.random()).slice(2);
      function getListeningForDocument(mountAt) {
        if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
          mountAt[topListenersIDKey] = reactTopListenersCounter++;
          alreadyListeningTo[mountAt[topListenersIDKey]] = {};
        }
        return alreadyListeningTo[mountAt[topListenersIDKey]];
      }
      var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {
        /**
         * Injectable event backend
         */
        ReactEventListener: null,
        injection: {
          /**
           * @param {object} ReactEventListener
           */
          injectReactEventListener: function(ReactEventListener) {
            ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
            ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
          }
        },
        /**
         * Sets whether or not any created callbacks should be enabled.
         *
         * @param {boolean} enabled True if callbacks should be enabled.
         */
        setEnabled: function(enabled) {
          if (ReactBrowserEventEmitter.ReactEventListener) {
            ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
          }
        },
        /**
         * @return {boolean} True if callbacks are enabled.
         */
        isEnabled: function() {
          return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
        },
        /**
         * We listen for bubbled touch events on the document object.
         *
         * Firefox v8.01 (and possibly others) exhibited strange behavior when
         * mounting `onmousemove` events at some node that was not the document
         * element. The symptoms were that if your mouse is not moving over something
         * contained within that mount point (for example on the background) the
         * top-level listeners for `onmousemove` won't be called. However, if you
         * register the `mousemove` on the document object, then it will of course
         * catch all `mousemove`s. This along with iOS quirks, justifies restricting
         * top-level listeners to the document object only, at least for these
         * movement types of events and possibly all events.
         *
         * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
         *
         * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
         * they bubble to document.
         *
         * @param {string} registrationName Name of listener (e.g. `onClick`).
         * @param {object} contentDocumentHandle Document which owns the container
         */
        listenTo: function(registrationName, contentDocumentHandle) {
          var mountAt = contentDocumentHandle;
          var isListening = getListeningForDocument(mountAt);
          var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
          var topLevelTypes = EventConstants.topLevelTypes;
          for (var i = 0; i < dependencies.length; i++) {
            var dependency = dependencies[i];
            if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
              if (dependency === topLevelTypes.topWheel) {
                if (isEventSupported("wheel")) {
                  ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "wheel", mountAt);
                } else if (isEventSupported("mousewheel")) {
                  ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "mousewheel", mountAt);
                } else {
                  ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, "DOMMouseScroll", mountAt);
                }
              } else if (dependency === topLevelTypes.topScroll) {
                if (isEventSupported("scroll", true)) {
                  ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, "scroll", mountAt);
                } else {
                  ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, "scroll", ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
                }
              } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {
                if (isEventSupported("focus", true)) {
                  ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, "focus", mountAt);
                  ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, "blur", mountAt);
                } else if (isEventSupported("focusin")) {
                  ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, "focusin", mountAt);
                  ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, "focusout", mountAt);
                }
                isListening[topLevelTypes.topBlur] = true;
                isListening[topLevelTypes.topFocus] = true;
              } else if (topEventMapping.hasOwnProperty(dependency)) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
              }
              isListening[dependency] = true;
            }
          }
        },
        trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
          return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
        },
        trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
          return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
        },
        /**
         * Listens to window scroll and resize events. We cache scroll values so that
         * application code can access them without triggering reflows.
         *
         * NOTE: Scroll events do not bubble.
         *
         * @see http://www.quirksmode.org/dom/events/scroll.html
         */
        ensureScrollValueMonitoring: function() {
          if (!isMonitoringScrollValue) {
            var refresh = ViewportMetrics.refreshScrollValues;
            ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
            isMonitoringScrollValue = true;
          }
        },
        eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,
        registrationNameModules: EventPluginHub.registrationNameModules,
        putListener: EventPluginHub.putListener,
        getListener: EventPluginHub.getListener,
        deleteListener: EventPluginHub.deleteListener,
        deleteAllListeners: EventPluginHub.deleteAllListeners
      });
      ReactPerf.measureMethods(ReactBrowserEventEmitter, "ReactBrowserEventEmitter", {
        putListener: "putListener",
        deleteListener: "deleteListener"
      });
      module.exports = ReactBrowserEventEmitter;
    }
  });

  // node_modules/react/lib/ReactDOMFeatureFlags.js
  var require_ReactDOMFeatureFlags = __commonJS({
    "node_modules/react/lib/ReactDOMFeatureFlags.js"(exports, module) {
      "use strict";
      var ReactDOMFeatureFlags = {
        useCreateElement: false
      };
      module.exports = ReactDOMFeatureFlags;
    }
  });

  // node_modules/react/lib/canDefineProperty.js
  var require_canDefineProperty = __commonJS({
    "node_modules/react/lib/canDefineProperty.js"(exports, module) {
      "use strict";
      var canDefineProperty = false;
      if (false) {
        try {
          Object.defineProperty({}, "x", { get: function() {
          } });
          canDefineProperty = true;
        } catch (x) {
        }
      }
      module.exports = canDefineProperty;
    }
  });

  // node_modules/react/lib/ReactElement.js
  var require_ReactElement = __commonJS({
    "node_modules/react/lib/ReactElement.js"(exports, module) {
      "use strict";
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var assign = require_Object_assign();
      var canDefineProperty = require_canDefineProperty();
      var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allow us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type,
          key,
          ref,
          props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        if (false) {
          element._store = {};
          if (canDefineProperty) {
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
          } else {
            element._store.validated = false;
            element._self = self;
            element._source = source;
          }
          Object.freeze(element.props);
          Object.freeze(element);
        }
        return element;
      };
      ReactElement.createElement = function(type, config, children) {
        var propName;
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
          ref = config.ref === void 0 ? null : config.ref;
          key = config.key === void 0 ? null : "" + config.key;
          self = config.__self === void 0 ? null : config.__self;
          source = config.__source === void 0 ? null : config.__source;
          for (propName in config) {
            if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (typeof props[propName] === "undefined") {
              props[propName] = defaultProps[propName];
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      };
      ReactElement.createFactory = function(type) {
        var factory = ReactElement.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      ReactElement.cloneAndReplaceKey = function(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      };
      ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
        var newElement = ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, newProps);
        if (false) {
          newElement._store.validated = oldElement._store.validated;
        }
        return newElement;
      };
      ReactElement.cloneElement = function(element, config, children) {
        var propName;
        var props = assign({}, element.props);
        var key = element.key;
        var ref = element.ref;
        var self = element._self;
        var source = element._source;
        var owner = element._owner;
        if (config != null) {
          if (config.ref !== void 0) {
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }
          if (config.key !== void 0) {
            key = "" + config.key;
          }
          for (propName in config) {
            if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
      };
      ReactElement.isValidElement = function(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      };
      module.exports = ReactElement;
    }
  });

  // node_modules/react/lib/ReactEmptyComponentRegistry.js
  var require_ReactEmptyComponentRegistry = __commonJS({
    "node_modules/react/lib/ReactEmptyComponentRegistry.js"(exports, module) {
      "use strict";
      var nullComponentIDsRegistry = {};
      function isNullComponentID(id) {
        return !!nullComponentIDsRegistry[id];
      }
      function registerNullComponentID(id) {
        nullComponentIDsRegistry[id] = true;
      }
      function deregisterNullComponentID(id) {
        delete nullComponentIDsRegistry[id];
      }
      var ReactEmptyComponentRegistry = {
        isNullComponentID,
        registerNullComponentID,
        deregisterNullComponentID
      };
      module.exports = ReactEmptyComponentRegistry;
    }
  });

  // node_modules/react/lib/ReactRootIndex.js
  var require_ReactRootIndex = __commonJS({
    "node_modules/react/lib/ReactRootIndex.js"(exports, module) {
      "use strict";
      var ReactRootIndexInjection = {
        /**
         * @param {function} _createReactRootIndex
         */
        injectCreateReactRootIndex: function(_createReactRootIndex) {
          ReactRootIndex.createReactRootIndex = _createReactRootIndex;
        }
      };
      var ReactRootIndex = {
        createReactRootIndex: null,
        injection: ReactRootIndexInjection
      };
      module.exports = ReactRootIndex;
    }
  });

  // node_modules/react/lib/ReactInstanceHandles.js
  var require_ReactInstanceHandles = __commonJS({
    "node_modules/react/lib/ReactInstanceHandles.js"(exports, module) {
      "use strict";
      var ReactRootIndex = require_ReactRootIndex();
      var invariant = require_invariant();
      var SEPARATOR = ".";
      var SEPARATOR_LENGTH = SEPARATOR.length;
      var MAX_TREE_DEPTH = 1e4;
      function getReactRootIDString(index) {
        return SEPARATOR + index.toString(36);
      }
      function isBoundary(id, index) {
        return id.charAt(index) === SEPARATOR || index === id.length;
      }
      function isValidID(id) {
        return id === "" || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
      }
      function isAncestorIDOf(ancestorID, descendantID) {
        return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
      }
      function getParentID(id) {
        return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : "";
      }
      function getNextDescendantID(ancestorID, destinationID) {
        !(isValidID(ancestorID) && isValidID(destinationID)) ? false ? invariant(false, "getNextDescendantID(%s, %s): Received an invalid React DOM ID.", ancestorID, destinationID) : invariant(false) : void 0;
        !isAncestorIDOf(ancestorID, destinationID) ? false ? invariant(false, "getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.", ancestorID, destinationID) : invariant(false) : void 0;
        if (ancestorID === destinationID) {
          return ancestorID;
        }
        var start = ancestorID.length + SEPARATOR_LENGTH;
        var i;
        for (i = start; i < destinationID.length; i++) {
          if (isBoundary(destinationID, i)) {
            break;
          }
        }
        return destinationID.substr(0, i);
      }
      function getFirstCommonAncestorID(oneID, twoID) {
        var minLength = Math.min(oneID.length, twoID.length);
        if (minLength === 0) {
          return "";
        }
        var lastCommonMarkerIndex = 0;
        for (var i = 0; i <= minLength; i++) {
          if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
            lastCommonMarkerIndex = i;
          } else if (oneID.charAt(i) !== twoID.charAt(i)) {
            break;
          }
        }
        var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
        !isValidID(longestCommonID) ? false ? invariant(false, "getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s", oneID, twoID, longestCommonID) : invariant(false) : void 0;
        return longestCommonID;
      }
      function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
        start = start || "";
        stop = stop || "";
        !(start !== stop) ? false ? invariant(false, "traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.", start) : invariant(false) : void 0;
        var traverseUp = isAncestorIDOf(stop, start);
        !(traverseUp || isAncestorIDOf(start, stop)) ? false ? invariant(false, "traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.", start, stop) : invariant(false) : void 0;
        var depth = 0;
        var traverse = traverseUp ? getParentID : getNextDescendantID;
        for (
          var id = start;
          ;
          /* until break */
          id = traverse(id, stop)
        ) {
          var ret;
          if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
            ret = cb(id, traverseUp, arg);
          }
          if (ret === false || id === stop) {
            break;
          }
          !(depth++ < MAX_TREE_DEPTH) ? false ? invariant(false, "traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s", start, stop, id) : invariant(false) : void 0;
        }
      }
      var ReactInstanceHandles = {
        /**
         * Constructs a React root ID
         * @return {string} A React root ID.
         */
        createReactRootID: function() {
          return getReactRootIDString(ReactRootIndex.createReactRootIndex());
        },
        /**
         * Constructs a React ID by joining a root ID with a name.
         *
         * @param {string} rootID Root ID of a parent component.
         * @param {string} name A component's name (as flattened children).
         * @return {string} A React ID.
         * @internal
         */
        createReactID: function(rootID, name) {
          return rootID + name;
        },
        /**
         * Gets the DOM ID of the React component that is the root of the tree that
         * contains the React component with the supplied DOM ID.
         *
         * @param {string} id DOM ID of a React component.
         * @return {?string} DOM ID of the React component that is the root.
         * @internal
         */
        getReactRootIDFromNodeID: function(id) {
          if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
            var index = id.indexOf(SEPARATOR, 1);
            return index > -1 ? id.substr(0, index) : id;
          }
          return null;
        },
        /**
         * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
         * should would receive a `mouseEnter` or `mouseLeave` event.
         *
         * NOTE: Does not invoke the callback on the nearest common ancestor because
         * nothing "entered" or "left" that element.
         *
         * @param {string} leaveID ID being left.
         * @param {string} enterID ID being entered.
         * @param {function} cb Callback to invoke on each entered/left ID.
         * @param {*} upArg Argument to invoke the callback with on left IDs.
         * @param {*} downArg Argument to invoke the callback with on entered IDs.
         * @internal
         */
        traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
          var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
          if (ancestorID !== leaveID) {
            traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
          }
          if (ancestorID !== enterID) {
            traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
          }
        },
        /**
         * Simulates the traversal of a two-phase, capture/bubble event dispatch.
         *
         * NOTE: This traversal happens on IDs without touching the DOM.
         *
         * @param {string} targetID ID of the target node.
         * @param {function} cb Callback to invoke.
         * @param {*} arg Argument to invoke the callback with.
         * @internal
         */
        traverseTwoPhase: function(targetID, cb, arg) {
          if (targetID) {
            traverseParentPath("", targetID, cb, arg, true, false);
            traverseParentPath(targetID, "", cb, arg, false, true);
          }
        },
        /**
         * Same as `traverseTwoPhase` but skips the `targetID`.
         */
        traverseTwoPhaseSkipTarget: function(targetID, cb, arg) {
          if (targetID) {
            traverseParentPath("", targetID, cb, arg, true, true);
            traverseParentPath(targetID, "", cb, arg, true, true);
          }
        },
        /**
         * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
         * example, passing `.0.$row-0.1` would result in `cb` getting called
         * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
         *
         * NOTE: This traversal happens on IDs without touching the DOM.
         *
         * @param {string} targetID ID of the target node.
         * @param {function} cb Callback to invoke.
         * @param {*} arg Argument to invoke the callback with.
         * @internal
         */
        traverseAncestors: function(targetID, cb, arg) {
          traverseParentPath("", targetID, cb, arg, true, false);
        },
        getFirstCommonAncestorID,
        /**
         * Exposed for unit testing.
         * @private
         */
        _getNextDescendantID: getNextDescendantID,
        isAncestorIDOf,
        SEPARATOR
      };
      module.exports = ReactInstanceHandles;
    }
  });

  // node_modules/react/lib/ReactInstanceMap.js
  var require_ReactInstanceMap = __commonJS({
    "node_modules/react/lib/ReactInstanceMap.js"(exports, module) {
      "use strict";
      var ReactInstanceMap = {
        /**
         * This API should be called `delete` but we'd have to make sure to always
         * transform these to strings for IE support. When this transform is fully
         * supported we can rename it.
         */
        remove: function(key) {
          key._reactInternalInstance = void 0;
        },
        get: function(key) {
          return key._reactInternalInstance;
        },
        has: function(key) {
          return key._reactInternalInstance !== void 0;
        },
        set: function(key, value) {
          key._reactInternalInstance = value;
        }
      };
      module.exports = ReactInstanceMap;
    }
  });

  // node_modules/react/lib/adler32.js
  var require_adler32 = __commonJS({
    "node_modules/react/lib/adler32.js"(exports, module) {
      "use strict";
      var MOD = 65521;
      function adler32(data) {
        var a = 1;
        var b = 0;
        var i = 0;
        var l = data.length;
        var m = l & ~3;
        while (i < m) {
          for (; i < Math.min(i + 4096, m); i += 4) {
            b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
          }
          a %= MOD;
          b %= MOD;
        }
        for (; i < l; i++) {
          b += a += data.charCodeAt(i);
        }
        a %= MOD;
        b %= MOD;
        return a | b << 16;
      }
      module.exports = adler32;
    }
  });

  // node_modules/react/lib/ReactMarkupChecksum.js
  var require_ReactMarkupChecksum = __commonJS({
    "node_modules/react/lib/ReactMarkupChecksum.js"(exports, module) {
      "use strict";
      var adler32 = require_adler32();
      var TAG_END = /\/?>/;
      var ReactMarkupChecksum = {
        CHECKSUM_ATTR_NAME: "data-react-checksum",
        /**
         * @param {string} markup Markup string
         * @return {string} Markup string with checksum attribute attached
         */
        addChecksumToMarkup: function(markup) {
          var checksum = adler32(markup);
          return markup.replace(TAG_END, " " + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
        },
        /**
         * @param {string} markup to use
         * @param {DOMElement} element root React element
         * @returns {boolean} whether or not the markup is the same
         */
        canReuseMarkup: function(markup, element) {
          var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
          existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
          var markupChecksum = adler32(markup);
          return markupChecksum === existingChecksum;
        }
      };
      module.exports = ReactMarkupChecksum;
    }
  });

  // node_modules/react/lib/ReactOwner.js
  var require_ReactOwner = __commonJS({
    "node_modules/react/lib/ReactOwner.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      var ReactOwner = {
        /**
         * @param {?object} object
         * @return {boolean} True if `object` is a valid owner.
         * @final
         */
        isValidOwner: function(object) {
          return !!(object && typeof object.attachRef === "function" && typeof object.detachRef === "function");
        },
        /**
         * Adds a component by ref to an owner component.
         *
         * @param {ReactComponent} component Component to reference.
         * @param {string} ref Name by which to refer to the component.
         * @param {ReactOwner} owner Component on which to record the ref.
         * @final
         * @internal
         */
        addComponentAsRefTo: function(component, ref, owner) {
          !ReactOwner.isValidOwner(owner) ? false ? invariant(false, "addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).") : invariant(false) : void 0;
          owner.attachRef(ref, component);
        },
        /**
         * Removes a component by ref from an owner component.
         *
         * @param {ReactComponent} component Component to dereference.
         * @param {string} ref Name of the ref to remove.
         * @param {ReactOwner} owner Component on which the ref is recorded.
         * @final
         * @internal
         */
        removeComponentAsRefFrom: function(component, ref, owner) {
          !ReactOwner.isValidOwner(owner) ? false ? invariant(false, "removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).") : invariant(false) : void 0;
          if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
            owner.detachRef(ref);
          }
        }
      };
      module.exports = ReactOwner;
    }
  });

  // node_modules/react/lib/ReactRef.js
  var require_ReactRef = __commonJS({
    "node_modules/react/lib/ReactRef.js"(exports, module) {
      "use strict";
      var ReactOwner = require_ReactOwner();
      var ReactRef = {};
      function attachRef(ref, component, owner) {
        if (typeof ref === "function") {
          ref(component.getPublicInstance());
        } else {
          ReactOwner.addComponentAsRefTo(component, ref, owner);
        }
      }
      function detachRef(ref, component, owner) {
        if (typeof ref === "function") {
          ref(null);
        } else {
          ReactOwner.removeComponentAsRefFrom(component, ref, owner);
        }
      }
      ReactRef.attachRefs = function(instance, element) {
        if (element === null || element === false) {
          return;
        }
        var ref = element.ref;
        if (ref != null) {
          attachRef(ref, instance, element._owner);
        }
      };
      ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
        var prevEmpty = prevElement === null || prevElement === false;
        var nextEmpty = nextElement === null || nextElement === false;
        return (
          // This has a few false positives w/r/t empty components.
          prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref
        );
      };
      ReactRef.detachRefs = function(instance, element) {
        if (element === null || element === false) {
          return;
        }
        var ref = element.ref;
        if (ref != null) {
          detachRef(ref, instance, element._owner);
        }
      };
      module.exports = ReactRef;
    }
  });

  // node_modules/react/lib/ReactReconciler.js
  var require_ReactReconciler = __commonJS({
    "node_modules/react/lib/ReactReconciler.js"(exports, module) {
      "use strict";
      var ReactRef = require_ReactRef();
      function attachRefs() {
        ReactRef.attachRefs(this, this._currentElement);
      }
      var ReactReconciler = {
        /**
         * Initializes the component, renders markup, and registers event listeners.
         *
         * @param {ReactComponent} internalInstance
         * @param {string} rootID DOM ID of the root node.
         * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
         * @return {?string} Rendered markup to be inserted into the DOM.
         * @final
         * @internal
         */
        mountComponent: function(internalInstance, rootID, transaction, context) {
          var markup = internalInstance.mountComponent(rootID, transaction, context);
          if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
            transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
          }
          return markup;
        },
        /**
         * Releases any resources allocated by `mountComponent`.
         *
         * @final
         * @internal
         */
        unmountComponent: function(internalInstance) {
          ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
          internalInstance.unmountComponent();
        },
        /**
         * Update a component using a new element.
         *
         * @param {ReactComponent} internalInstance
         * @param {ReactElement} nextElement
         * @param {ReactReconcileTransaction} transaction
         * @param {object} context
         * @internal
         */
        receiveComponent: function(internalInstance, nextElement, transaction, context) {
          var prevElement = internalInstance._currentElement;
          if (nextElement === prevElement && context === internalInstance._context) {
            return;
          }
          var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
          if (refsChanged) {
            ReactRef.detachRefs(internalInstance, prevElement);
          }
          internalInstance.receiveComponent(nextElement, transaction, context);
          if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
            transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
          }
        },
        /**
         * Flush any dirty changes in a component.
         *
         * @param {ReactComponent} internalInstance
         * @param {ReactReconcileTransaction} transaction
         * @internal
         */
        performUpdateIfNecessary: function(internalInstance, transaction) {
          internalInstance.performUpdateIfNecessary(transaction);
        }
      };
      module.exports = ReactReconciler;
    }
  });

  // node_modules/react/lib/PooledClass.js
  var require_PooledClass = __commonJS({
    "node_modules/react/lib/PooledClass.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      var oneArgumentPooler = function(copyFieldsFrom) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, copyFieldsFrom);
          return instance;
        } else {
          return new Klass(copyFieldsFrom);
        }
      };
      var twoArgumentPooler = function(a1, a2) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, a1, a2);
          return instance;
        } else {
          return new Klass(a1, a2);
        }
      };
      var threeArgumentPooler = function(a1, a2, a3) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, a1, a2, a3);
          return instance;
        } else {
          return new Klass(a1, a2, a3);
        }
      };
      var fourArgumentPooler = function(a1, a2, a3, a4) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, a1, a2, a3, a4);
          return instance;
        } else {
          return new Klass(a1, a2, a3, a4);
        }
      };
      var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
        var Klass = this;
        if (Klass.instancePool.length) {
          var instance = Klass.instancePool.pop();
          Klass.call(instance, a1, a2, a3, a4, a5);
          return instance;
        } else {
          return new Klass(a1, a2, a3, a4, a5);
        }
      };
      var standardReleaser = function(instance) {
        var Klass = this;
        !(instance instanceof Klass) ? false ? invariant(false, "Trying to release an instance into a pool of a different type.") : invariant(false) : void 0;
        instance.destructor();
        if (Klass.instancePool.length < Klass.poolSize) {
          Klass.instancePool.push(instance);
        }
      };
      var DEFAULT_POOL_SIZE = 10;
      var DEFAULT_POOLER = oneArgumentPooler;
      var addPoolingTo = function(CopyConstructor, pooler) {
        var NewKlass = CopyConstructor;
        NewKlass.instancePool = [];
        NewKlass.getPooled = pooler || DEFAULT_POOLER;
        if (!NewKlass.poolSize) {
          NewKlass.poolSize = DEFAULT_POOL_SIZE;
        }
        NewKlass.release = standardReleaser;
        return NewKlass;
      };
      var PooledClass = {
        addPoolingTo,
        oneArgumentPooler,
        twoArgumentPooler,
        threeArgumentPooler,
        fourArgumentPooler,
        fiveArgumentPooler
      };
      module.exports = PooledClass;
    }
  });

  // node_modules/react/lib/CallbackQueue.js
  var require_CallbackQueue = __commonJS({
    "node_modules/react/lib/CallbackQueue.js"(exports, module) {
      "use strict";
      var PooledClass = require_PooledClass();
      var assign = require_Object_assign();
      var invariant = require_invariant();
      function CallbackQueue() {
        this._callbacks = null;
        this._contexts = null;
      }
      assign(CallbackQueue.prototype, {
        /**
         * Enqueues a callback to be invoked when `notifyAll` is invoked.
         *
         * @param {function} callback Invoked when `notifyAll` is invoked.
         * @param {?object} context Context to call `callback` with.
         * @internal
         */
        enqueue: function(callback, context) {
          this._callbacks = this._callbacks || [];
          this._contexts = this._contexts || [];
          this._callbacks.push(callback);
          this._contexts.push(context);
        },
        /**
         * Invokes all enqueued callbacks and clears the queue. This is invoked after
         * the DOM representation of a component has been created or updated.
         *
         * @internal
         */
        notifyAll: function() {
          var callbacks = this._callbacks;
          var contexts = this._contexts;
          if (callbacks) {
            !(callbacks.length === contexts.length) ? false ? invariant(false, "Mismatched list of contexts in callback queue") : invariant(false) : void 0;
            this._callbacks = null;
            this._contexts = null;
            for (var i = 0; i < callbacks.length; i++) {
              callbacks[i].call(contexts[i]);
            }
            callbacks.length = 0;
            contexts.length = 0;
          }
        },
        /**
         * Resets the internal queue.
         *
         * @internal
         */
        reset: function() {
          this._callbacks = null;
          this._contexts = null;
        },
        /**
         * `PooledClass` looks for this.
         */
        destructor: function() {
          this.reset();
        }
      });
      PooledClass.addPoolingTo(CallbackQueue);
      module.exports = CallbackQueue;
    }
  });

  // node_modules/react/lib/Transaction.js
  var require_Transaction = __commonJS({
    "node_modules/react/lib/Transaction.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      var Mixin = {
        /**
         * Sets up this instance so that it is prepared for collecting metrics. Does
         * so such that this setup method may be used on an instance that is already
         * initialized, in a way that does not consume additional memory upon reuse.
         * That can be useful if you decide to make your subclass of this mixin a
         * "PooledClass".
         */
        reinitializeTransaction: function() {
          this.transactionWrappers = this.getTransactionWrappers();
          if (this.wrapperInitData) {
            this.wrapperInitData.length = 0;
          } else {
            this.wrapperInitData = [];
          }
          this._isInTransaction = false;
        },
        _isInTransaction: false,
        /**
         * @abstract
         * @return {Array<TransactionWrapper>} Array of transaction wrappers.
         */
        getTransactionWrappers: null,
        isInTransaction: function() {
          return !!this._isInTransaction;
        },
        /**
         * Executes the function within a safety window. Use this for the top level
         * methods that result in large amounts of computation/mutations that would
         * need to be safety checked. The optional arguments helps prevent the need
         * to bind in many cases.
         *
         * @param {function} method Member of scope to call.
         * @param {Object} scope Scope to invoke from.
         * @param {Object?=} a Argument to pass to the method.
         * @param {Object?=} b Argument to pass to the method.
         * @param {Object?=} c Argument to pass to the method.
         * @param {Object?=} d Argument to pass to the method.
         * @param {Object?=} e Argument to pass to the method.
         * @param {Object?=} f Argument to pass to the method.
         *
         * @return {*} Return value from `method`.
         */
        perform: function(method, scope, a, b, c, d, e, f) {
          !!this.isInTransaction() ? false ? invariant(false, "Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.") : invariant(false) : void 0;
          var errorThrown;
          var ret;
          try {
            this._isInTransaction = true;
            errorThrown = true;
            this.initializeAll(0);
            ret = method.call(scope, a, b, c, d, e, f);
            errorThrown = false;
          } finally {
            try {
              if (errorThrown) {
                try {
                  this.closeAll(0);
                } catch (err) {
                }
              } else {
                this.closeAll(0);
              }
            } finally {
              this._isInTransaction = false;
            }
          }
          return ret;
        },
        initializeAll: function(startIndex) {
          var transactionWrappers = this.transactionWrappers;
          for (var i = startIndex; i < transactionWrappers.length; i++) {
            var wrapper = transactionWrappers[i];
            try {
              this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
              this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
            } finally {
              if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
                try {
                  this.initializeAll(i + 1);
                } catch (err) {
                }
              }
            }
          }
        },
        /**
         * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
         * them the respective return values of `this.transactionWrappers.init[i]`
         * (`close`rs that correspond to initializers that failed will not be
         * invoked).
         */
        closeAll: function(startIndex) {
          !this.isInTransaction() ? false ? invariant(false, "Transaction.closeAll(): Cannot close transaction when none are open.") : invariant(false) : void 0;
          var transactionWrappers = this.transactionWrappers;
          for (var i = startIndex; i < transactionWrappers.length; i++) {
            var wrapper = transactionWrappers[i];
            var initData = this.wrapperInitData[i];
            var errorThrown;
            try {
              errorThrown = true;
              if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
                wrapper.close.call(this, initData);
              }
              errorThrown = false;
            } finally {
              if (errorThrown) {
                try {
                  this.closeAll(i + 1);
                } catch (e) {
                }
              }
            }
          }
          this.wrapperInitData.length = 0;
        }
      };
      var Transaction = {
        Mixin,
        /**
         * Token to look for to determine if an error occurred.
         */
        OBSERVED_ERROR: {}
      };
      module.exports = Transaction;
    }
  });

  // node_modules/react/lib/ReactUpdates.js
  var require_ReactUpdates = __commonJS({
    "node_modules/react/lib/ReactUpdates.js"(exports, module) {
      "use strict";
      var CallbackQueue = require_CallbackQueue();
      var PooledClass = require_PooledClass();
      var ReactPerf = require_ReactPerf();
      var ReactReconciler = require_ReactReconciler();
      var Transaction = require_Transaction();
      var assign = require_Object_assign();
      var invariant = require_invariant();
      var dirtyComponents = [];
      var asapCallbackQueue = CallbackQueue.getPooled();
      var asapEnqueued = false;
      var batchingStrategy = null;
      function ensureInjected() {
        !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? false ? invariant(false, "ReactUpdates: must inject a reconcile transaction class and batching strategy") : invariant(false) : void 0;
      }
      var NESTED_UPDATES = {
        initialize: function() {
          this.dirtyComponentsLength = dirtyComponents.length;
        },
        close: function() {
          if (this.dirtyComponentsLength !== dirtyComponents.length) {
            dirtyComponents.splice(0, this.dirtyComponentsLength);
            flushBatchedUpdates();
          } else {
            dirtyComponents.length = 0;
          }
        }
      };
      var UPDATE_QUEUEING = {
        initialize: function() {
          this.callbackQueue.reset();
        },
        close: function() {
          this.callbackQueue.notifyAll();
        }
      };
      var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
      function ReactUpdatesFlushTransaction() {
        this.reinitializeTransaction();
        this.dirtyComponentsLength = null;
        this.callbackQueue = CallbackQueue.getPooled();
        this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(
          /* forceHTML */
          false
        );
      }
      assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
        getTransactionWrappers: function() {
          return TRANSACTION_WRAPPERS;
        },
        destructor: function() {
          this.dirtyComponentsLength = null;
          CallbackQueue.release(this.callbackQueue);
          this.callbackQueue = null;
          ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
          this.reconcileTransaction = null;
        },
        perform: function(method, scope, a) {
          return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
        }
      });
      PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
      function batchedUpdates(callback, a, b, c, d, e) {
        ensureInjected();
        batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
      }
      function mountOrderComparator(c1, c2) {
        return c1._mountOrder - c2._mountOrder;
      }
      function runBatchedUpdates(transaction) {
        var len = transaction.dirtyComponentsLength;
        !(len === dirtyComponents.length) ? false ? invariant(false, "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).", len, dirtyComponents.length) : invariant(false) : void 0;
        dirtyComponents.sort(mountOrderComparator);
        for (var i = 0; i < len; i++) {
          var component = dirtyComponents[i];
          var callbacks = component._pendingCallbacks;
          component._pendingCallbacks = null;
          ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);
          if (callbacks) {
            for (var j = 0; j < callbacks.length; j++) {
              transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
            }
          }
        }
      }
      var flushBatchedUpdates = function() {
        while (dirtyComponents.length || asapEnqueued) {
          if (dirtyComponents.length) {
            var transaction = ReactUpdatesFlushTransaction.getPooled();
            transaction.perform(runBatchedUpdates, null, transaction);
            ReactUpdatesFlushTransaction.release(transaction);
          }
          if (asapEnqueued) {
            asapEnqueued = false;
            var queue = asapCallbackQueue;
            asapCallbackQueue = CallbackQueue.getPooled();
            queue.notifyAll();
            CallbackQueue.release(queue);
          }
        }
      };
      flushBatchedUpdates = ReactPerf.measure("ReactUpdates", "flushBatchedUpdates", flushBatchedUpdates);
      function enqueueUpdate(component) {
        ensureInjected();
        if (!batchingStrategy.isBatchingUpdates) {
          batchingStrategy.batchedUpdates(enqueueUpdate, component);
          return;
        }
        dirtyComponents.push(component);
      }
      function asap(callback, context) {
        !batchingStrategy.isBatchingUpdates ? false ? invariant(false, "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched.") : invariant(false) : void 0;
        asapCallbackQueue.enqueue(callback, context);
        asapEnqueued = true;
      }
      var ReactUpdatesInjection = {
        injectReconcileTransaction: function(ReconcileTransaction) {
          !ReconcileTransaction ? false ? invariant(false, "ReactUpdates: must provide a reconcile transaction class") : invariant(false) : void 0;
          ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
        },
        injectBatchingStrategy: function(_batchingStrategy) {
          !_batchingStrategy ? false ? invariant(false, "ReactUpdates: must provide a batching strategy") : invariant(false) : void 0;
          !(typeof _batchingStrategy.batchedUpdates === "function") ? false ? invariant(false, "ReactUpdates: must provide a batchedUpdates() function") : invariant(false) : void 0;
          !(typeof _batchingStrategy.isBatchingUpdates === "boolean") ? false ? invariant(false, "ReactUpdates: must provide an isBatchingUpdates boolean attribute") : invariant(false) : void 0;
          batchingStrategy = _batchingStrategy;
        }
      };
      var ReactUpdates = {
        /**
         * React references `ReactReconcileTransaction` using this property in order
         * to allow dependency injection.
         *
         * @internal
         */
        ReactReconcileTransaction: null,
        batchedUpdates,
        enqueueUpdate,
        flushBatchedUpdates,
        injection: ReactUpdatesInjection,
        asap
      };
      module.exports = ReactUpdates;
    }
  });

  // node_modules/react/lib/ReactUpdateQueue.js
  var require_ReactUpdateQueue = __commonJS({
    "node_modules/react/lib/ReactUpdateQueue.js"(exports, module) {
      "use strict";
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var ReactElement = require_ReactElement();
      var ReactInstanceMap = require_ReactInstanceMap();
      var ReactUpdates = require_ReactUpdates();
      var assign = require_Object_assign();
      var invariant = require_invariant();
      var warning = require_warning();
      function enqueueUpdate(internalInstance) {
        ReactUpdates.enqueueUpdate(internalInstance);
      }
      function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
        var internalInstance = ReactInstanceMap.get(publicInstance);
        if (!internalInstance) {
          if (false) {
            false ? warning(!callerName, "%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.", callerName, callerName, publicInstance.constructor.displayName) : void 0;
          }
          return null;
        }
        if (false) {
          false ? warning(ReactCurrentOwner.current == null, "%s(...): Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.", callerName) : void 0;
        }
        return internalInstance;
      }
      var ReactUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(publicInstance) {
          if (false) {
            var owner = ReactCurrentOwner.current;
            if (owner !== null) {
              false ? warning(owner._warnedAboutRefsInRender, "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", owner.getName() || "A component") : void 0;
              owner._warnedAboutRefsInRender = true;
            }
          }
          var internalInstance = ReactInstanceMap.get(publicInstance);
          if (internalInstance) {
            return !!internalInstance._renderedComponent;
          } else {
            return false;
          }
        },
        /**
         * Enqueue a callback that will be executed after all the pending updates
         * have processed.
         *
         * @param {ReactClass} publicInstance The instance to use as `this` context.
         * @param {?function} callback Called after state is updated.
         * @internal
         */
        enqueueCallback: function(publicInstance, callback) {
          !(typeof callback === "function") ? false ? invariant(false, "enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable.") : invariant(false) : void 0;
          var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
          if (!internalInstance) {
            return null;
          }
          if (internalInstance._pendingCallbacks) {
            internalInstance._pendingCallbacks.push(callback);
          } else {
            internalInstance._pendingCallbacks = [callback];
          }
          enqueueUpdate(internalInstance);
        },
        enqueueCallbackInternal: function(internalInstance, callback) {
          !(typeof callback === "function") ? false ? invariant(false, "enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable.") : invariant(false) : void 0;
          if (internalInstance._pendingCallbacks) {
            internalInstance._pendingCallbacks.push(callback);
          } else {
            internalInstance._pendingCallbacks = [callback];
          }
          enqueueUpdate(internalInstance);
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @internal
         */
        enqueueForceUpdate: function(publicInstance) {
          var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, "forceUpdate");
          if (!internalInstance) {
            return;
          }
          internalInstance._pendingForceUpdate = true;
          enqueueUpdate(internalInstance);
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @internal
         */
        enqueueReplaceState: function(publicInstance, completeState) {
          var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, "replaceState");
          if (!internalInstance) {
            return;
          }
          internalInstance._pendingStateQueue = [completeState];
          internalInstance._pendingReplaceState = true;
          enqueueUpdate(internalInstance);
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @internal
         */
        enqueueSetState: function(publicInstance, partialState) {
          var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, "setState");
          if (!internalInstance) {
            return;
          }
          var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
          queue.push(partialState);
          enqueueUpdate(internalInstance);
        },
        /**
         * Sets a subset of the props.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialProps Subset of the next props.
         * @internal
         */
        enqueueSetProps: function(publicInstance, partialProps) {
          var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, "setProps");
          if (!internalInstance) {
            return;
          }
          ReactUpdateQueue.enqueueSetPropsInternal(internalInstance, partialProps);
        },
        enqueueSetPropsInternal: function(internalInstance, partialProps) {
          var topLevelWrapper = internalInstance._topLevelWrapper;
          !topLevelWrapper ? false ? invariant(false, "setProps(...): You called `setProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created.") : invariant(false) : void 0;
          var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
          var element = wrapElement.props;
          var props = assign({}, element.props, partialProps);
          topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));
          enqueueUpdate(topLevelWrapper);
        },
        /**
         * Replaces all of the props.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} props New props.
         * @internal
         */
        enqueueReplaceProps: function(publicInstance, props) {
          var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, "replaceProps");
          if (!internalInstance) {
            return;
          }
          ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance, props);
        },
        enqueueReplacePropsInternal: function(internalInstance, props) {
          var topLevelWrapper = internalInstance._topLevelWrapper;
          !topLevelWrapper ? false ? invariant(false, "replaceProps(...): You called `replaceProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created.") : invariant(false) : void 0;
          var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
          var element = wrapElement.props;
          topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));
          enqueueUpdate(topLevelWrapper);
        },
        enqueueElementInternal: function(internalInstance, newElement) {
          internalInstance._pendingElement = newElement;
          enqueueUpdate(internalInstance);
        }
      };
      module.exports = ReactUpdateQueue;
    }
  });

  // node_modules/fbjs/lib/emptyObject.js
  var require_emptyObject = __commonJS({
    "node_modules/fbjs/lib/emptyObject.js"(exports, module) {
      "use strict";
      var emptyObject = {};
      if (false) {
        Object.freeze(emptyObject);
      }
      module.exports = emptyObject;
    }
  });

  // node_modules/fbjs/lib/isNode.js
  var require_isNode = __commonJS({
    "node_modules/fbjs/lib/isNode.js"(exports, module) {
      "use strict";
      function isNode(object) {
        return !!(object && (typeof Node === "function" ? object instanceof Node : typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string"));
      }
      module.exports = isNode;
    }
  });

  // node_modules/fbjs/lib/isTextNode.js
  var require_isTextNode = __commonJS({
    "node_modules/fbjs/lib/isTextNode.js"(exports, module) {
      "use strict";
      var isNode = require_isNode();
      function isTextNode(object) {
        return isNode(object) && object.nodeType == 3;
      }
      module.exports = isTextNode;
    }
  });

  // node_modules/fbjs/lib/containsNode.js
  var require_containsNode = __commonJS({
    "node_modules/fbjs/lib/containsNode.js"(exports, module) {
      "use strict";
      var isTextNode = require_isTextNode();
      function containsNode(_x, _x2) {
        var _again = true;
        _function: while (_again) {
          var outerNode = _x, innerNode = _x2;
          _again = false;
          if (!outerNode || !innerNode) {
            return false;
          } else if (outerNode === innerNode) {
            return true;
          } else if (isTextNode(outerNode)) {
            return false;
          } else if (isTextNode(innerNode)) {
            _x = outerNode;
            _x2 = innerNode.parentNode;
            _again = true;
            continue _function;
          } else if (outerNode.contains) {
            return outerNode.contains(innerNode);
          } else if (outerNode.compareDocumentPosition) {
            return !!(outerNode.compareDocumentPosition(innerNode) & 16);
          } else {
            return false;
          }
        }
      }
      module.exports = containsNode;
    }
  });

  // node_modules/react/lib/ReactComponentEnvironment.js
  var require_ReactComponentEnvironment = __commonJS({
    "node_modules/react/lib/ReactComponentEnvironment.js"(exports, module) {
      "use strict";
      var invariant = require_invariant();
      var injected = false;
      var ReactComponentEnvironment = {
        /**
         * Optionally injectable environment dependent cleanup hook. (server vs.
         * browser etc). Example: A browser system caches DOM nodes based on component
         * ID and must remove that cache entry when this instance is unmounted.
         */
        unmountIDFromEnvironment: null,
        /**
         * Optionally injectable hook for swapping out mount images in the middle of
         * the tree.
         */
        replaceNodeWithMarkupByID: null,
        /**
         * Optionally injectable hook for processing a queue of child updates. Will
         * later move into MultiChildComponents.
         */
        processChildrenUpdates: null,
        injection: {
          injectEnvironment: function(environment) {
            !!injected ? false ? invariant(false, "ReactCompositeComponent: injectEnvironment() can only be called once.") : invariant(false) : void 0;
            ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
            ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
            ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
            injected = true;
          }
        }
      };
      module.exports = ReactComponentEnvironment;
    }
  });

  // node_modules/react/lib/ReactPropTypeLocations.js
  var require_ReactPropTypeLocations = __commonJS({
    "node_modules/react/lib/ReactPropTypeLocations.js"(exports, module) {
      "use strict";
      var keyMirror = require_keyMirror();
      var ReactPropTypeLocations = keyMirror({
        prop: null,
        context: null,
        childContext: null
      });
      module.exports = ReactPropTypeLocations;
    }
  });

  // node_modules/react/lib/ReactPropTypeLocationNames.js
  var require_ReactPropTypeLocationNames = __commonJS({
    "node_modules/react/lib/ReactPropTypeLocationNames.js"(exports, module) {
      "use strict";
      var ReactPropTypeLocationNames = {};
      if (false) {
        ReactPropTypeLocationNames = {
          prop: "prop",
          context: "context",
          childContext: "child context"
        };
      }
      module.exports = ReactPropTypeLocationNames;
    }
  });

  // node_modules/react/lib/shouldUpdateReactComponent.js
  var require_shouldUpdateReactComponent = __commonJS({
    "node_modules/react/lib/shouldUpdateReactComponent.js"(exports, module) {
      "use strict";
      function shouldUpdateReactComponent(prevElement, nextElement) {
        var prevEmpty = prevElement === null || prevElement === false;
        var nextEmpty = nextElement === null || nextElement === false;
        if (prevEmpty || nextEmpty) {
          return prevEmpty === nextEmpty;
        }
        var prevType = typeof prevElement;
        var nextType = typeof nextElement;
        if (prevType === "string" || prevType === "number") {
          return nextType === "string" || nextType === "number";
        } else {
          return nextType === "object" && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
        }
        return false;
      }
      module.exports = shouldUpdateReactComponent;
    }
  });

  // node_modules/react/lib/ReactCompositeComponent.js
  var require_ReactCompositeComponent = __commonJS({
    "node_modules/react/lib/ReactCompositeComponent.js"(exports, module) {
      "use strict";
      var ReactComponentEnvironment = require_ReactComponentEnvironment();
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var ReactElement = require_ReactElement();
      var ReactInstanceMap = require_ReactInstanceMap();
      var ReactPerf = require_ReactPerf();
      var ReactPropTypeLocations = require_ReactPropTypeLocations();
      var ReactPropTypeLocationNames = require_ReactPropTypeLocationNames();
      var ReactReconciler = require_ReactReconciler();
      var ReactUpdateQueue = require_ReactUpdateQueue();
      var assign = require_Object_assign();
      var emptyObject = require_emptyObject();
      var invariant = require_invariant();
      var shouldUpdateReactComponent = require_shouldUpdateReactComponent();
      var warning = require_warning();
      function getDeclarationErrorAddendum(component) {
        var owner = component._currentElement._owner || null;
        if (owner) {
          var name = owner.getName();
          if (name) {
            return " Check the render method of `" + name + "`.";
          }
        }
        return "";
      }
      function StatelessComponent(Component) {
      }
      StatelessComponent.prototype.render = function() {
        var Component = ReactInstanceMap.get(this)._currentElement.type;
        return Component(this.props, this.context, this.updater);
      };
      var nextMountID = 1;
      var ReactCompositeComponentMixin = {
        /**
         * Base constructor for all composite component.
         *
         * @param {ReactElement} element
         * @final
         * @internal
         */
        construct: function(element) {
          this._currentElement = element;
          this._rootNodeID = null;
          this._instance = null;
          this._pendingElement = null;
          this._pendingStateQueue = null;
          this._pendingReplaceState = false;
          this._pendingForceUpdate = false;
          this._renderedComponent = null;
          this._context = null;
          this._mountOrder = 0;
          this._topLevelWrapper = null;
          this._pendingCallbacks = null;
        },
        /**
         * Initializes the component, renders markup, and registers event listeners.
         *
         * @param {string} rootID DOM ID of the root node.
         * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
         * @return {?string} Rendered markup to be inserted into the DOM.
         * @final
         * @internal
         */
        mountComponent: function(rootID, transaction, context) {
          this._context = context;
          this._mountOrder = nextMountID++;
          this._rootNodeID = rootID;
          var publicProps = this._processProps(this._currentElement.props);
          var publicContext = this._processContext(context);
          var Component = this._currentElement.type;
          var inst;
          var renderedElement;
          var canInstantiate = "prototype" in Component;
          if (canInstantiate) {
            if (false) {
              ReactCurrentOwner.current = this;
              try {
                inst = new Component(publicProps, publicContext, ReactUpdateQueue);
              } finally {
                ReactCurrentOwner.current = null;
              }
            } else {
              inst = new Component(publicProps, publicContext, ReactUpdateQueue);
            }
          }
          if (!canInstantiate || inst === null || inst === false || ReactElement.isValidElement(inst)) {
            renderedElement = inst;
            inst = new StatelessComponent(Component);
          }
          if (false) {
            if (inst.render == null) {
              false ? warning(false, "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`, returned null/false from a stateless component, or tried to render an element whose type is a function that isn't a React component.", Component.displayName || Component.name || "Component") : void 0;
            } else {
              false ? warning(Component.prototype && Component.prototype.isReactComponent || !canInstantiate || !(inst instanceof Component), "%s(...): React component classes must extend React.Component.", Component.displayName || Component.name || "Component") : void 0;
            }
          }
          inst.props = publicProps;
          inst.context = publicContext;
          inst.refs = emptyObject;
          inst.updater = ReactUpdateQueue;
          this._instance = inst;
          ReactInstanceMap.set(inst, this);
          if (false) {
            false ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", this.getName() || "a component") : void 0;
            false ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", this.getName() || "a component") : void 0;
            false ? warning(!inst.propTypes, "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", this.getName() || "a component") : void 0;
            false ? warning(!inst.contextTypes, "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", this.getName() || "a component") : void 0;
            false ? warning(typeof inst.componentShouldUpdate !== "function", "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", this.getName() || "A component") : void 0;
            false ? warning(typeof inst.componentDidUnmount !== "function", "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", this.getName() || "A component") : void 0;
            false ? warning(typeof inst.componentWillRecieveProps !== "function", "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", this.getName() || "A component") : void 0;
          }
          var initialState = inst.state;
          if (initialState === void 0) {
            inst.state = initialState = null;
          }
          !(typeof initialState === "object" && !Array.isArray(initialState)) ? false ? invariant(false, "%s.state: must be set to an object or null", this.getName() || "ReactCompositeComponent") : invariant(false) : void 0;
          this._pendingStateQueue = null;
          this._pendingReplaceState = false;
          this._pendingForceUpdate = false;
          if (inst.componentWillMount) {
            inst.componentWillMount();
            if (this._pendingStateQueue) {
              inst.state = this._processPendingState(inst.props, inst.context);
            }
          }
          if (renderedElement === void 0) {
            renderedElement = this._renderValidatedComponent();
          }
          this._renderedComponent = this._instantiateReactComponent(renderedElement);
          var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._processChildContext(context));
          if (inst.componentDidMount) {
            transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
          }
          return markup;
        },
        /**
         * Releases any resources allocated by `mountComponent`.
         *
         * @final
         * @internal
         */
        unmountComponent: function() {
          var inst = this._instance;
          if (inst.componentWillUnmount) {
            inst.componentWillUnmount();
          }
          ReactReconciler.unmountComponent(this._renderedComponent);
          this._renderedComponent = null;
          this._instance = null;
          this._pendingStateQueue = null;
          this._pendingReplaceState = false;
          this._pendingForceUpdate = false;
          this._pendingCallbacks = null;
          this._pendingElement = null;
          this._context = null;
          this._rootNodeID = null;
          this._topLevelWrapper = null;
          ReactInstanceMap.remove(inst);
        },
        /**
         * Filters the context object to only contain keys specified in
         * `contextTypes`
         *
         * @param {object} context
         * @return {?object}
         * @private
         */
        _maskContext: function(context) {
          var maskedContext = null;
          var Component = this._currentElement.type;
          var contextTypes = Component.contextTypes;
          if (!contextTypes) {
            return emptyObject;
          }
          maskedContext = {};
          for (var contextName in contextTypes) {
            maskedContext[contextName] = context[contextName];
          }
          return maskedContext;
        },
        /**
         * Filters the context object to only contain keys specified in
         * `contextTypes`, and asserts that they are valid.
         *
         * @param {object} context
         * @return {?object}
         * @private
         */
        _processContext: function(context) {
          var maskedContext = this._maskContext(context);
          if (false) {
            var Component = this._currentElement.type;
            if (Component.contextTypes) {
              this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
            }
          }
          return maskedContext;
        },
        /**
         * @param {object} currentContext
         * @return {object}
         * @private
         */
        _processChildContext: function(currentContext) {
          var Component = this._currentElement.type;
          var inst = this._instance;
          var childContext = inst.getChildContext && inst.getChildContext();
          if (childContext) {
            !(typeof Component.childContextTypes === "object") ? false ? invariant(false, "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", this.getName() || "ReactCompositeComponent") : invariant(false) : void 0;
            if (false) {
              this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
            }
            for (var name in childContext) {
              !(name in Component.childContextTypes) ? false ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || "ReactCompositeComponent", name) : invariant(false) : void 0;
            }
            return assign({}, currentContext, childContext);
          }
          return currentContext;
        },
        /**
         * Processes props by setting default values for unspecified props and
         * asserting that the props are valid. Does not mutate its argument; returns
         * a new props object with defaults merged in.
         *
         * @param {object} newProps
         * @return {object}
         * @private
         */
        _processProps: function(newProps) {
          if (false) {
            var Component = this._currentElement.type;
            if (Component.propTypes) {
              this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
            }
          }
          return newProps;
        },
        /**
         * Assert that the props are valid
         *
         * @param {object} propTypes Map of prop name to a ReactPropType
         * @param {object} props
         * @param {string} location e.g. "prop", "context", "child context"
         * @private
         */
        _checkPropTypes: function(propTypes, props, location) {
          var componentName = this.getName();
          for (var propName in propTypes) {
            if (propTypes.hasOwnProperty(propName)) {
              var error;
              try {
                !(typeof propTypes[propName] === "function") ? false ? invariant(false, "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", componentName || "React class", ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
                error = propTypes[propName](props, propName, componentName, location);
              } catch (ex) {
                error = ex;
              }
              if (error instanceof Error) {
                var addendum = getDeclarationErrorAddendum(this);
                if (location === ReactPropTypeLocations.prop) {
                  false ? warning(false, "Failed Composite propType: %s%s", error.message, addendum) : void 0;
                } else {
                  false ? warning(false, "Failed Context Types: %s%s", error.message, addendum) : void 0;
                }
              }
            }
          }
        },
        receiveComponent: function(nextElement, transaction, nextContext) {
          var prevElement = this._currentElement;
          var prevContext = this._context;
          this._pendingElement = null;
          this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
        },
        /**
         * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
         * is set, update the component.
         *
         * @param {ReactReconcileTransaction} transaction
         * @internal
         */
        performUpdateIfNecessary: function(transaction) {
          if (this._pendingElement != null) {
            ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
          }
          if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
            this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
          }
        },
        /**
         * Perform an update to a mounted component. The componentWillReceiveProps and
         * shouldComponentUpdate methods are called, then (assuming the update isn't
         * skipped) the remaining update lifecycle methods are called and the DOM
         * representation is updated.
         *
         * By default, this implements React's rendering and reconciliation algorithm.
         * Sophisticated clients may wish to override this.
         *
         * @param {ReactReconcileTransaction} transaction
         * @param {ReactElement} prevParentElement
         * @param {ReactElement} nextParentElement
         * @internal
         * @overridable
         */
        updateComponent: function(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
          var inst = this._instance;
          var nextContext = this._context === nextUnmaskedContext ? inst.context : this._processContext(nextUnmaskedContext);
          var nextProps;
          if (prevParentElement === nextParentElement) {
            nextProps = nextParentElement.props;
          } else {
            nextProps = this._processProps(nextParentElement.props);
            if (inst.componentWillReceiveProps) {
              inst.componentWillReceiveProps(nextProps, nextContext);
            }
          }
          var nextState = this._processPendingState(nextProps, nextContext);
          var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);
          if (false) {
            false ? warning(typeof shouldUpdate !== "undefined", "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", this.getName() || "ReactCompositeComponent") : void 0;
          }
          if (shouldUpdate) {
            this._pendingForceUpdate = false;
            this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
          } else {
            this._currentElement = nextParentElement;
            this._context = nextUnmaskedContext;
            inst.props = nextProps;
            inst.state = nextState;
            inst.context = nextContext;
          }
        },
        _processPendingState: function(props, context) {
          var inst = this._instance;
          var queue = this._pendingStateQueue;
          var replace = this._pendingReplaceState;
          this._pendingReplaceState = false;
          this._pendingStateQueue = null;
          if (!queue) {
            return inst.state;
          }
          if (replace && queue.length === 1) {
            return queue[0];
          }
          var nextState = assign({}, replace ? queue[0] : inst.state);
          for (var i = replace ? 1 : 0; i < queue.length; i++) {
            var partial = queue[i];
            assign(nextState, typeof partial === "function" ? partial.call(inst, nextState, props, context) : partial);
          }
          return nextState;
        },
        /**
         * Merges new props and state, notifies delegate methods of update and
         * performs update.
         *
         * @param {ReactElement} nextElement Next element
         * @param {object} nextProps Next public object to set as properties.
         * @param {?object} nextState Next object to set as state.
         * @param {?object} nextContext Next public object to set as context.
         * @param {ReactReconcileTransaction} transaction
         * @param {?object} unmaskedContext
         * @private
         */
        _performComponentUpdate: function(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
          var inst = this._instance;
          var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
          var prevProps;
          var prevState;
          var prevContext;
          if (hasComponentDidUpdate) {
            prevProps = inst.props;
            prevState = inst.state;
            prevContext = inst.context;
          }
          if (inst.componentWillUpdate) {
            inst.componentWillUpdate(nextProps, nextState, nextContext);
          }
          this._currentElement = nextElement;
          this._context = unmaskedContext;
          inst.props = nextProps;
          inst.state = nextState;
          inst.context = nextContext;
          this._updateRenderedComponent(transaction, unmaskedContext);
          if (hasComponentDidUpdate) {
            transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
          }
        },
        /**
         * Call the component's `render` method and update the DOM accordingly.
         *
         * @param {ReactReconcileTransaction} transaction
         * @internal
         */
        _updateRenderedComponent: function(transaction, context) {
          var prevComponentInstance = this._renderedComponent;
          var prevRenderedElement = prevComponentInstance._currentElement;
          var nextRenderedElement = this._renderValidatedComponent();
          if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
            ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
          } else {
            var thisID = this._rootNodeID;
            var prevComponentID = prevComponentInstance._rootNodeID;
            ReactReconciler.unmountComponent(prevComponentInstance);
            this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
            var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, this._processChildContext(context));
            this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
          }
        },
        /**
         * @protected
         */
        _replaceNodeWithMarkupByID: function(prevComponentID, nextMarkup) {
          ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
        },
        /**
         * @protected
         */
        _renderValidatedComponentWithoutOwnerOrContext: function() {
          var inst = this._instance;
          var renderedComponent = inst.render();
          if (false) {
            if (typeof renderedComponent === "undefined" && inst.render._isMockFunction) {
              renderedComponent = null;
            }
          }
          return renderedComponent;
        },
        /**
         * @private
         */
        _renderValidatedComponent: function() {
          var renderedComponent;
          ReactCurrentOwner.current = this;
          try {
            renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
          } finally {
            ReactCurrentOwner.current = null;
          }
          !// TODO: An `isValidNode` function would probably be more appropriate
          (renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? false ? invariant(false, "%s.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.", this.getName() || "ReactCompositeComponent") : invariant(false) : void 0;
          return renderedComponent;
        },
        /**
         * Lazily allocates the refs object and stores `component` as `ref`.
         *
         * @param {string} ref Reference name.
         * @param {component} component Component to store as `ref`.
         * @final
         * @private
         */
        attachRef: function(ref, component) {
          var inst = this.getPublicInstance();
          !(inst != null) ? false ? invariant(false, "Stateless function components cannot have refs.") : invariant(false) : void 0;
          var publicComponentInstance = component.getPublicInstance();
          if (false) {
            var componentName = component && component.getName ? component.getName() : "a component";
            false ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs (See ref "%s" in %s created by %s). Attempts to access this ref will fail.', ref, componentName, this.getName()) : void 0;
          }
          var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
          refs[ref] = publicComponentInstance;
        },
        /**
         * Detaches a reference name.
         *
         * @param {string} ref Name to dereference.
         * @final
         * @private
         */
        detachRef: function(ref) {
          var refs = this.getPublicInstance().refs;
          delete refs[ref];
        },
        /**
         * Get a text description of the component that can be used to identify it
         * in error messages.
         * @return {string} The name or null.
         * @internal
         */
        getName: function() {
          var type = this._currentElement.type;
          var constructor = this._instance && this._instance.constructor;
          return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
        },
        /**
         * Get the publicly accessible representation of this component - i.e. what
         * is exposed by refs and returned by render. Can be null for stateless
         * components.
         *
         * @return {ReactComponent} the public component instance.
         * @internal
         */
        getPublicInstance: function() {
          var inst = this._instance;
          if (inst instanceof StatelessComponent) {
            return null;
          }
          return inst;
        },
        // Stub
        _instantiateReactComponent: null
      };
      ReactPerf.measureMethods(ReactCompositeComponentMixin, "ReactCompositeComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent",
        _renderValidatedComponent: "_renderValidatedComponent"
      });
      var ReactCompositeComponent = {
        Mixin: ReactCompositeComponentMixin
      };
      module.exports = ReactCompositeComponent;
    }
  });

  // node_modules/react/lib/ReactEmptyComponent.js
  var require_ReactEmptyComponent = __commonJS({
    "node_modules/react/lib/ReactEmptyComponent.js"(exports, module) {
      "use strict";
      var ReactElement = require_ReactElement();
      var ReactEmptyComponentRegistry = require_ReactEmptyComponentRegistry();
      var ReactReconciler = require_ReactReconciler();
      var assign = require_Object_assign();
      var placeholderElement;
      var ReactEmptyComponentInjection = {
        injectEmptyComponent: function(component) {
          placeholderElement = ReactElement.createElement(component);
        }
      };
      function registerNullComponentID() {
        ReactEmptyComponentRegistry.registerNullComponentID(this._rootNodeID);
      }
      var ReactEmptyComponent = function(instantiate) {
        this._currentElement = null;
        this._rootNodeID = null;
        this._renderedComponent = instantiate(placeholderElement);
      };
      assign(ReactEmptyComponent.prototype, {
        construct: function(element) {
        },
        mountComponent: function(rootID, transaction, context) {
          transaction.getReactMountReady().enqueue(registerNullComponentID, this);
          this._rootNodeID = rootID;
          return ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, context);
        },
        receiveComponent: function() {
        },
        unmountComponent: function(rootID, transaction, context) {
          ReactReconciler.unmountComponent(this._renderedComponent);
          ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);
          this._rootNodeID = null;
          this._renderedComponent = null;
        }
      });
      ReactEmptyComponent.injection = ReactEmptyComponentInjection;
      module.exports = ReactEmptyComponent;
    }
  });

  // node_modules/react/lib/ReactNativeComponent.js
  var require_ReactNativeComponent = __commonJS({
    "node_modules/react/lib/ReactNativeComponent.js"(exports, module) {
      "use strict";
      var assign = require_Object_assign();
      var invariant = require_invariant();
      var autoGenerateWrapperClass = null;
      var genericComponentClass = null;
      var tagToComponentClass = {};
      var textComponentClass = null;
      var ReactNativeComponentInjection = {
        // This accepts a class that receives the tag string. This is a catch all
        // that can render any kind of tag.
        injectGenericComponentClass: function(componentClass) {
          genericComponentClass = componentClass;
        },
        // This accepts a text component class that takes the text string to be
        // rendered as props.
        injectTextComponentClass: function(componentClass) {
          textComponentClass = componentClass;
        },
        // This accepts a keyed object with classes as values. Each key represents a
        // tag. That particular tag will use this class instead of the generic one.
        injectComponentClasses: function(componentClasses) {
          assign(tagToComponentClass, componentClasses);
        }
      };
      function getComponentClassForElement(element) {
        if (typeof element.type === "function") {
          return element.type;
        }
        var tag = element.type;
        var componentClass = tagToComponentClass[tag];
        if (componentClass == null) {
          tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
        }
        return componentClass;
      }
      function createInternalComponent(element) {
        !genericComponentClass ? false ? invariant(false, "There is no registered component for the tag %s", element.type) : invariant(false) : void 0;
        return new genericComponentClass(element.type, element.props);
      }
      function createInstanceForText(text) {
        return new textComponentClass(text);
      }
      function isTextComponent(component) {
        return component instanceof textComponentClass;
      }
      var ReactNativeComponent = {
        getComponentClassForElement,
        createInternalComponent,
        createInstanceForText,
        isTextComponent,
        injection: ReactNativeComponentInjection
      };
      module.exports = ReactNativeComponent;
    }
  });

  // node_modules/react/lib/instantiateReactComponent.js
  var require_instantiateReactComponent = __commonJS({
    "node_modules/react/lib/instantiateReactComponent.js"(exports, module) {
      "use strict";
      var ReactCompositeComponent = require_ReactCompositeComponent();
      var ReactEmptyComponent = require_ReactEmptyComponent();
      var ReactNativeComponent = require_ReactNativeComponent();
      var assign = require_Object_assign();
      var invariant = require_invariant();
      var warning = require_warning();
      var ReactCompositeComponentWrapper = function() {
      };
      assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
        _instantiateReactComponent: instantiateReactComponent
      });
      function isInternalComponentType(type) {
        return typeof type === "function" && typeof type.prototype !== "undefined" && typeof type.prototype.mountComponent === "function" && typeof type.prototype.receiveComponent === "function";
      }
      function instantiateReactComponent(node) {
        var instance;
        if (node === null || node === false) {
          instance = new ReactEmptyComponent(instantiateReactComponent);
        } else if (typeof node === "object") {
          var element = node;
          !(element && (typeof element.type === "function" || typeof element.type === "string")) ? false ? invariant(false, "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : void 0;
          if (typeof element.type === "string") {
            instance = ReactNativeComponent.createInternalComponent(element);
          } else if (isInternalComponentType(element.type)) {
            instance = new element.type(element);
          } else {
            instance = new ReactCompositeComponentWrapper();
          }
        } else if (typeof node === "string" || typeof node === "number") {
          instance = ReactNativeComponent.createInstanceForText(node);
        } else {
          true ? false ? invariant(false, "Encountered invalid React node of type %s", typeof node) : invariant(false) : void 0;
        }
        if (false) {
          false ? warning(typeof instance.construct === "function" && typeof instance.mountComponent === "function" && typeof instance.receiveComponent === "function" && typeof instance.unmountComponent === "function", "Only React Components can be mounted.") : void 0;
        }
        instance.construct(node);
        instance._mountIndex = 0;
        instance._mountImage = null;
        if (false) {
          instance._isOwnerNecessary = false;
          instance._warnedAboutRefsInRender = false;
        }
        if (false) {
          if (Object.preventExtensions) {
            Object.preventExtensions(instance);
          }
        }
        return instance;
      }
      module.exports = instantiateReactComponent;
    }
  });

  // node_modules/react/lib/validateDOMNesting.js
  var require_validateDOMNesting = __commonJS({
    "node_modules/react/lib/validateDOMNesting.js"(exports, module) {
      "use strict";
      var assign = require_Object_assign();
      var emptyFunction = require_emptyFunction();
      var warning = require_warning();
      var validateDOMNesting = emptyFunction;
      if (false) {
        specialTags = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"];
        inScopeTags = [
          "applet",
          "caption",
          "html",
          "table",
          "td",
          "th",
          "marquee",
          "object",
          "template",
          // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
          // TODO: Distinguish by namespace here -- for <title>, including it here
          // errs on the side of fewer warnings
          "foreignObject",
          "desc",
          "title"
        ];
        buttonScopeTags = inScopeTags.concat(["button"]);
        impliedEndTags = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"];
        emptyAncestorInfo = {
          parentTag: null,
          formTag: null,
          aTagInScope: null,
          buttonTagInScope: null,
          nobrTagInScope: null,
          pTagInButtonScope: null,
          listItemTagAutoclosing: null,
          dlItemTagAutoclosing: null
        };
        updatedAncestorInfo = function(oldInfo, tag, instance) {
          var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
          var info = { tag, instance };
          if (inScopeTags.indexOf(tag) !== -1) {
            ancestorInfo.aTagInScope = null;
            ancestorInfo.buttonTagInScope = null;
            ancestorInfo.nobrTagInScope = null;
          }
          if (buttonScopeTags.indexOf(tag) !== -1) {
            ancestorInfo.pTagInButtonScope = null;
          }
          if (specialTags.indexOf(tag) !== -1 && tag !== "address" && tag !== "div" && tag !== "p") {
            ancestorInfo.listItemTagAutoclosing = null;
            ancestorInfo.dlItemTagAutoclosing = null;
          }
          ancestorInfo.parentTag = info;
          if (tag === "form") {
            ancestorInfo.formTag = info;
          }
          if (tag === "a") {
            ancestorInfo.aTagInScope = info;
          }
          if (tag === "button") {
            ancestorInfo.buttonTagInScope = info;
          }
          if (tag === "nobr") {
            ancestorInfo.nobrTagInScope = info;
          }
          if (tag === "p") {
            ancestorInfo.pTagInButtonScope = info;
          }
          if (tag === "li") {
            ancestorInfo.listItemTagAutoclosing = info;
          }
          if (tag === "dd" || tag === "dt") {
            ancestorInfo.dlItemTagAutoclosing = info;
          }
          return ancestorInfo;
        };
        isTagValidWithParent = function(tag, parentTag) {
          switch (parentTag) {
            // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
            case "select":
              return tag === "option" || tag === "optgroup" || tag === "#text";
            case "optgroup":
              return tag === "option" || tag === "#text";
            // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
            // but
            case "option":
              return tag === "#text";
            // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
            // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
            // No special behavior since these rules fall back to "in body" mode for
            // all except special table nodes which cause bad parsing behavior anyway.
            // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
            case "tr":
              return tag === "th" || tag === "td" || tag === "style" || tag === "script" || tag === "template";
            // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
            case "tbody":
            case "thead":
            case "tfoot":
              return tag === "tr" || tag === "style" || tag === "script" || tag === "template";
            // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
            case "colgroup":
              return tag === "col" || tag === "template";
            // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
            case "table":
              return tag === "caption" || tag === "colgroup" || tag === "tbody" || tag === "tfoot" || tag === "thead" || tag === "style" || tag === "script" || tag === "template";
            // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
            case "head":
              return tag === "base" || tag === "basefont" || tag === "bgsound" || tag === "link" || tag === "meta" || tag === "title" || tag === "noscript" || tag === "noframes" || tag === "style" || tag === "script" || tag === "template";
            // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
            case "html":
              return tag === "head" || tag === "body";
          }
          switch (tag) {
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              return parentTag !== "h1" && parentTag !== "h2" && parentTag !== "h3" && parentTag !== "h4" && parentTag !== "h5" && parentTag !== "h6";
            case "rp":
            case "rt":
              return impliedEndTags.indexOf(parentTag) === -1;
            case "caption":
            case "col":
            case "colgroup":
            case "frame":
            case "head":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return parentTag == null;
          }
          return true;
        };
        findInvalidAncestorForTag = function(tag, ancestorInfo) {
          switch (tag) {
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "main":
            case "menu":
            case "nav":
            case "ol":
            case "p":
            case "section":
            case "summary":
            case "ul":
            case "pre":
            case "listing":
            case "table":
            case "hr":
            case "xmp":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              return ancestorInfo.pTagInButtonScope;
            case "form":
              return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
            case "li":
              return ancestorInfo.listItemTagAutoclosing;
            case "dd":
            case "dt":
              return ancestorInfo.dlItemTagAutoclosing;
            case "button":
              return ancestorInfo.buttonTagInScope;
            case "a":
              return ancestorInfo.aTagInScope;
            case "nobr":
              return ancestorInfo.nobrTagInScope;
          }
          return null;
        };
        findOwnerStack = function(instance) {
          if (!instance) {
            return [];
          }
          var stack = [];
          do {
            stack.push(instance);
          } while (instance = instance._currentElement._owner);
          stack.reverse();
          return stack;
        };
        didWarn = {};
        validateDOMNesting = function(childTag, childInstance, ancestorInfo) {
          ancestorInfo = ancestorInfo || emptyAncestorInfo;
          var parentInfo = ancestorInfo.parentTag;
          var parentTag = parentInfo && parentInfo.tag;
          var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
          var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
          var problematic = invalidParent || invalidAncestor;
          if (problematic) {
            var ancestorTag = problematic.tag;
            var ancestorInstance = problematic.instance;
            var childOwner = childInstance && childInstance._currentElement._owner;
            var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;
            var childOwners = findOwnerStack(childOwner);
            var ancestorOwners = findOwnerStack(ancestorOwner);
            var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
            var i;
            var deepestCommon = -1;
            for (i = 0; i < minStackLen; i++) {
              if (childOwners[i] === ancestorOwners[i]) {
                deepestCommon = i;
              } else {
                break;
              }
            }
            var UNKNOWN = "(unknown)";
            var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function(inst) {
              return inst.getName() || UNKNOWN;
            });
            var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function(inst) {
              return inst.getName() || UNKNOWN;
            });
            var ownerInfo = [].concat(
              // If the parent and child instances have a common owner ancestor, start
              // with that -- otherwise we just start with the parent's owners.
              deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [],
              ancestorOwnerNames,
              ancestorTag,
              // If we're warning about an invalid (non-parent) ancestry, add '...'
              invalidAncestor ? ["..."] : [],
              childOwnerNames,
              childTag
            ).join(" > ");
            var warnKey = !!invalidParent + "|" + childTag + "|" + ancestorTag + "|" + ownerInfo;
            if (didWarn[warnKey]) {
              return;
            }
            didWarn[warnKey] = true;
            if (invalidParent) {
              var info = "";
              if (ancestorTag === "table" && childTag === "tr") {
                info += " Add a <tbody> to your code to match the DOM tree generated by the browser.";
              }
              false ? warning(false, "validateDOMNesting(...): <%s> cannot appear as a child of <%s>. See %s.%s", childTag, ancestorTag, ownerInfo, info) : void 0;
            } else {
              false ? warning(false, "validateDOMNesting(...): <%s> cannot appear as a descendant of <%s>. See %s.", childTag, ancestorTag, ownerInfo) : void 0;
            }
          }
        };
        validateDOMNesting.ancestorInfoContextKey = "__validateDOMNesting_ancestorInfo$" + Math.random().toString(36).slice(2);
        validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;
        validateDOMNesting.isTagValidInContext = function(tag, ancestorInfo) {
          ancestorInfo = ancestorInfo || emptyAncestorInfo;
          var parentInfo = ancestorInfo.parentTag;
          var parentTag = parentInfo && parentInfo.tag;
          return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
        };
      }
      var specialTags;
      var inScopeTags;
      var buttonScopeTags;
      var impliedEndTags;
      var emptyAncestorInfo;
      var updatedAncestorInfo;
      var isTagValidWithParent;
      var findInvalidAncestorForTag;
      var findOwnerStack;
      var didWarn;
      module.exports = validateDOMNesting;
    }
  });

  // node_modules/react/lib/ReactMount.js
  var require_ReactMount = __commonJS({
    "node_modules/react/lib/ReactMount.js"(exports, module) {
      "use strict";
      var DOMProperty = require_DOMProperty();
      var ReactBrowserEventEmitter = require_ReactBrowserEventEmitter();
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var ReactDOMFeatureFlags = require_ReactDOMFeatureFlags();
      var ReactElement = require_ReactElement();
      var ReactEmptyComponentRegistry = require_ReactEmptyComponentRegistry();
      var ReactInstanceHandles = require_ReactInstanceHandles();
      var ReactInstanceMap = require_ReactInstanceMap();
      var ReactMarkupChecksum = require_ReactMarkupChecksum();
      var ReactPerf = require_ReactPerf();
      var ReactReconciler = require_ReactReconciler();
      var ReactUpdateQueue = require_ReactUpdateQueue();
      var ReactUpdates = require_ReactUpdates();
      var assign = require_Object_assign();
      var emptyObject = require_emptyObject();
      var containsNode = require_containsNode();
      var instantiateReactComponent = require_instantiateReactComponent();
      var invariant = require_invariant();
      var setInnerHTML = require_setInnerHTML();
      var shouldUpdateReactComponent = require_shouldUpdateReactComponent();
      var validateDOMNesting = require_validateDOMNesting();
      var warning = require_warning();
      var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
      var nodeCache = {};
      var ELEMENT_NODE_TYPE = 1;
      var DOC_NODE_TYPE = 9;
      var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
      var ownerDocumentContextKey = "__ReactMount_ownerDocument$" + Math.random().toString(36).slice(2);
      var instancesByReactRootID = {};
      var containersByReactRootID = {};
      if (false) {
        rootElementsByReactRootID = {};
      }
      var rootElementsByReactRootID;
      var findComponentRootReusableArray = [];
      function firstDifferenceIndex(string1, string2) {
        var minLen = Math.min(string1.length, string2.length);
        for (var i = 0; i < minLen; i++) {
          if (string1.charAt(i) !== string2.charAt(i)) {
            return i;
          }
        }
        return string1.length === string2.length ? -1 : minLen;
      }
      function getReactRootElementInContainer(container) {
        if (!container) {
          return null;
        }
        if (container.nodeType === DOC_NODE_TYPE) {
          return container.documentElement;
        } else {
          return container.firstChild;
        }
      }
      function getReactRootID(container) {
        var rootElement = getReactRootElementInContainer(container);
        return rootElement && ReactMount.getID(rootElement);
      }
      function getID(node) {
        var id = internalGetID(node);
        if (id) {
          if (nodeCache.hasOwnProperty(id)) {
            var cached = nodeCache[id];
            if (cached !== node) {
              !!isValid(cached, id) ? false ? invariant(false, "ReactMount: Two valid but unequal nodes with the same `%s`: %s", ATTR_NAME, id) : invariant(false) : void 0;
              nodeCache[id] = node;
            }
          } else {
            nodeCache[id] = node;
          }
        }
        return id;
      }
      function internalGetID(node) {
        return node && node.getAttribute && node.getAttribute(ATTR_NAME) || "";
      }
      function setID(node, id) {
        var oldID = internalGetID(node);
        if (oldID !== id) {
          delete nodeCache[oldID];
        }
        node.setAttribute(ATTR_NAME, id);
        nodeCache[id] = node;
      }
      function getNode(id) {
        if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
          nodeCache[id] = ReactMount.findReactNodeByID(id);
        }
        return nodeCache[id];
      }
      function getNodeFromInstance(instance) {
        var id = ReactInstanceMap.get(instance)._rootNodeID;
        if (ReactEmptyComponentRegistry.isNullComponentID(id)) {
          return null;
        }
        if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
          nodeCache[id] = ReactMount.findReactNodeByID(id);
        }
        return nodeCache[id];
      }
      function isValid(node, id) {
        if (node) {
          !(internalGetID(node) === id) ? false ? invariant(false, "ReactMount: Unexpected modification of `%s`", ATTR_NAME) : invariant(false) : void 0;
          var container = ReactMount.findReactContainerForID(id);
          if (container && containsNode(container, node)) {
            return true;
          }
        }
        return false;
      }
      function purgeID(id) {
        delete nodeCache[id];
      }
      var deepestNodeSoFar = null;
      function findDeepestCachedAncestorImpl(ancestorID) {
        var ancestor = nodeCache[ancestorID];
        if (ancestor && isValid(ancestor, ancestorID)) {
          deepestNodeSoFar = ancestor;
        } else {
          return false;
        }
      }
      function findDeepestCachedAncestor(targetID) {
        deepestNodeSoFar = null;
        ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);
        var foundNode = deepestNodeSoFar;
        deepestNodeSoFar = null;
        return foundNode;
      }
      function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup, context) {
        if (ReactDOMFeatureFlags.useCreateElement) {
          context = assign({}, context);
          if (container.nodeType === DOC_NODE_TYPE) {
            context[ownerDocumentContextKey] = container;
          } else {
            context[ownerDocumentContextKey] = container.ownerDocument;
          }
        }
        if (false) {
          if (context === emptyObject) {
            context = {};
          }
          var tag = container.nodeName.toLowerCase();
          context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(null, tag, null);
        }
        var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
        componentInstance._renderedComponent._topLevelWrapper = componentInstance;
        ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);
      }
      function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup, context) {
        var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(
          /* forceHTML */
          shouldReuseMarkup
        );
        transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup, context);
        ReactUpdates.ReactReconcileTransaction.release(transaction);
      }
      function unmountComponentFromNode(instance, container) {
        ReactReconciler.unmountComponent(instance);
        if (container.nodeType === DOC_NODE_TYPE) {
          container = container.documentElement;
        }
        while (container.lastChild) {
          container.removeChild(container.lastChild);
        }
      }
      function hasNonRootReactChild(node) {
        var reactRootID = getReactRootID(node);
        return reactRootID ? reactRootID !== ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID) : false;
      }
      function findFirstReactDOMImpl(node) {
        for (; node && node.parentNode !== node; node = node.parentNode) {
          if (node.nodeType !== 1) {
            continue;
          }
          var nodeID = internalGetID(node);
          if (!nodeID) {
            continue;
          }
          var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
          var current = node;
          var lastID;
          do {
            lastID = internalGetID(current);
            current = current.parentNode;
            if (current == null) {
              return null;
            }
          } while (lastID !== reactRootID);
          if (current === containersByReactRootID[reactRootID]) {
            return node;
          }
        }
        return null;
      }
      var TopLevelWrapper = function() {
      };
      TopLevelWrapper.prototype.isReactComponent = {};
      if (false) {
        TopLevelWrapper.displayName = "TopLevelWrapper";
      }
      TopLevelWrapper.prototype.render = function() {
        return this.props;
      };
      var ReactMount = {
        TopLevelWrapper,
        /** Exposed for debugging purposes **/
        _instancesByReactRootID: instancesByReactRootID,
        /**
         * This is a hook provided to support rendering React components while
         * ensuring that the apparent scroll position of its `container` does not
         * change.
         *
         * @param {DOMElement} container The `container` being rendered into.
         * @param {function} renderCallback This must be called once to do the render.
         */
        scrollMonitor: function(container, renderCallback) {
          renderCallback();
        },
        /**
         * Take a component that's already mounted into the DOM and replace its props
         * @param {ReactComponent} prevComponent component instance already in the DOM
         * @param {ReactElement} nextElement component instance to render
         * @param {DOMElement} container container to render into
         * @param {?function} callback function triggered on completion
         */
        _updateRootComponent: function(prevComponent, nextElement, container, callback) {
          ReactMount.scrollMonitor(container, function() {
            ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
            if (callback) {
              ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
            }
          });
          if (false) {
            rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
          }
          return prevComponent;
        },
        /**
         * Register a component into the instance map and starts scroll value
         * monitoring
         * @param {ReactComponent} nextComponent component instance to render
         * @param {DOMElement} container container to render into
         * @return {string} reactRoot ID prefix
         */
        _registerComponent: function(nextComponent, container) {
          !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? false ? invariant(false, "_registerComponent(...): Target container is not a DOM element.") : invariant(false) : void 0;
          ReactBrowserEventEmitter.ensureScrollValueMonitoring();
          var reactRootID = ReactMount.registerContainer(container);
          instancesByReactRootID[reactRootID] = nextComponent;
          return reactRootID;
        },
        /**
         * Render a new component into the DOM.
         * @param {ReactElement} nextElement element to render
         * @param {DOMElement} container container to render into
         * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
         * @return {ReactComponent} nextComponent
         */
        _renderNewRootComponent: function(nextElement, container, shouldReuseMarkup, context) {
          false ? warning(ReactCurrentOwner.current == null, "_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.", ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || "ReactCompositeComponent") : void 0;
          var componentInstance = instantiateReactComponent(nextElement, null);
          var reactRootID = ReactMount._registerComponent(componentInstance, container);
          ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup, context);
          if (false) {
            rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
          }
          return componentInstance;
        },
        /**
         * Renders a React component into the DOM in the supplied `container`.
         *
         * If the React component was previously rendered into `container`, this will
         * perform an update on it and only mutate the DOM as necessary to reflect the
         * latest React component.
         *
         * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
         * @param {ReactElement} nextElement Component element to render.
         * @param {DOMElement} container DOM element to render into.
         * @param {?function} callback function triggered on completion
         * @return {ReactComponent} Component instance rendered in `container`.
         */
        renderSubtreeIntoContainer: function(parentComponent, nextElement, container, callback) {
          !(parentComponent != null && parentComponent._reactInternalInstance != null) ? false ? invariant(false, "parentComponent must be a valid React Component") : invariant(false) : void 0;
          return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
        },
        _renderSubtreeIntoContainer: function(parentComponent, nextElement, container, callback) {
          !ReactElement.isValidElement(nextElement) ? false ? invariant(false, "ReactDOM.render(): Invalid component element.%s", typeof nextElement === "string" ? " Instead of passing an element string, make sure to instantiate it by passing it to React.createElement." : typeof nextElement === "function" ? " Instead of passing a component class, make sure to instantiate it by passing it to React.createElement." : (
            // Check if it quacks like an element
            nextElement != null && nextElement.props !== void 0 ? " This may be caused by unintentionally loading two independent copies of React." : ""
          )) : invariant(false) : void 0;
          false ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== "BODY", "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.") : void 0;
          var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);
          var prevComponent = instancesByReactRootID[getReactRootID(container)];
          if (prevComponent) {
            var prevWrappedElement = prevComponent._currentElement;
            var prevElement = prevWrappedElement.props;
            if (shouldUpdateReactComponent(prevElement, nextElement)) {
              var publicInst = prevComponent._renderedComponent.getPublicInstance();
              var updatedCallback = callback && function() {
                callback.call(publicInst);
              };
              ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
              return publicInst;
            } else {
              ReactMount.unmountComponentAtNode(container);
            }
          }
          var reactRootElement = getReactRootElementInContainer(container);
          var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
          var containerHasNonRootReactChild = hasNonRootReactChild(container);
          if (false) {
            false ? warning(!containerHasNonRootReactChild, "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.") : void 0;
            if (!containerHasReactMarkup || reactRootElement.nextSibling) {
              var rootElementSibling = reactRootElement;
              while (rootElementSibling) {
                if (internalGetID(rootElementSibling)) {
                  false ? warning(false, "render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.") : void 0;
                  break;
                }
                rootElementSibling = rootElementSibling.nextSibling;
              }
            }
          }
          var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
          var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
          if (callback) {
            callback.call(component);
          }
          return component;
        },
        /**
         * Renders a React component into the DOM in the supplied `container`.
         *
         * If the React component was previously rendered into `container`, this will
         * perform an update on it and only mutate the DOM as necessary to reflect the
         * latest React component.
         *
         * @param {ReactElement} nextElement Component element to render.
         * @param {DOMElement} container DOM element to render into.
         * @param {?function} callback function triggered on completion
         * @return {ReactComponent} Component instance rendered in `container`.
         */
        render: function(nextElement, container, callback) {
          return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
        },
        /**
         * Registers a container node into which React components will be rendered.
         * This also creates the "reactRoot" ID that will be assigned to the element
         * rendered within.
         *
         * @param {DOMElement} container DOM element to register as a container.
         * @return {string} The "reactRoot" ID of elements rendered within.
         */
        registerContainer: function(container) {
          var reactRootID = getReactRootID(container);
          if (reactRootID) {
            reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
          }
          if (!reactRootID) {
            reactRootID = ReactInstanceHandles.createReactRootID();
          }
          containersByReactRootID[reactRootID] = container;
          return reactRootID;
        },
        /**
         * Unmounts and destroys the React component rendered in the `container`.
         *
         * @param {DOMElement} container DOM element containing a React component.
         * @return {boolean} True if a component was found in and unmounted from
         *                   `container`
         */
        unmountComponentAtNode: function(container) {
          false ? warning(ReactCurrentOwner.current == null, "unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.", ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || "ReactCompositeComponent") : void 0;
          !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? false ? invariant(false, "unmountComponentAtNode(...): Target container is not a DOM element.") : invariant(false) : void 0;
          var reactRootID = getReactRootID(container);
          var component = instancesByReactRootID[reactRootID];
          if (!component) {
            var containerHasNonRootReactChild = hasNonRootReactChild(container);
            var containerID = internalGetID(container);
            var isContainerReactRoot = containerID && containerID === ReactInstanceHandles.getReactRootIDFromNodeID(containerID);
            if (false) {
              false ? warning(!containerHasNonRootReactChild, "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", isContainerReactRoot ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.") : void 0;
            }
            return false;
          }
          ReactUpdates.batchedUpdates(unmountComponentFromNode, component, container);
          delete instancesByReactRootID[reactRootID];
          delete containersByReactRootID[reactRootID];
          if (false) {
            delete rootElementsByReactRootID[reactRootID];
          }
          return true;
        },
        /**
         * Finds the container DOM element that contains React component to which the
         * supplied DOM `id` belongs.
         *
         * @param {string} id The ID of an element rendered by a React component.
         * @return {?DOMElement} DOM element that contains the `id`.
         */
        findReactContainerForID: function(id) {
          var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
          var container = containersByReactRootID[reactRootID];
          if (false) {
            var rootElement = rootElementsByReactRootID[reactRootID];
            if (rootElement && rootElement.parentNode !== container) {
              false ? warning(
                // Call internalGetID here because getID calls isValid which calls
                // findReactContainerForID (this function).
                internalGetID(rootElement) === reactRootID,
                "ReactMount: Root element ID differed from reactRootID."
              ) : void 0;
              var containerChild = container.firstChild;
              if (containerChild && reactRootID === internalGetID(containerChild)) {
                rootElementsByReactRootID[reactRootID] = containerChild;
              } else {
                false ? warning(false, "ReactMount: Root element has been removed from its original container. New container: %s", rootElement.parentNode) : void 0;
              }
            }
          }
          return container;
        },
        /**
         * Finds an element rendered by React with the supplied ID.
         *
         * @param {string} id ID of a DOM node in the React component.
         * @return {DOMElement} Root DOM node of the React component.
         */
        findReactNodeByID: function(id) {
          var reactRoot = ReactMount.findReactContainerForID(id);
          return ReactMount.findComponentRoot(reactRoot, id);
        },
        /**
         * Traverses up the ancestors of the supplied node to find a node that is a
         * DOM representation of a React component rendered by this copy of React.
         *
         * @param {*} node
         * @return {?DOMEventTarget}
         * @internal
         */
        getFirstReactDOM: function(node) {
          return findFirstReactDOMImpl(node);
        },
        /**
         * Finds a node with the supplied `targetID` inside of the supplied
         * `ancestorNode`.  Exploits the ID naming scheme to perform the search
         * quickly.
         *
         * @param {DOMEventTarget} ancestorNode Search from this root.
         * @pararm {string} targetID ID of the DOM representation of the component.
         * @return {DOMEventTarget} DOM node with the supplied `targetID`.
         * @internal
         */
        findComponentRoot: function(ancestorNode, targetID) {
          var firstChildren = findComponentRootReusableArray;
          var childIndex = 0;
          var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;
          if (false) {
            false ? warning(deepestAncestor != null, "React can't find the root component node for data-reactid value `%s`. If you're seeing this message, it probably means that you've loaded two copies of React on the page. At this time, only a single copy of React can be loaded at a time.", targetID) : void 0;
          }
          firstChildren[0] = deepestAncestor.firstChild;
          firstChildren.length = 1;
          while (childIndex < firstChildren.length) {
            var child = firstChildren[childIndex++];
            var targetChild;
            while (child) {
              var childID = ReactMount.getID(child);
              if (childID) {
                if (targetID === childID) {
                  targetChild = child;
                } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
                  firstChildren.length = childIndex = 0;
                  firstChildren.push(child.firstChild);
                }
              } else {
                firstChildren.push(child.firstChild);
              }
              child = child.nextSibling;
            }
            if (targetChild) {
              firstChildren.length = 0;
              return targetChild;
            }
          }
          firstChildren.length = 0;
          true ? false ? invariant(false, "findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.", targetID, ReactMount.getID(ancestorNode)) : invariant(false) : void 0;
        },
        _mountImageIntoNode: function(markup, container, shouldReuseMarkup, transaction) {
          !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? false ? invariant(false, "mountComponentIntoNode(...): Target container is not valid.") : invariant(false) : void 0;
          if (shouldReuseMarkup) {
            var rootElement = getReactRootElementInContainer(container);
            if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
              return;
            } else {
              var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
              rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
              var rootMarkup = rootElement.outerHTML;
              rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
              var normalizedMarkup = markup;
              if (false) {
                var normalizer;
                if (container.nodeType === ELEMENT_NODE_TYPE) {
                  normalizer = document.createElement("div");
                  normalizer.innerHTML = markup;
                  normalizedMarkup = normalizer.innerHTML;
                } else {
                  normalizer = document.createElement("iframe");
                  document.body.appendChild(normalizer);
                  normalizer.contentDocument.write(markup);
                  normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
                  document.body.removeChild(normalizer);
                }
              }
              var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
              var difference = " (client) " + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + "\n (server) " + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
              !(container.nodeType !== DOC_NODE_TYPE) ? false ? invariant(false, "You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s", difference) : invariant(false) : void 0;
              if (false) {
                false ? warning(false, "React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:\n%s", difference) : void 0;
              }
            }
          }
          !(container.nodeType !== DOC_NODE_TYPE) ? false ? invariant(false, "You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.") : invariant(false) : void 0;
          if (transaction.useCreateElement) {
            while (container.lastChild) {
              container.removeChild(container.lastChild);
            }
            container.appendChild(markup);
          } else {
            setInnerHTML(container, markup);
          }
        },
        ownerDocumentContextKey,
        /**
         * React ID utilities.
         */
        getReactRootID,
        getID,
        setID,
        getNode,
        getNodeFromInstance,
        isValid,
        purgeID
      };
      ReactPerf.measureMethods(ReactMount, "ReactMount", {
        _renderNewRootComponent: "_renderNewRootComponent",
        _mountImageIntoNode: "_mountImageIntoNode"
      });
      module.exports = ReactMount;
    }
  });

  // node_modules/react/lib/ReactDOMIDOperations.js
  var require_ReactDOMIDOperations = __commonJS({
    "node_modules/react/lib/ReactDOMIDOperations.js"(exports, module) {
      "use strict";
      var DOMChildrenOperations = require_DOMChildrenOperations();
      var DOMPropertyOperations = require_DOMPropertyOperations();
      var ReactMount = require_ReactMount();
      var ReactPerf = require_ReactPerf();
      var invariant = require_invariant();
      var INVALID_PROPERTY_ERRORS = {
        dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
        style: "`style` must be set using `updateStylesByID()`."
      };
      var ReactDOMIDOperations = {
        /**
         * Updates a DOM node with new property values. This should only be used to
         * update DOM properties in `DOMProperty`.
         *
         * @param {string} id ID of the node to update.
         * @param {string} name A valid property name, see `DOMProperty`.
         * @param {*} value New value of the property.
         * @internal
         */
        updatePropertyByID: function(id, name, value) {
          var node = ReactMount.getNode(id);
          !!INVALID_PROPERTY_ERRORS.hasOwnProperty(name) ? false ? invariant(false, "updatePropertyByID(...): %s", INVALID_PROPERTY_ERRORS[name]) : invariant(false) : void 0;
          if (value != null) {
            DOMPropertyOperations.setValueForProperty(node, name, value);
          } else {
            DOMPropertyOperations.deleteValueForProperty(node, name);
          }
        },
        /**
         * Replaces a DOM node that exists in the document with markup.
         *
         * @param {string} id ID of child to be replaced.
         * @param {string} markup Dangerous markup to inject in place of child.
         * @internal
         * @see {Danger.dangerouslyReplaceNodeWithMarkup}
         */
        dangerouslyReplaceNodeWithMarkupByID: function(id, markup) {
          var node = ReactMount.getNode(id);
          DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
        },
        /**
         * Updates a component's children by processing a series of updates.
         *
         * @param {array<object>} updates List of update configurations.
         * @param {array<string>} markup List of markup strings.
         * @internal
         */
        dangerouslyProcessChildrenUpdates: function(updates, markup) {
          for (var i = 0; i < updates.length; i++) {
            updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
          }
          DOMChildrenOperations.processUpdates(updates, markup);
        }
      };
      ReactPerf.measureMethods(ReactDOMIDOperations, "ReactDOMIDOperations", {
        dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID",
        dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates"
      });
      module.exports = ReactDOMIDOperations;
    }
  });

  // node_modules/react/lib/ReactComponentBrowserEnvironment.js
  var require_ReactComponentBrowserEnvironment = __commonJS({
    "node_modules/react/lib/ReactComponentBrowserEnvironment.js"(exports, module) {
      "use strict";
      var ReactDOMIDOperations = require_ReactDOMIDOperations();
      var ReactMount = require_ReactMount();
      var ReactComponentBrowserEnvironment = {
        processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
        replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,
        /**
         * If a particular environment requires that some resources be cleaned up,
         * specify this in the injected Mixin. In the DOM, we would likely want to
         * purge any cached node ID lookups.
         *
         * @private
         */
        unmountIDFromEnvironment: function(rootNodeID) {
          ReactMount.purgeID(rootNodeID);
        }
      };
      module.exports = ReactComponentBrowserEnvironment;
    }
  });

  // node_modules/react/lib/ReactDOMTextComponent.js
  var require_ReactDOMTextComponent = __commonJS({
    "node_modules/react/lib/ReactDOMTextComponent.js"(exports, module) {
      "use strict";
      var DOMChildrenOperations = require_DOMChildrenOperations();
      var DOMPropertyOperations = require_DOMPropertyOperations();
      var ReactComponentBrowserEnvironment = require_ReactComponentBrowserEnvironment();
      var ReactMount = require_ReactMount();
      var assign = require_Object_assign();
      var escapeTextContentForBrowser = require_escapeTextContentForBrowser();
      var setTextContent = require_setTextContent();
      var validateDOMNesting = require_validateDOMNesting();
      var ReactDOMTextComponent = function(props) {
      };
      assign(ReactDOMTextComponent.prototype, {
        /**
         * @param {ReactText} text
         * @internal
         */
        construct: function(text) {
          this._currentElement = text;
          this._stringText = "" + text;
          this._rootNodeID = null;
          this._mountIndex = 0;
        },
        /**
         * Creates the markup for this text node. This node is not intended to have
         * any features besides containing text content.
         *
         * @param {string} rootID DOM ID of the root node.
         * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
         * @return {string} Markup for this text node.
         * @internal
         */
        mountComponent: function(rootID, transaction, context) {
          if (false) {
            if (context[validateDOMNesting.ancestorInfoContextKey]) {
              validateDOMNesting("span", null, context[validateDOMNesting.ancestorInfoContextKey]);
            }
          }
          this._rootNodeID = rootID;
          if (transaction.useCreateElement) {
            var ownerDocument = context[ReactMount.ownerDocumentContextKey];
            var el = ownerDocument.createElement("span");
            DOMPropertyOperations.setAttributeForID(el, rootID);
            ReactMount.getID(el);
            setTextContent(el, this._stringText);
            return el;
          } else {
            var escapedText = escapeTextContentForBrowser(this._stringText);
            if (transaction.renderToStaticMarkup) {
              return escapedText;
            }
            return "<span " + DOMPropertyOperations.createMarkupForID(rootID) + ">" + escapedText + "</span>";
          }
        },
        /**
         * Updates this component by updating the text content.
         *
         * @param {ReactText} nextText The next text content
         * @param {ReactReconcileTransaction} transaction
         * @internal
         */
        receiveComponent: function(nextText, transaction) {
          if (nextText !== this._currentElement) {
            this._currentElement = nextText;
            var nextStringText = "" + nextText;
            if (nextStringText !== this._stringText) {
              this._stringText = nextStringText;
              var node = ReactMount.getNode(this._rootNodeID);
              DOMChildrenOperations.updateTextContent(node, nextStringText);
            }
          }
        },
        unmountComponent: function() {
          ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
        }
      });
      module.exports = ReactDOMTextComponent;
    }
  });

  // node_modules/react/lib/EventPropagators.js
  var require_EventPropagators = __commonJS({
    "node_modules/react/lib/EventPropagators.js"(exports, module) {
      "use strict";
      var EventConstants = require_EventConstants();
      var EventPluginHub = require_EventPluginHub();
      var warning = require_warning();
      var accumulateInto = require_accumulateInto();
      var forEachAccumulated = require_forEachAccumulated();
      var PropagationPhases = EventConstants.PropagationPhases;
      var getListener = EventPluginHub.getListener;
      function listenerAtPhase(id, event, propagationPhase) {
        var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
        return getListener(id, registrationName);
      }
      function accumulateDirectionalDispatches(domID, upwards, event) {
        if (false) {
          false ? warning(domID, "Dispatching id must not be null") : void 0;
        }
        var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
        var listener = listenerAtPhase(domID, event, phase);
        if (listener) {
          event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
          event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
        }
      }
      function accumulateTwoPhaseDispatchesSingle(event) {
        if (event && event.dispatchConfig.phasedRegistrationNames) {
          EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
        }
      }
      function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
        if (event && event.dispatchConfig.phasedRegistrationNames) {
          EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
        }
      }
      function accumulateDispatches(id, ignoredDirection, event) {
        if (event && event.dispatchConfig.registrationName) {
          var registrationName = event.dispatchConfig.registrationName;
          var listener = getListener(id, registrationName);
          if (listener) {
            event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
            event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
          }
        }
      }
      function accumulateDirectDispatchesSingle(event) {
        if (event && event.dispatchConfig.registrationName) {
          accumulateDispatches(event.dispatchMarker, null, event);
        }
      }
      function accumulateTwoPhaseDispatches(events) {
        forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
      }
      function accumulateTwoPhaseDispatchesSkipTarget(events) {
        forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
      }
      function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
        EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
      }
      function accumulateDirectDispatches(events) {
        forEachAccumulated(events, accumulateDirectDispatchesSingle);
      }
      var EventPropagators = {
        accumulateTwoPhaseDispatches,
        accumulateTwoPhaseDispatchesSkipTarget,
        accumulateDirectDispatches,
        accumulateEnterLeaveDispatches
      };
      module.exports = EventPropagators;
    }
  });

  // node_modules/react/lib/getTextContentAccessor.js
  var require_getTextContentAccessor = __commonJS({
    "node_modules/react/lib/getTextContentAccessor.js"(exports, module) {
      "use strict";
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var contentKey = null;
      function getTextContentAccessor() {
        if (!contentKey && ExecutionEnvironment.canUseDOM) {
          contentKey = "textContent" in document.documentElement ? "textContent" : "innerText";
        }
        return contentKey;
      }
      module.exports = getTextContentAccessor;
    }
  });

  // node_modules/react/lib/FallbackCompositionState.js
  var require_FallbackCompositionState = __commonJS({
    "node_modules/react/lib/FallbackCompositionState.js"(exports, module) {
      "use strict";
      var PooledClass = require_PooledClass();
      var assign = require_Object_assign();
      var getTextContentAccessor = require_getTextContentAccessor();
      function FallbackCompositionState(root) {
        this._root = root;
        this._startText = this.getText();
        this._fallbackText = null;
      }
      assign(FallbackCompositionState.prototype, {
        destructor: function() {
          this._root = null;
          this._startText = null;
          this._fallbackText = null;
        },
        /**
         * Get current text of input.
         *
         * @return {string}
         */
        getText: function() {
          if ("value" in this._root) {
            return this._root.value;
          }
          return this._root[getTextContentAccessor()];
        },
        /**
         * Determine the differing substring between the initially stored
         * text content and the current content.
         *
         * @return {string}
         */
        getData: function() {
          if (this._fallbackText) {
            return this._fallbackText;
          }
          var start;
          var startValue = this._startText;
          var startLength = startValue.length;
          var end;
          var endValue = this.getText();
          var endLength = endValue.length;
          for (start = 0; start < startLength; start++) {
            if (startValue[start] !== endValue[start]) {
              break;
            }
          }
          var minEnd = startLength - start;
          for (end = 1; end <= minEnd; end++) {
            if (startValue[startLength - end] !== endValue[endLength - end]) {
              break;
            }
          }
          var sliceTail = end > 1 ? 1 - end : void 0;
          this._fallbackText = endValue.slice(start, sliceTail);
          return this._fallbackText;
        }
      });
      PooledClass.addPoolingTo(FallbackCompositionState);
      module.exports = FallbackCompositionState;
    }
  });

  // node_modules/react/lib/SyntheticEvent.js
  var require_SyntheticEvent = __commonJS({
    "node_modules/react/lib/SyntheticEvent.js"(exports, module) {
      "use strict";
      var PooledClass = require_PooledClass();
      var assign = require_Object_assign();
      var emptyFunction = require_emptyFunction();
      var warning = require_warning();
      var EventInterface = {
        type: null,
        target: null,
        // currentTarget is set when dispatching; no use in copying it here
        currentTarget: emptyFunction.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(event) {
          return event.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null
      };
      function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        this.dispatchConfig = dispatchConfig;
        this.dispatchMarker = dispatchMarker;
        this.nativeEvent = nativeEvent;
        var Interface = this.constructor.Interface;
        for (var propName in Interface) {
          if (!Interface.hasOwnProperty(propName)) {
            continue;
          }
          var normalize = Interface[propName];
          if (normalize) {
            this[propName] = normalize(nativeEvent);
          } else {
            if (propName === "target") {
              this.target = nativeEventTarget;
            } else {
              this[propName] = nativeEvent[propName];
            }
          }
        }
        var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
        if (defaultPrevented) {
          this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
        } else {
          this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
        }
        this.isPropagationStopped = emptyFunction.thatReturnsFalse;
      }
      assign(SyntheticEvent.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var event = this.nativeEvent;
          if (false) {
            false ? warning(event, "This synthetic event is reused for performance reasons. If you're seeing this, you're calling `preventDefault` on a released/nullified synthetic event. This is a no-op. See https://fb.me/react-event-pooling for more information.") : void 0;
          }
          if (!event) {
            return;
          }
          if (event.preventDefault) {
            event.preventDefault();
          } else {
            event.returnValue = false;
          }
          this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
        },
        stopPropagation: function() {
          var event = this.nativeEvent;
          if (false) {
            false ? warning(event, "This synthetic event is reused for performance reasons. If you're seeing this, you're calling `stopPropagation` on a released/nullified synthetic event. This is a no-op. See https://fb.me/react-event-pooling for more information.") : void 0;
          }
          if (!event) {
            return;
          }
          if (event.stopPropagation) {
            event.stopPropagation();
          } else {
            event.cancelBubble = true;
          }
          this.isPropagationStopped = emptyFunction.thatReturnsTrue;
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
          this.isPersistent = emptyFunction.thatReturnsTrue;
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: emptyFunction.thatReturnsFalse,
        /**
         * `PooledClass` looks for `destructor` on each instance it releases.
         */
        destructor: function() {
          var Interface = this.constructor.Interface;
          for (var propName in Interface) {
            this[propName] = null;
          }
          this.dispatchConfig = null;
          this.dispatchMarker = null;
          this.nativeEvent = null;
        }
      });
      SyntheticEvent.Interface = EventInterface;
      SyntheticEvent.augmentClass = function(Class, Interface) {
        var Super = this;
        var prototype = Object.create(Super.prototype);
        assign(prototype, Class.prototype);
        Class.prototype = prototype;
        Class.prototype.constructor = Class;
        Class.Interface = assign({}, Super.Interface, Interface);
        Class.augmentClass = Super.augmentClass;
        PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
      };
      PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);
      module.exports = SyntheticEvent;
    }
  });

  // node_modules/react/lib/SyntheticCompositionEvent.js
  var require_SyntheticCompositionEvent = __commonJS({
    "node_modules/react/lib/SyntheticCompositionEvent.js"(exports, module) {
      "use strict";
      var SyntheticEvent = require_SyntheticEvent();
      var CompositionEventInterface = {
        data: null
      };
      function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
      module.exports = SyntheticCompositionEvent;
    }
  });

  // node_modules/react/lib/SyntheticInputEvent.js
  var require_SyntheticInputEvent = __commonJS({
    "node_modules/react/lib/SyntheticInputEvent.js"(exports, module) {
      "use strict";
      var SyntheticEvent = require_SyntheticEvent();
      var InputEventInterface = {
        data: null
      };
      function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
      module.exports = SyntheticInputEvent;
    }
  });

  // node_modules/fbjs/lib/keyOf.js
  var require_keyOf = __commonJS({
    "node_modules/fbjs/lib/keyOf.js"(exports, module) {
      "use strict";
      var keyOf = function(oneKeyObj) {
        var key;
        for (key in oneKeyObj) {
          if (!oneKeyObj.hasOwnProperty(key)) {
            continue;
          }
          return key;
        }
        return null;
      };
      module.exports = keyOf;
    }
  });

  // node_modules/react/lib/BeforeInputEventPlugin.js
  var require_BeforeInputEventPlugin = __commonJS({
    "node_modules/react/lib/BeforeInputEventPlugin.js"(exports, module) {
      "use strict";
      var EventConstants = require_EventConstants();
      var EventPropagators = require_EventPropagators();
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var FallbackCompositionState = require_FallbackCompositionState();
      var SyntheticCompositionEvent = require_SyntheticCompositionEvent();
      var SyntheticInputEvent = require_SyntheticInputEvent();
      var keyOf = require_keyOf();
      var END_KEYCODES = [9, 13, 27, 32];
      var START_KEYCODE = 229;
      var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && "CompositionEvent" in window;
      var documentMode = null;
      if (ExecutionEnvironment.canUseDOM && "documentMode" in document) {
        documentMode = document.documentMode;
      }
      var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && "TextEvent" in window && !documentMode && !isPresto();
      var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
      function isPresto() {
        var opera = window.opera;
        return typeof opera === "object" && typeof opera.version === "function" && parseInt(opera.version(), 10) <= 12;
      }
      var SPACEBAR_CODE = 32;
      var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
      var topLevelTypes = EventConstants.topLevelTypes;
      var eventTypes = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onBeforeInput: null }),
            captured: keyOf({ onBeforeInputCapture: null })
          },
          dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onCompositionEnd: null }),
            captured: keyOf({ onCompositionEndCapture: null })
          },
          dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onCompositionStart: null }),
            captured: keyOf({ onCompositionStartCapture: null })
          },
          dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onCompositionUpdate: null }),
            captured: keyOf({ onCompositionUpdateCapture: null })
          },
          dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
        }
      };
      var hasSpaceKeypress = false;
      function isKeypressCommand(nativeEvent) {
        return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
        !(nativeEvent.ctrlKey && nativeEvent.altKey);
      }
      function getCompositionEventType(topLevelType) {
        switch (topLevelType) {
          case topLevelTypes.topCompositionStart:
            return eventTypes.compositionStart;
          case topLevelTypes.topCompositionEnd:
            return eventTypes.compositionEnd;
          case topLevelTypes.topCompositionUpdate:
            return eventTypes.compositionUpdate;
        }
      }
      function isFallbackCompositionStart(topLevelType, nativeEvent) {
        return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
      }
      function isFallbackCompositionEnd(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case topLevelTypes.topKeyUp:
            return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
          case topLevelTypes.topKeyDown:
            return nativeEvent.keyCode !== START_KEYCODE;
          case topLevelTypes.topKeyPress:
          case topLevelTypes.topMouseDown:
          case topLevelTypes.topBlur:
            return true;
          default:
            return false;
        }
      }
      function getDataFromCustomEvent(nativeEvent) {
        var detail = nativeEvent.detail;
        if (typeof detail === "object" && "data" in detail) {
          return detail.data;
        }
        return null;
      }
      var currentComposition = null;
      function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
        var eventType;
        var fallbackData;
        if (canUseCompositionEvent) {
          eventType = getCompositionEventType(topLevelType);
        } else if (!currentComposition) {
          if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
            eventType = eventTypes.compositionStart;
          }
        } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
          eventType = eventTypes.compositionEnd;
        }
        if (!eventType) {
          return null;
        }
        if (useFallbackCompositionData) {
          if (!currentComposition && eventType === eventTypes.compositionStart) {
            currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
          } else if (eventType === eventTypes.compositionEnd) {
            if (currentComposition) {
              fallbackData = currentComposition.getData();
            }
          }
        }
        var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent, nativeEventTarget);
        if (fallbackData) {
          event.data = fallbackData;
        } else {
          var customData = getDataFromCustomEvent(nativeEvent);
          if (customData !== null) {
            event.data = customData;
          }
        }
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }
      function getNativeBeforeInputChars(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case topLevelTypes.topCompositionEnd:
            return getDataFromCustomEvent(nativeEvent);
          case topLevelTypes.topKeyPress:
            var which = nativeEvent.which;
            if (which !== SPACEBAR_CODE) {
              return null;
            }
            hasSpaceKeypress = true;
            return SPACEBAR_CHAR;
          case topLevelTypes.topTextInput:
            var chars = nativeEvent.data;
            if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
              return null;
            }
            return chars;
          default:
            return null;
        }
      }
      function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
        if (currentComposition) {
          if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
            var chars = currentComposition.getData();
            FallbackCompositionState.release(currentComposition);
            currentComposition = null;
            return chars;
          }
          return null;
        }
        switch (topLevelType) {
          case topLevelTypes.topPaste:
            return null;
          case topLevelTypes.topKeyPress:
            if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
              return String.fromCharCode(nativeEvent.which);
            }
            return null;
          case topLevelTypes.topCompositionEnd:
            return useFallbackCompositionData ? null : nativeEvent.data;
          default:
            return null;
        }
      }
      function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
        var chars;
        if (canUseTextInputEvent) {
          chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
        } else {
          chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
        }
        if (!chars) {
          return null;
        }
        var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent, nativeEventTarget);
        event.data = chars;
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }
      var BeforeInputEventPlugin = {
        eventTypes,
        /**
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {DOMEventTarget} topLevelTarget The listening component root node.
         * @param {string} topLevelTargetID ID of `topLevelTarget`.
         * @param {object} nativeEvent Native browser event.
         * @return {*} An accumulation of synthetic events.
         * @see {EventPluginHub.extractEvents}
         */
        extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
          return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget)];
        }
      };
      module.exports = BeforeInputEventPlugin;
    }
  });

  // node_modules/react/lib/getEventTarget.js
  var require_getEventTarget = __commonJS({
    "node_modules/react/lib/getEventTarget.js"(exports, module) {
      "use strict";
      function getEventTarget(nativeEvent) {
        var target = nativeEvent.target || nativeEvent.srcElement || window;
        return target.nodeType === 3 ? target.parentNode : target;
      }
      module.exports = getEventTarget;
    }
  });

  // node_modules/react/lib/isTextInputElement.js
  var require_isTextInputElement = __commonJS({
    "node_modules/react/lib/isTextInputElement.js"(exports, module) {
      "use strict";
      var supportedInputTypes = {
        "color": true,
        "date": true,
        "datetime": true,
        "datetime-local": true,
        "email": true,
        "month": true,
        "number": true,
        "password": true,
        "range": true,
        "search": true,
        "tel": true,
        "text": true,
        "time": true,
        "url": true,
        "week": true
      };
      function isTextInputElement(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName && (nodeName === "input" && supportedInputTypes[elem.type] || nodeName === "textarea");
      }
      module.exports = isTextInputElement;
    }
  });

  // node_modules/react/lib/ChangeEventPlugin.js
  var require_ChangeEventPlugin = __commonJS({
    "node_modules/react/lib/ChangeEventPlugin.js"(exports, module) {
      "use strict";
      var EventConstants = require_EventConstants();
      var EventPluginHub = require_EventPluginHub();
      var EventPropagators = require_EventPropagators();
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var ReactUpdates = require_ReactUpdates();
      var SyntheticEvent = require_SyntheticEvent();
      var getEventTarget = require_getEventTarget();
      var isEventSupported = require_isEventSupported();
      var isTextInputElement = require_isTextInputElement();
      var keyOf = require_keyOf();
      var topLevelTypes = EventConstants.topLevelTypes;
      var eventTypes = {
        change: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onChange: null }),
            captured: keyOf({ onChangeCapture: null })
          },
          dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
        }
      };
      var activeElement = null;
      var activeElementID = null;
      var activeElementValue = null;
      var activeElementValueProp = null;
      function shouldUseChangeEvent(elem) {
        var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName === "select" || nodeName === "input" && elem.type === "file";
      }
      var doesChangeEventBubble = false;
      if (ExecutionEnvironment.canUseDOM) {
        doesChangeEventBubble = isEventSupported("change") && (!("documentMode" in document) || document.documentMode > 8);
      }
      function manualDispatchChangeEvent(nativeEvent) {
        var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent, getEventTarget(nativeEvent));
        EventPropagators.accumulateTwoPhaseDispatches(event);
        ReactUpdates.batchedUpdates(runEventInBatch, event);
      }
      function runEventInBatch(event) {
        EventPluginHub.enqueueEvents(event);
        EventPluginHub.processEventQueue(false);
      }
      function startWatchingForChangeEventIE8(target, targetID) {
        activeElement = target;
        activeElementID = targetID;
        activeElement.attachEvent("onchange", manualDispatchChangeEvent);
      }
      function stopWatchingForChangeEventIE8() {
        if (!activeElement) {
          return;
        }
        activeElement.detachEvent("onchange", manualDispatchChangeEvent);
        activeElement = null;
        activeElementID = null;
      }
      function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
        if (topLevelType === topLevelTypes.topChange) {
          return topLevelTargetID;
        }
      }
      function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
        if (topLevelType === topLevelTypes.topFocus) {
          stopWatchingForChangeEventIE8();
          startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
        } else if (topLevelType === topLevelTypes.topBlur) {
          stopWatchingForChangeEventIE8();
        }
      }
      var isInputEventSupported = false;
      if (ExecutionEnvironment.canUseDOM) {
        isInputEventSupported = isEventSupported("input") && (!("documentMode" in document) || document.documentMode > 9);
      }
      var newValueProp = {
        get: function() {
          return activeElementValueProp.get.call(this);
        },
        set: function(val) {
          activeElementValue = "" + val;
          activeElementValueProp.set.call(this, val);
        }
      };
      function startWatchingForValueChange(target, targetID) {
        activeElement = target;
        activeElementID = targetID;
        activeElementValue = target.value;
        activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, "value");
        Object.defineProperty(activeElement, "value", newValueProp);
        activeElement.attachEvent("onpropertychange", handlePropertyChange);
      }
      function stopWatchingForValueChange() {
        if (!activeElement) {
          return;
        }
        delete activeElement.value;
        activeElement.detachEvent("onpropertychange", handlePropertyChange);
        activeElement = null;
        activeElementID = null;
        activeElementValue = null;
        activeElementValueProp = null;
      }
      function handlePropertyChange(nativeEvent) {
        if (nativeEvent.propertyName !== "value") {
          return;
        }
        var value = nativeEvent.srcElement.value;
        if (value === activeElementValue) {
          return;
        }
        activeElementValue = value;
        manualDispatchChangeEvent(nativeEvent);
      }
      function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
        if (topLevelType === topLevelTypes.topInput) {
          return topLevelTargetID;
        }
      }
      function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
        if (topLevelType === topLevelTypes.topFocus) {
          stopWatchingForValueChange();
          startWatchingForValueChange(topLevelTarget, topLevelTargetID);
        } else if (topLevelType === topLevelTypes.topBlur) {
          stopWatchingForValueChange();
        }
      }
      function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
        if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
          if (activeElement && activeElement.value !== activeElementValue) {
            activeElementValue = activeElement.value;
            return activeElementID;
          }
        }
      }
      function shouldUseClickEvent(elem) {
        return elem.nodeName && elem.nodeName.toLowerCase() === "input" && (elem.type === "checkbox" || elem.type === "radio");
      }
      function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
        if (topLevelType === topLevelTypes.topClick) {
          return topLevelTargetID;
        }
      }
      var ChangeEventPlugin = {
        eventTypes,
        /**
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {DOMEventTarget} topLevelTarget The listening component root node.
         * @param {string} topLevelTargetID ID of `topLevelTarget`.
         * @param {object} nativeEvent Native browser event.
         * @return {*} An accumulation of synthetic events.
         * @see {EventPluginHub.extractEvents}
         */
        extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
          var getTargetIDFunc, handleEventFunc;
          if (shouldUseChangeEvent(topLevelTarget)) {
            if (doesChangeEventBubble) {
              getTargetIDFunc = getTargetIDForChangeEvent;
            } else {
              handleEventFunc = handleEventsForChangeEventIE8;
            }
          } else if (isTextInputElement(topLevelTarget)) {
            if (isInputEventSupported) {
              getTargetIDFunc = getTargetIDForInputEvent;
            } else {
              getTargetIDFunc = getTargetIDForInputEventIE;
              handleEventFunc = handleEventsForInputEventIE;
            }
          } else if (shouldUseClickEvent(topLevelTarget)) {
            getTargetIDFunc = getTargetIDForClickEvent;
          }
          if (getTargetIDFunc) {
            var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
            if (targetID) {
              var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent, nativeEventTarget);
              event.type = "change";
              EventPropagators.accumulateTwoPhaseDispatches(event);
              return event;
            }
          }
          if (handleEventFunc) {
            handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
          }
        }
      };
      module.exports = ChangeEventPlugin;
    }
  });

  // node_modules/react/lib/ClientReactRootIndex.js
  var require_ClientReactRootIndex = __commonJS({
    "node_modules/react/lib/ClientReactRootIndex.js"(exports, module) {
      "use strict";
      var nextReactRootIndex = 0;
      var ClientReactRootIndex = {
        createReactRootIndex: function() {
          return nextReactRootIndex++;
        }
      };
      module.exports = ClientReactRootIndex;
    }
  });

  // node_modules/react/lib/DefaultEventPluginOrder.js
  var require_DefaultEventPluginOrder = __commonJS({
    "node_modules/react/lib/DefaultEventPluginOrder.js"(exports, module) {
      "use strict";
      var keyOf = require_keyOf();
      var DefaultEventPluginOrder = [keyOf({ ResponderEventPlugin: null }), keyOf({ SimpleEventPlugin: null }), keyOf({ TapEventPlugin: null }), keyOf({ EnterLeaveEventPlugin: null }), keyOf({ ChangeEventPlugin: null }), keyOf({ SelectEventPlugin: null }), keyOf({ BeforeInputEventPlugin: null })];
      module.exports = DefaultEventPluginOrder;
    }
  });

  // node_modules/react/lib/SyntheticUIEvent.js
  var require_SyntheticUIEvent = __commonJS({
    "node_modules/react/lib/SyntheticUIEvent.js"(exports, module) {
      "use strict";
      var SyntheticEvent = require_SyntheticEvent();
      var getEventTarget = require_getEventTarget();
      var UIEventInterface = {
        view: function(event) {
          if (event.view) {
            return event.view;
          }
          var target = getEventTarget(event);
          if (target != null && target.window === target) {
            return target;
          }
          var doc = target.ownerDocument;
          if (doc) {
            return doc.defaultView || doc.parentWindow;
          } else {
            return window;
          }
        },
        detail: function(event) {
          return event.detail || 0;
        }
      };
      function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
      module.exports = SyntheticUIEvent;
    }
  });

  // node_modules/react/lib/getEventModifierState.js
  var require_getEventModifierState = __commonJS({
    "node_modules/react/lib/getEventModifierState.js"(exports, module) {
      "use strict";
      var modifierKeyToProp = {
        "Alt": "altKey",
        "Control": "ctrlKey",
        "Meta": "metaKey",
        "Shift": "shiftKey"
      };
      function modifierStateGetter(keyArg) {
        var syntheticEvent = this;
        var nativeEvent = syntheticEvent.nativeEvent;
        if (nativeEvent.getModifierState) {
          return nativeEvent.getModifierState(keyArg);
        }
        var keyProp = modifierKeyToProp[keyArg];
        return keyProp ? !!nativeEvent[keyProp] : false;
      }
      function getEventModifierState(nativeEvent) {
        return modifierStateGetter;
      }
      module.exports = getEventModifierState;
    }
  });

  // node_modules/react/lib/SyntheticMouseEvent.js
  var require_SyntheticMouseEvent = __commonJS({
    "node_modules/react/lib/SyntheticMouseEvent.js"(exports, module) {
      "use strict";
      var SyntheticUIEvent = require_SyntheticUIEvent();
      var ViewportMetrics = require_ViewportMetrics();
      var getEventModifierState = require_getEventModifierState();
      var MouseEventInterface = {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: getEventModifierState,
        button: function(event) {
          var button = event.button;
          if ("which" in event) {
            return button;
          }
          return button === 2 ? 2 : button === 4 ? 1 : 0;
        },
        buttons: null,
        relatedTarget: function(event) {
          return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
        },
        // "Proprietary" Interface.
        pageX: function(event) {
          return "pageX" in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
        },
        pageY: function(event) {
          return "pageY" in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
        }
      };
      function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
      module.exports = SyntheticMouseEvent;
    }
  });

  // node_modules/react/lib/EnterLeaveEventPlugin.js
  var require_EnterLeaveEventPlugin = __commonJS({
    "node_modules/react/lib/EnterLeaveEventPlugin.js"(exports, module) {
      "use strict";
      var EventConstants = require_EventConstants();
      var EventPropagators = require_EventPropagators();
      var SyntheticMouseEvent = require_SyntheticMouseEvent();
      var ReactMount = require_ReactMount();
      var keyOf = require_keyOf();
      var topLevelTypes = EventConstants.topLevelTypes;
      var getFirstReactDOM = ReactMount.getFirstReactDOM;
      var eventTypes = {
        mouseEnter: {
          registrationName: keyOf({ onMouseEnter: null }),
          dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
        },
        mouseLeave: {
          registrationName: keyOf({ onMouseLeave: null }),
          dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
        }
      };
      var extractedEvents = [null, null];
      var EnterLeaveEventPlugin = {
        eventTypes,
        /**
         * For almost every interaction we care about, there will be both a top-level
         * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
         * we do not extract duplicate events. However, moving the mouse into the
         * browser from outside will not fire a `mouseout` event. In this case, we use
         * the `mouseover` top-level event.
         *
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {DOMEventTarget} topLevelTarget The listening component root node.
         * @param {string} topLevelTargetID ID of `topLevelTarget`.
         * @param {object} nativeEvent Native browser event.
         * @return {*} An accumulation of synthetic events.
         * @see {EventPluginHub.extractEvents}
         */
        extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
          if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
            return null;
          }
          if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
            return null;
          }
          var win;
          if (topLevelTarget.window === topLevelTarget) {
            win = topLevelTarget;
          } else {
            var doc = topLevelTarget.ownerDocument;
            if (doc) {
              win = doc.defaultView || doc.parentWindow;
            } else {
              win = window;
            }
          }
          var from;
          var to;
          var fromID = "";
          var toID = "";
          if (topLevelType === topLevelTypes.topMouseOut) {
            from = topLevelTarget;
            fromID = topLevelTargetID;
            to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement);
            if (to) {
              toID = ReactMount.getID(to);
            } else {
              to = win;
            }
            to = to || win;
          } else {
            from = win;
            to = topLevelTarget;
            toID = topLevelTargetID;
          }
          if (from === to) {
            return null;
          }
          var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent, nativeEventTarget);
          leave.type = "mouseleave";
          leave.target = from;
          leave.relatedTarget = to;
          var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent, nativeEventTarget);
          enter.type = "mouseenter";
          enter.target = to;
          enter.relatedTarget = from;
          EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);
          extractedEvents[0] = leave;
          extractedEvents[1] = enter;
          return extractedEvents;
        }
      };
      module.exports = EnterLeaveEventPlugin;
    }
  });

  // node_modules/react/lib/HTMLDOMPropertyConfig.js
  var require_HTMLDOMPropertyConfig = __commonJS({
    "node_modules/react/lib/HTMLDOMPropertyConfig.js"(exports, module) {
      "use strict";
      var DOMProperty = require_DOMProperty();
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
      var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
      var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
      var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
      var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
      var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
      var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
      var hasSVG;
      if (ExecutionEnvironment.canUseDOM) {
        implementation = document.implementation;
        hasSVG = implementation && implementation.hasFeature && implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
      }
      var implementation;
      var HTMLDOMPropertyConfig = {
        isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
        Properties: {
          /**
           * Standard Properties
           */
          accept: null,
          acceptCharset: null,
          accessKey: null,
          action: null,
          allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
          allowTransparency: MUST_USE_ATTRIBUTE,
          alt: null,
          async: HAS_BOOLEAN_VALUE,
          autoComplete: null,
          // autoFocus is polyfilled/normalized by AutoFocusUtils
          // autoFocus: HAS_BOOLEAN_VALUE,
          autoPlay: HAS_BOOLEAN_VALUE,
          capture: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
          cellPadding: null,
          cellSpacing: null,
          charSet: MUST_USE_ATTRIBUTE,
          challenge: MUST_USE_ATTRIBUTE,
          checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
          classID: MUST_USE_ATTRIBUTE,
          // To set className on SVG elements, it's necessary to use .setAttribute;
          // this works on HTML elements too in all browsers except IE8. Conveniently,
          // IE8 doesn't support SVG and so we can simply use the attribute in
          // browsers that support SVG and the property in browsers that don't,
          // regardless of whether the element is HTML or SVG.
          className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
          cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
          colSpan: null,
          content: null,
          contentEditable: null,
          contextMenu: MUST_USE_ATTRIBUTE,
          controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
          coords: null,
          crossOrigin: null,
          data: null,
          // For `<object />` acts as `src`.
          dateTime: MUST_USE_ATTRIBUTE,
          "default": HAS_BOOLEAN_VALUE,
          defer: HAS_BOOLEAN_VALUE,
          dir: null,
          disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
          download: HAS_OVERLOADED_BOOLEAN_VALUE,
          draggable: null,
          encType: null,
          form: MUST_USE_ATTRIBUTE,
          formAction: MUST_USE_ATTRIBUTE,
          formEncType: MUST_USE_ATTRIBUTE,
          formMethod: MUST_USE_ATTRIBUTE,
          formNoValidate: HAS_BOOLEAN_VALUE,
          formTarget: MUST_USE_ATTRIBUTE,
          frameBorder: MUST_USE_ATTRIBUTE,
          headers: null,
          height: MUST_USE_ATTRIBUTE,
          hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
          high: null,
          href: null,
          hrefLang: null,
          htmlFor: null,
          httpEquiv: null,
          icon: null,
          id: MUST_USE_PROPERTY,
          inputMode: MUST_USE_ATTRIBUTE,
          integrity: null,
          is: MUST_USE_ATTRIBUTE,
          keyParams: MUST_USE_ATTRIBUTE,
          keyType: MUST_USE_ATTRIBUTE,
          kind: null,
          label: null,
          lang: null,
          list: MUST_USE_ATTRIBUTE,
          loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
          low: null,
          manifest: MUST_USE_ATTRIBUTE,
          marginHeight: null,
          marginWidth: null,
          max: null,
          maxLength: MUST_USE_ATTRIBUTE,
          media: MUST_USE_ATTRIBUTE,
          mediaGroup: null,
          method: null,
          min: null,
          minLength: MUST_USE_ATTRIBUTE,
          multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
          muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
          name: null,
          nonce: MUST_USE_ATTRIBUTE,
          noValidate: HAS_BOOLEAN_VALUE,
          open: HAS_BOOLEAN_VALUE,
          optimum: null,
          pattern: null,
          placeholder: null,
          poster: null,
          preload: null,
          radioGroup: null,
          readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
          rel: null,
          required: HAS_BOOLEAN_VALUE,
          reversed: HAS_BOOLEAN_VALUE,
          role: MUST_USE_ATTRIBUTE,
          rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
          rowSpan: null,
          sandbox: null,
          scope: null,
          scoped: HAS_BOOLEAN_VALUE,
          scrolling: null,
          seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
          selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
          shape: null,
          size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
          sizes: MUST_USE_ATTRIBUTE,
          span: HAS_POSITIVE_NUMERIC_VALUE,
          spellCheck: null,
          src: null,
          srcDoc: MUST_USE_PROPERTY,
          srcLang: null,
          srcSet: MUST_USE_ATTRIBUTE,
          start: HAS_NUMERIC_VALUE,
          step: null,
          style: null,
          summary: null,
          tabIndex: null,
          target: null,
          title: null,
          type: null,
          useMap: null,
          value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
          width: MUST_USE_ATTRIBUTE,
          wmode: MUST_USE_ATTRIBUTE,
          wrap: null,
          /**
           * RDFa Properties
           */
          about: MUST_USE_ATTRIBUTE,
          datatype: MUST_USE_ATTRIBUTE,
          inlist: MUST_USE_ATTRIBUTE,
          prefix: MUST_USE_ATTRIBUTE,
          // property is also supported for OpenGraph in meta tags.
          property: MUST_USE_ATTRIBUTE,
          resource: MUST_USE_ATTRIBUTE,
          "typeof": MUST_USE_ATTRIBUTE,
          vocab: MUST_USE_ATTRIBUTE,
          /**
           * Non-standard Properties
           */
          // autoCapitalize and autoCorrect are supported in Mobile Safari for
          // keyboard hints.
          autoCapitalize: MUST_USE_ATTRIBUTE,
          autoCorrect: MUST_USE_ATTRIBUTE,
          // autoSave allows WebKit/Blink to persist values of input fields on page reloads
          autoSave: null,
          // color is for Safari mask-icon link
          color: null,
          // itemProp, itemScope, itemType are for
          // Microdata support. See http://schema.org/docs/gs.html
          itemProp: MUST_USE_ATTRIBUTE,
          itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
          itemType: MUST_USE_ATTRIBUTE,
          // itemID and itemRef are for Microdata support as well but
          // only specified in the the WHATWG spec document. See
          // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
          itemID: MUST_USE_ATTRIBUTE,
          itemRef: MUST_USE_ATTRIBUTE,
          // results show looking glass icon and recent searches on input
          // search fields in WebKit/Blink
          results: null,
          // IE-only attribute that specifies security restrictions on an iframe
          // as an alternative to the sandbox attribute on IE<10
          security: MUST_USE_ATTRIBUTE,
          // IE-only attribute that controls focus behavior
          unselectable: MUST_USE_ATTRIBUTE
        },
        DOMAttributeNames: {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv"
        },
        DOMPropertyNames: {
          autoComplete: "autocomplete",
          autoFocus: "autofocus",
          autoPlay: "autoplay",
          autoSave: "autosave",
          // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
          // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
          encType: "encoding",
          hrefLang: "hreflang",
          radioGroup: "radiogroup",
          spellCheck: "spellcheck",
          srcDoc: "srcdoc",
          srcSet: "srcset"
        }
      };
      module.exports = HTMLDOMPropertyConfig;
    }
  });

  // node_modules/react/lib/findDOMNode.js
  var require_findDOMNode = __commonJS({
    "node_modules/react/lib/findDOMNode.js"(exports, module) {
      "use strict";
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var ReactInstanceMap = require_ReactInstanceMap();
      var ReactMount = require_ReactMount();
      var invariant = require_invariant();
      var warning = require_warning();
      function findDOMNode(componentOrElement) {
        if (false) {
          var owner = ReactCurrentOwner.current;
          if (owner !== null) {
            false ? warning(owner._warnedAboutRefsInRender, "%s is accessing getDOMNode or findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", owner.getName() || "A component") : void 0;
            owner._warnedAboutRefsInRender = true;
          }
        }
        if (componentOrElement == null) {
          return null;
        }
        if (componentOrElement.nodeType === 1) {
          return componentOrElement;
        }
        if (ReactInstanceMap.has(componentOrElement)) {
          return ReactMount.getNodeFromInstance(componentOrElement);
        }
        !(componentOrElement.render == null || typeof componentOrElement.render !== "function") ? false ? invariant(false, "findDOMNode was called on an unmounted component.") : invariant(false) : void 0;
        true ? false ? invariant(false, "Element appears to be neither ReactComponent nor DOMNode (keys: %s)", Object.keys(componentOrElement)) : invariant(false) : void 0;
      }
      module.exports = findDOMNode;
    }
  });

  // node_modules/react/lib/ReactBrowserComponentMixin.js
  var require_ReactBrowserComponentMixin = __commonJS({
    "node_modules/react/lib/ReactBrowserComponentMixin.js"(exports, module) {
      "use strict";
      var ReactInstanceMap = require_ReactInstanceMap();
      var findDOMNode = require_findDOMNode();
      var warning = require_warning();
      var didWarnKey = "_getDOMNodeDidWarn";
      var ReactBrowserComponentMixin = {
        /**
         * Returns the DOM node rendered by this component.
         *
         * @return {DOMElement} The root node of this component.
         * @final
         * @protected
         */
        getDOMNode: function() {
          false ? warning(this.constructor[didWarnKey], "%s.getDOMNode(...) is deprecated. Please use ReactDOM.findDOMNode(instance) instead.", ReactInstanceMap.get(this).getName() || this.tagName || "Unknown") : void 0;
          this.constructor[didWarnKey] = true;
          return findDOMNode(this);
        }
      };
      module.exports = ReactBrowserComponentMixin;
    }
  });

  // node_modules/react/lib/ReactDefaultBatchingStrategy.js
  var require_ReactDefaultBatchingStrategy = __commonJS({
    "node_modules/react/lib/ReactDefaultBatchingStrategy.js"(exports, module) {
      "use strict";
      var ReactUpdates = require_ReactUpdates();
      var Transaction = require_Transaction();
      var assign = require_Object_assign();
      var emptyFunction = require_emptyFunction();
      var RESET_BATCHED_UPDATES = {
        initialize: emptyFunction,
        close: function() {
          ReactDefaultBatchingStrategy.isBatchingUpdates = false;
        }
      };
      var FLUSH_BATCHED_UPDATES = {
        initialize: emptyFunction,
        close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
      };
      var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
      function ReactDefaultBatchingStrategyTransaction() {
        this.reinitializeTransaction();
      }
      assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
        getTransactionWrappers: function() {
          return TRANSACTION_WRAPPERS;
        }
      });
      var transaction = new ReactDefaultBatchingStrategyTransaction();
      var ReactDefaultBatchingStrategy = {
        isBatchingUpdates: false,
        /**
         * Call the provided function in a context within which calls to `setState`
         * and friends are batched such that components aren't updated unnecessarily.
         */
        batchedUpdates: function(callback, a, b, c, d, e) {
          var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
          ReactDefaultBatchingStrategy.isBatchingUpdates = true;
          if (alreadyBatchingUpdates) {
            callback(a, b, c, d, e);
          } else {
            transaction.perform(callback, null, a, b, c, d, e);
          }
        }
      };
      module.exports = ReactDefaultBatchingStrategy;
    }
  });

  // node_modules/fbjs/lib/focusNode.js
  var require_focusNode = __commonJS({
    "node_modules/fbjs/lib/focusNode.js"(exports, module) {
      "use strict";
      function focusNode(node) {
        try {
          node.focus();
        } catch (e) {
        }
      }
      module.exports = focusNode;
    }
  });

  // node_modules/react/lib/AutoFocusUtils.js
  var require_AutoFocusUtils = __commonJS({
    "node_modules/react/lib/AutoFocusUtils.js"(exports, module) {
      "use strict";
      var ReactMount = require_ReactMount();
      var findDOMNode = require_findDOMNode();
      var focusNode = require_focusNode();
      var Mixin = {
        componentDidMount: function() {
          if (this.props.autoFocus) {
            focusNode(findDOMNode(this));
          }
        }
      };
      var AutoFocusUtils = {
        Mixin,
        focusDOMComponent: function() {
          focusNode(ReactMount.getNode(this._rootNodeID));
        }
      };
      module.exports = AutoFocusUtils;
    }
  });

  // node_modules/react/lib/CSSProperty.js
  var require_CSSProperty = __commonJS({
    "node_modules/react/lib/CSSProperty.js"(exports, module) {
      "use strict";
      var isUnitlessNumber = {
        animationIterationCount: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        // SVG-related properties
        fillOpacity: true,
        stopOpacity: true,
        strokeDashoffset: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      function prefixKey(prefix, key) {
        return prefix + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix) {
          isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
        });
      });
      var shorthandPropertyExpansions = {
        background: {
          backgroundAttachment: true,
          backgroundColor: true,
          backgroundImage: true,
          backgroundPositionX: true,
          backgroundPositionY: true,
          backgroundRepeat: true
        },
        backgroundPosition: {
          backgroundPositionX: true,
          backgroundPositionY: true
        },
        border: {
          borderWidth: true,
          borderStyle: true,
          borderColor: true
        },
        borderBottom: {
          borderBottomWidth: true,
          borderBottomStyle: true,
          borderBottomColor: true
        },
        borderLeft: {
          borderLeftWidth: true,
          borderLeftStyle: true,
          borderLeftColor: true
        },
        borderRight: {
          borderRightWidth: true,
          borderRightStyle: true,
          borderRightColor: true
        },
        borderTop: {
          borderTopWidth: true,
          borderTopStyle: true,
          borderTopColor: true
        },
        font: {
          fontStyle: true,
          fontVariant: true,
          fontWeight: true,
          fontSize: true,
          lineHeight: true,
          fontFamily: true
        },
        outline: {
          outlineWidth: true,
          outlineStyle: true,
          outlineColor: true
        }
      };
      var CSSProperty = {
        isUnitlessNumber,
        shorthandPropertyExpansions
      };
      module.exports = CSSProperty;
    }
  });

  // node_modules/fbjs/lib/camelize.js
  var require_camelize = __commonJS({
    "node_modules/fbjs/lib/camelize.js"(exports, module) {
      "use strict";
      var _hyphenPattern = /-(.)/g;
      function camelize(string) {
        return string.replace(_hyphenPattern, function(_, character) {
          return character.toUpperCase();
        });
      }
      module.exports = camelize;
    }
  });

  // node_modules/fbjs/lib/camelizeStyleName.js
  var require_camelizeStyleName = __commonJS({
    "node_modules/fbjs/lib/camelizeStyleName.js"(exports, module) {
      "use strict";
      var camelize = require_camelize();
      var msPattern = /^-ms-/;
      function camelizeStyleName(string) {
        return camelize(string.replace(msPattern, "ms-"));
      }
      module.exports = camelizeStyleName;
    }
  });

  // node_modules/react/lib/dangerousStyleValue.js
  var require_dangerousStyleValue = __commonJS({
    "node_modules/react/lib/dangerousStyleValue.js"(exports, module) {
      "use strict";
      var CSSProperty = require_CSSProperty();
      var isUnitlessNumber = CSSProperty.isUnitlessNumber;
      function dangerousStyleValue(name, value) {
        var isEmpty = value == null || typeof value === "boolean" || value === "";
        if (isEmpty) {
          return "";
        }
        var isNonNumeric = isNaN(value);
        if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
          return "" + value;
        }
        if (typeof value === "string") {
          value = value.trim();
        }
        return value + "px";
      }
      module.exports = dangerousStyleValue;
    }
  });

  // node_modules/fbjs/lib/hyphenate.js
  var require_hyphenate = __commonJS({
    "node_modules/fbjs/lib/hyphenate.js"(exports, module) {
      "use strict";
      var _uppercasePattern = /([A-Z])/g;
      function hyphenate(string) {
        return string.replace(_uppercasePattern, "-$1").toLowerCase();
      }
      module.exports = hyphenate;
    }
  });

  // node_modules/fbjs/lib/hyphenateStyleName.js
  var require_hyphenateStyleName = __commonJS({
    "node_modules/fbjs/lib/hyphenateStyleName.js"(exports, module) {
      "use strict";
      var hyphenate = require_hyphenate();
      var msPattern = /^ms-/;
      function hyphenateStyleName(string) {
        return hyphenate(string).replace(msPattern, "-ms-");
      }
      module.exports = hyphenateStyleName;
    }
  });

  // node_modules/fbjs/lib/memoizeStringOnly.js
  var require_memoizeStringOnly = __commonJS({
    "node_modules/fbjs/lib/memoizeStringOnly.js"(exports, module) {
      "use strict";
      function memoizeStringOnly(callback) {
        var cache = {};
        return function(string) {
          if (!cache.hasOwnProperty(string)) {
            cache[string] = callback.call(this, string);
          }
          return cache[string];
        };
      }
      module.exports = memoizeStringOnly;
    }
  });

  // node_modules/react/lib/CSSPropertyOperations.js
  var require_CSSPropertyOperations = __commonJS({
    "node_modules/react/lib/CSSPropertyOperations.js"(exports, module) {
      "use strict";
      var CSSProperty = require_CSSProperty();
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var ReactPerf = require_ReactPerf();
      var camelizeStyleName = require_camelizeStyleName();
      var dangerousStyleValue = require_dangerousStyleValue();
      var hyphenateStyleName = require_hyphenateStyleName();
      var memoizeStringOnly = require_memoizeStringOnly();
      var warning = require_warning();
      var processStyleName = memoizeStringOnly(function(styleName) {
        return hyphenateStyleName(styleName);
      });
      var hasShorthandPropertyBug = false;
      var styleFloatAccessor = "cssFloat";
      if (ExecutionEnvironment.canUseDOM) {
        tempStyle = document.createElement("div").style;
        try {
          tempStyle.font = "";
        } catch (e) {
          hasShorthandPropertyBug = true;
        }
        if (document.documentElement.style.cssFloat === void 0) {
          styleFloatAccessor = "styleFloat";
        }
      }
      var tempStyle;
      if (false) {
        badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
        badStyleValueWithSemicolonPattern = /;\s*$/;
        warnedStyleNames = {};
        warnedStyleValues = {};
        warnHyphenatedStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          false ? warning(false, "Unsupported style property %s. Did you mean %s?", name, camelizeStyleName(name)) : void 0;
        };
        warnBadVendoredStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          false ? warning(false, "Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)) : void 0;
        };
        warnStyleValueWithSemicolon = function(name, value) {
          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
            return;
          }
          warnedStyleValues[value] = true;
          false ? warning(false, `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, "")) : void 0;
        };
        warnValidStyle = function(name, value) {
          if (name.indexOf("-") > -1) {
            warnHyphenatedStyleName(name);
          } else if (badVendoredStyleNamePattern.test(name)) {
            warnBadVendoredStyleName(name);
          } else if (badStyleValueWithSemicolonPattern.test(value)) {
            warnStyleValueWithSemicolon(name, value);
          }
        };
      }
      var badVendoredStyleNamePattern;
      var badStyleValueWithSemicolonPattern;
      var warnedStyleNames;
      var warnedStyleValues;
      var warnHyphenatedStyleName;
      var warnBadVendoredStyleName;
      var warnStyleValueWithSemicolon;
      var warnValidStyle;
      var CSSPropertyOperations = {
        /**
         * Serializes a mapping of style properties for use as inline styles:
         *
         *   > createMarkupForStyles({width: '200px', height: 0})
         *   "width:200px;height:0;"
         *
         * Undefined values are ignored so that declarative programming is easier.
         * The result should be HTML-escaped before insertion into the DOM.
         *
         * @param {object} styles
         * @return {?string}
         */
        createMarkupForStyles: function(styles) {
          var serialized = "";
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var styleValue = styles[styleName];
            if (false) {
              warnValidStyle(styleName, styleValue);
            }
            if (styleValue != null) {
              serialized += processStyleName(styleName) + ":";
              serialized += dangerousStyleValue(styleName, styleValue) + ";";
            }
          }
          return serialized || null;
        },
        /**
         * Sets the value for multiple styles on a node.  If a value is specified as
         * '' (empty string), the corresponding style property will be unset.
         *
         * @param {DOMElement} node
         * @param {object} styles
         */
        setValueForStyles: function(node, styles) {
          var style = node.style;
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            if (false) {
              warnValidStyle(styleName, styles[styleName]);
            }
            var styleValue = dangerousStyleValue(styleName, styles[styleName]);
            if (styleName === "float") {
              styleName = styleFloatAccessor;
            }
            if (styleValue) {
              style[styleName] = styleValue;
            } else {
              var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
              if (expansion) {
                for (var individualStyleName in expansion) {
                  style[individualStyleName] = "";
                }
              } else {
                style[styleName] = "";
              }
            }
          }
        }
      };
      ReactPerf.measureMethods(CSSPropertyOperations, "CSSPropertyOperations", {
        setValueForStyles: "setValueForStyles"
      });
      module.exports = CSSPropertyOperations;
    }
  });

  // node_modules/react/lib/ReactDOMButton.js
  var require_ReactDOMButton = __commonJS({
    "node_modules/react/lib/ReactDOMButton.js"(exports, module) {
      "use strict";
      var mouseListenerNames = {
        onClick: true,
        onDoubleClick: true,
        onMouseDown: true,
        onMouseMove: true,
        onMouseUp: true,
        onClickCapture: true,
        onDoubleClickCapture: true,
        onMouseDownCapture: true,
        onMouseMoveCapture: true,
        onMouseUpCapture: true
      };
      var ReactDOMButton = {
        getNativeProps: function(inst, props, context) {
          if (!props.disabled) {
            return props;
          }
          var nativeProps = {};
          for (var key in props) {
            if (props.hasOwnProperty(key) && !mouseListenerNames[key]) {
              nativeProps[key] = props[key];
            }
          }
          return nativeProps;
        }
      };
      module.exports = ReactDOMButton;
    }
  });

  // node_modules/react/lib/getIteratorFn.js
  var require_getIteratorFn = __commonJS({
    "node_modules/react/lib/getIteratorFn.js"(exports, module) {
      "use strict";
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      module.exports = getIteratorFn;
    }
  });

  // node_modules/react/lib/ReactPropTypes.js
  var require_ReactPropTypes = __commonJS({
    "node_modules/react/lib/ReactPropTypes.js"(exports, module) {
      "use strict";
      var ReactElement = require_ReactElement();
      var ReactPropTypeLocationNames = require_ReactPropTypeLocationNames();
      var emptyFunction = require_emptyFunction();
      var getIteratorFn = require_getIteratorFn();
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker
      };
      function createChainableTypeChecker(validate) {
        function checkType(isRequired, props, propName, componentName, location, propFullName) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (props[propName] == null) {
            var locationName = ReactPropTypeLocationNames[location];
            if (isRequired) {
              return new Error("Required " + locationName + " `" + propFullName + "` was not specified in " + ("`" + componentName + "`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var locationName = ReactPropTypeLocationNames[location];
            var preciseType = getPreciseType(propValue);
            return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunction.thatReturns(null));
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var locationName = ReactPropTypeLocationNames[location];
            var propType = getPropType(propValue);
            return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]");
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!ReactElement.isValidElement(props[propName])) {
            var locationName = ReactPropTypeLocationNames[location];
            return new Error("Invalid " + locationName + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var locationName = ReactPropTypeLocationNames[location];
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          return createChainableTypeChecker(function() {
            return new Error("Invalid argument supplied to oneOf, expected an instance of array.");
          });
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (propValue === expectedValues[i]) {
              return null;
            }
          }
          var locationName = ReactPropTypeLocationNames[location];
          var valuesString = JSON.stringify(expectedValues);
          return new Error("Invalid " + locationName + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            var locationName = ReactPropTypeLocationNames[location];
            return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (propValue.hasOwnProperty(key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          return createChainableTypeChecker(function() {
            return new Error("Invalid argument supplied to oneOfType, expected an instance of array.");
          });
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName) == null) {
              return null;
            }
          }
          var locationName = ReactPropTypeLocationNames[location];
          return new Error("Invalid " + locationName + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            var locationName = ReactPropTypeLocationNames[location];
            return new Error("Invalid " + locationName + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            var locationName = ReactPropTypeLocationNames[location];
            return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || ReactElement.isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return "<<anonymous>>";
        }
        return propValue.constructor.name;
      }
      module.exports = ReactPropTypes;
    }
  });

  // node_modules/react/lib/LinkedValueUtils.js
  var require_LinkedValueUtils = __commonJS({
    "node_modules/react/lib/LinkedValueUtils.js"(exports, module) {
      "use strict";
      var ReactPropTypes = require_ReactPropTypes();
      var ReactPropTypeLocations = require_ReactPropTypeLocations();
      var invariant = require_invariant();
      var warning = require_warning();
      var hasReadOnlyValue = {
        "button": true,
        "checkbox": true,
        "image": true,
        "hidden": true,
        "radio": true,
        "reset": true,
        "submit": true
      };
      function _assertSingleLink(inputProps) {
        !(inputProps.checkedLink == null || inputProps.valueLink == null) ? false ? invariant(false, "Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.") : invariant(false) : void 0;
      }
      function _assertValueLink(inputProps) {
        _assertSingleLink(inputProps);
        !(inputProps.value == null && inputProps.onChange == null) ? false ? invariant(false, "Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.") : invariant(false) : void 0;
      }
      function _assertCheckedLink(inputProps) {
        _assertSingleLink(inputProps);
        !(inputProps.checked == null && inputProps.onChange == null) ? false ? invariant(false, "Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink") : invariant(false) : void 0;
      }
      var propTypes = {
        value: function(props, propName, componentName) {
          if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
            return null;
          }
          return new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
        },
        checked: function(props, propName, componentName) {
          if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
            return null;
          }
          return new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
        },
        onChange: ReactPropTypes.func
      };
      var loggedTypeFailures = {};
      function getDeclarationErrorAddendum(owner) {
        if (owner) {
          var name = owner.getName();
          if (name) {
            return " Check the render method of `" + name + "`.";
          }
        }
        return "";
      }
      var LinkedValueUtils = {
        checkPropTypes: function(tagName, props, owner) {
          for (var propName in propTypes) {
            if (propTypes.hasOwnProperty(propName)) {
              var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var addendum = getDeclarationErrorAddendum(owner);
              false ? warning(false, "Failed form propType: %s%s", error.message, addendum) : void 0;
            }
          }
        },
        /**
         * @param {object} inputProps Props for form component
         * @return {*} current value of the input either from value prop or link.
         */
        getValue: function(inputProps) {
          if (inputProps.valueLink) {
            _assertValueLink(inputProps);
            return inputProps.valueLink.value;
          }
          return inputProps.value;
        },
        /**
         * @param {object} inputProps Props for form component
         * @return {*} current checked status of the input either from checked prop
         *             or link.
         */
        getChecked: function(inputProps) {
          if (inputProps.checkedLink) {
            _assertCheckedLink(inputProps);
            return inputProps.checkedLink.value;
          }
          return inputProps.checked;
        },
        /**
         * @param {object} inputProps Props for form component
         * @param {SyntheticEvent} event change event to handle
         */
        executeOnChange: function(inputProps, event) {
          if (inputProps.valueLink) {
            _assertValueLink(inputProps);
            return inputProps.valueLink.requestChange(event.target.value);
          } else if (inputProps.checkedLink) {
            _assertCheckedLink(inputProps);
            return inputProps.checkedLink.requestChange(event.target.checked);
          } else if (inputProps.onChange) {
            return inputProps.onChange.call(void 0, event);
          }
        }
      };
      module.exports = LinkedValueUtils;
    }
  });

  // node_modules/react/lib/ReactDOMInput.js
  var require_ReactDOMInput = __commonJS({
    "node_modules/react/lib/ReactDOMInput.js"(exports, module) {
      "use strict";
      var ReactDOMIDOperations = require_ReactDOMIDOperations();
      var LinkedValueUtils = require_LinkedValueUtils();
      var ReactMount = require_ReactMount();
      var ReactUpdates = require_ReactUpdates();
      var assign = require_Object_assign();
      var invariant = require_invariant();
      var instancesByReactID = {};
      function forceUpdateIfMounted() {
        if (this._rootNodeID) {
          ReactDOMInput.updateWrapper(this);
        }
      }
      var ReactDOMInput = {
        getNativeProps: function(inst, props, context) {
          var value = LinkedValueUtils.getValue(props);
          var checked = LinkedValueUtils.getChecked(props);
          var nativeProps = assign({}, props, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: value != null ? value : inst._wrapperState.initialValue,
            checked: checked != null ? checked : inst._wrapperState.initialChecked,
            onChange: inst._wrapperState.onChange
          });
          return nativeProps;
        },
        mountWrapper: function(inst, props) {
          if (false) {
            LinkedValueUtils.checkPropTypes("input", props, inst._currentElement._owner);
          }
          var defaultValue = props.defaultValue;
          inst._wrapperState = {
            initialChecked: props.defaultChecked || false,
            initialValue: defaultValue != null ? defaultValue : null,
            onChange: _handleChange.bind(inst)
          };
        },
        mountReadyWrapper: function(inst) {
          instancesByReactID[inst._rootNodeID] = inst;
        },
        unmountWrapper: function(inst) {
          delete instancesByReactID[inst._rootNodeID];
        },
        updateWrapper: function(inst) {
          var props = inst._currentElement.props;
          var checked = props.checked;
          if (checked != null) {
            ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, "checked", checked || false);
          }
          var value = LinkedValueUtils.getValue(props);
          if (value != null) {
            ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, "value", "" + value);
          }
        }
      };
      function _handleChange(event) {
        var props = this._currentElement.props;
        var returnValue = LinkedValueUtils.executeOnChange(props, event);
        ReactUpdates.asap(forceUpdateIfMounted, this);
        var name = props.name;
        if (props.type === "radio" && name != null) {
          var rootNode = ReactMount.getNode(this._rootNodeID);
          var queryRoot = rootNode;
          while (queryRoot.parentNode) {
            queryRoot = queryRoot.parentNode;
          }
          var group = queryRoot.querySelectorAll("input[name=" + JSON.stringify("" + name) + '][type="radio"]');
          for (var i = 0; i < group.length; i++) {
            var otherNode = group[i];
            if (otherNode === rootNode || otherNode.form !== rootNode.form) {
              continue;
            }
            var otherID = ReactMount.getID(otherNode);
            !otherID ? false ? invariant(false, "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.") : invariant(false) : void 0;
            var otherInstance = instancesByReactID[otherID];
            !otherInstance ? false ? invariant(false, "ReactDOMInput: Unknown radio button ID %s.", otherID) : invariant(false) : void 0;
            ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
          }
        }
        return returnValue;
      }
      module.exports = ReactDOMInput;
    }
  });

  // node_modules/react/lib/traverseAllChildren.js
  var require_traverseAllChildren = __commonJS({
    "node_modules/react/lib/traverseAllChildren.js"(exports, module) {
      "use strict";
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var ReactElement = require_ReactElement();
      var ReactInstanceHandles = require_ReactInstanceHandles();
      var getIteratorFn = require_getIteratorFn();
      var invariant = require_invariant();
      var warning = require_warning();
      var SEPARATOR = ReactInstanceHandles.SEPARATOR;
      var SUBSEPARATOR = ":";
      var userProvidedKeyEscaperLookup = {
        "=": "=0",
        ".": "=1",
        ":": "=2"
      };
      var userProvidedKeyEscapeRegex = /[=.:]/g;
      function userProvidedKeyEscaper(match) {
        return userProvidedKeyEscaperLookup[match];
      }
      function getComponentKey(component, index) {
        if (component && component.key != null) {
          return wrapUserProvidedKey(component.key);
        }
        return index.toString(36);
      }
      function escapeUserProvidedKey(text) {
        return ("" + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
      }
      function wrapUserProvidedKey(key) {
        return "$" + escapeUserProvidedKey(key);
      }
      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children;
        if (type === "undefined" || type === "boolean") {
          children = null;
        }
        if (children === null || type === "string" || type === "number" || ReactElement.isValidElement(children)) {
          callback(
            traverseContext,
            children,
            // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows.
            nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
          );
          return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0;
        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);
          if (iteratorFn) {
            var iterator = iteratorFn.call(children);
            var step;
            if (iteratorFn !== children.entries) {
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else {
              if (false) {
                false ? warning(didWarnAboutMaps, "Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.") : void 0;
                didWarnAboutMaps = true;
              }
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  child = entry[1];
                  nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
                  subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
                }
              }
            }
          } else if (type === "object") {
            var addendum = "";
            if (false) {
              addendum = " If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.";
              if (children._isReactElement) {
                addendum = " It looks like you're using an element created by a different version of React. Make sure to use only one copy of React.";
              }
              if (ReactCurrentOwner.current) {
                var name = ReactCurrentOwner.current.getName();
                if (name) {
                  addendum += " Check the render method of `" + name + "`.";
                }
              }
            }
            var childrenString = String(children);
            true ? false ? invariant(false, "Objects are not valid as a React child (found: %s).%s", childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString, addendum) : invariant(false) : void 0;
          }
        }
        return subtreeCount;
      }
      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }
        return traverseAllChildrenImpl(children, "", callback, traverseContext);
      }
      module.exports = traverseAllChildren;
    }
  });

  // node_modules/react/lib/ReactChildren.js
  var require_ReactChildren = __commonJS({
    "node_modules/react/lib/ReactChildren.js"(exports, module) {
      "use strict";
      var PooledClass = require_PooledClass();
      var ReactElement = require_ReactElement();
      var emptyFunction = require_emptyFunction();
      var traverseAllChildren = require_traverseAllChildren();
      var twoArgumentPooler = PooledClass.twoArgumentPooler;
      var fourArgumentPooler = PooledClass.fourArgumentPooler;
      var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
      function escapeUserProvidedKey(text) {
        return ("" + text).replace(userProvidedKeyEscapeRegex, "//");
      }
      function ForEachBookKeeping(forEachFunction, forEachContext) {
        this.func = forEachFunction;
        this.context = forEachContext;
        this.count = 0;
      }
      ForEachBookKeeping.prototype.destructor = function() {
        this.func = null;
        this.context = null;
        this.count = 0;
      };
      PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func;
        var context = bookKeeping.context;
        func.call(context, child, bookKeeping.count++);
      }
      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }
        var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        ForEachBookKeeping.release(traverseContext);
      }
      function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
        this.result = mapResult;
        this.keyPrefix = keyPrefix;
        this.func = mapFunction;
        this.context = mapContext;
        this.count = 0;
      }
      MapBookKeeping.prototype.destructor = function() {
        this.result = null;
        this.keyPrefix = null;
        this.func = null;
        this.context = null;
        this.count = 0;
      };
      PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result;
        var keyPrefix = bookKeeping.keyPrefix;
        var func = bookKeeping.func;
        var context = bookKeeping.context;
        var mappedChild = func.call(context, child, bookKeeping.count++);
        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
        } else if (mappedChild != null) {
          if (ReactElement.isValidElement(mappedChild)) {
            mappedChild = ReactElement.cloneAndReplaceKey(
              mappedChild,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || "") + "/" : "") + childKey
            );
          }
          result.push(mappedChild);
        }
      }
      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = "";
        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + "/";
        }
        var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        MapBookKeeping.release(traverseContext);
      }
      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
        return result;
      }
      function forEachSingleChildDummy(traverseContext, child, name) {
        return null;
      }
      function countChildren(children, context) {
        return traverseAllChildren(children, forEachSingleChildDummy, null);
      }
      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
        return result;
      }
      var ReactChildren = {
        forEach: forEachChildren,
        map: mapChildren,
        mapIntoWithKeyPrefixInternal,
        count: countChildren,
        toArray
      };
      module.exports = ReactChildren;
    }
  });

  // node_modules/react/lib/ReactDOMSelect.js
  var require_ReactDOMSelect = __commonJS({
    "node_modules/react/lib/ReactDOMSelect.js"(exports, module) {
      "use strict";
      var LinkedValueUtils = require_LinkedValueUtils();
      var ReactMount = require_ReactMount();
      var ReactUpdates = require_ReactUpdates();
      var assign = require_Object_assign();
      var warning = require_warning();
      var valueContextKey = "__ReactDOMSelect_value$" + Math.random().toString(36).slice(2);
      function updateOptionsIfPendingUpdateAndMounted() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
          this._wrapperState.pendingUpdate = false;
          var props = this._currentElement.props;
          var value = LinkedValueUtils.getValue(props);
          if (value != null) {
            updateOptions(this, Boolean(props.multiple), value);
          }
        }
      }
      function updateOptions(inst, multiple, propValue) {
        var selectedValue, i;
        var options = ReactMount.getNode(inst._rootNodeID).options;
        if (multiple) {
          selectedValue = {};
          for (i = 0; i < propValue.length; i++) {
            selectedValue["" + propValue[i]] = true;
          }
          for (i = 0; i < options.length; i++) {
            var selected = selectedValue.hasOwnProperty(options[i].value);
            if (options[i].selected !== selected) {
              options[i].selected = selected;
            }
          }
        } else {
          selectedValue = "" + propValue;
          for (i = 0; i < options.length; i++) {
            if (options[i].value === selectedValue) {
              options[i].selected = true;
              return;
            }
          }
          if (options.length) {
            options[0].selected = true;
          }
        }
      }
      var ReactDOMSelect = {
        valueContextKey,
        getNativeProps: function(inst, props, context) {
          return assign({}, props, {
            onChange: inst._wrapperState.onChange,
            value: void 0
          });
        },
        mountWrapper: function(inst, props) {
          if (false) {
            checkSelectPropTypes(inst, props);
          }
          var value = LinkedValueUtils.getValue(props);
          inst._wrapperState = {
            pendingUpdate: false,
            initialValue: value != null ? value : props.defaultValue,
            onChange: _handleChange.bind(inst),
            wasMultiple: Boolean(props.multiple)
          };
        },
        processChildContext: function(inst, props, context) {
          var childContext = assign({}, context);
          childContext[valueContextKey] = inst._wrapperState.initialValue;
          return childContext;
        },
        postUpdateWrapper: function(inst) {
          var props = inst._currentElement.props;
          inst._wrapperState.initialValue = void 0;
          var wasMultiple = inst._wrapperState.wasMultiple;
          inst._wrapperState.wasMultiple = Boolean(props.multiple);
          var value = LinkedValueUtils.getValue(props);
          if (value != null) {
            inst._wrapperState.pendingUpdate = false;
            updateOptions(inst, Boolean(props.multiple), value);
          } else if (wasMultiple !== Boolean(props.multiple)) {
            if (props.defaultValue != null) {
              updateOptions(inst, Boolean(props.multiple), props.defaultValue);
            } else {
              updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : "");
            }
          }
        }
      };
      function _handleChange(event) {
        var props = this._currentElement.props;
        var returnValue = LinkedValueUtils.executeOnChange(props, event);
        this._wrapperState.pendingUpdate = true;
        ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
        return returnValue;
      }
      module.exports = ReactDOMSelect;
    }
  });

  // node_modules/react/lib/ReactDOMOption.js
  var require_ReactDOMOption = __commonJS({
    "node_modules/react/lib/ReactDOMOption.js"(exports, module) {
      "use strict";
      var ReactChildren = require_ReactChildren();
      var ReactDOMSelect = require_ReactDOMSelect();
      var assign = require_Object_assign();
      var warning = require_warning();
      var valueContextKey = ReactDOMSelect.valueContextKey;
      var ReactDOMOption = {
        mountWrapper: function(inst, props, context) {
          if (false) {
            false ? warning(props.selected == null, "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.") : void 0;
          }
          var selectValue = context[valueContextKey];
          var selected = null;
          if (selectValue != null) {
            selected = false;
            if (Array.isArray(selectValue)) {
              for (var i = 0; i < selectValue.length; i++) {
                if ("" + selectValue[i] === "" + props.value) {
                  selected = true;
                  break;
                }
              }
            } else {
              selected = "" + selectValue === "" + props.value;
            }
          }
          inst._wrapperState = { selected };
        },
        getNativeProps: function(inst, props, context) {
          var nativeProps = assign({ selected: void 0, children: void 0 }, props);
          if (inst._wrapperState.selected != null) {
            nativeProps.selected = inst._wrapperState.selected;
          }
          var content = "";
          ReactChildren.forEach(props.children, function(child) {
            if (child == null) {
              return;
            }
            if (typeof child === "string" || typeof child === "number") {
              content += child;
            } else {
              false ? warning(false, "Only strings and numbers are supported as <option> children.") : void 0;
            }
          });
          if (content) {
            nativeProps.children = content;
          }
          return nativeProps;
        }
      };
      module.exports = ReactDOMOption;
    }
  });

  // node_modules/react/lib/ReactDOMTextarea.js
  var require_ReactDOMTextarea = __commonJS({
    "node_modules/react/lib/ReactDOMTextarea.js"(exports, module) {
      "use strict";
      var LinkedValueUtils = require_LinkedValueUtils();
      var ReactDOMIDOperations = require_ReactDOMIDOperations();
      var ReactUpdates = require_ReactUpdates();
      var assign = require_Object_assign();
      var invariant = require_invariant();
      var warning = require_warning();
      function forceUpdateIfMounted() {
        if (this._rootNodeID) {
          ReactDOMTextarea.updateWrapper(this);
        }
      }
      var ReactDOMTextarea = {
        getNativeProps: function(inst, props, context) {
          !(props.dangerouslySetInnerHTML == null) ? false ? invariant(false, "`dangerouslySetInnerHTML` does not make sense on <textarea>.") : invariant(false) : void 0;
          var nativeProps = assign({}, props, {
            defaultValue: void 0,
            value: void 0,
            children: inst._wrapperState.initialValue,
            onChange: inst._wrapperState.onChange
          });
          return nativeProps;
        },
        mountWrapper: function(inst, props) {
          if (false) {
            LinkedValueUtils.checkPropTypes("textarea", props, inst._currentElement._owner);
          }
          var defaultValue = props.defaultValue;
          var children = props.children;
          if (children != null) {
            if (false) {
              false ? warning(false, "Use the `defaultValue` or `value` props instead of setting children on <textarea>.") : void 0;
            }
            !(defaultValue == null) ? false ? invariant(false, "If you supply `defaultValue` on a <textarea>, do not pass children.") : invariant(false) : void 0;
            if (Array.isArray(children)) {
              !(children.length <= 1) ? false ? invariant(false, "<textarea> can only have at most one child.") : invariant(false) : void 0;
              children = children[0];
            }
            defaultValue = "" + children;
          }
          if (defaultValue == null) {
            defaultValue = "";
          }
          var value = LinkedValueUtils.getValue(props);
          inst._wrapperState = {
            // We save the initial value so that `ReactDOMComponent` doesn't update
            // `textContent` (unnecessary since we update value).
            // The initial value can be a boolean or object so that's why it's
            // forced to be a string.
            initialValue: "" + (value != null ? value : defaultValue),
            onChange: _handleChange.bind(inst)
          };
        },
        updateWrapper: function(inst) {
          var props = inst._currentElement.props;
          var value = LinkedValueUtils.getValue(props);
          if (value != null) {
            ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, "value", "" + value);
          }
        }
      };
      function _handleChange(event) {
        var props = this._currentElement.props;
        var returnValue = LinkedValueUtils.executeOnChange(props, event);
        ReactUpdates.asap(forceUpdateIfMounted, this);
        return returnValue;
      }
      module.exports = ReactDOMTextarea;
    }
  });

  // node_modules/react/lib/ReactChildReconciler.js
  var require_ReactChildReconciler = __commonJS({
    "node_modules/react/lib/ReactChildReconciler.js"(exports, module) {
      "use strict";
      var ReactReconciler = require_ReactReconciler();
      var instantiateReactComponent = require_instantiateReactComponent();
      var shouldUpdateReactComponent = require_shouldUpdateReactComponent();
      var traverseAllChildren = require_traverseAllChildren();
      var warning = require_warning();
      function instantiateChild(childInstances, child, name) {
        var keyUnique = childInstances[name] === void 0;
        if (false) {
          false ? warning(keyUnique, "flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.", name) : void 0;
        }
        if (child != null && keyUnique) {
          childInstances[name] = instantiateReactComponent(child, null);
        }
      }
      var ReactChildReconciler = {
        /**
         * Generates a "mount image" for each of the supplied children. In the case
         * of `ReactDOMComponent`, a mount image is a string of markup.
         *
         * @param {?object} nestedChildNodes Nested child maps.
         * @return {?object} A set of child instances.
         * @internal
         */
        instantiateChildren: function(nestedChildNodes, transaction, context) {
          if (nestedChildNodes == null) {
            return null;
          }
          var childInstances = {};
          traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
          return childInstances;
        },
        /**
         * Updates the rendered children and returns a new set of children.
         *
         * @param {?object} prevChildren Previously initialized set of children.
         * @param {?object} nextChildren Flat child element maps.
         * @param {ReactReconcileTransaction} transaction
         * @param {object} context
         * @return {?object} A new set of child instances.
         * @internal
         */
        updateChildren: function(prevChildren, nextChildren, transaction, context) {
          if (!nextChildren && !prevChildren) {
            return null;
          }
          var name;
          for (name in nextChildren) {
            if (!nextChildren.hasOwnProperty(name)) {
              continue;
            }
            var prevChild = prevChildren && prevChildren[name];
            var prevElement = prevChild && prevChild._currentElement;
            var nextElement = nextChildren[name];
            if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
              ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
              nextChildren[name] = prevChild;
            } else {
              if (prevChild) {
                ReactReconciler.unmountComponent(prevChild, name);
              }
              var nextChildInstance = instantiateReactComponent(nextElement, null);
              nextChildren[name] = nextChildInstance;
            }
          }
          for (name in prevChildren) {
            if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
              ReactReconciler.unmountComponent(prevChildren[name]);
            }
          }
          return nextChildren;
        },
        /**
         * Unmounts all rendered children. This should be used to clean up children
         * when this component is unmounted.
         *
         * @param {?object} renderedChildren Previously initialized set of children.
         * @internal
         */
        unmountChildren: function(renderedChildren) {
          for (var name in renderedChildren) {
            if (renderedChildren.hasOwnProperty(name)) {
              var renderedChild = renderedChildren[name];
              ReactReconciler.unmountComponent(renderedChild);
            }
          }
        }
      };
      module.exports = ReactChildReconciler;
    }
  });

  // node_modules/react/lib/flattenChildren.js
  var require_flattenChildren = __commonJS({
    "node_modules/react/lib/flattenChildren.js"(exports, module) {
      "use strict";
      var traverseAllChildren = require_traverseAllChildren();
      var warning = require_warning();
      function flattenSingleChildIntoContext(traverseContext, child, name) {
        var result = traverseContext;
        var keyUnique = result[name] === void 0;
        if (false) {
          false ? warning(keyUnique, "flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.", name) : void 0;
        }
        if (keyUnique && child != null) {
          result[name] = child;
        }
      }
      function flattenChildren(children) {
        if (children == null) {
          return children;
        }
        var result = {};
        traverseAllChildren(children, flattenSingleChildIntoContext, result);
        return result;
      }
      module.exports = flattenChildren;
    }
  });

  // node_modules/react/lib/ReactMultiChild.js
  var require_ReactMultiChild = __commonJS({
    "node_modules/react/lib/ReactMultiChild.js"(exports, module) {
      "use strict";
      var ReactComponentEnvironment = require_ReactComponentEnvironment();
      var ReactMultiChildUpdateTypes = require_ReactMultiChildUpdateTypes();
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var ReactReconciler = require_ReactReconciler();
      var ReactChildReconciler = require_ReactChildReconciler();
      var flattenChildren = require_flattenChildren();
      var updateDepth = 0;
      var updateQueue = [];
      var markupQueue = [];
      function enqueueInsertMarkup(parentID, markup, toIndex) {
        updateQueue.push({
          parentID,
          parentNode: null,
          type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
          markupIndex: markupQueue.push(markup) - 1,
          content: null,
          fromIndex: null,
          toIndex
        });
      }
      function enqueueMove(parentID, fromIndex, toIndex) {
        updateQueue.push({
          parentID,
          parentNode: null,
          type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
          markupIndex: null,
          content: null,
          fromIndex,
          toIndex
        });
      }
      function enqueueRemove(parentID, fromIndex) {
        updateQueue.push({
          parentID,
          parentNode: null,
          type: ReactMultiChildUpdateTypes.REMOVE_NODE,
          markupIndex: null,
          content: null,
          fromIndex,
          toIndex: null
        });
      }
      function enqueueSetMarkup(parentID, markup) {
        updateQueue.push({
          parentID,
          parentNode: null,
          type: ReactMultiChildUpdateTypes.SET_MARKUP,
          markupIndex: null,
          content: markup,
          fromIndex: null,
          toIndex: null
        });
      }
      function enqueueTextContent(parentID, textContent) {
        updateQueue.push({
          parentID,
          parentNode: null,
          type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
          markupIndex: null,
          content: textContent,
          fromIndex: null,
          toIndex: null
        });
      }
      function processQueue() {
        if (updateQueue.length) {
          ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
          clearQueue();
        }
      }
      function clearQueue() {
        updateQueue.length = 0;
        markupQueue.length = 0;
      }
      var ReactMultiChild = {
        /**
         * Provides common functionality for components that must reconcile multiple
         * children. This is used by `ReactDOMComponent` to mount, update, and
         * unmount child components.
         *
         * @lends {ReactMultiChild.prototype}
         */
        Mixin: {
          _reconcilerInstantiateChildren: function(nestedChildren, transaction, context) {
            if (false) {
              if (this._currentElement) {
                try {
                  ReactCurrentOwner.current = this._currentElement._owner;
                  return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
                } finally {
                  ReactCurrentOwner.current = null;
                }
              }
            }
            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
          },
          _reconcilerUpdateChildren: function(prevChildren, nextNestedChildrenElements, transaction, context) {
            var nextChildren;
            if (false) {
              if (this._currentElement) {
                try {
                  ReactCurrentOwner.current = this._currentElement._owner;
                  nextChildren = flattenChildren(nextNestedChildrenElements);
                } finally {
                  ReactCurrentOwner.current = null;
                }
                return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
              }
            }
            nextChildren = flattenChildren(nextNestedChildrenElements);
            return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
          },
          /**
           * Generates a "mount image" for each of the supplied children. In the case
           * of `ReactDOMComponent`, a mount image is a string of markup.
           *
           * @param {?object} nestedChildren Nested child maps.
           * @return {array} An array of mounted representations.
           * @internal
           */
          mountChildren: function(nestedChildren, transaction, context) {
            var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
            this._renderedChildren = children;
            var mountImages = [];
            var index = 0;
            for (var name in children) {
              if (children.hasOwnProperty(name)) {
                var child = children[name];
                var rootID = this._rootNodeID + name;
                var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
                child._mountIndex = index++;
                mountImages.push(mountImage);
              }
            }
            return mountImages;
          },
          /**
           * Replaces any rendered children with a text content string.
           *
           * @param {string} nextContent String of content.
           * @internal
           */
          updateTextContent: function(nextContent) {
            updateDepth++;
            var errorThrown = true;
            try {
              var prevChildren = this._renderedChildren;
              ReactChildReconciler.unmountChildren(prevChildren);
              for (var name in prevChildren) {
                if (prevChildren.hasOwnProperty(name)) {
                  this._unmountChild(prevChildren[name]);
                }
              }
              this.setTextContent(nextContent);
              errorThrown = false;
            } finally {
              updateDepth--;
              if (!updateDepth) {
                if (errorThrown) {
                  clearQueue();
                } else {
                  processQueue();
                }
              }
            }
          },
          /**
           * Replaces any rendered children with a markup string.
           *
           * @param {string} nextMarkup String of markup.
           * @internal
           */
          updateMarkup: function(nextMarkup) {
            updateDepth++;
            var errorThrown = true;
            try {
              var prevChildren = this._renderedChildren;
              ReactChildReconciler.unmountChildren(prevChildren);
              for (var name in prevChildren) {
                if (prevChildren.hasOwnProperty(name)) {
                  this._unmountChildByName(prevChildren[name], name);
                }
              }
              this.setMarkup(nextMarkup);
              errorThrown = false;
            } finally {
              updateDepth--;
              if (!updateDepth) {
                if (errorThrown) {
                  clearQueue();
                } else {
                  processQueue();
                }
              }
            }
          },
          /**
           * Updates the rendered children with new children.
           *
           * @param {?object} nextNestedChildrenElements Nested child element maps.
           * @param {ReactReconcileTransaction} transaction
           * @internal
           */
          updateChildren: function(nextNestedChildrenElements, transaction, context) {
            updateDepth++;
            var errorThrown = true;
            try {
              this._updateChildren(nextNestedChildrenElements, transaction, context);
              errorThrown = false;
            } finally {
              updateDepth--;
              if (!updateDepth) {
                if (errorThrown) {
                  clearQueue();
                } else {
                  processQueue();
                }
              }
            }
          },
          /**
           * Improve performance by isolating this hot code path from the try/catch
           * block in `updateChildren`.
           *
           * @param {?object} nextNestedChildrenElements Nested child element maps.
           * @param {ReactReconcileTransaction} transaction
           * @final
           * @protected
           */
          _updateChildren: function(nextNestedChildrenElements, transaction, context) {
            var prevChildren = this._renderedChildren;
            var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context);
            this._renderedChildren = nextChildren;
            if (!nextChildren && !prevChildren) {
              return;
            }
            var name;
            var lastIndex = 0;
            var nextIndex = 0;
            for (name in nextChildren) {
              if (!nextChildren.hasOwnProperty(name)) {
                continue;
              }
              var prevChild = prevChildren && prevChildren[name];
              var nextChild = nextChildren[name];
              if (prevChild === nextChild) {
                this.moveChild(prevChild, nextIndex, lastIndex);
                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
                prevChild._mountIndex = nextIndex;
              } else {
                if (prevChild) {
                  lastIndex = Math.max(prevChild._mountIndex, lastIndex);
                  this._unmountChild(prevChild);
                }
                this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
              }
              nextIndex++;
            }
            for (name in prevChildren) {
              if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
                this._unmountChild(prevChildren[name]);
              }
            }
          },
          /**
           * Unmounts all rendered children. This should be used to clean up children
           * when this component is unmounted.
           *
           * @internal
           */
          unmountChildren: function() {
            var renderedChildren = this._renderedChildren;
            ReactChildReconciler.unmountChildren(renderedChildren);
            this._renderedChildren = null;
          },
          /**
           * Moves a child component to the supplied index.
           *
           * @param {ReactComponent} child Component to move.
           * @param {number} toIndex Destination index of the element.
           * @param {number} lastIndex Last index visited of the siblings of `child`.
           * @protected
           */
          moveChild: function(child, toIndex, lastIndex) {
            if (child._mountIndex < lastIndex) {
              enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
            }
          },
          /**
           * Creates a child component.
           *
           * @param {ReactComponent} child Component to create.
           * @param {string} mountImage Markup to insert.
           * @protected
           */
          createChild: function(child, mountImage) {
            enqueueInsertMarkup(this._rootNodeID, mountImage, child._mountIndex);
          },
          /**
           * Removes a child component.
           *
           * @param {ReactComponent} child Child to remove.
           * @protected
           */
          removeChild: function(child) {
            enqueueRemove(this._rootNodeID, child._mountIndex);
          },
          /**
           * Sets this text content string.
           *
           * @param {string} textContent Text content to set.
           * @protected
           */
          setTextContent: function(textContent) {
            enqueueTextContent(this._rootNodeID, textContent);
          },
          /**
           * Sets this markup string.
           *
           * @param {string} markup Markup to set.
           * @protected
           */
          setMarkup: function(markup) {
            enqueueSetMarkup(this._rootNodeID, markup);
          },
          /**
           * Mounts a child with the supplied name.
           *
           * NOTE: This is part of `updateChildren` and is here for readability.
           *
           * @param {ReactComponent} child Component to mount.
           * @param {string} name Name of the child.
           * @param {number} index Index at which to insert the child.
           * @param {ReactReconcileTransaction} transaction
           * @private
           */
          _mountChildByNameAtIndex: function(child, name, index, transaction, context) {
            var rootID = this._rootNodeID + name;
            var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
            child._mountIndex = index;
            this.createChild(child, mountImage);
          },
          /**
           * Unmounts a rendered child.
           *
           * NOTE: This is part of `updateChildren` and is here for readability.
           *
           * @param {ReactComponent} child Component to unmount.
           * @private
           */
          _unmountChild: function(child) {
            this.removeChild(child);
            child._mountIndex = null;
          }
        }
      };
      module.exports = ReactMultiChild;
    }
  });

  // node_modules/fbjs/lib/shallowEqual.js
  var require_shallowEqual = __commonJS({
    "node_modules/fbjs/lib/shallowEqual.js"(exports, module) {
      "use strict";
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function shallowEqual(objA, objB) {
        if (objA === objB) {
          return true;
        }
        if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
          return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        var bHasOwnProperty = hasOwnProperty.bind(objB);
        for (var i = 0; i < keysA.length; i++) {
          if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
          }
        }
        return true;
      }
      module.exports = shallowEqual;
    }
  });

  // node_modules/react/lib/ReactDOMComponent.js
  var require_ReactDOMComponent = __commonJS({
    "node_modules/react/lib/ReactDOMComponent.js"(exports, module) {
      "use strict";
      var AutoFocusUtils = require_AutoFocusUtils();
      var CSSPropertyOperations = require_CSSPropertyOperations();
      var DOMProperty = require_DOMProperty();
      var DOMPropertyOperations = require_DOMPropertyOperations();
      var EventConstants = require_EventConstants();
      var ReactBrowserEventEmitter = require_ReactBrowserEventEmitter();
      var ReactComponentBrowserEnvironment = require_ReactComponentBrowserEnvironment();
      var ReactDOMButton = require_ReactDOMButton();
      var ReactDOMInput = require_ReactDOMInput();
      var ReactDOMOption = require_ReactDOMOption();
      var ReactDOMSelect = require_ReactDOMSelect();
      var ReactDOMTextarea = require_ReactDOMTextarea();
      var ReactMount = require_ReactMount();
      var ReactMultiChild = require_ReactMultiChild();
      var ReactPerf = require_ReactPerf();
      var ReactUpdateQueue = require_ReactUpdateQueue();
      var assign = require_Object_assign();
      var canDefineProperty = require_canDefineProperty();
      var escapeTextContentForBrowser = require_escapeTextContentForBrowser();
      var invariant = require_invariant();
      var isEventSupported = require_isEventSupported();
      var keyOf = require_keyOf();
      var setInnerHTML = require_setInnerHTML();
      var setTextContent = require_setTextContent();
      var shallowEqual = require_shallowEqual();
      var validateDOMNesting = require_validateDOMNesting();
      var warning = require_warning();
      var deleteListener = ReactBrowserEventEmitter.deleteListener;
      var listenTo = ReactBrowserEventEmitter.listenTo;
      var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;
      var CONTENT_TYPES = { "string": true, "number": true };
      var CHILDREN = keyOf({ children: null });
      var STYLE = keyOf({ style: null });
      var HTML = keyOf({ __html: null });
      var ELEMENT_NODE_TYPE = 1;
      if (false) {
        legacyPropsDescriptor = {
          props: {
            enumerable: false,
            get: function() {
              var component = this._reactInternalComponent;
              false ? warning(false, "ReactDOMComponent: Do not access .props of a DOM node; instead, recreate the props as `render` did originally or read the DOM properties/attributes directly from this node (e.g., this.refs.box.className).%s", getDeclarationErrorAddendum(component)) : void 0;
              return component._currentElement.props;
            }
          }
        };
      }
      function legacyGetDOMNode() {
        if (false) {
          var component = this._reactInternalComponent;
          false ? warning(false, "ReactDOMComponent: Do not access .getDOMNode() of a DOM node; instead, use the node directly.%s", getDeclarationErrorAddendum(component)) : void 0;
        }
        return this;
      }
      function legacyIsMounted() {
        var component = this._reactInternalComponent;
        if (false) {
          false ? warning(false, "ReactDOMComponent: Do not access .isMounted() of a DOM node.%s", getDeclarationErrorAddendum(component)) : void 0;
        }
        return !!component;
      }
      function legacySetStateEtc() {
        if (false) {
          var component = this._reactInternalComponent;
          false ? warning(false, "ReactDOMComponent: Do not access .setState(), .replaceState(), or .forceUpdate() of a DOM node. This is a no-op.%s", getDeclarationErrorAddendum(component)) : void 0;
        }
      }
      function legacySetProps(partialProps, callback) {
        var component = this._reactInternalComponent;
        if (false) {
          false ? warning(false, "ReactDOMComponent: Do not access .setProps() of a DOM node. Instead, call ReactDOM.render again at the top level.%s", getDeclarationErrorAddendum(component)) : void 0;
        }
        if (!component) {
          return;
        }
        ReactUpdateQueue.enqueueSetPropsInternal(component, partialProps);
        if (callback) {
          ReactUpdateQueue.enqueueCallbackInternal(component, callback);
        }
      }
      function legacyReplaceProps(partialProps, callback) {
        var component = this._reactInternalComponent;
        if (false) {
          false ? warning(false, "ReactDOMComponent: Do not access .replaceProps() of a DOM node. Instead, call ReactDOM.render again at the top level.%s", getDeclarationErrorAddendum(component)) : void 0;
        }
        if (!component) {
          return;
        }
        ReactUpdateQueue.enqueueReplacePropsInternal(component, partialProps);
        if (callback) {
          ReactUpdateQueue.enqueueCallbackInternal(component, callback);
        }
      }
      function assertValidProps(component, props) {
        if (!props) {
          return;
        }
        if (false) {
          if (voidElementTags[component._tag]) {
            false ? warning(props.children == null && props.dangerouslySetInnerHTML == null, "%s is a void element tag and must not have `children` or use `props.dangerouslySetInnerHTML`.%s", component._tag, component._currentElement._owner ? " Check the render method of " + component._currentElement._owner.getName() + "." : "") : void 0;
          }
        }
        if (props.dangerouslySetInnerHTML != null) {
          !(props.children == null) ? false ? invariant(false, "Can only set one of `children` or `props.dangerouslySetInnerHTML`.") : invariant(false) : void 0;
          !(typeof props.dangerouslySetInnerHTML === "object" && HTML in props.dangerouslySetInnerHTML) ? false ? invariant(false, "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.") : invariant(false) : void 0;
        }
        if (false) {
          false ? warning(props.innerHTML == null, "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.") : void 0;
          false ? warning(!props.contentEditable || props.children == null, "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.") : void 0;
        }
        !(props.style == null || typeof props.style === "object") ? false ? invariant(false, "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s", getDeclarationErrorAddendum(component)) : invariant(false) : void 0;
      }
      function enqueuePutListener(id, registrationName, listener, transaction) {
        if (false) {
          false ? warning(registrationName !== "onScroll" || isEventSupported("scroll", true), "This browser doesn't support the `onScroll` event") : void 0;
        }
        var container = ReactMount.findReactContainerForID(id);
        if (container) {
          var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
          listenTo(registrationName, doc);
        }
        transaction.getReactMountReady().enqueue(putListener, {
          id,
          registrationName,
          listener
        });
      }
      function putListener() {
        var listenerToPut = this;
        ReactBrowserEventEmitter.putListener(listenerToPut.id, listenerToPut.registrationName, listenerToPut.listener);
      }
      var mediaEvents = {
        topAbort: "abort",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTimeUpdate: "timeupdate",
        topVolumeChange: "volumechange",
        topWaiting: "waiting"
      };
      function trapBubbledEventsLocal() {
        var inst = this;
        !inst._rootNodeID ? false ? invariant(false, "Must be mounted to trap events") : invariant(false) : void 0;
        var node = ReactMount.getNode(inst._rootNodeID);
        !node ? false ? invariant(false, "trapBubbledEvent(...): Requires node to be rendered.") : invariant(false) : void 0;
        switch (inst._tag) {
          case "iframe":
            inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, "load", node)];
            break;
          case "video":
          case "audio":
            inst._wrapperState.listeners = [];
            for (var event in mediaEvents) {
              if (mediaEvents.hasOwnProperty(event)) {
                inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
              }
            }
            break;
          case "img":
            inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, "error", node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, "load", node)];
            break;
          case "form":
            inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, "reset", node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, "submit", node)];
            break;
        }
      }
      function mountReadyInputWrapper() {
        ReactDOMInput.mountReadyWrapper(this);
      }
      function postUpdateSelectWrapper() {
        ReactDOMSelect.postUpdateWrapper(this);
      }
      var omittedCloseTags = {
        "area": true,
        "base": true,
        "br": true,
        "col": true,
        "embed": true,
        "hr": true,
        "img": true,
        "input": true,
        "keygen": true,
        "link": true,
        "meta": true,
        "param": true,
        "source": true,
        "track": true,
        "wbr": true
      };
      var newlineEatingTags = {
        "listing": true,
        "pre": true,
        "textarea": true
      };
      var voidElementTags = assign({
        "menuitem": true
      }, omittedCloseTags);
      var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
      var validatedTagCache = {};
      var hasOwnProperty = {}.hasOwnProperty;
      function validateDangerousTag(tag) {
        if (!hasOwnProperty.call(validatedTagCache, tag)) {
          !VALID_TAG_REGEX.test(tag) ? false ? invariant(false, "Invalid tag: %s", tag) : invariant(false) : void 0;
          validatedTagCache[tag] = true;
        }
      }
      function isCustomComponent(tagName, props) {
        return tagName.indexOf("-") >= 0 || props.is != null;
      }
      function ReactDOMComponent(tag) {
        validateDangerousTag(tag);
        this._tag = tag.toLowerCase();
        this._renderedChildren = null;
        this._previousStyle = null;
        this._previousStyleCopy = null;
        this._rootNodeID = null;
        this._wrapperState = null;
        this._topLevelWrapper = null;
        this._nodeWithLegacyProperties = null;
        if (false) {
          this._unprocessedContextDev = null;
          this._processedContextDev = null;
        }
      }
      ReactDOMComponent.displayName = "ReactDOMComponent";
      ReactDOMComponent.Mixin = {
        construct: function(element) {
          this._currentElement = element;
        },
        /**
         * Generates root tag markup then recurses. This method has side effects and
         * is not idempotent.
         *
         * @internal
         * @param {string} rootID The root DOM ID for this node.
         * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
         * @param {object} context
         * @return {string} The computed markup.
         */
        mountComponent: function(rootID, transaction, context) {
          this._rootNodeID = rootID;
          var props = this._currentElement.props;
          switch (this._tag) {
            case "iframe":
            case "img":
            case "form":
            case "video":
            case "audio":
              this._wrapperState = {
                listeners: null
              };
              transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
              break;
            case "button":
              props = ReactDOMButton.getNativeProps(this, props, context);
              break;
            case "input":
              ReactDOMInput.mountWrapper(this, props, context);
              props = ReactDOMInput.getNativeProps(this, props, context);
              break;
            case "option":
              ReactDOMOption.mountWrapper(this, props, context);
              props = ReactDOMOption.getNativeProps(this, props, context);
              break;
            case "select":
              ReactDOMSelect.mountWrapper(this, props, context);
              props = ReactDOMSelect.getNativeProps(this, props, context);
              context = ReactDOMSelect.processChildContext(this, props, context);
              break;
            case "textarea":
              ReactDOMTextarea.mountWrapper(this, props, context);
              props = ReactDOMTextarea.getNativeProps(this, props, context);
              break;
          }
          assertValidProps(this, props);
          if (false) {
            if (context[validateDOMNesting.ancestorInfoContextKey]) {
              validateDOMNesting(this._tag, this, context[validateDOMNesting.ancestorInfoContextKey]);
            }
          }
          if (false) {
            this._unprocessedContextDev = context;
            this._processedContextDev = processChildContextDev(context, this);
            context = this._processedContextDev;
          }
          var mountImage;
          if (transaction.useCreateElement) {
            var ownerDocument = context[ReactMount.ownerDocumentContextKey];
            var el = ownerDocument.createElement(this._currentElement.type);
            DOMPropertyOperations.setAttributeForID(el, this._rootNodeID);
            ReactMount.getID(el);
            this._updateDOMProperties({}, props, transaction, el);
            this._createInitialChildren(transaction, props, context, el);
            mountImage = el;
          } else {
            var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
            var tagContent = this._createContentMarkup(transaction, props, context);
            if (!tagContent && omittedCloseTags[this._tag]) {
              mountImage = tagOpen + "/>";
            } else {
              mountImage = tagOpen + ">" + tagContent + "</" + this._currentElement.type + ">";
            }
          }
          switch (this._tag) {
            case "input":
              transaction.getReactMountReady().enqueue(mountReadyInputWrapper, this);
            // falls through
            case "button":
            case "select":
            case "textarea":
              if (props.autoFocus) {
                transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
              }
              break;
          }
          return mountImage;
        },
        /**
         * Creates markup for the open tag and all attributes.
         *
         * This method has side effects because events get registered.
         *
         * Iterating over object properties is faster than iterating over arrays.
         * @see http://jsperf.com/obj-vs-arr-iteration
         *
         * @private
         * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
         * @param {object} props
         * @return {string} Markup of opening tag.
         */
        _createOpenTagMarkupAndPutListeners: function(transaction, props) {
          var ret = "<" + this._currentElement.type;
          for (var propKey in props) {
            if (!props.hasOwnProperty(propKey)) {
              continue;
            }
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            if (registrationNameModules.hasOwnProperty(propKey)) {
              if (propValue) {
                enqueuePutListener(this._rootNodeID, propKey, propValue, transaction);
              }
            } else {
              if (propKey === STYLE) {
                if (propValue) {
                  if (false) {
                    this._previousStyle = propValue;
                  }
                  propValue = this._previousStyleCopy = assign({}, props.style);
                }
                propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
              }
              var markup = null;
              if (this._tag != null && isCustomComponent(this._tag, props)) {
                if (propKey !== CHILDREN) {
                  markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
                }
              } else {
                markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
              }
              if (markup) {
                ret += " " + markup;
              }
            }
          }
          if (transaction.renderToStaticMarkup) {
            return ret;
          }
          var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
          return ret + " " + markupForID;
        },
        /**
         * Creates markup for the content between the tags.
         *
         * @private
         * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
         * @param {object} props
         * @param {object} context
         * @return {string} Content markup.
         */
        _createContentMarkup: function(transaction, props, context) {
          var ret = "";
          var innerHTML = props.dangerouslySetInnerHTML;
          if (innerHTML != null) {
            if (innerHTML.__html != null) {
              ret = innerHTML.__html;
            }
          } else {
            var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
            var childrenToUse = contentToUse != null ? null : props.children;
            if (contentToUse != null) {
              ret = escapeTextContentForBrowser(contentToUse);
            } else if (childrenToUse != null) {
              var mountImages = this.mountChildren(childrenToUse, transaction, context);
              ret = mountImages.join("");
            }
          }
          if (newlineEatingTags[this._tag] && ret.charAt(0) === "\n") {
            return "\n" + ret;
          } else {
            return ret;
          }
        },
        _createInitialChildren: function(transaction, props, context, el) {
          var innerHTML = props.dangerouslySetInnerHTML;
          if (innerHTML != null) {
            if (innerHTML.__html != null) {
              setInnerHTML(el, innerHTML.__html);
            }
          } else {
            var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
            var childrenToUse = contentToUse != null ? null : props.children;
            if (contentToUse != null) {
              setTextContent(el, contentToUse);
            } else if (childrenToUse != null) {
              var mountImages = this.mountChildren(childrenToUse, transaction, context);
              for (var i = 0; i < mountImages.length; i++) {
                el.appendChild(mountImages[i]);
              }
            }
          }
        },
        /**
         * Receives a next element and updates the component.
         *
         * @internal
         * @param {ReactElement} nextElement
         * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
         * @param {object} context
         */
        receiveComponent: function(nextElement, transaction, context) {
          var prevElement = this._currentElement;
          this._currentElement = nextElement;
          this.updateComponent(transaction, prevElement, nextElement, context);
        },
        /**
         * Updates a native DOM component after it has already been allocated and
         * attached to the DOM. Reconciles the root DOM node, then recurses.
         *
         * @param {ReactReconcileTransaction} transaction
         * @param {ReactElement} prevElement
         * @param {ReactElement} nextElement
         * @internal
         * @overridable
         */
        updateComponent: function(transaction, prevElement, nextElement, context) {
          var lastProps = prevElement.props;
          var nextProps = this._currentElement.props;
          switch (this._tag) {
            case "button":
              lastProps = ReactDOMButton.getNativeProps(this, lastProps);
              nextProps = ReactDOMButton.getNativeProps(this, nextProps);
              break;
            case "input":
              ReactDOMInput.updateWrapper(this);
              lastProps = ReactDOMInput.getNativeProps(this, lastProps);
              nextProps = ReactDOMInput.getNativeProps(this, nextProps);
              break;
            case "option":
              lastProps = ReactDOMOption.getNativeProps(this, lastProps);
              nextProps = ReactDOMOption.getNativeProps(this, nextProps);
              break;
            case "select":
              lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
              nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
              break;
            case "textarea":
              ReactDOMTextarea.updateWrapper(this);
              lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
              nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
              break;
          }
          if (false) {
            if (this._unprocessedContextDev !== context) {
              this._unprocessedContextDev = context;
              this._processedContextDev = processChildContextDev(context, this);
            }
            context = this._processedContextDev;
          }
          assertValidProps(this, nextProps);
          this._updateDOMProperties(lastProps, nextProps, transaction, null);
          this._updateDOMChildren(lastProps, nextProps, transaction, context);
          if (!canDefineProperty && this._nodeWithLegacyProperties) {
            this._nodeWithLegacyProperties.props = nextProps;
          }
          if (this._tag === "select") {
            transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
          }
        },
        /**
         * Reconciles the properties by detecting differences in property values and
         * updating the DOM as necessary. This function is probably the single most
         * critical path for performance optimization.
         *
         * TODO: Benchmark whether checking for changed values in memory actually
         *       improves performance (especially statically positioned elements).
         * TODO: Benchmark the effects of putting this at the top since 99% of props
         *       do not change for a given reconciliation.
         * TODO: Benchmark areas that can be improved with caching.
         *
         * @private
         * @param {object} lastProps
         * @param {object} nextProps
         * @param {ReactReconcileTransaction} transaction
         * @param {?DOMElement} node
         */
        _updateDOMProperties: function(lastProps, nextProps, transaction, node) {
          var propKey;
          var styleName;
          var styleUpdates;
          for (propKey in lastProps) {
            if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
              continue;
            }
            if (propKey === STYLE) {
              var lastStyle = this._previousStyleCopy;
              for (styleName in lastStyle) {
                if (lastStyle.hasOwnProperty(styleName)) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = "";
                }
              }
              this._previousStyleCopy = null;
            } else if (registrationNameModules.hasOwnProperty(propKey)) {
              if (lastProps[propKey]) {
                deleteListener(this._rootNodeID, propKey);
              }
            } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
              if (!node) {
                node = ReactMount.getNode(this._rootNodeID);
              }
              DOMPropertyOperations.deleteValueForProperty(node, propKey);
            }
          }
          for (propKey in nextProps) {
            var nextProp = nextProps[propKey];
            var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
            if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
              continue;
            }
            if (propKey === STYLE) {
              if (nextProp) {
                if (false) {
                  checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
                  this._previousStyle = nextProp;
                }
                nextProp = this._previousStyleCopy = assign({}, nextProp);
              } else {
                this._previousStyleCopy = null;
              }
              if (lastProp) {
                for (styleName in lastProp) {
                  if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                    styleUpdates = styleUpdates || {};
                    styleUpdates[styleName] = "";
                  }
                }
                for (styleName in nextProp) {
                  if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                    styleUpdates = styleUpdates || {};
                    styleUpdates[styleName] = nextProp[styleName];
                  }
                }
              } else {
                styleUpdates = nextProp;
              }
            } else if (registrationNameModules.hasOwnProperty(propKey)) {
              if (nextProp) {
                enqueuePutListener(this._rootNodeID, propKey, nextProp, transaction);
              } else if (lastProp) {
                deleteListener(this._rootNodeID, propKey);
              }
            } else if (isCustomComponent(this._tag, nextProps)) {
              if (!node) {
                node = ReactMount.getNode(this._rootNodeID);
              }
              if (propKey === CHILDREN) {
                nextProp = null;
              }
              DOMPropertyOperations.setValueForAttribute(node, propKey, nextProp);
            } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
              if (!node) {
                node = ReactMount.getNode(this._rootNodeID);
              }
              if (nextProp != null) {
                DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
              } else {
                DOMPropertyOperations.deleteValueForProperty(node, propKey);
              }
            }
          }
          if (styleUpdates) {
            if (!node) {
              node = ReactMount.getNode(this._rootNodeID);
            }
            CSSPropertyOperations.setValueForStyles(node, styleUpdates);
          }
        },
        /**
         * Reconciles the children with the various properties that affect the
         * children content.
         *
         * @param {object} lastProps
         * @param {object} nextProps
         * @param {ReactReconcileTransaction} transaction
         * @param {object} context
         */
        _updateDOMChildren: function(lastProps, nextProps, transaction, context) {
          var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
          var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
          var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
          var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
          var lastChildren = lastContent != null ? null : lastProps.children;
          var nextChildren = nextContent != null ? null : nextProps.children;
          var lastHasContentOrHtml = lastContent != null || lastHtml != null;
          var nextHasContentOrHtml = nextContent != null || nextHtml != null;
          if (lastChildren != null && nextChildren == null) {
            this.updateChildren(null, transaction, context);
          } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
            this.updateTextContent("");
          }
          if (nextContent != null) {
            if (lastContent !== nextContent) {
              this.updateTextContent("" + nextContent);
            }
          } else if (nextHtml != null) {
            if (lastHtml !== nextHtml) {
              this.updateMarkup("" + nextHtml);
            }
          } else if (nextChildren != null) {
            this.updateChildren(nextChildren, transaction, context);
          }
        },
        /**
         * Destroys all event registrations for this instance. Does not remove from
         * the DOM. That must be done by the parent.
         *
         * @internal
         */
        unmountComponent: function() {
          switch (this._tag) {
            case "iframe":
            case "img":
            case "form":
            case "video":
            case "audio":
              var listeners = this._wrapperState.listeners;
              if (listeners) {
                for (var i = 0; i < listeners.length; i++) {
                  listeners[i].remove();
                }
              }
              break;
            case "input":
              ReactDOMInput.unmountWrapper(this);
              break;
            case "html":
            case "head":
            case "body":
              true ? false ? invariant(false, "<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.", this._tag) : invariant(false) : void 0;
              break;
          }
          this.unmountChildren();
          ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
          ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
          this._rootNodeID = null;
          this._wrapperState = null;
          if (this._nodeWithLegacyProperties) {
            var node = this._nodeWithLegacyProperties;
            node._reactInternalComponent = null;
            this._nodeWithLegacyProperties = null;
          }
        },
        getPublicInstance: function() {
          if (!this._nodeWithLegacyProperties) {
            var node = ReactMount.getNode(this._rootNodeID);
            node._reactInternalComponent = this;
            node.getDOMNode = legacyGetDOMNode;
            node.isMounted = legacyIsMounted;
            node.setState = legacySetStateEtc;
            node.replaceState = legacySetStateEtc;
            node.forceUpdate = legacySetStateEtc;
            node.setProps = legacySetProps;
            node.replaceProps = legacyReplaceProps;
            if (false) {
              if (canDefineProperty) {
                Object.defineProperties(node, legacyPropsDescriptor);
              } else {
                node.props = this._currentElement.props;
              }
            } else {
              node.props = this._currentElement.props;
            }
            this._nodeWithLegacyProperties = node;
          }
          return this._nodeWithLegacyProperties;
        }
      };
      ReactPerf.measureMethods(ReactDOMComponent, "ReactDOMComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent"
      });
      assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
      module.exports = ReactDOMComponent;
    }
  });

  // node_modules/fbjs/lib/EventListener.js
  var require_EventListener = __commonJS({
    "node_modules/fbjs/lib/EventListener.js"(exports, module) {
      "use strict";
      var emptyFunction = require_emptyFunction();
      var EventListener = {
        /**
         * Listen to DOM events during the bubble phase.
         *
         * @param {DOMEventTarget} target DOM element to register listener on.
         * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
         * @param {function} callback Callback function.
         * @return {object} Object with a `remove` method.
         */
        listen: function(target, eventType, callback) {
          if (target.addEventListener) {
            target.addEventListener(eventType, callback, false);
            return {
              remove: function() {
                target.removeEventListener(eventType, callback, false);
              }
            };
          } else if (target.attachEvent) {
            target.attachEvent("on" + eventType, callback);
            return {
              remove: function() {
                target.detachEvent("on" + eventType, callback);
              }
            };
          }
        },
        /**
         * Listen to DOM events during the capture phase.
         *
         * @param {DOMEventTarget} target DOM element to register listener on.
         * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
         * @param {function} callback Callback function.
         * @return {object} Object with a `remove` method.
         */
        capture: function(target, eventType, callback) {
          if (target.addEventListener) {
            target.addEventListener(eventType, callback, true);
            return {
              remove: function() {
                target.removeEventListener(eventType, callback, true);
              }
            };
          } else {
            if (false) {
              console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events.");
            }
            return {
              remove: emptyFunction
            };
          }
        },
        registerDefault: function() {
        }
      };
      module.exports = EventListener;
    }
  });

  // node_modules/fbjs/lib/getUnboundedScrollPosition.js
  var require_getUnboundedScrollPosition = __commonJS({
    "node_modules/fbjs/lib/getUnboundedScrollPosition.js"(exports, module) {
      "use strict";
      function getUnboundedScrollPosition(scrollable) {
        if (scrollable === window) {
          return {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
          };
        }
        return {
          x: scrollable.scrollLeft,
          y: scrollable.scrollTop
        };
      }
      module.exports = getUnboundedScrollPosition;
    }
  });

  // node_modules/react/lib/ReactEventListener.js
  var require_ReactEventListener = __commonJS({
    "node_modules/react/lib/ReactEventListener.js"(exports, module) {
      "use strict";
      var EventListener = require_EventListener();
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var PooledClass = require_PooledClass();
      var ReactInstanceHandles = require_ReactInstanceHandles();
      var ReactMount = require_ReactMount();
      var ReactUpdates = require_ReactUpdates();
      var assign = require_Object_assign();
      var getEventTarget = require_getEventTarget();
      var getUnboundedScrollPosition = require_getUnboundedScrollPosition();
      var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
      function findParent(node) {
        var nodeID = ReactMount.getID(node);
        var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
        var container = ReactMount.findReactContainerForID(rootID);
        var parent = ReactMount.getFirstReactDOM(container);
        return parent;
      }
      function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
        this.topLevelType = topLevelType;
        this.nativeEvent = nativeEvent;
        this.ancestors = [];
      }
      assign(TopLevelCallbackBookKeeping.prototype, {
        destructor: function() {
          this.topLevelType = null;
          this.nativeEvent = null;
          this.ancestors.length = 0;
        }
      });
      PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
      function handleTopLevelImpl(bookKeeping) {
        void handleTopLevelWithPath;
        handleTopLevelWithoutPath(bookKeeping);
      }
      function handleTopLevelWithoutPath(bookKeeping) {
        var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;
        var ancestor = topLevelTarget;
        while (ancestor) {
          bookKeeping.ancestors.push(ancestor);
          ancestor = findParent(ancestor);
        }
        for (var i = 0; i < bookKeeping.ancestors.length; i++) {
          topLevelTarget = bookKeeping.ancestors[i];
          var topLevelTargetID = ReactMount.getID(topLevelTarget) || "";
          ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
        }
      }
      function handleTopLevelWithPath(bookKeeping) {
        var path = bookKeeping.nativeEvent.path;
        var currentNativeTarget = path[0];
        var eventsFired = 0;
        for (var i = 0; i < path.length; i++) {
          var currentPathElement = path[i];
          if (currentPathElement.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE) {
            currentNativeTarget = path[i + 1];
          }
          var reactParent = ReactMount.getFirstReactDOM(currentPathElement);
          if (reactParent === currentPathElement) {
            var currentPathElementID = ReactMount.getID(currentPathElement);
            var newRootID = ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);
            bookKeeping.ancestors.push(currentPathElement);
            var topLevelTargetID = ReactMount.getID(currentPathElement) || "";
            eventsFired++;
            ReactEventListener._handleTopLevel(bookKeeping.topLevelType, currentPathElement, topLevelTargetID, bookKeeping.nativeEvent, currentNativeTarget);
            while (currentPathElementID !== newRootID) {
              i++;
              currentPathElement = path[i];
              currentPathElementID = ReactMount.getID(currentPathElement);
            }
          }
        }
        if (eventsFired === 0) {
          ReactEventListener._handleTopLevel(bookKeeping.topLevelType, window, "", bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
        }
      }
      function scrollValueMonitor(cb) {
        var scrollPosition = getUnboundedScrollPosition(window);
        cb(scrollPosition);
      }
      var ReactEventListener = {
        _enabled: true,
        _handleTopLevel: null,
        WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
        setHandleTopLevel: function(handleTopLevel) {
          ReactEventListener._handleTopLevel = handleTopLevel;
        },
        setEnabled: function(enabled) {
          ReactEventListener._enabled = !!enabled;
        },
        isEnabled: function() {
          return ReactEventListener._enabled;
        },
        /**
         * Traps top-level events by using event bubbling.
         *
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {string} handlerBaseName Event name (e.g. "click").
         * @param {object} handle Element on which to attach listener.
         * @return {?object} An object with a remove function which will forcefully
         *                  remove the listener.
         * @internal
         */
        trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
          var element = handle;
          if (!element) {
            return null;
          }
          return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
        },
        /**
         * Traps a top-level event by using event capturing.
         *
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {string} handlerBaseName Event name (e.g. "click").
         * @param {object} handle Element on which to attach listener.
         * @return {?object} An object with a remove function which will forcefully
         *                  remove the listener.
         * @internal
         */
        trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
          var element = handle;
          if (!element) {
            return null;
          }
          return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
        },
        monitorScrollValue: function(refresh) {
          var callback = scrollValueMonitor.bind(null, refresh);
          EventListener.listen(window, "scroll", callback);
        },
        dispatchEvent: function(topLevelType, nativeEvent) {
          if (!ReactEventListener._enabled) {
            return;
          }
          var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
          try {
            ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
          } finally {
            TopLevelCallbackBookKeeping.release(bookKeeping);
          }
        }
      };
      module.exports = ReactEventListener;
    }
  });

  // node_modules/react/lib/ReactNoopUpdateQueue.js
  var require_ReactNoopUpdateQueue = __commonJS({
    "node_modules/react/lib/ReactNoopUpdateQueue.js"(exports, module) {
      "use strict";
      var warning = require_warning();
      function warnTDZ(publicInstance, callerName) {
        if (false) {
          false ? warning(false, "%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.", callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || "") : void 0;
        }
      }
      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(publicInstance) {
          return false;
        },
        /**
         * Enqueue a callback that will be executed after all the pending updates
         * have processed.
         *
         * @param {ReactClass} publicInstance The instance to use as `this` context.
         * @param {?function} callback Called after state is updated.
         * @internal
         */
        enqueueCallback: function(publicInstance, callback) {
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @internal
         */
        enqueueForceUpdate: function(publicInstance) {
          warnTDZ(publicInstance, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @internal
         */
        enqueueReplaceState: function(publicInstance, completeState) {
          warnTDZ(publicInstance, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @internal
         */
        enqueueSetState: function(publicInstance, partialState) {
          warnTDZ(publicInstance, "setState");
        },
        /**
         * Sets a subset of the props.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialProps Subset of the next props.
         * @internal
         */
        enqueueSetProps: function(publicInstance, partialProps) {
          warnTDZ(publicInstance, "setProps");
        },
        /**
         * Replaces all of the props.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} props New props.
         * @internal
         */
        enqueueReplaceProps: function(publicInstance, props) {
          warnTDZ(publicInstance, "replaceProps");
        }
      };
      module.exports = ReactNoopUpdateQueue;
    }
  });

  // node_modules/react/lib/ReactComponent.js
  var require_ReactComponent = __commonJS({
    "node_modules/react/lib/ReactComponent.js"(exports, module) {
      "use strict";
      var ReactNoopUpdateQueue = require_ReactNoopUpdateQueue();
      var canDefineProperty = require_canDefineProperty();
      var emptyObject = require_emptyObject();
      var invariant = require_invariant();
      var warning = require_warning();
      function ReactComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      ReactComponent.prototype.isReactComponent = {};
      ReactComponent.prototype.setState = function(partialState, callback) {
        !(typeof partialState === "object" || typeof partialState === "function" || partialState == null) ? false ? invariant(false, "setState(...): takes an object of state variables to update or a function which returns an object of state variables.") : invariant(false) : void 0;
        if (false) {
          false ? warning(partialState != null, "setState(...): You passed an undefined or null state object; instead, use forceUpdate().") : void 0;
        }
        this.updater.enqueueSetState(this, partialState);
        if (callback) {
          this.updater.enqueueCallback(this, callback);
        }
      };
      ReactComponent.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this);
        if (callback) {
          this.updater.enqueueCallback(this, callback);
        }
      };
      if (false) {
        deprecatedAPIs = {
          getDOMNode: ["getDOMNode", "Use ReactDOM.findDOMNode(component) instead."],
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceProps: ["replaceProps", "Instead, call render again at the top level."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."],
          setProps: ["setProps", "Instead, call render again at the top level."]
        };
        defineDeprecationWarning = function(methodName, info) {
          if (canDefineProperty) {
            Object.defineProperty(ReactComponent.prototype, methodName, {
              get: function() {
                false ? warning(false, "%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]) : void 0;
                return void 0;
              }
            });
          }
        };
        for (fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }
      var deprecatedAPIs;
      var defineDeprecationWarning;
      var fnName;
      module.exports = ReactComponent;
    }
  });

  // node_modules/react/lib/ReactClass.js
  var require_ReactClass = __commonJS({
    "node_modules/react/lib/ReactClass.js"(exports, module) {
      "use strict";
      var ReactComponent = require_ReactComponent();
      var ReactElement = require_ReactElement();
      var ReactPropTypeLocations = require_ReactPropTypeLocations();
      var ReactPropTypeLocationNames = require_ReactPropTypeLocationNames();
      var ReactNoopUpdateQueue = require_ReactNoopUpdateQueue();
      var assign = require_Object_assign();
      var emptyObject = require_emptyObject();
      var invariant = require_invariant();
      var keyMirror = require_keyMirror();
      var keyOf = require_keyOf();
      var warning = require_warning();
      var MIXINS_KEY = keyOf({ mixins: null });
      var SpecPolicy = keyMirror({
        /**
         * These methods may be defined only once by the class specification or mixin.
         */
        DEFINE_ONCE: null,
        /**
         * These methods may be defined by both the class specification and mixins.
         * Subsequent definitions will be chained. These methods must return void.
         */
        DEFINE_MANY: null,
        /**
         * These methods are overriding the base class.
         */
        OVERRIDE_BASE: null,
        /**
         * These methods are similar to DEFINE_MANY, except we assume they return
         * objects. We try to merge the keys of the return values of all the mixed in
         * functions. If there is a key conflict we throw.
         */
        DEFINE_MANY_MERGED: null
      });
      var injectedMixins = [];
      var ReactClassInterface = {
        /**
         * An array of Mixin objects to include when defining your component.
         *
         * @type {array}
         * @optional
         */
        mixins: SpecPolicy.DEFINE_MANY,
        /**
         * An object containing properties and methods that should be defined on
         * the component's constructor instead of its prototype (static methods).
         *
         * @type {object}
         * @optional
         */
        statics: SpecPolicy.DEFINE_MANY,
        /**
         * Definition of prop types for this component.
         *
         * @type {object}
         * @optional
         */
        propTypes: SpecPolicy.DEFINE_MANY,
        /**
         * Definition of context types for this component.
         *
         * @type {object}
         * @optional
         */
        contextTypes: SpecPolicy.DEFINE_MANY,
        /**
         * Definition of context types this component sets for its children.
         *
         * @type {object}
         * @optional
         */
        childContextTypes: SpecPolicy.DEFINE_MANY,
        // ==== Definition methods ====
        /**
         * Invoked when the component is mounted. Values in the mapping will be set on
         * `this.props` if that prop is not specified (i.e. using an `in` check).
         *
         * This method is invoked before `getInitialState` and therefore cannot rely
         * on `this.state` or use `this.setState`.
         *
         * @return {object}
         * @optional
         */
        getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
        /**
         * Invoked once before the component is mounted. The return value will be used
         * as the initial value of `this.state`.
         *
         *   getInitialState: function() {
         *     return {
         *       isOn: false,
         *       fooBaz: new BazFoo()
         *     }
         *   }
         *
         * @return {object}
         * @optional
         */
        getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
        /**
         * @return {object}
         * @optional
         */
        getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
        /**
         * Uses props from `this.props` and state from `this.state` to render the
         * structure of the component.
         *
         * No guarantees are made about when or how often this method is invoked, so
         * it must not have side effects.
         *
         *   render: function() {
         *     var name = this.props.name;
         *     return <div>Hello, {name}!</div>;
         *   }
         *
         * @return {ReactComponent}
         * @nosideeffects
         * @required
         */
        render: SpecPolicy.DEFINE_ONCE,
        // ==== Delegate methods ====
        /**
         * Invoked when the component is initially created and about to be mounted.
         * This may have side effects, but any external subscriptions or data created
         * by this method must be cleaned up in `componentWillUnmount`.
         *
         * @optional
         */
        componentWillMount: SpecPolicy.DEFINE_MANY,
        /**
         * Invoked when the component has been mounted and has a DOM representation.
         * However, there is no guarantee that the DOM node is in the document.
         *
         * Use this as an opportunity to operate on the DOM when the component has
         * been mounted (initialized and rendered) for the first time.
         *
         * @param {DOMElement} rootNode DOM element representing the component.
         * @optional
         */
        componentDidMount: SpecPolicy.DEFINE_MANY,
        /**
         * Invoked before the component receives new props.
         *
         * Use this as an opportunity to react to a prop transition by updating the
         * state using `this.setState`. Current props are accessed via `this.props`.
         *
         *   componentWillReceiveProps: function(nextProps, nextContext) {
         *     this.setState({
         *       likesIncreasing: nextProps.likeCount > this.props.likeCount
         *     });
         *   }
         *
         * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
         * transition may cause a state change, but the opposite is not true. If you
         * need it, you are probably looking for `componentWillUpdate`.
         *
         * @param {object} nextProps
         * @optional
         */
        componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
        /**
         * Invoked while deciding if the component should be updated as a result of
         * receiving new props, state and/or context.
         *
         * Use this as an opportunity to `return false` when you're certain that the
         * transition to the new props/state/context will not require a component
         * update.
         *
         *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
         *     return !equal(nextProps, this.props) ||
         *       !equal(nextState, this.state) ||
         *       !equal(nextContext, this.context);
         *   }
         *
         * @param {object} nextProps
         * @param {?object} nextState
         * @param {?object} nextContext
         * @return {boolean} True if the component should update.
         * @optional
         */
        shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
        /**
         * Invoked when the component is about to update due to a transition from
         * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
         * and `nextContext`.
         *
         * Use this as an opportunity to perform preparation before an update occurs.
         *
         * NOTE: You **cannot** use `this.setState()` in this method.
         *
         * @param {object} nextProps
         * @param {?object} nextState
         * @param {?object} nextContext
         * @param {ReactReconcileTransaction} transaction
         * @optional
         */
        componentWillUpdate: SpecPolicy.DEFINE_MANY,
        /**
         * Invoked when the component's DOM representation has been updated.
         *
         * Use this as an opportunity to operate on the DOM when the component has
         * been updated.
         *
         * @param {object} prevProps
         * @param {?object} prevState
         * @param {?object} prevContext
         * @param {DOMElement} rootNode DOM element representing the component.
         * @optional
         */
        componentDidUpdate: SpecPolicy.DEFINE_MANY,
        /**
         * Invoked when the component is about to be removed from its parent and have
         * its DOM representation destroyed.
         *
         * Use this as an opportunity to deallocate any external resources.
         *
         * NOTE: There is no `componentDidUnmount` since your component will have been
         * destroyed by that point.
         *
         * @optional
         */
        componentWillUnmount: SpecPolicy.DEFINE_MANY,
        // ==== Advanced methods ====
        /**
         * Updates the component's currently mounted DOM representation.
         *
         * By default, this implements React's rendering and reconciliation algorithm.
         * Sophisticated clients may wish to override this.
         *
         * @param {ReactReconcileTransaction} transaction
         * @internal
         * @overridable
         */
        updateComponent: SpecPolicy.OVERRIDE_BASE
      };
      var RESERVED_SPEC_KEYS = {
        displayName: function(Constructor, displayName) {
          Constructor.displayName = displayName;
        },
        mixins: function(Constructor, mixins) {
          if (mixins) {
            for (var i = 0; i < mixins.length; i++) {
              mixSpecIntoComponent(Constructor, mixins[i]);
            }
          }
        },
        childContextTypes: function(Constructor, childContextTypes) {
          if (false) {
            validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
          }
          Constructor.childContextTypes = assign({}, Constructor.childContextTypes, childContextTypes);
        },
        contextTypes: function(Constructor, contextTypes) {
          if (false) {
            validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
          }
          Constructor.contextTypes = assign({}, Constructor.contextTypes, contextTypes);
        },
        /**
         * Special case getDefaultProps which should move into statics but requires
         * automatic merging.
         */
        getDefaultProps: function(Constructor, getDefaultProps) {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
          } else {
            Constructor.getDefaultProps = getDefaultProps;
          }
        },
        propTypes: function(Constructor, propTypes) {
          if (false) {
            validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
          }
          Constructor.propTypes = assign({}, Constructor.propTypes, propTypes);
        },
        statics: function(Constructor, statics) {
          mixStaticSpecIntoComponent(Constructor, statics);
        },
        autobind: function() {
        }
      };
      function validateMethodOverride(proto, name) {
        var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
        if (ReactClassMixin.hasOwnProperty(name)) {
          !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? false ? invariant(false, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", name) : invariant(false) : void 0;
        }
        if (proto.hasOwnProperty(name)) {
          !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? false ? invariant(false, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", name) : invariant(false) : void 0;
        }
      }
      function mixSpecIntoComponent(Constructor, spec) {
        if (!spec) {
          return;
        }
        !(typeof spec !== "function") ? false ? invariant(false, "ReactClass: You're attempting to use a component class as a mixin. Instead, just use a regular object.") : invariant(false) : void 0;
        !!ReactElement.isValidElement(spec) ? false ? invariant(false, "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.") : invariant(false) : void 0;
        var proto = Constructor.prototype;
        if (spec.hasOwnProperty(MIXINS_KEY)) {
          RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
        }
        for (var name in spec) {
          if (!spec.hasOwnProperty(name)) {
            continue;
          }
          if (name === MIXINS_KEY) {
            continue;
          }
          var property = spec[name];
          validateMethodOverride(proto, name);
          if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
            RESERVED_SPEC_KEYS[name](Constructor, property);
          } else {
            var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
            var isAlreadyDefined = proto.hasOwnProperty(name);
            var isFunction = typeof property === "function";
            var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
            if (shouldAutoBind) {
              if (!proto.__reactAutoBindMap) {
                proto.__reactAutoBindMap = {};
              }
              proto.__reactAutoBindMap[name] = property;
              proto[name] = property;
            } else {
              if (isAlreadyDefined) {
                var specPolicy = ReactClassInterface[name];
                !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? false ? invariant(false, "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", specPolicy, name) : invariant(false) : void 0;
                if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
                  proto[name] = createMergedResultFunction(proto[name], property);
                } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
                  proto[name] = createChainedFunction(proto[name], property);
                }
              } else {
                proto[name] = property;
                if (false) {
                  if (typeof property === "function" && spec.displayName) {
                    proto[name].displayName = spec.displayName + "_" + name;
                  }
                }
              }
            }
          }
        }
      }
      function mixStaticSpecIntoComponent(Constructor, statics) {
        if (!statics) {
          return;
        }
        for (var name in statics) {
          var property = statics[name];
          if (!statics.hasOwnProperty(name)) {
            continue;
          }
          var isReserved = name in RESERVED_SPEC_KEYS;
          !!isReserved ? false ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : invariant(false) : void 0;
          var isInherited = name in Constructor;
          !!isInherited ? false ? invariant(false, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", name) : invariant(false) : void 0;
          Constructor[name] = property;
        }
      }
      function mergeIntoWithNoDuplicateKeys(one, two) {
        !(one && two && typeof one === "object" && typeof two === "object") ? false ? invariant(false, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.") : invariant(false) : void 0;
        for (var key in two) {
          if (two.hasOwnProperty(key)) {
            !(one[key] === void 0) ? false ? invariant(false, "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", key) : invariant(false) : void 0;
            one[key] = two[key];
          }
        }
        return one;
      }
      function createMergedResultFunction(one, two) {
        return function mergedResult() {
          var a = one.apply(this, arguments);
          var b = two.apply(this, arguments);
          if (a == null) {
            return b;
          } else if (b == null) {
            return a;
          }
          var c = {};
          mergeIntoWithNoDuplicateKeys(c, a);
          mergeIntoWithNoDuplicateKeys(c, b);
          return c;
        };
      }
      function createChainedFunction(one, two) {
        return function chainedFunction() {
          one.apply(this, arguments);
          two.apply(this, arguments);
        };
      }
      function bindAutoBindMethod(component, method) {
        var boundMethod = method.bind(component);
        if (false) {
          boundMethod.__reactBoundContext = component;
          boundMethod.__reactBoundMethod = method;
          boundMethod.__reactBoundArguments = null;
          var componentName = component.constructor.displayName;
          var _bind = boundMethod.bind;
          boundMethod.bind = function(newThis) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            if (newThis !== component && newThis !== null) {
              false ? warning(false, "bind(): React component methods may only be bound to the component instance. See %s", componentName) : void 0;
            } else if (!args.length) {
              false ? warning(false, "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s", componentName) : void 0;
              return boundMethod;
            }
            var reboundMethod = _bind.apply(boundMethod, arguments);
            reboundMethod.__reactBoundContext = component;
            reboundMethod.__reactBoundMethod = method;
            reboundMethod.__reactBoundArguments = args;
            return reboundMethod;
          };
        }
        return boundMethod;
      }
      function bindAutoBindMethods(component) {
        for (var autoBindKey in component.__reactAutoBindMap) {
          if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
            var method = component.__reactAutoBindMap[autoBindKey];
            component[autoBindKey] = bindAutoBindMethod(component, method);
          }
        }
      }
      var ReactClassMixin = {
        /**
         * TODO: This will be deprecated because state should always keep a consistent
         * type signature and the only use case for this, is to avoid that.
         */
        replaceState: function(newState, callback) {
          this.updater.enqueueReplaceState(this, newState);
          if (callback) {
            this.updater.enqueueCallback(this, callback);
          }
        },
        /**
         * Checks whether or not this composite component is mounted.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function() {
          return this.updater.isMounted(this);
        },
        /**
         * Sets a subset of the props.
         *
         * @param {object} partialProps Subset of the next props.
         * @param {?function} callback Called after props are updated.
         * @final
         * @public
         * @deprecated
         */
        setProps: function(partialProps, callback) {
          if (false) {
            warnSetProps();
          }
          this.updater.enqueueSetProps(this, partialProps);
          if (callback) {
            this.updater.enqueueCallback(this, callback);
          }
        },
        /**
         * Replace all the props.
         *
         * @param {object} newProps Subset of the next props.
         * @param {?function} callback Called after props are updated.
         * @final
         * @public
         * @deprecated
         */
        replaceProps: function(newProps, callback) {
          if (false) {
            warnSetProps();
          }
          this.updater.enqueueReplaceProps(this, newProps);
          if (callback) {
            this.updater.enqueueCallback(this, callback);
          }
        }
      };
      var ReactClassComponent = function() {
      };
      assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
      var ReactClass = {
        /**
         * Creates a composite component class given a class specification.
         *
         * @param {object} spec Class specification (which must define `render`).
         * @return {function} Component constructor function.
         * @public
         */
        createClass: function(spec) {
          var Constructor = function(props, context, updater) {
            if (false) {
              false ? warning(this instanceof Constructor, "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory") : void 0;
            }
            if (this.__reactAutoBindMap) {
              bindAutoBindMethods(this);
            }
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
            this.state = null;
            var initialState = this.getInitialState ? this.getInitialState() : null;
            if (false) {
              if (typeof initialState === "undefined" && this.getInitialState._isMockFunction) {
                initialState = null;
              }
            }
            !(typeof initialState === "object" && !Array.isArray(initialState)) ? false ? invariant(false, "%s.getInitialState(): must return an object or null", Constructor.displayName || "ReactCompositeComponent") : invariant(false) : void 0;
            this.state = initialState;
          };
          Constructor.prototype = new ReactClassComponent();
          Constructor.prototype.constructor = Constructor;
          injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
          mixSpecIntoComponent(Constructor, spec);
          if (Constructor.getDefaultProps) {
            Constructor.defaultProps = Constructor.getDefaultProps();
          }
          if (false) {
            if (Constructor.getDefaultProps) {
              Constructor.getDefaultProps.isReactClassApproved = {};
            }
            if (Constructor.prototype.getInitialState) {
              Constructor.prototype.getInitialState.isReactClassApproved = {};
            }
          }
          !Constructor.prototype.render ? false ? invariant(false, "createClass(...): Class specification must implement a `render` method.") : invariant(false) : void 0;
          if (false) {
            false ? warning(!Constructor.prototype.componentShouldUpdate, "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", spec.displayName || "A component") : void 0;
            false ? warning(!Constructor.prototype.componentWillRecieveProps, "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", spec.displayName || "A component") : void 0;
          }
          for (var methodName in ReactClassInterface) {
            if (!Constructor.prototype[methodName]) {
              Constructor.prototype[methodName] = null;
            }
          }
          return Constructor;
        },
        injection: {
          injectMixin: function(mixin) {
            injectedMixins.push(mixin);
          }
        }
      };
      module.exports = ReactClass;
    }
  });

  // node_modules/react/lib/ReactInjection.js
  var require_ReactInjection = __commonJS({
    "node_modules/react/lib/ReactInjection.js"(exports, module) {
      "use strict";
      var DOMProperty = require_DOMProperty();
      var EventPluginHub = require_EventPluginHub();
      var ReactComponentEnvironment = require_ReactComponentEnvironment();
      var ReactClass = require_ReactClass();
      var ReactEmptyComponent = require_ReactEmptyComponent();
      var ReactBrowserEventEmitter = require_ReactBrowserEventEmitter();
      var ReactNativeComponent = require_ReactNativeComponent();
      var ReactPerf = require_ReactPerf();
      var ReactRootIndex = require_ReactRootIndex();
      var ReactUpdates = require_ReactUpdates();
      var ReactInjection = {
        Component: ReactComponentEnvironment.injection,
        Class: ReactClass.injection,
        DOMProperty: DOMProperty.injection,
        EmptyComponent: ReactEmptyComponent.injection,
        EventPluginHub: EventPluginHub.injection,
        EventEmitter: ReactBrowserEventEmitter.injection,
        NativeComponent: ReactNativeComponent.injection,
        Perf: ReactPerf.injection,
        RootIndex: ReactRootIndex.injection,
        Updates: ReactUpdates.injection
      };
      module.exports = ReactInjection;
    }
  });

  // node_modules/react/lib/getNodeForCharacterOffset.js
  var require_getNodeForCharacterOffset = __commonJS({
    "node_modules/react/lib/getNodeForCharacterOffset.js"(exports, module) {
      "use strict";
      function getLeafNode(node) {
        while (node && node.firstChild) {
          node = node.firstChild;
        }
        return node;
      }
      function getSiblingNode(node) {
        while (node) {
          if (node.nextSibling) {
            return node.nextSibling;
          }
          node = node.parentNode;
        }
      }
      function getNodeForCharacterOffset(root, offset) {
        var node = getLeafNode(root);
        var nodeStart = 0;
        var nodeEnd = 0;
        while (node) {
          if (node.nodeType === 3) {
            nodeEnd = nodeStart + node.textContent.length;
            if (nodeStart <= offset && nodeEnd >= offset) {
              return {
                node,
                offset: offset - nodeStart
              };
            }
            nodeStart = nodeEnd;
          }
          node = getLeafNode(getSiblingNode(node));
        }
      }
      module.exports = getNodeForCharacterOffset;
    }
  });

  // node_modules/react/lib/ReactDOMSelection.js
  var require_ReactDOMSelection = __commonJS({
    "node_modules/react/lib/ReactDOMSelection.js"(exports, module) {
      "use strict";
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var getNodeForCharacterOffset = require_getNodeForCharacterOffset();
      var getTextContentAccessor = require_getTextContentAccessor();
      function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
        return anchorNode === focusNode && anchorOffset === focusOffset;
      }
      function getIEOffsets(node) {
        var selection = document.selection;
        var selectedRange = selection.createRange();
        var selectedLength = selectedRange.text.length;
        var fromStart = selectedRange.duplicate();
        fromStart.moveToElementText(node);
        fromStart.setEndPoint("EndToStart", selectedRange);
        var startOffset = fromStart.text.length;
        var endOffset = startOffset + selectedLength;
        return {
          start: startOffset,
          end: endOffset
        };
      }
      function getModernOffsets(node) {
        var selection = window.getSelection && window.getSelection();
        if (!selection || selection.rangeCount === 0) {
          return null;
        }
        var anchorNode = selection.anchorNode;
        var anchorOffset = selection.anchorOffset;
        var focusNode = selection.focusNode;
        var focusOffset = selection.focusOffset;
        var currentRange = selection.getRangeAt(0);
        try {
          currentRange.startContainer.nodeType;
          currentRange.endContainer.nodeType;
        } catch (e) {
          return null;
        }
        var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
        var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
        var tempRange = currentRange.cloneRange();
        tempRange.selectNodeContents(node);
        tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
        var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
        var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
        var end = start + rangeLength;
        var detectionRange = document.createRange();
        detectionRange.setStart(anchorNode, anchorOffset);
        detectionRange.setEnd(focusNode, focusOffset);
        var isBackward = detectionRange.collapsed;
        return {
          start: isBackward ? end : start,
          end: isBackward ? start : end
        };
      }
      function setIEOffsets(node, offsets) {
        var range = document.selection.createRange().duplicate();
        var start, end;
        if (typeof offsets.end === "undefined") {
          start = offsets.start;
          end = start;
        } else if (offsets.start > offsets.end) {
          start = offsets.end;
          end = offsets.start;
        } else {
          start = offsets.start;
          end = offsets.end;
        }
        range.moveToElementText(node);
        range.moveStart("character", start);
        range.setEndPoint("EndToStart", range);
        range.moveEnd("character", end - start);
        range.select();
      }
      function setModernOffsets(node, offsets) {
        if (!window.getSelection) {
          return;
        }
        var selection = window.getSelection();
        var length = node[getTextContentAccessor()].length;
        var start = Math.min(offsets.start, length);
        var end = typeof offsets.end === "undefined" ? start : Math.min(offsets.end, length);
        if (!selection.extend && start > end) {
          var temp = end;
          end = start;
          start = temp;
        }
        var startMarker = getNodeForCharacterOffset(node, start);
        var endMarker = getNodeForCharacterOffset(node, end);
        if (startMarker && endMarker) {
          var range = document.createRange();
          range.setStart(startMarker.node, startMarker.offset);
          selection.removeAllRanges();
          if (start > end) {
            selection.addRange(range);
            selection.extend(endMarker.node, endMarker.offset);
          } else {
            range.setEnd(endMarker.node, endMarker.offset);
            selection.addRange(range);
          }
        }
      }
      var useIEOffsets = ExecutionEnvironment.canUseDOM && "selection" in document && !("getSelection" in window);
      var ReactDOMSelection = {
        /**
         * @param {DOMElement} node
         */
        getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
        /**
         * @param {DOMElement|DOMTextNode} node
         * @param {object} offsets
         */
        setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
      };
      module.exports = ReactDOMSelection;
    }
  });

  // node_modules/fbjs/lib/getActiveElement.js
  var require_getActiveElement = __commonJS({
    "node_modules/fbjs/lib/getActiveElement.js"(exports, module) {
      "use strict";
      function getActiveElement() {
        if (typeof document === "undefined") {
          return null;
        }
        try {
          return document.activeElement || document.body;
        } catch (e) {
          return document.body;
        }
      }
      module.exports = getActiveElement;
    }
  });

  // node_modules/react/lib/ReactInputSelection.js
  var require_ReactInputSelection = __commonJS({
    "node_modules/react/lib/ReactInputSelection.js"(exports, module) {
      "use strict";
      var ReactDOMSelection = require_ReactDOMSelection();
      var containsNode = require_containsNode();
      var focusNode = require_focusNode();
      var getActiveElement = require_getActiveElement();
      function isInDocument(node) {
        return containsNode(document.documentElement, node);
      }
      var ReactInputSelection = {
        hasSelectionCapabilities: function(elem) {
          var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
          return nodeName && (nodeName === "input" && elem.type === "text" || nodeName === "textarea" || elem.contentEditable === "true");
        },
        getSelectionInformation: function() {
          var focusedElem = getActiveElement();
          return {
            focusedElem,
            selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
          };
        },
        /**
         * @restoreSelection: If any selection information was potentially lost,
         * restore it. This is useful when performing operations that could remove dom
         * nodes and place them back in, resulting in focus being lost.
         */
        restoreSelection: function(priorSelectionInformation) {
          var curFocusedElem = getActiveElement();
          var priorFocusedElem = priorSelectionInformation.focusedElem;
          var priorSelectionRange = priorSelectionInformation.selectionRange;
          if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
            if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
              ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
            }
            focusNode(priorFocusedElem);
          }
        },
        /**
         * @getSelection: Gets the selection bounds of a focused textarea, input or
         * contentEditable node.
         * -@input: Look up selection bounds of this input
         * -@return {start: selectionStart, end: selectionEnd}
         */
        getSelection: function(input) {
          var selection;
          if ("selectionStart" in input) {
            selection = {
              start: input.selectionStart,
              end: input.selectionEnd
            };
          } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === "input")) {
            var range = document.selection.createRange();
            if (range.parentElement() === input) {
              selection = {
                start: -range.moveStart("character", -input.value.length),
                end: -range.moveEnd("character", -input.value.length)
              };
            }
          } else {
            selection = ReactDOMSelection.getOffsets(input);
          }
          return selection || { start: 0, end: 0 };
        },
        /**
         * @setSelection: Sets the selection bounds of a textarea or input and focuses
         * the input.
         * -@input     Set selection bounds of this input or textarea
         * -@offsets   Object of same form that is returned from get*
         */
        setSelection: function(input, offsets) {
          var start = offsets.start;
          var end = offsets.end;
          if (typeof end === "undefined") {
            end = start;
          }
          if ("selectionStart" in input) {
            input.selectionStart = start;
            input.selectionEnd = Math.min(end, input.value.length);
          } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === "input")) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveStart("character", start);
            range.moveEnd("character", end - start);
            range.select();
          } else {
            ReactDOMSelection.setOffsets(input, offsets);
          }
        }
      };
      module.exports = ReactInputSelection;
    }
  });

  // node_modules/react/lib/ReactReconcileTransaction.js
  var require_ReactReconcileTransaction = __commonJS({
    "node_modules/react/lib/ReactReconcileTransaction.js"(exports, module) {
      "use strict";
      var CallbackQueue = require_CallbackQueue();
      var PooledClass = require_PooledClass();
      var ReactBrowserEventEmitter = require_ReactBrowserEventEmitter();
      var ReactDOMFeatureFlags = require_ReactDOMFeatureFlags();
      var ReactInputSelection = require_ReactInputSelection();
      var Transaction = require_Transaction();
      var assign = require_Object_assign();
      var SELECTION_RESTORATION = {
        /**
         * @return {Selection} Selection information.
         */
        initialize: ReactInputSelection.getSelectionInformation,
        /**
         * @param {Selection} sel Selection information returned from `initialize`.
         */
        close: ReactInputSelection.restoreSelection
      };
      var EVENT_SUPPRESSION = {
        /**
         * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
         * the reconciliation.
         */
        initialize: function() {
          var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
          ReactBrowserEventEmitter.setEnabled(false);
          return currentlyEnabled;
        },
        /**
         * @param {boolean} previouslyEnabled Enabled status of
         *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
         *   restores the previous value.
         */
        close: function(previouslyEnabled) {
          ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
        }
      };
      var ON_DOM_READY_QUEUEING = {
        /**
         * Initializes the internal `onDOMReady` queue.
         */
        initialize: function() {
          this.reactMountReady.reset();
        },
        /**
         * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
         */
        close: function() {
          this.reactMountReady.notifyAll();
        }
      };
      var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
      function ReactReconcileTransaction(forceHTML) {
        this.reinitializeTransaction();
        this.renderToStaticMarkup = false;
        this.reactMountReady = CallbackQueue.getPooled(null);
        this.useCreateElement = !forceHTML && ReactDOMFeatureFlags.useCreateElement;
      }
      var Mixin = {
        /**
         * @see Transaction
         * @abstract
         * @final
         * @return {array<object>} List of operation wrap procedures.
         *   TODO: convert to array<TransactionWrapper>
         */
        getTransactionWrappers: function() {
          return TRANSACTION_WRAPPERS;
        },
        /**
         * @return {object} The queue to collect `onDOMReady` callbacks with.
         */
        getReactMountReady: function() {
          return this.reactMountReady;
        },
        /**
         * `PooledClass` looks for this, and will invoke this before allowing this
         * instance to be reused.
         */
        destructor: function() {
          CallbackQueue.release(this.reactMountReady);
          this.reactMountReady = null;
        }
      };
      assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
      PooledClass.addPoolingTo(ReactReconcileTransaction);
      module.exports = ReactReconcileTransaction;
    }
  });

  // node_modules/react/lib/SelectEventPlugin.js
  var require_SelectEventPlugin = __commonJS({
    "node_modules/react/lib/SelectEventPlugin.js"(exports, module) {
      "use strict";
      var EventConstants = require_EventConstants();
      var EventPropagators = require_EventPropagators();
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var ReactInputSelection = require_ReactInputSelection();
      var SyntheticEvent = require_SyntheticEvent();
      var getActiveElement = require_getActiveElement();
      var isTextInputElement = require_isTextInputElement();
      var keyOf = require_keyOf();
      var shallowEqual = require_shallowEqual();
      var topLevelTypes = EventConstants.topLevelTypes;
      var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && "documentMode" in document && document.documentMode <= 11;
      var eventTypes = {
        select: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onSelect: null }),
            captured: keyOf({ onSelectCapture: null })
          },
          dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
        }
      };
      var activeElement = null;
      var activeElementID = null;
      var lastSelection = null;
      var mouseDown = false;
      var hasListener = false;
      var ON_SELECT_KEY = keyOf({ onSelect: null });
      function getSelection(node) {
        if ("selectionStart" in node && ReactInputSelection.hasSelectionCapabilities(node)) {
          return {
            start: node.selectionStart,
            end: node.selectionEnd
          };
        } else if (window.getSelection) {
          var selection = window.getSelection();
          return {
            anchorNode: selection.anchorNode,
            anchorOffset: selection.anchorOffset,
            focusNode: selection.focusNode,
            focusOffset: selection.focusOffset
          };
        } else if (document.selection) {
          var range = document.selection.createRange();
          return {
            parentElement: range.parentElement(),
            text: range.text,
            top: range.boundingTop,
            left: range.boundingLeft
          };
        }
      }
      function constructSelectEvent(nativeEvent, nativeEventTarget) {
        if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
          return null;
        }
        var currentSelection = getSelection(activeElement);
        if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
          lastSelection = currentSelection;
          var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent, nativeEventTarget);
          syntheticEvent.type = "select";
          syntheticEvent.target = activeElement;
          EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
          return syntheticEvent;
        }
        return null;
      }
      var SelectEventPlugin = {
        eventTypes,
        /**
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {DOMEventTarget} topLevelTarget The listening component root node.
         * @param {string} topLevelTargetID ID of `topLevelTarget`.
         * @param {object} nativeEvent Native browser event.
         * @return {*} An accumulation of synthetic events.
         * @see {EventPluginHub.extractEvents}
         */
        extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
          if (!hasListener) {
            return null;
          }
          switch (topLevelType) {
            // Track the input node that has focus.
            case topLevelTypes.topFocus:
              if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === "true") {
                activeElement = topLevelTarget;
                activeElementID = topLevelTargetID;
                lastSelection = null;
              }
              break;
            case topLevelTypes.topBlur:
              activeElement = null;
              activeElementID = null;
              lastSelection = null;
              break;
            // Don't fire the event while the user is dragging. This matches the
            // semantics of the native select event.
            case topLevelTypes.topMouseDown:
              mouseDown = true;
              break;
            case topLevelTypes.topContextMenu:
            case topLevelTypes.topMouseUp:
              mouseDown = false;
              return constructSelectEvent(nativeEvent, nativeEventTarget);
            // Chrome and IE fire non-standard event when selection is changed (and
            // sometimes when it hasn't). IE's event fires out of order with respect
            // to key and input events on deletion, so we discard it.
            //
            // Firefox doesn't support selectionchange, so check selection status
            // after each key entry. The selection changes after keydown and before
            // keyup, but we check on keydown as well in the case of holding down a
            // key, when multiple keydown events are fired but only one keyup is.
            // This is also our approach for IE handling, for the reason above.
            case topLevelTypes.topSelectionChange:
              if (skipSelectionChangeEvent) {
                break;
              }
            // falls through
            case topLevelTypes.topKeyDown:
            case topLevelTypes.topKeyUp:
              return constructSelectEvent(nativeEvent, nativeEventTarget);
          }
          return null;
        },
        didPutListener: function(id, registrationName, listener) {
          if (registrationName === ON_SELECT_KEY) {
            hasListener = true;
          }
        }
      };
      module.exports = SelectEventPlugin;
    }
  });

  // node_modules/react/lib/ServerReactRootIndex.js
  var require_ServerReactRootIndex = __commonJS({
    "node_modules/react/lib/ServerReactRootIndex.js"(exports, module) {
      "use strict";
      var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);
      var ServerReactRootIndex = {
        createReactRootIndex: function() {
          return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
        }
      };
      module.exports = ServerReactRootIndex;
    }
  });

  // node_modules/react/lib/SyntheticClipboardEvent.js
  var require_SyntheticClipboardEvent = __commonJS({
    "node_modules/react/lib/SyntheticClipboardEvent.js"(exports, module) {
      "use strict";
      var SyntheticEvent = require_SyntheticEvent();
      var ClipboardEventInterface = {
        clipboardData: function(event) {
          return "clipboardData" in event ? event.clipboardData : window.clipboardData;
        }
      };
      function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
      module.exports = SyntheticClipboardEvent;
    }
  });

  // node_modules/react/lib/SyntheticFocusEvent.js
  var require_SyntheticFocusEvent = __commonJS({
    "node_modules/react/lib/SyntheticFocusEvent.js"(exports, module) {
      "use strict";
      var SyntheticUIEvent = require_SyntheticUIEvent();
      var FocusEventInterface = {
        relatedTarget: null
      };
      function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
      module.exports = SyntheticFocusEvent;
    }
  });

  // node_modules/react/lib/getEventCharCode.js
  var require_getEventCharCode = __commonJS({
    "node_modules/react/lib/getEventCharCode.js"(exports, module) {
      "use strict";
      function getEventCharCode(nativeEvent) {
        var charCode;
        var keyCode = nativeEvent.keyCode;
        if ("charCode" in nativeEvent) {
          charCode = nativeEvent.charCode;
          if (charCode === 0 && keyCode === 13) {
            charCode = 13;
          }
        } else {
          charCode = keyCode;
        }
        if (charCode >= 32 || charCode === 13) {
          return charCode;
        }
        return 0;
      }
      module.exports = getEventCharCode;
    }
  });

  // node_modules/react/lib/getEventKey.js
  var require_getEventKey = __commonJS({
    "node_modules/react/lib/getEventKey.js"(exports, module) {
      "use strict";
      var getEventCharCode = require_getEventCharCode();
      var normalizeKey = {
        "Esc": "Escape",
        "Spacebar": " ",
        "Left": "ArrowLeft",
        "Up": "ArrowUp",
        "Right": "ArrowRight",
        "Down": "ArrowDown",
        "Del": "Delete",
        "Win": "OS",
        "Menu": "ContextMenu",
        "Apps": "ContextMenu",
        "Scroll": "ScrollLock",
        "MozPrintableKey": "Unidentified"
      };
      var translateToKey = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      function getEventKey(nativeEvent) {
        if (nativeEvent.key) {
          var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
          if (key !== "Unidentified") {
            return key;
          }
        }
        if (nativeEvent.type === "keypress") {
          var charCode = getEventCharCode(nativeEvent);
          return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
        }
        if (nativeEvent.type === "keydown" || nativeEvent.type === "keyup") {
          return translateToKey[nativeEvent.keyCode] || "Unidentified";
        }
        return "";
      }
      module.exports = getEventKey;
    }
  });

  // node_modules/react/lib/SyntheticKeyboardEvent.js
  var require_SyntheticKeyboardEvent = __commonJS({
    "node_modules/react/lib/SyntheticKeyboardEvent.js"(exports, module) {
      "use strict";
      var SyntheticUIEvent = require_SyntheticUIEvent();
      var getEventCharCode = require_getEventCharCode();
      var getEventKey = require_getEventKey();
      var getEventModifierState = require_getEventModifierState();
      var KeyboardEventInterface = {
        key: getEventKey,
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: getEventModifierState,
        // Legacy Interface
        charCode: function(event) {
          if (event.type === "keypress") {
            return getEventCharCode(event);
          }
          return 0;
        },
        keyCode: function(event) {
          if (event.type === "keydown" || event.type === "keyup") {
            return event.keyCode;
          }
          return 0;
        },
        which: function(event) {
          if (event.type === "keypress") {
            return getEventCharCode(event);
          }
          if (event.type === "keydown" || event.type === "keyup") {
            return event.keyCode;
          }
          return 0;
        }
      };
      function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
      module.exports = SyntheticKeyboardEvent;
    }
  });

  // node_modules/react/lib/SyntheticDragEvent.js
  var require_SyntheticDragEvent = __commonJS({
    "node_modules/react/lib/SyntheticDragEvent.js"(exports, module) {
      "use strict";
      var SyntheticMouseEvent = require_SyntheticMouseEvent();
      var DragEventInterface = {
        dataTransfer: null
      };
      function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
      module.exports = SyntheticDragEvent;
    }
  });

  // node_modules/react/lib/SyntheticTouchEvent.js
  var require_SyntheticTouchEvent = __commonJS({
    "node_modules/react/lib/SyntheticTouchEvent.js"(exports, module) {
      "use strict";
      var SyntheticUIEvent = require_SyntheticUIEvent();
      var getEventModifierState = require_getEventModifierState();
      var TouchEventInterface = {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: getEventModifierState
      };
      function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
      module.exports = SyntheticTouchEvent;
    }
  });

  // node_modules/react/lib/SyntheticWheelEvent.js
  var require_SyntheticWheelEvent = __commonJS({
    "node_modules/react/lib/SyntheticWheelEvent.js"(exports, module) {
      "use strict";
      var SyntheticMouseEvent = require_SyntheticMouseEvent();
      var WheelEventInterface = {
        deltaX: function(event) {
          return "deltaX" in event ? event.deltaX : (
            // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
            "wheelDeltaX" in event ? -event.wheelDeltaX : 0
          );
        },
        deltaY: function(event) {
          return "deltaY" in event ? event.deltaY : (
            // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
            "wheelDeltaY" in event ? -event.wheelDeltaY : (
              // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
              "wheelDelta" in event ? -event.wheelDelta : 0
            )
          );
        },
        deltaZ: null,
        // Browsers without "deltaMode" is reporting in raw wheel delta where one
        // notch on the scroll is always +/- 120, roughly equivalent to pixels.
        // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
        // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
        deltaMode: null
      };
      function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
        SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
      }
      SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
      module.exports = SyntheticWheelEvent;
    }
  });

  // node_modules/react/lib/SimpleEventPlugin.js
  var require_SimpleEventPlugin = __commonJS({
    "node_modules/react/lib/SimpleEventPlugin.js"(exports, module) {
      "use strict";
      var EventConstants = require_EventConstants();
      var EventListener = require_EventListener();
      var EventPropagators = require_EventPropagators();
      var ReactMount = require_ReactMount();
      var SyntheticClipboardEvent = require_SyntheticClipboardEvent();
      var SyntheticEvent = require_SyntheticEvent();
      var SyntheticFocusEvent = require_SyntheticFocusEvent();
      var SyntheticKeyboardEvent = require_SyntheticKeyboardEvent();
      var SyntheticMouseEvent = require_SyntheticMouseEvent();
      var SyntheticDragEvent = require_SyntheticDragEvent();
      var SyntheticTouchEvent = require_SyntheticTouchEvent();
      var SyntheticUIEvent = require_SyntheticUIEvent();
      var SyntheticWheelEvent = require_SyntheticWheelEvent();
      var emptyFunction = require_emptyFunction();
      var getEventCharCode = require_getEventCharCode();
      var invariant = require_invariant();
      var keyOf = require_keyOf();
      var topLevelTypes = EventConstants.topLevelTypes;
      var eventTypes = {
        abort: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onAbort: true }),
            captured: keyOf({ onAbortCapture: true })
          }
        },
        blur: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onBlur: true }),
            captured: keyOf({ onBlurCapture: true })
          }
        },
        canPlay: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onCanPlay: true }),
            captured: keyOf({ onCanPlayCapture: true })
          }
        },
        canPlayThrough: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onCanPlayThrough: true }),
            captured: keyOf({ onCanPlayThroughCapture: true })
          }
        },
        click: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onClick: true }),
            captured: keyOf({ onClickCapture: true })
          }
        },
        contextMenu: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onContextMenu: true }),
            captured: keyOf({ onContextMenuCapture: true })
          }
        },
        copy: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onCopy: true }),
            captured: keyOf({ onCopyCapture: true })
          }
        },
        cut: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onCut: true }),
            captured: keyOf({ onCutCapture: true })
          }
        },
        doubleClick: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDoubleClick: true }),
            captured: keyOf({ onDoubleClickCapture: true })
          }
        },
        drag: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDrag: true }),
            captured: keyOf({ onDragCapture: true })
          }
        },
        dragEnd: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDragEnd: true }),
            captured: keyOf({ onDragEndCapture: true })
          }
        },
        dragEnter: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDragEnter: true }),
            captured: keyOf({ onDragEnterCapture: true })
          }
        },
        dragExit: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDragExit: true }),
            captured: keyOf({ onDragExitCapture: true })
          }
        },
        dragLeave: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDragLeave: true }),
            captured: keyOf({ onDragLeaveCapture: true })
          }
        },
        dragOver: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDragOver: true }),
            captured: keyOf({ onDragOverCapture: true })
          }
        },
        dragStart: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDragStart: true }),
            captured: keyOf({ onDragStartCapture: true })
          }
        },
        drop: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDrop: true }),
            captured: keyOf({ onDropCapture: true })
          }
        },
        durationChange: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onDurationChange: true }),
            captured: keyOf({ onDurationChangeCapture: true })
          }
        },
        emptied: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onEmptied: true }),
            captured: keyOf({ onEmptiedCapture: true })
          }
        },
        encrypted: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onEncrypted: true }),
            captured: keyOf({ onEncryptedCapture: true })
          }
        },
        ended: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onEnded: true }),
            captured: keyOf({ onEndedCapture: true })
          }
        },
        error: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onError: true }),
            captured: keyOf({ onErrorCapture: true })
          }
        },
        focus: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onFocus: true }),
            captured: keyOf({ onFocusCapture: true })
          }
        },
        input: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onInput: true }),
            captured: keyOf({ onInputCapture: true })
          }
        },
        keyDown: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onKeyDown: true }),
            captured: keyOf({ onKeyDownCapture: true })
          }
        },
        keyPress: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onKeyPress: true }),
            captured: keyOf({ onKeyPressCapture: true })
          }
        },
        keyUp: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onKeyUp: true }),
            captured: keyOf({ onKeyUpCapture: true })
          }
        },
        load: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onLoad: true }),
            captured: keyOf({ onLoadCapture: true })
          }
        },
        loadedData: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onLoadedData: true }),
            captured: keyOf({ onLoadedDataCapture: true })
          }
        },
        loadedMetadata: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onLoadedMetadata: true }),
            captured: keyOf({ onLoadedMetadataCapture: true })
          }
        },
        loadStart: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onLoadStart: true }),
            captured: keyOf({ onLoadStartCapture: true })
          }
        },
        // Note: We do not allow listening to mouseOver events. Instead, use the
        // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
        mouseDown: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onMouseDown: true }),
            captured: keyOf({ onMouseDownCapture: true })
          }
        },
        mouseMove: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onMouseMove: true }),
            captured: keyOf({ onMouseMoveCapture: true })
          }
        },
        mouseOut: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onMouseOut: true }),
            captured: keyOf({ onMouseOutCapture: true })
          }
        },
        mouseOver: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onMouseOver: true }),
            captured: keyOf({ onMouseOverCapture: true })
          }
        },
        mouseUp: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onMouseUp: true }),
            captured: keyOf({ onMouseUpCapture: true })
          }
        },
        paste: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onPaste: true }),
            captured: keyOf({ onPasteCapture: true })
          }
        },
        pause: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onPause: true }),
            captured: keyOf({ onPauseCapture: true })
          }
        },
        play: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onPlay: true }),
            captured: keyOf({ onPlayCapture: true })
          }
        },
        playing: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onPlaying: true }),
            captured: keyOf({ onPlayingCapture: true })
          }
        },
        progress: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onProgress: true }),
            captured: keyOf({ onProgressCapture: true })
          }
        },
        rateChange: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onRateChange: true }),
            captured: keyOf({ onRateChangeCapture: true })
          }
        },
        reset: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onReset: true }),
            captured: keyOf({ onResetCapture: true })
          }
        },
        scroll: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onScroll: true }),
            captured: keyOf({ onScrollCapture: true })
          }
        },
        seeked: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onSeeked: true }),
            captured: keyOf({ onSeekedCapture: true })
          }
        },
        seeking: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onSeeking: true }),
            captured: keyOf({ onSeekingCapture: true })
          }
        },
        stalled: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onStalled: true }),
            captured: keyOf({ onStalledCapture: true })
          }
        },
        submit: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onSubmit: true }),
            captured: keyOf({ onSubmitCapture: true })
          }
        },
        suspend: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onSuspend: true }),
            captured: keyOf({ onSuspendCapture: true })
          }
        },
        timeUpdate: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onTimeUpdate: true }),
            captured: keyOf({ onTimeUpdateCapture: true })
          }
        },
        touchCancel: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onTouchCancel: true }),
            captured: keyOf({ onTouchCancelCapture: true })
          }
        },
        touchEnd: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onTouchEnd: true }),
            captured: keyOf({ onTouchEndCapture: true })
          }
        },
        touchMove: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onTouchMove: true }),
            captured: keyOf({ onTouchMoveCapture: true })
          }
        },
        touchStart: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onTouchStart: true }),
            captured: keyOf({ onTouchStartCapture: true })
          }
        },
        volumeChange: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onVolumeChange: true }),
            captured: keyOf({ onVolumeChangeCapture: true })
          }
        },
        waiting: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onWaiting: true }),
            captured: keyOf({ onWaitingCapture: true })
          }
        },
        wheel: {
          phasedRegistrationNames: {
            bubbled: keyOf({ onWheel: true }),
            captured: keyOf({ onWheelCapture: true })
          }
        }
      };
      var topLevelEventsToDispatchConfig = {
        topAbort: eventTypes.abort,
        topBlur: eventTypes.blur,
        topCanPlay: eventTypes.canPlay,
        topCanPlayThrough: eventTypes.canPlayThrough,
        topClick: eventTypes.click,
        topContextMenu: eventTypes.contextMenu,
        topCopy: eventTypes.copy,
        topCut: eventTypes.cut,
        topDoubleClick: eventTypes.doubleClick,
        topDrag: eventTypes.drag,
        topDragEnd: eventTypes.dragEnd,
        topDragEnter: eventTypes.dragEnter,
        topDragExit: eventTypes.dragExit,
        topDragLeave: eventTypes.dragLeave,
        topDragOver: eventTypes.dragOver,
        topDragStart: eventTypes.dragStart,
        topDrop: eventTypes.drop,
        topDurationChange: eventTypes.durationChange,
        topEmptied: eventTypes.emptied,
        topEncrypted: eventTypes.encrypted,
        topEnded: eventTypes.ended,
        topError: eventTypes.error,
        topFocus: eventTypes.focus,
        topInput: eventTypes.input,
        topKeyDown: eventTypes.keyDown,
        topKeyPress: eventTypes.keyPress,
        topKeyUp: eventTypes.keyUp,
        topLoad: eventTypes.load,
        topLoadedData: eventTypes.loadedData,
        topLoadedMetadata: eventTypes.loadedMetadata,
        topLoadStart: eventTypes.loadStart,
        topMouseDown: eventTypes.mouseDown,
        topMouseMove: eventTypes.mouseMove,
        topMouseOut: eventTypes.mouseOut,
        topMouseOver: eventTypes.mouseOver,
        topMouseUp: eventTypes.mouseUp,
        topPaste: eventTypes.paste,
        topPause: eventTypes.pause,
        topPlay: eventTypes.play,
        topPlaying: eventTypes.playing,
        topProgress: eventTypes.progress,
        topRateChange: eventTypes.rateChange,
        topReset: eventTypes.reset,
        topScroll: eventTypes.scroll,
        topSeeked: eventTypes.seeked,
        topSeeking: eventTypes.seeking,
        topStalled: eventTypes.stalled,
        topSubmit: eventTypes.submit,
        topSuspend: eventTypes.suspend,
        topTimeUpdate: eventTypes.timeUpdate,
        topTouchCancel: eventTypes.touchCancel,
        topTouchEnd: eventTypes.touchEnd,
        topTouchMove: eventTypes.touchMove,
        topTouchStart: eventTypes.touchStart,
        topVolumeChange: eventTypes.volumeChange,
        topWaiting: eventTypes.waiting,
        topWheel: eventTypes.wheel
      };
      for (type in topLevelEventsToDispatchConfig) {
        topLevelEventsToDispatchConfig[type].dependencies = [type];
      }
      var type;
      var ON_CLICK_KEY = keyOf({ onClick: null });
      var onClickListeners = {};
      var SimpleEventPlugin = {
        eventTypes,
        /**
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {DOMEventTarget} topLevelTarget The listening component root node.
         * @param {string} topLevelTargetID ID of `topLevelTarget`.
         * @param {object} nativeEvent Native browser event.
         * @return {*} An accumulation of synthetic events.
         * @see {EventPluginHub.extractEvents}
         */
        extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
          var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
          if (!dispatchConfig) {
            return null;
          }
          var EventConstructor;
          switch (topLevelType) {
            case topLevelTypes.topAbort:
            case topLevelTypes.topCanPlay:
            case topLevelTypes.topCanPlayThrough:
            case topLevelTypes.topDurationChange:
            case topLevelTypes.topEmptied:
            case topLevelTypes.topEncrypted:
            case topLevelTypes.topEnded:
            case topLevelTypes.topError:
            case topLevelTypes.topInput:
            case topLevelTypes.topLoad:
            case topLevelTypes.topLoadedData:
            case topLevelTypes.topLoadedMetadata:
            case topLevelTypes.topLoadStart:
            case topLevelTypes.topPause:
            case topLevelTypes.topPlay:
            case topLevelTypes.topPlaying:
            case topLevelTypes.topProgress:
            case topLevelTypes.topRateChange:
            case topLevelTypes.topReset:
            case topLevelTypes.topSeeked:
            case topLevelTypes.topSeeking:
            case topLevelTypes.topStalled:
            case topLevelTypes.topSubmit:
            case topLevelTypes.topSuspend:
            case topLevelTypes.topTimeUpdate:
            case topLevelTypes.topVolumeChange:
            case topLevelTypes.topWaiting:
              EventConstructor = SyntheticEvent;
              break;
            case topLevelTypes.topKeyPress:
              if (getEventCharCode(nativeEvent) === 0) {
                return null;
              }
            /* falls through */
            case topLevelTypes.topKeyDown:
            case topLevelTypes.topKeyUp:
              EventConstructor = SyntheticKeyboardEvent;
              break;
            case topLevelTypes.topBlur:
            case topLevelTypes.topFocus:
              EventConstructor = SyntheticFocusEvent;
              break;
            case topLevelTypes.topClick:
              if (nativeEvent.button === 2) {
                return null;
              }
            /* falls through */
            case topLevelTypes.topContextMenu:
            case topLevelTypes.topDoubleClick:
            case topLevelTypes.topMouseDown:
            case topLevelTypes.topMouseMove:
            case topLevelTypes.topMouseOut:
            case topLevelTypes.topMouseOver:
            case topLevelTypes.topMouseUp:
              EventConstructor = SyntheticMouseEvent;
              break;
            case topLevelTypes.topDrag:
            case topLevelTypes.topDragEnd:
            case topLevelTypes.topDragEnter:
            case topLevelTypes.topDragExit:
            case topLevelTypes.topDragLeave:
            case topLevelTypes.topDragOver:
            case topLevelTypes.topDragStart:
            case topLevelTypes.topDrop:
              EventConstructor = SyntheticDragEvent;
              break;
            case topLevelTypes.topTouchCancel:
            case topLevelTypes.topTouchEnd:
            case topLevelTypes.topTouchMove:
            case topLevelTypes.topTouchStart:
              EventConstructor = SyntheticTouchEvent;
              break;
            case topLevelTypes.topScroll:
              EventConstructor = SyntheticUIEvent;
              break;
            case topLevelTypes.topWheel:
              EventConstructor = SyntheticWheelEvent;
              break;
            case topLevelTypes.topCopy:
            case topLevelTypes.topCut:
            case topLevelTypes.topPaste:
              EventConstructor = SyntheticClipboardEvent;
              break;
          }
          !EventConstructor ? false ? invariant(false, "SimpleEventPlugin: Unhandled event type, `%s`.", topLevelType) : invariant(false) : void 0;
          var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent, nativeEventTarget);
          EventPropagators.accumulateTwoPhaseDispatches(event);
          return event;
        },
        didPutListener: function(id, registrationName, listener) {
          if (registrationName === ON_CLICK_KEY) {
            var node = ReactMount.getNode(id);
            if (!onClickListeners[id]) {
              onClickListeners[id] = EventListener.listen(node, "click", emptyFunction);
            }
          }
        },
        willDeleteListener: function(id, registrationName) {
          if (registrationName === ON_CLICK_KEY) {
            onClickListeners[id].remove();
            delete onClickListeners[id];
          }
        }
      };
      module.exports = SimpleEventPlugin;
    }
  });

  // node_modules/react/lib/SVGDOMPropertyConfig.js
  var require_SVGDOMPropertyConfig = __commonJS({
    "node_modules/react/lib/SVGDOMPropertyConfig.js"(exports, module) {
      "use strict";
      var DOMProperty = require_DOMProperty();
      var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
      var NS = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
      };
      var SVGDOMPropertyConfig = {
        Properties: {
          clipPath: MUST_USE_ATTRIBUTE,
          cx: MUST_USE_ATTRIBUTE,
          cy: MUST_USE_ATTRIBUTE,
          d: MUST_USE_ATTRIBUTE,
          dx: MUST_USE_ATTRIBUTE,
          dy: MUST_USE_ATTRIBUTE,
          fill: MUST_USE_ATTRIBUTE,
          fillOpacity: MUST_USE_ATTRIBUTE,
          fontFamily: MUST_USE_ATTRIBUTE,
          fontSize: MUST_USE_ATTRIBUTE,
          fx: MUST_USE_ATTRIBUTE,
          fy: MUST_USE_ATTRIBUTE,
          gradientTransform: MUST_USE_ATTRIBUTE,
          gradientUnits: MUST_USE_ATTRIBUTE,
          markerEnd: MUST_USE_ATTRIBUTE,
          markerMid: MUST_USE_ATTRIBUTE,
          markerStart: MUST_USE_ATTRIBUTE,
          offset: MUST_USE_ATTRIBUTE,
          opacity: MUST_USE_ATTRIBUTE,
          patternContentUnits: MUST_USE_ATTRIBUTE,
          patternUnits: MUST_USE_ATTRIBUTE,
          points: MUST_USE_ATTRIBUTE,
          preserveAspectRatio: MUST_USE_ATTRIBUTE,
          r: MUST_USE_ATTRIBUTE,
          rx: MUST_USE_ATTRIBUTE,
          ry: MUST_USE_ATTRIBUTE,
          spreadMethod: MUST_USE_ATTRIBUTE,
          stopColor: MUST_USE_ATTRIBUTE,
          stopOpacity: MUST_USE_ATTRIBUTE,
          stroke: MUST_USE_ATTRIBUTE,
          strokeDasharray: MUST_USE_ATTRIBUTE,
          strokeLinecap: MUST_USE_ATTRIBUTE,
          strokeOpacity: MUST_USE_ATTRIBUTE,
          strokeWidth: MUST_USE_ATTRIBUTE,
          textAnchor: MUST_USE_ATTRIBUTE,
          transform: MUST_USE_ATTRIBUTE,
          version: MUST_USE_ATTRIBUTE,
          viewBox: MUST_USE_ATTRIBUTE,
          x1: MUST_USE_ATTRIBUTE,
          x2: MUST_USE_ATTRIBUTE,
          x: MUST_USE_ATTRIBUTE,
          xlinkActuate: MUST_USE_ATTRIBUTE,
          xlinkArcrole: MUST_USE_ATTRIBUTE,
          xlinkHref: MUST_USE_ATTRIBUTE,
          xlinkRole: MUST_USE_ATTRIBUTE,
          xlinkShow: MUST_USE_ATTRIBUTE,
          xlinkTitle: MUST_USE_ATTRIBUTE,
          xlinkType: MUST_USE_ATTRIBUTE,
          xmlBase: MUST_USE_ATTRIBUTE,
          xmlLang: MUST_USE_ATTRIBUTE,
          xmlSpace: MUST_USE_ATTRIBUTE,
          y1: MUST_USE_ATTRIBUTE,
          y2: MUST_USE_ATTRIBUTE,
          y: MUST_USE_ATTRIBUTE
        },
        DOMAttributeNamespaces: {
          xlinkActuate: NS.xlink,
          xlinkArcrole: NS.xlink,
          xlinkHref: NS.xlink,
          xlinkRole: NS.xlink,
          xlinkShow: NS.xlink,
          xlinkTitle: NS.xlink,
          xlinkType: NS.xlink,
          xmlBase: NS.xml,
          xmlLang: NS.xml,
          xmlSpace: NS.xml
        },
        DOMAttributeNames: {
          clipPath: "clip-path",
          fillOpacity: "fill-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          gradientTransform: "gradientTransform",
          gradientUnits: "gradientUnits",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          patternContentUnits: "patternContentUnits",
          patternUnits: "patternUnits",
          preserveAspectRatio: "preserveAspectRatio",
          spreadMethod: "spreadMethod",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strokeDasharray: "stroke-dasharray",
          strokeLinecap: "stroke-linecap",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          textAnchor: "text-anchor",
          viewBox: "viewBox",
          xlinkActuate: "xlink:actuate",
          xlinkArcrole: "xlink:arcrole",
          xlinkHref: "xlink:href",
          xlinkRole: "xlink:role",
          xlinkShow: "xlink:show",
          xlinkTitle: "xlink:title",
          xlinkType: "xlink:type",
          xmlBase: "xml:base",
          xmlLang: "xml:lang",
          xmlSpace: "xml:space"
        }
      };
      module.exports = SVGDOMPropertyConfig;
    }
  });

  // node_modules/react/lib/ReactDefaultInjection.js
  var require_ReactDefaultInjection = __commonJS({
    "node_modules/react/lib/ReactDefaultInjection.js"(exports, module) {
      "use strict";
      var BeforeInputEventPlugin = require_BeforeInputEventPlugin();
      var ChangeEventPlugin = require_ChangeEventPlugin();
      var ClientReactRootIndex = require_ClientReactRootIndex();
      var DefaultEventPluginOrder = require_DefaultEventPluginOrder();
      var EnterLeaveEventPlugin = require_EnterLeaveEventPlugin();
      var ExecutionEnvironment = require_ExecutionEnvironment();
      var HTMLDOMPropertyConfig = require_HTMLDOMPropertyConfig();
      var ReactBrowserComponentMixin = require_ReactBrowserComponentMixin();
      var ReactComponentBrowserEnvironment = require_ReactComponentBrowserEnvironment();
      var ReactDefaultBatchingStrategy = require_ReactDefaultBatchingStrategy();
      var ReactDOMComponent = require_ReactDOMComponent();
      var ReactDOMTextComponent = require_ReactDOMTextComponent();
      var ReactEventListener = require_ReactEventListener();
      var ReactInjection = require_ReactInjection();
      var ReactInstanceHandles = require_ReactInstanceHandles();
      var ReactMount = require_ReactMount();
      var ReactReconcileTransaction = require_ReactReconcileTransaction();
      var SelectEventPlugin = require_SelectEventPlugin();
      var ServerReactRootIndex = require_ServerReactRootIndex();
      var SimpleEventPlugin = require_SimpleEventPlugin();
      var SVGDOMPropertyConfig = require_SVGDOMPropertyConfig();
      var alreadyInjected = false;
      function inject() {
        if (alreadyInjected) {
          return;
        }
        alreadyInjected = true;
        ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
        ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
        ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
        ReactInjection.EventPluginHub.injectMount(ReactMount);
        ReactInjection.EventPluginHub.injectEventPluginsByName({
          SimpleEventPlugin,
          EnterLeaveEventPlugin,
          ChangeEventPlugin,
          SelectEventPlugin,
          BeforeInputEventPlugin
        });
        ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);
        ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);
        ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);
        ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
        ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
        ReactInjection.EmptyComponent.injectEmptyComponent("noscript");
        ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
        ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
        ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);
        ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
        if (false) {
          var url = ExecutionEnvironment.canUseDOM && window.location.href || "";
          if (/[?&]react_perf\b/.test(url)) {
            var ReactDefaultPerf = null;
            ReactDefaultPerf.start();
          }
        }
      }
      module.exports = {
        inject
      };
    }
  });

  // node_modules/react/lib/ReactVersion.js
  var require_ReactVersion = __commonJS({
    "node_modules/react/lib/ReactVersion.js"(exports, module) {
      "use strict";
      module.exports = "0.14.8";
    }
  });

  // node_modules/react/lib/renderSubtreeIntoContainer.js
  var require_renderSubtreeIntoContainer = __commonJS({
    "node_modules/react/lib/renderSubtreeIntoContainer.js"(exports, module) {
      "use strict";
      var ReactMount = require_ReactMount();
      module.exports = ReactMount.renderSubtreeIntoContainer;
    }
  });

  // node_modules/react/lib/ReactDOM.js
  var require_ReactDOM = __commonJS({
    "node_modules/react/lib/ReactDOM.js"(exports, module) {
      "use strict";
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var ReactDOMTextComponent = require_ReactDOMTextComponent();
      var ReactDefaultInjection = require_ReactDefaultInjection();
      var ReactInstanceHandles = require_ReactInstanceHandles();
      var ReactMount = require_ReactMount();
      var ReactPerf = require_ReactPerf();
      var ReactReconciler = require_ReactReconciler();
      var ReactUpdates = require_ReactUpdates();
      var ReactVersion = require_ReactVersion();
      var findDOMNode = require_findDOMNode();
      var renderSubtreeIntoContainer = require_renderSubtreeIntoContainer();
      var warning = require_warning();
      ReactDefaultInjection.inject();
      var render = ReactPerf.measure("React", "render", ReactMount.render);
      var React = {
        findDOMNode,
        render,
        unmountComponentAtNode: ReactMount.unmountComponentAtNode,
        version: ReactVersion,
        /* eslint-disable camelcase */
        unstable_batchedUpdates: ReactUpdates.batchedUpdates,
        unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
          CurrentOwner: ReactCurrentOwner,
          InstanceHandles: ReactInstanceHandles,
          Mount: ReactMount,
          Reconciler: ReactReconciler,
          TextComponent: ReactDOMTextComponent
        });
      }
      if (false) {
        ExecutionEnvironment = null;
        if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
            if (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1) {
              console.debug("Download the React DevTools for a better development experience: https://fb.me/react-devtools");
            }
          }
          ieCompatibilityMode = document.documentMode && document.documentMode < 8;
          false ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the following tag to your HTML to prevent this from happening: <meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;
          expectedFeatures = [
            // shims
            Array.isArray,
            Array.prototype.every,
            Array.prototype.forEach,
            Array.prototype.indexOf,
            Array.prototype.map,
            Date.now,
            Function.prototype.bind,
            Object.keys,
            String.prototype.split,
            String.prototype.trim,
            // shams
            Object.create,
            Object.freeze
          ];
          for (i = 0; i < expectedFeatures.length; i++) {
            if (!expectedFeatures[i]) {
              console.error("One or more ES5 shim/shams expected by React are not available: https://fb.me/react-warning-polyfills");
              break;
            }
          }
        }
      }
      var ExecutionEnvironment;
      var ieCompatibilityMode;
      var expectedFeatures;
      var i;
      module.exports = React;
    }
  });

  // node_modules/react/lib/ReactServerBatchingStrategy.js
  var require_ReactServerBatchingStrategy = __commonJS({
    "node_modules/react/lib/ReactServerBatchingStrategy.js"(exports, module) {
      "use strict";
      var ReactServerBatchingStrategy = {
        isBatchingUpdates: false,
        batchedUpdates: function(callback) {
        }
      };
      module.exports = ReactServerBatchingStrategy;
    }
  });

  // node_modules/react/lib/ReactServerRenderingTransaction.js
  var require_ReactServerRenderingTransaction = __commonJS({
    "node_modules/react/lib/ReactServerRenderingTransaction.js"(exports, module) {
      "use strict";
      var PooledClass = require_PooledClass();
      var CallbackQueue = require_CallbackQueue();
      var Transaction = require_Transaction();
      var assign = require_Object_assign();
      var emptyFunction = require_emptyFunction();
      var ON_DOM_READY_QUEUEING = {
        /**
         * Initializes the internal `onDOMReady` queue.
         */
        initialize: function() {
          this.reactMountReady.reset();
        },
        close: emptyFunction
      };
      var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];
      function ReactServerRenderingTransaction(renderToStaticMarkup) {
        this.reinitializeTransaction();
        this.renderToStaticMarkup = renderToStaticMarkup;
        this.reactMountReady = CallbackQueue.getPooled(null);
        this.useCreateElement = false;
      }
      var Mixin = {
        /**
         * @see Transaction
         * @abstract
         * @final
         * @return {array} Empty list of operation wrap procedures.
         */
        getTransactionWrappers: function() {
          return TRANSACTION_WRAPPERS;
        },
        /**
         * @return {object} The queue to collect `onDOMReady` callbacks with.
         */
        getReactMountReady: function() {
          return this.reactMountReady;
        },
        /**
         * `PooledClass` looks for this, and will invoke this before allowing this
         * instance to be reused.
         */
        destructor: function() {
          CallbackQueue.release(this.reactMountReady);
          this.reactMountReady = null;
        }
      };
      assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);
      PooledClass.addPoolingTo(ReactServerRenderingTransaction);
      module.exports = ReactServerRenderingTransaction;
    }
  });

  // node_modules/react/lib/ReactServerRendering.js
  var require_ReactServerRendering = __commonJS({
    "node_modules/react/lib/ReactServerRendering.js"(exports, module) {
      "use strict";
      var ReactDefaultBatchingStrategy = require_ReactDefaultBatchingStrategy();
      var ReactElement = require_ReactElement();
      var ReactInstanceHandles = require_ReactInstanceHandles();
      var ReactMarkupChecksum = require_ReactMarkupChecksum();
      var ReactServerBatchingStrategy = require_ReactServerBatchingStrategy();
      var ReactServerRenderingTransaction = require_ReactServerRenderingTransaction();
      var ReactUpdates = require_ReactUpdates();
      var emptyObject = require_emptyObject();
      var instantiateReactComponent = require_instantiateReactComponent();
      var invariant = require_invariant();
      function renderToString(element) {
        !ReactElement.isValidElement(element) ? false ? invariant(false, "renderToString(): You must pass a valid ReactElement.") : invariant(false) : void 0;
        var transaction;
        try {
          ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);
          var id = ReactInstanceHandles.createReactRootID();
          transaction = ReactServerRenderingTransaction.getPooled(false);
          return transaction.perform(function() {
            var componentInstance = instantiateReactComponent(element, null);
            var markup = componentInstance.mountComponent(id, transaction, emptyObject);
            return ReactMarkupChecksum.addChecksumToMarkup(markup);
          }, null);
        } finally {
          ReactServerRenderingTransaction.release(transaction);
          ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
        }
      }
      function renderToStaticMarkup(element) {
        !ReactElement.isValidElement(element) ? false ? invariant(false, "renderToStaticMarkup(): You must pass a valid ReactElement.") : invariant(false) : void 0;
        var transaction;
        try {
          ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);
          var id = ReactInstanceHandles.createReactRootID();
          transaction = ReactServerRenderingTransaction.getPooled(true);
          return transaction.perform(function() {
            var componentInstance = instantiateReactComponent(element, null);
            return componentInstance.mountComponent(id, transaction, emptyObject);
          }, null);
        } finally {
          ReactServerRenderingTransaction.release(transaction);
          ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
        }
      }
      module.exports = {
        renderToString,
        renderToStaticMarkup
      };
    }
  });

  // node_modules/react/lib/ReactDOMServer.js
  var require_ReactDOMServer = __commonJS({
    "node_modules/react/lib/ReactDOMServer.js"(exports, module) {
      "use strict";
      var ReactDefaultInjection = require_ReactDefaultInjection();
      var ReactServerRendering = require_ReactServerRendering();
      var ReactVersion = require_ReactVersion();
      ReactDefaultInjection.inject();
      var ReactDOMServer = {
        renderToString: ReactServerRendering.renderToString,
        renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
        version: ReactVersion
      };
      module.exports = ReactDOMServer;
    }
  });

  // node_modules/react/lib/ReactElementValidator.js
  var require_ReactElementValidator = __commonJS({
    "node_modules/react/lib/ReactElementValidator.js"(exports, module) {
      "use strict";
      var ReactElement = require_ReactElement();
      var ReactPropTypeLocations = require_ReactPropTypeLocations();
      var ReactPropTypeLocationNames = require_ReactPropTypeLocationNames();
      var ReactCurrentOwner = require_ReactCurrentOwner();
      var canDefineProperty = require_canDefineProperty();
      var getIteratorFn = require_getIteratorFn();
      var invariant = require_invariant();
      var warning = require_warning();
      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            return " Check the render method of `" + name + "`.";
          }
        }
        return "";
      }
      var ownerHasKeyUseWarning = {};
      var loggedTypeFailures = {};
      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;
        var addenda = getAddendaForKeyUse("uniqueKey", element, parentType);
        if (addenda === null) {
          return;
        }
        false ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.%s%s%s', addenda.parentOrOwner || "", addenda.childOwner || "", addenda.url || "") : void 0;
      }
      function getAddendaForKeyUse(messageType, element, parentType) {
        var addendum = getDeclarationErrorAddendum();
        if (!addendum) {
          var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            addendum = " Check the top-level render call using <" + parentName + ">.";
          }
        }
        var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
        if (memoizer[addendum]) {
          return null;
        }
        memoizer[addendum] = true;
        var addenda = {
          parentOrOwner: addendum,
          url: " See https://fb.me/react-warning-keys for more information.",
          childOwner: null
        };
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          addenda.childOwner = " It was passed a child from " + element._owner.getName() + ".";
        }
        return addenda;
      }
      function validateChildKeys(node, parentType) {
        if (typeof node !== "object") {
          return;
        }
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (ReactElement.isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (ReactElement.isValidElement(node)) {
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (iteratorFn) {
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (ReactElement.isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
      function checkPropTypes(componentName, propTypes, props, location) {
        for (var propName in propTypes) {
          if (propTypes.hasOwnProperty(propName)) {
            var error;
            try {
              !(typeof propTypes[propName] === "function") ? false ? invariant(false, "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", componentName || "React class", ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
              error = propTypes[propName](props, propName, componentName, location);
            } catch (ex) {
              error = ex;
            }
            false ? warning(!error || error instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", ReactPropTypeLocationNames[location], propName, typeof error) : void 0;
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var addendum = getDeclarationErrorAddendum();
              false ? warning(false, "Failed propType: %s%s", error.message, addendum) : void 0;
            }
          }
        }
      }
      function validatePropTypes(element) {
        var componentClass = element.type;
        if (typeof componentClass !== "function") {
          return;
        }
        var name = componentClass.displayName || componentClass.name;
        if (componentClass.propTypes) {
          checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
        }
        if (typeof componentClass.getDefaultProps === "function") {
          false ? warning(componentClass.getDefaultProps.isReactClassApproved, "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.") : void 0;
        }
      }
      var ReactElementValidator = {
        createElement: function(type, props, children) {
          var validType = typeof type === "string" || typeof type === "function";
          false ? warning(validType, "React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).%s", getDeclarationErrorAddendum()) : void 0;
          var element = ReactElement.createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          validatePropTypes(element);
          return element;
        },
        createFactory: function(type) {
          var validatedFactory = ReactElementValidator.createElement.bind(null, type);
          validatedFactory.type = type;
          if (false) {
            if (canDefineProperty) {
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  false ? warning(false, "Factory.type is deprecated. Access the class directly before passing it to createFactory.") : void 0;
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
          }
          return validatedFactory;
        },
        cloneElement: function(element, props, children) {
          var newElement = ReactElement.cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
      };
      module.exports = ReactElementValidator;
    }
  });

  // node_modules/fbjs/lib/mapObject.js
  var require_mapObject = __commonJS({
    "node_modules/fbjs/lib/mapObject.js"(exports, module) {
      "use strict";
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function mapObject(object, callback, context) {
        if (!object) {
          return null;
        }
        var result = {};
        for (var name in object) {
          if (hasOwnProperty.call(object, name)) {
            result[name] = callback.call(context, object[name], name, object);
          }
        }
        return result;
      }
      module.exports = mapObject;
    }
  });

  // node_modules/react/lib/ReactDOMFactories.js
  var require_ReactDOMFactories = __commonJS({
    "node_modules/react/lib/ReactDOMFactories.js"(exports, module) {
      "use strict";
      var ReactElement = require_ReactElement();
      var ReactElementValidator = require_ReactElementValidator();
      var mapObject = require_mapObject();
      function createDOMFactory(tag) {
        if (false) {
          return ReactElementValidator.createFactory(tag);
        }
        return ReactElement.createFactory(tag);
      }
      var ReactDOMFactories = mapObject({
        a: "a",
        abbr: "abbr",
        address: "address",
        area: "area",
        article: "article",
        aside: "aside",
        audio: "audio",
        b: "b",
        base: "base",
        bdi: "bdi",
        bdo: "bdo",
        big: "big",
        blockquote: "blockquote",
        body: "body",
        br: "br",
        button: "button",
        canvas: "canvas",
        caption: "caption",
        cite: "cite",
        code: "code",
        col: "col",
        colgroup: "colgroup",
        data: "data",
        datalist: "datalist",
        dd: "dd",
        del: "del",
        details: "details",
        dfn: "dfn",
        dialog: "dialog",
        div: "div",
        dl: "dl",
        dt: "dt",
        em: "em",
        embed: "embed",
        fieldset: "fieldset",
        figcaption: "figcaption",
        figure: "figure",
        footer: "footer",
        form: "form",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        head: "head",
        header: "header",
        hgroup: "hgroup",
        hr: "hr",
        html: "html",
        i: "i",
        iframe: "iframe",
        img: "img",
        input: "input",
        ins: "ins",
        kbd: "kbd",
        keygen: "keygen",
        label: "label",
        legend: "legend",
        li: "li",
        link: "link",
        main: "main",
        map: "map",
        mark: "mark",
        menu: "menu",
        menuitem: "menuitem",
        meta: "meta",
        meter: "meter",
        nav: "nav",
        noscript: "noscript",
        object: "object",
        ol: "ol",
        optgroup: "optgroup",
        option: "option",
        output: "output",
        p: "p",
        param: "param",
        picture: "picture",
        pre: "pre",
        progress: "progress",
        q: "q",
        rp: "rp",
        rt: "rt",
        ruby: "ruby",
        s: "s",
        samp: "samp",
        script: "script",
        section: "section",
        select: "select",
        small: "small",
        source: "source",
        span: "span",
        strong: "strong",
        style: "style",
        sub: "sub",
        summary: "summary",
        sup: "sup",
        table: "table",
        tbody: "tbody",
        td: "td",
        textarea: "textarea",
        tfoot: "tfoot",
        th: "th",
        thead: "thead",
        time: "time",
        title: "title",
        tr: "tr",
        track: "track",
        u: "u",
        ul: "ul",
        "var": "var",
        video: "video",
        wbr: "wbr",
        // SVG
        circle: "circle",
        clipPath: "clipPath",
        defs: "defs",
        ellipse: "ellipse",
        g: "g",
        image: "image",
        line: "line",
        linearGradient: "linearGradient",
        mask: "mask",
        path: "path",
        pattern: "pattern",
        polygon: "polygon",
        polyline: "polyline",
        radialGradient: "radialGradient",
        rect: "rect",
        stop: "stop",
        svg: "svg",
        text: "text",
        tspan: "tspan"
      }, createDOMFactory);
      module.exports = ReactDOMFactories;
    }
  });

  // node_modules/react/lib/onlyChild.js
  var require_onlyChild = __commonJS({
    "node_modules/react/lib/onlyChild.js"(exports, module) {
      "use strict";
      var ReactElement = require_ReactElement();
      var invariant = require_invariant();
      function onlyChild(children) {
        !ReactElement.isValidElement(children) ? false ? invariant(false, "onlyChild must be passed a children with exactly one child.") : invariant(false) : void 0;
        return children;
      }
      module.exports = onlyChild;
    }
  });

  // node_modules/react/lib/ReactIsomorphic.js
  var require_ReactIsomorphic = __commonJS({
    "node_modules/react/lib/ReactIsomorphic.js"(exports, module) {
      "use strict";
      var ReactChildren = require_ReactChildren();
      var ReactComponent = require_ReactComponent();
      var ReactClass = require_ReactClass();
      var ReactDOMFactories = require_ReactDOMFactories();
      var ReactElement = require_ReactElement();
      var ReactElementValidator = require_ReactElementValidator();
      var ReactPropTypes = require_ReactPropTypes();
      var ReactVersion = require_ReactVersion();
      var assign = require_Object_assign();
      var onlyChild = require_onlyChild();
      var createElement = ReactElement.createElement;
      var createFactory = ReactElement.createFactory;
      var cloneElement = ReactElement.cloneElement;
      if (false) {
        createElement = ReactElementValidator.createElement;
        createFactory = ReactElementValidator.createFactory;
        cloneElement = ReactElementValidator.cloneElement;
      }
      var React = {
        // Modern
        Children: {
          map: ReactChildren.map,
          forEach: ReactChildren.forEach,
          count: ReactChildren.count,
          toArray: ReactChildren.toArray,
          only: onlyChild
        },
        Component: ReactComponent,
        createElement,
        cloneElement,
        isValidElement: ReactElement.isValidElement,
        // Classic
        PropTypes: ReactPropTypes,
        createClass: ReactClass.createClass,
        createFactory,
        createMixin: function(mixin) {
          return mixin;
        },
        // This looks DOM specific but these are actually isomorphic helpers
        // since they are just generating DOM strings.
        DOM: ReactDOMFactories,
        version: ReactVersion,
        // Hook for JSX spread, don't use this for anything else.
        __spread: assign
      };
      module.exports = React;
    }
  });

  // node_modules/react/lib/deprecated.js
  var require_deprecated = __commonJS({
    "node_modules/react/lib/deprecated.js"(exports, module) {
      "use strict";
      var assign = require_Object_assign();
      var warning = require_warning();
      function deprecated(fnName, newModule, newPackage, ctx, fn) {
        var warned = false;
        if (false) {
          var newFn = function() {
            false ? warning(
              warned,
              // Require examples in this string must be split to prevent React's
              // build tools from mistaking them for real requires.
              // Otherwise the build tools will attempt to build a '%s' module.
              "React.%s is deprecated. Please use %s.%s from require('%s') instead.",
              fnName,
              newModule,
              fnName,
              newPackage
            ) : void 0;
            warned = true;
            return fn.apply(ctx, arguments);
          };
          return assign(newFn, fn);
        }
        return fn;
      }
      module.exports = deprecated;
    }
  });

  // node_modules/react/lib/React.js
  var require_React = __commonJS({
    "node_modules/react/lib/React.js"(exports, module) {
      "use strict";
      var ReactDOM = require_ReactDOM();
      var ReactDOMServer = require_ReactDOMServer();
      var ReactIsomorphic = require_ReactIsomorphic();
      var assign = require_Object_assign();
      var deprecated = require_deprecated();
      var React = {};
      assign(React, ReactIsomorphic);
      assign(React, {
        // ReactDOM
        findDOMNode: deprecated("findDOMNode", "ReactDOM", "react-dom", ReactDOM, ReactDOM.findDOMNode),
        render: deprecated("render", "ReactDOM", "react-dom", ReactDOM, ReactDOM.render),
        unmountComponentAtNode: deprecated("unmountComponentAtNode", "ReactDOM", "react-dom", ReactDOM, ReactDOM.unmountComponentAtNode),
        // ReactDOMServer
        renderToString: deprecated("renderToString", "ReactDOMServer", "react-dom/server", ReactDOMServer, ReactDOMServer.renderToString),
        renderToStaticMarkup: deprecated("renderToStaticMarkup", "ReactDOMServer", "react-dom/server", ReactDOMServer, ReactDOMServer.renderToStaticMarkup)
      });
      React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOM;
      React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOMServer;
      module.exports = React;
    }
  });

  // node_modules/react/react.js
  var require_react = __commonJS({
    "node_modules/react/react.js"(exports, module) {
      "use strict";
      module.exports = require_React();
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      module.exports = require_ReactDOM();
    }
  });

  // node_modules/react-dom/server.js
  var require_server = __commonJS({
    "node_modules/react-dom/server.js"(exports, module) {
      "use strict";
      module.exports = require_ReactDOMServer();
    }
  });

  // bundle.js
  var PS = {};
  (function(exports) {
    "use strict";
    var Semigroupoid = function(compose2) {
      this.compose = compose2;
    };
    var semigroupoidFn = new Semigroupoid(function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    });
    var compose = function(dict) {
      return dict.compose;
    };
    exports["Semigroupoid"] = Semigroupoid;
    exports["compose"] = compose;
    exports["semigroupoidFn"] = semigroupoidFn;
  })(PS["Control.Semigroupoid"] = PS["Control.Semigroupoid"] || {});
  (function(exports) {
    "use strict";
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Category = function(__superclass_Control$dotSemigroupoid$dotSemigroupoid_0, id2) {
      this["__superclass_Control.Semigroupoid.Semigroupoid_0"] = __superclass_Control$dotSemigroupoid$dotSemigroupoid_0;
      this.id = id2;
    };
    var id = function(dict) {
      return dict.id;
    };
    var categoryFn = new Category(function() {
      return Control_Semigroupoid.semigroupoidFn;
    }, function(x) {
      return x;
    });
    exports["Category"] = Category;
    exports["id"] = id;
    exports["categoryFn"] = categoryFn;
  })(PS["Control.Category"] = PS["Control.Category"] || {});
  (function(exports) {
    "use strict";
    var Control_Category = PS["Control.Category"];
    var flip = function(f) {
      return function(b) {
        return function(a) {
          return f(a)(b);
        };
      };
    };
    var $$const = function(a) {
      return function(v) {
        return a;
      };
    };
    var apply = function(f) {
      return function(x) {
        return f(x);
      };
    };
    exports["apply"] = apply;
    exports["const"] = $$const;
    exports["flip"] = flip;
  })(PS["Data.Function"] = PS["Data.Function"] || {});
  (function(exports) {
    "use strict";
    exports.unit = {};
  })(PS["Data.Unit"] = PS["Data.Unit"] || {});
  (function(exports) {
    "use strict";
    exports.showNumberImpl = function(n) {
      var str = n.toString();
      return isNaN(str + ".0") ? str : str + ".0";
    };
    exports.showCharImpl = function(c) {
      var code = c.charCodeAt(0);
      if (code < 32 || code === 127) {
        switch (c) {
          case "\x07":
            return "'\\a'";
          case "\b":
            return "'\\b'";
          case "\f":
            return "'\\f'";
          case "\n":
            return "'\\n'";
          case "\r":
            return "'\\r'";
          case "	":
            return "'\\t'";
          case "\v":
            return "'\\v'";
        }
        return "'\\" + code.toString(10) + "'";
      }
      return c === "'" || c === "\\" ? "'\\" + c + "'" : "'" + c + "'";
    };
  })(PS["Data.Show"] = PS["Data.Show"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Show"];
    var Show = function(show2) {
      this.show = show2;
    };
    var showNumber = new Show($foreign.showNumberImpl);
    var showChar = new Show($foreign.showCharImpl);
    var show = function(dict) {
      return dict.show;
    };
    exports["Show"] = Show;
    exports["show"] = show;
    exports["showNumber"] = showNumber;
    exports["showChar"] = showChar;
  })(PS["Data.Show"] = PS["Data.Show"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Unit"];
    var Data_Show = PS["Data.Show"];
    exports["unit"] = $foreign.unit;
  })(PS["Data.Unit"] = PS["Data.Unit"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Functor"];
    var Data_Function = PS["Data.Function"];
    var Data_Unit = PS["Data.Unit"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Functor = function(map2) {
      this.map = map2;
    };
    var map = function(dict) {
      return dict.map;
    };
    var $$void = function(dictFunctor) {
      return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
    };
    var voidRight = function(dictFunctor) {
      return function(x) {
        return map(dictFunctor)(Data_Function["const"](x));
      };
    };
    var functorFn = new Functor(Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn));
    exports["Functor"] = Functor;
    exports["map"] = map;
    exports["void"] = $$void;
    exports["voidRight"] = voidRight;
    exports["functorFn"] = functorFn;
  })(PS["Data.Functor"] = PS["Data.Functor"] || {});
  (function(exports) {
    "use strict";
    exports.concatString = function(s1) {
      return function(s2) {
        return s1 + s2;
      };
    };
  })(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Semigroup"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Void = PS["Data.Void"];
    var Semigroup = function(append2) {
      this.append = append2;
    };
    var semigroupString = new Semigroup($foreign.concatString);
    var append = function(dict) {
      return dict.append;
    };
    exports["Semigroup"] = Semigroup;
    exports["append"] = append;
    exports["semigroupString"] = semigroupString;
  })(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
  (function(exports) {
    "use strict";
    var Data_Functor = PS["Data.Functor"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Alt = function(__superclass_Data$dotFunctor$dotFunctor_0, alt2) {
      this["__superclass_Data.Functor.Functor_0"] = __superclass_Data$dotFunctor$dotFunctor_0;
      this.alt = alt2;
    };
    var alt = function(dict) {
      return dict.alt;
    };
    exports["Alt"] = Alt;
    exports["alt"] = alt;
  })(PS["Control.Alt"] = PS["Control.Alt"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Control.Apply"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Function = PS["Data.Function"];
    var Control_Category = PS["Control.Category"];
    var Apply = function(__superclass_Data$dotFunctor$dotFunctor_0, apply2) {
      this["__superclass_Data.Functor.Functor_0"] = __superclass_Data$dotFunctor$dotFunctor_0;
      this.apply = apply2;
    };
    var apply = function(dict) {
      return dict.apply;
    };
    var applyFirst = function(dictApply) {
      return function(a) {
        return function(b) {
          return apply(dictApply)(Data_Functor.map(dictApply["__superclass_Data.Functor.Functor_0"]())(Data_Function["const"])(a))(b);
        };
      };
    };
    var applySecond = function(dictApply) {
      return function(a) {
        return function(b) {
          return apply(dictApply)(Data_Functor.map(dictApply["__superclass_Data.Functor.Functor_0"]())(Data_Function["const"](Control_Category.id(Control_Category.categoryFn)))(a))(b);
        };
      };
    };
    var lift2 = function(dictApply) {
      return function(f) {
        return function(a) {
          return function(b) {
            return apply(dictApply)(Data_Functor.map(dictApply["__superclass_Data.Functor.Functor_0"]())(f)(a))(b);
          };
        };
      };
    };
    exports["Apply"] = Apply;
    exports["apply"] = apply;
    exports["applyFirst"] = applyFirst;
    exports["applySecond"] = applySecond;
    exports["lift2"] = lift2;
  })(PS["Control.Apply"] = PS["Control.Apply"] || {});
  (function(exports) {
    "use strict";
    var Control_Apply = PS["Control.Apply"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Unit = PS["Data.Unit"];
    var Applicative = function(__superclass_Control$dotApply$dotApply_0, pure2) {
      this["__superclass_Control.Apply.Apply_0"] = __superclass_Control$dotApply$dotApply_0;
      this.pure = pure2;
    };
    var pure = function(dict) {
      return dict.pure;
    };
    var when = function(dictApplicative) {
      return function(v) {
        return function(v1) {
          if (v) {
            return v1;
          }
          ;
          if (!v) {
            return pure(dictApplicative)(Data_Unit.unit);
          }
          ;
          throw new Error("Failed pattern match at Control.Applicative line 58, column 1 - line 58, column 16: " + [v.constructor.name, v1.constructor.name]);
        };
      };
    };
    var liftA1 = function(dictApplicative) {
      return function(f) {
        return function(a) {
          return Control_Apply.apply(dictApplicative["__superclass_Control.Apply.Apply_0"]())(pure(dictApplicative)(f))(a);
        };
      };
    };
    exports["Applicative"] = Applicative;
    exports["liftA1"] = liftA1;
    exports["pure"] = pure;
    exports["when"] = when;
  })(PS["Control.Applicative"] = PS["Control.Applicative"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Control.Bind"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Category = PS["Control.Category"];
    var Data_Function = PS["Data.Function"];
    var Data_Functor = PS["Data.Functor"];
    var Bind = function(__superclass_Control$dotApply$dotApply_0, bind2) {
      this["__superclass_Control.Apply.Apply_0"] = __superclass_Control$dotApply$dotApply_0;
      this.bind = bind2;
    };
    var bind = function(dict) {
      return dict.bind;
    };
    var bindFlipped = function(dictBind) {
      return Data_Function.flip(bind(dictBind));
    };
    var composeKleisliFlipped = function(dictBind) {
      return function(f) {
        return function(g) {
          return function(a) {
            return bindFlipped(dictBind)(f)(g(a));
          };
        };
      };
    };
    exports["Bind"] = Bind;
    exports["bind"] = bind;
    exports["bindFlipped"] = bindFlipped;
    exports["composeKleisliFlipped"] = composeKleisliFlipped;
  })(PS["Control.Bind"] = PS["Control.Bind"] || {});
  (function(exports) {
    "use strict";
    exports.unsafeCoerce = function(x) {
      return x;
    };
  })(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Unsafe.Coerce"];
    exports["unsafeCoerce"] = $foreign.unsafeCoerce;
  })(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
  (function(exports) {
    "use strict";
    var Unsafe_Coerce = PS["Unsafe.Coerce"];
    var runExists = Unsafe_Coerce.unsafeCoerce;
    var mkExists = Unsafe_Coerce.unsafeCoerce;
    exports["mkExists"] = mkExists;
    exports["runExists"] = runExists;
  })(PS["Data.Exists"] = PS["Data.Exists"] || {});
  (function(exports) {
    "use strict";
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Bind = PS["Control.Bind"];
    var Data_Functor = PS["Data.Functor"];
    var Monad = function(__superclass_Control$dotApplicative$dotApplicative_0, __superclass_Control$dotBind$dotBind_1) {
      this["__superclass_Control.Applicative.Applicative_0"] = __superclass_Control$dotApplicative$dotApplicative_0;
      this["__superclass_Control.Bind.Bind_1"] = __superclass_Control$dotBind$dotBind_1;
    };
    var ap = function(dictMonad) {
      return function(f) {
        return function(a) {
          return Control_Bind.bind(dictMonad["__superclass_Control.Bind.Bind_1"]())(f)(function(v) {
            return Control_Bind.bind(dictMonad["__superclass_Control.Bind.Bind_1"]())(a)(function(v1) {
              return Control_Applicative.pure(dictMonad["__superclass_Control.Applicative.Applicative_0"]())(v(v1));
            });
          });
        };
      };
    };
    exports["Monad"] = Monad;
    exports["ap"] = ap;
  })(PS["Control.Monad"] = PS["Control.Monad"] || {});
  (function(exports) {
    "use strict";
    var Control_Category = PS["Control.Category"];
    var Bifunctor = function(bimap2) {
      this.bimap = bimap2;
    };
    var bimap = function(dict) {
      return dict.bimap;
    };
    var lmap = function(dictBifunctor) {
      return function(f) {
        return bimap(dictBifunctor)(f)(Control_Category.id(Control_Category.categoryFn));
      };
    };
    var rmap = function(dictBifunctor) {
      return bimap(dictBifunctor)(Control_Category.id(Control_Category.categoryFn));
    };
    exports["Bifunctor"] = Bifunctor;
    exports["bimap"] = bimap;
    exports["lmap"] = lmap;
    exports["rmap"] = rmap;
  })(PS["Data.Bifunctor"] = PS["Data.Bifunctor"] || {});
  (function(exports) {
    "use strict";
    exports.topInt = 2147483647;
    exports.bottomInt = -2147483648;
  })(PS["Data.Bounded"] = PS["Data.Bounded"] || {});
  (function(exports) {
    "use strict";
    exports.refEq = function(r1) {
      return function(r2) {
        return r1 === r2;
      };
    };
  })(PS["Data.Eq"] = PS["Data.Eq"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Eq"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Void = PS["Data.Void"];
    var Eq = function(eq2) {
      this.eq = eq2;
    };
    var eqString = new Eq($foreign.refEq);
    var eqInt = new Eq($foreign.refEq);
    var eqBoolean = new Eq($foreign.refEq);
    var eq = function(dict) {
      return dict.eq;
    };
    var notEq = function(dictEq) {
      return function(x) {
        return function(y) {
          return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
        };
      };
    };
    exports["Eq"] = Eq;
    exports["eq"] = eq;
    exports["notEq"] = notEq;
    exports["eqBoolean"] = eqBoolean;
    exports["eqInt"] = eqInt;
    exports["eqString"] = eqString;
  })(PS["Data.Eq"] = PS["Data.Eq"] || {});
  (function(exports) {
    "use strict";
    exports.unsafeCompareImpl = function(lt) {
      return function(eq) {
        return function(gt) {
          return function(x) {
            return function(y) {
              return x < y ? lt : x > y ? gt : eq;
            };
          };
        };
      };
    };
  })(PS["Data.Ord.Unsafe"] = PS["Data.Ord.Unsafe"] || {});
  (function(exports) {
    "use strict";
    var Data_Eq = PS["Data.Eq"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_Show = PS["Data.Show"];
    var LT = (function() {
      function LT2() {
      }
      ;
      LT2.value = new LT2();
      return LT2;
    })();
    var GT = (function() {
      function GT2() {
      }
      ;
      GT2.value = new GT2();
      return GT2;
    })();
    var EQ = (function() {
      function EQ2() {
      }
      ;
      EQ2.value = new EQ2();
      return EQ2;
    })();
    var eqOrdering = new Data_Eq.Eq(function(v) {
      return function(v1) {
        if (v instanceof LT && v1 instanceof LT) {
          return true;
        }
        ;
        if (v instanceof GT && v1 instanceof GT) {
          return true;
        }
        ;
        if (v instanceof EQ && v1 instanceof EQ) {
          return true;
        }
        ;
        return false;
      };
    });
    exports["LT"] = LT;
    exports["GT"] = GT;
    exports["EQ"] = EQ;
    exports["eqOrdering"] = eqOrdering;
  })(PS["Data.Ordering"] = PS["Data.Ordering"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Ord.Unsafe"];
    var Data_Ordering = PS["Data.Ordering"];
    var unsafeCompare = $foreign.unsafeCompareImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value);
    exports["unsafeCompare"] = unsafeCompare;
  })(PS["Data.Ord.Unsafe"] = PS["Data.Ord.Unsafe"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Ord"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Function = PS["Data.Function"];
    var Data_Ord_Unsafe = PS["Data.Ord.Unsafe"];
    var Data_Ordering = PS["Data.Ordering"];
    var Data_Ring = PS["Data.Ring"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Void = PS["Data.Void"];
    var Data_Semiring = PS["Data.Semiring"];
    var Ord = function(__superclass_Data$dotEq$dotEq_0, compare2) {
      this["__superclass_Data.Eq.Eq_0"] = __superclass_Data$dotEq$dotEq_0;
      this.compare = compare2;
    };
    var ordInt = new Ord(function() {
      return Data_Eq.eqInt;
    }, Data_Ord_Unsafe.unsafeCompare);
    var compare = function(dict) {
      return dict.compare;
    };
    exports["Ord"] = Ord;
    exports["compare"] = compare;
    exports["ordInt"] = ordInt;
  })(PS["Data.Ord"] = PS["Data.Ord"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Bounded"];
    var Data_Ord = PS["Data.Ord"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Ordering = PS["Data.Ordering"];
    var Bounded = function(__superclass_Data$dotOrd$dotOrd_0, bottom2, top2) {
      this["__superclass_Data.Ord.Ord_0"] = __superclass_Data$dotOrd$dotOrd_0;
      this.bottom = bottom2;
      this.top = top2;
    };
    var top = function(dict) {
      return dict.top;
    };
    var boundedInt = new Bounded(function() {
      return Data_Ord.ordInt;
    }, $foreign.bottomInt, $foreign.topInt);
    var bottom = function(dict) {
      return dict.bottom;
    };
    exports["Bounded"] = Bounded;
    exports["bottom"] = bottom;
    exports["top"] = top;
    exports["boundedInt"] = boundedInt;
  })(PS["Data.Bounded"] = PS["Data.Bounded"] || {});
  (function(exports) {
    "use strict";
    var Data_Function = PS["Data.Function"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_Unit = PS["Data.Unit"];
    var Monoid = function(__superclass_Data$dotSemigroup$dotSemigroup_0, mempty2) {
      this["__superclass_Data.Semigroup.Semigroup_0"] = __superclass_Data$dotSemigroup$dotSemigroup_0;
      this.mempty = mempty2;
    };
    var monoidString = new Monoid(function() {
      return Data_Semigroup.semigroupString;
    }, "");
    var mempty = function(dict) {
      return dict.mempty;
    };
    exports["Monoid"] = Monoid;
    exports["mempty"] = mempty;
    exports["monoidString"] = monoidString;
  })(PS["Data.Monoid"] = PS["Data.Monoid"] || {});
  (function(exports) {
    "use strict";
    var Control_Alt = PS["Control.Alt"];
    var Control_Alternative = PS["Control.Alternative"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Bind = PS["Control.Bind"];
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
    var Control_Category = PS["Control.Category"];
    var Just = (function() {
      function Just2(value0) {
        this.value0 = value0;
      }
      ;
      Just2.create = function(value0) {
        return new Just2(value0);
      };
      return Just2;
    })();
    var Nothing = (function() {
      function Nothing2() {
      }
      ;
      Nothing2.value = new Nothing2();
      return Nothing2;
    })();
    var maybe = function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Nothing) {
            return v;
          }
          ;
          if (v2 instanceof Just) {
            return v1(v2.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Maybe line 232, column 1 - line 232, column 22: " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    };
    var functorMaybe = new Data_Functor.Functor(function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    });
    var fromMaybe = function(a) {
      return maybe(a)(Control_Category.id(Control_Category.categoryFn));
    };
    var fromJust = function(dictPartial) {
      return function(v) {
        var __unused = function(dictPartial1) {
          return function($dollar29) {
            return $dollar29;
          };
        };
        return __unused(dictPartial)((function() {
          if (v instanceof Just) {
            return v.value0;
          }
          ;
          throw new Error("Failed pattern match at Data.Maybe line 283, column 1 - line 283, column 21: " + [v.constructor.name]);
        })());
      };
    };
    var eqMaybe = function(dictEq) {
      return new Data_Eq.Eq(function(v) {
        return function(v1) {
          if (v instanceof Nothing && v1 instanceof Nothing) {
            return true;
          }
          ;
          if (v instanceof Just && v1 instanceof Just) {
            return Data_Eq.eq(dictEq)(v.value0)(v1.value0);
          }
          ;
          return false;
        };
      });
    };
    var applyMaybe = new Control_Apply.Apply(function() {
      return functorMaybe;
    }, function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return Data_Functor.map(functorMaybe)(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe line 78, column 3 - line 78, column 31: " + [v.constructor.name, v1.constructor.name]);
      };
    });
    var applicativeMaybe = new Control_Applicative.Applicative(function() {
      return applyMaybe;
    }, Just.create);
    exports["Just"] = Just;
    exports["Nothing"] = Nothing;
    exports["fromJust"] = fromJust;
    exports["fromMaybe"] = fromMaybe;
    exports["maybe"] = maybe;
    exports["functorMaybe"] = functorMaybe;
    exports["applyMaybe"] = applyMaybe;
    exports["applicativeMaybe"] = applicativeMaybe;
    exports["eqMaybe"] = eqMaybe;
  })(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Foldable"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Plus = PS["Control.Plus"];
    var Data_BooleanAlgebra = PS["Data.BooleanAlgebra"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Function = PS["Data.Function"];
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
    var Data_Ord = PS["Data.Ord"];
    var Data_Ordering = PS["Data.Ordering"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_Unit = PS["Data.Unit"];
    var Control_Alt = PS["Control.Alt"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Control_Category = PS["Control.Category"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Foldable = function(foldMap2, foldl2, foldr2) {
      this.foldMap = foldMap2;
      this.foldl = foldl2;
      this.foldr = foldr2;
    };
    var foldr = function(dict) {
      return dict.foldr;
    };
    var foldl = function(dict) {
      return dict.foldl;
    };
    var foldMap = function(dict) {
      return dict.foldMap;
    };
    exports["Foldable"] = Foldable;
    exports["foldMap"] = foldMap;
    exports["foldl"] = foldl;
    exports["foldr"] = foldr;
  })(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
  (function(exports) {
    "use strict";
    var Control_Alt = PS["Control.Alt"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Extend = PS["Control.Extend"];
    var Control_Monad = PS["Control.Monad"];
    var Data_Bifoldable = PS["Data.Bifoldable"];
    var Data_Bifunctor = PS["Data.Bifunctor"];
    var Data_Bitraversable = PS["Data.Bitraversable"];
    var Data_Bounded = PS["Data.Bounded"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_Function = PS["Data.Function"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
    var Data_Monoid = PS["Data.Monoid"];
    var Data_Ord = PS["Data.Ord"];
    var Data_Ordering = PS["Data.Ordering"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_Show = PS["Data.Show"];
    var Data_Traversable = PS["Data.Traversable"];
    var Left = (function() {
      function Left2(value0) {
        this.value0 = value0;
      }
      ;
      Left2.create = function(value0) {
        return new Left2(value0);
      };
      return Left2;
    })();
    var Right = (function() {
      function Right2(value0) {
        this.value0 = value0;
      }
      ;
      Right2.create = function(value0) {
        return new Right2(value0);
      };
      return Right2;
    })();
    var functorEither = new Data_Functor.Functor(function(v) {
      return function(v1) {
        if (v1 instanceof Left) {
          return new Left(v1.value0);
        }
        ;
        if (v1 instanceof Right) {
          return new Right(v(v1.value0));
        }
        ;
        throw new Error("Failed pattern match at Data.Either line 46, column 3 - line 46, column 26: " + [v.constructor.name, v1.constructor.name]);
      };
    });
    var either = function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Left) {
            return v(v2.value0);
          }
          ;
          if (v2 instanceof Right) {
            return v1(v2.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Either line 243, column 1 - line 243, column 26: " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    };
    var isLeft = either(Data_Function["const"](true))(Data_Function["const"](false));
    var bifunctorEither = new Data_Bifunctor.Bifunctor(function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Left) {
            return new Left(v(v2.value0));
          }
          ;
          if (v2 instanceof Right) {
            return new Right(v1(v2.value0));
          }
          ;
          throw new Error("Failed pattern match at Data.Either line 53, column 3 - line 53, column 34: " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    });
    var applyEither = new Control_Apply.Apply(function() {
      return functorEither;
    }, function(v) {
      return function(v1) {
        if (v instanceof Left) {
          return new Left(v.value0);
        }
        ;
        if (v instanceof Right) {
          return Data_Functor.map(functorEither)(v.value0)(v1);
        }
        ;
        throw new Error("Failed pattern match at Data.Either line 89, column 3 - line 89, column 28: " + [v.constructor.name, v1.constructor.name]);
      };
    });
    var bindEither = new Control_Bind.Bind(function() {
      return applyEither;
    }, either(function(e) {
      return function(v) {
        return new Left(e);
      };
    })(function(a) {
      return function(f) {
        return f(a);
      };
    }));
    var applicativeEither = new Control_Applicative.Applicative(function() {
      return applyEither;
    }, Right.create);
    exports["Left"] = Left;
    exports["Right"] = Right;
    exports["either"] = either;
    exports["isLeft"] = isLeft;
    exports["functorEither"] = functorEither;
    exports["bifunctorEither"] = bifunctorEither;
    exports["applyEither"] = applyEither;
    exports["applicativeEither"] = applicativeEither;
    exports["bindEither"] = bindEither;
  })(PS["Data.Either"] = PS["Data.Either"] || {});
  (function(exports) {
    "use strict";
    exports.pureE = function(a) {
      return function() {
        return a;
      };
    };
    exports.bindE = function(a) {
      return function(f) {
        return function() {
          return f(a())();
        };
      };
    };
  })(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Control.Monad.Eff"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Monad = PS["Control.Monad"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Unit = PS["Data.Unit"];
    var monadEff = new Control_Monad.Monad(function() {
      return applicativeEff;
    }, function() {
      return bindEff;
    });
    var bindEff = new Control_Bind.Bind(function() {
      return applyEff;
    }, $foreign.bindE);
    var applyEff = new Control_Apply.Apply(function() {
      return functorEff;
    }, Control_Monad.ap(monadEff));
    var applicativeEff = new Control_Applicative.Applicative(function() {
      return applyEff;
    }, $foreign.pureE);
    var functorEff = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEff));
    exports["functorEff"] = functorEff;
    exports["applyEff"] = applyEff;
    exports["applicativeEff"] = applicativeEff;
    exports["bindEff"] = bindEff;
    exports["monadEff"] = monadEff;
  })(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
  (function(exports) {
    "use strict";
    exports.unsafeInterleaveEff = function(f) {
      return f;
    };
  })(PS["Control.Monad.Eff.Unsafe"] = PS["Control.Monad.Eff.Unsafe"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Control.Monad.Eff.Unsafe"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    exports["unsafeInterleaveEff"] = $foreign.unsafeInterleaveEff;
  })(PS["Control.Monad.Eff.Unsafe"] = PS["Control.Monad.Eff.Unsafe"] || {});
  (function(exports) {
    "use strict";
    var Control_Alt = PS["Control.Alt"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Comonad = PS["Control.Comonad"];
    var Control_Extend = PS["Control.Extend"];
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
    var Data_Ord = PS["Data.Ord"];
    var Data_Ring = PS["Data.Ring"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_Show = PS["Data.Show"];
    var Data_Traversable = PS["Data.Traversable"];
    var runIdentity = function(v) {
      return v;
    };
    var functorIdentity = new Data_Functor.Functor(function(f) {
      return function(v) {
        return f(v);
      };
    });
    exports["runIdentity"] = runIdentity;
    exports["functorIdentity"] = functorIdentity;
  })(PS["Data.Identity"] = PS["Data.Identity"] || {});
  (function(exports) {
    "use strict";
    exports.unsafePartial = function(f) {
      return f();
    };
  })(PS["Partial.Unsafe"] = PS["Partial.Unsafe"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Partial.Unsafe"];
    var Partial = PS["Partial"];
    exports["unsafePartial"] = $foreign.unsafePartial;
  })(PS["Partial.Unsafe"] = PS["Partial.Unsafe"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Control_Monad_Eff_Unsafe = PS["Control.Monad.Eff.Unsafe"];
    var Control_Monad_ST = PS["Control.Monad.ST"];
    var Data_Either = PS["Data.Either"];
    var Data_Identity = PS["Data.Identity"];
    var Partial_Unsafe = PS["Partial.Unsafe"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Function = PS["Data.Function"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Unit = PS["Data.Unit"];
    var MonadRec = function(__superclass_Control$dotMonad$dotMonad_0, tailRecM2) {
      this["__superclass_Control.Monad.Monad_0"] = __superclass_Control$dotMonad$dotMonad_0;
      this.tailRecM = tailRecM2;
    };
    var tailRecM = function(dict) {
      return dict.tailRecM;
    };
    var forever = function(dictMonadRec) {
      return function(ma) {
        return tailRecM(dictMonadRec)(function(u) {
          return Data_Functor.voidRight(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Bind.Bind_1"]()["__superclass_Control.Apply.Apply_0"]()["__superclass_Data.Functor.Functor_0"]())(new Data_Either.Left(u))(ma);
        })(Data_Unit.unit);
      };
    };
    exports["MonadRec"] = MonadRec;
    exports["forever"] = forever;
    exports["tailRecM"] = tailRecM;
  })(PS["Control.Monad.Rec.Class"] = PS["Control.Monad.Rec.Class"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var MonadTrans = function(lift2) {
      this.lift = lift2;
    };
    var lift = function(dict) {
      return dict.lift;
    };
    exports["MonadTrans"] = MonadTrans;
    exports["lift"] = lift;
  })(PS["Control.Monad.Trans"] = PS["Control.Monad.Trans"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Data_Exists = PS["Data.Exists"];
    var Data_Either = PS["Data.Either"];
    var Data_Bifunctor = PS["Data.Bifunctor"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
    var Control_Monad_Trans = PS["Control.Monad.Trans"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Unit = PS["Data.Unit"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Monad = PS["Control.Monad"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Category = PS["Control.Category"];
    var Bound = (function() {
      function Bound2(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
      }
      ;
      Bound2.create = function(value0) {
        return function(value1) {
          return new Bound2(value0, value1);
        };
      };
      return Bound2;
    })();
    var FreeT = (function() {
      function FreeT2(value0) {
        this.value0 = value0;
      }
      ;
      FreeT2.create = function(value0) {
        return new FreeT2(value0);
      };
      return FreeT2;
    })();
    var Bind = (function() {
      function Bind2(value0) {
        this.value0 = value0;
      }
      ;
      Bind2.create = function(value0) {
        return new Bind2(value0);
      };
      return Bind2;
    })();
    var monadTransFreeT = function(dictFunctor) {
      return new Control_Monad_Trans.MonadTrans(function(dictMonad) {
        return function(ma) {
          return new FreeT(function(v) {
            return Data_Functor.map(dictMonad["__superclass_Control.Bind.Bind_1"]()["__superclass_Control.Apply.Apply_0"]()["__superclass_Data.Functor.Functor_0"]())(Data_Either.Left.create)(ma);
          });
        };
      });
    };
    var freeT = FreeT.create;
    var bound = function(m) {
      return function(f) {
        return new Bind(Data_Exists.mkExists(new Bound(m, f)));
      };
    };
    var functorFreeT = function(dictFunctor) {
      return function(dictFunctor1) {
        return new Data_Functor.Functor(function(f) {
          return function(v) {
            if (v instanceof FreeT) {
              return new FreeT(function(v1) {
                return Data_Functor.map(dictFunctor1)(Data_Bifunctor.bimap(Data_Either.bifunctorEither)(f)(Data_Functor.map(dictFunctor)(Data_Functor.map(functorFreeT(dictFunctor)(dictFunctor1))(f))))(v.value0(Data_Unit.unit));
              });
            }
            ;
            if (v instanceof Bind) {
              return Data_Exists.runExists(function(v1) {
                return bound(v1.value0)(function($98) {
                  return Data_Functor.map(functorFreeT(dictFunctor)(dictFunctor1))(f)(v1.value1($98));
                });
              })(v.value0);
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.Free.Trans line 55, column 3 - line 55, column 69: " + [f.constructor.name, v.constructor.name]);
          };
        });
      };
    };
    var monadFreeT = function(dictFunctor) {
      return function(dictMonad) {
        return new Control_Monad.Monad(function() {
          return applicativeFreeT(dictFunctor)(dictMonad);
        }, function() {
          return bindFreeT(dictFunctor)(dictMonad);
        });
      };
    };
    var bindFreeT = function(dictFunctor) {
      return function(dictMonad) {
        return new Control_Bind.Bind(function() {
          return applyFreeT(dictFunctor)(dictMonad);
        }, function(v) {
          return function(f) {
            if (v instanceof Bind) {
              return Data_Exists.runExists(function(v1) {
                return bound(v1.value0)(function(x) {
                  return bound(function(v2) {
                    return v1.value1(x);
                  })(f);
                });
              })(v.value0);
            }
            ;
            return bound(function(v1) {
              return v;
            })(f);
          };
        });
      };
    };
    var applyFreeT = function(dictFunctor) {
      return function(dictMonad) {
        return new Control_Apply.Apply(function() {
          return functorFreeT(dictFunctor)(dictMonad["__superclass_Control.Bind.Bind_1"]()["__superclass_Control.Apply.Apply_0"]()["__superclass_Data.Functor.Functor_0"]());
        }, Control_Monad.ap(monadFreeT(dictFunctor)(dictMonad)));
      };
    };
    var applicativeFreeT = function(dictFunctor) {
      return function(dictMonad) {
        return new Control_Applicative.Applicative(function() {
          return applyFreeT(dictFunctor)(dictMonad);
        }, function(a) {
          return new FreeT(function(v) {
            return Control_Applicative.pure(dictMonad["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Left(a));
          });
        });
      };
    };
    var liftFreeT = function(dictFunctor) {
      return function(dictMonad) {
        return function(fa) {
          return new FreeT(function(v) {
            return Control_Applicative.pure(dictMonad["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Right(Data_Functor.map(dictFunctor)(Control_Applicative.pure(applicativeFreeT(dictFunctor)(dictMonad)))(fa)));
          });
        };
      };
    };
    var resume = function(dictFunctor) {
      return function(dictMonadRec) {
        var go = function(v) {
          if (v instanceof FreeT) {
            return Data_Functor.map(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Bind.Bind_1"]()["__superclass_Control.Apply.Apply_0"]()["__superclass_Data.Functor.Functor_0"]())(Data_Either.Right.create)(v.value0(Data_Unit.unit));
          }
          ;
          if (v instanceof Bind) {
            return Data_Exists.runExists(function(v1) {
              var $77 = v1.value0(Data_Unit.unit);
              if ($77 instanceof FreeT) {
                return Control_Bind.bind(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Bind.Bind_1"]())($77.value0(Data_Unit.unit))(function(v2) {
                  if (v2 instanceof Data_Either.Left) {
                    return Control_Applicative.pure(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Left(v1.value1(v2.value0)));
                  }
                  ;
                  if (v2 instanceof Data_Either.Right) {
                    return Control_Applicative.pure(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Right(new Data_Either.Right(Data_Functor.map(dictFunctor)(function(h) {
                      return Control_Bind.bind(bindFreeT(dictFunctor)(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(h)(v1.value1);
                    })(v2.value0))));
                  }
                  ;
                  throw new Error("Failed pattern match at Control.Monad.Free.Trans line 49, column 9 - line 51, column 68: " + [v2.constructor.name]);
                });
              }
              ;
              if ($77 instanceof Bind) {
                return Data_Exists.runExists(function(v2) {
                  return Control_Applicative.pure(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Left(Control_Bind.bind(bindFreeT(dictFunctor)(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(v2.value0(Data_Unit.unit))(function(z) {
                    return Control_Bind.bind(bindFreeT(dictFunctor)(dictMonadRec["__superclass_Control.Monad.Monad_0"]()))(v2.value1(z))(v1.value1);
                  })));
                })($77.value0);
              }
              ;
              throw new Error("Failed pattern match at Control.Monad.Free.Trans line 46, column 5 - line 52, column 98: " + [$77.constructor.name]);
            })(v.value0);
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Free.Trans line 44, column 3 - line 44, column 36: " + [v.constructor.name]);
        };
        return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(go);
      };
    };
    var runFreeT = function(dictFunctor) {
      return function(dictMonadRec) {
        return function(interp) {
          var go = function(v) {
            if (v instanceof Data_Either.Left) {
              return Control_Applicative.pure(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Right(v.value0));
            }
            ;
            if (v instanceof Data_Either.Right) {
              return Control_Bind.bind(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Bind.Bind_1"]())(interp(v.value0))(function(v1) {
                return Control_Applicative.pure(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Left(v1));
              });
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.Free.Trans line 104, column 3 - line 104, column 31: " + [v.constructor.name]);
          };
          return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(Control_Bind.composeKleisliFlipped(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Bind.Bind_1"]())(go)(resume(dictFunctor)(dictMonadRec)));
        };
      };
    };
    var monadRecFreeT = function(dictFunctor) {
      return function(dictMonad) {
        return new Control_Monad_Rec_Class.MonadRec(function() {
          return monadFreeT(dictFunctor)(dictMonad);
        }, function(f) {
          var go = function(s) {
            return Control_Bind.bind(bindFreeT(dictFunctor)(dictMonad))(f(s))(function(v) {
              if (v instanceof Data_Either.Left) {
                return go(v.value0);
              }
              ;
              if (v instanceof Data_Either.Right) {
                return Control_Applicative.pure(applicativeFreeT(dictFunctor)(dictMonad))(v.value0);
              }
              ;
              throw new Error("Failed pattern match at Control.Monad.Free.Trans line 78, column 7 - line 80, column 26: " + [v.constructor.name]);
            });
          };
          return go;
        });
      };
    };
    exports["freeT"] = freeT;
    exports["liftFreeT"] = liftFreeT;
    exports["resume"] = resume;
    exports["runFreeT"] = runFreeT;
    exports["functorFreeT"] = functorFreeT;
    exports["applyFreeT"] = applyFreeT;
    exports["applicativeFreeT"] = applicativeFreeT;
    exports["bindFreeT"] = bindFreeT;
    exports["monadFreeT"] = monadFreeT;
    exports["monadTransFreeT"] = monadTransFreeT;
    exports["monadRecFreeT"] = monadRecFreeT;
  })(PS["Control.Monad.Free.Trans"] = PS["Control.Monad.Free.Trans"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Control_Alt = PS["Control.Alt"];
    var Control_Alternative = PS["Control.Alternative"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Monad_Cont_Trans = PS["Control.Monad.Cont.Trans"];
    var Control_Monad_Except_Trans = PS["Control.Monad.Except.Trans"];
    var Control_Monad_Reader_Trans = PS["Control.Monad.Reader.Trans"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Control_Monad_Eff_Ref = PS["Control.Monad.Eff.Ref"];
    var Control_Monad_Eff_Unsafe = PS["Control.Monad.Eff.Unsafe"];
    var Control_Plus = PS["Control.Plus"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_Traversable = PS["Data.Traversable"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Functor = PS["Data.Functor"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Data_Function = PS["Data.Function"];
    var Data_Either = PS["Data.Either"];
    var Parallel = function(x) {
      return x;
    };
    var MonadPar = function(__superclass_Control$dotMonad$dotMonad_0, par2) {
      this["__superclass_Control.Monad.Monad_0"] = __superclass_Control$dotMonad$dotMonad_0;
      this.par = par2;
    };
    var runParallel = function(v) {
      return v;
    };
    var parallel = Parallel;
    var par = function(dict) {
      return dict.par;
    };
    var functorParallel = function(dictFunctor) {
      return new Data_Functor.Functor(function(f) {
        return function($58) {
          return parallel(Data_Functor.map(dictFunctor)(f)(runParallel($58)));
        };
      });
    };
    var applyParallel = function(dictMonadPar) {
      return new Control_Apply.Apply(function() {
        return functorParallel(dictMonadPar["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Bind.Bind_1"]()["__superclass_Control.Apply.Apply_0"]()["__superclass_Data.Functor.Functor_0"]());
      }, function(f) {
        return function(a) {
          return parallel(par(dictMonadPar)(Data_Function.apply)(runParallel(f))(runParallel(a)));
        };
      });
    };
    exports["MonadPar"] = MonadPar;
    exports["par"] = par;
    exports["parallel"] = parallel;
    exports["runParallel"] = runParallel;
    exports["functorParallel"] = functorParallel;
    exports["applyParallel"] = applyParallel;
  })(PS["Control.Parallel.Class"] = PS["Control.Parallel.Class"] || {});
  (function(exports) {
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
    var Data_Eq = PS["Data.Eq"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_Function = PS["Data.Function"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Maybe_First = PS["Data.Maybe.First"];
    var Data_Monoid = PS["Data.Monoid"];
    var Data_Ord = PS["Data.Ord"];
    var Data_Ordering = PS["Data.Ordering"];
    var Data_Ring = PS["Data.Ring"];
    var Data_CommutativeRing = PS["Data.CommutativeRing"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_Show = PS["Data.Show"];
    var Data_Traversable = PS["Data.Traversable"];
    var Data_Unit = PS["Data.Unit"];
    var Tuple = (function() {
      function Tuple2(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
      }
      ;
      Tuple2.create = function(value0) {
        return function(value1) {
          return new Tuple2(value0, value1);
        };
      };
      return Tuple2;
    })();
    var bifunctorTuple = new Data_Bifunctor.Bifunctor(function(f) {
      return function(g) {
        return function(v) {
          return new Tuple(f(v.value0), g(v.value1));
        };
      };
    });
    exports["Tuple"] = Tuple;
    exports["bifunctorTuple"] = bifunctorTuple;
  })(PS["Data.Tuple"] = PS["Data.Tuple"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Monad_Free_Trans = PS["Control.Monad.Free.Trans"];
    var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
    var Control_Monad_Trans = PS["Control.Monad.Trans"];
    var Control_Parallel_Class = PS["Control.Parallel.Class"];
    var Data_Bifunctor = PS["Data.Bifunctor"];
    var Data_Either = PS["Data.Either"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Identity = PS["Data.Identity"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Profunctor = PS["Data.Profunctor"];
    var Data_Tuple = PS["Data.Tuple"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Unit = PS["Data.Unit"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Category = PS["Control.Category"];
    var CoTransform = (function() {
      function CoTransform2(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
      }
      ;
      CoTransform2.create = function(value0) {
        return function(value1) {
          return new CoTransform2(value0, value1);
        };
      };
      return CoTransform2;
    })();
    var runProcess = function(dictMonadRec) {
      return Control_Monad_Free_Trans.runFreeT(Data_Identity.functorIdentity)(dictMonadRec)(function($162) {
        return Control_Applicative.pure(dictMonadRec["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Applicative.Applicative_0"]())(Data_Identity.runIdentity($162));
      });
    };
    var fuseWith = function(dictFunctor) {
      return function(dictFunctor1) {
        return function(dictFunctor2) {
          return function(dictMonadRec) {
            return function(dictMonadPar) {
              return function(zap) {
                return function(fs) {
                  return function(gs) {
                    var go = function(v) {
                      return Control_Bind.bind(dictMonadPar["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Bind.Bind_1"]())(Control_Parallel_Class.runParallel(Control_Apply.apply(Control_Parallel_Class.applyParallel(dictMonadPar))(Data_Functor.map(Control_Parallel_Class.functorParallel(dictMonadPar["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Bind.Bind_1"]()["__superclass_Control.Apply.Apply_0"]()["__superclass_Data.Functor.Functor_0"]()))(Control_Apply.lift2(Data_Either.applyEither)(zap(Data_Tuple.Tuple.create)))(Control_Parallel_Class.parallel(Control_Monad_Free_Trans.resume(dictFunctor)(dictMonadRec)(v.value0))))(Control_Parallel_Class.parallel(Control_Monad_Free_Trans.resume(dictFunctor1)(dictMonadRec)(v.value1)))))(function(v1) {
                        if (v1 instanceof Data_Either.Left) {
                          return Control_Applicative.pure(dictMonadPar["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Left(v1.value0));
                        }
                        ;
                        if (v1 instanceof Data_Either.Right) {
                          return Control_Applicative.pure(dictMonadPar["__superclass_Control.Monad.Monad_0"]()["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Right(Data_Functor.map(dictFunctor2)(function(t) {
                            return Control_Monad_Free_Trans.freeT(function(v2) {
                              return go(t);
                            });
                          })(v1.value0)));
                        }
                        ;
                        throw new Error("Failed pattern match at Control.Coroutine line 73, column 5 - line 75, column 63: " + [v1.constructor.name]);
                      });
                    };
                    return Control_Monad_Free_Trans.freeT(function(v) {
                      return go(new Data_Tuple.Tuple(fs, gs));
                    });
                  };
                };
              };
            };
          };
        };
      };
    };
    var bifunctorTransform = new Data_Bifunctor.Bifunctor(function(f) {
      return function(g) {
        return function(v) {
          return function($163) {
            return Data_Bifunctor.bimap(Data_Tuple.bifunctorTuple)(f)(g)(v($163));
          };
        };
      };
    });
    var functorTransform = new Data_Functor.Functor(Data_Bifunctor.rmap(bifunctorTransform));
    var transform = function(dictMonad) {
      return function(f) {
        return Control_Monad_Free_Trans.liftFreeT(functorTransform)(dictMonad)(function(i) {
          return new Data_Tuple.Tuple(f(i), Data_Unit.unit);
        });
      };
    };
    var bifunctorCoTransform = new Data_Bifunctor.Bifunctor(function(f) {
      return function(g) {
        return function(v) {
          return new CoTransform(f(v.value0), function($164) {
            return g(v.value1($164));
          });
        };
      };
    });
    var functorCoTransform = new Data_Functor.Functor(Data_Bifunctor.rmap(bifunctorCoTransform));
    var composeCoTransformers = function(dictMonadRec) {
      return function(dictMonadPar) {
        return fuseWith(functorCoTransform)(functorCoTransform)(functorCoTransform)(dictMonadRec)(dictMonadPar)(function(f) {
          return function(v) {
            return function(v1) {
              return new CoTransform(v1.value0, function(i) {
                return f(v.value1(i))(v1.value1(v.value0));
              });
            };
          };
        });
      };
    };
    var cotransform = function(dictMonad) {
      return function(o) {
        return Control_Monad_Free_Trans.freeT(function(v) {
          return Control_Applicative.pure(dictMonad["__superclass_Control.Applicative.Applicative_0"]())(new Data_Either.Right(new CoTransform(o, Control_Applicative.pure(Control_Monad_Free_Trans.applicativeFreeT(functorCoTransform)(dictMonad)))));
        });
      };
    };
    var fuseCoTransform = function(dictMonadRec) {
      return function(dictMonadPar) {
        return fuseWith(functorTransform)(functorCoTransform)(Data_Identity.functorIdentity)(dictMonadRec)(dictMonadPar)(function(f) {
          return function(v) {
            return function(v1) {
              var $142 = v(v1.value0);
              return f($142.value1)(v1.value1($142.value0));
            };
          };
        });
      };
    };
    exports["CoTransform"] = CoTransform;
    exports["composeCoTransformers"] = composeCoTransformers;
    exports["cotransform"] = cotransform;
    exports["fuseCoTransform"] = fuseCoTransform;
    exports["fuseWith"] = fuseWith;
    exports["runProcess"] = runProcess;
    exports["transform"] = transform;
    exports["bifunctorTransform"] = bifunctorTransform;
    exports["functorTransform"] = functorTransform;
    exports["bifunctorCoTransform"] = bifunctorCoTransform;
    exports["functorCoTransform"] = functorCoTransform;
  })(PS["Control.Coroutine"] = PS["Control.Coroutine"] || {});
  (function(exports) {
    "use strict";
    exports._unsafeInterleaveAff = function(aff) {
      return aff;
    };
    exports._forkAff = function(nonCanceler, aff) {
      var voidF = function() {
      };
      return function(success, error) {
        var canceler = aff(voidF, voidF);
        success(canceler);
        return nonCanceler;
      };
    };
    exports._makeAff = function(cb) {
      return function(success, error) {
        try {
          return cb(function(e) {
            return function() {
              error(e);
            };
          })(function(v) {
            return function() {
              success(v);
            };
          })();
        } catch (err) {
          error(err);
        }
      };
    };
    exports._pure = function(nonCanceler, v) {
      return function(success, error) {
        success(v);
        return nonCanceler;
      };
    };
    exports._fmap = function(f, aff) {
      return function(success, error) {
        try {
          return aff(function(v) {
            try {
              var v2 = f(v);
            } catch (err) {
              error(err);
            }
            success(v2);
          }, error);
        } catch (err) {
          error(err);
        }
      };
    };
    exports._bind = function(alwaysCanceler, aff, f) {
      return function(success, error) {
        var canceler1, canceler2;
        var isCanceled = false;
        var requestCancel = false;
        var onCanceler = function() {
        };
        canceler1 = aff(function(v) {
          if (requestCancel) {
            isCanceled = true;
            return alwaysCanceler;
          } else {
            canceler2 = f(v)(success, error);
            onCanceler(canceler2);
            return canceler2;
          }
        }, error);
        return function(e) {
          return function(s, f2) {
            requestCancel = true;
            if (canceler2 !== void 0) {
              return canceler2(e)(s, f2);
            } else {
              return canceler1(e)(function(bool) {
                if (bool || isCanceled) {
                  s(true);
                } else {
                  onCanceler = function(canceler) {
                    canceler(e)(s, f2);
                  };
                }
              }, f2);
            }
          };
        };
      };
    };
    exports._attempt = function(Left, Right, aff) {
      return function(success, error) {
        try {
          return aff(function(v) {
            success(Right(v));
          }, function(e) {
            success(Left(e));
          });
        } catch (err) {
          success(Left(err));
        }
      };
    };
    exports._runAff = function(errorT, successT, aff) {
      return function() {
        return aff(function(v) {
          successT(v)();
        }, function(e) {
          errorT(e)();
        });
      };
    };
    exports._liftEff = function(nonCanceler, e) {
      return function(success, error) {
        var result;
        try {
          result = e();
        } catch (err) {
          error(err);
          return nonCanceler;
        }
        success(result);
        return nonCanceler;
      };
    };
    exports._tailRecM = function(isLeft, f, a) {
      return function(success, error) {
        return (function go(acc) {
          var result, status, canceler;
          while (true) {
            status = 0;
            canceler = f(acc)(function(v) {
              if (status === 0) {
                result = v;
                status = 1;
              } else {
                if (isLeft(v)) {
                  go(v.value0);
                } else {
                  try {
                    success(v.value0);
                  } catch (err) {
                    error(err);
                  }
                }
              }
            }, error);
            if (status === 1) {
              if (isLeft(result)) {
                acc = result.value0;
                continue;
              } else {
                try {
                  success(result.value0);
                } catch (err) {
                  error(err);
                }
              }
            } else {
              status = 2;
            }
            return canceler;
          }
        })(a);
      };
    };
  })(PS["Control.Monad.Aff"] = PS["Control.Monad.Aff"] || {});
  (function(exports) {
    "use strict";
    exports._makeVar = function(nonCanceler) {
      return function(success, error) {
        try {
          success({
            consumers: [],
            producers: [],
            error: void 0
          });
        } catch (err) {
          error(err);
        }
        return nonCanceler;
      };
    };
    exports._takeVar = function(nonCanceler, avar) {
      return function(success, error) {
        if (avar.error !== void 0) {
          error(avar.error);
        } else if (avar.producers.length > 0) {
          var producer = avar.producers.shift();
          producer(success, error);
        } else {
          avar.consumers.push({ success, error });
        }
        return nonCanceler;
      };
    };
    exports._putVar = function(nonCanceler, avar, a) {
      return function(success, error) {
        if (avar.error !== void 0) {
          error(avar.error);
        } else if (avar.consumers.length === 0) {
          avar.producers.push(function(success2, error2) {
            try {
              success2(a);
            } catch (err) {
              error2(err);
            }
          });
          success({});
        } else {
          var consumer = avar.consumers.shift();
          try {
            consumer.success(a);
          } catch (err) {
            error(err);
            return;
          }
          success({});
        }
        return nonCanceler;
      };
    };
    exports._killVar = function(nonCanceler, avar, e) {
      return function(success, error) {
        if (avar.error !== void 0) {
          error(avar.error);
        } else {
          var errors = [];
          avar.error = e;
          while (avar.consumers.length > 0) {
            var consumer = avar.consumers.shift();
            try {
              consumer.error(e);
            } catch (err) {
              errors.push(err);
            }
          }
          if (errors.length > 0) error(errors[0]);
          else success({});
        }
        return nonCanceler;
      };
    };
  })(PS["Control.Monad.Aff.Internal"] = PS["Control.Monad.Aff.Internal"] || {});
  (function(exports) {
    "use strict";
    exports.throwException = function(e) {
      return function() {
        throw e;
      };
    };
  })(PS["Control.Monad.Eff.Exception"] = PS["Control.Monad.Eff.Exception"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Control.Monad.Eff.Exception"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Data_Either = PS["Data.Either"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Show = PS["Data.Show"];
    var Prelude = PS["Prelude"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Functor = PS["Data.Functor"];
    exports["throwException"] = $foreign.throwException;
  })(PS["Control.Monad.Eff.Exception"] = PS["Control.Monad.Eff.Exception"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Control.Monad.Aff.Internal"];
    var Prelude = PS["Prelude"];
    var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
    var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
    exports["_killVar"] = $foreign._killVar;
    exports["_makeVar"] = $foreign._makeVar;
    exports["_putVar"] = $foreign._putVar;
    exports["_takeVar"] = $foreign._takeVar;
  })(PS["Control.Monad.Aff.Internal"] = PS["Control.Monad.Aff.Internal"] || {});
  (function(exports) {
    "use strict";
    var Control_Category = PS["Control.Category"];
    var Control_Monad = PS["Control.Monad"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var MonadEff = function(__superclass_Control$dotMonad$dotMonad_0, liftEff2) {
      this["__superclass_Control.Monad.Monad_0"] = __superclass_Control$dotMonad$dotMonad_0;
      this.liftEff = liftEff2;
    };
    var liftEff = function(dict) {
      return dict.liftEff;
    };
    exports["MonadEff"] = MonadEff;
    exports["liftEff"] = liftEff;
  })(PS["Control.Monad.Eff.Class"] = PS["Control.Monad.Eff.Class"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Control.Monad.Aff"];
    var Prelude = PS["Prelude"];
    var Control_Alt = PS["Control.Alt"];
    var Control_Alternative = PS["Control.Alternative"];
    var Control_Monad_Aff_Internal = PS["Control.Monad.Aff.Internal"];
    var Control_Monad_Cont_Class = PS["Control.Monad.Cont.Class"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
    var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
    var Control_Monad_Error_Class = PS["Control.Monad.Error.Class"];
    var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
    var Control_MonadPlus = PS["Control.MonadPlus"];
    var Control_Parallel_Class = PS["Control.Parallel.Class"];
    var Control_Plus = PS["Control.Plus"];
    var Data_Either = PS["Data.Either"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
    var Data_Monoid = PS["Data.Monoid"];
    var Unsafe_Coerce = PS["Unsafe.Coerce"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Control_Apply = PS["Control.Apply"];
    var Data_Functor = PS["Data.Functor"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Monad = PS["Control.Monad"];
    var Data_Function = PS["Data.Function"];
    var Control_MonadZero = PS["Control.MonadZero"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Semiring = PS["Data.Semiring"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Canceler = function(x) {
      return x;
    };
    var runAff = function(ex) {
      return function(f) {
        return function(aff) {
          return $foreign._runAff(ex, f, aff);
        };
      };
    };
    var makeAff$prime = function(h) {
      return $foreign._makeAff(h);
    };
    var functorAff = new Data_Functor.Functor(function(f) {
      return function(fa) {
        return $foreign._fmap(f, fa);
      };
    });
    var fromAVBox = Unsafe_Coerce.unsafeCoerce;
    var cancel = function(v) {
      return v;
    };
    var launchAff = (function() {
      var lowerEx = Data_Functor.map(Control_Monad_Eff.functorEff)(function($34) {
        return Canceler(Data_Functor.map(Data_Functor.functorFn)($foreign._unsafeInterleaveAff)(cancel($34)));
      });
      return function($35) {
        return lowerEx(runAff(Control_Monad_Eff_Exception.throwException)(Data_Function["const"](Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit)))($foreign._unsafeInterleaveAff($35)));
      };
    })();
    var attempt = function(aff) {
      return $foreign._attempt(Data_Either.Left.create, Data_Either.Right.create, aff);
    };
    var applyAff = new Control_Apply.Apply(function() {
      return functorAff;
    }, function(ff) {
      return function(fa) {
        return $foreign._bind(alwaysCanceler, ff, function(f) {
          return Data_Functor.map(functorAff)(f)(fa);
        });
      };
    });
    var applicativeAff = new Control_Applicative.Applicative(function() {
      return applyAff;
    }, function(v) {
      return $foreign._pure(nonCanceler, v);
    });
    var nonCanceler = Data_Function["const"](Control_Applicative.pure(applicativeAff)(false));
    var alwaysCanceler = Data_Function["const"](Control_Applicative.pure(applicativeAff)(true));
    var forkAff = function(aff) {
      return $foreign._forkAff(nonCanceler, aff);
    };
    var killVar = function(q) {
      return function(e) {
        return Data_Function.apply(fromAVBox)(Control_Monad_Aff_Internal._killVar(nonCanceler, q, e));
      };
    };
    var makeAff = function(h) {
      return makeAff$prime(function(e) {
        return function(a) {
          return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Function["const"](nonCanceler))(h(e)(a));
        };
      });
    };
    var makeVar = Data_Function.apply(fromAVBox)(Control_Monad_Aff_Internal._makeVar(nonCanceler));
    var putVar = function(q) {
      return function(a) {
        return Data_Function.apply(fromAVBox)(Control_Monad_Aff_Internal._putVar(nonCanceler, q, a));
      };
    };
    var takeVar = function(q) {
      return Data_Function.apply(fromAVBox)(Control_Monad_Aff_Internal._takeVar(nonCanceler, q));
    };
    var bindAff = new Control_Bind.Bind(function() {
      return applyAff;
    }, function(fa) {
      return function(f) {
        return $foreign._bind(alwaysCanceler, fa, f);
      };
    });
    var monadAff = new Control_Monad.Monad(function() {
      return applicativeAff;
    }, function() {
      return bindAff;
    });
    var monadEffAff = new Control_Monad_Eff_Class.MonadEff(function() {
      return monadAff;
    }, function(eff) {
      return $foreign._liftEff(nonCanceler, eff);
    });
    var monadRecAff = new Control_Monad_Rec_Class.MonadRec(function() {
      return monadAff;
    }, function(f) {
      return function(a) {
        return $foreign._tailRecM(Data_Either.isLeft, f, a);
      };
    });
    var monadParAff = new Control_Parallel_Class.MonadPar(function() {
      return monadAff;
    }, function(f) {
      return function(ma) {
        return function(mb) {
          var putOrKill = function(v) {
            return Data_Either.either(killVar(v))(putVar(v));
          };
          return Control_Bind.bind(bindAff)(makeVar)(function(v) {
            return Control_Bind.bind(bindAff)(makeVar)(function(v1) {
              return Control_Bind.bind(bindAff)(forkAff(Control_Bind.bindFlipped(bindAff)(putOrKill(v))(attempt(ma))))(function(v2) {
                return Control_Bind.bind(bindAff)(forkAff(Control_Bind.bindFlipped(bindAff)(putOrKill(v1))(attempt(mb))))(function(v3) {
                  return Control_Apply.apply(applyAff)(Data_Functor.map(functorAff)(f)(takeVar(v)))(takeVar(v1));
                });
              });
            });
          });
        };
      };
    });
    exports["Canceler"] = Canceler;
    exports["attempt"] = attempt;
    exports["cancel"] = cancel;
    exports["forkAff"] = forkAff;
    exports["launchAff"] = launchAff;
    exports["makeAff"] = makeAff;
    exports["nonCanceler"] = nonCanceler;
    exports["runAff"] = runAff;
    exports["functorAff"] = functorAff;
    exports["applyAff"] = applyAff;
    exports["applicativeAff"] = applicativeAff;
    exports["bindAff"] = bindAff;
    exports["monadAff"] = monadAff;
    exports["monadEffAff"] = monadEffAff;
    exports["monadRecAff"] = monadRecAff;
    exports["monadParAff"] = monadParAff;
  })(PS["Control.Monad.Aff"] = PS["Control.Monad.Aff"] || {});
  (function(exports) {
    "use strict";
    exports.random = Math.random;
  })(PS["Control.Monad.Eff.Random"] = PS["Control.Monad.Eff.Random"] || {});
  (function(exports) {
    "use strict";
    exports.fromNumberImpl = function(just) {
      return function(nothing) {
        return function(n) {
          return (n | 0) === n ? just(n) : nothing;
        };
      };
    };
    exports.toNumber = function(n) {
      return n;
    };
  })(PS["Data.Int"] = PS["Data.Int"] || {});
  (function(exports) {
    "use strict";
    var otherwise = true;
    exports["otherwise"] = otherwise;
  })(PS["Data.Boolean"] = PS["Data.Boolean"] || {});
  (function(exports) {
    "use strict";
    exports.floor = Math.floor;
  })(PS["Math"] = PS["Math"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Math"];
    exports["floor"] = $foreign.floor;
  })(PS["Math"] = PS["Math"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Int"];
    var Data_Boolean = PS["Data.Boolean"];
    var Data_BooleanAlgebra = PS["Data.BooleanAlgebra"];
    var Data_Bounded = PS["Data.Bounded"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Function = PS["Data.Function"];
    var Data_Int_Bits = PS["Data.Int.Bits"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Ord = PS["Data.Ord"];
    var $$Math = PS["Math"];
    var Partial_Unsafe = PS["Partial.Unsafe"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var fromNumber = $foreign.fromNumberImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
    var unsafeClamp = function(x) {
      if (x >= $foreign.toNumber(Data_Bounded.top(Data_Bounded.boundedInt))) {
        return Data_Bounded.top(Data_Bounded.boundedInt);
      }
      ;
      if (x <= $foreign.toNumber(Data_Bounded.bottom(Data_Bounded.boundedInt))) {
        return Data_Bounded.bottom(Data_Bounded.boundedInt);
      }
      ;
      if (Data_Boolean.otherwise) {
        return Partial_Unsafe.unsafePartial(function(dictPartial) {
          return Data_Maybe.fromJust(dictPartial)(fromNumber(x));
        });
      }
      ;
      throw new Error("Failed pattern match at Data.Int line 65, column 1 - line 68, column 56: " + [x.constructor.name]);
    };
    var floor = function($4) {
      return unsafeClamp($$Math.floor($4));
    };
    exports["floor"] = floor;
    exports["fromNumber"] = fromNumber;
    exports["toNumber"] = $foreign.toNumber;
  })(PS["Data.Int"] = PS["Data.Int"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Control.Monad.Eff.Random"];
    var Prelude = PS["Prelude"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Data_Int = PS["Data.Int"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_Ring = PS["Data.Ring"];
    var Data_Function = PS["Data.Function"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Ord = PS["Data.Ord"];
    var randomInt = function(low) {
      return function(high) {
        return function __do() {
          var v = $foreign.random();
          var asNumber = (Data_Int.toNumber(high) - Data_Int.toNumber(low) + 1) * v + Data_Int.toNumber(low);
          return Data_Function.apply(Control_Applicative.pure(Control_Monad_Eff.applicativeEff))(Data_Int.floor(asNumber))();
        };
      };
    };
    exports["randomInt"] = randomInt;
  })(PS["Control.Monad.Eff.Random"] = PS["Control.Monad.Eff.Random"] || {});
  (function(exports) {
    "use strict";
    exports.window = function() {
      return window;
    };
  })(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["DOM.HTML.Types"];
    var Prelude = PS["Prelude"];
    var Data_Either = PS["Data.Either"];
    var Data_Foreign = PS["Data.Foreign"];
    var Data_Foreign_Class = PS["Data.Foreign.Class"];
    var DOM_Event_Types = PS["DOM.Event.Types"];
    var DOM_Node_Types = PS["DOM.Node.Types"];
    var Unsafe_Coerce = PS["Unsafe.Coerce"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var htmlDocumentToParentNode = Unsafe_Coerce.unsafeCoerce;
    exports["htmlDocumentToParentNode"] = htmlDocumentToParentNode;
  })(PS["DOM.HTML.Types"] = PS["DOM.HTML.Types"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["DOM.HTML"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var DOM = PS["DOM"];
    var DOM_HTML_Types = PS["DOM.HTML.Types"];
    exports["window"] = $foreign.window;
  })(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
  (function(exports) {
    "use strict";
    exports.document = function(window2) {
      return function() {
        return window2.document;
      };
    };
  })(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["DOM.HTML.Window"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var DOM = PS["DOM"];
    var DOM_HTML_Types = PS["DOM.HTML.Types"];
    exports["document"] = $foreign.document;
  })(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
  (function(exports) {
    "use strict";
    exports.querySelector = function(selector) {
      return function(node) {
        return function() {
          return node.querySelector(selector);
        };
      };
    };
  })(PS["DOM.Node.ParentNode"] = PS["DOM.Node.ParentNode"] || {});
  (function(exports) {
    "use strict";
    exports.nullable = function(a, r, f) {
      return a == null ? r : f(a);
    };
  })(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Nullable"];
    var Prelude = PS["Prelude"];
    var Data_Function = PS["Data.Function"];
    var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Show = PS["Data.Show"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Ord = PS["Data.Ord"];
    var toMaybe = function(n) {
      return $foreign.nullable(n, Data_Maybe.Nothing.value, Data_Maybe.Just.create);
    };
    exports["toMaybe"] = toMaybe;
  })(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["DOM.Node.ParentNode"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Data_Nullable = PS["Data.Nullable"];
    var DOM = PS["DOM"];
    var DOM_Node_Types = PS["DOM.Node.Types"];
    exports["querySelector"] = $foreign.querySelector;
  })(PS["DOM.Node.ParentNode"] = PS["DOM.Node.ParentNode"] || {});
  (function(exports) {
    "use strict";
    exports.range = function(start) {
      return function(end) {
        var step = start > end ? -1 : 1;
        var result = [];
        for (var i = start, n = 0; i !== end; i += step) {
          result[n++] = i;
        }
        result[n] = i;
        return result;
      };
    };
    exports.fromFoldableImpl = /* @__PURE__ */ (function() {
      function Cons(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      var emptyList = {};
      function curryCons(head) {
        return function(tail) {
          return new Cons(head, tail);
        };
      }
      function listToArray(list) {
        var result = [];
        var count = 0;
        while (list !== emptyList) {
          result[count++] = list.head;
          list = list.tail;
        }
        return result;
      }
      return function(foldr) {
        return function(xs) {
          return listToArray(foldr(curryCons)(emptyList)(xs));
        };
      };
    })();
    exports.length = function(xs) {
      return xs.length;
    };
    exports.cons = function(e) {
      return function(l) {
        return [e].concat(l);
      };
    };
    exports.concat = function(xss) {
      var result = [];
      for (var i = 0, l = xss.length; i < l; i++) {
        var xs = xss[i];
        for (var j = 0, m = xs.length; j < m; j++) {
          result.push(xs[j]);
        }
      }
      return result;
    };
    exports.zipWith = function(f) {
      return function(xs) {
        return function(ys) {
          var l = xs.length < ys.length ? xs.length : ys.length;
          var result = new Array(l);
          for (var i = 0; i < l; i++) {
            result[i] = f(xs[i])(ys[i]);
          }
          return result;
        };
      };
    };
  })(PS["Data.Array"] = PS["Data.Array"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Array"];
    var Prelude = PS["Prelude"];
    var Control_Alt = PS["Control.Alt"];
    var Control_Alternative = PS["Control.Alternative"];
    var Control_Lazy = PS["Control.Lazy"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Traversable = PS["Data.Traversable"];
    var Data_Tuple = PS["Data.Tuple"];
    var Data_Unfoldable = PS["Data.Unfoldable"];
    var Partial_Unsafe = PS["Partial.Unsafe"];
    var Data_Function = PS["Data.Function"];
    var Data_Ordering = PS["Data.Ordering"];
    var Data_Ring = PS["Data.Ring"];
    var Data_Ord = PS["Data.Ord"];
    var Data_Eq = PS["Data.Eq"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Control_Apply = PS["Control.Apply"];
    var Data_Functor = PS["Data.Functor"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Boolean = PS["Data.Boolean"];
    var Data_Semiring = PS["Data.Semiring"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Control_Bind = PS["Control.Bind"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Control_Category = PS["Control.Category"];
    var fromFoldable = function(dictFoldable) {
      return $foreign.fromFoldableImpl(Data_Foldable.foldr(dictFoldable));
    };
    exports["fromFoldable"] = fromFoldable;
    exports["cons"] = $foreign.cons;
    exports["length"] = $foreign.length;
    exports["range"] = $foreign.range;
    exports["zipWith"] = $foreign.zipWith;
  })(PS["Data.Array"] = PS["Data.Array"] || {});
  (function(exports) {
    exports.runEffFn4 = function runEffFn4(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function() {
                return fn(a, b, c, d);
              };
            };
          };
        };
      };
    };
  })(PS["Data.Function.Eff"] = PS["Data.Function.Eff"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.Function.Eff"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    exports["runEffFn4"] = $foreign.runEffFn4;
  })(PS["Data.Function.Eff"] = PS["Data.Function.Eff"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Control_Alt = PS["Control.Alt"];
    var Control_Alternative = PS["Control.Alternative"];
    var Control_Lazy = PS["Control.Lazy"];
    var Control_MonadPlus = PS["Control.MonadPlus"];
    var Control_MonadZero = PS["Control.MonadZero"];
    var Control_Plus = PS["Control.Plus"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_Generic = PS["Data.Generic"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Monoid = PS["Data.Monoid"];
    var Data_Traversable = PS["Data.Traversable"];
    var Data_Tuple = PS["Data.Tuple"];
    var Data_Unfoldable = PS["Data.Unfoldable"];
    var Control_Apply = PS["Control.Apply"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Show = PS["Data.Show"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Function = PS["Data.Function"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Data_Ord = PS["Data.Ord"];
    var Data_Ordering = PS["Data.Ordering"];
    var Data_Functor = PS["Data.Functor"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Monad = PS["Control.Monad"];
    var Data_Ring = PS["Data.Ring"];
    var Data_Boolean = PS["Data.Boolean"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_BooleanAlgebra = PS["Data.BooleanAlgebra"];
    var Control_Category = PS["Control.Category"];
    var Nil = (function() {
      function Nil2() {
      }
      ;
      Nil2.value = new Nil2();
      return Nil2;
    })();
    var Cons = (function() {
      function Cons2(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
      }
      ;
      Cons2.create = function(value0) {
        return function(value1) {
          return new Cons2(value0, value1);
        };
      };
      return Cons2;
    })();
    var reverse = (function() {
      var go = function(__copy_acc) {
        return function(__copy_v) {
          var acc = __copy_acc;
          var v = __copy_v;
          tco: while (true) {
            if (v instanceof Nil) {
              return acc;
            }
            ;
            if (v instanceof Cons) {
              var __tco_acc = new Cons(v.value0, acc);
              var __tco_v = v.value1;
              acc = __tco_acc;
              v = __tco_v;
              continue tco;
            }
            ;
            throw new Error("Failed pattern match at Data.List line 346, column 1 - line 349, column 42: " + [acc.constructor.name, v.constructor.name]);
          }
          ;
        };
      };
      return go(Nil.value);
    })();
    var index = function(__copy_v) {
      return function(__copy_v1) {
        var v = __copy_v;
        var v1 = __copy_v1;
        tco: while (true) {
          if (v instanceof Nil) {
            return Data_Maybe.Nothing.value;
          }
          ;
          if (v instanceof Cons && v1 === 0) {
            return new Data_Maybe.Just(v.value0);
          }
          ;
          if (v instanceof Cons) {
            var __tco_v = v.value1;
            var __tco_v1 = v1 - 1;
            v = __tco_v;
            v1 = __tco_v1;
            continue tco;
          }
          ;
          throw new Error("Failed pattern match at Data.List line 262, column 1 - line 262, column 22: " + [v.constructor.name, v1.constructor.name]);
        }
        ;
      };
    };
    var foldableList = new Data_Foldable.Foldable(function(dictMonoid) {
      return function(f) {
        return Data_Foldable.foldl(foldableList)(function(acc) {
          return function($387) {
            return Data_Semigroup.append(dictMonoid["__superclass_Data.Semigroup.Semigroup_0"]())(acc)(f($387));
          };
        })(Data_Monoid.mempty(dictMonoid));
      };
    }, /* @__PURE__ */ (function() {
      var go = function(__copy_v) {
        return function(__copy_b) {
          return function(__copy_v1) {
            var v = __copy_v;
            var b = __copy_b;
            var v1 = __copy_v1;
            tco: while (true) {
              if (v1 instanceof Nil) {
                return b;
              }
              ;
              if (v1 instanceof Cons) {
                var __tco_v = v;
                var __tco_b = v(b)(v1.value0);
                var __tco_v1 = v1.value1;
                v = __tco_v;
                b = __tco_b;
                v1 = __tco_v1;
                continue tco;
              }
              ;
              throw new Error("Failed pattern match at Data.List line 734, column 3 - line 737, column 49: " + [v.constructor.name, b.constructor.name, v1.constructor.name]);
            }
            ;
          };
        };
      };
      return go;
    })(), function(v) {
      return function(b) {
        return function(v1) {
          if (v1 instanceof Nil) {
            return b;
          }
          ;
          if (v1 instanceof Cons) {
            return v(v1.value0)(Data_Foldable.foldr(foldableList)(v)(b)(v1.value1));
          }
          ;
          throw new Error("Failed pattern match at Data.List line 732, column 3 - line 732, column 20: " + [v.constructor.name, b.constructor.name, v1.constructor.name]);
        };
      };
    });
    var findIndex = function(fn) {
      var go = function(__copy_v) {
        return function(__copy_v1) {
          var v = __copy_v;
          var v1 = __copy_v1;
          tco: while (true) {
            if (v1 instanceof Cons) {
              if (fn(v1.value0)) {
                return new Data_Maybe.Just(v);
              }
              ;
              if (Data_Boolean.otherwise) {
                var __tco_v = v + 1 | 0;
                var __tco_v1 = v1.value1;
                v = __tco_v;
                v1 = __tco_v1;
                continue tco;
              }
              ;
            }
            ;
            if (v1 instanceof Nil) {
              return Data_Maybe.Nothing.value;
            }
            ;
            throw new Error("Failed pattern match at Data.List line 282, column 3 - line 283, column 47: " + [v.constructor.name, v1.constructor.name]);
          }
          ;
        };
      };
      return go(0);
    };
    var filter = function(p) {
      var go = function(__copy_acc) {
        return function(__copy_v) {
          var acc = __copy_acc;
          var v = __copy_v;
          tco: while (true) {
            if (v instanceof Nil) {
              return reverse(acc);
            }
            ;
            if (v instanceof Cons) {
              if (p(v.value0)) {
                var __tco_acc = new Cons(v.value0, acc);
                var __tco_v = v.value1;
                acc = __tco_acc;
                v = __tco_v;
                continue tco;
              }
              ;
              if (Data_Boolean.otherwise) {
                var __tco_acc = acc;
                var __tco_v = v.value1;
                acc = __tco_acc;
                v = __tco_v;
                continue tco;
              }
              ;
            }
            ;
            throw new Error("Failed pattern match at Data.List line 369, column 1 - line 374, column 28: " + [acc.constructor.name, v.constructor.name]);
          }
          ;
        };
      };
      return go(Nil.value);
    };
    exports["Nil"] = Nil;
    exports["Cons"] = Cons;
    exports["filter"] = filter;
    exports["findIndex"] = findIndex;
    exports["index"] = index;
    exports["reverse"] = reverse;
    exports["foldableList"] = foldableList;
  })(PS["Data.List"] = PS["Data.List"] || {});
  (function(exports) {
    "use strict";
    exports._charAt = function(just) {
      return function(nothing) {
        return function(i) {
          return function(s) {
            return i >= 0 && i < s.length ? just(s.charAt(i)) : nothing;
          };
        };
      };
    };
    exports.singleton = function(c) {
      return c;
    };
    exports["_indexOf'"] = function(just) {
      return function(nothing) {
        return function(x) {
          return function(startAt) {
            return function(s) {
              if (startAt < 0 || startAt > s.length) return nothing;
              var i = s.indexOf(x, startAt);
              return i === -1 ? nothing : just(i);
            };
          };
        };
      };
    };
    exports.length = function(s) {
      return s.length;
    };
    exports.trim = function(s) {
      return s.trim();
    };
  })(PS["Data.String"] = PS["Data.String"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Data.String"];
    var Prelude = PS["Prelude"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_String_Unsafe = PS["Data.String.Unsafe"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Ordering = PS["Data.Ordering"];
    var Data_Ring = PS["Data.Ring"];
    var Data_Function = PS["Data.Function"];
    var indexOf$prime = $foreign["_indexOf'"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
    var charAt = $foreign._charAt(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
    exports["charAt"] = charAt;
    exports["indexOf'"] = indexOf$prime;
    exports["length"] = $foreign.length;
    exports["singleton"] = $foreign.singleton;
    exports["trim"] = $foreign.trim;
  })(PS["Data.String"] = PS["Data.String"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Data_List = PS["Data.List"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Generic = PS["Data.Generic"];
    var Control_Apply = PS["Control.Apply"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Show = PS["Data.Show"];
    var Data_Eq = PS["Data.Eq"];
    var MoveLeft = (function() {
      function MoveLeft2() {
      }
      ;
      MoveLeft2.value = new MoveLeft2();
      return MoveLeft2;
    })();
    var MoveRight = (function() {
      function MoveRight2() {
      }
      ;
      MoveRight2.value = new MoveRight2();
      return MoveRight2;
    })();
    var SkipNext = (function() {
      function SkipNext2() {
      }
      ;
      SkipNext2.value = new SkipNext2();
      return SkipNext2;
    })();
    var Goto = (function() {
      function Goto2(value0) {
        this.value0 = value0;
      }
      ;
      Goto2.create = function(value0) {
        return new Goto2(value0);
      };
      return Goto2;
    })();
    var LInstruction = (function() {
      function LInstruction2(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
      }
      ;
      LInstruction2.create = function(value0) {
        return function(value1) {
          return new LInstruction2(value0, value1);
        };
      };
      return LInstruction2;
    })();
    var Comment = (function() {
      function Comment2(value0) {
        this.value0 = value0;
      }
      ;
      Comment2.create = function(value0) {
        return new Comment2(value0);
      };
      return Comment2;
    })();
    var stripComments = (function() {
      var instruction = function(v) {
        if (v instanceof Comment) {
          return false;
        }
        ;
        return true;
      };
      return Data_List.filter(instruction);
    })();
    exports["MoveLeft"] = MoveLeft;
    exports["MoveRight"] = MoveRight;
    exports["SkipNext"] = SkipNext;
    exports["Goto"] = Goto;
    exports["LInstruction"] = LInstruction;
    exports["Comment"] = Comment;
    exports["stripComments"] = stripComments;
  })(PS["Language.Robo.Spec"] = PS["Language.Robo.Spec"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Data_List = PS["Data.List"];
    var Data_Maybe = PS["Data.Maybe"];
    var Language_Robo_Spec = PS["Language.Robo.Spec"];
    var State = PS["State"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Function = PS["Data.Function"];
    var Data_Ring = PS["Data.Ring"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_Ordering = PS["Data.Ordering"];
    var Data_Ord = PS["Data.Ord"];
    var step = function(st) {
      return function(program) {
        var stepRobot = function(robo) {
          var onParachute = function(pos) {
            return pos === st.r1.parachute || pos === st.r2.parachute;
          };
          var cond = function(label) {
            return function(v) {
              if (v instanceof Language_Robo_Spec.LInstruction) {
                return Data_Eq.eq(Data_Maybe.eqMaybe(Data_Eq.eqString))(v.value0)(new Data_Maybe.Just(label));
              }
              ;
              return false;
            };
          };
          var findInstruction = function(label) {
            return Data_Function.apply(Data_Maybe.fromMaybe(-1))(Data_List.findIndex(cond(label))(program));
          };
          var $$eval = function(v) {
            if (v instanceof Language_Robo_Spec.MoveRight) {
              var $7 = {};
              for (var $8 in robo) {
                if (robo.hasOwnProperty($8)) {
                  $7[$8] = robo[$8];
                }
                ;
              }
              ;
              $7.position = robo.position + 1 | 0;
              $7.instruction = robo.instruction + 1 | 0;
              return $7;
            }
            ;
            if (v instanceof Language_Robo_Spec.MoveLeft) {
              var $10 = {};
              for (var $11 in robo) {
                if (robo.hasOwnProperty($11)) {
                  $10[$11] = robo[$11];
                }
                ;
              }
              ;
              $10.position = robo.position - 1;
              $10.instruction = robo.instruction + 1 | 0;
              return $10;
            }
            ;
            if (v instanceof Language_Robo_Spec.SkipNext) {
              var $14 = {};
              for (var $15 in robo) {
                if (robo.hasOwnProperty($15)) {
                  $14[$15] = robo[$15];
                }
                ;
              }
              ;
              $14.instruction = (function() {
                var $13 = onParachute(robo.position);
                if ($13) {
                  return robo.instruction + 2 | 0;
                }
                ;
                if (!$13) {
                  return robo.instruction + 1 | 0;
                }
                ;
                throw new Error("Failed pattern match at Language.Robo.Interpreter line 36, column 32 - line 38, column 60: " + [$13.constructor.name]);
              })();
              return $14;
            }
            ;
            if (v instanceof Language_Robo_Spec.Goto) {
              var $17 = {};
              for (var $18 in robo) {
                if (robo.hasOwnProperty($18)) {
                  $17[$18] = robo[$18];
                }
                ;
              }
              ;
              $17.instruction = findInstruction(v.value0);
              return $17;
            }
            ;
            throw new Error("Failed pattern match at Language.Robo.Interpreter line 22, column 5 - line 22, column 26: " + [v.constructor.name]);
          };
          var $21 = Data_List.index(program)(robo.instruction);
          if ($21 instanceof Data_Maybe.Just && $21.value0 instanceof Language_Robo_Spec.LInstruction) {
            return $$eval($21.value0.value1);
          }
          ;
          return robo;
        };
        var r2$prime = stepRobot(st.r2);
        var r1$prime = stepRobot(st.r1);
        var $25 = {};
        for (var $26 in st) {
          if (st.hasOwnProperty($26)) {
            $25[$26] = st[$26];
          }
          ;
        }
        ;
        $25.r1 = r1$prime;
        $25.r2 = r2$prime;
        $25.collision = Data_Eq.notEq(Data_Ordering.eqOrdering)(Data_Ord.compare(Data_Ord.ordInt)(st.r1.position)(st.r2.position))(Data_Ord.compare(Data_Ord.ordInt)(r1$prime.position)(r2$prime.position));
        return $25;
      };
    };
    exports["step"] = step;
  })(PS["Language.Robo.Interpreter"] = PS["Language.Robo.Interpreter"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Control_MonadPlus = PS["Control.MonadPlus"];
    var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
    var Control_Plus = PS["Control.Plus"];
    var Data_Bifunctor = PS["Data.Bifunctor"];
    var Data_Either = PS["Data.Either"];
    var Data_Show = PS["Data.Show"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Functor = PS["Data.Functor"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Control_Apply = PS["Control.Apply"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Applicative = PS["Control.Applicative"];
    var Control_Alt = PS["Control.Alt"];
    var Data_Boolean = PS["Data.Boolean"];
    var Control_Alternative = PS["Control.Alternative"];
    var Control_Monad = PS["Control.Monad"];
    var Control_MonadZero = PS["Control.MonadZero"];
    var ParseError = (function() {
      function ParseError2(value0) {
        this.value0 = value0;
      }
      ;
      ParseError2.create = function(value0) {
        return new ParseError2(value0);
      };
      return ParseError2;
    })();
    var Parser = (function() {
      function Parser2(value0) {
        this.value0 = value0;
      }
      ;
      Parser2.create = function(value0) {
        return new Parser2(value0);
      };
      return Parser2;
    })();
    var unParser = function(v) {
      return v.value0;
    };
    var $$try = function(v) {
      return new Parser(function(v1) {
        return Data_Bifunctor.lmap(Data_Either.bifunctorEither)(function(v2) {
          var $26 = {};
          for (var $27 in v2) {
            if (v2.hasOwnProperty($27)) {
              $26[$27] = v2[$27];
            }
            ;
          }
          ;
          $26.pos = v1.pos;
          return $26;
        })(v.value0(v1));
      });
    };
    var runParser = function(v) {
      return function(s) {
        return Data_Bifunctor.bimap(Data_Either.bifunctorEither)(function(v1) {
          return v1.error;
        })(function(v1) {
          return v1.result;
        })(v.value0({
          str: s,
          pos: 0
        }));
      };
    };
    var functorParser = new Data_Functor.Functor(function(f) {
      return function(v) {
        return new Parser(function($79) {
          return Data_Functor.map(Data_Either.functorEither)(function(v1) {
            return {
              result: f(v1.result),
              suffix: v1.suffix
            };
          })(v.value0($79));
        });
      };
    });
    var fail = function(msg) {
      return new Parser(function(v) {
        return new Data_Either.Left({
          pos: v.pos,
          error: new ParseError(msg)
        });
      });
    };
    var applyParser = new Control_Apply.Apply(function() {
      return functorParser;
    }, function(v) {
      return function(v1) {
        return new Parser(function(s) {
          return Control_Bind.bind(Data_Either.bindEither)(v.value0(s))(function(v2) {
            return Control_Bind.bind(Data_Either.bindEither)(v1.value0(v2.suffix))(function(v3) {
              return Control_Applicative.pure(Data_Either.applicativeEither)({
                result: v2.result(v3.result),
                suffix: v3.suffix
              });
            });
          });
        });
      };
    });
    var bindParser = new Control_Bind.Bind(function() {
      return applyParser;
    }, function(v) {
      return function(f) {
        return new Parser(function(s) {
          return Control_Bind.bind(Data_Either.bindEither)(v.value0(s))(function(v1) {
            return unParser(f(v1.result))(v1.suffix);
          });
        });
      };
    });
    var applicativeParser = new Control_Applicative.Applicative(function() {
      return applyParser;
    }, function(a) {
      return new Parser(function(s) {
        return new Data_Either.Right({
          result: a,
          suffix: s
        });
      });
    });
    var altParser = new Control_Alt.Alt(function() {
      return functorParser;
    }, function(v) {
      return function(v1) {
        return new Parser(function(s) {
          var $73 = v.value0(s);
          if ($73 instanceof Data_Either.Left) {
            if (s.pos === $73.value0.pos) {
              return v1.value0(s);
            }
            ;
            if (Data_Boolean.otherwise) {
              return new Data_Either.Left({
                error: $73.value0.error,
                pos: $73.value0.pos
              });
            }
            ;
          }
          ;
          return $73;
        });
      };
    });
    exports["ParseError"] = ParseError;
    exports["Parser"] = Parser;
    exports["fail"] = fail;
    exports["runParser"] = runParser;
    exports["try"] = $$try;
    exports["unParser"] = unParser;
    exports["functorParser"] = functorParser;
    exports["applyParser"] = applyParser;
    exports["applicativeParser"] = applicativeParser;
    exports["altParser"] = altParser;
    exports["bindParser"] = bindParser;
  })(PS["Text.Parsing.StringParser"] = PS["Text.Parsing.StringParser"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Data_Either = PS["Data.Either"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_List = PS["Data.List"];
    var Data_Foldable = PS["Data.Foldable"];
    var Control_Alt = PS["Control.Alt"];
    var Control_Apply = PS["Control.Apply"];
    var Text_Parsing_StringParser = PS["Text.Parsing.StringParser"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Function = PS["Data.Function"];
    var withError = function(p) {
      return function(msg) {
        return Control_Alt.alt(Text_Parsing_StringParser.altParser)(p)(Text_Parsing_StringParser.fail(msg));
      };
    };
    var option = function(a) {
      return function(p) {
        return Control_Alt.alt(Text_Parsing_StringParser.altParser)(p)(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(a));
      };
    };
    var optionMaybe = function(p) {
      return option(Data_Maybe.Nothing.value)(Data_Functor.map(Text_Parsing_StringParser.functorParser)(Data_Maybe.Just.create)(p));
    };
    var many1 = function(p) {
      return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(p)(function(v) {
        return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(many(p))(function(v1) {
          return Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(new Data_List.Cons(v, v1));
        });
      });
    };
    var many = function(p) {
      return Control_Alt.alt(Text_Parsing_StringParser.altParser)(many1(p))(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(Data_List.Nil.value));
    };
    var sepBy1 = function(p) {
      return function(sep) {
        return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(p)(function(v) {
          return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Data_Function.apply(many)(Control_Bind.bind(Text_Parsing_StringParser.bindParser)(sep)(function() {
            return p;
          })))(function(v1) {
            return Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(new Data_List.Cons(v, v1));
          });
        });
      };
    };
    var sepBy = function(p) {
      return function(sep) {
        return Control_Alt.alt(Text_Parsing_StringParser.altParser)(sepBy1(p)(sep))(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(Data_List.Nil.value));
      };
    };
    exports["many"] = many;
    exports["many1"] = many1;
    exports["option"] = option;
    exports["optionMaybe"] = optionMaybe;
    exports["sepBy"] = sepBy;
    exports["sepBy1"] = sepBy1;
    exports["withError"] = withError;
  })(PS["Text.Parsing.StringParser.Combinators"] = PS["Text.Parsing.StringParser.Combinators"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Control_Alt = PS["Control.Alt"];
    var Data_Array = PS["Data.Array"];
    var Data_Char = PS["Data.Char"];
    var Data_Either = PS["Data.Either"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_String = PS["Data.String"];
    var Text_Parsing_StringParser = PS["Text.Parsing.StringParser"];
    var Text_Parsing_StringParser_Combinators = PS["Text.Parsing.StringParser.Combinators"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_Ord = PS["Data.Ord"];
    var Data_Unit = PS["Data.Unit"];
    var Control_Bind = PS["Control.Bind"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Function = PS["Data.Function"];
    var Data_Show = PS["Data.Show"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Data_List = PS["Data.List"];
    var Data_Monoid = PS["Data.Monoid"];
    var Data_Functor = PS["Data.Functor"];
    var string = function(nt) {
      return new Text_Parsing_StringParser.Parser(function(s) {
        if (Data_Eq.eq(Data_Maybe.eqMaybe(Data_Eq.eqInt))(Data_String["indexOf'"](nt)(s.pos)(s.str))(new Data_Maybe.Just(s.pos))) {
          return new Data_Either.Right({
            result: nt,
            suffix: {
              str: s.str,
              pos: s.pos + Data_String.length(nt) | 0
            }
          });
        }
        ;
        return new Data_Either.Left({
          pos: s.pos,
          error: new Text_Parsing_StringParser.ParseError("Expected '" + (nt + "'."))
        });
      });
    };
    var eof = new Text_Parsing_StringParser.Parser(function(s) {
      if (s.pos < Data_String.length(s.str)) {
        return new Data_Either.Left({
          pos: s.pos,
          error: new Text_Parsing_StringParser.ParseError("Expected EOF")
        });
      }
      ;
      return new Data_Either.Right({
        result: Data_Unit.unit,
        suffix: s
      });
    });
    var anyChar = new Text_Parsing_StringParser.Parser(function(v) {
      var $17 = Data_String.charAt(v.pos)(v.str);
      if ($17 instanceof Data_Maybe.Just) {
        return new Data_Either.Right({
          result: $17.value0,
          suffix: {
            str: v.str,
            pos: v.pos + 1 | 0
          }
        });
      }
      ;
      if ($17 instanceof Data_Maybe.Nothing) {
        return new Data_Either.Left({
          pos: v.pos,
          error: new Text_Parsing_StringParser.ParseError("Unexpected EOF")
        });
      }
      ;
      throw new Error("Failed pattern match at Text.Parsing.StringParser.String line 42, column 3 - line 44, column 64: " + [$17.constructor.name]);
    });
    var satisfy = function(f) {
      return Text_Parsing_StringParser["try"](Control_Bind.bind(Text_Parsing_StringParser.bindParser)(anyChar)(function(v) {
        var $26 = f(v);
        if ($26) {
          return Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(v);
        }
        ;
        if (!$26) {
          return Data_Function.apply(Text_Parsing_StringParser.fail)("Character " + (Data_Show.show(Data_Show.showChar)(v) + " did not satisfy predicate"));
        }
        ;
        throw new Error("Failed pattern match at Text.Parsing.StringParser.String line 65, column 3 - line 69, column 1: " + [$26.constructor.name]);
      }));
    };
    var $$char = function(c) {
      return Text_Parsing_StringParser_Combinators.withError(satisfy(function(v) {
        return v === c;
      }))("Could not match character " + Data_Show.show(Data_Show.showChar)(c));
    };
    exports["anyChar"] = anyChar;
    exports["char"] = $$char;
    exports["eof"] = eof;
    exports["satisfy"] = satisfy;
    exports["string"] = string;
  })(PS["Text.Parsing.StringParser.String"] = PS["Text.Parsing.StringParser.String"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Control_Alt = PS["Control.Alt"];
    var Control_Apply = PS["Control.Apply"];
    var Data_Char = PS["Data.Char"];
    var Data_Either = PS["Data.Either"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_List = PS["Data.List"];
    var Data_String = PS["Data.String"];
    var Text_Parsing_StringParser = PS["Text.Parsing.StringParser"];
    var Text_Parsing_StringParser_Combinators = PS["Text.Parsing.StringParser.Combinators"];
    var Text_Parsing_StringParser_String = PS["Text.Parsing.StringParser.String"];
    var Language_Robo_Spec = PS["Language.Robo.Spec"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Data_Monoid = PS["Data.Monoid"];
    var Data_Functor = PS["Data.Functor"];
    var Control_Bind = PS["Control.Bind"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Function = PS["Data.Function"];
    var Control_Applicative = PS["Control.Applicative"];
    var toString = function($10) {
      return Data_String.trim(Data_Foldable.foldMap(Data_List.foldableList)(Data_Monoid.monoidString)(Data_String.singleton)($10));
    };
    var space = Data_Functor["void"](Text_Parsing_StringParser.functorParser)(Control_Alt.alt(Text_Parsing_StringParser.altParser)(Text_Parsing_StringParser_String.string(" "))(Text_Parsing_StringParser_String.string("	")));
    var skipSpace = Data_Functor["void"](Text_Parsing_StringParser.functorParser)(Text_Parsing_StringParser_Combinators.many(space));
    var parseGotoLabel = Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Text_Parsing_StringParser_Combinators.many1(Text_Parsing_StringParser_String.satisfy(function(c) {
      return c !== " " && (c !== "\n" && c !== "\r");
    })))(function(v) {
      return Data_Function.apply(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser))(toString(v));
    });
    var parseInstruction = Text_Parsing_StringParser_Combinators.withError(Control_Alt.alt(Text_Parsing_StringParser.altParser)(Control_Alt.alt(Text_Parsing_StringParser.altParser)(Control_Alt.alt(Text_Parsing_StringParser.altParser)(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(Text_Parsing_StringParser_String.string("left"))(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(Language_Robo_Spec.MoveLeft.value)))(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(Text_Parsing_StringParser_String.string("right"))(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(Language_Robo_Spec.MoveRight.value))))(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(Text_Parsing_StringParser_String.string("skipNext"))(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser)(Language_Robo_Spec.SkipNext.value))))(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(Text_Parsing_StringParser_String.string("goto"))(Text_Parsing_StringParser_Combinators.many1(space)))(Data_Functor.map(Text_Parsing_StringParser.functorParser)(Language_Robo_Spec.Goto.create)(parseGotoLabel))))("Unknown instruction");
    var parseComment = Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Text_Parsing_StringParser_String["char"]("#"))(function() {
      return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Text_Parsing_StringParser_Combinators.many1(Text_Parsing_StringParser_String.satisfy(function(c) {
        return c !== "\n" && c !== "\r";
      })))(function(v) {
        return Data_Function.apply(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser))(new Language_Robo_Spec.Comment(toString(v)));
      });
    });
    var newline = Data_Functor["void"](Text_Parsing_StringParser.functorParser)(Control_Alt.alt(Text_Parsing_StringParser.altParser)(Text_Parsing_StringParser_String["char"]("\n"))(Text_Parsing_StringParser_String["char"]("\r")));
    var separator = Data_Functor["void"](Text_Parsing_StringParser.functorParser)(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(Control_Apply.applySecond(Text_Parsing_StringParser.applyParser)(skipSpace)(newline))(Text_Parsing_StringParser_Combinators.many(Control_Alt.alt(Text_Parsing_StringParser.altParser)(newline)(space))));
    var whitespace = Control_Alt.alt(Text_Parsing_StringParser.altParser)(space)(newline);
    var skipWhite = Data_Functor["void"](Text_Parsing_StringParser.functorParser)(Text_Parsing_StringParser_Combinators.many(whitespace));
    var parseLabel = Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Text_Parsing_StringParser_Combinators.many1(Text_Parsing_StringParser_String.satisfy(function(c) {
      return c !== ":" && (c !== "\n" && c !== "\r");
    })))(function(v) {
      return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Text_Parsing_StringParser_String["char"](":"))(function() {
        return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(skipWhite)(function() {
          return Data_Function.apply(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser))(toString(v));
        });
      });
    });
    var parseLInstruction = Control_Alt.alt(Text_Parsing_StringParser.altParser)(parseComment)(Control_Bind.bind(Text_Parsing_StringParser.bindParser)(Text_Parsing_StringParser_Combinators.optionMaybe(Text_Parsing_StringParser["try"](parseLabel)))(function(v) {
      return Control_Bind.bind(Text_Parsing_StringParser.bindParser)(parseInstruction)(function(v1) {
        return Data_Function.apply(Control_Applicative.pure(Text_Parsing_StringParser.applicativeParser))(new Language_Robo_Spec.LInstruction(v, v1));
      });
    }));
    var parseProgram = Control_Apply.applyFirst(Text_Parsing_StringParser.applyParser)(Text_Parsing_StringParser_Combinators.sepBy(parseLInstruction)(separator))(Text_Parsing_StringParser_String.eof);
    var parseRobo = function($11) {
      return Text_Parsing_StringParser.runParser(parseProgram)(Data_String.trim($11));
    };
    exports["parseRobo"] = parseRobo;
  })(PS["Language.Robo.Parser"] = PS["Language.Robo.Parser"] || {});
  (function(exports) {
    exports.toggleInterval = /* @__PURE__ */ (function() {
      var id;
      return function() {
        if (id === void 0) {
          id = setInterval(function() {
            document.getElementById("step").click();
          }, 100);
        } else {
          clearInterval(id);
          id = void 0;
        }
        return {};
      };
    })();
  })(PS["Main"] = PS["Main"] || {});
  (function(exports) {
    "use strict";
    var React = require_react();
    function getProps(this_) {
      return function() {
        return this_.props;
      };
    }
    exports.getProps = getProps;
    function getRefs(this_) {
      return function() {
        return this_.refs;
      };
    }
    function childrenToArray(children) {
      var result = [];
      React.Children.forEach(children, function(child) {
        result.push(child);
      });
      return result;
    }
    function getChildren(this_) {
      return function() {
        var children = this_.props.children;
        var result = childrenToArray(children);
        return result;
      };
    }
    exports.getChildren = getChildren;
    function writeState(this_) {
      return function(state) {
        return function() {
          this_.setState({
            state
          });
          return state;
        };
      };
    }
    function writeStateWithCallback(this_, cb) {
      return function(state) {
        return function(cb2) {
          return function() {
            this_.setState({
              state
            }, cb2);
            return state;
          };
        };
      };
    }
    exports.writeStateWithCallback = writeStateWithCallback;
    function readState(this_) {
      return function() {
        return this_.state.state;
      };
    }
    exports.readState = readState;
    function transformState(this_) {
      return function(update) {
        return function() {
          this_.setState(function(old, props) {
            return { state: update(old.state) };
          });
        };
      };
    }
    function createClass(spec) {
      var result = {
        displayName: spec.displayName,
        render: function() {
          return spec.render(this)();
        },
        getInitialState: function() {
          return {
            state: spec.getInitialState(this)()
          };
        },
        componentWillMount: function() {
          return spec.componentWillMount(this)();
        },
        componentDidMount: function() {
          return spec.componentDidMount(this)();
        },
        componentWillReceiveProps: function(nextProps) {
          return spec.componentWillReceiveProps(this)(nextProps)();
        },
        shouldComponentUpdate: function(nextProps, nextState) {
          return spec.shouldComponentUpdate(this)(nextProps)(nextState.state)();
        },
        componentWillUpdate: function(nextProps, nextState) {
          return spec.componentWillUpdate(this)(nextProps)(nextState.state)();
        },
        componentDidUpdate: function(prevProps, prevState) {
          return spec.componentDidUpdate(this)(prevProps)(prevState.state)();
        },
        componentWillUnmount: function() {
          return spec.componentWillUnmount(this)();
        }
      };
      return React.createClass(result);
    }
    exports.createClass = createClass;
    function handle(f) {
      return function(e) {
        return f(e)();
      };
    }
    ;
    exports.handle = handle;
    function createElement(class_) {
      return function(props) {
        return function(children) {
          return React.createElement.apply(React, [class_, props].concat(children));
        };
      };
    }
    exports.createElement = createElement;
    exports.createElementTagName = createElement;
    function createElementDynamic(class_) {
      return function(props) {
        return function(children) {
          return React.createElement(class_, props, children);
        };
      };
    }
    ;
    exports.createElementDynamic = createElementDynamic;
    exports.createElementTagNameDynamic = createElementDynamic;
    function createFactory(class_) {
      return React.createFactory(class_);
    }
    exports.createFactory = createFactory;
  })(PS["React"] = PS["React"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["React"];
    var Prelude = PS["Prelude"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Unsafe_Coerce = PS["Unsafe.Coerce"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Unit = PS["Data.Unit"];
    var spec$prime = function(getInitialState) {
      return function(renderFn) {
        return {
          render: renderFn,
          displayName: "",
          getInitialState,
          componentWillMount: function(v) {
            return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
          },
          componentDidMount: function(v) {
            return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
          },
          componentWillReceiveProps: function(v) {
            return function(v1) {
              return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
            };
          },
          shouldComponentUpdate: function(v) {
            return function(v1) {
              return function(v2) {
                return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(true);
              };
            };
          },
          componentWillUpdate: function(v) {
            return function(v1) {
              return function(v2) {
                return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
              };
            };
          },
          componentDidUpdate: function(v) {
            return function(v1) {
              return function(v2) {
                return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
              };
            };
          },
          componentWillUnmount: function(v) {
            return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
          }
        };
      };
    };
    var spec = function(state) {
      return spec$prime(function(v) {
        return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(state);
      });
    };
    exports["spec"] = spec;
    exports["createClass"] = $foreign.createClass;
    exports["createElementTagName"] = $foreign.createElementTagName;
    exports["createElementTagNameDynamic"] = $foreign.createElementTagNameDynamic;
    exports["createFactory"] = $foreign.createFactory;
    exports["getChildren"] = $foreign.getChildren;
    exports["getProps"] = $foreign.getProps;
    exports["handle"] = $foreign.handle;
    exports["readState"] = $foreign.readState;
    exports["writeStateWithCallback"] = $foreign.writeStateWithCallback;
  })(PS["React"] = PS["React"] || {});
  (function(exports) {
    "use strict";
    var React = require_react();
    function unsafeMkProps(key) {
      return function(value) {
        var result = {};
        result[key] = value;
        return result;
      };
    }
    exports.unsafeMkProps = unsafeMkProps;
    function unsafeUnfoldProps(key) {
      return function(value) {
        var result = {};
        var props = {};
        props[key] = result;
        for (var subprop in value) {
          if (value.hasOwnProperty(subprop)) {
            result[subprop] = value[subprop];
          }
        }
        return props;
      };
    }
    exports.unsafeUnfoldProps = unsafeUnfoldProps;
    function unsafePrefixProps(prefix) {
      return function(value) {
        var result = {};
        for (var prop in value) {
          if (value.hasOwnProperty(prop)) {
            result[prefix + prop] = value[prop];
          }
        }
        return result;
      };
    }
    function unsafeFromPropsArray(props) {
      var result = {};
      for (var i = 0, len = props.length; i < len; i++) {
        var prop = props[i];
        for (var key in prop) {
          if (prop.hasOwnProperty(key)) {
            result[key] = prop[key];
          }
        }
      }
      return result;
    }
    ;
    exports.unsafeFromPropsArray = unsafeFromPropsArray;
  })(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["React.DOM.Props"];
    var React = PS["React"];
    var title = $foreign.unsafeMkProps("title");
    var style = $foreign.unsafeUnfoldProps("style");
    var spellCheck = $foreign.unsafeMkProps("spellCheck");
    var rows = $foreign.unsafeMkProps("rows");
    var placeholder = $foreign.unsafeMkProps("placeholder");
    var onClick = function(f) {
      return $foreign.unsafeMkProps("onClick")(React.handle(f));
    };
    var onChange = function(f) {
      return $foreign.unsafeMkProps("onChange")(React.handle(f));
    };
    var disabled = $foreign.unsafeMkProps("disabled");
    var className = $foreign.unsafeMkProps("className");
    var autoFocus = $foreign.unsafeMkProps("autoFocus");
    var _id = $foreign.unsafeMkProps("id");
    exports["_id"] = _id;
    exports["autoFocus"] = autoFocus;
    exports["className"] = className;
    exports["disabled"] = disabled;
    exports["onChange"] = onChange;
    exports["onClick"] = onClick;
    exports["placeholder"] = placeholder;
    exports["rows"] = rows;
    exports["spellCheck"] = spellCheck;
    exports["style"] = style;
    exports["title"] = title;
    exports["unsafeFromPropsArray"] = $foreign.unsafeFromPropsArray;
  })(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});
  (function(exports) {
    "use strict";
    var React = PS["React"];
    var React_DOM_Props = PS["React.DOM.Props"];
    var Unsafe_Coerce = PS["Unsafe.Coerce"];
    var text = Unsafe_Coerce.unsafeCoerce;
    var mkDOM = function(dynamic) {
      return function(tag) {
        return function(props) {
          var createElement = (function() {
            if (!dynamic) {
              return React.createElementTagName;
            }
            ;
            if (dynamic) {
              return React.createElementTagNameDynamic;
            }
            ;
            throw new Error("Failed pattern match at React.DOM line 15, column 5 - line 17, column 55: " + [dynamic.constructor.name]);
          })();
          return createElement(tag)(React_DOM_Props.unsafeFromPropsArray(props));
        };
      };
    };
    var sub = mkDOM(false)("sub");
    var sub$prime = sub([]);
    var table = mkDOM(false)("table");
    var table$prime = table([]);
    var tbody = mkDOM(false)("tbody");
    var tbody$prime = tbody([]);
    var td = mkDOM(false)("td");
    var td$prime = td([]);
    var textarea = mkDOM(false)("textarea");
    var th = mkDOM(false)("th");
    var th$prime = th([]);
    var tr = mkDOM(false)("tr");
    var tr$prime = tr([]);
    var i = mkDOM(false)("i");
    var i$prime = i([]);
    var div = mkDOM(false)("div");
    var div$prime = div([]);
    var code = mkDOM(false)("code");
    var code$prime = code([]);
    var button = mkDOM(false)("button");
    exports["button"] = button;
    exports["code"] = code;
    exports["code'"] = code$prime;
    exports["div"] = div;
    exports["div'"] = div$prime;
    exports["i"] = i;
    exports["i'"] = i$prime;
    exports["mkDOM"] = mkDOM;
    exports["sub"] = sub;
    exports["sub'"] = sub$prime;
    exports["table"] = table;
    exports["table'"] = table$prime;
    exports["tbody"] = tbody;
    exports["tbody'"] = tbody$prime;
    exports["td"] = td;
    exports["td'"] = td$prime;
    exports["text"] = text;
    exports["textarea"] = textarea;
    exports["th"] = th;
    exports["th'"] = th$prime;
    exports["tr"] = tr;
    exports["tr'"] = tr$prime;
  })(PS["React.DOM"] = PS["React.DOM"] || {});
  (function(exports) {
    "use strict";
    var Prelude = PS["Prelude"];
    var Control_Coroutine_1 = PS["Control.Coroutine"];
    var Control_Coroutine_1 = PS["Control.Coroutine"];
    var Control_Monad_Aff = PS["Control.Monad.Aff"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Control_Monad_Eff_Unsafe = PS["Control.Monad.Eff.Unsafe"];
    var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
    var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
    var Control_Monad_Trans = PS["Control.Monad.Trans"];
    var Data_Either = PS["Data.Either"];
    var Data_Foldable = PS["Data.Foldable"];
    var Data_Lens = PS["Data.Lens"];
    var Data_List = PS["Data.List"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Monoid = PS["Data.Monoid"];
    var Data_Tuple = PS["Data.Tuple"];
    var React = PS["React"];
    var React_DOM = PS["React.DOM"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Unit = PS["Data.Unit"];
    var Data_Lens_Prism = PS["Data.Lens.Prism"];
    var Data_Lens_Internal_Market = PS["Data.Lens.Internal.Market"];
    var Control_Monad_Free_Trans = PS["Control.Monad.Free.Trans"];
    var Data_Lens_Fold = PS["Data.Lens.Fold"];
    var Data_Lens_Internal_Forget = PS["Data.Lens.Internal.Forget"];
    var Data_Maybe_First = PS["Data.Maybe.First"];
    var Data_Lens_Setter = PS["Data.Lens.Setter"];
    var Data_Profunctor_Choice = PS["Data.Profunctor.Choice"];
    var Data_Semiring = PS["Data.Semiring"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var Data_Lens_Internal_Tagged = PS["Data.Lens.Internal.Tagged"];
    var Data_Lens_Getter = PS["Data.Lens.Getter"];
    var Data_Functor = PS["Data.Functor"];
    var Data_Profunctor_Strong = PS["Data.Profunctor.Strong"];
    var Control_Category = PS["Control.Category"];
    var Data_Function = PS["Data.Function"];
    var Control_Apply = PS["Control.Apply"];
    var Data_Lens_Lens = PS["Data.Lens.Lens"];
    var simpleSpec = function(performAction) {
      return function(render) {
        return {
          performAction,
          render
        };
      };
    };
    var createReactSpec = function(v) {
      return function(state) {
        var dispatcher = function($$this) {
          return function(action) {
            return Data_Functor["void"](Control_Monad_Eff.functorEff)(function __do() {
              var v1 = React.getProps($$this)();
              var v2 = React.readState($$this)();
              var modify = function(f) {
                return Control_Monad_Aff.makeAff(function(v3) {
                  return function(k) {
                    return Control_Monad_Eff_Unsafe.unsafeInterleaveEff(function __do2() {
                      var v4 = React.readState($$this)();
                      var $$new = f(v4);
                      return Data_Function.apply(Data_Functor["void"](Control_Monad_Eff.functorEff))(React.writeStateWithCallback($$this)($$new)(Control_Monad_Eff_Unsafe.unsafeInterleaveEff(k(Control_Applicative.pure(Data_Maybe.applicativeMaybe)($$new)))))();
                    });
                  };
                });
              };
              var cotransformer = Control_Monad_Rec_Class.forever(Control_Monad_Free_Trans.monadRecFreeT(Control_Coroutine_1.functorCoTransform)(Control_Monad_Aff.monadAff))(Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine_1.functorCoTransform)(Control_Monad_Aff.monadAff))(Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine_1.functorCoTransform))(Control_Monad_Aff.monadAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Unsafe.unsafeInterleaveEff(React.readState($$this)))))(function(v3) {
                return Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine_1.functorCoTransform)(Control_Monad_Aff.monadAff))(Control_Coroutine_1.cotransform(Control_Monad_Aff.monadAff)(new Data_Maybe.Just(v3)))(function(v4) {
                  return Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine_1.functorCoTransform))(Control_Monad_Aff.monadAff)(modify(v4));
                });
              }));
              var process2 = Control_Coroutine_1.fuseCoTransform(Control_Monad_Aff.monadRecAff)(Control_Monad_Aff.monadParAff)(Control_Monad_Rec_Class.forever(Control_Monad_Free_Trans.monadRecFreeT(Control_Coroutine_1.functorTransform)(Control_Monad_Aff.monadAff))(Control_Coroutine_1.transform(Control_Monad_Aff.monadAff)(Control_Category.id(Control_Category.categoryFn))))(Control_Coroutine_1.composeCoTransformers(Control_Monad_Aff.monadRecAff)(Control_Monad_Aff.monadParAff)(cotransformer)(v.performAction(action)(v1)(v2)));
              return Control_Monad_Eff_Unsafe.unsafeInterleaveEff(Control_Monad_Aff.launchAff(Control_Coroutine_1.runProcess(Control_Monad_Aff.monadRecAff)(process2)))();
            });
          };
        };
        var render = function($$this) {
          return Data_Function.apply(Data_Functor.map(Control_Monad_Eff.functorEff)(React_DOM["div'"]))(Control_Apply.apply(Control_Monad_Eff.applyEff)(Control_Apply.apply(Control_Monad_Eff.applyEff)(Data_Functor.map(Control_Monad_Eff.functorEff)(v.render(dispatcher($$this)))(React.getProps($$this)))(React.readState($$this)))(React.getChildren($$this)));
        };
        return {
          spec: React.spec(state)(render),
          dispatcher
        };
      };
    };
    var createClass = function(spec) {
      return function(state) {
        return Data_Function.apply(function($98) {
          return React.createClass((function(v) {
            return v.spec;
          })($98));
        })(createReactSpec(spec)(state));
      };
    };
    exports["createClass"] = createClass;
    exports["createReactSpec"] = createReactSpec;
    exports["simpleSpec"] = simpleSpec;
  })(PS["Thermite"] = PS["Thermite"] || {});
  (function(exports) {
    "use strict";
    var ReactDOM = require_react_dom();
    var ReactDOMServer = require_server();
    exports.renderImpl = function(nothing, just, element, container) {
      var result = ReactDOM.render(element, container);
      return result === null ? nothing : just(result);
    };
  })(PS["ReactDOM"] = PS["ReactDOM"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["ReactDOM"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var DOM = PS["DOM"];
    var DOM_Node_Types = PS["DOM.Node.Types"];
    var Data_Function_Eff = PS["Data.Function.Eff"];
    var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
    var Data_Maybe = PS["Data.Maybe"];
    var React = PS["React"];
    var render = Data_Function_Eff.runEffFn4($foreign.renderImpl)(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
    exports["render"] = render;
  })(PS["ReactDOM"] = PS["ReactDOM"] || {});
  (function(exports) {
    "use strict";
    var $foreign = PS["Main"];
    var Prelude = PS["Prelude"];
    var Control_Monad = PS["Control.Monad"];
    var Control_Monad_Eff = PS["Control.Monad.Eff"];
    var Control_Monad_Eff_Random = PS["Control.Monad.Eff.Random"];
    var Control_Monad_Trans = PS["Control.Monad.Trans"];
    var Control_Monad_Eff_Class = PS["Control.Monad.Eff.Class"];
    var Data_Array = PS["Data.Array"];
    var Data_Either = PS["Data.Either"];
    var Data_Int = PS["Data.Int"];
    var Data_List = PS["Data.List"];
    var Data_Maybe = PS["Data.Maybe"];
    var Data_Nullable = PS["Data.Nullable"];
    var Partial_Unsafe = PS["Partial.Unsafe"];
    var Text_Parsing_StringParser = PS["Text.Parsing.StringParser"];
    var Unsafe_Coerce = PS["Unsafe.Coerce"];
    var Thermite = PS["Thermite"];
    var React = PS["React"];
    var React_DOM = PS["React.DOM"];
    var React_DOM_Props = PS["React.DOM.Props"];
    var ReactDOM = PS["ReactDOM"];
    var DOM = PS["DOM"];
    var DOM_HTML = PS["DOM.HTML"];
    var DOM_HTML_Types = PS["DOM.HTML.Types"];
    var DOM_HTML_Window = PS["DOM.HTML.Window"];
    var DOM_Node_ParentNode = PS["DOM.Node.ParentNode"];
    var State = PS["State"];
    var Language_Robo_Spec = PS["Language.Robo.Spec"];
    var Language_Robo_Parser = PS["Language.Robo.Parser"];
    var Language_Robo_Interpreter = PS["Language.Robo.Interpreter"];
    var Data_Semigroup = PS["Data.Semigroup"];
    var Data_Eq = PS["Data.Eq"];
    var Data_Ring = PS["Data.Ring"];
    var Data_Functor = PS["Data.Functor"];
    var Control_Monad_Free_Trans = PS["Control.Monad.Free.Trans"];
    var Control_Coroutine = PS["Control.Coroutine"];
    var Control_Monad_Aff = PS["Control.Monad.Aff"];
    var Control_Bind = PS["Control.Bind"];
    var Control_Applicative = PS["Control.Applicative"];
    var Data_Function = PS["Data.Function"];
    var Data_Semiring = PS["Data.Semiring"];
    var Data_EuclideanRing = PS["Data.EuclideanRing"];
    var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
    var Data_Show = PS["Data.Show"];
    var Control_Semigroupoid = PS["Control.Semigroupoid"];
    var SetCode = (function() {
      function SetCode2(value0) {
        this.value0 = value0;
      }
      ;
      SetCode2.create = function(value0) {
        return new SetCode2(value0);
      };
      return SetCode2;
    })();
    var Parse = (function() {
      function Parse2() {
      }
      ;
      Parse2.value = new Parse2();
      return Parse2;
    })();
    var Step = (function() {
      function Step2() {
      }
      ;
      Step2.value = new Step2();
      return Step2;
    })();
    var ToggleRunning = (function() {
      function ToggleRunning2() {
      }
      ;
      ToggleRunning2.value = new ToggleRunning2();
      return ToggleRunning2;
    })();
    var Randomize = (function() {
      function Randomize2() {
      }
      ;
      Randomize2.value = new Randomize2();
      return Randomize2;
    })();
    var showHTML = function(v) {
      if (v instanceof Language_Robo_Spec.MoveLeft) {
        return React_DOM["code'"]([React_DOM.text("left")]);
      }
      ;
      if (v instanceof Language_Robo_Spec.MoveRight) {
        return React_DOM["code'"]([React_DOM.text("right")]);
      }
      ;
      if (v instanceof Language_Robo_Spec.SkipNext) {
        return React_DOM["code'"]([React_DOM.text("skipNext")]);
      }
      ;
      if (v instanceof Language_Robo_Spec.Goto) {
        return React_DOM["code'"]([React_DOM.text("goto "), React_DOM["i'"]([React_DOM.text(v.value0)])]);
      }
      ;
      throw new Error("Failed pattern match at Main line 147, column 1 - line 147, column 50: " + [v.constructor.name]);
    };
    var maxRange = 5;
    var mapIndexed = function(f) {
      return function(xs) {
        return Data_Array.zipWith(f)(Data_Array.range(0)(Data_Array.length(xs)))(xs);
      };
    };
    var programTable = function(v) {
      return function(v1) {
        return function(v2) {
          if (v instanceof Data_Either.Left) {
            return [React_DOM["tr'"]([React_DOM["td'"]([React_DOM.text("Parse error: " + v.value0.value0)])])];
          }
          ;
          if (v instanceof Data_Either.Right && v.value0 instanceof Data_List.Nil) {
            return [];
          }
          ;
          if (v instanceof Data_Either.Right) {
            var row = function(v3) {
              return function(v4) {
                if (v4 instanceof Language_Robo_Spec.LInstruction) {
                  return React_DOM["tr'"]([React_DOM["td'"]([React_DOM.div([React_DOM_Props.className((function() {
                    var $35 = v3 === v1;
                    if ($35) {
                      return "label1";
                    }
                    ;
                    if (!$35) {
                      return "";
                    }
                    ;
                    throw new Error("Failed pattern match at Main line 165, column 45 - line 165, column 77: " + [$35.constructor.name]);
                  })())])([])]), React_DOM["td'"]([React_DOM.div([React_DOM_Props.className((function() {
                    var $36 = v3 === v2;
                    if ($36) {
                      return "label2";
                    }
                    ;
                    if (!$36) {
                      return "";
                    }
                    ;
                    throw new Error("Failed pattern match at Main line 166, column 45 - line 166, column 77: " + [$36.constructor.name]);
                  })())])([])]), React_DOM["td'"]([React_DOM["code'"]([React_DOM.text(Data_Maybe.fromMaybe("")(v4.value0))])]), React_DOM["td'"]([showHTML(v4.value1)])]);
                }
                ;
                if (v4 instanceof Language_Robo_Spec.Comment) {
                  return React_DOM["tr'"]([]);
                }
                ;
                throw new Error("Failed pattern match at Main line 157, column 9 - line 162, column 47: " + [v3.constructor.name, v4.constructor.name]);
              };
            };
            var header = React_DOM["tr'"]([React_DOM["th'"]([React_DOM.text("R"), React_DOM["sub'"]([React_DOM.text("1")])]), React_DOM["th'"]([React_DOM.text("R"), React_DOM["sub'"]([React_DOM.text("2")])]), React_DOM["th'"]([React_DOM.text("Label")]), React_DOM["th'"]([React_DOM.text("Instruction")])]);
            return Data_Array.cons(header)(mapIndexed(row)(Data_Array.fromFoldable(Data_List.foldableList)(v.value0)));
          }
          ;
          throw new Error("Failed pattern match at Main line 154, column 1 - line 154, column 99: " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    };
    var initialCode = "# Useless example program\nstart: left\n       goto start";
    var initial = function(pos) {
      return {
        position: pos,
        parachute: pos,
        instruction: 0
      };
    };
    var initialState = {
      r1: initial(-5),
      r2: initial(5),
      code: initialCode,
      parsed: false,
      program: new Data_Either.Right(Data_List.Nil.value),
      running: false,
      collision: false
    };
    var performAction = function(v) {
      return function(v1) {
        return function(v2) {
          if (v instanceof SetCode) {
            return Data_Functor["void"](Control_Monad_Free_Trans.functorFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.functorAff))(Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.monadAff))(Control_Applicative.when(Control_Monad_Free_Trans.applicativeFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.monadAff))(v2.running)(Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine.functorCoTransform))(Control_Monad_Aff.monadAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)($foreign.toggleInterval))))(function() {
              return Data_Function.apply(Control_Coroutine.cotransform(Control_Monad_Aff.monadAff))(function(v3) {
                var $45 = {};
                for (var $46 in v2) {
                  if (v2.hasOwnProperty($46)) {
                    $45[$46] = v2[$46];
                  }
                  ;
                }
                ;
                $45.code = v.value0;
                $45.parsed = false;
                $45.program = new Data_Either.Right(Data_List.Nil.value);
                $45.running = false;
                return $45;
              });
            }));
          }
          ;
          if (v instanceof Randomize) {
            return Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.monadAff))(Data_Function.apply(Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine.functorCoTransform))(Control_Monad_Aff.monadAff))(Data_Function.apply(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff))(Control_Monad_Eff_Random.randomInt(0)(2 * maxRange | 0))))(function(v3) {
              return Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.monadAff))(Data_Function.apply(Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine.functorCoTransform))(Control_Monad_Aff.monadAff))(Data_Function.apply(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff))(Control_Monad_Eff_Random.randomInt(1)((2 * maxRange | 0) - 1))))(function(v4) {
                var p2 = (v3 + v4 | 0) % (2 * maxRange | 0);
                return Data_Function.apply(Data_Functor["void"](Control_Monad_Free_Trans.functorFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.functorAff)))(Data_Function.apply(Control_Coroutine.cotransform(Control_Monad_Aff.monadAff))(function(state) {
                  var $51 = {};
                  for (var $52 in state) {
                    if (state.hasOwnProperty($52)) {
                      $51[$52] = state[$52];
                    }
                    ;
                  }
                  ;
                  $51.r1 = initial(v3 - maxRange);
                  $51.r2 = initial(p2 - maxRange);
                  $51.collision = false;
                  return $51;
                }));
              });
            });
          }
          ;
          if (v instanceof Parse) {
            var program = Data_Functor.map(Data_Either.functorEither)(Language_Robo_Spec.stripComments)(Language_Robo_Parser.parseRobo(v2.code));
            var nonEmpty = function(v3) {
              if (v3 instanceof Data_Either.Right && v3.value0 instanceof Data_List.Cons) {
                return true;
              }
              ;
              return false;
            };
            return Data_Function.apply(Data_Functor["void"](Control_Monad_Free_Trans.functorFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.functorAff)))(Data_Function.apply(Control_Coroutine.cotransform(Control_Monad_Aff.monadAff))(function(v3) {
              var $65 = {};
              for (var $66 in v2) {
                if (v2.hasOwnProperty($66)) {
                  $65[$66] = v2[$66];
                }
                ;
              }
              ;
              $65.parsed = nonEmpty(program);
              $65.program = program;
              $65.r1 = (function() {
                var $59 = {};
                for (var $60 in v2.r1) {
                  if (v2.r1.hasOwnProperty($60)) {
                    $59[$60] = v2.r1[$60];
                  }
                  ;
                }
                ;
                $59.instruction = 0;
                $59.position = v2.r1.parachute;
                return $59;
              })();
              $65.r2 = (function() {
                var $62 = {};
                for (var $63 in v2.r2) {
                  if (v2.r2.hasOwnProperty($63)) {
                    $62[$63] = v2.r2[$63];
                  }
                  ;
                }
                ;
                $62.instruction = 0;
                $62.position = v2.r2.parachute;
                return $62;
              })();
              $65.collision = false;
              return $65;
            }));
          }
          ;
          if (v instanceof Step) {
            var st$prime = Data_Either.either(Data_Function["const"](v2))(Language_Robo_Interpreter.step(v2))(v2.program);
            var $68 = st$prime.collision && st$prime.running;
            if ($68) {
              return Data_Functor["void"](Control_Monad_Free_Trans.functorFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.functorAff))(Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.monadAff))(Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine.functorCoTransform))(Control_Monad_Aff.monadAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)($foreign.toggleInterval)))(function() {
                return Data_Function.apply(Control_Coroutine.cotransform(Control_Monad_Aff.monadAff))(function(v3) {
                  var $70 = {};
                  for (var $71 in st$prime) {
                    if (st$prime.hasOwnProperty($71)) {
                      $70[$71] = st$prime[$71];
                    }
                    ;
                  }
                  ;
                  $70.running = false;
                  return $70;
                });
              }));
            }
            ;
            if (!$68) {
              return Data_Function.apply(Data_Functor["void"](Control_Monad_Free_Trans.functorFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.functorAff)))(Data_Function.apply(Control_Coroutine.cotransform(Control_Monad_Aff.monadAff))(function(v3) {
                return st$prime;
              }));
            }
            ;
            throw new Error("Failed pattern match at Main line 200, column 3 - line 205, column 39: " + [$68.constructor.name]);
          }
          ;
          if (v instanceof ToggleRunning) {
            return Data_Functor["void"](Control_Monad_Free_Trans.functorFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.functorAff))(Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(Control_Coroutine.functorCoTransform)(Control_Monad_Aff.monadAff))(Control_Monad_Trans.lift(Control_Monad_Free_Trans.monadTransFreeT(Control_Coroutine.functorCoTransform))(Control_Monad_Aff.monadAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)($foreign.toggleInterval)))(function() {
              return Data_Function.apply(Control_Coroutine.cotransform(Control_Monad_Aff.monadAff))(function(state) {
                var $74 = {};
                for (var $75 in state) {
                  if (state.hasOwnProperty($75)) {
                    $74[$75] = state[$75];
                  }
                  ;
                }
                ;
                $74.running = !state.running;
                return $74;
              });
            }));
          }
          ;
          throw new Error("Failed pattern match at Main line 174, column 1 - line 180, column 36: " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    };
    var fa = function(str) {
      return React_DOM.i([React_DOM_Props.className("fa fa-" + str)])([]);
    };
    var render = function(dispatch) {
      return function(v) {
        return function(state) {
          return function(v1) {
            var screenPos = function(p) {
              return 400 + 10 * Data_Int.toNumber(p);
            };
            return [React_DOM.div([React_DOM_Props.className("canvas")])((function() {
              if (state.collision) {
                return [React_DOM.div([React_DOM_Props.className("collision")])([fa("trophy"), React_DOM.text(" Collision!")])];
              }
              ;
              if (!state.collision) {
                return [React_DOM.div([React_DOM_Props.className("robot1"), React_DOM_Props.style({
                  left: Data_Show.show(Data_Show.showNumber)(screenPos(state.r1.position)) + "px",
                  position: "absolute"
                })])([]), React_DOM.div([React_DOM_Props.className("robot2"), React_DOM_Props.style({
                  left: Data_Show.show(Data_Show.showNumber)(screenPos(state.r2.position)) + "px",
                  position: "absolute"
                })])([]), React_DOM.div([React_DOM_Props.className("parachute1"), React_DOM_Props.style({
                  left: Data_Show.show(Data_Show.showNumber)(screenPos(state.r1.parachute)) + "px"
                })])([]), React_DOM.div([React_DOM_Props.className("parachute2"), React_DOM_Props.style({
                  left: Data_Show.show(Data_Show.showNumber)(screenPos(state.r2.parachute)) + "px"
                })])([])];
              }
              ;
              throw new Error("Failed pattern match at Main line 83, column 5 - line 96, column 10: " + [state.collision.constructor.name]);
            })()), React_DOM.div([React_DOM_Props.className("panel")])([React_DOM.div([React_DOM_Props.className("editor")])([React_DOM.textarea([React_DOM_Props.autoFocus(true), React_DOM_Props.rows("10"), React_DOM_Props.spellCheck("false"), React_DOM_Props.placeholder("Enter your code here..."), React_DOM_Props.onChange(function(e) {
              return dispatch(new SetCode(Unsafe_Coerce.unsafeCoerce(e).target.value));
            })])([React_DOM.text(initialCode)])]), React_DOM.div([React_DOM_Props.className("program")])([React_DOM["table'"]([React_DOM["tbody'"](programTable(state.program)(state.r1.instruction)(state.r2.instruction))])])]), React_DOM.div([React_DOM_Props.className("buttons")])([React_DOM.button([React_DOM_Props.onClick(function(v2) {
              return dispatch(Parse.value);
            }), React_DOM_Props.title("Transfer your program to the robots"), React_DOM_Props.disabled(state.running)])([fa("cogs"), React_DOM.text(" Parse")]), React_DOM.button([React_DOM_Props.disabled(!state.parsed || state.collision), React_DOM_Props._id("step"), React_DOM_Props.title((function() {
              var $79 = !state.parsed;
              if ($79) {
                return "You need to parse your program first";
              }
              ;
              if (!$79) {
                return "Run a single instruction for each robot";
              }
              ;
              throw new Error("Failed pattern match at Main line 117, column 28 - line 119, column 76: " + [$79.constructor.name]);
            })()), React_DOM_Props.onClick(function(v2) {
              return dispatch(Step.value);
            })])([fa("step-forward"), React_DOM.text(" Step")]), React_DOM.button([React_DOM_Props.disabled(!state.parsed || state.collision), React_DOM_Props.title((function() {
              var $81 = !state.parsed;
              if ($81) {
                return "You need to parse your program first";
              }
              ;
              if (!$81) {
                if (state.running) {
                  return "Stop the running program";
                }
                ;
                if (!state.running) {
                  return "Start the program";
                }
                ;
                throw new Error("Failed pattern match at Main line 125, column 36 - line 127, column 62: " + [state.running.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Main line 123, column 28 - line 127, column 63: " + [$81.constructor.name]);
            })()), React_DOM_Props.onClick(function(v2) {
              return dispatch(ToggleRunning.value);
            })])((function() {
              if (state.running) {
                return [fa("stop"), React_DOM.text(" Stop")];
              }
              ;
              if (!state.running) {
                return [fa("play"), React_DOM.text(" Run")];
              }
              ;
              throw new Error("Failed pattern match at Main line 122, column 7 - line 131, column 52: " + [state.running.constructor.name]);
            })()), React_DOM.button([React_DOM_Props.onClick(function(v2) {
              return dispatch(Randomize.value);
            }), React_DOM_Props.title("Deploy the robots to new starting positions"), React_DOM_Props.disabled(state.running)])([fa("random"), React_DOM.text(" Randomize")])])];
          };
        };
      };
    };
    var spec = Thermite.simpleSpec(performAction)(render);
    var main = Data_Functor["void"](Control_Monad_Eff.functorEff)((function() {
      var component = Thermite.createClass(spec)(initialState);
      return function __do() {
        var v = Control_Bind.bind(Control_Monad_Eff.bindEff)(DOM_HTML.window)(DOM_HTML_Window.document)();
        var v1 = Partial_Unsafe.unsafePartial(function(dictPartial) {
          return Data_Functor.map(Control_Monad_Eff.functorEff)(function($88) {
            return Data_Maybe.fromJust(dictPartial)(Data_Nullable.toMaybe($88));
          })(DOM_Node_ParentNode.querySelector("#component")(DOM_HTML_Types.htmlDocumentToParentNode(v)));
        })();
        return ReactDOM.render(React.createFactory(component)({}))(v1)();
      };
    })());
    exports["SetCode"] = SetCode;
    exports["Parse"] = Parse;
    exports["Step"] = Step;
    exports["ToggleRunning"] = ToggleRunning;
    exports["Randomize"] = Randomize;
    exports["fa"] = fa;
    exports["initial"] = initial;
    exports["initialCode"] = initialCode;
    exports["initialState"] = initialState;
    exports["main"] = main;
    exports["mapIndexed"] = mapIndexed;
    exports["maxRange"] = maxRange;
    exports["performAction"] = performAction;
    exports["programTable"] = programTable;
    exports["render"] = render;
    exports["showHTML"] = showHTML;
    exports["spec"] = spec;
    exports["toggleInterval"] = $foreign.toggleInterval;
  })(PS["Main"] = PS["Main"] || {});
  PS["Main"].main();
})();
/*! Bundled license information:

react/lib/isEventSupported.js:
  (**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   *)
*/
