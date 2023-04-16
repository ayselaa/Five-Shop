/**
 * Swiper 6.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 21, 2021
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
        t());
})(this, function () {
  "use strict";
  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function t() {
    return (t =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];
          for (var i in a)
            Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  function a(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function i(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach(function (s) {
        void 0 === e[s]
          ? (e[s] = t[s])
          : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
      });
  }
  var s = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: "" },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }
  var n = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function l() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }
  function o(e) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function d(e, t) {
    return (d =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function u(e, t, a) {
    return (u = p()
      ? Reflect.construct
      : function (e, t, a) {
          var i = [null];
          i.push.apply(i, t);
          var s = new (Function.bind.apply(e, i))();
          return a && d(s, a.prototype), s;
        }).apply(null, arguments);
  }
  function c(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (c = function (e) {
      if (
        null === e ||
        ((a = e), -1 === Function.toString.call(a).indexOf("[native code]"))
      )
        return e;
      var a;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }
      function i() {
        return u(e, arguments, o(this).constructor);
      }
      return (
        (i.prototype = Object.create(e.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        d(i, e)
      );
    })(e);
  }
  var h = (function (e) {
    var t, a;
    function i(t) {
      var a, i, s;
      return (
        (a = e.call.apply(e, [this].concat(t)) || this),
        (i = (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(a)),
        (s = i.__proto__),
        Object.defineProperty(i, "__proto__", {
          get: function () {
            return s;
          },
          set: function (e) {
            s.__proto__ = e;
          },
        }),
        a
      );
    }
    return (
      (a = e),
      ((t = i).prototype = Object.create(a.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = a),
      i
    );
  })(c(Array));
  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return (
      e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
      }),
      t
    );
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var a = l(),
      i = r(),
      s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);
    if ("string" == typeof e) {
      var n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"),
          0 === n.indexOf("<tr") && (o = "tbody"),
          (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
          0 === n.indexOf("<tbody") && (o = "table"),
          0 === n.indexOf("<option") && (o = "select");
        var d = i.createElement(o);
        d.innerHTML = n;
        for (var p = 0; p < d.childNodes.length; p += 1)
          s.push(d.childNodes[p]);
      } else
        s = (function (e, t) {
          if ("string" != typeof e) return [e];
          for (
            var a = [], i = t.querySelectorAll(e), s = 0;
            s < i.length;
            s += 1
          )
            a.push(i[s]);
          return a;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }
    return new h(
      (function (e) {
        for (var t = [], a = 0; a < e.length; a += 1)
          -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
      })(s)
    );
  }
  m.fn = h.prototype;
  var g,
    y,
    w,
    b = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, i);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, i);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          f(this, function (e) {
            return (
              i.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var a = 0; a < this.length; a += 1)
          if (2 === arguments.length) this[a].setAttribute(e, t);
          else
            for (var i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var a = e.target.dom7EventData || [];
            if ((a.indexOf(e) < 0 && a.unshift(e), m(t).is(s))) r.apply(t, a);
            else
              for (var i = m(t).parents(), n = 0; n < i.length; n += 1)
                m(i[n]).is(s) && r.apply(i[n], a);
          }
        }
        function o(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1);
        for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
          var c = this[u];
          if (s)
            for (d = 0; d < p.length; d += 1) {
              var h = p[d];
              c.dom7LiveListeners || (c.dom7LiveListeners = {}),
                c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []),
                c.dom7LiveListeners[h].push({ listener: r, proxyListener: l }),
                c.addEventListener(h, l, n);
            }
          else
            for (d = 0; d < p.length; d += 1) {
              var v = p[d];
              c.dom7Listeners || (c.dom7Listeners = {}),
                c.dom7Listeners[v] || (c.dom7Listeners[v] = []),
                c.dom7Listeners[v].push({ listener: r, proxyListener: o }),
                c.addEventListener(v, o, n);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1);
        for (var l = i.split(" "), o = 0; o < l.length; o += 1)
          for (var d = l[o], p = 0; p < this.length; p += 1) {
            var u = this[p],
              c = void 0;
            if (
              (!s && u.dom7Listeners
                ? (c = u.dom7Listeners[d])
                : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]),
              c && c.length)
            )
              for (var h = c.length - 1; h >= 0; h -= 1) {
                var v = c[h];
                (r && v.listener === r) ||
                (r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r)
                  ? (u.removeEventListener(d, v.proxyListener, n),
                    c.splice(h, 1))
                  : r ||
                    (u.removeEventListener(d, v.proxyListener, n),
                    c.splice(h, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (
          var e = l(), t = arguments.length, a = new Array(t), i = 0;
          i < t;
          i++
        )
          a[i] = arguments[i];
        for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
          for (var o = s[n], d = 0; d < this.length; d += 1) {
            var p = this[d];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              });
              (p.dom7EventData = a.filter(function (e, t) {
                return t > 0;
              })),
                p.dispatchEvent(u),
                (p.dom7EventData = []),
                delete p.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return (
          e &&
            t.on("transitionend", function a(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", a));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = l(),
            t = r(),
            a = this[0],
            i = a.getBoundingClientRect(),
            s = t.body,
            n = a.clientTop || s.clientTop || 0,
            o = a.clientLeft || s.clientLeft || 0,
            d = a === e ? e.scrollY : a.scrollTop,
            p = a === e ? e.scrollX : a.scrollLeft;
          return { top: i.top + d - n, left: i.left + p - o };
        }
        return null;
      },
      css: function (e, t) {
        var a,
          i = l();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1)
              for (var s in e) this[a].style[s] = e[s];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach(function (t, a) {
              e.apply(t, [t, a]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          a,
          i = l(),
          s = r(),
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = m(e), a = 0; a < t.length; a += 1) if (t[a] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === i) return n === i;
        if (e.nodeType || e instanceof h) {
          for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
            if (t[a] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);
        if (e < 0) {
          var a = t + e;
          return m(a < 0 ? [] : [this[a]]);
        }
        return m([this[e]]);
      },
      append: function () {
        for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
          e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
          for (var i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              var s = t.createElement("div");
              for (s.innerHTML = e; s.firstChild; )
                this[i].appendChild(s.firstChild);
            } else if (e instanceof h)
              for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
            else this[i].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          a,
          i = r();
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var s = i.createElement("div");
            for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1)
              this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
          } else if (e instanceof h)
            for (a = 0; a < e.length; a += 1)
              this[t].insertBefore(e[a], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
              ? m([this[0].nextElementSibling])
              : m([])
            : this[0].nextElementSibling
            ? m([this[0].nextElementSibling])
            : m([])
          : m([]);
      },
      nextAll: function (e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.nextElementSibling; ) {
          var i = a.nextElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
        }
        return m(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && m(t.previousElementSibling).is(e)
              ? m([t.previousElementSibling])
              : m([])
            : t.previousElementSibling
            ? m([t.previousElementSibling])
            : m([]);
        }
        return m([]);
      },
      prevAll: function (e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.previousElementSibling; ) {
          var i = a.previousElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
        }
        return m(t);
      },
      parent: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          null !== this[a].parentNode &&
            (e
              ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode)
              : t.push(this[a].parentNode));
        return m(t);
      },
      parents: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].parentNode; i; )
            e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        return m(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
            t.push(i[s]);
        return m(t);
      },
      children: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].children, s = 0; s < i.length; s += 1)
            (e && !m(i[s]).is(e)) || t.push(i[s]);
        return m(t);
      },
      filter: function (e) {
        return m(f(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    var a,
      i,
      s,
      r = l(),
      n = r.getComputedStyle(e, null);
    return (
      r.WebKitCSSMatrix
        ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
            (i = i
              .split(", ")
              .map(function (e) {
                return e.replace(",", ".");
              })
              .join(", ")),
          (s = new r.WebKitCSSMatrix("none" === i ? "" : i)))
        : (a = (s =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,"))
            .toString()
            .split(",")),
      "x" === t &&
        (i = r.WebKitCSSMatrix
          ? s.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = r.WebKitCSSMatrix
          ? s.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function C(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      e.constructor === Object
    );
  }
  function S() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1;
      t < arguments.length;
      t += 1
    ) {
      var a = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != a)
        for (
          var i = Object.keys(Object(a)), s = 0, r = i.length;
          s < r;
          s += 1
        ) {
          var n = i[s],
            l = Object.getOwnPropertyDescriptor(a, n);
          void 0 !== l &&
            l.enumerable &&
            (C(e[n]) && C(a[n])
              ? S(e[n], a[n])
              : !C(e[n]) && C(a[n])
              ? ((e[n] = {}), S(e[n], a[n]))
              : (e[n] = a[n]));
        }
    }
    return e;
  }
  function M(e, t) {
    Object.keys(t).forEach(function (a) {
      C(t[a]) &&
        Object.keys(t[a]).forEach(function (i) {
          "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
        }),
        (e[a] = t[a]);
    });
  }
  function z() {
    return (
      g ||
        (g = (function () {
          var e = l(),
            t = r();
          return {
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
              !!e.PointerEvent &&
              "maxTouchPoints" in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
            passiveListener: (function () {
              var t = !1;
              try {
                var a = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, a);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      g
    );
  }
  function P(e) {
    return (
      void 0 === e && (e = {}),
      y ||
        (y = (function (e) {
          var t = (void 0 === e ? {} : e).userAgent,
            a = z(),
            i = l(),
            s = i.navigator.platform,
            r = t || i.navigator.userAgent,
            n = { ios: !1, android: !1 },
            o = i.screen.width,
            d = i.screen.height,
            p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
            u = r.match(/(iPad).*OS\s([\d_]+)/),
            c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = "Win32" === s,
            f = "MacIntel" === s;
          return (
            !u &&
              f &&
              a.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(o + "x" + d) >= 0 &&
              ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]),
              (f = !1)),
            p && !v && ((n.os = "android"), (n.android = !0)),
            (u || h || c) && ((n.os = "ios"), (n.ios = !0)),
            n
          );
        })(e)),
      y
    );
  }
  function k() {
    return (
      w ||
        (w = (function () {
          var e,
            t = l();
          return {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.indexOf("safari") >= 0 &&
                e.indexOf("chrome") < 0 &&
                e.indexOf("android") < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          };
        })()),
      w
    );
  }
  Object.keys(b).forEach(function (e) {
    m.fn[e] = b[e];
  });
  var L = {
      name: "resize",
      create: function () {
        var e = this;
        S(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function (e) {
          var t = l();
          t.addEventListener("resize", e.resize.resizeHandler),
            t.addEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
        destroy: function (e) {
          var t = l();
          t.removeEventListener("resize", e.resize.resizeHandler),
            t.removeEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
      },
    },
    $ = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = l(),
          i = this,
          s = new (a.MutationObserver || a.WebkitMutationObserver)(function (
            e
          ) {
            if (1 !== e.length) {
              var t = function () {
                i.emit("observerUpdate", e[0]);
              };
              a.requestAnimationFrame
                ? a.requestAnimationFrame(t)
                : a.setTimeout(t, 0);
            } else i.emit("observerUpdate", e[0]);
          });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(s);
      },
      init: function () {
        var e = this;
        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    I = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        M(this, { observer: t({}, $, { observers: [] }) });
      },
      on: {
        init: function (e) {
          e.observer.init();
        },
        destroy: function (e) {
          e.observer.destroy();
        },
      },
    };
  function O(e) {
    var t = this,
      a = r(),
      i = l(),
      s = t.touchEventsData,
      n = t.params,
      o = t.touches;
    if (!t.animating || !n.preventInteractionOnTransition) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);
      if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length)
        if (
          ((s.isTouchEvent = "touchstart" === d.type),
          s.isTouchEvent || !("which" in d) || 3 !== d.which)
        )
          if (!(!s.isTouchEvent && "button" in d && d.button > 0))
            if (!s.isTouched || !s.isMoved)
              if (
                (!!n.noSwipingClass &&
                  "" !== n.noSwipingClass &&
                  d.target &&
                  d.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (p = m(e.path[0])),
                n.noSwiping &&
                  p.closest(
                    n.noSwipingSelector
                      ? n.noSwipingSelector
                      : "." + n.noSwipingClass
                  )[0])
              )
                t.allowClick = !0;
              else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
                (o.currentX =
                  "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
                  (o.currentY =
                    "touchstart" === d.type
                      ? d.targetTouches[0].pageY
                      : d.pageY);
                var u = o.currentX,
                  c = o.currentY,
                  h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                  v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (h && (u <= v || u >= i.innerWidth - v)) {
                  if ("prevent" !== h) return;
                  e.preventDefault();
                }
                if (
                  (S(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (o.startX = u),
                  (o.startY = c),
                  (s.touchStartTime = x()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  n.threshold > 0 && (s.allowThresholdMove = !1),
                  "touchstart" !== d.type)
                ) {
                  var f = !0;
                  p.is(s.formElements) && (f = !1),
                    a.activeElement &&
                      m(a.activeElement).is(s.formElements) &&
                      a.activeElement !== p[0] &&
                      a.activeElement.blur();
                  var g = f && t.allowTouchMove && n.touchStartPreventDefault;
                  (!n.touchStartForcePreventDefault && !g) ||
                    p[0].isContentEditable ||
                    d.preventDefault();
                }
                t.emit("touchStart", d);
              }
    }
  }
  function A(e) {
    var t = r(),
      a = this,
      i = a.touchEventsData,
      s = a.params,
      n = a.touches,
      l = a.rtlTranslate,
      o = e;
    if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || "touchmove" === o.type) {
        var d =
            "touchmove" === o.type &&
            o.targetTouches &&
            (o.targetTouches[0] || o.changedTouches[0]),
          p = "touchmove" === o.type ? d.pageX : o.pageX,
          u = "touchmove" === o.type ? d.pageY : o.pageY;
        if (o.preventedByNestedSwiper)
          return (n.startX = p), void (n.startY = u);
        if (!a.allowTouchMove)
          return (
            (a.allowClick = !1),
            void (
              i.isTouched &&
              (S(n, { startX: p, startY: u, currentX: p, currentY: u }),
              (i.touchStartTime = x()))
            )
          );
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (a.isVertical()) {
            if (
              (u < n.startY && a.translate <= a.maxTranslate()) ||
              (u > n.startY && a.translate >= a.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (p < n.startX && a.translate <= a.maxTranslate()) ||
            (p > n.startX && a.translate >= a.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          o.target === t.activeElement &&
          m(o.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (a.allowClick = !1);
        if (
          (i.allowTouchCallbacks && a.emit("touchMove", o),
          !(o.targetTouches && o.targetTouches.length > 1))
        ) {
          (n.currentX = p), (n.currentY = u);
          var c = n.currentX - n.startX,
            h = n.currentY - n.startY;
          if (
            !(
              a.params.threshold &&
              Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold
            )
          ) {
            var v;
            if (void 0 === i.isScrolling)
              (a.isHorizontal() && n.currentY === n.startY) ||
              (a.isVertical() && n.currentX === n.startX)
                ? (i.isScrolling = !1)
                : c * c + h * h >= 25 &&
                  ((v = (180 * Math.atan2(Math.abs(h), Math.abs(c))) / Math.PI),
                  (i.isScrolling = a.isHorizontal()
                    ? v > s.touchAngle
                    : 90 - v > s.touchAngle));
            if (
              (i.isScrolling && a.emit("touchMoveOpposite", o),
              void 0 === i.startMoving &&
                ((n.currentX === n.startX && n.currentY === n.startY) ||
                  (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1;
            else if (i.startMoving) {
              (a.allowClick = !1),
                !s.cssMode && o.cancelable && o.preventDefault(),
                s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                i.isMoved ||
                  (s.loop && a.loopFix(),
                  (i.startTranslate = a.getTranslate()),
                  a.setTransition(0),
                  a.animating &&
                    a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                  (i.allowMomentumBounce = !1),
                  !s.grabCursor ||
                    (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
                    a.setGrabCursor(!0),
                  a.emit("sliderFirstMove", o)),
                a.emit("sliderMove", o),
                (i.isMoved = !0);
              var f = a.isHorizontal() ? c : h;
              (n.diff = f),
                (f *= s.touchRatio),
                l && (f = -f),
                (a.swipeDirection = f > 0 ? "prev" : "next"),
                (i.currentTranslate = f + i.startTranslate);
              var g = !0,
                y = s.resistanceRatio;
              if (
                (s.touchReleaseOnEdges && (y = 0),
                f > 0 && i.currentTranslate > a.minTranslate()
                  ? ((g = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        a.minTranslate() -
                        1 +
                        Math.pow(-a.minTranslate() + i.startTranslate + f, y)))
                  : f < 0 &&
                    i.currentTranslate < a.maxTranslate() &&
                    ((g = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        a.maxTranslate() +
                        1 -
                        Math.pow(a.maxTranslate() - i.startTranslate - f, y))),
                g && (o.preventedByNestedSwiper = !0),
                !a.allowSlideNext &&
                  "next" === a.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !a.allowSlidePrev &&
                  "prev" === a.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                s.threshold > 0)
              ) {
                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (n.startX = n.currentX),
                    (n.startY = n.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (n.diff = a.isHorizontal()
                      ? n.currentX - n.startX
                      : n.currentY - n.startY)
                  );
              }
              s.followFinger &&
                !s.cssMode &&
                ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
                  (a.updateActiveIndex(), a.updateSlidesClasses()),
                s.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: n[a.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: n[a.isHorizontal() ? "currentX" : "currentY"],
                    time: x(),
                  })),
                a.updateProgress(i.currentTranslate),
                a.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
  }
  function D(e) {
    var t = this,
      a = t.touchEventsData,
      i = t.params,
      s = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      l = t.slidesGrid,
      o = t.snapGrid,
      d = e;
    if (
      (d.originalEvent && (d = d.originalEvent),
      a.allowTouchCallbacks && t.emit("touchEnd", d),
      (a.allowTouchCallbacks = !1),
      !a.isTouched)
    )
      return (
        a.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (a.isMoved = !1),
        void (a.startMoving = !1)
      );
    i.grabCursor &&
      a.isMoved &&
      a.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var p,
      u = x(),
      c = u - a.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(d),
        t.emit("tap click", d),
        c < 300 &&
          u - a.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", d)),
      (a.lastClickTime = x()),
      E(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !a.isTouched ||
        !a.isMoved ||
        !t.swipeDirection ||
        0 === s.diff ||
        a.currentTranslate === a.startTranslate)
    )
      return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
    if (
      ((a.isTouched = !1),
      (a.isMoved = !1),
      (a.startMoving = !1),
      (p = i.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -a.currentTranslate),
      !i.cssMode)
    )
      if (i.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate())
          return void (t.slides.length < o.length
            ? t.slideTo(o.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (i.freeModeMomentum) {
          if (a.velocities.length > 1) {
            var h = a.velocities.pop(),
              v = a.velocities.pop(),
              f = h.position - v.position,
              m = h.time - v.time;
            (t.velocity = f / m),
              (t.velocity /= 2),
              Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (m > 150 || x() - h.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= i.freeModeMomentumVelocityRatio),
            (a.velocities.length = 0);
          var g = 1e3 * i.freeModeMomentumRatio,
            y = t.velocity * g,
            w = t.translate + y;
          r && (w = -w);
          var b,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
          if (w < t.maxTranslate())
            i.freeModeMomentumBounce
              ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S),
                (b = t.maxTranslate()),
                (C = !0),
                (a.allowMomentumBounce = !0))
              : (w = t.maxTranslate()),
              i.loop && i.centeredSlides && (T = !0);
          else if (w > t.minTranslate())
            i.freeModeMomentumBounce
              ? (w - t.minTranslate() > S && (w = t.minTranslate() + S),
                (b = t.minTranslate()),
                (C = !0),
                (a.allowMomentumBounce = !0))
              : (w = t.minTranslate()),
              i.loop && i.centeredSlides && (T = !0);
          else if (i.freeModeSticky) {
            for (var M, z = 0; z < o.length; z += 1)
              if (o[z] > -w) {
                M = z;
                break;
              }
            w = -(w =
              Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) ||
              "next" === t.swipeDirection
                ? o[M]
                : o[M - 1]);
          }
          if (
            (T &&
              t.once("transitionEnd", function () {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((g = r
                ? Math.abs((-w - t.translate) / t.velocity)
                : Math.abs((w - t.translate) / t.velocity)),
              i.freeModeSticky)
            ) {
              var P = Math.abs((r ? -w : w) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
              g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
            }
          } else if (i.freeModeSticky) return void t.slideToClosest();
          i.freeModeMomentumBounce && C
            ? (t.updateProgress(b),
              t.setTransition(g),
              t.setTranslate(w),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              n.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  a.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(i.speed),
                  setTimeout(function () {
                    t.setTranslate(b),
                      n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd();
                      });
                  }, 0));
              }))
            : t.velocity
            ? (t.updateProgress(w),
              t.setTransition(g),
              t.setTranslate(w),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(w),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (i.freeModeSticky) return void t.slideToClosest();
        (!i.freeModeMomentum || c >= i.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (
          var L = 0, $ = t.slidesSizesGrid[0], I = 0;
          I < l.length;
          I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== l[I + O]
            ? p >= l[I] && p < l[I + O] && ((L = I), ($ = l[I + O] - l[I]))
            : p >= l[I] && ((L = I), ($ = l[l.length - 1] - l[l.length - 2]));
        }
        var A = (p - l[L]) / $,
          D = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (c > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (A >= i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L)),
            "prev" === t.swipeDirection &&
              (A > 1 - i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
            ? d.target === t.navigation.nextEl
              ? t.slideTo(L + D)
              : t.slideTo(L)
            : ("next" === t.swipeDirection && t.slideTo(L + D),
              "prev" === t.swipeDirection && t.slideTo(L));
        }
      }
  }
  function G() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  function N(e) {
    var t = this;
    t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function B() {
    var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = a
            ? t.scrollWidth - t.offsetWidth - t.scrollLeft
            : -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    var i = e.maxTranslate() - e.minTranslate();
    (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
      e.updateProgress(a ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  var H = !1;
  function X() {}
  var Y = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      nested: !1,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    },
    V = {
      modular: {
        useParams: function (e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              var i = t.modules[a];
              i.params && S(e, i.params);
            });
        },
        useModules: function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              var i = t.modules[a],
                s = e[a] || {};
              i.on &&
                t.on &&
                Object.keys(i.on).forEach(function (e) {
                  t.on(e, i.on[e]);
                }),
                i.create && i.create.bind(t)(s);
            });
        },
      },
      eventsEmitter: {
        on: function (e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          var s = a ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][s](t);
            }),
            i
          );
        },
        once: function (e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
              r[n] = arguments[n];
            t.apply(i, r);
          }
          return (s.__emitterProxy = t), i.on(e, s, a);
        },
        onAny: function (e, t) {
          var a = this;
          if ("function" != typeof e) return a;
          var i = t ? "unshift" : "push";
          return (
            a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var a = t.eventsAnyListeners.indexOf(e);
          return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
        },
        off: function (e, t) {
          var a = this;
          return a.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                void 0 === t
                  ? (a.eventsListeners[e] = [])
                  : a.eventsListeners[e] &&
                    a.eventsListeners[e].forEach(function (i, s) {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        a.eventsListeners[e].splice(s, 1);
                    });
              }),
              a)
            : a;
        },
        emit: function () {
          var e,
            t,
            a,
            i = this;
          if (!i.eventsListeners) return i;
          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0])
            ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i))
            : ((e = r[0].events), (t = r[0].data), (a = r[0].context || i)),
            t.unshift(a);
          var l = Array.isArray(e) ? e : e.split(" ");
          return (
            l.forEach(function (e) {
              i.eventsAnyListeners &&
                i.eventsAnyListeners.length &&
                i.eventsAnyListeners.forEach(function (i) {
                  i.apply(a, [e].concat(t));
                }),
                i.eventsListeners &&
                  i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach(function (e) {
                    e.apply(a, t);
                  });
            }),
            i
          );
        },
      },
      update: {
        updateSize: function () {
          var e,
            t,
            a = this,
            i = a.$el;
          (e =
            void 0 !== a.params.width && null !== a.params.width
              ? a.params.width
              : i[0].clientWidth),
            (t =
              void 0 !== a.params.height && null !== a.params.height
                ? a.params.height
                : i[0].clientHeight),
            (0 === e && a.isHorizontal()) ||
              (0 === t && a.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              S(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
          var e = this,
            t = l(),
            a = e.params,
            i = e.$wrapperEl,
            s = e.size,
            r = e.rtlTranslate,
            n = e.wrongRTL,
            o = e.virtual && a.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = i.children("." + e.params.slideClass),
            u = o ? e.virtual.slides.length : p.length,
            c = [],
            h = [],
            v = [];
          function f(e, t) {
            return !a.cssMode || t !== p.length - 1;
          }
          var m = a.slidesOffsetBefore;
          "function" == typeof m && (m = a.slidesOffsetBefore.call(e));
          var g = a.slidesOffsetAfter;
          "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
          var y = e.snapGrid.length,
            w = e.slidesGrid.length,
            b = a.spaceBetween,
            E = -m,
            x = 0,
            T = 0;
          if (void 0 !== s) {
            var C, M;
            "string" == typeof b &&
              b.indexOf("%") >= 0 &&
              (b = (parseFloat(b.replace("%", "")) / 100) * s),
              (e.virtualSize = -b),
              r
                ? p.css({ marginLeft: "", marginTop: "" })
                : p.css({ marginRight: "", marginBottom: "" }),
              a.slidesPerColumn > 1 &&
                ((C =
                  Math.floor(u / a.slidesPerColumn) ===
                  u / e.params.slidesPerColumn
                    ? u
                    : Math.ceil(u / a.slidesPerColumn) * a.slidesPerColumn),
                "auto" !== a.slidesPerView &&
                  "row" === a.slidesPerColumnFill &&
                  (C = Math.max(C, a.slidesPerView * a.slidesPerColumn)));
            for (
              var z,
                P = a.slidesPerColumn,
                k = C / P,
                L = Math.floor(u / a.slidesPerColumn),
                $ = 0;
              $ < u;
              $ += 1
            ) {
              M = 0;
              var I = p.eq($);
              if (a.slidesPerColumn > 1) {
                var O = void 0,
                  A = void 0,
                  D = void 0;
                if ("row" === a.slidesPerColumnFill && a.slidesPerGroup > 1) {
                  var G = Math.floor(
                      $ / (a.slidesPerGroup * a.slidesPerColumn)
                    ),
                    N = $ - a.slidesPerColumn * a.slidesPerGroup * G,
                    B =
                      0 === G
                        ? a.slidesPerGroup
                        : Math.min(
                            Math.ceil((u - G * P * a.slidesPerGroup) / P),
                            a.slidesPerGroup
                          );
                  (O =
                    (A =
                      N - (D = Math.floor(N / B)) * B + G * a.slidesPerGroup) +
                    (D * C) / P),
                    I.css({
                      "-webkit-box-ordinal-group": O,
                      "-moz-box-ordinal-group": O,
                      "-ms-flex-order": O,
                      "-webkit-order": O,
                      order: O,
                    });
                } else
                  "column" === a.slidesPerColumnFill
                    ? ((D = $ - (A = Math.floor($ / P)) * P),
                      (A > L || (A === L && D === P - 1)) &&
                        (D += 1) >= P &&
                        ((D = 0), (A += 1)))
                    : (A = $ - (D = Math.floor($ / k)) * k);
                I.css(
                  "margin-" + (e.isHorizontal() ? "top" : "left"),
                  0 !== D && a.spaceBetween && a.spaceBetween + "px"
                );
              }
              if ("none" !== I.css("display")) {
                if ("auto" === a.slidesPerView) {
                  var H = t.getComputedStyle(I[0], null),
                    X = I[0].style.transform,
                    Y = I[0].style.webkitTransform;
                  if (
                    (X && (I[0].style.transform = "none"),
                    Y && (I[0].style.webkitTransform = "none"),
                    a.roundLengths)
                  )
                    M = e.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                  else if (e.isHorizontal()) {
                    var V = parseFloat(H.getPropertyValue("width") || 0),
                      F = parseFloat(H.getPropertyValue("padding-left") || 0),
                      R = parseFloat(H.getPropertyValue("padding-right") || 0),
                      W = parseFloat(H.getPropertyValue("margin-left") || 0),
                      q = parseFloat(H.getPropertyValue("margin-right") || 0),
                      j = H.getPropertyValue("box-sizing");
                    if (j && "border-box" === j) M = V + W + q;
                    else {
                      var _ = I[0],
                        U = _.clientWidth;
                      M = V + F + R + W + q + (_.offsetWidth - U);
                    }
                  } else {
                    var K = parseFloat(H.getPropertyValue("height") || 0),
                      Z = parseFloat(H.getPropertyValue("padding-top") || 0),
                      J = parseFloat(H.getPropertyValue("padding-bottom") || 0),
                      Q = parseFloat(H.getPropertyValue("margin-top") || 0),
                      ee = parseFloat(H.getPropertyValue("margin-bottom") || 0),
                      te = H.getPropertyValue("box-sizing");
                    if (te && "border-box" === te) M = K + Q + ee;
                    else {
                      var ae = I[0],
                        ie = ae.clientHeight;
                      M = K + Z + J + Q + ee + (ae.offsetHeight - ie);
                    }
                  }
                  X && (I[0].style.transform = X),
                    Y && (I[0].style.webkitTransform = Y),
                    a.roundLengths && (M = Math.floor(M));
                } else
                  (M = (s - (a.slidesPerView - 1) * b) / a.slidesPerView),
                    a.roundLengths && (M = Math.floor(M)),
                    p[$] &&
                      (e.isHorizontal()
                        ? (p[$].style.width = M + "px")
                        : (p[$].style.height = M + "px"));
                p[$] && (p[$].swiperSlideSize = M),
                  v.push(M),
                  a.centeredSlides
                    ? ((E = E + M / 2 + x / 2 + b),
                      0 === x && 0 !== $ && (E = E - s / 2 - b),
                      0 === $ && (E = E - s / 2 - b),
                      Math.abs(E) < 0.001 && (E = 0),
                      a.roundLengths && (E = Math.floor(E)),
                      T % a.slidesPerGroup == 0 && c.push(E),
                      h.push(E))
                    : (a.roundLengths && (E = Math.floor(E)),
                      (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                        e.params.slidesPerGroup ==
                        0 && c.push(E),
                      h.push(E),
                      (E = E + M + b)),
                  (e.virtualSize += M + b),
                  (x = M),
                  (T += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, s) + g),
              r &&
                n &&
                ("slide" === a.effect || "coverflow" === a.effect) &&
                i.css({ width: e.virtualSize + a.spaceBetween + "px" }),
              a.setWrapperSize &&
                (e.isHorizontal()
                  ? i.css({ width: e.virtualSize + a.spaceBetween + "px" })
                  : i.css({ height: e.virtualSize + a.spaceBetween + "px" })),
              a.slidesPerColumn > 1 &&
                ((e.virtualSize = (M + a.spaceBetween) * C),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / a.slidesPerColumn) -
                  a.spaceBetween),
                e.isHorizontal()
                  ? i.css({ width: e.virtualSize + a.spaceBetween + "px" })
                  : i.css({ height: e.virtualSize + a.spaceBetween + "px" }),
                a.centeredSlides))
            ) {
              z = [];
              for (var se = 0; se < c.length; se += 1) {
                var re = c[se];
                a.roundLengths && (re = Math.floor(re)),
                  c[se] < e.virtualSize + c[0] && z.push(re);
              }
              c = z;
            }
            if (!a.centeredSlides) {
              z = [];
              for (var ne = 0; ne < c.length; ne += 1) {
                var le = c[ne];
                a.roundLengths && (le = Math.floor(le)),
                  c[ne] <= e.virtualSize - s && z.push(le);
              }
              (c = z),
                Math.floor(e.virtualSize - s) - Math.floor(c[c.length - 1]) >
                  1 && c.push(e.virtualSize - s);
            }
            if (
              (0 === c.length && (c = [0]),
              0 !== a.spaceBetween &&
                (e.isHorizontal()
                  ? r
                    ? p.filter(f).css({ marginLeft: b + "px" })
                    : p.filter(f).css({ marginRight: b + "px" })
                  : p.filter(f).css({ marginBottom: b + "px" })),
              a.centeredSlides && a.centeredSlidesBounds)
            ) {
              var oe = 0;
              v.forEach(function (e) {
                oe += e + (a.spaceBetween ? a.spaceBetween : 0);
              });
              var de = (oe -= a.spaceBetween) - s;
              c = c.map(function (e) {
                return e < 0 ? -m : e > de ? de + g : e;
              });
            }
            if (a.centerInsufficientSlides) {
              var pe = 0;
              if (
                (v.forEach(function (e) {
                  pe += e + (a.spaceBetween ? a.spaceBetween : 0);
                }),
                (pe -= a.spaceBetween) < s)
              ) {
                var ue = (s - pe) / 2;
                c.forEach(function (e, t) {
                  c[t] = e - ue;
                }),
                  h.forEach(function (e, t) {
                    h[t] = e + ue;
                  });
              }
            }
            S(e, { slides: p, snapGrid: c, slidesGrid: h, slidesSizesGrid: v }),
              u !== d && e.emit("slidesLengthChange"),
              c.length !== y &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== w && e.emit("slidesGridLengthChange"),
              (a.watchSlidesProgress || a.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            a = this,
            i = [],
            s = 0;
          if (
            ("number" == typeof e
              ? a.setTransition(e)
              : !0 === e && a.setTransition(a.params.speed),
            "auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
          )
            if (a.params.centeredSlides)
              a.visibleSlides.each(function (e) {
                i.push(e);
              });
            else
              for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                var r = a.activeIndex + t;
                if (r > a.slides.length) break;
                i.push(a.slides.eq(r)[0]);
              }
          else i.push(a.slides.eq(a.activeIndex)[0]);
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var n = i[t].offsetHeight;
              s = n > s ? n : s;
            }
          s && a.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var r = -e;
            s && (r = e),
              i.removeClass(a.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var n = 0; n < i.length; n += 1) {
              var l = i[n],
                o =
                  (r +
                    (a.centeredSlides ? t.minTranslate() : 0) -
                    l.swiperSlideOffset) /
                  (l.swiperSlideSize + a.spaceBetween);
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                var d = -(r - l.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
                ((d >= 0 && d < t.size - 1) ||
                  (p > 1 && p <= t.size) ||
                  (d <= 0 && p >= t.size)) &&
                  (t.visibleSlides.push(l),
                  t.visibleSlidesIndexes.push(n),
                  i.eq(n).addClass(a.slideVisibleClass));
              }
              l.progress = s ? -o : o;
            }
            t.visibleSlides = m(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if (void 0 === e) {
            var a = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * a) || 0;
          }
          var i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = n,
            d = l;
          0 === s
            ? ((r = 0), (n = !0), (l = !0))
            : ((n = (r = (e - t.minTranslate()) / s) <= 0), (l = r >= 1)),
            S(t, { progress: r, isBeginning: n, isEnd: l }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !o && t.emit("reachBeginning toEdge"),
            l && !d && t.emit("reachEnd toEdge"),
            ((o && !n) || (d && !l)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            l = t.virtual && i.virtual.enabled;
          a.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass
          ),
            (e = l
              ? t.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
                )
              : a.eq(r)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var o = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
          var d = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              d.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            l = a.activeIndex,
            o = a.realIndex,
            d = a.snapIndex,
            p = e;
          if (void 0 === p) {
            for (var u = 0; u < s.length; u += 1)
              void 0 !== s[u + 1]
                ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2
                  ? (p = u)
                  : i >= s[u] && i < s[u + 1] && (p = u + 1)
                : i >= s[u] && (p = u);
            n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }
          if (r.indexOf(i) >= 0) t = r.indexOf(i);
          else {
            var c = Math.min(n.slidesPerGroupSkip, p);
            t = c + Math.floor((p - c) / n.slidesPerGroup);
          }
          if ((t >= r.length && (t = r.length - 1), p !== l)) {
            var h = parseInt(
              a.slides.eq(p).attr("data-swiper-slide-index") || p,
              10
            );
            S(a, {
              snapIndex: t,
              realIndex: h,
              previousIndex: l,
              activeIndex: p,
            }),
              a.emit("activeIndexChange"),
              a.emit("snapIndexChange"),
              o !== h && a.emit("realIndexChange"),
              (a.initialized || a.params.runCallbacksOnInit) &&
                a.emit("slideChange");
          } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t = this,
            a = t.params,
            i = m(e.target).closest("." + a.slideClass)[0],
            s = !1;
          if (i)
            for (var r = 0; r < t.slides.length; r += 1)
              t.slides[r] === i && (s = !0);
          if (!i || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  m(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = m(i).index()),
            a.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            a = t.params,
            i = t.rtlTranslate,
            s = t.translate,
            r = t.$wrapperEl;
          if (a.virtualTranslate) return i ? -s : s;
          if (a.cssMode) return s;
          var n = T(r[0], e);
          return i && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.wrapperEl,
            l = a.progress,
            o = 0,
            d = 0;
          a.isHorizontal() ? (o = i ? -e : e) : (d = e),
            s.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
            s.cssMode
              ? (n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  a.isHorizontal() ? -o : -d)
              : s.virtualTranslate ||
                r.transform("translate3d(" + o + "px, " + d + "px, 0px)"),
            (a.previousTranslate = a.translate),
            (a.translate = a.isHorizontal() ? o : d);
          var p = a.maxTranslate() - a.minTranslate();
          (0 === p ? 0 : (e - a.minTranslate()) / p) !== l &&
            a.updateProgress(e),
            a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, a, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            void 0 === i && (i = !0);
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
            d = r.minTranslate(),
            p = r.maxTranslate();
          if (
            ((o = i && e > d ? d : i && e < p ? p : e),
            r.updateProgress(o),
            n.cssMode)
          ) {
            var u,
              c = r.isHorizontal();
            if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;
            else if (l.scrollTo)
              l.scrollTo(
                (((u = {})[c ? "left" : "top"] = -o),
                (u.behavior = "smooth"),
                u)
              );
            else l[c ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(o),
                a &&
                  (r.emit("beforeTransitionStart", t, s),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(o),
                a &&
                  (r.emit("beforeTransitionStart", t, s),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        a && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          var a = this;
          a.params.cssMode || a.$wrapperEl.transition(e),
            a.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;
          if (!s.cssMode) {
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (
              (n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
              a.emit("transitionStart"),
              e && i !== r)
            ) {
              if ("reset" === n)
                return void a.emit("slideResetTransitionStart");
              a.emit("slideChangeTransitionStart"),
                "next" === n
                  ? a.emit("slideNextTransitionStart")
                  : a.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.previousIndex,
            r = a.params;
          if (((a.animating = !1), !r.cssMode)) {
            a.setTransition(0);
            var n = t;
            if (
              (n || (n = i > s ? "next" : i < s ? "prev" : "reset"),
              a.emit("transitionEnd"),
              e && i !== s)
            ) {
              if ("reset" === n) return void a.emit("slideResetTransitionEnd");
              a.emit("slideChangeTransitionEnd"),
                "next" === n
                  ? a.emit("slideNextTransitionEnd")
                  : a.emit("slidePrevTransitionEnd");
            }
          }
        },
      },
      slide: {
        slideTo: function (e, t, a, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                typeof e +
                "] given."
            );
          if ("string" == typeof e) {
            var s = parseInt(e, 10);
            if (!isFinite(s))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                  e +
                  "] given."
              );
            e = s;
          }
          var r = this,
            n = e;
          n < 0 && (n = 0);
          var l = r.params,
            o = r.snapGrid,
            d = r.slidesGrid,
            p = r.previousIndex,
            u = r.activeIndex,
            c = r.rtlTranslate,
            h = r.wrapperEl;
          if (r.animating && l.preventInteractionOnTransition) return !1;
          var v = Math.min(r.params.slidesPerGroupSkip, n),
            f = v + Math.floor((n - v) / r.params.slidesPerGroup);
          f >= o.length && (f = o.length - 1),
            (u || l.initialSlide || 0) === (p || 0) &&
              a &&
              r.emit("beforeSlideChangeStart");
          var m,
            g = -o[f];
          if ((r.updateProgress(g), l.normalizeSlideIndex))
            for (var y = 0; y < d.length; y += 1) {
              var w = -Math.floor(100 * g),
                b = Math.floor(100 * d[y]),
                E = Math.floor(100 * d[y + 1]);
              void 0 !== d[y + 1]
                ? w >= b && w < E - (E - b) / 2
                  ? (n = y)
                  : w >= b && w < E && (n = y + 1)
                : w >= b && (n = y);
            }
          if (r.initialized && n !== u) {
            if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              g > r.translate &&
              g > r.maxTranslate() &&
              (u || 0) !== n
            )
              return !1;
          }
          if (
            ((m = n > u ? "next" : n < u ? "prev" : "reset"),
            (c && -g === r.translate) || (!c && g === r.translate))
          )
            return (
              r.updateActiveIndex(n),
              l.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== l.effect && r.setTranslate(g),
              "reset" !== m && (r.transitionStart(a, m), r.transitionEnd(a, m)),
              !1
            );
          if (l.cssMode) {
            var x,
              T = r.isHorizontal(),
              C = -g;
            if ((c && (C = h.scrollWidth - h.offsetWidth - C), 0 === t))
              h[T ? "scrollLeft" : "scrollTop"] = C;
            else if (h.scrollTo)
              h.scrollTo(
                (((x = {})[T ? "left" : "top"] = C), (x.behavior = "smooth"), x)
              );
            else h[T ? "scrollLeft" : "scrollTop"] = C;
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(g),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, i),
                r.transitionStart(a, m),
                r.transitionEnd(a, m))
              : (r.setTransition(t),
                r.setTranslate(g),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, i),
                r.transitionStart(a, m),
                r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(a, m));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e, t, a, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
          var s = this,
            r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
        },
        slideNext: function (e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating,
            n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return i.slideTo(i.activeIndex + n, e, t, a);
        },
        slidePrev: function (e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var p,
            u = d(o ? i.translate : -i.translate),
            c = n.map(function (e) {
              return d(e);
            }),
            h = (n[c.indexOf(u)], n[c.indexOf(u) - 1]);
          return (
            void 0 === h &&
              s.cssMode &&
              n.forEach(function (e) {
                !h && u >= e && (h = e);
              }),
            void 0 !== h && (p = l.indexOf(h)) < 0 && (p = i.activeIndex - 1),
            i.slideTo(p, e, t, a)
          );
        },
        slideReset: function (e, t, a) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, a)
          );
        },
        slideToClosest: function (e, t, a, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          var s = this,
            r = s.activeIndex,
            n = Math.min(s.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / s.params.slidesPerGroup),
            o = s.rtlTranslate ? s.translate : -s.translate;
          if (o >= s.snapGrid[l]) {
            var d = s.snapGrid[l];
            o - d > (s.snapGrid[l + 1] - d) * i &&
              (r += s.params.slidesPerGroup);
          } else {
            var p = s.snapGrid[l - 1];
            o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, s.slidesGrid.length - 1)),
            s.slideTo(r, e, t, a)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s =
              "auto" === a.slidesPerView
                ? t.slidesPerViewDynamic()
                : a.slidesPerView,
            r = t.clickedIndex;
          if (a.loop) {
            if (t.animating) return;
            (e = parseInt(
              m(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              a.centeredSlides
                ? r < t.loopedSlides - s / 2 ||
                  r > t.slides.length - t.loopedSlides + s / 2
                  ? (t.loopFix(),
                    (r = i
                      .children(
                        "." +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    E(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - s
                ? (t.loopFix(),
                  (r = i
                    .children(
                      "." +
                        a.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        a.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  E(function () {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      },
      loop: {
        loopCreate: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.$wrapperEl;
          i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
          var s = i.children("." + a.slideClass);
          if (a.loopFillGroupWithBlank) {
            var n = a.slidesPerGroup - (s.length % a.slidesPerGroup);
            if (n !== a.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(
                  a.slideClass + " " + a.slideBlankClass
                );
                i.append(o);
              }
              s = i.children("." + a.slideClass);
            }
          }
          "auto" !== a.slidesPerView ||
            a.loopedSlides ||
            (a.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(a.loopedSlides || a.slidesPerView, 10)
            )),
            (e.loopedSlides += a.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          var d = [],
            p = [];
          s.each(function (t, a) {
            var i = m(t);
            a < e.loopedSlides && p.push(t),
              a < s.length && a >= s.length - e.loopedSlides && d.push(t),
              i.attr("data-swiper-slide-index", a);
          });
          for (var u = 0; u < p.length; u += 1)
            i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
          for (var c = d.length - 1; c >= 0; c -= 1)
            i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            a = e.activeIndex,
            i = e.slides,
            s = e.loopedSlides,
            r = e.allowSlidePrev,
            n = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var d = -l[a] - e.getTranslate();
          if (a < s)
            (t = i.length - 3 * s + a),
              (t += s),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d);
          else if (a >= i.length - s) {
            (t = -i.length + a + s),
              (t += s),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = n), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
          t
            .children(
              "." +
                a.slideClass +
                "." +
                a.slideDuplicateClass +
                ",." +
                a.slideClass +
                "." +
                a.slideBlankClass
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          var t = this;
          if (
            !(
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            var a = t.el;
            (a.style.cursor = "move"),
              (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (a.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          var e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.el.style.cursor = "");
        },
      },
      manipulation: {
        appendSlide: function (e) {
          var t = this,
            a = t.$wrapperEl,
            i = t.params;
          if (
            (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          )
            for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
          else a.append(e);
          i.loop && t.loopCreate(),
            (i.observer && t.support.observer) || t.update();
        },
        prependSlide: function (e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop && t.loopDestroy();
          var r = s + 1;
          if ("object" == typeof e && "length" in e) {
            for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
            r = s + e.length;
          } else i.prepend(e);
          a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
            t.slideTo(r, 0, !1);
        },
        addSlide: function (e, t) {
          var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
          s.loop &&
            ((r -= a.loopedSlides),
            a.loopDestroy(),
            (a.slides = i.children("." + s.slideClass)));
          var n = a.slides.length;
          if (e <= 0) a.prependSlide(t);
          else if (e >= n) a.appendSlide(t);
          else {
            for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
              var p = a.slides.eq(d);
              p.remove(), o.unshift(p);
            }
            if ("object" == typeof t && "length" in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
              l = r > e ? r + t.length : r;
            } else i.append(t);
            for (var c = 0; c < o.length; c += 1) i.append(o[c]);
            s.loop && a.loopCreate(),
              (s.observer && a.support.observer) || a.update(),
              s.loop
                ? a.slideTo(l + a.loopedSlides, 0, !1)
                : a.slideTo(l, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop &&
            ((s -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = i.children("." + a.slideClass)));
          var r,
            n = s;
          if ("object" == typeof e && "length" in e) {
            for (var l = 0; l < e.length; l += 1)
              (r = e[l]),
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1);
            n = Math.max(n, 0);
          } else
            (r = e),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1),
              (n = Math.max(n, 0));
          a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
            a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      events: {
        attachEvents: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support;
          (e.onTouchStart = O.bind(e)),
            (e.onTouchMove = A.bind(e)),
            (e.onTouchEnd = D.bind(e)),
            a.cssMode && (e.onScroll = B.bind(e)),
            (e.onClick = N.bind(e));
          var d = !!a.nested;
          if (!o.touch && o.pointerEvents)
            s.addEventListener(i.start, e.onTouchStart, !1),
              t.addEventListener(i.move, e.onTouchMove, d),
              t.addEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (o.touch) {
              var p = !(
                "touchstart" !== i.start ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(i.start, e.onTouchStart, p),
                s.addEventListener(
                  i.move,
                  e.onTouchMove,
                  o.passiveListener ? { passive: !1, capture: d } : d
                ),
                s.addEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p),
                H || (t.addEventListener("touchstart", X), (H = !0));
            }
            ((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (s.addEventListener("mousedown", e.onTouchStart, !1),
              t.addEventListener("mousemove", e.onTouchMove, d),
              t.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) &&
            s.addEventListener("click", e.onClick, !0),
            a.cssMode && n.addEventListener("scroll", e.onScroll),
            a.updateOnWindowResize
              ? e.on(
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  G,
                  !0
                )
              : e.on("observerUpdate", G, !0);
        },
        detachEvents: function () {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support,
            d = !!a.nested;
          if (!o.touch && o.pointerEvents)
            s.removeEventListener(i.start, e.onTouchStart, !1),
              t.removeEventListener(i.move, e.onTouchMove, d),
              t.removeEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (o.touch) {
              var p = !(
                "onTouchStart" !== i.start ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(i.start, e.onTouchStart, p),
                s.removeEventListener(i.move, e.onTouchMove, d),
                s.removeEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
            }
            ((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (s.removeEventListener("mousedown", e.onTouchStart, !1),
              t.removeEventListener("mousemove", e.onTouchMove, d),
              t.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) &&
            s.removeEventListener("click", e.onClick, !0),
            a.cssMode && n.removeEventListener("scroll", e.onScroll),
            e.off(
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              G
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = e.params,
            n = e.$el,
            l = r.breakpoints;
          if (l && (!l || 0 !== Object.keys(l).length)) {
            var o = e.getBreakpoint(l);
            if (o && e.currentBreakpoint !== o) {
              var d = o in l ? l[o] : void 0;
              d &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = d[e];
                  void 0 !== t &&
                    (d[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var p = d || e.originalParams,
                u = r.slidesPerColumn > 1,
                c = p.slidesPerColumn > 1;
              u && !c
                ? (n.removeClass(
                    r.containerModifierClass +
                      "multirow " +
                      r.containerModifierClass +
                      "multirow-column"
                  ),
                  e.emitContainerClasses())
                : !u &&
                  c &&
                  (n.addClass(r.containerModifierClass + "multirow"),
                  "column" === p.slidesPerColumnFill &&
                    n.addClass(r.containerModifierClass + "multirow-column"),
                  e.emitContainerClasses());
              var h = p.direction && p.direction !== r.direction,
                v = r.loop && (p.slidesPerView !== r.slidesPerView || h);
              h && a && e.changeDirection(),
                S(e.params, p),
                S(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = o),
                e.emit("_beforeBreakpoint", p),
                v &&
                  a &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - s + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", p);
            }
          }
        },
        getBreakpoint: function (e) {
          var t = l();
          if (e) {
            var a = !1,
              i = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var a = parseFloat(e.substr(1));
                  return { value: t.innerHeight * a, point: e };
                }
                return { value: e, point: e };
              });
            i.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var s = 0; s < i.length; s += 1) {
              var r = i[s],
                n = r.point;
              r.value <= t.innerWidth && (a = n);
            }
            return a || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.params,
            a = e.isLocked,
            i =
              e.slides.length > 0 &&
              t.slidesOffsetBefore +
                t.spaceBetween * (e.slides.length - 1) +
                e.slides[0].offsetWidth * e.slides.length;
          t.slidesOffsetBefore && t.slidesOffsetAfter && i
            ? (e.isLocked = i <= e.size)
            : (e.isLocked = 1 === e.snapGrid.length),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
            a &&
              a !== e.isLocked &&
              ((e.isEnd = !1), e.navigation && e.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            a = e.params,
            i = e.rtl,
            s = e.$el,
            r = e.device,
            n = [];
          n.push("initialized"),
            n.push(a.direction),
            a.freeMode && n.push("free-mode"),
            a.autoHeight && n.push("autoheight"),
            i && n.push("rtl"),
            a.slidesPerColumn > 1 &&
              (n.push("multirow"),
              "column" === a.slidesPerColumnFill && n.push("multirow-column")),
            r.android && n.push("android"),
            r.ios && n.push("ios"),
            a.cssMode && n.push("css-mode"),
            n.forEach(function (e) {
              t.push(a.containerModifierClass + e);
            }),
            s.addClass(t.join(" ")),
            e.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            a = e.classNames;
          t.removeClass(a.join(" ")), e.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, a, i, s, r) {
          var n,
            o = l();
          function d() {
            r && r();
          }
          m(e).parent("picture")[0] || (e.complete && s)
            ? d()
            : t
            ? (((n = new o.Image()).onload = d),
              (n.onerror = d),
              i && (n.sizes = i),
              a && (n.srcset = a),
              t && (n.src = t))
            : d();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    F = {},
    R = (function () {
      function t() {
        for (
          var e, a, i = arguments.length, s = new Array(i), r = 0;
          r < i;
          r++
        )
          s[r] = arguments[r];
        1 === s.length && s[0].constructor && s[0].constructor === Object
          ? (a = s[0])
          : ((e = s[0]), (a = s[1])),
          a || (a = {}),
          (a = S({}, a)),
          e && !a.el && (a.el = e);
        var n = this;
        (n.support = z()),
          (n.device = P({ userAgent: a.userAgent })),
          (n.browser = k()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          void 0 === n.modules && (n.modules = {}),
          Object.keys(n.modules).forEach(function (e) {
            var t = n.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                s = t.params[i];
              if ("object" != typeof s || null === s) return;
              if (!(i in a) || !("enabled" in s)) return;
              !0 === a[i] && (a[i] = { enabled: !0 }),
                "object" != typeof a[i] ||
                  "enabled" in a[i] ||
                  (a[i].enabled = !0),
                a[i] || (a[i] = { enabled: !1 });
            }
          });
        var l = S({}, Y);
        n.useParams(l),
          (n.params = S({}, l, F, a)),
          (n.originalParams = S({}, n.params)),
          (n.passedParams = S({}, a)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach(function (e) {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = m);
        var o = m(n.params.el);
        if ((e = o[0])) {
          if (o.length > 1) {
            var d = [];
            return (
              o.each(function (e) {
                var i = S({}, a, { el: e });
                d.push(new t(i));
              }),
              d
            );
          }
          var p, u, c;
          return (
            (e.swiper = n),
            e && e.shadowRoot && e.shadowRoot.querySelector
              ? ((p = m(
                  e.shadowRoot.querySelector("." + n.params.wrapperClass)
                )).children = function (e) {
                  return o.children(e);
                })
              : (p = o.children("." + n.params.wrapperClass)),
            S(n, {
              $el: o,
              el: e,
              $wrapperEl: p,
              wrapperEl: p[0],
              classNames: [],
              slides: m(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === n.params.direction;
              },
              isVertical: function () {
                return "vertical" === n.params.direction;
              },
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
              rtlTranslate:
                "horizontal" === n.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
              wrongRTL: "-webkit-box" === p.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEvents:
                ((u = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                (c = ["mousedown", "mousemove", "mouseup"]),
                n.support.pointerEvents &&
                  (c = ["pointerdown", "pointermove", "pointerup"]),
                (n.touchEventsTouch = {
                  start: u[0],
                  move: u[1],
                  end: u[2],
                  cancel: u[3],
                }),
                (n.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: x(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.useModules(),
            n.emit("_swiper"),
            n.params.init && n.init(),
            n
          );
        }
      }
      var a,
        i,
        s,
        r = t.prototype;
      return (
        (r.emitContainerClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = e.el.className.split(" ").filter(function (t) {
              return (
                0 === t.indexOf("swiper-container") ||
                0 === t.indexOf(e.params.containerModifierClass)
              );
            });
            e.emit("_containerClasses", t.join(" "));
          }
        }),
        (r.getSlideClasses = function (e) {
          var t = this;
          return e.className
            .split(" ")
            .filter(function (e) {
              return (
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
              );
            })
            .join(" ");
        }),
        (r.emitSlidesClasses = function () {
          var e = this;
          e.params._emitClasses &&
            e.el &&
            e.slides.each(function (t) {
              var a = e.getSlideClasses(t);
              e.emit("_slideClass", t, a);
            });
        }),
        (r.slidesPerViewDynamic = function () {
          var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;
          if (t.centeredSlides) {
            for (
              var l, o = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !l &&
                ((n += 1), (o += a[d].swiperSlideSize) > s && (l = !0));
            for (var p = r - 1; p >= 0; p -= 1)
              a[p] &&
                !l &&
                ((n += 1), (o += a[p].swiperSlideSize) > s && (l = !0));
          } else
            for (var u = r + 1; u < a.length; u += 1)
              i[u] - i[r] < s && (n += 1);
          return n;
        }),
        (r.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              a = e.params;
            a.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (i(), e.params.autoHeight && e.updateAutoHeight())
                : (("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
              a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          function i() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (r.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var a = this,
            i = a.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (a.$el
                .removeClass("" + a.params.containerModifierClass + i)
                .addClass("" + a.params.containerModifierClass + e),
              a.emitContainerClasses(),
              (a.params.direction = e),
              a.slides.each(function (t) {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              a.emit("changeDirection"),
              t && a.update()),
            a
          );
        }),
        (r.init = function () {
          var e = this;
          e.initialized ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"),
            e.emit("afterInit"));
        }),
        (r.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var a,
            i = this,
            s = i.params,
            r = i.$el,
            n = i.$wrapperEl,
            l = i.slides;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                r.removeAttr("style"),
                n.removeAttr("style"),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (a = i),
                Object.keys(a).forEach(function (e) {
                  try {
                    a[e] = null;
                  } catch (e) {}
                  try {
                    delete a[e];
                  } catch (e) {}
                })),
              (i.destroyed = !0)),
            null
          );
        }),
        (t.extendDefaults = function (e) {
          S(F, e);
        }),
        (t.installModule = function (e) {
          t.prototype.modules || (t.prototype.modules = {});
          var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
          t.prototype.modules[a] = e;
        }),
        (t.use = function (e) {
          return Array.isArray(e)
            ? (e.forEach(function (e) {
                return t.installModule(e);
              }),
              t)
            : (t.installModule(e), t);
        }),
        (a = t),
        (s = [
          {
            key: "extendedDefaults",
            get: function () {
              return F;
            },
          },
          {
            key: "defaults",
            get: function () {
              return Y;
            },
          },
        ]),
        (i = null) && e(a.prototype, i),
        s && e(a, s),
        t
      );
    })();
  Object.keys(V).forEach(function (e) {
    Object.keys(V[e]).forEach(function (t) {
      R.prototype[t] = V[e][t];
    });
  }),
    R.use([L, I]);
  var W = {
      update: function (e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          u = d.to,
          c = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          y,
          w = t.activeIndex || 0;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((g = Math.floor(i / 2) + s + o), (y = Math.floor(i / 2) + s + l))
            : ((g = i + (s - 1) + o), (y = s + l));
        var b = Math.max((w || 0) - y, 0),
          E = Math.min((w || 0) + g, c.length - 1),
          x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
        function T() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (S(t.virtual, {
            from: b,
            to: E,
            offset: x,
            slidesGrid: t.slidesGrid,
          }),
          p === b && u === E && !e)
        )
          return (
            t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: x,
              from: b,
              to: E,
              slides: (function () {
                for (var e = [], t = b; t <= E; t += 1) e.push(c[t]);
                return e;
              })(),
            }),
            void (t.params.virtual.renderExternalUpdate && T())
          );
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var z = p; z <= u; z += 1)
            (z < b || z > E) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    z +
                    '"]'
                )
                .remove();
        for (var P = 0; P < c.length; P += 1)
          P >= b &&
            P <= E &&
            (void 0 === u || e
              ? M.push(P)
              : (P > u && M.push(P), P < p && C.push(P)));
        M.forEach(function (e) {
          t.$wrapperEl.append(v(c[e], e));
        }),
          C.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(c[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(m, x + "px"),
          T();
      },
      renderSlide: function (e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide
          ? m(i.renderSlide.call(a, e, t))
          : m(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          i.cache && (a.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        var t = this;
        if ("object" == typeof e && "length" in e)
          for (var a = 0; a < e.length; a += 1)
            e[a] && t.virtual.slides.push(e[a]);
        else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1)
            e[r] && t.virtual.slides.unshift(e[r]);
          (i = a + e.length), (s = e.length);
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            l = {};
          Object.keys(n).forEach(function (e) {
            var t = n[e],
              a = t.attr("data-swiper-slide-index");
            a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
              (l[parseInt(e, 10) + s] = t);
          }),
            (t.virtual.cache = l);
        }
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function (e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < a && (a -= 1),
                (a = Math.max(a, 0));
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < a && (a -= 1),
              (a = Math.max(a, 0));
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function () {
        var e = this;
        (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0);
      },
    },
    q = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        M(this, {
          virtual: t({}, W, { slides: this.params.virtual.slides, cache: {} }),
        });
      },
      on: {
        beforeInit: function (e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            S(e.params, t),
              S(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function (e) {
          e.params.virtual.enabled && e.virtual.update();
        },
      },
    },
    j = {
      handle: function (e) {
        var t = this,
          a = l(),
          i = r(),
          s = t.rtlTranslate,
          n = e;
        n.originalEvent && (n = n.originalEvent);
        var o = n.keyCode || n.charCode,
          d = t.params.keyboard.pageUpDown,
          p = d && 33 === o,
          u = d && 34 === o,
          c = 37 === o,
          h = 39 === o,
          v = 38 === o,
          f = 40 === o;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && h) || (t.isVertical() && f) || u)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && c) || (t.isVertical() && v) || p)
        )
          return !1;
        if (
          !(
            n.shiftKey ||
            n.altKey ||
            n.ctrlKey ||
            n.metaKey ||
            (i.activeElement &&
              i.activeElement.nodeName &&
              ("input" === i.activeElement.nodeName.toLowerCase() ||
                "textarea" === i.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (p || u || c || h || v || f)
          ) {
            var m = !1;
            if (
              t.$el.parents("." + t.params.slideClass).length > 0 &&
              0 === t.$el.parents("." + t.params.slideActiveClass).length
            )
              return;
            var g = a.innerWidth,
              y = a.innerHeight,
              w = t.$el.offset();
            s && (w.left -= t.$el[0].scrollLeft);
            for (
              var b = [
                  [w.left, w.top],
                  [w.left + t.width, w.top],
                  [w.left, w.top + t.height],
                  [w.left + t.width, w.top + t.height],
                ],
                E = 0;
              E < b.length;
              E += 1
            ) {
              var x = b[E];
              if (x[0] >= 0 && x[0] <= g && x[1] >= 0 && x[1] <= y) {
                if (0 === x[0] && 0 === x[1]) continue;
                m = !0;
              }
            }
            if (!m) return;
          }
          t.isHorizontal()
            ? ((p || u || c || h) &&
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              (((u || h) && !s) || ((p || c) && s)) && t.slideNext(),
              (((p || c) && !s) || ((u || h) && s)) && t.slidePrev())
            : ((p || u || v || f) &&
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              (u || f) && t.slideNext(),
              (p || v) && t.slidePrev()),
            t.emit("keyPress", o);
        }
      },
      enable: function () {
        var e = this,
          t = r();
        e.keyboard.enabled ||
          (m(t).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
      },
      disable: function () {
        var e = this,
          t = r();
        e.keyboard.enabled &&
          (m(t).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
      },
    },
    _ = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create: function () {
        M(this, { keyboard: t({ enabled: !1 }, j) });
      },
      on: {
        init: function (e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function (e) {
          e.keyboard.enabled && e.keyboard.disable();
        },
      },
    };
  var U = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return l().navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              var e = r(),
                t = "onwheel",
                a = t in e;
              if (!a) {
                var i = e.createElement("div");
                i.setAttribute(t, "return;"),
                  (a = "function" == typeof i.onwheel);
              }
              return (
                !a &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature("", "") &&
                  (a = e.implementation.hasFeature("Events.wheel", "3.0")),
                a
              );
            })()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return (
          "detail" in e && (a = e.detail),
          "wheelDelta" in e && (a = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          "deltaY" in e && (s = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          e.shiftKey && !i && ((i = s), (s = 0)),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        a.params.cssMode && t.preventDefault();
        var s = a.$el;
        if (
          ("container" !== a.params.mousewheel.eventsTarget &&
            (s = m(a.params.mousewheel.eventsTarget)),
          !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)
        )
          return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
          n = a.rtlTranslate ? -1 : 1,
          l = U.normalize(t);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            r = -l.pixelX * n;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            r = -l.pixelY;
          }
        else
          r =
            Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
        if (0 === r) return !0;
        i.invert && (r = -r);
        var o = a.getTranslate() + r * i.sensitivity;
        if (
          (o >= a.minTranslate() && (o = a.minTranslate()),
          o <= a.maxTranslate() && (o = a.maxTranslate()),
          (!!a.params.loop ||
            !(o === a.minTranslate() || o === a.maxTranslate())) &&
            a.params.nested &&
            t.stopPropagation(),
          a.params.freeMode)
        ) {
          var d = { time: x(), delta: Math.abs(r), direction: Math.sign(r) },
            p = a.mousewheel.lastEventBeforeSnap,
            u =
              p &&
              d.time < p.time + 500 &&
              d.delta <= p.delta &&
              d.direction === p.direction;
          if (!u) {
            (a.mousewheel.lastEventBeforeSnap = void 0),
              a.params.loop && a.loopFix();
            var c = a.getTranslate() + r * i.sensitivity,
              h = a.isBeginning,
              v = a.isEnd;
            if (
              (c >= a.minTranslate() && (c = a.minTranslate()),
              c <= a.maxTranslate() && (c = a.maxTranslate()),
              a.setTransition(0),
              a.setTranslate(c),
              a.updateProgress(),
              a.updateActiveIndex(),
              a.updateSlidesClasses(),
              ((!h && a.isBeginning) || (!v && a.isEnd)) &&
                a.updateSlidesClasses(),
              a.params.freeModeSticky)
            ) {
              clearTimeout(a.mousewheel.timeout),
                (a.mousewheel.timeout = void 0);
              var f = a.mousewheel.recentWheelEvents;
              f.length >= 15 && f.shift();
              var g = f.length ? f[f.length - 1] : void 0,
                y = f[0];
              if (
                (f.push(d),
                g && (d.delta > g.delta || d.direction !== g.direction))
              )
                f.splice(0);
              else if (
                f.length >= 15 &&
                d.time - y.time < 500 &&
                y.delta - d.delta >= 1 &&
                d.delta <= 6
              ) {
                var w = r > 0 ? 0.8 : 0.2;
                (a.mousewheel.lastEventBeforeSnap = d),
                  f.splice(0),
                  (a.mousewheel.timeout = E(function () {
                    a.slideToClosest(a.params.speed, !0, void 0, w);
                  }, 0));
              }
              a.mousewheel.timeout ||
                (a.mousewheel.timeout = E(function () {
                  (a.mousewheel.lastEventBeforeSnap = d),
                    f.splice(0),
                    a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (u || a.emit("scroll", t),
              a.params.autoplay &&
                a.params.autoplayDisableOnInteraction &&
                a.autoplay.stop(),
              c === a.minTranslate() || c === a.maxTranslate())
            )
              return !0;
          }
        } else {
          var b = {
              time: x(),
              delta: Math.abs(r),
              direction: Math.sign(r),
              raw: e,
            },
            T = a.mousewheel.recentWheelEvents;
          T.length >= 2 && T.shift();
          var C = T.length ? T[T.length - 1] : void 0;
          if (
            (T.push(b),
            C
              ? (b.direction !== C.direction ||
                  b.delta > C.delta ||
                  b.time > C.time + 150) &&
                a.mousewheel.animateSlider(b)
              : a.mousewheel.animateSlider(b),
            a.mousewheel.releaseScroll(b))
          )
            return !0;
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      animateSlider: function (e) {
        var t = this,
          a = l();
        return (
          !(
            this.params.mousewheel.thresholdDelta &&
            e.delta < this.params.mousewheel.thresholdDelta
          ) &&
          !(
            this.params.mousewheel.thresholdTime &&
            x() - t.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit("scroll", e.raw)),
            (t.mousewheel.lastScrollTime = new a.Date().getTime()),
            !1))
        );
      },
      releaseScroll: function (e) {
        var t = this,
          a = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = this,
          t = U.event();
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        var a = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarget &&
            (a = m(e.params.mousewheel.eventsTarget)),
          a.on("mouseenter", e.mousewheel.handleMouseEnter),
          a.on("mouseleave", e.mousewheel.handleMouseLeave),
          a.on(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = this,
          t = U.event();
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        var a = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarget &&
            (a = m(e.params.mousewheel.eventsTarget)),
          a.off(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        );
      },
    },
    K = {
      update: function () {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s &&
            s.length > 0 &&
            (e.isBeginning
              ? s.addClass(t.disabledClass)
              : s.removeClass(t.disabledClass),
            s[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass)),
            i &&
              i.length > 0 &&
              (e.isEnd
                ? i.addClass(t.disabledClass)
                : i.removeClass(t.disabledClass),
              i[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass));
        }
      },
      onPrevClick: function (e) {
        var t = this;
        e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
      },
      onNextClick: function (e) {
        var t = this;
        e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
      },
      init: function () {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = m(i.nextEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              e.length > 1 &&
              1 === a.$el.find(i.nextEl).length &&
              (e = a.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = m(i.prevEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              t.length > 1 &&
              1 === a.$el.find(i.prevEl).length &&
              (t = a.$el.find(i.prevEl))),
          e && e.length > 0 && e.on("click", a.navigation.onNextClick),
          t && t.length > 0 && t.on("click", a.navigation.onPrevClick),
          S(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a &&
          a.length &&
          (a.off("click", e.navigation.onNextClick),
          a.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    },
    Z = {
      update: function () {
        var e = this,
          t = e.rtl,
          a = e.params.pagination;
        if (
          a.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var i,
            s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            r = e.pagination.$el,
            n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((i = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && "bullets" !== e.params.paginationType && (i = n + i))
              : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === a.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            var l,
              o,
              d,
              p = e.pagination.bullets;
            if (
              (a.dynamicBullets &&
                ((e.pagination.bulletSize = p
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"
                ),
                a.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                  e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        a.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (l = i - e.pagination.dynamicBulletIndex),
                (d =
                  ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              p.removeClass(
                a.bulletActiveClass +
                  " " +
                  a.bulletActiveClass +
                  "-next " +
                  a.bulletActiveClass +
                  "-next-next " +
                  a.bulletActiveClass +
                  "-prev " +
                  a.bulletActiveClass +
                  "-prev-prev " +
                  a.bulletActiveClass +
                  "-main"
              ),
              r.length > 1)
            )
              p.each(function (e) {
                var t = m(e),
                  s = t.index();
                s === i && t.addClass(a.bulletActiveClass),
                  a.dynamicBullets &&
                    (s >= l &&
                      s <= o &&
                      t.addClass(a.bulletActiveClass + "-main"),
                    s === l &&
                      t
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev-prev"),
                    s === o &&
                      t
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next"));
              });
            else {
              var u = p.eq(i),
                c = u.index();
              if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1)
                  p.eq(f).addClass(a.bulletActiveClass + "-main");
                if (e.params.loop)
                  if (c >= p.length - a.dynamicMainBullets) {
                    for (var g = a.dynamicMainBullets; g >= 0; g -= 1)
                      p.eq(p.length - g).addClass(
                        a.bulletActiveClass + "-main"
                      );
                    p.eq(p.length - a.dynamicMainBullets - 1).addClass(
                      a.bulletActiveClass + "-prev"
                    );
                  } else
                    h
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev-prev"),
                      v
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next");
                else
                  h
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev-prev"),
                    v
                      .next()
                      .addClass(a.bulletActiveClass + "-next")
                      .next()
                      .addClass(a.bulletActiveClass + "-next-next");
              }
            }
            if (a.dynamicBullets) {
              var y = Math.min(p.length, a.dynamicMainBullets + 4),
                w =
                  (e.pagination.bulletSize * y - e.pagination.bulletSize) / 2 -
                  d * e.pagination.bulletSize,
                b = t ? "right" : "left";
              p.css(e.isHorizontal() ? b : "top", w + "px");
            }
          }
          if (
            ("fraction" === a.type &&
              (r
                .find("." + a.currentClass)
                .text(a.formatFractionCurrent(i + 1)),
              r.find("." + a.totalClass).text(a.formatFractionTotal(n))),
            "progressbar" === a.type)
          ) {
            var E;
            E = a.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            var x = (i + 1) / n,
              T = 1,
              C = 1;
            "horizontal" === E ? (T = x) : (C = x),
              r
                .find("." + a.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")"
                )
                .transition(e.params.speed);
          }
          "custom" === a.type && a.renderCustom
            ? (r.html(a.renderCustom(e, i + 1, n)),
              e.emit("paginationRender", r[0]))
            : e.emit("paginationUpdate", r[0]),
            r[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](a.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            for (
              var r = e.params.loop
                  ? Math.ceil(
                      (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length,
                n = 0;
              n < r;
              n += 1
            )
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(s),
              (e.pagination.bullets = i.find(
                "." + t.bulletClass.replace(/ /g, ".")
              ));
          }
          "fraction" === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var a = m(t.el);
          0 !== a.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              a.length > 1 &&
              (a = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && a.addClass(t.clickableClass),
            a.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (a.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              a.addClass(t.progressbarOppositeClass),
            t.clickable &&
              a.on(
                "click",
                "." + t.bulletClass.replace(/ /g, "."),
                function (t) {
                  t.preventDefault();
                  var a = m(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                }
              ),
            S(e.pagination, { $el: a, el: a[0] }));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable &&
              a.off("click", "." + t.bulletClass.replace(/ /g, "."));
        }
      },
    },
    J = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a
            ? (p = -p) > 0
              ? ((d = s - p), (p = 0))
              : -p + s > r && (d = r + p)
            : p < 0
            ? ((d = s + p), (p = 0))
            : p + s > r && (d = r - p),
            e.isHorizontal()
              ? (n.transform("translate3d(" + p + "px, 0, 0)"),
                (n[0].style.width = d + "px"))
              : (n.transform("translate3d(0px, " + p + "px, 0)"),
                (n[0].style.height = d + "px")),
            o.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (l[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (l[0].style.opacity = 0), l.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        var t = this;
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ""), (a[0].style.height = "");
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (r / e.size);
          (s =
            "auto" === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + "px")
              : (a[0].style.height = s + "px"),
            (i[0].style.display = n >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            S(t, { trackSize: r, divider: n, moveDivider: l, dragSize: s }),
            t.$el[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](e.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          l = i.trackSize,
          o = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            r.offset()[a.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : n / 2)) /
          (l - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(d),
          a.setTranslate(d),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          (t.scrollbar.dragStartPos =
            e.target === n[0] || e.target === n
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
        t.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          a.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          r.transition(0),
          t.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = E(function () {
              r.css("opacity", 0), r.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          l.touch
            ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d),
              o.addEventListener(i.move, e.scrollbar.onDragMove, d),
              o.addEventListener(i.end, e.scrollbar.onDragEnd, p))
            : (o.addEventListener(s.start, e.scrollbar.onDragStart, d),
              t.addEventListener(s.move, e.scrollbar.onDragMove, d),
              t.addEventListener(s.end, e.scrollbar.onDragEnd, p));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          l.touch
            ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d),
              o.removeEventListener(i.move, e.scrollbar.onDragMove, d),
              o.removeEventListener(i.end, e.scrollbar.onDragEnd, p))
            : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d),
              t.removeEventListener(s.move, e.scrollbar.onDragMove, d),
              t.removeEventListener(s.end, e.scrollbar.onDragEnd, p));
        }
      },
      init: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = m(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length &&
            ((r = m(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(r)),
            S(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    Q = {
      setTransform: function (e, t) {
        var a = this.rtl,
          i = m(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y"),
          o = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (
          (n || l
            ? ((n = n || "0"), (l = l || "0"))
            : this.isHorizontal()
            ? ((n = r), (l = "0"))
            : ((l = r), (n = "0")),
          (n =
            n.indexOf("%") >= 0
              ? parseInt(n, 10) * t * s + "%"
              : n * t * s + "px"),
          (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
          null != d)
        ) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");
        else {
          var u = o - (o - 1) * (1 - Math.abs(t));
          i.transform(
            "translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")"
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t) {
            e.parallax.setTransform(t, i);
          }),
          a.each(function (t, a) {
            var r = t.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (r += Math.ceil(a / 2) - i * (s.length - 1)),
              (r = Math.min(Math.max(r, -1), 1)),
              m(t)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (t) {
                  e.parallax.setTransform(t, r);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t) {
            var a = m(t),
              i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (i = 0), a.transition(i);
          });
      },
    },
    ee = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !a.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0),
            (r.scaleStart = ee.getDistanceBetweenTouches(e));
        }
        (r.$slideEl && r.$slideEl.length) ||
        ((r.$slideEl = m(e.target).closest("." + t.params.slideClass)),
        0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
        (r.$imageEl = r.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
        (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
        0 !== r.$imageWrapEl.length)
          ? (r.$imageEl && r.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (r.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (!a.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureMoved = !0),
            (r.scaleMove = ee.getDistanceBetweenTouches(e));
        }
        r.$imageEl && 0 !== r.$imageEl.length
          ? (a.gestures
              ? (s.scale = e.scale * s.currentScale)
              : (s.scale = (r.scaleMove / r.scaleStart) * s.currentScale),
            s.scale > r.maxRatio &&
              (s.scale =
                r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, 0.5)),
            s.scale < i.minRatio &&
              (s.scale =
                i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
            r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")"))
          : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function (e) {
        var t = this,
          a = t.device,
          i = t.support,
          s = t.params.zoom,
          r = t.zoom,
          n = r.gesture;
        if (!i.gestures) {
          if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !a.android)
          )
            return;
          (r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1);
        }
        n.$imageEl &&
          0 !== n.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio)),
          n.$imageEl
            .transition(t.params.speed)
            .transform("translate3d(0,0,0) scale(" + r.scale + ")"),
          (r.currentScale = r.scale),
          (r.isScaling = !1),
          1 === r.scale && (n.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.device,
          a = this.zoom,
          i = a.gesture,
          s = a.image;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (t.android && e.cancelable && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = T(i.$imageWrapEl[0], "x") || 0),
            (s.startY = T(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var n = s.width * a.scale,
            l = s.height * a.scale;
          if (!(n < i.slideWidth && l < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - l / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            l = a.currentX + n,
            o = i.y * r,
            d = a.currentY + o;
          0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = l), (a.currentY = d);
          var u = a.width * e.scale,
            c = a.height * e.scale;
          (a.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this,
          t = e.zoom,
          a = t.gesture;
        a.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
          (t.scale = 1),
          (t.currentScale = 1),
          (a.$slideEl = void 0),
          (a.$imageEl = void 0),
          (a.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          l,
          o,
          d,
          p,
          u,
          c,
          h,
          v,
          f,
          m,
          g = this,
          y = g.zoom,
          w = g.params.zoom,
          b = y.gesture,
          E = y.image;
        (b.$slideEl ||
          (g.params.virtual && g.params.virtual.enabled && g.virtual
            ? (b.$slideEl = g.$wrapperEl.children(
                "." + g.params.slideActiveClass
              ))
            : (b.$slideEl = g.slides.eq(g.activeIndex)),
          (b.$imageEl = b.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (b.$imageWrapEl = b.$imageEl.parent("." + w.containerClass))),
        b.$imageEl && 0 !== b.$imageEl.length) &&
          (b.$slideEl.addClass("" + w.zoomedSlideClass),
          void 0 === E.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = E.touchesStart.x), (a = E.touchesStart.y)),
          (y.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          (y.currentScale =
            b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          e
            ? ((f = b.$slideEl[0].offsetWidth),
              (m = b.$slideEl[0].offsetHeight),
              (i = b.$slideEl.offset().left + f / 2 - t),
              (s = b.$slideEl.offset().top + m / 2 - a),
              (l = b.$imageEl[0].offsetWidth),
              (o = b.$imageEl[0].offsetHeight),
              (d = l * y.scale),
              (p = o * y.scale),
              (h = -(u = Math.min(f / 2 - d / 2, 0))),
              (v = -(c = Math.min(m / 2 - p / 2, 0))),
              (r = i * y.scale) < u && (r = u),
              r > h && (r = h),
              (n = s * y.scale) < c && (n = c),
              n > v && (n = v))
            : ((r = 0), (n = 0)),
          b.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          b.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + y.scale + ")"));
      },
      out: function () {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (i.$slideEl = e.$wrapperEl.children(
                "." + e.params.slideActiveClass
              ))
            : (i.$slideEl = e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      toggleGestures: function (e) {
        var t = this,
          a = t.zoom,
          i = a.slideSelector,
          s = a.passiveListener;
        t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s),
          t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s),
          t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
      },
      enableGestures: function () {
        this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
      },
      disableGestures: function () {
        this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
      },
      enable: function () {
        var e = this,
          t = e.support,
          a = e.zoom;
        if (!a.enabled) {
          a.enabled = !0;
          var i = !(
              "touchstart" !== e.touchEvents.start ||
              !t.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !t.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          (e.zoom.passiveListener = i),
            (e.zoom.slideSelector = r),
            t.gestures
              ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i),
                e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i))
              : "touchstart" === e.touchEvents.start &&
                (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i),
                e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s),
                e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i),
                e.touchEvents.cancel &&
                  e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              a.onTouchMove,
              s
            );
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          var a = e.support;
          e.zoom.enabled = !1;
          var i = !(
              "touchstart" !== e.touchEvents.start ||
              !a.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !a.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          a.gestures
            ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i),
              e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i),
              e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s),
              e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove,
              s
            );
        }
      },
    },
    te = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var a = this,
          i = a.params.lazy;
        if (void 0 !== e && 0 !== a.slides.length) {
          var s =
              a.virtual && a.params.virtual.enabled
                ? a.$wrapperEl.children(
                    "." +
                      a.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : a.slides.eq(e),
            r = s.find(
              "." +
                i.elementClass +
                ":not(." +
                i.loadedClass +
                "):not(." +
                i.loadingClass +
                ")"
            );
          !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            r.push(s[0]),
            0 !== r.length &&
              r.each(function (e) {
                var r = m(e);
                r.addClass(i.loadingClass);
                var n = r.attr("data-background"),
                  l = r.attr("data-src"),
                  o = r.attr("data-srcset"),
                  d = r.attr("data-sizes"),
                  p = r.parent("picture");
                a.loadImage(r[0], l || n, o, d, !1, function () {
                  if (null != a && a && (!a || a.params) && !a.destroyed) {
                    if (
                      (n
                        ? (r.css("background-image", 'url("' + n + '")'),
                          r.removeAttr("data-background"))
                        : (o &&
                            (r.attr("srcset", o), r.removeAttr("data-srcset")),
                          d && (r.attr("sizes", d), r.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each(function (e) {
                              var t = m(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          l && (r.attr("src", l), r.removeAttr("data-src"))),
                      r.addClass(i.loadedClass).removeClass(i.loadingClass),
                      s.find("." + i.preloaderClass).remove(),
                      a.params.loop && t)
                    ) {
                      var e = s.attr("data-swiper-slide-index");
                      if (s.hasClass(a.params.slideDuplicateClass)) {
                        var u = a.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            a.params.slideDuplicateClass +
                            ")"
                        );
                        a.lazy.loadInSlide(u.index(), !1);
                      } else {
                        var c = a.$wrapperEl.children(
                          "." +
                            a.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        a.lazy.loadInSlide(c.index(), !1);
                      }
                    }
                    a.emit("lazyImageReady", s[0], r[0]),
                      a.params.autoHeight && a.updateAutoHeight();
                  }
                }),
                  a.emit("lazyImageLoad", s[0], r[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          n = a.lazy,
          l = a.slidesPerView;
        function o(e) {
          if (r) {
            if (
              t.children(
                "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (i[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + a.slideVisibleClass).each(function (t) {
            var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
            e.lazy.loadInSlide(a);
          });
        else if (l > 1)
          for (var p = s; p < s + l; p += 1) o(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(s);
        if (n.loadPrevNext)
          if (l > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            for (
              var u = n.loadPrevNextAmount,
                c = l,
                h = Math.min(s + c + Math.max(u, c), i.length),
                v = Math.max(s - Math.max(c, u), 0),
                f = s + l;
              f < h;
              f += 1
            )
              o(f) && e.lazy.loadInSlide(f);
            for (var g = v; g < s; g += 1) o(g) && e.lazy.loadInSlide(g);
          } else {
            var y = t.children("." + a.slideNextClass);
            y.length > 0 && e.lazy.loadInSlide(d(y));
            var w = t.children("." + a.slidePrevClass);
            w.length > 0 && e.lazy.loadInSlide(d(w));
          }
      },
      checkInViewOnLoad: function () {
        var e = l(),
          t = this;
        if (t && !t.destroyed) {
          var a = t.params.lazy.scrollingElement
              ? m(t.params.lazy.scrollingElement)
              : m(e),
            i = a[0] === e,
            s = i ? e.innerWidth : a[0].offsetWidth,
            r = i ? e.innerHeight : a[0].offsetHeight,
            n = t.$el.offset(),
            o = !1;
          t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
          for (
            var d = [
                [n.left, n.top],
                [n.left + t.width, n.top],
                [n.left, n.top + t.height],
                [n.left + t.width, n.top + t.height],
              ],
              p = 0;
            p < d.length;
            p += 1
          ) {
            var u = d[p];
            if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
              if (0 === u[0] && 0 === u[1]) continue;
              o = !0;
            }
          }
          o
            ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad))
            : t.lazy.scrollHandlerAttached ||
              ((t.lazy.scrollHandlerAttached = !0),
              a.on("scroll", t.lazy.checkInViewOnLoad));
        }
      },
    },
    ae = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          l = function (e, t) {
            for (i = -1, a = e.length; a - i > 1; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
            return a;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = l(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new ae.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new ae.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control,
          n = s.constructor;
        function l(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
            (i = -s.controller.spline.interpolate(-t))),
            (i && "container" !== s.params.controller.by) ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof n && l(r[o]);
        else r instanceof n && t !== r && l(r);
      },
      setTransition: function (e, t) {
        var a,
          i = this,
          s = i.constructor,
          r = i.controller.control;
        function n(t) {
          t.setTransition(e, i),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                E(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                r &&
                  (t.params.loop &&
                    "slide" === i.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(r))
          for (a = 0; a < r.length; a += 1)
            r[a] !== t && r[a] instanceof s && n(r[a]);
        else r instanceof s && t !== r && n(r);
      },
    },
    ie = {
      getRandomNumber: function (e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function (e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function (e, t) {
        return e.attr("aria-role-description", t), e;
      },
      addElControls: function (e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function (e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function (e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this,
          a = t.params.a11y;
        if (13 === e.keyCode) {
          var i = m(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(a.lastSlideMessage)
              : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
              i.is("." + t.params.pagination.bulletClass.replace(/ /g, ".")) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop && e.navigation) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            i.length > 0 &&
            (e.isBeginning
              ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
              : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
            a &&
              a.length > 0 &&
              (e.isEnd
                ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
                : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (a) {
            var i = m(a);
            e.a11y.makeElFocusable(i),
              e.params.pagination.renderBullet ||
                (e.a11y.addElRole(i, "button"),
                e.a11y.addElLabel(
                  i,
                  t.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    i.index() + 1
                  )
                ));
          });
      },
      init: function () {
        var e = this,
          t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var a = e.$el;
        t.containerRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage),
          t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
        var i,
          s,
          r,
          n = e.$wrapperEl,
          l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
        e.a11y.addElId(n, l),
          (i =
            e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite"),
          e.a11y.addElLive(n, i),
          t.itemRoleDescriptionMessage &&
            e.a11y.addElRoleDescription(
              m(e.slides),
              t.itemRoleDescriptionMessage
            ),
          e.a11y.addElRole(m(e.slides), "group"),
          e.slides.each(function (t) {
            var a = m(t);
            e.a11y.addElLabel(a, a.index() + 1 + " / " + e.slides.length);
          }),
          e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl),
          s &&
            s.length &&
            (e.a11y.makeElFocusable(s),
            "BUTTON" !== s[0].tagName &&
              (e.a11y.addElRole(s, "button"),
              s.on("keydown", e.a11y.onEnterKey)),
            e.a11y.addElLabel(s, t.nextSlideMessage),
            e.a11y.addElControls(s, l)),
          r &&
            r.length &&
            (e.a11y.makeElFocusable(r),
            "BUTTON" !== r[0].tagName &&
              (e.a11y.addElRole(r, "button"),
              r.on("keydown", e.a11y.onEnterKey)),
            e.a11y.addElLabel(r, t.prevSlideMessage),
            e.a11y.addElControls(r, l)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass.replace(/ /g, "."),
              e.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e,
          t,
          a = this;
        a.a11y.liveRegion &&
          a.a11y.liveRegion.length > 0 &&
          a.a11y.liveRegion.remove(),
          a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
          e && e.off("keydown", a.a11y.onEnterKey),
          t && t.off("keydown", a.a11y.onEnterKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              "keydown",
              "." + a.params.pagination.bulletClass.replace(/ /g, "."),
              a.a11y.onEnterKey
            );
      },
    },
    se = {
      init: function () {
        var e = this,
          t = l();
        if (e.params.history) {
          if (!t.history || !t.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var a = e.history;
          (a.initialized = !0),
            (a.paths = se.getPathValues(e.params.url)),
            (a.paths.key || a.paths.value) &&
              (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                t.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function () {
        var e = l();
        this.params.history.replaceState ||
          e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        var e = this;
        (e.history.paths = se.getPathValues(e.params.url)),
          e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function (e) {
        var t = l(),
          a = (e ? new URL(e) : t.location).pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          i = a.length;
        return { key: a[i - 2], value: a[i - 1] };
      },
      setHistory: function (e, t) {
        var a = this,
          i = l();
        if (a.history.initialized && a.params.history.enabled) {
          var s;
          s = a.params.url ? new URL(a.params.url) : i.location;
          var r = a.slides.eq(t),
            n = se.slugify(r.attr("data-history"));
          s.pathname.includes(e) || (n = e + "/" + n);
          var o = i.history.state;
          (o && o.value === n) ||
            (a.params.history.replaceState
              ? i.history.replaceState({ value: n }, null, n)
              : i.history.pushState({ value: n }, null, n));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              se.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var l = n.index();
              i.slideTo(l, e, a);
            }
          }
        else i.slideTo(0, e, a);
      },
    },
    re = {
      onHashCange: function () {
        var e = this,
          t = r();
        e.emit("hashChange");
        var a = t.location.hash.replace("#", "");
        if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var i = e.$wrapperEl
            .children("." + e.params.slideClass + '[data-hash="' + a + '"]')
            .index();
          if (void 0 === i) return;
          e.slideTo(i);
        }
      },
      setHash: function () {
        var e = this,
          t = l(),
          a = r();
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            t.history &&
            t.history.replaceState
          )
            t.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            ),
              e.emit("hashSet");
          else {
            var i = e.slides.eq(e.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            (a.location.hash = s || ""), e.emit("hashSet");
          }
      },
      init: function () {
        var e = this,
          t = r(),
          a = l();
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0;
          var i = t.location.hash.replace("#", "");
          if (i)
            for (var s = 0, n = e.slides.length; s < n; s += 1) {
              var o = e.slides.eq(s);
              if (
                (o.attr("data-hash") || o.attr("data-history")) === i &&
                !o.hasClass(e.params.slideDuplicateClass)
              ) {
                var d = o.index();
                e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
              }
            }
          e.params.hashNavigation.watchState &&
            m(a).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        var e = l();
        this.params.hashNavigation.watchState &&
          m(e).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    ne = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = E(function () {
            var t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    e.emit("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                e.autoplay.run();
          }, a));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = this,
          t = r();
        "hidden" === t.visibilityState &&
          e.autoplay.running &&
          e.autoplay.pause(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (e.autoplay.run(), (e.autoplay.paused = !1));
      },
      onTransitionEnd: function (e) {
        var t = this;
        t &&
          !t.destroyed &&
          t.$wrapperEl &&
          e.target === t.$wrapperEl[0] &&
          (t.$wrapperEl[0].removeEventListener(
            "transitionend",
            t.autoplay.onTransitionEnd
          ),
          t.$wrapperEl[0].removeEventListener(
            "webkitTransitionEnd",
            t.autoplay.onTransitionEnd
          ),
          (t.autoplay.paused = !1),
          t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      },
    },
    le = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: n }).transform(
            "translate3d(" + s + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl;
        if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              (s = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                i.trigger(e[a]);
            }
          });
        }
      },
    },
    oe = {
      setTranslate: function () {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          u = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          h = 0;
        p.shadow &&
          (u
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = m('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = a.find(".swiper-cube-shadow")).length &&
              ((e = m('<div class="swiper-cube-shadow"></div>')), a.append(e)));
        for (var v = 0; v < s.length; v += 1) {
          var f = s.eq(v),
            g = v;
          c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
          var y = 90 * g,
            w = Math.floor(y / 360);
          l && ((y = -y), (w = Math.floor(-y / 360)));
          var b = Math.max(Math.min(f[0].progress, 1), -1),
            E = 0,
            x = 0,
            T = 0;
          g % 4 == 0
            ? ((E = 4 * -w * o), (T = 0))
            : (g - 1) % 4 == 0
            ? ((E = 0), (T = 4 * -w * o))
            : (g - 2) % 4 == 0
            ? ((E = o + 4 * w * o), (T = o))
            : (g - 3) % 4 == 0 && ((E = -o), (T = 3 * o + 4 * o * w)),
            l && (E = -E),
            u || ((x = E), (E = 0));
          var C =
            "rotateX(" +
            (u ? 0 : -y) +
            "deg) rotateY(" +
            (u ? y : 0) +
            "deg) translate3d(" +
            E +
            "px, " +
            x +
            "px, " +
            T +
            "px)";
          if (
            (b <= 1 &&
              b > -1 &&
              ((h = 90 * g + 90 * b), l && (h = 90 * -g - 90 * b)),
            f.transform(C),
            p.slideShadows)
          ) {
            var S = u
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              M = u
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              ((S = m(
                '<div class="swiper-slide-shadow-' +
                  (u ? "left" : "top") +
                  '"></div>'
              )),
              f.append(S)),
              0 === M.length &&
                ((M = m(
                  '<div class="swiper-slide-shadow-' +
                    (u ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(M)),
              S.length && (S[0].style.opacity = Math.max(-b, 0)),
              M.length && (M[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
            "transform-origin": "50% 50% -" + o / 2 + "px",
          }),
          p.shadow)
        )
          if (u)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + p.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                p.shadowScale +
                ")"
            );
          else {
            var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              P =
                1.5 -
                (Math.sin((2 * z * Math.PI) / 360) / 2 +
                  Math.cos((2 * z * Math.PI) / 360) / 2),
              k = p.shadowScale,
              L = p.shadowScale / P,
              $ = p.shadowOffset;
            e.transform(
              "scale3d(" +
                k +
                ", 1, " +
                L +
                ") translate3d(0px, " +
                (n / 2 + $) +
                "px, " +
                -n / 2 / L +
                "px) rotateX(-90deg)"
            );
          }
        var I = d.isSafari || d.isWebView ? -o / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            I +
            "px) rotateX(" +
            (t.isHorizontal() ? 0 : h) +
            "deg) rotateY(" +
            (t.isHorizontal() ? -h : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this,
          a = t.$el;
        t.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          t.params.cubeEffect.shadow &&
            !t.isHorizontal() &&
            a.find(".swiper-cube-shadow").transition(e);
      },
    },
    de = {
      setTranslate: function () {
        for (
          var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            l = 0,
            o = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (e.isHorizontal()
              ? a && (n = -n)
              : ((d = o), (o = 0), (l = -n), (n = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            var p = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              u = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === p.length &&
              ((p = m(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(p)),
              0 === u.length &&
                ((u = m(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(u)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              u.length && (u[0].style.opacity = Math.max(r, 0));
          }
          s.transform(
            "translate3d(" +
              o +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              l +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;
        if (
          (a
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                s.trigger(e[a]);
            }
          });
        }
      },
    },
    pe = {
      setTranslate: function () {
        for (
          var e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.slidesSizesGrid,
            r = e.params.coverflowEffect,
            n = e.isHorizontal(),
            l = e.translate,
            o = n ? t / 2 - l : a / 2 - l,
            d = n ? r.rotate : -r.rotate,
            p = r.depth,
            u = 0,
            c = i.length;
          u < c;
          u += 1
        ) {
          var h = i.eq(u),
            v = s[u],
            f = ((o - h[0].swiperSlideOffset - v / 2) / v) * r.modifier,
            g = n ? d * f : 0,
            y = n ? 0 : d * f,
            w = -p * Math.abs(f),
            b = r.stretch;
          "string" == typeof b &&
            -1 !== b.indexOf("%") &&
            (b = (parseFloat(r.stretch) / 100) * v);
          var E = n ? 0 : b * f,
            x = n ? b * f : 0,
            T = 1 - (1 - r.scale) * Math.abs(f);
          Math.abs(x) < 0.001 && (x = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(T) < 0.001 && (T = 0);
          var C =
            "translate3d(" +
            x +
            "px," +
            E +
            "px," +
            w +
            "px)  rotateX(" +
            y +
            "deg) rotateY(" +
            g +
            "deg) scale(" +
            T +
            ")";
          if (
            (h.transform(C),
            (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
            r.slideShadows)
          ) {
            var S = n
                ? h.find(".swiper-slide-shadow-left")
                : h.find(".swiper-slide-shadow-top"),
              M = n
                ? h.find(".swiper-slide-shadow-right")
                : h.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              ((S = m(
                '<div class="swiper-slide-shadow-' +
                  (n ? "left" : "top") +
                  '"></div>'
              )),
              h.append(S)),
              0 === M.length &&
                ((M = m(
                  '<div class="swiper-slide-shadow-' +
                    (n ? "right" : "bottom") +
                    '"></div>'
                )),
                h.append(M)),
              S.length && (S[0].style.opacity = f > 0 ? f : 0),
              M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
          }
        }
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    ue = {
      init: function () {
        var e = this,
          t = e.params.thumbs;
        if (e.thumbs.initialized) return !1;
        e.thumbs.initialized = !0;
        var a = e.constructor;
        return (
          t.swiper instanceof a
            ? ((e.thumbs.swiper = t.swiper),
              S(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              S(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : C(t.swiper) &&
              ((e.thumbs.swiper = new a(
                S({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
          !0
        );
      },
      onThumbClick: function () {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (
            !(
              (i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            var s;
            if (
              ((s = t.params.loop
                ? parseInt(
                    m(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : a),
              e.params.loop)
            ) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (r = e.activeIndex));
              var n = e.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                l = e.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
            }
            e.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i =
              "auto" === a.params.slidesPerView
                ? a.slidesPerViewDynamic()
                : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop;
          if (t.realIndex !== a.realIndex || r) {
            var n,
              l,
              o = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(o).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (o = a.activeIndex));
              var d = a.slides
                  .eq(o)
                  .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index(),
                p = a.slides
                  .eq(o)
                  .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index();
              (n =
                void 0 === d
                  ? p
                  : void 0 === p
                  ? d
                  : p - o == o - d
                  ? o
                  : p - o < o - d
                  ? p
                  : d),
                (l = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
            r && (n += "next" === l ? s : -1 * s),
              a.visibleSlidesIndexes &&
                a.visibleSlidesIndexes.indexOf(n) < 0 &&
                (a.params.centeredSlides
                  ? (n =
                      n > o
                        ? n - Math.floor(i / 2) + 1
                        : n + Math.floor(i / 2) - 1)
                  : n > o && (n = n - i + 1),
                a.slideTo(n, e ? 0 : void 0));
          }
          var u = 1,
            c = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (u = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (u = 1),
            (u = Math.floor(u)),
            a.slides.removeClass(c),
            a.params.loop || (a.params.virtual && a.params.virtual.enabled))
          )
            for (var h = 0; h < u; h += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + h) + '"]'
                )
                .addClass(c);
          else
            for (var v = 0; v < u; v += 1)
              a.slides.eq(t.realIndex + v).addClass(c);
        }
      },
    },
    ce = [
      q,
      _,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        },
        create: function () {
          M(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: x(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: U.enable,
              disable: U.disable,
              handle: U.handle,
              handleMouseEnter: U.handleMouseEnter,
              handleMouseLeave: U.handleMouseLeave,
              animateSlider: U.animateSlider,
              releaseScroll: U.releaseScroll,
            },
          });
        },
        on: {
          init: function (e) {
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable();
          },
          destroy: function (e) {
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          M(this, { navigation: t({}, K) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          click: function (e, t) {
            var a,
              i = e.navigation,
              s = i.$nextEl,
              r = i.$prevEl;
            !e.params.navigation.hideOnClick ||
              m(t.target).is(r) ||
              m(t.target).is(s) ||
              (s
                ? (a = s.hasClass(e.params.navigation.hiddenClass))
                : r && (a = r.hasClass(e.params.navigation.hiddenClass)),
              !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"),
              s && s.toggleClass(e.params.navigation.hiddenClass),
              r && r.toggleClass(e.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          M(this, { pagination: t({ dynamicBulletIndex: 0 }, Z) });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          click: function (e, t) {
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !m(t.target).hasClass(e.params.pagination.bulletClass) &&
              (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit("paginationShow")
                : e.emit("paginationHide"),
              e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          M(this, {
            scrollbar: t(
              { isTouched: !1, timeout: null, dragTimeout: null },
              J
            ),
          });
        },
        on: {
          init: function (e) {
            e.scrollbar.init(),
              e.scrollbar.updateSize(),
              e.scrollbar.setTranslate();
          },
          update: function (e) {
            e.scrollbar.updateSize();
          },
          resize: function (e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t);
          },
          destroy: function (e) {
            e.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          M(this, { parallax: t({}, Q) });
        },
        on: {
          beforeInit: function (e) {
            e.params.parallax.enabled &&
              ((e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          init: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTranslate: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTransition: function (e, t) {
            e.params.parallax.enabled && e.parallax.setTransition(t);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var e = this;
          M(e, {
            zoom: t(
              {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              ee
            ),
          });
          var a = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return a;
            },
            set: function (t) {
              if (a !== t) {
                var i = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  s = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, i, s);
              }
              a = t;
            },
          });
        },
        on: {
          init: function (e) {
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy: function (e) {
            e.zoom.disable();
          },
          touchStart: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchStart(t);
          },
          touchEnd: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchEnd(t);
          },
          doubleTap: function (e, t) {
            e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              e.zoom.toggle(t);
          },
          transitionEnd: function (e) {
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange: function (e) {
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          M(this, { lazy: t({ initialImageLoaded: !1 }, te) });
        },
        on: {
          beforeInit: function (e) {
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init: function (e) {
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              (e.params.lazy.checkInView
                ? e.lazy.checkInViewOnLoad()
                : e.lazy.load());
          },
          scroll: function (e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          resize: function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          scrollbarDragMove: function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart: function (e) {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function (e) {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange: function (e) {
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          M(this, {
            controller: t({ control: this.params.controller.control }, ae),
          });
        },
        on: {
          update: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate: function (e, t, a) {
            e.controller.control && e.controller.setTranslate(t, a);
          },
          setTransition: function (e, t, a) {
            e.controller.control && e.controller.setTransition(t, a);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
          },
        },
        create: function () {
          M(this, {
            a11y: t({}, ie, {
              liveRegion: m(
                '<span class="' +
                  this.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            }),
          });
        },
        on: {
          afterInit: function (e) {
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
          },
          toEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          fromEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          paginationUpdate: function (e) {
            e.params.a11y.enabled && e.a11y.updatePagination();
          },
          destroy: function (e) {
            e.params.a11y.enabled && e.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function () {
          M(this, { history: t({}, se) });
        },
        on: {
          init: function (e) {
            e.params.history.enabled && e.history.init();
          },
          destroy: function (e) {
            e.params.history.enabled && e.history.destroy();
          },
          transitionEnd: function (e) {
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
          slideChange: function (e) {
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          M(this, { hashNavigation: t({ initialized: !1 }, re) });
        },
        on: {
          init: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          transitionEnd: function (e) {
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          },
          slideChange: function (e) {
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          M(this, { autoplay: t({}, ne, { running: !1, paused: !1 }) });
        },
        on: {
          init: function (e) {
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              r().addEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart: function (e, t, a) {
            e.autoplay.running &&
              (a || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop());
          },
          sliderFirstMove: function (e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd: function (e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy: function (e) {
            e.autoplay.running && e.autoplay.stop(),
              r().removeEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          M(this, { fadeEffect: t({}, le) });
        },
        on: {
          beforeInit: function (e) {
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "fade" === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "fade" === e.params.effect && e.fadeEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          M(this, { cubeEffect: t({}, oe) });
        },
        on: {
          beforeInit: function (e) {
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "cube" === e.params.effect && e.cubeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "cube" === e.params.effect && e.cubeEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          M(this, { flipEffect: t({}, de) });
        },
        on: {
          beforeInit: function (e) {
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "flip" === e.params.effect && e.flipEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "flip" === e.params.effect && e.flipEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          M(this, { coverflowEffect: t({}, pe) });
        },
        on: {
          beforeInit: function (e) {
            "coverflow" === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + "coverflow"),
              e.classNames.push(e.params.containerModifierClass + "3d"),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function (e) {
            "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "coverflow" === e.params.effect &&
              e.coverflowEffect.setTransition(t);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          M(this, { thumbs: t({ swiper: null, initialized: !1 }, ue) });
        },
        on: {
          beforeInit: function (e) {
            var t = e.params.thumbs;
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
          },
          slideChange: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          update: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          resize: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          observerUpdate: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          setTransition: function (e, t) {
            var a = e.thumbs.swiper;
            a && a.setTransition(t);
          },
          beforeDestroy: function (e) {
            var t = e.thumbs.swiper;
            t && e.thumbs.swiperCreated && t && t.destroy();
          },
        },
      },
    ];
  return R.use(ce), R;
});
//# sourceMappingURL=swiper-bundle.min.js.map
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!(function (t, e, n, o) {
  "use strict";
  function i(t, e) {
    var o,
      i,
      a,
      s = [],
      r = 0;
    (t && t.isDefaultPrevented()) ||
      (t.preventDefault(),
      (e = e || {}),
      t && t.data && (e = h(t.data.options, e)),
      (o = e.$target || n(t.currentTarget).trigger("blur")),
      ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
        (e.selector
          ? (s = n(e.selector))
          : ((i = o.attr("data-fancybox") || ""),
            i
              ? ((s = t.data ? t.data.items : []),
                (s = s.length
                  ? s.filter('[data-fancybox="' + i + '"]')
                  : n('[data-fancybox="' + i + '"]')))
              : (s = [o])),
        (r = n(s).index(o)),
        r < 0 && (r = 0),
        (a = n.fancybox.open(s, e, r)),
        (a.$trigger = o)));
  }
  if (((t.console = t.console || { info: function (t) {} }), n)) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");
    var a = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: { preload: !1 },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: "auto" },
        },
        video: {
          tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: "",
          autoStart: !0,
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
        },
        parentEl: "body",
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 3e3 },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
        wheel: "auto",
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls";
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close";
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom";
          },
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR:
              "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom",
          },
          de: {
            CLOSE: "Schlie&szlig;en",
            NEXT: "Weiter",
            PREV: "Zur&uuml;ck",
            ERROR:
              "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Vergr&ouml;&szlig;ern",
          },
        },
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      d = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      u = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      f = (function () {
        var t,
          n = e.createElement("fakeelement"),
          o = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (t in o) if (void 0 !== n.style[t]) return o[t];
        return "transitionend";
      })(),
      p = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function (t, e) {
        var o = n.extend(!0, {}, t, e);
        return (
          n.each(e, function (t, e) {
            n.isArray(e) && (o[t] = e);
          }),
          o
        );
      },
      g = function (t) {
        var o, i;
        return (
          !(!t || t.ownerDocument !== e) &&
          (n(".fancybox-container").css("pointer-events", "none"),
          (o = {
            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
            y: t.getBoundingClientRect().top + t.offsetHeight / 2,
          }),
          (i = e.elementFromPoint(o.x, o.y) === t),
          n(".fancybox-container").css("pointer-events", ""),
          i)
        );
      },
      b = function (t, e, o) {
        var i = this;
        (i.opts = h({ index: o }, n.fancybox.defaults)),
          n.isPlainObject(e) && (i.opts = h(i.opts, e)),
          n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
          (i.id = i.opts.id || ++c),
          (i.currIndex = parseInt(i.opts.index, 10) || 0),
          (i.prevIndex = null),
          (i.prevPos = null),
          (i.currPos = 0),
          (i.firstRun = !0),
          (i.group = []),
          (i.slides = {}),
          i.addContent(t),
          i.group.length && i.init();
      };
    n.extend(b.prototype, {
      init: function () {
        var o,
          i,
          a = this,
          s = a.group[a.currIndex],
          r = s.opts;
        r.closeExisting && n.fancybox.close(!0),
          n("body").addClass("fancybox-active"),
          !n.fancybox.getInstance() &&
            !1 !== r.hideScrollbar &&
            !n.fancybox.isMobile &&
            e.body.scrollHeight > t.innerHeight &&
            (n("head").append(
              '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                (t.innerWidth - e.documentElement.clientWidth) +
                "px;}</style>"
            ),
            n("body").addClass("compensate-for-scrollbar")),
          (i = ""),
          n.each(r.buttons, function (t, e) {
            i += r.btnTpl[e] || "";
          }),
          (o = n(
            a.translate(
              a,
              r.baseTpl
                .replace("{{buttons}}", i)
                .replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
            )
          )
            .attr("id", "fancybox-container-" + a.id)
            .addClass(r.baseClass)
            .data("FancyBox", a)
            .appendTo(r.parentEl)),
          (a.$refs = { container: o }),
          [
            "bg",
            "inner",
            "infobar",
            "toolbar",
            "stage",
            "caption",
            "navigation",
          ].forEach(function (t) {
            a.$refs[t] = o.find(".fancybox-" + t);
          }),
          a.trigger("onInit"),
          a.activate(),
          a.jumpTo(a.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      },
      addContent: function (t) {
        var e,
          o = this,
          i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i,
            a,
            s,
            r,
            c,
            l = {},
            d = {};
          n.isPlainObject(e)
            ? ((l = e), (d = e.opts || e))
            : "object" === n.type(e) && n(e).length
            ? ((i = n(e)),
              (d = i.data() || {}),
              (d = n.extend(!0, {}, d, d.options)),
              (d.$orig = i),
              (l.src = o.opts.src || d.src || i.attr("href")),
              l.type || l.src || ((l.type = "inline"), (l.src = e)))
            : (l = { type: "html", src: e + "" }),
            (l.opts = n.extend(!0, {}, o.opts, d)),
            n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
            n.fancybox.isMobile &&
              l.opts.mobile &&
              (l.opts = h(l.opts, l.opts.mobile)),
            (a = l.type || l.opts.type),
            (r = l.src || ""),
            !a &&
              r &&
              ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((a = "video"),
                  l.opts.video.format ||
                    (l.opts.video.format =
                      "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                : r.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                  )
                ? (a = "image")
                : r.match(/\.(pdf)((\?|#).*)?$/i)
                ? ((a = "iframe"),
                  (l = n.extend(!0, l, {
                    contentType: "pdf",
                    opts: { iframe: { preload: !1 } },
                  })))
                : "#" === r.charAt(0) && (a = "inline")),
            a ? (l.type = a) : o.trigger("objectNeedsType", l),
            l.contentType ||
              (l.contentType =
                n.inArray(l.type, ["html", "inline", "ajax"]) > -1
                  ? "html"
                  : l.type),
            (l.index = o.group.length),
            "auto" == l.opts.smallBtn &&
              (l.opts.smallBtn =
                n.inArray(l.type, ["html", "inline", "ajax"]) > -1),
            "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
            (l.$thumb = l.opts.$thumb || null),
            l.opts.$trigger &&
              l.index === o.opts.index &&
              ((l.$thumb = l.opts.$trigger.find("img:first")),
              l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
            (l.$thumb && l.$thumb.length) ||
              !l.opts.$orig ||
              (l.$thumb = l.opts.$orig.find("img:first")),
            l.$thumb && !l.$thumb.length && (l.$thumb = null),
            (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
            "function" === n.type(l.opts.caption) &&
              (l.opts.caption = l.opts.caption.apply(e, [o, l])),
            "function" === n.type(o.opts.caption) &&
              (l.opts.caption = o.opts.caption.apply(e, [o, l])),
            l.opts.caption instanceof n ||
              (l.opts.caption =
                void 0 === l.opts.caption ? "" : l.opts.caption + ""),
            "ajax" === l.type &&
              ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
                ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            l.opts.modal &&
              (l.opts = n.extend(!0, l.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            o.group.push(l);
        }),
          Object.keys(o.slides).length &&
            (o.updateControls(),
            (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function () {
        var e = this;
        e.removeEvents(),
          e.$refs.container
            .on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.close(t);
            })
            .on(
              "touchstart.fb-prev click.fb-prev",
              "[data-fancybox-prev]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.previous();
              }
            )
            .on(
              "touchstart.fb-next click.fb-next",
              "[data-fancybox-next]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.next();
              }
            )
            .on("click.fb", "[data-fancybox-zoom]", function (t) {
              e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            }),
          s.on("orientationchange.fb resize.fb", function (t) {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? (e.requestId && u(e.requestId),
                (e.requestId = d(function () {
                  e.update(t);
                })))
              : (e.current &&
                  "iframe" === e.current.type &&
                  e.$refs.stage.hide(),
                setTimeout(
                  function () {
                    e.$refs.stage.show(), e.update(t);
                  },
                  n.fancybox.isMobile ? 600 : 250
                ));
          }),
          r.on("keydown.fb", function (t) {
            var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;
            if (9 == a) return void (i.opts.trapFocus && e.focus(t));
            if (
              !(
                !i.opts.keyboard ||
                t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                n(t.target).is("input,textarea,video,audio,select")
              )
            )
              return 8 === a || 27 === a
                ? (t.preventDefault(), void e.close(t))
                : 37 === a || 38 === a
                ? (t.preventDefault(), void e.previous())
                : 39 === a || 40 === a
                ? (t.preventDefault(), void e.next())
                : void e.trigger("afterKeydown", t, a);
          }),
          e.group[e.currIndex].opts.idleTime &&
            ((e.idleSecondsCounter = 0),
            r.on(
              "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
              function (t) {
                (e.idleSecondsCounter = 0),
                  e.isIdle && e.showControls(),
                  (e.isIdle = !1);
              }
            ),
            (e.idleInterval = t.setInterval(function () {
              ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                !e.isDragging &&
                ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
            }, 1e3)));
      },
      removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"),
          r.off("keydown.fb .fb-idle"),
          this.$refs.container.off(".fb-close .fb-prev .fb-next"),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          d,
          u,
          f = this,
          h = f.group.length;
        if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
              (t < 0 || t >= h))
          )
            return !1;
          if (
            ((o = f.firstRun = !Object.keys(f.slides).length),
            (r = f.current),
            (f.prevIndex = f.currIndex),
            (f.prevPos = f.currPos),
            (s = f.createSlide(t)),
            h > 1 &&
              ((a || s.index < h - 1) && f.createSlide(t + 1),
              (a || s.index > 0) && f.createSlide(t - 1)),
            (f.current = s),
            (f.currIndex = s.index),
            (f.currPos = s.pos),
            f.trigger("beforeShow", o),
            f.updateControls(),
            (s.forcedDuration = void 0),
            n.isNumeric(e)
              ? (s.forcedDuration = e)
              : (e = s.opts[o ? "animationDuration" : "transitionDuration"]),
            (e = parseInt(e, 10)),
            (i = f.isMoved(s)),
            s.$slide.addClass("fancybox-slide--current"),
            o)
          )
            return (
              s.opts.animationEffect &&
                e &&
                f.$refs.container.css("transition-duration", e + "ms"),
              f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
              f.loadSlide(s),
              void f.preload("image")
            );
          (c = n.fancybox.getTranslate(r.$slide)),
            (l = n.fancybox.getTranslate(f.$refs.stage)),
            n.each(f.slides, function (t, e) {
              n.fancybox.stop(e.$slide, !0);
            }),
            r.pos !== s.pos && (r.isComplete = !1),
            r.$slide.removeClass(
              "fancybox-slide--complete fancybox-slide--current"
            ),
            i
              ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                n.each(f.slides, function (t, o) {
                  o.$slide
                    .removeClass("fancybox-animated")
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                        " "
                      );
                    });
                  var i = o.pos * c.width + o.pos * o.opts.gutter;
                  n.fancybox.setTranslate(o.$slide, {
                    top: 0,
                    left: i - l.left + u,
                  }),
                    o.pos !== s.pos &&
                      o.$slide.addClass(
                        "fancybox-slide--" +
                          (o.pos > s.pos ? "next" : "previous")
                      ),
                    p(o.$slide),
                    n.fancybox.animate(
                      o.$slide,
                      {
                        top: 0,
                        left:
                          (o.pos - s.pos) * c.width +
                          (o.pos - s.pos) * o.opts.gutter,
                      },
                      e,
                      function () {
                        o.$slide
                          .css({ transform: "", opacity: "" })
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          ),
                          o.pos === f.currPos && f.complete();
                      }
                    );
                }))
              : e &&
                s.opts.transitionEffect &&
                ((d =
                  "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                r.$slide.addClass(
                  "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")
                ),
                n.fancybox.animate(
                  r.$slide,
                  d,
                  e,
                  function () {
                    r.$slide
                      .removeClass(d)
                      .removeClass(
                        "fancybox-slide--next fancybox-slide--previous"
                      );
                  },
                  !1
                )),
            s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
            f.preload("image");
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function (t, e, o) {
        var i,
          a,
          s,
          r,
          c,
          l = this,
          d = l.current,
          u = d.$content,
          f = n.fancybox.getTranslate(d.$slide).width,
          p = n.fancybox.getTranslate(d.$slide).height,
          h = d.width,
          g = d.height;
        l.isAnimating ||
          l.isMoved() ||
          !u ||
          "image" != d.type ||
          !d.isLoaded ||
          d.hasError ||
          ((l.isAnimating = !0),
          n.fancybox.stop(u),
          (t = void 0 === t ? 0.5 * f : t),
          (e = void 0 === e ? 0.5 * p : e),
          (i = n.fancybox.getTranslate(u)),
          (i.top -= n.fancybox.getTranslate(d.$slide).top),
          (i.left -= n.fancybox.getTranslate(d.$slide).left),
          (r = h / i.width),
          (c = g / i.height),
          (a = 0.5 * f - 0.5 * h),
          (s = 0.5 * p - 0.5 * g),
          h > f &&
            ((a = i.left * r - (t * r - t)),
            a > 0 && (a = 0),
            a < f - h && (a = f - h)),
          g > p &&
            ((s = i.top * c - (e * c - e)),
            s > 0 && (s = 0),
            s < p - g && (s = p - g)),
          l.updateCursor(h, g),
          n.fancybox.animate(
            u,
            { top: s, left: a, scaleX: r, scaleY: c },
            o || 366,
            function () {
              l.isAnimating = !1;
            }
          ),
          l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        o.isAnimating ||
          o.isMoved() ||
          !a ||
          "image" != i.type ||
          !i.isLoaded ||
          i.hasError ||
          ((o.isAnimating = !0),
          n.fancybox.stop(a),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height(),
            },
            t || 366,
            function () {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$content,
          c = t.$slide,
          l = t.width || t.opts.width,
          d = t.height || t.opts.height,
          u = {};
        return (
          !!(t.isLoaded && r && r.length) &&
          ((e = n.fancybox.getTranslate(s.$refs.stage).width),
          (o = n.fancybox.getTranslate(s.$refs.stage).height),
          (e -=
            parseFloat(c.css("paddingLeft")) +
            parseFloat(c.css("paddingRight")) +
            parseFloat(r.css("marginLeft")) +
            parseFloat(r.css("marginRight"))),
          (o -=
            parseFloat(c.css("paddingTop")) +
            parseFloat(c.css("paddingBottom")) +
            parseFloat(r.css("marginTop")) +
            parseFloat(r.css("marginBottom"))),
          (l && d) || ((l = e), (d = o)),
          (i = Math.min(1, e / l, o / d)),
          (l *= i),
          (d *= i),
          l > e - 0.5 && (l = e),
          d > o - 0.5 && (d = o),
          "image" === t.type
            ? ((u.top =
                Math.floor(0.5 * (o - d)) + parseFloat(c.css("paddingTop"))),
              (u.left =
                Math.floor(0.5 * (e - l)) + parseFloat(c.css("paddingLeft"))))
            : "video" === t.contentType &&
              ((a =
                t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
              d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
          (u.width = l),
          (u.height = d),
          u)
        );
      },
      update: function (t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content,
          a = t.width || t.opts.width,
          s = t.height || t.opts.height,
          r = t.$slide;
        o.adjustCaption(t),
          i &&
            (a || s || "video" === t.contentType) &&
            !t.hasError &&
            (n.fancybox.stop(i),
            n.fancybox.setTranslate(i, o.getFitPos(t)),
            t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
          o.adjustLayout(t),
          r.length &&
            (r.trigger("refresh"),
            t.pos === o.currPos &&
              o.$refs.toolbar
                .add(o.$refs.navigation.find(".fancybox-button--arrow_right"))
                .toggleClass(
                  "compensate-for-scrollbar",
                  r.get(0).scrollHeight > r.get(0).clientHeight
                )),
          o.trigger("onUpdate", t, e);
      },
      centerSlide: function (t) {
        var e = this,
          o = e.current,
          i = o.$slide;
        !e.isClosing &&
          o &&
          (i.siblings().css({ transform: "", opacity: "" }),
          i
            .parent()
            .children()
            .removeClass("fancybox-slide--previous fancybox-slide--next"),
          n.fancybox.animate(
            i,
            { top: 0, left: 0, opacity: 1 },
            void 0 === t ? 0 : t,
            function () {
              i.css({ transform: "", opacity: "" }),
                o.isComplete || e.complete();
            },
            !1
          ));
      },
      isMoved: function (t) {
        var e,
          o,
          i = t || this.current;
        return (
          !!i &&
          ((o = n.fancybox.getTranslate(this.$refs.stage)),
          (e = n.fancybox.getTranslate(i.$slide)),
          !i.$slide.hasClass("fancybox-animated") &&
            (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
        );
      },
      updateCursor: function (t, e) {
        var o,
          i,
          a = this,
          s = a.current,
          r = a.$refs.container;
        s &&
          !a.isClosing &&
          a.Guestures &&
          (r.removeClass(
            "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
          ),
          (o = a.canPan(t, e)),
          (i = !!o || a.isZoomable()),
          r.toggleClass("fancybox-is-zoomable", i),
          n("[data-fancybox-zoom]").prop("disabled", !i),
          o
            ? r.addClass("fancybox-can-pan")
            : i &&
              ("zoom" === s.opts.clickContent ||
                (n.isFunction(s.opts.clickContent) &&
                  "zoom" == s.opts.clickContent(s)))
            ? r.addClass("fancybox-can-zoomIn")
            : s.opts.touch &&
              (s.opts.touch.vertical || a.group.length > 1) &&
              "video" !== s.contentType &&
              r.addClass("fancybox-can-swipe"));
      },
      isZoomable: function () {
        var t,
          e = this,
          n = e.current;
        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if (
            (t = e.getFitPos(n)) &&
            (n.width > t.width || n.height > t.height)
          )
            return !0;
        }
        return !1;
      },
      isScaledDown: function (t, e) {
        var o = this,
          i = !1,
          a = o.current,
          s = a.$content;
        return (
          void 0 !== t && void 0 !== e
            ? (i = t < a.width && e < a.height)
            : s &&
              ((i = n.fancybox.getTranslate(s)),
              (i = i.width < a.width && i.height < a.height)),
          i
        );
      },
      canPan: function (t, e) {
        var o = this,
          i = o.current,
          a = null,
          s = !1;
        return (
          "image" === i.type &&
            (i.isComplete || (t && e)) &&
            !i.hasError &&
            ((s = o.getFitPos(i)),
            void 0 !== t && void 0 !== e
              ? (a = { width: t, height: e })
              : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
            a &&
              s &&
              (s =
                Math.abs(a.width - s.width) > 1.5 ||
                Math.abs(a.height - s.height) > 1.5)),
          s
        );
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          if (((t.isLoading = !0), !1 === a.trigger("beforeLoad", t)))
            return (t.isLoading = !1), !1;
          switch (
            ((e = t.type),
            (o = t.$slide),
            o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
            e)
          ) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "video":
              a.setContent(
                t,
                t.opts.video.tpl
                  .replace(/\{\{src\}\}/gi, t.src)
                  .replace(
                    "{{format}}",
                    t.opts.videoFormat || t.opts.video.format || ""
                  )
                  .replace("{{poster}}", t.thumb || "")
              );
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      "success" === n && a.setContent(t, e);
                    },
                    error: function (e, n) {
                      e && "abort" !== n && a.setError(t);
                    },
                  })
                )),
                o.one("onReset", function () {
                  i.abort();
                });
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function (t) {
        var o,
          i = this;
        setTimeout(function () {
          var e = t.$image;
          i.isClosing ||
            !t.isLoading ||
            (e && e.length && e[0].complete) ||
            t.hasError ||
            i.showLoading(t);
        }, 50),
          i.checkSrcset(t),
          (t.$content = n('<div class="fancybox-content"></div>')
            .addClass("fancybox-is-hidden")
            .appendTo(t.$slide.addClass("fancybox-slide--image"))),
          !1 !== t.opts.preload &&
            t.opts.width &&
            t.opts.height &&
            t.thumb &&
            ((t.width = t.opts.width),
            (t.height = t.opts.height),
            (o = e.createElement("img")),
            (o.onerror = function () {
              n(this).remove(), (t.$ghost = null);
            }),
            (o.onload = function () {
              i.afterLoad(t);
            }),
            (t.$ghost = n(o)
              .addClass("fancybox-image")
              .appendTo(t.$content)
              .attr("src", t.thumb))),
          i.setBigImage(t);
      },
      checkSrcset: function (e) {
        var n,
          o,
          i,
          a,
          s = e.opts.srcset || e.opts.image.srcset;
        if (s) {
          (i = t.devicePixelRatio || 1),
            (a = t.innerWidth * i),
            (o = s.split(",").map(function (t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    if (0 === n) return (e.url = t);
                    o && ((e.value = o), (e.postfix = t[t.length - 1]));
                  }),
                e
              );
            })),
            o.sort(function (t, e) {
              return t.value - e.value;
            });
          for (var r = 0; r < o.length; r++) {
            var c = o[r];
            if (
              ("w" === c.postfix && c.value >= a) ||
              ("x" === c.postfix && c.value >= i)
            ) {
              n = c;
              break;
            }
          }
          !n && o.length && (n = o[o.length - 1]),
            n &&
              ((e.src = n.url),
              e.width &&
                e.height &&
                "w" == n.postfix &&
                ((e.height = (e.width / e.height) * n.value),
                (e.width = n.value)),
              (e.opts.srcset = s));
        }
      },
      setBigImage: function (t) {
        var o = this,
          i = e.createElement("img"),
          a = n(i);
        (t.$image = a
          .one("error", function () {
            o.setError(t);
          })
          .one("load", function () {
            var e;
            t.$ghost ||
              (o.resolveImageSlideSize(
                t,
                this.naturalWidth,
                this.naturalHeight
              ),
              o.afterLoad(t)),
              o.isClosing ||
                (t.opts.srcset &&
                  ((e = t.opts.sizes),
                  (e && "auto" !== e) ||
                    (e =
                      (t.width / t.height > 1 && s.width() / s.height() > 1
                        ? "100"
                        : Math.round((t.width / t.height) * 100)) + "vw"),
                  a.attr("sizes", e).attr("srcset", t.opts.srcset)),
                t.$ghost &&
                  setTimeout(function () {
                    t.$ghost && !o.isClosing && t.$ghost.hide();
                  }, Math.min(300, Math.max(1e3, t.height / 1600))),
                o.hideLoading(t));
          })
          .addClass("fancybox-image")
          .attr("src", t.src)
          .appendTo(t.$content)),
          (i.complete || "complete" == i.readyState) &&
          a.naturalWidth &&
          a.naturalHeight
            ? a.trigger("load")
            : i.error && a.trigger("error");
      },
      resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10),
          i = parseInt(t.opts.height, 10);
        (t.width = e),
          (t.height = n),
          o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
          i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i));
      },
      setIframe: function (t) {
        var e,
          o = this,
          i = t.opts.iframe,
          a = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
            (i.preload ? " fancybox-is-hidden" : "") +
            '"></div>'
        )
          .css(i.css)
          .appendTo(a)),
          a.addClass("fancybox-slide--" + t.contentType),
          (t.$iframe = e =
            n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
              .attr(i.attr)
              .appendTo(t.$content)),
          i.preload
            ? (o.showLoading(t),
              e.on("load.fb error.fb", function (e) {
                (this.isReady = 1), t.$slide.trigger("refresh"), o.afterLoad(t);
              }),
              a.on("refresh.fb", function () {
                var n,
                  o,
                  s = t.$content,
                  r = i.css.width,
                  c = i.css.height;
                if (1 === e[0].isReady) {
                  try {
                    (n = e.contents()), (o = n.find("body"));
                  } catch (t) {}
                  o &&
                    o.length &&
                    o.children().length &&
                    (a.css("overflow", "visible"),
                    s.css({
                      width: "100%",
                      "max-width": "100%",
                      height: "9999px",
                    }),
                    void 0 === r &&
                      (r = Math.ceil(
                        Math.max(o[0].clientWidth, o.outerWidth(!0))
                      )),
                    s.css("width", r || "").css("max-width", ""),
                    void 0 === c &&
                      (c = Math.ceil(
                        Math.max(o[0].clientHeight, o.outerHeight(!0))
                      )),
                    s.css("height", c || ""),
                    a.css("overflow", "auto")),
                    s.removeClass("fancybox-is-hidden");
                }
              }))
            : o.afterLoad(t),
          e.attr("src", t.src),
          a.one("onReset", function () {
            try {
              n(this)
                .find("iframe")
                .hide()
                .unbind()
                .attr("src", "//about:blank");
            } catch (t) {}
            n(this).off("refresh.fb").empty(),
              (t.isLoaded = !1),
              (t.isRevealed = !1);
          });
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
          t.$content && n.fancybox.stop(t.$content),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? ((e.hasClass("fancybox-content") ||
                e.parent().hasClass("fancybox-content")) &&
                e.parents(".fancybox-slide").trigger("onReset"),
              (t.$placeholder = n("<div>").hide().insertAfter(e)),
              e.css("display", "inline-block"))
            : t.hasError ||
              ("string" === n.type(e) &&
                (e = n("<div>").append(n.trim(e)).contents()),
              t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
          t.$slide.one("onReset", function () {
            n(this).find("video,audio").trigger("pause"),
              t.$placeholder &&
                (t.$placeholder
                  .after(e.removeClass("fancybox-content").hide())
                  .remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError ||
                (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
          }),
          n(e).appendTo(t.$slide),
          n(e).is("video,audio") &&
            (n(e).addClass("fancybox-video"),
            n(e).wrap("<div></div>"),
            (t.contentType = "video"),
            (t.opts.width = t.opts.width || n(e).attr("width")),
            (t.opts.height = t.opts.height || n(e).attr("height"))),
          (t.$content = t.$slide
            .children()
            .filter("div,form,main,video,audio,article,.fancybox-content")
            .first()),
          t.$content.siblings().hide(),
          t.$content.length ||
            (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
          t.$content.addClass("fancybox-content"),
          t.$slide.addClass("fancybox-slide--" + t.contentType),
          o.afterLoad(t));
      },
      setError: function (t) {
        (t.hasError = !0),
          t.$slide
            .trigger("onReset")
            .removeClass("fancybox-slide--" + t.contentType)
            .addClass("fancybox-slide--error"),
          (t.contentType = "html"),
          this.setContent(t, this.translate(t, t.opts.errorTpl)),
          t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function (t) {
        var e = this;
        (t = t || e.current) &&
          !t.$spinner &&
          (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
            .appendTo(t.$slide)
            .hide()
            .fadeIn("fast"));
      },
      hideLoading: function (t) {
        var e = this;
        (t = t || e.current) &&
          t.$spinner &&
          (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger("afterLoad", t),
          e.hideLoading(t),
          !t.opts.smallBtn ||
            (t.$smallBtn && t.$smallBtn.length) ||
            (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            "image" === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.adjustCaption(t),
          e.adjustLayout(t),
          t.pos === e.currPos && e.updateCursor(),
          e.revealContent(t));
      },
      adjustCaption: function (t) {
        var e,
          n = this,
          o = t || n.current,
          i = o.opts.caption,
          a = o.opts.preventCaptionOverlap,
          s = n.$refs.caption,
          r = !1;
        s.toggleClass("fancybox-caption--separate", a),
          a &&
            i &&
            i.length &&
            (o.pos !== n.currPos
              ? ((e = s.clone().appendTo(s.parent())),
                e.children().eq(0).empty().html(i),
                (r = e.outerHeight(!0)),
                e.empty().remove())
              : n.$caption && (r = n.$caption.outerHeight(!0)),
            o.$slide.css("padding-bottom", r || ""));
      },
      adjustLayout: function (t) {
        var e,
          n,
          o,
          i,
          a = this,
          s = t || a.current;
        s.isLoaded &&
          !0 !== s.opts.disableLayoutFix &&
          (s.$content.css("margin-bottom", ""),
          s.$content.outerHeight() > s.$slide.height() + 0.5 &&
            ((o = s.$slide[0].style["padding-bottom"]),
            (i = s.$slide.css("padding-bottom")),
            parseFloat(i) > 0 &&
              ((e = s.$slide[0].scrollHeight),
              s.$slide.css("padding-bottom", 0),
              Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
              s.$slide.css("padding-bottom", o))),
          s.$content.css("margin-bottom", n));
      },
      revealContent: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$slide,
          c = !1,
          l = !1,
          d = s.isMoved(t),
          u = t.isRevealed;
        return (
          (t.isRevealed = !0),
          (e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
          (i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
          (i = parseInt(
            void 0 === t.forcedDuration ? i : t.forcedDuration,
            10
          )),
          (!d && t.pos === s.currPos && i) || (e = !1),
          "zoom" === e &&
            (t.pos === s.currPos &&
            i &&
            "image" === t.type &&
            !t.hasError &&
            (l = s.getThumbPos(t))
              ? (c = s.getFitPos(t))
              : (e = "fade")),
          "zoom" === e
            ? ((s.isAnimating = !0),
              (c.scaleX = c.width / l.width),
              (c.scaleY = c.height / l.height),
              (a = t.opts.zoomOpacity),
              "auto" == a &&
                (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
              a && ((l.opacity = 0.1), (c.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass("fancybox-is-hidden"),
                l
              ),
              p(t.$content),
              void n.fancybox.animate(t.$content, c, i, function () {
                (s.isAnimating = !1), s.complete();
              }))
            : (s.updateSlide(t),
              e
                ? (n.fancybox.stop(r),
                  (o =
                    "fancybox-slide--" +
                    (t.pos >= s.prevPos ? "next" : "previous") +
                    " fancybox-animated fancybox-fx-" +
                    e),
                  r.addClass(o).removeClass("fancybox-slide--current"),
                  t.$content.removeClass("fancybox-is-hidden"),
                  p(r),
                  "image" !== t.type && t.$content.hide().show(0),
                  void n.fancybox.animate(
                    r,
                    "fancybox-slide--current",
                    i,
                    function () {
                      r.removeClass(o).css({ transform: "", opacity: "" }),
                        t.pos === s.currPos && s.complete();
                    },
                    !0
                  ))
                : (t.$content.removeClass("fancybox-is-hidden"),
                  u ||
                    !d ||
                    "image" !== t.type ||
                    t.hasError ||
                    t.$content.hide().fadeIn("fast"),
                  void (t.pos === s.currPos && s.complete())))
        );
      },
      getThumbPos: function (t) {
        var e,
          o,
          i,
          a,
          s,
          r = !1,
          c = t.$thumb;
        return (
          !(!c || !g(c[0])) &&
          ((e = n.fancybox.getTranslate(c)),
          (o = parseFloat(c.css("border-top-width") || 0)),
          (i = parseFloat(c.css("border-right-width") || 0)),
          (a = parseFloat(c.css("border-bottom-width") || 0)),
          (s = parseFloat(c.css("border-left-width") || 0)),
          (r = {
            top: e.top + o,
            left: e.left + s,
            width: e.width - i - s,
            height: e.height - o - a,
            scaleX: 1,
            scaleY: 1,
          }),
          e.width > 0 && e.height > 0 && r)
        );
      },
      complete: function () {
        var t,
          e = this,
          o = e.current,
          i = {};
        !e.isMoved() &&
          o.isLoaded &&
          (o.isComplete ||
            ((o.isComplete = !0),
            o.$slide.siblings().trigger("onReset"),
            e.preload("inline"),
            p(o.$slide),
            o.$slide.addClass("fancybox-slide--complete"),
            n.each(e.slides, function (t, o) {
              o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                ? (i[o.pos] = o)
                : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
            }),
            (e.slides = i)),
          (e.isAnimating = !1),
          e.updateCursor(),
          e.trigger("afterShow"),
          o.opts.video.autoStart &&
            o.$slide
              .find("video,audio")
              .filter(":visible:first")
              .trigger("play")
              .one("ended", function () {
                Document.exitFullscreen
                  ? Document.exitFullscreen()
                  : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                  e.next();
              }),
          o.opts.autoFocus &&
            "html" === o.contentType &&
            ((t = o.$content.find("input[autofocus]:enabled:visible:first")),
            t.length ? t.trigger("focus") : e.focus(null, !0)),
          o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function (t) {
        var e,
          n,
          o = this;
        o.group.length < 2 ||
          ((n = o.slides[o.currPos + 1]),
          (e = o.slides[o.currPos - 1]),
          e && e.type === t && o.loadSlide(e),
          n && n.type === t && o.loadSlide(n));
      },
      focus: function (t, o) {
        var i,
          a,
          s = this,
          r = [
            "a[href]",
            "area[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "button:not([disabled]):not([aria-hidden])",
            "iframe",
            "object",
            "embed",
            "video",
            "audio",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ].join(",");
        s.isClosing ||
          ((i =
            !t && s.current && s.current.isComplete
              ? s.current.$slide.find(
                  "*:visible" + (o ? ":not(.fancybox-close-small)" : "")
                )
              : s.$refs.container.find("*:visible")),
          (i = i.filter(r).filter(function () {
            return (
              "hidden" !== n(this).css("visibility") &&
              !n(this).hasClass("disabled")
            );
          })),
          i.length
            ? ((a = i.index(e.activeElement)),
              t && t.shiftKey
                ? (a < 0 || 0 == a) &&
                  (t.preventDefault(), i.eq(i.length - 1).trigger("focus"))
                : (a < 0 || a == i.length - 1) &&
                  (t && t.preventDefault(), i.eq(0).trigger("focus")))
            : s.$refs.container.trigger("focus"));
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger("onActivate"),
          t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          u = this,
          f = u.current,
          h = function () {
            u.cleanUp(t);
          };
        return (
          !u.isClosing &&
          ((u.isClosing = !0),
          !1 === u.trigger("beforeClose", t)
            ? ((u.isClosing = !1),
              d(function () {
                u.update();
              }),
              !1)
            : (u.removeEvents(),
              (a = f.$content),
              (o = f.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
              ),
              !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
              f.$slide.siblings().trigger("onReset").remove(),
              i &&
                u.$refs.container
                  .removeClass("fancybox-is-open")
                  .addClass("fancybox-is-closing")
                  .css("transition-duration", i + "ms"),
              u.hideLoading(f),
              u.hideControls(!0),
              u.updateCursor(),
              "zoom" !== o ||
                (a &&
                  i &&
                  "image" === f.type &&
                  !u.isMoved() &&
                  !f.hasError &&
                  (l = u.getThumbPos(f))) ||
                (o = "fade"),
              "zoom" === o
                ? (n.fancybox.stop(a),
                  (s = n.fancybox.getTranslate(a)),
                  (c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height,
                  }),
                  (r = f.opts.zoomOpacity),
                  "auto" == r &&
                    (r =
                      Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                  r && (l.opacity = 0),
                  n.fancybox.setTranslate(a, c),
                  p(a),
                  n.fancybox.animate(a, l, i, h),
                  !0)
                : (o && i
                    ? n.fancybox.animate(
                        f.$slide
                          .addClass("fancybox-slide--previous")
                          .removeClass("fancybox-slide--current"),
                        "fancybox-animated fancybox-fx-" + o,
                        i,
                        h
                      )
                    : !0 === t
                    ? setTimeout(h, i)
                    : h(),
                  !0)))
        );
      },
      cleanUp: function (e) {
        var o,
          i,
          a,
          s = this,
          r = s.current.opts.$orig;
        s.current.$slide.trigger("onReset"),
          s.$refs.container.empty().remove(),
          s.trigger("afterClose", e),
          s.current.opts.backFocus &&
            ((r && r.length && r.is(":visible")) || (r = s.$trigger),
            r &&
              r.length &&
              ((i = t.scrollX),
              (a = t.scrollY),
              r.trigger("focus"),
              n("html, body").scrollTop(a).scrollLeft(i))),
          (s.current = null),
          (o = n.fancybox.getInstance()),
          o
            ? o.activate()
            : (n("body").removeClass(
                "fancybox-active compensate-for-scrollbar"
              ),
              n("#fancybox-style-noscroll").remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        if (
          (s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          !1 === o)
        )
          return o;
        "afterClose" !== t && a.$refs
          ? a.$refs.container.trigger(t + ".fb", i)
          : r.trigger(t + ".fb", i);
      },
      updateControls: function () {
        var t = this,
          o = t.current,
          i = o.index,
          a = t.$refs.container,
          s = t.$refs.caption,
          r = o.opts.caption;
        o.$slide.trigger("refresh"),
          r && r.length
            ? ((t.$caption = s), s.children().eq(0).html(r))
            : (t.$caption = null),
          t.hasHiddenControls || t.isIdle || t.showControls(),
          a.find("[data-fancybox-count]").html(t.group.length),
          a.find("[data-fancybox-index]").html(i + 1),
          a
            .find("[data-fancybox-prev]")
            .prop("disabled", !o.opts.loop && i <= 0),
          a
            .find("[data-fancybox-next]")
            .prop("disabled", !o.opts.loop && i >= t.group.length - 1),
          "image" === o.type
            ? a
                .find("[data-fancybox-zoom]")
                .show()
                .end()
                .find("[data-fancybox-download]")
                .attr("href", o.opts.image.src || o.src)
                .show()
            : o.opts.toolbar &&
              a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
          n(e.activeElement).is(":hidden,[disabled]") &&
            t.$refs.container.trigger("focus");
      },
      hideControls: function (t) {
        var e = this,
          n = ["infobar", "toolbar", "nav"];
        (!t && e.current.opts.preventCaptionOverlap) || n.push("caption"),
          this.$refs.container.removeClass(
            n
              .map(function (t) {
                return "fancybox-show-" + t;
              })
              .join(" ")
          ),
          (this.hasHiddenControls = !0);
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.hasHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
            .toggleClass(
              "fancybox-show-infobar",
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass("fancybox-show-caption", !!t.$caption)
            .toggleClass(
              "fancybox-show-nav",
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass("fancybox-is-modal", !!e.modal);
      },
      toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: "3.5.7",
        defaults: a,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof b &&
            ("string" === n.type(t)
              ? e[t].apply(e, o)
              : "function" === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function (t, e, n) {
          return new b(t, e, n);
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), !0 === t && this.close(t));
        },
        destroy: function () {
          this.close(!0), r.add("body").off("click.fb-start", "**");
        },
        isMobile:
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        use3d: (function () {
          var n = e.createElement("div");
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n) &&
            t.getComputedStyle(n).getPropertyValue("transform") &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function (t) {
          var e;
          return (
            !(!t || !t.length) &&
            ((e = t[0].getBoundingClientRect()),
            {
              top: e.top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css("opacity")),
            })
          );
        },
        setTranslate: function (t, e) {
          var n = "",
            o = {};
          if (t && e)
            return (
              (void 0 === e.left && void 0 === e.top) ||
                ((n =
                  (void 0 === e.left ? t.position().left : e.left) +
                  "px, " +
                  (void 0 === e.top ? t.position().top : e.top) +
                  "px"),
                (n = this.use3d
                  ? "translate3d(" + n + ", 0px)"
                  : "translate(" + n + ")")),
              void 0 !== e.scaleX && void 0 !== e.scaleY
                ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
              n.length && (o.transform = n),
              void 0 !== e.opacity && (o.opacity = e.opacity),
              void 0 !== e.width && (o.width = e.width),
              void 0 !== e.height && (o.height = e.height),
              t.css(o)
            );
        },
        animate: function (t, e, o, i, a) {
          var s,
            r = this;
          n.isFunction(o) && ((i = o), (o = null)),
            r.stop(t),
            (s = r.getTranslate(t)),
            t.on(f, function (c) {
              (!c ||
                !c.originalEvent ||
                (t.is(c.originalEvent.target) &&
                  "z-index" != c.originalEvent.propertyName)) &&
                (r.stop(t),
                n.isNumeric(o) && t.css("transition-duration", ""),
                n.isPlainObject(e)
                  ? void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    r.setTranslate(t, {
                      top: e.top,
                      left: e.left,
                      width: s.width * e.scaleX,
                      height: s.height * e.scaleY,
                      scaleX: 1,
                      scaleY: 1,
                    })
                  : !0 !== a && t.removeClass(e),
                n.isFunction(i) && i(c));
            }),
            n.isNumeric(o) && t.css("transition-duration", o + "ms"),
            n.isPlainObject(e)
              ? (void 0 !== e.scaleX &&
                  void 0 !== e.scaleY &&
                  (delete e.width,
                  delete e.height,
                  t.parent().hasClass("fancybox-slide--image") &&
                    t.parent().addClass("fancybox-is-scaling")),
                n.fancybox.setTranslate(t, e))
              : t.addClass(e),
            t.data(
              "timer",
              setTimeout(function () {
                t.trigger(f);
              }, o + 33)
            );
        },
        stop: function (t, e) {
          t &&
            t.length &&
            (clearTimeout(t.data("timer")),
            e && t.trigger(f),
            t.off(f).css("transition-duration", ""),
            t.parent().removeClass("fancybox-is-scaling"));
        },
      }),
      (n.fn.fancybox = function (t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n("body")
                .off("click.fb-start", e)
                .on("click.fb-start", e, { options: t }, i)
            : this.off("click.fb-start").on(
                "click.fb-start",
                { items: this, options: t },
                i
              ),
          this
        );
      }),
      r.on("click.fb-start", "[data-fancybox]", i),
      r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
        n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
          .eq(n(this).attr("data-fancybox-index") || 0)
          .trigger("click.fb-start", { $trigger: n(this) });
      }),
      (function () {
        var t = null;
        r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
          switch (e.type) {
            case "mousedown":
              t = n(this);
              break;
            case "mouseup":
              t = null;
              break;
            case "focusin":
              n(".fancybox-button").removeClass("fancybox-focus"),
                n(this).is(t) ||
                  n(this).is("[disabled]") ||
                  n(this).addClass("fancybox-focus");
              break;
            case "focusout":
              n(".fancybox-button").removeClass("fancybox-focus");
          }
        });
      })();
  }
})(window, document, jQuery),
  (function (t) {
    "use strict";
    var e = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      n = function (e, n, o) {
        if (e)
          return (
            (o = o || ""),
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
          );
      };
    t(document).on("objectNeedsType.fb", function (o, i, a) {
      var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || "",
        h = !1;
      (s = t.extend(!0, {}, e, a.opts.media)),
        t.each(s, function (e, o) {
          if ((c = p.match(o.matcher))) {
            if (
              ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
            ) {
              (d = c[o.paramPlace]),
                "?" == d[0] && (d = d.substring(1)),
                (d = d.split("&"));
              for (var i = 0; i < d.length; ++i) {
                var s = d[i].split("=", 2);
                2 == s.length &&
                  (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, a.opts[e], u)),
              (p =
                "function" === t.type(o.url)
                  ? o.url.call(this, c, l, a)
                  : n(o.url, c, l)),
              (r =
                "function" === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, a)
                  : n(o.thumb, c)),
              "youtube" === e
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return (
                      "&start=" +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                    );
                  }))
                : "vimeo" === e && (p = p.replace("&%23", "#")),
              !1
            );
          }
        }),
        h
          ? (a.opts.thumb ||
              (a.opts.$thumb && a.opts.$thumb.length) ||
              (a.opts.thumb = r),
            "iframe" === h &&
              (a.opts = t.extend(!0, a.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            t.extend(a, {
              type: h,
              src: p,
              origSrc: a.src,
              contentSource: f,
              contentType:
                "image" === h
                  ? "image"
                  : "gmap_place" == f || "gmap_search" == f
                  ? "map"
                  : "video",
            }))
          : p && (a.type = a.opts.defaultType);
    });
    var o = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: !1,
        loaded: !1,
      },
      load: function (t) {
        var e,
          n = this;
        if (this[t].loaded)
          return void setTimeout(function () {
            n.done(t);
          });
        this[t].loading ||
          ((this[t].loading = !0),
          (e = document.createElement("script")),
          (e.type = "text/javascript"),
          (e.src = this[t].src),
          "youtube" === t
            ? (window.onYouTubeIframeAPIReady = function () {
                (n[t].loaded = !0), n.done(t);
              })
            : (e.onload = function () {
                (n[t].loaded = !0), n.done(t);
              }),
          document.body.appendChild(e));
      },
      done: function (e) {
        var n, o, i;
        "youtube" === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()) &&
            ((o = n.current.$content.find("iframe")),
            "youtube" === e && void 0 !== YT && YT
              ? (i = new YT.Player(o.attr("id"), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && n.next();
                    },
                  },
                }))
              : "vimeo" === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                ((i = new Vimeo.Player(o)),
                i.on("ended", function () {
                  n.next();
                })));
      },
    };
    t(document).on({
      "afterShow.fb": function (t, e, n) {
        e.group.length > 1 &&
          ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
          o.load(n.contentSource);
      },
    });
  })(jQuery),
  (function (t, e, n) {
    "use strict";
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      a = function (e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      s = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          i =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a;
      },
      l = function (t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
          )
            break;
        }
        return e;
      },
      d = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (d.prototype.destroy = function () {
      var t = this;
      t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (i(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
    }),
      (d.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          d = i.instance,
          u = d.current,
          f = u.$slide,
          p = u.$content,
          h = "touchstart" == o.type;
        if (
          (h && i.$container.off("mousedown.fb.touch"),
          (!o.originalEvent || 2 != o.originalEvent.button) &&
            f.length &&
            c.length &&
            !r(c) &&
            !r(c.parent()) &&
            (c.is("img") ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
            return o.stopPropagation(), void o.preventDefault();
          (i.realPoints = i.startPoints = a(o)),
            i.startPoints.length &&
              (u.touch && o.stopPropagation(),
              (i.startEvent = o),
              (i.canTap = !0),
              (i.$target = c),
              (i.$content = p),
              (i.opts = u.opts.touch),
              (i.isPanning = !1),
              (i.isSwiping = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.canPan = d.canPan()),
              (i.startTime = new Date().getTime()),
              (i.distanceX = i.distanceY = i.distance = 0),
              (i.canvasWidth = Math.round(f[0].clientWidth)),
              (i.canvasHeight = Math.round(f[0].clientHeight)),
              (i.contentLastPos = null),
              (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0,
              }),
              (i.sliderStartPos = n.fancybox.getTranslate(f)),
              (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
              (i.sliderStartPos.top -= i.stagePos.top),
              (i.sliderStartPos.left -= i.stagePos.left),
              (i.contentStartPos.top -= i.stagePos.top),
              (i.contentStartPos.left -= i.stagePos.left),
              n(e)
                .off(".fb.touch")
                .on(
                  h
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  n.proxy(i, "ontouchend")
                )
                .on(
                  h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  n.proxy(i, "ontouchmove")
                ),
              n.fancybox.isMobile &&
                e.addEventListener("scroll", i.onscroll, !0),
              (((i.opts || i.canPan) &&
                (c.is(i.$stage) || i.$stage.find(c).length)) ||
                (c.is(".fancybox-image") && o.preventDefault(),
                n.fancybox.isMobile &&
                  c.parents(".fancybox-caption").length)) &&
                ((i.isScrollable = l(c) || l(c.parent())),
                (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                (1 === i.startPoints.length || u.hasError) &&
                  (i.canPan
                    ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                    : (i.isSwiping = !0),
                  i.$container.addClass("fancybox-is-grabbing")),
                2 === i.startPoints.length &&
                  "image" === u.type &&
                  (u.isLoaded || u.$ghost) &&
                  ((i.canTap = !1),
                  (i.isSwiping = !1),
                  (i.isPanning = !1),
                  (i.isZooming = !0),
                  n.fancybox.stop(i.$content),
                  (i.centerPointStartX =
                    0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                    n(t).scrollLeft()),
                  (i.centerPointStartY =
                    0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                    n(t).scrollTop()),
                  (i.percentageOfImageAtPinchPointX =
                    (i.centerPointStartX - i.contentStartPos.left) /
                    i.contentStartPos.width),
                  (i.percentageOfImageAtPinchPointY =
                    (i.centerPointStartY - i.contentStartPos.top) /
                    i.contentStartPos.height),
                  (i.startDistanceBetweenFingers = s(
                    i.startPoints[0],
                    i.startPoints[1]
                  )))));
        }
      }),
      (d.prototype.onscroll = function (t) {
        var n = this;
        (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
      }),
      (d.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling
          ? void (e.canTap = !1)
          : ((e.newPoints = a(t)),
            void (
              (e.opts || e.canPan) &&
              e.newPoints.length &&
              e.newPoints.length &&
              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
              (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
              (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
              (e.distance = s(e.newPoints[0], e.startPoints[0])),
              e.distance > 0 &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ));
      }),
      (d.prototype.onSwipe = function (e) {
        var a,
          s = this,
          r = s.instance,
          c = s.isSwiping,
          l = s.sliderStartPos.left || 0;
        if (!0 !== c)
          "x" == c &&
            (s.distanceX > 0 &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (l += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                (s.instance.group.length < 2 ||
                  (s.instance.current.index === s.instance.group.length - 1 &&
                    !s.instance.current.opts.loop))
              ? (l -= Math.pow(-s.distanceX, 0.8))
              : (l += s.distanceX)),
            (s.sliderLastPos = {
              top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
              left: l,
            }),
            s.requestId && (i(s.requestId), (s.requestId = null)),
            (s.requestId = o(function () {
              s.sliderLastPos &&
                (n.each(s.instance.slides, function (t, e) {
                  var o = e.pos - s.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      o * s.canvasWidth +
                      o * e.opts.gutter,
                  });
                }),
                s.$container.addClass("fancybox-is-sliding"));
            }));
        else if (Math.abs(s.distance) > 10) {
          if (
            ((s.canTap = !1),
            r.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = "y")
              : r.isDragging ||
                !1 === s.opts.vertical ||
                ("auto" === s.opts.vertical && n(t).width() > 800)
              ? (s.isSwiping = "x")
              : ((a = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
            "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
          )
            return void (s.isScrolling = !0);
          (r.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            n.each(r.slides, function (t, e) {
              var o, i;
              n.fancybox.stop(e.$slide),
                (o = n.fancybox.getTranslate(e.$slide)),
                (i = n.fancybox.getTranslate(r.$refs.stage)),
                e.$slide
                  .css({
                    transform: "",
                    opacity: "",
                    "transition-duration": "",
                  })
                  .removeClass("fancybox-animated")
                  .removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                  }),
                e.pos === r.current.pos &&
                  ((s.sliderStartPos.top = o.top - i.top),
                  (s.sliderStartPos.left = o.left - i.left)),
                n.fancybox.setTranslate(e.$slide, {
                  top: o.top - i.top,
                  left: o.left - i.left,
                });
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
        }
      }),
      (d.prototype.onPan = function () {
        var t = this;
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
          return void (t.startPoints = t.newPoints);
        (t.canTap = !1),
          (t.contentLastPos = t.limitMovement()),
          t.requestId && i(t.requestId),
          (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (d.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          a,
          s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          d = s.distanceY,
          u = s.contentStartPos,
          f = u.left,
          p = u.top,
          h = u.width,
          g = u.height;
        return (
          (i = h > r ? f + l : f),
          (a = p + d),
          (t = Math.max(0, 0.5 * r - 0.5 * h)),
          (e = Math.max(0, 0.5 * c - 0.5 * g)),
          (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
          (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
          l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
          l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
          d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
          d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
          { top: a, left: i }
        );
      }),
      (d.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight;
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (d.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos,
          r = a.width,
          c = a.height,
          l = a.left,
          d = a.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          f = u / e.startDistanceBetweenFingers,
          p = Math.floor(r * f),
          h = Math.floor(c * f),
          g = (r - p) * e.percentageOfImageAtPinchPointX,
          b = (c - h) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          x = v - e.centerPointStartY,
          w = l + (g + y),
          $ = d + (b + x),
          S = { top: $, left: w, scaleX: f, scaleY: f };
        (e.canTap = !1),
          (e.newWidth = p),
          (e.newHeight = h),
          (e.contentLastPos = S),
          e.requestId && i(e.requestId),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (d.prototype.ontouchend = function (t) {
        var o = this,
          s = o.isSwiping,
          r = o.isPanning,
          c = o.isZooming,
          l = o.isScrolling;
        if (
          ((o.endPoints = a(t)),
          (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
          o.$container.removeClass("fancybox-is-grabbing"),
          n(e).off(".fb.touch"),
          e.removeEventListener("scroll", o.onscroll, !0),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap)
        )
          return o.onTap(t);
        (o.speed = 100),
          (o.velocityX = (o.distanceX / o.dMs) * 0.5),
          (o.velocityY = (o.distanceY / o.dMs) * 0.5),
          r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
      }),
      (d.prototype.endSwiping = function (t, e) {
        var o = this,
          i = !1,
          a = o.instance.group.length,
          s = Math.abs(o.distanceX),
          r = "x" == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50);
        (o.sliderLastPos = null),
          "y" == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0,
                },
                200
              ),
              (i = o.instance.close(!0, 250)))
            : r && o.distanceX > 0
            ? (i = o.instance.previous(300))
            : r && o.distanceX < 0 && (i = o.instance.next(300)),
          !1 !== i || ("x" != t && "y" != t) || o.instance.centerSlide(200),
          o.$container.removeClass("fancybox-is-sliding");
      }),
      (d.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this;
        i.contentLastPos &&
          (!1 === i.opts.momentum || i.dMs > 350
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + 500 * i.velocityX),
              (e = i.contentLastPos.top + 500 * i.velocityY)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 366));
      }),
      (d.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight;
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? a.instance.scaleToActual(
                a.centerPointStartX,
                a.centerPointStartY,
                150
              )
            : ((o = a.limitPosition(t, e, r, c)),
              n.fancybox.animate(a.$content, o, 150)));
      }),
      (d.prototype.onTap = function (e) {
        var o,
          i = this,
          s = n(e.target),
          r = i.instance,
          c = r.current,
          l = (e && a(e)) || i.startPoints,
          d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
          u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
          f = function (t) {
            var o = c.opts[t];
            if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
              switch (o) {
                case "close":
                  r.close(i.startEvent);
                  break;
                case "toggleControls":
                  r.toggleControls();
                  break;
                case "next":
                  r.next();
                  break;
                case "nextOrClose":
                  r.group.length > 1 ? r.next() : r.close(i.startEvent);
                  break;
                case "zoom":
                  "image" == c.type &&
                    (c.isLoaded || c.$ghost) &&
                    (r.canPan()
                      ? r.scaleToFit()
                      : r.isScaledDown()
                      ? r.scaleToActual(d, u)
                      : r.group.length < 2 && r.close(i.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (s.is("img") || !(d > s[0].clientWidth + s.offset().left))
        ) {
          if (
            s.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            o = "Outside";
          else if (s.is(".fancybox-slide")) o = "Slide";
          else {
            if (
              !r.current.$content ||
              !r.current.$content.find(s).addBack().filter(s).length
            )
              return;
            o = "Content";
          }
          if (i.tapped) {
            if (
              (clearTimeout(i.tapped),
              (i.tapped = null),
              Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
            )
              return this;
            f("dblclick" + o);
          } else
            (i.tapX = d),
              (i.tapY = u),
              c.opts["dblclick" + o] &&
              c.opts["dblclick" + o] !== c.opts["click" + o]
                ? (i.tapped = setTimeout(function () {
                    (i.tapped = null), r.isAnimating || f("click" + o);
                  }, 500))
                : f("click" + o);
          return this;
        }
      }),
      n(e)
        .on("onActivate.fb", function (t, e) {
          e && !e.Guestures && (e.Guestures = new d(e));
        })
        .on("beforeClose.fb", function (t, e) {
          e && e.Guestures && e.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;
        (t.$button = n.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          n.group.length < 2 || !o
            ? t.$button.hide()
            : o.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner));
      },
      set: function (t) {
        var n = this,
          o = n.instance,
          i = o.current;
        i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
          ? n.isActive &&
            "video" !== i.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                { scaleX: 1 },
                i.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function () {
              o.current.opts.loop || o.current.index != o.group.length - 1
                ? o.next()
                : o.jumpTo(0);
            }, i.opts.slideShow.speed)))
          : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        e &&
          (t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (t.isActive = !1),
          t.instance.trigger("onSlideShowChange", !1),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        "afterKeydown.fb": function (n, o, i, a, s) {
          var r = o && o.SlideShow;
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is("button,a,input") ||
            (a.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      for (
        var e = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          n = {},
          o = 0;
        o < e.length;
        o++
      ) {
        var i = e[o];
        if (i && i[1] in t) {
          for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
          return n;
        }
      }
      return !1;
    })();
    if (n) {
      var o = {
        request: function (e) {
          (e = e || t.documentElement),
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
        },
        exit: function () {
          t[n.exitFullscreen]();
        },
        toggle: function (e) {
          (e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = o.isFullscreen(),
            n = e.fancybox.getInstance();
          n &&
            (n.current &&
              "image" === n.current.type &&
              n.isAnimating &&
              ((n.isAnimating = !1),
              n.update(!0, !0, 0),
              n.isComplete || n.complete()),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .toggleClass("fancybox-button--fsenter", !t)
              .toggleClass("fancybox-button--fsexit", t));
        });
    }
    e(t).on({
      "onInit.fb": function (t, e) {
        var i;
        if (!n)
          return void e.$refs.toolbar
            .find("[data-fancybox-fullscreen]")
            .remove();
        e && e.group[e.currIndex].opts.fullScreen
          ? ((i = e.$refs.container),
            i.on(
              "click.fb-fullscreen",
              "[data-fancybox-fullscreen]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle();
              }
            ),
            e.opts.fullScreen &&
              !0 === e.opts.fullScreen.autoStart &&
              o.request(),
            (e.FullScreen = o))
          : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      },
      "afterKeydown.fb": function (t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle());
      },
      "beforeClose.fb": function (t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass("fancybox-is-fullscreen") &&
          o.exit();
      },
    });
  })(document, jQuery),
  (function (t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      e.fancybox.defaults
    );
    var o = function (t) {
      this.init(t);
    };
    e.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          o = 0;
        (e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
        for (
          var i = 0, a = n.length;
          i < a && (n[i].thumb && o++, !(o > 1));
          i++
        );
        o > 1 && e.opts
          ? (e.$button.removeAttr("style").on("click", function () {
              e.toggle();
            }),
            (e.isActive = !0))
          : e.$button.hide();
      },
      create: function () {
        var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = [];
        o.$grid ||
          ((o.$grid = e(
            '<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>'
          ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
          o.$grid.on("click", "a", function () {
            i.jumpTo(e(this).attr("data-index"));
          })),
          o.$list ||
            (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
          e.each(i.group, function (e, n) {
            (t = n.thumb),
              t || "image" !== n.type || (t = n.src),
              s.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  "></a>"
              );
          }),
          (o.$list[0].innerHTML = s.join("")),
          "x" === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css("padding-right"), 10) +
                i.group.length * o.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (t) {
        var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid;
        o.instance.current &&
          ((e = i
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + o.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")),
          (n = e.position()),
          "y" === o.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight())
            ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
            : "x" === o.opts.axis &&
              (n.left < a.scrollLeft() ||
                n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
              i.parent().stop().animate({ scrollLeft: n.left }, t));
      },
      update: function () {
        var t = this;
        t.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger("onThumbsShow"),
              t.focus(0))
            : t.$grid && t.instance.trigger("onThumbsHide"),
          t.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var n;
          e &&
            !e.Thumbs &&
            ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show());
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.Thumbs;
          i && i.isVisible && i.focus(o ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (t, e) {
    "use strict";
    function n(t) {
      var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      };
      return String(t).replace(/[&<>"'`=\/]/g, function (t) {
        return e[t];
      });
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              "inline" !== e.type &&
              "html" !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      e(t).on("click", "[data-fancybox-share]", function () {
        var t,
          o,
          i = e.fancybox.getInstance(),
          a = i.current || null;
        a &&
          ("function" === e.type(a.opts.share.url) &&
            (t = a.opts.share.url.apply(a, [i, a])),
          (o = a.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === a.type ? encodeURIComponent(a.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              i.$caption ? encodeURIComponent(i.$caption.text()) : ""
            )),
          e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                i.$refs.container.one("beforeClose.fb", function () {
                  t.close(null, 0);
                }),
                  e.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function (t, e, n) {
    "use strict";
    function o() {
      var e = t.location.hash.substr(1),
        n = e.split("-"),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join("-");
      return { hash: e, index: o < 1 ? 1 : o, gallery: i };
    }
    function i(t) {
      "" !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger("click.fb-start");
    }
    function a(t) {
      var e, n;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        "" !==
          (n =
            e.hash ||
            (e.$orig
              ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
              : "")) && n)
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        return (t + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          }
        );
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(e).on({
            "onInit.fb": function (t, e) {
              var n, i;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = o()),
                (i = a(e)) &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (n, o, i, s) {
              var r;
              i &&
                !1 !== i.opts.hash &&
                (r = a(o)) &&
                ((o.currentHash =
                  r + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                t.location.hash !== "#" + o.currentHash &&
                  (s && !o.origHash && (o.origHash = t.location.hash),
                  o.hashTimer && clearTimeout(o.hashTimer),
                  (o.hashTimer = setTimeout(function () {
                    "replaceState" in t.history
                      ? (t.history[s ? "pushState" : "replaceState"](
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            "#" +
                            o.currentHash
                        ),
                        s && (o.hasCreatedHistory = !0))
                      : (t.location.hash = o.currentHash),
                      (o.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (n, o, i) {
              i &&
                !1 !== i.opts.hash &&
                (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory
                  ? t.history.back()
                  : o.currentHash &&
                    ("replaceState" in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (o.origHash || "")
                        )
                      : (t.location.hash = o.origHash)),
                (o.currentHash = null));
            },
          }),
          n(t).on("hashchange.fb", function () {
            var t = o(),
              e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, o) {
              var i = n(o).data("FancyBox");
              if (i && i.currentHash) return (e = i), !1;
            }),
              e
                ? e.currentHash === t.gallery + "-" + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : "" !== t.gallery && i(t);
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || i(o());
          }, 50));
      });
  })(window, document, jQuery),
  (function (t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, e, o) {
        e.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var o = e.current,
              i = new Date().getTime();
            e.group.length < 2 ||
              !1 === o.opts.wheel ||
              ("auto" === o.opts.wheel && "image" !== o.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              o.$slide.hasClass("fancybox-animated") ||
                ((t = t.originalEvent || t),
                i - n < 250 ||
                  ((n = i),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, jQuery);
