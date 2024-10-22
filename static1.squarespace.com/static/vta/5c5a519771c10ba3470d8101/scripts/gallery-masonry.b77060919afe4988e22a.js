"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [6197], {
        59067: function(t, e, r) {
            r.r(e), r.d(e, {
                GalleryMasonry: function() {
                    return S
                }
            });
            r(94226);
            var n = r(59440),
                o = r(82e3),
                i = r(22902),
                a = r(62603),
                u = r(52008),
                c = r(75396),
                s = r(68651),
                l = r(67373),
                f = r(63285);

            function p(t) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, p(t)
            }

            function y(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(r), !0).forEach((function(e) {
                        w(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function d(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, O(n.key), n)
                }
            }

            function h(t, e, r) {
                return e = g(e),
                    function(t, e) {
                        if (e && ("object" === p(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, m() ? Reflect.construct(e, r || [], g(t).constructor) : e.apply(t, r))
            }

            function m() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (m = function() {
                    return !!t
                })()
            }

            function g(t) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(t)
            }

            function v(t, e) {
                return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, v(t, e)
            }

            function w(t, e, r) {
                return (e = O(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function O(t) {
                var e = function(t, e) {
                    if ("object" != p(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != p(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == p(e) ? e : e + ""
            }
            var S = function(t) {
                function e(t) {
                    var r;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), w(r = h(this, e), "loadImage", (function(t) {
                        var e = r.props.imageSelector,
                            n = t.querySelector(e);
                        n.onload = function() {
                            t.dataset.loaded = !0
                        }, n.onload()
                    })), w(r, "onLightboxOpen", (function(t) {
                        r.state.isHistoryEnabled && (t.preventDefault(), history.pushState({}, "", t.currentTarget.href))
                    })), w(r, "onResize", (function() {
                        var t = r.getColumnData(r.state.numColumns, r.state.gutter),
                            e = "full-bleed" === r.node.dataset.width;
                        r.packer.layout(b(b({}, t), {}, {
                            shouldApplyGutterToContainerEdge: e
                        })), r.loadImages(r.ref.items)
                    })), w(r, "onItemShow", (function(t) {
                        var e = t.node;
                        e.dataset.show || (e.dataset.show = !0)
                    })), w(r, "removeLightboxElementFromDOM", (function() {
                        if (r.state.lightboxEnabled) {
                            var t = document.querySelector('[data-lightbox-section-id="'.concat(r.sectionId, '"]'));
                            t && t.remove()
                        }
                    })), r.betaFeatureFlags = (0, n.T)(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []);
                    var i = r.props,
                        s = i.listSelector,
                        l = i.itemSelector,
                        p = i.lightboxLinkSelector,
                        y = (0, n.T)(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null),
                        d = {};
                    return t.dataset.props && (d = JSON.parse(t.dataset.props)), r.history = (0, o.J)(), r.node = t, r.sectionId = r.node.dataset.sectionId, r.state = b({
                        design: "masonry",
                        collectionFullUrl: y,
                        isHistoryEnabled: y && r.history,
                        numColumns: 3,
                        gutter: 10,
                        lightboxEnabled: !1,
                        width: "full"
                    }, d), r.ref = {
                        list: r.node.querySelector(s),
                        items: Array.from(r.node.querySelectorAll(l)),
                        lightboxLinks: Array.from(r.node.querySelectorAll(p))
                    }, r.onResize = (0, c.A)(r.onResize, f.X0), r.stagger = new u.A({
                        nodes: r.ref.items,
                        onEnter: r.onItemShow
                    }), r.packer = new a.A(b({
                        container: r.ref.list,
                        nodes: r.ref.items,
                        imageWrapperSelector: ".gallery-masonry-item-wrapper",
                        isReadyClass: "gallery-masonry-list--ready",
                        shouldApplyGutterToContainerEdge: "full-bleed" === r.node.dataset.width
                    }, r.getColumnData(r.state.numColumns, r.state.gutter))), r.node.dataset.lightbox = r.state.lightboxEnabled, r.bindListeners(), r
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
                    }), e && v(t, e)
                }(e, t), r = e, (l = [{
                    key: "loadImages",
                    value: function(t) {
                        t.forEach(this.loadImage)
                    }
                }, {
                    key: "bindListeners",
                    value: function() {
                        var t = this;
                        this.ref.lightboxLinks.forEach((function(e) {
                            e.addEventListener("click", t.onLightboxOpen)
                        })), s.A.on(this.onResize), this.stagger.start(), this.onResize()
                    }
                }, {
                    key: "unbindListeners",
                    value: function() {
                        var t = this;
                        this.ref.lightboxLinks.forEach((function(e) {
                            e.removeEventListener("click", t.onLightboxOpen)
                        })), s.A.off(this.onResize)
                    }
                }, {
                    key: "getColumnData",
                    value: function(t, e) {
                        var r = (0, i._v)(t),
                            n = (0, i.kr)(e);
                        return {
                            columns: r,
                            horizontalGutter: n,
                            verticalGutter: n
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.unbindListeners(), this.removeLightboxElementFromDOM(), this.stagger.destroy(), this.packer.destroy()
                    }
                }]) && d(r.prototype, l), p && d(r, p), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r;
                var r, l, p
            }(l.A);
            w(S, "defaultProps", {
                listSelector: ".gallery-masonry-wrapper",
                itemSelector: ".gallery-masonry-item",
                lightboxLinkSelector: ".gallery-masonry-lightbox-link",
                imageSelector: "img",
                loadedItemClass: "loaded"
            }), e.default = function(t) {
                return new S(t)
            }
        },
        52008: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return d
                }
            });
            r(94226);
            var n = r(67279),
                o = r.n(n),
                i = r(67373),
                a = r(49099);

            function u(t) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, u(t)
            }

            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, b(n.key), n)
                }
            }

            function s(t, e, r) {
                return e = f(e),
                    function(t, e) {
                        if (e && ("object" === u(e) || "function" == typeof e)) return e;
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

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function y(t, e, r) {
                return (e = b(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function b(t) {
                var e = function(t, e) {
                    if ("object" != u(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != u(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == u(e) ? e : e + ""
            }
            var d = function(t) {
                function e(t) {
                    var r;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), y(r = s(this, e, [t]), "onNodeEnter", (function(t) {
                        var e = t.node,
                            n = r.props,
                            o = n.delay,
                            i = n.stagger;
                        e.__staggerEntered || (e.__staggerEntered = !0, e.__staggerTimeout = setTimeout((function() {
                            r.props.onEnter(t)
                        }), o + r.count * i), r.instant || (r.count += 1, r.count = Math.min(r.props.maxCount, r.count), r.countTimeout()))
                    })), r.state = {
                        isActive: !1
                    }, r.count = 0, r.baseTimeout = null, r.instant = !1, r.viewportWatcher = new(o()), r
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
                    }), e && p(t, e)
                }(e, t), r = e, (n = [{
                    key: "start",
                    value: function() {
                        this.state.isActive || (this.setState({
                            isActive: !0
                        }), this.viewportWatcher.addNodes({
                            nodes: this.props.nodes,
                            range: [100, 0],
                            callbacks: {
                                onEnter: this.onNodeEnter
                            }
                        }))
                    }
                }, {
                    key: "countTimeout",
                    value: function() {
                        var t = this;
                        clearTimeout(this.baseTimeout), this.baseTimeout = setTimeout((function() {
                            t.count = 0
                        }), 10)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.viewportWatcher.destroy(), clearTimeout(this.baseTimeout), this.props.nodes.forEach((function(t) {
                            clearTimeout(t.__staggerTimeout)
                        }))
                    }
                }]) && c(r.prototype, n), i && c(r, i), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r;
                var r, n, i
            }(i.A);
            y(d, "defaultProps", {
                delay: 50,
                stagger: 50,
                maxCount: 20,
                nodes: [],
                onEnter: a.l
            })
        },
        82e3: function(t, e, r) {
            r.d(e, {
                J: function() {
                    return u
                }
            });
            r(94226);
            var n = Array.prototype.slice,
                o = function() {
                    var t = n.call(arguments);
                    return function() {
                        for (var e = n.call(arguments), r = t.length - 1; r >= 0; r--) e = [t[r].apply(this, e)];
                        return e[0]
                    }
                },
                i = [],
                a = {
                    executeCallbacks: function() {
                        i.forEach((function(t) {
                            return t()
                        }))
                    },
                    trigger: function() {
                        this.executeCallbacks()
                    },
                    registerCallback: function(t) {
                        t && i.push(t)
                    },
                    removeCallback: function(t) {
                        if (t) {
                            var e = i.indexOf(t);
                            e > -1 && i.splice(e, 1)
                        }
                    },
                    on: function(t) {
                        this.registerCallback(t)
                    },
                    off: function(t) {
                        this.removeCallback(t)
                    }
                };
            window.history && window.history.pushState && (history.change = a, history.pushState = o((function() {
                return history.change.trigger()
            }), history.pushState), history.replaceState = o((function() {
                return history.change.trigger()
            }), history.replaceState), window.addEventListener("popstate", (function() {
                history.change.trigger()
            })));
            var u = function() {
                return window.history && window.history.pushState ? history : null
            }
        }
    }
]);