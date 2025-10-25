(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    37394: function (e, t, a) {
      "use strict";
      var s,
        r,
        i,
        n = a(4410);
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var s in a)
                  ({}).hasOwnProperty.call(a, s) && (e[s] = a[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      t.Z = function (e) {
        return n.createElement(
          "svg",
          o(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlSpace: "preserve",
              id: "Layer_1",
              x: 0,
              y: 0,
              viewBox: "0 0 2834.6 2834.6",
            },
            e,
          ),
          s || (s = n.createElement("style", null, ".st0{fill:#ffba08}")),
          r ||
            (r = n.createElement("path", {
              d: "M1320.4 686.1c-52.6 10.5-105.3 10.5-217.5 70.5C989 817.3 943.1 896 983.1 984.9c41.4 91.9 122.4 110.2 248 55.9 163.6-70.7 342.3-41.2 464.7 76.6 142.8 137.5 165 361.4 53.2 535.8-104.9 163.6-325 219.3-528.5 133.9-115.2-48.4-189.9-31.7-233.4 52.1-44 84.8-8 174.2 97.7 229.3 143.8 75 298.1 94.8 455.4 61.9 71.4-14.9 108.6 4.8 140.2 66.7 48.8 95.7 103 188.8 157.6 281.4 57.6 97.8 144.2 126.5 226.4 78.8 78.4-45.6 98.9-130.3 47.8-227.1-53.5-101.3-109.8-201.4-170.8-298.3-33.1-52.5-30.9-86.2 10.4-136.2 247-299.7 246.4-660.1-1.9-959.7-42.6-51.4-38.9-85.3-7.3-136.4 62.1-100.3 120.4-203.2 175-307.8 47.2-90.5 24.8-167.7-54.5-216.5-73.8-45.4-158.9-23.5-213.9 62-43.1 67-82.3 137-116.7 208.8-80.5 192.6-148.9 171.5-227.9 155.7-5-3.6-110.5-31.5-184.2-15.7",
              className: "st0",
            })),
          i ||
            (i = n.createElement("path", {
              d: "M540.8 1571.7c-93.7 0-187.5 2.1-281.1-.6-99-2.8-165-62.9-168.7-147.8-3.8-89.6 63.1-160.8 165-162.6 190.8-3.4 381.8-3.3 572.6.4 98 1.9 161.4 67 163 153.4 1.7 91.8-62.7 151.6-169.7 157.4-3.5.2-6.9.1-10.4.1H540.8zM2743.5 1429.4c-5.9 102.4-100.5 186.7-203.7 181.6-105.2-5.2-187.6-95.7-183.7-201.7 4.1-110.8 98.1-194.6 209-186.2 104.1 7.8 184.5 100.8 178.4 206.3M1602.4 1414.2c.8 103-87.4 193.9-190.4 196.4-110.6 2.6-199.1-85.2-198.4-196.8.6-105.9 86.9-190.5 193.9-190.2 105.9.3 194.1 86.5 194.9 190.6M834.7 2601.8c-101-1.1-191.3-91.8-192.3-193-.9-103.9 84.9-190.2 191-192.1 110.9-2 200.7 87.3 197.2 196-3.2 103.6-92.9 190.2-195.9 189.1M1030.3 426.7c-.8 105.8-84.8 188.5-192.6 189.6-110.2 1.1-196.9-87.7-193.5-198.3 3.3-105.3 90.5-187.2 197-185 105.2 2.1 189.9 88.9 189.1 193.7",
              className: "st0",
            })),
        );
      };
    },
    98658: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 47027));
    },
    92940: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, a(78030).Z)("circle-check-big", [
        ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
        ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
      ]);
    },
    37830: function (e, t) {
      "use strict";
      var a = Symbol.for("react.element"),
        s =
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
        r = Object.assign,
        i = {};
      function n(e, t, a) {
        (this.props = e),
          (this.context = t),
          (this.refs = i),
          (this.updater = a || s);
      }
      function o() {}
      function l(e, t, a) {
        (this.props = e),
          (this.context = t),
          (this.refs = i),
          (this.updater = a || s);
      }
      (n.prototype.isReactComponent = {}),
        (n.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (n.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (o.prototype = n.prototype);
      var c = (l.prototype = new o());
      (c.constructor = l), r(c, n.prototype), (c.isPureReactComponent = !0);
      var d = Object.prototype.hasOwnProperty,
        A = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, s) {
        var r,
          i = {},
          n = null,
          o = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (o = t.ref),
          void 0 !== t.key && (n = "" + t.key),
          t))
            d.call(t, r) && !A.hasOwnProperty(r) && (i[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l) i.children = s;
        else if (1 < l) {
          for (var c = Array(l), m = 0; m < l; m++) c[m] = arguments[m + 2];
          i.children = c;
        }
        if (e && e.defaultProps)
          for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
        return { $$typeof: a, type: e, key: n, ref: o, props: i, _owner: null };
      };
    },
    4410: function (e, t, a) {
      "use strict";
      e.exports = a(37830);
    },
    46246: function (e, t, a) {
      "use strict";
      var s = a(2265),
        r =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = s.useState,
        n = s.useEffect,
        o = s.useLayoutEffect,
        l = s.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var a = t();
          return !r(e, a);
        } catch (e) {
          return !0;
        }
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var a = t(),
                s = i({ inst: { value: a, getSnapshot: t } }),
                r = s[0].inst,
                d = s[1];
              return (
                o(
                  function () {
                    (r.value = a), (r.getSnapshot = t), c(r) && d({ inst: r });
                  },
                  [e, a, t],
                ),
                n(
                  function () {
                    return (
                      c(r) && d({ inst: r }),
                      e(function () {
                        c(r) && d({ inst: r });
                      })
                    );
                  },
                  [e],
                ),
                l(a),
                a
              );
            };
      t.useSyncExternalStore =
        void 0 !== s.useSyncExternalStore ? s.useSyncExternalStore : d;
    },
    10554: function (e, t, a) {
      "use strict";
      e.exports = a(46246);
    },
    47027: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return ef;
          },
        });
      var s = a(57437),
        r = a(81180),
        i = a(48059),
        n = a.n(i),
        o = a(2265),
        l = a(12098),
        c = a(96164);
      let d = (e) =>
        (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "feather feather-mouse-pointer text-white size-5",
              children: [
                (0, s.jsx)("path", {
                  d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
                }),
                (0, s.jsx)("path", { d: "M13 13l6 6" }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "absolute top-full left-full",
              children: (0, s.jsx)("div", {
                className: (0, c.m6)(
                  "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none w-20",
                  "red" === e.color && "bg-red-500",
                ),
                children: e.name,
              }),
            }),
          ],
        });
      var A = a(14950);
      let m = () => {
        let e = (0, o.useRef)(null),
          [t, a] = (0, o.useState)(!1),
          [r, i] = (0, o.useState)(0),
          [c, m] = (0, o.useState)({ x: 0, y: 0 }),
          [u, h] = (0, o.useState)(""),
          [p, x] = (0, o.useState)(""),
          [g, f] = (0, o.useState)(!1),
          y = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.toLowerCase());
        (0, o.useEffect)(() => {
          let t = new IntersectionObserver(
            (e) => {
              a(e[0].isIntersecting);
            },
            { threshold: 0.05 },
          );
          e.current && t.observe(e.current);
          let s = () => {
              if (!e.current) return;
              let t = e.current.getBoundingClientRect(),
                a = window.innerHeight,
                s = -t.height;
              i(Math.max(0, Math.min(1, (a - t.top) / (a - s))));
            },
            r = (t) => {
              if (!e.current) return;
              let a = e.current.getBoundingClientRect();
              m({
                x: (t.clientX / window.innerWidth) * 2 - 1,
                y: ((t.clientY - a.top) / a.height) * 2 - 1,
              });
            };
          s();
          let n = setTimeout(s, 100);
          return (
            window.addEventListener("scroll", s, { passive: !0 }),
            window.addEventListener("resize", s, { passive: !0 }),
            window.addEventListener("mousemove", r, { passive: !0 }),
            () => {
              clearTimeout(n),
                t.disconnect(),
                window.removeEventListener("scroll", s),
                window.removeEventListener("resize", s),
                window.removeEventListener("mousemove", r);
            }
          );
        }, []);
        let v = (e, t, a, s, i) => {
          let n = r * Math.PI * 2 + i;
          return { x: e + Math.cos(n) * a, y: t + Math.sin(n) * s };
        };
        (0, o.useEffect)(() => {
          function e() {
            document.documentElement.style.setProperty(
              "--vh",
              "".concat(0.01 * window.innerHeight, "px"),
            );
          }
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let b = async (e) => {
          if ((e.preventDefault(), !y(u))) {
            x("Please enter a valid email address.");
            return;
          }
          try {
            await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: u }),
            }),
              f(!0),
              h(""),
              setTimeout(() => {
                f(!1);
              }, 4e3);
          } catch (e) {
            console.error("Email submission failed:", e),
              x("Something went wrong. Please try again.");
          }
        };
        return (0, s.jsxs)("section", {
          ref: e,
          style: { perspective: "1000px" },
          className:
            n().dynamic([["a4b6d2ff32ac776a", [100 * Math.random() - 50]]]) +
            " py-24 overflow-hidden relative min-h-screen",
          children: [
            (0, s.jsxs)("div", {
              style: {
                background: "\n        radial-gradient(circle at "
                  .concat(50 + 10 * c.x, "% ")
                  .concat(
                    50 + 10 * c.y,
                    "%, \n          var(--color-10002B) 0%, \n        var(--color-240046) 50%,\n        var(--color-3C096C) 100%)\n      ",
                  ),
                transition: "background 0.5s ease-out",
              },
              className:
                n().dynamic([
                  ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                ]) + " absolute inset-0 -z-10",
              children: [
                (0, s.jsx)("div", {
                  className:
                    n().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " absolute inset-0",
                  children: [...Array(100)].map((e, t) => {
                    let a = 2 * Math.random() + 1;
                    return (0, s.jsx)(
                      "div",
                      {
                        style: {
                          width: "".concat(a, "px"),
                          height: "".concat(a, "px"),
                          left: "".concat(100 * Math.random(), "%"),
                          top: "".concat(100 * Math.random(), "%"),
                          opacity: 0.2 * Math.random() + 0.1 * r,
                          filter: "blur(".concat(1 * Math.random(), "px)"),
                          animation: "floatParticle "
                            .concat(
                              50 * Math.random() + 20,
                              "s infinite linear ",
                            )
                            .concat(5 * Math.random(), "s"),
                        },
                        className:
                          n().dynamic([
                            ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                          ]) + " absolute rounded-full bg-white",
                      },
                      t,
                    );
                  }),
                }),
                [void 0, void 0, void 0, void 0, void 0].map((e, t) => {
                  let a = 150 + 40 * t,
                    i = 100 + 30 * t,
                    o = v(50, 50, a / 10, a / 20, (Math.PI / 2.5) * t);
                  return (0, s.jsx)(
                    "div",
                    {
                      style: {
                        width: "".concat(i, "px"),
                        height: "".concat(i, "px"),
                        left: "".concat(o.x, "%"),
                        top: "".concat(o.y, "%"),
                        opacity: 0.07 - 0.01 * t + 0.03 * r,
                        transform: "translateZ("
                          .concat(-(50 * t), "px) scale(")
                          .concat(1 + 0.3 * r, ")"),
                        transition: "all 0.2s ease-out",
                      },
                      className:
                        n().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " " +
                        "absolute rounded-full bg-[var(--color-".concat(
                          t % 2 == 0 ? "7B2CBF" : "9D4EDD",
                          ")] blur-3xl transition-all duration-700",
                        ),
                    },
                    t,
                  );
                }),
                (0, s.jsx)("div", {
                  style: {
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: ""
                      .concat(50 - 20 * r, "px ")
                      .concat(50 - 20 * r, "px"),
                    opacity: 0.1 + 0.05 * r,
                    transform: "perspective(1000px) rotateX("
                      .concat(5 * r, "deg) scale(")
                      .concat(1 + 0.3 * r, ")"),
                    transformOrigin: "center center",
                  },
                  className:
                    n().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " absolute inset-0 transition-all duration-700",
                }),
                (0, s.jsx)("div", {
                  style: { opacity: 0.07 + 0.08 * r },
                  className:
                    n().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " absolute inset-0 opacity-15",
                  children: (0, s.jsxs)("svg", {
                    width: "100%",
                    height: "100%",
                    style: {
                      transform: "scale("
                        .concat(1 + 0.2 * r, ") rotate(")
                        .concat(3 * r, "deg)"),
                    },
                    className:
                      n().dynamic([
                        ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                      ]) + " transition-all duration-1000",
                    children: [
                      (0, s.jsx)("defs", {
                        className: n().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]),
                        children: (0, s.jsxs)("pattern", {
                          id: "circuit",
                          x: "0",
                          y: "0",
                          width: "200",
                          height: "200",
                          patternUnits: "userSpaceOnUse",
                          className: n().dynamic([
                            ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                          ]),
                          children: [
                            (0, s.jsx)("path", {
                              d: "M10 10 H 50 V 50 H 90 V 90 H 130 V 130 H 170 V 170 M 30 10 V 50 H 70 V 90 H 110 V 130 H 150 V 170 M 190 10 V 50 H 150 V 90 H 110 V 130 H 70 V 170 M 10 30 H 50 V 70 H 90 V 110 H 130 V 150 H 170 M 10 170 H 50 V 130 H 90 V 90 H 130 V 50 H 170",
                              stroke: "rgba(180, 180, 255, 0.3)",
                              strokeWidth: "1",
                              fill: "none",
                              className: n().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, s.jsx)("circle", {
                              cx: "10",
                              cy: "10",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: n().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, s.jsx)("circle", {
                              cx: "50",
                              cy: "50",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: n().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, s.jsx)("circle", {
                              cx: "90",
                              cy: "90",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: n().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, s.jsx)("circle", {
                              cx: "130",
                              cy: "130",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: n().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, s.jsx)("circle", {
                              cx: "170",
                              cy: "170",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: n().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("rect", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        fill: "url(#circuit)",
                        className: n().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                n().dynamic([
                  ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                ]) + " container relative z-10 lg:mt-16 md:mt-16",
              children: [
                (0, s.jsx)("div", {
                  style: {
                    opacity: 0.7 + 0.3 * r,
                    transform: "rotate("
                      .concat(-15 * r, "deg) scale(")
                      .concat(1 + 0.2 * r, ")"),
                    filter: "hue-rotate(".concat(30 * r, "deg)"),
                  },
                  className:
                    n().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) +
                    " absolute left-56 top-96 hidden lg:block pointer-events-none transition-all duration-700",
                  children: (0, s.jsx)(d, { name: "AI-Agent" }),
                }),
                (0, s.jsx)("div", {
                  style: {
                    opacity: 0.7 + 0.3 * r,
                    transform: "rotate("
                      .concat(15 * r, "deg) scale(")
                      .concat(1 + 0.2 * r, ")"),
                    filter: "hue-rotate(".concat(-30 * r, "deg)"),
                  },
                  className:
                    n().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) +
                    " absolute right-80 -top-4 hidden lg:block pointer-events-none transition-all duration-700",
                  children: (0, s.jsx)(d, { name: "AI-Agent", color: "red" }),
                }),
                (0, s.jsxs)("div", {
                  style: {
                    transform:
                      "perspective(1000px) \n                       translateZ("
                        .concat(100 * r, "px) \n                       scale(")
                        .concat(1 - 0.05 * r, ")"),
                    opacity: t ? 1 : 0,
                  },
                  className:
                    n().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " relative transition-all duration-1000",
                  children: [
                    (0, s.jsx)("div", {
                      style: {
                        transform: "translateY(".concat(t ? 0 : 20, "px)"),
                        opacity: t ? 1 : 0,
                        transitionDelay: "100ms",
                      },
                      className:
                        n().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " flex justify-center mb-6 transition-all duration-700",
                      children: (0, s.jsx)("span", {
                        className:
                          n().dynamic([
                            ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                          ]) +
                          " inline-flex py-1 px-3 bg-gradient-to-r from-[var(--color-7B2CBF)] to-[var(--color-9D4EDD)] rounded-full font-semibold text-white shadow-lg shadow-[var(--color-7B2CBF)]/20 hover:scale-105 transition-transform",
                        children: "Automation",
                      }),
                    }),
                    (0, s.jsx)("h1", {
                      style: {
                        transform: "translateY(".concat(t ? 0 : 30, "px)"),
                        opacity: t ? 1 : 0,
                        transitionDelay: "200ms",
                        WebkitBackgroundClip: "text",
                        textShadow:
                          r > 0.3
                            ? "none"
                            : "0 4px 20px rgba(123, 31, 162, 0.2)",
                      },
                      className:
                        n().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 transition-all duration-700",
                      children: "Impactful solutions and AI agents created",
                    }),
                    (0, s.jsx)("p", {
                      style: {
                        transform: "translateY(".concat(t ? 0 : 40, "px)"),
                        opacity: t ? 1 : 0,
                        transitionDelay: "300ms",
                        textShadow: "0 2px 10px rgba(0, 0, 0, ".concat(
                          0.2 + 0.3 * r,
                          ")",
                        ),
                      },
                      className:
                        n().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " text-center text-xl text-white/80 mt-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700",
                      children:
                        "Transform the way you work with our cutting-edge AI Development Services that are designed to streamline operations, automate repetitive tasks, and unlock deep insights for better decision-making.",
                    }),
                    (0, s.jsxs)("form", {
                      style: {
                        transform: "translateY(".concat(t ? 0 : 50, "px)"),
                        opacity: t ? 1 : 0,
                        transitionDelay: "400ms",
                        boxShadow: "0 4px "
                          .concat(12 + 15 * r, "px rgba(139, 92, 246, ")
                          .concat(0.1 + 0.3 * r, ")"),
                        background:
                          "linear-gradient(135deg, var(--color-10002B)/"
                            .concat(0.03 + 0.05 * r, ", var(--color-240046)/")
                            .concat(0.08 + 0.05 * r, ")"),
                      },
                      onSubmit: b,
                      className:
                        n().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " flex border border-white/15 rounded-full p-2 mt-20 max-w-lg mx-auto backdrop-blur-lg bg-white/5 transition-all duration-700 hover:border-white/30",
                      children: [
                        (0, s.jsx)("input", {
                          type: "email",
                          placeholder: "Enter your email",
                          value: u,
                          onChange: (e) => {
                            h(e.target.value), p && x("");
                          },
                          className:
                            n().dynamic([
                              ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                            ]) +
                            " flex-1 bg-transparent px-4 text-white placeholder-white/50 focus:outline-none",
                        }),
                        (0, s.jsx)(l.z, {
                          variant: "tertiary",
                          className:
                            "font-medium border bg-white border-[var(--color-E0AAFF)]/15 h-10 px-6 whitespace-nowrap text-black transition-all duration-300 hover:bg-[var(--color-E0AAFF)]/10 hover:shadow-lg hover:shadow-[var(--color-7B2CBF)]/20 pr-4",
                          style: { borderRadius: "50px" },
                          type: "submit",
                          children: g ? "Submitted" : "Sign Up",
                        }),
                        g &&
                          (0, s.jsx)("p", {
                            className:
                              n().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]) + " text-green-400 text-center mt-2",
                            children: "Thanks! We'll be in touch soon.",
                          }),
                        p &&
                          (0, s.jsx)("p", {
                            className:
                              n().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]) + " text-red-400 text-center mt-2",
                            children: p,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(A.E.div, {
              style: { gap: "0.5rem" },
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.5, duration: 0.5 },
              className:
                " absolute bottom-2 lg:bottom-12 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center mt-10 hidden lg:flex",
              children: [
                (0, s.jsx)("span", {
                  className:
                    n().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " text-sm text-white/70 mb-2 font-medium pt-2",
                  children: "Scroll Down",
                }),
                (0, s.jsx)(A.E.div, {
                  className:
                    "w-6 h-10 rounded-full border-2 border-white/40 flex justify-center p-1",
                  animate: { y: [0, 5, 0] },
                  transition: { repeat: 1 / 0, duration: 1.5 },
                  children: (0, s.jsx)(A.E.div, {
                    className:
                      "w-1.5 h-1.5 bg-[var(--color-9D4EDD)] rounded-full",
                    animate: { y: [0, 6, 0] },
                    transition: { repeat: 1 / 0, duration: 1.5 },
                  }),
                }),
              ],
            }),
            (0, s.jsx)(n(), {
              id: "a4b6d2ff32ac776a",
              dynamic: [100 * Math.random() - 50],
              children:
                "@-webkit-keyframes floatParticle{0%{-webkit-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0);opacity:0}10%{opacity:.5}90%{opacity:.3}100%{-webkit-transform:translatey(-100vh)translatex("
                  .concat(
                    100 * Math.random() - 50,
                    "px);transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);opacity:0}}@-moz-keyframes floatParticle{0%{-moz-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0);opacity:0}10%{opacity:.5}90%{opacity:.3}100%{-moz-transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);opacity:0}}@-o-keyframes floatParticle{0%{-o-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0);opacity:0}10%{opacity:.5}90%{opacity:.3}100%{-o-transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);opacity:0}}@keyframes floatParticle{0%{-webkit-transform:translatey(0)translatex(0);-moz-transform:translatey(0)translatex(0);-o-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0);opacity:0}10%{opacity:.5}90%{opacity:.3}100%{-webkit-transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);-moz-transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);-o-transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);transform:translatey(-100vh)translatex(",
                  )
                  .concat(
                    100 * Math.random() - 50,
                    "px);opacity:0}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1);opacity:.5}50%{-webkit-transform:scale(1.05);transform:scale(1.05);opacity:.7}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1);opacity:.5}50%{-moz-transform:scale(1.05);transform:scale(1.05);opacity:.7}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1);opacity:.5}50%{-o-transform:scale(1.05);transform:scale(1.05);opacity:.7}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:.5}50%{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05);opacity:.7}}",
                  ),
            }),
          ],
        });
      };
      var u = a(66648),
        h = a(6920),
        p = a(45079),
        x = {
          src: "/_next/static/media/blogs.42ef9ce7.avif",
          height: 1647,
          width: 3750,
          blurDataURL:
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAC4AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAgAAAAEAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAADZtZGF0EgAKCBgIftECAgaEMiAXwAAASWAARr6LZhLlTPth2Y/TnW2JJ2mq/QnDrvbitA==",
          blurWidth: 8,
          blurHeight: 4,
        },
        g = {
          src: "/_next/static/media/test-2.4836d32b.avif",
          height: 1152,
          width: 2880,
          blurDataURL:
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAACIAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAgAAAADAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACptZGF0EgAKCBgIfNECAgaEMhQXwAAASWAAAZwWkPSqils6xJJA6A==",
          blurWidth: 8,
          blurHeight: 3,
        },
        f = {
          src: "/_next/static/media/test-3.9357682d.avif",
          height: 1152,
          width: 2880,
          blurDataURL:
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAACsAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAgAAAADAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAADNtZGF0EgAKCBgIfNECAgaEMh0XwAAASXWAa+ZlKdBytvE47jTj/75HtD4CylOk5A==",
          blurWidth: 8,
          blurHeight: 3,
        },
        y = {
          src: "/_next/static/media/test-4.293a411e.jpg",
          height: 394,
          width: 700,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAqwK//8QAGxAAAgEFAAAAAAAAAAAAAAAAAQITABEUIkH/2gAIAQEAAT8AaTLRpLKHGoHRX//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAgEBPwA1v//EABcRAAMBAAAAAAAAAAAAAAAAAAABAjH/2gAIAQMBAT8AeSf/2Q==",
          blurWidth: 8,
          blurHeight: 5,
        },
        v = a(56726);
      let b = (e) => {
        let {
          title: t,
          excerpt: a,
          imageSrc: r,
          category: i,
          categoryColor: n = "bg-purple-100 text-purple-700",
          isHighlighted: o = !1,
        } = e;
        return (0, s.jsxs)(A.E.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: !0 },
          className: (0, c.m6)(
            "rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all",
            o ? "col-span-1 sm:col-span-2 lg:col-span-3" : "col-span-1",
          ),
          children: [
            (0, s.jsx)("div", {
              className: "relative overflow-hidden rounded-t-3xl",
              children: (0, s.jsx)(u.default, {
                src: r,
                alt: t,
                width: o ? 800 : 400,
                height: o ? 400 : 300,
                className:
                  "w-full object-cover transition-transform duration-300 group-hover:scale-105",
                style: { height: o ? "300px" : "220px", maxHeight: "400px" },
                unoptimized: !0,
              }),
            }),
            (0, s.jsxs)("div", {
              className: "p-3 sm:p-4",
              children: [
                i &&
                  (0, s.jsx)("span", {
                    className:
                      "inline-block text-xs font-medium px-2 sm:px-3 py-1 mb-2 rounded-full ".concat(
                        n,
                      ),
                    children: i,
                  }),
                (0, s.jsx)("h2", {
                  className:
                    "font-bold text-gray-100 mb-2 hover:text-blue-600 transition-colors ".concat(
                      o
                        ? "text-xl sm:text-2xl lg:text-3xl"
                        : "text-lg sm:text-xl",
                    ),
                  children: (0, s.jsx)(
                    v.Z,
                    { message: "Coming Soon", children: t },
                    t,
                  ),
                }),
                (0, s.jsx)("p", {
                  className:
                    "text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2",
                  children: a,
                }),
                (0, s.jsx)("div", {
                  className: "flex items-center mt-2 sm:mt-4",
                  children: (0, s.jsx)("div", {
                    children: (0, s.jsx)("span", {
                      className: "block text-xs sm:text-sm font-medium",
                      children: "Coming Soon",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var w = () => {
        let [e, t] = (0, o.useState)(0),
          [a, r] = (0, o.useState)(!1),
          i = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          let e = () => {
            r(window.innerWidth < 640);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        }, []);
        let n = [
            {
              title: "How To Choose The Perfect AI Chatbot For Your Business",
              excerpt:
                "Learn how to select the ideal AI chatbot to enhance your customer service, automate responses, and improve operational efficiency for your business.",
              imageSrc: x,
              category: "AI Solutions",
              categoryColor: "bg-purple-100 text-purple-700",
              isHighlighted: !0,
            },
            {
              title: "AI in Healthcare: Revolutionizing Patient Care",
              excerpt:
                "Explore how AI is revolutionizing healthcare, improving diagnostics, patient care, and operational efficiency across the globe.",
              imageSrc: g,
              category: "Healthcare Innovation",
              categoryColor: "bg-green-100 text-green-700",
            },
            {
              title: "The Role of AI in E-Commerce: Enhancing User Experience",
              excerpt:
                "AI is transforming the e-commerce landscape by delivering personalized shopping experiences, optimizing inventory, and boosting sales. Learn how businesses can thrive using AI.",
              imageSrc: f,
              category: "E-Commerce",
              categoryColor: "bg-pink-100 text-pink-700",
            },
            {
              title: "How Deep Learning Is Changing the Financial Industry",
              excerpt:
                "Discover how deep learning models are reshaping financial services by enabling better fraud detection, risk management, and predictive market insights.",
              imageSrc: y,
              category: "FinTech",
              categoryColor: "bg-blue-100 text-blue-700",
            },
          ],
          l = () => {
            t((e) => (e === n.length - 1 ? 0 : e + 1));
          },
          c = () => {
            t((e) => (0 === e ? n.length - 1 : e - 1));
          },
          d = (e) => {
            t(e);
          };
        return (
          (0, o.useEffect)(() => {
            let e;
            if (!i.current || !a) return;
            let t = (t) => {
                e = t.touches[0].clientX;
              },
              s = (t) => {
                let a = t.changedTouches[0].clientX,
                  s = e - a;
                Math.abs(s) > 50 && (s > 0 ? l() : c());
              },
              r = i.current;
            return (
              r.addEventListener("touchstart", t),
              r.addEventListener("touchend", s),
              () => {
                r.removeEventListener("touchstart", t),
                  r.removeEventListener("touchend", s);
              }
            );
          }, [a, l, c]),
          (0, s.jsxs)("section", {
            className: "py-8 sm:py-12 px-4 ",
            children: [
              (0, s.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, s.jsx)("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: "Our Latest Blogs",
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-4 flex justify-center",
                    children: (0, s.jsx)("div", {
                      className:
                        "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-4 text-gray-300 max-w-3xl mx-auto",
                    children:
                      "At DataTroops.ai, we share valuable insights on AI-driven solutions, the latest in tech innovations, and how AI is shaping industries. Stay updated with our articles.",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "max-w-7xl mx-auto",
                children: a
                  ? (0, s.jsxs)("div", {
                      className: "relative",
                      ref: i,
                      children: [
                        (0, s.jsx)("div", {
                          className: "overflow-hidden",
                          children: (0, s.jsx)("div", {
                            className:
                              "flex transition-transform duration-300 ease-in-out",
                            style: {
                              transform: "translateX(-".concat(100 * e, "%)"),
                            },
                            children: n.map((e) =>
                              (0, s.jsx)(
                                "div",
                                {
                                  className: "w-full flex-shrink-0",
                                  children: (0, s.jsx)(b, { ...e }),
                                },
                                e.title,
                              ),
                            ),
                          }),
                        }),
                        (0, s.jsx)("button", {
                          onClick: c,
                          className:
                            "absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10",
                          "aria-label": "Previous slide",
                          children: (0, s.jsx)(h.G, {
                            icon: p.acZ,
                            className: "h-4 w-4 text-gray-700",
                          }),
                        }),
                        (0, s.jsx)("button", {
                          onClick: l,
                          className:
                            "absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10",
                          "aria-label": "Next slide",
                          children: (0, s.jsx)(h.G, {
                            icon: p.eFW,
                            className: "h-4 w-4 text-gray-700",
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "flex justify-center mt-4 gap-2",
                          children: n.map((t, a) =>
                            (0, s.jsx)(
                              "button",
                              {
                                onClick: () => d(a),
                                className: "w-2 h-2 rounded-full ".concat(
                                  e === a ? "bg-blue-600" : "bg-gray-300",
                                ),
                                "aria-label": "Go to slide ".concat(a + 1),
                              },
                              a,
                            ),
                          ),
                        }),
                      ],
                    })
                  : (0, s.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                      children: n.map((e) => (0, s.jsx)(b, { ...e }, e.title)),
                    }),
              }),
            ],
          })
        );
      };
      let j = {
          build: [
            {
              id: "openai",
              name: "Open AI",
              description:
                "Powerful LLMs like GPT-4 and Claude for versatile chatbot creation",
              features: [
                "Zero-shot learning capabilities",
                "Advanced contextual understanding",
                "Multilingual support",
                "Content classification",
              ],
              useCases: [
                "Customer support",
                "Sales assistance",
                "Technical troubleshooting",
              ],
              pricing: "Starting at $0.01/1K tokens",
              icon: {
                src: "/_next/static/media/openai-logo.050b7adb.png",
                height: 2048,
                width: 2021,
                blurDataURL:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZ0lEQVR42g3CMQqCUAAA0FeHqJs4BjYU1JY111IguEihSx/HNMnmLhBOnlF5D2Y6wSATwVIvcRCclGK+Xs4auZtKzcNKa2unkPqZpgp7G621O7XKVa5x8fYhVjoKksnfAiKZwVNnzgiOXRja1GA4wQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8,
              },
              iconAlt: "OpenAI Logo",
            },
            {
              id: "gemini",
              name: "Gemini",
              description:
                "Google's multimodal AI for advanced chatbot experiences",
              features: [
                "Multimodal capabilities",
                "Advanced reasoning",
                "Knowledge cutoff: April 2023",
                "Image understanding",
              ],
              useCases: [
                "Product recommendations",
                "Visual assistance",
                "Interactive guides",
              ],
              pricing: "Starting at $0.0025/1K tokens",
              icon: {
                src: "/_next/static/media/google-ai-gemini91216.logowik.com.ad084a06.webp",
                height: 650,
                width: 866,
                blurDataURL:
                  "data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAAAwAQCdASoIAAYAAkA4JaQAA3AA/vsBKaHUPpHmQSRahsAA",
                blurWidth: 8,
                blurHeight: 6,
              },
              iconAlt: "Gemini Logo",
            },
            {
              id: "anthropic",
              name: "Anthropic",
              description:
                "Claude models for safe, helpful, and honest AI assistants",
              features: [
                "Constitutional AI approach",
                "Strong safety capabilities",
                "Long context windows",
                "Nuanced understanding",
              ],
              useCases: [
                "Customer service",
                "Content moderation",
                "Complex query handling",
              ],
              pricing: "Starting at $0.008/1K tokens",
              icon: {
                src: "/_next/static/media/anthropic-icon-logo-png_seeklogo-515014.037df681.png",
                height: 320,
                width: 320,
                blurDataURL:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaUlEQVR42mNgYJBgYgADMAtCSMRLOEloSsTDhAQk/ks8ktCW+CohClFYKTFHYpOEi8QKiRqIwFWJXRKXJFZK2EpcA3FDJd5JlEo0SHyV0JW4JRHFIOEj4QNWFy+hLeEo4QfRxCbBCrMaAIMiFd533ML2AAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8,
              },
              iconAlt: "Anthropic Logo",
            },
          ],
          train: [
            {
              id: "dialogflow-cx",
              name: "Dialogflow CX",
              description:
                "Enterprise conversation designer with advanced state handling",
              features: [
                "Sophisticated state tracking",
                "Visual flow builder",
                "Multi-turn conversations",
                "Enterprise integrations",
              ],
              useCases: [
                "Complex customer journeys",
                "Omnichannel experiences",
                "Enterprise support",
              ],
              pricing: "Pay-as-you-go, $0.007 per request",
              icon: {
                src: "/_next/static/media/logos--dialogflow.5cb87adc.svg",
                height: 326,
                width: 256,
                blurWidth: 0,
                blurHeight: 0,
              },
              iconAlt: "Dialogflow CX Logo",
            },
            {
              id: "rasa",
              name: "Rasa",
              description:
                "Open-source framework for custom conversation experiences",
              features: [
                "Open-source core",
                "Full customization",
                "On-premise deployment",
                "NLU training tools",
              ],
              useCases: [
                "Highly customized solutions",
                "Data-sensitive industries",
                "On-premise needs",
              ],
              pricing: "Open-source (free), Enterprise licensing available",
              icon: {
                src: "/_next/static/media/simple-icons--rasa.8f4a6a92.svg",
                height: 24,
                width: 24,
                blurWidth: 0,
                blurHeight: 0,
              },
              iconAlt: "Rasa Logo",
            },
            {
              id: "botpress",
              name: "Botpress",
              description: "Developer-friendly conversational AI platform",
              features: [
                "Visual flow editor",
                "Developer tools",
                "Custom code integration",
                "Natural language understanding",
              ],
              useCases: [
                "Developer-led projects",
                "Complex integrations",
                "Custom business logic",
              ],
              pricing: "Free community edition, Pro from $99/month",
              icon: {
                src: "/_next/static/media/botpress.41bb867e.avif",
                height: 256,
                width: 256,
                blurDataURL:
                  "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGhbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAB8gAAADQAAgAAAAEAAAHJAAAAKQAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAA12lwcnAAAACxaXBjbwAAABRpc3BlAAAAAAAAAAgAAAAIAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAUaXNwZQAAAAAAAAAIAAAACAAAAA5waXhpAAAAAAEIAAAADGF2MUOBABwAAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAeaXBtYQAAAAAAAAACAAEEAQKDBAACBAUGhwgAAABlbWRhdBIACgUYCL9pUDIeF8AAASBABs/q2L5M8NB0cnvG09/964GOJCFepKRWEgAKCBgIv2iBAQNCMiYXwAAASAAAAij/IQMWUslaBdQJ0Q2kgr6uOWmUAkuacBNKornZOA==",
                blurWidth: 8,
                blurHeight: 8,
              },
              iconAlt: "Botpress Logo",
            },
          ],
          deploy: [
            {
              id: "ibm-watson",
              name: "IBM Watson",
              description:
                "Enterprise-grade AI assistant with strong business focus",
              features: [
                "Enterprise security",
                "Industry compliance",
                "Business process integration",
                "Analytics dashboard",
              ],
              useCases: [
                "Enterprise support",
                "Regulated industries",
                "Complex business processes",
              ],
              pricing: "Custom enterprise pricing",
              icon: {
                src: "/_next/static/media/watpress.26ce0f5e.png",
                height: 192,
                width: 192,
                blurDataURL:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAkElEQVR42k2OTQqDMBCFA17BY3iBbgSP0EIbtJsuK4LHSBYmgotk48Kr+g1MxIGPeTO8+TElfMzWxfxQrLmHD7nGcLiQZ7JwQK2TqZLMVONCmsgTA41urcqGlmKEn6C6LbdfsMPqYhrYMIiGHf0UwwIWNgw9f0DatBfE8OZEh7uHv+DR0MHHENezGL8+Arr0T1+xZGYqC/5TAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8,
              },
              iconAlt: "IBM Watson Logo",
            },
            {
              id: "amazon-lex",
              name: "Amazon Lex",
              description:
                "AWS-powered conversational interfaces with deep cloud integration",
              features: [
                "AWS ecosystem integration",
                "Automatic scaling",
                "Speech recognition",
                "Lambda function support",
              ],
              useCases: [
                "Voice assistants",
                "AWS-based applications",
                "Speech interfaces",
              ],
              pricing: "$0.00075 per request",
              icon: {
                src: "/_next/static/media/amazon-lex-hipaa-compliant.536e13a4.jpg",
                height: 300,
                width: 450,
                blurDataURL:
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApYR//8QAHRAAAgIBBQAAAAAAAAAAAAAAAREDBBIABRMUM//aAAgBAQABPwAU5RvxtduXDi8WcEktf//EABkRAAIDAQAAAAAAAAAAAAAAAAECABESQf/aAAgBAgEBPwBiTm+LP//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhJx/9oACAEDAQE/AIpK2n//2Q==",
                blurWidth: 8,
                blurHeight: 5,
              },
              iconAlt: "Amazon Lex Logo",
            },
            {
              id: "microsoft-bot-framework",
              name: "Microsoft Bot Framework",
              description:
                "Complete bot development platform with Azure integration",
              features: [
                "Azure integration",
                "Teams/Office 365 support",
                "Enterprise identity",
                "Multi-channel publishing",
              ],
              useCases: [
                "Microsoft ecosystem",
                "Teams bots",
                "Enterprise collaboration",
              ],
              pricing: "Free tier, Standard from $0.50 per 1,000 messages",
              icon: {
                src: "/_next/static/media/Bot-Framework.f80825a3.png",
                height: 200,
                width: 200,
                blurDataURL:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEUAWbIAWLIAWLEAWLEAWLIAWLIAWLEAWLIAWLIAWLEAWLEAWbIAWLIAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWLEAWbEAWLEAWLIAWLEAWLEAWLEAWLEAWLIAWLEAWbIAWLGYdsDWAAAAJ3RSTlMAAAABAgUGCQoKEBERERITFBYXGBkeHyAiKCosMzM3PFl8hqGip6fu5jauAAAAR0lEQVR42gVACRaAEBD9MylaaBPtoeX+R+whY5ISlIEpOZeIgBiaOkSCee2x28+A/a3U4xmC53GYSKC/3LotZ4dcl9q0VfEDg4kD7XNh5M0AAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8,
              },
              iconAlt: "Microsoft Bot Framework Logo",
            },
            {
              id: "twilio",
              name: "Twilio",
              description: "Communication channels with programmable messaging",
              features: [
                "Omnichannel communication",
                "SMS, WhatsApp, voice support",
                "Developer-friendly APIs",
                "Global reach",
              ],
              useCases: ["SMS bots", "WhatsApp business", "Voice assistants"],
              pricing: "Pay-as-you-go, varies by channel",
              icon: {
                src: "/_next/static/media/devicon--twilio.842c9fd6.svg",
                height: 128,
                width: 128,
                blurWidth: 0,
                blurHeight: 0,
              },
              iconAlt: "Twilio Logo",
            },
          ],
        },
        N = [
          {
            id: "build",
            title: "Build",
            description: "No code chatbot builder",
          },
          {
            id: "train",
            title: "Train",
            description: "Effortless, accurate and instant",
          },
          {
            id: "deploy",
            title: "Deploy",
            description: "Plug-and-play integrations",
          },
        ];
      var E = (e) => {
          var t;
          let { className: a } = e,
            [r, i] = (0, o.useState)("build"),
            [n, l] = (0, o.useState)(null),
            d = (e) => {
              i(e), l(null);
            },
            m = j[r];
          return (0, s.jsx)("section", {
            className: (0, c.m6)("w-full py-10 px-4 md:px-8 lg:px-12", a),
            children: (0, s.jsxs)("div", {
              className: "max-w-6xl mx-auto",
              children: [
                (0, s.jsx)("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100",
                  children:
                    "Everything you need to automate your customer service",
                }),
                (0, s.jsxs)(A.E.div, {
                  className:
                    "border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-sm bg-[var(--color-card)]",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex flex-wrap md:flex-nowrap gap-3 mb-8",
                      children: N.map((e) =>
                        (0, s.jsxs)(
                          A.E.button,
                          {
                            className: (0, c.m6)(
                              "flex-1 rounded-xl p-4 border transition-all duration-300 text-center",
                              r === e.id
                                ? "bg-[var(--color-primary)] text-white border-[var(--color-secondary)] shadow-sm"
                                : "bg-[var(--color-card)] text-[var(--color-text-dark)] border-gray-200 hover:bg-gray-50",
                            ),
                            onClick: () => d(e.id),
                            whileHover: { scale: 1.03 },
                            whileTap: { scale: 0.98 },
                            children: [
                              (0, s.jsx)("h3", {
                                className: "font-bold text-xl mb-1",
                                children: e.title,
                              }),
                              (0, s.jsx)("p", {
                                className: "text-sm opacity-80 hidden sm:block",
                                children: e.description,
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsxs)("h3", {
                          className:
                            "text-xl font-bold mb-6 text-[var(--color-text-dark)]",
                          children: [
                            "Choose Your LLM or NLP for",
                            " ",
                            null === (t = N.find((e) => e.id === r)) ||
                            void 0 === t
                              ? void 0
                              : t.title,
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
                          children: m.map((e) =>
                            (0, s.jsxs)(
                              A.E.div,
                              {
                                className: (0, c.m6)(
                                  "flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all",
                                  (e.id, "border-gray-200"),
                                ),
                                onClick: () => l(e.id),
                                whileHover: { scale: 1.05 },
                                whileTap: { scale: 0.98 },
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-12 h-12 flex items-center justify-center mb-2",
                                    children: (0, s.jsx)(u.default, {
                                      unoptimized: !0,
                                      src: e.icon,
                                      alt: e.iconAlt,
                                      className: "w-full h-full object-contain",
                                    }),
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-center text-sm font-medium text-[var(--color-text-dark)]",
                                    children: e.name,
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        B = a(34446),
        C = a(53833),
        k = () => {
          let [e, t] = (0, o.useState)([]),
            [a, r] = (0, o.useState)(!1),
            i = (0, o.useRef)(null),
            n = (0, o.useRef)(null),
            [l, c] = (0, o.useState)(!1),
            [d, m] = (0, o.useState)(!1),
            [x, g] = (0, o.useState)(null);
          (0, o.useEffect)(() => {
            g(window.innerWidth <= 768);
          }, []);
          let [f, y] = (0, o.useState)(""),
            [b, w] = (0, o.useState)(!1),
            [j, N] = (0, o.useState)({ email: "", phone: "", query: "" }),
            [E, k] = (0, o.useState)(""),
            [I, S] = (0, o.useState)(""),
            M = () =>
              new Date().toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: !0,
              }),
            L = (e) => {
              t((t) => {
                let a = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1;
                return [...t, { ...e, id: a }];
              });
            },
            W = [
              { type: "user", text: "Hi!" },
              {
                type: "bot",
                text: "Hi,\n      I'm an AI assistant. How can I help you today?",
              },
              {
                type: "user",
                text: "I want to book an appointment for myself.",
              },
              {
                type: "bot",
                text: "Sure! What type of doctor do you need? (e.g., General Physician, Dermatologist, etc.)",
              },
              { type: "user", text: "I need a general physician." },
              {
                type: "bot",
                text: "Okay, do you have a preferred doctor or should I show you the available ones?",
              },
              { type: "user", text: "Show me the available ones." },
              {
                type: "bot",
                text: "Here are 3 options:\n      1. Dr. Verma – Tomorrow at 10 AM\n      2. Dr. Patel – Tomorrow at 2 PM\n      3. Dr. Guleria – Friday at 9 AM\n      Which one works for you?",
              },
              { type: "user", text: "Dr. Patel at 2 PM." },
              {
                type: "bot",
                text: "Great! Booking you with Dr. Patel at 2 PM tomorrow. Please confirm.",
              },
              { type: "user", text: "Confirmed." },
              {
                type: "bot",
                text: "Your appointment is booked! You’ll receive a confirmation by SMS and email soon.",
              },
            ],
            F = async () => {
              t([]), m(!0);
              let e = async () => {
                let e = 0;
                for (; e < W.length; ) {
                  let t = W[e];
                  "bot" === t.type &&
                    (r(!0),
                    await new Promise((e) => setTimeout(e, 1500)),
                    r(!1)),
                    L({ type: t.type, text: t.text, time: M() }),
                    await new Promise((e) => setTimeout(e, 1e3)),
                    e++;
                }
              };
              await e(), m(!1);
            };
          (0, o.useEffect)(() => {
            if (!l && n.current) {
              let e = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  t.isIntersecting && c(!0);
                },
                { root: null, rootMargin: "0px", threshold: 0.3 },
              );
              return (
                e.observe(n.current),
                () => {
                  n.current && e.unobserve(n.current);
                }
              );
            }
          }, [l]),
            (0, o.useEffect)(() => {
              l && F();
            }, [l]),
            (0, o.useEffect)(() => {
              i.current && (i.current.scrollTop = i.current.scrollHeight);
            }, [e, a]);
          let D = (e) =>
              e.split("\n").map((t, a) =>
                (0, s.jsxs)(
                  "span",
                  {
                    children: [
                      t,
                      a !== e.split("\n").length - 1 && (0, s.jsx)("br", {}),
                    ],
                  },
                  a,
                ),
              ),
            G = (e) => !e || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.toLowerCase()),
            Q = (e) => {
              if (!e) return !0;
              let t = e.replace(/[\s\-()+]/g, "");
              return /^[0-9]{7,15}$/.test(t);
            },
            R = (e) => {
              N((t) => ({ ...t, email: e })),
                G(e) ? k("") : k("Please enter a valid email address.");
            },
            P = (e) => {
              N((t) => ({ ...t, phone: e })),
                Q(e) ? S("") : S("Please enter a valid phone number.");
            },
            T = () =>
              ("" !== j.email.trim() || "" !== j.phone.trim()) && !E && !I,
            H = () => {
              if (f.trim() && !d && !a && !b && l) {
                N((e) => ({ ...e, query: f })), y(""), w(!0);
                return;
              }
            },
            U = async () => {
              if (!T()) {
                alert("Please fix errors before submitting.");
                return;
              }
              if (!j.query) {
                alert("No query found.");
                return;
              }
              let e = { email: j.email, phone: j.phone, query: j.query };
              try {
                await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                });
                let t = "Here are my details:\nEmail: "
                  .concat(j.email || "N/A", "\nPhone: ")
                  .concat(j.phone || "N/A", "\nQuery: ")
                  .concat(j.query);
                L({ type: "user", text: t, time: M() }),
                  L({
                    type: "bot",
                    text: "Thanks for your details! Our team will reach out to you soon to provide the resolution on your query.",
                    time: M(),
                  }),
                  w(!1),
                  N({ email: "", phone: "", query: "" });
              } catch (e) {
                console.error("Error sending user info:", e),
                  alert(
                    "There was an error submitting your information. Please try again.",
                  );
              }
            };
          return (0, s.jsxs)("section", {
            ref: n,
            className: "w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden",
            children: [
              (0, s.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, s.jsxs)("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: [" ", "DataTroops.ai Healthcare Assistance"],
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-4 flex justify-center",
                    children: (0, s.jsx)("div", {
                      className:
                        "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-4 text-gray-300 max-w-3xl mx-auto",
                    children:
                      "We design and develop AI-powered solutions that automate workflows, uncover insights, and supercharge decision-making. From Generative AI to NLP and Computer Vision, our solutions are tailored to your goals and industry needs.",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8",
                children: [
                  (0, s.jsx)("div", {
                    className: "w-full lg:w-1/2",
                    children: (0, s.jsxs)("div", {
                      className:
                        "max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "bg-[var(--color-7B2CBF)] text-white p-4 flex items-center justify-between",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, s.jsx)(h.G, {
                                  icon: p.A35,
                                  className: "h-4 w-4",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "h-6 w-6 rounded-full bg-white flex items-center justify-center",
                                      children: (0, s.jsx)(u.default, {
                                        unoptimized: !0,
                                        src: C.Z,
                                        alt: "DataTroops Logo",
                                        width: 24,
                                        height: 24,
                                      }),
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "font-medium",
                                      children: "DataTroops.ai Healthcare",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-4",
                              children: [
                                (0, s.jsx)(h.G, {
                                  icon: p.Uwo,
                                  className: "h-4 w-4",
                                }),
                                (0, s.jsx)(h.G, {
                                  icon: p.NBC,
                                  className: "h-4 w-4",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          ref: i,
                          className: "p-4 h-96 overflow-y-auto scroll-smooth",
                          style: { scrollBehavior: "smooth" },
                          children: [
                            l
                              ? (0, s.jsx)(B.M, {
                                  children: e.map((e) =>
                                    (0, s.jsx)(
                                      A.E.div,
                                      {
                                        className: "flex flex-col mb-4",
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: 10 },
                                        transition: { duration: 0.3 },
                                        children:
                                          "user" === e.type
                                            ? (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "flex justify-end mb-1",
                                                    children: (0, s.jsx)(
                                                      "div",
                                                      {
                                                        className:
                                                          "bg-[var(--color-9D4EDD)] text-white rounded-3xl py-3 px-4 max-w-xs",
                                                        children: (0, s.jsx)(
                                                          "p",
                                                          {
                                                            children: D(e.text),
                                                          },
                                                        ),
                                                      },
                                                    ),
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "text-xs text-gray-500 text-right",
                                                    children: e.time,
                                                  }),
                                                ],
                                              })
                                            : (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                  (0, s.jsxs)("div", {
                                                    className: "flex mb-1",
                                                    children: [
                                                      (0, s.jsx)("div", {
                                                        className: "mr-2",
                                                        children: (0, s.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "bg-white h-8 w-8 rounded-full flex items-center justify-center",
                                                            children: (0,
                                                            s.jsx)(u.default, {
                                                              unoptimized: !0,
                                                              src: C.Z,
                                                              alt: "DataTroops Logo",
                                                              width: 24,
                                                              height: 24,
                                                            }),
                                                          },
                                                        ),
                                                      }),
                                                      (0, s.jsx)("div", {
                                                        className:
                                                          "bg-gray-100 rounded-3xl py-3 px-4 max-w-xs",
                                                        children: (0, s.jsx)(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-gray-800",
                                                            children: D(e.text),
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "text-xs text-gray-500 ml-10",
                                                    children: e.time,
                                                  }),
                                                ],
                                              }),
                                      },
                                      e.id,
                                    ),
                                  ),
                                })
                              : (0, s.jsx)("div", {
                                  className:
                                    "flex items-center justify-center h-full",
                                  children:
                                    null === x
                                      ? null
                                      : (0, s.jsx)("p", {
                                          className:
                                            "text-gray-500 text-center",
                                          children: x
                                            ? "Tap to start conversation"
                                            : "Scroll down to view the conversation",
                                        }),
                                }),
                            a &&
                              (0, s.jsxs)(A.E.div, {
                                className: "flex mb-4",
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 10 },
                                transition: { duration: 0.3 },
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "mr-2",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "bg-white h-8 w-8 rounded-full flex items-center justify-center",
                                      children: (0, s.jsx)(u.default, {
                                        unoptimized: !0,
                                        src: C.Z,
                                        alt: "DataTroops Logo",
                                        width: 24,
                                        height: 24,
                                      }),
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "bg-gray-100 rounded-3xl py-3 px-4 max-w-xs",
                                    children: (0, s.jsxs)("div", {
                                      className: "flex space-x-1",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                          style: { animationDelay: "0ms" },
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                          style: { animationDelay: "200ms" },
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                          style: { animationDelay: "400ms" },
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "p-4 border-t border-gray-200",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex",
                              children: [
                                (0, s.jsx)("input", {
                                  type: "text",
                                  placeholder: "Type your message...",
                                  className:
                                    "flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[var(--color-7B2CBF)] text-black",
                                  value: f,
                                  onChange: (e) => {
                                    y(e.target.value);
                                  },
                                  onKeyPress: (e) => {
                                    "Enter" !== e.key || b || H();
                                  },
                                  disabled: d || a || b,
                                }),
                                (0, s.jsx)("button", {
                                  className:
                                    "bg-[var(--color-7B2CBF)] text-white px-4 rounded-r-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                                  onClick: H,
                                  disabled: d || a || b,
                                  children: (0, s.jsx)(h.G, {
                                    icon: p.XCy,
                                    className: "h-5 w-5",
                                  }),
                                }),
                              ],
                            }),
                            b &&
                              (0, s.jsxs)("div", {
                                className:
                                  "mt-4 p-4 bg-gray-50 rounded-md text-black",
                                children: [
                                  (0, s.jsx)("h3", {
                                    className: "text-lg font-semibold mb-2",
                                    children:
                                      "Almost done! Please provide your contact info.",
                                  }),
                                  (0, s.jsx)("input", {
                                    type: "email",
                                    placeholder: "Your email",
                                    className:
                                      "w-full p-2 mb-1 border rounded ".concat(
                                        E
                                          ? "border-red-500"
                                          : "border-gray-300",
                                      ),
                                    value: j.email,
                                    onChange: (e) => R(e.target.value),
                                  }),
                                  E &&
                                    (0, s.jsx)("p", {
                                      className: "text-red-500 text-sm mb-2",
                                      children: E,
                                    }),
                                  (0, s.jsx)("input", {
                                    type: "tel",
                                    placeholder: "Your phone number",
                                    className:
                                      "w-full p-2 mb-1 border rounded ".concat(
                                        I
                                          ? "border-red-500"
                                          : "border-gray-300",
                                      ),
                                    value: j.phone,
                                    onChange: (e) => P(e.target.value),
                                  }),
                                  I &&
                                    (0, s.jsx)("p", {
                                      className: "text-red-500 text-sm mb-2",
                                      children: I,
                                    }),
                                  (0, s.jsx)("button", {
                                    className:
                                      "bg-[var(--color-7B2CBF)] text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed",
                                    onClick: U,
                                    disabled: !T(),
                                    children: "Submit",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-full lg:w-1/2 space-y-6",
                    children: [
                      (0, s.jsx)(A.E.h2, {
                        className:
                          "text-3xl md:text-4xl font-bold text-gray-100",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5 },
                        children: "Put your customer service on auto-pilot",
                      }),
                      (0, s.jsx)(A.E.p, {
                        className: "text-gray-100",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.1 },
                        children:
                          "Effortlessly resolve repetitive customer queries with our no-code generative AI-powered chatbot that can be fine-tuned on your existing content.",
                      }),
                      (0, s.jsx)(A.E.p, {
                        className: "text-gray-100",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.2 },
                        children:
                          "Enhance your self-service resolution rate, reduce average handling time and cut down on operational cost with human-like conversations, powered by generative AI.",
                      }),
                      (0, s.jsx)(A.E.div, {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.3 },
                        children: (0, s.jsx)(v.Z, {
                          message: "Coming Soon",
                          children: (0, s.jsx)("button", {
                            className:
                              "bg-[var(--color-5A189A)] hover:bg-[var(--color-7B2CBF)] text-gray-100 px-6 py-3 rounded-md font-medium transition-colors",
                            onClick: () => !l && c(!0),
                            children: "Book a Demo →",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        I = a(87138),
        S = a(37394);
      let M = [
        {
          id: 1,
          type: "case-study",
          company: "FinNova Bank",
          logo: S.Z,
          title:
            "FinNova slashes support wait time with our AI-driven chat assistant",
          description:
            "FinNova, a digital-first banking platform, implemented our AI chat assistant to handle thousands of customer queries in real-time, reducing dependency on human agents and improving customer satisfaction.",
          stats: [
            {
              label: "SUPPORT EFFICIENCY",
              value: "95%",
              description: "queries resolved without human involvement",
            },
            {
              label: "CUSTOMER SATISFACTION",
              value: "4.8/5",
              description: "average user rating post-deployment",
            },
          ],
          backgroundImage: x,
        },
        {
          id: 2,
          type: "testimonial",
          company: "HealthMate",
          logo: S.Z,
          title:
            "HealthMate scaled multilingual patient support using conversational AI",
          backgroundImage: x,
        },
        {
          id: 3,
          type: "case-study",
          company: "LogiChain",
          logo: S.Z,
          title:
            "LogiChain boosts operational efficiency with AI-led ticket automation",
          description:
            "LogiChain, a global logistics firm, reduced internal support load by introducing an AI system to handle ticketing, FAQs, and workflows — saving hundreds of hours monthly.",
          stats: [
            {
              label: "TICKET RESOLUTION TIME",
              value: "↓ 60%",
              description: "average time reduced for internal queries",
            },
            {
              label: "RESOURCE SAVINGS",
              value: "300+ hrs",
              description: "engineering hours saved each month",
            },
          ],
          backgroundImage: x,
        },
        {
          id: 4,
          type: "testimonial",
          company: "SkillForge",
          logo: S.Z,
          title: "SkillForge delivers 24/7 course assistance with our AI tutor",
          backgroundImage: x,
        },
        {
          id: 5,
          type: "case-study",
          company: "RetailX",
          logo: S.Z,
          title:
            "RetailX increases conversion rates with real-time product advisors",
          description:
            "RetailX deployed our AI-powered product advisor to assist shoppers in real time, leading to a measurable increase in cart completions and customer engagement.",
          stats: [
            {
              label: "CONVERSION LIFT",
              value: "22%",
              description: "increase in purchases after AI deployment",
            },
            {
              label: "ENGAGEMENT BOOST",
              value: "3.5x",
              description: "longer average session times with AI chat",
            },
          ],
          backgroundImage: x,
        },
      ];
      var L = () => {
        let [e, t] = (0, o.useState)(0),
          a = M[e],
          r = () => {
            t((e) => (0 === e ? M.length - 1 : e - 1));
          },
          i = () => {
            t((e) => (e === M.length - 1 ? 0 : e + 1));
          };
        return (0, s.jsx)("section", {
          className: "py-16 px-4",
          children: (0, s.jsxs)("div", {
            className: "container mx-auto",
            children: [
              (0, s.jsx)("div", {
                className: "hidden md:block",
                children: (0, s.jsx)(
                  () =>
                    (0, s.jsx)("div", {
                      className: "relative w-full overflow-hidden",
                      children: (0, s.jsxs)(
                        A.E.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: { duration: 0.5 },
                          className: "w-full",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "text-center mb-16",
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-4xl font-bold text-white mb-4",
                                  children: "Success Stories",
                                }),
                                (0, s.jsx)("div", {
                                  className: "mt-4 flex justify-center",
                                  children: (0, s.jsx)("div", {
                                    className:
                                      "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                                  }),
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "mt-4 text-gray-300 max-w-3xl mx-auto",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-12 gap-4",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "md:col-span-5 p-6 md:p-12 flex flex-col justify-center",
                                  children: [
                                    (0, s.jsx)("h2", {
                                      className:
                                        "text-3xl md:text-4xl font-bold mb-4 text-gray-100",
                                      children:
                                        "The results speak for themselves, just like our customers",
                                    }),
                                    (0, s.jsxs)(I.default, {
                                      href: "/success-stories",
                                      className:
                                        "text-gray-300 font-medium flex items-center mt-4 mb-8 hover:underline",
                                      children: [
                                        "View more success stories",
                                        (0, s.jsx)(h.G, {
                                          icon: p.eFW,
                                          className: "ml-2 h-4 w-4",
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "flex space-x-4 mt-auto",
                                      children: [
                                        (0, s.jsx)("button", {
                                          onClick: r,
                                          className:
                                            "h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:text-[var(--color-7B2CBF)] transition-colors",
                                          children: (0, s.jsx)(h.G, {
                                            icon: p.acZ,
                                            className:
                                              "h-4 w-4 hover:text-[var(--color-7B2CBF)]",
                                          }),
                                        }),
                                        (0, s.jsx)("button", {
                                          onClick: i,
                                          className:
                                            "h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:text-[var(--color-7B2CBF)] transition-colors",
                                          children: (0, s.jsx)(h.G, {
                                            icon: p.eFW,
                                            className:
                                              "h-4 w-4 hover:text-[var(--color-7B2CBF)]",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className: "md:col-span-7 relative",
                                  children: (0, s.jsxs)("div", {
                                    className:
                                      "relative rounded-2xl overflow-hidden bg-white shadow-lg",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className: "relative h-64 md:h-96",
                                        children: [
                                          a.backgroundImage &&
                                            (0, s.jsx)("div", {
                                              className: "absolute inset-0",
                                              children: (0, s.jsx)(u.default, {
                                                unoptimized: !0,
                                                src: a.backgroundImage,
                                                alt: a.company,
                                                fill: !0,
                                                objectFit: "cover",
                                                priority: !0,
                                                className: "filter",
                                              }),
                                            }),
                                          (0, s.jsx)("div", {
                                            className:
                                              "absolute inset-0 flex items-center justify-center",
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: "p-6",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "inline-block px-3 py-1 bg-[var(--color-E0AAFF)] text-[var(--color-7B2CBF)] text-sm font-medium rounded-md mb-3",
                                            children:
                                              "case-study" === a.type
                                                ? "Case study"
                                                : "Testimonial",
                                          }),
                                          (0, s.jsx)("h3", {
                                            className:
                                              "text-xl md:text-2xl font-bold mb-3 text-gray-800",
                                            children: a.title,
                                          }),
                                          a.description &&
                                            (0, s.jsx)("p", {
                                              className: "text-gray-700 mb-6",
                                              children: a.description,
                                            }),
                                          a.stats &&
                                            (0, s.jsx)("div", {
                                              className:
                                                "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                                              children: a.stats.map((e, t) =>
                                                (0, s.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "bg-gray-100 p-4 rounded-lg",
                                                    children: [
                                                      (0, s.jsx)("div", {
                                                        className:
                                                          "text-xs text-indigo-800 font-medium mb-1",
                                                        children: e.label,
                                                      }),
                                                      (0, s.jsx)("div", {
                                                        className:
                                                          "text-3xl font-bold mb-1",
                                                        children: e.value,
                                                      }),
                                                      (0, s.jsx)("div", {
                                                        className:
                                                          "text-sm text-gray-800",
                                                        children: e.description,
                                                      }),
                                                    ],
                                                  },
                                                  t,
                                                ),
                                              ),
                                            }),
                                          (0, s.jsx)("span", {
                                            className:
                                              "text-gray-400 font-medium flex items-center mt-2 cursor-not-allowed",
                                            children: "Coming Soon...",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        a.id,
                      ),
                    }),
                  {},
                ),
              }),
              (0, s.jsx)(
                () =>
                  (0, s.jsxs)("div", {
                    className: "w-full md:hidden",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "text-center mb-8",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-3xl font-bold mb-4",
                            children:
                              "The results speak for themselves, just like our customers",
                          }),
                          (0, s.jsxs)(I.default, {
                            href: "/success-stories",
                            className:
                              "text-indigo-600 font-medium flex items-center justify-center mt-4 hover:underline",
                            children: [
                              "View more success stories",
                              (0, s.jsx)(h.G, {
                                icon: p.eFW,
                                className: "ml-2 h-4 w-4",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "grid grid-cols-1 gap-6",
                        children: M.map((e) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "bg-white rounded-2xl overflow-hidden shadow-lg",
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "relative h-48",
                                  children: [
                                    e.backgroundImage &&
                                      (0, s.jsx)("div", {
                                        className: "absolute inset-0",
                                        children: (0, s.jsx)(u.default, {
                                          unoptimized: !0,
                                          src: e.backgroundImage,
                                          alt: e.company,
                                          fill: !0,
                                          objectFit: "cover",
                                        }),
                                      }),
                                    (0, s.jsx)("div", {
                                      className: "absolute bottom-4 left-4",
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "p-5",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-md mb-3",
                                      children:
                                        "case-study" === e.type
                                          ? "Case study"
                                          : "Testimonial",
                                    }),
                                    (0, s.jsx)("h3", {
                                      className:
                                        "text-lg font-bold mb-4 text-gray-800",
                                      children: e.title,
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-gray-400 font-medium flex items-center mt-2 cursor-not-allowed",
                                      children: "Coming Soon...",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                {},
              ),
            ],
          }),
        });
      };
      let W = () =>
          (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, s.jsx)("path", {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            }),
          }),
        F = () =>
          (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, s.jsx)("path", {
                d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-11a2.5 2.5 0 0 1 2.81-2.5L9.5 2Z",
              }),
              (0, s.jsx)("path", {
                d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-11a2.5 2.5 0 0 0-2.81-2.5L14.5 2Z",
              }),
              (0, s.jsx)("path", {
                d: "M12 4.5a2.5 2.5 0 0 0-5-.44A2.5 2.5 0 0 0 4.5 6.5v11a2.5 2.5 0 0 0 5 .44 2.5 2.5 0 0 0 2.5-2.44v-11Z",
              }),
              (0, s.jsx)("path", {
                d: "M12 4.5a2.5 2.5 0 0 1 5-.44 2.5 2.5 0 0 1 2.5 2.44v11a2.5 2.5 0 0 1-5 .44 2.5 2.5 0 0 1-2.5-2.44v-11Z",
              }),
            ],
          }),
        D = () =>
          (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, s.jsx)("rect", {
                width: "18",
                height: "10",
                x: "3",
                y: "11",
                rx: "2",
              }),
              (0, s.jsx)("circle", { cx: "12", cy: "5", r: "2" }),
              (0, s.jsx)("path", { d: "M12 7v4" }),
              (0, s.jsx)("line", { x1: "8", x2: "8", y1: "16", y2: "16" }),
              (0, s.jsx)("line", { x1: "16", x2: "16", y1: "16", y2: "16" }),
            ],
          }),
        G = () =>
          (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, s.jsx)("polygon", {
              points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            }),
          }),
        Q = () =>
          (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, s.jsx)("path", {
                d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
              }),
              (0, s.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
            ],
          }),
        R = () =>
          (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, s.jsx)("path", { d: "M3 3v18h18" }),
              (0, s.jsx)("path", { d: "m19 9-5 5-4-4-3 3" }),
            ],
          }),
        P = (e) => {
          let { title: t, description: a, icon: r, href: i } = e,
            n = (0, s.jsxs)("div", {
              className:
                "bg-gray-900 bg-opacity-50 rounded-lg p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-purple-500",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "bg-gradient-to-r from-[#5A189A] to-[#7B2CBF] p-4 rounded-lg mb-6",
                  children: (0, s.jsx)(r, {}),
                }),
                (0, s.jsx)("h3", {
                  className: "text-white text-xl font-bold mb-4 text-center",
                  children: t,
                }),
                (0, s.jsx)("p", {
                  className: "text-gray-300 text-center",
                  children: a,
                }),
              ],
            });
          return (0, s.jsx)(s.Fragment, {
            children: i
              ? (0, s.jsx)(I.default, {
                  href: i,
                  className: "block w-full h-full",
                  children: n,
                })
              : (0, s.jsx)(v.Z, { message: "Coming Soon", children: n }, t),
          });
        };
      function T() {
        return (0, s.jsx)("div", {
          className: " py-16 px-4",
          children: (0, s.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
              (0, s.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, s.jsx)("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: "What We Do",
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-4 flex justify-center",
                    children: (0, s.jsx)("div", {
                      className:
                        "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-4 text-gray-300 max-w-3xl mx-auto",
                    children:
                      "At DataTroops.ai, we specialize in developing state-of-the-art AI solutions that accelerate business operations, enhance decision-making, and automate tasks across industries. Whether you're looking to integrate chatbots, build custom AI models, or implement advanced computer vision systems, we have you covered.",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: [
                  {
                    icon: W,
                    title: "Generative AI",
                    description:
                      "Unlock the creative potential of AI with generative models that can craft unique content, designs, and strategies specifically for your business needs. Harness the power of AI to generate innovative solutions across multiple domains.",
                    href: "/solutions/generative-ai",
                  },
                  {
                    icon: F,
                    title: "Machine Learning",
                    description:
                      "Empower your data with machine learning algorithms that enable predictive analytics, smart pattern recognition, and decision-making based on actionable insights. Optimize performance and discover new opportunities.",
                  },
                  {
                    icon: D,
                    title: "NLP & Chatbots",
                    description:
                      "Enhance user engagement through intelligent chatbots and NLP-powered systems that understand natural language, context, and user intent, delivering personalized experiences in real-time.",
                  },
                  {
                    icon: G,
                    title: "AI Agents",
                    description:
                      "Automate your operations with autonomous AI agents capable of performing complex tasks, making decisions, and handling critical processes efficiently. Streamline workflows and boost productivity across your entire business.",
                  },
                  {
                    icon: Q,
                    title: "Computer Vision",
                    description:
                      "Implement AI-driven image and video analysis systems that can detect, recognize, and interpret visual data. Improve accuracy, automation, and decision-making in fields like security, manufacturing, and healthcare.",
                  },
                  {
                    icon: R,
                    title: "Deep Learning",
                    description:
                      "Leverage the power of neural networks to tackle highly complex problems. From image recognition to predictive modeling, our deep learning solutions uncover hidden patterns and drive insights from large datasets.",
                  },
                ].map((e, t) =>
                  (0, s.jsx)(
                    P,
                    {
                      icon: e.icon,
                      title: e.title,
                      description: e.description,
                      href: e.href,
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        });
      }
      var H = a(92940);
      let U = (0, a(78030).Z)("quote", [
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
      var O = a(98324),
        Y = a(75137),
        Z = a(1336);
      a(54887);
      var V = a(71538),
        z = [
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
          let a = (0, V.Z8)(`Primitive.${t}`),
            r = o.forwardRef((e, r) => {
              let { asChild: i, ...n } = e,
                o = i ? a : t;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, s.jsx)(o, { ...n, ref: r })
              );
            });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        q = a(10554);
      function K() {
        return () => {};
      }
      var X = "Avatar",
        [J, _] = (0, O.b)(X),
        [$, ee] = J(X),
        et = o.forwardRef((e, t) => {
          let { __scopeAvatar: a, ...r } = e,
            [i, n] = o.useState("idle");
          return (0, s.jsx)($, {
            scope: a,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: n,
            children: (0, s.jsx)(z.span, { ...r, ref: t }),
          });
        });
      et.displayName = X;
      var ea = "AvatarImage",
        es = o.forwardRef((e, t) => {
          let {
              __scopeAvatar: a,
              src: r,
              onLoadingStatusChange: i = () => {},
              ...n
            } = e,
            l = ee(ea, a),
            c = (function (e, t) {
              let { referrerPolicy: a, crossOrigin: s } = t,
                r = (0, q.useSyncExternalStore)(
                  K,
                  () => !0,
                  () => !1,
                ),
                i = o.useRef(null),
                n = r
                  ? (i.current || (i.current = new window.Image()), i.current)
                  : null,
                [l, c] = o.useState(() => en(n, e));
              return (
                (0, Z.b)(() => {
                  c(en(n, e));
                }, [n, e]),
                (0, Z.b)(() => {
                  let e = (e) => () => {
                    c(e);
                  };
                  if (!n) return;
                  let t = e("loaded"),
                    r = e("error");
                  return (
                    n.addEventListener("load", t),
                    n.addEventListener("error", r),
                    a && (n.referrerPolicy = a),
                    "string" == typeof s && (n.crossOrigin = s),
                    () => {
                      n.removeEventListener("load", t),
                        n.removeEventListener("error", r);
                    }
                  );
                }, [n, s, a]),
                l
              );
            })(r, n),
            d = (0, Y.W)((e) => {
              i(e), l.onImageLoadingStatusChange(e);
            });
          return (
            (0, Z.b)(() => {
              "idle" !== c && d(c);
            }, [c, d]),
            "loaded" === c ? (0, s.jsx)(z.img, { ...n, ref: t, src: r }) : null
          );
        });
      es.displayName = ea;
      var er = "AvatarFallback",
        ei = o.forwardRef((e, t) => {
          let { __scopeAvatar: a, delayMs: r, ...i } = e,
            n = ee(er, a),
            [l, c] = o.useState(void 0 === r);
          return (
            o.useEffect(() => {
              if (void 0 !== r) {
                let e = window.setTimeout(() => c(!0), r);
                return () => window.clearTimeout(e);
              }
            }, [r]),
            l && "loaded" !== n.imageLoadingStatus
              ? (0, s.jsx)(z.span, { ...i, ref: t })
              : null
          );
        });
      function en(e, t) {
        return e
          ? t
            ? (e.src !== t && (e.src = t),
              e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
            : "error"
          : "idle";
      }
      ei.displayName = er;
      let eo = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return t.filter(Boolean).join(" ");
        },
        el = o.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, s.jsx)(et, {
            ref: t,
            className: eo(
              "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[var(--color-7B2CBF)] text-white",
              a,
            ),
            ...r,
          });
        });
      el.displayName = et.displayName;
      let ec = o.forwardRef((e, t) => {
        let { src: a, className: r, ...i } = e;
        return (0, s.jsx)(es, {
          ref: t,
          src: a || "/images/default-avatar.jpg",
          className: eo("h-full w-full object-cover", r),
          ...i,
        });
      });
      ec.displayName = es.displayName;
      let ed = o.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(ei, {
          ref: t,
          className: eo(
            "flex h-full w-full items-center justify-center rounded-full bg-[var(--color-5A189A)] text-white",
            a,
          ),
          ...r,
        });
      });
      ed.displayName = ei.displayName;
      let eA = o.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: eo(
            "rounded-xl border border-[var(--color-7B2CBF)] bg-[var(--color-10002B)] text-white shadow-lg",
            a,
          ),
          ...r,
        });
      });
      eA.displayName = "Card";
      let em = [
          {
            id: 1,
            quote:
              "Artificial intelligence will have a more profound impact on humanity than fire, electricity, and the internet.",
            author: "Sundar Pichai",
            title: "CEO",
            company: "Alphabet (Google)",
            avatar: "/images/sp-avatar.jpg",
            initials: "SP",
          },
          {
            id: 2,
            quote:
              "AI will affect every product and every service that we have.",
            author: "Tim Cook",
            title: "CEO",
            company: "Apple",
            avatar: "/images/tc-avatar.jpg",
            initials: "TC",
          },
          {
            id: 3,
            quote:
              "AI agents will become deeply integrated into our daily routines, assisting us with a wide range of tasks.",
            author: "Andrew Ng",
            title: "Co-founder of Google Brain and Coursera",
            company: "Google Brain and Coursera",
            avatar: "/images/an-avatar.jpg",
            initials: "AN",
          },
          {
            id: 4,
            quote:
              "Generative AI is one of the most exciting and powerful technologies of our time, but it also presents new challenges and risks that we need to address thoughtfully and proactively.",
            author: "Sam Altman",
            title: "CEO",
            company: "OpenAI",
            avatar: "/images/sa-avatar.jpg",
            initials: "SA",
          },
          {
            id: 5,
            quote:
              "AI agents will transform the way we interact with technology, making it more natural and intuitive.",
            author: "Fei-Fei Li",
            title: "Professor of Computer Science",
            company: "Stanford University",
            avatar: "/images/ffl-avatar.jpg",
            initials: "FFL",
          },
          {
            id: 6,
            quote:
              "AI agents are not only going to change how everyone interacts with computers. They're also going to upend the software industry, bringing about the biggest revolution in computing since we went from typing commands to tapping on icons.",
            author: "Bill Gates",
            title: "Co-founder",
            company: "Microsoft",
            avatar: "/images/bg-avatar.jpg",
            initials: "BG",
          },
          {
            id: 7,
            quote:
              "AI and digital labor are multitrillion-dollar opportunities despite risks of job displacement and misuse.",
            author: "Marc Benioff",
            title: "CEO",
            company: "Salesforce",
            avatar: "/images/mb-avatar.jpg",
            initials: "MB",
          },
          {
            id: 8,
            quote: "AI and AI agents act like coworkers, not like software.",
            author: "Jack Clark",
            title: "Co-founder",
            company: "Anthropic",
            avatar: "/images/jc-avatar.jpg",
            initials: "JC",
          },
          {
            id: 9,
            quote:
              "Manager nerds will orchestrate fleets of AI agents, making small teams extremely powerful.",
            author: "Conor Grennan",
            title: "Author and Tech Enthusiast",
            company: "Decidr",
            avatar: "/images/cg-avatar.jpg",
            initials: "CG",
          },
          {
            id: 10,
            quote: "AI and AI agents act like coworkers, not like software.",
            author: "Paul Chan",
            title: "Founder and CEO",
            company: "Decidr",
            avatar: "/images/pc-avatar.jpg",
            initials: "PC",
          },
        ],
        eu = (e) => {
          let { text: t } = e;
          return (0, s.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, s.jsx)(H.Z, {
                className: "text-[var(--color-E0AAFF)] h-5 w-5 mr-2",
              }),
              (0, s.jsx)("span", { className: "text-gray-100", children: t }),
            ],
          });
        };
      function eh() {
        let [e, t] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => (e + 1) % em.length);
            }, 8e3);
            return () => clearInterval(e);
          }, []),
          (0, s.jsx)("section", {
            className: "relative py-4 overflow-hidden bg-[var(--color-10002B)]",
            children: (0, s.jsxs)("div", {
              className: "container mx-auto px-4 relative z-10",
              children: [
                (0, s.jsxs)("div", {
                  className: "max-w-3xl mx-auto text-center mb-16",
                  children: [
                    (0, s.jsxs)("h2", {
                      className: "text-4xl font-bold text-white mb-4",
                      children: [
                        "The Importance of",
                        " ",
                        (0, s.jsx)("span", {
                          className: "text-[var(--color-7B2CBF)]",
                          children: "AI Agents",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "mt-4 flex justify-center",
                      children: (0, s.jsx)("div", {
                        className:
                          "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "max-w-4xl mx-auto relative",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "overflow-hidden relative h-[350px] md:h-[300px]",
                      children: em.map((t, a) =>
                        (0, s.jsx)(
                          A.E.div,
                          {
                            className:
                              "absolute inset-0 transition-opacity duration-500",
                            initial: { opacity: 0, scale: 0.95 },
                            animate: {
                              opacity: e === a ? 1 : 0,
                              scale: e === a ? 1 : 0.95,
                            },
                            children: (0, s.jsxs)(eA, {
                              className:
                                "h-full flex flex-col justify-between p-8 md:p-10",
                              children: [
                                (0, s.jsx)(U, {
                                  className:
                                    "text-[var(--color-E0AAFF)] h-12 w-12 mb-6",
                                }),
                                (0, s.jsxs)("p", {
                                  className:
                                    "text-lg md:text-xl italic mb-6 leading-relaxed text-gray-100",
                                  children: ["“", t.quote, "”"],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex items-center mt-auto",
                                  children: [
                                    (0, s.jsxs)(el, {
                                      className: "mr-4",
                                      children: [
                                        (0, s.jsx)(ec, {
                                          src: t.avatar,
                                          alt: t.author,
                                        }),
                                        (0, s.jsx)(ed, {
                                          children: t.initials,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("h4", {
                                          className:
                                            "font-semibold text-gray-100",
                                          children: t.author,
                                        }),
                                        (0, s.jsxs)("p", {
                                          className: "text-sm text-gray-400",
                                          children: [t.title, ", ", t.company],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t.id,
                        ),
                      ),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex justify-center mt-8",
                      children: em.map((a, r) =>
                        (0, s.jsx)(
                          "button",
                          {
                            className:
                              "w-3 h-3 rounded-full mx-1 transition-all ".concat(
                                e === r
                                  ? "bg-[var(--color-7B2CBF)] scale-125"
                                  : "bg-[var(--color-3C096C)]",
                              ),
                            onClick: () => t(r),
                            "aria-label": "View testimonial ".concat(r + 1),
                          },
                          r,
                        ),
                      ),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "mt-16 flex flex-wrap justify-center gap-4 text-[var(--color-C77DFF)]",
                      children: [
                        (0, s.jsx)(eu, { text: "99.9% Uptime" }),
                        (0, s.jsx)(eu, { text: "End-to-end encryption" }),
                        (0, s.jsx)(eu, { text: "24/7 Support" }),
                        (0, s.jsx)(eu, { text: "Cost Effective" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var ep = a(44458),
        ex = a(80383);
      let eg = [
        {
          question: "What types of AI solutions do you offer?",
          answer:
            "We specialize in building conversational AI assistants, AI-powered automation tools, and intelligent data processing systems tailored for industries such as finance, healthcare, e-commerce, and education.",
        },
        {
          question: "Can your AI integrate with our existing tools?",
          answer:
            "Absolutely. Our solutions are designed to integrate seamlessly with popular platforms like CRMs (e.g., Salesforce, HubSpot), ticketing systems, and custom APIs to ensure smooth workflows across your existing tech stack.",
        },
        {
          question: "How long does it take to deploy a custom AI assistant?",
          answer:
            "Deployment time varies based on complexity, but most clients go live within 2–4 weeks. We handle everything from data ingestion to training and testing, ensuring minimal effort from your team.",
        },
        {
          question: "Is our data secure with your AI systems?",
          answer:
            "Yes. We follow enterprise-grade security protocols, including end-to-end encryption, role-based access control, and full compliance with data protection regulations such as GDPR and HIPAA (where applicable).",
        },
        {
          question: "Do you provide ongoing support and training?",
          answer:
            "We offer continuous support, performance monitoring, and training to your internal teams to maximize adoption. Our success team is always ready to help you optimize and scale your AI solutions.",
        },
        {
          question: "Can the AI handle multilingual conversations?",
          answer:
            "Yes, our AI assistants support multiple languages out of the box and can be customized for regional dialects or industry-specific terminology to ensure natural and effective communication.",
        },
      ];
      function ef() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(m, {}),
            (0, s.jsx)(T, {}),
            (0, s.jsx)(w, {}),
            (0, s.jsx)(r.Z, {}),
            (0, s.jsx)(eh, {}),
            (0, s.jsx)(E, {}),
            (0, s.jsx)(k, {}),
            (0, s.jsx)(L, {}),
            (0, s.jsx)(ex.Z, {}),
            (0, s.jsx)(ep.Z, {
              title: "Frequently Asked Questions",
              description:
                " Find quick answers to common questions about our AI Scheduling Assistant.",
              faqs: eg,
            }),
          ],
        });
      }
    },
    12098: function (e, t, a) {
      "use strict";
      a.d(t, {
        z: function () {
          return i;
        },
      });
      var s = a(57437);
      let r = (0, a(13027).j)(
          [
            "text-xs tracking-wildest uppercase font-bold h-10 px-6 rounded-lg ",
          ],
          {
            variants: {
              block: { true: "w-full" },
              variant: {
                primary: "border-gradient",
                secondary:
                  "bg-gray-100 text-gray-950 hover:bg-gray-200 hover:text-gray-900",
                tertiary:
                  "bg-white text-gray-800 hover:bg-gray-200 hover:text-gray-900",
              },
            },
            defaultVariants: { variant: "primary", block: !1 },
          },
        ),
        i = (e) => {
          let { className: t = "", children: a, ...i } = e;
          return (0, s.jsx)("button", {
            className: r({ ...i, className: t }),
            style: { borderRadius: "50px" },
            type: i.type || "button",
            children: a,
          });
        };
    },
    81180: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return A;
        },
      });
      var s = a(57437),
        r = a(2265),
        i = a(6920),
        n = a(45079),
        o = a(57818),
        l = a(66648),
        c = {
          src: "/_next/static/media/test-30.53db26cc.png",
          height: 1024,
          width: 1536,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAe0lEQVR42g2MsQ0CMRAE93yH/bxFQkQlVAIdQDmkFIGIaIaQkEcCQWKB7JOP22g1Iw1dXp18sK4qqdfGTAIyMYelUMP7UdOSsZjnZAYEdAt5vN4+u8N0PLFWCUJmLgCONOTYzvfnVIboUSNAAH/4fWfr/Wq7SWMmVQPwB1sfMGNCs2HVAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        };
      let d = (0, o.default)(
        () =>
          Promise.all([a.e(987), a.e(463)])
            .then(a.bind(a, 40463))
            .then((e) => e.motion.div),
        { loadableGenerated: { webpack: () => [null] }, ssr: !1 },
      );
      var A = () => {
        let [e, t] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
          t(!0);
        }, []),
        e)
          ? (0, s.jsx)("section", {
              className:
                " pb-24 md:pb-14 bg-gradient-to-r  `from-[var(--color-5A189A)] via-[var(--color-7B2CBF)] to-[var(--color-9D4EDD)]`   py-16 px-4 text-white text-center md:text-left",
              children: (0, s.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center ",
                children: [
                  (0, s.jsxs)(d, {
                    className: "md:w-1/2 space-y-6",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1.5 },
                    children: [
                      (0, s.jsx)("h2", {
                        className:
                          "text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-C77DFF)] via-[var(--color-E0AAFF)] to-[var(--color-240046)]",
                        children: "Ready to Revolutionize Your Workflow?",
                      }),
                      (0, s.jsx)("p", {
                        className: "text-lg md:text-xl font-light opacity-80",
                        children:
                          "Emphasize how your AI assistant can help users streamline their scheduling and tasks, improve efficiency, and transform their workflow.",
                      }),
                      (0, s.jsx)("div", {
                        className: "mt-8",
                        children: (0, s.jsxs)("a", {
                          href: "#contact",
                          className:
                            "inline-flex items-center justify-center md:justify-start px-8 py-4 rounded-lg bg-gradient-to-r bg-[var(--color-7B2CBF)] hover:bg-[var(--color-9D4EDD)] text-white font-bold text-xl hover:from-pink-600 hover:to-blue-700 transition ease-in-out duration-300 transform hover:scale-105",
                          children: [
                            "Get Started",
                            (0, s.jsx)(i.G, { icon: n.eFW, className: "ml-3" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(d, {
                    className: "md:w-1/2 mt-8 mb-16 md:mt-0",
                    initial: { x: 200 },
                    animate: { x: 0 },
                    transition: { type: "spring", stiffness: 120, damping: 30 },
                    children: (0, s.jsx)("div", {
                      className:
                        "rounded-full  text-purple-800 flex items-center justify-center mx-auto",
                      children: (0, s.jsx)(l.default, {
                        src: c,
                        unoptimized: !0,
                        alt: "Robot assistant",
                        style: { borderRadius: "50px" },
                      }),
                    }),
                  }),
                ],
              }),
            })
          : null;
      };
    },
    53833: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/datatroopsLogo.1e6a1c95.svg",
        height: 2835,
        width: 2835,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(
      0,
      [676, 699, 648, 950, 920, 164, 138, 704, 504, 522, 971, 23, 744],
      function () {
        return e((e.s = 98658));
      },
    ),
      (_N_E = e.O());
  },
]);
