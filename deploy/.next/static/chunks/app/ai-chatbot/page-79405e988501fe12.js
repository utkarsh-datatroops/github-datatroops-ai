(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [393],
  {
    76988: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 21624));
    },
    21624: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        });
      var a = s(57437),
        i = s(2265),
        r = s(14950),
        n = s(34446),
        o = s(4436),
        l = s(20500),
        c = s(71976),
        d = s(98094),
        m = s(55430),
        x = s(5353),
        u = s(47390),
        p = s(29338),
        h = s(92940),
        g = s(97830),
        b = s(56726),
        f = s(6920),
        y = s(45079),
        v = s(66648),
        w = s(53833),
        j = () => {
          let [e, t] = (0, i.useState)([]),
            [s, o] = (0, i.useState)(!1),
            l = (0, i.useRef)(null),
            c = (0, i.useRef)(null),
            [d, m] = (0, i.useState)(!1),
            [x, u] = (0, i.useState)(!1),
            [p, h] = (0, i.useState)(null);
          (0, i.useEffect)(() => {
            let e = () => h(window.innerWidth <= 768);
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []);
          let [g, b] = (0, i.useState)(""),
            [j, N] = (0, i.useState)(!1),
            [C, S] = (0, i.useState)({ email: "", phone: "", query: "" }),
            k = (0, i.useCallback)(
              (e) => !e || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.toLowerCase()),
              [],
            ),
            A = (0, i.useCallback)((e) => {
              if (!e) return !0;
              let t = e.replace(/[\s\-()+]/g, "");
              return /^[0-9]{7,15}$/.test(t);
            }, []),
            E = (0, i.useMemo)(
              () =>
                C.email && !k(C.email)
                  ? "Please enter a valid email address."
                  : "",
              [C.email, k],
            ),
            B = (0, i.useMemo)(
              () =>
                C.phone && !A(C.phone)
                  ? "Please enter a valid phone number."
                  : "",
              [C.phone, A],
            ),
            I = (0, i.useMemo)(
              () =>
                ("" !== C.email.trim() || "" !== C.phone.trim()) && !E && !B,
              [C.email, C.phone, E, B],
            ),
            P = (0, i.useCallback)(
              () =>
                new Date().toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: !0,
                }),
              [],
            ),
            T = (0, i.useCallback)(
              (e) => {
                t((t) => [
                  ...t,
                  { ...e, id: t.length > 0 ? t[t.length - 1].id + 1 : 1 },
                ]);
              },
              [t],
            ),
            M = (0, i.useMemo)(
              () => [
                { type: "user", text: "Hi!" },
                {
                  type: "bot",
                  text: "Hi there,\n        I'm an AI assistant. How can I help you today?",
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
                  text: "Here are 3 options:\n        1. Dr. Verma – Tomorrow at 10 AM\n        2. Dr. Patel – Tomorrow at 2 PM\n        3. Dr. Guleria – Friday at 9 AM\n        Which one works for you?",
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
              [],
            ),
            D = (0, i.useRef)(0),
            L = (0, i.useCallback)(async () => {
              D.current += 1;
              let e = D.current;
              for (let s of (t([]), u(!0), o(!1), M)) {
                if (D.current !== e) break;
                if ("bot" === s.type) {
                  if (
                    (o(!0),
                    await new Promise((e) => setTimeout(e, 1500)),
                    D.current !== e)
                  )
                    break;
                  o(!1);
                }
                if (D.current !== e) break;
                T({ type: s.type, text: s.text, time: P() }),
                  await new Promise((e) => setTimeout(e, 1e3));
              }
              D.current === e && (u(!1), o(!1));
            }, [T, M, P]);
          (0, i.useEffect)(() => {
            if (d || !c.current) return;
            let e = new IntersectionObserver(
              (e) => {
                let [t] = e;
                t.isIntersecting && m(!0);
              },
              { root: null, rootMargin: "0px", threshold: 0.3 },
            );
            return (
              e.observe(c.current),
              () => {
                c.current && e.unobserve(c.current);
              }
            );
          }, [d]),
            (0, i.useEffect)(() => {
              d && L();
            }, [d, L]),
            (0, i.useEffect)(() => {
              l.current && (l.current.scrollTop = l.current.scrollHeight);
            }, [e, s]);
          let Z = (0, i.useCallback)(
              (e) =>
                e
                  .split("\n")
                  .map((t, s) =>
                    (0, a.jsxs)(
                      "span",
                      {
                        children: [
                          t,
                          s < e.split("\n").length - 1 && (0, a.jsx)("br", {}),
                        ],
                      },
                      s,
                    ),
                  ),
              [],
            ),
            H = (0, i.useCallback)((e) => S((t) => ({ ...t, email: e })), []),
            F = (0, i.useCallback)((e) => S((t) => ({ ...t, phone: e })), []),
            q = (0, i.useCallback)(() => {
              !g.trim() ||
                x ||
                s ||
                j ||
                j ||
                !d ||
                (S((e) => ({ ...e, query: g.trim() })), b(""), N(!0));
            }, [g, x, s, j, d]),
            W = (0, i.useCallback)(async () => {
              if (!I) {
                alert("Please fix errors before submitting.");
                return;
              }
              if (!C.query) {
                alert("No query found.");
                return;
              }
              let e = { email: C.email, phone: C.phone, query: C.query };
              try {
                await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                }),
                  T({
                    type: "user",
                    text: "Here are my details:\nEmail: "
                      .concat(C.email || "N/A", "\nPhone: ")
                      .concat(C.phone || "N/A", "\nQuery: ")
                      .concat(C.query),
                    time: P(),
                  }),
                  T({
                    type: "bot",
                    text: "Thanks for your details! Our team will reach out to you soon to provide the resolution on your query.",
                    time: P(),
                  }),
                  N(!1),
                  S({ email: "", phone: "", query: "" });
              } catch (e) {
                console.error("Error sending user info:", e),
                  alert(
                    "There was an error submitting your information. Please try again.",
                  );
              }
            }, [I, C, T, P]),
            O = (0, i.useCallback)(
              (e) => {
                "Enter" !== e.key || j || q();
              },
              [q, j],
            ),
            z = (0, i.useCallback)((e) => {
              b(e.target.value);
            }, []),
            Y = (0, i.useCallback)(() => {
              (D.current += 1),
                t([]),
                o(!1),
                u(!1),
                N(!1),
                S({ email: "", phone: "", query: "" }),
                b(""),
                m(!0),
                L();
            }, [L]);
          return (0, a.jsx)("section", {
            ref: c,
            className: "w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden",
            children: (0, a.jsx)("div", {
              className: "max-w-7xl mx-auto flex flex-col items-center gap-8",
              children: (0, a.jsxs)("div", {
                className:
                  "w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "bg-[var(--color-7B2CBF)] text-white p-4 flex items-center justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)(f.G, {
                            icon: y.A35,
                            className: "h-4 w-4",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "h-6 w-6 rounded-full bg-white flex items-center justify-center",
                                children: (0, a.jsx)(v.default, {
                                  unoptimized: !0,
                                  src: w.Z,
                                  alt: "DataTroops Logo",
                                  width: 24,
                                  height: 24,
                                }),
                              }),
                              (0, a.jsx)("span", {
                                className: "font-medium",
                                children: "DataTroops.ai Healthcare",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                          (0, a.jsx)(f.G, {
                            style: { cursor: "pointer" },
                            onClick: Y,
                            icon: y.QDM,
                            className: "h-4 w-4",
                          }),
                          (0, a.jsx)(f.G, {
                            icon: y.NBC,
                            className: "h-4 w-4",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    ref: l,
                    className: "p-4 h-96 overflow-y-auto scroll-smooth",
                    style: { scrollBehavior: "smooth" },
                    children: [
                      d
                        ? (0, a.jsx)(n.M, {
                            children: e.map((e) =>
                              (0, a.jsx)(
                                r.E.div,
                                {
                                  className: "flex flex-col mb-4",
                                  initial: { opacity: 0, y: 20 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: 10 },
                                  transition: { duration: 0.3 },
                                  children:
                                    "user" === e.type
                                      ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "flex justify-end mb-1",
                                              children: (0, a.jsx)("div", {
                                                className:
                                                  "bg-[var(--color-9D4EDD)] text-white rounded-3xl py-3 px-4 max-w-xs",
                                                children: (0, a.jsx)("p", {
                                                  children: Z(e.text),
                                                }),
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "text-xs text-gray-500 text-right",
                                              children: e.time,
                                            }),
                                          ],
                                        })
                                      : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className: "flex mb-1",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className: "mr-2",
                                                  children: (0, a.jsx)("div", {
                                                    className:
                                                      "bg-white h-8 w-8 rounded-full flex items-center justify-center",
                                                    children: (0, a.jsx)(
                                                      v.default,
                                                      {
                                                        unoptimized: !0,
                                                        src: w.Z,
                                                        alt: "DataTroops Logo",
                                                        width: 24,
                                                        height: 24,
                                                      },
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "bg-gray-100 rounded-3xl py-3 px-4 max-w-xs",
                                                  children: (0, a.jsx)("p", {
                                                    className: "text-gray-800",
                                                    children: Z(e.text),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)("div", {
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
                        : (0, a.jsx)("div", {
                            className:
                              "flex items-center justify-center h-full",
                            children:
                              null === p
                                ? null
                                : (0, a.jsx)("p", {
                                    className: "text-gray-500 text-center",
                                    children: p
                                      ? "Tap to start conversation"
                                      : "Scroll down to view the conversation",
                                  }),
                          }),
                      s &&
                        (0, a.jsxs)(r.E.div, {
                          className: "flex mb-4",
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 10 },
                          transition: { duration: 0.3 },
                          children: [
                            (0, a.jsx)("div", {
                              className: "mr-2",
                              children: (0, a.jsx)("div", {
                                className:
                                  "bg-white h-8 w-8 rounded-full flex items-center justify-center",
                                children: (0, a.jsx)(v.default, {
                                  unoptimized: !0,
                                  src: w.Z,
                                  alt: "DataTroops Logo",
                                  width: 24,
                                  height: 24,
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "bg-gray-100 rounded-3xl py-3 px-4 max-w-xs",
                              children: (0, a.jsxs)("div", {
                                className: "flex space-x-1",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                    style: { animationDelay: "0ms" },
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                    style: { animationDelay: "200ms" },
                                  }),
                                  (0, a.jsx)("div", {
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
                  (0, a.jsxs)("div", {
                    className: "p-4 border-t border-gray-200",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, a.jsx)("button", {
                            className:
                              "md:flex lg:flex xl:flex bg-[var(--color-7B2CBF)] text-white px-4 mr-1 hidden items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                            disabled: !0,
                            children: (0, a.jsx)(f.G, {
                              icon: y.Alc,
                              className: "h-5 w-5",
                            }),
                          }),
                          (0, a.jsx)("input", {
                            type: "text",
                            placeholder: "Type your message...",
                            className:
                              "flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[var(--color-7B2CBF)] text-black",
                            value: g,
                            onChange: z,
                            onKeyPress: O,
                            disabled: x || s || j,
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "md:flex lg:flex xl:flex bg-[var(--color-7B2CBF)] text-white px-4 mx-1  hidden items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                            disabled: !0,
                            children: (0, a.jsx)(f.G, {
                              icon: y.UOM,
                              className: "h-5 w-5",
                            }),
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "bg-[var(--color-7B2CBF)] text-white px-4 rounded-r-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                            onClick: q,
                            disabled: x || s || j,
                            children: (0, a.jsx)(f.G, {
                              icon: y.XCy,
                              className: "h-5 w-5",
                            }),
                          }),
                        ],
                      }),
                      j &&
                        (0, a.jsxs)("div", {
                          className:
                            "mt-4 p-4 bg-gray-50 rounded-md text-black",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold mb-2",
                              children:
                                "Almost done! Please provide your contact info.",
                            }),
                            (0, a.jsx)("input", {
                              type: "email",
                              placeholder: "Your email",
                              className:
                                "w-full p-2 mb-1 border rounded ".concat(
                                  E ? "border-red-500" : "border-gray-300",
                                ),
                              value: C.email,
                              onChange: (e) => H(e.target.value),
                            }),
                            E &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-sm mb-2",
                                children: E,
                              }),
                            (0, a.jsx)("input", {
                              type: "tel",
                              placeholder: "Your phone number",
                              className:
                                "w-full p-2 mb-1 border rounded ".concat(
                                  B ? "border-red-500" : "border-gray-300",
                                ),
                              value: C.phone,
                              onChange: (e) => F(e.target.value),
                            }),
                            B &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-sm mb-2",
                                children: B,
                              }),
                            (0, a.jsx)("button", {
                              className:
                                "bg-[var(--color-7B2CBF)] text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed",
                              onClick: W,
                              disabled: !I,
                              children: "Submit",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        N = s(87138),
        C = s(41942),
        S = s(16463),
        k = (e) => {
          let { sectionMeta: t, caseStudiesData: s } = e,
            [n, o] = (0, i.useState)(0),
            l = (0, S.useRouter)(),
            c = (e) => l.push(e);
          (0, i.useEffect)(() => {
            let e = setInterval(() => {
              o((e) => (e + 1) % s.length);
            }, 8e3);
            return () => clearInterval(e);
          }, [s.length]);
          let d = s[n];
          return (0, a.jsx)("section", {
            className: "w-full text-white py-20",
            children: (0, a.jsxs)("div", {
              className: "max-w-7xl mx-auto px-6",
              children: [
                (0, a.jsxs)(r.E.div, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.8 },
                  className: "text-center mb-16",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent",
                      children: t.sectionTitle,
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xl text-gray-300 max-w-3xl mx-auto",
                      children: t.sectionSubtitle,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex flex-wrap justify-center gap-4 mb-12",
                  children: s.map((e, t) => {
                    let { id: s, industry: i } = e;
                    return (0, a.jsx)(
                      "button",
                      {
                        onClick: () => o(t),
                        className:
                          "px-6 py-3 rounded-full font-semibold transition-all duration-300 ".concat(
                            n === t
                              ? "bg-white text-gray-900 shadow-lg"
                              : "bg-white/10 text-white hover:bg-white/20",
                          ),
                        children: i,
                      },
                      s,
                    );
                  }),
                }),
                (0, a.jsxs)(
                  r.E.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "space-y-8",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "p-3 rounded-lg bg-gradient-to-r ".concat(
                                    d.gradient,
                                  ),
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-3xl font-bold",
                                    children: d.title,
                                  }),
                                  d.client &&
                                    (0, a.jsx)("p", {
                                      className: "text-purple-300",
                                      children: d.client,
                                    }),
                                ],
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
                                children: t.solutionTitle,
                              }),
                              (0, a.jsx)("p", {
                                className: "text-white font-medium mb-3",
                                children: d.solution,
                              }),
                              (0, a.jsx)("ul", {
                                className: "space-y-2",
                                children: d.details.map((e, t) =>
                                  (0, a.jsxs)(
                                    "li",
                                    {
                                      className:
                                        "flex items-start text-gray-300",
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
                          d.href
                            ? (0, a.jsxs)("button", {
                                onClick: () => c(d.href),
                                className:
                                  "flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-3",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: t.buttonLabel(d.industry),
                                  }),
                                  (0, a.jsx)(C.Z1Y, {}),
                                ],
                              })
                            : (0, a.jsx)(b.Z, {
                                message: t.buttonTooltip,
                                children: (0, a.jsxs)("button", {
                                  className:
                                    "flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-3",
                                  children: [
                                    (0, a.jsx)("span", {
                                      children: t.buttonLabel(d.industry),
                                    }),
                                    (0, a.jsx)(C.Z1Y, {}),
                                  ],
                                }),
                              }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "space-y-6",
                        children: (0, a.jsxs)("div", {
                          className:
                            "relative rounded-2xl overflow-hidden h-64 mb-8",
                          children: [
                            (0, a.jsx)("img", {
                              src: d.image,
                              alt: d.title,
                              className: "w-full h-full object-cover",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t ".concat(
                                  d.gradient,
                                  " opacity-80",
                                ),
                            }),
                            (0, a.jsxs)("div", {
                              className: "absolute bottom-4 left-4 text-white",
                              children: [
                                (0, a.jsx)("p", {
                                  className: "text-sm opacity-90",
                                  children: t.imageLabel,
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-xl font-bold",
                                  children: d.industry,
                                }),
                              ],
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
          });
        },
        A = () => {
          let e = [
              {
                name: "E-commerce",
                icon: (0, a.jsx)(o.Z, { className: "w-6 h-6 text-blue-600" }),
                colorBg: "bg-blue-100",
                tabs: [
                  {
                    title: "Orders",
                    customer: 'Customer: "Where is my order #12345?"',
                    bot: 'Bot: "Your order is out for delivery and will arrive today by 6 PM. Track it here: [link]"',
                  },
                  {
                    title: "Support",
                    customer: 'Customer: "I need help with a return"',
                    bot: 'Bot: "I can help with that! What\'s the reason for return and which item?"',
                  },
                  {
                    title: "Sales",
                    customer: 'Customer: "Do you have any discounts?"',
                    bot: 'Bot: "Yes! Use code SAVE20 for 20% off your first order. Valid until midnight!"',
                  },
                ],
              },
              {
                name: "Healthcare",
                icon: (0, a.jsx)(l.Z, { className: "w-6 h-6 text-green-600" }),
                colorBg: "bg-green-100",
                tabs: [
                  {
                    title: "Orders",
                    customer: 'Patient: "When is my next appointment?"',
                    bot: 'Bot: "Your appointment is scheduled for next Tuesday at 3 PM."',
                  },
                  {
                    title: "Support",
                    customer: 'Patient: "I need a prescription refill"',
                    bot: 'Bot: "I\'ve sent your refill request to your pharmacy. Expect a notification soon."',
                  },
                  {
                    title: "Sales",
                    customer:
                      'Patient: "Are there any wellness packages available?"',
                    bot: 'Bot: "Yes! We have discounted health checkup packages valid this month."',
                  },
                ],
              },
              {
                name: "Financial Services",
                icon: (0, a.jsx)(g.Z, { className: "w-6 h-6 text-purple-600" }),
                colorBg: "bg-purple-100",
                tabs: [
                  {
                    title: "Orders",
                    customer:
                      'Client: "What\'s the status of my loan application?"',
                    bot: 'Bot: "Your loan application is under review and will be approved within 3 days."',
                  },
                  {
                    title: "Support",
                    customer: 'Client: "I want to dispute a transaction"',
                    bot: "Bot: \"I've opened a dispute for the transaction. We'll get back to you soon.\"",
                  },
                  {
                    title: "Sales",
                    customer:
                      'Client: "Are there any investment plans for beginners?"',
                    bot: 'Bot: "Yes! We offer beginner-friendly investment portfolios with low risk."',
                  },
                ],
              },
            ],
            t = [
              {
                id: 1,
                title: "Global Healthcare Transformation",
                client: "",
                industry: "Healthcare",
                challenge:
                  "Fragmented data across 15+ systems hindering real-time decision making",
                solution:
                  "Intelligent medical assistants for patient support, appointment scheduling, and health guidance",
                icon: C.Op,
                gradient: "from-blue-600 to-purple-600",
                image:
                  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                details: [
                  "Symptom Assessment",
                  "Appointment Booking",
                  "Medication Reminders",
                  "Health Monitoring",
                ],
                href: "/healthcare-solutions",
              },
              {
                id: 2,
                title: "Real Estate Operations Optimization",
                client: "",
                industry: "Real Estate",
                challenge: "Unplanned equipment downtime costing $50K per hour",
                solution:
                  "AI-powered property consultants that guide clients through buying, selling, and investing decisions",
                icon: C.iNY,
                gradient: "from-orange-500 to-red-600",
                image:
                  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                details: [
                  "Property Recommendations",
                  "Market Analysis",
                  "Virtual Tours",
                  "Investment Insights",
                ],
              },
              {
                id: 3,
                title: "Education Experience Reimagined",
                client: "",
                industry: "Education",
                challenge:
                  "Lack of personalized learning pathways leading to lower student engagement",
                solution:
                  "Personalized learning companions that adapt to each student's pace and learning style",
                icon: C.Ov7,
                gradient: "from-green-500 to-teal-600",
                image:
                  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
                details: [
                  "Adaptive Learning",
                  "Progress Tracking",
                  "Assignment Help",
                  "Study Planning",
                ],
              },
              {
                id: 4,
                title: "E-commerce Sales Acceleration",
                client: "",
                industry: "E-commerce",
                challenge:
                  "Low conversion rates due to generic shopping experiences",
                solution:
                  "Smart shopping assistants that provide personalized product recommendations and support",
                gradient: "from-[#c77dff] to-[#e0aaff]",
                image:
                  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                details: [
                  "Product Discovery",
                  "Price Comparison",
                  "Order Tracking",
                  "Customer Support",
                ],
              },
              {
                id: 5,
                title: "Finance Digital Advisory",
                client: "",
                industry: "Finance",
                challenge:
                  "Customers lack access to real-time, personalized investment guidance",
                solution:
                  "Intelligent financial advisors for investment guidance, budgeting, and financial planning",
                gradient: "from-[#5a189a] to-[#9d4edd]",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                details: [
                  "Investment Advice",
                  "Budget Planning",
                  "Risk Assessment",
                  "Market Updates",
                ],
              },
              {
                id: 6,
                title: "Automotive Customer Experience",
                client: "",
                industry: "Automotive",
                challenge:
                  "High customer churn due to lack of proactive service engagement",
                solution:
                  "Smart automotive assistants for vehicle maintenance, purchasing decisions, and support",
                gradient: "from-[#7b2cbf] to-[#c77dff]",
                image:
                  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
                details: [
                  "Maintenance Alerts",
                  "Vehicle Comparison",
                  "Service Booking",
                  "Troubleshooting",
                ],
              },
            ],
            [s, f] = (0, i.useState)(0),
            [y, v] = (0, i.useState)(0);
          return (0, a.jsxs)("div", {
            className:
              "min-h-screen bg-gradient-to-br from-[#10002b] via-[#240046] to-[#3c096c] text-white overflow-hidden",
            children: [
              (0, a.jsxs)("div", {
                className: "fixed inset-0 opacity-20 pointer-events-none",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-r from-[#5a189a]/20 via-[#7b2cbf]/20 to-[#9d4edd]/20 animate-pulse pointer-events-none",
                  }),
                  [...Array(30)].map((e, t) =>
                    (0, a.jsx)(
                      r.E.div,
                      {
                        className:
                          "absolute w-1 h-1 bg-[#c77dff] rounded-full pointer-events-none",
                        style: {
                          left: "".concat(100 * Math.random(), "%"),
                          top: "".concat(100 * Math.random(), "%"),
                        },
                        animate: { opacity: [0, 1, 0], scale: [0, 1, 0] },
                        transition: {
                          duration: 3 * Math.random() + 2,
                          repeat: 1 / 0,
                          delay: 2 * Math.random(),
                        },
                      },
                      t,
                    ),
                  ),
                ],
              }),
              (0, a.jsx)("section", {
                className: "pt-6 sm:pt-16 pb-0 sm:pb-6",
                children: (0, a.jsx)("div", {
                  className: "container mx-auto px-4 sm:px-6 lg:px-8",
                  children: (0, a.jsxs)("div", {
                    className:
                      "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                    children: [
                      (0, a.jsxs)(r.E.div, {
                        initial: { opacity: 0, x: -50 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.6 },
                        className: "order-1 lg:order-1",
                        children: [
                          (0, a.jsxs)("h2", {
                            className:
                              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight mb-6",
                            children: [
                              "Automate Customer Conversations with",
                              (0, a.jsxs)("span", {
                                className:
                                  "bg-gradient-to-r from-[#9d4edd] to-[#c77dff] bg-clip-text text-transparent",
                                children: [" ", "AI"],
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed",
                            children:
                              "Build intelligent chatbots that engage customers across multiple channels, reduce support costs, and drive business growth with our no-code platform.",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 mr-4 sm:mr-0",
                            children: [
                              (0, a.jsx)(N.default, {
                                href: "/contact-us",
                                passHref: !0,
                                children: (0, a.jsxs)("button", {
                                  className:
                                    "w-full sm:w-auto bg-[#7b2cbf] hover:bg-[#9d4edd] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center",
                                  children: [
                                    "Start Free Trial",
                                    (0, a.jsx)(c.Z, {
                                      className: "ml-2 w-5 h-5",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)(b.Z, {
                                message: "Coming Soon",
                                children: (0, a.jsxs)("button", {
                                  className:
                                    "w-full sm:w-auto border border-[#7b2cbf] hover:border-[#9d4edd] text-gray-200 hover:text-[#c77dff] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center",
                                  children: [
                                    (0, a.jsx)(d.Z, {
                                      className: "mr-2 w-5 h-5",
                                    }),
                                    "Watch Demo",
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "flex flex-wrap gap-2 mt-2 mb-4",
                            children: [
                              "Appointment",
                              "Customer Support",
                              "Website Bot",
                              "Tech Documentation",
                              "Live Chat",
                              "Order Tracking",
                              "Lead Generation",
                              "Knowledge Base",
                            ].map((e, t) =>
                              (0, a.jsx)(
                                r.E.span,
                                {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  transition: { delay: 0.07 * t },
                                  className:
                                    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] text-white shadow-sm",
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-6 sm:mt-8",
                            children: (0, a.jsx)("div", {
                              className:
                                "grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6",
                              children: [
                                { number: "1M+", label: "Messages Processed" },
                                { number: "99.9%", label: "Uptime SLA" },
                                { number: "24/7", label: "Global Support" },
                              ].map((e, t) =>
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className: "text-center",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "text-xl sm:text-2xl font-bold text-[#9d4edd]",
                                        children: e.number,
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "text-xs sm:text-sm text-gray-300 mt-1",
                                        children: e.label,
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
                      (0, a.jsx)(r.E.div, {
                        initial: { opacity: 0, x: 50 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.6, delay: 0.2 },
                        className: "relative order-1 lg:order-2 mb-8 lg:mb-0",
                        children: (0, a.jsx)(j, {}),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)(k, {
                sectionMeta: {
                  sectionTitle: "Industries We Serve",
                  sectionSubtitle:
                    "Specialized AI solutions tailored for different sectors",
                  solutionTitle: "Solution",
                  buttonLabel: (e) => "View ".concat(e, " Solutions"),
                  buttonTooltip: "Coming Soon",
                  imageLabel: "Industry",
                },
                caseStudiesData: t,
              }),
              (0, a.jsx)("section", {
                id: "features",
                className: "relative z-10 px-4 sm:px-6 py-16 sm:py-20",
                children: (0, a.jsxs)("div", {
                  className: "max-w-7xl mx-auto",
                  children: [
                    (0, a.jsx)(r.E.div, {
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      className: "text-center mb-12 sm:mb-16",
                      children: (0, a.jsx)("h2", {
                        className:
                          "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#9d4edd] to-[#c77dff] bg-clip-text text-transparent",
                        children: "Why Choose DataTroops AI?",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
                      children: [
                        {
                          icon: (0, a.jsx)(m.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Lightning Fast",
                          description:
                            "Sub-second response times with advanced caching and optimization",
                          color: "from-[#7b2cbf] to-[#9d4edd]",
                        },
                        {
                          icon: (0, a.jsx)(l.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Enterprise Security",
                          description:
                            "Bank-level encryption and compliance with industry standards",
                          color: "from-[#5a189a] to-[#7b2cbf]",
                        },
                        {
                          icon: (0, a.jsx)(x.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Advanced AI",
                          description:
                            "Powered by cutting-edge machine learning and natural language processing",
                          color: "from-[#9d4edd] to-[#c77dff]",
                        },
                        {
                          icon: (0, a.jsx)(o.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Multi-Language",
                          description:
                            "Support for 50+ languages with cultural context understanding",
                          color: "from-[#7b2cbf] to-[#c77dff]",
                        },
                        {
                          icon: (0, a.jsx)(u.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Conversational AI",
                          description:
                            "Natural, human-like conversations that feel authentic",
                          color: "from-[#5a189a] to-[#9d4edd]",
                        },
                        {
                          icon: (0, a.jsx)(p.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "24/7 Support",
                          description:
                            "Round-the-clock assistance and monitoring for optimal performance",
                          color: "from-[#9d4edd] to-[#e0aaff]",
                        },
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          r.E.div,
                          {
                            initial: { opacity: 0, y: 50 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0 },
                            transition: { delay: 0.1 * t },
                            whileHover: { y: -10, scale: 1.02 },
                            className:
                              "bg-gradient-to-br from-[#3c096c] to-[#240046] p-6 sm:p-8 rounded-3xl border border-[#5a189a]/30 hover:border-[#7b2cbf]/50 transition-all duration-300",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ".concat(
                                    e.color,
                                    " mb-4 sm:mb-6",
                                  ),
                                children: e.icon,
                              }),
                              (0, a.jsx)("h3", {
                                className:
                                  "text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4",
                                children: e.title,
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-gray-300 leading-relaxed text-sm sm:text-base",
                                children: e.description,
                              }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                id: "pricing",
                className:
                  "py-20 bg-gradient-to-br from-[#3c096c] via-[#240046] to-[#10002b] text-white",
                children: (0, a.jsxs)("div", {
                  className: "container mx-auto px-4 sm:px-6 lg:px-8",
                  children: [
                    (0, a.jsxs)(r.E.div, {
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.6 },
                      className: "text-center mb-12 sm:mb-16",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white",
                          children: "Simple, transparent pricing",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-lg sm:text-xl text-[#e0aaff] max-w-3xl mx-auto",
                          children:
                            "Choose the plan that fits your business needs. All plans include a 14-day free trial.",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8",
                      children: [
                        {
                          name: "Starter",
                          price: "$49",
                          period: "/month",
                          description:
                            "Perfect for small businesses getting started",
                          features: [
                            "Up to 1,000 conversations/month",
                            "2 channels (WhatsApp + Web)",
                            "Basic analytics",
                            "Email support",
                            "Pre-built templates",
                          ],
                          popular: !1,
                        },
                        {
                          name: "Professional",
                          price: "$149",
                          period: "/month",
                          description: "Ideal for growing companies",
                          features: [
                            "All Starter Feature",
                            "Up to 10,000 conversations/month",
                            "All channels included",
                            "Advanced analytics",
                            "Priority support",
                            "Custom integrations",
                            "API access",
                            "Live agent handoff",
                          ],
                          popular: !0,
                        },
                        {
                          name: "Enterprise",
                          price: "Custom",
                          period: "",
                          description:
                            "For large organizations with complex needs",
                          features: [
                            "Unlimited conversations",
                            "All channels + custom channels",
                            "Advanced AI & NLP",
                            "Dedicated success manager",
                            "Custom development",
                            "SLA guarantee",
                            "On-premise deployment",
                          ],
                          popular: !1,
                        },
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          r.E.div,
                          {
                            initial: { opacity: 0, y: 30 },
                            whileInView: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: 0.1 * t },
                            className:
                              "\n            rounded-2xl p-6 sm:p-8 relative\n            ".concat(
                                e.popular
                                  ? "border-2 border-[#9d4edd] shadow-xl scale-105 bg-gradient-to-br from-[#c77dff] to-[#7b2cbf] text-white"
                                  : "border border-[#5a189a]/30 shadow-lg bg-[#240046] text-gray-100",
                                "\n          ",
                              ),
                            children: [
                              e.popular &&
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute -top-4 left-1/2 transform -translate-x-1/2",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium",
                                    children: "Most Popular",
                                  }),
                                }),
                              (0, a.jsxs)("div", {
                                className: "text-center mb-6",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className:
                                      "text-xl sm:text-2xl font-bold mb-2",
                                    children: e.name,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-3xl sm:text-4xl font-bold",
                                        children: e.price,
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-base text-[#e0aaff]",
                                        children: e.period,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-gray-100",
                                    children: e.description,
                                  }),
                                ],
                              }),
                              (0, a.jsx)("ul", {
                                className: "space-y-4 mb-8",
                                children: e.features.map((e, t) =>
                                  (0, a.jsxs)(
                                    "li",
                                    {
                                      className: "flex items-start text-base",
                                      children: [
                                        (0, a.jsx)(h.Z, {
                                          className:
                                            "w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0",
                                        }),
                                        (0, a.jsx)("span", { children: e }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                              }),
                              (0, a.jsx)("button", {
                                className:
                                  "w-full py-3 rounded-lg font-semibold transition-all ".concat(
                                    e.popular
                                      ? "bg-[#5a189a] hover:bg-[#7b2cbf] text-white"
                                      : "bg-[#3c096c] hover:bg-[#5a189a] text-white",
                                  ),
                                children: (0, a.jsx)(b.Z, {
                                  message: "Coming Soon",
                                  children:
                                    "Enterprise" === e.name
                                      ? "Contact Sales"
                                      : "Start Free Trial",
                                }),
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                id: "solutions",
                className: "py-20",
                style: { paddingBottom: "0rem" },
                children: (0, a.jsxs)("div", {
                  className: "container mx-auto px-4 sm:px-6 lg:px-8",
                  children: [
                    (0, a.jsxs)(r.E.div, {
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.6 },
                      className: "text-center mb-16",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-3xl sm:text-4xl font-bold text-gray-100 mb-4",
                          children: "Chatbots for every industry",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto",
                          children:
                            "From e-commerce to healthcare, our AI-powered platform adapts to your specific industry needs and customer requirements.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                      children: [
                        (0, a.jsx)(r.E.div, {
                          initial: { opacity: 0, x: -50 },
                          whileInView: { opacity: 1, x: 0 },
                          transition: { duration: 0.6 },
                          children: (0, a.jsx)("div", {
                            className: "space-y-8",
                            children: e.map((e, t) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  onClick: () => {
                                    f(t), v(0);
                                  },
                                  className:
                                    "cursor-pointer flex items-start space-x-4 p-4 rounded-lg transition-colors ".concat(
                                      s === t
                                        ? "bg-gray-700"
                                        : "hover:bg-gray-800",
                                    ),
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ".concat(
                                          e.colorBg,
                                        ),
                                      children: e.icon,
                                    }),
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)("h3", {
                                          className:
                                            "text-xl font-semibold ".concat(
                                              s === t
                                                ? "text-white"
                                                : "text-gray-300",
                                              " mb-2",
                                            ),
                                          children: e.name,
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "text-gray-400",
                                          children:
                                            "Explore AI-powered solutions tailored for the ".concat(
                                              e.name.toLowerCase(),
                                              " sector.",
                                            ),
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
                        (0, a.jsxs)(r.E.div, {
                          initial: { opacity: 0, x: 50 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.6, delay: 0.2 },
                          className: "bg-white rounded-2xl shadow-xl p-8",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "flex space-x-2 mb-6 flex-wrap justify-center sm:justify-start",
                              children: e[s].tabs.map((e, t) =>
                                (0, a.jsx)(
                                  "button",
                                  {
                                    onClick: () => v(t),
                                    className:
                                      "px-5 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none ".concat(
                                        y === t
                                          ? "bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] text-white shadow-lg"
                                          : "bg-gray-200 text-gray-700 hover:bg-gray-300",
                                      ),
                                    children: e.title,
                                  },
                                  t,
                                ),
                              ),
                            }),
                            (0, a.jsx)(n.M, {
                              mode: "wait",
                              children: (0, a.jsx)(
                                r.E.div,
                                {
                                  initial: { opacity: 0, y: 20 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -20 },
                                  transition: { duration: 0.3 },
                                  className: "space-y-4",
                                  children: (0, a.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "".concat(
                                          e[s].colorBg,
                                          " text-gray-800 p-4 rounded-lg",
                                        ),
                                        children: (0, a.jsx)("p", {
                                          className:
                                            "text-sm font-medium text-gray-800",
                                          children: e[s].tabs[y].customer,
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "bg-gray-100 p-4 rounded-lg",
                                        children: (0, a.jsx)("p", {
                                          className: "text-sm text-gray-900",
                                          children: e[s].tabs[y].bot,
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                "".concat(s, "-").concat(y),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                className: "relative z-10 px-4 sm:px-6 py-16 sm:py-20",
                children: (0, a.jsx)("div", {
                  className: "max-w-4xl mx-auto text-center",
                  children: (0, a.jsxs)(r.E.div, {
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: !0 },
                    className:
                      "bg-gradient-to-r from-[#3c096c] to-[#240046] p-8 sm:p-12 rounded-3xl border border-[#7b2cbf]/30",
                    children: [
                      (0, a.jsx)("h2", {
                        className:
                          "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#c77dff] to-[#9d4edd] bg-clip-text text-transparent",
                        children: "Ready to Transform Your Business?",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4",
                        children:
                          "Join thousands of businesses already using DataTroops AI to revolutionize their customer interactions",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col sm:flex-row gap-4 justify-center px-4",
                        children: [
                          (0, a.jsx)(b.Z, {
                            message: "Coming Soon",
                            children: (0, a.jsxs)(r.E.button, {
                              whileHover: {
                                scale: 1.05,
                                boxShadow:
                                  "0 20px 40px rgba(199, 125, 255, 0.4)",
                              },
                              whileTap: { scale: 0.95 },
                              className:
                                "w-full sm:w-auto bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:from-[#9d4edd] hover:to-[#c77dff] transition-all",
                              children: [
                                "Start Your Free Trial",
                                (0, a.jsx)(c.Z, { className: "w-5 h-5" }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(b.Z, {
                            message: "Coming Soon",
                            children: (0, a.jsx)(r.E.button, {
                              whileHover: { scale: 1.05 },
                              whileTap: { scale: 0.95 },
                              className:
                                "w-full sm:w-auto border border-[#7b2cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold hover:bg-[#7b2cbf]/10 transition-all",
                              children: "Schedule Demo",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
      function E() {
        return (0, a.jsx)(A, {});
      }
    },
    56726: function (e, t, s) {
      "use strict";
      var a = s(57437);
      t.Z = (e) => {
        let { message: t, children: s } = e;
        return (0, a.jsxs)("div", {
          className: "group relative inline-flex h-full",
          children: [
            s,
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
    e.O(0, [676, 699, 648, 138, 950, 920, 506, 971, 23, 744], function () {
      return e((e.s = 76988));
    }),
      (_N_E = e.O());
  },
]);
