(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [554],
  {
    72214: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 46705));
    },
    57818: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return n.a;
        },
      });
      var r = a(50551),
        n = a.n(r);
    },
    50551: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = a(99920);
      a(57437), a(2265);
      let n = r._(a(40148));
      function s(e, t) {
        var a;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: a, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let s = { ...r, ...t };
        return (0, n.default)({
          ...s,
          modules: null == (a = s.loadableGenerated) ? void 0 : a.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    10912: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = a(55592);
      function n(e) {
        let { reason: t, children: a } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return a;
      }
    },
    40148: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = a(57437),
        n = a(2265),
        s = a(10912),
        i = a(61481);
      function o(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let l = {
          loader: () => Promise.resolve(o(() => null)),
          loading: null,
          ssr: !0,
        },
        c = function (e) {
          let t = { ...l, ...e },
            a = (0, n.lazy)(() => t.loader().then(o)),
            c = t.loading;
          function d(e) {
            let o = c
                ? (0, r.jsx)(c, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              l = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(i.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(a, { ...e }),
                    ],
                  })
                : (0, r.jsx)(s.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(a, { ...e }),
                  });
            return (0, r.jsx)(n.Suspense, { fallback: o, children: l });
          }
          return (d.displayName = "LoadableComponent"), d;
        };
    },
    61481: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = a(57437),
        n = a(58512);
      function s(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let a = (0, n.getExpectedRequestStore)("next/dynamic css"),
          s = [];
        if (a.reactLoadableManifest && t) {
          let e = a.reactLoadableManifest;
          for (let a of t) {
            if (!e[a]) continue;
            let t = e[a].files.filter((e) => e.endsWith(".css"));
            s.push(...t);
          }
        }
        return 0 === s.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: s.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: a.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e,
                ),
              ),
            });
      }
    },
    46705: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return j;
          },
        });
      var r = a(57437);
      function n() {
        return (0, r.jsxs)("section", {
          className:
            "relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#0F0521] to-[#1A0B2E] overflow-hidden px-4",
          children: [
            (0, r.jsx)("div", {
              className: "absolute inset-0 pointer-events-none z-0",
              children: (0, r.jsxs)("svg", {
                width: "100%",
                height: "100%",
                children: [
                  (0, r.jsx)("defs", {
                    children: (0, r.jsx)("pattern", {
                      id: "dots",
                      x: "0",
                      y: "0",
                      width: "24",
                      height: "24",
                      patternUnits: "userSpaceOnUse",
                      children: (0, r.jsx)("circle", {
                        cx: "1",
                        cy: "1",
                        r: "1",
                        fill: "#fff",
                        fillOpacity: "0.04",
                      }),
                    }),
                  }),
                  (0, r.jsx)("rect", {
                    width: "100%",
                    height: "100%",
                    fill: "url(#dots)",
                  }),
                ],
              }),
            }),
            (0, r.jsx)("img", {
              src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
              alt: "AI 1",
              className:
                "absolute top-10 left-10 w-24 h-24 object-cover rounded-xl shadow-2xl opacity-60 rotate-12 blur-sm z-20",
            }),
            (0, r.jsx)("img", {
              src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80",
              alt: "AI 2",
              className:
                "absolute bottom-16 left-1/4 w-20 h-20 object-cover rounded-full shadow-xl opacity-50 -rotate-6 blur-[2px] z-20",
            }),
            (0, r.jsx)("img", {
              src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80",
              alt: "AI 3",
              className:
                "absolute top-20 right-16 w-28 h-16 object-cover rounded-2xl shadow-xl opacity-50 rotate-3 blur-[1px] z-20",
            }),
            (0, r.jsx)("img", {
              src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80",
              alt: "AI 4",
              className:
                "absolute bottom-10 right-10 w-16 h-16 object-cover rounded-lg shadow-xl opacity-40 -rotate-12 blur-[2px] z-20",
            }),
            (0, r.jsx)("div", {
              className: "absolute inset-0 z-0 pointer-events-none",
              children: (0, r.jsx)("div", {
                className:
                  "w-full h-full bg-gradient-to-tr from-[#7B2CBF]/10 via-[#5A189A]/10 to-transparent animate-gradient-move",
              }),
            }),
            (0, r.jsxs)("div", {
              className: "absolute z-10 pointer-events-none",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute left-1/4 top-1/3 w-32 h-32 bg-gradient-to-br from-[#a78bfa] to-[#7B2CBF] opacity-30 rounded-full blur-2xl animate-orb1",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute right-1/4 top-1/4 w-24 h-24 bg-gradient-to-br from-[#5A189A] to-[#7B2CBF] opacity-20 rounded-full blur-2xl animate-orb2",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute left-1/3 bottom-1/4 w-20 h-20 bg-gradient-to-br from-[#fff] to-[#a78bfa] opacity-10 rounded-full blur-2xl animate-orb3",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className:
                "absolute bottom-0 left-0 w-full z-20 pointer-events-none",
              children: (0, r.jsx)("svg", {
                viewBox: "0 0 1440 320",
                className: "w-full h-48 md:h-64",
                children: (0, r.jsxs)("g", {
                  children: [
                    (0, r.jsx)("path", {
                      d: "M0,240 C360,320 1080,0 1440,160",
                      stroke: "#a78bfa",
                      strokeWidth: "1.5",
                      fill: "none",
                      opacity: "0.5",
                      className: "animate-[waveMove1_12s_ease-in-out_infinite]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M0,280 C400,320 1040,40 1440,200",
                      stroke: "#c4a7fa",
                      strokeWidth: "1",
                      fill: "none",
                      opacity: "0.3",
                      className: "animate-[waveMove2_14s_ease-in-out_infinite]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M0,300 C500,320 900,80 1440,240",
                      stroke: "#fff",
                      strokeWidth: "0.7",
                      fill: "none",
                      opacity: "0.15",
                      className: "animate-[waveMove3_16s_ease-in-out_infinite]",
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: "relative z-29 flex flex-col items-center text-center",
              children: [
                (0, r.jsx)("span", {
                  className:
                    "inline-block mb-6 px-4 py-1 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white text-sm font-semibold shadow-lg animate-fade-in-down",
                  children: "\uD83D\uDE80 AI for the Future",
                }),
                (0, r.jsx)("h1", {
                  className:
                    "text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[#c4a7fa] to-[#a78bfa] text-transparent bg-clip-text animate-fade-in-up",
                  children: "AI, Tailored for Your Tomorrow",
                }),
                (0, r.jsx)("p", {
                  className:
                    "max-w-2xl text-lg md:text-2xl text-gray-200 mb-10 animate-fade-in-up delay-200",
                  children:
                    "We build smart, scalable AI solutions that transform businesses automating operations, elevating insights, and unlocking new possibilities across every industry.",
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300",
                  children: [
                    (0, r.jsx)("button", {
                      className:
                        "px-8 py-3 rounded-lg bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-200",
                      children: "Home",
                    }),
                    (0, r.jsx)("button", {
                      className:
                        "px-8 py-3 rounded-lg border-2 border-[#a78bfa] text-[#a78bfa] font-bold text-lg bg-transparent hover:bg-[#a78bfa]/10 transition-all duration-200 flex items-center gap-2",
                      children: "Contact-us",
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("style", {
              children:
                "\n        .animate-fade-in-down {\n          animation: fadeInDown 1s cubic-bezier(.4,0,.2,1) both;\n        }\n        .animate-fade-in-up {\n          animation: fadeInUp 1.2s cubic-bezier(.4,0,.2,1) both;\n        }\n        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }\n        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }\n        @keyframes fadeInDown {\n          from { opacity: 0; transform: translateY(-40px);}\n          to { opacity: 1; transform: translateY(0);}\n        }\n        @keyframes fadeInUp {\n          from { opacity: 0; transform: translateY(40px);}\n          to { opacity: 1; transform: translateY(0);}\n        }\n        @keyframes waveMove1 {\n          0%, 100% { transform: translateX(0); }\n          50% { transform: translateX(-30px) scaleY(1.04);}\n        }\n        @keyframes waveMove2 {\n          0%, 100% { transform: translateX(0); }\n          50% { transform: translateX(30px) scaleY(1.02);}\n        }\n        @keyframes waveMove3 {\n          0%, 100% { transform: translateX(0); }\n          50% { transform: translateX(-20px) scaleY(1.01);}\n        }\n        .animate-orb1 {\n          animation: orb1move 10s ease-in-out infinite alternate;\n        }\n        .animate-orb2 {\n          animation: orb2move 12s ease-in-out infinite alternate;\n        }\n        .animate-orb3 {\n          animation: orb3move 14s ease-in-out infinite alternate;\n        }\n        @keyframes orb1move {\n          0% { transform: translateY(0) scale(1);}\n          100% { transform: translateY(-30px) scale(1.1);}\n        }\n        @keyframes orb2move {\n          0% { transform: translateY(0) scale(1);}\n          100% { transform: translateY(20px) scale(1.05);}\n        }\n        @keyframes orb3move {\n          0% { transform: translateY(0) scale(1);}\n          100% { transform: translateY(-15px) scale(1.08);}\n        }\n        .animate-gradient-move {\n          animation: gradientMove 16s ease-in-out infinite alternate;\n        }\n        @keyframes gradientMove {\n          0% { background-position: 0% 50%;}\n          100% { background-position: 100% 50%;}\n        }\n      ",
            }),
          ],
        });
      }
      a(2265);
      var s = () =>
          (0, r.jsx)("div", {
            className: "bg-gradient-to-r from-[#10002B] to-[#240046] py-24",
            children: (0, r.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                (0, r.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, r.jsx)("h2", {
                      className:
                        "text-center text-3xl md:text-5xl font-extrabold text-white tracking-tight",
                      children: "Why Choose Us",
                    }),
                    (0, r.jsx)("div", {
                      className: "mt-4 flex justify-center",
                      children: (0, r.jsx)("div", {
                        className:
                          "w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]",
                      }),
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "mt-4 max-w-3xl mx-auto text-center text-lg text-gray-300",
                      children:
                        "Experience the future of AI with our innovative solutions",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "mt-20",
                  children: (0, r.jsx)("div", {
                    className:
                      "grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3",
                    children: [
                      {
                        number: "01",
                        title: "Tailored AI",
                        description:
                          "Custom-built solutions designed around your specific needs.",
                        gradient: "from-purple-600 to-indigo-600",
                      },
                      {
                        number: "02",
                        title: "End-to-End Delivery",
                        description:
                          "We handle everything from strategy to deployment.",
                        gradient: "from-purple-600 to-pink-600",
                      },
                      {
                        number: "03",
                        title: "Enterprise-Grade Security",
                        description:
                          "Robust data protection and compliance you can trust.",
                        gradient: "from-indigo-600 to-purple-600",
                      },
                      {
                        number: "04",
                        title: "Expertise Across Domains",
                        description:
                          "Skilled in NLP, computer vision, ML, and more.",
                        gradient: "from-pink-600 to-purple-600",
                      },
                      {
                        number: "05",
                        title: "Continuous Optimisation",
                        description:
                          "Your AI gets smarter and more efficient over time.",
                        gradient: "from-purple-600 to-blue-600",
                      },
                      {
                        number: "06",
                        title: "Collaborative Process",
                        description:
                          "Clear communication and full transparency at every step.",
                        gradient: "from-blue-600 to-purple-600",
                      },
                    ].map((e, t) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className:
                            "group relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/30  transition-all duration-300 border border-gray-800/50 hover:border-purple-500/50",
                          children: [
                            (0, r.jsx)("div", {
                              className: "absolute -top-6 -left-2",
                              children: (0, r.jsx)("span", {
                                className:
                                  "text-6xl font-bold bg-gradient-to-r ".concat(
                                    e.gradient,
                                    " \n                                text-transparent bg-clip-text opacity-100 group-hover:opacity-100 \n                                transition-opacity duration-300",
                                  ),
                                children: e.number,
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative mt-6",
                              children: [
                                (0, r.jsx)("h3", {
                                  className:
                                    "text-xl font-semibold text-white mb-4  group-hover:text-transparent group-hover:bg-clip-text  group-hover:bg-gradient-to-r group-hover:from-[#5A189A] group-hover:to-[#7B2CBF]",
                                  children: e.title,
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-gray-400 group-hover:text-gray-300 transition-colors",
                                  children: e.description,
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100  transition-opacity duration-300 pointer-events-none",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-500",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute top-4 right-4 w-4 h-4 rounded-full border border-purple-500  animate-ping opacity-75",
                                }),
                              ],
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          }),
        i = {
          src: "/_next/static/media/robot.fe78b94d.svg",
          height: 394,
          width: 166,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = a(66648);
      let l = () =>
          (0, r.jsx)("span", {
            className:
              "flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#5A189A] to-[#7B2CBF] shadow-lg",
            children: (0, r.jsxs)("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "white",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                (0, r.jsx)("path", {
                  d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
                }),
                (0, r.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
              ],
            }),
          }),
        c = () =>
          (0, r.jsx)("span", {
            className:
              "flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-[#7B2CBF] shadow-lg",
            children: (0, r.jsxs)("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "white",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                (0, r.jsx)("path", {
                  d: "M4.5 16.5L3 21l4.5-1.5M15 9l6-6m-6 6l-2.5 7.5M15 9l-7.5 7.5M9 15l-4.5 1.5M9 15l7.5-7.5",
                }),
                (0, r.jsx)("circle", {
                  cx: "18",
                  cy: "6",
                  r: "2",
                  fill: "white",
                }),
              ],
            }),
          });
      function d() {
        return (0, r.jsx)("section", {
          className: "bg-gradient-to-r from-[#10002B] to-[#240046] py-12 px-4",
          children: (0, r.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
              (0, r.jsxs)("h2", {
                className:
                  "text-center text-4xl md:text-5xl font-extrabold mb-12 text-white",
                children: [
                  (0, r.jsx)("span", {
                    className: "text-white",
                    children: "Our ",
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-[#7B2CBF]",
                    children: "Mission",
                  }),
                  (0, r.jsx)("span", {
                    className: "text-white",
                    children: " & ",
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-blue-400",
                    children: "Vision",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 items-center",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex flex-col items-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "z-10 mb-4",
                        children: (0, r.jsx)(c, {}),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-lg w-full",
                        children: [
                          (0, r.jsx)("h3", {
                            className:
                              "text-2xl font-bold text-pink-400 mb-2 text-center",
                            children: "Our Mission",
                          }),
                          (0, r.jsxs)("p", {
                            className: "text-gray-100 text-lg text-center",
                            children: [
                              "To democratise AI by making intelligent, scalable, and tailor-made solutions accessible to every business, regardless of size, industry, or technical expertise.",
                              (0, r.jsx)("br", {}),
                              "We strive to empower organisations to work smarter, move faster, and grow fearlessly through AI that adapts to their needs.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, r.jsx)(o.default, {
                      src: i,
                      alt: "Artificial Intelligence Illustration",
                      className:
                        "rounded-2xl object-contain max-h-[400px] w-full max-w-xs mx-auto",
                      width: 300,
                      height: 400,
                      priority: !0,
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col items-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "z-10 mb-4",
                        children: (0, r.jsx)(l, {}),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-lg w-full",
                        children: [
                          (0, r.jsx)("h3", {
                            className:
                              "text-2xl font-bold text-blue-400 mb-2 text-center",
                            children: "Our Vision",
                          }),
                          (0, r.jsxs)("p", {
                            className: "text-gray-100 text-lg text-center",
                            children: [
                              "A future where every business, big or small, can thrive with the power of artificial intelligence.",
                              (0, r.jsx)("br", {}),
                              "We envision a world where AI simplifies the complex, accelerates progress, and fuels limitless innovation.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let m = [
        {
          name: "Team Celebration",
          img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Office Fun",
          img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Teamwork",
          img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Strategy Session",
          img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Annual Meetup",
          img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Hackathon",
          img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        },
      ];
      function u() {
        return (0, r.jsx)("section", {
          className:
            "w-full py-12 bg-gradient-to-r from-[#10002B] to-[#240046] px-4 flex flex-col items-center justify-center",
          children: (0, r.jsxs)("div", {
            className: "w-full flex flex-col items-center",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "w-full flex flex-col justify-center text-white mb-10 max-w-5xl mx-auto",
                children: [
                  (0, r.jsx)("h2", {
                    className:
                      "text-3xl md:text-4xl font-extrabold text-white mb-2 text-center",
                    children: "Meet Our Team",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "w-24 h-1 rounded bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mb-4 mx-auto",
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "text-lg text-gray-200 mb-6 max-w-3xl mx-auto text-center",
                    children:
                      "At DataTroops, our team is our greatest strength. We believe in collaboration, creativity, and celebrating every milestone together. Here are some of our favorite moments!",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "flex items-center justify-center w-full max-w-none overflow-x-auto py-8 pr-8",
                children: m.map((e, t) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      style: {},
                      className: "relative transition-transform duration-300 "
                        .concat(0 !== t ? "md:-ml-6" : "", " ")
                        .concat(
                          t % 2 == 0 ? "translate-y-4" : "-translate-y-4",
                          " min-w-[180px] max-w-[220px]",
                        ),
                      children: [
                        (0, r.jsx)("img", {
                          src: e.img,
                          alt: e.name,
                          className:
                            "w-full h-48 object-cover object-center rounded-3xl shadow-xl border-4 border-[#1A0B2E]",
                          draggable: !1,
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-[#7B2CBF]/60 to-[#5A189A]/20 opacity-60 rounded-3xl",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "absolute bottom-2 left-2 right-2 text-center opacity-100 transition-opacity duration-300",
                          children: (0, r.jsx)("span", {
                            className:
                              "inline-block bg-[#240046]/80 text-white text-base font-semibold px-3 py-1 rounded-lg shadow",
                            children: e.name,
                          }),
                        }),
                      ],
                    },
                    e.name,
                  ),
                ),
              }),
            ],
          }),
        });
      }
      var x = a(41942),
        f = a(14950);
      let p = [
          {
            icon: (0, r.jsx)(x.I8D, { className: "text-4xl text-white" }),
            title: "Attitude To Work",
            desc: "We approach every project with dedication, professionalism, and a commitment to excellence.",
            points: [
              "Professional approach to every task",
              "Meeting deadlines consistently",
              "Innovative problem-solving",
              "Continuous improvement mindset",
            ],
            gradient: "from-[#7B2CBF] to-[#5A189A]",
          },
          {
            icon: (0, r.jsx)(x.Cq, { className: "text-4xl text-white" }),
            title: "Attitude To Client",
            desc: "Our clients are our partners in success, and we prioritize their needs and satisfaction.",
            points: [
              "Clear communication",
              "Transparent processes",
              "Dedicated support",
              "Value-driven solutions",
              "Long-term partnerships",
            ],
            gradient: "from-[#5A189A] to-[#7B2CBF]",
          },
          {
            icon: (0, r.jsx)(x.wN, { className: "text-4xl text-white" }),
            title: "Attitude To Employee",
            desc: "Our employees are our greatest asset, and we foster a culture of growth and respect.",
            points: [
              "Professional development",
              "Work-life balance",
              "Inclusive environment",
              "Career growth opportunities",
              "Recognition and rewards",
            ],
            gradient: "from-[#240046] to-[#7B2CBF]",
          },
        ],
        h = {
          offscreen: { opacity: 0, y: 40 },
          onscreen: (e) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.15 * e, duration: 0.7, type: "spring" },
          }),
        };
      function g() {
        return (0, r.jsxs)("section", {
          className:
            "w-full py-12 px-4 bg-gradient-to-r from-[#10002B] to-[#240046] flex flex-col items-center",
          children: [
            (0, r.jsxs)("div", {
              className: "max-w-4xl mx-auto text-center mb-12",
              children: [
                (0, r.jsx)("h2", {
                  className: "text-4xl md:text-5xl font-bold text-white mb-2",
                  children: "Our Company Ethics",
                }),
                (0, r.jsx)("div", {
                  className:
                    "w-24 h-1 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mx-auto rounded-full mb-4",
                }),
                (0, r.jsx)("p", {
                  className: "text-gray-300 max-w-2xl mx-auto",
                  children:
                    "At DataTroops, our values shape every interaction—with our work, our clients, and our team. Here's what drives us every day.",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full",
              children: p.map((e, t) =>
                (0, r.jsxs)(
                  f.E.div,
                  {
                    className:
                      "bg-white/5 rounded-2xl shadow-xl p-8 flex flex-col items-start border border-[#7B2CBF]/20 backdrop-blur-md hover:scale-105 transition-transform duration-300",
                    initial: "offscreen",
                    whileInView: "onscreen",
                    viewport: { once: !0, amount: 0.3 },
                    custom: t,
                    variants: h,
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "mb-6 w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ".concat(
                            e.gradient,
                            " shadow-lg",
                          ),
                        children: e.icon,
                      }),
                      (0, r.jsx)("h3", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: e.title,
                      }),
                      (0, r.jsx)("p", {
                        className: "text-gray-200 mb-4",
                        children: e.desc,
                      }),
                      (0, r.jsx)("ul", {
                        className: "space-y-2",
                        children: e.points.map((e, t) =>
                          (0, r.jsxs)(
                            "li",
                            {
                              className: "flex items-start gap-2",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]",
                                }),
                                (0, r.jsx)("span", {
                                  className: "text-gray-100",
                                  children: e,
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  },
                  e.title,
                ),
              ),
            }),
          ],
        });
      }
      var b = a(87274),
        v = a(44458);
      let y = [
        {
          question: "What is DataTroops.ai's mission?",
          answer:
            "Our mission is to democratize AI by making intelligent, scalable, and tailor-made solutions accessible to every business, regardless of size, industry, or technical expertise. We aim to empower organizations to work smarter, move faster, and grow fearlessly through AI that adapts to their needs.",
        },
        {
          question: "What industries does DataTroops.ai serve?",
          answer:
            "We serve a diverse range of industries, including gaming, e-commerce, healthcare, and enterprise sectors, providing customized AI solutions that drive innovation and efficiency.",
        },
        {
          question: "What technologies does DataTroops.ai specialize in?",
          answer:
            "We specialize in a wide array of technologies, such as Scala, Akka, JavaScript, Rust, Kafka, Spark, and cloud platforms like AWS and Google Cloud. Our expertise spans backend development, AI & machine learning, data analytics, augmented reality, and more.",
        },
        {
          question: "How does DataTroops.ai ensure data security?",
          answer:
            "We prioritize enterprise-grade security protocols, including end-to-end encryption, role-based access control, and compliance with data protection regulations like GDPR and HIPAA (where applicable), ensuring robust data protection and compliance you can trust.",
        },
        {
          question: "What is DataTroops.ai's approach to AI implementation?",
          answer:
            "We offer end-to-end delivery, handling everything from strategy to deployment. Our solutions are custom-built around your specific needs, ensuring that your AI gets smarter and more efficient over time through continuous optimization.",
        },
        {
          question:
            "What sets DataTroops.ai apart from other AI solution providers?",
          answer:
            "Our collaborative process emphasizes clear communication and full transparency at every step. We combine domain expertise with a commitment to excellence, delivering tailored AI solutions that transform businesses by automating operations and unlocking new possibilities.",
        },
      ];
      function j() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n, {}),
            (0, r.jsx)(s, {}),
            (0, r.jsx)(d, {}),
            (0, r.jsx)(u, {}),
            (0, r.jsx)(g, {}),
            (0, r.jsx)(b.Z, {}),
            (0, r.jsx)(v.Z, {
              title: "Frequently Asked Questions",
              description:
                " Find quick answers to common questions about our AI Scheduling Assistant.",
              faqs: y,
            }),
          ],
        });
      }
    },
    44458: function (e, t, a) {
      "use strict";
      var r = a(57437),
        n = a(2265),
        s = a(14950),
        i = a(41942),
        o = a(96164);
      let l = (e) => {
        let { question: t, answer: a, isOpen: n, onClick: l } = e;
        return (0, r.jsxs)(s.E.div, {
          initial: !1,
          animate: { backgroundColor: n ? "#3F0071" : "#240046" },
          className: (0, o.m6)(
            "rounded-md overflow-hidden cursor-pointer",
            n ? "shadow-md" : "",
          ),
          onClick: l,
          children: [
            (0, r.jsxs)("div", {
              className: "flex items-center justify-between p-3 md:p-4 !pb-2",
              children: [
                (0, r.jsx)("h3", {
                  className: "text-md md:text-lg font-semibold text-white",
                  children: t,
                }),
                (0, r.jsx)(s.E.div, {
                  initial: !1,
                  animate: { rotate: n ? 180 : 0 },
                  children: n
                    ? (0, r.jsx)(i.s$2, {
                        className: "text-purple-400 text-base",
                      })
                    : (0, r.jsx)(i.RiI, {
                        className: "text-gray-400 text-base",
                      }),
                }),
              ],
            }),
            (0, r.jsx)(s.E.div, {
              initial: { height: 0, opacity: 0 },
              animate: { height: n ? "auto" : 0, opacity: n ? 1 : 0 },
              transition: { duration: 0, ease: "easeInOut" },
              className: "px-3 md:px-4 pb-2",
              children: (0, r.jsx)("p", {
                className: "text-gray-300 leading-relaxed text-sm md:text-base",
                children: a,
              }),
            }),
          ],
        });
      };
      t.Z = (e) => {
        let { title: t, description: a, faqs: i } = e,
          [o, c] = (0, n.useState)(null),
          d = (e) => {
            c(o === e ? null : e);
          };
        return (0, r.jsx)("section", {
          className: "w-full text-white py-16",
          children: (0, r.jsxs)("div", {
            className: "max-w-4xl mx-auto px-4",
            children: [
              (0, r.jsxs)(s.E.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, amount: 0.3 },
                transition: { duration: 0.6 },
                className: "text-center mb-6",
                children: [
                  (0, r.jsx)("h2", {
                    className:
                      "text-3xl md:text-4xl font-light mb-4 text-white leading-tight",
                    children: t,
                  }),
                  (0, r.jsx)("p", {
                    className: "text-base text-gray-300 max-w-2xl mx-auto",
                    children: a,
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "space-y-2",
                children: i.map((e, t) =>
                  (0, r.jsx)(
                    l,
                    {
                      question: e.question,
                      answer: e.answer,
                      isOpen: o === t,
                      onClick: () => d(t),
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        });
      };
    },
    87274: function (e, t, a) {
      "use strict";
      var r = a(57437),
        n = a(2265),
        s = a(6920),
        i = a(45079),
        o = a(57818),
        l = a(66648),
        c = a(74087);
      let d = (0, o.default)(
        () =>
          Promise.all([a.e(987), a.e(463)])
            .then(a.bind(a, 40463))
            .then((e) => e.motion.div),
        { loadableGenerated: { webpack: () => [null] }, ssr: !1 },
      );
      t.Z = (e) => {
        let {
            title: t = "Ready to Revolutionize Your Workflow?",
            description:
              a = "Emphasize how your AI assistant can help users streamline their scheduling and tasks, improve efficiency, and transform their workflow.",
            buttonText: o = "Get Started",
            buttonLink: m = "#contact",
            image: u = c.Z,
          } = e,
          [x, f] = (0, n.useState)(!1);
        return ((0, n.useEffect)(() => {
          f(!0);
        }, []),
        x)
          ? (0, r.jsx)("section", {
              className:
                "pb-24 md:pb-14 bg-gradient-to-r  `from-[var(--color-5A189A)] via-[var(--color-7B2CBF)] to-[var(--color-9D4EDD)]` py-16 px-4 text-white text-center md:text-left",
              children: (0, r.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center",
                children: [
                  (0, r.jsxs)(d, {
                    className: "md:w-1/2 space-y-6",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1.5 },
                    children: [
                      t &&
                        (0, r.jsx)("h2", {
                          className:
                            "text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-C77DFF)] via-[var(--color-E0AAFF)] to-[var(--color-240046)]",
                          children: t,
                        }),
                      a &&
                        (0, r.jsx)("p", {
                          className: "text-lg md:text-xl font-light opacity-80",
                          children: a,
                        }),
                      o &&
                        m &&
                        (0, r.jsx)("div", {
                          className: "mt-8",
                          children: (0, r.jsxs)("a", {
                            href: m,
                            className:
                              "inline-flex items-center justify-center md:justify-start px-8 py-4 rounded-lg bg-gradient-to-r bg-[var(--color-7B2CBF)] hover:bg-[var(--color-9D4EDD)] text-white font-bold text-xl hover:from-pink-600 hover:to-blue-700 transition ease-in-out duration-300 transform hover:scale-105",
                            children: [
                              o,
                              (0, r.jsx)(s.G, {
                                icon: i.eFW,
                                className: "ml-3",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  u &&
                    (0, r.jsx)(d, {
                      className: "md:w-1/2 mt-8 mb-16 md:mt-0",
                      initial: { x: 200 },
                      animate: { x: 0 },
                      transition: {
                        type: "spring",
                        stiffness: 120,
                        damping: 30,
                      },
                      children: (0, r.jsx)("div", {
                        className:
                          "rounded-full text-purple-800 flex items-center justify-center mx-auto",
                        children: (0, r.jsx)(l.default, {
                          src: u,
                          alt: "CTA image",
                          unoptimized: !0,
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
    74087: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/test-30.53db26cc.png",
        height: 1024,
        width: 1536,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAe0lEQVR42g2MsQ0CMRAE93yH/bxFQkQlVAIdQDmkFIGIaIaQkEcCQWKB7JOP22g1Iw1dXp18sK4qqdfGTAIyMYelUMP7UdOSsZjnZAYEdAt5vN4+u8N0PLFWCUJmLgCONOTYzvfnVIboUSNAAH/4fWfr/Wq7SWMmVQPwB1sfMGNCs2HVAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    91810: function (e, t, a) {
      "use strict";
      a.d(t, {
        w_: function () {
          return d;
        },
      });
      var r = a(2265),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = r.createContext && r.createContext(n),
        i = ["attr", "size", "title"];
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(a), !0).forEach(function (t) {
                var r, n;
                (r = t),
                  (n = a[t]),
                  (r = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 !== a) {
                        var r = a.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(r)) in e
                    ? Object.defineProperty(e, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[r] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : l(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t),
                  );
                });
        }
        return e;
      }
      function d(e) {
        return (t) =>
          r.createElement(
            m,
            o({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, a) =>
                  r.createElement(t.tag, c({ key: a }, t.attr), e(t.child)),
                )
              );
            })(e.child),
          );
      }
      function m(e) {
        var t = (t) => {
          var a,
            { attr: n, size: s, title: l } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                n = (function (e, t) {
                  if (null == e) return {};
                  var a = {};
                  for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                      if (t.indexOf(r) >= 0) continue;
                      a[r] = e[r];
                    }
                  return a;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                  (a = s[r]),
                    !(t.indexOf(a) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (n[a] = e[a]);
              }
              return n;
            })(e, i),
            m = s || t.size || "1em";
          return (
            t.className && (a = t.className),
            e.className && (a = (a ? a + " " : "") + e.className),
            r.createElement(
              "svg",
              o(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                n,
                d,
                {
                  className: a,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: m,
                  width: m,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              l && r.createElement("title", null, l),
              e.children,
            )
          );
        };
        return void 0 !== s
          ? r.createElement(s.Consumer, null, (e) => t(e))
          : t(n);
      }
    },
  },
  function (e) {
    e.O(0, [676, 699, 648, 950, 920, 164, 971, 23, 744], function () {
      return e((e.s = 72214));
    }),
      (_N_E = e.O());
  },
]);
