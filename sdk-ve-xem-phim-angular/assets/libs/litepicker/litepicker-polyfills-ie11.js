/*!
 * 
 *     Litepicker polyfills ie11 v0.0.1 (https://github.com/wakirin/Litepicker-polyfills-ie11)
 *     Package: litepicker-polyfills-ie11 (https://www.npmjs.com/package/litepicker-polyfills-ie11)
 *     License: MIT (https://github.com/wakirin/Litepicker-polyfills-ie11/blob/master/LICENCE.md)
 *     Copyright 2019-2021 Rinat G.
 *     
 *     Hash: 9eade912101059ca519c
 *     Generated on: 1611142500943
 *     
 */
! function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var r = t();
        for (var n in r) ("object" == typeof exports ? exports : e)[n] = r[n]
    }
}(window, (function () {
    return function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function (t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 0)
    }([function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(1), Object.entries || (Object.entries = function (e) {
            for (var t = Object.keys(e), r = t.length, n = new Array(r); r;) n[r -= 1] = [t[r], e[t[r]]];
            return n
        }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
            var t = this;
            do {
                if (t.matches(e)) return t;
                t = t.parentElement || t.parentNode
            } while (null !== t && 1 === t.nodeType);
            return null
        }), String.prototype.includes || (String.prototype.includes = function (e, t) {
            if (e instanceof RegExp) throw TypeError("first argument must not be a RegExp");
            return void 0 === t && (t = 0), -1 !== this.indexOf(e, t)
        }), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
            e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                    var e = Array.prototype.slice.call(arguments),
                        t = document.createDocumentFragment();
                    e.forEach((function (e) {
                        var r = e instanceof Node;
                        t.appendChild(r ? e : document.createTextNode(String(e)))
                    })), this.insertBefore(t, this.firstChild)
                }
            })
        }))
    }, function (e, t) {
        /*! ie11CustomProperties.js v4.1.0 | MIT License | https://git.io/fjXMN */
        ! function () {
            "use strict";
            var e = document.createElement("i");
            if (e.style.setProperty("--x", "y"), "y" !== e.style.getPropertyValue("--x") && e.msMatchesSelector) {
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector);
                var t, r = [],
                    n = document,
                    o = !1;
                document.addEventListener("DOMContentLoaded", (function () {
                    o = !0
                })), "classList" in Element.prototype || V("classList", HTMLElement.prototype, Element.prototype), "innerHTML" in Element.prototype || V("innerHTML", HTMLElement.prototype, Element.prototype), "runtimeStyle" in Element.prototype || V("runtimeStyle", HTMLElement.prototype, Element.prototype), "sheet" in SVGStyleElement.prototype || Object.defineProperty(SVGStyleElement.prototype, "sheet", {
                    get: function () {
                        for (var e, t = document.styleSheets, r = 0; e = t[r++];)
                            if (e.ownerNode === this) return e
                    }
                });
                var i = {},
                    s = new Set,
                    c = !1,
                    l = !1,
                    u = /([\s{;])(--([A-Za-z0-9-_]*)\s*:([^;!}{]+)(!important)?)(?=\s*([;}]|$))/g,
                    a = /([{;]\s*)([A-Za-z0-9-_]+\s*:[^;}{]*var\([^!;}{]+)(!important)?(?=\s*([;}$]|$))/g,
                    p = /-ieVar-([^:]+):/g,
                    f = /-ie-([^};]+)/g,
                    d = /:(hover|active|focus|target|visited|link|:before|:after|:first-letter|:first-line)/;
                O("style", H), O('link[rel="stylesheet"]', H), O("[ie-style]", (function (e) {
                    var t = k("{" + e.getAttribute("ie-style")).substr(1);
                    e.style.cssText += ";" + t;
                    var r = B(e.style);
                    r.getters && N(e, r.getters, "%styleAttr"), r.setters && F(e, r.setters)
                }));
                var m = {
                    hover: {
                        on: "mouseenter",
                        off: "mouseleave"
                    },
                    focus: {
                        on: "focusin",
                        off: "focusout"
                    },
                    active: {
                        on: "CSSActivate",
                        off: "CSSDeactivate"
                    }
                },
                    y = null;
                document.addEventListener("mousedown", (function (e) {
                    setTimeout((function () {
                        if (e.target === document.activeElement) {
                            var t = document.createEvent("Event");
                            t.initEvent("CSSActivate", !0, !0), (y = e.target).dispatchEvent(t)
                        }
                    }))
                })), document.addEventListener("mouseup", (function () {
                    if (y) {
                        var e = document.createEvent("Event");
                        e.initEvent("CSSDeactivate", !0, !0), y.dispatchEvent(e), y = null
                    }
                }));
                var v = 0,
                    h = new MutationObserver((function (e) {
                        if (!l)
                            for (var t, r = 0; t = e[r++];) "iecp-needed" !== t.attributeName && W(t.target)
                    }));
                setTimeout((function () {
                    h.observe(document, {
                        attributes: !0,
                        subtree: !0
                    })
                }));
                var E = location.hash;
                addEventListener("hashchange", (function (e) {
                    var t = document.getElementById(location.hash.substr(1));
                    if (t) {
                        var r = document.getElementById(E.substr(1));
                        W(t), W(r)
                    } else W(document);
                    E = location.hash
                }));
                var b = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "style"),
                    S = b.get;
                b.get = function () {
                    const e = S.call(this);
                    return e.owningElement = this, e
                }, Object.defineProperty(HTMLElement.prototype, "style", b);
                var g = getComputedStyle;
                window.getComputedStyle = function (e) {
                    var t = g.apply(this, arguments);
                    return t.computedFor = e, t
                };
                var P = CSSStyleDeclaration.prototype,
                    C = P.getPropertyValue;
                P.getPropertyValue = function (e) {
                    if (this.lastPropertyServedBy = !1, "-" !== (e = e.trim())[0] || "-" !== e[1]) return C.apply(this, arguments);
                    const t = e.substr(2),
                        r = "-ie-" + t,
                        n = "-ie-❗" + t;
                    let o = this[n] || this[r];
                    if (this.computedFor) {
                        if (void 0 === o || T[o]) {
                            if (T[o] || !w[e] || w[e].inherits) {
                                let t = this.computedFor.parentNode;
                                for (; 1 === t.nodeType;) {
                                    if (t.ieCP_setters && t.ieCP_setters[e]) {
                                        var i = getComputedStyle(t),
                                            s = i[n] || i[r];
                                        if (void 0 !== s) {
                                            o = J(this, s), this.lastPropertyServedBy = t;
                                            break
                                        }
                                    }
                                    t = t.parentNode
                                }
                            }
                        } else o = J(this, o), this.lastPropertyServedBy = this.computedFor;
                        if ("initial" === o) return ""
                    }
                    return void 0 === o && w[e] && (o = w[e].initialValue), void 0 === o ? "" : o
                };
                var T = {
                    inherit: 1,
                    revert: 1,
                    unset: 1
                },
                    _ = P.setProperty;
                P.setProperty = function (e, t, r) {
                    if ("-" !== e[0] || "-" !== e[1]) return _.apply(this, arguments);
                    const n = this.owningElement;
                    n && (n.ieCP_setters || (n.ieCP_setters = {}), n.ieCP_setters[e] = 1), e = "-ie-" + ("important" === r ? "❗" : "") + e.substr(2), this.cssText += "; " + e + ":" + t + ";", n && W(n)
                }, window.CSS || (window.CSS = {});
                var w = {};
                CSS.registerProperty = function (e) {
                    w[e.name] = e
                }
            }

            function M(e, t) {
                try {
                    return e.querySelectorAll(t)
                } catch (e) {
                    return []
                }
            }

            function O(e, o) {
                for (var i, s = {
                    selector: e,
                    callback: o,
                    elements: new WeakMap
                }, c = M(n, s.selector), l = 0; i = c[l++];) s.elements.set(i, !0), s.callback.call(i, i);
                r.push(s), t || (t = new MutationObserver(A)).observe(n, {
                    childList: !0,
                    subtree: !0
                }), L(s)
            }

            function L(e, t) {
                var r, i = 0,
                    s = [];
                try {
                    t && t.matches(e.selector) && s.push(t)
                } catch (e) { }
                for (o && Array.prototype.push.apply(s, M(t || n, e.selector)); r = s[i++];) e.elements.has(r) || (e.elements.set(r, !0), e.callback.call(r, r))
            }

            function j(e) {
                for (var t, n = 0; t = r[n++];) L(t, e)
            }

            function A(e) {
                for (var t, r, n, o, i = 0; r = e[i++];)
                    for (n = r.addedNodes, t = 0; o = n[t++];) 1 === o.nodeType && j(o)
            }

            function V(e, t, r) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                Object.defineProperty(r, e, n)
            }

            function H(e) {
                if (!e.ieCP_polyfilled && !e.ieCP_elementSheet && e.sheet) {
                    if (e.href) return t = e.href, r = function (t) {
                        var r = k(t);
                        t !== r && D(e, r)
                    }, (n = new XMLHttpRequest).open("GET", t), n.overrideMimeType("text/css"), n.onload = function () {
                        n.status >= 200 && n.status < 400 && r(n.responseText)
                    }, void n.send();
                    var t, r, n, o = e.innerHTML,
                        i = k(o);
                    o !== i && D(e, i)
                }
            }

            function k(e) {
                return e.replace(u, (function (e, t, r, n, o, i) {
                    return t + "-ie-" + (i ? "❗" : "") + n + ":" + o
                })).replace(a, (function (e, t, r, n) {
                    return t + "-ieVar-" + (n ? "❗" : "") + r + "; " + r
                }))
            }

            function B(e) {
                e["z-index"] === e && x();
                const t = e.cssText;
                var r, n, o = t.match(p);
                if (o) {
                    var s = [];
                    for (r = 0; n = o[r++];) {
                        let t = n.slice(7, -1);
                        "❗" === t[0] && (t = t.substr(1)), s.push(t), i[t] || (i[t] = []), i[t].push(e)
                    }
                }
                var c = t.match(f);
                if (c) {
                    var l = {};
                    for (r = 0; n = c[r++];) {
                        let e = n.substr(4).split(":"),
                            t = e[0],
                            r = e[1];
                        "❗" === t[0] && (t = t.substr(1)), l[t] = r
                    }
                }
                return {
                    getters: s,
                    setters: l
                }
            }

            function D(e, t) {
                e.sheet.cssText = t, e.ieCP_polyfilled = !0;
                for (var r, n = e.sheet.rules, o = 0; r = n[o++];) {
                    const e = B(r.style);
                    e.getters && q(r.selectorText, e.getters), e.setters && R(r.selectorText, e.setters);
                    const t = r.parentRule && r.parentRule.media && r.parentRule.media.mediaText;
                    t && (e.getters || e.setters) && matchMedia(t).addListener((function () {
                        W(document.documentElement)
                    }))
                }
                z()
            }

            function q(e, t) {
                G(e), O($(e), (function (r) {
                    N(r, t, e), I(r)
                }))
            }

            function N(e, t, r) {
                var n, o, i = 0;
                const s = r.split(",");
                for (e.setAttribute("iecp-needed", !0), e.ieCPSelectors || (e.ieCPSelectors = {}); n = t[i++];)
                    for (o = 0; r = s[o++];) {
                        const t = r.trim().split("::");
                        e.ieCPSelectors[n] || (e.ieCPSelectors[n] = []), e.ieCPSelectors[n].push({
                            selector: t[0],
                            pseudo: t[1] ? "::" + t[1] : ""
                        })
                    }
            }

            function R(e, t) {
                G(e), O($(e), (function (e) {
                    F(e, t)
                }))
            }

            function F(e, t) {
                for (var r in e.ieCP_setters || (e.ieCP_setters = {}), t) e.ieCP_setters["--" + r] = 1;
                W(e)
            }

            function z() {
                for (var e in i) {
                    let o = i[e];
                    for (var t, r = 0; t = o[r++];)
                        if (!t.owningElement) {
                            var n = t["-ieVar-" + e];
                            if (n && "" !== (n = J(getComputedStyle(document.documentElement), n))) try {
                                t[e] = n
                            } catch (e) { }
                        }
                }
            }

            function G(e) {
                for (var t in e = e.split(",")[0], m) {
                    var r = e.split(":" + t);
                    if (r.length > 1) {
                        var n = r[1].match(/^[^\s]*/);
                        let e = $(r[0] + n);
                        const o = m[t];
                        O(e, (function (e) {
                            e.addEventListener(o.on, X), e.addEventListener(o.off, X)
                        }))
                    }
                }
            }

            function $(e) {
                return e.replace(d, "").replace(":not()", "")
            }

            function I(e) {
                s.add(e), c || (c = !0, requestAnimationFrame((function () {
                    c = !1, l = !0, s.forEach(Z), s.clear(), setTimeout((function () {
                        l = !1
                    }))
                })))
            }

            function Z(e) {
                e.ieCP_unique || (e.ieCP_unique = ++v, e.classList.add("iecp-u" + e.ieCP_unique));
                var t = getComputedStyle(e);
                let r = "";
                for (var n in e.runtimeStyle.cssText = "", e.ieCPSelectors) {
                    var o = t["-ieVar-❗" + n];
                    let u = o || t["-ieVar-" + n];
                    if (u) {
                        var i = {},
                            s = J(t, u, i);
                        o && (s += " !important");
                        for (var c, l = 0; c = e.ieCPSelectors[n][l++];) "%styleAttr" === c.selector && (e.style[n] = s), (o || !1 === i.allByRoot) && (c.pseudo ? r += c.selector + ".iecp-u" + e.ieCP_unique + c.pseudo + "{" + n + ":" + s + "}\n" : e.runtimeStyle[n] = s)
                    }
                } ! function (e, t) {
                    if (!e.ieCP_styleEl && t) {
                        const t = document.createElement("style");
                        t.ieCP_elementSheet = 1, document.head.appendChild(t), e.ieCP_styleEl = t
                    }
                    e.ieCP_styleEl && (e.ieCP_styleEl.innerHTML = t)
                }(e, r)
            }

            function W(e) {
                if (e) {
                    e === document.documentElement && z();
                    var t = e.querySelectorAll("[iecp-needed]");
                    e.hasAttribute && e.hasAttribute("iecp-needed") && I(e);
                    for (var r, n = 0; r = t[n++];) I(r)
                }
            }

            function X(e) {
                W(e.target)
            }

            function J(e, t, r) {
                return function (e, t) {
                    let r, n, o = 0,
                        i = null,
                        s = 0,
                        c = "",
                        l = 0;
                    for (; r = e[l++];) {
                        if ("(" === r && (++o, null === i && e[l - 4] + e[l - 3] + e[l - 2] === "var" && (i = o, c += e.substring(s, l - 4), s = l), e[l - 5] + e[l - 4] + e[l - 3] + e[l - 2] === "calc" && (n = o)), ")" === r && i === o) {
                            let r, o = e.substring(s, l - 1).trim(),
                                u = o.indexOf(","); - 1 !== u && (r = o.slice(u + 1), o = o.slice(0, u)), c += t(o, r, n), s = l, i = null
                        }
                        ")" === r && (--o, n === o && (n = null))
                    }
                    return c += e.substring(s), c
                }(t, (function (t, n, o) {
                    var i = e.getPropertyValue(t);
                    return o && (i = i.replace(/^calc\(/, "(")), r && e.lastPropertyServedBy !== document.documentElement && (r.allByRoot = !1), "" === i && n && (i = J(e, n, r)), i
                }))
            }
        }()
    }])
}));