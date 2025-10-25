(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    13233: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 55077));
    },
    78030: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = a(2265);
      let r = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        o = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) =>
            a ? a.toUpperCase() : t.toLowerCase(),
          ),
        s = (e) => {
          let t = o(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        i = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return t
            .filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t)
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
            color: a = "currentColor",
            size: r = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: s,
            className: d = "",
            children: u,
            iconNode: m,
            ...h
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...c,
              width: r,
              height: r,
              stroke: a,
              strokeWidth: s ? (24 * Number(o)) / Number(r) : o,
              className: i("lucide", d),
              ...(!u && !l(h) && { "aria-hidden": "true" }),
              ...h,
            },
            [
              ...m.map((e) => {
                let [t, a] = e;
                return (0, n.createElement)(t, a);
              }),
              ...(Array.isArray(u) ? u : [u]),
            ],
          );
        }),
        u = (e, t) => {
          let a = (0, n.forwardRef)((a, o) => {
            let { className: l, ...c } = a;
            return (0, n.createElement)(d, {
              ref: o,
              iconNode: t,
              className: i("lucide-".concat(r(s(e))), "lucide-".concat(e), l),
              ...c,
            });
          });
          return (a.displayName = s(e)), a;
        };
    },
    66706: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, a(78030).Z)("refresh-cw", [
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
          return n;
        },
      });
      let n = (0, a(78030).Z)("send", [
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
          return n;
        },
      });
      let n = (0, a(78030).Z)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    55077: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        });
      var n = a(57437),
        r = a(61485),
        o = a(16733),
        s = a(56567),
        i = a(2265);
      function l() {
        let [e, t] = (0, i.useState)(""),
          [a, r] = (0, i.useState)(""),
          [o, s] = (0, i.useState)(""),
          [l, c] = (0, i.useState)(!1),
          [d, u] = (0, i.useState)(null),
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
                  body: JSON.stringify({ name: e, email: a, message: o }),
                })
              ).ok
                ? (c(!0), t(""), r(""), s(""), setTimeout(() => c(!1), 3e3))
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
                    value: a,
                    onChange: (e) => r(e.target.value),
                    placeholder: "Your Email",
                    className:
                      "w-full p-3 rounded-md bg-[#18183A]/80 text-white focus:outline-none",
                    required: !0,
                  }),
                  (0, n.jsx)("textarea", {
                    value: o,
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
      function c() {
        return (0, n.jsx)("section", {
          className: "w-full h-64 md:h-96",
          children: (0, n.jsx)("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.2499200714866!2d76.69642581503388!3d30.704648581643077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedfaedfce61b%3A0xfbc2b2f9b5e95a02!2sDataTroops%20LLP!5e0!3m2!1sen!2sin!4v1626522094375!5m2!1sen!2sin",
            className: "w-full h-full border-0",
            allowFullScreen: !0,
            loading: "lazy",
          }),
        });
      }
      var d = a(78030);
      let u = (0, d.Z)("chevron-down", [
          ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
        ]),
        m = (0, d.Z)("search", [
          ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ]),
        h = [
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
        p = [
          {
            id: "contact",
            name: "Contact & Sales",
            items: h.filter((e) => "contact" === e.category),
          },
          {
            id: "services",
            name: "Our Services",
            items: h.filter((e) => "services" === e.category),
          },
          {
            id: "process",
            name: "Project Process",
            items: h.filter((e) => "process" === e.category),
          },
          {
            id: "support",
            name: "Support & Maintenance",
            items: h.filter((e) => "support" === e.category),
          },
          {
            id: "security",
            name: "Data Security",
            items: h.filter((e) => "security" === e.category),
          },
        ],
        x = (e) => {
          let { item: t, isOpen: a, onToggle: r } = e,
            o = (0, i.useRef)(null),
            [s, l] = (0, i.useState)(void 0);
          return (
            (0, i.useEffect)(() => {
              o.current && l(o.current.scrollHeight);
            }, [t.answer]),
            (0, n.jsxs)("div", {
              className: "faq-item",
              style: { borderBottom: "1px solid var(--color-border)" },
              children: [
                (0, n.jsxs)("button", {
                  type: "button",
                  className: "faq-question",
                  onClick: r,
                  "aria-expanded": a,
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
                    (0, n.jsx)(u, {
                      className: "chevron ".concat(a ? "open" : ""),
                      style: {
                        height: "1.25rem",
                        width: "1.25rem",
                        color: "var(--color-5A189A)",
                        transition: "transform 0.3s",
                        transform: a ? "rotate(180deg)" : "rotate(0deg)",
                      },
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  ref: o,
                  className: "faq-answer-wrapper",
                  style: {
                    maxHeight: a ? "".concat(s, "px") : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-in-out",
                    color: "var(--color-240046)",
                  },
                  "aria-hidden": !a,
                  children: (0, n.jsx)("div", {
                    style: { paddingBottom: "1.25rem", lineHeight: 1.6 },
                    children: t.answer,
                  }),
                }),
              ],
            })
          );
        },
        f = (e) => {
          let { searchTerm: t, onSearchChange: a } = e;
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
                children: (0, n.jsx)(m, {
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
                onChange: (e) => a(e.target.value),
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
      var g = (e) => {
          let {
              title: t = "Frequently Asked Questions",
              description:
                a = "Find answers to common questions about our products and services.",
              categories: r = p,
              items: o = h,
              className: s = "",
            } = e,
            [l, c] = (0, i.useState)([]),
            [d, u] = (0, i.useState)(""),
            [m, g] = (0, i.useState)(null),
            b = (e) => {
              c((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            },
            y = (0, i.useMemo)(() => {
              let e = o;
              if ("" !== d.trim()) {
                let t = d.toLowerCase();
                e = e.filter(
                  (e) =>
                    e.question.toLowerCase().includes(t) ||
                    e.answer.toLowerCase().includes(t),
                );
              }
              return m && (e = e.filter((e) => e.category === m)), e;
            }, [o, d, m]),
            w =
              "" === d.trim()
                ? r
                : r
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
                  x,
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
                        children: a,
                      }),
                    ],
                  }),
                  (0, n.jsx)(f, { searchTerm: d, onSearchChange: u }),
                  "" === d.trim() &&
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
                            null === m ? "active" : "",
                          ),
                          onClick: () => g(null),
                          "aria-pressed": null === m,
                          type: "button",
                          children: "All",
                        }),
                        r.map((e) =>
                          (0, n.jsx)(
                            "button",
                            {
                              className: "category-btn ".concat(
                                m === e.id ? "active" : "",
                              ),
                              onClick: () => g(e.id),
                              "aria-pressed": m === e.id,
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
                      ("" !== d.trim() || m) &&
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
                      "" === d.trim() &&
                        !m &&
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
        b = a(6920),
        y = a(30568);
      let w = [
        { name: "Twitter", icon: y.mdU, href: "https://x.com/Datatroops_ai" },
        {
          name: "LinkedIn",
          icon: y.D9H,
          href: "https://www.linkedin.com/company/datatroops-ai",
        },
        {
          name: "Youtube",
          icon: y.opf,
          href: "https://www.youtube.com/@Datatroops_ai",
        },
        {
          name: "Instagram",
          icon: y.Zzi,
          href: "https://www.instagram.com/datatroops.ai",
        },
        {
          name: "Threads",
          icon: y.LW1,
          href: "https://www.threads.com/@datatroops.ai",
        },
      ];
      function v() {
        return (0, n.jsxs)("section", {
          className: "max-w-md mx-auto py-12 px-4 text-center",
          children: [
            (0, n.jsx)("h3", {
              className: "text-2xl font-semibold mb-6 text-white",
              children: "Connect with Us",
            }),
            (0, n.jsx)("div", {
              className: "flex justify-center space-x-6",
              children: w.map((e) => {
                let { name: t, icon: a, href: r } = e;
                return (0, n.jsx)(
                  "a",
                  {
                    href: r,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "w-12 h-12 rounded-full bg-gradient-to-tr from-[#7B2CBF] to-[#9D4EDD] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform",
                    "aria-label": t,
                    children: (0, n.jsx)(b.G, { icon: a, size: "lg" }),
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
      var j = a(45079);
      function N() {
        let [e, t] = (0, i.useState)(""),
          a = [
            {
              id: "location",
              icon: j.FGq,
              title: "Our Location",
              content:
                "DataTroops LLP, E-257, Sector-74, Phase-8B, Mohali, Punjab 140308",
              action: "Open in Maps",
              url: "https://maps.google.com/?q=DataTroops+LLP+E-257+Sector-74+Phase-8B+Mohali+Punjab",
            },
            {
              id: "phone",
              icon: j.j1w,
              title: "Call Us",
              content: "+91 783 700 3009",
              action: "Call Now",
              url: "tel:+917837003009",
            },
            {
              id: "email",
              icon: j.FU$,
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
              children: a.map((a) =>
                (0, n.jsx)(
                  "div",
                  {
                    className: "relative group",
                    onMouseEnter: () => t(a.id),
                    onMouseLeave: () => t(""),
                    children: (0, n.jsx)("div", {
                      className:
                        "\n                h-full text-center p-8 rounded-xl transition-all duration-300 \n                border border-purple-800/30\n                ".concat(
                          e === a.id
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
                                e === a.id
                                  ? "bg-gradient-to-br from-purple-500 to-pink-600"
                                  : "bg-[#240046]",
                                "\n                  ",
                              ),
                            children: (0, n.jsx)(b.G, {
                              icon: a.icon,
                              className:
                                "text-2xl transition-all duration-300 ".concat(
                                  e === a.id
                                    ? "text-white scale-110"
                                    : "text-purple-300",
                                ),
                            }),
                          }),
                          (0, n.jsx)("h3", {
                            className: "text-2xl font-bold mb-3 text-white",
                            children: a.title,
                          }),
                          (0, n.jsx)("p", {
                            className: "text-white/80 mb-6",
                            children: a.content,
                          }),
                          (0, n.jsx)("a", {
                            href: a.url,
                            className:
                              "\n                      mt-auto inline-flex items-center justify-center \n                      py-2 px-4 rounded-full font-medium text-sm\n                      transition-all duration-300\n                      ".concat(
                                e === a.id
                                  ? "bg-white text-[#3C096C] shadow-lg shadow-purple-800/20"
                                  : "bg-purple-900/40 text-white/90 hover:bg-purple-800/60",
                                "\n                    ",
                              ),
                            children: a.action,
                          }),
                        ],
                      }),
                    }),
                  },
                  a.id,
                ),
              ),
            }),
          }),
        });
      }
      function C() {
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
      function k() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.Z, {}),
            (0, n.jsx)(r.default, {}),
            (0, n.jsx)(C, {}),
            (0, n.jsx)(N, {}),
            (0, n.jsx)(l, {}),
            (0, n.jsx)(c, {}),
            (0, n.jsx)(g, {}),
            (0, n.jsx)(v, {}),
            (0, n.jsx)(o.default, {}),
          ],
        });
      }
    },
    56567: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = a(57437),
        r = a(2265),
        o = a(74697),
        s = a(66706),
        i = a(60994),
        l = a(53833),
        c = {
          src: "/_next/static/media/chatbot-avatar.75f82f45.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = a(66648),
        u = () => {
          let [e, t] = (0, r.useState)(!1),
            [a, u] = (0, r.useState)([]),
            [m, h] = (0, r.useState)(""),
            [p, x] = (0, r.useState)(!0),
            [f, g] = (0, r.useState)(!1),
            [b, y] = (0, r.useState)("normal"),
            [w, v] = (0, r.useState)(!1),
            j = "https://datatrooops-ai-chatbot.onrender.com",
            N = (0, r.useRef)(null),
            C = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            0 === a.length &&
              setTimeout(() => {
                g(!0),
                  setTimeout(() => {
                    u([
                      {
                        id: 1,
                        text: "Hi there! Nice to see you \uD83D\uDE0A I'm DataTroops AI assistant. How can I help you today?",
                        sender: "bot",
                        options: [
                          { id: "connect", text: "Connect with team!" },
                          { id: "about", text: "Learn about our services." },
                        ],
                      },
                    ]),
                      g(!1);
                  }, 1500);
              }, 1e3);
          }, [a.length]),
            (0, r.useEffect)(() => {
              D();
            }, [a]),
            (0, r.useEffect)(() => {
              k();
            }, []);
          let k = async () => {
              try {
                let e = await fetch("".concat(j, "/status"));
                if (e.ok) {
                  let t = await e.json();
                  x(t.knowledge_loaded);
                } else x(!1);
              } catch (e) {
                console.error("Backend connection failed:", e), x(!1);
              }
            },
            D = () => {
              var e;
              null === (e = N.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth" });
            },
            A = () => {
              t(!e),
                e ||
                  setTimeout(() => {
                    var e;
                    null === (e = C.current) || void 0 === e || e.focus();
                  }, 100);
            },
            F = async (e) => {
              try {
                v(!0);
                let t = await fetch("".concat(j, "/chat"), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ message: e }),
                });
                if (!t.ok) throw Error("HTTP error! status: ".concat(t.status));
                return await t.json();
              } catch (e) {
                return (
                  console.error("Error sending message to backend:", e),
                  {
                    response:
                      "I'm sorry, I'm having trouble connecting to the server. Please try again in a moment.",
                    state: "normal",
                    status: "error",
                  }
                );
              } finally {
                v(!1);
              }
            },
            S = async function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : m;
              if (!e.trim() || w) return;
              let t = { id: Date.now(), text: e, sender: "user" };
              u((e) => [...e, t]), h(""), g(!0);
              let a = await F(e);
              setTimeout(() => {
                let e = {
                  id: Date.now(),
                  text: a.response,
                  sender: "bot",
                  options: a.options,
                };
                u((t) => [...t, e]), y(a.state || "normal"), g(!1);
              }, 1e3);
            },
            B = (e) => {
              S(e);
            };
          return (0, n.jsxs)("div", {
            className: "fixed bottom-4 right-4 z-50 flex flex-col items-end",
            children: [
              !e &&
                (0, n.jsx)("button", {
                  onClick: A,
                  className:
                    "flex items-center justify-center w-16 h-16 rounded-full text-white ".concat(
                      e
                        ? "bg-white-500"
                        : p
                          ? "bg-white border-t"
                          : "bg-gray-100",
                      " shadow-lg transition-all duration-300 hover:scale-110",
                    ),
                  "aria-label": "Open chat",
                  children: (0, n.jsx)(d.default, {
                    src: c,
                    alt: "DataTroops Logo",
                    width: 48,
                    height: 48,
                  }),
                }),
              e &&
                (0, n.jsxs)("div", {
                  className:
                    "bg-white rounded-lg shadow-xl w-80 sm:w-[24vw] mb-2 flex flex-col h-[60vh] sm:h-[70vh] border border-gray-200 overflow-hidden",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "bg-purple-600 p-3 border-b flex items-center justify-between",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, n.jsx)("div", {
                              className: "w-8 h-8 ".concat(
                                "bg-white-600",
                                " rounded-full flex items-center justify-center mr-2",
                              ),
                              children: (0, n.jsx)(d.default, {
                                unoptimized: !0,
                                src: l.Z,
                                alt: "DataTroops Logo",
                                width: 40,
                                height: 40,
                              }),
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                (0, n.jsx)("div", {
                                  className: "text-white font-semibold",
                                  children: "DataTroops AI Assistant",
                                }),
                                (0, n.jsx)("div", {
                                  className: "text-xs text-white-500",
                                  children: new Date().toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "long",
                                      day: "numeric",
                                      year: "numeric",
                                    },
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "flex items-center",
                          children: (0, n.jsx)("button", {
                            onClick: A,
                            className: "text-white",
                            "aria-label": "Close chat",
                            children: (0, n.jsx)(o.Z, { size: 24 }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "px-4 py-1 text-xs ".concat(
                        "bg-green-50 text-green-600",
                      ),
                      children: p
                        ? "waiting_email" === b
                          ? "Waiting for email address..."
                          : "waiting_phone" === b
                            ? "Waiting for phone number..."
                            : "We're online ..."
                        : "We're Online",
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex-1 p-4 overflow-y-auto bg-gray-50",
                      children: [
                        a.map((e) =>
                          (0, n.jsxs)(
                            "div",
                            {
                              className: "w-fit max-w-[80%] mb-4 ".concat(
                                "user" === e.sender ? "ml-auto" : "mr-auto",
                              ),
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "p-3 rounded-lg whitespace-pre-line ".concat(
                                      "user" === e.sender
                                        ? "bg-purple-600 text-white rounded-br-none"
                                        : "bg-gray-200 text-gray-800 rounded-bl-none",
                                    ),
                                  children: e.text,
                                }),
                                e.options &&
                                  e.options.length > 0 &&
                                  (0, n.jsx)("div", {
                                    className: "mt-2 flex flex-wrap gap-2",
                                    children: e.options.map((e) =>
                                      (0, n.jsx)(
                                        "button",
                                        {
                                          onClick: () => B(e.text),
                                          disabled: w,
                                          className:
                                            "bg-white border border-purple-300 text-purple-600 rounded-full px-3 py-1 text-sm hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                          children: e.text,
                                        },
                                        e.id,
                                      ),
                                    ),
                                  }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                        f &&
                          (0, n.jsx)("div", {
                            className: "max-w-[80%] mr-auto",
                            children: (0, n.jsx)("div", {
                              className:
                                "bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none inline-block",
                              children: (0, n.jsxs)("div", {
                                className: "flex space-x-1",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "0ms" },
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "200ms" },
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "400ms" },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        (0, n.jsx)("div", { ref: N }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "border-t p-2 bg-white border-gray-200",
                      children: (0, n.jsxs)("div", {
                        className:
                          "flex items-center rounded-l-md bg-gray-100 px-3 py-2",
                        children: [
                          (0, n.jsx)("button", {
                            className: "text-gray-400 mr-2",
                          }),
                          (0, n.jsx)("input", {
                            ref: C,
                            type: "text",
                            value: m,
                            onChange: (e) => {
                              h(e.target.value);
                            },
                            onKeyPress: (e) => {
                              "Enter" !== e.key || w || S();
                            },
                            placeholder:
                              "waiting_email" === b
                                ? "Enter your email address..."
                                : "waiting_phone" === b
                                  ? "Enter your phone number..."
                                  : "Type your message",
                            className:
                              "flex-1 bg-transparent outline-none text-gray-700",
                            disabled: w,
                          }),
                          (0, n.jsx)("button", {
                            onClick: () => S(),
                            disabled: !m.trim() || w,
                            className: "ml-2 ".concat(
                              !m.trim() || w
                                ? "text-gray-300"
                                : "text-purple-600",
                            ),
                            "aria-label": "Send message",
                            children: w
                              ? (0, n.jsx)(s.Z, {
                                  size: 20,
                                  className: "animate-spin",
                                })
                              : (0, n.jsx)(i.Z, { size: 20 }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "bg-purple-600 text-s text-white-600 text-center py-2 border-t",
                      children: (0, n.jsxs)("p", {
                        className: "text-white-700 mt-1",
                        children: [
                          "Powered by",
                          " ",
                          (0, n.jsx)("span", {
                            className: "font-bold text-white-600",
                            children: "DataTroops.ai",
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
    e.O(0, [676, 958, 413, 802, 971, 23, 744], function () {
      return e((e.s = 13233));
    }),
      (_N_E = e.O());
  },
]);
