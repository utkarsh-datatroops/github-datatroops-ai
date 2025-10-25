"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [522],
  {
    80383: function (e, t, a) {
      var r = a(57437),
        i = a(48059),
        n = a.n(i),
        s = a(2265),
        o = a(14950);
      let l = [
        {
          id: 1,
          title: "Financial Services",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          gradient: "from-amber-500/20 to-black/80",
          points: [
            "Real-time fraud detection and prevention systems",
            "AI for credit scoring and risk assessment",
            "Automated financial advisory and robo-advisors",
            "Customer service automation with conversational AI",
            "Predictive analytics for loan default and churn",
          ],
        },
        {
          id: 2,
          title: "Healthcare",
          image:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          gradient: "from-purple-400/30 to-purple-900/80",
          points: [
            "AI-assisted diagnostics and medical imaging",
            "Patient triaging with intelligent chatbots",
            "Predictive analytics for disease outbreak & risk scoring",
            "NLP-powered documentation and medical records automation",
            "Drug discovery acceleration using machine learning",
          ],
        },
        {
          id: 3,
          title: "Manufacturing",
          image:
            "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          gradient: "from-black/100 to-orange-500/20",
          points: [
            "Automated quality control and defect detection",
            "Optimized production planning and scheduling",
            "Predictive maintenance for machinery",
            "Supply chain optimization",
            "Robotics integration for efficiency",
          ],
        },
        {
          id: 4,
          title: "Energy",
          image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          gradient: "from-blue-400/30 to-blue-900/80",
          points: [
            "AI-driven grid optimization and smart energy management",
            "Predictive analytics for energy demand and supply",
            "Automated fault detection and repair in energy infrastructure",
            "Renewable energy forecasting and integration",
            "Smart metering and consumption analysis",
          ],
        },
        {
          id: 5,
          title: "Retail & E-Commerce",
          image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          gradient: "from-black/80 to-amber-500/20 ",
          points: [
            "Personalized product recommendations to boost sales",
            "AI-driven demand forecasting and inventory management",
            "Intelligent chatbots for real-time customer support",
            "Visual search and image-based product discovery",
            "Sentiment analysis on customer reviews",
          ],
        },
        {
          id: 6,
          title: "Transportation",
          image:
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          gradient: "from-black/80 to-black/20",
          points: [
            "Autonomous vehicle navigation and safety systems",
            "Route optimization and traffic management",
            "Predictive maintenance for fleet management",
            "Smart logistics and supply chain automation",
            "Real-time monitoring and analytics",
          ],
        },
      ];
      t.Z = () => {
        let e = (0, s.useRef)(null),
          [t, a] = (0, s.useState)(0),
          [i, c] = (0, s.useState)(0),
          [d, u] = (0, s.useState)(0),
          [m, x] = (0, s.useState)(!1),
          [p, h] = (0, s.useState)(0),
          [f, g] = (0, s.useState)(0),
          b = (0, s.useRef)(null),
          y = (e) =>
            e && e.children.length > 0 ? e.children[0].offsetWidth + 24 : 344,
          v = () => {
            if (e.current && i > 0) {
              let t = e.current.scrollLeft,
                r = e.current.scrollWidth - e.current.offsetWidth;
              r > 0 && i > 1
                ? a(Math.min(i - 1, Math.round((t / r) * (i - 1))))
                : a(0);
            }
          };
        (0, s.useLayoutEffect)(() => {
          let t = () => {
            e.current && (u(y(e.current)), c(Math.max(1, l.length - 1)), v());
          };
          return (
            t(),
            window.addEventListener("resize", t),
            () => window.removeEventListener("resize", t)
          );
        }, [l.length]);
        let w = (t) => {
            m &&
              e.current &&
              (t.preventDefault(),
              b.current && cancelAnimationFrame(b.current),
              (b.current = requestAnimationFrame(() => {
                if (e.current) {
                  let a = t.pageX - p;
                  e.current.scrollLeft = f - a;
                }
                b.current = null;
              })));
          },
          j = () => {
            x(!1),
              e.current &&
                ((e.current.style.cursor = "grab"),
                (e.current.style.userSelect = "auto")),
              b.current &&
                (cancelAnimationFrame(b.current), (b.current = null));
          };
        (0, s.useEffect)(
          () => (
            window.addEventListener("mousemove", w),
            window.addEventListener("mouseup", j),
            () => {
              window.removeEventListener("mousemove", w),
                window.removeEventListener("mouseup", j);
            }
          ),
          [m, p, f],
        );
        let [N, k] = (0, s.useState)("bg-white");
        return (
          (0, s.useEffect)(() => {
            window.location.href.includes("ai-solutions")
              ? k("bg-white")
              : k("");
          }, []),
          (0, r.jsxs)("section", {
            className:
              "jsx-e4c0ee4aadd7f829 " +
              "w-full ".concat(N, "  text-gray-900 py-20 overflow-hidden"),
            children: [
              (0, r.jsxs)("div", {
                className: "jsx-e4c0ee4aadd7f829 max-w-7xl mx-auto px-6",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "jsx-e4c0ee4aadd7f829 flex justify-between items-start mb-16",
                    children: [
                      (0, r.jsx)(o.E.h2, {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, amount: 0.3 },
                        transition: { duration: 0.6 },
                        className:
                          "text-4xl md:text-5xl lg:text-6xl font-normal ".concat(
                            "bg-white" == N ? "text-gray-900" : "text-gray-100",
                            "   leading-tight max-w-3xl",
                          ),
                        children:
                          "AI solutions for the world's most complex industries",
                      }),
                      (0, r.jsxs)("div", {
                        className: "jsx-e4c0ee4aadd7f829 flex space-x-3 mt-4",
                        children: [
                          (0, r.jsx)("button", {
                            onClick: () => {
                              if (e.current && d > 0) {
                                let t = e.current.scrollLeft - d;
                                e.current.scrollTo({
                                  left: t,
                                  behavior: "smooth",
                                });
                              }
                            },
                            disabled: 0 === t,
                            className:
                              "jsx-e4c0ee4aadd7f829 " +
                              "p-3 rounded-full border transition-all duration-200 ".concat(
                                0 === t
                                  ? "text-transparent border-gray-200 cursor-not-allowed"
                                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400",
                              ),
                            children: (0, r.jsx)("svg", {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              className: "jsx-e4c0ee4aadd7f829 w-5 h-5",
                              children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7",
                                className: "jsx-e4c0ee4aadd7f829",
                              }),
                            }),
                          }),
                          (0, r.jsx)("button", {
                            onClick: () => {
                              if (e.current && d > 0) {
                                let t = e.current.scrollLeft + d;
                                e.current.scrollTo({
                                  left: t,
                                  behavior: "smooth",
                                });
                              }
                            },
                            disabled: t >= i - 1,
                            className:
                              "jsx-e4c0ee4aadd7f829 " +
                              "p-3 rounded-full border transition-all duration-200 ".concat(
                                t >= i - 1
                                  ? "text-transparent border-gray-200 cursor-not-allowed"
                                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400",
                              ),
                            children: (0, r.jsx)("svg", {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              className: "jsx-e4c0ee4aadd7f829 w-5 h-5",
                              children: (0, r.jsx)("path", {
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
                  (0, r.jsx)("div", {
                    className: "jsx-e4c0ee4aadd7f829 relative",
                    children: (0, r.jsx)("div", {
                      ref: e,
                      style: {
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        cursor: "grab",
                      },
                      onScroll: v,
                      onMouseDown: (t) => {
                        e.current &&
                          (x(!0),
                          h(t.pageX),
                          g(e.current.scrollLeft),
                          (e.current.style.cursor = "grabbing"),
                          (e.current.style.userSelect = "none"),
                          t.preventDefault());
                      },
                      className:
                        "jsx-e4c0ee4aadd7f829 flex gap-6 overflow-x-auto scrollbar-hide py-4",
                      children: l.map((e, t) =>
                        (0, r.jsxs)(
                          o.E.div,
                          {
                            initial: { opacity: 0, y: 0 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0, amount: 0.2 },
                            transition: { duration: 0.5, delay: 0.1 * t },
                            className:
                              "flex-shrink-0 w-80 h-96 rounded-3xl relative overflow-hidden group cursor-pointer",
                            children: [
                              (0, r.jsx)("img", {
                                src: e.image,
                                alt: e.title,
                                className:
                                  "jsx-e4c0ee4aadd7f829 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-e4c0ee4aadd7f829 " +
                                  "absolute inset-0 bg-gradient-to-t ".concat(
                                    e.gradient,
                                    " transition-opacity opacity-80 duration-300 group-hover:opacity-100",
                                  ),
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-e4c0ee4aadd7f829 absolute inset-0 flex flex-col justify-end p-8",
                                children: [
                                  (0, r.jsx)("h3", {
                                    className:
                                      "jsx-e4c0ee4aadd7f829 text-white text-center text-2xl font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]",
                                    children: e.title,
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-e4c0ee4aadd7f829 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0",
                                    children: (0, r.jsx)("ul", {
                                      className:
                                        "jsx-e4c0ee4aadd7f829 text-white text-sm space-y-1 mt-3",
                                      children: e.points
                                        .slice(0, 3)
                                        .map((e, t) =>
                                          (0, r.jsxs)(
                                            "li",
                                            {
                                              className:
                                                "jsx-e4c0ee4aadd7f829 flex items-start",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "jsx-e4c0ee4aadd7f829 w-1 h-1 bg-white rounded-full mt-2 mr-2 flex-shrink-0",
                                                }),
                                                e,
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
                        ),
                      ),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-e4c0ee4aadd7f829 flex justify-center space-x-2 mt-12",
                    children: Array.from({ length: i }).map((e, a) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "jsx-e4c0ee4aadd7f829 " +
                            "h-1 rounded-md transition-all duration-300 ".concat(
                              t === a ? "w-8 bg-purple-600" : "w-4 bg-gray-300",
                            ),
                        },
                        a,
                      ),
                    ),
                  }),
                ],
              }),
              (0, r.jsx)(n(), {
                id: "e4c0ee4aadd7f829",
                children:
                  ".scrollbar-hide.jsx-e4c0ee4aadd7f829::-webkit-scrollbar{display:none}",
              }),
            ],
          })
        );
      };
    },
    44458: function (e, t, a) {
      var r = a(57437),
        i = a(2265),
        n = a(14950),
        s = a(41942),
        o = a(96164);
      let l = (e) => {
        let { question: t, answer: a, isOpen: i, onClick: l } = e;
        return (0, r.jsxs)(n.E.div, {
          initial: !1,
          animate: { backgroundColor: i ? "#3F0071" : "#240046" },
          className: (0, o.m6)(
            "rounded-md overflow-hidden cursor-pointer",
            i ? "shadow-md" : "",
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
                (0, r.jsx)(n.E.div, {
                  initial: !1,
                  animate: { rotate: i ? 180 : 0 },
                  children: i
                    ? (0, r.jsx)(s.s$2, {
                        className: "text-purple-400 text-base",
                      })
                    : (0, r.jsx)(s.RiI, {
                        className: "text-gray-400 text-base",
                      }),
                }),
              ],
            }),
            (0, r.jsx)(n.E.div, {
              initial: { height: 0, opacity: 0 },
              animate: { height: i ? "auto" : 0, opacity: i ? 1 : 0 },
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
        let { title: t, description: a, faqs: s } = e,
          [o, c] = (0, i.useState)(null),
          d = (e) => {
            c(o === e ? null : e);
          };
        return (0, r.jsx)("section", {
          className: "w-full text-white py-16",
          children: (0, r.jsxs)("div", {
            className: "max-w-4xl mx-auto px-4",
            children: [
              (0, r.jsxs)(n.E.div, {
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
                children: s.map((e, t) =>
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
    56726: function (e, t, a) {
      var r = a(57437);
      t.Z = (e) => {
        let { message: t, children: a } = e;
        return (0, r.jsxs)("div", {
          className: "group relative inline-flex h-full",
          children: [
            a,
            (0, r.jsx)("div", {
              className:
                "absolute left-1/2 -translate-x-1/2 top-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 mt-2",
              children: (0, r.jsx)("div", {
                className:
                  "bg-[var(--color-10002B)] border border-purple-500/30 text-gray-300 text-xs py-1 px-3 tracking-widest uppercase font-medium shadow-lg shadow-purple-900/10 whitespace-nowrap",
                children: t,
              }),
            }),
          ],
        });
      };
    },
  },
]);
