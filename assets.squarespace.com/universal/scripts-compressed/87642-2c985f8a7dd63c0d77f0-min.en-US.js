"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [87642], {
        412067: (Z, V) => {
            Object.defineProperty(V, "__esModule", {
                value: !0
            }), V.default = void 0;
            var P;
            (function(I) {
                I.NONE = "none", I.SINGLE_TRACE = "single-trace", I.DOUBLE_TRACE = "double-trace", I.GLOW = "glow"
            })(P || (P = {}));
            var w = P;
            V.default = w, Z.exports = V.default
        },
        944895: (Z, V) => {
            Object.defineProperty(V, "__esModule", {
                value: !0
            }), V.default = void 0;
            var P;
            (function(I) {
                I.TOP = "top", I.CENTER = "center", I.BOTTOM = "bottom"
            })(P || (P = {}));
            var w = P;
            V.default = w, Z.exports = V.default
        },
        513306: (Z, V, P) => {
            P.r(V), P.d(V, {
                NumberFormatBase: () => oe,
                NumericFormat: () => Ue,
                PatternFormat: () => We,
                getNumericCaretBoundary: () => xe,
                getPatternCaretBoundary: () => Ee,
                numericFormatter: () => ue,
                patternFormatter: () => De,
                removeNumericFormat: () => be,
                removePatternFormat: () => Ne,
                useNumericFormat: () => Ce,
                usePatternFormat: () => Ie
            });
            var w = P(174161);

            function I(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (e != null && typeof Object.getOwnPropertySymbols == "function")
                    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
                return r
            }
            var L;
            (function(e) {
                e.event = "event", e.props = "prop"
            })(L || (L = {}));

            function j() {}

            function J(e) {
                return !!(e || "").match(/\d/)
            }

            function X(e) {
                return e == null
            }

            function ce(e) {
                return typeof e == "number" && isNaN(e)
            }

            function de(e) {
                return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }

            function Ae(e) {
                switch (e) {
                    case "lakh":
                        return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                    case "wan":
                        return /(\d)(?=(\d{4})+(?!\d))/g;
                    case "thousand":
                    default:
                        return /(\d)(?=(\d{3})+(?!\d))/g
                }
            }

            function Be(e, t, r) {
                var n = Ae(r),
                    a = e.search(/[1-9]/);
                return a = a === -1 ? e.length : a, e.substring(0, a) + e.substring(a, e.length).replace(n, "$1" + t)
            }

            function Ve(e) {
                var t = (0, w.useRef)(e);
                t.current = e;
                var r = (0, w.useRef)(function() {
                    for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
                    return t.current.apply(t, n)
                });
                return r.current
            }

            function ie(e, t) {
                t === void 0 && (t = !0);
                var r = e[0] === "-",
                    n = r && t;
                e = e.replace("-", "");
                var a = e.split("."),
                    i = a[0],
                    u = a[1] || "";
                return {
                    beforeDecimal: i,
                    afterDecimal: u,
                    hasNegation: r,
                    addNegation: n
                }
            }

            function Fe(e) {
                if (!e) return e;
                var t = e[0] === "-";
                t && (e = e.substring(1, e.length));
                var r = e.split("."),
                    n = r[0].replace(/^0+/, "") || "0",
                    a = r[1] || "";
                return (t ? "-" : "") + n + (a ? "." + a : "")
            }

            function se(e, t, r) {
                for (var n = "", a = r ? "0" : "", i = 0; i <= t - 1; i++) n += e[i] || a;
                return n
            }

            function me(e, t) {
                return Array(t + 1).join(e)
            }

            function ge(e) {
                var t = e + "",
                    r = t[0] === "-" ? "-" : "";
                r && (t = t.substring(1));
                var n = t.split(/[eE]/g),
                    a = n[0],
                    i = n[1];
                if (i = Number(i), !i) return r + a;
                a = a.replace(".", "");
                var u = 1 + i,
                    d = a.length;
                return u < 0 ? a = "0." + me("0", Math.abs(u)) + a : u >= d ? a = a + me("0", u - d) : a = (a.substring(0, u) || "0") + "." + a.substring(u), r + a
            }

            function he(e, t, r) {
                if (["", "-"].indexOf(e) !== -1) return e;
                var n = (e.indexOf(".") !== -1 || r) && t,
                    a = ie(e),
                    i = a.beforeDecimal,
                    u = a.afterDecimal,
                    d = a.hasNegation,
                    h = parseFloat("0." + (u || "0")),
                    p = u.length <= t ? "0." + u : h.toFixed(t),
                    v = p.split("."),
                    y = i.split("").reverse().reduce(function(s, m, D) {
                        return s.length > D ? (Number(s[0]) + Number(m)).toString() + s.substring(1, s.length) : m + s
                    }, v[0]),
                    o = se(v[1] || "", t, r),
                    l = d ? "-" : "",
                    S = n ? "." : "";
                return "" + l + y + S + o
            }

            function $(e, t) {
                if (e.value = e.value, e !== null) {
                    if (e.createTextRange) {
                        var r = e.createTextRange();
                        return r.move("character", t), r.select(), !0
                    }
                    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
                }
            }

            function Re(e, t) {
                for (var r = 0, n = 0, a = e.length, i = t.length; e[r] === t[r] && r < a;) r++;
                for (; e[a - 1 - n] === t[i - 1 - n] && i - n > r && a - n > r;) n++;
                return {
                    from: {
                        start: r,
                        end: a - n
                    },
                    to: {
                        start: r,
                        end: i - n
                    }
                }
            }

            function Te(e, t, r) {
                return Math.min(Math.max(e, t), r)
            }

            function ye(e) {
                return Math.max(e.selectionStart, e.selectionEnd)
            }

            function _e() {
                return typeof navigator != "undefined" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
            }

            function Se(e) {
                return {
                    from: {
                        start: 0,
                        end: 0
                    },
                    to: {
                        start: 0,
                        end: e.length
                    },
                    lastValue: ""
                }
            }

            function pe(e, t) {
                return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " "
            }

            function Pe(e, t, r, n, a, i) {
                var u = a.findIndex(function(O) {
                        return O
                    }),
                    d = e.slice(0, u);
                !t && !r.startsWith(d) && (r = d + r, n = n + d.length);
                for (var h = r.length, p = e.length, v = {}, y = new Array(h), o = 0; o < h; o++) {
                    y[o] = -1;
                    for (var l = 0, S = p; l < S; l++)
                        if (r[o] === e[l] && v[l] !== !0) {
                            y[o] = l, v[l] = !0;
                            break
                        }
                }
                for (var s = n; s < h && (y[s] === -1 || !i(r[s]));) s++;
                var m = s === h || y[s] === -1 ? p : y[s];
                for (s = n - 1; s > 0 && y[s] === -1;) s--;
                var D = s === -1 || y[s] === -1 ? 0 : y[s] + 1;
                return D > m ? m : n - D < m - n ? D : m
            }

            function H(e, t, r, n) {
                var a = e.length;
                if (t = Te(t, 0, a), n === "left") {
                    for (; t >= 0 && !r[t];) t--;
                    t === -1 && (t = r.indexOf(!0))
                } else {
                    for (; t <= a && !r[t];) t++;
                    t > a && (t = r.lastIndexOf(!0))
                }
                return t === -1 && (t = a), t
            }

            function ke(e) {
                for (var t = Array.from({
                        length: e.length + 1
                    }).map(function() {
                        return !0
                    }), r = 0, n = t.length; r < n; r++) t[r] = !!(J(e[r]) || J(e[r - 1]));
                return t
            }

            function we(e, t, r, n, a, i) {
                i === void 0 && (i = j);
                var u = (0, w.useRef)(),
                    d = Ve(function(o) {
                        var l, S;
                        return X(o) || ce(o) ? (S = "", l = "") : typeof o == "number" || r ? (S = typeof o == "number" ? ge(o) : o, l = n(S)) : (S = a(o, void 0), l = o), {
                            formattedValue: l,
                            numAsString: S
                        }
                    }),
                    h = (0, w.useState)(function() {
                        return d(t)
                    }),
                    p = h[0],
                    v = h[1],
                    y = function(o, l) {
                        v({
                            formattedValue: o.formattedValue,
                            numAsString: o.value
                        }), i(o, l)
                    };
                return (0, w.useMemo)(function() {
                    X(e) ? u.current = void 0 : (u.current = d(e), v(u.current))
                }, [e, d]), [p, y]
            }

            function Me(e) {
                return e.replace(/[^0-9]/g, "")
            }

            function Le(e) {
                return e
            }

            function oe(e) {
                var t = e.type;
                t === void 0 && (t = "text");
                var r = e.displayType;
                r === void 0 && (r = "input");
                var n = e.customInput,
                    a = e.renderText,
                    i = e.getInputRef,
                    u = e.format;
                u === void 0 && (u = Le);
                var d = e.removeFormatting;
                d === void 0 && (d = Me);
                var h = e.defaultValue,
                    p = e.valueIsNumericString,
                    v = e.onValueChange,
                    y = e.isAllowed,
                    o = e.onChange;
                o === void 0 && (o = j);
                var l = e.onKeyDown;
                l === void 0 && (l = j);
                var S = e.onMouseUp;
                S === void 0 && (S = j);
                var s = e.onFocus;
                s === void 0 && (s = j);
                var m = e.onBlur;
                m === void 0 && (m = j);
                var D = e.value,
                    O = e.getCaretBoundary;
                O === void 0 && (O = ke);
                var B = e.isValidInputCharacter;
                B === void 0 && (B = J);
                var M = I(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter"]),
                    K = we(D, h, !!p, u, d, v),
                    W = K[0],
                    F = W.formattedValue,
                    z = W.numAsString,
                    te = K[1],
                    U = (0, w.useRef)(),
                    fe = function(f, c) {
                        U.current = f.formattedValue, te(f, c)
                    };
                (0, w.useEffect)(function() {
                    var f = u(z);
                    if (U.current === void 0 || f !== U.current) {
                        var c = x.current,
                            g = d(f, void 0);
                        Q({
                            formattedValue: f,
                            numAsString: g,
                            input: c,
                            setCaretPosition: !0,
                            source: L.props,
                            event: void 0
                        })
                    }
                });
                var re = (0, w.useState)(!1),
                    le = re[0],
                    b = re[1],
                    x = (0, w.useRef)(null),
                    R = (0, w.useRef)({
                        setCaretTimeout: null,
                        focusTimeout: null
                    });
                (0, w.useEffect)(function() {
                    return b(!0),
                        function() {
                            clearTimeout(R.current.setCaretTimeout), clearTimeout(R.current.focusTimeout)
                        }
                }, []);
                var k = u,
                    ae = function(f, c) {
                        var g = parseFloat(c);
                        return {
                            formattedValue: f,
                            value: c,
                            floatValue: isNaN(g) ? void 0 : g
                        }
                    },
                    T = function(f, c, g) {
                        $(f, c), R.current.setCaretTimeout = setTimeout(function() {
                            f.value === g && $(f, c)
                        }, 0)
                    },
                    G = function(f, c, g) {
                        return H(f, c, O(f), g)
                    },
                    Y = function(f, c, g) {
                        var N = O(c),
                            E = Pe(c, F, f, g, N, B);
                        return E = H(c, E, N), E
                    },
                    Q = function(f) {
                        var c = f.formattedValue;
                        c === void 0 && (c = "");
                        var g = f.input,
                            N = f.setCaretPosition;
                        N === void 0 && (N = !0);
                        var E = f.source,
                            C = f.event,
                            A = f.numAsString,
                            _ = f.caretPos;
                        if (g) {
                            if (_ === void 0 && N) {
                                var q = f.inputValue || g.value,
                                    ve = ye(g);
                                g.value = c, _ = Y(q, c, ve)
                            }
                            g.value = c, N && _ !== void 0 && T(g, _, c)
                        }
                        c !== F && fe(ae(c, A), {
                            event: C,
                            source: E
                        })
                    },
                    ne = function(f, c, g) {
                        var N = Re(F, f),
                            E = Object.assign(Object.assign({}, N), {
                                lastValue: F
                            }),
                            C = d(f, E),
                            A = k(C);
                        if (C = d(A, void 0), y && !y(ae(A, C))) {
                            var _ = c.target,
                                q = ye(_),
                                ve = Y(f, F, q);
                            return T(_, ve, F), !1
                        }
                        return Q({
                            formattedValue: A,
                            numAsString: C,
                            inputValue: f,
                            event: c,
                            source: g,
                            setCaretPosition: !0,
                            input: c.target
                        }), !0
                    },
                    Ze = function(f) {
                        var c = f.target,
                            g = c.value,
                            N = ne(g, f, L.event);
                        N && o(f)
                    },
                    Je = function(f) {
                        var c = f.target,
                            g = f.key,
                            N = c.selectionStart,
                            E = c.selectionEnd,
                            C = c.value;
                        C === void 0 && (C = "");
                        var A;
                        if (g === "ArrowLeft" || g === "Backspace" ? A = Math.max(N - 1, 0) : g === "ArrowRight" ? A = Math.min(N + 1, C.length) : g === "Delete" && (A = N), A === void 0 || N !== E) {
                            l(f);
                            return
                        }
                        var _ = A;
                        if (g === "ArrowLeft" || g === "ArrowRight") {
                            var q = g === "ArrowLeft" ? "left" : "right";
                            _ = G(C, A, q)
                        } else g === "Delete" && !B(C[A]) ? _ = G(C, A, "right") : g === "Backspace" && !B(C[A]) && (_ = G(C, A, "left"));
                        _ !== A && T(c, _, C), f.isUnitTestRun && T(c, _, C), l(f)
                    },
                    ze = function(f) {
                        var c = f.target,
                            g = c.selectionStart,
                            N = c.selectionEnd,
                            E = c.value;
                        if (E === void 0 && (E = ""), g === N) {
                            var C = G(E, g);
                            C !== g && T(c, C, E)
                        }
                        S(f)
                    },
                    Qe = function(f) {
                        f.persist && f.persist();
                        var c = f.target;
                        x.current = c, R.current.focusTimeout = setTimeout(function() {
                            var g = c.selectionStart,
                                N = c.selectionEnd,
                                E = c.value;
                            E === void 0 && (E = "");
                            var C = G(E, g);
                            C !== g && !(g === 0 && N === E.length) && T(c, C, E), s(f)
                        }, 0)
                    },
                    Xe = function(f) {
                        x.current = null, clearTimeout(R.current.focusTimeout), clearTimeout(R.current.setCaretTimeout), m(f)
                    },
                    Ye = le && _e() ? "numeric" : void 0,
                    Oe = Object.assign({
                        inputMode: Ye
                    }, M, {
                        type: t,
                        value: F,
                        onChange: Ze,
                        onKeyDown: Je,
                        onMouseUp: ze,
                        onFocus: Qe,
                        onBlur: Xe
                    });
                if (r === "text") return a ? w.createElement(w.Fragment, null, a(F, M) || null) : w.createElement("span", Object.assign({}, M, {
                    ref: i
                }), F);
                if (n) {
                    var qe = n;
                    return w.createElement(qe, Object.assign({}, Oe, {
                        ref: i
                    }))
                }
                return w.createElement("input", Object.assign({}, Oe, {
                    ref: i
                }))
            }

            function ue(e, t) {
                var r = t.decimalScale,
                    n = t.fixedDecimalScale,
                    a = t.prefix;
                a === void 0 && (a = "");
                var i = t.suffix;
                i === void 0 && (i = "");
                var u = t.allowNegative;
                u === void 0 && (u = !0);
                var d = t.thousandsGroupStyle;
                if (d === void 0 && (d = "thousand"), e === "" || e === "-") return e;
                var h = ee(t),
                    p = h.thousandSeparator,
                    v = h.decimalSeparator,
                    y = r !== 0 && e.indexOf(".") !== -1 || r && n,
                    o = ie(e, u),
                    l = o.beforeDecimal,
                    S = o.afterDecimal,
                    s = o.addNegation;
                return r !== void 0 && (S = se(S, r, !!n)), p && (l = Be(l, p, d)), a && (l = a + l), i && (S = S + i), s && (l = "-" + l), e = l + (y && v || "") + S, e
            }

            function ee(e) {
                var t = e.decimalSeparator;
                t === void 0 && (t = ".");
                var r = e.thousandSeparator,
                    n = e.allowedDecimalSeparators;
                return r === !0 && (r = ","), n || (n = [t, "."]), {
                    decimalSeparator: t,
                    thousandSeparator: r,
                    allowedDecimalSeparators: n
                }
            }

            function je(e, t) {
                e === void 0 && (e = "");
                var r = new RegExp("(-)"),
                    n = new RegExp("(-)(.)*(-)"),
                    a = r.test(e),
                    i = n.test(e);
                return e = e.replace(/-/g, ""), a && !i && t && (e = "-" + e), e
            }

            function Ke(e, t) {
                return new RegExp("(^-)|[0-9]|" + de(e), t ? "g" : void 0)
            }

            function be(e, t, r) {
                t === void 0 && (t = Se(e));
                var n = r.allowNegative;
                n === void 0 && (n = !0);
                var a = r.prefix;
                a === void 0 && (a = "");
                var i = r.suffix;
                i === void 0 && (i = "");
                var u = r.decimalScale,
                    d = t.from,
                    h = t.to,
                    p = h.start,
                    v = h.end,
                    y = ee(r),
                    o = y.allowedDecimalSeparators,
                    l = y.decimalSeparator,
                    S = e[v] === l;
                if (v - p === 1 && o.indexOf(e[p]) !== -1) {
                    var s = u === 0 ? "" : l;
                    e = e.substring(0, p) + s + e.substring(p + 1, e.length)
                }
                var m = !1;
                a.startsWith("-") ? m = e.startsWith("--") : i.startsWith("-") && e.length === i.length ? m = !1 : e[0] === "-" && (m = !0), m && (e = e.substring(1), p -= 1, v -= 1);
                var D = 0;
                e.startsWith(a) ? D += a.length : p < a.length && (D = p), e = e.substring(D), v -= D;
                var O = e.length,
                    B = e.length - i.length;
                e.endsWith(i) ? O = B : v > e.length - i.length && (O = v), e = e.substring(0, O), e = je(m ? "-" + e : e, n), e = (e.match(Ke(l, !0)) || []).join("");
                var M = e.indexOf(l);
                e = e.replace(new RegExp(de(l), "g"), function(te, U) {
                    return U === M ? "." : ""
                });
                var K = ie(e, n),
                    W = K.beforeDecimal,
                    F = K.afterDecimal,
                    z = K.addNegation;
                return h.end - h.start < d.end - d.start && W === "" && S && !parseFloat(F) && (e = z ? "-" : ""), e
            }

            function xe(e, t) {
                var r = t.prefix;
                r === void 0 && (r = "");
                var n = t.suffix;
                n === void 0 && (n = "");
                var a = Array.from({
                        length: e.length + 1
                    }).map(function() {
                        return !0
                    }),
                    i = e[0] === "-";
                a.fill(!1, 0, r.length + (i ? 1 : 0));
                var u = e.length;
                return a.fill(!1, u - n.length + 1, u + 1), a
            }

            function $e(e) {
                var t = ee(e),
                    r = t.thousandSeparator,
                    n = t.decimalSeparator;
                if (r === n) throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + r + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + n + ` (default value for decimalSeparator is .)
     `)
            }

            function Ce(e) {
                var t = e.decimalSeparator;
                t === void 0 && (t = ".");
                var r = e.allowedDecimalSeparators,
                    n = e.thousandsGroupStyle,
                    a = e.suffix,
                    i = e.allowNegative,
                    u = e.allowLeadingZeros,
                    d = e.onKeyDown;
                d === void 0 && (d = j);
                var h = e.onBlur;
                h === void 0 && (h = j);
                var p = e.thousandSeparator,
                    v = e.decimalScale,
                    y = e.fixedDecimalScale,
                    o = e.prefix;
                o === void 0 && (o = "");
                var l = e.defaultValue,
                    S = e.value,
                    s = e.valueIsNumericString,
                    m = e.onValueChange,
                    D = I(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
                $e(e);
                var O = function(b) {
                        return ue(b, e)
                    },
                    B = function(b, x) {
                        return be(b, x, e)
                    },
                    M = s;
                X(S) ? X(l) || (M = s != null ? s : typeof l == "number") : M = s != null ? s : typeof S == "number";
                var K = function(b) {
                        return X(b) || ce(b) ? b : (typeof b == "number" && (b = ge(b)), M && typeof v == "number" ? he(b, v, !!y) : b)
                    },
                    W = we(K(S), K(l), !!M, O, B, m),
                    F = W[0],
                    z = F.numAsString,
                    te = F.formattedValue,
                    U = W[1],
                    fe = function(b) {
                        var x = b.target,
                            R = b.key,
                            k = x.selectionStart,
                            ae = x.selectionEnd,
                            T = x.value;
                        if (T === void 0 && (T = ""), k !== ae) {
                            d(b);
                            return
                        }
                        R === "Backspace" && T[0] === "-" && k === o.length + 1 && $(x, 1);
                        var G = ee(e),
                            Y = G.decimalSeparator,
                            Q = G.allowedDecimalSeparators;
                        R === "Backspace" && T[k - 1] === Y && v && y && ($(x, k - 1), b.preventDefault()), Q != null && Q.includes(R) && T[k] === Y && $(x, k + 1);
                        var ne = p === !0 ? "," : p;
                        R === "Backspace" && T[k - 1] === ne && $(x, k - 1), R === "Delete" && T[k] === ne && $(x, k + 1), d(b)
                    },
                    re = function(b) {
                        var x = z;
                        if (x.match(/\d/g) || (x = ""), u || (x = Fe(x)), y && v && (x = he(x, v, y)), x !== z) {
                            var R = ue(x, e);
                            U({
                                formattedValue: R,
                                value: x,
                                floatValue: parseFloat(x)
                            }, {
                                event: b,
                                source: L.event
                            })
                        }
                        h(b)
                    },
                    le = function(b) {
                        return b === t ? !0 : J(b)
                    };
                return Object.assign(Object.assign({}, D), {
                    value: te,
                    valueIsNumericString: !1,
                    isValidInputCharacter: le,
                    onValueChange: U,
                    format: O,
                    removeFormatting: B,
                    getCaretBoundary: function(b) {
                        return xe(b, e)
                    },
                    onKeyDown: fe,
                    onBlur: re
                })
            }

            function Ue(e) {
                var t = Ce(e);
                return w.createElement(oe, Object.assign({}, t))
            }

            function De(e, t) {
                var r = t.format,
                    n = t.allowEmptyFormatting,
                    a = t.mask,
                    i = t.patternChar;
                if (i === void 0 && (i = "#"), e === "" && !n) return "";
                for (var u = 0, d = r.split(""), h = 0, p = r.length; h < p; h++) r[h] === i && (d[h] = e[u] || pe(a, u), u += 1);
                return d.join("")
            }

            function Ne(e, t, r) {
                t === void 0 && (t = Se(e));
                var n = r.format,
                    a = r.patternChar;
                a === void 0 && (a = "#");
                var i = t.from,
                    u = t.to,
                    d = t.lastValue;
                d === void 0 && (d = "");
                var h = function(m) {
                        return n[m] === a
                    },
                    p = function(m, D) {
                        for (var O = "", B = 0; B < m.length; B++) h(D + B) && J(m[B]) && (O += m[B]);
                        return O
                    },
                    v = function(m) {
                        return m.replace(/[^0-9]/g, "")
                    };
                if (!n.match(/\d/)) return v(e);
                if (d === "" && e.length === n.length) {
                    for (var y = "", o = 0; o < e.length; o++)
                        if (h(o)) J(e[o]) && (y += e[o]);
                        else if (e[o] !== n[o]) return v(e);
                    return y
                }
                var l = d.substring(0, i.start),
                    S = e.substring(u.start, u.end),
                    s = d.substring(i.end);
                return "" + p(l, 0) + v(S) + p(s, i.end)
            }

            function Ee(e, t) {
                var r = t.format,
                    n = t.mask,
                    a = t.patternChar;
                a === void 0 && (a = "#");
                var i = Array.from({
                        length: e.length + 1
                    }).map(function() {
                        return !0
                    }),
                    u = 0,
                    d = -1,
                    h = {};
                r.split("").forEach(function(o, l) {
                    var S = void 0;
                    o === a && (u++, S = pe(n, u - 1), d === -1 && e[l] === S && (d = l)), h[l] = S
                });
                for (var p = function(o) {
                        return r[o] === a && e[o] !== h[o]
                    }, v = 0, y = i.length; v < y; v++) i[v] = v === d || p(v) || p(v - 1);
                return i[r.indexOf(a)] = !0, i
            }

            function Ge(e) {
                var t = e.mask;
                if (t) {
                    var r = t === "string" ? t : t.toString();
                    if (r.match(/\d/g)) throw new Error("Mask " + t + " should not contain numeric character;")
                }
            }

            function Ie(e) {
                var t = e.mask,
                    r = e.allowEmptyFormatting,
                    n = e.format,
                    a = e.inputMode;
                a === void 0 && (a = "numeric");
                var i = e.onKeyDown;
                i === void 0 && (i = j);
                var u = e.patternChar;
                u === void 0 && (u = "#");
                var d = I(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar"]);
                Ge(e);
                var h = function(v) {
                        return Ee(v, e)
                    },
                    p = function(v) {
                        var y = v.key,
                            o = v.target,
                            l = o.selectionStart,
                            S = o.selectionEnd,
                            s = o.value;
                        if (l !== S) {
                            i(v);
                            return
                        }
                        var m = l;
                        if (y === "Backspace" || y === "Delete") {
                            var D = "right";
                            if (y === "Backspace") {
                                for (; m > 0 && n[m - 1] !== u;) m--;
                                D = "left"
                            } else {
                                for (var O = n.length; m < O && n[m] !== u;) m++;
                                D = "right"
                            }
                            m = H(s, m, h(s), D)
                        } else n[m] !== u && y !== "ArrowLeft" && y !== "ArrowRight" && (m = H(s, m + 1, h(s), "right"));
                        m !== l && $(o, m), i(v)
                    };
                return Object.assign(Object.assign({}, d), {
                    inputMode: a,
                    format: function(v) {
                        return De(v, e)
                    },
                    removeFormatting: function(v, y) {
                        return Ne(v, y, e)
                    },
                    getCaretBoundary: h,
                    onKeyDown: p
                })
            }

            function We(e) {
                var t = Ie(e);
                return w.createElement(oe, Object.assign({}, t))
            }
        },
        35817: () => {
            function Z() {
                var w = document.createElement("input");
                w.setAttribute("type", "time");
                var I = "not-a-time";
                return w.setAttribute("value", I), w.value !== I
            }
            var V = Z();
            window && (window.supportsTime = V);

            function P(w, I) {
                var L = document.createElement("script");
                L.src = w, L.onload = I, document.head.appendChild(L)
            }
            document.addEventListener("DOMContentLoaded", function() {
                V || P("https://cdn.jsdelivr.net/npm/time-input-polyfill@1.0.11/dist/time-input-polyfill.min.js", function() {
                    var w = [].slice.call(document.querySelectorAll('input[type="time"]'));
                    w.forEach(function(I) {
                        new TimePolyfill(I)
                    })
                })
            })
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/17ade2f18768f76ad4393216d6432182/87642-2c985f8a7dd63c0d77f0-min.en-US.js.map