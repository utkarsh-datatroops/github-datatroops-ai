"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [950],
  {
    11946: function (t, e, i) {
      i.d(e, {
        s: function () {
          return s;
        },
      });
      var n = i(68691),
        r = i(87581);
      class s {
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
            if (!(0, r.t)() || !e.attachTimeline)
              return (
                e.pause(),
                (0, n.U)((t) => {
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
    },
    65637: function (t, e, i) {
      i.d(e, {
        y: function () {
          return p;
        },
      });
      var n = i(63078),
        r = i(37521),
        s = i(69276),
        o = i(80557),
        a = i(27403),
        l = i(13950),
        u = i(66323),
        h = i(88683),
        c = i(64574),
        d = i(67533);
      let f = (0, r.X)(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate"),
      );
      class p extends a.v {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: r,
            keyframes: s,
          } = this.options;
          (this.resolver = new n.s(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: u,
            name: f,
            startTime: p,
          } = this.options;
          if (!(null === (i = u.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if ("spring" === (n = this.options).type || !(0, c.hR)(n.ease)) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: u,
                ...h
              } = this.options,
              c = (function (t, e) {
                let i = new l.s({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, h);
            1 === (t = c.keyframes).length && (t[1] = t[0]),
              (r = c.duration),
              (s = c.times),
              (o = c.ease),
              (a = "keyframes");
          }
          let m = (0, h.p)(u.owner.current, f, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (m.startTime = null != p ? p : this.calcStartTime()),
            this.pendingTimeline
              ? ((m.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (m.onfinish = () => {
                  let { onComplete: i } = this.options;
                  u.set((0, d.$)(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: m,
              duration: r,
              times: s,
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
          return (0, o.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, o.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, o.w)(t);
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
            if (!e) return s.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return s.Z;
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
            duration: n,
            type: r,
            ease: s,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: u,
                element: h,
                ...c
              } = this.options,
              d = new l.s({
                ...c,
                keyframes: i,
                duration: n,
                type: r,
                ease: s,
                times: a,
                isGenerator: !0,
              }),
              f = (0, o.w)(this.time);
            t.setWithVelocity(d.sample(f - 10).value, d.sample(f).value, 10);
          }
          let { onStop: u } = this.options;
          u && u(), this.cancel();
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
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            f() &&
            i &&
            u.t.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
    },
    27403: function (t, e, i) {
      i.d(e, {
        v: function () {
          return h;
        },
      });
      var n = i(59993),
        r = i(23653),
        s = i(74097),
        o = i(19047),
        a = i(83646);
      let l = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (a.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var u = i(67533);
      class h {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: s = 0,
          repeatType: o = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = n.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: s,
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
          (this.resolvedAt = n.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: r,
            velocity: a,
            delay: h,
            onComplete: c,
            onUpdate: d,
            isGenerator: f,
          } = this.options;
          if (
            !f &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                a = l(r, e),
                u = l(s, e);
              return (
                (0, o.K)(
                  a === u,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`,
                ),
                !!a &&
                  !!u &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, r, a)
          ) {
            if (s.c.current || !h) {
              null == d || d((0, u.$)(t, this.options, e)),
                null == c || c(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let p = this.initPlayback(t, e);
          !1 !== p &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...p }),
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
    13950: function (t, e, i) {
      i.d(e, {
        s: function () {
          return A;
        },
        y: function () {
          return V;
        },
      });
      var n = i(23653),
        r = i(65122),
        s = i(27529);
      function o({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: o = 10,
        bounceStiffness: a = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: c = 0.5,
        restSpeed: d,
      }) {
        let f, p;
        let m = t[0],
          v = { done: !1, value: m },
          g = (t) => (void 0 !== u && t < u) || (void 0 !== h && t > h),
          y = (t) =>
            void 0 === u
              ? h
              : void 0 === h
                ? u
                : Math.abs(u - t) < Math.abs(h - t)
                  ? u
                  : h,
          x = i * e,
          P = m + x,
          w = void 0 === l ? P : l(P);
        w !== P && (x = w - m);
        let T = (t) => -x * Math.exp(-t / n),
          b = (t) => w + T(t),
          S = (t) => {
            let e = T(t),
              i = b(t);
            (v.done = Math.abs(e) <= c), (v.value = v.done ? w : i);
          },
          A = (t) => {
            g(v.value) &&
              ((f = t),
              (p = (0, r.S)({
                keyframes: [v.value, y(v.value)],
                velocity: (0, s.P)(b, t, v.value),
                damping: o,
                stiffness: a,
                restDelta: c,
                restSpeed: d,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (p || void 0 !== f || ((e = !0), S(t), A(t)),
              void 0 !== f && t >= f)
                ? p.next(t - f)
                : (e || S(t), v);
            },
          }
        );
      }
      var a = i(18298),
        l = i(19379),
        u = i(72586),
        h = i(42548),
        c = i(92007);
      function d({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = (0, l.N)(n) ? n.map(u.R) : (0, u.R)(n),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, c.Y)(e)).map((e) => e * t),
          d = (0, h.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || a.mZ).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = d(e)), (s.done = e >= t), s),
        };
      }
      var f = i(27403),
        p = i(89654),
        m = i(5389),
        v = i(49653),
        g = i(80557),
        y = i(51506),
        x = i(59993),
        P = i(86219);
      let w = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => P.Wi.update(e, !0),
          stop: () => (0, P.Pn)(e),
          now: () =>
            P.frameData.isProcessing ? P.frameData.timestamp : x.X.now(),
        };
      };
      var T = i(67533);
      let b = { decay: o, inertia: o, tween: d, keyframes: d, spring: r.S },
        S = (t) => t / 100;
      class A extends f.v {
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
              keyframes: s,
            } = this.options,
            o = (null == r ? void 0 : r.KeyframeResolver) || n.e;
          (this.resolver = new o(
            s,
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
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = b[n] || d;
          l !== d &&
            "number" != typeof t[0] &&
            ((e = (0, p.z)(S, (0, m.C)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, v.i)(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
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
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: f,
            repeatDelay: p,
            onUpdate: m,
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
          let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let x = this.currentTime,
            P = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === f
                  ? ((i = 1 - i), p && (i -= p / h))
                  : "mirror" === f && (P = s)),
              (x = (0, y.u)(0, 1, i) * h);
          }
          let w = g ? { done: !1, value: a[0] } : P.next(x);
          o && (w.value = o(w.value));
          let { done: b } = w;
          g ||
            null === l ||
            (b =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && b));
          return (
            S && void 0 !== n && (w.value = (0, T.$)(a, this.options, n)),
            m && m(w.value),
            S && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, g.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, g.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, g.w)(t)),
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
            e && (this.time = (0, g.X)(this.currentTime));
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
          let { driver: t = w, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
              ? "finished" === this.state && (this.startTime = n)
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
      function V(t) {
        return new A(t);
      }
    },
    66323: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    64574: function (t, e, i) {
      i.d(e, {
        hR: function () {
          return r;
        },
        eB: function () {
          return l;
        },
      });
      let n = (t) => Array.isArray(t) && "number" == typeof t[0];
      function r(t) {
        return !!(
          !t ||
          ("string" == typeof t && t in o) ||
          n(t) ||
          (Array.isArray(t) && t.every(r))
        );
      }
      let s = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        o = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: s([0, 0.65, 0.55, 1]),
          circOut: s([0.55, 0, 1, 0.45]),
          backIn: s([0.31, 0.01, 0.66, -0.59]),
          backOut: s([0.33, 1.53, 0.69, 0.99]),
        };
      function a(t) {
        return l(t) || o.easeOut;
      }
      function l(t) {
        if (t) return n(t) ? s(t) : Array.isArray(t) ? t.map(a) : o[t];
      }
    },
    88683: function (t, e, i) {
      i.d(e, {
        p: function () {
          return r;
        },
      });
      var n = i(64574);
      function r(
        t,
        e,
        i,
        {
          delay: r = 0,
          duration: s = 300,
          repeat: o = 0,
          repeatType: a = "loop",
          ease: l,
          times: u,
        } = {},
      ) {
        let h = { [e]: i };
        u && (h.offset = u);
        let c = (0, n.eB)(l);
        return (
          Array.isArray(c) && (h.easing = c),
          t.animate(h, {
            delay: r,
            duration: s,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: o + 1,
            direction: "reverse" === a ? "alternate" : "normal",
          })
        );
      }
    },
    67533: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      let n = (t) => null !== t;
      function r(t, { repeat: e, repeatType: i = "loop" }, r) {
        let s = t.filter(n),
          o = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== r ? r : s[o];
      }
    },
    88439: function (t, e, i) {
      i.d(e, {
        Fb: function () {
          return o;
        },
        gx: function () {
          return a;
        },
      });
      var n = i(19047),
        r = i(51506),
        s = i(80557);
      function o({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: i = 0,
        mass: o = 1,
      }) {
        let l, u;
        (0, n.K)(
          t <= (0, s.w)(10),
          "Spring duration must be 10 seconds or less",
        );
        let h = 1 - e;
        (h = (0, r.u)(0.05, 1, h)),
          (t = (0, r.u)(0.01, 10, (0, s.X)(t))),
          h < 1
            ? ((l = (e) => {
                let n = e * h,
                  r = n * t;
                return 0.001 - ((n - i) / a(e, h)) * Math.exp(-r);
              }),
              (u = (e) => {
                let n = e * h * t,
                  r = Math.pow(h, 2) * Math.pow(e, 2) * t,
                  s = a(Math.pow(e, 2), h);
                return (
                  ((n * i + i - r) *
                    Math.exp(-n) *
                    (-l(e) + 0.001 > 0 ? -1 : 1)) /
                  s
                );
              }))
            : ((l = (e) => -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
              (u = (e) => t * t * (i - e) * Math.exp(-e * t)));
        let c = (function (t, e, i) {
          let n = i;
          for (let i = 1; i < 12; i++) n -= t(n) / e(n);
          return n;
        })(l, u, 5 / t);
        if (((t = (0, s.w)(t)), isNaN(c)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          let e = Math.pow(c, 2) * o;
          return {
            stiffness: e,
            damping: 2 * h * Math.sqrt(o * e),
            duration: t,
          };
        }
      }
      function a(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
    },
    65122: function (t, e, i) {
      i.d(e, {
        S: function () {
          return u;
        },
      });
      var n = i(80557),
        r = i(27529),
        s = i(88439);
      let o = ["duration", "bounce"],
        a = ["stiffness", "damping", "mass"];
      function l(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function u({ keyframes: t, restDelta: e, restSpeed: i, ...u }) {
        let h;
        let c = t[0],
          d = t[t.length - 1],
          f = { done: !1, value: c },
          {
            stiffness: p,
            damping: m,
            mass: v,
            duration: g,
            velocity: y,
            isResolvedFromDuration: x,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!l(t, a) && l(t, o)) {
              let i = (0, s.Fb)(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...u, velocity: -(0, n.X)(u.velocity || 0) }),
          P = y || 0,
          w = m / (2 * Math.sqrt(p * v)),
          T = d - c,
          b = (0, n.X)(Math.sqrt(p / v)),
          S = 5 > Math.abs(T);
        if ((i || (i = S ? 0.01 : 2), e || (e = S ? 0.005 : 0.5), w < 1)) {
          let t = (0, s.gx)(b, w);
          h = (e) =>
            d -
            Math.exp(-w * b * e) *
              (((P + w * b * T) / t) * Math.sin(t * e) + T * Math.cos(t * e));
        } else if (1 === w)
          h = (t) => d - Math.exp(-b * t) * (T + (P + b * T) * t);
        else {
          let t = b * Math.sqrt(w * w - 1);
          h = (e) => {
            let i = Math.exp(-w * b * e),
              n = Math.min(t * e, 300);
            return (
              d -
              (i * ((P + w * b * T) * Math.sinh(n) + t * T * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (x && g) || null,
          next: (t) => {
            let s = h(t);
            if (x) f.done = t >= g;
            else {
              let o = 0;
              w < 1 && (o = 0 === t ? (0, n.w)(P) : (0, r.P)(h, t, s));
              let a = Math.abs(o) <= i,
                l = Math.abs(d - s) <= e;
              f.done = a && l;
            }
            return (f.value = f.done ? d : s), f;
          },
        };
      }
    },
    49653: function (t, e, i) {
      i.d(e, {
        E: function () {
          return n;
        },
        i: function () {
          return r;
        },
      });
      let n = 2e4;
      function r(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < n; ) (e += 50), (i = t.next(e));
        return e >= n ? 1 / 0 : e;
      }
    },
    27529: function (t, e, i) {
      i.d(e, {
        P: function () {
          return r;
        },
      });
      var n = i(83476);
      function r(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.R)(i - t(r), e - r);
      }
    },
    1816: function (t, e, i) {
      i.d(e, {
        v: function () {
          return y;
        },
      });
      var n = i(80557),
        r = i(26019);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
              ? t.startsWith("scale")
                ? o(e[1])
                : s
              : l;
      var h = i(69792),
        c = i(565),
        d = i(74097),
        f = i(67533),
        p = i(86219),
        m = i(65637),
        v = i(13950),
        g = i(11946);
      let y =
        (t, e, i, r = {}, s, o, a) =>
        (l) => {
          let y = (0, h.e)(r, t) || {},
            x = y.delay || r.delay || 0,
            { elapsed: P = 0 } = r;
          P -= (0, n.w)(x);
          let w = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...y,
            delay: -P,
            onUpdate: (t) => {
              e.set(t), y.onUpdate && y.onUpdate(t);
            },
            onComplete: () => {
              l(), y.onComplete && y.onComplete(), a && a();
            },
            onStop: a,
            name: t,
            motionValue: e,
            element: o ? void 0 : s,
          };
          (0, h.r)(y) || (w = { ...w, ...u(t, w) }),
            w.duration && (w.duration = (0, n.w)(w.duration)),
            w.repeatDelay && (w.repeatDelay = (0, n.w)(w.repeatDelay)),
            void 0 !== w.from && (w.keyframes[0] = w.from);
          let T = !1;
          if (
            ((!1 !== w.type && (0 !== w.duration || w.repeatDelay)) ||
              ((w.duration = 0), 0 !== w.delay || (T = !0)),
            (d.c.current || c.c.skipAnimations) &&
              ((T = !0), (w.duration = 0), (w.delay = 0)),
            T && !o && void 0 !== e.get())
          ) {
            let t = (0, f.$)(w.keyframes, y);
            if (void 0 !== t)
              return (
                p.Wi.update(() => {
                  w.onUpdate(t), w.onComplete();
                }),
                new g.s([])
              );
          }
          return !o && m.y.supports(w) ? new m.y(w) : new v.s(w);
        };
    },
    89334: function (t, e, i) {
      i.d(e, {
        D: function () {
          return o;
        },
      });
      var n = i(1816),
        r = i(20804),
        s = i(77599);
      function o(t, e, i) {
        let o = (0, s.i)(t) ? t : (0, r.BX)(t);
        return o.start((0, n.v)("", o, e, i)), o.animation;
      }
    },
    72994: function (t, e, i) {
      i.d(e, {
        w: function () {
          return h;
        },
      });
      var n = i(26019),
        r = i(1816),
        s = i(76159),
        o = i(69792),
        a = i(2087),
        l = i(89081),
        u = i(86219);
      function h(t, e, { delay: i = 0, transitionOverride: h, type: c } = {}) {
        var d;
        let {
          transition: f = t.getDefaultTransition(),
          transitionEnd: p,
          ...m
        } = e;
        h && (f = h);
        let v = [],
          g = c && t.animationState && t.animationState.getState()[c];
        for (let e in m) {
          let s = t.getValue(
              e,
              null !== (d = t.latestValues[e]) && void 0 !== d ? d : null,
            ),
            h = m[e];
          if (
            void 0 === h ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(g, e))
          )
            continue;
          let c = { delay: i, ...(0, o.e)(f || {}, e) },
            p = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, a.s)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, u.Wi);
              null !== t && ((c.startTime = t), (p = !0));
            }
          }
          s.start(
            (0, r.v)(
              e,
              s,
              h,
              t.shouldReduceMotion && n.G.has(e) ? { type: !1 } : c,
              t,
              p,
              (0, l.K)(t, e),
            ),
          );
          let y = s.animation;
          y && v.push(y);
        }
        return (
          p &&
            Promise.all(v).then(() => {
              u.Wi.update(() => {
                p && (0, s.C)(t, p);
              });
            }),
          v
        );
      }
    },
    15447: function (t, e, i) {
      i.d(e, {
        d: function () {
          return a;
        },
      });
      var n = i(70352),
        r = i(72994);
      function s(t, e, i = {}) {
        var a;
        let l = (0, n.x)(
            t,
            e,
            "exit" === i.type
              ? null === (a = t.presenceContext) || void 0 === a
                ? void 0
                : a.custom
              : void 0,
          ),
          { transition: u = t.getDefaultTransition() || {} } = l || {};
        i.transitionOverride && (u = i.transitionOverride);
        let h = l
            ? () => Promise.all((0, r.w)(t, l, i))
            : () => Promise.resolve(),
          c =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: a,
                    staggerDirection: l,
                  } = u;
                  return (function (t, e, i = 0, n = 0, r = 1, a) {
                    let l = [],
                      u = (t.variantChildren.size - 1) * n,
                      h = 1 === r ? (t = 0) => t * n : (t = 0) => u - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(o)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            l.push(
                              s(t, e, { ...a, delay: i + h(n) }).then(() =>
                                t.notify("AnimationComplete", e),
                              ),
                            );
                        }),
                      Promise.all(l)
                    );
                  })(t, e, r + n, a, l, i);
                }
              : () => Promise.resolve(),
          { when: d } = u;
        if (!d) return Promise.all([h(), c(i.delay)]);
        {
          let [t, e] = "beforeChildren" === d ? [h, c] : [c, h];
          return t().then(() => e());
        }
      }
      function o(t, e) {
        return t.sortNodePosition(e);
      }
      function a(t, e, i = {}) {
        let o;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          o = Promise.all(e.map((e) => s(t, e, i)));
        else if ("string" == typeof e) o = s(t, e, i);
        else {
          let s = "function" == typeof e ? (0, n.x)(t, e, i.custom) : e;
          o = Promise.all((0, r.w)(t, s, i));
        }
        return o.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    65908: function (t, e, i) {
      i.d(e, {
        M: function () {
          return s;
        },
        t: function () {
          return r;
        },
      });
      var n = i(51580);
      let r = "framerAppearId",
        s = "data-" + (0, n.D)(r);
    },
    2087: function (t, e, i) {
      i.d(e, {
        s: function () {
          return r;
        },
      });
      var n = i(65908);
      function r(t) {
        return t.props[n.M];
      }
    },
    64572: function (t, e, i) {
      i.d(e, {
        H: function () {
          return n;
        },
      });
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
    },
    66925: function (t, e, i) {
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    69792: function (t, e, i) {
      function n({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: n,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return n;
        },
      });
    },
    73241: function (t, e, i) {
      i.d(e, {
        hO: function () {
          return o;
        },
        oO: function () {
          return s;
        },
      });
      var n = i(2265),
        r = i(67797);
      function s() {
        let t = (0, n.useContext)(r.O);
        if (null === t) return [!0, null];
        let { isPresent: e, onExitComplete: i, register: s } = t,
          o = (0, n.useId)();
        (0, n.useEffect)(() => s(o), []);
        let a = (0, n.useCallback)(() => i && i(o), [o, i]);
        return !e && i ? [!1, a] : [!0];
      }
      function o() {
        var t;
        return null === (t = (0, n.useContext)(r.O)) || t.isPresent;
      }
    },
    5050: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    36539: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({ strict: !1 });
    },
    29791: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    37628: function (t, e, i) {
      i.d(e, {
        v: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    67797: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    86094: function (t, e, i) {
      i.d(e, {
        g: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    79849: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(45834);
      let r = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, n.G2)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    45834: function (t, e, i) {
      i.d(e, {
        CG: function () {
          return o;
        },
        G2: function () {
          return a;
        },
        XL: function () {
          return l;
        },
      });
      var n = i(13194),
        r = i(73108),
        s = i(62718);
      let o = (0, n._)(0.33, 1.53, 0.69, 0.99),
        a = (0, s.M)(o),
        l = (0, r.o)(a);
    },
    68536: function (t, e, i) {
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(73108),
        r = i(62718);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    13194: function (t, e, i) {
      i.d(e, {
        _: function () {
          return s;
        },
      });
      var n = i(69276);
      let r = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function s(t, e, i, s) {
        if (t === e && i === s) return n.Z;
        let o = (e) =>
          (function (t, e, i, n, s) {
            let o, a;
            let l = 0;
            do (o = r((a = e + (i - e) / 2), n, s) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : r(o(t), e, s));
      }
    },
    18298: function (t, e, i) {
      i.d(e, {
        Vv: function () {
          return s;
        },
        YQ: function () {
          return r;
        },
        mZ: function () {
          return o;
        },
      });
      var n = i(13194);
      let r = (0, n._)(0.42, 0, 1, 1),
        s = (0, n._)(0, 0, 0.58, 1),
        o = (0, n._)(0.42, 0, 0.58, 1);
    },
    73108: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    62718: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    19379: function (t, e, i) {
      i.d(e, {
        N: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t) && "number" != typeof t[0];
    },
    72586: function (t, e, i) {
      i.d(e, {
        R: function () {
          return c;
        },
      });
      var n = i(19047),
        r = i(13194),
        s = i(69276),
        o = i(18298),
        a = i(68536),
        l = i(45834),
        u = i(79849);
      let h = {
          linear: s.Z,
          easeIn: o.YQ,
          easeInOut: o.mZ,
          easeOut: o.Vv,
          circIn: a.Z7,
          circInOut: a.X7,
          circOut: a.Bn,
          backIn: l.G2,
          backInOut: l.XL,
          backOut: l.CG,
          anticipate: u.L,
        },
        c = (t) => {
          if (Array.isArray(t)) {
            (0, n.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [e, i, s, o] = t;
            return (0, r._)(e, i, s, o);
          }
          return "string" == typeof t
            ? ((0, n.k)(void 0 !== h[t], `Invalid easing type '${t}'`), h[t])
            : t;
        };
    },
    23731: function (t, e, i) {
      i.d(e, {
        E: function () {
          return n;
        },
      });
      function n(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
    },
    33787: function (t, e, i) {
      i.d(e, {
        a: function () {
          return s;
        },
      });
      var n = i(23731),
        r = i(63280);
      function s(t, e, i, s) {
        return (0, n.E)(t, e, (0, r.s)(i), s);
      }
    },
    63280: function (t, e, i) {
      i.d(e, {
        Q: function () {
          return r;
        },
        s: function () {
          return s;
        },
      });
      var n = i(83414);
      function r(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let s = (t) => (e) => (0, n.D)(e) && t(e, r(e));
    },
    83414: function (t, e, i) {
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    },
    2981: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
        B: function () {
          return r;
        },
      });
      var n = i(565);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (n = !1),
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
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: f,
            postRender: p,
          } = l,
          m = () => {
            let r = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              f.process(o),
              p.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(m));
          },
          v = () => {
            (i = !0), (s = !0), o.isProcessing || t(m);
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))), t
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
    86219: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(69276);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0,
      );
    },
    78172: function (t, e, i) {
      i.d(e, {
        g: function () {
          return n;
        },
      });
      let { schedule: n, cancel: r } = (0, i(2981).Z)(queueMicrotask, !1);
    },
    59993: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(565),
        s = i(86219);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now(),
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    75153: function (t, e, i) {
      function n(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      i.d(e, {
        fJ: function () {
          return o;
        },
        gD: function () {
          return a;
        },
      });
      let r = n("dragHorizontal"),
        s = n("dragVertical");
      function o(t) {
        let e = !1;
        if ("y" === t) e = s();
        else if ("x" === t) e = r();
        else {
          let t = r(),
            i = s();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function a() {
        let t = o(!0);
        return !t || (t(), !1);
      }
    },
    20847: function (t, e, i) {
      i.d(e, {
        L: function () {
          return n;
        },
      });
      class n {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    99666: function (t, e, i) {
      i.d(e, {
        s: function () {
          return x;
        },
      });
      var n = i(64572),
        r = i(66925);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var o = i(56859),
        a = i(70352),
        l = i(53552),
        u = i(15447);
      let h = l.V.length,
        c = [...l.e].reverse(),
        d = l.e.length;
      function f(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function p() {
        return {
          animate: f(!0),
          whileInView: f(),
          whileHover: f(),
          whileTap: f(),
          whileDrag: f(),
          whileFocus: f(),
          exit: f(),
        };
      }
      var m = i(20847);
      class v extends m.L {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (0, u.d)(t, e, i),
                      ),
                    ),
                  i = p(),
                  f = !0,
                  m = (e) => (i, n) => {
                    var r;
                    let s = (0, a.x)(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0,
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function v(a) {
                  let { props: u } = t,
                    p =
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
                        for (let t = 0; t < h; t++) {
                          let n = l.V[t],
                            r = e.props[n];
                          ((0, o.$)(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    v = [],
                    g = new Set(),
                    y = {},
                    x = 1 / 0;
                  for (let e = 0; e < d; e++) {
                    var P;
                    let l = c[e],
                      h = i[l],
                      d = void 0 !== u[l] ? u[l] : p[l],
                      w = (0, o.$)(d),
                      T = l === a ? h.isActive : null;
                    !1 === T && (x = e);
                    let b = d === p[l] && d !== u[l] && w;
                    if (
                      (b && f && t.manuallyAnimateOnMount && (b = !1),
                      (h.protectedKeys = { ...y }),
                      (!h.isActive && null === T) ||
                        (!d && !h.prevProp) ||
                        (0, n.H)(d) ||
                        "boolean" == typeof d)
                    )
                      continue;
                    let S =
                        ((P = h.prevProp),
                        "string" == typeof d
                          ? d !== P
                          : !!Array.isArray(d) && !s(d, P)),
                      A =
                        S || (l === a && h.isActive && !b && w) || (e > x && w),
                      V = !1,
                      C = Array.isArray(d) ? d : [d],
                      D = C.reduce(m(l), {});
                    !1 === T && (D = {});
                    let { prevResolvedValues: E = {} } = h,
                      M = { ...E, ...D },
                      R = (e) => {
                        (A = !0),
                          g.has(e) && ((V = !0), g.delete(e)),
                          (h.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = D[t],
                        i = E[t];
                      if (!y.hasOwnProperty(t))
                        ((0, r.C)(e) && (0, r.C)(i) ? s(e, i) : e === i)
                          ? void 0 !== e && g.has(t)
                            ? R(t)
                            : (h.protectedKeys[t] = !0)
                          : null != e
                            ? R(t)
                            : g.add(t);
                    }
                    (h.prevProp = d),
                      (h.prevResolvedValues = D),
                      h.isActive && (y = { ...y, ...D }),
                      f && t.blockInitialAnimation && (A = !1);
                    let k = !(b && S) || V;
                    A &&
                      k &&
                      v.push(
                        ...C.map((t) => ({
                          animation: t,
                          options: { type: l },
                        })),
                      );
                  }
                  if (g.size) {
                    let e = {};
                    g.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      v.push({ animation: e });
                  }
                  let w = !!v.length;
                  return (
                    f &&
                      (!1 === u.initial || u.initial === u.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (w = !1),
                    (f = !1),
                    w ? e(v) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: v,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let s = v(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = p()), (f = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, n.H)(t) && (this.unmountControls = t.subscribe(this.node));
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
      let g = 0;
      class y extends m.L {
        constructor() {
          super(...arguments), (this.id = g++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let x = { animation: { Feature: v }, exit: { Feature: y } };
    },
    96317: function (t, e, i) {
      i.d(e, {
        featureDefinitions: function () {
          return r;
        },
      });
      let n = {
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
        r = {};
      for (let t in n) r[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
    },
    34034: function (t, e, i) {
      i.d(e, {
        o: function () {
          return z;
        },
      });
      var n = i(20847),
        r = i(69276),
        s = i(19047),
        o = i(63280),
        a = i(80557),
        l = i(33787),
        u = i(89654),
        h = i(22631),
        c = i(83414),
        d = i(86219);
      class f {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
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
              let t = v(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i = (0, h.y)(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = d.frameData;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = p(e, this.transformPagePoint)),
                d.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = v(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : p(e, this.transformPagePoint),
                this.history,
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !(0, c.D)(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = p((0, o.Q)(t), this.transformPagePoint),
            { point: a } = s,
            { timestamp: f } = d.frameData;
          this.history = [{ ...a, timestamp: f }];
          let { onSessionStart: m } = e;
          m && m(t, v(s, this.history)),
            (this.removeListeners = (0, u.z)(
              (0, l.a)(
                this.contextWindow,
                "pointermove",
                this.handlePointerMove,
              ),
              (0, l.a)(this.contextWindow, "pointerup", this.handlePointerUp),
              (0, l.a)(
                this.contextWindow,
                "pointercancel",
                this.handlePointerUp,
              ),
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, d.Pn)(this.updatePoint);
        }
      }
      function p(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function m(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function v({ point: t }, e) {
        return {
          point: t,
          delta: m(t, g(e)),
          offset: m(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = g(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, a.w)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, a.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function g(t) {
        return t[t.length - 1];
      }
      var y = i(75153),
        x = i(17576),
        P = i(33217),
        w = i(86910),
        T = i(51506),
        b = i(75004);
      function S(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function A(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function V(t, e, i) {
        return { min: C(t, e), max: C(t, i) };
      }
      function C(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var D = i(58250),
        E = i(12601),
        M = i(77684),
        R = i(33005),
        k = i(23731),
        L = i(75480),
        j = i(1816);
      let F = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var O = i(89081);
      let B = new WeakMap();
      class $ {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, D.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new f(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, o.Q)(t, "page").point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: s,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = (0, y.fJ)(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  (0, E.U)((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (L.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = (0, w.JO)(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && d.Wi.postRender(() => s(t, e)),
                  null === (i = this.removeWillChange) ||
                    void 0 === i ||
                    i.call(this),
                  (this.removeWillChange = (0, O.K)(
                    this.visualElement,
                    "transform",
                  ));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
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
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                (0, E.U)((t) => {
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
              dragSnapToOrigin: n,
              contextWindow: F(this.visualElement),
            },
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: s } = this.getProps();
          s && d.Wi.postRender(() => s(t, e));
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
          let { drag: n } = this.getProps();
          if (!i || !W(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, b.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, b.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            r = this.constraints;
          e && (0, x.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: r },
                ) {
                  return { x: S(t.x, i, r), y: S(t.y, e, n) };
                })(n.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: V(t, "left", "right"), y: V(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              (0, E.U)((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, x.I)(e)) return !1;
          let n = e.current;
          (0, s.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let o = (0, M.z)(
              n,
              r.root,
              this.visualElement.getTransformPagePoint(),
            ),
            a = { x: A((t = r.layout.layoutBox).x, o.x), y: A(t.y, o.y) };
          if (i) {
            let t = i((0, R.z2)(a));
            (this.hasMutatedConstraints = !!t), t && (a = (0, R.i8)(t));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            (0, E.U)((o) => {
              if (!W(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            (0, j.v)(
              t,
              i,
              0,
              e,
              this.visualElement,
              !1,
              (0, O.K)(this.visualElement, t),
            ),
          );
        }
        stopAnimation() {
          (0, E.U)((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          (0, E.U)((t) => {
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
          (0, E.U)((e) => {
            let { drag: i } = this.getProps();
            if (!W(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, b.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, x.I)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          (0, E.U)((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = (0, w.JO)(t),
                  r = (0, w.JO)(e);
                return (
                  r > n
                    ? (i = (0, P.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, P.Y)(t.min, t.max - r, e.min)),
                  (0, T.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            (0, E.U)((e) => {
              if (!W(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, b.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          B.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = (0, l.a)(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              (0, x.I)(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            d.Wi.read(i);
          let s = (0, k.E)(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  ((0, E.U)((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            s(), e(), r(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function W(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class U extends n.L {
        constructor(t) {
          super(t),
            (this.removeGroupControls = r.Z),
            (this.removeListeners = r.Z),
            (this.controls = new $(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || r.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let I = (t) => (e, i) => {
        t && d.Wi.postRender(() => t(e, i));
      };
      class N extends n.L {
        constructor() {
          super(...arguments), (this.removePointerDownListener = r.Z);
        }
        onPointerDown(t) {
          this.session = new f(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: F(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: I(t),
            onStart: I(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && d.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = (0, l.a)(
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
      var X = i(71810);
      let z = {
        pan: { Feature: N },
        drag: { Feature: U, ProjectionNode: i(91158).u, MeasureLayout: X.q },
      };
    },
    45859: function (t, e, i) {
      i.d(e, {
        E: function () {
          return b;
        },
      });
      var n = i(33787),
        r = i(89654),
        s = i(75153),
        o = i(20847),
        a = i(86219);
      function l(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return (0, n.a)(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || (0, s.gD)()) return;
            let o = t.getProps();
            t.animationState &&
              o.whileHover &&
              t.animationState.setActive("whileHover", e);
            let l = o[i];
            l && a.Wi.postRender(() => l(n, r));
          },
          { passive: !t.getProps()[i] },
        );
      }
      class u extends o.L {
        mount() {
          this.unmount = (0, r.z)(l(this.node, !0), l(this.node, !1));
        }
        unmount() {}
      }
      var h = i(23731);
      class c extends o.L {
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
          this.unmount = (0, r.z)(
            (0, h.E)(this.node.current, "focus", () => this.onFocus()),
            (0, h.E)(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      var d = i(63280);
      let f = (t, e) => !!e && (t === e || f(t, e.parentElement));
      var p = i(69276);
      function m(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, (0, d.Q)(i));
      }
      class v extends o.L {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = p.Z),
            (this.removeEndListeners = p.Z),
            (this.removeAccessibleListeners = p.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = (0, n.a)(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || f(this.node.current, t.target) ? i : n;
                    s && a.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) },
                ),
                o = (0, n.a)(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) },
                );
              (this.removeEndListeners = (0, r.z)(s, o)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = (0, h.E)(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = (0, h.E)(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          m("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && a.Wi.postRender(() => i(t, e));
                          });
                      },
                    )),
                    m("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = (0, h.E)(this.node.current, "blur", () => {
                  this.isPressing &&
                    m("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, r.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && a.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, s.gD)()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && a.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = (0, n.a)(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) },
            ),
            i = (0, h.E)(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, r.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let g = new WeakMap(),
        y = new WeakMap(),
        x = (t) => {
          let e = g.get(t.target);
          e && e(t);
        },
        P = (t) => {
          t.forEach(x);
        },
        w = { some: 0, all: 1 };
      class T extends o.L {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : w[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              y.has(i) || y.set(i, {});
              let n = y.get(i),
                r = JSON.stringify(e);
              return (
                n[r] || (n[r] = new IntersectionObserver(P, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              g.set(t, i),
              n.observe(t),
              () => {
                g.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
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
      let b = {
        inView: { Feature: T },
        tap: { Feature: v },
        focus: { Feature: c },
        hover: { Feature: u },
      };
    },
    61865: function (t, e, i) {
      i.d(e, {
        b: function () {
          return s;
        },
      });
      var n = i(91158),
        r = i(71810);
      let s = { layout: { ProjectionNode: n.u, MeasureLayout: r.q } };
    },
    71810: function (t, e, i) {
      i.d(e, {
        q: function () {
          return y;
        },
      });
      var n = i(57437),
        r = i(2265),
        s = i(73241),
        o = i(5050),
        a = i(86094),
        l = i(19103),
        u = i(75480);
      function h(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let c = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!u.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = h(t, e.target.x),
            n = h(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var d = i(75004),
        f = i(83646),
        p = i(57290),
        m = i(78172),
        v = i(86219);
      class g extends r.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          (0, p.B)(x),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (l.V.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    v.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            m.g.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function y(t) {
        let [e, i] = (0, s.oO)(),
          l = (0, r.useContext)(o.p);
        return (0, n.jsx)(g, {
          ...t,
          layoutGroup: l,
          switchLayoutGroup: (0, r.useContext)(a.g),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let x = {
        borderRadius: {
          ...c,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: c,
        borderTopRightRadius: c,
        borderBottomLeftRadius: c,
        borderBottomRightRadius: c,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = f.P.parse(t);
            if (n.length > 5) return t;
            let r = f.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, d.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
    },
    344: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
      });
      var n = i(96317);
      function r(t) {
        for (let e in t)
          n.featureDefinitions[e] = { ...n.featureDefinitions[e], ...t[e] };
      }
    },
    13129: function (t, e, i) {
      i.d(e, {
        B: function () {
          return S;
        },
      });
      var n = i(57437),
        r = i(2265),
        s = i(29791),
        o = i(37628),
        a = i(67797),
        l = i(9033),
        u = i(36539),
        h = i(65908),
        c = i(78172),
        d = i(17576),
        f = i(86094);
      let p = !1;
      function m() {
        window.MotionHandoffIsComplete = !0;
      }
      var v = i(56859),
        g = i(83795);
      function y(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var x = i(344),
        P = i(77282),
        w = i(5050),
        T = i(23780),
        b = i(96317);
      function S(t) {
        let {
          preloadedFeatures: e,
          createVisualElement: i,
          useRender: S,
          useVisualState: A,
          Component: V,
        } = t;
        e && (0, x.K)(e);
        let C = (0, r.forwardRef)(function (t, e) {
          var x;
          let T;
          let C = {
              ...(0, r.useContext)(s._),
              ...t,
              layoutId: (function (t) {
                let { layoutId: e } = t,
                  i = (0, r.useContext)(w.p).id;
                return i && void 0 !== e ? i + "-" + e : e;
              })(t),
            },
            { isStatic: D } = C,
            E = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if ((0, g.G)(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || (0, v.$)(e) ? e : void 0,
                    animate: (0, v.$)(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, r.useContext)(o.v));
              return (0, r.useMemo)(
                () => ({ initial: e, animate: i }),
                [y(e), y(i)],
              );
            })(t),
            M = A(t, D);
          if (!D && P.j) {
            (0, r.useContext)(u.u).strict;
            let t = (function (t) {
              let { drag: e, layout: i } = b.featureDefinitions;
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout:
                  (null == e ? void 0 : e.isEnabled(t)) ||
                  (null == i ? void 0 : i.isEnabled(t))
                    ? n.MeasureLayout
                    : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(C);
            (T = t.MeasureLayout),
              (E.visualElement = (function (t, e, i, n, v) {
                var g;
                let { visualElement: y } = (0, r.useContext)(o.v),
                  x = (0, r.useContext)(u.u),
                  P = (0, r.useContext)(a.O),
                  w = (0, r.useContext)(s._).reducedMotion,
                  T = (0, r.useRef)();
                (n = n || x.renderer),
                  !T.current &&
                    n &&
                    (T.current = n(t, {
                      visualState: e,
                      parent: y,
                      props: i,
                      presenceContext: P,
                      blockInitialAnimation: !!P && !1 === P.initial,
                      reducedMotionConfig: w,
                    }));
                let b = T.current,
                  S = (0, r.useContext)(f.g);
                b &&
                  !b.projection &&
                  v &&
                  ("html" === b.type || "svg" === b.type) &&
                  (function (t, e, i, n) {
                    let {
                      layoutId: r,
                      layout: s,
                      drag: o,
                      dragConstraints: a,
                      layoutScroll: l,
                      layoutRoot: u,
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
                        layout: s,
                        alwaysMeasureLayout: !!o || (a && (0, d.I)(a)),
                        visualElement: t,
                        animationType: "string" == typeof s ? s : "both",
                        initialPromotionConfig: n,
                        layoutScroll: l,
                        layoutRoot: u,
                      });
                  })(T.current, i, v, S),
                  (0, r.useInsertionEffect)(() => {
                    b && b.update(i, P);
                  });
                let A = i[h.M],
                  V = (0, r.useRef)(
                    !!A &&
                      !window.MotionHandoffIsComplete &&
                      (null === (g = window.MotionHasOptimisedAnimation) ||
                      void 0 === g
                        ? void 0
                        : g.call(window, A)),
                  );
                return (
                  (0, l.L)(() => {
                    b &&
                      (b.updateFeatures(),
                      c.g.render(b.render),
                      V.current &&
                        b.animationState &&
                        b.animationState.animateChanges());
                  }),
                  (0, r.useEffect)(() => {
                    b &&
                      (!V.current &&
                        b.animationState &&
                        b.animationState.animateChanges(),
                      (V.current = !1),
                      p || ((p = !0), queueMicrotask(m)));
                  }),
                  b
                );
              })(V, M, C, i, t.ProjectionNode));
          }
          return (0, n.jsxs)(o.v.Provider, {
            value: E,
            children: [
              T && E.visualElement
                ? (0, n.jsx)(T, { visualElement: E.visualElement, ...C })
                : null,
              S(
                V,
                t,
                ((x = E.visualElement),
                (0, r.useCallback)(
                  (t) => {
                    t && M.mount && M.mount(t),
                      x && (t ? x.mount(t) : x.unmount()),
                      e &&
                        ("function" == typeof e
                          ? e(t)
                          : (0, d.I)(e) && (e.current = t));
                  },
                  [x],
                )),
                M,
                D,
                E.visualElement,
              ),
            ],
          });
        });
        return (C[T.a] = V), C;
      }
    },
    42020: function (t, e, i) {
      i.d(e, {
        j: function () {
          return s;
        },
      });
      var n = i(57290),
        r = i(26019);
      function s(t, { layout: e, layoutId: i }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!n.P[t] || "opacity" === t))
        );
      }
    },
    23780: function (t, e, i) {
      i.d(e, {
        a: function () {
          return n;
        },
      });
      let n = Symbol.for("motionComponentSymbol");
    },
    59748: function (t, e, i) {
      i.d(e, {
        t: function () {
          return f;
        },
      });
      var n = i(2265),
        r = i(64572),
        s = i(67797),
        o = i(28595),
        a = i(30458),
        l = i(32404),
        u = i(37628),
        h = i(83795),
        c = i(35674),
        d = i(28746);
      let f = (t) => (e, i) => {
        let o = (0, n.useContext)(u.v),
          f = (0, n.useContext)(s.O),
          m = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: n,
              },
              s,
              o,
              a,
              u,
            ) {
              let f = {
                latestValues: (function (t, e, i, n, s) {
                  var o;
                  let a = {},
                    u = [],
                    f =
                      n &&
                      (null === (o = t.style) || void 0 === o
                        ? void 0
                        : o.willChange) === void 0,
                    m = s(t, {});
                  for (let t in m) a[t] = (0, l.b)(m[t]);
                  let { initial: v, animate: g } = t,
                    y = (0, h.G)(t),
                    x = (0, h.M)(t);
                  e &&
                    x &&
                    !y &&
                    !1 !== t.inherit &&
                    (void 0 === v && (v = e.initial),
                    void 0 === g && (g = e.animate));
                  let P = !!i && !1 === i.initial,
                    w = (P = P || !1 === v) ? g : v;
                  return (
                    w &&
                      "boolean" != typeof w &&
                      !(0, r.H)(w) &&
                      p(t, w, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = P ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (a[e] = i);
                        }
                        for (let t in e) a[t] = e[t];
                      }),
                    f &&
                      (g &&
                        !1 !== v &&
                        !(0, r.H)(g) &&
                        p(t, g, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, c.p)(e);
                              i && (0, d.y4)(t, i);
                            })(u, e);
                        }),
                      u.length && (a.willChange = u.join(","))),
                    a
                  );
                })(s, o, a, !u && t, e),
                renderState: i(),
              };
              return n && (f.mount = (t) => n(s, t, f)), f;
            })(t, e, o, f, i);
        return i ? m() : (0, a.h)(m);
      };
      function p(t, e, i) {
        let n = Array.isArray(e) ? e : [e];
        for (let e = 0; e < n.length; e++) {
          let r = (0, o.o)(t, n[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...n } = r;
            i(n, t);
          }
        }
      }
    },
    14982: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      let n = new Set([
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
      function r(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          n.has(t)
        );
      }
    },
    33005: function (t, e, i) {
      function n({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: n.y, right: n.x };
      }
      i.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return n;
        },
        z2: function () {
          return r;
        },
      });
    },
    46711: function (t, e, i) {
      i.d(e, {
        D2: function () {
          return d;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return h;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var n = i(75004),
        r = i(98107);
      function s(t, e, i) {
        return i + e * (t - i);
      }
      function o(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function a(t, e = 0, i = 1, n, r) {
        (t.min = o(t.min, e, i, n, r)), (t.max = o(t.max, e, i, n, r));
      }
      function l(t, { x: e, y: i }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, i.translate, i.scale, i.originPoint);
      }
      function u(t, e, i, n = !1) {
        let s, o;
        let a = i.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = i[u]).projectionDelta;
            let { visualElement: a } = s.options;
            (!a || !a.props.style || "contents" !== a.props.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                d(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              n && (0, r.ud)(s.latestValues) && d(t, s.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function c(t, e, i, r, s = 0.5) {
        let o = (0, n.t)(t.min, t.max, s);
        a(t, e, i, o, r);
      }
      function d(t, e) {
        c(t.x, e.x, e.scaleX, e.scale, e.originX),
          c(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    86910: function (t, e, i) {
      i.d(e, {
        JO: function () {
          return r;
        },
        b3: function () {
          return c;
        },
        tf: function () {
          return u;
        },
        wS: function () {
          return s;
        },
        y$: function () {
          return a;
        },
      });
      var n = i(75004);
      function r(t) {
        return t.max - t.min;
      }
      function s(t, e, i) {
        return Math.abs(t - e) <= i;
      }
      function o(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = (0, n.t)(e.min, e.max, t.origin)),
          (t.scale = r(i) / r(e)),
          (t.translate = (0, n.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function a(t, e, i, n) {
        o(t.x, e.x, i.x, n ? n.originX : void 0),
          o(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function l(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + r(e));
      }
      function u(t, e, i) {
        l(t.x, e.x, i.x), l(t.y, e.y, i.y);
      }
      function h(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + r(e));
      }
      function c(t, e, i) {
        h(t.x, e.x, i.x), h(t.y, e.y, i.y);
      }
    },
    58250: function (t, e, i) {
      i.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: n(), y: n() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    91158: function (t, e, i) {
      i.d(e, {
        u: function () {
          return tM;
        },
        J: function () {
          return tE;
        },
      });
      var n = i(72428),
        r = i(68536),
        s = i(33217),
        o = i(75004),
        a = i(69276),
        l = i(75480);
      let u = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        h = u.length,
        c = (t) => ("string" == typeof t ? parseFloat(t) : t),
        d = (t) => "number" == typeof t || l.px.test(t);
      function f(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let p = v(0, 0.5, r.Bn),
        m = v(0.5, 0.95, a.Z);
      function v(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, s.Y)(t, e, n)));
      }
      function g(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function y(t, e) {
        g(t.x, e.x), g(t.y, e.y);
      }
      function x(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var P = i(46711),
        w = i(86910);
      function T(t, e, i, n, r) {
        return (
          (t -= e),
          (t = (0, P.q2)(t, 1 / i, n)),
          void 0 !== r && (t = (0, P.q2)(t, 1 / r, n)),
          t
        );
      }
      function b(t, e, [i, n, r], s, a) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, a = t) {
          if (
            (l.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, o.t)(a.min, a.max, e / 100) - a.min)),
            "number" != typeof e)
          )
            return;
          let u = (0, o.t)(s.min, s.max, n);
          t === s && (u -= e),
            (t.min = T(t.min, e, i, u, r)),
            (t.max = T(t.max, e, i, u, r));
        })(t, e[i], e[n], e[r], e.scale, s, a);
      }
      let S = ["x", "scaleX", "originX"],
        A = ["y", "scaleY", "originY"];
      function V(t, e, i, n) {
        b(t.x, e, S, i ? i.x : void 0, n ? n.x : void 0),
          b(t.y, e, A, i ? i.y : void 0, n ? n.y : void 0);
      }
      var C = i(69792);
      function D(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function E(t) {
        return D(t.x) && D(t.y);
      }
      function M(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function R(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function k(t, e) {
        return R(t.x, e.x) && R(t.y, e.y);
      }
      function L(t) {
        return (0, w.JO)(t.x) / (0, w.JO)(t.y);
      }
      function j(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var F = i(28746);
      class O {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, F.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, F.cl)(this.members, t),
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
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
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
      var B = i(57290),
        $ = i(12601),
        W = i(98107),
        U = i(93409),
        I = i(32404),
        N = i(19103),
        X = i(67937),
        z = i(48170),
        Y = i(89334),
        H = i(51506),
        K = i(86219),
        Z = i(59993),
        G = i(78172),
        q = i(2087),
        _ = i(58250);
      let J = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        Q = "undefined" != typeof window && void 0 !== window.MotionDebug,
        tt = ["", "X", "Y", "Z"],
        te = { visibility: "hidden" },
        ti = 0;
      function tn(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function tr({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = ti++),
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
                  Q &&
                    (J.totalNodes =
                      J.resolvedTargetDeltas =
                      J.recalculatedProjection =
                        0),
                  this.nodes.forEach(ta),
                  this.nodes.forEach(tp),
                  this.nodes.forEach(tm),
                  this.nodes.forEach(tl),
                  Q && window.MotionDebug.record(J);
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
            this.root === this && (this.nodes = new U.E());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new n.L()),
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
            (this.isSVG = (0, z.v)(e)), (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (0, X.g)(n, 250)),
                  N.V.hasAnimatedSinceResize &&
                    ((N.V.hasAnimatedSinceResize = !1), this.nodes.forEach(tf));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        tw,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !k(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, C.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || tf(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
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
              (0, K.Pn)(this.updateProjection);
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
              this.nodes && this.nodes.forEach(tv),
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
                  let n = (0, q.s)(i);
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      K.Wi,
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
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(th);
              return;
            }
            this.isUpdating || this.nodes.forEach(tc),
              (this.isUpdating = !1),
              this.nodes.forEach(td),
              this.nodes.forEach(ts),
              this.nodes.forEach(to),
              this.clearAllSnapshots();
            let t = Z.X.now();
            (K.frameData.delta = (0, H.u)(
              0,
              1e3 / 60,
              t - K.frameData.timestamp,
            )),
              (K.frameData.timestamp = t),
              (K.frameData.isProcessing = !0),
              K.S6.update.process(K.frameData),
              K.S6.preRender.process(K.frameData),
              K.S6.render.process(K.frameData),
              (K.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), G.g.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(tu), this.sharedNodes.forEach(tg);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              K.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            K.Wi.postRender(() => {
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
              (this.layoutCorrected = (0, _.dO)()),
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
              let e = r(this.instance);
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
            if (!s) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !E(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              (e || (0, W.ud)(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              tS((e = n).x),
              tS(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, _.dO)();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(tV)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, P.am)(i.x, t.offset.x), (0, P.am)(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = (0, _.dO)();
            if (
              (y(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && y(i, t),
                (0, P.am)(i.x, r.offset.x),
                (0, P.am)(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = (0, _.dO)();
            y(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                (0, P.D2)(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                (0, W.ud)(n.latestValues) && (0, P.D2)(i, n.latestValues);
            }
            return (
              (0, W.ud)(this.latestValues) && (0, P.D2)(i, this.latestValues), i
            );
          }
          removeTransform(t) {
            let e = (0, _.dO)();
            y(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, W.ud)(i.latestValues)) continue;
              (0, W.Lj)(i.latestValues) && i.updateSnapshot();
              let n = (0, _.dO)();
              y(n, i.measurePageBox()),
                V(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n,
                );
            }
            return (0, W.ud)(this.latestValues) && V(e, this.latestValues), e;
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
                K.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e;
            let i = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = i.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = i.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = i.isSharedProjectionDirty);
            let n = !!this.resumingFrom || this !== i;
            if (
              !(
                t ||
                (n && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (this.layout && (r || s)) {
              if (
                ((this.resolvedRelativeTargetAt = K.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, _.dO)()),
                    (this.relativeTargetOrigin = (0, _.dO)()),
                    (0, w.b3)(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    y(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = (0, _.dO)()),
                    (this.targetWithTransforms = (0, _.dO)())),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target
                    ? (this.forceRelativeParentToResolveTarget(),
                      (0, w.tf)(
                        this.target,
                        this.relativeTarget,
                        this.relativeParent.target,
                      ))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : y(this.target, this.layout.layoutBox),
                        (0, P.o2)(this.target, this.targetDelta))
                      : y(this.target, this.layout.layoutBox),
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
                      (this.relativeTarget = (0, _.dO)()),
                      (this.relativeTargetOrigin = (0, _.dO)()),
                      (0, w.b3)(
                        this.relativeTargetOrigin,
                        this.target,
                        t.target,
                      ),
                      y(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                Q && J.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, W.Lj)(this.parent.latestValues) ||
              (0, W.D_)(this.parent.latestValues)
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
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === K.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            y(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, P.YY)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, _.dO)()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (x(this.prevProjectionDelta.x, this.projectionDelta.x),
                x(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              (0, w.y$)(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues,
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                j(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                j(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              Q && J.recalculatedProjection++;
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
            (this.prevProjectionDelta = (0, _.wc)()),
              (this.projectionDelta = (0, _.wc)()),
              (this.projectionDeltaWithTransform = (0, _.wc)());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              a = (0, _.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let v = (0, _.dO)(),
              g =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              x = this.getStack(),
              P = !x || x.members.length <= 1,
              T = !!(
                g &&
                !P &&
                !0 === this.options.crossfade &&
                !this.path.some(tP)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (ty(a.x, t.x, n),
                  ty(a.y, t.y, n),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var x, b, S, A;
                  (0, w.b3)(
                    v,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (S = this.relativeTarget),
                    (A = this.relativeTargetOrigin),
                    tx(S.x, A.x, v.x, n),
                    tx(S.y, A.y, v.y, n),
                    i &&
                      ((x = this.relativeTarget),
                      (b = i),
                      M(x.x, b.x) && M(x.y, b.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, _.dO)()),
                    y(i, this.relativeTarget);
                }
                g &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, o.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          p(n),
                        )),
                        (t.opacityExit = (0, o.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          m(n),
                        )))
                      : s &&
                        (t.opacity = (0, o.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n,
                        ));
                    for (let r = 0; r < h; r++) {
                      let s = `border${u[r]}Radius`,
                        a = f(e, s),
                        h = f(i, s);
                      (void 0 !== a || void 0 !== h) &&
                        (a || (a = 0),
                        h || (h = 0),
                        0 === a || 0 === h || d(a) === d(h)
                          ? ((t[s] = Math.max((0, o.t)(c(a), c(h), n), 0)),
                            (l.aQ.test(h) || l.aQ.test(a)) && (t[s] += "%"))
                          : (t[s] = h));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, o.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, T, P)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
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
                ((0, K.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = K.Wi.update(() => {
                (N.V.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, Y.D)(0, 1e3, {
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
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                tA(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox,
                )
              ) {
                i = this.target || (0, _.dO)();
                let e = (0, w.JO)(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = (0, w.JO)(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              y(e, i),
                (0, P.D2)(e, r),
                (0, w.y$)(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r,
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new O()),
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
            let n = this.getStack();
            n && n.promote(this, i),
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
            let n = {};
            i.z && tn("z", t, n, this.animationValues);
            for (let e = 0; e < tt.length; e++)
              tn(`rotate${tt[e]}`, t, n, this.animationValues),
                tn(`skew${tt[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return te;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  (0, I.b)(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    (0, I.b)(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, W.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
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
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            B.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = B.P[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? (0, I.b)(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
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
              this.root.nodes.forEach(th),
              this.root.sharedNodes.clear();
          }
        };
      }
      function ts(t) {
        t.updateLayout();
      }
      function to(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? (0, $.U)((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = (0, w.JO)(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : tA(r, i.layoutBox, e) &&
              (0, $.U)((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = (0, w.JO)(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = (0, _.wc)();
          (0, w.y$)(o, e, i.layoutBox);
          let a = (0, _.wc)();
          s
            ? (0, w.y$)(a, t.applyTransform(n, !0), i.measuredBox)
            : (0, w.y$)(a, e, i.layoutBox);
          let l = !E(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = (0, _.dO)();
                (0, w.b3)(o, i.layoutBox, r.layoutBox);
                let a = (0, _.dO)();
                (0, w.b3)(a, e, s.layoutBox),
                  k(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ta(t) {
        Q && J.totalNodes++,
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
      function tl(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function tu(t) {
        t.clearSnapshot();
      }
      function th(t) {
        t.clearMeasurements();
      }
      function tc(t) {
        t.isLayoutDirty = !1;
      }
      function td(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function tf(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function tp(t) {
        t.resolveTargetDelta();
      }
      function tm(t) {
        t.calcProjection();
      }
      function tv(t) {
        t.resetSkewAndRotation();
      }
      function tg(t) {
        t.removeLeadSnapshot();
      }
      function ty(t, e, i) {
        (t.translate = (0, o.t)(e.translate, 0, i)),
          (t.scale = (0, o.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function tx(t, e, i, n) {
        (t.min = (0, o.t)(e.min, i.min, n)),
          (t.max = (0, o.t)(e.max, i.max, n));
      }
      function tP(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let tw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        tT = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        tb = tT("applewebkit/") && !tT("chrome/") ? Math.round : a.Z;
      function tS(t) {
        (t.min = tb(t.min)), (t.max = tb(t.max));
      }
      function tA(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0, w.wS)(L(e), L(i), 0.2))
        );
      }
      function tV(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      var tC = i(23731);
      let tD = tr({
          attachResizeListener: (t, e) => (0, tC.E)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        tE = { current: void 0 },
        tM = tr({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!tE.current) {
              let t = new tD({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (tE.current = t);
            }
            return tE.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
    },
    19103: function (t, e, i) {
      i.d(e, {
        V: function () {
          return n;
        },
      });
      let n = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    },
    57290: function (t, e, i) {
      i.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return n;
        },
      });
      let n = {};
      function r(t) {
        Object.assign(n, t);
      }
    },
    12601: function (t, e, i) {
      i.d(e, {
        U: function () {
          return n;
        },
      });
      function n(t) {
        return [t("x"), t("y")];
      }
    },
    98107: function (t, e, i) {
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: i }) {
        return !n(t) || !n(e) || !n(i);
      }
      function s(t) {
        return (
          r(t) ||
          o(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function o(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      i.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    77684: function (t, e, i) {
      i.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var n = i(33005),
        r = i(46711);
      function s(t, e) {
        return (0, n.i8)((0, n.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, i) {
        let n = s(t, i),
          { scroll: o } = e;
        return o && ((0, r.am)(n.x, o.offset.x), (0, r.am)(n.y, o.offset.y)), n;
      }
    },
    55446: function (t, e, i) {
      i.d(e, {
        l: function () {
          return C;
        },
      });
      var n = i(53629),
        r = i(31016),
        s = i(72428),
        o = i(20804),
        a = i(77599),
        l = i(26019),
        u = i(83795),
        h = i(28595),
        c = i(96317),
        d = i(44839),
        f = i(23653),
        p = i(84386),
        m = i(99102),
        v = i(50146),
        g = i(83646),
        y = i(23769),
        x = i(12649);
      let P = [...y.$, v.$, g.P],
        w = (t) => P.find((0, x.l)(t));
      var T = i(66450),
        b = i(58250),
        S = i(59993),
        A = i(86219);
      let V = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class C {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
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
            (this.KeyframeResolver = f.e),
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
              let t = S.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                A.Wi.render(this.render, !1, !0));
            });
          let { latestValues: l, renderState: h } = s;
          (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = e.initial ? { ...l } : {}),
            (this.renderState = h),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, u.G)(e)),
            (this.isVariantNode = (0, u.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== l[t] && (0, a.i)(e) && e.set(l[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            d.R.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            r.O.current || (0, n.A)(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || r.n.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (d.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, A.Pn)(this.notifyUpdate),
          (0, A.Pn)(this.render),
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
          let n = l.G.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && A.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
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
          for (t in c.featureDefinitions) {
            let e = c.featureDefinitions[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
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
            : (0, b.dO)();
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
          for (let e = 0; e < V.length; e++) {
            let i = V[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if ((0, a.i)(r)) t.addValue(n, r);
              else if ((0, a.i)(s)) t.addValue(n, (0, o.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, o.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
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
              ((i = (0, o.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && ((0, p.P)(n) || (0, m.W)(n))
                ? (n = parseFloat(n))
                : !w(n) && g.P.test(e) && (n = (0, T.T)(t, e)),
              this.setBaseTarget(t, (0, a.i)(n) ? n.get() : n)),
            (0, a.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = (0, h.o)(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom,
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, a.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new s.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
    },
    12523: function (t, e, i) {
      i.d(e, {
        x: function () {
          return T;
        },
      });
      var n = i(13129),
        r = i(42860),
        s = i(70545),
        o = i(875),
        a = i(59748);
      let l = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        u = () => ({ ...l(), attrs: {} });
      var h = i(92622),
        c = i(75969),
        d = i(86219);
      let f = {
        useVisualState: (0, a.t)({
          scrapeMotionValuesFromProps: o.U,
          createRenderState: u,
          onMount: (t, e, { renderState: i, latestValues: n }) => {
            d.Wi.read(() => {
              try {
                i.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
            }),
              d.Wi.render(() => {
                (0, h.i)(i, n, (0, c.a)(e.tagName), t.transformTemplate),
                  (0, s.K)(e, i);
              });
          },
        }),
      };
      var p = i(11315);
      let m = {
        useVisualState: (0, a.t)({
          applyWillChange: !0,
          scrapeMotionValuesFromProps: p.U,
          createRenderState: l,
        }),
      };
      var v = i(2265),
        g = i(42020),
        y = i(77599),
        x = i(1676);
      function P(t, e, i) {
        for (let n in e) (0, y.i)(e[n]) || (0, g.j)(n, i) || (t[n] = e[n]);
      }
      var w = i(7075);
      function T(t, e) {
        return function (
          i,
          { forwardMotionProps: s } = { forwardMotionProps: !1 },
        ) {
          let o = {
            ...((0, r.q)(i) ? f : m),
            preloadedFeatures: t,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: s }, o) => {
                let a = (
                    (0, r.q)(e)
                      ? function (t, e, i, n) {
                          let r = (0, v.useMemo)(() => {
                            let i = u();
                            return (
                              (0, h.i)(i, e, (0, c.a)(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            P(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                P(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, v.useMemo)(() => {
                                      let i = l();
                                      return (
                                        (0, x.r)(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e),
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, s, o, e),
                  d = (0, w.L)(i, "string" == typeof e, t),
                  f = e !== v.Fragment ? { ...d, ...a, ref: n } : {},
                  { children: p } = i,
                  m = (0, v.useMemo)(() => ((0, y.i)(p) ? p.get() : p), [p]);
                return (0, v.createElement)(e, { ...f, children: m });
              };
            })(s),
            createVisualElement: e,
            Component: i,
          };
          return (0, n.B)(o);
        };
      }
    },
    56863: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      function n(t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      }
    },
    14950: function (t, e, i) {
      i.d(e, {
        E: function () {
          return c;
        },
      });
      var n = i(56863),
        r = i(99666),
        s = i(34034),
        o = i(45859),
        a = i(61865),
        l = i(12523),
        u = i(20085);
      let h = (0, l.x)({ ...r.s, ...o.E, ...s.o, ...a.b }, u.b),
        c = (0, n.c)(h);
    },
    63078: function (t, e, i) {
      i.d(e, {
        s: function () {
          return p;
        },
      });
      var n = i(99102),
        r = i(19047),
        s = i(84386),
        o = i(61534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(35014),
        u = i(23769),
        h = i(23653),
        c = i(83646),
        d = i(66450);
      let f = new Set(["auto", "none", "0"]);
      class p extends h.e {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, o.t)(n))) {
              let l = (function t(e, i, n = 1) {
                (0, r.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, i, n + 1) : u;
              })(n, e.current);
              void 0 !== l && (t[i] = l),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length))
            return;
          let [n, h] = t,
            c = (0, u.C)(n),
            d = (0, u.C)(h);
          if (c !== d) {
            if ((0, l.mP)(c) && (0, l.mP)(d))
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
              : null === r || "none" === r || "0" === r || (0, n.W)(r)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !f.has(e) &&
                  (0, c.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = (0, d.T)(i, n);
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
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = l.lw[i](
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
    50023: function (t, e, i) {
      i.d(e, {
        J: function () {
          return s;
        },
      });
      var n = i(55446),
        r = i(63078);
      class s extends n.l {
        constructor() {
          super(...arguments), (this.KeyframeResolver = r.s);
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
    },
    20085: function (t, e, i) {
      i.d(e, {
        b: function () {
          return a;
        },
      });
      var n = i(2265),
        r = i(39440),
        s = i(82714),
        o = i(42860);
      let a = (t, e) =>
        (0, o.q)(t)
          ? new s.e(e)
          : new r.W(e, { allowProjection: t !== n.Fragment });
    },
    68691: function (t, e, i) {
      i.d(e, {
        U: function () {
          return r;
        },
      });
      var n = i(86219);
      function r(t, e) {
        let i;
        let r = () => {
          let { currentTime: n } = e,
            r = (null === n ? 0 : n.value) / 100;
          i !== r && t(r), (i = r);
        };
        return n.Wi.update(r, !0), () => (0, n.Pn)(r);
      }
    },
    87581: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (0, i(37521).X)(() => void 0 !== window.ScrollTimeline);
    },
    51580: function (t, e, i) {
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    7075: function (t, e, i) {
      i.d(e, {
        K: function () {
          return s;
        },
        L: function () {
          return o;
        },
      });
      var n = i(14982);
      let r = (t) => !(0, n.Z)(t);
      function s(t) {
        t && (r = (e) => (e.startsWith("on") ? !(0, n.Z)(e) : t(e)));
      }
      try {
        s(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      function o(t, e, i) {
        let s = {};
        for (let o in t)
          ("values" !== o || "object" != typeof t.values) &&
            (r(o) ||
              (!0 === i && (0, n.Z)(o)) ||
              (!e && !(0, n.Z)(o)) ||
              (t.draggable && o.startsWith("onDrag"))) &&
            (s[o] = t[o]);
        return s;
      }
    },
    61534: function (t, e, i) {
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    42860: function (t, e, i) {
      i.d(e, {
        q: function () {
          return r;
        },
      });
      let n = [
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
      function r(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (n.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
    },
    48170: function (t, e, i) {
      i.d(e, {
        v: function () {
          return n;
        },
      });
      function n(t) {
        return t instanceof SVGElement && "svg" !== t.tagName;
      }
    },
    35014: function (t, e, i) {
      i.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return f;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var n = i(26019),
        r = i(40783),
        s = i(75480);
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
        a = (t) => t === r.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        c = n._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let f = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (f.translateX = f.x), (f.translateY = f.y);
    },
    66450: function (t, e, i) {
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(83646),
        r = i(24913),
        s = i(40781);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== r.h && (i = n.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    40781: function (t, e, i) {
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(50146),
        r = i(24913);
      let s = {
          ...i(37755).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    23769: function (t, e, i) {
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(40783),
        r = i(75480),
        s = i(12649);
      let o = [
          n.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    78500: function (t, e, i) {
      i.d(e, {
        Q: function () {
          return n;
        },
      });
      let n = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
    },
    37755: function (t, e, i) {
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var n = i(40783),
        r = i(75480);
      let s = { ...n.Rx, transform: Math.round },
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
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
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
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    12649: function (t, e, i) {
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    39440: function (t, e, i) {
      i.d(e, {
        W: function () {
          return d;
        },
      });
      var n = i(1676),
        r = i(61534),
        s = i(26019),
        o = i(11315),
        a = i(39979),
        l = i(40781),
        u = i(77684),
        h = i(50023),
        c = i(77599);
      class d extends h.J {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = a.N);
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, r.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, i) {
          (0, n.r)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, o.U)(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, c.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
    },
    1676: function (t, e, i) {
      i.d(e, {
        r: function () {
          return l;
        },
      });
      var n = i(78186),
        r = i(61534),
        s = i(26019),
        o = i(78500),
        a = i(37755);
      function l(t, e, i) {
        let { style: l, vars: u, transformOrigin: h } = t,
          c = !1,
          d = !1;
        for (let t in e) {
          let i = e[t];
          if (s.G.has(t)) {
            c = !0;
            continue;
          }
          if ((0, r.f)(t)) {
            u[t] = i;
            continue;
          }
          {
            let e = (0, o.Q)(i, a.j[t]);
            t.startsWith("origin") ? ((d = !0), (h[t] = e)) : (l[t] = e);
          }
        }
        if (
          (!e.transform &&
            (c || i
              ? (l.transform = (0, n.P)(e, t.transform, i))
              : l.transform && (l.transform = "none")),
          d)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = h;
          l.transformOrigin = `${t} ${e} ${i}`;
        }
      }
    },
    78186: function (t, e, i) {
      i.d(e, {
        P: function () {
          return l;
        },
      });
      var n = i(26019),
        r = i(78500),
        s = i(37755);
      let o = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        a = n._.length;
      function l(t, e, i) {
        let l = "",
          u = !0;
        for (let h = 0; h < a; h++) {
          let a = n._[h],
            c = t[a];
          if (void 0 === c) continue;
          let d = !0;
          if (
            !(d =
              "number" == typeof c
                ? c === (a.startsWith("scale") ? 1 : 0)
                : 0 === parseFloat(c)) ||
            i
          ) {
            let t = (0, r.Q)(c, s.j[a]);
            if (!d) {
              u = !1;
              let e = o[a] || a;
              l += `${e}(${t}) `;
            }
            i && (e[a] = t);
          }
        }
        return (
          (l = l.trim()), i ? (l = i(e, u ? "" : l)) : u && (l = "none"), l
        );
      }
    },
    39979: function (t, e, i) {
      i.d(e, {
        N: function () {
          return n;
        },
      });
      function n(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
    },
    11315: function (t, e, i) {
      i.d(e, {
        U: function () {
          return s;
        },
      });
      var n = i(42020),
        r = i(77599);
      function s(t, e, i) {
        var s;
        let { style: o } = t,
          a = {};
        for (let l in o)
          ((0, r.i)(o[l]) ||
            (e.style && (0, r.i)(e.style[l])) ||
            (0, n.j)(l, t) ||
            (null === (s = null == i ? void 0 : i.getValue(l)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (a[l] = o[l]);
        return (
          i && o && "string" == typeof o.willChange && (i.applyWillChange = !1),
          a
        );
      }
    },
    26019: function (t, e, i) {
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
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
        r = new Set(n);
    },
    44839: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      let n = new WeakMap();
    },
    82714: function (t, e, i) {
      i.d(e, {
        e: function () {
          return f;
        },
      });
      var n = i(875),
        r = i(50023),
        s = i(92622),
        o = i(51580),
        a = i(82394),
        l = i(26019),
        u = i(70545),
        h = i(40781),
        c = i(58250),
        d = i(75969);
      class f extends r.J {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = c.dO);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (l.G.has(e)) {
            let t = (0, h.A)(e);
            return (t && t.default) || 0;
          }
          return (e = a.s.has(e) ? e : (0, o.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, n.U)(t, e, i);
        }
        build(t, e, i) {
          (0, s.i)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          (0, u.K)(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = (0, d.a)(t.tagName)), super.mount(t);
        }
      }
    },
    92622: function (t, e, i) {
      i.d(e, {
        i: function () {
          return l;
        },
      });
      var n = i(1676),
        r = i(75480);
      function s(t, e, i) {
        return "string" == typeof t ? t : r.px.transform(e + i * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: c,
          pathSpacing: d = 1,
          pathOffset: f = 0,
          ...p
        },
        m,
        v,
      ) {
        if (((0, n.r)(t, p, v), m)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: y, dimensions: x } = t;
        g.transform && (x && (y.transform = g.transform), delete g.transform),
          x &&
            (void 0 !== u || void 0 !== h || y.transform) &&
            (y.transformOrigin = (function (t, e, i) {
              let n = s(e, t.x, t.width),
                r = s(i, t.y, t.height);
              return `${n} ${r}`;
            })(x, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== i && (g.y = i),
          void 0 !== l && (g.scale = l),
          void 0 !== c &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-n);
              let u = r.px.transform(e),
                h = r.px.transform(i);
              t[l.array] = `${u} ${h}`;
            })(g, c, d, f, !1);
      }
    },
    82394: function (t, e, i) {
      i.d(e, {
        s: function () {
          return n;
        },
      });
      let n = new Set([
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
    },
    75969: function (t, e, i) {
      i.d(e, {
        a: function () {
          return n;
        },
      });
      let n = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    70545: function (t, e, i) {
      i.d(e, {
        K: function () {
          return o;
        },
      });
      var n = i(51580),
        r = i(39979),
        s = i(82394);
      function o(t, e, i, o) {
        for (let i in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(i) ? i : (0, n.D)(i), e.attrs[i]);
      }
    },
    875: function (t, e, i) {
      i.d(e, {
        U: function () {
          return o;
        },
      });
      var n = i(77599),
        r = i(11315),
        s = i(26019);
      function o(t, e, i) {
        let o = (0, r.U)(t, e, i);
        for (let i in t)
          ((0, n.i)(t[i]) || (0, n.i)(e[i])) &&
            (o[
              -1 !== s._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return o;
      }
    },
    23653: function (t, e, i) {
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var n = i(35014),
        r = i(86219);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
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
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    93409: function (t, e, i) {
      i.d(e, {
        E: function () {
          return s;
        },
      });
      var n = i(28746);
      let r = (t, e) => t.depth - e.depth;
      class s {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, n.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, n.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(r),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
    },
    83795: function (t, e, i) {
      i.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var n = i(64572),
        r = i(56859),
        s = i(53552);
      function o(t) {
        return (0, n.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    56859: function (t, e, i) {
      i.d(e, {
        $: function () {
          return n;
        },
      });
      function n(t) {
        return "string" == typeof t || Array.isArray(t);
      }
    },
    70352: function (t, e, i) {
      i.d(e, {
        x: function () {
          return r;
        },
      });
      var n = i(28595);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, n.o)(r, e, void 0 !== i ? i : r.custom, t);
      }
    },
    28595: function (t, e, i) {
      function n(t) {
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
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      i.d(e, {
        o: function () {
          return r;
        },
      });
    },
    76159: function (t, e, i) {
      i.d(e, {
        C: function () {
          return o;
        },
      });
      var n = i(99155),
        r = i(20804),
        s = i(70352);
      function o(t, e) {
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...a
        } = (0, s.x)(t, e) || {};
        for (let e in (a = { ...a, ...i })) {
          let i = (0, n.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, r.BX)(i));
        }
      }
    },
    53552: function (t, e, i) {
      i.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return n;
        },
      });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...n];
    },
    565: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    28746: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      function s([...t], e, i) {
        let n = e < 0 ? t.length + e : e;
        if (n >= 0 && n < t.length) {
          let n = i < 0 ? t.length + i : i,
            [r] = t.splice(e, 1);
          t.splice(n, 0, r);
        }
        return t;
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        uo: function () {
          return s;
        },
        y4: function () {
          return n;
        },
      });
    },
    51506: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    67937: function (t, e, i) {
      i.d(e, {
        g: function () {
          return s;
        },
      });
      var n = i(59993),
        r = i(86219);
      function s(t, e) {
        let i = n.X.now(),
          s = ({ timestamp: n }) => {
            let o = n - i;
            o >= e && ((0, r.Pn)(s), t(o - e));
          };
        return r.Wi.read(s, !0), () => (0, r.Pn)(s);
      }
    },
    22631: function (t, e, i) {
      i.d(e, {
        T: function () {
          return n;
        },
        y: function () {
          return r;
        },
      });
      let n = (t, e) => Math.abs(t - e);
      function r(t, e) {
        return Math.sqrt(n(t.x, e.x) ** 2 + n(t.y, e.y) ** 2);
      }
    },
    19047: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(69276);
      let r = n.Z,
        s = n.Z;
    },
    42548: function (t, e, i) {
      i.d(e, {
        s: function () {
          return u;
        },
      });
      var n = i(19047),
        r = i(51506),
        s = i(89654),
        o = i(33217),
        a = i(69276),
        l = i(5389);
      function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
        let c = t.length;
        if (
          ((0, n.k)(
            c === e.length,
            "Both input and output ranges must be the same length",
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && t[0] === t[1]) return () => e[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let d = (function (t, e, i) {
            let n = [],
              r = i || l.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || a.Z : e;
                o = (0, s.z)(t, o);
              }
              n.push(o);
            }
            return n;
          })(e, u, h),
          f = d.length,
          p = (e) => {
            let i = 0;
            if (f > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = (0, o.Y)(t[i], t[i + 1], e);
            return d[i](n);
          };
        return i ? (e) => p((0, r.u)(t[0], t[c - 1], e)) : p;
      }
    },
    77282: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    84386: function (t, e, i) {
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    17576: function (t, e, i) {
      i.d(e, {
        I: function () {
          return n;
        },
      });
      function n(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
    },
    99102: function (t, e, i) {
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    37521: function (t, e, i) {
      i.d(e, {
        X: function () {
          return n;
        },
      });
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    5389: function (t, e, i) {
      i.d(e, {
        C: function () {
          return A;
        },
      });
      var n = i(75004),
        r = i(19047);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var o = i(45778),
        a = i(91583),
        l = i(598);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        c = [o.$, a.m, l.J],
        d = (t) => c.find((e) => e.test(t));
      function f(t) {
        let e = d(t);
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
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                (r = s(l, n, t + 1 / 3)),
                  (o = s(l, n, t)),
                  (a = s(l, n, t - 1 / 3));
              } else r = o = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let p = (t, e) => {
        let i = f(t),
          r = f(e);
        if (!i || !r) return u(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = h(i.red, r.red, t)),
          (s.green = h(i.green, r.green, t)),
          (s.blue = h(i.blue, r.blue, t)),
          (s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
          a.m.transform(s)
        );
      };
      var m = i(89654),
        v = i(50146),
        g = i(83646),
        y = i(61534);
      let x = new Set(["none", "hidden"]);
      function P(t, e) {
        return (i) => (0, n.t)(t, e, i);
      }
      function w(t) {
        return "number" == typeof t
          ? P
          : "string" == typeof t
            ? (0, y.t)(t)
              ? u
              : v.$.test(t)
                ? p
                : S
            : Array.isArray(t)
              ? T
              : "object" == typeof t
                ? v.$.test(t)
                  ? p
                  : b
                : u;
      }
      function T(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => w(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function b(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = w(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let S = (t, e) => {
        let i = g.P.createTransformer(e),
          n = (0, g.V)(t),
          s = (0, g.V)(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (x.has(t) && !s.values.length) || (x.has(e) && !n.values.length)
            ? x.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, m.z)(
                T(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, s),
                  s.values,
                ),
                i,
              )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            u(t, e));
      };
      function A(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, n.t)(t, e, i)
          : w(t)(t, e);
      }
    },
    75004: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    69276: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    92007: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return r;
        },
      });
      var n = i(29924);
      function r(t) {
        let e = [0];
        return (0, n.c)(e, t.length - 1), e;
      }
    },
    29924: function (t, e, i) {
      i.d(e, {
        c: function () {
          return s;
        },
      });
      var n = i(75004),
        r = i(33217);
      function s(t, e) {
        let i = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let o = (0, r.Y)(0, e, s);
          t.push((0, n.t)(i, 1, o));
        }
      }
    },
    89654: function (t, e, i) {
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    33217: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    53629: function (t, e, i) {
      i.d(e, {
        A: function () {
          return s;
        },
      });
      var n = i(77282),
        r = i(31016);
      function s() {
        if (((r.O.current = !0), n.j)) {
          if (window.matchMedia) {
            let t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => (r.n.current = t.matches);
            t.addListener(e), e();
          } else r.n.current = !1;
        }
      }
    },
    31016: function (t, e, i) {
      i.d(e, {
        O: function () {
          return r;
        },
        n: function () {
          return n;
        },
      });
      let n = { current: null },
        r = { current: !1 };
    },
    99155: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(66925);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    72428: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(28746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
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
    80557: function (t, e, i) {
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    30458: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    74097: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { current: !1 };
    },
    9033: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(77282).j ? n.useLayoutEffect : n.useEffect;
    },
    83476: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    20804: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
        S1: function () {
          return l;
        },
      });
      var n = i(72428),
        r = i(83476),
        s = i(59993),
        o = i(86219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.5.6"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
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
            (this.updatedAt = s.X.now()),
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
          this.events[t] || (this.events[t] = new n.L());
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
          let t = s.X.now();
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
      function h(t, e) {
        return new u(t, e);
      }
    },
    45778: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(91583);
      let r = {
        test: (0, i(93338).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    598: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(40783),
        r = i(75480),
        s = i(47292),
        o = i(93338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    50146: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(47292),
        r = i(45778),
        s = i(598),
        o = i(91583);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
              ? s.J.parse(t)
              : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
              ? o.m.transform(t)
              : s.J.transform(t),
      };
    },
    91583: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(51506),
        r = i(40783),
        s = i(47292),
        o = i(93338);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    93338: function (t, e, i) {
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(47292);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    24913: function (t, e, i) {
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(83646),
        r = i(47292);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(r.KP) || [];
        if (!n) return t;
        let o = i.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return n !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    83646: function (t, e, i) {
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(50146),
        r = i(47292);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(u), l.push("var"), i.push(t))
                    : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                  ? (l += n.$.transform(t[u]))
                  : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
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
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    40783: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(51506);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    75480: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(47292);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    47292: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
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
    79447: function (t, e, i) {
      i.d(e, {
        L: function () {
          return o;
        },
      });
      var n = i(20804),
        r = i(35674),
        s = i(28746);
      class o extends n.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = (0, r.p)(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let n = !1;
          return () => {
            if (n) return;
            n = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, s.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
    },
    89081: function (t, e, i) {
      i.d(e, {
        K: function () {
          return s;
        },
      });
      var n = i(79447),
        r = i(77599);
      function s(t, e) {
        var i, s;
        if (!t.applyWillChange) return;
        let o = t.getValue("willChange");
        if (
          (o ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((o = new n.L("auto")), t.addValue("willChange", o)),
          (s = o),
          (0, r.i)(s) && s.add)
        )
          return o.add(e);
      }
    },
    35674: function (t, e, i) {
      i.d(e, {
        p: function () {
          return o;
        },
      });
      var n = i(66323),
        r = i(51580),
        s = i(26019);
      function o(t) {
        return s.G.has(t) ? "transform" : n.t.has(t) ? (0, r.D)(t) : void 0;
      }
    },
    77599: function (t, e, i) {
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
    32404: function (t, e, i) {
      i.d(e, {
        b: function () {
          return s;
        },
      });
      var n = i(99155),
        r = i(77599);
      function s(t) {
        let e = (0, r.i)(t) ? t.get() : t;
        return (0, n.p)(e) ? e.toValue() : e;
      }
    },
  },
]);
