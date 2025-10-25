(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    37394: function (e, t, s) {
      "use strict";
      var a,
        r,
        l,
        n = s(4410);
      function i() {
        return (i = Object.assign
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
        return n.createElement(
          "svg",
          i(
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
          a || (a = n.createElement("style", null, ".st0{fill:#ffba08}")),
          r ||
            (r = n.createElement("path", {
              d: "M1320.4 686.1c-52.6 10.5-105.3 10.5-217.5 70.5C989 817.3 943.1 896 983.1 984.9c41.4 91.9 122.4 110.2 248 55.9 163.6-70.7 342.3-41.2 464.7 76.6 142.8 137.5 165 361.4 53.2 535.8-104.9 163.6-325 219.3-528.5 133.9-115.2-48.4-189.9-31.7-233.4 52.1-44 84.8-8 174.2 97.7 229.3 143.8 75 298.1 94.8 455.4 61.9 71.4-14.9 108.6 4.8 140.2 66.7 48.8 95.7 103 188.8 157.6 281.4 57.6 97.8 144.2 126.5 226.4 78.8 78.4-45.6 98.9-130.3 47.8-227.1-53.5-101.3-109.8-201.4-170.8-298.3-33.1-52.5-30.9-86.2 10.4-136.2 247-299.7 246.4-660.1-1.9-959.7-42.6-51.4-38.9-85.3-7.3-136.4 62.1-100.3 120.4-203.2 175-307.8 47.2-90.5 24.8-167.7-54.5-216.5-73.8-45.4-158.9-23.5-213.9 62-43.1 67-82.3 137-116.7 208.8-80.5 192.6-148.9 171.5-227.9 155.7-5-3.6-110.5-31.5-184.2-15.7",
              className: "st0",
            })),
          l ||
            (l = n.createElement("path", {
              d: "M540.8 1571.7c-93.7 0-187.5 2.1-281.1-.6-99-2.8-165-62.9-168.7-147.8-3.8-89.6 63.1-160.8 165-162.6 190.8-3.4 381.8-3.3 572.6.4 98 1.9 161.4 67 163 153.4 1.7 91.8-62.7 151.6-169.7 157.4-3.5.2-6.9.1-10.4.1H540.8zM2743.5 1429.4c-5.9 102.4-100.5 186.7-203.7 181.6-105.2-5.2-187.6-95.7-183.7-201.7 4.1-110.8 98.1-194.6 209-186.2 104.1 7.8 184.5 100.8 178.4 206.3M1602.4 1414.2c.8 103-87.4 193.9-190.4 196.4-110.6 2.6-199.1-85.2-198.4-196.8.6-105.9 86.9-190.5 193.9-190.2 105.9.3 194.1 86.5 194.9 190.6M834.7 2601.8c-101-1.1-191.3-91.8-192.3-193-.9-103.9 84.9-190.2 191-192.1 110.9-2 200.7 87.3 197.2 196-3.2 103.6-92.9 190.2-195.9 189.1M1030.3 426.7c-.8 105.8-84.8 188.5-192.6 189.6-110.2 1.1-196.9-87.7-193.5-198.3 3.3-105.3 90.5-187.2 197-185 105.2 2.1 189.9 88.9 189.1 193.7",
              className: "st0",
            })),
        );
      };
    },
    60574: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 53054, 23)),
        Promise.resolve().then(s.t.bind(s, 26200, 23)),
        Promise.resolve().then(s.t.bind(s, 72964, 23)),
        Promise.resolve().then(s.t.bind(s, 21748, 23)),
        Promise.resolve().then(s.t.bind(s, 35448, 23)),
        Promise.resolve().then(s.t.bind(s, 98855, 23)),
        Promise.resolve().then(s.t.bind(s, 73955, 23)),
        Promise.resolve().then(s.bind(s, 50922)),
        Promise.resolve().then(s.bind(s, 16733)),
        Promise.resolve().then(s.bind(s, 61485)),
        Promise.resolve().then(s.bind(s, 55214));
    },
    78030: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = s(2265);
      let r = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, s) =>
            s ? s.toUpperCase() : t.toLowerCase(),
          ),
        n = (e) => {
          let t = l(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        i = function () {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          return t
            .filter((e, t, s) => !!e && "" !== e.trim() && s.indexOf(e) === t)
            .join(" ")
            .trim();
        },
        o = (e) => {
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
      let d = (0, a.forwardRef)((e, t) => {
          let {
            color: s = "currentColor",
            size: r = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: n,
            className: d = "",
            children: h,
            iconNode: u,
            ...x
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: t,
              ...c,
              width: r,
              height: r,
              stroke: s,
              strokeWidth: n ? (24 * Number(l)) / Number(r) : l,
              className: i("lucide", d),
              ...(!h && !o(x) && { "aria-hidden": "true" }),
              ...x,
            },
            [
              ...u.map((e) => {
                let [t, s] = e;
                return (0, a.createElement)(t, s);
              }),
              ...(Array.isArray(h) ? h : [h]),
            ],
          );
        }),
        h = (e, t) => {
          let s = (0, a.forwardRef)((s, l) => {
            let { className: o, ...c } = s;
            return (0, a.createElement)(d, {
              ref: l,
              iconNode: t,
              className: i("lucide-".concat(r(n(e))), "lucide-".concat(e), o),
              ...c,
            });
          });
          return (s.displayName = n(e)), s;
        };
    },
    37830: function (e, t) {
      "use strict";
      var s = Symbol.for("react.element"),
        a =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        r = Object.assign,
        l = {};
      function n(e, t, s) {
        (this.props = e),
          (this.context = t),
          (this.refs = l),
          (this.updater = s || a);
      }
      function i() {}
      function o(e, t, s) {
        (this.props = e),
          (this.context = t),
          (this.refs = l),
          (this.updater = s || a);
      }
      (n.prototype.isReactComponent = {}),
        (n.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (n.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (i.prototype = n.prototype);
      var c = (o.prototype = new i());
      (c.constructor = o), r(c, n.prototype), (c.isPureReactComponent = !0);
      var d = Object.prototype.hasOwnProperty,
        h = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, a) {
        var r,
          l = {},
          n = null,
          i = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (i = t.ref),
          void 0 !== t.key && (n = "" + t.key),
          t))
            d.call(t, r) && !h.hasOwnProperty(r) && (l[r] = t[r]);
        var o = arguments.length - 2;
        if (1 === o) l.children = a;
        else if (1 < o) {
          for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
          l.children = c;
        }
        if (e && e.defaultProps)
          for (r in (o = e.defaultProps)) void 0 === l[r] && (l[r] = o[r]);
        return { $$typeof: s, type: e, key: n, ref: i, props: l, _owner: null };
      };
    },
    4410: function (e, t, s) {
      "use strict";
      e.exports = s(37830);
    },
    12098: function (e, t, s) {
      "use strict";
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
    50922: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return i;
        },
      });
      var a = s(57437),
        r = s(2265),
        l = s(45079),
        n = s(6920);
      function i() {
        let [e, t] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(""),
          [o, c] = (0, r.useState)(""),
          [d, h] = (0, r.useState)(""),
          [u, x] = (0, r.useState)(null);
        return (0, a.jsx)("section", {
          className:
            "w-full bg-gradient-to-r from-[#10002B] to-[#240046] py-8 md:py-12 lg:py-16 px-4",
          children: (0, a.jsxs)("div", {
            className: "max-w-6xl w-full mx-auto",
            children: [
              (0, a.jsxs)("div", {
                className: "text-center mb-12",
                children: [
                  (0, a.jsx)("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-4",
                    children: "Get in Touch",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "w-24 h-1 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mx-auto rounded-full",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                  (0, a.jsxs)("div", {
                    className: "space-y-8",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "bg-gradient-to-br from-[#23235B]/80 to-[#7B2CBF]/60 rounded-2xl p-8 border border-white/10 backdrop-blur-md",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-2xl font-bold text-white mb-6",
                            children: "Contact Information",
                          }),
                          (0, a.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-start space-x-4",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] flex items-center justify-center flex-shrink-0",
                                    children: (0, a.jsx)(n.G, {
                                      icon: l.FGq,
                                      className: "text-white text-xl",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", {
                                        className:
                                          "text-white font-semibold mb-1",
                                        children: "Our Location",
                                      }),
                                      (0, a.jsxs)("a", {
                                        href: "https://www.google.com/maps?q=DataTroops+LLP+E-257+Sector-74+Phase-8B+Industrial+Area+Mohali+Punjab+140308",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-300 ",
                                        children: [
                                          "DataTroops LLP E-257, ",
                                          (0, a.jsx)("br", {}),
                                          "4th Floor, Sector-74, ",
                                          (0, a.jsx)("br", {}),
                                          "Phase-8B Industrial Area, ",
                                          (0, a.jsx)("br", {}),
                                          "Sahibzada Ajit Singh Nagar ",
                                          (0, a.jsx)("br", {}),
                                          "(Mohali Punjab 140308)",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-start space-x-4",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] flex items-center justify-center flex-shrink-0",
                                    children: (0, a.jsx)(n.G, {
                                      icon: l.j1w,
                                      className: "text-white text-xl",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", {
                                        className:
                                          "text-white font-semibold mb-1",
                                        children: "Phone Numbers",
                                      }),
                                      (0, a.jsx)("a", {
                                        href: "tel:+917837003009",
                                        className: "text-gray-300 ",
                                        children:
                                          "Main Office: +91 783 700 3009",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-start space-x-4",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] flex items-center justify-center flex-shrink-0",
                                    children: (0, a.jsx)(n.G, {
                                      icon: l.FU$,
                                      className: "text-white text-xl",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", {
                                        className:
                                          "text-white font-semibold mb-1",
                                        children: "Email Address",
                                      }),
                                      (0, a.jsx)("a", {
                                        href: "mailto:info@datatroops.io",
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
                      (0, a.jsxs)("div", {
                        className:
                          "bg-gradient-to-br from-[#23235B]/80 to-[#7B2CBF]/60 rounded-2xl p-8 border border-white/10 backdrop-blur-md",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-2xl font-bold text-white mb-4",
                            children: "Why Choose Us?",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-gray-300",
                            children:
                              "We're committed to providing exceptional service and support. Our team is always ready to help you with any questions or concerns you may have.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "bg-gradient-to-br from-[#23235B]/80 to-[#7B2CBF]/60 rounded-2xl p-8 border border-white/10 backdrop-blur-md",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-2xl font-bold text-white mb-6",
                        children: "Send us a Message",
                      }),
                      (0, a.jsxs)("form", {
                        onSubmit: async (e) => {
                          e.preventDefault(), t(!1), x(null);
                          try {
                            let e = await fetch(
                              "https://formsubmit.co/ajax/info@datatroops.io",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Accept: "application/json",
                                },
                                body: JSON.stringify({
                                  name: s,
                                  email: o,
                                  message: d,
                                }),
                              },
                            );
                            if (e.ok)
                              t(!0),
                                i(""),
                                c(""),
                                h(""),
                                setTimeout(() => t(!1), 3e3);
                            else {
                              let t = await e.json();
                              x(
                                t.message ||
                                  "Something went wrong. Please try again.",
                              );
                            }
                          } catch (e) {
                            x(
                              "Failed to send message. Please try later. ".concat(
                                e,
                              ),
                            );
                          }
                        },
                        className: "space-y-6",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("label", {
                                className: "block text-white font-medium mb-2",
                                children: "Full Name*",
                              }),
                              (0, a.jsx)("input", {
                                type: "text",
                                required: !0,
                                value: s,
                                onChange: (e) => i(e.target.value),
                                className:
                                  "w-full px-4 py-3 rounded-lg bg-[#18183a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B2CBF] transition-all duration-300",
                                placeholder: "Enter your full name",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("label", {
                                className: "block text-white font-medium mb-2",
                                children: "Email Address*",
                              }),
                              (0, a.jsx)("input", {
                                type: "email",
                                required: !0,
                                value: o,
                                onChange: (e) => c(e.target.value),
                                className:
                                  "w-full px-4 py-3 rounded-lg bg-[#18183a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B2CBF] transition-all duration-300",
                                placeholder: "Enter your email address",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("label", {
                                className: "block text-white font-medium mb-2",
                                children: "Your Message*",
                              }),
                              (0, a.jsx)("textarea", {
                                required: !0,
                                rows: 5,
                                value: d,
                                onChange: (e) => h(e.target.value),
                                className:
                                  "w-full px-4 py-3 rounded-lg bg-[#18183a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B2CBF] transition-all duration-300 resize-none",
                                placeholder: "Type your message",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("button", {
                            type: "submit",
                            className:
                              "w-full py-4 text-lg rounded-lg bg-gradient-to-r from-[#5A189A] to-[#7B2CBF] text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2",
                            children: [
                              (0, a.jsx)("span", {
                                children: e ? "Message Sent!" : "Send Message",
                              }),
                              (0, a.jsx)(n.G, {
                                icon: l.XCy,
                                className: "text-white",
                              }),
                            ],
                          }),
                          u &&
                            (0, a.jsx)("p", {
                              className: "text-red-400 text-center mt-2",
                              children: u,
                            }),
                          e &&
                            (0, a.jsx)("p", {
                              className: "text-green-400 text-center mt-2",
                              children: "Your message has been sent!",
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    16733: function (e, t, s) {
      "use strict";
      var a = s(57437),
        r = s(30568),
        l = s(45079),
        n = s(6920);
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
                              children: (0, a.jsx)(n.G, {
                                icon: r.mdU,
                                className: "w-6 h-6",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.linkedin.com/company/datatroops-ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(n.G, {
                                icon: r.D9H,
                                className: "w-6 h-6",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.instagram.com/datatroops.ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(n.G, {
                                icon: r.Zzi,
                                className: "w-6 h-6",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.threads.com/@datatroops.ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(n.G, {
                                icon: r.LW1,
                                className: "w-6 h-6",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://www.youtube.com/@Datatroops_ai",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: (0, a.jsx)(n.G, {
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
                                href: "/solutions",
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
                                (0, a.jsx)(n.G, {
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
                                (0, a.jsx)(n.G, {
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
                                (0, a.jsx)(n.G, {
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
      "use strict";
      s.d(t, {
        default: function () {
          return u;
        },
      });
      var a = s(57437),
        r = s(2265),
        l = s(96164),
        n = s(87138),
        i = s(12098);
      let o = (e) =>
        (0, a.jsx)("div", {
          className: (0, l.m6)(
            "size-[200px] border border-gray-200/30 rounded-full",
            e.className,
          ),
        });
      var c = s(37394);
      let d = [
          { name: "Solutions", href: "/solutions" },
          { name: "Technologies", href: "/technologies" },
          { name: "About Us", href: "/about-us" },
        ],
        h = [
          {
            buttonVariant: "tertiary",
            name: "Contact Us",
            href: "/contact-us",
          },
        ];
      var u = () => {
        let [e, t] = (0, r.useState)(!1),
          [s, u] = (0, r.useState)(!0),
          [x, m] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              let e = window.scrollY;
              e > x ? u(!1) : u(!0), m(e);
            };
            return (
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, [x]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: "relative h-18 lg:h-20",
                children: (0, a.jsx)("header", {
                  className: (0, l.m6)(
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
                              children: (0, a.jsx)(n.default, {
                                href: "/",
                                "aria-label": "Go to home page",
                                legacyBehavior: !0,
                                passHref: !0,
                                children: (0, a.jsx)("a", {
                                  children: (0, a.jsx)(c.Z, {
                                    className: "h-full w-full cursor-pointer",
                                  }),
                                }),
                              }),
                            }),
                            (0, a.jsx)(n.default, {
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
                            children: d.map((e) => {
                              let { name: t, href: s } = e;
                              return (0, a.jsx)(
                                n.default,
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
                          children: h.map((e) => {
                            let { buttonVariant: t, name: s, href: r } = e;
                            return (0, a.jsx)(
                              n.default,
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
                                  className: (0, l.m6)(
                                    "w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                                    e && "translate-y-0 rotate-45",
                                  ),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                children: (0, a.jsx)("div", {
                                  className: (0, l.m6)(
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
                      children: (0, a.jsx)(o, {}),
                    }),
                    (0, a.jsx)("div", {
                      className: "absolute-center isolate -z-10",
                      children: (0, a.jsx)(o, { className: "size-[350px]" }),
                    }),
                    (0, a.jsx)("div", {
                      className: "absolute-center isolate -z-10",
                      children: (0, a.jsx)(o, { className: "size-[500px]" }),
                    }),
                    (0, a.jsx)("div", {
                      className: "absolute-center isolate -z-10",
                      children: (0, a.jsx)(o, { className: "size-[650px]" }),
                    }),
                    (0, a.jsx)("div", {
                      className: "absolute-center isolate -z-10",
                      children: (0, a.jsx)(o, { className: "size-[800px]" }),
                    }),
                    (0, a.jsx)("div", {
                      className: "container h-full",
                      children: (0, a.jsxs)("nav", {
                        className:
                          "flex flex-col items-center gap-4 py-8 h-full justify-center",
                        children: [
                          d.map((e) => {
                            let { name: t, href: s } = e;
                            return (0, a.jsx)(
                              n.default,
                              {
                                href: s,
                                className:
                                  "text-gray-400 uppercase tracking-wildest font-bold text-s h-10",
                                children: t,
                              },
                              t,
                            );
                          }),
                          h.map((e) => {
                            let { buttonVariant: t, name: s, href: r } = e;
                            return (0, a.jsx)(
                              n.default,
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
    },
    55214: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return u;
        },
      });
      var a = s(57437),
        r = s(2265),
        l = s(78030);
      let n = (0, l.Z)("x", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]),
        i = (0, l.Z)("refresh-cw", [
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
        ]),
        o = (0, l.Z)("send", [
          [
            "path",
            {
              d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
              key: "1ffxy3",
            },
          ],
          ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
        ]);
      var c = s(53833),
        d = {
          src: "/_next/static/media/chatbot-avatar.75f82f45.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = s(66648),
        u = () => {
          let [e, t] = (0, r.useState)(!1),
            [s, l] = (0, r.useState)([]),
            [u, x] = (0, r.useState)(""),
            [m, f] = (0, r.useState)(!0),
            [p, b] = (0, r.useState)(!1),
            [g, y] = (0, r.useState)("normal"),
            [v, j] = (0, r.useState)(!1),
            w = "https://datatrooops-ai-chatbot.onrender.com",
            N = (0, r.useRef)(null),
            _ = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            0 === s.length &&
              setTimeout(() => {
                b(!0),
                  setTimeout(() => {
                    l([
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
                      b(!1);
                  }, 1500);
              }, 1e3);
          }, [s.length]),
            (0, r.useEffect)(() => {
              S();
            }, [s]),
            (0, r.useEffect)(() => {
              k();
            }, []);
          let k = async () => {
              try {
                let e = await fetch("".concat(w, "/status"));
                if (e.ok) {
                  let t = await e.json();
                  f(t.knowledge_loaded);
                } else f(!1);
              } catch (e) {
                console.error("Backend connection failed:", e), f(!1);
              }
            },
            S = () => {
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
                    null === (e = _.current) || void 0 === e || e.focus();
                  }, 100);
            },
            A = async (e) => {
              try {
                j(!0);
                let t = await fetch("".concat(w, "/chat"), {
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
            B = async function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : u;
              if (!e.trim() || v) return;
              let t = { id: Date.now(), text: e, sender: "user" };
              l((e) => [...e, t]), x(""), b(!0);
              let s = await A(e);
              setTimeout(() => {
                let e = {
                  id: Date.now(),
                  text: s.response,
                  sender: "bot",
                  options: s.options,
                };
                l((t) => [...t, e]), y(s.state || "normal"), b(!1);
              }, 1e3);
            },
            F = (e) => {
              B(e);
            };
          return (0, a.jsxs)("div", {
            className: "fixed bottom-4 right-4 z-50 flex flex-col items-end",
            children: [
              !e &&
                (0, a.jsx)("button", {
                  onClick: C,
                  className:
                    "flex items-center justify-center w-16 h-16 rounded-full text-white ".concat(
                      e
                        ? "bg-white-500"
                        : m
                          ? "bg-white border-t"
                          : "bg-gray-100",
                      " shadow-lg transition-all duration-300 hover:scale-110",
                    ),
                  "aria-label": "Open chat",
                  children: (0, a.jsx)(h.default, {
                    src: d,
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
                              children: (0, a.jsx)(h.default, {
                                unoptimized: !0,
                                src: c.Z,
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
                            onClick: C,
                            className: "text-white",
                            "aria-label": "Close chat",
                            children: (0, a.jsx)(n, { size: 24 }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "px-4 py-1 text-xs ".concat(
                        "bg-green-50 text-green-600",
                      ),
                      children: m
                        ? "waiting_email" === g
                          ? "Waiting for email address..."
                          : "waiting_phone" === g
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
                                          onClick: () => F(e.text),
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
                        p &&
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
                            ref: _,
                            type: "text",
                            value: u,
                            onChange: (e) => {
                              x(e.target.value);
                            },
                            onKeyPress: (e) => {
                              "Enter" !== e.key || v || B();
                            },
                            placeholder:
                              "waiting_email" === g
                                ? "Enter your email address..."
                                : "waiting_phone" === g
                                  ? "Enter your phone number..."
                                  : "Type your message",
                            className:
                              "flex-1 bg-transparent outline-none text-gray-700",
                            disabled: v,
                          }),
                          (0, a.jsx)("button", {
                            onClick: () => B(),
                            disabled: !u.trim() || v,
                            className: "ml-2 ".concat(
                              !u.trim() || v
                                ? "text-gray-300"
                                : "text-purple-600",
                            ),
                            "aria-label": "Send message",
                            children: v
                              ? (0, a.jsx)(i, {
                                  size: 20,
                                  className: "animate-spin",
                                })
                              : (0, a.jsx)(o, { size: 20 }),
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
    53054: function () {},
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
    26200: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__barlow_fe6c3b', '__barlow_Fallback_fe6c3b'",
          fontWeight: 600,
          fontStyle: "normal",
        },
        className: "__className_fe6c3b",
        variable: "__variable_fe6c3b",
      };
    },
    72964: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__barlowSemiCondensed_d86c34', '__barlowSemiCondensed_Fallback_d86c34'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_d86c34",
        variable: "__variable_d86c34",
      };
    },
    21748: function (e) {
      e.exports = {
        style: { fontFamily: "'__inter_bce42f', '__inter_Fallback_bce42f'" },
        className: "__className_bce42f",
        variable: "__variable_bce42f",
      };
    },
    35448: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__khula_a0dc02', '__khula_Fallback_a0dc02'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_a0dc02",
      };
    },
    98855: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__soraFont_7a96f8', '__soraFont_Fallback_7a96f8'",
          fontStyle: "normal",
        },
        className: "__className_7a96f8",
        variable: "__variable_7a96f8",
      };
    },
    73955: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__spaceGroteskFont_374334', '__spaceGroteskFont_Fallback_374334'",
          fontStyle: "normal",
        },
        className: "__className_374334",
        variable: "__variable_374334",
      };
    },
    13027: function (e, t, s) {
      "use strict";
      s.d(t, {
        j: function () {
          return n;
        },
      });
      var a = s(44839);
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        l = a.W,
        n = (e, t) => (s) => {
          var a;
          if ((null == t ? void 0 : t.variants) == null)
            return l(
              e,
              null == s ? void 0 : s.class,
              null == s ? void 0 : s.className,
            );
          let { variants: n, defaultVariants: i } = t,
            o = Object.keys(n).map((e) => {
              let t = null == s ? void 0 : s[e],
                a = null == i ? void 0 : i[e];
              if (null === t) return null;
              let l = r(t) || r(a);
              return n[e][l];
            }),
            c =
              s &&
              Object.entries(s).reduce((e, t) => {
                let [s, a] = t;
                return void 0 === a || (e[s] = a), e;
              }, {});
          return l(
            e,
            o,
            null == t
              ? void 0
              : null === (a = t.compoundVariants) || void 0 === a
                ? void 0
                : a.reduce((e, t) => {
                    let { class: s, className: a, ...r } = t;
                    return Object.entries(r).every((e) => {
                      let [t, s] = e;
                      return Array.isArray(s)
                        ? s.includes({ ...i, ...c }[t])
                        : { ...i, ...c }[t] === s;
                    })
                      ? [...e, s, a]
                      : e;
                  }, []),
            null == s ? void 0 : s.class,
            null == s ? void 0 : s.className,
          );
        };
    },
    44839: function (e, t, s) {
      "use strict";
      function a() {
        for (var e, t, s = 0, a = ""; s < arguments.length; )
          (e = arguments[s++]) &&
            (t = (function e(t) {
              var s,
                a,
                r = "";
              if ("string" == typeof t || "number" == typeof t) r += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (s = 0; s < t.length; s++)
                    t[s] && (a = e(t[s])) && (r && (r += " "), (r += a));
                else for (s in t) t[s] && (r && (r += " "), (r += s));
              }
              return r;
            })(e)) &&
            (a && (a += " "), (a += t));
        return a;
      }
      s.d(t, {
        W: function () {
          return a;
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [141, 681, 2, 676, 958, 648, 920, 164, 138, 971, 23, 744],
      function () {
        return e((e.s = 60574));
      },
    ),
      (_N_E = e.O());
  },
]);
