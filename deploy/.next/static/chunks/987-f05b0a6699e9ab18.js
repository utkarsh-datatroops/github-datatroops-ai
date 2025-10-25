"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [987],
  {
    23576: function (e, t, n) {
      let r, o;
      n.d(t, {
        J: function () {
          return z;
        },
      });
      var i = n(77451);
      let l = new WeakMap();
      function f({ target: e, contentRect: t, borderBoxSize: n }) {
        var r;
        null === (r = l.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0];
                    return { width: e, height: n };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, n);
              },
            });
          });
      }
      function s(e) {
        e.forEach(f);
      }
      let c = new Set();
      var u = n(33217),
        a = n(83476);
      let d = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        g = () => ({ time: 0, x: d(), y: d() }),
        h = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function p(e, t, n, r) {
        let o = n[t],
          { length: i, position: l } = h[t],
          f = o.current,
          s = n.time;
        (o.current = e[`scroll${l}`]),
          (o.scrollLength = e[`scroll${i}`] - e[`client${i}`]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = (0, u.Y)(0, o.scrollLength, o.current));
        let c = r - s;
        o.velocity = c > 50 ? 0 : (0, a.R)(o.current - f, c);
      }
      let v = [
          [0, 0],
          [1, 1],
        ],
        m = { start: 0, center: 0.5, end: 1 };
      function y(e, t, n = 0) {
        let r = 0;
        if ((e in m && (e = m[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
              ? (e = t / 100)
              : e.endsWith("vw")
                ? (r = (t / 100) * document.documentElement.clientWidth)
                : e.endsWith("vh")
                  ? (r = (t / 100) * document.documentElement.clientHeight)
                  : (e = t);
        }
        return "number" == typeof e && (r = t * e), n + r;
      }
      let w = [0, 0];
      var E = n(42548),
        W = n(92007);
      let x = { x: 0, y: 0 };
      var L = n(86219);
      let B = new WeakMap(),
        S = new WeakMap(),
        b = new WeakMap(),
        H = (e) => (e === document.documentElement ? window : e);
      function z(e, { container: t = document.documentElement, ...n } = {}) {
        let f = b.get(t);
        f || ((f = new Set()), b.set(t, f));
        let u = (function (e, t, n, r = {}) {
          return {
            measure: () =>
              (function (e, t = e, n) {
                if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
                  let r = t;
                  for (; r && r !== e; )
                    (n.x.targetOffset += r.offsetLeft),
                      (n.y.targetOffset += r.offsetTop),
                      (r = r.offsetParent);
                }
                (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                  (n.y.targetLength =
                    t === e ? t.scrollHeight : t.clientHeight),
                  (n.x.containerLength = e.clientWidth),
                  (n.y.containerLength = e.clientHeight);
              })(e, r.target, n),
            update: (t) => {
              p(e, "x", n, t),
                p(e, "y", n, t),
                (n.time = t),
                (r.offset || r.target) &&
                  (function (e, t, n) {
                    let { offset: r = v } = n,
                      { target: o = e, axis: i = "y" } = n,
                      l = "y" === i ? "height" : "width",
                      f =
                        o !== e
                          ? (function (e, t) {
                              let n = { x: 0, y: 0 },
                                r = e;
                              for (; r && r !== t; )
                                if (r instanceof HTMLElement)
                                  (n.x += r.offsetLeft),
                                    (n.y += r.offsetTop),
                                    (r = r.offsetParent);
                                else if ("svg" === r.tagName) {
                                  let e = r.getBoundingClientRect(),
                                    t = (r =
                                      r.parentElement).getBoundingClientRect();
                                  (n.x += e.left - t.left),
                                    (n.y += e.top - t.top);
                                } else if (r instanceof SVGGraphicsElement) {
                                  let { x: e, y: t } = r.getBBox();
                                  (n.x += e), (n.y += t);
                                  let o = null,
                                    i = r.parentNode;
                                  for (; !o; )
                                    "svg" === i.tagName && (o = i),
                                      (i = r.parentNode);
                                  r = o;
                                } else break;
                              return n;
                            })(o, e)
                          : x,
                      s =
                        o === e
                          ? { width: e.scrollWidth, height: e.scrollHeight }
                          : "getBBox" in o && "svg" !== o.tagName
                            ? o.getBBox()
                            : { width: o.clientWidth, height: o.clientHeight },
                      c = { width: e.clientWidth, height: e.clientHeight };
                    t[i].offset.length = 0;
                    let u = !t[i].interpolate,
                      a = r.length;
                    for (let e = 0; e < a; e++) {
                      let n = (function (e, t, n, r) {
                        let o = Array.isArray(e) ? e : w,
                          i = 0;
                        return (
                          "number" == typeof e
                            ? (o = [e, e])
                            : "string" == typeof e &&
                              (o = (e = e.trim()).includes(" ")
                                ? e.split(" ")
                                : [e, m[e] ? e : "0"]),
                          y(o[0], n, r) - y(o[1], t)
                        );
                      })(r[e], c[l], s[l], f[i]);
                      u || n === t[i].interpolatorOffsets[e] || (u = !0),
                        (t[i].offset[e] = n);
                    }
                    u &&
                      ((t[i].interpolate = (0, E.s)(t[i].offset, (0, W.Y)(r))),
                      (t[i].interpolatorOffsets = [...t[i].offset])),
                      (t[i].progress = t[i].interpolate(t[i].current));
                  })(e, n, r);
            },
            notify: () => t(n),
          };
        })(t, e, g(), n);
        if ((f.add(u), !B.has(t))) {
          let e = () => {
              for (let e of f) e.measure();
            },
            n = () => {
              for (let e of f) e.update(L.frameData.timestamp);
            },
            u = () => {
              for (let e of f) e.notify();
            },
            a = () => {
              L.Wi.read(e, !1, !0),
                L.Wi.read(n, !1, !0),
                L.Wi.update(u, !1, !0);
            };
          B.set(t, a);
          let d = H(t);
          window.addEventListener("resize", a, { passive: !0 }),
            t !== document.documentElement &&
              S.set(
                t,
                "function" == typeof t
                  ? (c.add(t),
                    o ||
                      ((o = () => {
                        let e = {
                            width: window.innerWidth,
                            height: window.innerHeight,
                          },
                          t = { target: window, size: e, contentSize: e };
                        c.forEach((e) => e(t));
                      }),
                      window.addEventListener("resize", o)),
                    () => {
                      c.delete(t), !c.size && o && (o = void 0);
                    })
                  : (function (e, t) {
                      r ||
                        "undefined" == typeof ResizeObserver ||
                        (r = new ResizeObserver(s));
                      let n = (0, i.I)(e);
                      return (
                        n.forEach((e) => {
                          let n = l.get(e);
                          n || ((n = new Set()), l.set(e, n)),
                            n.add(t),
                            null == r || r.observe(e);
                        }),
                        () => {
                          n.forEach((e) => {
                            let n = l.get(e);
                            null == n || n.delete(t),
                              (null == n ? void 0 : n.size) ||
                                null == r ||
                                r.unobserve(e);
                          });
                        }
                      );
                    })(t, a),
              ),
            d.addEventListener("scroll", a, { passive: !0 });
        }
        let a = B.get(t);
        return (
          L.Wi.read(a, !1, !0),
          () => {
            var e;
            (0, L.Pn)(a);
            let n = b.get(t);
            if (!n || (n.delete(u), n.size)) return;
            let r = B.get(t);
            B.delete(t),
              r &&
                (H(t).removeEventListener("scroll", r),
                null === (e = S.get(t)) || void 0 === e || e(),
                window.removeEventListener("resize", r));
          }
        );
      }
    },
    77451: function (e, t, n) {
      n.d(t, {
        I: function () {
          return o;
        },
      });
      var r = n(19047);
      function o(e, t, n) {
        var o;
        if ("string" == typeof e) {
          let i = document;
          t &&
            ((0, r.k)(!!t.current, "Scope provided, but no element detected."),
            (i = t.current)),
            n
              ? ((null !== (o = n[e]) && void 0 !== o) ||
                  (n[e] = i.querySelectorAll(e)),
                (e = n[e]))
              : (e = i.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    88654: function (e, t, n) {
      n.d(t, {
        v: function () {
          return l;
        },
      });
      var r = n(42548);
      let o = (e) => e && "object" == typeof e && e.mix,
        i = (e) => (o(e) ? e.mix : void 0);
      function l(...e) {
        let t = !Array.isArray(e[0]),
          n = t ? 0 : -1,
          o = e[0 + n],
          f = e[1 + n],
          s = e[2 + n],
          c = e[3 + n],
          u = (0, r.s)(f, s, { mixer: i(s[0]), ...c });
        return t ? u(o) : u;
      }
    },
    28565: function (e, t, n) {
      n.d(t, {
        N: function () {
          return l;
        },
      });
      var r = n(45282),
        o = n(9033),
        i = n(86219);
      function l(e, t) {
        let n = (0, r.c)(t()),
          l = () => n.set(t());
        return (
          l(),
          (0, o.L)(() => {
            let t = () => i.Wi.preRender(l, !1, !0),
              n = e.map((e) => e.on("change", t));
            return () => {
              n.forEach((e) => e()), (0, i.Pn)(l);
            };
          }),
          n
        );
      }
    },
    45282: function (e, t, n) {
      n.d(t, {
        c: function () {
          return f;
        },
      });
      var r = n(2265),
        o = n(20804),
        i = n(29791),
        l = n(30458);
      function f(e) {
        let t = (0, l.h)(() => (0, o.BX)(e)),
          { isStatic: n } = (0, r.useContext)(i._);
        if (n) {
          let [, n] = (0, r.useState)(e);
          (0, r.useEffect)(() => t.on("change", n), []);
        }
        return t;
      }
    },
    71994: function (e, t, n) {
      n.d(t, {
        v: function () {
          return a;
        },
      });
      var r = n(20804),
        o = n(30458),
        i = n(2265),
        l = n(19047),
        f = n(23576),
        s = n(9033);
      function c(e, t) {
        (0, l.K)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`,
        );
      }
      let u = () => ({
        scrollX: (0, r.BX)(0),
        scrollY: (0, r.BX)(0),
        scrollXProgress: (0, r.BX)(0),
        scrollYProgress: (0, r.BX)(0),
      });
      function a({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
        let l = (0, o.h)(u);
        return (
          (n ? s.L : i.useEffect)(
            () => (
              c("target", t),
              c("container", e),
              (0, f.J)(
                ({ x: e, y: t }) => {
                  l.scrollX.set(e.current),
                    l.scrollXProgress.set(e.progress),
                    l.scrollY.set(t.current),
                    l.scrollYProgress.set(t.progress);
                },
                {
                  ...r,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                },
              )
            ),
            [e, t, JSON.stringify(r.offset)],
          ),
          l
        );
      }
    },
    32679: function (e, t, n) {
      n.d(t, {
        H: function () {
          return f;
        },
      });
      var r = n(88654),
        o = n(28565),
        i = n(30458),
        l = n(20804);
      function f(e, t, n, i) {
        if ("function" == typeof e)
          return (function (e) {
            (l.S1.current = []), e();
            let t = (0, o.N)(l.S1.current, e);
            return (l.S1.current = void 0), t;
          })(e);
        let f = "function" == typeof t ? t : (0, r.v)(t, n, i);
        return Array.isArray(e) ? s(e, f) : s([e], ([e]) => f(e));
      }
      function s(e, t) {
        let n = (0, i.h)(() => []);
        return (0, o.N)(e, () => {
          n.length = 0;
          let r = e.length;
          for (let t = 0; t < r; t++) n[t] = e[t].get();
          return t(n);
        });
      }
    },
  },
]);
