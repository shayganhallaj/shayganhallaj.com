(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [2775], {
        154229: i => {
            i.exports = {}
        },
        273549: i => {
            i.exports = {}
        },
        801563: i => {
            i.exports = {}
        },
        896766: i => {
            i.exports = {}
        },
        801579: (i, e, t) => {
            "use strict";
            var n = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = n(t(987195)),
                s = n(t(845076)),
                a = n(t(174161)),
                m = t(647871);
            t(154229);
            var c = f => {
                    var r = f.checked,
                        v = f.onChange,
                        A = f.inputProps,
                        d = () => {
                            v(!r)
                        };
                    return a.default.createElement("div", {
                        className: "toggle-wrapper"
                    }, a.default.createElement("p", {
                        "aria-hidden": "true"
                    }, r ? (0, m.t)("On", null, {
                        project: "gdpr-cookie-banner",
                        notes: "A toggle is on"
                    }) : (0, m.t)("Off", null, {
                        project: "gdpr-cookie-banner",
                        notes: "A toggle is off"
                    })), a.default.createElement("label", {
                        className: (0, s.default)("sqs-toggle", {
                            checked: r,
                            "sqs-toggle--on": r,
                            "sqs-toggle--off": !r
                        })
                    }, a.default.createElement("input", (0, u.default)({
                        type: "checkbox",
                        checked: r,
                        onChange: d
                    }, A))))
                },
                E = e.default = c;
            i.exports = e.default
        },
        721963: (i, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MANAGE_COOKIES_OVERLAY_CLASS_NAME = e.MANAGE_COOKIES_BAR_CLASS_NAME = e.COOKIE_BANNER_ROOT_CLASS_NAME = void 0;
            var t = e.COOKIE_BANNER_ROOT_CLASS_NAME = "gdpr-cookie-banner",
                n = e.MANAGE_COOKIES_BAR_CLASS_NAME = "manage-cookies-bar",
                u = e.MANAGE_COOKIES_OVERLAY_CLASS_NAME = "manage-cookies-overlay"
        },
        162049: (i, e, t) => {
            "use strict";
            var n = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useGetWindowWidth = m;
            var u = n(t(375798)),
                s = n(t(418008)),
                a = t(174161);

            function m() {
                var c = (0, a.useState)(window.innerWidth),
                    E = (0, u.default)(c, 2),
                    f = E[0],
                    r = E[1];

                function v() {
                    r(window.innerWidth)
                }
                var A = (0, a.useMemo)(() => (0, s.default)(v, 250), [v]);
                return (0, a.useEffect)(() => (window.addEventListener("resize", v), () => {
                    window.removeEventListener("resize", v)
                }), [A]), f
            }
        },
        647871: (i, e, t) => {
            "use strict";
            var n = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.t = e.pluralize = e.parseNumber = e.getCurrencySymbol = e.formatQuantity = e.formatNumber = e.formatIcuMessage = e.formatDateTime = e.formatCurrencyToParts = e.formatCurrency = e.T = void 0;
            var u = n(t(776190)),
                s = n(t(646404)),
                a = n(t(53870)),
                m = t(218673),
                c = (0, m.getI18nInstance)(),
                E = new u.default(c),
                f = new s.default(c),
                r = new a.default(c),
                v = e.formatIcuMessage = E.formatIcuMessage,
                A = e.parseNumber = f.parseNumber,
                d = e.T = r.T,
                T = e.formatNumber = c.formatNumber,
                b = e.formatCurrency = c.formatCurrency,
                M = e.formatCurrencyToParts = c.formatCurrencyToParts,
                R = e.getCurrencySymbol = c.getCurrencySymbol,
                o = e.formatQuantity = c.formatQuantity,
                g = e.formatDateTime = c.formatDateTime,
                O = e.t = c.translate,
                y = e.pluralize = c.pluralize
        },
        79803: (i, e, t) => {
            "use strict";
            var n = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = n(t(174161)),
                s = () => u.default.createElement("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, u.default.createElement("path", {
                    d: "M7 5.58594L12.293 0.292969L13.7072 1.70718L8.41421 7.00015L13.7072 12.2931L12.293 13.7073L7 8.41436L1.70718 13.7072L0.292969 12.293L5.58579 7.00015L0.292969 1.70733L1.70718 0.293119L7 5.58594Z",
                    fill: "white"
                })),
                a = e.default = s;
            i.exports = e.default
        },
        602775: (i, e, t) => {
            "use strict";
            var n = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "BannerPosition", {
                enumerable: !0,
                get: function() {
                    return c.BannerPosition
                }
            }), Object.defineProperty(e, "COOKIE_BANNER_ROOT_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return m.COOKIE_BANNER_ROOT_CLASS_NAME
                }
            }), Object.defineProperty(e, "CookieBannerProps", {
                enumerable: !0,
                get: function() {
                    return c.CookieBannerProps
                }
            }), Object.defineProperty(e, "MANAGE_COOKIES_BAR_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return m.MANAGE_COOKIES_BAR_CLASS_NAME
                }
            }), Object.defineProperty(e, "MANAGE_COOKIES_OVERLAY_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return m.MANAGE_COOKIES_OVERLAY_CLASS_NAME
                }
            }), e.default = void 0;
            var u = n(t(784712)),
                s = n(t(945261)),
                a = n(t(496174)),
                m = t(721963),
                c = t(345380),
                E = e.default = {
                    Banner: u.default,
                    ManageBar: s.default,
                    ManageOverlay: a.default
                }
        },
        784712: (i, e, t) => {
            "use strict";
            var n = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = n(t(845076)),
                s = n(t(174161)),
                a = t(721963),
                m = t(647871),
                c = t(162049),
                E = t(345380);
            t(273549);
            var f = 576,
                r = () => {},
                v = d => {
                    var T = d.acceptCookiesLabel,
                        b = d.bannerPosition,
                        M = d.bannerText,
                        R = d.declineCookiesLabel,
                        o = d.hasManageCookies,
                        g = d.hasDeclineCookies,
                        O = d.manageButtonRef,
                        y = d.manageCookiesLabel,
                        C = d.theme,
                        h = C === void 0 ? "" : C,
                        N = d.onAccept,
                        j = N === void 0 ? r : N,
                        D = d.onDecline,
                        G = D === void 0 ? r : D,
                        B = d.toggleManageOverlay,
                        H = B === void 0 ? r : B,
                        Y = d.isPreview,
                        S = b !== E.BannerPosition.TOP && b !== E.BannerPosition.BOTTOM,
                        K = (0, c.useGetWindowWidth)(),
                        W = "wide";
                    (S || K < f) && (W = "narrow");
                    var Q = (0, u.default)("accept", "sqs-button-element--primary", "sqs-cookie-banner-v2-accept", "sqs-cookie-banner-v2-cta"),
                        p = (0, u.default)("decline", "sqs-button-element--secondary", "sqs-cookie-banner-v2-deny", "sqs-cookie-banner-v2-cta"),
                        I = (0, u.default)("button-group", "sqs-cookie-banner-v2-cta-container"),
                        w = (0, u.default)("disclaimer-text", "sqs-cookie-banner-v2-text"),
                        P = s.default.createElement("button", {
                            className: Q,
                            onClick: j
                        }, s.default.createElement("span", null, T)),
                        F = s.default.createElement("button", {
                            className: p,
                            onClick: G
                        }, s.default.createElement("span", null, R)),
                        $ = s.default.createElement("button", {
                            className: "manage sqs-button-element--tertiary",
                            onClick: () => {
                                H(!0)
                            },
                            ref: O
                        }, s.default.createElement("span", null, y)),
                        U = s.default.createElement("div", {
                            className: I
                        }, o && $, g && F, P),
                        l = s.default.createElement("div", {
                            className: I
                        }, P, g && F, o && $);
                    return s.default.createElement("section", {
                        "data-section-theme": h,
                        "aria-label": (0, m.t)("Cookie banner", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        className: (0, u.default)(a.COOKIE_BANNER_ROOT_CLASS_NAME, b, h, {
                            bar: !S,
                            popup: S,
                            "full-styling": !Y
                        })
                    }, s.default.createElement("p", {
                        className: w,
                        dangerouslySetInnerHTML: {
                            __html: M
                        }
                    }), W === "wide" ? U : l)
                },
                A = e.default = v;
            i.exports = e.default
        },
        945261: (i, e, t) => {
            "use strict";
            var n = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = n(t(845076)),
                s = n(t(174161)),
                a = n(t(175756)),
                m = t(721963),
                c = t(647871);
            t(801563);
            var E = r => {
                    var v = r.savedPreferencesLayout,
                        A = v === void 0 ? a.default.PILL : v,
                        d = r.savedPreferencesText,
                        T = d === void 0 ? (0, c.t)("Cookie Preferences", null, {
                            project: "gdpr-cookie-banner"
                        }) : d,
                        b = r.theme,
                        M = b === void 0 ? "" : b,
                        R = r.openOverlay,
                        o = r.manageButtonRef;
                    return s.default.createElement("section", {
                        "data-dynamic-strings": "",
                        "data-section-theme": M,
                        "aria-label": (0, c.t)("Manage previously selected cookie options", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        className: (0, u.default)(m.MANAGE_COOKIES_BAR_CLASS_NAME, M, A)
                    }, s.default.createElement("button", {
                        className: "manage-bar-action",
                        onClick: R,
                        ref: o
                    }, T))
                },
                f = e.default = E;
            i.exports = e.default
        },
        496174: (i, e, t) => {
            "use strict";
            t(392338), t(392338), t(392338), t(392338);
            var n = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, t(392338), t(392338), t(392338);
            var u = n(t(375798)),
                s = n(t(845076)),
                a = d(t(174161)),
                m = n(t(994336)),
                c = t(999762),
                E = n(t(801579)),
                f = t(721963),
                r = t(647871),
                v = n(t(79803));
            t(896766);

            function A(o) {
                if (typeof WeakMap != "function") return null;
                var g = new WeakMap,
                    O = new WeakMap;
                return (A = function(C) {
                    return C ? O : g
                })(o)
            }

            function d(o, g) {
                if (!g && o && o.__esModule) return o;
                if (o === null || typeof o != "object" && typeof o != "function") return {
                    default: o
                };
                var O = A(g);
                if (O && O.has(o)) return O.get(o);
                var y = {
                        __proto__: null
                    },
                    C = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var h in o)
                    if (h !== "default" && Object.prototype.hasOwnProperty.call(o, h)) {
                        var N = C ? Object.getOwnPropertyDescriptor(o, h) : null;
                        N && (N.get || N.set) ? Object.defineProperty(y, h, N) : y[h] = o[h]
                    }
                return y.default = o, O && O.set(o, y), y
            }
            var T = {
                    necessary: {
                        title: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner",
                            notes: "This is a type of cookie. Necessary cookies are essential for websites and cannot be disabled."
                        }, "Necessary"),
                        description: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner"
                        }, "Required to enable core site functionality and to remember user preferences and choices, such as language preferences or customized settings.")
                    },
                    performance: {
                        title: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner",
                            notes: "This is a type of cookie. Performance cookies collect website data and analytics."
                        }, "Performance and Analytics"),
                        description: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner"
                        }, "These cookies provide quantitative measures of website visitors. With the usage of these cookies we are able to count visits and traffic sources to improve the performance of our site.")
                    },
                    marketing: {
                        title: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner",
                            notes: "This is a type of cookie. Marketing cookies are used to deliver targeted advertisements."
                        }, "Advertising"),
                        description: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner"
                        }, "These cookies are used by advertising companies to serve ads that are relevant to your interests.")
                    }
                },
                b = o => {
                    var g = m.default.get(o);
                    return g ? g === "true" : !0
                },
                M = o => {
                    var g = o.theme,
                        O = g === void 0 ? "" : g,
                        y = o.cookieNames,
                        C = o.onClose,
                        h = o.onSave,
                        N = y.performance,
                        j = y.marketing,
                        D = (0, a.useState)(b(N)),
                        G = (0, u.default)(D, 2),
                        B = G[0],
                        H = G[1],
                        Y = (0, a.useState)(b(j)),
                        S = (0, u.default)(Y, 2),
                        K = S[0],
                        W = S[1],
                        Q = l => l.stopPropagation(),
                        p = (0, a.useRef)(null),
                        I = (0, a.useId)(),
                        w = () => {
                            var l;
                            return (((l = p.current) === null || l === void 0 ? void 0 : l.ownerDocument) || document).documentElement
                        },
                        P = (0, a.useCallback)(l => {
                            l.code === "Escape" && (l.stopPropagation(), C())
                        }, [C]);
                    (0, a.useEffect)(() => {
                        var l = w();
                        return l.addEventListener("keyup", P),
                            function() {
                                l.removeEventListener("keyup", P)
                            }
                    }, [P]), (0, a.useEffect)(() => {
                        var l = (0, c.containFocus)({
                            container: p.current,
                            root: w()
                        });
                        return l
                    }, [p]);
                    var F = () => {
                            var l = [];
                            B && l.push(N), K && l.push(j), h(l)
                        },
                        $ = [{
                            name: "necessary"
                        }, {
                            name: "performance",
                            checked: B,
                            onChange: H
                        }, {
                            name: "marketing",
                            checked: K,
                            onChange: W
                        }],
                        U = l => {
                            var k = l.name,
                                z = l.checked,
                                V = l.onChange,
                                L = (0, a.useId)();
                            return a.default.createElement(a.default.Fragment, null, V ? a.default.createElement("div", {
                                className: "category-selection"
                            }, a.default.createElement("h4", {
                                id: "".concat(L, "-title")
                            }, T[k].title), a.default.createElement(E.default, {
                                checked: !!z,
                                onChange: V,
                                inputProps: {
                                    "aria-labelledby": "".concat(L, "-title"),
                                    "aria-describedby": "".concat(L, "-description")
                                }
                            })) : a.default.createElement("div", {
                                className: "category-selection"
                            }, a.default.createElement("h4", null, T[k].title), a.default.createElement("p", null, (0, r.t)("Always on", null, {
                                project: "gdpr-cookie-banner",
                                notes: "This refers to the state of necessary website cookies, they are always on, or in other words they are always enabled"
                            }))), a.default.createElement("p", {
                                className: "category-description",
                                id: "".concat(L, "-description")
                            }, T[k].description))
                        };
                    return a.default.createElement("div", {
                        className: "manage-overlay-wrapper",
                        "data-dynamic-strings": ""
                    }, a.default.createElement("div", {
                        className: "manage-cookies-overlay-backdrop",
                        onClick: C
                    }), a.default.createElement("div", {
                        "data-section-theme": O,
                        "aria-labelledby": I + "-heading",
                        className: (0, s.default)(f.MANAGE_COOKIES_OVERLAY_CLASS_NAME, O),
                        onClick: Q,
                        role: "dialog",
                        ref: p
                    }, a.default.createElement("h3", {
                        id: I + "-heading"
                    }, a.default.createElement(r.T, {
                        project: "gdpr-cookie-banner",
                        notes: "This is the title for a feature that allows site visitors to manage their cookie settings."
                    }, "Manage Cookies")), $.map((l, k) => {
                        var z = l.name,
                            V = l.checked,
                            L = l.onChange;
                        return a.default.createElement(a.default.Fragment, {
                            key: z
                        }, k > 0 && a.default.createElement("hr", null), a.default.createElement(U, {
                            name: z,
                            checked: V,
                            onChange: L
                        }))
                    }), a.default.createElement("div", {
                        className: "button-group"
                    }, a.default.createElement("button", {
                        className: "save sqs-button-element--primary",
                        onClick: F
                    }, a.default.createElement(r.T, {
                        project: "gdpr-cookie-banner",
                        notes: "This is a button that saves a site visitor's cookie preferences."
                    }, "Save Preferences"))), a.default.createElement("button", {
                        type: "button",
                        className: "close-icon",
                        "aria-label": (0, r.t)("Close", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        onClick: C
                    }, a.default.createElement(v.default, null))))
                },
                R = e.default = M;
            i.exports = e.default
        },
        345380: (i, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BannerPosition = void 0;
            var t = e.BannerPosition = function(n) {
                return n.TOP = "TOP", n.BOTTOM_LEFT = "BOTTOM_LEFT", n.BOTTOM_RIGHT = "BOTTOM_RIGHT", n.TOP_LEFT = "TOP_LEFT", n.TOP_RIGHT = "TOP_RIGHT", n.BOTTOM = "BOTTOM", n
            }({})
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/0d3e9993e5e89ecab3519b4ecc70d7ae/2775-366eac329381e45d848d-min.en-US.js.map