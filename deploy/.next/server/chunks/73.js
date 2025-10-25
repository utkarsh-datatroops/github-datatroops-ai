(exports.id = 73),
  (exports.ids = [73]),
  (exports.modules = {
    8472: () => {},
    1596: (e, t, r) => {
      "use strict";
      r(8472);
      var a = r(7577),
        n = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(a),
        i = "undefined" != typeof process && process.env && !0,
        s = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        o = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              r = t.name,
              a = void 0 === r ? "stylesheet" : r,
              n = t.optimizeForSpeed,
              o = void 0 === n ? i : n;
            l(s(a), "`name` must be a string"),
              (this._name = a),
              (this._deletedRulePlaceholder = "#" + a + "-deleted-rule____{}"),
              l("boolean" == typeof o, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = o),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0),
              (this._nonce = null);
          }
          var t = e.prototype;
          return (
            (t.setOptimizeForSpeed = function (e) {
              l(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean",
              ),
                l(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted",
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (t.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (t.inject = function () {
              var e = this;
              l(!this._injected, "sheet already injected"),
                (this._injected = !0),
                (this._serverSheet = {
                  cssRules: [],
                  insertRule: function (t, r) {
                    return (
                      "number" == typeof r
                        ? (e._serverSheet.cssRules[r] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      r
                    );
                  },
                  deleteRule: function (t) {
                    e._serverSheet.cssRules[t] = null;
                  },
                });
            }),
            (t.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (t.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (t.insertRule = function (e, t) {
              return (
                l(s(e), "`insertRule` accepts only strings"),
                "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++
              );
            }),
            (t.replaceRule = function (e, t) {
              this._optimizeForSpeed;
              var r = this._serverSheet;
              if (
                (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e])
              )
                return e;
              r.deleteRule(e);
              try {
                r.insertRule(t, e);
              } catch (a) {
                i ||
                  console.warn(
                    "StyleSheet: illegal rule: \n\n" +
                      t +
                      "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                  ),
                  r.insertRule(this._deletedRulePlaceholder, e);
              }
              return e;
            }),
            (t.deleteRule = function (e) {
              this._serverSheet.deleteRule(e);
            }),
            (t.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                (this._serverSheet.cssRules = []);
            }),
            (t.cssRules = function () {
              return this._serverSheet.cssRules;
            }),
            (t.makeStyleTag = function (e, t, r) {
              t &&
                l(
                  s(t),
                  "makeStyleTag accepts only strings as second parameter",
                );
              var a = document.createElement("style");
              this._nonce && a.setAttribute("nonce", this._nonce),
                (a.type = "text/css"),
                a.setAttribute("data-" + e, ""),
                t && a.appendChild(document.createTextNode(t));
              var n = document.head || document.getElementsByTagName("head")[0];
              return r ? n.insertBefore(a, r) : n.appendChild(a), a;
            }),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var a = t[r];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            })(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            e
          );
        })();
      function l(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var c = function (e) {
          for (var t = 5381, r = e.length; r; )
            t = (33 * t) ^ e.charCodeAt(--r);
          return t >>> 0;
        },
        d = {};
      function u(e, t) {
        if (!t) return "jsx-" + e;
        var r = String(t),
          a = e + r;
        return d[a] || (d[a] = "jsx-" + c(e + "-" + r)), d[a];
      }
      function m(e, t) {
        var r = e + (t = t.replace(/\/style/gi, "\\/style"));
        return (
          d[r] || (d[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[r]
        );
      }
      var h = a.createContext(null);
      (h.displayName = "StyleSheetContext"),
        n.default.useInsertionEffect || n.default.useLayoutEffect;
      var p = void 0;
      function f(e) {
        var t = p || a.useContext(h);
        return t && t.add(e), null;
      }
      (f.dynamic = function (e) {
        return e
          .map(function (e) {
            return u(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = f);
    },
    7626: (e, t, r) => {
      "use strict";
      e.exports = r(1596).style;
    },
    6866: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => c });
      var a = r(326),
        n = r(7626),
        i = r.n(n),
        s = r(7577),
        o = r(8922);
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
        ],
        c = () => {
          let e = (0, s.useRef)(null),
            [t, r] = (0, s.useState)(0),
            [n, c] = (0, s.useState)(0),
            [d, u] = (0, s.useState)(0),
            [m, h] = (0, s.useState)(!1),
            [p, f] = (0, s.useState)(0),
            [x, g] = (0, s.useState)(0),
            y = (0, s.useRef)(null),
            v = (e) =>
              e && e.children.length > 0 ? e.children[0].offsetWidth + 24 : 344,
            b = () => {
              if (e.current && n > 0) {
                let t = e.current.scrollLeft,
                  a = e.current.scrollWidth - e.current.offsetWidth;
                a > 0 && n > 1
                  ? r(Math.min(n - 1, Math.round((t / a) * (n - 1))))
                  : r(0);
              }
            };
          (0, s.useLayoutEffect)(() => {
            let t = () => {
              e.current && (u(v(e.current)), c(Math.max(1, l.length - 1)), b());
            };
            return (
              t(),
              window.addEventListener("resize", t),
              () => window.removeEventListener("resize", t)
            );
          }, [l.length]);
          let j = (t) => {
              m &&
                e.current &&
                (t.preventDefault(),
                y.current && cancelAnimationFrame(y.current),
                (y.current = requestAnimationFrame(() => {
                  if (e.current) {
                    let r = t.pageX - p;
                    e.current.scrollLeft = x - r;
                  }
                  y.current = null;
                })));
            },
            w = () => {
              h(!1),
                e.current &&
                  ((e.current.style.cursor = "grab"),
                  (e.current.style.userSelect = "auto")),
                y.current &&
                  (cancelAnimationFrame(y.current), (y.current = null));
            };
          (0, s.useEffect)(
            () => (
              window.addEventListener("mousemove", j),
              window.addEventListener("mouseup", w),
              () => {
                window.removeEventListener("mousemove", j),
                  window.removeEventListener("mouseup", w);
              }
            ),
            [m, p, x],
          );
          let [S, N] = (0, s.useState)("bg-white");
          return (
            (0, s.useEffect)(() => {
              window.location.href.includes("ai-solutions")
                ? N("bg-white")
                : N("");
            }, []),
            (0, a.jsxs)("section", {
              className: `jsx-e4c0ee4aadd7f829 w-full ${S}  text-gray-900 py-20 overflow-hidden`,
              children: [
                (0, a.jsxs)("div", {
                  className: "jsx-e4c0ee4aadd7f829 max-w-7xl mx-auto px-6",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "jsx-e4c0ee4aadd7f829 flex justify-between items-start mb-16",
                      children: [
                        a.jsx(o.E.h2, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, amount: 0.3 },
                          transition: { duration: 0.6 },
                          className: `text-4xl md:text-5xl lg:text-6xl font-normal ${"bg-white" == S ? "text-gray-900" : "text-gray-100"}   leading-tight max-w-3xl`,
                          children:
                            "AI solutions for the world's most complex industries",
                        }),
                        (0, a.jsxs)("div", {
                          className: "jsx-e4c0ee4aadd7f829 flex space-x-3 mt-4",
                          children: [
                            a.jsx("button", {
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
                              className: `jsx-e4c0ee4aadd7f829 p-3 rounded-full border transition-all duration-200 ${0 === t ? "text-transparent border-gray-200 cursor-not-allowed" : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400"}`,
                              children: a.jsx("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                className: "jsx-e4c0ee4aadd7f829 w-5 h-5",
                                children: a.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M15 19l-7-7 7-7",
                                  className: "jsx-e4c0ee4aadd7f829",
                                }),
                              }),
                            }),
                            a.jsx("button", {
                              onClick: () => {
                                if (e.current && d > 0) {
                                  let t = e.current.scrollLeft + d;
                                  e.current.scrollTo({
                                    left: t,
                                    behavior: "smooth",
                                  });
                                }
                              },
                              disabled: t >= n - 1,
                              className: `jsx-e4c0ee4aadd7f829 p-3 rounded-full border transition-all duration-200 ${t >= n - 1 ? "text-transparent border-gray-200 cursor-not-allowed" : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400"}`,
                              children: a.jsx("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                className: "jsx-e4c0ee4aadd7f829 w-5 h-5",
                                children: a.jsx("path", {
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
                    a.jsx("div", {
                      className: "jsx-e4c0ee4aadd7f829 relative",
                      children: a.jsx("div", {
                        ref: e,
                        style: {
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                          cursor: "grab",
                        },
                        onScroll: b,
                        onMouseDown: (t) => {
                          e.current &&
                            (h(!0),
                            f(t.pageX),
                            g(e.current.scrollLeft),
                            (e.current.style.cursor = "grabbing"),
                            (e.current.style.userSelect = "none"),
                            t.preventDefault());
                        },
                        className:
                          "jsx-e4c0ee4aadd7f829 flex gap-6 overflow-x-auto scrollbar-hide py-4",
                        children: l.map((e, t) =>
                          (0, a.jsxs)(
                            o.E.div,
                            {
                              initial: { opacity: 0, y: 0 },
                              whileInView: { opacity: 1, y: 0 },
                              viewport: { once: !0, amount: 0.2 },
                              transition: { duration: 0.5, delay: 0.1 * t },
                              className:
                                "flex-shrink-0 w-80 h-96 rounded-3xl relative overflow-hidden group cursor-pointer",
                              children: [
                                a.jsx("img", {
                                  src: e.image,
                                  alt: e.title,
                                  className:
                                    "jsx-e4c0ee4aadd7f829 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                }),
                                a.jsx("div", {
                                  className: `jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t ${e.gradient} transition-opacity opacity-80 duration-300 group-hover:opacity-100`,
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "jsx-e4c0ee4aadd7f829 absolute inset-0 flex flex-col justify-end p-8",
                                  children: [
                                    a.jsx("h3", {
                                      className:
                                        "jsx-e4c0ee4aadd7f829 text-white text-center text-2xl font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]",
                                      children: e.title,
                                    }),
                                    a.jsx("div", {
                                      className:
                                        "jsx-e4c0ee4aadd7f829 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0",
                                      children: a.jsx("ul", {
                                        className:
                                          "jsx-e4c0ee4aadd7f829 text-white text-sm space-y-1 mt-3",
                                        children: e.points
                                          .slice(0, 3)
                                          .map((e, t) =>
                                            (0, a.jsxs)(
                                              "li",
                                              {
                                                className:
                                                  "jsx-e4c0ee4aadd7f829 flex items-start",
                                                children: [
                                                  a.jsx("span", {
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
                    a.jsx("div", {
                      className:
                        "jsx-e4c0ee4aadd7f829 flex justify-center space-x-2 mt-12",
                      children: Array.from({ length: n }).map((e, r) =>
                        a.jsx(
                          "div",
                          {
                            className: `jsx-e4c0ee4aadd7f829 h-1 rounded-md transition-all duration-300 ${t === r ? "w-8 bg-purple-600" : "w-4 bg-gray-300"}`,
                          },
                          r,
                        ),
                      ),
                    }),
                  ],
                }),
                a.jsx(i(), {
                  id: "e4c0ee4aadd7f829",
                  children:
                    ".scrollbar-hide.jsx-e4c0ee4aadd7f829::-webkit-scrollbar{display:none}",
                }),
              ],
            })
          );
        };
    },
    891: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => c });
      var a = r(326),
        n = r(7577),
        i = r(8922),
        s = r(622),
        o = r(1009);
      let l = ({ question: e, answer: t, isOpen: r, onClick: n }) =>
          (0, a.jsxs)(i.E.div, {
            initial: !1,
            animate: { backgroundColor: r ? "#3F0071" : "#240046" },
            className: (0, o.m6)(
              "rounded-md overflow-hidden cursor-pointer",
              r ? "shadow-md" : "",
            ),
            onClick: n,
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between p-3 md:p-4 !pb-2",
                children: [
                  a.jsx("h3", {
                    className: "text-md md:text-lg font-semibold text-white",
                    children: e,
                  }),
                  a.jsx(i.E.div, {
                    initial: !1,
                    animate: { rotate: r ? 180 : 0 },
                    children: r
                      ? a.jsx(s.s$2, { className: "text-purple-400 text-base" })
                      : a.jsx(s.RiI, { className: "text-gray-400 text-base" }),
                  }),
                ],
              }),
              a.jsx(i.E.div, {
                initial: { height: 0, opacity: 0 },
                animate: { height: r ? "auto" : 0, opacity: r ? 1 : 0 },
                transition: { duration: 0, ease: "easeInOut" },
                className: "px-3 md:px-4 pb-2",
                children: a.jsx("p", {
                  className:
                    "text-gray-300 leading-relaxed text-sm md:text-base",
                  children: t,
                }),
              }),
            ],
          }),
        c = ({ title: e, description: t, faqs: r }) => {
          let [s, o] = (0, n.useState)(null),
            c = (e) => {
              o(s === e ? null : e);
            };
          return a.jsx("section", {
            className: "w-full text-white py-16",
            children: (0, a.jsxs)("div", {
              className: "max-w-4xl mx-auto px-4",
              children: [
                (0, a.jsxs)(i.E.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.6 },
                  className: "text-center mb-6",
                  children: [
                    a.jsx("h2", {
                      className:
                        "text-3xl md:text-4xl font-light mb-4 text-white leading-tight",
                      children: e,
                    }),
                    a.jsx("p", {
                      className: "text-base text-gray-300 max-w-2xl mx-auto",
                      children: t,
                    }),
                  ],
                }),
                a.jsx("div", {
                  className: "space-y-2",
                  children: r.map((e, t) =>
                    a.jsx(
                      l,
                      {
                        question: e.question,
                        answer: e.answer,
                        isOpen: s === t,
                        onClick: () => c(t),
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
    5e3: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var a = r(326);
      let n = ({ message: e, children: t }) =>
        (0, a.jsxs)("div", {
          className: "group relative inline-flex h-full",
          children: [
            t,
            a.jsx("div", {
              className:
                "absolute left-1/2 -translate-x-1/2 top-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 mt-2",
              children: a.jsx("div", {
                className:
                  "bg-[var(--color-10002B)] border border-purple-500/30 text-gray-300 text-xs py-1 px-3 tracking-widest uppercase font-medium shadow-lg shadow-purple-900/10 whitespace-nowrap",
                children: e,
              }),
            }),
          ],
        });
    },
    3881: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => n });
      var a = r(6621);
      let n = (e) => [
        {
          type: "image/x-icon",
          sizes: "16x16",
          url: (0, a.fillMetadataSegment)(".", e.params, "favicon.ico") + "",
        },
      ];
    },
  });
