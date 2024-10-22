(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [84467], {
        175756: (_, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var t;
            (function(r) {
                r.SUB_FOOTER = "SUB_FOOTER", r.PILL = "PILL", r.HIDDEN = "HIDDEN"
            })(t || (t = {}));
            var s = t;
            a.default = s, _.exports = a.default
        },
        418891: _ => {
            _.exports = {
                "2a55ca78e8124468fd12f5631b591477": "Cookie banner",
                "5c9e9d0cbf6046deb40eaa0a5c1722df": "These cookies provide quantitative measures of website visitors. With the usage of these cookies we are able to count visits and traffic sources to improve the performance of our site.",
                "5d34f2ee7358fc231e5c0fb44bb6194d": "Close",
                "67db752e6310686617e98c22c85b3963": "Necessary",
                "6bf1c5ed97ddc6828e7cd5159df2a240": "Performance and Analytics",
                "74472054366bb6c5316e7afadad1093e": "These cookies are used by advertising companies to serve ads that are relevant to your interests.",
                "7f55fe8fa38cccf52495082b8a3b514e": "Required to enable core site functionality and to remember user preferences and choices, such as language preferences or customized settings.",
                ab24934bbb24336ecf14f4c74753cb74: "On",
                b14f9710c8c55c42330cec28b8e5a412: "Manage previously selected cookie options",
                bd5b0ea753d0acb71633f9924dd99e2e: "Advertising",
                c2796a555df59ff64708a37dca691b54: "Save Preferences",
                e1424f67804c73cbeabb38dc6ab1c5b4: "Manage Cookies",
                eed68b0b0145ca4107add1b0eba25227: "Off",
                f5d47dd8f48aea89af7ca857bb5999d2: "Cookie Preferences",
                f75292dded9e49e53481e31e94f738f7: "Always on"
            }
        },
        845076: (_, a) => {
            var t, s;
            /*!
              Copyright (c) 2018 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            (function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function f() {
                    for (var n = [], u = 0; u < arguments.length; u++) {
                        var l = arguments[u];
                        if (l) {
                            var p = typeof l;
                            if (p === "string" || p === "number") n.push(l);
                            else if (Array.isArray(l)) {
                                if (l.length) {
                                    var g = f.apply(null, l);
                                    g && n.push(g)
                                }
                            } else if (p === "object")
                                if (l.toString === Object.prototype.toString)
                                    for (var S in l) r.call(l, S) && l[S] && n.push(S);
                                else n.push(l.toString())
                        }
                    }
                    return n.join(" ")
                }
                _.exports ? (f.default = f, _.exports = f) : (t = [], s = function() {
                    return f
                }.apply(a, t), s !== void 0 && (_.exports = s))
            })()
        },
        418008: (_, a, t) => {
            var s = "Expected a function",
                r = NaN,
                f = "[object Symbol]",
                n = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                g = parseInt,
                S = typeof t.g == "object" && t.g && t.g.Object === Object && t.g,
                c = typeof self == "object" && self && self.Object === Object && self,
                E = S || c || Function("return this")(),
                P = Object.prototype,
                B = P.toString,
                b = Math.max,
                A = Math.min,
                I = function() {
                    return E.Date.now()
                };

            function F(d, C, T) {
                var L, N, G, D, e, o, i = 0,
                    v = !1,
                    O = !1,
                    h = !0;
                if (typeof d != "function") throw new TypeError(s);
                C = x(C) || 0, R(T) && (v = !!T.leading, O = "maxWait" in T, G = O ? b(x(T.maxWait) || 0, C) : G, h = "trailing" in T ? !!T.trailing : h);

                function k(y) {
                    var W = L,
                        H = N;
                    return L = N = void 0, i = y, D = d.apply(H, W), D
                }

                function U(y) {
                    return i = y, e = setTimeout(j, C), v ? k(y) : D
                }

                function K(y) {
                    var W = y - o,
                        H = y - i,
                        X = C - W;
                    return O ? A(X, G - H) : X
                }

                function M(y) {
                    var W = y - o,
                        H = y - i;
                    return o === void 0 || W >= C || W < 0 || O && H >= G
                }

                function j() {
                    var y = I();
                    if (M(y)) return Q(y);
                    e = setTimeout(j, K(y))
                }

                function Q(y) {
                    return e = void 0, h && L ? k(y) : (L = N = void 0, D)
                }

                function Z() {
                    e !== void 0 && clearTimeout(e), i = 0, L = o = N = e = void 0
                }

                function q() {
                    return e === void 0 ? D : Q(I())
                }

                function V() {
                    var y = I(),
                        W = M(y);
                    if (L = arguments, N = this, o = y, W) {
                        if (e === void 0) return U(o);
                        if (O) return e = setTimeout(j, C), k(o)
                    }
                    return e === void 0 && (e = setTimeout(j, C)), D
                }
                return V.cancel = Z, V.flush = q, V
            }

            function R(d) {
                var C = typeof d;
                return !!d && (C == "object" || C == "function")
            }

            function m(d) {
                return !!d && typeof d == "object"
            }

            function Y(d) {
                return typeof d == "symbol" || m(d) && B.call(d) == f
            }

            function x(d) {
                if (typeof d == "number") return d;
                if (Y(d)) return r;
                if (R(d)) {
                    var C = typeof d.valueOf == "function" ? d.valueOf() : d;
                    d = R(C) ? C + "" : C
                }
                if (typeof d != "string") return d === 0 ? d : +d;
                d = d.replace(n, "");
                var T = l.test(d);
                return T || p.test(d) ? g(d.slice(2), T ? 2 : 8) : u.test(d) ? r : +d
            }
            _.exports = F
        },
        923857: _ => {
            _.exports = {}
        },
        120176: (_, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });

            function t(n, u) {
                for (var l in u) Object.defineProperty(n, l, {
                    enumerable: !0,
                    get: u[l]
                })
            }
            t(a, {
                default: function() {
                    return f
                },
                isDesignPanelRemoved: function() {
                    return r
                }
            });
            var s = () => !0,
                r = () => s(),
                f = s
        },
        444947: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });

            function s(m, Y) {
                for (var x in Y) Object.defineProperty(m, x, {
                    enumerable: !0,
                    get: Y[x]
                })
            }
            s(a, {
                SITE_STYLES_ACCESSORIES: function() {
                    return g
                },
                SITE_STYLES_ANIMATIONS: function() {
                    return P
                },
                SITE_STYLES_BUTTONS: function() {
                    return l
                },
                SITE_STYLES_COLORS: function() {
                    return b
                },
                SITE_STYLES_COOKIE_BANNER: function() {
                    return B
                },
                SITE_STYLES_FONTS: function() {
                    return u
                },
                SITE_STYLES_FORMS: function() {
                    return F
                },
                SITE_STYLES_IMAGE_BLOCKS: function() {
                    return c
                },
                SITE_STYLES_PALETTE_EDITOR: function() {
                    return A
                },
                SITE_STYLES_PRODUCT_ITEMS: function() {
                    return p
                },
                SITE_STYLES_ROOT: function() {
                    return n
                },
                SITE_STYLES_SITE_SPACING: function() {
                    return E
                },
                SITE_STYLES_THEME_EDITOR: function() {
                    return I
                },
                default: function() {
                    return R
                }
            });
            var r = f(t(851198));

            function f(m) {
                return m && m.__esModule ? m : {
                    default: m
                }
            }
            var n = "".concat(r.default.forSiteStyles(), "/site-styles"),
                u = "".concat(n, "/fonts"),
                l = "".concat(n, "/buttons"),
                p = "".concat(n, "/product-items"),
                g = "".concat(n, "/accessories"),
                S = g,
                c = "".concat(S, "/image-blocks"),
                E = "".concat(S, "/site-spacing"),
                P = "".concat(S, "/animations"),
                B = "".concat(g, "/cookie-banner"),
                b = "".concat(n, "/colors"),
                A = "".concat(b, "/palette-editor"),
                I = "".concat(b, "/theme-editor"),
                F = "".concat(n, "/forms"),
                R = {
                    ROOT: n,
                    FONTS: u,
                    COLORS: b,
                    PALETTE_EDITOR: A,
                    THEME_EDITOR: I,
                    BUTTONS: l,
                    ACCESSORIES: g,
                    IMAGE_BLOCKS: c,
                    PRODUCT_ITEMS: p,
                    SITE_SPACING: E,
                    ANIMATIONS: P,
                    FORMS: F,
                    COOKIE_BANNER: B
                }
        },
        116444: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });

            function s(e, o) {
                for (var i in o) Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: o[i]
                })
            }
            s(a, {
                areCookiesSet: function() {
                    return N
                },
                default: function() {
                    return D
                }
            }), t(933751);
            var r = I(t(174161)),
                f = t(233284),
                n = b(t(687048)),
                u = b(t(602775)),
                l = b(t(994336)),
                p = b(t(704562)),
                g = t(467738),
                S = b(t(965183)),
                c = t(903585);

            function E(e, o) {
                (o == null || o > e.length) && (o = e.length);
                for (var i = 0, v = new Array(o); i < o; i++) v[i] = e[i];
                return v
            }

            function P(e) {
                if (Array.isArray(e)) return e
            }

            function B(e, o, i) {
                return o in e ? Object.defineProperty(e, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = i, e
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function A(e) {
                if (typeof WeakMap != "function") return null;
                var o = new WeakMap,
                    i = new WeakMap;
                return (A = function(v) {
                    return v ? i : o
                })(e)
            }

            function I(e, o) {
                if (!o && e && e.__esModule) return e;
                if (e === null || typeof e != "object" && typeof e != "function") return {
                    default: e
                };
                var i = A(o);
                if (i && i.has(e)) return i.get(e);
                var v = {
                        __proto__: null
                    },
                    O = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var h in e)
                    if (h !== "default" && Object.prototype.hasOwnProperty.call(e, h)) {
                        var k = O ? Object.getOwnPropertyDescriptor(e, h) : null;
                        k && (k.get || k.set) ? Object.defineProperty(v, h, k) : v[h] = e[h]
                    }
                return v.default = e, i && i.set(e, v), v
            }

            function F(e, o) {
                var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                if (i != null) {
                    var v = [],
                        O = !0,
                        h = !1,
                        k, U;
                    try {
                        for (i = i.call(e); !(O = (k = i.next()).done) && (v.push(k.value), !(o && v.length === o)); O = !0);
                    } catch (K) {
                        h = !0, U = K
                    } finally {
                        try {
                            !O && i.return != null && i.return()
                        } finally {
                            if (h) throw U
                        }
                    }
                    return v
                }
            }

            function R() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function m(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var i = arguments[o] != null ? arguments[o] : {},
                        v = Object.keys(i);
                    typeof Object.getOwnPropertySymbols == "function" && (v = v.concat(Object.getOwnPropertySymbols(i).filter(function(O) {
                        return Object.getOwnPropertyDescriptor(i, O).enumerable
                    }))), v.forEach(function(O) {
                        B(e, O, i[O])
                    })
                }
                return e
            }

            function Y(e, o) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var v = Object.getOwnPropertySymbols(e);
                    o && (v = v.filter(function(O) {
                        return Object.getOwnPropertyDescriptor(e, O).enumerable
                    })), i.push.apply(i, v)
                }
                return i
            }

            function x(e, o) {
                return o = o != null ? o : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Y(Object(o)).forEach(function(i) {
                    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(o, i))
                }), e
            }

            function d(e, o) {
                return P(e) || F(e, o) || C(e, o) || R()
            }

            function C(e, o) {
                if (e) {
                    if (typeof e == "string") return E(e, o);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(i);
                    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return E(e, o)
                }
            }
            var T = {
                    performance: "ss_performanceCookiesAllowed",
                    marketing: "ss_marketingCookiesAllowed"
                },
                L = [T.performance, T.marketing],
                N = () => L.some(e => !!l.default.get(e)),
                G = () => {
                    (0, n.default)(window.onCookieBannerInteraction) && window.onCookieBannerInteraction()
                };

            function D(e) {
                var o = e.cookiesControlledOutsideOfBanner,
                    i = d((0, r.useState)(!!e.forceShowCookieBanner), 2),
                    v = i[0],
                    O = i[1],
                    h = d((0, r.useState)(N()), 2),
                    k = h[0],
                    U = h[1],
                    K = d((0, r.useState)(!1), 2),
                    M = K[0],
                    j = K[1],
                    Q = (0, r.useRef)(null),
                    Z = (0, S.default)(Q, M),
                    q = new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30),
                    V = {
                        path: "/",
                        expires: q.toUTCString()
                    },
                    y = (e.hasDeclineCookies || e.hasManageCookies) && e.savedPreferencesLayout !== "HIDDEN";
                (0, r.useEffect)(() => {
                    var w = ee => {
                        O(ee.detail.forceShow)
                    };
                    return document.addEventListener(g.COOKIE_BANNER_FORCE_SHOW_EVENT, w), () => {
                        document.removeEventListener(g.COOKIE_BANNER_FORCE_SHOW_EVENT, w)
                    }
                }, []), (0, r.useEffect)(() => {
                    o && (0, p.default)({
                        performanceGranted: l.default.get(T.performance) === "true",
                        marketingGranted: l.default.get(T.marketing) === "true"
                    })
                }, [o]);
                var W = () => {
                        v || (L.forEach(w => {
                            l.default.set(w, "true", V)
                        }), U(!0), (0, c.setThirdPartyConsentViaCookieBanner)({
                            performance: !0,
                            marketing: !0
                        }), G())
                    },
                    H = () => {
                        v || (L.forEach(w => {
                            l.default.set(w, "false", V)
                        }), U(!0), (0, c.setThirdPartyConsentViaCookieBanner)({
                            performance: !1,
                            marketing: !1
                        }), G())
                    },
                    X = w => {
                        w || (Z.current = !0), j(w)
                    },
                    te = w => {
                        if (!v) {
                            L.forEach(z => {
                                var J = w.includes(z) ? "true" : "false";
                                l.default.set(z, J, V)
                            }), U(!0), j(!1);
                            var ee = Object.keys(T).reduce((z, J) => (z[J] = w.includes(T[J]), z), {});
                            (0, c.setThirdPartyConsentViaCookieBanner)(ee), G()
                        }
                    },
                    ae = () => {
                        j(!0)
                    },
                    ie = x(m({}, e), {
                        onAccept: W,
                        onDecline: H,
                        onSaveManageSettings: te,
                        toggleManageOverlay: X,
                        showManageOverlay: M,
                        cookieNames: T,
                        manageButtonRef: Q
                    }),
                    ne = "cookie-banner-mount-point",
                    $ = document.querySelector(".".concat(ne));
                if (!$) {
                    $ = document.createElement("div"), $.classList.add(ne);
                    var oe = document.body.querySelector("#siteWrapper") || document.body;
                    oe.prepend($)
                }
                var se = e.bannerPosition === "TOP" && document.body.querySelector(".sqs-announcement-bar-dropzone") || $,
                    re = r.default.createElement(u.default.ManageOverlay, {
                        theme: e.theme,
                        cookieNames: T,
                        onClose: () => {
                            X(!1)
                        },
                        onSave: te
                    });
                return k && !v ? y ? r.default.createElement(r.default.Fragment, null, r.default.createElement(u.default.ManageBar, {
                    savedPreferencesLayout: e.savedPreferencesLayout,
                    savedPreferencesText: e.savedPreferencesText,
                    theme: e.theme,
                    manageButtonRef: Q,
                    openOverlay: ae
                }), M && re) : null : r.default.createElement(r.default.Fragment, null, (0, f.createPortal)(r.default.createElement(u.default.Banner, ie), se), M && re)
            }
        },
        513088: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });

            function s(b, A) {
                for (var I in A) Object.defineProperty(b, I, {
                    enumerable: !0,
                    get: A[I]
                })
            }
            s(a, {
                default: function() {
                    return B
                },
                renderCookieBannerManager: function() {
                    return P
                }
            }), t(933751);
            var r = S(t(174161)),
                f = t(233284),
                n = S(t(763554)),
                u = S(t(987008)),
                l = S(t(317936)),
                p = t(444947),
                g = S(t(116444));
            t(923857);

            function S(b) {
                return b && b.__esModule ? b : {
                    default: b
                }
            }
            var c = "/config".concat(p.SITE_STYLES_COOKIE_BANNER),
                E = "cookie-banner-manager",
                P = function() {
                    var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        A, I, F = (A = window.Static) === null || A === void 0 ? void 0 : A.SQUARESPACE_CONTEXT,
                        R = F || {},
                        m = R.cookieSettings,
                        Y = R.pageType,
                        x = m && l.default.shouldShowCookieBanner({
                            settings: m,
                            urlSearch: window.location.search
                        });
                    if (x) {
                        var d = m.cookieBannerCtaText,
                            C = m.cookieBannerText,
                            T = m.cookieBannerOptOutCtaText,
                            L = m.cookieBannerHasOptOut,
                            N = m.cookieBannerHasManageCookies,
                            G = m.cookieBannerManageCookiesLabel,
                            D = m.cookieBannerSavedPreferencesLayout,
                            e = m.cookieBannerSavedPreferencesText,
                            o = m.cookieBannerTheme,
                            i = m.cookieBannerThemeName,
                            v = m.isRestrictiveCookiePolicyEnabled,
                            O = b.theme || (u.default.isSevenOne() ? i : "legacy-".concat(o.toLowerCase())),
                            h = b.bannerPosition || m.cookieBannerPosition,
                            k = ((I = window.top) === null || I === void 0 ? void 0 : I.location.pathname) === c,
                            U = Y === n.default.SPLASH_PAGE,
                            K = {
                                acceptCookiesLabel: d,
                                bannerPosition: h,
                                bannerText: C,
                                cookiesControlledOutsideOfBanner: v,
                                declineCookiesLabel: T,
                                forceShowCookieBanner: k,
                                hasDeclineCookies: L,
                                hasManageCookies: N,
                                manageCookiesLabel: G,
                                savedPreferencesLayout: D,
                                savedPreferencesText: e,
                                theme: O
                            },
                            M = document.querySelector(".".concat(E));
                        if (!M) {
                            M = document.createElement("div"), M.classList.add(E), U && M.classList.add("cover-page");
                            var j = document.body.querySelector("#siteWrapper") || document.body;
                            j.appendChild(M)
                        }(0, f.render)(r.default.createElement(g.default, K), M)
                    }
                },
                B = P
        },
        965183: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var s = t(174161);

            function r(n, u) {
                var l = (0, s.useRef)(!1);
                return (0, s.useEffect)(() => {
                    !u && l.current && n.current && n.current.focus(), l.current = !1
                }, [n, u]), l
            }
            var f = r
        },
        903585: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "setThirdPartyConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var s = t(832974),
                r = t(7540),
                f = n => {
                    var u = n.marketing,
                        l = n.performance;
                    (0, s.setFacebookPixelConsentViaCookieBanner)(u), (0, r.setGoogleAnalyticsConsentViaCookieBanner)(l)
                }
        },
        611220: (_, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function() {
                    return t
                }
            });
            var t = {
                CAMPAIGNS: "campaigns",
                COMPED: "comped",
                DOMAIN: "domain",
                GETTY_IMAGE: "getty-image",
                GOOGLE_APPS: "googleapps",
                IAP: "resold",
                MEMBER_AREAS: "member-areas",
                DIGITAL_PRODUCTS: "digital-products",
                SCHEDULING: "scheduling",
                V5_LINKED: "v5-linked",
                WEBSITE: "website",
                SQUARESPACE: "squarespace"
            }
        },
        139442: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "isManageMultipleGoogleWorkspaceEnabled", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var s = t(572991),
                r;
            (function(n) {
                n.MANAGE_MULTIPLE_GOOGLE_WORKSPACE = "manage-multiple-google-workspace"
            })(r || (r = {}));
            var f = () => {
                var n, u;
                return !!(!(s.getStatsigClient === null || s.getStatsigClient === void 0 || (n = (u = (0, s.getStatsigClient)()).checkGate) === null || n === void 0) && n.call(u, "manage-multiple-google-workspace"))
            }
        },
        933751: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var s = f(t(411962)),
                r = t(218673);

            function f(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }(0, r.setI18nInstance)(s.default)
        },
        832974: (_, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "setFacebookPixelConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return t
                }
            });
            var t = s => {
                window.fbq && window.facebookPixelRequiresConsentUpdates && window.fbq("consent", s ? "grant" : "revoke")
            }
        },
        7540: (_, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "setGoogleAnalyticsConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return t
                }
            });
            var t = s => {
                window.gtag && window.googleAnalyticsRequiresConsentUpdates && (s ? window.gtag("consent", "update", {
                    analytics_storage: "granted"
                }) : window.gtag("consent", "update", {
                    analytics_storage: "denied"
                }))
            }
        },
        704562: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });

            function s(g, S) {
                for (var c in S) Object.defineProperty(g, c, {
                    enumerable: !0,
                    get: S[c]
                })
            }
            s(a, {
                LEGACY_SQUARESPACE_COOKIES_TO_EXPIRE: function() {
                    return l
                },
                default: function() {
                    return p
                }
            });
            var r = f(t(994336));

            function f(g) {
                return g && g.__esModule ? g : {
                    default: g
                }
            }
            var n = ["SS_MID", "SS_MATTR", "SS_lastvisit", "user_segment"],
                u = ["ss_cid", "ss_cpvisit", "ss_cvisit", "ss_cvr", "ss_cvt"],
                l = ["ss_cookieAllowed"],
                p = g => {
                    var S = g.performanceGranted,
                        c = g.marketingGranted;
                    if (!(S && c)) {
                        var E = {
                                expires: new Date(0).toUTCString()
                            },
                            P = l;
                        S || (P = P.concat(u)), c || (P = P.concat(n)), P.forEach(B => {
                            r.default.set(B, "", E)
                        })
                    }
                }
        },
        851198: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function() {
                    return S
                }
            });
            var s = g(t(611173)),
                r = t(424464),
                f = g(t(611220)),
                n = t(787909),
                u = g(t(120176)),
                l = t(433829),
                p = t(139442);

            function g(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            var S = {
                forDomains() {
                    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, n.getWebsiteType)();
                    return c === s.default.PARKING_PAGE && !r.multiProductConfig.isStandaloneScheduling() ? "/" : "/settings/domains-email/domains/"
                },
                forDomainsAndEmail() {
                    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, n.getWebsiteType)();
                    return c === s.default.PARKING_PAGE && !r.multiProductConfig.isStandaloneScheduling() ? "/" : "/settings/domains-email/"
                },
                forDomainsFullWidth() {
                    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, n.getWebsiteType)();
                    return c === s.default.PARKING_PAGE && !r.multiProductConfig.isStandaloneScheduling() ? "/domains/" : "/settings/domains-email/domains/"
                },
                forDomainsInAccountService() {
                    return "/domains/"
                },
                forBilling() {
                    return r.multiProductConfig.isStandaloneScheduling() && !(0, l.isStandaloneSchedulingStaticNavEnabledByLabsOrStatsig)() ? "/billing/" : "/settings/billing/"
                },
                forBillingSubscriptionsList() {
                    var c = this.forBilling();
                    return "".concat(c, "subscriptions/")
                },
                forBillingSubscription(c) {
                    var E = this.forBillingSubscriptionsList();
                    return "".concat(E).concat(c)
                },
                forAccountMenu() {
                    return "/settings/billing/"
                },
                forSettingsOrConfig() {
                    return "/settings/"
                },
                forGoogleWorkspace() {
                    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, n.getWebsiteType)();
                    return c === s.default.PARKING_PAGE ? "/settings/email/google-workspace" : "/settings/domains-email/google-workspace"
                },
                forGSuiteBillingAndAccountingLink() {
                    return "".concat(this.forBilling(), "subscriptions/").concat(f.default.GOOGLE_APPS)
                },
                forSwitchProducts() {
                    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, n.getWebsiteType)();
                    return c === s.default.PARKING_PAGE ? "/upgrade/" : "/settings/billing/switch-products/"
                },
                forMemberAreasCheckout() {
                    return "".concat(this.forBilling(), "digital-products-checkout")
                },
                forWebsiteCheckout() {
                    return "".concat(this.forBilling(), "upgrade")
                },
                forChangeWebsitePlan() {
                    return "/settings/billing/subscriptions/website"
                },
                forGSuiteIntitialPurchase() {
                    return "/settings/gsuite-checkout"
                },
                forGSuiteAddUser(c) {
                    return (0, p.isManageMultipleGoogleWorkspaceEnabled)() && c ? "/settings/gsuite-add-user/".concat(c) : "/settings/gsuite-add-user"
                },
                forGSuiteReactivation(c) {
                    return (0, p.isManageMultipleGoogleWorkspaceEnabled)() && c ? "/settings/gsuite-reactivation/".concat(c) : "/settings/gsuite-reactivation"
                },
                forPermissions() {
                    return "/settings/permissions-ownership/permissions"
                },
                forSiteStyles() {
                    return (0, u.default)() ? "" : "/design"
                },
                forDesignPanel() {
                    return "/design"
                },
                forPagesPanel() {
                    return "/pages"
                },
                forWebsiteTools() {
                    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                    return r.multiProductConfig.isStandaloneScheduling() ? "/settings" + c : this.forPagesPanel() + "/website-tools"
                },
                forMobilePathToPublish() {
                    return "/mobile-path-to-publish"
                }
            }
        },
        433829: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });

            function s(p, g) {
                for (var S in g) Object.defineProperty(p, S, {
                    enumerable: !0,
                    get: g[S]
                })
            }
            s(a, {
                isStandaloneSchedulingStaticNav: function() {
                    return l
                },
                isStandaloneSchedulingStaticNavEnabledByLabsOrStatsig: function() {
                    return u
                }
            });
            var r = t(424464),
                f = t(572991),
                n = "standalone_scheduling_with_static_nav",
                u = () => r.activationFunnelFeatureFlags.isStandaloneSchedulingStaticNavEnabled() ? !0 : (0, f.isFeatureEnabled)(n),
                l = () => r.multiProductConfig.isStandaloneScheduling() ? u() : !1
        },
        787909: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });

            function s(E, P) {
                for (var B in P) Object.defineProperty(E, B, {
                    enumerable: !0,
                    get: P[B]
                })
            }
            s(a, {
                getWebsiteType: function() {
                    return u
                },
                isClassic: function() {
                    return g
                },
                isCommerce: function() {
                    return S
                },
                isCoverPage: function() {
                    return p
                },
                isEnterprise: function() {
                    return c
                },
                isParkingPage: function() {
                    return l
                }
            });
            var r = t(491644),
                f = n(t(611173));

            function n(E) {
                return E && E.__esModule ? E : {
                    default: E
                }
            }
            var u = () => {
                    var E;
                    return r.context === null || r.context === void 0 || (E = r.context.website) === null || E === void 0 ? void 0 : E.websiteType
                },
                l = () => u() === f.default.PARKING_PAGE,
                p = () => u() === f.default.COVER_PAGE,
                g = () => u() === f.default.CLASSIC,
                S = () => u() === f.default.COMMERCE,
                c = () => u() === f.default.ENTERPRISE
        },
        218673: (_, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.setI18nInstance = a.getI18nInstance = void 0, t(392338);
            var s = t(14924),
                r = "gdpr-cookie-banner";

            function f(p) {
                return t(573147)("./".concat(r, ".").concat(p, ".yaml"))
            }
            var n = (0, s.setupLibrary)(r, f),
                u = a.getI18nInstance = n.getI18nInstance,
                l = a.setI18nInstance = n.setI18nInstance
        },
        573147: (_, a, t) => {
            var s = {
                "./gdpr-cookie-banner.en-US.yaml": 418891,
                "src/main/webapp/frontend/website/gdpr-cookie-banner/sqs-i18n-translations/strings/gdpr-cookie-banner.en-US.yaml": 418891
            };

            function r(n) {
                var u = f(n);
                return t(u)
            }

            function f(n) {
                if (!t.o(s, n)) {
                    var u = new Error("Cannot find module '" + n + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                return s[n]
            }
            r.keys = function() {
                return Object.keys(s)
            }, r.resolve = f, _.exports = r, r.id = 573147
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/7359114ce41822a13e54f3573025e671/async-gdpr-cookie-banner-90f452409319bf3f784f-min.en-US.js.map