"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [802],
  {
    37394: function (e, t, s) {
      var a,
        r,
        l,
        i = s(4410);
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var a in s)
                  ({}).hasOwnProperty.call(s, a) && (e[a] = s[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      t.Z = function (e) {
        return i.createElement(
          "svg",
          n(
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
          a || (a = i.createElement("style", null, ".st0{fill:#ffba08}")),
          r ||
            (r = i.createElement("path", {
              d: "M1320.4 686.1c-52.6 10.5-105.3 10.5-217.5 70.5C989 817.3 943.1 896 983.1 984.9c41.4 91.9 122.4 110.2 248 55.9 163.6-70.7 342.3-41.2 464.7 76.6 142.8 137.5 165 361.4 53.2 535.8-104.9 163.6-325 219.3-528.5 133.9-115.2-48.4-189.9-31.7-233.4 52.1-44 84.8-8 174.2 97.7 229.3 143.8 75 298.1 94.8 455.4 61.9 71.4-14.9 108.6 4.8 140.2 66.7 48.8 95.7 103 188.8 157.6 281.4 57.6 97.8 144.2 126.5 226.4 78.8 78.4-45.6 98.9-130.3 47.8-227.1-53.5-101.3-109.8-201.4-170.8-298.3-33.1-52.5-30.9-86.2 10.4-136.2 247-299.7 246.4-660.1-1.9-959.7-42.6-51.4-38.9-85.3-7.3-136.4 62.1-100.3 120.4-203.2 175-307.8 47.2-90.5 24.8-167.7-54.5-216.5-73.8-45.4-158.9-23.5-213.9 62-43.1 67-82.3 137-116.7 208.8-80.5 192.6-148.9 171.5-227.9 155.7-5-3.6-110.5-31.5-184.2-15.7",
              className: "st0",
            })),
          l ||
            (l = i.createElement("path", {
              d: "M540.8 1571.7c-93.7 0-187.5 2.1-281.1-.6-99-2.8-165-62.9-168.7-147.8-3.8-89.6 63.1-160.8 165-162.6 190.8-3.4 381.8-3.3 572.6.4 98 1.9 161.4 67 163 153.4 1.7 91.8-62.7 151.6-169.7 157.4-3.5.2-6.9.1-10.4.1H540.8zM2743.5 1429.4c-5.9 102.4-100.5 186.7-203.7 181.6-105.2-5.2-187.6-95.7-183.7-201.7 4.1-110.8 98.1-194.6 209-186.2 104.1 7.8 184.5 100.8 178.4 206.3M1602.4 1414.2c.8 103-87.4 193.9-190.4 196.4-110.6 2.6-199.1-85.2-198.4-196.8.6-105.9 86.9-190.5 193.9-190.2 105.9.3 194.1 86.5 194.9 190.6M834.7 2601.8c-101-1.1-191.3-91.8-192.3-193-.9-103.9 84.9-190.2 191-192.1 110.9-2 200.7 87.3 197.2 196-3.2 103.6-92.9 190.2-195.9 189.1M1030.3 426.7c-.8 105.8-84.8 188.5-192.6 189.6-110.2 1.1-196.9-87.7-193.5-198.3 3.3-105.3 90.5-187.2 197-185 105.2 2.1 189.9 88.9 189.1 193.7",
              className: "st0",
            })),
        );
      };
    },
    12098: function (e, t, s) {
      s.d(t, {
        z: function () {
          return l;
        },
      });
      var a = s(57437);
      let r = (0, s(13027).j)(
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
        l = (e) => {
          let { className: t = "", children: s, ...l } = e;
          return (0, a.jsx)("button", {
            className: r({ ...l, className: t }),
            style: { borderRadius: "50px" },
            type: l.type || "button",
            children: s,
          });
        };
    },
    16733: function (e, t, s) {
      var a = s(57437),
        r = s(30568),
        l = s(45079),
        i = s(6920);
      s(2265),
        (t.default = () =>
          (0, a.jsxs)("footer", {
            className:
              "bg-gradient-to-r from-[#10002B] to-[#240046] text-white",
            children: [
              (0, a.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 py-12",
                children: (0, a.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]",
                          children: "DataTroops.ai",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-gray-300",
                          children:
                            "Empowering businesses with cutting-edge AI solutions and innovative technology services.",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex space-x-4",
                          children: [
                            (0, a.jsx)("a", {
                              href: "https://x.com/Datatroops_ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(i.G, {
                                icon: r.mdU,
                                className: "w-6 h-6",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.linkedin.com/company/datatroops-ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(i.G, {
                                icon: r.D9H,
                                className: "w-6 h-6",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.instagram.com/datatroops.ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(i.G, {
                                icon: r.Zzi,
                                className: "w-6 h-6",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.threads.com/@datatroops.ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(i.G, {
                                icon: r.LW1,
                                className: "w-6 h-6",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.youtube.com/@Datatroops_ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(i.G, {
                                icon: r.opf,
                                className: "w-6 h-6",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h4", {
                          className: "text-lg font-semibold mb-4",
                          children: "Quick Links",
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "/",
                                className:
                                  "text-gray-300 hover:text-white transition-colors",
                                children: "Home",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "/about-us",
                                className:
                                  "text-gray-300 hover:text-white transition-colors",
                                children: "About Us",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "/ai-solutions",
                                className:
                                  "text-gray-300 hover:text-white transition-colors",
                                children: "Solutions",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "/contact-us",
                                className:
                                  "text-gray-300 hover:text-white transition-colors",
                                children: "Contact",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "/technologies",
                                className:
                                  "text-gray-300 hover:text-white transition-colors",
                                children: "Technologies",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "/ai-chatbot",
                                className:
                                  "text-gray-300 hover:text-white transition-colors",
                                children: "AI ChatBot",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "/solutions/generative-ai",
                                className:
                                  "text-gray-300 hover:text-white transition-colors",
                                children: "Generative AI",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h4", {
                          className: "text-lg font-semibold mb-4",
                          children: "Our Services",
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "#",
                                className:
                                  "text-gray-300 hover:text-white transition-colors cursor-default pointer-events-none select-none",
                                children: "Bespoke AI Systems",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "#",
                                className:
                                  "text-gray-300 hover:text-white transition-colors cursor-default pointer-events-none select-none",
                                children: "Advanced Data Analytics",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "#",
                                className:
                                  "text-gray-300 hover:text-white transition-colors cursor-default pointer-events-none select-none",
                                children: "Cloud AI Integration",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)("a", {
                                href: "#",
                                className:
                                  "text-gray-300 hover:text-white transition-colors cursor-default pointer-events-none select-none",
                                children: "Strategic AI Consulting",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h4", {
                          className: "text-lg font-semibold mb-4",
                          children: "Contact Info",
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-3",
                          children: [
                            (0, a.jsxs)("li", {
                              className: "flex items-start space-x-3",
                              children: [
                                (0, a.jsx)(i.G, {
                                  icon: l.FGq,
                                  className: "text-[#7B2CBF] mt-1",
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-gray-300",
                                  children:
                                    "DataTroops LLP E-257, 4th Floor, Sector-74, Phase-8B Industrial Area, Sahibzada Ajit Singh Nagar (Mohali Punjab 140308)",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("li", {
                              className: "flex items-start space-x-3",
                              children: [
                                (0, a.jsx)(i.G, {
                                  icon: l.j1w,
                                  className: "text-[#7B2CBF] mt-1",
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-gray-300",
                                  children: "+91 783 700 3009",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("li", {
                              className: "flex items-start space-x-3",
                              children: [
                                (0, a.jsx)(i.G, {
                                  icon: l.FU$,
                                  className: "text-[#7B2CBF] mt-1",
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-gray-300",
                                  children: "info@datatroops.io",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "border-t border-gray-800",
                children: (0, a.jsx)("div", {
                  className:
                    "max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center",
                  children: (0, a.jsxs)("p", {
                    className: "text-gray-400 text-sm",
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " DataTroops. All rights reserved.",
                    ],
                  }),
                }),
              }),
            ],
          }));
    },
    61485: function (e, t, s) {
      s.d(t, {
        h4: function () {
          return d;
        },
        default: function () {
          return m;
        },
      });
      var a = s(57437),
        r = s(2265),
        l = s(37394),
        i = s(12098),
        n = s(96164);
      let c = (e) =>
        (0, a.jsx)("div", {
          className: (0, n.m6)(
            "size-[200px] border border-gray-200/30 rounded-full",
            e.className,
          ),
        });
      var o = s(87138);
      let h = [
          { name: "Solutions", href: "/ai-solutions" },
          { name: "About Us", href: "/about-us" },
          { name: "AI Chatbot", href: "/ai-chatbot" },
          { name: "Technologies", href: "/technologies" },
        ],
        x = [
          {
            buttonVariant: "tertiary",
            name: "Contact Us",
            href: "/contact-us",
          },
        ],
        d = () => {
          let [e, t] = (0, r.useState)(!1),
            [s, d] = (0, r.useState)(!0),
            [m, f] = (0, r.useState)(0);
          return (
            (0, r.useEffect)(() => {
              let e = () => {
                let e = window.scrollY;
                e > m ? d(!1) : d(!0), f(e);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, [m]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: "relative h-18 lg:h-20",
                  children: (0, a.jsx)("header", {
                    className: (0, n.m6)(
                      "border-b border-gray-200/20 bg-[--color-10002B] w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
                      !s && "-translate-y-full",
                    ),
                    children: (0, a.jsx)("div", {
                      className: "container",
                      children: (0, a.jsxs)("div", {
                        className:
                          "h-18 lg:h-20 flex justify-between items-center",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex gap-4 items-center",
                            children: [
                              (0, a.jsx)("div", {
                                className: "size-10",
                                children: (0, a.jsx)(o.default, {
                                  href: "/",
                                  "aria-label": "Go to home page",
                                  legacyBehavior: !0,
                                  passHref: !0,
                                  children: (0, a.jsx)("a", {
                                    children: (0, a.jsx)(l.Z, {
                                      className: "h-full w-full cursor-pointer",
                                    }),
                                  }),
                                }),
                              }),
                              (0, a.jsx)(o.default, {
                                href: "/",
                                className: "font-extrabold text-2xl",
                                children: "DataTroops.ai",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "h-full hidden lg:block",
                            children: (0, a.jsx)("nav", {
                              className: "h-full",
                              children: h.map((e) => {
                                let { name: t, href: s } = e;
                                return (0, a.jsx)(
                                  "a",
                                  {
                                    href: s,
                                    className:
                                      "h-full px-10 relative font-bold text-s tracking-wildest text-white uppercase inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0",
                                    children: t,
                                  },
                                  t,
                                );
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "hidden lg:flex gap-4",
                            children: x.map((e) => {
                              let { buttonVariant: t, name: s, href: r } = e;
                              return (0, a.jsx)(
                                "a",
                                {
                                  href: r,
                                  children: (0, a.jsxs)(i.z, {
                                    variant: t,
                                    children: [" ", s, " "],
                                  }),
                                },
                                s,
                              );
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "flex items-center lg:hidden",
                            children: (0, a.jsxs)("button", {
                              onClick: () => t((e) => !e),
                              className:
                                "size-10 rounded-lg border-2 relative flex flex-col justify-center items-center gap-1",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                  children: (0, a.jsx)("div", {
                                    className: (0, n.m6)(
                                      "w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                                      e && "translate-y-0 rotate-45",
                                    ),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                  children: (0, a.jsx)("div", {
                                    className: (0, n.m6)(
                                      "w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                                      e && "translate-y-0 rotate-135",
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                e &&
                  (0, a.jsxs)("div", {
                    className:
                      "fixed top-18 left-0 bottom-0 right-0 bg-[var(--color-10002B)] z-30 overflow-hidden",
                    children: [
                      (0, a.jsx)("div", {
                        className: "absolute-center isolate -z-10",
                        children: (0, a.jsx)(c, {}),
                      }),
                      (0, a.jsx)("div", {
                        className: "absolute-center isolate -z-10",
                        children: (0, a.jsx)(c, { className: "size-[350px]" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "absolute-center isolate -z-10",
                        children: (0, a.jsx)(c, { className: "size-[500px]" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "absolute-center isolate -z-10",
                        children: (0, a.jsx)(c, { className: "size-[650px]" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "absolute-center isolate -z-10",
                        children: (0, a.jsx)(c, { className: "size-[800px]" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "container h-full",
                        children: (0, a.jsxs)("nav", {
                          className:
                            "flex flex-col items-center gap-4 py-8 h-full justify-center",
                          children: [
                            h.map((e) => {
                              let { name: t, href: s } = e;
                              return (0, a.jsx)(
                                "a",
                                {
                                  href: s,
                                  className:
                                    "text-gray-400 uppercase tracking-wildest font-bold text-s h-10",
                                  children: t,
                                },
                                s,
                              );
                            }),
                            x.map((e) => {
                              let { buttonVariant: t, name: s, href: r } = e;
                              return (0, a.jsx)(
                                "a",
                                {
                                  href: r,
                                  className: "w-full max-w-xs",
                                  children: (0, a.jsxs)(i.z, {
                                    block: !0,
                                    variant: t,
                                    children: [" ", s, " "],
                                  }),
                                },
                                s,
                              );
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            })
          );
        };
      var m = d;
    },
  },
]);
