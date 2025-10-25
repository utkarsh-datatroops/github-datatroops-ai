"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [506],
  {
    78030: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(2265);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
            r ? r.toUpperCase() : t.toLowerCase(),
          ),
        a = (e) => {
          let t = i(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        l = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        },
        c = (e) => {
          for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
              return !0;
        };
      var u = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let s = (0, n.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: o = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: a,
            className: s = "",
            children: f,
            iconNode: h,
            ...p
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...u,
              width: o,
              height: o,
              stroke: r,
              strokeWidth: a ? (24 * Number(i)) / Number(o) : i,
              className: l("lucide", s),
              ...(!f && !c(p) && { "aria-hidden": "true" }),
              ...p,
            },
            [
              ...h.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(f) ? f : [f]),
            ],
          );
        }),
        f = (e, t) => {
          let r = (0, n.forwardRef)((r, i) => {
            let { className: c, ...u } = r;
            return (0, n.createElement)(s, {
              ref: i,
              iconNode: t,
              className: l("lucide-".concat(o(a(e))), "lucide-".concat(e), c),
              ...u,
            });
          });
          return (r.displayName = a(e)), r;
        };
    },
    71976: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    97830: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("chart-column", [
        ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
        ["path", { d: "M18 17V9", key: "2bz60n" }],
        ["path", { d: "M13 17V5", key: "1frdt8" }],
        ["path", { d: "M8 17v-3", key: "17ska0" }],
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
    5353: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("cpu", [
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M17 20v2", key: "1rnc9c" }],
        ["path", { d: "M17 2v2", key: "11trls" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M2 17h2", key: "7oei6x" }],
        ["path", { d: "M2 7h2", key: "asdhe0" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "M20 17h2", key: "1fpfkl" }],
        ["path", { d: "M20 7h2", key: "1o8tra" }],
        ["path", { d: "M7 20v2", key: "4gnj0m" }],
        ["path", { d: "M7 2v2", key: "1i4yhu" }],
        [
          "rect",
          { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
        ],
        [
          "rect",
          { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
        ],
      ]);
    },
    4436: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    },
    47390: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("message-square", [
        [
          "path",
          {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz",
          },
        ],
      ]);
    },
    98094: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("play", [
        ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
      ]);
    },
    20500: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("shield", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
      ]);
    },
    29338: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("star", [
        [
          "path",
          {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s",
          },
        ],
      ]);
    },
    55430: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(78030).Z)("zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]);
    },
    16463: function (e, t, r) {
      var n = r(71169);
      r.o(n, "useParams") &&
        r.d(t, {
          useParams: function () {
            return n.useParams;
          },
        }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          });
    },
    34446: function (e, t, r) {
      r.d(t, {
        M: function () {
          return v;
        },
      });
      var n = r(57437),
        o = r(2265),
        i = r(67797),
        a = r(30458),
        l = r(29791);
      class c extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(e) {
        let { children: t, isPresent: r } = e,
          i = (0, o.useId)(),
          a = (0, o.useRef)(null),
          u = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: s } = (0, o.useContext)(l._);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: n, left: o } = u.current;
            if (r || !a.current || !e || !t) return;
            a.current.dataset.motionPopId = i;
            let l = document.createElement("style");
            return (
              s && (l.nonce = s),
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(o, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [r]),
          (0, n.jsx)(c, {
            isPresent: r,
            childRef: a,
            sizeRef: u,
            children: o.cloneElement(t, { ref: a }),
          })
        );
      }
      let s = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: l,
            onExitComplete: c,
            custom: s,
            presenceAffectsLayout: h,
            mode: p,
          } = e,
          d = (0, a.h)(f),
          y = (0, o.useId)(),
          m = (0, o.useMemo)(
            () => ({
              id: y,
              initial: r,
              isPresent: l,
              custom: s,
              onExitComplete: (e) => {
                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                c && c();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            h ? [Math.random()] : [l],
          );
        return (
          (0, o.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [l]),
          o.useEffect(() => {
            l || d.size || !c || c();
          }, [l]),
          "popLayout" === p &&
            (t = (0, n.jsx)(u, { isPresent: l, children: t })),
          (0, n.jsx)(i.O.Provider, { value: m, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var h = r(5050),
        p = r(19047);
      let d = (e) => e.key || "";
      function y(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var m = r(9033);
      let v = (e) => {
        let {
          children: t,
          exitBeforeEnter: r,
          custom: i,
          initial: l = !0,
          onExitComplete: c,
          presenceAffectsLayout: u = !0,
          mode: f = "sync",
        } = e;
        (0, p.k)(!r, "Replace exitBeforeEnter with mode='wait'");
        let v = (0, o.useMemo)(() => y(t), [t]),
          g = v.map(d),
          k = (0, o.useRef)(!0),
          b = (0, o.useRef)(v),
          w = (0, a.h)(() => new Map()),
          [O, x] = (0, o.useState)(v),
          [j, M] = (0, o.useState)(v);
        (0, m.L)(() => {
          (k.current = !1), (b.current = v);
          for (let e = 0; e < j.length; e++) {
            let t = d(j[e]);
            g.includes(t) ? w.delete(t) : !0 !== w.get(t) && w.set(t, !1);
          }
        }, [j, g.length, g.join("-")]);
        let E = [];
        if (v !== O) {
          let e = [...v];
          for (let t = 0; t < j.length; t++) {
            let r = j[t],
              n = d(r);
            g.includes(n) || (e.splice(t, 0, r), E.push(r));
          }
          "wait" === f && E.length && (e = E), M(y(e)), x(v);
          return;
        }
        let { forceRender: P } = (0, o.useContext)(h.p);
        return (0, n.jsx)(n.Fragment, {
          children: j.map((e) => {
            let t = d(e),
              r = v === j || g.includes(t);
            return (0, n.jsx)(
              s,
              {
                isPresent: r,
                initial: (!k.current || !!l) && void 0,
                custom: r ? void 0 : i,
                presenceAffectsLayout: u,
                mode: f,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!w.has(t)) return;
                      w.set(t, !0);
                      let e = !0;
                      w.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == P || P(), M(b.current), c && c());
                    },
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
    91810: function (e, t, r) {
      r.d(t, {
        w_: function () {
          return s;
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
        i = n.createContext && n.createContext(o),
        a = ["attr", "size", "title"];
      function l() {
        return (l = Object.assign
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
      function u(e) {
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
      function s(e) {
        return (t) =>
          n.createElement(
            f,
            l({ attr: u({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, u({ key: r }, t.attr), e(t.child)),
                )
              );
            })(e.child),
          );
      }
      function f(e) {
        var t = (t) => {
          var r,
            { attr: o, size: i, title: c } = e,
            s = (function (e, t) {
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
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]);
              }
              return o;
            })(e, a),
            f = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                s,
                {
                  className: r,
                  style: u(u({ color: e.color || t.color }, t.style), e.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              c && n.createElement("title", null, c),
              e.children,
            )
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
  },
]);
