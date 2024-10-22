"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [2603], {
        62603: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return w
                }
            });
            r(94226);
            var n = r(67373),
                i = r(66367),
                o = r(22902);

            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return u(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function c(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(t, e, r) {
                return e = f(e),
                    function(t, e) {
                        if (e && ("object" === y(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, l() ? Reflect.construct(e, r || [], f(t).constructor) : e.apply(t, r))
            }

            function l() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (l = function() {
                    return !!t
                })()
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function h(t, e) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, h(t, e)
            }

            function p(t, e, r) {
                return (e = b(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function y(t) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, y(t)
            }

            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, b(n.key), n)
                }
            }

            function g(t, e, r) {
                return e && d(t.prototype, e), r && d(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function b(t) {
                var e = function(t, e) {
                    if ("object" != y(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != y(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == y(e) ? e : e + ""
            }
            var v = function() {
                    return g((function t(e) {
                        var r = e.node,
                            n = e.imgWrapper,
                            i = e.img,
                            a = e.autoFitImage;
                        m(this, t), this.node = r, this.imageWrapper = n, this.lightboxLink = null == n ? void 0 : n.querySelector("a"), this.image = i, this.node.style.position = "absolute", this.autoFitImage = a, a && this.image && (this.imageAspectRatio = (0, o.P6)(this.image))
                    }), [{
                        key: "applyAspectRatio",
                        value: function(t) {
                            var e = t.aspectRatio,
                                r = (t.x, t.y, t.width),
                                n = t.height;
                            if (e <= 0) return (0, i.h)(this.image, {
                                width: "100%",
                                top: "0%",
                                left: "0%",
                                transform: "none"
                            }), void(this.imageWrapper.style.height = "auto");
                            var o = Math.ceil(r * (1 / e));
                            if (n / o < 1) {
                                var a = o / n,
                                    u = Math.round(r * a);
                                (0, i.h)(this.image, {
                                    width: "".concat(u, "px"),
                                    height: "".concat(o, "px")
                                })
                            }
                            this.imageWrapper.style.height = "".concat(o, "px"), this.imageWrapper.style.overflow = "hidden", this.lightboxLink && (this.lightboxLink.style.height = "100%")
                        }
                    }, {
                        key: "setPosition",
                        value: function(t, e, r) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                            if (n = this.imageAspectRatio ? this.imageAspectRatio : n, (0, i.h)(this.node, {
                                    width: "".concat(Math.round(r), "px"),
                                    transform: "translate3d(".concat(Math.round(t), "px, ").concat(Math.round(e), "px, 0)")
                                }), !this.autoFitImage || !this.image) return this.node.clientHeight;
                            var o = Math.round(1 / this.imageAspectRatio * r);
                            return this.image.style.width = "100%", this.image.style.height = "".concat(o, "px"), this.imageWrapper && this.applyAspectRatio({
                                aspectRatio: n,
                                x: t,
                                y: e,
                                width: r,
                                height: o
                            }), this.node.clientHeight
                        }
                    }, {
                        key: "clearPosition",
                        value: function() {
                            this.node.style.width = "", this.node.style.transform = "", this.autoFitImage && this.image && this.imageWrapper && (this.image.style.width = "", this.image.style.height = "", this.imageWrapper.style.top = "", this.imageWrapper.style.left = "", this.imageWrapper.style.transform = "")
                        }
                    }])
                }(),
                w = function(t) {
                    function e(t) {
                        var r;
                        m(this, e);
                        var n = (r = s(this, e, [t])).props,
                            i = n.container,
                            o = n.nodes,
                            a = n.gutter,
                            u = n.columns,
                            c = n.isReadyClass,
                            l = n.aspectRatio,
                            f = n.horizontalGutter,
                            h = n.verticalGutter;
                        return r.state = {
                            columns: u,
                            aspectRatio: l,
                            horizontalGutter: isNaN(f) ? a : f,
                            verticalGutter: isNaN(h) ? a : h,
                            shouldApplyGutterToContainerEdge: !1
                        }, r.nodes = r.getNodes(o), r.len = r.nodes.length, r.layout(), setTimeout((function() {
                            i.classList.add(c)
                        }), 0), r
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && h(t, e)
                    }(e, t), g(e, [{
                        key: "getNodes",
                        value: function(t) {
                            var e = this.props,
                                r = e.imageWrapperSelector,
                                n = e.imageSelector,
                                i = e.autoFitImage,
                                o = e.aspectRatio;
                            return t.map((function(t) {
                                var e = t.querySelector(r),
                                    a = t.querySelectorAll(n)[0];
                                return new v({
                                    node: t,
                                    imgWrapper: e,
                                    img: a,
                                    autoFitImage: i,
                                    aspectRatio: o
                                })
                            }))
                        }
                    }, {
                        key: "setStyles",
                        value: function() {
                            var t, e, r, n = this.props.container,
                                i = this.state,
                                o = i.columns,
                                u = i.horizontalGutter,
                                c = i.verticalGutter,
                                s = i.aspectRatio,
                                l = i.shouldApplyGutterToContainerEdge,
                                f = (t = o, "function" == typeof(e = 0) ? new Array(t).fill("").map(e) : new Array(t).fill(e)),
                                h = n.clientWidth,
                                p = h / 100,
                                y = u / 20 * p,
                                m = c / 20 * p,
                                d = 0,
                                g = (h + y) / o,
                                b = g - y;
                            l && (d = y, b = (g = (h - y) / o) - y);
                            for (var v = 0; v < this.len; v += 1) {
                                var w = (r = f).indexOf(Math.min.apply(Math, a(r))),
                                    O = d + g * w,
                                    S = this.nodes[v].setPosition(O, f[w], b, s);
                                f[w] += S + m
                            }
                            n.style.height = "".concat(f[function(t) {
                                return t.indexOf(Math.max.apply(Math, a(t)))
                            }(f)] - m, "px")
                        }
                    }, {
                        key: "clearStyles",
                        value: function() {
                            this.props.container.style.height = "";
                            for (var t = 0; t < this.len; t += 1) this.nodes[t].clearPosition()
                        }
                    }, {
                        key: "layout",
                        value: function(t) {
                            t && this.setState(function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? c(Object(r), !0).forEach((function(e) {
                                        p(t, e, r[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                    }))
                                }
                                return t
                            }({}, t)), this.setStyles()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.clearStyles()
                        }
                    }])
                }(n.A);
            p(w, "defaultProps", {
                container: document.createElement("div"),
                nodes: [],
                autoFitImage: !0,
                imageWrapperSelector: null,
                imageSelector: "img",
                aspectRatio: -1,
                gutter: 0,
                columns: 2,
                isReadyClass: "masonry-ready",
                horizontalGutter: void 0,
                verticalGutter: void 0
            })
        },
        66367: function(t, e, r) {
            r.d(e, {
                h: function() {
                    return i
                },
                v: function() {
                    return o
                }
            });
            r(94226);

            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }
            var i = function(t, e) {
                    return Object.keys(e).forEach((function(r) {
                        t.style[r] = e[r]
                    })), t
                },
                o = function(t) {
                    return "object" === n(t) && null !== t && 1 === t.nodeType
                }
        },
        22902: function(t, e, r) {
            r.d(e, {
                P6: function() {
                    return a
                },
                TT: function() {
                    return l
                },
                _v: function() {
                    return c
                },
                kr: function() {
                    return u
                },
                pG: function() {
                    return s
                }
            });
            r(94226), r(68444);
            var n = r(63285);

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, i, o, a, u = [],
                            c = !0,
                            s = !1;
                        try {
                            if (o = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
                        } catch (t) {
                            s = !0, i = t
                        } finally {
                            try {
                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (s) throw i
                            }
                        }
                        return u
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return o(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var a = function(t) {
                    if (!t) return 1;
                    if (!t.dataset.imageDimensions) {
                        var e = t.getAttribute("width"),
                            r = t.getAttribute("height");
                        return e && r ? +e / +r : 1
                    }
                    var n = t.dataset.imageDimensions.split("x");
                    return n[0] && n[1] ? +n[0] / +n[1] : void 0
                },
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
                    if (t <= e) return t;
                    var r = window.innerWidth;
                    return r <= n.fi.sm ? Math.max(e, Math.round(.25 * t)) : r <= n.fi.md ? Math.max(e, Math.round(.5 * t)) : r <= n.fi.lg ? Math.max(e, Math.round(.75 * t)) : t
                },
                c = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        e = window.innerWidth,
                        r = Math.max(1, t);
                    return 1 === r ? r : e <= n.fi.sm ? 2 : e <= n.fi.md ? Math.max(Math.ceil(.5 * r), 2) : e <= n.fi.lg ? Math.ceil(.75 * r) : r
                },
                s = function(t) {
                    var e = 0,
                        r = 0,
                        n = {
                            width: e,
                            height: r
                        };
                    if (!t) return n;
                    if (t.dataset.imageDimensions) {
                        var o = i(t.dataset.imageDimensions.split("x"), 2);
                        e = o[0], r = o[1]
                    } else e = t.getAttribute("width"), r = t.getAttribute("height");
                    return e && r ? {
                        width: +e,
                        height: +r
                    } : n
                },
                l = function(t) {
                    var e = {
                        x: .5,
                        y: .5
                    };
                    if (!t) return e;
                    if (!t.dataset.imageFocalPoint) return e;
                    var r = i(t.dataset.imageFocalPoint.split(","), 2),
                        n = r[0],
                        o = r[1];
                    return n && o ? {
                        x: +n,
                        y: +o
                    } : e
                }
        }
    }
]);