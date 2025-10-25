"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [463],
  {
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
    40463: function (e, t, n) {
      let r, u;
      n.r(t),
        n.d(t, {
          AcceleratedAnimation: function () {
            return to.y;
          },
          AnimatePresence: function () {
            return s.M;
          },
          AnimateSharedLayout: function () {
            return tL;
          },
          DeprecatedLayoutGroupContext: function () {
            return E;
          },
          DragControls: function () {
            return eJ;
          },
          FlatTree: function () {
            return tE.E;
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
            return tw.v;
          },
          MotionGlobalConfig: function () {
            return tu.c;
          },
          MotionValue: function () {
            return tU.Hg;
          },
          PresenceContext: function () {
            return tC.O;
          },
          Reorder: function () {
            return o;
          },
          SwitchLayoutGroupContext: function () {
            return tx.g;
          },
          VisualElement: function () {
            return e0.l;
          },
          addPointerEvent: function () {
            return nu.a;
          },
          addPointerInfo: function () {
            return no.s;
          },
          addScaleCorrector: function () {
            return e1.B;
          },
          animate: function () {
            return eW;
          },
          animateValue: function () {
            return te.y;
          },
          animateVisualElement: function () {
            return ei.d;
          },
          animationControls: function () {
            return ec;
          },
          animations: function () {
            return P.s;
          },
          anticipate: function () {
            return t4.L;
          },
          backIn: function () {
            return t5.G2;
          },
          backInOut: function () {
            return t5.XL;
          },
          backOut: function () {
            return t5.CG;
          },
          buildTransform: function () {
            return e8.P;
          },
          calcLength: function () {
            return nn.JO;
          },
          cancelFrame: function () {
            return S.Pn;
          },
          cancelSync: function () {
            return t1;
          },
          circIn: function () {
            return t7.Z7;
          },
          circInOut: function () {
            return t7.X7;
          },
          circOut: function () {
            return t7.Bn;
          },
          clamp: function () {
            return tZ.u;
          },
          color: function () {
            return tt.$;
          },
          complex: function () {
            return tn.P;
          },
          createBox: function () {
            return tS.dO;
          },
          createRendererMotionComponent: function () {
            return eZ.B;
          },
          createScopedAnimate: function () {
            return eD;
          },
          cubicBezier: function () {
            return t2._;
          },
          delay: function () {
            return t8.g;
          },
          disableInstantTransitions: function () {
            return e3;
          },
          distance: function () {
            return ne.T;
          },
          distance2D: function () {
            return ne.y;
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
            return t9.YQ;
          },
          easeInOut: function () {
            return t9.mZ;
          },
          easeOut: function () {
            return t9.Vv;
          },
          filterProps: function () {
            return m.L;
          },
          findSpring: function () {
            return ty.Fb;
          },
          frame: function () {
            return S.Wi;
          },
          frameData: function () {
            return S.frameData;
          },
          inView: function () {
            return tY.j;
          },
          interpolate: function () {
            return nt.s;
          },
          invariant: function () {
            return eu.k;
          },
          isBrowser: function () {
            return ni.j;
          },
          isDragActive: function () {
            return nr.gD;
          },
          isMotionComponent: function () {
            return eq;
          },
          isMotionValue: function () {
            return U.i;
          },
          isValidMotionProp: function () {
            return e_.Z;
          },
          m: function () {
            return l;
          },
          makeUseVisualState: function () {
            return tM.t;
          },
          mirrorEasing: function () {
            return t3.o;
          },
          mix: function () {
            return t$.C;
          },
          motion: function () {
            return i.E;
          },
          motionValue: function () {
            return tU.BX;
          },
          optimizedAppearDataAttribute: function () {
            return tl.M;
          },
          pipe: function () {
            return tq.z;
          },
          progress: function () {
            return eM.Y;
          },
          px: function () {
            return tr.px;
          },
          resolveMotionValue: function () {
            return _.b;
          },
          reverseEasing: function () {
            return t6.M;
          },
          scroll: function () {
            return tJ;
          },
          scrollInfo: function () {
            return tB.J;
          },
          spring: function () {
            return ey.S;
          },
          stagger: function () {
            return tX;
          },
          startOptimizedAppearAnimation: function () {
            return tg;
          },
          steps: function () {
            return S.S6;
          },
          sync: function () {
            return t0;
          },
          transform: function () {
            return tK.v;
          },
          unwrapMotionComponent: function () {
            return eQ;
          },
          useAnimate: function () {
            return eF;
          },
          useAnimation: function () {
            return eU;
          },
          useAnimationControls: function () {
            return eH;
          },
          useAnimationFrame: function () {
            return Z;
          },
          useCycle: function () {
            return eB;
          },
          useDeprecatedAnimatedState: function () {
            return tA;
          },
          useDeprecatedInvertedScale: function () {
            return tO;
          },
          useDomEvent: function () {
            return eK;
          },
          useDragControls: function () {
            return eN;
          },
          useElementScroll: function () {
            return X;
          },
          useForceUpdate: function () {
            return b;
          },
          useInView: function () {
            return ez.Y;
          },
          useInstantLayoutTransition: function () {
            return e5;
          },
          useInstantTransition: function () {
            return e2;
          },
          useIsPresent: function () {
            return eG.hO;
          },
          useIsomorphicLayoutEffect: function () {
            return M.L;
          },
          useMotionTemplate: function () {
            return B;
          },
          useMotionValue: function () {
            return F.c;
          },
          useMotionValueEvent: function () {
            return J;
          },
          usePresence: function () {
            return eG.oO;
          },
          useReducedMotion: function () {
            return en;
          },
          useReducedMotionConfig: function () {
            return er;
          },
          useResetProjection: function () {
            return e6;
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
            return el;
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
            return ef.R;
          },
          warning: function () {
            return eu.K;
          },
          wrap: function () {
            return eb;
          },
        });
      var o = {};
      n.r(o),
        n.d(o, {
          Group: function () {
            return tj;
          },
          Item: function () {
            return tH;
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
      var F = n(45282),
        H = n(28565),
        U = n(77599);
      function B(e, ...t) {
        let n = e.length;
        return (0, H.N)(t.filter(U.i), function () {
          let r = "";
          for (let u = 0; u < n; u++) {
            r += e[u];
            let n = t[u];
            n && (r += (0, U.i)(n) ? n.get() : n);
          }
          return r;
        });
      }
      var _ = n(32404),
        G = n(32679),
        z = n(26391);
      function J(e, t, n) {
        (0, d.useInsertionEffect)(() => e.on(t, n), [e, t, n]);
      }
      function Y(e) {
        let t = (0, F.c)(e.getVelocity()),
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
        let e = (0, F.c)(0);
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
      var eu = n(19047),
        eo = n(76159),
        ei = n(15447);
      function ea(e, t) {
        [...t].reverse().forEach((n) => {
          let r = e.getVariant(n);
          r && (0, eo.C)(e, r),
            e.variantChildren &&
              e.variantChildren.forEach((e) => {
                ea(e, t);
              });
        });
      }
      function ec() {
        let e = !1,
          t = new Set(),
          n = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(n, r) {
              (0, eu.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              );
              let u = [];
              return (
                t.forEach((e) => {
                  u.push((0, ei.d)(e, n, { transitionOverride: r }));
                }),
                Promise.all(u)
              );
            },
            set: (n) => (
              (0, eu.k)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              ),
              t.forEach((e) => {
                Array.isArray(n)
                  ? ea(e, n)
                  : "string" == typeof n
                    ? ea(e, [n])
                    : (0, eo.C)(e, n);
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
      function el(e) {
        return (0, d.useEffect)(() => () => e(), []);
      }
      var es = n(77451),
        ef = n(44839),
        ed = n(11946),
        ep = n(72994),
        em = n(48170),
        eh = n(82714),
        ev = n(39440),
        eg = n(89334),
        ey = n(65122),
        ew = n(49653),
        eC = n(80557),
        ex = n(92007),
        eE = n(29924),
        eM = n(33217);
      function eS(e, t, n, r) {
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
      let eb = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      };
      var eI = n(19379),
        eR = n(28746),
        eA = n(75004);
      function ek(e, t) {
        return e.at !== t.at
          ? e.at - t.at
          : null === e.value
            ? 1
            : null === t.value
              ? -1
              : 0;
      }
      function eP(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e);
      }
      function eO(e, t) {
        return t[e] || (t[e] = []), t[e];
      }
      let eV = (e) => "number" == typeof e,
        eL = (e) => e.every(eV);
      function eT(e, t, n, r) {
        let u = (0, es.I)(e, r),
          o = u.length;
        (0, eu.k)(!!o, "No valid element provided.");
        let i = [];
        for (let e = 0; e < o; e++) {
          let r = u[e];
          ef.R.has(r) ||
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
                n = (0, em.v)(e) ? new eh.e(t) : new ev.W(t);
              n.mount(e), ef.R.set(e, n);
            })(r);
          let a = ef.R.get(r),
            c = { ...n };
          "function" == typeof c.delay && (c.delay = c.delay(e, o)),
            i.push(...(0, ep.w)(a, { ...t, transition: c }, {}));
        }
        return new ed.s(i);
      }
      let ej = (e) => Array.isArray(e) && Array.isArray(e[0]),
        eD = (e) =>
          function (t, n, r) {
            let u;
            return (
              (u = ej(t)
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
                            c.set(o.name, eS(s, o.at, l, c));
                            continue;
                          }
                          let [d, p, m = {}] = o;
                          void 0 !== m.at && (s = eS(s, m.at, l, c));
                          let h = 0,
                            v = (e, n, r, o = 0, i = 0) => {
                              let a = Array.isArray(e) ? e : [e],
                                {
                                  delay: c = 0,
                                  times: l = (0, ex.Y)(a),
                                  type: d = "keyframes",
                                  ...p
                                } = n,
                                { ease: m = t.ease || "easeOut", duration: v } =
                                  n,
                                g = "function" == typeof c ? c(o, i) : c,
                                y = a.length;
                              if (y <= 2 && "spring" === d) {
                                let e = 100;
                                2 === y && eL(a) && (e = Math.abs(a[1] - a[0]));
                                let t = { ...p };
                                void 0 !== v && (t.duration = (0, eC.w)(v));
                                let n = (function (e, t = 100) {
                                  let n = (0, ey.S)({
                                      keyframes: [0, t],
                                      ...e,
                                    }),
                                    r = Math.min((0, ew.i)(n), ew.E);
                                  return {
                                    type: "keyframes",
                                    ease: (e) => n.next(r * e).value / t,
                                    duration: (0, eC.X)(r),
                                  };
                                })(t, e);
                                (m = n.ease), (v = n.duration);
                              }
                              null != v || (v = u);
                              let w = s + g,
                                C = w + v;
                              1 === l.length && 0 === l[0] && (l[1] = 1);
                              let x = l.length - a.length;
                              x > 0 && (0, eE.c)(l, x),
                                1 === a.length && a.unshift(null),
                                (function (e, t, n, r, u, o) {
                                  !(function (e, t, n) {
                                    for (let r = 0; r < e.length; r++) {
                                      let u = e[r];
                                      u.at > t &&
                                        u.at < n &&
                                        ((0, eR.cl)(e, u), r--);
                                    }
                                  })(e, u, o);
                                  for (let a = 0; a < t.length; a++) {
                                    var i;
                                    e.push({
                                      value: t[a],
                                      at: (0, eA.t)(u, o, r[a]),
                                      easing:
                                        ((i = a),
                                        (0, eI.N)(n)
                                          ? n[eb(0, n.length, i)]
                                          : n),
                                    });
                                  }
                                })(r, a, m, l, w, C),
                                (h = Math.max(g + v, h)),
                                (f = Math.max(C, f));
                            };
                          if ((0, U.i)(d)) v(p, m, eO("default", eP(d, i)));
                          else {
                            let e = (0, es.I)(d, r, a),
                              t = e.length;
                            for (let n = 0; n < t; n++) {
                              let r = eP(e[n], i);
                              for (let e in p)
                                v(
                                  p[e],
                                  m[e] ? { ...m, ...m[e] } : { ...m },
                                  eO(e, r),
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
                              i.sort(ek);
                              let a = [],
                                c = [],
                                l = [];
                              for (let e = 0; e < i.length; e++) {
                                let { at: t, value: n, easing: r } = i[e];
                                a.push(n),
                                  c.push((0, eM.Y)(0, f, t)),
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
                          (u = (0, U.i)(n)
                            ? (0, eg.D)(n, e.default, t.default)
                            : eT(n, e, t)),
                            r.push(u);
                        },
                      ),
                      new ed.s(r)
                    );
                  })(t, n, e)
                : "object" != typeof n || Array.isArray(n)
                  ? (0, eg.D)(t, n, r)
                  : eT(t, n, r, e)),
              e && e.animations.push(u),
              u
            );
          },
        eW = eD();
      function eF() {
        let e = (0, h.h)(() => ({ current: null, animations: [] })),
          t = (0, h.h)(() => eD(e));
        return (
          el(() => {
            e.animations.forEach((e) => e.stop());
          }),
          [e, t]
        );
      }
      function eH() {
        let e = (0, h.h)(ec);
        return (0, M.L)(e.mount, []), e;
      }
      let eU = eH;
      function eB(...e) {
        let t = (0, d.useRef)(0),
          [n, r] = (0, d.useState)(e[t.current]);
        return [
          n,
          (0, d.useCallback)(
            (n) => {
              (t.current =
                "number" != typeof n ? eb(0, e.length, t.current + 1) : n),
                r(e[t.current]);
            },
            [e.length, ...e],
          ),
        ];
      }
      var e_ = n(14982),
        eG = n(73241),
        ez = n(55382);
      class eJ {
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
      let eY = () => new eJ();
      function eN() {
        return (0, h.h)(eY);
      }
      var eX = n(23731);
      function eK(e, t, n, r) {
        (0, d.useEffect)(() => {
          let u = e.current;
          if (n && u) return (0, eX.E)(u, t, n, r);
        }, [e, t, n, r]);
      }
      var eZ = n(13129),
        e$ = n(23780);
      function eq(e) {
        return null !== e && "object" == typeof e && e$.a in e;
      }
      function eQ(e) {
        if (eq(e)) return e[e$.a];
      }
      var e0 = n(55446),
        e1 = n(57290),
        e4 = n(91158);
      function e5() {
        return e7;
      }
      function e7(e) {
        e4.J.current &&
          ((e4.J.current.isUpdating = !1),
          e4.J.current.blockUpdate(),
          e && e());
      }
      var e9 = n(74097);
      function e2() {
        let [e, t] = b(),
          n = (0, d.useRef)();
        return (
          (0, d.useEffect)(() => {
            S.Wi.postRender(() =>
              S.Wi.postRender(() => {
                t === n.current && (e9.c.current = !1);
              }),
            );
          }, [t]),
          (r) => {
            e7(() => {
              (e9.c.current = !0), e(), r(), (n.current = t + 1);
            });
          }
        );
      }
      function e3() {
        e9.c.current = !1;
      }
      function e6() {
        return (0, d.useCallback)(() => {
          let e = e4.J.current;
          e && e.resetTree();
        }, []);
      }
      var e8 = n(78186),
        te = n(13950),
        tt = n(50146),
        tn = n(83646),
        tr = n(75480),
        tu = n(565),
        to = n(65637),
        ti = n(26019);
      let ta = (e, t) => {
        let n = ti.G.has(t) ? "transform" : t;
        return `${e}: ${n}`;
      };
      var tc = n(88683),
        tl = n(65908);
      let ts = new Map(),
        tf = new Set();
      function td(e, t, n) {
        let r = ta(e, t),
          u = ts.get(r);
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
      var tp = n(69276),
        tm = n(2087);
      let th = new Set();
      function tv() {
        th.forEach((e) => {
          e.animation.play(), (e.animation.startTime = e.startTime);
        }),
          th.clear();
      }
      function tg(e, t, n, o, i) {
        if (window.MotionHandoffIsComplete) {
          window.MotionHandoffAnimation = void 0;
          return;
        }
        let a = e.dataset[tl.t];
        if (!a) return;
        window.MotionHandoffAnimation = td;
        let c = ta(a, t);
        u ||
          ((u = (0, tc.p)(e, t, [n[0], n[0]], {
            duration: 1e4,
            ease: "linear",
          })),
          ts.set(c, { animation: u, startTime: null }),
          (window.MotionHandoffAnimation = td),
          (window.MotionHasOptimisedAnimation = (e, t) => {
            if (!e) return !1;
            if (!t) return tf.has(e);
            let n = ta(e, t);
            return !!ts.get(n);
          }),
          (window.MotionCancelOptimisedAnimation = (e, t, n, r) => {
            let u = ta(e, t),
              o = ts.get(u);
            o &&
              (n && void 0 === r
                ? n.postRender(() => {
                    n.postRender(() => {
                      o.animation.cancel();
                    });
                  })
                : o.animation.cancel(),
              n && r
                ? (th.add(o), n.render(tv))
                : (ts.delete(u),
                  ts.size || (window.MotionCancelOptimisedAnimation = void 0)));
          }),
          (window.MotionCheckAppearSync = (e, t, n) => {
            var r, u;
            let o = (0, tm.s)(e);
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
          let a = (0, tc.p)(e, t, n, o);
          void 0 === r && (r = performance.now()),
            (a.startTime = r),
            ts.set(c, { animation: a, startTime: r }),
            i && i(a);
        };
        tf.add(a), u.ready ? u.ready.then(l).catch(tp.Z) : l();
      }
      var ty = n(88439),
        tw = n(37628),
        tC = n(67797),
        tx = n(86094),
        tE = n(93409),
        tM = n(59748),
        tS = n(58250);
      let tb = () => ({});
      class tI extends e0.l {
        constructor() {
          super(...arguments), (this.measureInstanceViewportBox = tS.dO);
        }
        build() {}
        resetTransform() {}
        restoreTransform() {}
        removeValueFromRenderState() {}
        renderInstance() {}
        scrapeMotionValuesFromProps() {
          return tb();
        }
        getBaseTargetFromProps() {}
        readValueFromInstance(e, t, n) {
          return n.initialState[t] || 0;
        }
        sortInstanceNodePosition() {
          return 0;
        }
      }
      let tR = (0, tM.t)({
        scrapeMotionValuesFromProps: tb,
        createRenderState: tb,
      });
      function tA(e) {
        let [t, n] = (0, d.useState)(e),
          r = tR({}, !1),
          u = (0, h.h)(
            () =>
              new tI(
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
          [t, (0, h.h)(() => (e) => (0, ei.d)(u, e))]
        );
      }
      let tk = (e) => (e > 0.001 ? 1 / e : 1e5),
        tP = !1;
      function tO(e) {
        let t = (0, F.c)(1),
          n = (0, F.c)(1),
          { visualElement: r } = (0, d.useContext)(tw.v);
        return (
          (0, eu.k)(
            !!(e || r),
            "If no scale values are provided, useInvertedScale must be used within a child of another motion component.",
          ),
          (0, eu.K)(
            tP,
            "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.",
          ),
          (tP = !0),
          e
            ? ((t = e.scaleX || t), (n = e.scaleY || n))
            : r &&
              ((t = r.getValue("scaleX", 1)), (n = r.getValue("scaleY", 1))),
          { scaleX: (0, G.H)(t, tk), scaleY: (0, G.H)(n, tk) }
        );
      }
      let tV = 0,
        tL = ({ children: e }) => (
          d.useEffect(() => {
            (0, eu.k)(
              !1,
              "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations",
            );
          }, []),
          (0, f.jsx)(k, { id: (0, h.h)(() => `asl-${tV++}`), children: e })
        ),
        tT = (0, d.createContext)(null),
        tj = (0, d.forwardRef)(function (e, t) {
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
            (0, eu.k)(!!a, "Reorder.Group must be provided a values prop"),
            (0, d.useEffect)(() => {
              p.current = !1;
            }),
            (0, f.jsx)(l, {
              ...c,
              ref: t,
              ignoreStrict: !0,
              children: (0, f.jsx)(tT.Provider, {
                value: {
                  axis: u,
                  registerItem: (e, t) => {
                    let n = s.findIndex((t) => e === t.value);
                    -1 !== n
                      ? (s[n].layout = t[u])
                      : s.push({ value: e, layout: t[u] }),
                      s.sort(tW);
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
                        l = (0, eA.t)(c.min, c.max, 0.5);
                      return (1 === o && a.layout.max + n > l) ||
                        (-1 === o && a.layout.min + n < l)
                        ? (0, eR.uo)(e, u, u + o)
                        : e;
                    })(s, e, t, n);
                    s !== r &&
                      ((p.current = !0),
                      o(r.map(tD).filter((e) => -1 !== a.indexOf(e))));
                  },
                },
                children: n,
              }),
            })
          );
        });
      function tD(e) {
        return e.value;
      }
      function tW(e, t) {
        return e.layout.min - t.layout.min;
      }
      function tF(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, U.i)(e) ? e : (0, F.c)(t);
      }
      let tH = (0, d.forwardRef)(function (e, t) {
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
          p = (0, d.useContext)(tT),
          m = { x: tF(r.x), y: tF(r.y) },
          v = (0, G.H)([m.x, m.y], (e) => {
            let [t, n] = e;
            return t || n ? 1 : "unset";
          });
        (0, eu.k)(!!p, "Reorder.Item must be a child of Reorder.Group");
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
      var tU = n(20804),
        tB = n(23576),
        t_ = n(68691),
        tG = n(87581);
      let tz = new Map();
      function tJ(e, t) {
        let n = (function ({
          source: e = document.documentElement,
          axis: t = "y",
        } = {}) {
          tz.has(e) || tz.set(e, {});
          let n = tz.get(e);
          return (
            n[t] ||
              (n[t] = (0, tG.t)()
                ? new ScrollTimeline({ source: e, axis: t })
                : (function ({ source: e, axis: t = "y" }) {
                    let n = { value: 0 },
                      r = (0, tB.J)(
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
        return "function" == typeof e ? (0, t_.U)(e, n) : e.attachTimeline(n);
      }
      var tY = n(41746),
        tN = n(72586);
      function tX(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
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
            i = (0, tN.R)(r)(i / t) * t;
          }
          return t + i;
        };
      }
      var tK = n(88654),
        tZ = n(51506),
        t$ = n(5389),
        tq = n(89654),
        tQ = n(2981);
      let t0 = S.Wi,
        t1 = tQ.B.reduce((e, t) => ((e[t] = (e) => (0, S.Pn)(e)), e), {});
      var t4 = n(79849),
        t5 = n(45834),
        t7 = n(68536),
        t9 = n(18298),
        t2 = n(13194),
        t3 = n(73108),
        t6 = n(62718),
        t8 = n(67937),
        ne = n(22631),
        nt = n(42548),
        nn = n(86910),
        nr = n(75153),
        nu = n(33787),
        no = n(63280),
        ni = n(77282);
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
