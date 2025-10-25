(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [393],
  {
    93977: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 52637));
    },
    52637: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return Z;
          },
        });
      var a = s(57437),
        r = s(61485),
        i = s(56567),
        n = s(2265),
        o = s(14950),
        l = s(34446),
        c = s(82244),
        d = s(74232),
        m = s(36198),
        x = s(98960),
        u = s(25912),
        h = s(16081),
        p = s(4436),
        b = s(20500),
        g = s(71976),
        f = s(98094),
        y = s(92940),
        w = s(55430),
        j = s(5353),
        v = s(47390),
        N = s(29338),
        S = s(97830),
        C = s(16733),
        k = s(56726),
        E = s(6920),
        I = s(45079),
        A = s(66648),
        T = s(53833),
        P = () => {
          let [e, t] = (0, n.useState)([]),
            [s, r] = (0, n.useState)(!1),
            i = (0, n.useRef)(null),
            c = (0, n.useRef)(null),
            [d, m] = (0, n.useState)(!1),
            [x, u] = (0, n.useState)(!1),
            [h, p] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            let e = () => p(window.innerWidth <= 768);
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []);
          let [b, g] = (0, n.useState)(""),
            [f, y] = (0, n.useState)(!1),
            [w, j] = (0, n.useState)({ email: "", phone: "", query: "" }),
            v = (0, n.useCallback)(
              (e) => !e || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.toLowerCase()),
              [],
            ),
            N = (0, n.useCallback)((e) => {
              if (!e) return !0;
              let t = e.replace(/[\s\-()+]/g, "");
              return /^[0-9]{7,15}$/.test(t);
            }, []),
            S = (0, n.useMemo)(
              () =>
                w.email && !v(w.email)
                  ? "Please enter a valid email address."
                  : "",
              [w.email, v],
            ),
            C = (0, n.useMemo)(
              () =>
                w.phone && !N(w.phone)
                  ? "Please enter a valid phone number."
                  : "",
              [w.phone, N],
            ),
            k = (0, n.useMemo)(
              () =>
                ("" !== w.email.trim() || "" !== w.phone.trim()) && !S && !C,
              [w.email, w.phone, S, C],
            ),
            P = (0, n.useCallback)(
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
            B = (0, n.useCallback)(
              (e) => {
                t((t) => [
                  ...t,
                  { ...e, id: t.length > 0 ? t[t.length - 1].id + 1 : 1 },
                ]);
              },
              [t],
            ),
            D = (0, n.useMemo)(
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
            Z = (0, n.useRef)(0),
            M = (0, n.useCallback)(async () => {
              Z.current += 1;
              let e = Z.current;
              for (let s of (t([]), u(!0), r(!1), D)) {
                if (Z.current !== e) break;
                if ("bot" === s.type) {
                  if (
                    (r(!0),
                    await new Promise((e) => setTimeout(e, 1500)),
                    Z.current !== e)
                  )
                    break;
                  r(!1);
                }
                if (Z.current !== e) break;
                B({ type: s.type, text: s.text, time: P() }),
                  await new Promise((e) => setTimeout(e, 1e3));
              }
              Z.current === e && (u(!1), r(!1));
            }, [B, D, P]);
          (0, n.useEffect)(() => {
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
            (0, n.useEffect)(() => {
              d && M();
            }, [d, M]),
            (0, n.useEffect)(() => {
              i.current && (i.current.scrollTop = i.current.scrollHeight);
            }, [e, s]);
          let H = (0, n.useCallback)(
              (e) =>
                e.split("\n").map((t, s) =>
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
            L = (0, n.useCallback)((e) => j((t) => ({ ...t, email: e })), []),
            W = (0, n.useCallback)((e) => j((t) => ({ ...t, phone: e })), []),
            z = (0, n.useCallback)(() => {
              !b.trim() ||
                x ||
                s ||
                f ||
                f ||
                !d ||
                (j((e) => ({ ...e, query: b.trim() })), g(""), y(!0));
            }, [b, x, s, f, d]),
            F = (0, n.useCallback)(async () => {
              if (!k) {
                alert("Please fix errors before submitting.");
                return;
              }
              if (!w.query) {
                alert("No query found.");
                return;
              }
              let e = { email: w.email, phone: w.phone, query: w.query };
              try {
                await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                }),
                  B({
                    type: "user",
                    text: "Here are my details:\nEmail: "
                      .concat(w.email || "N/A", "\nPhone: ")
                      .concat(w.phone || "N/A", "\nQuery: ")
                      .concat(w.query),
                    time: P(),
                  }),
                  B({
                    type: "bot",
                    text: "Thanks for your details! Our team will reach out to you soon to provide the resolution on your query.",
                    time: P(),
                  }),
                  y(!1),
                  j({ email: "", phone: "", query: "" });
              } catch (e) {
                console.error("Error sending user info:", e),
                  alert(
                    "There was an error submitting your information. Please try again.",
                  );
              }
            }, [k, w, B, P]),
            O = (0, n.useCallback)(
              (e) => {
                "Enter" !== e.key || f || z();
              },
              [z, f],
            ),
            V = (0, n.useCallback)((e) => {
              g(e.target.value);
            }, []),
            _ = (0, n.useCallback)(() => {
              (Z.current += 1),
                t([]),
                r(!1),
                u(!1),
                y(!1),
                j({ email: "", phone: "", query: "" }),
                g(""),
                m(!0),
                M();
            }, [M]);
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
                          (0, a.jsx)(E.G, {
                            icon: I.A35,
                            className: "h-4 w-4",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "h-6 w-6 rounded-full bg-white flex items-center justify-center",
                                children: (0, a.jsx)(A.default, {
                                  unoptimized: !0,
                                  src: T.Z,
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
                          (0, a.jsx)(E.G, {
                            style: { cursor: "pointer" },
                            onClick: _,
                            icon: I.QDM,
                            className: "h-4 w-4",
                          }),
                          (0, a.jsx)(E.G, {
                            icon: I.NBC,
                            className: "h-4 w-4",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    ref: i,
                    className: "p-4 h-96 overflow-y-auto scroll-smooth",
                    style: { scrollBehavior: "smooth" },
                    children: [
                      d
                        ? (0, a.jsx)(l.M, {
                            children: e.map((e) =>
                              (0, a.jsx)(
                                o.E.div,
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
                                                  children: H(e.text),
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
                                                      A.default,
                                                      {
                                                        unoptimized: !0,
                                                        src: T.Z,
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
                                                    children: H(e.text),
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
                              null === h
                                ? null
                                : (0, a.jsx)("p", {
                                    className: "text-gray-500 text-center",
                                    children: h
                                      ? "Tap to start conversation"
                                      : "Scroll down to view the conversation",
                                  }),
                          }),
                      s &&
                        (0, a.jsxs)(o.E.div, {
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
                                children: (0, a.jsx)(A.default, {
                                  unoptimized: !0,
                                  src: T.Z,
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
                            children: (0, a.jsx)(E.G, {
                              icon: I.Alc,
                              className: "h-5 w-5",
                            }),
                          }),
                          (0, a.jsx)("input", {
                            type: "text",
                            placeholder: "Type your message...",
                            className:
                              "flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[var(--color-7B2CBF)] text-black",
                            value: b,
                            onChange: V,
                            onKeyPress: O,
                            disabled: x || s || f,
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "md:flex lg:flex xl:flex bg-[var(--color-7B2CBF)] text-white px-4 mx-1  hidden items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                            disabled: !0,
                            children: (0, a.jsx)(E.G, {
                              icon: I.UOM,
                              className: "h-5 w-5",
                            }),
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "bg-[var(--color-7B2CBF)] text-white px-4 rounded-r-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                            onClick: z,
                            disabled: x || s || f,
                            children: (0, a.jsx)(E.G, {
                              icon: I.XCy,
                              className: "h-5 w-5",
                            }),
                          }),
                        ],
                      }),
                      f &&
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
                                  S ? "border-red-500" : "border-gray-300",
                                ),
                              value: w.email,
                              onChange: (e) => L(e.target.value),
                            }),
                            S &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-sm mb-2",
                                children: S,
                              }),
                            (0, a.jsx)("input", {
                              type: "tel",
                              placeholder: "Your phone number",
                              className:
                                "w-full p-2 mb-1 border rounded ".concat(
                                  C ? "border-red-500" : "border-gray-300",
                                ),
                              value: w.phone,
                              onChange: (e) => W(e.target.value),
                            }),
                            C &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-sm mb-2",
                                children: C,
                              }),
                            (0, a.jsx)("button", {
                              className:
                                "bg-[var(--color-7B2CBF)] text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed",
                              onClick: F,
                              disabled: !k,
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
        B = s(87138),
        D = () => {
          let [e, t] = (0, n.useState)(0),
            s = [
              {
                icon: (0, a.jsx)(c.Z, { className: "w-6 h-6 md:w-8 md:h-8" }),
                name: "Healthcare",
                description:
                  "Intelligent medical assistants for patient support, appointment scheduling, and health guidance",
                features: [
                  "Symptom Assessment",
                  "Appointment Booking",
                  "Medication Reminders",
                  "Health Monitoring",
                ],
                color: "from-[#5a189a] to-[#7b2cbf]",
              },
              {
                icon: (0, a.jsx)(d.Z, { className: "w-6 h-6 md:w-8 md:h-8" }),
                name: "Real Estate",
                description:
                  "AI-powered property consultants that guide clients through buying, selling, and investing decisions",
                features: [
                  "Property Recommendations",
                  "Market Analysis",
                  "Virtual Tours",
                  "Investment Insights",
                ],
                color: "from-[#7b2cbf] to-[#9d4edd]",
              },
              {
                icon: (0, a.jsx)(m.Z, { className: "w-6 h-6 md:w-8 md:h-8" }),
                name: "Education",
                description:
                  "Personalized learning companions that adapt to each student's pace and learning style",
                features: [
                  "Adaptive Learning",
                  "Progress Tracking",
                  "Assignment Help",
                  "Study Planning",
                ],
                color: "from-[#9d4edd] to-[#c77dff]",
              },
              {
                icon: (0, a.jsx)(x.Z, { className: "w-6 h-6 md:w-8 md:h-8" }),
                name: "E-commerce",
                description:
                  "Smart shopping assistants that provide personalized product recommendations and support",
                features: [
                  "Product Discovery",
                  "Price Comparison",
                  "Order Tracking",
                  "Customer Support",
                ],
                color: "from-[#c77dff] to-[#e0aaff]",
              },
              {
                icon: (0, a.jsx)(u.Z, { className: "w-6 h-6 md:w-8 md:h-8" }),
                name: "Finance",
                description:
                  "Intelligent financial advisors for investment guidance, budgeting, and financial planning",
                features: [
                  "Investment Advice",
                  "Budget Planning",
                  "Risk Assessment",
                  "Market Updates",
                ],
                color: "from-[#5a189a] to-[#9d4edd]",
              },
              {
                icon: (0, a.jsx)(h.Z, { className: "w-6 h-6 md:w-8 md:h-8" }),
                name: "Automotive",
                description:
                  "Smart automotive assistants for vehicle maintenance, purchasing decisions, and support",
                features: [
                  "Maintenance Alerts",
                  "Vehicle Comparison",
                  "Service Booking",
                  "Troubleshooting",
                ],
                color: "from-[#7b2cbf] to-[#c77dff]",
              },
            ];
          (0, n.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => (e + 1) % s.length);
            }, 6e3);
            return () => clearInterval(e);
          }, []);
          let r = [
              {
                name: "E-commerce",
                icon: (0, a.jsx)(p.Z, { className: "w-6 h-6 text-blue-600" }),
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
                icon: (0, a.jsx)(b.Z, { className: "w-6 h-6 text-green-600" }),
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
                icon: (0, a.jsx)(S.Z, { className: "w-6 h-6 text-purple-600" }),
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
            [i, E] = (0, n.useState)(0),
            [I, A] = (0, n.useState)(0);
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
                      o.E.div,
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
                      (0, a.jsxs)(o.E.div, {
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
                              (0, a.jsx)(B.default, {
                                href: "/contact-us",
                                passHref: !0,
                                children: (0, a.jsxs)("button", {
                                  className:
                                    "w-full sm:w-auto bg-[#7b2cbf] hover:bg-[#9d4edd] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center",
                                  children: [
                                    "Start Free Trial",
                                    (0, a.jsx)(g.Z, {
                                      className: "ml-2 w-5 h-5",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)(k.Z, {
                                message: "Coming Soon",
                                children: (0, a.jsxs)("button", {
                                  className:
                                    "w-full sm:w-auto border border-[#7b2cbf] hover:border-[#9d4edd] text-gray-200 hover:text-[#c77dff] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center",
                                  children: [
                                    (0, a.jsx)(f.Z, {
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
                                o.E.span,
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
                      (0, a.jsx)(o.E.div, {
                        initial: { opacity: 0, x: 50 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.6, delay: 0.2 },
                        className: "relative order-1 lg:order-2 mb-8 lg:mb-0",
                        children: (0, a.jsx)(P, {}),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("section", {
                id: "industries",
                className: "relative z-10 px-6 py-12",
                style: { paddingTop: "0rem" },
                children: (0, a.jsxs)("div", {
                  className: "max-w-7xl mx-auto",
                  children: [
                    (0, a.jsxs)(o.E.div, {
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      className: "text-center mb-12 sm:mb-16",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#c77dff] to-[#9d4edd] bg-clip-text text-transparent",
                          children: "Industries We Serve",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4",
                          children:
                            "Specialized AI solutions tailored for different sectors",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "grid md:grid-cols-2 gap-12 items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "space-y-4",
                          children: s.map((s, r) =>
                            (0, a.jsx)(
                              o.E.div,
                              {
                                onClick: () => t(r),
                                className:
                                  "p-6 rounded-2xl cursor-pointer transition-all duration-300 ".concat(
                                    e === r
                                      ? "bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-500/50"
                                      : "bg-slate-800/50 hover:bg-slate-800",
                                  ),
                                whileHover: { scale: 1.02 },
                                whileTap: { scale: 0.98 },
                                children: (0, a.jsxs)("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "p-3 rounded-xl bg-gradient-to-r ".concat(
                                          s.color,
                                        ),
                                      children: s.icon,
                                    }),
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)("h3", {
                                          className:
                                            "text-xl font-semibold text-white",
                                          children: s.name,
                                        }),
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-gray-400 text-sm mt-1",
                                          children: "Click to explore",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              s.name,
                            ),
                          ),
                        }),
                        (0, a.jsx)(l.M, {
                          mode: "wait",
                          children: (0, a.jsxs)(
                            o.E.div,
                            {
                              initial: { opacity: 0, x: 50 },
                              animate: { opacity: 1, x: 0 },
                              exit: { opacity: 0, x: -50 },
                              transition: { duration: 0.3 },
                              className:
                                "bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "inline-flex p-4 rounded-2xl bg-gradient-to-r ".concat(
                                      s[e].color,
                                      " mb-6",
                                    ),
                                  children: s[e].icon,
                                }),
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-3xl font-bold text-white mb-4",
                                  children: s[e].name,
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-gray-300 text-lg mb-6 leading-relaxed",
                                  children: s[e].description,
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-3",
                                  children: [
                                    (0, a.jsx)("h4", {
                                      className: "text-cyan-400 font-semibold",
                                      children: "Key Features:",
                                    }),
                                    s[e].features.map((e, t) =>
                                      (0, a.jsxs)(
                                        o.E.div,
                                        {
                                          initial: { opacity: 0, x: -20 },
                                          animate: { opacity: 1, x: 0 },
                                          transition: { delay: 0.1 * t },
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, a.jsx)(y.Z, {
                                              className:
                                                "w-5 h-5 text-cyan-400",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "text-gray-300",
                                              children: e,
                                            }),
                                          ],
                                        },
                                        e,
                                      ),
                                    ),
                                  ],
                                }),
                                "Healthcare" === s[e].name &&
                                  (0, a.jsx)("div", {
                                    className: "mt-4",
                                    children: (0, a.jsx)(B.default, {
                                      href: "/solutions",
                                      passHref: !0,
                                      children: (0, a.jsxs)("button", {
                                        className:
                                          "inline-flex items-center px-6 py-3 bg-[#7b2cbf] hover:bg-[#9d4edd] text-white rounded-lg text-lg font-semibold transition-colors",
                                        children: [
                                          "Explore Healthcare Solutions",
                                          (0, a.jsx)(g.Z, {
                                            className: "ml-2 w-5 h-5",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                              ],
                            },
                            e,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                id: "features",
                className: "relative z-10 px-4 sm:px-6 py-16 sm:py-20",
                children: (0, a.jsxs)("div", {
                  className: "max-w-7xl mx-auto",
                  children: [
                    (0, a.jsx)(o.E.div, {
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
                          icon: (0, a.jsx)(w.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Lightning Fast",
                          description:
                            "Sub-second response times with advanced caching and optimization",
                          color: "from-[#7b2cbf] to-[#9d4edd]",
                        },
                        {
                          icon: (0, a.jsx)(b.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Enterprise Security",
                          description:
                            "Bank-level encryption and compliance with industry standards",
                          color: "from-[#5a189a] to-[#7b2cbf]",
                        },
                        {
                          icon: (0, a.jsx)(j.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Advanced AI",
                          description:
                            "Powered by cutting-edge machine learning and natural language processing",
                          color: "from-[#9d4edd] to-[#c77dff]",
                        },
                        {
                          icon: (0, a.jsx)(p.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Multi-Language",
                          description:
                            "Support for 50+ languages with cultural context understanding",
                          color: "from-[#7b2cbf] to-[#c77dff]",
                        },
                        {
                          icon: (0, a.jsx)(v.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "Conversational AI",
                          description:
                            "Natural, human-like conversations that feel authentic",
                          color: "from-[#5a189a] to-[#9d4edd]",
                        },
                        {
                          icon: (0, a.jsx)(N.Z, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                          title: "24/7 Support",
                          description:
                            "Round-the-clock assistance and monitoring for optimal performance",
                          color: "from-[#9d4edd] to-[#e0aaff]",
                        },
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          o.E.div,
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
                    (0, a.jsxs)(o.E.div, {
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
                          o.E.div,
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
                                        (0, a.jsx)(y.Z, {
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
                                children: (0, a.jsx)(k.Z, {
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
                    (0, a.jsxs)(o.E.div, {
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
                        (0, a.jsx)(o.E.div, {
                          initial: { opacity: 0, x: -50 },
                          whileInView: { opacity: 1, x: 0 },
                          transition: { duration: 0.6 },
                          children: (0, a.jsx)("div", {
                            className: "space-y-8",
                            children: r.map((e, t) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  onClick: () => {
                                    E(t), A(0);
                                  },
                                  className:
                                    "cursor-pointer flex items-start space-x-4 p-4 rounded-lg transition-colors ".concat(
                                      i === t
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
                                              i === t
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
                        (0, a.jsxs)(o.E.div, {
                          initial: { opacity: 0, x: 50 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.6, delay: 0.2 },
                          className: "bg-white rounded-2xl shadow-xl p-8",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "flex space-x-2 mb-6 flex-wrap justify-center sm:justify-start",
                              children: r[i].tabs.map((e, t) =>
                                (0, a.jsx)(
                                  "button",
                                  {
                                    onClick: () => A(t),
                                    className:
                                      "px-5 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none ".concat(
                                        I === t
                                          ? "bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] text-white shadow-lg"
                                          : "bg-gray-200 text-gray-700 hover:bg-gray-300",
                                      ),
                                    children: e.title,
                                  },
                                  t,
                                ),
                              ),
                            }),
                            (0, a.jsx)(l.M, {
                              mode: "wait",
                              children: (0, a.jsx)(
                                o.E.div,
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
                                          r[i].colorBg,
                                          " text-gray-800 p-4 rounded-lg",
                                        ),
                                        children: (0, a.jsx)("p", {
                                          className:
                                            "text-sm font-medium text-gray-800",
                                          children: r[i].tabs[I].customer,
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "bg-gray-100 p-4 rounded-lg",
                                        children: (0, a.jsx)("p", {
                                          className: "text-sm text-gray-900",
                                          children: r[i].tabs[I].bot,
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                "".concat(i, "-").concat(I),
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
                  children: (0, a.jsxs)(o.E.div, {
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
                          (0, a.jsx)(k.Z, {
                            message: "Coming Soon",
                            children: (0, a.jsxs)(o.E.button, {
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
                                (0, a.jsx)(g.Z, { className: "w-5 h-5" }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(k.Z, {
                            message: "Coming Soon",
                            children: (0, a.jsx)(o.E.button, {
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
              (0, a.jsx)(C.default, {}),
            ],
          });
        };
      function Z() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.Z, {}),
            (0, a.jsx)(r.default, {}),
            (0, a.jsx)(D, {}),
          ],
        });
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
    56567: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = s(57437),
        r = s(2265),
        i = s(74697),
        n = s(66706),
        o = s(60994),
        l = s(53833),
        c = {
          src: "/_next/static/media/chatbot-avatar.75f82f45.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = s(66648),
        m = () => {
          let [e, t] = (0, r.useState)(!1),
            [s, m] = (0, r.useState)([]),
            [x, u] = (0, r.useState)(""),
            [h, p] = (0, r.useState)(!0),
            [b, g] = (0, r.useState)(!1),
            [f, y] = (0, r.useState)("normal"),
            [w, j] = (0, r.useState)(!1),
            v = "https://datatrooops-ai-chatbot.onrender.com",
            N = (0, r.useRef)(null),
            S = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            0 === s.length &&
              setTimeout(() => {
                g(!0),
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
                      g(!1);
                  }, 1500);
              }, 1e3);
          }, [s.length]),
            (0, r.useEffect)(() => {
              k();
            }, [s]),
            (0, r.useEffect)(() => {
              C();
            }, []);
          let C = async () => {
              try {
                let e = await fetch("".concat(v, "/status"));
                if (e.ok) {
                  let t = await e.json();
                  p(t.knowledge_loaded);
                } else p(!1);
              } catch (e) {
                console.error("Backend connection failed:", e), p(!1);
              }
            },
            k = () => {
              var e;
              null === (e = N.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth" });
            },
            E = () => {
              t(!e),
                e ||
                  setTimeout(() => {
                    var e;
                    null === (e = S.current) || void 0 === e || e.focus();
                  }, 100);
            },
            I = async (e) => {
              try {
                j(!0);
                let t = await fetch("".concat(v, "/chat"), {
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
                j(!1);
              }
            },
            A = async function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : x;
              if (!e.trim() || w) return;
              let t = { id: Date.now(), text: e, sender: "user" };
              m((e) => [...e, t]), u(""), g(!0);
              let s = await I(e);
              setTimeout(() => {
                let e = {
                  id: Date.now(),
                  text: s.response,
                  sender: "bot",
                  options: s.options,
                };
                m((t) => [...t, e]), y(s.state || "normal"), g(!1);
              }, 1e3);
            },
            T = (e) => {
              A(e);
            };
          return (0, a.jsxs)("div", {
            className: "fixed bottom-4 right-4 z-50 flex flex-col items-end",
            children: [
              !e &&
                (0, a.jsx)("button", {
                  onClick: E,
                  className:
                    "flex items-center justify-center w-16 h-16 rounded-full text-white ".concat(
                      e
                        ? "bg-white-500"
                        : h
                          ? "bg-white border-t"
                          : "bg-gray-100",
                      " shadow-lg transition-all duration-300 hover:scale-110",
                    ),
                  "aria-label": "Open chat",
                  children: (0, a.jsx)(d.default, {
                    src: c,
                    alt: "DataTroops Logo",
                    width: 48,
                    height: 48,
                  }),
                }),
              e &&
                (0, a.jsxs)("div", {
                  className:
                    "bg-white rounded-lg shadow-xl w-80 sm:w-[24vw] mb-2 flex flex-col h-[60vh] sm:h-[70vh] border border-gray-200 overflow-hidden",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "bg-purple-600 p-3 border-b flex items-center justify-between",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "w-8 h-8 ".concat(
                                "bg-white-600",
                                " rounded-full flex items-center justify-center mr-2",
                              ),
                              children: (0, a.jsx)(d.default, {
                                unoptimized: !0,
                                src: l.Z,
                                alt: "DataTroops Logo",
                                width: 40,
                                height: 40,
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("div", {
                                  className: "text-white font-semibold",
                                  children: "DataTroops AI Assistant",
                                }),
                                (0, a.jsx)("div", {
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
                        (0, a.jsx)("div", {
                          className: "flex items-center",
                          children: (0, a.jsx)("button", {
                            onClick: E,
                            className: "text-white",
                            "aria-label": "Close chat",
                            children: (0, a.jsx)(i.Z, { size: 24 }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "px-4 py-1 text-xs ".concat(
                        "bg-green-50 text-green-600",
                      ),
                      children: h
                        ? "waiting_email" === f
                          ? "Waiting for email address..."
                          : "waiting_phone" === f
                            ? "Waiting for phone number..."
                            : "We're online ..."
                        : "We're Online",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex-1 p-4 overflow-y-auto bg-gray-50",
                      children: [
                        s.map((e) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className: "w-fit max-w-[80%] mb-4 ".concat(
                                "user" === e.sender ? "ml-auto" : "mr-auto",
                              ),
                              children: [
                                (0, a.jsx)("div", {
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
                                  (0, a.jsx)("div", {
                                    className: "mt-2 flex flex-wrap gap-2",
                                    children: e.options.map((e) =>
                                      (0, a.jsx)(
                                        "button",
                                        {
                                          onClick: () => T(e.text),
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
                        b &&
                          (0, a.jsx)("div", {
                            className: "max-w-[80%] mr-auto",
                            children: (0, a.jsx)("div", {
                              className:
                                "bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none inline-block",
                              children: (0, a.jsxs)("div", {
                                className: "flex space-x-1",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "0ms" },
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "200ms" },
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-2 h-2 bg-gray-500 rounded-full animate-bounce",
                                    style: { animationDelay: "400ms" },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        (0, a.jsx)("div", { ref: N }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "border-t p-2 bg-white border-gray-200",
                      children: (0, a.jsxs)("div", {
                        className:
                          "flex items-center rounded-l-md bg-gray-100 px-3 py-2",
                        children: [
                          (0, a.jsx)("button", {
                            className: "text-gray-400 mr-2",
                          }),
                          (0, a.jsx)("input", {
                            ref: S,
                            type: "text",
                            value: x,
                            onChange: (e) => {
                              u(e.target.value);
                            },
                            onKeyPress: (e) => {
                              "Enter" !== e.key || w || A();
                            },
                            placeholder:
                              "waiting_email" === f
                                ? "Enter your email address..."
                                : "waiting_phone" === f
                                  ? "Enter your phone number..."
                                  : "Type your message",
                            className:
                              "flex-1 bg-transparent outline-none text-gray-700",
                            disabled: w,
                          }),
                          (0, a.jsx)("button", {
                            onClick: () => A(),
                            disabled: !x.trim() || w,
                            className: "ml-2 ".concat(
                              !x.trim() || w
                                ? "text-gray-300"
                                : "text-purple-600",
                            ),
                            "aria-label": "Send message",
                            children: w
                              ? (0, a.jsx)(n.Z, {
                                  size: 20,
                                  className: "animate-spin",
                                })
                              : (0, a.jsx)(o.Z, { size: 20 }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "bg-purple-600 text-s text-white-600 text-center py-2 border-t",
                      children: (0, a.jsxs)("p", {
                        className: "text-white-700 mt-1",
                        children: [
                          "Powered by",
                          " ",
                          (0, a.jsx)("span", {
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
    e.O(0, [676, 958, 413, 950, 738, 802, 971, 23, 744], function () {
      return e((e.s = 93977));
    }),
      (_N_E = e.O());
  },
]);
