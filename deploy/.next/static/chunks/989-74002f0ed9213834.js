"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [989],
  {
    81180: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = a(57437),
        r = a(2265),
        n = a(6920),
        i = a(45079),
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
          Promise.all([a.e(987), a.e(839)])
            .then(a.bind(a, 42839))
            .then((e) => e.motion.div),
        { loadableGenerated: { webpack: () => [null] }, ssr: !1 },
      );
      var m = () => {
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
                            (0, s.jsx)(n.G, { icon: i.eFW, className: "ml-3" }),
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
    56567: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = a(57437),
        r = a(2265),
        n = a(74697),
        i = a(66706),
        o = a(60994),
        l = a(53833),
        c = {
          src: "/_next/static/media/chatbot-avatar.75f82f45.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = a(66648),
        m = () => {
          let [e, t] = (0, r.useState)(!1),
            [a, m] = (0, r.useState)([]),
            [u, h] = (0, r.useState)(""),
            [x, g] = (0, r.useState)(!0),
            [b, p] = (0, r.useState)(!1),
            [f, w] = (0, r.useState)("normal"),
            [v, y] = (0, r.useState)(!1),
            j = "https://datatrooops-ai-chatbot.onrender.com",
            N = (0, r.useRef)(null),
            A = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            0 === a.length &&
              setTimeout(() => {
                p(!0),
                  setTimeout(() => {
                    m([
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
                      p(!1);
                  }, 1500);
              }, 1e3);
          }, [a.length]),
            (0, r.useEffect)(() => {
              k();
            }, [a]),
            (0, r.useEffect)(() => {
              D();
            }, []);
          let D = async () => {
              try {
                let e = await fetch("".concat(j, "/status"));
                if (e.ok) {
                  let t = await e.json();
                  g(t.knowledge_loaded);
                } else g(!1);
              } catch (e) {
                console.error("Backend connection failed:", e), g(!1);
              }
            },
            k = () => {
              var e;
              null === (e = N.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth" });
            },
            C = () => {
              t(!e),
                e ||
                  setTimeout(() => {
                    var e;
                    null === (e = A.current) || void 0 === e || e.focus();
                  }, 100);
            },
            E = async (e) => {
              try {
                y(!0);
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
                y(!1);
              }
            },
            S = async function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : u;
              if (!e.trim() || v) return;
              let t = { id: Date.now(), text: e, sender: "user" };
              m((e) => [...e, t]), h(""), p(!0);
              let a = await E(e);
              setTimeout(() => {
                let e = {
                  id: Date.now(),
                  text: a.response,
                  sender: "bot",
                  options: a.options,
                };
                m((t) => [...t, e]), w(a.state || "normal"), p(!1);
              }, 1e3);
            },
            T = (e) => {
              S(e);
            };
          return (0, s.jsxs)("div", {
            className: "fixed bottom-4 right-4 z-50 flex flex-col items-end",
            children: [
              !e &&
                (0, s.jsx)("button", {
                  onClick: C,
                  className:
                    "flex items-center justify-center w-16 h-16 rounded-full text-white ".concat(
                      e
                        ? "bg-white-500"
                        : x
                          ? "bg-white border-t"
                          : "bg-gray-100",
                      " shadow-lg transition-all duration-300 hover:scale-110",
                    ),
                  "aria-label": "Open chat",
                  children: (0, s.jsx)(d.default, {
                    src: c,
                    alt: "DataTroops Logo",
                    width: 48,
                    height: 48,
                  }),
                }),
              e &&
                (0, s.jsxs)("div", {
                  className:
                    "bg-white rounded-lg shadow-xl w-80 sm:w-[24vw] mb-2 flex flex-col h-[60vh] sm:h-[70vh] border border-gray-200 overflow-hidden",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "bg-purple-600 p-3 border-b flex items-center justify-between",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className: "w-8 h-8 ".concat(
                                "bg-white-600",
                                " rounded-full flex items-center justify-center mr-2",
                              ),
                              children: (0, s.jsx)(d.default, {
                                unoptimized: !0,
                                src: l.Z,
                                alt: "DataTroops Logo",
                                width: 40,
                                height: 40,
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("div", {
                                  className: "text-white font-semibold",
                                  children: "DataTroops AI Assistant",
                                }),
                                (0, s.jsx)("div", {
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
                        (0, s.jsx)("div", {
                          className: "flex items-center",
                          children: (0, s.jsx)("button", {
                            onClick: C,
                            className: "text-white",
                            "aria-label": "Close chat",
                            children: (0, s.jsx)(n.Z, { size: 24 }),
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "px-4 py-1 text-xs ".concat(
                        "bg-green-50 text-green-600",
                      ),
                      children: x
                        ? "waiting_email" === f
                          ? "Waiting for email address..."
                          : "waiting_phone" === f
                            ? "Waiting for phone number..."
                            : "We're online ..."
                        : "We're Online",
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex-1 p-4 overflow-y-auto bg-gray-50",
                      children: [
                        a.map((e) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className: "w-fit max-w-[80%] mb-4 ".concat(
                                "user" === e.sender ? "ml-auto" : "mr-auto",
                              ),
                              children: [
                                (0, s.jsx)("div", {
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
                                  (0, s.jsx)("div", {
                                    className: "mt-2 flex flex-wrap gap-2",
                                    children: e.options.map((e) =>
                                      (0, s.jsx)(
                                        "button",
                                        {
                                          onClick: () => T(e.text),
                                          disabled: v,
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
                        b &&
                          (0, s.jsx)("div", {
                            className: "max-w-[80%] mr-auto",
                            children: (0, s.jsx)("div", {
                              className:
                                "bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none inline-block",
                              children: (0, s.jsxs)("div", {
                                className: "flex space-x-1",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "0ms" },
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "200ms" },
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "400ms" },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        (0, s.jsx)("div", { ref: N }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "border-t p-2 bg-white border-gray-200",
                      children: (0, s.jsxs)("div", {
                        className:
                          "flex items-center rounded-l-md bg-gray-100 px-3 py-2",
                        children: [
                          (0, s.jsx)("button", {
                            className: "text-gray-400 mr-2",
                          }),
                          (0, s.jsx)("input", {
                            ref: A,
                            type: "text",
                            value: u,
                            onChange: (e) => {
                              h(e.target.value);
                            },
                            onKeyPress: (e) => {
                              "Enter" !== e.key || v || S();
                            },
                            placeholder:
                              "waiting_email" === f
                                ? "Enter your email address..."
                                : "waiting_phone" === f
                                  ? "Enter your phone number..."
                                  : "Type your message",
                            className:
                              "flex-1 bg-transparent outline-none text-gray-700",
                            disabled: v,
                          }),
                          (0, s.jsx)("button", {
                            onClick: () => S(),
                            disabled: !u.trim() || v,
                            className: "ml-2 ".concat(
                              !u.trim() || v
                                ? "text-gray-300"
                                : "text-purple-600",
                            ),
                            "aria-label": "Send message",
                            children: v
                              ? (0, s.jsx)(i.Z, {
                                  size: 20,
                                  className: "animate-spin",
                                })
                              : (0, s.jsx)(o.Z, { size: 20 }),
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "bg-purple-600 text-s text-white-600 text-center py-2 border-t",
                      children: (0, s.jsxs)("p", {
                        className: "text-white-700 mt-1",
                        children: [
                          "Powered by",
                          " ",
                          (0, s.jsx)("span", {
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
      t.Z = {
        src: "/_next/static/media/datatroopsLogo.1e6a1c95.svg",
        height: 2835,
        width: 2835,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
