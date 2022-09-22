var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component8) {
  current_component = component8;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape2(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component8, name) {
  if (!component8 || !component8.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component8;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css4) => css4.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape2(value, true)}"`;
  return ` ${name}${assignment}`;
}
function add_classes(classes) {
  return classes ? ` class="${classes}"` : "";
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key2) => style_object[key2]).map((key2) => `${key2}: ${style_object[key2]};`).join(" ");
}
function add_styles(style_object) {
  const styles = style_object_to_string(style_object);
  return styles ? ` style="${styles}"` : "";
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
var HttpError, Redirect, ValidationError;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    HttpError = class {
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    ValidationError = class {
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
  }
});

// .svelte-kit/output/server/chunks/index3.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_index3 = __esm({
  ".svelte-kit/output/server/chunks/index3.js"() {
    init_chunks();
    subscriber_queue = [];
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/chunks/stores.js
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// node_modules/.pnpm/micro-api-client@3.3.0/node_modules/micro-api-client/lib/pagination.js
var require_pagination = __commonJS({
  "node_modules/.pnpm/micro-api-client@3.3.0/node_modules/micro-api-client/lib/pagination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _slicedToArray = function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    exports.getPagination = getPagination;
    function getPagination(response) {
      var links = response.headers.get("Link");
      var pagination = {};
      if (links == null) {
        return null;
      }
      links = links.split(",");
      var total = response.headers.get("X-Total-Count");
      for (var i = 0, len = links.length; i < len; i++) {
        var link = links[i].replace(/(^\s*|\s*$)/, "");
        var _link$split = link.split(";"), _link$split2 = _slicedToArray(_link$split, 2), url2 = _link$split2[0], rel = _link$split2[1];
        var m = url2.match(/page=(\d+)/);
        var page2 = m && parseInt(m[1], 10);
        if (rel.match(/last/)) {
          pagination.last = page2;
        } else if (rel.match(/next/)) {
          pagination.next = page2;
        } else if (rel.match(/prev/)) {
          pagination.prev = page2;
        } else if (rel.match(/first/)) {
          pagination.first = page2;
        }
      }
      pagination.last = Math.max(pagination.last || 0, pagination.prev && pagination.prev + 1 || 0);
      pagination.current = pagination.next ? pagination.next - 1 : pagination.last || 1;
      pagination.total = total ? parseInt(total, 10) : null;
      return pagination;
    }
  }
});

// node_modules/.pnpm/micro-api-client@3.3.0/node_modules/micro-api-client/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/micro-api-client@3.3.0/node_modules/micro-api-client/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JSONHTTPError = exports.TextHTTPError = exports.HTTPError = exports.getPagination = void 0;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key2 in source) {
          if (Object.prototype.hasOwnProperty.call(source, key2)) {
            target[key2] = source[key2];
          }
        }
      }
      return target;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _pagination = require_pagination();
    Object.defineProperty(exports, "getPagination", {
      enumerable: true,
      get: function get() {
        return _pagination.getPagination;
      }
    });
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _extendableBuiltin(cls) {
      function ExtendableBuiltin() {
        var instance = Reflect.construct(cls, Array.from(arguments));
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        return instance;
      }
      ExtendableBuiltin.prototype = Object.create(cls.prototype, {
        constructor: {
          value: cls,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(ExtendableBuiltin, cls);
      } else {
        ExtendableBuiltin.__proto__ = cls;
      }
      return ExtendableBuiltin;
    }
    var HTTPError = exports.HTTPError = function(_extendableBuiltin2) {
      _inherits(HTTPError2, _extendableBuiltin2);
      function HTTPError2(response) {
        _classCallCheck(this, HTTPError2);
        var _this = _possibleConstructorReturn(this, (HTTPError2.__proto__ || Object.getPrototypeOf(HTTPError2)).call(this, response.statusText));
        _this.name = _this.constructor.name;
        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(_this, _this.constructor);
        } else {
          _this.stack = new Error(response.statusText).stack;
        }
        _this.status = response.status;
        return _this;
      }
      return HTTPError2;
    }(_extendableBuiltin(Error));
    var TextHTTPError = exports.TextHTTPError = function(_HTTPError) {
      _inherits(TextHTTPError2, _HTTPError);
      function TextHTTPError2(response, data) {
        _classCallCheck(this, TextHTTPError2);
        var _this2 = _possibleConstructorReturn(this, (TextHTTPError2.__proto__ || Object.getPrototypeOf(TextHTTPError2)).call(this, response));
        _this2.data = data;
        return _this2;
      }
      return TextHTTPError2;
    }(HTTPError);
    var JSONHTTPError = exports.JSONHTTPError = function(_HTTPError2) {
      _inherits(JSONHTTPError2, _HTTPError2);
      function JSONHTTPError2(response, json2) {
        _classCallCheck(this, JSONHTTPError2);
        var _this3 = _possibleConstructorReturn(this, (JSONHTTPError2.__proto__ || Object.getPrototypeOf(JSONHTTPError2)).call(this, response));
        _this3.json = json2;
        return _this3;
      }
      return JSONHTTPError2;
    }(HTTPError);
    var API = function() {
      function API2() {
        var apiURL = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var options = arguments[1];
        _classCallCheck(this, API2);
        this.apiURL = apiURL;
        if (this.apiURL.match(/\/[^\/]?/)) {
          this._sameOrigin = true;
        }
        this.defaultHeaders = options && options.defaultHeaders || {};
      }
      _createClass(API2, [{
        key: "headers",
        value: function headers() {
          var _headers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return _extends({}, this.defaultHeaders, {
            "Content-Type": "application/json"
          }, _headers);
        }
      }, {
        key: "parseJsonResponse",
        value: function parseJsonResponse(response) {
          return response.json().then(function(json2) {
            if (!response.ok) {
              return Promise.reject(new JSONHTTPError(response, json2));
            }
            var pagination = (0, _pagination.getPagination)(response);
            return pagination ? { pagination, items: json2 } : json2;
          });
        }
      }, {
        key: "request",
        value: function request(path) {
          var _this4 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var headers = this.headers(options.headers || {});
          if (this._sameOrigin) {
            options.credentials = options.credentials || "same-origin";
          }
          return fetch(this.apiURL + path, _extends({}, options, { headers })).then(function(response) {
            var contentType = response.headers.get("Content-Type");
            if (contentType && contentType.match(/json/)) {
              return _this4.parseJsonResponse(response);
            }
            if (!response.ok) {
              return response.text().then(function(data) {
                return Promise.reject(new TextHTTPError(response, data));
              });
            }
            return response.text().then(function(data) {
              data;
            });
          });
        }
      }]);
      return API2;
    }();
    exports.default = API;
  }
});

// node_modules/.pnpm/gotrue-js@0.9.29/node_modules/gotrue-js/lib/admin.js
var require_admin = __commonJS({
  "node_modules/.pnpm/gotrue-js@0.9.29/node_modules/gotrue-js/lib/admin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Admin = /* @__PURE__ */ function() {
      function Admin2(user) {
        _classCallCheck(this, Admin2);
        this.user = user;
      }
      _createClass(Admin2, [{
        key: "listUsers",
        value: function listUsers(aud) {
          return this.user._request("/admin/users", {
            method: "GET",
            audience: aud
          });
        }
      }, {
        key: "getUser",
        value: function getUser(user) {
          return this.user._request("/admin/users/".concat(user.id));
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          var attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return this.user._request("/admin/users/".concat(user.id), {
            method: "PUT",
            body: JSON.stringify(attributes)
          });
        }
      }, {
        key: "createUser",
        value: function createUser(email, password) {
          var attributes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          attributes.email = email;
          attributes.password = password;
          return this.user._request("/admin/users", {
            method: "POST",
            body: JSON.stringify(attributes)
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(user) {
          return this.user._request("/admin/users/".concat(user.id), {
            method: "DELETE"
          });
        }
      }]);
      return Admin2;
    }();
    exports["default"] = Admin;
  }
});

// node_modules/.pnpm/gotrue-js@0.9.29/node_modules/gotrue-js/lib/user.js
var require_user = __commonJS({
  "node_modules/.pnpm/gotrue-js@0.9.29/node_modules/gotrue-js/lib/user.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _microApiClient = _interopRequireWildcard(require_lib());
    var _admin = _interopRequireDefault(require_admin());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key2 in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key2)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key2) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key2, desc);
          } else {
            newObj[key2] = obj[key2];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key2) {
            _defineProperty(target, key2, source[key2]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key2) {
            Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key2, value) {
      if (key2 in obj) {
        Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var ExpiryMargin = 60 * 1e3;
    var storageKey = "gotrue.user";
    var refreshPromises = {};
    var currentUser = null;
    var forbiddenUpdateAttributes = {
      api: 1,
      token: 1,
      audience: 1,
      url: 1
    };
    var forbiddenSaveAttributes = {
      api: 1
    };
    var isBrowser = function isBrowser2() {
      return typeof window !== "undefined";
    };
    var User = /* @__PURE__ */ function() {
      function User2(api2, tokenResponse, audience) {
        _classCallCheck(this, User2);
        this.api = api2;
        this.url = api2.apiURL;
        this.audience = audience;
        this._processTokenResponse(tokenResponse);
        currentUser = this;
      }
      _createClass(User2, [{
        key: "update",
        value: function update(attributes) {
          var _this = this;
          return this._request("/user", {
            method: "PUT",
            body: JSON.stringify(attributes)
          }).then(function(response) {
            return _this._saveUserData(response)._refreshSavedSession();
          });
        }
      }, {
        key: "jwt",
        value: function jwt(forceRefresh) {
          var token = this.tokenDetails();
          if (token === null || token === void 0) {
            return Promise.reject(new Error("Gotrue-js: failed getting jwt access token"));
          }
          var expires_at = token.expires_at, refresh_token = token.refresh_token, access_token = token.access_token;
          if (forceRefresh || expires_at - ExpiryMargin < Date.now()) {
            return this._refreshToken(refresh_token);
          }
          return Promise.resolve(access_token);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this._request("/logout", {
            method: "POST"
          }).then(this.clearSession.bind(this))["catch"](this.clearSession.bind(this));
        }
      }, {
        key: "_refreshToken",
        value: function _refreshToken(refresh_token) {
          var _this2 = this;
          if (refreshPromises[refresh_token]) {
            return refreshPromises[refresh_token];
          }
          return refreshPromises[refresh_token] = this.api.request("/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=refresh_token&refresh_token=".concat(refresh_token)
          }).then(function(response) {
            delete refreshPromises[refresh_token];
            _this2._processTokenResponse(response);
            _this2._refreshSavedSession();
            return _this2.token.access_token;
          })["catch"](function(error2) {
            delete refreshPromises[refresh_token];
            _this2.clearSession();
            return Promise.reject(error2);
          });
        }
      }, {
        key: "_request",
        value: function _request(path) {
          var _this3 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          options.headers = options.headers || {};
          var aud = options.audience || this.audience;
          if (aud) {
            options.headers["X-JWT-AUD"] = aud;
          }
          return this.jwt().then(function(token) {
            return _this3.api.request(path, _objectSpread({
              headers: Object.assign(options.headers, {
                Authorization: "Bearer ".concat(token)
              })
            }, options))["catch"](function(error2) {
              if (error2 instanceof _microApiClient.JSONHTTPError && error2.json) {
                if (error2.json.msg) {
                  error2.message = error2.json.msg;
                } else if (error2.json.error) {
                  error2.message = "".concat(error2.json.error, ": ").concat(error2.json.error_description);
                }
              }
              return Promise.reject(error2);
            });
          });
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          return this._request("/user").then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this));
        }
      }, {
        key: "_saveUserData",
        value: function _saveUserData(attributes, fromStorage) {
          for (var key2 in attributes) {
            if (key2 in User2.prototype || key2 in forbiddenUpdateAttributes) {
              continue;
            }
            this[key2] = attributes[key2];
          }
          if (fromStorage) {
            this._fromStorage = true;
          }
          return this;
        }
      }, {
        key: "_processTokenResponse",
        value: function _processTokenResponse(tokenResponse) {
          this.token = tokenResponse;
          try {
            var claims = JSON.parse(urlBase64Decode(tokenResponse.access_token.split(".")[1]));
            this.token.expires_at = claims.exp * 1e3;
          } catch (error2) {
            console.error(new Error("Gotrue-js: Failed to parse tokenResponse claims: ".concat(error2)));
          }
        }
      }, {
        key: "_refreshSavedSession",
        value: function _refreshSavedSession() {
          if (isBrowser() && localStorage.getItem(storageKey)) {
            this._saveSession();
          }
          return this;
        }
      }, {
        key: "_saveSession",
        value: function _saveSession() {
          isBrowser() && localStorage.setItem(storageKey, JSON.stringify(this._details));
          return this;
        }
      }, {
        key: "tokenDetails",
        value: function tokenDetails() {
          return this.token;
        }
      }, {
        key: "clearSession",
        value: function clearSession() {
          User2.removeSavedSession();
          this.token = null;
          currentUser = null;
        }
      }, {
        key: "admin",
        get: function get() {
          return new _admin["default"](this);
        }
      }, {
        key: "_details",
        get: function get() {
          var userCopy = {};
          for (var key2 in this) {
            if (key2 in User2.prototype || key2 in forbiddenSaveAttributes) {
              continue;
            }
            userCopy[key2] = this[key2];
          }
          return userCopy;
        }
      }], [{
        key: "removeSavedSession",
        value: function removeSavedSession() {
          isBrowser() && localStorage.removeItem(storageKey);
        }
      }, {
        key: "recoverSession",
        value: function recoverSession(apiInstance) {
          if (currentUser) {
            return currentUser;
          }
          var json2 = isBrowser() && localStorage.getItem(storageKey);
          if (json2) {
            try {
              var data = JSON.parse(json2);
              var url2 = data.url, token = data.token, audience = data.audience;
              if (!url2 || !token) {
                return null;
              }
              var api2 = apiInstance || new _microApiClient["default"](url2, {});
              return new User2(api2, token, audience)._saveUserData(data, true);
            } catch (error2) {
              console.error(new Error("Gotrue-js: Error recovering session: ".concat(error2)));
              return null;
            }
          }
          return null;
        }
      }]);
      return User2;
    }();
    exports["default"] = User;
    function urlBase64Decode(str) {
      var output = str.replace(/-/g, "+").replace(/_/g, "/");
      switch (output.length % 4) {
        case 0:
          break;
        case 2:
          output += "==";
          break;
        case 3:
          output += "=";
          break;
        default:
          throw "Illegal base64url string!";
      }
      var result = window.atob(output);
      try {
        return decodeURIComponent(escape(result));
      } catch (error2) {
        return result;
      }
    }
  }
});

// node_modules/.pnpm/gotrue-js@0.9.29/node_modules/gotrue-js/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/gotrue-js@0.9.29/node_modules/gotrue-js/lib/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _microApiClient = _interopRequireWildcard(require_lib());
    var _user = _interopRequireDefault(require_user());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key2 in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key2)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key2) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key2, desc);
          } else {
            newObj[key2] = obj[key2];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var HTTPRegexp = /^http:\/\//;
    var defaultApiURL = "/.netlify/identity";
    var GoTrue2 = /* @__PURE__ */ function() {
      function GoTrue3() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$APIUrl = _ref.APIUrl, APIUrl = _ref$APIUrl === void 0 ? defaultApiURL : _ref$APIUrl, _ref$audience = _ref.audience, audience = _ref$audience === void 0 ? "" : _ref$audience, _ref$setCookie = _ref.setCookie, setCookie2 = _ref$setCookie === void 0 ? false : _ref$setCookie;
        _classCallCheck(this, GoTrue3);
        if (APIUrl.match(HTTPRegexp)) {
          console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely.");
        }
        if (audience) {
          this.audience = audience;
        }
        this.setCookie = setCookie2;
        this.api = new _microApiClient["default"](APIUrl);
      }
      _createClass(GoTrue3, [{
        key: "_request",
        value: function _request(path) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          options.headers = options.headers || {};
          var aud = options.audience || this.audience;
          if (aud) {
            options.headers["X-JWT-AUD"] = aud;
          }
          return this.api.request(path, options)["catch"](function(error2) {
            if (error2 instanceof _microApiClient.JSONHTTPError && error2.json) {
              if (error2.json.msg) {
                error2.message = error2.json.msg;
              } else if (error2.json.error) {
                error2.message = "".concat(error2.json.error, ": ").concat(error2.json.error_description);
              }
            }
            return Promise.reject(error2);
          });
        }
      }, {
        key: "settings",
        value: function settings() {
          return this._request("/settings");
        }
      }, {
        key: "signup",
        value: function signup(email, password, data) {
          return this._request("/signup", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              data
            })
          });
        }
      }, {
        key: "login",
        value: function login(email, password, remember) {
          var _this = this;
          this._setRememberHeaders(remember);
          return this._request("/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=password&username=".concat(encodeURIComponent(email), "&password=").concat(encodeURIComponent(password))
          }).then(function(response) {
            _user["default"].removeSavedSession();
            return _this.createUser(response, remember);
          });
        }
      }, {
        key: "loginExternalUrl",
        value: function loginExternalUrl(provider) {
          return "".concat(this.api.apiURL, "/authorize?provider=").concat(provider);
        }
      }, {
        key: "confirm",
        value: function confirm(token, remember) {
          this._setRememberHeaders(remember);
          return this.verify("signup", token, remember);
        }
      }, {
        key: "requestPasswordRecovery",
        value: function requestPasswordRecovery(email) {
          return this._request("/recover", {
            method: "POST",
            body: JSON.stringify({
              email
            })
          });
        }
      }, {
        key: "recover",
        value: function recover(token, remember) {
          this._setRememberHeaders(remember);
          return this.verify("recovery", token, remember);
        }
      }, {
        key: "acceptInvite",
        value: function acceptInvite(token, password, remember) {
          var _this2 = this;
          this._setRememberHeaders(remember);
          return this._request("/verify", {
            method: "POST",
            body: JSON.stringify({
              token,
              password,
              type: "signup"
            })
          }).then(function(response) {
            return _this2.createUser(response, remember);
          });
        }
      }, {
        key: "acceptInviteExternalUrl",
        value: function acceptInviteExternalUrl(provider, token) {
          return "".concat(this.api.apiURL, "/authorize?provider=").concat(provider, "&invite_token=").concat(token);
        }
      }, {
        key: "createUser",
        value: function createUser(tokenResponse) {
          var remember = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          this._setRememberHeaders(remember);
          var user = new _user["default"](this.api, tokenResponse, this.audience);
          return user.getUserData().then(function(userData) {
            if (remember) {
              userData._saveSession();
            }
            return userData;
          });
        }
      }, {
        key: "currentUser",
        value: function currentUser() {
          var user = _user["default"].recoverSession(this.api);
          user && this._setRememberHeaders(user._fromStorage);
          return user;
        }
      }, {
        key: "verify",
        value: function verify(type, token, remember) {
          var _this3 = this;
          this._setRememberHeaders(remember);
          return this._request("/verify", {
            method: "POST",
            body: JSON.stringify({
              token,
              type
            })
          }).then(function(response) {
            return _this3.createUser(response, remember);
          });
        }
      }, {
        key: "_setRememberHeaders",
        value: function _setRememberHeaders(remember) {
          if (this.setCookie) {
            this.api.defaultHeaders = this.api.defaultHeaders || {};
            this.api.defaultHeaders["X-Use-Cookie"] = remember ? "1" : "session";
          }
        }
      }]);
      return GoTrue3;
    }();
    exports["default"] = GoTrue2;
    if (typeof window !== "undefined") {
      window.GoTrue = GoTrue2;
    }
  }
});

// .svelte-kit/output/server/chunks/auth.js
function register(email, password) {
  return goTrueInstance.signup(email, password);
}
var import_gotrue_js, url, goTrueInstance, goTrueUser, authUserStore;
var init_auth = __esm({
  ".svelte-kit/output/server/chunks/auth.js"() {
    init_index3();
    import_gotrue_js = __toESM(require_lib2(), 1);
    url = "https://svelte-netlify-identity.netlify.com/";
    goTrueInstance = new import_gotrue_js.default.default({
      APIUrl: `${url}/.netlify/identity`,
      setCookie: true
    });
    goTrueUser = goTrueInstance.currentUser() || void 0;
    authUserStore = writable(goTrueUser);
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Header, Footer, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_stores();
    init_auth();
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $authUserStore, $$unsubscribe_authUserStore;
      let $page, $$unsubscribe_page;
      $$unsubscribe_authUserStore = subscribe(authUserStore, (value) => $authUserStore = value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_authUserStore();
      $$unsubscribe_page();
      return `<header class="${"resp_cont pt-8 md:pt-16 flex-col justify-between relative mb-8"}"><img class="${"h-6 my-5"}" src="${"/titan-logo.svg"}" alt="${"titan logo"}">
  <h1>Mission Control</h1>
  ${$authUserStore ? `<nav data-sveltekit-prefetch class="${"my-4 overflow-x-scroll overflow-y-hidden"}"><ul class="${"flex gap-x-4"}"><li${add_classes(($page.url.pathname === "/" ? "active" : "").trim())}><a class="${"chip"}" href="${"/"}">Home</a></li>
        <li${add_classes(($page.url.pathname === "/about" ? "active" : "").trim())}><a class="${"chip clickable"}" href="${"/about"}">Analytics</a></li>
        <li${add_classes(($page.url.pathname === "/todos" ? "active" : "").trim())}><a class="${"chip clickable"}" href="${"/todos"}">Gigs</a></li>
        <li${add_classes(($page.url.pathname === "/about" ? "active" : "").trim())}><a class="${"chip clickable"}" href="${"/about"}">Smiles</a></li>
        <li${add_classes(($page.url.pathname === "/todos" ? "active" : "").trim())}><a class="${"chip clickable"}" href="${"/support"}">Support</a></li></ul></nav>` : ``}
  </header>`;
    });
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<footer class="${"resp_cont mt-16 border-not-black-400 border-t-[0.092rem] pb-8"}"><ul class="${"flex justify-between mt-6"}"><li><h4>Titan Mission Control</h4></li>
    <li><h4>\xA9 Moonface Digital</h4></li></ul></footer>`;
    });
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<header>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</header>

<main class="${"resp_cont"}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-abebab6b.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-abebab6b.js", "_app/immutable/chunks/index-1e252bca.js", "_app/immutable/chunks/stores-2aacfb02.js", "_app/immutable/chunks/singletons-f05fa273.js", "_app/immutable/chunks/index-dbbb60cd.js", "_app/immutable/chunks/auth-bad9aa99.js"];
    stylesheets = ["_app/immutable/assets/_layout-ba5bc98c.css"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape2($page.status)}</h1>

<pre>${escape2($page.error.message)}</pre>



${$page.error.frame ? `<pre>${escape2($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${escape2($page.error.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-1a8f0111.js";
    imports2 = ["_app/immutable/components/error.svelte-1a8f0111.js", "_app/immutable/chunks/index-1e252bca.js", "_app/immutable/chunks/stores-2aacfb02.js", "_app/immutable/chunks/singletons-f05fa273.js", "_app/immutable/chunks/index-dbbb60cd.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/chunks/Support.js
var Status, Support;
var init_Support = __esm({
  ".svelte-kit/output/server/chunks/Support.js"() {
    init_chunks();
    Status = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${`<h4 class="${"bg-titan text-white px-3 rounded-md py-0.5 inline-block"}"><span>Operational</span></h4>`}`;
    });
    Support = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<section class="${"mt-16 relative"}"><h3>Support</h3>
  <div class="${"flex flex-col sm:flex-row justify-between gap-x-12 gap-y-6"}"><article><h2>We are always here to help</h2>
      <h4><a class="${"text-titan"}" href="${"https://moonface.digital/support"}">moonface.digital/support</a></h4>
      <h4><a class="${"text-titan"}" href="${"https://moonface.digital/support"}">help@moonface.digital</a></h4>
      <h3 class="${"mt-8 text-not-black-300 font-medium"}">Current service status
      </h3>
      ${validate_component(Status, "Status").$$render($$result, {}, {}, {})}</article>
    <article><div class="${"flex items-center gap-2"}"><div class="${"w-1.5 h-1.5 mt-1.5 bg-titan rounded-full"}"></div>
        <h3 class="${"text-not-black-300 font-medium"}">Log a support ticket</h3></div>
      <div class="${"bg-not-black-900 border-not-black-600 border-[0.093rem] rounded-lg px-4 py-4 md:aspect-[259/165] w-full md:w-[400px] max-w-full mt-2"}"><form action="${""}" class="${"flex flex-col"}"><div class="${"flex flex-col"}"><div class="${"flex flex-col"}"><h4 class="${"text-white mt-0"}">How severe is the issue?</h4>
              <ul class="${"flex gap-4"}"><li><div class="${"smlBtn"}">Not at all</div></li>
                <li><div class="${"smlBtn"}">Mild</div></li>
                <li><div class="${"smlBtn active"}">Critical</div></li></ul></div>
            <h4 class="${"font-normal text-sm"}">Not sure? <span class="${"text-titan"}">View some examples</span></h4>
            <h4 class="${"font-normal text-sm my-0"}">By clicking &quot;next&quot;, you agree that the current issue is <span class="${"text-titan"}">Business critical</span>. You agree to be billed a max. of \xA375 p/hr if the issue is
              billable
            </h4></div>
          <div class="${"smlCtaBtn self-end"}">Next</div></form></div></article></div></section>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Arrow, css$3, Overview_card, css$2, Overview, css$1, Roadmap_item, Link, css, Recent, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_Support();
    init_auth();
    Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { width = null } = $$props;
      let { height = "1rem" } = $$props;
      let { fill = "white" } = $$props;
      let { className } = $$props;
      if ($$props.width === void 0 && $$bindings.width && width !== void 0)
        $$bindings.width(width);
      if ($$props.height === void 0 && $$bindings.height && height !== void 0)
        $$bindings.height(height);
      if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
        $$bindings.fill(fill);
      if ($$props.className === void 0 && $$bindings.className && className !== void 0)
        $$bindings.className(className);
      return `<svg${add_attribute("height", height, 0)}${add_attribute("width", width, 0)}${add_attribute("class", className, 0)} viewBox="${"0 0 42 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" id="${"titanArrow"}"><path d="${"M39.5987 13.7218H0.822266V16.2782H39.5987V13.7218Z"}"${add_attribute("fill", fill, 0)}></path><path d="${"M26.4521 -1.39986e-05L24.598 1.85413L39.0222 16.2784L40.8764 14.4242L26.4521 -1.39986e-05Z"}"${add_attribute("fill", fill, 0)}></path><path d="${"M39.5959 13.1479L24.598 28.1459L26.4521 30L41.45 15.0021L39.5959 13.1479Z"}"${add_attribute("fill", fill, 0)}></path></svg>`;
    });
    css$3 = {
      code: "#gradient.svelte-eg0dfy{top:0;left:0;transform:translate(-50%, -50%)}",
      map: null
    };
    Overview_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { header } = $$props;
      let { caption } = $$props;
      let ballX = 0;
      let ballY = 0;
      if ($$props.header === void 0 && $$bindings.header && header !== void 0)
        $$bindings.header(header);
      if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
        $$bindings.caption(caption);
      $$result.css.add(css$3);
      return `
<article class="${"bg-neutral-800 px-4 py-6 aspect-[259/165] w-[300px] flex flex-col justify-between items-start overflow-hidden relative"}"><header class="${"z-20"}"><div class="${"my-0 text-4xl font-semibold"}">${escape2(header)}</div>
    <h2 class="${"my-0 text-not-black-300"}">${escape2(caption)}</h2></header>
  ${validate_component(Arrow, "Arrow").$$render(
        $$result,
        {
          className: "arrow pointer-events-none",
          fill: "#AEADAD"
        },
        {},
        {}
      )}
  <div class="${"absolute left-0 top-0 h-full w-full pointer-events-none z-10"}"><div class="${"relative w-full h-full p-16"}"><img class="${"absolute right-0 bottom-0 svelte-eg0dfy"}" id="${"gradient"}" src="${"/gradient.png"}" alt="${"gradient"}"${add_styles({
        "left": `${ballX}px`,
        "top": `${ballY}px`
      })}></div></div>
</article>`;
    });
    css$2 = {
      code: ".svelte-scukpn::-webkit-scrollbar{width:0.2rem}.svelte-scukpn::-webkit-scrollbar-track{background:transparent}.svelte-scukpn::-webkit-scrollbar-thumb{background-color:#282828;border-radius:999px;border:0.4rem solid rgba(0, 0, 0, 0);background-clip:padding-box}",
      map: null
    };
    Overview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$2);
      return `<section class="${"border-not-black-400 border-b-[0.092rem] pb-6 svelte-scukpn"}"><h3 class="${"svelte-scukpn"}">Overview</h3>
  <ul class="${"flex gap-8 pt-2 max-w-full lg:overflow-visible overflow-x-scroll overflow-y-hidden svelte-scukpn"}"><li id="${"firstCard"}" class="${"lg:hover:scale-[103%] duration-150 lg:focus:scale-[100%] svelte-scukpn"}"><a class="${"lgCard svelte-scukpn"}" href="${"/support"}">${validate_component(Overview_card, "Card").$$render(
        $$result,
        {
          header: 1400,
          caption: "visits this month"
        },
        {},
        {}
      )}</a></li>
    <li id="${"secCard"}" class="${"lg:hover:scale-[103%] duration-150 lg:focus:scale-[90%] svelte-scukpn"}"><a class="${"lgCard svelte-scukpn"}" href="${"/support"}">${validate_component(Overview_card, "Card").$$render(
        $$result,
        {
          header: 72,
          caption: "happy smiles this month"
        },
        {},
        {}
      )}</a></li></ul>
</section>`;
    });
    css$1 = {
      code: "#readmore.svelte-1kejaf7{cursor:pointer}",
      map: null
    };
    Roadmap_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { heading = "Heading undefined" } = $$props;
      let { caption = "Caption undefined" } = $$props;
      let { date } = $$props;
      let { isActive = false } = $$props;
      let vCaption = caption.substring(0, 61);
      if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
        $$bindings.heading(heading);
      if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
        $$bindings.caption(caption);
      if ($$props.date === void 0 && $$bindings.date && date !== void 0)
        $$bindings.date(date);
      if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
        $$bindings.isActive(isActive);
      $$result.css.add(css$1);
      return `<li class="${"flex relative pl-[0.44rem]"}">${!isActive ? `<div class="${[
        "w-4 h-4 ml-[0.135rem] rounded-full absolute bg-mf-neutral-800 mt-4",
        date ? "mt-[1.85rem]" : ""
      ].join(" ").trim()}"></div>` : `<div class="${["w-5 h-5 mt-3 rounded-full absolute bg-titan", date ? "mt-[1.85rem]" : ""].join(" ").trim()}"></div>`}
  <article class="${"ml-10 w-full"}">${date ? `<small class="${"text-not-black-300 text-center"}">${escape2(date)}</small>` : ``}
    <h3 class="${"my-0 font-medium"}">${escape2(heading)}</h3>
    <p class="${""}">${`${escape2(vCaption)}
        ${caption.length > 69 ? `<button id="${"readmore"}" class="${"text-not-black-300 svelte-1kejaf7"}">.. Show more</button>` : ``}`}</p></article>
</li>`;
    });
    Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { width = null } = $$props;
      let { height = "1rem" } = $$props;
      let { fill = "white" } = $$props;
      if ($$props.width === void 0 && $$bindings.width && width !== void 0)
        $$bindings.width(width);
      if ($$props.height === void 0 && $$bindings.height && height !== void 0)
        $$bindings.height(height);
      if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
        $$bindings.fill(fill);
      return `<svg${add_attribute("height", height, 0)}${add_attribute("width", width, 0)} viewBox="${"0 0 62 62"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M0 22H40V62H0V22Z"}" fill="${"#FF5B4F"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M35 27H5V57H35V27ZM0 22V62H40V22H0Z"}"${add_attribute("fill", fill, 0)}></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M52.9645 5.5H40V0.5H61.5V22H56.5V9.03552L37.7089 27.8265L34.1734 24.291L52.9645 5.5Z"}"${add_attribute("fill", fill, 0)}></path></svg>`;
    });
    css = {
      code: ".svelte-5ydu0k::-webkit-scrollbar{width:0.2rem}.svelte-5ydu0k::-webkit-scrollbar-track{background:transparent}.svelte-5ydu0k::-webkit-scrollbar-thumb{background-color:#111212;border-radius:999px;background-clip:padding-box}",
      map: null
    };
    Recent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<section class="${"mt-12 svelte-5ydu0k"}"><div class="${"flex justify-between items-center svelte-5ydu0k"}"><h3 class="${"svelte-5ydu0k"}">Recent Activity</h3>
    <div class="${"flex items-center gap-2 svelte-5ydu0k"}"><h3 class="${"text-not-black-300 font-medium svelte-5ydu0k"}">Attention needed</h3>
      <div class="${"w-1.5 h-1.5 mt-1.5 bg-titan rounded-full svelte-5ydu0k"}"></div></div></div>
  <div class="${"flex flex-col lg:flex-row gap-x-12 gap-y-6 mt-4 svelte-5ydu0k"}"><article class="${"bg-not-black-900 rounded-3xl border-not-black-600 border-[0.093rem] px-6 lg:px-8 py-5 w-full lg:w-[60%] svelte-5ydu0k"}"><div class="${"flex justify-between items-center z-20 svelte-5ydu0k"}"><h2 class="${"my-0 svelte-5ydu0k"}">Roadmap</h2>
        <div class="${"flex items-center gap-2 svelte-5ydu0k"}"><h3 class="${"text-not-black-300 my-0 font-medium svelte-5ydu0k"}">Live site</h3>
          ${validate_component(Link, "LinkIco").$$render($$result, { fill: "#FF5B4F", width: ".8rem" }, {}, {})}</div></div>
      <div class="${"max-w-full flex justify-between h-[360px] relative mt-4 svelte-5ydu0k"}"><div class="${"absolute bg-gradient-to-b from-not-black-900 to-transparent z-10 h-[20%] w-full top-0 pointer-events-none svelte-5ydu0k"}"></div>
        <div class="${"absolute bg-gradient-to-t from-not-black-900 to-transparent z-10 h-[50%] w-full bottom-0 pointer-events-none svelte-5ydu0k"}"></div>
        <div class="${"relative svelte-5ydu0k"}"><span class="${"absolute h-full w-0.5 bg-mf-neutral-800 ml-[1rem] svelte-5ydu0k"}"></span></div>
        <ul class="${"flex flex-col gap-8 w-full overflow-y-scroll pt-6 pb-8 svelte-5ydu0k"}">${validate_component(Roadmap_item, "RdItem").$$render(
        $$result,
        {
          heading: "Development: Cockpit",
          caption: "We are configuring the Cockpit to your project. We\u2019ll send the account info soon."
        },
        {},
        {}
      )}
          ${validate_component(Roadmap_item, "RdItem").$$render(
        $$result,
        {
          isActive: true,
          date: "3rd Sep '22",
          heading: "Development: SEO optimization",
          caption: "We are ensuring search engines love your site as much as you will."
        },
        {},
        {}
      )}
          ${validate_component(Roadmap_item, "RdItem").$$render(
        $$result,
        {
          date: "21st Aug '22",
          heading: "Development",
          caption: 'We are coding your site from the ground up. You can see our progress by clicking the "live site" button above.'
        },
        {},
        {}
      )}
          ${validate_component(Roadmap_item, "RdItem").$$render(
        $$result,
        {
          date: "20th Aug '22",
          heading: "Design: Confirmation",
          caption: "We are configuring the Cockpit to your project. We\u2019ll send the account info soon."
        },
        {},
        {}
      )}
          ${validate_component(Roadmap_item, "RdItem").$$render(
        $$result,
        {
          date: "1st Aug '22",
          heading: "Design",
          caption: "We have begun designing your site. We'll in touch shortly"
        },
        {},
        {}
      )}
          <li class="${"flex relative pl-[0.33rem] items-center justify-center svelte-5ydu0k"}"><article class="${"ml-10 mt-4 pb-12 flex items-center gap-2 svelte-5ydu0k"}"><p class="${"svelte-5ydu0k"}">We are setting up your project</p>
              <div class="${"w-1.5 h-1.5 bg-titan rounded-full svelte-5ydu0k"}"></div></article></li></ul></div></article>
    <article class="${"grow flex flex-col svelte-5ydu0k"}"><h2 class="${"svelte-5ydu0k"}">Tasks</h2>
      <h4 class="${"text-center self-center svelte-5ydu0k"}">Confirmed tasks</h4></article></div>
</section>`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $authUserStore, $$unsubscribe_authUserStore;
      $$unsubscribe_authUserStore = subscribe(authUserStore, (value) => $authUserStore = value);
      $$unsubscribe_authUserStore();
      return `${$$result.head += `${$$result.title = `<title>Mission Control \u2014 Home</title>`, ""}<meta name="${"description"}" content="${"Titan Mission Control \u2014 Operate your Moonface project in one place"}" data-svelte="svelte-1hvf0u8">`, ""}
${$authUserStore ? `<h1>Logged in</h1>` : ``}
${validate_component(Overview, "Overview").$$render($$result, {}, {}, {})}
${validate_component(Recent, "Recent").$$render($$result, {}, {}, {})}
${validate_component(Support, "Support").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-41218be5.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-41218be5.js", "_app/immutable/chunks/index-1e252bca.js", "_app/immutable/chunks/Support-a9f98154.js", "_app/immutable/chunks/auth-bad9aa99.js", "_app/immutable/chunks/index-dbbb60cd.js"];
    stylesheets3 = ["_app/immutable/assets/_page-91342e32.css"];
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.js
var page_exports = {};
__export(page_exports, {
  csr: () => csr,
  prerender: () => prerender
});
var dev, csr, prerender;
var init_page = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.js"() {
    dev = false;
    csr = dev;
    prerender = true;
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var css2, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.svelte.js"() {
    init_chunks();
    css2 = {
      code: ".content.svelte-1sfqw64{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
      map: null
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css2);
      return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}<meta name="${"description"}" content="${"About this app"}" data-svelte="svelte-1ds1qyu">`, ""}

<div class="${"content svelte-1sfqw64"}"><h1>About this app</h1>

	<p>This is a <a href="${"https://kit.svelte.dev"}">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.
	</p>

	<p>The <a href="${"/todos"}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  imports: () => imports4,
  index: () => index4,
  shared: () => page_exports,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page();
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/about/_page.svelte-2944da8e.js";
    imports4 = ["_app/immutable/components/pages/about/_page.svelte-2944da8e.js", "_app/immutable/chunks/index-1e252bca.js", "_app/immutable/modules/pages/about/_page.js-4535a9dd.js", "_app/immutable/chunks/_page-1273890e.js"];
    stylesheets4 = ["_app/immutable/assets/_page-4e591933.css"];
  }
});

// .svelte-kit/output/server/entries/pages/auth/_page.server.js
var page_server_exports = {};
var init_page_server = __esm({
  ".svelte-kit/output/server/entries/pages/auth/_page.server.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/auth/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/auth/_page.svelte.js"() {
    init_chunks();
    init_auth();
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let password = "";
      let email = "";
      let showSuccessMessage = false;
      let pendingApiCall = false;
      function submit(event) {
        pendingApiCall = true;
        register(email, password).then((newUser) => {
          showSuccessMessage = true;
          pendingApiCall = false;
        }).catch((e) => {
          pendingApiCall = false;
          console.log(e);
          alert(e.message);
        });
      }
      if ($$props.submit === void 0 && $$bindings.submit && submit !== void 0)
        $$bindings.submit(submit);
      return `<h1>Register</h1>
<form><input type="${"email"}" required placeholder="${"Email"}"${add_attribute("value", email, 0)}>
  <input type="${"password"}" required placeholder="${"Your password"}"${add_attribute("value", password, 0)}>

  <button>Register </button>
  ${pendingApiCall ? `Loading..` : ``}</form>
${showSuccessMessage ? `<p>Please check your email to verify and then login</p>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  imports: () => imports5,
  index: () => index5,
  server: () => page_server_exports,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_page_server();
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file5 = "_app/immutable/components/pages/auth/_page.svelte-6540d8c9.js";
    imports5 = ["_app/immutable/components/pages/auth/_page.svelte-6540d8c9.js", "_app/immutable/chunks/index-1e252bca.js", "_app/immutable/chunks/auth-bad9aa99.js", "_app/immutable/chunks/index-dbbb60cd.js"];
    stylesheets5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/support/_page.js
var page_exports2 = {};
__export(page_exports2, {
  prerender: () => prerender2
});
var prerender2;
var init_page2 = __esm({
  ".svelte-kit/output/server/entries/pages/support/_page.js"() {
    prerender2 = true;
  }
});

// .svelte-kit/output/server/entries/pages/support/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/support/_page.svelte.js"() {
    init_chunks();
    init_Support();
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Support, "Support").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  imports: () => imports6,
  index: () => index6,
  shared: () => page_exports2,
  stylesheets: () => stylesheets6
});
var index6, component6, file6, imports6, stylesheets6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_page2();
    index6 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    file6 = "_app/immutable/components/pages/support/_page.svelte-93722d21.js";
    imports6 = ["_app/immutable/components/pages/support/_page.svelte-93722d21.js", "_app/immutable/chunks/index-1e252bca.js", "_app/immutable/chunks/Support-a9f98154.js", "_app/immutable/modules/pages/support/_page.js-f5e25c3a.js", "_app/immutable/chunks/_page-8667e69f.js"];
    stylesheets6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/todos/_page.server.js
var page_server_exports2 = {};
__export(page_server_exports2, {
  actions: () => actions,
  load: () => load
});
function api(method, resource, data) {
  return fetch(`${base2}/${resource}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
}
var base2, load, actions;
var init_page_server2 = __esm({
  ".svelte-kit/output/server/entries/pages/todos/_page.server.js"() {
    init_index2();
    base2 = "https://api.svelte.dev";
    load = async ({ locals }) => {
      const response = await api("GET", `todos/${locals.userid}`);
      if (response.status === 404) {
        return {
          todos: []
        };
      }
      if (response.status === 200) {
        return {
          todos: await response.json()
        };
      }
      throw error(response.status);
    };
    actions = {
      add: async ({ request, locals }) => {
        const form = await request.formData();
        await api("POST", `todos/${locals.userid}`, {
          text: form.get("text")
        });
      },
      edit: async ({ request, locals }) => {
        const form = await request.formData();
        await api("PATCH", `todos/${locals.userid}/${form.get("uid")}`, {
          text: form.get("text")
        });
      },
      toggle: async ({ request, locals }) => {
        const form = await request.formData();
        await api("PATCH", `todos/${locals.userid}/${form.get("uid")}`, {
          done: !!form.get("done")
        });
      },
      delete: async ({ request, locals }) => {
        const form = await request.formData();
        await api("DELETE", `todos/${locals.userid}/${form.get("uid")}`);
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/todos/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
var css3, Page5;
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/todos/_page.svelte.js"() {
    init_chunks();
    css3 = {
      code: `.todos.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;line-height:1}.new.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{margin:0 0 0.5rem 0}input.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{border:1px solid transparent}input.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1:focus-visible{box-shadow:inset 1px 1px 6px rgba(0, 0, 0, 0.1);border:1px solid #ff3e00 !important;outline:none}.new.svelte-q3kvo1 input.svelte-q3kvo1.svelte-q3kvo1{font-size:28px;width:100%;padding:0.5em 1em 0.3em 1em;box-sizing:border-box;background:rgba(255, 255, 255, 0.05);border-radius:8px;text-align:center}.todo.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{display:grid;grid-template-columns:2rem 1fr 2rem;grid-gap:0.5rem;align-items:center;margin:0 0 0.5rem 0;padding:0.5rem;background-color:white;border-radius:8px;filter:drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));transform:translate(-1px, -1px);transition:filter 0.2s, transform 0.2s}.done.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{transform:none;opacity:0.4;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.1))}form.text.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{position:relative;display:flex;align-items:center;flex:1}.todo.svelte-q3kvo1 input.svelte-q3kvo1.svelte-q3kvo1{flex:1;padding:0.5em 2em 0.5em 0.8em;border-radius:3px}.todo.svelte-q3kvo1 button.svelte-q3kvo1.svelte-q3kvo1{width:2em;height:2em;border:none;background-color:transparent;background-position:50% 50%;background-repeat:no-repeat}button.toggle.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{border:1px solid rgba(0, 0, 0, 0.2);border-radius:50%;box-sizing:border-box;background-size:1em auto}.done.svelte-q3kvo1 .toggle.svelte-q3kvo1.svelte-q3kvo1{background-image:url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.delete.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");opacity:0.2}.delete.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1:hover,.delete.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1:focus{transition:opacity 0.2s;opacity:1}.save.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1{position:absolute;right:0;opacity:0;background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A")}.todo.svelte-q3kvo1 input.svelte-q3kvo1:focus+.save.svelte-q3kvo1,.save.svelte-q3kvo1.svelte-q3kvo1.svelte-q3kvo1:focus{transition:opacity 0.2s;opacity:1}`,
      map: null
    };
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let todos;
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$result.css.add(css3);
      todos = data.todos;
      return `${$$result.head += `${$$result.title = `<title>Todos</title>`, ""}<meta name="${"description"}" content="${"A todo list app"}" data-svelte="svelte-aw2gey">`, ""}

<div class="${"todos svelte-q3kvo1"}"><h1>Todos</h1>

	<form class="${"new svelte-q3kvo1"}" action="${"/todos?/add"}" method="${"post"}"><input name="${"text"}" aria-label="${"Add todo"}" placeholder="${"+ tap to add a todo"}" class="${"svelte-q3kvo1"}"></form>

	${each(todos, (todo) => {
        return `<div class="${["todo svelte-q3kvo1", todo.done ? "done" : ""].join(" ").trim()}"><form action="${"/todos?/toggle"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${add_attribute("value", todo.uid, 0)} class="${"svelte-q3kvo1"}">
				<input type="${"hidden"}" name="${"done"}"${add_attribute("value", todo.done ? "" : "true", 0)} class="${"svelte-q3kvo1"}">
				<button class="${"toggle svelte-q3kvo1"}" aria-label="${"Mark todo as " + escape2(todo.done ? "not done" : "done", true)}"></button></form>

			<form class="${"text svelte-q3kvo1"}" action="${"/todos?/edit"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${add_attribute("value", todo.uid, 0)} class="${"svelte-q3kvo1"}">
				<input aria-label="${"Edit todo"}" type="${"text"}" name="${"text"}"${add_attribute("value", todo.text, 0)} class="${"svelte-q3kvo1"}">
				<button class="${"save svelte-q3kvo1"}" aria-label="${"Save todo"}"></button></form>

			<form action="${"/todos?/delete"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${add_attribute("value", todo.uid, 0)} class="${"svelte-q3kvo1"}">
				<button class="${"delete svelte-q3kvo1"}" aria-label="${"Delete todo"}" ${todo.pending_delete ? "disabled" : ""}></button></form>
		</div>`;
      })}
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  file: () => file7,
  imports: () => imports7,
  index: () => index7,
  server: () => page_server_exports2,
  stylesheets: () => stylesheets7
});
var index7, component7, file7, imports7, stylesheets7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_page_server2();
    index7 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    file7 = "_app/immutable/components/pages/todos/_page.svelte-b5faafd4.js";
    imports7 = ["_app/immutable/components/pages/todos/_page.svelte-b5faafd4.js", "_app/immutable/chunks/index-1e252bca.js", "_app/immutable/chunks/singletons-f05fa273.js", "_app/immutable/chunks/index-dbbb60cd.js"];
    stylesheets7 = ["_app/immutable/assets/_page-bf3fc389.css"];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();
init_index2();
init_index3();
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!is_primitive(thing)) {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var DATA_SUFFIX = "/__data.js";
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index8 = 0;
  while (index8 < str.length) {
    var eqIdx = str.indexOf("=", index8);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index8);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index8 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index8, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index8 = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode$1;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode$1(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var DEFAULT_SERIALIZE_OPTIONS = {
  httpOnly: true,
  secure: true,
  sameSite: "lax"
};
function get_cookies(request, url2) {
  const new_cookies = /* @__PURE__ */ new Map();
  const cookies = {
    get(name, opts) {
      const c = new_cookies.get(name);
      if (c && domain_matches(url2.hostname, c.options.domain) && path_matches(url2.pathname, c.options.path)) {
        return c.value;
      }
      const decode2 = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      const req_cookies = parse_1(request.headers.get("cookie") ?? "", { decode: decode2 });
      return req_cookies[name];
    },
    set(name, value, opts = {}) {
      new_cookies.set(name, {
        name,
        value,
        options: {
          ...DEFAULT_SERIALIZE_OPTIONS,
          ...opts
        }
      });
    },
    delete(name, opts = {}) {
      new_cookies.set(name, {
        name,
        value: "",
        options: {
          ...DEFAULT_SERIALIZE_OPTIONS,
          ...opts,
          maxAge: 0
        }
      });
    },
    serialize(name, value, opts) {
      return serialize_1(name, value, {
        ...DEFAULT_SERIALIZE_OPTIONS,
        ...opts
      });
    }
  };
  return { cookies, new_cookies };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options } = new_cookie;
    headers.append("set-cookie", serialize_1(name, value, options));
  }
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function data_response(data) {
  const headers = {
    "content-type": "application/javascript",
    "cache-control": "private, no-store"
  };
  try {
    return new Response(`window.__sveltekit_data = ${devalue(data)}`, { headers });
  } catch (e) {
    const error2 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error2.path);
    const message = match ? `${error2.message} (data.${match[2]})` : error2.message;
    return new Response(`throw new Error(${JSON.stringify(message)})`, { headers });
  }
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
function handle_fatal_error(event, options, error2) {
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = handle_error_and_jsonify(event, options, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options.handle_error(error2, event);
  }
}
function redirect_response(status, location, cookies = []) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  add_cookies_to_headers(response.headers, cookies);
  return response;
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender3 = mod.prerender ?? state.prerender_default;
  if (prerender3 && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender3) {
    throw new Error(`${event.routeId} is not prerenderable`);
  }
  try {
    const response = await handler2(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-routeid", event.routeId);
      response.headers.set("x-sveltekit-prerender", String(prerender3));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    } else if (error2 instanceof ValidationError) {
      return json(error2.data, { status: error2.status });
    }
    throw error2;
  }
}
function is_endpoint_request(event) {
  const { method } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions2 = server2.actions;
  if (!actions2) {
    maybe_throw_migration_error(server2);
    return new Response("POST method not allowed. No actions exist for this page", {
      status: 405,
      headers: {
        allow: "GET"
      }
    });
  }
  check_named_default_separate(actions2);
  try {
    const data = await call_action(event, actions2);
    if (data instanceof ValidationError) {
      check_serializability(data.data, event.routeId, "data");
      return action_json({ type: "invalid", status: data.status, data: data.data });
    } else {
      check_serializability(data, event.routeId, "data");
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        data
      });
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    if (!(error2 instanceof HttpError)) {
      options.handle_error(error2, event);
    }
    return action_json(
      {
        type: "error",
        error: handle_error_and_jsonify(event, options, error2)
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions2 = server2.actions;
  if (!actions2) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions2);
  try {
    const data = await call_action(event, actions2);
    if (data instanceof ValidationError) {
      return { type: "invalid", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data
      };
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return { type: "error", error: error2 };
  }
}
function check_named_default_separate(actions2) {
  if (actions2.default && Object.keys(actions2).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions2) {
  var _a;
  const url2 = new URL(event.request.url);
  let name = "default";
  for (const param of url2.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions2[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  const type = (_a = event.request.headers.get("content-type")) == null ? void 0 : _a.split("; ")[0];
  if (type !== "application/x-www-form-urlencoded" && type !== "multipart/form-data") {
    throw new Error(`Actions expect form-encoded data (received ${type})`);
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i) => {
        check_serializability(child, id, `${path}[${i}]`);
      });
      return;
    }
    if (Object.getPrototypeOf(value) === Object.prototype) {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(`${path} returned from action in ${id} cannot be serialized as JSON`);
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parseNameValuePair(nameValuePairStr) {
  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}
function parse(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers && input.headers["set-cookie"]) {
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    var sch = input.headers[Object.keys(input.headers).find(function(key2) {
      return key2.toLowerCase() === "set-cookie";
    })];
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      );
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
function create_fetch({ event, options, state, route, prerender_default, resolve_opts }) {
  const fetched = [];
  const initial_cookies = parse_1(event.request.headers.get("cookie") || "");
  const set_cookies = [];
  function get_cookie_header(url2, header) {
    const new_cookies = {};
    for (const cookie of set_cookies) {
      if (!domain_matches(url2.hostname, cookie.options.domain))
        continue;
      if (!path_matches(url2.pathname, cookie.options.path))
        continue;
      new_cookies[cookie.name] = cookie.value;
    }
    const combined_cookies = {
      ...initial_cookies,
      ...new_cookies,
      ...parse_1(header ?? "")
    };
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  const fetcher = async (info, init2) => {
    const request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    let dependency;
    const response = await options.hooks.handleFetch({
      event,
      request,
      fetch: async (info2, init3) => {
        const request2 = normalize_fetch_input(info2, init3, event.url);
        const url2 = new URL(request2.url);
        if (url2.origin !== event.url.origin) {
          if (`.${url2.hostname}`.endsWith(`.${event.url.hostname}`) && request2.credentials !== "omit") {
            const cookie = get_cookie_header(url2, request2.headers.get("cookie"));
            if (cookie)
              request2.headers.set("cookie", cookie);
          }
          let response3 = await fetch(request2);
          if (request2.mode === "no-cors") {
            response3 = new Response("", {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers
            });
          } else {
            if (url2.origin !== event.url.origin) {
              const acao = response3.headers.get("access-control-allow-origin");
              if (!acao || acao !== event.url.origin && acao !== "*") {
                throw new Error(
                  `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
                );
              }
            }
          }
          return response3;
        }
        let response2;
        const prefix2 = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url2.pathname);
        const filename = (decoded.startsWith(prefix2) ? decoded.slice(prefix2.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file8 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file8), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request2);
        }
        if (request2.credentials !== "omit") {
          const cookie = get_cookie_header(url2, request2.headers.get("cookie"));
          if (cookie) {
            request2.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request2.headers.has("authorization")) {
            request2.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string") {
          throw new Error("Request body must be a string");
        }
        response2 = await respond(request2, options, {
          prerender_default,
          ...state,
          initiator: route
        });
        if (state.prerendering) {
          dependency = { response: response2, body: null };
          state.prerendering.dependencies.set(url2.pathname, dependency);
        }
        return response2;
      }
    });
    const set_cookie = response.headers.get("set-cookie");
    if (set_cookie) {
      set_cookies.push(
        ...splitCookiesString_1(set_cookie).map((str) => {
          const { name, value, ...options2 } = parseString_1(str);
          return { name, value, options: options2 };
        })
      );
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: request.url.startsWith(event.url.origin) ? request.url.slice(event.url.origin.length) : request.url,
              method: request.method,
              request_body,
              response_body: body,
              response: response2
            });
            const get = response2.headers.get;
            response2.headers.get = (key3) => {
              const lower = key3.toLowerCase();
              const value = get.call(response2.headers, lower);
              if (value && !lower.startsWith("x-sveltekit-")) {
                const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
                if (!included) {
                  throw new Error(
                    `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#handle`
                  );
                }
              }
              return value;
            };
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies: set_cookies };
}
function normalize_fetch_input(info, init2, url2) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url2) : info, init2);
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url2, callback) {
  const tracked = new URL(url2);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
    return inspect(url2, opts);
  };
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url2) {
  Object.defineProperty(url2, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url2) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url2, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
async function load_server_data({ event, state, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  const url2 = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url2);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    url: url2
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({ event, fetcher, node, parent, server_data_promise }) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: fetcher,
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
async function unwrap_promises(object) {
  const unwrapped = {};
  for (const key2 in object) {
    unwrapped[key2] = await object[key2];
  }
  return unwrapped;
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev2) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev2 ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev2) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev2 && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev2) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev2);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender: prerender3, dev: dev2 }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender3;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev2);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev2);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  cookies,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets8 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "invalid" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: event.url,
      data
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url2) => modulepreloads.add(url2));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url2) => stylesheets8.add(url2));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = devalue(branch.map(({ server_data }) => server_data));
  } catch (e) {
    const error3 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match)
      throw new Error(`${error3.message} (data.${match[2]})`);
    throw error3;
  }
  if (form_value) {
    serialized.form = devalue(form_value);
  }
  const init_app = `
		import { start } from ${s(prefixed(entry.file))};

		start({
			env: ${s(options.public_env)},
			hydrate: ${page_config.ssr ? `{
				status: ${status},
				error: ${s(error2)},
				node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)},
				data: ${serialized.data},
				form: ${serialized.form}
			}` : "null"},
			paths: ${s(options.paths)},
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			trailing_slash: ${s(options.trailing_slash)}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets8) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.csr) {
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    add_cookies_to_headers(headers, cookies);
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options,
    state,
    route: GENERIC_ERROR,
    resolve_opts
  });
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    if (ssr) {
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetcher,
        node: default_layout,
        parent: async () => ({}),
        server_data_promise,
        state
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: handle_error_and_jsonify(event, options, error2),
      branch,
      fetched,
      cookies,
      event,
      resolve_opts
    });
  } catch (error3) {
    if (error3 instanceof Redirect) {
      return redirect_response(error3.status, error3.location, cookies);
    }
    return static_error_page(
      options,
      error3 instanceof HttpError ? error3.status : 500,
      handle_error_and_jsonify(event, options, error3).message
    );
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_action_json_request(event, options, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "invalid") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    const { fetcher, fetched, cookies } = create_fetch({
      event,
      options,
      state,
      route,
      prerender_default: should_prerender,
      resolve_opts
    });
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        cookies,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetcher,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            server_data_promise: server_promises[i],
            state
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = `window.__sveltekit_data = ${JSON.stringify({
                type: "redirect",
                location: err.location
              })}`;
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location, cookies);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index8 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index8]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                cookies
              });
            }
          }
          return static_error_page(options, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `window.__sveltekit_data = ${devalue({
        type: "data",
        nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
      })}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched,
      cookies
    });
  } catch (error2) {
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
async function render_data(event, route, options, state) {
  var _a;
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = ((_a = event.url.searchParams.get("__invalid")) == null ? void 0 : _a.split("").map((x) => x === "y")) ?? node_ids.map(() => true);
    let aborted = false;
    const url2 = new URL(event.url);
    url2.pathname = normalize_path(
      url2.pathname.slice(0, -DATA_SUFFIX.length),
      options.trailing_slash
    );
    url2.searchParams.delete("__invalid");
    url2.searchParams.delete("__id");
    const new_event = { ...event, url: url2 };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n == void 0 ? n : await options.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch((error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return {
            type: "error",
            error: handle_error_and_jsonify(event, options, error2),
            status: error2 instanceof HttpError ? error2.status : void 0
          };
        })
      )
    );
    const server_data = {
      type: "data",
      nodes: nodes.slice(0, length)
    };
    return data_response(server_data);
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      const server_data = {
        type: "redirect",
        location: error2.location
      };
      return data_response(server_data);
    } else {
      return data_response(handle_error_and_jsonify(event, options, error2));
    }
  }
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
async function respond(request, options, state) {
  var _a, _b, _c, _d;
  let url2 = new URL(request.url);
  if (options.csrf.check_origin) {
    const type = (_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";")[0];
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url2.origin && (type === "application/x-www-form-urlencoded" || type === "multipart/form-data");
    if (forbidden) {
      return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
        status: 403
      });
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url2.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.page) && !is_data_request) {
    const normalized = normalize_path(url2.pathname, options.trailing_slash);
    if (normalized !== url2.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url2.origin + normalized : normalized) + (url2.search === "?" ? "" : url2.search)
        }
      });
    }
  }
  const headers = {};
  const { cookies, new_cookies } = get_cookies(request, url2);
  if (state.prerendering)
    disable_search(url2);
  const event = {
    cookies,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url: url2
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter
  };
  async function resolve(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          cookies: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options, state);
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      const error2 = e instanceof HttpError ? e : coalesce_to_error(e);
      return handle_fatal_error(event2, options, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  try {
    const response = await options.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response2.headers.set(key2, value);
          }
        }
        add_cookies_to_headers(response2.headers, Array.from(new_cookies.values()));
        return response2;
      }),
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = response.headers.get("etag");
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    return response;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    return handle_fatal_error(event, options, error2);
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="' + assets2 + '/favicon.ico" />\n    <meta name="viewport" content="width=device-width" />\n    ' + head + "\n  </head>\n  <body>\n    " + body + "\n  </body>\n</html>\n";
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        }) ?? { message: event.routeId ? "Internal Error" : "Not Found" };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: null,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      if (module.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/netlify-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.ico", "gradient.png", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp", "titan-logo.svg"]),
  mimeTypes: { ".ico": "image/vnd.microsoft.icon", ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp", ".svg": "image/svg+xml" },
  _: {
    entry: { "file": "_app/immutable/start-47e4b9ff.js", "imports": ["_app/immutable/start-47e4b9ff.js", "_app/immutable/chunks/index-1e252bca.js", "_app/immutable/chunks/singletons-f05fa273.js", "_app/immutable/chunks/index-dbbb60cd.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "auth",
        pattern: /^\/auth\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      },
      {
        id: "todos",
        pattern: /^\/todos\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 6 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set(["/about", "/support"]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appDir}/`;
var initialized = server.init({
  env: Deno.env.toObject()
});
async function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url2 = new URL(request.url);
  if (url2.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url2.pathname.replace(/\/$/, "");
  let file8 = pathname.substring(1);
  try {
    file8 = decodeURIComponent(file8);
  } catch (err) {
  }
  return manifest.assets.has(file8) || manifest.assets.has(file8 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=render.js.map
