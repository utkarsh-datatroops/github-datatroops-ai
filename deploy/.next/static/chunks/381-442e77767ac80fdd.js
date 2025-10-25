"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [381],
  {
    63541: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("arrow-up", [
        ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
        ["path", { d: "M12 19V5", key: "x0mq9r" }],
      ]);
    },
    92940: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("circle-check-big", [
        ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
        ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
      ]);
    },
    88011: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("quote", [
        [
          "path",
          {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0",
          },
        ],
        [
          "path",
          {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd",
          },
        ],
      ]);
    },
    37830: function (e, t) {
      var r = Symbol.for("react.element"),
        n =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        o = Object.assign,
        a = {};
      function i(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = a),
          (this.updater = r || n);
      }
      function u() {}
      function c(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = a),
          (this.updater = r || n);
      }
      (i.prototype.isReactComponent = {}),
        (i.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (i.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (u.prototype = i.prototype);
      var l = (c.prototype = new u());
      (l.constructor = c), o(l, i.prototype), (l.isPureReactComponent = !0);
      var f = Object.prototype.hasOwnProperty,
        s = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, n) {
        var o,
          a = {},
          i = null,
          u = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (u = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            f.call(t, o) && !s.hasOwnProperty(o) && (a[o] = t[o]);
        var c = arguments.length - 2;
        if (1 === c) a.children = n;
        else if (1 < c) {
          for (var l = Array(c), p = 0; p < c; p++) l[p] = arguments[p + 2];
          a.children = l;
        }
        if (e && e.defaultProps)
          for (o in (c = e.defaultProps)) void 0 === a[o] && (a[o] = c[o]);
        return { $$typeof: r, type: e, key: i, ref: u, props: a, _owner: null };
      };
    },
    4410: function (e, t, r) {
      e.exports = r(37830);
    },
    46246: function (e, t, r) {
      var n = r(2265),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = n.useState,
        i = n.useEffect,
        u = n.useLayoutEffect,
        c = n.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var f =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = a({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                f = n[1];
              return (
                u(
                  function () {
                    (o.value = r), (o.getSnapshot = t), l(o) && f({ inst: o });
                  },
                  [e, r, t],
                ),
                i(
                  function () {
                    return (
                      l(o) && f({ inst: o }),
                      e(function () {
                        l(o) && f({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                c(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : f;
    },
    10554: function (e, t, r) {
      e.exports = r(46246);
    },
    88358: function (e, t, r) {
      r.d(t, {
        NY: function () {
          return P;
        },
        Ee: function () {
          return E;
        },
        fC: function () {
          return j;
        },
      });
      var n = r(2265),
        o = r(98324),
        a = r(75137),
        i = r(1336);
      r(54887);
      var u = r(71538),
        c = r(57437),
        l = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (0, u.Z8)(`Primitive.${t}`),
            o = n.forwardRef((e, n) => {
              let { asChild: o, ...a } = e,
                i = o ? r : t;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, c.jsx)(i, { ...a, ref: n })
              );
            });
          return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
        }, {}),
        f = r(10554);
      function s() {
        return () => {};
      }
      var p = "Avatar",
        [d, y] = (0, o.b)(p),
        [v, m] = d(p),
        b = n.forwardRef((e, t) => {
          let { __scopeAvatar: r, ...o } = e,
            [a, i] = n.useState("idle");
          return (0, c.jsx)(v, {
            scope: r,
            imageLoadingStatus: a,
            onImageLoadingStatusChange: i,
            children: (0, c.jsx)(l.span, { ...o, ref: t }),
          });
        });
      b.displayName = p;
      var h = "AvatarImage",
        w = n.forwardRef((e, t) => {
          let {
              __scopeAvatar: r,
              src: o,
              onLoadingStatusChange: u = () => {},
              ...p
            } = e,
            d = m(h, r),
            y = (function (e, t) {
              let { referrerPolicy: r, crossOrigin: o } = t,
                a = (0, f.useSyncExternalStore)(
                  s,
                  () => !0,
                  () => !1,
                ),
                u = n.useRef(null),
                c = a
                  ? (u.current || (u.current = new window.Image()), u.current)
                  : null,
                [l, p] = n.useState(() => O(c, e));
              return (
                (0, i.b)(() => {
                  p(O(c, e));
                }, [c, e]),
                (0, i.b)(() => {
                  let e = (e) => () => {
                    p(e);
                  };
                  if (!c) return;
                  let t = e("loaded"),
                    n = e("error");
                  return (
                    c.addEventListener("load", t),
                    c.addEventListener("error", n),
                    r && (c.referrerPolicy = r),
                    "string" == typeof o && (c.crossOrigin = o),
                    () => {
                      c.removeEventListener("load", t),
                        c.removeEventListener("error", n);
                    }
                  );
                }, [c, o, r]),
                l
              );
            })(o, p),
            v = (0, a.W)((e) => {
              u(e), d.onImageLoadingStatusChange(e);
            });
          return (
            (0, i.b)(() => {
              "idle" !== y && v(y);
            }, [y, v]),
            "loaded" === y ? (0, c.jsx)(l.img, { ...p, ref: t, src: o }) : null
          );
        });
      w.displayName = h;
      var g = "AvatarFallback",
        S = n.forwardRef((e, t) => {
          let { __scopeAvatar: r, delayMs: o, ...a } = e,
            i = m(g, r),
            [u, f] = n.useState(void 0 === o);
          return (
            n.useEffect(() => {
              if (void 0 !== o) {
                let e = window.setTimeout(() => f(!0), o);
                return () => window.clearTimeout(e);
              }
            }, [o]),
            u && "loaded" !== i.imageLoadingStatus
              ? (0, c.jsx)(l.span, { ...a, ref: t })
              : null
          );
        });
      function O(e, t) {
        return e
          ? t
            ? (e.src !== t && (e.src = t),
              e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
            : "error"
          : "idle";
      }
      S.displayName = g;
      var j = b,
        E = w,
        P = S;
    },
    91810: function (e, t, r) {
      r.d(t, {
        w_: function () {
          return f;
        },
      });
      var n = r(2265),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = n.createContext && n.createContext(o),
        i = ["attr", "size", "title"];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                var n, o;
                (n = t),
                  (o = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function f(e) {
        return (t) =>
          n.createElement(
            s,
            u({ attr: l({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, l({ key: r }, t.attr), e(t.child)),
                )
              );
            })(e.child),
          );
      }
      function s(e) {
        var t = (t) => {
          var r,
            { attr: o, size: a, title: c } = e,
            f = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]);
              }
              return o;
            })(e, i),
            s = a || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              u(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                f,
                {
                  className: r,
                  style: l(l({ color: e.color || t.color }, t.style), e.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              c && n.createElement("title", null, c),
              e.children,
            )
          );
        };
        return void 0 !== a
          ? n.createElement(a.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
  },
]);
