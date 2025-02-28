import fd from "react";
import nd from "react-dom";
function cd(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var rc = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bv;
function id() {
  if (Bv) return be;
  Bv = 1;
  var E = Symbol.for("react.transitional.element"), tl = Symbol.for("react.fragment");
  function L(m, I, Gl) {
    var zl = null;
    if (Gl !== void 0 && (zl = "" + Gl), I.key !== void 0 && (zl = "" + I.key), "key" in I) {
      Gl = {};
      for (var Ul in I)
        Ul !== "key" && (Gl[Ul] = I[Ul]);
    } else Gl = I;
    return I = Gl.ref, {
      $$typeof: E,
      type: m,
      key: zl,
      ref: I !== void 0 ? I : null,
      props: Gl
    };
  }
  return be.Fragment = tl, be.jsx = L, be.jsxs = L, be;
}
var Nv;
function vd() {
  return Nv || (Nv = 1, rc.exports = id()), rc.exports;
}
var Wl = vd(), Jc = { exports: {} }, ge = {}, wc = { exports: {} }, Wc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yv;
function sd() {
  return Yv || (Yv = 1, function(E) {
    function tl(A, _) {
      var U = A.length;
      A.push(_);
      l: for (; 0 < U; ) {
        var p = U - 1 >>> 1, F = A[p];
        if (0 < I(F, _))
          A[p] = _, A[U] = F, U = p;
        else break l;
      }
    }
    function L(A) {
      return A.length === 0 ? null : A[0];
    }
    function m(A) {
      if (A.length === 0) return null;
      var _ = A[0], U = A.pop();
      if (U !== _) {
        A[0] = U;
        l: for (var p = 0, F = A.length, Na = F >>> 1; p < Na; ) {
          var na = 2 * (p + 1) - 1, yu = A[na], G = na + 1, Xl = A[G];
          if (0 > I(yu, U))
            G < F && 0 > I(Xl, yu) ? (A[p] = Xl, A[G] = U, p = G) : (A[p] = yu, A[na] = U, p = na);
          else if (G < F && 0 > I(Xl, U))
            A[p] = Xl, A[G] = U, p = G;
          else break l;
        }
      }
      return _;
    }
    function I(A, _) {
      var U = A.sortIndex - _.sortIndex;
      return U !== 0 ? U : A.id - _.id;
    }
    if (E.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Gl = performance;
      E.unstable_now = function() {
        return Gl.now();
      };
    } else {
      var zl = Date, Ul = zl.now();
      E.unstable_now = function() {
        return zl.now() - Ul;
      };
    }
    var dl = [], $l = [], bt = 1, Tl = null, el = 3, ol = !1, kl = !1, hu = !1, qa = typeof setTimeout == "function" ? setTimeout : null, Ra = typeof clearTimeout == "function" ? clearTimeout : null, Fl = typeof setImmediate < "u" ? setImmediate : null;
    function ua(A) {
      for (var _ = L($l); _ !== null; ) {
        if (_.callback === null) m($l);
        else if (_.startTime <= A)
          m($l), _.sortIndex = _.expirationTime, tl(dl, _);
        else break;
        _ = L($l);
      }
    }
    function gt(A) {
      if (hu = !1, ua(A), !kl)
        if (L(dl) !== null)
          kl = !0, ea();
        else {
          var _ = L($l);
          _ !== null && fa(gt, _.startTime - A);
        }
    }
    var aa = !1, Pl = -1, ze = 5, Ba = -1;
    function O() {
      return !(E.unstable_now() - Ba < ze);
    }
    function Z() {
      if (aa) {
        var A = E.unstable_now();
        Ba = A;
        var _ = !0;
        try {
          l: {
            kl = !1, hu && (hu = !1, Ra(Pl), Pl = -1), ol = !0;
            var U = el;
            try {
              u: {
                for (ua(A), Tl = L(dl); Tl !== null && !(Tl.expirationTime > A && O()); ) {
                  var p = Tl.callback;
                  if (typeof p == "function") {
                    Tl.callback = null, el = Tl.priorityLevel;
                    var F = p(
                      Tl.expirationTime <= A
                    );
                    if (A = E.unstable_now(), typeof F == "function") {
                      Tl.callback = F, ua(A), _ = !0;
                      break u;
                    }
                    Tl === L(dl) && m(dl), ua(A);
                  } else m(dl);
                  Tl = L(dl);
                }
                if (Tl !== null) _ = !0;
                else {
                  var Na = L($l);
                  Na !== null && fa(
                    gt,
                    Na.startTime - A
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              Tl = null, el = U, ol = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? du() : aa = !1;
        }
      }
    }
    var du;
    if (typeof Fl == "function")
      du = function() {
        Fl(Z);
      };
    else if (typeof MessageChannel < "u") {
      var zt = new MessageChannel(), ta = zt.port2;
      zt.port1.onmessage = Z, du = function() {
        ta.postMessage(null);
      };
    } else
      du = function() {
        qa(Z, 0);
      };
    function ea() {
      aa || (aa = !0, du());
    }
    function fa(A, _) {
      Pl = qa(function() {
        A(E.unstable_now());
      }, _);
    }
    E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, E.unstable_continueExecution = function() {
      kl || ol || (kl = !0, ea());
    }, E.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ze = 0 < A ? Math.floor(1e3 / A) : 5;
    }, E.unstable_getCurrentPriorityLevel = function() {
      return el;
    }, E.unstable_getFirstCallbackNode = function() {
      return L(dl);
    }, E.unstable_next = function(A) {
      switch (el) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = el;
      }
      var U = el;
      el = _;
      try {
        return A();
      } finally {
        el = U;
      }
    }, E.unstable_pauseExecution = function() {
    }, E.unstable_requestPaint = function() {
    }, E.unstable_runWithPriority = function(A, _) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var U = el;
      el = A;
      try {
        return _();
      } finally {
        el = U;
      }
    }, E.unstable_scheduleCallback = function(A, _, U) {
      var p = E.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? p + U : p) : U = p, A) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = U + F, A = {
        id: bt++,
        callback: _,
        priorityLevel: A,
        startTime: U,
        expirationTime: F,
        sortIndex: -1
      }, U > p ? (A.sortIndex = U, tl($l, A), L(dl) === null && A === L($l) && (hu ? (Ra(Pl), Pl = -1) : hu = !0, fa(gt, U - p))) : (A.sortIndex = F, tl(dl, A), kl || ol || (kl = !0, ea())), A;
    }, E.unstable_shouldYield = O, E.unstable_wrapCallback = function(A) {
      var _ = el;
      return function() {
        var U = el;
        el = _;
        try {
          return A.apply(this, arguments);
        } finally {
          el = U;
        }
      };
    };
  }(Wc)), Wc;
}
var Gv;
function hd() {
  return Gv || (Gv = 1, wc.exports = sd()), wc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xv;
function dd() {
  if (Xv) return ge;
  Xv = 1;
  var E = hd(), tl = fd, L = nd;
  function m(l) {
    var u = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      u += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        u += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function I(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  var Gl = Symbol.for("react.element"), zl = Symbol.for("react.transitional.element"), Ul = Symbol.for("react.portal"), dl = Symbol.for("react.fragment"), $l = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), Tl = Symbol.for("react.provider"), el = Symbol.for("react.consumer"), ol = Symbol.for("react.context"), kl = Symbol.for("react.forward_ref"), hu = Symbol.for("react.suspense"), qa = Symbol.for("react.suspense_list"), Ra = Symbol.for("react.memo"), Fl = Symbol.for("react.lazy"), ua = Symbol.for("react.offscreen"), gt = Symbol.for("react.memo_cache_sentinel"), aa = Symbol.iterator;
  function Pl(l) {
    return l === null || typeof l != "object" ? null : (l = aa && l[aa] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ze = Symbol.for("react.client.reference");
  function Ba(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ze ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case dl:
        return "Fragment";
      case Ul:
        return "Portal";
      case bt:
        return "Profiler";
      case $l:
        return "StrictMode";
      case hu:
        return "Suspense";
      case qa:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ol:
          return (l.displayName || "Context") + ".Provider";
        case el:
          return (l._context.displayName || "Context") + ".Consumer";
        case kl:
          var u = l.render;
          return l = l.displayName, l || (l = u.displayName || u.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ra:
          return u = l.displayName || null, u !== null ? u : Ba(l.type) || "Memo";
        case Fl:
          u = l._payload, l = l._init;
          try {
            return Ba(l(u));
          } catch {
          }
      }
    return null;
  }
  var O = tl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.assign, du, zt;
  function ta(l) {
    if (du === void 0)
      try {
        throw Error();
      } catch (a) {
        var u = a.stack.trim().match(/\n( *(at )?)/);
        du = u && u[1] || "", zt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + du + l + zt;
  }
  var ea = !1;
  function fa(l, u) {
    if (!l || ea) return "";
    ea = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t = {
        DetermineComponentFrameRoot: function() {
          try {
            if (u) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (S) {
                  var y = S;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (S) {
                  y = S;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                y = S;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (S) {
            if (S && y && typeof S.stack == "string")
              return [S.stack, y.stack];
          }
          return [null, null];
        }
      };
      t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        t.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        t.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = t.DetermineComponentFrameRoot(), n = f[0], c = f[1];
      if (n && c) {
        var i = n.split(`
`), s = c.split(`
`);
        for (e = t = 0; t < i.length && !i[t].includes("DetermineComponentFrameRoot"); )
          t++;
        for (; e < s.length && !s[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (t === i.length || e === s.length)
          for (t = i.length - 1, e = s.length - 1; 1 <= t && 0 <= e && i[t] !== s[e]; )
            e--;
        for (; 1 <= t && 0 <= e; t--, e--)
          if (i[t] !== s[e]) {
            if (t !== 1 || e !== 1)
              do
                if (t--, e--, 0 > e || i[t] !== s[e]) {
                  var b = `
` + i[t].replace(" at new ", " at ");
                  return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
                }
              while (1 <= t && 0 <= e);
            break;
          }
      }
    } finally {
      ea = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? ta(a) : "";
  }
  function A(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ta(l.type);
      case 16:
        return ta("Lazy");
      case 13:
        return ta("Suspense");
      case 19:
        return ta("SuspenseList");
      case 0:
      case 15:
        return l = fa(l.type, !1), l;
      case 11:
        return l = fa(l.type.render, !1), l;
      case 1:
        return l = fa(l.type, !0), l;
      default:
        return "";
    }
  }
  function _(l) {
    try {
      var u = "";
      do
        u += A(l), l = l.return;
      while (l);
      return u;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function U(l) {
    var u = l, a = l;
    if (l.alternate) for (; u.return; ) u = u.return;
    else {
      l = u;
      do
        u = l, (u.flags & 4098) !== 0 && (a = u.return), l = u.return;
      while (l);
    }
    return u.tag === 3 ? a : null;
  }
  function p(l) {
    if (l.tag === 13) {
      var u = l.memoizedState;
      if (u === null && (l = l.alternate, l !== null && (u = l.memoizedState)), u !== null) return u.dehydrated;
    }
    return null;
  }
  function F(l) {
    if (U(l) !== l)
      throw Error(m(188));
  }
  function Na(l) {
    var u = l.alternate;
    if (!u) {
      if (u = U(l), u === null) throw Error(m(188));
      return u !== l ? null : l;
    }
    for (var a = l, t = u; ; ) {
      var e = a.return;
      if (e === null) break;
      var f = e.alternate;
      if (f === null) {
        if (t = e.return, t !== null) {
          a = t;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === a) return F(e), l;
          if (f === t) return F(e), u;
          f = f.sibling;
        }
        throw Error(m(188));
      }
      if (a.return !== t.return) a = e, t = f;
      else {
        for (var n = !1, c = e.child; c; ) {
          if (c === a) {
            n = !0, a = e, t = f;
            break;
          }
          if (c === t) {
            n = !0, t = e, a = f;
            break;
          }
          c = c.sibling;
        }
        if (!n) {
          for (c = f.child; c; ) {
            if (c === a) {
              n = !0, a = f, t = e;
              break;
            }
            if (c === t) {
              n = !0, t = f, a = e;
              break;
            }
            c = c.sibling;
          }
          if (!n) throw Error(m(189));
        }
      }
      if (a.alternate !== t) throw Error(m(190));
    }
    if (a.tag !== 3) throw Error(m(188));
    return a.stateNode.current === a ? l : u;
  }
  function na(l) {
    var u = l.tag;
    if (u === 5 || u === 26 || u === 27 || u === 6) return l;
    for (l = l.child; l !== null; ) {
      if (u = na(l), u !== null) return u;
      l = l.sibling;
    }
    return null;
  }
  var yu = Array.isArray, G = L.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xl = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Gf = [], Ya = -1;
  function tu(l) {
    return { current: l };
  }
  function cl(l) {
    0 > Ya || (l.current = Gf[Ya], Gf[Ya] = null, Ya--);
  }
  function r(l, u) {
    Ya++, Gf[Ya] = l.current, l.current = u;
  }
  var eu = tu(null), At = tu(null), Bu = tu(null), Ae = tu(null);
  function Ee(l, u) {
    switch (r(Bu, u), r(At, l), r(eu, null), l = u.nodeType, l) {
      case 9:
      case 11:
        u = (u = u.documentElement) && (u = u.namespaceURI) ? nv(u) : 0;
        break;
      default:
        if (l = l === 8 ? u.parentNode : u, u = l.tagName, l = l.namespaceURI)
          l = nv(l), u = cv(l, u);
        else
          switch (u) {
            case "svg":
              u = 1;
              break;
            case "math":
              u = 2;
              break;
            default:
              u = 0;
          }
    }
    cl(eu), r(eu, u);
  }
  function Ga() {
    cl(eu), cl(At), cl(Bu);
  }
  function Xf(l) {
    l.memoizedState !== null && r(Ae, l);
    var u = eu.current, a = cv(u, l.type);
    u !== a && (r(At, l), r(eu, a));
  }
  function Te(l) {
    At.current === l && (cl(eu), cl(At)), Ae.current === l && (cl(Ae), he._currentValue = Xl);
  }
  var Qf = Object.prototype.hasOwnProperty, Zf = E.unstable_scheduleCallback, jf = E.unstable_cancelCallback, Zv = E.unstable_shouldYield, jv = E.unstable_requestPaint, fu = E.unstable_now, Vv = E.unstable_getCurrentPriorityLevel, $c = E.unstable_ImmediatePriority, kc = E.unstable_UserBlockingPriority, oe = E.unstable_NormalPriority, Cv = E.unstable_LowPriority, Fc = E.unstable_IdlePriority, xv = E.log, Kv = E.unstable_setDisableYieldValue, Et = null, Hl = null;
  function Lv(l) {
    if (Hl && typeof Hl.onCommitFiberRoot == "function")
      try {
        Hl.onCommitFiberRoot(
          Et,
          l,
          void 0,
          (l.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function Nu(l) {
    if (typeof xv == "function" && Kv(l), Hl && typeof Hl.setStrictMode == "function")
      try {
        Hl.setStrictMode(Et, l);
      } catch {
      }
  }
  var _l = Math.clz32 ? Math.clz32 : Jv, pv = Math.log, rv = Math.LN2;
  function Jv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (pv(l) / rv | 0) | 0;
  }
  var De = 128, Me = 4194304;
  function ca(l) {
    var u = l & 42;
    if (u !== 0) return u;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Oe(l, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var t = 0, e = l.suspendedLanes, f = l.pingedLanes, n = l.warmLanes;
    l = l.finishedLanes !== 0;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~e, a !== 0 ? t = ca(a) : (f &= c, f !== 0 ? t = ca(f) : l || (n = c & ~n, n !== 0 && (t = ca(n))))) : (c = a & ~e, c !== 0 ? t = ca(c) : f !== 0 ? t = ca(f) : l || (n = a & ~n, n !== 0 && (t = ca(n)))), t === 0 ? 0 : u !== 0 && u !== t && (u & e) === 0 && (e = t & -t, n = u & -u, e >= n || e === 32 && (n & 4194176) !== 0) ? u : t;
  }
  function Tt(l, u) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & u) === 0;
  }
  function wv(l, u) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return u + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return u + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pc() {
    var l = De;
    return De <<= 1, (De & 4194176) === 0 && (De = 128), l;
  }
  function Ic() {
    var l = Me;
    return Me <<= 1, (Me & 62914560) === 0 && (Me = 4194304), l;
  }
  function Vf(l) {
    for (var u = [], a = 0; 31 > a; a++) u.push(l);
    return u;
  }
  function ot(l, u) {
    l.pendingLanes |= u, u !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Wv(l, u, a, t, e, f) {
    var n = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, s = l.hiddenUpdates;
    for (a = n & ~a; 0 < a; ) {
      var b = 31 - _l(a), z = 1 << b;
      c[b] = 0, i[b] = -1;
      var y = s[b];
      if (y !== null)
        for (s[b] = null, b = 0; b < y.length; b++) {
          var S = y[b];
          S !== null && (S.lane &= -536870913);
        }
      a &= ~z;
    }
    t !== 0 && li(l, t, 0), f !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= f & ~(n & ~u));
  }
  function li(l, u, a) {
    l.pendingLanes |= u, l.suspendedLanes &= ~u;
    var t = 31 - _l(u);
    l.entangledLanes |= u, l.entanglements[t] = l.entanglements[t] | 1073741824 | a & 4194218;
  }
  function ui(l, u) {
    var a = l.entangledLanes |= u;
    for (l = l.entanglements; a; ) {
      var t = 31 - _l(a), e = 1 << t;
      e & u | l[t] & u && (l[t] |= u), a &= ~e;
    }
  }
  function ai(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ti() {
    var l = G.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ov(l.type));
  }
  function $v(l, u) {
    var a = G.p;
    try {
      return G.p = l, u();
    } finally {
      G.p = a;
    }
  }
  var Yu = Math.random().toString(36).slice(2), bl = "__reactFiber$" + Yu, Dl = "__reactProps$" + Yu, Xa = "__reactContainer$" + Yu, Cf = "__reactEvents$" + Yu, kv = "__reactListeners$" + Yu, Fv = "__reactHandles$" + Yu, ei = "__reactResources$" + Yu, Dt = "__reactMarker$" + Yu;
  function xf(l) {
    delete l[bl], delete l[Dl], delete l[Cf], delete l[kv], delete l[Fv];
  }
  function ia(l) {
    var u = l[bl];
    if (u) return u;
    for (var a = l.parentNode; a; ) {
      if (u = a[Xa] || a[bl]) {
        if (a = u.alternate, u.child !== null || a !== null && a.child !== null)
          for (l = sv(l); l !== null; ) {
            if (a = l[bl]) return a;
            l = sv(l);
          }
        return u;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Qa(l) {
    if (l = l[bl] || l[Xa]) {
      var u = l.tag;
      if (u === 5 || u === 6 || u === 13 || u === 26 || u === 27 || u === 3)
        return l;
    }
    return null;
  }
  function Mt(l) {
    var u = l.tag;
    if (u === 5 || u === 26 || u === 27 || u === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Za(l) {
    var u = l[ei];
    return u || (u = l[ei] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), u;
  }
  function il(l) {
    l[Dt] = !0;
  }
  var fi = /* @__PURE__ */ new Set(), ni = {};
  function va(l, u) {
    ja(l, u), ja(l + "Capture", u);
  }
  function ja(l, u) {
    for (ni[l] = u, l = 0; l < u.length; l++)
      fi.add(u[l]);
  }
  var mu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ci = {}, ii = {};
  function Iv(l) {
    return Qf.call(ii, l) ? !0 : Qf.call(ci, l) ? !1 : Pv.test(l) ? ii[l] = !0 : (ci[l] = !0, !1);
  }
  function Ue(l, u, a) {
    if (Iv(u))
      if (a === null) l.removeAttribute(u);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(u);
            return;
          case "boolean":
            var t = u.toLowerCase().slice(0, 5);
            if (t !== "data-" && t !== "aria-") {
              l.removeAttribute(u);
              return;
            }
        }
        l.setAttribute(u, "" + a);
      }
  }
  function He(l, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttribute(u, "" + a);
    }
  }
  function Su(l, u, a, t) {
    if (t === null) l.removeAttribute(a);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(u, a, "" + t);
    }
  }
  function Ql(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function vi(l) {
    var u = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (u === "checkbox" || u === "radio");
  }
  function ls(l) {
    var u = vi(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      u
    ), t = "" + l[u];
    if (!l.hasOwnProperty(u) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, f = a.set;
      return Object.defineProperty(l, u, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(n) {
          t = "" + n, f.call(this, n);
        }
      }), Object.defineProperty(l, u, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(n) {
          t = "" + n;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[u];
        }
      };
    }
  }
  function _e(l) {
    l._valueTracker || (l._valueTracker = ls(l));
  }
  function si(l) {
    if (!l) return !1;
    var u = l._valueTracker;
    if (!u) return !0;
    var a = u.getValue(), t = "";
    return l && (t = vi(l) ? l.checked ? "true" : "false" : l.value), l = t, l !== a ? (u.setValue(l), !0) : !1;
  }
  function qe(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var us = /[\n"\\]/g;
  function Zl(l) {
    return l.replace(
      us,
      function(u) {
        return "\\" + u.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Kf(l, u, a, t, e, f, n, c) {
    l.name = "", n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" ? l.type = n : l.removeAttribute("type"), u != null ? n === "number" ? (u === 0 && l.value === "" || l.value != u) && (l.value = "" + Ql(u)) : l.value !== "" + Ql(u) && (l.value = "" + Ql(u)) : n !== "submit" && n !== "reset" || l.removeAttribute("value"), u != null ? Lf(l, n, Ql(u)) : a != null ? Lf(l, n, Ql(a)) : t != null && l.removeAttribute("value"), e == null && f != null && (l.defaultChecked = !!f), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Ql(c) : l.removeAttribute("name");
  }
  function hi(l, u, a, t, e, f, n, c) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.type = f), u != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || u != null))
        return;
      a = a != null ? "" + Ql(a) : "", u = u != null ? "" + Ql(u) : a, c || u === l.value || (l.value = u), l.defaultValue = u;
    }
    t = t ?? e, t = typeof t != "function" && typeof t != "symbol" && !!t, l.checked = c ? l.checked : !!t, l.defaultChecked = !!t, n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.name = n);
  }
  function Lf(l, u, a) {
    u === "number" && qe(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Va(l, u, a, t) {
    if (l = l.options, u) {
      u = {};
      for (var e = 0; e < a.length; e++)
        u["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = u.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && t && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + Ql(a), u = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, t && (l[e].defaultSelected = !0);
          return;
        }
        u !== null || l[e].disabled || (u = l[e]);
      }
      u !== null && (u.selected = !0);
    }
  }
  function di(l, u, a) {
    if (u != null && (u = "" + Ql(u), u !== l.value && (l.value = u), a == null)) {
      l.defaultValue !== u && (l.defaultValue = u);
      return;
    }
    l.defaultValue = a != null ? "" + Ql(a) : "";
  }
  function yi(l, u, a, t) {
    if (u == null) {
      if (t != null) {
        if (a != null) throw Error(m(92));
        if (yu(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        a = t;
      }
      a == null && (a = ""), u = a;
    }
    a = Ql(u), l.defaultValue = a, t = l.textContent, t === a && t !== "" && t !== null && (l.value = t);
  }
  function Ca(l, u) {
    if (u) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = u;
        return;
      }
    }
    l.textContent = u;
  }
  var as = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function mi(l, u, a) {
    var t = u.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? t ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "" : t ? l.setProperty(u, a) : typeof a != "number" || a === 0 || as.has(u) ? u === "float" ? l.cssFloat = a : l[u] = ("" + a).trim() : l[u] = a + "px";
  }
  function Si(l, u, a) {
    if (u != null && typeof u != "object")
      throw Error(m(62));
    if (l = l.style, a != null) {
      for (var t in a)
        !a.hasOwnProperty(t) || u != null && u.hasOwnProperty(t) || (t.indexOf("--") === 0 ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "");
      for (var e in u)
        t = u[e], u.hasOwnProperty(e) && a[e] !== t && mi(l, e, t);
    } else
      for (var f in u)
        u.hasOwnProperty(f) && mi(l, f, u[f]);
  }
  function pf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ts = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), es = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Re(l) {
    return es.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var rf = null;
  function Jf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var xa = null, Ka = null;
  function bi(l) {
    var u = Qa(l);
    if (u && (l = u.stateNode)) {
      var a = l[Dl] || null;
      l: switch (l = u.stateNode, u.type) {
        case "input":
          if (Kf(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), u = a.name, a.type === "radio" && u != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Zl(
                "" + u
              ) + '"][type="radio"]'
            ), u = 0; u < a.length; u++) {
              var t = a[u];
              if (t !== l && t.form === l.form) {
                var e = t[Dl] || null;
                if (!e) throw Error(m(90));
                Kf(
                  t,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (u = 0; u < a.length; u++)
              t = a[u], t.form === l.form && si(t);
          }
          break l;
        case "textarea":
          di(l, a.value, a.defaultValue);
          break l;
        case "select":
          u = a.value, u != null && Va(l, !!a.multiple, u, !1);
      }
    }
  }
  var wf = !1;
  function gi(l, u, a) {
    if (wf) return l(u, a);
    wf = !0;
    try {
      var t = l(u);
      return t;
    } finally {
      if (wf = !1, (xa !== null || Ka !== null) && (mf(), xa && (u = xa, l = Ka, Ka = xa = null, bi(u), l)))
        for (u = 0; u < l.length; u++) bi(l[u]);
    }
  }
  function Ot(l, u) {
    var a = l.stateNode;
    if (a === null) return null;
    var t = a[Dl] || null;
    if (t === null) return null;
    a = t[u];
    l: switch (u) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (t = !t.disabled) || (l = l.type, t = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !t;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        m(231, u, typeof a)
      );
    return a;
  }
  var Wf = !1;
  if (mu)
    try {
      var Ut = {};
      Object.defineProperty(Ut, "passive", {
        get: function() {
          Wf = !0;
        }
      }), window.addEventListener("test", Ut, Ut), window.removeEventListener("test", Ut, Ut);
    } catch {
      Wf = !1;
    }
  var Gu = null, $f = null, Be = null;
  function zi() {
    if (Be) return Be;
    var l, u = $f, a = u.length, t, e = "value" in Gu ? Gu.value : Gu.textContent, f = e.length;
    for (l = 0; l < a && u[l] === e[l]; l++) ;
    var n = a - l;
    for (t = 1; t <= n && u[a - t] === e[f - t]; t++) ;
    return Be = e.slice(l, 1 < t ? 1 - t : void 0);
  }
  function Ne(l) {
    var u = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && u === 13 && (l = 13)) : l = u, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ye() {
    return !0;
  }
  function Ai() {
    return !1;
  }
  function Ml(l) {
    function u(a, t, e, f, n) {
      this._reactName = a, this._targetInst = e, this.type = t, this.nativeEvent = f, this.target = n, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(f) : f[c]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Ye : Ai, this.isPropagationStopped = Ai, this;
    }
    return Z(u.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ye);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ye);
      },
      persist: function() {
      },
      isPersistent: Ye
    }), u;
  }
  var sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ge = Ml(sa), Ht = Z({}, sa, { view: 0, detail: 0 }), fs = Ml(Ht), kf, Ff, _t, Xe = Z({}, Ht, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: If,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== _t && (_t && l.type === "mousemove" ? (kf = l.screenX - _t.screenX, Ff = l.screenY - _t.screenY) : Ff = kf = 0, _t = l), kf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Ff;
    }
  }), Ei = Ml(Xe), ns = Z({}, Xe, { dataTransfer: 0 }), cs = Ml(ns), is = Z({}, Ht, { relatedTarget: 0 }), Pf = Ml(is), vs = Z({}, sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ss = Ml(vs), hs = Z({}, sa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ds = Ml(hs), ys = Z({}, sa, { data: 0 }), Ti = Ml(ys), ms = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ss = {
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
  }, bs = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gs(l) {
    var u = this.nativeEvent;
    return u.getModifierState ? u.getModifierState(l) : (l = bs[l]) ? !!u[l] : !1;
  }
  function If() {
    return gs;
  }
  var zs = Z({}, Ht, {
    key: function(l) {
      if (l.key) {
        var u = ms[l.key] || l.key;
        if (u !== "Unidentified") return u;
      }
      return l.type === "keypress" ? (l = Ne(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Ss[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: If,
    charCode: function(l) {
      return l.type === "keypress" ? Ne(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ne(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), As = Ml(zs), Es = Z({}, Xe, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), oi = Ml(Es), Ts = Z({}, Ht, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: If
  }), os = Ml(Ts), Ds = Z({}, sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ms = Ml(Ds), Os = Z({}, Xe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Us = Ml(Os), Hs = Z({}, sa, {
    newState: 0,
    oldState: 0
  }), _s = Ml(Hs), qs = [9, 13, 27, 32], ln = mu && "CompositionEvent" in window, qt = null;
  mu && "documentMode" in document && (qt = document.documentMode);
  var Rs = mu && "TextEvent" in window && !qt, Di = mu && (!ln || qt && 8 < qt && 11 >= qt), Mi = " ", Oi = !1;
  function Ui(l, u) {
    switch (l) {
      case "keyup":
        return qs.indexOf(u.keyCode) !== -1;
      case "keydown":
        return u.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Hi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var La = !1;
  function Bs(l, u) {
    switch (l) {
      case "compositionend":
        return Hi(u);
      case "keypress":
        return u.which !== 32 ? null : (Oi = !0, Mi);
      case "textInput":
        return l = u.data, l === Mi && Oi ? null : l;
      default:
        return null;
    }
  }
  function Ns(l, u) {
    if (La)
      return l === "compositionend" || !ln && Ui(l, u) ? (l = zi(), Be = $f = Gu = null, La = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(u.ctrlKey || u.altKey || u.metaKey) || u.ctrlKey && u.altKey) {
          if (u.char && 1 < u.char.length)
            return u.char;
          if (u.which) return String.fromCharCode(u.which);
        }
        return null;
      case "compositionend":
        return Di && u.locale !== "ko" ? null : u.data;
      default:
        return null;
    }
  }
  var Ys = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function _i(l) {
    var u = l && l.nodeName && l.nodeName.toLowerCase();
    return u === "input" ? !!Ys[l.type] : u === "textarea";
  }
  function qi(l, u, a, t) {
    xa ? Ka ? Ka.push(t) : Ka = [t] : xa = t, u = Af(u, "onChange"), 0 < u.length && (a = new Ge(
      "onChange",
      "change",
      null,
      a,
      t
    ), l.push({ event: a, listeners: u }));
  }
  var Rt = null, Bt = null;
  function Gs(l) {
    uv(l, 0);
  }
  function Qe(l) {
    var u = Mt(l);
    if (si(u)) return l;
  }
  function Ri(l, u) {
    if (l === "change") return u;
  }
  var Bi = !1;
  if (mu) {
    var un;
    if (mu) {
      var an = "oninput" in document;
      if (!an) {
        var Ni = document.createElement("div");
        Ni.setAttribute("oninput", "return;"), an = typeof Ni.oninput == "function";
      }
      un = an;
    } else un = !1;
    Bi = un && (!document.documentMode || 9 < document.documentMode);
  }
  function Yi() {
    Rt && (Rt.detachEvent("onpropertychange", Gi), Bt = Rt = null);
  }
  function Gi(l) {
    if (l.propertyName === "value" && Qe(Bt)) {
      var u = [];
      qi(
        u,
        Bt,
        l,
        Jf(l)
      ), gi(Gs, u);
    }
  }
  function Xs(l, u, a) {
    l === "focusin" ? (Yi(), Rt = u, Bt = a, Rt.attachEvent("onpropertychange", Gi)) : l === "focusout" && Yi();
  }
  function Qs(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Qe(Bt);
  }
  function Zs(l, u) {
    if (l === "click") return Qe(u);
  }
  function js(l, u) {
    if (l === "input" || l === "change")
      return Qe(u);
  }
  function Vs(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var ql = typeof Object.is == "function" ? Object.is : Vs;
  function Nt(l, u) {
    if (ql(l, u)) return !0;
    if (typeof l != "object" || l === null || typeof u != "object" || u === null)
      return !1;
    var a = Object.keys(l), t = Object.keys(u);
    if (a.length !== t.length) return !1;
    for (t = 0; t < a.length; t++) {
      var e = a[t];
      if (!Qf.call(u, e) || !ql(l[e], u[e]))
        return !1;
    }
    return !0;
  }
  function Xi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Qi(l, u) {
    var a = Xi(l);
    l = 0;
    for (var t; a; ) {
      if (a.nodeType === 3) {
        if (t = l + a.textContent.length, l <= u && t >= u)
          return { node: a, offset: u - l };
        l = t;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Xi(a);
    }
  }
  function Zi(l, u) {
    return l && u ? l === u ? !0 : l && l.nodeType === 3 ? !1 : u && u.nodeType === 3 ? Zi(l, u.parentNode) : "contains" in l ? l.contains(u) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(u) & 16) : !1 : !1;
  }
  function ji(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var u = qe(l.document); u instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof u.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = u.contentWindow;
      else break;
      u = qe(l.document);
    }
    return u;
  }
  function tn(l) {
    var u = l && l.nodeName && l.nodeName.toLowerCase();
    return u && (u === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || u === "textarea" || l.contentEditable === "true");
  }
  function Cs(l, u) {
    var a = ji(u);
    u = l.focusedElem;
    var t = l.selectionRange;
    if (a !== u && u && u.ownerDocument && Zi(u.ownerDocument.documentElement, u)) {
      if (t !== null && tn(u)) {
        if (l = t.start, a = t.end, a === void 0 && (a = l), "selectionStart" in u)
          u.selectionStart = l, u.selectionEnd = Math.min(
            a,
            u.value.length
          );
        else if (a = (l = u.ownerDocument || document) && l.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = u.textContent.length, f = Math.min(t.start, e);
          t = t.end === void 0 ? f : Math.min(t.end, e), !a.extend && f > t && (e = t, t = f, f = e), e = Qi(u, f);
          var n = Qi(
            u,
            t
          );
          e && n && (a.rangeCount !== 1 || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== n.node || a.focusOffset !== n.offset) && (l = l.createRange(), l.setStart(e.node, e.offset), a.removeAllRanges(), f > t ? (a.addRange(l), a.extend(n.node, n.offset)) : (l.setEnd(
            n.node,
            n.offset
          ), a.addRange(l)));
        }
      }
      for (l = [], a = u; a = a.parentNode; )
        a.nodeType === 1 && l.push({
          element: a,
          left: a.scrollLeft,
          top: a.scrollTop
        });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < l.length; u++)
        a = l[u], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var xs = mu && "documentMode" in document && 11 >= document.documentMode, pa = null, en = null, Yt = null, fn = !1;
  function Vi(l, u, a) {
    var t = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    fn || pa == null || pa !== qe(t) || (t = pa, "selectionStart" in t && tn(t) ? t = { start: t.selectionStart, end: t.selectionEnd } : (t = (t.ownerDocument && t.ownerDocument.defaultView || window).getSelection(), t = {
      anchorNode: t.anchorNode,
      anchorOffset: t.anchorOffset,
      focusNode: t.focusNode,
      focusOffset: t.focusOffset
    }), Yt && Nt(Yt, t) || (Yt = t, t = Af(en, "onSelect"), 0 < t.length && (u = new Ge(
      "onSelect",
      "select",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }), u.target = pa)));
  }
  function ha(l, u) {
    var a = {};
    return a[l.toLowerCase()] = u.toLowerCase(), a["Webkit" + l] = "webkit" + u, a["Moz" + l] = "moz" + u, a;
  }
  var ra = {
    animationend: ha("Animation", "AnimationEnd"),
    animationiteration: ha("Animation", "AnimationIteration"),
    animationstart: ha("Animation", "AnimationStart"),
    transitionrun: ha("Transition", "TransitionRun"),
    transitionstart: ha("Transition", "TransitionStart"),
    transitioncancel: ha("Transition", "TransitionCancel"),
    transitionend: ha("Transition", "TransitionEnd")
  }, nn = {}, Ci = {};
  mu && (Ci = document.createElement("div").style, "AnimationEvent" in window || (delete ra.animationend.animation, delete ra.animationiteration.animation, delete ra.animationstart.animation), "TransitionEvent" in window || delete ra.transitionend.transition);
  function da(l) {
    if (nn[l]) return nn[l];
    if (!ra[l]) return l;
    var u = ra[l], a;
    for (a in u)
      if (u.hasOwnProperty(a) && a in Ci)
        return nn[l] = u[a];
    return l;
  }
  var xi = da("animationend"), Ki = da("animationiteration"), Li = da("animationstart"), Ks = da("transitionrun"), Ls = da("transitionstart"), ps = da("transitioncancel"), pi = da("transitionend"), ri = /* @__PURE__ */ new Map(), Ji = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function Il(l, u) {
    ri.set(l, u), va(u, [l]);
  }
  var jl = [], Ja = 0, cn = 0;
  function Ze() {
    for (var l = Ja, u = cn = Ja = 0; u < l; ) {
      var a = jl[u];
      jl[u++] = null;
      var t = jl[u];
      jl[u++] = null;
      var e = jl[u];
      jl[u++] = null;
      var f = jl[u];
      if (jl[u++] = null, t !== null && e !== null) {
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
      }
      f !== 0 && wi(a, e, f);
    }
  }
  function je(l, u, a, t) {
    jl[Ja++] = l, jl[Ja++] = u, jl[Ja++] = a, jl[Ja++] = t, cn |= t, l.lanes |= t, l = l.alternate, l !== null && (l.lanes |= t);
  }
  function vn(l, u, a, t) {
    return je(l, u, a, t), Ve(l);
  }
  function Xu(l, u) {
    return je(l, null, null, u), Ve(l);
  }
  function wi(l, u, a) {
    l.lanes |= a;
    var t = l.alternate;
    t !== null && (t.lanes |= a);
    for (var e = !1, f = l.return; f !== null; )
      f.childLanes |= a, t = f.alternate, t !== null && (t.childLanes |= a), f.tag === 22 && (l = f.stateNode, l === null || l._visibility & 1 || (e = !0)), l = f, f = f.return;
    e && u !== null && l.tag === 3 && (f = l.stateNode, e = 31 - _l(a), f = f.hiddenUpdates, l = f[e], l === null ? f[e] = [u] : l.push(u), u.lane = a | 536870912);
  }
  function Ve(l) {
    if (50 < ee)
      throw ee = 0, Sc = null, Error(m(185));
    for (var u = l.return; u !== null; )
      l = u, u = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var wa = {}, Wi = /* @__PURE__ */ new WeakMap();
  function Vl(l, u) {
    if (typeof l == "object" && l !== null) {
      var a = Wi.get(l);
      return a !== void 0 ? a : (u = {
        value: l,
        source: u,
        stack: _(u)
      }, Wi.set(l, u), u);
    }
    return {
      value: l,
      source: u,
      stack: _(u)
    };
  }
  var Wa = [], $a = 0, Ce = null, xe = 0, Cl = [], xl = 0, ya = null, bu = 1, gu = "";
  function ma(l, u) {
    Wa[$a++] = xe, Wa[$a++] = Ce, Ce = l, xe = u;
  }
  function $i(l, u, a) {
    Cl[xl++] = bu, Cl[xl++] = gu, Cl[xl++] = ya, ya = l;
    var t = bu;
    l = gu;
    var e = 32 - _l(t) - 1;
    t &= ~(1 << e), a += 1;
    var f = 32 - _l(u) + e;
    if (30 < f) {
      var n = e - e % 5;
      f = (t & (1 << n) - 1).toString(32), t >>= n, e -= n, bu = 1 << 32 - _l(u) + e | a << e | t, gu = f + l;
    } else
      bu = 1 << f | a << e | t, gu = l;
  }
  function sn(l) {
    l.return !== null && (ma(l, 1), $i(l, 1, 0));
  }
  function hn(l) {
    for (; l === Ce; )
      Ce = Wa[--$a], Wa[$a] = null, xe = Wa[--$a], Wa[$a] = null;
    for (; l === ya; )
      ya = Cl[--xl], Cl[xl] = null, gu = Cl[--xl], Cl[xl] = null, bu = Cl[--xl], Cl[xl] = null;
  }
  var Al = null, yl = null, X = !1, lu = null, nu = !1, dn = Error(m(519));
  function Sa(l) {
    var u = Error(m(418, ""));
    throw Qt(Vl(u, l)), dn;
  }
  function ki(l) {
    var u = l.stateNode, a = l.type, t = l.memoizedProps;
    switch (u[bl] = l, u[Dl] = t, a) {
      case "dialog":
        N("cancel", u), N("close", u);
        break;
      case "iframe":
      case "object":
      case "embed":
        N("load", u);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++)
          N(ne[a], u);
        break;
      case "source":
        N("error", u);
        break;
      case "img":
      case "image":
      case "link":
        N("error", u), N("load", u);
        break;
      case "details":
        N("toggle", u);
        break;
      case "input":
        N("invalid", u), hi(
          u,
          t.value,
          t.defaultValue,
          t.checked,
          t.defaultChecked,
          t.type,
          t.name,
          !0
        ), _e(u);
        break;
      case "select":
        N("invalid", u);
        break;
      case "textarea":
        N("invalid", u), yi(u, t.value, t.defaultValue, t.children), _e(u);
    }
    a = t.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || u.textContent === "" + a || t.suppressHydrationWarning === !0 || fv(u.textContent, a) ? (t.popover != null && (N("beforetoggle", u), N("toggle", u)), t.onScroll != null && N("scroll", u), t.onScrollEnd != null && N("scrollend", u), t.onClick != null && (u.onclick = Ef), u = !0) : u = !1, u || Sa(l);
  }
  function Fi(l) {
    for (Al = l.return; Al; )
      switch (Al.tag) {
        case 3:
        case 27:
          nu = !0;
          return;
        case 5:
        case 13:
          nu = !1;
          return;
        default:
          Al = Al.return;
      }
  }
  function Gt(l) {
    if (l !== Al) return !1;
    if (!X) return Fi(l), X = !0, !1;
    var u = !1, a;
    if ((a = l.tag !== 3 && l.tag !== 27) && ((a = l.tag === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Nc(l.type, l.memoizedProps)), a = !a), a && (u = !0), u && yl && Sa(l), Fi(l), l.tag === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, u = 0; l; ) {
          if (l.nodeType === 8)
            if (a = l.data, a === "/$") {
              if (u === 0) {
                yl = au(l.nextSibling);
                break l;
              }
              u--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || u++;
          l = l.nextSibling;
        }
        yl = null;
      }
    } else
      yl = Al ? au(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Xt() {
    yl = Al = null, X = !1;
  }
  function Qt(l) {
    lu === null ? lu = [l] : lu.push(l);
  }
  var Zt = Error(m(460)), Pi = Error(m(474)), yn = { then: function() {
  } };
  function Ii(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ke() {
  }
  function l0(l, u, a) {
    switch (a = l[a], a === void 0 ? l.push(u) : a !== u && (u.then(Ke, Ke), u = a), u.status) {
      case "fulfilled":
        return u.value;
      case "rejected":
        throw l = u.reason, l === Zt ? Error(m(483)) : l;
      default:
        if (typeof u.status == "string") u.then(Ke, Ke);
        else {
          if (l = x, l !== null && 100 < l.shellSuspendCounter)
            throw Error(m(482));
          l = u, l.status = "pending", l.then(
            function(t) {
              if (u.status === "pending") {
                var e = u;
                e.status = "fulfilled", e.value = t;
              }
            },
            function(t) {
              if (u.status === "pending") {
                var e = u;
                e.status = "rejected", e.reason = t;
              }
            }
          );
        }
        switch (u.status) {
          case "fulfilled":
            return u.value;
          case "rejected":
            throw l = u.reason, l === Zt ? Error(m(483)) : l;
        }
        throw jt = u, Zt;
    }
  }
  var jt = null;
  function u0() {
    if (jt === null) throw Error(m(459));
    var l = jt;
    return jt = null, l;
  }
  var ka = null, Vt = 0;
  function Le(l) {
    var u = Vt;
    return Vt += 1, ka === null && (ka = []), l0(ka, l, u);
  }
  function Ct(l, u) {
    u = u.props.ref, l.ref = u !== void 0 ? u : null;
  }
  function pe(l, u) {
    throw u.$$typeof === Gl ? Error(m(525)) : (l = Object.prototype.toString.call(u), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : l
      )
    ));
  }
  function a0(l) {
    var u = l._init;
    return u(l._payload);
  }
  function t0(l) {
    function u(h, v) {
      if (l) {
        var d = h.deletions;
        d === null ? (h.deletions = [v], h.flags |= 16) : d.push(v);
      }
    }
    function a(h, v) {
      if (!l) return null;
      for (; v !== null; )
        u(h, v), v = v.sibling;
      return null;
    }
    function t(h) {
      for (var v = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? v.set(h.key, h) : v.set(h.index, h), h = h.sibling;
      return v;
    }
    function e(h, v) {
      return h = wu(h, v), h.index = 0, h.sibling = null, h;
    }
    function f(h, v, d) {
      return h.index = d, l ? (d = h.alternate, d !== null ? (d = d.index, d < v ? (h.flags |= 33554434, v) : d) : (h.flags |= 33554434, v)) : (h.flags |= 1048576, v);
    }
    function n(h) {
      return l && h.alternate === null && (h.flags |= 33554434), h;
    }
    function c(h, v, d, g) {
      return v === null || v.tag !== 6 ? (v = cc(d, h.mode, g), v.return = h, v) : (v = e(v, d), v.return = h, v);
    }
    function i(h, v, d, g) {
      var T = d.type;
      return T === dl ? b(
        h,
        v,
        d.props.children,
        g,
        d.key
      ) : v !== null && (v.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Fl && a0(T) === v.type) ? (v = e(v, d.props), Ct(v, d), v.return = h, v) : (v = vf(
        d.type,
        d.key,
        d.props,
        null,
        h.mode,
        g
      ), Ct(v, d), v.return = h, v);
    }
    function s(h, v, d, g) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== d.containerInfo || v.stateNode.implementation !== d.implementation ? (v = ic(d, h.mode, g), v.return = h, v) : (v = e(v, d.children || []), v.return = h, v);
    }
    function b(h, v, d, g, T) {
      return v === null || v.tag !== 7 ? (v = Oa(
        d,
        h.mode,
        g,
        T
      ), v.return = h, v) : (v = e(v, d), v.return = h, v);
    }
    function z(h, v, d) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = cc(
          "" + v,
          h.mode,
          d
        ), v.return = h, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case zl:
            return d = vf(
              v.type,
              v.key,
              v.props,
              null,
              h.mode,
              d
            ), Ct(d, v), d.return = h, d;
          case Ul:
            return v = ic(
              v,
              h.mode,
              d
            ), v.return = h, v;
          case Fl:
            var g = v._init;
            return v = g(v._payload), z(h, v, d);
        }
        if (yu(v) || Pl(v))
          return v = Oa(
            v,
            h.mode,
            d,
            null
          ), v.return = h, v;
        if (typeof v.then == "function")
          return z(h, Le(v), d);
        if (v.$$typeof === ol)
          return z(
            h,
            ff(h, v),
            d
          );
        pe(h, v);
      }
      return null;
    }
    function y(h, v, d, g) {
      var T = v !== null ? v.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return T !== null ? null : c(h, v, "" + d, g);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case zl:
            return d.key === T ? i(h, v, d, g) : null;
          case Ul:
            return d.key === T ? s(h, v, d, g) : null;
          case Fl:
            return T = d._init, d = T(d._payload), y(h, v, d, g);
        }
        if (yu(d) || Pl(d))
          return T !== null ? null : b(h, v, d, g, null);
        if (typeof d.then == "function")
          return y(
            h,
            v,
            Le(d),
            g
          );
        if (d.$$typeof === ol)
          return y(
            h,
            v,
            ff(h, d),
            g
          );
        pe(h, d);
      }
      return null;
    }
    function S(h, v, d, g, T) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return h = h.get(d) || null, c(v, h, "" + g, T);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case zl:
            return h = h.get(
              g.key === null ? d : g.key
            ) || null, i(v, h, g, T);
          case Ul:
            return h = h.get(
              g.key === null ? d : g.key
            ) || null, s(v, h, g, T);
          case Fl:
            var R = g._init;
            return g = R(g._payload), S(
              h,
              v,
              d,
              g,
              T
            );
        }
        if (yu(g) || Pl(g))
          return h = h.get(d) || null, b(v, h, g, T, null);
        if (typeof g.then == "function")
          return S(
            h,
            v,
            d,
            Le(g),
            T
          );
        if (g.$$typeof === ol)
          return S(
            h,
            v,
            d,
            ff(v, g),
            T
          );
        pe(v, g);
      }
      return null;
    }
    function o(h, v, d, g) {
      for (var T = null, R = null, D = v, M = v = 0, hl = null; D !== null && M < d.length; M++) {
        D.index > M ? (hl = D, D = null) : hl = D.sibling;
        var Q = y(
          h,
          D,
          d[M],
          g
        );
        if (Q === null) {
          D === null && (D = hl);
          break;
        }
        l && D && Q.alternate === null && u(h, D), v = f(Q, v, M), R === null ? T = Q : R.sibling = Q, R = Q, D = hl;
      }
      if (M === d.length)
        return a(h, D), X && ma(h, M), T;
      if (D === null) {
        for (; M < d.length; M++)
          D = z(h, d[M], g), D !== null && (v = f(
            D,
            v,
            M
          ), R === null ? T = D : R.sibling = D, R = D);
        return X && ma(h, M), T;
      }
      for (D = t(D); M < d.length; M++)
        hl = S(
          D,
          h,
          M,
          d[M],
          g
        ), hl !== null && (l && hl.alternate !== null && D.delete(
          hl.key === null ? M : hl.key
        ), v = f(
          hl,
          v,
          M
        ), R === null ? T = hl : R.sibling = hl, R = hl);
      return l && D.forEach(function(la) {
        return u(h, la);
      }), X && ma(h, M), T;
    }
    function H(h, v, d, g) {
      if (d == null) throw Error(m(151));
      for (var T = null, R = null, D = v, M = v = 0, hl = null, Q = d.next(); D !== null && !Q.done; M++, Q = d.next()) {
        D.index > M ? (hl = D, D = null) : hl = D.sibling;
        var la = y(h, D, Q.value, g);
        if (la === null) {
          D === null && (D = hl);
          break;
        }
        l && D && la.alternate === null && u(h, D), v = f(la, v, M), R === null ? T = la : R.sibling = la, R = la, D = hl;
      }
      if (Q.done)
        return a(h, D), X && ma(h, M), T;
      if (D === null) {
        for (; !Q.done; M++, Q = d.next())
          Q = z(h, Q.value, g), Q !== null && (v = f(Q, v, M), R === null ? T = Q : R.sibling = Q, R = Q);
        return X && ma(h, M), T;
      }
      for (D = t(D); !Q.done; M++, Q = d.next())
        Q = S(D, h, M, Q.value, g), Q !== null && (l && Q.alternate !== null && D.delete(Q.key === null ? M : Q.key), v = f(Q, v, M), R === null ? T = Q : R.sibling = Q, R = Q);
      return l && D.forEach(function(ed) {
        return u(h, ed);
      }), X && ma(h, M), T;
    }
    function k(h, v, d, g) {
      if (typeof d == "object" && d !== null && d.type === dl && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case zl:
            l: {
              for (var T = d.key; v !== null; ) {
                if (v.key === T) {
                  if (T = d.type, T === dl) {
                    if (v.tag === 7) {
                      a(
                        h,
                        v.sibling
                      ), g = e(
                        v,
                        d.props.children
                      ), g.return = h, h = g;
                      break l;
                    }
                  } else if (v.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Fl && a0(T) === v.type) {
                    a(
                      h,
                      v.sibling
                    ), g = e(v, d.props), Ct(g, d), g.return = h, h = g;
                    break l;
                  }
                  a(h, v);
                  break;
                } else u(h, v);
                v = v.sibling;
              }
              d.type === dl ? (g = Oa(
                d.props.children,
                h.mode,
                g,
                d.key
              ), g.return = h, h = g) : (g = vf(
                d.type,
                d.key,
                d.props,
                null,
                h.mode,
                g
              ), Ct(g, d), g.return = h, h = g);
            }
            return n(h);
          case Ul:
            l: {
              for (T = d.key; v !== null; ) {
                if (v.key === T)
                  if (v.tag === 4 && v.stateNode.containerInfo === d.containerInfo && v.stateNode.implementation === d.implementation) {
                    a(
                      h,
                      v.sibling
                    ), g = e(v, d.children || []), g.return = h, h = g;
                    break l;
                  } else {
                    a(h, v);
                    break;
                  }
                else u(h, v);
                v = v.sibling;
              }
              g = ic(d, h.mode, g), g.return = h, h = g;
            }
            return n(h);
          case Fl:
            return T = d._init, d = T(d._payload), k(
              h,
              v,
              d,
              g
            );
        }
        if (yu(d))
          return o(
            h,
            v,
            d,
            g
          );
        if (Pl(d)) {
          if (T = Pl(d), typeof T != "function") throw Error(m(150));
          return d = T.call(d), H(
            h,
            v,
            d,
            g
          );
        }
        if (typeof d.then == "function")
          return k(
            h,
            v,
            Le(d),
            g
          );
        if (d.$$typeof === ol)
          return k(
            h,
            v,
            ff(h, d),
            g
          );
        pe(h, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, v !== null && v.tag === 6 ? (a(h, v.sibling), g = e(v, d), g.return = h, h = g) : (a(h, v), g = cc(d, h.mode, g), g.return = h, h = g), n(h)) : a(h, v);
    }
    return function(h, v, d, g) {
      try {
        Vt = 0;
        var T = k(
          h,
          v,
          d,
          g
        );
        return ka = null, T;
      } catch (D) {
        if (D === Zt) throw D;
        var R = rl(29, D, null, h.mode);
        return R.lanes = g, R.return = h, R;
      } finally {
      }
    };
  }
  var ba = t0(!0), e0 = t0(!1), Fa = tu(null), re = tu(0);
  function f0(l, u) {
    l = _u, r(re, l), r(Fa, u), _u = l | u.baseLanes;
  }
  function mn() {
    r(re, _u), r(Fa, Fa.current);
  }
  function Sn() {
    _u = re.current, cl(Fa), cl(re);
  }
  var Kl = tu(null), cu = null;
  function Qu(l) {
    var u = l.alternate;
    r(fl, fl.current & 1), r(Kl, l), cu === null && (u === null || Fa.current !== null || u.memoizedState !== null) && (cu = l);
  }
  function n0(l) {
    if (l.tag === 22) {
      if (r(fl, fl.current), r(Kl, l), cu === null) {
        var u = l.alternate;
        u !== null && u.memoizedState !== null && (cu = l);
      }
    } else Zu();
  }
  function Zu() {
    r(fl, fl.current), r(Kl, Kl.current);
  }
  function zu(l) {
    cl(Kl), cu === l && (cu = null), cl(fl);
  }
  var fl = tu(0);
  function Je(l) {
    for (var u = l; u !== null; ) {
      if (u.tag === 13) {
        var a = u.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!"))
          return u;
      } else if (u.tag === 19 && u.memoizedProps.revealOrder !== void 0) {
        if ((u.flags & 128) !== 0) return u;
      } else if (u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === l) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === l) return null;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
    return null;
  }
  var rs = typeof AbortController < "u" ? AbortController : function() {
    var l = [], u = this.signal = {
      aborted: !1,
      addEventListener: function(a, t) {
        l.push(t);
      }
    };
    this.abort = function() {
      u.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, Js = E.unstable_scheduleCallback, ws = E.unstable_NormalPriority, nl = {
    $$typeof: ol,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function bn() {
    return {
      controller: new rs(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function xt(l) {
    l.refCount--, l.refCount === 0 && Js(ws, function() {
      l.controller.abort();
    });
  }
  var Kt = null, gn = 0, Pa = 0, Ia = null;
  function Ws(l, u) {
    if (Kt === null) {
      var a = Kt = [];
      gn = 0, Pa = Dc(), Ia = {
        status: "pending",
        value: void 0,
        then: function(t) {
          a.push(t);
        }
      };
    }
    return gn++, u.then(c0, c0), u;
  }
  function c0() {
    if (--gn === 0 && Kt !== null) {
      Ia !== null && (Ia.status = "fulfilled");
      var l = Kt;
      Kt = null, Pa = 0, Ia = null;
      for (var u = 0; u < l.length; u++) (0, l[u])();
    }
  }
  function $s(l, u) {
    var a = [], t = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        t.status = "fulfilled", t.value = u;
        for (var e = 0; e < a.length; e++) (0, a[e])(u);
      },
      function(e) {
        for (t.status = "rejected", t.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), t;
  }
  var i0 = O.S;
  O.S = function(l, u) {
    typeof u == "object" && u !== null && typeof u.then == "function" && Ws(l, u), i0 !== null && i0(l, u);
  };
  var ga = tu(null);
  function zn() {
    var l = ga.current;
    return l !== null ? l : x.pooledCache;
  }
  function we(l, u) {
    u === null ? r(ga, ga.current) : r(ga, u.pool);
  }
  function v0() {
    var l = zn();
    return l === null ? null : { parent: nl._currentValue, pool: l };
  }
  var ju = 0, q = null, j = null, ll = null, We = !1, lt = !1, za = !1, $e = 0, Lt = 0, ut = null, ks = 0;
  function P() {
    throw Error(m(321));
  }
  function An(l, u) {
    if (u === null) return !1;
    for (var a = 0; a < u.length && a < l.length; a++)
      if (!ql(l[a], u[a])) return !1;
    return !0;
  }
  function En(l, u, a, t, e, f) {
    return ju = f, q = u, u.memoizedState = null, u.updateQueue = null, u.lanes = 0, O.H = l === null || l.memoizedState === null ? Aa : Vu, za = !1, f = a(t, e), za = !1, lt && (f = h0(
      u,
      a,
      t,
      e
    )), s0(l), f;
  }
  function s0(l) {
    O.H = iu;
    var u = j !== null && j.next !== null;
    if (ju = 0, ll = j = q = null, We = !1, Lt = 0, ut = null, u) throw Error(m(300));
    l === null || vl || (l = l.dependencies, l !== null && ef(l) && (vl = !0));
  }
  function h0(l, u, a, t) {
    q = l;
    var e = 0;
    do {
      if (lt && (ut = null), Lt = 0, lt = !1, 25 <= e) throw Error(m(301));
      if (e += 1, ll = j = null, l.updateQueue != null) {
        var f = l.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      O.H = Ea, f = u(a, t);
    } while (lt);
    return f;
  }
  function Fs() {
    var l = O.H, u = l.useState()[0];
    return u = typeof u.then == "function" ? pt(u) : u, l = l.useState()[0], (j !== null ? j.memoizedState : null) !== l && (q.flags |= 1024), u;
  }
  function Tn() {
    var l = $e !== 0;
    return $e = 0, l;
  }
  function on(l, u, a) {
    u.updateQueue = l.updateQueue, u.flags &= -2053, l.lanes &= ~a;
  }
  function Dn(l) {
    if (We) {
      for (l = l.memoizedState; l !== null; ) {
        var u = l.queue;
        u !== null && (u.pending = null), l = l.next;
      }
      We = !1;
    }
    ju = 0, ll = j = q = null, lt = !1, Lt = $e = 0, ut = null;
  }
  function Ol() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ll === null ? q.memoizedState = ll = l : ll = ll.next = l, ll;
  }
  function ul() {
    if (j === null) {
      var l = q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = j.next;
    var u = ll === null ? q.memoizedState : ll.next;
    if (u !== null)
      ll = u, j = l;
    else {
      if (l === null)
        throw q.alternate === null ? Error(m(467)) : Error(m(310));
      j = l, l = {
        memoizedState: j.memoizedState,
        baseState: j.baseState,
        baseQueue: j.baseQueue,
        queue: j.queue,
        next: null
      }, ll === null ? q.memoizedState = ll = l : ll = ll.next = l;
    }
    return ll;
  }
  var ke;
  ke = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function pt(l) {
    var u = Lt;
    return Lt += 1, ut === null && (ut = []), l = l0(ut, l, u), u = q, (ll === null ? u.memoizedState : ll.next) === null && (u = u.alternate, O.H = u === null || u.memoizedState === null ? Aa : Vu), l;
  }
  function Fe(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return pt(l);
      if (l.$$typeof === ol) return gl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Mn(l) {
    var u = null, a = q.updateQueue;
    if (a !== null && (u = a.memoCache), u == null) {
      var t = q.alternate;
      t !== null && (t = t.updateQueue, t !== null && (t = t.memoCache, t != null && (u = {
        data: t.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (u == null && (u = { data: [], index: 0 }), a === null && (a = ke(), q.updateQueue = a), a.memoCache = u, a = u.data[u.index], a === void 0)
      for (a = u.data[u.index] = Array(l), t = 0; t < l; t++)
        a[t] = gt;
    return u.index++, a;
  }
  function Au(l, u) {
    return typeof u == "function" ? u(l) : u;
  }
  function Pe(l) {
    var u = ul();
    return On(u, j, l);
  }
  function On(l, u, a) {
    var t = l.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = a;
    var e = l.baseQueue, f = t.pending;
    if (f !== null) {
      if (e !== null) {
        var n = e.next;
        e.next = f.next, f.next = n;
      }
      u.baseQueue = e = f, t.pending = null;
    }
    if (f = l.baseState, e === null) l.memoizedState = f;
    else {
      u = e.next;
      var c = n = null, i = null, s = u, b = !1;
      do {
        var z = s.lane & -536870913;
        if (z !== s.lane ? (Y & z) === z : (ju & z) === z) {
          var y = s.revertLane;
          if (y === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null
            }), z === Pa && (b = !0);
          else if ((ju & y) === y) {
            s = s.next, y === Pa && (b = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: s.revertLane,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null
            }, i === null ? (c = i = z, n = f) : i = i.next = z, q.lanes |= y, Wu |= y;
          z = s.action, za && a(f, z), f = s.hasEagerState ? s.eagerState : a(f, z);
        } else
          y = {
            lane: z,
            revertLane: s.revertLane,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null
          }, i === null ? (c = i = y, n = f) : i = i.next = y, q.lanes |= z, Wu |= z;
        s = s.next;
      } while (s !== null && s !== u);
      if (i === null ? n = f : i.next = c, !ql(f, l.memoizedState) && (vl = !0, b && (a = Ia, a !== null)))
        throw a;
      l.memoizedState = f, l.baseState = n, l.baseQueue = i, t.lastRenderedState = f;
    }
    return e === null && (t.lanes = 0), [l.memoizedState, t.dispatch];
  }
  function Un(l) {
    var u = ul(), a = u.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var t = a.dispatch, e = a.pending, f = u.memoizedState;
    if (e !== null) {
      a.pending = null;
      var n = e = e.next;
      do
        f = l(f, n.action), n = n.next;
      while (n !== e);
      ql(f, u.memoizedState) || (vl = !0), u.memoizedState = f, u.baseQueue === null && (u.baseState = f), a.lastRenderedState = f;
    }
    return [f, t];
  }
  function d0(l, u, a) {
    var t = q, e = ul(), f = X;
    if (f) {
      if (a === void 0) throw Error(m(407));
      a = a();
    } else a = u();
    var n = !ql(
      (j || e).memoizedState,
      a
    );
    if (n && (e.memoizedState = a, vl = !0), e = e.queue, qn(S0.bind(null, t, e, l), [
      l
    ]), e.getSnapshot !== u || n || ll !== null && ll.memoizedState.tag & 1) {
      if (t.flags |= 2048, at(
        9,
        m0.bind(
          null,
          t,
          e,
          a,
          u
        ),
        { destroy: void 0 },
        null
      ), x === null) throw Error(m(349));
      f || (ju & 60) !== 0 || y0(t, u, a);
    }
    return a;
  }
  function y0(l, u, a) {
    l.flags |= 16384, l = { getSnapshot: u, value: a }, u = q.updateQueue, u === null ? (u = ke(), q.updateQueue = u, u.stores = [l]) : (a = u.stores, a === null ? u.stores = [l] : a.push(l));
  }
  function m0(l, u, a, t) {
    u.value = a, u.getSnapshot = t, b0(u) && g0(l);
  }
  function S0(l, u, a) {
    return a(function() {
      b0(u) && g0(l);
    });
  }
  function b0(l) {
    var u = l.getSnapshot;
    l = l.value;
    try {
      var a = u();
      return !ql(l, a);
    } catch {
      return !0;
    }
  }
  function g0(l) {
    var u = Xu(l, 2);
    u !== null && El(u, l, 2);
  }
  function Hn(l) {
    var u = Ol();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), za) {
        Nu(!0);
        try {
          a();
        } finally {
          Nu(!1);
        }
      }
    }
    return u.memoizedState = u.baseState = l, u.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Au,
      lastRenderedState: l
    }, u;
  }
  function z0(l, u, a, t) {
    return l.baseState = a, On(
      l,
      j,
      typeof t == "function" ? t : Au
    );
  }
  function Ps(l, u, a, t, e) {
    if (uf(l)) throw Error(m(485));
    if (l = u.action, l !== null) {
      var f = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(n) {
          f.listeners.push(n);
        }
      };
      O.T !== null ? a(!0) : f.isTransition = !1, t(f), a = u.pending, a === null ? (f.next = u.pending = f, A0(u, f)) : (f.next = a.next, u.pending = a.next = f);
    }
  }
  function A0(l, u) {
    var a = u.action, t = u.payload, e = l.state;
    if (u.isTransition) {
      var f = O.T, n = {};
      O.T = n;
      try {
        var c = a(e, t), i = O.S;
        i !== null && i(n, c), E0(l, u, c);
      } catch (s) {
        _n(l, u, s);
      } finally {
        O.T = f;
      }
    } else
      try {
        f = a(e, t), E0(l, u, f);
      } catch (s) {
        _n(l, u, s);
      }
  }
  function E0(l, u, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(t) {
        T0(l, u, t);
      },
      function(t) {
        return _n(l, u, t);
      }
    ) : T0(l, u, a);
  }
  function T0(l, u, a) {
    u.status = "fulfilled", u.value = a, o0(u), l.state = a, u = l.pending, u !== null && (a = u.next, a === u ? l.pending = null : (a = a.next, u.next = a, A0(l, a)));
  }
  function _n(l, u, a) {
    var t = l.pending;
    if (l.pending = null, t !== null) {
      t = t.next;
      do
        u.status = "rejected", u.reason = a, o0(u), u = u.next;
      while (u !== t);
    }
    l.action = null;
  }
  function o0(l) {
    l = l.listeners;
    for (var u = 0; u < l.length; u++) (0, l[u])();
  }
  function D0(l, u) {
    return u;
  }
  function M0(l, u) {
    if (X) {
      var a = x.formState;
      if (a !== null) {
        l: {
          var t = q;
          if (X) {
            if (yl) {
              u: {
                for (var e = yl, f = nu; e.nodeType !== 8; ) {
                  if (!f) {
                    e = null;
                    break u;
                  }
                  if (e = au(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break u;
                  }
                }
                f = e.data, e = f === "F!" || f === "F" ? e : null;
              }
              if (e) {
                yl = au(
                  e.nextSibling
                ), t = e.data === "F!";
                break l;
              }
            }
            Sa(t);
          }
          t = !1;
        }
        t && (u = a[0]);
      }
    }
    return a = Ol(), a.memoizedState = a.baseState = u, t = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: D0,
      lastRenderedState: u
    }, a.queue = t, a = K0.bind(
      null,
      q,
      t
    ), t.dispatch = a, t = Hn(!1), f = Gn.bind(
      null,
      q,
      !1,
      t.queue
    ), t = Ol(), e = {
      state: u,
      dispatch: null,
      action: l,
      pending: null
    }, t.queue = e, a = Ps.bind(
      null,
      q,
      e,
      f,
      a
    ), e.dispatch = a, t.memoizedState = l, [u, a, !1];
  }
  function O0(l) {
    var u = ul();
    return U0(u, j, l);
  }
  function U0(l, u, a) {
    u = On(
      l,
      u,
      D0
    )[0], l = Pe(Au)[0], u = typeof u == "object" && u !== null && typeof u.then == "function" ? pt(u) : u;
    var t = ul(), e = t.queue, f = e.dispatch;
    return a !== t.memoizedState && (q.flags |= 2048, at(
      9,
      Is.bind(null, e, a),
      { destroy: void 0 },
      null
    )), [u, f, l];
  }
  function Is(l, u) {
    l.action = u;
  }
  function H0(l) {
    var u = ul(), a = j;
    if (a !== null)
      return U0(u, a, l);
    ul(), u = u.memoizedState, a = ul();
    var t = a.queue.dispatch;
    return a.memoizedState = l, [u, t, !1];
  }
  function at(l, u, a, t) {
    return l = { tag: l, create: u, inst: a, deps: t, next: null }, u = q.updateQueue, u === null && (u = ke(), q.updateQueue = u), a = u.lastEffect, a === null ? u.lastEffect = l.next = l : (t = a.next, a.next = l, l.next = t, u.lastEffect = l), l;
  }
  function _0() {
    return ul().memoizedState;
  }
  function Ie(l, u, a, t) {
    var e = Ol();
    q.flags |= l, e.memoizedState = at(
      1 | u,
      a,
      { destroy: void 0 },
      t === void 0 ? null : t
    );
  }
  function lf(l, u, a, t) {
    var e = ul();
    t = t === void 0 ? null : t;
    var f = e.memoizedState.inst;
    j !== null && t !== null && An(t, j.memoizedState.deps) ? e.memoizedState = at(u, a, f, t) : (q.flags |= l, e.memoizedState = at(1 | u, a, f, t));
  }
  function q0(l, u) {
    Ie(8390656, 8, l, u);
  }
  function qn(l, u) {
    lf(2048, 8, l, u);
  }
  function R0(l, u) {
    return lf(4, 2, l, u);
  }
  function B0(l, u) {
    return lf(4, 4, l, u);
  }
  function N0(l, u) {
    if (typeof u == "function") {
      l = l();
      var a = u(l);
      return function() {
        typeof a == "function" ? a() : u(null);
      };
    }
    if (u != null)
      return l = l(), u.current = l, function() {
        u.current = null;
      };
  }
  function Y0(l, u, a) {
    a = a != null ? a.concat([l]) : null, lf(4, 4, N0.bind(null, u, l), a);
  }
  function Rn() {
  }
  function G0(l, u) {
    var a = ul();
    u = u === void 0 ? null : u;
    var t = a.memoizedState;
    return u !== null && An(u, t[1]) ? t[0] : (a.memoizedState = [l, u], l);
  }
  function X0(l, u) {
    var a = ul();
    u = u === void 0 ? null : u;
    var t = a.memoizedState;
    if (u !== null && An(u, t[1]))
      return t[0];
    if (t = l(), za) {
      Nu(!0);
      try {
        l();
      } finally {
        Nu(!1);
      }
    }
    return a.memoizedState = [t, u], t;
  }
  function Bn(l, u, a) {
    return a === void 0 || (ju & 1073741824) !== 0 ? l.memoizedState = u : (l.memoizedState = a, l = Z1(), q.lanes |= l, Wu |= l, a);
  }
  function Q0(l, u, a, t) {
    return ql(a, u) ? a : Fa.current !== null ? (l = Bn(l, a, t), ql(l, u) || (vl = !0), l) : (ju & 42) === 0 ? (vl = !0, l.memoizedState = a) : (l = Z1(), q.lanes |= l, Wu |= l, u);
  }
  function Z0(l, u, a, t, e) {
    var f = G.p;
    G.p = f !== 0 && 8 > f ? f : 8;
    var n = O.T, c = {};
    O.T = c, Gn(l, !1, u, a);
    try {
      var i = e(), s = O.S;
      if (s !== null && s(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var b = $s(
          i,
          t
        );
        rt(
          l,
          u,
          b,
          Yl(l)
        );
      } else
        rt(
          l,
          u,
          t,
          Yl(l)
        );
    } catch (z) {
      rt(
        l,
        u,
        { then: function() {
        }, status: "rejected", reason: z },
        Yl()
      );
    } finally {
      G.p = f, O.T = n;
    }
  }
  function lh() {
  }
  function Nn(l, u, a, t) {
    if (l.tag !== 5) throw Error(m(476));
    var e = j0(l).queue;
    Z0(
      l,
      e,
      u,
      Xl,
      a === null ? lh : function() {
        return V0(l), a(t);
      }
    );
  }
  function j0(l) {
    var u = l.memoizedState;
    if (u !== null) return u;
    u = {
      memoizedState: Xl,
      baseState: Xl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Au,
        lastRenderedState: Xl
      },
      next: null
    };
    var a = {};
    return u.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Au,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = u, l = l.alternate, l !== null && (l.memoizedState = u), u;
  }
  function V0(l) {
    var u = j0(l).next.queue;
    rt(l, u, {}, Yl());
  }
  function Yn() {
    return gl(he);
  }
  function C0() {
    return ul().memoizedState;
  }
  function x0() {
    return ul().memoizedState;
  }
  function uh(l) {
    for (var u = l.return; u !== null; ) {
      switch (u.tag) {
        case 24:
        case 3:
          var a = Yl();
          l = Ku(a);
          var t = Lu(u, l, a);
          t !== null && (El(t, u, a), Wt(t, u, a)), u = { cache: bn() }, l.payload = u;
          return;
      }
      u = u.return;
    }
  }
  function ah(l, u, a) {
    var t = Yl();
    a = {
      lane: t,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uf(l) ? L0(u, a) : (a = vn(l, u, a, t), a !== null && (El(a, l, t), p0(a, u, t)));
  }
  function K0(l, u, a) {
    var t = Yl();
    rt(l, u, a, t);
  }
  function rt(l, u, a, t) {
    var e = {
      lane: t,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uf(l)) L0(u, e);
    else {
      var f = l.alternate;
      if (l.lanes === 0 && (f === null || f.lanes === 0) && (f = u.lastRenderedReducer, f !== null))
        try {
          var n = u.lastRenderedState, c = f(n, a);
          if (e.hasEagerState = !0, e.eagerState = c, ql(c, n))
            return je(l, u, e, 0), x === null && Ze(), !1;
        } catch {
        } finally {
        }
      if (a = vn(l, u, e, t), a !== null)
        return El(a, l, t), p0(a, u, t), !0;
    }
    return !1;
  }
  function Gn(l, u, a, t) {
    if (t = {
      lane: 2,
      revertLane: Dc(),
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uf(l)) {
      if (u) throw Error(m(479));
    } else
      u = vn(
        l,
        a,
        t,
        2
      ), u !== null && El(u, l, 2);
  }
  function uf(l) {
    var u = l.alternate;
    return l === q || u !== null && u === q;
  }
  function L0(l, u) {
    lt = We = !0;
    var a = l.pending;
    a === null ? u.next = u : (u.next = a.next, a.next = u), l.pending = u;
  }
  function p0(l, u, a) {
    if ((a & 4194176) !== 0) {
      var t = u.lanes;
      t &= l.pendingLanes, a |= t, u.lanes = a, ui(l, a);
    }
  }
  var iu = {
    readContext: gl,
    use: Fe,
    useCallback: P,
    useContext: P,
    useEffect: P,
    useImperativeHandle: P,
    useLayoutEffect: P,
    useInsertionEffect: P,
    useMemo: P,
    useReducer: P,
    useRef: P,
    useState: P,
    useDebugValue: P,
    useDeferredValue: P,
    useTransition: P,
    useSyncExternalStore: P,
    useId: P
  };
  iu.useCacheRefresh = P, iu.useMemoCache = P, iu.useHostTransitionStatus = P, iu.useFormState = P, iu.useActionState = P, iu.useOptimistic = P;
  var Aa = {
    readContext: gl,
    use: Fe,
    useCallback: function(l, u) {
      return Ol().memoizedState = [
        l,
        u === void 0 ? null : u
      ], l;
    },
    useContext: gl,
    useEffect: q0,
    useImperativeHandle: function(l, u, a) {
      a = a != null ? a.concat([l]) : null, Ie(
        4194308,
        4,
        N0.bind(null, u, l),
        a
      );
    },
    useLayoutEffect: function(l, u) {
      return Ie(4194308, 4, l, u);
    },
    useInsertionEffect: function(l, u) {
      Ie(4, 2, l, u);
    },
    useMemo: function(l, u) {
      var a = Ol();
      u = u === void 0 ? null : u;
      var t = l();
      if (za) {
        Nu(!0);
        try {
          l();
        } finally {
          Nu(!1);
        }
      }
      return a.memoizedState = [t, u], t;
    },
    useReducer: function(l, u, a) {
      var t = Ol();
      if (a !== void 0) {
        var e = a(u);
        if (za) {
          Nu(!0);
          try {
            a(u);
          } finally {
            Nu(!1);
          }
        }
      } else e = u;
      return t.memoizedState = t.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, t.queue = l, l = l.dispatch = ah.bind(
        null,
        q,
        l
      ), [t.memoizedState, l];
    },
    useRef: function(l) {
      var u = Ol();
      return l = { current: l }, u.memoizedState = l;
    },
    useState: function(l) {
      l = Hn(l);
      var u = l.queue, a = K0.bind(null, q, u);
      return u.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, u) {
      var a = Ol();
      return Bn(a, l, u);
    },
    useTransition: function() {
      var l = Hn(!1);
      return l = Z0.bind(
        null,
        q,
        l.queue,
        !0,
        !1
      ), Ol().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, u, a) {
      var t = q, e = Ol();
      if (X) {
        if (a === void 0)
          throw Error(m(407));
        a = a();
      } else {
        if (a = u(), x === null) throw Error(m(349));
        (Y & 60) !== 0 || y0(t, u, a);
      }
      e.memoizedState = a;
      var f = { value: a, getSnapshot: u };
      return e.queue = f, q0(S0.bind(null, t, f, l), [
        l
      ]), t.flags |= 2048, at(
        9,
        m0.bind(
          null,
          t,
          f,
          a,
          u
        ),
        { destroy: void 0 },
        null
      ), a;
    },
    useId: function() {
      var l = Ol(), u = x.identifierPrefix;
      if (X) {
        var a = gu, t = bu;
        a = (t & ~(1 << 32 - _l(t) - 1)).toString(32) + a, u = ":" + u + "R" + a, a = $e++, 0 < a && (u += "H" + a.toString(32)), u += ":";
      } else
        a = ks++, u = ":" + u + "r" + a.toString(32) + ":";
      return l.memoizedState = u;
    },
    useCacheRefresh: function() {
      return Ol().memoizedState = uh.bind(
        null,
        q
      );
    }
  };
  Aa.useMemoCache = Mn, Aa.useHostTransitionStatus = Yn, Aa.useFormState = M0, Aa.useActionState = M0, Aa.useOptimistic = function(l) {
    var u = Ol();
    u.memoizedState = u.baseState = l;
    var a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return u.queue = a, u = Gn.bind(
      null,
      q,
      !0,
      a
    ), a.dispatch = u, [l, u];
  };
  var Vu = {
    readContext: gl,
    use: Fe,
    useCallback: G0,
    useContext: gl,
    useEffect: qn,
    useImperativeHandle: Y0,
    useInsertionEffect: R0,
    useLayoutEffect: B0,
    useMemo: X0,
    useReducer: Pe,
    useRef: _0,
    useState: function() {
      return Pe(Au);
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, u) {
      var a = ul();
      return Q0(
        a,
        j.memoizedState,
        l,
        u
      );
    },
    useTransition: function() {
      var l = Pe(Au)[0], u = ul().memoizedState;
      return [
        typeof l == "boolean" ? l : pt(l),
        u
      ];
    },
    useSyncExternalStore: d0,
    useId: C0
  };
  Vu.useCacheRefresh = x0, Vu.useMemoCache = Mn, Vu.useHostTransitionStatus = Yn, Vu.useFormState = O0, Vu.useActionState = O0, Vu.useOptimistic = function(l, u) {
    var a = ul();
    return z0(a, j, l, u);
  };
  var Ea = {
    readContext: gl,
    use: Fe,
    useCallback: G0,
    useContext: gl,
    useEffect: qn,
    useImperativeHandle: Y0,
    useInsertionEffect: R0,
    useLayoutEffect: B0,
    useMemo: X0,
    useReducer: Un,
    useRef: _0,
    useState: function() {
      return Un(Au);
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, u) {
      var a = ul();
      return j === null ? Bn(a, l, u) : Q0(
        a,
        j.memoizedState,
        l,
        u
      );
    },
    useTransition: function() {
      var l = Un(Au)[0], u = ul().memoizedState;
      return [
        typeof l == "boolean" ? l : pt(l),
        u
      ];
    },
    useSyncExternalStore: d0,
    useId: C0
  };
  Ea.useCacheRefresh = x0, Ea.useMemoCache = Mn, Ea.useHostTransitionStatus = Yn, Ea.useFormState = H0, Ea.useActionState = H0, Ea.useOptimistic = function(l, u) {
    var a = ul();
    return j !== null ? z0(a, j, l, u) : (a.baseState = l, [l, a.queue.dispatch]);
  };
  function Xn(l, u, a, t) {
    u = l.memoizedState, a = a(t, u), a = a == null ? u : Z({}, u, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Qn = {
    isMounted: function(l) {
      return (l = l._reactInternals) ? U(l) === l : !1;
    },
    enqueueSetState: function(l, u, a) {
      l = l._reactInternals;
      var t = Yl(), e = Ku(t);
      e.payload = u, a != null && (e.callback = a), u = Lu(l, e, t), u !== null && (El(u, l, t), Wt(u, l, t));
    },
    enqueueReplaceState: function(l, u, a) {
      l = l._reactInternals;
      var t = Yl(), e = Ku(t);
      e.tag = 1, e.payload = u, a != null && (e.callback = a), u = Lu(l, e, t), u !== null && (El(u, l, t), Wt(u, l, t));
    },
    enqueueForceUpdate: function(l, u) {
      l = l._reactInternals;
      var a = Yl(), t = Ku(a);
      t.tag = 2, u != null && (t.callback = u), u = Lu(l, t, a), u !== null && (El(u, l, a), Wt(u, l, a));
    }
  };
  function r0(l, u, a, t, e, f, n) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(t, f, n) : u.prototype && u.prototype.isPureReactComponent ? !Nt(a, t) || !Nt(e, f) : !0;
  }
  function J0(l, u, a, t) {
    l = u.state, typeof u.componentWillReceiveProps == "function" && u.componentWillReceiveProps(a, t), typeof u.UNSAFE_componentWillReceiveProps == "function" && u.UNSAFE_componentWillReceiveProps(a, t), u.state !== l && Qn.enqueueReplaceState(u, u.state, null);
  }
  function Ta(l, u) {
    var a = u;
    if ("ref" in u) {
      a = {};
      for (var t in u)
        t !== "ref" && (a[t] = u[t]);
    }
    if (l = l.defaultProps) {
      a === u && (a = Z({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var af = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var u = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(u)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function w0(l) {
    af(l);
  }
  function W0(l) {
    console.error(l);
  }
  function $0(l) {
    af(l);
  }
  function tf(l, u) {
    try {
      var a = l.onUncaughtError;
      a(u.value, { componentStack: u.stack });
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  function k0(l, u, a) {
    try {
      var t = l.onCaughtError;
      t(a.value, {
        componentStack: a.stack,
        errorBoundary: u.tag === 1 ? u.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Zn(l, u, a) {
    return a = Ku(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      tf(l, u);
    }, a;
  }
  function F0(l) {
    return l = Ku(l), l.tag = 3, l;
  }
  function P0(l, u, a, t) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var f = t.value;
      l.payload = function() {
        return e(f);
      }, l.callback = function() {
        k0(u, a, t);
      };
    }
    var n = a.stateNode;
    n !== null && typeof n.componentDidCatch == "function" && (l.callback = function() {
      k0(u, a, t), typeof e != "function" && ($u === null ? $u = /* @__PURE__ */ new Set([this]) : $u.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function th(l, u, a, t, e) {
    if (a.flags |= 32768, t !== null && typeof t == "object" && typeof t.then == "function") {
      if (u = a.alternate, u !== null && wt(
        u,
        a,
        e,
        !0
      ), a = Kl.current, a !== null) {
        switch (a.tag) {
          case 13:
            return cu === null ? zc() : a.alternate === null && $ === 0 && ($ = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, t === yn ? a.flags |= 16384 : (u = a.updateQueue, u === null ? a.updateQueue = /* @__PURE__ */ new Set([t]) : u.add(t), Ec(l, t, e)), !1;
          case 22:
            return a.flags |= 65536, t === yn ? a.flags |= 16384 : (u = a.updateQueue, u === null ? (u = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([t])
            }, a.updateQueue = u) : (a = u.retryQueue, a === null ? u.retryQueue = /* @__PURE__ */ new Set([t]) : a.add(t)), Ec(l, t, e)), !1;
        }
        throw Error(m(435, a.tag));
      }
      return Ec(l, t, e), zc(), !1;
    }
    if (X)
      return u = Kl.current, u !== null ? ((u.flags & 65536) === 0 && (u.flags |= 256), u.flags |= 65536, u.lanes = e, t !== dn && (l = Error(m(422), { cause: t }), Qt(Vl(l, a)))) : (t !== dn && (u = Error(m(423), {
        cause: t
      }), Qt(
        Vl(u, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, t = Vl(t, a), e = Zn(
        l.stateNode,
        t,
        e
      ), Pn(l, e), $ !== 4 && ($ = 2)), !1;
    var f = Error(m(520), { cause: t });
    if (f = Vl(f, a), ae === null ? ae = [f] : ae.push(f), $ !== 4 && ($ = 2), u === null) return !0;
    t = Vl(t, a), a = u;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = Zn(a.stateNode, t, l), Pn(a, l), !1;
        case 1:
          if (u = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof u.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && ($u === null || !$u.has(f))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = F0(e), P0(
              e,
              l,
              a,
              t
            ), Pn(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var I0 = Error(m(461)), vl = !1;
  function ml(l, u, a, t) {
    u.child = l === null ? e0(u, null, a, t) : ba(
      u,
      l.child,
      a,
      t
    );
  }
  function l1(l, u, a, t, e) {
    a = a.render;
    var f = u.ref;
    if ("ref" in t) {
      var n = {};
      for (var c in t)
        c !== "ref" && (n[c] = t[c]);
    } else n = t;
    return Da(u), t = En(
      l,
      u,
      a,
      n,
      f,
      e
    ), c = Tn(), l !== null && !vl ? (on(l, u, e), Eu(l, u, e)) : (X && c && sn(u), u.flags |= 1, ml(l, u, t, e), u.child);
  }
  function u1(l, u, a, t, e) {
    if (l === null) {
      var f = a.type;
      return typeof f == "function" && !nc(f) && f.defaultProps === void 0 && a.compare === null ? (u.tag = 15, u.type = f, a1(
        l,
        u,
        f,
        t,
        e
      )) : (l = vf(
        a.type,
        null,
        t,
        u,
        u.mode,
        e
      ), l.ref = u.ref, l.return = u, u.child = l);
    }
    if (f = l.child, !Jn(l, e)) {
      var n = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Nt, a(n, t) && l.ref === u.ref)
        return Eu(l, u, e);
    }
    return u.flags |= 1, l = wu(f, t), l.ref = u.ref, l.return = u, u.child = l;
  }
  function a1(l, u, a, t, e) {
    if (l !== null) {
      var f = l.memoizedProps;
      if (Nt(f, t) && l.ref === u.ref)
        if (vl = !1, u.pendingProps = t = f, Jn(l, e))
          (l.flags & 131072) !== 0 && (vl = !0);
        else
          return u.lanes = l.lanes, Eu(l, u, e);
    }
    return jn(
      l,
      u,
      a,
      t,
      e
    );
  }
  function t1(l, u, a) {
    var t = u.pendingProps, e = t.children, f = (u.stateNode._pendingVisibility & 2) !== 0, n = l !== null ? l.memoizedState : null;
    if (Jt(l, u), t.mode === "hidden" || f) {
      if ((u.flags & 128) !== 0) {
        if (t = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = u.child = l.child, f = 0; e !== null; )
            f = f | e.lanes | e.childLanes, e = e.sibling;
          u.childLanes = f & ~t;
        } else u.childLanes = 0, u.child = null;
        return e1(
          l,
          u,
          t,
          a
        );
      }
      if ((a & 536870912) !== 0)
        u.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && we(
          u,
          n !== null ? n.cachePool : null
        ), n !== null ? f0(u, n) : mn(), n0(u);
      else
        return u.lanes = u.childLanes = 536870912, e1(
          l,
          u,
          n !== null ? n.baseLanes | a : a,
          a
        );
    } else
      n !== null ? (we(u, n.cachePool), f0(u, n), Zu(), u.memoizedState = null) : (l !== null && we(u, null), mn(), Zu());
    return ml(l, u, e, a), u.child;
  }
  function e1(l, u, a, t) {
    var e = zn();
    return e = e === null ? null : { parent: nl._currentValue, pool: e }, u.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && we(u, null), mn(), n0(u), l !== null && wt(l, u, t, !0), null;
  }
  function Jt(l, u) {
    var a = u.ref;
    if (a === null)
      l !== null && l.ref !== null && (u.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(m(284));
      (l === null || l.ref !== a) && (u.flags |= 2097664);
    }
  }
  function jn(l, u, a, t, e) {
    return Da(u), a = En(
      l,
      u,
      a,
      t,
      void 0,
      e
    ), t = Tn(), l !== null && !vl ? (on(l, u, e), Eu(l, u, e)) : (X && t && sn(u), u.flags |= 1, ml(l, u, a, e), u.child);
  }
  function f1(l, u, a, t, e, f) {
    return Da(u), u.updateQueue = null, a = h0(
      u,
      t,
      a,
      e
    ), s0(l), t = Tn(), l !== null && !vl ? (on(l, u, f), Eu(l, u, f)) : (X && t && sn(u), u.flags |= 1, ml(l, u, a, f), u.child);
  }
  function n1(l, u, a, t, e) {
    if (Da(u), u.stateNode === null) {
      var f = wa, n = a.contextType;
      typeof n == "object" && n !== null && (f = gl(n)), f = new a(t, f), u.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Qn, u.stateNode = f, f._reactInternals = u, f = u.stateNode, f.props = t, f.state = u.memoizedState, f.refs = {}, kn(u), n = a.contextType, f.context = typeof n == "object" && n !== null ? gl(n) : wa, f.state = u.memoizedState, n = a.getDerivedStateFromProps, typeof n == "function" && (Xn(
        u,
        a,
        n,
        t
      ), f.state = u.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (n = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), n !== f.state && Qn.enqueueReplaceState(f, f.state, null), kt(u, t, f, e), $t(), f.state = u.memoizedState), typeof f.componentDidMount == "function" && (u.flags |= 4194308), t = !0;
    } else if (l === null) {
      f = u.stateNode;
      var c = u.memoizedProps, i = Ta(a, c);
      f.props = i;
      var s = f.context, b = a.contextType;
      n = wa, typeof b == "object" && b !== null && (n = gl(b));
      var z = a.getDerivedStateFromProps;
      b = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function", c = u.pendingProps !== c, b || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (c || s !== n) && J0(
        u,
        f,
        t,
        n
      ), xu = !1;
      var y = u.memoizedState;
      f.state = y, kt(u, t, f, e), $t(), s = u.memoizedState, c || y !== s || xu ? (typeof z == "function" && (Xn(
        u,
        a,
        z,
        t
      ), s = u.memoizedState), (i = xu || r0(
        u,
        a,
        i,
        t,
        y,
        s,
        n
      )) ? (b || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (u.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (u.flags |= 4194308), u.memoizedProps = t, u.memoizedState = s), f.props = t, f.state = s, f.context = n, t = i) : (typeof f.componentDidMount == "function" && (u.flags |= 4194308), t = !1);
    } else {
      f = u.stateNode, Fn(l, u), n = u.memoizedProps, b = Ta(a, n), f.props = b, z = u.pendingProps, y = f.context, s = a.contextType, i = wa, typeof s == "object" && s !== null && (i = gl(s)), c = a.getDerivedStateFromProps, (s = typeof c == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (n !== z || y !== i) && J0(
        u,
        f,
        t,
        i
      ), xu = !1, y = u.memoizedState, f.state = y, kt(u, t, f, e), $t();
      var S = u.memoizedState;
      n !== z || y !== S || xu || l !== null && l.dependencies !== null && ef(l.dependencies) ? (typeof c == "function" && (Xn(
        u,
        a,
        c,
        t
      ), S = u.memoizedState), (b = xu || r0(
        u,
        a,
        b,
        t,
        y,
        S,
        i
      ) || l !== null && l.dependencies !== null && ef(l.dependencies)) ? (s || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(t, S, i), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        t,
        S,
        i
      )), typeof f.componentDidUpdate == "function" && (u.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (u.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || n === l.memoizedProps && y === l.memoizedState || (u.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || n === l.memoizedProps && y === l.memoizedState || (u.flags |= 1024), u.memoizedProps = t, u.memoizedState = S), f.props = t, f.state = S, f.context = i, t = b) : (typeof f.componentDidUpdate != "function" || n === l.memoizedProps && y === l.memoizedState || (u.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || n === l.memoizedProps && y === l.memoizedState || (u.flags |= 1024), t = !1);
    }
    return f = t, Jt(l, u), t = (u.flags & 128) !== 0, f || t ? (f = u.stateNode, a = t && typeof a.getDerivedStateFromError != "function" ? null : f.render(), u.flags |= 1, l !== null && t ? (u.child = ba(
      u,
      l.child,
      null,
      e
    ), u.child = ba(
      u,
      null,
      a,
      e
    )) : ml(l, u, a, e), u.memoizedState = f.state, l = u.child) : l = Eu(
      l,
      u,
      e
    ), l;
  }
  function c1(l, u, a, t) {
    return Xt(), u.flags |= 256, ml(l, u, a, t), u.child;
  }
  var Vn = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cn(l) {
    return { baseLanes: l, cachePool: v0() };
  }
  function xn(l, u, a) {
    return l = l !== null ? l.childLanes & ~a : 0, u && (l |= Jl), l;
  }
  function i1(l, u, a) {
    var t = u.pendingProps, e = !1, f = (u.flags & 128) !== 0, n;
    if ((n = f) || (n = l !== null && l.memoizedState === null ? !1 : (fl.current & 2) !== 0), n && (e = !0, u.flags &= -129), n = (u.flags & 32) !== 0, u.flags &= -33, l === null) {
      if (X) {
        if (e ? Qu(u) : Zu(), X) {
          var c = yl, i;
          if (i = c) {
            l: {
              for (i = c, c = nu; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = au(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (u.memoizedState = {
              dehydrated: c,
              treeContext: ya !== null ? { id: bu, overflow: gu } : null,
              retryLane: 536870912
            }, i = rl(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = u, u.child = i, Al = u, yl = null, i = !0) : i = !1;
          }
          i || Sa(u);
        }
        if (c = u.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return c.data === "$!" ? u.lanes = 16 : u.lanes = 536870912, null;
        zu(u);
      }
      return c = t.children, t = t.fallback, e ? (Zu(), e = u.mode, c = Ln(
        { mode: "hidden", children: c },
        e
      ), t = Oa(
        t,
        e,
        a,
        null
      ), c.return = u, t.return = u, c.sibling = t, u.child = c, e = u.child, e.memoizedState = Cn(a), e.childLanes = xn(
        l,
        n,
        a
      ), u.memoizedState = Vn, t) : (Qu(u), Kn(u, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (f)
        u.flags & 256 ? (Qu(u), u.flags &= -257, u = pn(
          l,
          u,
          a
        )) : u.memoizedState !== null ? (Zu(), u.child = l.child, u.flags |= 128, u = null) : (Zu(), e = t.fallback, c = u.mode, t = Ln(
          { mode: "visible", children: t.children },
          c
        ), e = Oa(
          e,
          c,
          a,
          null
        ), e.flags |= 2, t.return = u, e.return = u, t.sibling = e, u.child = t, ba(
          u,
          l.child,
          null,
          a
        ), t = u.child, t.memoizedState = Cn(a), t.childLanes = xn(
          l,
          n,
          a
        ), u.memoizedState = Vn, u = e);
      else if (Qu(u), c.data === "$!") {
        if (n = c.nextSibling && c.nextSibling.dataset, n) var s = n.dgst;
        n = s, t = Error(m(419)), t.stack = "", t.digest = n, Qt({ value: t, source: null, stack: null }), u = pn(
          l,
          u,
          a
        );
      } else if (vl || wt(l, u, a, !1), n = (a & l.childLanes) !== 0, vl || n) {
        if (n = x, n !== null) {
          if (t = a & -a, (t & 42) !== 0) t = 1;
          else
            switch (t) {
              case 2:
                t = 1;
                break;
              case 8:
                t = 4;
                break;
              case 32:
                t = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                t = 64;
                break;
              case 268435456:
                t = 134217728;
                break;
              default:
                t = 0;
            }
          if (t = (t & (n.suspendedLanes | a)) !== 0 ? 0 : t, t !== 0 && t !== i.retryLane)
            throw i.retryLane = t, Xu(l, t), El(n, l, t), I0;
        }
        c.data === "$?" || zc(), u = pn(
          l,
          u,
          a
        );
      } else
        c.data === "$?" ? (u.flags |= 128, u.child = l.child, u = zh.bind(
          null,
          l
        ), c._reactRetry = u, u = null) : (l = i.treeContext, yl = au(
          c.nextSibling
        ), Al = u, X = !0, lu = null, nu = !1, l !== null && (Cl[xl++] = bu, Cl[xl++] = gu, Cl[xl++] = ya, bu = l.id, gu = l.overflow, ya = u), u = Kn(
          u,
          t.children
        ), u.flags |= 4096);
      return u;
    }
    return e ? (Zu(), e = t.fallback, c = u.mode, i = l.child, s = i.sibling, t = wu(i, {
      mode: "hidden",
      children: t.children
    }), t.subtreeFlags = i.subtreeFlags & 31457280, s !== null ? e = wu(s, e) : (e = Oa(
      e,
      c,
      a,
      null
    ), e.flags |= 2), e.return = u, t.return = u, t.sibling = e, u.child = t, t = e, e = u.child, c = l.child.memoizedState, c === null ? c = Cn(a) : (i = c.cachePool, i !== null ? (s = nl._currentValue, i = i.parent !== s ? { parent: s, pool: s } : i) : i = v0(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = xn(
      l,
      n,
      a
    ), u.memoizedState = Vn, t) : (Qu(u), a = l.child, l = a.sibling, a = wu(a, {
      mode: "visible",
      children: t.children
    }), a.return = u, a.sibling = null, l !== null && (n = u.deletions, n === null ? (u.deletions = [l], u.flags |= 16) : n.push(l)), u.child = a, u.memoizedState = null, a);
  }
  function Kn(l, u) {
    return u = Ln(
      { mode: "visible", children: u },
      l.mode
    ), u.return = l, l.child = u;
  }
  function Ln(l, u) {
    return G1(l, u, 0, null);
  }
  function pn(l, u, a) {
    return ba(u, l.child, null, a), l = Kn(
      u,
      u.pendingProps.children
    ), l.flags |= 2, u.memoizedState = null, l;
  }
  function v1(l, u, a) {
    l.lanes |= u;
    var t = l.alternate;
    t !== null && (t.lanes |= u), Wn(l.return, u, a);
  }
  function rn(l, u, a, t, e) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: u,
      rendering: null,
      renderingStartTime: 0,
      last: t,
      tail: a,
      tailMode: e
    } : (f.isBackwards = u, f.rendering = null, f.renderingStartTime = 0, f.last = t, f.tail = a, f.tailMode = e);
  }
  function s1(l, u, a) {
    var t = u.pendingProps, e = t.revealOrder, f = t.tail;
    if (ml(l, u, t.children, a), t = fl.current, (t & 2) !== 0)
      t = t & 1 | 2, u.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = u.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && v1(l, a, u);
          else if (l.tag === 19)
            v1(l, a, u);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === u) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === u)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      t &= 1;
    }
    switch (r(fl, t), e) {
      case "forwards":
        for (a = u.child, e = null; a !== null; )
          l = a.alternate, l !== null && Je(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = u.child, u.child = null) : (e = a.sibling, a.sibling = null), rn(
          u,
          !1,
          e,
          a,
          f
        );
        break;
      case "backwards":
        for (a = null, e = u.child, u.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Je(l) === null) {
            u.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        rn(
          u,
          !0,
          a,
          null,
          f
        );
        break;
      case "together":
        rn(u, !1, null, null, void 0);
        break;
      default:
        u.memoizedState = null;
    }
    return u.child;
  }
  function Eu(l, u, a) {
    if (l !== null && (u.dependencies = l.dependencies), Wu |= u.lanes, (a & u.childLanes) === 0)
      if (l !== null) {
        if (wt(
          l,
          u,
          a,
          !1
        ), (a & u.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && u.child !== l.child)
      throw Error(m(153));
    if (u.child !== null) {
      for (l = u.child, a = wu(l, l.pendingProps), u.child = a, a.return = u; l.sibling !== null; )
        l = l.sibling, a = a.sibling = wu(l, l.pendingProps), a.return = u;
      a.sibling = null;
    }
    return u.child;
  }
  function Jn(l, u) {
    return (l.lanes & u) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && ef(l)));
  }
  function eh(l, u, a) {
    switch (u.tag) {
      case 3:
        Ee(u, u.stateNode.containerInfo), Cu(u, nl, l.memoizedState.cache), Xt();
        break;
      case 27:
      case 5:
        Xf(u);
        break;
      case 4:
        Ee(u, u.stateNode.containerInfo);
        break;
      case 10:
        Cu(
          u,
          u.type,
          u.memoizedProps.value
        );
        break;
      case 13:
        var t = u.memoizedState;
        if (t !== null)
          return t.dehydrated !== null ? (Qu(u), u.flags |= 128, null) : (a & u.child.childLanes) !== 0 ? i1(l, u, a) : (Qu(u), l = Eu(
            l,
            u,
            a
          ), l !== null ? l.sibling : null);
        Qu(u);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (t = (a & u.childLanes) !== 0, t || (wt(
          l,
          u,
          a,
          !1
        ), t = (a & u.childLanes) !== 0), e) {
          if (t)
            return s1(
              l,
              u,
              a
            );
          u.flags |= 128;
        }
        if (e = u.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), r(fl, fl.current), t) break;
        return null;
      case 22:
      case 23:
        return u.lanes = 0, t1(l, u, a);
      case 24:
        Cu(u, nl, l.memoizedState.cache);
    }
    return Eu(l, u, a);
  }
  function h1(l, u, a) {
    if (l !== null)
      if (l.memoizedProps !== u.pendingProps)
        vl = !0;
      else {
        if (!Jn(l, a) && (u.flags & 128) === 0)
          return vl = !1, eh(
            l,
            u,
            a
          );
        vl = (l.flags & 131072) !== 0;
      }
    else
      vl = !1, X && (u.flags & 1048576) !== 0 && $i(u, xe, u.index);
    switch (u.lanes = 0, u.tag) {
      case 16:
        l: {
          l = u.pendingProps;
          var t = u.elementType, e = t._init;
          if (t = e(t._payload), u.type = t, typeof t == "function")
            nc(t) ? (l = Ta(t, l), u.tag = 1, u = n1(
              null,
              u,
              t,
              l,
              a
            )) : (u.tag = 0, u = jn(
              null,
              u,
              t,
              l,
              a
            ));
          else {
            if (t != null) {
              if (e = t.$$typeof, e === kl) {
                u.tag = 11, u = l1(
                  null,
                  u,
                  t,
                  l,
                  a
                );
                break l;
              } else if (e === Ra) {
                u.tag = 14, u = u1(
                  null,
                  u,
                  t,
                  l,
                  a
                );
                break l;
              }
            }
            throw u = Ba(t) || t, Error(m(306, u, ""));
          }
        }
        return u;
      case 0:
        return jn(
          l,
          u,
          u.type,
          u.pendingProps,
          a
        );
      case 1:
        return t = u.type, e = Ta(
          t,
          u.pendingProps
        ), n1(
          l,
          u,
          t,
          e,
          a
        );
      case 3:
        l: {
          if (Ee(
            u,
            u.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          var f = u.pendingProps;
          e = u.memoizedState, t = e.element, Fn(l, u), kt(u, f, null, a);
          var n = u.memoizedState;
          if (f = n.cache, Cu(u, nl, f), f !== e.cache && $n(
            u,
            [nl],
            a,
            !0
          ), $t(), f = n.element, e.isDehydrated)
            if (e = {
              element: f,
              isDehydrated: !1,
              cache: n.cache
            }, u.updateQueue.baseState = e, u.memoizedState = e, u.flags & 256) {
              u = c1(
                l,
                u,
                f,
                a
              );
              break l;
            } else if (f !== t) {
              t = Vl(
                Error(m(424)),
                u
              ), Qt(t), u = c1(
                l,
                u,
                f,
                a
              );
              break l;
            } else
              for (yl = au(
                u.stateNode.containerInfo.firstChild
              ), Al = u, X = !0, lu = null, nu = !0, a = e0(
                u,
                null,
                f,
                a
              ), u.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Xt(), f === t) {
              u = Eu(
                l,
                u,
                a
              );
              break l;
            }
            ml(l, u, f, a);
          }
          u = u.child;
        }
        return u;
      case 26:
        return Jt(l, u), l === null ? (a = mv(
          u.type,
          null,
          u.pendingProps,
          null
        )) ? u.memoizedState = a : X || (a = u.type, l = u.pendingProps, t = Tf(
          Bu.current
        ).createElement(a), t[bl] = u, t[Dl] = l, Sl(t, a, l), il(t), u.stateNode = t) : u.memoizedState = mv(
          u.type,
          l.memoizedProps,
          u.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Xf(u), l === null && X && (t = u.stateNode = hv(
          u.type,
          u.pendingProps,
          Bu.current
        ), Al = u, nu = !0, yl = au(
          t.firstChild
        )), t = u.pendingProps.children, l !== null || X ? ml(
          l,
          u,
          t,
          a
        ) : u.child = ba(
          u,
          null,
          t,
          a
        ), Jt(l, u), u.child;
      case 5:
        return l === null && X && ((e = t = yl) && (t = Gh(
          t,
          u.type,
          u.pendingProps,
          nu
        ), t !== null ? (u.stateNode = t, Al = u, yl = au(
          t.firstChild
        ), nu = !1, e = !0) : e = !1), e || Sa(u)), Xf(u), e = u.type, f = u.pendingProps, n = l !== null ? l.memoizedProps : null, t = f.children, Nc(e, f) ? t = null : n !== null && Nc(e, n) && (u.flags |= 32), u.memoizedState !== null && (e = En(
          l,
          u,
          Fs,
          null,
          null,
          a
        ), he._currentValue = e), Jt(l, u), ml(l, u, t, a), u.child;
      case 6:
        return l === null && X && ((l = a = yl) && (a = Xh(
          a,
          u.pendingProps,
          nu
        ), a !== null ? (u.stateNode = a, Al = u, yl = null, l = !0) : l = !1), l || Sa(u)), null;
      case 13:
        return i1(l, u, a);
      case 4:
        return Ee(
          u,
          u.stateNode.containerInfo
        ), t = u.pendingProps, l === null ? u.child = ba(
          u,
          null,
          t,
          a
        ) : ml(
          l,
          u,
          t,
          a
        ), u.child;
      case 11:
        return l1(
          l,
          u,
          u.type,
          u.pendingProps,
          a
        );
      case 7:
        return ml(
          l,
          u,
          u.pendingProps,
          a
        ), u.child;
      case 8:
        return ml(
          l,
          u,
          u.pendingProps.children,
          a
        ), u.child;
      case 12:
        return ml(
          l,
          u,
          u.pendingProps.children,
          a
        ), u.child;
      case 10:
        return t = u.pendingProps, Cu(u, u.type, t.value), ml(
          l,
          u,
          t.children,
          a
        ), u.child;
      case 9:
        return e = u.type._context, t = u.pendingProps.children, Da(u), e = gl(e), t = t(e), u.flags |= 1, ml(l, u, t, a), u.child;
      case 14:
        return u1(
          l,
          u,
          u.type,
          u.pendingProps,
          a
        );
      case 15:
        return a1(
          l,
          u,
          u.type,
          u.pendingProps,
          a
        );
      case 19:
        return s1(l, u, a);
      case 22:
        return t1(l, u, a);
      case 24:
        return Da(u), t = gl(nl), l === null ? (e = zn(), e === null && (e = x, f = bn(), e.pooledCache = f, f.refCount++, f !== null && (e.pooledCacheLanes |= a), e = f), u.memoizedState = {
          parent: t,
          cache: e
        }, kn(u), Cu(u, nl, e)) : ((l.lanes & a) !== 0 && (Fn(l, u), kt(u, null, null, a), $t()), e = l.memoizedState, f = u.memoizedState, e.parent !== t ? (e = { parent: t, cache: t }, u.memoizedState = e, u.lanes === 0 && (u.memoizedState = u.updateQueue.baseState = e), Cu(u, nl, t)) : (t = f.cache, Cu(u, nl, t), t !== e.cache && $n(
          u,
          [nl],
          a,
          !0
        ))), ml(
          l,
          u,
          u.pendingProps.children,
          a
        ), u.child;
      case 29:
        throw u.pendingProps;
    }
    throw Error(m(156, u.tag));
  }
  var wn = tu(null), oa = null, Tu = null;
  function Cu(l, u, a) {
    r(wn, u._currentValue), u._currentValue = a;
  }
  function ou(l) {
    l._currentValue = wn.current, cl(wn);
  }
  function Wn(l, u, a) {
    for (; l !== null; ) {
      var t = l.alternate;
      if ((l.childLanes & u) !== u ? (l.childLanes |= u, t !== null && (t.childLanes |= u)) : t !== null && (t.childLanes & u) !== u && (t.childLanes |= u), l === a) break;
      l = l.return;
    }
  }
  function $n(l, u, a, t) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var f = e.dependencies;
      if (f !== null) {
        var n = e.child;
        f = f.firstContext;
        l: for (; f !== null; ) {
          var c = f;
          f = e;
          for (var i = 0; i < u.length; i++)
            if (c.context === u[i]) {
              f.lanes |= a, c = f.alternate, c !== null && (c.lanes |= a), Wn(
                f.return,
                a,
                l
              ), t || (n = null);
              break l;
            }
          f = c.next;
        }
      } else if (e.tag === 18) {
        if (n = e.return, n === null) throw Error(m(341));
        n.lanes |= a, f = n.alternate, f !== null && (f.lanes |= a), Wn(n, a, l), n = null;
      } else n = e.child;
      if (n !== null) n.return = e;
      else
        for (n = e; n !== null; ) {
          if (n === l) {
            n = null;
            break;
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, n = e;
            break;
          }
          n = n.return;
        }
      e = n;
    }
  }
  function wt(l, u, a, t) {
    l = null;
    for (var e = u, f = !1; e !== null; ) {
      if (!f) {
        if ((e.flags & 524288) !== 0) f = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var n = e.alternate;
        if (n === null) throw Error(m(387));
        if (n = n.memoizedProps, n !== null) {
          var c = e.type;
          ql(e.pendingProps.value, n.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Ae.current) {
        if (n = e.alternate, n === null) throw Error(m(387));
        n.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      e = e.return;
    }
    l !== null && $n(
      u,
      l,
      a,
      t
    ), u.flags |= 262144;
  }
  function ef(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ql(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Da(l) {
    oa = l, Tu = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function gl(l) {
    return d1(oa, l);
  }
  function ff(l, u) {
    return oa === null && Da(l), d1(l, u);
  }
  function d1(l, u) {
    var a = u._currentValue;
    if (u = { context: u, memoizedValue: a, next: null }, Tu === null) {
      if (l === null) throw Error(m(308));
      Tu = u, l.dependencies = { lanes: 0, firstContext: u }, l.flags |= 524288;
    } else Tu = Tu.next = u;
    return a;
  }
  var xu = !1;
  function kn(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Fn(l, u) {
    l = l.updateQueue, u.updateQueue === l && (u.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ku(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Lu(l, u, a) {
    var t = l.updateQueue;
    if (t === null) return null;
    if (t = t.shared, (w & 2) !== 0) {
      var e = t.pending;
      return e === null ? u.next = u : (u.next = e.next, e.next = u), t.pending = u, u = Ve(l), wi(l, null, a), u;
    }
    return je(l, t, u, a), Ve(l);
  }
  function Wt(l, u, a) {
    if (u = u.updateQueue, u !== null && (u = u.shared, (a & 4194176) !== 0)) {
      var t = u.lanes;
      t &= l.pendingLanes, a |= t, u.lanes = a, ui(l, a);
    }
  }
  function Pn(l, u) {
    var a = l.updateQueue, t = l.alternate;
    if (t !== null && (t = t.updateQueue, a === t)) {
      var e = null, f = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var n = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          f === null ? e = f = n : f = f.next = n, a = a.next;
        } while (a !== null);
        f === null ? e = f = u : f = f.next = u;
      } else e = f = u;
      a = {
        baseState: t.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: t.shared,
        callbacks: t.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = u : l.next = u, a.lastBaseUpdate = u;
  }
  var In = !1;
  function $t() {
    if (In) {
      var l = Ia;
      if (l !== null) throw l;
    }
  }
  function kt(l, u, a, t) {
    In = !1;
    var e = l.updateQueue;
    xu = !1;
    var f = e.firstBaseUpdate, n = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, s = i.next;
      i.next = null, n === null ? f = s : n.next = s, n = i;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== n && (c === null ? b.firstBaseUpdate = s : c.next = s, b.lastBaseUpdate = i));
    }
    if (f !== null) {
      var z = e.baseState;
      n = 0, b = s = i = null, c = f;
      do {
        var y = c.lane & -536870913, S = y !== c.lane;
        if (S ? (Y & y) === y : (t & y) === y) {
          y !== 0 && y === Pa && (In = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var o = l, H = c;
            y = u;
            var k = a;
            switch (H.tag) {
              case 1:
                if (o = H.payload, typeof o == "function") {
                  z = o.call(k, z, y);
                  break l;
                }
                z = o;
                break l;
              case 3:
                o.flags = o.flags & -65537 | 128;
              case 0:
                if (o = H.payload, y = typeof o == "function" ? o.call(k, z, y) : o, y == null) break l;
                z = Z({}, z, y);
                break l;
              case 2:
                xu = !0;
            }
          }
          y = c.callback, y !== null && (l.flags |= 64, S && (l.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [y] : S.push(y));
        } else
          S = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, b === null ? (s = b = S, i = z) : b = b.next = S, n |= y;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      b === null && (i = z), e.baseState = i, e.firstBaseUpdate = s, e.lastBaseUpdate = b, f === null && (e.shared.lanes = 0), Wu |= n, l.lanes = n, l.memoizedState = z;
    }
  }
  function y1(l, u) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(u);
  }
  function m1(l, u) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        y1(a[l], u);
  }
  function Ft(l, u) {
    try {
      var a = u.updateQueue, t = a !== null ? a.lastEffect : null;
      if (t !== null) {
        var e = t.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            t = void 0;
            var f = a.create, n = a.inst;
            t = f(), n.destroy = t;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      C(u, u.return, c);
    }
  }
  function pu(l, u, a) {
    try {
      var t = u.updateQueue, e = t !== null ? t.lastEffect : null;
      if (e !== null) {
        var f = e.next;
        t = f;
        do {
          if ((t.tag & l) === l) {
            var n = t.inst, c = n.destroy;
            if (c !== void 0) {
              n.destroy = void 0, e = u;
              var i = a;
              try {
                c();
              } catch (s) {
                C(
                  e,
                  i,
                  s
                );
              }
            }
          }
          t = t.next;
        } while (t !== f);
      }
    } catch (s) {
      C(u, u.return, s);
    }
  }
  function S1(l) {
    var u = l.updateQueue;
    if (u !== null) {
      var a = l.stateNode;
      try {
        m1(u, a);
      } catch (t) {
        C(l, l.return, t);
      }
    }
  }
  function b1(l, u, a) {
    a.props = Ta(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (t) {
      C(l, u, t);
    }
  }
  function Ma(l, u) {
    try {
      var a = l.ref;
      if (a !== null) {
        var t = l.stateNode;
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = t;
            break;
          default:
            e = t;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (f) {
      C(l, u, f);
    }
  }
  function Rl(l, u) {
    var a = l.ref, t = l.refCleanup;
    if (a !== null)
      if (typeof t == "function")
        try {
          t();
        } catch (e) {
          C(l, u, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          C(l, u, e);
        }
      else a.current = null;
  }
  function g1(l) {
    var u = l.type, a = l.memoizedProps, t = l.stateNode;
    try {
      l: switch (u) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && t.focus();
          break l;
        case "img":
          a.src ? t.src = a.src : a.srcSet && (t.srcset = a.srcSet);
      }
    } catch (e) {
      C(l, l.return, e);
    }
  }
  function z1(l, u, a) {
    try {
      var t = l.stateNode;
      qh(t, l.type, a, u), t[Dl] = u;
    } catch (e) {
      C(l, l.return, e);
    }
  }
  function A1(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4;
  }
  function lc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || A1(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18; ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function uc(l, u, a) {
    var t = l.tag;
    if (t === 5 || t === 6)
      l = l.stateNode, u ? a.nodeType === 8 ? a.parentNode.insertBefore(l, u) : a.insertBefore(l, u) : (a.nodeType === 8 ? (u = a.parentNode, u.insertBefore(l, a)) : (u = a, u.appendChild(l)), a = a._reactRootContainer, a != null || u.onclick !== null || (u.onclick = Ef));
    else if (t !== 4 && t !== 27 && (l = l.child, l !== null))
      for (uc(l, u, a), l = l.sibling; l !== null; )
        uc(l, u, a), l = l.sibling;
  }
  function nf(l, u, a) {
    var t = l.tag;
    if (t === 5 || t === 6)
      l = l.stateNode, u ? a.insertBefore(l, u) : a.appendChild(l);
    else if (t !== 4 && t !== 27 && (l = l.child, l !== null))
      for (nf(l, u, a), l = l.sibling; l !== null; )
        nf(l, u, a), l = l.sibling;
  }
  var Du = !1, W = !1, ac = !1, E1 = typeof WeakSet == "function" ? WeakSet : Set, sl = null, T1 = !1;
  function fh(l, u) {
    if (l = l.containerInfo, Rc = Hf, l = ji(l), tn(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var t = a.getSelection && a.getSelection();
          if (t && t.rangeCount !== 0) {
            a = t.anchorNode;
            var e = t.anchorOffset, f = t.focusNode;
            t = t.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break l;
            }
            var n = 0, c = -1, i = -1, s = 0, b = 0, z = l, y = null;
            u: for (; ; ) {
              for (var S; z !== a || e !== 0 && z.nodeType !== 3 || (c = n + e), z !== f || t !== 0 && z.nodeType !== 3 || (i = n + t), z.nodeType === 3 && (n += z.nodeValue.length), (S = z.firstChild) !== null; )
                y = z, z = S;
              for (; ; ) {
                if (z === l) break u;
                if (y === a && ++s === e && (c = n), y === f && ++b === t && (i = n), (S = z.nextSibling) !== null) break;
                z = y, y = z.parentNode;
              }
              z = S;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Bc = { focusedElem: l, selectionRange: a }, Hf = !1, sl = u; sl !== null; )
      if (u = sl, l = u.child, (u.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = u, sl = l;
      else
        for (; sl !== null; ) {
          switch (u = sl, f = u.alternate, l = u.flags, u.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && f !== null) {
                l = void 0, a = u, e = f.memoizedProps, f = f.memoizedState, t = a.stateNode;
                try {
                  var o = Ta(
                    a.type,
                    e,
                    a.elementType === a.type
                  );
                  l = t.getSnapshotBeforeUpdate(
                    o,
                    f
                  ), t.__reactInternalSnapshotBeforeUpdate = l;
                } catch (H) {
                  C(
                    a,
                    a.return,
                    H
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = u.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Xc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (l = u.sibling, l !== null) {
            l.return = u.return, sl = l;
            break;
          }
          sl = u.return;
        }
    return o = T1, T1 = !1, o;
  }
  function o1(l, u, a) {
    var t = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ou(l, a), t & 4 && Ft(5, a);
        break;
      case 1:
        if (Ou(l, a), t & 4)
          if (l = a.stateNode, u === null)
            try {
              l.componentDidMount();
            } catch (c) {
              C(a, a.return, c);
            }
          else {
            var e = Ta(
              a.type,
              u.memoizedProps
            );
            u = u.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                u,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              C(
                a,
                a.return,
                c
              );
            }
          }
        t & 64 && S1(a), t & 512 && Ma(a, a.return);
        break;
      case 3:
        if (Ou(l, a), t & 64 && (t = a.updateQueue, t !== null)) {
          if (l = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                l = a.child.stateNode;
                break;
              case 1:
                l = a.child.stateNode;
            }
          try {
            m1(t, l);
          } catch (c) {
            C(a, a.return, c);
          }
        }
        break;
      case 26:
        Ou(l, a), t & 512 && Ma(a, a.return);
        break;
      case 27:
      case 5:
        Ou(l, a), u === null && t & 4 && g1(a), t & 512 && Ma(a, a.return);
        break;
      case 12:
        Ou(l, a);
        break;
      case 13:
        Ou(l, a), t & 4 && O1(l, a);
        break;
      case 22:
        if (e = a.memoizedState !== null || Du, !e) {
          u = u !== null && u.memoizedState !== null || W;
          var f = Du, n = W;
          Du = e, (W = u) && !n ? ru(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ou(l, a), Du = f, W = n;
        }
        t & 512 && (a.memoizedProps.mode === "manual" ? Ma(a, a.return) : Rl(a, a.return));
        break;
      default:
        Ou(l, a);
    }
  }
  function D1(l) {
    var u = l.alternate;
    u !== null && (l.alternate = null, D1(u)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (u = l.stateNode, u !== null && xf(u)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var al = null, Bl = !1;
  function Mu(l, u, a) {
    for (a = a.child; a !== null; )
      M1(l, u, a), a = a.sibling;
  }
  function M1(l, u, a) {
    if (Hl && typeof Hl.onCommitFiberUnmount == "function")
      try {
        Hl.onCommitFiberUnmount(Et, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        W || Rl(a, u), Mu(
          l,
          u,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        W || Rl(a, u);
        var t = al, e = Bl;
        for (al = a.stateNode, Mu(
          l,
          u,
          a
        ), a = a.stateNode, u = a.attributes; u.length; )
          a.removeAttributeNode(u[0]);
        xf(a), al = t, Bl = e;
        break;
      case 5:
        W || Rl(a, u);
      case 6:
        e = al;
        var f = Bl;
        if (al = null, Mu(
          l,
          u,
          a
        ), al = e, Bl = f, al !== null)
          if (Bl)
            try {
              l = al, t = a.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(t) : l.removeChild(t);
            } catch (n) {
              C(
                a,
                u,
                n
              );
            }
          else
            try {
              al.removeChild(a.stateNode);
            } catch (n) {
              C(
                a,
                u,
                n
              );
            }
        break;
      case 18:
        al !== null && (Bl ? (u = al, a = a.stateNode, u.nodeType === 8 ? Gc(
          u.parentNode,
          a
        ) : u.nodeType === 1 && Gc(u, a), Se(u)) : Gc(al, a.stateNode));
        break;
      case 4:
        t = al, e = Bl, al = a.stateNode.containerInfo, Bl = !0, Mu(
          l,
          u,
          a
        ), al = t, Bl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        W || pu(2, a, u), W || pu(4, a, u), Mu(
          l,
          u,
          a
        );
        break;
      case 1:
        W || (Rl(a, u), t = a.stateNode, typeof t.componentWillUnmount == "function" && b1(
          a,
          u,
          t
        )), Mu(
          l,
          u,
          a
        );
        break;
      case 21:
        Mu(
          l,
          u,
          a
        );
        break;
      case 22:
        W || Rl(a, u), W = (t = W) || a.memoizedState !== null, Mu(
          l,
          u,
          a
        ), W = t;
        break;
      default:
        Mu(
          l,
          u,
          a
        );
    }
  }
  function O1(l, u) {
    if (u.memoizedState === null && (l = u.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Se(l);
      } catch (a) {
        C(u, u.return, a);
      }
  }
  function nh(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var u = l.stateNode;
        return u === null && (u = l.stateNode = new E1()), u;
      case 22:
        return l = l.stateNode, u = l._retryCache, u === null && (u = l._retryCache = new E1()), u;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function tc(l, u) {
    var a = nh(l);
    u.forEach(function(t) {
      var e = Ah.bind(null, l, t);
      a.has(t) || (a.add(t), t.then(e, e));
    });
  }
  function Ll(l, u) {
    var a = u.deletions;
    if (a !== null)
      for (var t = 0; t < a.length; t++) {
        var e = a[t], f = l, n = u, c = n;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
            case 5:
              al = c.stateNode, Bl = !1;
              break l;
            case 3:
              al = c.stateNode.containerInfo, Bl = !0;
              break l;
            case 4:
              al = c.stateNode.containerInfo, Bl = !0;
              break l;
          }
          c = c.return;
        }
        if (al === null) throw Error(m(160));
        M1(f, n, e), al = null, Bl = !1, f = e.alternate, f !== null && (f.return = null), e.return = null;
      }
    if (u.subtreeFlags & 13878)
      for (u = u.child; u !== null; )
        U1(u, l), u = u.sibling;
  }
  var uu = null;
  function U1(l, u) {
    var a = l.alternate, t = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ll(u, l), pl(l), t & 4 && (pu(3, l, l.return), Ft(3, l), pu(5, l, l.return));
        break;
      case 1:
        Ll(u, l), pl(l), t & 512 && (W || a === null || Rl(a, a.return)), t & 64 && Du && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? t : a.concat(t))));
        break;
      case 26:
        var e = uu;
        if (Ll(u, l), pl(l), t & 512 && (W || a === null || Rl(a, a.return)), t & 4) {
          var f = a !== null ? a.memoizedState : null;
          if (t = l.memoizedState, a === null)
            if (t === null)
              if (l.stateNode === null) {
                l: {
                  t = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  u: switch (t) {
                    case "title":
                      f = e.getElementsByTagName("title")[0], (!f || f[Dt] || f[bl] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = e.createElement(t), e.head.insertBefore(
                        f,
                        e.querySelector("head > title")
                      )), Sl(f, t, a), f[bl] = l, il(f), t = f;
                      break l;
                    case "link":
                      var n = gv(
                        "link",
                        "href",
                        e
                      ).get(t + (a.href || ""));
                      if (n) {
                        for (var c = 0; c < n.length; c++)
                          if (f = n[c], f.getAttribute("href") === (a.href == null ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            n.splice(c, 1);
                            break u;
                          }
                      }
                      f = e.createElement(t), Sl(f, t, a), e.head.appendChild(f);
                      break;
                    case "meta":
                      if (n = gv(
                        "meta",
                        "content",
                        e
                      ).get(t + (a.content || ""))) {
                        for (c = 0; c < n.length; c++)
                          if (f = n[c], f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            n.splice(c, 1);
                            break u;
                          }
                      }
                      f = e.createElement(t), Sl(f, t, a), e.head.appendChild(f);
                      break;
                    default:
                      throw Error(m(468, t));
                  }
                  f[bl] = l, il(f), t = f;
                }
                l.stateNode = t;
              } else
                zv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = bv(
                e,
                t,
                l.memoizedProps
              );
          else
            f !== t ? (f === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : f.count--, t === null ? zv(
              e,
              l.type,
              l.stateNode
            ) : bv(
              e,
              t,
              l.memoizedProps
            )) : t === null && l.stateNode !== null && z1(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        if (t & 4 && l.alternate === null) {
          e = l.stateNode, f = l.memoizedProps;
          try {
            for (var i = e.firstChild; i; ) {
              var s = i.nextSibling, b = i.nodeName;
              i[Dt] || b === "HEAD" || b === "BODY" || b === "SCRIPT" || b === "STYLE" || b === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = s;
            }
            for (var z = l.type, y = e.attributes; y.length; )
              e.removeAttributeNode(y[0]);
            Sl(e, z, f), e[bl] = l, e[Dl] = f;
          } catch (o) {
            C(l, l.return, o);
          }
        }
      case 5:
        if (Ll(u, l), pl(l), t & 512 && (W || a === null || Rl(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Ca(e, "");
          } catch (o) {
            C(l, l.return, o);
          }
        }
        t & 4 && l.stateNode != null && (e = l.memoizedProps, z1(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), t & 1024 && (ac = !0);
        break;
      case 6:
        if (Ll(u, l), pl(l), t & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          t = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = t;
          } catch (o) {
            C(l, l.return, o);
          }
        }
        break;
      case 3:
        if (Mf = null, e = uu, uu = of(u.containerInfo), Ll(u, l), uu = e, pl(l), t & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Se(u.containerInfo);
          } catch (o) {
            C(l, l.return, o);
          }
        ac && (ac = !1, H1(l));
        break;
      case 4:
        t = uu, uu = of(
          l.stateNode.containerInfo
        ), Ll(u, l), pl(l), uu = t;
        break;
      case 12:
        Ll(u, l), pl(l);
        break;
      case 13:
        Ll(u, l), pl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (dc = fu()), t & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, tc(l, t)));
        break;
      case 22:
        if (t & 512 && (W || a === null || Rl(a, a.return)), i = l.memoizedState !== null, s = a !== null && a.memoizedState !== null, b = Du, z = W, Du = b || i, W = z || s, Ll(u, l), W = z, Du = b, pl(l), u = l.stateNode, u._current = l, u._visibility &= -3, u._visibility |= u._pendingVisibility & 2, t & 8192 && (u._visibility = i ? u._visibility & -2 : u._visibility | 1, i && (u = Du || W, a === null || s || u || tt(l)), l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
          l: for (a = null, u = l; ; ) {
            if (u.tag === 5 || u.tag === 26 || u.tag === 27) {
              if (a === null) {
                s = a = u;
                try {
                  if (e = s.stateNode, i)
                    f = e.style, typeof f.setProperty == "function" ? f.setProperty(
                      "display",
                      "none",
                      "important"
                    ) : f.display = "none";
                  else {
                    n = s.stateNode, c = s.memoizedProps.style;
                    var S = c != null && c.hasOwnProperty("display") ? c.display : null;
                    n.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (o) {
                  C(s, s.return, o);
                }
              }
            } else if (u.tag === 6) {
              if (a === null) {
                s = u;
                try {
                  s.stateNode.nodeValue = i ? "" : s.memoizedProps;
                } catch (o) {
                  C(s, s.return, o);
                }
              }
            } else if ((u.tag !== 22 && u.tag !== 23 || u.memoizedState === null || u === l) && u.child !== null) {
              u.child.return = u, u = u.child;
              continue;
            }
            if (u === l) break l;
            for (; u.sibling === null; ) {
              if (u.return === null || u.return === l) break l;
              a === u && (a = null), u = u.return;
            }
            a === u && (a = null), u.sibling.return = u.return, u = u.sibling;
          }
        t & 4 && (t = l.updateQueue, t !== null && (a = t.retryQueue, a !== null && (t.retryQueue = null, tc(l, a))));
        break;
      case 19:
        Ll(u, l), pl(l), t & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, tc(l, t)));
        break;
      case 21:
        break;
      default:
        Ll(u, l), pl(l);
    }
  }
  function pl(l) {
    var u = l.flags;
    if (u & 2) {
      try {
        if (l.tag !== 27) {
          l: {
            for (var a = l.return; a !== null; ) {
              if (A1(a)) {
                var t = a;
                break l;
              }
              a = a.return;
            }
            throw Error(m(160));
          }
          switch (t.tag) {
            case 27:
              var e = t.stateNode, f = lc(l);
              nf(l, f, e);
              break;
            case 5:
              var n = t.stateNode;
              t.flags & 32 && (Ca(n, ""), t.flags &= -33);
              var c = lc(l);
              nf(l, c, n);
              break;
            case 3:
            case 4:
              var i = t.stateNode.containerInfo, s = lc(l);
              uc(
                l,
                s,
                i
              );
              break;
            default:
              throw Error(m(161));
          }
        }
      } catch (b) {
        C(l, l.return, b);
      }
      l.flags &= -3;
    }
    u & 4096 && (l.flags &= -4097);
  }
  function H1(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var u = l;
        H1(u), u.tag === 5 && u.flags & 1024 && u.stateNode.reset(), l = l.sibling;
      }
  }
  function Ou(l, u) {
    if (u.subtreeFlags & 8772)
      for (u = u.child; u !== null; )
        o1(l, u.alternate, u), u = u.sibling;
  }
  function tt(l) {
    for (l = l.child; l !== null; ) {
      var u = l;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pu(4, u, u.return), tt(u);
          break;
        case 1:
          Rl(u, u.return);
          var a = u.stateNode;
          typeof a.componentWillUnmount == "function" && b1(
            u,
            u.return,
            a
          ), tt(u);
          break;
        case 26:
        case 27:
        case 5:
          Rl(u, u.return), tt(u);
          break;
        case 22:
          Rl(u, u.return), u.memoizedState === null && tt(u);
          break;
        default:
          tt(u);
      }
      l = l.sibling;
    }
  }
  function ru(l, u, a) {
    for (a = a && (u.subtreeFlags & 8772) !== 0, u = u.child; u !== null; ) {
      var t = u.alternate, e = l, f = u, n = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ru(
            e,
            f,
            a
          ), Ft(4, f);
          break;
        case 1:
          if (ru(
            e,
            f,
            a
          ), t = f, e = t.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (s) {
              C(t, t.return, s);
            }
          if (t = f, e = t.updateQueue, e !== null) {
            var c = t.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  y1(i[e], c);
            } catch (s) {
              C(t, t.return, s);
            }
          }
          a && n & 64 && S1(f), Ma(f, f.return);
          break;
        case 26:
        case 27:
        case 5:
          ru(
            e,
            f,
            a
          ), a && t === null && n & 4 && g1(f), Ma(f, f.return);
          break;
        case 12:
          ru(
            e,
            f,
            a
          );
          break;
        case 13:
          ru(
            e,
            f,
            a
          ), a && n & 4 && O1(e, f);
          break;
        case 22:
          f.memoizedState === null && ru(
            e,
            f,
            a
          ), Ma(f, f.return);
          break;
        default:
          ru(
            e,
            f,
            a
          );
      }
      u = u.sibling;
    }
  }
  function ec(l, u) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (l = u.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && xt(a));
  }
  function fc(l, u) {
    l = null, u.alternate !== null && (l = u.alternate.memoizedState.cache), u = u.memoizedState.cache, u !== l && (u.refCount++, l != null && xt(l));
  }
  function Ju(l, u, a, t) {
    if (u.subtreeFlags & 10256)
      for (u = u.child; u !== null; )
        _1(
          l,
          u,
          a,
          t
        ), u = u.sibling;
  }
  function _1(l, u, a, t) {
    var e = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ju(
          l,
          u,
          a,
          t
        ), e & 2048 && Ft(9, u);
        break;
      case 3:
        Ju(
          l,
          u,
          a,
          t
        ), e & 2048 && (l = null, u.alternate !== null && (l = u.alternate.memoizedState.cache), u = u.memoizedState.cache, u !== l && (u.refCount++, l != null && xt(l)));
        break;
      case 12:
        if (e & 2048) {
          Ju(
            l,
            u,
            a,
            t
          ), l = u.stateNode;
          try {
            var f = u.memoizedProps, n = f.id, c = f.onPostCommit;
            typeof c == "function" && c(
              n,
              u.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            C(u, u.return, i);
          }
        } else
          Ju(
            l,
            u,
            a,
            t
          );
        break;
      case 23:
        break;
      case 22:
        f = u.stateNode, u.memoizedState !== null ? f._visibility & 4 ? Ju(
          l,
          u,
          a,
          t
        ) : Pt(l, u) : f._visibility & 4 ? Ju(
          l,
          u,
          a,
          t
        ) : (f._visibility |= 4, et(
          l,
          u,
          a,
          t,
          (u.subtreeFlags & 10256) !== 0
        )), e & 2048 && ec(
          u.alternate,
          u
        );
        break;
      case 24:
        Ju(
          l,
          u,
          a,
          t
        ), e & 2048 && fc(u.alternate, u);
        break;
      default:
        Ju(
          l,
          u,
          a,
          t
        );
    }
  }
  function et(l, u, a, t, e) {
    for (e = e && (u.subtreeFlags & 10256) !== 0, u = u.child; u !== null; ) {
      var f = l, n = u, c = a, i = t, s = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          et(
            f,
            n,
            c,
            i,
            e
          ), Ft(8, n);
          break;
        case 23:
          break;
        case 22:
          var b = n.stateNode;
          n.memoizedState !== null ? b._visibility & 4 ? et(
            f,
            n,
            c,
            i,
            e
          ) : Pt(
            f,
            n
          ) : (b._visibility |= 4, et(
            f,
            n,
            c,
            i,
            e
          )), e && s & 2048 && ec(
            n.alternate,
            n
          );
          break;
        case 24:
          et(
            f,
            n,
            c,
            i,
            e
          ), e && s & 2048 && fc(n.alternate, n);
          break;
        default:
          et(
            f,
            n,
            c,
            i,
            e
          );
      }
      u = u.sibling;
    }
  }
  function Pt(l, u) {
    if (u.subtreeFlags & 10256)
      for (u = u.child; u !== null; ) {
        var a = l, t = u, e = t.flags;
        switch (t.tag) {
          case 22:
            Pt(a, t), e & 2048 && ec(
              t.alternate,
              t
            );
            break;
          case 24:
            Pt(a, t), e & 2048 && fc(t.alternate, t);
            break;
          default:
            Pt(a, t);
        }
        u = u.sibling;
      }
  }
  var It = 8192;
  function ft(l) {
    if (l.subtreeFlags & It)
      for (l = l.child; l !== null; )
        q1(l), l = l.sibling;
  }
  function q1(l) {
    switch (l.tag) {
      case 26:
        ft(l), l.flags & It && l.memoizedState !== null && Wh(
          uu,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ft(l);
        break;
      case 3:
      case 4:
        var u = uu;
        uu = of(l.stateNode.containerInfo), ft(l), uu = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = It, It = 16777216, ft(l), It = u) : ft(l));
        break;
      default:
        ft(l);
    }
  }
  function R1(l) {
    var u = l.alternate;
    if (u !== null && (l = u.child, l !== null)) {
      u.child = null;
      do
        u = l.sibling, l.sibling = null, l = u;
      while (l !== null);
    }
  }
  function le(l) {
    var u = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (u !== null)
        for (var a = 0; a < u.length; a++) {
          var t = u[a];
          sl = t, N1(
            t,
            l
          );
        }
      R1(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        B1(l), l = l.sibling;
  }
  function B1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        le(l), l.flags & 2048 && pu(9, l, l.return);
        break;
      case 3:
        le(l);
        break;
      case 12:
        le(l);
        break;
      case 22:
        var u = l.stateNode;
        l.memoizedState !== null && u._visibility & 4 && (l.return === null || l.return.tag !== 13) ? (u._visibility &= -5, cf(l)) : le(l);
        break;
      default:
        le(l);
    }
  }
  function cf(l) {
    var u = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (u !== null)
        for (var a = 0; a < u.length; a++) {
          var t = u[a];
          sl = t, N1(
            t,
            l
          );
        }
      R1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (u = l, u.tag) {
        case 0:
        case 11:
        case 15:
          pu(8, u, u.return), cf(u);
          break;
        case 22:
          a = u.stateNode, a._visibility & 4 && (a._visibility &= -5, cf(u));
          break;
        default:
          cf(u);
      }
      l = l.sibling;
    }
  }
  function N1(l, u) {
    for (; sl !== null; ) {
      var a = sl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          pu(8, a, u);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var t = a.memoizedState.cachePool.pool;
            t != null && t.refCount++;
          }
          break;
        case 24:
          xt(a.memoizedState.cache);
      }
      if (t = a.child, t !== null) t.return = a, sl = t;
      else
        l: for (a = l; sl !== null; ) {
          t = sl;
          var e = t.sibling, f = t.return;
          if (D1(t), t === a) {
            sl = null;
            break l;
          }
          if (e !== null) {
            e.return = f, sl = e;
            break l;
          }
          sl = f;
        }
    }
  }
  function ch(l, u, a, t) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = u, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rl(l, u, a, t) {
    return new ch(l, u, a, t);
  }
  function nc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function wu(l, u) {
    var a = l.alternate;
    return a === null ? (a = rl(
      l.tag,
      u,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = u, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 31457280, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, u = l.dependencies, a.dependencies = u === null ? null : { lanes: u.lanes, firstContext: u.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function Y1(l, u) {
    l.flags &= 31457282;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = u, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, u = a.dependencies, l.dependencies = u === null ? null : {
      lanes: u.lanes,
      firstContext: u.firstContext
    }), l;
  }
  function vf(l, u, a, t, e, f) {
    var n = 0;
    if (t = l, typeof l == "function") nc(l) && (n = 1);
    else if (typeof l == "string")
      n = Jh(
        l,
        a,
        eu.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case dl:
          return Oa(a.children, e, f, u);
        case $l:
          n = 8, e |= 24;
          break;
        case bt:
          return l = rl(12, a, u, e | 2), l.elementType = bt, l.lanes = f, l;
        case hu:
          return l = rl(13, a, u, e), l.elementType = hu, l.lanes = f, l;
        case qa:
          return l = rl(19, a, u, e), l.elementType = qa, l.lanes = f, l;
        case ua:
          return G1(a, e, f, u);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Tl:
              case ol:
                n = 10;
                break l;
              case el:
                n = 9;
                break l;
              case kl:
                n = 11;
                break l;
              case Ra:
                n = 14;
                break l;
              case Fl:
                n = 16, t = null;
                break l;
            }
          n = 29, a = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), t = null;
      }
    return u = rl(n, a, u, e), u.elementType = l, u.type = t, u.lanes = f, u;
  }
  function Oa(l, u, a, t) {
    return l = rl(7, l, t, u), l.lanes = a, l;
  }
  function G1(l, u, a, t) {
    l = rl(22, l, t, u), l.elementType = ua, l.lanes = a;
    var e = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var f = e._current;
        if (f === null) throw Error(m(456));
        if ((e._pendingVisibility & 2) === 0) {
          var n = Xu(f, 2);
          n !== null && (e._pendingVisibility |= 2, El(n, f, 2));
        }
      },
      attach: function() {
        var f = e._current;
        if (f === null) throw Error(m(456));
        if ((e._pendingVisibility & 2) !== 0) {
          var n = Xu(f, 2);
          n !== null && (e._pendingVisibility &= -3, El(n, f, 2));
        }
      }
    };
    return l.stateNode = e, l;
  }
  function cc(l, u, a) {
    return l = rl(6, l, null, u), l.lanes = a, l;
  }
  function ic(l, u, a) {
    return u = rl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      u
    ), u.lanes = a, u.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, u;
  }
  function Uu(l) {
    l.flags |= 4;
  }
  function X1(l, u) {
    if (u.type !== "stylesheet" || (u.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Av(u)) {
      if (u = Kl.current, u !== null && ((Y & 4194176) === Y ? cu !== null : (Y & 62914560) !== Y && (Y & 536870912) === 0 || u !== cu))
        throw jt = yn, Pi;
      l.flags |= 8192;
    }
  }
  function sf(l, u) {
    u !== null && (l.flags |= 4), l.flags & 16384 && (u = l.tag !== 22 ? Ic() : 536870912, l.lanes |= u, ct |= u);
  }
  function ue(l, u) {
    if (!X)
      switch (l.tailMode) {
        case "hidden":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var t = null; a !== null; )
            a.alternate !== null && (t = a), a = a.sibling;
          t === null ? u || l.tail === null ? l.tail = null : l.tail.sibling = null : t.sibling = null;
      }
  }
  function J(l) {
    var u = l.alternate !== null && l.alternate.child === l.child, a = 0, t = 0;
    if (u)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, t |= e.subtreeFlags & 31457280, t |= e.flags & 31457280, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, t |= e.subtreeFlags, t |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= t, l.childLanes = a, u;
  }
  function ih(l, u, a) {
    var t = u.pendingProps;
    switch (hn(u), u.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return J(u), null;
      case 1:
        return J(u), null;
      case 3:
        return a = u.stateNode, t = null, l !== null && (t = l.memoizedState.cache), u.memoizedState.cache !== t && (u.flags |= 2048), ou(nl), Ga(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (Gt(u) ? Uu(u) : l === null || l.memoizedState.isDehydrated && (u.flags & 256) === 0 || (u.flags |= 1024, lu !== null && (bc(lu), lu = null))), J(u), null;
      case 26:
        return a = u.memoizedState, l === null ? (Uu(u), a !== null ? (J(u), X1(u, a)) : (J(u), u.flags &= -16777217)) : a ? a !== l.memoizedState ? (Uu(u), J(u), X1(u, a)) : (J(u), u.flags &= -16777217) : (l.memoizedProps !== t && Uu(u), J(u), u.flags &= -16777217), null;
      case 27:
        Te(u), a = Bu.current;
        var e = u.type;
        if (l !== null && u.stateNode != null)
          l.memoizedProps !== t && Uu(u);
        else {
          if (!t) {
            if (u.stateNode === null)
              throw Error(m(166));
            return J(u), null;
          }
          l = eu.current, Gt(u) ? ki(u) : (l = hv(e, t, a), u.stateNode = l, Uu(u));
        }
        return J(u), null;
      case 5:
        if (Te(u), a = u.type, l !== null && u.stateNode != null)
          l.memoizedProps !== t && Uu(u);
        else {
          if (!t) {
            if (u.stateNode === null)
              throw Error(m(166));
            return J(u), null;
          }
          if (l = eu.current, Gt(u))
            ki(u);
          else {
            switch (e = Tf(
              Bu.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof t.is == "string" ? e.createElement("select", { is: t.is }) : e.createElement("select"), t.multiple ? l.multiple = !0 : t.size && (l.size = t.size);
                    break;
                  default:
                    l = typeof t.is == "string" ? e.createElement(a, { is: t.is }) : e.createElement(a);
                }
            }
            l[bl] = u, l[Dl] = t;
            l: for (e = u.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === u) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === u)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            u.stateNode = l;
            l: switch (Sl(l, a, t), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!t.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Uu(u);
          }
        }
        return J(u), u.flags &= -16777217, null;
      case 6:
        if (l && u.stateNode != null)
          l.memoizedProps !== t && Uu(u);
        else {
          if (typeof t != "string" && u.stateNode === null)
            throw Error(m(166));
          if (l = Bu.current, Gt(u)) {
            if (l = u.stateNode, a = u.memoizedProps, t = null, e = Al, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  t = e.memoizedProps;
              }
            l[bl] = u, l = !!(l.nodeValue === a || t !== null && t.suppressHydrationWarning === !0 || fv(l.nodeValue, a)), l || Sa(u);
          } else
            l = Tf(l).createTextNode(
              t
            ), l[bl] = u, u.stateNode = l;
        }
        return J(u), null;
      case 13:
        if (t = u.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Gt(u), t !== null && t.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = u.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[bl] = u;
            } else
              Xt(), (u.flags & 128) === 0 && (u.memoizedState = null), u.flags |= 4;
            J(u), e = !1;
          } else
            lu !== null && (bc(lu), lu = null), e = !0;
          if (!e)
            return u.flags & 256 ? (zu(u), u) : (zu(u), null);
        }
        if (zu(u), (u.flags & 128) !== 0)
          return u.lanes = a, u;
        if (a = t !== null, l = l !== null && l.memoizedState !== null, a) {
          t = u.child, e = null, t.alternate !== null && t.alternate.memoizedState !== null && t.alternate.memoizedState.cachePool !== null && (e = t.alternate.memoizedState.cachePool.pool);
          var f = null;
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (f = t.memoizedState.cachePool.pool), f !== e && (t.flags |= 2048);
        }
        return a !== l && a && (u.child.flags |= 8192), sf(u, u.updateQueue), J(u), null;
      case 4:
        return Ga(), l === null && Hc(u.stateNode.containerInfo), J(u), null;
      case 10:
        return ou(u.type), J(u), null;
      case 19:
        if (cl(fl), e = u.memoizedState, e === null) return J(u), null;
        if (t = (u.flags & 128) !== 0, f = e.rendering, f === null)
          if (t) ue(e, !1);
          else {
            if ($ !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = u.child; l !== null; ) {
                if (f = Je(l), f !== null) {
                  for (u.flags |= 128, ue(e, !1), l = f.updateQueue, u.updateQueue = l, sf(u, l), u.subtreeFlags = 0, l = a, a = u.child; a !== null; )
                    Y1(a, l), a = a.sibling;
                  return r(
                    fl,
                    fl.current & 1 | 2
                  ), u.child;
                }
                l = l.sibling;
              }
            e.tail !== null && fu() > hf && (u.flags |= 128, t = !0, ue(e, !1), u.lanes = 4194304);
          }
        else {
          if (!t)
            if (l = Je(f), l !== null) {
              if (u.flags |= 128, t = !0, l = l.updateQueue, u.updateQueue = l, sf(u, l), ue(e, !0), e.tail === null && e.tailMode === "hidden" && !f.alternate && !X)
                return J(u), null;
            } else
              2 * fu() - e.renderingStartTime > hf && a !== 536870912 && (u.flags |= 128, t = !0, ue(e, !1), u.lanes = 4194304);
          e.isBackwards ? (f.sibling = u.child, u.child = f) : (l = e.last, l !== null ? l.sibling = f : u.child = f, e.last = f);
        }
        return e.tail !== null ? (u = e.tail, e.rendering = u, e.tail = u.sibling, e.renderingStartTime = fu(), u.sibling = null, l = fl.current, r(fl, t ? l & 1 | 2 : l & 1), u) : (J(u), null);
      case 22:
      case 23:
        return zu(u), Sn(), t = u.memoizedState !== null, l !== null ? l.memoizedState !== null !== t && (u.flags |= 8192) : t && (u.flags |= 8192), t ? (a & 536870912) !== 0 && (u.flags & 128) === 0 && (J(u), u.subtreeFlags & 6 && (u.flags |= 8192)) : J(u), a = u.updateQueue, a !== null && sf(u, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), t = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (t = u.memoizedState.cachePool.pool), t !== a && (u.flags |= 2048), l !== null && cl(ga), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), u.memoizedState.cache !== a && (u.flags |= 2048), ou(nl), J(u), null;
      case 25:
        return null;
    }
    throw Error(m(156, u.tag));
  }
  function vh(l, u) {
    switch (hn(u), u.tag) {
      case 1:
        return l = u.flags, l & 65536 ? (u.flags = l & -65537 | 128, u) : null;
      case 3:
        return ou(nl), Ga(), l = u.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (u.flags = l & -65537 | 128, u) : null;
      case 26:
      case 27:
      case 5:
        return Te(u), null;
      case 13:
        if (zu(u), l = u.memoizedState, l !== null && l.dehydrated !== null) {
          if (u.alternate === null)
            throw Error(m(340));
          Xt();
        }
        return l = u.flags, l & 65536 ? (u.flags = l & -65537 | 128, u) : null;
      case 19:
        return cl(fl), null;
      case 4:
        return Ga(), null;
      case 10:
        return ou(u.type), null;
      case 22:
      case 23:
        return zu(u), Sn(), l !== null && cl(ga), l = u.flags, l & 65536 ? (u.flags = l & -65537 | 128, u) : null;
      case 24:
        return ou(nl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Q1(l, u) {
    switch (hn(u), u.tag) {
      case 3:
        ou(nl), Ga();
        break;
      case 26:
      case 27:
      case 5:
        Te(u);
        break;
      case 4:
        Ga();
        break;
      case 13:
        zu(u);
        break;
      case 19:
        cl(fl);
        break;
      case 10:
        ou(u.type);
        break;
      case 22:
      case 23:
        zu(u), Sn(), l !== null && cl(ga);
        break;
      case 24:
        ou(nl);
    }
  }
  var sh = {
    getCacheForType: function(l) {
      var u = gl(nl), a = u.data.get(l);
      return a === void 0 && (a = l(), u.data.set(l, a)), a;
    }
  }, hh = typeof WeakMap == "function" ? WeakMap : Map, w = 0, x = null, B = null, Y = 0, K = 0, Nl = null, Hu = !1, nt = !1, vc = !1, _u = 0, $ = 0, Wu = 0, Ua = 0, sc = 0, Jl = 0, ct = 0, ae = null, vu = null, hc = !1, dc = 0, hf = 1 / 0, df = null, $u = null, yf = !1, Ha = null, te = 0, yc = 0, mc = null, ee = 0, Sc = null;
  function Yl() {
    if ((w & 2) !== 0 && Y !== 0)
      return Y & -Y;
    if (O.T !== null) {
      var l = Pa;
      return l !== 0 ? l : Dc();
    }
    return ti();
  }
  function Z1() {
    Jl === 0 && (Jl = (Y & 536870912) === 0 || X ? Pc() : 536870912);
    var l = Kl.current;
    return l !== null && (l.flags |= 32), Jl;
  }
  function El(l, u, a) {
    (l === x && K === 2 || l.cancelPendingCommit !== null) && (it(l, 0), qu(
      l,
      Y,
      Jl,
      !1
    )), ot(l, a), ((w & 2) === 0 || l !== x) && (l === x && ((w & 2) === 0 && (Ua |= a), $ === 4 && qu(
      l,
      Y,
      Jl,
      !1
    )), su(l));
  }
  function j1(l, u, a) {
    if ((w & 6) !== 0) throw Error(m(327));
    var t = !a && (u & 60) === 0 && (u & l.expiredLanes) === 0 || Tt(l, u), e = t ? mh(l, u) : Ac(l, u, !0), f = t;
    do {
      if (e === 0) {
        nt && !t && qu(l, u, 0, !1);
        break;
      } else if (e === 6)
        qu(
          l,
          u,
          0,
          !Hu
        );
      else {
        if (a = l.current.alternate, f && !dh(a)) {
          e = Ac(l, u, !1), f = !1;
          continue;
        }
        if (e === 2) {
          if (f = u, l.errorRecoveryDisabledLanes & f)
            var n = 0;
          else
            n = l.pendingLanes & -536870913, n = n !== 0 ? n : n & 536870912 ? 536870912 : 0;
          if (n !== 0) {
            u = n;
            l: {
              var c = l;
              e = ae;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (it(c, n).flags |= 256), n = Ac(
                c,
                n,
                !1
              ), n !== 2) {
                if (vc && !i) {
                  c.errorRecoveryDisabledLanes |= f, Ua |= f, e = 4;
                  break l;
                }
                f = vu, vu = e, f !== null && bc(f);
              }
              e = n;
            }
            if (f = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          it(l, 0), qu(l, u, 0, !0);
          break;
        }
        l: {
          switch (t = l, e) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((u & 4194176) === u) {
                qu(
                  t,
                  u,
                  Jl,
                  !Hu
                );
                break l;
              }
              break;
            case 2:
              vu = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if (t.finishedWork = a, t.finishedLanes = u, (u & 62914560) === u && (f = dc + 300 - fu(), 10 < f)) {
            if (qu(
              t,
              u,
              Jl,
              !Hu
            ), Oe(t, 0) !== 0) break l;
            t.timeoutHandle = iv(
              V1.bind(
                null,
                t,
                a,
                vu,
                df,
                hc,
                u,
                Jl,
                Ua,
                ct,
                Hu,
                2,
                -0,
                0
              ),
              f
            );
            break l;
          }
          V1(
            t,
            a,
            vu,
            df,
            hc,
            u,
            Jl,
            Ua,
            ct,
            Hu,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    su(l);
  }
  function bc(l) {
    vu === null ? vu = l : vu.push.apply(
      vu,
      l
    );
  }
  function V1(l, u, a, t, e, f, n, c, i, s, b, z, y) {
    var S = u.subtreeFlags;
    if ((S & 8192 || (S & 16785408) === 16785408) && (se = { stylesheets: null, count: 0, unsuspend: wh }, q1(u), u = $h(), u !== null)) {
      l.cancelPendingCommit = u(
        J1.bind(
          null,
          l,
          a,
          t,
          e,
          n,
          c,
          i,
          1,
          z,
          y
        )
      ), qu(l, f, n, !s);
      return;
    }
    J1(
      l,
      a,
      t,
      e,
      n,
      c,
      i,
      b,
      z,
      y
    );
  }
  function dh(l) {
    for (var u = l; ; ) {
      var a = u.tag;
      if ((a === 0 || a === 11 || a === 15) && u.flags & 16384 && (a = u.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var t = 0; t < a.length; t++) {
          var e = a[t], f = e.getSnapshot;
          e = e.value;
          try {
            if (!ql(f(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = u.child, u.subtreeFlags & 16384 && a !== null)
        a.return = u, u = a;
      else {
        if (u === l) break;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === l) return !0;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }
    return !0;
  }
  function qu(l, u, a, t) {
    u &= ~sc, u &= ~Ua, l.suspendedLanes |= u, l.pingedLanes &= ~u, t && (l.warmLanes |= u), t = l.expirationTimes;
    for (var e = u; 0 < e; ) {
      var f = 31 - _l(e), n = 1 << f;
      t[f] = -1, e &= ~n;
    }
    a !== 0 && li(l, a, u);
  }
  function mf() {
    return (w & 6) === 0 ? (fe(0), !1) : !0;
  }
  function gc() {
    if (B !== null) {
      if (K === 0)
        var l = B.return;
      else
        l = B, Tu = oa = null, Dn(l), ka = null, Vt = 0, l = B;
      for (; l !== null; )
        Q1(l.alternate, l), l = l.return;
      B = null;
    }
  }
  function it(l, u) {
    l.finishedWork = null, l.finishedLanes = 0;
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, Bh(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), gc(), x = l, B = a = wu(l.current, null), Y = u, K = 0, Nl = null, Hu = !1, nt = Tt(l, u), vc = !1, ct = Jl = sc = Ua = Wu = $ = 0, vu = ae = null, hc = !1, (u & 8) !== 0 && (u |= u & 32);
    var t = l.entangledLanes;
    if (t !== 0)
      for (l = l.entanglements, t &= u; 0 < t; ) {
        var e = 31 - _l(t), f = 1 << e;
        u |= l[e], t &= ~f;
      }
    return _u = u, Ze(), a;
  }
  function C1(l, u) {
    q = null, O.H = iu, u === Zt ? (u = u0(), K = 3) : u === Pi ? (u = u0(), K = 4) : K = u === I0 ? 8 : u !== null && typeof u == "object" && typeof u.then == "function" ? 6 : 1, Nl = u, B === null && ($ = 1, tf(
      l,
      Vl(u, l.current)
    ));
  }
  function x1() {
    var l = O.H;
    return O.H = iu, l === null ? iu : l;
  }
  function K1() {
    var l = O.A;
    return O.A = sh, l;
  }
  function zc() {
    $ = 4, Hu || (Y & 4194176) !== Y && Kl.current !== null || (nt = !0), (Wu & 134217727) === 0 && (Ua & 134217727) === 0 || x === null || qu(
      x,
      Y,
      Jl,
      !1
    );
  }
  function Ac(l, u, a) {
    var t = w;
    w |= 2;
    var e = x1(), f = K1();
    (x !== l || Y !== u) && (df = null, it(l, u)), u = !1;
    var n = $;
    l: do
      try {
        if (K !== 0 && B !== null) {
          var c = B, i = Nl;
          switch (K) {
            case 8:
              gc(), n = 6;
              break l;
            case 3:
            case 2:
            case 6:
              Kl.current === null && (u = !0);
              var s = K;
              if (K = 0, Nl = null, vt(l, c, i, s), a && nt) {
                n = 0;
                break l;
              }
              break;
            default:
              s = K, K = 0, Nl = null, vt(l, c, i, s);
          }
        }
        yh(), n = $;
        break;
      } catch (b) {
        C1(l, b);
      }
    while (!0);
    return u && l.shellSuspendCounter++, Tu = oa = null, w = t, O.H = e, O.A = f, B === null && (x = null, Y = 0, Ze()), n;
  }
  function yh() {
    for (; B !== null; ) L1(B);
  }
  function mh(l, u) {
    var a = w;
    w |= 2;
    var t = x1(), e = K1();
    x !== l || Y !== u ? (df = null, hf = fu() + 500, it(l, u)) : nt = Tt(
      l,
      u
    );
    l: do
      try {
        if (K !== 0 && B !== null) {
          u = B;
          var f = Nl;
          u: switch (K) {
            case 1:
              K = 0, Nl = null, vt(l, u, f, 1);
              break;
            case 2:
              if (Ii(f)) {
                K = 0, Nl = null, p1(u);
                break;
              }
              u = function() {
                K === 2 && x === l && (K = 7), su(l);
              }, f.then(u, u);
              break l;
            case 3:
              K = 7;
              break l;
            case 4:
              K = 5;
              break l;
            case 7:
              Ii(f) ? (K = 0, Nl = null, p1(u)) : (K = 0, Nl = null, vt(l, u, f, 7));
              break;
            case 5:
              var n = null;
              switch (B.tag) {
                case 26:
                  n = B.memoizedState;
                case 5:
                case 27:
                  var c = B;
                  if (!n || Av(n)) {
                    K = 0, Nl = null;
                    var i = c.sibling;
                    if (i !== null) B = i;
                    else {
                      var s = c.return;
                      s !== null ? (B = s, Sf(s)) : B = null;
                    }
                    break u;
                  }
              }
              K = 0, Nl = null, vt(l, u, f, 5);
              break;
            case 6:
              K = 0, Nl = null, vt(l, u, f, 6);
              break;
            case 8:
              gc(), $ = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        Sh();
        break;
      } catch (b) {
        C1(l, b);
      }
    while (!0);
    return Tu = oa = null, O.H = t, O.A = e, w = a, B !== null ? 0 : (x = null, Y = 0, Ze(), $);
  }
  function Sh() {
    for (; B !== null && !Zv(); )
      L1(B);
  }
  function L1(l) {
    var u = h1(l.alternate, l, _u);
    l.memoizedProps = l.pendingProps, u === null ? Sf(l) : B = u;
  }
  function p1(l) {
    var u = l, a = u.alternate;
    switch (u.tag) {
      case 15:
      case 0:
        u = f1(
          a,
          u,
          u.pendingProps,
          u.type,
          void 0,
          Y
        );
        break;
      case 11:
        u = f1(
          a,
          u,
          u.pendingProps,
          u.type.render,
          u.ref,
          Y
        );
        break;
      case 5:
        Dn(u);
      default:
        Q1(a, u), u = B = Y1(u, _u), u = h1(a, u, _u);
    }
    l.memoizedProps = l.pendingProps, u === null ? Sf(l) : B = u;
  }
  function vt(l, u, a, t) {
    Tu = oa = null, Dn(u), ka = null, Vt = 0;
    var e = u.return;
    try {
      if (th(
        l,
        e,
        u,
        a,
        Y
      )) {
        $ = 1, tf(
          l,
          Vl(a, l.current)
        ), B = null;
        return;
      }
    } catch (f) {
      if (e !== null) throw B = e, f;
      $ = 1, tf(
        l,
        Vl(a, l.current)
      ), B = null;
      return;
    }
    u.flags & 32768 ? (X || t === 1 ? l = !0 : nt || (Y & 536870912) !== 0 ? l = !1 : (Hu = l = !0, (t === 2 || t === 3 || t === 6) && (t = Kl.current, t !== null && t.tag === 13 && (t.flags |= 16384))), r1(u, l)) : Sf(u);
  }
  function Sf(l) {
    var u = l;
    do {
      if ((u.flags & 32768) !== 0) {
        r1(
          u,
          Hu
        );
        return;
      }
      l = u.return;
      var a = ih(
        u.alternate,
        u,
        _u
      );
      if (a !== null) {
        B = a;
        return;
      }
      if (u = u.sibling, u !== null) {
        B = u;
        return;
      }
      B = u = l;
    } while (u !== null);
    $ === 0 && ($ = 5);
  }
  function r1(l, u) {
    do {
      var a = vh(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, B = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !u && (l = l.sibling, l !== null)) {
        B = l;
        return;
      }
      B = l = a;
    } while (l !== null);
    $ = 6, B = null;
  }
  function J1(l, u, a, t, e, f, n, c, i, s) {
    var b = O.T, z = G.p;
    try {
      G.p = 2, O.T = null, bh(
        l,
        u,
        a,
        t,
        z,
        e,
        f,
        n,
        c,
        i,
        s
      );
    } finally {
      O.T = b, G.p = z;
    }
  }
  function bh(l, u, a, t, e, f, n, c) {
    do
      st();
    while (Ha !== null);
    if ((w & 6) !== 0) throw Error(m(327));
    var i = l.finishedWork;
    if (t = l.finishedLanes, i === null) return null;
    if (l.finishedWork = null, l.finishedLanes = 0, i === l.current) throw Error(m(177));
    l.callbackNode = null, l.callbackPriority = 0, l.cancelPendingCommit = null;
    var s = i.lanes | i.childLanes;
    if (s |= cn, Wv(
      l,
      t,
      s,
      f,
      n,
      c
    ), l === x && (B = x = null, Y = 0), (i.subtreeFlags & 10256) === 0 && (i.flags & 10256) === 0 || yf || (yf = !0, yc = s, mc = a, Eh(oe, function() {
      return st(), null;
    })), a = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || a ? (a = O.T, O.T = null, f = G.p, G.p = 2, n = w, w |= 4, fh(l, i), U1(i, l), Cs(Bc, l.containerInfo), Hf = !!Rc, Bc = Rc = null, l.current = i, o1(l, i.alternate, i), jv(), w = n, G.p = f, O.T = a) : l.current = i, yf ? (yf = !1, Ha = l, te = t) : w1(l, s), s = l.pendingLanes, s === 0 && ($u = null), Lv(i.stateNode), su(l), u !== null)
      for (e = l.onRecoverableError, i = 0; i < u.length; i++)
        s = u[i], e(s.value, {
          componentStack: s.stack
        });
    return (te & 3) !== 0 && st(), s = l.pendingLanes, (t & 4194218) !== 0 && (s & 42) !== 0 ? l === Sc ? ee++ : (ee = 0, Sc = l) : ee = 0, fe(0), null;
  }
  function w1(l, u) {
    (l.pooledCacheLanes &= u) === 0 && (u = l.pooledCache, u != null && (l.pooledCache = null, xt(u)));
  }
  function st() {
    if (Ha !== null) {
      var l = Ha, u = yc;
      yc = 0;
      var a = ai(te), t = O.T, e = G.p;
      try {
        if (G.p = 32 > a ? 32 : a, O.T = null, Ha === null)
          var f = !1;
        else {
          a = mc, mc = null;
          var n = Ha, c = te;
          if (Ha = null, te = 0, (w & 6) !== 0)
            throw Error(m(331));
          var i = w;
          if (w |= 4, B1(n.current), _1(n, n.current, c, a), w = i, fe(0, !1), Hl && typeof Hl.onPostCommitFiberRoot == "function")
            try {
              Hl.onPostCommitFiberRoot(Et, n);
            } catch {
            }
          f = !0;
        }
        return f;
      } finally {
        G.p = e, O.T = t, w1(l, u);
      }
    }
    return !1;
  }
  function W1(l, u, a) {
    u = Vl(a, u), u = Zn(l.stateNode, u, 2), l = Lu(l, u, 2), l !== null && (ot(l, 2), su(l));
  }
  function C(l, u, a) {
    if (l.tag === 3)
      W1(l, l, a);
    else
      for (; u !== null; ) {
        if (u.tag === 3) {
          W1(
            u,
            l,
            a
          );
          break;
        } else if (u.tag === 1) {
          var t = u.stateNode;
          if (typeof u.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && ($u === null || !$u.has(t))) {
            l = Vl(a, l), a = F0(2), t = Lu(u, a, 2), t !== null && (P0(
              a,
              t,
              u,
              l
            ), ot(t, 2), su(t));
            break;
          }
        }
        u = u.return;
      }
  }
  function Ec(l, u, a) {
    var t = l.pingCache;
    if (t === null) {
      t = l.pingCache = new hh();
      var e = /* @__PURE__ */ new Set();
      t.set(u, e);
    } else
      e = t.get(u), e === void 0 && (e = /* @__PURE__ */ new Set(), t.set(u, e));
    e.has(a) || (vc = !0, e.add(a), l = gh.bind(null, l, u, a), u.then(l, l));
  }
  function gh(l, u, a) {
    var t = l.pingCache;
    t !== null && t.delete(u), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, x === l && (Y & a) === a && ($ === 4 || $ === 3 && (Y & 62914560) === Y && 300 > fu() - dc ? (w & 2) === 0 && it(l, 0) : sc |= a, ct === Y && (ct = 0)), su(l);
  }
  function $1(l, u) {
    u === 0 && (u = Ic()), l = Xu(l, u), l !== null && (ot(l, u), su(l));
  }
  function zh(l) {
    var u = l.memoizedState, a = 0;
    u !== null && (a = u.retryLane), $1(l, a);
  }
  function Ah(l, u) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var t = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        t = l.stateNode;
        break;
      case 22:
        t = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    t !== null && t.delete(u), $1(l, a);
  }
  function Eh(l, u) {
    return Zf(l, u);
  }
  var bf = null, ht = null, Tc = !1, gf = !1, oc = !1, _a = 0;
  function su(l) {
    l !== ht && l.next === null && (ht === null ? bf = ht = l : ht = ht.next = l), gf = !0, Tc || (Tc = !0, oh(Th));
  }
  function fe(l, u) {
    if (!oc && gf) {
      oc = !0;
      do
        for (var a = !1, t = bf; t !== null; ) {
          if (l !== 0) {
            var e = t.pendingLanes;
            if (e === 0) var f = 0;
            else {
              var n = t.suspendedLanes, c = t.pingedLanes;
              f = (1 << 31 - _l(42 | l) + 1) - 1, f &= e & ~(n & ~c), f = f & 201326677 ? f & 201326677 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, P1(t, f));
          } else
            f = Y, f = Oe(
              t,
              t === x ? f : 0
            ), (f & 3) === 0 || Tt(t, f) || (a = !0, P1(t, f));
          t = t.next;
        }
      while (a);
      oc = !1;
    }
  }
  function Th() {
    gf = Tc = !1;
    var l = 0;
    _a !== 0 && (Rh() && (l = _a), _a = 0);
    for (var u = fu(), a = null, t = bf; t !== null; ) {
      var e = t.next, f = k1(t, u);
      f === 0 ? (t.next = null, a === null ? bf = e : a.next = e, e === null && (ht = a)) : (a = t, (l !== 0 || (f & 3) !== 0) && (gf = !0)), t = e;
    }
    fe(l);
  }
  function k1(l, u) {
    for (var a = l.suspendedLanes, t = l.pingedLanes, e = l.expirationTimes, f = l.pendingLanes & -62914561; 0 < f; ) {
      var n = 31 - _l(f), c = 1 << n, i = e[n];
      i === -1 ? ((c & a) === 0 || (c & t) !== 0) && (e[n] = wv(c, u)) : i <= u && (l.expiredLanes |= c), f &= ~c;
    }
    if (u = x, a = Y, a = Oe(
      l,
      l === u ? a : 0
    ), t = l.callbackNode, a === 0 || l === u && K === 2 || l.cancelPendingCommit !== null)
      return t !== null && t !== null && jf(t), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Tt(l, a)) {
      if (u = a & -a, u === l.callbackPriority) return u;
      switch (t !== null && jf(t), ai(a)) {
        case 2:
        case 8:
          a = kc;
          break;
        case 32:
          a = oe;
          break;
        case 268435456:
          a = Fc;
          break;
        default:
          a = oe;
      }
      return t = F1.bind(null, l), a = Zf(a, t), l.callbackPriority = u, l.callbackNode = a, u;
    }
    return t !== null && t !== null && jf(t), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function F1(l, u) {
    var a = l.callbackNode;
    if (st() && l.callbackNode !== a)
      return null;
    var t = Y;
    return t = Oe(
      l,
      l === x ? t : 0
    ), t === 0 ? null : (j1(l, t, u), k1(l, fu()), l.callbackNode != null && l.callbackNode === a ? F1.bind(null, l) : null);
  }
  function P1(l, u) {
    if (st()) return null;
    j1(l, u, !0);
  }
  function oh(l) {
    Nh(function() {
      (w & 6) !== 0 ? Zf($c, l) : l();
    });
  }
  function Dc() {
    return _a === 0 && (_a = Pc()), _a;
  }
  function I1(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l);
  }
  function lv(l, u) {
    var a = u.ownerDocument.createElement("input");
    return a.name = u.name, a.value = u.value, l.id && a.setAttribute("form", l.id), u.parentNode.insertBefore(a, u), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function Dh(l, u, a, t, e) {
    if (u === "submit" && a && a.stateNode === e) {
      var f = I1(
        (e[Dl] || null).action
      ), n = t.submitter;
      n && (u = (u = n[Dl] || null) ? I1(u.formAction) : n.getAttribute("formAction"), u !== null && (f = u, n = null));
      var c = new Ge(
        "action",
        "action",
        null,
        t,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (t.defaultPrevented) {
                if (_a !== 0) {
                  var i = n ? lv(e, n) : new FormData(e);
                  Nn(
                    a,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: f
                    },
                    null,
                    i
                  );
                }
              } else
                typeof f == "function" && (c.preventDefault(), i = n ? lv(e, n) : new FormData(e), Nn(
                  a,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: f
                  },
                  f,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Mc = 0; Mc < Ji.length; Mc++) {
    var Oc = Ji[Mc], Mh = Oc.toLowerCase(), Oh = Oc[0].toUpperCase() + Oc.slice(1);
    Il(
      Mh,
      "on" + Oh
    );
  }
  Il(xi, "onAnimationEnd"), Il(Ki, "onAnimationIteration"), Il(Li, "onAnimationStart"), Il("dblclick", "onDoubleClick"), Il("focusin", "onFocus"), Il("focusout", "onBlur"), Il(Ks, "onTransitionRun"), Il(Ls, "onTransitionStart"), Il(ps, "onTransitionCancel"), Il(pi, "onTransitionEnd"), ja("onMouseEnter", ["mouseout", "mouseover"]), ja("onMouseLeave", ["mouseout", "mouseover"]), ja("onPointerEnter", ["pointerout", "pointerover"]), ja("onPointerLeave", ["pointerout", "pointerover"]), va(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), va(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), va("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), va(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), va(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), va(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Uh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne)
  );
  function uv(l, u) {
    u = (u & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var t = l[a], e = t.event;
      t = t.listeners;
      l: {
        var f = void 0;
        if (u)
          for (var n = t.length - 1; 0 <= n; n--) {
            var c = t[n], i = c.instance, s = c.currentTarget;
            if (c = c.listener, i !== f && e.isPropagationStopped())
              break l;
            f = c, e.currentTarget = s;
            try {
              f(e);
            } catch (b) {
              af(b);
            }
            e.currentTarget = null, f = i;
          }
        else
          for (n = 0; n < t.length; n++) {
            if (c = t[n], i = c.instance, s = c.currentTarget, c = c.listener, i !== f && e.isPropagationStopped())
              break l;
            f = c, e.currentTarget = s;
            try {
              f(e);
            } catch (b) {
              af(b);
            }
            e.currentTarget = null, f = i;
          }
      }
    }
  }
  function N(l, u) {
    var a = u[Cf];
    a === void 0 && (a = u[Cf] = /* @__PURE__ */ new Set());
    var t = l + "__bubble";
    a.has(t) || (av(u, l, 2, !1), a.add(t));
  }
  function Uc(l, u, a) {
    var t = 0;
    u && (t |= 4), av(
      a,
      l,
      t,
      u
    );
  }
  var zf = "_reactListening" + Math.random().toString(36).slice(2);
  function Hc(l) {
    if (!l[zf]) {
      l[zf] = !0, fi.forEach(function(a) {
        a !== "selectionchange" && (Uh.has(a) || Uc(a, !1, l), Uc(a, !0, l));
      });
      var u = l.nodeType === 9 ? l : l.ownerDocument;
      u === null || u[zf] || (u[zf] = !0, Uc("selectionchange", !1, u));
    }
  }
  function av(l, u, a, t) {
    switch (Ov(u)) {
      case 2:
        var e = Ph;
        break;
      case 8:
        e = Ih;
        break;
      default:
        e = Cc;
    }
    a = e.bind(
      null,
      u,
      a,
      l
    ), e = void 0, !Wf || u !== "touchstart" && u !== "touchmove" && u !== "wheel" || (e = !0), t ? e !== void 0 ? l.addEventListener(u, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(u, a, !0) : e !== void 0 ? l.addEventListener(u, a, {
      passive: e
    }) : l.addEventListener(u, a, !1);
  }
  function _c(l, u, a, t, e) {
    var f = t;
    if ((u & 1) === 0 && (u & 2) === 0 && t !== null)
      l: for (; ; ) {
        if (t === null) return;
        var n = t.tag;
        if (n === 3 || n === 4) {
          var c = t.stateNode.containerInfo;
          if (c === e || c.nodeType === 8 && c.parentNode === e)
            break;
          if (n === 4)
            for (n = t.return; n !== null; ) {
              var i = n.tag;
              if ((i === 3 || i === 4) && (i = n.stateNode.containerInfo, i === e || i.nodeType === 8 && i.parentNode === e))
                return;
              n = n.return;
            }
          for (; c !== null; ) {
            if (n = ia(c), n === null) return;
            if (i = n.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              t = f = n;
              continue l;
            }
            c = c.parentNode;
          }
        }
        t = t.return;
      }
    gi(function() {
      var s = f, b = Jf(a), z = [];
      l: {
        var y = ri.get(l);
        if (y !== void 0) {
          var S = Ge, o = l;
          switch (l) {
            case "keypress":
              if (Ne(a) === 0) break l;
            case "keydown":
            case "keyup":
              S = As;
              break;
            case "focusin":
              o = "focus", S = Pf;
              break;
            case "focusout":
              o = "blur", S = Pf;
              break;
            case "beforeblur":
            case "afterblur":
              S = Pf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Ei;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = cs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = os;
              break;
            case xi:
            case Ki:
            case Li:
              S = ss;
              break;
            case pi:
              S = Ms;
              break;
            case "scroll":
            case "scrollend":
              S = fs;
              break;
            case "wheel":
              S = Us;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = ds;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = oi;
              break;
            case "toggle":
            case "beforetoggle":
              S = _s;
          }
          var H = (u & 4) !== 0, k = !H && (l === "scroll" || l === "scrollend"), h = H ? y !== null ? y + "Capture" : null : y;
          H = [];
          for (var v = s, d; v !== null; ) {
            var g = v;
            if (d = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || d === null || h === null || (g = Ot(v, h), g != null && H.push(
              ce(v, g, d)
            )), k) break;
            v = v.return;
          }
          0 < H.length && (y = new S(
            y,
            o,
            null,
            a,
            b
          ), z.push({ event: y, listeners: H }));
        }
      }
      if ((u & 7) === 0) {
        l: {
          if (y = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", y && a !== rf && (o = a.relatedTarget || a.fromElement) && (ia(o) || o[Xa]))
            break l;
          if ((S || y) && (y = b.window === b ? b : (y = b.ownerDocument) ? y.defaultView || y.parentWindow : window, S ? (o = a.relatedTarget || a.toElement, S = s, o = o ? ia(o) : null, o !== null && (k = U(o), H = o.tag, o !== k || H !== 5 && H !== 27 && H !== 6) && (o = null)) : (S = null, o = s), S !== o)) {
            if (H = Ei, g = "onMouseLeave", h = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (H = oi, g = "onPointerLeave", h = "onPointerEnter", v = "pointer"), k = S == null ? y : Mt(S), d = o == null ? y : Mt(o), y = new H(
              g,
              v + "leave",
              S,
              a,
              b
            ), y.target = k, y.relatedTarget = d, g = null, ia(b) === s && (H = new H(
              h,
              v + "enter",
              o,
              a,
              b
            ), H.target = d, H.relatedTarget = k, g = H), k = g, S && o)
              u: {
                for (H = S, h = o, v = 0, d = H; d; d = dt(d))
                  v++;
                for (d = 0, g = h; g; g = dt(g))
                  d++;
                for (; 0 < v - d; )
                  H = dt(H), v--;
                for (; 0 < d - v; )
                  h = dt(h), d--;
                for (; v--; ) {
                  if (H === h || h !== null && H === h.alternate)
                    break u;
                  H = dt(H), h = dt(h);
                }
                H = null;
              }
            else H = null;
            S !== null && tv(
              z,
              y,
              S,
              H,
              !1
            ), o !== null && k !== null && tv(
              z,
              k,
              o,
              H,
              !0
            );
          }
        }
        l: {
          if (y = s ? Mt(s) : window, S = y.nodeName && y.nodeName.toLowerCase(), S === "select" || S === "input" && y.type === "file")
            var T = Ri;
          else if (_i(y))
            if (Bi)
              T = js;
            else {
              T = Qs;
              var R = Xs;
            }
          else
            S = y.nodeName, !S || S.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? s && pf(s.elementType) && (T = Ri) : T = Zs;
          if (T && (T = T(l, s))) {
            qi(
              z,
              T,
              a,
              b
            );
            break l;
          }
          R && R(l, y, s), l === "focusout" && s && y.type === "number" && s.memoizedProps.value != null && Lf(y, "number", y.value);
        }
        switch (R = s ? Mt(s) : window, l) {
          case "focusin":
            (_i(R) || R.contentEditable === "true") && (pa = R, en = s, Yt = null);
            break;
          case "focusout":
            Yt = en = pa = null;
            break;
          case "mousedown":
            fn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fn = !1, Vi(z, a, b);
            break;
          case "selectionchange":
            if (xs) break;
          case "keydown":
          case "keyup":
            Vi(z, a, b);
        }
        var D;
        if (ln)
          l: {
            switch (l) {
              case "compositionstart":
                var M = "onCompositionStart";
                break l;
              case "compositionend":
                M = "onCompositionEnd";
                break l;
              case "compositionupdate":
                M = "onCompositionUpdate";
                break l;
            }
            M = void 0;
          }
        else
          La ? Ui(l, a) && (M = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (M = "onCompositionStart");
        M && (Di && a.locale !== "ko" && (La || M !== "onCompositionStart" ? M === "onCompositionEnd" && La && (D = zi()) : (Gu = b, $f = "value" in Gu ? Gu.value : Gu.textContent, La = !0)), R = Af(s, M), 0 < R.length && (M = new Ti(
          M,
          l,
          null,
          a,
          b
        ), z.push({ event: M, listeners: R }), D ? M.data = D : (D = Hi(a), D !== null && (M.data = D)))), (D = Rs ? Bs(l, a) : Ns(l, a)) && (M = Af(s, "onBeforeInput"), 0 < M.length && (R = new Ti(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          b
        ), z.push({
          event: R,
          listeners: M
        }), R.data = D)), Dh(
          z,
          l,
          s,
          a,
          b
        );
      }
      uv(z, u);
    });
  }
  function ce(l, u, a) {
    return {
      instance: l,
      listener: u,
      currentTarget: a
    };
  }
  function Af(l, u) {
    for (var a = u + "Capture", t = []; l !== null; ) {
      var e = l, f = e.stateNode;
      e = e.tag, e !== 5 && e !== 26 && e !== 27 || f === null || (e = Ot(l, a), e != null && t.unshift(
        ce(l, e, f)
      ), e = Ot(l, u), e != null && t.push(
        ce(l, e, f)
      )), l = l.return;
    }
    return t;
  }
  function dt(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function tv(l, u, a, t, e) {
    for (var f = u._reactName, n = []; a !== null && a !== t; ) {
      var c = a, i = c.alternate, s = c.stateNode;
      if (c = c.tag, i !== null && i === t) break;
      c !== 5 && c !== 26 && c !== 27 || s === null || (i = s, e ? (s = Ot(a, f), s != null && n.unshift(
        ce(a, s, i)
      )) : e || (s = Ot(a, f), s != null && n.push(
        ce(a, s, i)
      ))), a = a.return;
    }
    n.length !== 0 && l.push({ event: u, listeners: n });
  }
  var Hh = /\r\n?/g, _h = /\u0000|\uFFFD/g;
  function ev(l) {
    return (typeof l == "string" ? l : "" + l).replace(Hh, `
`).replace(_h, "");
  }
  function fv(l, u) {
    return u = ev(u), ev(l) === u;
  }
  function Ef() {
  }
  function V(l, u, a, t, e, f) {
    switch (a) {
      case "children":
        typeof t == "string" ? u === "body" || u === "textarea" && t === "" || Ca(l, t) : (typeof t == "number" || typeof t == "bigint") && u !== "body" && Ca(l, "" + t);
        break;
      case "className":
        He(l, "class", t);
        break;
      case "tabIndex":
        He(l, "tabindex", t);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        He(l, a, t);
        break;
      case "style":
        Si(l, t, f);
        break;
      case "data":
        if (u !== "object") {
          He(l, "data", t);
          break;
        }
      case "src":
      case "href":
        if (t === "" && (u !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (t == null || typeof t == "function" || typeof t == "symbol" || typeof t == "boolean") {
          l.removeAttribute(a);
          break;
        }
        t = Re("" + t), l.setAttribute(a, t);
        break;
      case "action":
      case "formAction":
        if (typeof t == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (a === "formAction" ? (u !== "input" && V(l, u, "name", e.name, e, null), V(
            l,
            u,
            "formEncType",
            e.formEncType,
            e,
            null
          ), V(
            l,
            u,
            "formMethod",
            e.formMethod,
            e,
            null
          ), V(
            l,
            u,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (V(l, u, "encType", e.encType, e, null), V(l, u, "method", e.method, e, null), V(l, u, "target", e.target, e, null)));
        if (t == null || typeof t == "symbol" || typeof t == "boolean") {
          l.removeAttribute(a);
          break;
        }
        t = Re("" + t), l.setAttribute(a, t);
        break;
      case "onClick":
        t != null && (l.onclick = Ef);
        break;
      case "onScroll":
        t != null && N("scroll", l);
        break;
      case "onScrollEnd":
        t != null && N("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t))
            throw Error(m(61));
          if (a = t.__html, a != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "muted":
        l.muted = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (t == null || typeof t == "function" || typeof t == "boolean" || typeof t == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Re("" + t), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        t != null && typeof t != "function" && typeof t != "symbol" ? l.setAttribute(a, "" + t) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        t && typeof t != "function" && typeof t != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        t === !0 ? l.setAttribute(a, "") : t !== !1 && t != null && typeof t != "function" && typeof t != "symbol" ? l.setAttribute(a, t) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        t != null && typeof t != "function" && typeof t != "symbol" && !isNaN(t) && 1 <= t ? l.setAttribute(a, t) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        t == null || typeof t == "function" || typeof t == "symbol" || isNaN(t) ? l.removeAttribute(a) : l.setAttribute(a, t);
        break;
      case "popover":
        N("beforetoggle", l), N("toggle", l), Ue(l, "popover", t);
        break;
      case "xlinkActuate":
        Su(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          t
        );
        break;
      case "xlinkArcrole":
        Su(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          t
        );
        break;
      case "xlinkRole":
        Su(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          t
        );
        break;
      case "xlinkShow":
        Su(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          t
        );
        break;
      case "xlinkTitle":
        Su(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          t
        );
        break;
      case "xlinkType":
        Su(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          t
        );
        break;
      case "xmlBase":
        Su(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          t
        );
        break;
      case "xmlLang":
        Su(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          t
        );
        break;
      case "xmlSpace":
        Su(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          t
        );
        break;
      case "is":
        Ue(l, "is", t);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = ts.get(a) || a, Ue(l, a, t));
    }
  }
  function qc(l, u, a, t, e, f) {
    switch (a) {
      case "style":
        Si(l, t, f);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t))
            throw Error(m(61));
          if (a = t.__html, a != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof t == "string" ? Ca(l, t) : (typeof t == "number" || typeof t == "bigint") && Ca(l, "" + t);
        break;
      case "onScroll":
        t != null && N("scroll", l);
        break;
      case "onScrollEnd":
        t != null && N("scrollend", l);
        break;
      case "onClick":
        t != null && (l.onclick = Ef);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ni.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), u = a.slice(2, e ? a.length - 7 : void 0), f = l[Dl] || null, f = f != null ? f[a] : null, typeof f == "function" && l.removeEventListener(u, f, e), typeof t == "function")) {
              typeof f != "function" && f !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(u, t, e);
              break l;
            }
            a in l ? l[a] = t : t === !0 ? l.setAttribute(a, "") : Ue(l, a, t);
          }
    }
  }
  function Sl(l, u, a) {
    switch (u) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        N("error", l), N("load", l);
        var t = !1, e = !1, f;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var n = a[f];
            if (n != null)
              switch (f) {
                case "src":
                  t = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, u));
                default:
                  V(l, u, f, n, a, null);
              }
          }
        e && V(l, u, "srcSet", a.srcSet, a, null), t && V(l, u, "src", a.src, a, null);
        return;
      case "input":
        N("invalid", l);
        var c = f = n = e = null, i = null, s = null;
        for (t in a)
          if (a.hasOwnProperty(t)) {
            var b = a[t];
            if (b != null)
              switch (t) {
                case "name":
                  e = b;
                  break;
                case "type":
                  n = b;
                  break;
                case "checked":
                  i = b;
                  break;
                case "defaultChecked":
                  s = b;
                  break;
                case "value":
                  f = b;
                  break;
                case "defaultValue":
                  c = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(m(137, u));
                  break;
                default:
                  V(l, u, t, b, a, null);
              }
          }
        hi(
          l,
          f,
          c,
          i,
          s,
          n,
          e,
          !1
        ), _e(l);
        return;
      case "select":
        N("invalid", l), t = n = f = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (c = a[e], c != null))
            switch (e) {
              case "value":
                f = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "multiple":
                t = c;
              default:
                V(l, u, e, c, a, null);
            }
        u = f, a = n, l.multiple = !!t, u != null ? Va(l, !!t, u, !1) : a != null && Va(l, !!t, a, !0);
        return;
      case "textarea":
        N("invalid", l), f = e = t = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (c = a[n], c != null))
            switch (n) {
              case "value":
                t = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                f = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(m(91));
                break;
              default:
                V(l, u, n, c, a, null);
            }
        yi(l, t, e, f), _e(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && (t = a[i], t != null))
            switch (i) {
              case "selected":
                l.selected = t && typeof t != "function" && typeof t != "symbol";
                break;
              default:
                V(l, u, i, t, a, null);
            }
        return;
      case "dialog":
        N("cancel", l), N("close", l);
        break;
      case "iframe":
      case "object":
        N("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < ne.length; t++)
          N(ne[t], l);
        break;
      case "image":
        N("error", l), N("load", l);
        break;
      case "details":
        N("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        N("error", l), N("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (s in a)
          if (a.hasOwnProperty(s) && (t = a[s], t != null))
            switch (s) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, u));
              default:
                V(l, u, s, t, a, null);
            }
        return;
      default:
        if (pf(u)) {
          for (b in a)
            a.hasOwnProperty(b) && (t = a[b], t !== void 0 && qc(
              l,
              u,
              b,
              t,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (t = a[c], t != null && V(l, u, c, t, a, null));
  }
  function qh(l, u, a, t) {
    switch (u) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, f = null, n = null, c = null, i = null, s = null, b = null;
        for (S in a) {
          var z = a[S];
          if (a.hasOwnProperty(S) && z != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = z;
              default:
                t.hasOwnProperty(S) || V(l, u, S, null, t, z);
            }
        }
        for (var y in t) {
          var S = t[y];
          if (z = a[y], t.hasOwnProperty(y) && (S != null || z != null))
            switch (y) {
              case "type":
                f = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                s = S;
                break;
              case "defaultChecked":
                b = S;
                break;
              case "value":
                n = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(m(137, u));
                break;
              default:
                S !== z && V(
                  l,
                  u,
                  y,
                  S,
                  t,
                  z
                );
            }
        }
        Kf(
          l,
          n,
          c,
          i,
          s,
          b,
          f,
          e
        );
        return;
      case "select":
        S = n = c = y = null;
        for (f in a)
          if (i = a[f], a.hasOwnProperty(f) && i != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                S = i;
              default:
                t.hasOwnProperty(f) || V(
                  l,
                  u,
                  f,
                  null,
                  t,
                  i
                );
            }
        for (e in t)
          if (f = t[e], i = a[e], t.hasOwnProperty(e) && (f != null || i != null))
            switch (e) {
              case "value":
                y = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                n = f;
              default:
                f !== i && V(
                  l,
                  u,
                  e,
                  f,
                  t,
                  i
                );
            }
        u = c, a = n, t = S, y != null ? Va(l, !!a, y, !1) : !!t != !!a && (u != null ? Va(l, !!a, u, !0) : Va(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        S = y = null;
        for (c in a)
          if (e = a[c], a.hasOwnProperty(c) && e != null && !t.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                V(l, u, c, null, t, e);
            }
        for (n in t)
          if (e = t[n], f = a[n], t.hasOwnProperty(n) && (e != null || f != null))
            switch (n) {
              case "value":
                y = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== f && V(l, u, n, e, t, f);
            }
        di(l, y, S);
        return;
      case "option":
        for (var o in a)
          if (y = a[o], a.hasOwnProperty(o) && y != null && !t.hasOwnProperty(o))
            switch (o) {
              case "selected":
                l.selected = !1;
                break;
              default:
                V(
                  l,
                  u,
                  o,
                  null,
                  t,
                  y
                );
            }
        for (i in t)
          if (y = t[i], S = a[i], t.hasOwnProperty(i) && y !== S && (y != null || S != null))
            switch (i) {
              case "selected":
                l.selected = y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                V(
                  l,
                  u,
                  i,
                  y,
                  t,
                  S
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var H in a)
          y = a[H], a.hasOwnProperty(H) && y != null && !t.hasOwnProperty(H) && V(l, u, H, null, t, y);
        for (s in t)
          if (y = t[s], S = a[s], t.hasOwnProperty(s) && y !== S && (y != null || S != null))
            switch (s) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(m(137, u));
                break;
              default:
                V(
                  l,
                  u,
                  s,
                  y,
                  t,
                  S
                );
            }
        return;
      default:
        if (pf(u)) {
          for (var k in a)
            y = a[k], a.hasOwnProperty(k) && y !== void 0 && !t.hasOwnProperty(k) && qc(
              l,
              u,
              k,
              void 0,
              t,
              y
            );
          for (b in t)
            y = t[b], S = a[b], !t.hasOwnProperty(b) || y === S || y === void 0 && S === void 0 || qc(
              l,
              u,
              b,
              y,
              t,
              S
            );
          return;
        }
    }
    for (var h in a)
      y = a[h], a.hasOwnProperty(h) && y != null && !t.hasOwnProperty(h) && V(l, u, h, null, t, y);
    for (z in t)
      y = t[z], S = a[z], !t.hasOwnProperty(z) || y === S || y == null && S == null || V(l, u, z, y, t, S);
  }
  var Rc = null, Bc = null;
  function Tf(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function nv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function cv(l, u) {
    if (l === 0)
      switch (u) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && u === "foreignObject" ? 0 : l;
  }
  function Nc(l, u) {
    return l === "textarea" || l === "noscript" || typeof u.children == "string" || typeof u.children == "number" || typeof u.children == "bigint" || typeof u.dangerouslySetInnerHTML == "object" && u.dangerouslySetInnerHTML !== null && u.dangerouslySetInnerHTML.__html != null;
  }
  var Yc = null;
  function Rh() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Yc ? !1 : (Yc = l, !0) : (Yc = null, !1);
  }
  var iv = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, vv = typeof Promise == "function" ? Promise : void 0, Nh = typeof queueMicrotask == "function" ? queueMicrotask : typeof vv < "u" ? function(l) {
    return vv.resolve(null).then(l).catch(Yh);
  } : iv;
  function Yh(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Gc(l, u) {
    var a = u, t = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$") {
          if (t === 0) {
            l.removeChild(e), Se(u);
            return;
          }
          t--;
        } else a !== "$" && a !== "$?" && a !== "$!" || t++;
      a = e;
    } while (a);
    Se(u);
  }
  function Xc(l) {
    var u = l.firstChild;
    for (u && u.nodeType === 10 && (u = u.nextSibling); u; ) {
      var a = u;
      switch (u = u.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(a), xf(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Gh(l, u, a, t) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== u.toLowerCase()) {
        if (!t && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (t) {
        if (!l[Dt])
          switch (u) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (f = l.getAttribute("rel"), f === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (f !== e.rel || l.getAttribute("href") !== (e.href == null ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (f = l.getAttribute("src"), (f !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && f && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (u === "input" && l.type === "hidden") {
        var f = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === f)
          return l;
      } else return l;
      if (l = au(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Xh(l, u, a) {
    if (u === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = au(l.nextSibling), l === null)) return null;
    return l;
  }
  function au(l) {
    for (; l != null; l = l.nextSibling) {
      var u = l.nodeType;
      if (u === 1 || u === 3) break;
      if (u === 8) {
        if (u = l.data, u === "$" || u === "$!" || u === "$?" || u === "F!" || u === "F")
          break;
        if (u === "/$") return null;
      }
    }
    return l;
  }
  function sv(l) {
    l = l.previousSibling;
    for (var u = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (u === 0) return l;
          u--;
        } else a === "/$" && u++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function hv(l, u, a) {
    switch (u = Tf(a), l) {
      case "html":
        if (l = u.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = u.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = u.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  var wl = /* @__PURE__ */ new Map(), dv = /* @__PURE__ */ new Set();
  function of(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.ownerDocument;
  }
  var Ru = G.d;
  G.d = {
    f: Qh,
    r: Zh,
    D: jh,
    C: Vh,
    L: Ch,
    m: xh,
    X: Lh,
    S: Kh,
    M: ph
  };
  function Qh() {
    var l = Ru.f(), u = mf();
    return l || u;
  }
  function Zh(l) {
    var u = Qa(l);
    u !== null && u.tag === 5 && u.type === "form" ? V0(u) : Ru.r(l);
  }
  var yt = typeof document > "u" ? null : document;
  function yv(l, u, a) {
    var t = yt;
    if (t && typeof u == "string" && u) {
      var e = Zl(u);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), dv.has(e) || (dv.add(e), l = { rel: l, crossOrigin: a, href: u }, t.querySelector(e) === null && (u = t.createElement("link"), Sl(u, "link", l), il(u), t.head.appendChild(u)));
    }
  }
  function jh(l) {
    Ru.D(l), yv("dns-prefetch", l, null);
  }
  function Vh(l, u) {
    Ru.C(l, u), yv("preconnect", l, u);
  }
  function Ch(l, u, a) {
    Ru.L(l, u, a);
    var t = yt;
    if (t && l && u) {
      var e = 'link[rel="preload"][as="' + Zl(u) + '"]';
      u === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + Zl(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + Zl(
        a.imageSizes
      ) + '"]')) : e += '[href="' + Zl(l) + '"]';
      var f = e;
      switch (u) {
        case "style":
          f = mt(l);
          break;
        case "script":
          f = St(l);
      }
      wl.has(f) || (l = Z(
        {
          rel: "preload",
          href: u === "image" && a && a.imageSrcSet ? void 0 : l,
          as: u
        },
        a
      ), wl.set(f, l), t.querySelector(e) !== null || u === "style" && t.querySelector(ie(f)) || u === "script" && t.querySelector(ve(f)) || (u = t.createElement("link"), Sl(u, "link", l), il(u), t.head.appendChild(u)));
    }
  }
  function xh(l, u) {
    Ru.m(l, u);
    var a = yt;
    if (a && l) {
      var t = u && typeof u.as == "string" ? u.as : "script", e = 'link[rel="modulepreload"][as="' + Zl(t) + '"][href="' + Zl(l) + '"]', f = e;
      switch (t) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = St(l);
      }
      if (!wl.has(f) && (l = Z({ rel: "modulepreload", href: l }, u), wl.set(f, l), a.querySelector(e) === null)) {
        switch (t) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ve(f)))
              return;
        }
        t = a.createElement("link"), Sl(t, "link", l), il(t), a.head.appendChild(t);
      }
    }
  }
  function Kh(l, u, a) {
    Ru.S(l, u, a);
    var t = yt;
    if (t && l) {
      var e = Za(t).hoistableStyles, f = mt(l);
      u = u || "default";
      var n = e.get(f);
      if (!n) {
        var c = { loading: 0, preload: null };
        if (n = t.querySelector(
          ie(f)
        ))
          c.loading = 5;
        else {
          l = Z(
            { rel: "stylesheet", href: l, "data-precedence": u },
            a
          ), (a = wl.get(f)) && Qc(l, a);
          var i = n = t.createElement("link");
          il(i), Sl(i, "link", l), i._p = new Promise(function(s, b) {
            i.onload = s, i.onerror = b;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Df(n, u, t);
        }
        n = {
          type: "stylesheet",
          instance: n,
          count: 1,
          state: c
        }, e.set(f, n);
      }
    }
  }
  function Lh(l, u) {
    Ru.X(l, u);
    var a = yt;
    if (a && l) {
      var t = Za(a).hoistableScripts, e = St(l), f = t.get(e);
      f || (f = a.querySelector(ve(e)), f || (l = Z({ src: l, async: !0 }, u), (u = wl.get(e)) && Zc(l, u), f = a.createElement("script"), il(f), Sl(f, "link", l), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, t.set(e, f));
    }
  }
  function ph(l, u) {
    Ru.M(l, u);
    var a = yt;
    if (a && l) {
      var t = Za(a).hoistableScripts, e = St(l), f = t.get(e);
      f || (f = a.querySelector(ve(e)), f || (l = Z({ src: l, async: !0, type: "module" }, u), (u = wl.get(e)) && Zc(l, u), f = a.createElement("script"), il(f), Sl(f, "link", l), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, t.set(e, f));
    }
  }
  function mv(l, u, a, t) {
    var e = (e = Bu.current) ? of(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (u = mt(a.href), a = Za(
          e
        ).hoistableStyles, t = a.get(u), t || (t = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(u, t)), t) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = mt(a.href);
          var f = Za(
            e
          ).hoistableStyles, n = f.get(l);
          if (n || (e = e.ownerDocument || e, n = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(l, n), (f = e.querySelector(
            ie(l)
          )) && !f._p && (n.instance = f, n.state.loading = 5), wl.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, wl.set(l, a), f || rh(
            e,
            l,
            a,
            n.state
          ))), u && t === null)
            throw Error(m(528, ""));
          return n;
        }
        if (u && t !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return u = a.async, a = a.src, typeof a == "string" && u && typeof u != "function" && typeof u != "symbol" ? (u = St(a), a = Za(
          e
        ).hoistableScripts, t = a.get(u), t || (t = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(u, t)), t) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function mt(l) {
    return 'href="' + Zl(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Sv(l) {
    return Z({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function rh(l, u, a, t) {
    l.querySelector('link[rel="preload"][as="style"][' + u + "]") ? t.loading = 1 : (u = l.createElement("link"), t.preload = u, u.addEventListener("load", function() {
      return t.loading |= 1;
    }), u.addEventListener("error", function() {
      return t.loading |= 2;
    }), Sl(u, "link", a), il(u), l.head.appendChild(u));
  }
  function St(l) {
    return '[src="' + Zl(l) + '"]';
  }
  function ve(l) {
    return "script[async]" + l;
  }
  function bv(l, u, a) {
    if (u.count++, u.instance === null)
      switch (u.type) {
        case "style":
          var t = l.querySelector(
            'style[data-href~="' + Zl(a.href) + '"]'
          );
          if (t)
            return u.instance = t, il(t), t;
          var e = Z({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return t = (l.ownerDocument || l).createElement(
            "style"
          ), il(t), Sl(t, "style", e), Df(t, a.precedence, l), u.instance = t;
        case "stylesheet":
          e = mt(a.href);
          var f = l.querySelector(
            ie(e)
          );
          if (f)
            return u.state.loading |= 4, u.instance = f, il(f), f;
          t = Sv(a), (e = wl.get(e)) && Qc(t, e), f = (l.ownerDocument || l).createElement("link"), il(f);
          var n = f;
          return n._p = new Promise(function(c, i) {
            n.onload = c, n.onerror = i;
          }), Sl(f, "link", t), u.state.loading |= 4, Df(f, a.precedence, l), u.instance = f;
        case "script":
          return f = St(a.src), (e = l.querySelector(
            ve(f)
          )) ? (u.instance = e, il(e), e) : (t = a, (e = wl.get(f)) && (t = Z({}, a), Zc(t, e)), l = l.ownerDocument || l, e = l.createElement("script"), il(e), Sl(e, "link", t), l.head.appendChild(e), u.instance = e);
        case "void":
          return null;
        default:
          throw Error(m(443, u.type));
      }
    else
      u.type === "stylesheet" && (u.state.loading & 4) === 0 && (t = u.instance, u.state.loading |= 4, Df(t, a.precedence, l));
    return u.instance;
  }
  function Df(l, u, a) {
    for (var t = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = t.length ? t[t.length - 1] : null, f = e, n = 0; n < t.length; n++) {
      var c = t[n];
      if (c.dataset.precedence === u) f = c;
      else if (f !== e) break;
    }
    f ? f.parentNode.insertBefore(l, f.nextSibling) : (u = a.nodeType === 9 ? a.head : a, u.insertBefore(l, u.firstChild));
  }
  function Qc(l, u) {
    l.crossOrigin == null && (l.crossOrigin = u.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = u.referrerPolicy), l.title == null && (l.title = u.title);
  }
  function Zc(l, u) {
    l.crossOrigin == null && (l.crossOrigin = u.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = u.referrerPolicy), l.integrity == null && (l.integrity = u.integrity);
  }
  var Mf = null;
  function gv(l, u, a) {
    if (Mf === null) {
      var t = /* @__PURE__ */ new Map(), e = Mf = /* @__PURE__ */ new Map();
      e.set(a, t);
    } else
      e = Mf, t = e.get(a), t || (t = /* @__PURE__ */ new Map(), e.set(a, t));
    if (t.has(l)) return t;
    for (t.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var f = a[e];
      if (!(f[Dt] || f[bl] || l === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var n = f.getAttribute(u) || "";
        n = l + n;
        var c = t.get(n);
        c ? c.push(f) : t.set(n, [f]);
      }
    }
    return t;
  }
  function zv(l, u, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      u === "title" ? l.querySelector("head > title") : null
    );
  }
  function Jh(l, u, a) {
    if (a === 1 || u.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof u.precedence != "string" || typeof u.href != "string" || u.href === "")
          break;
        return !0;
      case "link":
        if (typeof u.rel != "string" || typeof u.href != "string" || u.href === "" || u.onLoad || u.onError)
          break;
        switch (u.rel) {
          case "stylesheet":
            return l = u.disabled, typeof u.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (u.async && typeof u.async != "function" && typeof u.async != "symbol" && !u.onLoad && !u.onError && u.src && typeof u.src == "string")
          return !0;
    }
    return !1;
  }
  function Av(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var se = null;
  function wh() {
  }
  function Wh(l, u, a) {
    if (se === null) throw Error(m(475));
    var t = se;
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = mt(a.href), f = l.querySelector(
          ie(e)
        );
        if (f) {
          l = f._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Of.bind(t), l.then(t, t)), u.state.loading |= 4, u.instance = f, il(f);
          return;
        }
        f = l.ownerDocument || l, a = Sv(a), (e = wl.get(e)) && Qc(a, e), f = f.createElement("link"), il(f);
        var n = f;
        n._p = new Promise(function(c, i) {
          n.onload = c, n.onerror = i;
        }), Sl(f, "link", a), u.instance = f;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(u, l), (l = u.state.preload) && (u.state.loading & 3) === 0 && (t.count++, u = Of.bind(t), l.addEventListener("load", u), l.addEventListener("error", u));
    }
  }
  function $h() {
    if (se === null) throw Error(m(475));
    var l = se;
    return l.stylesheets && l.count === 0 && jc(l, l.stylesheets), 0 < l.count ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && jc(l, l.stylesheets), l.unsuspend) {
          var t = l.unsuspend;
          l.unsuspend = null, t();
        }
      }, 6e4);
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Of() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) jc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Uf = null;
  function jc(l, u) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Uf = /* @__PURE__ */ new Map(), u.forEach(kh, l), Uf = null, Of.call(l));
  }
  function kh(l, u) {
    if (!(u.state.loading & 4)) {
      var a = Uf.get(l);
      if (a) var t = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Uf.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < e.length; f++) {
          var n = e[f];
          (n.nodeName === "LINK" || n.getAttribute("media") !== "not all") && (a.set(n.dataset.precedence, n), t = n);
        }
        t && a.set(null, t);
      }
      e = u.instance, n = e.getAttribute("data-precedence"), f = a.get(n) || t, f === t && a.set(null, e), a.set(n, e), this.count++, t = Of.bind(this), e.addEventListener("load", t), e.addEventListener("error", t), f ? f.parentNode.insertBefore(e, f.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), u.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: ol,
    Provider: null,
    Consumer: null,
    _currentValue: Xl,
    _currentValue2: Xl,
    _threadCount: 0
  };
  function Fh(l, u, a, t, e, f, n, c) {
    this.tag = 1, this.containerInfo = l, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vf(0), this.hiddenUpdates = Vf(null), this.identifierPrefix = t, this.onUncaughtError = e, this.onCaughtError = f, this.onRecoverableError = n, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ev(l, u, a, t, e, f, n, c, i, s, b, z) {
    return l = new Fh(
      l,
      u,
      a,
      n,
      c,
      i,
      s,
      z
    ), u = 1, f === !0 && (u |= 24), f = rl(3, null, null, u), l.current = f, f.stateNode = l, u = bn(), u.refCount++, l.pooledCache = u, u.refCount++, f.memoizedState = {
      element: t,
      isDehydrated: a,
      cache: u
    }, kn(f), l;
  }
  function Tv(l) {
    return l ? (l = wa, l) : wa;
  }
  function ov(l, u, a, t, e, f) {
    e = Tv(e), t.context === null ? t.context = e : t.pendingContext = e, t = Ku(u), t.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (t.callback = f), a = Lu(l, t, u), a !== null && (El(a, l, u), Wt(a, l, u));
  }
  function Dv(l, u) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < u ? a : u;
    }
  }
  function Vc(l, u) {
    Dv(l, u), (l = l.alternate) && Dv(l, u);
  }
  function Mv(l) {
    if (l.tag === 13) {
      var u = Xu(l, 67108864);
      u !== null && El(u, l, 67108864), Vc(l, 67108864);
    }
  }
  var Hf = !0;
  function Ph(l, u, a, t) {
    var e = O.T;
    O.T = null;
    var f = G.p;
    try {
      G.p = 2, Cc(l, u, a, t);
    } finally {
      G.p = f, O.T = e;
    }
  }
  function Ih(l, u, a, t) {
    var e = O.T;
    O.T = null;
    var f = G.p;
    try {
      G.p = 8, Cc(l, u, a, t);
    } finally {
      G.p = f, O.T = e;
    }
  }
  function Cc(l, u, a, t) {
    if (Hf) {
      var e = xc(t);
      if (e === null)
        _c(
          l,
          u,
          t,
          _f,
          a
        ), Uv(l, t);
      else if (ud(
        e,
        l,
        u,
        a,
        t
      ))
        t.stopPropagation();
      else if (Uv(l, t), u & 4 && -1 < ld.indexOf(l)) {
        for (; e !== null; ) {
          var f = Qa(e);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var n = ca(f.pendingLanes);
                  if (n !== 0) {
                    var c = f;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; n; ) {
                      var i = 1 << 31 - _l(n);
                      c.entanglements[1] |= i, n &= ~i;
                    }
                    su(f), (w & 6) === 0 && (hf = fu() + 500, fe(0));
                  }
                }
                break;
              case 13:
                c = Xu(f, 2), c !== null && El(c, f, 2), mf(), Vc(f, 2);
            }
          if (f = xc(t), f === null && _c(
            l,
            u,
            t,
            _f,
            a
          ), f === e) break;
          e = f;
        }
        e !== null && t.stopPropagation();
      } else
        _c(
          l,
          u,
          t,
          null,
          a
        );
    }
  }
  function xc(l) {
    return l = Jf(l), Kc(l);
  }
  var _f = null;
  function Kc(l) {
    if (_f = null, l = ia(l), l !== null) {
      var u = U(l);
      if (u === null) l = null;
      else {
        var a = u.tag;
        if (a === 13) {
          if (l = p(u), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (u.stateNode.current.memoizedState.isDehydrated)
            return u.tag === 3 ? u.stateNode.containerInfo : null;
          l = null;
        } else u !== l && (l = null);
      }
    }
    return _f = l, null;
  }
  function Ov(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Vv()) {
          case $c:
            return 2;
          case kc:
            return 8;
          case oe:
          case Cv:
            return 32;
          case Fc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lc = !1, ku = null, Fu = null, Pu = null, de = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), Iu = [], ld = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Uv(l, u) {
    switch (l) {
      case "focusin":
      case "focusout":
        ku = null;
        break;
      case "dragenter":
      case "dragleave":
        Fu = null;
        break;
      case "mouseover":
      case "mouseout":
        Pu = null;
        break;
      case "pointerover":
      case "pointerout":
        de.delete(u.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ye.delete(u.pointerId);
    }
  }
  function me(l, u, a, t, e, f) {
    return l === null || l.nativeEvent !== f ? (l = {
      blockedOn: u,
      domEventName: a,
      eventSystemFlags: t,
      nativeEvent: f,
      targetContainers: [e]
    }, u !== null && (u = Qa(u), u !== null && Mv(u)), l) : (l.eventSystemFlags |= t, u = l.targetContainers, e !== null && u.indexOf(e) === -1 && u.push(e), l);
  }
  function ud(l, u, a, t, e) {
    switch (u) {
      case "focusin":
        return ku = me(
          ku,
          l,
          u,
          a,
          t,
          e
        ), !0;
      case "dragenter":
        return Fu = me(
          Fu,
          l,
          u,
          a,
          t,
          e
        ), !0;
      case "mouseover":
        return Pu = me(
          Pu,
          l,
          u,
          a,
          t,
          e
        ), !0;
      case "pointerover":
        var f = e.pointerId;
        return de.set(
          f,
          me(
            de.get(f) || null,
            l,
            u,
            a,
            t,
            e
          )
        ), !0;
      case "gotpointercapture":
        return f = e.pointerId, ye.set(
          f,
          me(
            ye.get(f) || null,
            l,
            u,
            a,
            t,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Hv(l) {
    var u = ia(l.target);
    if (u !== null) {
      var a = U(u);
      if (a !== null) {
        if (u = a.tag, u === 13) {
          if (u = p(a), u !== null) {
            l.blockedOn = u, $v(l.priority, function() {
              if (a.tag === 13) {
                var t = Yl(), e = Xu(a, t);
                e !== null && El(e, a, t), Vc(a, t);
              }
            });
            return;
          }
        } else if (u === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qf(l) {
    if (l.blockedOn !== null) return !1;
    for (var u = l.targetContainers; 0 < u.length; ) {
      var a = xc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var t = new a.constructor(
          a.type,
          a
        );
        rf = t, a.target.dispatchEvent(t), rf = null;
      } else
        return u = Qa(a), u !== null && Mv(u), l.blockedOn = a, !1;
      u.shift();
    }
    return !0;
  }
  function _v(l, u, a) {
    qf(l) && a.delete(u);
  }
  function ad() {
    Lc = !1, ku !== null && qf(ku) && (ku = null), Fu !== null && qf(Fu) && (Fu = null), Pu !== null && qf(Pu) && (Pu = null), de.forEach(_v), ye.forEach(_v);
  }
  function Rf(l, u) {
    l.blockedOn === u && (l.blockedOn = null, Lc || (Lc = !0, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      ad
    )));
  }
  var Bf = null;
  function qv(l) {
    Bf !== l && (Bf = l, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      function() {
        Bf === l && (Bf = null);
        for (var u = 0; u < l.length; u += 3) {
          var a = l[u], t = l[u + 1], e = l[u + 2];
          if (typeof t != "function") {
            if (Kc(t || a) === null)
              continue;
            break;
          }
          var f = Qa(a);
          f !== null && (l.splice(u, 3), u -= 3, Nn(
            f,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: t
            },
            t,
            e
          ));
        }
      }
    ));
  }
  function Se(l) {
    function u(i) {
      return Rf(i, l);
    }
    ku !== null && Rf(ku, l), Fu !== null && Rf(Fu, l), Pu !== null && Rf(Pu, l), de.forEach(u), ye.forEach(u);
    for (var a = 0; a < Iu.length; a++) {
      var t = Iu[a];
      t.blockedOn === l && (t.blockedOn = null);
    }
    for (; 0 < Iu.length && (a = Iu[0], a.blockedOn === null); )
      Hv(a), a.blockedOn === null && Iu.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (t = 0; t < a.length; t += 3) {
        var e = a[t], f = a[t + 1], n = e[Dl] || null;
        if (typeof f == "function")
          n || qv(a);
        else if (n) {
          var c = null;
          if (f && f.hasAttribute("formAction")) {
            if (e = f, n = f[Dl] || null)
              c = n.formAction;
            else if (Kc(e) !== null) continue;
          } else c = n.action;
          typeof c == "function" ? a[t + 1] = c : (a.splice(t, 3), t -= 3), qv(a);
        }
      }
  }
  function pc(l) {
    this._internalRoot = l;
  }
  Nf.prototype.render = pc.prototype.render = function(l) {
    var u = this._internalRoot;
    if (u === null) throw Error(m(409));
    var a = u.current, t = Yl();
    ov(a, t, l, u, null, null);
  }, Nf.prototype.unmount = pc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var u = l.containerInfo;
      l.tag === 0 && st(), ov(l.current, 2, null, l, null, null), mf(), u[Xa] = null;
    }
  };
  function Nf(l) {
    this._internalRoot = l;
  }
  Nf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var u = ti();
      l = { blockedOn: null, target: l, priority: u };
      for (var a = 0; a < Iu.length && u !== 0 && u < Iu[a].priority; a++) ;
      Iu.splice(a, 0, l), a === 0 && Hv(l);
    }
  };
  var Rv = tl.version;
  if (Rv !== "19.0.0")
    throw Error(
      m(
        527,
        Rv,
        "19.0.0"
      )
    );
  G.findDOMNode = function(l) {
    var u = l._reactInternals;
    if (u === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = Na(u), l = l !== null ? na(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var td = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    findFiberByHostInstance: ia,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yf.isDisabled && Yf.supportsFiber)
      try {
        Et = Yf.inject(
          td
        ), Hl = Yf;
      } catch {
      }
  }
  return ge.createRoot = function(l, u) {
    if (!I(l)) throw Error(m(299));
    var a = !1, t = "", e = w0, f = W0, n = $0, c = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (t = u.identifierPrefix), u.onUncaughtError !== void 0 && (e = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (n = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (c = u.unstable_transitionCallbacks)), u = Ev(
      l,
      1,
      !1,
      null,
      null,
      a,
      t,
      e,
      f,
      n,
      c,
      null
    ), l[Xa] = u.current, Hc(
      l.nodeType === 8 ? l.parentNode : l
    ), new pc(u);
  }, ge.hydrateRoot = function(l, u, a) {
    if (!I(l)) throw Error(m(299));
    var t = !1, e = "", f = w0, n = W0, c = $0, i = null, s = null;
    return a != null && (a.unstable_strictMode === !0 && (t = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (n = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (i = a.unstable_transitionCallbacks), a.formState !== void 0 && (s = a.formState)), u = Ev(
      l,
      1,
      !0,
      u,
      a ?? null,
      t,
      e,
      f,
      n,
      c,
      i,
      s
    ), u.context = Tv(null), a = u.current, t = Yl(), e = Ku(t), e.callback = null, Lu(a, e, t), u.current.lanes = t, ot(u, t), su(u), l[Xa] = u.current, Hc(l), new Nf(u);
  }, ge.version = "19.0.0", ge;
}
var Qv;
function yd() {
  if (Qv) return Jc.exports;
  Qv = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (tl) {
        console.error(tl);
      }
  }
  return E(), Jc.exports = dd(), Jc.exports;
}
var md = yd();
const Sd = /* @__PURE__ */ cd(md), bd = ({ label: E, className: tl, id: L, ...m }) => /* @__PURE__ */ Wl.jsx("button", { className: tl, id: L, ...m, children: E });
class gd extends HTMLElement {
  connectedCallback() {
    const tl = this.getAttribute("label") || "Submit", L = this.getAttribute("class") || "btn-success", m = this.getAttribute("id") || "", I = {};
    for (const zl of this.getAttributeNames())
      if (zl.startsWith("on")) {
        const Ul = zl.slice(2).toLowerCase();
        I[Ul] = new Function("event", this.getAttribute(zl));
      }
    Sd.createRoot(this).render(/* @__PURE__ */ Wl.jsx(bd, { label: tl, className: L, id: m, ...I }));
  }
}
customElements.define("bsdk-button", gd);
const Ed = ({ placeholder: E = "", className: tl = "input-field", id: L = "", ...m }) => /* @__PURE__ */ Wl.jsxs("div", { className: tl, children: [
  /* @__PURE__ */ Wl.jsx(
    "input",
    {
      placeholder: E,
      id: L,
      ...m,
      type: "text"
    }
  ),
  /* @__PURE__ */ Wl.jsx("label", { children: E })
] }), Td = ({ image: E, title: tl = "", description: L = "", children: m }) => /* @__PURE__ */ Wl.jsxs("div", { className: "card", children: [
  E && /* @__PURE__ */ Wl.jsx("figure", { children: /* @__PURE__ */ Wl.jsx("img", { src: E, alt: tl }) }),
  /* @__PURE__ */ Wl.jsxs("div", { className: "content", children: [
    /* @__PURE__ */ Wl.jsx("h2", { children: tl }),
    /* @__PURE__ */ Wl.jsx("p", { children: L })
  ] }),
  /* @__PURE__ */ Wl.jsx("div", { className: "actions", children: m })
] });
export {
  bd as bsdkButton,
  Td as bsdkCard,
  Ed as bsdkTextbox
};
