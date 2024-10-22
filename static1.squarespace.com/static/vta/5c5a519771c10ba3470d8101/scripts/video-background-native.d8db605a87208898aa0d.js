(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [1731, 5034], {
        66755: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return l
                }
            });
            r(94226);
            var e = r(51318),
                o = r(21198),
                i = ["none", "blur", "brightness", "contrast", "invert", "opacity", "saturate", "sepia", "drop-shadow", "grayscale", "hue-rotate"],
                c = {
                    blur: {
                        modifier: function(t) {
                            return .3 * t
                        },
                        unit: "px"
                    },
                    brightness: {
                        modifier: function(t) {
                            return .009 * t + .1
                        },
                        unit: ""
                    },
                    contrast: {
                        modifier: function(t) {
                            return .4 * t + 80
                        },
                        unit: "%"
                    },
                    grayscale: {
                        modifier: function(t) {
                            return t
                        },
                        unit: "%"
                    },
                    "hue-rotate": {
                        modifier: function(t) {
                            return 3.6 * t
                        },
                        unit: "deg"
                    },
                    invert: {
                        modifier: function(t) {
                            return 1
                        },
                        unit: ""
                    },
                    opacity: {
                        modifier: function(t) {
                            return t
                        },
                        unit: "%"
                    },
                    saturate: {
                        modifier: function(t) {
                            return 2 * t
                        },
                        unit: "%"
                    },
                    sepia: {
                        modifier: function(t) {
                            return t
                        },
                        unit: "%"
                    }
                },
                u = function(t, n, r) {
                    var e = i[n - 1];
                    if (e && "none" !== e) {
                        var o = t.style,
                            u = function(t, n) {
                                var r = c[t].modifier(n),
                                    e = c[t].unit;
                                return "".concat(t, "(").concat(r).concat(e, ")")
                            }(e, r),
                            a = "blur" === e;
                        o.webkitFilter = a ? "" : u, o.filter = a ? "" : u, t.classList.toggle("filter-blur", a), Array.prototype.slice.call(t.children).forEach((function(t) {
                            t.style.webkitFilter = a ? u : "", t.style.filter = a ? u : ""
                        }))
                    }
                },
                a = r(58513),
                f = "sqs-video-background-native",
                s = ".".concat(f),
                l = function(t) {
                    var n = t.querySelector(s),
                        r = n.querySelector("".concat(s, "__fallback-image")),
                        i = n.querySelector("".concat(s, "__video-player")),
                        c = function(t) {
                            var n = function(n) {
                                return t.getAttribute("data-config-".concat(n))
                            };
                            return {
                                nativeVideo: JSON.parse(n("native-video")),
                                playbackSpeed: Number(n("playback-speed")),
                                filter: Number(n("filter")),
                                filterStrength: Number(n("filter-strength"))
                            }
                        }(n),
                        l = c.nativeVideo,
                        d = c.playbackSpeed,
                        y = c.filter,
                        b = c.filterStrength;
                    u(n, y, b);
                    var p, m = (p = {
                        squarespaceContext: window.Static.SQUARESPACE_CONTEXT,
                        videoAssetDetails: l,
                        assetDestination: "page-section-background-video",
                        contentItemId: l.id
                    }, new e.L9(i, {
                        src: (0, e.yo)(l),
                        environment: (0, e.uc)(),
                        context: p,
                        options: {
                            language: window.Static.SQUARESPACE_CONTEXT.website.language,
                            speed: d,
                            muted: !0,
                            clickToPlay: !1,
                            autoPlay: !0,
                            loop: !0,
                            fullscreen: !1,
                            keyboard: !1,
                            storage: !1,
                            controls: e.Jf.None,
                            performanceAnalytics: (0, o.U)("mux-data-section-background-video")
                        },
                        events: {
                            onPlaying: function() {
                                return function(t) {
                                    t && t.classList.add("".concat(f, "__fallback-image--hidden"))
                                }(r)
                            }
                        }
                    }));
                    return {
                        sectionWillChange: function(t, n) {
                            return 0 === (0, a.A)(t.video, n.video).length
                        },
                        destroy: function() {
                            m && m.destroy()
                        }
                    }
                }
        },
        58513: function(t, n, r) {
            "use strict";
            r.d(n, {
                A: function() {
                    return a
                }
            });
            r(94226);

            function e(t) {
                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, e(t)
            }
            var o = function t(n, r) {
                if (n === r) return !0;
                if (e(n) !== e(r) || "object" !== e(n) || null === n || null === r) return !1;
                var o = Object.keys(n),
                    i = Object.keys(r);
                if (o.length !== i.length || o.find((function(t) {
                        return i.indexOf(t) < 0
                    }))) return !1;
                for (var c in n)
                    if (!t(n[c], r[c])) return !1;
                return !0
            };

            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, i(t)
            }

            function c(t) {
                return t && t.constructor && "Object" === t.constructor.name
            }

            function u(t) {
                var n = t.newPointer,
                    r = t.oldPointer,
                    e = new Set;
                return n.forEach((function(t) {
                    r.includes(t) || e.add(t)
                })), Array.isArray(r) && r.forEach((function(t) {
                    n.includes(t) || e.add(t)
                })), Array.from(e)
            }
            var a = function t(n, r) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if ("object" !== i(n) || "object" !== i(r)) throw new Error("".concat(t.name, " parameters must be Arrays or Objects, received: ").concat(n, " and ").concat(r));
                if (!o(n, r)) {
                    if (Array.isArray(n) && Array.isArray(r)) return u({
                        newPointer: n,
                        oldPointer: r
                    });
                    var a = Object.keys(n).map((function(i) {
                        var a = n[i],
                            f = r[i];
                        if (! function(t, n) {
                                return !t && !n || Array.isArray(t) && Array.isArray(n) || c(t) && c(n) || "string" == typeof t && "string" == typeof n || !isNaN(t) && !isNaN(n)
                            }(a, f)) return "".concat(e).concat(i);
                        if (c(a) && c(f)) return t(a, f, "".concat(e).concat(i, "."));
                        if (Array.isArray(a)) {
                            if (o(a, f)) return null;
                            var s = u({
                                newPointer: a,
                                oldPointer: f
                            });
                            return "".concat(e).concat(i, "[").concat(s, "]")
                        }
                        return o(a, f) ? null : "".concat(e).concat(i)
                    })).filter((function(t) {
                        return !!t
                    }));
                    return u({
                        newPointer: Object.keys(n),
                        oldPointer: Object.keys(r)
                    }).forEach((function(t) {
                        a.includes("".concat(e).concat(t)) || a.push("".concat(e).concat(t))
                    })), a.flat()
                }
                return []
            }
        },
        21198: function(t, n, r) {
            "use strict";
            r.d(n, {
                U: function() {
                    return o
                },
                w: function() {
                    return i
                }
            });
            r(94226);
            var e = r(59440),
                o = function(t) {
                    return (0, e.T)(window, "Static.SQUARESPACE_CONTEXT.videoAssetsFeatureFlags", []).includes(t)
                },
                i = function(t) {
                    return (0, e.T)(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []).includes(t)
                }
        },
        42634: function() {}
    }
]);