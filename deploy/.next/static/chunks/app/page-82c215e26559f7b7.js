(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    98658: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 33728));
    },
    92940: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, a(78030).Z)("circle-check-big", [
        ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
        ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
      ]);
    },
    66706: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, a(78030).Z)("refresh-cw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ]);
    },
    60994: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, a(78030).Z)("send", [
        [
          "path",
          {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
          },
        ],
        ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
      ]);
    },
    74697: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, a(78030).Z)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    46246: function (e, t, a) {
      "use strict";
      var i = a(2265),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        n = i.useState,
        r = i.useEffect,
        o = i.useLayoutEffect,
        l = i.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var a = t();
          return !s(e, a);
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
                i = n({ inst: { value: a, getSnapshot: t } }),
                s = i[0].inst,
                d = i[1];
              return (
                o(
                  function () {
                    (s.value = a), (s.getSnapshot = t), c(s) && d({ inst: s });
                  },
                  [e, a, t],
                ),
                r(
                  function () {
                    return (
                      c(s) && d({ inst: s }),
                      e(function () {
                        c(s) && d({ inst: s });
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
        void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : d;
    },
    10554: function (e, t, a) {
      "use strict";
      e.exports = a(46246);
    },
    33728: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return eE;
          },
        });
      var i = a(57437),
        s = a(81180),
        n = a(61485),
        r = a(48059),
        o = a.n(r),
        l = a(2265),
        c = a(12098),
        d = a(96164);
      let A = (e) =>
        (0, i.jsxs)("div", {
          children: [
            (0, i.jsxs)("svg", {
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
                (0, i.jsx)("path", {
                  d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
                }),
                (0, i.jsx)("path", { d: "M13 13l6 6" }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "absolute top-full left-full",
              children: (0, i.jsx)("div", {
                className: (0, d.m6)(
                  "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none w-20",
                  "red" === e.color && "bg-red-500",
                ),
                children: e.name,
              }),
            }),
          ],
        });
      var m = a(14950);
      let u = () => {
        let e = (0, l.useRef)(null),
          [t, a] = (0, l.useState)(!1),
          [s, n] = (0, l.useState)(0),
          [r, d] = (0, l.useState)({ x: 0, y: 0 }),
          [u, h] = (0, l.useState)(""),
          [x, p] = (0, l.useState)(""),
          [g, f] = (0, l.useState)(!1),
          y = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.toLowerCase());
        (0, l.useEffect)(() => {
          let t = new IntersectionObserver(
            (e) => {
              a(e[0].isIntersecting);
            },
            { threshold: 0.05 },
          );
          e.current && t.observe(e.current);
          let i = () => {
              if (!e.current) return;
              let t = e.current.getBoundingClientRect(),
                a = window.innerHeight,
                i = -t.height;
              n(Math.max(0, Math.min(1, (a - t.top) / (a - i))));
            },
            s = (t) => {
              if (!e.current) return;
              let a = e.current.getBoundingClientRect();
              d({
                x: (t.clientX / window.innerWidth) * 2 - 1,
                y: ((t.clientY - a.top) / a.height) * 2 - 1,
              });
            };
          i();
          let r = setTimeout(i, 100);
          return (
            window.addEventListener("scroll", i, { passive: !0 }),
            window.addEventListener("resize", i, { passive: !0 }),
            window.addEventListener("mousemove", s, { passive: !0 }),
            () => {
              clearTimeout(r),
                t.disconnect(),
                window.removeEventListener("scroll", i),
                window.removeEventListener("resize", i),
                window.removeEventListener("mousemove", s);
            }
          );
        }, []);
        let v = (e, t, a, i, n) => {
          let r = s * Math.PI * 2 + n;
          return { x: e + Math.cos(r) * a, y: t + Math.sin(r) * i };
        };
        (0, l.useEffect)(() => {
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
            p("Please enter a valid email address.");
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
              p("Something went wrong. Please try again.");
          }
        };
        return (0, i.jsxs)("section", {
          ref: e,
          style: { perspective: "1000px" },
          className:
            o().dynamic([["a4b6d2ff32ac776a", [100 * Math.random() - 50]]]) +
            " py-24 overflow-hidden relative min-h-screen",
          children: [
            (0, i.jsxs)("div", {
              style: {
                background: "\n        radial-gradient(circle at "
                  .concat(50 + 10 * r.x, "% ")
                  .concat(
                    50 + 10 * r.y,
                    "%, \n          var(--color-10002B) 0%, \n        var(--color-240046) 50%,\n        var(--color-3C096C) 100%)\n      ",
                  ),
                transition: "background 0.5s ease-out",
              },
              className:
                o().dynamic([
                  ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                ]) + " absolute inset-0 -z-10",
              children: [
                (0, i.jsx)("div", {
                  className:
                    o().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " absolute inset-0",
                  children: [...Array(100)].map((e, t) => {
                    let a = 2 * Math.random() + 1;
                    return (0, i.jsx)(
                      "div",
                      {
                        style: {
                          width: "".concat(a, "px"),
                          height: "".concat(a, "px"),
                          left: "".concat(100 * Math.random(), "%"),
                          top: "".concat(100 * Math.random(), "%"),
                          opacity: 0.2 * Math.random() + 0.1 * s,
                          filter: "blur(".concat(1 * Math.random(), "px)"),
                          animation: "floatParticle "
                            .concat(
                              50 * Math.random() + 20,
                              "s infinite linear ",
                            )
                            .concat(5 * Math.random(), "s"),
                        },
                        className:
                          o().dynamic([
                            ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                          ]) + " absolute rounded-full bg-white",
                      },
                      t,
                    );
                  }),
                }),
                [void 0, void 0, void 0, void 0, void 0].map((e, t) => {
                  let a = 150 + 40 * t,
                    n = 100 + 30 * t,
                    r = v(50, 50, a / 10, a / 20, (Math.PI / 2.5) * t);
                  return (0, i.jsx)(
                    "div",
                    {
                      style: {
                        width: "".concat(n, "px"),
                        height: "".concat(n, "px"),
                        left: "".concat(r.x, "%"),
                        top: "".concat(r.y, "%"),
                        opacity: 0.07 - 0.01 * t + 0.03 * s,
                        transform: "translateZ("
                          .concat(-(50 * t), "px) scale(")
                          .concat(1 + 0.3 * s, ")"),
                        transition: "all 0.2s ease-out",
                      },
                      className:
                        o().dynamic([
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
                (0, i.jsx)("div", {
                  style: {
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: ""
                      .concat(50 - 20 * s, "px ")
                      .concat(50 - 20 * s, "px"),
                    opacity: 0.1 + 0.05 * s,
                    transform: "perspective(1000px) rotateX("
                      .concat(5 * s, "deg) scale(")
                      .concat(1 + 0.3 * s, ")"),
                    transformOrigin: "center center",
                  },
                  className:
                    o().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " absolute inset-0 transition-all duration-700",
                }),
                (0, i.jsx)("div", {
                  style: { opacity: 0.07 + 0.08 * s },
                  className:
                    o().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " absolute inset-0 opacity-15",
                  children: (0, i.jsxs)("svg", {
                    width: "100%",
                    height: "100%",
                    style: {
                      transform: "scale("
                        .concat(1 + 0.2 * s, ") rotate(")
                        .concat(3 * s, "deg)"),
                    },
                    className:
                      o().dynamic([
                        ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                      ]) + " transition-all duration-1000",
                    children: [
                      (0, i.jsx)("defs", {
                        className: o().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]),
                        children: (0, i.jsxs)("pattern", {
                          id: "circuit",
                          x: "0",
                          y: "0",
                          width: "200",
                          height: "200",
                          patternUnits: "userSpaceOnUse",
                          className: o().dynamic([
                            ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                          ]),
                          children: [
                            (0, i.jsx)("path", {
                              d: "M10 10 H 50 V 50 H 90 V 90 H 130 V 130 H 170 V 170 M 30 10 V 50 H 70 V 90 H 110 V 130 H 150 V 170 M 190 10 V 50 H 150 V 90 H 110 V 130 H 70 V 170 M 10 30 H 50 V 70 H 90 V 110 H 130 V 150 H 170 M 10 170 H 50 V 130 H 90 V 90 H 130 V 50 H 170",
                              stroke: "rgba(180, 180, 255, 0.3)",
                              strokeWidth: "1",
                              fill: "none",
                              className: o().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, i.jsx)("circle", {
                              cx: "10",
                              cy: "10",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: o().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, i.jsx)("circle", {
                              cx: "50",
                              cy: "50",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: o().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, i.jsx)("circle", {
                              cx: "90",
                              cy: "90",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: o().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, i.jsx)("circle", {
                              cx: "130",
                              cy: "130",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: o().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                            (0, i.jsx)("circle", {
                              cx: "170",
                              cy: "170",
                              r: "3",
                              fill: "rgba(180, 180, 255, 0.4)",
                              className: o().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("rect", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        fill: "url(#circuit)",
                        className: o().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className:
                o().dynamic([
                  ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                ]) + " container relative z-10 lg:mt-16 md:mt-16",
              children: [
                (0, i.jsx)("div", {
                  style: {
                    opacity: 0.7 + 0.3 * s,
                    transform: "rotate("
                      .concat(-15 * s, "deg) scale(")
                      .concat(1 + 0.2 * s, ")"),
                    filter: "hue-rotate(".concat(30 * s, "deg)"),
                  },
                  className:
                    o().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) +
                    " absolute left-56 top-96 hidden lg:block pointer-events-none transition-all duration-700",
                  children: (0, i.jsx)(A, { name: "AI-Agent" }),
                }),
                (0, i.jsx)("div", {
                  style: {
                    opacity: 0.7 + 0.3 * s,
                    transform: "rotate("
                      .concat(15 * s, "deg) scale(")
                      .concat(1 + 0.2 * s, ")"),
                    filter: "hue-rotate(".concat(-30 * s, "deg)"),
                  },
                  className:
                    o().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) +
                    " absolute right-80 -top-4 hidden lg:block pointer-events-none transition-all duration-700",
                  children: (0, i.jsx)(A, { name: "AI-Agent", color: "red" }),
                }),
                (0, i.jsxs)("div", {
                  style: {
                    transform:
                      "perspective(1000px) \n                       translateZ("
                        .concat(100 * s, "px) \n                       scale(")
                        .concat(1 - 0.05 * s, ")"),
                    opacity: t ? 1 : 0,
                  },
                  className:
                    o().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " relative transition-all duration-1000",
                  children: [
                    (0, i.jsx)("div", {
                      style: {
                        transform: "translateY(".concat(t ? 0 : 20, "px)"),
                        opacity: t ? 1 : 0,
                        transitionDelay: "100ms",
                      },
                      className:
                        o().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " flex justify-center mb-6 transition-all duration-700",
                      children: (0, i.jsx)("span", {
                        className:
                          o().dynamic([
                            ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                          ]) +
                          " inline-flex py-1 px-3 bg-gradient-to-r from-[var(--color-7B2CBF)] to-[var(--color-9D4EDD)] rounded-full font-semibold text-white shadow-lg shadow-[var(--color-7B2CBF)]/20 hover:scale-105 transition-transform",
                        children: "Automation",
                      }),
                    }),
                    (0, i.jsx)("h1", {
                      style: {
                        transform: "translateY(".concat(t ? 0 : 30, "px)"),
                        opacity: t ? 1 : 0,
                        transitionDelay: "200ms",
                        WebkitBackgroundClip: "text",
                        textShadow:
                          s > 0.3
                            ? "none"
                            : "0 4px 20px rgba(123, 31, 162, 0.2)",
                      },
                      className:
                        o().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 transition-all duration-700",
                      children: "Impactful solutions and AI agents created",
                    }),
                    (0, i.jsx)("p", {
                      style: {
                        transform: "translateY(".concat(t ? 0 : 40, "px)"),
                        opacity: t ? 1 : 0,
                        transitionDelay: "300ms",
                        textShadow: "0 2px 10px rgba(0, 0, 0, ".concat(
                          0.2 + 0.3 * s,
                          ")",
                        ),
                      },
                      className:
                        o().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " text-center text-xl text-white/80 mt-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700",
                      children:
                        "Transform the way you work with our cutting-edge AI Development Services that are designed to streamline operations, automate repetitive tasks, and unlock deep insights for better decision-making.",
                    }),
                    (0, i.jsxs)("form", {
                      style: {
                        transform: "translateY(".concat(t ? 0 : 50, "px)"),
                        opacity: t ? 1 : 0,
                        transitionDelay: "400ms",
                        boxShadow: "0 4px "
                          .concat(12 + 15 * s, "px rgba(139, 92, 246, ")
                          .concat(0.1 + 0.3 * s, ")"),
                        background:
                          "linear-gradient(135deg, var(--color-10002B)/"
                            .concat(0.03 + 0.05 * s, ", var(--color-240046)/")
                            .concat(0.08 + 0.05 * s, ")"),
                      },
                      onSubmit: b,
                      className:
                        o().dynamic([
                          ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                        ]) +
                        " flex border border-white/15 rounded-full p-2 mt-20 max-w-lg mx-auto backdrop-blur-lg bg-white/5 transition-all duration-700 hover:border-white/30",
                      children: [
                        (0, i.jsx)("input", {
                          type: "email",
                          placeholder: "Enter your email",
                          value: u,
                          onChange: (e) => {
                            h(e.target.value), x && p("");
                          },
                          className:
                            o().dynamic([
                              ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                            ]) +
                            " flex-1 bg-transparent px-4 text-white placeholder-white/50 focus:outline-none",
                        }),
                        (0, i.jsx)(c.z, {
                          variant: "tertiary",
                          className:
                            "font-medium border bg-white border-[var(--color-E0AAFF)]/15 h-10 px-6 whitespace-nowrap text-black transition-all duration-300 hover:bg-[var(--color-E0AAFF)]/10 hover:shadow-lg hover:shadow-[var(--color-7B2CBF)]/20 pr-4",
                          style: { borderRadius: "50px" },
                          type: "submit",
                          children: g ? "Submitted" : "Sign Up",
                        }),
                        g &&
                          (0, i.jsx)("p", {
                            className:
                              o().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]) + " text-green-400 text-center mt-2",
                            children: "Thanks! We'll be in touch soon.",
                          }),
                        x &&
                          (0, i.jsx)("p", {
                            className:
                              o().dynamic([
                                [
                                  "a4b6d2ff32ac776a",
                                  [100 * Math.random() - 50],
                                ],
                              ]) + " text-red-400 text-center mt-2",
                            children: x,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)(m.E.div, {
              style: { gap: "0.5rem" },
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.5, duration: 0.5 },
              className:
                " absolute bottom-2 lg:bottom-12 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center mt-10 hidden lg:flex",
              children: [
                (0, i.jsx)("span", {
                  className:
                    o().dynamic([
                      ["a4b6d2ff32ac776a", [100 * Math.random() - 50]],
                    ]) + " text-sm text-white/70 mb-2 font-medium pt-2",
                  children: "Scroll Down",
                }),
                (0, i.jsx)(m.E.div, {
                  className:
                    "w-6 h-10 rounded-full border-2 border-white/40 flex justify-center p-1",
                  animate: { y: [0, 5, 0] },
                  transition: { repeat: 1 / 0, duration: 1.5 },
                  children: (0, i.jsx)(m.E.div, {
                    className:
                      "w-1.5 h-1.5 bg-[var(--color-9D4EDD)] rounded-full",
                    animate: { y: [0, 6, 0] },
                    transition: { repeat: 1 / 0, duration: 1.5 },
                  }),
                }),
              ],
            }),
            (0, i.jsx)(o(), {
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
      var h = a(66648),
        x = a(6920),
        p = a(45079),
        g = {
          src: "/_next/static/media/blogs.42ef9ce7.avif",
          height: 1647,
          width: 3750,
          blurDataURL:
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAC4AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAgAAAAEAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAADZtZGF0EgAKCBgIftECAgaEMiAXwAAASWAARr6LZhLlTPth2Y/TnW2JJ2mq/QnDrvbitA==",
          blurWidth: 8,
          blurHeight: 4,
        },
        f = {
          src: "/_next/static/media/test-2.4836d32b.avif",
          height: 1152,
          width: 2880,
          blurDataURL:
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAACIAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAgAAAADAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACptZGF0EgAKCBgIfNECAgaEMhQXwAAASWAAAZwWkPSqils6xJJA6A==",
          blurWidth: 8,
          blurHeight: 3,
        },
        y = {
          src: "/_next/static/media/test-3.9357682d.avif",
          height: 1152,
          width: 2880,
          blurDataURL:
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAACsAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAgAAAADAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAADNtZGF0EgAKCBgIfNECAgaEMh0XwAAASXWAa+ZlKdBytvE47jTj/75HtD4CylOk5A==",
          blurWidth: 8,
          blurHeight: 3,
        },
        v = {
          src: "/_next/static/media/test-4.293a411e.jpg",
          height: 394,
          width: 700,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAqwK//8QAGxAAAgEFAAAAAAAAAAAAAAAAAQITABEUIkH/2gAIAQEAAT8AaTLRpLKHGoHRX//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAgEBPwA1v//EABcRAAMBAAAAAAAAAAAAAAAAAAABAjH/2gAIAQMBAT8AeSf/2Q==",
          blurWidth: 8,
          blurHeight: 5,
        },
        b = a(56726);
      let w = (e) => {
        let {
          title: t,
          excerpt: a,
          imageSrc: s,
          category: n,
          categoryColor: r = "bg-purple-100 text-purple-700",
          isHighlighted: o = !1,
        } = e;
        return (0, i.jsxs)(m.E.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: !0 },
          className: (0, d.m6)(
            "rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all",
            o ? "col-span-1 sm:col-span-2 lg:col-span-3" : "col-span-1",
          ),
          children: [
            (0, i.jsx)("div", {
              className: "relative overflow-hidden rounded-t-3xl",
              children: (0, i.jsx)(h.default, {
                src: s,
                alt: t,
                width: o ? 800 : 400,
                height: o ? 400 : 300,
                className:
                  "w-full object-cover transition-transform duration-300 group-hover:scale-105",
                style: { height: o ? "300px" : "220px", maxHeight: "400px" },
                unoptimized: !0,
              }),
            }),
            (0, i.jsxs)("div", {
              className: "p-3 sm:p-4",
              children: [
                n &&
                  (0, i.jsx)("span", {
                    className:
                      "inline-block text-xs font-medium px-2 sm:px-3 py-1 mb-2 rounded-full ".concat(
                        r,
                      ),
                    children: n,
                  }),
                (0, i.jsx)("h2", {
                  className:
                    "font-bold text-gray-100 mb-2 hover:text-blue-600 transition-colors ".concat(
                      o
                        ? "text-xl sm:text-2xl lg:text-3xl"
                        : "text-lg sm:text-xl",
                    ),
                  children: (0, i.jsx)(
                    b.Z,
                    { message: "Coming Soon", children: t },
                    t,
                  ),
                }),
                (0, i.jsx)("p", {
                  className:
                    "text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2",
                  children: a,
                }),
                (0, i.jsx)("div", {
                  className: "flex items-center mt-2 sm:mt-4",
                  children: (0, i.jsx)("div", {
                    children: (0, i.jsx)("span", {
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
      var j = () => {
        let [e, t] = (0, l.useState)(0),
          [a, s] = (0, l.useState)(!1),
          n = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
          let e = () => {
            s(window.innerWidth < 640);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        }, []);
        let r = [
            {
              title: "How To Choose The Perfect AI Chatbot For Your Business",
              excerpt:
                "Learn how to select the ideal AI chatbot to enhance your customer service, automate responses, and improve operational efficiency for your business.",
              imageSrc: g,
              category: "AI Solutions",
              categoryColor: "bg-purple-100 text-purple-700",
              isHighlighted: !0,
            },
            {
              title: "AI in Healthcare: Revolutionizing Patient Care",
              excerpt:
                "Explore how AI is revolutionizing healthcare, improving diagnostics, patient care, and operational efficiency across the globe.",
              imageSrc: f,
              category: "Healthcare Innovation",
              categoryColor: "bg-green-100 text-green-700",
            },
            {
              title: "The Role of AI in E-Commerce: Enhancing User Experience",
              excerpt:
                "AI is transforming the e-commerce landscape by delivering personalized shopping experiences, optimizing inventory, and boosting sales. Learn how businesses can thrive using AI.",
              imageSrc: y,
              category: "E-Commerce",
              categoryColor: "bg-pink-100 text-pink-700",
            },
            {
              title: "How Deep Learning Is Changing the Financial Industry",
              excerpt:
                "Discover how deep learning models are reshaping financial services by enabling better fraud detection, risk management, and predictive market insights.",
              imageSrc: v,
              category: "FinTech",
              categoryColor: "bg-blue-100 text-blue-700",
            },
          ],
          o = () => {
            t((e) => (e === r.length - 1 ? 0 : e + 1));
          },
          c = () => {
            t((e) => (0 === e ? r.length - 1 : e - 1));
          },
          d = (e) => {
            t(e);
          };
        return (
          (0, l.useEffect)(() => {
            let e;
            if (!n.current || !a) return;
            let t = (t) => {
                e = t.touches[0].clientX;
              },
              i = (t) => {
                let a = t.changedTouches[0].clientX,
                  i = e - a;
                Math.abs(i) > 50 && (i > 0 ? o() : c());
              },
              s = n.current;
            return (
              s.addEventListener("touchstart", t),
              s.addEventListener("touchend", i),
              () => {
                s.removeEventListener("touchstart", t),
                  s.removeEventListener("touchend", i);
              }
            );
          }, [a, o, c]),
          (0, i.jsxs)("section", {
            className: "py-8 sm:py-12 px-4 ",
            children: [
              (0, i.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, i.jsx)("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: "Our Latest Blogs",
                  }),
                  (0, i.jsx)("div", {
                    className: "mt-4 flex justify-center",
                    children: (0, i.jsx)("div", {
                      className:
                        "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                    }),
                  }),
                  (0, i.jsx)("p", {
                    className: "mt-4 text-gray-300 max-w-3xl mx-auto",
                    children:
                      "At DataTroops.ai, we share valuable insights on AI-driven solutions, the latest in tech innovations, and how AI is shaping industries. Stay updated with our articles.",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "max-w-7xl mx-auto",
                children: a
                  ? (0, i.jsxs)("div", {
                      className: "relative",
                      ref: n,
                      children: [
                        (0, i.jsx)("div", {
                          className: "overflow-hidden",
                          children: (0, i.jsx)("div", {
                            className:
                              "flex transition-transform duration-300 ease-in-out",
                            style: {
                              transform: "translateX(-".concat(100 * e, "%)"),
                            },
                            children: r.map((e) =>
                              (0, i.jsx)(
                                "div",
                                {
                                  className: "w-full flex-shrink-0",
                                  children: (0, i.jsx)(w, { ...e }),
                                },
                                e.title,
                              ),
                            ),
                          }),
                        }),
                        (0, i.jsx)("button", {
                          onClick: c,
                          className:
                            "absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10",
                          "aria-label": "Previous slide",
                          children: (0, i.jsx)(x.G, {
                            icon: p.acZ,
                            className: "h-4 w-4 text-gray-700",
                          }),
                        }),
                        (0, i.jsx)("button", {
                          onClick: o,
                          className:
                            "absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10",
                          "aria-label": "Next slide",
                          children: (0, i.jsx)(x.G, {
                            icon: p.eFW,
                            className: "h-4 w-4 text-gray-700",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "flex justify-center mt-4 gap-2",
                          children: r.map((t, a) =>
                            (0, i.jsx)(
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
                  : (0, i.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                      children: r.map((e) => (0, i.jsx)(w, { ...e }, e.title)),
                    }),
              }),
            ],
          })
        );
      };
      let N = {
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
        E = [
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
      var B = (e) => {
          var t;
          let { className: a } = e,
            [s, n] = (0, l.useState)("build"),
            [r, o] = (0, l.useState)(null),
            c = (e) => {
              n(e), o(null);
            },
            A = N[s];
          return (0, i.jsx)("section", {
            className: (0, d.m6)("w-full py-10 px-4 md:px-8 lg:px-12", a),
            children: (0, i.jsxs)("div", {
              className: "max-w-6xl mx-auto",
              children: [
                (0, i.jsx)("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100",
                  children:
                    "Everything you need to automate your customer service",
                }),
                (0, i.jsxs)(m.E.div, {
                  className:
                    "border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-sm bg-[var(--color-card)]",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  children: [
                    (0, i.jsx)("div", {
                      className: "flex flex-wrap md:flex-nowrap gap-3 mb-8",
                      children: E.map((e) =>
                        (0, i.jsxs)(
                          m.E.button,
                          {
                            className: (0, d.m6)(
                              "flex-1 rounded-xl p-4 border transition-all duration-300 text-center",
                              s === e.id
                                ? "bg-[var(--color-primary)] text-white border-[var(--color-secondary)] shadow-sm"
                                : "bg-[var(--color-card)] text-[var(--color-text-dark)] border-gray-200 hover:bg-gray-50",
                            ),
                            onClick: () => c(e.id),
                            whileHover: { scale: 1.03 },
                            whileTap: { scale: 0.98 },
                            children: [
                              (0, i.jsx)("h3", {
                                className: "font-bold text-xl mb-1",
                                children: e.title,
                              }),
                              (0, i.jsx)("p", {
                                className: "text-sm opacity-80 hidden sm:block",
                                children: e.description,
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("h3", {
                          className:
                            "text-xl font-bold mb-6 text-[var(--color-text-dark)]",
                          children: [
                            "Choose Your LLM or NLP for",
                            " ",
                            null === (t = E.find((e) => e.id === s)) ||
                            void 0 === t
                              ? void 0
                              : t.title,
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
                          children: A.map((e) =>
                            (0, i.jsxs)(
                              m.E.div,
                              {
                                className: (0, d.m6)(
                                  "flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all",
                                  (e.id, "border-gray-200"),
                                ),
                                onClick: () => o(e.id),
                                whileHover: { scale: 1.05 },
                                whileTap: { scale: 0.98 },
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      "w-12 h-12 flex items-center justify-center mb-2",
                                    children: (0, i.jsx)(h.default, {
                                      unoptimized: !0,
                                      src: e.icon,
                                      alt: e.iconAlt,
                                      className: "w-full h-full object-contain",
                                    }),
                                  }),
                                  (0, i.jsx)("span", {
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
        C = a(34446),
        k = a(53833),
        I = () => {
          let [e, t] = (0, l.useState)([]),
            [a, s] = (0, l.useState)(!1),
            n = (0, l.useRef)(null),
            r = (0, l.useRef)(null),
            [o, c] = (0, l.useState)(!1),
            [d, A] = (0, l.useState)(!1),
            [u, g] = (0, l.useState)(null);
          (0, l.useEffect)(() => {
            g(window.innerWidth <= 768);
          }, []);
          let [f, y] = (0, l.useState)(""),
            [v, w] = (0, l.useState)(!1),
            [j, N] = (0, l.useState)({ email: "", phone: "", query: "" }),
            [E, B] = (0, l.useState)(""),
            [I, M] = (0, l.useState)(""),
            L = () =>
              new Date().toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: !0,
              }),
            S = (e) => {
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
            D = async () => {
              t([]), A(!0);
              let e = async () => {
                let e = 0;
                for (; e < W.length; ) {
                  let t = W[e];
                  "bot" === t.type &&
                    (s(!0),
                    await new Promise((e) => setTimeout(e, 1500)),
                    s(!1)),
                    S({ type: t.type, text: t.text, time: L() }),
                    await new Promise((e) => setTimeout(e, 1e3)),
                    e++;
                }
              };
              await e(), A(!1);
            };
          (0, l.useEffect)(() => {
            if (!o && r.current) {
              let e = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  t.isIntersecting && c(!0);
                },
                { root: null, rootMargin: "0px", threshold: 0.3 },
              );
              return (
                e.observe(r.current),
                () => {
                  r.current && e.unobserve(r.current);
                }
              );
            }
          }, [o]),
            (0, l.useEffect)(() => {
              o && D();
            }, [o]),
            (0, l.useEffect)(() => {
              n.current && (n.current.scrollTop = n.current.scrollHeight);
            }, [e, a]);
          let F = (e) =>
              e.split("\n").map((t, a) =>
                (0, i.jsxs)(
                  "span",
                  {
                    children: [
                      t,
                      a !== e.split("\n").length - 1 && (0, i.jsx)("br", {}),
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
                G(e) ? B("") : B("Please enter a valid email address.");
            },
            H = (e) => {
              N((t) => ({ ...t, phone: e })),
                Q(e) ? M("") : M("Please enter a valid phone number.");
            },
            T = () =>
              ("" !== j.email.trim() || "" !== j.phone.trim()) && !E && !I,
            P = () => {
              if (f.trim() && !d && !a && !v && o) {
                N((e) => ({ ...e, query: f })), y(""), w(!0);
                return;
              }
            },
            Z = async () => {
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
                S({ type: "user", text: t, time: L() }),
                  S({
                    type: "bot",
                    text: "Thanks for your details! Our team will reach out to you soon to provide the resolution on your query.",
                    time: L(),
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
          return (0, i.jsxs)("section", {
            ref: r,
            className: "w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden",
            children: [
              (0, i.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, i.jsxs)("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: [" ", "DataTroops.ai Healthcare Assistance"],
                  }),
                  (0, i.jsx)("div", {
                    className: "mt-4 flex justify-center",
                    children: (0, i.jsx)("div", {
                      className:
                        "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                    }),
                  }),
                  (0, i.jsx)("p", {
                    className: "mt-4 text-gray-300 max-w-3xl mx-auto",
                    children:
                      "We design and develop AI-powered solutions that automate workflows, uncover insights, and supercharge decision-making. From Generative AI to NLP and Computer Vision, our solutions are tailored to your goals and industry needs.",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-full lg:w-1/2",
                    children: (0, i.jsxs)("div", {
                      className:
                        "max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "bg-[var(--color-7B2CBF)] text-white p-4 flex items-center justify-between",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, i.jsx)(x.G, {
                                  icon: p.A35,
                                  className: "h-4 w-4",
                                }),
                                (0, i.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "h-6 w-6 rounded-full bg-white flex items-center justify-center",
                                      children: (0, i.jsx)(h.default, {
                                        unoptimized: !0,
                                        src: k.Z,
                                        alt: "DataTroops Logo",
                                        width: 24,
                                        height: 24,
                                      }),
                                    }),
                                    (0, i.jsx)("span", {
                                      className: "font-medium",
                                      children: "DataTroops.ai Healthcare",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "flex items-center gap-4",
                              children: [
                                (0, i.jsx)(x.G, {
                                  icon: p.Uwo,
                                  className: "h-4 w-4",
                                }),
                                (0, i.jsx)(x.G, {
                                  icon: p.NBC,
                                  className: "h-4 w-4",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          ref: n,
                          className: "p-4 h-96 overflow-y-auto scroll-smooth",
                          style: { scrollBehavior: "smooth" },
                          children: [
                            o
                              ? (0, i.jsx)(C.M, {
                                  children: e.map((e) =>
                                    (0, i.jsx)(
                                      m.E.div,
                                      {
                                        className: "flex flex-col mb-4",
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: 10 },
                                        transition: { duration: 0.3 },
                                        children:
                                          "user" === e.type
                                            ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                  (0, i.jsx)("div", {
                                                    className:
                                                      "flex justify-end mb-1",
                                                    children: (0, i.jsx)(
                                                      "div",
                                                      {
                                                        className:
                                                          "bg-[var(--color-9D4EDD)] text-white rounded-3xl py-3 px-4 max-w-xs",
                                                        children: (0, i.jsx)(
                                                          "p",
                                                          {
                                                            children: F(e.text),
                                                          },
                                                        ),
                                                      },
                                                    ),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                    className:
                                                      "text-xs text-gray-500 text-right",
                                                    children: e.time,
                                                  }),
                                                ],
                                              })
                                            : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                  (0, i.jsxs)("div", {
                                                    className: "flex mb-1",
                                                    children: [
                                                      (0, i.jsx)("div", {
                                                        className: "mr-2",
                                                        children: (0, i.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "bg-white h-8 w-8 rounded-full flex items-center justify-center",
                                                            children: (0,
                                                            i.jsx)(h.default, {
                                                              unoptimized: !0,
                                                              src: k.Z,
                                                              alt: "DataTroops Logo",
                                                              width: 24,
                                                              height: 24,
                                                            }),
                                                          },
                                                        ),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                        className:
                                                          "bg-gray-100 rounded-3xl py-3 px-4 max-w-xs",
                                                        children: (0, i.jsx)(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-gray-800",
                                                            children: F(e.text),
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, i.jsx)("div", {
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
                              : (0, i.jsx)("div", {
                                  className:
                                    "flex items-center justify-center h-full",
                                  children:
                                    null === u
                                      ? null
                                      : (0, i.jsx)("p", {
                                          className:
                                            "text-gray-500 text-center",
                                          children: u
                                            ? "Tap to start conversation"
                                            : "Scroll down to view the conversation",
                                        }),
                                }),
                            a &&
                              (0, i.jsxs)(m.E.div, {
                                className: "flex mb-4",
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 10 },
                                transition: { duration: 0.3 },
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "mr-2",
                                    children: (0, i.jsx)("div", {
                                      className:
                                        "bg-white h-8 w-8 rounded-full flex items-center justify-center",
                                      children: (0, i.jsx)(h.default, {
                                        unoptimized: !0,
                                        src: k.Z,
                                        alt: "DataTroops Logo",
                                        width: 24,
                                        height: 24,
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "bg-gray-100 rounded-3xl py-3 px-4 max-w-xs",
                                    children: (0, i.jsxs)("div", {
                                      className: "flex space-x-1",
                                      children: [
                                        (0, i.jsx)("div", {
                                          className:
                                            "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                          style: { animationDelay: "0ms" },
                                        }),
                                        (0, i.jsx)("div", {
                                          className:
                                            "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                          style: { animationDelay: "200ms" },
                                        }),
                                        (0, i.jsx)("div", {
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
                        (0, i.jsxs)("div", {
                          className: "p-4 border-t border-gray-200",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "flex",
                              children: [
                                (0, i.jsx)("input", {
                                  type: "text",
                                  placeholder: "Type your message...",
                                  className:
                                    "flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[var(--color-7B2CBF)] text-black",
                                  value: f,
                                  onChange: (e) => {
                                    y(e.target.value);
                                  },
                                  onKeyPress: (e) => {
                                    "Enter" !== e.key || v || P();
                                  },
                                  disabled: d || a || v,
                                }),
                                (0, i.jsx)("button", {
                                  className:
                                    "bg-[var(--color-7B2CBF)] text-white px-4 rounded-r-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                                  onClick: P,
                                  disabled: d || a || v,
                                  children: (0, i.jsx)(x.G, {
                                    icon: p.XCy,
                                    className: "h-5 w-5",
                                  }),
                                }),
                              ],
                            }),
                            v &&
                              (0, i.jsxs)("div", {
                                className:
                                  "mt-4 p-4 bg-gray-50 rounded-md text-black",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className: "text-lg font-semibold mb-2",
                                    children:
                                      "Almost done! Please provide your contact info.",
                                  }),
                                  (0, i.jsx)("input", {
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
                                    (0, i.jsx)("p", {
                                      className: "text-red-500 text-sm mb-2",
                                      children: E,
                                    }),
                                  (0, i.jsx)("input", {
                                    type: "tel",
                                    placeholder: "Your phone number",
                                    className:
                                      "w-full p-2 mb-1 border rounded ".concat(
                                        I
                                          ? "border-red-500"
                                          : "border-gray-300",
                                      ),
                                    value: j.phone,
                                    onChange: (e) => H(e.target.value),
                                  }),
                                  I &&
                                    (0, i.jsx)("p", {
                                      className: "text-red-500 text-sm mb-2",
                                      children: I,
                                    }),
                                  (0, i.jsx)("button", {
                                    className:
                                      "bg-[var(--color-7B2CBF)] text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed",
                                    onClick: Z,
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
                  (0, i.jsxs)("div", {
                    className: "w-full lg:w-1/2 space-y-6",
                    children: [
                      (0, i.jsx)(m.E.h2, {
                        className:
                          "text-3xl md:text-4xl font-bold text-gray-100",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5 },
                        children: "Put your customer service on auto-pilot",
                      }),
                      (0, i.jsx)(m.E.p, {
                        className: "text-gray-100",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.1 },
                        children:
                          "Effortlessly resolve repetitive customer queries with our no-code generative AI-powered chatbot that can be fine-tuned on your existing content.",
                      }),
                      (0, i.jsx)(m.E.p, {
                        className: "text-gray-100",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.2 },
                        children:
                          "Enhance your self-service resolution rate, reduce average handling time and cut down on operational cost with human-like conversations, powered by generative AI.",
                      }),
                      (0, i.jsx)(m.E.div, {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.3 },
                        children: (0, i.jsx)(b.Z, {
                          message: "Coming Soon",
                          children: (0, i.jsx)("button", {
                            className:
                              "bg-[var(--color-5A189A)] hover:bg-[var(--color-7B2CBF)] text-gray-100 px-6 py-3 rounded-md font-medium transition-colors",
                            onClick: () => !o && c(!0),
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
        M = a(87138),
        L = a(37394);
      let S = [
        {
          id: 1,
          type: "case-study",
          company: "FinNova Bank",
          logo: L.Z,
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
          backgroundImage: g,
        },
        {
          id: 2,
          type: "testimonial",
          company: "HealthMate",
          logo: L.Z,
          title:
            "HealthMate scaled multilingual patient support using conversational AI",
          backgroundImage: g,
        },
        {
          id: 3,
          type: "case-study",
          company: "LogiChain",
          logo: L.Z,
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
          backgroundImage: g,
        },
        {
          id: 4,
          type: "testimonial",
          company: "SkillForge",
          logo: L.Z,
          title: "SkillForge delivers 24/7 course assistance with our AI tutor",
          backgroundImage: g,
        },
        {
          id: 5,
          type: "case-study",
          company: "RetailX",
          logo: L.Z,
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
          backgroundImage: g,
        },
      ];
      var W = () => {
          let [e, t] = (0, l.useState)(0),
            a = S[e],
            s = () => {
              t((e) => (0 === e ? S.length - 1 : e - 1));
            },
            n = () => {
              t((e) => (e === S.length - 1 ? 0 : e + 1));
            };
          return (0, i.jsx)("section", {
            className: "py-16 px-4",
            children: (0, i.jsxs)("div", {
              className: "container mx-auto",
              children: [
                (0, i.jsx)("div", {
                  className: "hidden md:block",
                  children: (0, i.jsx)(
                    () =>
                      (0, i.jsx)("div", {
                        className: "relative w-full overflow-hidden",
                        children: (0, i.jsxs)(
                          m.E.div,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { duration: 0.5 },
                            className: "w-full",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "text-center mb-16",
                                children: [
                                  (0, i.jsx)("h2", {
                                    className:
                                      "text-4xl font-bold text-white mb-4",
                                    children: "Success Stories",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "mt-4 flex justify-center",
                                    children: (0, i.jsx)("div", {
                                      className:
                                        "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                                    }),
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "mt-4 text-gray-300 max-w-3xl mx-auto",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-12 gap-4",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "md:col-span-5 p-6 md:p-12 flex flex-col justify-center",
                                    children: [
                                      (0, i.jsx)("h2", {
                                        className:
                                          "text-3xl md:text-4xl font-bold mb-4 text-gray-100",
                                        children:
                                          "The results speak for themselves, just like our customers",
                                      }),
                                      (0, i.jsxs)(M.default, {
                                        href: "/success-stories",
                                        className:
                                          "text-gray-300 font-medium flex items-center mt-4 mb-8 hover:underline",
                                        children: [
                                          "View more success stories",
                                          (0, i.jsx)(x.G, {
                                            icon: p.eFW,
                                            className: "ml-2 h-4 w-4",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className: "flex space-x-4 mt-auto",
                                        children: [
                                          (0, i.jsx)("button", {
                                            onClick: s,
                                            className:
                                              "h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:text-[var(--color-7B2CBF)] transition-colors",
                                            children: (0, i.jsx)(x.G, {
                                              icon: p.acZ,
                                              className:
                                                "h-4 w-4 hover:text-[var(--color-7B2CBF)]",
                                            }),
                                          }),
                                          (0, i.jsx)("button", {
                                            onClick: n,
                                            className:
                                              "h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:text-[var(--color-7B2CBF)] transition-colors",
                                            children: (0, i.jsx)(x.G, {
                                              icon: p.eFW,
                                              className:
                                                "h-4 w-4 hover:text-[var(--color-7B2CBF)]",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "md:col-span-7 relative",
                                    children: (0, i.jsxs)("div", {
                                      className:
                                        "relative rounded-2xl overflow-hidden bg-white shadow-lg",
                                      children: [
                                        (0, i.jsxs)("div", {
                                          className: "relative h-64 md:h-96",
                                          children: [
                                            a.backgroundImage &&
                                              (0, i.jsx)("div", {
                                                className: "absolute inset-0",
                                                children: (0, i.jsx)(
                                                  h.default,
                                                  {
                                                    unoptimized: !0,
                                                    src: a.backgroundImage,
                                                    alt: a.company,
                                                    fill: !0,
                                                    objectFit: "cover",
                                                    priority: !0,
                                                    className: "filter",
                                                  },
                                                ),
                                              }),
                                            (0, i.jsx)("div", {
                                              className:
                                                "absolute inset-0 flex items-center justify-center",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsxs)("div", {
                                          className: "p-6",
                                          children: [
                                            (0, i.jsx)("div", {
                                              className:
                                                "inline-block px-3 py-1 bg-[var(--color-E0AAFF)] text-[var(--color-7B2CBF)] text-sm font-medium rounded-md mb-3",
                                              children:
                                                "case-study" === a.type
                                                  ? "Case study"
                                                  : "Testimonial",
                                            }),
                                            (0, i.jsx)("h3", {
                                              className:
                                                "text-xl md:text-2xl font-bold mb-3 text-gray-800",
                                              children: a.title,
                                            }),
                                            a.description &&
                                              (0, i.jsx)("p", {
                                                className: "text-gray-700 mb-6",
                                                children: a.description,
                                              }),
                                            a.stats &&
                                              (0, i.jsx)("div", {
                                                className:
                                                  "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                                                children: a.stats.map((e, t) =>
                                                  (0, i.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "bg-gray-100 p-4 rounded-lg",
                                                      children: [
                                                        (0, i.jsx)("div", {
                                                          className:
                                                            "text-xs text-indigo-800 font-medium mb-1",
                                                          children: e.label,
                                                        }),
                                                        (0, i.jsx)("div", {
                                                          className:
                                                            "text-3xl font-bold mb-1",
                                                          children: e.value,
                                                        }),
                                                        (0, i.jsx)("div", {
                                                          className:
                                                            "text-sm text-gray-800",
                                                          children:
                                                            e.description,
                                                        }),
                                                      ],
                                                    },
                                                    t,
                                                  ),
                                                ),
                                              }),
                                            (0, i.jsx)("span", {
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
                (0, i.jsx)(
                  () =>
                    (0, i.jsxs)("div", {
                      className: "w-full md:hidden",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "text-center mb-8",
                          children: [
                            (0, i.jsx)("h2", {
                              className: "text-3xl font-bold mb-4",
                              children:
                                "The results speak for themselves, just like our customers",
                            }),
                            (0, i.jsxs)(M.default, {
                              href: "/success-stories",
                              className:
                                "text-indigo-600 font-medium flex items-center justify-center mt-4 hover:underline",
                              children: [
                                "View more success stories",
                                (0, i.jsx)(x.G, {
                                  icon: p.eFW,
                                  className: "ml-2 h-4 w-4",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "grid grid-cols-1 gap-6",
                          children: S.map((e) =>
                            (0, i.jsxs)(
                              "div",
                              {
                                className:
                                  "bg-white rounded-2xl overflow-hidden shadow-lg",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "relative h-48",
                                    children: [
                                      e.backgroundImage &&
                                        (0, i.jsx)("div", {
                                          className: "absolute inset-0",
                                          children: (0, i.jsx)(h.default, {
                                            unoptimized: !0,
                                            src: e.backgroundImage,
                                            alt: e.company,
                                            fill: !0,
                                            objectFit: "cover",
                                          }),
                                        }),
                                      (0, i.jsx)("div", {
                                        className: "absolute bottom-4 left-4",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "p-5",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-md mb-3",
                                        children:
                                          "case-study" === e.type
                                            ? "Case study"
                                            : "Testimonial",
                                      }),
                                      (0, i.jsx)("h3", {
                                        className:
                                          "text-lg font-bold mb-4 text-gray-800",
                                        children: e.title,
                                      }),
                                      (0, i.jsx)("span", {
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
        },
        D = a(72289),
        F = a(55382);
      function G() {
        let e = (0, D._)(),
          t = (0, l.useRef)(null),
          a = (0, F.Y)(t, { once: !0, amount: 0.1 });
        (0, l.useEffect)(() => {
          a && e.start("visible");
        }, [a, e]);
        let s = {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          },
        };
        return (0, i.jsx)("section", {
          ref: t,
          className: "py-16 overflow-hidden",
          children: (0, i.jsxs)(m.E.div, {
            className: "container mx-auto px-4",
            initial: "hidden",
            animate: e,
            variants: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, staggerChildren: 0.1 },
              },
            },
            children: [
              (0, i.jsx)(m.E.div, {
                className: "flex justify-center mb-6",
                variants: s,
                children: (0, i.jsxs)(m.E.div, {
                  className:
                    "bg-[var(--color-7B2CBF)] rounded-full px-6 py-2 inline-flex items-center",
                  whileHover: { scale: 1.05 },
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                  children: [
                    (0, i.jsx)("svg", {
                      className: "w-6 h-6 text-white mr-2",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                        clipRule: "evenodd",
                      }),
                    }),
                    (0, i.jsx)("span", {
                      className: "text-gray-100 font-medium",
                      children: "FAQ",
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(m.E.h2, {
                className:
                  "text-4xl md:text-6xl font-bold text-white text-center mb-8",
                variants: {
                  hidden: { opacity: 0, y: -20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                },
                children: "Frequently Asked Questions",
              }),
              (0, i.jsx)(m.E.p, {
                className:
                  "text-xl text-white text-center mb-12 max-w-3xl mx-auto",
                variants: s,
                children:
                  "Find quick answers to common questions about our AI Scheduling Assistant.",
              }),
              (0, i.jsx)(m.E.div, {
                className: "max-w-3xl mx-auto",
                children: [
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
                    question:
                      "How long does it take to deploy a custom AI assistant?",
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
                ].map((e, t) =>
                  (0, i.jsx)(
                    m.E.div,
                    {
                      variants: s,
                      children: (0, i.jsx)(Q, {
                        question: e.question,
                        answer: e.answer,
                      }),
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        });
      }
      function Q(e) {
        let { question: t, answer: a } = e,
          [s, n] = (0, l.useState)(!1);
        return (0, i.jsxs)("div", {
          className: "mb-4 w-full",
          children: [
            (0, i.jsxs)(m.E.button, {
              onClick: () => n(!s),
              className:
                "flex justify-between items-center w-full p-6 text-left rounded-lg\n          ".concat(
                  s
                    ? "rounded-b-none bg-[var(--color-5A189A)]"
                    : "bg-[var(--color-240046)] bg-opacity-50",
                  " \n          text-white hover:bg-opacity-80 transition-all\n          focus:outline-none focus:ring-2 focus:ring-[var(--color-7B2CBF)]",
                ),
              whileHover: { scale: 1.01 },
              whileTap: { scale: 0.99 },
              transition: { type: "spring", stiffness: 300, damping: 17 },
              children: [
                (0, i.jsx)("h3", {
                  className: "text-xl md:text-2xl font-medium",
                  children: t,
                }),
                (0, i.jsx)(m.E.div, {
                  className:
                    "text-white text-xl flex-shrink-0 ml-4 bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center",
                  animate: s ? "open" : "closed",
                  variants: {
                    closed: { rotate: 0 },
                    open: {
                      rotate: 180,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                  },
                  children: s ? (0, i.jsx)(H, {}) : (0, i.jsx)(R, {}),
                }),
              ],
            }),
            (0, i.jsx)(C.M, {
              initial: !1,
              children:
                s &&
                (0, i.jsx)(m.E.div, {
                  className:
                    "p-6 text-white bg-[var(--color-240046)] bg-opacity-30 rounded-b-lg overflow-hidden",
                  initial: "hidden",
                  animate: "visible",
                  exit: "hidden",
                  variants: {
                    hidden: {
                      height: 0,
                      opacity: 0,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                    visible: {
                      height: "auto",
                      opacity: 1,
                      transition: { duration: 0.4, ease: "easeInOut" },
                    },
                  },
                  children: (0, i.jsx)("p", {
                    className: "text-lg",
                    children: a,
                  }),
                }),
            }),
          ],
        });
      }
      function R() {
        return (0, i.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M10 4V16M4 10H16",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      function H() {
        return (0, i.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M4 10H16",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      let T = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, i.jsx)("path", {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            }),
          }),
        P = () =>
          (0, i.jsxs)("svg", {
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
              (0, i.jsx)("path", {
                d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-11a2.5 2.5 0 0 1 2.81-2.5L9.5 2Z",
              }),
              (0, i.jsx)("path", {
                d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-11a2.5 2.5 0 0 0-2.81-2.5L14.5 2Z",
              }),
              (0, i.jsx)("path", {
                d: "M12 4.5a2.5 2.5 0 0 0-5-.44A2.5 2.5 0 0 0 4.5 6.5v11a2.5 2.5 0 0 0 5 .44 2.5 2.5 0 0 0 2.5-2.44v-11Z",
              }),
              (0, i.jsx)("path", {
                d: "M12 4.5a2.5 2.5 0 0 1 5-.44 2.5 2.5 0 0 1 2.5 2.44v11a2.5 2.5 0 0 1-5 .44 2.5 2.5 0 0 1-2.5-2.44v-11Z",
              }),
            ],
          }),
        Z = () =>
          (0, i.jsxs)("svg", {
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
              (0, i.jsx)("rect", {
                width: "18",
                height: "10",
                x: "3",
                y: "11",
                rx: "2",
              }),
              (0, i.jsx)("circle", { cx: "12", cy: "5", r: "2" }),
              (0, i.jsx)("path", { d: "M12 7v4" }),
              (0, i.jsx)("line", { x1: "8", x2: "8", y1: "16", y2: "16" }),
              (0, i.jsx)("line", { x1: "16", x2: "16", y1: "16", y2: "16" }),
            ],
          }),
        Y = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, i.jsx)("polygon", {
              points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            }),
          }),
        O = () =>
          (0, i.jsxs)("svg", {
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
              (0, i.jsx)("path", {
                d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
              }),
              (0, i.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
            ],
          }),
        U = () =>
          (0, i.jsxs)("svg", {
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
              (0, i.jsx)("path", { d: "M3 3v18h18" }),
              (0, i.jsx)("path", { d: "m19 9-5 5-4-4-3 3" }),
            ],
          }),
        V = (e) => {
          let { title: t, description: a, icon: s } = e;
          return (0, i.jsx)(
            b.Z,
            {
              message: "Coming Soon",
              children: (0, i.jsxs)("div", {
                className:
                  "bg-gray-900 bg-opacity-50 rounded-lg p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-purple-500",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "bg-gradient-to-r from-[#5A189A] to-[#7B2CBF] p-4 rounded-lg mb-6",
                    children: (0, i.jsx)(s, {}),
                  }),
                  (0, i.jsx)("h3", {
                    className: "text-white text-xl font-bold mb-4 text-center",
                    children: t,
                  }),
                  (0, i.jsx)("p", {
                    className: "text-gray-300 text-center",
                    children: a,
                  }),
                ],
              }),
            },
            t,
          );
        };
      function z() {
        return (0, i.jsx)("div", {
          className: " py-16 px-4",
          children: (0, i.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
              (0, i.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, i.jsx)("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: "What We Do",
                  }),
                  (0, i.jsx)("div", {
                    className: "mt-4 flex justify-center",
                    children: (0, i.jsx)("div", {
                      className:
                        "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                    }),
                  }),
                  (0, i.jsx)("p", {
                    className: "mt-4 text-gray-300 max-w-3xl mx-auto",
                    children:
                      "At DataTroops.ai, we specialize in developing state-of-the-art AI solutions that accelerate business operations, enhance decision-making, and automate tasks across industries. Whether you're looking to integrate chatbots, build custom AI models, or implement advanced computer vision systems, we have you covered.",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: [
                  {
                    icon: T,
                    title: "Generative AI",
                    description:
                      "Unlock the creative potential of AI with generative models that can craft unique content, designs, and strategies specifically for your business needs. Harness the power of AI to generate innovative solutions across multiple domains.",
                  },
                  {
                    icon: P,
                    title: "Machine Learning",
                    description:
                      "Empower your data with machine learning algorithms that enable predictive analytics, smart pattern recognition, and decision-making based on actionable insights. Optimize performance and discover new opportunities.",
                  },
                  {
                    icon: Z,
                    title: "NLP & Chatbots",
                    description:
                      "Enhance user engagement through intelligent chatbots and NLP-powered systems that understand natural language, context, and user intent, delivering personalized experiences in real-time.",
                  },
                  {
                    icon: Y,
                    title: "AI Agents",
                    description:
                      "Automate your operations with autonomous AI agents capable of performing complex tasks, making decisions, and handling critical processes efficiently. Streamline workflows and boost productivity across your entire business.",
                  },
                  {
                    icon: O,
                    title: "Computer Vision",
                    description:
                      "Implement AI-driven image and video analysis systems that can detect, recognize, and interpret visual data. Improve accuracy, automation, and decision-making in fields like security, manufacturing, and healthcare.",
                  },
                  {
                    icon: U,
                    title: "Deep Learning",
                    description:
                      "Leverage the power of neural networks to tackle highly complex problems. From image recognition to predictive modeling, our deep learning solutions uncover hidden patterns and drive insights from large datasets.",
                  },
                ].map((e, t) =>
                  (0, i.jsx)(
                    V,
                    {
                      icon: e.icon,
                      title: e.title,
                      description: e.description,
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        });
      }
      var q = a(16733),
        K = a(50922),
        X = a(92940);
      let J = (0, a(78030).Z)("quote", [
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
      var _ = a(98324),
        $ = a(75137),
        ee = a(1336);
      a(54887);
      var et = a(71538),
        ea = [
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
          let a = (0, et.Z8)(`Primitive.${t}`),
            s = l.forwardRef((e, s) => {
              let { asChild: n, ...r } = e,
                o = n ? a : t;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, i.jsx)(o, { ...r, ref: s })
              );
            });
          return (s.displayName = `Primitive.${t}`), { ...e, [t]: s };
        }, {}),
        ei = a(10554);
      function es() {
        return () => {};
      }
      var en = "Avatar",
        [er, eo] = (0, _.b)(en),
        [el, ec] = er(en),
        ed = l.forwardRef((e, t) => {
          let { __scopeAvatar: a, ...s } = e,
            [n, r] = l.useState("idle");
          return (0, i.jsx)(el, {
            scope: a,
            imageLoadingStatus: n,
            onImageLoadingStatusChange: r,
            children: (0, i.jsx)(ea.span, { ...s, ref: t }),
          });
        });
      ed.displayName = en;
      var eA = "AvatarImage",
        em = l.forwardRef((e, t) => {
          let {
              __scopeAvatar: a,
              src: s,
              onLoadingStatusChange: n = () => {},
              ...r
            } = e,
            o = ec(eA, a),
            c = (function (e, t) {
              let { referrerPolicy: a, crossOrigin: i } = t,
                s = (0, ei.useSyncExternalStore)(
                  es,
                  () => !0,
                  () => !1,
                ),
                n = l.useRef(null),
                r = s
                  ? (n.current || (n.current = new window.Image()), n.current)
                  : null,
                [o, c] = l.useState(() => ex(r, e));
              return (
                (0, ee.b)(() => {
                  c(ex(r, e));
                }, [r, e]),
                (0, ee.b)(() => {
                  let e = (e) => () => {
                    c(e);
                  };
                  if (!r) return;
                  let t = e("loaded"),
                    s = e("error");
                  return (
                    r.addEventListener("load", t),
                    r.addEventListener("error", s),
                    a && (r.referrerPolicy = a),
                    "string" == typeof i && (r.crossOrigin = i),
                    () => {
                      r.removeEventListener("load", t),
                        r.removeEventListener("error", s);
                    }
                  );
                }, [r, i, a]),
                o
              );
            })(s, r),
            d = (0, $.W)((e) => {
              n(e), o.onImageLoadingStatusChange(e);
            });
          return (
            (0, ee.b)(() => {
              "idle" !== c && d(c);
            }, [c, d]),
            "loaded" === c ? (0, i.jsx)(ea.img, { ...r, ref: t, src: s }) : null
          );
        });
      em.displayName = eA;
      var eu = "AvatarFallback",
        eh = l.forwardRef((e, t) => {
          let { __scopeAvatar: a, delayMs: s, ...n } = e,
            r = ec(eu, a),
            [o, c] = l.useState(void 0 === s);
          return (
            l.useEffect(() => {
              if (void 0 !== s) {
                let e = window.setTimeout(() => c(!0), s);
                return () => window.clearTimeout(e);
              }
            }, [s]),
            o && "loaded" !== r.imageLoadingStatus
              ? (0, i.jsx)(ea.span, { ...n, ref: t })
              : null
          );
        });
      function ex(e, t) {
        return e
          ? t
            ? (e.src !== t && (e.src = t),
              e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
            : "error"
          : "idle";
      }
      eh.displayName = eu;
      let ep = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return t.filter(Boolean).join(" ");
        },
        eg = l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, i.jsx)(ed, {
            ref: t,
            className: ep(
              "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[var(--color-7B2CBF)] text-white",
              a,
            ),
            ...s,
          });
        });
      eg.displayName = ed.displayName;
      let ef = l.forwardRef((e, t) => {
        let { src: a, className: s, ...n } = e;
        return (0, i.jsx)(em, {
          ref: t,
          src: a || "/images/default-avatar.jpg",
          className: ep("h-full w-full object-cover", s),
          ...n,
        });
      });
      ef.displayName = em.displayName;
      let ey = l.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, i.jsx)(eh, {
          ref: t,
          className: ep(
            "flex h-full w-full items-center justify-center rounded-full bg-[var(--color-5A189A)] text-white",
            a,
          ),
          ...s,
        });
      });
      ey.displayName = eh.displayName;
      let ev = l.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, i.jsx)("div", {
          ref: t,
          className: ep(
            "rounded-xl border border-[var(--color-7B2CBF)] bg-[var(--color-10002B)] text-white shadow-lg",
            a,
          ),
          ...s,
        });
      });
      ev.displayName = "Card";
      let eb = [
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
        ew = (e) => {
          let { text: t } = e;
          return (0, i.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, i.jsx)(X.Z, {
                className: "text-[var(--color-E0AAFF)] h-5 w-5 mr-2",
              }),
              (0, i.jsx)("span", { className: "text-gray-100", children: t }),
            ],
          });
        };
      function ej() {
        let [e, t] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => (e + 1) % eb.length);
            }, 8e3);
            return () => clearInterval(e);
          }, []),
          (0, i.jsx)("section", {
            className: "relative py-4 overflow-hidden bg-[var(--color-10002B)]",
            children: (0, i.jsxs)("div", {
              className: "container mx-auto px-4 relative z-10",
              children: [
                (0, i.jsxs)("div", {
                  className: "max-w-3xl mx-auto text-center mb-16",
                  children: [
                    (0, i.jsxs)("h2", {
                      className: "text-4xl font-bold text-white mb-4",
                      children: [
                        "The Importance of",
                        " ",
                        (0, i.jsx)("span", {
                          className: "text-[var(--color-7B2CBF)]",
                          children: "AI Agents",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "mt-4 flex justify-center",
                      children: (0, i.jsx)("div", {
                        className:
                          "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "max-w-4xl mx-auto relative",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "overflow-hidden relative h-[350px] md:h-[300px]",
                      children: eb.map((t, a) =>
                        (0, i.jsx)(
                          m.E.div,
                          {
                            className:
                              "absolute inset-0 transition-opacity duration-500",
                            initial: { opacity: 0, scale: 0.95 },
                            animate: {
                              opacity: e === a ? 1 : 0,
                              scale: e === a ? 1 : 0.95,
                            },
                            children: (0, i.jsxs)(ev, {
                              className:
                                "h-full flex flex-col justify-between p-8 md:p-10",
                              children: [
                                (0, i.jsx)(J, {
                                  className:
                                    "text-[var(--color-E0AAFF)] h-12 w-12 mb-6",
                                }),
                                (0, i.jsxs)("p", {
                                  className:
                                    "text-lg md:text-xl italic mb-6 leading-relaxed text-gray-100",
                                  children: ["“", t.quote, "”"],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "flex items-center mt-auto",
                                  children: [
                                    (0, i.jsxs)(eg, {
                                      className: "mr-4",
                                      children: [
                                        (0, i.jsx)(ef, {
                                          src: t.avatar,
                                          alt: t.author,
                                        }),
                                        (0, i.jsx)(ey, {
                                          children: t.initials,
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      children: [
                                        (0, i.jsx)("h4", {
                                          className:
                                            "font-semibold text-gray-100",
                                          children: t.author,
                                        }),
                                        (0, i.jsxs)("p", {
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
                    (0, i.jsx)("div", {
                      className: "flex justify-center mt-8",
                      children: eb.map((a, s) =>
                        (0, i.jsx)(
                          "button",
                          {
                            className:
                              "w-3 h-3 rounded-full mx-1 transition-all ".concat(
                                e === s
                                  ? "bg-[var(--color-7B2CBF)] scale-125"
                                  : "bg-[var(--color-3C096C)]",
                              ),
                            onClick: () => t(s),
                            "aria-label": "View testimonial ".concat(s + 1),
                          },
                          s,
                        ),
                      ),
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "mt-16 flex flex-wrap justify-center gap-4 text-[var(--color-C77DFF)]",
                      children: [
                        (0, i.jsx)(ew, { text: "99.9% Uptime" }),
                        (0, i.jsx)(ew, { text: "End-to-end encryption" }),
                        (0, i.jsx)(ew, { text: "24/7 Support" }),
                        (0, i.jsx)(ew, { text: "Cost Effective" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var eN = a(56567);
      function eE() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(eN.Z, {}),
            (0, i.jsx)(n.default, {}),
            (0, i.jsx)(u, {}),
            (0, i.jsx)(z, {}),
            (0, i.jsx)(j, {}),
            (0, i.jsx)(s.Z, {}),
            (0, i.jsx)(ej, {}),
            (0, i.jsx)(B, {}),
            (0, i.jsx)(I, {}),
            (0, i.jsx)(W, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(K.default, {}),
            (0, i.jsx)(q.default, {}),
          ],
        });
      }
    },
    56726: function (e, t, a) {
      "use strict";
      var i = a(57437);
      t.Z = (e) => {
        let { message: t, children: a } = e;
        return (0, i.jsxs)("div", {
          className: "group relative inline-flex h-full",
          children: [
            a,
            (0, i.jsx)("div", {
              className:
                "absolute left-1/2 -translate-x-1/2 top-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 mt-2",
              children: (0, i.jsx)("div", {
                className:
                  "bg-[var(--color-10002B)] border border-purple-500/30 text-gray-300 text-xs py-1 px-3 tracking-widest uppercase font-medium shadow-lg shadow-purple-900/10 whitespace-nowrap",
                children: t,
              }),
            }),
          ],
        });
      };
    },
    72684: function (e, t, a) {
      "use strict";
      a.d(t, {
        W: function () {
          return o;
        },
      });
      var i = a(19047),
        s = a(76159),
        n = a(15447);
      function r(e, t) {
        [...t].reverse().forEach((a) => {
          let i = e.getVariant(a);
          i && (0, s.C)(e, i),
            e.variantChildren &&
              e.variantChildren.forEach((e) => {
                r(e, t);
              });
        });
      }
      function o() {
        let e = !1,
          t = new Set(),
          a = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(a, s) {
              (0, i.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              );
              let r = [];
              return (
                t.forEach((e) => {
                  r.push((0, n.d)(e, a, { transitionOverride: s }));
                }),
                Promise.all(r)
              );
            },
            set: (a) => (
              (0, i.k)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              ),
              t.forEach((e) => {
                Array.isArray(a)
                  ? r(e, a)
                  : "string" == typeof a
                    ? r(e, [a])
                    : (0, s.C)(e, a);
              })
            ),
            stop() {
              t.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), a.stop();
              }
            ),
          };
        return a;
      }
    },
    72289: function (e, t, a) {
      "use strict";
      a.d(t, {
        E: function () {
          return r;
        },
        _: function () {
          return o;
        },
      });
      var i = a(72684),
        s = a(30458),
        n = a(9033);
      function r() {
        let e = (0, s.h)(i.W);
        return (0, n.L)(e.mount, []), e;
      }
      let o = r;
    },
  },
  function (e) {
    e.O(
      0,
      [676, 958, 413, 950, 701, 59, 802, 922, 989, 971, 23, 744],
      function () {
        return e((e.s = 98658));
      },
    ),
      (_N_E = e.O());
  },
]);
