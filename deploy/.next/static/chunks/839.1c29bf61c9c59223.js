"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [839],
  {
    72684: function (e, t, n) {
      n.d(t, {
        W: function () {
          return a;
        },
      });
      var r = n(19047),
        u = n(76159),
        o = n(15447);
      function i(e, t) {
        [...t].reverse().forEach((n) => {
          let r = e.getVariant(n);
          r && (0, u.C)(e, r),
            e.variantChildren &&
              e.variantChildren.forEach((e) => {
                i(e, t);
              });
        });
      }
      function a() {
        let e = !1,
          t = new Set(),
          n = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(n, u) {
              (0, r.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              );
              let i = [];
              return (
                t.forEach((e) => {
                  i.push((0, o.d)(e, n, { transitionOverride: u }));
                }),
                Promise.all(i)
              );
            },
            set: (n) => (
              (0, r.k)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              ),
              t.forEach((e) => {
                Array.isArray(n)
                  ? i(e, n)
                  : "string" == typeof n
                    ? i(e, [n])
                    : (0, u.C)(e, n);
              })
            ),
            stop() {
              t.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), n.stop();
              }
            ),
          };
        return n;
      }
    },
    72289: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
        _: function () {
          return a;
        },
      });
      var r = n(72684),
        u = n(30458),
        o = n(9033);
      function i() {
        let e = (0, u.h)(r.W);
        return (0, o.L)(e.mount, []), e;
      }
      let a = i;
    },
    34446: function (e, t, n) {
      n.d(t, {
        M: function () {
          return g;
        },
      });
      var r = n(57437),
        u = n(2265),
        o = n(67797),
        i = n(30458),
        a = n(29791);
      class c extends u.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function l(e) {
        let { children: t, isPresent: n } = e,
          o = (0, u.useId)(),
          i = (0, u.useRef)(null),
          l = (0, u.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: s } = (0, u.useContext)(a._);
        return (
          (0, u.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: u } = l.current;
            if (n || !i.current || !e || !t) return;
            i.current.dataset.motionPopId = o;
            let a = document.createElement("style");
            return (
              s && (a.nonce = s),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(r, "px !important;\n            left: ")
                    .concat(u, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [n]),
          (0, r.jsx)(c, {
            isPresent: n,
            childRef: i,
            sizeRef: l,
            children: u.cloneElement(t, { ref: i }),
          })
        );
      }
      let s = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: a,
            onExitComplete: c,
            custom: s,
            presenceAffectsLayout: d,
            mode: p,
          } = e,
          m = (0, i.h)(f),
          h = (0, u.useId)(),
          v = (0, u.useMemo)(
            () => ({
              id: h,
              initial: n,
              isPresent: a,
              custom: s,
              onExitComplete: (e) => {
                for (let t of (m.set(e, !0), m.values())) if (!t) return;
                c && c();
              },
              register: (e) => (m.set(e, !1), () => m.delete(e)),
            }),
            d ? [Math.random()] : [a],
          );
        return (
          (0, u.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1));
          }, [a]),
          u.useEffect(() => {
            a || m.size || !c || c();
          }, [a]),
          "popLayout" === p &&
            (t = (0, r.jsx)(l, { isPresent: a, children: t })),
          (0, r.jsx)(o.O.Provider, { value: v, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var d = n(5050),
        p = n(19047);
      let m = (e) => e.key || "";
      function h(e) {
        let t = [];
        return (
          u.Children.forEach(e, (e) => {
            (0, u.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var v = n(9033);
      let g = (e) => {
        let {
          children: t,
          exitBeforeEnter: n,
          custom: o,
          initial: a = !0,
          onExitComplete: c,
          presenceAffectsLayout: l = !0,
          mode: f = "sync",
        } = e;
        (0, p.k)(!n, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, u.useMemo)(() => h(t), [t]),
          y = g.map(m),
          w = (0, u.useRef)(!0),
          C = (0, u.useRef)(g),
          x = (0, i.h)(() => new Map()),
          [E, M] = (0, u.useState)(g),
          [S, b] = (0, u.useState)(g);
        (0, v.L)(() => {
          (w.current = !1), (C.current = g);
          for (let e = 0; e < S.length; e++) {
            let t = m(S[e]);
            y.includes(t) ? x.delete(t) : !0 !== x.get(t) && x.set(t, !1);
          }
        }, [S, y.length, y.join("-")]);
        let I = [];
        if (g !== E) {
          let e = [...g];
          for (let t = 0; t < S.length; t++) {
            let n = S[t],
              r = m(n);
            y.includes(r) || (e.splice(t, 0, n), I.push(n));
          }
          "wait" === f && I.length && (e = I), b(h(e)), M(g);
          return;
        }
        let { forceRender: R } = (0, u.useContext)(d.p);
        return (0, r.jsx)(r.Fragment, {
          children: S.map((e) => {
            let t = m(e),
              n = g === S || y.includes(t);
            return (0, r.jsx)(
              s,
              {
                isPresent: n,
                initial: (!w.current || !!a) && void 0,
                custom: n ? void 0 : o,
                presenceAffectsLayout: l,
                mode: f,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!x.has(t)) return;
                      x.set(t, !0);
                      let e = !0;
                      x.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == R || R(), b(C.current), c && c());
                    },
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
    42839: function (e, t, n) {
      let r, u;
      n.r(t),
        n.d(t, {
          AcceleratedAnimation: function () {
            return tn.y;
          },
          AnimatePresence: function () {
            return s.M;
          },
          AnimateSharedLayout: function () {
            return tP;
          },
          DeprecatedLayoutGroupContext: function () {
            return E;
          },
          DragControls: function () {
            return eB;
          },
          FlatTree: function () {
            return tw.E;
          },
          LayoutGroup: function () {
            return k;
          },
          LayoutGroupContext: function () {
            return x.p;
          },
          LazyMotion: function () {
            return w;
          },
          MotionConfig: function () {
            return v;
          },
          MotionConfigContext: function () {
            return p._;
          },
          MotionContext: function () {
            return tv.v;
          },
          MotionGlobalConfig: function () {
            return tt.c;
          },
          MotionValue: function () {
            return tW.Hg;
          },
          PresenceContext: function () {
            return tg.O;
          },
          Reorder: function () {
            return o;
          },
          SwitchLayoutGroupContext: function () {
            return ty.g;
          },
          VisualElement: function () {
            return e$.l;
          },
          addPointerEvent: function () {
            return nt.a;
          },
          addPointerInfo: function () {
            return nn.s;
          },
          addScaleCorrector: function () {
            return eq.B;
          },
          animate: function () {
            return eT;
          },
          animateValue: function () {
            return e3.y;
          },
          animateVisualElement: function () {
            return eW.d;
          },
          animationControls: function () {
            return eu.W;
          },
          animations: function () {
            return P.s;
          },
          anticipate: function () {
            return tQ.L;
          },
          backIn: function () {
            return t0.G2;
          },
          backInOut: function () {
            return t0.XL;
          },
          backOut: function () {
            return t0.CG;
          },
          buildTransform: function () {
            return e5.P;
          },
          calcLength: function () {
            return t6.JO;
          },
          cancelFrame: function () {
            return S.Pn;
          },
          cancelSync: function () {
            return tq;
          },
          circIn: function () {
            return t1.Z7;
          },
          circInOut: function () {
            return t1.X7;
          },
          circOut: function () {
            return t1.Bn;
          },
          clamp: function () {
            return tN.u;
          },
          color: function () {
            return e8.$;
          },
          complex: function () {
            return e6.P;
          },
          createBox: function () {
            return tx.dO;
          },
          createRendererMotionComponent: function () {
            return eN.B;
          },
          createScopedAnimate: function () {
            return eL;
          },
          cubicBezier: function () {
            return t4._;
          },
          delay: function () {
            return t5.g;
          },
          disableInstantTransitions: function () {
            return e2;
          },
          distance: function () {
            return t3.T;
          },
          distance2D: function () {
            return t3.y;
          },
          domAnimation: function () {
            return T;
          },
          domMax: function () {
            return W;
          },
          domMin: function () {
            return V;
          },
          easeIn: function () {
            return t7.YQ;
          },
          easeInOut: function () {
            return t7.mZ;
          },
          easeOut: function () {
            return t7.Vv;
          },
          filterProps: function () {
            return m.L;
          },
          findSpring: function () {
            return th.Fb;
          },
          frame: function () {
            return S.Wi;
          },
          frameData: function () {
            return S.frameData;
          },
          inView: function () {
            return tG.j;
          },
          interpolate: function () {
            return t8.s;
          },
          invariant: function () {
            return ec.k;
          },
          isBrowser: function () {
            return nr.j;
          },
          isDragActive: function () {
            return ne.gD;
          },
          isMotionComponent: function () {
            return eK;
          },
          isMotionValue: function () {
            return H.i;
          },
          isValidMotionProp: function () {
            return eF.Z;
          },
          m: function () {
            return l;
          },
          makeUseVisualState: function () {
            return tC.t;
          },
          mirrorEasing: function () {
            return t2.o;
          },
          mix: function () {
            return tX.C;
          },
          motion: function () {
            return i.E;
          },
          motionValue: function () {
            return tW.BX;
          },
          optimizedAppearDataAttribute: function () {
            return ti.M;
          },
          pipe: function () {
            return tK.z;
          },
          progress: function () {
            return eC.Y;
          },
          px: function () {
            return te.px;
          },
          resolveMotionValue: function () {
            return B.b;
          },
          reverseEasing: function () {
            return t9.M;
          },
          scroll: function () {
            return tB;
          },
          scrollInfo: function () {
            return t_.J;
          },
          spring: function () {
            return eh.S;
          },
          stagger: function () {
            return tJ;
          },
          startOptimizedAppearAnimation: function () {
            return tm;
          },
          steps: function () {
            return S.S6;
          },
          sync: function () {
            return t$;
          },
          transform: function () {
            return tY.v;
          },
          unwrapMotionComponent: function () {
            return eZ;
          },
          useAnimate: function () {
            return ej;
          },
          useAnimation: function () {
            return eD._;
          },
          useAnimationControls: function () {
            return eD.E;
          },
          useAnimationFrame: function () {
            return Z;
          },
          useCycle: function () {
            return e_;
          },
          useDeprecatedAnimatedState: function () {
            return tb;
          },
          useDeprecatedInvertedScale: function () {
            return tA;
          },
          useDomEvent: function () {
            return eY;
          },
          useDragControls: function () {
            return ez;
          },
          useElementScroll: function () {
            return X;
          },
          useForceUpdate: function () {
            return b;
          },
          useInView: function () {
            return eU.Y;
          },
          useInstantLayoutTransition: function () {
            return e0;
          },
          useInstantTransition: function () {
            return e4;
          },
          useIsPresent: function () {
            return eH.hO;
          },
          useIsomorphicLayoutEffect: function () {
            return M.L;
          },
          useMotionTemplate: function () {
            return U;
          },
          useMotionValue: function () {
            return _.c;
          },
          useMotionValueEvent: function () {
            return J;
          },
          usePresence: function () {
            return eH.oO;
          },
          useReducedMotion: function () {
            return en;
          },
          useReducedMotionConfig: function () {
            return er;
          },
          useResetProjection: function () {
            return e9;
          },
          useScroll: function () {
            return N.v;
          },
          useSpring: function () {
            return z.q;
          },
          useTime: function () {
            return $;
          },
          useTransform: function () {
            return G.H;
          },
          useUnmountEffect: function () {
            return eo;
          },
          useVelocity: function () {
            return Y;
          },
          useViewportScroll: function () {
            return K;
          },
          useWillChange: function () {
            return Q;
          },
          visualElementStore: function () {
            return ea.R;
          },
          warning: function () {
            return ec.K;
          },
          wrap: function () {
            return eE;
          },
        });
      var o = {};
      n.r(o),
        n.d(o, {
          Group: function () {
            return tV;
          },
          Item: function () {
            return tD;
          },
        });
      var i = n(14950),
        a = n(56863);
      let c = (0, n(12523).x)(),
        l = (0, a.c)(c);
      var s = n(34446),
        f = n(57437),
        d = n(2265),
        p = n(29791),
        m = n(7075),
        h = n(30458);
      function v(e) {
        let { children: t, isValidProp: n, ...r } = e;
        n && (0, m.K)(n),
          ((r = { ...(0, d.useContext)(p._), ...r }).isStatic = (0, h.h)(
            () => r.isStatic,
          ));
        let u = (0, d.useMemo)(
          () => r,
          [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion],
        );
        return (0, f.jsx)(p._.Provider, { value: u, children: t });
      }
      var g = n(36539),
        y = n(344);
      function w(e) {
        let { children: t, features: n, strict: r = !1 } = e,
          [, u] = (0, d.useState)(!C(n)),
          o = (0, d.useRef)(void 0);
        if (!C(n)) {
          let { renderer: e, ...t } = n;
          (o.current = e), (0, y.K)(t);
        }
        return (
          (0, d.useEffect)(() => {
            C(n) &&
              n().then((e) => {
                let { renderer: t, ...n } = e;
                (0, y.K)(n), (o.current = t), u(!0);
              });
          }, []),
          (0, f.jsx)(g.u.Provider, {
            value: { renderer: o.current, strict: r },
            children: t,
          })
        );
      }
      function C(e) {
        return "function" == typeof e;
      }
      var x = n(5050);
      let E = (0, d.createContext)(null);
      var M = n(9033),
        S = n(86219);
      function b() {
        let e = (function () {
            let e = (0, d.useRef)(!1);
            return (
              (0, M.L)(
                () => (
                  (e.current = !0),
                  () => {
                    e.current = !1;
                  }
                ),
                [],
              ),
              e
            );
          })(),
          [t, n] = (0, d.useState)(0),
          r = (0, d.useCallback)(() => {
            e.current && n(t + 1);
          }, [t]);
        return [(0, d.useCallback)(() => S.Wi.postRender(r), [r]), t];
      }
      let I = (e) => !e.isLayoutDirty && e.willUpdate(!1),
        R = (e) => !0 === e,
        A = (e) => R(!0 === e) || "id" === e,
        k = (e) => {
          let { children: t, id: n, inherit: r = !0 } = e,
            u = (0, d.useContext)(x.p),
            o = (0, d.useContext)(E),
            [i, a] = b(),
            c = (0, d.useRef)(null),
            l = u.id || o;
          null === c.current &&
            (A(r) && l && (n = n ? l + "-" + n : l),
            (c.current = {
              id: n,
              group:
                (R(r) && u.group) ||
                (function () {
                  let e = new Set(),
                    t = new WeakMap(),
                    n = () => e.forEach(I);
                  return {
                    add: (r) => {
                      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
                    },
                    remove: (r) => {
                      e.delete(r);
                      let u = t.get(r);
                      u && (u(), t.delete(r)), n();
                    },
                    dirty: n,
                  };
                })(),
            }));
          let s = (0, d.useMemo)(() => ({ ...c.current, forceRender: i }), [a]);
          return (0, f.jsx)(x.p.Provider, { value: s, children: t });
        };
      var P = n(99666),
        O = n(20085);
      let V = { renderer: O.b, ...P.s };
      var L = n(45859);
      let T = { renderer: O.b, ...P.s, ...L.E };
      var j = n(34034),
        D = n(61865);
      let W = { ...T, ...j.o, ...D.b };
      var _ = n(45282),
        F = n(28565),
        H = n(77599);
      function U(e, ...t) {
        let n = e.length;
        return (0, F.N)(t.filter(H.i), function () {
          let r = "";
          for (let u = 0; u < n; u++) {
            r += e[u];
            let n = t[u];
            n && (r += (0, H.i)(n) ? n.get() : n);
          }
          return r;
        });
      }
      var B = n(32404),
        G = n(32679),
        z = n(26391);
      function J(e, t, n) {
        (0, d.useInsertionEffect)(() => e.on(t, n), [e, t, n]);
      }
      function Y(e) {
        let t = (0, _.c)(e.getVelocity()),
          n = () => {
            let r = e.getVelocity();
            t.set(r), r && S.Wi.update(n);
          };
        return (
          J(e, "change", () => {
            S.Wi.update(n, !1, !0);
          }),
          t
        );
      }
      var N = n(71994);
      function X(e) {
        return (0, N.v)({ container: e });
      }
      function K() {
        return (0, N.v)();
      }
      function Z(e) {
        let t = (0, d.useRef)(0),
          { isStatic: n } = (0, d.useContext)(p._);
        (0, d.useEffect)(() => {
          if (n) return;
          let r = ({ timestamp: n, delta: r }) => {
            t.current || (t.current = n), e(n - t.current, r);
          };
          return S.Wi.update(r, !0), () => (0, S.Pn)(r);
        }, [e]);
      }
      function $() {
        let e = (0, _.c)(0);
        return Z((t) => e.set(t)), e;
      }
      var q = n(79447);
      function Q() {
        return (0, h.h)(() => new q.L("auto"));
      }
      var ee = n(53629),
        et = n(31016);
      function en() {
        et.O.current || (0, ee.A)();
        let [e] = (0, d.useState)(et.n.current);
        return e;
      }
      function er() {
        let e = en(),
          { reducedMotion: t } = (0, d.useContext)(p._);
        return "never" !== t && ("always" === t || e);
      }
      var eu = n(72684);
      function eo(e) {
        return (0, d.useEffect)(() => () => e(), []);
      }
      var ei = n(77451),
        ea = n(26283),
        ec = n(19047),
        el = n(11946),
        es = n(72994),
        ef = n(48170),
        ed = n(82714),
        ep = n(39440),
        em = n(89334),
        eh = n(65122),
        ev = n(49653),
        eg = n(80557),
        ey = n(92007),
        ew = n(29924),
        eC = n(33217);
      function ex(e, t, n, r) {
        var u;
        return "number" == typeof t
          ? t
          : t.startsWith("-") || t.startsWith("+")
            ? Math.max(0, e + parseFloat(t))
            : "<" === t
              ? n
              : null !== (u = r.get(t)) && void 0 !== u
                ? u
                : e;
      }
      let eE = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      };
      var eM = n(19379),
        eS = n(28746),
        eb = n(75004);
      function eI(e, t) {
        return e.at !== t.at
          ? e.at - t.at
          : null === e.value
            ? 1
            : null === t.value
              ? -1
              : 0;
      }
      function eR(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e);
      }
      function eA(e, t) {
        return t[e] || (t[e] = []), t[e];
      }
      let ek = (e) => "number" == typeof e,
        eP = (e) => e.every(ek);
      function eO(e, t, n, r) {
        let u = (0, ei.I)(e, r),
          o = u.length;
        (0, ec.k)(!!o, "No valid element provided.");
        let i = [];
        for (let e = 0; e < o; e++) {
          let r = u[e];
          ea.R.has(r) ||
            (function (e) {
              let t = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                n = (0, ef.v)(e) ? new ed.e(t) : new ep.W(t);
              n.mount(e), ea.R.set(e, n);
            })(r);
          let a = ea.R.get(r),
            c = { ...n };
          "function" == typeof c.delay && (c.delay = c.delay(e, o)),
            i.push(...(0, es.w)(a, { ...t, transition: c }, {}));
        }
        return new el.s(i);
      }
      let eV = (e) => Array.isArray(e) && Array.isArray(e[0]),
        eL = (e) =>
          function (t, n, r) {
            let u;
            return (
              (u = eV(t)
                ? (function (e, t, n) {
                    let r = [];
                    return (
                      (function (
                        e,
                        { defaultTransition: t = {}, ...n } = {},
                        r,
                      ) {
                        let u = t.duration || 0.3,
                          o = new Map(),
                          i = new Map(),
                          a = {},
                          c = new Map(),
                          l = 0,
                          s = 0,
                          f = 0;
                        for (let n = 0; n < e.length; n++) {
                          let o = e[n];
                          if ("string" == typeof o) {
                            c.set(o, s);
                            continue;
                          }
                          if (!Array.isArray(o)) {
                            c.set(o.name, ex(s, o.at, l, c));
                            continue;
                          }
                          let [d, p, m = {}] = o;
                          void 0 !== m.at && (s = ex(s, m.at, l, c));
                          let h = 0,
                            v = (e, n, r, o = 0, i = 0) => {
                              let a = Array.isArray(e) ? e : [e],
                                {
                                  delay: c = 0,
                                  times: l = (0, ey.Y)(a),
                                  type: d = "keyframes",
                                  ...p
                                } = n,
                                { ease: m = t.ease || "easeOut", duration: v } =
                                  n,
                                g = "function" == typeof c ? c(o, i) : c,
                                y = a.length;
                              if (y <= 2 && "spring" === d) {
                                let e = 100;
                                2 === y && eP(a) && (e = Math.abs(a[1] - a[0]));
                                let t = { ...p };
                                void 0 !== v && (t.duration = (0, eg.w)(v));
                                let n = (function (e, t = 100) {
                                  let n = (0, eh.S)({
                                      keyframes: [0, t],
                                      ...e,
                                    }),
                                    r = Math.min((0, ev.i)(n), ev.E);
                                  return {
                                    type: "keyframes",
                                    ease: (e) => n.next(r * e).value / t,
                                    duration: (0, eg.X)(r),
                                  };
                                })(t, e);
                                (m = n.ease), (v = n.duration);
                              }
                              null != v || (v = u);
                              let w = s + g,
                                C = w + v;
                              1 === l.length && 0 === l[0] && (l[1] = 1);
                              let x = l.length - a.length;
                              x > 0 && (0, ew.c)(l, x),
                                1 === a.length && a.unshift(null),
                                (function (e, t, n, r, u, o) {
                                  !(function (e, t, n) {
                                    for (let r = 0; r < e.length; r++) {
                                      let u = e[r];
                                      u.at > t &&
                                        u.at < n &&
                                        ((0, eS.cl)(e, u), r--);
                                    }
                                  })(e, u, o);
                                  for (let a = 0; a < t.length; a++) {
                                    var i;
                                    e.push({
                                      value: t[a],
                                      at: (0, eb.t)(u, o, r[a]),
                                      easing:
                                        ((i = a),
                                        (0, eM.N)(n)
                                          ? n[eE(0, n.length, i)]
                                          : n),
                                    });
                                  }
                                })(r, a, m, l, w, C),
                                (h = Math.max(g + v, h)),
                                (f = Math.max(C, f));
                            };
                          if ((0, H.i)(d)) v(p, m, eA("default", eR(d, i)));
                          else {
                            let e = (0, ei.I)(d, r, a),
                              t = e.length;
                            for (let n = 0; n < t; n++) {
                              let r = eR(e[n], i);
                              for (let e in p)
                                v(
                                  p[e],
                                  m[e] ? { ...m, ...m[e] } : { ...m },
                                  eA(e, r),
                                  n,
                                  t,
                                );
                            }
                          }
                          (l = s), (s += h);
                        }
                        return (
                          i.forEach((e, r) => {
                            for (let u in e) {
                              let i = e[u];
                              i.sort(eI);
                              let a = [],
                                c = [],
                                l = [];
                              for (let e = 0; e < i.length; e++) {
                                let { at: t, value: n, easing: r } = i[e];
                                a.push(n),
                                  c.push((0, eC.Y)(0, f, t)),
                                  l.push(r || "easeOut");
                              }
                              0 !== c[0] &&
                                (c.unshift(0),
                                a.unshift(a[0]),
                                l.unshift("easeInOut")),
                                1 !== c[c.length - 1] &&
                                  (c.push(1), a.push(null)),
                                o.has(r) ||
                                  o.set(r, { keyframes: {}, transition: {} });
                              let s = o.get(r);
                              (s.keyframes[u] = a),
                                (s.transition[u] = {
                                  ...t,
                                  duration: f,
                                  ease: l,
                                  times: c,
                                  ...n,
                                });
                            }
                          }),
                          o
                        );
                      })(e, t, n).forEach(
                        ({ keyframes: e, transition: t }, n) => {
                          let u;
                          (u = (0, H.i)(n)
                            ? (0, em.D)(n, e.default, t.default)
                            : eO(n, e, t)),
                            r.push(u);
                        },
                      ),
                      new el.s(r)
                    );
                  })(t, n, e)
                : "object" != typeof n || Array.isArray(n)
                  ? (0, em.D)(t, n, r)
                  : eO(t, n, r, e)),
              e && e.animations.push(u),
              u
            );
          },
        eT = eL();
      function ej() {
        let e = (0, h.h)(() => ({ current: null, animations: [] })),
          t = (0, h.h)(() => eL(e));
        return (
          eo(() => {
            e.animations.forEach((e) => e.stop());
          }),
          [e, t]
        );
      }
      var eD = n(72289),
        eW = n(15447);
      function e_(...e) {
        let t = (0, d.useRef)(0),
          [n, r] = (0, d.useState)(e[t.current]);
        return [
          n,
          (0, d.useCallback)(
            (n) => {
              (t.current =
                "number" != typeof n ? eE(0, e.length, t.current + 1) : n),
                r(e[t.current]);
            },
            [e.length, ...e],
          ),
        ];
      }
      var eF = n(14982),
        eH = n(73241),
        eU = n(55382);
      class eB {
        constructor() {
          this.componentControls = new Set();
        }
        subscribe(e) {
          return (
            this.componentControls.add(e),
            () => this.componentControls.delete(e)
          );
        }
        start(e, t) {
          this.componentControls.forEach((n) => {
            n.start(e.nativeEvent || e, t);
          });
        }
      }
      let eG = () => new eB();
      function ez() {
        return (0, h.h)(eG);
      }
      var eJ = n(23731);
      function eY(e, t, n, r) {
        (0, d.useEffect)(() => {
          let u = e.current;
          if (n && u) return (0, eJ.E)(u, t, n, r);
        }, [e, t, n, r]);
      }
      var eN = n(13129),
        eX = n(23780);
      function eK(e) {
        return null !== e && "object" == typeof e && eX.a in e;
      }
      function eZ(e) {
        if (eK(e)) return e[eX.a];
      }
      var e$ = n(55446),
        eq = n(57290),
        eQ = n(91158);
      function e0() {
        return e1;
      }
      function e1(e) {
        eQ.J.current &&
          ((eQ.J.current.isUpdating = !1),
          eQ.J.current.blockUpdate(),
          e && e());
      }
      var e7 = n(74097);
      function e4() {
        let [e, t] = b(),
          n = (0, d.useRef)();
        return (
          (0, d.useEffect)(() => {
            S.Wi.postRender(() =>
              S.Wi.postRender(() => {
                t === n.current && (e7.c.current = !1);
              }),
            );
          }, [t]),
          (r) => {
            e1(() => {
              (e7.c.current = !0), e(), r(), (n.current = t + 1);
            });
          }
        );
      }
      function e2() {
        e7.c.current = !1;
      }
      function e9() {
        return (0, d.useCallback)(() => {
          let e = eQ.J.current;
          e && e.resetTree();
        }, []);
      }
      var e5 = n(78186),
        e3 = n(13950),
        e8 = n(50146),
        e6 = n(83646),
        te = n(75480),
        tt = n(565),
        tn = n(65637),
        tr = n(26019);
      let tu = (e, t) => {
        let n = tr.G.has(t) ? "transform" : t;
        return `${e}: ${n}`;
      };
      var to = n(88683),
        ti = n(65908);
      let ta = new Map(),
        tc = new Set();
      function tl(e, t, n) {
        let r = tu(e, t),
          u = ta.get(r);
        if (!u) return null;
        let { animation: o, startTime: i } = u;
        function a() {
          var r;
          null === (r = window.MotionCancelOptimisedAnimation) ||
            void 0 === r ||
            r.call(window, e, t, n);
        }
        return ((o.onfinish = a), null === i || window.MotionHandoffIsComplete)
          ? (a(), null)
          : i;
      }
      var ts = n(69276),
        tf = n(2087);
      let td = new Set();
      function tp() {
        td.forEach((e) => {
          e.animation.play(), (e.animation.startTime = e.startTime);
        }),
          td.clear();
      }
      function tm(e, t, n, o, i) {
        if (window.MotionHandoffIsComplete) {
          window.MotionHandoffAnimation = void 0;
          return;
        }
        let a = e.dataset[ti.t];
        if (!a) return;
        window.MotionHandoffAnimation = tl;
        let c = tu(a, t);
        u ||
          ((u = (0, to.p)(e, t, [n[0], n[0]], {
            duration: 1e4,
            ease: "linear",
          })),
          ta.set(c, { animation: u, startTime: null }),
          (window.MotionHandoffAnimation = tl),
          (window.MotionHasOptimisedAnimation = (e, t) => {
            if (!e) return !1;
            if (!t) return tc.has(e);
            let n = tu(e, t);
            return !!ta.get(n);
          }),
          (window.MotionCancelOptimisedAnimation = (e, t, n, r) => {
            let u = tu(e, t),
              o = ta.get(u);
            o &&
              (n && void 0 === r
                ? n.postRender(() => {
                    n.postRender(() => {
                      o.animation.cancel();
                    });
                  })
                : o.animation.cancel(),
              n && r
                ? (td.add(o), n.render(tp))
                : (ta.delete(u),
                  ta.size || (window.MotionCancelOptimisedAnimation = void 0)));
          }),
          (window.MotionCheckAppearSync = (e, t, n) => {
            var r, u;
            let o = (0, tf.s)(e);
            if (!o) return;
            let i =
                null === (r = window.MotionHasOptimisedAnimation) ||
                void 0 === r
                  ? void 0
                  : r.call(window, o, t),
              a = null === (u = e.props.values) || void 0 === u ? void 0 : u[t];
            if (!i || !a) return;
            let c = n.on("change", (e) => {
              var n;
              a.get() !== e &&
                (null === (n = window.MotionCancelOptimisedAnimation) ||
                  void 0 === n ||
                  n.call(window, o, t),
                c());
            });
            return c;
          }));
        let l = () => {
          u.cancel();
          let a = (0, to.p)(e, t, n, o);
          void 0 === r && (r = performance.now()),
            (a.startTime = r),
            ta.set(c, { animation: a, startTime: r }),
            i && i(a);
        };
        tc.add(a), u.ready ? u.ready.then(l).catch(ts.Z) : l();
      }
      var th = n(88439),
        tv = n(37628),
        tg = n(67797),
        ty = n(86094),
        tw = n(93409),
        tC = n(59748),
        tx = n(58250);
      let tE = () => ({});
      class tM extends e$.l {
        constructor() {
          super(...arguments), (this.measureInstanceViewportBox = tx.dO);
        }
        build() {}
        resetTransform() {}
        restoreTransform() {}
        removeValueFromRenderState() {}
        renderInstance() {}
        scrapeMotionValuesFromProps() {
          return tE();
        }
        getBaseTargetFromProps() {}
        readValueFromInstance(e, t, n) {
          return n.initialState[t] || 0;
        }
        sortInstanceNodePosition() {
          return 0;
        }
      }
      let tS = (0, tC.t)({
        scrapeMotionValuesFromProps: tE,
        createRenderState: tE,
      });
      function tb(e) {
        let [t, n] = (0, d.useState)(e),
          r = tS({}, !1),
          u = (0, h.h)(
            () =>
              new tM(
                {
                  props: {
                    onUpdate: (e) => {
                      n({ ...e });
                    },
                  },
                  visualState: r,
                  presenceContext: null,
                },
                { initialState: e },
              ),
          );
        return (
          (0, d.useLayoutEffect)(() => (u.mount({}), () => u.unmount()), [u]),
          [t, (0, h.h)(() => (e) => (0, eW.d)(u, e))]
        );
      }
      let tI = (e) => (e > 0.001 ? 1 / e : 1e5),
        tR = !1;
      function tA(e) {
        let t = (0, _.c)(1),
          n = (0, _.c)(1),
          { visualElement: r } = (0, d.useContext)(tv.v);
        return (
          (0, ec.k)(
            !!(e || r),
            "If no scale values are provided, useInvertedScale must be used within a child of another motion component.",
          ),
          (0, ec.K)(
            tR,
            "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.",
          ),
          (tR = !0),
          e
            ? ((t = e.scaleX || t), (n = e.scaleY || n))
            : r &&
              ((t = r.getValue("scaleX", 1)), (n = r.getValue("scaleY", 1))),
          { scaleX: (0, G.H)(t, tI), scaleY: (0, G.H)(n, tI) }
        );
      }
      let tk = 0,
        tP = ({ children: e }) => (
          d.useEffect(() => {
            (0, ec.k)(
              !1,
              "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations",
            );
          }, []),
          (0, f.jsx)(k, { id: (0, h.h)(() => `asl-${tk++}`), children: e })
        ),
        tO = (0, d.createContext)(null),
        tV = (0, d.forwardRef)(function (e, t) {
          let {
              children: n,
              as: r = "ul",
              axis: u = "y",
              onReorder: o,
              values: a,
              ...c
            } = e,
            l = (0, h.h)(() => i.E[r]),
            s = [],
            p = (0, d.useRef)(!1);
          return (
            (0, ec.k)(!!a, "Reorder.Group must be provided a values prop"),
            (0, d.useEffect)(() => {
              p.current = !1;
            }),
            (0, f.jsx)(l, {
              ...c,
              ref: t,
              ignoreStrict: !0,
              children: (0, f.jsx)(tO.Provider, {
                value: {
                  axis: u,
                  registerItem: (e, t) => {
                    let n = s.findIndex((t) => e === t.value);
                    -1 !== n
                      ? (s[n].layout = t[u])
                      : s.push({ value: e, layout: t[u] }),
                      s.sort(tT);
                  },
                  updateOrder: (e, t, n) => {
                    if (p.current) return;
                    let r = (function (e, t, n, r) {
                      if (!r) return e;
                      let u = e.findIndex((e) => e.value === t);
                      if (-1 === u) return e;
                      let o = r > 0 ? 1 : -1,
                        i = e[u + o];
                      if (!i) return e;
                      let a = e[u],
                        c = i.layout,
                        l = (0, eb.t)(c.min, c.max, 0.5);
                      return (1 === o && a.layout.max + n > l) ||
                        (-1 === o && a.layout.min + n < l)
                        ? (0, eS.uo)(e, u, u + o)
                        : e;
                    })(s, e, t, n);
                    s !== r &&
                      ((p.current = !0),
                      o(r.map(tL).filter((e) => -1 !== a.indexOf(e))));
                  },
                },
                children: n,
              }),
            })
          );
        });
      function tL(e) {
        return e.value;
      }
      function tT(e, t) {
        return e.layout.min - t.layout.min;
      }
      function tj(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, H.i)(e) ? e : (0, _.c)(t);
      }
      let tD = (0, d.forwardRef)(function (e, t) {
        let {
            children: n,
            style: r = {},
            value: u,
            as: o = "li",
            onDrag: a,
            layout: c = !0,
            ...l
          } = e,
          s = (0, h.h)(() => i.E[o]),
          p = (0, d.useContext)(tO),
          m = { x: tj(r.x), y: tj(r.y) },
          v = (0, G.H)([m.x, m.y], (e) => {
            let [t, n] = e;
            return t || n ? 1 : "unset";
          });
        (0, ec.k)(!!p, "Reorder.Item must be a child of Reorder.Group");
        let { axis: g, registerItem: y, updateOrder: w } = p;
        return (0, f.jsx)(s, {
          drag: g,
          ...l,
          dragSnapToOrigin: !0,
          style: { ...r, x: m.x, y: m.y, zIndex: v },
          layout: c,
          onDrag: (e, t) => {
            let { velocity: n } = t;
            n[g] && w(u, m[g].get(), n[g]), a && a(e, t);
          },
          onLayoutMeasure: (e) => y(u, e),
          ref: t,
          ignoreStrict: !0,
          children: n,
        });
      });
      var tW = n(20804),
        t_ = n(23576),
        tF = n(68691),
        tH = n(87581);
      let tU = new Map();
      function tB(e, t) {
        let n = (function ({
          source: e = document.documentElement,
          axis: t = "y",
        } = {}) {
          tU.has(e) || tU.set(e, {});
          let n = tU.get(e);
          return (
            n[t] ||
              (n[t] = (0, tH.t)()
                ? new ScrollTimeline({ source: e, axis: t })
                : (function ({ source: e, axis: t = "y" }) {
                    let n = { value: 0 },
                      r = (0, t_.J)(
                        (e) => {
                          n.value = 100 * e[t].progress;
                        },
                        { container: e, axis: t },
                      );
                    return { currentTime: n, cancel: r };
                  })({ source: e, axis: t })),
            n[t]
          );
        })(t);
        return "function" == typeof e ? (0, tF.U)(e, n) : e.attachTimeline(n);
      }
      var tG = n(41746),
        tz = n(72586);
      function tJ(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
        return (u, o) => {
          let i =
            e *
            Math.abs(
              ("number" == typeof n
                ? n
                : (function (e, t) {
                    if ("first" === e) return 0;
                    {
                      let n = t - 1;
                      return "last" === e ? n : n / 2;
                    }
                  })(n, o)) - u,
            );
          if (r) {
            let t = o * e;
            i = (0, tz.R)(r)(i / t) * t;
          }
          return t + i;
        };
      }
      var tY = n(88654),
        tN = n(51506),
        tX = n(5389),
        tK = n(89654),
        tZ = n(2981);
      let t$ = S.Wi,
        tq = tZ.B.reduce((e, t) => ((e[t] = (e) => (0, S.Pn)(e)), e), {});
      var tQ = n(79849),
        t0 = n(45834),
        t1 = n(68536),
        t7 = n(18298),
        t4 = n(13194),
        t2 = n(73108),
        t9 = n(62718),
        t5 = n(67937),
        t3 = n(22631),
        t8 = n(42548),
        t6 = n(86910),
        ne = n(75153),
        nt = n(33787),
        nn = n(63280),
        nr = n(77282);
    },
    41746: function (e, t, n) {
      n.d(t, {
        j: function () {
          return o;
        },
      });
      var r = n(77451);
      let u = { some: 0, all: 1 };
      function o(e, t, { root: n, margin: o, amount: i = "some" } = {}) {
        let a = (0, r.I)(e),
          c = new WeakMap(),
          l = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                let n = c.get(e.target);
                if (!!n !== e.isIntersecting) {
                  if (e.isIntersecting) {
                    let n = t(e);
                    "function" == typeof n
                      ? c.set(e.target, n)
                      : l.unobserve(e.target);
                  } else n && (n(e), c.delete(e.target));
                }
              });
            },
            {
              root: n,
              rootMargin: o,
              threshold: "number" == typeof i ? i : u[i],
            },
          );
        return a.forEach((e) => l.observe(e)), () => l.disconnect();
      }
    },
    55382: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return o;
        },
      });
      var r = n(2265),
        u = n(41746);
      function o(e, { root: t, margin: n, amount: o, once: i = !1 } = {}) {
        let [a, c] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (i && a)) return;
            let r = { root: (t && t.current) || void 0, margin: n, amount: o };
            return (0, u.j)(
              e.current,
              () => (c(!0), i ? void 0 : () => c(!1)),
              r,
            );
          }, [t, e, n, i, o]),
          a
        );
      }
    },
    26391: function (e, t, n) {
      n.d(t, {
        q: function () {
          return f;
        },
      });
      var r = n(2265),
        u = n(77599),
        o = n(45282),
        i = n(29791),
        a = n(9033),
        c = n(13950),
        l = n(86219);
      function s(e) {
        return "number" == typeof e ? e : parseFloat(e);
      }
      function f(e, t = {}) {
        let { isStatic: n } = (0, r.useContext)(i._),
          f = (0, r.useRef)(null),
          d = (0, o.c)((0, u.i)(e) ? s(e.get()) : e),
          p = (0, r.useRef)(d.get()),
          m = (0, r.useRef)(() => {}),
          h = () => {
            let e = f.current;
            e && 0 === e.time && e.sample(l.frameData.delta),
              v(),
              (f.current = (0, c.y)({
                keyframes: [d.get(), p.current],
                velocity: d.getVelocity(),
                type: "spring",
                restDelta: 0.001,
                restSpeed: 0.01,
                ...t,
                onUpdate: m.current,
              }));
          },
          v = () => {
            f.current && f.current.stop();
          };
        return (
          (0, r.useInsertionEffect)(
            () =>
              d.attach(
                (e, t) =>
                  n
                    ? t(e)
                    : ((p.current = e),
                      (m.current = t),
                      l.Wi.update(h),
                      d.get()),
                v,
              ),
            [JSON.stringify(t)],
          ),
          (0, a.L)(() => {
            if ((0, u.i)(e)) return e.on("change", (e) => d.set(s(e)));
          }, [d]),
          d
        );
      }
    },
  },
]);
