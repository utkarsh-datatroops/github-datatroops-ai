(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [173],
  {
    8957: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 38143));
    },
    38143: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return ek;
          },
        });
      var a = r(57437),
        s = r(2265),
        l = r(44839),
        n = r(96164);
      function i() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, n.m6)((0, l.W)(t));
      }
      var o = (e) => {
          let {
            children: t,
            className: r,
            size: s = "lg",
            padding: l = "md",
          } = e;
          return (0, a.jsx)("div", {
            className: i(
              "w-full mx-auto",
              {
                sm: "max-w-3xl",
                md: "max-w-5xl",
                lg: "max-w-7xl",
                xl: "max-w-7xl",
                full: "max-w-full",
              }[s],
              {
                none: "",
                sm: "px-4 sm:px-6",
                md: "px-4 sm:px-6 lg:px-8",
                lg: "px-4 sm:px-6 lg:px-12",
                xl: "px-4 sm:px-8 lg:px-16",
              }[l],
              r,
            ),
            children: t,
          });
        },
        c = r(14950),
        d = (e) => {
          let {
            children: t,
            className: r,
            delay: s = 0.2,
            reverse: l,
            simple: n,
          } = e;
          return (0, a.jsx)(c.E.div, {
            className: i("w-full h-full", r),
            initial: { opacity: 0, y: l ? -20 : 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !1 },
            transition: {
              delay: s,
              duration: n ? 0.2 : 0.4,
              type: n ? "keyframes" : "spring",
              stiffness: n && 100,
            },
            children: t,
          });
        },
        u = (e) => {
          let { children: t } = e;
          return (0, a.jsx)("main", {
            id: "background",
            className: "flex-none min-h-scree -z-10",
            children: t,
          });
        },
        m = r(71976),
        h = r(87138);
      let x = (e) => {
        let { word: t, className: r, variant: s, duration: l = 1 } = e;
        return (0, a.jsx)(c.E.h1, {
          initial: "hidden",
          animate: "visible",
          transition: { duration: l },
          variants: s || {
            hidden: { filter: "blur(10px)", opacity: 0, y: -20 },
            visible: { filter: "blur(0px)", opacity: 1, y: 0 },
          },
          className: i(r, "text-center tracking-[-0.02em] drop-shadow-sm"),
          children:
            "string" == typeof t
              ? t.split("\n").map((e, r) =>
                  (0, a.jsxs)(
                    "span",
                    {
                      children: [
                        e,
                        r < t.split("\n").length - 1 &&
                          (0, a.jsx)("br", { className: "hidden md:block" }),
                      ],
                    },
                    r,
                  ),
                )
              : t,
        });
      };
      var p = r(71538);
      let g = (0, r(13027).j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:opacity-70 bt-primary",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "text-primary bg-primary/10 hover:bg-primary/30",
                tertiary: "text-foreground bg-[#232323] hover:brightness-125",
                subtle:
                  "border border-input bg-accent/20 hover:bg-white/10 hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                white: "bg-foreground text-background hover:opacity-70",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 px-3",
                lg: "h-10 px-8",
                xl: "h-12 px-10",
                icon: "h-8 w-8",
                iconlg: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        f = s.forwardRef((e, t) => {
          let {
              iconl: r = !0,
              iconr: s = !0,
              className: i,
              variant: o,
              size: c,
              asChild: d = !1,
              ...u
            } = e,
            m = d ? p.g7 : "button";
          return (
            console.log(r, s, "iconl, iconr"),
            (0, a.jsx)(m, {
              className: (function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                return (0, n.m6)((0, l.W)(t));
              })(g({ variant: o, size: c, className: i })),
              ref: t,
              ...u,
            })
          );
        });
      function v(e) {
        let { className: t, angle: r = 65 } = e;
        return (0, a.jsxs)("div", {
          className: i(
            "pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",
            t,
          ),
          style: { "--grid-angle": "".concat(r, "deg") },
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 [transform:rotateX(var(--grid-angle))]",
              children: (0, a.jsx)("div", {
                className: i(
                  "animate-grid",
                  "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
                  "[background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_0)]",
                ),
              }),
            }),
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%",
            }),
          ],
        });
      }
      f.displayName = "Button";
      let C = (e) => {
          let {
              className: t = "",
              quantity: r = 100,
              staticity: l = 50,
              ease: n = 50,
              size: i = 0.4,
              refresh: o = !1,
              color: c = "#ffffff",
              vx: d = 0,
              vy: u = 0,
            } = e,
            m = (0, s.useRef)(null),
            h = (0, s.useRef)(null),
            x = (0, s.useRef)(null),
            p = (0, s.useRef)([]),
            g = (function () {
              let [e, t] = (0, s.useState)({ x: 0, y: 0 });
              return (
                (0, s.useEffect)(() => {
                  let e = (e) => {
                    t({ x: e.clientX, y: e.clientY });
                  };
                  return (
                    window.addEventListener("mousemove", e),
                    () => {
                      window.removeEventListener("mousemove", e);
                    }
                  );
                }, []),
                e
              );
            })(),
            f = (0, s.useRef)({ x: 0, y: 0 }),
            v = (0, s.useRef)({ w: 0, h: 0 }),
            C = window.devicePixelRatio;
          (0, s.useEffect)(
            () => (
              m.current && (x.current = m.current.getContext("2d")),
              b(),
              L(),
              window.addEventListener("resize", b),
              () => {
                window.removeEventListener("resize", b);
              }
            ),
            [c],
          ),
            (0, s.useEffect)(() => {
              j();
            }, [g.x, g.y]),
            (0, s.useEffect)(() => {
              b();
            }, [o]);
          let b = () => {
              w(), Z();
            },
            j = () => {
              if (m.current) {
                let e = m.current.getBoundingClientRect(),
                  { w: t, h: r } = v.current,
                  a = g.x - e.left - t / 2,
                  s = g.y - e.top - r / 2;
                a < t / 2 &&
                  a > -t / 2 &&
                  s < r / 2 &&
                  s > -r / 2 &&
                  ((f.current.x = a), (f.current.y = s));
              }
            },
            w = () => {
              h.current &&
                m.current &&
                x.current &&
                ((p.current.length = 0),
                (v.current.w = h.current.offsetWidth),
                (v.current.h = h.current.offsetHeight),
                (m.current.width = v.current.w * C),
                (m.current.height = v.current.h * C),
                (m.current.style.width = "".concat(v.current.w, "px")),
                (m.current.style.height = "".concat(v.current.h, "px")),
                x.current.scale(C, C));
            },
            y = () => {
              let e = Math.floor(Math.random() * v.current.w);
              return {
                x: e,
                y: Math.floor(Math.random() * v.current.h),
                translateX: 0,
                translateY: 0,
                size: Math.floor(2 * Math.random()) + i,
                alpha: 0,
                targetAlpha: parseFloat((0.6 * Math.random() + 0.1).toFixed(1)),
                dx: (Math.random() - 0.5) * 0.1,
                dy: (Math.random() - 0.5) * 0.1,
                magnetism: 0.1 + 4 * Math.random(),
              };
            },
            N = (function (e) {
              3 === (e = e.replace("#", "")).length &&
                (e = e
                  .split("")
                  .map((e) => e + e)
                  .join(""));
              let t = parseInt(e, 16);
              return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
            })(c),
            H = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (x.current) {
                let {
                  x: r,
                  y: a,
                  translateX: s,
                  translateY: l,
                  size: n,
                  alpha: i,
                } = e;
                x.current.translate(s, l),
                  x.current.beginPath(),
                  x.current.arc(r, a, n, 0, 2 * Math.PI),
                  (x.current.fillStyle = "rgba("
                    .concat(N.join(", "), ", ")
                    .concat(i, ")")),
                  x.current.fill(),
                  x.current.setTransform(C, 0, 0, C, 0, 0),
                  t || p.current.push(e);
              }
            },
            M = () => {
              x.current && x.current.clearRect(0, 0, v.current.w, v.current.h);
            },
            Z = () => {
              M();
              for (let e = 0; e < r; e++) H(y());
            },
            V = (e, t, r, a, s) => {
              let l = ((e - t) * (s - a)) / (r - t) + a;
              return l > 0 ? l : 0;
            },
            L = () => {
              M(),
                p.current.forEach((e, t) => {
                  let r = parseFloat(
                    V(
                      [
                        e.x + e.translateX - e.size,
                        v.current.w - e.x - e.translateX - e.size,
                        e.y + e.translateY - e.size,
                        v.current.h - e.y - e.translateY - e.size,
                      ].reduce((e, t) => Math.min(e, t)),
                      0,
                      20,
                      0,
                      1,
                    ).toFixed(2),
                  );
                  r > 1
                    ? ((e.alpha += 0.02),
                      e.alpha > e.targetAlpha && (e.alpha = e.targetAlpha))
                    : (e.alpha = e.targetAlpha * r),
                    (e.x += e.dx + d),
                    (e.y += e.dy + u),
                    (e.translateX +=
                      (f.current.x / (l / e.magnetism) - e.translateX) / n),
                    (e.translateY +=
                      (f.current.y / (l / e.magnetism) - e.translateY) / n),
                    H(e, !0),
                    (e.x < -e.size ||
                      e.x > v.current.w + e.size ||
                      e.y < -e.size ||
                      e.y > v.current.h + e.size) &&
                      (p.current.splice(t, 1), H(y()));
                }),
                window.requestAnimationFrame(L);
            };
          return (0, a.jsx)("div", {
            className: t,
            ref: h,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: m, className: "size-full" }),
          });
        },
        b = (0, r(57818).default)(() => r.e(910).then(r.t.bind(r, 23910, 23)), {
          loadableGenerated: { webpack: () => [23910] },
          ssr: !1,
        });
      var j = () =>
          (0, a.jsxs)("div", {
            className:
              "relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center",
            children: [
              (0, a.jsxs)("div", {
                className: "absolute inset-0 z-0 pointer-events-none",
                children: [
                  (0, a.jsx)(v, {}),
                  (0, a.jsx)(C, {
                    refresh: !0,
                    ease: 80,
                    color: "#d4d4d8",
                    quantity: 50,
                    className: "absolute inset-0 w-full h-full",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "relative z-10 flex flex-col items-center text-center w-full max-w-5xl px-4 sm:px-6 md:px-8 lg:py-24 md:pt-16 sm:pt-0",
                children: [
                  (0, a.jsx)(d, {
                    delay: 0,
                    children: (0, a.jsx)(c.E.div, {
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.8 },
                      className: "text-center cursor-pointer",
                      children: (0, a.jsx)("a", {
                        href: "/contact-us",
                        children: (0, a.jsxs)("div", {
                          className:
                            "inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white mb-6",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative mr-2",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "w-2.5 h-2.5 rounded-full bg-primary/60 animate-ping",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "w-1.5 h-1.5 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("span", {
                              className:
                                "inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#8f80ff] via-[#9f92ff] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent",
                              children: [
                                "Generative AI Solutions",
                                " ",
                                (0, a.jsxs)("span", {
                                  className:
                                    "text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#a497ff] via-[#c6bdff] to-[#c7d2fe] text-gray-900 flex items-center justify-center",
                                  children: [
                                    "Explore",
                                    (0, a.jsx)(m.Z, {
                                      className:
                                        "w-3.5 h-3.5 ml-1 text-foreground/50",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, a.jsx)(c.E.div, {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 1, type: "spring", stiffness: 100 },
                    children: (0, a.jsx)(x, {
                      word: "Fuel Innovation with\nGenerative AI",
                      className:
                        "text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] mt-6 font-heading text-white",
                    }),
                  }),
                  (0, a.jsx)(d, {
                    delay: 0.1,
                    children: (0, a.jsxs)("p", {
                      className:
                        "text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto",
                      children: [
                        "Transform how you create, communicate, and operate using our cutting-edge Generative AI solutions.",
                        " ",
                        (0, a.jsx)("span", {
                          className: "hidden sm:inline",
                          children:
                            "From content automation to intelligent chat experiences, DataTroops enables you to harness AI for measurable business impact.",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(d, {
                    delay: 0.2,
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-center md:gap-x-6 mt-8",
                      children: [
                        (0, a.jsx)(f, {
                          asChild: !0,
                          size: "lg",
                          children: (0, a.jsx)(h.default, {
                            href: "/contact-us",
                            children: "Try a Demo",
                          }),
                        }),
                        (0, a.jsx)(f, {
                          asChild: !0,
                          size: "lg",
                          variant: "outline",
                          className: "hidden md:flex",
                          children: (0, a.jsx)(h.default, {
                            href: "#",
                            children: "See Use Cases",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(d, {
                    delay: 0.3,
                    children: (0, a.jsxs)("div", {
                      className:
                        "relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "relative rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black pb-[56.25%] h-0 overflow-hidden",
                          children: (0, a.jsx)(b, {
                            url: "http://youtube.com/watch?v=r6Da3VVms3c",
                            controls: !0,
                            width: "100%",
                            height: "100%",
                            playing: !1,
                            config: {},
                            className:
                              "absolute top-0 left-0 w-full h-full rounded-lg lg:rounded-[20px]",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        w = r(66648),
        y = (e) =>
          (0, a.jsxs)("svg", {
            ...e,
            width: "148",
            height: "48",
            viewBox: "0 0 148 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M87.5704 15.0003C84.5401 15.0003 81.5778 17.7445 81.2371 21.7096V15.3272H76.8852V34.5718H81.2904V25.2566C81.2904 22.6472 83.1399 18.9664 87.5704 18.9664V15.0003Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M133.778 31.4909V18.3061H136.33C139.733 18.3061 142.497 20.4326 142.497 24.7922C142.497 29.1516 139.733 31.4909 136.33 31.4909H133.778ZM129.419 34.5744H136.862C141.434 34.5744 147.069 31.5972 147.069 24.7922C147.069 18.0934 141.434 15.3289 136.862 15.3289H129.419V34.5744Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M112.738 25.005C112.738 21.4962 114.546 18.6253 117.523 18.6253C120.394 18.6253 121.989 21.4962 121.989 25.005C121.989 28.5139 120.394 31.3848 117.523 31.3848C114.546 31.3848 112.738 28.5139 112.738 25.005ZM108.272 25.2177C108.272 30.9595 111.249 35 115.928 35C119.33 35 121.35 32.7671 122.414 29.1519V34.5747H126.772V15.3291H122.414V20.4329C121.457 17.0304 119.437 15.0101 116.247 15.0101C111.462 15.0101 108.272 19.3696 108.272 25.2177Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M8.99841 35C3.57561 35 0.385742 30.6405 0.385742 25.2177C0.385742 19.5823 3.8946 15.0101 10.5933 15.0101C17.5047 15.0101 19.844 19.6886 19.9503 22.3468H14.9528C14.8465 20.8582 13.5705 18.6253 10.487 18.6253C7.1908 18.6253 5.06423 21.4962 5.06423 25.005C5.06423 28.5139 7.1908 31.3848 10.487 31.3848C13.4642 31.3848 14.7401 29.0456 15.2718 26.7063H10.487V24.7923H20.5271V34.5747H16.1224V28.4076C15.8035 30.6405 14.4212 35 8.99841 35Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M29.4579 34.9998C25.3111 34.9998 22.7592 32.2352 22.7592 26.7061V15.3289H27.225V26.7061C27.225 29.5769 28.6073 30.9592 30.9465 30.9592C35.5187 30.9592 37.2199 25.3238 37.2199 21.3896V15.3289H41.6857V34.5744H37.3262V27.4504C36.4756 31.3845 34.1364 34.9998 29.4579 34.9998Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M68.3722 15C64.5621 15 62.1585 18.6806 61.3739 22.0837C61.2398 17.5231 58.9971 15 55.4086 15C52.3083 15 49.432 17.7648 48.6849 22.1388V15.3274H44.3315V34.5734H48.7407V27.6738C48.7407 25.9633 49.4538 18.9438 53.8925 18.9438C56.7678 18.9438 57.0676 21.5374 57.0676 25.0827V34.5734H61.4748V27.6738C61.4748 25.9633 62.2174 18.9438 66.656 18.9438C69.529 18.9438 69.8257 21.5374 69.8257 25.0827V34.5734H74.2389V23.1895C74.2589 17.7282 72.3307 15 68.3722 15Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M97.0302 15C91.3222 15 87.4544 19.4757 87.4544 25C87.4544 31.0869 91.1328 34.9999 97.0302 34.9999C102.738 34.9999 106.675 30.5243 106.675 25C106.675 18.913 102.925 15 97.0302 15ZM97.0302 31.5933C93.7071 31.5933 91.5549 28.78 91.5549 25C91.5549 21.2199 93.7145 18.4066 97.0302 18.4066C100.345 18.4066 102.419 21.2199 102.419 25C102.419 28.78 100.343 31.5933 97.0302 31.5933Z",
                fill: "currentColor",
              }),
            ],
          }),
        N = (e) =>
          (0, a.jsx)("svg", {
            ...e,
            width: "135",
            height: "48",
            viewBox: "0 0 135 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              d: "M27.116 16.7003C22.2353 16.7003 18.4217 20.4054 18.4217 25.3654C18.4217 30.3254 22.1389 33.9988 27.116 33.9988C32.0931 33.9988 35.875 30.262 35.875 25.3337C35.875 20.4371 32.1577 16.7003 27.116 16.7003ZM27.1489 30.4242C24.3695 30.4242 22.3328 28.2656 22.3328 25.3666C22.3328 22.4348 24.3366 20.2774 27.116 20.2774C29.9283 20.2774 31.9638 22.4677 31.9638 25.3666C31.9638 28.2656 29.9283 30.4242 27.1489 30.4242ZM36.9409 20.47H39.3652V33.678H43.2435V17.0223H36.9409V20.47ZM8.66141 20.2761C10.6981 20.2761 12.314 21.5323 12.9275 23.4007H17.0326C16.2886 19.4066 12.9921 16.7003 8.69434 16.7003C3.8136 16.7003 0 20.4054 0 25.3666C0 30.3279 3.71726 34 8.69434 34C12.8958 34 16.2569 31.2938 17.0008 27.2667H12.9275C12.3457 29.1351 10.7298 30.4242 8.69314 30.4242C5.88079 30.4242 3.90994 28.2656 3.90994 25.3666C3.91117 22.4348 5.8503 20.2761 8.66141 20.2761ZM110.63 23.7556L107.786 23.3373C106.429 23.1446 105.459 22.6933 105.459 21.6299C105.459 20.47 106.72 19.8907 108.432 19.8907C110.307 19.8907 111.503 20.6957 111.762 22.0165H115.511C115.09 18.6663 112.504 16.7016 108.53 16.7016C104.425 16.7016 101.71 18.7956 101.71 21.7591C101.71 24.5934 103.488 26.2374 107.075 26.7521L109.919 27.1704C111.309 27.3631 112.085 27.9119 112.085 28.9424C112.085 30.2632 110.728 30.8108 108.853 30.8108C106.558 30.8108 105.265 29.8766 105.071 28.4595H101.257C101.614 31.7133 104.166 34 108.82 34C113.055 34 115.866 32.067 115.866 28.7485C115.866 25.7849 113.83 24.2385 110.63 23.7556ZM41.3044 10.161C39.8824 10.161 38.8155 11.1915 38.8155 12.6087C38.8155 14.0258 39.8812 15.0563 41.3044 15.0563C42.7264 15.0563 43.7936 14.0258 43.7936 12.6087C43.7936 11.1915 42.7264 10.161 41.3044 10.161ZM98.2196 22.725C98.2196 19.1175 96.0221 16.7016 91.368 16.7016C86.9726 16.7016 84.5163 18.9249 84.0311 22.3396H87.8775C88.0714 21.0189 89.1056 19.9237 91.3035 19.9237C93.2756 19.9237 94.245 20.7932 94.245 21.8567C94.245 23.2422 92.4667 23.5958 90.2692 23.8215C87.2959 24.1434 83.6115 25.1739 83.6115 29.04C83.6115 32.0365 85.842 33.9683 89.3974 33.9683C92.1765 33.9683 93.9217 32.8085 94.7951 30.9718C94.9245 32.6146 96.1526 33.678 97.866 33.678H100.128V30.2315H98.2207V22.725H98.2196ZM94.4059 26.9131C94.4059 29.1363 92.4667 30.7791 90.1069 30.7791C88.6522 30.7791 87.4241 30.1669 87.4241 28.879C87.4241 27.2362 89.3959 26.785 91.206 26.5923C92.9512 26.4313 93.9206 26.0447 94.4059 25.3032V26.9131ZM73.8184 16.7003C71.6524 16.7003 69.8426 17.6028 68.55 19.1163V10H64.6717V33.678H68.4851V31.4877C69.7777 33.0658 71.6209 34 73.8184 34C78.4721 34 81.9956 30.3279 81.9956 25.3666C81.9956 20.4054 78.4076 16.7003 73.8184 16.7003ZM73.2367 30.4242C70.4572 30.4242 68.4206 28.2656 68.4206 25.3666C68.4206 22.4677 70.4891 20.2774 73.2682 20.2774C76.0807 20.2774 78.0514 22.436 78.0514 25.3666C78.0514 28.2656 76.0159 30.4242 73.2367 30.4242ZM55.3954 16.7003C52.8746 16.7003 51.2257 17.7309 50.2564 19.1809V17.0223H46.4096V33.6768H50.2879V24.6252C50.2879 22.0799 51.9037 20.2761 54.2955 20.2761C56.526 20.2761 57.915 21.8543 57.915 24.1422V33.678H61.7932V23.8531C61.7947 19.6639 59.6299 16.7003 55.3954 16.7003ZM134.353 24.8191C134.353 20.0517 130.863 16.7016 126.176 16.7016C121.199 16.7016 117.546 20.4383 117.546 25.3666C117.546 30.5535 121.457 34 126.241 34C130.281 34 133.448 31.6157 134.256 28.2339H130.215C129.633 29.7156 128.211 30.5535 126.304 30.5535C123.815 30.5535 121.94 29.0071 121.521 26.3008H134.352V24.8191H134.353ZM121.747 23.53C122.362 21.2103 124.107 20.0835 126.111 20.0835C128.309 20.0835 129.99 21.3396 130.377 23.53H121.747Z",
              fill: "currentColor",
            }),
          }),
        H = (e) =>
          (0, a.jsxs)("svg", {
            ...e,
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 93 24",
            children: [
              (0, a.jsxs)("g", {
                "clip-path": "url(#logo-full_svg__a)",
                children: [
                  (0, a.jsx)("path", {
                    fill: "currentColor",
                    "fill-rule": "evenodd",
                    d: "M6 15.491v2.504l-6-6 1.251-1.251L6 15.49Zm2.504 2.504H6l6 6 1.251-1.251-4.747-4.749Zm14.24-4.747 1.253-1.253-12-12-1.25 1.256 4.747 4.747h-2.868L9.312 2.691 8.061 3.942l2.06 2.061h-1.44v9.314h9.314v-1.44l2.061 2.06 1.251-1.25-3.312-3.314v-2.87l4.749 4.745ZM6.626 5.374 5.37 6.627 6.714 7.97l1.252-1.252-1.34-1.344ZM17.282 16.03l-1.252 1.253 1.343 1.344 1.253-1.253-1.344-1.344ZM3.939 8.06 2.686 9.315 6 12.627v-2.506l-2.06-2.06ZM13.88 18h-2.506l3.313 3.314 1.253-1.253L13.88 18Z",
                    clipRule: "evenodd",
                  }),
                  (0, a.jsx)("path", {
                    fill: "currentColor",
                    d: "M90.987 17.98c-.808 0-1.44-.219-1.89-.659-.452-.44-.678-1.05-.678-1.825v-4.8h-1.45V8.899h1.458l.26-2.4h1.707v2.4h2.227v1.8h-2.227v4.538a.948.948 0 0 0 .256.667.883.883 0 0 0 .68.278h1.29v1.799h-1.633ZM82.268 18.15c-1.077 0-1.944-.257-2.6-.77a3.45 3.45 0 0 1-1.259-2.049h2.143c.093.312.301.577.582.742.344.199.737.296 1.134.28 1.143 0 1.717-.32 1.717-.937 0-.308-.18-.544-.539-.706a6.034 6.034 0 0 0-1.302-.389 15.466 15.466 0 0 1-1.538-.376 2.669 2.669 0 0 1-1.314-.875c-.356-.427-.537-.987-.537-1.681a2.376 2.376 0 0 1 .905-1.903c.606-.505 1.446-.758 2.52-.757 1.074 0 1.92.24 2.56.719a3.222 3.222 0 0 1 1.215 1.94h-2.146c-.228-.571-.77-.857-1.624-.857-.917 0-1.373.287-1.373.86a.736.736 0 0 0 .386.64c.293.18.62.296.96.345.426.072.847.17 1.26.291.43.123.85.273 1.26.451.399.181.737.475.971.845.272.435.407.942.389 1.455a2.4 2.4 0 0 1-.96 1.974c-.639.504-1.576.757-2.81.758ZM75.88 9.636c-.66-.593-1.586-.89-2.773-.89-.95 0-1.745.255-2.386.766a3.586 3.586 0 0 0-1.28 1.979h2.026c.103-.297.3-.553.56-.728a1.786 1.786 0 0 1 1.072-.303 1.92 1.92 0 0 1 1.317.427 1.514 1.514 0 0 1 .48 1.197v.436h-2.31c-1.071 0-1.91.266-2.514.8a2.59 2.59 0 0 0-.907 2.019 2.663 2.663 0 0 0 .844 2.033c.564.534 1.31.8 2.24.8a3.42 3.42 0 0 0 1.658-.385c.411-.2.759-.51 1.005-.896h.083l.16 1.12h1.715v-5.92c.001-1.04-.329-1.858-.99-2.455Zm-.975 4.852a1.834 1.834 0 0 1-.6 1.44c-.397.353-.939.53-1.627.53-.5 0-.885-.114-1.149-.34a1.081 1.081 0 0 1-.4-.866c0-.8.523-1.197 1.55-1.197h2.226v.433ZM64.021 18.17c-1.3 0-2.338-.418-3.117-1.252-.776-.834-1.168-1.987-1.168-3.462 0-1.476.39-2.624 1.164-3.46.774-.835 1.816-1.25 3.121-1.25 1.06 0 1.94.282 2.637.849a4.017 4.017 0 0 1 1.389 2.147h-1.965a2.205 2.205 0 0 0-2.06-1.197 2.081 2.081 0 0 0-1.683.76c-.426.509-.64 1.226-.64 2.15 0 .925.214 1.643.64 2.152a2.08 2.08 0 0 0 1.682.764 2.21 2.21 0 0 0 2.06-1.2h1.966a4.025 4.025 0 0 1-1.39 2.15c-.694.565-1.573.848-2.636.848ZM52.43 21.432l1.371-3.43-3.683-9.082h2.143l2.486 6.427h.082l2.49-6.427h2.142l-4.975 12.512H52.43ZM48.267 9.636c-.66-.594-1.585-.89-2.774-.89-.949 0-1.744.255-2.386.766a3.57 3.57 0 0 0-1.27 1.979h2.024c.103-.297.299-.553.56-.728a1.794 1.794 0 0 1 1.072-.303c.556 0 .996.143 1.316.427a1.508 1.508 0 0 1 .48 1.197v.436h-2.32c-1.066 0-1.904.266-2.513.8a2.586 2.586 0 0 0-.909 2.019 2.663 2.663 0 0 0 .845 2.025c.563.534 1.31.8 2.24.8a3.412 3.412 0 0 0 1.656-.385c.412-.2.76-.51 1.006-.896h.082l.17 1.12h1.712v-5.92c0-1.035-.33-1.85-.99-2.447Zm-.978 4.852a1.834 1.834 0 0 1-.6 1.44c-.396.353-.94.53-1.628.53-.5 0-.885-.114-1.15-.34a1.086 1.086 0 0 1-.4-.866c.007-.796.523-1.195 1.55-1.197h2.228v.433ZM37.152 13.456c.306-.081.601-.197.88-.346.326-.178.631-.393.909-.64.336-.31.595-.693.757-1.12.194-.502.29-1.036.283-1.574 0-1.143-.365-2.058-1.094-2.746-.73-.688-1.68-1.03-2.848-1.027h-4.972v12h2.143v-4.454h1.625L37.923 18h2.4l-3.17-4.545ZM33.21 11.65v-3.76h2.654c.608 0 1.088.16 1.44.494.352.335.531.792.531 1.386 0 .594-.177 1.058-.534 1.389-.392.34-.9.517-1.42.491H33.21Z",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "logo-full_svg__a",
                  children: (0, a.jsx)("path", {
                    fill: "currentColor",
                    d: "M0 0h92.622v24H0z",
                  }),
                }),
              }),
            ],
          }),
        M = (e) =>
          (0, a.jsxs)("svg", {
            ...e,
            width: "741",
            height: "170",
            viewBox: "0 0 741 170",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M100.827 170C98.6375 170 82.6275 157.2 79.5275 153.55C77.0875 157.28 73.0875 161.51 73.0875 161.51C62.0375 155.94 47.9175 141.45 45.2575 136.38C42.6375 131.38 33.1275 73.8001 32.8675 57.0801C32.5275 47.6701 38.7175 28.5901 100.827 28.5901C162.938 28.5901 169.118 47.6701 168.788 57.0801C168.538 73.8001 159.027 131.38 156.397 136.38C153.737 141.45 139.617 155.94 128.567 161.51C128.567 161.51 124.567 157.28 122.127 153.55C119.027 157.2 103.017 170 100.827 170Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M100.827 132.92C80.0975 132.92 66.8675 121.97 66.8675 121.97L68.7775 95.3001L47.0275 93.3601L43.1175 61.8101H158.547L154.637 93.3601L132.887 95.3001L134.797 121.97C134.797 121.97 121.567 132.92 100.837 132.92H100.827Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M122.308 75.79L200.828 48.61C196.158 20.67 171.668 0 171.668 0V30.78L157.128 34.53L148.018 23.56L140.218 38.9L100.838 49.06L61.4575 38.9L53.6575 23.56L44.5475 34.53L30.0075 30.78V0C30.0075 0 5.49751 20.67 0.827515 48.61L79.3475 75.79L76.5475 113.18C83.2475 114.88 90.2975 116.57 100.828 116.57C111.358 116.57 118.398 114.88 125.098 113.18L122.298 75.79H122.308Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M299.158 53.2399V142.82H271.198V53.2399L240.138 49.4199V27.1699H330.058V49.4199L299.158 53.2399Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M338.928 96.6999V27.1699H366.888V96.6999C366.888 109.74 373.088 118.76 386.818 118.76C400.548 118.76 406.408 109.57 406.408 96.5299V27.1699H434.368V96.5299C434.368 124.44 418.298 145 386.478 145C354.658 145 338.918 125.61 338.918 96.6999H338.928Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M509.718 90.0099L536.177 142.82H506.208L483.438 95.3499H475.898V142.82H448.098V27.1699H487.948C512.228 27.1699 524.448 39.7099 524.448 61.5999C524.448 74.4699 519.088 84.3299 509.708 90.0099H509.718ZM475.898 51.2399V72.6299H485.608C491.968 72.6299 495.648 68.2799 495.648 61.7699C495.648 55.2599 491.798 51.2399 485.608 51.2399H475.898Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M574.017 68.79L588.587 74.47C603.658 80.65 612.538 90.68 612.538 107.9C612.538 131.3 595.957 145 572.687 145C539.527 145 533.507 123.44 534.507 106.56H560.968C560.638 113.91 563.477 121.1 572.687 121.1C579.047 121.1 583.737 117.59 583.737 110.9C583.737 104.21 579.047 101.21 571.517 98.37C565.657 96.03 559.797 93.86 553.437 90.68C541.717 84.66 535.517 73.3 535.517 59.26C535.517 39.04 550.248 25 572.858 25C600.158 25 610.038 40.54 608.858 61.1H583.077C583.247 53.91 579.557 48.9 573.028 48.9C566.498 48.9 563.478 52.74 563.478 57.59C563.478 62.44 566.158 65.78 574.028 68.79H574.017Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M678.677 25C716.527 25 740.138 50.91 740.138 84.67C740.138 118.43 716.688 145 679.518 145C642.348 145 618.568 119.1 618.568 85.17C618.568 51.24 643.017 25 678.677 25ZM679.348 118.93C699.778 118.93 710.828 103.89 710.828 85C710.828 66.11 699.107 51.07 679.177 51.07C659.247 51.07 647.867 66.11 647.867 85C647.867 103.89 660.088 118.93 679.348 118.93Z",
                fill: "currentColor",
              }),
            ],
          }),
        Z = (e) =>
          (0, a.jsx)("svg", {
            ...e,
            version: "1.0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "753.000000pt",
            height: "100.000000pt",
            viewBox: "0 0 753.000000 100.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: (0, a.jsxs)("g", {
              transform:
                "translate(0.000000,100.000000) scale(0.100000,-0.100000)",
              fill: "currentColor",
              stroke: "none",
              children: [
                (0, a.jsx)("path", {
                  d: "M120 875 l-125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 -125 -125z",
                }),
                (0, a.jsx)("path", {
                  d: "M620 875 l-125 -125 125 -125 125 -125 -125 -125 -125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 125 125 125 125 -125 125 -125 125 -125 -125z",
                }),
                (0, a.jsx)("path", {
                  d: "M1120 875 l-125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 -125 -125z",
                }),
                (0, a.jsx)("path", {
                  d: "M2300 795 l0 -85 125 0 125 0 0 -345 0 -345 95 0 95 0 0 345 0 345 125 0 125 0 0 85 0 85 -345 0 -345 0 0 -85z",
                }),
                (0, a.jsx)("path", {
                  d: "M3570 450 l0 -430 95 0 95 0 0 430 0 430 -95 0 -95 0 0 -430z",
                }),
                (0, a.jsx)("path", {
                  d: "M4410 451 l0 -431 190 0 c104 0 213 5 242 11 234 49 377 254 341 488 -27 175 -132 289 -310 337 -39 10 -126 17 -260 21 l-203 6 0 -432z m442 226 c31 -15 68 -43 83 -63 79 -103 70 -260 -19 -348 -56 -56 -115 -76 -228 -76 l-88 0 0 261 0 261 98 -4 c81 -3 107 -8 154 -31z",
                }),
                (0, a.jsx)("path", {
                  d: "M5912 833 c-55 -130 -332 -802 -332 -807 0 -3 46 -6 103 -6 l102 0 30 83 30 82 180 3 180 2 30 -82 30 -83 109 -3 c85 -2 107 0 103 10 -11 27 -290 707 -319 776 l-30 72 -98 0 -98 0 -20 -47z m182 -336 c31 -81 56 -150 56 -152 0 -3 -57 -5 -126 -5 -69 0 -124 4 -122 8 2 5 30 79 63 165 33 86 63 151 66 144 4 -7 32 -79 63 -160z",
                }),
                (0, a.jsx)("path", {
                  d: "M7000 450 l0 -430 265 0 265 0 0 85 0 85 -170 0 -170 0 0 345 0 345 -95 0 -95 0 0 -430z",
                }),
              ],
            }),
          }),
        V = (e) =>
          (0, a.jsxs)("svg", {
            ...e,
            width: "831",
            height: "192",
            viewBox: "0 0 831 192",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M197.3 64.2C220.5 64.2 240 79.6 240 108.2C240 110.1 240 111.7 239.8 114.6H170.1C171 129.1 182.7 138.7 197.4 138.7C209.8 138.7 218.1 133 222.7 125.2L237.6 135.8C229.6 148.4 215.8 156.4 197.2 156.4C170.3 156.4 150.9 137.3 150.9 110.3C151 84.2 170.4 64.2 197.3 64.2ZM171.1 100.3H220.4C218.3 87.5 208 80.6 196.6 80.6C185.2 80.6 173.7 87.2 171.1 100.3Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M259.8 65.9H279.3V77.8C284.3 70.7 295.1 64.2 307.8 64.2C332.1 64.2 350.5 84.9 350.5 110.3C350.5 135.6 332.1 156.4 307.8 156.4C295 156.4 284.2 149.8 279.3 142.7V191.6H259.8V65.9ZM304.3 81.9C288.5 81.9 277.7 94.3 277.7 110.3C277.7 126.3 288.5 138.7 304.3 138.7C319.9 138.7 330.7 126.3 330.7 110.3C330.7 94.3 319.9 81.9 304.3 81.9Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M389.9 21.6H370.4V154.5H389.9V21.6Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M425.9 46.6C418.8 46.6 412.8 40.8 412.8 33.5C412.8 26.4 418.8 20.6 425.9 20.6C433.2 20.6 438.8 26.5 438.8 33.5C438.8 40.8 433.2 46.6 425.9 46.6ZM416.2 65.9H435.7V154.5H416.2V65.9Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M502.3 156.3C475.7 156.3 455.5 136.4 455.5 110.2C455.5 84 475.7 64.1 502.3 64.1C520.6 64.1 536 73.9 543.6 88.6L526.6 97.8C522.3 88.8 513.7 82.2 502.3 82.2C486.5 82.2 475.4 94.4 475.4 110.2C475.4 126 486.6 138.2 502.3 138.2C513.6 138.2 522.3 131.6 526.6 122.6L543.6 131.8C536 146.6 520.5 156.3 502.3 156.3Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M597.8 64.2C610.6 64.2 621.2 70.8 626.2 77.8V65.9H645.7V154.5H626.2V142.6C621.2 149.7 610.6 156.3 597.8 156.3C573.5 156.3 555.1 135.6 555.1 110.2C555.1 84.9 573.5 64.2 597.8 64.2ZM601.4 81.9C585.6 81.9 575 94.3 575 110.3C575 126.3 585.6 138.7 601.4 138.7C617.2 138.7 627.8 126.3 627.8 110.3C627.8 94.3 617.1 81.9 601.4 81.9Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M679.1 154.6V83.3H660.6V65.9H679.1V41.3H698.6V65.9H732.2V83.3H698.6V137.1H732.2V154.6H679.1Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M141.8 65.9V83.4H94V154.6H74.5V65.9H141.8Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M141.8 33V50.4H57.2V154.6H37.7V33H141.8Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M141.8 0V17.4H20.4V154.6H0.899994V0H141.8Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M787.8 64.2C811 64.2 830.5 79.6 830.5 108.2C830.5 110.1 830.5 111.7 830.3 114.6H760.6C761.5 129.1 773.2 138.7 787.9 138.7C800.3 138.7 808.6 133 813.2 125.2L828.1 135.8C820.1 148.4 806.3 156.4 787.7 156.4C760.8 156.4 741.4 137.3 741.4 110.3C741.6 84.2 760.9 64.2 787.8 64.2ZM761.6 100.3H810.9C808.8 87.5 798.5 80.6 787.1 80.6C775.8 80.6 764.3 87.2 761.6 100.3Z",
                fill: "currentColor",
              }),
            ],
          }),
        L = (e) =>
          (0, a.jsxs)("svg", {
            ...e,
            width: "1821",
            height: "309",
            viewBox: "0 0 1821 309",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("g", {
                "clip-path": "url(#clip0_574_2)",
                children: (0, a.jsx)("path", {
                  d: "M636.491 232.657H538.448L526.368 267.171C524.403 272.788 517.748 277.383 511.581 277.383H458.625C452.459 277.383 449.267 272.875 451.535 267.364L547.509 34.0849C549.774 28.5737 556.676 24.0648 562.845 24.0648H612.505C618.672 24.0648 625.568 28.5762 627.826 34.09L723.418 267.358C725.677 272.872 722.479 277.383 716.313 277.383H663.358C657.191 277.383 650.536 272.788 648.57 267.171L636.491 232.657ZM619.188 182.784L587.468 90.956L555.751 182.784H619.188ZM949.151 277.383C942.983 277.383 935.325 273.235 932.134 268.164L886.857 196.243L841.582 268.164C838.389 273.235 830.731 277.383 824.564 277.383H760.072C753.905 277.383 751.724 273.392 755.227 268.515L842.367 147.162L762.918 33.0208C759.491 28.0951 761.732 24.0648 767.899 24.0648H827.446C833.613 24.0648 841.316 28.1871 844.562 33.2258L886.857 98.874L928.774 33.2476C932 28.197 939.687 24.0648 945.854 24.0648H1005.81C1011.98 24.0648 1014.21 28.0849 1010.76 32.9984L930.934 146.765L1018.48 268.519C1021.99 273.394 1019.81 277.383 1013.64 277.383H949.151ZM1132.94 266.608C1132.94 272.535 1127.9 277.383 1121.73 277.383H1074.13C1067.96 277.383 1062.91 272.535 1062.91 266.608V34.8391C1062.91 28.9133 1067.96 24.0648 1074.13 24.0648H1121.73C1127.9 24.0648 1132.94 28.9133 1132.94 34.8391V266.608ZM1175.12 149.932C1175.12 76.312 1232.79 16.9412 1321.35 16.9412C1409.92 16.9412 1467.59 76.312 1467.59 149.932C1467.59 223.949 1409.92 283.321 1321.35 283.321C1232.79 283.321 1175.12 223.949 1175.12 149.932ZM1395.92 149.932C1395.92 111.54 1367.9 76.7066 1321.35 76.7066C1275.22 76.7066 1246.79 111.54 1246.79 149.932C1246.79 188.328 1275.22 223.949 1321.35 223.949C1367.49 223.949 1395.92 188.328 1395.92 149.932ZM1766.49 277.383C1760.33 277.383 1754.63 272.575 1753.83 266.698L1735.51 130.935L1682.58 267.288C1680.43 272.841 1673.62 277.383 1667.45 277.383H1644.15C1637.98 277.383 1631.18 272.836 1629.05 267.279L1576.09 129.746L1557.75 266.696C1556.96 272.575 1551.27 277.383 1545.1 277.383H1500.38C1494.22 277.383 1489.86 272.58 1490.7 266.709L1523.89 34.7389C1524.73 28.8682 1530.47 24.0648 1536.63 24.0648H1578.05C1584.22 24.0648 1591.06 28.5973 1593.25 34.1375L1655.59 191.889L1718.33 34.1297C1720.52 28.5938 1727.38 24.0648 1733.53 24.0648H1774.96C1781.13 24.0648 1786.87 28.8682 1787.71 34.7389L1820.9 266.709C1821.74 272.58 1817.38 277.383 1811.21 277.383H1766.49ZM354.75 215.609L278.412 87.8475C274.911 81.9755 266.285 77.1714 259.242 77.1714H211.583C200.506 77.1714 195.965 69.6237 201.49 60.3991L227.626 16.7722C229.7 13.3099 229.695 9.04737 227.615 5.5887C225.534 2.13003 221.691 0 217.533 0H151.048C144.004 0 135.36 4.79349 131.836 10.6524L2.6449 225.448C-0.880053 231.307 -0.881407 240.895 2.63949 246.755L35.8815 302.08C41.4207 311.297 50.5038 311.308 56.0661 302.103L82.0403 259.123C87.6039 249.918 96.6855 249.928 102.225 259.146L125.773 298.338C129.294 304.198 137.937 308.992 144.98 308.992H298.613C305.653 308.992 314.298 304.198 317.819 298.338L354.711 236.941C358.232 231.081 358.249 221.482 354.75 215.609ZM251.654 209.46C257.159 218.696 252.599 226.254 241.522 226.254H122.021C110.944 226.254 106.412 218.712 111.951 209.494L171.747 109.977C177.286 100.759 186.349 100.76 191.888 109.978L251.654 209.46Z",
                  fill: "currentColor",
                }),
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_574_2",
                  children: (0, a.jsx)("rect", {
                    width: "1821",
                    height: "309",
                    fill: "currentColor",
                  }),
                }),
              }),
            ],
          }),
        A = (e) =>
          (0, a.jsxs)("svg", {
            ...e,
            width: "400",
            height: "124",
            viewBox: "0 0 400 124",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                "clip-path": "url(#clip0_3_10)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M137.319 61.231C137.203 58.3733 137.655 55.521 138.647 52.8386C139.639 50.1562 141.152 47.6968 143.1 45.6024C145.047 43.5079 147.39 41.8197 149.993 40.6354C152.597 39.451 155.409 38.7939 158.267 38.7018H159.155C170.203 38.7018 176.724 45.2006 178.652 52.8042L171.784 55.1004C171.168 52.267 169.553 49.7498 167.234 48.008C164.916 46.2662 162.048 45.4159 159.155 45.6122C152.007 45.6122 144.836 50.8329 144.836 61.3609C144.836 71.889 151.833 76.9147 159.242 76.9147C162.149 76.9941 165 76.096 167.336 74.3641C169.673 72.6321 171.361 70.1664 172.131 67.3615L178.868 69.5277C177.705 73.8065 175.119 77.5611 171.535 80.1721C167.951 82.7831 163.584 84.0945 159.155 83.89C153.465 83.9944 147.966 81.8351 143.868 77.8867C139.769 73.9384 137.406 68.5241 137.298 62.834C137.276 62.3141 137.298 61.7725 137.319 61.231Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M192.234 82.8936H185.129V38.5719H192.234V55.902C193.265 54.6785 194.563 53.7069 196.027 53.0611C197.491 52.4154 199.083 52.1127 200.682 52.176C208.026 52.176 211.514 57.44 211.514 64.0038V82.8936H204.668V65.2602C204.873 63.757 204.48 62.2335 203.572 61.0178C202.664 59.8022 201.315 58.9918 199.816 58.7614C199.391 58.7178 198.963 58.7178 198.538 58.7614C196.895 58.7614 195.319 59.4142 194.157 60.5761C192.995 61.7379 192.342 63.3138 192.342 64.9569C192.332 65.1373 192.332 65.3182 192.342 65.4985L192.234 82.8936Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M227.457 65.8235L235.083 64.632C236.816 64.4154 237.249 63.5272 237.249 62.4658C237.249 59.9529 235.559 57.9383 231.617 57.9383C230.128 57.8179 228.651 58.2894 227.508 59.2505C226.364 60.2116 225.645 61.5848 225.508 63.0723V63.3973L219.009 61.9459C219.55 56.7902 224.23 52.1977 231.552 52.1977C240.737 52.1977 244.224 57.3967 244.224 63.4622V78.2578C244.217 79.861 244.34 81.4621 244.592 83.0452H238.094C237.859 81.7886 237.765 80.51 237.812 79.2326C236.826 80.7507 235.458 81.9837 233.847 82.8085C232.235 83.6334 230.435 84.0212 228.627 83.9334C226.157 84.1373 223.707 83.3533 221.815 81.7532C219.922 80.1531 218.742 77.8677 218.532 75.3983C218.532 75.2467 218.532 75.0951 218.532 74.9651C218.424 69.4845 222.345 66.5383 227.457 65.8235ZM237.292 70.6109V69.2462L229.515 70.4159C228.46 70.4494 227.458 70.8896 226.719 71.6445C225.98 72.3994 225.562 73.4107 225.551 74.4669C225.559 74.9902 225.672 75.5067 225.882 75.9862C226.092 76.4656 226.395 76.8984 226.774 77.2594C227.154 77.6203 227.601 77.9022 228.09 78.0885C228.579 78.2748 229.1 78.3618 229.624 78.3445H229.949C230.835 78.4373 231.732 78.3537 232.586 78.0986C233.44 77.8435 234.235 77.422 234.926 76.8582C235.617 76.2944 236.189 75.5995 236.61 74.8136C237.031 74.0277 237.292 73.1663 237.379 72.2789C237.41 71.7206 237.373 71.1606 237.27 70.6109H237.292Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M256.312 37.9653C256.923 37.9567 257.529 38.0689 258.096 38.2953C258.663 38.5217 259.18 38.8579 259.617 39.2847C260.054 39.7114 260.402 40.2203 260.641 40.782C260.881 41.3437 261.007 41.9472 261.013 42.5578C261.013 43.4719 260.742 44.3655 260.236 45.1264C259.729 45.8873 259.009 46.4814 258.166 46.8341C257.322 47.1868 256.394 47.2824 255.496 47.1087C254.599 46.935 253.773 46.4999 253.122 45.8581C252.471 45.2162 252.024 44.3963 251.838 43.5014C251.652 42.6064 251.735 41.6764 252.076 40.8283C252.417 39.9802 253.001 39.2518 253.754 38.7347C254.508 38.2175 255.398 37.9348 256.312 37.922V37.9653ZM252.846 83.0235V53.0858H259.951V82.8936L252.846 83.0235Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M276.133 82.8936H269.05V53.0859H275.96V57.0501C276.861 55.5279 278.155 54.2761 279.706 53.4262C281.257 52.5762 283.009 52.1594 284.777 52.2194C292.055 52.2194 295.608 57.4834 295.608 64.0471V82.8936H288.524V65.2602C288.524 61.5993 286.856 58.6315 282.394 58.6315C281.569 58.6372 280.753 58.8053 279.993 59.1262C279.233 59.4472 278.544 59.9147 277.964 60.5021C277.385 61.0895 276.927 61.7852 276.616 62.5496C276.306 63.3139 276.149 64.132 276.155 64.957C276.155 65.1953 276.155 65.4335 276.155 65.6718L276.133 82.8936Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M304.186 82.8936V38.5719H311.292V82.8936H304.186Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M323.964 37.9653C324.879 37.961 325.774 38.2286 326.536 38.7339C327.298 39.2393 327.893 39.9597 328.245 40.8037C328.597 41.6477 328.69 42.5772 328.512 43.4743C328.335 44.3713 327.895 45.1955 327.249 45.8421C326.602 46.4887 325.778 46.9286 324.881 47.1059C323.984 47.2833 323.054 47.1901 322.21 46.8382C321.366 46.4862 320.646 45.8915 320.14 45.1294C319.635 44.3673 319.367 43.4722 319.372 42.5578C319.383 41.3433 319.871 40.1817 320.729 39.3229C321.588 38.4641 322.75 37.9766 323.964 37.9653ZM320.477 83.0235V53.0858H327.517V82.8936L320.477 83.0235Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M343.807 82.8936H336.702V53.0858H343.612V57.0501C344.515 55.5294 345.809 54.2789 347.36 53.4292C348.911 52.5794 350.662 52.1616 352.429 52.2193C359.708 52.2193 363.26 57.4833 363.26 64.0471V82.8936H356.155V65.2602C356.36 63.757 355.966 62.2334 355.059 61.0178C354.151 59.8022 352.802 58.9918 351.303 58.7614C350.87 58.718 350.435 58.718 350.003 58.7614C348.348 58.7785 346.767 59.448 345.603 60.6242C344.438 61.8005 343.785 63.3886 343.786 65.0436C343.763 65.2958 343.763 65.5495 343.786 65.8018L343.807 82.8936Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M387.501 65.6718L400 83.0019H391.335L382.67 70.7192L379.009 74.5751V82.8936H371.969V38.5719H379.009V65.1302L390.447 53.0858H399.87L387.501 65.6718Z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M53.2034 26.5708L83.9209 44.2042V79.6442L53.29 97.3859L22.5941 79.7958V44.3775L53.2034 26.5708ZM53.2034 0.575684L41.9388 7.07447L11.2646 24.8811L0 31.3799V92.8367L11.2646 99.3355L41.9821 116.969L53.2467 123.468L64.5112 116.969L95.1205 99.2055L106.385 92.7067V31.1633L95.1205 24.6645L64.4246 7.07447L53.16 0.575684H53.2034Z",
                    fill: "currentColor",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_3_10",
                  children: (0, a.jsx)("rect", {
                    width: "400",
                    height: "122.849",
                    fill: "currentColor",
                    transform: "translate(0 0.575684)",
                  }),
                }),
              }),
            ],
          }),
        k = (e) =>
          (0, a.jsxs)("svg", {
            ...e,
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 1180 320",
            children: [
              (0, a.jsx)("g", {
                fill: "currentColor",
                "clip-path": "url(#a)",
                children: (0, a.jsx)("path", {
                  d: "M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8 46.56 0 80.16-36.48 80.16-88.8s-33.6-88.8-80.16-88.8c-46.56 0-80.16 36.48-80.16 88.8Zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68ZM614.27 242.64c35.28 0 55.44-29.76 55.44-65.52 0-35.76-20.16-65.52-55.44-65.52-16.32 0-28.32 6.48-36.24 15.84V114h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84Zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48v-7.44ZM747.65 242.64c25.2 0 45.12-13.2 54-35.28L776.93 198c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16-36.48 0-60 28.56-60 65.52 0 38.88 25.2 65.52 61.2 65.52Zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92ZM823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88V240h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84V114h-28.8v126ZM1014.17 67.68 948.89 240h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32h-34.8Zm16.8 34.08 27.36 72h-54.24l26.88-72ZM1163.69 68.18h-30.72V240.5h30.72V68.18ZM297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51l-.01.02ZM176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97ZM47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95h-.01ZM31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89l.01-.01Zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06h-.01Zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1h.02Zm-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79v.02ZM125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20v-40Z",
                }),
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "a",
                  children: (0, a.jsx)("path", {
                    fill: "currentColor",
                    d: "M0 0h1180v320H0z",
                  }),
                }),
              }),
            ],
          }),
        I = (e) =>
          (0, a.jsxs)("svg", {
            ...e,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 2159 501",
            children: [
              (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M614.21 158.547c6.46 5.65 11.345 11.647 16.79 18.453l4-32h31c.046 26.253.082 52.506.104 78.759.01 12.191.024 24.383.047 36.574.02 10.634.033 21.268.037 31.903.003 5.623.009 11.246.023 16.87.014 5.308.018 10.617.015 15.926 0 1.933.005 3.866.012 5.8.037 9.681-.182 19.257-1.12 28.898l-.231 2.41c-2.267 21.01-10.896 41.137-27.44 54.823-26.18 20.615-61.85 23.667-93.974 20.568-25.398-3.021-47.118-12.925-63.848-32.406C471.338 394.208 466 379.724 466 366h35l5 13c8.226 13.71 19.361 20.694 34.645 25.035 21.022 4.655 47.18 4.251 65.812-7.598 13.657-10.05 20.334-23.089 23.073-39.64.47-3.801.584-7.433.568-11.262l-.005-2.055c-.005-2.14-.018-4.278-.03-6.418-.006-1.461-.01-2.923-.014-4.384-.011-3.56-.028-7.119-.049-10.678l-1.37 1.79c-13.35 17.323-29.914 29.013-52.08 31.962-30.036 2.917-58.91-1.822-82.636-21.283C478.397 321.11 468.323 303.659 463 284l-.969-3.527c-4.416-19.81-4.408-44.893.969-64.473l1.031-3.809c7.416-24.476 23.478-45.592 45.844-58.252 30.875-16.328 76-18.748 104.336 4.608ZM514 194l-1.805 1.703c-14.695 15.093-17.638 38.726-17.41 58.633.54 20.01 7.747 38.863 21.465 53.539 16.245 15.171 34.55 17.96 55.813 17.304 16.608-1.013 31.333-9.736 42.382-21.863 14.56-18.187 19.223-41.445 16.93-64.316-2.297-19.27-10.021-38.419-25.043-51.285-29.138-21.987-66.726-19.55-92.332 6.285ZM1972.785 160.164c14.484 12.364 21.496 29.09 23.215 47.836.142 3.484.154 6.965.158 10.452l.015 3.077c.01 2.193.02 4.386.026 6.579.012 3.472.032 6.944.053 10.416.062 9.867.116 19.735.15 29.602.02 6.046.056 12.091.1 18.137.014 2.3.023 4.601.026 6.902.005 3.214.028 6.428.055 9.642l-.009 2.872c.066 5.188.528 8.83 3.426 13.321 3.477 2.779 7.972 2.443 12.25 2.625l7.75.375v32l-12.813.125-3.968.055c-10.879.051-22.747-.202-31.16-7.973-5.835-6.298-8.18-12.97-10.059-21.207l-1.688 1.941c-15.139 17.16-33.36 27.8-56.558 29.264-3.483.098-6.957.124-10.441.108l-3.739-.015c-21.974-.282-42.883-6.198-59.129-21.657-3.592-3.88-6.144-7.898-8.445-12.641l-1.176-2.395c-6.944-15.631-6.337-34.453-.637-50.355 6.524-15.726 18.16-26.393 33.75-32.938 15.222-5.34 30.484-6.908 46.516-6.703 1.765.008 3.53.014 5.295.018 4.57.015 9.14.054 13.71.098 4.694.042 9.387.06 14.081.08 9.154.042 18.307.11 27.461.195-.082-3.626-.195-7.25-.313-10.875l-.068-3.07c-.41-11.641-3.118-21.644-11.588-29.996-13.96-11.71-31.534-13.42-49.031-12.059-12.547 1.665-24.423 6.282-33.21 15.648-4.168 5.477-7.125 11.693-8.79 18.352h-35c1.749-17.486 7.589-30.526 20-43l2.016-2.121c30.963-30.314 95.18-28.037 127.77-2.715ZM1859.09 269.922c-6.644 8.423-8.87 17.718-7.875 28.379 1.907 9.065 6.737 15.535 14.05 20.976 15.22 9.588 34.714 9.047 51.735 5.723 15.917-4.321 28.867-12.401 37.313-26.75 5.467-9.882 6.853-18.504 6.75-29.648l-.014-2.804A1706.86 1706.86 0 0 0 1961 259c-9.685-.07-19.37-.123-29.054-.155-4.498-.016-8.996-.037-13.495-.071-4.35-.033-8.7-.05-13.052-.059-1.65-.005-3.3-.016-4.95-.032-14.358-.137-30.548.362-41.36 11.239ZM1480.813 163.25c19.408 16.976 30.991 41.046 33.187 66.75.98 22.04.98 22.04-1 26h-161c2.556 23.007 6.284 40.766 24.375 56 12.24 9.101 25.435 12.395 40.438 12.313l3.225-.018c15.91-.246 29.143-4.844 40.778-16.014 6.966-7.277 11.725-15.446 14.184-25.281h35c-2.204 19.832-11.038 35.2-25 49l-2.21 2.242c-19.582 18.707-45.654 22.615-71.626 22.106-26.953-.994-51.24-11.725-69.926-31.23-15.746-18.086-25.213-41.817-25.476-65.876l-.03-2.233c-.328-31.046-.328-31.046 4.268-46.009l.633-2.118c4.96-16.014 13.5-29.154 25.367-40.882l2.207-2.238c33.989-32.476 97.06-32.17 132.605-2.512ZM1391 177l-2.832 1.285c-15.862 7.964-26.071 19.944-32.293 36.45-1.203 4.163-1.203 4.163-1.875 12.265h124c-1.75-17.495-7.728-30.424-21.172-41.93-18.068-13.226-45.104-17.56-65.828-8.07ZM874 165c18.801 16.716 28.602 40.083 31.438 64.75l.245 2.067c.73 8.173-.192 15.835-.683 24.183H743c2.952 20.667 6.042 41.554 23.529 55.192 17.291 12.647 36.27 14.759 57.225 12.382 14.035-3.112 26.961-10.85 34.996-22.824 3.594-5.7 5.568-11.314 8.25-17.75h35c-4.259 23.424-15.999 43.841-35.613 57.781-16.8 11.314-35.51 15.624-55.512 15.531-1.281-.005-2.562-.01-3.882-.017-29.91-.382-54.323-10.776-75.321-32.248C709.822 299.99 705.543 267.112 707 236c2.217-28.117 13.638-54.12 35.117-72.754C779.867 133.834 837.27 134.06 874 165Zm-115 29c-8.456 9.94-11.682 20.25-14 33h125c-2.997-17.98-9.237-32.84-24.45-43.758C817.053 165.436 782.06 169.885 759 194ZM1090 67h34l1 108 11-13c20.065-16.686 42.721-22.054 68.474-19.782 10.047 1.174 19.308 3.516 28.526 7.782l2.82 1.27c7.958 3.933 13.956 9.524 20.18 15.73l1.809 1.738c20.317 21.309 19.662 54.7 19.495 81.945-.019 3.646-.02 7.292-.024 10.938-.01 6.87-.034 13.74-.064 20.61a9790.29 9790.29 0 0 0-.065 23.507c-.031 16.088-.086 32.175-.151 48.262h-34l-.06-10.762a26637.34 26637.34 0 0 0-.228-35.347c-.05-7.138-.096-14.276-.134-21.414-.033-6.23-.073-12.459-.12-18.688a3150.44 3150.44 0 0 1-.061-9.874c.217-37.616.217-37.616-17.17-69.88-13.272-12.13-29.642-13.658-46.73-13.167-13.428.71-25.403 7.097-34.958 16.308-18.575 20.66-18.986 47.688-19.05 73.86l-.055 7.729c-.042 6.04-.072 12.082-.095 18.124-.028 6.89-.072 13.78-.117 20.67A18718.64 18718.64 0 0 0 1124 354h-34V67ZM391 166c19.739 17.16 30.757 40.188 34 66 1.793 36.444-3.63 66.431-27.707 95.027-15.913 17.122-41.083 28.147-64.297 29.096-28.72.666-28.72.666-41.996-3.123l-2.057-.586c-24.808-7.302-44.944-23.157-57.654-45.693-15.234-28.264-17.85-62.54-9-93.291 7.702-25.353 23.555-46.356 46.711-59.43 38.732-20.316 88.426-15.928 122 12Zm-118 27-2.137 2.266C260.408 207.294 253.664 225.054 253 241l-.156 3.438c-.669 22.169 4.997 45.16 20.347 61.882 7.373 6.847 15.35 12.23 24.809 15.68l2.512.965c17.257 5.467 36.703 3.154 52.777-4.54 15.934-8.652 27.7-22.872 32.938-40.312 7.072-25.268 5.146-50.879-7.29-74.175C369.41 188.39 354.587 178.471 337 174c-23.114-4.783-47.785 1.587-64 19ZM101 86h34v59h53v31h-53c.063 16.795.138 33.589.236 50.383.045 7.799.084 15.597.11 23.396.023 6.8.057 13.6.103 20.4.024 3.598.042 7.196.049 10.794.007 4.024.037 8.048.07 12.072l-.005 3.585c.086 7.548.326 15.09 5.75 20.808 6.207 3.609 11.895 3.89 18.898 3.976l2.934.059c3.076.06 6.153.106 9.23.152 2.092.038 4.185.077 6.277.117 5.116.098 10.232.177 15.348.258v32c-6.525.07-13.049.129-19.574.165-2.212.015-4.424.035-6.636.061-40.317.466-40.317.466-55.165-12.788-10.601-11.551-11.937-26.34-11.852-41.241v-4.083c-.002-3.665.01-7.33.024-10.994.013-3.841.014-7.682.016-11.523.006-7.26.023-14.52.043-21.78.022-8.27.033-16.542.043-24.813.021-17.001.058-34.003.101-51.004H63v-31h38V86ZM961 86h34v59h53v31h-53c.063 16.5.138 32.998.236 49.497.045 7.662.084 15.324.11 22.986.023 6.682.057 13.364.103 20.046.024 3.534.042 7.068.049 10.603.007 3.956.037 7.913.07 11.87l-.005 3.506c.09 7.863.249 16.959 5.75 23.055 6.303 3.371 11.895 3.764 18.898 3.851l2.934.059c3.076.06 6.153.106 9.23.152 2.092.038 4.185.077 6.277.117 5.116.098 10.232.177 15.348.258v32c-6.543.07-13.085.129-19.629.165-2.219.015-4.437.035-6.656.061-40.811.47-40.811.47-55.453-13.62-10.276-11.838-11.736-27.624-11.603-42.68V293.9c-.002-3.594.016-7.188.037-10.782.019-3.774.02-7.548.024-11.323.01-7.125.034-14.25.064-21.375.034-8.121.05-16.242.065-24.364.031-16.685.086-33.37.151-50.056h-38v-31h38V86ZM1555 145h31l4 28 5.188-5.938c11.257-12.361 24.142-19.695 40.812-22.062 2.09-.077 4.182-.108 6.273-.098l3.154.008 3.948.028L1662 145v33l-10.563.313c-16.059.635-31.373 2.245-43.628 13.687-13.515 14.945-16.91 36.376-17.014 55.74l-.03 3.491a6450.11 6450.11 0 0 0-.081 11.363l-.063 7.902c-.05 6.212-.095 12.424-.138 18.635-.05 7.077-.105 14.153-.16 21.229-.114 14.547-.22 29.093-.323 43.64h-35V145ZM2057 145h34v209h-34V145Z",
              }),
              (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M1740.313 293.813c7.498 6.155 12.256 13.45 13.562 23.125.587 9.242-1.76 17.966-7.598 25.195-5.975 6.438-13.097 10.307-21.906 11.105-9.795.248-17.556-1.584-25.246-7.863-5.62-5.368-9.784-12.759-10.363-20.598-.214-11.05 1.248-19.635 9.043-27.953 12.185-10.125 29.293-12.476 42.507-3.012Z",
              }),
              (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M2087 67c4.633 4.304 8.654 8.732 9.336 15.172.088 8.071-.073 14.285-5.762 20.348-6.206 5.564-12.086 5.94-20.125 5.78-4.627-.403-7.927-1.211-11.449-4.3-6.096-7.422-7.678-13.5-7-23 1.071-6.181 4.122-9.731 8.965-13.59 7.329-5.078 18.434-5.178 26.035-.41Z",
              }),
            ],
          });
      function z(e) {
        let {
          className: t,
          reverse: r,
          pauseOnHover: s = !1,
          children: l,
          vertical: n = !1,
          repeat: o = 4,
          ...c
        } = e;
        return (0, a.jsx)("div", {
          ...c,
          className: i(
            "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
            { "flex-row": !n, "flex-col": n },
            t,
          ),
          children: Array(o)
            .fill(0)
            .map((e, t) =>
              (0, a.jsx)(
                "div",
                {
                  className: i(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    {
                      "animate-marquee flex-row": !n,
                      "animate-marquee-vertical flex-col": n,
                      "group-hover:[animation-play-state:paused]": s,
                      "[animation-direction:reverse]": r,
                    },
                  ),
                  children: l,
                },
                t,
              ),
            ),
        });
      }
      var E = {
          src: "/_next/static/media/logos--google.b975f3e2.svg",
          height: 168,
          width: 512,
          blurWidth: 0,
          blurHeight: 0,
        },
        S = {
          src: "/_next/static/media/logos--microsoft.588aed65.svg",
          height: 110,
          width: 512,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: "/_next/static/media/devicon--salesforce.f21df4f7.svg",
          height: 128,
          width: 128,
          blurWidth: 0,
          blurHeight: 0,
        },
        R = {
          src: "/_next/static/media/logos--adobe.820cc502.svg",
          height: 134,
          width: 512,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: "/_next/static/media/logos--hubspot (1).1228422c.svg",
          height: 149,
          width: 512,
          blurWidth: 0,
          blurHeight: 0,
        },
        P = {
          src: "/_next/static/media/logos--meta.b6663bf1.svg",
          height: 104,
          width: 512,
          blurWidth: 0,
          blurHeight: 0,
        },
        F = () =>
          (0, a.jsx)("div", {
            className: "flex w-full py-20",
            children: (0, a.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center text-center w-full py-2",
              children: [
                (0, a.jsx)("h2", {
                  className: "text-xl heading",
                  children: "Trusted by Innovators Using Generative AI",
                }),
                (0, a.jsx)("p", {
                  className: "text-sm text-muted-foreground mt-2",
                  children:
                    "Leading companies are leveraging generative AI to drive transformation, automation, and creativity across industries.",
                }),
                (0, a.jsxs)("div", {
                  className: "mt-16 w-full relative overflow-hidden",
                  children: [
                    (0, a.jsx)(z, {
                      pauseOnHover: !0,
                      className: "[--duration:30s]",
                      children: (0, a.jsxs)("div", {
                        className: "flex gap-8 md:gap-12",
                        children: [
                          (0, a.jsx)(w.default, {
                            src: E,
                            alt: "",
                            className: "w-24 h-8 ml-2",
                          }),
                          (0, a.jsx)(w.default, {
                            src: S,
                            alt: "",
                            className: "w-24 h-8",
                          }),
                          (0, a.jsx)(w.default, {
                            src: _,
                            alt: "",
                            className: "w-24 h-8",
                          }),
                          (0, a.jsx)(w.default, {
                            src: R,
                            alt: "",
                            className: "w-24 h-8",
                          }),
                          (0, a.jsx)(w.default, {
                            src: T,
                            alt: "",
                            className: "w-24 h-8",
                          }),
                          (0, a.jsx)(w.default, {
                            src: P,
                            alt: "",
                            className: "w-24 h-8",
                          }),
                          (0, a.jsx)(y, { className: "w-24 h-8" }),
                          (0, a.jsx)(N, { className: "w-24 h-8" }),
                          (0, a.jsx)(H, { className: "w-24 h-8" }),
                          (0, a.jsx)(M, { className: "w-24 h-8" }),
                          (0, a.jsx)(Z, { className: "w-24 h-8" }),
                          (0, a.jsx)(V, { className: "w-24 h-8" }),
                          (0, a.jsx)(L, { className: "w-24 h-8" }),
                          (0, a.jsx)(A, { className: "w-24 h-8" }),
                          (0, a.jsx)(k, { className: "w-24 h-8" }),
                          (0, a.jsx)(I, { className: "w-24 h-8" }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background",
                    }),
                  ],
                }),
              ],
            }),
          });
      let G = (e) => {
        let { title: t } = e;
        return (0, a.jsx)("div", {
          className:
            "px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none",
          children: (0, a.jsx)("div", {
            className:
              "bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-white font-medium text-sm",
            children: t,
          }),
        });
      };
      var W = {
          src: "/_next/static/media/Untitled design (8).793c86c5.png",
          height: 950,
          width: 2048,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaElEQVR42mOQEdcSFZYWF5Ph4mcAIjFRaTERGTkpLQYNJSsr3Wh1Gbsgx9ogpxo1aTsH0xgdDUsGbUUXI9UgLXnHQIfqIMdqLQUnE/UgVQknBgVJYyEBcUlxOZBRfAwS4rL8POKyokYAA5gPadpX77wAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        },
        B = () =>
          (0, a.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center py-8 md:py-12 w-full",
            children: [
              (0, a.jsx)(d, {
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center text-center max-w-2xl mx-auto",
                  children: [
                    (0, a.jsx)(G, { title: "Generative AI tools" }),
                    (0, a.jsx)("h2", {
                      className:
                        "text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6",
                      children:
                        "Unlock the Power of Creativity with Generative AI",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-base md:text-lg text-center text-accent-foreground/80 mt-6",
                      children:
                        "Harness the potential of generative AI to drive innovation, streamline processes, and enhance creativity across industries.",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(d, {
                children: (0, a.jsxs)("div", {
                  className: "w-full relative mt-12",
                  children: [
                    (0, a.jsx)(w.default, {
                      alt: "",
                      src: W,
                      className: " w-full h-auto",
                    }),
                    (0, a.jsx)(C, {
                      className: "absolute inset-0",
                      quantity: 150,
                      ease: 80,
                      color: "#e4e4e7",
                      refresh: !0,
                    }),
                  ],
                }),
              }),
            ],
          }),
        U = r(10462),
        D = r(33907),
        Y = r(21657),
        O = r(24501),
        q = r(38733),
        X = r(44421);
      let Q = [
          {
            icon: U.Z,
            title: "Cutting-Edge AI Models",
            description:
              "Leverage the latest in LLMs, multimodal AI, and fine-tuned models tailored to your business context.",
          },
          {
            icon: D.Z,
            title: "Hyper-Personalized Interactions",
            description:
              "Deliver smarter, context-aware experiences across chat, voice, and workflow automation channels.",
          },
          {
            icon: Y.Z,
            title: "End-to-End Support",
            description:
              "From discovery to deployment, our team ensures smooth implementation and rapid value realization.",
          },
          {
            icon: O.Z,
            title: "Brand-Aligned AI UX",
            description:
              "We craft AI solutions that match your tone, branding, and customer experience expectations.",
          },
          {
            icon: q.Z,
            title: "Enterprise-Grade Security",
            description:
              "Your data is protected with best-in-class encryption, access controls, and compliance standards.",
          },
          {
            icon: X.Z,
            title: "Seamless Ecosystem Integration",
            description:
              "Plug into your CRM, CMS, Slack, WhatsApp, or any stack — our APIs and workflows are integration-ready.",
          },
        ],
        K = (e) => {
          let { title: t, description: r, icon: s, index: l } = e;
          return (0, a.jsxs)("div", {
            className: i(
              "flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800",
              (0 === l || 3 === l) && "lg:border-l",
              l < 3 && "lg:border-b",
            ),
            children: [
              l < 3 &&
                (0, a.jsx)("div", {
                  className:
                    "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-violet-950/25 to-transparent pointer-events-none",
                }),
              l >= 3 &&
                (0, a.jsx)("div", {
                  className:
                    "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-80 from-violet-950/25 to-transparent pointer-events-none",
                }),
              (0, a.jsxs)("div", {
                className:
                  "group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full",
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-4 relative z-10 px-10",
                    children: (0, a.jsx)(s, {
                      strokeWidth: 1.3,
                      className:
                        "w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-foreground",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "text-lg font-medium font-heading mb-2 relative z-10 px-10",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-violet-600 transition-all duration-500 origin-center",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "group-hover/feature:-translate-y- group-hover/feature:text- transition duration-500 inline-block heading",
                        children: t,
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-sm text-neutral-300 max-w-xs relative z-10 px-10",
                    children: r,
                  }),
                ],
              }),
            ],
          });
        };
      var J = () =>
          (0, a.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full",
            children: [
              (0, a.jsx)(d, {
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center text-center max-w-2xl mx-auto",
                  children: [
                    (0, a.jsx)(G, { title: "Perks" }),
                    (0, a.jsx)("h2", {
                      className:
                        "text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6",
                      children: "Transform Your Business with Generative AI",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-base md:text-lg text-center text-accent-foreground/80 mt-6",
                      children:
                        "Discover how our generative AI solutions help you unlock new efficiencies, automate workflows, and elevate customer experiences — all tailored for your industry and goals.",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(d, {
                children: (0, a.jsx)("div", {
                  className: "mt-16 w-full",
                  children: (0, a.jsx)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative",
                    children: Q.map((e, t) =>
                      (0, a.jsx)(K, { index: t, ...e }, t),
                    ),
                  }),
                }),
              }),
            ],
          }),
        $ = r(25302);
      let ee = $.fC,
        et = s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)($.aV, {
            ref: t,
            className: i(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted/60 p-1 text-muted-foreground",
              r,
            ),
            ...s,
          });
        });
      et.displayName = $.aV.displayName;
      let er = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)($.xz, {
          ref: t,
          className: i(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
            r,
          ),
          ...s,
        });
      });
      er.displayName = $.xz.displayName;
      let ea = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)($.VY, {
          ref: t,
          className: i(
            "focus:outline-none data-[state=inactive]:opacity-0 data-[state=inactive]: data-[state=inactive]:pointer-events-none",
            r,
          ),
          ...s,
        });
      });
      ea.displayName = $.VY.displayName;
      var es = r(34446),
        el = r(22468),
        en = r(45282),
        ei = r(26391),
        eo = r(55382);
      function ec(e) {
        let { value: t, direction: r = "up", delay: l = 0, className: n } = e,
          o = (0, s.useRef)(null),
          c = (0, en.c)("down" === r ? t : 0),
          d = (0, ei.q)(c, { bounce: 0.15 }),
          u = (0, eo.Y)(o, { once: !0, margin: "0px" });
        return (
          (0, s.useEffect)(() => {
            u &&
              setTimeout(() => {
                c.set("down" === r ? 0 : t);
              }, 500 * l);
          }, [c, u, l, t, r]),
          (0, s.useEffect)(
            () =>
              d.on("change", (e) => {
                o.current &&
                  (o.current.textContent = Intl.NumberFormat("en-US").format(
                    Number(e.toFixed(0)),
                  ));
              }),
            [d],
          ),
          (0, a.jsx)("span", {
            className: i(
              "inline-block font-default text-inherit tracking-wider",
              n,
            ),
            ref: o,
          })
        );
      }
      let ed = [
          {
            id: "starter",
            title: "Starter",
            desc: "Get started with basic AI chatbot or assistant setup tailored for your business use case.",
            monthlyPrice: 0,
            yearlyPrice: 0,
            buttonText: "Start with AI",
            features: [
              "Up to 1 AI agent (chatbot or voice bot)",
              "500 conversations/month",
              "Pre-built workflows",
              "Basic analytics",
              "Slack or WhatsApp integration",
              "Email support",
            ],
            link: "https://datatroops.ai/contact",
          },
          {
            id: "pro",
            title: "Growth",
            desc: "Launch custom generative AI solutions with workflow automation and smart integrations.",
            monthlyPrice: 10,
            yearlyPrice: 120,
            badge: "Most Popular",
            buttonText: "Upgrade to Pro",
            features: [
              "Up to 5 AI agents (chat, voice, internal copilots)",
              "10,000 conversations/month",
              "LLM fine-tuning included",
              "Custom workflows & RAG setup",
              "CRM/API integration support",
              "Advanced analytics",
              "Priority support",
            ],
            link: "https://datatroops.ai/contact",
          },
          {
            id: "enterprise",
            title: "Enterprise",
            desc: "Enterprise-grade generative AI infrastructure, full customization, and private deployments.",
            monthlyPrice: 15,
            yearlyPrice: 180,
            badge: "Custom Solutions",
            buttonText: "Talk to Sales",
            features: [
              "Unlimited AI agents & conversations",
              "Custom deployment (cloud or on-prem)",
              "Multimodal AI (text, image, voice)",
              "Dedicated success engineer",
              "Enterprise security & compliance",
              "24/7 support with SLA",
              "Governance, SSO, usage controls",
            ],
            link: "https://datatroops.ai/contact",
          },
        ],
        eu = (e) => {
          let {
              id: t,
              title: r,
              desc: s,
              monthlyPrice: l,
              yearlyPrice: n,
              buttonText: o,
              features: d,
              index: u,
              plan: m,
            } = e,
            x =
              "monthly" === m
                ? 0 === l
                  ? 0
                  : l
                : "yearly" === m
                  ? 0 === n
                    ? 0
                    : Math.round((0.8 * n) / 12)
                  : 0;
          return (0, a.jsx)(
            "div",
            {
              className:
                "w-full relative flex flex-col saturate-150 rounded-2xl",
              children: (0, a.jsxs)("div", {
                className: i(
                  "flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
                  "pro" === t ? "border-primary/80" : "border-border/60",
                ),
                children: [
                  "pro" === t &&
                    (0, a.jsx)("div", {
                      className:
                        "max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3 left-1/2 -translate-x-1/2 select-none",
                      children: (0, a.jsx)("span", {
                        className:
                          "flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-white bg-[length:250%_100%] animate-background-shine",
                        children: "Most Popular",
                      }),
                    }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col p-3 w-full",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-xl font-medium",
                        children: r,
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-sm mt-2 text-muted-foreground break-words",
                        children: s,
                      }),
                    ],
                  }),
                  (0, a.jsx)("hr", {
                    className: "shrink-0 border-none w-full h-px bg-border",
                    role: "separator",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-end gap-2",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-end gap-1 w-40",
                            children: [
                              (0, a.jsxs)("span", {
                                className: "text-3xl md:text-4xl font-bold",
                                children: [
                                  "$",
                                  0 === x ? 0 : (0, a.jsx)(ec, { value: x }),
                                ],
                              }),
                              (0, a.jsxs)("span", {
                                className:
                                  "text-lg text-muted-foreground font-medium font-headin",
                                children: ["per ", "month"],
                              }),
                            ],
                          }),
                          (0, a.jsx)(es.M, {
                            children:
                              "free" !== t &&
                              "yearly" === m &&
                              (0, a.jsx)(c.E.span, {
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0 },
                                transition: { duration: 0.2 },
                                "aria-hidden": "true",
                                className:
                                  "text-xs px-2 py-0.5 rounded mb-1 text-foreground bg-primary font-medium",
                                children: "-20%",
                              }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("ul", {
                        className: "flex flex-col gap-2",
                        children: d.map((e, t) =>
                          (0, a.jsxs)(
                            "li",
                            {
                              className: "flex items-center gap-2",
                              children: [
                                (0, a.jsx)(el.Z, {
                                  "aria-hidden": "true",
                                  className: "w-5 h-5 text-primary",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-sm md:text-base text-muted-foreground",
                                  children: e,
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "p-3 mt- h-auto flex w-full items-center",
                    children: (0, a.jsx)(f, {
                      asChild: !0,
                      variant: "pro" === t ? "default" : "tertiary",
                      className:
                        "w-full hover:scale-100 hover:translate-y-0 shadow-none",
                      children: (0, a.jsx)(h.default, {
                        href: "",
                        children: o,
                      }),
                    }),
                  }),
                ],
              }),
            },
            u,
          );
        };
      var em = () =>
        (0, a.jsxs)("div", {
          className:
            "flex flex-col items-center justify-center py-12 md:py-16 lg:py-24  w-full relative",
          children: [
            (0, a.jsx)(d, {
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-center text-center max-w-xl mx-auto",
                children: [
                  (0, a.jsx)(G, { title: "Choose your plan" }),
                  (0, a.jsx)("h2", {
                    className:
                      "text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6",
                    children: "Flexible pricing for AI adoption at every scale",
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-base md:text-lg text-center text-accent-foreground/80 mt-6",
                    children:
                      "Whether you're exploring AI for the first time or scaling enterprise automation — we've got a plan for you.",
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className:
                "mt-8 w-full relative flex flex-col items-center justify-center",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10",
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10",
                }),
                (0, a.jsx)(d, {
                  children: (0, a.jsxs)(ee, {
                    defaultValue: "monthly",
                    className:
                      "w-full flex flex-col items-center justify-center",
                    children: [
                      (0, a.jsxs)(et, {
                        className: "flex w-full justify-center space-x-4",
                        children: [
                          (0, a.jsx)(er, {
                            value: "monthly",
                            className:
                              "data-[state=active]:bg-primary data-[state=active]:text-white py-2 px-4 rounded-t-lg data-[state=active]:border-b-2 data-[state=active]:border-primary text-accent-foreground hover:bg-primary/10",
                            children: "Monthly",
                          }),
                          (0, a.jsx)(er, {
                            value: "yearly",
                            className:
                              "data-[state=active]:bg-primary data-[state=active]:text-white py-2 px-4 rounded-t-lg data-[state=active]:border-b-2 data-[state=active]:border-primary text-accent-foreground hover:bg-primary/10",
                            children: "Yearly",
                          }),
                        ],
                      }),
                      (0, a.jsx)(ea, {
                        value: "monthly",
                        children: (0, a.jsx)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14",
                          children: ed.map((e, t) =>
                            (0, a.jsx)(
                              eu,
                              { index: t, ...e, plan: "monthly" },
                              t,
                            ),
                          ),
                        }),
                      }),
                      (0, a.jsx)(ea, {
                        value: "yearly",
                        children: (0, a.jsx)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14",
                          children: ed.map((e, t) =>
                            (0, a.jsx)(
                              eu,
                              { index: t, ...e, plan: "yearly" },
                              t,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      let eh = [
          {
            name: "Dr. Aravind Rao",
            username: "Founder, AI Nexus",
            review:
              "Generative AI isn't just a breakthrough—it's a new paradigm for how humans and machines collaborate to create.",
            img: "https://randomuser.me/api/portraits/men/75.jpg",
          },
          {
            name: "Meera Thomas",
            username: "CTO, Cognition Labs",
            review:
              "In my 20 years in AI, I’ve never seen innovation move this fast. Generative models are reshaping industries.",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
          },
          {
            name: "Karan Bajaj",
            username: "CEO, Synthmind",
            review:
              "We’re now able to prototype, test, and deploy ideas 10x faster—all thanks to generative AI.",
            img: "https://randomuser.me/api/portraits/men/54.jpg",
          },
          {
            name: "Dr. Laila Sinha",
            username: "Researcher, DeepThink Institute",
            review:
              "What fascinates me is not just what generative AI can do—but how it pushes us to rethink creativity itself.",
            img: "https://randomuser.me/api/portraits/women/72.jpg",
          },
          {
            name: "Anuj Deshmukh",
            username: "AI Lead, AlphaOne",
            review:
              "This isn’t automation. This is augmentation. Generative AI elevates teams and ideas in unprecedented ways.",
            img: "https://randomuser.me/api/portraits/men/62.jpg",
          },
          {
            name: "Nandita Verma",
            username: "Director of AI, Novus Labs",
            review:
              "The best generative AI platforms don’t just generate—they understand. That’s the leap we’ve all been waiting for.",
            img: "https://randomuser.me/api/portraits/women/90.jpg",
          },
          {
            name: "Vikram Goyal",
            username: "Principal Architect, Omnidata",
            review:
              "When used right, generative AI is not a tool—it’s a multiplier. Teams with vision can outpace giants with it.",
            img: "https://randomuser.me/api/portraits/men/77.jpg",
          },
          {
            name: "Sara Iqbal",
            username: "Head of ML, Zenware",
            review:
              "Seeing designers, marketers, and devs all leverage the same AI system is where the magic truly happens.",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
          },
          {
            name: "Prof. Dev Mehta",
            username: "Chair, AI Ethics Council",
            review:
              "The future of generative AI must balance power with responsibility. But its potential is undeniably historic.",
            img: "https://randomuser.me/api/portraits/men/60.jpg",
          },
          {
            name: "Ritika Sharma",
            username: "Product Head, NeuroLayer",
            review:
              "From ideation to launch, our team now co-builds with AI. It’s like having an infinite creative partner.",
            img: "https://randomuser.me/api/portraits/women/63.jpg",
          },
          {
            name: "Siddharth Anand",
            username: "Co-Founder, GenAI Collective",
            review:
              "The next unicorns will be built not on code, but on prompts—and the platforms that power them.",
            img: "https://randomuser.me/api/portraits/men/81.jpg",
          },
          {
            name: "Dr. Amrita Das",
            username: "Advisor, World AI Forum",
            review:
              "We’re watching the birth of an intelligence layer across industries. Generative AI is that foundational.",
            img: "https://randomuser.me/api/portraits/women/66.jpg",
          },
        ],
        ex = eh.slice(0, eh.length / 2),
        ep = eh.slice(eh.length / 2),
        eg = (e) => {
          let { img: t, name: r, username: s, review: l } = e;
          return (0, a.jsxs)("figure", {
            className:
              "relative w-64 cursor-pointer overflow-hidden rounded-xl border border-foreground/5 bg-neutral-50/[.05] hover:bg-neutral-50/[0.2] p-4 transition-all duration-300 ease-in-out",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-row items-center gap-2",
                children: [
                  (0, a.jsx)(w.default, {
                    className: "rounded-full",
                    width: "32",
                    height: "32",
                    alt: "",
                    src: t,
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, a.jsx)("figcaption", {
                        className: "text-sm font-medium text-foreground",
                        children: r,
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xs font-medium text-foreground/40",
                        children: s,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("blockquote", {
                className: "mt-2 text-sm",
                children: l,
              }),
            ],
          });
        };
      var ef = () =>
          (0, a.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full",
            children: [
              (0, a.jsx)(d, {
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center text-center max-w-xl mx-auto",
                  children: [
                    (0, a.jsx)(G, { title: "Our Customers" }),
                    (0, a.jsx)("h2", {
                      className:
                        "text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6",
                      children: "Insights from the Pioneers of Generative AI",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-base md:text-lg text-center text-accent-foreground/80 mt-6",
                      children:
                        "From researchers to founders, here's what global AI leaders think about the power and promise of generative AI.",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(d, {
                children: (0, a.jsx)("div", {
                  className: "mt-16 w-full relative overflow-hidden",
                  children: (0, a.jsxs)("div", {
                    className:
                      "relative flex flex-col items-center justify-center overflow-hidden group",
                    style: {
                      maskImage:
                        "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                    },
                    children: [
                      (0, a.jsx)(z, {
                        pauseOnHover: !0,
                        className:
                          "[--duration:30s] group-hover:[animation-play-state:paused]",
                        children: ex.map((e) =>
                          (0, a.jsx)(eg, { ...e }, e.username),
                        ),
                      }),
                      (0, a.jsx)(z, {
                        pauseOnHover: !0,
                        reverse: !0,
                        className:
                          "[--duration:30s] group-hover:[animation-play-state:paused]",
                        children: ep.map((e) =>
                          (0, a.jsx)(eg, { ...e }, e.username),
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent z-10",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/80 to-transparent z-10",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-y-0 left-0 w-24 backdrop-blur-sm z-20",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-y-0 right-0 w-24 backdrop-blur-sm z-20",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute hidden lg:block top-1/4 left-1/4 w-28 h-28 rounded-full bg-primary/80 -z-10 blur-[6rem]",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute hidden lg:block top-1/4 right-1/4 w-28 h-28 rounded-full bg-primary/80 -z-10 blur-[6rem]",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ev = () =>
          (0, a.jsx)("div", {
            className:
              "flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative",
            children: (0, a.jsx)(d, {
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center w-full z-20",
                    children: [
                      (0, a.jsxs)("h2", {
                        className:
                          "text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6",
                        children: [
                          "Elevate your ",
                          (0, a.jsx)("br", { className: "hidden md:block" }),
                          " experience with us",
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6",
                        children:
                          "Ready to get started? Sign up now and start your journey with us. We are here to help you grow.",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6",
                        children: [
                          (0, a.jsx)(f, {
                            asChild: !0,
                            size: "lg",
                            className: "w-full md:w-max",
                            children: (0, a.jsx)(h.default, {
                              href: "/contact-us",
                              children: "Get Started",
                            }),
                          }),
                          (0, a.jsx)(f, {
                            asChild: !0,
                            size: "lg",
                            variant: "secondary",
                            className: "w-full md:w-max",
                            children: (0, a.jsx)(h.default, {
                              href: "/about-us",
                              children: "Learn More",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(v, {}),
                  (0, a.jsx)(C, {
                    refresh: !0,
                    ease: 100,
                    color: "#d4d4d8",
                    quantity: 200,
                    className: "size-full absolute inset-0",
                  }),
                ],
              }),
            }),
          }),
        eC = r(55430),
        eb = r(97830),
        ej = r(20500),
        ew = r(47390),
        ey = r(11240),
        eN = r(24241),
        eH = r(29338);
      function eM() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, n.m6)((0, l.W)(t));
      }
      let eZ = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: eM(
            "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
            r,
          ),
          ...s,
        });
      });
      (eZ.displayName = "Card"),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: eM("flex flex-col space-y-1.5 p-6", r),
            ...s,
          });
        }).displayName = "CardHeader"),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)("h3", {
            ref: t,
            className: eM(
              "text-2xl font-semibold leading-none tracking-tight",
              r,
            ),
            ...s,
          });
        }).displayName = "CardTitle"),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)("p", {
            ref: t,
            className: eM("text-sm text-muted-foreground", r),
            ...s,
          });
        }).displayName = "CardDescription");
      let eV = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: eM("p-6 pt-0", r),
          ...s,
        });
      });
      (eV.displayName = "CardContent"),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: eM("flex items-center p-6 pt-0", r),
            ...s,
          });
        }).displayName = "CardFooter");
      let eL = [
        {
          id: 1,
          title: "AI Chatbots",
          description:
            "Deliver 24/7 intelligent support across your website, app, or WhatsApp with AI chatbots that understand your customers and respond in natural language.",
          useCases:
            "Customer support, lead qualification, product discovery, onboarding",
          icon: eC.Z,
          iconColor: "text-blue-400",
          bgColor: "bg-blue-500/20",
          gradientFrom: "from-blue-500/10",
          gradientTo: "to-blue-600/5",
        },
        {
          id: 2,
          title: "Voice AI Assistants",
          description:
            "Deploy voice-enabled bots that engage users via phone or smart devices. Automate appointment bookings, reminders, or support over calls.",
          useCases: "Healthcare, retail, telecom, travel",
          icon: eb.Z,
          iconColor: "text-green-400",
          bgColor: "bg-green-500/20",
          gradientFrom: "from-green-500/10",
          gradientTo: "to-green-600/5",
        },
        {
          id: 3,
          title: "Meeting AI Assistant",
          description:
            "Capture the essence of every meeting — transcriptions, action items, decisions — and turn them into shareable summaries.",
          useCases: "Sales calls, internal standups, client meetings",
          icon: ej.Z,
          iconColor: "text-purple-400",
          bgColor: "bg-purple-500/20",
          gradientFrom: "from-purple-500/10",
          gradientTo: "to-purple-600/5",
        },
        {
          id: 4,
          title: "AI FAQ & Knowledgebase Bot",
          description:
            "Enable your users or employees to ask natural-language questions and get instant, accurate answers directly from your documentation or internal wiki.",
          useCases:
            "Customer self-service, internal IT support, HR policy Q&A, SaaS onboarding",
          icon: ew.Z,
          iconColor: "text-orange-400",
          bgColor: "bg-orange-500/20",
          gradientFrom: "from-orange-500/10",
          gradientTo: "to-orange-600/5",
        },
        {
          id: 5,
          title: "AI Interview Assistant",
          description:
            "Simulate real-world interview conversations, auto-assess candidate answers, and generate detailed feedback or scoring reports.",
          useCases: "HR automation, campus hiring, tech interview prep",
          icon: ey.Z,
          iconColor: "text-cyan-400",
          bgColor: "bg-cyan-500/20",
          gradientFrom: "from-cyan-500/10",
          gradientTo: "to-cyan-600/5",
        },
        {
          id: 6,
          title: "Multilingual Support Bot",
          description:
            "Offer seamless, localized customer support in over 100 languages with a single AI model trained on your base content.",
          useCases: "Global SaaS, ecommerce, travel, government portals",
          icon: eN.Z,
          iconColor: "text-pink-400",
          bgColor: "bg-pink-500/20",
          gradientFrom: "from-pink-500/10",
          gradientTo: "to-pink-600/5",
        },
      ];
      function eA() {
        return (0, a.jsx)("section", {
          className: "min-h-screen relative overflow-hidden",
          children: (0, a.jsxs)("div", {
            className:
              "container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10",
            children: [
              (0, a.jsxs)(c.E.div, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                className: "text-center mb-12 sm:mb-16 lg:mb-20",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6",
                    children: [
                      (0, a.jsx)(eH.Z, {
                        className: "w-4 h-4 text-yellow-400 mr-2",
                      }),
                      (0, a.jsx)("span", {
                        className: "text-sm font-medium text-gray-300",
                        children: "Next-Generation AI Solutions",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("h1", {
                    className:
                      "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight",
                    children: [
                      "Conversational AI &",
                      (0, a.jsx)("br", { className: "hidden sm:block" }),
                      (0, a.jsx)("span", {
                        className:
                          "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                        children: "Assistants",
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8",
                    children:
                      "Transform your business with intelligent AI assistants that understand, engage, and deliver exceptional experiences across every touchpoint.",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8",
                children: eL.map((e, t) => {
                  let r = e.icon;
                  return (0, a.jsx)(
                    c.E.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: {
                        duration: 0.6,
                        delay: 0.1 * t,
                        ease: "easeOut",
                      },
                      whileHover: { y: -8, transition: { duration: 0.3 } },
                      className: "group",
                      children: (0, a.jsx)(eZ, {
                        className:
                          "\n                bg-gradient-to-b from-violet-950/25 to-transparent\n                hover:bg-transparent\n                  border border-gray-800/50 \n                  hover:border-gray-700/70 \n                  transition-all duration-500 \n                  hover:shadow-2xl hover:shadow-blue-500/10\n                  backdrop-blur-sm\n                  h-full\n                ",
                        children: (0, a.jsxs)(eV, {
                          className: "p-6 sm:p-8 h-full flex flex-col",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "\n                      h-14 w-14 rounded-xl ".concat(
                                  e.bgColor,
                                  " \n                      flex items-center justify-center mb-6\n                      group-hover:scale-110 transition-transform duration-300\n                      shadow-lg\n                    ",
                                ),
                              children: (0, a.jsx)(r, {
                                className: "h-7 w-7 ".concat(e.iconColor),
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex-1",
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300",
                                  children: e.title,
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300",
                                  children: e.description,
                                }),
                                (0, a.jsxs)("div", {
                                  className: "mt-auto",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700/50 mb-4",
                                      children: (0, a.jsx)("span", {
                                        className:
                                          "text-xs font-medium text-gray-300",
                                        children: "USE CASES",
                                      }),
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-sm text-gray-500 font-medium",
                                      children: e.useCases,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                              children: (0, a.jsx)("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center",
                                children: (0, a.jsx)(m.Z, {
                                  className: "w-4 h-4 text-blue-400",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    },
                    e.id,
                  );
                }),
              }),
              (0, a.jsx)(c.E.div, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 },
                className: "text-center mt-16 sm:mt-20 lg:mt-24",
                children: (0, a.jsxs)("div", {
                  className:
                    "bg-gradient-to-r from-[#0a1020] to-[#0f1419] rounded-2xl border border-gray-800/50 p-8 sm:p-12 backdrop-blur-sm",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white",
                      children: "Ready to Transform Your Business?",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-gray-400 text-lg mb-8 max-w-2xl mx-auto",
                      children:
                        "Join thousands of companies already using our AI solutions to enhance customer experience and drive growth.",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col sm:flex-row gap-4 justify-center",
                      children: [
                        (0, a.jsx)(f, {
                          className:
                            "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",
                          children: "Start Free Trial",
                        }),
                        (0, a.jsx)(f, {
                          variant: "outline",
                          className:
                            "border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold",
                          children: "Schedule Demo",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var ek = () =>
        (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(u, {
            children: [
              (0, a.jsx)(C, {
                refresh: !0,
                ease: 80,
                color: "#d4d4d8",
                quantity: 100,
                className: "absolute inset-0 w-full h-full",
              }),
              (0, a.jsxs)(o, {
                className: "py-20 relative pt-6",
                children: [
                  (0, a.jsx)(d, {
                    className: "relative",
                    children: (0, a.jsx)(j, {}),
                  }),
                  (0, a.jsx)(d, {
                    className: "py-8 lg:py-20",
                    children: (0, a.jsx)(F, {}),
                  }),
                  (0, a.jsx)(B, {}),
                  (0, a.jsx)(J, {}),
                  (0, a.jsx)(eA, {}),
                  (0, a.jsx)(em, {}),
                  (0, a.jsx)(ef, {}),
                  (0, a.jsx)(ev, {}),
                ],
              }),
            ],
          }),
        });
    },
  },
  function (e) {
    e.O(0, [648, 138, 950, 164, 751, 93, 971, 23, 744], function () {
      return e((e.s = 8957));
    }),
      (_N_E = e.O());
  },
]);
