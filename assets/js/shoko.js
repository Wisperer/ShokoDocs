if (!function (e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        "use strict";

        function n(e, t) {
            t = t || J;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(e) {
            var t = !!e && "length" in e && e.length,
                n = pe.type(e);
            return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function r(e, t, n) {
            if (pe.isFunction(t)) return pe.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return pe.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (xe.test(t)) return pe.filter(t, e, n);
                t = pe.filter(t, e)
            }
            return pe.grep(e, function (e) {
                return re.call(t, e) > -1 !== n && 1 === e.nodeType
            })
        }

        function o(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function a(e) {
            var t = {};
            return pe.each(e.match(Ne) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function s(e) {
            return e
        }

        function l(e) {
            throw e
        }

        function c(e, t, n) {
            var i;
            try {
                e && pe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && pe.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
            } catch (e) {
                n.call(void 0, e)
            }
        }

        function u() {
            J.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), pe.ready()
        }

        function d() {
            this.expando = pe.expando + d.uid++
        }

        function p(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(je, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : De.test(n) ? JSON.parse(n) : n)
                    } catch (r) {
                    }
                    Le.set(e, t, n)
                } else n = void 0;
            return n
        }

        function f(e, t, n, i) {
            var r, o = 1,
                a = 20,
                s = i ? function () {
                    return i.cur()
                } : function () {
                    return pe.css(e, t, "")
                },
                l = s(),
                c = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                u = (pe.cssNumber[t] || "px" !== c && +l) && Fe.exec(pe.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do o = o || ".5", u /= o, pe.style(e, t, u + c); while (o !== (o = s() / l) && 1 !== o && --a)
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function h(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                r = qe[i];
            return r ? r : (t = n.body.appendChild(n.createElement(i)), r = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), qe[i] = r, r)
        }

        function g(e, t) {
            for (var n, i, r = [], o = 0, a = e.length; a > o; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = Re.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && He(i) && (r[o] = h(i))) : "none" !== n && (r[o] = "none", Re.set(i, "display", n)));
            for (o = 0; a > o; o++) null != r[o] && (e[o].style.display = r[o]);
            return e
        }

        function m(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], n) : n
        }

        function v(e, t) {
            for (var n = 0, i = e.length; i > n; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
        }

        function b(e, t, n, i, r) {
            for (var o, a, s, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; h > f; f++)
                if (o = e[f], o || 0 === o)
                    if ("object" === pe.type(o)) pe.merge(p, o.nodeType ? [o] : o);
                    else if (Ve.test(o)) {
                        for (a = a || d.appendChild(t.createElement("div")), s = (We.exec(o) || ["", ""])[1].toLowerCase(), l = Ge[s] || Ge._default, a.innerHTML = l[1] + pe.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
                        pe.merge(p, a.childNodes), a = d.firstChild, a.textContent = ""
                    } else p.push(t.createTextNode(o));
            for (d.textContent = "", f = 0; o = p[f++];)
                if (i && pe.inArray(o, i) > -1) r && r.push(o);
                else if (c = pe.contains(o.ownerDocument, o), a = m(d.appendChild(o), "script"), c && v(a), n)
                    for (u = 0; o = a[u++];) ze.test(o.type || "") && n.push(o);
            return d
        }

        function y() {
            return !0
        }

        function w() {
            return !1
        }

        function E() {
            try {
                return J.activeElement
            } catch (e) {
            }
        }

        function x(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) x(e, s, n, i, t[s], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = w;
            else if (!r) return e;
            return 1 === o && (a = r, r = function (e) {
                return pe().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = pe.guid++)), e.each(function () {
                pe.event.add(this, t, r, i, n)
            })
        }

        function T(e, t) {
            return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
        }

        function k(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function S(e) {
            var t = tt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function C(e, t) {
            var n, i, r, o, a, s, l, c;
            if (1 === t.nodeType) {
                if (Re.hasData(e) && (o = Re.access(e), a = Re.set(t, o), c = o.events)) {
                    delete a.handle, a.events = {};
                    for (r in c)
                        for (n = 0, i = c[r].length; i > n; n++) pe.event.add(t, r, c[r][n])
                }
                Le.hasData(e) && (s = Le.access(e), l = pe.extend({}, s), Le.set(t, l))
            }
        }

        function A(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function N(e, t, i, r) {
            t = ne.apply([], t);
            var o, a, s, l, c, u, d = 0,
                p = e.length,
                f = p - 1,
                h = t[0],
                g = pe.isFunction(h);
            if (g || p > 1 && "string" == typeof h && !ue.checkClone && et.test(h)) return e.each(function (n) {
                var o = e.eq(n);
                g && (t[0] = h.call(this, n, o.html())), N(o, t, i, r)
            });
            if (p && (o = b(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
                for (s = pe.map(m(o, "script"), k), l = s.length; p > d; d++) c = o, d !== f && (c = pe.clone(c, !0, !0), l && pe.merge(s, m(c, "script"))), i.call(e[d], c, d);
                if (l)
                    for (u = s[s.length - 1].ownerDocument, pe.map(s, S), d = 0; l > d; d++) c = s[d], ze.test(c.type || "") && !Re.access(c, "globalEval") && pe.contains(u, c) && (c.src ? pe._evalUrl && pe._evalUrl(c.src) : n(c.textContent.replace(nt, ""), u))
            }
            return e
        }

        function $(e, t, n) {
            for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || pe.cleanData(m(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && v(m(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function I(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || ot(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), !ue.pixelMarginRight() && rt.test(a) && it.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function P(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function O(e) {
            if (e in ut) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--;)
                if (e = ct[n] + t, e in ut) return e
        }

        function R(e, t, n) {
            var i = Fe.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function L(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += pe.css(e, n + Me[o], !0, r)), i ? ("content" === n && (a -= pe.css(e, "padding" + Me[o], !0, r)), "margin" !== n && (a -= pe.css(e, "border" + Me[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + Me[o], !0, r), "padding" !== n && (a += pe.css(e, "border" + Me[o] + "Width", !0, r)));
            return a
        }

        function D(e, t, n) {
            var i, r = !0,
                o = ot(e),
                a = "border-box" === pe.css(e, "boxSizing", !1, o);
            if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), 0 >= i || null == i) {
                if (i = I(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i)) return i;
                r = a && (ue.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + L(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function j(e, t, n, i, r) {
            return new j.prototype.init(e, t, n, i, r)
        }

        function _() {
            pt && (e.requestAnimationFrame(_), pe.fx.tick())
        }

        function F() {
            return e.setTimeout(function () {
                dt = void 0
            }), dt = pe.now()
        }

        function M(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Me[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function H(e, t, n) {
            for (var i, r = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function B(e, t, n) {
            var i, r, o, a, s, l, c, u, d = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                m = e.nodeType && He(e),
                v = Re.get(e, "fxshow");
            n.queue || (a = pe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, pe.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (i in t)
                if (r = t[i], ft.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[i]) continue;
                        m = !0
                    }
                    f[i] = v && v[i] || pe.style(e, i)
                }
            if (l = !pe.isEmptyObject(t), l || !pe.isEmptyObject(f)) {
                d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = v && v.display, null == c && (c = Re.get(e, "display")), u = pe.css(e, "display"), "none" === u && (c ? u = c : (g([e], !0), c = e.style.display || c, u = pe.css(e, "display"), g([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === pe.css(e, "float") && (l || (p.done(function () {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in f) l || (v ? "hidden" in v && (m = v.hidden) : v = Re.access(e, "fxshow", {
                    display: c
                }), o && (v.hidden = !m), m && g([e], !0), p.done(function () {
                    m || g([e]), Re.remove(e, "fxshow");
                    for (i in f) pe.style(e, i, f[i])
                })), l = H(m ? v[i] : 0, i, p), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function q(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = pe.camelCase(n), r = t[i], o = e[n], pe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = pe.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function U(e, t, n) {
            var i, r, o = 0,
                a = U.prefilters.length,
                s = pe.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var t = dt || F(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, {
                        specialEasing: {},
                        easing: pe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: dt || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (q(u, c.opts.specialEasing); a > o; o++)
                if (i = U.prefilters[o].call(c, e, u, c.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)), i;
            return pe.map(u, H, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), pe.fx.timer(pe.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function W(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function z(e, t, n, i) {
            var r;
            if (pe.isArray(t)) pe.each(t, function (t, r) {
                n || Ct.test(e) ? i(e, r) : z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== pe.type(t)) i(e, t);
            else
                for (r in t) z(e + "[" + r + "]", t[r], n, i)
        }

        function G(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(Ne) || [];
                if (pe.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function V(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, pe.each(e[s] || [], function (e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }

            var o = {},
                a = e === Ft;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function Y(e, t) {
            var n, i, r = pe.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && pe.extend(!0, e, i), e
        }

        function Z(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                 "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    a || (a = r)
                }
                o = o || a
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function X(e, t, n, i) {
            var r, o, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                        if (a = c[l + " " + o] || c["* " + o], !a)
                            for (r in c)
                                if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                                    break
                                }
                        if (a !== !0)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + l + " to " + o
                                }
                            }
                    }
            return {
                state: "success",
                data: t
            }
        }

        function Q(e) {
            return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }

        var K = [],
            J = e.document,
            ee = Object.getPrototypeOf,
            te = K.slice,
            ne = K.concat,
            ie = K.push,
            re = K.indexOf,
            oe = {},
            ae = oe.toString,
            se = oe.hasOwnProperty,
            le = se.toString,
            ce = le.call(Object),
            ue = {},
            de = "3.1.0",
            pe = function (e, t) {
                return new pe.fn.init(e, t)
            },
            fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            he = /^-ms-/,
            ge = /-([a-z])/g,
            me = function (e, t) {
                return t.toUpperCase()
            };
        pe.fn = pe.prototype = {
            jquery: de,
            constructor: pe,
            length: 0,
            toArray: function () {
                return te.call(this)
            },
            get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : te.call(this)
            },
            pushStack: function (e) {
                var t = pe.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function (e) {
                return pe.each(this, e)
            },
            map: function (e) {
                return this.pushStack(pe.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(te.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: ie,
            sort: K.sort,
            splice: K.splice
        }, pe.extend = pe.fn.extend = function () {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (c && i && (pe.isPlainObject(i) || (r = pe.isArray(i))) ? (r ? (r = !1, o = n && pe.isArray(n) ? n : []) : o = n && pe.isPlainObject(n) ? n : {}, a[t] = pe.extend(c, o, i)) : void 0 !== i && (a[t] = i));
            return a
        }, pe.extend({
            expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {
            },
            isFunction: function (e) {
                return "function" === pe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window
            },
            isNumeric: function (e) {
                var t = pe.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== ae.call(e) || (t = ee(e)) && (n = se.call(t, "constructor") && t.constructor, "function" != typeof n || le.call(n) !== ce))
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[ae.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                n(e)
            },
            camelCase: function (e) {
                return e.replace(he, "ms-").replace(ge, me)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t) {
                var n, r = 0;
                if (i(e))
                    for (n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(fe, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : re.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function (e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
                return r
            },
            map: function (e, t, n) {
                var r, o, a = 0,
                    s = [];
                if (i(e))
                    for (r = e.length; r > a; a++) o = t(e[a], a, n), null != o && s.push(o);
                else
                    for (a in e) o = t(e[a], a, n), null != o && s.push(o);
                return ne.apply([], s)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e) ? (i = te.call(arguments, 2), r = function () {
                    return e.apply(t || this, i.concat(te.call(arguments)))
                }, r.guid = e.guid = e.guid || pe.guid++, r) : void 0
            },
            now: Date.now,
            support: ue
        }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = K[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            oe["[object " + t + "]"] = t.toLowerCase()
        });
        var ve = function (e) {
            function t(e, t, n, i) {
                var r, o, a, s, l, c, u, p = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!i && ((t ? t.ownerDocument || t : B) !== R && O(t), t = t || R, D)) {
                    if (11 !== h && (l = ve.exec(e)))
                        if (r = l[1]) {
                            if (9 === h) {
                                if (!(a = t.getElementById(r))) return n;
                                if (a.id === r) return n.push(a), n
                            } else if (p && (a = p.getElementById(r)) && M(t, a) && a.id === r) return n.push(a), n
                        } else {
                            if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (x.qsa && !G[e + " "] && (!j || !j.test(e))) {
                        if (1 !== h) p = t, u = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(Ee, xe) : t.setAttribute("id", s = H), c = C(e), o = c.length; o--;) c[o] = "#" + s + " " + f(c[o]);
                            u = c.join(","), p = be.test(e) && d(t.parentNode) || t
                        }
                        if (u) try {
                            return K.apply(n, p.querySelectorAll(u)), n
                        } catch (g) {
                        } finally {
                            s === H && t.removeAttribute("id")
                        }
                    }
                }
                return N(e.replace(se, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
                }

                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function r(e) {
                var t = R.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return function (t) {
                    return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && t.disabled === !1 && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !ke(t)) !== e)
                }
            }

            function u(e) {
                return i(function (t) {
                    return t = +t, i(function (n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function p() {
            }

            function f(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function h(e, t, n) {
                var i = t.dir,
                    r = t.next,
                    o = r || i,
                    a = n && "parentNode" === o,
                    s = U++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || a) return e(t, n, r)
                } : function (t, n, l) {
                    var c, u, d, p = [q, s];
                    if (l) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || a)
                                if (d = t[H] || (t[H] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((c = u[o]) && c[0] === q && c[1] === s) return p[2] = c[2];
                                    if (u[o] = p, p[2] = e(t, n, l)) return !0
                                }
                }
            }

            function g(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function v(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
                return a
            }

            function b(e, t, n, r, o, a) {
                return r && !r[H] && (r = b(r)), o && !o[H] && (o = b(o, a)), i(function (i, a, s, l) {
                    var c, u, d, p = [],
                        f = [],
                        h = a.length,
                        g = i || m(t || "*", s.nodeType ? [s] : s, []),
                        b = !e || !i && t ? g : v(g, p, e, s, l),
                        y = n ? o || (i ? e : h || r) ? [] : a : b;
                    if (n && n(b, y, s, l), r)
                        for (c = v(y, f), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[f[u]] = !(b[f[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = y.length; u--;)(d = y[u]) && c.push(b[u] = d);
                                o(null, y = [], c, l)
                            }
                            for (u = y.length; u--;)(d = y[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else y = v(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, l) : K.apply(a, y)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = h(function (e) {
                    return e === t
                }, a, !0), c = h(function (e) {
                    return ee(t, e) > -1
                }, a, !0), u = [function (e, n, i) {
                    var r = !o && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                    if (n = T.relative[e[s].type]) u = [h(g(u), n)];
                    else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                            for (i = ++s; r > i && !T.relative[e[i].type]; i++);
                            return b(s > 1 && g(u), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                        }
                        u.push(n)
                    }
                return g(u)
            }

            function w(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    a = function (i, a, s, l, c) {
                        var u, d, p, f = 0,
                            h = "0",
                            g = i && [],
                            m = [],
                            b = $,
                            y = i || o && T.find.TAG("*", c),
                            w = q += null == b ? 1 : Math.random() || .1,
                            E = y.length;
                        for (c && ($ = a === R || a || c); h !== E && null != (u = y[h]); h++) {
                            if (o && u) {
                                for (d = 0, a || u.ownerDocument === R || (O(u), s = !D); p = e[d++];)
                                    if (p(u, a || R, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (q = w)
                            }
                            r && ((u = !p && u) && f--, i && g.push(u))
                        }
                        if (f += h, r && h !== f) {
                            for (d = 0; p = n[d++];) p(g, m, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) g[h] || m[h] || (m[h] = X.call(l));
                                m = v(m)
                            }
                            K.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (q = w, $ = b), g
                    };
                return r ? i(a) : a
            }

            var E, x, T, k, S, C, A, N, $, I, P, O, R, L, D, j, _, F, M, H = "sizzle" + 1 * new Date,
                B = e.document,
                q = 0,
                U = 0,
                W = n(),
                z = n(),
                G = n(),
                V = function (e, t) {
                    return e === t && (P = !0), 0
                },
                Y = {}.hasOwnProperty,
                Z = [],
                X = Z.pop,
                Q = Z.push,
                K = Z.push,
                J = Z.slice,
                ee = function (e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(oe),
                pe = new RegExp("^" + ie + "$"),
                fe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                me = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                ye = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                we = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                xe = function (e, t) {
                    return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                Te = function () {
                    O()
                },
                ke = h(function (e) {
                    return e.disabled === !0
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                K.apply(Z = J.call(B.childNodes), B.childNodes), Z[B.childNodes.length].nodeType
            } catch (Se) {
                K = {
                    apply: Z.length ? function (e, t) {
                        Q.apply(e, J.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, S = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, O = t.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : B;
                return i !== R && 9 === i.nodeType && i.documentElement ? (R = i, L = R.documentElement, D = !S(R), B !== R && (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), x.attributes = r(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = r(function (e) {
                    return e.appendChild(R.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = me.test(R.getElementsByClassName), x.getById = r(function (e) {
                    return L.appendChild(e).id = H, !R.getElementsByName || !R.getElementsByName(H).length
                }), x.getById ? (T.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && D) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function (e) {
                    var t = e.replace(ye, we);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function (e) {
                    var t = e.replace(ye, we);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = x.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = x.getElementsByClassName && function (e, t) {
                        return "undefined" != typeof t.getElementsByClassName && D ? t.getElementsByClassName(e) : void 0
                    }, _ = [], j = [], (x.qsa = me.test(R.querySelectorAll)) && (r(function (e) {
                    L.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || j.push(".#.+[+~]")
                }), r(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = R.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
                })), (x.matchesSelector = me.test(F = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (e) {
                    x.disconnectedMatch = F.call(e, "*"), F.call(e, "[s!='']:x"), _.push("!=", oe)
                }), j = j.length && new RegExp(j.join("|")), _ = _.length && new RegExp(_.join("|")), t = me.test(L.compareDocumentPosition), M = t || me.test(L.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, V = t ? function (e, t) {
                    if (e === t) return P = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === R || e.ownerDocument === B && M(B, e) ? -1 : t === R || t.ownerDocument === B && M(B, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return P = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!r || !o) return e === R ? -1 : t === R ? 1 : r ? -1 : o ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                    if (r === o) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === B ? -1 : l[i] === B ? 1 : 0
                }, R) : R
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== R && O(e), n = n.replace(ue, "='$1']"), x.matchesSelector && D && !G[n + " "] && (!_ || !_.test(n)) && (!j || !j.test(n))) try {
                    var i = F.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (r) {
                }
                return t(n, R, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== R && O(e), M(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== R && O(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                return void 0 !== i ? i : x.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.escape = function (e) {
                return (e + "").replace(Ee, xe)
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (P = !x.detectDuplicates, I = !x.sortStable && e.slice(0), e.sort(V), P) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return I = null, e
            }, k = t.getText = function (e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += k(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ye, we), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ye, we).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    },
                    ATTR: function (e, n, i) {
                        return function (r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, d, p, f, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                b = !l && !s,
                                y = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && b) {
                                    for (p = m, d = p[H] || (p[H] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === q && c[1], y = f && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (y = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++y && p === t) {
                                            u[e] = [q, f, y];
                                            break
                                        }
                                } else if (b && (p = t, d = p[H] || (p[H] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === q && c[1], y = f), y === !1)
                                    for (;
                                        (p = ++f && p && p[g] || (y = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (b && (d = p[H] || (p[H] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [q, y]), p !== t)););
                                return y -= r, y === i || y % i === 0 && y / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, n) {
                        var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                            for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                        }) : function (e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [],
                            n = [],
                            r = A(e.replace(se, "$1"));
                        return r[H] ? i(function (e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function (e) {
                        return e = e.replace(ye, we),
                            function (t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function (e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, we).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === L
                    },
                    focus: function (e) {
                        return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function (e) {
                        return ge.test(e.nodeName)
                    },
                    input: function (e) {
                        return he.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function () {
                        return [0]
                    }),
                    last: u(function (e, t) {
                        return [t - 1]
                    }),
                    eq: u(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (E in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[E] = s(E);
            for (E in {
                submit: !0,
                reset: !0
            }) T.pseudos[E] = l(E);
            return p.prototype = T.filters = T.pseudos, T.setFilters = new p, C = t.tokenize = function (e, n) {
                var i, r, o, a, s, l, c, u = z[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = T.preFilter; s;) {
                    i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (a in T.filter) !(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
            }, A = t.compile = function (e, t) {
                var n, i = [],
                    r = [],
                    o = G[e + " "];
                if (!o) {
                    for (t || (t = C(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                    o = G(e, w(r, i)), o.selector = e
                }
                return o
            }, N = t.select = function (e, t, n, i) {
                var r, o, a, s, l, c = "function" == typeof e && e,
                    u = !i && C(e = c.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && D && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(ye, we), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !T.relative[s = a.type]);)
                        if ((l = T.find[s]) && (i = l(a.matches[0].replace(ye, we), be.test(o[0].type) && d(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i), n;
                            break
                        }
                }
                return (c || A(e, u))(i, t, !D, n, !t || be.test(e) && d(t.parentNode) || t), n
            }, x.sortStable = H.split("").sort(V).join("") === H, x.detectDuplicates = !!P, O(), x.sortDetached = r(function (e) {
                return 1 & e.compareDocumentPosition(R.createElement("fieldset"))
            }), r(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function (e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains, pe.escapeSelector = ve.escape;
        var be = function (e, t, n) {
                for (var i = [], r = void 0 !== n;
                     (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && pe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            ye = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            we = pe.expr.match.needsContext,
            Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            xe = /^.[^:#\[\.,]*$/;
        pe.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, pe.fn.extend({
            find: function (e) {
                var t, n, i = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
                    for (t = 0; i > t; t++)
                        if (pe.contains(r[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; i > t; t++) pe.find(e, r[t], n);
                return i > 1 ? pe.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function (e) {
                return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
            }
        });
        var Te, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Se = pe.fn.init = function (e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || Te, "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), Ee.test(i[1]) && pe.isPlainObject(t))
                            for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return r = J.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
            };
        Se.prototype = pe.fn, Te = pe(J);
        var Ce = /^(?:parents|prev(?:Until|All))/,
            Ae = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pe.fn.extend({
            has: function (e) {
                var t = pe(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; n > e; e++)
                        if (pe.contains(this, t[e])) return !0
                })
            },
            closest: function (e, t) {
                var n, i = 0,
                    r = this.length,
                    o = [],
                    a = "string" != typeof e && pe(e);
                if (!we.test(e))
                    for (; r > i; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? re.call(pe(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), pe.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return be(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function (e) {
                return o(e, "nextSibling")
            },
            prev: function (e) {
                return o(e, "previousSibling")
            },
            nextAll: function (e) {
                return be(e, "nextSibling")
            },
            prevAll: function (e) {
                return be(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function (e) {
                return ye((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return ye(e.firstChild)
            },
            contents: function (e) {
                return e.contentDocument || pe.merge([], e.childNodes)
            }
        }, function (e, t) {
            pe.fn[e] = function (n, i) {
                var r = pe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Ae[e] || pe.uniqueSort(r), Ce.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var Ne = /\S+/g;
        pe.Callbacks = function (e) {
            e = "string" == typeof e ? a(e) : pe.extend({}, e);
            var t, n, i, r, o = [],
                s = [],
                l = -1,
                c = function () {
                    for (r = e.once, i = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                },
                u = {
                    add: function () {
                        return o && (n && !t && (l = o.length - 1, s.push(n)), function i(t) {
                            pe.each(t, function (t, n) {
                                pe.isFunction(n) ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== pe.type(n) && i(n)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function () {
                        return pe.each(arguments, function (e, t) {
                            for (var n;
                                 (n = pe.inArray(t, o, n)) > -1;) o.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function (e) {
                        return e ? pe.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function () {
                        return o && (o = []), this
                    },
                    disable: function () {
                        return r = s = [], o = n = "", this
                    },
                    disabled: function () {
                        return !o
                    },
                    lock: function () {
                        return r = s = [], n || t || (o = n = ""), this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, pe.extend({
            Deferred: function (t) {
                var n = [
                        ["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2],
                        ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        "catch": function (e) {
                            return r.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return pe.Deferred(function (t) {
                                pe.each(n, function (n, i) {
                                    var r = pe.isFunction(e[i[4]]) && e[i[4]];
                                    o[i[1]](function () {
                                        var e = r && r.apply(this, arguments);
                                        e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function (t, i, r) {
                            function o(t, n, i, r) {
                                return function () {
                                    var c = this,
                                        u = arguments,
                                        d = function () {
                                            var e, d;
                                            if (!(a > t)) {
                                                if (e = i.apply(c, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(d) ? r ? d.call(e, o(a, n, s, r), o(a, n, l, r)) : (a++, d.call(e, o(a, n, s, r), o(a, n, l, r), o(a, n, s, n.notifyWith))) : (i !== s && (c = void 0, u = [e]), (r || n.resolveWith)(c, u))
                                            }
                                        },
                                        p = r ? d : function () {
                                            try {
                                                d()
                                            } catch (e) {
                                                pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (i !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
                                            }
                                        };
                                    t ? p() : (pe.Deferred.getStackHook && (p.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(p))
                                }
                            }

                            var a = 0;
                            return pe.Deferred(function (e) {
                                n[0][3].add(o(0, e, pe.isFunction(r) ? r : s, e.notifyWith)), n[1][3].add(o(0, e, pe.isFunction(t) ? t : s)), n[2][3].add(o(0, e, pe.isFunction(i) ? i : l))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? pe.extend(e, r) : r
                        }
                    },
                    o = {};
                return pe.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    r[t[1]] = a.add, s && a.add(function () {
                        i = s
                    }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                        return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[t[0] + "With"] = a.fireWith
                }), r.promise(o), t && t.call(o, o), o
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = te.call(arguments),
                    o = pe.Deferred(),
                    a = function (e) {
                        return function (n) {
                            i[e] = this, r[e] = arguments.length > 1 ? te.call(arguments) : n, --t || o.resolveWith(i, r)
                        }
                    };
                if (1 >= t && (c(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || pe.isFunction(r[n] && r[n].then))) return o.then();
                for (; n--;) c(r[n], a(n), o.reject);
                return o.promise()
            }
        });
        var $e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        pe.Deferred.exceptionHook = function (t, n) {
            e.console && e.console.warn && t && $e.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, pe.readyException = function (t) {
            e.setTimeout(function () {
                throw t
            })
        };
        var Ie = pe.Deferred();
        pe.fn.ready = function (e) {
            return Ie.then(e)["catch"](function (e) {
                pe.readyException(e)
            }), this
        }, pe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? pe.readyWait++ : pe.ready(!0)
            },
            ready: function (e) {
                (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || Ie.resolveWith(J, [pe]))
            }
        }), pe.ready.then = Ie.then, "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? e.setTimeout(pe.ready) : (J.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
        var Pe = function (e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === pe.type(n)) {
                    r = !0;
                    for (s in n) Pe(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                        return c.call(pe(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            Oe = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        d.uid = 1, d.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function (e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[pe.camelCase(t)] = n;
                else
                    for (i in t) r[pe.camelCase(i)] = t[i];
                return r
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        pe.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(Ne) || []), n = t.length;
                        for (; n--;) delete i[t[n]]
                    }
                    (void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !pe.isEmptyObject(t)
            }
        };
        var Re = new d,
            Le = new d,
            De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            je = /[A-Z]/g;
        pe.extend({
            hasData: function (e) {
                return Le.hasData(e) || Re.hasData(e)
            },
            data: function (e, t, n) {
                return Le.access(e, t, n)
            },
            removeData: function (e, t) {
                Le.remove(e, t)
            },
            _data: function (e, t, n) {
                return Re.access(e, t, n)
            },
            _removeData: function (e, t) {
                Re.remove(e, t)
            }
        }), pe.fn.extend({
            data: function (e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Le.get(o), 1 === o.nodeType && !Re.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), p(o, i, r[i])));
                        Re.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function () {
                    Le.set(this, e)
                }) : Pe(this, function (t) {
                    var n;
                    if (o && void 0 === t) {
                        if (n = Le.get(o, e), void 0 !== n) return n;
                        if (n = p(o, e), void 0 !== n) return n
                    } else this.each(function () {
                        Le.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    Le.remove(this, e)
                })
            }
        }), pe.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = Re.get(e, t), n && (!i || pe.isArray(n) ? i = Re.access(e, t, pe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = pe._queueHooks(e, t),
                    a = function () {
                        pe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Re.get(e, n) || Re.access(e, n, {
                        empty: pe.Callbacks("once memory").add(function () {
                            Re.remove(e, [t + "queue", n])
                        })
                    })
            }
        }), pe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1,
                    r = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Re.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Fe = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
            Me = ["Top", "Right", "Bottom", "Left"],
            He = function (e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
            },
            Be = function (e, t, n, i) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = a[o];
                return r
            },
            qe = {};
        pe.fn.extend({
            show: function () {
                return g(this, !0)
            },
            hide: function () {
                return g(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    He(this) ? pe(this).show() : pe(this).hide()
                })
            }
        });
        var Ue = /^(?:checkbox|radio)$/i,
            We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            ze = /^$|\/(?:java|ecma)script/i,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
        var Ve = /<|&#?\w+;/;
        !function () {
            var e = J.createDocumentFragment(),
                t = e.appendChild(J.createElement("div")),
                n = J.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ue.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ue.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ye = J.documentElement,
            Ze = /^key/,
            Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Qe = /^([^.]*)(?:\.(.+)|)/;
        pe.event = {
            global: {},
            add: function (e, t, n, i, r) {
                var o, a, s, l, c, u, d, p, f, h, g, m = Re.get(e);
                if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), r && pe.find.matchesSelector(Ye, r), n.guid || (n.guid = pe.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                        return "undefined" != typeof pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Ne) || [""], c = t.length; c--;) s = Qe.exec(t[c]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f && (d = pe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = pe.event.special[f] || {}, u = pe.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && pe.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), pe.event.global[f] = !0)
            },
            remove: function (e, t, n, i, r) {
                var o, a, s, l, c, u, d, p, f, h, g, m = Re.hasData(e) && Re.get(e);
                if (m && (l = m.events)) {
                    for (t = (t || "").match(Ne) || [""], c = t.length; c--;)
                        if (s = Qe.exec(t[c]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = pe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) u = p[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || pe.removeEvent(e, f, m.handle), delete l[f])
                        } else
                            for (f in l) pe.event.remove(e, f + t[c], n, i, !0);
                    pe.isEmptyObject(l) && Re.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t, n, i, r, o, a, s = pe.event.fix(e),
                    l = new Array(arguments.length),
                    c = (Re.get(this, "events") || {})[s.type] || [],
                    u = pe.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (s.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, s) !== !1) {
                    for (a = pe.event.handlers.call(this, s, c), t = 0;
                         (r = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = r.elem, n = 0;
                             (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), void 0 !== i && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            },
            handlers: function (e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            addProp: function (e, t) {
                Object.defineProperty(pe.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: pe.isFunction(t) ? function () {
                        return this.originalEvent ? t(this.originalEvent) : void 0
                    } : function () {
                        return this.originalEvent ? this.originalEvent[e] : void 0
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[pe.expando] ? e : new pe.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        return this !== E() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === E() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && pe.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function (e) {
                        return pe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, pe.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, pe.Event = function (e, t) {
            return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
        }, pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = y, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = y, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = y, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pe.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, pe.event.addProp), pe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return r && (r === i || pe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), pe.fn.extend({
            on: function (e, t, n, i) {
                return x(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return x(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function () {
                    pe.event.remove(this, e, n, t)
                })
            }
        });
        var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Je = /<script|<style|<link/i,
            et = /checked\s*(?:[^=]|=\s*.checked.)/i,
            tt = /^true\/(.*)/,
            nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        pe.extend({
            htmlPrefilter: function (e) {
                return e.replace(Ke, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var i, r, o, a, s = e.cloneNode(!0),
                    l = pe.contains(e.ownerDocument, e);
                if (!(ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                    for (a = m(s), o = m(e), i = 0, r = o.length; r > i; i++) A(o[i], a[i]);
                if (t)
                    if (n)
                        for (o = o || m(e), a = a || m(s), i = 0, r = o.length; r > i; i++) C(o[i], a[i]);
                    else C(e, s);
                return a = m(s, "script"), a.length > 0 && v(a, !l && m(e, "script")), s
            },
            cleanData: function (e) {
                for (var t, n, i, r = pe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Oe(n)) {
                        if (t = n[Re.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                            n[Re.expando] = void 0
                        }
                        n[Le.expando] && (n[Le.expando] = void 0)
                    }
            }
        }), pe.fn.extend({
            detach: function (e) {
                return $(this, e, !0)
            },
            remove: function (e) {
                return $(this, e)
            },
            text: function (e) {
                return Pe(this, function (e) {
                    return void 0 === e ? pe.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return N(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function () {
                return N(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return N(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return N(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (pe.cleanData(m(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return pe.clone(this, e, t)
                })
            },
            html: function (e) {
                return Pe(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Je.test(e) && !Ge[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pe.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(m(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return N(this, arguments, function (t) {
                    var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(m(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), pe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            pe.fn[e] = function (e) {
                for (var n, i = [], r = pe(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), pe(r[a])[t](n), ie.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var it = /^margin/,
            rt = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
            ot = function (t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            };
        !function () {
            function t() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a);
                    var t = e.getComputedStyle(s);
                    n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ye.removeChild(a), s = null
                }
            }

            var n, i, r, o, a = J.createElement("div"),
                s = J.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ue.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), pe.extend(ue, {
                pixelPosition: function () {
                    return t(), n
                },
                boxSizingReliable: function () {
                    return t(), i
                },
                pixelMarginRight: function () {
                    return t(), r
                },
                reliableMarginLeft: function () {
                    return t(), o
                }
            }))
        }();
        var at = /^(none|table(?!-c[ea]).+)/,
            st = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            lt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ct = ["Webkit", "Moz", "ms"],
            ut = J.createElement("div").style;
        pe.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = I(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = pe.camelCase(t),
                        l = e.style;
                    return t = pe.cssProps[s] || (pe.cssProps[s] = O(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Fe.exec(n)) && r[1] && (n = f(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
                }
            },
            css: function (e, t, n, i) {
                var r, o, a, s = pe.camelCase(t);
                return t = pe.cssProps[s] || (pe.cssProps[s] = O(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = I(e, t, i)), "normal" === r && t in lt && (r = lt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), pe.each(["height", "width"], function (e, t) {
            pe.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? !at.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? D(e, t, i) : Be(e, st, function () {
                        return D(e, t, i)
                    }) : void 0
                },
                set: function (e, n, i) {
                    var r, o = i && ot(e),
                        a = i && L(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, o), o);
                    return a && (r = Fe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), R(e, n, a)
                }
            }
        }), pe.cssHooks.marginLeft = P(ue.reliableMarginLeft, function (e, t) {
            return t ? (parseFloat(I(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px" : void 0
        }), pe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            pe.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Me[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, it.test(e) || (pe.cssHooks[e + t].set = R)
        }), pe.fn.extend({
            css: function (e, t) {
                return Pe(this, function (e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (pe.isArray(t)) {
                        for (i = ot(e), r = t.length; r > a; a++) o[t[a]] = pe.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), pe.Tween = j, j.prototype = {
            constructor: j,
            init: function (e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pe.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = j.propHooks[this.prop];
                return e && e.get ? e.get(this) : j.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = j.propHooks[this.prop];
                return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
            }
        }, j.prototype.init.prototype = j.prototype, j.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function (e) {
                    pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, pe.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, pe.fx = j.prototype.init, pe.fx.step = {};
        var dt, pt, ft = /^(?:toggle|show|hide)$/,
            ht = /queueHooks$/;
        pe.Animation = pe.extend(U, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, Fe.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
            },
            prefilters: [B],
            prefilter: function (e, t) {
                t ? U.prefilters.unshift(e) : U.prefilters.push(e)
            }
        }), pe.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return pe.fx.off || J.hidden ? i.duration = 0 : i.duration = "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
            }, i
        }, pe.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(He).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = pe.isEmptyObject(e),
                    o = pe.speed(t, n, i),
                    a = function () {
                        var t = U(this, pe.extend({}, e), o);
                        (r || Re.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = pe.timers,
                        a = Re.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && ht.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = Re.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = pe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []),
                         r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function (e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, r)
            }
        }), pe.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            pe.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), pe.timers = [], pe.fx.tick = function () {
            var e, t = 0,
                n = pe.timers;
            for (dt = pe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || pe.fx.stop(), dt = void 0
        }, pe.fx.timer = function (e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function () {
            pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(_) : e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function () {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt), pt = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function (t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(r)
                }
            })
        },
            function () {
                var e = J.createElement("input"),
                    t = J.createElement("select"),
                    n = t.appendChild(J.createElement("option"));
                e.type = "checkbox", ue.checkOn = "" !== e.value, ue.optSelected = n.selected, e = J.createElement("input"), e.value = "t", e.type = "radio", ue.radioValue = "t" === e.value
            }();
        var gt, mt = pe.expr.attrHandle;
        pe.fn.extend({
            attr: function (e, t) {
                return Pe(this, pe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    pe.removeAttr(this, e)
                })
            }
        }), pe.extend({
            attr: function (e, t, n) {
                var i, r, o = e.nodeType;
                return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (r = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i)) : void 0
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ue.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, i = 0,
                    r = t && t.match(Ne);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n)
            }
        }), gt = {
            set: function (e, t, n) {
                return t === !1 ? pe.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = mt[t] || pe.find.attr;
            mt[t] = function (e, t, i) {
                var r, o, a = t.toLowerCase();
                return i || (o = mt[a], mt[a] = r, r = null != n(e, t, i) ? a : null, mt[a] = o), r
            }
        });
        var vt = /^(?:input|select|textarea|button)$/i,
            bt = /^(?:a|area)$/i;
        pe.fn.extend({
            prop: function (e, t) {
                return Pe(this, pe.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[pe.propFix[e] || e]
                })
            }
        }), pe.extend({
            prop: function (e, t, n) {
                var i, r, o = e.nodeType;
                return 3 !== o && 8 !== o && 2 !== o ? (1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = pe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : vt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), ue.optSelected || (pe.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            pe.propFix[this.toLowerCase()] = this
        });
        var yt = /[\t\r\n\f]/g;
        pe.fn.extend({
            addClass: function (e) {
                var t, n, i, r, o, a, s, l = 0;
                if (pe.isFunction(e)) return this.each(function (t) {
                    pe(this).addClass(e.call(this, t, W(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Ne) || []; n = this[l++];)
                        if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(yt, " ")) {
                            for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = pe.trim(i), r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function (e) {
                var t, n, i, r, o, a, s, l = 0;
                if (pe.isFunction(e)) return this.each(function (t) {
                    pe(this).removeClass(e.call(this, t, W(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Ne) || []; n = this[l++];)
                        if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(yt, " ")) {
                            for (a = 0; o = t[a++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            s = pe.trim(i), r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
                    pe(this).toggleClass(e.call(this, n, W(this), t), t)
                }) : this.each(function () {
                    var t, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = pe(this), o = e.match(Ne) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = W(this), t && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Re.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + W(n) + " ").replace(yt, " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var wt = /\r/g,
            Et = /[\x20\t\r\n\f]+/g;
        pe.fn.extend({
            val: function (e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = pe.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function (e) {
                            return null == e ? "" : e + ""
                        })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
            }
        }), pe.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = pe.find.attr(e, "value");
                        return null != t ? t : pe.trim(pe.text(e)).replace(Et, " ")
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], (n.selected || l === r) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, o = pe.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = pe.inArray(pe.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), pe.each(["radio", "checkbox"], function () {
            pe.valHooks[this] = {
                set: function (e, t) {
                    return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0
                }
            }, ue.checkOn || (pe.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var xt = /^(?:focusinfocus|focusoutblur)$/;
        pe.extend(pe.event, {
            trigger: function (t, n, i, r) {
                var o, a, s, l, c, u, d, p = [i || J],
                    f = se.call(t, "type") ? t.type : t,
                    h = se.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(f + pe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[pe.expando] ? t : new pe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), d = pe.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!r && !d.noBubble && !pe.isWindow(i)) {
                        for (l = d.delegateType || f, xt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                        s === (i.ownerDocument || J) && p.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0;
                         (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, u = (Re.get(a, "events") || {})[t.type] && Re.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && Oe(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = f, r || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Oe(i) || c && pe.isFunction(i[f]) && !pe.isWindow(i) && (s = i[c], s && (i[c] = null), pe.event.triggered = f, i[f](), pe.event.triggered = void 0, s && (i[c] = s)), t.result
                }
            },
            simulate: function (e, t, n) {
                var i = pe.extend(new pe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                pe.event.trigger(i, null, t)
            }
        }), pe.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    pe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? pe.event.trigger(e, t, n, !0) : void 0
            }
        }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            pe.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), pe.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ue.focusin = "onfocusin" in e, ue.focusin || pe.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                pe.event.simulate(t, e.target, pe.event.fix(e))
            };
            pe.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        r = Re.access(i, t);
                    r || i.addEventListener(e, n, !0), Re.access(i, t, (r || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        r = Re.access(i, t) - 1;
                    r ? Re.access(i, t, r) : (i.removeEventListener(e, n, !0), Re.remove(i, t))
                }
            }
        });
        var Tt = e.location,
            kt = pe.now(),
            St = /\?/;
        pe.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (i) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
        };
        var Ct = /\[\]$/,
            At = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            $t = /^(?:input|select|textarea|keygen)/i;
        pe.param = function (e, t) {
            var n, i = [],
                r = function (e, t) {
                    var n = pe.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
                r(this.name, this.value)
            });
            else
                for (n in e) z(n, e[n], t, r);
            return i.join("&")
        }, pe.fn.extend({
            serialize: function () {
                return pe.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = pe.prop(this, "elements");
                    return e ? pe.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !pe(this).is(":disabled") && $t.test(this.nodeName) && !Nt.test(e) && (this.checked || !Ue.test(e))
                }).map(function (e, t) {
                    var n = pe(this).val();
                    return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(At, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(At, "\r\n")
                    }
                }).get()
            }
        });
        var It = /%20/g,
            Pt = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Dt = /^(?:GET|HEAD)$/,
            jt = /^\/\//,
            _t = {},
            Ft = {},
            Mt = "*/".concat("*"),
            Ht = J.createElement("a");
        Ht.href = Tt.href, pe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: Lt.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Mt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": pe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Y(Y(e, pe.ajaxSettings), t) : Y(pe.ajaxSettings, e)
            },
            ajaxPrefilter: G(_t),
            ajaxTransport: G(Ft),
            ajax: function (t, n) {
                function i(t, n, i, s) {
                    var c, p, f, w, E, x = n;
                    u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (w = Z(h, T, i)), w = X(h, w, T, c), c ? (h.ifModified && (E = T.getResponseHeader("Last-Modified"), E && (pe.lastModified[o] = E), E = T.getResponseHeader("etag"), E && (pe.etag[o] = E)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = w.state, p = w.data, f = w.error, c = !f)) : (f = x, !t && x || (x = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || x) + "", c ? v.resolveWith(g, [p, x, T]) : v.rejectWith(g, [T, x, f]), T.statusCode(y), y = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : f]), b.fireWith(g, [T, x]), d && (m.trigger("ajaxComplete", [T, h]), --pe.active || pe.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var r, o, a, s, l, c, u, d, p, f, h = pe.ajaxSetup({}, n),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
                    v = pe.Deferred(),
                    b = pe.Callbacks("once memory"),
                    y = h.statusCode || {},
                    w = {},
                    E = {},
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = Rt.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return u ? a : null
                        },
                        setRequestHeader: function (e, t) {
                            return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return null == u && (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (u) T.always(e[T.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function (e) {
                            var t = e || x;
                            return r && r.abort(t), i(0, t), this
                        }
                    };
                if (v.promise(T), h.url = ((t || h.url || Tt.href) + "").replace(jt, Tt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) {
                    c = J.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host
                    } catch (k) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)), V(_t, h, n, T), u) return T;
                d = pe.event && h.global, d && 0 === pe.active++ && pe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Dt.test(h.type), o = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(It, "+")) : (f = h.url.slice(o.length), h.data && (o += (St.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Ot, ""), f = (St.test(o) ? "&" : "?") + "_=" + kt++ + f), h.url = o + f), h.ifModified && (pe.lastModified[o] && T.setRequestHeader("If-Modified-Since", pe.lastModified[o]), pe.etag[o] && T.setRequestHeader("If-None-Match", pe.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (h.beforeSend.call(g, T, h) === !1 || u)) return T.abort();
                if (x = "abort", b.add(h.complete), T.done(h.success), T.fail(h.error), r = V(Ft, h, n, T)) {
                    if (T.readyState = 1, d && m.trigger("ajaxSend", [T, h]), u) return T;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                        T.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, r.send(w, i)
                    } catch (k) {
                        if (u) throw k;
                        i(-1, k)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function (e, t, n) {
                return pe.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return pe.get(e, void 0, t, "script")
            }
        }), pe.each(["get", "post"], function (e, t) {
            pe[t] = function (e, n, i, r) {
                return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, pe.isPlainObject(e) && e))
            }
        }), pe._evalUrl = function (e) {
            return pe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, pe.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function (e) {
                return pe.isFunction(e) ? this.each(function (t) {
                    pe(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = pe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = pe.isFunction(e);
                return this.each(function (n) {
                    pe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    pe(this).replaceWith(this.childNodes)
                }), this
            }
        }), pe.expr.pseudos.hidden = function (e) {
            return !pe.expr.pseudos.visible(e)
        }, pe.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, pe.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest
            } catch (t) {
            }
        };
        var Bt = {
                0: 200,
                1223: 204
            },
            qt = pe.ajaxSettings.xhr();
        ue.cors = !!qt && "withCredentials" in qt, ue.ajax = qt = !!qt, pe.ajaxTransport(function (t) {
            var n, i;
            return ue.cors || qt && !t.crossDomain ? {
                send: function (r, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r) s.setRequestHeader(a, r[a]);
                    n = function (e) {
                        return function () {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                        4 === s.readyState && e.setTimeout(function () {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n) throw l
                    }
                },
                abort: function () {
                    n && n()
                }
            } : void 0
        }), pe.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), pe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return pe.globalEval(e), e
                }
            }
        }), pe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), pe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, r) {
                        t = pe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), J.head.appendChild(t[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ut = [],
            Wt = /(=)\?(?=&|$)|\?\?/;
        pe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Ut.pop() || pe.expando + "_" + kt++;
                return this[e] = !0, e
            }
        }), pe.ajaxPrefilter("json jsonp", function (t, n, i) {
            var r, o, a,
                s = t.jsonp !== !1 && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Wt, "$1" + r) : t.jsonp !== !1 && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return a || pe.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
                a = arguments
            }, i.always(function () {
                void 0 === o ? pe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ut.push(r)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), ue.createHTMLDocument = function () {
            var e = J.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), pe.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, r, o;
            return t || (ue.createHTMLDocument ? (t = J.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = J.location.href, t.head.appendChild(i)) : t = J), r = Ee.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = b([e], t, o), o && o.length && pe(o).remove(), pe.merge([], r.childNodes))
        }, pe.fn.load = function (e, t, n) {
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (i = pe.trim(e.slice(s)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && pe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                    a.each(function () {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
        }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            pe.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), pe.expr.pseudos.animated = function (e) {
            return pe.grep(pe.timers, function (t) {
                return e === t.elem
            }).length
        }, pe.offset = {
            setOffset: function (e, t, n) {
                var i, r, o, a, s, l, c, u = pe.css(e, "position"),
                    d = pe(e),
                    p = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), o = pe.css(e, "top"), l = pe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, pe.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    pe.offset.setOffset(this, e, t)
                });
                var t, n, i, r, o = this[0];
                return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = Q(r), t = r.documentElement, {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (i = e.offset()), i = {
                        top: i.top + pe.css(e[0], "borderTopWidth", !0),
                        left: i.left + pe.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - i.top - pe.css(n, "marginTop", !0),
                        left: t.left - i.left - pe.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === pe.css(e, "position");) e = e.offsetParent;
                    return e || Ye
                })
            }
        }), pe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            pe.fn[e] = function (i) {
                return Pe(this, function (e, i, r) {
                    var o = Q(e);
                    return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                }, e, i, arguments.length)
            }
        }), pe.each(["top", "left"], function (e, t) {
            pe.cssHooks[t] = P(ue.pixelPosition, function (e, n) {
                return n ? (n = I(e, t), rt.test(n) ? pe(e).position()[t] + "px" : n) : void 0
            })
        }), pe.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            pe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, i) {
                pe.fn[i] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (r === !0 || o === !0 ? "margin" : "border");
                    return Pe(this, function (t, n, r) {
                        var o;
                        return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? pe.css(t, n, s) : pe.style(t, n, r, s)
                    }, t, a ? r : void 0, a)
                }
            })
        }), pe.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), pe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
            return pe
        });
        var zt = e.jQuery,
            Gt = e.$;
        return pe.noConflict = function (t) {
            return e.$ === pe && (e.$ = Gt), t && e.jQuery === pe && (e.jQuery = zt), pe
        }, t || (e.jQuery = e.$ = pe), pe
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }

    e.fn.emulateTransitionEnd = function (t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var r = function () {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(r, t), this
    }, e(function () {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function (t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var n = e(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n)
        })
    }

    var n = '[data-dismiss="alert"]',
        i = function (t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function (t) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }

        var r = e(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e("#" === o ? [] : o);
        t && t.preventDefault(), a.length || (a = r.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function () {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                r = i.data("bs.button"),
                o = "object" == typeof t && t;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() : t && r.setState(t)
        })
    }

    var n = function (t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (t) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(e.proxy(function () {
            i[r](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                r = i.data("bs.carousel"),
                o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                a = "string" == typeof t ? t : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : a ? r[a]() : o.interval && r.pause().cycle()
        })
    }

    var n = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t),
            i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var r = "prev" == e ? -1 : 1,
            o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (t, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(t, r),
            a = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, r.addClass(s), o.addClass(s), r.one("bsTransitionEnd", function () {
                o.removeClass([t, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = i, this
    };
    var r = function (n) {
        var i, r = e(this),
            o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = e.extend({}, o.data(), r.data()),
                s = r.attr("data-slide-to");
            s && (a.interval = !1), t.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function () {
            var n = e(this),
                r = n.data("bs.collapse"),
                o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]()
        })
    }

    var i = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (t = r.data("bs.collapse"), t && t.transitioning))) {
                var o = e.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, i) {
            var r = e(i);
            this.addAriaAndCollapsedClass(t(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = r, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var r = e(this);
        r.attr("data-target") || i.preventDefault();
        var o = t(r),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : r.data();
        n.call(o, s)
    })
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(r).remove(), e(o).each(function () {
            var i = e(this),
                r = t(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function i(t) {
        return this.each(function () {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }

    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        a = function (t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function (i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = t(r),
                a = o.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = t(i),
                    a = r.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + s);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), +function (e) {
    "use strict";

    function t(t, i) {
        return this.each(function () {
            var r = e(this),
                o = r.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            o || r.data("bs.modal", o = new n(this, a)), "string" == typeof t ? o[t](i) : a.show && o.show(i)
        })
    }

    var n = function (t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function (t) {
        var i = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var r = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (t) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && r;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else t && t()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = e(this),
            r = i.attr("href"),
            o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(o, a, this)
    })
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof t && t;
            !r && /destroy|hide/.test(t) || (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }

    var n = function (e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function (t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var a = r[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function () {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function (e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var r = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (c) {
                var f = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + p > h.bottom ? "top" : "top" == s && u.top - p < h.top ? "bottom" : "right" == s && u.right + d > h.width ? "left" : "left" == s && u.left - d < h.left ? "right" : s, o.removeClass(f).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, d, p);
            this.applyPlacement(g, s);
            var m = function () {
                var e = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function (t, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
            using: function (e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != o && (t.top = t.top + o - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            p = d ? 2 * u.left - r + l : 2 * u.top - o + c,
            f = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][f], d)
    }, n.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (t) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), t && t()
        }

        var r = this,
            o = e(this.$tip),
            a = e.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement,
            a = i ? {
                top: 0,
                left: 0
            } : o ? null : t.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            l = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, r, s, l, a)
    }, n.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - o - a.scroll,
                l = t.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
        } else {
            var c = t.left - o,
                u = t.left + o + n;
            c < a.left ? r.left = a.left - c : u > a.right && (r.left = a.left + a.width - u)
        }
        return r
    }, n.prototype.getTitle = function () {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function (e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout), this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = i, this
    }
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                r = i.data("bs.popover"),
                o = "object" == typeof t && t;
            !r && /destroy|hide/.test(t) || (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }

    var n = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function () {
        return e.fn.popover = i, this
    }
}(jQuery), +function (e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = e(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }

    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function () {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var t = e(this),
                r = t.data("target") || t.attr("href"),
                o = /^#./.test(r) && e(r);
            return o && o.length && o.is(":visible") && [
                    [o[n]().top + i, r]
                ] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = o[o.length - 1]) && this.activate(e);
        if (a && t < r[0]) return this.activeTarget = null, this.clear();
        for (e = r.length; e--;) a != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function () {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
        })
    }

    var n = function (t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                a = e.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), t.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function () {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (t, i, r) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }

        var a = i.find("> .active"),
            s = r && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
        return e.fn.tab = i, this
    };
    var r = function (n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), +function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                r = i.data("bs.affix"),
                o = "object" == typeof t && t;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
        })
    }

    var n = function (t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (e, t, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return n > r && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(e - i >= r + a) && "bottom";
        var s = null == this.affixed,
            l = s ? r : o.top,
            c = s ? a : t;
        return null != n && n >= r ? "top" : null != i && l + c >= e - i && "bottom"
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                a = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var s = this.getState(a, t, r, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - t - o
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
        return e.fn.affix = i, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
        var e = /\blang(?:uage)?-(\w+)\b/i,
            t = 0,
            n = _self.Prism = {
                util: {
                    encode: function (e) {
                        return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function (e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function (e) {
                        var t = n.util.type(e);
                        switch (t) {
                            case "Object":
                                var i = {};
                                for (var r in e) e.hasOwnProperty(r) && (i[r] = n.util.clone(e[r]));
                                return i;
                            case "Array":
                                return e.map && e.map(function (e) {
                                        return n.util.clone(e)
                                    })
                        }
                        return e
                    }
                },
                languages: {
                    extend: function (e, t) {
                        var i = n.util.clone(n.languages[e]);
                        for (var r in t) i[r] = t[r];
                        return i
                    },
                    insertBefore: function (e, t, i, r) {
                        r = r || n.languages;
                        var o = r[e];
                        if (2 == arguments.length) {
                            i = arguments[1];
                            for (var a in i) i.hasOwnProperty(a) && (o[a] = i[a]);
                            return o
                        }
                        var s = {};
                        for (var l in o)
                            if (o.hasOwnProperty(l)) {
                                if (l == t)
                                    for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                                s[l] = o[l]
                            }
                        return n.languages.DFS(n.languages, function (t, n) {
                            n === r[e] && t != e && (this[t] = s)
                        }), r[e] = s
                    },
                    DFS: function (e, t, i, r) {
                        r = r || {};
                        for (var o in e) e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o), "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, null, r)))
                    }
                },
                plugins: {},
                highlightAll: function (e, t) {
                    var i = {
                        callback: t,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    n.hooks.run("before-highlightall", i);
                    for (var r, o = i.elements || document.querySelectorAll(i.selector), a = 0; r = o[a++];) n.highlightElement(r, e === !0, i.callback)
                },
                highlightElement: function (t, i, r) {
                    for (var o, a, s = t; s && !e.test(s.className);) s = s.parentNode;
                    s && (o = (s.className.match(e) || [, ""])[1].toLowerCase(), a = n.languages[o]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
                    var l = t.textContent,
                        c = {
                            element: t,
                            language: o,
                            grammar: a,
                            code: l
                        };
                    if (n.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return void n.hooks.run("complete", c);
                    if (n.hooks.run("before-highlight", c), i && _self.Worker) {
                        var u = new Worker(n.filename);
                        u.onmessage = function (e) {
                            c.highlightedCode = e.data, n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(c.element), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
                        }, u.postMessage(JSON.stringify({
                            language: c.language,
                            code: c.code,
                            immediateClose: !0
                        }))
                    } else c.highlightedCode = n.highlight(c.code, c.grammar, c.language), n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
                },
                highlight: function (e, t, r) {
                    var o = n.tokenize(e, t);
                    return i.stringify(n.util.encode(o), r)
                },
                tokenize: function (e, t) {
                    var i = n.Token,
                        r = [e],
                        o = t.rest;
                    if (o) {
                        for (var a in o) t[a] = o[a];
                        delete t.rest
                    }
                    e: for (var a in t)
                        if (t.hasOwnProperty(a) && t[a]) {
                            var s = t[a];
                            s = "Array" === n.util.type(s) ? s : [s];
                            for (var l = 0; l < s.length; ++l) {
                                var c = s[l],
                                    u = c.inside,
                                    d = !!c.lookbehind,
                                    p = !!c.greedy,
                                    f = 0,
                                    h = c.alias;
                                if (p && !c.pattern.global) {
                                    var g = c.pattern.toString().match(/[imuy]*$/)[0];
                                    c.pattern = RegExp(c.pattern.source, g + "g")
                                }
                                c = c.pattern || c;
                                for (var m = 0, v = 0; m < r.length; v += (r[m].matchedStr || r[m]).length, ++m) {
                                    var b = r[m];
                                    if (r.length > e.length) break e;
                                    if (!(b instanceof i)) {
                                        c.lastIndex = 0;
                                        var y = c.exec(b),
                                            w = 1;
                                        if (!y && p && m != r.length - 1) {
                                            if (c.lastIndex = v, y = c.exec(e), !y) break;
                                            for (var E = y.index + (d ? y[1].length : 0), x = y.index + y[0].length, T = m, k = v, S = r.length; S > T && x > k; ++T) k += (r[T].matchedStr || r[T]).length, E >= k && (++m, v = k);
                                            if (r[m] instanceof i || r[T - 1].greedy) continue;
                                            w = T - m, b = e.slice(v, k), y.index -= v
                                        }
                                        if (y) {
                                            d && (f = y[1].length);
                                            var E = y.index + f,
                                                y = y[0].slice(f),
                                                x = E + y.length,
                                                C = b.slice(0, E),
                                                A = b.slice(x),
                                                N = [m, w];
                                            C && N.push(C);
                                            var $ = new i(a, u ? n.tokenize(y, u) : y, h, y, p);
                                            N.push($), A && N.push(A), Array.prototype.splice.apply(r, N)
                                        }
                                    }
                                }
                            }
                        }
                    return r
                },
                hooks: {
                    all: {},
                    add: function (e, t) {
                        var i = n.hooks.all;
                        i[e] = i[e] || [], i[e].push(t)
                    },
                    run: function (e, t) {
                        var i = n.hooks.all[e];
                        if (i && i.length)
                            for (var r, o = 0; r = i[o++];) r(t)
                    }
                }
            },
            i = n.Token = function (e, t, n, i, r) {
                this.type = e, this.content = t, this.alias = n, this.matchedStr = i || null, this.greedy = !!r
            };
        if (i.stringify = function (e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e)) return e.map(function (n) {
                    return i.stringify(n, t, e)
                }).join("");
                var o = {
                    type: e.type,
                    content: i.stringify(e.content, t, r),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: r
                };
                if ("comment" == o.type && (o.attributes.spellcheck = "true"), e.alias) {
                    var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(o.classes, a)
                }
                n.hooks.run("wrap", o);
                var s = "";
                for (var l in o.attributes) s += (s ? " " : "") + l + '="' + (o.attributes[l] || "") + '"';
                return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + o.content + "</" + o.tag + ">"
            }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
            var t = JSON.parse(e.data),
                i = t.language,
                r = t.code,
                o = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[i], i)), o && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (n.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /[=>"']/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: {
        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}), Prism.languages.js = Prism.languages.javascript, Prism.languages.actionscript = Prism.languages.extend("javascript", {
    keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
}), Prism.languages.actionscript["class-name"].alias = "function", Prism.languages.markup && Prism.languages.insertBefore("actionscript", "string", {
    xml: {
        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\\1|\\?(?!\1)[\w\W])*\2)*\s*\/?>/,
        lookbehind: !0,
        inside: {
            rest: Prism.languages.markup
        }
    }
}), Prism.languages.aspnet = Prism.languages.extend("markup", {
    "page-directive tag": {
        pattern: /<%\s*@.*%>/i,
        inside: {
            "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
            rest: Prism.languages.markup.tag.inside
        }
    },
    "directive tag": {
        pattern: /<%.*%>/i,
        inside: {
            "directive tag": /<%\s*?[$=%#:]{0,2}|%>/i,
            rest: Prism.languages.csharp
        }
    }
}), Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, Prism.languages.insertBefore("inside", "punctuation", {
    "directive tag": Prism.languages.aspnet["directive tag"]
}, Prism.languages.aspnet.tag.inside["attr-value"]), Prism.languages.insertBefore("aspnet", "comment", {
    "asp comment": /<%--[\w\W]*?--%>/
}), Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
    "asp script": {
        pattern: /(<script(?=.*runat=['"]?server['"]?)[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.csharp || {}
    }
}), !function (e) {
    var t = {
        variable: [{
            pattern: /\$?\(\([\w\W]+?\)\)/,
            inside: {
                variable: [{
                    pattern: /(^\$\(\([\w\W]+)\)\)/,
                    lookbehind: !0
                }, /^\$\(\(/],
                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/
            }
        }, {
            pattern: /\$\([^)]+\)|`[^`]+`/,
            inside: {
                variable: /^\$\(|^`|\)$|`$/
            }
        }, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]
    };
    e.languages.bash = {
        shebang: {
            pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
            alias: "important"
        },
        comment: {
            pattern: /(^|[^"{\\])#.*/,
            lookbehind: !0
        },
        string: [{
            pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, {
            pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
            greedy: !0,
            inside: t
        }],
        variable: t.variable,
        "function": {
            pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        "boolean": {
            pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
    };
    var n = t.variable[1].inside;
    n["function"] = e.languages.bash["function"], n.keyword = e.languages.bash.keyword, n["boolean"] = e.languages.bash["boolean"], n.operator = e.languages.bash.operator, n.punctuation = e.languages.bash.punctuation
}(Prism), Prism.languages.basic = {
    string: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
    comment: {
        pattern: /(?:!|REM\b).+/i,
        inside: {
            keyword: /^REM/i
        }
    },
    number: /(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    "function": /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    punctuation: /[,;:()]/
}, Prism.languages.c = Prism.languages.extend("clike", {
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
        lookbehind: !0,
        alias: "property",
        inside: {
            string: {
                pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
                lookbehind: !0
            },
            directive: {
                pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    },
    constant: /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
}), delete Prism.languages.c["class-name"], delete Prism.languages.c["boolean"], Prism.languages.csharp = Prism.languages.extend("clike", {
    keyword: /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
    string: [/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/, /("|')(\\?.)*?\1/],
    number: /\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i
}), Prism.languages.insertBefore("csharp", "keyword", {
    "generic-method": {
        pattern: /[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,
        alias: "function",
        inside: {
            keyword: Prism.languages.csharp.keyword,
            punctuation: /[<>(),.:]/
        }
    },
    preprocessor: {
        pattern: /(^\s*)#.*/m,
        lookbehind: !0,
        alias: "property",
        inside: {
            directive: {
                pattern: /(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    }
}), Prism.languages.cpp = Prism.languages.extend("c", {
    keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    "boolean": /\b(true|false)\b/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
}), Prism.languages.insertBefore("cpp", "keyword", {
    "class-name": {
        pattern: /(class\s+)[a-z0-9_]+/i,
        lookbehind: !0
    }
}), !function (e) {
    var t = /#(?!\{).+/,
        n = {
            pattern: /#\{[^}]+\}/,
            alias: "variable"
        };
    e.languages.coffeescript = e.languages.extend("javascript", {
        comment: t,
        string: [{
            pattern: /'(?:\\?[^\\])*?'/,
            greedy: !0
        }, {
            pattern: /"(?:\\?[^\\])*?"/,
            greedy: !0,
            inside: {
                interpolation: n
            }
        }],
        keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        "class-member": {
            pattern: /@(?!\d)\w+/,
            alias: "variable"
        }
    }), e.languages.insertBefore("coffeescript", "comment", {
        "multiline-comment": {
            pattern: /###[\s\S]+?###/,
            alias: "comment"
        },
        "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: {
                comment: t,
                interpolation: n
            }
        }
    }), e.languages.insertBefore("coffeescript", "string", {
        "inline-javascript": {
            pattern: /`(?:\\?[\s\S])*?`/,
            inside: {
                delimiter: {
                    pattern: /^`|`$/,
                    alias: "punctuation"
                },
                rest: e.languages.javascript
            }
        },
        "multiline-string": [{
            pattern: /'''[\s\S]*?'''/,
            greedy: !0,
            alias: "string"
        }, {
            pattern: /"""[\s\S]*?"""/,
            greedy: !0,
            alias: "string",
            inside: {
                interpolation: n
            }
        }]
    }), e.languages.insertBefore("coffeescript", "keyword", {
        property: /(?!\d)\w+(?=\s*:(?!:))/
    }), delete e.languages.coffeescript["template-string"]
}(Prism), !function (e) {
    e.languages.ruby = e.languages.extend("clike", {
        comment: /#(?!\{[^\r\n]*?\}).*/,
        keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
    });
    var t = {
        pattern: /#\{[^}]+\}/,
        inside: {
            delimiter: {
                pattern: /^#\{|\}$/,
                alias: "tag"
            },
            rest: e.util.clone(e.languages.ruby)
        }
    };
    e.languages.insertBefore("ruby", "keyword", {
        regex: [{
            pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0
        }],
        variable: /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
        symbol: /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
    }), e.languages.insertBefore("ruby", "number", {
        builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
        constant: /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
    }), e.languages.ruby.string = [{
        pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,
        inside: {
            interpolation: t
        }
    }]
}(Prism), Prism.languages.css.selector = {
    pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
    inside: {
        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
        "pseudo-class": /:[-\w]+(?:\(.*\))?/,
        "class": /\.[-:\.\w]+/,
        id: /#[-:\.\w]+/,
        attribute: /\[[^\]]+\]/
    }
}, Prism.languages.insertBefore("css", "function", {
    hexcode: /#[\da-f]{3,6}/i,
    entity: /\\[\da-f]{1,8}/i,
    number: /[\d%\.]+/
}), Prism.languages.fsharp = Prism.languages.extend("clike", {
    comment: [{
        pattern: /(^|[^\\])\(\*[\w\W]*?\*\)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
    string: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|("|')(?:\\\1|\\?(?!\1)[\s\S])*\1)B?/,
    number: [/\b-?0x[\da-fA-F]+(un|lf|LF)?\b/, /\b-?0b[01]+(y|uy)?\b/, /\b-?(\d*\.?\d+|\d+\.)([fFmM]|[eE][+-]?\d+)?\b/, /\b-?\d+(y|uy|s|us|l|u|ul|L|UL|I)?\b/]
}), Prism.languages.insertBefore("fsharp", "keyword", {
    preprocessor: {
        pattern: /^[^\r\n\S]*#.*/m,
        alias: "property",
        inside: {
            directive: {
                pattern: /(\s*#)\b(else|endif|if|light|line|nowarn)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    }
}), Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(\\?.)*?\1/m,
    command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
            parameter: /\s(--|-)\w+/m
        }
    },
    coord: /^@@.*@@$/m,
    commit_sha1: /^commit \w{40}$/m
}, Prism.languages.go = Prism.languages.extend("clike", {
    keyword: /\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    builtin: /\b(bool|byte|complex(64|128)|error|float(32|64)|rune|string|u?int(8|16|32|64|)|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(ln)?|real|recover)\b/,
    "boolean": /\b(_|iota|nil|true|false)\b/,
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    number: /\b(-?(0x[a-f\d]+|(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)i?)\b/i,
    string: /("|'|`)(\\?.|\r|\n)*?\1/
}), delete Prism.languages.go["class-name"], Prism.languages.groovy = Prism.languages.extend("clike", {
    keyword: /\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
    string: [{
        pattern: /("""|''')[\W\w]*?\1|(\$\/)(\$\/\$|[\W\w])*?\/\$/,
        greedy: !0
    }, {
        pattern: /("|'|\/)(?:\\?.)*?\1/,
        greedy: !0
    }],
    number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
    operator: {
        pattern: /(^|[^.])(~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
        lookbehind: !0
    },
    punctuation: /\.+|[{}[\];(),:$]/
}), Prism.languages.insertBefore("groovy", "string", {
    shebang: {
        pattern: /#!.+/,
        alias: "comment"
    }
}), Prism.languages.insertBefore("groovy", "punctuation", {
    "spock-block": /\b(setup|given|when|then|and|cleanup|expect|where):/
}), Prism.languages.insertBefore("groovy", "function", {
    annotation: {
        alias: "punctuation",
        pattern: /(^|[^.])@\w+/,
        lookbehind: !0
    }
}), Prism.hooks.add("wrap", function (e) {
    if ("groovy" === e.language && "string" === e.type) {
        var t = e.content[0];
        if ("'" != t) {
            var n = /([^\\])(\$(\{.*?\}|[\w\.]+))/;
            "$" === t && (n = /([^\$])(\$(\{.*?\}|[\w\.]+))/), e.content = e.content.replace(/&amp;/g, "&").replace(/&lt;/g, "<"), e.content = Prism.highlight(e.content, {
                expression: {
                    pattern: n,
                    lookbehind: !0,
                    inside: Prism.languages.groovy
                }
            }), e.classes.push("/" === t ? "regex" : "gstring")
        }
    }
}), !function (e) {
    e.languages.haml = {
        "multiline-comment": {
            pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*((?:\r?\n|\r)\2[\t ]+.+)*/,
            lookbehind: !0,
            alias: "comment"
        },
        "multiline-code": [{
            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*((?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*((?:\r?\n|\r)\2[\t ]+.+)/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        }, {
            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*((?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        }],
        filter: {
            pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+((?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                }
            }
        },
        markup: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.markup
            }
        },
        doctype: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
            lookbehind: !0
        },
        tag: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
                    lookbehind: !0,
                    inside: {
                        rest: e.languages.ruby
                    }
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:"(?:\\?.)*?"|[^)\s]+)/,
                            lookbehind: !0
                        },
                        "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                        punctuation: /[=(),]/
                    }
                }, {
                    pattern: /\[[^\]]+\]/,
                    inside: {
                        rest: e.languages.ruby
                    }
                }],
                punctuation: /[<>]/
            }
        },
        code: {
            pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        },
        interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
                delimiter: {
                    pattern: /^#\{|\}$/,
                    alias: "punctuation"
                },
                rest: e.languages.ruby
            }
        },
        punctuation: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
            lookbehind: !0
        }
    };
    for (var t = "((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+", n = ["css", {
        filter: "coffee",
        language: "coffeescript"
    }, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], i = {}, r = 0, o = n.length; o > r; r++) {
        var a = n[r];
        a = "string" == typeof a ? {
            filter: a,
            language: a
        } : a, e.languages[a.language] && (i["filter-" + a.filter] = {
            pattern: RegExp(t.replace("{{filter_name}}", a.filter)),
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                },
                rest: e.languages[a.language]
            }
        })
    }
    e.languages.insertBefore("haml", "filter", i)
}(Prism), Prism.languages.haskell = {
    comment: {
        pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\w\W]*?-})/m,
        lookbehind: !0
    },
    "char": /'([^\\']|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
    string: {
        pattern: /"([^\\"]|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
        greedy: !0
    },
    keyword: /\b(case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
    import_statement: {
        pattern: /(\r?\n|\r|^)\s*import\s+(qualified\s+)?([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*(\s+as\s+([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*)?(\s+hiding\b)?/m,
        inside: {
            keyword: /\b(import|qualified|as|hiding)\b/
        }
    },
    builtin: /\b(abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
    number: /\b(\d+(\.\d+)?(e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
    operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*`/,
    hvariable: /\b([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*\b/,
    constant: /\b([A-Z][_a-zA-Z0-9']*\.)*[A-Z][_a-zA-Z0-9']*\b/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.http = {
    "request-line": {
        pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,
        inside: {
            property: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
            "attr-name": /:\w+/
        }
    },
    "response-status": {
        pattern: /^HTTP\/1.[01] [0-9]+.*/m,
        inside: {
            property: {
                pattern: /(^HTTP\/1.[01] )[0-9]+.*/i,
                lookbehind: !0
            }
        }
    },
    "header-name": {
        pattern: /^[\w-]+:(?=.)/m,
        alias: "keyword"
    }
};
var httpLanguages = {
    "application/json": Prism.languages.javascript,
    "application/xml": Prism.languages.markup,
    "text/xml": Prism.languages.markup,
    "text/html": Prism.languages.markup
};
for (var contentType in httpLanguages)
    if (httpLanguages[contentType]) {
        var options = {};
        options[contentType] = {
            pattern: new RegExp("(content-type:\\s*" + contentType + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
            lookbehind: !0,
            inside: {
                rest: httpLanguages[contentType]
            }
        }, Prism.languages.insertBefore("http", "header-name", options)
    }
Prism.languages.ini = {
    comment: /^[ \t]*;.*$/m,
    important: /\[.*?\]/,
    constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
    "attr-value": {
        pattern: /=.*/,
        inside: {
            punctuation: /^[=]/
        }
    }
}, !function (e) {
    e.languages.jade = {
        comment: {
            pattern: /(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,
            lookbehind: !0
        },
        "multiline-script": {
            pattern: /(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        },
        filter: {
            pattern: /(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                }
            }
        },
        "multiline-plain-text": {
            pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0
        },
        markup: {
            pattern: /(^[\t ]*)<.+/m,
            lookbehind: !0,
            inside: {
                rest: e.languages.markup
            }
        },
        doctype: {
            pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
            lookbehind: !0
        },
        "flow-control": {
            pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
            lookbehind: !0,
            inside: {
                each: {
                    pattern: /^each .+? in\b/,
                    inside: {
                        keyword: /\b(?:each|in)\b/,
                        punctuation: /,/
                    }
                },
                branch: {
                    pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                    alias: "keyword"
                },
                rest: e.languages.javascript
            }
        },
        keyword: {
            pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
            lookbehind: !0
        },
        mixin: [{
            pattern: /(^[\t ]*)mixin .+/m,
            lookbehind: !0,
            inside: {
                keyword: /^mixin/,
                "function": /\w+(?=\s*\(|\s*$)/,
                punctuation: /[(),.]/
            }
        }, {
            pattern: /(^[\t ]*)\+.+/m,
            lookbehind: !0,
            inside: {
                name: {
                    pattern: /^\+\w+/,
                    alias: "function"
                },
                rest: e.languages.javascript
            }
        }],
        script: {
            pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        },
        "plain-text": {
            pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
            lookbehind: !0
        },
        tag: {
            pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /&[^(]+\([^)]+\)/,
                    inside: {
                        rest: e.languages.javascript
                    }
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                            lookbehind: !0,
                            inside: {
                                rest: e.languages.javascript
                            }
                        },
                        "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                        punctuation: /[!=(),]+/
                    }
                }],
                punctuation: /:/
            }
        },
        code: [{
            pattern: /(^[\t ]*(?:-|!?=)).+/m,
            lookbehind: !0,
            inside: {
                rest: e.languages.javascript
            }
        }],
        punctuation: /[.\-!=|]+/
    };
    for (var t = "(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+", n = [{
        filter: "atpl",
        language: "twig"
    }, {
        filter: "coffee",
        language: "coffeescript"
    }, "ejs", "handlebars", "hogan", "less", "livescript", "markdown", "mustache", "plates", {
        filter: "sass",
        language: "scss"
    }, "stylus", "swig"], i = {}, r = 0, o = n.length; o > r; r++) {
        var a = n[r];
        a = "string" == typeof a ? {
            filter: a,
            language: a
        } : a, e.languages[a.language] && (i["filter-" + a.filter] = {
            pattern: RegExp(t.replace("{{filter_name}}", a.filter), "m"),
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                },
                rest: e.languages[a.language]
            }
        })
    }
    e.languages.insertBefore("jade", "filter", i)
}(Prism), Prism.languages.java = Prism.languages.extend("clike", {
    keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
    operator: {
        pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
        lookbehind: !0
    }
}), Prism.languages.insertBefore("java", "function", {
    annotation: {
        alias: "punctuation",
        pattern: /(^|[^.])@\w+/,
        lookbehind: !0
    }
}), Prism.languages.json = {
    property: /".*?"(?=\s*:)/gi,
    string: /"(?!:)(\\?[^"])*?"(?!:)/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
    punctuation: /[{}[\]);,]/g,
    operator: /:/g,
    "boolean": /\b(true|false)\b/gi,
    "null": /\bnull\b/gi
}, Prism.languages.jsonp = Prism.languages.json, !function (e) {
    var t = /\\([^a-z()[\]]|[a-z\*]+)/i,
        n = {
            "equation-command": {
                pattern: t,
                alias: "regex"
            }
        };
    e.languages.latex = {
        comment: /%.*/m,
        cdata: {
            pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,
            lookbehind: !0
        },
        equation: [{
            pattern: /\$(?:\\?[\w\W])*?\$|\\\((?:\\?[\w\W])*?\\\)|\\\[(?:\\?[\w\W])*?\\\]/,
            inside: n,
            alias: "string"
        }, {
            pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,
            lookbehind: !0,
            inside: n,
            alias: "string"
        }],
        keyword: {
            pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        url: {
            pattern: /(\\url\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        headline: {
            pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
            lookbehind: !0,
            alias: "class-name"
        },
        "function": {
            pattern: t,
            alias: "selector"
        },
        punctuation: /[[\]{}&]/
    }
}(Prism), Prism.languages.less = Prism.languages.extend("css", {
    comment: [/\/\*[\w\W]*?\*\//, {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: !0
    }],
    atrule: {
        pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
        inside: {
            punctuation: /[:()]/
        }
    },
    selector: {
        pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
        inside: {
            variable: /@+[\w-]+/
        }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
    punctuation: /[{}();:,]/,
    operator: /[+\-*\/]/
}), Prism.languages.insertBefore("less", "punctuation", {
    "function": Prism.languages.less["function"]
}), Prism.languages.insertBefore("less", "property", {
    variable: [{
        pattern: /@[\w-]+\s*:/,
        inside: {
            punctuation: /:/
        }
    }, /@@?[\w-]+/],
    "mixin-usage": {
        pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
        lookbehind: !0,
        alias: "function"
    }
}), Prism.languages.makefile = {
    comment: {
        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|.)*/,
        lookbehind: !0
    },
    string: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    symbol: {
        pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
        inside: {
            variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
        }
    },
    variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
        pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
        lookbehind: !0
    }],
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
}, Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", {
    blockquote: {
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation"
    },
    code: [{
        pattern: /^(?: {4}|\t).+/m,
        alias: "keyword"
    }, {
        pattern: /``.+?``|`[^`\n]+`/,
        alias: "keyword"
    }],
    title: [{
        pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
        alias: "important",
        inside: {
            punctuation: /==+$|--+$/
        }
    }, {
        pattern: /(^\s*)#+.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
            punctuation: /^#+|#+$/
        }
    }],
    hr: {
        pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation"
    },
    list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation"
    },
    "url-reference": {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
            variable: {
                pattern: /^(!?\[)[^\]]+/,
                lookbehind: !0
            },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
        },
        alias: "url"
    },
    bold: {
        pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: {
            punctuation: /^\*\*|^__|\*\*$|__$/
        }
    },
    italic: {
        pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: {
            punctuation: /^[*_]|[*_]$/
        }
    },
    url: {
        pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
        inside: {
            variable: {
                pattern: /(!?\[)[^\]]+(?=\]$)/,
                lookbehind: !0
            },
            string: {
                pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
            }
        }
    }
}), Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic), Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold), Prism.languages.matlab = {
    string: /\B'(?:''|[^'\n])*'/,
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    number: /\b-?(?:\d*\.?\d+(?:[eE][+-]?\d+)?(?:[ij])?|[ij])\b/,
    keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    "function": /(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/
}, Prism.languages.objectivec = Prism.languages.extend("c", {
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    string: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}), Prism.languages.pascal = {
    comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
    string: /(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
    keyword: [{
        pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
        lookbehind: !0
    }],
    number: [/[+-]?(?:[&%]\d+|\$[a-f\d]+)/i, /([+-]|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
    operator: [/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i, {
        pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
        lookbehind: !0
    }],
    punctuation: /\(\.|\.\)|[()\[\]:;,.]/
}, Prism.languages.perl = {
    comment: [{
        pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\$])#.*/,
        lookbehind: !0
    }],
    string: [/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/, /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\1/, /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/, /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/, /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/, /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/, /("|`)(?:[^\\]|\\[\s\S])*?\1/, /'(?:[^'\\\r\n]|\\.)*'/],
    regex: [/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[msixpodualngc]*/, /\b(?:m|qr)\s+([a-zA-Z0-9])(?:[^\\]|\\.)*?\1[msixpodualngc]*/, /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/, /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/, /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/, /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,
        lookbehind: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,
        lookbehind: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
        lookbehind: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
        lookbehind: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
        lookbehind: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
        lookbehind: !0
    }, /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/],
    variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
    filehandle: {
        pattern: /<(?![<=])\S*>|\b_\b/,
        alias: "symbol"
    },
    vstring: {
        pattern: /v\d+(\.\d+)*|\d+(\.\d+){2,}/,
        alias: "string"
    },
    "function": {
        pattern: /sub [a-z0-9_]+/i,
        inside: {
            keyword: /sub/
        }
    },
    keyword: /\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    number: /\b-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)\b/,
    operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
    punctuation: /[{}[\];(),:]/
}, Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    constant: /\b[A-Z0-9_]{2,}\b/,
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
        lookbehind: !0,
        greedy: !0
    }
}), Prism.languages.insertBefore("php", "class-name", {
    "shell-comment": {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        alias: "comment"
    }
}), Prism.languages.insertBefore("php", "keyword", {
    delimiter: /\?>|<\?(?:php)?/i,
    variable: /\$\w+\b/i,
    "package": {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
        lookbehind: !0,
        inside: {
            punctuation: /\\/
        }
    }
}), Prism.languages.insertBefore("php", "operator", {
    property: {
        pattern: /(->)[\w]+/,
        lookbehind: !0
    }
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function (e) {
    "php" === e.language && (e.tokenStack = [], e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function (t) {
        return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}"
    }))
}), Prism.hooks.add("after-highlight", function (e) {
    if ("php" === e.language) {
        for (var t, n = 0; t = e.tokenStack[n]; n++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (n + 1) + "}}}", Prism.highlight(t, e.grammar, "php").replace(/\$/g, "$$$$"));
        e.element.innerHTML = e.highlightedCode
    }
}), Prism.hooks.add("wrap", function (e) {
    "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
}), Prism.languages.insertBefore("php", "comment", {
    markup: {
        pattern: /<[^?]\/?(.*?)>/,
        inside: Prism.languages.markup
    },
    php: /\{\{\{PHP[0-9]+\}\}\}/
})), Prism.languages.insertBefore("php", "variable", {
    "this": /\$this\b/,
    global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
    scope: {
        pattern: /\b[\w\\]+::/,
        inside: {
            keyword: /(static|self|parent)/,
            punctuation: /(::|\\)/
        }
    }
}), Prism.languages.prolog = {
    comment: [/%.+/, /\/\*[\s\S]*?\*\//],
    string: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
    variable: /\b[A-Z_]\w*/,
    "function": /\b[a-z]\w*(?:(?=\()|\/\d+)/,
    number: /\b\d+\.?\d*/,
    operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
    punctuation: /[(){}\[\],]/
}, Prism.languages.python = {
    "triple-quoted-string": {
        pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
        alias: "string"
    },
    comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0
    },
    string: {
        pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
        greedy: !0
    },
    "function": {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
        lookbehind: !0
    },
    "class-name": {
        pattern: /(\bclass\s+)[a-z0-9_]+/i,
        lookbehind: !0
    },
    keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
    "boolean": /\b(?:True|False)\b/,
    number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.r = {
    comment: /#.*/,
    string: /(['"])(?:\\?.)*?\1/,
    "percent-operator": {
        pattern: /%[^%\s]*%/,
        alias: "operator"
    },
    "boolean": /\b(?:TRUE|FALSE)\b/,
    ellipsis: /\.\.(?:\.|\d+)/,
    number: [/\b(?:NaN|Inf)\b/, /\b(?:0x[\dA-Fa-f]+(?:\.\d*)?|\d*\.?\d+)(?:[EePp][+-]?\d+)?[iL]?\b/],
    keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
    punctuation: /[(){}\[\],;]/
}, !function (e) {
    var t = e.util.clone(e.languages.javascript);
    e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i, e.languages.jsx.tag.inside["attr-value"].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;
    var n = e.util.clone(e.languages.jsx);
    delete n.punctuation, n = e.languages.insertBefore("jsx", "operator", {
        punctuation: /=(?={)|[{}[\];(),.:]/
    }, {
        jsx: n
    }), e.languages.insertBefore("inside", "attr-value", {
        script: {
            pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
            inside: n,
            alias: "language-javascript"
        }
    }, e.languages.jsx.tag)
}(Prism), !function (e) {
    e.languages.sass = e.languages.extend("css", {
        comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
            lookbehind: !0
        }
    }), e.languages.insertBefore("sass", "atrule", {
        "atrule-line": {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            inside: {
                atrule: /(?:@[\w-]+|[+=])/m
            }
        }
    }), delete e.languages.sass.atrule;
    var t = /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,
        n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
            pattern: /(\s+)-(?=\s)/,
            lookbehind: !0
        }];
    e.languages.insertBefore("sass", "property", {
        "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            inside: {
                punctuation: /:/,
                variable: t,
                operator: n
            }
        },
        "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
            inside: {
                property: [/[^:\s]+(?=\s*:)/, {
                    pattern: /(:)[^:\s]+/,
                    lookbehind: !0
                }],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important
            }
        }
    }), delete e.languages.sass.property, delete e.languages.sass.important, delete e.languages.sass.selector, e.languages.insertBefore("sass", "punctuation", {
        selector: {
            pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
            lookbehind: !0
        }
    })
}(Prism), Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
        lookbehind: !0
    },
    atrule: {
        pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /(?:[-a-z]+-)*url(?=\()/i,
    selector: {
        pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
        inside: {
            parent: {
                pattern: /&/,
                alias: "important"
            },
            placeholder: /%[-_\w]+/,
            variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
        }
    }
}), Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: !0
    }]
}), Prism.languages.scss.property = {
    pattern: /(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,
    inside: {
        variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
    }
}, Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
    placeholder: {
        pattern: /%[-_\w]+/,
        alias: "selector"
    },
    statement: {
        pattern: /\B!(?:default|optional)\b/i,
        alias: "keyword"
    },
    "boolean": /\b(?:true|false)\b/,
    "null": /\bnull\b/,
    operator: {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
        lookbehind: !0
    }
}), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss), Prism.languages.scala = Prism.languages.extend("java", {
    keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
    string: [{
        pattern: /"""[\W\w]*?"""/,
        greedy: !0
    }, {
        pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
        greedy: !0
    }],
    builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
    number: /\b(?:0x[\da-f]*\.?[\da-f]+|\d*\.?\d+e?\d*[dfl]?)\b/i,
    symbol: /'[^\d\s\\]\w*/
}), delete Prism.languages.scala["class-name"], delete Prism.languages.scala["function"], Prism.languages.scheme = {
    comment: /;.*/,
    string: /"(?:[^"\\\r\n]|\\.)*?"|'[^('\s]*/,
    keyword: {
        pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)/,
        lookbehind: !0
    },
    builtin: {
        pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)/,
        lookbehind: !0
    },
    number: {
        pattern: /(\s|\))[-+]?[0-9]*\.?[0-9]+(?:\s*[-+]\s*[0-9]*\.?[0-9]+i)?\b/,
        lookbehind: !0
    },
    "boolean": /#[tf]/,
    operator: {
        pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)/,
        lookbehind: !0
    },
    "function": {
        pattern: /(\()[^\s()]*(?=\s)/,
        lookbehind: !0
    },
    punctuation: /[()]/
}, Prism.languages.smalltalk = {
    comment: /"(?:""|[^"])+"/,
    string: /'(?:''|[^'])+'/,
    symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
    "block-arguments": {
        pattern: /(\[\s*):[^\[|]*?\|/,
        lookbehind: !0,
        inside: {
            variable: /:[\da-z]+/i,
            punctuation: /\|/
        }
    },
    "temporary-variables": {
        pattern: /\|[^|]+\|/,
        inside: {
            variable: /[\da-z]+/i,
            punctuation: /\|/
        }
    },
    keyword: /\b(?:nil|true|false|self|super|new)\b/,
    character: {
        pattern: /\$./,
        alias: "string"
    },
    number: [/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/, /(?:\B-|\b)\d+(?:\.\d+)?(?:e-?\d+)?/],
    operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
    punctuation: /[.;:?\[\](){}]/
}, Prism.languages.sql = {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: !0
    },
    string: {
        pattern: /(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,
        lookbehind: !0
    },
    variable: /@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,
    "function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
    "boolean": /\b(?:TRUE|FALSE|NULL)\b/i,
    number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
    operator: /[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
}, Prism.languages.swift = Prism.languages.extend("clike", {
    string: {
        pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                inside: {
                    delimiter: {
                        pattern: /^\\\(|\)$/,
                        alias: "variable"
                    }
                }
            }
        }
    },
    keyword: /\b(as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|Protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
    number: /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    constant: /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    atrule: /@\b(IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
    builtin: /\b([A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
}), Prism.languages.swift.string.inside.interpolation.inside.rest = Prism.util.clone(Prism.languages.swift), Prism.languages.typescript = Prism.languages.extend("javascript", {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/
}), Prism.languages.wiki = Prism.languages.extend("markup", {
    "block-comment": {
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0,
        alias: "comment"
    },
    heading: {
        pattern: /^(=+).+?\1/m,
        inside: {
            punctuation: /^=+|=+$/,
            important: /.+/
        }
    },
    emphasis: {
        pattern: /('{2,5}).+?\1/,
        inside: {
            "bold italic": {
                pattern: /(''''').+?(?=\1)/,
                lookbehind: !0
            },
            bold: {
                pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
                lookbehind: !0
            },
            italic: {
                pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
                lookbehind: !0
            },
            punctuation: /^''+|''+$/
        }
    },
    hr: {
        pattern: /^-{4,}/m,
        alias: "punctuation"
    },
    url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
    variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?}}/],
    symbol: [/^#redirect/im, /~{3,5}/],
    "table-tag": {
        pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
        lookbehind: !0,
        inside: {
            "table-bar": {
                pattern: /\|$/,
                alias: "punctuation"
            },
            rest: Prism.languages.markup.tag.inside
        }
    },
    punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
}), Prism.languages.insertBefore("wiki", "tag", {
    nowiki: {
        pattern: /<(nowiki|pre|source)\b[\w\W]*?>[\w\W]*?<\/\1>/i,
        inside: {
            tag: {
                pattern: /<(?:nowiki|pre|source)\b[\w\W]*?>|<\/(?:nowiki|pre|source)>/i,
                inside: Prism.languages.markup.tag.inside
            }
        }
    }
}), Prism.languages.yaml = {
    scalar: {
        pattern: /([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,
        lookbehind: !0,
        alias: "string"
    },
    comment: /#.*/,
    key: {
        pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
        lookbehind: !0,
        alias: "atrule"
    },
    directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: "important"
    },
    datetime: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,
        lookbehind: !0,
        alias: "number"
    },
    "boolean": {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
        alias: "important"
    },
    "null": {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
        alias: "important"
    },
    string: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,
        lookbehind: !0
    },
    number: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0
    },
    tag: /![^\s]+/,
    important: /[&*][\w]+/,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
}, !function () {
    function e(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }

    function t(e, t) {
        return t = " " + t + " ", (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) > -1
    }

    function n(e, n, i) {
        for (var o, a = n.replace(/\s+/g, "").split(","), s = +e.getAttribute("data-line-offset") || 0, l = r() ? parseInt : parseFloat, c = l(getComputedStyle(e).lineHeight), u = 0; o = a[u++];) {
            o = o.split("-");
            var d = +o[0],
                p = +o[1] || d,
                f = document.createElement("div");
            f.textContent = Array(p - d + 2).join(" \n"), f.setAttribute("aria-hidden", "true"), f.className = (i || "") + " line-highlight", t(e, "line-numbers") || (f.setAttribute("data-start", d), p > d && f.setAttribute("data-end", p)), f.style.top = (d - s - 1) * c + "px", t(e, "line-numbers") ? e.appendChild(f) : (e.querySelector("code") || e).appendChild(f)
        }
    }

    function i() {
        var t = location.hash.slice(1);
        e(".temporary.line-highlight").forEach(function (e) {
            e.parentNode.removeChild(e)
        });
        var i = (t.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (i && !document.getElementById(t)) {
            var r = t.slice(0, t.lastIndexOf(".")),
                o = document.getElementById(r);
            o && (o.hasAttribute("data-line") || o.setAttribute("data-line", ""), n(o, i, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView())
        }
    }

    if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
        var r = function () {
                var e;
                return function () {
                    if ("undefined" == typeof e) {
                        var t = document.createElement("div");
                        t.style.fontSize = "13px", t.style.lineHeight = "1.5", t.style.padding = 0, t.style.border = 0, t.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(t), e = 38 === t.offsetHeight, document.body.removeChild(t)
                    }
                    return e
                }
            }(),
            o = 0;
        Prism.hooks.add("complete", function (t) {
            var r = t.element.parentNode,
                a = r && r.getAttribute("data-line");
            r && a && /pre/i.test(r.nodeName) && (clearTimeout(o), e(".line-highlight", r).forEach(function (e) {
                e.parentNode.removeChild(e)
            }), n(r, a), o = setTimeout(i, 1))
        }), window.addEventListener && window.addEventListener("hashchange", i)
    }
}(), !function () {
    "undefined" != typeof self && self.Prism && self.document && Prism.hooks.add("complete", function (e) {
        if (e.code) {
            var t = e.element.parentNode,
                n = /\s*\bline-numbers\b\s*/;
            if (t && /pre/i.test(t.nodeName) && (n.test(t.className) || n.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
                n.test(e.element.className) && (e.element.className = e.element.className.replace(n, "")), n.test(t.className) || (t.className += " line-numbers");
                var i, r = e.code.match(/\n(?!$)/g),
                    o = r ? r.length + 1 : 1,
                    a = new Array(o + 1);
                a = a.join("<span></span>"), i = document.createElement("span"), i.setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = a, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i)
            }
        }
    })
}(), !function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var e = {
            html: "HTML",
            xml: "XML",
            svg: "SVG",
            mathml: "MathML",
            css: "CSS",
            clike: "C-like",
            javascript: "JavaScript",
            abap: "ABAP",
            actionscript: "ActionScript",
            apacheconf: "Apache Configuration",
            apl: "APL",
            applescript: "AppleScript",
            asciidoc: "AsciiDoc",
            aspnet: "ASP.NET (C#)",
            autoit: "AutoIt",
            autohotkey: "AutoHotkey",
            basic: "BASIC",
            csharp: "C#",
            cpp: "C++",
            coffeescript: "CoffeeScript",
            "css-extras": "CSS Extras",
            fsharp: "F#",
            glsl: "GLSL",
            graphql: "GraphQL",
            http: "HTTP",
            inform7: "Inform 7",
            json: "JSON",
            latex: "LaTeX",
            livescript: "LiveScript",
            lolcode: "LOLCODE",
            matlab: "MATLAB",
            mel: "MEL",
            nasm: "NASM",
            nginx: "nginx",
            nsis: "NSIS",
            objectivec: "Objective-C",
            ocaml: "OCaml",
            parigp: "PARI/GP",
            php: "PHP",
            "php-extras": "PHP Extras",
            powershell: "PowerShell",
            properties: ".properties",
            protobuf: "Protocol Buffers",
            jsx: "React JSX",
            rest: "reST (reStructuredText)",
            sas: "SAS",
            sass: "Sass (Sass)",
            scss: "Sass (Scss)",
            sql: "SQL",
            typescript: "TypeScript",
            vhdl: "VHDL",
            vim: "vim",
            wiki: "Wiki markup",
            xojo: "Xojo (REALbasic)",
            yaml: "YAML"
        };
        Prism.hooks.add("before-highlight", function (t) {
            var n = t.element.parentNode;
            if (n && /pre/i.test(n.nodeName)) {
                var i, r,
                    o = n.getAttribute("data-language") || e[t.language] || t.language.substring(0, 1).toUpperCase() + t.language.substring(1),
                    a = n.previousSibling;
                a && /\s*\bprism-show-language\b\s*/.test(a.className) && a.firstChild && /\s*\bprism-show-language-label\b\s*/.test(a.firstChild.className) ? r = a.firstChild : (i = document.createElement("div"), r = document.createElement("div"), r.className = "prism-show-language-label", i.className = "prism-show-language", i.appendChild(r), n.parentNode.insertBefore(i, n)), r.innerHTML = o
            }
        })
    }
}(), !function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
    }
}(function () {
    var e;
    return function t(e, n, i) {
        function r(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports, function (t) {
                    var n = e[a][1][t];
                    return r(n ? n : t)
                }, u, u.exports, t, e, n, i)
            }
            return n[a].exports
        }

        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r
    }({
        1: [function (e, t, n) {
            var i = e("matches-selector");
            t.exports = function (e, t, n) {
                for (var r = n ? e : e.parentNode; r && r !== document;) {
                    if (i(r, t)) return r;
                    r = r.parentNode
                }
            }
        }, {
            "matches-selector": 5
        }],
        2: [function (e, t, n) {
            function i(e, t, n, i, o) {
                var a = r.apply(this, arguments);
                return e.addEventListener(n, a, o), {
                    destroy: function () {
                        e.removeEventListener(n, a, o)
                    }
                }
            }

            function r(e, t, n, i) {
                return function (n) {
                    n.delegateTarget = o(n.target, t, !0), n.delegateTarget && i.call(e, n)
                }
            }

            var o = e("closest");
            t.exports = i
        }, {
            closest: 1
        }],
        3: [function (e, t, n) {
            n.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]));
            }, n.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function (e) {
                var t = Object.prototype.toString.call(e);
                return "[object Function]" === t
            }
        }, {}],
        4: [function (e, t, n) {
            function i(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!s.string(t)) throw new TypeError("Second argument must be a String");
                if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
                if (s.node(e)) return r(e, t, n);
                if (s.nodeList(e)) return o(e, t, n);
                if (s.string(e)) return a(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function r(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function () {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function o(e, t, n) {
                return Array.prototype.forEach.call(e, function (e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(e, function (e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function a(e, t, n) {
                return l(document.body, e, t, n)
            }

            var s = e("./is"),
                l = e("delegate");
            t.exports = i
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function (e, t, n) {
            function i(e, t) {
                if (o) return o.call(e, t);
                for (var n = e.parentNode.querySelectorAll(t), i = 0; i < n.length; ++i)
                    if (n[i] == e) return !0;
                return !1
            }

            var r = Element.prototype,
                o = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
            t.exports = i
        }, {}],
        6: [function (e, t, n) {
            function i(e) {
                var t;
                if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value;
                else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var n = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(e), n.removeAllRanges(), n.addRange(i), t = n.toString()
                }
                return t
            }

            t.exports = i
        }, {}],
        7: [function (e, t, n) {
            function i() {
            }

            i.prototype = {
                on: function (e, t, n) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function (e, t, n) {
                    function i() {
                        r.off(e, i), t.apply(n, arguments)
                    }

                    var r = this;
                    return i._ = t, this.on(e, i, n)
                },
                emit: function (e) {
                    var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        i = 0,
                        r = n.length;
                    for (i; r > i; i++) n[i].fn.apply(n[i].ctx, t);
                    return this
                },
                off: function (e, t) {
                    var n = this.e || (this.e = {}),
                        i = n[e],
                        r = [];
                    if (i && t)
                        for (var o = 0, a = i.length; a > o; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
                    return r.length ? n[e] = r : delete n[e], this
                }
            }, t.exports = i
        }, {}],
        8: [function (t, n, i) {
            !function (r, o) {
                if ("function" == typeof e && e.amd) e(["module", "select"], o);
                else if ("undefined" != typeof i) o(n, t("select"));
                else {
                    var a = {
                        exports: {}
                    };
                    o(a, r.select), r.clipboardAction = a.exports
                }
            }(this, function (e, t) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var r = n(t),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                    },
                    a = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }

                        return function (t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    s = function () {
                        function e(t) {
                            i(this, e), this.resolveOptions(t), this.initSelection()
                        }

                        return e.prototype.resolveOptions = function () {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }, e.prototype.initSelection = function () {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }, e.prototype.selectFake = function () {
                            var e = this,
                                t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return e.removeFake()
                            }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, r["default"])(this.fakeElem), this.copyText()
                        }, e.prototype.removeFake = function () {
                            this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                        }, e.prototype.selectTarget = function () {
                            this.selectedText = (0, r["default"])(this.target), this.copyText()
                        }, e.prototype.copyText = function () {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }, e.prototype.handleResult = function (e) {
                            e ? this.emitter.emit("success", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            }) : this.emitter.emit("error", {
                                action: this.action,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }, e.prototype.clearSelection = function () {
                            this.target && this.target.blur(), window.getSelection().removeAllRanges()
                        }, e.prototype.destroy = function () {
                            this.removeFake()
                        }, a(e, [{
                            key: "action",
                            set: function () {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function () {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function (e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== ("undefined" == typeof e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function () {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = s
            })
        }, {
            select: 6
        }],
        9: [function (t, n, i) {
            !function (r, o) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], o);
                else if ("undefined" != typeof i) o(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                else {
                    var a = {
                        exports: {}
                    };
                    o(a, r.clipboardAction, r.tinyEmitter, r.goodListener), r.clipboard = a.exports
                }
            }(this, function (e, t, n, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function l(e, t) {
                    var n = "data-clipboard-" + e;
                    return t.hasAttribute(n) ? t.getAttribute(n) : void 0
                }

                var c = r(t),
                    u = r(n),
                    d = r(i),
                    p = function (e) {
                        function t(n, i) {
                            o(this, t);
                            var r = a(this, e.call(this));
                            return r.resolveOptions(i), r.listenClick(n), r
                        }

                        return s(t, e), t.prototype.resolveOptions = function () {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                        }, t.prototype.listenClick = function (e) {
                            var t = this;
                            this.listener = (0, d["default"])(e, "click", function (e) {
                                return t.onClick(e)
                            })
                        }, t.prototype.onClick = function (e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new c["default"]({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                trigger: t,
                                emitter: this
                            })
                        }, t.prototype.defaultAction = function (e) {
                            return l("action", e)
                        }, t.prototype.defaultTarget = function (e) {
                            var t = l("target", e);
                            return t ? document.querySelector(t) : void 0
                        }, t.prototype.defaultText = function (e) {
                            return l("text", e)
                        }, t.prototype.destroy = function () {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }, t
                    }(u["default"]);
                e.exports = p
            })
        }, {
            "./clipboard-action": 8,
            "good-listener": 4,
            "tiny-emitter": 7
        }]
    }, {}, [9])(9)
}), !function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, require("jquery")) : e.lity = t(e, e.jQuery || e.Zepto)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n() {
        g[m > 0 ? "addClass" : "removeClass"]("lity-active")
    }

    function i(e) {
        var n = t.Deferred();
        return T ? (e.one(T, n.resolve), setTimeout(n.resolve, 500)) : n.resolve(), n.promise()
    }

    function r(e, n, i) {
        if (1 === arguments.length) return t.extend({}, e);
        if ("string" == typeof n) {
            if ("undefined" == typeof i) return "undefined" == typeof e[n] ? null : e[n];
            e[n] = i
        } else t.extend(e, n);
        return this
    }

    function o() {
        return "file:" === e.location.protocol ? "http:" : ""
    }

    function a(e) {
        for (var t, n = decodeURI(e).split("&"), i = {}, r = 0, o = n.length; o > r; r++) n[r] && (t = n[r].split("="), i[t[0]] = t[1]);
        return i
    }

    function s(e, n) {
        return e + (e.indexOf("?") > -1 ? "&" : "?") + t.param(n)
    }

    function l(e) {
        return t('<span class="lity-error"/>').append(e)
    }

    function c(e) {
        if (!v.test(e)) return !1;
        var n = t('<img src="' + e + '">'),
            i = t.Deferred(),
            r = function () {
                i.reject(l("Failed loading image"))
            };
        return n.on("load", function () {
            return 0 === this.naturalWidth ? r() : void i.resolve(n)
        }).on("error", r), i.promise()
    }

    function u(e) {
        var n;
        try {
            n = t(e)
        } catch (i) {
            return !1
        }
        if (!n.length) return !1;
        var r = t('<span style="display:none !important" class="lity-inline-placeholder"/>');
        return n.after(r).on("lity:ready", function (e, t) {
            t.one("lity:remove", function () {
                r.before(n.addClass("lity-hide")).remove()
            })
        })
    }

    function d(e) {
        var n, i = e;
        return n = b.exec(e), n && (i = s(o() + "//www.youtube" + (n[2] || "") + ".com/embed/" + n[4], t.extend({
            autoplay: 1
        }, a(n[5] || "")))), n = y.exec(e), n && (i = s(o() + "//player.vimeo.com/video/" + n[3], t.extend({
            autoplay: 1
        }, a(n[4] || "")))), n = w.exec(e), n && (i = s(o() + "//www.google." + n[3] + "/maps?" + n[6], {
            output: n[6].indexOf("layer=c") > 0 ? "svembed" : "embed"
        })), '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + i + '"></iframe></div>'
    }

    function p(e) {
        function o(e) {
            27 === e.keyCode && u()
        }

        function a() {
            var e = f.documentElement.clientHeight ? f.documentElement.clientHeight : Math.round(h.height());
            g.css("max-height", Math.floor(e) + "px").trigger("lity:resize", [p, d])
        }

        function s(e) {
            p && (g = t(e), h.on("resize", a), a(), p.find(".lity-loader").each(function () {
                var e = t(this);
                i(e).always(function () {
                    e.remove()
                })
            }), p.removeClass("lity-loading").find(".lity-content").empty().append(g), g.removeClass("lity-hide").trigger("lity:ready", [p, d]), y.resolve())
        }

        function l(e, i, r) {
            m++, n(), p = t(r.template).addClass("lity-loading").appendTo("body"), r.esc && h.one("keyup", o), setTimeout(function () {
                p.addClass("lity-opened lity-" + e).on("click", "[data-lity-close]", function (e) {
                    t(e.target).is("[data-lity-close]") && u()
                }).trigger("lity:open", [p, d]), t.when(i).always(s)
            }, 0)
        }

        function c(e, n) {
            var i, r, o = t.extend({}, E, b);
            if (n.handler && o[n.handler]) r = o[n.handler](e, d), i = n.handler;
            else {
                var a = {};
                t.each(["inline", "iframe"], function (e, t) {
                    o[t] && (a[t] = o[t]), delete o[t]
                });
                var s = function (t, n) {
                    return n ? (r = n(e, d), r ? (i = t, !1) : void 0) : !0
                };
                t.each(o, s), i || t.each(a, s)
            }
            return r && (y = t.Deferred(), t.when(u()).done(t.proxy(l, null, i, r, n))), !!r
        }

        function u() {
            if (p) {
                var e = t.Deferred();
                return y.done(function () {
                    m--, n(), h.off("resize", a).off("keyup", o), g.trigger("lity:close", [p, d]), p.removeClass("lity-opened").addClass("lity-closed");
                    var t = p,
                        r = g;
                    p = null, g = null, i(r.add(t)).always(function () {
                        r.trigger("lity:remove", [t, d]), t.remove(), e.resolve()
                    })
                }), e.promise()
            }
        }

        function d(e) {
            if (!e.preventDefault) return d.open(e);
            var n = t(this),
                i = n.data("lity-target") || n.attr("href") || n.attr("src");
            if (i) {
                var r = t.extend({}, x, v, n.data("lity-options") || n.data("lity"));
                c(i, r) && e.preventDefault()
            }
        }

        var p, g, v = {},
            b = {},
            y = t.Deferred().resolve();
        return d.handlers = t.proxy(r, d, b), d.options = t.proxy(r, d, v), d.open = function (e) {
            return c(e, t.extend({}, x, v)), d
        }, d.close = function () {
            return u(), d
        }, d.options(e)
    }

    var f = e.document,
        h = t(e),
        g = t("html"),
        m = 0,
        v = /\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$/i,
        b = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
        y = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
        w = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
        E = {
            image: c,
            inline: u,
            iframe: d
        },
        x = {
            esc: !0,
            handler: null,
            template: '<div class="lity" tabindex="-1"><div class="lity-wrap" data-lity-close><div class="lity-loader">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" title="Close (Esc)" data-lity-close>×</button></div></div></div>'
        },
        T = function () {
            var e = f.createElement("div"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return t[n];
            return !1
        }();
    return p.version = "1.5.1", p.handlers = t.proxy(r, p, E), p.options = t.proxy(r, p, x), t(f).on("click", "[data-lity]", p()), p
}), !function (e) {
    "use strict";
    e.fn.fitVids = function (t) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0],
                r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                o = document.createElement("div");
            o.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>", i.appendChild(o.childNodes[1])
        }
        return t && e.extend(n, t), this.each(function () {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var i = ".fitvidsignore";
            n.ignore && (i = i + ", " + n.ignore);
            var r = e(this).find(t.join(","));
            r = r.not("object object"), r = r.not(i), r.each(function () {
                var t = e(this);
                if (!(t.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9), t.attr("width", 16));
                    var n = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                        r = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                        o = n / r;
                    if (!t.attr("id")) {
                        var a = "fitvid" + Math.floor(999999 * Math.random());
                        t.attr("id", a)
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
    function (e) {
        e.fn.extend({
            slimScroll: function (n) {
                var i = e.extend({
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                }, n);
                return this.each(function () {
                    function r(t) {
                        if (c) {
                            t = t || window.event;
                            var n = 0;
                            t.wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + i.wrapperClass).is(b.parent()) && o(n, !0), t.preventDefault && !v && t.preventDefault(), v || (t.returnValue = !1)
                        }
                    }

                    function o(e, t, n) {
                        v = !1;
                        var r = e,
                            o = b.outerHeight() - w.outerHeight();
                        t && (r = parseInt(w.css("top")) + e * parseInt(i.wheelStep) / 100 * w.outerHeight(), r = Math.min(Math.max(r, 0), o), r = e > 0 ? Math.ceil(r) : Math.floor(r), w.css({
                            top: r + "px"
                        })), g = parseInt(w.css("top")) / (b.outerHeight() - w.outerHeight()), r = g * (b[0].scrollHeight - b.outerHeight()), n && (r = e, e = r / b[0].scrollHeight * b.outerHeight(), e = Math.min(Math.max(e, 0), o), w.css({
                            top: e + "px"
                        })), b.scrollTop(r), b.trigger("slimscrolling", ~~r), s(), l()
                    }

                    function a() {
                        h = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30), w.css({
                            height: h + "px"
                        });
                        var e = h == b.outerHeight() ? "none" : "block";
                        w.css({
                            display: e
                        })
                    }

                    function s() {
                        a(), clearTimeout(p), g == ~~g ? (v = i.allowPageScroll, m != g && b.trigger("slimscroll", 0 == ~~g ? "top" : "bottom")) : v = !1, m = g, h >= b.outerHeight() ? v = !0 : (w.stop(!0, !0).fadeIn("fast"), i.railVisible && E.stop(!0, !0).fadeIn("fast"))
                    }

                    function l() {
                        i.alwaysVisible || (p = setTimeout(function () {
                            i.disableFadeOut && c || u || d || (w.fadeOut("slow"), E.fadeOut("slow"))
                        }, 1e3))
                    }

                    var c, u, d, p, f, h, g, m, v = !1,
                        b = e(this);
                    if (b.parent().hasClass(i.wrapperClass)) {
                        var y = b.scrollTop(),
                            w = b.siblings("." + i.barClass),
                            E = b.siblings("." + i.railClass);
                        if (a(), e.isPlainObject(n)) {
                            if ("height" in n && "auto" == n.height) {
                                b.parent().css("height", "auto"), b.css("height", "auto");
                                var x = b.parent().parent().height();
                                b.parent().css("height", x), b.css("height", x)
                            } else "height" in n && (x = n.height, b.parent().css("height", x), b.css("height", x));
                            if ("scrollTo" in n) y = parseInt(i.scrollTo);
                            else if ("scrollBy" in n) y += parseInt(i.scrollBy);
                            else if ("destroy" in n) return w.remove(), E.remove(), void b.unwrap();
                            o(y, !1, !0)
                        }
                    } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                        i.height = "auto" == i.height ? b.parent().height() : i.height, y = e("<div></div>").addClass(i.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: i.width,
                            height: i.height
                        }), b.css({
                            overflow: "hidden",
                            width: i.width,
                            height: i.height
                        });
                        var E = e("<div></div>").addClass(i.railClass).css({
                                width: i.size,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: i.alwaysVisible && i.railVisible ? "block" : "none",
                                "border-radius": i.railBorderRadius,
                                background: i.railColor,
                                opacity: i.railOpacity,
                                zIndex: 90
                            }),
                            w = e("<div></div>").addClass(i.barClass).css({
                                background: i.color,
                                width: i.size,
                                position: "absolute",
                                top: 0,
                                opacity: i.opacity,
                                display: i.alwaysVisible ? "block" : "none",
                                "border-radius": i.borderRadius,
                                BorderRadius: i.borderRadius,
                                MozBorderRadius: i.borderRadius,
                                WebkitBorderRadius: i.borderRadius,
                                zIndex: 99
                            }),
                            x = "right" == i.position ? {
                                right: i.distance
                            } : {
                                left: i.distance
                            };
                        E.css(x), w.css(x), b.wrap(y), b.parent().append(w), b.parent().append(E), i.railDraggable && w.bind("mousedown", function (n) {
                            var i = e(document);
                            return d = !0, t = parseFloat(w.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", function (e) {
                                currTop = t + e.pageY - pageY, w.css("top", currTop), o(0, w.position().top, !1)
                            }), i.bind("mouseup.slimscroll", function (e) {
                                d = !1, l(), i.unbind(".slimscroll")
                            }), !1
                        }).bind("selectstart.slimscroll", function (e) {
                            return e.stopPropagation(), e.preventDefault(), !1
                        }), E.hover(function () {
                            s()
                        }, function () {
                            l()
                        }), w.hover(function () {
                            u = !0
                        }, function () {
                            u = !1
                        }), b.hover(function () {
                            c = !0, s(), l()
                        }, function () {
                            c = !1, l()
                        }), b.bind("touchstart", function (e, t) {
                            e.originalEvent.touches.length && (f = e.originalEvent.touches[0].pageY)
                        }), b.bind("touchmove", function (e) {
                            v || e.originalEvent.preventDefault(), e.originalEvent.touches.length && (o((f - e.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), f = e.originalEvent.touches[0].pageY)
                        }), a(), "bottom" === i.start ? (w.css({
                            top: b.outerHeight() - w.outerHeight()
                        }), o(0, !0)) : "top" !== i.start && (o(e(i.start).position().top, null, !0), i.alwaysVisible || w.hide()), window.addEventListener ? (this.addEventListener("DOMMouseScroll", r, !1), this.addEventListener("mousewheel", r, !1)) : document.attachEvent("onmousewheel", r)
                    }
                }), this
            }
        }), e.fn.extend({
            slimscroll: e.fn.slimScroll
        })
    }(jQuery),
    function (e) {
        var t = -1,
            n = -1,
            i = function (e) {
                return parseFloat(e) || 0
            },
            r = function (t) {
                var n = null,
                    r = [];
                return e(t).each(function () {
                    var t = e(this),
                        o = t.offset().top - i(t.css("margin-top")),
                        a = 0 < r.length ? r[r.length - 1] : null;
                    null === a ? r.push(t) : 1 >= Math.floor(Math.abs(n - o)) ? r[r.length - 1] = a.add(t) : r.push(t), n = o
                }), r
            },
            o = function (t) {
                var n = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n)
            },
            a = e.fn.matchHeight = function (t) {
                if (t = o(t), t.remove) {
                    var n = this;
                    return this.css(t.property, ""), e.each(a._groups, function (e, t) {
                        t.elements = t.elements.not(n)
                    }), this
                }
                return 1 >= this.length && !t.target ? this : (a._groups.push({
                    elements: this,
                    options: t
                }), a._apply(this, t), this)
            };
        a._groups = [], a._throttle = 80, a._maintainScroll = !1, a._beforeUpdate = null, a._afterUpdate = null, a._apply = function (t, n) {
            var s = o(n),
                l = e(t),
                c = [l],
                u = e(window).scrollTop(),
                d = e("html").outerHeight(!0),
                p = l.parents().filter(":hidden");
            return p.each(function () {
                var t = e(this);
                t.data("style-cache", t.attr("style"))
            }), p.css("display", "block"), s.byRow && !s.target && (l.each(function () {
                var t = e(this),
                    n = t.css("display");
                "inline-block" !== n && "inline-flex" !== n && (n = "block"), t.data("style-cache", t.attr("style")), t.css({
                    display: n,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px"
                })
            }), c = r(l), l.each(function () {
                var t = e(this);
                t.attr("style", t.data("style-cache") || "")
            })), e.each(c, function (t, n) {
                var r = e(n),
                    o = 0;
                if (s.target) o = s.target.outerHeight(!1);
                else {
                    if (s.byRow && 1 >= r.length) return void r.css(s.property, "");
                    r.each(function () {
                        var t = e(this),
                            n = t.css("display");
                        "inline-block" !== n && "inline-flex" !== n && (n = "block"), n = {
                            display: n
                        }, n[s.property] = "", t.css(n), t.outerHeight(!1) > o && (o = t.outerHeight(!1)), t.css("display", "")
                    })
                }
                r.each(function () {
                    var t = e(this),
                        n = 0;
                    s.target && t.is(s.target) || ("border-box" !== t.css("box-sizing") && (n += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), n += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(s.property, o - n + "px"))
                })
            }), p.each(function () {
                var t = e(this);
                t.attr("style", t.data("style-cache") || null)
            }), a._maintainScroll && e(window).scrollTop(u / d * e("html").outerHeight(!0)), this
        }, a._applyDataApi = function () {
            var t = {};
            e("[data-match-height], [data-mh]").each(function () {
                var n = e(this),
                    i = n.attr("data-mh") || n.attr("data-match-height");
                t[i] = i in t ? t[i].add(n) : n
            }), e.each(t, function () {
                this.matchHeight(!0)
            })
        };
        var s = function (t) {
            a._beforeUpdate && a._beforeUpdate(t, a._groups), e.each(a._groups, function () {
                a._apply(this.elements, this.options)
            }), a._afterUpdate && a._afterUpdate(t, a._groups)
        };
        a._update = function (i, r) {
            if (r && "resize" === r.type) {
                var o = e(window).width();
                if (o === t) return;
                t = o
            }
            i ? -1 === n && (n = setTimeout(function () {
                    s(r), n = -1
                }, a._throttle)) : s(r)
        }, e(a._applyDataApi), e(window).bind("load", function (e) {
            a._update(!1, e)
        }), e(window).bind("resize orientationchange", function (e) {
            a._update(!0, e)
        })
    }(jQuery), $(function () {
    "use strict";
    $("#scroll-up").on("click", function () {
        return $("html, body").animate({
            scrollTop: 0
        }, 900), !1
    }), $(".toc a, .sidenav.nav a").click(function () {
        return $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 80
        }, 500), !1
    });
    var e = location.hash.replace("#", "");
    if ("" != e && $("#" + e).length > 0 && $("html, body").animate({
            scrollTop: $("#" + e).offset().top - 100
        }, 600), $(window).height() > $("body").height()) {
        var t = $(window).height() - $(".site-header").height() - $(".site-footer").height();
        $("body > main").css("min-height", t)
    }
    if ($(".sidenav.sticky").length > 0) {
        var n = $(window).height() - $(".sidenav.sticky").position().top - 100;
        $(".sidenav.sticky").height(n)
    }
    if ($(".site-header").hasClass("sticky") && !$(".site-header").hasClass("navbar-sm")) {
        var i = !1;
        $(".site-header").hasClass("navbar-lg") && (i = !0), $(window).on("scroll", function () {
            var e = $(".site-header").offset().top + $(".site-header").height();
            $(window).scrollTop() > e ? (i && $(".site-header").removeClass("navbar-lg"), $(".site-header").addClass("navbar-sm")) : (i && $(".site-header").addClass("navbar-lg"), $(".site-header").removeClass("navbar-sm"))
        })
    }
    if ($(".site-header").hasClass("navbar-transparent") && $(".site-header").hasClass("sticky") && (0 == $(".site-header > .banner").length ? $(".site-header").removeClass("navbar-transparent") : $(".site-header").hasClass("sticky") && $(window).on("scroll", function () {
                var e = $(".site-header .navbar").height();
                $(window).scrollTop() > e ? $(".site-header").removeClass("navbar-transparent") : $(".site-header").addClass("navbar-transparent")
            })), $(".site-header").hasClass("sticky") && 0 == $(".site-header > .banner").length && $(".site-header").css("padding-top", $(".site-header > .navbar").height() + 30), $(".navbar-brand").prepend('<span class="force-middle"></span>'), $('[data-toggle="offcanvas"]').on("click", function () {
            $("body").toggleClass("open-sidebar"), $("body").hasClass("open-sidebar") ? ($("html").css("overflow", "hidden"), $(".site-header .jumbotron").slideUp(50)) : ($("html").css("overflow", "visible"), $(".site-header .jumbotron").slideDown(900))
        }), $(".sidenav.dropable > li > a").on("click", function (e) {
            if (0 < $(this).next("ul").length && e.preventDefault(), 0 != $(this).next("ul").length) {
                if ($(this).hasClass("open")) return void $(this).removeClass("open").next("ul").slideUp(300);
                $(this).parents(".sidenav").find("> li > a").removeClass("open"), $(this).parents(".sidenav").find("ul").not(":hidden").slideUp(300), $(this).addClass("open").next("ul").slideDown(300)
            }
        }), $(".sidenav.dropable > li > a.active").addClass("open"), $(".sidenav.dropable > li > ul").prev("a").addClass("has-child"), $(window).width() < 768 && $(".sidebar-boxed").removeClass("sidebar-dark"), $(".sidenav").hasClass("sticky") && $(window).on("scroll", function () {
            var e = $(".sidenav"),
                t = $(".sidebar").offset();
            $(window).scrollTop() > t.top ? e.css({
                position: "fixed",
                top: "100px"
            }) : e.css("position", "static")
        }), $("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").each(function (e, t) {
            var n = '<a href="#' + $(this).attr("id") + '">' + $(this).html() + "</a>";
            $(this).html(n)
        }), jQuery.expr[":"].icontains = function (e, t, n) {
            return jQuery(e).text().toUpperCase().indexOf(n[3].toUpperCase()) >= 0
        }, $(".faq-search").on("keyup", function (e) {
            var t = $(this).val().trim(),
                n = $(this).parent().find("li");
            return "" === t ? (n.show(), !0) : (n.not(":icontains(" + t + ")").hide(), void n.filter(":icontains(" + t + ")").show())
        }), $(".faq li > h6").on("click", function () {
            $(this).toggleClass("open").next("div").slideToggle(300)
        }), $.fn.mediaelementplayer && $("video").mediaelementplayer(), $.fn.fitVids && $(".video").fitVids(), $(".file-tree li.is-file").on("click", function (e) {
            e.stopPropagation()
        }), $(".file-tree li.is-folder").on("click", function (e) {
            $(this).find("ul:first").slideToggle(400, function () {
                $(this).parent("li").toggleClass("open")
            }), e.stopPropagation()
        }), $(".grid-view > li, .categorized-view > li, .promo.small-icon").matchHeight(), $("pre").each(function (e, t) {
            $(this).prepend('<a class="btn btn-sm btn-purple clipboard-copy" data-original-title="Copied!">Copy</a>')
        }), $("pre").each(function (e, t) {
            if (!$(this).parents(".code-window").length && !$(this).parents(".code-taps").length) {
                var n = "";
                $(this).children("code").attr("class") && (n = $(this).children("code").attr("class"), n = n.replace("language-", ""), n = n.toLowerCase(), "markup" == n && (n = "html"));
                var i = '<span class="language-name">' + n + "</span>";
                $(this).prepend(i)
            }
        }), $("pre .language-name").parent().on("scroll", function () {
            $(this).find(".language-name").css("transform", "translate(" + $(this).scrollLeft() + "px, " + $(this).scrollTop() + "px)")
        }), $(".code-window").each(function (e, t) {
            var n = '<div class="window-bar"><div class="circles">';
            n += '<span class="circle circle-red"></span> <span class="circle circle-yellow"></span> <span class="circle circle-green"></span>', $(this).attr("data-title") && (n += '<span class="window-title">' + $(this).data("title") + "</span>"), n += "</div>", $(this).children().length > 1 && (n += '<div class="languages"><div class="btn-group" data-toggle="buttons">', $(this).children(":not(.prism-show-language)").each(function (e, t) {
                var i = "",
                    r = "",
                    o = "";
                0 == e && (i = " active", r = " checked"), $(this).children("code").attr("class") ? (o = $(this).children("code").attr("class"), o = o.replace("language-", ""), o = o.toLowerCase(), "markup" == o && (o = "html")) : $(this).hasClass("code-preview") && (o = "Example"), n += '<label class="btn' + i + '"><input type="radio" autocomplete="off"' + r + ">" + o + "</label>"
            }), n += "</div></div>"), n += "</div>", $(this).children(":not(:first)").hide(0), $(this).children().wrapAll('<div class="window-content"></div>'), $(this).prepend(n);
            var i = $(this).children(".window-content");
            $(this).find(".btn-group .btn").on("click", function () {
                var e = $(this).index();
                i.children(":visible").fadeOut(200, function () {
                    i.children(":not(.prism-show-language):eq(" + e + ")").fadeIn(200)
                })
            })
        }), $(".code-tabs").each(function (e, t) {
            var n = "";
            $(this).children().length > 1 && (n += '<div class="languages"><div class="btn-group" data-toggle="buttons">', $(this).children(":not(.prism-show-language)").each(function (e, t) {
                var i = "",
                    r = "",
                    o = "";
                0 == e && (i = " active", r = " checked"), $(this).children("code").attr("class") ? (o = $(this).children("code").attr("class"), o = o.replace("language-", ""), o = o.toLowerCase(), "markup" == o && (o = "html")) : $(this).hasClass("code-preview") && (o = "Example"), n += '<label class="btn' + i + '"><input type="radio" autocomplete="off"' + r + ">" + o + "</label>"
            }), n += "</div></div>"), $(this).children(":not(:first)").hide(0), $(this).children().wrapAll('<div class="window-content"></div>'), $(this).prepend(n);
            var i = $(this).children(".window-content");
            $(this).find(".btn-group .btn").on("click", function () {
                var e = $(this).index();
                i.children(":visible").fadeOut(200, function () {
                    i.children(":not(.prism-show-language):eq(" + e + ")").fadeIn(200)
                })
            })
        }), $("pre code").each(function () {
            $(this).html($.trim($(this).html()))
        }), $(".code-preview .clipboard-copy").remove(), $(".clipboard-copy").tooltip({
            placement: "bottom",
            trigger: "manual"
        }), $(".clipboard-copy").parent().on("scroll", function () {
            $(this).find(".clipboard-copy").css("transform", "translate(" + $(this).scrollLeft() + "px, " + $(this).scrollTop() + "px)")
        }), $(".clipboard-copy").length > 0) {
        var r = new Clipboard(".clipboard-copy", {
            target: function (e) {
                return e.nextElementSibling
            }
        });
        r.on("success", function (e) {
            e.clearSelection(), $(e.trigger).tooltip("show"), setTimeout(function (e) {
                $(e.trigger).tooltip("hide")
            }, 1e3, e)
        })
    }
});

$(document).ready(function () {
    if (location.hash != null && location.hash != "") {
        $('.collapse').removeClass('in');
        $(location.hash + '.collapse').collapse('show');
    }
});

$('.panel-collapse').on('show.bs.collapse', function (e) {
    $(e.target).closest('.panel').siblings().find('.panel-collapse').collapse('hide');
});

$('.panel-collapse').on('shown.bs.collapse', function (e) {
    var $panel = $(this).closest('.panel');
    $('html,body').animate({
        scrollTop: $panel.offset().top
    }, 500);
});
