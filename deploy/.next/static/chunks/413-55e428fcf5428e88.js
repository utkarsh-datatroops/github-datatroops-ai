(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [413],
  {
    6920: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return tH;
        },
      });
      let r = () => {},
        a = {},
        o = {},
        i = null,
        l = { mark: r, measure: r };
      try {
        "undefined" != typeof window && (a = window),
          "undefined" != typeof document && (o = document),
          "undefined" != typeof MutationObserver && (i = MutationObserver),
          "undefined" != typeof performance && (l = performance);
      } catch (e) {}
      let { userAgent: s = "" } = a.navigator || {},
        c = a,
        u = o,
        f = i,
        d = l;
      c.document;
      let p =
          !!u.documentElement &&
          !!u.head &&
          "function" == typeof u.addEventListener &&
          "function" == typeof u.createElement,
        m = ~s.indexOf("MSIE") || ~s.indexOf("Trident/");
      var h,
        g = "classic",
        b = "duotone",
        y = "sharp",
        v = "sharp-duotone",
        x = [g, b, y, v],
        w = {
          classic: {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
          },
          sharp: {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
            fast: "thin",
            "fa-thin": "thin",
          },
          "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
        },
        k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        O = k.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        P = {
          GROUP: "duotone-group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        j = [
          "classic",
          "sharp",
          "sharp-duotone",
          "solid",
          "regular",
          "light",
          "thin",
          "duotone",
          "brands",
          "2xs",
          "xs",
          "sm",
          "lg",
          "xl",
          "2xl",
          "beat",
          "border",
          "fade",
          "beat-fade",
          "bounce",
          "flip-both",
          "flip-horizontal",
          "flip-vertical",
          "flip",
          "fw",
          "inverse",
          "layers-counter",
          "layers-text",
          "layers",
          "li",
          "pull-left",
          "pull-right",
          "pulse",
          "rotate-180",
          "rotate-270",
          "rotate-90",
          "rotate-by",
          "shake",
          "spin-pulse",
          "spin-reverse",
          "spin",
          "stack-1x",
          "stack-2x",
          "stack",
          "ul",
          P.GROUP,
          P.SWAP_OPACITY,
          P.PRIMARY,
          P.SECONDARY,
        ]
          .concat(k.map((e) => "".concat(e, "x")))
          .concat(O.map((e) => "w-".concat(e)));
      let S = "___FONT_AWESOME___",
        A = "svg-inline--fa",
        C = "data-fa-i2svg",
        _ = "data-fa-pseudo-element",
        E = "data-prefix",
        N = "data-icon",
        z = "fontawesome-i2svg",
        M = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        R = (() => {
          try {
            return !0;
          } catch (e) {
            return !1;
          }
        })(),
        I = [g, y, v];
      function T(e) {
        return new Proxy(e, { get: (e, t) => (t in e ? e[t] : e[g]) });
      }
      let L = { ...w };
      L[g] = {
        ...w[g],
        fak: "kit",
        "fa-kit": "kit",
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone",
      };
      let D = T(L),
        F = {
          classic: {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
          },
          sharp: {
            solid: "fass",
            regular: "fasr",
            light: "fasl",
            thin: "fast",
          },
          "sharp-duotone": { solid: "fasds" },
        };
      F[g] = { ...F[g], kit: "fak", "kit-duotone": "fakd" };
      let U = T(F),
        W = {
          classic: {
            fab: "fa-brands",
            fad: "fa-duotone",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
          },
          sharp: {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light",
            fast: "fa-thin",
          },
          "sharp-duotone": { fasds: "fa-solid" },
        };
      W[g] = { ...W[g], fak: "fa-kit" };
      let Y = T(W),
        q = {
          classic: {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat",
          },
          sharp: {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl",
            "fa-thin": "fast",
          },
          "sharp-duotone": { "fa-solid": "fasds" },
        };
      q[g] = { ...q[g], "fa-kit": "fak" };
      let G = T(q),
        B = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
        $ = "fa-layers-text",
        H =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
      T({
        classic: {
          900: "fas",
          400: "far",
          normal: "far",
          300: "fal",
          100: "fat",
        },
        sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
        "sharp-duotone": { 900: "fasds" },
      });
      let V = [
          "class",
          "data-prefix",
          "data-icon",
          "data-fa-transform",
          "data-fa-mask",
        ],
        K = new Set();
      Object.keys(U[g]).map(K.add.bind(K)),
        Object.keys(U[y]).map(K.add.bind(K)),
        Object.keys(U[v]).map(K.add.bind(K));
      let X = ["kit", ...j],
        Q = c.FontAwesomeConfig || {};
      u &&
        "function" == typeof u.querySelector &&
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-css-prefix", "cssPrefix"],
          ["data-family-default", "familyDefault"],
          ["data-style-default", "styleDefault"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach((e) => {
          var t;
          let [n, r] = e,
            a =
              "" ===
                (t = (function (e) {
                  var t = u.querySelector("script[" + e + "]");
                  if (t) return t.getAttribute(e);
                })(n)) ||
              ("false" !== t && ("true" === t || t));
          null != a && (Q[r] = a);
        });
      let J = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: "fa",
        replacementClass: A,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      Q.familyPrefix && (Q.cssPrefix = Q.familyPrefix);
      let Z = { ...J, ...Q };
      Z.autoReplaceSvg || (Z.observeMutations = !1);
      let ee = {};
      Object.keys(J).forEach((e) => {
        Object.defineProperty(ee, e, {
          enumerable: !0,
          set: function (t) {
            (Z[e] = t), et.forEach((e) => e(ee));
          },
          get: function () {
            return Z[e];
          },
        });
      }),
        Object.defineProperty(ee, "familyPrefix", {
          enumerable: !0,
          set: function (e) {
            (Z.cssPrefix = e), et.forEach((e) => e(ee));
          },
          get: function () {
            return Z.cssPrefix;
          },
        }),
        (c.FontAwesomeConfig = ee);
      let et = [],
        en = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function er() {
        let e = 12,
          t = "";
        for (; e-- > 0; )
          t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            (62 * Math.random()) | 0
          ];
        return t;
      }
      function ea(e) {
        let t = [];
        for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
        return t;
      }
      function eo(e) {
        return e.classList
          ? ea(e.classList)
          : (e.getAttribute("class") || "").split(" ").filter((e) => e);
      }
      function ei(e) {
        return ""
          .concat(e)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function el(e) {
        return Object.keys(e || {}).reduce(
          (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
          "",
        );
      }
      function es(e) {
        return (
          e.size !== en.size ||
          e.x !== en.x ||
          e.y !== en.y ||
          e.rotate !== en.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      function ec() {
        let e = ee.cssPrefix,
          t = ee.replacementClass,
          n =
            ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
        if ("fa" !== e || t !== A) {
          let r = RegExp("\\.".concat("fa", "\\-"), "g"),
            a = RegExp("\\--".concat("fa", "\\-"), "g"),
            o = RegExp("\\.".concat(A), "g");
          n = n
            .replace(r, ".".concat(e, "-"))
            .replace(a, "--".concat(e, "-"))
            .replace(o, ".".concat(t));
        }
        return n;
      }
      let eu = !1;
      function ef() {
        ee.autoAddCss &&
          !eu &&
          (!(function (e) {
            if (!e || !p) return;
            let t = u.createElement("style");
            t.setAttribute("type", "text/css"), (t.innerHTML = e);
            let n = u.head.childNodes,
              r = null;
            for (let e = n.length - 1; e > -1; e--) {
              let t = n[e];
              ["STYLE", "LINK"].indexOf((t.tagName || "").toUpperCase()) > -1 &&
                (r = t);
            }
            u.head.insertBefore(t, r);
          })(ec()),
          (eu = !0));
      }
      let ed = c || {};
      ed[S] || (ed[S] = {}),
        ed[S].styles || (ed[S].styles = {}),
        ed[S].hooks || (ed[S].hooks = {}),
        ed[S].shims || (ed[S].shims = []);
      var ep = ed[S];
      let em = [],
        eh = function () {
          u.removeEventListener("DOMContentLoaded", eh),
            (eg = 1),
            em.map((e) => e());
        },
        eg = !1;
      function eb(e) {
        let { tag: t, attributes: n = {}, children: r = [] } = e;
        return "string" == typeof e
          ? ei(e)
          : "<"
              .concat(t, " ")
              .concat(
                Object.keys(n || {})
                  .reduce(
                    (e, t) => e + "".concat(t, '="').concat(ei(n[t]), '" '),
                    "",
                  )
                  .trim(),
                ">",
              )
              .concat(r.map(eb).join(""), "</")
              .concat(t, ">");
      }
      function ey(e, t, n) {
        if (e && e[t] && e[t][n])
          return { prefix: t, iconName: n, icon: e[t][n] };
      }
      !p ||
        (eg = (
          u.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(u.readyState)) ||
        u.addEventListener("DOMContentLoaded", eh);
      var ev = function (e, t, n, r) {
        var a,
          o,
          i,
          l = Object.keys(e),
          s = l.length,
          c =
            void 0 !== r
              ? function (e, n, a, o) {
                  return t.call(r, e, n, a, o);
                }
              : t;
        for (
          void 0 === n ? ((a = 1), (i = e[l[0]])) : ((a = 0), (i = n));
          a < s;
          a++
        )
          i = c(i, e[(o = l[a])], o, e);
        return i;
      };
      function ex(e) {
        let t = (function (e) {
          let t = [],
            n = 0,
            r = e.length;
          for (; n < r; ) {
            let a = e.charCodeAt(n++);
            if (a >= 55296 && a <= 56319 && n < r) {
              let r = e.charCodeAt(n++);
              (64512 & r) == 56320
                ? t.push(((1023 & a) << 10) + (1023 & r) + 65536)
                : (t.push(a), n--);
            } else t.push(a);
          }
          return t;
        })(e);
        return 1 === t.length ? t[0].toString(16) : null;
      }
      function ew(e) {
        return Object.keys(e).reduce((t, n) => {
          let r = e[n];
          return r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
        }, {});
      }
      function ek(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { skipHooks: r = !1 } = n,
          a = ew(t);
        "function" != typeof ep.hooks.addPack || r
          ? (ep.styles[e] = { ...(ep.styles[e] || {}), ...a })
          : ep.hooks.addPack(e, ew(t)),
          "fas" === e && ek("fa", t);
      }
      let { styles: eO, shims: eP } = ep,
        ej = {
          [g]: Object.values(Y[g]),
          [y]: Object.values(Y[y]),
          [v]: Object.values(Y[v]),
        },
        eS = null,
        eA = {},
        eC = {},
        e_ = {},
        eE = {},
        eN = {},
        ez = {
          [g]: Object.keys(D[g]),
          [y]: Object.keys(D[y]),
          [v]: Object.keys(D[v]),
        },
        eM = () => {
          let e = (e) => ev(eO, (t, n, r) => ((t[r] = ev(n, e, {})), t), {});
          (eA = e(
            (e, t, n) => (
              t[3] && (e[t[3]] = n),
              t[2] &&
                t[2]
                  .filter((e) => "number" == typeof e)
                  .forEach((t) => {
                    e[t.toString(16)] = n;
                  }),
              e
            ),
          )),
            (eC = e(
              (e, t, n) => (
                (e[n] = n),
                t[2] &&
                  t[2]
                    .filter((e) => "string" == typeof e)
                    .forEach((t) => {
                      e[t] = n;
                    }),
                e
              ),
            )),
            (eN = e((e, t, n) => {
              let r = t[2];
              return (
                (e[n] = n),
                r.forEach((t) => {
                  e[t] = n;
                }),
                e
              );
            }));
          let t = "far" in eO || ee.autoFetchSvg,
            n = ev(
              eP,
              (e, n) => {
                let r = n[0],
                  a = n[1],
                  o = n[2];
                return (
                  "far" !== a || t || (a = "fas"),
                  "string" == typeof r &&
                    (e.names[r] = { prefix: a, iconName: o }),
                  "number" == typeof r &&
                    (e.unicodes[r.toString(16)] = { prefix: a, iconName: o }),
                  e
                );
              },
              { names: {}, unicodes: {} },
            );
          (e_ = n.names),
            (eE = n.unicodes),
            (eS = eD(ee.styleDefault, { family: ee.familyDefault }));
        };
      function eR(e, t) {
        return (eA[e] || {})[t];
      }
      function eI(e, t) {
        return (eN[e] || {})[t];
      }
      function eT(e) {
        return e_[e] || { prefix: null, iconName: null };
      }
      (h = (e) => {
        eS = eD(e.styleDefault, { family: ee.familyDefault });
      }),
        et.push(h),
        eM();
      let eL = () => ({ prefix: null, iconName: null, rest: [] });
      function eD(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { family: n = g } = t,
          r = D[n][e],
          a = U[n][e] || U[n][r],
          o = e in ep.styles ? e : null;
        return a || o || null;
      }
      let eF = {
        [g]: Object.keys(Y[g]),
        [y]: Object.keys(Y[y]),
        [v]: Object.keys(Y[v]),
      };
      function eU(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { skipLookups: n = !1 } = t,
          r = {
            [g]: "".concat(ee.cssPrefix, "-").concat(g),
            [y]: "".concat(ee.cssPrefix, "-").concat(y),
            [v]: "".concat(ee.cssPrefix, "-").concat(v),
          },
          a = null,
          o = g,
          i = x.filter((e) => e !== b);
        i.forEach((t) => {
          (e.includes(r[t]) || e.some((e) => eF[t].includes(e))) && (o = t);
        });
        let l = e.reduce((e, t) => {
          let l = (function (e, t) {
            let n = t.split("-"),
              r = n[0],
              a = n.slice(1).join("-");
            return r !== e || "" === a || ~X.indexOf(a) ? null : a;
          })(ee.cssPrefix, t);
          if (
            (eO[t]
              ? ((a = t = ej[o].includes(t) ? G[o][t] : t), (e.prefix = t))
              : ez[o].indexOf(t) > -1
                ? ((a = t), (e.prefix = eD(t, { family: o })))
                : l
                  ? (e.iconName = l)
                  : t === ee.replacementClass ||
                    i.some((e) => t === r[e]) ||
                    e.rest.push(t),
            !n && e.prefix && e.iconName)
          ) {
            let t = "fa" === a ? eT(e.iconName) : {},
              n = eI(e.prefix, e.iconName);
            t.prefix && (a = null),
              (e.iconName = t.iconName || n || e.iconName),
              (e.prefix = t.prefix || e.prefix),
              "far" !== e.prefix ||
                eO.far ||
                !eO.fas ||
                ee.autoFetchSvg ||
                (e.prefix = "fas");
          }
          return e;
        }, eL());
        return (
          (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
          (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
          !l.prefix &&
            o === y &&
            (eO.fass || ee.autoFetchSvg) &&
            ((l.prefix = "fass"),
            (l.iconName = eI(l.prefix, l.iconName) || l.iconName)),
          !l.prefix &&
            o === v &&
            (eO.fasds || ee.autoFetchSvg) &&
            ((l.prefix = "fasds"),
            (l.iconName = eI(l.prefix, l.iconName) || l.iconName)),
          ("fa" === l.prefix || "fa" === a) && (l.prefix = eS || "fas"),
          l
        );
      }
      class eW {
        constructor() {
          this.definitions = {};
        }
        add() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          let r = t.reduce(this._pullDefinitions, {});
          Object.keys(r).forEach((e) => {
            (this.definitions[e] = { ...(this.definitions[e] || {}), ...r[e] }),
              ek(e, r[e]);
            let t = Y[g][e];
            t && ek(t, r[e]), eM();
          });
        }
        reset() {
          this.definitions = {};
        }
        _pullDefinitions(e, t) {
          let n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
          return (
            Object.keys(n).map((t) => {
              let { prefix: r, iconName: a, icon: o } = n[t],
                i = o[2];
              e[r] || (e[r] = {}),
                i.length > 0 &&
                  i.forEach((t) => {
                    "string" == typeof t && (e[r][t] = o);
                  }),
                (e[r][a] = o);
            }),
            e
          );
        }
      }
      let eY = [],
        eq = {},
        eG = {},
        eB = Object.keys(eG);
      function e$(e, t) {
        for (
          var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          r[a - 2] = arguments[a];
        return (
          (eq[e] || []).forEach((e) => {
            t = e.apply(null, [t, ...r]);
          }),
          t
        );
      }
      function eH(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        (eq[e] || []).forEach((e) => {
          e.apply(null, n);
        });
      }
      function eV() {
        let e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1);
        return eG[e] ? eG[e].apply(null, t) : void 0;
      }
      function eK(e) {
        "fa" === e.prefix && (e.prefix = "fas");
        let { iconName: t } = e,
          n = e.prefix || eS;
        if (t)
          return (
            (t = eI(n, t) || t), ey(eX.definitions, n, t) || ey(ep.styles, n, t)
          );
      }
      let eX = new eW(),
        eQ = {
          noAuto: () => {
            (ee.autoReplaceSvg = !1), (ee.observeMutations = !1), eH("noAuto");
          },
          config: ee,
          dom: {
            i2svg: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return p
                ? (eH("beforeI2svg", e),
                  eV("pseudoElements2svg", e),
                  eV("i2svg", e))
                : Promise.reject(
                    Error("Operation requires a DOM of some kind."),
                  );
            },
            watch: function () {
              var e;
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                { autoReplaceSvgRoot: n } = t;
              !1 === ee.autoReplaceSvg && (ee.autoReplaceSvg = !0),
                (ee.observeMutations = !0),
                (e = () => {
                  eJ({ autoReplaceSvgRoot: n }), eH("watch", t);
                }),
                p && (eg ? setTimeout(e, 0) : em.push(e));
            },
          },
          parse: {
            icon: (e) => {
              if (null === e) return null;
              if ("object" == typeof e && e.prefix && e.iconName)
                return {
                  prefix: e.prefix,
                  iconName: eI(e.prefix, e.iconName) || e.iconName,
                };
              if (Array.isArray(e) && 2 === e.length) {
                let t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                  n = eD(e[0]);
                return { prefix: n, iconName: eI(n, t) || t };
              }
              if (
                "string" == typeof e &&
                (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match(B))
              ) {
                let t = eU(e.split(" "), { skipLookups: !0 });
                return {
                  prefix: t.prefix || eS,
                  iconName: eI(t.prefix, t.iconName) || t.iconName,
                };
              }
              if ("string" == typeof e) {
                let t = eS;
                return { prefix: t, iconName: eI(t, e) || e };
              }
            },
          },
          library: eX,
          findIconDefinition: eK,
          toHtml: eb,
        },
        eJ = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { autoReplaceSvgRoot: t = u } = e;
          (Object.keys(ep.styles).length > 0 || ee.autoFetchSvg) &&
            p &&
            ee.autoReplaceSvg &&
            eQ.dom.i2svg({ node: t });
        };
      function eZ(e, t) {
        return (
          Object.defineProperty(e, "abstract", { get: t }),
          Object.defineProperty(e, "html", {
            get: function () {
              return e.abstract.map((e) => eb(e));
            },
          }),
          Object.defineProperty(e, "node", {
            get: function () {
              if (!p) return;
              let t = u.createElement("div");
              return (t.innerHTML = e.html), t.children;
            },
          }),
          e
        );
      }
      function e0(e) {
        let {
            icons: { main: t, mask: n },
            prefix: r,
            iconName: a,
            transform: o,
            symbol: i,
            title: l,
            maskId: s,
            titleId: c,
            extra: u,
            watchable: f = !1,
          } = e,
          { width: d, height: p } = n.found ? n : t,
          m = "fak" === r,
          h = [
            ee.replacementClass,
            a ? "".concat(ee.cssPrefix, "-").concat(a) : "",
          ]
            .filter((e) => -1 === u.classes.indexOf(e))
            .filter((e) => "" !== e || !!e)
            .concat(u.classes)
            .join(" "),
          g = {
            children: [],
            attributes: {
              ...u.attributes,
              "data-prefix": r,
              "data-icon": a,
              class: h,
              role: u.attributes.role || "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 ".concat(d, " ").concat(p),
            },
          },
          b =
            m && !~u.classes.indexOf("fa-fw")
              ? { width: "".concat((d / p) * 1, "em") }
              : {};
        f && (g.attributes[C] = ""),
          l &&
            (g.children.push({
              tag: "title",
              attributes: {
                id:
                  g.attributes["aria-labelledby"] || "title-".concat(c || er()),
              },
              children: [l],
            }),
            delete g.attributes.title);
        let y = {
            ...g,
            prefix: r,
            iconName: a,
            main: t,
            mask: n,
            maskId: s,
            transform: o,
            symbol: i,
            styles: { ...b, ...u.styles },
          },
          { children: v, attributes: x } =
            n.found && t.found
              ? eV("generateAbstractMask", y) || {
                  children: [],
                  attributes: {},
                }
              : eV("generateAbstractIcon", y) || {
                  children: [],
                  attributes: {},
                };
        return ((y.children = v), (y.attributes = x), i)
          ? (function (e) {
              let {
                  prefix: t,
                  iconName: n,
                  children: r,
                  attributes: a,
                  symbol: o,
                } = e,
                i =
                  !0 === o
                    ? "".concat(t, "-").concat(ee.cssPrefix, "-").concat(n)
                    : o;
              return [
                {
                  tag: "svg",
                  attributes: { style: "display: none;" },
                  children: [
                    { tag: "symbol", attributes: { ...a, id: i }, children: r },
                  ],
                },
              ];
            })(y)
          : (function (e) {
              let {
                children: t,
                main: n,
                mask: r,
                attributes: a,
                styles: o,
                transform: i,
              } = e;
              if (es(i) && n.found && !r.found) {
                let { width: e, height: t } = n,
                  r = { x: e / t / 2, y: 0.5 };
                a.style = el({
                  ...o,
                  "transform-origin": ""
                    .concat(r.x + i.x / 16, "em ")
                    .concat(r.y + i.y / 16, "em"),
                });
              }
              return [{ tag: "svg", attributes: a, children: t }];
            })(y);
      }
      function e1(e) {
        let {
            content: t,
            width: n,
            height: r,
            transform: a,
            title: o,
            extra: i,
            watchable: l = !1,
          } = e,
          s = {
            ...i.attributes,
            ...(o ? { title: o } : {}),
            class: i.classes.join(" "),
          };
        l && (s[C] = "");
        let c = { ...i.styles };
        es(a) &&
          ((c.transform = (function (e) {
            let {
                transform: t,
                width: n = 16,
                height: r = 16,
                startCentered: a = !1,
              } = e,
              o = "";
            return (
              a && m
                ? (o += "translate("
                    .concat(t.x / 16 - n / 2, "em, ")
                    .concat(t.y / 16 - r / 2, "em) "))
                : a
                  ? (o += "translate(calc(-50% + "
                      .concat(t.x / 16, "em), calc(-50% + ")
                      .concat(t.y / 16, "em)) "))
                  : (o += "translate("
                      .concat(t.x / 16, "em, ")
                      .concat(t.y / 16, "em) ")),
              (o +=
                "scale("
                  .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                  .concat((t.size / 16) * (t.flipY ? -1 : 1), ") ") +
                "rotate(".concat(t.rotate, "deg) "))
            );
          })({ transform: a, startCentered: !0, width: n, height: r })),
          (c["-webkit-transform"] = c.transform));
        let u = el(c);
        u.length > 0 && (s.style = u);
        let f = [];
        return (
          f.push({ tag: "span", attributes: s, children: [t] }),
          o &&
            f.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [o],
            }),
          f
        );
      }
      let { styles: e2 } = ep;
      function e4(e) {
        let t = e[0],
          n = e[1],
          [r] = e.slice(4);
        return {
          found: !0,
          width: t,
          height: n,
          icon: Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(ee.cssPrefix, "-").concat(P.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(ee.cssPrefix, "-").concat(P.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(ee.cssPrefix, "-").concat(P.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } },
        };
      }
      let e5 = { found: !1, width: 512, height: 512 };
      function e3(e, t) {
        let n = t;
        return (
          "fa" === t && null !== ee.styleDefault && (t = eS),
          new Promise((r, a) => {
            var o, i;
            if ("fa" === n) {
              let n = eT(e) || {};
              (e = n.iconName || e), (t = n.prefix || t);
            }
            if (e && t && e2[t] && e2[t][e]) return r(e4(e2[t][e]));
            (o = e),
              (i = t),
              R ||
                ee.showMissingIcons ||
                !o ||
                console.error(
                  'Icon with name "'
                    .concat(o, '" and prefix "')
                    .concat(i, '" is missing.'),
                ),
              r({
                ...e5,
                icon:
                  (ee.showMissingIcons && e && eV("missingIconAbstract")) || {},
              });
          })
        );
      }
      let e6 = () => {},
        e9 =
          ee.measurePerformance && d && d.mark && d.measure
            ? d
            : { mark: e6, measure: e6 },
        e8 = 'FA "6.6.0"',
        e7 = (e) => {
          e9.mark("".concat(e8, " ").concat(e, " ends")),
            e9.measure(
              "".concat(e8, " ").concat(e),
              "".concat(e8, " ").concat(e, " begins"),
              "".concat(e8, " ").concat(e, " ends"),
            );
        };
      var te = {
        begin: (e) => (
          e9.mark("".concat(e8, " ").concat(e, " begins")), () => e7(e)
        ),
      };
      let tt = () => {};
      function tn(e) {
        return "string" == typeof (e.getAttribute ? e.getAttribute(C) : null);
      }
      function tr(e) {
        return u.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function ta(e) {
        return u.createElement(e);
      }
      let to = {
        replace: function (e) {
          let t = e[0];
          if (t.parentNode) {
            if (
              (e[1].forEach((e) => {
                t.parentNode.insertBefore(
                  (function e(t) {
                    let n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { ceFn: r = "svg" === t.tag ? tr : ta } = n;
                    if ("string" == typeof t) return u.createTextNode(t);
                    let a = r(t.tag);
                    return (
                      Object.keys(t.attributes || []).forEach(function (e) {
                        a.setAttribute(e, t.attributes[e]);
                      }),
                      (t.children || []).forEach(function (t) {
                        a.appendChild(e(t, { ceFn: r }));
                      }),
                      a
                    );
                  })(e),
                  t,
                );
              }),
              null === t.getAttribute(C) && ee.keepOriginalSource)
            ) {
              let e;
              let n = u.createComment(
                ((e = " ".concat(t.outerHTML, " ")),
                (e = "".concat(e, "Font Awesome fontawesome.com "))),
              );
              t.parentNode.replaceChild(n, t);
            } else t.remove();
          }
        },
        nest: function (e) {
          let t = e[0],
            n = e[1];
          if (~eo(t).indexOf(ee.replacementClass)) return to.replace(e);
          let r = new RegExp("".concat(ee.cssPrefix, "-.*"));
          if ((delete n[0].attributes.id, n[0].attributes.class)) {
            let e = n[0].attributes.class
              .split(" ")
              .reduce(
                (e, t) => (
                  t === ee.replacementClass || t.match(r)
                    ? e.toSvg.push(t)
                    : e.toNode.push(t),
                  e
                ),
                { toNode: [], toSvg: [] },
              );
            (n[0].attributes.class = e.toSvg.join(" ")),
              0 === e.toNode.length
                ? t.removeAttribute("class")
                : t.setAttribute("class", e.toNode.join(" "));
          }
          let a = n.map((e) => eb(e)).join("\n");
          t.setAttribute(C, ""), (t.innerHTML = a);
        },
      };
      function ti(e) {
        e();
      }
      function tl(e, t) {
        let n = "function" == typeof t ? t : tt;
        if (0 === e.length) n();
        else {
          let t = ti;
          "async" === ee.mutateApproach && (t = c.requestAnimationFrame || ti),
            t(() => {
              let t =
                  !0 === ee.autoReplaceSvg
                    ? to.replace
                    : to[ee.autoReplaceSvg] || to.replace,
                r = te.begin("mutate");
              e.map(t), r(), n();
            });
        }
      }
      let ts = !1,
        tc = null;
      function tu(e) {
        if (!f || !ee.observeMutations) return;
        let {
          treeCallback: t = tt,
          nodeCallback: n = tt,
          pseudoElementsCallback: r = tt,
          observeMutationsRoot: a = u,
        } = e;
        (tc = new f((e) => {
          if (ts) return;
          let a = eS;
          ea(e).forEach((e) => {
            if (
              ("childList" === e.type &&
                e.addedNodes.length > 0 &&
                !tn(e.addedNodes[0]) &&
                (ee.searchPseudoElements && r(e.target), t(e.target)),
              "attributes" === e.type &&
                e.target.parentNode &&
                ee.searchPseudoElements &&
                r(e.target.parentNode),
              "attributes" === e.type &&
                tn(e.target) &&
                ~V.indexOf(e.attributeName))
            ) {
              if (
                "class" === e.attributeName &&
                (function (e) {
                  let t = e.getAttribute ? e.getAttribute(E) : null,
                    n = e.getAttribute ? e.getAttribute(N) : null;
                  return t && n;
                })(e.target)
              ) {
                let { prefix: t, iconName: n } = eU(eo(e.target));
                e.target.setAttribute(E, t || a),
                  n && e.target.setAttribute(N, n);
              } else {
                var o;
                (o = e.target) &&
                  o.classList &&
                  o.classList.contains &&
                  o.classList.contains(ee.replacementClass) &&
                  n(e.target);
              }
            }
          });
        })),
          p &&
            tc.observe(a, {
              childList: !0,
              attributes: !0,
              characterData: !0,
              subtree: !0,
            });
      }
      function tf(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { styleParser: !0 },
          {
            iconName: n,
            prefix: r,
            rest: a,
          } = (function (e) {
            let t = e.getAttribute("data-prefix"),
              n = e.getAttribute("data-icon"),
              r = void 0 !== e.innerText ? e.innerText.trim() : "",
              a = eU(eo(e));
            if (
              (a.prefix || (a.prefix = eS),
              t && n && ((a.prefix = t), (a.iconName = n)),
              a.iconName && a.prefix)
            )
              return a;
            if (a.prefix && r.length > 0) {
              var o, i;
              a.iconName =
                ((o = a.prefix),
                (i = e.innerText),
                (eC[o] || {})[i] || eR(a.prefix, ex(e.innerText)));
            }
            return (
              !a.iconName &&
                ee.autoFetchSvg &&
                e.firstChild &&
                e.firstChild.nodeType === Node.TEXT_NODE &&
                (a.iconName = e.firstChild.data),
              a
            );
          })(e),
          o = (function (e) {
            let t = ea(e.attributes).reduce(
                (e, t) => (
                  "class" !== e.name &&
                    "style" !== e.name &&
                    (e[t.name] = t.value),
                  e
                ),
                {},
              ),
              n = e.getAttribute("title"),
              r = e.getAttribute("data-fa-title-id");
            return (
              ee.autoA11y &&
                (n
                  ? (t["aria-labelledby"] = ""
                      .concat(ee.replacementClass, "-title-")
                      .concat(r || er()))
                  : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
              t
            );
          })(e),
          i = e$("parseNodeAttributes", {}, e),
          l = t.styleParser
            ? (function (e) {
                let t = e.getAttribute("style"),
                  n = [];
                return (
                  t &&
                    (n = t.split(";").reduce((e, t) => {
                      let n = t.split(":"),
                        r = n[0],
                        a = n.slice(1);
                      return (
                        r && a.length > 0 && (e[r] = a.join(":").trim()), e
                      );
                    }, {})),
                  n
                );
              })(e)
            : [];
        return {
          iconName: n,
          title: e.getAttribute("title"),
          titleId: e.getAttribute("data-fa-title-id"),
          prefix: r,
          transform: en,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          symbol: !1,
          extra: { classes: a, styles: l, attributes: o },
          ...i,
        };
      }
      let { styles: td } = ep;
      function tp(e) {
        let t =
          "nest" === ee.autoReplaceSvg ? tf(e, { styleParser: !1 }) : tf(e);
        return ~t.extra.classes.indexOf($)
          ? eV("generateLayersText", e, t)
          : eV("generateSvgReplacementMutation", e, t);
      }
      let tm = new Set();
      function th(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!p) return Promise.resolve();
        let n = u.documentElement.classList,
          r = (e) => n.add("".concat(z, "-").concat(e)),
          a = (e) => n.remove("".concat(z, "-").concat(e)),
          o = ee.autoFetchSvg
            ? tm
            : I.map((e) => "fa-".concat(e)).concat(Object.keys(td));
        o.includes("fa") || o.push("fa");
        let i = [".".concat($, ":not([").concat(C, "])")]
          .concat(o.map((e) => ".".concat(e, ":not([").concat(C, "])")))
          .join(", ");
        if (0 === i.length) return Promise.resolve();
        let l = [];
        try {
          l = ea(e.querySelectorAll(i));
        } catch (e) {}
        if (!(l.length > 0)) return Promise.resolve();
        r("pending"), a("complete");
        let s = te.begin("onTree"),
          c = l.reduce((e, t) => {
            try {
              let n = tp(t);
              n && e.push(n);
            } catch (e) {
              R || "MissingIcon" !== e.name || console.error(e);
            }
            return e;
          }, []);
        return new Promise((e, n) => {
          Promise.all(c)
            .then((n) => {
              tl(n, () => {
                r("active"),
                  r("complete"),
                  a("pending"),
                  "function" == typeof t && t(),
                  s(),
                  e();
              });
            })
            .catch((e) => {
              s(), n(e);
            });
        });
      }
      function tg(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        tp(e).then((e) => {
          e && tl([e], t);
        });
      }
      I.map((e) => {
        tm.add("fa-".concat(e));
      }),
        Object.keys(D[g]).map(tm.add.bind(tm)),
        Object.keys(D[y]).map(tm.add.bind(tm)),
        Object.keys(D[v]).map(tm.add.bind(tm)),
        (tm = [...tm]);
      let tb = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              transform: n = en,
              symbol: r = !1,
              mask: a = null,
              maskId: o = null,
              title: i = null,
              titleId: l = null,
              classes: s = [],
              attributes: c = {},
              styles: u = {},
            } = t;
          if (!e) return;
          let { prefix: f, iconName: d, icon: p } = e;
          return eZ(
            { type: "icon", ...e },
            () => (
              eH("beforeDOMElementCreation", { iconDefinition: e, params: t }),
              ee.autoA11y &&
                (i
                  ? (c["aria-labelledby"] = ""
                      .concat(ee.replacementClass, "-title-")
                      .concat(l || er()))
                  : ((c["aria-hidden"] = "true"), (c.focusable = "false"))),
              e0({
                icons: {
                  main: e4(p),
                  mask: a
                    ? e4(a.icon)
                    : { found: !1, width: null, height: null, icon: {} },
                },
                prefix: f,
                iconName: d,
                transform: { ...en, ...n },
                symbol: r,
                title: i,
                maskId: o,
                titleId: l,
                extra: { attributes: c, styles: u, classes: s },
              })
            ),
          );
        },
        ty = RegExp('"', "ug"),
        tv = {
          FontAwesome: { normal: "fas", 400: "fas" },
          "Font Awesome 6 Free": { 900: "fas", 400: "far" },
          "Font Awesome 6 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat",
          },
          "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
          "Font Awesome 6 Duotone": { 900: "fad" },
          "Font Awesome 6 Sharp": {
            900: "fass",
            400: "fasr",
            normal: "fasr",
            300: "fasl",
            100: "fast",
          },
          "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
          "Font Awesome 5 Free": { 900: "fas", 400: "far" },
          "Font Awesome 5 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
          },
          "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
          "Font Awesome 5 Duotone": { 900: "fad" },
          "Font Awesome Kit": { 400: "fak", normal: "fak" },
          "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
        },
        tx = Object.keys(tv).reduce(
          (e, t) => ((e[t.toLowerCase()] = tv[t]), e),
          {},
        ),
        tw = Object.keys(tx).reduce((e, t) => {
          let n = tx[t];
          return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
        }, {});
      function tk(e, t) {
        let n = ""
          .concat("data-fa-pseudo-element-pending")
          .concat(t.replace(":", "-"));
        return new Promise((r, a) => {
          if (null !== e.getAttribute(n)) return r();
          let o = ea(e.children).filter((e) => e.getAttribute(_) === t)[0],
            i = c.getComputedStyle(e, t),
            l = i.getPropertyValue("font-family"),
            s = l.match(H),
            f = i.getPropertyValue("font-weight"),
            d = i.getPropertyValue("content");
          if (o && !s) return e.removeChild(o), r();
          if (s && "none" !== d && "" !== d) {
            let c = i.getPropertyValue("content"),
              d = (function (e, t) {
                let n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
                  r = parseInt(t),
                  a = isNaN(r) ? "normal" : r;
                return (tx[n] || {})[a] || tw[n];
              })(l, f),
              { value: p, isSecondary: m } = (function (e) {
                let t = e.replace(ty, ""),
                  n = (function (e, t) {
                    let n;
                    let r = e.length,
                      a = e.charCodeAt(0);
                    return a >= 55296 &&
                      a <= 56319 &&
                      r > 1 &&
                      (n = e.charCodeAt(1)) >= 56320 &&
                      n <= 57343
                      ? (a - 55296) * 1024 + n - 56320 + 65536
                      : a;
                  })(t, 0),
                  r = 2 === t.length && t[0] === t[1];
                return {
                  value: r ? ex(t[0]) : ex(t),
                  isSecondary: (n >= 1105920 && n <= 1112319) || r,
                };
              })(c),
              h = s[0].startsWith("FontAwesome"),
              g = eR(d, p),
              b = g;
            if (h) {
              let e = (function (e) {
                let t = eE[e],
                  n = eR("fas", e);
                return (
                  t ||
                  (n ? { prefix: "fas", iconName: n } : null) || {
                    prefix: null,
                    iconName: null,
                  }
                );
              })(p);
              e.iconName && e.prefix && ((g = e.iconName), (d = e.prefix));
            }
            if (
              !g ||
              m ||
              (o && o.getAttribute(E) === d && o.getAttribute(N) === b)
            )
              r();
            else {
              e.setAttribute(n, b), o && e.removeChild(o);
              let i = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: en,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                { extra: l } = i;
              (l.attributes[_] = t),
                e3(g, d)
                  .then((a) => {
                    let o = e0({
                        ...i,
                        icons: { main: a, mask: eL() },
                        prefix: d,
                        iconName: b,
                        extra: l,
                        watchable: !0,
                      }),
                      s = u.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg",
                      );
                    "::before" === t
                      ? e.insertBefore(s, e.firstChild)
                      : e.appendChild(s),
                      (s.outerHTML = o.map((e) => eb(e)).join("\n")),
                      e.removeAttribute(n),
                      r();
                  })
                  .catch(a);
            }
          } else r();
        });
      }
      function tO(e) {
        return Promise.all([tk(e, "::before"), tk(e, "::after")]);
      }
      function tP(e) {
        return (
          e.parentNode !== document.head &&
          !~M.indexOf(e.tagName.toUpperCase()) &&
          !e.getAttribute(_) &&
          (!e.parentNode || "svg" !== e.parentNode.tagName)
        );
      }
      function tj(e) {
        if (p)
          return new Promise((t, n) => {
            let r = ea(e.querySelectorAll("*")).filter(tP).map(tO),
              a = te.begin("searchPseudoElements");
            (ts = !0),
              Promise.all(r)
                .then(() => {
                  a(), (ts = !1), t();
                })
                .catch(() => {
                  a(), (ts = !1), n();
                });
          });
      }
      let tS = !1,
        tA = (e) =>
          e
            .toLowerCase()
            .split(" ")
            .reduce(
              (e, t) => {
                let n = t.toLowerCase().split("-"),
                  r = n[0],
                  a = n.slice(1).join("-");
                if (r && "h" === a) return (e.flipX = !0), e;
                if (r && "v" === a) return (e.flipY = !0), e;
                if (isNaN((a = parseFloat(a)))) return e;
                switch (r) {
                  case "grow":
                    e.size = e.size + a;
                    break;
                  case "shrink":
                    e.size = e.size - a;
                    break;
                  case "left":
                    e.x = e.x - a;
                    break;
                  case "right":
                    e.x = e.x + a;
                    break;
                  case "up":
                    e.y = e.y - a;
                    break;
                  case "down":
                    e.y = e.y + a;
                    break;
                  case "rotate":
                    e.rotate = e.rotate + a;
                }
                return e;
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
            ),
        tC = { x: 0, y: 0, width: "100%", height: "100%" };
      function t_(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
          e.attributes &&
            (e.attributes.fill || t) &&
            (e.attributes.fill = "black"),
          e
        );
      }
      !(function (e, t) {
        let { mixoutsTo: n } = t;
        (eY = e),
          (eq = {}),
          Object.keys(eG).forEach((e) => {
            -1 === eB.indexOf(e) && delete eG[e];
          }),
          eY.forEach((e) => {
            let t = e.mixout ? e.mixout() : {};
            if (
              (Object.keys(t).forEach((e) => {
                "function" == typeof t[e] && (n[e] = t[e]),
                  "object" == typeof t[e] &&
                    Object.keys(t[e]).forEach((r) => {
                      n[e] || (n[e] = {}), (n[e][r] = t[e][r]);
                    });
              }),
              e.hooks)
            ) {
              let t = e.hooks();
              Object.keys(t).forEach((e) => {
                eq[e] || (eq[e] = []), eq[e].push(t[e]);
              });
            }
            e.provides && e.provides(eG);
          });
      })(
        [
          {
            mixout: () => ({ dom: { css: ec, insertCss: ef } }),
            hooks: () => ({
              beforeDOMElementCreation() {
                ef();
              },
              beforeI2svg() {
                ef();
              },
            }),
          },
          {
            mixout: () => ({
              icon: function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = (e || {}).icon ? e : eK(e || {}),
                  { mask: r } = t;
                return (
                  r && (r = (r || {}).icon ? r : eK(r || {})),
                  tb(n, { ...t, mask: r })
                );
              },
            }),
            hooks: () => ({
              mutationObserverCallbacks: (e) => (
                (e.treeCallback = th), (e.nodeCallback = tg), e
              ),
            }),
            provides(e) {
              (e.i2svg = function (e) {
                let { node: t = u, callback: n = () => {} } = e;
                return th(t, n);
              }),
                (e.generateSvgReplacementMutation = function (e, t) {
                  let {
                    iconName: n,
                    title: r,
                    titleId: a,
                    prefix: o,
                    transform: i,
                    symbol: l,
                    mask: s,
                    maskId: c,
                    extra: u,
                  } = t;
                  return new Promise((t, f) => {
                    Promise.all([
                      e3(n, o),
                      s.iconName
                        ? e3(s.iconName, s.prefix)
                        : Promise.resolve({
                            found: !1,
                            width: 512,
                            height: 512,
                            icon: {},
                          }),
                    ])
                      .then((s) => {
                        let [f, d] = s;
                        t([
                          e,
                          e0({
                            icons: { main: f, mask: d },
                            prefix: o,
                            iconName: n,
                            transform: i,
                            symbol: l,
                            maskId: c,
                            title: r,
                            titleId: a,
                            extra: u,
                            watchable: !0,
                          }),
                        ]);
                      })
                      .catch(f);
                  });
                }),
                (e.generateAbstractIcon = function (e) {
                  let t,
                    {
                      children: n,
                      attributes: r,
                      main: a,
                      transform: o,
                      styles: i,
                    } = e,
                    l = el(i);
                  return (
                    l.length > 0 && (r.style = l),
                    es(o) &&
                      (t = eV("generateAbstractTransformGrouping", {
                        main: a,
                        transform: o,
                        containerWidth: a.width,
                        iconWidth: a.width,
                      })),
                    n.push(t || a.icon),
                    { children: n, attributes: r }
                  );
                });
            },
          },
          {
            mixout: () => ({
              layer(e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { classes: n = [] } = t;
                return eZ({ type: "layer" }, () => {
                  eH("beforeDOMElementCreation", { assembler: e, params: t });
                  let r = [];
                  return (
                    e((e) => {
                      Array.isArray(e)
                        ? e.map((e) => {
                            r = r.concat(e.abstract);
                          })
                        : (r = r.concat(e.abstract));
                    }),
                    [
                      {
                        tag: "span",
                        attributes: {
                          class: [
                            "".concat(ee.cssPrefix, "-layers"),
                            ...n,
                          ].join(" "),
                        },
                        children: r,
                      },
                    ]
                  );
                });
              },
            }),
          },
          {
            mixout: () => ({
              counter(e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  {
                    title: n = null,
                    classes: r = [],
                    attributes: a = {},
                    styles: o = {},
                  } = t;
                return eZ(
                  { type: "counter", content: e },
                  () => (
                    eH("beforeDOMElementCreation", { content: e, params: t }),
                    (function (e) {
                      let { content: t, title: n, extra: r } = e,
                        a = {
                          ...r.attributes,
                          ...(n ? { title: n } : {}),
                          class: r.classes.join(" "),
                        },
                        o = el(r.styles);
                      o.length > 0 && (a.style = o);
                      let i = [];
                      return (
                        i.push({ tag: "span", attributes: a, children: [t] }),
                        n &&
                          i.push({
                            tag: "span",
                            attributes: { class: "sr-only" },
                            children: [n],
                          }),
                        i
                      );
                    })({
                      content: e.toString(),
                      title: n,
                      extra: {
                        attributes: a,
                        styles: o,
                        classes: [
                          "".concat(ee.cssPrefix, "-layers-counter"),
                          ...r,
                        ],
                      },
                    })
                  ),
                );
              },
            }),
          },
          {
            mixout: () => ({
              text(e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  {
                    transform: n = en,
                    title: r = null,
                    classes: a = [],
                    attributes: o = {},
                    styles: i = {},
                  } = t;
                return eZ(
                  { type: "text", content: e },
                  () => (
                    eH("beforeDOMElementCreation", { content: e, params: t }),
                    e1({
                      content: e,
                      transform: { ...en, ...n },
                      title: r,
                      extra: {
                        attributes: o,
                        styles: i,
                        classes: [
                          "".concat(ee.cssPrefix, "-layers-text"),
                          ...a,
                        ],
                      },
                    })
                  ),
                );
              },
            }),
            provides(e) {
              e.generateLayersText = function (e, t) {
                let { title: n, transform: r, extra: a } = t,
                  o = null,
                  i = null;
                if (m) {
                  let t = parseInt(getComputedStyle(e).fontSize, 10),
                    n = e.getBoundingClientRect();
                  (o = n.width / t), (i = n.height / t);
                }
                return (
                  ee.autoA11y && !n && (a.attributes["aria-hidden"] = "true"),
                  Promise.resolve([
                    e,
                    e1({
                      content: e.innerHTML,
                      width: o,
                      height: i,
                      transform: r,
                      title: n,
                      extra: a,
                      watchable: !0,
                    }),
                  ])
                );
              };
            },
          },
          {
            hooks: () => ({
              mutationObserverCallbacks: (e) => (
                (e.pseudoElementsCallback = tj), e
              ),
            }),
            provides(e) {
              e.pseudoElements2svg = function (e) {
                let { node: t = u } = e;
                ee.searchPseudoElements && tj(t);
              };
            },
          },
          {
            mixout: () => ({
              dom: {
                unwatch() {
                  (ts = !0), (tS = !0);
                },
              },
            }),
            hooks: () => ({
              bootstrap() {
                tu(e$("mutationObserverCallbacks", {}));
              },
              noAuto() {
                tc && tc.disconnect();
              },
              watch(e) {
                let { observeMutationsRoot: t } = e;
                tS
                  ? (ts = !1)
                  : tu(
                      e$("mutationObserverCallbacks", {
                        observeMutationsRoot: t,
                      }),
                    );
              },
            }),
          },
          {
            mixout: () => ({ parse: { transform: (e) => tA(e) } }),
            hooks: () => ({
              parseNodeAttributes(e, t) {
                let n = t.getAttribute("data-fa-transform");
                return n && (e.transform = tA(n)), e;
              },
            }),
            provides(e) {
              e.generateAbstractTransformGrouping = function (e) {
                let {
                    main: t,
                    transform: n,
                    containerWidth: r,
                    iconWidth: a,
                  } = e,
                  o = "translate("
                    .concat(32 * n.x, ", ")
                    .concat(32 * n.y, ") "),
                  i = "scale("
                    .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                    .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
                  l = "rotate(".concat(n.rotate, " 0 0)"),
                  s = { transform: "".concat(o, " ").concat(i, " ").concat(l) },
                  c = {
                    outer: { transform: "translate(".concat(r / 2, " 256)") },
                    inner: s,
                    path: {
                      transform: "translate(".concat(-((a / 2) * 1), " -256)"),
                    },
                  };
                return {
                  tag: "g",
                  attributes: { ...c.outer },
                  children: [
                    {
                      tag: "g",
                      attributes: { ...c.inner },
                      children: [
                        {
                          tag: t.icon.tag,
                          children: t.icon.children,
                          attributes: { ...t.icon.attributes, ...c.path },
                        },
                      ],
                    },
                  ],
                };
              };
            },
          },
          {
            hooks: () => ({
              parseNodeAttributes(e, t) {
                let n = t.getAttribute("data-fa-mask"),
                  r = n ? eU(n.split(" ").map((e) => e.trim())) : eL();
                return (
                  r.prefix || (r.prefix = eS),
                  (e.mask = r),
                  (e.maskId = t.getAttribute("data-fa-mask-id")),
                  e
                );
              },
            }),
            provides(e) {
              e.generateAbstractMask = function (e) {
                let {
                    children: t,
                    attributes: n,
                    main: r,
                    mask: a,
                    maskId: o,
                    transform: i,
                  } = e,
                  { width: l, icon: s } = r,
                  { width: c, icon: u } = a,
                  f = (function (e) {
                    let { transform: t, containerWidth: n, iconWidth: r } = e,
                      a = "translate("
                        .concat(32 * t.x, ", ")
                        .concat(32 * t.y, ") "),
                      o = "scale("
                        .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                        .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
                      i = "rotate(".concat(t.rotate, " 0 0)"),
                      l = {
                        transform: "".concat(a, " ").concat(o, " ").concat(i),
                      };
                    return {
                      outer: { transform: "translate(".concat(n / 2, " 256)") },
                      inner: l,
                      path: {
                        transform: "translate(".concat(
                          -((r / 2) * 1),
                          " -256)",
                        ),
                      },
                    };
                  })({ transform: i, containerWidth: c, iconWidth: l }),
                  d = { tag: "rect", attributes: { ...tC, fill: "white" } },
                  p = s.children ? { children: s.children.map(t_) } : {},
                  m = {
                    tag: "g",
                    attributes: { ...f.inner },
                    children: [
                      t_({
                        tag: s.tag,
                        attributes: { ...s.attributes, ...f.path },
                        ...p,
                      }),
                    ],
                  },
                  h = { tag: "g", attributes: { ...f.outer }, children: [m] },
                  g = "mask-".concat(o || er()),
                  b = "clip-".concat(o || er()),
                  y = {
                    tag: "mask",
                    attributes: {
                      ...tC,
                      id: g,
                      maskUnits: "userSpaceOnUse",
                      maskContentUnits: "userSpaceOnUse",
                    },
                    children: [d, h],
                  },
                  v = {
                    tag: "defs",
                    children: [
                      {
                        tag: "clipPath",
                        attributes: { id: b },
                        children: "g" === u.tag ? u.children : [u],
                      },
                      y,
                    ],
                  };
                return (
                  t.push(v, {
                    tag: "rect",
                    attributes: {
                      fill: "currentColor",
                      "clip-path": "url(#".concat(b, ")"),
                      mask: "url(#".concat(g, ")"),
                      ...tC,
                    },
                  }),
                  { children: t, attributes: n }
                );
              };
            },
          },
          {
            provides(e) {
              let t = !1;
              c.matchMedia &&
                (t = c.matchMedia("(prefers-reduced-motion: reduce)").matches),
                (e.missingIconAbstract = function () {
                  let e = [],
                    n = { fill: "currentColor" },
                    r = {
                      attributeType: "XML",
                      repeatCount: "indefinite",
                      dur: "2s",
                    };
                  e.push({
                    tag: "path",
                    attributes: {
                      ...n,
                      d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                    },
                  });
                  let a = { ...r, attributeName: "opacity" },
                    o = {
                      tag: "circle",
                      attributes: { ...n, cx: "256", cy: "364", r: "28" },
                      children: [],
                    };
                  return (
                    t ||
                      o.children.push(
                        {
                          tag: "animate",
                          attributes: {
                            ...r,
                            attributeName: "r",
                            values: "28;14;28;28;14;28;",
                          },
                        },
                        {
                          tag: "animate",
                          attributes: { ...a, values: "1;0;1;1;0;1;" },
                        },
                      ),
                    e.push(o),
                    e.push({
                      tag: "path",
                      attributes: {
                        ...n,
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                      },
                      children: t
                        ? []
                        : [
                            {
                              tag: "animate",
                              attributes: { ...a, values: "1;0;0;0;0;1;" },
                            },
                          ],
                    }),
                    t ||
                      e.push({
                        tag: "path",
                        attributes: {
                          ...n,
                          opacity: "0",
                          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                        },
                        children: [
                          {
                            tag: "animate",
                            attributes: { ...a, values: "0;0;1;1;0;0;" },
                          },
                        ],
                      }),
                    { tag: "g", attributes: { class: "missing" }, children: e }
                  );
                });
            },
          },
          {
            hooks: () => ({
              parseNodeAttributes(e, t) {
                let n = t.getAttribute("data-fa-symbol");
                return (e.symbol = null !== n && ("" === n || n)), e;
              },
            }),
          },
        ],
        { mixoutsTo: eQ },
      ),
        eQ.noAuto,
        eQ.config,
        eQ.library,
        eQ.dom;
      let tE = eQ.parse;
      eQ.findIconDefinition, eQ.toHtml;
      let tN = eQ.icon;
      eQ.layer, eQ.text, eQ.counter;
      var tz = n(41448),
        tM = n.n(tz),
        tR = n(2265);
      function tI(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tI(Object(n), !0).forEach(function (t) {
                tD(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tI(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function tL(e) {
        return (tL =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function tD(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function tF(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return tU(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return tU(e, void 0);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tU(e, void 0);
            }
          })(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function tU(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function tW(e) {
        var t;
        return (t = e - 0) == t
          ? e
          : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
              return t ? t.toUpperCase() : "";
            }))
              .substr(0, 1)
              .toLowerCase() + e.substr(1);
      }
      var tY = ["style"],
        tq = !1;
      try {
        tq = !0;
      } catch (e) {}
      function tG(e) {
        return e && "object" === tL(e) && e.prefix && e.iconName && e.icon
          ? e
          : tE.icon
            ? tE.icon(e)
            : null === e
              ? null
              : e && "object" === tL(e) && e.prefix && e.iconName
                ? e
                : Array.isArray(e) && 2 === e.length
                  ? { prefix: e[0], iconName: e[1] }
                  : "string" == typeof e
                    ? { prefix: "fas", iconName: e }
                    : void 0;
      }
      function tB(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? tD({}, e, t)
          : {};
      }
      var t$ = {
          border: !1,
          className: "",
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: "",
          titleId: null,
          transform: null,
          swapOpacity: !1,
        },
        tH = tR.forwardRef(function (e, t) {
          var n,
            r,
            a,
            o,
            i,
            l,
            s,
            c,
            u,
            f,
            d,
            p,
            m,
            h,
            g,
            b,
            y,
            v,
            x,
            w = tT(tT({}, t$), e),
            k = w.icon,
            O = w.mask,
            P = w.symbol,
            j = w.className,
            S = w.title,
            A = w.titleId,
            C = w.maskId,
            _ = tG(k),
            E = tB(
              "classes",
              [].concat(
                tF(
                  ((r = w.beat),
                  (a = w.fade),
                  (o = w.beatFade),
                  (i = w.bounce),
                  (l = w.shake),
                  (s = w.flash),
                  (c = w.spin),
                  (u = w.spinPulse),
                  (f = w.spinReverse),
                  (d = w.pulse),
                  (p = w.fixedWidth),
                  (m = w.inverse),
                  (h = w.border),
                  (g = w.listItem),
                  (b = w.flip),
                  (y = w.size),
                  (v = w.rotation),
                  (x = w.pull),
                  Object.keys(
                    (tD(
                      (n = {
                        "fa-beat": r,
                        "fa-fade": a,
                        "fa-beat-fade": o,
                        "fa-bounce": i,
                        "fa-shake": l,
                        "fa-flash": s,
                        "fa-spin": c,
                        "fa-spin-reverse": f,
                        "fa-spin-pulse": u,
                        "fa-pulse": d,
                        "fa-fw": p,
                        "fa-inverse": m,
                        "fa-border": h,
                        "fa-li": g,
                        "fa-flip": !0 === b,
                        "fa-flip-horizontal":
                          "horizontal" === b || "both" === b,
                        "fa-flip-vertical": "vertical" === b || "both" === b,
                      }),
                      "fa-".concat(y),
                      null != y,
                    ),
                    tD(n, "fa-rotate-".concat(v), null != v && 0 !== v),
                    tD(n, "fa-pull-".concat(x), null != x),
                    tD(n, "fa-swap-opacity", w.swapOpacity),
                    n),
                  )
                    .map(function (e) {
                      return n[e] ? e : null;
                    })
                    .filter(function (e) {
                      return e;
                    })),
                ),
                tF((j || "").split(" ")),
              ),
            ),
            N = tB(
              "transform",
              "string" == typeof w.transform
                ? tE.transform(w.transform)
                : w.transform,
            ),
            z = tB("mask", tG(O)),
            M = tN(
              _,
              tT(
                tT(tT(tT({}, E), N), z),
                {},
                { symbol: P, title: S, titleId: A, maskId: C },
              ),
            );
          if (!M)
            return (
              !(function () {
                if (!tq && console && "function" == typeof console.error) {
                  var e;
                  (e = console).error.apply(e, arguments);
                }
              })("Could not find icon", _),
              null
            );
          var R = M.abstract,
            I = { ref: t };
          return (
            Object.keys(w).forEach(function (e) {
              t$.hasOwnProperty(e) || (I[e] = w[e]);
            }),
            tV(R[0], I)
          );
        });
      (tH.displayName = "FontAwesomeIcon"),
        (tH.propTypes = {
          beat: tM().bool,
          border: tM().bool,
          beatFade: tM().bool,
          bounce: tM().bool,
          className: tM().string,
          fade: tM().bool,
          flash: tM().bool,
          mask: tM().oneOfType([tM().object, tM().array, tM().string]),
          maskId: tM().string,
          fixedWidth: tM().bool,
          inverse: tM().bool,
          flip: tM().oneOf([!0, !1, "horizontal", "vertical", "both"]),
          icon: tM().oneOfType([tM().object, tM().array, tM().string]),
          listItem: tM().bool,
          pull: tM().oneOf(["right", "left"]),
          pulse: tM().bool,
          rotation: tM().oneOf([0, 90, 180, 270]),
          shake: tM().bool,
          size: tM().oneOf([
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: tM().bool,
          spinPulse: tM().bool,
          spinReverse: tM().bool,
          symbol: tM().oneOfType([tM().bool, tM().string]),
          title: tM().string,
          titleId: tM().string,
          transform: tM().oneOfType([tM().string, tM().object]),
          swapOpacity: tM().bool,
        });
      var tV = function e(t, n) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("string" == typeof n) return n;
        var a = (n.children || []).map(function (n) {
            return e(t, n);
          }),
          o = Object.keys(n.attributes || {}).reduce(
            function (e, t) {
              var r = n.attributes[t];
              switch (t) {
                case "class":
                  (e.attrs.className = r), delete n.attributes.class;
                  break;
                case "style":
                  e.attrs.style = r
                    .split(";")
                    .map(function (e) {
                      return e.trim();
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .reduce(function (e, t) {
                      var n = t.indexOf(":"),
                        r = tW(t.slice(0, n)),
                        a = t.slice(n + 1).trim();
                      return (
                        r.startsWith("webkit")
                          ? (e[r.charAt(0).toUpperCase() + r.slice(1)] = a)
                          : (e[r] = a),
                        e
                      );
                    }, {});
                  break;
                default:
                  0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                    ? (e.attrs[t.toLowerCase()] = r)
                    : (e.attrs[tW(t)] = r);
              }
              return e;
            },
            { attrs: {} },
          ),
          i = r.style,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  a = {},
                  o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]),
                  !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (a[n] = e[n]);
            }
            return a;
          })(r, tY);
        return (
          (o.attrs.style = tT(tT({}, o.attrs.style), void 0 === i ? {} : i)),
          t.apply(void 0, [n.tag, tT(tT({}, o.attrs), l)].concat(tF(a)))
        );
      }.bind(null, tR.createElement);
    },
    66648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return a.a;
        },
      });
      var r = n(55601),
        a = n.n(r);
    },
    87138: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return a.a;
        },
      });
      var r = n(231),
        a = n.n(r);
    },
    844: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(18157);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    25944: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(18157),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    38173: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let r = n(99920),
        a = n(41452),
        o = n(57437),
        i = a._(n(2265)),
        l = r._(n(54887)),
        s = r._(n(28321)),
        c = n(80497),
        u = n(7103),
        f = n(93938);
      n(72301);
      let d = n(60291),
        p = r._(n(21241)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image/",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function h(e, t, n, r, a, o, i) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && a(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    a = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => a,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (a = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        return i.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let b = (0, i.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: a,
          height: l,
          width: s,
          decoding: c,
          className: u,
          style: f,
          fetchPriority: d,
          placeholder: p,
          loading: m,
          unoptimized: b,
          fill: y,
          onLoadRef: v,
          onLoadingCompleteRef: x,
          setBlurComplete: w,
          setShowAltText: k,
          sizesInput: O,
          onLoad: P,
          onError: j,
          ...S
        } = e;
        return (0, o.jsx)("img", {
          ...S,
          ...g(d),
          loading: m,
          width: s,
          height: l,
          decoding: c,
          "data-nimg": y ? "fill" : "1",
          className: u,
          style: f,
          sizes: a,
          srcSet: r,
          src: n,
          ref: (0, i.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (j && (e.src = e.src), e.complete && h(e, p, v, x, w, b, O));
            },
            [n, p, v, x, w, j, b, O, t],
          ),
          onLoad: (e) => {
            h(e.currentTarget, p, v, x, w, b, O);
          },
          onError: (e) => {
            k(!0), "empty" !== p && w(!0), j && j(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...g(n.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(n.src, r), null)
          : (0, o.jsx)(s.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes,
              ),
            });
      }
      let v = (0, i.forwardRef)((e, t) => {
        let n = (0, i.useContext)(d.RouterContext),
          r = (0, i.useContext)(f.ImageConfigContext),
          a = (0, i.useMemo)(() => {
            let e = m || r || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: l, onLoadingComplete: s } = e,
          h = (0, i.useRef)(l);
        (0, i.useEffect)(() => {
          h.current = l;
        }, [l]);
        let g = (0, i.useRef)(s);
        (0, i.useEffect)(() => {
          g.current = s;
        }, [s]);
        let [v, x] = (0, i.useState)(!1),
          [w, k] = (0, i.useState)(!1),
          { props: O, meta: P } = (0, c.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: a,
            blurComplete: v,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(b, {
              ...O,
              unoptimized: P.unoptimized,
              placeholder: P.placeholder,
              fill: P.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: x,
              setShowAltText: k,
              sizesInput: e.sizes,
              ref: t,
            }),
            P.priority
              ? (0, o.jsx)(y, { isAppRouter: !n, imgAttributes: O })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    231: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let r = n(99920),
        a = n(57437),
        o = r._(n(2265)),
        i = n(98016),
        l = n(18029),
        s = n(41142),
        c = n(43461),
        u = n(844),
        f = n(60291),
        d = n(44467),
        p = n(53106),
        m = n(25944),
        h = n(4897),
        g = n(51507),
        b = new Set();
      function y(e, t, n, r, a, o) {
        if ("undefined" != typeof window && (o || (0, l.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck) {
            let a =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (b.has(a)) return;
            b.add(a);
          }
          (async () => (o ? e.prefetch(t, a) : e.prefetch(t, n, r)))().catch(
            (e) => {},
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let x = o.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: s,
          as: b,
          children: x,
          prefetch: w = null,
          passHref: k,
          replace: O,
          shallow: P,
          scroll: j,
          locale: S,
          onClick: A,
          onMouseEnter: C,
          onTouchStart: _,
          legacyBehavior: E = !1,
          ...N
        } = e;
        (n = x),
          E &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, a.jsx)("a", { children: n }));
        let z = o.default.useContext(f.RouterContext),
          M = o.default.useContext(d.AppRouterContext),
          R = null != z ? z : M,
          I = !z,
          T = !1 !== w,
          L = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: D, as: F } = o.default.useMemo(() => {
            if (!z) {
              let e = v(s);
              return { href: e, as: b ? v(b) : e };
            }
            let [e, t] = (0, i.resolveHref)(z, s, !0);
            return { href: e, as: b ? (0, i.resolveHref)(z, b) : t || e };
          }, [z, s, b]),
          U = o.default.useRef(D),
          W = o.default.useRef(F);
        E && (r = o.default.Children.only(n));
        let Y = E ? r && "object" == typeof r && r.ref : t,
          [q, G, B] = (0, p.useIntersection)({ rootMargin: "200px" }),
          $ = o.default.useCallback(
            (e) => {
              (W.current !== F || U.current !== D) &&
                (B(), (W.current = F), (U.current = D)),
                q(e),
                Y &&
                  ("function" == typeof Y
                    ? Y(e)
                    : "object" == typeof Y && (Y.current = e));
            },
            [F, Y, D, B, q],
          );
        o.default.useEffect(() => {
          R && G && T && y(R, D, F, { locale: S }, { kind: L }, I);
        }, [F, D, G, S, T, null == z ? void 0 : z.locale, R, I, L]);
        let H = {
          ref: $,
          onClick(e) {
            E || "function" != typeof A || A(e),
              E &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              R &&
                !e.defaultPrevented &&
                (function (e, t, n, r, a, i, s, c, u) {
                  let { nodeName: f } = e.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!u && !(0, l.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let d = () => {
                    let e = null == s || s;
                    "beforePopState" in t
                      ? t[a ? "replace" : "push"](n, r, {
                          shallow: i,
                          locale: c,
                          scroll: e,
                        })
                      : t[a ? "replace" : "push"](r || n, { scroll: e });
                  };
                  u ? o.default.startTransition(d) : d();
                })(e, R, D, F, O, P, j, S, I);
          },
          onMouseEnter(e) {
            E || "function" != typeof C || C(e),
              E &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              R &&
                (T || !I) &&
                y(
                  R,
                  D,
                  F,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: L },
                  I,
                );
          },
          onTouchStart: function (e) {
            E || "function" != typeof _ || _(e),
              E &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              R &&
                (T || !I) &&
                y(
                  R,
                  D,
                  F,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: L },
                  I,
                );
          },
        };
        if ((0, c.isAbsoluteUrl)(F)) H.href = F;
        else if (!E || k || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== S ? S : null == z ? void 0 : z.locale,
            t =
              (null == z ? void 0 : z.isLocaleDomain) &&
              (0, m.getDomainLocale)(
                F,
                e,
                null == z ? void 0 : z.locales,
                null == z ? void 0 : z.domainLocales,
              );
          H.href =
            t ||
            (0, h.addBasePath)(
              (0, u.addLocale)(F, e, null == z ? void 0 : z.defaultLocale),
            );
        }
        return E
          ? o.default.cloneElement(r, H)
          : (0, a.jsx)("a", { ...N, ...H, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    49189: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    98016: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let r = n(18323),
        a = n(41142),
        o = n(45519),
        i = n(43461),
        l = n(18157),
        s = n(18029),
        c = n(59195),
        u = n(80020);
      function f(e, t, n) {
        let f;
        let d = "string" == typeof t ? t : (0, a.formatWithValidation)(t),
          p = d.match(/^[a-zA-Z]{1,}:\/\//),
          m = p ? d.slice(p[0].length) : d;
        if ((m.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              d +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let t = (0, i.normalizeRepeatedSlashes)(m);
          d = (p ? p[0] : "") + t;
        }
        if (!(0, s.isLocalURL)(d)) return n ? [d] : d;
        try {
          f = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          f = new URL("/", "http://n");
        }
        try {
          let e = new URL(d, f);
          e.pathname = (0, l.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, c.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: i, params: l } = (0, u.interpolateAs)(
                e.pathname,
                e.pathname,
                n,
              );
            i &&
              (t = (0, a.formatWithValidation)({
                pathname: i,
                hash: e.hash,
                query: (0, o.omit)(n, l),
              }));
          }
          let i =
            e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [i, t || i] : i;
        } catch (e) {
          return n ? [d] : d;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    53106: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(2265),
        a = n(49189),
        o = "function" == typeof IntersectionObserver,
        i = new Map(),
        l = [];
      function s(e) {
        let { rootRef: t, rootMargin: n, disabled: s } = e,
          c = s || !o,
          [u, f] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (o) {
              if (c || u) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: a,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = l.find(
                        (e) => e.root === n.root && e.margin === n.margin,
                      );
                    if (r && (t = i.get(r))) return t;
                    let a = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = a.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: a,
                      }),
                      l.push(n),
                      i.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    o.set(e, t),
                    a.observe(e),
                    function () {
                      if ((o.delete(e), a.unobserve(e), 0 === o.size)) {
                        a.disconnect(), i.delete(r);
                        let e = l.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin,
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!u) {
              let e = (0, a.requestIdleCallback)(() => f(!0));
              return () => (0, a.cancelIdleCallback)(e);
            }
          }, [c, n, t, u, d.current]),
          [
            p,
            u,
            (0, r.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    82901: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(99920)._(n(2265)).default.createContext({});
    },
    40687: function (e, t) {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    81943: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function a(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    80497: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        n(72301);
      let r = n(51564),
        a = n(7103);
      function o(e) {
        return void 0 !== e.default;
      }
      function i(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : "string" == typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : NaN;
      }
      function l(e, t) {
        var n;
        let l,
          s,
          c,
          {
            src: u,
            sizes: f,
            unoptimized: d = !1,
            priority: p = !1,
            loading: m,
            className: h,
            quality: g,
            width: b,
            height: y,
            fill: v = !1,
            style: x,
            overrideSrc: w,
            onLoad: k,
            onLoadingComplete: O,
            placeholder: P = "empty",
            blurDataURL: j,
            fetchPriority: S,
            layout: A,
            objectFit: C,
            objectPosition: _,
            lazyBoundary: E,
            lazyRoot: N,
            ...z
          } = e,
          { imgConf: M, showAltText: R, blurComplete: I, defaultLoader: T } = t,
          L = M || a.imageConfigDefault;
        if ("allSizes" in L) l = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t);
          l = { ...L, allSizes: e, deviceSizes: t };
        }
        if (void 0 === T)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          );
        let D = z.loader || T;
        delete z.loader, delete z.srcSet;
        let F = "__next_img_default" in D;
        if (F) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                u +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
            );
        } else {
          let e = D;
          D = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (A) {
          "fill" === A && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[A];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[A];
          t && !f && (f = t);
        }
        let U = "",
          W = i(b),
          Y = i(y);
        if ("object" == typeof (n = u) && (o(n) || void 0 !== n.src)) {
          let e = o(u) ? u.default : u;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e),
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e),
            );
          if (
            ((s = e.blurWidth),
            (c = e.blurHeight),
            (j = j || e.blurDataURL),
            (U = e.src),
            !v)
          ) {
            if (W || Y) {
              if (W && !Y) {
                let t = W / e.width;
                Y = Math.round(e.height * t);
              } else if (!W && Y) {
                let t = Y / e.height;
                W = Math.round(e.width * t);
              }
            } else (W = e.width), (Y = e.height);
          }
        }
        let q = !p && ("lazy" === m || void 0 === m);
        (!(u = "string" == typeof u ? u : U) ||
          u.startsWith("data:") ||
          u.startsWith("blob:")) &&
          ((d = !0), (q = !1)),
          l.unoptimized && (d = !0),
          F && u.endsWith(".svg") && !l.dangerouslyAllowSVG && (d = !0),
          p && (S = "high");
        let G = i(g),
          B = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: C,
                  objectPosition: _,
                }
              : {},
            R ? {} : { color: "transparent" },
            x,
          ),
          $ =
            I || "empty" === P
              ? null
              : "blur" === P
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, r.getImageBlurSvg)({
                    widthInt: W,
                    heightInt: Y,
                    blurWidth: s,
                    blurHeight: c,
                    blurDataURL: j || "",
                    objectFit: B.objectFit,
                  }) +
                  '")'
                : 'url("' + P + '")',
          H = $
            ? {
                backgroundSize: B.objectFit || "cover",
                backgroundPosition: B.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: $,
              }
            : {},
          V = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: a,
              quality: o,
              sizes: i,
              loader: l,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: c } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: a } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: a.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: a, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => a.find((t) => t >= e) || a[a.length - 1],
                          ),
                        ),
                      ],
                      kind: "x",
                    };
              })(t, a, i),
              u = s.length - 1;
            return {
              sizes: i || "w" !== c ? i : "100vw",
              srcSet: s
                .map(
                  (e, r) =>
                    l({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === c ? e : r + 1) +
                    c,
                )
                .join(", "),
              src: l({ config: t, src: n, quality: o, width: s[u] }),
            };
          })({
            config: l,
            src: u,
            unoptimized: d,
            width: W,
            quality: G,
            sizes: f,
            loader: D,
          });
        return {
          props: {
            ...z,
            loading: q ? "lazy" : m,
            fetchPriority: S,
            width: W,
            height: Y,
            decoding: "async",
            className: h,
            style: { ...B, ...H },
            sizes: V.sizes,
            srcSet: V.srcSet,
            src: w || V.src,
          },
          meta: { unoptimized: d, priority: p, placeholder: P, fill: v },
        };
      }
    },
    28321: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return h;
          },
          defaultHead: function () {
            return f;
          },
        });
      let r = n(99920),
        a = n(41452),
        o = n(57437),
        i = a._(n(2265)),
        l = r._(n(65960)),
        s = n(82901),
        c = n(36590),
        u = n(40687);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              }),
            ),
          t
        );
      }
      function d(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === i.default.Fragment
            ? e.concat(
                i.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    "string" == typeof t || "number" == typeof t
                      ? e
                      : e.concat(t),
                  [],
                ),
              )
            : e.concat(t);
      }
      n(72301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(d, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (a) => {
                let o = !0,
                  i = !1;
                if (
                  a.key &&
                  "number" != typeof a.key &&
                  a.key.indexOf("$") > 0
                ) {
                  i = !0;
                  let t = a.key.slice(a.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (a.type) {
                  case "title":
                  case "base":
                    t.has(a.type) ? (o = !1) : t.add(a.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (a.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = a.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !i) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })(),
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                i.default.cloneElement(e, t)
              );
            }
            return i.default.cloneElement(e, { key: r });
          });
      }
      let h = function (e) {
        let { children: t } = e,
          n = (0, i.useContext)(s.AmpStateContext),
          r = (0, i.useContext)(c.HeadManagerContext);
        return (0, o.jsx)(l.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, u.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    51564: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: a,
            blurDataURL: o,
            objectFit: i,
          } = e,
          l = r ? 40 * r : t,
          s = a ? 40 * a : n,
          c = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === i
              ? "xMidYMid"
              : "cover" === i
                ? "xMidYMid slice"
                : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    93938: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(99920)._(n(2265)),
        a = n(7103),
        o = r.default.createContext(a.imageConfigDefault);
    },
    7103: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    55601: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return l;
          },
        });
      let r = n(99920),
        a = n(80497),
        o = n(38173),
        i = r._(n(21241));
      function l(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let s = o.Image;
    },
    21241: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: a } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (a || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    60291: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(99920)._(n(2265)).default.createContext(null);
    },
    41142: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return o;
          },
          formatWithValidation: function () {
            return l;
          },
          urlObjectKeys: function () {
            return i;
          },
        });
      let r = n(41452)._(n(18323)),
        a = /https?|ftp|gopher|file/;
      function o(e) {
        let { auth: t, hostname: n } = e,
          o = e.protocol || "",
          i = e.pathname || "",
          l = e.hash || "",
          s = e.query || "",
          c = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = t + e.host)
            : n &&
              ((c = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (c += ":" + e.port)),
          s &&
            "object" == typeof s &&
            (s = String(r.urlQueryToSearchParams(s)));
        let u = e.search || (s && "?" + s) || "";
        return (
          o && !o.endsWith(":") && (o += ":"),
          e.slashes || ((!o || a.test(o)) && !1 !== c)
            ? ((c = "//" + (c || "")), i && "/" !== i[0] && (i = "/" + i))
            : c || (c = ""),
          l && "#" !== l[0] && (l = "#" + l),
          u && "?" !== u[0] && (u = "?" + u),
          "" +
            o +
            c +
            (i = i.replace(/[?#]/g, encodeURIComponent)) +
            (u = u.replace("#", "%23")) +
            l
        );
      }
      let i = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function l(e) {
        return o(e);
      }
    },
    59195: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return a.isDynamicRoute;
          },
        });
      let r = n(49089),
        a = n(28083);
    },
    80020: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(41533),
        a = n(63169);
      function o(e, t, n) {
        let o = "",
          i = (0, a.getRouteRegex)(e),
          l = i.groups,
          s = (t !== e ? (0, r.getRouteMatcher)(i)(t) : "") || n;
        o = e;
        let c = Object.keys(l);
        return (
          c.every((e) => {
            let t = s[e] || "",
              { repeat: n, optional: r } = l[e],
              a = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (a = (t ? "" : "/") + "[" + a + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in s) &&
                (o =
                  o.replace(
                    a,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t),
                  ) || "/")
            );
          }) || (o = ""),
          { params: c, result: o }
        );
      }
    },
    28083: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(82269),
        a = /\/\[[^/]+?\](?=\/|$)/;
      function o(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e,
            ).interceptedRoute),
          a.test(e)
        );
      }
    },
    18029: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(43461),
        a = n(49404);
      function o(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, a.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    45519: function (e, t) {
      "use strict";
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    18323: function (e, t) {
      "use strict";
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
                ? t[n].push(e)
                : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function a(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, a] = e;
            Array.isArray(a)
              ? a.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(a));
          }),
          t
        );
      }
      function o(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return o;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return a;
          },
        });
    },
    41533: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(43461);
      function a(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let a = t.exec(e);
          if (!a) return !1;
          let o = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            i = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = a[t.pos];
              void 0 !== r &&
                (i[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => o(e))
                  : t.repeat
                    ? [o(r)]
                    : o(r));
            }),
            i
          );
        };
      }
    },
    63169: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return d;
          },
          getNamedRouteRegex: function () {
            return f;
          },
          getRouteRegex: function () {
            return s;
          },
        });
      let r = n(82269),
        a = n(81943),
        o = n(67741);
      function i(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function l(e) {
        let t = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          l = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && o) {
                let { key: e, optional: r, repeat: s } = i(o[1]);
                return (
                  (n[e] = { pos: l++, repeat: s, optional: r }),
                  "/" + (0, a.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!o) return "/" + (0, a.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = i(o[1]);
                return (
                  (n[e] = { pos: l++, repeat: t, optional: r }),
                  t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function s(e) {
        let { parameterizedRoute: t, groups: n } = l(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function c(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: o,
            keyPrefix: l,
          } = e,
          { key: s, optional: c, repeat: u } = i(r),
          f = s.replace(/\W/g, "");
        l && (f = "" + l + f);
        let d = !1;
        (0 === f.length || f.length > 30) && (d = !0),
          isNaN(parseInt(f.slice(0, 1))) || (d = !0),
          d && (f = n()),
          l ? (o[f] = "" + l + s) : (o[f] = s);
        let p = t ? (0, a.escapeStringRegexp)(t) : "";
        return u
          ? c
            ? "(?:/" + p + "(?<" + f + ">.+?))?"
            : "/" + p + "(?<" + f + ">.+?)"
          : "/" + p + "(?<" + f + ">[^/]+?)";
      }
      function u(e, t) {
        let n;
        let i = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          l =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          s = {};
        return {
          namedParameterizedRoute: i
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && o) {
                let [n] = e.split(o[0]);
                return c({
                  getSafeRouteKey: l,
                  interceptionMarker: n,
                  segment: o[1],
                  routeKeys: s,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return o
                ? c({
                    getSafeRouteKey: l,
                    segment: o[1],
                    routeKeys: s,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, a.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: s,
        };
      }
      function f(e, t) {
        let n = u(e, t);
        return {
          ...s(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function d(e, t) {
        let { parameterizedRoute: n } = l(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: a } = u(e, !1);
        return { namedRegex: "^" + a + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    49089: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/"),
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").',
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/"),
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/"),
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let a = e[0];
          if (a.startsWith("[") && a.endsWith("]")) {
            let n = a.slice(1, -1),
              i = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (i = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "').",
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "').",
              );
            function o(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "').",
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, "") === a.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (i) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                o(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (a = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                o(this.restSlugName, n), (this.restSlugName = n), (a = "[...]");
              }
            } else {
              if (i)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              o(this.slugName, n), (this.slugName = n), (a = "[]");
            }
          }
          this.children.has(a) || this.children.set(a, new n()),
            this.children.get(a)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    65960: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(2265),
        a = "undefined" == typeof window,
        o = a ? () => {} : r.useLayoutEffect,
        i = a ? () => {} : r.useEffect;
      function l(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function l() {
          if (t && t.mountedInstances) {
            let a = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean),
            );
            t.updateHead(n(a, e));
          }
        }
        if (a) {
          var s;
          null == t || null == (s = t.mountedInstances) || s.add(e.children),
            l();
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = l),
              () => {
                t && (t._pendingUpdate = l);
              }
            ),
          ),
          i(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    43461: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return m;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return b;
          },
          NormalizeError: function () {
            return h;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return s;
          },
          getLocationOrigin: function () {
            return i;
          },
          getURL: function () {
            return l;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          isResSent: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return f;
          },
          normalizeRepeatedSlashes: function () {
            return u;
          },
          stringifyError: function () {
            return v;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, a = Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          return n || ((n = !0), (t = e(...a))), t;
        };
      }
      let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (e) => a.test(e);
      function i() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function l() {
        let { href: e } = window.location,
          t = i();
        return e.substring(t.length);
      }
      function s(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function u(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function f(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await f(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && c(n)) return r;
        if (!r)
          throw Error(
            '"' +
              s(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.',
          );
        return r;
      }
      let d = "undefined" != typeof performance,
        p =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      class m extends Error {}
      class h extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class b extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    99949: function (e, t, n) {
      "use strict";
      var r = n(88877);
      function a() {}
      function o() {}
      (o.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, o, i) {
            if (i !== r) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    41448: function (e, t, n) {
      e.exports = n(99949)();
    },
    88877: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    37830: function (e, t) {
      "use strict";
      var n = Symbol.for("react.element"),
        r =
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
        a = Object.assign,
        o = {};
      function i(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = o),
          (this.updater = n || r);
      }
      function l() {}
      function s(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = o),
          (this.updater = n || r);
      }
      (i.prototype.isReactComponent = {}),
        (i.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (i.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (l.prototype = i.prototype);
      var c = (s.prototype = new l());
      (c.constructor = s), a(c, i.prototype), (c.isPureReactComponent = !0);
      var u = Object.prototype.hasOwnProperty,
        f = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, r) {
        var a,
          o = {},
          i = null,
          l = null;
        if (null != t)
          for (a in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            u.call(t, a) && !f.hasOwnProperty(a) && (o[a] = t[a]);
        var s = arguments.length - 2;
        if (1 === s) o.children = r;
        else if (1 < s) {
          for (var c = Array(s), d = 0; d < s; d++) c[d] = arguments[d + 2];
          o.children = c;
        }
        if (e && e.defaultProps)
          for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
        return { $$typeof: n, type: e, key: i, ref: l, props: o, _owner: null };
      };
    },
    4410: function (e, t, n) {
      "use strict";
      e.exports = n(37830);
    },
    13027: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return i;
        },
      });
      var r = n(44839);
      let a = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = r.W,
        i = (e, t) => (n) => {
          var r;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className,
            );
          let { variants: i, defaultVariants: l } = t,
            s = Object.keys(i).map((e) => {
              let t = null == n ? void 0 : n[e],
                r = null == l ? void 0 : l[e];
              if (null === t) return null;
              let o = a(t) || a(r);
              return i[e][o];
            }),
            c =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            s,
            null == t
              ? void 0
              : null === (r = t.compoundVariants) || void 0 === r
                ? void 0
                : r.reduce((e, t) => {
                    let { class: n, className: r, ...a } = t;
                    return Object.entries(a).every((e) => {
                      let [t, n] = e;
                      return Array.isArray(n)
                        ? n.includes({ ...l, ...c }[t])
                        : { ...l, ...c }[t] === n;
                    })
                      ? [...e, n, r]
                      : e;
                  }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className,
          );
        };
    },
    44839: function (e, t, n) {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                else for (n in t) t[n] && (a && (a += " "), (a += n));
              }
              return a;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.d(t, {
        W: function () {
          return r;
        },
      });
    },
    96164: function (e, t, n) {
      "use strict";
      n.d(t, {
        m6: function () {
          return K;
        },
      });
      let r = (e) => {
          let t = l(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } =
              e;
          return {
            getClassGroupId: (e) => {
              let n = e.split("-");
              return (
                "" === n[0] && 1 !== n.length && n.shift(), a(n, t) || i(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let a = n[e] || [];
              return t && r[e] ? [...a, ...r[e]] : a;
            },
          };
        },
        a = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let n = e[0],
            r = t.nextPart.get(n),
            o = r ? a(e.slice(1), r) : void 0;
          if (o) return o;
          if (0 === t.validators.length) return;
          let i = e.join("-");
          return t.validators.find(({ validator: e }) => e(i))?.classGroupId;
        },
        o = /^\[(.+)\]$/,
        i = (e) => {
          if (o.test(e)) {
            let t = o.exec(e)[1],
              n = t?.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
          }
        },
        l = (e) => {
          let { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
          return (
            f(Object.entries(e.classGroups), n).forEach(([e, n]) => {
              s(n, r, e, t);
            }),
            r
          );
        },
        s = (e, t, n, r) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : c(t, e)).classGroupId = n;
              return;
            }
            if ("function" == typeof e) {
              if (u(e)) {
                s(e(r), t, n, r);
                return;
              }
              t.validators.push({ validator: e, classGroupId: n });
              return;
            }
            Object.entries(e).forEach(([e, a]) => {
              s(a, c(t, e), n, r);
            });
          });
        },
        c = (e, t) => {
          let n = e;
          return (
            t.split("-").forEach((e) => {
              n.nextPart.has(e) ||
                n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (n = n.nextPart.get(e));
            }),
            n
          );
        },
        u = (e) => e.isThemeGetter,
        f = (e, t) =>
          t
            ? e.map(([e, n]) => [
                e,
                n.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                      ? Object.fromEntries(
                          Object.entries(e).map(([e, n]) => [t + e, n]),
                        )
                      : e,
                ),
              ])
            : e,
        d = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            n = new Map(),
            r = new Map(),
            a = (a, o) => {
              n.set(a, o), ++t > e && ((t = 0), (r = n), (n = new Map()));
            };
          return {
            get(e) {
              let t = n.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = r.get(e))
                  ? (a(e, t), t)
                  : void 0;
            },
            set(e, t) {
              n.has(e) ? n.set(e, t) : a(e, t);
            },
          };
        },
        p = (e) => {
          let { separator: t, experimentalParseClassName: n } = e,
            r = 1 === t.length,
            a = t[0],
            o = t.length,
            i = (e) => {
              let n;
              let i = [],
                l = 0,
                s = 0;
              for (let c = 0; c < e.length; c++) {
                let u = e[c];
                if (0 === l) {
                  if (u === a && (r || e.slice(c, c + o) === t)) {
                    i.push(e.slice(s, c)), (s = c + o);
                    continue;
                  }
                  if ("/" === u) {
                    n = c;
                    continue;
                  }
                }
                "[" === u ? l++ : "]" === u && l--;
              }
              let c = 0 === i.length ? e : e.substring(s),
                u = c.startsWith("!"),
                f = u ? c.substring(1) : c;
              return {
                modifiers: i,
                hasImportantModifier: u,
                baseClassName: f,
                maybePostfixModifierPosition: n && n > s ? n - s : void 0,
              };
            };
          return n ? (e) => n({ className: e, parseClassName: i }) : i;
        },
        m = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            n = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...n.sort(), e), (n = [])) : n.push(e);
            }),
            t.push(...n.sort()),
            t
          );
        },
        h = (e) => ({ cache: d(e.cacheSize), parseClassName: p(e), ...r(e) }),
        g = /\s+/,
        b = (e, t) => {
          let {
              parseClassName: n,
              getClassGroupId: r,
              getConflictingClassGroupIds: a,
            } = t,
            o = [],
            i = e.trim().split(g),
            l = "";
          for (let e = i.length - 1; e >= 0; e -= 1) {
            let t = i[e],
              {
                modifiers: s,
                hasImportantModifier: c,
                baseClassName: u,
                maybePostfixModifierPosition: f,
              } = n(t),
              d = !!f,
              p = r(d ? u.substring(0, f) : u);
            if (!p) {
              if (!d || !(p = r(u))) {
                l = t + (l.length > 0 ? " " + l : l);
                continue;
              }
              d = !1;
            }
            let h = m(s).join(":"),
              g = c ? h + "!" : h,
              b = g + p;
            if (o.includes(b)) continue;
            o.push(b);
            let y = a(p, d);
            for (let e = 0; e < y.length; ++e) {
              let t = y[e];
              o.push(g + t);
            }
            l = t + (l.length > 0 ? " " + l : l);
          }
          return l;
        };
      function y() {
        let e,
          t,
          n = 0,
          r = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) && (t = v(e)) && (r && (r += " "), (r += t));
        return r;
      }
      let v = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let n = "";
          for (let r = 0; r < e.length; r++)
            e[r] && (t = v(e[r])) && (n && (n += " "), (n += t));
          return n;
        },
        x = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        k = /^\d+\/\d+$/,
        O = new Set(["px", "full", "screen"]),
        P = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        j =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        A = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        C =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        _ = (e) => N(e) || O.has(e) || k.test(e),
        E = (e) => G(e, "length", B),
        N = (e) => !!e && !Number.isNaN(Number(e)),
        z = (e) => G(e, "number", N),
        M = (e) => !!e && Number.isInteger(Number(e)),
        R = (e) => e.endsWith("%") && N(e.slice(0, -1)),
        I = (e) => w.test(e),
        T = (e) => P.test(e),
        L = new Set(["length", "size", "percentage"]),
        D = (e) => G(e, L, $),
        F = (e) => G(e, "position", $),
        U = new Set(["image", "url"]),
        W = (e) => G(e, U, V),
        Y = (e) => G(e, "", H),
        q = () => !0,
        G = (e, t, n) => {
          let r = w.exec(e);
          return (
            !!r &&
            (r[1] ? ("string" == typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
          );
        },
        B = (e) => j.test(e) && !S.test(e),
        $ = () => !1,
        H = (e) => A.test(e),
        V = (e) => C.test(e),
        K = (function (e, ...t) {
          let n, r, a;
          let o = function (l) {
            return (
              (r = (n = h(t.reduce((e, t) => t(e), e()))).cache.get),
              (a = n.cache.set),
              (o = i),
              i(l)
            );
          };
          function i(e) {
            let t = r(e);
            if (t) return t;
            let o = b(e, n);
            return a(e, o), o;
          }
          return function () {
            return o(y.apply(null, arguments));
          };
        })(() => {
          let e = x("colors"),
            t = x("spacing"),
            n = x("blur"),
            r = x("brightness"),
            a = x("borderColor"),
            o = x("borderRadius"),
            i = x("borderSpacing"),
            l = x("borderWidth"),
            s = x("contrast"),
            c = x("grayscale"),
            u = x("hueRotate"),
            f = x("invert"),
            d = x("gap"),
            p = x("gradientColorStops"),
            m = x("gradientColorStopPositions"),
            h = x("inset"),
            g = x("margin"),
            b = x("opacity"),
            y = x("padding"),
            v = x("saturate"),
            w = x("scale"),
            k = x("sepia"),
            O = x("skew"),
            P = x("space"),
            j = x("translate"),
            S = () => ["auto", "contain", "none"],
            A = () => ["auto", "hidden", "clip", "visible", "scroll"],
            C = () => ["auto", I, t],
            L = () => [I, t],
            U = () => ["", _, E],
            G = () => ["auto", N, I],
            B = () => [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ],
            $ = () => ["solid", "dashed", "dotted", "double", "none"],
            H = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            V = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ],
            K = () => ["", "0", I],
            X = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            Q = () => [N, I];
          return {
            cacheSize: 500,
            separator: ":",
            theme: {
              colors: [q],
              spacing: [_, E],
              blur: ["none", "", T, I],
              brightness: Q(),
              borderColor: [e],
              borderRadius: ["none", "", "full", T, I],
              borderSpacing: L(),
              borderWidth: U(),
              contrast: Q(),
              grayscale: K(),
              hueRotate: Q(),
              invert: K(),
              gap: L(),
              gradientColorStops: [e],
              gradientColorStopPositions: [R, E],
              inset: C(),
              margin: C(),
              opacity: Q(),
              padding: L(),
              saturate: Q(),
              scale: Q(),
              sepia: K(),
              skew: Q(),
              space: L(),
              translate: L(),
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", "video", I] }],
              container: ["container"],
              columns: [{ columns: [T] }],
              "break-after": [{ "break-after": X() }],
              "break-before": [{ "break-before": X() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [...B(), I] }],
              overflow: [{ overflow: A() }],
              "overflow-x": [{ "overflow-x": A() }],
              "overflow-y": [{ "overflow-y": A() }],
              overscroll: [{ overscroll: S() }],
              "overscroll-x": [{ "overscroll-x": S() }],
              "overscroll-y": [{ "overscroll-y": S() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: [h] }],
              "inset-x": [{ "inset-x": [h] }],
              "inset-y": [{ "inset-y": [h] }],
              start: [{ start: [h] }],
              end: [{ end: [h] }],
              top: [{ top: [h] }],
              right: [{ right: [h] }],
              bottom: [{ bottom: [h] }],
              left: [{ left: [h] }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: ["auto", M, I] }],
              basis: [{ basis: C() }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
              flex: [{ flex: ["1", "auto", "initial", "none", I] }],
              grow: [{ grow: K() }],
              shrink: [{ shrink: K() }],
              order: [{ order: ["first", "last", "none", M, I] }],
              "grid-cols": [{ "grid-cols": [q] }],
              "col-start-end": [{ col: ["auto", { span: ["full", M, I] }, I] }],
              "col-start": [{ "col-start": G() }],
              "col-end": [{ "col-end": G() }],
              "grid-rows": [{ "grid-rows": [q] }],
              "row-start-end": [{ row: ["auto", { span: [M, I] }, I] }],
              "row-start": [{ "row-start": G() }],
              "row-end": [{ "row-end": G() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", I] }],
              "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", I] }],
              gap: [{ gap: [d] }],
              "gap-x": [{ "gap-x": [d] }],
              "gap-y": [{ "gap-y": [d] }],
              "justify-content": [{ justify: ["normal", ...V()] }],
              "justify-items": [
                { "justify-items": ["start", "end", "center", "stretch"] },
              ],
              "justify-self": [
                {
                  "justify-self": ["auto", "start", "end", "center", "stretch"],
                },
              ],
              "align-content": [{ content: ["normal", ...V(), "baseline"] }],
              "align-items": [
                { items: ["start", "end", "center", "baseline", "stretch"] },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    "start",
                    "end",
                    "center",
                    "stretch",
                    "baseline",
                  ],
                },
              ],
              "place-content": [{ "place-content": [...V(), "baseline"] }],
              "place-items": [
                {
                  "place-items": [
                    "start",
                    "end",
                    "center",
                    "baseline",
                    "stretch",
                  ],
                },
              ],
              "place-self": [
                { "place-self": ["auto", "start", "end", "center", "stretch"] },
              ],
              p: [{ p: [y] }],
              px: [{ px: [y] }],
              py: [{ py: [y] }],
              ps: [{ ps: [y] }],
              pe: [{ pe: [y] }],
              pt: [{ pt: [y] }],
              pr: [{ pr: [y] }],
              pb: [{ pb: [y] }],
              pl: [{ pl: [y] }],
              m: [{ m: [g] }],
              mx: [{ mx: [g] }],
              my: [{ my: [g] }],
              ms: [{ ms: [g] }],
              me: [{ me: [g] }],
              mt: [{ mt: [g] }],
              mr: [{ mr: [g] }],
              mb: [{ mb: [g] }],
              ml: [{ ml: [g] }],
              "space-x": [{ "space-x": [P] }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": [P] }],
              "space-y-reverse": ["space-y-reverse"],
              w: [
                { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t] },
              ],
              "min-w": [{ "min-w": [I, t, "min", "max", "fit"] }],
              "max-w": [
                {
                  "max-w": [
                    I,
                    t,
                    "none",
                    "full",
                    "min",
                    "max",
                    "fit",
                    "prose",
                    { screen: [T] },
                    T,
                  ],
                },
              ],
              h: [
                { h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "min-h": [
                { "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "max-h": [
                { "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              size: [{ size: [I, t, "auto", "min", "max", "fit"] }],
              "font-size": [{ text: ["base", T, E] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                {
                  font: [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                    z,
                  ],
                },
              ],
              "font-family": [{ font: [q] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
              tracking: [
                {
                  tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                    I,
                  ],
                },
              ],
              "line-clamp": [{ "line-clamp": ["none", N, z] }],
              leading: [
                {
                  leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                    _,
                    I,
                  ],
                },
              ],
              "list-image": [{ "list-image": ["none", I] }],
              "list-style-type": [{ list: ["none", "disc", "decimal", I] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "placeholder-color": [{ placeholder: [e] }],
              "placeholder-opacity": [{ "placeholder-opacity": [b] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "text-color": [{ text: [e] }],
              "text-opacity": [{ "text-opacity": [b] }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: ["auto", "from-font", _, E] },
              ],
              "underline-offset": [{ "underline-offset": ["auto", _, I] }],
              "text-decoration-color": [{ decoration: [e] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: L() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    I,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", I] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-opacity": [{ "bg-opacity": [b] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [...B(), F] }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "round", "space"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", D] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      "gradient-to": [
                        "t",
                        "tr",
                        "r",
                        "br",
                        "b",
                        "bl",
                        "l",
                        "tl",
                      ],
                    },
                    W,
                  ],
                },
              ],
              "bg-color": [{ bg: [e] }],
              "gradient-from-pos": [{ from: [m] }],
              "gradient-via-pos": [{ via: [m] }],
              "gradient-to-pos": [{ to: [m] }],
              "gradient-from": [{ from: [p] }],
              "gradient-via": [{ via: [p] }],
              "gradient-to": [{ to: [p] }],
              rounded: [{ rounded: [o] }],
              "rounded-s": [{ "rounded-s": [o] }],
              "rounded-e": [{ "rounded-e": [o] }],
              "rounded-t": [{ "rounded-t": [o] }],
              "rounded-r": [{ "rounded-r": [o] }],
              "rounded-b": [{ "rounded-b": [o] }],
              "rounded-l": [{ "rounded-l": [o] }],
              "rounded-ss": [{ "rounded-ss": [o] }],
              "rounded-se": [{ "rounded-se": [o] }],
              "rounded-ee": [{ "rounded-ee": [o] }],
              "rounded-es": [{ "rounded-es": [o] }],
              "rounded-tl": [{ "rounded-tl": [o] }],
              "rounded-tr": [{ "rounded-tr": [o] }],
              "rounded-br": [{ "rounded-br": [o] }],
              "rounded-bl": [{ "rounded-bl": [o] }],
              "border-w": [{ border: [l] }],
              "border-w-x": [{ "border-x": [l] }],
              "border-w-y": [{ "border-y": [l] }],
              "border-w-s": [{ "border-s": [l] }],
              "border-w-e": [{ "border-e": [l] }],
              "border-w-t": [{ "border-t": [l] }],
              "border-w-r": [{ "border-r": [l] }],
              "border-w-b": [{ "border-b": [l] }],
              "border-w-l": [{ "border-l": [l] }],
              "border-opacity": [{ "border-opacity": [b] }],
              "border-style": [{ border: [...$(), "hidden"] }],
              "divide-x": [{ "divide-x": [l] }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": [l] }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{ "divide-opacity": [b] }],
              "divide-style": [{ divide: $() }],
              "border-color": [{ border: [a] }],
              "border-color-x": [{ "border-x": [a] }],
              "border-color-y": [{ "border-y": [a] }],
              "border-color-t": [{ "border-t": [a] }],
              "border-color-r": [{ "border-r": [a] }],
              "border-color-b": [{ "border-b": [a] }],
              "border-color-l": [{ "border-l": [a] }],
              "divide-color": [{ divide: [a] }],
              "outline-style": [{ outline: ["", ...$()] }],
              "outline-offset": [{ "outline-offset": [_, I] }],
              "outline-w": [{ outline: [_, E] }],
              "outline-color": [{ outline: [e] }],
              "ring-w": [{ ring: U() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: [e] }],
              "ring-opacity": [{ "ring-opacity": [b] }],
              "ring-offset-w": [{ "ring-offset": [_, E] }],
              "ring-offset-color": [{ "ring-offset": [e] }],
              shadow: [{ shadow: ["", "inner", "none", T, Y] }],
              "shadow-color": [{ shadow: [q] }],
              opacity: [{ opacity: [b] }],
              "mix-blend": [
                { "mix-blend": [...H(), "plus-lighter", "plus-darker"] },
              ],
              "bg-blend": [{ "bg-blend": H() }],
              filter: [{ filter: ["", "none"] }],
              blur: [{ blur: [n] }],
              brightness: [{ brightness: [r] }],
              contrast: [{ contrast: [s] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", T, I] }],
              grayscale: [{ grayscale: [c] }],
              "hue-rotate": [{ "hue-rotate": [u] }],
              invert: [{ invert: [f] }],
              saturate: [{ saturate: [v] }],
              sepia: [{ sepia: [k] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
              "backdrop-blur": [{ "backdrop-blur": [n] }],
              "backdrop-brightness": [{ "backdrop-brightness": [r] }],
              "backdrop-contrast": [{ "backdrop-contrast": [s] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
              "backdrop-invert": [{ "backdrop-invert": [f] }],
              "backdrop-opacity": [{ "backdrop-opacity": [b] }],
              "backdrop-saturate": [{ "backdrop-saturate": [v] }],
              "backdrop-sepia": [{ "backdrop-sepia": [k] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": [i] }],
              "border-spacing-x": [{ "border-spacing-x": [i] }],
              "border-spacing-y": [{ "border-spacing-y": [i] }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "none",
                    "all",
                    "",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    I,
                  ],
                },
              ],
              duration: [{ duration: Q() }],
              ease: [{ ease: ["linear", "in", "out", "in-out", I] }],
              delay: [{ delay: Q() }],
              animate: [
                { animate: ["none", "spin", "ping", "pulse", "bounce", I] },
              ],
              transform: [{ transform: ["", "gpu", "none"] }],
              scale: [{ scale: [w] }],
              "scale-x": [{ "scale-x": [w] }],
              "scale-y": [{ "scale-y": [w] }],
              rotate: [{ rotate: [M, I] }],
              "translate-x": [{ "translate-x": [j] }],
              "translate-y": [{ "translate-y": [j] }],
              "skew-x": [{ "skew-x": [O] }],
              "skew-y": [{ "skew-y": [O] }],
              "transform-origin": [
                {
                  origin: [
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    I,
                  ],
                },
              ],
              accent: [{ accent: ["auto", e] }],
              appearance: [{ appearance: ["none", "auto"] }],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    I,
                  ],
                },
              ],
              "caret-color": [{ caret: [e] }],
              "pointer-events": [{ "pointer-events": ["none", "auto"] }],
              resize: [{ resize: ["none", "y", "x", ""] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": L() }],
              "scroll-mx": [{ "scroll-mx": L() }],
              "scroll-my": [{ "scroll-my": L() }],
              "scroll-ms": [{ "scroll-ms": L() }],
              "scroll-me": [{ "scroll-me": L() }],
              "scroll-mt": [{ "scroll-mt": L() }],
              "scroll-mr": [{ "scroll-mr": L() }],
              "scroll-mb": [{ "scroll-mb": L() }],
              "scroll-ml": [{ "scroll-ml": L() }],
              "scroll-p": [{ "scroll-p": L() }],
              "scroll-px": [{ "scroll-px": L() }],
              "scroll-py": [{ "scroll-py": L() }],
              "scroll-ps": [{ "scroll-ps": L() }],
              "scroll-pe": [{ "scroll-pe": L() }],
              "scroll-pt": [{ "scroll-pt": L() }],
              "scroll-pr": [{ "scroll-pr": L() }],
              "scroll-pb": [{ "scroll-pb": L() }],
              "scroll-pl": [{ "scroll-pl": L() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": ["auto", "scroll", "contents", "transform", I],
                },
              ],
              fill: [{ fill: [e, "none"] }],
              "stroke-w": [{ stroke: [_, E, z] }],
              stroke: [{ stroke: [e, "none"] }],
              sr: ["sr-only", "not-sr-only"],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
          };
        });
    },
  },
]);
