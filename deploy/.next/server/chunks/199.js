"use strict";
(exports.id = 199),
  (exports.ids = [199]),
  (exports.modules = {
    2881: (e, t, r) => {
      r.d(t, { Z: () => c });
      var n = r(7577);
      let l = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        o = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
            r ? r.toUpperCase() : t.toLowerCase(),
          ),
        i = (e) => {
          let t = o(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        u = (...e) =>
          e
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim(),
        s = (e) => {
          for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
              return !0;
        };
      var a = {
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
      let d = (0, n.forwardRef)(
          (
            {
              color: e = "currentColor",
              size: t = 24,
              strokeWidth: r = 2,
              absoluteStrokeWidth: l,
              className: o = "",
              children: i,
              iconNode: d,
              ...c
            },
            f,
          ) =>
            (0, n.createElement)(
              "svg",
              {
                ref: f,
                ...a,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: l ? (24 * Number(r)) / Number(t) : r,
                className: u("lucide", o),
                ...(!i && !s(c) && { "aria-hidden": "true" }),
                ...c,
              },
              [
                ...d.map(([e, t]) => (0, n.createElement)(e, t)),
                ...(Array.isArray(i) ? i : [i]),
              ],
            ),
        ),
        c = (e, t) => {
          let r = (0, n.forwardRef)(({ className: r, ...o }, s) =>
            (0, n.createElement)(d, {
              ref: s,
              iconNode: t,
              className: u(`lucide-${l(i(e))}`, `lucide-${e}`, r),
              ...o,
            }),
          );
          return (r.displayName = i(e)), r;
        };
    },
    3265: (e, t, r) => {
      r.d(t, { default: () => l.a });
      var n = r(3353),
        l = r.n(n);
    },
    3353: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(1174);
      r(326), r(7577);
      let l = n._(r(7028));
      function o(e, t) {
        var r;
        let n = {
          loading: (e) => {
            let { error: t, isLoading: r, pastDelay: n } = e;
            return null;
          },
        };
        "function" == typeof e && (n.loader = e);
        let o = { ...n, ...t };
        return (0, l.default)({
          ...o,
          modules: null == (r = o.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    933: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(4129);
      function l(e) {
        let { reason: t, children: r } = e;
        throw new n.BailoutToCSRError(t);
      }
    },
    7028: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(326),
        l = r(7577),
        o = r(933),
        i = r(6618);
      function u(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let s = {
          loader: () => Promise.resolve(u(() => null)),
          loading: null,
          ssr: !0,
        },
        a = function (e) {
          let t = { ...s, ...e },
            r = (0, l.lazy)(() => t.loader().then(u)),
            a = t.loading;
          function d(e) {
            let u = a
                ? (0, n.jsx)(a, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              s = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(i.PreloadCss, { moduleIds: t.modules }),
                      (0, n.jsx)(r, { ...e }),
                    ],
                  })
                : (0, n.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(l.Suspense, { fallback: u, children: s });
          }
          return (d.displayName = "LoadableComponent"), d;
        };
    },
    6618: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(326),
        l = r(4580);
      function o(e) {
        let { moduleIds: t } = e,
          r = (0, l.getExpectedRequestStore)("next/dynamic css"),
          o = [];
        if (r.reactLoadableManifest && t) {
          let e = r.reactLoadableManifest;
          for (let r of t) {
            if (!e[r]) continue;
            let t = e[r].files.filter((e) => e.endsWith(".css"));
            o.push(...t);
          }
        }
        return 0 === o.length
          ? null
          : (0, n.jsx)(n.Fragment, {
              children: o.map((e) =>
                (0, n.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: r.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e,
                ),
              ),
            });
      }
    },
    8051: (e, t, r) => {
      r.d(t, { F: () => o, e: () => i });
      var n = r(7577);
      function l(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function o(...e) {
        return (t) => {
          let r = !1,
            n = e.map((e) => {
              let n = l(e, t);
              return r || "function" != typeof n || (r = !0), n;
            });
          if (r)
            return () => {
              for (let t = 0; t < n.length; t++) {
                let r = n[t];
                "function" == typeof r ? r() : l(e[t], null);
              }
            };
        };
      }
      function i(...e) {
        return n.useCallback(o(...e), e);
      }
    },
    3095: (e, t, r) => {
      r.d(t, { b: () => o });
      var n = r(7577),
        l = r(326);
      function o(e, t = []) {
        let r = [],
          o = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let l = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: l } }),
                [r, l],
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let i = n.createContext(o),
                u = r.length;
              r = [...r, o];
              let s = (t) => {
                let { scope: r, children: o, ...s } = t,
                  a = r?.[e]?.[u] || i,
                  d = n.useMemo(() => s, Object.values(s));
                return (0, l.jsx)(a.Provider, { value: d, children: o });
              };
              return (
                (s.displayName = t + "Provider"),
                [
                  s,
                  function (r, l) {
                    let s = l?.[e]?.[u] || i,
                      a = n.useContext(s);
                    if (a) return a;
                    if (void 0 !== o) return o;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let l = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let l = r(e)[`__scope${n}`];
                    return { ...t, ...l };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: l }),
                    [l],
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(o, ...t),
          ]
        );
      }
    },
    4214: (e, t, r) => {
      r.d(t, { Z8: () => i, g7: () => u });
      var n = r(7577),
        l = r(8051),
        o = r(326);
      function i(e) {
        let t = (function (e) {
            let t = n.forwardRef((e, t) => {
              let r, o;
              let { children: i, ...u } = e,
                s = n.isValidElement(i)
                  ? (r = Object.getOwnPropertyDescriptor(
                      i.props,
                      "ref",
                    )?.get) &&
                    "isReactWarning" in r &&
                    r.isReactWarning
                    ? i.ref
                    : (r = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                        "isReactWarning" in r &&
                        r.isReactWarning
                      ? i.props.ref
                      : i.props.ref || i.ref
                  : void 0,
                a = (0, l.e)(s, t);
              if (n.isValidElement(i)) {
                let e = (function (e, t) {
                  let r = { ...t };
                  for (let n in t) {
                    let l = e[n],
                      o = t[n];
                    /^on[A-Z]/.test(n)
                      ? l && o
                        ? (r[n] = (...e) => {
                            let t = o(...e);
                            return l(...e), t;
                          })
                        : l && (r[n] = l)
                      : "style" === n
                        ? (r[n] = { ...l, ...o })
                        : "className" === n &&
                          (r[n] = [l, o].filter(Boolean).join(" "));
                  }
                  return { ...e, ...r };
                })(u, i.props);
                return (
                  i.type !== n.Fragment && (e.ref = a), n.cloneElement(i, e)
                );
              }
              return n.Children.count(i) > 1 ? n.Children.only(null) : null;
            });
            return (t.displayName = `${e}.SlotClone`), t;
          })(e),
          r = n.forwardRef((e, r) => {
            let { children: l, ...i } = e,
              u = n.Children.toArray(l),
              s = u.find(a);
            if (s) {
              let e = s.props.children,
                l = u.map((t) =>
                  t !== s
                    ? t
                    : n.Children.count(e) > 1
                      ? n.Children.only(null)
                      : n.isValidElement(e)
                        ? e.props.children
                        : null,
                );
              return (0, o.jsx)(t, {
                ...i,
                ref: r,
                children: n.isValidElement(e)
                  ? n.cloneElement(e, void 0, l)
                  : null,
              });
            }
            return (0, o.jsx)(t, { ...i, ref: r, children: l });
          });
        return (r.displayName = `${e}.Slot`), r;
      }
      var u = i("Slot"),
        s = Symbol("radix.slottable");
      function a(e) {
        return (
          n.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === s
        );
      }
    },
    5049: (e, t, r) => {
      r.d(t, { W: () => l });
      var n = r(7577);
      function l(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
    },
    5819: (e, t, r) => {
      r.d(t, { b: () => l });
      var n = r(7577),
        l = globalThis?.document ? n.useLayoutEffect : () => {};
    },
    8129: (e, t, r) => {
      r.d(t, { M: () => y });
      var n = r(326),
        l = r(7577),
        o = r(295),
        i = r(4749),
        u = r(3965);
      class s extends l.Component {
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
      function a({ children: e, isPresent: t }) {
        let r = (0, l.useId)(),
          o = (0, l.useRef)(null),
          i = (0, l.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: a } = (0, l.useContext)(u._);
        return (
          (0, l.useInsertionEffect)(() => {
            let { width: e, height: n, top: l, left: u } = i.current;
            if (t || !o.current || !e || !n) return;
            o.current.dataset.motionPopId = r;
            let s = document.createElement("style");
            return (
              a && (s.nonce = a),
              document.head.appendChild(s),
              s.sheet &&
                s.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
              () => {
                document.head.removeChild(s);
              }
            );
          }, [t]),
          (0, n.jsx)(s, {
            isPresent: t,
            childRef: o,
            sizeRef: i,
            children: l.cloneElement(e, { ref: o }),
          })
        );
      }
      let d = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: u,
        custom: s,
        presenceAffectsLayout: d,
        mode: f,
      }) => {
        let p = (0, i.h)(c),
          m = (0, l.useId)(),
          h = (0, l.useMemo)(
            () => ({
              id: m,
              initial: t,
              isPresent: r,
              custom: s,
              onExitComplete: (e) => {
                for (let t of (p.set(e, !0), p.values())) if (!t) return;
                u && u();
              },
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            d ? [Math.random()] : [r],
          );
        return (
          (0, l.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [r]),
          l.useEffect(() => {
            r || p.size || !u || u();
          }, [r]),
          "popLayout" === f &&
            (e = (0, n.jsx)(a, { isPresent: r, children: e })),
          (0, n.jsx)(o.O.Provider, { value: h, children: e })
        );
      };
      function c() {
        return new Map();
      }
      var f = r(339),
        p = r(4673);
      let m = (e) => e.key || "";
      function h(e) {
        let t = [];
        return (
          l.Children.forEach(e, (e) => {
            (0, l.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var g = r(2482);
      let y = ({
        children: e,
        exitBeforeEnter: t,
        custom: r,
        initial: o = !0,
        onExitComplete: u,
        presenceAffectsLayout: s = !0,
        mode: a = "sync",
      }) => {
        (0, p.k)(!t, "Replace exitBeforeEnter with mode='wait'");
        let c = (0, l.useMemo)(() => h(e), [e]),
          y = c.map(m),
          v = (0, l.useRef)(!0),
          x = (0, l.useRef)(c),
          b = (0, i.h)(() => new Map()),
          [j, w] = (0, l.useState)(c),
          [C, E] = (0, l.useState)(c);
        (0, g.L)(() => {
          (v.current = !1), (x.current = c);
          for (let e = 0; e < C.length; e++) {
            let t = m(C[e]);
            y.includes(t) ? b.delete(t) : !0 !== b.get(t) && b.set(t, !1);
          }
        }, [C, y.length, y.join("-")]);
        let _ = [];
        if (c !== j) {
          let e = [...c];
          for (let t = 0; t < C.length; t++) {
            let r = C[t],
              n = m(r);
            y.includes(n) || (e.splice(t, 0, r), _.push(r));
          }
          "wait" === a && _.length && (e = _), E(h(e)), w(c);
          return;
        }
        let { forceRender: P } = (0, l.useContext)(f.p);
        return (0, n.jsx)(n.Fragment, {
          children: C.map((e) => {
            let t = m(e),
              l = c === C || y.includes(t);
            return (0, n.jsx)(
              d,
              {
                isPresent: l,
                initial: (!v.current || !!o) && void 0,
                custom: l ? void 0 : r,
                presenceAffectsLayout: s,
                mode: a,
                onExitComplete: l
                  ? void 0
                  : () => {
                      if (!b.has(t)) return;
                      b.set(t, !0);
                      let e = !0;
                      b.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == P || P(), E(x.current), u && u());
                    },
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
    9138: (e, t, r) => {
      r.d(t, { I: () => l });
      var n = r(4673);
      function l(e, t, r) {
        var l;
        if ("string" == typeof e) {
          let o = document;
          t &&
            ((0, n.k)(!!t.current, "Scope provided, but no element detected."),
            (o = t.current)),
            r
              ? ((null !== (l = r[e]) && void 0 !== l) ||
                  (r[e] = o.querySelectorAll(e)),
                (e = r[e]))
              : (e = o.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    8326: (e, t, r) => {
      r.d(t, { Y: () => i });
      var n = r(7577),
        l = r(9138);
      let o = { some: 0, all: 1 };
      function i(e, { root: t, margin: r, amount: i, once: u = !1 } = {}) {
        let [s, a] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            if (!e.current || (u && s)) return;
            let n = { root: (t && t.current) || void 0, margin: r, amount: i };
            return (function (
              e,
              t,
              { root: r, margin: n, amount: i = "some" } = {},
            ) {
              let u = (0, l.I)(e),
                s = new WeakMap(),
                a = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let r = s.get(e.target);
                      if (!!r !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let r = t(e);
                          "function" == typeof r
                            ? s.set(e.target, r)
                            : a.unobserve(e.target);
                        } else r && (r(e), s.delete(e.target));
                      }
                    });
                  },
                  {
                    root: r,
                    rootMargin: n,
                    threshold: "number" == typeof i ? i : o[i],
                  },
                );
              return u.forEach((e) => a.observe(e)), () => a.disconnect();
            })(e.current, () => (a(!0), u ? void 0 : () => a(!1)), n);
          }, [t, e, r, u, i]),
          s
        );
      }
    },
  });
