(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [548],
  {
    13116: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 74945));
    },
    74945: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return B;
          },
        });
      var a = i(57437),
        s = i(61485),
        n = i(16733),
        r = i(48059),
        o = i.n(r),
        l = i(2265),
        c = i(14950);
      let d = [
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
      var m = () => {
          let e = (0, l.useRef)(null),
            [t, i] = (0, l.useState)(0),
            [s, n] = (0, l.useState)(0),
            [r, m] = (0, l.useState)(0),
            [u, x] = (0, l.useState)(!1),
            [h, p] = (0, l.useState)(0),
            [g, A] = (0, l.useState)(0),
            f = (0, l.useRef)(null),
            b = (e) =>
              e && e.children.length > 0 ? e.children[0].offsetWidth + 24 : 344,
            w = () => {
              if (e.current && s > 0) {
                let t = e.current.scrollLeft,
                  a = e.current.scrollWidth - e.current.offsetWidth;
                a > 0 && s > 1
                  ? i(Math.min(s - 1, Math.round((t / a) * (s - 1))))
                  : i(0);
              }
            };
          (0, l.useLayoutEffect)(() => {
            let t = () => {
              e.current && (m(b(e.current)), n(Math.max(1, d.length - 1)), w());
            };
            return (
              t(),
              window.addEventListener("resize", t),
              () => window.removeEventListener("resize", t)
            );
          }, [d.length]);
          let v = (t) => {
              u &&
                e.current &&
                (t.preventDefault(),
                f.current && cancelAnimationFrame(f.current),
                (f.current = requestAnimationFrame(() => {
                  if (e.current) {
                    let i = t.pageX - h;
                    e.current.scrollLeft = g - i;
                  }
                  f.current = null;
                })));
            },
            y = () => {
              x(!1),
                e.current &&
                  ((e.current.style.cursor = "grab"),
                  (e.current.style.userSelect = "auto")),
                f.current &&
                  (cancelAnimationFrame(f.current), (f.current = null));
            };
          return (
            (0, l.useEffect)(
              () => (
                window.addEventListener("mousemove", v),
                window.addEventListener("mouseup", y),
                () => {
                  window.removeEventListener("mousemove", v),
                    window.removeEventListener("mouseup", y);
                }
              ),
              [u, h, g],
            ),
            (0, a.jsxs)("section", {
              className:
                "jsx-e4c0ee4aadd7f829 w-full bg-white text-gray-900 py-20 overflow-hidden",
              children: [
                (0, a.jsxs)("div", {
                  className: "jsx-e4c0ee4aadd7f829 max-w-7xl mx-auto px-6",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "jsx-e4c0ee4aadd7f829 flex justify-between items-start mb-16",
                      children: [
                        (0, a.jsx)(c.E.h2, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, amount: 0.3 },
                          transition: { duration: 0.6 },
                          className:
                            "text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight max-w-3xl",
                          children:
                            "AI solutions for the world's most complex industries",
                        }),
                        (0, a.jsxs)("div", {
                          className: "jsx-e4c0ee4aadd7f829 flex space-x-3 mt-4",
                          children: [
                            (0, a.jsx)("button", {
                              onClick: () => {
                                if (e.current && r > 0) {
                                  let t = e.current.scrollLeft - r;
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
                                    ? "text-gray-300 border-gray-200 cursor-not-allowed"
                                    : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400",
                                ),
                              children: (0, a.jsx)("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                className: "jsx-e4c0ee4aadd7f829 w-5 h-5",
                                children: (0, a.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M15 19l-7-7 7-7",
                                  className: "jsx-e4c0ee4aadd7f829",
                                }),
                              }),
                            }),
                            (0, a.jsx)("button", {
                              onClick: () => {
                                if (e.current && r > 0) {
                                  let t = e.current.scrollLeft + r;
                                  e.current.scrollTo({
                                    left: t,
                                    behavior: "smooth",
                                  });
                                }
                              },
                              disabled: t >= s - 1,
                              className:
                                "jsx-e4c0ee4aadd7f829 " +
                                "p-3 rounded-full border transition-all duration-200 ".concat(
                                  t >= s - 1
                                    ? "text-gray-300 border-gray-200 cursor-not-allowed"
                                    : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400",
                                ),
                              children: (0, a.jsx)("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                className: "jsx-e4c0ee4aadd7f829 w-5 h-5",
                                children: (0, a.jsx)("path", {
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
                    (0, a.jsx)("div", {
                      className: "jsx-e4c0ee4aadd7f829 relative",
                      children: (0, a.jsx)("div", {
                        ref: e,
                        style: {
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                          cursor: "grab",
                        },
                        onScroll: w,
                        onMouseDown: (t) => {
                          e.current &&
                            (x(!0),
                            p(t.pageX),
                            A(e.current.scrollLeft),
                            (e.current.style.cursor = "grabbing"),
                            (e.current.style.userSelect = "none"),
                            t.preventDefault());
                        },
                        className:
                          "jsx-e4c0ee4aadd7f829 flex gap-6 overflow-x-auto scrollbar-hide py-4",
                        children: d.map((e, t) =>
                          (0, a.jsxs)(
                            c.E.div,
                            {
                              initial: { opacity: 0, y: 0 },
                              whileInView: { opacity: 1, y: 0 },
                              viewport: { once: !0, amount: 0.2 },
                              transition: { duration: 0.5, delay: 0.1 * t },
                              className:
                                "flex-shrink-0 w-80 h-96 rounded-3xl relative overflow-hidden group cursor-pointer",
                              children: [
                                (0, a.jsx)("img", {
                                  src: e.image,
                                  alt: e.title,
                                  className:
                                    "jsx-e4c0ee4aadd7f829 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "jsx-e4c0ee4aadd7f829 " +
                                    "absolute inset-0 bg-gradient-to-t ".concat(
                                      e.gradient,
                                      " transition-opacity opacity-80 duration-300 group-hover:opacity-100",
                                    ),
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "jsx-e4c0ee4aadd7f829 absolute inset-0 flex flex-col justify-end p-8",
                                  children: [
                                    (0, a.jsx)("h3", {
                                      className:
                                        "jsx-e4c0ee4aadd7f829 text-white text-center text-2xl font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]",
                                      children: e.title,
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "jsx-e4c0ee4aadd7f829 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0",
                                      children: (0, a.jsx)("ul", {
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
                                                  (0, a.jsx)("span", {
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
                    (0, a.jsx)("div", {
                      className:
                        "jsx-e4c0ee4aadd7f829 flex justify-center space-x-2 mt-12",
                      children: Array.from({ length: s }).map((e, i) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className:
                              "jsx-e4c0ee4aadd7f829 " +
                              "h-1 rounded-md transition-all duration-300 ".concat(
                                t === i
                                  ? "w-8 bg-purple-600"
                                  : "w-4 bg-gray-300",
                              ),
                          },
                          i,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)(o(), {
                  id: "e4c0ee4aadd7f829",
                  children:
                    ".scrollbar-hide.jsx-e4c0ee4aadd7f829::-webkit-scrollbar{display:none}",
                }),
              ],
            })
          );
        },
        u = i(66648),
        x = i(41942),
        h = {
          src: "/_next/static/media/hero-section-bg.7ea1de99.jpg",
          height: 3e3,
          width: 4200,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQX/2gAMAwEAAhADEAAAAJCKL//EABgQAAIDAAAAAAAAAAAAAAAAAAASAREh/9oACAEBAAE/AHlErD//xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAgEBPwBb/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAEDAQE/AFXb/9k=",
          blurWidth: 8,
          blurHeight: 6,
        };
      function p() {
        let e = [
          {
            id: 1,
            text: "Intelligent Data Integration & Analytics",
            icon: (0, a.jsx)(x.QJe, { className: "text-purple-300" }),
            top: "15%",
            left: "10%",
          },
          {
            id: 2,
            text: "Workflow Automation",
            icon: (0, a.jsx)(x.QJe, { className: "text-purple-300" }),
            top: "30%",
            right: "8%",
          },
          {
            id: 3,
            text: "Predictive Analytics & Forecasting",
            icon: (0, a.jsx)(x.QJe, { className: "text-purple-300" }),
            bottom: "20%",
            left: "5%",
          },
          {
            id: 4,
            text: "AI-Powered Customer Support & Chatbots",
            icon: (0, a.jsx)(x.QJe, { className: "text-purple-300" }),
            bottom: "10%",
            right: "15%",
          },
          {
            id: 5,
            text: "AIOps (AI for IT Operations)",
            icon: (0, a.jsx)(x.QJe, { className: "text-purple-300" }),
            top: "5%",
            left: "35%",
          },
          {
            id: 6,
            text: "Voice Assistants & Conversational AI",
            icon: (0, a.jsx)(x.QJe, { className: "text-purple-300" }),
            bottom: "30%",
            right: "10%",
          },
        ];
        return (0, a.jsxs)("section", {
          className:
            "relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4 md:p-8",
          children: [
            (0, a.jsx)(u.default, {
              src: h,
              alt: "Digital Marketing Background",
              layout: "fill",
              objectFit: "cover",
              quality: 100,
              className: "z-0",
              priority: !0,
            }),
            (0, a.jsx)("div", {
              className: "absolute inset-0 bg-black/40 z-10",
            }),
            (0, a.jsxs)("div", {
              className:
                "relative z-20 flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 max-w-4xl mx-auto",
              children: [
                (0, a.jsxs)(c.E.h1, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.2 },
                  className:
                    "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4",
                  children: [
                    "Architect Your Future with",
                    " ",
                    (0, a.jsx)(c.E.span, {
                      initial: { color: "#9D4EDD" },
                      animate: {
                        color: ["#9D4EDD", "#E0AAFF", "#C77DFF", "#9D4EDD"],
                      },
                      transition: {
                        duration: 3,
                        repeat: 1 / 0,
                        repeatType: "reverse",
                      },
                      children: "AI",
                    }),
                    " ",
                    "That Delivers",
                  ],
                }),
                (0, a.jsx)(c.E.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.4 },
                  className: "text-lg md:text-xl text-gray-300 mb-8 max-w-3xl",
                  children:
                    "Smarter Automation. Faster Decisions. Measurable Impact.",
                }),
                (0, a.jsxs)(c.E.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.8 },
                  className: "flex flex-col sm:flex-row gap-4",
                  children: [
                    (0, a.jsx)("a", {
                      href: "/contact-us",
                      className:
                        "inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300",
                      children: "Get In Touch",
                    }),
                    (0, a.jsx)("a", {
                      href: "/solutions",
                      className:
                        "inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-semibold shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300",
                      children: "Learn More",
                    }),
                  ],
                }),
              ],
            }),
            e.map((e) =>
              (0, a.jsxs)(
                c.E.div,
                {
                  className:
                    "absolute bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm flex items-center shadow-lg whitespace-nowrap text-purple-300 ".concat(
                      3 !== e.id && 5 !== e.id && 1 !== e.id
                        ? "hidden md:flex"
                        : "",
                    ),
                  initial: { opacity: 0.8, scale: 1 },
                  animate: { opacity: 1, scale: 1, y: [0, -2, 0] },
                  transition: {
                    duration: 2,
                    delay: 1 + 0.1 * e.id,
                    repeat: 1 / 0,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  style: {
                    top: e.top,
                    left: e.left,
                    right: e.right,
                    bottom: e.bottom,
                  },
                  children: [
                    (0, a.jsx)("span", {
                      className: "mr-2 text-white",
                      children: e.icon,
                    }),
                    e.text,
                  ],
                },
                e.id,
              ),
            ),
          ],
        });
      }
      var g = i(71994),
        A = i(32679);
      let f = [
        {
          id: 1,
          title: "Data Integration & Analytics",
          description:
            "Unifies and analyzes data from multiple sources for actionable insights.",
          image: {
            src: "/_next/static/media/integration-data.1da6c0e4.png",
            height: 699,
            width: 699,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Af///wABAQEB3N/tBSMgEgAA+wD7eYN+FIZ/fzLj5OTMAb6poTEA+PRaLzhfjq6trSvDx85++gH87nmGaT4RDg5+Ad7L1oHu4vV48+jbb8rF7n8FEQUY4wDp+RghFgdZT0xQAXdNW0EXMDSkTVVTys/EzkUUFhQK/P/+/AIOAQPs7O0xAbGytXT9+/yL/AH+ADENMgDv7vIA+wb4ABsuFgAICwlxAdnJ3Pfq4uwIweXH+RP2FQU0FTAB9QL1/CxMJAUJCwn1Aebc6IQABAB75O7kAPDq8gAbCBwADiALABIWEAAA//+BAdi63wAlRR1L+/j8ZgECAST6/foABgQF2/z6/ZkCAwG3k/V3Kb0VkcgAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8,
          },
          points: [
            "Breaks down data silos and enables smarter, data-driven decisions.",
            "Empowers cross-functional teams with a single source of truth.",
          ],
        },
        {
          id: 2,
          title: "Workflow Automation",
          description:
            "Orchestrates multi-departmental processes from approvals to data sync.",
          image: {
            src: "/_next/static/media/workflow-automation.330927e5.png",
            height: 729,
            width: 729,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Af///wDetNpFGCkd2EUkCu0jAAACf8HmHPXa5v4dQR/aAeXN4lkJFQum9ev9WNG7oCkA/v3vQ1ll8/z8BJjo6ugtAe3r7YAE/wR/38zhWMTYw3c/IjoJB/H2cQU0G38SEg95Af3//Tb36fWNCxMNFpqcmQQiHyb4Q0RBCuDT39IhMyFTAc7Q0mzg5uSIOzA0C7WsuQAmKCIAHSUdANff3fk0Ly56Aevr7PvV2NgECMgA+QQrAwQH+wgA9N/3/P47AwcuKCv9Af79/n0BAgCC5s7kAPzz/QD+/v4ADxsPABEmEwD7+vt/Af///wD29/ZDBAYEZvfx9yUCAwIABgwH2/35/ZsGBgW8cql+0Cu0IhoAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8,
          },
          points: [
            "Eliminates bottlenecks and manual intervention.",
            "Speeds up execution and ensures compliance.",
          ],
        },
        {
          id: 3,
          title: "Predictive Analytics & Forecasting",
          description:
            "Forecasts market trends, customer behavior, and demand.",
          image: {
            src: "/_next/static/media/prediction.038005ba.png",
            height: 806,
            width: 879,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AUAAWBkKAAFPERcW5zpBI/DsyPEs/EccVgoKCuolAPt0AXRNh3gaIR6HDAH9AP3z/wAdIg4ABCcUAPTw9wAI2vqFAbqk4yT18PLO/fLkDRssEv7q4vACMkAj1/8CB+aqttJ+AaGW0DQP/gW/BfbrBw4fBADz6PAF1Nbo5xX/DPZDRC+eAaJ+rGsX/QWUCikbAOjk8wATFBAA8+roAObc5ABjRUStAbv//wr3i7ws+jQhe/fD7+UWJBTV5L7KL8LLxETt7SQiAWv08wBHgLsAEs8FADtGCxPNBQRR9uvQLwUC6xioC9pYDh5nouTklRoAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 7,
          },
          points: [
            "Drives proactive decision-making and resource optimization.",
            "Reduces waste and enhances business agility.",
          ],
        },
        {
          id: 4,
          title: "AI-Powered Customer Support & Chatbots",
          description:
            "24/7, personalized customer support using advanced NLP.",
          image: {
            src: "/_next/static/media/chatbots.98af82f6.png",
            height: 613,
            width: 716,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AdPq/QD4/AEp//79jAMDA+ALnAJr+WH4ERQUBwwG2bjjAdfv/yH59vejAvvz+v0DCQoJBAPgChIKluvc4B0r9K0UAd3x/2zr6+1hOG0A1AAq+/vhZugt8QUjIf7x3RUJExzAAafV/r/b6/XjzswJyBoS+f5kRARi7Oj6LCf+vAn2IUv1AWe9/7GZ3+WBALAX7UEv7wWbcxGF8fHzKLKsvS5TWlDyAbjc/tbp8PfIOiEH4fb3+wgICAU+6+rsOtTM0QA8RDzrAdPi70/z9vxC8/Hwxv/+/ggXGhk/6unwGPLt7vInKiD7P1p+zF68fuAAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 7,
          },
          points: [
            "Handles queries, onboarding, and internal support autonomously.",
            "Boosts satisfaction and reduces response times.",
          ],
        },
        {
          id: 5,
          title: "AIOps (AI for IT Operations)",
          description:
            "Automates IT incident management and root cause analysis.",
          image: {
            src: "/_next/static/media/AI-it-ops.fb9d0271.png",
            height: 787,
            width: 821,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AaOfsQD3+vsoRQs89MDhw0EVHhLfAOYF5KbhtIP6APulAaSusWD27vkd/7kByCFFGFkNBw242OvdEMvm05nm8evJAQBZUyiqQGc6NSQsJODe4y0TFBAI3e7i/bjQxUfu+ezCAdHb14H65vl7CugLA8fIzQAVERUAFxwSAJbDogDrAPbKAevo7P/z5/MA0cHT/ePW6gH17vcAOkwvABImEQL7CQD6AfPy8//m4On8057cAt3C3gEB+AAAI10h/zRZLP8YFxUDAfn5+dzS1NIjFA0WAOnK7gAEDQMAABn8AAYKBQAqKCjKAfn5+RDy8fJzCQsIUwIEAxoCAQH/8/L04f37/KUXGBiPWF6CNRM+GKQAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8,
          },
          points: [
            "Reduces downtime, accelerates issue resolution, and improves IT efficiency.",
            "Ensures business continuity and operational resilience.",
          ],
        },
        {
          id: 6,
          title: "Voice Assistants & Conversational AI",
          description:
            "Enables touch-free, conversational interactions across devices.",
          image: {
            src: "/_next/static/media/voicebots.0c318bbb.png",
            height: 630,
            width: 720,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/Af39/Wj29vQS+PkBJgkLDT74+PyI/v36EgUFAgoKCAHgAf3+/ty5trgjFRAUADQ7NWJXZ4pGEQfoWDEyPwBgWk3TAf/+/M6QkaQx/gEaAHFpOGKTosBpFhQaNQD/9QBPSTrGAf///NC8wOIv3esGAGdVG1eXoLduJSIfO/n59QBFQDLHAf///NXW1fIq5uL0AEFGFbl4hKs8jL3iCp5oOAFhWkPNAff3+MLy490x//r28wQYJb98iZ1ZmIuZAZ+mlABgWUW1AePe3T4BAgQ/AQEBDQYICPvZ3+hG7+/tEBUVGb83MyeS6cVtGdW6p4QAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 7,
          },
          points: [
            "Understands multiple languages and intents for seamless user experience.",
            "Ideal for virtual reception, support, and smart office automation.",
          ],
        },
      ];
      function b() {
        let e = (0, l.useRef)(null),
          t = (0, l.useRef)(null),
          [i, s] = (0, l.useState)(0),
          [n, r] = (0, l.useState)(0),
          [o, d] = (0, l.useState)(0),
          m = {},
          [h, p] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          p(!0);
          let e = () => {};
          return (
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
          (0, l.useLayoutEffect)(() => {
            let i = () => {
              t.current &&
                e.current &&
                (s(t.current.scrollWidth), r(t.current.offsetWidth));
            };
            return (
              i(),
              window.addEventListener("resize", i),
              () => window.removeEventListener("resize", i)
            );
          }, []);
        let { scrollYProgress: b } = (0, g.v)({
          target: e,
          offset: ["start start", "end end"],
        });
        b.onChange((e) => {
          d(e);
        });
        let w = (0, A.H)(b, [0, 1], [0, -(i - n)]);
        return (0, a.jsxs)("section", {
          className: "w-full bg-[#10002B] text-white relative",
          children: [
            o > 0 &&
              o < 1 &&
              (0, a.jsx)("div", {
                className: "fixed bottom-24 right-8 z-10",
                children: (0, a.jsx)("button", {
                  onClick: () => {
                    var t;
                    let i =
                      null === (t = e.current) || void 0 === t
                        ? void 0
                        : t.parentElement;
                    if (i) {
                      let e = i.previousElementSibling;
                      e && e.scrollIntoView({ behavior: "smooth" });
                    }
                  },
                  className:
                    "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20",
                  children: (0, a.jsx)(x.s$2, {
                    className: "text-white text-lg",
                  }),
                }),
              }),
            (0, a.jsx)("div", {
              ref: e,
              className: "h-[400vh]",
              children: (0, a.jsx)("div", {
                className:
                  "sticky top-0 h-screen flex items-center py-16 md:py-24 px-4",
                children: (0, a.jsxs)("div", {
                  className:
                    "max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left",
                      children: [
                        (0, a.jsx)(c.E.h2, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, amount: 0.3 },
                          transition: { duration: 0.6 },
                          className:
                            "text-5xl lg:text-6xl font-normal mb-4 text-white",
                          children: "Solutions We Deliver",
                        }),
                        (0, a.jsx)(c.E.p, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, amount: 0.3 },
                          transition: { duration: 0.6, delay: 0.2 },
                          className:
                            "text-lg md:text-xl text-gray-300 max-w-xl mb-8",
                          children:
                            "Explore how DataTroops.ai empowers your business with cutting-edge AI solutions that drive real impact.",
                        }),
                        (0, a.jsx)("div", {
                          className: "mt-6 w-full max-w-xs",
                          children: (0, a.jsx)("div", {
                            className: "w-full bg-gray-700 rounded-full h-1",
                            children: (0, a.jsx)("div", {
                              className:
                                "bg-gradient-to-r from-purple-500 to-indigo-500 h-1 rounded-full",
                              style: { width: "".concat(100 * o, "%") },
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "lg:w-2/3 overflow-hidden custom-scrollbar-hide",
                      ref: t,
                      children: (0, a.jsx)(c.E.div, {
                        style: { x: w },
                        className: "flex space-x-6 px-4 md:px-0 lg:ml-8 pb-4",
                        children: f.map((e) =>
                          (0, a.jsx)(
                            c.E.div,
                            {
                              initial: { opacity: 1, y: 20 },
                              whileInView: { opacity: 1, y: 0 },
                              viewport: { once: !0, amount: 0.3 },
                              transition: { duration: 0.2, delay: 0.1 },
                              className:
                                "flex-shrink-0 w-[320px] sm:w-[350px] md:w-[400px] lg:w-[400px] h-[400px] md:h-[480px] bg-[#21003D] text-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-[#38106a] hover:border-purple-500 transition-all duration-300 cursor-grab relative",
                              children:
                                4 === e.id
                                  ? (0, a.jsxs)("a", {
                                      href: "/ai-chatbot",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "absolute inset-0 flex flex-col justify-between p-5 group",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className: "flex flex-col flex-grow",
                                          children: [
                                            (0, a.jsx)(u.default, {
                                              src: e.image,
                                              alt: e.title,
                                              width: 210,
                                              height: 210,
                                              className:
                                                "mx-auto mb-3 object-contain",
                                              priority: e.id <= 2,
                                            }),
                                            (0, a.jsx)("h3", {
                                              className:
                                                "text-xl sm:text-2xl font-bold mb-2 text-white",
                                              children: e.title,
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex-grow overflow-y-auto custom-scrollbar-hide pr-2 min-h-0",
                                              children: [
                                                (0, a.jsx)("p", {
                                                  className:
                                                    "text-base md:text-base text-gray-300 mb-2",
                                                  children:
                                                    h &&
                                                    window.innerWidth < 768 &&
                                                    !m[e.id] &&
                                                    e.description.length > 150
                                                      ? "".concat(
                                                          e.description.substring(
                                                            0,
                                                            150,
                                                          ),
                                                          "...",
                                                        )
                                                      : e.description,
                                                }),
                                                (0, a.jsx)("ul", {
                                                  className:
                                                    "list-none space-y-0.5 text-base md:text-base text-gray-300 ".concat(
                                                      h &&
                                                        window.innerWidth <
                                                          768 &&
                                                        !m[e.id]
                                                        ? "hidden"
                                                        : "block",
                                                    ),
                                                  children: e.points.map(
                                                    (e, t) =>
                                                      (0, a.jsxs)(
                                                        "li",
                                                        {
                                                          className:
                                                            "flex items-start",
                                                          children: [
                                                            (0, a.jsx)("span", {
                                                              className:
                                                                "w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5",
                                                            }),
                                                            e,
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
                                        (0, a.jsx)(x.Dli, {
                                          className:
                                            "absolute top-4 right-4 text-white group-hover:text-purple-400 transition-colors duration-300 text-xl",
                                        }),
                                      ],
                                    })
                                  : (0, a.jsxs)("div", {
                                      className: "p-5 flex flex-col flex-grow",
                                      children: [
                                        (0, a.jsx)(u.default, {
                                          src: e.image,
                                          alt: e.title,
                                          width: 210,
                                          height: 210,
                                          className:
                                            "mx-auto mb-3 object-contain",
                                          priority: e.id <= 2,
                                        }),
                                        (0, a.jsx)("h3", {
                                          className:
                                            "text-xl sm:text-2xl font-bold mb-2 text-white",
                                          children: e.title,
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex-grow overflow-y-auto custom-scrollbar-hide pr-2 min-h-0",
                                          children: [
                                            (0, a.jsx)("p", {
                                              className:
                                                "text-base md:text-base text-gray-300 mb-2",
                                              children:
                                                h &&
                                                window.innerWidth < 768 &&
                                                !m[e.id] &&
                                                e.description.length > 150
                                                  ? "".concat(
                                                      e.description.substring(
                                                        0,
                                                        150,
                                                      ),
                                                      "...",
                                                    )
                                                  : e.description,
                                            }),
                                            (0, a.jsx)("ul", {
                                              className:
                                                "list-none space-y-0.5 text-base md:text-base text-gray-300 ".concat(
                                                  h &&
                                                    window.innerWidth < 768 &&
                                                    !m[e.id]
                                                    ? "hidden"
                                                    : "block",
                                                ),
                                              children: e.points.map((e, t) =>
                                                (0, a.jsxs)(
                                                  "li",
                                                  {
                                                    className:
                                                      "flex items-start",
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5",
                                                      }),
                                                      e,
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
                            },
                            e.id,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            o > 0 &&
              o < 1 &&
              (0, a.jsx)("div", {
                className: "fixed bottom-8 right-8 z-10",
                children: (0, a.jsx)("button", {
                  onClick: () => {
                    var t;
                    let i =
                      null === (t = e.current) || void 0 === t
                        ? void 0
                        : t.parentElement;
                    if (i) {
                      let e = i.nextElementSibling;
                      e && e.scrollIntoView({ behavior: "smooth" });
                    }
                  },
                  className:
                    "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20",
                  children: (0, a.jsx)(x.RiI, {
                    className: "text-white text-lg",
                  }),
                }),
              }),
          ],
        });
      }
      var w = i(56726);
      let v = [
        {
          id: 1,
          title: "Global Fintech Transformation",
          client: "Leading Digital Banking Platform",
          industry: "Financial Services",
          challenge:
            "Fragmented data across 15+ systems hindering real-time decision making",
          solution: "Intelligent Data Integration & Analytics (ML)",
          icon: x.Op,
          gradient: "from-blue-600 to-purple-600",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          results: [
            {
              metric: "Data Processing Time",
              value: "85%",
              description: "reduction (6hrs → 54min)",
            },
            {
              metric: "Annual Savings",
              value: "$2.3M",
              description: "through automation",
            },
            {
              metric: "Fraud Detection",
              value: "40%",
              description: "accuracy improvement",
            },
            {
              metric: "Decision Speed",
              value: "Real-time",
              description: "instant credit decisions",
            },
          ],
          details: [
            "Real-time data harmonization from CRM, transaction systems, and external APIs",
            "ML-powered anomaly detection and pattern recognition",
            "Automated data reconciliation and validation processes",
          ],
        },
        {
          id: 2,
          title: "Manufacturing Excellence",
          client: "Fortune 500 Automotive Manufacturer",
          industry: "Manufacturing",
          challenge: "Unplanned equipment downtime costing $50K per hour",
          solution: "Predictive Analytics & Workflow Automation",
          icon: x.iNY,
          gradient: "from-orange-500 to-red-600",
          image:
            "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          results: [
            {
              metric: "Downtime Reduction",
              value: "72%",
              description: "unplanned maintenance",
            },
            {
              metric: "Annual Savings",
              value: "$8.5M",
              description: "predictive maintenance",
            },
            {
              metric: "Workflow Speed",
              value: "45%",
              description: "faster execution",
            },
            {
              metric: "Prediction Accuracy",
              value: "94%",
              description: "48hr advance warning",
            },
          ],
          details: [
            "IoT sensor integration with predictive maintenance algorithms",
            "Automated workflow orchestration for maintenance scheduling",
            "Real-time equipment health monitoring and alerts",
          ],
        },
        {
          id: 3,
          title: "E-Commerce Support Revolution",
          client: "Top 10 Global E-Commerce Platform",
          industry: "E-Commerce",
          challenge: "2M+ monthly support tickets overwhelming human agents",
          solution: "AI-Powered Customer Support & Chatbots",
          icon: x.Ov7,
          gradient: "from-green-500 to-teal-600",
          image:
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          results: [
            {
              metric: "Query Resolution",
              value: "89%",
              description: "autonomous handling",
            },
            {
              metric: "Response Time",
              value: "65%",
              description: "faster (4hrs → 1.4hrs)",
            },
            {
              metric: "Cost Savings",
              value: "$4.2M",
              description: "annual operations",
            },
            {
              metric: "Satisfaction",
              value: "38%",
              description: "increase in scores",
            },
          ],
          details: [
            "Multi-language conversational AI with sentiment analysis",
            "Seamless human handoff for complex queries",
            "24/7 automated support with contextual understanding",
          ],
        },
      ];
      function y() {
        let [e, t] = (0, l.useState)(0);
        return (0, a.jsx)("section", {
          className:
            "w-full bg-gradient-to-br from-[#10002B] to-[#240046] text-white py-20",
          children: (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              (0, a.jsxs)(c.E.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, amount: 0.3 },
                transition: { duration: 0.8 },
                className: "text-center mb-16",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent",
                    children: "Real-World Results",
                  }),
                  (0, a.jsx)("p", {
                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                    children:
                      "Discover how leading organizations transformed their operations with our AI solutions, achieving measurable impact and sustainable growth.",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex flex-wrap justify-center gap-4 mb-12",
                children: v.map((i, s) =>
                  (0, a.jsx)(
                    "button",
                    {
                      onClick: () => t(s),
                      className:
                        "px-6 py-3 rounded-full font-semibold transition-all duration-300 ".concat(
                          e === s
                            ? "bg-white text-gray-900 shadow-lg"
                            : "bg-white/10 text-white hover:bg-white/20",
                        ),
                      children: i.industry,
                    },
                    i.id,
                  ),
                ),
              }),
              (0, a.jsxs)(
                c.E.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className: "grid lg:grid-cols-2 gap-12 items-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "space-y-8",
                      children: [
                        (0, a.jsx)("div", {
                          className: "space-y-4",
                          children: (0, a.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "p-3 rounded-lg bg-gradient-to-r ".concat(
                                    v[e].gradient,
                                  ),
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-3xl font-bold",
                                    children: v[e].title,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-purple-300",
                                    children: v[e].client,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "bg-white/5 rounded-xl p-6 border border-white/10",
                          children: [
                            (0, a.jsx)("h4", {
                              className:
                                "text-lg font-semibold mb-3 text-red-300",
                              children: "Challenge",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-gray-300",
                              children: v[e].challenge,
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "bg-white/5 rounded-xl p-6 border border-white/10",
                          children: [
                            (0, a.jsx)("h4", {
                              className:
                                "text-lg font-semibold mb-3 text-blue-300",
                              children: "Solution",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-white font-medium mb-3",
                              children: v[e].solution,
                            }),
                            (0, a.jsx)("ul", {
                              className: "space-y-2",
                              children: v[e].details.map((e, t) =>
                                (0, a.jsxs)(
                                  "li",
                                  {
                                    className: "flex items-start text-gray-300",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          "w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0",
                                      }),
                                      e,
                                    ],
                                  },
                                  t,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, a.jsx)(w.Z, {
                          message: "Coming Soon",
                          children: (0, a.jsxs)("button", {
                            className:
                              "flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg",
                            children: [
                              (0, a.jsx)("span", {
                                children: "View Full Case Study",
                              }),
                              (0, a.jsx)(x.Z1Y, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "relative rounded-2xl overflow-hidden h-64 mb-8",
                          children: [
                            (0, a.jsx)("img", {
                              src: v[e].image,
                              alt: v[e].title,
                              className: "w-full h-full object-cover",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t ".concat(
                                  v[e].gradient,
                                  " opacity-80",
                                ),
                            }),
                            (0, a.jsxs)("div", {
                              className: "absolute bottom-4 left-4 text-white",
                              children: [
                                (0, a.jsx)("p", {
                                  className: "text-sm opacity-90",
                                  children: "Industry",
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-xl font-bold",
                                  children: v[e].industry,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: v[e].results.map((e, t) =>
                            (0, a.jsxs)(
                              c.E.div,
                              {
                                initial: { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1 },
                                transition: { duration: 0.5, delay: 0.1 * t },
                                className:
                                  "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent",
                                    children: e.value,
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "text-sm text-gray-300 mb-1",
                                    children: e.metric,
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "text-xs text-purple-300",
                                    children: e.description,
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
                },
                e,
              ),
            ],
          }),
        });
      }
      let j = [
        {
          id: 1,
          icon: x.ef0,
          title: "Future-Ready AI Technologies",
          description:
            "Purpose-built solutions that seamlessly integrate with your existing systems and evolve with your business needs.",
          highlight: "Seamless Integration",
        },
        {
          id: 2,
          icon: x.I$,
          title: "Deep AI Expertise",
          description:
            "Elite team of ML engineers and AI specialists with proven expertise across Machine Learning and Generative AI technologies.",
          highlight: "Expert Team",
        },
        {
          id: 3,
          icon: x.rU2,
          title: "Complete Solution Portfolio",
          description:
            "End-to-end AI capabilities from data integration to conversational AI, designed specifically for enterprise scale and complexity.",
          highlight: "Full-Stack Solutions",
        },
        {
          id: 4,
          icon: x.Op,
          title: "Guaranteed Measurable Results",
          description:
            "Average 40% cost reduction, 65% faster decision-making, and 8.5-month ROI across all implementations.",
          highlight: "Proven ROI",
        },
        {
          id: 5,
          icon: x.bri,
          title: "Enterprise-Grade Security",
          description:
            "Military-grade data protection, full regulatory compliance, and ethical AI practices built into every solution.",
          highlight: "Bank-Level Security",
        },
        {
          id: 6,
          icon: x.MtH,
          title: "Proven Track Record",
          description:
            "Over 500 successful AI implementations across diverse industries, delivering consistent results and exceeding client expectations.",
          highlight: "500+ Success Stories",
        },
      ];
      function N() {
        return (0, a.jsxs)("section", {
          className:
            "w-full bg-gradient-to-br from-[#10002B] to-[#240046] text-white py-20 relative overflow-hidden",
          children: [
            (0, a.jsxs)("div", {
              className: "absolute inset-0 opacity-5",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]",
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "max-w-7xl mx-auto px-6 relative z-10",
              children: [
                (0, a.jsxs)(c.E.div, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.8 },
                  className: "text-center mb-16",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "text-5xl md:text-6xl font-light mb-6 text-white",
                      children: "Why Choose DataTroops?",
                    }),
                    (0, a.jsxs)("p", {
                      className:
                        "text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed",
                      children: [
                        "We don't just implement AI—we engineer intelligent ecosystems that deliver",
                        (0, a.jsxs)("span", {
                          className: "text-white font-semibold",
                          children: [" ", "measurable business impact"],
                        }),
                        ". Our solutions tackle the most critical challenges of modern enterprises, driving automation, security, and innovation at scale.",
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
                  children: j.map((e, t) =>
                    (0, a.jsxs)(
                      c.E.div,
                      {
                        initial: { opacity: 0, y: 30 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, amount: 0.2 },
                        transition: { duration: 0, delay: 0.1 * t },
                        className:
                          "group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/1 transition-all duration-500 hover:transform hover:scale-105",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "inline-flex p-4 rounded-xl bg-white/10 mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300",
                            children: (0, a.jsx)(e.icon, {
                              className: "text-2xl text-white",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "absolute top-4 right-4",
                            children: (0, a.jsx)("span", {
                              className:
                                "px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white",
                              children: e.highlight,
                            }),
                          }),
                          (0, a.jsx)("h3", {
                            className:
                              "text-xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300",
                            children: e.title,
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300",
                            children: e.description,
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-2xl transition-all duration-500",
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
        });
      }
      function E() {
        return (0, a.jsx)("section", {
          className:
            "w-full bg-gradient-to-br from-[#10002B] to-[#240046] text-white py-10 relative overflow-hidden",
          children: (0, a.jsxs)(c.E.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, amount: 0.3 },
            transition: { duration: 0.8 },
            className: "text-center mt-2",
            children: [
              (0, a.jsx)("h3", {
                className: "text-3xl font-bold mb-4 text-white",
                children: "Ready to Transform Your Business?",
              }),
              (0, a.jsx)("p", {
                className: "text-gray-300 mb-8 max-w-2xl mx-auto",
                children:
                  "Experience the DataTroops difference. Let's discuss how our AI solutions can drive measurable impact for your organization.",
              }),
              (0, a.jsx)("div", {
                className: "flex flex-wrap justify-center gap-4",
                children: (0, a.jsx)("a", {
                  href: "/contact-us",
                  className:
                    "inline-flex bg-white text-[#10002B] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg",
                  children: "Schedule a Strategy Session",
                }),
              }),
            ],
          }),
        });
      }
      var I = i(96164);
      let k = [
        {
          id: 1,
          number: "01",
          title: "Discover",
          subtitle: "Align & Assess",
          description:
            "We align with your business goals, identify high-impact use cases, and assess your tech landscape.",
          icon: x.U41,
          keyFeatures: [
            "Business goal alignment and stakeholder interviews",
            "High-impact AI use case identification",
            "Technology readiness assessment",
            "ROI potential analysis and timeline planning",
          ],
        },
        {
          id: 2,
          number: "02",
          title: "Design",
          subtitle: "Craft & Architect",
          description:
            "Our experts craft a custom AI solution—choosing the right models, data pipelines, and system architecture.",
          icon: x.T7P,
          keyFeatures: [
            "Custom AI model selection and architecture",
            "Data pipeline and workflow optimization",
            "System integration blueprint creation",
            "Scalability and performance planning",
          ],
        },
        {
          id: 3,
          number: "03",
          title: "Integrate",
          subtitle: "Connect & Sync",
          description:
            "We plug AI into your existing platforms (CRM, ERP, cloud, APIs) with minimal disruption.",
          icon: x.eKD,
          keyFeatures: [
            "Seamless CRM, ERP, and cloud integration",
            "Custom API development and connectivity",
            "Minimal disruption deployment strategy",
            "Real-time data synchronization setup",
          ],
        },
        {
          id: 4,
          number: "04",
          title: "Secure",
          subtitle: "Protect & Govern",
          description:
            "Your data stays protected. We embed enterprise-grade security, governance, and compliance by default.",
          icon: x.bri,
          keyFeatures: [
            "Enterprise-grade security implementation",
            "Data governance and privacy protocols",
            "Regulatory compliance validation",
            "Ethical AI framework establishment",
          ],
        },
        {
          id: 5,
          number: "05",
          title: "Deploy",
          subtitle: "Launch & Activate",
          description:
            "We roll out the solution in your environment—tested, tuned, and ready to perform from day one.",
          icon: x.ef0,
          keyFeatures: [
            "Comprehensive testing and validation",
            "Performance tuning and optimization",
            "User training and knowledge transfer",
            "Go-live support and monitoring",
          ],
        },
        {
          id: 6,
          number: "06",
          title: "Optimize",
          subtitle: "Monitor & Improve",
          description:
            "With real-time monitoring, feedback loops, and retraining, your AI keeps learning—and improving.",
          icon: x.Op,
          keyFeatures: [
            "Real-time performance monitoring",
            "Continuous feedback loop implementation",
            "Model retraining and enhancement",
            "Ongoing optimization and scaling",
          ],
        },
      ];
      function C() {
        let e = (0, l.useRef)(null),
          t = (0, l.useRef)(null),
          [i, s] = (0, l.useState)(0),
          [n, r] = (0, l.useState)(0);
        (0, l.useLayoutEffect)(() => {
          let i = () => {
            t.current && e.current;
          };
          return (
            i(),
            window.addEventListener("resize", i),
            () => window.removeEventListener("resize", i)
          );
        }, []);
        let { scrollYProgress: o } = (0, g.v)({
          target: e,
          offset: ["start start", "end end"],
        });
        o.onChange((e) => {
          s(e),
            r(Math.max(0, Math.min(Math.floor(e * k.length), k.length - 1)));
        });
        let d = (t) => {
            if (e.current) {
              let i = e.current.getBoundingClientRect().top + window.scrollY,
                a = e.current.offsetHeight,
                s = window.innerHeight,
                n = a / k.length;
              window.scrollTo({
                top: i + n * t - s / 2 + n / 2,
                behavior: "smooth",
              });
            }
          },
          m = k[n].icon;
        return (0, a.jsxs)("section", {
          className:
            "w-full bg-gradient-to-br from-[#10002B] to-[#240046] text-white relative",
          children: [
            i > 0 &&
              i < 1 &&
              (0, a.jsx)("div", {
                className: "fixed bottom-24 right-8 z-10",
                children: (0, a.jsx)("button", {
                  onClick: () => {
                    var t;
                    let i =
                      null === (t = e.current) || void 0 === t
                        ? void 0
                        : t.parentElement;
                    if (i) {
                      let e = i.previousElementSibling;
                      e && e.scrollIntoView({ behavior: "smooth" });
                    }
                  },
                  className:
                    "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20",
                  children: (0, a.jsx)(x.s$2, {
                    className: "text-white text-lg",
                  }),
                }),
              }),
            (0, a.jsx)("div", {
              ref: e,
              className: "h-[500vh]",
              children: (0, a.jsx)("div", {
                className:
                  "sticky top-0 h-screen flex items-center py-8 md:py-16 px-4 sm:px-6 lg:px-8",
                children: (0, a.jsxs)("div", {
                  className:
                    "max-w-7xl mx-auto w-full grid lg:grid-cols-3 gap-8 lg:gap-12 items-start",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "lg:col-span-2",
                      children: [
                        (0, a.jsxs)(c.E.div, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, amount: 0.3 },
                          transition: { duration: 0.6 },
                          className: "text-center lg:text-left mb-4 lg:mb-12",
                          children: [
                            (0, a.jsx)("h2", {
                              className:
                                "text-4xl md:text-4xl lg:text-5xl font-light mb-3 text-white leading-tight",
                              children: "Seamless AI Integration",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-base md:text-lg text-gray-300 max-w-2xl lg:mx-0 mx-auto",
                              children:
                                "Step by step — here's how we bring AI into your business",
                            }),
                          ],
                        }),
                        (0, a.jsxs)(
                          c.E.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6 },
                            className: "space-y-3 md:space-y-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center gap-3 md:gap-6 flex-wrap justify-center lg:justify-start",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-xl flex-shrink-0",
                                    children: (0, a.jsx)(m, {
                                      className:
                                        "text-xl md:text-2xl text-white",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex-1 min-w-[180px] text-center lg:text-left",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-baseline gap-2 md:gap-3 mb-1",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "text-3xl md:text-4xl font-light text-white",
                                            children: k[n].number,
                                          }),
                                          (0, a.jsx)("h3", {
                                            className:
                                              "text-2xl md:text-3xl font-light text-white",
                                            children: k[n].title,
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-sm text-purple-400 text-left",
                                        children: k[n].subtitle,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-base md:text-lg text-gray-300 leading-relaxed text-center lg:text-left",
                                children: k[n].description,
                              }),
                              (0, a.jsxs)(
                                c.E.div,
                                {
                                  initial: { opacity: 0, y: 20 },
                                  animate: { opacity: 1, y: 0 },
                                  transition: { duration: 0.6, delay: 0.2 },
                                  className:
                                    "bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-white/10",
                                  children: [
                                    (0, a.jsx)("h4", {
                                      className:
                                        "text-base md:text-lg font-medium mb-2 md:mb-4 text-white",
                                      children: "Key Activities",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "grid sm:grid-cols-2 gap-2 md:gap-3",
                                      children: k[n].keyFeatures.map((e, t) =>
                                        (0, a.jsxs)(
                                          c.E.div,
                                          {
                                            initial: { opacity: 0, x: -10 },
                                            animate: { opacity: 1, x: 0 },
                                            transition: {
                                              duration: 0.4,
                                              delay: 0.1 * t,
                                            },
                                            className:
                                              "flex items-start gap-2 md:gap-3",
                                            children: [
                                              (0, a.jsx)(x.FJM, {
                                                className:
                                                  "text-purple-300 mt-1 flex-shrink-0 text-xs md:text-sm",
                                              }),
                                              (0, a.jsx)("span", {
                                                className:
                                                  "text-gray-300 text-sm md:text-base",
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
                                "features-".concat(n),
                              ),
                              n === k.length - 1 &&
                                (0, a.jsx)(c.E.div, {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  transition: { duration: 0.6, delay: 0.3 },
                                  className:
                                    "pt-3 md:pt-4 text-center lg:text-left",
                                  children: (0, a.jsxs)("a", {
                                    href: "/contact-us",
                                    className:
                                      "inline-flex bg-white text-[#10002B] hover:bg-gray-100 px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto lg:mx-0",
                                    children: [
                                      (0, a.jsx)("span", {
                                        children: "Start Your AI Journey",
                                      }),
                                      (0, a.jsx)(x.Z1Y, {
                                        className: "text-sm",
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          },
                          n,
                        ),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "lg:col-span-1 mt-4 lg:mt-0",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white text-center lg:text-left",
                          children: "Integration Steps",
                        }),
                        (0, a.jsx)("nav", {
                          className:
                            "grid grid-cols-2 gap-x-2 md:gap-x-4 md:grid-cols-1 gap-y-1 md:gap-y-2",
                          children: k.map((e, t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                onClick: () => d(t),
                                className: (0, I.m6)(
                                  "w-full text-left flex items-center gap-3 p-2 md:p-4 rounded-lg transition-all duration-300 cursor-pointer",
                                  n === t
                                    ? "bg-[#3F0071] shadow-lg border border-purple-600"
                                    : "bg-transparent border border-white/10 hover:bg-white/10",
                                ),
                                children: [
                                  (0, a.jsx)("div", {
                                    className: (0, I.m6)(
                                      "w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                                      n === t ? "bg-white/10" : "bg-white/5",
                                    ),
                                    children: (0, a.jsx)(e.icon, {
                                      className: (0, I.m6)(
                                        "text-xs md:text-sm transition-colors duration-300",
                                        n === t
                                          ? "text-white"
                                          : "text-gray-400 group-hover:text-white",
                                      ),
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex-1",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center gap-1 md:gap-2 mb-1",
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: (0, I.m6)(
                                              "text-xs font-medium transition-colors duration-300",
                                              n === t
                                                ? "text-white"
                                                : "text-gray-400 group-hover:text-white",
                                            ),
                                            children: e.number,
                                          }),
                                          (0, a.jsx)("span", {
                                            className: (0, I.m6)(
                                              "text-sm font-medium transition-colors duration-300",
                                              n === t
                                                ? "text-white"
                                                : "text-gray-400 group-hover:text-white",
                                            ),
                                            children: e.title,
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: (0, I.m6)(
                                          "w-full h-1 rounded-full transition-all duration-500",
                                          n === t
                                            ? "bg-purple-500"
                                            : t < n
                                              ? "bg-white/60"
                                              : "bg-white/20",
                                        ),
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
                  ],
                }),
              }),
            }),
            i > 0 &&
              i < 1 &&
              (0, a.jsx)("div", {
                className: "fixed bottom-8 right-8 z-10",
                children: (0, a.jsx)("button", {
                  onClick: () => {
                    var t;
                    let i =
                      null === (t = e.current) || void 0 === t
                        ? void 0
                        : t.parentElement;
                    if (i) {
                      let e = i.nextElementSibling;
                      e && e.scrollIntoView({ behavior: "smooth" });
                    }
                  },
                  className:
                    "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20",
                  children: (0, a.jsx)(x.RiI, {
                    className: "text-white text-lg",
                  }),
                }),
              }),
          ],
        });
      }
      let D = (e) => {
          let { question: t, answer: i, isOpen: s, onClick: n } = e;
          return (0, a.jsxs)(c.E.div, {
            initial: !1,
            animate: { backgroundColor: s ? "#3F0071" : "#240046" },
            className: (0, I.m6)(
              "rounded-md border border-white/5 overflow-hidden cursor-pointer",
              s ? "shadow-md" : "",
            ),
            onClick: n,
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between p-3 md:p-4 !pb-2",
                children: [
                  (0, a.jsx)("h3", {
                    className: "text-md md:text-lg font-semibold text-white",
                    children: t,
                  }),
                  (0, a.jsx)(c.E.div, {
                    initial: !1,
                    animate: { rotate: s ? 180 : 0 },
                    children: s
                      ? (0, a.jsx)(x.s$2, {
                          className: "text-purple-400 text-base",
                        })
                      : (0, a.jsx)(x.RiI, {
                          className: "text-gray-400 text-base",
                        }),
                  }),
                ],
              }),
              (0, a.jsx)(c.E.div, {
                initial: { height: 0, opacity: 0 },
                animate: { height: s ? "auto" : 0, opacity: s ? 1 : 0 },
                transition: { duration: 0, ease: "easeInOut" },
                className: "px-3 md:px-4 pb-2",
                children: (0, a.jsx)("p", {
                  className:
                    "text-gray-300 leading-relaxed text-sm md:text-base",
                  children: i,
                }),
              }),
            ],
          });
        },
        S = [
          {
            question: "What industries do your AI solutions support?",
            answer:
              "Our AI solutions are designed to serve diverse sectors including Retail, Healthcare, Finance, Education, Travel, and Media. We tailor each implementation to industry-specific needs and compliance standards.",
          },
          {
            question: "Can your AI models integrate with our existing systems?",
            answer:
              "Yes. Our solutions are built with flexibility in mind, offering seamless integration via APIs, cloud services, or on-premise deployments—ensuring minimal disruption and faster adoption.",
          },
          {
            question: "Do you offer custom AI solutions?",
            answer:
              "Absolutely. We specialize in creating bespoke AI systems aligned with your unique workflows, data requirements, and operational goals.",
          },
          {
            question:
              "How secure is our data during development and deployment?",
            answer:
              "Data security is a top priority. We follow enterprise-grade best practices in data encryption, access control, and compliance with standards like GDPR and HIPAA.",
          },
          {
            question:
              "What is your approach to MLOps and model lifecycle management?",
            answer:
              "We offer full MLOps support—automating training pipelines, version control, continuous deployment, and performance monitoring to ensure your models stay accurate and production-ready.",
          },
          {
            question: "How long does it take to implement an AI solution?",
            answer:
              "Timelines vary based on complexity, but most solutions go from design to deployment within 6–12 weeks. For rapid pilots, we offer fast-track options.",
          },
          {
            question: "Do you provide post-deployment support?",
            answer:
              "Yes. We offer ongoing monitoring, optimization, and support to ensure your AI systems remain effective and aligned with evolving business needs.",
          },
          {
            question:
              "What types of tasks can be automated with DataTroops's AI solutions?",
            answer:
              "DataTroops automates a wide range of tasks, including fraud detection, customer support, document processing, workflow management, repetitive data entry, and equipment failure prediction. This allows your teams to focus on strategic, value-driven work.",
          },
        ];
      function R() {
        let [e, t] = (0, l.useState)(null),
          i = (i) => {
            t(e === i ? null : i);
          };
        return (0, a.jsx)("section", {
          className:
            "w-full bg-gradient-to-br from-[#10002B] to-[#240046] text-white py-16",
          children: (0, a.jsxs)("div", {
            className: "max-w-4xl mx-auto px-4",
            children: [
              (0, a.jsxs)(c.E.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, amount: 0.3 },
                transition: { duration: 0.6 },
                className: "text-center mb-6",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "text-3xl md:text-4xl font-light mb-4 text-white leading-tight",
                    children: "Got Questions? We've Got Answers.",
                  }),
                  (0, a.jsx)("p", {
                    className: "text-base text-gray-300 max-w-2xl mx-auto",
                    children:
                      "Find quick answers to common questions about our AI solutions.",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "space-y-2",
                children: S.map((t, s) =>
                  (0, a.jsx)(
                    D,
                    {
                      question: t.question,
                      answer: t.answer,
                      isOpen: e === s,
                      onClick: () => i(s),
                    },
                    s,
                  ),
                ),
              }),
            ],
          }),
        });
      }
      function B() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.default, {}),
            (0, a.jsx)(p, {}),
            (0, a.jsx)(b, {}),
            (0, a.jsx)(m, {}),
            (0, a.jsx)(N, {}),
            (0, a.jsx)(C, {}),
            (0, a.jsx)(y, {}),
            (0, a.jsx)(R, {}),
            (0, a.jsx)(E, {}),
            (0, a.jsx)(n.default, {}),
          ],
        });
      }
    },
    56726: function (e, t, i) {
      "use strict";
      var a = i(57437);
      t.Z = (e) => {
        let { message: t, children: i } = e;
        return (0, a.jsxs)("div", {
          className: "group relative inline-flex h-full",
          children: [
            i,
            (0, a.jsx)("div", {
              className:
                "absolute left-1/2 -translate-x-1/2 top-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 mt-2",
              children: (0, a.jsx)("div", {
                className:
                  "bg-[var(--color-10002B)] border border-purple-500/30 text-gray-300 text-xs py-1 px-3 tracking-widest uppercase font-medium shadow-lg shadow-purple-900/10 whitespace-nowrap",
                children: t,
              }),
            }),
          ],
        });
      };
    },
    91810: function (e, t, i) {
      "use strict";
      i.d(t, {
        w_: function () {
          return d;
        },
      });
      var a = i(2265),
        s = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        n = a.createContext && a.createContext(s),
        r = ["attr", "size", "title"];
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i)
                  Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, a);
        }
        return i;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(i), !0).forEach(function (t) {
                var a, s;
                (a = t),
                  (s = i[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var i = e[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var a = i.call(e, t || "default");
                        if ("object" != typeof a) return a;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(a)) in e
                    ? Object.defineProperty(e, a, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[a] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : l(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t),
                  );
                });
        }
        return e;
      }
      function d(e) {
        return (t) =>
          a.createElement(
            m,
            o({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, i) =>
                  a.createElement(t.tag, c({ key: i }, t.attr), e(t.child)),
                )
              );
            })(e.child),
          );
      }
      function m(e) {
        var t = (t) => {
          var i,
            { attr: s, size: n, title: l } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var i,
                a,
                s = (function (e, t) {
                  if (null == e) return {};
                  var i = {};
                  for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                      if (t.indexOf(a) >= 0) continue;
                      i[a] = e[a];
                    }
                  return i;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                for (a = 0; a < n.length; a++)
                  (i = n[a]),
                    !(t.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, i) &&
                      (s[i] = e[i]);
              }
              return s;
            })(e, r),
            m = n || t.size || "1em";
          return (
            t.className && (i = t.className),
            e.className && (i = (i ? i + " " : "") + e.className),
            a.createElement(
              "svg",
              o(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                s,
                d,
                {
                  className: i,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: m,
                  width: m,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              l && a.createElement("title", null, l),
              e.children,
            )
          );
        };
        return void 0 !== n
          ? a.createElement(n.Consumer, null, (e) => t(e))
          : t(s);
      }
    },
  },
  function (e) {
    e.O(0, [676, 958, 699, 413, 950, 987, 59, 802, 971, 23, 744], function () {
      return e((e.s = 13116));
    }),
      (_N_E = e.O());
  },
]);
