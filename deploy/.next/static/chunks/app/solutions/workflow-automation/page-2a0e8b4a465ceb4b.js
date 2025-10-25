(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [715],
  {
    94912: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 84094)),
        Promise.resolve().then(a.bind(a, 20914)),
        Promise.resolve().then(a.bind(a, 15824)),
        Promise.resolve().then(a.bind(a, 23197)),
        Promise.resolve().then(a.bind(a, 65117));
    },
    84094: function (e, t, a) {
      "use strict";
      var s = a(57437),
        i = a(2265),
        r = a(33907),
        l = a(24241),
        n = a(71976),
        o = a(11240),
        c = a(40472),
        d = a(87138);
      t.default = () => {
        let [e, t] = (0, i.useState)(!1),
          [a, m] = (0, i.useState)(!1),
          [x, u] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = setTimeout(() => t(!0), 500);
            return () => clearTimeout(e);
          }, []),
          (0, s.jsxs)("section", {
            className:
              "relative bg-gradient-to-br from-violet-1200 py-24 overflow-hidden",
            children: [
              (0, s.jsx)("div", {
                className: "absolute inset-0",
                children: (0, s.jsx)("img", {
                  src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  alt: "Technology background",
                  className: "w-full h-full object-cover opacity-10",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000",
              }),
              (0, s.jsx)("div", {
                className:
                  "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: (0, s.jsxs)("div", {
                  className: "max-w-4xl mx-auto",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "transition-all duration-1000 ".concat(
                        e
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10",
                      ),
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-center gap-2 mb-6",
                          children: [
                            (0, s.jsx)(r.Z, {
                              className:
                                "w-8 h-8 text-yellow-300 animate-pulse",
                            }),
                            (0, s.jsx)("span", {
                              className: "text-yellow-300 text-lg font-medium",
                              children: "Ready to Transform?",
                            }),
                            (0, s.jsx)(r.Z, {
                              className:
                                "w-8 h-8 text-yellow-300 animate-pulse",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("h2", {
                          className:
                            "text-4xl sm:text-5xl font-bold text-white mb-8",
                          children: [
                            "Transform your website into a",
                            " ",
                            (0, s.jsx)("span", {
                              className:
                                "bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient",
                              children: "smart assistant",
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed",
                          children:
                            "Ready to automate? Join the conversation revolution and boost your conversions today.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ".concat(
                          e
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10",
                        ),
                      children: [
                        (0, s.jsxs)("button", {
                          onMouseEnter: () => m(!0),
                          onMouseLeave: () => m(!1),
                          className:
                            "group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 hover:bg-gray-50",
                          children: [
                            (0, s.jsx)(l.Z, {
                              className: "w-6 h-6 group-hover:animate-bounce",
                            }),
                            a ? "Coming Soon" : "Schedule a Demo",
                            (0, s.jsx)(n.Z, {
                              className:
                                "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300",
                            }),
                          ],
                        }),
                        (0, s.jsx)(d.default, {
                          href: "/contact-us",
                          children: (0, s.jsxs)("button", {
                            className:
                              "group bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3",
                            children: [
                              (0, s.jsx)(o.Z, { className: "w-6 h-6" }),
                              "Talk to Our Experts",
                              (0, s.jsx)(n.Z, {
                                className:
                                  "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsxs)("button", {
                          onMouseEnter: () => u(!0),
                          onMouseLeave: () => u(!1),
                          className:
                            "group bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl flex items-center gap-3",
                          children: [
                            (0, s.jsx)(c.Z, {
                              className:
                                "w-6 h-6 group-hover:scale-110 transition-transform duration-300",
                            }),
                            x ? "Coming Soon" : "Try Live Example",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 ".concat(
                          e
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10",
                        ),
                      style: { transitionDelay: "600ms" },
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "flex items-center justify-center gap-4 mb-4",
                          children: (0, s.jsx)("div", {
                            className: "flex -space-x-2",
                            children: [1, 2, 3, 4].map((e) =>
                              (0, s.jsxs)(
                                "div",
                                {
                                  className:
                                    "w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm",
                                  children: [e, "K"],
                                },
                                e,
                              ),
                            ),
                          }),
                        }),
                        (0, s.jsx)("p", {
                          className: "text-lg text-purple-100",
                          children:
                            "Join thousands of businesses already transforming their user experience with conversational automation.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    20914: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return x;
        },
      });
      var s = a(57437),
        i = a(2265),
        r = a(22757),
        l = a(22023),
        n = a(55430),
        o = a(14950),
        c = a(46572),
        d = a(66648),
        m = {
          src: "/_next/static/media/workflow-automation.64dc5837.svg",
          height: 2e3,
          width: 2e3,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = () => {
          let [e, t] = (0, i.useState)(!1);
          return (0, s.jsxs)("section", {
            className:
              "relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6 lg:px-8",
            children: [
              (0, s.jsx)("div", {
                className: "absolute inset-0 bg-black bg-opacity-20 z-0",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse z-0",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000 z-0",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-spin-slow z-0",
              }),
              (0, s.jsx)("div", {
                className: "relative z-10 max-w-7xl w-full",
                children: (0, s.jsxs)("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                  children: [
                    (0, s.jsxs)(o.E.div, {
                      initial: { opacity: 0, y: 40 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 1, ease: "easeOut" },
                      className: "text-center lg:text-left",
                      children: [
                        (0, s.jsxs)("h1", {
                          className:
                            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight",
                          children: [
                            "Automate Website Journeys with",
                            " ",
                            (0, s.jsx)("span", {
                              className:
                                "bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient",
                              children: "Just a Prompt",
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-lg sm:text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0",
                          children:
                            "Let users simply type their intent, and watch your website intelligently respond—filling in details, navigating pages, and completing actions.",
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-12",
                          children: [
                            (0, s.jsx)(o.E.button, {
                              whileHover: { scale: 1.07 },
                              whileTap: { scale: 0.95 },
                              onClick: () => {
                                t(!0),
                                  setTimeout(() => {
                                    t(!1);
                                  }, 3e3);
                              },
                              className:
                                "group w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:shadow-2xl flex items-center justify-center gap-3 relative",
                              children: e
                                ? (0, s.jsx)(o.E.span, {
                                    initial: { opacity: 0, scale: 0.8 },
                                    animate: { opacity: 1, scale: 1 },
                                    className: "flex items-center gap-2",
                                    children: "Coming Soon!",
                                  })
                                : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsx)(r.Z, {
                                        className:
                                          "w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce",
                                      }),
                                      "Request a Demo",
                                    ],
                                  }),
                            }),
                            (0, s.jsx)("a", {
                              href: "#how-it-works",
                              children: (0, s.jsxs)(o.E.button, {
                                whileHover: { scale: 1.05 },
                                className:
                                  "group w-full sm:w-auto bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white px-6 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl flex items-center justify-center gap-3",
                                children: [
                                  (0, s.jsx)(l.Z, {
                                    className: "w-5 h-5 sm:w-6 sm:h-6",
                                  }),
                                  "See How It Works",
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 max-w-xl mx-auto lg:mx-0",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "flex items-center justify-center lg:justify-start gap-2 mb-4",
                              children: [
                                (0, s.jsx)(n.Z, {
                                  className:
                                    "w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-purple-100 text-base sm:text-lg font-medium",
                                  children: "Key Tagline",
                                }),
                              ],
                            }),
                            (0, s.jsx)(c.e, {
                              sequence: [
                                '"From clicks to conversations — reinvent how users interact with your site."',
                                2e3,
                                '"Let your website work like magic — all through natural language."',
                                2e3,
                              ],
                              wrapper: "p",
                              speed: 50,
                              className:
                                "text-lg sm:text-xl font-semibold text-white",
                              repeat: 1 / 0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(o.E.div, {
                      initial: { opacity: 0, x: 50 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
                      className:
                        "relative max-w-md sm:max-w-lg lg:max-w-xl mx-auto",
                      children: (0, s.jsx)(d.default, {
                        src: m,
                        alt: "AI-powered website automation",
                        className: "w-full rounded-3xl shadow-2xl",
                        loading: "lazy",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    15824: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return h;
        },
      });
      var s = a(57437),
        i = a(48059),
        r = a.n(i),
        l = a(2265),
        n = a(14950),
        o = a(47390),
        c = a(79869),
        d = a(85302),
        m = a(92940),
        x = a(66648);
      let u = {
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        },
        p = [
          {
            id: 1,
            icon: o.Z,
            title: "User Types a Prompt",
            description:
              'E.g., "Book a flight from Delhi to Bengaluru for 2 people next Monday"',
            gradient: "from-purple-500/30 to-purple-900/80",
            imageURL:
              "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=400",
            points: [
              "Natural language input processing",
              "Context understanding and intent recognition",
              "Multi-language support capabilities",
              "Voice-to-text integration available",
              "Smart suggestion and auto-completion",
            ],
          },
          {
            id: 2,
            icon: c.Z,
            title: "AI Understands Intent & Extracts Details",
            description:
              "Extracts city, dates, passenger count, and infers missing information.",
            gradient: "from-violet-500/30 to-violet-900/80",
            imageURL:
              "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
            points: [
              "Advanced NLP for context extraction",
              "Entity recognition and classification",
              "Intent mapping and validation",
              "Missing information inference",
              "Real-time processing and analysis",
            ],
          },
          {
            id: 3,
            icon: d.Z,
            title: "Website Updates Dynamically",
            description:
              "Background forms auto-fill, date pickers open, focus shifts to incomplete fields.",
            gradient: "from-indigo-500/30 to-indigo-900/80",
            imageURL:
              "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
            points: [
              "Real-time UI synchronization",
              "Smart form auto-completion",
              "Dynamic field highlighting",
              "Seamless user experience flow",
              "Cross-platform compatibility",
            ],
          },
          {
            id: 4,
            icon: m.Z,
            title: "User Completes Remaining Gaps",
            description:
              "Minimal effort required—AI highlights only what's missing for completion.",
            gradient: "from-purple-600/30 to-pink-600/80",
            image: {
              src: "/_next/static/media/websiteLoading.fe6b0937.jpg",
              height: 657,
              width: 1e3,
              blurDataURL:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAL4X/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIEBQMSACMy/9oACAEBAAE/AJNBWU8XM7Y2lM407SPJO3P/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQISMf/aAAgBAgEBPwCqlqP/xAAYEQADAQEAAAAAAAAAAAAAAAABAhIAEf/aAAgBAwEBPwC2QCTzf//Z",
              blurWidth: 8,
              blurHeight: 5,
            },
            points: [
              "Guided completion workflow",
              "Smart field prioritization",
              "Error prevention and validation",
              "One-click completion options",
              "Progress tracking and feedback",
            ],
          },
        ];
      var h = () => {
        let e = (0, l.useRef)(null),
          [t, a] = (0, l.useState)(0),
          [i, o] = (0, l.useState)(0),
          [c, d] = (0, l.useState)(0),
          [m, h] = (0, l.useState)(!1),
          [g, A] = (0, l.useState)(0),
          [f, b] = (0, l.useState)(0),
          [w, y] = (0, l.useState)(!1),
          v = (0, l.useRef)(null),
          j = (e) => {
            if (e && e.children.length > 0) {
              let t = e.children[0],
                a = window.innerWidth < 768 ? 16 : 24;
              return t.offsetWidth + a;
            }
            return window.innerWidth < 768 ? 280 : 344;
          },
          N = () => {
            if (e.current && i > 0) {
              let t = e.current.scrollLeft,
                s = e.current.scrollWidth - e.current.offsetWidth;
              s > 0 && i > 1
                ? a(Math.min(i - 1, Math.round((t / s) * (i - 1))))
                : a(0);
            }
          };
        (0, l.useLayoutEffect)(() => {
          let t = () => {
            if (e.current) {
              d(j(e.current));
              let t = e.current.offsetWidth,
                a = window.innerWidth < 768 ? 264 : 320;
              o(Math.max(1, p.length - Math.floor(t / a) + 1)),
                y(window.innerWidth < 768),
                N();
            }
          };
          return (
            t(),
            window.addEventListener("resize", t),
            () => window.removeEventListener("resize", t)
          );
        }, []);
        let E = () => {
            if (e.current && c > 0) {
              let t = e.current.scrollLeft - c;
              e.current.scrollTo({ left: t, behavior: "smooth" });
            }
          },
          k = () => {
            if (e.current && c > 0) {
              let t = e.current.scrollLeft + c;
              e.current.scrollTo({ left: t, behavior: "smooth" });
            }
          },
          C = (t) => {
            m &&
              e.current &&
              (t.preventDefault(),
              v.current && cancelAnimationFrame(v.current),
              (v.current = requestAnimationFrame(() => {
                if (e.current) {
                  let a = t.pageX - g;
                  e.current.scrollLeft = f - a;
                }
              })));
          },
          I = (t) => {
            m &&
              e.current &&
              (t.preventDefault(),
              v.current && cancelAnimationFrame(v.current),
              (v.current = requestAnimationFrame(() => {
                if (e.current) {
                  let a = t.touches[0].pageX - g;
                  e.current.scrollLeft = f - a;
                }
              })));
          },
          B = () => {
            h(!1),
              e.current &&
                ((e.current.style.cursor = "grab"),
                (e.current.style.userSelect = "auto")),
              v.current &&
                (cancelAnimationFrame(v.current), (v.current = null));
          },
          Q = () => {
            h(!1),
              v.current &&
                (cancelAnimationFrame(v.current), (v.current = null));
          };
        return (
          (0, l.useEffect)(
            () => (
              window.addEventListener("mousemove", C),
              window.addEventListener("mouseup", B),
              window.addEventListener("touchmove", I, { passive: !1 }),
              window.addEventListener("touchend", Q),
              () => {
                window.removeEventListener("mousemove", C),
                  window.removeEventListener("mouseup", B),
                  window.removeEventListener("touchmove", I),
                  window.removeEventListener("touchend", Q);
              }
            ),
            [m],
          ),
          (0, s.jsxs)("section", {
            id: "how-it-works",
            className:
              "jsx-e4c0ee4aadd7f829 relative py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "jsx-e4c0ee4aadd7f829 max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6",
                children: [
                  (0, s.jsxs)(n.E.div, {
                    variants: u,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: { once: !0, amount: 0.3 },
                    className:
                      "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0",
                    children: [
                      (0, s.jsxs)(n.E.h2, {
                        className:
                          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white-900 leading-tight max-w-3xl",
                        children: [
                          "How It",
                          " ",
                          (0, s.jsx)("span", {
                            className:
                              "jsx-e4c0ee4aadd7f829 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                            children: "Works",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "jsx-e4c0ee4aadd7f829 hidden sm:flex space-x-3 mt-4 sm:mt-0",
                        children: [
                          (0, s.jsx)("button", {
                            onClick: E,
                            disabled: 0 === t,
                            className:
                              "jsx-e4c0ee4aadd7f829 " +
                              "p-2 md:p-3 rounded-full border transition-all duration-200 ".concat(
                                0 === t
                                  ? "text-transparent border-gray-200 cursor-not-allowed"
                                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400",
                              ),
                            children: (0, s.jsx)("svg", {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              className:
                                "jsx-e4c0ee4aadd7f829 w-4 h-4 md:w-5 md:h-5",
                              children: (0, s.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7",
                                className: "jsx-e4c0ee4aadd7f829",
                              }),
                            }),
                          }),
                          (0, s.jsx)("button", {
                            onClick: k,
                            disabled: t >= i - 1,
                            className:
                              "jsx-e4c0ee4aadd7f829 " +
                              "p-2 md:p-3 rounded-full border transition-all duration-200 ".concat(
                                t >= i - 1
                                  ? "text-transparent border-gray-200 cursor-not-allowed"
                                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400",
                              ),
                            children: (0, s.jsx)("svg", {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              className:
                                "jsx-e4c0ee4aadd7f829 w-4 h-4 md:w-5 md:h-5",
                              children: (0, s.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7",
                                className: "jsx-e4c0ee4aadd7f829",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "jsx-e4c0ee4aadd7f829 relative",
                    children: (0, s.jsx)("div", {
                      ref: e,
                      style: {
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        cursor: "grab",
                        scrollSnapType: "x mandatory",
                      },
                      onScroll: N,
                      onMouseDown: (t) => {
                        e.current &&
                          (h(!0),
                          A(t.pageX),
                          b(e.current.scrollLeft),
                          (e.current.style.cursor = "grabbing"),
                          (e.current.style.userSelect = "none"),
                          t.preventDefault());
                      },
                      onTouchStart: (t) => {
                        e.current &&
                          (h(!0),
                          A(t.touches[0].pageX),
                          b(e.current.scrollLeft));
                      },
                      className:
                        "jsx-e4c0ee4aadd7f829 flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-2 md:py-4",
                      children: p.map((e, t) => {
                        let a = e.icon;
                        return (0, s.jsxs)(
                          n.E.div,
                          {
                            initial: { opacity: 0, y: 30 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0, amount: 0.2 },
                            transition: { duration: 0.6, delay: 0.1 * t },
                            className:
                              "flex-shrink-0 w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-84 rounded-2xl md:rounded-3xl relative overflow-hidden group cursor-pointer",
                            style: { scrollSnapAlign: "start" },
                            children: [
                              e.imageURL &&
                                (0, s.jsx)("img", {
                                  src: e.imageURL,
                                  alt: e.title,
                                  className:
                                    "jsx-e4c0ee4aadd7f829 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                }),
                              e.image &&
                                (0, s.jsx)(x.default, {
                                  src: e.image,
                                  alt: e.title,
                                  className:
                                    "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                }),
                              (0, s.jsx)("div", {
                                className:
                                  "jsx-e4c0ee4aadd7f829 absolute inset-0 bg-black/50 z-10",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "jsx-e4c0ee4aadd7f829 " +
                                  "absolute inset-0 bg-gradient-to-t ".concat(
                                    e.gradient,
                                    " opacity-90 z-20",
                                  ),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "jsx-e4c0ee4aadd7f829 absolute top-3 right-3 md:top-4 md:right-4 z-30",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "jsx-e4c0ee4aadd7f829 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110",
                                  children: (0, s.jsx)(a, {
                                    className:
                                      "jsx-e4c0ee4aadd7f829 w-5 h-5 md:w-6 md:h-6 text-white",
                                  }),
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "jsx-e4c0ee4aadd7f829 absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 z-30",
                                children: [
                                  (0, s.jsx)("h3", {
                                    className:
                                      "jsx-e4c0ee4aadd7f829 text-white text-center text-lg md:text-xl lg:text-2xl font-semibold mb-2 drop-shadow-md",
                                    children: e.title,
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "jsx-e4c0ee4aadd7f829 text-white/80 text-center text-xs md:text-sm mb-3 md:mb-4 drop-shadow-sm leading-relaxed",
                                    children: e.description,
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "jsx-e4c0ee4aadd7f829 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0",
                                    children: (0, s.jsx)("ul", {
                                      className:
                                        "jsx-e4c0ee4aadd7f829 text-white text-xs md:text-sm space-y-1 mt-2 md:mt-3",
                                      children: e.points
                                        .slice(0, w ? 2 : 3)
                                        .map((e, t) =>
                                          (0, s.jsxs)(
                                            "li",
                                            {
                                              className:
                                                "jsx-e4c0ee4aadd7f829 flex items-start",
                                              children: [
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "jsx-e4c0ee4aadd7f829 w-1 h-1 bg-white rounded-full mt-1.5 md:mt-2 mr-2 flex-shrink-0",
                                                }),
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "jsx-e4c0ee4aadd7f829 leading-tight",
                                                  children: e,
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
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "jsx-e4c0ee4aadd7f829 flex justify-center space-x-1.5 md:space-x-2 mt-6 md:mt-8",
                    children: Array.from({ length: i }).map((e, a) =>
                      (0, s.jsx)(
                        "div",
                        {
                          className:
                            "jsx-e4c0ee4aadd7f829 " +
                            "h-1 rounded-md transition-all duration-300 ".concat(
                              t === a
                                ? "w-6 md:w-8 bg-purple-600"
                                : "w-3 md:w-4 bg-gray-300",
                            ),
                        },
                        a,
                      ),
                    ),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "jsx-e4c0ee4aadd7f829 flex sm:hidden justify-center space-x-4 mt-4",
                    children: [
                      (0, s.jsx)("button", {
                        onClick: E,
                        disabled: 0 === t,
                        className:
                          "jsx-e4c0ee4aadd7f829 " +
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ".concat(
                            0 === t
                              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                              : "bg-purple-600 text-white hover:bg-purple-700",
                          ),
                        children: "Previous",
                      }),
                      (0, s.jsx)("button", {
                        onClick: k,
                        disabled: t >= i - 1,
                        className:
                          "jsx-e4c0ee4aadd7f829 " +
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ".concat(
                            t >= i - 1
                              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                              : "bg-purple-600 text-white hover:bg-purple-700",
                          ),
                        children: "Next",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(r(), {
                id: "e4c0ee4aadd7f829",
                children:
                  ".scrollbar-hide.jsx-e4c0ee4aadd7f829::-webkit-scrollbar{display:none}",
              }),
            ],
          })
        );
      };
    },
    23197: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return f;
        },
      });
      var s = a(57437),
        i = a(2265),
        r = a(14950),
        l = a(34446),
        n = a(54817),
        o = a(90849),
        c = a(79869),
        d = a(49590),
        m = a(17583),
        x = a(8400),
        u = a(33907),
        p = a(55430),
        h = a(92940),
        g = a(71976);
      let A = [
        {
          id: 1,
          number: "01",
          title: "Intent-Based Navigation",
          subtitle: "Smart Navigation",
          description:
            "Jump users to the right page instantly based on their request. No more clicking through menus or searching for the right section.",
          icon: n.Z,
          image:
            "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-emerald-400 to-teal-500",
          keyFeatures: [
            "Instant page navigation from natural language",
            "Context-aware routing system",
            "Reduce user clicks by 70%",
            "Works across all device types",
          ],
        },
        {
          id: 2,
          number: "02",
          title: "Intelligent Autofill",
          subtitle: "Smart Form Completion",
          description:
            "Extracts values from natural language and fills form fields automatically. Turn conversations into completed forms effortlessly.",
          icon: o.Z,
          image:
            "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-blue-400 to-cyan-500",
          keyFeatures: [
            "Natural language to form data extraction",
            "Multi-field intelligent completion",
            "Reduces form abandonment rates",
            "Supports complex form structures",
          ],
        },
        {
          id: 3,
          number: "03",
          title: "AI-Powered Slot Completion",
          subtitle: "Smart Data Collection",
          description:
            "Identifies missing information like dates and passenger counts, then prompts users for only what's needed. No overwhelming forms.",
          icon: c.Z,
          image:
            "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-purple-400 to-violet-500",
          keyFeatures: [
            "Dynamic missing data identification",
            "Contextual prompt generation",
            "Streamlined user experience",
            "Intelligent data validation",
          ],
        },
        {
          id: 4,
          number: "04",
          title: "Dynamic Website Updates",
          subtitle: "Real-Time Interface",
          description:
            "Pages, dropdowns, forms, and UIs update in real-time without page reloads. Instant feedback for seamless interactions.",
          icon: d.Z,
          image:
            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-orange-400 to-red-500",
          keyFeatures: [
            "Real-time UI updates without reloads",
            "Dynamic content personalization",
            "Instant visual feedback",
            "Seamless state management",
          ],
        },
        {
          id: 5,
          number: "05",
          title: "Multilingual Support",
          subtitle: "Global Communication",
          description:
            "Understands user prompts in multiple languages and responds appropriately. Break down language barriers for global users.",
          icon: m.Z,
          image:
            "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-pink-400 to-rose-500",
          keyFeatures: [
            "Multi-language natural language processing",
            "Cultural context understanding",
            "Real-time translation capabilities",
            "Global user accessibility",
          ],
        },
        {
          id: 6,
          number: "06",
          title: "Works on Mobile Too",
          subtitle: "Cross-Platform Experience",
          description:
            "Seamless experience across desktop and mobile devices. Your users get the same powerful AI assistance anywhere.",
          icon: x.Z,
          image:
            "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-indigo-400 to-purple-500",
          keyFeatures: [
            "Responsive design optimization",
            "Touch-friendly interactions",
            "Consistent cross-device experience",
            "Progressive web app capabilities",
          ],
        },
      ];
      function f() {
        let [e, t] = (0, i.useState)(0),
          [a, n] = (0, i.useState)(null),
          o = (e) => {
            t(e);
          },
          c = A[e].icon;
        return (0, s.jsxs)("section", {
          className:
            "relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8",
          children: [
            (0, s.jsxs)("div", {
              className: "absolute inset-0 bg-gradient-to-br from-slate-950",
              children: [
                (0, s.jsx)(r.E.div, {
                  className: "absolute inset-0 opacity-30",
                  animate: {
                    background: [
                      "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                    ],
                  },
                  transition: { duration: 8, repeat: 1 / 0 },
                }),
                [...Array(15)].map((e, t) =>
                  (0, s.jsx)(
                    r.E.div,
                    {
                      className: "absolute w-1 h-1 bg-blue-400 rounded-full",
                      style: {
                        left: "".concat(100 * Math.random(), "%"),
                        top: "".concat(100 * Math.random(), "%"),
                      },
                      animate: {
                        y: [0, -50, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      },
                      transition: {
                        duration: 2 + 1 * Math.random(),
                        repeat: 1 / 0,
                        delay: 2 * Math.random(),
                      },
                    },
                    t,
                  ),
                ),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "relative z-10 w-full max-w-7xl mx-auto",
              children: [
                (0, s.jsxs)(r.E.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  className: "text-center mb-8 lg:mb-16",
                  children: [
                    (0, s.jsx)(r.E.div, {
                      animate: { rotate: [0, 5, 0] },
                      transition: { duration: 2, repeat: 1 / 0 },
                      className: "inline-block mb-4",
                      children: (0, s.jsx)(u.Z, {
                        className:
                          "text-blue-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10",
                      }),
                    }),
                    (0, s.jsx)(r.E.h2, {
                      className:
                        "text-3xl sm:text-4xl lg:text-6xl font-light mb-4 text-white leading-tight px-4",
                      animate: {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      },
                      transition: { duration: 3, repeat: 1 / 0 },
                      style: {
                        background:
                          "linear-gradient(90deg, #ffffff, #60a5fa, #3b82f6, #ffffff)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      },
                      children: "Key Features",
                    }),
                    (0, s.jsx)(r.E.p, {
                      className:
                        "text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.5 },
                      children:
                        "Powerful capabilities that transform user interactions with intelligent automation",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col xl:grid xl:grid-cols-3 gap-6 lg:gap-12",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "xl:col-span-1 xl:order-last",
                      children: [
                        (0, s.jsxs)(r.E.h3, {
                          className:
                            "text-lg sm:text-xl font-semibold mb-4 lg:mb-6 text-white text-center xl:text-left flex items-center gap-2 justify-center xl:justify-start",
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { delay: 0.3 },
                          children: [
                            (0, s.jsx)(r.E.div, {
                              animate: { rotate: [0, 360] },
                              transition: {
                                duration: 8,
                                repeat: 1 / 0,
                                ease: "linear",
                              },
                              children: (0, s.jsx)(u.Z, {
                                className:
                                  "w-4 h-4 sm:w-5 sm:h-5 text-blue-400",
                              }),
                            }),
                            "All Features",
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "xl:space-y-3",
                          children: (0, s.jsx)("div", {
                            className:
                              "flex xl:flex-col gap-3 overflow-x-auto xl:overflow-x-visible pb-4 xl:pb-0",
                            children: A.map((t, i) =>
                              (0, s.jsxs)(
                                r.E.button,
                                {
                                  onClick: () => o(i),
                                  onMouseEnter: () => n(i),
                                  onMouseLeave: () => n(null),
                                  initial: { opacity: 0, x: 20 },
                                  animate: { opacity: 1, x: 0 },
                                  transition: { delay: 0.1 * i },
                                  whileHover: { scale: 1.02, x: 4 },
                                  whileTap: { scale: 0.98 },
                                  className:
                                    "flex-shrink-0 w-64 xl:w-full text-left flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-400 relative overflow-hidden ".concat(
                                      e === i
                                        ? "bg-gradient-to-r from-slate-700/50 to-slate-800/50 shadow-lg border border-blue-500/30 backdrop-blur-sm"
                                        : a === i
                                          ? "bg-gradient-to-r from-slate-600/50 to-slate-700/50 shadow-lg border border-purple-500/30 backdrop-blur-sm"
                                          : "bg-slate-800/30 border border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/40 backdrop-blur-sm",
                                    ),
                                  children: [
                                    (0, s.jsx)(r.E.div, {
                                      className:
                                        "absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10",
                                      initial: { x: "-100%" },
                                      animate: {
                                        x: e === i || a === i ? "0%" : "-100%",
                                        opacity: e === i || a === i ? 1 : 0,
                                      },
                                      transition: { duration: 0.4 },
                                    }),
                                    (0, s.jsx)(r.E.div, {
                                      className:
                                        "w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative z-10 flex-shrink-0 ".concat(
                                          e === i
                                            ? "bg-gradient-to-r ".concat(
                                                t.color,
                                                " shadow-md",
                                              )
                                            : a === i
                                              ? "bg-gradient-to-r ".concat(
                                                  t.color,
                                                  " shadow-md",
                                                )
                                              : "bg-slate-700/50 group-hover:bg-slate-600/50",
                                        ),
                                      whileHover: { rotate: 8, scale: 1.1 },
                                      animate: {
                                        boxShadow:
                                          e === i || a === i
                                            ? [
                                                "0 0 0 rgba(59, 130, 246, 0)",
                                                "0 0 15px rgba(59, 130, 246, 0.4)",
                                                "0 0 0 rgba(59, 130, 246, 0)",
                                              ]
                                            : "0 0 0 rgba(59, 130, 246, 0)",
                                      },
                                      transition: {
                                        boxShadow: {
                                          duration: 2,
                                          repeat: 1 / 0,
                                        },
                                        rotate: { duration: 0.2 },
                                        scale: { duration: 0.2 },
                                      },
                                      children: (0, s.jsx)(t.icon, {
                                        className:
                                          "text-xs sm:text-sm transition-colors duration-300 ".concat(
                                            e === i || a === i
                                              ? "text-white"
                                              : "text-slate-300 group-hover:text-white",
                                          ),
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "flex-1 relative z-10 min-w-0",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex items-center gap-2 mb-1 sm:mb-2",
                                          children: [
                                            (0, s.jsx)(r.E.span, {
                                              className:
                                                "text-xs sm:text-sm font-medium transition-colors duration-300 ".concat(
                                                  e === i || a === i
                                                    ? "text-blue-300"
                                                    : "text-slate-400 group-hover:text-slate-300",
                                                ),
                                              animate: {
                                                scale:
                                                  e === i || a === i
                                                    ? [1, 1.1, 1]
                                                    : 1,
                                              },
                                              transition: {
                                                duration: 1,
                                                repeat: 1 / 0,
                                              },
                                              children: t.number,
                                            }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "text-xs sm:text-sm font-medium transition-colors duration-300 truncate ".concat(
                                                  e === i || a === i
                                                    ? "text-white"
                                                    : "text-slate-300 group-hover:text-white",
                                                ),
                                              children: t.title,
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)(r.E.div, {
                                          className:
                                            "w-full h-1.5 sm:h-2 rounded-full transition-all duration-400 relative overflow-hidden ".concat(
                                              e === i
                                                ? "bg-blue-500/30"
                                                : "bg-slate-700/40",
                                            ),
                                          children: [
                                            (0, s.jsx)(r.E.div, {
                                              className:
                                                "h-full rounded-full ".concat(
                                                  e === i
                                                    ? "bg-gradient-to-r ".concat(
                                                        t.color,
                                                      )
                                                    : "bg-slate-600",
                                                ),
                                              initial: { width: "0%" },
                                              animate: {
                                                width: e === i ? "100%" : "0%",
                                              },
                                              transition: {
                                                duration: 0.5,
                                                ease: "easeInOut",
                                              },
                                            }),
                                            e === i &&
                                              (0, s.jsx)(r.E.div, {
                                                className:
                                                  "absolute inset-0 bg-white/20 rounded-full",
                                                animate: {
                                                  x: ["-100%", "100%"],
                                                },
                                                transition: {
                                                  duration: 1.2,
                                                  repeat: 1 / 0,
                                                  ease: "easeInOut",
                                                },
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "xl:col-span-2",
                      children: (0, s.jsx)(l.M, {
                        mode: "wait",
                        children: (0, s.jsxs)(
                          r.E.div,
                          {
                            initial: { opacity: 0, x: -30, scale: 0.95 },
                            animate: { opacity: 1, x: 0, scale: 1 },
                            exit: { opacity: 0, x: 30, scale: 0.95 },
                            transition: { duration: 0.6, ease: "easeInOut" },
                            className: "space-y-4 sm:space-y-6",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6",
                                children: [
                                  (0, s.jsxs)(r.E.div, {
                                    className:
                                      "w-full sm:w-80 lg:w-48 h-32 sm:h-40 lg:h-36 rounded-2xl overflow-hidden flex-shrink-0 relative group",
                                    whileHover: { scale: 1.02 },
                                    transition: { duration: 0.3 },
                                    children: [
                                      (0, s.jsx)(r.E.img, {
                                        src: A[e].image,
                                        alt: A[e].title,
                                        className:
                                          "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                        initial: { scale: 1.1 },
                                        animate: { scale: 1 },
                                        transition: { duration: 0.6 },
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                      }),
                                      (0, s.jsx)(r.E.div, {
                                        className:
                                          "absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100",
                                        whileHover: { scale: 1.1 },
                                        transition: { duration: 0.2 },
                                        children: (0, s.jsx)(p.Z, {
                                          className: "w-4 h-4 text-white",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex-1 space-y-3 sm:space-y-4 text-center lg:text-left",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start",
                                        children: [
                                          (0, s.jsx)(r.E.div, {
                                            className:
                                              "flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ".concat(
                                                A[e].color,
                                                " rounded-2xl flex-shrink-0 shadow-lg",
                                              ),
                                            whileHover: {
                                              scale: 1.1,
                                              rotate: 5,
                                            },
                                            animate: {
                                              boxShadow: [
                                                "0 0 15px rgba(59, 130, 246, 0.3)",
                                                "0 0 25px rgba(59, 130, 246, 0.5)",
                                                "0 0 15px rgba(59, 130, 246, 0.3)",
                                              ],
                                            },
                                            transition: {
                                              boxShadow: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                              },
                                              scale: { duration: 0.2 },
                                              rotate: { duration: 0.2 },
                                            },
                                            children: (0, s.jsx)(c, {
                                              className:
                                                "text-xl sm:text-2xl text-white drop-shadow-sm",
                                            }),
                                          }),
                                          (0, s.jsxs)("div", {
                                            className: "flex-1",
                                            children: [
                                              (0, s.jsxs)("div", {
                                                className:
                                                  "flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-2 justify-center lg:justify-start",
                                                children: [
                                                  (0, s.jsx)(r.E.div, {
                                                    className:
                                                      "text-2xl sm:text-4xl font-light text-blue-400",
                                                    animate: {
                                                      scale: [1, 1.05, 1],
                                                    },
                                                    transition: {
                                                      duration: 2,
                                                      repeat: 1 / 0,
                                                    },
                                                    children: A[e].number,
                                                  }),
                                                  (0, s.jsx)(r.E.h3, {
                                                    className:
                                                      "text-xl sm:text-3xl font-light text-white text-center sm:text-left",
                                                    initial: {
                                                      opacity: 0,
                                                      y: 10,
                                                    },
                                                    animate: {
                                                      opacity: 1,
                                                      y: 0,
                                                    },
                                                    transition: { delay: 0.2 },
                                                    children: A[e].title,
                                                  }),
                                                ],
                                              }),
                                              (0, s.jsx)(r.E.p, {
                                                className:
                                                  "text-xs sm:text-sm text-blue-300",
                                                initial: { opacity: 0 },
                                                animate: { opacity: 1 },
                                                transition: { delay: 0.3 },
                                                children: A[e].subtitle,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)(r.E.p, {
                                        className:
                                          "text-base sm:text-lg text-slate-300 leading-relaxed",
                                        initial: { opacity: 0, y: 10 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 0.4 },
                                        children: A[e].description,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(r.E.div, {
                                initial: { opacity: 0, y: 15 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.5, delay: 0.5 },
                                className:
                                  "bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-xl",
                                children: [
                                  (0, s.jsxs)(r.E.h4, {
                                    className:
                                      "text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white flex items-center gap-2",
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    transition: { delay: 0.6 },
                                    children: [
                                      (0, s.jsx)(h.Z, {
                                        className:
                                          "w-4 h-4 sm:w-5 sm:h-5 text-green-400",
                                      }),
                                      "Key Capabilities",
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "grid sm:grid-cols-2 gap-3 sm:gap-4",
                                    children: A[e].keyFeatures.map((e, t) =>
                                      (0, s.jsxs)(
                                        r.E.div,
                                        {
                                          initial: { opacity: 0, x: -15 },
                                          animate: { opacity: 1, x: 0 },
                                          transition: {
                                            duration: 0.4,
                                            delay: 0.7 + 0.1 * t,
                                          },
                                          whileHover: { x: 3, scale: 1.01 },
                                          className:
                                            "flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-slate-700/30 transition-all duration-300 cursor-pointer group",
                                          children: [
                                            (0, s.jsx)(r.E.div, {
                                              animate: { scale: [1, 1.2, 1] },
                                              transition: {
                                                duration: 1.5,
                                                repeat: 1 / 0,
                                                delay: 0.2 * t,
                                              },
                                              children: (0, s.jsx)(h.Z, {
                                                className:
                                                  "text-blue-400 mt-0.5 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 group-hover:text-blue-300 transition-colors",
                                              }),
                                            }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "text-slate-300 text-xs sm:text-sm group-hover:text-white transition-colors",
                                              children: e,
                                            }),
                                          ],
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              e === A.length - 1 &&
                                (0, s.jsx)(r.E.div, {
                                  initial: { opacity: 0, y: 15, scale: 0.95 },
                                  animate: { opacity: 1, y: 0, scale: 1 },
                                  transition: { duration: 0.6, delay: 0.8 },
                                  className: "pt-4 text-center lg:text-left",
                                  children: (0, s.jsxs)(r.E.button, {
                                    className:
                                      "inline-flex bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl group",
                                    whileHover: { scale: 1.05, y: -2 },
                                    whileTap: { scale: 0.95 },
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: "text-sm sm:text-lg",
                                        children: "Explore All Features",
                                      }),
                                      (0, s.jsx)(g.Z, {
                                        className:
                                          "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform",
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          },
                          e,
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    65117: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return h;
        },
      });
      var s = a(57437),
        i = a(2265),
        r = a(14950),
        l = a(79869),
        n = a(22757),
        o = a(64042),
        c = a(29338),
        d = a(71976),
        m = a(11240),
        x = a(66648),
        u = a(87138);
      let p = [
        {
          id: 1,
          title: "Human-Centered Intelligence",
          category: "Experience",
          challenge:
            "Technology that feels cold, robotic, and disconnected from human needs",
          solution:
            "AI that understands, adapts, and genuinely cares about user experience",
          icon: l.Z,
          gradient: "from-purple-600 to-indigo-600",
          imageUrl: {
            src: "/_next/static/media/portrait-person-ai-robot.71059171.jpg",
            height: 3584,
            width: 5376,
            blurDataURL:
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJRNZ//EAB0QAAEEAgMAAAAAAAAAAAAAAAIBAwQRACEGFTL/2gAIAQEAAT8AhMsrxtZJBZdiQEmtj4rP/8QAGREAAwADAAAAAAAAAAAAAAAAAQIDACIx/9oACAECAQE/ALMxo2x6c//EABgRAQADAQAAAAAAAAAAAAAAAAEAAxIh/9oACAEDAQE/AKQwcJ//2Q==",
            blurWidth: 8,
            blurHeight: 5,
          },
          benefits: [
            {
              title: "Intuitive Interactions",
              description: "Natural conversations that feel effortless",
            },
            {
              title: "Context Awareness",
              description: "Understanding what you need before you ask",
            },
            {
              title: "Emotional Intelligence",
              description: "Technology that responds with empathy",
            },
            {
              title: "Adaptive Learning",
              description: "Gets better with every interaction",
            },
          ],
          details: [
            "Conversational AI that understands nuance and context",
            "Interfaces that adapt to individual preferences and behaviors",
            "Predictive assistance that anticipates user needs",
          ],
        },
        {
          id: 2,
          title: "Effortless Automation",
          category: "Efficiency",
          challenge:
            "Repetitive tasks consuming valuable time and mental energy",
          solution:
            "Intelligent automation that handles complexity behind the scenes",
          icon: n.Z,
          gradient: "from-blue-600 to-cyan-600",
          imageUrl: {
            src: "/_next/static/media/automation.8e01766d.jpg",
            height: 1500,
            width: 1026,
            blurDataURL:
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIIoD//EAB0QAAIBBAMAAAAAAAAAAAAAAAECAwAEBRITIoH/2gAIAQEAAT8AyORt7ORESHlJXYjq+vrV/8QAGREBAAIDAAAAAAAAAAAAAAAAAgARIjFR/9oACAECAQE/AG6axO+T/8QAGxEBAAAHAAAAAAAAAAAAAAAAAwABAhEjMkL/2gAIAQMBAT8AMrnRkTWXUf/Z",
            blurWidth: 5,
            blurHeight: 8,
          },
          benefits: [
            {
              title: "Seamless Workflows",
              description: "Complex processes simplified into single actions",
            },
            {
              title: "Smart Automation",
              description:
                "Handles routine tasks while you focus on what matters",
            },
            {
              title: "Instant Results",
              description: "Lightning-fast processing that keeps you in flow",
            },
            {
              title: "Reliable Performance",
              description: "Consistent excellence you can depend on",
            },
          ],
          details: [
            "Workflow orchestration that connects disparate systems seamlessly",
            "Intelligent task prioritization and resource allocation",
            "Self-healing systems that prevent issues before they occur",
          ],
        },
        {
          id: 3,
          title: "Meaningful Impact",
          category: "Purpose",
          challenge:
            "Technology that adds complexity instead of solving real problems",
          solution:
            "Solutions designed to create genuine value and positive change",
          icon: o.Z,
          gradient: "from-pink-600 to-rose-600",
          imageUrl: {
            src: "/_next/static/media/meaningful-impact.a2dacd30.jpg",
            height: 6667,
            width: 6667,
            blurDataURL:
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqoP/xAAaEAADAQADAAAAAAAAAAAAAAABAgMEADJy/9oACAEBAAE/ALV2rtzokGMG7OACo9c//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",
            blurWidth: 8,
            blurHeight: 8,
          },
          benefits: [
            {
              title: "Real-World Solutions",
              description: "Addressing actual problems with tangible results",
            },
            {
              title: "Sustainable Growth",
              description: "Building for long-term success and stability",
            },
            {
              title: "Inclusive Design",
              description: "Technology that works for everyone",
            },
            {
              title: "Positive Change",
              description: "Creating ripple effects that benefit communities",
            },
          ],
          details: [
            "User research and empathy-driven design processes",
            "Accessibility-first development ensuring universal usability",
            "Environmental consideration in every technical decision",
          ],
        },
      ];
      var h = () => {
        let [e, t] = (0, i.useState)(0);
        return (0, s.jsxs)("section", {
          className:
            "w-full bg-gradient-to-br from-[#0A0118] via-[#1A0B3D] to-[#0A0118] text-white py-24 relative overflow-hidden",
          children: [
            (0, s.jsxs)("div", {
              className: "absolute inset-0",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse",
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse",
                  style: { animationDelay: "2s" },
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "max-w-7xl mx-auto px-6 relative z-10",
              children: [
                (0, s.jsxs)(r.E.div, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.8 },
                  className: "text-center mb-20",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20",
                      children: [
                        (0, s.jsx)(c.Z, {
                          className: "w-5 h-5 text-purple-400 animate-pulse",
                        }),
                        (0, s.jsx)("span", {
                          className: "text-purple-200 font-medium",
                          children: "The Difference We Make",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("h2", {
                      className:
                        "text-5xl md:text-7xl font-light mb-8 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight",
                      children: [
                        "Why This",
                        " ",
                        (0, s.jsx)("span", {
                          className:
                            "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold",
                          children: "Matters",
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed",
                      children:
                        "Every line of code we write, every feature we design, and every solution we create is driven by a simple belief: technology should make life better, not more complicated.",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "flex flex-wrap justify-center gap-4 mb-16",
                  children: p.map((a, i) =>
                    (0, s.jsx)(
                      r.E.button,
                      {
                        onClick: () => t(i),
                        className:
                          "px-8 py-4 rounded-full font-semibold transition-all duration-300 ".concat(
                            e === i
                              ? "bg-white text-gray-900 shadow-xl"
                              : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20",
                          ),
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: a.category,
                      },
                      a.id,
                    ),
                  ),
                }),
                (0, s.jsxs)(
                  r.E.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6 },
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "space-y-8",
                        children: [
                          (0, s.jsx)("div", {
                            className: "space-y-6",
                            children: (0, s.jsxs)("div", {
                              className: "flex items-center gap-6",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "p-4 rounded-2xl bg-gradient-to-r ".concat(
                                      p[e].gradient,
                                      " shadow-xl",
                                    ),
                                  children: i.createElement(p[e].icon, {
                                    className: "w-8 h-8 text-white",
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("h3", {
                                      className: "text-4xl font-bold mb-2",
                                      children: p[e].title,
                                    }),
                                    (0, s.jsxs)("p", {
                                      className: "text-purple-300 text-lg",
                                      children: [p[e].category, " Focus"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20",
                            children: [
                              (0, s.jsxs)("h4", {
                                className:
                                  "text-xl font-semibold mb-4 text-red-300 flex items-center gap-3",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-3 h-3 bg-red-400 rounded-full",
                                  }),
                                  "The Challenge",
                                ],
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-gray-300 text-lg leading-relaxed",
                                children: p[e].challenge,
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20",
                            children: [
                              (0, s.jsxs)("h4", {
                                className:
                                  "text-xl font-semibold mb-4 text-emerald-300 flex items-center gap-3",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-3 h-3 bg-emerald-400 rounded-full animate-pulse",
                                  }),
                                  "Our Approach",
                                ],
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-white font-medium mb-6 text-lg",
                                children: p[e].solution,
                              }),
                              (0, s.jsx)("ul", {
                                className: "space-y-3",
                                children: p[e].details.map((e, t) =>
                                  (0, s.jsxs)(
                                    "li",
                                    {
                                      className:
                                        "flex items-start text-gray-300",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-4 flex-shrink-0",
                                        }),
                                        (0, s.jsx)("span", {
                                          className: "text-lg",
                                          children: e,
                                        }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "space-y-8",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "relative rounded-3xl overflow-hidden h-80 mb-8 group",
                            children: [
                              p[e].imageUrl &&
                                (0, s.jsx)(x.default, {
                                  src: p[e].imageUrl,
                                  alt: p[e].title,
                                  className:
                                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                }),
                              (0, s.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-t ".concat(
                                    p[e].gradient,
                                    " opacity-70",
                                  ),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent",
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "absolute bottom-6 left-6 text-white",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "text-sm opacity-90 mb-1",
                                    children: "Focus Area",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "text-2xl font-bold",
                                    children: p[e].category,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: p[e].benefits.map((e, t) =>
                              (0, s.jsx)(
                                r.E.div,
                                {
                                  initial: { opacity: 0, scale: 0.9 },
                                  animate: { opacity: 1, scale: 1 },
                                  transition: { duration: 0.5, delay: 0.1 * t },
                                  className:
                                    "bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group",
                                  children: (0, s.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                      (0, s.jsx)("h5", {
                                        className:
                                          "font-bold text-white mb-2 group-hover:text-purple-200 transition-colors",
                                        children: e.title,
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "text-sm text-gray-300 leading-relaxed",
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  e,
                ),
                (0, s.jsx)(r.E.div, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "text-center mt-24 pt-16 border-t border-white/10",
                  children: (0, s.jsxs)("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent",
                        children: "Ready to Experience the Future?",
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-xl text-gray-300 mb-10 leading-relaxed",
                        children:
                          "Join us in creating technology that doesn't just work—it inspires, empowers, and transforms. Because when technology truly serves humanity, amazing things happen.",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col sm:flex-row gap-6 justify-center items-center",
                        children: [
                          (0, s.jsx)(u.default, {
                            href: "/contact-us",
                            passHref: !0,
                            children: (0, s.jsxs)(r.E.button, {
                              className:
                                "group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg min-w-[240px] h-[72px]",
                              whileHover: { scale: 1.05 },
                              whileTap: { scale: 0.95 },
                              children: [
                                (0, s.jsx)("span", {
                                  children: "Start Your Journey",
                                }),
                                (0, s.jsx)(d.Z, {
                                  className:
                                    "w-5 h-5 group-hover:translate-x-2 transition-transform duration-300",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(u.default, {
                            href: "/about-us",
                            passHref: !0,
                            children: (0, s.jsxs)(r.E.button, {
                              className:
                                "inline-flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-12 py-6 rounded-2xl border border-white/20 transition-all duration-300 text-lg min-w-[240px] h-[72px]",
                              whileHover: { scale: 1.05 },
                              whileTap: { scale: 0.95 },
                              children: [
                                (0, s.jsx)(m.Z, { className: "w-5 h-5" }),
                                (0, s.jsx)("span", { children: "Learn More" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [648, 138, 950, 59, 918, 971, 23, 744], function () {
      return e((e.s = 94912));
    }),
      (_N_E = e.O());
  },
]);
