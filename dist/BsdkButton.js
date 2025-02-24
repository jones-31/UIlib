import sg from "react";
import db from "react-dom";
function yS(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var Vv = { exports: {} }, $m = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ab;
function mS() {
  if (ab) return $m;
  ab = 1;
  var j = Symbol.for("react.transitional.element"), yt = Symbol.for("react.fragment");
  function $e(B, We, Yt) {
    var St = null;
    if (Yt !== void 0 && (St = "" + Yt), We.key !== void 0 && (St = "" + We.key), "key" in We) {
      Yt = {};
      for (var Xe in We)
        Xe !== "key" && (Yt[Xe] = We[Xe]);
    } else Yt = We;
    return We = Yt.ref, {
      $$typeof: j,
      type: B,
      key: St,
      ref: We !== void 0 ? We : null,
      props: Yt
    };
  }
  return $m.Fragment = yt, $m.jsx = $e, $m.jsxs = $e, $m;
}
var Wm = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nb;
function vS() {
  return nb || (nb = 1, process.env.NODE_ENV !== "production" && function() {
    function j(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === w ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case Wt:
          return "Fragment";
        case zl:
          return "Portal";
        case sl:
          return "Profiler";
        case Sn:
          return "StrictMode";
        case jl:
          return "Suspense";
        case rl:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case Te:
            return (T.displayName || "Context") + ".Provider";
          case ae:
            return (T._context.displayName || "Context") + ".Consumer";
          case Ft:
            var F = T.render;
            return T = T.displayName, T || (T = F.displayName || F.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case k:
            return F = T.displayName || null, F !== null ? F : j(T.type) || "Memo";
          case It:
            F = T._payload, T = T._init;
            try {
              return j(T(F));
            } catch {
            }
        }
      return null;
    }
    function yt(T) {
      return "" + T;
    }
    function $e(T) {
      try {
        yt(T);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var I = F.error, se = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return I.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          se
        ), yt(T);
      }
    }
    function B() {
    }
    function We() {
      if (ce === 0) {
        lt = console.log, Ba = console.info, ka = console.warn, Dl = console.error, ft = console.group, Ve = console.groupCollapsed, dl = console.groupEnd;
        var T = {
          configurable: !0,
          enumerable: !0,
          value: B,
          writable: !0
        };
        Object.defineProperties(console, {
          info: T,
          log: T,
          warn: T,
          error: T,
          group: T,
          groupCollapsed: T,
          groupEnd: T
        });
      }
      ce++;
    }
    function Yt() {
      if (ce--, ce === 0) {
        var T = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Re({}, T, { value: lt }),
          info: Re({}, T, { value: Ba }),
          warn: Re({}, T, { value: ka }),
          error: Re({}, T, { value: Dl }),
          group: Re({}, T, { value: ft }),
          groupCollapsed: Re({}, T, { value: Ve }),
          groupEnd: Re({}, T, { value: dl })
        });
      }
      0 > ce && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function St(T) {
      if (He === void 0)
        try {
          throw Error();
        } catch (I) {
          var F = I.stack.trim().match(/\n( *(at )?)/);
          He = F && F[1] || "", oa = -1 < I.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < I.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + He + T + oa;
    }
    function Xe(T, F) {
      if (!T || $a) return "";
      var I = Pu.get(T);
      if (I !== void 0) return I;
      $a = !0, I = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var se = null;
      se = ne.H, ne.H = null, We();
      try {
        var Pt = {
          DetermineComponentFrameRoot: function() {
            try {
              if (F) {
                var Ol = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ol.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ol, []);
                  } catch (Wa) {
                    var Tt = Wa;
                  }
                  Reflect.construct(T, [], Ol);
                } else {
                  try {
                    Ol.call();
                  } catch (Wa) {
                    Tt = Wa;
                  }
                  T.call(Ol.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Wa) {
                  Tt = Wa;
                }
                (Ol = T()) && typeof Ol.catch == "function" && Ol.catch(function() {
                });
              }
            } catch (Wa) {
              if (Wa && Tt && typeof Wa.stack == "string")
                return [Wa.stack, Tt.stack];
            }
            return [null, null];
          }
        };
        Pt.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var Fe = Object.getOwnPropertyDescriptor(
          Pt.DetermineComponentFrameRoot,
          "name"
        );
        Fe && Fe.configurable && Object.defineProperty(
          Pt.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var fe = Pt.DetermineComponentFrameRoot(), hl = fe[0], qa = fe[1];
        if (hl && qa) {
          var el = hl.split(`
`), En = qa.split(`
`);
          for (fe = Fe = 0; Fe < el.length && !el[Fe].includes(
            "DetermineComponentFrameRoot"
          ); )
            Fe++;
          for (; fe < En.length && !En[fe].includes(
            "DetermineComponentFrameRoot"
          ); )
            fe++;
          if (Fe === el.length || fe === En.length)
            for (Fe = el.length - 1, fe = En.length - 1; 1 <= Fe && 0 <= fe && el[Fe] !== En[fe]; )
              fe--;
          for (; 1 <= Fe && 0 <= fe; Fe--, fe--)
            if (el[Fe] !== En[fe]) {
              if (Fe !== 1 || fe !== 1)
                do
                  if (Fe--, fe--, 0 > fe || el[Fe] !== En[fe]) {
                    var ti = `
` + el[Fe].replace(
                      " at new ",
                      " at "
                    );
                    return T.displayName && ti.includes("<anonymous>") && (ti = ti.replace("<anonymous>", T.displayName)), typeof T == "function" && Pu.set(T, ti), ti;
                  }
                while (1 <= Fe && 0 <= fe);
              break;
            }
        }
      } finally {
        $a = !1, ne.H = se, Yt(), Error.prepareStackTrace = I;
      }
      return el = (el = T ? T.displayName || T.name : "") ? St(el) : "", typeof T == "function" && Pu.set(T, el), el;
    }
    function L(T) {
      if (T == null) return "";
      if (typeof T == "function") {
        var F = T.prototype;
        return Xe(
          T,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof T == "string") return St(T);
      switch (T) {
        case jl:
          return St("Suspense");
        case rl:
          return St("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case Ft:
            return T = Xe(T.render, !1), T;
          case k:
            return L(T.type);
          case It:
            F = T._payload, T = T._init;
            try {
              return L(T(F));
            } catch {
            }
        }
      return "";
    }
    function Dt() {
      var T = ne.A;
      return T === null ? null : T.getOwner();
    }
    function Ja(T) {
      if (ue.call(T, "key")) {
        var F = Object.getOwnPropertyDescriptor(T, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function Nt(T, F) {
      function I() {
        _e || (_e = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: I,
        configurable: !0
      });
    }
    function Ge() {
      var T = j(this.type);
      return ki[T] || (ki[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function $t(T, F, I, se, Pt, Fe) {
      return I = Fe.ref, T = {
        $$typeof: le,
        type: T,
        key: F,
        props: Fe,
        _owner: Pt
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: Ge
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function tt(T, F, I, se, Pt, Fe) {
      if (typeof T == "string" || typeof T == "function" || T === Wt || T === sl || T === Sn || T === jl || T === rl || T === C || typeof T == "object" && T !== null && (T.$$typeof === It || T.$$typeof === k || T.$$typeof === Te || T.$$typeof === ae || T.$$typeof === Ft || T.$$typeof === Ee || T.getModuleId !== void 0)) {
        var fe = F.children;
        if (fe !== void 0)
          if (se)
            if (mt(fe)) {
              for (se = 0; se < fe.length; se++)
                Ot(fe[se], T);
              Object.freeze && Object.freeze(fe);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else Ot(fe, T);
      } else
        fe = "", (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), T === null ? se = "null" : mt(T) ? se = "array" : T !== void 0 && T.$$typeof === le ? (se = "<" + (j(T.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : se = typeof T, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          se,
          fe
        );
      if (ue.call(F, "key")) {
        fe = j(T);
        var hl = Object.keys(F).filter(function(el) {
          return el !== "key";
        });
        se = 0 < hl.length ? "{key: someKey, " + hl.join(": ..., ") + ": ...}" : "{key: someKey}", $i[fe + se] || (hl = 0 < hl.length ? "{" + hl.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          se,
          fe,
          hl,
          fe
        ), $i[fe + se] = !0);
      }
      if (fe = null, I !== void 0 && ($e(I), fe = "" + I), Ja(F) && ($e(F.key), fe = "" + F.key), "key" in F) {
        I = {};
        for (var qa in F)
          qa !== "key" && (I[qa] = F[qa]);
      } else I = F;
      return fe && Nt(
        I,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), $t(T, fe, Fe, Pt, Dt(), I);
    }
    function Ot(T, F) {
      if (typeof T == "object" && T && T.$$typeof !== ei) {
        if (mt(T))
          for (var I = 0; I < T.length; I++) {
            var se = T[I];
            Wl(se) && Ze(se, F);
          }
        else if (Wl(T))
          T._store && (T._store.validated = 1);
        else if (T === null || typeof T != "object" ? I = null : (I = Z && T[Z] || T["@@iterator"], I = typeof I == "function" ? I : null), typeof I == "function" && I !== T.entries && (I = I.call(T), I !== T))
          for (; !(T = I.next()).done; )
            Wl(T.value) && Ze(T.value, F);
      }
    }
    function Wl(T) {
      return typeof T == "object" && T !== null && T.$$typeof === le;
    }
    function Ze(T, F) {
      if (T._store && !T._store.validated && T.key == null && (T._store.validated = 1, F = oe(F), !Tn[F])) {
        Tn[F] = !0;
        var I = "";
        T && T._owner != null && T._owner !== Dt() && (I = null, typeof T._owner.tag == "number" ? I = j(T._owner.type) : typeof T._owner.name == "string" && (I = T._owner.name), I = " It was passed a child from " + I + ".");
        var se = ne.getCurrentStack;
        ne.getCurrentStack = function() {
          var Pt = L(T.type);
          return se && (Pt += se() || ""), Pt;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          I
        ), ne.getCurrentStack = se;
      }
    }
    function oe(T) {
      var F = "", I = Dt();
      return I && (I = j(I.type)) && (F = `

Check the render method of \`` + I + "`."), F || (T = j(T)) && (F = `

Check the top-level render call using <` + T + ">."), F;
    }
    var _l = sg, le = Symbol.for("react.transitional.element"), zl = Symbol.for("react.portal"), Wt = Symbol.for("react.fragment"), Sn = Symbol.for("react.strict_mode"), sl = Symbol.for("react.profiler"), ae = Symbol.for("react.consumer"), Te = Symbol.for("react.context"), Ft = Symbol.for("react.forward_ref"), jl = Symbol.for("react.suspense"), rl = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), It = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), Z = Symbol.iterator, w = Symbol.for("react.client.reference"), ne = _l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = Object.prototype.hasOwnProperty, Re = Object.assign, Ee = Symbol.for("react.client.reference"), mt = Array.isArray, ce = 0, lt, Ba, ka, Dl, ft, Ve, dl;
    B.__reactDisabledLog = !0;
    var He, oa, $a = !1, Pu = new (typeof WeakMap == "function" ? WeakMap : Map)(), ei = Symbol.for("react.client.reference"), _e, ki = {}, $i = {}, Tn = {};
    Wm.Fragment = Wt, Wm.jsx = function(T, F, I, se, Pt) {
      return tt(T, F, I, !1, se, Pt);
    }, Wm.jsxs = function(T, F, I, se, Pt) {
      return tt(T, F, I, !0, se, Pt);
    };
  }()), Wm;
}
var ub;
function pS() {
  return ub || (ub = 1, process.env.NODE_ENV === "production" ? Vv.exports = mS() : Vv.exports = vS()), Vv.exports;
}
var hb = pS(), Xv = { exports: {} }, Fm = {}, _v = { exports: {} }, fg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib;
function gS() {
  return ib || (ib = 1, function(j) {
    function yt(C, Z) {
      var w = C.length;
      C.push(Z);
      e: for (; 0 < w; ) {
        var ne = w - 1 >>> 1, ue = C[ne];
        if (0 < We(ue, Z))
          C[ne] = Z, C[w] = ue, w = ne;
        else break e;
      }
    }
    function $e(C) {
      return C.length === 0 ? null : C[0];
    }
    function B(C) {
      if (C.length === 0) return null;
      var Z = C[0], w = C.pop();
      if (w !== Z) {
        C[0] = w;
        e: for (var ne = 0, ue = C.length, Re = ue >>> 1; ne < Re; ) {
          var Ee = 2 * (ne + 1) - 1, mt = C[Ee], ce = Ee + 1, lt = C[ce];
          if (0 > We(mt, w))
            ce < ue && 0 > We(lt, mt) ? (C[ne] = lt, C[ce] = w, ne = ce) : (C[ne] = mt, C[Ee] = w, ne = Ee);
          else if (ce < ue && 0 > We(lt, w))
            C[ne] = lt, C[ce] = w, ne = ce;
          else break e;
        }
      }
      return Z;
    }
    function We(C, Z) {
      var w = C.sortIndex - Z.sortIndex;
      return w !== 0 ? w : C.id - Z.id;
    }
    if (j.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Yt = performance;
      j.unstable_now = function() {
        return Yt.now();
      };
    } else {
      var St = Date, Xe = St.now();
      j.unstable_now = function() {
        return St.now() - Xe;
      };
    }
    var L = [], Dt = [], Ja = 1, Nt = null, Ge = 3, $t = !1, tt = !1, Ot = !1, Wl = typeof setTimeout == "function" ? setTimeout : null, Ze = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    function _l(C) {
      for (var Z = $e(Dt); Z !== null; ) {
        if (Z.callback === null) B(Dt);
        else if (Z.startTime <= C)
          B(Dt), Z.sortIndex = Z.expirationTime, yt(L, Z);
        else break;
        Z = $e(Dt);
      }
    }
    function le(C) {
      if (Ot = !1, _l(C), !tt)
        if ($e(L) !== null)
          tt = !0, k();
        else {
          var Z = $e(Dt);
          Z !== null && It(le, Z.startTime - C);
        }
    }
    var zl = !1, Wt = -1, Sn = 5, sl = -1;
    function ae() {
      return !(j.unstable_now() - sl < Sn);
    }
    function Te() {
      if (zl) {
        var C = j.unstable_now();
        sl = C;
        var Z = !0;
        try {
          e: {
            tt = !1, Ot && (Ot = !1, Ze(Wt), Wt = -1), $t = !0;
            var w = Ge;
            try {
              t: {
                for (_l(C), Nt = $e(L); Nt !== null && !(Nt.expirationTime > C && ae()); ) {
                  var ne = Nt.callback;
                  if (typeof ne == "function") {
                    Nt.callback = null, Ge = Nt.priorityLevel;
                    var ue = ne(
                      Nt.expirationTime <= C
                    );
                    if (C = j.unstable_now(), typeof ue == "function") {
                      Nt.callback = ue, _l(C), Z = !0;
                      break t;
                    }
                    Nt === $e(L) && B(L), _l(C);
                  } else B(L);
                  Nt = $e(L);
                }
                if (Nt !== null) Z = !0;
                else {
                  var Re = $e(Dt);
                  Re !== null && It(
                    le,
                    Re.startTime - C
                  ), Z = !1;
                }
              }
              break e;
            } finally {
              Nt = null, Ge = w, $t = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? Ft() : zl = !1;
        }
      }
    }
    var Ft;
    if (typeof oe == "function")
      Ft = function() {
        oe(Te);
      };
    else if (typeof MessageChannel < "u") {
      var jl = new MessageChannel(), rl = jl.port2;
      jl.port1.onmessage = Te, Ft = function() {
        rl.postMessage(null);
      };
    } else
      Ft = function() {
        Wl(Te, 0);
      };
    function k() {
      zl || (zl = !0, Ft());
    }
    function It(C, Z) {
      Wt = Wl(function() {
        C(j.unstable_now());
      }, Z);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, j.unstable_continueExecution = function() {
      tt || $t || (tt = !0, k());
    }, j.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Sn = 0 < C ? Math.floor(1e3 / C) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return Ge;
    }, j.unstable_getFirstCallbackNode = function() {
      return $e(L);
    }, j.unstable_next = function(C) {
      switch (Ge) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = Ge;
      }
      var w = Ge;
      Ge = Z;
      try {
        return C();
      } finally {
        Ge = w;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function(C, Z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var w = Ge;
      Ge = C;
      try {
        return Z();
      } finally {
        Ge = w;
      }
    }, j.unstable_scheduleCallback = function(C, Z, w) {
      var ne = j.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ne + w : ne) : w = ne, C) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return ue = w + ue, C = {
        id: Ja++,
        callback: Z,
        priorityLevel: C,
        startTime: w,
        expirationTime: ue,
        sortIndex: -1
      }, w > ne ? (C.sortIndex = w, yt(Dt, C), $e(L) === null && C === $e(Dt) && (Ot ? (Ze(Wt), Wt = -1) : Ot = !0, It(le, w - ne))) : (C.sortIndex = ue, yt(L, C), tt || $t || (tt = !0, k())), C;
    }, j.unstable_shouldYield = ae, j.unstable_wrapCallback = function(C) {
      var Z = Ge;
      return function() {
        var w = Ge;
        Ge = Z;
        try {
          return C.apply(this, arguments);
        } finally {
          Ge = w;
        }
      };
    };
  }(fg)), fg;
}
var og = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cb;
function bS() {
  return cb || (cb = 1, function(j) {
    process.env.NODE_ENV !== "production" && function() {
      function yt() {
        if (ae) {
          var C = j.unstable_now();
          jl = C;
          var Z = !0;
          try {
            e: {
              le = !1, zl && (zl = !1, Sn(Te), Te = -1), _l = !0;
              var w = oe;
              try {
                t: {
                  for (St(C), Ze = B(tt); Ze !== null && !(Ze.expirationTime > C && L()); ) {
                    var ne = Ze.callback;
                    if (typeof ne == "function") {
                      Ze.callback = null, oe = Ze.priorityLevel;
                      var ue = ne(
                        Ze.expirationTime <= C
                      );
                      if (C = j.unstable_now(), typeof ue == "function") {
                        Ze.callback = ue, St(C), Z = !0;
                        break t;
                      }
                      Ze === B(tt) && We(tt), St(C);
                    } else We(tt);
                    Ze = B(tt);
                  }
                  if (Ze !== null) Z = !0;
                  else {
                    var Re = B(Ot);
                    Re !== null && Ja(
                      Xe,
                      Re.startTime - C
                    ), Z = !1;
                  }
                }
                break e;
              } finally {
                Ze = null, oe = w, _l = !1;
              }
              Z = void 0;
            }
          } finally {
            Z ? rl() : ae = !1;
          }
        }
      }
      function $e(C, Z) {
        var w = C.length;
        C.push(Z);
        e: for (; 0 < w; ) {
          var ne = w - 1 >>> 1, ue = C[ne];
          if (0 < Yt(ue, Z))
            C[ne] = Z, C[w] = ue, w = ne;
          else break e;
        }
      }
      function B(C) {
        return C.length === 0 ? null : C[0];
      }
      function We(C) {
        if (C.length === 0) return null;
        var Z = C[0], w = C.pop();
        if (w !== Z) {
          C[0] = w;
          e: for (var ne = 0, ue = C.length, Re = ue >>> 1; ne < Re; ) {
            var Ee = 2 * (ne + 1) - 1, mt = C[Ee], ce = Ee + 1, lt = C[ce];
            if (0 > Yt(mt, w))
              ce < ue && 0 > Yt(lt, mt) ? (C[ne] = lt, C[ce] = w, ne = ce) : (C[ne] = mt, C[Ee] = w, ne = Ee);
            else if (ce < ue && 0 > Yt(lt, w))
              C[ne] = lt, C[ce] = w, ne = ce;
            else break e;
          }
        }
        return Z;
      }
      function Yt(C, Z) {
        var w = C.sortIndex - Z.sortIndex;
        return w !== 0 ? w : C.id - Z.id;
      }
      function St(C) {
        for (var Z = B(Ot); Z !== null; ) {
          if (Z.callback === null) We(Ot);
          else if (Z.startTime <= C)
            We(Ot), Z.sortIndex = Z.expirationTime, $e(tt, Z);
          else break;
          Z = B(Ot);
        }
      }
      function Xe(C) {
        if (zl = !1, St(C), !le)
          if (B(tt) !== null)
            le = !0, Dt();
          else {
            var Z = B(Ot);
            Z !== null && Ja(
              Xe,
              Z.startTime - C
            );
          }
      }
      function L() {
        return !(j.unstable_now() - jl < Ft);
      }
      function Dt() {
        ae || (ae = !0, rl());
      }
      function Ja(C, Z) {
        Te = Wt(function() {
          C(j.unstable_now());
        }, Z);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), j.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Nt = performance;
        j.unstable_now = function() {
          return Nt.now();
        };
      } else {
        var Ge = Date, $t = Ge.now();
        j.unstable_now = function() {
          return Ge.now() - $t;
        };
      }
      var tt = [], Ot = [], Wl = 1, Ze = null, oe = 3, _l = !1, le = !1, zl = !1, Wt = typeof setTimeout == "function" ? setTimeout : null, Sn = typeof clearTimeout == "function" ? clearTimeout : null, sl = typeof setImmediate < "u" ? setImmediate : null, ae = !1, Te = -1, Ft = 5, jl = -1;
      if (typeof sl == "function")
        var rl = function() {
          sl(yt);
        };
      else if (typeof MessageChannel < "u") {
        var k = new MessageChannel(), It = k.port2;
        k.port1.onmessage = yt, rl = function() {
          It.postMessage(null);
        };
      } else
        rl = function() {
          Wt(yt, 0);
        };
      j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(C) {
        C.callback = null;
      }, j.unstable_continueExecution = function() {
        le || _l || (le = !0, Dt());
      }, j.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ft = 0 < C ? Math.floor(1e3 / C) : 5;
      }, j.unstable_getCurrentPriorityLevel = function() {
        return oe;
      }, j.unstable_getFirstCallbackNode = function() {
        return B(tt);
      }, j.unstable_next = function(C) {
        switch (oe) {
          case 1:
          case 2:
          case 3:
            var Z = 3;
            break;
          default:
            Z = oe;
        }
        var w = oe;
        oe = Z;
        try {
          return C();
        } finally {
          oe = w;
        }
      }, j.unstable_pauseExecution = function() {
      }, j.unstable_requestPaint = function() {
      }, j.unstable_runWithPriority = function(C, Z) {
        switch (C) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            C = 3;
        }
        var w = oe;
        oe = C;
        try {
          return Z();
        } finally {
          oe = w;
        }
      }, j.unstable_scheduleCallback = function(C, Z, w) {
        var ne = j.unstable_now();
        switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ne + w : ne) : w = ne, C) {
          case 1:
            var ue = -1;
            break;
          case 2:
            ue = 250;
            break;
          case 5:
            ue = 1073741823;
            break;
          case 4:
            ue = 1e4;
            break;
          default:
            ue = 5e3;
        }
        return ue = w + ue, C = {
          id: Wl++,
          callback: Z,
          priorityLevel: C,
          startTime: w,
          expirationTime: ue,
          sortIndex: -1
        }, w > ne ? (C.sortIndex = w, $e(Ot, C), B(tt) === null && C === B(Ot) && (zl ? (Sn(Te), Te = -1) : zl = !0, Ja(Xe, w - ne))) : (C.sortIndex = ue, $e(tt, C), le || _l || (le = !0, Dt())), C;
      }, j.unstable_shouldYield = L, j.unstable_wrapCallback = function(C) {
        var Z = oe;
        return function() {
          var w = oe;
          oe = Z;
          try {
            return C.apply(this, arguments);
          } finally {
            oe = w;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(og)), og;
}
var fb;
function yb() {
  return fb || (fb = 1, process.env.NODE_ENV === "production" ? _v.exports = gS() : _v.exports = bS()), _v.exports;
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
var ob;
function SS() {
  if (ob) return Fm;
  ob = 1;
  var j = yb(), yt = sg, $e = db;
  function B(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function We(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  var Yt = Symbol.for("react.element"), St = Symbol.for("react.transitional.element"), Xe = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), Dt = Symbol.for("react.strict_mode"), Ja = Symbol.for("react.profiler"), Nt = Symbol.for("react.provider"), Ge = Symbol.for("react.consumer"), $t = Symbol.for("react.context"), tt = Symbol.for("react.forward_ref"), Ot = Symbol.for("react.suspense"), Wl = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), _l = Symbol.for("react.offscreen"), le = Symbol.for("react.memo_cache_sentinel"), zl = Symbol.iterator;
  function Wt(l) {
    return l === null || typeof l != "object" ? null : (l = zl && l[zl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Sn = Symbol.for("react.client.reference");
  function sl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Sn ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case L:
        return "Fragment";
      case Xe:
        return "Portal";
      case Ja:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case Ot:
        return "Suspense";
      case Wl:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case $t:
          return (l.displayName || "Context") + ".Provider";
        case Ge:
          return (l._context.displayName || "Context") + ".Consumer";
        case tt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ze:
          return n = l.displayName || null, n !== null ? n : sl(l.type) || "Memo";
        case oe:
          n = l._payload, l = l._init;
          try {
            return sl(l(n));
          } catch {
          }
      }
    return null;
  }
  var ae = yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Te = Object.assign, Ft, jl;
  function rl(l) {
    if (Ft === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Ft = n && n[1] || "", jl = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ft + l + jl;
  }
  var k = !1;
  function It(l, n) {
    if (!l || k) return "";
    k = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (q) {
                  var U = q;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (q) {
                  U = q;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                U = q;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (q) {
            if (q && U && typeof q.stack == "string")
              return [q.stack, U.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), y = r[0], v = r[1];
      if (y && v) {
        var g = y.split(`
`), R = v.split(`
`);
        for (s = c = 0; c < g.length && !g[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < R.length && !R[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === g.length || s === R.length)
          for (c = g.length - 1, s = R.length - 1; 1 <= c && 0 <= s && g[c] !== R[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (g[c] !== R[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || g[c] !== R[s]) {
                  var N = `
` + g[c].replace(" at new ", " at ");
                  return l.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", l.displayName)), N;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      k = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? rl(u) : "";
  }
  function C(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return rl(l.type);
      case 16:
        return rl("Lazy");
      case 13:
        return rl("Suspense");
      case 19:
        return rl("SuspenseList");
      case 0:
      case 15:
        return l = It(l.type, !1), l;
      case 11:
        return l = It(l.type.render, !1), l;
      case 1:
        return l = It(l.type, !0), l;
      default:
        return "";
    }
  }
  function Z(l) {
    try {
      var n = "";
      do
        n += C(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function w(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, n.flags & 4098 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function ne(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ue(l) {
    if (w(l) !== l)
      throw Error(B(188));
  }
  function Re(l) {
    var n = l.alternate;
    if (!n) {
      if (n = w(l), n === null) throw Error(B(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ue(s), l;
          if (r === c) return ue(s), n;
          r = r.sibling;
        }
        throw Error(B(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var y = !1, v = s.child; v; ) {
          if (v === u) {
            y = !0, u = s, c = r;
            break;
          }
          if (v === c) {
            y = !0, c = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!y) {
          for (v = r.child; v; ) {
            if (v === u) {
              y = !0, u = r, c = s;
              break;
            }
            if (v === c) {
              y = !0, c = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!y) throw Error(B(189));
        }
      }
      if (u.alternate !== c) throw Error(B(190));
    }
    if (u.tag !== 3) throw Error(B(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ee(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ee(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var mt = Array.isArray, ce = $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ba = [], ka = -1;
  function Dl(l) {
    return { current: l };
  }
  function ft(l) {
    0 > ka || (l.current = Ba[ka], Ba[ka] = null, ka--);
  }
  function Ve(l, n) {
    ka++, Ba[ka] = l.current, l.current = n;
  }
  var dl = Dl(null), He = Dl(null), oa = Dl(null), $a = Dl(null);
  function Pu(l, n) {
    switch (Ve(oa, n), Ve(He, l), Ve(dl, null), l = n.nodeType, l) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? Gd(n) : 0;
        break;
      default:
        if (l = l === 8 ? n.parentNode : n, n = l.tagName, l = l.namespaceURI)
          l = Gd(l), n = lm(l, n);
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    ft(dl), Ve(dl, n);
  }
  function ei() {
    ft(dl), ft(He), ft(oa);
  }
  function _e(l) {
    l.memoizedState !== null && Ve($a, l);
    var n = dl.current, u = lm(n, l.type);
    n !== u && (Ve(He, l), Ve(dl, u));
  }
  function ki(l) {
    He.current === l && (ft(dl), ft(He)), $a.current === l && (ft($a), ca._currentValue = lt);
  }
  var $i = Object.prototype.hasOwnProperty, Tn = j.unstable_scheduleCallback, T = j.unstable_cancelCallback, F = j.unstable_shouldYield, I = j.unstable_requestPaint, se = j.unstable_now, Pt = j.unstable_getCurrentPriorityLevel, Fe = j.unstable_ImmediatePriority, fe = j.unstable_UserBlockingPriority, hl = j.unstable_NormalPriority, qa = j.unstable_LowPriority, el = j.unstable_IdlePriority, En = j.log, ti = j.unstable_setDisableYieldValue, Ol = null, Tt = null;
  function Wa(l) {
    if (Tt && typeof Tt.onCommitFiberRoot == "function")
      try {
        Tt.onCommitFiberRoot(
          Ol,
          l,
          void 0,
          (l.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function su(l) {
    if (typeof En == "function" && ti(l), Tt && typeof Tt.setStrictMode == "function")
      try {
        Tt.setStrictMode(Ol, l);
      } catch {
      }
  }
  var Fl = Math.clz32 ? Math.clz32 : t0, Pm = Math.log, e0 = Math.LN2;
  function t0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Pm(l) / e0 | 0) | 0;
  }
  var zo = 128, cr = 4194304;
  function ru(l) {
    var n = l & 42;
    if (n !== 0) return n;
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
  function An(l, n) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var c = 0, s = l.suspendedLanes, r = l.pingedLanes, y = l.warmLanes;
    l = l.finishedLanes !== 0;
    var v = u & 134217727;
    return v !== 0 ? (u = v & ~s, u !== 0 ? c = ru(u) : (r &= v, r !== 0 ? c = ru(r) : l || (y = v & ~y, y !== 0 && (c = ru(y))))) : (v = u & ~s, v !== 0 ? c = ru(v) : r !== 0 ? c = ru(r) : l || (y = u & ~y, y !== 0 && (c = ru(y)))), c === 0 ? 0 : n !== 0 && n !== c && !(n & s) && (s = c & -c, y = n & -n, s >= y || s === 32 && (y & 4194176) !== 0) ? n : c;
  }
  function Fa(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Do(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
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
        return n + 5e3;
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
  function Wi() {
    var l = zo;
    return zo <<= 1, !(zo & 4194176) && (zo = 128), l;
  }
  function Gt() {
    var l = cr;
    return cr <<= 1, !(cr & 62914560) && (cr = 4194304), l;
  }
  function du(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Rn(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function nf(l, n, u, c, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, g = l.expirationTimes, R = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var N = 31 - Fl(u), _ = 1 << N;
      v[N] = 0, g[N] = -1;
      var U = R[N];
      if (U !== null)
        for (R[N] = null, N = 0; N < U.length; N++) {
          var q = U[N];
          q !== null && (q.lane &= -536870913);
        }
      u &= ~_;
    }
    c !== 0 && fr(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function fr(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Fl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194218;
  }
  function Sh(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Fl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Oo(l) {
    return l &= -l, 2 < l ? 8 < l ? l & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Mo() {
    var l = ce.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ev(l.type));
  }
  function hu(l, n) {
    var u = ce.p;
    try {
      return ce.p = l, n();
    } finally {
      ce.p = u;
    }
  }
  var Vt = Math.random().toString(36).slice(2), yl = "__reactFiber$" + Vt, Il = "__reactProps$" + Vt, yu = "__reactContainer$" + Vt, or = "__reactEvents$" + Vt, sr = "__reactListeners$" + Vt, Ya = "__reactHandles$" + Vt, Th = "__reactResources$" + Vt, Fi = "__reactMarker$" + Vt;
  function rr(l) {
    delete l[yl], delete l[Il], delete l[or], delete l[sr], delete l[Ya];
  }
  function mu(l) {
    var n = l[yl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[yu] || u[yl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = qs(l); l !== null; ) {
            if (u = l[yl]) return u;
            l = qs(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ii(l) {
    if (l = l[yl] || l[yu]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function uf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(B(33));
  }
  function Ia(l) {
    var n = l[Th];
    return n || (n = l[Th] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Xt(l) {
    l[Fi] = !0;
  }
  var Eh = /* @__PURE__ */ new Set(), Ah = {};
  function li(l, n) {
    Pi(l, n), Pi(l + "Capture", n);
  }
  function Pi(l, n) {
    for (Ah[l] = n, l = 0; l < n.length; l++)
      Eh.add(n[l]);
  }
  var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), cf = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ai = {}, Rh = {};
  function Uo(l) {
    return $i.call(Rh, l) ? !0 : $i.call(ai, l) ? !1 : cf.test(l) ? Rh[l] = !0 : (ai[l] = !0, !1);
  }
  function ec(l, n, u) {
    if (Uo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function ff(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function sa(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function ml(l) {
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
  function dr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function jv(l) {
    var n = dr(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          c = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function hr(l) {
    l._valueTracker || (l._valueTracker = jv(l));
  }
  function zh(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = dr(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function of(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Dh = /[\n"\\]/g;
  function ra(l) {
    return l.replace(
      Dh,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function yr(l, n, u, c, s, r, y, v) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + ml(n)) : l.value !== "" + ml(n) && (l.value = "" + ml(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? Mh(l, y, ml(n)) : u != null ? Mh(l, y, ml(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + ml(v) : l.removeAttribute("name");
  }
  function Oh(l, n, u, c, s, r, y, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + ml(u) : "", n = n != null ? "" + ml(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function Mh(l, n, u) {
    n === "number" && of(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function tc(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ml(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function mr(l, n, u) {
    if (n != null && (n = "" + ml(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + ml(u) : "";
  }
  function Ho(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(B(92));
        if (mt(c)) {
          if (1 < c.length) throw Error(B(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = ml(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function zn(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Qv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Uh(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Qv.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Hh(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(B(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && Uh(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Uh(l, r, n[r]);
  }
  function lc(l) {
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
  var l0 = /* @__PURE__ */ new Map([
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
  ]), wv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vr(l) {
    return wv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ch = null;
  function xh(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Dn = null, ni = null;
  function Bh(l) {
    var n = Ii(l);
    if (n && (l = n.stateNode)) {
      var u = l[Il] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (yr(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ra(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Il] || null;
                if (!s) throw Error(B(90));
                yr(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && zh(c);
          }
          break e;
        case "textarea":
          mr(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && tc(l, !!u.multiple, n, !1);
      }
    }
  }
  var pr = !1;
  function sf(l, n, u) {
    if (pr) return l(n, u);
    pr = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (pr = !1, (Dn !== null || ni !== null) && (Vc(), Dn && (n = Dn, l = ni, ni = Dn = null, Bh(n), l)))
        for (n = 0; n < l.length; n++) Bh(l[n]);
    }
  }
  function rf(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Il] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        B(231, n, typeof u)
      );
    return u;
  }
  var df = !1;
  if (Mt)
    try {
      var ui = {};
      Object.defineProperty(ui, "passive", {
        get: function() {
          df = !0;
        }
      }), window.addEventListener("test", ui, ui), window.removeEventListener("test", ui, ui);
    } catch {
      df = !1;
    }
  var vu = null, Ml = null, gr = null;
  function br() {
    if (gr) return gr;
    var l, n = Ml, u = n.length, c, s = "value" in vu ? vu.value : vu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === s[r - c]; c++) ;
    return gr = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Co(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function xo() {
    return !0;
  }
  function a0() {
    return !1;
  }
  function Pl(l) {
    function n(u, c, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? xo : a0, this.isPropagationStopped = a0, this;
    }
    return Te(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = xo);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = xo);
      },
      persist: function() {
      },
      isPersistent: xo
    }), n;
  }
  var ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Sr = Pl(ii), hf = Te({}, ii, { view: 0, detail: 0 }), Lv = Pl(hf), yf, Tr, mf, Bo = Te({}, hf, {
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
    getModifierState: da,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== mf && (mf && l.type === "mousemove" ? (yf = l.screenX - mf.screenX, Tr = l.screenY - mf.screenY) : Tr = yf = 0, mf = l), yf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Tr;
    }
  }), n0 = Pl(Bo), Zv = Te({}, Bo, { dataTransfer: 0 }), Kv = Pl(Zv), Jv = Te({}, hf, { relatedTarget: 0 }), qh = Pl(Jv), qo = Te({}, ii, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), u0 = Pl(qo), i0 = Te({}, ii, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), c0 = Pl(i0), f0 = Te({}, ii, { data: 0 }), Er = Pl(f0), kv = {
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
  }, o0 = {
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
  }, ac = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nc(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = ac[l]) ? !!n[l] : !1;
  }
  function da() {
    return nc;
  }
  var Ar = Te({}, hf, {
    key: function(l) {
      if (l.key) {
        var n = kv[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Co(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? o0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: da,
    charCode: function(l) {
      return l.type === "keypress" ? Co(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Co(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Rr = Pl(Ar), Yh = Te({}, Bo, {
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
  }), vl = Pl(Yh), s0 = Te({}, hf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: da
  }), zr = Pl(s0), uc = Te({}, ii, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Nh = Pl(uc), r0 = Te({}, Bo, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), d0 = Pl(r0), Gh = Te({}, ii, {
    newState: 0,
    oldState: 0
  }), pu = Pl(Gh), Dr = [9, 13, 27, 32], ic = Mt && "CompositionEvent" in window, cc = null;
  Mt && "documentMode" in document && (cc = document.documentMode);
  var Vh = Mt && "TextEvent" in window && !cc, Xh = Mt && (!ic || cc && 8 < cc && 11 >= cc), Pa = " ", en = !1;
  function Yo(l, n) {
    switch (l) {
      case "keyup":
        return Dr.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ea(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Na = !1;
  function h0(l, n) {
    switch (l) {
      case "compositionend":
        return ea(n);
      case "keypress":
        return n.which !== 32 ? null : (en = !0, Pa);
      case "textInput":
        return l = n.data, l === Pa && en ? null : l;
      default:
        return null;
    }
  }
  function _h(l, n) {
    if (Na)
      return l === "compositionend" || !ic && Yo(l, n) ? (l = br(), gr = Ml = vu = null, Na = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Xh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var jh = {
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
  function ci(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!jh[l.type] : n === "textarea";
  }
  function fi(l, n, u, c) {
    Dn ? ni ? ni.push(c) : ni = [c] : Dn = c, n = ql(n, "onChange"), 0 < n.length && (u = new Sr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var fc = null, tn = null;
  function y0(l) {
    xd(l, 0);
  }
  function No(l) {
    var n = uf(l);
    if (zh(n)) return l;
  }
  function vf(l, n) {
    if (l === "change") return n;
  }
  var pf = !1;
  if (Mt) {
    var oc;
    if (Mt) {
      var Or = "oninput" in document;
      if (!Or) {
        var Qh = document.createElement("div");
        Qh.setAttribute("oninput", "return;"), Or = typeof Qh.oninput == "function";
      }
      oc = Or;
    } else oc = !1;
    pf = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function wh() {
    fc && (fc.detachEvent("onpropertychange", Go), tn = fc = null);
  }
  function Go(l) {
    if (l.propertyName === "value" && No(tn)) {
      var n = [];
      fi(
        n,
        tn,
        l,
        xh(l)
      ), sf(y0, n);
    }
  }
  function m0(l, n, u) {
    l === "focusin" ? (wh(), fc = n, tn = u, fc.attachEvent("onpropertychange", Go)) : l === "focusout" && wh();
  }
  function v0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return No(tn);
  }
  function p0(l, n) {
    if (l === "click") return No(n);
  }
  function pl(l, n) {
    if (l === "input" || l === "change")
      return No(n);
  }
  function Mr(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Ul = typeof Object.is == "function" ? Object.is : Mr;
  function gu(l, n) {
    if (Ul(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!$i.call(n, s) || !Ul(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Vo(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Xo(l, n) {
    var u = Vo(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Vo(u);
    }
  }
  function _o(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? _o(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Lh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = of(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = of(l.document);
    }
    return n;
  }
  function Ur(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  function Zh(l, n) {
    var u = Lh(n);
    n = l.focusedElem;
    var c = l.selectionRange;
    if (u !== n && n && n.ownerDocument && _o(n.ownerDocument.documentElement, n)) {
      if (c !== null && Ur(n)) {
        if (l = c.start, u = c.end, u === void 0 && (u = l), "selectionStart" in n)
          n.selectionStart = l, n.selectionEnd = Math.min(
            u,
            n.value.length
          );
        else if (u = (l = n.ownerDocument || document) && l.defaultView || window, u.getSelection) {
          u = u.getSelection();
          var s = n.textContent.length, r = Math.min(c.start, s);
          c = c.end === void 0 ? r : Math.min(c.end, s), !u.extend && r > c && (s = c, c = r, r = s), s = Xo(n, r);
          var y = Xo(
            n,
            c
          );
          s && y && (u.rangeCount !== 1 || u.anchorNode !== s.node || u.anchorOffset !== s.offset || u.focusNode !== y.node || u.focusOffset !== y.offset) && (l = l.createRange(), l.setStart(s.node, s.offset), u.removeAllRanges(), r > c ? (u.addRange(l), u.extend(y.node, y.offset)) : (l.setEnd(
            y.node,
            y.offset
          ), u.addRange(l)));
        }
      }
      for (l = [], u = n; u = u.parentNode; )
        u.nodeType === 1 && l.push({
          element: u,
          left: u.scrollLeft,
          top: u.scrollTop
        });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < l.length; n++)
        u = l[n], u.element.scrollLeft = u.left, u.element.scrollTop = u.top;
    }
  }
  var Kh = Mt && "documentMode" in document && 11 >= document.documentMode, ha = null, Hr = null, Ga = null, ln = !1;
  function jo(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    ln || ha == null || ha !== of(c) || (c = ha, "selectionStart" in c && Ur(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Ga && gu(Ga, c) || (Ga = c, c = ql(Hr, "onSelect"), 0 < c.length && (n = new Sr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = ha)));
  }
  function bu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Va = {
    animationend: bu("Animation", "AnimationEnd"),
    animationiteration: bu("Animation", "AnimationIteration"),
    animationstart: bu("Animation", "AnimationStart"),
    transitionrun: bu("Transition", "TransitionRun"),
    transitionstart: bu("Transition", "TransitionStart"),
    transitioncancel: bu("Transition", "TransitionCancel"),
    transitionend: bu("Transition", "TransitionEnd")
  }, sc = {}, g0 = {};
  Mt && (g0 = document.createElement("div").style, "AnimationEvent" in window || (delete Va.animationend.animation, delete Va.animationiteration.animation, delete Va.animationstart.animation), "TransitionEvent" in window || delete Va.transitionend.transition);
  function oi(l) {
    if (sc[l]) return sc[l];
    if (!Va[l]) return l;
    var n = Va[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in g0)
        return sc[l] = n[u];
    return l;
  }
  var b0 = oi("animationend"), Cr = oi("animationiteration"), Qo = oi("animationstart"), S0 = oi("transitionrun"), Ae = oi("transitionstart"), Q = oi("transitioncancel"), rc = oi("transitionend"), wo = /* @__PURE__ */ new Map(), Et = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function ya(l, n) {
    wo.set(l, n), li(n, [l]);
  }
  var ta = [], dc = 0, Lo = 0;
  function xr() {
    for (var l = dc, n = Lo = dc = 0; n < l; ) {
      var u = ta[n];
      ta[n++] = null;
      var c = ta[n];
      ta[n++] = null;
      var s = ta[n];
      ta[n++] = null;
      var r = ta[n];
      if (ta[n++] = null, c !== null && s !== null) {
        var y = c.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
      }
      r !== 0 && Ql(u, s, r);
    }
  }
  function gf(l, n, u, c) {
    ta[dc++] = l, ta[dc++] = n, ta[dc++] = u, ta[dc++] = c, Lo |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Zo(l, n, u, c) {
    return gf(l, n, u, c), qe(l);
  }
  function On(l, n) {
    return gf(l, null, null, n), qe(l);
  }
  function Ql(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    s && n !== null && l.tag === 3 && (r = l.stateNode, s = 31 - Fl(u), r = r.hiddenUpdates, l = r[s], l === null ? r[s] = [n] : l.push(n), n.lane = u | 536870912);
  }
  function qe(l) {
    if (50 < $f)
      throw $f = 0, Rd = null, Error(B(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Mn = {}, Su = /* @__PURE__ */ new WeakMap();
  function tl(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Su.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Z(n)
      }, Su.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Z(n)
    };
  }
  var Hl = [], si = 0, Tu = null, bf = 0, Cl = [], la = 0, Un = null, Hn = 1, Cn = "";
  function ri(l, n) {
    Hl[si++] = bf, Hl[si++] = Tu, Tu = l, bf = n;
  }
  function Jh(l, n, u) {
    Cl[la++] = Hn, Cl[la++] = Cn, Cl[la++] = Un, Un = l;
    var c = Hn;
    l = Cn;
    var s = 32 - Fl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Fl(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (c & (1 << y) - 1).toString(32), c >>= y, s -= y, Hn = 1 << 32 - Fl(n) + s | u << s | c, Cn = r + l;
    } else
      Hn = 1 << r | u << s | c, Cn = l;
  }
  function Br(l) {
    l.return !== null && (ri(l, 1), Jh(l, 1, 0));
  }
  function Ko(l) {
    for (; l === Tu; )
      Tu = Hl[--si], Hl[si] = null, bf = Hl[--si], Hl[si] = null;
    for (; l === Un; )
      Un = Cl[--la], Cl[la] = null, Cn = Cl[--la], Cl[la] = null, Hn = Cl[--la], Cl[la] = null;
  }
  var gl = null, _t = null, xe = !1, Xa = null, an = !1, kh = Error(B(519));
  function di(l) {
    var n = Error(B(418, ""));
    throw Tf(tl(n, l)), kh;
  }
  function $h(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[yl] = l, n[Il] = c, u) {
      case "dialog":
        Ue("cancel", n), Ue("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ue("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Wn.length; u++)
          Ue(Wn[u], n);
        break;
      case "source":
        Ue("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ue("error", n), Ue("load", n);
        break;
      case "details":
        Ue("toggle", n);
        break;
      case "input":
        Ue("invalid", n), Oh(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), hr(n);
        break;
      case "select":
        Ue("invalid", n);
        break;
      case "textarea":
        Ue("invalid", n), Ho(n, c.value, c.defaultValue, c.children), hr(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || me(n.textContent, u) ? (c.popover != null && (Ue("beforetoggle", n), Ue("toggle", n)), c.onScroll != null && Ue("scroll", n), c.onScrollEnd != null && Ue("scrollend", n), c.onClick != null && (n.onclick = Bi), n = !0) : n = !1, n || di(l);
  }
  function Wh(l) {
    for (gl = l.return; gl; )
      switch (gl.tag) {
        case 3:
        case 27:
          an = !0;
          return;
        case 5:
        case 13:
          an = !1;
          return;
        default:
          gl = gl.return;
      }
  }
  function hc(l) {
    if (l !== gl) return !1;
    if (!xe) return Wh(l), xe = !0, !1;
    var n = !1, u;
    if ((u = l.tag !== 3 && l.tag !== 27) && ((u = l.tag === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Hs(l.type, l.memoizedProps)), u = !u), u && (n = !0), n && _t && di(l), Wh(l), l.tag === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                _t = cl(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        _t = null;
      }
    } else
      _t = gl ? cl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Sf() {
    _t = gl = null, xe = !1;
  }
  function Tf(l) {
    Xa === null ? Xa = [l] : Xa.push(l);
  }
  var xn = Error(B(460)), Jo = Error(B(474)), qr = { then: function() {
  } };
  function T0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function yc() {
  }
  function mc(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(yc, yc), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, l === xn ? Error(B(483)) : l;
      default:
        if (typeof n.status == "string") n.then(yc, yc);
        else {
          if (l = Ke, l !== null && 100 < l.shellSuspendCounter)
            throw Error(B(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, l === xn ? Error(B(483)) : l;
        }
        throw vc = n, xn;
    }
  }
  var vc = null;
  function hi() {
    if (vc === null) throw Error(B(459));
    var l = vc;
    return vc = null, l;
  }
  var jt = null, yi = 0;
  function Ef(l) {
    var n = yi;
    return yi += 1, jt === null && (jt = []), mc(jt, l, n);
  }
  function Af(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Rf(l, n) {
    throw n.$$typeof === Yt ? Error(B(525)) : (l = Object.prototype.toString.call(n), Error(
      B(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function ko(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Yr(l) {
    function n(z, A) {
      if (l) {
        var D = z.deletions;
        D === null ? (z.deletions = [A], z.flags |= 16) : D.push(A);
      }
    }
    function u(z, A) {
      if (!l) return null;
      for (; A !== null; )
        n(z, A), A = A.sibling;
      return null;
    }
    function c(z) {
      for (var A = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? A.set(z.key, z) : A.set(z.index, z), z = z.sibling;
      return A;
    }
    function s(z, A) {
      return z = hn(z, A), z.index = 0, z.sibling = null, z;
    }
    function r(z, A, D) {
      return z.index = D, l ? (D = z.alternate, D !== null ? (D = D.index, D < A ? (z.flags |= 33554434, A) : D) : (z.flags |= 33554434, A)) : (z.flags |= 1048576, A);
    }
    function y(z) {
      return l && z.alternate === null && (z.flags |= 33554434), z;
    }
    function v(z, A, D, X) {
      return A === null || A.tag !== 6 ? (A = bd(D, z.mode, X), A.return = z, A) : (A = s(A, D), A.return = z, A);
    }
    function g(z, A, D, X) {
      var W = D.type;
      return W === L ? N(
        z,
        A,
        D.props.children,
        X,
        D.key
      ) : A !== null && (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === oe && ko(W) === A.type) ? (A = s(A, D.props), Af(A, D), A.return = z, A) : (A = Zf(
        D.type,
        D.key,
        D.props,
        null,
        z.mode,
        X
      ), Af(A, D), A.return = z, A);
    }
    function R(z, A, D, X) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation ? (A = bs(D, z.mode, X), A.return = z, A) : (A = s(A, D.children || []), A.return = z, A);
    }
    function N(z, A, D, X, W) {
      return A === null || A.tag !== 7 ? (A = pt(
        D,
        z.mode,
        X,
        W
      ), A.return = z, A) : (A = s(A, D), A.return = z, A);
    }
    function _(z, A, D) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = bd(
          "" + A,
          z.mode,
          D
        ), A.return = z, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case St:
            return D = Zf(
              A.type,
              A.key,
              A.props,
              null,
              z.mode,
              D
            ), Af(D, A), D.return = z, D;
          case Xe:
            return A = bs(
              A,
              z.mode,
              D
            ), A.return = z, A;
          case oe:
            var X = A._init;
            return A = X(A._payload), _(z, A, D);
        }
        if (mt(A) || Wt(A))
          return A = pt(
            A,
            z.mode,
            D,
            null
          ), A.return = z, A;
        if (typeof A.then == "function")
          return _(z, Ef(A), D);
        if (A.$$typeof === $t)
          return _(
            z,
            fd(z, A),
            D
          );
        Rf(z, A);
      }
      return null;
    }
    function U(z, A, D, X) {
      var W = A !== null ? A.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return W !== null ? null : v(z, A, "" + D, X);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case St:
            return D.key === W ? g(z, A, D, X) : null;
          case Xe:
            return D.key === W ? R(z, A, D, X) : null;
          case oe:
            return W = D._init, D = W(D._payload), U(z, A, D, X);
        }
        if (mt(D) || Wt(D))
          return W !== null ? null : N(z, A, D, X, null);
        if (typeof D.then == "function")
          return U(
            z,
            A,
            Ef(D),
            X
          );
        if (D.$$typeof === $t)
          return U(
            z,
            A,
            fd(z, D),
            X
          );
        Rf(z, D);
      }
      return null;
    }
    function q(z, A, D, X, W) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return z = z.get(D) || null, v(A, z, "" + X, W);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case St:
            return z = z.get(
              X.key === null ? D : X.key
            ) || null, g(A, z, X, W);
          case Xe:
            return z = z.get(
              X.key === null ? D : X.key
            ) || null, R(A, z, X, W);
          case oe:
            var pe = X._init;
            return X = pe(X._payload), q(
              z,
              A,
              D,
              X,
              W
            );
        }
        if (mt(X) || Wt(X))
          return z = z.get(D) || null, N(A, z, X, W, null);
        if (typeof X.then == "function")
          return q(
            z,
            A,
            D,
            Ef(X),
            W
          );
        if (X.$$typeof === $t)
          return q(
            z,
            A,
            D,
            fd(A, X),
            W
          );
        Rf(A, X);
      }
      return null;
    }
    function $(z, A, D, X) {
      for (var W = null, pe = null, te = A, ie = A = 0, Kt = null; te !== null && ie < D.length; ie++) {
        te.index > ie ? (Kt = te, te = null) : Kt = te.sibling;
        var Ye = U(
          z,
          te,
          D[ie],
          X
        );
        if (Ye === null) {
          te === null && (te = Kt);
          break;
        }
        l && te && Ye.alternate === null && n(z, te), A = r(Ye, A, ie), pe === null ? W = Ye : pe.sibling = Ye, pe = Ye, te = Kt;
      }
      if (ie === D.length)
        return u(z, te), xe && ri(z, ie), W;
      if (te === null) {
        for (; ie < D.length; ie++)
          te = _(z, D[ie], X), te !== null && (A = r(
            te,
            A,
            ie
          ), pe === null ? W = te : pe.sibling = te, pe = te);
        return xe && ri(z, ie), W;
      }
      for (te = c(te); ie < D.length; ie++)
        Kt = q(
          te,
          z,
          ie,
          D[ie],
          X
        ), Kt !== null && (l && Kt.alternate !== null && te.delete(
          Kt.key === null ? ie : Kt.key
        ), A = r(
          Kt,
          A,
          ie
        ), pe === null ? W = Kt : pe.sibling = Kt, pe = Kt);
      return l && te.forEach(function(wi) {
        return n(z, wi);
      }), xe && ri(z, ie), W;
    }
    function re(z, A, D, X) {
      if (D == null) throw Error(B(151));
      for (var W = null, pe = null, te = A, ie = A = 0, Kt = null, Ye = D.next(); te !== null && !Ye.done; ie++, Ye = D.next()) {
        te.index > ie ? (Kt = te, te = null) : Kt = te.sibling;
        var wi = U(z, te, Ye.value, X);
        if (wi === null) {
          te === null && (te = Kt);
          break;
        }
        l && te && wi.alternate === null && n(z, te), A = r(wi, A, ie), pe === null ? W = wi : pe.sibling = wi, pe = wi, te = Kt;
      }
      if (Ye.done)
        return u(z, te), xe && ri(z, ie), W;
      if (te === null) {
        for (; !Ye.done; ie++, Ye = D.next())
          Ye = _(z, Ye.value, X), Ye !== null && (A = r(Ye, A, ie), pe === null ? W = Ye : pe.sibling = Ye, pe = Ye);
        return xe && ri(z, ie), W;
      }
      for (te = c(te); !Ye.done; ie++, Ye = D.next())
        Ye = q(te, z, ie, Ye.value, X), Ye !== null && (l && Ye.alternate !== null && te.delete(Ye.key === null ? ie : Ye.key), A = r(Ye, A, ie), pe === null ? W = Ye : pe.sibling = Ye, pe = Ye);
      return l && te.forEach(function(dp) {
        return n(z, dp);
      }), xe && ri(z, ie), W;
    }
    function ut(z, A, D, X) {
      if (typeof D == "object" && D !== null && D.type === L && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case St:
            e: {
              for (var W = D.key; A !== null; ) {
                if (A.key === W) {
                  if (W = D.type, W === L) {
                    if (A.tag === 7) {
                      u(
                        z,
                        A.sibling
                      ), X = s(
                        A,
                        D.props.children
                      ), X.return = z, z = X;
                      break e;
                    }
                  } else if (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === oe && ko(W) === A.type) {
                    u(
                      z,
                      A.sibling
                    ), X = s(A, D.props), Af(X, D), X.return = z, z = X;
                    break e;
                  }
                  u(z, A);
                  break;
                } else n(z, A);
                A = A.sibling;
              }
              D.type === L ? (X = pt(
                D.props.children,
                z.mode,
                X,
                D.key
              ), X.return = z, z = X) : (X = Zf(
                D.type,
                D.key,
                D.props,
                null,
                z.mode,
                X
              ), Af(X, D), X.return = z, z = X);
            }
            return y(z);
          case Xe:
            e: {
              for (W = D.key; A !== null; ) {
                if (A.key === W)
                  if (A.tag === 4 && A.stateNode.containerInfo === D.containerInfo && A.stateNode.implementation === D.implementation) {
                    u(
                      z,
                      A.sibling
                    ), X = s(A, D.children || []), X.return = z, z = X;
                    break e;
                  } else {
                    u(z, A);
                    break;
                  }
                else n(z, A);
                A = A.sibling;
              }
              X = bs(D, z.mode, X), X.return = z, z = X;
            }
            return y(z);
          case oe:
            return W = D._init, D = W(D._payload), ut(
              z,
              A,
              D,
              X
            );
        }
        if (mt(D))
          return $(
            z,
            A,
            D,
            X
          );
        if (Wt(D)) {
          if (W = Wt(D), typeof W != "function") throw Error(B(150));
          return D = W.call(D), re(
            z,
            A,
            D,
            X
          );
        }
        if (typeof D.then == "function")
          return ut(
            z,
            A,
            Ef(D),
            X
          );
        if (D.$$typeof === $t)
          return ut(
            z,
            A,
            fd(z, D),
            X
          );
        Rf(z, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, A !== null && A.tag === 6 ? (u(z, A.sibling), X = s(A, D), X.return = z, z = X) : (u(z, A), X = bd(D, z.mode, X), X.return = z, z = X), y(z)) : u(z, A);
    }
    return function(z, A, D, X) {
      try {
        yi = 0;
        var W = ut(
          z,
          A,
          D,
          X
        );
        return jt = null, W;
      } catch (te) {
        if (te === xn) throw te;
        var pe = Lt(29, te, null, z.mode);
        return pe.lanes = X, pe.return = z, pe;
      } finally {
      }
    };
  }
  var Bn = Yr(!0), Nr = Yr(!1), Eu = Dl(null), zf = Dl(0);
  function Fh(l, n) {
    l = Qu, Ve(zf, l), Ve(Eu, n), Qu = l | n.baseLanes;
  }
  function Gr() {
    Ve(zf, Qu), Ve(Eu, Eu.current);
  }
  function $o() {
    Qu = zf.current, ft(Eu), ft(zf);
  }
  var ma = Dl(null), nn = null;
  function qn(l) {
    var n = l.alternate;
    Ve(Ct, Ct.current & 1), Ve(ma, l), nn === null && (n === null || Eu.current !== null || n.memoizedState !== null) && (nn = l);
  }
  function Ih(l) {
    if (l.tag === 22) {
      if (Ve(Ct, Ct.current), Ve(ma, l), nn === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (nn = l);
      }
    } else Au();
  }
  function Au() {
    Ve(Ct, Ct.current), Ve(ma, ma.current);
  }
  function un(l) {
    ft(ma), nn === l && (nn = null), ft(Ct);
  }
  var Ct = Dl(0);
  function Wo(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var pc = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Ph = j.unstable_scheduleCallback, ey = j.unstable_NormalPriority, Qt = {
    $$typeof: $t,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ty() {
    return {
      controller: new pc(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Df(l) {
    l.refCount--, l.refCount === 0 && Ph(ey, function() {
      l.controller.abort();
    });
  }
  var Ru = null, Fo = 0, zu = 0, gc = null;
  function E0(l, n) {
    if (Ru === null) {
      var u = Ru = [];
      Fo = 0, zu = eo(), gc = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Fo++, n.then(Vr, Vr), n;
  }
  function Vr() {
    if (--Fo === 0 && Ru !== null) {
      gc !== null && (gc.status = "fulfilled");
      var l = Ru;
      Ru = null, zu = 0, gc = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function ly(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var ay = ae.S;
  ae.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && E0(l, n), ay !== null && ay(l, n);
  };
  var mi = Dl(null);
  function Du() {
    var l = mi.current;
    return l !== null ? l : Ke.pooledCache;
  }
  function Io(l, n) {
    n === null ? Ve(mi, mi.current) : Ve(mi, n.pool);
  }
  function ny() {
    var l = Du();
    return l === null ? null : { parent: Qt._currentValue, pool: l };
  }
  var Ou = 0, he = null, je = null, At = null, Of = !1, vi = !1, bc = !1, xt = 0, Mf = 0, Sc = null, A0 = 0;
  function Rt() {
    throw Error(B(321));
  }
  function Xr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ul(l[u], n[u])) return !1;
    return !0;
  }
  function Tc(l, n, u, c, s, r) {
    return Ou = r, he = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ae.H = l === null || l.memoizedState === null ? bi : xu, bc = !1, r = u(c, s), bc = !1, vi && (r = uy(
      n,
      u,
      c,
      s
    )), _r(l), r;
  }
  function _r(l) {
    ae.H = ll;
    var n = je !== null && je.next !== null;
    if (Ou = 0, At = je = he = null, Of = !1, Mf = 0, Sc = null, n) throw Error(B(300));
    l === null || vt || (l = l.dependencies, l !== null && hs(l) && (vt = !0));
  }
  function uy(l, n, u, c) {
    he = l;
    var s = 0;
    do {
      if (vi && (Sc = null), Mf = 0, vi = !1, 25 <= s) throw Error(B(301));
      if (s += 1, At = je = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      ae.H = Rc, r = n(u, c);
    } while (vi);
    return r;
  }
  function R0() {
    var l = ae.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ec(n) : n, l = l.useState()[0], (je !== null ? je.memoizedState : null) !== l && (he.flags |= 1024), n;
  }
  function jr() {
    var l = xt !== 0;
    return xt = 0, l;
  }
  function Po(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function es(l) {
    if (Of) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Of = !1;
    }
    Ou = 0, At = je = he = null, vi = !1, Mf = xt = 0, Sc = null;
  }
  function xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return At === null ? he.memoizedState = At = l : At = At.next = l, At;
  }
  function Ut() {
    if (je === null) {
      var l = he.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = je.next;
    var n = At === null ? he.memoizedState : At.next;
    if (n !== null)
      At = n, je = l;
    else {
      if (l === null)
        throw he.alternate === null ? Error(B(467)) : Error(B(310));
      je = l, l = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null
      }, At === null ? he.memoizedState = At = l : At = At.next = l;
    }
    return At;
  }
  var Uf;
  Uf = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ec(l) {
    var n = Mf;
    return Mf += 1, Sc === null && (Sc = []), l = mc(Sc, l, n), n = he, (At === null ? n.memoizedState : At.next) === null && (n = n.alternate, ae.H = n === null || n.memoizedState === null ? bi : xu), l;
  }
  function Hf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ec(l);
      if (l.$$typeof === $t) return bl(l);
    }
    throw Error(B(438, String(l)));
  }
  function Qr(l) {
    var n = null, u = he.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = he.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Uf(), he.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = le;
    return n.index++, u;
  }
  function Yn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Cf(l) {
    var n = Ut();
    return wr(n, je, l);
  }
  function wr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(B(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = y = null, g = null, R = n, N = !1;
      do {
        var _ = R.lane & -536870913;
        if (_ !== R.lane ? (Ce & _) === _ : (Ou & _) === _) {
          var U = R.revertLane;
          if (U === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), _ === zu && (N = !0);
          else if ((Ou & U) === U) {
            R = R.next, U === zu && (N = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, g === null ? (v = g = _, y = r) : g = g.next = _, he.lanes |= U, Di |= U;
          _ = R.action, bc && u(r, _), r = R.hasEagerState ? R.eagerState : u(r, _);
        } else
          U = {
            lane: _,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, g === null ? (v = g = U, y = r) : g = g.next = U, he.lanes |= _, Di |= _;
        R = R.next;
      } while (R !== null && R !== n);
      if (g === null ? y = r : g.next = v, !Ul(r, l.memoizedState) && (vt = !0, N && (u = gc, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = g, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function cn(l) {
    var n = Ut(), u = n.queue;
    if (u === null) throw Error(B(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      Ul(r, n.memoizedState) || (vt = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function Lr(l, n, u) {
    var c = he, s = Ut(), r = xe;
    if (r) {
      if (u === void 0) throw Error(B(407));
      u = u();
    } else u = n();
    var y = !Ul(
      (je || s).memoizedState,
      u
    );
    if (y && (s.memoizedState = u, vt = !0), s = s.queue, _a(ts.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || y || At !== null && At.memoizedState.tag & 1) {
      if (c.flags |= 2048, Gn(
        9,
        Zr.bind(
          null,
          c,
          s,
          u,
          n
        ),
        { destroy: void 0 },
        null
      ), Ke === null) throw Error(B(349));
      r || Ou & 60 || z0(c, n, u);
    }
    return u;
  }
  function z0(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = he.updateQueue, n === null ? (n = Uf(), he.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Zr(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Mu(n) && Nn(l);
  }
  function ts(l, n, u) {
    return u(function() {
      Mu(n) && Nn(l);
    });
  }
  function Mu(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Ul(l, u);
    } catch {
      return !0;
    }
  }
  function Nn(l) {
    var n = On(l, 2);
    n !== null && Zt(n, l, 2);
  }
  function ls(l) {
    var n = xl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), bc) {
        su(!0);
        try {
          u();
        } finally {
          su(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: l
    }, n;
  }
  function Kr(l, n, u, c) {
    return l.baseState = u, wr(
      l,
      je,
      typeof c == "function" ? c : Yn
    );
  }
  function as(l, n, u, c, s) {
    if (ed(l)) throw Error(B(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      ae.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, ns(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function ns(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = ae.T, y = {};
      ae.T = y;
      try {
        var v = u(s, c), g = ae.S;
        g !== null && g(y, v), pi(l, n, v);
      } catch (R) {
        xf(l, n, R);
      } finally {
        ae.T = r;
      }
    } else
      try {
        r = u(s, c), pi(l, n, r);
      } catch (R) {
        xf(l, n, R);
      }
  }
  function pi(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        at(l, n, c);
      },
      function(c) {
        return xf(l, n, c);
      }
    ) : at(l, n, u);
  }
  function at(l, n, u) {
    n.status = "fulfilled", n.value = u, iy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, ns(l, u)));
  }
  function xf(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, iy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function iy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Jr(l, n) {
    return n;
  }
  function kr(l, n) {
    if (xe) {
      var u = Ke.formState;
      if (u !== null) {
        e: {
          var c = he;
          if (xe) {
            if (_t) {
              t: {
                for (var s = _t, r = an; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = cl(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                _t = cl(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            di(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = xl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jr,
      lastRenderedState: n
    }, u.queue = c, u = Pr.bind(
      null,
      he,
      c
    ), c.dispatch = u, c = ls(!1), r = py.bind(
      null,
      he,
      !1,
      c.queue
    ), c = xl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = as.bind(
      null,
      he,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Uu(l) {
    var n = Ut();
    return Hu(n, je, l);
  }
  function Hu(l, n, u) {
    n = wr(
      l,
      n,
      Jr
    )[0], l = Cf(Yn)[0], n = typeof n == "object" && n !== null && typeof n.then == "function" ? Ec(n) : n;
    var c = Ut(), s = c.queue, r = s.dispatch;
    return u !== c.memoizedState && (he.flags |= 2048, Gn(
      9,
      us.bind(null, s, u),
      { destroy: void 0 },
      null
    )), [n, r, l];
  }
  function us(l, n) {
    l.action = n;
  }
  function is(l) {
    var n = Ut(), u = je;
    if (u !== null)
      return Hu(n, u, l);
    Ut(), n = n.memoizedState, u = Ut();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Gn(l, n, u, c) {
    return l = { tag: l, create: n, inst: u, deps: c, next: null }, n = he.updateQueue, n === null && (n = Uf(), he.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Bf() {
    return Ut().memoizedState;
  }
  function cs(l, n, u, c) {
    var s = xl();
    he.flags |= l, s.memoizedState = Gn(
      1 | n,
      u,
      { destroy: void 0 },
      c === void 0 ? null : c
    );
  }
  function $r(l, n, u, c) {
    var s = Ut();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    je !== null && c !== null && Xr(c, je.memoizedState.deps) ? s.memoizedState = Gn(n, u, r, c) : (he.flags |= l, s.memoizedState = Gn(1 | n, u, r, c));
  }
  function cy(l, n) {
    cs(8390656, 8, l, n);
  }
  function _a(l, n) {
    $r(2048, 8, l, n);
  }
  function fy(l, n) {
    return $r(4, 2, l, n);
  }
  function Wr(l, n) {
    return $r(4, 4, l, n);
  }
  function qf(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Ac(l, n, u) {
    u = u != null ? u.concat([l]) : null, $r(4, 4, qf.bind(null, n, l), u);
  }
  function Fr() {
  }
  function Ir(l, n) {
    var u = Ut();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Xr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function oy(l, n) {
    var u = Ut();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Xr(n, c[1]))
      return c[0];
    if (c = l(), bc) {
      su(!0);
      try {
        l();
      } finally {
        su(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function sy(l, n, u) {
    return u === void 0 || Ou & 1073741824 ? l.memoizedState = n : (l.memoizedState = u, l = Nc(), he.lanes |= l, Di |= l, u);
  }
  function D0(l, n, u, c) {
    return Ul(u, n) ? u : Eu.current !== null ? (l = sy(l, u, c), Ul(l, n) || (vt = !0), l) : Ou & 42 ? (l = Nc(), he.lanes |= l, Di |= l, n) : (vt = !0, l.memoizedState = u);
  }
  function ry(l, n, u, c, s) {
    var r = ce.p;
    ce.p = r !== 0 && 8 > r ? r : 8;
    var y = ae.T, v = {};
    ae.T = v, py(l, !1, n, u);
    try {
      var g = s(), R = ae.S;
      if (R !== null && R(v, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var N = ly(
          g,
          c
        );
        gi(
          l,
          n,
          N,
          Bl(l)
        );
      } else
        gi(
          l,
          n,
          c,
          Bl(l)
        );
    } catch (_) {
      gi(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: _ },
        Bl()
      );
    } finally {
      ce.p = r, ae.T = y;
    }
  }
  function $v() {
  }
  function Cu(l, n, u, c) {
    if (l.tag !== 5) throw Error(B(476));
    var s = aa(l).queue;
    ry(
      l,
      s,
      n,
      lt,
      u === null ? $v : function() {
        return dy(l), u(c);
      }
    );
  }
  function aa(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: lt
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function dy(l) {
    var n = aa(l).next.queue;
    gi(l, n, {}, Bl());
  }
  function hy() {
    return bl(ca);
  }
  function yy() {
    return Ut().memoizedState;
  }
  function my() {
    return Ut().memoizedState;
  }
  function O0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Bl();
          l = Nu(u);
          var c = Gu(n, l, u);
          c !== null && (Zt(c, n, u), jf(c, n, u)), n = { cache: ty() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function vy(l, n, u) {
    var c = Bl();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ed(l) ? gy(n, u) : (u = Zo(l, n, u, c), u !== null && (Zt(u, l, c), by(u, n, c)));
  }
  function Pr(l, n, u) {
    var c = Bl();
    gi(l, n, u, c);
  }
  function gi(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ed(l)) gy(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, v = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = v, Ul(v, y))
            return gf(l, n, s, 0), Ke === null && xr(), !1;
        } catch {
        } finally {
        }
      if (u = Zo(l, n, s, c), u !== null)
        return Zt(u, l, c), by(u, n, c), !0;
    }
    return !1;
  }
  function py(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: eo(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ed(l)) {
      if (n) throw Error(B(479));
    } else
      n = Zo(
        l,
        u,
        c,
        2
      ), n !== null && Zt(n, l, 2);
  }
  function ed(l) {
    var n = l.alternate;
    return l === he || n !== null && n === he;
  }
  function gy(l, n) {
    vi = Of = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function by(l, n, u) {
    if (u & 4194176) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Sh(l, u);
    }
  }
  var ll = {
    readContext: bl,
    use: Hf,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt
  };
  ll.useCacheRefresh = Rt, ll.useMemoCache = Rt, ll.useHostTransitionStatus = Rt, ll.useFormState = Rt, ll.useActionState = Rt, ll.useOptimistic = Rt;
  var bi = {
    readContext: bl,
    use: Hf,
    useCallback: function(l, n) {
      return xl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: bl,
    useEffect: cy,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, cs(
        4194308,
        4,
        qf.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return cs(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      cs(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = xl();
      n = n === void 0 ? null : n;
      var c = l();
      if (bc) {
        su(!0);
        try {
          l();
        } finally {
          su(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = xl();
      if (u !== void 0) {
        var s = u(n);
        if (bc) {
          su(!0);
          try {
            u(n);
          } finally {
            su(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = vy.bind(
        null,
        he,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = xl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = ls(l);
      var n = l.queue, u = Pr.bind(null, he, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Fr,
    useDeferredValue: function(l, n) {
      var u = xl();
      return sy(u, l, n);
    },
    useTransition: function() {
      var l = ls(!1);
      return l = ry.bind(
        null,
        he,
        l.queue,
        !0,
        !1
      ), xl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = he, s = xl();
      if (xe) {
        if (u === void 0)
          throw Error(B(407));
        u = u();
      } else {
        if (u = n(), Ke === null) throw Error(B(349));
        Ce & 60 || z0(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, cy(ts.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Gn(
        9,
        Zr.bind(
          null,
          c,
          r,
          u,
          n
        ),
        { destroy: void 0 },
        null
      ), u;
    },
    useId: function() {
      var l = xl(), n = Ke.identifierPrefix;
      if (xe) {
        var u = Cn, c = Hn;
        u = (c & ~(1 << 32 - Fl(c) - 1)).toString(32) + u, n = ":" + n + "R" + u, u = xt++, 0 < u && (n += "H" + u.toString(32)), n += ":";
      } else
        u = A0++, n = ":" + n + "r" + u.toString(32) + ":";
      return l.memoizedState = n;
    },
    useCacheRefresh: function() {
      return xl().memoizedState = O0.bind(
        null,
        he
      );
    }
  };
  bi.useMemoCache = Qr, bi.useHostTransitionStatus = hy, bi.useFormState = kr, bi.useActionState = kr, bi.useOptimistic = function(l) {
    var n = xl();
    n.memoizedState = n.baseState = l;
    var u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return n.queue = u, n = py.bind(
      null,
      he,
      !0,
      u
    ), u.dispatch = n, [l, n];
  };
  var xu = {
    readContext: bl,
    use: Hf,
    useCallback: Ir,
    useContext: bl,
    useEffect: _a,
    useImperativeHandle: Ac,
    useInsertionEffect: fy,
    useLayoutEffect: Wr,
    useMemo: oy,
    useReducer: Cf,
    useRef: Bf,
    useState: function() {
      return Cf(Yn);
    },
    useDebugValue: Fr,
    useDeferredValue: function(l, n) {
      var u = Ut();
      return D0(
        u,
        je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Cf(Yn)[0], n = Ut().memoizedState;
      return [
        typeof l == "boolean" ? l : Ec(l),
        n
      ];
    },
    useSyncExternalStore: Lr,
    useId: yy
  };
  xu.useCacheRefresh = my, xu.useMemoCache = Qr, xu.useHostTransitionStatus = hy, xu.useFormState = Uu, xu.useActionState = Uu, xu.useOptimistic = function(l, n) {
    var u = Ut();
    return Kr(u, je, l, n);
  };
  var Rc = {
    readContext: bl,
    use: Hf,
    useCallback: Ir,
    useContext: bl,
    useEffect: _a,
    useImperativeHandle: Ac,
    useInsertionEffect: fy,
    useLayoutEffect: Wr,
    useMemo: oy,
    useReducer: cn,
    useRef: Bf,
    useState: function() {
      return cn(Yn);
    },
    useDebugValue: Fr,
    useDeferredValue: function(l, n) {
      var u = Ut();
      return je === null ? sy(u, l, n) : D0(
        u,
        je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = cn(Yn)[0], n = Ut().memoizedState;
      return [
        typeof l == "boolean" ? l : Ec(l),
        n
      ];
    },
    useSyncExternalStore: Lr,
    useId: yy
  };
  Rc.useCacheRefresh = my, Rc.useMemoCache = Qr, Rc.useHostTransitionStatus = hy, Rc.useFormState = is, Rc.useActionState = is, Rc.useOptimistic = function(l, n) {
    var u = Ut();
    return je !== null ? Kr(u, je, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
  };
  function fs(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Te({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Sy = {
    isMounted: function(l) {
      return (l = l._reactInternals) ? w(l) === l : !1;
    },
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Bl(), s = Nu(c);
      s.payload = n, u != null && (s.callback = u), n = Gu(l, s, c), n !== null && (Zt(n, l, c), jf(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Bl(), s = Nu(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Gu(l, s, c), n !== null && (Zt(n, l, c), jf(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Bl(), c = Nu(u);
      c.tag = 2, n != null && (c.callback = n), n = Gu(l, c, u), n !== null && (Zt(n, l, u), jf(n, l, u));
    }
  };
  function va(l, n, u, c, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, y) : n.prototype && n.prototype.isPureReactComponent ? !gu(u, c) || !gu(s, r) : !0;
  }
  function Ty(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Sy.enqueueReplaceState(n, n.state, null);
  }
  function al(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Te({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var os = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function M0(l) {
    os(l);
  }
  function fn(l) {
    console.error(l);
  }
  function Ey(l) {
    os(l);
  }
  function Bu(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Ay(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function on(l, n, u) {
    return u = Nu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Bu(l, n);
    }, u;
  }
  function td(l) {
    return l = Nu(l), l.tag = 3, l;
  }
  function ld(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Ay(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      Ay(n, u, c), typeof s != "function" && (wu === null ? wu = /* @__PURE__ */ new Set([this]) : wu.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Si(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && ke(
        n,
        u,
        s,
        !0
      ), u = ma.current, u !== null) {
        switch (u.tag) {
          case 13:
            return nn === null ? zd() : u.alternate === null && dt === 0 && (dt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === qr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Ky(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === qr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Ky(l, c, s)), !1;
        }
        throw Error(B(435, u.tag));
      }
      return Ky(l, c, s), zd(), !1;
    }
    if (xe)
      return n = ma.current, n !== null ? (!(n.flags & 65536) && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== kh && (l = Error(B(422), { cause: c }), Tf(tl(l, u)))) : (c !== kh && (n = Error(B(423), {
        cause: c
      }), Tf(
        tl(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = tl(c, u), s = on(
        l.stateNode,
        c,
        s
      ), ms(l, s), dt !== 4 && (dt = 2)), !1;
    var r = Error(B(520), { cause: c });
    if (r = tl(r, u), Ts === null ? Ts = [r] : Ts.push(r), dt !== 4 && (dt = 2), n === null) return !0;
    c = tl(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = on(u.stateNode, c, l), ms(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (wu === null || !wu.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = td(s), ld(
              s,
              l,
              u,
              c
            ), ms(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Ry = Error(B(461)), vt = !1;
  function nl(l, n, u, c) {
    n.child = l === null ? Nr(n, null, u, c) : Bn(
      n,
      l.child,
      u,
      c
    );
  }
  function Yf(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var v in c)
        v !== "ref" && (y[v] = c[v]);
    } else y = c;
    return Yu(n), c = Tc(
      l,
      n,
      u,
      y,
      r,
      s
    ), v = jr(), l !== null && !vt ? (Po(l, n, s), _n(l, n, s)) : (xe && v && Br(n), n.flags |= 1, nl(l, n, c, s), n.child);
  }
  function zc(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !gd(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, zy(
        l,
        n,
        r,
        c,
        s
      )) : (l = Zf(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !_f(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : gu, u(y, c) && l.ref === n.ref)
        return _n(l, n, s);
    }
    return n.flags |= 1, l = hn(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function zy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (gu(r, c) && l.ref === n.ref)
        if (vt = !1, n.pendingProps = c = r, _f(l, s))
          l.flags & 131072 && (vt = !0);
        else
          return n.lanes = l.lanes, _n(l, n, s);
    }
    return Vf(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Dy(l, n, u) {
    var c = n.pendingProps, s = c.children, r = (n.stateNode._pendingVisibility & 2) !== 0, y = l !== null ? l.memoizedState : null;
    if (Gf(l, n), c.mode === "hidden" || r) {
      if (n.flags & 128) {
        if (c = y !== null ? y.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return Nf(
          l,
          n,
          c,
          u
        );
      }
      if (u & 536870912)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Io(
          n,
          y !== null ? y.cachePool : null
        ), y !== null ? Fh(n, y) : Gr(), Ih(n);
      else
        return n.lanes = n.childLanes = 536870912, Nf(
          l,
          n,
          y !== null ? y.baseLanes | u : u,
          u
        );
    } else
      y !== null ? (Io(n, y.cachePool), Fh(n, y), Au(), n.memoizedState = null) : (l !== null && Io(n, null), Gr(), Au());
    return nl(l, n, s, u), n.child;
  }
  function Nf(l, n, u, c) {
    var s = Du();
    return s = s === null ? null : { parent: Qt._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Io(n, null), Gr(), Ih(n), l !== null && ke(l, n, c, !0), null;
  }
  function Gf(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(B(284));
      (l === null || l.ref !== u) && (n.flags |= 2097664);
    }
  }
  function Vf(l, n, u, c, s) {
    return Yu(n), u = Tc(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = jr(), l !== null && !vt ? (Po(l, n, s), _n(l, n, s)) : (xe && c && Br(n), n.flags |= 1, nl(l, n, u, s), n.child);
  }
  function Oy(l, n, u, c, s, r) {
    return Yu(n), n.updateQueue = null, u = uy(
      n,
      c,
      u,
      s
    ), _r(l), c = jr(), l !== null && !vt ? (Po(l, n, r), _n(l, n, r)) : (xe && c && Br(n), n.flags |= 1, nl(l, n, u, r), n.child);
  }
  function My(l, n, u, c, s) {
    if (Yu(n), n.stateNode === null) {
      var r = Mn, y = u.contextType;
      typeof y == "object" && y !== null && (r = bl(y)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Sy, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, ys(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? bl(y) : Mn, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (fs(
        n,
        u,
        y,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && Sy.enqueueReplaceState(r, r.state, null), ps(n, c, r, s), Qf(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, g = al(u, v);
      r.props = g;
      var R = r.context, N = u.contextType;
      y = Mn, typeof N == "object" && N !== null && (y = bl(N));
      var _ = u.getDerivedStateFromProps;
      N = typeof _ == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, N || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || R !== y) && Ty(
        n,
        r,
        c,
        y
      ), pa = !1;
      var U = n.memoizedState;
      r.state = U, ps(n, c, r, s), Qf(), R = n.memoizedState, v || U !== R || pa ? (typeof _ == "function" && (fs(
        n,
        u,
        _,
        c
      ), R = n.memoizedState), (g = pa || va(
        n,
        u,
        g,
        c,
        U,
        R,
        y
      )) ? (N || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = R), r.props = c, r.state = R, r.context = y, c = g) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Ei(l, n), y = n.memoizedProps, N = al(u, y), r.props = N, _ = n.pendingProps, U = r.context, R = u.contextType, g = Mn, typeof R == "object" && R !== null && (g = bl(R)), v = u.getDerivedStateFromProps, (R = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== _ || U !== g) && Ty(
        n,
        r,
        c,
        g
      ), pa = !1, U = n.memoizedState, r.state = U, ps(n, c, r, s), Qf();
      var q = n.memoizedState;
      y !== _ || U !== q || pa || l !== null && l.dependencies !== null && hs(l.dependencies) ? (typeof v == "function" && (fs(
        n,
        u,
        v,
        c
      ), q = n.memoizedState), (N = pa || va(
        n,
        u,
        N,
        c,
        U,
        q,
        g
      ) || l !== null && l.dependencies !== null && hs(l.dependencies)) ? (R || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, q, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        q,
        g
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && U === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && U === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = q), r.props = c, r.state = q, r.context = g, c = N) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && U === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && U === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Gf(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Bn(
      n,
      l.child,
      null,
      s
    ), n.child = Bn(
      n,
      null,
      u,
      s
    )) : nl(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = _n(
      l,
      n,
      s
    ), l;
  }
  function U0(l, n, u, c) {
    return Sf(), n.flags |= 256, nl(l, n, u, c), n.child;
  }
  var ss = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vn(l) {
    return { baseLanes: l, cachePool: ny() };
  }
  function ad(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Qa), l;
  }
  function nd(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (Ct.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (xe) {
        if (s ? qn(n) : Au(), xe) {
          var v = _t, g;
          if (g = v) {
            e: {
              for (g = v, v = an; g.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (g = cl(
                  g.nextSibling
                ), g === null) {
                  v = null;
                  break e;
                }
              }
              v = g;
            }
            v !== null ? (n.memoizedState = {
              dehydrated: v,
              treeContext: Un !== null ? { id: Hn, overflow: Cn } : null,
              retryLane: 536870912
            }, g = Lt(
              18,
              null,
              null,
              0
            ), g.stateNode = v, g.return = n, n.child = g, gl = n, _t = null, g = !0) : g = !1;
          }
          g || di(n);
        }
        if (v = n.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return v.data === "$!" ? n.lanes = 16 : n.lanes = 536870912, null;
        un(n);
      }
      return v = c.children, c = c.fallback, s ? (Au(), s = n.mode, v = qu(
        { mode: "hidden", children: v },
        s
      ), c = pt(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, s = n.child, s.memoizedState = Vn(u), s.childLanes = ad(
        l,
        y,
        u
      ), n.memoizedState = ss, c) : (qn(n), Xf(n, v));
    }
    if (g = l.memoizedState, g !== null && (v = g.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (qn(n), n.flags &= -257, n = ud(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Au(), n.child = l.child, n.flags |= 128, n = null) : (Au(), s = c.fallback, v = n.mode, c = qu(
          { mode: "visible", children: c.children },
          v
        ), s = pt(
          s,
          v,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, Bn(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Vn(u), c.childLanes = ad(
          l,
          y,
          u
        ), n.memoizedState = ss, n = s);
      else if (qn(n), v.data === "$!") {
        if (y = v.nextSibling && v.nextSibling.dataset, y) var R = y.dgst;
        y = R, c = Error(B(419)), c.stack = "", c.digest = y, Tf({ value: c, source: null, stack: null }), n = ud(
          l,
          n,
          u
        );
      } else if (vt || ke(l, n, u, !1), y = (u & l.childLanes) !== 0, vt || y) {
        if (y = Ke, y !== null) {
          if (c = u & -u, c & 42) c = 1;
          else
            switch (c) {
              case 2:
                c = 1;
                break;
              case 8:
                c = 4;
                break;
              case 32:
                c = 16;
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
                c = 64;
                break;
              case 268435456:
                c = 134217728;
                break;
              default:
                c = 0;
            }
          if (c = c & (y.suspendedLanes | u) ? 0 : c, c !== 0 && c !== g.retryLane)
            throw g.retryLane = c, On(l, c), Zt(y, l, c), Ry;
        }
        v.data === "$?" || zd(), n = ud(
          l,
          n,
          u
        );
      } else
        v.data === "$?" ? (n.flags |= 128, n.child = l.child, n = Pv.bind(
          null,
          l
        ), v._reactRetry = n, n = null) : (l = g.treeContext, _t = cl(
          v.nextSibling
        ), gl = n, xe = !0, Xa = null, an = !1, l !== null && (Cl[la++] = Hn, Cl[la++] = Cn, Cl[la++] = Un, Hn = l.id, Cn = l.overflow, Un = n), n = Xf(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Au(), s = c.fallback, v = n.mode, g = l.child, R = g.sibling, c = hn(g, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = g.subtreeFlags & 31457280, R !== null ? s = hn(R, s) : (s = pt(
      s,
      v,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, v = l.child.memoizedState, v === null ? v = Vn(u) : (g = v.cachePool, g !== null ? (R = Qt._currentValue, g = g.parent !== R ? { parent: R, pool: R } : g) : g = ny(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: g
    }), s.memoizedState = v, s.childLanes = ad(
      l,
      y,
      u
    ), n.memoizedState = ss, c) : (qn(n), u = l.child, l = u.sibling, u = hn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Xf(l, n) {
    return n = qu(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function qu(l, n) {
    return G0(l, n, 0, null);
  }
  function ud(l, n, u) {
    return Bn(n, l.child, null, u), l = Xf(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function id(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), wl(l.return, n, u);
  }
  function rs(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function Xn(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (nl(l, n, c.children, u), c = Ct.current, c & 2)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && l.flags & 128)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && id(l, u, n);
          else if (l.tag === 19)
            id(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (Ve(Ct, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Wo(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), rs(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Wo(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        rs(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        rs(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function _n(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Di |= n.lanes, !(u & n.childLanes))
      if (l !== null) {
        if (ke(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(B(153));
    if (n.child !== null) {
      for (l = n.child, u = hn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = hn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function _f(l, n) {
    return l.lanes & n ? !0 : (l = l.dependencies, !!(l !== null && hs(l)));
  }
  function ds(l, n, u) {
    switch (n.tag) {
      case 3:
        Pu(n, n.stateNode.containerInfo), Ti(n, Qt, l.memoizedState.cache), Sf();
        break;
      case 27:
      case 5:
        _e(n);
        break;
      case 4:
        Pu(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ti(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (qn(n), n.flags |= 128, null) : u & n.child.childLanes ? nd(l, n, u) : (qn(n), l = _n(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        qn(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (ke(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Xn(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ve(Ct, Ct.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Dy(l, n, u);
      case 24:
        Ti(n, Qt, l.memoizedState.cache);
    }
    return _n(l, n, u);
  }
  function nt(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        vt = !0;
      else {
        if (!_f(l, u) && !(n.flags & 128))
          return vt = !1, ds(
            l,
            n,
            u
          );
        vt = !!(l.flags & 131072);
      }
    else
      vt = !1, xe && n.flags & 1048576 && Jh(n, bf, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            gd(c) ? (l = al(c, l), n.tag = 1, n = My(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Vf(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === tt) {
                n.tag = 11, n = Yf(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Ze) {
                n.tag = 14, n = zc(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = sl(c) || c, Error(B(306, n, ""));
          }
        }
        return n;
      case 0:
        return Vf(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = al(
          c,
          n.pendingProps
        ), My(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Pu(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(B(387));
          var r = n.pendingProps;
          s = n.memoizedState, c = s.element, Ei(l, n), ps(n, r, null, u);
          var y = n.memoizedState;
          if (r = y.cache, Ti(n, Qt, r), r !== s.cache && cd(
            n,
            [Qt],
            u,
            !0
          ), Qf(), r = y.element, s.isDehydrated)
            if (s = {
              element: r,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = U0(
                l,
                n,
                r,
                u
              );
              break e;
            } else if (r !== c) {
              c = tl(
                Error(B(424)),
                n
              ), Tf(c), n = U0(
                l,
                n,
                r,
                u
              );
              break e;
            } else
              for (_t = cl(
                n.stateNode.containerInfo.firstChild
              ), gl = n, xe = !0, Xa = null, an = !0, u = Nr(
                n,
                null,
                r,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Sf(), r === c) {
              n = _n(
                l,
                n,
                u
              );
              break e;
            }
            nl(l, n, r, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Gf(l, n), l === null ? (u = J(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : xe || (u = n.type, l = n.pendingProps, c = Us(
          oa.current
        ).createElement(u), c[yl] = n, c[Il] = l, il(c, u, l), Xt(c), n.stateNode = c) : n.memoizedState = J(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return _e(n), l === null && xe && (c = n.stateNode = Fn(
          n.type,
          n.pendingProps,
          oa.current
        ), gl = n, an = !0, _t = cl(
          c.firstChild
        )), c = n.pendingProps.children, l !== null || xe ? nl(
          l,
          n,
          c,
          u
        ) : n.child = Bn(
          n,
          null,
          c,
          u
        ), Gf(l, n), n.child;
      case 5:
        return l === null && xe && ((s = c = _t) && (c = qi(
          c,
          n.type,
          n.pendingProps,
          an
        ), c !== null ? (n.stateNode = c, gl = n, _t = cl(
          c.firstChild
        ), an = !1, s = !0) : s = !1), s || di(n)), _e(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = r.children, Hs(s, r) ? c = null : y !== null && Hs(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = Tc(
          l,
          n,
          R0,
          null,
          null,
          u
        ), ca._currentValue = s), Gf(l, n), nl(l, n, c, u), n.child;
      case 6:
        return l === null && xe && ((l = u = _t) && (u = Bs(
          u,
          n.pendingProps,
          an
        ), u !== null ? (n.stateNode = u, gl = n, _t = null, l = !0) : l = !1), l || di(n)), null;
      case 13:
        return nd(l, n, u);
      case 4:
        return Pu(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Bn(
          n,
          null,
          c,
          u
        ) : nl(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Yf(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return nl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return nl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return nl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Ti(n, n.type, c.value), nl(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Yu(n), s = bl(s), c = c(s), n.flags |= 1, nl(l, n, c, u), n.child;
      case 14:
        return zc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return zy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Xn(l, n, u);
      case 22:
        return Dy(l, n, u);
      case 24:
        return Yu(n), c = bl(Qt), l === null ? (s = Du(), s === null && (s = Ke, r = ty(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, ys(n), Ti(n, Qt, s)) : (l.lanes & u && (Ei(l, n), ps(n, null, null, u), Qf()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Ti(n, Qt, c)) : (c = r.cache, Ti(n, Qt, c), c !== s.cache && cd(
          n,
          [Qt],
          u,
          !0
        ))), nl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(B(156, n.tag));
  }
  var Uy = Dl(null), Dc = null, jn = null;
  function Ti(l, n, u) {
    Ve(Uy, n._currentValue), n._currentValue = u;
  }
  function Qn(l) {
    l._currentValue = Uy.current, ft(Uy);
  }
  function wl(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function cd(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var g = 0; g < n.length; g++)
            if (v.context === n[g]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), wl(
                r.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(B(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), wl(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function ke(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if (s.flags & 524288) r = !0;
        else if (s.flags & 262144) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(B(387));
        if (y = y.memoizedProps, y !== null) {
          var v = s.type;
          Ul(s.pendingProps.value, y.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === $a.current) {
        if (y = s.alternate, y === null) throw Error(B(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(ca) : l = [ca]);
      }
      s = s.return;
    }
    l !== null && cd(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function hs(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Ul(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Yu(l) {
    Dc = l, jn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function bl(l) {
    return wn(Dc, l);
  }
  function fd(l, n) {
    return Dc === null && Yu(l), wn(l, n);
  }
  function wn(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, jn === null) {
      if (l === null) throw Error(B(308));
      jn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else jn = jn.next = n;
    return u;
  }
  var pa = !1;
  function ys(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ei(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Nu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Gu(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, rt & 2) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = qe(l), Ql(l, null, u), n;
    }
    return gf(l, c, n, u), qe(l);
  }
  function jf(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194176) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Sh(l, u);
    }
  }
  function ms(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var vs = !1;
  function Qf() {
    if (vs) {
      var l = gc;
      if (l !== null) throw l;
    }
  }
  function ps(l, n, u, c) {
    vs = !1;
    var s = l.updateQueue;
    pa = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var g = v, R = g.next;
      g.next = null, y === null ? r = R : y.next = R, y = g;
      var N = l.alternate;
      N !== null && (N = N.updateQueue, v = N.lastBaseUpdate, v !== y && (v === null ? N.firstBaseUpdate = R : v.next = R, N.lastBaseUpdate = g));
    }
    if (r !== null) {
      var _ = s.baseState;
      y = 0, N = R = g = null, v = r;
      do {
        var U = v.lane & -536870913, q = U !== v.lane;
        if (q ? (Ce & U) === U : (c & U) === U) {
          U !== 0 && U === zu && (vs = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = l, re = v;
            U = n;
            var ut = u;
            switch (re.tag) {
              case 1:
                if ($ = re.payload, typeof $ == "function") {
                  _ = $.call(ut, _, U);
                  break e;
                }
                _ = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = re.payload, U = typeof $ == "function" ? $.call(ut, _, U) : $, U == null) break e;
                _ = Te({}, _, U);
                break e;
              case 2:
                pa = !0;
            }
          }
          U = v.callback, U !== null && (l.flags |= 64, q && (l.flags |= 8192), q = s.callbacks, q === null ? s.callbacks = [U] : q.push(U));
        } else
          q = {
            lane: U,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, N === null ? (R = N = q, g = _) : N = N.next = q, y |= U;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          q = v, v = q.next, q.next = null, s.lastBaseUpdate = q, s.shared.pending = null;
        }
      } while (!0);
      N === null && (g = _), s.baseState = g, s.firstBaseUpdate = R, s.lastBaseUpdate = N, r === null && (s.shared.lanes = 0), Di |= y, l.lanes = y, l.memoizedState = _;
    }
  }
  function H0(l, n) {
    if (typeof l != "function")
      throw Error(B(191, l));
    l.call(n);
  }
  function Hy(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        H0(u[l], n);
  }
  function wf(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, y = u.inst;
            c = r(), y.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      Je(n, n.return, v);
    }
  }
  function Ai(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, v = y.destroy;
            if (v !== void 0) {
              y.destroy = void 0, s = n;
              var g = u;
              try {
                v();
              } catch (R) {
                Je(
                  s,
                  g,
                  R
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (R) {
      Je(n, n.return, R);
    }
  }
  function Oc(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Hy(n, u);
      } catch (c) {
        Je(l, l.return, c);
      }
    }
  }
  function gs(l, n, u) {
    u.props = al(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Je(l, n, c);
    }
  }
  function Ri(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        var c = l.stateNode;
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var s = c;
            break;
          default:
            s = c;
        }
        typeof u == "function" ? l.refCleanup = u(s) : u.current = s;
      }
    } catch (r) {
      Je(l, n, r);
    }
  }
  function Ll(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Je(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Je(l, n, s);
        }
      else u.current = null;
  }
  function C0(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      Je(l, l.return, s);
    }
  }
  function x0(l, n, u) {
    try {
      var c = l.stateNode;
      J0(c, l.type, u, n), c[Il] = n;
    } catch (s) {
      Je(l, l.return, s);
    }
  }
  function Cy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4;
  }
  function Vu(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Cy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18; ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function od(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.nodeType === 8 ? u.parentNode.insertBefore(l, n) : u.insertBefore(l, n) : (u.nodeType === 8 ? (n = u.parentNode, n.insertBefore(l, u)) : (n = u, n.appendChild(l)), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Bi));
    else if (c !== 4 && c !== 27 && (l = l.child, l !== null))
      for (od(l, n, u), l = l.sibling; l !== null; )
        od(l, n, u), l = l.sibling;
  }
  function Ne(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && c !== 27 && (l = l.child, l !== null))
      for (Ne(l, n, u), l = l.sibling; l !== null; )
        Ne(l, n, u), l = l.sibling;
  }
  var sn = !1, zt = !1, sd = !1, B0 = typeof WeakSet == "function" ? WeakSet : Set, ul = null, rd = !1;
  function q0(l, n) {
    if (l = l.containerInfo, Yd = Gs, l = Lh(l), Ur(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, v = -1, g = -1, R = 0, N = 0, _ = l, U = null;
            t: for (; ; ) {
              for (var q; _ !== u || s !== 0 && _.nodeType !== 3 || (v = y + s), _ !== r || c !== 0 && _.nodeType !== 3 || (g = y + c), _.nodeType === 3 && (y += _.nodeValue.length), (q = _.firstChild) !== null; )
                U = _, _ = q;
              for (; ; ) {
                if (_ === l) break t;
                if (U === u && ++R === s && (v = y), U === r && ++N === c && (g = y), (q = _.nextSibling) !== null) break;
                _ = U, U = _.parentNode;
              }
              _ = q;
            }
            u = v === -1 || g === -1 ? null : { start: v, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Nd = { focusedElem: l, selectionRange: u }, Gs = !1, ul = n; ul !== null; )
      if (n = ul, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, ul = l;
      else
        for (; ul !== null; ) {
          switch (n = ul, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var $ = al(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    $,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (re) {
                  Je(
                    u,
                    u.return,
                    re
                  );
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  yn(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yn(l);
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
              if (l & 1024) throw Error(B(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, ul = l;
            break;
          }
          ul = n.return;
        }
    return $ = rd, rd = !1, $;
  }
  function xy(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ln(l, u), c & 4 && wf(5, u);
        break;
      case 1:
        if (Ln(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (v) {
              Je(u, u.return, v);
            }
          else {
            var s = al(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              Je(
                u,
                u.return,
                v
              );
            }
          }
        c & 64 && Oc(u), c & 512 && Ri(u, u.return);
        break;
      case 3:
        if (Ln(l, u), c & 64 && (c = u.updateQueue, c !== null)) {
          if (l = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                l = u.child.stateNode;
                break;
              case 1:
                l = u.child.stateNode;
            }
          try {
            Hy(c, l);
          } catch (v) {
            Je(u, u.return, v);
          }
        }
        break;
      case 26:
        Ln(l, u), c & 512 && Ri(u, u.return);
        break;
      case 27:
      case 5:
        Ln(l, u), n === null && c & 4 && C0(u), c & 512 && Ri(u, u.return);
        break;
      case 12:
        Ln(l, u);
        break;
      case 13:
        Ln(l, u), c & 4 && Lf(l, u);
        break;
      case 22:
        if (s = u.memoizedState !== null || sn, !s) {
          n = n !== null && n.memoizedState !== null || zt;
          var r = sn, y = zt;
          sn = s, (zt = n) && !y ? zi(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Ln(l, u), sn = r, zt = y;
        }
        c & 512 && (u.memoizedProps.mode === "manual" ? Ri(u, u.return) : Ll(u, u.return));
        break;
      default:
        Ln(l, u);
    }
  }
  function By(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, By(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && rr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ot = null, ga = !1;
  function Xu(l, n, u) {
    for (u = u.child; u !== null; )
      rn(l, n, u), u = u.sibling;
  }
  function rn(l, n, u) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
      try {
        Tt.onCommitFiberUnmount(Ol, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        zt || Ll(u, n), Xu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        zt || Ll(u, n);
        var c = ot, s = ga;
        for (ot = u.stateNode, Xu(
          l,
          n,
          u
        ), u = u.stateNode, n = u.attributes; n.length; )
          u.removeAttributeNode(n[0]);
        rr(u), ot = c, ga = s;
        break;
      case 5:
        zt || Ll(u, n);
      case 6:
        s = ot;
        var r = ga;
        if (ot = null, Xu(
          l,
          n,
          u
        ), ot = s, ga = r, ot !== null)
          if (ga)
            try {
              l = ot, c = u.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(c) : l.removeChild(c);
            } catch (y) {
              Je(
                u,
                n,
                y
              );
            }
          else
            try {
              ot.removeChild(u.stateNode);
            } catch (y) {
              Je(
                u,
                n,
                y
              );
            }
        break;
      case 18:
        ot !== null && (ga ? (n = ot, u = u.stateNode, n.nodeType === 8 ? xs(
          n.parentNode,
          u
        ) : n.nodeType === 1 && xs(n, u), fo(n)) : xs(ot, u.stateNode));
        break;
      case 4:
        c = ot, s = ga, ot = u.stateNode.containerInfo, ga = !0, Xu(
          l,
          n,
          u
        ), ot = c, ga = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        zt || Ai(2, u, n), zt || Ai(4, u, n), Xu(
          l,
          n,
          u
        );
        break;
      case 1:
        zt || (Ll(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && gs(
          u,
          n,
          c
        )), Xu(
          l,
          n,
          u
        );
        break;
      case 21:
        Xu(
          l,
          n,
          u
        );
        break;
      case 22:
        zt || Ll(u, n), zt = (c = zt) || u.memoizedState !== null, Xu(
          l,
          n,
          u
        ), zt = c;
        break;
      default:
        Xu(
          l,
          n,
          u
        );
    }
  }
  function Lf(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        fo(l);
      } catch (u) {
        Je(n, n.return, u);
      }
  }
  function Y0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new B0()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new B0()), n;
      default:
        throw Error(B(435, l.tag));
    }
  }
  function dd(l, n) {
    var u = Y0(l);
    n.forEach(function(c) {
      var s = Jy.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function ba(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, y = n, v = y;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
            case 5:
              ot = v.stateNode, ga = !1;
              break e;
            case 3:
              ot = v.stateNode.containerInfo, ga = !0;
              break e;
            case 4:
              ot = v.stateNode.containerInfo, ga = !0;
              break e;
          }
          v = v.return;
        }
        if (ot === null) throw Error(B(160));
        rn(r, y, s), ot = null, ga = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        hd(n, l), n = n.sibling;
  }
  var ja = null;
  function hd(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ba(n, l), Sa(l), c & 4 && (Ai(3, l, l.return), wf(3, l), Ai(5, l, l.return));
        break;
      case 1:
        ba(n, l), Sa(l), c & 512 && (zt || u === null || Ll(u, u.return)), c & 64 && sn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = ja;
        if (ba(n, l), Sa(l), c & 512 && (zt || u === null || Ll(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Fi] || r[yl] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), il(r, c, u), r[yl] = l, Xt(r), c = r;
                      break e;
                    case "link":
                      var y = Zu(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var v = 0; v < y.length; v++)
                          if (r = y[v], r.getAttribute("href") === (u.href == null ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), il(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = Zu(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < y.length; v++)
                          if (r = y[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), il(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(B(468, c));
                  }
                  r[yl] = l, Xt(r), c = r;
                }
                l.stateNode = c;
              } else
                Tl(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Ys(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Tl(
              s,
              l.type,
              l.stateNode
            ) : Ys(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && x0(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        if (c & 4 && l.alternate === null) {
          s = l.stateNode, r = l.memoizedProps;
          try {
            for (var g = s.firstChild; g; ) {
              var R = g.nextSibling, N = g.nodeName;
              g[Fi] || N === "HEAD" || N === "BODY" || N === "SCRIPT" || N === "STYLE" || N === "LINK" && g.rel.toLowerCase() === "stylesheet" || s.removeChild(g), g = R;
            }
            for (var _ = l.type, U = s.attributes; U.length; )
              s.removeAttributeNode(U[0]);
            il(s, _, r), s[yl] = l, s[Il] = r;
          } catch ($) {
            Je(l, l.return, $);
          }
        }
      case 5:
        if (ba(n, l), Sa(l), c & 512 && (zt || u === null || Ll(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            zn(s, "");
          } catch ($) {
            Je(l, l.return, $);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, x0(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (sd = !0);
        break;
      case 6:
        if (ba(n, l), Sa(l), c & 4) {
          if (l.stateNode === null)
            throw Error(B(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch ($) {
            Je(l, l.return, $);
          }
        }
        break;
      case 3:
        if (wc = null, s = ja, ja = Vd(n.containerInfo), ba(n, l), ja = s, Sa(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            fo(n.containerInfo);
          } catch ($) {
            Je(l, l.return, $);
          }
        sd && (sd = !1, yd(l));
        break;
      case 4:
        c = ja, ja = Vd(
          l.stateNode.containerInfo
        ), ba(n, l), Sa(l), ja = c;
        break;
      case 12:
        ba(n, l), Sa(l);
        break;
      case 13:
        ba(n, l), Sa(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Ed = se()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, dd(l, c)));
        break;
      case 22:
        if (c & 512 && (zt || u === null || Ll(u, u.return)), g = l.memoizedState !== null, R = u !== null && u.memoizedState !== null, N = sn, _ = zt, sn = N || g, zt = _ || R, ba(n, l), zt = _, sn = N, Sa(l), n = l.stateNode, n._current = l, n._visibility &= -3, n._visibility |= n._pendingVisibility & 2, c & 8192 && (n._visibility = g ? n._visibility & -2 : n._visibility | 1, g && (n = sn || zt, u === null || R || n || Mc(l)), l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
          e: for (u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (u === null) {
                R = u = n;
                try {
                  if (s = R.stateNode, g)
                    r = s.style, typeof r.setProperty == "function" ? r.setProperty(
                      "display",
                      "none",
                      "important"
                    ) : r.display = "none";
                  else {
                    y = R.stateNode, v = R.memoizedProps.style;
                    var q = v != null && v.hasOwnProperty("display") ? v.display : null;
                    y.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch ($) {
                  Je(R, R.return, $);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = g ? "" : R.memoizedProps;
                } catch ($) {
                  Je(R, R.return, $);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, dd(l, u))));
        break;
      case 19:
        ba(n, l), Sa(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, dd(l, c)));
        break;
      case 21:
        break;
      default:
        ba(n, l), Sa(l);
    }
  }
  function Sa(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        if (l.tag !== 27) {
          e: {
            for (var u = l.return; u !== null; ) {
              if (Cy(u)) {
                var c = u;
                break e;
              }
              u = u.return;
            }
            throw Error(B(160));
          }
          switch (c.tag) {
            case 27:
              var s = c.stateNode, r = Vu(l);
              Ne(l, r, s);
              break;
            case 5:
              var y = c.stateNode;
              c.flags & 32 && (zn(y, ""), c.flags &= -33);
              var v = Vu(l);
              Ne(l, v, y);
              break;
            case 3:
            case 4:
              var g = c.stateNode.containerInfo, R = Vu(l);
              od(
                l,
                R,
                g
              );
              break;
            default:
              throw Error(B(161));
          }
        }
      } catch (N) {
        Je(l, l.return, N);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function yd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        yd(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Ln(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        xy(l, n.alternate, n), n = n.sibling;
  }
  function Mc(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ai(4, n, n.return), Mc(n);
          break;
        case 1:
          Ll(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && gs(
            n,
            n.return,
            u
          ), Mc(n);
          break;
        case 26:
        case 27:
        case 5:
          Ll(n, n.return), Mc(n);
          break;
        case 22:
          Ll(n, n.return), n.memoizedState === null && Mc(n);
          break;
        default:
          Mc(n);
      }
      l = l.sibling;
    }
  }
  function zi(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          zi(
            s,
            r,
            u
          ), wf(4, r);
          break;
        case 1:
          if (zi(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (R) {
              Je(c, c.return, R);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var v = c.stateNode;
            try {
              var g = s.shared.hiddenCallbacks;
              if (g !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < g.length; s++)
                  H0(g[s], v);
            } catch (R) {
              Je(c, c.return, R);
            }
          }
          u && y & 64 && Oc(r), Ri(r, r.return);
          break;
        case 26:
        case 27:
        case 5:
          zi(
            s,
            r,
            u
          ), u && c === null && y & 4 && C0(r), Ri(r, r.return);
          break;
        case 12:
          zi(
            s,
            r,
            u
          );
          break;
        case 13:
          zi(
            s,
            r,
            u
          ), u && y & 4 && Lf(s, r);
          break;
        case 22:
          r.memoizedState === null && zi(
            s,
            r,
            u
          ), Ri(r, r.return);
          break;
        default:
          zi(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function md(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Df(u));
  }
  function ze(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Df(l));
  }
  function Zn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        vd(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function vd(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Zn(
          l,
          n,
          u,
          c
        ), s & 2048 && wf(9, n);
        break;
      case 3:
        Zn(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Df(l)));
        break;
      case 12:
        if (s & 2048) {
          Zn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (g) {
            Je(n, n.return, g);
          }
        } else
          Zn(
            l,
            n,
            u,
            c
          );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, n.memoizedState !== null ? r._visibility & 4 ? Zn(
          l,
          n,
          u,
          c
        ) : Hc(l, n) : r._visibility & 4 ? Zn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 4, Uc(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && md(
          n.alternate,
          n
        );
        break;
      case 24:
        Zn(
          l,
          n,
          u,
          c
        ), s & 2048 && ze(n.alternate, n);
        break;
      default:
        Zn(
          l,
          n,
          u,
          c
        );
    }
  }
  function Uc(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, v = u, g = c, R = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Uc(
            r,
            y,
            v,
            g,
            s
          ), wf(8, y);
          break;
        case 23:
          break;
        case 22:
          var N = y.stateNode;
          y.memoizedState !== null ? N._visibility & 4 ? Uc(
            r,
            y,
            v,
            g,
            s
          ) : Hc(
            r,
            y
          ) : (N._visibility |= 4, Uc(
            r,
            y,
            v,
            g,
            s
          )), s && R & 2048 && md(
            y.alternate,
            y
          );
          break;
        case 24:
          Uc(
            r,
            y,
            v,
            g,
            s
          ), s && R & 2048 && ze(y.alternate, y);
          break;
        default:
          Uc(
            r,
            y,
            v,
            g,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Hc(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            Hc(u, c), s & 2048 && md(
              c.alternate,
              c
            );
            break;
          case 24:
            Hc(u, c), s & 2048 && ze(c.alternate, c);
            break;
          default:
            Hc(u, c);
        }
        n = n.sibling;
      }
  }
  var _u = 8192;
  function ju(l) {
    if (l.subtreeFlags & _u)
      for (l = l.child; l !== null; )
        Cc(l), l = l.sibling;
  }
  function Cc(l) {
    switch (l.tag) {
      case 26:
        ju(l), l.flags & _u && l.memoizedState !== null && op(
          ja,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ju(l);
        break;
      case 3:
      case 4:
        var n = ja;
        ja = Vd(l.stateNode.containerInfo), ju(l), ja = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = _u, _u = 16777216, ju(l), _u = n) : ju(l));
        break;
      default:
        ju(l);
    }
  }
  function qy(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function xc(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          ul = c, dn(
            c,
            l
          );
        }
      qy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        wt(l), l = l.sibling;
  }
  function wt(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        xc(l), l.flags & 2048 && Ai(9, l, l.return);
        break;
      case 3:
        xc(l);
        break;
      case 12:
        xc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 4 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -5, pd(l)) : xc(l);
        break;
      default:
        xc(l);
    }
  }
  function pd(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          ul = c, dn(
            c,
            l
          );
        }
      qy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Ai(8, n, n.return), pd(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 4 && (u._visibility &= -5, pd(n));
          break;
        default:
          pd(n);
      }
      l = l.sibling;
    }
  }
  function dn(l, n) {
    for (; ul !== null; ) {
      var u = ul;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ai(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Df(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, ul = c;
      else
        e: for (u = l; ul !== null; ) {
          c = ul;
          var s = c.sibling, r = c.return;
          if (By(c), c === u) {
            ul = null;
            break e;
          }
          if (s !== null) {
            s.return = r, ul = s;
            break e;
          }
          ul = r;
        }
    }
  }
  function N0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(l, n, u, c) {
    return new N0(l, n, u, c);
  }
  function gd(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function hn(l, n) {
    var u = l.alternate;
    return u === null ? (u = Lt(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 31457280, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Qe(l, n) {
    l.flags &= 31457282;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Zf(l, n, u, c, s, r) {
    var y = 0;
    if (c = l, typeof l == "function") gd(l) && (y = 1);
    else if (typeof l == "string")
      y = ia(
        l,
        u,
        dl.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case L:
          return pt(u.children, s, r, n);
        case Dt:
          y = 8, s |= 24;
          break;
        case Ja:
          return l = Lt(12, u, n, s | 2), l.elementType = Ja, l.lanes = r, l;
        case Ot:
          return l = Lt(13, u, n, s), l.elementType = Ot, l.lanes = r, l;
        case Wl:
          return l = Lt(19, u, n, s), l.elementType = Wl, l.lanes = r, l;
        case _l:
          return G0(u, s, r, n);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Nt:
              case $t:
                y = 10;
                break e;
              case Ge:
                y = 9;
                break e;
              case tt:
                y = 11;
                break e;
              case Ze:
                y = 14;
                break e;
              case oe:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            B(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Lt(y, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function pt(l, n, u, c) {
    return l = Lt(7, l, c, n), l.lanes = u, l;
  }
  function G0(l, n, u, c) {
    l = Lt(22, l, c, n), l.elementType = _l, l.lanes = u;
    var s = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var r = s._current;
        if (r === null) throw Error(B(456));
        if (!(s._pendingVisibility & 2)) {
          var y = On(r, 2);
          y !== null && (s._pendingVisibility |= 2, Zt(y, r, 2));
        }
      },
      attach: function() {
        var r = s._current;
        if (r === null) throw Error(B(456));
        if (s._pendingVisibility & 2) {
          var y = On(r, 2);
          y !== null && (s._pendingVisibility &= -3, Zt(y, r, 2));
        }
      }
    };
    return l.stateNode = s, l;
  }
  function bd(l, n, u) {
    return l = Lt(6, l, null, n), l.lanes = u, l;
  }
  function bs(l, n, u) {
    return n = Lt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  function Kn(l) {
    l.flags |= 4;
  }
  function Ta(l, n) {
    if (n.type !== "stylesheet" || n.state.loading & 4)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Gi(n)) {
      if (n = ma.current, n !== null && ((Ce & 4194176) === Ce ? nn !== null : (Ce & 62914560) !== Ce && !(Ce & 536870912) || n !== nn))
        throw vc = qr, Jo;
      l.flags |= 8192;
    }
  }
  function Ss(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Gt() : 536870912, l.lanes |= n, Oi |= n);
  }
  function Bc(l, n) {
    if (!xe)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function st(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 31457280, c |= s.flags & 31457280, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Sd(l, n, u) {
    var c = n.pendingProps;
    switch (Ko(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return st(n), null;
      case 1:
        return st(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Qn(Qt), ei(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (hc(n) ? Kn(n) : l === null || l.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Xa !== null && (Xy(Xa), Xa = null))), st(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Kn(n), u !== null ? (st(n), Ta(n, u)) : (st(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Kn(n), st(n), Ta(n, u)) : (st(n), n.flags &= -16777217) : (l.memoizedProps !== c && Kn(n), st(n), n.flags &= -16777217), null;
      case 27:
        ki(n), u = oa.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(B(166));
            return st(n), null;
          }
          l = dl.current, hc(n) ? $h(n) : (l = Fn(s, c, u), n.stateNode = l, Kn(n));
        }
        return st(n), null;
      case 5:
        if (ki(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(B(166));
            return st(n), null;
          }
          if (l = dl.current, hc(n))
            $h(n);
          else {
            switch (s = Us(
              oa.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[yl] = n, l[Il] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (il(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Kn(n);
          }
        }
        return st(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(B(166));
          if (l = oa.current, hc(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = gl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[yl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || me(l.nodeValue, u)), l || di(n);
          } else
            l = Us(l).createTextNode(
              c
            ), l[yl] = n, n.stateNode = l;
        }
        return st(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = hc(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(B(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(B(317));
              s[yl] = n;
            } else
              Sf(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            st(n), s = !1;
          } else
            Xa !== null && (Xy(Xa), Xa = null), s = !0;
          if (!s)
            return n.flags & 256 ? (un(n), n) : (un(n), null);
        }
        if (un(n), n.flags & 128)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), Ss(n, n.updateQueue), st(n), null;
      case 4:
        return ei(), l === null && jc(n.stateNode.containerInfo), st(n), null;
      case 10:
        return Qn(n.type), st(n), null;
      case 19:
        if (ft(Ct), s = n.memoizedState, s === null) return st(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) Bc(s, !1);
          else {
            if (dt !== 0 || l !== null && l.flags & 128)
              for (l = n.child; l !== null; ) {
                if (r = Wo(l), r !== null) {
                  for (n.flags |= 128, Bc(s, !1), l = r.updateQueue, n.updateQueue = l, Ss(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Qe(u, l), u = u.sibling;
                  return Ve(
                    Ct,
                    Ct.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && se() > Es && (n.flags |= 128, c = !0, Bc(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Wo(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, Ss(n, l), Bc(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !xe)
                return st(n), null;
            } else
              2 * se() - s.renderingStartTime > Es && u !== 536870912 && (n.flags |= 128, c = !0, Bc(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = se(), n.sibling = null, l = Ct.current, Ve(Ct, c ? l & 1 | 2 : l & 1), n) : (st(n), null);
      case 22:
      case 23:
        return un(n), $o(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? u & 536870912 && !(n.flags & 128) && (st(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : st(n), u = n.updateQueue, u !== null && Ss(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && ft(mi), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Qn(Qt), st(n), null;
      case 25:
        return null;
    }
    throw Error(B(156, n.tag));
  }
  function V0(l, n) {
    switch (Ko(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Qn(Qt), ei(), l = n.flags, l & 65536 && !(l & 128) ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ki(n), null;
      case 13:
        if (un(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(B(340));
          Sf();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return ft(Ct), null;
      case 4:
        return ei(), null;
      case 10:
        return Qn(n.type), null;
      case 22:
      case 23:
        return un(n), $o(), l !== null && ft(mi), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Qn(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function X0(l, n) {
    switch (Ko(n), n.tag) {
      case 3:
        Qn(Qt), ei();
        break;
      case 26:
      case 27:
      case 5:
        ki(n);
        break;
      case 4:
        ei();
        break;
      case 13:
        un(n);
        break;
      case 19:
        ft(Ct);
        break;
      case 10:
        Qn(n.type);
        break;
      case 22:
      case 23:
        un(n), $o(), l !== null && ft(mi);
        break;
      case 24:
        Qn(Qt);
    }
  }
  var Td = {
    getCacheForType: function(l) {
      var n = bl(Qt), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, _0 = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, Ke = null, De = null, Ce = 0, Ie = 0, Ea = null, Jn = !1, Kf = !1, Yy = !1, Qu = 0, dt = 0, Di = 0, qc = 0, Ny = 0, Qa = 0, Oi = 0, Ts = null, kn = null, na = !1, Ed = 0, Es = 1 / 0, As = null, wu = null, Ad = !1, Yc = null, Jf = 0, Gy = 0, kf = null, $f = 0, Rd = null;
  function Bl() {
    if (rt & 2 && Ce !== 0)
      return Ce & -Ce;
    if (ae.T !== null) {
      var l = zu;
      return l !== 0 ? l : eo();
    }
    return Mo();
  }
  function Nc() {
    Qa === 0 && (Qa = !(Ce & 536870912) || xe ? Wi() : 536870912);
    var l = ma.current;
    return l !== null && (l.flags |= 32), Qa;
  }
  function Zt(l, n, u) {
    (l === Ke && Ie === 2 || l.cancelPendingCommit !== null) && (Mi(l, 0), $n(
      l,
      Ce,
      Qa,
      !1
    )), Rn(l, u), (!(rt & 2) || l !== Ke) && (l === Ke && (!(rt & 2) && (qc |= u), dt === 4 && $n(
      l,
      Ce,
      Qa,
      !1
    )), Aa(l));
  }
  function Vy(l, n, u) {
    if (rt & 6) throw Error(B(327));
    var c = !u && (n & 60) === 0 && (n & l.expiredLanes) === 0 || Fa(l, n), s = c ? Fv(l, n) : Qy(l, n, !0), r = c;
    do {
      if (s === 0) {
        Kf && !c && $n(l, n, 0, !1);
        break;
      } else if (s === 6)
        $n(
          l,
          n,
          0,
          !Jn
        );
      else {
        if (u = l.current.alternate, r && !Rs(u)) {
          s = Qy(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var v = l;
              s = Ts;
              var g = v.current.memoizedState.isDehydrated;
              if (g && (Mi(v, y).flags |= 256), y = Qy(
                v,
                y,
                !1
              ), y !== 2) {
                if (Yy && !g) {
                  v.errorRecoveryDisabledLanes |= r, qc |= r, s = 4;
                  break e;
                }
                r = kn, kn = s, r !== null && Xy(r);
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Mi(l, 0), $n(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s) {
            case 0:
            case 1:
              throw Error(B(345));
            case 4:
              if ((n & 4194176) === n) {
                $n(
                  c,
                  n,
                  Qa,
                  !Jn
                );
                break e;
              }
              break;
            case 2:
              kn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(B(329));
          }
          if (c.finishedWork = u, c.finishedLanes = n, (n & 62914560) === n && (r = Ed + 300 - se(), 10 < r)) {
            if ($n(
              c,
              n,
              Qa,
              !Jn
            ), An(c, 0) !== 0) break e;
            c.timeoutHandle = za(
              Gc.bind(
                null,
                c,
                u,
                kn,
                As,
                na,
                n,
                Qa,
                qc,
                Oi,
                Jn,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          Gc(
            c,
            u,
            kn,
            As,
            na,
            n,
            Qa,
            qc,
            Oi,
            Jn,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Aa(l);
  }
  function Xy(l) {
    kn === null ? kn = l : kn.push.apply(
      kn,
      l
    );
  }
  function Gc(l, n, u, c, s, r, y, v, g, R, N, _, U) {
    var q = n.subtreeFlags;
    if ((q & 8192 || (q & 16785408) === 16785408) && (Lc = { stylesheets: null, count: 0, unsuspend: fp }, Cc(n), n = $0(), n !== null)) {
      l.cancelPendingCommit = n(
        Ly.bind(
          null,
          l,
          u,
          c,
          s,
          y,
          v,
          g,
          1,
          _,
          U
        )
      ), $n(l, r, y, !R);
      return;
    }
    Ly(
      l,
      u,
      c,
      s,
      y,
      v,
      g,
      N,
      _,
      U
    );
  }
  function Rs(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Ul(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function $n(l, n, u, c) {
    n &= ~Ny, n &= ~qc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Fl(s), y = 1 << r;
      c[r] = -1, s &= ~y;
    }
    u !== 0 && fr(l, u, n);
  }
  function Vc() {
    return rt & 6 ? !0 : (If(0), !1);
  }
  function zs() {
    if (De !== null) {
      if (Ie === 0)
        var l = De.return;
      else
        l = De, jn = Dc = null, es(l), jt = null, yi = 0, l = De;
      for (; l !== null; )
        X0(l.alternate, l), l = l.return;
      De = null;
    }
  }
  function Mi(l, n) {
    l.finishedWork = null, l.finishedLanes = 0;
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Sl(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), zs(), Ke = l, De = u = hn(l.current, null), Ce = n, Ie = 0, Ea = null, Jn = !1, Kf = Fa(l, n), Yy = !1, Oi = Qa = Ny = qc = Di = dt = 0, kn = Ts = null, na = !1, n & 8 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Fl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Qu = n, xr(), u;
  }
  function _y(l, n) {
    he = null, ae.H = ll, n === xn ? (n = hi(), Ie = 3) : n === Jo ? (n = hi(), Ie = 4) : Ie = n === Ry ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ea = n, De === null && (dt = 1, Bu(
      l,
      tl(n, l.current)
    ));
  }
  function jy() {
    var l = ae.H;
    return ae.H = ll, l === null ? ll : l;
  }
  function j0() {
    var l = ae.A;
    return ae.A = Td, l;
  }
  function zd() {
    dt = 4, Jn || (Ce & 4194176) !== Ce && ma.current !== null || (Kf = !0), !(Di & 134217727) && !(qc & 134217727) || Ke === null || $n(
      Ke,
      Ce,
      Qa,
      !1
    );
  }
  function Qy(l, n, u) {
    var c = rt;
    rt |= 2;
    var s = jy(), r = j0();
    (Ke !== l || Ce !== n) && (As = null, Mi(l, n)), n = !1;
    var y = dt;
    e: do
      try {
        if (Ie !== 0 && De !== null) {
          var v = De, g = Ea;
          switch (Ie) {
            case 8:
              zs(), y = 6;
              break e;
            case 3:
            case 2:
            case 6:
              ma.current === null && (n = !0);
              var R = Ie;
              if (Ie = 0, Ea = null, Wf(l, v, g, R), u && Kf) {
                y = 0;
                break e;
              }
              break;
            default:
              R = Ie, Ie = 0, Ea = null, Wf(l, v, g, R);
          }
        }
        Wv(), y = dt;
        break;
      } catch (N) {
        _y(l, N);
      }
    while (!0);
    return n && l.shellSuspendCounter++, jn = Dc = null, rt = c, ae.H = s, ae.A = r, De === null && (Ke = null, Ce = 0, xr()), y;
  }
  function Wv() {
    for (; De !== null; ) Od(De);
  }
  function Fv(l, n) {
    var u = rt;
    rt |= 2;
    var c = jy(), s = j0();
    Ke !== l || Ce !== n ? (As = null, Es = se() + 500, Mi(l, n)) : Kf = Fa(
      l,
      n
    );
    e: do
      try {
        if (Ie !== 0 && De !== null) {
          n = De;
          var r = Ea;
          t: switch (Ie) {
            case 1:
              Ie = 0, Ea = null, Wf(l, n, r, 1);
              break;
            case 2:
              if (T0(r)) {
                Ie = 0, Ea = null, Q0(n);
                break;
              }
              n = function() {
                Ie === 2 && Ke === l && (Ie = 7), Aa(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ie = 7;
              break e;
            case 4:
              Ie = 5;
              break e;
            case 7:
              T0(r) ? (Ie = 0, Ea = null, Q0(n)) : (Ie = 0, Ea = null, Wf(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (De.tag) {
                case 26:
                  y = De.memoizedState;
                case 5:
                case 27:
                  var v = De;
                  if (!y || Gi(y)) {
                    Ie = 0, Ea = null;
                    var g = v.sibling;
                    if (g !== null) De = g;
                    else {
                      var R = v.return;
                      R !== null ? (De = R, Md(R)) : De = null;
                    }
                    break t;
                  }
              }
              Ie = 0, Ea = null, Wf(l, n, r, 5);
              break;
            case 6:
              Ie = 0, Ea = null, Wf(l, n, r, 6);
              break;
            case 8:
              zs(), dt = 6;
              break e;
            default:
              throw Error(B(462));
          }
        }
        Dd();
        break;
      } catch (N) {
        _y(l, N);
      }
    while (!0);
    return jn = Dc = null, ae.H = c, ae.A = s, rt = u, De !== null ? 0 : (Ke = null, Ce = 0, xr(), dt);
  }
  function Dd() {
    for (; De !== null && !F(); )
      Od(De);
  }
  function Od(l) {
    var n = nt(l.alternate, l, Qu);
    l.memoizedProps = l.pendingProps, n === null ? Md(l) : De = n;
  }
  function Q0(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Oy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ce
        );
        break;
      case 11:
        n = Oy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ce
        );
        break;
      case 5:
        es(n);
      default:
        X0(u, n), n = De = Qe(n, Qu), n = nt(u, n, Qu);
    }
    l.memoizedProps = l.pendingProps, n === null ? Md(l) : De = n;
  }
  function Wf(l, n, u, c) {
    jn = Dc = null, es(n), jt = null, yi = 0;
    var s = n.return;
    try {
      if (Si(
        l,
        s,
        n,
        u,
        Ce
      )) {
        dt = 1, Bu(
          l,
          tl(u, l.current)
        ), De = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw De = s, r;
      dt = 1, Bu(
        l,
        tl(u, l.current)
      ), De = null;
      return;
    }
    n.flags & 32768 ? (xe || c === 1 ? l = !0 : Kf || Ce & 536870912 ? l = !1 : (Jn = l = !0, (c === 2 || c === 3 || c === 6) && (c = ma.current, c !== null && c.tag === 13 && (c.flags |= 16384))), wy(n, l)) : Md(n);
  }
  function Md(l) {
    var n = l;
    do {
      if (n.flags & 32768) {
        wy(
          n,
          Jn
        );
        return;
      }
      l = n.return;
      var u = Sd(
        n.alternate,
        n,
        Qu
      );
      if (u !== null) {
        De = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        De = n;
        return;
      }
      De = n = l;
    } while (n !== null);
    dt === 0 && (dt = 5);
  }
  function wy(l, n) {
    do {
      var u = V0(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, De = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        De = l;
        return;
      }
      De = l = u;
    } while (l !== null);
    dt = 6, De = null;
  }
  function Ly(l, n, u, c, s, r, y, v, g, R) {
    var N = ae.T, _ = ce.p;
    try {
      ce.p = 2, ae.T = null, w0(
        l,
        n,
        u,
        c,
        _,
        s,
        r,
        y,
        v,
        g,
        R
      );
    } finally {
      ae.T = N, ce.p = _;
    }
  }
  function w0(l, n, u, c, s, r, y, v) {
    do
      Xc();
    while (Yc !== null);
    if (rt & 6) throw Error(B(327));
    var g = l.finishedWork;
    if (c = l.finishedLanes, g === null) return null;
    if (l.finishedWork = null, l.finishedLanes = 0, g === l.current) throw Error(B(177));
    l.callbackNode = null, l.callbackPriority = 0, l.cancelPendingCommit = null;
    var R = g.lanes | g.childLanes;
    if (R |= Lo, nf(
      l,
      c,
      R,
      r,
      y,
      v
    ), l === Ke && (De = Ke = null, Ce = 0), !(g.subtreeFlags & 10256) && !(g.flags & 10256) || Ad || (Ad = !0, Gy = R, kf = u, ky(hl, function() {
      return Xc(), null;
    })), u = (g.flags & 15990) !== 0, g.subtreeFlags & 15990 || u ? (u = ae.T, ae.T = null, r = ce.p, ce.p = 2, y = rt, rt |= 4, q0(l, g), hd(g, l), Zh(Nd, l.containerInfo), Gs = !!Yd, Nd = Yd = null, l.current = g, xy(l, g.alternate, g), I(), rt = y, ce.p = r, ae.T = u) : l.current = g, Ad ? (Ad = !1, Yc = l, Jf = c) : Zy(l, R), R = l.pendingLanes, R === 0 && (wu = null), Wa(g.stateNode), Aa(l), n !== null)
      for (s = l.onRecoverableError, g = 0; g < n.length; g++)
        R = n[g], s(R.value, {
          componentStack: R.stack
        });
    return Jf & 3 && Xc(), R = l.pendingLanes, c & 4194218 && R & 42 ? l === Rd ? $f++ : ($f = 0, Rd = l) : $f = 0, If(0), null;
  }
  function Zy(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Df(n)));
  }
  function Xc() {
    if (Yc !== null) {
      var l = Yc, n = Gy;
      Gy = 0;
      var u = Oo(Jf), c = ae.T, s = ce.p;
      try {
        if (ce.p = 32 > u ? 32 : u, ae.T = null, Yc === null)
          var r = !1;
        else {
          u = kf, kf = null;
          var y = Yc, v = Jf;
          if (Yc = null, Jf = 0, rt & 6)
            throw Error(B(331));
          var g = rt;
          if (rt |= 4, wt(y.current), vd(y, y.current, v, u), rt = g, If(0, !1), Tt && typeof Tt.onPostCommitFiberRoot == "function")
            try {
              Tt.onPostCommitFiberRoot(Ol, y);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        ce.p = s, ae.T = c, Zy(l, n);
      }
    }
    return !1;
  }
  function Ud(l, n, u) {
    n = tl(u, n), n = on(l.stateNode, n, 2), l = Gu(l, n, 2), l !== null && (Rn(l, 2), Aa(l));
  }
  function Je(l, n, u) {
    if (l.tag === 3)
      Ud(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ud(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (wu === null || !wu.has(c))) {
            l = tl(u, l), u = td(2), c = Gu(n, u, 2), c !== null && (ld(
              u,
              c,
              n,
              l
            ), Rn(c, 2), Aa(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ky(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new _0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (Yy = !0, s.add(u), l = Iv.bind(null, l, n, u), n.then(l, l));
  }
  function Iv(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ke === l && (Ce & u) === u && (dt === 4 || dt === 3 && (Ce & 62914560) === Ce && 300 > se() - Ed ? !(rt & 2) && Mi(l, 0) : Ny |= u, Oi === Ce && (Oi = 0)), Aa(l);
  }
  function L0(l, n) {
    n === 0 && (n = Gt()), l = On(l, n), l !== null && (Rn(l, n), Aa(l));
  }
  function Pv(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), L0(l, u);
  }
  function Jy(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(B(314));
    }
    c !== null && c.delete(n), L0(l, u);
  }
  function ky(l, n) {
    return Tn(l, n);
  }
  var Ff = null, _c = null, Hd = !1, Ui = !1, $y = !1, Hi = 0;
  function Aa(l) {
    l !== _c && l.next === null && (_c === null ? Ff = _c = l : _c = _c.next = l), Ui = !0, Hd || (Hd = !0, Fy(ep));
  }
  function If(l, n) {
    if (!$y && Ui) {
      $y = !0;
      do
        for (var u = !1, c = Ff; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - Fl(42 | l) + 1) - 1, r &= s & ~(y & ~v), r = r & 201326677 ? r & 201326677 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Pf(c, r));
          } else
            r = Ce, r = An(
              c,
              c === Ke ? r : 0
            ), !(r & 3) || Fa(c, r) || (u = !0, Pf(c, r));
          c = c.next;
        }
      while (u);
      $y = !1;
    }
  }
  function ep() {
    Ui = Hd = !1;
    var l = 0;
    Hi !== 0 && (Yl() && (l = Hi), Hi = 0);
    for (var n = se(), u = null, c = Ff; c !== null; ) {
      var s = c.next, r = Ds(c, n);
      r === 0 ? (c.next = null, u === null ? Ff = s : u.next = s, s === null && (_c = u)) : (u = c, (l !== 0 || r & 3) && (Ui = !0)), c = s;
    }
    If(l);
  }
  function Ds(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Fl(r), v = 1 << y, g = s[y];
      g === -1 ? (!(v & u) || v & c) && (s[y] = Do(v, n)) : g <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = Ke, u = Ce, u = An(
      l,
      l === n ? u : 0
    ), c = l.callbackNode, u === 0 || l === n && Ie === 2 || l.cancelPendingCommit !== null)
      return c !== null && c !== null && T(c), l.callbackNode = null, l.callbackPriority = 0;
    if (!(u & 3) || Fa(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && T(c), Oo(u)) {
        case 2:
        case 8:
          u = fe;
          break;
        case 32:
          u = hl;
          break;
        case 268435456:
          u = el;
          break;
        default:
          u = hl;
      }
      return c = Wy.bind(null, l), u = Tn(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && T(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Wy(l, n) {
    var u = l.callbackNode;
    if (Xc() && l.callbackNode !== u)
      return null;
    var c = Ce;
    return c = An(
      l,
      l === Ke ? c : 0
    ), c === 0 ? null : (Vy(l, c, n), Ds(l, se()), l.callbackNode != null && l.callbackNode === u ? Wy.bind(null, l) : null);
  }
  function Pf(l, n) {
    if (Xc()) return null;
    Vy(l, n, !0);
  }
  function Fy(l) {
    lp(function() {
      rt & 6 ? Tn(Fe, l) : l();
    });
  }
  function eo() {
    return Hi === 0 && (Hi = Wi()), Hi;
  }
  function Iy(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : vr("" + l);
  }
  function Ht(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Py(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Iy(
        (s[Il] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Il] || null) ? Iy(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var v = new Sr(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Hi !== 0) {
                  var g = y ? Ht(s, y) : new FormData(s);
                  Cu(
                    u,
                    {
                      pending: !0,
                      data: g,
                      method: s.method,
                      action: r
                    },
                    null,
                    g
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), g = y ? Ht(s, y) : new FormData(s), Cu(
                  u,
                  {
                    pending: !0,
                    data: g,
                    method: s.method,
                    action: r
                  },
                  r,
                  g
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var em = 0; em < Et.length; em++) {
    var tm = Et[em], Ci = tm.toLowerCase(), to = tm[0].toUpperCase() + tm.slice(1);
    ya(
      Ci,
      "on" + to
    );
  }
  ya(b0, "onAnimationEnd"), ya(Cr, "onAnimationIteration"), ya(Qo, "onAnimationStart"), ya("dblclick", "onDoubleClick"), ya("focusin", "onFocus"), ya("focusout", "onBlur"), ya(S0, "onTransitionRun"), ya(Ae, "onTransitionStart"), ya(Q, "onTransitionCancel"), ya(rc, "onTransitionEnd"), Pi("onMouseEnter", ["mouseout", "mouseover"]), Pi("onMouseLeave", ["mouseout", "mouseover"]), Pi("onPointerEnter", ["pointerout", "pointerover"]), Pi("onPointerLeave", ["pointerout", "pointerover"]), li(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), li(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), li("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), li(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), li(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), li(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Wn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Cd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wn)
  );
  function xd(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var v = c[y], g = v.instance, R = v.currentTarget;
            if (v = v.listener, g !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = R;
            try {
              r(s);
            } catch (N) {
              os(N);
            }
            s.currentTarget = null, r = g;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (v = c[y], g = v.instance, R = v.currentTarget, v = v.listener, g !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = R;
            try {
              r(s);
            } catch (N) {
              os(N);
            }
            s.currentTarget = null, r = g;
          }
      }
    }
  }
  function Ue(l, n) {
    var u = n[or];
    u === void 0 && (u = n[or] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Bd(n, l, 2, !1), u.add(c));
  }
  function Os(l, n, u) {
    var c = 0;
    n && (c |= 4), Bd(
      u,
      l,
      c,
      n
    );
  }
  var Ra = "_reactListening" + Math.random().toString(36).slice(2);
  function jc(l) {
    if (!l[Ra]) {
      l[Ra] = !0, Eh.forEach(function(u) {
        u !== "selectionchange" && (Cd.has(u) || Os(u, !1, l), Os(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ra] || (n[Ra] = !0, Os("selectionchange", !1, n));
    }
  }
  function Bd(l, n, u, c) {
    switch (ev(n)) {
      case 2:
        var s = I0;
        break;
      case 8:
        s = P0;
        break;
      default:
        s = jd;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !df || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Ms(l, n, u, c, s) {
    var r = c;
    if (!(n & 1) && !(n & 2) && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var v = c.stateNode.containerInfo;
          if (v === s || v.nodeType === 8 && v.parentNode === s)
            break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var g = y.tag;
              if ((g === 3 || g === 4) && (g = y.stateNode.containerInfo, g === s || g.nodeType === 8 && g.parentNode === s))
                return;
              y = y.return;
            }
          for (; v !== null; ) {
            if (y = mu(v), y === null) return;
            if (g = y.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              c = r = y;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    sf(function() {
      var R = r, N = xh(u), _ = [];
      e: {
        var U = wo.get(l);
        if (U !== void 0) {
          var q = Sr, $ = l;
          switch (l) {
            case "keypress":
              if (Co(u) === 0) break e;
            case "keydown":
            case "keyup":
              q = Rr;
              break;
            case "focusin":
              $ = "focus", q = qh;
              break;
            case "focusout":
              $ = "blur", q = qh;
              break;
            case "beforeblur":
            case "afterblur":
              q = qh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = n0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = Kv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = zr;
              break;
            case b0:
            case Cr:
            case Qo:
              q = u0;
              break;
            case rc:
              q = Nh;
              break;
            case "scroll":
            case "scrollend":
              q = Lv;
              break;
            case "wheel":
              q = d0;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = c0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = vl;
              break;
            case "toggle":
            case "beforetoggle":
              q = pu;
          }
          var re = (n & 4) !== 0, ut = !re && (l === "scroll" || l === "scrollend"), z = re ? U !== null ? U + "Capture" : null : U;
          re = [];
          for (var A = R, D; A !== null; ) {
            var X = A;
            if (D = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || D === null || z === null || (X = rf(A, z), X != null && re.push(
              xi(A, X, D)
            )), ut) break;
            A = A.return;
          }
          0 < re.length && (U = new q(
            U,
            $,
            null,
            u,
            N
          ), _.push({ event: U, listeners: re }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (U = l === "mouseover" || l === "pointerover", q = l === "mouseout" || l === "pointerout", U && u !== Ch && ($ = u.relatedTarget || u.fromElement) && (mu($) || $[yu]))
            break e;
          if ((q || U) && (U = N.window === N ? N : (U = N.ownerDocument) ? U.defaultView || U.parentWindow : window, q ? ($ = u.relatedTarget || u.toElement, q = R, $ = $ ? mu($) : null, $ !== null && (ut = w($), re = $.tag, $ !== ut || re !== 5 && re !== 27 && re !== 6) && ($ = null)) : (q = null, $ = R), q !== $)) {
            if (re = n0, X = "onMouseLeave", z = "onMouseEnter", A = "mouse", (l === "pointerout" || l === "pointerover") && (re = vl, X = "onPointerLeave", z = "onPointerEnter", A = "pointer"), ut = q == null ? U : uf(q), D = $ == null ? U : uf($), U = new re(
              X,
              A + "leave",
              q,
              u,
              N
            ), U.target = ut, U.relatedTarget = D, X = null, mu(N) === R && (re = new re(
              z,
              A + "enter",
              $,
              u,
              N
            ), re.target = D, re.relatedTarget = ut, X = re), ut = X, q && $)
              t: {
                for (re = q, z = $, A = 0, D = re; D; D = Qc(D))
                  A++;
                for (D = 0, X = z; X; X = Qc(X))
                  D++;
                for (; 0 < A - D; )
                  re = Qc(re), A--;
                for (; 0 < D - A; )
                  z = Qc(z), D--;
                for (; A--; ) {
                  if (re === z || z !== null && re === z.alternate)
                    break t;
                  re = Qc(re), z = Qc(z);
                }
                re = null;
              }
            else re = null;
            q !== null && Z0(
              _,
              U,
              q,
              re,
              !1
            ), $ !== null && ut !== null && Z0(
              _,
              ut,
              $,
              re,
              !0
            );
          }
        }
        e: {
          if (U = R ? uf(R) : window, q = U.nodeName && U.nodeName.toLowerCase(), q === "select" || q === "input" && U.type === "file")
            var W = vf;
          else if (ci(U))
            if (pf)
              W = pl;
            else {
              W = v0;
              var pe = m0;
            }
          else
            q = U.nodeName, !q || q.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? R && lc(R.elementType) && (W = vf) : W = p0;
          if (W && (W = W(l, R))) {
            fi(
              _,
              W,
              u,
              N
            );
            break e;
          }
          pe && pe(l, U, R), l === "focusout" && R && U.type === "number" && R.memoizedProps.value != null && Mh(U, "number", U.value);
        }
        switch (pe = R ? uf(R) : window, l) {
          case "focusin":
            (ci(pe) || pe.contentEditable === "true") && (ha = pe, Hr = R, Ga = null);
            break;
          case "focusout":
            Ga = Hr = ha = null;
            break;
          case "mousedown":
            ln = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ln = !1, jo(_, u, N);
            break;
          case "selectionchange":
            if (Kh) break;
          case "keydown":
          case "keyup":
            jo(_, u, N);
        }
        var te;
        if (ic)
          e: {
            switch (l) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
        else
          Na ? Yo(l, u) && (ie = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ie = "onCompositionStart");
        ie && (Xh && u.locale !== "ko" && (Na || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Na && (te = br()) : (vu = N, Ml = "value" in vu ? vu.value : vu.textContent, Na = !0)), pe = ql(R, ie), 0 < pe.length && (ie = new Er(
          ie,
          l,
          null,
          u,
          N
        ), _.push({ event: ie, listeners: pe }), te ? ie.data = te : (te = ea(u), te !== null && (ie.data = te)))), (te = Vh ? h0(l, u) : _h(l, u)) && (ie = ql(R, "onBeforeInput"), 0 < ie.length && (pe = new Er(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          N
        ), _.push({
          event: pe,
          listeners: ie
        }), pe.data = te)), Py(
          _,
          l,
          R,
          u,
          N
        );
      }
      xd(_, n);
    });
  }
  function xi(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function ql(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = rf(l, u), s != null && c.unshift(
        xi(l, s, r)
      ), s = rf(l, n), s != null && c.push(
        xi(l, s, r)
      )), l = l.return;
    }
    return c;
  }
  function Qc(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Z0(l, n, u, c, s) {
    for (var r = n._reactName, y = []; u !== null && u !== c; ) {
      var v = u, g = v.alternate, R = v.stateNode;
      if (v = v.tag, g !== null && g === c) break;
      v !== 5 && v !== 26 && v !== 27 || R === null || (g = R, s ? (R = rf(u, r), R != null && y.unshift(
        xi(u, R, g)
      )) : s || (R = rf(u, r), R != null && y.push(
        xi(u, R, g)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var K0 = /\r\n?/g, tp = /\u0000|\uFFFD/g;
  function H(l) {
    return (typeof l == "string" ? l : "" + l).replace(K0, `
`).replace(tp, "");
  }
  function me(l, n) {
    return n = H(n), H(l) === n;
  }
  function Bi() {
  }
  function we(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || zn(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && zn(l, "" + c);
        break;
      case "className":
        ff(l, "class", c);
        break;
      case "tabIndex":
        ff(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ff(l, u, c);
        break;
      case "style":
        Hh(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          ff(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = vr("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && we(l, n, "name", s.name, s, null), we(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), we(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), we(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (we(l, n, "encType", s.encType, s, null), we(l, n, "method", s.method, s, null), we(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = vr("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Bi);
        break;
      case "onScroll":
        c != null && Ue("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ue("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(B(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(B(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
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
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = vr("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
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
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ue("beforetoggle", l), Ue("toggle", l), ec(l, "popover", c);
        break;
      case "xlinkActuate":
        sa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        sa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        sa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        sa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        sa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        sa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        sa(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        sa(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        sa(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        ec(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = l0.get(u) || u, ec(l, u, c));
    }
  }
  function qd(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Hh(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(B(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(B(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? zn(l, c) : (typeof c == "number" || typeof c == "bigint") && zn(l, "" + c);
        break;
      case "onScroll":
        c != null && Ue("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ue("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Bi);
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
        if (!Ah.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Il] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : ec(l, u, c);
          }
    }
  }
  function il(l, n, u) {
    switch (n) {
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
        Ue("error", l), Ue("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(B(137, n));
                default:
                  we(l, n, r, y, u, null);
              }
          }
        s && we(l, n, "srcSet", u.srcSet, u, null), c && we(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ue("invalid", l);
        var v = r = y = s = null, g = null, R = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var N = u[c];
            if (N != null)
              switch (c) {
                case "name":
                  s = N;
                  break;
                case "type":
                  y = N;
                  break;
                case "checked":
                  g = N;
                  break;
                case "defaultChecked":
                  R = N;
                  break;
                case "value":
                  r = N;
                  break;
                case "defaultValue":
                  v = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(B(137, n));
                  break;
                default:
                  we(l, n, c, N, u, null);
              }
          }
        Oh(
          l,
          r,
          v,
          g,
          R,
          y,
          s,
          !1
        ), hr(l);
        return;
      case "select":
        Ue("invalid", l), c = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                y = v;
                break;
              case "multiple":
                c = v;
              default:
                we(l, n, s, v, u, null);
            }
        n = r, u = y, l.multiple = !!c, n != null ? tc(l, !!c, n, !1) : u != null && tc(l, !!c, u, !0);
        return;
      case "textarea":
        Ue("invalid", l), r = s = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (v = u[y], v != null))
            switch (y) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(B(91));
                break;
              default:
                we(l, n, y, v, u, null);
            }
        Ho(l, c, s, r), hr(l);
        return;
      case "option":
        for (g in u)
          if (u.hasOwnProperty(g) && (c = u[g], c != null))
            switch (g) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                we(l, n, g, c, u, null);
            }
        return;
      case "dialog":
        Ue("cancel", l), Ue("close", l);
        break;
      case "iframe":
      case "object":
        Ue("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Wn.length; c++)
          Ue(Wn[c], l);
        break;
      case "image":
        Ue("error", l), Ue("load", l);
        break;
      case "details":
        Ue("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ue("error", l), Ue("load", l);
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
        for (R in u)
          if (u.hasOwnProperty(R) && (c = u[R], c != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(B(137, n));
              default:
                we(l, n, R, c, u, null);
            }
        return;
      default:
        if (lc(n)) {
          for (N in u)
            u.hasOwnProperty(N) && (c = u[N], c !== void 0 && qd(
              l,
              n,
              N,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && we(l, n, v, c, u, null));
  }
  function J0(l, n, u, c) {
    switch (n) {
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
        var s = null, r = null, y = null, v = null, g = null, R = null, N = null;
        for (q in u) {
          var _ = u[q];
          if (u.hasOwnProperty(q) && _ != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = _;
              default:
                c.hasOwnProperty(q) || we(l, n, q, null, c, _);
            }
        }
        for (var U in c) {
          var q = c[U];
          if (_ = u[U], c.hasOwnProperty(U) && (q != null || _ != null))
            switch (U) {
              case "type":
                r = q;
                break;
              case "name":
                s = q;
                break;
              case "checked":
                R = q;
                break;
              case "defaultChecked":
                N = q;
                break;
              case "value":
                y = q;
                break;
              case "defaultValue":
                v = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(B(137, n));
                break;
              default:
                q !== _ && we(
                  l,
                  n,
                  U,
                  q,
                  c,
                  _
                );
            }
        }
        yr(
          l,
          y,
          v,
          g,
          R,
          N,
          r,
          s
        );
        return;
      case "select":
        q = y = v = U = null;
        for (r in u)
          if (g = u[r], u.hasOwnProperty(r) && g != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                q = g;
              default:
                c.hasOwnProperty(r) || we(
                  l,
                  n,
                  r,
                  null,
                  c,
                  g
                );
            }
        for (s in c)
          if (r = c[s], g = u[s], c.hasOwnProperty(s) && (r != null || g != null))
            switch (s) {
              case "value":
                U = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== g && we(
                  l,
                  n,
                  s,
                  r,
                  c,
                  g
                );
            }
        n = v, u = y, c = q, U != null ? tc(l, !!u, U, !1) : !!c != !!u && (n != null ? tc(l, !!u, n, !0) : tc(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        q = U = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                we(l, n, v, null, c, s);
            }
        for (y in c)
          if (s = c[y], r = u[y], c.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                U = s;
                break;
              case "defaultValue":
                q = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(B(91));
                break;
              default:
                s !== r && we(l, n, y, s, c, r);
            }
        mr(l, U, q);
        return;
      case "option":
        for (var $ in u)
          if (U = u[$], u.hasOwnProperty($) && U != null && !c.hasOwnProperty($))
            switch ($) {
              case "selected":
                l.selected = !1;
                break;
              default:
                we(
                  l,
                  n,
                  $,
                  null,
                  c,
                  U
                );
            }
        for (g in c)
          if (U = c[g], q = u[g], c.hasOwnProperty(g) && U !== q && (U != null || q != null))
            switch (g) {
              case "selected":
                l.selected = U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                we(
                  l,
                  n,
                  g,
                  U,
                  c,
                  q
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
        for (var re in u)
          U = u[re], u.hasOwnProperty(re) && U != null && !c.hasOwnProperty(re) && we(l, n, re, null, c, U);
        for (R in c)
          if (U = c[R], q = u[R], c.hasOwnProperty(R) && U !== q && (U != null || q != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(B(137, n));
                break;
              default:
                we(
                  l,
                  n,
                  R,
                  U,
                  c,
                  q
                );
            }
        return;
      default:
        if (lc(n)) {
          for (var ut in u)
            U = u[ut], u.hasOwnProperty(ut) && U !== void 0 && !c.hasOwnProperty(ut) && qd(
              l,
              n,
              ut,
              void 0,
              c,
              U
            );
          for (N in c)
            U = c[N], q = u[N], !c.hasOwnProperty(N) || U === q || U === void 0 && q === void 0 || qd(
              l,
              n,
              N,
              U,
              c,
              q
            );
          return;
        }
    }
    for (var z in u)
      U = u[z], u.hasOwnProperty(z) && U != null && !c.hasOwnProperty(z) && we(l, n, z, null, c, U);
    for (_ in c)
      U = c[_], q = u[_], !c.hasOwnProperty(_) || U === q || U == null && q == null || we(l, n, _, U, c, q);
  }
  var Yd = null, Nd = null;
  function Us(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Gd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lm(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Hs(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Cs = null;
  function Yl() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Cs ? !1 : (Cs = l, !0) : (Cs = null, !1);
  }
  var za = typeof setTimeout == "function" ? setTimeout : void 0, Sl = typeof clearTimeout == "function" ? clearTimeout : void 0, Pe = typeof Promise == "function" ? Promise : void 0, lp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pe < "u" ? function(l) {
    return Pe.resolve(null).then(l).catch(am);
  } : za;
  function am(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function xs(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (c === 0) {
            l.removeChild(s), fo(n);
            return;
          }
          c--;
        } else u !== "$" && u !== "$?" && u !== "$!" || c++;
      u = s;
    } while (u);
    fo(n);
  }
  function yn(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yn(u), rr(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function qi(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[Fi])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = cl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Bs(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = cl(l.nextSibling), l === null)) return null;
    return l;
  }
  function cl(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  function qs(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Fn(l, n, u) {
    switch (n = Us(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(B(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(B(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(B(454));
        return l;
      default:
        throw Error(B(451));
    }
  }
  var ua = /* @__PURE__ */ new Map(), k0 = /* @__PURE__ */ new Set();
  function Vd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.ownerDocument;
  }
  var Lu = ce.d;
  ce.d = {
    f: In,
    r: ap,
    D: lo,
    C: np,
    L: nm,
    m: up,
    X: ao,
    S: ip,
    M: Nl
  };
  function In() {
    var l = Lu.f(), n = Vc();
    return l || n;
  }
  function ap(l) {
    var n = Ii(l);
    n !== null && n.tag === 5 && n.type === "form" ? dy(n) : Lu.r(l);
  }
  var Yi = typeof document > "u" ? null : document;
  function Xd(l, n, u) {
    var c = Yi;
    if (c && typeof n == "string" && n) {
      var s = ra(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), k0.has(s) || (k0.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), il(n, "link", l), Xt(n), c.head.appendChild(n)));
    }
  }
  function lo(l) {
    Lu.D(l), Xd("dns-prefetch", l, null);
  }
  function np(l, n) {
    Lu.C(l, n), Xd("preconnect", l, n);
  }
  function nm(l, n, u) {
    Lu.L(l, n, u);
    var c = Yi;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + ra(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + ra(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + ra(
        u.imageSizes
      ) + '"]')) : s += '[href="' + ra(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Zl(l);
          break;
        case "script":
          r = no(l);
      }
      ua.has(r) || (l = Te(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), ua.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(Kl(r)) || n === "script" && c.querySelector(Ni(r)) || (n = c.createElement("link"), il(n, "link", l), Xt(n), c.head.appendChild(n)));
    }
  }
  function up(l, n) {
    Lu.m(l, n);
    var u = Yi;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + ra(c) + '"][href="' + ra(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = no(l);
      }
      if (!ua.has(r) && (l = Te({ rel: "modulepreload", href: l }, n), ua.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Ni(r)))
              return;
        }
        c = u.createElement("link"), il(c, "link", l), Xt(c), u.head.appendChild(c);
      }
    }
  }
  function ip(l, n, u) {
    Lu.S(l, n, u);
    var c = Yi;
    if (c && l) {
      var s = Ia(c).hoistableStyles, r = Zl(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var v = { loading: 0, preload: null };
        if (y = c.querySelector(
          Kl(r)
        ))
          v.loading = 5;
        else {
          l = Te(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = ua.get(r)) && wa(l, u);
          var g = y = c.createElement("link");
          Xt(g), il(g, "link", l), g._p = new Promise(function(R, N) {
            g.onload = R, g.onerror = N;
          }), g.addEventListener("load", function() {
            v.loading |= 1;
          }), g.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Da(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: v
        }, s.set(r, y);
      }
    }
  }
  function ao(l, n) {
    Lu.X(l, n);
    var u = Yi;
    if (u && l) {
      var c = Ia(u).hoistableScripts, s = no(l), r = c.get(s);
      r || (r = u.querySelector(Ni(s)), r || (l = Te({ src: l, async: !0 }, n), (n = ua.get(s)) && mn(l, n), r = u.createElement("script"), Xt(r), il(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Nl(l, n) {
    Lu.M(l, n);
    var u = Yi;
    if (u && l) {
      var c = Ia(u).hoistableScripts, s = no(l), r = c.get(s);
      r || (r = u.querySelector(Ni(s)), r || (l = Te({ src: l, async: !0, type: "module" }, n), (n = ua.get(s)) && mn(l, n), r = u.createElement("script"), Xt(r), il(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function J(l, n, u, c) {
    var s = (s = oa.current) ? Vd(s) : null;
    if (!s) throw Error(B(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Zl(u.href), u = Ia(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Zl(u.href);
          var r = Ia(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            Kl(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), ua.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ua.set(l, u), r || cp(
            s,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(B(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(B(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = no(u), u = Ia(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(B(444, l));
    }
  }
  function Zl(l) {
    return 'href="' + ra(l) + '"';
  }
  function Kl(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Gl(l) {
    return Te({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function cp(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), il(n, "link", u), Xt(n), l.head.appendChild(n));
  }
  function no(l) {
    return '[src="' + ra(l) + '"]';
  }
  function Ni(l) {
    return "script[async]" + l;
  }
  function Ys(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + ra(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Xt(c), c;
          var s = Te({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Xt(c), il(c, "style", s), Da(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Zl(u.href);
          var r = l.querySelector(
            Kl(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Xt(r), r;
          c = Gl(u), (s = ua.get(s)) && wa(c, s), r = (l.ownerDocument || l).createElement("link"), Xt(r);
          var y = r;
          return y._p = new Promise(function(v, g) {
            y.onload = v, y.onerror = g;
          }), il(r, "link", c), n.state.loading |= 4, Da(r, u.precedence, l), n.instance = r;
        case "script":
          return r = no(u.src), (s = l.querySelector(
            Ni(r)
          )) ? (n.instance = s, Xt(s), s) : (c = u, (s = ua.get(r)) && (c = Te({}, u), mn(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Xt(s), il(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(B(443, n.type));
      }
    else
      n.type === "stylesheet" && !(n.state.loading & 4) && (c = n.instance, n.state.loading |= 4, Da(c, u.precedence, l));
    return n.instance;
  }
  function Da(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, y = 0; y < c.length; y++) {
      var v = c[y];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function wa(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function mn(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var wc = null;
  function Zu(l, n, u) {
    if (wc === null) {
      var c = /* @__PURE__ */ new Map(), s = wc = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = wc, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Fi] || r[yl] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var v = c.get(y);
        v ? v.push(r) : c.set(y, [r]);
      }
    }
    return c;
  }
  function Tl(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function ia(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Gi(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var Lc = null;
  function fp() {
  }
  function op(l, n, u) {
    if (Lc === null) throw Error(B(475));
    var c = Lc;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var s = Zl(u.href), r = l.querySelector(
          Kl(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Vi.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Xt(r);
          return;
        }
        r = l.ownerDocument || l, u = Gl(u), (s = ua.get(s)) && wa(u, s), r = r.createElement("link"), Xt(r);
        var y = r;
        y._p = new Promise(function(v, g) {
          y.onload = v, y.onerror = g;
        }), il(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && !(n.state.loading & 3) && (c.count++, n = Vi.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function $0() {
    if (Lc === null) throw Error(B(475));
    var l = Lc;
    return l.stylesheets && l.count === 0 && Ku(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Ku(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Vi() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ku(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Ns = null;
  function Ku(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Ns = /* @__PURE__ */ new Map(), n.forEach(um, l), Ns = null, Vi.call(l));
  }
  function um(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Ns.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Ns.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || c, r === c && u.set(null, s), u.set(y, s), this.count++, c = Vi.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var ca = {
    $$typeof: $t,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0
  };
  function sp(l, n, u, c, s, r, y, v) {
    this.tag = 1, this.containerInfo = l, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.hiddenUpdates = du(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function W0(l, n, u, c, s, r, y, v, g, R, N, _) {
    return l = new sp(
      l,
      n,
      u,
      y,
      v,
      g,
      R,
      _
    ), n = 1, r === !0 && (n |= 24), r = Lt(3, null, null, n), l.current = r, r.stateNode = l, n = ty(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, ys(r), l;
  }
  function im(l) {
    return l ? (l = Mn, l) : Mn;
  }
  function cm(l, n, u, c, s, r) {
    s = im(s), c.context === null ? c.context = s : c.pendingContext = s, c = Nu(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Gu(l, c, n), u !== null && (Zt(u, l, n), jf(u, l, n));
  }
  function F0(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function _d(l, n) {
    F0(l, n), (l = l.alternate) && F0(l, n);
  }
  function fm(l) {
    if (l.tag === 13) {
      var n = On(l, 67108864);
      n !== null && Zt(n, l, 67108864), _d(l, 67108864);
    }
  }
  var Gs = !0;
  function I0(l, n, u, c) {
    var s = ae.T;
    ae.T = null;
    var r = ce.p;
    try {
      ce.p = 2, jd(l, n, u, c);
    } finally {
      ce.p = r, ae.T = s;
    }
  }
  function P0(l, n, u, c) {
    var s = ae.T;
    ae.T = null;
    var r = ce.p;
    try {
      ce.p = 8, jd(l, n, u, c);
    } finally {
      ce.p = r, ae.T = s;
    }
  }
  function jd(l, n, u, c) {
    if (Gs) {
      var s = Qd(c);
      if (s === null)
        Ms(
          l,
          n,
          c,
          Vs,
          u
        ), sm(l, c);
      else if (rp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (sm(l, c), n & 4 && -1 < om.indexOf(l)) {
        for (; s !== null; ) {
          var r = Ii(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = ru(r.pendingLanes);
                  if (y !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; y; ) {
                      var g = 1 << 31 - Fl(y);
                      v.entanglements[1] |= g, y &= ~g;
                    }
                    Aa(r), !(rt & 6) && (Es = se() + 500, If(0));
                  }
                }
                break;
              case 13:
                v = On(r, 2), v !== null && Zt(v, r, 2), Vc(), _d(r, 2);
            }
          if (r = Qd(c), r === null && Ms(
            l,
            n,
            c,
            Vs,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Ms(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Qd(l) {
    return l = xh(l), wd(l);
  }
  var Vs = null;
  function wd(l) {
    if (Vs = null, l = mu(l), l !== null) {
      var n = w(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = ne(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Vs = l, null;
  }
  function ev(l) {
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
        switch (Pt()) {
          case Fe:
            return 2;
          case fe:
            return 8;
          case hl:
          case qa:
            return 32;
          case el:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ld = !1, Xi = null, _i = null, Ju = null, ji = /* @__PURE__ */ new Map(), Qi = /* @__PURE__ */ new Map(), Oa = [], om = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sm(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Xi = null;
        break;
      case "dragenter":
      case "dragleave":
        _i = null;
        break;
      case "mouseover":
      case "mouseout":
        Ju = null;
        break;
      case "pointerover":
      case "pointerout":
        ji.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qi.delete(n.pointerId);
    }
  }
  function uo(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Ii(n), n !== null && fm(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function rp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Xi = uo(
          Xi,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return _i = uo(
          _i,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Ju = uo(
          Ju,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return ji.set(
          r,
          uo(
            ji.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Qi.set(
          r,
          uo(
            Qi.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function tv(l) {
    var n = mu(l.target);
    if (n !== null) {
      var u = w(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = ne(u), n !== null) {
            l.blockedOn = n, hu(l.priority, function() {
              if (u.tag === 13) {
                var c = Bl(), s = On(u, c);
                s !== null && Zt(s, u, c), _d(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Zd(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Qd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ch = c, u.target.dispatchEvent(c), Ch = null;
      } else
        return n = Ii(u), n !== null && fm(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function rm(l, n, u) {
    Zd(l) && u.delete(n);
  }
  function io() {
    Ld = !1, Xi !== null && Zd(Xi) && (Xi = null), _i !== null && Zd(_i) && (_i = null), Ju !== null && Zd(Ju) && (Ju = null), ji.forEach(rm), Qi.forEach(rm);
  }
  function co(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Ld || (Ld = !0, j.unstable_scheduleCallback(
      j.unstable_NormalPriority,
      io
    )));
  }
  var Xs = null;
  function dm(l) {
    Xs !== l && (Xs = l, j.unstable_scheduleCallback(
      j.unstable_NormalPriority,
      function() {
        Xs === l && (Xs = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (wd(c || u) === null)
              continue;
            break;
          }
          var r = Ii(u);
          r !== null && (l.splice(n, 3), n -= 3, Cu(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function fo(l) {
    function n(g) {
      return co(g, l);
    }
    Xi !== null && co(Xi, l), _i !== null && co(_i, l), Ju !== null && co(Ju, l), ji.forEach(n), Qi.forEach(n);
    for (var u = 0; u < Oa.length; u++) {
      var c = Oa[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Oa.length && (u = Oa[0], u.blockedOn === null); )
      tv(u), u.blockedOn === null && Oa.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], y = s[Il] || null;
        if (typeof r == "function")
          y || dm(u);
        else if (y) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[Il] || null)
              v = y.formAction;
            else if (wd(s) !== null) continue;
          } else v = y.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), dm(u);
        }
      }
  }
  function hm(l) {
    this._internalRoot = l;
  }
  Zc.prototype.render = hm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(B(409));
    var u = n.current, c = Bl();
    cm(u, c, l, n, null, null);
  }, Zc.prototype.unmount = hm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      l.tag === 0 && Xc(), cm(l.current, 2, null, l, null, null), Vc(), n[yu] = null;
    }
  };
  function Zc(l) {
    this._internalRoot = l;
  }
  Zc.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Mo();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Oa.length && n !== 0 && n < Oa[u].priority; u++) ;
      Oa.splice(u, 0, l), u === 0 && tv(l);
    }
  };
  var ym = yt.version;
  if (ym !== "19.0.0")
    throw Error(
      B(
        527,
        ym,
        "19.0.0"
      )
    );
  ce.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(B(188)) : (l = Object.keys(l).join(","), Error(B(268, l)));
    return l = Re(n), l = l !== null ? Ee(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var oo = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ae,
    findFiberByHostInstance: mu,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kd.isDisabled && Kd.supportsFiber)
      try {
        Ol = Kd.inject(
          oo
        ), Tt = Kd;
      } catch {
      }
  }
  return Fm.createRoot = function(l, n) {
    if (!We(l)) throw Error(B(299));
    var u = !1, c = "", s = M0, r = fn, y = Ey, v = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (v = n.unstable_transitionCallbacks)), n = W0(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      y,
      v,
      null
    ), l[yu] = n.current, jc(
      l.nodeType === 8 ? l.parentNode : l
    ), new hm(n);
  }, Fm.hydrateRoot = function(l, n, u) {
    if (!We(l)) throw Error(B(299));
    var c = !1, s = "", r = M0, y = fn, v = Ey, g = null, R = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (g = u.unstable_transitionCallbacks), u.formState !== void 0 && (R = u.formState)), n = W0(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      y,
      v,
      g,
      R
    ), n.context = im(null), u = n.current, c = Bl(), s = Nu(c), s.callback = null, Gu(u, s, c), n.current.lanes = c, Rn(n, c), Aa(n), l[yu] = n.current, jc(l), new Zc(n);
  }, Fm.version = "19.0.0", Fm;
}
var Im = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sb;
function TS() {
  return sb || (sb = 1, process.env.NODE_ENV !== "production" && function() {
    function j(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function yt(e, t, a, i) {
      if (a >= t.length) return i;
      var f = t[a], o = Sl(e) ? e.slice() : me({}, e);
      return o[f] = yt(e[f], t, a + 1, i), o;
    }
    function $e(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return B(e, t, a, 0);
      }
    }
    function B(e, t, a, i) {
      var f = t[i], o = Sl(e) ? e.slice() : me({}, e);
      return i + 1 === t.length ? (o[a[i]] = o[f], Sl(o) ? o.splice(f, 1) : delete o[f]) : o[f] = B(
        e[f],
        t,
        a,
        i + 1
      ), o;
    }
    function We(e, t, a) {
      var i = t[a], f = Sl(e) ? e.slice() : me({}, e);
      return a + 1 === t.length ? (Sl(f) ? f.splice(i, 1) : delete f[i], f) : (f[i] = We(e[i], t, a + 1), f);
    }
    function Yt() {
      return !1;
    }
    function St() {
      return null;
    }
    function Xe(e, t, a, i) {
      return new U0(e, t, a, i);
    }
    function L() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Dt() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Ja() {
    }
    function Nt() {
    }
    function Ge(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function $t(e, t) {
      e.context === so && (w0(t, e, null, null), pa());
    }
    function tt(e, t) {
      if (eu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Vu(), Gh(
          e.current,
          t,
          a
        ), pa();
      }
    }
    function Ot(e) {
      eu = e;
    }
    function Wl(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ze(e) {
      return e === null || typeof e != "object" ? null : (e = K0 && e[K0] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function oe(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === tp ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Wn:
          return "Fragment";
        case to:
          return "Portal";
        case xd:
          return "Profiler";
        case Cd:
          return "StrictMode";
        case Bd:
          return "Suspense";
        case Ms:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Ra:
            return (e.displayName || "Context") + ".Provider";
          case Os:
            return (e._context.displayName || "Context") + ".Consumer";
          case jc:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case xi:
            return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
          case ql:
            t = e._payload, e = e._init;
            try {
              return oe(e(t));
            } catch {
            }
        }
      return null;
    }
    function _l(e) {
      return typeof e.tag == "number" ? le(e) : typeof e.name == "string" ? e.name : null;
    }
    function le(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return oe(t);
        case 8:
          return t === Cd ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return le(e.return);
      }
      return null;
    }
    function zl() {
    }
    function Wt() {
      if (Bi === 0) {
        we = console.log, qd = console.info, il = console.warn, J0 = console.error, Yd = console.group, Nd = console.groupCollapsed, Us = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: zl,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Bi++;
    }
    function Sn() {
      if (Bi--, Bi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: me({}, e, { value: we }),
          info: me({}, e, { value: qd }),
          warn: me({}, e, { value: il }),
          error: me({}, e, { value: J0 }),
          group: me({}, e, { value: Yd }),
          groupCollapsed: me({}, e, { value: Nd }),
          groupEnd: me({}, e, { value: Us })
        });
      }
      0 > Bi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function sl(e) {
      if (Gd === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Gd = t && t[1] || "", lm = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Gd + e + lm;
    }
    function ae(e, t) {
      if (!e || Hs) return "";
      var a = Cs.get(e);
      if (a !== void 0) return a;
      Hs = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = H.H, H.H = null, Wt();
      try {
        var f = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var M = function() {
                  throw Error();
                };
                if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(M, []);
                  } catch (ee) {
                    var V = ee;
                  }
                  Reflect.construct(e, [], M);
                } else {
                  try {
                    M.call();
                  } catch (ee) {
                    V = ee;
                  }
                  e.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ee) {
                  V = ee;
                }
                (M = e()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (ee) {
              if (ee && V && typeof ee.stack == "string")
                return [ee.stack, V.stack];
            }
            return [null, null];
          }
        };
        f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var o = Object.getOwnPropertyDescriptor(
          f.DetermineComponentFrameRoot,
          "name"
        );
        o && o.configurable && Object.defineProperty(
          f.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = f.DetermineComponentFrameRoot(), h = d[0], m = d[1];
        if (h && m) {
          var p = h.split(`
`), O = m.split(`
`);
          for (d = o = 0; o < p.length && !p[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          for (; d < O.length && !O[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (o === p.length || d === O.length)
            for (o = p.length - 1, d = O.length - 1; 1 <= o && 0 <= d && p[o] !== O[d]; )
              d--;
          for (; 1 <= o && 0 <= d; o--, d--)
            if (p[o] !== O[d]) {
              if (o !== 1 || d !== 1)
                do
                  if (o--, d--, 0 > d || p[o] !== O[d]) {
                    var G = `
` + p[o].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && Cs.set(e, G), G;
                  }
                while (1 <= o && 0 <= d);
              break;
            }
        }
      } finally {
        Hs = !1, H.H = i, Sn(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? sl(p) : "", typeof e == "function" && Cs.set(e, p), p;
    }
    function Te(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return sl(e.type);
        case 16:
          return sl("Lazy");
        case 13:
          return sl("Suspense");
        case 19:
          return sl("SuspenseList");
        case 0:
        case 15:
          return e = ae(e.type, !1), e;
        case 11:
          return e = ae(e.type.render, !1), e;
        case 1:
          return e = ae(e.type, !0), e;
        default:
          return "";
      }
    }
    function Ft(e) {
      try {
        var t = "";
        do {
          t += Te(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var f = a[i];
              if (typeof f.name == "string") {
                var o = t, d = f.env, h = sl(
                  f.name + (d ? " [" + d + "]" : "")
                );
                t = o + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (m) {
        return `
Error generating stack: ` + m.message + `
` + m.stack;
      }
    }
    function jl() {
      if (Yl === null) return null;
      var e = Yl._debugOwner;
      return e != null ? _l(e) : null;
    }
    function rl() {
      return Yl === null ? "" : Ft(Yl);
    }
    function k(e, t, a, i, f, o, d) {
      var h = Yl;
      H.getCurrentStack = e === null ? null : rl, za = !1, Yl = e;
      try {
        return t(a, i, f, o, d);
      } finally {
        Yl = h;
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function It(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, t.flags & 4098 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function C(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Z(e) {
      if (It(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function w(e) {
      var t = e.alternate;
      if (!t) {
        if (t = It(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var f = a.return;
        if (f === null) break;
        var o = f.alternate;
        if (o === null) {
          if (i = f.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (f.child === o.child) {
          for (o = f.child; o; ) {
            if (o === a) return Z(f), e;
            if (o === i) return Z(f), t;
            o = o.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = f, i = o;
        else {
          for (var d = !1, h = f.child; h; ) {
            if (h === a) {
              d = !0, a = f, i = o;
              break;
            }
            if (h === i) {
              d = !0, i = f, a = o;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = o.child; h; ) {
              if (h === a) {
                d = !0, a = o, i = f;
                break;
              }
              if (h === i) {
                d = !0, i = o, a = f;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ne(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ne(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ue(e) {
      return { current: e };
    }
    function Re(e, t) {
      0 > yn ? console.error("Unexpected pop.") : (t !== xs[yn] && console.error("Unexpected Fiber popped."), e.current = am[yn], am[yn] = null, xs[yn] = null, yn--);
    }
    function Ee(e, t, a) {
      yn++, am[yn] = e.current, xs[yn] = a, e.current = t;
    }
    function mt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function ce(e, t) {
      Ee(cl, t, e), Ee(Bs, e, e), Ee(qi, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? _0(t) : tf;
          break;
        default:
          if (t = a === 8 ? t.parentNode : t, a = t.tagName, t = t.namespaceURI)
            t = _0(t), t = rt(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = gh;
                break;
              case "math":
                t = Cv;
                break;
              default:
                t = tf;
            }
      }
      a = a.toLowerCase(), a = yr(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Re(qi, e), Ee(qi, a, e);
    }
    function lt(e) {
      Re(qi, e), Re(Bs, e), Re(cl, e);
    }
    function Ba() {
      return mt(qi.current);
    }
    function ka(e) {
      e.memoizedState !== null && Ee(qs, e, e);
      var t = mt(qi.current), a = e.type, i = rt(t.context, a);
      a = yr(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ee(Bs, e, e), Ee(qi, i, e));
    }
    function Dl(e) {
      Bs.current === e && (Re(qi, e), Re(Bs, e)), qs.current === e && (Re(qs, e), Km._currentValue = ir);
    }
    function ft(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Ve(e) {
      try {
        return dl(e), !1;
      } catch {
        return !0;
      }
    }
    function dl(e) {
      return "" + e;
    }
    function He(e, t) {
      if (Ve(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ft(e)
        ), dl(e);
    }
    function oa(e, t) {
      if (Ve(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ft(e)
        ), dl(e);
    }
    function $a(e) {
      if (Ve(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ft(e)
        ), dl(e);
    }
    function Pu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ao = t.inject(e), Nl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ei(e, t) {
      if (Nl && typeof Nl.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & 128) === 128;
          switch (t) {
            case Da:
              var i = Yi;
              break;
            case wa:
              i = Xd;
              break;
            case mn:
              i = lo;
              break;
            case wc:
              i = nm;
              break;
            default:
              i = lo;
          }
          Nl.onCommitFiberRoot(
            ao,
            e,
            i,
            a
          );
        } catch (f) {
          Zl || (Zl = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
    }
    function _e(e) {
      if (typeof up == "function" && ip(e), Nl && typeof Nl.setStrictMode == "function")
        try {
          Nl.setStrictMode(ao, e);
        } catch (t) {
          Zl || (Zl = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function ki(e) {
      J = e;
    }
    function $i() {
      J !== null && typeof J.markCommitStopped == "function" && J.markCommitStopped();
    }
    function Tn(e) {
      J !== null && typeof J.markComponentRenderStarted == "function" && J.markComponentRenderStarted(e);
    }
    function T() {
      J !== null && typeof J.markComponentRenderStopped == "function" && J.markComponentRenderStopped();
    }
    function F(e) {
      J !== null && typeof J.markRenderStarted == "function" && J.markRenderStarted(e);
    }
    function I() {
      J !== null && typeof J.markRenderStopped == "function" && J.markRenderStopped();
    }
    function se(e, t) {
      J !== null && typeof J.markStateUpdateScheduled == "function" && J.markStateUpdateScheduled(e, t);
    }
    function Pt(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (cp(e) / no | 0) | 0;
    }
    function Fe(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 64) return "TransitionHydration";
      if (e & 4194176) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function fe(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
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
          return e & 4194176;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function hl(e, t) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var i = 0, f = e.suspendedLanes, o = e.pingedLanes, d = e.warmLanes;
      e = e.finishedLanes !== 0;
      var h = a & 134217727;
      return h !== 0 ? (a = h & ~f, a !== 0 ? i = fe(a) : (o &= h, o !== 0 ? i = fe(o) : e || (d = h & ~d, d !== 0 && (i = fe(d))))) : (h = a & ~f, h !== 0 ? i = fe(h) : o !== 0 ? i = fe(o) : e || (d = a & ~d, d !== 0 && (i = fe(d)))), i === 0 ? 0 : t !== 0 && t !== i && !(t & f) && (f = i & -i, d = t & -t, f >= d || f === 32 && (d & 4194176) !== 0) ? t : i;
    }
    function qa(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function el(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
          return t + 250;
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
          return t + 5e3;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function En() {
      var e = Ni;
      return Ni <<= 1, !(Ni & 4194176) && (Ni = 128), e;
    }
    function ti() {
      var e = Ys;
      return Ys <<= 1, !(Ys & 62914560) && (Ys = 4194304), e;
    }
    function Ol(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Tt(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Wa(e, t, a, i, f, o) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, m = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var O = 31 - Gl(a), G = 1 << O;
        h[O] = 0, m[O] = -1;
        var M = p[O];
        if (M !== null)
          for (p[O] = null, O = 0; O < M.length; O++) {
            var V = M[O];
            V !== null && (V.lane &= -536870913);
          }
        a &= ~G;
      }
      i !== 0 && su(e, i, 0), o !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(d & ~t));
    }
    function su(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Gl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194218;
    }
    function Fl(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Gl(a), f = 1 << i;
        f & t | e[i] & t && (e[i] |= t), a &= ~f;
      }
    }
    function Pm(e, t, a) {
      if (Kl)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Gl(a), f = 1 << i;
          e[i].add(t), a &= ~f;
        }
    }
    function e0(e, t) {
      if (Kl)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var f = 31 - Gl(t);
          e = 1 << f, f = a[f], 0 < f.size && (f.forEach(function(o) {
            var d = o.alternate;
            d !== null && i.has(d) || i.add(o);
          }), f.clear()), t &= ~e;
        }
    }
    function t0(e) {
      return e &= -e, Da < e ? wa < e ? e & 134217727 ? mn : wc : wa : Da;
    }
    function zo() {
      var e = Pe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? mn : _c(e.type));
    }
    function cr(e, t) {
      var a = Pe.p;
      try {
        return Pe.p = e, t();
      } finally {
        Pe.p = a;
      }
    }
    function ru(e) {
      delete e[Tl], delete e[ia], delete e[Lc], delete e[fp], delete e[op];
    }
    function An(e) {
      var t = e[Tl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Gi] || a[Tl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = wu(e); e !== null; ) {
              if (a = e[Tl])
                return a;
              e = wu(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Fa(e) {
      if (e = e[Tl] || e[Gi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Do(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Wi(e) {
      var t = e[$0];
      return t || (t = e[$0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Gt(e) {
      e[Vi] = !0;
    }
    function du(e, t) {
      Rn(e, t), Rn(e + "Capture", t);
    }
    function Rn(e, t) {
      Ku[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ku[e] = t;
      var a = e.toLowerCase();
      for (um[a] = e, e === "onDoubleClick" && (um.ondblclick = e), e = 0; e < t.length; e++)
        Ns.add(t[e]);
    }
    function nf(e, t) {
      sp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function fr(e) {
      return Fn.call(cm, e) ? !0 : Fn.call(im, e) ? !1 : W0.test(e) ? cm[e] = !0 : (im[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Sh(e, t, a) {
      if (fr(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (He(a, t), e === "" + a ? a : e);
      }
    }
    function Oo(e, t, a) {
      if (fr(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          He(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Mo(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        He(a, t), e.setAttribute(t, "" + a);
      }
    }
    function hu(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        He(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Vt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return $a(e), e;
        default:
          return "";
      }
    }
    function yl(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Il(e) {
      var t = yl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      $a(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var f = a.get, o = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return f.call(this);
          },
          set: function(d) {
            $a(d), i = "" + d, o.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            $a(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function yu(e) {
      e._valueTracker || (e._valueTracker = Il(e));
    }
    function or(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = yl(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function sr(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Ya(e) {
      return e.replace(
        F0,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Th(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || fm || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        jl() || "A component",
        t.type
      ), fm = !0), t.value === void 0 || t.defaultValue === void 0 || _d || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        jl() || "A component",
        t.type
      ), _d = !0);
    }
    function Fi(e, t, a, i, f, o, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (He(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Vt(t)) : e.value !== "" + Vt(t) && (e.value = "" + Vt(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? mu(e, d, Vt(t)) : a != null ? mu(e, d, Vt(a)) : i != null && e.removeAttribute("value"), f == null && o != null && (e.defaultChecked = !!o), f != null && (e.checked = f && typeof f != "function" && typeof f != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (He(h, "name"), e.name = "" + Vt(h)) : e.removeAttribute("name");
    }
    function rr(e, t, a, i, f, o, d, h) {
      if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (He(o, "type"), e.type = o), t != null || a != null) {
        if (!(o !== "submit" && o !== "reset" || t != null))
          return;
        a = a != null ? "" + Vt(a) : "", t = t != null ? "" + Vt(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? f, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (He(d, "name"), e.name = d);
    }
    function mu(e, t, a) {
      t === "number" && sr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Ii(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Py.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || I0 || (I0 = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || P0 || (P0 = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Gs || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Gs = !0);
    }
    function uf() {
      var e = jl();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Ia(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var f = 0; f < a.length; f++)
          t["$" + a[f]] = !0;
        for (a = 0; a < e.length; a++)
          f = t.hasOwnProperty("$" + e[a].value), e[a].selected !== f && (e[a].selected = f), f && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Vt(a), t = null, f = 0; f < e.length; f++) {
          if (e[f].value === a) {
            e[f].selected = !0, i && (e[f].defaultSelected = !0);
            return;
          }
          t !== null || e[f].disabled || (t = e[f]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Xt(e, t) {
      for (e = 0; e < Qd.length; e++) {
        var a = Qd[e];
        if (t[a] != null) {
          var i = Sl(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            uf()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            uf()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || jd || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), jd = !0);
    }
    function Eh(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Vs || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        jl() || "A component"
      ), Vs = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ah(e, t, a) {
      if (t != null && (t = "" + Vt(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Vt(a) : "";
    }
    function li(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Sl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Vt(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Pi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Pi(e.children[0], t) : e;
    }
    function Mt(e) {
      return "  " + "  ".repeat(e);
    }
    function cf(e) {
      return "+ " + "  ".repeat(e);
    }
    function ai(e) {
      return "- " + "  ".repeat(e);
    }
    function Rh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Uo(e, t) {
      return wd.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function ec(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return cf(a) + Uo(e, i) + `
`;
      if (typeof t == "string") {
        for (var f = 0; f < t.length && f < e.length && t.charCodeAt(f) === e.charCodeAt(f); f++) ;
        return f > i - 8 && 10 < f && (e = "..." + e.slice(f - 8), t = "..." + t.slice(f - 8)), cf(a) + Uo(e, i) + `
` + ai(a) + Uo(t, i) + `
`;
      }
      return Mt(a) + Uo(e, i) + `
`;
    }
    function ff(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function sa(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Sl(e)) return "[...]";
          if (e.$$typeof === Ci)
            return (t = oe(e.type)) ? "<" + t + ">" : "<...>";
          var a = ff(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var f = JSON.stringify(i);
                if (f !== '"' + i + '"' && (i = f), t -= i.length - 2, f = sa(
                  e[i],
                  15 > t ? t : 15
                ), t -= f.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + f;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function ml(e, t) {
      return typeof e != "string" || wd.test(e) ? "{" + sa(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function dr(e, t, a) {
      var i = 120 - a.length - e.length, f = [], o;
      for (o in t)
        if (t.hasOwnProperty(o) && o !== "children") {
          var d = ml(
            t[o],
            120 - a.length - o.length - 1
          );
          i -= o.length + d.length + 2, f.push(o + "=" + d);
        }
      return f.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + f.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + f.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function jv(e, t, a) {
      var i = "", f = me({}, t), o;
      for (o in e)
        if (e.hasOwnProperty(o)) {
          delete f[o];
          var d = 120 - 2 * a - o.length - 2, h = sa(e[o], d);
          t.hasOwnProperty(o) ? (d = sa(t[o], d), i += cf(a) + o + ": " + h + `
`, i += ai(a) + o + ": " + d + `
`) : i += cf(a) + o + ": " + h + `
`;
        }
      for (var m in f)
        f.hasOwnProperty(m) && (e = sa(
          f[m],
          120 - 2 * a - m.length - 2
        ), i += ai(a) + m + ": " + e + `
`);
      return i;
    }
    function hr(e, t, a, i) {
      var f = "", o = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && o.set(
          p.toLowerCase(),
          p
        );
      if (o.size === 1 && o.has("children"))
        f += dr(
          e,
          t,
          Mt(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, m = o.get(d.toLowerCase());
            if (m !== void 0) {
              o.delete(d.toLowerCase());
              var p = t[d];
              m = a[m];
              var O = ml(
                p,
                h
              );
              h = ml(
                m,
                h
              ), typeof p == "object" && p !== null && typeof m == "object" && m !== null && ff(p) === "Object" && ff(m) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(m).length || -1 < O.indexOf("...") || -1 < h.indexOf("...")) ? f += Mt(i + 1) + d + `={{
` + jv(
                p,
                m,
                i + 2
              ) + Mt(i + 1) + `}}
` : (f += cf(i + 1) + d + "=" + O + `
`, f += ai(i + 1) + d + "=" + h + `
`);
            } else
              f += Mt(i + 1) + d + "=" + ml(t[d], h) + `
`;
          }
        o.forEach(function(G) {
          if (G !== "children") {
            var M = 120 - 2 * (i + 1) - G.length - 1;
            f += ai(i + 1) + G + "=" + ml(a[G], M) + `
`;
          }
        }), f = f === "" ? Mt(i) + "<" + e + `>
` : Mt(i) + "<" + e + `
` + f + Mt(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (o = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = "" + t), f += ec(o, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = e == null ? f + ec("" + t, null, i + 1) : f + ec("" + t, void 0, i + 1)), f;
    }
    function zh(e, t) {
      var a = Rh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += zh(e, t), e = e.sibling;
        return a;
      }
      return Mt(t) + "<" + a + `>
`;
    }
    function of(e, t) {
      var a = Pi(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Mt(t) + `...
` + of(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var f = 0; f < i.length; f++) {
          var o = i[f].name;
          typeof o == "string" && (a += Mt(t) + "<" + o + `>
`, t++);
        }
      if (i = "", f = e.fiber.pendingProps, e.fiber.tag === 6)
        i = ec(f, e.serverProps, t), t++;
      else if (o = Rh(e.fiber), o !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - o.length - 2, h = "";
          for (p in f)
            if (f.hasOwnProperty(p) && p !== "children") {
              var m = ml(f[p], 15);
              if (d -= p.length + m.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + m;
            }
          i = Mt(i) + "<" + o + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = dr(
            o,
            f,
            cf(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = hr(
            o,
            f,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (f = e.fiber.child, o = 0; f && o < e.children.length; )
        d = e.children[o], d.fiber === f ? (p += of(d, t), o++) : p += zh(f, t), f = f.sibling;
      for (f && 0 < e.children.length && (p += Mt(t) + `...
`), f = e.serverTail, e.serverProps === null && t--, e = 0; e < f.length; e++)
        o = f[e], p = typeof o == "string" ? p + (ai(t) + Uo(o, 120 - 2 * t) + `
`) : p + dr(
          o.type,
          o.props,
          ai(t)
        );
      return a + i + p;
    }
    function Dh(e) {
      try {
        return `

` + of(e, 0);
      } catch {
        return "";
      }
    }
    function ra(e, t, a) {
      for (var i = t, f = null, o = 0; i; )
        i === e && (o = 0), f = {
          fiber: i,
          children: f !== null ? [f] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: o
        }, o++, i = i.return;
      return f !== null ? Dh(f).replaceAll(/^[+-]/gm, ">") : "";
    }
    function yr(e, t) {
      e = me({}, e || Ju);
      var a = { tag: t };
      return Ld.indexOf(t) !== -1 && (e.aTagInScope = null, e.buttonTagInScope = null, e.nobrTagInScope = null), Xi.indexOf(t) !== -1 && (e.pTagInButtonScope = null), ev.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (e.listItemTagAutoclosing = null, e.dlItemTagAutoclosing = null), e.current = a, t === "form" && (e.formTag = a), t === "a" && (e.aTagInScope = a), t === "button" && (e.buttonTagInScope = a), t === "nobr" && (e.nobrTagInScope = a), t === "p" && (e.pTagInButtonScope = a), t === "li" && (e.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (e.dlItemTagAutoclosing = a), t === "#document" || t === "html" ? e.containerTagInScope = null : e.containerTagInScope || (e.containerTagInScope = a), e;
    }
    function Oh(e, t) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return _i.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }
    function Mh(e, t) {
      switch (e) {
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
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function tc(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function mr(e, t) {
      t = t || Ju;
      var a = t.current;
      if (t = (a = Oh(
        e,
        a && a.tag
      ) ? null : a) ? null : Mh(e, t), t = a || t, !t) return !0;
      t = t.tag;
      var i = String(!!a) + "|" + e + "|" + t;
      if (ji[i]) return !1;
      ji[i] = !0;
      var f = (i = Yl) ? tc(i.return, t) : null;
      return i = i !== null && f !== null ? ra(f, i, null) : "", f = "<" + e + ">", a ? (a = "", t === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        f,
        t,
        a,
        i
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        f,
        t,
        i
      ), !1;
    }
    function Ho(e, t) {
      if (Oh("#text", t)) return !0;
      var a = "#text|" + t;
      if (ji[a]) return !1;
      ji[a] = !0;
      var i = (a = Yl) ? tc(a, t) : null;
      return a = a !== null && i !== null ? ra(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function zn(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Qv(e) {
      return e.replace(Zd, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Uh(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? io.hasOwnProperty(t) && io[t] || (io[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Qv(t.replace(tv, "ms-"))
      )) : rp.test(t) ? io.hasOwnProperty(t) && io[t] || (io[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !rm.test(a) || co.hasOwnProperty(a) && co[a] || (co[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(rm, "")
      )), typeof a == "number" && (isNaN(a) ? Xs || (Xs = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || dm || (dm = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || fo.has(t) ? t === "float" ? e.cssFloat = a : (oa(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Hh(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var f in a)
              if (a.hasOwnProperty(f) && !t.hasOwnProperty(f))
                for (var o = om[f] || [f], d = 0; d < o.length; d++)
                  i[o[d]] = f;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (f = om[h] || [h], o = 0; o < f.length; o++)
                i[f[o]] = h;
          h = {};
          for (var m in t)
            for (f = om[m] || [m], o = 0; o < f.length; o++)
              h[f[o]] = m;
          m = {};
          for (var p in i)
            if (f = i[p], (o = h[p]) && f !== o && (d = f + "," + o, !m[d])) {
              m[d] = !0, d = console;
              var O = t[f];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                O == null || typeof O == "boolean" || O === "" ? "Removing" : "Updating",
                f,
                o
              );
            }
        }
        for (var G in a)
          !a.hasOwnProperty(G) || t != null && t.hasOwnProperty(G) || (G.indexOf("--") === 0 ? e.setProperty(G, "") : G === "float" ? e.cssFloat = "" : e[G] = "");
        for (var M in t)
          p = t[M], t.hasOwnProperty(M) && a[M] !== p && Uh(e, M, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Uh(e, i, t[i]);
    }
    function lc(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
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
    function l0(e) {
      return hm.get(e) || e;
    }
    function wv(e, t) {
      if (Fn.call(oo, t) && oo[t])
        return !0;
      if (l.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = ym.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), oo[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), oo[t] = !0;
      }
      if (Kd.test(t)) {
        if (e = t.toLowerCase(), e = ym.hasOwnProperty(e) ? e : null, e == null) return oo[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), oo[t] = !0);
      }
      return !0;
    }
    function vr(e, t) {
      var a = [], i;
      for (i in t)
        wv(e, i) || a.push(i);
      t = a.map(function(f) {
        return "`" + f + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Ch(e, t, a, i) {
      if (Fn.call(u, t) && u[t])
        return !0;
      var f = t.toLowerCase();
      if (f === "onfocusin" || f === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), u[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(f) ? e[f] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), u[t] = !0;
        if (c.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), u[t] = !0;
      } else if (c.test(t))
        return s.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), u[t] = !0;
      if (r.test(t) || y.test(t)) return !0;
      if (f === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), u[t] = !0;
      if (f === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), u[t] = !0;
      if (f === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), u[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), u[t] = !0;
      if (Zc.hasOwnProperty(f)) {
        if (f = Zc[f], f !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            f
          ), u[t] = !0;
      } else if (t !== f)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          f
        ), u[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return f = t.toLowerCase().slice(0, 5), f === "data-" || f === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), u[t] = !0);
          }
        case "function":
        case "symbol":
          return u[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), u[t] = !0;
          }
      }
      return !0;
    }
    function xh(e, t, a) {
      var i = [], f;
      for (f in t)
        Ch(e, f, t[f], a) || i.push(f);
      t = i.map(function(o) {
        return "`" + o + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Dn(e) {
      return v.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function ni(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function Bh(e) {
      var t = Fa(e);
      if (t && (e = t.stateNode)) {
        var a = e[ia] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Fi(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (He(t, "name"), a = a.querySelectorAll(
                'input[name="' + Ya(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var f = i[ia] || null;
                  if (!f)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Fi(
                    i,
                    f.value,
                    f.defaultValue,
                    f.defaultValue,
                    f.checked,
                    f.defaultChecked,
                    f.type,
                    f.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && or(i);
            }
            break e;
          case "textarea":
            Ah(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Ia(e, !!a.multiple, t, !1);
        }
      }
    }
    function pr(e, t, a) {
      if (_) return e(t, a);
      _ = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (_ = !1, (R !== null || N !== null) && (pa(), R && (t = R, e = N, N = R = null, Bh(t), e)))
          for (t = 0; t < e.length; t++) Bh(e[t]);
      }
    }
    function sf(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ia] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function rf() {
      if (ut) return ut;
      var e, t = re, a = t.length, i, f = "value" in $ ? $.value : $.textContent, o = f.length;
      for (e = 0; e < a && t[e] === f[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === f[o - i]; i++) ;
      return ut = f.slice(e, 1 < i ? 1 - i : void 0);
    }
    function df(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ui() {
      return !0;
    }
    function vu() {
      return !1;
    }
    function Ml(e) {
      function t(a, i, f, o, d) {
        this._reactName = a, this._targetInst = f, this.type = i, this.nativeEvent = o, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(o) : o[h]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ui : vu, this.isPropagationStopped = vu, this;
      }
      return me(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ui);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ui);
        },
        persist: function() {
        },
        isPersistent: ui
      }), t;
    }
    function gr(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Ab[e]) ? !!t[e] : !1;
    }
    function br() {
      return gr;
    }
    function Co(e, t) {
      switch (e) {
        case "keyup":
          return Yb.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== hg;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function xo(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function a0(e, t) {
      switch (e) {
        case "compositionend":
          return xo(t);
        case "keypress":
          return t.which !== mg ? null : (pg = !0, vg);
        case "textInput":
          return e = t.data, e === vg && pg ? null : e;
        default:
          return null;
      }
    }
    function Pl(e, t) {
      if (Jd)
        return e === "compositionend" || !yp && Co(e, t) ? (e = rf(), ut = re = $ = null, Jd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return yg && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function ii(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Gb[e.type] : t === "textarea";
    }
    function Sr(e) {
      if (!ca) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function hf(e, t, a, i) {
      R ? N ? N.push(i) : N = [i] : R = i, t = ju(t, "onChange"), 0 < t.length && (a = new A(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Lv(e) {
      md(e, 0);
    }
    function yf(e) {
      var t = Do(e);
      if (or(t)) return e;
    }
    function Tr(e, t) {
      if (e === "change") return t;
    }
    function mf() {
      vm && (vm.detachEvent("onpropertychange", Bo), pm = vm = null);
    }
    function Bo(e) {
      if (e.propertyName === "value" && yf(pm)) {
        var t = [];
        hf(
          t,
          pm,
          e,
          ni(e)
        ), pr(Lv, t);
      }
    }
    function n0(e, t, a) {
      e === "focusin" ? (mf(), vm = t, pm = a, vm.attachEvent("onpropertychange", Bo)) : e === "focusout" && mf();
    }
    function Zv(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return yf(pm);
    }
    function Kv(e, t) {
      if (e === "click") return yf(t);
    }
    function Jv(e, t) {
      if (e === "input" || e === "change")
        return yf(t);
    }
    function qh(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function qo(e, t) {
      if (Ma(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var f = a[i];
        if (!Fn.call(t, f) || !Ma(e[f], t[f]))
          return !1;
      }
      return !0;
    }
    function u0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function i0(e, t) {
      var a = u0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = u0(a);
      }
    }
    function c0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? c0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function f0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = sr(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = sr(e.document);
      }
      return t;
    }
    function Er(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function kv(e, t) {
      var a = f0(t);
      t = e.focusedElem;
      var i = e.selectionRange;
      if (a !== t && t && t.ownerDocument && c0(t.ownerDocument.documentElement, t)) {
        if (i !== null && Er(t)) {
          if (e = i.start, a = i.end, a === void 0 && (a = e), "selectionStart" in t)
            t.selectionStart = e, t.selectionEnd = Math.min(
              a,
              t.value.length
            );
          else if (a = (e = t.ownerDocument || document) && e.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var f = t.textContent.length, o = Math.min(i.start, f);
            i = i.end === void 0 ? o : Math.min(i.end, f), !a.extend && o > i && (f = i, i = o, o = f), f = i0(t, o);
            var d = i0(
              t,
              i
            );
            f && d && (a.rangeCount !== 1 || a.anchorNode !== f.node || a.anchorOffset !== f.offset || a.focusNode !== d.node || a.focusOffset !== d.offset) && (e = e.createRange(), e.setStart(f.node, f.offset), a.removeAllRanges(), o > i ? (a.addRange(e), a.extend(d.node, d.offset)) : (e.setEnd(
              d.node,
              d.offset
            ), a.addRange(e)));
          }
        }
        for (e = [], a = t; a = a.parentNode; )
          a.nodeType === 1 && e.push({
            element: a,
            left: a.scrollLeft,
            top: a.scrollTop
          });
        for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
          a = e[t], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    function o0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      vp || kd == null || kd !== sr(i) || (i = kd, "selectionStart" in i && Er(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), gm && qo(gm, i) || (gm = i, i = ju(mp, "onSelect"), 0 < i.length && (t = new A(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = kd)));
    }
    function ac(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function nc(e) {
      if (pp[e]) return pp[e];
      if (!$d[e]) return e;
      var t = $d[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in bg)
          return pp[e] = t[a];
      return e;
    }
    function da(e, t) {
      Rg.set(e, t), du(t, [e]);
    }
    function Ar() {
      for (var e = Wd, t = gp = Wd = 0; t < e; ) {
        var a = Pn[t];
        Pn[t++] = null;
        var i = Pn[t];
        Pn[t++] = null;
        var f = Pn[t];
        Pn[t++] = null;
        var o = Pn[t];
        if (Pn[t++] = null, i !== null && f !== null) {
          var d = i.pending;
          d === null ? f.next = f : (f.next = d.next, d.next = f), i.pending = f;
        }
        o !== 0 && s0(a, f, o);
      }
    }
    function Rr(e, t, a, i) {
      Pn[Wd++] = e, Pn[Wd++] = t, Pn[Wd++] = a, Pn[Wd++] = i, gp |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Yh(e, t, a, i) {
      return Rr(e, t, a, i), zr(e);
    }
    function vl(e, t) {
      return Rr(e, null, null, t), zr(e);
    }
    function s0(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var f = !1, o = e.return; o !== null; )
        o.childLanes |= a, i = o.alternate, i !== null && (i.childLanes |= a), o.tag === 22 && (e = o.stateNode, e === null || e._visibility & lv || (f = !0)), e = o, o = o.return;
      f && t !== null && e.tag === 3 && (o = e.stateNode, f = 31 - Gl(a), o = o.hiddenUpdates, e = o[f], e === null ? o[f] = [t] : e.push(t), t.lane = a | 536870912);
    }
    function zr(e) {
      if (jm > eS)
        throw er = jm = 0, Qm = Jp = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      er > tS && (er = 0, Qm = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && e.flags & 4098 && By(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && t.flags & 4098 && By(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function uc(e) {
      if (eu === null) return e;
      var t = eu(e);
      return t === void 0 ? e : t.current;
    }
    function Nh(e) {
      if (eu === null) return e;
      var t = eu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = uc(e.render), e.render !== t) ? (t = { $$typeof: jc, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function r0(e, t) {
      if (eu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, f = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || f === ql) && (i = !0);
          break;
        case 11:
          (f === jc || f === ql) && (i = !0);
          break;
        case 14:
        case 15:
          (f === xi || f === ql) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = eu(a), e !== void 0 && e === eu(t)));
    }
    function d0(e) {
      eu !== null && typeof WeakSet == "function" && (Fd === null && (Fd = /* @__PURE__ */ new WeakSet()), Fd.add(e));
    }
    function Gh(e, t, a) {
      var i = e.alternate, f = e.child, o = e.sibling, d = e.tag, h = e.type, m = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          m = h;
          break;
        case 11:
          m = h.render;
      }
      if (eu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var p = !1;
      h = !1, m !== null && (m = eu(m), m !== void 0 && (a.has(m) ? h = !0 : t.has(m) && (d === 1 ? h = !0 : p = !0))), Fd !== null && (Fd.has(e) || i !== null && Fd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || p) && (i = vl(e, 2), i !== null && ke(i, e, 2)), f === null || h || Gh(
        f,
        t,
        a
      ), o !== null && Gh(
        o,
        t,
        a
      );
    }
    function pu() {
      var e = js;
      return js = 0, e;
    }
    function Dr(e) {
      var t = js;
      return js = e, t;
    }
    function ic(e) {
      var t = js;
      return js += e, t;
    }
    function cc(e) {
      La = Id(), 0 > e.actualStartTime && (e.actualStartTime = La);
    }
    function Vh(e) {
      if (0 <= La) {
        var t = Id() - La;
        e.actualDuration += t, e.selfBaseDuration = t, La = -1;
      }
    }
    function Xh(e) {
      if (0 <= La) {
        var t = Id() - La;
        e.actualDuration += t, La = -1;
      }
    }
    function Pa() {
      if (0 <= La) {
        var e = Id() - La;
        La = -1, js += e;
      }
    }
    function en() {
      La = Id();
    }
    function Yo(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ea(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Sp.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Ft(t)
        }, Sp.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Ft(t)
      };
    }
    function Na(e, t) {
      ci(), Pd[eh++] = fv, Pd[eh++] = cv, cv = e, fv = t;
    }
    function h0(e, t, a) {
      ci(), tu[lu++] = Kc, tu[lu++] = Jc, tu[lu++] = ws, ws = e;
      var i = Kc;
      e = Jc;
      var f = 32 - Gl(i) - 1;
      i &= ~(1 << f), a += 1;
      var o = 32 - Gl(t) + f;
      if (30 < o) {
        var d = f - f % 5;
        o = (i & (1 << d) - 1).toString(32), i >>= d, f -= d, Kc = 1 << 32 - Gl(t) + f | a << f | i, Jc = o + e;
      } else
        Kc = 1 << o | a << f | i, Jc = e;
    }
    function _h(e) {
      ci(), e.return !== null && (Na(e, 1), h0(e, 1, 0));
    }
    function jh(e) {
      for (; e === cv; )
        cv = Pd[--eh], Pd[eh] = null, fv = Pd[--eh], Pd[eh] = null;
      for (; e === ws; )
        ws = tu[--lu], tu[lu] = null, Jc = tu[--lu], tu[lu] = null, Kc = tu[--lu], tu[lu] = null;
    }
    function ci() {
      Be || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function fi(e, t) {
      if (e.return === null) {
        if (au === null)
          au = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (au.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          au.distanceFromLeaf > t && (au.distanceFromLeaf = t);
        }
        return au;
      }
      var a = fi(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function fc(e, t) {
      kc || (e = fi(e, 0), e.serverProps = null, t !== null && (t = Ed(t), e.serverTail.push(t)));
    }
    function tn(e) {
      var t = "", a = au;
      throw a !== null && (au = null, t = Dh(a)), oc(
        ea(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), Tp;
    }
    function y0(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Tl] = e, t[ia] = i, xc(a, i), a) {
        case "dialog":
          ze("cancel", t), ze("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          ze("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < wm.length; a++)
            ze(wm[a], t);
          break;
        case "source":
          ze("error", t);
          break;
        case "img":
        case "image":
        case "link":
          ze("error", t), ze("load", t);
          break;
        case "details":
          ze("toggle", t);
          break;
        case "input":
          nf("input", i), ze("invalid", t), Th(t, i), rr(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), yu(t);
          break;
        case "option":
          Ii(t, i);
          break;
        case "select":
          nf("select", i), ze("invalid", t), Xt(t, i);
          break;
        case "textarea":
          nf("textarea", i), ze("invalid", t), Eh(t, i), li(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), yu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || gd(t.textContent, a) ? (i.popover != null && (ze("beforetoggle", t), ze("toggle", t)), i.onScroll != null && ze("scroll", t), i.onScrollEnd != null && ze("scrollend", t), i.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || tn(e);
    }
    function No(e) {
      for (Ua = e.return; Ua; )
        switch (Ua.tag) {
          case 3:
          case 27:
            Li = !0;
            return;
          case 5:
          case 13:
            Li = !1;
            return;
          default:
            Ua = Ua.return;
        }
    }
    function vf(e) {
      if (e !== Ua) return !1;
      if (!Be)
        return No(e), Be = !0, !1;
      var t = !1, a;
      if ((a = e.tag !== 3 && e.tag !== 27) && ((a = e.tag === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ke(e.type, e.memoizedProps)), a = !a), a && (t = !0), t && kl) {
        for (t = kl; t; ) {
          a = fi(e, 0);
          var i = Ed(t);
          a.serverTail.push(i), t = i.type === "Suspense" ? As(t) : na(t.nextSibling);
        }
        tn(e);
      }
      if (No(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        kl = As(e);
      } else
        kl = Ua ? na(e.stateNode.nextSibling) : null;
      return !0;
    }
    function pf() {
      kl = Ua = null, kc = Be = !1;
    }
    function oc(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    function Or() {
      var e = au;
      e !== null && (au = null, e = Dh(e), console.error(
        `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
        "https://react.dev/link/hydration-mismatch",
        e
      ));
    }
    function Qh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function wh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Go() {
    }
    function m0(e, t, a) {
      H.actQueue !== null && (H.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Go, Go), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, p0(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Go, Go);
          else {
            if (e = it, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var o = t;
                  o.status = "fulfilled", o.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var o = t;
                  o.status = "rejected", o.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, p0(e), e;
          }
          throw Dm = t, sv = !0, ov;
      }
    }
    function v0() {
      if (Dm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Dm;
      return Dm = null, sv = !1, e;
    }
    function p0(e) {
      if (e === ov)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function pl(e) {
      var t = Se;
      return e != null && (Se = t === null ? e : t.concat(e)), t;
    }
    function Mr(e, t, a) {
      for (var i = Object.keys(e.props), f = 0; f < i.length; f++) {
        var o = i[f];
        if (o !== "children" && o !== "key") {
          t === null && (t = Xf(e, a.mode, 0), t._debugInfo = Se, t.return = a), k(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            o
          );
          break;
        }
      }
    }
    function Ul(e) {
      var t = Om;
      return Om += 1, th === null && (th = Qh()), m0(th, e, t);
    }
    function gu(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Vo(e, t) {
      throw t.$$typeof === tm ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Xo(e, t) {
      var a = le(e) || "Component";
      wg[a] || (wg[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function _o(e, t) {
      var a = le(e) || "Component";
      Lg[a] || (Lg[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Lh(e) {
      function t(S, b) {
        if (e) {
          var E = S.deletions;
          E === null ? (S.deletions = [b], S.flags |= 16) : E.push(b);
        }
      }
      function a(S, b) {
        if (!e) return null;
        for (; b !== null; )
          t(S, b), b = b.sibling;
        return null;
      }
      function i(S) {
        for (var b = /* @__PURE__ */ new Map(); S !== null; )
          S.key !== null ? b.set(S.key, S) : b.set(S.index, S), S = S.sibling;
        return b;
      }
      function f(S, b) {
        return S = Vn(S, b), S.index = 0, S.sibling = null, S;
      }
      function o(S, b, E) {
        return S.index = E, e ? (E = S.alternate, E !== null ? (E = E.index, E < b ? (S.flags |= 33554434, b) : E) : (S.flags |= 33554434, b)) : (S.flags |= 1048576, b);
      }
      function d(S) {
        return e && S.alternate === null && (S.flags |= 33554434), S;
      }
      function h(S, b, E, Y) {
        return b === null || b.tag !== 6 ? (b = id(
          E,
          S.mode,
          Y
        ), b.return = S, b._debugOwner = S, b._debugInfo = Se, b) : (b = f(b, E), b.return = S, b._debugInfo = Se, b);
      }
      function m(S, b, E, Y) {
        var K = E.type;
        return K === Wn ? (b = O(
          S,
          b,
          E.props.children,
          Y,
          E.key
        ), Mr(E, b, S), b) : b !== null && (b.elementType === K || r0(b, E) || typeof K == "object" && K !== null && K.$$typeof === ql && ro(K) === b.type) ? (b = f(b, E.props), gu(b, E), b.return = S, b._debugOwner = E._owner, b._debugInfo = Se, b) : (b = Xf(E, S.mode, Y), gu(b, E), b.return = S, b._debugInfo = Se, b);
      }
      function p(S, b, E, Y) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = rs(E, S.mode, Y), b.return = S, b._debugInfo = Se, b) : (b = f(b, E.children || []), b.return = S, b._debugInfo = Se, b);
      }
      function O(S, b, E, Y, K) {
        return b === null || b.tag !== 7 ? (b = qu(
          E,
          S.mode,
          Y,
          K
        ), b.return = S, b._debugOwner = S, b._debugInfo = Se, b) : (b = f(b, E), b.return = S, b._debugInfo = Se, b);
      }
      function G(S, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = id(
            "" + b,
            S.mode,
            E
          ), b.return = S, b._debugOwner = S, b._debugInfo = Se, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case Ci:
              return E = Xf(
                b,
                S.mode,
                E
              ), gu(E, b), E.return = S, S = pl(b._debugInfo), E._debugInfo = Se, Se = S, E;
            case to:
              return b = rs(
                b,
                S.mode,
                E
              ), b.return = S, b._debugInfo = Se, b;
            case ql:
              var Y = pl(b._debugInfo);
              return b = ro(b), S = G(S, b, E), Se = Y, S;
          }
          if (Sl(b) || Ze(b))
            return E = qu(
              b,
              S.mode,
              E,
              null
            ), E.return = S, E._debugOwner = S, S = pl(b._debugInfo), E._debugInfo = Se, Se = S, E;
          if (typeof b.then == "function")
            return Y = pl(b._debugInfo), S = G(
              S,
              Ul(b),
              E
            ), Se = Y, S;
          if (b.$$typeof === Ra)
            return G(
              S,
              xf(S, b),
              E
            );
          Vo(S, b);
        }
        return typeof b == "function" && Xo(S, b), typeof b == "symbol" && _o(S, b), null;
      }
      function M(S, b, E, Y) {
        var K = b !== null ? b.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return K !== null ? null : h(S, b, "" + E, Y);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Ci:
              return E.key === K ? (K = pl(E._debugInfo), S = m(
                S,
                b,
                E,
                Y
              ), Se = K, S) : null;
            case to:
              return E.key === K ? p(S, b, E, Y) : null;
            case ql:
              return K = pl(E._debugInfo), E = ro(E), S = M(
                S,
                b,
                E,
                Y
              ), Se = K, S;
          }
          if (Sl(E) || Ze(E))
            return K !== null ? null : (K = pl(E._debugInfo), S = O(
              S,
              b,
              E,
              Y,
              null
            ), Se = K, S);
          if (typeof E.then == "function")
            return K = pl(E._debugInfo), S = M(
              S,
              b,
              Ul(E),
              Y
            ), Se = K, S;
          if (E.$$typeof === Ra)
            return M(
              S,
              b,
              xf(S, E),
              Y
            );
          Vo(S, E);
        }
        return typeof E == "function" && Xo(S, E), typeof E == "symbol" && _o(S, E), null;
      }
      function V(S, b, E, Y, K) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
          return S = S.get(E) || null, h(b, S, "" + Y, K);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Ci:
              return E = S.get(
                Y.key === null ? E : Y.key
              ) || null, S = pl(Y._debugInfo), b = m(
                b,
                E,
                Y,
                K
              ), Se = S, b;
            case to:
              return S = S.get(
                Y.key === null ? E : Y.key
              ) || null, p(b, S, Y, K);
            case ql:
              var ye = pl(Y._debugInfo);
              return Y = ro(Y), b = V(
                S,
                b,
                E,
                Y,
                K
              ), Se = ye, b;
          }
          if (Sl(Y) || Ze(Y))
            return E = S.get(E) || null, S = pl(Y._debugInfo), b = O(
              b,
              E,
              Y,
              K,
              null
            ), Se = S, b;
          if (typeof Y.then == "function")
            return ye = pl(Y._debugInfo), b = V(
              S,
              b,
              E,
              Ul(Y),
              K
            ), Se = ye, b;
          if (Y.$$typeof === Ra)
            return V(
              S,
              b,
              E,
              xf(b, Y),
              K
            );
          Vo(b, Y);
        }
        return typeof Y == "function" && Xo(b, Y), typeof Y == "symbol" && _o(b, Y), null;
      }
      function ee(S, b, E, Y) {
        if (typeof E != "object" || E === null) return Y;
        switch (E.$$typeof) {
          case Ci:
          case to:
            Nt(S, b, E);
            var K = E.key;
            if (typeof K != "string") break;
            if (Y === null) {
              Y = /* @__PURE__ */ new Set(), Y.add(K);
              break;
            }
            if (!Y.has(K)) {
              Y.add(K);
              break;
            }
            k(b, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                K
              );
            });
            break;
          case ql:
            E = ro(E), ee(S, b, E, Y);
        }
        return Y;
      }
      function ge(S, b, E, Y) {
        for (var K = null, ye = null, P = null, ve = b, be = b = 0, bt = null; ve !== null && be < E.length; be++) {
          ve.index > be ? (bt = ve, ve = null) : bt = ve.sibling;
          var kt = M(
            S,
            ve,
            E[be],
            Y
          );
          if (kt === null) {
            ve === null && (ve = bt);
            break;
          }
          K = ee(
            S,
            kt,
            E[be],
            K
          ), e && ve && kt.alternate === null && t(S, ve), b = o(kt, b, be), P === null ? ye = kt : P.sibling = kt, P = kt, ve = bt;
        }
        if (be === E.length)
          return a(S, ve), Be && Na(S, be), ye;
        if (ve === null) {
          for (; be < E.length; be++)
            ve = G(S, E[be], Y), ve !== null && (K = ee(
              S,
              ve,
              E[be],
              K
            ), b = o(
              ve,
              b,
              be
            ), P === null ? ye = ve : P.sibling = ve, P = ve);
          return Be && Na(S, be), ye;
        }
        for (ve = i(ve); be < E.length; be++)
          bt = V(
            ve,
            S,
            be,
            E[be],
            Y
          ), bt !== null && (K = ee(
            S,
            bt,
            E[be],
            K
          ), e && bt.alternate !== null && ve.delete(
            bt.key === null ? be : bt.key
          ), b = o(
            bt,
            b,
            be
          ), P === null ? ye = bt : P.sibling = bt, P = bt);
        return e && ve.forEach(function(af) {
          return t(S, af);
        }), Be && Na(S, be), ye;
      }
      function Jt(S, b, E, Y) {
        if (E == null)
          throw Error("An iterable object provided no iterator.");
        for (var K = null, ye = null, P = b, ve = b = 0, be = null, bt = null, kt = E.next(); P !== null && !kt.done; ve++, kt = E.next()) {
          P.index > ve ? (be = P, P = null) : be = P.sibling;
          var af = M(S, P, kt.value, Y);
          if (af === null) {
            P === null && (P = be);
            break;
          }
          bt = ee(
            S,
            af,
            kt.value,
            bt
          ), e && P && af.alternate === null && t(S, P), b = o(af, b, ve), ye === null ? K = af : ye.sibling = af, ye = af, P = be;
        }
        if (kt.done)
          return a(S, P), Be && Na(S, ve), K;
        if (P === null) {
          for (; !kt.done; ve++, kt = E.next())
            P = G(S, kt.value, Y), P !== null && (bt = ee(
              S,
              P,
              kt.value,
              bt
            ), b = o(
              P,
              b,
              ve
            ), ye === null ? K = P : ye.sibling = P, ye = P);
          return Be && Na(S, ve), K;
        }
        for (P = i(P); !kt.done; ve++, kt = E.next())
          be = V(
            P,
            S,
            ve,
            kt.value,
            Y
          ), be !== null && (bt = ee(
            S,
            be,
            kt.value,
            bt
          ), e && be.alternate !== null && P.delete(
            be.key === null ? ve : be.key
          ), b = o(
            be,
            b,
            ve
          ), ye === null ? K = be : ye.sibling = be, ye = be);
        return e && P.forEach(function(hS) {
          return t(S, hS);
        }), Be && Na(S, ve), K;
      }
      function Le(S, b, E, Y) {
        if (typeof E == "object" && E !== null && E.type === Wn && E.key === null && (Mr(E, null, S), E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Ci:
              var K = pl(E._debugInfo);
              e: {
                for (var ye = E.key; b !== null; ) {
                  if (b.key === ye) {
                    if (ye = E.type, ye === Wn) {
                      if (b.tag === 7) {
                        a(
                          S,
                          b.sibling
                        ), Y = f(
                          b,
                          E.props.children
                        ), Y.return = S, Y._debugOwner = E._owner, Y._debugInfo = Se, Mr(E, Y, S), S = Y;
                        break e;
                      }
                    } else if (b.elementType === ye || r0(
                      b,
                      E
                    ) || typeof ye == "object" && ye !== null && ye.$$typeof === ql && ro(ye) === b.type) {
                      a(
                        S,
                        b.sibling
                      ), Y = f(b, E.props), gu(Y, E), Y.return = S, Y._debugOwner = E._owner, Y._debugInfo = Se, S = Y;
                      break e;
                    }
                    a(S, b);
                    break;
                  } else t(S, b);
                  b = b.sibling;
                }
                E.type === Wn ? (Y = qu(
                  E.props.children,
                  S.mode,
                  Y,
                  E.key
                ), Y.return = S, Y._debugOwner = S, Y._debugInfo = Se, Mr(E, Y, S), S = Y) : (Y = Xf(
                  E,
                  S.mode,
                  Y
                ), gu(Y, E), Y.return = S, Y._debugInfo = Se, S = Y);
              }
              return S = d(S), Se = K, S;
            case to:
              e: {
                for (K = E, E = K.key; b !== null; ) {
                  if (b.key === E)
                    if (b.tag === 4 && b.stateNode.containerInfo === K.containerInfo && b.stateNode.implementation === K.implementation) {
                      a(
                        S,
                        b.sibling
                      ), Y = f(
                        b,
                        K.children || []
                      ), Y.return = S, S = Y;
                      break e;
                    } else {
                      a(S, b);
                      break;
                    }
                  else t(S, b);
                  b = b.sibling;
                }
                Y = rs(
                  K,
                  S.mode,
                  Y
                ), Y.return = S, S = Y;
              }
              return d(S);
            case ql:
              return K = pl(E._debugInfo), E = ro(E), S = Le(
                S,
                b,
                E,
                Y
              ), Se = K, S;
          }
          if (Sl(E))
            return K = pl(E._debugInfo), S = ge(
              S,
              b,
              E,
              Y
            ), Se = K, S;
          if (Ze(E)) {
            if (K = pl(E._debugInfo), ye = Ze(E), typeof ye != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var P = ye.call(E);
            return P === E ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(P) !== "[object Generator]") && (jg || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), jg = !0) : E.entries !== ye || zp || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), zp = !0), S = Jt(
              S,
              b,
              P,
              Y
            ), Se = K, S;
          }
          if (typeof E.then == "function")
            return K = pl(E._debugInfo), S = Le(
              S,
              b,
              Ul(E),
              Y
            ), Se = K, S;
          if (E.$$typeof === Ra)
            return Le(
              S,
              b,
              xf(S, E),
              Y
            );
          Vo(S, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (K = "" + E, b !== null && b.tag === 6 ? (a(
          S,
          b.sibling
        ), Y = f(b, K), Y.return = S, S = Y) : (a(S, b), Y = id(
          K,
          S.mode,
          Y
        ), Y.return = S, Y._debugOwner = S, Y._debugInfo = Se, S = Y), d(S)) : (typeof E == "function" && Xo(S, E), typeof E == "symbol" && _o(S, E), a(S, b));
      }
      return function(S, b, E, Y) {
        var K = Se;
        Se = null;
        try {
          Om = 0;
          var ye = Le(
            S,
            b,
            E,
            Y
          );
          return th = null, ye;
        } catch (bt) {
          if (bt === ov) throw bt;
          var P = Xe(29, bt, null, S.mode);
          P.lanes = Y, P.return = S;
          var ve = P._debugInfo = Se;
          if (P._debugOwner = S._debugOwner, ve != null) {
            for (var be = ve.length - 1; 0 <= be; be--)
              if (typeof ve[be].stack == "string") {
                P._debugOwner = ve[be];
                break;
              }
          }
          return P;
        } finally {
          Se = K;
        }
      };
    }
    function Ur(e, t) {
      var a = Ji;
      Ee(rv, a, e), Ee(lh, t, e), Ji = a | t.baseLanes;
    }
    function Zh(e) {
      Ee(rv, Ji, e), Ee(
        lh,
        lh.current,
        e
      );
    }
    function Kh(e) {
      Ji = rv.current, Re(lh, e), Re(rv, e);
    }
    function ha(e) {
      var t = e.alternate;
      Ee(
        El,
        El.current & ah,
        e
      ), Ee(nu, e, e), Zi === null && (t === null || lh.current !== null || t.memoizedState !== null) && (Zi = e);
    }
    function Hr(e) {
      if (e.tag === 22) {
        if (Ee(El, El.current, e), Ee(nu, e, e), Zi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Zi = e);
        }
      } else Ga(e);
    }
    function Ga(e) {
      Ee(El, El.current, e), Ee(
        nu,
        nu.current,
        e
      );
    }
    function ln(e) {
      Re(nu, e), Zi === e && (Zi = null), Re(El, e);
    }
    function jo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === ar || a.data === nr))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function bu() {
      return {
        controller: new Kb(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Va(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function sc(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && Jb(kb, function() {
        e.controller.abort();
      });
    }
    function g0(e, t) {
      if (Um === null) {
        var a = Um = [];
        Dp = 0, Zs = yd(), nh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Dp++, t.then(oi, oi), t;
    }
    function oi() {
      if (--Dp === 0 && Um !== null) {
        nh !== null && (nh.status = "fulfilled");
        var e = Um;
        Um = null, Zs = 0, nh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function b0(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(f) {
          a.push(f);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var f = 0; f < a.length; f++) (0, a[f])(t);
        },
        function(f) {
          for (i.status = "rejected", i.reason = f, f = 0; f < a.length; f++)
            (0, a[f])(void 0);
        }
      ), i;
    }
    function Cr() {
      var e = Ks.current;
      return e !== null ? e : it.pooledCache;
    }
    function Qo(e, t) {
      t === null ? Ee(Ks, Ks.current, e) : Ee(Ks, t.pool, e);
    }
    function S0() {
      var e = Cr();
      return e === null ? null : { parent: Rl._currentValue, pool: e };
    }
    function Ae() {
      var e = x;
      cu === null ? cu = [e] : cu.push(e);
    }
    function Q() {
      var e = x;
      if (cu !== null && (Wc++, cu[Wc] !== e)) {
        var t = le(
          de
        );
        if (!Jg.has(t) && (Jg.add(t), cu !== null)) {
          for (var a = "", i = 0; i <= Wc; i++) {
            var f = cu[i], o = i === Wc ? e : f;
            for (f = i + 1 + ". " + f; 30 > f.length; )
              f += " ";
            f += o + `
`, a += f;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function rc(e) {
      e == null || Sl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        x,
        typeof e
      );
    }
    function wo() {
      var e = le(de);
      $g.has(e) || ($g.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Et() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ya(e, t) {
      if (Cm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          x
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        x,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ma(e[a], t[a])) return !1;
      return !0;
    }
    function ta(e, t, a, i, f, o) {
      ho = o, de = t, cu = e !== null ? e._debugHookTypes : null, Wc = -1, Cm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (o = le(
        de
      ), Op.has(o) || (Op.add(o), console.error(
        "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e !== null && e.memoizedState !== null ? mo : cu !== null ? ks : yo, Js = o = (t.mode & fa) !== ht;
      var d = Ap(a, i, f);
      if (Js = !1, ih && (d = Lo(
        t,
        a,
        i,
        f
      )), o) {
        _e(!0);
        try {
          d = Lo(
            t,
            a,
            i,
            f
          );
        } finally {
          _e(!1);
        }
      }
      return dc(e, t), d;
    }
    function dc(e, t) {
      t._debugHookTypes = cu, t.dependencies === null ? $c !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: $c
      }) : t.dependencies._debugThenableState = $c, H.H = Ki;
      var a = et !== null && et.next !== null;
      if (ho = 0, cu = x = fl = et = de = null, Wc = -1, e !== null && (e.flags & 31457280) !== (t.flags & 31457280) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), dv = !1, Hm = 0, $c = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Vl || (e = e.dependencies, e !== null && ns(e) && (Vl = !0)), sv ? (sv = !1, e = !0) : e = !1, e && (t = le(t) || "Unknown", kg.has(t) || Op.has(t) || (kg.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Lo(e, t, a, i) {
      de = e;
      var f = 0;
      do {
        if (ih && ($c = null), Hm = 0, ih = !1, f >= Wb)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (f += 1, Cm = !1, fl = et = null, e.updateQueue != null) {
          var o = e.updateQueue;
          o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
        }
        Wc = -1, H.H = $s, o = Ap(t, a, i);
      } while (ih);
      return o;
    }
    function xr() {
      var e = H.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Mn(t) : t, e = e.useState()[0], (et !== null ? et.memoizedState : null) !== e && (de.flags |= 1024), t;
    }
    function gf() {
      var e = hv !== 0;
      return hv = 0, e;
    }
    function Zo(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & ku) !== ht ? t.flags & -201328645 : t.flags & -2053, e.lanes &= ~a;
    }
    function On(e) {
      if (dv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dv = !1;
      }
      ho = 0, cu = fl = et = de = null, Wc = -1, x = null, ih = !1, Hm = hv = 0, $c = null;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return fl === null ? de.memoizedState = fl = e : fl = fl.next = e, fl;
    }
    function qe() {
      if (et === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = et.next;
      var t = fl === null ? de.memoizedState : fl.next;
      if (t !== null)
        fl = t, et = e;
      else {
        if (e === null)
          throw de.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        et = e, e = {
          memoizedState: et.memoizedState,
          baseState: et.baseState,
          baseQueue: et.baseQueue,
          queue: et.queue,
          next: null
        }, fl === null ? de.memoizedState = fl = e : fl = fl.next = e;
      }
      return fl;
    }
    function Mn(e) {
      var t = Hm;
      return Hm += 1, $c === null && ($c = Qh()), e = m0($c, e, t), t = de, (fl === null ? t.memoizedState : fl.next) === null && (t = t.alternate, H.H = t !== null && t.memoizedState !== null ? mo : yo), e;
    }
    function Su(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Mn(e);
        if (e.$$typeof === Ra) return at(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function tl(e) {
      var t = null, a = de.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = de.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(f) {
            return f.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Mp(), de.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Cm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = Z0;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Hl(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function si(e, t, a) {
      var i = Ql();
      if (a !== void 0) {
        var f = a(t);
        if (Js) {
          _e(!0);
          try {
            a(t);
          } finally {
            _e(!1);
          }
        }
      } else f = t;
      return i.memoizedState = i.baseState = f, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, i.queue = e, e = e.dispatch = ty.bind(
        null,
        de,
        e
      ), [i.memoizedState, e];
    }
    function Tu(e) {
      var t = qe();
      return bf(t, et, e);
    }
    function bf(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var f = e.baseQueue, o = i.pending;
      if (o !== null) {
        if (f !== null) {
          var d = f.next;
          f.next = o.next, o.next = d;
        }
        t.baseQueue !== f && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = f = o, i.pending = null;
      }
      if (o = e.baseState, f === null) e.memoizedState = o;
      else {
        t = f.next;
        var h = d = null, m = null, p = t, O = !1;
        do {
          var G = p.lane & -536870913;
          if (G !== p.lane ? (Me & G) === G : (ho & G) === G) {
            var M = p.revertLane;
            if (M === 0)
              m !== null && (m = m.next = {
                lane: 0,
                revertLane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), G === Zs && (O = !0);
            else if ((ho & M) === M) {
              p = p.next, M === Zs && (O = !0);
              continue;
            } else
              G = {
                lane: 0,
                revertLane: p.revertLane,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, m === null ? (h = m = G, d = o) : m = m.next = G, de.lanes |= M, go |= M;
            G = p.action, Js && a(o, G), o = p.hasEagerState ? p.eagerState : a(o, G);
          } else
            M = {
              lane: G,
              revertLane: p.revertLane,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, m === null ? (h = m = M, d = o) : m = m.next = M, de.lanes |= G, go |= G;
          p = p.next;
        } while (p !== null && p !== t);
        if (m === null ? d = o : m.next = h, !Ma(o, e.memoizedState) && (Vl = !0, O && (a = nh, a !== null)))
          throw a;
        e.memoizedState = o, e.baseState = d, e.baseQueue = m, i.lastRenderedState = o;
      }
      return f === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Cl(e) {
      var t = qe(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, f = a.pending, o = t.memoizedState;
      if (f !== null) {
        a.pending = null;
        var d = f = f.next;
        do
          o = e(o, d.action), d = d.next;
        while (d !== f);
        Ma(o, t.memoizedState) || (Vl = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), a.lastRenderedState = o;
      }
      return [o, i];
    }
    function la(e, t, a) {
      var i = de, f = Ql();
      if (Be) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var o = a();
        uh || o === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), uh = !0);
      } else {
        if (o = t(), uh || (a = t(), Ma(o, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), uh = !0)), it === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        Me & 60 || Hn(i, t, o);
      }
      return f.memoizedState = o, a = { value: o, getSnapshot: t }, f.queue = a, yi(
        ri.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, mc(
        iu | Al,
        Cn.bind(
          null,
          i,
          a,
          o,
          t
        ),
        { destroy: void 0 },
        null
      ), o;
    }
    function Un(e, t, a) {
      var i = de, f = qe(), o = Be;
      if (o) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !uh) {
        var d = t();
        Ma(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), uh = !0);
      }
      (d = !Ma(
        (et || f).memoizedState,
        a
      )) && (f.memoizedState = a, Vl = !0), f = f.queue;
      var h = ri.bind(null, i, f, e);
      if (jt(2048, Al, h, [e]), f.getSnapshot !== t || d || fl !== null && fl.memoizedState.tag & iu) {
        if (i.flags |= 2048, mc(
          iu | Al,
          Cn.bind(
            null,
            i,
            f,
            a,
            t
          ),
          { destroy: void 0 },
          null
        ), it === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        o || ho & 60 || Hn(i, t, a);
      }
      return a;
    }
    function Hn(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = de.updateQueue, t === null ? (t = Mp(), de.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function Cn(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Jh(t) && Br(e);
    }
    function ri(e, t, a) {
      return a(function() {
        Jh(t) && Br(e);
      });
    }
    function Jh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Ma(e, a);
      } catch {
        return !0;
      }
    }
    function Br(e) {
      var t = vl(e, 2);
      t !== null && ke(t, e, 2);
    }
    function Ko(e) {
      var t = Ql();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Js) {
          _e(!0);
          try {
            a();
          } finally {
            _e(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hl,
        lastRenderedState: e
      }, t;
    }
    function gl(e) {
      e = Ko(e);
      var t = e.queue, a = Df.bind(
        null,
        de,
        t
      );
      return t.dispatch = a, [e.memoizedState, a];
    }
    function _t(e) {
      var t = Ql();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Fo.bind(
        null,
        de,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function xe(e, t) {
      var a = qe();
      return Xa(a, et, e, t);
    }
    function Xa(e, t, a, i) {
      return e.baseState = a, bf(
        e,
        et,
        typeof i == "function" ? i : Hl
      );
    }
    function an(e, t) {
      var a = qe();
      return et !== null ? Xa(a, et, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function kh(e, t, a, i, f) {
      if (zu(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var o = {
          payload: f,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            o.listeners.push(d);
          }
        };
        H.T !== null ? a(!0) : o.isTransition = !1, i(o), a = t.pending, a === null ? (o.next = t.pending = o, di(t, o)) : (o.next = a.next, t.pending = a.next = o);
      }
    }
    function di(e, t) {
      var a = t.action, i = t.payload, f = e.state;
      if (t.isTransition) {
        var o = H.T, d = {};
        H.T = d, H.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(f, i), m = H.S;
          m !== null && m(d, h), $h(e, t, h);
        } catch (p) {
          hc(e, t, p);
        } finally {
          H.T = o, o === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(f, i), $h(e, t, d);
        } catch (p) {
          hc(e, t, p);
        }
    }
    function $h(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          Wh(e, t, i);
        },
        function(i) {
          return hc(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
      )) : Wh(e, t, a);
    }
    function Wh(e, t, a) {
      t.status = "fulfilled", t.value = a, Sf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, di(e, a)));
    }
    function hc(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Sf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Sf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Tf(e, t) {
      return t;
    }
    function xn(e, t) {
      if (Be) {
        var a = it.formState;
        if (a !== null) {
          e: {
            var i = de;
            if (Be) {
              if (kl) {
                t: {
                  for (var f = kl, o = Li; f.nodeType !== 8; ) {
                    if (!o) {
                      f = null;
                      break t;
                    }
                    if (f = na(
                      f.nextSibling
                    ), f === null) {
                      f = null;
                      break t;
                    }
                  }
                  o = f.data, f = o === tg || o === Y1 ? f : null;
                }
                if (f) {
                  kl = na(
                    f.nextSibling
                  ), i = f.data === tg;
                  break e;
                }
              }
              tn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Ql(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tf,
        lastRenderedState: t
      }, a.queue = i, a = Df.bind(
        null,
        de,
        i
      ), i.dispatch = a, i = Ko(!1), o = Fo.bind(
        null,
        de,
        !1,
        i.queue
      ), i = Ql(), f = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = f, a = kh.bind(
        null,
        de,
        f,
        o,
        a
      ), f.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Jo(e) {
      var t = qe();
      return qr(t, et, e);
    }
    function qr(e, t, a) {
      t = bf(
        e,
        t,
        Tf
      )[0], e = Tu(Hl)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? Mn(t) : t;
      var i = qe(), f = i.queue, o = f.dispatch;
      return a !== i.memoizedState && (de.flags |= 2048, mc(
        iu | Al,
        T0.bind(null, f, a),
        { destroy: void 0 },
        null
      )), [t, o, e];
    }
    function T0(e, t) {
      e.action = t;
    }
    function yc(e) {
      var t = qe(), a = et;
      if (a !== null)
        return qr(t, a, e);
      qe(), t = t.memoizedState, a = qe();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function mc(e, t, a, i) {
      return e = { tag: e, create: t, inst: a, deps: i, next: null }, t = de.updateQueue, t === null && (t = Mp(), de.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function vc(e) {
      var t = Ql();
      return e = { current: e }, t.memoizedState = e;
    }
    function hi(e, t, a, i) {
      var f = Ql();
      de.flags |= e, f.memoizedState = mc(
        iu | t,
        a,
        { destroy: void 0 },
        i === void 0 ? null : i
      );
    }
    function jt(e, t, a, i) {
      var f = qe();
      i = i === void 0 ? null : i;
      var o = f.memoizedState.inst;
      et !== null && i !== null && ya(i, et.memoizedState.deps) ? f.memoizedState = mc(t, a, o, i) : (de.flags |= e, f.memoizedState = mc(
        iu | t,
        a,
        o,
        i
      ));
    }
    function yi(e, t) {
      (de.mode & ku) !== ht && (de.mode & Dg) === ht ? hi(142608384, Al, e, t) : hi(8390656, Al, e, t);
    }
    function Ef(e, t) {
      var a = 4194308;
      return (de.mode & ku) !== ht && (a |= 67108864), hi(a, $l, e, t);
    }
    function Af(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Rf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (de.mode & ku) !== ht && (i |= 67108864), hi(
        i,
        $l,
        Af.bind(null, t, e),
        a
      );
    }
    function ko(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, jt(
        4,
        $l,
        Af.bind(null, t, e),
        a
      );
    }
    function Yr(e, t) {
      return Ql().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Bn(e, t) {
      var a = qe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && ya(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Nr(e, t) {
      var a = Ql();
      t = t === void 0 ? null : t;
      var i = e();
      if (Js) {
        _e(!0);
        try {
          e();
        } finally {
          _e(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Eu(e, t) {
      var a = qe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && ya(t, i[1]))
        return i[0];
      if (i = e(), Js) {
        _e(!0);
        try {
          e();
        } finally {
          _e(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function zf(e, t) {
      var a = Ql();
      return $o(a, e, t);
    }
    function Fh(e, t) {
      var a = qe();
      return ma(
        a,
        et.memoizedState,
        e,
        t
      );
    }
    function Gr(e, t) {
      var a = qe();
      return et === null ? $o(a, e, t) : ma(
        a,
        et.memoizedState,
        e,
        t
      );
    }
    function $o(e, t, a) {
      return a === void 0 || ho & 1073741824 ? e.memoizedState = t : (e.memoizedState = a, e = cd(), de.lanes |= e, go |= e, a);
    }
    function ma(e, t, a, i) {
      return Ma(a, t) ? a : lh.current !== null ? (e = $o(e, a, i), Ma(e, t) || (Vl = !0), e) : ho & 42 ? (e = cd(), de.lanes |= e, go |= e, t) : (Vl = !0, e.memoizedState = a);
    }
    function nn(e, t, a, i, f) {
      var o = Pe.p;
      Pe.p = o !== 0 && o < wa ? o : wa;
      var d = H.T, h = {};
      H.T = h, Fo(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var m = f(), p = H.S;
        if (p !== null && p(h, m), m !== null && typeof m == "object" && typeof m.then == "function") {
          var O = b0(
            m,
            i
          );
          Ru(
            e,
            t,
            O,
            wl(e)
          );
        } else
          Ru(
            e,
            t,
            i,
            wl(e)
          );
      } catch (G) {
        Ru(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: G },
          wl(e)
        );
      } finally {
        Pe.p = o, H.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function qn(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var f = Ih(e).queue;
      nn(
        e,
        f,
        t,
        ir,
        a === null ? Ja : function() {
          return Au(e), a(i);
        }
      );
    }
    function Ih(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ir,
        baseState: ir,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Hl,
          lastRenderedState: ir
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Hl,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Au(e) {
      H.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Ih(e).next.queue;
      Ru(
        e,
        t,
        {},
        wl(e)
      );
    }
    function un() {
      var e = Ko(!1);
      return e = nn.bind(
        null,
        de,
        e.queue,
        !0,
        !1
      ), Ql().memoizedState = e, [!1, e];
    }
    function Ct() {
      var e = Tu(Hl)[0], t = qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Mn(e),
        t
      ];
    }
    function Wo() {
      var e = Cl(Hl)[0], t = qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Mn(e),
        t
      ];
    }
    function pc() {
      return at(Km);
    }
    function Ph() {
      var e = Ql(), t = it.identifierPrefix;
      if (Be) {
        var a = Jc, i = Kc;
        a = (i & ~(1 << 32 - Gl(i) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = hv++, 0 < a && (t += "H" + a.toString(32)), t += ":";
      } else
        a = $b++, t = ":" + t + "r" + a.toString(32) + ":";
      return e.memoizedState = t;
    }
    function ey() {
      return Ql().memoizedState = Qt.bind(
        null,
        de
      );
    }
    function Qt(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = wl(a);
            e = Uu(i);
            var f = Hu(a, e, i);
            f !== null && (ke(f, a, i), us(f, a, i)), a = bu(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function ty(e, t, a, i) {
      typeof i == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = wl(e), a = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, zu(e) ? gc(t, a) : (a = Yh(
        e,
        t,
        a,
        i
      ), a !== null && (ke(
        a,
        e,
        i
      ), E0(
        a,
        t,
        i
      ))), se(e, i);
    }
    function Df(e, t, a, i) {
      typeof i == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = wl(e), Ru(
        e,
        t,
        a,
        i
      ), se(e, i);
    }
    function Ru(e, t, a, i) {
      var f = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (zu(e)) gc(t, f);
      else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) {
          var d = H.H;
          H.H = Ca;
          try {
            var h = t.lastRenderedState, m = o(h, a);
            if (f.hasEagerState = !0, f.eagerState = m, Ma(m, h))
              return Rr(e, t, f, 0), it === null && Ar(), !1;
          } catch {
          } finally {
            H.H = d;
          }
        }
        if (a = Yh(e, t, f, i), a !== null)
          return ke(a, e, i), E0(a, t, i), !0;
      }
      return !1;
    }
    function Fo(e, t, a, i) {
      if (H.T === null && Zs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: yd(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, zu(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Yh(
          e,
          a,
          i,
          2
        ), t !== null && ke(t, e, 2);
      se(e, 2);
    }
    function zu(e) {
      var t = e.alternate;
      return e === de || t !== null && t === de;
    }
    function gc(e, t) {
      ih = dv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function E0(e, t, a) {
      if (a & 4194176) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Fl(e, a);
      }
    }
    function Vr(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        i1.has(t) || (i1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function ly(e, t, a, i) {
      var f = e.memoizedState, o = a(i, f);
      if (e.mode & fa) {
        _e(!0);
        try {
          o = a(i, f);
        } finally {
          _e(!1);
        }
      }
      o === void 0 && (t = oe(t) || "Component", l1.has(t) || (l1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), f = o == null ? f : me({}, f, o), e.memoizedState = f, e.lanes === 0 && (e.updateQueue.baseState = f);
    }
    function ay(e, t, a, i, f, o, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          o,
          d
        ), e.mode & fa) {
          _e(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              o,
              d
            );
          } finally {
            _e(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          oe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !qo(a, i) || !qo(f, o) : !0;
    }
    function mi(e, t, a, i) {
      var f = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== f && (e = le(e) || "Component", Fg.has(e) || (Fg.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Up.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Du(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = me({}, a));
        for (var f in e)
          a[f] === void 0 && (a[f] = e[f]);
      }
      return a;
    }
    function Io(e, t) {
      yv(e), e = ch ? "An error occurred in the <" + ch + "> component." : "An error occurred in one of your React components.";
      var a = H.getCurrentStack, i = t.componentStack != null ? t.componentStack : "";
      H.getCurrentStack = function() {
        return i;
      };
      try {
        console.warn(
          `%s

%s
`,
          e,
          `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
        );
      } finally {
        H.getCurrentStack = a;
      }
    }
    function ny(e, t) {
      var a = ch ? "The above error occurred in the <" + ch + "> component." : "The above error occurred in one of your React components.", i = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Hp || "Anonymous") + "."), f = H.getCurrentStack, o = t.componentStack != null ? t.componentStack : "";
      H.getCurrentStack = function() {
        return o;
      };
      try {
        typeof e == "object" && e !== null && typeof e.environmentName == "string" ? Wf(
          "error",
          [
            `%o

%s

%s
`,
            e,
            a,
            i
          ],
          e.environmentName
        )() : console.error(
          `%o

%s

%s
`,
          e,
          a,
          i
        );
      } finally {
        H.getCurrentStack = f;
      }
    }
    function Ou(e) {
      yv(e);
    }
    function he(e, t) {
      try {
        ch = t.source ? le(t.source) : null, Hp = null;
        var a = t.value;
        if (H.actQueue !== null)
          H.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (f) {
        setTimeout(function() {
          throw f;
        });
      }
    }
    function je(e, t, a) {
      try {
        ch = a.source ? le(a.source) : null, Hp = le(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (f) {
        setTimeout(function() {
          throw f;
        });
      }
    }
    function At(e, t, a) {
      return a = Uu(a), a.tag = Yp, a.payload = { element: null }, a.callback = function() {
        k(t.source, he, e, t);
      }, a;
    }
    function Of(e) {
      return e = Uu(e), e.tag = Yp, e;
    }
    function vi(e, t, a, i) {
      var f = a.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var o = i.value;
        e.payload = function() {
          return f(o);
        }, e.callback = function() {
          d0(a), k(
            i.source,
            je,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        d0(a), k(
          i.source,
          je,
          t,
          a,
          i
        ), typeof f != "function" && (So === null ? So = /* @__PURE__ */ new Set([this]) : So.add(this)), wb(this, i), typeof f == "function" || !(a.lanes & 2) && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          le(a) || "Unknown"
        );
      });
    }
    function bc(e, t, a, i, f) {
      if (a.flags |= 32768, Kl && ot(e, f), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && as(
          t,
          a,
          f,
          !0
        ), Be && (kc = !0), a = nu.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Zi === null ? ms() : a.alternate === null && qt === Pc && (qt = Xp), a.flags &= -257, a.flags |= 65536, a.lanes = f, i === Ep ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), sn(e, i, f)), !1;
            case 22:
              return a.flags |= 65536, i === Ep ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), sn(e, i, f)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return sn(e, i, f), ms(), !1;
      }
      if (Be)
        return kc = !0, t = nu.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = f, i !== Tp && oc(
          ea(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Tp && oc(
          ea(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, f &= -f, e.lanes |= f, i = ea(i, a), f = At(
          e.stateNode,
          i,
          f
        ), is(e, f), qt !== Ws && (qt = hh)), !1;
      var o = ea(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Vm === null ? Vm = [o] : Vm.push(o), qt !== Ws && (qt = hh), t === null) return !0;
      i = ea(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = f & -f, a.lanes |= e, e = At(
              a.stateNode,
              i,
              e
            ), is(a, e), !1;
          case 1:
            if (t = a.type, o = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (So === null || !So.has(o))))
              return a.flags |= 65536, f &= -f, a.lanes |= f, f = Of(f), vi(
                f,
                e,
                a,
                i
              ), is(a, f), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function xt(e, t, a, i) {
      t.child = e === null ? Zg(t, null, a, i) : Ls(
        t,
        e.child,
        a,
        i
      );
    }
    function Mf(e, t, a, i, f) {
      a = a.render;
      var o = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return pi(t), Tn(t), i = ta(
        e,
        t,
        a,
        d,
        o,
        f
      ), h = gf(), T(), e !== null && !Vl ? (Zo(e, t, f), cn(e, t, f)) : (Be && h && _h(t), t.flags |= 1, xt(e, t, i, f), t.child);
    }
    function Sc(e, t, a, i, f) {
      if (e === null) {
        var o = a.type;
        return typeof o == "function" && !ss(o) && o.defaultProps === void 0 && a.compare === null ? (a = uc(o), t.tag = 15, t.type = a, Po(t, o), A0(
          e,
          t,
          a,
          i,
          f
        )) : (e = nd(
          a.type,
          null,
          i,
          t,
          t.mode,
          f
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (o = e.child, !Lr(e, f)) {
        var d = o.memoizedProps;
        if (a = a.compare, a = a !== null ? a : qo, a(d, i) && e.ref === t.ref)
          return cn(
            e,
            t,
            f
          );
      }
      return t.flags |= 1, e = Vn(o, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function A0(e, t, a, i, f) {
      if (e !== null) {
        var o = e.memoizedProps;
        if (qo(o, i) && e.ref === t.ref && t.type === e.type)
          if (Vl = !1, t.pendingProps = i = o, Lr(e, f))
            e.flags & 131072 && (Vl = !0);
          else
            return t.lanes = e.lanes, cn(e, t, f);
      }
      return _r(
        e,
        t,
        a,
        i,
        f
      );
    }
    function Rt(e, t, a) {
      var i = t.pendingProps, f = i.children, o = (t.stateNode._pendingVisibility & bm) !== 0, d = e !== null ? e.memoizedState : null;
      if (Tc(e, t), i.mode === "hidden" || o) {
        if (t.flags & 128) {
          if (i = d !== null ? d.baseLanes | a : a, e !== null) {
            for (f = t.child = e.child, o = 0; f !== null; )
              o = o | f.lanes | f.childLanes, f = f.sibling;
            t.childLanes = o & ~i;
          } else t.childLanes = 0, t.child = null;
          return Xr(
            e,
            t,
            i,
            a
          );
        }
        if (a & 536870912)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Qo(
            t,
            d !== null ? d.cachePool : null
          ), d !== null ? Ur(t, d) : Zh(t), Hr(t);
        else
          return t.lanes = t.childLanes = 536870912, Xr(
            e,
            t,
            d !== null ? d.baseLanes | a : a,
            a
          );
      } else
        d !== null ? (Qo(t, d.cachePool), Ur(t, d), Ga(t), t.memoizedState = null) : (e !== null && Qo(t, null), Zh(t), Ga(t));
      return xt(e, t, f, a), t.child;
    }
    function Xr(e, t, a, i) {
      var f = Cr();
      return f = f === null ? null : {
        parent: Rl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Qo(t, null), Zh(t), Hr(t), e !== null && as(e, t, i, !0), null;
    }
    function Tc(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 2097664);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 2097664);
      }
    }
    function _r(e, t, a, i, f) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var o = oe(a) || "Unknown";
        f1[o] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          o,
          o
        ), f1[o] = !0);
      }
      return t.mode & fa && $u.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Po(t, t.type), a.contextTypes && (o = oe(a) || "Unknown", s1[o] || (s1[o] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        o
      )))), pi(t), Tn(t), a = ta(
        e,
        t,
        a,
        i,
        void 0,
        f
      ), i = gf(), T(), e !== null && !Vl ? (Zo(e, t, f), cn(e, t, f)) : (Be && i && _h(t), t.flags |= 1, xt(e, t, a, f), t.child);
    }
    function uy(e, t, a, i, f, o) {
      return pi(t), Tn(t), Wc = -1, Cm = e !== null && e.type !== t.type, t.updateQueue = null, a = Lo(
        t,
        i,
        a,
        f
      ), dc(e, t), i = gf(), T(), e !== null && !Vl ? (Zo(e, t, o), cn(e, t, o)) : (Be && i && _h(t), t.flags |= 1, xt(e, t, a, o), t.child);
    }
    function R0(e, t, a, i, f) {
      switch (St(t)) {
        case !1:
          var o = t.stateNode, d = new t.type(
            t.memoizedProps,
            o.context
          ).state;
          o.updater.enqueueSetState(o, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, o = Error("Simulated error coming from DevTools");
          var h = f & -f;
          if (t.lanes |= h, d = it, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Of(h), vi(
            h,
            d,
            t,
            ea(o, t)
          ), is(t, h);
      }
      if (pi(t), t.stateNode === null) {
        if (d = so, o = a.contextType, "contextType" in a && o !== null && (o === void 0 || o.$$typeof !== Ra) && !u1.has(a) && (u1.add(a), h = o === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? " However, it is set to a " + typeof o + "." : o.$$typeof === Os ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          oe(a) || "Component",
          h
        )), typeof o == "object" && o !== null && (d = at(o)), o = new a(i, d), t.mode & fa) {
          _e(!0);
          try {
            o = new a(i, d);
          } finally {
            _e(!1);
          }
        }
        if (d = t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Up, t.stateNode = o, o._reactInternals = t, o._reactInternalInstance = Wg, typeof a.getDerivedStateFromProps == "function" && d === null && (d = oe(a) || "Component", Ig.has(d) || (Ig.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          o.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function") {
          var m = h = d = null;
          if (typeof o.componentWillMount == "function" && o.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof o.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof o.componentWillReceiveProps == "function" && o.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof o.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof o.componentWillUpdate == "function" && o.componentWillUpdate.__suppressDeprecationWarning !== !0 ? m = "componentWillUpdate" : typeof o.UNSAFE_componentWillUpdate == "function" && (m = "UNSAFE_componentWillUpdate"), d !== null || h !== null || m !== null) {
            o = oe(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            e1.has(o) || (e1.add(o), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              o,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              m !== null ? `
  ` + m : ""
            ));
          }
        }
        o = t.stateNode, d = oe(a) || "Component", o.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !o.getInitialState || o.getInitialState.isReactClassApproved || o.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), o.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !n1.has(a) && (n1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !a1.has(a) && (a1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof o.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          oe(a) || "A pure component"
        ), typeof o.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof o.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof o.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof o.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = o.props !== i, o.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), o.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof o.getSnapshotBeforeUpdate != "function" || typeof o.componentDidUpdate == "function" || Pg.has(a) || (Pg.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          oe(a)
        )), typeof o.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof o.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = o.state) && (typeof h != "object" || Sl(h)) && console.error("%s.state: must be set to an object or null", d), typeof o.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), o = t.stateNode, o.props = i, o.state = t.memoizedState, o.refs = {}, Jr(t), d = a.contextType, o.context = typeof d == "object" && d !== null ? at(d) : so, o.state === i && (d = oe(a) || "Component", t1.has(d) || (t1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & fa && $u.recordLegacyContextWarning(
          t,
          o
        ), $u.recordUnsafeLifecycleWarnings(
          t,
          o
        ), o.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (ly(
          t,
          a,
          d,
          i
        ), o.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (d = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), d !== o.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          le(t) || "Component"
        ), Up.enqueueReplaceState(
          o,
          o.state,
          null
        )), Bf(t, i, o, f), Gn(), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ku) !== ht && (t.flags |= 67108864), o = !0;
      } else if (e === null) {
        o = t.stateNode;
        var O = t.memoizedProps;
        h = Du(a, O), o.props = h;
        var G = o.context;
        m = a.contextType, d = so, typeof m == "object" && m !== null && (d = at(m)), p = a.getDerivedStateFromProps, m = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function", O = t.pendingProps !== O, m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (O || G !== d) && mi(
          t,
          o,
          i,
          d
        ), po = !1;
        var M = t.memoizedState;
        o.state = M, Bf(t, i, o, f), Gn(), G = t.memoizedState, O || M !== G || po ? (typeof p == "function" && (ly(
          t,
          a,
          p,
          i
        ), G = t.memoizedState), (h = po || ay(
          t,
          a,
          h,
          i,
          M,
          G,
          d
        )) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ku) !== ht && (t.flags |= 67108864)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ku) !== ht && (t.flags |= 67108864), t.memoizedProps = i, t.memoizedState = G), o.props = i, o.state = G, o.context = d, o = h) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ku) !== ht && (t.flags |= 67108864), o = !1);
      } else {
        o = t.stateNode, kr(e, t), d = t.memoizedProps, m = Du(a, d), o.props = m, p = t.pendingProps, M = o.context, G = a.contextType, h = so, typeof G == "object" && G !== null && (h = at(G)), O = a.getDerivedStateFromProps, (G = typeof O == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (d !== p || M !== h) && mi(
          t,
          o,
          i,
          h
        ), po = !1, M = t.memoizedState, o.state = M, Bf(t, i, o, f), Gn();
        var V = t.memoizedState;
        d !== p || M !== V || po || e !== null && e.dependencies !== null && ns(e.dependencies) ? (typeof O == "function" && (ly(
          t,
          a,
          O,
          i
        ), V = t.memoizedState), (m = po || ay(
          t,
          a,
          m,
          i,
          M,
          V,
          h
        ) || e !== null && e.dependencies !== null && ns(e.dependencies)) ? (G || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, V, h), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(
          i,
          V,
          h
        )), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), o.props = i, o.state = V, o.context = h, o = m) : (typeof o.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), o = !1);
      }
      if (h = o, Tc(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, H.getCurrentStack = t === null ? null : rl, za = !1, Yl = t, d && typeof a.getDerivedStateFromError != "function")
          a = null, La = -1;
        else {
          if (Tn(t), a = Cg(h), t.mode & fa) {
            _e(!0);
            try {
              Cg(h);
            } finally {
              _e(!1);
            }
          }
          T();
        }
        t.flags |= 1, e !== null && d ? (t.child = Ls(
          t,
          e.child,
          null,
          f
        ), t.child = Ls(
          t,
          null,
          a,
          f
        )) : xt(
          e,
          t,
          a,
          f
        ), t.memoizedState = h.state, e = t.child;
      } else
        e = cn(
          e,
          t,
          f
        );
      return f = t.stateNode, o && f.props !== i && (fh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        le(t) || "a component"
      ), fh = !0), e;
    }
    function jr(e, t, a, i) {
      return pf(), t.flags |= 256, xt(e, t, a, i), t.child;
    }
    function Po(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = oe(t) || "Unknown", r1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), r1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = oe(t) || "Unknown", o1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), o1[t] = !0));
    }
    function es(e) {
      return { baseLanes: e, cachePool: S0() };
    }
    function xl(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= bn), e;
    }
    function Ut(e, t, a) {
      var i, f = t.pendingProps;
      Yt(t) && (t.flags |= 128);
      var o = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (El.current & Mm) !== 0), i && (o = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Be) {
          if (o ? ha(t) : Ga(t), Be) {
            var h = kl, m;
            if (!(m = !h)) {
              e: {
                var p = h;
                for (m = Li; p.nodeType !== 8; ) {
                  if (!m) {
                    m = null;
                    break e;
                  }
                  if (p = na(p.nextSibling), p === null) {
                    m = null;
                    break e;
                  }
                }
                m = p;
              }
              m !== null ? (ci(), t.memoizedState = {
                dehydrated: m,
                treeContext: ws !== null ? { id: Kc, overflow: Jc } : null,
                retryLane: 536870912
              }, p = Xe(18, null, null, ht), p.stateNode = m, p.return = t, t.child = p, Ua = t, kl = null, m = !0) : m = !1, m = !m;
            }
            m && (fc(
              t,
              h
            ), tn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return h.data === nr ? t.lanes = 16 : t.lanes = 536870912, null;
          ln(t);
        }
        return h = f.children, f = f.fallback, o ? (Ga(t), o = t.mode, h = Ec(
          {
            mode: "hidden",
            children: h
          },
          o
        ), f = qu(
          f,
          o,
          a,
          null
        ), h.return = t, f.return = t, h.sibling = f, t.child = h, o = t.child, o.memoizedState = es(a), o.childLanes = xl(
          e,
          i,
          a
        ), t.memoizedState = xp, f) : (ha(t), Uf(
          t,
          h
        ));
      }
      var O = e.memoizedState;
      if (O !== null && (h = O.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ha(t), t.flags &= -257, t = Hf(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (Ga(t), t.child = e.child, t.flags |= 128, t = null) : (Ga(t), o = f.fallback, h = t.mode, f = Ec(
            {
              mode: "visible",
              children: f.children
            },
            h
          ), o = qu(
            o,
            h,
            a,
            null
          ), o.flags |= 2, f.return = t, o.return = t, f.sibling = o, t.child = f, Ls(
            t,
            e.child,
            null,
            a
          ), f = t.child, f.memoizedState = es(a), f.childLanes = xl(
            e,
            i,
            a
          ), t.memoizedState = xp, t = o);
        else if (ha(t), Be && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), h.data === nr) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            m = i.dgst;
            var G = i.msg;
            p = i.stck;
            var M = i.cstck;
          }
          h = G, i = m, f = p, m = o = M, o = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), o.stack = f || "", o.digest = i, i = m === void 0 ? null : m, f = {
            value: o,
            source: null,
            stack: i
          }, typeof i == "string" && Sp.set(
            o,
            f
          ), oc(f), t = Hf(
            e,
            t,
            a
          );
        } else if (Vl || as(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Vl || i) {
          if (i = it, i !== null) {
            if (f = a & -a, f & 42)
              f = 1;
            else
              switch (f) {
                case 2:
                  f = 1;
                  break;
                case 8:
                  f = 4;
                  break;
                case 32:
                  f = 16;
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
                  f = 64;
                  break;
                case 268435456:
                  f = 134217728;
                  break;
                default:
                  f = 0;
              }
            if (f = f & (i.suspendedLanes | a) ? 0 : f, f !== 0 && f !== O.retryLane)
              throw O.retryLane = f, vl(
                e,
                f
              ), ke(
                i,
                e,
                f
              ), c1;
          }
          h.data === ar || ms(), t = Hf(
            e,
            t,
            a
          );
        } else
          h.data === ar ? (t.flags |= 128, t.child = e.child, t = B0.bind(
            null,
            e
          ), h._reactRetry = t, t = null) : (e = O.treeContext, kl = na(
            h.nextSibling
          ), Ua = t, Be = !0, Wu = null, kc = !1, au = null, Li = !1, e !== null && (ci(), tu[lu++] = Kc, tu[lu++] = Jc, tu[lu++] = ws, Kc = e.id, Jc = e.overflow, ws = t), t = Uf(
            t,
            f.children
          ), t.flags |= 4096);
        return t;
      }
      return o ? (Ga(t), o = f.fallback, h = t.mode, m = e.child, p = m.sibling, f = Vn(
        m,
        {
          mode: "hidden",
          children: f.children
        }
      ), f.subtreeFlags = m.subtreeFlags & 31457280, p !== null ? o = Vn(
        p,
        o
      ) : (o = qu(
        o,
        h,
        a,
        null
      ), o.flags |= 2), o.return = t, f.return = t, f.sibling = o, t.child = f, f = o, o = t.child, h = e.child.memoizedState, h === null ? h = es(a) : (m = h.cachePool, m !== null ? (p = Rl._currentValue, m = m.parent !== p ? { parent: p, pool: p } : m) : m = S0(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: m
      }), o.memoizedState = h, o.childLanes = xl(
        e,
        i,
        a
      ), t.memoizedState = xp, f) : (ha(t), a = e.child, e = a.sibling, a = Vn(a, {
        mode: "visible",
        children: f.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Uf(e, t) {
      return t = Ec(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ec(e, t) {
      return ud(e, t, 0, null);
    }
    function Hf(e, t, a) {
      return Ls(t, e.child, null, a), e = Uf(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Qr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), ls(
        e.return,
        t,
        a
      );
    }
    function Yn(e, t) {
      var a = Sl(e);
      return e = !a && typeof Ze(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Cf(e, t, a, i, f) {
      var o = e.memoizedState;
      o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: f
      } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = a, o.tailMode = f);
    }
    function wr(e, t, a) {
      var i = t.pendingProps, f = i.revealOrder, o = i.tail;
      if (i = i.children, f !== void 0 && f !== "forwards" && f !== "backwards" && f !== "together" && !d1[f])
        if (d1[f] = !0, typeof f == "string")
          switch (f.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                f,
                f.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                f,
                f.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                f
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            f
          );
      o === void 0 || Cp[o] || (o !== "collapsed" && o !== "hidden" ? (Cp[o] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        o
      )) : f !== "forwards" && f !== "backwards" && (Cp[o] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        o
      )));
      e: if ((f === "forwards" || f === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Sl(i)) {
          for (var d = 0; d < i.length; d++)
            if (!Yn(i[d], d)) break e;
        } else if (d = Ze(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), m = 0; !h.done; h = d.next()) {
              if (!Yn(h.value, m)) break e;
              m++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            f
          );
      if (xt(e, t, i, a), i = El.current, i & Mm)
        i = i & ah | Mm, t.flags |= 128;
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Qr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Qr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= ah;
      }
      switch (Ee(El, i, t), f) {
        case "forwards":
          for (a = t.child, f = null; a !== null; )
            e = a.alternate, e !== null && jo(e) === null && (f = a), a = a.sibling;
          a = f, a === null ? (f = t.child, t.child = null) : (f = a.sibling, a.sibling = null), Cf(
            t,
            !1,
            f,
            a,
            o
          );
          break;
        case "backwards":
          for (a = null, f = t.child, t.child = null; f !== null; ) {
            if (e = f.alternate, e !== null && jo(e) === null) {
              t.child = f;
              break;
            }
            e = f.sibling, f.sibling = a, a = f, f = e;
          }
          Cf(
            t,
            !0,
            a,
            null,
            o
          );
          break;
        case "together":
          Cf(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function cn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), La = -1, go |= t.lanes, !(a & t.childLanes))
        if (e !== null) {
          if (as(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Vn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Vn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Lr(e, t) {
      return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && ns(e)));
    }
    function z0(e, t, a) {
      switch (t.tag) {
        case 3:
          ce(
            t,
            t.stateNode.containerInfo
          ), Mu(
            t,
            Rl,
            e.memoizedState.cache
          ), pf();
          break;
        case 27:
        case 5:
          ka(t);
          break;
        case 4:
          ce(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Mu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          a & t.childLanes && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ha(t), t.flags |= 128, null) : a & t.child.childLanes ? Ut(
              e,
              t,
              a
            ) : (ha(t), e = cn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ha(t);
          break;
        case 19:
          var f = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (as(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), f) {
            if (i)
              return wr(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (f = t.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Ee(
            El,
            El.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Rt(e, t, a);
        case 24:
          Mu(
            t,
            Rl,
            e.memoizedState.cache
          );
      }
      return cn(e, t, a);
    }
    function Zr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = nd(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        );
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var f = i.child;
          if (f === null)
            throw Error("Expected parent to have a child.");
          for (; f.sibling !== t; )
            if (f = f.sibling, f === null)
              throw Error("Expected to find the previous sibling.");
          f.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Vl = !0;
        else {
          if (!Lr(e, a) && !(t.flags & 128))
            return Vl = !1, z0(
              e,
              t,
              a
            );
          Vl = !!(e.flags & 131072);
        }
      else
        Vl = !1, (i = Be) && (ci(), i = (t.flags & 1048576) !== 0), i && (i = t.index, ci(), h0(t, fv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = ro(t.elementType), t.type = e, typeof e == "function")
            ss(e) ? (i = Du(
              e,
              i
            ), t.tag = 1, t.type = e = uc(e), t = R0(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Po(t, e), t.type = e = uc(e), t = _r(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (f = e.$$typeof, f === jc) {
                t.tag = 11, t.type = e = Nh(e), t = Mf(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (f === xi) {
                t.tag = 14, t = Sc(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ql && (t = " Did you wrap a component in React.lazy() more than once?"), e = oe(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return _r(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, f = Du(
            i,
            t.pendingProps
          ), R0(
            e,
            t,
            i,
            f,
            a
          );
        case 3:
          e: {
            if (ce(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            var o = t.pendingProps;
            f = t.memoizedState, i = f.element, kr(e, t), Bf(t, o, null, a);
            var d = t.memoizedState;
            if (o = d.cache, Mu(t, Rl, o), o !== f.cache && Kr(
              t,
              [Rl],
              a,
              !0
            ), Gn(), o = d.element, f.isDehydrated)
              if (f = {
                element: o,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = jr(
                  e,
                  t,
                  o,
                  a
                );
                break e;
              } else if (o !== i) {
                i = ea(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), oc(i), t = jr(
                  e,
                  t,
                  o,
                  a
                );
                break e;
              } else
                for (kl = na(
                  t.stateNode.containerInfo.firstChild
                ), Ua = t, Be = !0, Wu = null, kc = !1, au = null, Li = !0, e = Zg(
                  t,
                  null,
                  o,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (pf(), o === i) {
                t = cn(
                  e,
                  t,
                  a
                );
                break e;
              }
              xt(
                e,
                t,
                o,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Tc(e, t), e === null ? (e = Rd(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : Be || (e = t.type, a = t.pendingProps, i = mt(
            cl.current
          ), i = Td(
            i
          ).createElement(e), i[Tl] = t, i[ia] = a, pt(i, e, a), Gt(i), t.stateNode = i) : t.memoizedState = Rd(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ka(t), e === null && Be && (f = mt(cl.current), i = Ba(), f = t.stateNode = Jf(
            t.type,
            t.pendingProps,
            f,
            i,
            !1
          ), kc || (i = V0(
            f,
            t.type,
            t.pendingProps,
            i
          ), i !== null && (fi(t, 0).serverProps = i)), Ua = t, Li = !0, kl = na(
            f.firstChild
          )), i = t.pendingProps.children, e !== null || Be ? xt(
            e,
            t,
            i,
            a
          ) : t.child = Ls(
            t,
            null,
            i,
            a
          ), Tc(e, t), t.child;
        case 5:
          return e === null && Be && (o = Ba(), i = mr(
            t.type,
            o.ancestorInfo
          ), f = kl, (d = !f) || (d = Ts(
            f,
            t.type,
            t.pendingProps,
            Li
          ), d !== null ? (t.stateNode = d, kc || (o = V0(
            d,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (fi(t, 0).serverProps = o)), Ua = t, kl = na(
            d.firstChild
          ), Li = !1, o = !0) : o = !1, d = !o), d && (i && fc(t, f), tn(t))), ka(t), f = t.type, o = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = o.children, Ke(f, o) ? i = null : d !== null && Ke(f, d) && (t.flags |= 32), t.memoizedState !== null && (f = ta(
            e,
            t,
            xr,
            null,
            null,
            a
          ), Km._currentValue = f), Tc(e, t), xt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && Be && (e = t.pendingProps, a = Ba().ancestorInfo.current, e = a != null ? Ho(e, a.tag) : !0, a = kl, (i = !a) || (i = kn(
            a,
            t.pendingProps,
            Li
          ), i !== null ? (t.stateNode = i, Ua = t, kl = null, i = !0) : i = !1, i = !i), i && (e && fc(t, a), tn(t))), null;
        case 13:
          return Ut(e, t, a);
        case 4:
          return ce(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Ls(
            t,
            null,
            i,
            a
          ) : xt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Mf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return xt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, f = t.pendingProps, o = f.value, "value" in f || h1 || (h1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Mu(t, i, o), xt(
            e,
            t,
            f.children,
            a
          ), t.child;
        case 9:
          return f = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), pi(t), f = at(f), Tn(t), i = Ap(
            i,
            f,
            void 0
          ), T(), t.flags |= 1, xt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Sc(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return A0(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return wr(
            e,
            t,
            a
          );
        case 22:
          return Rt(e, t, a);
        case 24:
          return pi(t), i = at(Rl), e === null ? (f = Cr(), f === null && (f = it, o = bu(), f.pooledCache = o, Va(o), o !== null && (f.pooledCacheLanes |= a), f = o), t.memoizedState = {
            parent: i,
            cache: f
          }, Jr(t), Mu(t, Rl, f)) : (e.lanes & a && (kr(e, t), Bf(t, null, null, a), Gn()), f = e.memoizedState, o = t.memoizedState, f.parent !== i ? (f = {
            parent: i,
            cache: i
          }, t.memoizedState = f, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = f), Mu(t, Rl, i)) : (i = o.cache, Mu(t, Rl, i), i !== f.cache && Kr(
            t,
            [Rl],
            a,
            !0
          ))), xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ts() {
      oh = mv = null, sh = !1;
    }
    function Mu(e, t, a) {
      Ee(Bp, t._currentValue, e), t._currentValue = a, Ee(qp, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== y1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = y1;
    }
    function Nn(e, t) {
      e._currentValue = Bp.current;
      var a = qp.current;
      Re(qp, t), e._currentRenderer = a, Re(Bp, t);
    }
    function ls(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Kr(e, t, a, i) {
      var f = e.child;
      for (f !== null && (f.return = e); f !== null; ) {
        var o = f.dependencies;
        if (o !== null) {
          var d = f.child;
          o = o.firstContext;
          e: for (; o !== null; ) {
            var h = o;
            o = f;
            for (var m = 0; m < t.length; m++)
              if (h.context === t[m]) {
                o.lanes |= a, h = o.alternate, h !== null && (h.lanes |= a), ls(
                  o.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            o = h.next;
          }
        } else if (f.tag === 18) {
          if (d = f.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, o = d.alternate, o !== null && (o.lanes |= a), ls(
            d,
            a,
            e
          ), d = null;
        } else d = f.child;
        if (d !== null) d.return = f;
        else
          for (d = f; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (f = d.sibling, f !== null) {
              f.return = d.return, d = f;
              break;
            }
            d = d.return;
          }
        f = d;
      }
    }
    function as(e, t, a, i) {
      e = null;
      for (var f = t, o = !1; f !== null; ) {
        if (!o) {
          if (f.flags & 524288) o = !0;
          else if (f.flags & 262144) break;
        }
        if (f.tag === 10) {
          var d = f.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = f.type;
            Ma(f.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (f === qs.current) {
          if (d = f.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== f.memoizedState.memoizedState && (e !== null ? e.push(Km) : e = [Km]);
        }
        f = f.return;
      }
      e !== null && Kr(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ns(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ma(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function pi(e) {
      mv = e, oh = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function at(e) {
      return sh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), iy(mv, e);
    }
    function xf(e, t) {
      return mv === null && pi(e), iy(e, t);
    }
    function iy(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, oh === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        oh = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else oh = oh.next = t;
      return a;
    }
    function Jr(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function kr(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Uu(e) {
      return {
        lane: e,
        tag: m1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Hu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Np === i && !g1) {
        var f = le(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          f
        ), g1 = !0;
      }
      return (gt & xa) !== pn ? (f = i.pending, f === null ? t.next = t : (t.next = f.next, f.next = t), i.pending = t, t = zr(e), s0(e, null, a), t) : (Rr(e, i, t, a), zr(e));
    }
    function us(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194176) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Fl(e, a);
      }
    }
    function is(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var f = null, o = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            o === null ? f = o = d : o = o.next = d, a = a.next;
          } while (a !== null);
          o === null ? f = o = t : o = o.next = t;
        } else f = o = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: f,
          lastBaseUpdate: o,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Gn() {
      if (Gp) {
        var e = nh;
        if (e !== null) throw e;
      }
    }
    function Bf(e, t, a, i) {
      Gp = !1;
      var f = e.updateQueue;
      po = !1, Np = f.shared;
      var o = f.firstBaseUpdate, d = f.lastBaseUpdate, h = f.shared.pending;
      if (h !== null) {
        f.shared.pending = null;
        var m = h, p = m.next;
        m.next = null, d === null ? o = p : d.next = p, d = m;
        var O = e.alternate;
        O !== null && (O = O.updateQueue, h = O.lastBaseUpdate, h !== d && (h === null ? O.firstBaseUpdate = p : h.next = p, O.lastBaseUpdate = m));
      }
      if (o !== null) {
        var G = f.baseState;
        d = 0, O = p = m = null, h = o;
        do {
          var M = h.lane & -536870913, V = M !== h.lane;
          if (V ? (Me & M) === M : (i & M) === M) {
            M !== 0 && M === Zs && (Gp = !0), O !== null && (O = O.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              M = e;
              var ee = h, ge = t, Jt = a;
              switch (ee.tag) {
                case v1:
                  if (ee = ee.payload, typeof ee == "function") {
                    sh = !0;
                    var Le = ee.call(
                      Jt,
                      G,
                      ge
                    );
                    if (M.mode & fa) {
                      _e(!0);
                      try {
                        ee.call(Jt, G, ge);
                      } finally {
                        _e(!1);
                      }
                    }
                    sh = !1, G = Le;
                    break e;
                  }
                  G = ee;
                  break e;
                case Yp:
                  M.flags = M.flags & -65537 | 128;
                case m1:
                  if (Le = ee.payload, typeof Le == "function") {
                    if (sh = !0, ee = Le.call(
                      Jt,
                      G,
                      ge
                    ), M.mode & fa) {
                      _e(!0);
                      try {
                        Le.call(Jt, G, ge);
                      } finally {
                        _e(!1);
                      }
                    }
                    sh = !1;
                  } else ee = Le;
                  if (ee == null) break e;
                  G = me({}, G, ee);
                  break e;
                case p1:
                  po = !0;
              }
            }
            M = h.callback, M !== null && (e.flags |= 64, V && (e.flags |= 8192), V = f.callbacks, V === null ? f.callbacks = [M] : V.push(M));
          } else
            V = {
              lane: M,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, O === null ? (p = O = V, m = G) : O = O.next = V, d |= M;
          if (h = h.next, h === null) {
            if (h = f.shared.pending, h === null)
              break;
            V = h, h = V.next, V.next = null, f.lastBaseUpdate = V, f.shared.pending = null;
          }
        } while (!0);
        O === null && (m = G), f.baseState = m, f.firstBaseUpdate = p, f.lastBaseUpdate = O, o === null && (f.shared.lanes = 0), go |= d, e.lanes = d, e.memoizedState = G;
      }
      Np = null;
    }
    function cs(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function $r(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          cs(a[e], t);
    }
    function cy(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          cs(a[e], t);
    }
    function _a(e) {
      return (e.mode & Jl) !== ht;
    }
    function fy(e, t) {
      _a(e) ? (en(), qf(t, e), Pa()) : qf(t, e);
    }
    function Wr(e, t, a) {
      _a(e) ? (en(), Ac(
        a,
        e,
        t
      ), Pa()) : Ac(
        a,
        e,
        t
      );
    }
    function qf(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var f = i.next;
          a = f;
          do {
            if ((a.tag & e) === e && ((e & Al) !== uu ? J !== null && typeof J.markComponentPassiveEffectMountStarted == "function" && J.markComponentPassiveEffectMountStarted(
              t
            ) : (e & $l) !== uu && J !== null && typeof J.markComponentLayoutEffectMountStarted == "function" && J.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Ha) !== uu && (vh = !0), i = k(
              t,
              Lb,
              a
            ), (e & Ha) !== uu && (vh = !1), (e & Al) !== uu ? J !== null && typeof J.markComponentPassiveEffectMountStopped == "function" && J.markComponentPassiveEffectMountStopped() : (e & $l) !== uu && J !== null && typeof J.markComponentLayoutEffectMountStopped == "function" && J.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var o = void 0;
              o = a.tag & $l ? "useLayoutEffect" : a.tag & Ha ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + o + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + o + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, k(
                t,
                function(h, m) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    m
                  );
                },
                o,
                d
              );
            }
            a = a.next;
          } while (a !== f);
        }
      } catch (h) {
        Ne(t, t.return, h);
      }
    }
    function Ac(e, t, a) {
      try {
        var i = t.updateQueue, f = i !== null ? i.lastEffect : null;
        if (f !== null) {
          var o = f.next;
          i = o;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & Al) !== uu ? J !== null && typeof J.markComponentPassiveEffectUnmountStarted == "function" && J.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & $l) !== uu && J !== null && typeof J.markComponentLayoutEffectUnmountStarted == "function" && J.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Ha) !== uu && (vh = !0), k(
                t,
                Zb,
                t,
                a,
                h
              ), (e & Ha) !== uu && (vh = !1), (e & Al) !== uu ? J !== null && typeof J.markComponentPassiveEffectUnmountStopped == "function" && J.markComponentPassiveEffectUnmountStopped() : (e & $l) !== uu && J !== null && typeof J.markComponentLayoutEffectUnmountStopped == "function" && J.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== o);
        }
      } catch (m) {
        Ne(t, t.return, m);
      }
    }
    function Fr(e, t) {
      _a(e) ? (en(), qf(t, e), Pa()) : qf(t, e);
    }
    function Ir(e, t, a) {
      _a(e) ? (en(), Ac(
        a,
        e,
        t
      ), Pa()) : Ac(
        a,
        e,
        t
      );
    }
    function oy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || fh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          le(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          le(e) || "instance"
        ));
        try {
          k(
            e,
            cy,
            t,
            a
          );
        } catch (i) {
          Ne(e, e.return, i);
        }
      }
    }
    function sy(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function D0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || fh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        le(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        le(e) || "instance"
      ));
      try {
        var f = Du(
          e.type,
          a,
          e.elementType === e.type
        ), o = k(
          e,
          sy,
          t,
          f,
          i
        );
        a = b1, o !== void 0 || a.has(e.type) || (a.add(e.type), k(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            le(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = o;
      } catch (d) {
        Ne(e, e.return, d);
      }
    }
    function ry(e, t, a) {
      a.props = Du(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, _a(e) ? (en(), k(
        e,
        Gg,
        e,
        t,
        a
      ), Pa()) : k(
        e,
        Gg,
        e,
        t,
        a
      );
    }
    function $v(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode;
        if (typeof t == "function")
          if (_a(e))
            try {
              en(), e.refCleanup = t(a);
            } finally {
              Pa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            le(e)
          ), t.current = a;
      }
    }
    function Cu(e, t) {
      try {
        k(e, $v, e);
      } catch (a) {
        Ne(e, t, a);
      }
    }
    function aa(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (_a(e))
              try {
                en(), k(e, i);
              } finally {
                Pa(e);
              }
            else k(e, i);
          } catch (f) {
            Ne(e, t, f);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (_a(e))
              try {
                en(), k(e, a, null);
              } finally {
                Pa(e);
              }
            else k(e, a, null);
          } catch (f) {
            Ne(e, t, f);
          }
        else a.current = null;
    }
    function dy(e, t, a, i) {
      var f = e.memoizedProps, o = f.id, d = f.onCommit;
      f = f.onRender, t = t === null ? "mount" : "update", nv && (t = "nested-update"), typeof f == "function" && f(
        o,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function hy(e, t, a, i) {
      var f = e.memoizedProps;
      e = f.id, f = f.onPostCommit, t = t === null ? "mount" : "update", nv && (t = "nested-update"), typeof f == "function" && f(
        e,
        t,
        i,
        a
      );
    }
    function yy(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        k(
          e,
          Ie,
          i,
          t,
          a,
          e
        );
      } catch (f) {
        Ne(e, e.return, f);
      }
    }
    function my(e, t, a) {
      try {
        k(
          e,
          Ea,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ne(e, e.return, i);
      }
    }
    function O0(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
    }
    function vy(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || O0(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Pr(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.nodeType === 8 ? a.parentNode.insertBefore(e, t) : a.insertBefore(e, t) : (a.nodeType === 8 ? (t = a.parentNode, t.insertBefore(e, a)) : (t = a, t.appendChild(e)), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hn));
      else if (i !== 4 && i !== 27 && (e = e.child, e !== null))
        for (Pr(e, t, a), e = e.sibling; e !== null; )
          Pr(e, t, a), e = e.sibling;
    }
    function gi(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && i !== 27 && (e = e.child, e !== null))
        for (gi(e, t, a), e = e.sibling; e !== null; )
          gi(e, t, a), e = e.sibling;
    }
    function py(e) {
      if (e.tag !== 27) {
        e: {
          for (var t = e.return; t !== null; ) {
            if (O0(t)) {
              var a = t;
              break e;
            }
            t = t.return;
          }
          throw Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
          );
        }
        switch (a.tag) {
          case 27:
            t = a.stateNode, a = vy(e), gi(e, a, t);
            break;
          case 5:
            t = a.stateNode, a.flags & 32 && (Jn(t), a.flags &= -33), a = vy(e), gi(e, a, t);
            break;
          case 3:
          case 4:
            t = a.stateNode.containerInfo, a = vy(e), Pr(
              e,
              a,
              t
            );
            break;
          default:
            throw Error(
              "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
            );
        }
      }
    }
    function ed(e, t) {
      if (e = e.containerInfo, lg = Yv, e = f0(e), Er(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var f = i.anchorOffset, o = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, o.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, m = -1, p = 0, O = 0, G = e, M = null;
              t: for (; ; ) {
                for (var V; G !== a || f !== 0 && G.nodeType !== 3 || (h = d + f), G !== o || i !== 0 && G.nodeType !== 3 || (m = d + i), G.nodeType === 3 && (d += G.nodeValue.length), (V = G.firstChild) !== null; )
                  M = G, G = V;
                for (; ; ) {
                  if (G === e) break t;
                  if (M === a && ++p === f && (h = d), M === o && ++O === i && (m = d), (V = G.nextSibling) !== null) break;
                  G = M, M = G.parentNode;
                }
                G = V;
              }
              a = h === -1 || m === -1 ? null : { start: h, end: m };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (ag = {
        focusedElem: e,
        selectionRange: a
      }, Yv = !1, Xl = t; Xl !== null; )
        if (t = Xl, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, Xl = e;
        else
          for (; Xl !== null; ) {
            switch (e = t = Xl, a = e.alternate, f = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                f & 1024 && a !== null && D0(e, a);
                break;
              case 3:
                if (f & 1024) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Oi(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Oi(e);
                        break;
                      default:
                        e.textContent = "";
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
                if (f & 1024)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Xl = e;
              break;
            }
            Xl = t.return;
          }
      return t = T1, T1 = !1, t;
    }
    function gy(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          fn(e, a), i & 4 && fy(a, $l | iu);
          break;
        case 1:
          if (fn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || fh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), _a(a) ? (en(), k(
                a,
                Rp,
                a,
                e
              ), Pa()) : k(
                a,
                Rp,
                a,
                e
              );
            else {
              var f = Du(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || fh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), _a(a) ? (en(), k(
                a,
                qg,
                a,
                e,
                f,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Pa()) : k(
                a,
                qg,
                a,
                e,
                f,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && oy(a), i & 512 && Cu(a, a.return);
          break;
        case 3:
          if (t = pu(), fn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (f = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  f = a.child.stateNode;
                  break;
                case 1:
                  f = a.child.stateNode;
              }
            try {
              k(
                a,
                cy,
                i,
                f
              );
            } catch (h) {
              Ne(a, a.return, h);
            }
          }
          e.effectDuration += Dr(t);
          break;
        case 26:
          fn(e, a), i & 512 && Cu(a, a.return);
          break;
        case 27:
        case 5:
          fn(e, a), t === null && i & 4 && yy(a), i & 512 && Cu(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = pu(), fn(e, a), e = a.stateNode, e.effectDuration += ic(i);
            try {
              k(
                a,
                dy,
                a,
                t,
                av,
                e.effectDuration
              );
            } catch (h) {
              Ne(a, a.return, h);
            }
          } else fn(e, a);
          break;
        case 13:
          fn(e, a), i & 4 && xu(e, a);
          break;
        case 22:
          if (f = a.memoizedState !== null || Fc, !f) {
            t = t !== null && t.memoizedState !== null || Bt;
            var o = Fc, d = Bt;
            Fc = f, (Bt = t) && !d ? on(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : fn(e, a), Fc = o, Bt = d;
          }
          i & 512 && (a.memoizedProps.mode === "manual" ? Cu(a, a.return) : aa(a, a.return));
          break;
        default:
          fn(e, a);
      }
    }
    function by(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, by(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ru(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function ll(e, t, a) {
      for (a = a.child; a !== null; )
        bi(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function bi(e, t, a) {
      if (Nl && typeof Nl.onCommitFiberUnmount == "function")
        try {
          Nl.onCommitFiberUnmount(ao, a);
        } catch (o) {
          Zl || (Zl = !0, console.error(
            "React instrumentation encountered an error: %s",
            o
          ));
        }
      switch (a.tag) {
        case 26:
          Bt || aa(a, t), ll(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Bt || aa(a, t);
          var i = ol, f = vn;
          for (ol = a.stateNode, ll(
            e,
            t,
            a
          ), a = a.stateNode, e = a.attributes; e.length; )
            a.removeAttributeNode(e[0]);
          ru(a), ol = i, vn = f;
          break;
        case 5:
          Bt || aa(a, t);
        case 6:
          if (i = ol, f = vn, ol = null, ll(
            e,
            t,
            a
          ), ol = i, vn = f, ol !== null)
            if (vn)
              try {
                k(
                  a,
                  Qu,
                  ol,
                  a.stateNode
                );
              } catch (o) {
                Ne(
                  a,
                  t,
                  o
                );
              }
            else
              try {
                k(
                  a,
                  Yy,
                  ol,
                  a.stateNode
                );
              } catch (o) {
                Ne(
                  a,
                  t,
                  o
                );
              }
          break;
        case 18:
          ol !== null && (vn ? (e = ol, a = a.stateNode, e.nodeType === 8 ? dt(e.parentNode, a) : e.nodeType === 1 && dt(e, a), Pf(e)) : dt(ol, a.stateNode));
          break;
        case 4:
          i = ol, f = vn, ol = a.stateNode.containerInfo, vn = !0, ll(
            e,
            t,
            a
          ), ol = i, vn = f;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Bt || Ac(
            Ha,
            a,
            t
          ), Bt || Wr(
            a,
            t,
            $l
          ), ll(
            e,
            t,
            a
          );
          break;
        case 1:
          Bt || (aa(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && ry(
            a,
            t,
            i
          )), ll(
            e,
            t,
            a
          );
          break;
        case 21:
          ll(
            e,
            t,
            a
          );
          break;
        case 22:
          Bt || aa(a, t), Bt = (i = Bt) || a.memoizedState !== null, ll(
            e,
            t,
            a
          ), Bt = i;
          break;
        default:
          ll(
            e,
            t,
            a
          );
      }
    }
    function xu(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          k(
            t,
            Yc,
            e
          );
        } catch (a) {
          Ne(t, t.return, a);
        }
    }
    function Rc(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new S1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new S1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function fs(e, t) {
      var a = Rc(e);
      t.forEach(function(i) {
        var f = ul.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Kl)
            if (rh !== null && dh !== null)
              ot(dh, rh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(f, f);
        }
      });
    }
    function Sy(e, t, a) {
      rh = a, dh = e, Ty(t, e), dh = rh = null;
    }
    function va(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var f = e, o = t, d = a[i], h = o;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
              case 5:
                ol = h.stateNode, vn = !1;
                break e;
              case 3:
                ol = h.stateNode.containerInfo, vn = !0;
                break e;
              case 4:
                ol = h.stateNode.containerInfo, vn = !0;
                break e;
            }
            h = h.return;
          }
          if (ol === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          bi(f, o, d), ol = null, vn = !1, f = d, o = f.alternate, o !== null && (o.return = null), f.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Ty(t, e), t = t.sibling;
    }
    function Ty(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          va(t, e), al(e), i & 4 && (Ac(
            Ha | iu,
            e,
            e.return
          ), qf(Ha | iu, e), Wr(
            e,
            e.return,
            $l | iu
          ));
          break;
        case 1:
          va(t, e), al(e), i & 512 && (Bt || a === null || aa(a, a.return)), i & 64 && Fc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var f = Fu;
          if (va(t, e), al(e), i & 512 && (Bt || a === null || aa(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = f.ownerDocument || f;
                    t: switch (i) {
                      case "title":
                        f = t.getElementsByTagName("title")[0], (!f || f[Vi] || f[Tl] || f.namespaceURI === Oa || f.hasAttribute("itemprop")) && (f = t.createElement(i), t.head.insertBefore(
                          f,
                          t.querySelector("head > title")
                        )), pt(f, i, a), f[Tl] = e, Gt(f), i = f;
                        break e;
                      case "link":
                        var o = _y(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (o) {
                          for (var d = 0; d < o.length; d++)
                            if (f = o[d], f.getAttribute("href") === (a.href == null ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              o.splice(d, 1);
                              break t;
                            }
                        }
                        f = t.createElement(i), pt(f, i, a), t.head.appendChild(f);
                        break;
                      case "meta":
                        if (o = _y(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < o.length; d++)
                            if (f = o[d], He(
                              a.content,
                              "content"
                            ), f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              o.splice(d, 1);
                              break t;
                            }
                        }
                        f = t.createElement(i), pt(f, i, a), t.head.appendChild(f);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    f[Tl] = e, Gt(f), i = f;
                  }
                  e.stateNode = i;
                } else
                  jy(
                    f,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = $n(
                  f,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? jy(
                f,
                e.type,
                e.stateNode
              ) : $n(
                f,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && my(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          if (i & 4 && e.alternate === null) {
            f = e.stateNode, o = e.memoizedProps;
            try {
              for (d = f.firstChild; d; ) {
                var h = d.nextSibling, m = d.nodeName;
                d[Vi] || m === "HEAD" || m === "BODY" || m === "SCRIPT" || m === "STYLE" || m === "LINK" && d.rel.toLowerCase() === "stylesheet" || f.removeChild(d), d = h;
              }
              k(
                e,
                Gy,
                e.type,
                o,
                f,
                e
              );
            } catch (O) {
              Ne(e, e.return, O);
            }
          }
        case 5:
          if (va(t, e), al(e), i & 512 && (Bt || a === null || aa(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              k(e, Jn, t);
            } catch (O) {
              Ne(e, e.return, O);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, my(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (Vp = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (va(t, e), al(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              k(
                e,
                Kf,
                t,
                a,
                i
              );
            } catch (O) {
              Ne(e, e.return, O);
            }
          }
          break;
        case 3:
          if (f = pu(), xv = null, o = Fu, Fu = kf(t.containerInfo), va(t, e), Fu = o, al(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              k(
                e,
                Ad,
                t.containerInfo
              );
            } catch (O) {
              Ne(e, e.return, O);
            }
          Vp && (Vp = !1, os(e)), t.effectDuration += Dr(f);
          break;
        case 4:
          i = Fu, Fu = kf(
            e.stateNode.containerInfo
          ), va(t, e), al(e), Fu = i;
          break;
        case 12:
          i = pu(), va(t, e), al(e), e.stateNode.effectDuration += ic(i);
          break;
        case 13:
          va(t, e), al(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Lp = In()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, fs(e, i)));
          break;
        case 22:
          i & 512 && (Bt || a === null || aa(a, a.return)), d = e.memoizedState !== null, h = a !== null && a.memoizedState !== null, m = Fc;
          var p = Bt;
          if (Fc = m || d, Bt = p || h, va(t, e), Bt = p, Fc = m, al(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & bm, i & 8192 && (t._visibility = d ? t._visibility & -2 : t._visibility | lv, d && (t = Fc || Bt, a === null || h || t || Bu(e)), e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
            e: for (a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, d ? k(
                      h,
                      Di,
                      f
                    ) : k(
                      h,
                      Ny,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (O) {
                    Ne(h, h.return, O);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    o = h.stateNode, d ? k(
                      h,
                      qc,
                      o
                    ) : k(
                      h,
                      Qa,
                      o,
                      h.memoizedProps
                    );
                  } catch (O) {
                    Ne(h, h.return, O);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, fs(e, a))));
          break;
        case 19:
          va(t, e), al(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, fs(e, i)));
          break;
        case 21:
          break;
        default:
          va(t, e), al(e);
      }
    }
    function al(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          k(e, py, e);
        } catch (a) {
          Ne(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function os(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          os(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function M0(e, t, a) {
      rh = a, dh = t, gy(t, e.alternate, e), dh = rh = null;
    }
    function fn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          gy(e, t.alternate, t), t = t.sibling;
    }
    function Ey(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wr(
            e,
            e.return,
            $l
          ), Bu(e);
          break;
        case 1:
          aa(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && ry(
            e,
            e.return,
            t
          ), Bu(e);
          break;
        case 26:
        case 27:
        case 5:
          aa(e, e.return), Bu(e);
          break;
        case 22:
          aa(e, e.return), e.memoizedState === null && Bu(e);
          break;
        default:
          Bu(e);
      }
    }
    function Bu(e) {
      for (e = e.child; e !== null; )
        Ey(e), e = e.sibling;
    }
    function Ay(e, t, a, i) {
      var f = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          on(
            e,
            a,
            i
          ), fy(a, $l);
          break;
        case 1:
          if (on(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && k(
            a,
            Rp,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              k(
                a,
                $r,
                t,
                e
              );
            } catch (o) {
              Ne(a, a.return, o);
            }
          }
          i && f & 64 && oy(a), Cu(a, a.return);
          break;
        case 26:
        case 27:
        case 5:
          on(
            e,
            a,
            i
          ), i && t === null && f & 4 && yy(a), Cu(a, a.return);
          break;
        case 12:
          if (i && f & 4) {
            f = pu(), on(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ic(f);
            try {
              k(
                a,
                dy,
                a,
                t,
                av,
                i.effectDuration
              );
            } catch (o) {
              Ne(a, a.return, o);
            }
          } else
            on(
              e,
              a,
              i
            );
          break;
        case 13:
          on(
            e,
            a,
            i
          ), i && f & 4 && xu(e, a);
          break;
        case 22:
          a.memoizedState === null && on(
            e,
            a,
            i
          ), Cu(a, a.return);
          break;
        default:
          on(
            e,
            a,
            i
          );
      }
    }
    function on(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Ay(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function td(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Va(e), a != null && sc(a));
    }
    function ld(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Va(t), e != null && sc(e));
    }
    function Si(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Ry(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Ry(e, t, a, i) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Si(
            e,
            t,
            a,
            i
          ), f & 2048 && Fr(t, Al | iu);
          break;
        case 3:
          var o = pu();
          Si(
            e,
            t,
            a,
            i
          ), f & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (Va(t), a != null && sc(a))), e.passiveEffectDuration += Dr(o);
          break;
        case 12:
          if (f & 2048) {
            o = pu(), Si(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += ic(o);
            try {
              k(
                t,
                hy,
                t,
                t.alternate,
                av,
                e.passiveEffectDuration
              );
            } catch (d) {
              Ne(t, t.return, d);
            }
          } else
            Si(
              e,
              t,
              a,
              i
            );
          break;
        case 23:
          break;
        case 22:
          o = t.stateNode, t.memoizedState !== null ? o._visibility & _s ? Si(
            e,
            t,
            a,
            i
          ) : Yf(
            e,
            t
          ) : o._visibility & _s ? Si(
            e,
            t,
            a,
            i
          ) : (o._visibility |= _s, vt(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), f & 2048 && td(
            t.alternate,
            t
          );
          break;
        case 24:
          Si(
            e,
            t,
            a,
            i
          ), f & 2048 && ld(t.alternate, t);
          break;
        default:
          Si(
            e,
            t,
            a,
            i
          );
      }
    }
    function vt(e, t, a, i, f) {
      for (f = f && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        nl(
          e,
          t,
          a,
          i,
          f
        ), t = t.sibling;
    }
    function nl(e, t, a, i, f) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          vt(
            e,
            t,
            a,
            i,
            f
          ), Fr(t, Al);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & _s ? vt(
            e,
            t,
            a,
            i,
            f
          ) : Yf(
            e,
            t
          ) : (d._visibility |= _s, vt(
            e,
            t,
            a,
            i,
            f
          )), f && o & 2048 && td(
            t.alternate,
            t
          );
          break;
        case 24:
          vt(
            e,
            t,
            a,
            i,
            f
          ), f && o & 2048 && ld(t.alternate, t);
          break;
        default:
          vt(
            e,
            t,
            a,
            i,
            f
          );
      }
    }
    function Yf(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, f = i.flags;
          switch (i.tag) {
            case 22:
              Yf(
                a,
                i
              ), f & 2048 && td(
                i.alternate,
                i
              );
              break;
            case 24:
              Yf(
                a,
                i
              ), f & 2048 && ld(
                i.alternate,
                i
              );
              break;
            default:
              Yf(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function zc(e) {
      if (e.subtreeFlags & xm)
        for (e = e.child; e !== null; )
          zy(e), e = e.sibling;
    }
    function zy(e) {
      switch (e.tag) {
        case 26:
          zc(e), e.flags & xm && e.memoizedState !== null && Wv(
            Fu,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          zc(e);
          break;
        case 3:
        case 4:
          var t = Fu;
          Fu = kf(
            e.stateNode.containerInfo
          ), zc(e), Fu = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = xm, xm = 16777216, zc(e), xm = t) : zc(e));
          break;
        default:
          zc(e);
      }
    }
    function Dy(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Nf(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Xl = i, My(
              i,
              e
            );
          }
        Dy(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Gf(e), e = e.sibling;
    }
    function Gf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Nf(e), e.flags & 2048 && Ir(
            e,
            e.return,
            Al | iu
          );
          break;
        case 3:
          var t = pu();
          Nf(e), e.stateNode.passiveEffectDuration += Dr(t);
          break;
        case 12:
          t = pu(), Nf(e), e.stateNode.passiveEffectDuration += ic(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & _s && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, Vf(e)) : Nf(e);
          break;
        default:
          Nf(e);
      }
    }
    function Vf(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Xl = i, My(
              i,
              e
            );
          }
        Dy(e);
      }
      for (e = e.child; e !== null; )
        Oy(e), e = e.sibling;
    }
    function Oy(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            e,
            e.return,
            Al
          ), Vf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & _s && (t._visibility &= -5, Vf(e));
          break;
        default:
          Vf(e);
      }
    }
    function My(e, t) {
      for (; Xl !== null; ) {
        var a = Xl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Ir(
              i,
              t,
              Al
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && Va(i));
            break;
          case 24:
            sc(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Xl = i;
        else
          e: for (a = e; Xl !== null; ) {
            i = Xl;
            var f = i.sibling, o = i.return;
            if (by(i), i === a) {
              Xl = null;
              break e;
            }
            if (f !== null) {
              f.return = o, Xl = f;
              break e;
            }
            Xl = o;
          }
      }
    }
    function U0(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, E1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function ss(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Vn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = Xe(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 31457280, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = uc(e.type);
          break;
        case 1:
          a.type = uc(e.type);
          break;
        case 11:
          a.type = Nh(e.type);
      }
      return a;
    }
    function ad(e, t) {
      e.flags &= 31457282;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function nd(e, t, a, i, f, o) {
      var d = 0, h = e;
      if (typeof e == "function")
        ss(e) && (d = 1), h = uc(h);
      else if (typeof e == "string")
        d = Ba(), d = j0(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Wn:
            return qu(
              a.children,
              f,
              o,
              t
            );
          case Cd:
            d = 8, f |= fa, f |= ku;
            break;
          case xd:
            return e = a, i = f, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = Xe(12, e, t, i | Jl), t.elementType = xd, t.lanes = o, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Bd:
            return t = Xe(13, a, t, f), t.elementType = Bd, t.lanes = o, t;
          case Ms:
            return t = Xe(19, a, t, f), t.elementType = Ms, t.lanes = o, t;
          case Qc:
            return ud(a, f, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ue:
                case Ra:
                  d = 10;
                  break e;
                case Os:
                  d = 9;
                  break e;
                case jc:
                  d = 11, h = Nh(h);
                  break e;
                case xi:
                  d = 14;
                  break e;
                case ql:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Sl(e) ? a = "array" : e !== void 0 && e.$$typeof === Ci ? (a = "<" + (oe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? _l(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = Xe(d, a, t, f), t.elementType = e, t.type = h, t.lanes = o, t._debugOwner = i, t;
    }
    function Xf(e, t, a) {
      return t = nd(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t;
    }
    function qu(e, t, a, i) {
      return e = Xe(7, e, i, t), e.lanes = a, e;
    }
    function ud(e, t, a, i) {
      e = Xe(22, e, i, t), e.elementType = Qc, e.lanes = a;
      var f = {
        _visibility: lv,
        _pendingVisibility: lv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
        _current: null,
        detach: function() {
          var o = f, d = o._current;
          if (d === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (!(o._pendingVisibility & bm)) {
            var h = vl(d, 2);
            h !== null && (o._pendingVisibility |= bm, ke(h, d, 2));
          }
        },
        attach: function() {
          var o = f, d = o._current;
          if (d === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (o._pendingVisibility & bm) {
            var h = vl(d, 2);
            h !== null && (o._pendingVisibility &= -3, ke(h, d, 2));
          }
        }
      };
      return e.stateNode = f, e;
    }
    function id(e, t, a) {
      return e = Xe(6, e, null, t), e.lanes = a, e;
    }
    function rs(e, t, a) {
      return t = Xe(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Xn(e) {
      e.flags |= 4;
    }
    function _n(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & fu) !== ur)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !zd(t)) {
        if (t = nu.current, t !== null && ((Me & 4194176) === Me ? Zi !== null : (Me & 62914560) !== Me && !(Me & 536870912) || t !== Zi))
          throw Dm = Ep, Mg;
        e.flags |= 8192;
      }
    }
    function _f(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ti() : 536870912, e.lanes |= t, Is |= t);
    }
    function ds(e, t) {
      if (!Be)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function nt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Jl) !== ht) {
          for (var f = e.selfBaseDuration, o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 31457280, i |= o.flags & 31457280, f += o.treeBaseDuration, o = o.sibling;
          e.treeBaseDuration = f;
        } else
          for (f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 31457280, i |= f.flags & 31457280, f.return = e, f = f.sibling;
      else if ((e.mode & Jl) !== ht) {
        f = e.actualDuration, o = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, f += d.actualDuration, o += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = f, e.treeBaseDuration = o;
      } else
        for (f = e.child; f !== null; )
          a |= f.lanes | f.childLanes, i |= f.subtreeFlags, i |= f.flags, f.return = e, f = f.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Uy(e, t, a) {
      var i = t.pendingProps;
      switch (jh(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return nt(t), null;
        case 1:
          return nt(t), null;
        case 3:
          return i = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Nn(Rl, t), lt(t), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (vf(t) ? (Or(), Xn(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Wu !== null && (Yu(Wu), Wu = null))), nt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Xn(t), a !== null ? (nt(t), _n(
            t,
            a
          )) : (nt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Xn(t), nt(t), _n(
            t,
            a
          )) : (nt(t), t.flags &= -16777217) : (e.memoizedProps !== i && Xn(t), nt(t), t.flags &= -16777217), null;
        case 27:
          Dl(t), a = mt(cl.current);
          var f = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Xn(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return nt(t), null;
            }
            e = Ba(), vf(t) ? y0(t) : (e = Jf(
              f,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Xn(t));
          }
          return nt(t), null;
        case 5:
          if (Dl(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Xn(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return nt(t), null;
            }
            if (f = Ba(), vf(t))
              y0(t);
            else {
              switch (e = mt(cl.current), mr(a, f.ancestorInfo), f = f.context, e = Td(e), f) {
                case gh:
                  e = e.createElementNS(Oa, a);
                  break;
                case Cv:
                  e = e.createElementNS(
                    Qi,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Oa,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Qi,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Fn.call(
                        N1,
                        a
                      ) || (N1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Tl] = t, e[ia] = i;
              e: for (f = t.child; f !== null; ) {
                if (f.tag === 5 || f.tag === 6)
                  e.appendChild(f.stateNode);
                else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                  f.child.return = f, f = f.child;
                  continue;
                }
                if (f === t) break e;
                for (; f.sibling === null; ) {
                  if (f.return === null || f.return === t)
                    break e;
                  f = f.return;
                }
                f.sibling.return = f.return, f = f.sibling;
              }
              t.stateNode = e;
              e: switch (pt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Xn(t);
            }
          }
          return nt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Xn(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = mt(cl.current), a = Ba(), vf(t)) {
              e = t.stateNode, i = t.memoizedProps, f = !kc, a = null;
              var o = Ua;
              if (o !== null)
                switch (o.tag) {
                  case 3:
                    f && (f = Es(
                      e,
                      i,
                      a
                    ), f !== null && (fi(t, 0).serverProps = f));
                    break;
                  case 27:
                  case 5:
                    a = o.memoizedProps, f && (f = Es(
                      e,
                      i,
                      a
                    ), f !== null && (fi(
                      t,
                      0
                    ).serverProps = f));
                }
              e[Tl] = t, e = !!(e.nodeValue === i || a !== null && a.suppressHydrationWarning === !0 || gd(e.nodeValue, i)), e || tn(t);
            } else
              a = a.ancestorInfo.current, a != null && Ho(i, a.tag), e = Td(e).createTextNode(
                i
              ), e[Tl] = t, t.stateNode = e;
          }
          return nt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (f = vf(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Tl] = t, nt(t), (t.mode & Jl) !== ht && i !== null && (f = t.child, f !== null && (t.treeBaseDuration -= f.treeBaseDuration));
              } else
                Or(), pf(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4, nt(t), (t.mode & Jl) !== ht && i !== null && (f = t.child, f !== null && (t.treeBaseDuration -= f.treeBaseDuration));
              f = !1;
            } else
              Wu !== null && (Yu(Wu), Wu = null), f = !0;
            if (!f)
              return t.flags & 256 ? (ln(t), t) : (ln(t), null);
          }
          return ln(t), t.flags & 128 ? (t.lanes = a, (t.mode & Jl) !== ht && Yo(t), t) : (i = i !== null, e = e !== null && e.memoizedState !== null, i && (a = t.child, f = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (f = a.alternate.memoizedState.cachePool.pool), o = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== f && (a.flags |= 2048)), i !== e && i && (t.child.flags |= 8192), _f(t, t.updateQueue), nt(t), (t.mode & Jl) !== ht && i && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return lt(t), e === null && vd(
            t.stateNode.containerInfo
          ), nt(t), null;
        case 10:
          return Nn(t.type, t), nt(t), null;
        case 19:
          if (Re(El, t), f = t.memoizedState, f === null) return nt(t), null;
          if (i = (t.flags & 128) !== 0, o = f.rendering, o === null)
            if (i) ds(f, !1);
            else {
              if (qt !== Pc || e !== null && e.flags & 128)
                for (e = t.child; e !== null; ) {
                  if (o = jo(e), o !== null) {
                    for (t.flags |= 128, ds(f, !1), e = o.updateQueue, t.updateQueue = e, _f(t, e), t.subtreeFlags = 0, e = a, i = t.child; i !== null; )
                      ad(i, e), i = i.sibling;
                    return Ee(
                      El,
                      El.current & ah | Mm,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              f.tail !== null && In() > gv && (t.flags |= 128, i = !0, ds(f, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = jo(o), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, _f(t, e), ds(f, !0), f.tail === null && f.tailMode === "hidden" && !o.alternate && !Be)
                  return nt(t), null;
              } else
                2 * In() - f.renderingStartTime > gv && a !== 536870912 && (t.flags |= 128, i = !0, ds(f, !1), t.lanes = 4194304);
            f.isBackwards ? (o.sibling = t.child, t.child = o) : (e = f.last, e !== null ? e.sibling = o : t.child = o, f.last = o);
          }
          return f.tail !== null ? (e = f.tail, f.rendering = e, f.tail = e.sibling, f.renderingStartTime = In(), e.sibling = null, a = El.current, a = i ? a & ah | Mm : a & ah, Ee(El, a, t), e) : (nt(t), null);
        case 22:
        case 23:
          return ln(t), Kh(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? a & 536870912 && !(t.flags & 128) && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), i = t.updateQueue, i !== null && _f(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== i && (t.flags |= 2048), e !== null && Re(Ks, t), null;
        case 24:
          return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Nn(Rl, t), nt(t), null;
        case 25:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Dc(e, t) {
      switch (jh(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Jl) !== ht && Yo(t), t) : null;
        case 3:
          return Nn(Rl, t), lt(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Dl(t), null;
        case 13:
          if (ln(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            pf();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Jl) !== ht && Yo(t), t) : null;
        case 19:
          return Re(El, t), null;
        case 4:
          return lt(t), null;
        case 10:
          return Nn(t.type, t), null;
        case 22:
        case 23:
          return ln(t), Kh(t), e !== null && Re(Ks, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Jl) !== ht && Yo(t), t) : null;
        case 24:
          return Nn(Rl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function jn(e, t) {
      switch (jh(t), t.tag) {
        case 3:
          Nn(Rl, t), lt(t);
          break;
        case 26:
        case 27:
        case 5:
          Dl(t);
          break;
        case 4:
          lt(t);
          break;
        case 13:
          ln(t);
          break;
        case 19:
          Re(El, t);
          break;
        case 10:
          Nn(t.type, t);
          break;
        case 22:
        case 23:
          ln(t), Kh(t), e !== null && Re(Ks, t);
          break;
        case 24:
          Nn(Rl, t);
      }
    }
    function Ti() {
      Ib.forEach(function(e) {
        return e();
      });
    }
    function Qn() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || H.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function wl(e) {
      if ((gt & xa) !== pn && Me !== 0)
        return Me & -Me;
      var t = H.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Zs, e !== 0 ? e : yd()) : zo();
    }
    function cd() {
      bn === 0 && (bn = !(Me & 536870912) || Be ? En() : 536870912);
      var e = nu.current;
      return e !== null && (e.flags |= 32), bn;
    }
    function ke(e, t, a) {
      if (vh && console.error("useInsertionEffect must not schedule updates."), kp && (Sv = !0), (e === it && ct === Fs || e.cancelPendingCommit !== null) && (Ei(e, 0), wn(
        e,
        Me,
        bn,
        !1
      )), Tt(e, a), gt & xa && e === it) {
        if (za)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Oe && le(Oe) || "Unknown", H1.has(e) || (H1.add(e), t = le(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              U1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), U1 = !0);
          }
      } else
        Kl && Pm(e, t, a), Xu(t), e === it && ((gt & xa) === pn && (bo |= a), qt === Ws && wn(
          e,
          Me,
          bn,
          !1
        )), rn(e);
    }
    function hs(e, t, a) {
      if ((gt & (xa | Ic)) !== pn)
        throw Error("Should not already be working.");
      var i = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || qa(e, t), f = i ? ps(e, t) : vs(e, t, !0), o = i;
      do {
        if (f === Pc) {
          mh && !i && wn(e, t, 0, !1);
          break;
        } else if (f === vv)
          wn(
            e,
            t,
            0,
            !ef
          );
        else {
          if (a = e.current.alternate, o && !fd(a)) {
            f = vs(e, t, !1), o = !1;
            continue;
          }
          if (f === hh) {
            if (o = t, e.errorRecoveryDisabledLanes & o)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                f = e;
                var h = d;
                d = Vm;
                var m = f.current.memoizedState.isDehydrated;
                if (m && (Ei(
                  f,
                  h
                ).flags |= 256), h = vs(
                  f,
                  h,
                  !1
                ), h !== hh) {
                  if (Qp && !m) {
                    f.errorRecoveryDisabledLanes |= o, bo |= o, f = Ws;
                    break e;
                  }
                  f = Iu, Iu = d, f !== null && Yu(f);
                }
                f = h;
              }
              if (o = !1, f !== hh) continue;
            }
          }
          if (f === qm) {
            Ei(e, 0), wn(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, f) {
              case Pc:
              case qm:
                throw Error("Root did not complete. This is a bug in React.");
              case Ws:
                if ((t & 4194176) === t) {
                  wn(
                    i,
                    t,
                    bn,
                    !ef
                  );
                  break e;
                }
                break;
              case hh:
                Iu = null;
                break;
              case Xp:
              case R1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (i.finishedWork = a, i.finishedLanes = t, H.actQueue !== null)
              Ll(
                i,
                Iu,
                Xm,
                pv,
                bn,
                bo,
                Is,
                M1,
                bp,
                0
              );
            else {
              if ((t & 62914560) === t && (f = Lp + D1 - In(), 10 < f)) {
                if (wn(
                  i,
                  t,
                  bn,
                  !ef
                ), hl(i, 0) !== 0) break e;
                i.timeoutHandle = G1(
                  bl.bind(
                    null,
                    i,
                    a,
                    Iu,
                    Xm,
                    pv,
                    t,
                    bn,
                    bo,
                    Is,
                    ef,
                    aS,
                    bp,
                    0
                  ),
                  f
                );
                break e;
              }
              bl(
                i,
                a,
                Iu,
                Xm,
                pv,
                t,
                bn,
                bo,
                Is,
                ef,
                M1,
                bp,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      rn(e);
    }
    function Yu(e) {
      Iu === null ? Iu = e : Iu.push.apply(
        Iu,
        e
      );
    }
    function bl(e, t, a, i, f, o, d, h, m, p, O, G, M) {
      var V = t.subtreeFlags;
      if ((V & 8192 || (V & 16785408) === 16785408) && (Zm = { stylesheets: null, count: 0, unsuspend: Qy }, zy(t), t = Fv(), t !== null)) {
        e.cancelPendingCommit = t(
          Ll.bind(
            null,
            e,
            a,
            i,
            f,
            d,
            h,
            m,
            lS,
            G,
            M
          )
        ), wn(
          e,
          o,
          d,
          !p
        );
        return;
      }
      Ll(
        e,
        a,
        i,
        f,
        d,
        h,
        m,
        O,
        G,
        M
      );
    }
    function fd(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var f = a[i], o = f.getSnapshot;
            f = f.value;
            try {
              if (!Ma(o(), f)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function wn(e, t, a, i) {
      t &= ~wp, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var f = t; 0 < f; ) {
        var o = 31 - Gl(f), d = 1 << o;
        i[o] = -1, f &= ~d;
      }
      a !== 0 && su(e, a, t);
    }
    function pa() {
      return (gt & (xa | Ic)) === pn ? (Lf(0), !1) : !0;
    }
    function ys() {
      if (Oe !== null) {
        if (ct === Ka)
          var e = Oe.return;
        else
          e = Oe, ts(), On(e), th = null, Om = 0, e = Oe;
        for (; e !== null; )
          jn(e.alternate, e), e = e.return;
        Oe = null;
      }
    }
    function Ei(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var a = e.timeoutHandle;
      a !== ug && (e.timeoutHandle = ug, sS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ys(), it = e, Oe = a = Vn(e.current, null), Me = t, ct = Ka, gn = null, ef = !1, mh = qa(e, t), Qp = !1, qt = Pc, Is = bn = wp = bo = go = 0, Iu = Vm = null, pv = !1, t & 8 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var f = 31 - Gl(i), o = 1 << f;
          t |= e[f], i &= ~o;
        }
      return Ji = t, Ar(), $u.discardPendingWarnings(), a;
    }
    function Nu(e, t) {
      de = null, H.H = Ki, H.getCurrentStack = null, za = !1, Yl = null, t === ov ? (t = v0(), ct = Nm) : t === Mg ? (t = v0(), ct = z1) : ct = t === c1 ? jp : t !== null && typeof t == "object" && typeof t.then == "function" ? yh : Ym, gn = t;
      var a = Oe;
      if (a === null)
        qt = qm, he(
          e,
          ea(t, e.current)
        );
      else
        switch (a.mode & Jl && Vh(a), T(), ct) {
          case Ym:
            J !== null && typeof J.markComponentErrored == "function" && J.markComponentErrored(
              a,
              t,
              Me
            );
            break;
          case Fs:
          case Nm:
          case yh:
          case Gm:
            J !== null && typeof J.markComponentSuspended == "function" && J.markComponentSuspended(
              a,
              t,
              Me
            );
        }
    }
    function Gu() {
      var e = H.H;
      return H.H = Ki, e === null ? Ki : e;
    }
    function jf() {
      var e = H.A;
      return H.A = Fb, e;
    }
    function ms() {
      qt = Ws, ef || (Me & 4194176) !== Me && nu.current !== null || (mh = !0), !(go & 134217727) && !(bo & 134217727) || it === null || wn(
        it,
        Me,
        bn,
        !1
      );
    }
    function vs(e, t, a) {
      var i = gt;
      gt |= xa;
      var f = Gu(), o = jf();
      if (it !== e || Me !== t) {
        if (Kl) {
          var d = e.memoizedUpdaters;
          0 < d.size && (ot(e, Me), d.clear()), e0(e, t);
        }
        Xm = null, Ei(e, t);
      }
      F(t), t = !1, d = qt;
      e: do
        try {
          if (ct !== Ka && Oe !== null) {
            var h = Oe, m = gn;
            switch (ct) {
              case jp:
                ys(), d = vv;
                break e;
              case Nm:
              case Fs:
              case yh:
                nu.current === null && (t = !0);
                var p = ct;
                if (ct = Ka, gn = null, Oc(e, h, m, p), a && mh) {
                  d = Pc;
                  break e;
                }
                break;
              default:
                p = ct, ct = Ka, gn = null, Oc(e, h, m, p);
            }
          }
          Qf(), d = qt;
          break;
        } catch (O) {
          Nu(e, O);
        }
      while (!0);
      return t && e.shellSuspendCounter++, ts(), gt = i, H.H = f, H.A = o, I(), Oe === null && (it = null, Me = 0, Ar()), d;
    }
    function Qf() {
      for (; Oe !== null; ) Hy(Oe);
    }
    function ps(e, t) {
      var a = gt;
      gt |= xa;
      var i = Gu(), f = jf();
      if (it !== e || Me !== t) {
        if (Kl) {
          var o = e.memoizedUpdaters;
          0 < o.size && (ot(e, Me), o.clear()), e0(e, t);
        }
        Xm = null, gv = In() + O1, Ei(e, t);
      } else
        mh = qa(
          e,
          t
        );
      F(t);
      e: do
        try {
          if (ct !== Ka && Oe !== null)
            t: switch (t = Oe, o = gn, ct) {
              case Ym:
                ct = Ka, gn = null, Oc(
                  e,
                  t,
                  o,
                  Ym
                );
                break;
              case Fs:
                if (wh(o)) {
                  ct = Ka, gn = null, wf(t);
                  break;
                }
                t = function() {
                  ct === Fs && it === e && (ct = Gm), rn(e);
                }, o.then(t, t);
                break e;
              case Nm:
                ct = Gm;
                break e;
              case z1:
                ct = _p;
                break e;
              case Gm:
                wh(o) ? (ct = Ka, gn = null, wf(t)) : (ct = Ka, gn = null, Oc(
                  e,
                  t,
                  o,
                  Gm
                ));
                break;
              case _p:
                var d = null;
                switch (Oe.tag) {
                  case 26:
                    d = Oe.memoizedState;
                  case 5:
                  case 27:
                    var h = Oe;
                    if (!d || zd(d)) {
                      ct = Ka, gn = null;
                      var m = h.sibling;
                      if (m !== null) Oe = m;
                      else {
                        var p = h.return;
                        p !== null ? (Oe = p, gs(p)) : Oe = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                ct = Ka, gn = null, Oc(
                  e,
                  t,
                  o,
                  _p
                );
                break;
              case yh:
                ct = Ka, gn = null, Oc(
                  e,
                  t,
                  o,
                  yh
                );
                break;
              case jp:
                ys(), qt = vv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          H.actQueue !== null ? Qf() : H0();
          break;
        } catch (O) {
          Nu(e, O);
        }
      while (!0);
      return ts(), H.H = i, H.A = f, gt = a, Oe !== null ? (J !== null && typeof J.markRenderYielded == "function" && J.markRenderYielded(), Pc) : (I(), it = null, Me = 0, Ar(), qt);
    }
    function H0() {
      for (; Oe !== null && !Vd(); )
        Hy(Oe);
    }
    function Hy(e) {
      var t = e.alternate;
      (e.mode & Jl) !== ht ? (cc(e), t = k(
        e,
        Zr,
        t,
        e,
        Ji
      ), Vh(e)) : t = k(
        e,
        Zr,
        t,
        e,
        Ji
      ), e.memoizedProps = e.pendingProps, t === null ? gs(e) : Oe = t;
    }
    function wf(e) {
      var t = k(e, Ai, e);
      e.memoizedProps = e.pendingProps, t === null ? gs(e) : Oe = t;
    }
    function Ai(e) {
      var t = e.alternate, a = (e.mode & Jl) !== ht;
      switch (a && cc(e), e.tag) {
        case 15:
        case 0:
          t = uy(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Me
          );
          break;
        case 11:
          t = uy(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Me
          );
          break;
        case 5:
          On(e);
        default:
          jn(t, e), e = Oe = ad(e, Ji), t = Zr(t, e, Ji);
      }
      return a && Vh(e), t;
    }
    function Oc(e, t, a, i) {
      ts(), On(t), th = null, Om = 0;
      var f = t.return;
      try {
        if (bc(
          e,
          f,
          t,
          a,
          Me
        )) {
          qt = qm, he(
            e,
            ea(a, e.current)
          ), Oe = null;
          return;
        }
      } catch (o) {
        if (f !== null) throw Oe = f, o;
        qt = qm, he(
          e,
          ea(a, e.current)
        ), Oe = null;
        return;
      }
      t.flags & 32768 ? (Be || i === Ym ? e = !0 : mh || Me & 536870912 ? e = !1 : (ef = e = !0, (i === Fs || i === Nm || i === yh) && (i = nu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Ri(t, e)) : gs(t);
    }
    function gs(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Ri(
            t,
            ef
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, cc(t), a = k(
          t,
          Uy,
          a,
          t,
          Ji
        ), (t.mode & Jl) !== ht && Xh(t), a !== null) {
          Oe = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Oe = t;
          return;
        }
        Oe = t = e;
      } while (t !== null);
      qt === Pc && (qt = R1);
    }
    function Ri(e, t) {
      do {
        var a = Dc(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Oe = a;
          return;
        }
        if ((e.mode & Jl) !== ht) {
          Xh(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Oe = e;
          return;
        }
        Oe = e = a;
      } while (e !== null);
      qt = vv, Oe = null;
    }
    function Ll(e, t, a, i, f, o, d, h, m, p) {
      var O = H.T, G = Pe.p;
      try {
        Pe.p = Da, H.T = null, C0(
          e,
          t,
          a,
          i,
          G,
          f,
          o,
          d,
          h,
          m,
          p
        );
      } finally {
        H.T = O, Pe.p = G;
      }
    }
    function C0(e, t, a, i, f, o, d, h) {
      do
        Vu();
      while (Ps !== null);
      if ($u.flushLegacyContextWarning(), $u.flushPendingUnsafeLifecycleWarnings(), (gt & (xa | Ic)) !== pn)
        throw Error("Should not already be working.");
      var m = e.finishedWork;
      if (i = e.finishedLanes, J !== null && typeof J.markCommitStarted == "function" && J.markCommitStarted(i), m === null) return $i(), null;
      if (i === 0 && console.error(
        "root.finishedLanes should not be empty during a commit. This is a bug in React."
      ), e.finishedWork = null, e.finishedLanes = 0, m === e.current)
        throw Error(
          "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
        );
      e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
      var p = m.lanes | m.childLanes;
      if (p |= gp, Wa(
        e,
        i,
        p,
        o,
        d,
        h
      ), e === it && (Oe = it = null, Me = 0), !(m.subtreeFlags & 10256) && !(m.flags & 10256) || bv || (bv = !0, Zp = p, Kp = a, ga(lo, function() {
        return Vu(), null;
      })), av = Id(), a = (m.flags & 15990) !== 0, m.subtreeFlags & 15990 || a ? (a = H.T, H.T = null, o = Pe.p, Pe.p = Da, d = gt, gt |= Ic, ed(e, m), Sy(
        e,
        m,
        i
      ), kv(ag, e.containerInfo), Yv = !!lg, ag = lg = null, e.current = m, J !== null && typeof J.markLayoutEffectsStarted == "function" && J.markLayoutEffectsStarted(
        i
      ), M0(m, e, i), J !== null && typeof J.markLayoutEffectsStopped == "function" && J.markLayoutEffectsStopped(), Lu(), gt = d, Pe.p = o, H.T = a) : e.current = m, (a = bv) ? (bv = !1, Ps = e, _m = i) : (Cy(e, p), er = 0, Qm = null), p = e.pendingLanes, p === 0 && (So = null), a || xy(e), ei(m.stateNode, f), Kl && e.memoizedUpdaters.clear(), Ti(), rn(e), t !== null)
        for (f = e.onRecoverableError, m = 0; m < t.length; m++)
          p = t[m], a = x0(p.stack), k(
            p.source,
            f,
            p.value,
            a
          );
      return _m & 3 && Vu(), p = e.pendingLanes, i & 4194218 && p & 42 ? (uv = !0, e === Jp ? jm++ : (jm = 0, Jp = e)) : jm = 0, Lf(0), $i(), null;
    }
    function x0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Cy(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, sc(t)));
    }
    function Vu() {
      if (Ps !== null) {
        var e = Ps, t = Zp;
        Zp = 0;
        var a = t0(_m), i = mn > a ? mn : a;
        a = H.T;
        var f = Pe.p;
        try {
          if (Pe.p = i, H.T = null, Ps === null)
            var o = !1;
          else {
            i = Kp, Kp = null;
            var d = Ps, h = _m;
            if (Ps = null, _m = 0, (gt & (xa | Ic)) !== pn)
              throw Error(
                "Cannot flush passive effects while already rendering."
              );
            kp = !0, Sv = !1, J !== null && typeof J.markPassiveEffectsStarted == "function" && J.markPassiveEffectsStarted(h);
            var m = gt;
            if (gt |= Ic, Gf(d.current), Ry(
              d,
              d.current,
              h,
              i
            ), J !== null && typeof J.markPassiveEffectsStopped == "function" && J.markPassiveEffectsStopped(), xy(d), gt = m, Lf(0, !1), Sv ? d === Qm ? er++ : (er = 0, Qm = d) : er = 0, Sv = kp = !1, Nl && typeof Nl.onPostCommitFiberRoot == "function")
              try {
                Nl.onPostCommitFiberRoot(ao, d);
              } catch (O) {
                Zl || (Zl = !0, console.error(
                  "React instrumentation encountered an error: %s",
                  O
                ));
              }
            var p = d.current.stateNode;
            p.effectDuration = 0, p.passiveEffectDuration = 0, o = !0;
          }
          return o;
        } finally {
          Pe.p = f, H.T = a, Cy(e, t);
        }
      }
      return !1;
    }
    function od(e, t, a) {
      t = ea(a, t), t = At(e.stateNode, t, 2), e = Hu(e, t, 2), e !== null && (Tt(e, 2), rn(e));
    }
    function Ne(e, t, a) {
      if (vh = !1, e.tag === 3)
        od(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            od(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (So === null || !So.has(i))) {
              e = ea(a, e), a = Of(2), i = Hu(t, a, 2), i !== null && (vi(
                a,
                i,
                t,
                e
              ), Tt(i, 2), rn(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function sn(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new Pb();
        var f = /* @__PURE__ */ new Set();
        i.set(t, f);
      } else
        f = i.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), i.set(t, f));
      f.has(a) || (Qp = !0, f.add(a), i = zt.bind(null, e, t, a), Kl && ot(e, a), t.then(i, i));
    }
    function zt(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Qn() && H.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), it === e && (Me & a) === a && (qt === Ws || qt === Xp && (Me & 62914560) === Me && In() - Lp < D1 ? (gt & xa) === pn && Ei(e, 0) : wp |= a, Is === Me && (Is = 0)), rn(e);
    }
    function sd(e, t) {
      t === 0 && (t = ti()), e = vl(e, t), e !== null && (Tt(e, t), rn(e));
    }
    function B0(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), sd(e, a);
    }
    function ul(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, f = e.memoizedState;
          f !== null && (a = f.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), sd(e, a);
    }
    function rd(e, t, a) {
      if (t.subtreeFlags & 33562624)
        for (t = t.child; t !== null; ) {
          var i = e, f = t, o = f.type === Cd;
          o = a || o, f.tag !== 22 ? f.flags & 33554432 ? o && k(
            f,
            q0,
            i,
            f,
            (f.mode & Dg) === ht
          ) : rd(
            i,
            f,
            o
          ) : f.memoizedState === null && (o && f.flags & 8192 ? k(
            f,
            q0,
            i,
            f
          ) : f.subtreeFlags & 33554432 && k(
            f,
            rd,
            i,
            f,
            o
          )), t = t.sibling;
        }
    }
    function q0(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      _e(!0);
      try {
        Ey(t), a && Oy(t), Ay(e, t.alternate, t, !1), a && nl(e, t, 0, null, !1);
      } finally {
        _e(!1);
      }
    }
    function xy(e) {
      var t = !0;
      e.current.mode & (fa | ku) || (t = !1), rd(
        e,
        e.current,
        t
      );
    }
    function By(e) {
      if ((gt & xa) === pn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = le(e) || "ReactComponent", Tv !== null) {
            if (Tv.has(t)) return;
            Tv.add(t);
          } else Tv = /* @__PURE__ */ new Set([t]);
          k(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function ot(e, t) {
      Kl && e.memoizedUpdaters.forEach(function(a) {
        Pm(e, a, t);
      });
    }
    function ga(e, t) {
      var a = H.actQueue;
      return a !== null ? (a.push(t), nS) : ua(e, t);
    }
    function Xu(e) {
      Qn() && H.actQueue === null && k(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          le(e)
        );
      });
    }
    function rn(e) {
      e !== ph && e.next === null && (ph === null ? Ev = ph = e : ph = ph.next = e), Av = !0, H.actQueue !== null ? Wp || (Wp = !0, Sa(Y0)) : $p || ($p = !0, Sa(Y0));
    }
    function Lf(e, t) {
      if (!Fp && Av) {
        Fp = !0;
        do
          for (var a = !1, i = Ev; i !== null; ) {
            if (e !== 0) {
              var f = i.pendingLanes;
              if (f === 0) var o = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                o = (1 << 31 - Gl(42 | e) + 1) - 1, o &= f & ~(d & ~h), o = o & 201326677 ? o & 201326677 | 1 : o ? o | 2 : 0;
              }
              o !== 0 && (a = !0, ja(i, o));
            } else
              o = Me, o = hl(
                i,
                i === it ? o : 0
              ), !(o & 3) || qa(i, o) || (a = !0, ja(i, o));
            i = i.next;
          }
        while (a);
        Fp = !1;
      }
    }
    function Y0() {
      Av = Wp = $p = !1;
      var e = 0;
      tr !== 0 && (De() && (e = tr), tr = 0);
      for (var t = In(), a = null, i = Ev; i !== null; ) {
        var f = i.next, o = dd(i, t);
        o === 0 ? (i.next = null, a === null ? Ev = f : a.next = f, f === null && (ph = a)) : (a = i, (e !== 0 || o & 3) && (Av = !0)), i = f;
      }
      Lf(e);
    }
    function dd(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, f = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o; ) {
        var d = 31 - Gl(o), h = 1 << d, m = f[d];
        m === -1 ? (!(h & a) || h & i) && (f[d] = el(h, t)) : m <= t && (e.expiredLanes |= h), o &= ~h;
      }
      if (t = it, a = Me, a = hl(
        e,
        e === t ? a : 0
      ), i = e.callbackNode, a === 0 || e === t && ct === Fs || e.cancelPendingCommit !== null)
        return i !== null && hd(i), e.callbackNode = null, e.callbackPriority = 0;
      if (!(a & 3) || qa(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || H.actQueue !== null && i !== Ip)
          hd(i);
        else return t;
        switch (t0(a)) {
          case Da:
          case wa:
            a = Xd;
            break;
          case mn:
            a = lo;
            break;
          case wc:
            a = nm;
            break;
          default:
            a = lo;
        }
        return i = ba.bind(null, e), H.actQueue !== null ? (H.actQueue.push(i), a = Ip) : a = ua(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && hd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function ba(e, t) {
      uv = nv = !1;
      var a = e.callbackNode;
      if (Vu() && e.callbackNode !== a)
        return null;
      var i = Me;
      return i = hl(
        e,
        e === it ? i : 0
      ), i === 0 ? null : (hs(
        e,
        i,
        t
      ), dd(e, In()), e.callbackNode != null && e.callbackNode === a ? ba.bind(null, e) : null);
    }
    function ja(e, t) {
      if (Vu()) return null;
      nv = uv, uv = !1, hs(e, t, !0);
    }
    function hd(e) {
      e !== Ip && e !== null && k0(e);
    }
    function Sa(e) {
      H.actQueue !== null && H.actQueue.push(function() {
        return e(), null;
      }), rS(function() {
        (gt & (xa | Ic)) !== pn ? ua(Yi, e) : e();
      });
    }
    function yd() {
      return tr === 0 && (tr = En()), tr;
    }
    function Ln(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (He(e, "action"), Dn("" + e));
    }
    function Mc(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function zi(e, t, a, i, f) {
      if (t === "submit" && a && a.stateNode === f) {
        var o = Ln(
          (f[ia] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ia] || null) ? Ln(t.formAction) : d.getAttribute("formAction"), t !== null && (o = t, d = null));
        var h = new A(
          "action",
          "action",
          null,
          i,
          f
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (tr !== 0) {
                    var m = d ? Mc(
                      f,
                      d
                    ) : new FormData(f), p = {
                      pending: !0,
                      data: m,
                      method: f.method,
                      action: o
                    };
                    Object.freeze(p), qn(
                      a,
                      p,
                      null,
                      m
                    );
                  }
                } else
                  typeof o == "function" && (h.preventDefault(), m = d ? Mc(
                    f,
                    d
                  ) : new FormData(f), p = {
                    pending: !0,
                    data: m,
                    method: f.method,
                    action: o
                  }, Object.freeze(p), qn(
                    a,
                    p,
                    o,
                    m
                  ));
              },
              currentTarget: f
            }
          ]
        });
      }
    }
    function md(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var f = void 0, o = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], m = h.instance, p = h.currentTarget;
              if (h = h.listener, m !== f && o.isPropagationStopped())
                break e;
              f = o, f.currentTarget = p;
              try {
                h(f);
              } catch (O) {
                yv(O);
              }
              f.currentTarget = null, f = m;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], m = h.instance, p = h.currentTarget, h = h.listener, m !== f && o.isPropagationStopped())
                break e;
              f = o, f.currentTarget = p;
              try {
                h(f);
              } catch (O) {
                yv(O);
              }
              f.currentTarget = null, f = m;
            }
        }
      }
    }
    function ze(e, t) {
      Pp.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Lc];
      a === void 0 && (a = t[Lc] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Uc(t, e, 2, !1), a.add(i));
    }
    function Zn(e, t, a) {
      Pp.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Uc(
        a,
        e,
        i,
        t
      );
    }
    function vd(e) {
      if (!e[Rv]) {
        e[Rv] = !0, Ns.forEach(function(a) {
          a !== "selectionchange" && (Pp.has(a) || Zn(a, !1, e), Zn(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Rv] || (t[Rv] = !0, Zn("selectionchange", !1, t));
      }
    }
    function Uc(e, t, a, i) {
      switch (_c(t)) {
        case Da:
          var f = L0;
          break;
        case wa:
          f = Pv;
          break;
        default:
          f = Jy;
      }
      a = f.bind(
        null,
        t,
        a,
        e
      ), f = void 0, !U || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (f = !0), i ? f !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: f
      }) : e.addEventListener(t, a, !0) : f !== void 0 ? e.addEventListener(t, a, {
        passive: f
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Hc(e, t, a, i, f) {
      var o = i;
      if (!(t & 1) && !(t & 2) && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === f || h.nodeType === 8 && h.parentNode === f)
              break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var m = d.tag;
                if ((m === 3 || m === 4) && (m = d.stateNode.containerInfo, m === f || m.nodeType === 8 && m.parentNode === f))
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = An(h), d === null) return;
              if (m = d.tag, m === 5 || m === 6 || m === 26 || m === 27) {
                i = o = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      pr(function() {
        var p = o, O = ni(a), G = [];
        e: {
          var M = Rg.get(e);
          if (M !== void 0) {
            var V = A, ee = e;
            switch (e) {
              case "keypress":
                if (df(a) === 0) break e;
              case "keydown":
              case "keyup":
                V = zb;
                break;
              case "focusin":
                ee = "focus", V = hp;
                break;
              case "focusout":
                ee = "blur", V = hp;
                break;
              case "beforeblur":
              case "afterblur":
                V = hp;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                V = Kt;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                V = wi;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                V = Mb;
                break;
              case Sg:
              case Tg:
              case Eg:
                V = vb;
                break;
              case Ag:
                V = Hb;
                break;
              case "scroll":
              case "scrollend":
                V = X;
                break;
              case "wheel":
                V = xb;
                break;
              case "copy":
              case "cut":
              case "paste":
                V = gb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                V = dg;
                break;
              case "toggle":
              case "beforetoggle":
                V = qb;
            }
            var ge = (t & 4) !== 0, Jt = !ge && (e === "scroll" || e === "scrollend"), Le = ge ? M !== null ? M + "Capture" : null : M;
            ge = [];
            for (var S = p, b; S !== null; ) {
              var E = S;
              if (b = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || b === null || Le === null || (E = sf(S, Le), E != null && ge.push(
                _u(
                  S,
                  E,
                  b
                )
              )), Jt) break;
              S = S.return;
            }
            0 < ge.length && (M = new V(
              M,
              ee,
              null,
              a,
              O
            ), G.push({
              event: M,
              listeners: ge
            }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (M = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", M && a !== g && (ee = a.relatedTarget || a.fromElement) && (An(ee) || ee[Gi]))
              break e;
            if ((V || M) && (M = O.window === O ? O : (M = O.ownerDocument) ? M.defaultView || M.parentWindow : window, V ? (ee = a.relatedTarget || a.toElement, V = p, ee = ee ? An(ee) : null, ee !== null && (Jt = It(ee), ge = ee.tag, ee !== Jt || ge !== 5 && ge !== 27 && ge !== 6) && (ee = null)) : (V = null, ee = p), V !== ee)) {
              if (ge = Kt, E = "onMouseLeave", Le = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (ge = dg, E = "onPointerLeave", Le = "onPointerEnter", S = "pointer"), Jt = V == null ? M : Do(V), b = ee == null ? M : Do(ee), M = new ge(
                E,
                S + "leave",
                V,
                a,
                O
              ), M.target = Jt, M.relatedTarget = b, E = null, An(O) === p && (ge = new ge(
                Le,
                S + "enter",
                ee,
                a,
                O
              ), ge.target = b, ge.relatedTarget = Jt, E = ge), Jt = E, V && ee)
                t: {
                  for (ge = V, Le = ee, S = 0, b = ge; b; b = Cc(b))
                    S++;
                  for (b = 0, E = Le; E; E = Cc(E))
                    b++;
                  for (; 0 < S - b; )
                    ge = Cc(ge), S--;
                  for (; 0 < b - S; )
                    Le = Cc(Le), b--;
                  for (; S--; ) {
                    if (ge === Le || Le !== null && ge === Le.alternate)
                      break t;
                    ge = Cc(ge), Le = Cc(Le);
                  }
                  ge = null;
                }
              else ge = null;
              V !== null && qy(
                G,
                M,
                V,
                ge,
                !1
              ), ee !== null && Jt !== null && qy(
                G,
                Jt,
                ee,
                ge,
                !0
              );
            }
          }
          e: {
            if (M = p ? Do(p) : window, V = M.nodeName && M.nodeName.toLowerCase(), V === "select" || V === "input" && M.type === "file")
              var Y = Tr;
            else if (ii(M))
              if (gg)
                Y = Jv;
              else {
                Y = Zv;
                var K = n0;
              }
            else
              V = M.nodeName, !V || V.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? p && lc(p.elementType) && (Y = Tr) : Y = Kv;
            if (Y && (Y = Y(e, p))) {
              hf(
                G,
                Y,
                a,
                O
              );
              break e;
            }
            K && K(e, M, p), e === "focusout" && p && M.type === "number" && p.memoizedProps.value != null && mu(M, "number", M.value);
          }
          switch (K = p ? Do(p) : window, e) {
            case "focusin":
              (ii(K) || K.contentEditable === "true") && (kd = K, mp = p, gm = null);
              break;
            case "focusout":
              gm = mp = kd = null;
              break;
            case "mousedown":
              vp = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              vp = !1, o0(
                G,
                a,
                O
              );
              break;
            case "selectionchange":
              if (Vb) break;
            case "keydown":
            case "keyup":
              o0(
                G,
                a,
                O
              );
          }
          var ye;
          if (yp)
            e: {
              switch (e) {
                case "compositionstart":
                  var P = "onCompositionStart";
                  break e;
                case "compositionend":
                  P = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  P = "onCompositionUpdate";
                  break e;
              }
              P = void 0;
            }
          else
            Jd ? Co(e, a) && (P = "onCompositionEnd") : e === "keydown" && a.keyCode === hg && (P = "onCompositionStart");
          P && (yg && a.locale !== "ko" && (Jd || P !== "onCompositionStart" ? P === "onCompositionEnd" && Jd && (ye = rf()) : ($ = O, re = "value" in $ ? $.value : $.textContent, Jd = !0)), K = ju(
            p,
            P
          ), 0 < K.length && (P = new rg(
            P,
            e,
            null,
            a,
            O
          ), G.push({
            event: P,
            listeners: K
          }), ye ? P.data = ye : (ye = xo(a), ye !== null && (P.data = ye)))), (ye = Nb ? a0(e, a) : Pl(e, a)) && (P = ju(
            p,
            "onBeforeInput"
          ), 0 < P.length && (K = new Sb(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            O
          ), G.push({
            event: K,
            listeners: P
          }), K.data = ye)), zi(
            G,
            e,
            p,
            a,
            O
          );
        }
        md(G, t);
      });
    }
    function _u(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ju(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var f = e, o = f.stateNode;
        f = f.tag, f !== 5 && f !== 26 && f !== 27 || o === null || (f = sf(e, a), f != null && i.unshift(
          _u(e, f, o)
        ), f = sf(e, t), f != null && i.push(
          _u(e, f, o)
        )), e = e.return;
      }
      return i;
    }
    function Cc(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function qy(e, t, a, i, f) {
      for (var o = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, m = h.alternate, p = h.stateNode;
        if (h = h.tag, m !== null && m === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (m = p, f ? (p = sf(a, o), p != null && d.unshift(
          _u(a, p, m)
        )) : f || (p = sf(a, o), p != null && d.push(
          _u(a, p, m)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function xc(e, t) {
      vr(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || n || (n = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ku,
        possibleRegistrationNames: um
      };
      lc(e) || typeof t.is == "string" || xh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function wt(e, t, a, i) {
      t !== a && (a = Lt(a), Lt(t) !== a && (i[e] = t));
    }
    function pd(e, t, a) {
      t.forEach(function(i) {
        a[bd(i)] = i === "style" ? bs(e) : e.getAttribute(i);
      });
    }
    function dn(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function N0(e, t) {
      return e = e.namespaceURI === Qi || e.namespaceURI === Oa ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Lt(e) {
      return Ve(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ft(e)
      ), dl(e)), (typeof e == "string" ? e : "" + e).replace(uS, `
`).replace(iS, "");
    }
    function gd(e, t) {
      return t = Lt(t), Lt(e) === t;
    }
    function hn() {
    }
    function Qe(e, t, a, i, f, o) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Ho(i, t), t === "body" || t === "textarea" && i === "" || zn(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Ho("" + i, t), t !== "body" && zn(e, "" + i));
          break;
        case "className":
          Mo(e, "class", i);
          break;
        case "tabIndex":
          Mo(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Mo(e, a, i);
          break;
        case "style":
          Hh(e, i, o);
          break;
        case "data":
          if (t !== "object") {
            Mo(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          He(i, a), i = Dn("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (f.encType == null && f.method == null || Ov || (Ov = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), f.target == null || Dv || (Dv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || f.type === "submit" || f.type === "image" || zv ? t !== "button" || f.type == null || f.type === "submit" || zv ? typeof i == "function" && (f.name == null || B1 || (B1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), f.formEncType == null && f.formMethod == null || Ov || (Ov = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), f.formTarget == null || Dv || (Dv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (zv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (zv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof o == "function" && (a === "formAction" ? (t !== "input" && Qe(e, t, "name", f.name, f, null), Qe(
              e,
              t,
              "formEncType",
              f.formEncType,
              f,
              null
            ), Qe(
              e,
              t,
              "formMethod",
              f.formMethod,
              f,
              null
            ), Qe(
              e,
              t,
              "formTarget",
              f.formTarget,
              f,
              null
            )) : (Qe(
              e,
              t,
              "encType",
              f.encType,
              f,
              null
            ), Qe(e, t, "method", f.method, f, null), Qe(
              e,
              t,
              "target",
              f.target,
              f,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          He(i, a), i = Dn("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && dn(a, i), e.onclick = hn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && dn(a, i), ze("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && dn(a, i), ze("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (f.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          He(i, a), a = Dn("" + i), e.setAttributeNS(lr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (He(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Mv[a] || (Mv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
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
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (He(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (He(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (He(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          ze("beforetoggle", e), ze("toggle", e), Oo(e, "popover", i);
          break;
        case "xlinkActuate":
          hu(
            e,
            lr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          hu(
            e,
            lr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          hu(
            e,
            lr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          hu(
            e,
            lr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          hu(
            e,
            lr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          hu(
            e,
            lr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          hu(
            e,
            eg,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          hu(
            e,
            eg,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          hu(
            e,
            eg,
            "xml:space",
            i
          );
          break;
        case "is":
          o != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Oo(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          q1 || i == null || typeof i != "object" || (q1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = l0(a), Oo(e, a, i)) : Ku.hasOwnProperty(a) && i != null && typeof i != "function" && dn(a, i);
      }
    }
    function Zf(e, t, a, i, f, o) {
      switch (a) {
        case "style":
          Hh(e, i, o);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (f.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? zn(e, i) : (typeof i == "number" || typeof i == "bigint") && zn(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && dn(a, i), ze("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && dn(a, i), ze("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && dn(a, i), e.onclick = hn);
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
          if (Ku.hasOwnProperty(a))
            i != null && typeof i != "function" && dn(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (f = a.endsWith("Capture"), t = a.slice(2, f ? a.length - 7 : void 0), o = e[ia] || null, o = o != null ? o[a] : null, typeof o == "function" && e.removeEventListener(t, o, f), typeof i == "function")) {
                typeof o != "function" && o !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, f);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Oo(e, a, i);
            }
      }
    }
    function pt(e, t, a) {
      switch (xc(t, a), t) {
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
          ze("error", e), ze("load", e);
          var i = !1, f = !1, o;
          for (o in a)
            if (a.hasOwnProperty(o)) {
              var d = a[o];
              if (d != null)
                switch (o) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    f = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Qe(e, t, o, d, a, null);
                }
            }
          f && Qe(e, t, "srcSet", a.srcSet, a, null), i && Qe(e, t, "src", a.src, a, null);
          return;
        case "input":
          nf("input", a), ze("invalid", e);
          var h = o = d = f = null, m = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var O = a[i];
              if (O != null)
                switch (i) {
                  case "name":
                    f = O;
                    break;
                  case "type":
                    d = O;
                    break;
                  case "checked":
                    m = O;
                    break;
                  case "defaultChecked":
                    p = O;
                    break;
                  case "value":
                    o = O;
                    break;
                  case "defaultValue":
                    h = O;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (O != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Qe(e, t, i, O, a, null);
                }
            }
          Th(e, a), rr(
            e,
            o,
            h,
            m,
            p,
            d,
            f,
            !1
          ), yu(e);
          return;
        case "select":
          nf("select", a), ze("invalid", e), i = d = o = null;
          for (f in a)
            if (a.hasOwnProperty(f) && (h = a[f], h != null))
              switch (f) {
                case "value":
                  o = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Qe(
                    e,
                    t,
                    f,
                    h,
                    a,
                    null
                  );
              }
          Xt(e, a), t = o, a = d, e.multiple = !!i, t != null ? Ia(e, !!i, t, !1) : a != null && Ia(e, !!i, a, !0);
          return;
        case "textarea":
          nf("textarea", a), ze("invalid", e), o = f = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  f = h;
                  break;
                case "children":
                  o = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Qe(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Eh(e, a), li(e, i, f, o), yu(e);
          return;
        case "option":
          Ii(e, a);
          for (m in a)
            if (a.hasOwnProperty(m) && (i = a[m], i != null))
              switch (m) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  Qe(e, t, m, i, a, null);
              }
          return;
        case "dialog":
          ze("cancel", e), ze("close", e);
          break;
        case "iframe":
        case "object":
          ze("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < wm.length; i++)
            ze(wm[i], e);
          break;
        case "image":
          ze("error", e), ze("load", e);
          break;
        case "details":
          ze("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          ze("error", e), ze("load", e);
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
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Qe(e, t, p, i, a, null);
              }
          return;
        default:
          if (lc(t)) {
            for (O in a)
              a.hasOwnProperty(O) && (i = a[O], i !== void 0 && Zf(
                e,
                t,
                O,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Qe(e, t, h, i, a, null));
    }
    function G0(e, t, a, i) {
      switch (xc(t, i), t) {
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
          var f = null, o = null, d = null, h = null, m = null, p = null, O = null;
          for (V in a) {
            var G = a[V];
            if (a.hasOwnProperty(V) && G != null)
              switch (V) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  m = G;
                default:
                  i.hasOwnProperty(V) || Qe(
                    e,
                    t,
                    V,
                    null,
                    i,
                    G
                  );
              }
          }
          for (var M in i) {
            var V = i[M];
            if (G = a[M], i.hasOwnProperty(M) && (V != null || G != null))
              switch (M) {
                case "type":
                  o = V;
                  break;
                case "name":
                  f = V;
                  break;
                case "checked":
                  p = V;
                  break;
                case "defaultChecked":
                  O = V;
                  break;
                case "value":
                  d = V;
                  break;
                case "defaultValue":
                  h = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  V !== G && Qe(
                    e,
                    t,
                    M,
                    V,
                    i,
                    G
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || x1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), x1 = !0), !t || i || C1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), C1 = !0), Fi(
            e,
            d,
            h,
            m,
            p,
            O,
            o,
            f
          );
          return;
        case "select":
          V = d = h = M = null;
          for (o in a)
            if (m = a[o], a.hasOwnProperty(o) && m != null)
              switch (o) {
                case "value":
                  break;
                case "multiple":
                  V = m;
                default:
                  i.hasOwnProperty(o) || Qe(
                    e,
                    t,
                    o,
                    null,
                    i,
                    m
                  );
              }
          for (f in i)
            if (o = i[f], m = a[f], i.hasOwnProperty(f) && (o != null || m != null))
              switch (f) {
                case "value":
                  M = o;
                  break;
                case "defaultValue":
                  h = o;
                  break;
                case "multiple":
                  d = o;
                default:
                  o !== m && Qe(
                    e,
                    t,
                    f,
                    o,
                    i,
                    m
                  );
              }
          i = h, t = d, a = V, M != null ? Ia(e, !!t, M, !1) : !!a != !!t && (i != null ? Ia(e, !!t, i, !0) : Ia(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          V = M = null;
          for (h in a)
            if (f = a[h], a.hasOwnProperty(h) && f != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Qe(e, t, h, null, i, f);
              }
          for (d in i)
            if (f = i[d], o = a[d], i.hasOwnProperty(d) && (f != null || o != null))
              switch (d) {
                case "value":
                  M = f;
                  break;
                case "defaultValue":
                  V = f;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (f != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  f !== o && Qe(e, t, d, f, i, o);
              }
          Ah(e, M, V);
          return;
        case "option":
          for (var ee in a)
            if (M = a[ee], a.hasOwnProperty(ee) && M != null && !i.hasOwnProperty(ee))
              switch (ee) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  Qe(
                    e,
                    t,
                    ee,
                    null,
                    i,
                    M
                  );
              }
          for (m in i)
            if (M = i[m], V = a[m], i.hasOwnProperty(m) && M !== V && (M != null || V != null))
              switch (m) {
                case "selected":
                  e.selected = M && typeof M != "function" && typeof M != "symbol";
                  break;
                default:
                  Qe(
                    e,
                    t,
                    m,
                    M,
                    i,
                    V
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
          for (var ge in a)
            M = a[ge], a.hasOwnProperty(ge) && M != null && !i.hasOwnProperty(ge) && Qe(
              e,
              t,
              ge,
              null,
              i,
              M
            );
          for (p in i)
            if (M = i[p], V = a[p], i.hasOwnProperty(p) && M !== V && (M != null || V != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Qe(
                    e,
                    t,
                    p,
                    M,
                    i,
                    V
                  );
              }
          return;
        default:
          if (lc(t)) {
            for (var Jt in a)
              M = a[Jt], a.hasOwnProperty(Jt) && M !== void 0 && !i.hasOwnProperty(Jt) && Zf(
                e,
                t,
                Jt,
                void 0,
                i,
                M
              );
            for (O in i)
              M = i[O], V = a[O], !i.hasOwnProperty(O) || M === V || M === void 0 && V === void 0 || Zf(
                e,
                t,
                O,
                M,
                i,
                V
              );
            return;
          }
      }
      for (var Le in a)
        M = a[Le], a.hasOwnProperty(Le) && M != null && !i.hasOwnProperty(Le) && Qe(e, t, Le, null, i, M);
      for (G in i)
        M = i[G], V = a[G], !i.hasOwnProperty(G) || M === V || M == null && V == null || Qe(e, t, G, M, i, V);
    }
    function bd(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function bs(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Kn(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, f = i = "", o;
        for (o in t)
          if (t.hasOwnProperty(o)) {
            var d = t[o];
            d != null && typeof d != "boolean" && d !== "" && (o.indexOf("--") === 0 ? (oa(d, o), i += f + o + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || fo.has(o) ? (oa(d, o), i += f + o.replace(sm, "-$1").toLowerCase().replace(uo, "-ms-") + ":" + ("" + d).trim()) : i += f + o.replace(sm, "-$1").toLowerCase().replace(uo, "-ms-") + ":" + d + "px", f = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Lt(i), Lt(t) !== i && (a.style = bs(e)));
      }
    }
    function Ta(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (He(i, t), e === "" + i)
              return;
        }
      wt(t, e, i, o);
    }
    function Ss(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      wt(t, e, i, o);
    }
    function Bc(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (He(i, a), e === "" + i)
              return;
        }
      wt(t, e, i, o);
    }
    function st(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (He(i, t), e === "" + i))
              return;
        }
      wt(t, e, i, o);
    }
    function Sd(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (He(i, t), a = Dn("" + i), e === a)
              return;
        }
      wt(t, e, i, o);
    }
    function V0(e, t, a, i) {
      for (var f = {}, o = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            o.add(d[h].name);
        }
      if (lc(t)) {
        for (var m in a)
          if (a.hasOwnProperty(m)) {
            var p = a[m];
            if (p != null) {
              if (Ku.hasOwnProperty(m))
                typeof p != "function" && dn(m, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (m) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || wt(
                      "children",
                      e.textContent,
                      p,
                      f
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = N0(e, p), wt(
                      m,
                      d,
                      p,
                      f
                    ));
                    continue;
                  case "style":
                    o.delete(m), Kn(e, p, f);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    o.delete(m.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      m
                    );
                    continue;
                  case "className":
                    o.delete("class"), d = Sh(
                      e,
                      "class",
                      p
                    ), wt(
                      "className",
                      d,
                      p,
                      f
                    );
                    continue;
                  default:
                    i.context === tf && t !== "svg" && t !== "math" ? o.delete(m.toLowerCase()) : o.delete(m), d = Sh(
                      e,
                      m,
                      p
                    ), wt(
                      m,
                      d,
                      p,
                      f
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (m = a[p], m != null)) {
            if (Ku.hasOwnProperty(p))
              typeof m != "function" && dn(p, m);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof m != "string" && typeof m != "number" || wt(
                    "children",
                    e.textContent,
                    m,
                    f
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, m = m ? m.__html : void 0, m != null && (m = N0(e, m), d !== m && (f[p] = { __html: d }));
                  continue;
                case "className":
                  Ta(
                    e,
                    p,
                    "class",
                    m,
                    o,
                    f
                  );
                  continue;
                case "tabIndex":
                  Ta(
                    e,
                    p,
                    "tabindex",
                    m,
                    o,
                    f
                  );
                  continue;
                case "style":
                  o.delete(p), Kn(e, m, f);
                  continue;
                case "multiple":
                  o.delete(p), wt(
                    p,
                    e.multiple,
                    m,
                    f
                  );
                  continue;
                case "muted":
                  o.delete(p), wt(
                    p,
                    e.muted,
                    m,
                    f
                  );
                  continue;
                case "autoFocus":
                  o.delete("autofocus"), wt(
                    p,
                    e.autofocus,
                    m,
                    f
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    o.delete(p), d = e.getAttribute("data"), wt(
                      p,
                      d,
                      m,
                      f
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(m !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    ), Sd(
                      e,
                      p,
                      p,
                      null,
                      o,
                      f
                    );
                    continue;
                  }
                  Sd(
                    e,
                    p,
                    p,
                    m,
                    o,
                    f
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof m == "function") {
                    o.delete(p.toLowerCase()), p === "formAction" ? (o.delete("name"), o.delete("formenctype"), o.delete("formmethod"), o.delete("formtarget")) : (o.delete("enctype"), o.delete("method"), o.delete("target"));
                    continue;
                  } else if (d === cS) {
                    o.delete(p.toLowerCase()), wt(
                      p,
                      "function",
                      m,
                      f
                    );
                    continue;
                  }
                  Sd(
                    e,
                    p,
                    p.toLowerCase(),
                    m,
                    o,
                    f
                  );
                  continue;
                case "xlinkHref":
                  Sd(
                    e,
                    p,
                    "xlink:href",
                    m,
                    o,
                    f
                  );
                  continue;
                case "contentEditable":
                  Bc(
                    e,
                    p,
                    "contenteditable",
                    m,
                    o,
                    f
                  );
                  continue;
                case "spellCheck":
                  Bc(
                    e,
                    p,
                    "spellcheck",
                    m,
                    o,
                    f
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Bc(
                    e,
                    p,
                    p,
                    m,
                    o,
                    f
                  );
                  continue;
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
                  Ss(
                    e,
                    p,
                    p.toLowerCase(),
                    m,
                    o,
                    f
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var O = d = p, G = f;
                    if (o.delete(O), h = h.getAttribute(O), h === null)
                      switch (typeof m) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (m === !1) break e;
                      }
                    else if (m != null)
                      switch (typeof m) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (m === !0 && h === "") break e;
                          break;
                        default:
                          if (He(m, d), h === "" + m)
                            break e;
                      }
                    wt(
                      d,
                      h,
                      m,
                      G
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, O = d = p, G = f, o.delete(O), h = h.getAttribute(O), h === null)
                      switch (typeof m) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(m) || 1 > m) break e;
                      }
                    else if (m != null)
                      switch (typeof m) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(m) || 1 > m) && (He(m, d), h === "" + m))
                            break e;
                      }
                    wt(
                      d,
                      h,
                      m,
                      G
                    );
                  }
                  continue;
                case "rowSpan":
                  st(
                    e,
                    p,
                    "rowspan",
                    m,
                    o,
                    f
                  );
                  continue;
                case "start":
                  st(
                    e,
                    p,
                    p,
                    m,
                    o,
                    f
                  );
                  continue;
                case "xHeight":
                  Ta(
                    e,
                    p,
                    "x-height",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xlinkActuate":
                  Ta(
                    e,
                    p,
                    "xlink:actuate",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xlinkArcrole":
                  Ta(
                    e,
                    p,
                    "xlink:arcrole",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xlinkRole":
                  Ta(
                    e,
                    p,
                    "xlink:role",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xlinkShow":
                  Ta(
                    e,
                    p,
                    "xlink:show",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xlinkTitle":
                  Ta(
                    e,
                    p,
                    "xlink:title",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xlinkType":
                  Ta(
                    e,
                    p,
                    "xlink:type",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xmlBase":
                  Ta(
                    e,
                    p,
                    "xml:base",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xmlLang":
                  Ta(
                    e,
                    p,
                    "xml:lang",
                    m,
                    o,
                    f
                  );
                  continue;
                case "xmlSpace":
                  Ta(
                    e,
                    p,
                    "xml:space",
                    m,
                    o,
                    f
                  );
                  continue;
                case "inert":
                  m !== "" || Mv[p] || (Mv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), Ss(
                    e,
                    p,
                    p,
                    m,
                    o,
                    f
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = l0(p), d = !1, i.context === tf && t !== "svg" && t !== "math" ? o.delete(h.toLowerCase()) : (O = p.toLowerCase(), O = Zc.hasOwnProperty(
                      O
                    ) && Zc[O] || null, O !== null && O !== p && (d = !0, o.delete(O)), o.delete(h));
                    e: if (O = e, G = h, h = m, fr(G))
                      if (O.hasAttribute(G))
                        O = O.getAttribute(
                          G
                        ), He(
                          h,
                          G
                        ), h = O === "" + h ? h : O;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (O = G.toLowerCase().slice(0, 5), O !== "data-" && O !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || wt(
                      p,
                      h,
                      m,
                      f
                    );
                  }
              }
          }
      return 0 < o.size && a.suppressHydrationWarning !== !0 && pd(e, o, f), Object.keys(f).length === 0 ? null : f;
    }
    function X0(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Td(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function _0(e) {
      switch (e) {
        case Oa:
          return gh;
        case Qi:
          return Cv;
        default:
          return tf;
      }
    }
    function rt(e, t) {
      if (e === tf)
        switch (t) {
          case "svg":
            return gh;
          case "math":
            return Cv;
          default:
            return tf;
        }
      return e === gh && t === "foreignObject" ? tf : e;
    }
    function Ke(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function De() {
      var e = window.event;
      return e && e.type === "popstate" ? e === ng ? !1 : (ng = e, !0) : (ng = null, !1);
    }
    function Ce(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ie(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Ea(e, t, a, i) {
      G0(e, t, a, i), e[ia] = i;
    }
    function Jn(e) {
      zn(e, "");
    }
    function Kf(e, t, a) {
      e.nodeValue = a;
    }
    function Yy(e, t) {
      e.removeChild(t);
    }
    function Qu(e, t) {
      e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function dt(e, t) {
      var a = t, i = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Hv) {
            if (i === 0) {
              e.removeChild(f), Pf(t);
              return;
            }
            i--;
          } else
            a !== Uv && a !== ar && a !== nr || i++;
        a = f;
      } while (a);
      Pf(t);
    }
    function Di(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function qc(e) {
      e.nodeValue = "";
    }
    function Ny(e, t) {
      t = t[oS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Qa(e, t) {
      e.nodeValue = t;
    }
    function Oi(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Oi(a), ru(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ts(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var f = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Vi])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (o = e.getAttribute("rel"), o === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (o !== f.rel || e.getAttribute("href") !== (f.href == null ? null : f.href) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || e.getAttribute("title") !== (f.title == null ? null : f.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (o = e.getAttribute("src"), (o !== (f.src == null ? null : f.src) || e.getAttribute("type") !== (f.type == null ? null : f.type) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && o && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          He(f.name, "name");
          var o = f.name == null ? null : "" + f.name;
          if (f.type === "hidden" && e.getAttribute("name") === o)
            return e;
        } else return e;
        if (e = na(e.nextSibling), e === null) break;
      }
      return null;
    }
    function kn(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = na(e.nextSibling), e === null)) return null;
      return e;
    }
    function na(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Uv || t === nr || t === ar || t === tg || t === Y1)
            break;
          if (t === Hv) return null;
        }
      }
      return e;
    }
    function Ed(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, f = 0; f < i.length; f++) {
          var o = i[f];
          a[bd(o.name)] = o.name.toLowerCase() === "style" ? bs(e) : o.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Es(e, t, a) {
      return a === null || a[fS] !== !0 ? (e.nodeValue === t ? e = null : (t = Lt(t), e = Lt(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function As(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Hv) {
            if (t === 0)
              return na(e.nextSibling);
            t--;
          } else
            a !== Uv && a !== nr && a !== ar || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function wu(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Uv || a === nr || a === ar) {
            if (t === 0) return e;
            t--;
          } else a === Hv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Ad(e) {
      Pf(e);
    }
    function Yc(e) {
      Pf(e);
    }
    function Jf(e, t, a, i, f) {
      switch (f && mr(e, i.ancestorInfo), t = Td(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Gy(e, t, a, i) {
      if (Fa(a)) {
        var f = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          f,
          f,
          f
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (f = a.attributes; f.length; )
        a.removeAttributeNode(f[0]);
      pt(a, e, t), a[Tl] = i, a[ia] = t;
    }
    function kf(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument;
    }
    function $f(e, t, a) {
      var i = bh;
      if (i && typeof t == "string" && t) {
        var f = Ya(t);
        f = 'link[rel="' + e + '"][href="' + f + '"]', typeof a == "string" && (f += '[crossorigin="' + a + '"]'), j1.has(f) || (j1.add(f), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(f) === null && (t = i.createElement("link"), pt(t, "link", e), Gt(t), i.head.appendChild(t)));
      }
    }
    function Rd(e, t, a, i) {
      var f = (f = cl.current) ? kf(f) : null;
      if (!f)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Nc(a.href), t = Wi(f).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Nc(a.href);
            var o = Wi(f).hoistableStyles, d = o.get(e);
            if (!d && (f = f.ownerDocument || f, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: ur, preload: null }
            }, o.set(e, d), (o = f.querySelector(
              Zt(e)
            )) && !o._p && (d.instance = o, d.state.loading = Lm | fu), !ou.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              ou.set(e, h), o || Xy(
                f,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Bl(t) + `
  + ` + Bl(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Bl(t) + `
  + ` + Bl(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Gc(a), t = Wi(f).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Bl(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Fn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Fn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Fn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Nc(e) {
      return 'href="' + Ya(e) + '"';
    }
    function Zt(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Vy(e) {
      return me({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Xy(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = Lm : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= Lm;
      }), t.addEventListener("error", function() {
        return i.loading |= X1;
      }), pt(t, "link", a), Gt(t), e.head.appendChild(t));
    }
    function Gc(e) {
      return '[src="' + Ya(e) + '"]';
    }
    function Rs(e) {
      return "script[async]" + e;
    }
    function $n(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Ya(a.href) + '"]'
            );
            if (i)
              return t.instance = i, Gt(i), i;
            var f = me({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), Gt(i), pt(i, "style", f), Vc(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            f = Nc(a.href);
            var o = e.querySelector(
              Zt(f)
            );
            if (o)
              return t.state.loading |= fu, t.instance = o, Gt(o), o;
            i = Vy(a), (f = ou.get(f)) && zs(i, f), o = (e.ownerDocument || e).createElement("link"), Gt(o);
            var d = o;
            return d._p = new Promise(function(h, m) {
              d.onload = h, d.onerror = m;
            }), pt(o, "link", i), t.state.loading |= fu, Vc(o, a.precedence, e), t.instance = o;
          case "script":
            return o = Gc(a.src), (f = e.querySelector(
              Rs(o)
            )) ? (t.instance = f, Gt(f), f) : (i = a, (f = ou.get(o)) && (i = me({}, a), Mi(i, f)), e = e.ownerDocument || e, f = e.createElement("script"), Gt(f), pt(f, "link", i), e.head.appendChild(f), t.instance = f);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & fu) === ur && (i = t.instance, t.state.loading |= fu, Vc(i, a.precedence, e));
      return t.instance;
    }
    function Vc(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), f = i.length ? i[i.length - 1] : null, o = f, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) o = h;
        else if (o !== f) break;
      }
      o ? o.parentNode.insertBefore(e, o.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function zs(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Mi(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function _y(e, t, a) {
      if (xv === null) {
        var i = /* @__PURE__ */ new Map(), f = xv = /* @__PURE__ */ new Map();
        f.set(a, i);
      } else
        f = xv, i = f.get(a), i || (i = /* @__PURE__ */ new Map(), f.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), f = 0; f < a.length; f++) {
        var o = a[f];
        if (!(o[Vi] || o[Tl] || e === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== Oa) {
          var d = o.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(o) : i.set(d, [o]);
        }
      }
      return i;
    }
    function jy(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function j0(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === gh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflic with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`, or move the <style> to the <style> tag.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var f = t.onError, o = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), f && a.push("`onError`"), o != null && a.push("`disabled`"), f = X0(a, "and"), f += a.length === 1 ? " prop" : " props", o = a.length === 1 ? "an " + f : "the " + f, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                o,
                f
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function zd(e) {
      return !(e.type === "stylesheet" && (e.state.loading & _1) === ur);
    }
    function Qy() {
    }
    function Wv(e, t, a) {
      if (Zm === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = Zm;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & fu) === ur) {
        if (t.instance === null) {
          var f = Nc(a.href), o = e.querySelector(
            Zt(f)
          );
          if (o) {
            e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Dd.bind(i), e.then(i, i)), t.state.loading |= fu, t.instance = o, Gt(o);
            return;
          }
          o = e.ownerDocument || e, a = Vy(a), (f = ou.get(f)) && zs(a, f), o = o.createElement("link"), Gt(o);
          var d = o;
          d._p = new Promise(function(h, m) {
            d.onload = h, d.onerror = m;
          }), pt(o, "link", a), t.instance = o;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & _1) === ur && (i.count++, t = Dd.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function Fv() {
      if (Zm === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = Zm;
      return e.stylesheets && e.count === 0 && Od(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Od(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function Dd() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Od(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Od(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Bv = /* @__PURE__ */ new Map(), t.forEach(Q0, e), Bv = null, Dd.call(e));
    }
    function Q0(e, t) {
      if (!(t.state.loading & fu)) {
        var a = Bv.get(e);
        if (a) var i = a.get(ig);
        else {
          a = /* @__PURE__ */ new Map(), Bv.set(e, a);
          for (var f = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), o = 0; o < f.length; o++) {
            var d = f[o];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(ig, i);
        }
        f = t.instance, d = f.getAttribute("data-precedence"), o = a.get(d) || i, o === i && a.set(ig, f), a.set(d, f), this.count++, i = Dd.bind(this), f.addEventListener("load", i), f.addEventListener("error", i), o ? o.parentNode.insertBefore(f, o.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(f, e.firstChild)), t.state.loading |= fu;
      }
    }
    function Wf(e, t, a) {
      var i = 0;
      switch (e) {
        case "dir":
        case "dirxml":
        case "groupEnd":
        case "table":
          return Z1.apply(console[e], [console].concat(t));
        case "assert":
          i = 1;
      }
      return t = t.slice(0), typeof t[i] == "string" ? t.splice(
        i,
        1,
        Q1 + t[i],
        w1,
        qv + a + qv,
        L1
      ) : t.splice(
        i,
        0,
        Q1,
        w1,
        qv + a + qv,
        L1
      ), t.unshift(console), Z1.apply(console[e], t);
    }
    function Md(e, t, a, i, f, o, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ug, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ol(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ol(0), this.hiddenUpdates = Ol(null), this.identifierPrefix = i, this.onUncaughtError = f, this.onCaughtError = o, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function wy(e, t, a, i, f, o, d, h, m, p, O, G) {
      return e = new Md(
        e,
        t,
        a,
        d,
        h,
        m,
        p,
        G
      ), t = Qb, o === !0 && (t |= fa | ku), Kl && (t |= Jl), o = Xe(3, null, null, t), e.current = o, o.stateNode = e, t = bu(), Va(t), e.pooledCache = t, Va(t), o.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Jr(o), e;
    }
    function Ly(e) {
      return e ? (e = so, e) : so;
    }
    function w0(e, t, a, i) {
      return t.tag === 0 && Vu(), Zy(
        t.current,
        2,
        e,
        t,
        a,
        i
      ), 2;
    }
    function Zy(e, t, a, i, f, o) {
      if (Nl && typeof Nl.onScheduleFiberRoot == "function")
        try {
          Nl.onScheduleFiberRoot(ao, i, a);
        } catch (d) {
          Zl || (Zl = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      J !== null && typeof J.markRenderScheduled == "function" && J.markRenderScheduled(t), f = Ly(f), i.context === null ? i.context = f : i.pendingContext = f, za && Yl !== null && !K1 && (K1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        le(Yl) || "Unknown"
      )), i = Uu(t), i.payload = { element: a }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        o
      ), i.callback = o), a = Hu(e, i, t), a !== null && (ke(a, e, t), us(a, e, t));
    }
    function Xc(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Ud(e, t) {
      Xc(e, t), (e = e.alternate) && Xc(e, t);
    }
    function Je(e) {
      if (e.tag === 13) {
        var t = vl(e, 67108864);
        t !== null && ke(t, e, 67108864), Ud(e, 67108864);
      }
    }
    function Ky() {
      return Yl;
    }
    function Iv() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = Fe(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function L0(e, t, a, i) {
      var f = H.T;
      H.T = null;
      var o = Pe.p;
      try {
        Pe.p = Da, Jy(e, t, a, i);
      } finally {
        Pe.p = o, H.T = f;
      }
    }
    function Pv(e, t, a, i) {
      var f = H.T;
      H.T = null;
      var o = Pe.p;
      try {
        Pe.p = wa, Jy(e, t, a, i);
      } finally {
        Pe.p = o, H.T = f;
      }
    }
    function Jy(e, t, a, i) {
      if (Yv) {
        var f = ky(i);
        if (f === null)
          Hc(
            e,
            t,
            i,
            Nv,
            a
          ), Hd(e, i);
        else if ($y(
          f,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Hd(e, i), t & 4 && -1 < dS.indexOf(e)) {
          for (; f !== null; ) {
            var o = Fa(f);
            if (o !== null)
              switch (o.tag) {
                case 3:
                  if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                    var d = fe(o.pendingLanes);
                    if (d !== 0) {
                      var h = o;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var m = 1 << 31 - Gl(d);
                        h.entanglements[1] |= m, d &= ~m;
                      }
                      rn(o), (gt & (xa | Ic)) === pn && (gv = In() + O1, Lf(0));
                    }
                  }
                  break;
                case 13:
                  h = vl(o, 2), h !== null && ke(h, o, 2), pa(), Ud(o, 2);
              }
            if (o = ky(i), o === null && Hc(
              e,
              t,
              i,
              Nv,
              a
            ), o === f) break;
            f = o;
          }
          f !== null && i.stopPropagation();
        } else
          Hc(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function ky(e) {
      return e = ni(e), Ff(e);
    }
    function Ff(e) {
      if (Nv = null, e = An(e), e !== null) {
        var t = It(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = C(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Nv = e, null;
    }
    function _c(e) {
      switch (e) {
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
          return Da;
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
          return wa;
        case "message":
          switch (ap()) {
            case Yi:
              return Da;
            case Xd:
              return wa;
            case lo:
            case np:
              return mn;
            case nm:
              return wc;
            default:
              return mn;
          }
        default:
          return mn;
      }
    }
    function Hd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          To = null;
          break;
        case "dragenter":
        case "dragleave":
          Eo = null;
          break;
        case "mouseover":
        case "mouseout":
          Ao = null;
          break;
        case "pointerover":
        case "pointerout":
          Jm.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          km.delete(t.pointerId);
      }
    }
    function Ui(e, t, a, i, f, o) {
      return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: o,
        targetContainers: [f]
      }, t !== null && (t = Fa(t), t !== null && Je(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, f !== null && t.indexOf(f) === -1 && t.push(f), e);
    }
    function $y(e, t, a, i, f) {
      switch (t) {
        case "focusin":
          return To = Ui(
            To,
            e,
            t,
            a,
            i,
            f
          ), !0;
        case "dragenter":
          return Eo = Ui(
            Eo,
            e,
            t,
            a,
            i,
            f
          ), !0;
        case "mouseover":
          return Ao = Ui(
            Ao,
            e,
            t,
            a,
            i,
            f
          ), !0;
        case "pointerover":
          var o = f.pointerId;
          return Jm.set(
            o,
            Ui(
              Jm.get(o) || null,
              e,
              t,
              a,
              i,
              f
            )
          ), !0;
        case "gotpointercapture":
          return o = f.pointerId, km.set(
            o,
            Ui(
              km.get(o) || null,
              e,
              t,
              a,
              i,
              f
            )
          ), !0;
      }
      return !1;
    }
    function Hi(e) {
      var t = An(e.target);
      if (t !== null) {
        var a = It(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = C(a), t !== null) {
              e.blockedOn = t, cr(e.priority, function() {
                if (a.tag === 13) {
                  var i = wl(a), f = vl(a, i);
                  f !== null && ke(f, a, i), Ud(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Aa(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = ky(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), f = i;
          g !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), g = f, a.target.dispatchEvent(i), g === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), g = null;
        } else
          return t = Fa(a), t !== null && Je(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function If(e, t, a) {
      Aa(e) && a.delete(t);
    }
    function ep() {
      cg = !1, To !== null && Aa(To) && (To = null), Eo !== null && Aa(Eo) && (Eo = null), Ao !== null && Aa(Ao) && (Ao = null), Jm.forEach(If), km.forEach(If);
    }
    function Ds(e, t) {
      e.blockedOn === t && (e.blockedOn = null, cg || (cg = !0, Ht.unstable_scheduleCallback(
        Ht.unstable_NormalPriority,
        ep
      )));
    }
    function Wy(e) {
      Gv !== e && (Gv = e, Ht.unstable_scheduleCallback(
        Ht.unstable_NormalPriority,
        function() {
          Gv === e && (Gv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], f = e[t + 2];
            if (typeof i != "function") {
              if (Ff(i || a) === null)
                continue;
              break;
            }
            var o = Fa(a);
            o !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: f,
              method: a.method,
              action: i
            }, Object.freeze(a), qn(
              o,
              a,
              i,
              f
            ));
          }
        }
      ));
    }
    function Pf(e) {
      function t(m) {
        return Ds(m, e);
      }
      To !== null && Ds(To, e), Eo !== null && Ds(Eo, e), Ao !== null && Ds(Ao, e), Jm.forEach(t), km.forEach(t);
      for (var a = 0; a < Ro.length; a++) {
        var i = Ro[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < Ro.length && (a = Ro[0], a.blockedOn === null); )
        Hi(a), a.blockedOn === null && Ro.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var f = a[i], o = a[i + 1], d = f[ia] || null;
          if (typeof o == "function")
            d || Wy(a);
          else if (d) {
            var h = null;
            if (o && o.hasAttribute("formAction")) {
              if (f = o, d = o[ia] || null)
                h = d.formAction;
              else if (Ff(f) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Wy(a);
          }
        }
    }
    function Fy(e) {
      this._internalRoot = e;
    }
    function eo(e) {
      this._internalRoot = e;
    }
    function Iy(e) {
      e[Gi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Ht = yb(), Py = sg, em = db, tm = Symbol.for("react.element"), Ci = Symbol.for("react.transitional.element"), to = Symbol.for("react.portal"), Wn = Symbol.for("react.fragment"), Cd = Symbol.for("react.strict_mode"), xd = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), Os = Symbol.for("react.consumer"), Ra = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), Bd = Symbol.for("react.suspense"), Ms = Symbol.for("react.suspense_list"), xi = Symbol.for("react.memo"), ql = Symbol.for("react.lazy"), Qc = Symbol.for("react.offscreen"), Z0 = Symbol.for("react.memo_cache_sentinel"), K0 = Symbol.iterator, tp = Symbol.for("react.client.reference"), H = Py.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.assign, Bi = 0, we, qd, il, J0, Yd, Nd, Us;
    zl.__reactDisabledLog = !0;
    var Gd, lm, Hs = !1, Cs = new (typeof WeakMap == "function" ? WeakMap : Map)(), Yl = null, za = !1, Sl = Array.isArray, Pe = em.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lp = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), am = [], xs = [], yn = -1, qi = ue(null), Bs = ue(null), cl = ue(null), qs = ue(null), Fn = Object.prototype.hasOwnProperty, ua = Ht.unstable_scheduleCallback, k0 = Ht.unstable_cancelCallback, Vd = Ht.unstable_shouldYield, Lu = Ht.unstable_requestPaint, In = Ht.unstable_now, ap = Ht.unstable_getCurrentPriorityLevel, Yi = Ht.unstable_ImmediatePriority, Xd = Ht.unstable_UserBlockingPriority, lo = Ht.unstable_NormalPriority, np = Ht.unstable_LowPriority, nm = Ht.unstable_IdlePriority, up = Ht.log, ip = Ht.unstable_setDisableYieldValue, ao = null, Nl = null, J = null, Zl = !1, Kl = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Gl = Math.clz32 ? Math.clz32 : Pt, cp = Math.log, no = Math.LN2, Ni = 128, Ys = 4194304, Da = 2, wa = 8, mn = 32, wc = 268435456, Zu = Math.random().toString(36).slice(2), Tl = "__reactFiber$" + Zu, ia = "__reactProps$" + Zu, Gi = "__reactContainer$" + Zu, Lc = "__reactEvents$" + Zu, fp = "__reactListeners$" + Zu, op = "__reactHandles$" + Zu, $0 = "__reactResources$" + Zu, Vi = "__reactMarker$" + Zu, Ns = /* @__PURE__ */ new Set(), Ku = {}, um = {}, ca = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, W0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), im = {}, cm = {}, F0 = /[\n"\\]/g, _d = !1, fm = !1, Gs = !1, I0 = !1, P0 = !1, jd = !1, Qd = ["value", "defaultValue"], Vs = !1, wd = /["'&<>\n\t]|^\s|\s$/, ev = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Ld = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Xi = Ld.concat(["button"]), _i = "dd dt li option optgroup p rp rt".split(" "), Ju = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null
    }, ji = {}, Qi = "http://www.w3.org/1998/Math/MathML", Oa = "http://www.w3.org/2000/svg", om = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, sm = /([A-Z])/g, uo = /^ms-/, rp = /^(?:webkit|moz|o)[A-Z]/, tv = /^-ms-/, Zd = /-(.)/g, rm = /;\s*$/, io = {}, co = {}, Xs = !1, dm = !1, fo = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), hm = /* @__PURE__ */ new Map([
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
    ]), Zc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, ym = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, oo = {}, Kd = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), l = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), n = !1, u = {}, c = /^on./, s = /^on[^A-Z]/, r = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), y = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), v = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, g = null, R = null, N = null, _ = !1, U = !1;
    if (ca)
      try {
        var q = {};
        Object.defineProperty(q, "passive", {
          get: function() {
            U = !0;
          }
        }), window.addEventListener("test", q, q), window.removeEventListener("test", q, q);
      } catch {
        U = !1;
      }
    var $ = null, re = null, ut = null, z = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, A = Ml(z), D = me({}, z, { view: 0, detail: 0 }), X = Ml(D), W, pe, te, ie = me({}, D, {
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
      getModifierState: br,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== te && (te && e.type === "mousemove" ? (W = e.screenX - te.screenX, pe = e.screenY - te.screenY) : pe = W = 0, te = e), W);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : pe;
      }
    }), Kt = Ml(ie), Ye = me({}, ie, { dataTransfer: 0 }), wi = Ml(Ye), dp = me({}, D, { relatedTarget: 0 }), hp = Ml(dp), mb = me({}, z, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), vb = Ml(mb), pb = me({}, z, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), gb = Ml(pb), bb = me({}, z, { data: 0 }), rg = Ml(
      bb
    ), Sb = rg, Tb = {
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
    }, Eb = {
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
    }, Ab = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, Rb = me({}, D, {
      key: function(e) {
        if (e.key) {
          var t = Tb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = df(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Eb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: br,
      charCode: function(e) {
        return e.type === "keypress" ? df(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? df(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), zb = Ml(Rb), Db = me({}, ie, {
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
    }), dg = Ml(Db), Ob = me({}, D, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: br
    }), Mb = Ml(Ob), Ub = me({}, z, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Hb = Ml(Ub), Cb = me({}, ie, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), xb = Ml(Cb), Bb = me({}, z, {
      newState: 0,
      oldState: 0
    }), qb = Ml(Bb), Yb = [9, 13, 27, 32], hg = 229, yp = ca && "CompositionEvent" in window, mm = null;
    ca && "documentMode" in document && (mm = document.documentMode);
    var Nb = ca && "TextEvent" in window && !mm, yg = ca && (!yp || mm && 8 < mm && 11 >= mm), mg = 32, vg = String.fromCharCode(mg), pg = !1, Jd = !1, Gb = {
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
    }, vm = null, pm = null, gg = !1;
    ca && (gg = Sr("input") && (!document.documentMode || 9 < document.documentMode));
    var Ma = typeof Object.is == "function" ? Object.is : qh, Vb = ca && "documentMode" in document && 11 >= document.documentMode, kd = null, mp = null, gm = null, vp = !1, $d = {
      animationend: ac("Animation", "AnimationEnd"),
      animationiteration: ac("Animation", "AnimationIteration"),
      animationstart: ac("Animation", "AnimationStart"),
      transitionrun: ac("Transition", "TransitionRun"),
      transitionstart: ac("Transition", "TransitionStart"),
      transitioncancel: ac("Transition", "TransitionCancel"),
      transitionend: ac("Transition", "TransitionEnd")
    }, pp = {}, bg = {};
    ca && (bg = document.createElement("div").style, "AnimationEvent" in window || (delete $d.animationend.animation, delete $d.animationiteration.animation, delete $d.animationstart.animation), "TransitionEvent" in window || delete $d.transitionend.transition);
    var Sg = nc("animationend"), Tg = nc("animationiteration"), Eg = nc("animationstart"), Xb = nc("transitionrun"), _b = nc("transitionstart"), jb = nc("transitioncancel"), Ag = nc("transitionend"), Rg = /* @__PURE__ */ new Map(), zg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
      " "
    ), lv = 1, bm = 2, _s = 4, Pn = [], Wd = 0, gp = 0, so = {};
    Object.freeze(so);
    var eu = null, Fd = null, ht = 0, Qb = 1, Jl = 2, fa = 8, ku = 16, Dg = 64, Id = Ht.unstable_now, bp = -0, av = -0, La = -1.1, js = -0, nv = !1, uv = !1, $u = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Sm = [], Tm = [], Em = [], Am = [], Rm = [], zm = [], Qs = /* @__PURE__ */ new Set();
    $u.recordUnsafeLifecycleWarnings = function(e, t) {
      Qs.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Sm.push(e), e.mode & fa && typeof t.UNSAFE_componentWillMount == "function" && Tm.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Em.push(e), e.mode & fa && typeof t.UNSAFE_componentWillReceiveProps == "function" && Am.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Rm.push(e), e.mode & fa && typeof t.UNSAFE_componentWillUpdate == "function" && zm.push(e));
    }, $u.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Sm.length && (Sm.forEach(function(h) {
        e.add(
          le(h) || "Component"
        ), Qs.add(h.type);
      }), Sm = []);
      var t = /* @__PURE__ */ new Set();
      0 < Tm.length && (Tm.forEach(function(h) {
        t.add(
          le(h) || "Component"
        ), Qs.add(h.type);
      }), Tm = []);
      var a = /* @__PURE__ */ new Set();
      0 < Em.length && (Em.forEach(function(h) {
        a.add(
          le(h) || "Component"
        ), Qs.add(h.type);
      }), Em = []);
      var i = /* @__PURE__ */ new Set();
      0 < Am.length && (Am.forEach(
        function(h) {
          i.add(
            le(h) || "Component"
          ), Qs.add(h.type);
        }
      ), Am = []);
      var f = /* @__PURE__ */ new Set();
      0 < Rm.length && (Rm.forEach(function(h) {
        f.add(
          le(h) || "Component"
        ), Qs.add(h.type);
      }), Rm = []);
      var o = /* @__PURE__ */ new Set();
      if (0 < zm.length && (zm.forEach(function(h) {
        o.add(
          le(h) || "Component"
        ), Qs.add(h.type);
      }), zm = []), 0 < t.size) {
        var d = Ge(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Ge(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Ge(
        o
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Ge(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Ge(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Ge(f), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var iv = /* @__PURE__ */ new Map(), Og = /* @__PURE__ */ new Set();
    $u.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & fa && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !Og.has(e.type) && (i = iv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], iv.set(a, i)), i.push(e));
    }, $u.flushLegacyContextWarning = function() {
      iv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(f) {
            a.add(le(f) || "Component"), Og.add(f.type);
          });
          var i = Ge(a);
          k(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, $u.discardPendingWarnings = function() {
      Sm = [], Tm = [], Em = [], Am = [], Rm = [], zm = [], iv = /* @__PURE__ */ new Map();
    };
    var Sp = /* @__PURE__ */ new WeakMap(), Pd = [], eh = 0, cv = null, fv = 0, tu = [], lu = 0, ws = null, Kc = 1, Jc = "", Ua = null, kl = null, Be = !1, kc = !1, au = null, Wu = null, Li = !1, Tp = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ov = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
    ), Mg = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Ep = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Dm = null, sv = !1, Ug = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = za;
        za = !0;
        try {
          return e(t, a);
        } finally {
          za = i;
        }
      }
    }, Ap = Ug["react-stack-bottom-frame"].bind(Ug), Hg = {
      "react-stack-bottom-frame": function(e) {
        var t = za;
        za = !0;
        try {
          return e.render();
        } finally {
          za = t;
        }
      }
    }, Cg = Hg["react-stack-bottom-frame"].bind(Hg), xg = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ne(e, e.return, a);
        }
      }
    }, Rp = xg["react-stack-bottom-frame"].bind(xg), Bg = {
      "react-stack-bottom-frame": function(e, t, a, i, f) {
        try {
          t.componentDidUpdate(a, i, f);
        } catch (o) {
          Ne(e, e.return, o);
        }
      }
    }, qg = Bg["react-stack-bottom-frame"].bind(Bg), Yg = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, wb = Yg["react-stack-bottom-frame"].bind(Yg), Ng = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Ne(e, t, i);
        }
      }
    }, Gg = Ng["react-stack-bottom-frame"].bind(Ng), Vg = {
      "react-stack-bottom-frame": function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, Lb = Vg["react-stack-bottom-frame"].bind(Vg), Xg = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Ne(e, t, i);
        }
      }
    }, Zb = Xg["react-stack-bottom-frame"].bind(Xg), _g = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, ro = _g["react-stack-bottom-frame"].bind(_g), th = null, Om = 0, Se = null, zp, jg = zp = !1, Qg = {}, wg = {}, Lg = {};
    Nt = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = le(e), f = i || "null";
        if (!Qg[f]) {
          Qg[f] = !0, a = a._owner, e = e._debugOwner;
          var o = "";
          e && typeof e.tag == "number" && (f = le(e)) && (o = `

Check the render method of \`` + f + "`."), o || i && (o = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = le(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), k(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              o,
              d
            );
          });
        }
      }
    };
    var Ls = Lh(!0), Zg = Lh(!1), lh = ue(null), rv = ue(0), nu = ue(null), Zi = null, ah = 1, Mm = 2, El = ue(0), uu = 0, iu = 1, Ha = 2, $l = 4, Al = 8, Kb = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, Jb = Ht.unstable_scheduleCallback, kb = Ht.unstable_NormalPriority, Rl = {
      $$typeof: Ra,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Um = null, Dp = 0, Zs = 0, nh = null, Kg = H.S;
    H.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && g0(e, t), Kg !== null && Kg(e, t);
    };
    var Ks = ue(null), uh, Jg = /* @__PURE__ */ new Set(), kg = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), ho = 0, de = null, et = null, fl = null, dv = !1, ih = !1, Js = !1, hv = 0, Hm = 0, $c = null, $b = 0, Wb = 25, x = null, cu = null, Wc = -1, Cm = !1, Mp = function() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }, Ki = {
      readContext: at,
      use: Su,
      useCallback: Et,
      useContext: Et,
      useEffect: Et,
      useImperativeHandle: Et,
      useLayoutEffect: Et,
      useInsertionEffect: Et,
      useMemo: Et,
      useReducer: Et,
      useRef: Et,
      useState: Et,
      useDebugValue: Et,
      useDeferredValue: Et,
      useTransition: Et,
      useSyncExternalStore: Et,
      useId: Et
    };
    Ki.useCacheRefresh = Et, Ki.useMemoCache = Et, Ki.useHostTransitionStatus = Et, Ki.useFormState = Et, Ki.useActionState = Et, Ki.useOptimistic = Et;
    var yo = null, ks = null, mo = null, $s = null, Za = null, Ca = null, vo = null;
    yo = {
      readContext: function(e) {
        return at(e);
      },
      use: Su,
      useCallback: function(e, t) {
        return x = "useCallback", Ae(), rc(t), Yr(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Ae(), at(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", Ae(), rc(t), yi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Ae(), rc(a), Rf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", Ae(), rc(t), hi(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Ae(), rc(t), Ef(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Ae(), rc(t);
        var a = H.H;
        H.H = Za;
        try {
          return Nr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Ae();
        var i = H.H;
        H.H = Za;
        try {
          return si(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", Ae(), vc(e);
      },
      useState: function(e) {
        x = "useState", Ae();
        var t = H.H;
        H.H = Za;
        try {
          return gl(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Ae();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Ae(), zf(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Ae(), un();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Ae(), la(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Ae(), Ph();
      },
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Ae(), ey();
      }
    }, yo.useMemoCache = tl, yo.useHostTransitionStatus = pc, yo.useFormState = function(e, t) {
      return x = "useFormState", Ae(), wo(), xn(e, t);
    }, yo.useActionState = function(e, t) {
      return x = "useActionState", Ae(), xn(e, t);
    }, yo.useOptimistic = function(e) {
      return x = "useOptimistic", Ae(), _t(e);
    }, ks = {
      readContext: function(e) {
        return at(e);
      },
      use: Su,
      useCallback: function(e, t) {
        return x = "useCallback", Q(), Yr(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Q(), at(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", Q(), yi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Q(), Rf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", Q(), hi(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Q(), Ef(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Q();
        var a = H.H;
        H.H = Za;
        try {
          return Nr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Q();
        var i = H.H;
        H.H = Za;
        try {
          return si(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", Q(), vc(e);
      },
      useState: function(e) {
        x = "useState", Q();
        var t = H.H;
        H.H = Za;
        try {
          return gl(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Q(), zf(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Q(), un();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Q(), la(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Q(), Ph();
      },
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Q(), ey();
      }
    }, ks.useMemoCache = tl, ks.useHostTransitionStatus = pc, ks.useFormState = function(e, t) {
      return x = "useFormState", Q(), wo(), xn(e, t);
    }, ks.useActionState = function(e, t) {
      return x = "useActionState", Q(), xn(e, t);
    }, ks.useOptimistic = function(e) {
      return x = "useOptimistic", Q(), _t(e);
    }, mo = {
      readContext: function(e) {
        return at(e);
      },
      use: Su,
      useCallback: function(e, t) {
        return x = "useCallback", Q(), Bn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Q(), at(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", Q(), jt(2048, Al, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Q(), ko(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", Q(), jt(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Q(), jt(4, $l, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Q();
        var a = H.H;
        H.H = Ca;
        try {
          return Eu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Q();
        var i = H.H;
        H.H = Ca;
        try {
          return Tu(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", Q(), qe().memoizedState;
      },
      useState: function() {
        x = "useState", Q();
        var e = H.H;
        H.H = Ca;
        try {
          return Tu(Hl);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Q(), Fh(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Q(), Ct();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Q(), Un(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Q(), qe().memoizedState;
      },
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Q(), qe().memoizedState;
      }
    }, mo.useMemoCache = tl, mo.useHostTransitionStatus = pc, mo.useFormState = function(e) {
      return x = "useFormState", Q(), wo(), Jo(e);
    }, mo.useActionState = function(e) {
      return x = "useActionState", Q(), Jo(e);
    }, mo.useOptimistic = function(e, t) {
      return x = "useOptimistic", Q(), xe(e, t);
    }, $s = {
      readContext: function(e) {
        return at(e);
      },
      use: Su,
      useCallback: function(e, t) {
        return x = "useCallback", Q(), Bn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Q(), at(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", Q(), jt(2048, Al, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Q(), ko(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", Q(), jt(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Q(), jt(4, $l, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Q();
        var a = H.H;
        H.H = vo;
        try {
          return Eu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Q();
        var i = H.H;
        H.H = vo;
        try {
          return Cl(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", Q(), qe().memoizedState;
      },
      useState: function() {
        x = "useState", Q();
        var e = H.H;
        H.H = vo;
        try {
          return Cl(Hl);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Q(), Gr(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Q(), Wo();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Q(), Un(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Q(), qe().memoizedState;
      },
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Q(), qe().memoizedState;
      }
    }, $s.useMemoCache = tl, $s.useHostTransitionStatus = pc, $s.useFormState = function(e) {
      return x = "useFormState", Q(), wo(), yc(e);
    }, $s.useActionState = function(e) {
      return x = "useActionState", Q(), yc(e);
    }, $s.useOptimistic = function(e, t) {
      return x = "useOptimistic", Q(), an(e, t);
    }, Za = {
      readContext: function(e) {
        return Dt(), at(e);
      },
      use: function(e) {
        return L(), Su(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", L(), Ae(), Yr(e, t);
      },
      useContext: function(e) {
        return x = "useContext", L(), Ae(), at(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", L(), Ae(), yi(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", L(), Ae(), Rf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", L(), Ae(), hi(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", L(), Ae(), Ef(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", L(), Ae();
        var a = H.H;
        H.H = Za;
        try {
          return Nr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", L(), Ae();
        var i = H.H;
        H.H = Za;
        try {
          return si(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", L(), Ae(), vc(e);
      },
      useState: function(e) {
        x = "useState", L(), Ae();
        var t = H.H;
        H.H = Za;
        try {
          return gl(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", L(), Ae();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", L(), Ae(), zf(e, t);
      },
      useTransition: function() {
        return x = "useTransition", L(), Ae(), un();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", L(), Ae(), la(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", L(), Ae(), Ph();
      },
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Ae(), ey();
      },
      useMemoCache: function(e) {
        return L(), tl(e);
      }
    }, Za.useHostTransitionStatus = pc, Za.useFormState = function(e, t) {
      return x = "useFormState", L(), Ae(), xn(e, t);
    }, Za.useActionState = function(e, t) {
      return x = "useActionState", L(), Ae(), xn(e, t);
    }, Za.useOptimistic = function(e) {
      return x = "useOptimistic", L(), Ae(), _t(e);
    }, Ca = {
      readContext: function(e) {
        return Dt(), at(e);
      },
      use: function(e) {
        return L(), Su(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", L(), Q(), Bn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", L(), Q(), at(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", L(), Q(), jt(2048, Al, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", L(), Q(), ko(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", L(), Q(), jt(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", L(), Q(), jt(4, $l, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", L(), Q();
        var a = H.H;
        H.H = Ca;
        try {
          return Eu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", L(), Q();
        var i = H.H;
        H.H = Ca;
        try {
          return Tu(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", L(), Q(), qe().memoizedState;
      },
      useState: function() {
        x = "useState", L(), Q();
        var e = H.H;
        H.H = Ca;
        try {
          return Tu(Hl);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", L(), Q();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", L(), Q(), Fh(e, t);
      },
      useTransition: function() {
        return x = "useTransition", L(), Q(), Ct();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", L(), Q(), Un(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", L(), Q(), qe().memoizedState;
      },
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Q(), qe().memoizedState;
      },
      useMemoCache: function(e) {
        return L(), tl(e);
      }
    }, Ca.useHostTransitionStatus = pc, Ca.useFormState = function(e) {
      return x = "useFormState", L(), Q(), Jo(e);
    }, Ca.useActionState = function(e) {
      return x = "useActionState", L(), Q(), Jo(e);
    }, Ca.useOptimistic = function(e, t) {
      return x = "useOptimistic", L(), Q(), xe(e, t);
    }, vo = {
      readContext: function(e) {
        return Dt(), at(e);
      },
      use: function(e) {
        return L(), Su(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", L(), Q(), Bn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", L(), Q(), at(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", L(), Q(), jt(2048, Al, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", L(), Q(), ko(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", L(), Q(), jt(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", L(), Q(), jt(4, $l, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", L(), Q();
        var a = H.H;
        H.H = Ca;
        try {
          return Eu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", L(), Q();
        var i = H.H;
        H.H = Ca;
        try {
          return Cl(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", L(), Q(), qe().memoizedState;
      },
      useState: function() {
        x = "useState", L(), Q();
        var e = H.H;
        H.H = Ca;
        try {
          return Cl(Hl);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", L(), Q();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", L(), Q(), Gr(e, t);
      },
      useTransition: function() {
        return x = "useTransition", L(), Q(), Wo();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", L(), Q(), Un(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", L(), Q(), qe().memoizedState;
      },
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Q(), qe().memoizedState;
      },
      useMemoCache: function(e) {
        return L(), tl(e);
      }
    }, vo.useHostTransitionStatus = pc, vo.useFormState = function(e) {
      return x = "useFormState", L(), Q(), yc(e);
    }, vo.useActionState = function(e) {
      return x = "useActionState", L(), Q(), yc(e);
    }, vo.useOptimistic = function(e, t) {
      return x = "useOptimistic", L(), Q(), an(e, t);
    };
    var Wg = {}, Fg = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Pg = /* @__PURE__ */ new Set(), e1 = /* @__PURE__ */ new Set(), t1 = /* @__PURE__ */ new Set(), l1 = /* @__PURE__ */ new Set(), a1 = /* @__PURE__ */ new Set(), n1 = /* @__PURE__ */ new Set(), u1 = /* @__PURE__ */ new Set(), i1 = /* @__PURE__ */ new Set();
    Object.freeze(Wg);
    var Up = {
      isMounted: function(e) {
        var t = Yl;
        if (t !== null && za && t.tag === 1) {
          var a = t.stateNode;
          a._warnedAboutRefsInRender || console.error(
            "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
            le(t) || "A component"
          ), a._warnedAboutRefsInRender = !0;
        }
        return (e = e._reactInternals) ? It(e) === e : !1;
      },
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = wl(e), f = Uu(i);
        f.payload = t, a != null && (Vr(a), f.callback = a), t = Hu(e, f, i), t !== null && (ke(t, e, i), us(t, e, i)), se(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = wl(e), f = Uu(i);
        f.tag = v1, f.payload = t, a != null && (Vr(a), f.callback = a), t = Hu(e, f, i), t !== null && (ke(t, e, i), us(t, e, i)), se(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = wl(e), i = Uu(a);
        i.tag = p1, t != null && (Vr(t), i.callback = t), t = Hu(e, i, a), t !== null && (ke(t, e, a), us(t, e, a)), J !== null && typeof J.markForceUpdateScheduled == "function" && J.markForceUpdateScheduled(e, a);
      }
    }, yv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, ch = null, Hp = null, c1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Vl = !1, f1 = {}, o1 = {}, s1 = {}, r1 = {}, fh = !1, d1 = {}, Cp = {}, xp = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    }, h1 = !1, Bp = ue(null), qp = ue(null), y1 = {}, mv = null, oh = null, sh = !1, m1 = 0, v1 = 1, p1 = 2, Yp = 3, po = !1, g1 = !1, Np = null, Gp = !1, b1 = null;
    b1 = /* @__PURE__ */ new Set();
    var Fc = !1, Bt = !1, Vp = !1, S1 = typeof WeakSet == "function" ? WeakSet : Set, Xl = null, rh = null, dh = null, T1 = !1, ol = null, vn = !1, Fu = null, xm = 8192, E1 = !1;
    try {
      var A1 = Object.preventExtensions({});
    } catch {
      E1 = !0;
    }
    var Fb = {
      getCacheForType: function(e) {
        var t = at(Rl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Yl;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Bm = Symbol.for;
      Bm("selector.component"), Bm("selector.has_pseudo_class"), Bm("selector.role"), Bm("selector.test_id"), Bm("selector.text");
    }
    var Ib = [], Pb = typeof WeakMap == "function" ? WeakMap : Map, pn = 0, xa = 2, Ic = 4, Pc = 0, qm = 1, hh = 2, Xp = 3, Ws = 4, R1 = 5, vv = 6, gt = pn, it = null, Oe = null, Me = 0, Ka = 0, Ym = 1, Fs = 2, Nm = 3, z1 = 4, _p = 5, yh = 6, Gm = 7, jp = 8, ct = Ka, gn = null, ef = !1, mh = !1, Qp = !1, Ji = 0, qt = Pc, go = 0, bo = 0, wp = 0, bn = 0, Is = 0, Vm = null, Iu = null, pv = !1, Lp = 0, D1 = 300, gv = 1 / 0, O1 = 500, Xm = null, So = null, bv = !1, Ps = null, _m = 0, Zp = 0, Kp = null, eS = 50, jm = 0, Jp = null, kp = !1, Sv = !1, tS = 50, er = 0, Qm = null, vh = !1, M1 = 0, lS = 1, aS = 2, Tv = null, U1 = !1, H1 = /* @__PURE__ */ new Set(), nS = {}, Ev = null, ph = null, $p = !1, Wp = !1, Av = !1, Fp = !1, tr = 0, Ip = {};
    (function() {
      for (var e = 0; e < zg.length; e++) {
        var t = zg[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), da(a, "on" + t);
      }
      da(Sg, "onAnimationEnd"), da(Tg, "onAnimationIteration"), da(Eg, "onAnimationStart"), da("dblclick", "onDoubleClick"), da("focusin", "onFocus"), da("focusout", "onBlur"), da(Xb, "onTransitionRun"), da(_b, "onTransitionStart"), da(jb, "onTransitionCancel"), da(Ag, "onTransitionEnd");
    })(), Rn("onMouseEnter", ["mouseout", "mouseover"]), Rn("onMouseLeave", ["mouseout", "mouseover"]), Rn("onPointerEnter", ["pointerout", "pointerover"]), Rn("onPointerLeave", ["pointerout", "pointerover"]), du(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), du(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), du("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), du(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), du(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), du(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var wm = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), Pp = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wm)
    ), Rv = "_reactListening" + Math.random().toString(36).slice(2), C1 = !1, x1 = !1, zv = !1, B1 = !1, Dv = !1, Ov = !1, q1 = !1, Mv = {}, uS = /\r\n?/g, iS = /\u0000|\uFFFD/g, lr = "http://www.w3.org/1999/xlink", eg = "http://www.w3.org/XML/1998/namespace", cS = "javascript:throw new Error('React form unexpectedly submitted.')", fS = "suppressHydrationWarning", Uv = "$", Hv = "/$", ar = "$?", nr = "$!", tg = "F!", Y1 = "F", oS = "style", tf = 0, gh = 1, Cv = 2, lg = null, ag = null, N1 = { dialog: !0, webview: !0 }, ng = null, G1 = typeof setTimeout == "function" ? setTimeout : void 0, sS = typeof clearTimeout == "function" ? clearTimeout : void 0, ug = -1, V1 = typeof Promise == "function" ? Promise : void 0, rS = typeof queueMicrotask == "function" ? queueMicrotask : typeof V1 < "u" ? function(e) {
      return V1.resolve(null).then(e).catch(Ce);
    } : G1, ur = 0, Lm = 1, X1 = 2, _1 = 3, fu = 4, ou = /* @__PURE__ */ new Map(), j1 = /* @__PURE__ */ new Set(), lf = Pe.d;
    Pe.d = {
      f: function() {
        var e = lf.f(), t = pa();
        return e || t;
      },
      r: function(e) {
        var t = Fa(e);
        t !== null && t.tag === 5 && t.type === "form" ? Au(t) : lf.r(e);
      },
      D: function(e) {
        lf.D(e), $f("dns-prefetch", e, null);
      },
      C: function(e, t) {
        lf.C(e, t), $f("preconnect", e, t);
      },
      L: function(e, t, a) {
        lf.L(e, t, a);
        var i = bh;
        if (i && e && t) {
          var f = 'link[rel="preload"][as="' + Ya(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (f += '[imagesrcset="' + Ya(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (f += '[imagesizes="' + Ya(
            a.imageSizes
          ) + '"]')) : f += '[href="' + Ya(e) + '"]';
          var o = f;
          switch (t) {
            case "style":
              o = Nc(e);
              break;
            case "script":
              o = Gc(e);
          }
          ou.has(o) || (e = me(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), ou.set(o, e), i.querySelector(f) !== null || t === "style" && i.querySelector(
            Zt(o)
          ) || t === "script" && i.querySelector(Rs(o)) || (t = i.createElement("link"), pt(t, "link", e), Gt(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        lf.m(e, t);
        var a = bh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", f = 'link[rel="modulepreload"][as="' + Ya(i) + '"][href="' + Ya(e) + '"]', o = f;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              o = Gc(e);
          }
          if (!ou.has(o) && (e = me({ rel: "modulepreload", href: e }, t), ou.set(o, e), a.querySelector(f) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Rs(o)))
                  return;
            }
            i = a.createElement("link"), pt(i, "link", e), Gt(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        lf.X(e, t);
        var a = bh;
        if (a && e) {
          var i = Wi(a).hoistableScripts, f = Gc(e), o = i.get(f);
          o || (o = a.querySelector(
            Rs(f)
          ), o || (e = me({ src: e, async: !0 }, t), (t = ou.get(f)) && Mi(e, t), o = a.createElement("script"), Gt(o), pt(o, "link", e), a.head.appendChild(o)), o = {
            type: "script",
            instance: o,
            count: 1,
            state: null
          }, i.set(f, o));
        }
      },
      S: function(e, t, a) {
        lf.S(e, t, a);
        var i = bh;
        if (i && e) {
          var f = Wi(i).hoistableStyles, o = Nc(e);
          t = t || "default";
          var d = f.get(o);
          if (!d) {
            var h = { loading: ur, preload: null };
            if (d = i.querySelector(
              Zt(o)
            ))
              h.loading = Lm | fu;
            else {
              e = me(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = ou.get(o)) && zs(e, a);
              var m = d = i.createElement("link");
              Gt(m), pt(m, "link", e), m._p = new Promise(function(p, O) {
                m.onload = p, m.onerror = O;
              }), m.addEventListener("load", function() {
                h.loading |= Lm;
              }), m.addEventListener("error", function() {
                h.loading |= X1;
              }), h.loading |= fu, Vc(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, f.set(o, d);
          }
        }
      },
      M: function(e, t) {
        lf.M(e, t);
        var a = bh;
        if (a && e) {
          var i = Wi(a).hoistableScripts, f = Gc(e), o = i.get(f);
          o || (o = a.querySelector(
            Rs(f)
          ), o || (e = me({ src: e, async: !0, type: "module" }, t), (t = ou.get(f)) && Mi(e, t), o = a.createElement("script"), Gt(o), pt(o, "link", e), a.head.appendChild(o)), o = {
            type: "script",
            instance: o,
            count: 1,
            state: null
          }, i.set(f, o));
        }
      }
    };
    var bh = typeof document > "u" ? null : document, xv = null, Zm = null, ig = null, Bv = null, ir = lp, Km = {
      $$typeof: Ra,
      Provider: null,
      Consumer: null,
      _currentValue: ir,
      _currentValue2: ir,
      _threadCount: 0
    }, Q1 = "%c%s%c ", w1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", L1 = "", qv = " ", Z1 = Function.prototype.bind, K1 = !1, J1 = null, k1 = null, $1 = null, W1 = null, F1 = null, I1 = null, P1 = null, eb = null, tb = null;
    J1 = function(e, t, a, i) {
      t = j(e, t), t !== null && (a = yt(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = me({}, e.memoizedProps), a = vl(e, 2), a !== null && ke(a, e, 2));
    }, k1 = function(e, t, a) {
      t = j(e, t), t !== null && (a = We(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = me({}, e.memoizedProps), a = vl(e, 2), a !== null && ke(a, e, 2));
    }, $1 = function(e, t, a, i) {
      t = j(e, t), t !== null && (a = $e(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = me({}, e.memoizedProps), a = vl(e, 2), a !== null && ke(a, e, 2));
    }, W1 = function(e, t, a) {
      e.pendingProps = yt(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = vl(e, 2), t !== null && ke(t, e, 2);
    }, F1 = function(e, t) {
      e.pendingProps = We(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = vl(e, 2), t !== null && ke(t, e, 2);
    }, I1 = function(e, t, a) {
      e.pendingProps = $e(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = vl(e, 2), t !== null && ke(t, e, 2);
    }, P1 = function(e) {
      var t = vl(e, 2);
      t !== null && ke(t, e, 2);
    }, eb = function(e) {
      St = e;
    }, tb = function(e) {
      Yt = e;
    };
    var Yv = !0, Nv = null, cg = !1, To = null, Eo = null, Ao = null, Jm = /* @__PURE__ */ new Map(), km = /* @__PURE__ */ new Map(), Ro = [], dS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Gv = null;
    if (eo.prototype.render = Fy.prototype.render = function(e, t) {
      var a = this._internalRoot;
      if (a === null) throw Error("Cannot update an unmounted root.");
      typeof t == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Wl(t) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof t < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), t = a.current;
      var i = wl(t);
      Zy(
        t,
        i,
        e,
        a,
        null,
        null
      );
    }, eo.prototype.unmount = Fy.prototype.unmount = function(e) {
      if (typeof e == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (gt & (xa | Ic)) !== pn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), w0(
          null,
          e,
          null,
          null
        ), pa(), t[Gi] = null;
      }
    }, eo.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = zo();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < Ro.length && t !== 0 && t < Ro[a].priority; a++) ;
        Ro.splice(a, 0, e), a === 0 && Hi(e);
      }
    }, function() {
      var e = Py.version;
      if (e !== "19.0.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.0.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Pe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = w(t), e = e !== null ? ne(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        findFiberByHostInstance: An,
        reconcilerVersion: "19.0.0"
      };
      return e.overrideHookState = J1, e.overrideHookStateDeletePath = k1, e.overrideHookStateRenamePath = $1, e.overrideProps = W1, e.overridePropsDeletePath = F1, e.overridePropsRenamePath = I1, e.scheduleUpdate = P1, e.setErrorHandler = eb, e.setSuspenseHandler = tb, e.scheduleRefresh = tt, e.scheduleRoot = $t, e.setRefreshHandler = Ot, e.getCurrentFiber = Ky, e.getLaneLabelMap = Iv, e.injectProfilingHooks = ki, Pu(e);
    }() && ca && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var lb = window.location.protocol;
      /^(https?|file):$/.test(lb) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (lb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Im.createRoot = function(e, t) {
      if (!Wl(e))
        throw Error("Target container is not a DOM element.");
      Iy(e);
      var a = !1, i = "", f = Io, o = ny, d = Ou, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Ci && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (f = t.onUncaughtError), t.onCaughtError !== void 0 && (o = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = wy(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        f,
        o,
        d,
        h,
        null
      ), e[Gi] = t.current, vd(
        e.nodeType === 8 ? e.parentNode : e
      ), new Fy(t);
    }, Im.hydrateRoot = function(e, t, a) {
      if (!Wl(e))
        throw Error("Target container is not a DOM element.");
      Iy(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, f = "", o = Io, d = ny, h = Ou, m = null, p = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (f = a.identifierPrefix), a.onUncaughtError !== void 0 && (o = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (m = a.unstable_transitionCallbacks), a.formState !== void 0 && (p = a.formState)), t = wy(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        f,
        o,
        d,
        h,
        m,
        p
      ), t.context = Ly(null), a = t.current, i = wl(a), f = Uu(i), f.callback = null, Hu(a, f, i), t.current.lanes = i, Tt(t, i), rn(t), e[Gi] = t.current, vd(e), new eo(t);
    }, Im.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Im;
}
var rb;
function ES() {
  if (rb) return Xv.exports;
  rb = 1;
  function j() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (yt) {
        console.error(yt);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (j(), Xv.exports = SS()) : Xv.exports = TS(), Xv.exports;
}
var AS = ES();
const RS = /* @__PURE__ */ yS(AS), zS = ({ label: j, className: yt }) => /* @__PURE__ */ hb.jsx("button", { className: yt, children: j });
class DS extends HTMLElement {
  connectedCallback() {
    const yt = this.getAttribute("label") || "Submit", $e = this.getAttribute("class") || "btn-success";
    RS.createRoot(this).render(/* @__PURE__ */ hb.jsx(zS, { label: yt, className: $e }));
  }
}
customElements.define("Bsdk-Button", DS);
