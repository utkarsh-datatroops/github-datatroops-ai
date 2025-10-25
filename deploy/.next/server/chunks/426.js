"use strict";
(exports.id = 426),
  (exports.ids = [426]),
  (exports.modules = {
    181: (t, e, i) => {
      i.d(e, { v: () => u });
      var s = i(8111),
        r = i(8459),
        n = i(8578),
        o = i(4673),
        a = i(282);
      let l = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (a.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var h = i(8222);
      class u {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: o = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = s.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: n,
              repeatType: o,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, r.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = s.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: r,
            velocity: a,
            delay: u,
            onComplete: d,
            onUpdate: c,
            isGenerator: p,
          } = this.options;
          if (
            !p &&
            !(function (t, e, i, s) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let n = t[t.length - 1],
                a = l(r, e),
                h = l(n, e);
              return (
                (0, o.K)(
                  a === h,
                  `You are trying to animate ${e} from "${r}" to "${n}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${n} via the \`style\` property.`,
                ),
                !!a &&
                  !!h &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && s))
              );
            })(t, i, r, a)
          ) {
            if (n.c.current || !u) {
              null == c || c((0, h.$)(t, this.options, e)),
                null == d || d(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let m = this.initPlayback(t, e);
          !1 !== m &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...m }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    3490: (t, e, i) => {
      i.d(e, { s: () => N, y: () => X });
      var s = i(8459),
        r = i(8968),
        n = i(8702);
      function o(t, e, i) {
        let s = Math.max(e - 5, 0);
        return (0, n.R)(i - t(s), e - s);
      }
      var a = i(4673),
        l = i(2361);
      function h(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let u = ["duration", "bounce"],
        d = ["stiffness", "damping", "mass"];
      function c(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function p({ keyframes: t, restDelta: e, restSpeed: i, ...s }) {
        let n;
        let p = t[0],
          m = t[t.length - 1],
          f = { done: !1, value: p },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: x,
            velocity: P,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!c(t, d) && c(t, u)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: s = 1,
              }) {
                let n, o;
                (0, a.K)(
                  t <= (0, r.w)(10),
                  "Spring duration must be 10 seconds or less",
                );
                let u = 1 - e;
                (u = (0, l.u)(0.05, 1, u)),
                  (t = (0, l.u)(0.01, 10, (0, r.X)(t))),
                  u < 1
                    ? ((n = (e) => {
                        let s = e * u,
                          r = s * t;
                        return 0.001 - ((s - i) / h(e, u)) * Math.exp(-r);
                      }),
                      (o = (e) => {
                        let s = e * u * t,
                          r = Math.pow(u, 2) * Math.pow(e, 2) * t,
                          o = h(Math.pow(e, 2), u);
                        return (
                          ((s * i + i - r) *
                            Math.exp(-s) *
                            (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          o
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (o = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let d = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(n, o, 5 / t);
                if (((t = (0, r.w)(t)), isNaN(d)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(d, 2) * s;
                  return {
                    stiffness: e,
                    damping: 2 * u * Math.sqrt(s * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...s, velocity: -(0, r.X)(s.velocity || 0) }),
          T = P || 0,
          b = g / (2 * Math.sqrt(v * y)),
          S = m - p,
          A = (0, r.X)(Math.sqrt(v / y)),
          V = 5 > Math.abs(S);
        if ((i || (i = V ? 0.01 : 2), e || (e = V ? 0.005 : 0.5), b < 1)) {
          let t = h(A, b);
          n = (e) =>
            m -
            Math.exp(-b * A * e) *
              (((T + b * A * S) / t) * Math.sin(t * e) + S * Math.cos(t * e));
        } else if (1 === b)
          n = (t) => m - Math.exp(-A * t) * (S + (T + A * S) * t);
        else {
          let t = A * Math.sqrt(b * b - 1);
          n = (e) => {
            let i = Math.exp(-b * A * e),
              s = Math.min(t * e, 300);
            return (
              m -
              (i * ((T + b * A * S) * Math.sinh(s) + t * S * Math.cosh(s))) / t
            );
          };
        }
        return {
          calculatedDuration: (w && x) || null,
          next: (t) => {
            let s = n(t);
            if (w) f.done = t >= x;
            else {
              let a = 0;
              b < 1 && (a = 0 === t ? (0, r.w)(T) : o(n, t, s));
              let l = Math.abs(a) <= i,
                h = Math.abs(m - s) <= e;
              f.done = l && h;
            }
            return (f.value = f.done ? m : s), f;
          },
        };
      }
      function m({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: r = 10,
        bounceStiffness: n = 500,
        modifyTarget: a,
        min: l,
        max: h,
        restDelta: u = 0.5,
        restSpeed: d,
      }) {
        let c, m;
        let f = t[0],
          v = { done: !1, value: f },
          g = (t) => (void 0 !== l && t < l) || (void 0 !== h && t > h),
          y = (t) =>
            void 0 === l
              ? h
              : void 0 === h
                ? l
                : Math.abs(l - t) < Math.abs(h - t)
                  ? l
                  : h,
          x = i * e,
          P = f + x,
          w = void 0 === a ? P : a(P);
        w !== P && (x = w - f);
        let T = (t) => -x * Math.exp(-t / s),
          b = (t) => w + T(t),
          S = (t) => {
            let e = T(t),
              i = b(t);
            (v.done = Math.abs(e) <= u), (v.value = v.done ? w : i);
          },
          A = (t) => {
            g(v.value) &&
              ((c = t),
              (m = p({
                keyframes: [v.value, y(v.value)],
                velocity: o(b, t, v.value),
                damping: r,
                stiffness: n,
                restDelta: u,
                restSpeed: d,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (m || void 0 !== c || ((e = !0), S(t), A(t)),
              void 0 !== c && t >= c)
                ? m.next(t - c)
                : (e || S(t), v);
            },
          }
        );
      }
      var f = i(4380);
      let v = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function g(t, e, i, s) {
        if (t === e && i === s) return f.Z;
        let r = (e) =>
          (function (t, e, i, s, r) {
            let n, o;
            let a = 0;
            do (n = v((o = e + (i - e) / 2), s, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(n) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : v(r(t), e, s));
      }
      let y = g(0.42, 0, 1, 1),
        x = g(0, 0, 0.58, 1),
        P = g(0.42, 0, 0.58, 1),
        w = (t) => Array.isArray(t) && "number" != typeof t[0];
      var T = i(1852),
        b = i(5024),
        S = i(9833);
      let A = g(0.33, 1.53, 0.69, 0.99),
        V = (0, S.M)(A),
        C = (0, b.o)(V),
        M = {
          linear: f.Z,
          easeIn: y,
          easeInOut: P,
          easeOut: x,
          circIn: T.Z7,
          circInOut: T.X7,
          circOut: T.Bn,
          backIn: V,
          backInOut: C,
          backOut: A,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * V(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        D = (t) => {
          if (Array.isArray(t)) {
            (0, a.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [e, i, s, r] = t;
            return g(e, i, s, r);
          }
          return "string" == typeof t
            ? ((0, a.k)(void 0 !== M[t], `Invalid easing type '${t}'`), M[t])
            : t;
        };
      var E = i(8370),
        R = i(4570);
      function k({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        let r = w(s) ? s.map(D) : D(s),
          n = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, R.Y)(e)).map((e) => e * t),
          a = (0, E.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || P).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((n.value = a(e)), (n.done = e >= t), n),
        };
      }
      var j = i(181),
        L = i(9022),
        F = i(3130),
        B = i(8111),
        W = i(5386);
      let $ = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => W.Wi.update(e, !0),
          stop: () => (0, W.Pn)(e),
          now: () =>
            W.frameData.isProcessing ? W.frameData.timestamp : B.X.now(),
        };
      };
      var O = i(8222);
      let U = { decay: m, inertia: m, tween: k, keyframes: k, spring: p },
        I = (t) => t / 100;
      class N extends j.v {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: r,
              keyframes: n,
            } = this.options,
            o = (null == r ? void 0 : r.KeyframeResolver) || s.e;
          (this.resolver = new o(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: s = "keyframes",
              repeat: r = 0,
              repeatDelay: n = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = U[s] || k;
          l !== k &&
            "number" != typeof t[0] &&
            ((e = (0, L.z)(I, (0, F.C)(t[0], t[1]))), (t = [0, 100]));
          let h = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(h));
          let { calculatedDuration: u } = h,
            d = u + n;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - n,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: r,
            mirroredGenerator: n,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: h,
            totalDuration: u,
            resolvedDuration: d,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: p,
            repeatType: m,
            repeatDelay: f,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let x = this.currentTime,
            P = r;
          if (p) {
            let t = Math.min(this.currentTime, u) / d,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ("reverse" === m
                  ? ((i = 1 - i), f && (i -= f / d))
                  : "mirror" === m && (P = n)),
              (x = (0, l.u)(0, 1, i) * d);
          }
          let w = y ? { done: !1, value: a[0] } : P.next(x);
          o && (w.value = o(w.value));
          let { done: T } = w;
          y ||
            null === h ||
            (T =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            b && void 0 !== s && (w.value = (0, O.$)(a, this.options, s)),
            v && v(w.value),
            b && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, r.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, r.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, r.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = $, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let s = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = s - this.holdTime)
            : this.startTime
              ? "finished" === this.state && (this.startTime = s)
              : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      function X(t) {
        return new N(t);
      }
    },
    129: (t, e, i) => {
      i.d(e, { t: () => s });
      let s = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    8222: (t, e, i) => {
      i.d(e, { $: () => r });
      let s = (t) => null !== t;
      function r(t, { repeat: e, repeatType: i = "loop" }, r) {
        let n = t.filter(s),
          o = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return o && void 0 !== r ? r : n[o];
      }
    },
    623: (t, e, i) => {
      i.d(e, { v: () => E });
      var s = i(8968),
        r = i(285);
      let n = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        h = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
              ? t.startsWith("scale")
                ? o(e[1])
                : n
              : l;
      var u = i(3986),
        d = i(8250),
        c = i(8578),
        p = i(8222),
        m = i(5386),
        f = i(5696);
      function v(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var g = i(4380),
        y = i(181),
        x = i(3490),
        P = i(129);
      let w = (t) => Array.isArray(t) && "number" == typeof t[0],
        T = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        b = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: T([0, 0.65, 0.55, 1]),
          circOut: T([0.55, 0, 1, 0.45]),
          backIn: T([0.31, 0.01, 0.66, -0.59]),
          backOut: T([0.33, 1.53, 0.69, 0.99]),
        };
      function S(t) {
        return A(t) || b.easeOut;
      }
      function A(t) {
        if (t) return w(t) ? T(t) : Array.isArray(t) ? t.map(S) : b[t];
      }
      let V = v(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class C extends y.v {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: s,
            keyframes: r,
          } = this.options;
          (this.resolver = new f.s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            s,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, s;
          let {
            duration: r = 300,
            times: n,
            ease: o,
            type: a,
            motionValue: l,
            name: h,
            startTime: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (s = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in b) ||
                w(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(s.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: s,
                element: l,
                ...h
              } = this.options,
              u = (function (t, e) {
                let i = new x.s({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  s = { done: !1, value: t[0] },
                  r = [],
                  n = 0;
                for (; !s.done && n < 2e4; )
                  r.push((s = i.sample(n)).value), (n += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: n - 10,
                  ease: "linear",
                };
              })(t, h);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (r = u.duration),
              (n = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: r = 300,
              repeat: n = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {},
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let u = A(a);
            return (
              Array.isArray(u) && (h.easing = u),
              t.animate(h, {
                delay: s,
                duration: r,
                easing: Array.isArray(u) ? "linear" : u,
                fill: "both",
                iterations: n + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, h, t, {
            ...this.options,
            duration: r,
            times: n,
            ease: o,
          });
          return (
            (d.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? ((d.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set((0, p.$)(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: r,
              times: n,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, s.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, s.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, s.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return g.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return g.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: n,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: h,
                ...u
              } = this.options,
              d = new x.s({
                ...u,
                keyframes: i,
                duration: r,
                type: n,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              c = (0, s.w)(this.time);
            t.setWithVelocity(d.sample(c - 10).value, d.sample(c).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: r,
            damping: n,
            type: o,
          } = t;
          return (
            V() &&
            i &&
            P.t.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== r &&
            0 !== n &&
            "inertia" !== o
          );
        }
      }
      let M = v(() => void 0 !== window.ScrollTimeline);
      class D {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!M() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let s = () => {
                    let { currentTime: s } = e,
                      r = (null === s ? 0 : s.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return m.Wi.update(s, !0), () => (0, m.Pn)(s);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let E =
        (t, e, i, r = {}, n, o, a) =>
        (l) => {
          let f = (0, u.e)(r, t) || {},
            v = f.delay || r.delay || 0,
            { elapsed: g = 0 } = r;
          g -= (0, s.w)(v);
          let y = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...f,
            delay: -g,
            onUpdate: (t) => {
              e.set(t), f.onUpdate && f.onUpdate(t);
            },
            onComplete: () => {
              l(), f.onComplete && f.onComplete(), a && a();
            },
            onStop: a,
            name: t,
            motionValue: e,
            element: o ? void 0 : n,
          };
          (0, u.r)(f) || (y = { ...y, ...h(t, y) }),
            y.duration && (y.duration = (0, s.w)(y.duration)),
            y.repeatDelay && (y.repeatDelay = (0, s.w)(y.repeatDelay)),
            void 0 !== y.from && (y.keyframes[0] = y.from);
          let P = !1;
          if (
            ((!1 !== y.type && (0 !== y.duration || y.repeatDelay)) ||
              ((y.duration = 0), 0 !== y.delay || (P = !0)),
            (c.c.current || d.c.skipAnimations) &&
              ((P = !0), (y.duration = 0), (y.delay = 0)),
            P && !o && void 0 !== e.get())
          ) {
            let t = (0, p.$)(y.keyframes, f);
            if (void 0 !== t)
              return (
                m.Wi.update(() => {
                  y.onUpdate(t), y.onComplete();
                }),
                new D([])
              );
          }
          return !o && C.supports(y) ? new C(y) : new x.s(y);
        };
    },
    4840: (t, e, i) => {
      i.d(e, { d: () => m });
      var s = i(3734),
        r = i(285),
        n = i(623),
        o = i(8890),
        a = i(3986),
        l = i(8667),
        h = i(4213),
        u = i(5386);
      function d(t, e, { delay: i = 0, transitionOverride: s, type: d } = {}) {
        var c;
        let {
          transition: p = t.getDefaultTransition(),
          transitionEnd: m,
          ...f
        } = e;
        s && (p = s);
        let v = [],
          g = d && t.animationState && t.animationState.getState()[d];
        for (let e in f) {
          let s = t.getValue(
              e,
              null !== (c = t.latestValues[e]) && void 0 !== c ? c : null,
            ),
            o = f[e];
          if (
            void 0 === o ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(g, e))
          )
            continue;
          let d = { delay: i, ...(0, a.e)(p || {}, e) },
            m = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, l.s)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, u.Wi);
              null !== t && ((d.startTime = t), (m = !0));
            }
          }
          s.start(
            (0, n.v)(
              e,
              s,
              o,
              t.shouldReduceMotion && r.G.has(e) ? { type: !1 } : d,
              t,
              m,
              (0, h.K)(t, e),
            ),
          );
          let y = s.animation;
          y && v.push(y);
        }
        return (
          m &&
            Promise.all(v).then(() => {
              u.Wi.update(() => {
                m && (0, o.C)(t, m);
              });
            }),
          v
        );
      }
      function c(t, e, i = {}) {
        var r;
        let n = (0, s.x)(
            t,
            e,
            "exit" === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0,
          ),
          { transition: o = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (o = i.transitionOverride);
        let a = n ? () => Promise.all(d(t, n, i)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: n,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, i = 0, s = 0, r = 1, n) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === r ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(p)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              c(t, e, { ...n, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e),
                              ),
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + s, n, a, i);
                }
              : () => Promise.resolve(),
          { when: h } = o;
        if (!h) return Promise.all([a(), l(i.delay)]);
        {
          let [t, e] = "beforeChildren" === h ? [a, l] : [l, a];
          return t().then(() => e());
        }
      }
      function p(t, e) {
        return t.sortNodePosition(e);
      }
      function m(t, e, i = {}) {
        let r;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          r = Promise.all(e.map((e) => c(t, e, i)));
        else if ("string" == typeof e) r = c(t, e, i);
        else {
          let n = "function" == typeof e ? (0, s.x)(t, e, i.custom) : e;
          r = Promise.all(d(t, n, i));
        }
        return r.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    4517: (t, e, i) => {
      i.d(e, { M: () => s });
      let s = "data-" + (0, i(1322).D)("framerAppearId");
    },
    8667: (t, e, i) => {
      i.d(e, { s: () => r });
      var s = i(4517);
      function r(t) {
        return t.props[s.M];
      }
    },
    3695: (t, e, i) => {
      i.d(e, { C: () => s });
      let s = (t) => Array.isArray(t);
    },
    3986: (t, e, i) => {
      function s({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: s,
        staggerDirection: r,
        repeat: n,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: h,
        ...u
      }) {
        return !!Object.keys(u).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, { e: () => r, r: () => s });
    },
    339: (t, e, i) => {
      i.d(e, { p: () => s });
      let s = (0, i(7577).createContext)({});
    },
    3965: (t, e, i) => {
      i.d(e, { _: () => s });
      let s = (0, i(7577).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    295: (t, e, i) => {
      i.d(e, { O: () => s });
      let s = (0, i(7577).createContext)(null);
    },
    1852: (t, e, i) => {
      i.d(e, { Bn: () => o, X7: () => a, Z7: () => n });
      var s = i(5024),
        r = i(9833);
      let n = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(n),
        a = (0, s.o)(n);
    },
    5024: (t, e, i) => {
      i.d(e, { o: () => s });
      let s = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    9833: (t, e, i) => {
      i.d(e, { M: () => s });
      let s = (t) => (e) => 1 - t(1 - e);
    },
    4038: (t, e, i) => {
      i.d(e, { Z: () => n });
      var s = i(8250);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function n(t, e) {
        let i = !1,
          n = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  s = !1,
                  r = !1,
                  n = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  n.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && s ? e : i;
                    return r && n.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), n.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), s)) {
                      r = !0;
                      return;
                    }
                    (s = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (s = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {},
          ),
          {
            read: h,
            resolveKeyframes: u,
            update: d,
            preRender: c,
            render: p,
            postRender: m,
          } = l,
          f = () => {
            let r = s.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              h.process(o),
              u.process(o),
              d.process(o),
              c.process(o),
              p.process(o),
              m.process(o),
              (o.isProcessing = !1),
              i && e && ((n = !1), t(f));
          },
          v = () => {
            (i = !0), (n = !0), o.isProcessing || t(f);
          };
        return {
          schedule: r.reduce((t, e) => {
            let s = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), s.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    5386: (t, e, i) => {
      i.d(e, { Pn: () => n, S6: () => a, Wi: () => r, frameData: () => o });
      var s = i(4380);
      let {
        schedule: r,
        cancel: n,
        state: o,
        steps: a,
      } = (0, i(4038).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : s.Z,
        !0,
      );
    },
    8111: (t, e, i) => {
      let s;
      i.d(e, { X: () => a });
      var r = i(8250),
        n = i(5386);
      function o() {
        s = void 0;
      }
      let a = {
        now: () => (
          void 0 === s &&
            a.set(
              n.frameData.isProcessing || r.c.useManualTiming
                ? n.frameData.timestamp
                : performance.now(),
            ),
          s
        ),
        set: (t) => {
          (s = t), queueMicrotask(o);
        },
      };
    },
    8426: (t, e, i) => {
      function s(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, { E: () => si });
      var r,
        n,
        o = i(3695);
      function a(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function l(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      var h = i(3734);
      let u = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...u];
      var c = i(4840);
      let p = d.length,
        m = [...u].reverse(),
        f = u.length;
      function v(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function g() {
        return {
          animate: v(!0),
          whileInView: v(),
          whileHover: v(),
          whileTap: v(),
          whileDrag: v(),
          whileFocus: v(),
          exit: v(),
        };
      }
      class y {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class x extends y {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (0, c.d)(t, e, i),
                      ),
                    ),
                  i = g(),
                  r = !0,
                  n = (e) => (i, s) => {
                    var r;
                    let n = (0, h.x)(
                      t,
                      s,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0,
                    );
                    if (n) {
                      let { transition: t, transitionEnd: e, ...s } = n;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function u(h) {
                  let { props: u } = t,
                    c =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < p; t++) {
                          let s = d[t],
                            r = e.props[s];
                          (l(r) || !1 === r) && (i[s] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    v = [],
                    g = new Set(),
                    y = {},
                    x = 1 / 0;
                  for (let e = 0; e < f; e++) {
                    var P;
                    let d = m[e],
                      p = i[d],
                      f = void 0 !== u[d] ? u[d] : c[d],
                      w = l(f),
                      T = d === h ? p.isActive : null;
                    !1 === T && (x = e);
                    let b = f === c[d] && f !== u[d] && w;
                    if (
                      (b && r && t.manuallyAnimateOnMount && (b = !1),
                      (p.protectedKeys = { ...y }),
                      (!p.isActive && null === T) ||
                        (!f && !p.prevProp) ||
                        s(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let S =
                        ((P = p.prevProp),
                        "string" == typeof f
                          ? f !== P
                          : !!Array.isArray(f) && !a(f, P)),
                      A =
                        S || (d === h && p.isActive && !b && w) || (e > x && w),
                      V = !1,
                      C = Array.isArray(f) ? f : [f],
                      M = C.reduce(n(d), {});
                    !1 === T && (M = {});
                    let { prevResolvedValues: D = {} } = p,
                      E = { ...D, ...M },
                      R = (e) => {
                        (A = !0),
                          g.has(e) && ((V = !0), g.delete(e)),
                          (p.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in E) {
                      let e = M[t],
                        i = D[t];
                      if (!y.hasOwnProperty(t))
                        ((0, o.C)(e) && (0, o.C)(i) ? a(e, i) : e === i)
                          ? void 0 !== e && g.has(t)
                            ? R(t)
                            : (p.protectedKeys[t] = !0)
                          : null != e
                            ? R(t)
                            : g.add(t);
                    }
                    (p.prevProp = f),
                      (p.prevResolvedValues = M),
                      p.isActive && (y = { ...y, ...M }),
                      r && t.blockInitialAnimation && (A = !1);
                    let k = !(b && S) || V;
                    A &&
                      k &&
                      v.push(
                        ...C.map((t) => ({
                          animation: t,
                          options: { type: d },
                        })),
                      );
                  }
                  if (g.size) {
                    let e = {};
                    g.forEach((i) => {
                      let s = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != s ? s : null);
                    }),
                      v.push({ animation: e });
                  }
                  let w = !!v.length;
                  return (
                    r &&
                      (!1 === u.initial || u.initial === u.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (w = !1),
                    (r = !1),
                    w ? e(v) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (e, s) {
                    var r;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let n = u(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return n;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = g()), (r = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          s(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let P = 0;
      class w extends y {
        constructor() {
          super(...arguments), (this.id = P++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var T = i(4380),
        b = i(4673);
      let S = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function A(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let V = (t) => (e) => S(e) && t(e, A(e));
      var C = i(8968);
      function M(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      function D(t, e, i, s) {
        return M(t, e, V(i), s);
      }
      var E = i(9022);
      let R = (t, e) => Math.abs(t - e);
      var k = i(5386);
      class j {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: r = !1,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = B(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(R(t.x, e.x) ** 2 + R(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: r } = k.frameData;
              this.history.push({ ...s, timestamp: r });
              let { onStart: n, onMove: o } = this.handlers;
              e ||
                (n && n(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = L(e, this.transformPagePoint)),
                k.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let n = B(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : L(e, this.transformPagePoint),
                this.history,
              );
              this.startEvent && i && i(t, n), s && s(t, n);
            }),
            !S(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let n = L(A(t), this.transformPagePoint),
            { point: o } = n,
            { timestamp: a } = k.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, B(n, this.history)),
            (this.removeListeners = (0, E.z)(
              D(this.contextWindow, "pointermove", this.handlePointerMove),
              D(this.contextWindow, "pointerup", this.handlePointerUp),
              D(this.contextWindow, "pointercancel", this.handlePointerUp),
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, k.Pn)(this.updatePoint);
        }
      }
      function L(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function F(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function B({ point: t }, e) {
        return {
          point: t,
          delta: F(t, W(e)),
          offset: F(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              r = W(t);
            for (
              ;
              i >= 0 &&
              ((s = t[i]), !(r.timestamp - s.timestamp > (0, C.w)(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let n = (0, C.X)(r.timestamp - s.timestamp);
            if (0 === n) return { x: 0, y: 0 };
            let o = { x: (r.x - s.x) / n, y: (r.y - s.y) / n };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function W(t) {
        return t[t.length - 1];
      }
      function $(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let O = $("dragHorizontal"),
        U = $("dragVertical");
      function I(t) {
        let e = !1;
        if ("y" === t) e = U();
        else if ("x" === t) e = O();
        else {
          let t = O(),
            i = U();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function N() {
        let t = I(!0);
        return !t || (t(), !1);
      }
      function X(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var z = i(5018),
        Y = i(5343);
      function H(t) {
        return t.max - t.min;
      }
      function K(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = (0, Y.t)(e.min, e.max, t.origin)),
          (t.scale = H(i) / H(e)),
          (t.translate = (0, Y.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function Z(t, e, i, s) {
        K(t.x, e.x, i.x, s ? s.originX : void 0),
          K(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function G(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + H(e));
      }
      function q(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + H(e));
      }
      function _(t, e, i) {
        q(t.x, e.x, i.x), q(t.y, e.y, i.y);
      }
      var J = i(2361);
      function Q(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function tt(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function te(t, e, i) {
        return { min: ti(t, e), max: ti(t, i) };
      }
      function ti(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let ts = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        tr = () => ({ x: ts(), y: ts() }),
        tn = () => ({ min: 0, max: 0 }),
        to = () => ({ x: tn(), y: tn() });
      function ta(t) {
        return [t("x"), t("y")];
      }
      function tl({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function th(t) {
        return void 0 === t || 1 === t;
      }
      function tu({ scale: t, scaleX: e, scaleY: i }) {
        return !th(t) || !th(e) || !th(i);
      }
      function td(t) {
        return (
          tu(t) ||
          tc(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function tc(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function tp(t, e, i, s, r) {
        return void 0 !== r && (t = s + r * (t - s)), s + i * (t - s) + e;
      }
      function tm(t, e = 0, i = 1, s, r) {
        (t.min = tp(t.min, e, i, s, r)), (t.max = tp(t.max, e, i, s, r));
      }
      function tf(t, { x: e, y: i }) {
        tm(t.x, e.translate, e.scale, e.originPoint),
          tm(t.y, i.translate, i.scale, i.originPoint);
      }
      function tv(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function tg(t, e, i, s, r = 0.5) {
        let n = (0, Y.t)(t.min, t.max, r);
        tm(t, e, i, n, s);
      }
      function ty(t, e) {
        tg(t.x, e.x, e.scaleX, e.scale, e.originX),
          tg(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function tx(t, e) {
        return tl(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      var tP = i(7162),
        tw = i(623);
      let tT = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var tb = i(4213);
      let tS = new WeakMap();
      class tA {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = to()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new j(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(A(t, "page").point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: s,
                  dragPropagation: r,
                  onDragStart: n,
                } = this.getProps();
                if (
                  s &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = I(s)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  ta((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tP.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        if (s) {
                          let t = H(s);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && k.Wi.postRender(() => n(t, e)),
                  null === (i = this.removeWillChange) ||
                    void 0 === i ||
                    i.call(this),
                  (this.removeWillChange = (0, tb.K)(
                    this.visualElement,
                    "transform",
                  ));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: r,
                  onDrag: n,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  n && n(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                ta((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: tT(this.visualElement),
            },
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let s = this.isDragging;
          if ((this.cancel(), !s)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && k.Wi.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !tV(t, s, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            n = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (n = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? (0, Y.t)(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? (0, Y.t)(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(n, this.constraints[t], this.elastic[t])),
            r.set(n);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            r = this.constraints;
          e && X(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: s, right: r },
                ) {
                  return { x: Q(t.x, i, r), y: Q(t.y, e, s) };
                })(s.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: te(t, "left", "right"), y: te(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              ta((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !X(e)) return !1;
          let s = e.current;
          (0, b.k)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let n = (function (t, e, i) {
              let s = tx(t, i),
                { scroll: r } = e;
              return r && (tv(s.x, r.offset.x), tv(s.y, r.offset.y)), s;
            })(s, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: tt((t = r.layout.layoutBox).x, n.x), y: tt(t.y, n.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o),
            );
            (this.hasMutatedConstraints = !!t), t && (o = tl(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: r,
              dragSnapToOrigin: n,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            ta((o) => {
              if (!tV(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              n && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            (0, tw.v)(
              t,
              i,
              0,
              e,
              this.visualElement,
              !1,
              (0, tb.K)(this.visualElement, t),
            ),
          );
        }
        stopAnimation() {
          ta((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          ta((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          ta((e) => {
            let { drag: i } = this.getProps();
            if (!tV(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: n } = s.layout.layoutBox[e];
              r.set(t[e] - (0, Y.t)(i, n, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!X(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          ta((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = H(t),
                  r = H(e);
                return (
                  r > s
                    ? (i = (0, z.Y)(e.min, e.max - s, t.min))
                    : s > r && (i = (0, z.Y)(t.min, t.max - r, e.min)),
                  (0, J.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            ta((e) => {
              if (!tV(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: n } = this.constraints[e];
              i.set((0, Y.t)(r, n, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tS.set(this.visualElement, this);
          let t = D(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              X(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            k.Wi.read(e);
          let r = M(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            n = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (ta((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            r(), t(), s(), n && n();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: r = !1,
              dragElastic: n = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: r,
            dragElastic: n,
            dragMomentum: o,
          };
        }
      }
      function tV(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class tC extends y {
        constructor(t) {
          super(t),
            (this.removeGroupControls = T.Z),
            (this.removeListeners = T.Z),
            (this.controls = new tA(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || T.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let tM = (t) => (e, i) => {
        t && k.Wi.postRender(() => t(e, i));
      };
      class tD extends y {
        constructor() {
          super(...arguments), (this.removePointerDownListener = T.Z);
        }
        onPointerDown(t) {
          this.session = new j(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tT(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: tM(t),
            onStart: tM(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && k.Wi.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = D(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var tE = i(326),
        tR = i(7577),
        tk = i(295),
        tj = i(339);
      let tL = (0, tR.createContext)({}),
        tF = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tB(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tW = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tP.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = tB(t, e.target.x),
            s = tB(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      var t$ = i(282);
      let tO = {},
        { schedule: tU, cancel: tI } = (0, i(4038).Z)(queueMicrotask, !1);
      class tN extends tR.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: r } = t;
          Object.assign(tO, tz),
            r &&
              (e.group && e.group.add(r),
              i && i.register && s && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tF.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: r,
            } = this.props,
            n = i.projection;
          return (
            n &&
              ((n.isPresent = r),
              s || t.layoutDependency !== e || void 0 === e
                ? n.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? n.promote()
                  : n.relegate() ||
                    k.Wi.postRender(() => {
                      let t = n.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            tU.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tX(t) {
        let [e, i] = (function () {
            let t = (0, tR.useContext)(tk.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              r = (0, tR.useId)();
            (0, tR.useEffect)(() => s(r), []);
            let n = (0, tR.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, n] : [!0];
          })(),
          s = (0, tR.useContext)(tj.p);
        return (0, tE.jsx)(tN, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, tR.useContext)(tL),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let tz = {
        borderRadius: {
          ...tW,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tW,
        borderTopRightRadius: tW,
        borderBottomLeftRadius: tW,
        borderBottomRightRadius: tW,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = t$.P.parse(t);
            if (s.length > 5) return t;
            let r = t$.P.createTransformer(t),
              n = "number" != typeof s[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (s[0 + n] /= o), (s[1 + n] /= a);
            let l = (0, Y.t)(o, a, 0.5);
            return (
              "number" == typeof s[2 + n] && (s[2 + n] /= l),
              "number" == typeof s[3 + n] && (s[3 + n] /= l),
              r(s)
            );
          },
        },
      };
      var tY = i(777),
        tH = i(1852);
      let tK = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tZ = tK.length,
        tG = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tq = (t) => "number" == typeof t || tP.px.test(t);
      function t_(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tJ = t0(0, 0.5, tH.Bn),
        tQ = t0(0.5, 0.95, T.Z);
      function t0(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i((0, z.Y)(t, e, s)));
      }
      function t1(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function t2(t, e) {
        t1(t.x, e.x), t1(t.y, e.y);
      }
      function t3(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function t5(t, e, i, s, r) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== r && (t = s + (1 / r) * (t - s)),
          t
        );
      }
      function t8(t, e, [i, s, r], n, o) {
        !(function (t, e = 0, i = 1, s = 0.5, r, n = t, o = t) {
          if (
            (tP.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, Y.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, Y.t)(n.min, n.max, s);
          t === n && (a -= e),
            (t.min = t5(t.min, e, i, a, r)),
            (t.max = t5(t.max, e, i, a, r));
        })(t, e[i], e[s], e[r], e.scale, n, o);
      }
      let t9 = ["x", "scaleX", "originX"],
        t4 = ["y", "scaleY", "originY"];
      function t6(t, e, i, s) {
        t8(t.x, e, t9, i ? i.x : void 0, s ? s.x : void 0),
          t8(t.y, e, t4, i ? i.y : void 0, s ? s.y : void 0);
      }
      var t7 = i(3986);
      function et(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ee(t) {
        return et(t.x) && et(t.y);
      }
      function ei(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function es(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function er(t, e) {
        return es(t.x, e.x) && es(t.y, e.y);
      }
      function en(t) {
        return H(t.x) / H(t.y);
      }
      function eo(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var ea = i(2840);
      class el {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, ea.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, ea.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let eh = (t, e) => t.depth - e.depth;
      class eu {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, ea.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, ea.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eh),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var ed = i(2083),
        ec = i(1551);
      function ep(t) {
        let e = (0, ec.i)(t) ? t.get() : t;
        return (0, ed.p)(e) ? e.toValue() : e;
      }
      var em = i(8111),
        ef = i(9603),
        ev = i(8667);
      let eg = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        ey = "undefined" != typeof window && void 0 !== window.MotionDebug,
        ex = ["", "X", "Y", "Z"],
        eP = { visibility: "hidden" },
        ew = 0;
      function eT(t, e, i, s) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function eb({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = ew++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  ey &&
                    (eg.totalNodes =
                      eg.resolvedTargetDeltas =
                      eg.recalculatedProjection =
                        0),
                  this.nodes.forEach(eV),
                  this.nodes.forEach(ej),
                  this.nodes.forEach(eL),
                  this.nodes.forEach(eC),
                  ey && window.MotionDebug.record(eg);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eu());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tY.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: r, visualElement: n } = this.options;
            if (
              (n && !n.current && n.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = em.X.now(),
                      s = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, k.Pn)(s), t(r - 250));
                      };
                    return k.Wi.read(s, !0), () => (0, k.Pn)(s);
                  })(s, 0)),
                  tF.hasAnimatedSinceResize &&
                    ((tF.hasAnimatedSinceResize = !1), this.nodes.forEach(ek));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                n &&
                (s || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        n.getDefaultTransition() ||
                        eU,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = n.getProps(),
                      l = !this.targetLayout || !er(this.targetLayout, s) || i,
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let e = {
                        ...(0, t7.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (n.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || ek(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  },
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, k.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(eF),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = (0, ev.s)(i);
                  if (window.MotionHasOptimisedAnimation(s, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      "transform",
                      k.Wi,
                      !(t || i),
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eD);
              return;
            }
            this.isUpdating || this.nodes.forEach(eE),
              (this.isUpdating = !1),
              this.nodes.forEach(eR),
              this.nodes.forEach(eS),
              this.nodes.forEach(eA),
              this.clearAllSnapshots();
            let t = em.X.now();
            (k.frameData.delta = (0, J.u)(
              0,
              1e3 / 60,
              t - k.frameData.timestamp,
            )),
              (k.frameData.timestamp = t),
              (k.frameData.isProcessing = !0),
              k.S6.update.process(k.frameData),
              k.S6.preRender.process(k.frameData),
              k.S6.render.process(k.frameData),
              (k.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tU.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eM), this.sharedNodes.forEach(eB);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              k.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            k.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = to()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !ee(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              n = s !== this.prevTransformTemplateValue;
            t &&
              (e || td(this.latestValues) || n) &&
              (r(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              eX((e = s).x),
              eX(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return to();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(eY)
              )
            ) {
              let { scroll: t } = this.root;
              t && (tv(i.x, t.offset.x), tv(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = to();
            if (
              (t2(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e],
                { scroll: r, options: n } = s;
              s !== this.root &&
                r &&
                n.layoutScroll &&
                (r.wasRoot && t2(i, t),
                tv(i.x, r.offset.x),
                tv(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = to();
            t2(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                ty(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                td(s.latestValues) && ty(i, s.latestValues);
            }
            return td(this.latestValues) && ty(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = to();
            t2(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !td(i.latestValues)) continue;
              tu(i.latestValues) && i.updateSnapshot();
              let s = to();
              t2(s, i.measurePageBox()),
                t6(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s,
                );
            }
            return td(this.latestValues) && t6(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                k.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, r;
            let n = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = n.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = n.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== n;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = k.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = to()),
                    (this.relativeTargetOrigin = to()),
                    _(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    t2(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = to()), (this.targetWithTransforms = to())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (r = this.relativeParent.target),
                      G(i.x, s.x, r.x),
                      G(i.y, s.y, r.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : t2(this.target, this.layout.layoutBox),
                        tf(this.target, this.targetDelta))
                      : t2(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = to()),
                      (this.relativeTargetOrigin = to()),
                      _(this.relativeTargetOrigin, this.target, t.target),
                      t2(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                ey && eg.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              tu(this.parent.latestValues) ||
              tc(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === k.frameData.timestamp &&
                (s = !1),
              s)
            )
              return;
            let { layout: r, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || n))
            )
              return;
            t2(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (function (t, e, i, s = !1) {
              let r, n;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  n = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (s &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      ty(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    n && ((e.x *= n.x.scale), (e.y *= n.y.scale), tf(t, n)),
                    s && td(r.latestValues) && ty(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = to()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (t3(this.prevProjectionDelta.x, this.projectionDelta.x),
                t3(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              Z(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues,
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                eo(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                eo(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              ey && eg.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = tr()),
              (this.projectionDelta = tr()),
              (this.projectionDeltaWithTransform = tr());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              r = s ? s.latestValues : {},
              n = { ...this.latestValues },
              o = tr();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = to(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(eO)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (eW(o.x, t.x, s),
                  eW(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, m;
                  _(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    e$(p.x, m.x, a.x, s),
                    e$(p.y, m.y, a.y, s),
                    i &&
                      ((h = this.relativeTarget),
                      (c = i),
                      ei(h.x, c.x) && ei(h.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = to()),
                    t2(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = n),
                  (function (t, e, i, s, r, n) {
                    r
                      ? ((t.opacity = (0, Y.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          tJ(s),
                        )),
                        (t.opacityExit = (0, Y.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          tQ(s),
                        )))
                      : n &&
                        (t.opacity = (0, Y.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s,
                        ));
                    for (let r = 0; r < tZ; r++) {
                      let n = `border${tK[r]}Radius`,
                        o = t_(e, n),
                        a = t_(i, n);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || tq(o) === tq(a)
                          ? ((t[n] = Math.max((0, Y.t)(tG(o), tG(a), s), 0)),
                            (tP.aQ.test(a) || tP.aQ.test(o)) && (t[n] += "%"))
                          : (t[n] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, Y.t)(e.rotate || 0, i.rotate || 0, s));
                  })(n, r, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, k.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = k.Wi.update(() => {
                (tF.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = (0, ec.i)(0) ? 0 : (0, ef.BX)(0);
                    return s.start((0, tw.v)("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: r,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                ez(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox,
                )
              ) {
                i = this.target || to();
                let e = H(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = H(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              t2(e, i),
                ty(e, r),
                Z(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r,
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new el()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && eT("z", t, s, this.animationValues);
            for (let e = 0; e < ex.length; e++)
              eT(`rotate${ex[e]}`, t, s, this.animationValues),
                eT(`skew${ex[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return eP;
            let s = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  ep(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = r ? r(this.latestValues, "") : "none"),
                s
              );
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    ep(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !td(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = n.animationValues || n.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = (function (t, e, i) {
                let s = "",
                  r = t.x.translate / e.x,
                  n = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || n || o) &&
                    (s = `translate3d(${r}px, ${n}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: n,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    r && (s += `rotateX(${r}deg) `),
                    n && (s += `rotateY(${n}deg) `),
                    o && (s += `skewX(${o}deg) `),
                    a && (s += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                  s || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (s.transform = r(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            n.animationValues
              ? (s.opacity =
                  n === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (s.opacity =
                  n === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            tO)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = tO[t],
                r = "none" === s.transform ? o[t] : e(o[t], n);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = r;
              } else s[t] = r;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  n === this
                    ? ep(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eD),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eS(t) {
        t.updateLayout();
      }
      function eA(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: r } = t.options,
            n = i.source !== t.layout.source;
          "size" === r
            ? ta((t) => {
                let s = n ? i.measuredBox[t] : i.layoutBox[t],
                  r = H(s);
                (s.min = e[t].min), (s.max = s.min + r);
              })
            : ez(r, i.layoutBox, e) &&
              ta((s) => {
                let r = n ? i.measuredBox[s] : i.layoutBox[s],
                  o = H(e[s]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = tr();
          Z(o, e, i.layoutBox);
          let a = tr();
          n
            ? Z(a, t.applyTransform(s, !0), i.measuredBox)
            : Z(a, e, i.layoutBox);
          let l = !ee(o),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: r, layout: n } = s;
              if (r && n) {
                let o = to();
                _(o, i.layoutBox, r.layoutBox);
                let a = to();
                _(a, e, n.layoutBox),
                  er(o, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function eV(t) {
        ey && eg.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function eC(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eM(t) {
        t.clearSnapshot();
      }
      function eD(t) {
        t.clearMeasurements();
      }
      function eE(t) {
        t.isLayoutDirty = !1;
      }
      function eR(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function ek(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function ej(t) {
        t.resolveTargetDelta();
      }
      function eL(t) {
        t.calcProjection();
      }
      function eF(t) {
        t.resetSkewAndRotation();
      }
      function eB(t) {
        t.removeLeadSnapshot();
      }
      function eW(t, e, i) {
        (t.translate = (0, Y.t)(e.translate, 0, i)),
          (t.scale = (0, Y.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function e$(t, e, i, s) {
        (t.min = (0, Y.t)(e.min, i.min, s)),
          (t.max = (0, Y.t)(e.max, i.max, s));
      }
      function eO(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eU = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        eI = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eN = eI("applewebkit/") && !eI("chrome/") ? Math.round : T.Z;
      function eX(t) {
        (t.min = eN(t.min)), (t.max = eN(t.max));
      }
      function ez(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(en(e) - en(i))))
        );
      }
      function eY(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let eH = eb({
          attachResizeListener: (t, e) => M(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        eK = { current: void 0 },
        eZ = eb({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!eK.current) {
              let t = new eH({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (eK.current = t);
            }
            return eK.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function eG(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return D(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (s, r) => {
            if ("touch" === s.pointerType || N()) return;
            let n = t.getProps();
            t.animationState &&
              n.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = n[i];
            o && k.Wi.postRender(() => o(s, r));
          },
          { passive: !t.getProps()[i] },
        );
      }
      class eq extends y {
        mount() {
          this.unmount = (0, E.z)(eG(this.node, !0), eG(this.node, !1));
        }
        unmount() {}
      }
      class e_ extends y {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, E.z)(
            M(this.node.current, "focus", () => this.onFocus()),
            M(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      let eJ = (t, e) => !!e && (t === e || eJ(t, e.parentElement));
      function eQ(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, A(i));
      }
      class e0 extends y {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = T.Z),
            (this.removeEndListeners = T.Z),
            (this.removeAccessibleListeners = T.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = D(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: s,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      n = r || eJ(this.node.current, t.target) ? i : s;
                    n && k.Wi.update(() => n(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) },
                ),
                r = D(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) },
                );
              (this.removeEndListeners = (0, E.z)(s, r)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = M(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = M(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          eQ("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && k.Wi.postRender(() => i(t, e));
                          });
                      },
                    )),
                    eQ("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = M(this.node.current, "blur", () => {
                  this.isPressing &&
                    eQ("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, E.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: s } = this.node.getProps();
          s &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && k.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !N()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && k.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = D(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) },
            ),
            i = M(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, E.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let e1 = new WeakMap(),
        e2 = new WeakMap(),
        e3 = (t) => {
          let e = e1.get(t.target);
          e && e(t);
        },
        e5 = (t) => {
          t.forEach(e3);
        },
        e8 = { some: 0, all: 1 };
      class e9 extends y {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: r } = t,
            n = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : e8[s],
            };
          return (function (t, e, i) {
            let s = (function ({ root: t, ...e }) {
              let i = t || document;
              e2.has(i) || e2.set(i, {});
              let s = e2.get(i),
                r = JSON.stringify(e);
              return (
                s[r] ||
                  (s[r] = new IntersectionObserver(e5, { root: t, ...e })),
                s[r]
              );
            })(e);
            return (
              e1.set(t, i),
              s.observe(t),
              () => {
                e1.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, n, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: s } =
                this.node.getProps(),
              n = e ? i : s;
            n && n(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      var e4 = i(3965);
      let e6 = (0, tR.createContext)({});
      var e7 = i(2482);
      let it = (0, tR.createContext)({ strict: !1 });
      var ie = i(4517);
      let ii = !1;
      function is() {
        window.MotionHandoffIsComplete = !0;
      }
      function ir(t) {
        return s(t.animate) || d.some((e) => l(t[e]));
      }
      function io(t) {
        return !!(ir(t) || t.variants);
      }
      function ia(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let il = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        ih = {};
      for (let t in il) ih[t] = { isEnabled: (e) => il[t].some((t) => !!e[t]) };
      var iu = i(8263);
      let id = Symbol.for("motionComponentSymbol"),
        ic = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function ip(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (ic.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var im = i(1322);
      function iv(t, { style: e, vars: i }, s, r) {
        for (let n in (Object.assign(t.style, e, r && r.getProjectionStyles(s)),
        i))
          t.style.setProperty(n, i[n]);
      }
      let ig = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function iy(t, e, i, s) {
        for (let i in (iv(t, e, void 0, s), e.attrs))
          t.setAttribute(ig.has(i) ? i : (0, im.D)(i), e.attrs[i]);
      }
      var ix = i(285);
      function iP(t, { layout: e, layoutId: i }) {
        return (
          ix.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!tO[t] || "opacity" === t))
        );
      }
      function iw(t, e, i) {
        var s;
        let { style: r } = t,
          n = {};
        for (let o in r)
          ((0, ec.i)(r[o]) ||
            (e.style && (0, ec.i)(e.style[o])) ||
            iP(o, t) ||
            (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (n[o] = r[o]);
        return (
          i && r && "string" == typeof r.willChange && (i.applyWillChange = !1),
          n
        );
      }
      function iT(t, e, i) {
        let s = iw(t, e, i);
        for (let i in t)
          ((0, ec.i)(t[i]) || (0, ec.i)(e[i])) &&
            (s[
              -1 !== ix._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return s;
      }
      var ib = i(4085),
        iS = i(4749),
        iA = i(9979);
      let iV = (t) => (e, i) => {
        let r = (0, tR.useContext)(e6),
          n = (0, tR.useContext)(tk.O),
          o = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: r,
              },
              n,
              o,
              a,
              l,
            ) {
              let h = {
                latestValues: (function (t, e, i, r, n) {
                  var o;
                  let a = {},
                    l = [],
                    h =
                      r &&
                      (null === (o = t.style) || void 0 === o
                        ? void 0
                        : o.willChange) === void 0,
                    u = n(t, {});
                  for (let t in u) a[t] = ep(u[t]);
                  let { initial: d, animate: c } = t,
                    p = ir(t),
                    m = io(t);
                  e &&
                    m &&
                    !p &&
                    !1 !== t.inherit &&
                    (void 0 === d && (d = e.initial),
                    void 0 === c && (c = e.animate));
                  let f = !!i && !1 === i.initial,
                    v = (f = f || !1 === d) ? c : d;
                  return (
                    v &&
                      "boolean" != typeof v &&
                      !s(v) &&
                      iC(t, v, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = f ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (a[e] = i);
                        }
                        for (let t in e) a[t] = e[t];
                      }),
                    h &&
                      (c &&
                        !1 !== d &&
                        !s(c) &&
                        iC(t, c, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, iA.p)(e);
                              i && (0, ea.y4)(t, i);
                            })(l, e);
                        }),
                      l.length && (a.willChange = l.join(","))),
                    a
                  );
                })(n, o, a, !l && t, e),
                renderState: i(),
              };
              return r && (h.mount = (t) => r(n, t, h)), h;
            })(t, e, r, n, i);
        return i ? o() : (0, iS.h)(o);
      };
      function iC(t, e, i) {
        let s = Array.isArray(e) ? e : [e];
        for (let e = 0; e < s.length; e++) {
          let r = (0, ib.o)(t, s[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...s } = r;
            i(s, t);
          }
        }
      }
      let iM = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        iD = () => ({ ...iM(), attrs: {} }),
        iE = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var iR = i(2750);
      let ik = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ij = ix._.length;
      var iL = i(8543);
      function iF(t, e, i) {
        let { style: s, vars: r, transformOrigin: n } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (ix.G.has(t)) {
            o = !0;
            continue;
          }
          if ((0, iL.f)(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = iE(i, iR.j[t]);
            t.startsWith("origin") ? ((a = !0), (n[t] = e)) : (s[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (s.transform = (function (t, e, i) {
                  let s = "",
                    r = !0;
                  for (let n = 0; n < ij; n++) {
                    let o = ix._[n],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = iE(a, iR.j[o]);
                      if (!l) {
                        r = !1;
                        let e = ik[o] || o;
                        s += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (s = s.trim()),
                    i ? (s = i(e, r ? "" : s)) : r && (s = "none"),
                    s
                  );
                })(e, t.transform, i))
              : s.transform && (s.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = n;
          s.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function iB(t, e, i) {
        return "string" == typeof t ? t : tP.px.transform(e + i * t);
      }
      let iW = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        i$ = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function iO(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          originX: r,
          originY: n,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...h
        },
        u,
        d,
      ) {
        if ((iF(t, h, d), u)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== r || void 0 !== n || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let s = iB(e, t.x, t.width),
                r = iB(i, t.y, t.height);
              return `${s} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== n ? n : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== s && (c.scale = s),
          void 0 !== o &&
            (function (t, e, i = 1, s = 0, r = !0) {
              t.pathLength = 1;
              let n = r ? iW : i$;
              t[n.offset] = tP.px.transform(-s);
              let o = tP.px.transform(e),
                a = tP.px.transform(i);
              t[n.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let iU = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        iI = {
          useVisualState: iV({
            scrapeMotionValuesFromProps: iT,
            createRenderState: iD,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              k.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                k.Wi.render(() => {
                  iO(i, s, iU(e.tagName), t.transformTemplate), iy(e, i);
                });
            },
          }),
        },
        iN = {
          useVisualState: iV({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: iw,
            createRenderState: iM,
          }),
        };
      function iX(t, e, i) {
        for (let s in e) (0, ec.i)(e[s]) || iP(s, i) || (t[s] = e[s]);
      }
      let iz = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function iY(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          iz.has(t)
        );
      }
      let iH = (t) => !iY(t);
      try {
        !(function (t) {
          t && (iH = (e) => (e.startsWith("on") ? !iY(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      var iK = i(5843);
      let iZ = { current: null },
        iG = { current: !1 },
        iq = new WeakMap();
      var i_ = i(8459),
        iJ = i(3002),
        iQ = i(534),
        i0 = i(236),
        i1 = i(5232),
        i2 = i(3883);
      let i3 = [...i1.$, i0.$, t$.P],
        i5 = (t) => i3.find((0, i2.l)(t));
      var i8 = i(8967);
      let i9 = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class i4 {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: r,
            visualState: n,
          },
          o = {},
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = i_.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = em.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                k.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = n;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = ir(e)),
            (this.isVariantNode = io(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] && (0, ec.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            iq.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iG.current ||
              (function () {
                if (((iG.current = !0), iu.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iZ.current = t.matches);
                    t.addListener(e), e();
                  } else iZ.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iZ.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (iq.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, k.Pn)(this.notifyUpdate),
          (0, k.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let s = ix.G.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && k.Wi.preRender(this.notifyUpdate),
                s && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), n(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in ih) {
            let e = ih[t];
            if (!e) continue;
            let { isEnabled: i, Feature: s } = e;
            if (
              (!this.features[t] &&
                s &&
                i(this.props) &&
                (this.features[t] = new s(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : to();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < i9.length; e++) {
            let i = i9[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let s in e) {
              let r = e[s],
                n = i[s];
              if ((0, ec.i)(r)) t.addValue(s, r);
              else if ((0, ec.i)(n)) t.addValue(s, (0, ef.BX)(r, { owner: t }));
              else if (n !== r) {
                if (t.hasValue(s)) {
                  let e = t.getValue(s);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(s);
                  t.addValue(s, (0, ef.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, ef.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && ((0, iJ.P)(s) || (0, iQ.W)(s))
                ? (s = parseFloat(s))
                : !i5(s) && t$.P.test(e) && (s = (0, i8.T)(t, e)),
              this.setBaseTarget(t, (0, ec.i)(s) ? s.get() : s)),
            (0, ec.i)(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: s } = this.props;
          if ("string" == typeof s || "object" == typeof s) {
            let r = (0, ib.o)(
              this.props,
              s,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom,
            );
            r && (i = r[t]);
          }
          if (s && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, ec.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new tY.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var i6 = i(5696);
      class i7 extends i4 {
        constructor() {
          super(...arguments), (this.KeyframeResolver = i6.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class st extends i7 {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = iv);
        }
        readValueFromInstance(t, e) {
          if (ix.G.has(e)) {
            let t = (0, iK.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = ((0, iL.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return tx(t, e);
        }
        build(t, e, i) {
          iF(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return iw(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, ec.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class se extends i7 {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = to);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (ix.G.has(e)) {
            let t = (0, iK.A)(e);
            return (t && t.default) || 0;
          }
          return (e = ig.has(e) ? e : (0, im.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return iT(t, e, i);
        }
        build(t, e, i) {
          iO(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          iy(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = iU(t.tagName)), super.mount(t);
        }
      }
      let si = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, s) =>
            "create" === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s)),
        });
      })(
        ((r = {
          animation: { Feature: x },
          exit: { Feature: w },
          inView: { Feature: e9 },
          tap: { Feature: e0 },
          focus: { Feature: e_ },
          hover: { Feature: eq },
          pan: { Feature: tD },
          drag: { Feature: tC, ProjectionNode: eZ, MeasureLayout: tX },
          layout: { ProjectionNode: eZ, MeasureLayout: tX },
        }),
        (n = (t, e) =>
          ip(t)
            ? new se(e)
            : new st(e, { allowProjection: t !== tR.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function ({
            preloadedFeatures: t,
            createVisualElement: e,
            useRender: i,
            useVisualState: s,
            Component: r,
          }) {
            t &&
              (function (t) {
                for (let e in t) ih[e] = { ...ih[e], ...t[e] };
              })(t);
            let n = (0, tR.forwardRef)(function (t, n) {
              var o;
              let a;
              let h = {
                  ...(0, tR.useContext)(e4._),
                  ...t,
                  layoutId: (function ({ layoutId: t }) {
                    let e = (0, tR.useContext)(tj.p).id;
                    return e && void 0 !== t ? e + "-" + t : t;
                  })(t),
                },
                { isStatic: u } = h,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (ir(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || l(e) ? e : void 0,
                        animate: l(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, tR.useContext)(e6));
                  return (0, tR.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [ia(e), ia(i)],
                  );
                })(t),
                c = s(t, u);
              if (!u && iu.j) {
                (0, tR.useContext)(it).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = ih;
                  if (!e && !i) return {};
                  let s = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? s.MeasureLayout
                        : void 0,
                    ProjectionNode: s.ProjectionNode,
                  };
                })(h);
                (a = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, s, r) {
                    var n;
                    let { visualElement: o } = (0, tR.useContext)(e6),
                      a = (0, tR.useContext)(it),
                      l = (0, tR.useContext)(tk.O),
                      h = (0, tR.useContext)(e4._).reducedMotion,
                      u = (0, tR.useRef)();
                    (s = s || a.renderer),
                      !u.current &&
                        s &&
                        (u.current = s(t, {
                          visualState: e,
                          parent: o,
                          props: i,
                          presenceContext: l,
                          blockInitialAnimation: !!l && !1 === l.initial,
                          reducedMotionConfig: h,
                        }));
                    let d = u.current,
                      c = (0, tR.useContext)(tL);
                    d &&
                      !d.projection &&
                      r &&
                      ("html" === d.type || "svg" === d.type) &&
                      (function (t, e, i, s) {
                        let {
                          layoutId: r,
                          layout: n,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: h,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent),
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: n,
                            alwaysMeasureLayout: !!o || (a && X(a)),
                            visualElement: t,
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: s,
                            layoutScroll: l,
                            layoutRoot: h,
                          });
                      })(u.current, i, r, c),
                      (0, tR.useInsertionEffect)(() => {
                        d && d.update(i, l);
                      });
                    let p = i[ie.M],
                      m = (0, tR.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete &&
                          (null === (n = window.MotionHasOptimisedAnimation) ||
                          void 0 === n
                            ? void 0
                            : n.call(window, p)),
                      );
                    return (
                      (0, e7.L)(() => {
                        d &&
                          (d.updateFeatures(),
                          tU.render(d.render),
                          m.current &&
                            d.animationState &&
                            d.animationState.animateChanges());
                      }),
                      (0, tR.useEffect)(() => {
                        d &&
                          (!m.current &&
                            d.animationState &&
                            d.animationState.animateChanges(),
                          (m.current = !1),
                          ii || ((ii = !0), queueMicrotask(is)));
                      }),
                      d
                    );
                  })(r, c, h, e, t.ProjectionNode));
              }
              return (0, tE.jsxs)(e6.Provider, {
                value: d,
                children: [
                  a && d.visualElement
                    ? (0, tE.jsx)(a, { visualElement: d.visualElement, ...h })
                    : null,
                  i(
                    r,
                    t,
                    ((o = d.visualElement),
                    (0, tR.useCallback)(
                      (t) => {
                        t && c.mount && c.mount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          n &&
                            ("function" == typeof n
                              ? n(t)
                              : X(n) && (n.current = t));
                      },
                      [o],
                    )),
                    c,
                    u,
                    d.visualElement,
                  ),
                ],
              });
            });
            return (n[id] = r), n;
          })({
            ...(ip(t) ? iI : iN),
            preloadedFeatures: r,
            useRender: (function (t = !1) {
              return (e, i, s, { latestValues: r }, n) => {
                let o = (
                    ip(e)
                      ? function (t, e, i, s) {
                          let r = (0, tR.useMemo)(() => {
                            let i = iD();
                            return (
                              iO(i, e, iU(s), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            iX(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            s = (function (t, e) {
                              let i = t.style || {},
                                s = {};
                              return (
                                iX(s, i, t),
                                Object.assign(
                                  s,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, tR.useMemo)(() => {
                                      let i = iM();
                                      return (
                                        iF(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e),
                                ),
                                s
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (s.userSelect =
                                s.WebkitUserSelect =
                                s.WebkitTouchCallout =
                                  "none"),
                              (s.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = s),
                            i
                          );
                        }
                  )(i, r, n, e),
                  a = (function (t, e, i) {
                    let s = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (iH(r) ||
                          (!0 === i && iY(r)) ||
                          (!e && !iY(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (s[r] = t[r]);
                    return s;
                  })(i, "string" == typeof e, t),
                  l = e !== tR.Fragment ? { ...a, ...o, ref: s } : {},
                  { children: h } = i,
                  u = (0, tR.useMemo)(() => ((0, ec.i)(h) ? h.get() : h), [h]);
                return (0, tR.createElement)(e, { ...l, children: u });
              };
            })(e),
            createVisualElement: n,
            Component: t,
          });
        }),
      );
    },
    5696: (t, e, i) => {
      i.d(e, { s: () => m });
      var s = i(534),
        r = i(4673),
        n = i(3002),
        o = i(8543);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(5802),
        h = i(5232),
        u = i(8459),
        d = i(282),
        c = i(8967);
      let p = new Set(["auto", "none", "0"]);
      class m extends u.e {
        constructor(t, e, i, s, r) {
          super(t, e, i, s, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && ((s = s.trim()), (0, o.t)(s))) {
              let l = (function t(e, i, s = 1) {
                (0, r.k)(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [l, h] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, s, r] = e;
                  return [`--${null != i ? i : s}`, r];
                })(e);
                if (!l) return;
                let u = window.getComputedStyle(i).getPropertyValue(l);
                if (u) {
                  let t = u.trim();
                  return (0, n.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(h) ? t(h, i, s + 1) : h;
              })(s, e.current);
              void 0 !== l && (t[i] = l),
                i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length))
            return;
          let [s, u] = t,
            d = (0, h.C)(s),
            c = (0, h.C)(u);
          if (d !== c) {
            if ((0, l.mP)(d) && (0, l.mP)(c))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, s.W)(r)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                r = 0;
              for (; r < t.length && !s; ) {
                let e = t[r];
                "string" == typeof e &&
                  !p.has(e) &&
                  (0, d.V)(e).values.length &&
                  (s = t[r]),
                  r++;
              }
              if (s && i) for (let r of e) t[r] = (0, c.T)(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let n = s.length - 1,
            o = s[n];
          (s[n] = l.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current),
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    1322: (t, e, i) => {
      i.d(e, { D: () => s });
      let s = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    8543: (t, e, i) => {
      i.d(e, { f: () => r, t: () => o });
      let s = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = s("--"),
        n = s("var(--"),
        o = (t) => !!n(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    5802: (t, e, i) => {
      i.d(e, { Ei: () => c, lw: () => p, mP: () => a, z2: () => o });
      var s = i(285),
        r = i(850),
        n = i(7162);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === r.Rx || t === n.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        h =
          (t, e) =>
          (i, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let r = s.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = s.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        u = new Set(["x", "y", "z"]),
        d = s._.filter((t) => !u.has(t));
      function c(t) {
        let e = [];
        return (
          d.forEach((i) => {
            let s = t.getValue(i);
            void 0 !== s &&
              (e.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: h(4, 13),
        y: h(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    8967: (t, e, i) => {
      i.d(e, { T: () => o });
      var s = i(282),
        r = i(4227),
        n = i(5843);
      function o(t, e) {
        let i = (0, n.A)(t);
        return (
          i !== r.h && (i = s.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    5843: (t, e, i) => {
      i.d(e, { A: () => o });
      var s = i(236),
        r = i(4227);
      let n = {
          ...i(2750).j,
          color: s.$,
          backgroundColor: s.$,
          outlineColor: s.$,
          fill: s.$,
          stroke: s.$,
          borderColor: s.$,
          borderTopColor: s.$,
          borderRightColor: s.$,
          borderBottomColor: s.$,
          borderLeftColor: s.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => n[t];
    },
    5232: (t, e, i) => {
      i.d(e, { $: () => o, C: () => a });
      var s = i(850),
        r = i(7162),
        n = i(3883);
      let o = [
          s.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, n.l)(t));
    },
    2750: (t, e, i) => {
      i.d(e, { j: () => o });
      var s = i(850),
        r = i(7162);
      let n = { ...s.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: s.bA,
          scaleX: s.bA,
          scaleY: s.bA,
          scaleZ: s.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: s.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: n,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: s.Fq,
          strokeOpacity: s.Fq,
          numOctaves: n,
        };
    },
    3883: (t, e, i) => {
      i.d(e, { l: () => s });
      let s = (t) => (e) => e.test(t);
    },
    285: (t, e, i) => {
      i.d(e, { G: () => r, _: () => s });
      let s = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(s);
    },
    8459: (t, e, i) => {
      i.d(e, { e: () => d, m: () => u });
      var s = i(5802),
        r = i(5386);
      let n = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(n).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, s.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var s;
                  null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), n.forEach((t) => t.complete()), n.clear();
      }
      function h() {
        n.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function u() {
        h(), l();
      }
      class d {
        constructor(t, e, i, s, r, n = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = r),
            (this.isAsync = n);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (n.add(this),
                o || ((o = !0), r.Wi.read(h), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == s ? void 0 : s.get(),
                  n = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let s = i.readValue(e, n);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = n), s && void 0 === r && s.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            n.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), n.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    3734: (t, e, i) => {
      i.d(e, { x: () => r });
      var s = i(4085);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, s.o)(r, e, void 0 !== i ? i : r.custom, t);
      }
    },
    4085: (t, e, i) => {
      function s(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function r(t, e, i, r) {
        if ("function" == typeof e) {
          let [n, o] = s(r);
          e = e(void 0 !== i ? i : t.custom, n, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, o] = s(r);
          e = e(void 0 !== i ? i : t.custom, n, o);
        }
        return e;
      }
      i.d(e, { o: () => r });
    },
    8890: (t, e, i) => {
      i.d(e, { C: () => o });
      var s = i(2083),
        r = i(9603),
        n = i(3734);
      function o(t, e) {
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...a
        } = (0, n.x)(t, e) || {};
        for (let e in (a = { ...a, ...i })) {
          let i = (0, s.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, r.BX)(i));
        }
      }
    },
    8250: (t, e, i) => {
      i.d(e, { c: () => s });
      let s = { skipAnimations: !1, useManualTiming: !1 };
    },
    2840: (t, e, i) => {
      function s(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { cl: () => r, y4: () => s });
    },
    2361: (t, e, i) => {
      i.d(e, { u: () => s });
      let s = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    4673: (t, e, i) => {
      i.d(e, { K: () => r, k: () => n });
      var s = i(4380);
      let r = s.Z,
        n = s.Z;
    },
    8370: (t, e, i) => {
      i.d(e, { s: () => h });
      var s = i(4673),
        r = i(2361),
        n = i(9022),
        o = i(5018),
        a = i(4380),
        l = i(3130);
      function h(t, e, { clamp: i = !0, ease: h, mixer: u } = {}) {
        let d = t.length;
        if (
          ((0, s.k)(
            d === e.length,
            "Both input and output ranges must be the same length",
          ),
          1 === d)
        )
          return () => e[0];
        if (2 === d && t[0] === t[1]) return () => e[1];
        t[0] > t[d - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let c = (function (t, e, i) {
            let s = [],
              r = i || l.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || a.Z : e;
                o = (0, n.z)(t, o);
              }
              s.push(o);
            }
            return s;
          })(e, h, u),
          p = c.length,
          m = (e) => {
            let i = 0;
            if (p > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let s = (0, o.Y)(t[i], t[i + 1], e);
            return c[i](s);
          };
        return i ? (e) => m((0, r.u)(t[0], t[d - 1], e)) : m;
      }
    },
    8263: (t, e, i) => {
      i.d(e, { j: () => s });
      let s = "undefined" != typeof window;
    },
    3002: (t, e, i) => {
      i.d(e, { P: () => s });
      let s = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    534: (t, e, i) => {
      i.d(e, { W: () => s });
      let s = (t) => /^0[^.\s]+$/u.test(t);
    },
    3130: (t, e, i) => {
      i.d(e, { C: () => A });
      var s = i(5343),
        r = i(4673);
      function n(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var o = i(9963),
        a = i(8185),
        l = i(2924);
      function h(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let u = (t, e, i) => {
          let s = t * t,
            r = i * (e * e - s) + s;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        d = [o.$, a.m, l.J],
        c = (t) => d.find((e) => e.test(t));
      function p(t) {
        let e = c(t);
        if (
          ((0, r.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - s;
                (r = n(l, s, t + 1 / 3)),
                  (o = n(l, s, t)),
                  (a = n(l, s, t - 1 / 3));
              } else r = o = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let m = (t, e) => {
        let i = p(t),
          r = p(e);
        if (!i || !r) return h(t, e);
        let n = { ...i };
        return (t) => (
          (n.red = u(i.red, r.red, t)),
          (n.green = u(i.green, r.green, t)),
          (n.blue = u(i.blue, r.blue, t)),
          (n.alpha = (0, s.t)(i.alpha, r.alpha, t)),
          a.m.transform(n)
        );
      };
      var f = i(9022),
        v = i(236),
        g = i(282),
        y = i(8543);
      let x = new Set(["none", "hidden"]);
      function P(t, e) {
        return (i) => (0, s.t)(t, e, i);
      }
      function w(t) {
        return "number" == typeof t
          ? P
          : "string" == typeof t
            ? (0, y.t)(t)
              ? h
              : v.$.test(t)
                ? m
                : S
            : Array.isArray(t)
              ? T
              : "object" == typeof t
                ? v.$.test(t)
                  ? m
                  : b
                : h;
      }
      function T(t, e) {
        let i = [...t],
          s = i.length,
          r = t.map((t, i) => w(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = r[e](t);
          return i;
        };
      }
      function b(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (s[r] = w(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let S = (t, e) => {
        let i = g.P.createTransformer(e),
          s = (0, g.V)(t),
          n = (0, g.V)(e);
        return s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
          ? (x.has(t) && !n.values.length) || (x.has(e) && !s.values.length)
            ? (function (t, e) {
                return x.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, f.z)(
                T(
                  (function (t, e) {
                    var i;
                    let s = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let n = 0; n < e.values.length; n++) {
                      let o = e.types[n],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (s[n] = l), r[o]++;
                    }
                    return s;
                  })(s, n),
                  n.values,
                ),
                i,
              )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            h(t, e));
      };
      function A(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, s.t)(t, e, i)
          : w(t)(t, e);
      }
    },
    5343: (t, e, i) => {
      i.d(e, { t: () => s });
      let s = (t, e, i) => t + (e - t) * i;
    },
    4380: (t, e, i) => {
      i.d(e, { Z: () => s });
      let s = (t) => t;
    },
    4570: (t, e, i) => {
      i.d(e, { Y: () => n });
      var s = i(5343),
        r = i(5018);
      function n(t) {
        let e = [0];
        return (
          (function (t, e) {
            let i = t[t.length - 1];
            for (let n = 1; n <= e; n++) {
              let o = (0, r.Y)(0, e, n);
              t.push((0, s.t)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    9022: (t, e, i) => {
      i.d(e, { z: () => r });
      let s = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(s);
    },
    5018: (t, e, i) => {
      i.d(e, { Y: () => s });
      let s = (t, e, i) => {
        let s = e - t;
        return 0 === s ? 1 : (i - t) / s;
      };
    },
    2083: (t, e, i) => {
      i.d(e, { Y: () => n, p: () => r });
      var s = i(3695);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        n = (t) => ((0, s.C)(t) ? t[t.length - 1] || 0 : t);
    },
    777: (t, e, i) => {
      i.d(e, { L: () => r });
      var s = i(2840);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, s.y4)(this.subscriptions, t),
            () => (0, s.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < s; r++) {
                let s = this.subscriptions[r];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    8968: (t, e, i) => {
      i.d(e, { X: () => r, w: () => s });
      let s = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    4749: (t, e, i) => {
      i.d(e, { h: () => r });
      var s = i(7577);
      function r(t) {
        let e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    8578: (t, e, i) => {
      i.d(e, { c: () => s });
      let s = { current: !1 };
    },
    2482: (t, e, i) => {
      i.d(e, { L: () => r });
      var s = i(7577);
      let r = i(8263).j ? s.useLayoutEffect : s.useEffect;
    },
    8702: (t, e, i) => {
      i.d(e, { R: () => s });
      function s(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    9603: (t, e, i) => {
      i.d(e, { BX: () => u, Hg: () => h, S1: () => l });
      var s = i(777),
        r = i(8702),
        n = i(8111),
        o = i(5386);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class h {
        constructor(t, e = {}) {
          (this.version = "11.5.6"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = n.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = n.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new s.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = n.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function u(t, e) {
        return new h(t, e);
      }
    },
    9963: (t, e, i) => {
      i.d(e, { $: () => r });
      var s = i(8185);
      let r = {
        test: (0, i(3996).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            s = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (s = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (s = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (s += s),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(s, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: s.m.transform,
      };
    },
    2924: (t, e, i) => {
      i.d(e, { J: () => a });
      var s = i(850),
        r = i(7162),
        n = i(5423),
        o = i(3996);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, n.Nw)(e)) +
          ", " +
          r.aQ.transform((0, n.Nw)(i)) +
          ", " +
          (0, n.Nw)(s.Fq.transform(o)) +
          ")",
      };
    },
    236: (t, e, i) => {
      i.d(e, { $: () => a });
      var s = i(5423),
        r = i(9963),
        n = i(2924),
        o = i(8185);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || n.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : n.J.test(t)
              ? n.J.parse(t)
              : r.$.parse(t),
        transform: (t) =>
          (0, s.HD)(t)
            ? t
            : t.hasOwnProperty("red")
              ? o.m.transform(t)
              : n.J.transform(t),
      };
    },
    8185: (t, e, i) => {
      i.d(e, { m: () => h });
      var s = i(2361),
        r = i(850),
        n = i(5423),
        o = i(3996);
      let a = (t) => (0, s.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        h = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, n.Nw)(r.Fq.transform(s)) +
            ")",
        };
    },
    3996: (t, e, i) => {
      i.d(e, { d: () => n, i: () => r });
      var s = i(5423);
      let r = (t, e) => (i) =>
          !!(
            ((0, s.HD)(i) && s.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, s.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        n = (t, e, i) => (r) => {
          if (!(0, s.HD)(r)) return r;
          let [n, o, a, l] = r.match(s.KP);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    4227: (t, e, i) => {
      i.d(e, { h: () => l });
      var s = i(282),
        r = i(5423);
      let n = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(r.KP) || [];
        if (!s) return t;
        let o = i.replace(s, ""),
          a = n.has(e) ? 1 : 0;
        return s !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...s.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    282: (t, e, i) => {
      i.d(e, { P: () => c, V: () => l });
      var s = i(236),
        r = i(5423);
      let n = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          h = 0,
          u = e
            .replace(
              a,
              (t) => (
                s.$.test(t)
                  ? (r.color.push(h), l.push(o), i.push(s.$.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(h), l.push("var"), i.push(t))
                    : (r.number.push(h), l.push(n), i.push(parseFloat(t))),
                ++h,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: u, indexes: r, types: l };
      }
      function h(t) {
        return l(t).values;
      }
      function u(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let h = 0; h < a; h++)
            if (((l += e[h]), void 0 !== t[h])) {
              let e = i[h];
              e === n
                ? (l += (0, r.Nw)(t[h]))
                : e === o
                  ? (l += s.$.transform(t[h]))
                  : (l += t[h]);
            }
          return l;
        };
      }
      let d = (t) => ("number" == typeof t ? 0 : t),
        c = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: h,
          createTransformer: u,
          getAnimatableNone: function (t) {
            let e = h(t);
            return u(t)(e.map(d));
          },
        };
    },
    850: (t, e, i) => {
      i.d(e, { Fq: () => n, Rx: () => r, bA: () => o });
      var s = i(2361);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        n = { ...r, transform: (t) => (0, s.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    7162: (t, e, i) => {
      i.d(e, {
        $C: () => u,
        RW: () => n,
        aQ: () => o,
        px: () => a,
        vh: () => l,
        vw: () => h,
      });
      var s = i(5423);
      let r = (t) => ({
          test: (e) =>
            (0, s.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        n = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        h = r("vw"),
        u = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    5423: (t, e, i) => {
      i.d(e, {
        HD: () => a,
        KP: () => r,
        Nw: () => s,
        Rw: () => l,
        dA: () => n,
        mj: () => o,
      });
      let s = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        n =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    4213: (t, e, i) => {
      i.d(e, { K: () => l });
      var s = i(9603),
        r = i(9979),
        n = i(2840);
      class o extends s.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = (0, r.p)(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let s = !1;
          return () => {
            if (s) return;
            s = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, n.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
      var a = i(1551);
      function l(t, e) {
        var i, s;
        if (!t.applyWillChange) return;
        let r = t.getValue("willChange");
        if (
          (r ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((r = new o("auto")), t.addValue("willChange", r)),
          (s = r),
          (0, a.i)(s) && s.add)
        )
          return r.add(e);
      }
    },
    9979: (t, e, i) => {
      i.d(e, { p: () => o });
      var s = i(129),
        r = i(1322),
        n = i(285);
      function o(t) {
        return n.G.has(t) ? "transform" : s.t.has(t) ? (0, r.D)(t) : void 0;
      }
    },
    1551: (t, e, i) => {
      i.d(e, { i: () => s });
      let s = (t) => !!(t && t.getVelocity);
    },
  });
