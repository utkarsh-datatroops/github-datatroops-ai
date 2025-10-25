(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    13233: function (e, t, o) {
      Promise.resolve().then(o.bind(o, 55077));
    },
    78030: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = o(2265);
      let r = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        a = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, o) =>
            o ? o.toUpperCase() : t.toLowerCase(),
          ),
        i = (e) => {
          let t = a(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        s = function () {
          for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
            t[o] = arguments[o];
          return t
            .filter((e, t, o) => !!e && "" !== e.trim() && o.indexOf(e) === t)
            .join(" ")
            .trim();
        },
        l = (e) => {
          for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
              return !0;
        };
      var c = {
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
      let d = (0, n.forwardRef)((e, t) => {
          let {
            color: o = "currentColor",
            size: r = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: i,
            className: d = "",
            children: u,
            iconNode: m,
            ...p
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...c,
              width: r,
              height: r,
              stroke: o,
              strokeWidth: i ? (24 * Number(a)) / Number(r) : a,
              className: s("lucide", d),
              ...(!u && !l(p) && { "aria-hidden": "true" }),
              ...p,
            },
            [
              ...m.map((e) => {
                let [t, o] = e;
                return (0, n.createElement)(t, o);
              }),
              ...(Array.isArray(u) ? u : [u]),
            ],
          );
        }),
        u = (e, t) => {
          let o = (0, n.forwardRef)((o, a) => {
            let { className: l, ...c } = o;
            return (0, n.createElement)(d, {
              ref: a,
              iconNode: t,
              className: s("lucide-".concat(r(i(e))), "lucide-".concat(e), l),
              ...c,
            });
          });
          return (o.displayName = i(e)), o;
        };
    },
    55077: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return j;
          },
        });
      var n = o(57437),
        r = o(2265);
      function a() {
        let [e, t] = (0, r.useState)(""),
          [o, a] = (0, r.useState)(""),
          [i, s] = (0, r.useState)(""),
          [l, c] = (0, r.useState)(!1),
          [d, u] = (0, r.useState)(null),
          m = async (n) => {
            n.preventDefault(), c(!1), u(null);
            try {
              (
                await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({ name: e, email: o, message: i }),
                })
              ).ok
                ? (c(!0), t(""), a(""), s(""), setTimeout(() => c(!1), 3e3))
                : u("Something went wrong. Please try again.");
            } catch (e) {
              u("Failed to send message. Please try later. ".concat(e));
            }
          };
        return (0, n.jsx)("section", {
          className:
            "bg-gradient-to-r from-[#10002B] to-[#240046] py-12 px-4 text-white",
          children: (0, n.jsxs)("div", {
            className: "max-w-2xl mx-auto",
            children: [
              (0, n.jsx)("h2", {
                className: "text-3xl font-semibold mb-6 text-center",
                children: "Send Us a Message",
              }),
              (0, n.jsxs)("form", {
                onSubmit: m,
                className: "space-y-6",
                children: [
                  (0, n.jsx)("input", {
                    type: "text",
                    value: e,
                    onChange: (e) => t(e.target.value),
                    placeholder: "Your Name",
                    className:
                      "w-full p-3 rounded-md bg-[#18183A]/80 text-white focus:outline-none",
                    required: !0,
                  }),
                  (0, n.jsx)("input", {
                    type: "email",
                    value: o,
                    onChange: (e) => a(e.target.value),
                    placeholder: "Your Email",
                    className:
                      "w-full p-3 rounded-md bg-[#18183A]/80 text-white focus:outline-none",
                    required: !0,
                  }),
                  (0, n.jsx)("textarea", {
                    value: i,
                    onChange: (e) => s(e.target.value),
                    placeholder: "Your Message",
                    className:
                      "w-full p-3 rounded-md bg-[#18183A]/80 text-white focus:outline-none h-40",
                    required: !0,
                  }),
                  (0, n.jsx)("button", {
                    type: "submit",
                    className:
                      "w-full py-3 bg-[#7B2CBF] hover:bg-[#9D4EDD] rounded-md font-semibold transition-all duration-300",
                    children: l ? "Message Sent!" : "Send Message",
                  }),
                  d &&
                    (0, n.jsx)("p", {
                      className: "text-red-500 text-center mt-2",
                      children: d,
                    }),
                ],
              }),
            ],
          }),
        });
      }
      function i() {
        return (0, n.jsx)("section", {
          className: "w-full h-64 md:h-96",
          children: (0, n.jsx)("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3149778134416!2d76.69241097642879!3d30.709544374595556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8277432963%3A0x39ad7d4bbdc8b2b2!2sDataTroops!5e0!3m2!1sen!2sin!4v1749816824155!5m2!1sen!2sin",
            className: "w-full h-full border-0",
            allowFullScreen: !0,
            loading: "lazy",
          }),
        });
      }
      var s = o(78030);
      let l = (0, s.Z)("chevron-down", [
          ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
        ]),
        c = (0, s.Z)("search", [
          ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ]),
        d = [
          {
            id: "1",
            question: "How do I get in touch with your sales team?",
            answer:
              "You can reach our sales team by filling out the contact form on our website or emailing info@datatroops.io We typically respond within one business day to discuss your project needs and how our AI solutions can help.",
            category: "contact",
          },
          {
            id: "2",
            question: "What kind of AI services do you offer?",
            answer:
              "We provide tailored AI solutions including machine learning models, natural language processing, computer vision, and custom AI integrations to help automate and optimize your business workflows.",
            category: "services",
          },
          {
            id: "3",
            question: "How long does it take to get a project started?",
            answer:
              "Once we understand your requirements, we usually kick off the project within 1-2 weeks. Our onboarding process includes a discovery call and detailed proposal tailored to your needs.",
            category: "process",
          },
          {
            id: "4",
            question: "Can I schedule a demo of your AI products?",
            answer:
              "Absolutely! Contact us to schedule a live demo tailored to your use case. Our experts will walk you through the capabilities and how our solutions can integrate with your existing systems.",
            category: "contact",
          },
          {
            id: "5",
            question: "What support options are available after deployment?",
            answer:
              "We offer comprehensive post-deployment support including maintenance, updates, and training to ensure your AI solutions continue to deliver value.",
            category: "support",
          },
          {
            id: "6",
            question:
              "Do you provide custom AI development or only off-the-shelf products?",
            answer:
              "We specialize in custom AI development tailored specifically to your business challenges. While we leverage proven frameworks, every solution is crafted to meet your unique requirements.",
            category: "services",
          },
          {
            id: "7",
            question: "How do you ensure data privacy and security?",
            answer:
              "We follow industry best practices for data encryption, secure cloud hosting, and compliance with regulations like GDPR to protect your data throughout the project lifecycle.",
            category: "security",
          },
          {
            id: "8",
            question: "What is the best way to contact customer support?",
            answer:
              "For support inquiries, please email info@datatroops.io or use the live chat feature on our website. Our team is available Monday to Friday, 9 AM to 6 PM UTC.",
            category: "support",
          },
        ],
        u = [
          {
            id: "contact",
            name: "Contact & Sales",
            items: d.filter((e) => "contact" === e.category),
          },
          {
            id: "services",
            name: "Our Services",
            items: d.filter((e) => "services" === e.category),
          },
          {
            id: "process",
            name: "Project Process",
            items: d.filter((e) => "process" === e.category),
          },
          {
            id: "support",
            name: "Support & Maintenance",
            items: d.filter((e) => "support" === e.category),
          },
          {
            id: "security",
            name: "Data Security",
            items: d.filter((e) => "security" === e.category),
          },
        ],
        m = (e) => {
          let { item: t, isOpen: o, onToggle: a } = e,
            i = (0, r.useRef)(null),
            [s, c] = (0, r.useState)(void 0);
          return (
            (0, r.useEffect)(() => {
              i.current && c(i.current.scrollHeight);
            }, [t.answer]),
            (0, n.jsxs)("div", {
              className: "faq-item",
              style: { borderBottom: "1px solid var(--color-border)" },
              children: [
                (0, n.jsxs)("button", {
                  type: "button",
                  className: "faq-question",
                  onClick: a,
                  "aria-expanded": o,
                  style: {
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.25rem 0",
                    background: "transparent",
                    border: "none",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--color-10002B)",
                    cursor: "pointer",
                  },
                  children: [
                    (0, n.jsx)("span", { children: t.question }),
                    (0, n.jsx)(l, {
                      className: "chevron ".concat(o ? "open" : ""),
                      style: {
                        height: "1.25rem",
                        width: "1.25rem",
                        color: "var(--color-5A189A)",
                        transition: "transform 0.3s",
                        transform: o ? "rotate(180deg)" : "rotate(0deg)",
                      },
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  ref: i,
                  className: "faq-answer-wrapper",
                  style: {
                    maxHeight: o ? "".concat(s, "px") : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-in-out",
                    color: "var(--color-240046)",
                  },
                  "aria-hidden": !o,
                  children: (0, n.jsx)("div", {
                    style: { paddingBottom: "1.25rem", lineHeight: 1.6 },
                    children: t.answer,
                  }),
                }),
              ],
            })
          );
        },
        p = (e) => {
          let { searchTerm: t, onSearchChange: o } = e;
          return (0, n.jsxs)("div", {
            style: { position: "relative", marginBottom: "2rem" },
            children: [
              (0, n.jsx)("div", {
                style: {
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  pointerEvents: "none",
                  height: "100%",
                },
                children: (0, n.jsx)(c, {
                  style: {
                    height: "1.25rem",
                    width: "1.25rem",
                    color: "var(--color-7B2CBF)",
                  },
                }),
              }),
              (0, n.jsx)("input", {
                type: "text",
                value: t,
                onChange: (e) => o(e.target.value),
                placeholder: "Search for answers...",
                "aria-label": "Search FAQs",
                style: {
                  width: "100%",
                  padding: "0.75rem 1rem 0.75rem 2.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--color-border)",
                  fontSize: "1rem",
                  color: "var(--color-3C096C)",
                  outline: "none",
                },
                onFocus: (e) =>
                  (e.target.style.borderColor = "var(--color-9D4EDD)"),
                onBlur: (e) =>
                  (e.target.style.borderColor = "var(--color-border)"),
              }),
            ],
          });
        };
      var h = (e) => {
          let {
              title: t = "Frequently Asked Questions",
              description:
                o = "Find answers to common questions about our products and services.",
              categories: a = u,
              items: i = d,
              className: s = "",
            } = e,
            [l, c] = (0, r.useState)([]),
            [h, f] = (0, r.useState)(""),
            [x, g] = (0, r.useState)(null),
            b = (e) => {
              c((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            },
            y = (0, r.useMemo)(() => {
              let e = i;
              if ("" !== h.trim()) {
                let t = h.toLowerCase();
                e = e.filter(
                  (e) =>
                    e.question.toLowerCase().includes(t) ||
                    e.answer.toLowerCase().includes(t),
                );
              }
              return x && (e = e.filter((e) => e.category === x)), e;
            }, [i, h, x]),
            w =
              "" === h.trim()
                ? a
                : a
                    .map((e) => ({
                      ...e,
                      items: e.items.filter((e) =>
                        y.some((t) => t.id === e.id),
                      ),
                    }))
                    .filter((e) => e.items.length > 0),
            v = (e) =>
              e.map((e) =>
                (0, n.jsx)(
                  m,
                  {
                    item: e,
                    isOpen: l.includes(e.id),
                    onToggle: () => b(e.id),
                  },
                  e.id,
                ),
              );
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("style", {
                children:
                  "\n        :root {\n          --color-10002B: #10002B;\n          --color-240046: #240046;\n          --color-3C096C: #3C096C;\n          --color-5A189A: #5A189A;\n          --color-7B2CBF: #7B2CBF;\n          --color-9D4EDD: #9D4EDD;\n          --color-C77DFF: #C77DFF;\n          --color-E0AAFF: #E0AAFF;\n          --color-border: rgba(229, 231, 235, 0.2); /* Tailwind gray.200 at 20% */\n        }\n        .faq-item:last-child {\n          border-bottom: none;\n        }\n        button.category-btn {\n          padding: 0.5rem 1rem;\n          border-radius: 9999px;\n          font-size: 0.875rem;\n          font-weight: 500;\n          cursor: pointer;\n          transition: background-color 0.2s, color 0.2s;\n          border: none;\n        }\n        button.category-btn.active {\n          background-color: var(--color-7B2CBF);\n          color: white;\n        }\n        button.category-btn:not(.active) {\n          background-color: var(--color-E0AAFF);\n          color: var(--color-3C096C);\n        }\n        button.category-btn:not(.active):hover {\n          background-color: var(--color-C77DFF);\n          color: white;\n        }\n      ",
              }),
              (0, n.jsxs)("section", {
                className: "max-w-4xl mx-auto px-4 py-12 ".concat(s),
                children: [
                  (0, n.jsxs)("div", {
                    style: { textAlign: "center", marginBottom: "2.5rem" },
                    children: [
                      (0, n.jsx)("h2", {
                        style: {
                          fontSize: "2rem",
                          fontWeight: "700",
                          marginBottom: "1rem",
                          color: "white",
                        },
                        children: t,
                      }),
                      (0, n.jsx)("p", {
                        style: {
                          color: "white",
                          maxWidth: "40rem",
                          margin: "0 auto",
                          fontSize: "1rem",
                          lineHeight: 1.5,
                        },
                        children: o,
                      }),
                    ],
                  }),
                  (0, n.jsx)(p, { searchTerm: h, onSearchChange: f }),
                  "" === h.trim() &&
                    (0, n.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "2rem",
                        justifyContent: "center",
                      },
                      children: [
                        (0, n.jsx)("button", {
                          className: "category-btn ".concat(
                            null === x ? "active" : "",
                          ),
                          onClick: () => g(null),
                          "aria-pressed": null === x,
                          type: "button",
                          children: "All",
                        }),
                        a.map((e) =>
                          (0, n.jsx)(
                            "button",
                            {
                              className: "category-btn ".concat(
                                x === e.id ? "active" : "",
                              ),
                              onClick: () => g(e.id),
                              "aria-pressed": x === e.id,
                              type: "button",
                              children: e.name,
                            },
                            e.id,
                          ),
                        ),
                      ],
                    }),
                  (0, n.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                    },
                    children: [
                      ("" !== h.trim() || x) &&
                        (0, n.jsx)("div", {
                          style: {
                            backgroundColor: "white",
                            borderRadius: "0.75rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            padding: "1.5rem",
                          },
                          children:
                            y.length > 0
                              ? v(y)
                              : (0, n.jsx)("p", {
                                  style: {
                                    textAlign: "center",
                                    padding: "2rem 0",
                                    color: "var(--color-240046)",
                                    fontStyle: "italic",
                                  },
                                  children:
                                    "No results found. Try a different search term.",
                                }),
                        }),
                      "" === h.trim() &&
                        !x &&
                        w.map((e) =>
                          (0, n.jsxs)(
                            "div",
                            {
                              style: {
                                backgroundColor: "white",
                                borderRadius: "0.75rem",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                padding: "1.5rem",
                              },
                              children: [
                                (0, n.jsx)("h3", {
                                  style: {
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    marginBottom: "1rem",
                                    color: "var(--color-5A189A)",
                                  },
                                  children: e.name,
                                }),
                                v(e.items),
                              ],
                            },
                            e.id,
                          ),
                        ),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        f = o(6920),
        x = o(30568);
      let g = [
        { name: "Twitter", icon: x.mdU, href: "https://x.com/Datatroops_ai" },
        {
          name: "LinkedIn",
          icon: x.D9H,
          href: "https://www.linkedin.com/company/datatroops-ai",
        },
        {
          name: "Youtube",
          icon: x.opf,
          href: "https://www.youtube.com/@Datatroops_ai",
        },
        {
          name: "Instagram",
          icon: x.Zzi,
          href: "https://www.instagram.com/datatroops.ai",
        },
        {
          name: "Threads",
          icon: x.LW1,
          href: "https://www.threads.com/@datatroops.ai",
        },
      ];
      function b() {
        return (0, n.jsxs)("section", {
          className: "max-w-md mx-auto py-12 px-4 text-center",
          children: [
            (0, n.jsx)("h3", {
              className: "text-2xl font-semibold mb-6 text-white",
              children: "Connect with Us",
            }),
            (0, n.jsx)("div", {
              className: "flex justify-center space-x-6",
              children: g.map((e) => {
                let { name: t, icon: o, href: r } = e;
                return (0, n.jsx)(
                  "a",
                  {
                    href: r,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "w-12 h-12 rounded-full bg-gradient-to-tr from-[#7B2CBF] to-[#9D4EDD] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform",
                    "aria-label": t,
                    children: (0, n.jsx)(f.G, { icon: o, size: "lg" }),
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
      var y = o(45079);
      function w() {
        let [e, t] = (0, r.useState)(""),
          o = [
            {
              id: "location",
              icon: y.FGq,
              title: "Our Location",
              content:
                "DataTroops LLP, E-257, Sector-74, Phase-8B, Mohali, Punjab 140308",
              action: "Open in Maps",
              url: "https://maps.google.com/?q=DataTroops+LLP+E-257+Sector-74+Phase-8B+Mohali+Punjab",
            },
            {
              id: "phone",
              icon: y.j1w,
              title: "Call Us",
              content: "+91 783 700 3009",
              action: "Call Now",
              url: "tel:+917837003009",
            },
            {
              id: "email",
              icon: y.FU$,
              title: "Email Us",
              content: "info@datatroops.io",
              action: "Send Email",
              url: "mailto:info@datatroops.io",
            },
          ];
        return (0, n.jsx)("section", {
          className: "py-16 px-4 bg-gradient-to-b from-[#10002B] to-[#0E0020]",
          children: (0, n.jsx)("div", {
            className: "max-w-6xl mx-auto",
            children: (0, n.jsx)("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: o.map((o) =>
                (0, n.jsx)(
                  "div",
                  {
                    className: "relative group",
                    onMouseEnter: () => t(o.id),
                    onMouseLeave: () => t(""),
                    children: (0, n.jsx)("div", {
                      className:
                        "\n                h-full text-center p-8 rounded-xl transition-all duration-300 \n                border border-purple-800/30\n                ".concat(
                          e === o.id
                            ? "bg-gradient-to-br from-[#3C096C]/90 to-[#10002B]/90 shadow-lg shadow-purple-900/20 transform -translate-y-1"
                            : "bg-[#18183A]/60",
                          "\n              ",
                        ),
                      children: (0, n.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "\n                    w-16 h-16 rounded-full flex items-center justify-center mb-4\n                    ".concat(
                                e === o.id
                                  ? "bg-gradient-to-br from-purple-500 to-pink-600"
                                  : "bg-[#240046]",
                                "\n                  ",
                              ),
                            children: (0, n.jsx)(f.G, {
                              icon: o.icon,
                              className:
                                "text-2xl transition-all duration-300 ".concat(
                                  e === o.id
                                    ? "text-white scale-110"
                                    : "text-purple-300",
                                ),
                            }),
                          }),
                          (0, n.jsx)("h3", {
                            className: "text-2xl font-bold mb-3 text-white",
                            children: o.title,
                          }),
                          (0, n.jsx)("p", {
                            className: "text-white/80 mb-6",
                            children: o.content,
                          }),
                          (0, n.jsx)("a", {
                            href: o.url,
                            className:
                              "\n                      mt-auto inline-flex items-center justify-center \n                      py-2 px-4 rounded-full font-medium text-sm\n                      transition-all duration-300\n                      ".concat(
                                e === o.id
                                  ? "bg-white text-[#3C096C] shadow-lg shadow-purple-800/20"
                                  : "bg-purple-900/40 text-white/90 hover:bg-purple-800/60",
                                "\n                    ",
                              ),
                            children: o.action,
                          }),
                        ],
                      }),
                    }),
                  },
                  o.id,
                ),
              ),
            }),
          }),
        });
      }
      function v() {
        return (0, n.jsxs)("section", {
          className:
            "relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden px-4 bg-[#10002B]",
          children: [
            (0, n.jsx)("div", {
              className:
                "absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#3C096C] via-[#7B2CBF] to-[#E0AAFF] opacity-60 filter blur-3xl animate-blobSlow z-0",
            }),
            (0, n.jsx)("div", {
              className:
                "absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#5A189A] via-[#9D4EDD] to-[#C77DFF] opacity-50 filter blur-2xl animate-blobFast z-0",
            }),
            (0, n.jsx)("div", {
              className:
                "absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#240046] via-[#10002B] to-[#5A189A] opacity-40 filter blur-3xl animate-blobSlow z-0",
            }),
            (0, n.jsxs)("svg", {
              className:
                "absolute inset-0 w-full h-full pointer-events-none z-10",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("defs", {
                  children: (0, n.jsx)("pattern", {
                    id: "neonGrid",
                    width: "80",
                    height: "80",
                    patternUnits: "userSpaceOnUse",
                    children: (0, n.jsx)("path", {
                      d: "M 80 0 L 0 0 0 80",
                      fill: "none",
                      stroke: "#7B2CBF",
                      strokeWidth: "0.6",
                      strokeOpacity: "0.2",
                    }),
                  }),
                }),
                (0, n.jsx)("rect", {
                  width: "100%",
                  height: "100%",
                  fill: "url(#neonGrid)",
                }),
              ],
            }),
            [...Array(15)].map((e, t) =>
              (0, n.jsx)(
                "span",
                {
                  className: "absolute bg-[#C77DFF] opacity-20 rounded-full",
                  style: {
                    width: "".concat(10 + 15 * Math.random(), "px"),
                    height: "".concat(10 + 15 * Math.random(), "px"),
                    top: "".concat(100 * Math.random(), "%"),
                    left: "".concat(100 * Math.random(), "%"),
                    filter: "blur(4px)",
                    animation: "float"
                      .concat(t % 3, " ")
                      .concat(
                        10 + 10 * Math.random(),
                        "s ease-in-out infinite alternate",
                      ),
                    animationDelay: "".concat(10 * Math.random(), "s"),
                    zIndex: 5,
                  },
                },
                t,
              ),
            ),
            (0, n.jsxs)("div", {
              className:
                "relative z-20 flex flex-col items-center text-center text-gray-200 max-w-3xl",
              children: [
                (0, n.jsx)("span", {
                  className:
                    "inline-block mb-6 px-4 py-1 rounded-full bg-gradient-to-r from-[#C77DFF] to-[#5A189A] text-white text-sm font-semibold shadow-lg animate-fade-in-down",
                  children: "\uD83D\uDD2E Future Forward Technology",
                }),
                (0, n.jsx)("h1", {
                  className:
                    "text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#E0AAFF] via-[#7B2CBF] to-[#5A189A] text-transparent bg-clip-text animate-fade-in-up",
                  children: "Intelligent Solutions for a Connected World",
                }),
                (0, n.jsx)("p", {
                  className:
                    "text-lg md:text-2xl mb-10 animate-fade-in-up delay-200",
                  children:
                    "Discover how our cutting-edge AI technology can streamline your operations, enhance decision-making, and drive innovation across your entire organization.",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300",
                  children: [
                    (0, n.jsx)("button", {
                      className:
                        "px-8 py-3 rounded-lg bg-gradient-to-r from-[#C77DFF] to-[#5A189A] text-white font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-200",
                      children: "Explore",
                    }),
                    (0, n.jsx)("button", {
                      className:
                        "px-8 py-3 rounded-lg border-2 border-[#C77DFF] text-[#C77DFF] font-bold text-lg bg-transparent hover:bg-[#C77DFF]/10 transition-all duration-200 flex items-center gap-2",
                      children: "Get Started",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("style", {
              children:
                "\n        @keyframes fadeInDown {\n          from { opacity: 0; transform: translateY(-40px);}\n          to { opacity: 1; transform: translateY(0);}\n        }\n        @keyframes fadeInUp {\n          from { opacity: 0; transform: translateY(40px);}\n          to { opacity: 1; transform: translateY(0);}\n        }\n        .animate-fade-in-down {\n          animation: fadeInDown 1s cubic-bezier(.4,0,.2,1) both;\n        }\n        .animate-fade-in-up {\n          animation: fadeInUp 1.2s cubic-bezier(.4,0,.2,1) both;\n        }\n        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }\n        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }\n\n        @keyframes blobSlow {\n          0%, 100% {\n            transform: translate(0px, 0px) scale(1);\n          }\n          50% {\n            transform: translate(20px, -10px) scale(1.1);\n          }\n        }\n        @keyframes blobFast {\n          0%, 100% {\n            transform: translate(0px, 0px) scale(1);\n          }\n          50% {\n            transform: translate(-15px, 15px) scale(1.05);\n          }\n        }\n        .animate-blobSlow {\n          animation: blobSlow 18s ease-in-out infinite;\n        }\n        .animate-blobFast {\n          animation: blobFast 14s ease-in-out infinite;\n        }\n\n        @keyframes float0 {\n          0% { transform: translateY(0); opacity: 0.2;}\n          100% { transform: translateY(-15px); opacity: 0.5;}\n        }\n        @keyframes float1 {\n          0% { transform: translateY(0); opacity: 0.2;}\n          100% { transform: translateY(20px); opacity: 0.4;}\n        }\n        @keyframes float2 {\n          0% { transform: translateY(0); opacity: 0.3;}\n          100% { transform: translateY(-10px); opacity: 0.6;}\n        }\n      ",
            }),
          ],
        });
      }
      function j() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(v, {}),
            (0, n.jsx)(w, {}),
            (0, n.jsx)(a, {}),
            (0, n.jsx)(i, {}),
            (0, n.jsx)(h, {}),
            (0, n.jsx)(b, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [676, 958, 920, 971, 23, 744], function () {
      return e((e.s = 13233));
    }),
      (_N_E = e.O());
  },
]);
