"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [79632], {
        332563: (tr, C, i) => {
            Object.defineProperty(C, "__esModule", {
                value: !0
            }), C.getPluralHash = C.getTranslateHash = void 0;
            var o = i(763268),
                T = o.__importDefault(i(625392)),
                Y = o.__importDefault(i(412139)),
                Q = ["one", "other"],
                L = function(b) {
                    return b.replace(/\n/g, "\\n")
                },
                M = function(b, p, O) {
                    return b + "value:".concat(L(p)) + (O ? "notes:".concat(L(O)) : "")
                };

            function N(b, p, O) {
                var G = O != null ? O : "";
                return M(p, b, G)
            }

            function k(b, p, O) {
                var G = O != null ? O : "",
                    $ = Object.keys(b).map(function(R) {
                        return Q.includes(R) ? "".concat(R, ":").concat(b[R]) : ""
                    }).join("");
                return M(p, $, G)
            }
            var J = (0, T.default)(function(b, p, O) {
                    return (0, Y.default)(N(b, p, O))
                }, N),
                X = (0, T.default)(function(b, p, O) {
                    return (0, Y.default)(k(b, p, O))
                }, k),
                E = function(b, p) {
                    return J(b, p.project, p.notes)
                };
            C.getTranslateHash = E;
            var K = function(b, p) {
                return X(b, p.project, p.notes)
            };
            C.getPluralHash = K
        },
        87818: (tr, C, i) => {
            var o;
            o = {
                value: !0
            }, C.Ju = C.H5 = void 0;
            var T = i(332563);
            Object.defineProperty(C, "H5", {
                enumerable: !0,
                get: function() {
                    return T.getTranslateHash
                }
            }), Object.defineProperty(C, "Ju", {
                enumerable: !0,
                get: function() {
                    return T.getPluralHash
                }
            })
        },
        779632: (tr, C, i) => {
            i.r(C), i.d(C, {
                I18nContext: () => T,
                useFormatters: () => lr,
                useFormattingLocale: () => Yr,
                useI18nHelpers: () => mr,
                useLoadTranslations: () => q,
                usePluralWithTranslationLoader: () => Pr,
                useTranslateWithTranslationLoader: () => Sr,
                useTranslationLocale: () => fr,
                withI18n: () => De
            });
            var o = i(174161),
                T = (0, o.createContext)(null),
                Y = i(392338),
                Q = i(346797),
                L = i.n(Q);

            function M(r, n) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(r);
                    n && (t = t.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(r, a).enumerable
                    })), e.push.apply(e, t)
                }
                return e
            }

            function N(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n] != null ? arguments[n] : {};
                    n % 2 ? M(Object(e), !0).forEach(function(t) {
                        L()(r, t, e[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : M(Object(e)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    })
                }
                return r
            }
            var k = {
                group: !0,
                round: "half-up"
            };

            function J(r) {
                var n = (0, o.useCallback)(function(s, c, l) {
                        var u = N(N({}, k), l);
                        return isNaN(s) ? String(NaN) : r.Numbers.formatCurrency(s, c, u)
                    }, [r]),
                    e = (0, o.useCallback)(function(s, c, l) {
                        var u = N(N({}, k), l);
                        return r.Numbers.formatCurrencyToParts(s, c, u)
                    }, [r]),
                    t = (0, o.useCallback)(function(s) {
                        return r.Numbers.getCurrencyFractions(s)
                    }, [r]),
                    a = (0, o.useCallback)(function(s, c) {
                        return r.Numbers.getCurrencySymbol(s, c)
                    }, [r]);
                return {
                    formatCurrency: n,
                    formatCurrencyToParts: e,
                    getCurrencySymbol: a,
                    getCurrencyFractions: t
                }
            }
            var X = J,
                E = function(n) {
                    var e, t = (e = Intl) === null || e === void 0 || (e = e.DateTimeFormat()) === null || e === void 0 || (e = e.resolvedOptions()) === null || e === void 0 ? void 0 : e.timeZone;
                    return n instanceof Date || typeof n == "number" ? {
                        date: n,
                        zoneId: t
                    } : n.zoneId ? n : {
                        date: n.date,
                        zoneId: t
                    }
                };

            function K(r, n) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(r);
                    n && (t = t.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(r, a).enumerable
                    })), e.push.apply(e, t)
                }
                return e
            }

            function b(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n] != null ? arguments[n] : {};
                    n % 2 ? K(Object(e), !0).forEach(function(t) {
                        L()(r, t, e[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : K(Object(e)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    })
                }
                return r
            }
            var p = {
                    date: "medium"
                },
                O = {
                    ca: "gregory",
                    time: "yMMMhm",
                    date: "yMMMd"
                };

            function G(r) {
                var n = (0, o.useCallback)(function(c) {
                        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p,
                            u = E(c);
                        return r.Calendars.formatDate(u, l)
                    }, [r]),
                    e = (0, o.useCallback)(function(c, l, u) {
                        var f = E(c),
                            m = E(l);
                        return r.Calendars.formatDateInterval(f, m, b(b({}, O), u))
                    }, [r]),
                    t = (0, o.useCallback)(function(c, l, u) {
                        var f = E(c),
                            m = E(l),
                            d = r.Calendars.toGregorianDate(f),
                            g = r.Calendars.toGregorianDate(m),
                            v = d.difference(g);
                        return [v.week, v.month, v.year].some(function(h) {
                            return h
                        }) ? n(l, b(b({}, p), {}, {
                            context: u == null ? void 0 : u.context
                        })) : v.day >= 2 ? n(l, {
                            date: void 0,
                            skeleton: "EEEEhm",
                            atTime: !1,
                            context: u == null ? void 0 : u.context
                        }) : "".concat(r.Calendars.formatRelativeTime(f, m, {
                            field: "day",
                            context: u == null ? void 0 : u.context
                        }), ", ").concat(r.Calendars.formatDate(m, {
                            time: "short"
                        }))
                    }, [r, n]),
                    a = (0, o.useCallback)(function(c) {
                        return r.Calendars.timeZoneInfo(c)
                    }, [r]),
                    s = (0, o.useCallback)(function(c, l) {
                        return r.Calendars.timeZoneFromUTC(c, l)
                    }, [r]);
                return {
                    formatDate: n,
                    formatDateInterval: e,
                    formatRelativeTime: t,
                    getTimeZoneInfo: a,
                    getTimeZoneInfoFromUTC: s
                }
            }
            var $ = G,
                R = i(647451),
                Er = i(625392),
                _ = i.n(Er),
                Dr = i(880628),
                Ar = function(n) {
                    var e = n.loader;
                    return new R.CLDRFramework({
                        loader: e,
                        config: Dr.config
                    })
                },
                nr = _()(Ar, function(r) {
                    var n = r.loader;
                    return n
                }),
                D = "Missing I18nContext value. <I18nContext.Provider /> Must be present higher up the component tree for your React root",
                Fr = "useTranslate() requires a translations dictionary",
                Ir = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"],
                wr = ["CU", "IR", "KP", "SD", "SY"],
                Mr = {
                    ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
                    be: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F",
                    bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
                    ca: "Catal\xE0",
                    cs: "\u010Ce\u0161tina",
                    da: "Dansk",
                    de: "Deutsch",
                    el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
                    en: "English",
                    es: "Espa\xF1ol",
                    et: "Eesti",
                    fi: "Suomi",
                    fr: "Fran\xE7ais",
                    hi: "\u0939\u093F\u0928\u094D\u0926\u0940",
                    hr: "Hrvatski",
                    hu: "Magyar",
                    is: "\xCDslenska",
                    it: "Italiano",
                    iw: "\u05E2\u05D1\u05E8\u05D9\u05EA",
                    ja: "\u65E5\u672C\u8A9E",
                    ko: "\uD55C\uAD6D\uC5B4",
                    lt: "Lietuvi\u0173",
                    lv: "Latvie\u0161u",
                    mk: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438",
                    nl: "Nederlands",
                    no: "Norsk",
                    pl: "Polski",
                    pt: "Portugu\xEAs (Brasil)",
                    ro: "Rom\xE2n\u0103",
                    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
                    sh: "Srpskohrvatski",
                    sr: "\u0421\u0440\u043F\u0441\u043A\u0438",
                    sk: "Sloven\u010Dina",
                    sl: "Sloven\u0161\u010Dina",
                    sq: "Shqip",
                    sv: "Svenska",
                    th: "\u0E44\u0E17\u0E22",
                    tr: "T\xFCrk\xE7e",
                    uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
                    zh: "\u4E2D\u6587"
                };

            function kr() {
                var r = (0, o.useContext)(T);
                if (r === null) throw new Error(D);
                var n = r.cldrLoader,
                    e = r.formattingLocale,
                    t = nr({
                        loader: n
                    });
                return (0, o.useMemo)(function() {
                    return t.get(e)
                }, [t, e])
            }
            var Gr = kr;

            function Rr(r) {
                var n = (0, o.useCallback)(function(e, t) {
                    return r.General.formatList(e, t)
                }, [r]);
                return {
                    formatList: n
                }
            }
            var xr = Rr;

            function ar(r, n) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(r);
                    n && (t = t.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(r, a).enumerable
                    })), e.push.apply(e, t)
                }
                return e
            }

            function or(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n] != null ? arguments[n] : {};
                    n % 2 ? ar(Object(e), !0).forEach(function(t) {
                        L()(r, t, e[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ar(Object(e)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    })
                }
                return r
            }
            var Ur = {
                group: !0,
                round: "half-up",
                errors: ["nan"]
            };

            function Hr(r) {
                var n = (0, o.useCallback)(function(t, a) {
                        return r.Numbers.formatDecimal(t, or(or({}, Ur), a))
                    }, [r]),
                    e = (0, o.useCallback)(function() {
                        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "latn",
                            a = r.General.bundle(),
                            s = r.Schema.Numbers.numberSystem.get(t);
                        if (!s) throw new Error("[@sqs/i18n-react]: missing number system: ".concat(t));
                        return {
                            symbols: s.symbols.mapping(a),
                            pattern: s.decimalFormats.standard.get(a)
                        }
                    }, [r]);
                return {
                    formatDecimal: n,
                    getNumberSystemMetadata: e
                }
            }
            var Kr = Hr;

            function ur(r, n) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(r);
                    n && (t = t.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(r, a).enumerable
                    })), e.push.apply(e, t)
                }
                return e
            }

            function sr(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n] != null ? arguments[n] : {};
                    n % 2 ? ur(Object(e), !0).forEach(function(t) {
                        L()(r, t, e[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ur(Object(e)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    })
                }
                return r
            }
            var Vr = {
                group: !0,
                round: "half-up",
                length: "long"
            };

            function Br(r) {
                var n = (0, o.useCallback)(function(t, a) {
                        return r.Units.formatQuantity(t, sr(sr({}, Vr), a))
                    }, [r]),
                    e = (0, o.useCallback)(function() {
                        return r.Units.availableUnits()
                    }, [r]);
                return {
                    formatQuantity: n,
                    getAvailableUnits: e
                }
            }
            var Wr = Br;

            function ir(r, n) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(r);
                    n && (t = t.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(r, a).enumerable
                    })), e.push.apply(e, t)
                }
                return e
            }

            function x(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n] != null ? arguments[n] : {};
                    n % 2 ? ir(Object(e), !0).forEach(function(t) {
                        L()(r, t, e[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ir(Object(e)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    })
                }
                return r
            }

            function zr() {
                var r = Gr(),
                    n = X(r),
                    e = $(r),
                    t = xr(r),
                    a = Wr(r),
                    s = Kr(r);
                return x(x(x(x(x({}, n), e), t), a), s)
            }
            var lr = zr,
                Zr = function() {
                    var n = (0, o.useContext)(T);
                    if (n === null) throw new Error(D);
                    return n.formattingLocale
                },
                Yr = Zr,
                Qr = i(375798),
                V = i.n(Qr),
                Jr = i(825704);

            function Xr() {
                var r = (0, o.useContext)(T);
                if (r === null) throw new Error(D);
                var n = r.cldrLoader,
                    e = r.translationLocale,
                    t = nr({
                        loader: n
                    });
                return (0, o.useMemo)(function() {
                    return t.get(e)
                }, [t, e])
            }
            var cr = Xr,
                $r = function() {
                    var n = (0, o.useContext)(T);
                    if (n === null) throw new Error(D);
                    return n.translationLocale
                },
                fr = $r,
                _r = {
                    context: "standalone"
                },
                qr = {
                    context: "standalone"
                },
                vr = {
                    context: "ui-list-or-menu"
                };

            function re() {
                var r = cr(),
                    n = fr(),
                    e = (0, o.useCallback)(function(u) {
                        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _r;
                        return r.General.getRegionDisplayName(u, f)
                    }, [r]),
                    t = (0, o.useCallback)(function(u) {
                        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qr;
                        return r.General.getLanguageDisplayName(u, f)
                    }, [r]),
                    a = (0, o.useCallback)(function(u) {
                        var f, m = Jr.LocaleResolver.parseLocale(u).language();
                        return (f = Mr[m]) !== null && f !== void 0 ? f : t(u)
                    }, [t]),
                    s = (0, o.useCallback)(function(u, f) {
                        var m = u.map(function(d) {
                            return [d, e(d, f)]
                        });
                        return m.sort(function(d, g) {
                            var v = V()(d, 2),
                                h = v[0],
                                P = v[1],
                                j = V()(g, 2),
                                I = j[0],
                                y = j[1];
                            return P.localeCompare(y, n)
                        }).reduce(function(d, g) {
                            var v = V()(g, 2),
                                h = v[0],
                                P = v[1];
                            return d[h] = P, d
                        }, {})
                    }, [e, n]),
                    c = (0, o.useCallback)(function() {
                        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vr;
                        return s(Ir, u)
                    }, [s]),
                    l = (0, o.useCallback)(function() {
                        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vr;
                        return s(wr, u)
                    }, [s]);
                return {
                    getCountryName: e,
                    getLanguageName: t,
                    getNativeLanguageName: a,
                    getCountries: c,
                    getOfacCountries: l
                }
            }
            var mr = re;

            function ee(r) {
                var n = (0, o.useContext)(T);
                if (n === null) throw new Error(D);
                if (!r.translationsLoader) throw new Error("useLoadTranslations() requires a passed translationsLoader function");
                var e = r.translationsLoader;
                return (0, o.useMemo)(function() {
                    return e(n.translationLocale)
                }, [n.translationLocale, e])
            }
            var q = ee,
                te = i(432405),
                dr = i.n(te),
                ne = i(291341),
                br = i.n(ne),
                gr = i(87818),
                ae = i(485774),
                oe = i.n(ae),
                ue = /\{([^}]+)\}/g;

            function se(r, n) {
                var e = n.map(function(t) {
                    return {
                        key: t,
                        index: r.indexOf(t)
                    }
                }).filter(function(t) {
                    var a = t.index;
                    return a !== -1
                }).sort(function(t, a) {
                    return t.index - a.index
                });
                return e[0] || null
            }

            function pr(r, n) {
                return Object.entries(r).reduce(function(e, t) {
                    var a = V()(t, 2),
                        s = a[0],
                        c = a[1];
                    return (!Object.values(n).includes(c) || !Object.keys(n).includes(s)) && (e[s] = c), e
                }, {})
            }

            function rr(r) {
                if (!r) return [];
                var n = r.match(ue);
                if (n === null) return [r];
                for (var e = []; r.length;) {
                    var t = se(r, n);
                    if (t === null) break;
                    e.push(r.slice(0, t.index)), e.push(t.key), r = r.slice(t.index + (t.key ? t.key.length : 0))
                }
                return e.push(r), e
            }

            function yr(r, n) {
                var e = rr(r),
                    t = [];
                return n && (e = e.map(function(a) {
                    var s = oe()(n, function(c, l) {
                        return "{".concat(l, "}") === a
                    });
                    return s ? o.isValidElement(n[s]) && n[s].key === null ? (t = t.concat(s), o.cloneElement(n[s], {
                        key: s
                    })) : n[s] : a
                })), {
                    children: e,
                    replaced: t
                }
            }

            function Or(r, n) {
                var e = {
                    project: r
                };
                return n && Object.assign(e, {
                    notes: n
                }), e
            }
            var hr = function(n, e, t) {
                return t != null ? t : {}
            };

            function ie(r) {
                return r.displayName || r.name || "Component"
            }

            function F(r) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return o.createElement("span", n, r)
            }
            var le = /({[^}]+})/g,
                ce = /{([^}]+)}/,
                fe = _()(function(r) {
                    return r.split(le)
                }),
                ve = function(n, e) {
                    return "".concat(n.join(""), "-").concat(JSON.stringify(e))
                },
                me = _()(function(r, n) {
                    return r.map(function(e) {
                        var t = e.match(ce);
                        return t && n[t[1]] ? n[t[1]] : e
                    }).join("")
                }, ve),
                Tr = function(n, e) {
                    var t = fe(n);
                    return me(t, e)
                },
                de = i(570004),
                be = new de.VisualContext({
                    source: "@sqs/i18n-react"
                }),
                B = be,
                ge = ["forms", "n", "project", "notes"];

            function Cr(r, n) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(r);
                    n && (t = t.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(r, a).enumerable
                    })), e.push.apply(e, t)
                }
                return e
            }

            function jr(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n] != null ? arguments[n] : {};
                    n % 2 ? Cr(Object(e), !0).forEach(function(t) {
                        L()(r, t, e[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Cr(Object(e)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    })
                }
                return r
            }

            function pe(r) {
                var n = (0, o.useContext)(T);
                if (n === null) throw new Error(D);
                if (!r || !r.translations) throw new Error("usePlural() requires a translations dictionary");
                var e = n.htmlAttributesTransform,
                    t = e === void 0 ? hr : e,
                    a = r.translations,
                    s = cr(),
                    c = (0, o.useCallback)(function(u, f, m, d) {
                        var g, v = (0, gr.Ju)(u, d),
                            h = s.Numbers.getPluralCardinal(f),
                            P = (g = a[v]) !== null && g !== void 0 ? g : u,
                            j = P[h],
                            I = jr(jr({}, m), {}, {
                                "%n": s.Numbers.formatDecimal(f, {
                                    group: !0,
                                    round: "half-up",
                                    errors: ["nan"]
                                })
                            }),
                            y = Tr(j, I);
                        return B.isExtensionEnabled && B.updateStringMap(v, y), y
                    }, [s, a]),
                    l = (0, o.useCallback)(function(u) {
                        var f = u.forms,
                            m = u.n,
                            d = u.project,
                            g = u.notes,
                            v = dr()(u, ge),
                            h = {},
                            P = {},
                            j = f && f.other ? f.other : null;
                        if (typeof m != "number" || !j) return null;
                        if (typeof j != "string") return F(j);
                        Object.keys(v).forEach(function(Z) {
                            var H = v[Z];
                            o.isValidElement(H) ? h[Z] = H : P[Z] = H
                        });
                        var I = Or(d, g),
                            y = c(f, m, P, I),
                            er = rr(Object.values(f).join(",")),
                            S = br()(P, function(Z, H) {
                                return !er.includes("{".concat(H, "}"))
                            }),
                            W = pr(P, S),
                            U = {
                                strings: Object.keys(W)
                            };
                        if (Object.keys(h).length > 0) {
                            var z = yr(y, h),
                                w = z.children,
                                A = z.replaced;
                            return U.components = A, S = t(y, U, S), F(w, S)
                        }
                        return S = t(y, U, S), F(y, S)
                    }, [c, t]);
                return l.displayName = "PluralWrapper", {
                    pluralize: c,
                    Plural: l
                }
            }
            var ye = pe,
                Oe = function(n) {
                    var e = q({
                            translationsLoader: n
                        }),
                        t = ye({
                            translations: e
                        });
                    return t
                },
                Pr = Oe,
                he = ["children", "project", "notes"];

            function Te(r) {
                var n = (0, o.useContext)(T);
                if (n === null) throw new Error(D);
                if (!r || !r.translations) throw new Error(Fr);
                var e = n.htmlAttributesTransform,
                    t = e === void 0 ? hr : e,
                    a = r.translations,
                    s = (0, o.useCallback)(function(l, u, f) {
                        var m = (0, gr.H5)(l, f),
                            d = a[m],
                            g = d != null ? d : l,
                            v = u ? Tr(g, u) : g;
                        return B.isExtensionEnabled && B.updateStringMap(m, v), v
                    }, [a]),
                    c = (0, o.useCallback)(function(l) {
                        var u = l.children,
                            f = l.project,
                            m = l.notes,
                            d = dr()(l, he),
                            g = {},
                            v = {},
                            h = u;
                        if (!h) return null;
                        if (typeof h != "string") return F(h);
                        Object.keys(d).forEach(function(w) {
                            var A = d[w];
                            o.isValidElement(A) ? g[w] = A : v[w] = A
                        });
                        var P = Or(f, m),
                            j = s(h, v, P),
                            I = rr(h),
                            y = br()(v, function(w, A) {
                                return !I.includes("{".concat(A, "}"))
                            }),
                            er = pr(v, y),
                            S = {
                                strings: Object.keys(er)
                            };
                        if (Object.keys(g).length > 0) {
                            var W = yr(j, g),
                                U = W.children,
                                z = W.replaced;
                            return S.components = z, y = t(j, S, y), F(U, y)
                        }
                        return y = t(j, S, y), F(j, y)
                    }, [s, t]);
                return c.displayName = "TWrapper", {
                    t: s,
                    T: c
                }
            }
            var Ce = Te,
                je = function(n) {
                    var e = q({
                            translationsLoader: n
                        }),
                        t = Ce({
                            translations: e
                        });
                    return t
                },
                Sr = je,
                Pe = i(987195),
                Se = i.n(Pe),
                Le = i(192628),
                Ne = i.n(Le);

            function Lr(r, n) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(r);
                    n && (t = t.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(r, a).enumerable
                    })), e.push.apply(e, t)
                }
                return e
            }

            function Nr(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n] != null ? arguments[n] : {};
                    n % 2 ? Lr(Object(e), !0).forEach(function(t) {
                        L()(r, t, e[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Lr(Object(e)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    })
                }
                return r
            }
            var Ee = function(n, e) {
                    var t = e.translationsLoader,
                        a = function(c) {
                            var l = Sr(t),
                                u = l.t,
                                f = l.T,
                                m = Pr(t),
                                d = m.pluralize,
                                g = m.Plural,
                                v = Nr(Nr({
                                    t: u,
                                    T: f,
                                    pluralize: d,
                                    Plural: g
                                }, lr()), mr());
                            return o.createElement(n, Se()({}, c, {
                                i18n: v
                            }))
                        };
                    return a.displayName = "withI18n(".concat(ie(n), ")"), Ne()(a, n)
                },
                De = Ee
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/3164dcd3f88956b86ac3b3e4fb03d7ae/79632-91a3430dc1b02bcab80f-min.en-US.js.map