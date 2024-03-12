(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
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
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function v(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, i3, o3, null);
  }
  function d(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function g(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function m(n2, l3) {
    if (null == l3)
      return n2.__ ? m(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? m(n2) : null;
  }
  function w(n2, u3, t3) {
    var i3, o3 = n2.__v, r3 = o3.__e, f3 = n2.__P;
    if (f3)
      return (i3 = v({}, o3)).__v = o3.__v + 1, l.vnode && l.vnode(i3), M(f3, i3, o3, n2.__n, void 0 !== f3.ownerSVGElement, 32 & o3.__u ? [r3] : null, u3, null == r3 ? m(o3) : r3, !!(32 & o3.__u), t3), i3.__v = o3.__v, i3.__.__k[i3.__i] = i3, i3.__d = void 0, i3.__e != r3 && k(i3), i3;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function x(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !C.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(C);
  }
  function C() {
    var n2, u3, t3, o3 = [], r3 = [];
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (t3 = i.length, u3 = w(n2, o3, r3) || u3, 0 === t3 || i.length > t3 ? (j(o3, u3, r3), r3.length = o3.length = 0, u3 = void 0, i.sort(f)) : u3 && l.__c && l.__c(u3, s));
    u3 && j(o3, u3, r3), C.__r = 0;
  }
  function P(n2, l3, u3, t3, i3, o3, r3, f3, e3, a3, h3) {
    var v3, p3, y3, d3, _6, g4 = t3 && t3.__k || s, b2 = l3.length;
    for (u3.__d = e3, S(u3, l3, g4), e3 = u3.__d, v3 = 0; v3 < b2; v3++)
      null != (y3 = u3.__k[v3]) && "boolean" != typeof y3 && "function" != typeof y3 && (p3 = -1 === y3.__i ? c : g4[y3.__i] || c, y3.__i = v3, M(n2, y3, p3, i3, o3, r3, f3, e3, a3, h3), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && N(p3.ref, null, y3), h3.push(y3.ref, y3.__c || d3, y3)), null == _6 && null != d3 && (_6 = d3), 65536 & y3.__u || p3.__k === y3.__k ? e3 = $(y3, e3, n2) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u3.__d = e3, u3.__e = _6;
  }
  function S(n2, l3, u3) {
    var t3, i3, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      r3 = t3 + a3, null != (i3 = n2.__k[t3] = null == (i3 = l3[t3]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? d(null, i3, null, null, null) : h(i3) ? d(g, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? d(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = I(i3, u3, r3, s3), i3.__i = f3, o3 = null, -1 !== f3 && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r3 && (f3 === r3 + 1 ? a3++ : f3 > r3 ? s3 > e3 - r3 ? a3 += f3 - r3 : a3-- : f3 < r3 ? f3 == r3 - 1 && (a3 = f3 - r3) : a3 = 0, f3 !== t3 + a3 && (i3.__u |= 65536))) : (o3 = u3[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), O(o3, o3, false), u3[r3] = null, s3--);
    if (s3)
      for (t3 = 0; t3 < c3; t3++)
        null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), O(o3, o3));
  }
  function $(n2, l3, u3) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
        t3[i3] && (t3[i3].__ = n2, l3 = $(t3[i3], l3, u3));
      return l3;
    }
    n2.__e != l3 && (u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function H(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
      H(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function I(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
      return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function T(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function A(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || T(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = Date.now(), n2.addEventListener(l3, o3 ? L : D, o3)) : n2.removeEventListener(l3, o3 ? L : D, o3);
      else {
        if (i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && "role" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function D(n2) {
    if (this.l) {
      var u3 = this.l[n2.type + false];
      if (n2.t) {
        if (n2.t <= u3.u)
          return;
      } else
        n2.t = Date.now();
      return u3(l.event ? l.event(n2) : n2);
    }
  }
  function L(n2) {
    if (this.l)
      return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function M(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, p3, y3, d3, _6, m3, w3, k3, x4, C4, S2, $3, H3, I3, T4, A3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof A3)
        try {
          if (k3 = u3.props, x4 = (a3 = A3.contextType) && i3[a3.__c], C4 = a3 ? x4 ? x4.props.value : a3.__ : i3, t3.__c ? w3 = (p3 = u3.__c = t3.__c).__ = p3.__E : ("prototype" in A3 && A3.prototype.render ? u3.__c = p3 = new A3(k3, C4) : (u3.__c = p3 = new b(k3, C4), p3.constructor = A3, p3.render = q), x4 && x4.sub(p3), p3.props = k3, p3.state || (p3.state = {}), p3.context = C4, p3.__n = i3, y3 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != A3.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, A3.getDerivedStateFromProps(k3, p3.__s))), d3 = p3.props, _6 = p3.state, p3.__v = u3, y3)
            null == A3.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
          else {
            if (null == A3.getDerivedStateFromProps && k3 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(k3, C4), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(k3, p3.__s, C4) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (p3.props = k3, p3.state = p3.__s, p3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), S2 = 0; S2 < p3._sb.length; S2++)
                p3.__h.push(p3._sb[S2]);
              p3._sb = [], p3.__h.length && f3.push(p3);
              break n;
            }
            null != p3.componentWillUpdate && p3.componentWillUpdate(k3, p3.__s, C4), null != p3.componentDidUpdate && p3.__h.push(function() {
              p3.componentDidUpdate(d3, _6, m3);
            });
          }
          if (p3.context = C4, p3.props = k3, p3.__P = n2, p3.__e = false, $3 = l.__r, H3 = 0, "prototype" in A3 && A3.prototype.render) {
            for (p3.state = p3.__s, p3.__d = false, $3 && $3(u3), a3 = p3.render(p3.props, p3.state, p3.context), I3 = 0; I3 < p3._sb.length; I3++)
              p3.__h.push(p3._sb[I3]);
            p3._sb = [];
          } else
            do {
              p3.__d = false, $3 && $3(u3), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
            } while (p3.__d && ++H3 < 25);
          p3.state = p3.__s, null != p3.getChildContext && (i3 = v(v({}, i3), p3.getChildContext())), y3 || null == p3.getSnapshotBeforeUpdate || (m3 = p3.getSnapshotBeforeUpdate(d3, _6)), P(n2, h(T4 = null != a3 && a3.type === g && null == a3.key ? a3.props.children : a3) ? T4 : [T4], u3, t3, i3, o3, r3, f3, e3, c3, s3), p3.base = u3.__e, u3.__u &= -161, p3.__h.length && f3.push(p3), w3 && (p3.__E = p3.__ = null);
        } catch (n3) {
          u3.__v = null, c3 || null != r3 ? (u3.__e = e3, u3.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u3.__e = t3.__e, u3.__k = t3.__k), l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function j(n2, u3, t3) {
    for (var i3 = 0; i3 < t3.length; i3++)
      N(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function z(l3, u3, t3, i3, o3, r3, f3, e3, s3) {
    var a3, v3, y3, d3, _6, g4, b2, w3 = t3.props, k3 = u3.props, x4 = u3.type;
    if ("svg" === x4 && (o3 = true), null != r3) {
      for (a3 = 0; a3 < r3.length; a3++)
        if ((_6 = r3[a3]) && "setAttribute" in _6 == !!x4 && (x4 ? _6.localName === x4 : 3 === _6.nodeType)) {
          l3 = _6, r3[a3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === x4)
        return document.createTextNode(k3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", x4) : document.createElement(x4, k3.is && k3), r3 = null, e3 = false;
    }
    if (null === x4)
      w3 === k3 || e3 && l3.data === k3 || (l3.data = k3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), w3 = t3.props || c, !e3 && null != r3)
        for (w3 = {}, a3 = 0; a3 < l3.attributes.length; a3++)
          w3[(_6 = l3.attributes[a3]).name] = _6.value;
      for (a3 in w3)
        _6 = w3[a3], "children" == a3 || ("dangerouslySetInnerHTML" == a3 ? y3 = _6 : "key" === a3 || a3 in k3 || A(l3, a3, null, _6, o3));
      for (a3 in k3)
        _6 = k3[a3], "children" == a3 ? d3 = _6 : "dangerouslySetInnerHTML" == a3 ? v3 = _6 : "value" == a3 ? g4 = _6 : "checked" == a3 ? b2 = _6 : "key" === a3 || e3 && "function" != typeof _6 || w3[a3] === _6 || A(l3, a3, _6, w3[a3], o3);
      if (v3)
        e3 || y3 && (v3.__html === y3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3.__html), u3.__k = [];
      else if (y3 && (l3.innerHTML = ""), P(l3, h(d3) ? d3 : [d3], u3, t3, i3, o3 && "foreignObject" !== x4, r3, f3, r3 ? r3[0] : t3.__k && m(t3, 0), e3, s3), null != r3)
        for (a3 = r3.length; a3--; )
          null != r3[a3] && p(r3[a3]);
      e3 || (a3 = "value", void 0 !== g4 && (g4 !== l3[a3] || "progress" === x4 && !g4 || "option" === x4 && g4 !== w3[a3]) && A(l3, a3, g4, w3[a3], false), a3 = "checked", void 0 !== b2 && b2 !== l3[a3] && A(l3, a3, b2, w3[a3], false));
    }
    return l3;
  }
  function N(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function O(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null, n2.__c = void 0;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && O(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], M(t3, u3 = (!o3 && i3 || t3).__k = y(g, null, [u3]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), u3.__d = void 0, j(f3, u3, e3);
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, h;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      h = Array.isArray;
      n = s.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i3, o3, r3; l3 = l3.__; )
          if ((i3 = l3.__c) && !i3.__)
            try {
              if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
                return i3.__E = i3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && null == n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u3), this.props)), n2 && v(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), x(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), x(this));
      }, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, C.__r = 0, e = 0;
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function h2(n2, t3) {
    e2.__h && e2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({ __V: c2 }), u3.__[n2];
  }
  function p2(n2) {
    return o2 = 1, y2(D2, n2);
  }
  function y2(n2, u3, i3) {
    var o3 = h2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function _(n2, u3) {
    var i3 = h2(t2++, 3);
    !e2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r2.__H.__h.push(i3));
  }
  function j2() {
    for (var n2; n2 = f2.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], e2.__e(t3, n2.__v);
        }
  }
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, d2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l;
      a2 = e2.__b;
      v2 = e2.__r;
      l2 = e2.diffed;
      m2 = e2.__c;
      s2 = e2.unmount;
      d2 = e2.__;
      e2.__b = function(n2) {
        r2 = null, a2 && a2(n2);
      }, e2.__ = function(n2, t3) {
        n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d2 && d2(n2, t3);
      }, e2.__r = function(n2) {
        v2 && v2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
      }, e2.diffed = function(n2) {
        l2 && l2(n2);
        var t3 = n2.__c;
        t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === e2.requestAnimationFrame || ((i2 = e2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
        })), u2 = r2 = null;
      }, e2.__c = function(n2, t3) {
        t3.some(function(n3) {
          try {
            n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
              return !n4.__ || B2(n4);
            });
          } catch (r3) {
            t3.some(function(n4) {
              n4.__h && (n4.__h = []);
            }), t3 = [], e2.__e(r3, n3.__v);
          }
        }), m2 && m2(n2, t3);
      }, e2.unmount = function(n2) {
        s2 && s2(n2);
        var t3, r3 = n2.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
          try {
            z2(n3);
          } catch (n4) {
            t3 = n4;
          }
        }), r3.__H = void 0, t3 && e2.__e(t3, r3.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../private/var/folders/1h/b1mxv5wx1zgg_18sqhncjm_r0000gn/T/5f8cb051-2685-4265-8c91-626e6b9ae4c6/base.js
  var init_base = __esm({
    "../../../../private/var/folders/1h/b1mxv5wx1zgg_18sqhncjm_r0000gn/T/5f8cb051-2685-4265-8c91-626e6b9ae4c6/base.js"() {
      if (document.getElementById("826ab65e8b") === null) {
        const element = document.createElement("style");
        element.id = "826ab65e8b";
        element.innerHTML = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      B(y(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_render();
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C3(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E2(n2, t3) {
    this.props = n2, this.context = t3;
  }
  function F3(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return F3(n3, t3, e3);
    })), n2;
  }
  function I2(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return I2(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function M2() {
    this.u = null, this.o = null;
  }
  function K() {
  }
  function Q() {
    return this.cancelBubble;
  }
  function X() {
    return this.defaultPrevented;
  }
  var x3, R, O2, T3, V2, z3, B3, H2, Z, Y, $2, J, nn, tn, en, rn, un;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (E2.prototype = new b()).isPureReactComponent = true, E2.prototype.shouldComponentUpdate = function(n2, t3) {
        return C3(this.props, n2) || C3(this.state, t3);
      };
      x3 = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x3 && x3(n2);
      };
      R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      O2 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; )
            if ((u3 = o3.__c) && u3.__c)
              return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        O2(n2, t3, e3, r3);
      };
      T3 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), T3 && T3(n2);
      }, (L2.prototype = new b()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = U(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = I2(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        };
        r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, L2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, L2.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
            this.__v.__k[0] = F3(this.__b, r3, o3.__O = o3.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && y(g, null, n2.fallback);
        return i3 && (i3.__u &= -33), [y(g, null, e3.__a ? null : n2.children), i3];
      };
      V2 = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (M2.prototype = new b()).__a = function(n2) {
        var t3 = this, e3 = U(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), V2(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, M2.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = H(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          V2(n2, e3, t3);
        });
      };
      z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      H2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Z = /[A-Z0-9]/g;
      Y = "undefined" != typeof document;
      $2 = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      J = l.event;
      l.event = function(n2) {
        return J && (n2 = J(n2)), n2.persist = K, n2.isPropagationStopped = Q, n2.isDefaultPrevented = X, n2.nativeEvent = n2;
      };
      tn = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      en = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {};
          for (var o3 in t3) {
            var i3 = t3[o3];
            if (!("value" === o3 && "defaultValue" in t3 && null == i3 || Y && "children" === o3 && "noscript" === e3 || "class" === o3 || "className" === o3)) {
              var l3 = o3.toLowerCase();
              "defaultValue" === o3 && "value" in t3 && null == t3.value ? o3 = "value" : "download" === o3 && true === i3 ? i3 = "" : "translate" === l3 && "no" === i3 ? i3 = false : "ondoubleclick" === l3 ? o3 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || $2(t3.type) ? "onfocus" === l3 ? o3 = "onfocusin" : "onblur" === l3 ? o3 = "onfocusout" : H2.test(o3) ? o3 = l3 : -1 === e3.indexOf("-") && B3.test(o3) ? o3 = o3.replace(Z, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o3 = "oninput", "oninput" === l3 && u3[o3 = l3] && (o3 = "oninputCapture"), u3[o3] = i3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", tn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = z3, en && en(n2);
      };
      rn = l.__r;
      l.__r = function(n2) {
        rn && rn(n2), nn = n2.__c;
      };
      un = l.diffed;
      l.diffed = function(n2) {
        un && un(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), nn = null;
      };
    }
  });

  // ../../../../private/var/folders/1h/b1mxv5wx1zgg_18sqhncjm_r0000gn/T/06928595-f769-4c97-80c9-ad7de1a5ee49/styles.js
  var init_styles = __esm({
    "../../../../private/var/folders/1h/b1mxv5wx1zgg_18sqhncjm_r0000gn/T/06928595-f769-4c97-80c9-ad7de1a5ee49/styles.js"() {
      if (document.getElementById("dbb7f0b538") === null) {
        const element = document.createElement("style");
        element.id = "dbb7f0b538";
        element.innerHTML = `@import url("https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");

body {
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

/* BUTTONS */

/* DEFAULT/DARK BUTTONS */
button,
.button,
.button__primary,
.button__primary--dark {
  display: inline-block;
  background: black; /* TODO: Replace with color token */
  color: white; /* TODO: Replace with color token */
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: all linear 0.1s;
  cursor: pointer;
  vertical-align: middle;
}

.button:hover,
.button__primary:hover,
.button__primary--dark:hover {
  background: #222222; /* TODO: Replace with color token */
}

.button__secondary,
.button__secondary--dark {
  background: rgba(255, 255, 255, 0);
  border-color: black; /* TODO: Replace with color token */
  border-style: solid;
  border-width: 1px;
  color: black; /* TODO: Replace with color token */
}

.button__secondary:hover,
.button__secondary--dark:hover {
  background: rgba(255, 255, 255, 0.2);
  /* color: skyblue; TODO: Replace with color token */
}

.button__color,
.button__color--dark {
  background: rgb(12, 142, 241); /* TODO: Replace with color token */
  color: white; /* TODO: Replace with color token */
}

.button__color:hover,
.button__color--dark:hover {
  background: lightblue; /* TODO: Replace with color token */
}

.button__text,
.button__text--dark {
  background: none;
  color: black; /* TODO: Replace with color token */
  text-decoration: underline;
}

.button__text:hover,
.button__text--dark:hover {
  background: rgba(255, 255, 255, 0.2); /* TODO: Replace with color token */
}

.button-icon {
  vertical-align: middle;
  margin-left: 0.375rem;
  color: white;
}

button .button-icon,
.button .button-icon,
.button__primary .button-icon,
.button__primary--dark .button-icon {
  color: white; /* TODO: Replace with color token */
}

.button__secondary--dark .button-icon {
  color: black; /* TODO: Replace with color token */
}

.button__text--dark .button-icon {
  color: black; /* TODO: Replace with color token */
}

.button__color .button-icon {
  color: white; /* TODO: Replace with color token */
}

/* LIGHT BUTTONS */
.button__primary--light {
  background: white; /* TODO: Replace with color token */
  color: black; /* TODO: Replace with color token */
}

.button__primary--light .button-icon {
  color: black; /* TODO: Replace with color token */
}

.button__secondary--light {
  background: rgba(0, 0, 0, 0);
  border-color: white; /* TODO: Replace with color token */
  border-style: solid;
  border-width: 1px;
  color: white; /* TODO: Replace with color token */
}

.button__text--light {
  color: white; /* TODO: Replace with color token */
}

.icon {
  display: inline-block;
}
`;
        document.head.append(element);
      }
    }
  });

  // src/components/Icon.tsx
  var Icon, Icon_default;
  var init_Icon = __esm({
    "src/components/Icon.tsx"() {
      "use strict";
      init_preact_module();
      Icon = ({
        className = "icon",
        type,
        iconColor = "currentcolor",
        style = {}
      }) => {
        switch (type) {
          case "right-arrow":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M2 6H10M10 6L7 3M10 6L7 9",
                  stroke: iconColor,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            );
          case "check":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.3536 2.64645C10.5488 2.84171 10.5488 3.15829 10.3536 3.35355L4.85355 8.85355C4.65829 9.04882 4.34171 9.04882 4.14645 8.85355L1.64645 6.35355C1.45118 6.15829 1.45118 5.84171 1.64645 5.64645C1.84171 5.45118 2.15829 5.45118 2.35355 5.64645L4.5 7.79289L9.64645 2.64645C9.84171 2.45118 10.1583 2.45118 10.3536 2.64645Z",
                  fill: iconColor
                }
              )
            );
          case "trash":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.58073 1H6.41927C6.68285 0.999991 6.91023 0.999984 7.09751 1.01529C7.29519 1.03144 7.4918 1.06709 7.68099 1.16349C7.96323 1.3073 8.1927 1.53677 8.33651 1.81902C8.43291 2.0082 8.46856 2.20481 8.48472 2.40249C8.49843 2.57038 8.49985 2.77048 8.49999 3H10.5C10.7761 3 11 3.22386 11 3.5C11 3.77614 10.7761 4 10.5 4H10V9.12066C10 9.52314 10 9.85532 9.9779 10.1259C9.95494 10.407 9.90566 10.6653 9.78201 10.908C9.59027 11.2843 9.2843 11.5903 8.90798 11.782C8.66531 11.9057 8.40696 11.9549 8.12591 11.9779C7.85532 12 7.52314 12 7.12066 12H4.87934C4.47686 12 4.14468 12 3.87409 11.9779C3.59304 11.9549 3.33469 11.9057 3.09202 11.782C2.7157 11.5903 2.40973 11.2843 2.21799 10.908C2.09434 10.6653 2.04506 10.407 2.0221 10.1259C1.99999 9.85532 1.99999 9.52314 2 9.12065L2 4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H3.50001C3.50015 2.77048 3.50157 2.57038 3.51528 2.40249C3.53144 2.20481 3.56709 2.0082 3.66349 1.81902C3.8073 1.53677 4.03677 1.3073 4.31901 1.16349C4.5082 1.06709 4.70481 1.03144 4.90249 1.01529C5.08977 0.999984 5.31715 0.999991 5.58073 1ZM3 4V9.1C3 9.52829 3.00039 9.81944 3.01878 10.0445C3.03669 10.2637 3.06915 10.3758 3.10899 10.454C3.20487 10.6422 3.35785 10.7951 3.54601 10.891C3.62421 10.9309 3.73631 10.9633 3.95552 10.9812C4.18056 10.9996 4.47171 11 4.9 11H7.1C7.52829 11 7.81944 10.9996 8.04448 10.9812C8.26369 10.9633 8.37579 10.9309 8.45399 10.891C8.64215 10.7951 8.79513 10.6422 8.89101 10.454C8.93085 10.3758 8.96331 10.2637 8.98122 10.0445C8.99961 9.81944 9 9.52829 9 9.1V4H3ZM7.49996 3H4.50004C4.50026 2.76745 4.50179 2.60849 4.51196 2.48392C4.52306 2.34809 4.5419 2.29773 4.5545 2.27301C4.60243 2.17892 4.67892 2.10243 4.773 2.0545C4.79773 2.0419 4.84809 2.02306 4.98392 2.01196C5.12559 2.00039 5.31172 2 5.6 2H6.4C6.68828 2 6.87441 2.00039 7.01608 2.01196C7.15191 2.02306 7.20227 2.0419 7.22699 2.0545C7.32108 2.10243 7.39757 2.17892 7.4455 2.27301C7.4581 2.29773 7.47694 2.34809 7.48804 2.48392C7.49821 2.60849 7.49974 2.76745 7.49996 3ZM5 5.75C5.27614 5.75 5.5 5.97386 5.5 6.25V8.75C5.5 9.02614 5.27614 9.25 5 9.25C4.72386 9.25 4.5 9.02614 4.5 8.75V6.25C4.5 5.97386 4.72386 5.75 5 5.75ZM7 5.75C7.27614 5.75 7.5 5.97386 7.5 6.25V8.75C7.5 9.02614 7.27614 9.25 7 9.25C6.72386 9.25 6.5 9.02614 6.5 8.75V6.25C6.5 5.97386 6.72386 5.75 7 5.75Z",
                  fill: iconColor
                }
              )
            );
          case "close":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.64645 2.64645C2.84171 2.45118 3.15829 2.45118 3.35355 2.64645L6 5.29289L8.64645 2.64645C8.84171 2.45118 9.15829 2.45118 9.35355 2.64645C9.54882 2.84171 9.54882 3.15829 9.35355 3.35355L6.70711 6L9.35355 8.64645C9.54882 8.84171 9.54882 9.15829 9.35355 9.35355C9.15829 9.54882 8.84171 9.54882 8.64645 9.35355L6 6.70711L3.35355 9.35355C3.15829 9.54882 2.84171 9.54882 2.64645 9.35355C2.45118 9.15829 2.45118 8.84171 2.64645 8.64645L5.29289 6L2.64645 3.35355C2.45118 3.15829 2.45118 2.84171 2.64645 2.64645Z",
                  fill: iconColor
                }
              )
            );
          case "pencil":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y("g", { clipPath: "url(#clip0_11_7825)" }, /* @__PURE__ */ y(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8.14646 1.14647C8.89401 0.398928 10.106 0.398929 10.8536 1.14648C11.6011 1.89402 11.6011 3.10604 10.8536 3.85358L9.35486 5.35229C9.35443 5.35272 9.354 5.35315 9.35357 5.35358C9.35314 5.35401 9.35271 5.35444 9.35228 5.35487L4.25042 10.4567C4.24204 10.4651 4.23373 10.4734 4.22549 10.4817C4.10305 10.6043 3.99503 10.7125 3.8667 10.7971C3.75387 10.8715 3.6315 10.9303 3.50292 10.972C3.35667 11.0193 3.20471 11.0361 3.03244 11.0551C3.02086 11.0564 3.00918 11.0576 2.9974 11.059L1.30522 11.247C1.15426 11.2637 1.00385 11.211 0.89645 11.1036C0.789046 10.9962 0.736288 10.8458 0.753061 10.6948L0.941082 9.00263C0.942391 8.99085 0.943679 8.97917 0.944958 8.96758C0.963959 8.79532 0.98072 8.64336 1.02807 8.49711C1.06969 8.36853 1.1285 8.24616 1.20291 8.13333C1.28754 8.005 1.39572 7.89699 1.51836 7.77454C1.52662 7.7663 1.53493 7.75799 1.54331 7.74961L8.14646 1.14647ZM7.00001 3.70713L2.25042 8.45672C2.08917 8.61797 2.05923 8.65124 2.03774 8.68384C2.01293 8.72145 1.99333 8.76224 1.97945 8.8051C1.96743 8.84225 1.96015 8.88641 1.93497 9.11306L1.81596 10.1841L2.88697 10.0651C3.11362 10.0399 3.15778 10.0326 3.19493 10.0206C3.23779 10.0067 3.27858 9.9871 3.31619 9.9623C3.34879 9.9408 3.38206 9.91087 3.54331 9.74961L8.29291 5.00003L7.00001 3.70713ZM9.00001 4.29292L7.70712 3.00003L8.85357 1.85358C9.21059 1.49656 9.78944 1.49656 10.1465 1.85358C10.5035 2.21061 10.5035 2.78945 10.1465 3.14648L9.00001 4.29292Z",
                  fill: iconColor
                }
              )),
              /* @__PURE__ */ y("defs", null, /* @__PURE__ */ y("clipPath", { id: "clip0_11_7825" }, /* @__PURE__ */ y("rect", { width: "12", height: "12", fill: iconColor })))
            );
          case "component":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y("g", { clipPath: "url(#clip0_15_1896)" }, /* @__PURE__ */ y(
                "path",
                {
                  d: "M5.99999 0.34314L8.12131 2.46446L5.99999 4.58578L3.87867 2.46446L5.99999 0.34314Z",
                  fill: iconColor
                }
              ), /* @__PURE__ */ y(
                "path",
                {
                  d: "M2.46446 3.87867L4.58578 5.99999L2.46446 8.12131L0.34314 5.99999L2.46446 3.87867Z",
                  fill: iconColor
                }
              ), /* @__PURE__ */ y(
                "path",
                {
                  d: "M9.53553 3.87867L11.6568 5.99999L9.53553 8.12131L7.41421 5.99999L9.53553 3.87867Z",
                  fill: iconColor
                }
              ), /* @__PURE__ */ y(
                "path",
                {
                  d: "M5.99999 7.41421L8.12131 9.53553L5.99999 11.6568L3.87867 9.53553L5.99999 7.41421Z",
                  fill: iconColor
                }
              )),
              /* @__PURE__ */ y("defs", null, /* @__PURE__ */ y("clipPath", { id: "clip0_15_1896" }, /* @__PURE__ */ y("rect", { width: "12", height: "12", fill: "none" })))
            );
          case "code":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.10847 1.01189C7.37803 1.0718 7.548 1.33888 7.48809 1.60845L5.48809 10.6084C5.42819 10.878 5.1611 11.048 4.89153 10.9881C4.62197 10.9282 4.452 10.6611 4.51191 10.3915L6.51191 1.39152C6.57181 1.12195 6.8389 0.951988 7.10847 1.01189ZM3.85355 3.14643C4.04882 3.34169 4.04882 3.65828 3.85355 3.85354L1.70711 5.99999L3.85355 8.14643C4.04882 8.34169 4.04882 8.65828 3.85355 8.85354C3.65829 9.0488 3.34171 9.0488 3.14645 8.85354L0.646447 6.35354C0.451184 6.15828 0.451184 5.84169 0.646447 5.64643L3.14645 3.14643C3.34171 2.95117 3.65829 2.95117 3.85355 3.14643ZM8.14645 3.14643C8.34171 2.95117 8.65829 2.95117 8.85355 3.14643L11.3536 5.64643C11.5488 5.84169 11.5488 6.15828 11.3536 6.35354L8.85355 8.85354C8.65829 9.0488 8.34171 9.0488 8.14645 8.85354C7.95118 8.65828 7.95118 8.34169 8.14645 8.14643L10.2929 5.99999L8.14645 3.85354C7.95118 3.65828 7.95118 3.34169 8.14645 3.14643Z",
                  fill: iconColor
                }
              )
            );
          case "variable":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.79849 0.592462C5.9314 0.565127 6.06848 0.565127 6.20139 0.592462C6.35503 0.62406 6.49235 0.700974 6.60152 0.762121C6.61169 0.767815 6.62161 0.773372 6.63128 0.778744L10.3313 2.8343C10.3415 2.83998 10.352 2.84579 10.3628 2.85174C10.4784 2.91539 10.6237 2.99542 10.7353 3.11651C10.8318 3.2212 10.9048 3.34528 10.9495 3.48046C11.0011 3.63681 11.0005 3.8027 11 3.93464C11 3.94697 10.9999 3.959 10.9999 3.9707V8.02926C10.9999 8.04096 11 8.053 11 8.06533C11.0005 8.19726 11.0011 8.36315 10.9495 8.5195C10.9048 8.65468 10.8318 8.77876 10.7353 8.88345C10.6237 9.00454 10.4784 9.08457 10.3628 9.14822C10.352 9.15417 10.3415 9.15998 10.3313 9.16566L6.63128 11.2212C6.62161 11.2266 6.61169 11.2321 6.60152 11.2378C6.49235 11.299 6.35503 11.3759 6.20139 11.4075C6.06848 11.4348 5.9314 11.4348 5.79849 11.4075C5.64485 11.3759 5.50753 11.299 5.39836 11.2378C5.3882 11.2321 5.37827 11.2266 5.3686 11.2212L1.6686 9.16566C1.65838 9.15998 1.64784 9.15418 1.63704 9.14823C1.52147 9.08457 1.37616 9.00454 1.26457 8.88345C1.1681 8.77876 1.09509 8.65468 1.05043 8.5195C0.998766 8.36315 0.999371 8.19726 0.999851 8.06532C0.999896 8.05299 0.99994 8.04096 0.99994 8.02926V3.9707C0.99994 3.959 0.999896 3.94697 0.999851 3.93464C0.999371 3.8027 0.998766 3.63681 1.05043 3.48046C1.09509 3.34529 1.1681 3.2212 1.26457 3.11651C1.37616 2.99542 1.52147 2.91539 1.63703 2.85174C1.64783 2.84579 1.65838 2.83998 1.6686 2.8343L5.3686 0.778744C5.37827 0.773372 5.3882 0.767814 5.39836 0.76212C5.50753 0.700973 5.64485 0.62406 5.79849 0.592462ZM5.99994 1.57448C5.99918 1.57484 5.99838 1.57522 5.99755 1.57562C5.9687 1.58954 5.93002 1.61081 5.85425 1.6529L2.15425 3.70846C2.07427 3.75289 2.03344 3.77581 2.00479 3.79406C2.00395 3.7946 2.00314 3.79512 2.00237 3.79561C2.00231 3.79653 2.00225 3.79748 2.00219 3.79848C2.00015 3.83239 1.99994 3.87921 1.99994 3.9707V8.02926C1.99994 8.12075 2.00015 8.16757 2.00219 8.20148C2.00225 8.20248 2.00231 8.20343 2.00237 8.20435C2.00314 8.20484 2.00395 8.20536 2.00479 8.2059C2.03344 8.22415 2.07427 8.24707 2.15425 8.29151L5.85425 10.3471C5.93002 10.3892 5.9687 10.4104 5.99755 10.4243C5.99838 10.4247 5.99918 10.4251 5.99994 10.4255C6.0007 10.4251 6.0015 10.4247 6.00233 10.4243C6.03118 10.4104 6.06986 10.3892 6.14563 10.3471L9.84563 8.29151C9.92561 8.24707 9.96644 8.22415 9.99509 8.2059C9.99593 8.20536 9.99674 8.20485 9.99751 8.20435C9.99757 8.20344 9.99763 8.20248 9.99769 8.20148C9.99973 8.16757 9.99994 8.12075 9.99994 8.02926V3.9707C9.99994 3.87921 9.99973 3.83239 9.99769 3.79848C9.99763 3.79748 9.99757 3.79653 9.99751 3.79561C9.99674 3.79512 9.99593 3.7946 9.99509 3.79406C9.96644 3.77581 9.92561 3.75289 9.84563 3.70846L6.14563 1.6529C6.06986 1.61081 6.03118 1.58954 6.00233 1.57562C6.0015 1.57522 6.0007 1.57484 5.99994 1.57448Z",
                  fill: iconColor
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M4.99994 5.99998C4.99994 5.4477 5.44766 4.99998 5.99994 4.99998C6.55223 4.99998 6.99994 5.4477 6.99994 5.99998C6.99994 6.55227 6.55223 6.99998 5.99994 6.99998C5.44766 6.99998 4.99994 6.55227 4.99994 5.99998Z",
                  fill: iconColor
                }
              )
            );
          case "settings":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9 3C8.44772 3 8 3.44772 8 4C8 4.55228 8.44772 5 9 5C9.55228 5 10 4.55228 10 4C10 3.44772 9.55228 3 9 3ZM7.06301 3.5C7.28503 2.63739 8.06808 2 9 2C10.1046 2 11 2.89543 11 4C11 5.10457 10.1046 6 9 6C8.06808 6 7.28503 5.36261 7.06301 4.5L1.5 4.5C1.22386 4.5 1 4.27614 1 4C1 3.72386 1.22386 3.5 1.5 3.5L7.06301 3.5ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7ZM1 8C1 6.89543 1.89543 6 3 6C3.93192 6 4.71497 6.63739 4.93699 7.5L10.5 7.5C10.7761 7.5 11 7.72386 11 8C11 8.27614 10.7761 8.5 10.5 8.5L4.93699 8.5C4.71497 9.36261 3.93192 10 3 10C1.89543 10 1 9.10457 1 8Z",
                  fill: iconColor
                }
              )
            );
          case "help":
            return /* @__PURE__ */ y(
              "svg",
              {
                className: `icon ${className}`,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              /* @__PURE__ */ y(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6ZM6.12906 4.01216C5.8963 3.97223 5.65692 4.01597 5.45332 4.13563C5.24972 4.25529 5.09504 4.44314 5.01667 4.66592C4.92503 4.92642 4.63957 5.0633 4.37908 4.97167C4.11858 4.88003 3.9817 4.59457 4.07333 4.33408C4.23007 3.88852 4.53943 3.51282 4.94664 3.2735C5.35384 3.03418 5.8326 2.9467 6.29812 3.02655C6.76364 3.1064 7.18588 3.34843 7.49005 3.70976C7.79416 4.07103 7.96064 4.52824 7.96 5.00046C7.95985 5.48423 7.72903 5.86605 7.47102 6.1392C7.19315 6.43338 6.84912 6.64037 6.5936 6.76992C6.46261 6.83634 6.34721 6.88622 6.26354 6.91987C6.22156 6.93676 6.18719 6.94971 6.16237 6.95876L6.13245 6.96944L6.12325 6.97261L6.12016 6.97365L6.11901 6.97404L6.11853 6.9742L6.11831 6.97428C6.11821 6.97431 6.11811 6.97434 5.96 6.5L6.11811 6.97434C5.85614 7.06167 5.57298 6.92009 5.48566 6.65811C5.3984 6.39635 5.53969 6.11343 5.80127 6.02587C5.80141 6.02582 5.80156 6.02577 5.8017 6.02572L5.80154 6.02577L5.80358 6.02506L5.81987 6.01924C5.8353 6.01362 5.8594 6.00457 5.89036 5.99211C5.95258 5.96709 6.04092 5.92895 6.14138 5.87801C6.34879 5.77285 6.57853 5.62777 6.74405 5.45253C6.89349 5.29432 6.96 5.14572 6.96 5L6.96 4.99926C6.96035 4.7631 6.87711 4.53443 6.72503 4.35376C6.57294 4.1731 6.36182 4.05208 6.12906 4.01216ZM7.96 5.00046C7.96 5.00055 7.96 5.00065 7.96 5.00074L7.46 5H7.96C7.96 5.00015 7.96 5.0003 7.96 5.00046ZM5.5 8.5C5.5 8.22386 5.72386 8 6 8H6.005C6.28114 8 6.505 8.22386 6.505 8.5C6.505 8.77614 6.28114 9 6.005 9H6C5.72386 9 5.5 8.77614 5.5 8.5Z",
                  fill: iconColor
                }
              )
            );
          default:
            return null;
        }
      };
      Icon_default = Icon;
    }
  });

  // src/components/Button.tsx
  var iconTypes, buttonTypes, Button, Button_default;
  var init_Button = __esm({
    "src/components/Button.tsx"() {
      "use strict";
      init_preact_module();
      init_Icon();
      iconTypes = {
        pencil: "pencil"
      };
      buttonTypes = {
        primary: "primary",
        secondary: "secondary",
        text: "text",
        color: "color"
      };
      Button = ({
        text = "Click Me",
        lightDark = "dark",
        iconType = iconTypes.pencil,
        buttonType = buttonTypes.primary,
        onClick
      }) => {
        return /* @__PURE__ */ y(
          "button",
          {
            className: `button button__${buttonType}--${lightDark}`,
            onClick
          },
          text,
          iconType && /* @__PURE__ */ y(Icon_default, { type: iconType, className: "button-icon" })
        );
      };
      Button_default = Button;
    }
  });

  // src/components/Header.tsx
  var headerStyles, titleBlockStyles, actionBlockStyles, fileNameStyles, fileNameLabelStyles, Header, Header_default;
  var init_Header = __esm({
    "src/components/Header.tsx"() {
      "use strict";
      init_preact_module();
      init_Button();
      headerStyles = {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "row",
        padding: "0 1rem"
      };
      titleBlockStyles = {
        flex: 1,
        alignSelf: "center",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        gap: ".25rem"
      };
      actionBlockStyles = {
        alignSelf: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: ".5rem"
      };
      fileNameStyles = {
        fontSize: "1.25rem",
        fontWeight: "700"
      };
      fileNameLabelStyles = {
        fontSize: ".75rem",
        color: "#999999",
        padding: "0 .5rem"
      };
      Header = ({ fileName, palettes, resetData, updateConfig }) => {
        return /* @__PURE__ */ y("div", { className: "header", style: headerStyles }, /* @__PURE__ */ y("div", { className: "header__title-block", style: titleBlockStyles }, /* @__PURE__ */ y("div", null, /* @__PURE__ */ y("span", { style: fileNameStyles }, fileName), /* @__PURE__ */ y("span", { style: fileNameLabelStyles }, /* @__PURE__ */ y("em", null, "(Current file)"))), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y("h3", null, /* @__PURE__ */ y("b", null, palettes.length), " color palettes in this file"))), /* @__PURE__ */ y("div", { className: "header__action-block", style: actionBlockStyles }, /* @__PURE__ */ y(
          Button_default,
          {
            buttonType: "text",
            iconType: "help",
            onClick: null,
            text: "How does this work"
          }
        ), /* @__PURE__ */ y(
          Button_default,
          {
            buttonType: "secondary",
            iconType: "settings",
            onClick: null,
            text: "Settings"
          }
        ), /* @__PURE__ */ y(
          Button_default,
          {
            buttonType: "primary",
            onClick: resetData,
            text: "Emergency Reset"
          }
        )));
      };
      Header_default = Header;
    }
  });

  // node_modules/lodash/lodash.js
  var require_lodash = __commonJS({
    "node_modules/lodash/lodash.js"(exports, module) {
      (function() {
        var undefined2;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          // Latin-1 Supplement block.
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          // Latin Extended-A block.
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e3) {
          }
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined2 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined2 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined2) {
              result = result === undefined2 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes(n2, iteratee) {
          var index = -1, result = Array(n2);
          while (++index < n2) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined2 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
          }
          return result;
        }
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function setToArray(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext2(context) {
          context = context == null ? root : _6.defaults(root.Object(), context, _6.pick(root, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2(
            "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
          );
          var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
          var defineProperty = function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e3) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap && new WeakMap();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
          var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
          function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = /* @__PURE__ */ function() {
            function object() {
            }
            return function(proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined2;
              return result2;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined2;
          }
          lodash.templateSettings = {
            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "escape": reEscape,
            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "evaluate": reEvaluate,
            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "interpolate": reInterpolate,
            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type {string}
             */
            "variable": "",
            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type {Object}
             */
            "imports": {
              /**
               * A reference to the `lodash` function.
               *
               * @memberOf _.templateSettings.imports
               * @type {Function}
               */
              "_": lodash
            }
          };
          lodash.prototype = baseLodash.prototype;
          lodash.prototype.constructor = lodash;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed;
                  } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED ? undefined2 : result2;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined2;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined2 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash(),
              "map": new (Map2 || ListCache)(),
              "string": new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result2 = getMapData(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values2) {
            var index = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values2[index]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
              (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
              isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
              isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
              isIndex(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined2;
          }
          function arraySampleSize(array, n2) {
            return shuffleSelf(copyArray(array), baseClamp(n2, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index < length) {
              result2[index] = skip ? undefined2 : get(object, paths[index]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined2) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined2) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined2) {
              return result2;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined2 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined2 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout2(function() {
              func.apply(undefined2, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE) {
              includes2 = cacheHas;
              isCommon = false;
              values2 = new SetCache(values2);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index, collection2) {
              result2 = !!predicate(value, index, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee2(value);
              if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined2 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined2;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined2 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result2.length < maxLength) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent2(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined2 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined2 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
                if (newValue === undefined2) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
            var isCommon = newValue === undefined2;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n2) {
            var length = array.length;
            if (!length) {
              return;
            }
            n2 += n2 < 0 ? length : 0;
            return isIndex(n2, length) ? array[n2] : undefined2;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result2 = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary(iteratee2));
            }
            while (++index < length) {
              var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                if (isIndex(index)) {
                  splice.call(array, index, 1);
                } else {
                  baseUnset(array, index);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index] = start;
              start += step;
            }
            return result2;
          }
          function baseRepeat(string, n2) {
            var result2 = "";
            if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER) {
              return result2;
            }
            do {
              if (n2 % 2) {
                result2 += string;
              }
              n2 = nativeFloor(n2 / 2);
              if (n2) {
                string += string;
              }
            } while (n2);
            return result2;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n2) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n2, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined2;
                if (newValue === undefined2) {
                  newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result2 = Array2(length);
            while (++index < length) {
              result2[index] = array[index + start];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index, collection2) {
              result2 = predicate(value, index, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              if (!index || !eq(computed, seen)) {
                var seen = computed;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray(set2);
              }
              isCommon = false;
              includes2 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent2(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result2 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index < length) {
              var value = index < valsLength ? values2[index] : undefined2;
              assignFunc(result2, props[index], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined2 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout2 = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result2 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result2) {
                if (index >= ordersLength) {
                  return result2;
                }
                var order = orders[index];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
              if (newValue === undefined2) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined2 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee2(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  undefined2,
                  args,
                  holders,
                  undefined2,
                  undefined2,
                  arity - length
                );
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result2 = funcs[index2].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  thisArg,
                  args,
                  newHolders,
                  argPos,
                  ary2,
                  arity - length
                );
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined2 && other === undefined2) {
                return defaultValue;
              }
              if (value !== undefined2) {
                result2 = value;
              }
              if (other !== undefined2) {
                if (result2 === undefined2) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined2 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined2;
              }
              start = toFinite(start);
              if (end === undefined2) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined2, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set(values2);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) {
                return mapToArray(object);
              }
              if (tag == setTag) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined2;
            }
            ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined2 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined2;
            }
            var data = isBindKey ? undefined2 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined2, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined2 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined2) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined2, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData(map2, key) {
            var data = map2.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined2;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined2;
              var unmasked = true;
            } catch (e3) {
            }
            var result2 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result2;
          }
          var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result2 = [];
            while (object) {
              arrayPush(result2, getSymbols(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag = baseGetTag;
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
            getTag = function(value) {
              var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result2;
            };
          }
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start + size2);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size2);
                  break;
              }
            }
            return { "start": start, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result2 = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
              return eq(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform2) {
            start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array2(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent2(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout2 = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined2, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined2 ? length : size2;
            while (++index < size2) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e3) {
              }
              try {
                return func + "";
              } catch (e3) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index < length) {
              result2[resIndex++] = baseSlice(array, index, index += size2);
            }
            return result2;
          }
          function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
          });
          function drop(array, n2, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n2 = guard || n2 === undefined2 ? 1 : toInteger(n2);
            return baseSlice(array, n2 < 0 ? 0 : n2, length);
          }
          function dropRight(array, n2, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n2 = guard || n2 === undefined2 ? 1 : toInteger(n2);
            n2 = length - n2;
            return baseSlice(array, 0, n2 < 0 ? 0 : n2);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index < length) {
              var pair = pairs[index];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined2;
          }
          function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
          }
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined2;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined2;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n2) {
            return array && array.length ? baseNth(array, toInteger(n2)) : undefined2;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result2;
          });
          function remove(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result2.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger(start);
              end = end === undefined2 ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
          function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n2, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n2 = guard || n2 === undefined2 ? 1 : toInteger(n2);
            return baseSlice(array, 0, n2 < 0 ? 0 : n2);
          }
          function takeRight(array, n2, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n2 = guard || n2 === undefined2 ? 1 : toInteger(n2);
            n2 = length - n2;
            return baseSlice(array, n2 < 0 ? 0 : n2, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return array && array.length ? baseUniq(array, undefined2, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined2, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined2
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined2);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined2) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent3 = this;
            while (parent3 instanceof baseLodash) {
              var clone2 = wrapperClone(parent3);
              clone2.__index__ = 0;
              clone2.__values__ = undefined2;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent3 = parent3.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined2
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined2 : orders;
            if (!isArray(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n2, guard) {
            if (guard ? isIterateeCall(collection, n2, guard) : n2 === undefined2) {
              n2 = 1;
            } else {
              n2 = toInteger(n2);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n2);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike(collection)) {
              return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
            return baseKeys(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n2, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n2 = toInteger(n2);
            return function() {
              if (--n2 < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n2, guard) {
            n2 = guard ? undefined2 : n2;
            n2 = func && n2 == null ? func.length : n2;
            return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n2);
          }
          function before(n2, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n2 = toInteger(n2);
            return function() {
              if (--n2 > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n2 <= 1) {
                func = undefined2;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined2;
              lastInvokeTime = time;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout2(timerExpired, wait);
              return leading ? invokeFunc(time) : result2;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout2(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined2;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined2;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined2) {
                clearTimeout2(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined2;
            }
            function flush() {
              return timerId === undefined2 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined2) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout2(timerId);
                  timerId = setTimeout2(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined2) {
                timerId = setTimeout2(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
          });
          function rest(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start === undefined2 ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(/* @__PURE__ */ function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
              return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
            if (isPrototype(value)) {
              return !baseKeys(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            var result2 = customizer ? customizer(value, other) : undefined2;
            return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN2(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined2;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike(value)) {
              return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
              copyObject(source, keys(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined2, customDefaultsMerge);
            return apply(mergeWith, undefined2, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined2 : baseGet(object, path);
            return result2 === undefined2 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined2;
            }
            while (++index < length) {
              var value = object == null ? undefined2 : object[toKey(path[index])];
              if (value === undefined2) {
                index = length;
                value = defaultValue;
              }
              object = isFunction(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject(object)) {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee2(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined2) {
              upper = lower;
              lower = undefined2;
            }
            if (upper !== undefined2) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined2) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined2;
            }
            if (floating === undefined2) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined2;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined2;
              }
            }
            if (lower === undefined2 && upper === undefined2) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined2) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index) {
            word = word.toLowerCase();
            return result2 + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n2, guard) {
            if (guard ? isIterateeCall(string, n2, guard) : n2 === undefined2) {
              n2 = 1;
            } else {
              n2 = toInteger(n2);
            }
            return baseRepeat(toString(string), n2);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined2;
            }
            limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined2;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2(
              (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
              "g"
            );
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined2) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result2.lastIndexOf(separator);
              if (index > -1) {
                result2 = result2.slice(0, index);
              }
            }
            return result2 + omission;
          }
          function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined2 : pattern;
            if (pattern === undefined2) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined2, args);
            } catch (e3) {
              return isError(e3) ? e3 : new Error2(e3);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs[index];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n2) {
            n2 = toInteger(n2);
            return baseRest(function(args) {
              return baseNth(args, n2);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined2 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n2, iteratee2) {
            n2 = toInteger(n2);
            if (n2 < 1 || n2 > MAX_SAFE_INTEGER) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n2, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n2 -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes(length, iteratee2);
            while (++index < n2) {
              iteratee2(index);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash.after = after;
          lodash.ary = ary;
          lodash.assign = assign;
          lodash.assignIn = assignIn;
          lodash.assignInWith = assignInWith;
          lodash.assignWith = assignWith;
          lodash.at = at;
          lodash.before = before;
          lodash.bind = bind;
          lodash.bindAll = bindAll;
          lodash.bindKey = bindKey;
          lodash.castArray = castArray;
          lodash.chain = chain;
          lodash.chunk = chunk;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.cond = cond;
          lodash.conforms = conforms;
          lodash.constant = constant;
          lodash.countBy = countBy;
          lodash.create = create;
          lodash.curry = curry;
          lodash.curryRight = curryRight;
          lodash.debounce = debounce;
          lodash.defaults = defaults;
          lodash.defaultsDeep = defaultsDeep;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.difference = difference;
          lodash.differenceBy = differenceBy;
          lodash.differenceWith = differenceWith;
          lodash.drop = drop;
          lodash.dropRight = dropRight;
          lodash.dropRightWhile = dropRightWhile;
          lodash.dropWhile = dropWhile;
          lodash.fill = fill;
          lodash.filter = filter;
          lodash.flatMap = flatMap;
          lodash.flatMapDeep = flatMapDeep;
          lodash.flatMapDepth = flatMapDepth;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.flattenDepth = flattenDepth;
          lodash.flip = flip;
          lodash.flow = flow;
          lodash.flowRight = flowRight;
          lodash.fromPairs = fromPairs;
          lodash.functions = functions;
          lodash.functionsIn = functionsIn;
          lodash.groupBy = groupBy;
          lodash.initial = initial;
          lodash.intersection = intersection;
          lodash.intersectionBy = intersectionBy;
          lodash.intersectionWith = intersectionWith;
          lodash.invert = invert;
          lodash.invertBy = invertBy;
          lodash.invokeMap = invokeMap;
          lodash.iteratee = iteratee;
          lodash.keyBy = keyBy;
          lodash.keys = keys;
          lodash.keysIn = keysIn;
          lodash.map = map;
          lodash.mapKeys = mapKeys;
          lodash.mapValues = mapValues;
          lodash.matches = matches;
          lodash.matchesProperty = matchesProperty;
          lodash.memoize = memoize;
          lodash.merge = merge;
          lodash.mergeWith = mergeWith;
          lodash.method = method;
          lodash.methodOf = methodOf;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.nthArg = nthArg;
          lodash.omit = omit;
          lodash.omitBy = omitBy;
          lodash.once = once;
          lodash.orderBy = orderBy;
          lodash.over = over;
          lodash.overArgs = overArgs;
          lodash.overEvery = overEvery;
          lodash.overSome = overSome;
          lodash.partial = partial;
          lodash.partialRight = partialRight;
          lodash.partition = partition;
          lodash.pick = pick;
          lodash.pickBy = pickBy;
          lodash.property = property;
          lodash.propertyOf = propertyOf;
          lodash.pull = pull;
          lodash.pullAll = pullAll;
          lodash.pullAllBy = pullAllBy;
          lodash.pullAllWith = pullAllWith;
          lodash.pullAt = pullAt;
          lodash.range = range;
          lodash.rangeRight = rangeRight;
          lodash.rearg = rearg;
          lodash.reject = reject;
          lodash.remove = remove;
          lodash.rest = rest;
          lodash.reverse = reverse;
          lodash.sampleSize = sampleSize;
          lodash.set = set;
          lodash.setWith = setWith;
          lodash.shuffle = shuffle;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.sortedUniq = sortedUniq;
          lodash.sortedUniqBy = sortedUniqBy;
          lodash.split = split;
          lodash.spread = spread;
          lodash.tail = tail;
          lodash.take = take;
          lodash.takeRight = takeRight;
          lodash.takeRightWhile = takeRightWhile;
          lodash.takeWhile = takeWhile;
          lodash.tap = tap;
          lodash.throttle = throttle;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.toPairs = toPairs;
          lodash.toPairsIn = toPairsIn;
          lodash.toPath = toPath;
          lodash.toPlainObject = toPlainObject;
          lodash.transform = transform;
          lodash.unary = unary;
          lodash.union = union;
          lodash.unionBy = unionBy;
          lodash.unionWith = unionWith;
          lodash.uniq = uniq;
          lodash.uniqBy = uniqBy;
          lodash.uniqWith = uniqWith;
          lodash.unset = unset;
          lodash.unzip = unzip;
          lodash.unzipWith = unzipWith;
          lodash.update = update;
          lodash.updateWith = updateWith;
          lodash.values = values;
          lodash.valuesIn = valuesIn;
          lodash.without = without;
          lodash.words = words;
          lodash.wrap = wrap;
          lodash.xor = xor;
          lodash.xorBy = xorBy;
          lodash.xorWith = xorWith;
          lodash.zip = zip;
          lodash.zipObject = zipObject;
          lodash.zipObjectDeep = zipObjectDeep;
          lodash.zipWith = zipWith;
          lodash.entries = toPairs;
          lodash.entriesIn = toPairsIn;
          lodash.extend = assignIn;
          lodash.extendWith = assignInWith;
          mixin(lodash, lodash);
          lodash.add = add;
          lodash.attempt = attempt;
          lodash.camelCase = camelCase;
          lodash.capitalize = capitalize;
          lodash.ceil = ceil;
          lodash.clamp = clamp;
          lodash.clone = clone;
          lodash.cloneDeep = cloneDeep;
          lodash.cloneDeepWith = cloneDeepWith;
          lodash.cloneWith = cloneWith;
          lodash.conformsTo = conformsTo;
          lodash.deburr = deburr;
          lodash.defaultTo = defaultTo;
          lodash.divide = divide;
          lodash.endsWith = endsWith;
          lodash.eq = eq;
          lodash.escape = escape;
          lodash.escapeRegExp = escapeRegExp;
          lodash.every = every;
          lodash.find = find;
          lodash.findIndex = findIndex;
          lodash.findKey = findKey;
          lodash.findLast = findLast;
          lodash.findLastIndex = findLastIndex;
          lodash.findLastKey = findLastKey;
          lodash.floor = floor;
          lodash.forEach = forEach;
          lodash.forEachRight = forEachRight;
          lodash.forIn = forIn;
          lodash.forInRight = forInRight;
          lodash.forOwn = forOwn;
          lodash.forOwnRight = forOwnRight;
          lodash.get = get;
          lodash.gt = gt;
          lodash.gte = gte;
          lodash.has = has;
          lodash.hasIn = hasIn;
          lodash.head = head;
          lodash.identity = identity;
          lodash.includes = includes;
          lodash.indexOf = indexOf;
          lodash.inRange = inRange;
          lodash.invoke = invoke;
          lodash.isArguments = isArguments;
          lodash.isArray = isArray;
          lodash.isArrayBuffer = isArrayBuffer;
          lodash.isArrayLike = isArrayLike;
          lodash.isArrayLikeObject = isArrayLikeObject;
          lodash.isBoolean = isBoolean;
          lodash.isBuffer = isBuffer;
          lodash.isDate = isDate;
          lodash.isElement = isElement;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual;
          lodash.isEqualWith = isEqualWith;
          lodash.isError = isError;
          lodash.isFinite = isFinite;
          lodash.isFunction = isFunction;
          lodash.isInteger = isInteger;
          lodash.isLength = isLength;
          lodash.isMap = isMap;
          lodash.isMatch = isMatch;
          lodash.isMatchWith = isMatchWith;
          lodash.isNaN = isNaN2;
          lodash.isNative = isNative;
          lodash.isNil = isNil;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject;
          lodash.isObjectLike = isObjectLike;
          lodash.isPlainObject = isPlainObject;
          lodash.isRegExp = isRegExp;
          lodash.isSafeInteger = isSafeInteger;
          lodash.isSet = isSet;
          lodash.isString = isString;
          lodash.isSymbol = isSymbol;
          lodash.isTypedArray = isTypedArray;
          lodash.isUndefined = isUndefined;
          lodash.isWeakMap = isWeakMap;
          lodash.isWeakSet = isWeakSet;
          lodash.join = join;
          lodash.kebabCase = kebabCase;
          lodash.last = last;
          lodash.lastIndexOf = lastIndexOf;
          lodash.lowerCase = lowerCase;
          lodash.lowerFirst = lowerFirst;
          lodash.lt = lt;
          lodash.lte = lte;
          lodash.max = max;
          lodash.maxBy = maxBy;
          lodash.mean = mean;
          lodash.meanBy = meanBy;
          lodash.min = min;
          lodash.minBy = minBy;
          lodash.stubArray = stubArray;
          lodash.stubFalse = stubFalse;
          lodash.stubObject = stubObject;
          lodash.stubString = stubString;
          lodash.stubTrue = stubTrue;
          lodash.multiply = multiply;
          lodash.nth = nth;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.now = now;
          lodash.pad = pad;
          lodash.padEnd = padEnd;
          lodash.padStart = padStart;
          lodash.parseInt = parseInt2;
          lodash.random = random;
          lodash.reduce = reduce;
          lodash.reduceRight = reduceRight;
          lodash.repeat = repeat;
          lodash.replace = replace;
          lodash.result = result;
          lodash.round = round;
          lodash.runInContext = runInContext2;
          lodash.sample = sample;
          lodash.size = size;
          lodash.snakeCase = snakeCase;
          lodash.some = some;
          lodash.sortedIndex = sortedIndex;
          lodash.sortedIndexBy = sortedIndexBy;
          lodash.sortedIndexOf = sortedIndexOf;
          lodash.sortedLastIndex = sortedLastIndex;
          lodash.sortedLastIndexBy = sortedLastIndexBy;
          lodash.sortedLastIndexOf = sortedLastIndexOf;
          lodash.startCase = startCase;
          lodash.startsWith = startsWith;
          lodash.subtract = subtract;
          lodash.sum = sum;
          lodash.sumBy = sumBy;
          lodash.template = template;
          lodash.times = times;
          lodash.toFinite = toFinite;
          lodash.toInteger = toInteger;
          lodash.toLength = toLength;
          lodash.toLower = toLower;
          lodash.toNumber = toNumber;
          lodash.toSafeInteger = toSafeInteger;
          lodash.toString = toString;
          lodash.toUpper = toUpper;
          lodash.trim = trim;
          lodash.trimEnd = trimEnd;
          lodash.trimStart = trimStart;
          lodash.truncate = truncate;
          lodash.unescape = unescape;
          lodash.uniqueId = uniqueId;
          lodash.upperCase = upperCase;
          lodash.upperFirst = upperFirst;
          lodash.each = forEach;
          lodash.eachRight = forEachRight;
          lodash.first = head;
          mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
              if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { "chain": false });
          lodash.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash[methodName].placeholder = lodash;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n2) {
              n2 = n2 === undefined2 ? 1 : nativeMax(toInteger(n2), 0);
              var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n2, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n2, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n2) {
              return this.reverse()[methodName](n2).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result2 = this;
            if (result2.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start < 0) {
              result2 = result2.takeRight(-start);
            } else if (start) {
              result2 = result2.drop(start);
            }
            if (end !== undefined2) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined2
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash.prototype.at = wrapperAt;
          lodash.prototype.chain = wrapperChain;
          lodash.prototype.commit = wrapperCommit;
          lodash.prototype.next = wrapperNext;
          lodash.prototype.plant = wrapperPlant;
          lodash.prototype.reverse = wrapperReverse;
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          lodash.prototype.first = lodash.prototype.head;
          if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
          }
          return lodash;
        };
        var _6 = runInContext();
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          root._ = _6;
          define(function() {
            return _6;
          });
        } else if (freeModule) {
          (freeModule.exports = _6)._ = _6;
          freeExports._ = _6;
        } else {
          root._ = _6;
        }
      }).call(exports);
    }
  });

  // node_modules/chroma-js/chroma.js
  var require_chroma = __commonJS({
    "node_modules/chroma-js/chroma.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.chroma = factory());
      })(exports, function() {
        "use strict";
        var limit$2 = function(x4, min2, max2) {
          if (min2 === void 0)
            min2 = 0;
          if (max2 === void 0)
            max2 = 1;
          return x4 < min2 ? min2 : x4 > max2 ? max2 : x4;
        };
        var limit$1 = limit$2;
        var clip_rgb$3 = function(rgb2) {
          rgb2._clipped = false;
          rgb2._unclipped = rgb2.slice(0);
          for (var i4 = 0; i4 <= 3; i4++) {
            if (i4 < 3) {
              if (rgb2[i4] < 0 || rgb2[i4] > 255) {
                rgb2._clipped = true;
              }
              rgb2[i4] = limit$1(rgb2[i4], 0, 255);
            } else if (i4 === 3) {
              rgb2[i4] = limit$1(rgb2[i4], 0, 1);
            }
          }
          return rgb2;
        };
        var classToType = {};
        for (var i$1 = 0, list$1 = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; i$1 < list$1.length; i$1 += 1) {
          var name = list$1[i$1];
          classToType["[object " + name + "]"] = name.toLowerCase();
        }
        var type$p = function(obj) {
          return classToType[Object.prototype.toString.call(obj)] || "object";
        };
        var type$o = type$p;
        var unpack$B = function(args, keyOrder) {
          if (keyOrder === void 0)
            keyOrder = null;
          if (args.length >= 3) {
            return Array.prototype.slice.call(args);
          }
          if (type$o(args[0]) == "object" && keyOrder) {
            return keyOrder.split("").filter(function(k3) {
              return args[0][k3] !== void 0;
            }).map(function(k3) {
              return args[0][k3];
            });
          }
          return args[0];
        };
        var type$n = type$p;
        var last$4 = function(args) {
          if (args.length < 2) {
            return null;
          }
          var l3 = args.length - 1;
          if (type$n(args[l3]) == "string") {
            return args[l3].toLowerCase();
          }
          return null;
        };
        var PI$2 = Math.PI;
        var utils = {
          clip_rgb: clip_rgb$3,
          limit: limit$2,
          type: type$p,
          unpack: unpack$B,
          last: last$4,
          PI: PI$2,
          TWOPI: PI$2 * 2,
          PITHIRD: PI$2 / 3,
          DEG2RAD: PI$2 / 180,
          RAD2DEG: 180 / PI$2
        };
        var input$h = {
          format: {},
          autodetect: []
        };
        var last$3 = utils.last;
        var clip_rgb$2 = utils.clip_rgb;
        var type$m = utils.type;
        var _input = input$h;
        var Color$D = function Color2() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var me = this;
          if (type$m(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
            return args[0];
          }
          var mode = last$3(args);
          var autodetect = false;
          if (!mode) {
            autodetect = true;
            if (!_input.sorted) {
              _input.autodetect = _input.autodetect.sort(function(a3, b2) {
                return b2.p - a3.p;
              });
              _input.sorted = true;
            }
            for (var i4 = 0, list2 = _input.autodetect; i4 < list2.length; i4 += 1) {
              var chk = list2[i4];
              mode = chk.test.apply(chk, args);
              if (mode) {
                break;
              }
            }
          }
          if (_input.format[mode]) {
            var rgb2 = _input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
            me._rgb = clip_rgb$2(rgb2);
          } else {
            throw new Error("unknown format: " + args);
          }
          if (me._rgb.length === 3) {
            me._rgb.push(1);
          }
        };
        Color$D.prototype.toString = function toString() {
          if (type$m(this.hex) == "function") {
            return this.hex();
          }
          return "[" + this._rgb.join(",") + "]";
        };
        var Color_1 = Color$D;
        var chroma$k = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(chroma$k.Color, [null].concat(args)))();
        };
        chroma$k.Color = Color_1;
        chroma$k.version = "2.4.2";
        var chroma_1 = chroma$k;
        var unpack$A = utils.unpack;
        var max$2 = Math.max;
        var rgb2cmyk$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$A(args, "rgb");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          r3 = r3 / 255;
          g4 = g4 / 255;
          b2 = b2 / 255;
          var k3 = 1 - max$2(r3, max$2(g4, b2));
          var f3 = k3 < 1 ? 1 / (1 - k3) : 0;
          var c3 = (1 - r3 - k3) * f3;
          var m3 = (1 - g4 - k3) * f3;
          var y3 = (1 - b2 - k3) * f3;
          return [c3, m3, y3, k3];
        };
        var rgb2cmyk_1 = rgb2cmyk$1;
        var unpack$z = utils.unpack;
        var cmyk2rgb = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$z(args, "cmyk");
          var c3 = args[0];
          var m3 = args[1];
          var y3 = args[2];
          var k3 = args[3];
          var alpha = args.length > 4 ? args[4] : 1;
          if (k3 === 1) {
            return [0, 0, 0, alpha];
          }
          return [
            c3 >= 1 ? 0 : 255 * (1 - c3) * (1 - k3),
            // r
            m3 >= 1 ? 0 : 255 * (1 - m3) * (1 - k3),
            // g
            y3 >= 1 ? 0 : 255 * (1 - y3) * (1 - k3),
            // b
            alpha
          ];
        };
        var cmyk2rgb_1 = cmyk2rgb;
        var chroma$j = chroma_1;
        var Color$C = Color_1;
        var input$g = input$h;
        var unpack$y = utils.unpack;
        var type$l = utils.type;
        var rgb2cmyk = rgb2cmyk_1;
        Color$C.prototype.cmyk = function() {
          return rgb2cmyk(this._rgb);
        };
        chroma$j.cmyk = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$C, [null].concat(args, ["cmyk"])))();
        };
        input$g.format.cmyk = cmyk2rgb_1;
        input$g.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$y(args, "cmyk");
            if (type$l(args) === "array" && args.length === 4) {
              return "cmyk";
            }
          }
        });
        var unpack$x = utils.unpack;
        var last$2 = utils.last;
        var rnd = function(a3) {
          return Math.round(a3 * 100) / 100;
        };
        var hsl2css$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var hsla = unpack$x(args, "hsla");
          var mode = last$2(args) || "lsa";
          hsla[0] = rnd(hsla[0] || 0);
          hsla[1] = rnd(hsla[1] * 100) + "%";
          hsla[2] = rnd(hsla[2] * 100) + "%";
          if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = "hsla";
          } else {
            hsla.length = 3;
          }
          return mode + "(" + hsla.join(",") + ")";
        };
        var hsl2css_1 = hsl2css$1;
        var unpack$w = utils.unpack;
        var rgb2hsl$3 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$w(args, "rgba");
          var r3 = args[0];
          var g4 = args[1];
          var b2 = args[2];
          r3 /= 255;
          g4 /= 255;
          b2 /= 255;
          var min2 = Math.min(r3, g4, b2);
          var max2 = Math.max(r3, g4, b2);
          var l3 = (max2 + min2) / 2;
          var s3, h3;
          if (max2 === min2) {
            s3 = 0;
            h3 = Number.NaN;
          } else {
            s3 = l3 < 0.5 ? (max2 - min2) / (max2 + min2) : (max2 - min2) / (2 - max2 - min2);
          }
          if (r3 == max2) {
            h3 = (g4 - b2) / (max2 - min2);
          } else if (g4 == max2) {
            h3 = 2 + (b2 - r3) / (max2 - min2);
          } else if (b2 == max2) {
            h3 = 4 + (r3 - g4) / (max2 - min2);
          }
          h3 *= 60;
          if (h3 < 0) {
            h3 += 360;
          }
          if (args.length > 3 && args[3] !== void 0) {
            return [h3, s3, l3, args[3]];
          }
          return [h3, s3, l3];
        };
        var rgb2hsl_1 = rgb2hsl$3;
        var unpack$v = utils.unpack;
        var last$1 = utils.last;
        var hsl2css = hsl2css_1;
        var rgb2hsl$2 = rgb2hsl_1;
        var round$6 = Math.round;
        var rgb2css$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var rgba = unpack$v(args, "rgba");
          var mode = last$1(args) || "rgb";
          if (mode.substr(0, 3) == "hsl") {
            return hsl2css(rgb2hsl$2(rgba), mode);
          }
          rgba[0] = round$6(rgba[0]);
          rgba[1] = round$6(rgba[1]);
          rgba[2] = round$6(rgba[2]);
          if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = "rgba";
          }
          return mode + "(" + rgba.slice(0, mode === "rgb" ? 3 : 4).join(",") + ")";
        };
        var rgb2css_1 = rgb2css$1;
        var unpack$u = utils.unpack;
        var round$5 = Math.round;
        var hsl2rgb$1 = function() {
          var assign;
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$u(args, "hsl");
          var h3 = args[0];
          var s3 = args[1];
          var l3 = args[2];
          var r3, g4, b2;
          if (s3 === 0) {
            r3 = g4 = b2 = l3 * 255;
          } else {
            var t3 = [0, 0, 0];
            var c3 = [0, 0, 0];
            var t22 = l3 < 0.5 ? l3 * (1 + s3) : l3 + s3 - l3 * s3;
            var t1 = 2 * l3 - t22;
            var h_ = h3 / 360;
            t3[0] = h_ + 1 / 3;
            t3[1] = h_;
            t3[2] = h_ - 1 / 3;
            for (var i4 = 0; i4 < 3; i4++) {
              if (t3[i4] < 0) {
                t3[i4] += 1;
              }
              if (t3[i4] > 1) {
                t3[i4] -= 1;
              }
              if (6 * t3[i4] < 1) {
                c3[i4] = t1 + (t22 - t1) * 6 * t3[i4];
              } else if (2 * t3[i4] < 1) {
                c3[i4] = t22;
              } else if (3 * t3[i4] < 2) {
                c3[i4] = t1 + (t22 - t1) * (2 / 3 - t3[i4]) * 6;
              } else {
                c3[i4] = t1;
              }
            }
            assign = [round$5(c3[0] * 255), round$5(c3[1] * 255), round$5(c3[2] * 255)], r3 = assign[0], g4 = assign[1], b2 = assign[2];
          }
          if (args.length > 3) {
            return [r3, g4, b2, args[3]];
          }
          return [r3, g4, b2, 1];
        };
        var hsl2rgb_1 = hsl2rgb$1;
        var hsl2rgb = hsl2rgb_1;
        var input$f = input$h;
        var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
        var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
        var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
        var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
        var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
        var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
        var round$4 = Math.round;
        var css2rgb$1 = function(css) {
          css = css.toLowerCase().trim();
          var m3;
          if (input$f.format.named) {
            try {
              return input$f.format.named(css);
            } catch (e3) {
            }
          }
          if (m3 = css.match(RE_RGB)) {
            var rgb2 = m3.slice(1, 4);
            for (var i4 = 0; i4 < 3; i4++) {
              rgb2[i4] = +rgb2[i4];
            }
            rgb2[3] = 1;
            return rgb2;
          }
          if (m3 = css.match(RE_RGBA)) {
            var rgb$1 = m3.slice(1, 5);
            for (var i$12 = 0; i$12 < 4; i$12++) {
              rgb$1[i$12] = +rgb$1[i$12];
            }
            return rgb$1;
          }
          if (m3 = css.match(RE_RGB_PCT)) {
            var rgb$2 = m3.slice(1, 4);
            for (var i$2 = 0; i$2 < 3; i$2++) {
              rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;
            return rgb$2;
          }
          if (m3 = css.match(RE_RGBA_PCT)) {
            var rgb$3 = m3.slice(1, 5);
            for (var i$3 = 0; i$3 < 3; i$3++) {
              rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
          }
          if (m3 = css.match(RE_HSL)) {
            var hsl2 = m3.slice(1, 4);
            hsl2[1] *= 0.01;
            hsl2[2] *= 0.01;
            var rgb$4 = hsl2rgb(hsl2);
            rgb$4[3] = 1;
            return rgb$4;
          }
          if (m3 = css.match(RE_HSLA)) {
            var hsl$1 = m3.slice(1, 4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb(hsl$1);
            rgb$5[3] = +m3[4];
            return rgb$5;
          }
        };
        css2rgb$1.test = function(s3) {
          return RE_RGB.test(s3) || RE_RGBA.test(s3) || RE_RGB_PCT.test(s3) || RE_RGBA_PCT.test(s3) || RE_HSL.test(s3) || RE_HSLA.test(s3);
        };
        var css2rgb_1 = css2rgb$1;
        var chroma$i = chroma_1;
        var Color$B = Color_1;
        var input$e = input$h;
        var type$k = utils.type;
        var rgb2css = rgb2css_1;
        var css2rgb = css2rgb_1;
        Color$B.prototype.css = function(mode) {
          return rgb2css(this._rgb, mode);
        };
        chroma$i.css = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$B, [null].concat(args, ["css"])))();
        };
        input$e.format.css = css2rgb;
        input$e.autodetect.push({
          p: 5,
          test: function(h3) {
            var rest = [], len = arguments.length - 1;
            while (len-- > 0)
              rest[len] = arguments[len + 1];
            if (!rest.length && type$k(h3) === "string" && css2rgb.test(h3)) {
              return "css";
            }
          }
        });
        var Color$A = Color_1;
        var chroma$h = chroma_1;
        var input$d = input$h;
        var unpack$t = utils.unpack;
        input$d.format.gl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var rgb2 = unpack$t(args, "rgba");
          rgb2[0] *= 255;
          rgb2[1] *= 255;
          rgb2[2] *= 255;
          return rgb2;
        };
        chroma$h.gl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$A, [null].concat(args, ["gl"])))();
        };
        Color$A.prototype.gl = function() {
          var rgb2 = this._rgb;
          return [rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255, rgb2[3]];
        };
        var unpack$s = utils.unpack;
        var rgb2hcg$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$s(args, "rgb");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          var min2 = Math.min(r3, g4, b2);
          var max2 = Math.max(r3, g4, b2);
          var delta = max2 - min2;
          var c3 = delta * 100 / 255;
          var _g = min2 / (255 - delta) * 100;
          var h3;
          if (delta === 0) {
            h3 = Number.NaN;
          } else {
            if (r3 === max2) {
              h3 = (g4 - b2) / delta;
            }
            if (g4 === max2) {
              h3 = 2 + (b2 - r3) / delta;
            }
            if (b2 === max2) {
              h3 = 4 + (r3 - g4) / delta;
            }
            h3 *= 60;
            if (h3 < 0) {
              h3 += 360;
            }
          }
          return [h3, c3, _g];
        };
        var rgb2hcg_1 = rgb2hcg$1;
        var unpack$r = utils.unpack;
        var floor$3 = Math.floor;
        var hcg2rgb = function() {
          var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$r(args, "hcg");
          var h3 = args[0];
          var c3 = args[1];
          var _g = args[2];
          var r3, g4, b2;
          _g = _g * 255;
          var _c = c3 * 255;
          if (c3 === 0) {
            r3 = g4 = b2 = _g;
          } else {
            if (h3 === 360) {
              h3 = 0;
            }
            if (h3 > 360) {
              h3 -= 360;
            }
            if (h3 < 0) {
              h3 += 360;
            }
            h3 /= 60;
            var i4 = floor$3(h3);
            var f3 = h3 - i4;
            var p3 = _g * (1 - c3);
            var q3 = p3 + _c * (1 - f3);
            var t3 = p3 + _c * f3;
            var v3 = p3 + _c;
            switch (i4) {
              case 0:
                assign = [v3, t3, p3], r3 = assign[0], g4 = assign[1], b2 = assign[2];
                break;
              case 1:
                assign$1 = [q3, v3, p3], r3 = assign$1[0], g4 = assign$1[1], b2 = assign$1[2];
                break;
              case 2:
                assign$2 = [p3, v3, t3], r3 = assign$2[0], g4 = assign$2[1], b2 = assign$2[2];
                break;
              case 3:
                assign$3 = [p3, q3, v3], r3 = assign$3[0], g4 = assign$3[1], b2 = assign$3[2];
                break;
              case 4:
                assign$4 = [t3, p3, v3], r3 = assign$4[0], g4 = assign$4[1], b2 = assign$4[2];
                break;
              case 5:
                assign$5 = [v3, p3, q3], r3 = assign$5[0], g4 = assign$5[1], b2 = assign$5[2];
                break;
            }
          }
          return [r3, g4, b2, args.length > 3 ? args[3] : 1];
        };
        var hcg2rgb_1 = hcg2rgb;
        var unpack$q = utils.unpack;
        var type$j = utils.type;
        var chroma$g = chroma_1;
        var Color$z = Color_1;
        var input$c = input$h;
        var rgb2hcg = rgb2hcg_1;
        Color$z.prototype.hcg = function() {
          return rgb2hcg(this._rgb);
        };
        chroma$g.hcg = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$z, [null].concat(args, ["hcg"])))();
        };
        input$c.format.hcg = hcg2rgb_1;
        input$c.autodetect.push({
          p: 1,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$q(args, "hcg");
            if (type$j(args) === "array" && args.length === 3) {
              return "hcg";
            }
          }
        });
        var unpack$p = utils.unpack;
        var last = utils.last;
        var round$3 = Math.round;
        var rgb2hex$2 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$p(args, "rgba");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          var a3 = ref[3];
          var mode = last(args) || "auto";
          if (a3 === void 0) {
            a3 = 1;
          }
          if (mode === "auto") {
            mode = a3 < 1 ? "rgba" : "rgb";
          }
          r3 = round$3(r3);
          g4 = round$3(g4);
          b2 = round$3(b2);
          var u3 = r3 << 16 | g4 << 8 | b2;
          var str = "000000" + u3.toString(16);
          str = str.substr(str.length - 6);
          var hxa = "0" + round$3(a3 * 255).toString(16);
          hxa = hxa.substr(hxa.length - 2);
          switch (mode.toLowerCase()) {
            case "rgba":
              return "#" + str + hxa;
            case "argb":
              return "#" + hxa + str;
            default:
              return "#" + str;
          }
        };
        var rgb2hex_1 = rgb2hex$2;
        var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
        var hex2rgb$1 = function(hex) {
          if (hex.match(RE_HEX)) {
            if (hex.length === 4 || hex.length === 7) {
              hex = hex.substr(1);
            }
            if (hex.length === 3) {
              hex = hex.split("");
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            var u3 = parseInt(hex, 16);
            var r3 = u3 >> 16;
            var g4 = u3 >> 8 & 255;
            var b2 = u3 & 255;
            return [r3, g4, b2, 1];
          }
          if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) {
              hex = hex.substr(1);
            }
            if (hex.length === 4) {
              hex = hex.split("");
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 255;
            var g$1 = u$1 >> 16 & 255;
            var b$1 = u$1 >> 8 & 255;
            var a3 = Math.round((u$1 & 255) / 255 * 100) / 100;
            return [r$1, g$1, b$1, a3];
          }
          throw new Error("unknown hex color: " + hex);
        };
        var hex2rgb_1 = hex2rgb$1;
        var chroma$f = chroma_1;
        var Color$y = Color_1;
        var type$i = utils.type;
        var input$b = input$h;
        var rgb2hex$1 = rgb2hex_1;
        Color$y.prototype.hex = function(mode) {
          return rgb2hex$1(this._rgb, mode);
        };
        chroma$f.hex = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$y, [null].concat(args, ["hex"])))();
        };
        input$b.format.hex = hex2rgb_1;
        input$b.autodetect.push({
          p: 4,
          test: function(h3) {
            var rest = [], len = arguments.length - 1;
            while (len-- > 0)
              rest[len] = arguments[len + 1];
            if (!rest.length && type$i(h3) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h3.length) >= 0) {
              return "hex";
            }
          }
        });
        var unpack$o = utils.unpack;
        var TWOPI$2 = utils.TWOPI;
        var min$2 = Math.min;
        var sqrt$4 = Math.sqrt;
        var acos = Math.acos;
        var rgb2hsi$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$o(args, "rgb");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          r3 /= 255;
          g4 /= 255;
          b2 /= 255;
          var h3;
          var min_ = min$2(r3, g4, b2);
          var i4 = (r3 + g4 + b2) / 3;
          var s3 = i4 > 0 ? 1 - min_ / i4 : 0;
          if (s3 === 0) {
            h3 = NaN;
          } else {
            h3 = (r3 - g4 + (r3 - b2)) / 2;
            h3 /= sqrt$4((r3 - g4) * (r3 - g4) + (r3 - b2) * (g4 - b2));
            h3 = acos(h3);
            if (b2 > g4) {
              h3 = TWOPI$2 - h3;
            }
            h3 /= TWOPI$2;
          }
          return [h3 * 360, s3, i4];
        };
        var rgb2hsi_1 = rgb2hsi$1;
        var unpack$n = utils.unpack;
        var limit = utils.limit;
        var TWOPI$1 = utils.TWOPI;
        var PITHIRD = utils.PITHIRD;
        var cos$4 = Math.cos;
        var hsi2rgb = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$n(args, "hsi");
          var h3 = args[0];
          var s3 = args[1];
          var i4 = args[2];
          var r3, g4, b2;
          if (isNaN(h3)) {
            h3 = 0;
          }
          if (isNaN(s3)) {
            s3 = 0;
          }
          if (h3 > 360) {
            h3 -= 360;
          }
          if (h3 < 0) {
            h3 += 360;
          }
          h3 /= 360;
          if (h3 < 1 / 3) {
            b2 = (1 - s3) / 3;
            r3 = (1 + s3 * cos$4(TWOPI$1 * h3) / cos$4(PITHIRD - TWOPI$1 * h3)) / 3;
            g4 = 1 - (b2 + r3);
          } else if (h3 < 2 / 3) {
            h3 -= 1 / 3;
            r3 = (1 - s3) / 3;
            g4 = (1 + s3 * cos$4(TWOPI$1 * h3) / cos$4(PITHIRD - TWOPI$1 * h3)) / 3;
            b2 = 1 - (r3 + g4);
          } else {
            h3 -= 2 / 3;
            g4 = (1 - s3) / 3;
            b2 = (1 + s3 * cos$4(TWOPI$1 * h3) / cos$4(PITHIRD - TWOPI$1 * h3)) / 3;
            r3 = 1 - (g4 + b2);
          }
          r3 = limit(i4 * r3 * 3);
          g4 = limit(i4 * g4 * 3);
          b2 = limit(i4 * b2 * 3);
          return [r3 * 255, g4 * 255, b2 * 255, args.length > 3 ? args[3] : 1];
        };
        var hsi2rgb_1 = hsi2rgb;
        var unpack$m = utils.unpack;
        var type$h = utils.type;
        var chroma$e = chroma_1;
        var Color$x = Color_1;
        var input$a = input$h;
        var rgb2hsi = rgb2hsi_1;
        Color$x.prototype.hsi = function() {
          return rgb2hsi(this._rgb);
        };
        chroma$e.hsi = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$x, [null].concat(args, ["hsi"])))();
        };
        input$a.format.hsi = hsi2rgb_1;
        input$a.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$m(args, "hsi");
            if (type$h(args) === "array" && args.length === 3) {
              return "hsi";
            }
          }
        });
        var unpack$l = utils.unpack;
        var type$g = utils.type;
        var chroma$d = chroma_1;
        var Color$w = Color_1;
        var input$9 = input$h;
        var rgb2hsl$1 = rgb2hsl_1;
        Color$w.prototype.hsl = function() {
          return rgb2hsl$1(this._rgb);
        };
        chroma$d.hsl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$w, [null].concat(args, ["hsl"])))();
        };
        input$9.format.hsl = hsl2rgb_1;
        input$9.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$l(args, "hsl");
            if (type$g(args) === "array" && args.length === 3) {
              return "hsl";
            }
          }
        });
        var unpack$k = utils.unpack;
        var min$1 = Math.min;
        var max$1 = Math.max;
        var rgb2hsl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$k(args, "rgb");
          var r3 = args[0];
          var g4 = args[1];
          var b2 = args[2];
          var min_ = min$1(r3, g4, b2);
          var max_ = max$1(r3, g4, b2);
          var delta = max_ - min_;
          var h3, s3, v3;
          v3 = max_ / 255;
          if (max_ === 0) {
            h3 = Number.NaN;
            s3 = 0;
          } else {
            s3 = delta / max_;
            if (r3 === max_) {
              h3 = (g4 - b2) / delta;
            }
            if (g4 === max_) {
              h3 = 2 + (b2 - r3) / delta;
            }
            if (b2 === max_) {
              h3 = 4 + (r3 - g4) / delta;
            }
            h3 *= 60;
            if (h3 < 0) {
              h3 += 360;
            }
          }
          return [h3, s3, v3];
        };
        var rgb2hsv$1 = rgb2hsl;
        var unpack$j = utils.unpack;
        var floor$2 = Math.floor;
        var hsv2rgb = function() {
          var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$j(args, "hsv");
          var h3 = args[0];
          var s3 = args[1];
          var v3 = args[2];
          var r3, g4, b2;
          v3 *= 255;
          if (s3 === 0) {
            r3 = g4 = b2 = v3;
          } else {
            if (h3 === 360) {
              h3 = 0;
            }
            if (h3 > 360) {
              h3 -= 360;
            }
            if (h3 < 0) {
              h3 += 360;
            }
            h3 /= 60;
            var i4 = floor$2(h3);
            var f3 = h3 - i4;
            var p3 = v3 * (1 - s3);
            var q3 = v3 * (1 - s3 * f3);
            var t3 = v3 * (1 - s3 * (1 - f3));
            switch (i4) {
              case 0:
                assign = [v3, t3, p3], r3 = assign[0], g4 = assign[1], b2 = assign[2];
                break;
              case 1:
                assign$1 = [q3, v3, p3], r3 = assign$1[0], g4 = assign$1[1], b2 = assign$1[2];
                break;
              case 2:
                assign$2 = [p3, v3, t3], r3 = assign$2[0], g4 = assign$2[1], b2 = assign$2[2];
                break;
              case 3:
                assign$3 = [p3, q3, v3], r3 = assign$3[0], g4 = assign$3[1], b2 = assign$3[2];
                break;
              case 4:
                assign$4 = [t3, p3, v3], r3 = assign$4[0], g4 = assign$4[1], b2 = assign$4[2];
                break;
              case 5:
                assign$5 = [v3, p3, q3], r3 = assign$5[0], g4 = assign$5[1], b2 = assign$5[2];
                break;
            }
          }
          return [r3, g4, b2, args.length > 3 ? args[3] : 1];
        };
        var hsv2rgb_1 = hsv2rgb;
        var unpack$i = utils.unpack;
        var type$f = utils.type;
        var chroma$c = chroma_1;
        var Color$v = Color_1;
        var input$8 = input$h;
        var rgb2hsv = rgb2hsv$1;
        Color$v.prototype.hsv = function() {
          return rgb2hsv(this._rgb);
        };
        chroma$c.hsv = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$v, [null].concat(args, ["hsv"])))();
        };
        input$8.format.hsv = hsv2rgb_1;
        input$8.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$i(args, "hsv");
            if (type$f(args) === "array" && args.length === 3) {
              return "hsv";
            }
          }
        });
        var labConstants = {
          // Corresponds roughly to RGB brighter/darker
          Kn: 18,
          // D65 standard referent
          Xn: 0.95047,
          Yn: 1,
          Zn: 1.08883,
          t0: 0.137931034,
          // 4 / 29
          t1: 0.206896552,
          // 6 / 29
          t2: 0.12841855,
          // 3 * t1 * t1
          t3: 8856452e-9
          // t1 * t1 * t1
        };
        var LAB_CONSTANTS$3 = labConstants;
        var unpack$h = utils.unpack;
        var pow$a = Math.pow;
        var rgb2lab$2 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$h(args, "rgb");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          var ref$1 = rgb2xyz(r3, g4, b2);
          var x4 = ref$1[0];
          var y3 = ref$1[1];
          var z4 = ref$1[2];
          var l3 = 116 * y3 - 16;
          return [l3 < 0 ? 0 : l3, 500 * (x4 - y3), 200 * (y3 - z4)];
        };
        var rgb_xyz = function(r3) {
          if ((r3 /= 255) <= 0.04045) {
            return r3 / 12.92;
          }
          return pow$a((r3 + 0.055) / 1.055, 2.4);
        };
        var xyz_lab = function(t3) {
          if (t3 > LAB_CONSTANTS$3.t3) {
            return pow$a(t3, 1 / 3);
          }
          return t3 / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
        };
        var rgb2xyz = function(r3, g4, b2) {
          r3 = rgb_xyz(r3);
          g4 = rgb_xyz(g4);
          b2 = rgb_xyz(b2);
          var x4 = xyz_lab((0.4124564 * r3 + 0.3575761 * g4 + 0.1804375 * b2) / LAB_CONSTANTS$3.Xn);
          var y3 = xyz_lab((0.2126729 * r3 + 0.7151522 * g4 + 0.072175 * b2) / LAB_CONSTANTS$3.Yn);
          var z4 = xyz_lab((0.0193339 * r3 + 0.119192 * g4 + 0.9503041 * b2) / LAB_CONSTANTS$3.Zn);
          return [x4, y3, z4];
        };
        var rgb2lab_1 = rgb2lab$2;
        var LAB_CONSTANTS$2 = labConstants;
        var unpack$g = utils.unpack;
        var pow$9 = Math.pow;
        var lab2rgb$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$g(args, "lab");
          var l3 = args[0];
          var a3 = args[1];
          var b2 = args[2];
          var x4, y3, z4, r3, g4, b_;
          y3 = (l3 + 16) / 116;
          x4 = isNaN(a3) ? y3 : y3 + a3 / 500;
          z4 = isNaN(b2) ? y3 : y3 - b2 / 200;
          y3 = LAB_CONSTANTS$2.Yn * lab_xyz(y3);
          x4 = LAB_CONSTANTS$2.Xn * lab_xyz(x4);
          z4 = LAB_CONSTANTS$2.Zn * lab_xyz(z4);
          r3 = xyz_rgb(3.2404542 * x4 - 1.5371385 * y3 - 0.4985314 * z4);
          g4 = xyz_rgb(-0.969266 * x4 + 1.8760108 * y3 + 0.041556 * z4);
          b_ = xyz_rgb(0.0556434 * x4 - 0.2040259 * y3 + 1.0572252 * z4);
          return [r3, g4, b_, args.length > 3 ? args[3] : 1];
        };
        var xyz_rgb = function(r3) {
          return 255 * (r3 <= 304e-5 ? 12.92 * r3 : 1.055 * pow$9(r3, 1 / 2.4) - 0.055);
        };
        var lab_xyz = function(t3) {
          return t3 > LAB_CONSTANTS$2.t1 ? t3 * t3 * t3 : LAB_CONSTANTS$2.t2 * (t3 - LAB_CONSTANTS$2.t0);
        };
        var lab2rgb_1 = lab2rgb$1;
        var unpack$f = utils.unpack;
        var type$e = utils.type;
        var chroma$b = chroma_1;
        var Color$u = Color_1;
        var input$7 = input$h;
        var rgb2lab$1 = rgb2lab_1;
        Color$u.prototype.lab = function() {
          return rgb2lab$1(this._rgb);
        };
        chroma$b.lab = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$u, [null].concat(args, ["lab"])))();
        };
        input$7.format.lab = lab2rgb_1;
        input$7.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$f(args, "lab");
            if (type$e(args) === "array" && args.length === 3) {
              return "lab";
            }
          }
        });
        var unpack$e = utils.unpack;
        var RAD2DEG = utils.RAD2DEG;
        var sqrt$3 = Math.sqrt;
        var atan2$2 = Math.atan2;
        var round$2 = Math.round;
        var lab2lch$2 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$e(args, "lab");
          var l3 = ref[0];
          var a3 = ref[1];
          var b2 = ref[2];
          var c3 = sqrt$3(a3 * a3 + b2 * b2);
          var h3 = (atan2$2(b2, a3) * RAD2DEG + 360) % 360;
          if (round$2(c3 * 1e4) === 0) {
            h3 = Number.NaN;
          }
          return [l3, c3, h3];
        };
        var lab2lch_1 = lab2lch$2;
        var unpack$d = utils.unpack;
        var rgb2lab = rgb2lab_1;
        var lab2lch$1 = lab2lch_1;
        var rgb2lch$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$d(args, "rgb");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          var ref$1 = rgb2lab(r3, g4, b2);
          var l3 = ref$1[0];
          var a3 = ref$1[1];
          var b_ = ref$1[2];
          return lab2lch$1(l3, a3, b_);
        };
        var rgb2lch_1 = rgb2lch$1;
        var unpack$c = utils.unpack;
        var DEG2RAD = utils.DEG2RAD;
        var sin$3 = Math.sin;
        var cos$3 = Math.cos;
        var lch2lab$2 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$c(args, "lch");
          var l3 = ref[0];
          var c3 = ref[1];
          var h3 = ref[2];
          if (isNaN(h3)) {
            h3 = 0;
          }
          h3 = h3 * DEG2RAD;
          return [l3, cos$3(h3) * c3, sin$3(h3) * c3];
        };
        var lch2lab_1 = lch2lab$2;
        var unpack$b = utils.unpack;
        var lch2lab$1 = lch2lab_1;
        var lab2rgb = lab2rgb_1;
        var lch2rgb$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$b(args, "lch");
          var l3 = args[0];
          var c3 = args[1];
          var h3 = args[2];
          var ref = lch2lab$1(l3, c3, h3);
          var L3 = ref[0];
          var a3 = ref[1];
          var b_ = ref[2];
          var ref$1 = lab2rgb(L3, a3, b_);
          var r3 = ref$1[0];
          var g4 = ref$1[1];
          var b2 = ref$1[2];
          return [r3, g4, b2, args.length > 3 ? args[3] : 1];
        };
        var lch2rgb_1 = lch2rgb$1;
        var unpack$a = utils.unpack;
        var lch2rgb = lch2rgb_1;
        var hcl2rgb = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var hcl = unpack$a(args, "hcl").reverse();
          return lch2rgb.apply(void 0, hcl);
        };
        var hcl2rgb_1 = hcl2rgb;
        var unpack$9 = utils.unpack;
        var type$d = utils.type;
        var chroma$a = chroma_1;
        var Color$t = Color_1;
        var input$6 = input$h;
        var rgb2lch = rgb2lch_1;
        Color$t.prototype.lch = function() {
          return rgb2lch(this._rgb);
        };
        Color$t.prototype.hcl = function() {
          return rgb2lch(this._rgb).reverse();
        };
        chroma$a.lch = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["lch"])))();
        };
        chroma$a.hcl = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["hcl"])))();
        };
        input$6.format.lch = lch2rgb_1;
        input$6.format.hcl = hcl2rgb_1;
        ["lch", "hcl"].forEach(function(m3) {
          return input$6.autodetect.push({
            p: 2,
            test: function() {
              var args = [], len = arguments.length;
              while (len--)
                args[len] = arguments[len];
              args = unpack$9(args, m3);
              if (type$d(args) === "array" && args.length === 3) {
                return m3;
              }
            }
          });
        });
        var w3cx11$1 = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflower: "#6495ed",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          laserlemon: "#ffff54",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrod: "#fafad2",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          maroon2: "#7f0000",
          maroon3: "#b03060",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          purple2: "#7f007f",
          purple3: "#a020f0",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32"
        };
        var w3cx11_1 = w3cx11$1;
        var Color$s = Color_1;
        var input$5 = input$h;
        var type$c = utils.type;
        var w3cx11 = w3cx11_1;
        var hex2rgb = hex2rgb_1;
        var rgb2hex = rgb2hex_1;
        Color$s.prototype.name = function() {
          var hex = rgb2hex(this._rgb, "rgb");
          for (var i4 = 0, list2 = Object.keys(w3cx11); i4 < list2.length; i4 += 1) {
            var n2 = list2[i4];
            if (w3cx11[n2] === hex) {
              return n2.toLowerCase();
            }
          }
          return hex;
        };
        input$5.format.named = function(name2) {
          name2 = name2.toLowerCase();
          if (w3cx11[name2]) {
            return hex2rgb(w3cx11[name2]);
          }
          throw new Error("unknown color name: " + name2);
        };
        input$5.autodetect.push({
          p: 5,
          test: function(h3) {
            var rest = [], len = arguments.length - 1;
            while (len-- > 0)
              rest[len] = arguments[len + 1];
            if (!rest.length && type$c(h3) === "string" && w3cx11[h3.toLowerCase()]) {
              return "named";
            }
          }
        });
        var unpack$8 = utils.unpack;
        var rgb2num$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$8(args, "rgb");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          return (r3 << 16) + (g4 << 8) + b2;
        };
        var rgb2num_1 = rgb2num$1;
        var type$b = utils.type;
        var num2rgb = function(num2) {
          if (type$b(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
            var r3 = num2 >> 16;
            var g4 = num2 >> 8 & 255;
            var b2 = num2 & 255;
            return [r3, g4, b2, 1];
          }
          throw new Error("unknown num color: " + num2);
        };
        var num2rgb_1 = num2rgb;
        var chroma$9 = chroma_1;
        var Color$r = Color_1;
        var input$4 = input$h;
        var type$a = utils.type;
        var rgb2num = rgb2num_1;
        Color$r.prototype.num = function() {
          return rgb2num(this._rgb);
        };
        chroma$9.num = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$r, [null].concat(args, ["num"])))();
        };
        input$4.format.num = num2rgb_1;
        input$4.autodetect.push({
          p: 5,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            if (args.length === 1 && type$a(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
              return "num";
            }
          }
        });
        var chroma$8 = chroma_1;
        var Color$q = Color_1;
        var input$3 = input$h;
        var unpack$7 = utils.unpack;
        var type$9 = utils.type;
        var round$1 = Math.round;
        Color$q.prototype.rgb = function(rnd2) {
          if (rnd2 === void 0)
            rnd2 = true;
          if (rnd2 === false) {
            return this._rgb.slice(0, 3);
          }
          return this._rgb.slice(0, 3).map(round$1);
        };
        Color$q.prototype.rgba = function(rnd2) {
          if (rnd2 === void 0)
            rnd2 = true;
          return this._rgb.slice(0, 4).map(function(v3, i4) {
            return i4 < 3 ? rnd2 === false ? v3 : round$1(v3) : v3;
          });
        };
        chroma$8.rgb = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$q, [null].concat(args, ["rgb"])))();
        };
        input$3.format.rgb = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var rgba = unpack$7(args, "rgba");
          if (rgba[3] === void 0) {
            rgba[3] = 1;
          }
          return rgba;
        };
        input$3.autodetect.push({
          p: 3,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$7(args, "rgba");
            if (type$9(args) === "array" && (args.length === 3 || args.length === 4 && type$9(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
              return "rgb";
            }
          }
        });
        var log$1 = Math.log;
        var temperature2rgb$1 = function(kelvin) {
          var temp = kelvin / 100;
          var r3, g4, b2;
          if (temp < 66) {
            r3 = 255;
            g4 = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g4 = temp - 2) + 104.49216199393888 * log$1(g4);
            b2 = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b2 = temp - 10) + 115.67994401066147 * log$1(b2);
          } else {
            r3 = 351.97690566805693 + 0.114206453784165 * (r3 = temp - 55) - 40.25366309332127 * log$1(r3);
            g4 = 325.4494125711974 + 0.07943456536662342 * (g4 = temp - 50) - 28.0852963507957 * log$1(g4);
            b2 = 255;
          }
          return [r3, g4, b2, 1];
        };
        var temperature2rgb_1 = temperature2rgb$1;
        var temperature2rgb = temperature2rgb_1;
        var unpack$6 = utils.unpack;
        var round = Math.round;
        var rgb2temperature$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var rgb2 = unpack$6(args, "rgb");
          var r3 = rgb2[0], b2 = rgb2[2];
          var minTemp = 1e3;
          var maxTemp = 4e4;
          var eps = 0.4;
          var temp;
          while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb(temp);
            if (rgb$1[2] / rgb$1[0] >= b2 / r3) {
              maxTemp = temp;
            } else {
              minTemp = temp;
            }
          }
          return round(temp);
        };
        var rgb2temperature_1 = rgb2temperature$1;
        var chroma$7 = chroma_1;
        var Color$p = Color_1;
        var input$2 = input$h;
        var rgb2temperature = rgb2temperature_1;
        Color$p.prototype.temp = Color$p.prototype.kelvin = Color$p.prototype.temperature = function() {
          return rgb2temperature(this._rgb);
        };
        chroma$7.temp = chroma$7.kelvin = chroma$7.temperature = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$p, [null].concat(args, ["temp"])))();
        };
        input$2.format.temp = input$2.format.kelvin = input$2.format.temperature = temperature2rgb_1;
        var unpack$5 = utils.unpack;
        var cbrt = Math.cbrt;
        var pow$8 = Math.pow;
        var sign$1 = Math.sign;
        var rgb2oklab$2 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$5(args, "rgb");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          var ref$1 = [rgb2lrgb(r3 / 255), rgb2lrgb(g4 / 255), rgb2lrgb(b2 / 255)];
          var lr = ref$1[0];
          var lg = ref$1[1];
          var lb = ref$1[2];
          var l3 = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
          var m3 = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
          var s3 = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
          return [
            0.2104542553 * l3 + 0.793617785 * m3 - 0.0040720468 * s3,
            1.9779984951 * l3 - 2.428592205 * m3 + 0.4505937099 * s3,
            0.0259040371 * l3 + 0.7827717662 * m3 - 0.808675766 * s3
          ];
        };
        var rgb2oklab_1 = rgb2oklab$2;
        function rgb2lrgb(c3) {
          var abs2 = Math.abs(c3);
          if (abs2 < 0.04045) {
            return c3 / 12.92;
          }
          return (sign$1(c3) || 1) * pow$8((abs2 + 0.055) / 1.055, 2.4);
        }
        var unpack$4 = utils.unpack;
        var pow$7 = Math.pow;
        var sign = Math.sign;
        var oklab2rgb$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$4(args, "lab");
          var L3 = args[0];
          var a3 = args[1];
          var b2 = args[2];
          var l3 = pow$7(L3 + 0.3963377774 * a3 + 0.2158037573 * b2, 3);
          var m3 = pow$7(L3 - 0.1055613458 * a3 - 0.0638541728 * b2, 3);
          var s3 = pow$7(L3 - 0.0894841775 * a3 - 1.291485548 * b2, 3);
          return [
            255 * lrgb2rgb(4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3),
            255 * lrgb2rgb(-1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3),
            255 * lrgb2rgb(-0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3),
            args.length > 3 ? args[3] : 1
          ];
        };
        var oklab2rgb_1 = oklab2rgb$1;
        function lrgb2rgb(c3) {
          var abs2 = Math.abs(c3);
          if (abs2 > 31308e-7) {
            return (sign(c3) || 1) * (1.055 * pow$7(abs2, 1 / 2.4) - 0.055);
          }
          return c3 * 12.92;
        }
        var unpack$3 = utils.unpack;
        var type$8 = utils.type;
        var chroma$6 = chroma_1;
        var Color$o = Color_1;
        var input$1 = input$h;
        var rgb2oklab$1 = rgb2oklab_1;
        Color$o.prototype.oklab = function() {
          return rgb2oklab$1(this._rgb);
        };
        chroma$6.oklab = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$o, [null].concat(args, ["oklab"])))();
        };
        input$1.format.oklab = oklab2rgb_1;
        input$1.autodetect.push({
          p: 3,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$3(args, "oklab");
            if (type$8(args) === "array" && args.length === 3) {
              return "oklab";
            }
          }
        });
        var unpack$2 = utils.unpack;
        var rgb2oklab = rgb2oklab_1;
        var lab2lch = lab2lch_1;
        var rgb2oklch$1 = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var ref = unpack$2(args, "rgb");
          var r3 = ref[0];
          var g4 = ref[1];
          var b2 = ref[2];
          var ref$1 = rgb2oklab(r3, g4, b2);
          var l3 = ref$1[0];
          var a3 = ref$1[1];
          var b_ = ref$1[2];
          return lab2lch(l3, a3, b_);
        };
        var rgb2oklch_1 = rgb2oklch$1;
        var unpack$1 = utils.unpack;
        var lch2lab = lch2lab_1;
        var oklab2rgb = oklab2rgb_1;
        var oklch2rgb = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$1(args, "lch");
          var l3 = args[0];
          var c3 = args[1];
          var h3 = args[2];
          var ref = lch2lab(l3, c3, h3);
          var L3 = ref[0];
          var a3 = ref[1];
          var b_ = ref[2];
          var ref$1 = oklab2rgb(L3, a3, b_);
          var r3 = ref$1[0];
          var g4 = ref$1[1];
          var b2 = ref$1[2];
          return [r3, g4, b2, args.length > 3 ? args[3] : 1];
        };
        var oklch2rgb_1 = oklch2rgb;
        var unpack = utils.unpack;
        var type$7 = utils.type;
        var chroma$5 = chroma_1;
        var Color$n = Color_1;
        var input = input$h;
        var rgb2oklch = rgb2oklch_1;
        Color$n.prototype.oklch = function() {
          return rgb2oklch(this._rgb);
        };
        chroma$5.oklch = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return new (Function.prototype.bind.apply(Color$n, [null].concat(args, ["oklch"])))();
        };
        input.format.oklch = oklch2rgb_1;
        input.autodetect.push({
          p: 3,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack(args, "oklch");
            if (type$7(args) === "array" && args.length === 3) {
              return "oklch";
            }
          }
        });
        var Color$m = Color_1;
        var type$6 = utils.type;
        Color$m.prototype.alpha = function(a3, mutate) {
          if (mutate === void 0)
            mutate = false;
          if (a3 !== void 0 && type$6(a3) === "number") {
            if (mutate) {
              this._rgb[3] = a3;
              return this;
            }
            return new Color$m([this._rgb[0], this._rgb[1], this._rgb[2], a3], "rgb");
          }
          return this._rgb[3];
        };
        var Color$l = Color_1;
        Color$l.prototype.clipped = function() {
          return this._rgb._clipped || false;
        };
        var Color$k = Color_1;
        var LAB_CONSTANTS$1 = labConstants;
        Color$k.prototype.darken = function(amount) {
          if (amount === void 0)
            amount = 1;
          var me = this;
          var lab2 = me.lab();
          lab2[0] -= LAB_CONSTANTS$1.Kn * amount;
          return new Color$k(lab2, "lab").alpha(me.alpha(), true);
        };
        Color$k.prototype.brighten = function(amount) {
          if (amount === void 0)
            amount = 1;
          return this.darken(-amount);
        };
        Color$k.prototype.darker = Color$k.prototype.darken;
        Color$k.prototype.brighter = Color$k.prototype.brighten;
        var Color$j = Color_1;
        Color$j.prototype.get = function(mc) {
          var ref = mc.split(".");
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
            var i4 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
            if (i4 > -1) {
              return src[i4];
            }
            throw new Error("unknown channel " + channel + " in mode " + mode);
          } else {
            return src;
          }
        };
        var Color$i = Color_1;
        var type$5 = utils.type;
        var pow$6 = Math.pow;
        var EPS = 1e-7;
        var MAX_ITER = 20;
        Color$i.prototype.luminance = function(lum) {
          if (lum !== void 0 && type$5(lum) === "number") {
            if (lum === 0) {
              return new Color$i([0, 0, 0, this._rgb[3]], "rgb");
            }
            if (lum === 1) {
              return new Color$i([255, 255, 255, this._rgb[3]], "rgb");
            }
            var cur_lum = this.luminance();
            var mode = "rgb";
            var max_iter = MAX_ITER;
            var test = function(low, high) {
              var mid = low.interpolate(high, 0.5, mode);
              var lm = mid.luminance();
              if (Math.abs(lum - lm) < EPS || !max_iter--) {
                return mid;
              }
              return lm > lum ? test(low, mid) : test(mid, high);
            };
            var rgb2 = (cur_lum > lum ? test(new Color$i([0, 0, 0]), this) : test(this, new Color$i([255, 255, 255]))).rgb();
            return new Color$i(rgb2.concat([this._rgb[3]]));
          }
          return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
        };
        var rgb2luminance = function(r3, g4, b2) {
          r3 = luminance_x(r3);
          g4 = luminance_x(g4);
          b2 = luminance_x(b2);
          return 0.2126 * r3 + 0.7152 * g4 + 0.0722 * b2;
        };
        var luminance_x = function(x4) {
          x4 /= 255;
          return x4 <= 0.03928 ? x4 / 12.92 : pow$6((x4 + 0.055) / 1.055, 2.4);
        };
        var interpolator$1 = {};
        var Color$h = Color_1;
        var type$4 = utils.type;
        var interpolator = interpolator$1;
        var mix$1 = function(col1, col2, f3) {
          if (f3 === void 0)
            f3 = 0.5;
          var rest = [], len = arguments.length - 3;
          while (len-- > 0)
            rest[len] = arguments[len + 3];
          var mode = rest[0] || "lrgb";
          if (!interpolator[mode] && !rest.length) {
            mode = Object.keys(interpolator)[0];
          }
          if (!interpolator[mode]) {
            throw new Error("interpolation mode " + mode + " is not defined");
          }
          if (type$4(col1) !== "object") {
            col1 = new Color$h(col1);
          }
          if (type$4(col2) !== "object") {
            col2 = new Color$h(col2);
          }
          return interpolator[mode](col1, col2, f3).alpha(col1.alpha() + f3 * (col2.alpha() - col1.alpha()));
        };
        var Color$g = Color_1;
        var mix = mix$1;
        Color$g.prototype.mix = Color$g.prototype.interpolate = function(col2, f3) {
          if (f3 === void 0)
            f3 = 0.5;
          var rest = [], len = arguments.length - 2;
          while (len-- > 0)
            rest[len] = arguments[len + 2];
          return mix.apply(void 0, [this, col2, f3].concat(rest));
        };
        var Color$f = Color_1;
        Color$f.prototype.premultiply = function(mutate) {
          if (mutate === void 0)
            mutate = false;
          var rgb2 = this._rgb;
          var a3 = rgb2[3];
          if (mutate) {
            this._rgb = [rgb2[0] * a3, rgb2[1] * a3, rgb2[2] * a3, a3];
            return this;
          } else {
            return new Color$f([rgb2[0] * a3, rgb2[1] * a3, rgb2[2] * a3, a3], "rgb");
          }
        };
        var Color$e = Color_1;
        var LAB_CONSTANTS = labConstants;
        Color$e.prototype.saturate = function(amount) {
          if (amount === void 0)
            amount = 1;
          var me = this;
          var lch2 = me.lch();
          lch2[1] += LAB_CONSTANTS.Kn * amount;
          if (lch2[1] < 0) {
            lch2[1] = 0;
          }
          return new Color$e(lch2, "lch").alpha(me.alpha(), true);
        };
        Color$e.prototype.desaturate = function(amount) {
          if (amount === void 0)
            amount = 1;
          return this.saturate(-amount);
        };
        var Color$d = Color_1;
        var type$3 = utils.type;
        Color$d.prototype.set = function(mc, value, mutate) {
          if (mutate === void 0)
            mutate = false;
          var ref = mc.split(".");
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
            var i4 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
            if (i4 > -1) {
              if (type$3(value) == "string") {
                switch (value.charAt(0)) {
                  case "+":
                    src[i4] += +value;
                    break;
                  case "-":
                    src[i4] += +value;
                    break;
                  case "*":
                    src[i4] *= +value.substr(1);
                    break;
                  case "/":
                    src[i4] /= +value.substr(1);
                    break;
                  default:
                    src[i4] = +value;
                }
              } else if (type$3(value) === "number") {
                src[i4] = value;
              } else {
                throw new Error("unsupported value for Color.set");
              }
              var out = new Color$d(src, mode);
              if (mutate) {
                this._rgb = out._rgb;
                return this;
              }
              return out;
            }
            throw new Error("unknown channel " + channel + " in mode " + mode);
          } else {
            return src;
          }
        };
        var Color$c = Color_1;
        var rgb = function(col1, col2, f3) {
          var xyz0 = col1._rgb;
          var xyz1 = col2._rgb;
          return new Color$c(
            xyz0[0] + f3 * (xyz1[0] - xyz0[0]),
            xyz0[1] + f3 * (xyz1[1] - xyz0[1]),
            xyz0[2] + f3 * (xyz1[2] - xyz0[2]),
            "rgb"
          );
        };
        interpolator$1.rgb = rgb;
        var Color$b = Color_1;
        var sqrt$2 = Math.sqrt;
        var pow$5 = Math.pow;
        var lrgb = function(col1, col2, f3) {
          var ref = col1._rgb;
          var x1 = ref[0];
          var y1 = ref[1];
          var z1 = ref[2];
          var ref$1 = col2._rgb;
          var x22 = ref$1[0];
          var y22 = ref$1[1];
          var z22 = ref$1[2];
          return new Color$b(
            sqrt$2(pow$5(x1, 2) * (1 - f3) + pow$5(x22, 2) * f3),
            sqrt$2(pow$5(y1, 2) * (1 - f3) + pow$5(y22, 2) * f3),
            sqrt$2(pow$5(z1, 2) * (1 - f3) + pow$5(z22, 2) * f3),
            "rgb"
          );
        };
        interpolator$1.lrgb = lrgb;
        var Color$a = Color_1;
        var lab = function(col1, col2, f3) {
          var xyz0 = col1.lab();
          var xyz1 = col2.lab();
          return new Color$a(
            xyz0[0] + f3 * (xyz1[0] - xyz0[0]),
            xyz0[1] + f3 * (xyz1[1] - xyz0[1]),
            xyz0[2] + f3 * (xyz1[2] - xyz0[2]),
            "lab"
          );
        };
        interpolator$1.lab = lab;
        var Color$9 = Color_1;
        var _hsx = function(col1, col2, f3, m3) {
          var assign, assign$1;
          var xyz0, xyz1;
          if (m3 === "hsl") {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
          } else if (m3 === "hsv") {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
          } else if (m3 === "hcg") {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
          } else if (m3 === "hsi") {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
          } else if (m3 === "lch" || m3 === "hcl") {
            m3 = "hcl";
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
          } else if (m3 === "oklch") {
            xyz0 = col1.oklch().reverse();
            xyz1 = col2.oklch().reverse();
          }
          var hue0, hue1, sat0, sat1, lbv0, lbv1;
          if (m3.substr(0, 1) === "h" || m3 === "oklch") {
            assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2];
            assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
          }
          var sat, hue, lbv, dh;
          if (!isNaN(hue0) && !isNaN(hue1)) {
            if (hue1 > hue0 && hue1 - hue0 > 180) {
              dh = hue1 - (hue0 + 360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
              dh = hue1 + 360 - hue0;
            } else {
              dh = hue1 - hue0;
            }
            hue = hue0 + f3 * dh;
          } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m3 != "hsv") {
              sat = sat0;
            }
          } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m3 != "hsv") {
              sat = sat1;
            }
          } else {
            hue = Number.NaN;
          }
          if (sat === void 0) {
            sat = sat0 + f3 * (sat1 - sat0);
          }
          lbv = lbv0 + f3 * (lbv1 - lbv0);
          return m3 === "oklch" ? new Color$9([lbv, sat, hue], m3) : new Color$9([hue, sat, lbv], m3);
        };
        var interpolate_hsx$5 = _hsx;
        var lch = function(col1, col2, f3) {
          return interpolate_hsx$5(col1, col2, f3, "lch");
        };
        interpolator$1.lch = lch;
        interpolator$1.hcl = lch;
        var Color$8 = Color_1;
        var num = function(col1, col2, f3) {
          var c1 = col1.num();
          var c22 = col2.num();
          return new Color$8(c1 + f3 * (c22 - c1), "num");
        };
        interpolator$1.num = num;
        var interpolate_hsx$4 = _hsx;
        var hcg = function(col1, col2, f3) {
          return interpolate_hsx$4(col1, col2, f3, "hcg");
        };
        interpolator$1.hcg = hcg;
        var interpolate_hsx$3 = _hsx;
        var hsi = function(col1, col2, f3) {
          return interpolate_hsx$3(col1, col2, f3, "hsi");
        };
        interpolator$1.hsi = hsi;
        var interpolate_hsx$2 = _hsx;
        var hsl = function(col1, col2, f3) {
          return interpolate_hsx$2(col1, col2, f3, "hsl");
        };
        interpolator$1.hsl = hsl;
        var interpolate_hsx$1 = _hsx;
        var hsv = function(col1, col2, f3) {
          return interpolate_hsx$1(col1, col2, f3, "hsv");
        };
        interpolator$1.hsv = hsv;
        var Color$7 = Color_1;
        var oklab = function(col1, col2, f3) {
          var xyz0 = col1.oklab();
          var xyz1 = col2.oklab();
          return new Color$7(
            xyz0[0] + f3 * (xyz1[0] - xyz0[0]),
            xyz0[1] + f3 * (xyz1[1] - xyz0[1]),
            xyz0[2] + f3 * (xyz1[2] - xyz0[2]),
            "oklab"
          );
        };
        interpolator$1.oklab = oklab;
        var interpolate_hsx = _hsx;
        var oklch = function(col1, col2, f3) {
          return interpolate_hsx(col1, col2, f3, "oklch");
        };
        interpolator$1.oklch = oklch;
        var Color$6 = Color_1;
        var clip_rgb$1 = utils.clip_rgb;
        var pow$4 = Math.pow;
        var sqrt$1 = Math.sqrt;
        var PI$1 = Math.PI;
        var cos$2 = Math.cos;
        var sin$2 = Math.sin;
        var atan2$1 = Math.atan2;
        var average = function(colors, mode, weights) {
          if (mode === void 0)
            mode = "lrgb";
          if (weights === void 0)
            weights = null;
          var l3 = colors.length;
          if (!weights) {
            weights = Array.from(new Array(l3)).map(function() {
              return 1;
            });
          }
          var k3 = l3 / weights.reduce(function(a3, b2) {
            return a3 + b2;
          });
          weights.forEach(function(w3, i5) {
            weights[i5] *= k3;
          });
          colors = colors.map(function(c3) {
            return new Color$6(c3);
          });
          if (mode === "lrgb") {
            return _average_lrgb(colors, weights);
          }
          var first = colors.shift();
          var xyz = first.get(mode);
          var cnt = [];
          var dx = 0;
          var dy = 0;
          for (var i4 = 0; i4 < xyz.length; i4++) {
            xyz[i4] = (xyz[i4] || 0) * weights[0];
            cnt.push(isNaN(xyz[i4]) ? 0 : weights[0]);
            if (mode.charAt(i4) === "h" && !isNaN(xyz[i4])) {
              var A3 = xyz[i4] / 180 * PI$1;
              dx += cos$2(A3) * weights[0];
              dy += sin$2(A3) * weights[0];
            }
          }
          var alpha = first.alpha() * weights[0];
          colors.forEach(function(c3, ci) {
            var xyz2 = c3.get(mode);
            alpha += c3.alpha() * weights[ci + 1];
            for (var i5 = 0; i5 < xyz.length; i5++) {
              if (!isNaN(xyz2[i5])) {
                cnt[i5] += weights[ci + 1];
                if (mode.charAt(i5) === "h") {
                  var A4 = xyz2[i5] / 180 * PI$1;
                  dx += cos$2(A4) * weights[ci + 1];
                  dy += sin$2(A4) * weights[ci + 1];
                } else {
                  xyz[i5] += xyz2[i5] * weights[ci + 1];
                }
              }
            }
          });
          for (var i$12 = 0; i$12 < xyz.length; i$12++) {
            if (mode.charAt(i$12) === "h") {
              var A$1 = atan2$1(dy / cnt[i$12], dx / cnt[i$12]) / PI$1 * 180;
              while (A$1 < 0) {
                A$1 += 360;
              }
              while (A$1 >= 360) {
                A$1 -= 360;
              }
              xyz[i$12] = A$1;
            } else {
              xyz[i$12] = xyz[i$12] / cnt[i$12];
            }
          }
          alpha /= l3;
          return new Color$6(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
        };
        var _average_lrgb = function(colors, weights) {
          var l3 = colors.length;
          var xyz = [0, 0, 0, 0];
          for (var i4 = 0; i4 < colors.length; i4++) {
            var col = colors[i4];
            var f3 = weights[i4] / l3;
            var rgb2 = col._rgb;
            xyz[0] += pow$4(rgb2[0], 2) * f3;
            xyz[1] += pow$4(rgb2[1], 2) * f3;
            xyz[2] += pow$4(rgb2[2], 2) * f3;
            xyz[3] += rgb2[3] * f3;
          }
          xyz[0] = sqrt$1(xyz[0]);
          xyz[1] = sqrt$1(xyz[1]);
          xyz[2] = sqrt$1(xyz[2]);
          if (xyz[3] > 0.9999999) {
            xyz[3] = 1;
          }
          return new Color$6(clip_rgb$1(xyz));
        };
        var chroma$4 = chroma_1;
        var type$2 = utils.type;
        var pow$3 = Math.pow;
        var scale$2 = function(colors) {
          var _mode = "rgb";
          var _nacol = chroma$4("#ccc");
          var _spread = 0;
          var _domain = [0, 1];
          var _pos = [];
          var _padding = [0, 0];
          var _classes = false;
          var _colors = [];
          var _out = false;
          var _min = 0;
          var _max = 1;
          var _correctLightness = false;
          var _colorCache = {};
          var _useCache = true;
          var _gamma = 1;
          var setColors = function(colors2) {
            colors2 = colors2 || ["#fff", "#000"];
            if (colors2 && type$2(colors2) === "string" && chroma$4.brewer && chroma$4.brewer[colors2.toLowerCase()]) {
              colors2 = chroma$4.brewer[colors2.toLowerCase()];
            }
            if (type$2(colors2) === "array") {
              if (colors2.length === 1) {
                colors2 = [colors2[0], colors2[0]];
              }
              colors2 = colors2.slice(0);
              for (var c3 = 0; c3 < colors2.length; c3++) {
                colors2[c3] = chroma$4(colors2[c3]);
              }
              _pos.length = 0;
              for (var c$1 = 0; c$1 < colors2.length; c$1++) {
                _pos.push(c$1 / (colors2.length - 1));
              }
            }
            resetCache();
            return _colors = colors2;
          };
          var getClass = function(value) {
            if (_classes != null) {
              var n2 = _classes.length - 1;
              var i4 = 0;
              while (i4 < n2 && value >= _classes[i4]) {
                i4++;
              }
              return i4 - 1;
            }
            return 0;
          };
          var tMapLightness = function(t3) {
            return t3;
          };
          var tMapDomain = function(t3) {
            return t3;
          };
          var getColor = function(val, bypassMap) {
            var col, t3;
            if (bypassMap == null) {
              bypassMap = false;
            }
            if (isNaN(val) || val === null) {
              return _nacol;
            }
            if (!bypassMap) {
              if (_classes && _classes.length > 2) {
                var c3 = getClass(val);
                t3 = c3 / (_classes.length - 2);
              } else if (_max !== _min) {
                t3 = (val - _min) / (_max - _min);
              } else {
                t3 = 1;
              }
            } else {
              t3 = val;
            }
            t3 = tMapDomain(t3);
            if (!bypassMap) {
              t3 = tMapLightness(t3);
            }
            if (_gamma !== 1) {
              t3 = pow$3(t3, _gamma);
            }
            t3 = _padding[0] + t3 * (1 - _padding[0] - _padding[1]);
            t3 = Math.min(1, Math.max(0, t3));
            var k3 = Math.floor(t3 * 1e4);
            if (_useCache && _colorCache[k3]) {
              col = _colorCache[k3];
            } else {
              if (type$2(_colors) === "array") {
                for (var i4 = 0; i4 < _pos.length; i4++) {
                  var p3 = _pos[i4];
                  if (t3 <= p3) {
                    col = _colors[i4];
                    break;
                  }
                  if (t3 >= p3 && i4 === _pos.length - 1) {
                    col = _colors[i4];
                    break;
                  }
                  if (t3 > p3 && t3 < _pos[i4 + 1]) {
                    t3 = (t3 - p3) / (_pos[i4 + 1] - p3);
                    col = chroma$4.interpolate(_colors[i4], _colors[i4 + 1], t3, _mode);
                    break;
                  }
                }
              } else if (type$2(_colors) === "function") {
                col = _colors(t3);
              }
              if (_useCache) {
                _colorCache[k3] = col;
              }
            }
            return col;
          };
          var resetCache = function() {
            return _colorCache = {};
          };
          setColors(colors);
          var f3 = function(v3) {
            var c3 = chroma$4(getColor(v3));
            if (_out && c3[_out]) {
              return c3[_out]();
            } else {
              return c3;
            }
          };
          f3.classes = function(classes) {
            if (classes != null) {
              if (type$2(classes) === "array") {
                _classes = classes;
                _domain = [classes[0], classes[classes.length - 1]];
              } else {
                var d3 = chroma$4.analyze(_domain);
                if (classes === 0) {
                  _classes = [d3.min, d3.max];
                } else {
                  _classes = chroma$4.limits(d3, "e", classes);
                }
              }
              return f3;
            }
            return _classes;
          };
          f3.domain = function(domain) {
            if (!arguments.length) {
              return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length - 1];
            _pos = [];
            var k3 = _colors.length;
            if (domain.length === k3 && _min !== _max) {
              for (var i4 = 0, list2 = Array.from(domain); i4 < list2.length; i4 += 1) {
                var d3 = list2[i4];
                _pos.push((d3 - _min) / (_max - _min));
              }
            } else {
              for (var c3 = 0; c3 < k3; c3++) {
                _pos.push(c3 / (k3 - 1));
              }
              if (domain.length > 2) {
                var tOut = domain.map(function(d4, i5) {
                  return i5 / (domain.length - 1);
                });
                var tBreaks = domain.map(function(d4) {
                  return (d4 - _min) / (_max - _min);
                });
                if (!tBreaks.every(function(val, i5) {
                  return tOut[i5] === val;
                })) {
                  tMapDomain = function(t3) {
                    if (t3 <= 0 || t3 >= 1) {
                      return t3;
                    }
                    var i5 = 0;
                    while (t3 >= tBreaks[i5 + 1]) {
                      i5++;
                    }
                    var f4 = (t3 - tBreaks[i5]) / (tBreaks[i5 + 1] - tBreaks[i5]);
                    var out = tOut[i5] + f4 * (tOut[i5 + 1] - tOut[i5]);
                    return out;
                  };
                }
              }
            }
            _domain = [_min, _max];
            return f3;
          };
          f3.mode = function(_m) {
            if (!arguments.length) {
              return _mode;
            }
            _mode = _m;
            resetCache();
            return f3;
          };
          f3.range = function(colors2, _pos2) {
            setColors(colors2);
            return f3;
          };
          f3.out = function(_o) {
            _out = _o;
            return f3;
          };
          f3.spread = function(val) {
            if (!arguments.length) {
              return _spread;
            }
            _spread = val;
            return f3;
          };
          f3.correctLightness = function(v3) {
            if (v3 == null) {
              v3 = true;
            }
            _correctLightness = v3;
            resetCache();
            if (_correctLightness) {
              tMapLightness = function(t3) {
                var L0 = getColor(0, true).lab()[0];
                var L1 = getColor(1, true).lab()[0];
                var pol = L0 > L1;
                var L_actual = getColor(t3, true).lab()[0];
                var L_ideal = L0 + (L1 - L0) * t3;
                var L_diff = L_actual - L_ideal;
                var t0 = 0;
                var t1 = 1;
                var max_iter = 20;
                while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
                  (function() {
                    if (pol) {
                      L_diff *= -1;
                    }
                    if (L_diff < 0) {
                      t0 = t3;
                      t3 += (t1 - t3) * 0.5;
                    } else {
                      t1 = t3;
                      t3 += (t0 - t3) * 0.5;
                    }
                    L_actual = getColor(t3, true).lab()[0];
                    return L_diff = L_actual - L_ideal;
                  })();
                }
                return t3;
              };
            } else {
              tMapLightness = function(t3) {
                return t3;
              };
            }
            return f3;
          };
          f3.padding = function(p3) {
            if (p3 != null) {
              if (type$2(p3) === "number") {
                p3 = [p3, p3];
              }
              _padding = p3;
              return f3;
            } else {
              return _padding;
            }
          };
          f3.colors = function(numColors, out) {
            if (arguments.length < 2) {
              out = "hex";
            }
            var result = [];
            if (arguments.length === 0) {
              result = _colors.slice(0);
            } else if (numColors === 1) {
              result = [f3(0.5)];
            } else if (numColors > 1) {
              var dm = _domain[0];
              var dd = _domain[1] - dm;
              result = __range__(0, numColors, false).map(function(i5) {
                return f3(dm + i5 / (numColors - 1) * dd);
              });
            } else {
              colors = [];
              var samples = [];
              if (_classes && _classes.length > 2) {
                for (var i4 = 1, end = _classes.length, asc = 1 <= end; asc ? i4 < end : i4 > end; asc ? i4++ : i4--) {
                  samples.push((_classes[i4 - 1] + _classes[i4]) * 0.5);
                }
              } else {
                samples = _domain;
              }
              result = samples.map(function(v3) {
                return f3(v3);
              });
            }
            if (chroma$4[out]) {
              result = result.map(function(c3) {
                return c3[out]();
              });
            }
            return result;
          };
          f3.cache = function(c3) {
            if (c3 != null) {
              _useCache = c3;
              return f3;
            } else {
              return _useCache;
            }
          };
          f3.gamma = function(g4) {
            if (g4 != null) {
              _gamma = g4;
              return f3;
            } else {
              return _gamma;
            }
          };
          f3.nodata = function(d3) {
            if (d3 != null) {
              _nacol = chroma$4(d3);
              return f3;
            } else {
              return _nacol;
            }
          };
          return f3;
        };
        function __range__(left, right, inclusive) {
          var range = [];
          var ascending = left < right;
          var end = !inclusive ? right : ascending ? right + 1 : right - 1;
          for (var i4 = left; ascending ? i4 < end : i4 > end; ascending ? i4++ : i4--) {
            range.push(i4);
          }
          return range;
        }
        var Color$5 = Color_1;
        var scale$1 = scale$2;
        var binom_row = function(n2) {
          var row = [1, 1];
          for (var i4 = 1; i4 < n2; i4++) {
            var newrow = [1];
            for (var j3 = 1; j3 <= row.length; j3++) {
              newrow[j3] = (row[j3] || 0) + row[j3 - 1];
            }
            row = newrow;
          }
          return row;
        };
        var bezier = function(colors) {
          var assign, assign$1, assign$2;
          var I3, lab0, lab1, lab2;
          colors = colors.map(function(c3) {
            return new Color$5(c3);
          });
          if (colors.length === 2) {
            assign = colors.map(function(c3) {
              return c3.lab();
            }), lab0 = assign[0], lab1 = assign[1];
            I3 = function(t3) {
              var lab4 = [0, 1, 2].map(function(i4) {
                return lab0[i4] + t3 * (lab1[i4] - lab0[i4]);
              });
              return new Color$5(lab4, "lab");
            };
          } else if (colors.length === 3) {
            assign$1 = colors.map(function(c3) {
              return c3.lab();
            }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];
            I3 = function(t3) {
              var lab4 = [0, 1, 2].map(function(i4) {
                return (1 - t3) * (1 - t3) * lab0[i4] + 2 * (1 - t3) * t3 * lab1[i4] + t3 * t3 * lab2[i4];
              });
              return new Color$5(lab4, "lab");
            };
          } else if (colors.length === 4) {
            var lab3;
            assign$2 = colors.map(function(c3) {
              return c3.lab();
            }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];
            I3 = function(t3) {
              var lab4 = [0, 1, 2].map(function(i4) {
                return (1 - t3) * (1 - t3) * (1 - t3) * lab0[i4] + 3 * (1 - t3) * (1 - t3) * t3 * lab1[i4] + 3 * (1 - t3) * t3 * t3 * lab2[i4] + t3 * t3 * t3 * lab3[i4];
              });
              return new Color$5(lab4, "lab");
            };
          } else if (colors.length >= 5) {
            var labs, row, n2;
            labs = colors.map(function(c3) {
              return c3.lab();
            });
            n2 = colors.length - 1;
            row = binom_row(n2);
            I3 = function(t3) {
              var u3 = 1 - t3;
              var lab4 = [0, 1, 2].map(function(i4) {
                return labs.reduce(function(sum, el, j3) {
                  return sum + row[j3] * Math.pow(u3, n2 - j3) * Math.pow(t3, j3) * el[i4];
                }, 0);
              });
              return new Color$5(lab4, "lab");
            };
          } else {
            throw new RangeError("No point in running bezier with only one color.");
          }
          return I3;
        };
        var bezier_1 = function(colors) {
          var f3 = bezier(colors);
          f3.scale = function() {
            return scale$1(f3);
          };
          return f3;
        };
        var chroma$3 = chroma_1;
        var blend = function(bottom, top, mode) {
          if (!blend[mode]) {
            throw new Error("unknown blend mode " + mode);
          }
          return blend[mode](bottom, top);
        };
        var blend_f = function(f3) {
          return function(bottom, top) {
            var c0 = chroma$3(top).rgb();
            var c1 = chroma$3(bottom).rgb();
            return chroma$3.rgb(f3(c0, c1));
          };
        };
        var each = function(f3) {
          return function(c0, c1) {
            var out = [];
            out[0] = f3(c0[0], c1[0]);
            out[1] = f3(c0[1], c1[1]);
            out[2] = f3(c0[2], c1[2]);
            return out;
          };
        };
        var normal = function(a3) {
          return a3;
        };
        var multiply = function(a3, b2) {
          return a3 * b2 / 255;
        };
        var darken = function(a3, b2) {
          return a3 > b2 ? b2 : a3;
        };
        var lighten = function(a3, b2) {
          return a3 > b2 ? a3 : b2;
        };
        var screen = function(a3, b2) {
          return 255 * (1 - (1 - a3 / 255) * (1 - b2 / 255));
        };
        var overlay = function(a3, b2) {
          return b2 < 128 ? 2 * a3 * b2 / 255 : 255 * (1 - 2 * (1 - a3 / 255) * (1 - b2 / 255));
        };
        var burn = function(a3, b2) {
          return 255 * (1 - (1 - b2 / 255) / (a3 / 255));
        };
        var dodge = function(a3, b2) {
          if (a3 === 255) {
            return 255;
          }
          a3 = 255 * (b2 / 255) / (1 - a3 / 255);
          return a3 > 255 ? 255 : a3;
        };
        blend.normal = blend_f(each(normal));
        blend.multiply = blend_f(each(multiply));
        blend.screen = blend_f(each(screen));
        blend.overlay = blend_f(each(overlay));
        blend.darken = blend_f(each(darken));
        blend.lighten = blend_f(each(lighten));
        blend.dodge = blend_f(each(dodge));
        blend.burn = blend_f(each(burn));
        var blend_1 = blend;
        var type$1 = utils.type;
        var clip_rgb = utils.clip_rgb;
        var TWOPI = utils.TWOPI;
        var pow$2 = Math.pow;
        var sin$1 = Math.sin;
        var cos$1 = Math.cos;
        var chroma$2 = chroma_1;
        var cubehelix = function(start, rotations, hue, gamma, lightness) {
          if (start === void 0)
            start = 300;
          if (rotations === void 0)
            rotations = -1.5;
          if (hue === void 0)
            hue = 1;
          if (gamma === void 0)
            gamma = 1;
          if (lightness === void 0)
            lightness = [0, 1];
          var dh = 0, dl;
          if (type$1(lightness) === "array") {
            dl = lightness[1] - lightness[0];
          } else {
            dl = 0;
            lightness = [lightness, lightness];
          }
          var f3 = function(fract) {
            var a3 = TWOPI * ((start + 120) / 360 + rotations * fract);
            var l3 = pow$2(lightness[0] + dl * fract, gamma);
            var h3 = dh !== 0 ? hue[0] + fract * dh : hue;
            var amp = h3 * l3 * (1 - l3) / 2;
            var cos_a = cos$1(a3);
            var sin_a = sin$1(a3);
            var r3 = l3 + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
            var g4 = l3 + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
            var b2 = l3 + amp * (1.97294 * cos_a);
            return chroma$2(clip_rgb([r3 * 255, g4 * 255, b2 * 255, 1]));
          };
          f3.start = function(s3) {
            if (s3 == null) {
              return start;
            }
            start = s3;
            return f3;
          };
          f3.rotations = function(r3) {
            if (r3 == null) {
              return rotations;
            }
            rotations = r3;
            return f3;
          };
          f3.gamma = function(g4) {
            if (g4 == null) {
              return gamma;
            }
            gamma = g4;
            return f3;
          };
          f3.hue = function(h3) {
            if (h3 == null) {
              return hue;
            }
            hue = h3;
            if (type$1(hue) === "array") {
              dh = hue[1] - hue[0];
              if (dh === 0) {
                hue = hue[1];
              }
            } else {
              dh = 0;
            }
            return f3;
          };
          f3.lightness = function(h3) {
            if (h3 == null) {
              return lightness;
            }
            if (type$1(h3) === "array") {
              lightness = h3;
              dl = h3[1] - h3[0];
            } else {
              lightness = [h3, h3];
              dl = 0;
            }
            return f3;
          };
          f3.scale = function() {
            return chroma$2.scale(f3);
          };
          f3.hue(hue);
          return f3;
        };
        var Color$4 = Color_1;
        var digits = "0123456789abcdef";
        var floor$1 = Math.floor;
        var random = Math.random;
        var random_1 = function() {
          var code = "#";
          for (var i4 = 0; i4 < 6; i4++) {
            code += digits.charAt(floor$1(random() * 16));
          }
          return new Color$4(code, "hex");
        };
        var type = type$p;
        var log = Math.log;
        var pow$1 = Math.pow;
        var floor = Math.floor;
        var abs$1 = Math.abs;
        var analyze = function(data, key2) {
          if (key2 === void 0)
            key2 = null;
          var r3 = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0
          };
          if (type(data) === "object") {
            data = Object.values(data);
          }
          data.forEach(function(val) {
            if (key2 && type(val) === "object") {
              val = val[key2];
            }
            if (val !== void 0 && val !== null && !isNaN(val)) {
              r3.values.push(val);
              r3.sum += val;
              if (val < r3.min) {
                r3.min = val;
              }
              if (val > r3.max) {
                r3.max = val;
              }
              r3.count += 1;
            }
          });
          r3.domain = [r3.min, r3.max];
          r3.limits = function(mode, num2) {
            return limits(r3, mode, num2);
          };
          return r3;
        };
        var limits = function(data, mode, num2) {
          if (mode === void 0)
            mode = "equal";
          if (num2 === void 0)
            num2 = 7;
          if (type(data) == "array") {
            data = analyze(data);
          }
          var min2 = data.min;
          var max2 = data.max;
          var values = data.values.sort(function(a3, b2) {
            return a3 - b2;
          });
          if (num2 === 1) {
            return [min2, max2];
          }
          var limits2 = [];
          if (mode.substr(0, 1) === "c") {
            limits2.push(min2);
            limits2.push(max2);
          }
          if (mode.substr(0, 1) === "e") {
            limits2.push(min2);
            for (var i4 = 1; i4 < num2; i4++) {
              limits2.push(min2 + i4 / num2 * (max2 - min2));
            }
            limits2.push(max2);
          } else if (mode.substr(0, 1) === "l") {
            if (min2 <= 0) {
              throw new Error("Logarithmic scales are only possible for values > 0");
            }
            var min_log = Math.LOG10E * log(min2);
            var max_log = Math.LOG10E * log(max2);
            limits2.push(min2);
            for (var i$12 = 1; i$12 < num2; i$12++) {
              limits2.push(pow$1(10, min_log + i$12 / num2 * (max_log - min_log)));
            }
            limits2.push(max2);
          } else if (mode.substr(0, 1) === "q") {
            limits2.push(min2);
            for (var i$2 = 1; i$2 < num2; i$2++) {
              var p3 = (values.length - 1) * i$2 / num2;
              var pb = floor(p3);
              if (pb === p3) {
                limits2.push(values[pb]);
              } else {
                var pr = p3 - pb;
                limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
              }
            }
            limits2.push(max2);
          } else if (mode.substr(0, 1) === "k") {
            var cluster;
            var n2 = values.length;
            var assignments = new Array(n2);
            var clusterSizes = new Array(num2);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;
            centroids = [];
            centroids.push(min2);
            for (var i$3 = 1; i$3 < num2; i$3++) {
              centroids.push(min2 + i$3 / num2 * (max2 - min2));
            }
            centroids.push(max2);
            while (repeat) {
              for (var j3 = 0; j3 < num2; j3++) {
                clusterSizes[j3] = 0;
              }
              for (var i$4 = 0; i$4 < n2; i$4++) {
                var value = values[i$4];
                var mindist = Number.MAX_VALUE;
                var best = void 0;
                for (var j$1 = 0; j$1 < num2; j$1++) {
                  var dist = abs$1(centroids[j$1] - value);
                  if (dist < mindist) {
                    mindist = dist;
                    best = j$1;
                  }
                  clusterSizes[best]++;
                  assignments[i$4] = best;
                }
              }
              var newCentroids = new Array(num2);
              for (var j$2 = 0; j$2 < num2; j$2++) {
                newCentroids[j$2] = null;
              }
              for (var i$5 = 0; i$5 < n2; i$5++) {
                cluster = assignments[i$5];
                if (newCentroids[cluster] === null) {
                  newCentroids[cluster] = values[i$5];
                } else {
                  newCentroids[cluster] += values[i$5];
                }
              }
              for (var j$3 = 0; j$3 < num2; j$3++) {
                newCentroids[j$3] *= 1 / clusterSizes[j$3];
              }
              repeat = false;
              for (var j$4 = 0; j$4 < num2; j$4++) {
                if (newCentroids[j$4] !== centroids[j$4]) {
                  repeat = true;
                  break;
                }
              }
              centroids = newCentroids;
              nb_iters++;
              if (nb_iters > 200) {
                repeat = false;
              }
            }
            var kClusters = {};
            for (var j$5 = 0; j$5 < num2; j$5++) {
              kClusters[j$5] = [];
            }
            for (var i$6 = 0; i$6 < n2; i$6++) {
              cluster = assignments[i$6];
              kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6 = 0; j$6 < num2; j$6++) {
              tmpKMeansBreaks.push(kClusters[j$6][0]);
              tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a3, b2) {
              return a3 - b2;
            });
            limits2.push(tmpKMeansBreaks[0]);
            for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
              var v3 = tmpKMeansBreaks[i$7];
              if (!isNaN(v3) && limits2.indexOf(v3) === -1) {
                limits2.push(v3);
              }
            }
          }
          return limits2;
        };
        var analyze_1 = { analyze, limits };
        var Color$3 = Color_1;
        var contrast = function(a3, b2) {
          a3 = new Color$3(a3);
          b2 = new Color$3(b2);
          var l1 = a3.luminance();
          var l22 = b2.luminance();
          return l1 > l22 ? (l1 + 0.05) / (l22 + 0.05) : (l22 + 0.05) / (l1 + 0.05);
        };
        var Color$2 = Color_1;
        var sqrt = Math.sqrt;
        var pow = Math.pow;
        var min = Math.min;
        var max = Math.max;
        var atan2 = Math.atan2;
        var abs = Math.abs;
        var cos = Math.cos;
        var sin = Math.sin;
        var exp = Math.exp;
        var PI = Math.PI;
        var deltaE = function(a3, b2, Kl, Kc, Kh) {
          if (Kl === void 0)
            Kl = 1;
          if (Kc === void 0)
            Kc = 1;
          if (Kh === void 0)
            Kh = 1;
          var rad2deg = function(rad) {
            return 360 * rad / (2 * PI);
          };
          var deg2rad = function(deg) {
            return 2 * PI * deg / 360;
          };
          a3 = new Color$2(a3);
          b2 = new Color$2(b2);
          var ref = Array.from(a3.lab());
          var L1 = ref[0];
          var a1 = ref[1];
          var b1 = ref[2];
          var ref$1 = Array.from(b2.lab());
          var L22 = ref$1[0];
          var a22 = ref$1[1];
          var b22 = ref$1[2];
          var avgL = (L1 + L22) / 2;
          var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
          var C22 = sqrt(pow(a22, 2) + pow(b22, 2));
          var avgC = (C1 + C22) / 2;
          var G2 = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
          var a1p = a1 * (1 + G2);
          var a2p = a22 * (1 + G2);
          var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
          var C2p = sqrt(pow(a2p, 2) + pow(b22, 2));
          var avgCp = (C1p + C2p) / 2;
          var arctan1 = rad2deg(atan2(b1, a1p));
          var arctan2 = rad2deg(atan2(b22, a2p));
          var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
          var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
          var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
          var T4 = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
          var deltaHp = h2p - h1p;
          deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
          deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
          var deltaL = L22 - L1;
          var deltaCp = C2p - C1p;
          var sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
          var sc = 1 + 0.045 * avgCp;
          var sh = 1 + 0.015 * avgCp * T4;
          var deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
          var Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
          var Rt = -Rc * sin(2 * deg2rad(deltaTheta));
          var result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
          return max(0, min(100, result));
        };
        var Color$1 = Color_1;
        var distance = function(a3, b2, mode) {
          if (mode === void 0)
            mode = "lab";
          a3 = new Color$1(a3);
          b2 = new Color$1(b2);
          var l1 = a3.get(mode);
          var l22 = b2.get(mode);
          var sum_sq = 0;
          for (var i4 in l1) {
            var d3 = (l1[i4] || 0) - (l22[i4] || 0);
            sum_sq += d3 * d3;
          }
          return Math.sqrt(sum_sq);
        };
        var Color = Color_1;
        var valid = function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          try {
            new (Function.prototype.bind.apply(Color, [null].concat(args)))();
            return true;
          } catch (e3) {
            return false;
          }
        };
        var chroma$1 = chroma_1;
        var scale = scale$2;
        var scales = {
          cool: function cool() {
            return scale([chroma$1.hsl(180, 1, 0.9), chroma$1.hsl(250, 0.7, 0.4)]);
          },
          hot: function hot() {
            return scale(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
          }
        };
        var colorbrewer = {
          // sequential
          OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
          PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
          BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
          Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
          BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
          YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
          YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
          Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
          RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
          Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
          YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
          Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
          GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
          Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
          YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
          PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
          Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
          PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
          Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
          // diverging
          Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
          RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
          RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
          PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
          PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
          RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
          BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
          RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
          PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
          // qualitative
          Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
          Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
          Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
          Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
          Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
          Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
          Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
          Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
        };
        for (var i3 = 0, list = Object.keys(colorbrewer); i3 < list.length; i3 += 1) {
          var key = list[i3];
          colorbrewer[key.toLowerCase()] = colorbrewer[key];
        }
        var colorbrewer_1 = colorbrewer;
        var chroma2 = chroma_1;
        chroma2.average = average;
        chroma2.bezier = bezier_1;
        chroma2.blend = blend_1;
        chroma2.cubehelix = cubehelix;
        chroma2.mix = chroma2.interpolate = mix$1;
        chroma2.random = random_1;
        chroma2.scale = scale$2;
        chroma2.analyze = analyze_1.analyze;
        chroma2.contrast = contrast;
        chroma2.deltaE = deltaE;
        chroma2.distance = distance;
        chroma2.limits = analyze_1.limits;
        chroma2.valid = valid;
        chroma2.scales = scales;
        chroma2.colors = w3cx11_1;
        chroma2.brewer = colorbrewer_1;
        var chroma_js = chroma2;
        return chroma_js;
      });
    }
  });

  // src/components/ColorPickerSidebar.tsx
  var import_lodash, import_chroma_js, ColorPicker, ColorPickerSidebar_default;
  var init_ColorPickerSidebar = __esm({
    "src/components/ColorPickerSidebar.tsx"() {
      "use strict";
      init_preact_module();
      init_compat_module();
      import_lodash = __toESM(require_lodash());
      import_chroma_js = __toESM(require_chroma());
      init_Icon();
      ColorPicker = ({
        palettes,
        selectionColors,
        pageColors,
        addSeedColor
      }) => {
        const [colorInput, setColorInput] = p2("");
        const handleInputChange = (e3) => {
          let input = e3.target.value;
          setColorInput(input);
        };
        const handleColorSubmit = () => {
          console.log(colorInput);
        };
        pageColors = import_lodash.default.without(pageColors, ...selectionColors);
        pageColors = import_lodash.default.sortBy(pageColors, (color) => {
          return (0, import_chroma_js.default)(color).hsl()[0];
        });
        const colorIsSaved = (color) => {
          let seedColorsToCompare = import_lodash.default.map(palettes, (palette) => {
            return palette.swatches[palette.sourceColorIndex].hex;
          });
          return import_lodash.default.includes(seedColorsToCompare, color);
        };
        const sideBarStyles = {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflowX: "auto"
        };
        const colorPickerStyles = {
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          paddingTop: "1rem"
        };
        const seedListStyles = {
          display: "flex",
          flexDirection: "column",
          gap: ".125rem",
          padding: "0 .75rem"
        };
        const sectionHeadingStyles = {
          fontSize: ".75rem",
          padding: ".375rem 1rem 0"
        };
        const colorInputSectionStyles = {
          display: "flex",
          background: "white",
          flexDirection: "column",
          bottom: 0,
          position: "sticky",
          paddingBottom: "1rem"
        };
        const inputWrapperStyles = {
          position: "relative",
          margin: ".25rem 1rem 0",
          background: "#EEEEEE",
          border: "#CCCCCC solid 1px",
          borderRadius: ".375rem",
          display: "flex",
          flexDirection: "row"
        };
        const inputFieldStyles = {
          padding: ".5rem",
          flex: 1,
          background: "none",
          border: "none",
          boxSizing: "border-box"
        };
        const inputButtonStyles = {
          background: "none",
          color: "black"
        };
        const seedColorStyles = (hoverState) => {
          return {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: ".125rem 1rem .125rem .25rem",
            borderRadius: "1rem",
            transition: "all linear .1s",
            cursor: "pointer",
            background: hoverState ? "rgba(12, 142, 241,.1)" : "rgba(12, 142, 241,0)"
          };
        };
        const colorDotStyles = (color) => {
          return {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "1.25rem",
            height: "1.25rem",
            borderRadius: "50%",
            border: "#EEEEEE solid 1px",
            background: color,
            color: import_chroma_js.default.contrast(color, "white") > 4.5 ? "white" : "black",
            cursor: "pointer"
          };
        };
        const colorHexStyles = {
          padding: "0.25rem .75rem",
          fontFamily: "Fira Mono",
          fontSize: ".75rem",
          textTransform: "uppercase",
          flex: 1,
          cursor: "pointer"
        };
        const SeedButton = ({ color }) => {
          const [hoverState, setHoverState] = p2(false);
          return /* @__PURE__ */ y(
            "div",
            {
              className: "seed-color",
              style: seedColorStyles(hoverState),
              onClick: () => addSeedColor(color),
              onMouseEnter: () => setHoverState(true),
              onMouseLeave: () => setHoverState(false)
            },
            /* @__PURE__ */ y("div", { style: colorDotStyles(color) }, colorIsSaved(color) && /* @__PURE__ */ y(Icon_default, { type: "check" })),
            /* @__PURE__ */ y("div", { style: colorHexStyles }, color),
            /* @__PURE__ */ y(Icon_default, { type: "right-arrow", iconColor: "rgb(12, 142, 241)" })
          );
        };
        return /* @__PURE__ */ y("div", { style: sideBarStyles }, /* @__PURE__ */ y("div", { className: "color-picker", style: colorPickerStyles }, /* @__PURE__ */ y(
          "span",
          {
            style: { fontSize: "1rem", fontWeight: "700", padding: "0 1rem" }
          },
          "Choose a seed color"
        ), /* @__PURE__ */ y("span", { style: sectionHeadingStyles }, "From my current selection"), /* @__PURE__ */ y("div", { className: "color-picker__selection-list", style: seedListStyles }, import_lodash.default.map(selectionColors, (color) => {
          return /* @__PURE__ */ y(SeedButton, { color });
        })), /* @__PURE__ */ y("span", { style: sectionHeadingStyles }, "From this file"), /* @__PURE__ */ y("div", { className: "color-picker__selection-list", style: seedListStyles }, import_lodash.default.map(pageColors, (color) => {
          return /* @__PURE__ */ y(SeedButton, { color });
        })), /* @__PURE__ */ y("div", { style: colorInputSectionStyles }, /* @__PURE__ */ y("span", { style: sectionHeadingStyles }, "From this file"), /* @__PURE__ */ y("div", { className: "color-picker__input-field" }, /* @__PURE__ */ y("div", { style: inputWrapperStyles }, /* @__PURE__ */ y(
          "input",
          {
            type: "text",
            placeholder: "#FF0000",
            value: colorInput,
            onChange: handleInputChange,
            style: inputFieldStyles
          }
        ), /* @__PURE__ */ y(
          "button",
          {
            style: inputButtonStyles,
            className: "color-picker__submit-button",
            onClick: handleColorSubmit
          },
          /* @__PURE__ */ y(Icon_default, { type: "right-arrow", iconColor: "rgb(12, 142, 241)" })
        ))))));
      };
      ColorPickerSidebar_default = ColorPicker;
    }
  });

  // src/components/PalettesList.tsx
  var import_lodash2, PalettesList, PalettesList_default;
  var init_PalettesList = __esm({
    "src/components/PalettesList.tsx"() {
      "use strict";
      init_preact_module();
      import_lodash2 = __toESM(require_lodash());
      init_Button();
      PalettesList = ({ palettes, removeSeedColor, editPalette }) => {
        const paletteListWrapperStyles = {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflowX: "auto"
        };
        const PalettesListStyles = {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "1rem"
        };
        const headerStyles2 = {
          display: "flex",
          flexDirection: "row",
          padding: ".75rem"
        };
        const titleAreaStyles = (seedDisplayColor) => {
          return {
            flex: 1,
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            gap: ".125rem",
            color: seedDisplayColor
          };
        };
        const actionAreaStyles = {
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          alignItems: "center"
        };
        const ColorBlockStyles = (palette) => {
          return {
            width: "100%",
            background: palette.swatches[palette.sourceColorIndex].hex,
            borderRadius: ".375rem",
            overflow: "hidden"
          };
        };
        const gradientStyles = {
          display: "flex",
          flexDirection: "row"
        };
        const swatchStyles = (swatch) => {
          return {
            flex: 1,
            backgroundColor: swatch.variableColor,
            color: swatch.displayColor === "black" ? "black" : "white"
          };
        };
        return /* @__PURE__ */ y("div", { className: "palette-list-wrapper", style: paletteListWrapperStyles }, /* @__PURE__ */ y("div", { className: "palette-list", style: PalettesListStyles }, import_lodash2.default.map(palettes, (palette, index) => {
          let paletteSwatches = import_lodash2.default.orderBy(palette.swatches, (swatch) => {
            return 0 + swatch.contrastWhite;
          });
          let seedDisplayColor = palette.swatches[palette.sourceColorIndex].displayColor;
          return /* @__PURE__ */ y(
            "div",
            {
              className: "color-block",
              style: ColorBlockStyles(palette),
              onClick: () => editPalette(index)
            },
            /* @__PURE__ */ y("div", { className: "color-block__header", style: headerStyles2 }, /* @__PURE__ */ y(
              "div",
              {
                className: "color-block__title-area",
                style: titleAreaStyles(seedDisplayColor)
              },
              /* @__PURE__ */ y(
                "span",
                {
                  style: {
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily: "Fira Mono"
                  }
                },
                palette.name
              ),
              /* @__PURE__ */ y("span", { style: { fontSize: ".75rem" } }, "Primary Shade:", /* @__PURE__ */ y(
                "span",
                {
                  style: {
                    fontFamily: "Fira Mono",
                    textTransform: "uppercase",
                    marginLeft: ".25rem"
                  }
                },
                palette.swatches[palette.sourceColorIndex].hex
              ))
            ), /* @__PURE__ */ y(
              "div",
              {
                className: "color-block__header-actions",
                style: actionAreaStyles
              },
              /* @__PURE__ */ y(
                Button_default,
                {
                  buttonType: "primary",
                  lightDark: seedDisplayColor === "white" ? "light" : "dark",
                  iconType: "pencil",
                  text: "Edit",
                  onClick: null
                }
              ),
              /* @__PURE__ */ y(
                Button_default,
                {
                  buttonType: "secondary",
                  lightDark: seedDisplayColor === "white" ? "light" : "dark",
                  iconType: "trash",
                  text: "Delete",
                  onClick: (e3) => {
                    e3.stopPropagation();
                    removeSeedColor(
                      palette.swatches[palette.sourceColorIndex].hex
                    );
                  }
                }
              )
            )),
            /* @__PURE__ */ y("div", { className: "color-block__gradient", style: gradientStyles }, import_lodash2.default.map(paletteSwatches, (swatch, index2) => {
              return /* @__PURE__ */ y(
                "div",
                {
                  className: "color-block__swatch",
                  style: swatchStyles(swatch)
                },
                /* @__PURE__ */ y(
                  "p",
                  {
                    style: {
                      color: swatch.displayColor === "white" ? "white" : "black",
                      textAlign: "center",
                      fontFamily: "Fira Mono"
                    }
                  },
                  (index2 + 1).toFixed(0).padStart(2, "0")
                ),
                /* @__PURE__ */ y("p", { style: { color: "limegreen" } }, swatch.hex != swatch.variableColor && /* @__PURE__ */ y(g, null, "XX"))
              );
            }))
          );
        })));
      };
      PalettesList_default = PalettesList;
    }
  });

  // src/views/Palettes.tsx
  var modalHeaderStyles, modalMainAreaStyles, modalSidebarStyles, modalMainColumnStyles, modalBodyStyles, modalFooterStyles, footerActionsLeftStyles, footerActionsRightStyles, Palettes, Palettes_default;
  var init_Palettes = __esm({
    "src/views/Palettes.tsx"() {
      "use strict";
      init_preact_module();
      init_Header();
      init_ColorPickerSidebar();
      init_PalettesList();
      init_Button();
      modalHeaderStyles = {
        position: "relative",
        width: "100%",
        height: "80px",
        borderBottom: "#EEE solid 1px"
      };
      modalMainAreaStyles = {
        flexGrow: 1,
        display: "flex"
      };
      modalSidebarStyles = {
        position: "relative",
        width: "14rem",
        borderRight: "#EEE solid 1px"
      };
      modalMainColumnStyles = {
        display: "flex",
        flexDirection: "column",
        flex: 1
      };
      modalBodyStyles = {
        position: "relative",
        flex: 1,
        borderBottom: "#EEE solid 1px"
      };
      modalFooterStyles = {
        display: "flex",
        flexDirection: "row"
      };
      footerActionsLeftStyles = {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        gap: ".5rem"
      };
      footerActionsRightStyles = {
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        gap: ".5rem",
        alignItems: "center"
      };
      Palettes = ({
        fileName,
        palettes,
        selectionColors,
        pageColors,
        updateConfig,
        addSeedColor,
        removeSeedColor,
        resetData,
        setCurrentView,
        editPalette
      }) => {
        return /* @__PURE__ */ y(g, null, /* @__PURE__ */ y("div", { className: "modal__header", style: modalHeaderStyles }, /* @__PURE__ */ y(
          Header_default,
          {
            fileName,
            resetData,
            updateConfig,
            palettes
          }
        )), /* @__PURE__ */ y("div", { className: "modal__main-area", style: modalMainAreaStyles }, /* @__PURE__ */ y("div", { className: "modal__sidebar", style: modalSidebarStyles }, /* @__PURE__ */ y(
          ColorPickerSidebar_default,
          {
            palettes,
            selectionColors,
            pageColors,
            addSeedColor
          }
        )), /* @__PURE__ */ y("div", { className: "modal__main-column", style: modalMainColumnStyles }, /* @__PURE__ */ y("div", { className: "modal__body", style: modalBodyStyles }, /* @__PURE__ */ y(
          PalettesList_default,
          {
            palettes,
            removeSeedColor,
            editPalette
          }
        )), /* @__PURE__ */ y("div", { className: "modal__footer", style: modalFooterStyles }, /* @__PURE__ */ y(
          "div",
          {
            className: "footer-actions__left",
            style: footerActionsLeftStyles
          },
          /* @__PURE__ */ y(
            Button_default,
            {
              buttonType: "color",
              iconType: "code",
              text: "Get Tokens",
              onClick: () => setCurrentView("tokens")
            }
          ),
          /* @__PURE__ */ y(
            Button_default,
            {
              buttonType: "color",
              iconType: "component",
              text: "Generate Style Guide",
              onClick: null
            }
          )
        ), /* @__PURE__ */ y(
          "div",
          {
            className: "footer-actions__right",
            style: footerActionsRightStyles
          },
          /* @__PURE__ */ y("span", { style: { fontStyle: "italic" } }, "Palettes saved to variablesXXX"),
          /* @__PURE__ */ y(
            Button_default,
            {
              buttonType: "secondary",
              iconType: "variable",
              text: "Delete color variables",
              onClick: null
            }
          )
        )))));
      };
      Palettes_default = Palettes;
    }
  });

  // src/components/Text.tsx
  var Text, Text_default;
  var init_Text = __esm({
    "src/components/Text.tsx"() {
      "use strict";
      init_preact_module();
      Text = ({
        children,
        className,
        style,
        type = "text",
        size = "small",
        inline = false
      }) => {
        const buildClassName = `text-element ${className}`;
        const fontSizes = {
          text: {
            small: ".75rem",
            medium: "1rem",
            large: "1.25rem"
          },
          heading: {
            small: "1rem",
            medium: "1.25rem",
            large: "1.5rem"
          }
        };
        const defaultStyles = {
          fontSize: fontSizes[type][size],
          display: inline ? "inline" : "block",
          lineHeight: "150%"
        };
        return /* @__PURE__ */ y("span", { className: buildClassName, style: __spreadValues(__spreadValues({}, defaultStyles), style) }, children);
      };
      Text_default = Text;
    }
  });

  // src/views/Edit.tsx
  var import_lodash3, tabContainerStyles, Tab, Edit, Edit_default;
  var init_Edit = __esm({
    "src/views/Edit.tsx"() {
      "use strict";
      init_preact_module();
      init_compat_module();
      import_lodash3 = __toESM(require_lodash());
      init_Button();
      init_Icon();
      init_Text();
      tabContainerStyles = {
        display: "flex",
        flexDirection: "row",
        gap: "1px",
        paddingLeft: "1px"
      };
      Tab = ({ tabColor, textColor, props, setSelectedTab, children }) => {
        const tabStyles = {
          background: tabColor,
          color: textColor,
          fontSize: ".75rem",
          fontWeight: 700,
          flex: 1,
          borderColor: "rgba(0,0,0,.2)",
          borderStyle: "solid",
          borderWidth: "1px 1px 0 1px",
          borderRadius: ".375rem .375rem 0 0"
        };
        console.log(children);
        return /* @__PURE__ */ y("button", { style: tabStyles }, children);
      };
      Edit = ({ palettes, selectedPalette, setCurrentView }) => {
        console.log(selectedPalette);
        const editContainerStyles = {
          flex: 1,
          display: "flex",
          flexDirection: "row"
        };
        const editSidebarStyles = {
          display: "flex",
          flexDirection: "column",
          width: "14rem",
          borderRight: "#EEE solid 1px"
        };
        const editBodyStyles = {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "1rem"
        };
        const demoContainerStyles = {
          display: "flex",
          flexDirection: "row",
          flex: 1
        };
        const colorGradientWrapperStyles = {
          display: "flex",
          flexDirection: "column",
          width: "14rem",
          borderRadius: ".375rem 0 0 .375rem",
          overflow: "hidden"
        };
        const colorGradientHeaderStyles = (palette) => {
          let sourceColor = palette.swatches[palette.sourceColorIndex].hex;
          return {
            background: sourceColor,
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            padding: "1rem"
          };
        };
        const colorNameStyles = {
          fontSize: "1.25rem",
          fontWeight: 700
        };
        const colorHexStyles = {
          fontFamily: "Fira Mono",
          fontSize: "1rem"
        };
        const colorTableRowStyles = {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontFamily: "Fira Mono",
          textAlign: "center",
          lineHeight: 0.875,
          flex: 1
        };
        const exampleContainerStyles = {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          borderRadius: " 0 .375rem .375rem 0",
          borderColor: "#DDDDDD",
          borderStyle: "solid"
          // borderWidth: "1px 1px 1px 0",
        };
        const exampleContentWrapperStyles = {
          flex: 1,
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          borderColor: "#DDDDDD",
          borderStyle: "solid",
          borderWidth: "0 1px 1px 0",
          borderRadius: "0 0 .375rem 0"
        };
        const [selectedTab, setSelectedTab] = p2(0);
        return /* @__PURE__ */ y(g, null, /* @__PURE__ */ y("div", { style: editContainerStyles }, /* @__PURE__ */ y("div", { style: editSidebarStyles }, /* @__PURE__ */ y("div", { style: { padding: "1rem" } }, /* @__PURE__ */ y(
          Button_default,
          {
            buttonType: "secondary",
            text: "Back to palettes",
            onClick: () => setCurrentView("palettes")
          }
        ))), /* @__PURE__ */ y("div", { style: editBodyStyles }, /* @__PURE__ */ y("div", { style: demoContainerStyles }, /* @__PURE__ */ y("div", { style: colorGradientWrapperStyles }, /* @__PURE__ */ y("div", { style: colorGradientHeaderStyles(selectedPalette) }, /* @__PURE__ */ y("span", { style: colorNameStyles }, selectedPalette.name), /* @__PURE__ */ y("span", { style: colorHexStyles }, selectedPalette.swatches[selectedPalette.sourceColorIndex].hex)), /* @__PURE__ */ y(
          "div",
          {
            style: __spreadProps(__spreadValues({}, colorTableRowStyles), {
              background: "black",
              color: "white"
            })
          },
          /* @__PURE__ */ y("div", { style: { flex: 1 } }, "index"),
          /* @__PURE__ */ y("div", { style: { flex: 1 } }, "Black Contrast"),
          /* @__PURE__ */ y("div", { style: { flex: 1 } }, "White Contrast")
        ), import_lodash3.default.map(selectedPalette.swatches, (swatch, index) => {
          return /* @__PURE__ */ y(
            "div",
            {
              style: __spreadProps(__spreadValues({}, colorTableRowStyles), { background: swatch.hex })
            },
            /* @__PURE__ */ y("div", { style: { flex: 1, color: swatch.displayColor } }, (index + 1).toFixed(0).padStart(2, "0")),
            /* @__PURE__ */ y("div", { style: { flex: 1, color: "black" } }, swatch.displayColor === "black" && /* @__PURE__ */ y(g, null, "\u2022"), swatch.contrastBlack.toFixed(2)),
            /* @__PURE__ */ y("div", { style: { flex: 1, color: "white" } }, swatch.displayColor === "white" && /* @__PURE__ */ y(g, null, "\u2022"), swatch.contrastWhite.toFixed(2))
          );
        })), /* @__PURE__ */ y("div", { style: exampleContainerStyles }, /* @__PURE__ */ y("div", { style: tabContainerStyles }, /* @__PURE__ */ y(
          Tab,
          {
            tabColor: "white",
            textColor: "black",
            setSelectedTab: () => {
              setSelectedTab(0);
            }
          },
          "Light"
        ), /* @__PURE__ */ y(
          Tab,
          {
            tabColor: "black",
            textColor: "white",
            setSelectedTab: () => {
              setSelectedTab(1);
            }
          },
          "Dark"
        ), /* @__PURE__ */ y(
          Tab,
          {
            tabColor: selectedPalette.swatches[5].hex,
            textColor: "white",
            setSelectedTab: () => {
              setSelectedTab(2);
            }
          },
          "Color"
        )), /* @__PURE__ */ y("div", { style: exampleContentWrapperStyles }, /* @__PURE__ */ y(Text_default, { type: "text", size: "small" }, "Buttons"), /* @__PURE__ */ y(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              gap: ".5rem"
            }
          },
          /* @__PURE__ */ y(
            Button_default,
            {
              onClick: null,
              text: "Settings",
              buttonType: "primary",
              iconType: "settings"
            }
          ),
          /* @__PURE__ */ y(
            Button_default,
            {
              onClick: null,
              text: "Generate Code",
              buttonType: "secondary",
              iconType: "code"
            }
          ),
          /* @__PURE__ */ y(
            Button_default,
            {
              onClick: null,
              text: "Refresh",
              buttonType: "text",
              iconType: "settings"
            }
          )
        ), /* @__PURE__ */ y(Text_default, { type: "text", size: "small" }, "Heading"), /* @__PURE__ */ y(Text_default, { type: "heading", size: "large", style: { fontWeight: 900 } }, "The quick brown fox jumped over the lazy dog."), /* @__PURE__ */ y(Text_default, { type: "text", size: "small" }, "Icons"), /* @__PURE__ */ y(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              gap: ".5rem"
            }
          },
          /* @__PURE__ */ y(Icon_default, { type: "pencil" }),
          /* @__PURE__ */ y(Icon_default, { type: "code" }),
          /* @__PURE__ */ y(Icon_default, { type: "settings" }),
          /* @__PURE__ */ y(Icon_default, { type: "help" }),
          /* @__PURE__ */ y(Icon_default, { type: "trash" })
        ), /* @__PURE__ */ y(Text_default, { type: "text", size: "small" }, "Paragraph Text"), /* @__PURE__ */ y(Text_default, { type: "text", size: "large" }, "Nam faucibus accumsan ultrices. Duis magna velit, pretium quis ultricies in, efficitur eu nisi. Ut id condimentum neque. Integer dapibus eros urna, quis pharetra nunc fringilla eu.")))))));
      };
      Edit_default = Edit;
    }
  });

  // src/views/Tokens.tsx
  var Tokens, Tokens_default;
  var init_Tokens = __esm({
    "src/views/Tokens.tsx"() {
      "use strict";
      init_preact_module();
      init_Button();
      Tokens = ({ palettes, setCurrentView }) => {
        const editContainerStyles = {
          flex: 1,
          display: "flex",
          flexDirection: "row"
        };
        const editSidebarStyles = {
          display: "flex",
          flexDirection: "column",
          width: "14rem",
          borderRight: "#EEE solid 1px"
        };
        const editBodyStyles = {
          flex: 1,
          display: "flex",
          flexDirection: "column"
        };
        return /* @__PURE__ */ y(g, null, /* @__PURE__ */ y("div", { style: editContainerStyles }, /* @__PURE__ */ y("div", { style: editSidebarStyles }, /* @__PURE__ */ y("div", { style: { padding: "1rem" } }, /* @__PURE__ */ y(
          Button_default,
          {
            buttonType: "secondary",
            text: "Back to palettes",
            onClick: () => setCurrentView("palettes")
          }
        ))), /* @__PURE__ */ y("div", { style: editBodyStyles }, "Token Editor")));
      };
      Tokens_default = Tokens;
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [initComplete, setInitComplete] = p2(false);
    const [fileName, setFileName] = p2("");
    const [selectionColors, setSelectionColors] = p2([]);
    const [pageColors, setPageColors] = p2([]);
    const [palettes, setPalettes] = p2([]);
    const [config, setConfig] = p2({
      stepCount: 16
    });
    const [currentView, setCurrentView] = p2("palettes");
    const [selectedPalette, setSelectedPalette] = p2(palettes[0]);
    const editPalette = async (index) => {
      setSelectedPalette(palettes[index]);
      setCurrentView("edit");
    };
    const updateConfig = (key, value) => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "set-config",
            key,
            value
          }
        },
        "*"
      );
    };
    const addSeedColor = (hex) => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "add-color",
            hex
          }
        },
        "*"
      );
    };
    const removeSeedColor = async (hex) => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "remove-color",
            hex
          }
        },
        "*"
      );
    };
    const resetData = async () => {
      parent.postMessage(
        {
          pluginMessage: {
            type: "reset-data"
          }
        },
        "*"
      );
    };
    _(() => {
      const handleMessage = (e3) => {
        let { pluginMessage } = e3.data;
        switch (pluginMessage.type) {
          case "init-plugin":
            setSelectionColors(pluginMessage.selectionColors);
            setPageColors(pluginMessage.pageColors);
            setFileName(pluginMessage.fileName);
            setInitComplete(true);
            break;
          case "receive-palettes":
            setPalettes(pluginMessage.palettes);
            break;
          case "receive-config":
            setConfig(pluginMessage.configData);
            break;
          default:
            console.log("received unknown message type", pluginMessage);
        }
      };
      window.onmessage = handleMessage;
    });
    return /* @__PURE__ */ y(g, null, /* @__PURE__ */ y("div", { className: "modal font-text", style: modalStyles }, currentView === "palettes" && /* @__PURE__ */ y(
      Palettes_default,
      {
        fileName,
        palettes,
        selectionColors,
        pageColors,
        updateConfig,
        addSeedColor,
        removeSeedColor,
        resetData,
        setCurrentView,
        editPalette
      }
    ), currentView === "edit" && /* @__PURE__ */ y(
      Edit_default,
      {
        palettes,
        selectedPalette,
        setCurrentView
      }
    ), currentView === "tokens" && /* @__PURE__ */ y(Tokens_default, { palettes, setCurrentView })));
  }
  var modalStyles, ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib();
      init_preact_module();
      init_compat_module();
      init_styles();
      init_Palettes();
      init_Edit();
      init_Tokens();
      modalStyles = {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column"
      };
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

chroma-js/chroma.js:
  (**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   *)
*/
