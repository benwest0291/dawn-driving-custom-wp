var hura_show_effect = true;
let huraCurrentURL = window.location.href;
if (huraCurrentURL.includes("?oseid=")) {
  hura_show_effect = false;
}
var isHMAKMobile = navigator.userAgent.match(
  /(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i
);
if (window.jQuery) {
  var $ = jQuery.noConflict();
} else {
  /*! jQuery v1.12.0 */
  !(function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = a.document
          ? b(a, !0)
          : function (a) {
              if (!a.document)
                throw new Error("jQuery requires a window with a document");
              return b(a);
            })
      : b(a);
  })("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "1.12.0",
      n = function (a, b) {
        return new n.fn.init(a, b);
      },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function (a, b) {
        return b.toUpperCase();
      };
    (n.fn = n.prototype =
      {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
          return e.call(this);
        },
        get: function (a) {
          return null != a
            ? 0 > a
              ? this[a + this.length]
              : this[a]
            : e.call(this);
        },
        pushStack: function (a) {
          var b = n.merge(this.constructor(), a);
          return (b.prevObject = this), (b.context = this.context), b;
        },
        each: function (a) {
          return n.each(this, a);
        },
        map: function (a) {
          return this.pushStack(
            n.map(this, function (b, c) {
              return a.call(b, c, b);
            })
          );
        },
        slice: function () {
          return this.pushStack(e.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (a) {
          var b = this.length,
            c = +a + (0 > a ? b : 0);
          return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: g,
        sort: c.sort,
        splice: c.splice,
      }),
      (n.extend = n.fn.extend =
        function () {
          var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
          for (
            "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
              "object" == typeof g || n.isFunction(g) || (g = {}),
              h === i && ((g = this), h--);
            i > h;
            h++
          )
            if (null != (e = arguments[h]))
              for (d in e)
                (a = g[d]),
                  (c = e[d]),
                  g !== c &&
                    (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                      ? (b
                          ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                          : (f = a && n.isPlainObject(a) ? a : {}),
                        (g[d] = n.extend(j, f, c)))
                      : void 0 !== c && (g[d] = c));
          return g;
        }),
      n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
          throw new Error(a);
        },
        noop: function () {},
        isFunction: function (a) {
          return "function" === n.type(a);
        },
        isArray:
          Array.isArray ||
          function (a) {
            return "array" === n.type(a);
          },
        isWindow: function (a) {
          return null != a && a == a.window;
        },
        isNumeric: function (a) {
          var b = a && a.toString();
          return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isEmptyObject: function (a) {
          var b;
          for (b in a) return !1;
          return !0;
        },
        isPlainObject: function (a) {
          var b;
          if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
            return !1;
          try {
            if (
              a.constructor &&
              !k.call(a, "constructor") &&
              !k.call(a.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (c) {
            return !1;
          }
          if (!l.ownFirst) for (b in a) return k.call(a, b);
          for (b in a);
          return void 0 === b || k.call(a, b);
        },
        type: function (a) {
          return null == a
            ? a + ""
            : "object" == typeof a || "function" == typeof a
            ? i[j.call(a)] || "object"
            : typeof a;
        },
        globalEval: function (b) {
          b &&
            n.trim(b) &&
            (
              a.execScript ||
              function (b) {
                a.eval.call(a, b);
              }
            )(b);
        },
        camelCase: function (a) {
          return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function (a, b) {
          return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b) {
          var c,
            d = 0;
          if (s(a)) {
            for (c = a.length; c > d; d++)
              if (b.call(a[d], d, a[d]) === !1) break;
          } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
          return a;
        },
        trim: function (a) {
          return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function (a, b) {
          var c = b || [];
          return (
            null != a &&
              (s(Object(a))
                ? n.merge(c, "string" == typeof a ? [a] : a)
                : g.call(c, a)),
            c
          );
        },
        inArray: function (a, b, c) {
          var d;
          if (b) {
            if (h) return h.call(b, a, c);
            for (
              d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
              d > c;
              c++
            )
              if (c in b && b[c] === a) return c;
          }
          return -1;
        },
        merge: function (a, b) {
          var c = +b.length,
            d = 0,
            e = a.length;
          while (c > d) a[e++] = b[d++];
          if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
          return (a.length = e), a;
        },
        grep: function (a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
            (d = !b(a[f], f)), d !== h && e.push(a[f]);
          return e;
        },
        map: function (a, b, c) {
          var d,
            e,
            g = 0,
            h = [];
          if (s(a))
            for (d = a.length; d > g; g++)
              (e = b(a[g], g, c)), null != e && h.push(e);
          else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
          return f.apply([], h);
        },
        guid: 1,
        proxy: function (a, b) {
          var c, d, f;
          return (
            "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
            n.isFunction(a)
              ? ((c = e.call(arguments, 2)),
                (d = function () {
                  return a.apply(b || this, c.concat(e.call(arguments)));
                }),
                (d.guid = a.guid = a.guid || n.guid++),
                d)
              : void 0
          );
        },
        now: function () {
          return +new Date();
        },
        support: l,
      }),
      "function" == typeof Symbol &&
        (n.fn[Symbol.iterator] = c[Symbol.iterator]),
      n.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (a, b) {
          i["[object " + b + "]"] = b.toLowerCase();
        }
      );
    function s(a) {
      var b = !!a && "length" in a && a.length,
        c = n.type(a);
      return "function" === c || n.isWindow(a)
        ? !1
        : "array" === c ||
            0 === b ||
            ("number" == typeof b && b > 0 && b - 1 in a);
    }
    var t = (function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function (a, b) {
          return a === b && (l = !0), 0;
        },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function (a, b) {
          for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
          return -1;
        },
        K =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N =
          "\\[" +
          L +
          "*(" +
          M +
          ")(?:" +
          L +
          "*([*^$|!~]?=)" +
          L +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          M +
          "))|)" +
          L +
          "*\\]",
        O =
          ":(" +
          M +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          N +
          ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = {
          ID: new RegExp("^#(" + M + ")"),
          CLASS: new RegExp("^\\.(" + M + ")"),
          TAG: new RegExp("^(" + M + "|[*])"),
          ATTR: new RegExp("^" + N),
          PSEUDO: new RegExp("^" + O),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              L +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              L +
              "*(?:([+-]|)" +
              L +
              "*(\\d+)|))" +
              L +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + K + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              L +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              L +
              "*((?:-\\d)?\\d*)" +
              L +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function (a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c
            ? b
            : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
        },
        da = function () {
          m();
        };
      try {
        H.apply((E = I.call(v.childNodes)), v.childNodes),
          E[v.childNodes.length].nodeType;
      } catch (ea) {
        H = {
          apply: E.length
            ? function (a, b) {
                G.apply(a, I.call(b));
              }
            : function (a, b) {
                var c = a.length,
                  d = 0;
                while ((a[c++] = b[d++]));
                a.length = c - 1;
              },
        };
      }
      function fa(a, b, d, e) {
        var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;
        if (
          ((d = d || []),
          "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
        )
          return d;
        if (
          !e &&
          ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
        ) {
          if (11 !== x && (o = $.exec(a)))
            if ((f = o[1])) {
              if (9 === x) {
                if (!(j = b.getElementById(f))) return d;
                if (j.id === f) return d.push(j), d;
              } else if (
                w &&
                (j = w.getElementById(f)) &&
                t(b, j) &&
                j.id === f
              )
                return d.push(j), d;
            } else {
              if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
              if (
                (f = o[3]) &&
                c.getElementsByClassName &&
                b.getElementsByClassName
              )
                return H.apply(d, b.getElementsByClassName(f)), d;
            }
          if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
            if (1 !== x) (w = b), (s = a);
            else if ("object" !== b.nodeName.toLowerCase()) {
              (k = b.getAttribute("id"))
                ? (k = k.replace(aa, "\\$&"))
                : b.setAttribute("id", (k = u)),
                (r = g(a)),
                (h = r.length),
                (l = V.test(k) ? "#" + k : "[id='" + k + "']");
              while (h--) r[h] = l + " " + qa(r[h]);
              (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
            }
            if (s)
              try {
                return H.apply(d, w.querySelectorAll(s)), d;
              } catch (y) {
              } finally {
                k === u && b.removeAttribute("id");
              }
          }
        }
        return i(a.replace(Q, "$1"), b, d, e);
      }
      function ga() {
        var a = [];
        function b(c, e) {
          return (
            a.push(c + " ") > d.cacheLength && delete b[a.shift()],
            (b[c + " "] = e)
          );
        }
        return b;
      }
      function ha(a) {
        return (a[u] = !0), a;
      }
      function ia(a) {
        var b = n.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), (b = null);
        }
      }
      function ja(a, b) {
        var c = a.split("|"),
          e = c.length;
        while (e--) d.attrHandle[c[e]] = b;
      }
      function ka(a, b) {
        var c = b && a,
          d =
            c &&
            1 === a.nodeType &&
            1 === b.nodeType &&
            (~b.sourceIndex || C) - (~a.sourceIndex || C);
        if (d) return d;
        if (c) while ((c = c.nextSibling)) if (c === b) return -1;
        return a ? 1 : -1;
      }
      function la(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function ma(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function na(a) {
        return ha(function (b) {
          return (
            (b = +b),
            ha(function (c, d) {
              var e,
                f = a([], c.length, b),
                g = f.length;
              while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
      function oa(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a;
      }
      (c = fa.support = {}),
        (f = fa.isXML =
          function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
          }),
        (m = fa.setDocument =
          function (a) {
            var b,
              e,
              g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement
              ? ((n = g),
                (o = n.documentElement),
                (p = !f(n)),
                (e = n.defaultView) &&
                  e.top !== e &&
                  (e.addEventListener
                    ? e.addEventListener("unload", da, !1)
                    : e.attachEvent && e.attachEvent("onunload", da)),
                (c.attributes = ia(function (a) {
                  return (a.className = "i"), !a.getAttribute("className");
                })),
                (c.getElementsByTagName = ia(function (a) {
                  return (
                    a.appendChild(n.createComment("")),
                    !a.getElementsByTagName("*").length
                  );
                })),
                (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
                (c.getById = ia(function (a) {
                  return (
                    (o.appendChild(a).id = u),
                    !n.getElementsByName || !n.getElementsByName(u).length
                  );
                })),
                c.getById
                  ? ((d.find.ID = function (a, b) {
                      if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : [];
                      }
                    }),
                    (d.filter.ID = function (a) {
                      var b = a.replace(ba, ca);
                      return function (a) {
                        return a.getAttribute("id") === b;
                      };
                    }))
                  : (delete d.find.ID,
                    (d.filter.ID = function (a) {
                      var b = a.replace(ba, ca);
                      return function (a) {
                        var c =
                          "undefined" != typeof a.getAttributeNode &&
                          a.getAttributeNode("id");
                        return c && c.value === b;
                      };
                    })),
                (d.find.TAG = c.getElementsByTagName
                  ? function (a, b) {
                      return "undefined" != typeof b.getElementsByTagName
                        ? b.getElementsByTagName(a)
                        : c.qsa
                        ? b.querySelectorAll(a)
                        : void 0;
                    }
                  : function (a, b) {
                      var c,
                        d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                      if ("*" === a) {
                        while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                        return d;
                      }
                      return f;
                    }),
                (d.find.CLASS =
                  c.getElementsByClassName &&
                  function (a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p
                      ? b.getElementsByClassName(a)
                      : void 0;
                  }),
                (r = []),
                (q = []),
                (c.qsa = Z.test(n.querySelectorAll)) &&
                  (ia(function (a) {
                    (o.appendChild(a).innerHTML =
                      "<a id='" +
                      u +
                      "'></a><select id='" +
                      u +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      a.querySelectorAll("[msallowcapture^='']").length &&
                        q.push("[*^$]=" + L + "*(?:''|\"\")"),
                      a.querySelectorAll("[selected]").length ||
                        q.push("\\[" + L + "*(?:value|" + K + ")"),
                      a.querySelectorAll("[id~=" + u + "-]").length ||
                        q.push("~="),
                      a.querySelectorAll(":checked").length ||
                        q.push(":checked"),
                      a.querySelectorAll("a#" + u + "+*").length ||
                        q.push(".#.+[+~]");
                  }),
                  ia(function (a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"),
                      a.appendChild(b).setAttribute("name", "D"),
                      a.querySelectorAll("[name=d]").length &&
                        q.push("name" + L + "*[*^$|!~]?="),
                      a.querySelectorAll(":enabled").length ||
                        q.push(":enabled", ":disabled"),
                      a.querySelectorAll("*,:x"),
                      q.push(",.*:");
                  })),
                (c.matchesSelector = Z.test(
                  (s =
                    o.matches ||
                    o.webkitMatchesSelector ||
                    o.mozMatchesSelector ||
                    o.oMatchesSelector ||
                    o.msMatchesSelector)
                )) &&
                  ia(function (a) {
                    (c.disconnectedMatch = s.call(a, "div")),
                      s.call(a, "[s!='']:x"),
                      r.push("!=", O);
                  }),
                (q = q.length && new RegExp(q.join("|"))),
                (r = r.length && new RegExp(r.join("|"))),
                (b = Z.test(o.compareDocumentPosition)),
                (t =
                  b || Z.test(o.contains)
                    ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                          d = b && b.parentNode;
                        return (
                          a === d ||
                          !(
                            !d ||
                            1 !== d.nodeType ||
                            !(c.contains
                              ? c.contains(d)
                              : a.compareDocumentPosition &&
                                16 & a.compareDocumentPosition(d))
                          )
                        );
                      }
                    : function (a, b) {
                        if (b)
                          while ((b = b.parentNode)) if (b === a) return !0;
                        return !1;
                      }),
                (B = b
                  ? function (a, b) {
                      if (a === b) return (l = !0), 0;
                      var d =
                        !a.compareDocumentPosition - !b.compareDocumentPosition;
                      return d
                        ? d
                        : ((d =
                            (a.ownerDocument || a) === (b.ownerDocument || b)
                              ? a.compareDocumentPosition(b)
                              : 1),
                          1 & d ||
                          (!c.sortDetached &&
                            b.compareDocumentPosition(a) === d)
                            ? a === n || (a.ownerDocument === v && t(v, a))
                              ? -1
                              : b === n || (b.ownerDocument === v && t(v, b))
                              ? 1
                              : k
                              ? J(k, a) - J(k, b)
                              : 0
                            : 4 & d
                            ? -1
                            : 1);
                    }
                  : function (a, b) {
                      if (a === b) return (l = !0), 0;
                      var c,
                        d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                      if (!e || !f)
                        return a === n
                          ? -1
                          : b === n
                          ? 1
                          : e
                          ? -1
                          : f
                          ? 1
                          : k
                          ? J(k, a) - J(k, b)
                          : 0;
                      if (e === f) return ka(a, b);
                      c = a;
                      while ((c = c.parentNode)) g.unshift(c);
                      c = b;
                      while ((c = c.parentNode)) h.unshift(c);
                      while (g[d] === h[d]) d++;
                      return d
                        ? ka(g[d], h[d])
                        : g[d] === v
                        ? -1
                        : h[d] === v
                        ? 1
                        : 0;
                    }),
                n)
              : n;
          }),
        (fa.matches = function (a, b) {
          return fa(a, null, null, b);
        }),
        (fa.matchesSelector = function (a, b) {
          if (
            ((a.ownerDocument || a) !== n && m(a),
            (b = b.replace(T, "='$1']")),
            c.matchesSelector &&
              p &&
              !A[b + " "] &&
              (!r || !r.test(b)) &&
              (!q || !q.test(b)))
          )
            try {
              var d = s.call(a, b);
              if (
                d ||
                c.disconnectedMatch ||
                (a.document && 11 !== a.document.nodeType)
              )
                return d;
            } catch (e) {}
          return fa(b, n, null, [a]).length > 0;
        }),
        (fa.contains = function (a, b) {
          return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }),
        (fa.attr = function (a, b) {
          (a.ownerDocument || a) !== n && m(a);
          var e = d.attrHandle[b.toLowerCase()],
            f =
              e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
          return void 0 !== f
            ? f
            : c.attributes || !p
            ? a.getAttribute(b)
            : (f = a.getAttributeNode(b)) && f.specified
            ? f.value
            : null;
        }),
        (fa.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (fa.uniqueSort = function (a) {
          var b,
            d = [],
            e = 0,
            f = 0;
          if (
            ((l = !c.detectDuplicates),
            (k = !c.sortStable && a.slice(0)),
            a.sort(B),
            l)
          ) {
            while ((b = a[f++])) b === a[f] && (e = d.push(f));
            while (e--) a.splice(d[e], 1);
          }
          return (k = null), a;
        }),
        (e = fa.getText =
          function (a) {
            var b,
              c = "",
              d = 0,
              f = a.nodeType;
            if (f) {
              if (1 === f || 9 === f || 11 === f) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
              } else if (3 === f || 4 === f) return a.nodeValue;
            } else while ((b = a[d++])) c += e(b);
            return c;
          }),
        (d = fa.selectors =
          {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0,
              },
              " ": {
                dir: "parentNode",
              },
              "+": {
                dir: "previousSibling",
                first: !0,
              },
              "~": {
                dir: "previousSibling",
              },
            },
            preFilter: {
              ATTR: function (a) {
                return (
                  (a[1] = a[1].replace(ba, ca)),
                  (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                  "~=" === a[2] && (a[3] = " " + a[3] + " "),
                  a.slice(0, 4)
                );
              },
              CHILD: function (a) {
                return (
                  (a[1] = a[1].toLowerCase()),
                  "nth" === a[1].slice(0, 3)
                    ? (a[3] || fa.error(a[0]),
                      (a[4] = +(a[4]
                        ? a[5] + (a[6] || 1)
                        : 2 * ("even" === a[3] || "odd" === a[3]))),
                      (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                    : a[3] && fa.error(a[0]),
                  a
                );
              },
              PSEUDO: function (a) {
                var b,
                  c = !a[6] && a[2];
                return W.CHILD.test(a[0])
                  ? null
                  : (a[3]
                      ? (a[2] = a[4] || a[5] || "")
                      : c &&
                        U.test(c) &&
                        (b = g(c, !0)) &&
                        (b = c.indexOf(")", c.length - b) - c.length) &&
                        ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                    a.slice(0, 3));
              },
            },
            filter: {
              TAG: function (a) {
                var b = a.replace(ba, ca).toLowerCase();
                return "*" === a
                  ? function () {
                      return !0;
                    }
                  : function (a) {
                      return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
              },
              CLASS: function (a) {
                var b = y[a + " "];
                return (
                  b ||
                  ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                    y(a, function (a) {
                      return b.test(
                        ("string" == typeof a.className && a.className) ||
                          ("undefined" != typeof a.getAttribute &&
                            a.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (a, b, c) {
                return function (d) {
                  var e = fa.attr(d, a);
                  return null == e
                    ? "!=" === b
                    : b
                    ? ((e += ""),
                      "=" === b
                        ? e === c
                        : "!=" === b
                        ? e !== c
                        : "^=" === b
                        ? c && 0 === e.indexOf(c)
                        : "*=" === b
                        ? c && e.indexOf(c) > -1
                        : "$=" === b
                        ? c && e.slice(-c.length) === c
                        : "~=" === b
                        ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                        : "|=" === b
                        ? e === c || e.slice(0, c.length + 1) === c + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3),
                  g = "last" !== a.slice(-4),
                  h = "of-type" === b;
                return 1 === d && 0 === e
                  ? function (a) {
                      return !!a.parentNode;
                    }
                  : function (b, c, i) {
                      var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h,
                        t = !1;
                      if (q) {
                        if (f) {
                          while (p) {
                            m = b;
                            while ((m = m[p]))
                              if (
                                h
                                  ? m.nodeName.toLowerCase() === r
                                  : 1 === m.nodeType
                              )
                                return !1;
                            o = p = "only" === a && !o && "nextSibling";
                          }
                          return !0;
                        }
                        if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                          (m = q),
                            (l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (j = k[a] || []),
                            (n = j[0] === w && j[1]),
                            (t = n && j[2]),
                            (m = n && q.childNodes[n]);
                          while (
                            (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                          )
                            if (1 === m.nodeType && ++t && m === b) {
                              k[a] = [w, n, t];
                              break;
                            }
                        } else if (
                          (s &&
                            ((m = b),
                            (l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (j = k[a] || []),
                            (n = j[0] === w && j[1]),
                            (t = n)),
                          t === !1)
                        )
                          while (
                            (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                          )
                            if (
                              (h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType) &&
                              ++t &&
                              (s &&
                                ((l = m[u] || (m[u] = {})),
                                (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                (k[a] = [w, t])),
                              m === b)
                            )
                              break;
                        return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                      }
                    };
              },
              PSEUDO: function (a, b) {
                var c,
                  e =
                    d.pseudos[a] ||
                    d.setFilters[a.toLowerCase()] ||
                    fa.error("unsupported pseudo: " + a);
                return e[u]
                  ? e(b)
                  : e.length > 1
                  ? ((c = [a, a, "", b]),
                    d.setFilters.hasOwnProperty(a.toLowerCase())
                      ? ha(function (a, c) {
                          var d,
                            f = e(a, b),
                            g = f.length;
                          while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                        })
                      : function (a) {
                          return e(a, 0, c);
                        })
                  : e;
              },
            },
            pseudos: {
              not: ha(function (a) {
                var b = [],
                  c = [],
                  d = h(a.replace(Q, "$1"));
                return d[u]
                  ? ha(function (a, b, c, e) {
                      var f,
                        g = d(a, null, e, []),
                        h = a.length;
                      while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    })
                  : function (a, e, f) {
                      return (
                        (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                      );
                    };
              }),
              has: ha(function (a) {
                return function (b) {
                  return fa(a, b).length > 0;
                };
              }),
              contains: ha(function (a) {
                return (
                  (a = a.replace(ba, ca)),
                  function (b) {
                    return (
                      (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    );
                  }
                );
              }),
              lang: ha(function (a) {
                return (
                  V.test(a || "") || fa.error("unsupported lang: " + a),
                  (a = a.replace(ba, ca).toLowerCase()),
                  function (b) {
                    var c;
                    do
                      if (
                        (c = p
                          ? b.lang
                          : b.getAttribute("xml:lang") ||
                            b.getAttribute("lang"))
                      )
                        return (
                          (c = c.toLowerCase()),
                          c === a || 0 === c.indexOf(a + "-")
                        );
                    while ((b = b.parentNode) && 1 === b.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id;
              },
              root: function (a) {
                return a === o;
              },
              focus: function (a) {
                return (
                  a === n.activeElement &&
                  (!n.hasFocus || n.hasFocus()) &&
                  !!(a.type || a.href || ~a.tabIndex)
                );
              },
              enabled: function (a) {
                return a.disabled === !1;
              },
              disabled: function (a) {
                return a.disabled === !0;
              },
              checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return (
                  ("input" === b && !!a.checked) ||
                  ("option" === b && !!a.selected)
                );
              },
              selected: function (a) {
                return (
                  a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                );
              },
              empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                  if (a.nodeType < 6) return !1;
                return !0;
              },
              parent: function (a) {
                return !d.pseudos.empty(a);
              },
              header: function (a) {
                return Y.test(a.nodeName);
              },
              input: function (a) {
                return X.test(a.nodeName);
              },
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b && "button" === a.type) || "button" === b;
              },
              text: function (a) {
                var b;
                return (
                  "input" === a.nodeName.toLowerCase() &&
                  "text" === a.type &&
                  (null == (b = a.getAttribute("type")) ||
                    "text" === b.toLowerCase())
                );
              },
              first: na(function () {
                return [0];
              }),
              last: na(function (a, b) {
                return [b - 1];
              }),
              eq: na(function (a, b, c) {
                return [0 > c ? c + b : c];
              }),
              even: na(function (a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a;
              }),
              odd: na(function (a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a;
              }),
              lt: na(function (a, b, c) {
                for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                return a;
              }),
              gt: na(function (a, b, c) {
                for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                return a;
              }),
            },
          }),
        (d.pseudos.nth = d.pseudos.eq);
      for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      })
        d.pseudos[b] = la(b);
      for (b in {
        submit: !0,
        reset: !0,
      })
        d.pseudos[b] = ma(b);
      function pa() {}
      (pa.prototype = d.filters = d.pseudos),
        (d.setFilters = new pa()),
        (g = fa.tokenize =
          function (a, b) {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            (h = a), (i = []), (j = d.preFilter);
            while (h) {
              (!c || (e = R.exec(h))) &&
                (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                (c = !1),
                (e = S.exec(h)) &&
                  ((c = e.shift()),
                  f.push({
                    value: c,
                    type: e[0].replace(Q, " "),
                  }),
                  (h = h.slice(c.length)));
              for (g in d.filter)
                !(e = W[g].exec(h)) ||
                  (j[g] && !(e = j[g](e))) ||
                  ((c = e.shift()),
                  f.push({
                    value: c,
                    type: g,
                    matches: e,
                  }),
                  (h = h.slice(c.length)));
              if (!c) break;
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
          });
      function qa(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d;
      }
      function ra(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
        return b.first
          ? function (b, c, f) {
              while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
            }
          : function (b, c, g) {
              var h,
                i,
                j,
                k = [w, f];
              if (g) {
                while ((b = b[d]))
                  if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
              } else
                while ((b = b[d]))
                  if (1 === b.nodeType || e) {
                    if (
                      ((j = b[u] || (b[u] = {})),
                      (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                      (h = i[d]) && h[0] === w && h[1] === f)
                    )
                      return (k[2] = h[2]);
                    if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                  }
            };
      }
      function sa(a) {
        return a.length > 1
          ? function (b, c, d) {
              var e = a.length;
              while (e--) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
      function ta(a, b, c) {
        for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
        return c;
      }
      function ua(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g;
      }
      function va(a, b, c, d, e, f) {
        return (
          d && !d[u] && (d = va(d)),
          e && !e[u] && (e = va(e, f)),
          ha(function (f, g, h, i) {
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || ta(b || "*", h.nodeType ? [h] : h, []),
              q = !a || (!f && b) ? p : ua(p, m, a, h, i),
              r = c ? (e || (f ? a : o || d) ? [] : g) : q;
            if ((c && c(q, r, h, i), d)) {
              (j = ua(r, n)), d(j, [], h, i), (k = j.length);
              while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
            }
            if (f) {
              if (e || a) {
                if (e) {
                  (j = []), (k = r.length);
                  while (k--) (l = r[k]) && j.push((q[k] = l));
                  e(null, (r = []), j, i);
                }
                k = r.length;
                while (k--)
                  (l = r[k]) &&
                    (j = e ? J(f, l) : m[k]) > -1 &&
                    (f[j] = !(g[j] = l));
              }
            } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
          })
        );
      }
      function wa(a) {
        for (
          var b,
            c,
            e,
            f = a.length,
            g = d.relative[a[0].type],
            h = g || d.relative[" "],
            i = g ? 1 : 0,
            k = ra(
              function (a) {
                return a === b;
              },
              h,
              !0
            ),
            l = ra(
              function (a) {
                return J(b, a) > -1;
              },
              h,
              !0
            ),
            m = [
              function (a, c, d) {
                var e =
                  (!g && (d || c !== j)) ||
                  ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return (b = null), e;
              },
            ];
          f > i;
          i++
        )
          if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
          else {
            if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
              for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
              return va(
                i > 1 && sa(m),
                i > 1 &&
                  qa(
                    a.slice(0, i - 1).concat({
                      value: " " === a[i - 2].type ? "*" : "",
                    })
                  ).replace(Q, "$1"),
                c,
                e > i && wa(a.slice(i, e)),
                f > e && wa((a = a.slice(e))),
                f > e && qa(a)
              );
            }
            m.push(c);
          }
        return sa(m);
      }
      function xa(a, b) {
        var c = b.length > 0,
          e = a.length > 0,
          f = function (f, g, h, i, k) {
            var l,
              o,
              q,
              r = 0,
              s = "0",
              t = f && [],
              u = [],
              v = j,
              x = f || (e && d.find.TAG("*", k)),
              y = (w += null == v ? 1 : Math.random() || 0.1),
              z = x.length;
            for (
              k && (j = g === n || g || k);
              s !== z && null != (l = x[s]);
              s++
            ) {
              if (e && l) {
                (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
                while ((q = a[o++]))
                  if (q(l, g || n, h)) {
                    i.push(l);
                    break;
                  }
                k && (w = y);
              }
              c && ((l = !q && l) && r--, f && t.push(l));
            }
            if (((r += s), c && s !== r)) {
              o = 0;
              while ((q = b[o++])) q(t, u, g, h);
              if (f) {
                if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                u = ua(u);
              }
              H.apply(i, u),
                k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
            }
            return k && ((w = y), (j = v)), t;
          };
        return c ? ha(f) : f;
      }
      return (
        (h = fa.compile =
          function (a, b) {
            var c,
              d = [],
              e = [],
              f = A[a + " "];
            if (!f) {
              b || (b = g(a)), (c = b.length);
              while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
              (f = A(a, xa(e, d))), (f.selector = a);
            }
            return f;
          }),
        (i = fa.select =
          function (a, b, e, f) {
            var i,
              j,
              k,
              l,
              m,
              n = "function" == typeof a && a,
              o = !f && g((a = n.selector || a));
            if (((e = e || []), 1 === o.length)) {
              if (
                ((j = o[0] = o[0].slice(0)),
                j.length > 2 &&
                  "ID" === (k = j[0]).type &&
                  c.getById &&
                  9 === b.nodeType &&
                  p &&
                  d.relative[j[1].type])
              ) {
                if (
                  ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                  !b)
                )
                  return e;
                n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
              }
              i = W.needsContext.test(a) ? 0 : j.length;
              while (i--) {
                if (((k = j[i]), d.relative[(l = k.type)])) break;
                if (
                  (m = d.find[l]) &&
                  (f = m(
                    k.matches[0].replace(ba, ca),
                    (_.test(j[0].type) && oa(b.parentNode)) || b
                  ))
                ) {
                  if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                    return H.apply(e, f), e;
                  break;
                }
              }
            }
            return (
              (n || h(a, o))(
                f,
                b,
                !p,
                e,
                !b || (_.test(a) && oa(b.parentNode)) || b
              ),
              e
            );
          }),
        (c.sortStable = u.split("").sort(B).join("") === u),
        (c.detectDuplicates = !!l),
        m(),
        (c.sortDetached = ia(function (a) {
          return 1 & a.compareDocumentPosition(n.createElement("div"));
        })),
        ia(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            "#" === a.firstChild.getAttribute("href")
          );
        }) ||
          ja("type|href|height|width", function (a, b, c) {
            return c
              ? void 0
              : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
          }),
        (c.attributes &&
          ia(function (a) {
            return (
              (a.innerHTML = "<input/>"),
              a.firstChild.setAttribute("value", ""),
              "" === a.firstChild.getAttribute("value")
            );
          })) ||
          ja("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase()
              ? void 0
              : a.defaultValue;
          }),
        ia(function (a) {
          return null == a.getAttribute("disabled");
        }) ||
          ja(K, function (a, b, c) {
            var d;
            return c
              ? void 0
              : a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
          }),
        fa
      );
    })(a);
    (n.find = t),
      (n.expr = t.selectors),
      (n.expr[":"] = n.expr.pseudos),
      (n.uniqueSort = n.unique = t.uniqueSort),
      (n.text = t.getText),
      (n.isXMLDoc = t.isXML),
      (n.contains = t.contains);
    var u = function (a, b, c) {
        var d = [],
          e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
          if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a);
          }
        return d;
      },
      v = function (a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
      if (n.isFunction(b))
        return n.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        });
      if (b.nodeType)
        return n.grep(a, function (a) {
          return (a === b) !== c;
        });
      if ("string" == typeof b) {
        if (y.test(b)) return n.filter(b, a, c);
        b = n.filter(b, a);
      }
      return n.grep(a, function (a) {
        return n.inArray(a, b) > -1 !== c;
      });
    }
    (n.filter = function (a, b, c) {
      var d = b[0];
      return (
        c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType
          ? n.find.matchesSelector(d, a)
            ? [d]
            : []
          : n.find.matches(
              a,
              n.grep(b, function (a) {
                return 1 === a.nodeType;
              })
            )
      );
    }),
      n.fn.extend({
        find: function (a) {
          var b,
            c = [],
            d = this,
            e = d.length;
          if ("string" != typeof a)
            return this.pushStack(
              n(a).filter(function () {
                for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
              })
            );
          for (b = 0; e > b; b++) n.find(a, d[b], c);
          return (
            (c = this.pushStack(e > 1 ? n.unique(c) : c)),
            (c.selector = this.selector ? this.selector + " " + a : a),
            c
          );
        },
        filter: function (a) {
          return this.pushStack(z(this, a || [], !1));
        },
        not: function (a) {
          return this.pushStack(z(this, a || [], !0));
        },
        is: function (a) {
          return !!z(
            this,
            "string" == typeof a && w.test(a) ? n(a) : a || [],
            !1
          ).length;
        },
      });
    var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = (n.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (((c = c || A), "string" == typeof a)) {
          if (
            ((e =
              "<" === a.charAt(0) &&
              ">" === a.charAt(a.length - 1) &&
              a.length >= 3
                ? [null, a, null]
                : B.exec(a)),
            !e || (!e[1] && b))
          )
            return !b || b.jquery
              ? (b || c).find(a)
              : this.constructor(b).find(a);
          if (e[1]) {
            if (
              ((b = b instanceof n ? b[0] : b),
              n.merge(
                this,
                n.parseHTML(
                  e[1],
                  b && b.nodeType ? b.ownerDocument || b : d,
                  !0
                )
              ),
              x.test(e[1]) && n.isPlainObject(b))
            )
              for (e in b)
                n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
            return this;
          }
          if (((f = d.getElementById(e[2])), f && f.parentNode)) {
            if (f.id !== e[2]) return A.find(a);
            (this.length = 1), (this[0] = f);
          }
          return (this.context = d), (this.selector = a), this;
        }
        return a.nodeType
          ? ((this.context = this[0] = a), (this.length = 1), this)
          : n.isFunction(a)
          ? "undefined" != typeof c.ready
            ? c.ready(a)
            : a(n)
          : (void 0 !== a.selector &&
              ((this.selector = a.selector), (this.context = a.context)),
            n.makeArray(a, this));
      });
    (C.prototype = n.fn), (A = n(d));
    var D = /^(?:parents|prev(?:Until|All))/,
      E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0,
      };
    n.fn.extend({
      has: function (a) {
        var b,
          c = n(a, this),
          d = c.length;
        return this.filter(function () {
          for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? n.inArray(this[0], n(a))
            : n.inArray(a.jquery ? a[0] : a, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
    function F(a, b) {
      do a = a[b];
      while (a && 1 !== a.nodeType);
      return a;
    }
    n.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return u(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return u(a, "parentNode", c);
        },
        next: function (a) {
          return F(a, "nextSibling");
        },
        prev: function (a) {
          return F(a, "previousSibling");
        },
        nextAll: function (a) {
          return u(a, "nextSibling");
        },
        prevAll: function (a) {
          return u(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return u(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return u(a, "previousSibling", c);
        },
        siblings: function (a) {
          return v((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return v(a.firstChild);
        },
        contents: function (a) {
          return n.nodeName(a, "iframe")
            ? a.contentDocument || a.contentWindow.document
            : n.merge([], a.childNodes);
        },
      },
      function (a, b) {
        n.fn[a] = function (c, d) {
          var e = n.map(this, b, c);
          return (
            "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 &&
              (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
            this.pushStack(e)
          );
        };
      }
    );
    var G = /\S+/g;
    function H(a) {
      var b = {};
      return (
        n.each(a.match(G) || [], function (a, c) {
          b[c] = !0;
        }),
        b
      );
    }
    (n.Callbacks = function (a) {
      a = "string" == typeof a ? H(a) : n.extend({}, a);
      var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function () {
          for (e = a.once, d = b = !0; g.length; h = -1) {
            c = g.shift();
            while (++h < f.length)
              f[h].apply(c[0], c[1]) === !1 &&
                a.stopOnFalse &&
                ((h = f.length), (c = !1));
          }
          a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
        },
        j = {
          add: function () {
            return (
              f &&
                (c && !b && ((h = f.length - 1), g.push(c)),
                (function d(b) {
                  n.each(b, function (b, c) {
                    n.isFunction(c)
                      ? (a.unique && j.has(c)) || f.push(c)
                      : c && c.length && "string" !== n.type(c) && d(c);
                  });
                })(arguments),
                c && !b && i()),
              this
            );
          },
          remove: function () {
            return (
              n.each(arguments, function (a, b) {
                var c;
                while ((c = n.inArray(b, f, c)) > -1)
                  f.splice(c, 1), h >= c && h--;
              }),
              this
            );
          },
          has: function (a) {
            return a ? n.inArray(a, f) > -1 : f.length > 0;
          },
          empty: function () {
            return f && (f = []), this;
          },
          disable: function () {
            return (e = g = []), (f = c = ""), this;
          },
          disabled: function () {
            return !f;
          },
          lock: function () {
            return (e = !0), c || j.disable(), this;
          },
          locked: function () {
            return !!e;
          },
          fireWith: function (a, c) {
            return (
              e ||
                ((c = c || []),
                (c = [a, c.slice ? c.slice() : c]),
                g.push(c),
                b || i()),
              this
            );
          },
          fire: function () {
            return j.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!d;
          },
        };
      return j;
    }),
      n.extend({
        Deferred: function (a) {
          var b = [
              ["resolve", "done", n.Callbacks("once memory"), "resolved"],
              ["reject", "fail", n.Callbacks("once memory"), "rejected"],
              ["notify", "progress", n.Callbacks("memory")],
            ],
            c = "pending",
            d = {
              state: function () {
                return c;
              },
              always: function () {
                return e.done(arguments).fail(arguments), this;
              },
              then: function () {
                var a = arguments;
                return n
                  .Deferred(function (c) {
                    n.each(b, function (b, f) {
                      var g = n.isFunction(a[b]) && a[b];
                      e[f[1]](function () {
                        var a = g && g.apply(this, arguments);
                        a && n.isFunction(a.promise)
                          ? a
                              .promise()
                              .progress(c.notify)
                              .done(c.resolve)
                              .fail(c.reject)
                          : c[f[0] + "With"](
                              this === d ? c.promise() : this,
                              g ? [a] : arguments
                            );
                      });
                    }),
                      (a = null);
                  })
                  .promise();
              },
              promise: function (a) {
                return null != a ? n.extend(a, d) : d;
              },
            },
            e = {};
          return (
            (d.pipe = d.then),
            n.each(b, function (a, f) {
              var g = f[2],
                h = f[3];
              (d[f[1]] = g.add),
                h &&
                  g.add(
                    function () {
                      c = h;
                    },
                    b[1 ^ a][2].disable,
                    b[2][2].lock
                  ),
                (e[f[0]] = function () {
                  return (
                    e[f[0] + "With"](this === e ? d : this, arguments), this
                  );
                }),
                (e[f[0] + "With"] = g.fireWith);
            }),
            d.promise(e),
            a && a.call(e, e),
            e
          );
        },
        when: function (a) {
          var b = 0,
            c = e.call(arguments),
            d = c.length,
            f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
            g = 1 === f ? a : n.Deferred(),
            h = function (a, b, c) {
              return function (d) {
                (b[a] = this),
                  (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                  c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
              };
            },
            i,
            j,
            k;
          if (d > 1)
            for (
              i = new Array(d), j = new Array(d), k = new Array(d);
              d > b;
              b++
            )
              c[b] && n.isFunction(c[b].promise)
                ? c[b]
                    .promise()
                    .progress(h(b, j, i))
                    .done(h(b, k, c))
                    .fail(g.reject)
                : --f;
          return f || g.resolveWith(k, c), g.promise();
        },
      });
    var I;
    (n.fn.ready = function (a) {
      return n.ready.promise().done(a), this;
    }),
      n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
          a ? n.readyWait++ : n.ready(!0);
        },
        ready: function (a) {
          (a === !0 ? --n.readyWait : n.isReady) ||
            ((n.isReady = !0),
            (a !== !0 && --n.readyWait > 0) ||
              (I.resolveWith(d, [n]),
              n.fn.triggerHandler &&
                (n(d).triggerHandler("ready"), n(d).off("ready"))));
        },
      });
    function J() {
      d.addEventListener
        ? (d.removeEventListener("DOMContentLoaded", K),
          a.removeEventListener("load", K))
        : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
    }
    function K() {
      (d.addEventListener ||
        "load" === a.event.type ||
        "complete" === d.readyState) &&
        (J(), n.ready());
    }
    (n.ready.promise = function (b) {
      if (!I)
        if (((I = n.Deferred()), "complete" === d.readyState))
          a.setTimeout(n.ready);
        else if (d.addEventListener)
          d.addEventListener("DOMContentLoaded", K),
            a.addEventListener("load", K);
        else {
          d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
          var c = !1;
          try {
            c = null == a.frameElement && d.documentElement;
          } catch (e) {}
          c &&
            c.doScroll &&
            !(function f() {
              if (!n.isReady) {
                try {
                  c.doScroll("left");
                } catch (b) {
                  return a.setTimeout(f, 50);
                }
                J(), n.ready();
              }
            })();
        }
      return I.promise(b);
    }),
      n.ready.promise();
    var L;
    for (L in n(l)) break;
    (l.ownFirst = "0" === L),
      (l.inlineBlockNeedsLayout = !1),
      n(function () {
        var a, b, c, e;
        (c = d.getElementsByTagName("body")[0]),
          c &&
            c.style &&
            ((b = d.createElement("div")),
            (e = d.createElement("div")),
            (e.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(e).appendChild(b),
            "undefined" != typeof b.style.zoom &&
              ((b.style.cssText =
                "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
              a && (c.style.zoom = 1)),
            c.removeChild(e));
      }),
      (function () {
        var a = d.createElement("div");
        l.deleteExpando = !0;
        try {
          delete a.test;
        } catch (b) {
          l.deleteExpando = !1;
        }
        a = null;
      })();
    var M = function (a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()],
          c = +a.nodeType || 1;
        return 1 !== c && 9 !== c
          ? !1
          : !b || (b !== !0 && a.getAttribute("classid") === b);
      },
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;
    function P(a, b, c) {
      if (void 0 === c && 1 === a.nodeType) {
        var d = "data-" + b.replace(O, "-$1").toLowerCase();
        if (((c = a.getAttribute(d)), "string" == typeof c)) {
          try {
            c =
              "true" === c
                ? !0
                : "false" === c
                ? !1
                : "null" === c
                ? null
                : +c + "" === c
                ? +c
                : N.test(c)
                ? n.parseJSON(c)
                : c;
          } catch (e) {}
          n.data(a, b, c);
        } else c = void 0;
      }
      return c;
    }
    function Q(a) {
      var b;
      for (b in a)
        if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
          return !1;
      return !0;
    }
    function R(a, b, d, e) {
      if (M(a)) {
        var f,
          g,
          h = n.expando,
          i = a.nodeType,
          j = i ? n.cache : a,
          k = i ? a[h] : a[h] && h;
        if (
          (k && j[k] && (e || j[k].data)) ||
          void 0 !== d ||
          "string" != typeof b
        )
          return (
            k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
            j[k] ||
              (j[k] = i
                ? {}
                : {
                    toJSON: n.noop,
                  }),
            ("object" == typeof b || "function" == typeof b) &&
              (e
                ? (j[k] = n.extend(j[k], b))
                : (j[k].data = n.extend(j[k].data, b))),
            (g = j[k]),
            e || (g.data || (g.data = {}), (g = g.data)),
            void 0 !== d && (g[n.camelCase(b)] = d),
            "string" == typeof b
              ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
              : (f = g),
            f
          );
      }
    }
    function S(a, b, c) {
      if (M(a)) {
        var d,
          e,
          f = a.nodeType,
          g = f ? n.cache : a,
          h = f ? a[n.expando] : n.expando;
        if (g[h]) {
          if (b && (d = c ? g[h] : g[h].data)) {
            n.isArray(b)
              ? (b = b.concat(n.map(b, n.camelCase)))
              : b in d
              ? (b = [b])
              : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
              (e = b.length);
            while (e--) delete d[b[e]];
            if (c ? !Q(d) : !n.isEmptyObject(d)) return;
          }
          (c || (delete g[h].data, Q(g[h]))) &&
            (f
              ? n.cleanData([a], !0)
              : l.deleteExpando || g != g.window
              ? delete g[h]
              : (g[h] = void 0));
        }
      }
    }
    n.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (a) {
        return (
          (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]), !!a && !Q(a)
        );
      },
      data: function (a, b, c) {
        return R(a, b, c);
      },
      removeData: function (a, b) {
        return S(a, b);
      },
      _data: function (a, b, c) {
        return R(a, b, c, !0);
      },
      _removeData: function (a, b) {
        return S(a, b, !0);
      },
    }),
      n.fn.extend({
        data: function (a, b) {
          var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;
          if (void 0 === a) {
            if (
              this.length &&
              ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
            ) {
              c = g.length;
              while (c--)
                g[c] &&
                  ((d = g[c].name),
                  0 === d.indexOf("data-") &&
                    ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
              n._data(f, "parsedAttrs", !0);
            }
            return e;
          }
          return "object" == typeof a
            ? this.each(function () {
                n.data(this, a);
              })
            : arguments.length > 1
            ? this.each(function () {
                n.data(this, a, b);
              })
            : f
            ? P(f, a, n.data(f, a))
            : void 0;
        },
        removeData: function (a) {
          return this.each(function () {
            n.removeData(this, a);
          });
        },
      }),
      n.extend({
        queue: function (a, b, c) {
          var d;
          return a
            ? ((b = (b || "fx") + "queue"),
              (d = n._data(a, b)),
              c &&
                (!d || n.isArray(c)
                  ? (d = n._data(a, b, n.makeArray(c)))
                  : d.push(c)),
              d || [])
            : void 0;
        },
        dequeue: function (a, b) {
          b = b || "fx";
          var c = n.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = n._queueHooks(a, b),
            g = function () {
              n.dequeue(a, b);
            };
          "inprogress" === e && ((e = c.shift()), d--),
            e &&
              ("fx" === b && c.unshift("inprogress"),
              delete f.stop,
              e.call(a, g, f)),
            !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
          var c = b + "queueHooks";
          return (
            n._data(a, c) ||
            n._data(a, c, {
              empty: n.Callbacks("once memory").add(function () {
                n._removeData(a, b + "queue"), n._removeData(a, c);
              }),
            })
          );
        },
      }),
      n.fn.extend({
        queue: function (a, b) {
          var c = 2;
          return (
            "string" != typeof a && ((b = a), (a = "fx"), c--),
            arguments.length < c
              ? n.queue(this[0], a)
              : void 0 === b
              ? this
              : this.each(function () {
                  var c = n.queue(this, a, b);
                  n._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                })
          );
        },
        dequeue: function (a) {
          return this.each(function () {
            n.dequeue(this, a);
          });
        },
        clearQueue: function (a) {
          return this.queue(a || "fx", []);
        },
        promise: function (a, b) {
          var c,
            d = 1,
            e = n.Deferred(),
            f = this,
            g = this.length,
            h = function () {
              --d || e.resolveWith(f, [f]);
            };
          "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
          while (g--)
            (c = n._data(f[g], a + "queueHooks")),
              c && c.empty && (d++, c.empty.add(h));
          return h(), e.promise(b);
        },
      }),
      (function () {
        var a;
        l.shrinkWrapBlocks = function () {
          if (null != a) return a;
          a = !1;
          var b, c, e;
          return (
            (c = d.getElementsByTagName("body")[0]),
            c && c.style
              ? ((b = d.createElement("div")),
                (e = d.createElement("div")),
                (e.style.cssText =
                  "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                c.appendChild(e).appendChild(b),
                "undefined" != typeof b.style.zoom &&
                  ((b.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                  (b.appendChild(d.createElement("div")).style.width = "5px"),
                  (a = 3 !== b.offsetWidth)),
                c.removeChild(e),
                a)
              : void 0
          );
        };
      })();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
      V = ["Top", "Right", "Bottom", "Left"],
      W = function (a, b) {
        return (
          (a = b || a),
          "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        );
      };
    function X(a, b, c, d) {
      var e,
        f = 1,
        g = 20,
        h = d
          ? function () {
              return d.cur();
            }
          : function () {
              return n.css(a, b, "");
            },
        i = h(),
        j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || ("px" !== j && +i)) && U.exec(n.css(a, b));
      if (k && k[3] !== j) {
        (j = j || k[3]), (c = c || []), (k = +i || 1);
        do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
        while (f !== (f = h() / i) && 1 !== f && --g);
      }
      return (
        c &&
          ((k = +k || +i || 0),
          (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
          d && ((d.unit = j), (d.start = k), (d.end = e))),
        e
      );
    }
    var Y = function (a, b, c, d, e, f, g) {
        var h = 0,
          i = a.length,
          j = null == c;
        if ("object" === n.type(c)) {
          e = !0;
          for (h in c) Y(a, b, h, c[h], !0, f, g);
        } else if (
          void 0 !== d &&
          ((e = !0),
          n.isFunction(d) || (g = !0),
          j &&
            (g
              ? (b.call(a, d), (b = null))
              : ((j = b),
                (b = function (a, b, c) {
                  return j.call(n(a), c);
                }))),
          b)
        )
          for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
      },
      Z = /^(?:checkbox|radio)$/i,
      $ = /<([\w:-]+)/,
      _ = /^$|\/(?:java|ecma)script/i,
      aa = /^\s+/,
      ba =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
      var b = ba.split("|"),
        c = a.createDocumentFragment();
      if (c.createElement) while (b.length) c.createElement(b.pop());
      return c;
    }
    !(function () {
      var a = d.createElement("div"),
        b = d.createDocumentFragment(),
        c = d.createElement("input");
      (a.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (l.leadingWhitespace = 3 === a.firstChild.nodeType),
        (l.tbody = !a.getElementsByTagName("tbody").length),
        (l.htmlSerialize = !!a.getElementsByTagName("link").length),
        (l.html5Clone =
          "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML),
        (c.type = "checkbox"),
        (c.checked = !0),
        b.appendChild(c),
        (l.appendChecked = c.checked),
        (a.innerHTML = "<textarea>x</textarea>"),
        (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
        b.appendChild(a),
        (c = d.createElement("input")),
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        a.appendChild(c),
        (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (l.noCloneEvent = !!a.addEventListener),
        (a[n.expando] = 1),
        (l.attributes = !a.getAttribute(n.expando));
    })();
    var da = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    (da.optgroup = da.option),
      (da.tbody = da.tfoot = da.colgroup = da.caption = da.thead),
      (da.th = da.td);
    function ea(a, b) {
      var c,
        d,
        e = 0,
        f =
          "undefined" != typeof a.getElementsByTagName
            ? a.getElementsByTagName(b || "*")
            : "undefined" != typeof a.querySelectorAll
            ? a.querySelectorAll(b || "*")
            : void 0;
      if (!f)
        for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
          !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
      return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
    }
    function fa(a, b) {
      for (var c, d = 0; null != (c = a[d]); d++)
        n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
    var ga = /<|&#?\w+;/,
      ha = /<tbody/i;
    function ia(a) {
      Z.test(a.type) && (a.defaultChecked = a.checked);
    }
    function ja(a, b, c, d, e) {
      for (
        var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
        o > r;
        r++
      )
        if (((g = a[r]), g || 0 === g))
          if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
          else if (ga.test(g)) {
            (i = i || p.appendChild(b.createElement("div"))),
              (j = ($.exec(g) || ["", ""])[1].toLowerCase()),
              (m = da[j] || da._default),
              (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
              (f = m[0]);
            while (f--) i = i.lastChild;
            if (
              (!l.leadingWhitespace &&
                aa.test(g) &&
                q.push(b.createTextNode(aa.exec(g)[0])),
              !l.tbody)
            ) {
              (g =
                "table" !== j || ha.test(g)
                  ? "<table>" !== m[1] || ha.test(g)
                    ? 0
                    : i
                  : i.firstChild),
                (f = g && g.childNodes.length);
              while (f--)
                n.nodeName((k = g.childNodes[f]), "tbody") &&
                  !k.childNodes.length &&
                  g.removeChild(k);
            }
            n.merge(q, i.childNodes), (i.textContent = "");
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild;
          } else q.push(b.createTextNode(g));
      i && p.removeChild(i),
        l.appendChecked || n.grep(ea(q, "input"), ia),
        (r = 0);
      while ((g = q[r++]))
        if (d && n.inArray(g, d) > -1) e && e.push(g);
        else if (
          ((h = n.contains(g.ownerDocument, g)),
          (i = ea(p.appendChild(g), "script")),
          h && fa(i),
          c)
        ) {
          f = 0;
          while ((g = i[f++])) _.test(g.type || "") && c.push(g);
        }
      return (i = null), p;
    }
    !(function () {
      var b,
        c,
        e = d.createElement("div");
      for (b in {
        submit: !0,
        change: !0,
        focusin: !0,
      })
        (c = "on" + b),
          (l[b] = c in a) ||
            (e.setAttribute(c, "t"), (l[b] = e.attributes[c].expando === !1));
      e = null;
    })();
    var ka = /^(?:input|select|textarea)$/i,
      la = /^key/,
      ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      na = /^(?:focusinfocus|focusoutblur)$/,
      oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
      return !0;
    }
    function qa() {
      return !1;
    }
    function ra() {
      try {
        return d.activeElement;
      } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
      var g, h;
      if ("object" == typeof b) {
        "string" != typeof c && ((d = d || c), (c = void 0));
        for (h in b) sa(a, h, c, d, b[h], f);
        return a;
      }
      if (
        (null == d && null == e
          ? ((e = c), (d = c = void 0))
          : null == e &&
            ("string" == typeof c
              ? ((e = d), (d = void 0))
              : ((e = d), (d = c), (c = void 0))),
        e === !1)
      )
        e = qa;
      else if (!e) return a;
      return (
        1 === f &&
          ((g = e),
          (e = function (a) {
            return n().off(a), g.apply(this, arguments);
          }),
          (e.guid = g.guid || (g.guid = n.guid++))),
        a.each(function () {
          n.event.add(this, b, e, d, c);
        })
      );
    }
    (n.event = {
      global: {},
      add: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n._data(a);
        if (r) {
          c.handler && ((i = c), (c = i.handler), (e = i.selector)),
            c.guid || (c.guid = n.guid++),
            (g = r.events) || (g = r.events = {}),
            (k = r.handle) ||
              ((k = r.handle =
                function (a) {
                  return "undefined" == typeof n ||
                    (a && n.event.triggered === a.type)
                    ? void 0
                    : n.event.dispatch.apply(k.elem, arguments);
                }),
              (k.elem = a)),
            (b = (b || "").match(G) || [""]),
            (h = b.length);
          while (h--)
            (f = oa.exec(b[h]) || []),
              (o = q = f[1]),
              (p = (f[2] || "").split(".").sort()),
              o &&
                ((j = n.event.special[o] || {}),
                (o = (e ? j.delegateType : j.bindType) || o),
                (j = n.event.special[o] || {}),
                (l = n.extend(
                  {
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join("."),
                  },
                  i
                )),
                (m = g[o]) ||
                  ((m = g[o] = []),
                  (m.delegateCount = 0),
                  (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                    (a.addEventListener
                      ? a.addEventListener(o, k, !1)
                      : a.attachEvent && a.attachEvent("on" + o, k))),
                j.add &&
                  (j.add.call(a, l),
                  l.handler.guid || (l.handler.guid = c.guid)),
                e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                (n.event.global[o] = !0));
          a = null;
        }
      },
      remove: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n.hasData(a) && n._data(a);
        if (r && (k = r.events)) {
          (b = (b || "").match(G) || [""]), (j = b.length);
          while (j--)
            if (
              ((h = oa.exec(b[j]) || []),
              (o = q = h[1]),
              (p = (h[2] || "").split(".").sort()),
              o)
            ) {
              (l = n.event.special[o] || {}),
                (o = (d ? l.delegateType : l.bindType) || o),
                (m = k[o] || []),
                (h =
                  h[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                (i = f = m.length);
              while (f--)
                (g = m[f]),
                  (!e && q !== g.origType) ||
                    (c && c.guid !== g.guid) ||
                    (h && !h.test(g.namespace)) ||
                    (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                    (m.splice(f, 1),
                    g.selector && m.delegateCount--,
                    l.remove && l.remove.call(a, g));
              i &&
                !m.length &&
                ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                  n.removeEvent(a, o, r.handle),
                delete k[o]);
            } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
          n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
        }
      },
      trigger: function (b, c, e, f) {
        var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];
        if (
          ((i = m = e = e || d),
          3 !== e.nodeType &&
            8 !== e.nodeType &&
            !na.test(q + n.event.triggered) &&
            (q.indexOf(".") > -1 &&
              ((r = q.split(".")), (q = r.shift()), r.sort()),
            (h = q.indexOf(":") < 0 && "on" + q),
            (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
            (b.isTrigger = f ? 2 : 3),
            (b.namespace = r.join(".")),
            (b.rnamespace = b.namespace
              ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (b.result = void 0),
            b.target || (b.target = e),
            (c = null == c ? [b] : n.makeArray(c, [b])),
            (l = n.event.special[q] || {}),
            f || !l.trigger || l.trigger.apply(e, c) !== !1))
        ) {
          if (!f && !l.noBubble && !n.isWindow(e)) {
            for (
              j = l.delegateType || q, na.test(j + q) || (i = i.parentNode);
              i;
              i = i.parentNode
            )
              p.push(i), (m = i);
            m === (e.ownerDocument || d) &&
              p.push(m.defaultView || m.parentWindow || a);
          }
          o = 0;
          while ((i = p[o++]) && !b.isPropagationStopped())
            (b.type = o > 1 ? j : l.bindType || q),
              (g =
                (n._data(i, "events") || {})[b.type] && n._data(i, "handle")),
              g && g.apply(i, c),
              (g = h && i[h]),
              g &&
                g.apply &&
                M(i) &&
                ((b.result = g.apply(i, c)),
                b.result === !1 && b.preventDefault());
          if (
            ((b.type = q),
            !f &&
              !b.isDefaultPrevented() &&
              (!l._default || l._default.apply(p.pop(), c) === !1) &&
              M(e) &&
              h &&
              e[q] &&
              !n.isWindow(e))
          ) {
            (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
            try {
              e[q]();
            } catch (s) {}
            (n.event.triggered = void 0), m && (e[h] = m);
          }
          return b.result;
        }
      },
      dispatch: function (a) {
        a = n.event.fix(a);
        var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (n._data(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};
        if (
          ((i[0] = a),
          (a.delegateTarget = this),
          !k.preDispatch || k.preDispatch.call(this, a) !== !1)
        ) {
          (h = n.event.handlers.call(this, a, j)), (b = 0);
          while ((f = h[b++]) && !a.isPropagationStopped()) {
            (a.currentTarget = f.elem), (c = 0);
            while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
              (!a.rnamespace || a.rnamespace.test(g.namespace)) &&
                ((a.handleObj = g),
                (a.data = g.data),
                (d = (
                  (n.event.special[g.origType] || {}).handle || g.handler
                ).apply(f.elem, i)),
                void 0 !== d &&
                  (a.result = d) === !1 &&
                  (a.preventDefault(), a.stopPropagation()));
          }
          return k.postDispatch && k.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (a, b) {
        var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
        if (
          h &&
          i.nodeType &&
          ("click" !== a.type || isNaN(a.button) || a.button < 1)
        )
          for (; i != this; i = i.parentNode || this)
            if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
              for (d = [], c = 0; h > c; c++)
                (f = b[c]),
                  (e = f.selector + " "),
                  void 0 === d[e] &&
                    (d[e] = f.needsContext
                      ? n(e, this).index(i) > -1
                      : n.find(e, this, null, [i]).length),
                  d[e] && d.push(f);
              d.length &&
                g.push({
                  elem: i,
                  handlers: d,
                });
            }
        return (
          h < b.length &&
            g.push({
              elem: this,
              handlers: b.slice(h),
            }),
          g
        );
      },
      fix: function (a) {
        if (a[n.expando]) return a;
        var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];
        h ||
          (this.fixHooks[f] = h =
            ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
          (e = h.props ? this.props.concat(h.props) : this.props),
          (a = new n.Event(g)),
          (b = e.length);
        while (b--) (c = e[b]), (a[c] = g[c]);
        return (
          a.target || (a.target = g.srcElement || d),
          3 === a.target.nodeType && (a.target = a.target.parentNode),
          (a.metaKey = !!a.metaKey),
          h.filter ? h.filter(a, g) : a
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (a, b) {
          return (
            null == a.which &&
              (a.which = null != b.charCode ? b.charCode : b.keyCode),
            a
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (a, b) {
          var c,
            e,
            f,
            g = b.button,
            h = b.fromElement;
          return (
            null == a.pageX &&
              null != b.clientX &&
              ((e = a.target.ownerDocument || d),
              (f = e.documentElement),
              (c = e.body),
              (a.pageX =
                b.clientX +
                ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
                ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
              (a.pageY =
                b.clientY +
                ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
                ((f && f.clientTop) || (c && c.clientTop) || 0))),
            !a.relatedTarget &&
              h &&
              (a.relatedTarget = h === a.target ? b.toElement : h),
            a.which ||
              void 0 === g ||
              (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
            a
          );
        },
      },
      special: {
        load: {
          noBubble: !0,
        },
        focus: {
          trigger: function () {
            if (this !== ra() && this.focus)
              try {
                return this.focus(), !1;
              } catch (a) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === ra() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return n.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (a) {
            return n.nodeName(a.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (a) {
            void 0 !== a.result &&
              a.originalEvent &&
              (a.originalEvent.returnValue = a.result);
          },
        },
      },
      simulate: function (a, b, c) {
        var d = n.extend(new n.Event(), c, {
          type: a,
          isSimulated: !0,
        });
        n.event.trigger(d, null, b),
          d.isDefaultPrevented() && c.preventDefault();
      },
    }),
      (n.removeEvent = d.removeEventListener
        ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c);
          }
        : function (a, b, c) {
            var d = "on" + b;
            a.detachEvent &&
              ("undefined" == typeof a[d] && (a[d] = null),
              a.detachEvent(d, c));
          }),
      (n.Event = function (a, b) {
        return this instanceof n.Event
          ? (a && a.type
              ? ((this.originalEvent = a),
                (this.type = a.type),
                (this.isDefaultPrevented =
                  a.defaultPrevented ||
                  (void 0 === a.defaultPrevented && a.returnValue === !1)
                    ? pa
                    : qa))
              : (this.type = a),
            b && n.extend(this, b),
            (this.timeStamp = (a && a.timeStamp) || n.now()),
            void (this[n.expando] = !0))
          : new n.Event(a, b);
      }),
      (n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function () {
          var a = this.originalEvent;
          (this.isDefaultPrevented = pa),
            a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
        },
        stopPropagation: function () {
          var a = this.originalEvent;
          (this.isPropagationStopped = pa),
            a &&
              !this.isSimulated &&
              (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          var a = this.originalEvent;
          (this.isImmediatePropagationStopped = pa),
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      n.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (a, b) {
          n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
              var c,
                d = this,
                e = a.relatedTarget,
                f = a.handleObj;
              return (
                (!e || (e !== d && !n.contains(d, e))) &&
                  ((a.type = f.origType),
                  (c = f.handler.apply(this, arguments)),
                  (a.type = b)),
                c
              );
            },
          };
        }
      ),
      l.submit ||
        (n.event.special.submit = {
          setup: function () {
            return n.nodeName(this, "form")
              ? !1
              : void n.event.add(
                  this,
                  "click._submit keypress._submit",
                  function (a) {
                    var b = a.target,
                      c =
                        n.nodeName(b, "input") || n.nodeName(b, "button")
                          ? n.prop(b, "form")
                          : void 0;
                    c &&
                      !n._data(c, "submit") &&
                      (n.event.add(c, "submit._submit", function (a) {
                        a._submitBubble = !0;
                      }),
                      n._data(c, "submit", !0));
                  }
                );
          },
          postDispatch: function (a) {
            a._submitBubble &&
              (delete a._submitBubble,
              this.parentNode &&
                !a.isTrigger &&
                n.event.simulate("submit", this.parentNode, a));
          },
          teardown: function () {
            return n.nodeName(this, "form")
              ? !1
              : void n.event.remove(this, "._submit");
          },
        }),
      l.change ||
        (n.event.special.change = {
          setup: function () {
            return ka.test(this.nodeName)
              ? (("checkbox" === this.type || "radio" === this.type) &&
                  (n.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName &&
                      (this._justChanged = !0);
                  }),
                  n.event.add(this, "click._change", function (a) {
                    this._justChanged &&
                      !a.isTrigger &&
                      (this._justChanged = !1),
                      n.event.simulate("change", this, a);
                  })),
                !1)
              : void n.event.add(this, "beforeactivate._change", function (a) {
                  var b = a.target;
                  ka.test(b.nodeName) &&
                    !n._data(b, "change") &&
                    (n.event.add(b, "change._change", function (a) {
                      !this.parentNode ||
                        a.isSimulated ||
                        a.isTrigger ||
                        n.event.simulate("change", this.parentNode, a);
                    }),
                    n._data(b, "change", !0));
                });
          },
          handle: function (a) {
            var b = a.target;
            return this !== b ||
              a.isSimulated ||
              a.isTrigger ||
              ("radio" !== b.type && "checkbox" !== b.type)
              ? a.handleObj.handler.apply(this, arguments)
              : void 0;
          },
          teardown: function () {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName);
          },
        }),
      l.focusin ||
        n.each(
          {
            focus: "focusin",
            blur: "focusout",
          },
          function (a, b) {
            var c = function (a) {
              n.event.simulate(b, a.target, n.event.fix(a));
            };
            n.event.special[b] = {
              setup: function () {
                var d = this.ownerDocument || this,
                  e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
              },
              teardown: function () {
                var d = this.ownerDocument || this,
                  e = n._data(d, b) - 1;
                e
                  ? n._data(d, b, e)
                  : (d.removeEventListener(a, c, !0), n._removeData(d, b));
              },
            };
          }
        ),
      n.fn.extend({
        on: function (a, b, c, d) {
          return sa(this, a, b, c, d);
        },
        one: function (a, b, c, d) {
          return sa(this, a, b, c, d, 1);
        },
        off: function (a, b, c) {
          var d, e;
          if (a && a.preventDefault && a.handleObj)
            return (
              (d = a.handleObj),
              n(a.delegateTarget).off(
                d.namespace ? d.origType + "." + d.namespace : d.origType,
                d.selector,
                d.handler
              ),
              this
            );
          if ("object" == typeof a) {
            for (e in a) this.off(e, b, a[e]);
            return this;
          }
          return (
            (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
            c === !1 && (c = qa),
            this.each(function () {
              n.event.remove(this, a, c, b);
            })
          );
        },
        trigger: function (a, b) {
          return this.each(function () {
            n.event.trigger(a, b, this);
          });
        },
        triggerHandler: function (a, b) {
          var c = this[0];
          return c ? n.event.trigger(a, b, c, !0) : void 0;
        },
      });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
      ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
      va =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      wa = /<script|<style|<link/i,
      xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ya = /^true\/(.*)/,
      za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Aa = ca(d),
      Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
      return n.nodeName(a, "table") &&
        n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
        ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
        : a;
    }
    function Da(a) {
      return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
    }
    function Ea(a) {
      var b = ya.exec(a.type);
      return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function Fa(a, b) {
      if (1 === b.nodeType && n.hasData(a)) {
        var c,
          d,
          e,
          f = n._data(a),
          g = n._data(b, f),
          h = f.events;
        if (h) {
          delete g.handle, (g.events = {});
          for (c in h)
            for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
        }
        g.data && (g.data = n.extend({}, g.data));
      }
    }
    function Ga(a, b) {
      var c, d, e;
      if (1 === b.nodeType) {
        if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
          e = n._data(b);
          for (d in e.events) n.removeEvent(b, d, e.handle);
          b.removeAttribute(n.expando);
        }
        "script" === c && b.text !== a.text
          ? ((Da(b).text = a.text), Ea(b))
          : "object" === c
          ? (b.parentNode && (b.outerHTML = a.outerHTML),
            l.html5Clone &&
              a.innerHTML &&
              !n.trim(b.innerHTML) &&
              (b.innerHTML = a.innerHTML))
          : "input" === c && Z.test(a.type)
          ? ((b.defaultChecked = b.checked = a.checked),
            b.value !== a.value && (b.value = a.value))
          : "option" === c
          ? (b.defaultSelected = b.selected = a.defaultSelected)
          : ("input" === c || "textarea" === c) &&
            (b.defaultValue = a.defaultValue);
      }
    }
    function Ha(a, b, c, d) {
      b = f.apply([], b);
      var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);
      if (r || (o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)))
        return a.each(function (e) {
          var f = a.eq(e);
          r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
        });
      if (
        o &&
        ((k = ja(b, a[0].ownerDocument, !1, a, d)),
        (e = k.firstChild),
        1 === k.childNodes.length && (k = e),
        e || d)
      ) {
        for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
          (g = k),
            m !== p &&
              ((g = n.clone(g, !0, !0)), h && n.merge(i, ea(g, "script"))),
            c.call(a[m], g, m);
        if (h)
          for (
            j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0;
            h > m;
            m++
          )
            (g = i[m]),
              _.test(g.type || "") &&
                !n._data(g, "globalEval") &&
                n.contains(j, g) &&
                (g.src
                  ? n._evalUrl && n._evalUrl(g.src)
                  : n.globalEval(
                      (g.text || g.textContent || g.innerHTML || "").replace(
                        za,
                        ""
                      )
                    ));
        k = e = null;
      }
      return a;
    }
    function Ia(a, b, c) {
      for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
        c || 1 !== d.nodeType || n.cleanData(ea(d)),
          d.parentNode &&
            (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
            d.parentNode.removeChild(d));
      return a;
    }
    n.extend({
      htmlPrefilter: function (a) {
        return a.replace(va, "<$1></$2>");
      },
      clone: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i = n.contains(a.ownerDocument, a);
        if (
          (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")
            ? (f = a.cloneNode(!0))
            : ((Ba.innerHTML = a.outerHTML),
              Ba.removeChild((f = Ba.firstChild))),
          !(
            (l.noCloneEvent && l.noCloneChecked) ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            n.isXMLDoc(a)
          ))
        )
          for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
            d[g] && Ga(e, d[g]);
        if (b)
          if (c)
            for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
              Fa(e, d[g]);
          else Fa(a, f);
        return (
          (d = ea(f, "script")),
          d.length > 0 && fa(d, !i && ea(a, "script")),
          (d = h = e = null),
          f
        );
      },
      cleanData: function (a, b) {
        for (
          var d,
            e,
            f,
            g,
            h = 0,
            i = n.expando,
            j = n.cache,
            k = l.attributes,
            m = n.event.special;
          null != (d = a[h]);
          h++
        )
          if ((b || M(d)) && ((f = d[i]), (g = f && j[f]))) {
            if (g.events)
              for (e in g.events)
                m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
            j[f] &&
              (delete j[f],
              k || "undefined" == typeof d.removeAttribute
                ? (d[i] = void 0)
                : d.removeAttribute(i),
              c.push(f));
          }
      },
    }),
      n.fn.extend({
        domManip: Ha,
        detach: function (a) {
          return Ia(this, a, !0);
        },
        remove: function (a) {
          return Ia(this, a);
        },
        text: function (a) {
          return Y(
            this,
            function (a) {
              return void 0 === a
                ? n.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || d).createTextNode(a)
                  );
            },
            null,
            a,
            arguments.length
          );
        },
        append: function () {
          return Ha(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = Ca(this, a);
              b.appendChild(a);
            }
          });
        },
        prepend: function () {
          return Ha(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = Ca(this, a);
              b.insertBefore(a, b.firstChild);
            }
          });
        },
        before: function () {
          return Ha(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function () {
          return Ha(this, arguments, function (a) {
            this.parentNode &&
              this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        empty: function () {
          for (var a, b = 0; null != (a = this[b]); b++) {
            1 === a.nodeType && n.cleanData(ea(a, !1));
            while (a.firstChild) a.removeChild(a.firstChild);
            a.options && n.nodeName(a, "select") && (a.options.length = 0);
          }
          return this;
        },
        clone: function (a, b) {
          return (
            (a = null == a ? !1 : a),
            (b = null == b ? a : b),
            this.map(function () {
              return n.clone(this, a, b);
            })
          );
        },
        html: function (a) {
          return Y(
            this,
            function (a) {
              var b = this[0] || {},
                c = 0,
                d = this.length;
              if (void 0 === a)
                return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
              if (
                "string" == typeof a &&
                !wa.test(a) &&
                (l.htmlSerialize || !ua.test(a)) &&
                (l.leadingWhitespace || !aa.test(a)) &&
                !da[($.exec(a) || ["", ""])[1].toLowerCase()]
              ) {
                a = n.htmlPrefilter(a);
                try {
                  for (; d > c; c++)
                    (b = this[c] || {}),
                      1 === b.nodeType &&
                        (n.cleanData(ea(b, !1)), (b.innerHTML = a));
                  b = 0;
                } catch (e) {}
              }
              b && this.empty().append(a);
            },
            null,
            a,
            arguments.length
          );
        },
        replaceWith: function () {
          var a = [];
          return Ha(
            this,
            arguments,
            function (b) {
              var c = this.parentNode;
              n.inArray(this, a) < 0 &&
                (n.cleanData(ea(this)), c && c.replaceChild(b, this));
            },
            a
          );
        },
      }),
      n.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (a, b) {
          n.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
              (c = d === h ? this : this.clone(!0)),
                n(f[d])[b](c),
                g.apply(e, c.get());
            return this.pushStack(e);
          };
        }
      );
    var Ja,
      Ka = {
        HTML: "block",
        BODY: "block",
      };
    function La(a, b) {
      var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");
      return c.detach(), d;
    }
    function Ma(a) {
      var b = d,
        c = Ka[a];
      return (
        c ||
          ((c = La(a, b)),
          ("none" !== c && c) ||
            ((Ja = (
              Ja || n("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(b.documentElement)),
            (b = (Ja[0].contentWindow || Ja[0].contentDocument).document),
            b.write(),
            b.close(),
            (c = La(a, b)),
            Ja.detach()),
          (Ka[a] = c)),
        c
      );
    }
    var Na = /^margin/,
      Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
      Pa = function (a, b, c, d) {
        var e,
          f,
          g = {};
        for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
      },
      Qa = d.documentElement;
    !(function () {
      var b,
        c,
        e,
        f,
        g,
        h,
        i = d.createElement("div"),
        j = d.createElement("div");
      if (j.style) {
        (j.style.cssText = "float:left;opacity:.5"),
          (l.opacity = "0.5" === j.style.opacity),
          (l.cssFloat = !!j.style.cssFloat),
          (j.style.backgroundClip = "content-box"),
          (j.cloneNode(!0).style.backgroundClip = ""),
          (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
          (i = d.createElement("div")),
          (i.style.cssText =
            "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
          (j.innerHTML = ""),
          i.appendChild(j),
          (l.boxSizing =
            "" === j.style.boxSizing ||
            "" === j.style.MozBoxSizing ||
            "" === j.style.WebkitBoxSizing),
          n.extend(l, {
            reliableHiddenOffsets: function () {
              return null == b && k(), f;
            },
            boxSizingReliable: function () {
              return null == b && k(), e;
            },
            pixelMarginRight: function () {
              return null == b && k(), c;
            },
            pixelPosition: function () {
              return null == b && k(), b;
            },
            reliableMarginRight: function () {
              return null == b && k(), g;
            },
            reliableMarginLeft: function () {
              return null == b && k(), h;
            },
          });
        function k() {
          var k,
            l,
            m = d.documentElement;
          m.appendChild(i),
            (j.style.cssText =
              "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
            (b = e = h = !1),
            (c = g = !0),
            a.getComputedStyle &&
              ((l = a.getComputedStyle(j)),
              (b = "1%" !== (l || {}).top),
              (h = "2px" === (l || {}).marginLeft),
              (e =
                "4px" ===
                (
                  l || {
                    width: "4px",
                  }
                ).width),
              (j.style.marginRight = "50%"),
              (c =
                "4px" ===
                (
                  l || {
                    marginRight: "4px",
                  }
                ).marginRight),
              (k = j.appendChild(d.createElement("div"))),
              (k.style.cssText = j.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (k.style.marginRight = k.style.width = "0"),
              (j.style.width = "1px"),
              (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
              j.removeChild(k)),
            (j.style.display = "none"),
            (f = 0 === j.getClientRects().length),
            f &&
              ((j.style.display = ""),
              (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (k = j.getElementsByTagName("td")),
              (k[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
              (f = 0 === k[0].offsetHeight),
              f &&
                ((k[0].style.display = ""),
                (k[1].style.display = "none"),
                (f = 0 === k[0].offsetHeight))),
            m.removeChild(i);
        }
      }
    })();
    var Ra,
      Sa,
      Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle
      ? ((Ra = function (b) {
          var c = b.ownerDocument.defaultView;
          return c.opener || (c = a), c.getComputedStyle(b);
        }),
        (Sa = function (a, b, c) {
          var d,
            e,
            f,
            g,
            h = a.style;
          return (
            (c = c || Ra(a)),
            (g = c ? c.getPropertyValue(b) || c[b] : void 0),
            c &&
              ("" !== g ||
                n.contains(a.ownerDocument, a) ||
                (g = n.style(a, b)),
              !l.pixelMarginRight() &&
                Oa.test(g) &&
                Na.test(b) &&
                ((d = h.width),
                (e = h.minWidth),
                (f = h.maxWidth),
                (h.minWidth = h.maxWidth = h.width = g),
                (g = c.width),
                (h.width = d),
                (h.minWidth = e),
                (h.maxWidth = f))),
            void 0 === g ? g : g + ""
          );
        }))
      : Qa.currentStyle &&
        ((Ra = function (a) {
          return a.currentStyle;
        }),
        (Sa = function (a, b, c) {
          var d,
            e,
            f,
            g,
            h = a.style;
          return (
            (c = c || Ra(a)),
            (g = c ? c[b] : void 0),
            null == g && h && h[b] && (g = h[b]),
            Oa.test(g) &&
              !Ta.test(b) &&
              ((d = h.left),
              (e = a.runtimeStyle),
              (f = e && e.left),
              f && (e.left = a.currentStyle.left),
              (h.left = "fontSize" === b ? "1em" : g),
              (g = h.pixelLeft + "px"),
              (h.left = d),
              f && (e.left = f)),
            void 0 === g ? g : g + "" || "auto"
          );
        }));
    function Ua(a, b) {
      return {
        get: function () {
          return a()
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
        },
      };
    }
    var Va = /alpha\([^)]*\)/i,
      Wa = /opacity\s*=\s*([^)]*)/i,
      Xa = /^(none|table(?!-c[ea]).+)/,
      Ya = new RegExp("^(" + T + ")(.*)$", "i"),
      Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
      },
      $a = {
        letterSpacing: "0",
        fontWeight: "400",
      },
      _a = ["Webkit", "O", "Moz", "ms"],
      ab = d.createElement("div").style;
    function bb(a) {
      if (a in ab) return a;
      var b = a.charAt(0).toUpperCase() + a.slice(1),
        c = _a.length;
      while (c--) if (((a = _a[c] + b), a in ab)) return a;
    }
    function cb(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
        (d = a[g]),
          d.style &&
            ((f[g] = n._data(d, "olddisplay")),
            (c = d.style.display),
            b
              ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display &&
                  W(d) &&
                  (f[g] = n._data(d, "olddisplay", Ma(d.nodeName))))
              : ((e = W(d)),
                ((c && "none" !== c) || !e) &&
                  n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
      for (g = 0; h > g; g++)
        (d = a[g]),
          d.style &&
            ((b && "none" !== d.style.display && "" !== d.style.display) ||
              (d.style.display = b ? f[g] || "" : "none"));
      return a;
    }
    function db(a, b, c) {
      var d = Ya.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function eb(a, b, c, d, e) {
      for (
        var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          g = 0;
        4 > f;
        f += 2
      )
        "margin" === c && (g += n.css(a, c + V[f], !0, e)),
          d
            ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
              "margin" !== c &&
                (g -= n.css(a, "border" + V[f] + "Width", !0, e)))
            : ((g += n.css(a, "padding" + V[f], !0, e)),
              "padding" !== c &&
                (g += n.css(a, "border" + V[f] + "Width", !0, e)));
      return g;
    }
    function fb(b, c, e) {
      var f = !0,
        g = "width" === c ? b.offsetWidth : b.offsetHeight,
        h = Ra(b),
        i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
      if (
        (d.msFullscreenElement &&
          a.top !== a &&
          b.getClientRects().length &&
          (g = Math.round(100 * b.getBoundingClientRect()[c])),
        0 >= g || null == g)
      ) {
        if (
          ((g = Sa(b, c, h)),
          (0 > g || null == g) && (g = b.style[c]),
          Oa.test(g))
        )
          return g;
        (f = i && (l.boxSizingReliable() || g === b.style[c])),
          (g = parseFloat(g) || 0);
      }
      return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px";
    }
    n.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = Sa(a, "opacity");
              return "" === c ? "1" : c;
            }
          },
        },
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
        zoom: !0,
      },
      cssProps: {
        float: l.cssFloat ? "cssFloat" : "styleFloat",
      },
      style: function (a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
          if (
            ((b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
            (g = n.cssHooks[b] || n.cssHooks[h]),
            void 0 === c)
          )
            return g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b];
          if (
            ((f = typeof c),
            "string" === f &&
              (e = U.exec(c)) &&
              e[1] &&
              ((c = X(a, b, e)), (f = "number")),
            null != c &&
              c === c &&
              ("number" === f &&
                (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
              l.clearCloneStyle ||
                "" !== c ||
                0 !== b.indexOf("background") ||
                (i[b] = "inherit"),
              !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
          )
            try {
              i[b] = c;
            } catch (j) {}
        }
      },
      css: function (a, b, c, d) {
        var e,
          f,
          g,
          h = n.camelCase(b);
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          g && "get" in g && (f = g.get(a, !0, c)),
          void 0 === f && (f = Sa(a, b, d)),
          "normal" === f && b in $a && (f = $a[b]),
          "" === c || c
            ? ((e = parseFloat(f)), c === !0 || isFinite(e) ? e || 0 : f)
            : f
        );
      },
    }),
      n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
          get: function (a, c, d) {
            return c
              ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth
                ? Pa(a, Za, function () {
                    return fb(a, b, d);
                  })
                : fb(a, b, d)
              : void 0;
          },
          set: function (a, c, d) {
            var e = d && Ra(a);
            return db(
              a,
              c,
              d
                ? eb(
                    a,
                    b,
                    d,
                    l.boxSizing &&
                      "border-box" === n.css(a, "boxSizing", !1, e),
                    e
                  )
                : 0
            );
          },
        };
      }),
      l.opacity ||
        (n.cssHooks.opacity = {
          get: function (a, b) {
            return Wa.test(
              (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : b
              ? "1"
              : "";
          },
          set: function (a, b) {
            var c = a.style,
              d = a.currentStyle,
              e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
              f = (d && d.filter) || c.filter || "";
            (c.zoom = 1),
              ((b >= 1 || "" === b) &&
                "" === n.trim(f.replace(Va, "")) &&
                c.removeAttribute &&
                (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
                (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
          },
        }),
      (n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
        return b
          ? Pa(
              a,
              {
                display: "inline-block",
              },
              Sa,
              [a, "marginRight"]
            )
          : void 0;
      })),
      (n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
        return b
          ? (parseFloat(Sa(a, "marginLeft")) ||
              (n.contains(a.ownerDocument, a)
                ? a.getBoundingClientRect().left -
                  Pa(
                    a,
                    {
                      marginLeft: 0,
                    },
                    function () {
                      return a.getBoundingClientRect().left;
                    }
                  )
                : 0)) + "px"
          : void 0;
      })),
      n.each(
        {
          margin: "",
          padding: "",
          border: "Width",
        },
        function (a, b) {
          (n.cssHooks[a + b] = {
            expand: function (c) {
              for (
                var d = 0,
                  e = {},
                  f = "string" == typeof c ? c.split(" ") : [c];
                4 > d;
                d++
              )
                e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
              return e;
            },
          }),
            Na.test(a) || (n.cssHooks[a + b].set = db);
        }
      ),
      n.fn.extend({
        css: function (a, b) {
          return Y(
            this,
            function (a, b, c) {
              var d,
                e,
                f = {},
                g = 0;
              if (n.isArray(b)) {
                for (d = Ra(a), e = b.length; e > g; g++)
                  f[b[g]] = n.css(a, b[g], !1, d);
                return f;
              }
              return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            },
            a,
            b,
            arguments.length > 1
          );
        },
        show: function () {
          return cb(this, !0);
        },
        hide: function () {
          return cb(this);
        },
        toggle: function (a) {
          return "boolean" == typeof a
            ? a
              ? this.show()
              : this.hide()
            : this.each(function () {
                W(this) ? n(this).show() : n(this).hide();
              });
        },
      });
    function gb(a, b, c, d, e) {
      return new gb.prototype.init(a, b, c, d, e);
    }
    (n.Tween = gb),
      (gb.prototype = {
        constructor: gb,
        init: function (a, b, c, d, e, f) {
          (this.elem = a),
            (this.prop = c),
            (this.easing = e || n.easing._default),
            (this.options = b),
            (this.start = this.now = this.cur()),
            (this.end = d),
            (this.unit = f || (n.cssNumber[c] ? "" : "px"));
        },
        cur: function () {
          var a = gb.propHooks[this.prop];
          return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
        },
        run: function (a) {
          var b,
            c = gb.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = b =
                  n.easing[this.easing](
                    a,
                    this.options.duration * a,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = b = a),
            (this.now = (this.end - this.start) * b + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : gb.propHooks._default.set(this),
            this
          );
        },
      }),
      (gb.prototype.init.prototype = gb.prototype),
      (gb.propHooks = {
        _default: {
          get: function (a) {
            var b;
            return 1 !== a.elem.nodeType ||
              (null != a.elem[a.prop] && null == a.elem.style[a.prop])
              ? a.elem[a.prop]
              : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
          },
          set: function (a) {
            n.fx.step[a.prop]
              ? n.fx.step[a.prop](a)
              : 1 !== a.elem.nodeType ||
                (null == a.elem.style[n.cssProps[a.prop]] &&
                  !n.cssHooks[a.prop])
              ? (a.elem[a.prop] = a.now)
              : n.style(a.elem, a.prop, a.now + a.unit);
          },
        },
      }),
      (gb.propHooks.scrollTop = gb.propHooks.scrollLeft =
        {
          set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
          },
        }),
      (n.easing = {
        linear: function (a) {
          return a;
        },
        swing: function (a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (n.fx = gb.prototype.init),
      (n.fx.step = {});
    var hb,
      ib,
      jb = /^(?:toggle|show|hide)$/,
      kb = /queueHooks$/;
    function lb() {
      return (
        a.setTimeout(function () {
          hb = void 0;
        }),
        (hb = n.now())
      );
    }
    function mb(a, b) {
      var c,
        d = {
          height: a,
        },
        e = 0;
      for (b = b ? 1 : 0; 4 > e; e += 2 - b)
        (c = V[e]), (d["margin" + c] = d["padding" + c] = a);
      return b && (d.opacity = d.width = a), d;
    }
    function nb(a, b, c) {
      for (
        var d,
          e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]),
          f = 0,
          g = e.length;
        g > f;
        f++
      )
        if ((d = e[f].call(c, b, a))) return d;
    }
    function ob(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m = this,
        o = {},
        p = a.style,
        q = a.nodeType && W(a),
        r = n._data(a, "fxshow");
      c.queue ||
        ((h = n._queueHooks(a, "fx")),
        null == h.unqueued &&
          ((h.unqueued = 0),
          (i = h.empty.fire),
          (h.empty.fire = function () {
            h.unqueued || i();
          })),
        h.unqueued++,
        m.always(function () {
          m.always(function () {
            h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
          });
        })),
        1 === a.nodeType &&
          ("height" in b || "width" in b) &&
          ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
          (j = n.css(a, "display")),
          (k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j),
          "inline" === k &&
            "none" === n.css(a, "float") &&
            (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName)
              ? (p.zoom = 1)
              : (p.display = "inline-block"))),
        c.overflow &&
          ((p.overflow = "hidden"),
          l.shrinkWrapBlocks() ||
            m.always(function () {
              (p.overflow = c.overflow[0]),
                (p.overflowX = c.overflow[1]),
                (p.overflowY = c.overflow[2]);
            }));
      for (d in b)
        if (((e = b[d]), jb.exec(e))) {
          if (
            (delete b[d],
            (f = f || "toggle" === e),
            e === (q ? "hide" : "show"))
          ) {
            if ("show" !== e || !r || void 0 === r[d]) continue;
            q = !0;
          }
          o[d] = (r && r[d]) || n.style(a, d);
        } else j = void 0;
      if (n.isEmptyObject(o))
        "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
      else {
        r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
          f && (r.hidden = !q),
          q
            ? n(a).show()
            : m.done(function () {
                n(a).hide();
              }),
          m.done(function () {
            var b;
            n._removeData(a, "fxshow");
            for (b in o) n.style(a, b, o[b]);
          });
        for (d in o)
          (g = nb(q ? r[d] : 0, d, m)),
            d in r ||
              ((r[d] = g.start),
              q &&
                ((g.end = g.start),
                (g.start = "width" === d || "height" === d ? 1 : 0)));
      }
    }
    function pb(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (
          ((d = n.camelCase(c)),
          (e = b[d]),
          (f = a[c]),
          n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
          c !== d && ((a[d] = f), delete a[c]),
          (g = n.cssHooks[d]),
          g && "expand" in g)
        ) {
          (f = g.expand(f)), delete a[d];
          for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
        } else b[d] = e;
    }
    function qb(a, b, c) {
      var d,
        e,
        f = 0,
        g = qb.prefilters.length,
        h = n.Deferred().always(function () {
          delete i.elem;
        }),
        i = function () {
          if (e) return !1;
          for (
            var b = hb || lb(),
              c = Math.max(0, j.startTime + j.duration - b),
              d = c / j.duration || 0,
              f = 1 - d,
              g = 0,
              i = j.tweens.length;
            i > g;
            g++
          )
            j.tweens[g].run(f);
          return (
            h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]), !1)
          );
        },
        j = h.promise({
          elem: a,
          props: n.extend({}, b),
          opts: n.extend(
            !0,
            {
              specialEasing: {},
              easing: n.easing._default,
            },
            c
          ),
          originalProperties: b,
          originalOptions: c,
          startTime: hb || lb(),
          duration: c.duration,
          tweens: [],
          createTween: function (b, c) {
            var d = n.Tween(
              a,
              j.opts,
              b,
              c,
              j.opts.specialEasing[b] || j.opts.easing
            );
            return j.tweens.push(d), d;
          },
          stop: function (b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return (
              b
                ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
                : h.rejectWith(a, [j, b]),
              this
            );
          },
        }),
        k = j.props;
      for (pb(k, j.opts.specialEasing); g > f; f++)
        if ((d = qb.prefilters[f].call(j, a, k, j.opts)))
          return (
            n.isFunction(d.stop) &&
              (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
            d
          );
      return (
        n.map(k, nb, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(
          n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue,
          })
        ),
        j
          .progress(j.opts.progress)
          .done(j.opts.done, j.opts.complete)
          .fail(j.opts.fail)
          .always(j.opts.always)
      );
    }
    (n.Animation = n.extend(qb, {
      tweeners: {
        "*": [
          function (a, b) {
            var c = this.createTween(a, b);
            return X(c.elem, a, U.exec(b), c), c;
          },
        ],
      },
      tweener: function (a, b) {
        n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
        for (var c, d = 0, e = a.length; e > d; d++)
          (c = a[d]),
            (qb.tweeners[c] = qb.tweeners[c] || []),
            qb.tweeners[c].unshift(b);
      },
      prefilters: [ob],
      prefilter: function (a, b) {
        b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
      },
    })),
      (n.speed = function (a, b, c) {
        var d =
          a && "object" == typeof a
            ? n.extend({}, a)
            : {
                complete: c || (!c && b) || (n.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !n.isFunction(b) && b),
              };
        return (
          (d.duration = n.fx.off
            ? 0
            : "number" == typeof d.duration
            ? d.duration
            : d.duration in n.fx.speeds
            ? n.fx.speeds[d.duration]
            : n.fx.speeds._default),
          (null == d.queue || d.queue === !0) && (d.queue = "fx"),
          (d.old = d.complete),
          (d.complete = function () {
            n.isFunction(d.old) && d.old.call(this),
              d.queue && n.dequeue(this, d.queue);
          }),
          d
        );
      }),
      n.fn.extend({
        fadeTo: function (a, b, c, d) {
          return this.filter(W).css("opacity", 0).show().end().animate(
            {
              opacity: b,
            },
            a,
            c,
            d
          );
        },
        animate: function (a, b, c, d) {
          var e = n.isEmptyObject(a),
            f = n.speed(b, c, d),
            g = function () {
              var b = qb(this, n.extend({}, a), f);
              (e || n._data(this, "finish")) && b.stop(!0);
            };
          return (
            (g.finish = g),
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
          );
        },
        stop: function (a, b, c) {
          var d = function (a) {
            var b = a.stop;
            delete a.stop, b(c);
          };
          return (
            "string" != typeof a && ((c = b), (b = a), (a = void 0)),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function () {
              var b = !0,
                e = null != a && a + "queueHooks",
                f = n.timers,
                g = n._data(this);
              if (e) g[e] && g[e].stop && d(g[e]);
              else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
              for (e = f.length; e--; )
                f[e].elem !== this ||
                  (null != a && f[e].queue !== a) ||
                  (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
              (b || !c) && n.dequeue(this, a);
            })
          );
        },
        finish: function (a) {
          return (
            a !== !1 && (a = a || "fx"),
            this.each(function () {
              var b,
                c = n._data(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = n.timers,
                g = d ? d.length : 0;
              for (
                c.finish = !0,
                  n.queue(this, a, []),
                  e && e.stop && e.stop.call(this, !0),
                  b = f.length;
                b--;

              )
                f[b].elem === this &&
                  f[b].queue === a &&
                  (f[b].anim.stop(!0), f.splice(b, 1));
              for (b = 0; g > b; b++)
                d[b] && d[b].finish && d[b].finish.call(this);
              delete c.finish;
            })
          );
        },
      }),
      n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
          return null == a || "boolean" == typeof a
            ? c.apply(this, arguments)
            : this.animate(mb(b, !0), a, d, e);
        };
      }),
      n.each(
        {
          slideDown: mb("show"),
          slideUp: mb("hide"),
          slideToggle: mb("toggle"),
          fadeIn: {
            opacity: "show",
          },
          fadeOut: {
            opacity: "hide",
          },
          fadeToggle: {
            opacity: "toggle",
          },
        },
        function (a, b) {
          n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
          };
        }
      ),
      (n.timers = []),
      (n.fx.tick = function () {
        var a,
          b = n.timers,
          c = 0;
        for (hb = n.now(); c < b.length; c++)
          (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), (hb = void 0);
      }),
      (n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
      }),
      (n.fx.interval = 13),
      (n.fx.start = function () {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
      }),
      (n.fx.stop = function () {
        a.clearInterval(ib), (ib = null);
      }),
      (n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400,
      }),
      (n.fn.delay = function (b, c) {
        return (
          (b = n.fx ? n.fx.speeds[b] || b : b),
          (c = c || "fx"),
          this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
              a.clearTimeout(e);
            };
          })
        );
      }),
      (function () {
        var a,
          b = d.createElement("input"),
          c = d.createElement("div"),
          e = d.createElement("select"),
          f = e.appendChild(d.createElement("option"));
        (c = d.createElement("div")),
          c.setAttribute("className", "t"),
          (c.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (a = c.getElementsByTagName("a")[0]),
          b.setAttribute("type", "checkbox"),
          c.appendChild(b),
          (a = c.getElementsByTagName("a")[0]),
          (a.style.cssText = "top:1px"),
          (l.getSetAttribute = "t" !== c.className),
          (l.style = /top/.test(a.getAttribute("style"))),
          (l.hrefNormalized = "/a" === a.getAttribute("href")),
          (l.checkOn = !!b.value),
          (l.optSelected = f.selected),
          (l.enctype = !!d.createElement("form").enctype),
          (e.disabled = !0),
          (l.optDisabled = !f.disabled),
          (b = d.createElement("input")),
          b.setAttribute("value", ""),
          (l.input = "" === b.getAttribute("value")),
          (b.value = "t"),
          b.setAttribute("type", "radio"),
          (l.radioValue = "t" === b.value);
      })();
    var rb = /\r/g;
    n.fn.extend({
      val: function (a) {
        var b,
          c,
          d,
          e = this[0];
        {
          if (arguments.length)
            return (
              (d = n.isFunction(a)),
              this.each(function (c) {
                var e;
                1 === this.nodeType &&
                  ((e = d ? a.call(this, c, n(this).val()) : a),
                  null == e
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : n.isArray(e) &&
                      (e = n.map(e, function (a) {
                        return null == a ? "" : a + "";
                      })),
                  (b =
                    n.valHooks[this.type] ||
                    n.valHooks[this.nodeName.toLowerCase()]),
                  (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                    (this.value = e));
              })
            );
          if (e)
            return (
              (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
              b && "get" in b && void 0 !== (c = b.get(e, "value"))
                ? c
                : ((c = e.value),
                  "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            );
        }
      },
    }),
      n.extend({
        valHooks: {
          option: {
            get: function (a) {
              var b = n.find.attr(a, "value");
              return null != b ? b : n.trim(n.text(a));
            },
          },
          select: {
            get: function (a) {
              for (
                var b,
                  c,
                  d = a.options,
                  e = a.selectedIndex,
                  f = "select-one" === a.type || 0 > e,
                  g = f ? null : [],
                  h = f ? e + 1 : d.length,
                  i = 0 > e ? h : f ? e : 0;
                h > i;
                i++
              )
                if (
                  ((c = d[i]),
                  (c.selected || i === e) &&
                    (l.optDisabled
                      ? !c.disabled
                      : null === c.getAttribute("disabled")) &&
                    (!c.parentNode.disabled ||
                      !n.nodeName(c.parentNode, "optgroup")))
                ) {
                  if (((b = n(c).val()), f)) return b;
                  g.push(b);
                }
              return g;
            },
            set: function (a, b) {
              var c,
                d,
                e = a.options,
                f = n.makeArray(b),
                g = e.length;
              while (g--)
                if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) >= 0))
                  try {
                    d.selected = c = !0;
                  } catch (h) {
                    d.scrollHeight;
                  }
                else d.selected = !1;
              return c || (a.selectedIndex = -1), e;
            },
          },
        },
      }),
      n.each(["radio", "checkbox"], function () {
        (n.valHooks[this] = {
          set: function (a, b) {
            return n.isArray(b)
              ? (a.checked = n.inArray(n(a).val(), b) > -1)
              : void 0;
          },
        }),
          l.checkOn ||
            (n.valHooks[this].get = function (a) {
              return null === a.getAttribute("value") ? "on" : a.value;
            });
      });
    var sb,
      tb,
      ub = n.expr.attrHandle,
      vb = /^(?:checked|selected)$/i,
      wb = l.getSetAttribute,
      xb = l.input;
    n.fn.extend({
      attr: function (a, b) {
        return Y(this, n.attr, a, b, arguments.length > 1);
      },
      removeAttr: function (a) {
        return this.each(function () {
          n.removeAttr(this, a);
        });
      },
    }),
      n.extend({
        attr: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f)
            return "undefined" == typeof a.getAttribute
              ? n.prop(a, b, c)
              : ((1 === f && n.isXMLDoc(a)) ||
                  ((b = b.toLowerCase()),
                  (e =
                    n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb))),
                void 0 !== c
                  ? null === c
                    ? void n.removeAttr(a, b)
                    : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                    ? d
                    : (a.setAttribute(b, c + ""), c)
                  : e && "get" in e && null !== (d = e.get(a, b))
                  ? d
                  : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
        },
        attrHooks: {
          type: {
            set: function (a, b) {
              if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b;
              }
            },
          },
        },
        removeAttr: function (a, b) {
          var c,
            d,
            e = 0,
            f = b && b.match(G);
          if (f && 1 === a.nodeType)
            while ((c = f[e++]))
              (d = n.propFix[c] || c),
                n.expr.match.bool.test(c)
                  ? (xb && wb) || !vb.test(c)
                    ? (a[d] = !1)
                    : (a[n.camelCase("default-" + c)] = a[d] = !1)
                  : n.attr(a, c, ""),
                a.removeAttribute(wb ? c : d);
        },
      }),
      (tb = {
        set: function (a, b, c) {
          return (
            b === !1
              ? n.removeAttr(a, c)
              : (xb && wb) || !vb.test(c)
              ? a.setAttribute((!wb && n.propFix[c]) || c, c)
              : (a[n.camelCase("default-" + c)] = a[c] = !0),
            c
          );
        },
      }),
      n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ub[b] || n.find.attr;
        (xb && wb) || !vb.test(b)
          ? (ub[b] = function (a, b, d) {
              var e, f;
              return (
                d ||
                  ((f = ub[b]),
                  (ub[b] = e),
                  (e = null != c(a, b, d) ? b.toLowerCase() : null),
                  (ub[b] = f)),
                e
              );
            })
          : (ub[b] = function (a, b, c) {
              return c
                ? void 0
                : a[n.camelCase("default-" + b)]
                ? b.toLowerCase()
                : null;
            });
      }),
      (xb && wb) ||
        (n.attrHooks.value = {
          set: function (a, b, c) {
            return n.nodeName(a, "input")
              ? void (a.defaultValue = b)
              : sb && sb.set(a, b, c);
          },
        }),
      wb ||
        ((sb = {
          set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return (
              d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
              (d.value = b += ""),
              "value" === c || b === a.getAttribute(c) ? b : void 0
            );
          },
        }),
        (ub.id =
          ub.name =
          ub.coords =
            function (a, b, c) {
              var d;
              return c
                ? void 0
                : (d = a.getAttributeNode(b)) && "" !== d.value
                ? d.value
                : null;
            }),
        (n.valHooks.button = {
          get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0;
          },
          set: sb.set,
        }),
        (n.attrHooks.contenteditable = {
          set: function (a, b, c) {
            sb.set(a, "" === b ? !1 : b, c);
          },
        }),
        n.each(["width", "height"], function (a, b) {
          n.attrHooks[b] = {
            set: function (a, c) {
              return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
            },
          };
        })),
      l.style ||
        (n.attrHooks.style = {
          get: function (a) {
            return a.style.cssText || void 0;
          },
          set: function (a, b) {
            return (a.style.cssText = b + "");
          },
        });
    var yb = /^(?:input|select|textarea|button|object)$/i,
      zb = /^(?:a|area)$/i;
    n.fn.extend({
      prop: function (a, b) {
        return Y(this, n.prop, a, b, arguments.length > 1);
      },
      removeProp: function (a) {
        return (
          (a = n.propFix[a] || a),
          this.each(function () {
            try {
              (this[a] = void 0), delete this[a];
            } catch (b) {}
          })
        );
      },
    }),
      n.extend({
        prop: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f)
            return (
              (1 === f && n.isXMLDoc(a)) ||
                ((b = n.propFix[b] || b), (e = n.propHooks[b])),
              void 0 !== c
                ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a[b] = c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (a) {
              var b = n.find.attr(a, "tabindex");
              return b
                ? parseInt(b, 10)
                : yb.test(a.nodeName) || (zb.test(a.nodeName) && a.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: {
          for: "htmlFor",
          class: "className",
        },
      }),
      l.hrefNormalized ||
        n.each(["href", "src"], function (a, b) {
          n.propHooks[b] = {
            get: function (a) {
              return a.getAttribute(b, 4);
            },
          };
        }),
      l.optSelected ||
        (n.propHooks.selected = {
          get: function (a) {
            var b = a.parentNode;
            return (
              b &&
                (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
              null
            );
          },
        }),
      n.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          n.propFix[this.toLowerCase()] = this;
        }
      ),
      l.enctype || (n.propFix.enctype = "encoding");
    var Ab = /[\t\r\n\f]/g;
    function Bb(a) {
      return n.attr(a, "class") || "";
    }
    n.fn.extend({
      addClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).addClass(a.call(this, b, Bb(this)));
          });
        if ("string" == typeof a && a) {
          b = a.match(G) || [];
          while ((c = this[i++]))
            if (
              ((e = Bb(c)),
              (d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")))
            ) {
              g = 0;
              while ((f = b[g++]))
                d.indexOf(" " + f + " ") < 0 && (d += f + " ");
              (h = n.trim(d)), e !== h && n.attr(c, "class", h);
            }
        }
        return this;
      },
      removeClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).removeClass(a.call(this, b, Bb(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a && a) {
          b = a.match(G) || [];
          while ((c = this[i++]))
            if (
              ((e = Bb(c)),
              (d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")))
            ) {
              g = 0;
              while ((f = b[g++]))
                while (d.indexOf(" " + f + " ") > -1)
                  d = d.replace(" " + f + " ", " ");
              (h = n.trim(d)), e !== h && n.attr(c, "class", h);
            }
        }
        return this;
      },
      toggleClass: function (a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c
          ? b
            ? this.addClass(a)
            : this.removeClass(a)
          : n.isFunction(a)
          ? this.each(function (c) {
              n(this).toggleClass(a.call(this, c, Bb(this), b), b);
            })
          : this.each(function () {
              var b, d, e, f;
              if ("string" === c) {
                (d = 0), (e = n(this)), (f = a.match(G) || []);
                while ((b = f[d++]))
                  e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              } else (void 0 === a || "boolean" === c) && ((b = Bb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
            });
      },
      hasClass: function (a) {
        var b,
          c,
          d = 0;
        b = " " + a + " ";
        while ((c = this[d++]))
          if (
            1 === c.nodeType &&
            (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1
          )
            return !0;
        return !1;
      },
    }),
      n.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (a, b) {
          n.fn[b] = function (a, c) {
            return arguments.length > 0
              ? this.on(b, null, a, c)
              : this.trigger(b);
          };
        }
      ),
      n.fn.extend({
        hover: function (a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        },
      });
    var Cb = a.location,
      Db = n.now(),
      Eb = /\?/,
      Fb =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (n.parseJSON = function (b) {
      if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
      var c,
        d = null,
        e = n.trim(b + "");
      return e &&
        !n.trim(
          e.replace(Fb, function (a, b, e, f) {
            return (
              c && b && (d = 0),
              0 === d ? a : ((c = e || b), (d += !f - !e), "")
            );
          })
        )
        ? Function("return " + e)()
        : n.error("Invalid JSON: " + b);
    }),
      (n.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
          a.DOMParser
            ? ((d = new a.DOMParser()), (c = d.parseFromString(b, "text/xml")))
            : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
              (c.async = "false"),
              c.loadXML(b));
        } catch (e) {
          c = void 0;
        }
        return (
          (c &&
            c.documentElement &&
            !c.getElementsByTagName("parsererror").length) ||
            n.error("Invalid XML: " + b),
          c
        );
      });
    var Gb = /#.*$/,
      Hb = /([?&])_=[^&]*/,
      Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Kb = /^(?:GET|HEAD)$/,
      Lb = /^\/\//,
      Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Nb = {},
      Ob = {},
      Pb = "*/".concat("*"),
      Qb = Cb.href,
      Rb = Mb.exec(Qb.toLowerCase()) || [];
    function Sb(a) {
      return function (b, c) {
        "string" != typeof b && ((c = b), (b = "*"));
        var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];
        if (n.isFunction(c))
          while ((d = f[e++]))
            "+" === d.charAt(0)
              ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
              : (a[d] = a[d] || []).push(c);
      };
    }
    function Tb(a, b, c, d) {
      var e = {},
        f = a === Ob;
      function g(h) {
        var i;
        return (
          (e[h] = !0),
          n.each(a[h] || [], function (a, h) {
            var j = h(b, c, d);
            return "string" != typeof j || f || e[j]
              ? f
                ? !(i = j)
                : void 0
              : (b.dataTypes.unshift(j), g(j), !1);
          }),
          i
        );
      }
      return g(b.dataTypes[0]) || (!e["*"] && g("*"));
    }
    function Ub(a, b) {
      var c,
        d,
        e = n.ajaxSettings.flatOptions || {};
      for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
      return c && n.extend(!0, a, c), a;
    }
    function Vb(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;
      while ("*" === i[0])
        i.shift(),
          void 0 === e &&
            (e = a.mimeType || b.getResponseHeader("Content-Type"));
      if (e)
        for (g in h)
          if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break;
          }
      if (i[0] in c) f = i[0];
      else {
        for (g in c) {
          if (!i[0] || a.converters[g + " " + i[0]]) {
            f = g;
            break;
          }
          d || (d = g);
        }
        f = f || d;
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Wb(a, b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
      if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      f = k.shift();
      while (f)
        if (
          (a.responseFields[f] && (c[a.responseFields[f]] = b),
          !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
          (i = f),
          (f = k.shift()))
        )
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
            if (((g = j[i + " " + f] || j["* " + f]), !g))
              for (e in j)
                if (
                  ((h = e.split(" ")),
                  h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                ) {
                  g === !0
                    ? (g = j[e])
                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                  break;
                }
            if (g !== !0)
              if (g && a["throws"]) b = g(b);
              else
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f,
                  };
                }
          }
      return {
        state: "success",
        data: b,
      };
    }
    n.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Qb,
        type: "GET",
        isLocal: Jb.test(Rb[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Pb,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": n.parseJSON,
          "text xml": n.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (a, b) {
        return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a);
      },
      ajaxPrefilter: Sb(Nb),
      ajaxTransport: Sb(Ob),
      ajax: function (b, c) {
        "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = n.ajaxSetup({}, c),
          m = l.context || l,
          o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
          p = n.Deferred(),
          q = n.Callbacks("once memory"),
          r = l.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (a) {
              var b;
              if (2 === u) {
                if (!k) {
                  k = {};
                  while ((b = Ib.exec(g))) k[b[1].toLowerCase()] = b[2];
                }
                b = k[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function () {
              return 2 === u ? g : null;
            },
            setRequestHeader: function (a, b) {
              var c = a.toLowerCase();
              return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
            },
            overrideMimeType: function (a) {
              return u || (l.mimeType = a), this;
            },
            statusCode: function (a) {
              var b;
              if (a)
                if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                else w.always(a[w.status]);
              return this;
            },
            abort: function (a) {
              var b = a || v;
              return j && j.abort(b), y(0, b), this;
            },
          };
        if (
          ((p.promise(w).complete = q.add),
          (w.success = w.done),
          (w.error = w.fail),
          (l.url = ((b || l.url || Qb) + "")
            .replace(Gb, "")
            .replace(Lb, Rb[1] + "//")),
          (l.type = c.method || c.type || l.method || l.type),
          (l.dataTypes = n
            .trim(l.dataType || "*")
            .toLowerCase()
            .match(G) || [""]),
          null == l.crossDomain &&
            ((d = Mb.exec(l.url.toLowerCase())),
            (l.crossDomain = !(
              !d ||
              (d[1] === Rb[1] &&
                d[2] === Rb[2] &&
                (d[3] || ("http:" === d[1] ? "80" : "443")) ===
                  (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))
            ))),
          l.data &&
            l.processData &&
            "string" != typeof l.data &&
            (l.data = n.param(l.data, l.traditional)),
          Tb(Nb, l, c, w),
          2 === u)
        )
          return w;
        (i = n.event && l.global),
          i && 0 === n.active++ && n.event.trigger("ajaxStart"),
          (l.type = l.type.toUpperCase()),
          (l.hasContent = !Kb.test(l.type)),
          (f = l.url),
          l.hasContent ||
            (l.data &&
              ((f = l.url += (Eb.test(f) ? "&" : "?") + l.data), delete l.data),
            l.cache === !1 &&
              (l.url = Hb.test(f)
                ? f.replace(Hb, "$1_=" + Db++)
                : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)),
          l.ifModified &&
            (n.lastModified[f] &&
              w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
          ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
            w.setRequestHeader("Content-Type", l.contentType),
          w.setRequestHeader(
            "Accept",
            l.dataTypes[0] && l.accepts[l.dataTypes[0]]
              ? l.accepts[l.dataTypes[0]] +
                  ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "")
              : l.accepts["*"]
          );
        for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
        if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
          return w.abort();
        v = "abort";
        for (e in {
          success: 1,
          error: 1,
          complete: 1,
        })
          w[e](l[e]);
        if ((j = Tb(Ob, l, c, w))) {
          if (((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u))
            return w;
          l.async &&
            l.timeout > 0 &&
            (h = a.setTimeout(function () {
              w.abort("timeout");
            }, l.timeout));
          try {
            (u = 1), j.send(s, y);
          } catch (x) {
            if (!(2 > u)) throw x;
            y(-1, x);
          }
        } else y(-1, "No Transport");
        function y(b, c, d, e) {
          var k,
            s,
            t,
            v,
            x,
            y = c;
          2 !== u &&
            ((u = 2),
            h && a.clearTimeout(h),
            (j = void 0),
            (g = e || ""),
            (w.readyState = b > 0 ? 4 : 0),
            (k = (b >= 200 && 300 > b) || 304 === b),
            d && (v = Vb(l, w, d)),
            (v = Wb(l, v, w, k)),
            k
              ? (l.ifModified &&
                  ((x = w.getResponseHeader("Last-Modified")),
                  x && (n.lastModified[f] = x),
                  (x = w.getResponseHeader("etag")),
                  x && (n.etag[f] = x)),
                204 === b || "HEAD" === l.type
                  ? (y = "nocontent")
                  : 304 === b
                  ? (y = "notmodified")
                  : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
              : ((t = y), (b || !y) && ((y = "error"), 0 > b && (b = 0))),
            (w.status = b),
            (w.statusText = (c || y) + ""),
            k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
            w.statusCode(r),
            (r = void 0),
            i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
            q.fireWith(m, [w, y]),
            i &&
              (o.trigger("ajaxComplete", [w, l]),
              --n.active || n.event.trigger("ajaxStop")));
        }
        return w;
      },
      getJSON: function (a, b, c) {
        return n.get(a, b, c, "json");
      },
      getScript: function (a, b) {
        return n.get(a, void 0, b, "script");
      },
    }),
      n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
          return (
            n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
            n.ajax(
              n.extend(
                {
                  url: a,
                  type: b,
                  dataType: e,
                  data: c,
                  success: d,
                },
                n.isPlainObject(a) && a
              )
            )
          );
        };
      }),
      (n._evalUrl = function (a) {
        return n.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      n.fn.extend({
        wrapAll: function (a) {
          if (n.isFunction(a))
            return this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            });
          if (this[0]) {
            var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstChild && 1 === a.firstChild.nodeType)
                    a = a.firstChild;
                  return a;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (a) {
          return n.isFunction(a)
            ? this.each(function (b) {
                n(this).wrapInner(a.call(this, b));
              })
            : this.each(function () {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              });
        },
        wrap: function (a) {
          var b = n.isFunction(a);
          return this.each(function (c) {
            n(this).wrapAll(b ? a.call(this, c) : a);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            })
            .end();
        },
      });
    function Xb(a) {
      return (a.style && a.style.display) || n.css(a, "display");
    }
    function Yb(a) {
      while (a && 1 === a.nodeType) {
        if ("none" === Xb(a) || "hidden" === a.type) return !0;
        a = a.parentNode;
      }
      return !1;
    }
    (n.expr.filters.hidden = function (a) {
      return l.reliableHiddenOffsets()
        ? a.offsetWidth <= 0 &&
            a.offsetHeight <= 0 &&
            !a.getClientRects().length
        : Yb(a);
    }),
      (n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a);
      });
    var Zb = /%20/g,
      $b = /\[\]$/,
      _b = /\r?\n/g,
      ac = /^(?:submit|button|image|reset|file)$/i,
      bc = /^(?:input|select|textarea|keygen)/i;
    function cc(a, b, c, d) {
      var e;
      if (n.isArray(b))
        n.each(b, function (b, e) {
          c || $b.test(a)
            ? d(a, e)
            : cc(
                a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
                e,
                c,
                d
              );
        });
      else if (c || "object" !== n.type(b)) d(a, b);
      else for (e in b) cc(a + "[" + e + "]", b[e], c, d);
    }
    (n.param = function (a, b) {
      var c,
        d = [],
        e = function (a, b) {
          (b = n.isFunction(b) ? b() : null == b ? "" : b),
            (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      if (
        (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
      )
        n.each(a, function () {
          e(this.name, this.value);
        });
      else for (c in a) cc(c, a[c], b, e);
      return d.join("&").replace(Zb, "+");
    }),
      n.fn.extend({
        serialize: function () {
          return n.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var a = n.prop(this, "elements");
            return a ? n.makeArray(a) : this;
          })
            .filter(function () {
              var a = this.type;
              return (
                this.name &&
                !n(this).is(":disabled") &&
                bc.test(this.nodeName) &&
                !ac.test(a) &&
                (this.checked || !Z.test(a))
              );
            })
            .map(function (a, b) {
              var c = n(this).val();
              return null == c
                ? null
                : n.isArray(c)
                ? n.map(c, function (a) {
                    return {
                      name: b.name,
                      value: a.replace(_b, "\r\n"),
                    };
                  })
                : {
                    name: b.name,
                    value: c.replace(_b, "\r\n"),
                  };
            })
            .get();
        },
      }),
      (n.ajaxSettings.xhr =
        void 0 !== a.ActiveXObject
          ? function () {
              return this.isLocal
                ? hc()
                : d.documentMode > 8
                ? gc()
                : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                    gc()) ||
                  hc();
            }
          : gc);
    var dc = 0,
      ec = {},
      fc = n.ajaxSettings.xhr();
    a.attachEvent &&
      a.attachEvent("onunload", function () {
        for (var a in ec) ec[a](void 0, !0);
      }),
      (l.cors = !!fc && "withCredentials" in fc),
      (fc = l.ajax = !!fc),
      fc &&
        n.ajaxTransport(function (b) {
          if (!b.crossDomain || l.cors) {
            var c;
            return {
              send: function (d, e) {
                var f,
                  g = b.xhr(),
                  h = ++dc;
                if (
                  (g.open(b.type, b.url, b.async, b.username, b.password),
                  b.xhrFields)
                )
                  for (f in b.xhrFields) g[f] = b.xhrFields[f];
                b.mimeType &&
                  g.overrideMimeType &&
                  g.overrideMimeType(b.mimeType),
                  b.crossDomain ||
                    d["X-Requested-With"] ||
                    (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d)
                  void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                g.send((b.hasContent && b.data) || null),
                  (c = function (a, d) {
                    var f, i, j;
                    if (c && (d || 4 === g.readyState))
                      if (
                        (delete ec[h],
                        (c = void 0),
                        (g.onreadystatechange = n.noop),
                        d)
                      )
                        4 !== g.readyState && g.abort();
                      else {
                        (j = {}),
                          (f = g.status),
                          "string" == typeof g.responseText &&
                            (j.text = g.responseText);
                        try {
                          i = g.statusText;
                        } catch (k) {
                          i = "";
                        }
                        f || !b.isLocal || b.crossDomain
                          ? 1223 === f && (f = 204)
                          : (f = j.text ? 200 : 404);
                      }
                    j && e(f, i, j, g.getAllResponseHeaders());
                  }),
                  b.async
                    ? 4 === g.readyState
                      ? a.setTimeout(c)
                      : (g.onreadystatechange = ec[h] = c)
                    : c();
              },
              abort: function () {
                c && c(void 0, !0);
              },
            };
          }
        });
    function gc() {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    }
    function hc() {
      try {
        return new a.ActiveXObject("Microsoft.XMLHTTP");
      } catch (b) {}
    }
    n.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
      n.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: {
          script: /\b(?:java|ecma)script\b/,
        },
        converters: {
          "text script": function (a) {
            return n.globalEval(a), a;
          },
        },
      }),
      n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1),
          a.crossDomain && ((a.type = "GET"), (a.global = !1));
      }),
      n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
          var b,
            c = d.head || n("head")[0] || d.documentElement;
          return {
            send: function (e, f) {
              (b = d.createElement("script")),
                (b.async = !0),
                a.scriptCharset && (b.charset = a.scriptCharset),
                (b.src = a.url),
                (b.onload = b.onreadystatechange =
                  function (a, c) {
                    (c ||
                      !b.readyState ||
                      /loaded|complete/.test(b.readyState)) &&
                      ((b.onload = b.onreadystatechange = null),
                      b.parentNode && b.parentNode.removeChild(b),
                      (b = null),
                      c || f(200, "success"));
                  }),
                c.insertBefore(b, c.firstChild);
            },
            abort: function () {
              b && b.onload(void 0, !0);
            },
          };
        }
      });
    var ic = [],
      jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var a = ic.pop() || n.expando + "_" + Db++;
        return (this[a] = !0), a;
      },
    }),
      n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
          f,
          g,
          h =
            b.jsonp !== !1 &&
            (jc.test(b.url)
              ? "url"
              : "string" == typeof b.data &&
                0 ===
                  (b.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                jc.test(b.data) &&
                "data");
        return h || "jsonp" === b.dataTypes[0]
          ? ((e = b.jsonpCallback =
              n.isFunction(b.jsonpCallback)
                ? b.jsonpCallback()
                : b.jsonpCallback),
            h
              ? (b[h] = b[h].replace(jc, "$1" + e))
              : b.jsonp !== !1 &&
                (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            (b.converters["script json"] = function () {
              return g || n.error(e + " was not called"), g[0];
            }),
            (b.dataTypes[0] = "json"),
            (f = a[e]),
            (a[e] = function () {
              g = arguments;
            }),
            d.always(function () {
              void 0 === f ? n(a).removeProp(e) : (a[e] = f),
                b[e] && ((b.jsonpCallback = c.jsonpCallback), ic.push(e)),
                g && n.isFunction(f) && f(g[0]),
                (g = f = void 0);
            }),
            "script")
          : void 0;
      }),
      (l.createHTMLDocument = (function () {
        if (!d.implementation.createHTMLDocument) return !1;
        var a = d.implementation.createHTMLDocument("");
        return (
          (a.body.innerHTML = "<form></form><form></form>"),
          2 === a.body.childNodes.length
        );
      })()),
      (n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && ((c = b), (b = !1)),
          (b =
            b ||
            (l.createHTMLDocument
              ? d.implementation.createHTMLDocument("")
              : d));
        var e = x.exec(a),
          f = !c && [];
        return e
          ? [b.createElement(e[1])]
          : ((e = ja([a], b, f)),
            f && f.length && n(f).remove(),
            n.merge([], e.childNodes));
      });
    var kc = n.fn.load;
    (n.fn.load = function (a, b, c) {
      if ("string" != typeof a && kc) return kc.apply(this, arguments);
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
        n.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          n
            .ajax({
              url: a,
              type: e || "GET",
              dataType: "html",
              data: b,
            })
            .done(function (a) {
              (f = arguments),
                g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(g, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
      n.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (a, b) {
          n.fn[b] = function (a) {
            return this.on(b, a);
          };
        }
      ),
      (n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
          return a === b.elem;
        }).length;
      });
    function lc(a) {
      return n.isWindow(a)
        ? a
        : 9 === a.nodeType
        ? a.defaultView || a.parentWindow
        : !1;
    }
    (n.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = n.css(a, "top")),
          (i = n.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            n.inArray("auto", [f, i]) > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
      n.fn.extend({
        offset: function (a) {
          if (arguments.length)
            return void 0 === a
              ? this
              : this.each(function (b) {
                  n.offset.setOffset(this, a, b);
                });
          var b,
            c,
            d = {
              top: 0,
              left: 0,
            },
            e = this[0],
            f = e && e.ownerDocument;
          if (f)
            return (
              (b = f.documentElement),
              n.contains(b, e)
                ? ("undefined" != typeof e.getBoundingClientRect &&
                    (d = e.getBoundingClientRect()),
                  (c = lc(f)),
                  {
                    top:
                      d.top +
                      (c.pageYOffset || b.scrollTop) -
                      (b.clientTop || 0),
                    left:
                      d.left +
                      (c.pageXOffset || b.scrollLeft) -
                      (b.clientLeft || 0),
                  })
                : d
            );
        },
        position: function () {
          if (this[0]) {
            var a,
              b,
              c = {
                top: 0,
                left: 0,
              },
              d = this[0];
            return (
              "fixed" === n.css(d, "position")
                ? (b = d.getBoundingClientRect())
                : ((a = this.offsetParent()),
                  (b = this.offset()),
                  n.nodeName(a[0], "html") || (c = a.offset()),
                  (c.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop()),
                  (c.left +=
                    n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft())),
              {
                top: b.top - c.top - n.css(d, "marginTop", !0),
                left: b.left - c.left - n.css(d, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var a = this.offsetParent;
            while (
              a &&
              !n.nodeName(a, "html") &&
              "static" === n.css(a, "position")
            )
              a = a.offsetParent;
            return a || Qa;
          });
        },
      }),
      n.each(
        {
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset",
        },
        function (a, b) {
          var c = /Y/.test(b);
          n.fn[a] = function (d) {
            return Y(
              this,
              function (a, d, e) {
                var f = lc(a);
                return void 0 === e
                  ? f
                    ? b in f
                      ? f[b]
                      : f.document.documentElement[d]
                    : a[d]
                  : void (f
                      ? f.scrollTo(
                          c ? n(f).scrollLeft() : e,
                          c ? e : n(f).scrollTop()
                        )
                      : (a[d] = e));
              },
              a,
              d,
              arguments.length,
              null
            );
          };
        }
      ),
      n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
          return c
            ? ((c = Sa(a, b)), Oa.test(c) ? n(a).position()[b] + "px" : c)
            : void 0;
        });
      }),
      n.each(
        {
          Height: "height",
          Width: "width",
        },
        function (a, b) {
          n.each(
            {
              padding: "inner" + a,
              content: b,
              "": "outer" + a,
            },
            function (c, d) {
              n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                  g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(
                  this,
                  function (b, c, d) {
                    var e;
                    return n.isWindow(b)
                      ? b.document.documentElement["client" + a]
                      : 9 === b.nodeType
                      ? ((e = b.documentElement),
                        Math.max(
                          b.body["scroll" + a],
                          e["scroll" + a],
                          b.body["offset" + a],
                          e["offset" + a],
                          e["client" + a]
                        ))
                      : void 0 === d
                      ? n.css(b, c, g)
                      : n.style(b, c, d, g);
                  },
                  b,
                  f ? d : void 0,
                  f,
                  null
                );
              };
            }
          );
        }
      ),
      n.fn.extend({
        bind: function (a, b, c) {
          return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
          return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
          return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
          return 1 === arguments.length
            ? this.off(a, "**")
            : this.off(b, a || "**", c);
        },
      }),
      (n.fn.size = function () {
        return this.length;
      }),
      (n.fn.andSelf = n.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return n;
        });
    var mc = a.jQuery,
      nc = a.$;
    return (
      (n.noConflict = function (b) {
        return (
          a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
        );
      }),
      b || (a.jQuery = a.$ = n),
      n
    );
  });
}
// ThreeCanvas.js
var $ = jQuery.noConflict();
var THREE = THREE || {};
if (!self.Int32Array) (self.Int32Array = Array), (self.Float32Array = Array);
THREE.Color = function (a) {
  a !== void 0 && this.setHex(a);
  return this;
};
THREE.Color.prototype = {
  constructor: THREE.Color,
  r: 1,
  g: 1,
  b: 1,
  copy: function (a) {
    this.r = a.r;
    this.g = a.g;
    this.b = a.b;
    return this;
  },
  copyGammaToLinear: function (a) {
    this.r = a.r * a.r;
    this.g = a.g * a.g;
    this.b = a.b * a.b;
    return this;
  },
  copyLinearToGamma: function (a) {
    this.r = Math.sqrt(a.r);
    this.g = Math.sqrt(a.g);
    this.b = Math.sqrt(a.b);
    return this;
  },
  setRGB: function (a, b, c) {
    this.r = a;
    this.g = b;
    this.b = c;
    return this;
  },
  setHSV: function (a, b, c) {
    var d, f, e;
    if (c === 0) this.r = this.g = this.b = 0;
    else
      switch (
        ((d = Math.floor(a * 6)),
        (f = a * 6 - d),
        (a = c * (1 - b)),
        (e = c * (1 - b * f)),
        (b = c * (1 - b * (1 - f))),
        d)
      ) {
        case 1:
          this.r = e;
          this.g = c;
          this.b = a;
          break;
        case 2:
          this.r = a;
          this.g = c;
          this.b = b;
          break;
        case 3:
          this.r = a;
          this.g = e;
          this.b = c;
          break;
        case 4:
          this.r = b;
          this.g = a;
          this.b = c;
          break;
        case 5:
          this.r = c;
          this.g = a;
          this.b = e;
          break;
        case 6:
        case 0:
          (this.r = c), (this.g = b), (this.b = a);
      }
    return this;
  },
  setHex: function (a) {
    a = Math.floor(a);
    this.r = ((a >> 16) & 255) / 255;
    this.g = ((a >> 8) & 255) / 255;
    this.b = (a & 255) / 255;
    return this;
  },
  getHex: function () {
    return (
      (~~(this.r * 255) << 16) ^ (~~(this.g * 255) << 8) ^ ~~(this.b * 255)
    );
  },
  getContextStyle: function () {
    return (
      "rgb(" +
      Math.floor(this.r * 255) +
      "," +
      Math.floor(this.g * 255) +
      "," +
      Math.floor(this.b * 255) +
      ")"
    );
  },
  clone: function () {
    return new THREE.Color().setRGB(this.r, this.g, this.b);
  },
};
THREE.Vector2 = function (a, b) {
  this.x = a || 0;
  this.y = b || 0;
};
THREE.Vector2.prototype = {
  constructor: THREE.Vector2,
  set: function (a, b) {
    this.x = a;
    this.y = b;
    return this;
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    return this;
  },
  clone: function () {
    return new THREE.Vector2(this.x, this.y);
  },
  add: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  },
  addSelf: function (a) {
    this.x += a.x;
    this.y += a.y;
    return this;
  },
  sub: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  },
  subSelf: function (a) {
    this.x -= a.x;
    this.y -= a.y;
    return this;
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    return this;
  },
  divideScalar: function (a) {
    a ? ((this.x /= a), (this.y /= a)) : this.set(0, 0);
    return this;
  },
  negate: function () {
    return this.multiplyScalar(-1);
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y;
  },
  length: function () {
    return Math.sqrt(this.lengthSq());
  },
  normalize: function () {
    return this.divideScalar(this.length());
  },
  distanceTo: function (a) {
    return Math.sqrt(this.distanceToSquared(a));
  },
  distanceToSquared: function (a) {
    var b = this.x - a.x,
      a = this.y - a.y;
    return b * b + a * a;
  },
  setLength: function (a) {
    return this.normalize().multiplyScalar(a);
  },
  equals: function (a) {
    return a.x === this.x && a.y === this.y;
  },
};
THREE.Vector3 = function (a, b, c) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0;
};
THREE.Vector3.prototype = {
  constructor: THREE.Vector3,
  set: function (a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c;
    return this;
  },
  setX: function (a) {
    this.x = a;
    return this;
  },
  setY: function (a) {
    this.y = a;
    return this;
  },
  setZ: function (a) {
    this.z = a;
    return this;
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    return this;
  },
  clone: function () {
    return new THREE.Vector3(this.x, this.y, this.z);
  },
  add: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  },
  addSelf: function (a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this;
  },
  addScalar: function (a) {
    this.x += a;
    this.y += a;
    this.z += a;
    return this;
  },
  sub: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  },
  subSelf: function (a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    return this;
  },
  multiply: function (a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this;
  },
  multiplySelf: function (a) {
    this.x *= a.x;
    this.y *= a.y;
    this.z *= a.z;
    return this;
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this;
  },
  divideSelf: function (a) {
    this.x /= a.x;
    this.y /= a.y;
    this.z /= a.z;
    return this;
  },
  divideScalar: function (a) {
    a
      ? ((this.x /= a), (this.y /= a), (this.z /= a))
      : (this.z = this.y = this.x = 0);
    return this;
  },
  negate: function () {
    return this.multiplyScalar(-1);
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function () {
    return Math.sqrt(this.lengthSq());
  },
  lengthManhattan: function () {
    return this.x + this.y + this.z;
  },
  normalize: function () {
    return this.divideScalar(this.length());
  },
  setLength: function (a) {
    return this.normalize().multiplyScalar(a);
  },
  cross: function (a, b) {
    this.x = a.y * b.z - a.z * b.y;
    this.y = a.z * b.x - a.x * b.z;
    this.z = a.x * b.y - a.y * b.x;
    return this;
  },
  crossSelf: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z;
    this.x = c * a.z - d * a.y;
    this.y = d * a.x - b * a.z;
    this.z = b * a.y - c * a.x;
    return this;
  },
  distanceTo: function (a) {
    return Math.sqrt(this.distanceToSquared(a));
  },
  distanceToSquared: function (a) {
    return new THREE.Vector3().sub(this, a).lengthSq();
  },
  setPositionFromMatrix: function (a) {
    this.x = a.n14;
    this.y = a.n24;
    this.z = a.n34;
  },
  setRotationFromMatrix: function (a) {
    var b = Math.cos(this.y);
    this.y = Math.asin(a.n13);
    Math.abs(b) > 1.0e-5
      ? ((this.x = Math.atan2(-a.n23 / b, a.n33 / b)),
        (this.z = Math.atan2(-a.n12 / b, a.n11 / b)))
      : ((this.x = 0), (this.z = Math.atan2(a.n21, a.n22)));
  },
  isZero: function () {
    return this.lengthSq() < 1.0e-4;
  },
};
THREE.Vector4 = function (a, b, c, d) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0;
  this.w = d !== void 0 ? d : 1;
};
THREE.Vector4.prototype = {
  constructor: THREE.Vector4,
  set: function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.w = d;
    return this;
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    this.w = a.w !== void 0 ? a.w : 1;
  },
  clone: function () {
    return new THREE.Vector4(this.x, this.y, this.z, this.w);
  },
  add: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  },
  addSelf: function (a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    this.w += a.w;
    return this;
  },
  sub: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  },
  subSelf: function (a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    this.w -= a.w;
    return this;
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    this.w *= a;
    return this;
  },
  divideScalar: function (a) {
    a
      ? ((this.x /= a), (this.y /= a), (this.z /= a), (this.w /= a))
      : ((this.z = this.y = this.x = 0), (this.w = 1));
    return this;
  },
  negate: function () {
    return this.multiplyScalar(-1);
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
  },
  lengthSq: function () {
    return this.dot(this);
  },
  length: function () {
    return Math.sqrt(this.lengthSq());
  },
  normalize: function () {
    return this.divideScalar(this.length());
  },
  setLength: function (a) {
    return this.normalize().multiplyScalar(a);
  },
  lerpSelf: function (a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    this.z += (a.z - this.z) * b;
    this.w += (a.w - this.w) * b;
    return this;
  },
};
THREE.Ray = function (a, b) {
  function c(a, b, c) {
    i.sub(c, a);
    p = i.dot(b);
    if (p <= 0) return null;
    k = n.add(a, o.copy(b).multiplyScalar(p));
    return (s = c.distanceTo(k));
  }
  function d(a, b, c, d) {
    i.sub(d, b);
    n.sub(c, b);
    o.sub(a, b);
    K = i.dot(i);
    C = i.dot(n);
    Q = i.dot(o);
    O = n.dot(n);
    w = n.dot(o);
    F = 1 / (K * O - C * C);
    z = (O * Q - C * w) * F;
    D = (K * w - C * Q) * F;
    return z >= 0 && D >= 0 && z + D < 1;
  }
  this.origin = a || new THREE.Vector3();
  this.direction = b || new THREE.Vector3();
  this.intersectScene = function (a) {
    return this.intersectObjects(a.children);
  };
  this.intersectObjects = function (a) {
    var b,
      c,
      d = [];
    b = 0;
    for (c = a.length; b < c; b++)
      Array.prototype.push.apply(d, this.intersectObject(a[b]));
    d.sort(function (a, b) {
      return a.distance - b.distance;
    });
    return d;
  };
  var f = new THREE.Vector3(),
    e = new THREE.Vector3(),
    g = new THREE.Vector3(),
    h = new THREE.Vector3(),
    a = new THREE.Vector3(),
    b = new THREE.Vector3(),
    m = new THREE.Vector3(),
    l = new THREE.Vector3(),
    j = new THREE.Vector3();
  this.intersectObject = function (k) {
    for (var i, o = [], n = 0, W = k.children.length; n < W; n++)
      Array.prototype.push.apply(o, this.intersectObject(k.children[n]));
    if (k instanceof THREE.Particle) {
      n = c(this.origin, this.direction, k.matrixWorld.getPosition());
      if (n === null || n > k.scale.x) return [];
      i = {
        distance: n,
        point: k.position,
        face: null,
        object: k,
      };
      o.push(i);
    } else if (k instanceof THREE.Mesh) {
      n = c(this.origin, this.direction, k.matrixWorld.getPosition());
      if (
        n === null ||
        n >
          k.geometry.boundingSphere.radius *
            Math.max(k.scale.x, Math.max(k.scale.y, k.scale.z))
      )
        return o;
      var p,
        G = k.geometry,
        H = G.vertices,
        I;
      k.matrixRotationWorld.extractRotation(k.matrixWorld);
      n = 0;
      for (W = G.faces.length; n < W; n++)
        if (
          ((i = G.faces[n]),
          a.copy(this.origin),
          b.copy(this.direction),
          (I = k.matrixWorld),
          (m = I.multiplyVector3(m.copy(i.centroid)).subSelf(a)),
          (p = m.dot(b)),
          !(p <= 0) &&
            ((f = I.multiplyVector3(f.copy(H[i.a].position))),
            (e = I.multiplyVector3(e.copy(H[i.b].position))),
            (g = I.multiplyVector3(g.copy(H[i.c].position))),
            i instanceof THREE.Face4 &&
              (h = I.multiplyVector3(h.copy(H[i.d].position))),
            (l = k.matrixRotationWorld.multiplyVector3(l.copy(i.normal))),
            (p = b.dot(l)),
            k.doubleSided || (k.flipSided ? p > 0 : p < 0)))
        )
          if (
            ((p = l.dot(m.sub(f, a)) / p),
            j.add(a, b.multiplyScalar(p)),
            i instanceof THREE.Face3)
          )
            d(j, f, e, g) &&
              ((i = {
                distance: a.distanceTo(j),
                point: j.clone(),
                face: i,
                object: k,
              }),
              o.push(i));
          else if (i instanceof THREE.Face4 && (d(j, f, e, h) || d(j, e, g, h)))
            (i = {
              distance: a.distanceTo(j),
              point: j.clone(),
              face: i,
              object: k,
            }),
              o.push(i);
    }
    return o;
  };
  var i = new THREE.Vector3(),
    n = new THREE.Vector3(),
    o = new THREE.Vector3(),
    p,
    k,
    s,
    K,
    C,
    Q,
    O,
    w,
    F,
    z,
    D;
};
THREE.Rectangle = function () {
  function a() {
    e = d - b;
    g = f - c;
  }
  var b,
    c,
    d,
    f,
    e,
    g,
    h = !0;
  this.getX = function () {
    return b;
  };
  this.getY = function () {
    return c;
  };
  this.getWidth = function () {
    return e;
  };
  this.getHeight = function () {
    return g;
  };
  this.getLeft = function () {
    return b;
  };
  this.getTop = function () {
    return c;
  };
  this.getRight = function () {
    return d;
  };
  this.getBottom = function () {
    return f;
  };
  this.set = function (e, g, j, i) {
    h = !1;
    b = e;
    c = g;
    d = j;
    f = i;
    a();
  };
  this.addPoint = function (e, g) {
    h
      ? ((h = !1), (b = e), (c = g), (d = e), (f = g))
      : ((b = b < e ? b : e),
        (c = c < g ? c : g),
        (d = d > e ? d : e),
        (f = f > g ? f : g));
    a();
  };
  this.add3Points = function (e, g, j, i, n, o) {
    h
      ? ((h = !1),
        (b = e < j ? (e < n ? e : n) : j < n ? j : n),
        (c = g < i ? (g < o ? g : o) : i < o ? i : o),
        (d = e > j ? (e > n ? e : n) : j > n ? j : n),
        (f = g > i ? (g > o ? g : o) : i > o ? i : o))
      : ((b =
          e < j
            ? e < n
              ? e < b
                ? e
                : b
              : n < b
              ? n
              : b
            : j < n
            ? j < b
              ? j
              : b
            : n < b
            ? n
            : b),
        (c =
          g < i
            ? g < o
              ? g < c
                ? g
                : c
              : o < c
              ? o
              : c
            : i < o
            ? i < c
              ? i
              : c
            : o < c
            ? o
            : c),
        (d =
          e > j
            ? e > n
              ? e > d
                ? e
                : d
              : n > d
              ? n
              : d
            : j > n
            ? j > d
              ? j
              : d
            : n > d
            ? n
            : d),
        (f =
          g > i
            ? g > o
              ? g > f
                ? g
                : f
              : o > f
              ? o
              : f
            : i > o
            ? i > f
              ? i
              : f
            : o > f
            ? o
            : f));
    a();
  };
  this.addRectangle = function (e) {
    h
      ? ((h = !1),
        (b = e.getLeft()),
        (c = e.getTop()),
        (d = e.getRight()),
        (f = e.getBottom()))
      : ((b = b < e.getLeft() ? b : e.getLeft()),
        (c = c < e.getTop() ? c : e.getTop()),
        (d = d > e.getRight() ? d : e.getRight()),
        (f = f > e.getBottom() ? f : e.getBottom()));
    a();
  };
  this.inflate = function (e) {
    b -= e;
    c -= e;
    d += e;
    f += e;
    a();
  };
  this.minSelf = function (e) {
    b = b > e.getLeft() ? b : e.getLeft();
    c = c > e.getTop() ? c : e.getTop();
    d = d < e.getRight() ? d : e.getRight();
    f = f < e.getBottom() ? f : e.getBottom();
    a();
  };
  this.intersects = function (a) {
    return (
      Math.min(d, a.getRight()) - Math.max(b, a.getLeft()) >= 0 &&
      Math.min(f, a.getBottom()) - Math.max(c, a.getTop()) >= 0
    );
  };
  this.empty = function () {
    h = !0;
    f = d = c = b = 0;
    a();
  };
  this.isEmpty = function () {
    return h;
  };
};
THREE.Math = {
  clamp: function (a, b, c) {
    return a < b ? b : a > c ? c : a;
  },
  clampBottom: function (a, b) {
    return a < b ? b : a;
  },
  mapLinear: function (a, b, c, d, f) {
    return d + ((a - b) * (f - d)) / (c - b);
  },
  random16: function () {
    return (65280 * Math.random() + 255 * Math.random()) / 65535;
  },
};
THREE.Matrix3 = function () {
  this.m = [];
};
THREE.Matrix3.prototype = {
  constructor: THREE.Matrix3,
  transpose: function () {
    var a,
      b = this.m;
    a = b[1];
    b[1] = b[3];
    b[3] = a;
    a = b[2];
    b[2] = b[6];
    b[6] = a;
    a = b[5];
    b[5] = b[7];
    b[7] = a;
    return this;
  },
  transposeIntoArray: function (a) {
    var b = this.m;
    a[0] = b[0];
    a[1] = b[3];
    a[2] = b[6];
    a[3] = b[1];
    a[4] = b[4];
    a[5] = b[7];
    a[6] = b[2];
    a[7] = b[5];
    a[8] = b[8];
    return this;
  },
};
THREE.Matrix4 = function (a, b, c, d, f, e, g, h, m, l, j, i, n, o, p, k) {
  this.set(
    a !== void 0 ? a : 1,
    b || 0,
    c || 0,
    d || 0,
    f || 0,
    e !== void 0 ? e : 1,
    g || 0,
    h || 0,
    m || 0,
    l || 0,
    j !== void 0 ? j : 1,
    i || 0,
    n || 0,
    o || 0,
    p || 0,
    k !== void 0 ? k : 1
  );
  this.flat = Array(16);
  this.m33 = new THREE.Matrix3();
};
THREE.Matrix4.prototype = {
  constructor: THREE.Matrix4,
  set: function (a, b, c, d, f, e, g, h, m, l, j, i, n, o, p, k) {
    this.n11 = a;
    this.n12 = b;
    this.n13 = c;
    this.n14 = d;
    this.n21 = f;
    this.n22 = e;
    this.n23 = g;
    this.n24 = h;
    this.n31 = m;
    this.n32 = l;
    this.n33 = j;
    this.n34 = i;
    this.n41 = n;
    this.n42 = o;
    this.n43 = p;
    this.n44 = k;
    return this;
  },
  identity: function () {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  copy: function (a) {
    this.set(
      a.n11,
      a.n12,
      a.n13,
      a.n14,
      a.n21,
      a.n22,
      a.n23,
      a.n24,
      a.n31,
      a.n32,
      a.n33,
      a.n34,
      a.n41,
      a.n42,
      a.n43,
      a.n44
    );
    return this;
  },
  lookAt: function (a, b, c) {
    var d = THREE.Matrix4.__v1,
      f = THREE.Matrix4.__v2,
      e = THREE.Matrix4.__v3;
    e.sub(a, b).normalize();
    if (e.length() === 0) e.z = 1;
    d.cross(c, e).normalize();
    d.length() === 0 && ((e.x += 1.0e-4), d.cross(c, e).normalize());
    f.cross(e, d).normalize();
    this.n11 = d.x;
    this.n12 = f.x;
    this.n13 = e.x;
    this.n21 = d.y;
    this.n22 = f.y;
    this.n23 = e.y;
    this.n31 = d.z;
    this.n32 = f.z;
    this.n33 = e.z;
    return this;
  },
  multiply: function (a, b) {
    var c = a.n11,
      d = a.n12,
      f = a.n13,
      e = a.n14,
      g = a.n21,
      h = a.n22,
      m = a.n23,
      l = a.n24,
      j = a.n31,
      i = a.n32,
      n = a.n33,
      o = a.n34,
      p = a.n41,
      k = a.n42,
      s = a.n43,
      K = a.n44,
      C = b.n11,
      Q = b.n12,
      O = b.n13,
      w = b.n14,
      F = b.n21,
      z = b.n22,
      D = b.n23,
      u = b.n24,
      r = b.n31,
      E = b.n32,
      N = b.n33,
      W = b.n34,
      da = b.n41,
      G = b.n42,
      H = b.n43,
      I = b.n44;
    this.n11 = c * C + d * F + f * r + e * da;
    this.n12 = c * Q + d * z + f * E + e * G;
    this.n13 = c * O + d * D + f * N + e * H;
    this.n14 = c * w + d * u + f * W + e * I;
    this.n21 = g * C + h * F + m * r + l * da;
    this.n22 = g * Q + h * z + m * E + l * G;
    this.n23 = g * O + h * D + m * N + l * H;
    this.n24 = g * w + h * u + m * W + l * I;
    this.n31 = j * C + i * F + n * r + o * da;
    this.n32 = j * Q + i * z + n * E + o * G;
    this.n33 = j * O + i * D + n * N + o * H;
    this.n34 = j * w + i * u + n * W + o * I;
    this.n41 = p * C + k * F + s * r + K * da;
    this.n42 = p * Q + k * z + s * E + K * G;
    this.n43 = p * O + k * D + s * N + K * H;
    this.n44 = p * w + k * u + s * W + K * I;
    return this;
  },
  multiplySelf: function (a) {
    return this.multiply(this, a);
  },
  multiplyToArray: function (a, b, c) {
    this.multiply(a, b);
    c[0] = this.n11;
    c[1] = this.n21;
    c[2] = this.n31;
    c[3] = this.n41;
    c[4] = this.n12;
    c[5] = this.n22;
    c[6] = this.n32;
    c[7] = this.n42;
    c[8] = this.n13;
    c[9] = this.n23;
    c[10] = this.n33;
    c[11] = this.n43;
    c[12] = this.n14;
    c[13] = this.n24;
    c[14] = this.n34;
    c[15] = this.n44;
    return this;
  },
  multiplyScalar: function (a) {
    this.n11 *= a;
    this.n12 *= a;
    this.n13 *= a;
    this.n14 *= a;
    this.n21 *= a;
    this.n22 *= a;
    this.n23 *= a;
    this.n24 *= a;
    this.n31 *= a;
    this.n32 *= a;
    this.n33 *= a;
    this.n34 *= a;
    this.n41 *= a;
    this.n42 *= a;
    this.n43 *= a;
    this.n44 *= a;
    return this;
  },
  multiplyVector3: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z,
      f = 1 / (this.n41 * b + this.n42 * c + this.n43 * d + this.n44);
    a.x = (this.n11 * b + this.n12 * c + this.n13 * d + this.n14) * f;
    a.y = (this.n21 * b + this.n22 * c + this.n23 * d + this.n24) * f;
    a.z = (this.n31 * b + this.n32 * c + this.n33 * d + this.n34) * f;
    return a;
  },
  multiplyVector4: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z,
      f = a.w;
    a.x = this.n11 * b + this.n12 * c + this.n13 * d + this.n14 * f;
    a.y = this.n21 * b + this.n22 * c + this.n23 * d + this.n24 * f;
    a.z = this.n31 * b + this.n32 * c + this.n33 * d + this.n34 * f;
    a.w = this.n41 * b + this.n42 * c + this.n43 * d + this.n44 * f;
    return a;
  },
  rotateAxis: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z;
    a.x = b * this.n11 + c * this.n12 + d * this.n13;
    a.y = b * this.n21 + c * this.n22 + d * this.n23;
    a.z = b * this.n31 + c * this.n32 + d * this.n33;
    a.normalize();
    return a;
  },
  crossVector: function (a) {
    var b = new THREE.Vector4();
    b.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
    b.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
    b.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w;
    b.w = a.w
      ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w
      : 1;
    return b;
  },
  determinant: function () {
    var a = this.n11,
      b = this.n12,
      c = this.n13,
      d = this.n14,
      f = this.n21,
      e = this.n22,
      g = this.n23,
      h = this.n24,
      m = this.n31,
      l = this.n32,
      j = this.n33,
      i = this.n34,
      n = this.n41,
      o = this.n42,
      p = this.n43,
      k = this.n44;
    return (
      d * g * l * n -
      c * h * l * n -
      d * e * j * n +
      b * h * j * n +
      c * e * i * n -
      b * g * i * n -
      d * g * m * o +
      c * h * m * o +
      d * f * j * o -
      a * h * j * o -
      c * f * i * o +
      a * g * i * o +
      d * e * m * p -
      b * h * m * p -
      d * f * l * p +
      a * h * l * p +
      b * f * i * p -
      a * e * i * p -
      c * e * m * k +
      b * g * m * k +
      c * f * l * k -
      a * g * l * k -
      b * f * j * k +
      a * e * j * k
    );
  },
  transpose: function () {
    var a;
    a = this.n21;
    this.n21 = this.n12;
    this.n12 = a;
    a = this.n31;
    this.n31 = this.n13;
    this.n13 = a;
    a = this.n32;
    this.n32 = this.n23;
    this.n23 = a;
    a = this.n41;
    this.n41 = this.n14;
    this.n14 = a;
    a = this.n42;
    this.n42 = this.n24;
    this.n24 = a;
    a = this.n43;
    this.n43 = this.n34;
    this.n43 = a;
    return this;
  },
  clone: function () {
    var a = new THREE.Matrix4();
    a.n11 = this.n11;
    a.n12 = this.n12;
    a.n13 = this.n13;
    a.n14 = this.n14;
    a.n21 = this.n21;
    a.n22 = this.n22;
    a.n23 = this.n23;
    a.n24 = this.n24;
    a.n31 = this.n31;
    a.n32 = this.n32;
    a.n33 = this.n33;
    a.n34 = this.n34;
    a.n41 = this.n41;
    a.n42 = this.n42;
    a.n43 = this.n43;
    a.n44 = this.n44;
    return a;
  },
  flatten: function () {
    this.flat[0] = this.n11;
    this.flat[1] = this.n21;
    this.flat[2] = this.n31;
    this.flat[3] = this.n41;
    this.flat[4] = this.n12;
    this.flat[5] = this.n22;
    this.flat[6] = this.n32;
    this.flat[7] = this.n42;
    this.flat[8] = this.n13;
    this.flat[9] = this.n23;
    this.flat[10] = this.n33;
    this.flat[11] = this.n43;
    this.flat[12] = this.n14;
    this.flat[13] = this.n24;
    this.flat[14] = this.n34;
    this.flat[15] = this.n44;
    return this.flat;
  },
  flattenToArray: function (a) {
    a[0] = this.n11;
    a[1] = this.n21;
    a[2] = this.n31;
    a[3] = this.n41;
    a[4] = this.n12;
    a[5] = this.n22;
    a[6] = this.n32;
    a[7] = this.n42;
    a[8] = this.n13;
    a[9] = this.n23;
    a[10] = this.n33;
    a[11] = this.n43;
    a[12] = this.n14;
    a[13] = this.n24;
    a[14] = this.n34;
    a[15] = this.n44;
    return a;
  },
  flattenToArrayOffset: function (a, b) {
    a[b] = this.n11;
    a[b + 1] = this.n21;
    a[b + 2] = this.n31;
    a[b + 3] = this.n41;
    a[b + 4] = this.n12;
    a[b + 5] = this.n22;
    a[b + 6] = this.n32;
    a[b + 7] = this.n42;
    a[b + 8] = this.n13;
    a[b + 9] = this.n23;
    a[b + 10] = this.n33;
    a[b + 11] = this.n43;
    a[b + 12] = this.n14;
    a[b + 13] = this.n24;
    a[b + 14] = this.n34;
    a[b + 15] = this.n44;
    return a;
  },
  setTranslation: function (a, b, c) {
    this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
    return this;
  },
  setScale: function (a, b, c) {
    this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
    return this;
  },
  setRotationX: function (a) {
    var b = Math.cos(a),
      a = Math.sin(a);
    this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
    return this;
  },
  setRotationY: function (a) {
    var b = Math.cos(a),
      a = Math.sin(a);
    this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
    return this;
  },
  setRotationZ: function (a) {
    var b = Math.cos(a),
      a = Math.sin(a);
    this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  setRotationAxis: function (a, b) {
    var c = Math.cos(b),
      d = Math.sin(b),
      f = 1 - c,
      e = a.x,
      g = a.y,
      h = a.z,
      m = f * e,
      l = f * g;
    this.set(
      m * e + c,
      m * g - d * h,
      m * h + d * g,
      0,
      m * g + d * h,
      l * g + c,
      l * h - d * e,
      0,
      m * h - d * g,
      l * h + d * e,
      f * h * h + c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  },
  setPosition: function (a) {
    this.n14 = a.x;
    this.n24 = a.y;
    this.n34 = a.z;
    return this;
  },
  getPosition: function () {
    return THREE.Matrix4.__v1.set(this.n14, this.n24, this.n34);
  },
  getColumnX: function () {
    return THREE.Matrix4.__v1.set(this.n11, this.n21, this.n31);
  },
  getColumnY: function () {
    return THREE.Matrix4.__v1.set(this.n12, this.n22, this.n32);
  },
  getColumnZ: function () {
    return THREE.Matrix4.__v1.set(this.n13, this.n23, this.n33);
  },
  getInverse: function (a) {
    var b = a.n11,
      c = a.n12,
      d = a.n13,
      f = a.n14,
      e = a.n21,
      g = a.n22,
      h = a.n23,
      m = a.n24,
      l = a.n31,
      j = a.n32,
      i = a.n33,
      n = a.n34,
      o = a.n41,
      p = a.n42,
      k = a.n43,
      s = a.n44;
    this.n11 =
      h * n * p - m * i * p + m * j * k - g * n * k - h * j * s + g * i * s;
    this.n12 =
      f * i * p - d * n * p - f * j * k + c * n * k + d * j * s - c * i * s;
    this.n13 =
      d * m * p - f * h * p + f * g * k - c * m * k - d * g * s + c * h * s;
    this.n14 =
      f * h * j - d * m * j - f * g * i + c * m * i + d * g * n - c * h * n;
    this.n21 =
      m * i * o - h * n * o - m * l * k + e * n * k + h * l * s - e * i * s;
    this.n22 =
      d * n * o - f * i * o + f * l * k - b * n * k - d * l * s + b * i * s;
    this.n23 =
      f * h * o - d * m * o - f * e * k + b * m * k + d * e * s - b * h * s;
    this.n24 =
      d * m * l - f * h * l + f * e * i - b * m * i - d * e * n + b * h * n;
    this.n31 =
      g * n * o - m * j * o + m * l * p - e * n * p - g * l * s + e * j * s;
    this.n32 =
      f * j * o - c * n * o - f * l * p + b * n * p + c * l * s - b * j * s;
    this.n33 =
      d * m * o - f * g * o + f * e * p - b * m * p - c * e * s + b * g * s;
    this.n34 =
      f * g * l - c * m * l - f * e * j + b * m * j + c * e * n - b * g * n;
    this.n41 =
      h * j * o - g * i * o - h * l * p + e * i * p + g * l * k - e * j * k;
    this.n42 =
      c * i * o - d * j * o + d * l * p - b * i * p - c * l * k + b * j * k;
    this.n43 =
      d * g * o - c * h * o - d * e * p + b * h * p + c * e * k - b * g * k;
    this.n44 =
      c * h * l - d * g * l + d * e * j - b * h * j - c * e * i + b * g * i;
    this.multiplyScalar(1 / a.determinant());
    return this;
  },
  setRotationFromEuler: function (a, b) {
    var c = a.x,
      d = a.y,
      f = a.z,
      e = Math.cos(c),
      c = Math.sin(c),
      g = Math.cos(d),
      d = Math.sin(d),
      h = Math.cos(f),
      f = Math.sin(f);
    switch (b) {
      case "YXZ":
        var m = g * h,
          l = g * f,
          j = d * h,
          i = d * f;
        this.n11 = m + i * c;
        this.n12 = j * c - l;
        this.n13 = e * d;
        this.n21 = e * f;
        this.n22 = e * h;
        this.n23 = -c;
        this.n31 = l * c - j;
        this.n32 = i + m * c;
        this.n33 = e * g;
        break;
      case "ZXY":
        m = g * h;
        l = g * f;
        j = d * h;
        i = d * f;
        this.n11 = m - i * c;
        this.n12 = -e * f;
        this.n13 = j + l * c;
        this.n21 = l + j * c;
        this.n22 = e * h;
        this.n23 = i - m * c;
        this.n31 = -e * d;
        this.n32 = c;
        this.n33 = e * g;
        break;
      case "ZYX":
        m = e * h;
        l = e * f;
        j = c * h;
        i = c * f;
        this.n11 = g * h;
        this.n12 = j * d - l;
        this.n13 = m * d + i;
        this.n21 = g * f;
        this.n22 = i * d + m;
        this.n23 = l * d - j;
        this.n31 = -d;
        this.n32 = c * g;
        this.n33 = e * g;
        break;
      case "YZX":
        m = e * g;
        l = e * d;
        j = c * g;
        i = c * d;
        this.n11 = g * h;
        this.n12 = i - m * f;
        this.n13 = j * f + l;
        this.n21 = f;
        this.n22 = e * h;
        this.n23 = -c * h;
        this.n31 = -d * h;
        this.n32 = l * f + j;
        this.n33 = m - i * f;
        break;
      case "XZY":
        m = e * g;
        l = e * d;
        j = c * g;
        i = c * d;
        this.n11 = g * h;
        this.n12 = -f;
        this.n13 = d * h;
        this.n21 = m * f + i;
        this.n22 = e * h;
        this.n23 = l * f - j;
        this.n31 = j * f - l;
        this.n32 = c * h;
        this.n33 = i * f + m;
        break;
      default:
        (m = e * h),
          (l = e * f),
          (j = c * h),
          (i = c * f),
          (this.n11 = g * h),
          (this.n12 = -g * f),
          (this.n13 = d),
          (this.n21 = l + j * d),
          (this.n22 = m - i * d),
          (this.n23 = -c * g),
          (this.n31 = i - m * d),
          (this.n32 = j + l * d),
          (this.n33 = e * g);
    }
    return this;
  },
  setRotationFromQuaternion: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z,
      f = a.w,
      e = b + b,
      g = c + c,
      h = d + d,
      a = b * e,
      m = b * g;
    b *= h;
    var l = c * g;
    c *= h;
    d *= h;
    e *= f;
    g *= f;
    f *= h;
    this.n11 = 1 - (l + d);
    this.n12 = m - f;
    this.n13 = b + g;
    this.n21 = m + f;
    this.n22 = 1 - (a + d);
    this.n23 = c - e;
    this.n31 = b - g;
    this.n32 = c + e;
    this.n33 = 1 - (a + l);
    return this;
  },
  scale: function (a) {
    var b = a.x,
      c = a.y,
      a = a.z;
    this.n11 *= b;
    this.n12 *= c;
    this.n13 *= a;
    this.n21 *= b;
    this.n22 *= c;
    this.n23 *= a;
    this.n31 *= b;
    this.n32 *= c;
    this.n33 *= a;
    this.n41 *= b;
    this.n42 *= c;
    this.n43 *= a;
    return this;
  },
  compose: function (a, b, c) {
    var d = THREE.Matrix4.__m1,
      f = THREE.Matrix4.__m2;
    d.identity();
    d.setRotationFromQuaternion(b);
    f.setScale(c.x, c.y, c.z);
    this.multiply(d, f);
    this.n14 = a.x;
    this.n24 = a.y;
    this.n34 = a.z;
    return this;
  },
  decompose: function (a, b, c) {
    var d = THREE.Matrix4.__v1,
      f = THREE.Matrix4.__v2,
      e = THREE.Matrix4.__v3;
    d.set(this.n11, this.n21, this.n31);
    f.set(this.n12, this.n22, this.n32);
    e.set(this.n13, this.n23, this.n33);
    a = a instanceof THREE.Vector3 ? a : new THREE.Vector3();
    b = b instanceof THREE.Quaternion ? b : new THREE.Quaternion();
    c = c instanceof THREE.Vector3 ? c : new THREE.Vector3();
    c.x = d.length();
    c.y = f.length();
    c.z = e.length();
    a.x = this.n14;
    a.y = this.n24;
    a.z = this.n34;
    d = THREE.Matrix4.__m1;
    d.copy(this);
    d.n11 /= c.x;
    d.n21 /= c.x;
    d.n31 /= c.x;
    d.n12 /= c.y;
    d.n22 /= c.y;
    d.n32 /= c.y;
    d.n13 /= c.z;
    d.n23 /= c.z;
    d.n33 /= c.z;
    b.setFromRotationMatrix(d);
    return [a, b, c];
  },
  extractPosition: function (a) {
    this.n14 = a.n14;
    this.n24 = a.n24;
    this.n34 = a.n34;
    return this;
  },
  extractRotation: function (a) {
    var b = THREE.Matrix4.__v1,
      c = 1 / b.set(a.n11, a.n21, a.n31).length(),
      d = 1 / b.set(a.n12, a.n22, a.n32).length(),
      b = 1 / b.set(a.n13, a.n23, a.n33).length();
    this.n11 = a.n11 * c;
    this.n21 = a.n21 * c;
    this.n31 = a.n31 * c;
    this.n12 = a.n12 * d;
    this.n22 = a.n22 * d;
    this.n32 = a.n32 * d;
    this.n13 = a.n13 * b;
    this.n23 = a.n23 * b;
    this.n33 = a.n33 * b;
    return this;
  },
};
THREE.Matrix4.makeInvert3x3 = function (a) {
  var b = a.m33,
    c = b.m,
    d = a.n33 * a.n22 - a.n32 * a.n23,
    f = -a.n33 * a.n21 + a.n31 * a.n23,
    e = a.n32 * a.n21 - a.n31 * a.n22,
    g = -a.n33 * a.n12 + a.n32 * a.n13,
    h = a.n33 * a.n11 - a.n31 * a.n13,
    m = -a.n32 * a.n11 + a.n31 * a.n12,
    l = a.n23 * a.n12 - a.n22 * a.n13,
    j = -a.n23 * a.n11 + a.n21 * a.n13,
    i = a.n22 * a.n11 - a.n21 * a.n12,
    a = a.n11 * d + a.n21 * g + a.n31 * l;
  a === 0 &&
    console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");
  a = 1 / a;
  c[0] = a * d;
  c[1] = a * f;
  c[2] = a * e;
  c[3] = a * g;
  c[4] = a * h;
  c[5] = a * m;
  c[6] = a * l;
  c[7] = a * j;
  c[8] = a * i;
  return b;
};
THREE.Matrix4.makeFrustum = function (a, b, c, d, f, e) {
  var g;
  g = new THREE.Matrix4();
  g.n11 = (2 * f) / (b - a);
  g.n12 = 0;
  g.n13 = (b + a) / (b - a);
  g.n14 = 0;
  g.n21 = 0;
  g.n22 = (2 * f) / (d - c);
  g.n23 = (d + c) / (d - c);
  g.n24 = 0;
  g.n31 = 0;
  g.n32 = 0;
  g.n33 = -(e + f) / (e - f);
  g.n34 = (-2 * e * f) / (e - f);
  g.n41 = 0;
  g.n42 = 0;
  g.n43 = -1;
  g.n44 = 0;
  return g;
};
THREE.Matrix4.makePerspective = function (a, b, c, d) {
  var f,
    a = c * Math.tan((a * Math.PI) / 360);
  f = -a;
  return THREE.Matrix4.makeFrustum(f * b, a * b, f, a, c, d);
};
THREE.Matrix4.makeOrtho = function (a, b, c, d, f, e) {
  var g, h, m, l;
  g = new THREE.Matrix4();
  h = b - a;
  m = c - d;
  l = e - f;
  g.n11 = 2 / h;
  g.n12 = 0;
  g.n13 = 0;
  g.n14 = -((b + a) / h);
  g.n21 = 0;
  g.n22 = 2 / m;
  g.n23 = 0;
  g.n24 = -((c + d) / m);
  g.n31 = 0;
  g.n32 = 0;
  g.n33 = -2 / l;
  g.n34 = -((e + f) / l);
  g.n41 = 0;
  g.n42 = 0;
  g.n43 = 0;
  g.n44 = 1;
  return g;
};
THREE.Matrix4.__v1 = new THREE.Vector3();
THREE.Matrix4.__v2 = new THREE.Vector3();
THREE.Matrix4.__v3 = new THREE.Vector3();
THREE.Matrix4.__m1 = new THREE.Matrix4();
THREE.Matrix4.__m2 = new THREE.Matrix4();
THREE.Object3D = function () {
  this.name = "";
  this.id = THREE.Object3DCount++;
  this.parent = void 0;
  this.children = [];
  this.up = new THREE.Vector3(0, 1, 0);
  this.position = new THREE.Vector3();
  this.rotation = new THREE.Vector3();
  this.eulerOrder = "XYZ";
  this.scale = new THREE.Vector3(1, 1, 1);
  this.flipSided = this.doubleSided = this.dynamic = !1;
  this.renderDepth = null;
  this.rotationAutoUpdate = !0;
  this.matrix = new THREE.Matrix4();
  this.matrixWorld = new THREE.Matrix4();
  this.matrixRotationWorld = new THREE.Matrix4();
  this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
  this.quaternion = new THREE.Quaternion();
  this.useQuaternion = !1;
  this.boundRadius = 0;
  this.boundRadiusScale = 1;
  this.visible = !0;
  this.receiveShadow = this.castShadow = !1;
  this.frustumCulled = !0;
  this._vector = new THREE.Vector3();
};
THREE.Object3D.prototype = {
  constructor: THREE.Object3D,
  translate: function (a, b) {
    this.matrix.rotateAxis(b);
    this.position.addSelf(b.multiplyScalar(a));
  },
  translateX: function (a) {
    this.translate(a, this._vector.set(1, 0, 0));
  },
  translateY: function (a) {
    this.translate(a, this._vector.set(0, 1, 0));
  },
  translateZ: function (a) {
    this.translate(a, this._vector.set(0, 0, 1));
  },
  lookAt: function (a) {
    this.matrix.lookAt(a, this.position, this.up);
    this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix);
  },
  add: function (a) {
    if (this.children.indexOf(a) === -1) {
      a.parent !== void 0 && a.parent.remove(a);
      a.parent = this;
      this.children.push(a);
      for (var b = this; b.parent !== void 0; ) b = b.parent;
      b !== void 0 && b instanceof THREE.Scene && b.addObject(a);
    }
  },
  remove: function (a) {
    var b = this.children.indexOf(a);
    if (b !== -1) {
      a.parent = void 0;
      this.children.splice(b, 1);
      for (b = this; b.parent !== void 0; ) b = b.parent;
      b !== void 0 && b instanceof THREE.Scene && b.removeObject(a);
    }
  },
  getChildByName: function (a, b) {
    var c, d, f;
    c = 0;
    for (d = this.children.length; c < d; c++) {
      f = this.children[c];
      if (f.name === a) return f;
      if (b && ((f = f.getChildByName(a, b)), f !== void 0)) return f;
    }
  },
  updateMatrix: function () {
    this.matrix.setPosition(this.position);
    this.useQuaternion
      ? this.matrix.setRotationFromQuaternion(this.quaternion)
      : this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder);
    if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1)
      this.matrix.scale(this.scale),
        (this.boundRadiusScale = Math.max(
          this.scale.x,
          Math.max(this.scale.y, this.scale.z)
        ));
    this.matrixWorldNeedsUpdate = !0;
  },
  updateMatrixWorld: function (a) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || a)
      this.parent
        ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix)
        : this.matrixWorld.copy(this.matrix),
        (this.matrixWorldNeedsUpdate = !1),
        (a = !0);
    for (var b = 0, c = this.children.length; b < c; b++)
      this.children[b].updateMatrixWorld(a);
  },
};
THREE.Object3DCount = 0;
THREE.Projector = function () {
  function a() {
    var a = (g[e] = g[e] || new THREE.RenderableObject());
    e++;
    return a;
  }
  function b() {
    var a = (l[m] = l[m] || new THREE.RenderableVertex());
    m++;
    return a;
  }
  function c(a, b) {
    return b.z - a.z;
  }
  function d(a, b) {
    var c = 0,
      d = 1,
      e = a.z + a.w,
      f = b.z + b.w,
      g = -a.z + a.w,
      h = -b.z + b.w;
    return e >= 0 && f >= 0 && g >= 0 && h >= 0
      ? !0
      : (e < 0 && f < 0) || (g < 0 && h < 0)
      ? !1
      : (e < 0
          ? (c = Math.max(c, e / (e - f)))
          : f < 0 && (d = Math.min(d, e / (e - f))),
        g < 0
          ? (c = Math.max(c, g / (g - h)))
          : h < 0 && (d = Math.min(d, g / (g - h))),
        d < c ? !1 : (a.lerpSelf(b, c), b.lerpSelf(a, 1 - d), !0));
  }
  var f,
    e,
    g = [],
    h,
    m,
    l = [],
    j,
    i,
    n = [],
    o,
    p = [],
    k,
    s,
    K = [],
    C,
    Q,
    O = [],
    w = {
      objects: [],
      sprites: [],
      lights: [],
      elements: [],
    },
    F = new THREE.Vector3(),
    z = new THREE.Vector4(),
    D = new THREE.Matrix4(),
    u = new THREE.Matrix4(),
    r = [
      new THREE.Vector4(),
      new THREE.Vector4(),
      new THREE.Vector4(),
      new THREE.Vector4(),
      new THREE.Vector4(),
      new THREE.Vector4(),
    ],
    E = new THREE.Vector4(),
    N = new THREE.Vector4();
  this.computeFrustum = function (a) {
    r[0].set(a.n41 - a.n11, a.n42 - a.n12, a.n43 - a.n13, a.n44 - a.n14);
    r[1].set(a.n41 + a.n11, a.n42 + a.n12, a.n43 + a.n13, a.n44 + a.n14);
    r[2].set(a.n41 + a.n21, a.n42 + a.n22, a.n43 + a.n23, a.n44 + a.n24);
    r[3].set(a.n41 - a.n21, a.n42 - a.n22, a.n43 - a.n23, a.n44 - a.n24);
    r[4].set(a.n41 - a.n31, a.n42 - a.n32, a.n43 - a.n33, a.n44 - a.n34);
    r[5].set(a.n41 + a.n31, a.n42 + a.n32, a.n43 + a.n33, a.n44 + a.n34);
    for (a = 0; a < 6; a++) {
      var b = r[a];
      b.divideScalar(Math.sqrt(b.x * b.x + b.y * b.y + b.z * b.z));
    }
  };
  this.projectVector = function (a, b) {
    b.matrixWorldInverse.getInverse(b.matrixWorld);
    D.multiply(b.projectionMatrix, b.matrixWorldInverse);
    D.multiplyVector3(a);
    return a;
  };
  this.unprojectVector = function (a, b) {
    b.projectionMatrixInverse.getInverse(b.projectionMatrix);
    D.multiply(b.matrixWorld, b.projectionMatrixInverse);
    D.multiplyVector3(a);
    return a;
  };
  this.pickingRay = function (a, b) {
    var c;
    a.z = -1;
    c = new THREE.Vector3(a.x, a.y, 1);
    this.unprojectVector(a, b);
    this.unprojectVector(c, b);
    c.subSelf(a).normalize();
    return new THREE.Ray(a, c);
  };
  this.projectGraph = function (b, d) {
    e = 0;
    w.objects.length = 0;
    w.sprites.length = 0;
    w.lights.length = 0;
    var g = function (b) {
      if (b.visible !== !1) {
        var c;
        if ((c = b instanceof THREE.Mesh || b instanceof THREE.Line))
          if (!(c = b.frustumCulled === !1))
            a: {
              for (
                var d = b.matrixWorld,
                  e =
                    -b.geometry.boundingSphere.radius *
                    Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z)),
                  h = 0;
                h < 6;
                h++
              )
                if (
                  ((c =
                    r[h].x * d.n14 + r[h].y * d.n24 + r[h].z * d.n34 + r[h].w),
                  c <= e)
                ) {
                  c = !1;
                  break a;
                }
              c = !0;
            }
        c
          ? (D.multiplyVector3(F.copy(b.position)),
            (f = a()),
            (f.object = b),
            (f.z = F.z),
            w.objects.push(f))
          : b instanceof THREE.Sprite || b instanceof THREE.Particle
          ? (D.multiplyVector3(F.copy(b.position)),
            (f = a()),
            (f.object = b),
            (f.z = F.z),
            w.sprites.push(f))
          : b instanceof THREE.Light && w.lights.push(b);
        c = 0;
        for (d = b.children.length; c < d; c++) g(b.children[c]);
      }
    };
    g(b);
    d && w.objects.sort(c);
    return w;
  };
  this.projectScene = function (a, e, f) {
    var g = e.near,
      r = e.far,
      F,
      L,
      B,
      S,
      v,
      R,
      P,
      V,
      J,
      t,
      A,
      x,
      y,
      M,
      la,
      fa;
    Q = s = o = i = 0;
    w.elements.length = 0;
    e.parent === void 0 &&
      (console.warn(
        "DEPRECATED: Camera hasn't been added to a Scene. Adding it..."
      ),
      a.add(e));
    a.updateMatrixWorld();
    e.matrixWorldInverse.getInverse(e.matrixWorld);
    D.multiply(e.projectionMatrix, e.matrixWorldInverse);
    this.computeFrustum(D);
    w = this.projectGraph(a, !1);
    a = 0;
    for (F = w.objects.length; a < F; a++)
      if (
        ((J = w.objects[a].object),
        (t = J.matrixWorld),
        (x = J.material),
        (m = 0),
        J instanceof THREE.Mesh)
      ) {
        A = J.geometry;
        y = J.geometry.materials;
        S = A.vertices;
        M = A.faces;
        la = A.faceVertexUvs;
        A = J.matrixRotationWorld.extractRotation(t);
        L = 0;
        for (B = S.length; L < B; L++)
          (h = b()),
            h.positionWorld.copy(S[L].position),
            t.multiplyVector3(h.positionWorld),
            h.positionScreen.copy(h.positionWorld),
            D.multiplyVector4(h.positionScreen),
            (h.positionScreen.x /= h.positionScreen.w),
            (h.positionScreen.y /= h.positionScreen.w),
            (h.visible = h.positionScreen.z > g && h.positionScreen.z < r);
        S = 0;
        for (L = M.length; S < L; S++) {
          B = M[S];
          if (B instanceof THREE.Face3)
            if (
              ((v = l[B.a]),
              (R = l[B.b]),
              (P = l[B.c]),
              v.visible &&
                R.visible &&
                P.visible &&
                (J.doubleSided ||
                  J.flipSided !=
                    (P.positionScreen.x - v.positionScreen.x) *
                      (R.positionScreen.y - v.positionScreen.y) -
                      (P.positionScreen.y - v.positionScreen.y) *
                        (R.positionScreen.x - v.positionScreen.x) <
                      0))
            )
              (V = n[i] = n[i] || new THREE.RenderableFace3()),
                i++,
                (j = V),
                j.v1.copy(v),
                j.v2.copy(R),
                j.v3.copy(P);
            else continue;
          else if (B instanceof THREE.Face4)
            if (
              ((v = l[B.a]),
              (R = l[B.b]),
              (P = l[B.c]),
              (V = l[B.d]),
              v.visible &&
                R.visible &&
                P.visible &&
                V.visible &&
                (J.doubleSided ||
                  J.flipSided !=
                    ((V.positionScreen.x - v.positionScreen.x) *
                      (R.positionScreen.y - v.positionScreen.y) -
                      (V.positionScreen.y - v.positionScreen.y) *
                        (R.positionScreen.x - v.positionScreen.x) <
                      0 ||
                      (R.positionScreen.x - P.positionScreen.x) *
                        (V.positionScreen.y - P.positionScreen.y) -
                        (R.positionScreen.y - P.positionScreen.y) *
                          (V.positionScreen.x - P.positionScreen.x) <
                        0)))
            )
              (fa = p[o] = p[o] || new THREE.RenderableFace4()),
                o++,
                (j = fa),
                j.v1.copy(v),
                j.v2.copy(R),
                j.v3.copy(P),
                j.v4.copy(V);
            else continue;
          j.normalWorld.copy(B.normal);
          A.multiplyVector3(j.normalWorld);
          j.centroidWorld.copy(B.centroid);
          t.multiplyVector3(j.centroidWorld);
          j.centroidScreen.copy(j.centroidWorld);
          D.multiplyVector3(j.centroidScreen);
          P = B.vertexNormals;
          v = 0;
          for (R = P.length; v < R; v++)
            (V = j.vertexNormalsWorld[v]), V.copy(P[v]), A.multiplyVector3(V);
          v = 0;
          for (R = la.length; v < R; v++)
            if ((fa = la[v][S])) {
              P = 0;
              for (V = fa.length; P < V; P++) j.uvs[v][P] = fa[P];
            }
          j.material = x;
          j.faceMaterial = B.materialIndex !== null ? y[B.materialIndex] : null;
          j.z = j.centroidScreen.z;
          w.elements.push(j);
        }
      } else if (J instanceof THREE.Line) {
        u.multiply(D, t);
        S = J.geometry.vertices;
        v = b();
        v.positionScreen.copy(S[0].position);
        u.multiplyVector4(v.positionScreen);
        L = 1;
        for (B = S.length; L < B; L++)
          if (
            ((v = b()),
            v.positionScreen.copy(S[L].position),
            u.multiplyVector4(v.positionScreen),
            (R = l[m - 2]),
            E.copy(v.positionScreen),
            N.copy(R.positionScreen),
            d(E, N))
          )
            E.multiplyScalar(1 / E.w),
              N.multiplyScalar(1 / N.w),
              (J = K[s] = K[s] || new THREE.RenderableLine()),
              s++,
              (k = J),
              k.v1.positionScreen.copy(E),
              k.v2.positionScreen.copy(N),
              (k.z = Math.max(E.z, N.z)),
              (k.material = x),
              w.elements.push(k);
      }
    a = 0;
    for (F = w.sprites.length; a < F; a++)
      if (
        ((J = w.sprites[a].object),
        (t = J.matrixWorld),
        J instanceof THREE.Particle &&
          (z.set(t.n14, t.n24, t.n34, 1),
          D.multiplyVector4(z),
          (z.z /= z.w),
          z.z > 0 && z.z < 1))
      )
        (g = O[Q] = O[Q] || new THREE.RenderableParticle()),
          Q++,
          (C = g),
          (C.x = z.x / z.w),
          (C.y = z.y / z.w),
          (C.z = z.z),
          (C.rotation = J.rotation.z),
          (C.scale.x =
            J.scale.x *
            Math.abs(
              C.x -
                (z.x + e.projectionMatrix.n11) / (z.w + e.projectionMatrix.n14)
            )),
          (C.scale.y =
            J.scale.y *
            Math.abs(
              C.y -
                (z.y + e.projectionMatrix.n22) / (z.w + e.projectionMatrix.n24)
            )),
          (C.material = J.material),
          w.elements.push(C);
    f && w.elements.sort(c);
    return w;
  };
};
THREE.Quaternion = function (a, b, c, d) {
  this.set(a || 0, b || 0, c || 0, d !== void 0 ? d : 1);
};
THREE.Quaternion.prototype = {
  constructor: THREE.Quaternion,
  set: function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.w = d;
    return this;
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    this.w = a.w;
    return this;
  },
  setFromEuler: function (a) {
    var b = Math.PI / 360,
      c = a.x * b,
      d = a.y * b,
      f = a.z * b,
      a = Math.cos(d),
      d = Math.sin(d),
      b = Math.cos(-f),
      f = Math.sin(-f),
      e = Math.cos(c),
      c = Math.sin(c),
      g = a * b,
      h = d * f;
    this.w = g * e - h * c;
    this.x = g * c + h * e;
    this.y = d * b * e + a * f * c;
    this.z = a * f * e - d * b * c;
    return this;
  },
  setFromAxisAngle: function (a, b) {
    var c = b / 2,
      d = Math.sin(c);
    this.x = a.x * d;
    this.y = a.y * d;
    this.z = a.z * d;
    this.w = Math.cos(c);
    return this;
  },
  setFromRotationMatrix: function (a) {
    var b = Math.pow(a.determinant(), 1 / 3);
    this.w = Math.sqrt(Math.max(0, b + a.n11 + a.n22 + a.n33)) / 2;
    this.x = Math.sqrt(Math.max(0, b + a.n11 - a.n22 - a.n33)) / 2;
    this.y = Math.sqrt(Math.max(0, b - a.n11 + a.n22 - a.n33)) / 2;
    this.z = Math.sqrt(Math.max(0, b - a.n11 - a.n22 + a.n33)) / 2;
    this.x = a.n32 - a.n23 < 0 ? -Math.abs(this.x) : Math.abs(this.x);
    this.y = a.n13 - a.n31 < 0 ? -Math.abs(this.y) : Math.abs(this.y);
    this.z = a.n21 - a.n12 < 0 ? -Math.abs(this.z) : Math.abs(this.z);
    this.normalize();
    return this;
  },
  calculateW: function () {
    this.w = -Math.sqrt(
      Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z)
    );
    return this;
  },
  inverse: function () {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
  },
  length: function () {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  },
  normalize: function () {
    var a = Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
    a === 0
      ? (this.w = this.z = this.y = this.x = 0)
      : ((a = 1 / a),
        (this.x *= a),
        (this.y *= a),
        (this.z *= a),
        (this.w *= a));
    return this;
  },
  multiplySelf: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z,
      f = this.w,
      e = a.x,
      g = a.y,
      h = a.z,
      a = a.w;
    this.x = b * a + f * e + c * h - d * g;
    this.y = c * a + f * g + d * e - b * h;
    this.z = d * a + f * h + b * g - c * e;
    this.w = f * a - b * e - c * g - d * h;
    return this;
  },
  multiply: function (a, b) {
    this.x = a.x * b.w + a.y * b.z - a.z * b.y + a.w * b.x;
    this.y = -a.x * b.z + a.y * b.w + a.z * b.x + a.w * b.y;
    this.z = a.x * b.y - a.y * b.x + a.z * b.w + a.w * b.z;
    this.w = -a.x * b.x - a.y * b.y - a.z * b.z + a.w * b.w;
    return this;
  },
  multiplyVector3: function (a, b) {
    b || (b = a);
    var c = a.x,
      d = a.y,
      f = a.z,
      e = this.x,
      g = this.y,
      h = this.z,
      m = this.w,
      l = m * c + g * f - h * d,
      j = m * d + h * c - e * f,
      i = m * f + e * d - g * c,
      c = -e * c - g * d - h * f;
    b.x = l * m + c * -e + j * -h - i * -g;
    b.y = j * m + c * -g + i * -e - l * -h;
    b.z = i * m + c * -h + l * -g - j * -e;
    return b;
  },
};
THREE.Quaternion.slerp = function (a, b, c, d) {
  var f = a.w * b.w + a.x * b.x + a.y * b.y + a.z * b.z;
  f < 0
    ? ((c.w = -b.w), (c.x = -b.x), (c.y = -b.y), (c.z = -b.z), (f = -f))
    : c.copy(b);
  if (Math.abs(f) >= 1)
    return (c.w = a.w), (c.x = a.x), (c.y = a.y), (c.z = a.z), c;
  var e = Math.acos(f),
    f = Math.sqrt(1 - f * f);
  if (Math.abs(f) < 0.001)
    return (
      (c.w = 0.5 * (a.w + b.w)),
      (c.x = 0.5 * (a.x + b.x)),
      (c.y = 0.5 * (a.y + b.y)),
      (c.z = 0.5 * (a.z + b.z)),
      c
    );
  b = Math.sin((1 - d) * e) / f;
  d = Math.sin(d * e) / f;
  c.w = a.w * b + c.w * d;
  c.x = a.x * b + c.x * d;
  c.y = a.y * b + c.y * d;
  c.z = a.z * b + c.z * d;
  return c;
};
THREE.Vertex = function (a) {
  this.position = a || new THREE.Vector3();
};
THREE.Face3 = function (a, b, c, d, f, e) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3();
  this.vertexNormals = d instanceof Array ? d : [];
  this.color = f instanceof THREE.Color ? f : new THREE.Color();
  this.vertexColors = f instanceof Array ? f : [];
  this.vertexTangents = [];
  this.materialIndex = e;
  this.centroid = new THREE.Vector3();
};
THREE.Face4 = function (a, b, c, d, f, e, g) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.normal = f instanceof THREE.Vector3 ? f : new THREE.Vector3();
  this.vertexNormals = f instanceof Array ? f : [];
  this.color = e instanceof THREE.Color ? e : new THREE.Color();
  this.vertexColors = e instanceof Array ? e : [];
  this.vertexTangents = [];
  this.materialIndex = g;
  this.centroid = new THREE.Vector3();
};
THREE.UV = function (a, b) {
  this.u = a || 0;
  this.v = b || 0;
};
THREE.UV.prototype = {
  constructor: THREE.UV,
  set: function (a, b) {
    this.u = a;
    this.v = b;
    return this;
  },
  copy: function (a) {
    this.u = a.u;
    this.v = a.v;
    return this;
  },
  clone: function () {
    return new THREE.UV(this.u, this.v);
  },
};
THREE.Geometry = function () {
  this.id = THREE.GeometryCount++;
  this.vertices = [];
  this.colors = [];
  this.materials = [];
  this.faces = [];
  this.faceUvs = [[]];
  this.faceVertexUvs = [[]];
  this.morphTargets = [];
  this.morphColors = [];
  this.skinWeights = [];
  this.skinIndices = [];
  this.boundingSphere = this.boundingBox = null;
  this.dynamic = this.hasTangents = !1;
};
THREE.Geometry.prototype = {
  constructor: THREE.Geometry,
  applyMatrix: function (a) {
    var b = new THREE.Matrix4();
    b.extractRotation(a, new THREE.Vector3(1, 1, 1));
    for (var c = 0, d = this.vertices.length; c < d; c++)
      a.multiplyVector3(this.vertices[c].position);
    c = 0;
    for (d = this.faces.length; c < d; c++) {
      var f = this.faces[c];
      b.multiplyVector3(f.normal);
      for (var e = 0, g = f.vertexNormals.length; e < g; e++)
        b.multiplyVector3(f.vertexNormals[e]);
      a.multiplyVector3(f.centroid);
    }
  },
  computeCentroids: function () {
    var a, b, c;
    a = 0;
    for (b = this.faces.length; a < b; a++)
      (c = this.faces[a]),
        c.centroid.set(0, 0, 0),
        c instanceof THREE.Face3
          ? (c.centroid.addSelf(this.vertices[c.a].position),
            c.centroid.addSelf(this.vertices[c.b].position),
            c.centroid.addSelf(this.vertices[c.c].position),
            c.centroid.divideScalar(3))
          : c instanceof THREE.Face4 &&
            (c.centroid.addSelf(this.vertices[c.a].position),
            c.centroid.addSelf(this.vertices[c.b].position),
            c.centroid.addSelf(this.vertices[c.c].position),
            c.centroid.addSelf(this.vertices[c.d].position),
            c.centroid.divideScalar(4));
  },
  computeFaceNormals: function () {
    var a,
      b,
      c,
      d,
      f,
      e,
      g = new THREE.Vector3(),
      h = new THREE.Vector3();
    a = 0;
    for (b = this.faces.length; a < b; a++)
      (c = this.faces[a]),
        (d = this.vertices[c.a]),
        (f = this.vertices[c.b]),
        (e = this.vertices[c.c]),
        g.sub(e.position, f.position),
        h.sub(d.position, f.position),
        g.crossSelf(h),
        g.isZero() || g.normalize(),
        c.normal.copy(g);
  },
  computeVertexNormals: function () {
    var a, b, c, d;
    if (this.__tmpVertices === void 0) {
      d = this.__tmpVertices = Array(this.vertices.length);
      a = 0;
      for (b = this.vertices.length; a < b; a++) d[a] = new THREE.Vector3();
      a = 0;
      for (b = this.faces.length; a < b; a++)
        if (((c = this.faces[a]), c instanceof THREE.Face3))
          c.vertexNormals = [
            new THREE.Vector3(),
            new THREE.Vector3(),
            new THREE.Vector3(),
          ];
        else if (c instanceof THREE.Face4)
          c.vertexNormals = [
            new THREE.Vector3(),
            new THREE.Vector3(),
            new THREE.Vector3(),
            new THREE.Vector3(),
          ];
    } else {
      d = this.__tmpVertices;
      a = 0;
      for (b = this.vertices.length; a < b; a++) d[a].set(0, 0, 0);
    }
    a = 0;
    for (b = this.faces.length; a < b; a++)
      (c = this.faces[a]),
        c instanceof THREE.Face3
          ? (d[c.a].addSelf(c.normal),
            d[c.b].addSelf(c.normal),
            d[c.c].addSelf(c.normal))
          : c instanceof THREE.Face4 &&
            (d[c.a].addSelf(c.normal),
            d[c.b].addSelf(c.normal),
            d[c.c].addSelf(c.normal),
            d[c.d].addSelf(c.normal));
    a = 0;
    for (b = this.vertices.length; a < b; a++) d[a].normalize();
    a = 0;
    for (b = this.faces.length; a < b; a++)
      (c = this.faces[a]),
        c instanceof THREE.Face3
          ? (c.vertexNormals[0].copy(d[c.a]),
            c.vertexNormals[1].copy(d[c.b]),
            c.vertexNormals[2].copy(d[c.c]))
          : c instanceof THREE.Face4 &&
            (c.vertexNormals[0].copy(d[c.a]),
            c.vertexNormals[1].copy(d[c.b]),
            c.vertexNormals[2].copy(d[c.c]),
            c.vertexNormals[3].copy(d[c.d]));
  },
  computeTangents: function () {
    function a(a, b, c, d, e, f, D) {
      h = a.vertices[b].position;
      m = a.vertices[c].position;
      l = a.vertices[d].position;
      j = g[e];
      i = g[f];
      n = g[D];
      o = m.x - h.x;
      p = l.x - h.x;
      k = m.y - h.y;
      s = l.y - h.y;
      K = m.z - h.z;
      C = l.z - h.z;
      Q = i.u - j.u;
      O = n.u - j.u;
      w = i.v - j.v;
      F = n.v - j.v;
      z = 1 / (Q * F - O * w);
      E.set((F * o - w * p) * z, (F * k - w * s) * z, (F * K - w * C) * z);
      N.set((Q * p - O * o) * z, (Q * s - O * k) * z, (Q * C - O * K) * z);
      u[b].addSelf(E);
      u[c].addSelf(E);
      u[d].addSelf(E);
      r[b].addSelf(N);
      r[c].addSelf(N);
      r[d].addSelf(N);
    }
    var b,
      c,
      d,
      f,
      e,
      g,
      h,
      m,
      l,
      j,
      i,
      n,
      o,
      p,
      k,
      s,
      K,
      C,
      Q,
      O,
      w,
      F,
      z,
      D,
      u = [],
      r = [],
      E = new THREE.Vector3(),
      N = new THREE.Vector3(),
      W = new THREE.Vector3(),
      da = new THREE.Vector3(),
      G = new THREE.Vector3();
    b = 0;
    for (c = this.vertices.length; b < c; b++)
      (u[b] = new THREE.Vector3()), (r[b] = new THREE.Vector3());
    b = 0;
    for (c = this.faces.length; b < c; b++)
      (e = this.faces[b]),
        (g = this.faceVertexUvs[0][b]),
        e instanceof THREE.Face3
          ? a(this, e.a, e.b, e.c, 0, 1, 2)
          : e instanceof THREE.Face4 &&
            (a(this, e.a, e.b, e.c, 0, 1, 2), a(this, e.a, e.b, e.d, 0, 1, 3));
    var H = ["a", "b", "c", "d"];
    b = 0;
    for (c = this.faces.length; b < c; b++) {
      e = this.faces[b];
      for (d = 0; d < e.vertexNormals.length; d++)
        G.copy(e.vertexNormals[d]),
          (f = e[H[d]]),
          (D = u[f]),
          W.copy(D),
          W.subSelf(G.multiplyScalar(G.dot(D))).normalize(),
          da.cross(e.vertexNormals[d], D),
          (f = da.dot(r[f])),
          (f = f < 0 ? -1 : 1),
          (e.vertexTangents[d] = new THREE.Vector4(W.x, W.y, W.z, f));
    }
    this.hasTangents = !0;
  },
  computeBoundingBox: function () {
    var a;
    if (this.vertices.length > 0) {
      this.boundingBox = {
        x: [this.vertices[0].position.x, this.vertices[0].position.x],
        y: [this.vertices[0].position.y, this.vertices[0].position.y],
        z: [this.vertices[0].position.z, this.vertices[0].position.z],
      };
      for (var b = 1, c = this.vertices.length; b < c; b++) {
        a = this.vertices[b];
        if (a.position.x < this.boundingBox.x[0])
          this.boundingBox.x[0] = a.position.x;
        else if (a.position.x > this.boundingBox.x[1])
          this.boundingBox.x[1] = a.position.x;
        if (a.position.y < this.boundingBox.y[0])
          this.boundingBox.y[0] = a.position.y;
        else if (a.position.y > this.boundingBox.y[1])
          this.boundingBox.y[1] = a.position.y;
        if (a.position.z < this.boundingBox.z[0])
          this.boundingBox.z[0] = a.position.z;
        else if (a.position.z > this.boundingBox.z[1])
          this.boundingBox.z[1] = a.position.z;
      }
    }
  },
  computeBoundingSphere: function () {
    for (var a = 0, b = 0, c = this.vertices.length; b < c; b++)
      a = Math.max(a, this.vertices[b].position.length());
    this.boundingSphere = {
      radius: a,
    };
  },
  mergeVertices: function () {
    var a = {},
      b = [],
      c = [],
      d,
      f = Math.pow(10, 4),
      e,
      g;
    e = 0;
    for (g = this.vertices.length; e < g; e++)
      (d = this.vertices[e].position),
        (d = [
          Math.round(d.x * f),
          Math.round(d.y * f),
          Math.round(d.z * f),
        ].join("_")),
        a[d] === void 0
          ? ((a[d] = e), b.push(this.vertices[e]), (c[e] = b.length - 1))
          : (c[e] = c[a[d]]);
    e = 0;
    for (g = this.faces.length; e < g; e++)
      if (((a = this.faces[e]), a instanceof THREE.Face3))
        (a.a = c[a.a]), (a.b = c[a.b]), (a.c = c[a.c]);
      else if (a instanceof THREE.Face4)
        (a.a = c[a.a]), (a.b = c[a.b]), (a.c = c[a.c]), (a.d = c[a.d]);
    this.vertices = b;
  },
};
THREE.GeometryCount = 0;
THREE.Camera = function () {
  if (arguments.length)
    return (
      console.warn(
        "DEPRECATED: Camera() is now PerspectiveCamera() or OrthographicCamera()."
      ),
      new THREE.PerspectiveCamera(
        arguments[0],
        arguments[1],
        arguments[2],
        arguments[3]
      )
    );
  THREE.Object3D.call(this);
  this.matrixWorldInverse = new THREE.Matrix4();
  this.projectionMatrix = new THREE.Matrix4();
  this.projectionMatrixInverse = new THREE.Matrix4();
};
THREE.Camera.prototype = new THREE.Object3D();
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.lookAt = function (a) {
  this.matrix.lookAt(this.position, a, this.up);
  this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix);
};
THREE.OrthographicCamera = function (a, b, c, d, f, e) {
  THREE.Camera.call(this);
  this.left = a;
  this.right = b;
  this.top = c;
  this.bottom = d;
  this.near = f !== void 0 ? f : 0.1;
  this.far = e !== void 0 ? e : 2e3;
  this.updateProjectionMatrix();
};
THREE.OrthographicCamera.prototype = new THREE.Camera();
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
  this.projectionMatrix = THREE.Matrix4.makeOrtho(
    this.left,
    this.right,
    this.top,
    this.bottom,
    this.near,
    this.far
  );
};
THREE.PerspectiveCamera = function (a, b, c, d) {
  THREE.Camera.call(this);
  this.fov = a !== void 0 ? a : 50;
  this.aspect = b !== void 0 ? b : 1;
  this.near = c !== void 0 ? c : 0.1;
  this.far = d !== void 0 ? d : 2e3;
  this.updateProjectionMatrix();
};
THREE.PerspectiveCamera.prototype = new THREE.Camera();
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
  this.fov = 2 * Math.atan((b !== void 0 ? b : 43.25) / (a * 2));
  this.fov *= 180 / Math.PI;
  this.updateProjectionMatrix();
};
THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, f, e) {
  this.fullWidth = a;
  this.fullHeight = b;
  this.x = c;
  this.y = d;
  this.width = f;
  this.height = e;
  this.updateProjectionMatrix();
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
  if (this.fullWidth) {
    var a = this.fullWidth / this.fullHeight,
      b = Math.tan((this.fov * Math.PI) / 360) * this.near,
      c = -b,
      d = a * c,
      a = Math.abs(a * b - d),
      c = Math.abs(b - c);
    this.projectionMatrix = THREE.Matrix4.makeFrustum(
      d + (this.x * a) / this.fullWidth,
      d + ((this.x + this.width) * a) / this.fullWidth,
      b - ((this.y + this.height) * c) / this.fullHeight,
      b - (this.y * c) / this.fullHeight,
      this.near,
      this.far
    );
  } else
    this.projectionMatrix = THREE.Matrix4.makePerspective(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
};
THREE.Light = function (a) {
  THREE.Object3D.call(this);
  this.color = new THREE.Color(a);
};
THREE.Light.prototype = new THREE.Object3D();
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function (a) {
  THREE.Light.call(this, a);
};
THREE.AmbientLight.prototype = new THREE.Light();
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function (a, b, c) {
  THREE.Light.call(this, a);
  this.position = new THREE.Vector3(0, 1, 0);
  this.intensity = b !== void 0 ? b : 1;
  this.distance = c !== void 0 ? c : 0;
};
THREE.DirectionalLight.prototype = new THREE.Light();
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function (a, b, c) {
  THREE.Light.call(this, a);
  this.position = new THREE.Vector3(0, 0, 0);
  this.intensity = b !== void 0 ? b : 1;
  this.distance = c !== void 0 ? c : 0;
};
THREE.PointLight.prototype = new THREE.Light();
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.Material = function (a) {
  this.name = "";
  this.id = THREE.MaterialCount++;
  a = a || {};
  this.opacity = a.opacity !== void 0 ? a.opacity : 1;
  this.transparent = a.transparent !== void 0 ? a.transparent : !1;
  this.blending = a.blending !== void 0 ? a.blending : THREE.NormalBlending;
  this.depthTest = a.depthTest !== void 0 ? a.depthTest : !0;
  this.depthWrite = a.depthWrite !== void 0 ? a.depthWrite : !0;
  this.polygonOffset = a.polygonOffset !== void 0 ? a.polygonOffset : !1;
  this.polygonOffsetFactor =
    a.polygonOffsetFactor !== void 0 ? a.polygonOffsetFactor : 0;
  this.polygonOffsetUnits =
    a.polygonOffsetUnits !== void 0 ? a.polygonOffsetUnits : 0;
  this.alphaTest = a.alphaTest !== void 0 ? a.alphaTest : 0;
  this.overdraw = a.overdraw !== void 0 ? a.overdraw : !1;
};
THREE.MaterialCount = 0;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.MultiplyBlending = 3;
THREE.AdditiveAlphaBlending = 4;
THREE.LineBasicMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
  this.linewidth = a.linewidth !== void 0 ? a.linewidth : 1;
  this.linecap = a.linecap !== void 0 ? a.linecap : "round";
  this.linejoin = a.linejoin !== void 0 ? a.linejoin : "round";
  this.vertexColors = a.vertexColors ? a.vertexColors : !1;
  this.fog = a.fog !== void 0 ? a.fog : !0;
};
THREE.LineBasicMaterial.prototype = new THREE.Material();
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.MeshBasicMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
  this.map = a.map !== void 0 ? a.map : null;
  this.lightMap = a.lightMap !== void 0 ? a.lightMap : null;
  this.envMap = a.envMap !== void 0 ? a.envMap : null;
  this.combine = a.combine !== void 0 ? a.combine : THREE.MultiplyOperation;
  this.reflectivity = a.reflectivity !== void 0 ? a.reflectivity : 1;
  this.refractionRatio =
    a.refractionRatio !== void 0 ? a.refractionRatio : 0.98;
  this.fog = a.fog !== void 0 ? a.fog : !0;
  this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
  this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
  this.wireframeLinewidth =
    a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1;
  this.wireframeLinecap =
    a.wireframeLinecap !== void 0 ? a.wireframeLinecap : "round";
  this.wireframeLinejoin =
    a.wireframeLinejoin !== void 0 ? a.wireframeLinejoin : "round";
  this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
  this.skinning = a.skinning !== void 0 ? a.skinning : !1;
  this.morphTargets = a.morphTargets !== void 0 ? a.morphTargets : !1;
};
THREE.MeshBasicMaterial.prototype = new THREE.Material();
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
  this.ambient =
    a.ambient !== void 0 ? new THREE.Color(a.ambient) : new THREE.Color(328965);
  this.map = a.map !== void 0 ? a.map : null;
  this.lightMap = a.lightMap !== void 0 ? a.lightMap : null;
  this.envMap = a.envMap !== void 0 ? a.envMap : null;
  this.combine = a.combine !== void 0 ? a.combine : THREE.MultiplyOperation;
  this.reflectivity = a.reflectivity !== void 0 ? a.reflectivity : 1;
  this.refractionRatio =
    a.refractionRatio !== void 0 ? a.refractionRatio : 0.98;
  this.fog = a.fog !== void 0 ? a.fog : !0;
  this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
  this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
  this.wireframeLinewidth =
    a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1;
  this.wireframeLinecap =
    a.wireframeLinecap !== void 0 ? a.wireframeLinecap : "round";
  this.wireframeLinejoin =
    a.wireframeLinejoin !== void 0 ? a.wireframeLinejoin : "round";
  this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
  this.skinning = a.skinning !== void 0 ? a.skinning : !1;
  this.morphTargets = a.morphTargets !== void 0 ? a.morphTargets : !1;
};
THREE.MeshLambertMaterial.prototype = new THREE.Material();
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
  this.ambient =
    a.ambient !== void 0 ? new THREE.Color(a.ambient) : new THREE.Color(328965);
  this.specular =
    a.specular !== void 0
      ? new THREE.Color(a.specular)
      : new THREE.Color(1118481);
  this.shininess = a.shininess !== void 0 ? a.shininess : 30;
  this.metal = a.metal !== void 0 ? a.metal : !1;
  this.perPixel = a.perPixel !== void 0 ? a.perPixel : !1;
  this.map = a.map !== void 0 ? a.map : null;
  this.lightMap = a.lightMap !== void 0 ? a.lightMap : null;
  this.envMap = a.envMap !== void 0 ? a.envMap : null;
  this.combine = a.combine !== void 0 ? a.combine : THREE.MultiplyOperation;
  this.reflectivity = a.reflectivity !== void 0 ? a.reflectivity : 1;
  this.refractionRatio =
    a.refractionRatio !== void 0 ? a.refractionRatio : 0.98;
  this.fog = a.fog !== void 0 ? a.fog : !0;
  this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
  this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
  this.wireframeLinewidth =
    a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1;
  this.wireframeLinecap =
    a.wireframeLinecap !== void 0 ? a.wireframeLinecap : "round";
  this.wireframeLinejoin =
    a.wireframeLinejoin !== void 0 ? a.wireframeLinejoin : "round";
  this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
  this.skinning = a.skinning !== void 0 ? a.skinning : !1;
  this.morphTargets = a.morphTargets !== void 0 ? a.morphTargets : !1;
};
THREE.MeshPhongMaterial.prototype = new THREE.Material();
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
  this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
  this.wireframeLinewidth =
    a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1;
};
THREE.MeshDepthMaterial.prototype = new THREE.Material();
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.shading = a.shading ? a.shading : THREE.FlatShading;
  this.wireframe = a.wireframe ? a.wireframe : !1;
  this.wireframeLinewidth = a.wireframeLinewidth ? a.wireframeLinewidth : 1;
};
THREE.MeshNormalMaterial.prototype = new THREE.Material();
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function () {};
THREE.ParticleBasicMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
  this.map = a.map !== void 0 ? a.map : null;
  this.size = a.size !== void 0 ? a.size : 1;
  this.sizeAttenuation = a.sizeAttenuation !== void 0 ? a.sizeAttenuation : !0;
  this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
  this.fog = a.fog !== void 0 ? a.fog : !0;
};
THREE.ParticleBasicMaterial.prototype = new THREE.Material();
THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
THREE.ParticleCanvasMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
  this.program = a.program !== void 0 ? a.program : function () {};
};
THREE.ParticleCanvasMaterial.prototype = new THREE.Material();
THREE.ParticleCanvasMaterial.prototype.constructor =
  THREE.ParticleCanvasMaterial;
THREE.Texture = function (a, b, c, d, f, e) {
  this.id = THREE.TextureCount++;
  this.image = a;
  this.mapping = b !== void 0 ? b : new THREE.UVMapping();
  this.wrapS = c !== void 0 ? c : THREE.ClampToEdgeWrapping;
  this.wrapT = d !== void 0 ? d : THREE.ClampToEdgeWrapping;
  this.magFilter = f !== void 0 ? f : THREE.LinearFilter;
  this.minFilter = e !== void 0 ? e : THREE.LinearMipMapLinearFilter;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.needsUpdate = !1;
  this.onUpdate = null;
};
THREE.Texture.prototype = {
  constructor: THREE.Texture,
  clone: function () {
    var a = new THREE.Texture(
      this.image,
      this.mapping,
      this.wrapS,
      this.wrapT,
      this.magFilter,
      this.minFilter
    );
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    return a;
  },
};
THREE.TextureCount = 0;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.CubeReflectionMapping = function () {};
THREE.CubeRefractionMapping = function () {};
THREE.LatitudeReflectionMapping = function () {};
THREE.LatitudeRefractionMapping = function () {};
THREE.SphericalReflectionMapping = function () {};
THREE.SphericalRefractionMapping = function () {};
THREE.UVMapping = function () {};
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.Particle = function (a) {
  THREE.Object3D.call(this);
  this.material = a;
};
THREE.Particle.prototype = new THREE.Object3D();
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.Line = function (a, b, c) {
  THREE.Object3D.call(this);
  this.geometry = a;
  this.material = b;
  this.type = c !== void 0 ? c : THREE.LineStrip;
  this.geometry &&
    (this.geometry.boundingSphere || this.geometry.computeBoundingSphere());
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D();
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function (a, b) {
  THREE.Object3D.call(this);
  this.geometry = a;
  this.material = b;
  if (b instanceof Array)
    console.warn(
      "DEPRECATED: Mesh material can no longer be an Array. Using material at index 0..."
    ),
      (this.material = b[0]);
  if (
    this.geometry &&
    (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(),
    (this.boundRadius = a.boundingSphere.radius),
    this.geometry.morphTargets.length)
  ) {
    this.morphTargetBase = -1;
    this.morphTargetForcedOrder = [];
    this.morphTargetInfluences = [];
    this.morphTargetDictionary = {};
    for (var c = 0; c < this.geometry.morphTargets.length; c++)
      this.morphTargetInfluences.push(0),
        (this.morphTargetDictionary[this.geometry.morphTargets[c].name] = c);
  }
};
THREE.Mesh.prototype = new THREE.Object3D();
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
  if (this.morphTargetDictionary[a] !== void 0)
    return this.morphTargetDictionary[a];
  console.log(
    "THREE.Mesh.getMorphTargetIndexByName: morph target " +
      a +
      " does not exist. Returning 0."
  );
  return 0;
};
THREE.Bone = function (a) {
  THREE.Object3D.call(this);
  this.skin = a;
  this.skinMatrix = new THREE.Matrix4();
};
THREE.Bone.prototype = new THREE.Object3D();
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function (a, b) {
  this.matrixAutoUpdate && (b |= this.updateMatrix());
  if (b || this.matrixWorldNeedsUpdate)
    a
      ? this.skinMatrix.multiply(a, this.matrix)
      : this.skinMatrix.copy(this.matrix),
      (this.matrixWorldNeedsUpdate = !1),
      (b = !0);
  var c,
    d = this.children.length;
  for (c = 0; c < d; c++) this.children[c].update(this.skinMatrix, b);
};
THREE.Sprite = function (a) {
  THREE.Object3D.call(this);
  this.color =
    a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
  this.map =
    a.map instanceof THREE.Texture
      ? a.map
      : THREE.ImageUtils.loadTexture(a.map);
  this.blending = a.blending !== void 0 ? a.blending : THREE.NormalBlending;
  this.useScreenCoordinates =
    a.useScreenCoordinates !== void 0 ? a.useScreenCoordinates : !0;
  this.mergeWith3D =
    a.mergeWith3D !== void 0 ? a.mergeWith3D : !this.useScreenCoordinates;
  this.affectedByDistance =
    a.affectedByDistance !== void 0
      ? a.affectedByDistance
      : !this.useScreenCoordinates;
  this.scaleByViewport =
    a.scaleByViewport !== void 0 ? a.scaleByViewport : !this.affectedByDistance;
  this.alignment =
    a.alignment instanceof THREE.Vector2
      ? a.alignment
      : THREE.SpriteAlignment.center;
  this.rotation3d = this.rotation;
  this.rotation = 0;
  this.opacity = 1;
  this.uvOffset = new THREE.Vector2(0, 0);
  this.uvScale = new THREE.Vector2(1, 1);
};
THREE.Sprite.prototype = new THREE.Object3D();
THREE.Sprite.prototype.constructor = THREE.Sprite;
THREE.Sprite.prototype.updateMatrix = function () {
  this.matrix.setPosition(this.position);
  this.rotation3d.set(0, 0, this.rotation);
  this.matrix.setRotationFromEuler(this.rotation3d);
  if (this.scale.x !== 1 || this.scale.y !== 1)
    this.matrix.scale(this.scale),
      (this.boundRadiusScale = Math.max(this.scale.x, this.scale.y));
  this.matrixWorldNeedsUpdate = !0;
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Scene = function () {
  THREE.Object3D.call(this);
  this.overrideMaterial = this.fog = null;
  this.matrixAutoUpdate = !1;
  this.objects = [];
  this.lights = [];
  this.__objectsAdded = [];
  this.__objectsRemoved = [];
};
THREE.Scene.prototype = new THREE.Object3D();
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.addObject = function (a) {
  if (a instanceof THREE.Light)
    this.lights.indexOf(a) === -1 && this.lights.push(a);
  else if (
    !(a instanceof THREE.Camera || a instanceof THREE.Bone) &&
    this.objects.indexOf(a) === -1
  ) {
    this.objects.push(a);
    this.__objectsAdded.push(a);
    var b = this.__objectsRemoved.indexOf(a);
    b !== -1 && this.__objectsRemoved.splice(b, 1);
  }
  for (b = 0; b < a.children.length; b++) this.addObject(a.children[b]);
};
THREE.Scene.prototype.removeObject = function (a) {
  if (a instanceof THREE.Light) {
    var b = this.lights.indexOf(a);
    b !== -1 && this.lights.splice(b, 1);
  } else
    a instanceof THREE.Camera ||
      ((b = this.objects.indexOf(a)),
      b !== -1 &&
        (this.objects.splice(b, 1),
        this.__objectsRemoved.push(a),
        (b = this.__objectsAdded.indexOf(a)),
        b !== -1 && this.__objectsAdded.splice(b, 1)));
  for (b = 0; b < a.children.length; b++) this.removeObject(a.children[b]);
};
THREE.CanvasRenderer = function (a) {
  function b(a) {
    if (C != a) k.globalAlpha = C = a;
  }
  function c(a) {
    if (Q != a) {
      switch (a) {
        case THREE.NormalBlending:
          k.globalCompositeOperation = "source-over";
          break;
        case THREE.AdditiveBlending:
          k.globalCompositeOperation = "lighter";
          break;
        case THREE.SubtractiveBlending:
          k.globalCompositeOperation = "darker";
      }
      Q = a;
    }
  }
  function d(a) {
    if (O != a) k.strokeStyle = O = a;
  }
  function f(a) {
    if (w != a) k.fillStyle = w = a;
  }
  var e = this,
    g,
    h,
    m,
    l = new THREE.Projector(),
    a = a || {},
    j = a.canvas !== void 0 ? a.canvas : document.createElement("canvas"),
    i,
    n,
    o,
    p,
    k = j.getContext("2d"),
    s = new THREE.Color(0),
    K = 0,
    C = 1,
    Q = 0,
    O = null,
    w = null,
    F = null,
    z = null,
    D = null,
    u,
    r,
    E,
    N,
    W = new THREE.RenderableVertex(),
    da = new THREE.RenderableVertex(),
    G,
    H,
    I,
    Y,
    L,
    B,
    S,
    v,
    R,
    P,
    V,
    J,
    t = new THREE.Color(),
    A = new THREE.Color(),
    x = new THREE.Color(),
    y = new THREE.Color(),
    M = new THREE.Color(),
    la = [],
    fa = [],
    ga,
    ha,
    ea,
    aa,
    Ba,
    Ca,
    Da,
    Ea,
    Fa,
    Ga,
    ma = new THREE.Rectangle(),
    Z = new THREE.Rectangle(),
    X = new THREE.Rectangle(),
    ya = !1,
    $ = new THREE.Color(),
    ta = new THREE.Color(),
    ua = new THREE.Color(),
    T = new THREE.Vector3(),
    qa,
    ra,
    za,
    ba,
    sa,
    va,
    a = 16;
  qa = document.createElement("canvas");
  qa.width = qa.height = 2;
  ra = qa.getContext("2d");
  ra.fillStyle = "rgba(0,0,0,1)";
  ra.fillRect(0, 0, 2, 2);
  za = ra.getImageData(0, 0, 2, 2);
  ba = za.data;
  sa = document.createElement("canvas");
  sa.width = sa.height = a;
  va = sa.getContext("2d");
  va.translate(-a / 2, -a / 2);
  va.scale(a, a);
  a--;
  this.domElement = j;
  this.sortElements = this.sortObjects = this.autoClear = !0;
  this.info = {
    render: {
      vertices: 0,
      faces: 0,
    },
  };
  this.setSize = function (a, b) {
    i = a;
    n = b;
    o = Math.floor(i / 2);
    p = Math.floor(n / 2);
    j.width = i;
    j.height = n;
    ma.set(-o, -p, o, p);
    Z.set(-o, -p, o, p);
    C = 1;
    Q = 0;
    D = z = F = w = O = null;
  };
  this.setClearColor = function (a, b) {
    s.copy(a);
    K = b;
    Z.set(-o, -p, o, p);
  };
  this.setClearColorHex = function (a, b) {
    s.setHex(a);
    K = b;
    Z.set(-o, -p, o, p);
  };
  this.clear = function () {
    k.setTransform(1, 0, 0, -1, o, p);
    Z.isEmpty() ||
      (Z.minSelf(ma),
      Z.inflate(2),
      K < 1 &&
        k.clearRect(
          Math.floor(Z.getX()),
          Math.floor(Z.getY()),
          Math.floor(Z.getWidth()),
          Math.floor(Z.getHeight())
        ),
      K > 0 &&
        (c(THREE.NormalBlending),
        b(1),
        f(
          "rgba(" +
            Math.floor(s.r * 255) +
            "," +
            Math.floor(s.g * 255) +
            "," +
            Math.floor(s.b * 255) +
            "," +
            K +
            ")"
        ),
        k.fillRect(
          Math.floor(Z.getX()),
          Math.floor(Z.getY()),
          Math.floor(Z.getWidth()),
          Math.floor(Z.getHeight())
        )),
      Z.empty());
  };
  this.render = function (a, j) {
    function i(a) {
      var b, c, d, e;
      $.setRGB(0, 0, 0);
      ta.setRGB(0, 0, 0);
      ua.setRGB(0, 0, 0);
      b = 0;
      for (c = a.length; b < c; b++)
        (d = a[b]),
          (e = d.color),
          d instanceof THREE.AmbientLight
            ? (($.r += e.r), ($.g += e.g), ($.b += e.b))
            : d instanceof THREE.DirectionalLight
            ? ((ta.r += e.r), (ta.g += e.g), (ta.b += e.b))
            : d instanceof THREE.PointLight &&
              ((ua.r += e.r), (ua.g += e.g), (ua.b += e.b));
    }
    function n(a, b, c, d) {
      var e, f, g, h, k, j;
      e = 0;
      for (f = a.length; e < f; e++)
        (g = a[e]),
          (h = g.color),
          g instanceof THREE.DirectionalLight
            ? ((k = g.matrixWorld.getPosition()),
              (j = c.dot(k)),
              j <= 0 ||
                ((j *= g.intensity),
                (d.r += h.r * j),
                (d.g += h.g * j),
                (d.b += h.b * j)))
            : g instanceof THREE.PointLight &&
              ((k = g.matrixWorld.getPosition()),
              (j = c.dot(T.sub(k, b).normalize())),
              j <= 0 ||
                ((j *=
                  g.distance == 0
                    ? 1
                    : 1 - Math.min(b.distanceTo(k) / g.distance, 1)),
                j != 0 &&
                  ((j *= g.intensity),
                  (d.r += h.r * j),
                  (d.g += h.g * j),
                  (d.b += h.b * j))));
    }
    function s(a, e, g) {
      b(g.opacity);
      c(g.blending);
      var h, j, i, m, q, n;
      if (g instanceof THREE.ParticleBasicMaterial) {
        if (g.map)
          (m = g.map.image),
            (q = m.width >> 1),
            (n = m.height >> 1),
            (g = e.scale.x * o),
            (i = e.scale.y * p),
            (h = g * q),
            (j = i * n),
            X.set(a.x - h, a.y - j, a.x + h, a.y + j),
            ma.intersects(X) &&
              (k.save(),
              k.translate(a.x, a.y),
              k.rotate(-e.rotation),
              k.scale(g, -i),
              k.translate(-q, -n),
              k.drawImage(m, 0, 0),
              k.restore());
      } else
        g instanceof THREE.ParticleCanvasMaterial &&
          ((h = e.scale.x * o),
          (j = e.scale.y * p),
          X.set(a.x - h, a.y - j, a.x + h, a.y + j),
          ma.intersects(X) &&
            (d(g.color.getContextStyle()),
            f(g.color.getContextStyle()),
            k.save(),
            k.translate(a.x, a.y),
            k.rotate(-e.rotation),
            k.scale(h, j),
            g.program(k),
            k.restore()));
    }
    function w(a, e, f, g) {
      b(g.opacity);
      c(g.blending);
      k.beginPath();
      k.moveTo(a.positionScreen.x, a.positionScreen.y);
      k.lineTo(e.positionScreen.x, e.positionScreen.y);
      k.closePath();
      if (g instanceof THREE.LineBasicMaterial) {
        a = g.linewidth;
        if (F != a) k.lineWidth = F = a;
        a = g.linecap;
        if (z != a) k.lineCap = z = a;
        a = g.linejoin;
        if (D != a) k.lineJoin = D = a;
        d(g.color.getContextStyle());
        k.stroke();
        X.inflate(g.linewidth * 2);
      }
    }
    function C(a, d, f, g, h, k, i, q) {
      e.info.render.vertices += 3;
      e.info.render.faces++;
      b(q.opacity);
      c(q.blending);
      G = a.positionScreen.x;
      H = a.positionScreen.y;
      I = d.positionScreen.x;
      Y = d.positionScreen.y;
      L = f.positionScreen.x;
      B = f.positionScreen.y;
      K(G, H, I, Y, L, B);
      if (q instanceof THREE.MeshBasicMaterial)
        if (q.map)
          q.map.mapping instanceof THREE.UVMapping &&
            ((aa = i.uvs[0]),
            Aa(
              G,
              H,
              I,
              Y,
              L,
              B,
              aa[g].u,
              aa[g].v,
              aa[h].u,
              aa[h].v,
              aa[k].u,
              aa[k].v,
              q.map
            ));
        else if (q.envMap) {
          if (q.envMap.mapping instanceof THREE.SphericalReflectionMapping)
            (a = j.matrixWorldInverse),
              T.copy(i.vertexNormalsWorld[g]),
              (Ba = (T.x * a.n11 + T.y * a.n12 + T.z * a.n13) * 0.5 + 0.5),
              (Ca = -(T.x * a.n21 + T.y * a.n22 + T.z * a.n23) * 0.5 + 0.5),
              T.copy(i.vertexNormalsWorld[h]),
              (Da = (T.x * a.n11 + T.y * a.n12 + T.z * a.n13) * 0.5 + 0.5),
              (Ea = -(T.x * a.n21 + T.y * a.n22 + T.z * a.n23) * 0.5 + 0.5),
              T.copy(i.vertexNormalsWorld[k]),
              (Fa = (T.x * a.n11 + T.y * a.n12 + T.z * a.n13) * 0.5 + 0.5),
              (Ga = -(T.x * a.n21 + T.y * a.n22 + T.z * a.n23) * 0.5 + 0.5),
              Aa(G, H, I, Y, L, B, Ba, Ca, Da, Ea, Fa, Ga, q.envMap);
        } else
          q.wireframe
            ? ja(
                q.color,
                q.wireframeLinewidth,
                q.wireframeLinecap,
                q.wireframeLinejoin
              )
            : ia(q.color);
      else if (q instanceof THREE.MeshLambertMaterial)
        q.map &&
          !q.wireframe &&
          (q.map.mapping instanceof THREE.UVMapping &&
            ((aa = i.uvs[0]),
            Aa(
              G,
              H,
              I,
              Y,
              L,
              B,
              aa[g].u,
              aa[g].v,
              aa[h].u,
              aa[h].v,
              aa[k].u,
              aa[k].v,
              q.map
            )),
          c(THREE.SubtractiveBlending)),
          ya
            ? !q.wireframe &&
              q.shading == THREE.SmoothShading &&
              i.vertexNormalsWorld.length == 3
              ? ((A.r = x.r = y.r = $.r),
                (A.g = x.g = y.g = $.g),
                (A.b = x.b = y.b = $.b),
                n(m, i.v1.positionWorld, i.vertexNormalsWorld[0], A),
                n(m, i.v2.positionWorld, i.vertexNormalsWorld[1], x),
                n(m, i.v3.positionWorld, i.vertexNormalsWorld[2], y),
                (A.r = Math.max(0, Math.min(q.color.r * A.r, 1))),
                (A.g = Math.max(0, Math.min(q.color.g * A.g, 1))),
                (A.b = Math.max(0, Math.min(q.color.b * A.b, 1))),
                (x.r = Math.max(0, Math.min(q.color.r * x.r, 1))),
                (x.g = Math.max(0, Math.min(q.color.g * x.g, 1))),
                (x.b = Math.max(0, Math.min(q.color.b * x.b, 1))),
                (y.r = Math.max(0, Math.min(q.color.r * y.r, 1))),
                (y.g = Math.max(0, Math.min(q.color.g * y.g, 1))),
                (y.b = Math.max(0, Math.min(q.color.b * y.b, 1))),
                (M.r = (x.r + y.r) * 0.5),
                (M.g = (x.g + y.g) * 0.5),
                (M.b = (x.b + y.b) * 0.5),
                (ea = wa(A, x, y, M)),
                oa(G, H, I, Y, L, B, 0, 0, 1, 0, 0, 1, ea))
              : ((t.r = $.r),
                (t.g = $.g),
                (t.b = $.b),
                n(m, i.centroidWorld, i.normalWorld, t),
                (t.r = Math.max(0, Math.min(q.color.r * t.r, 1))),
                (t.g = Math.max(0, Math.min(q.color.g * t.g, 1))),
                (t.b = Math.max(0, Math.min(q.color.b * t.b, 1))),
                q.wireframe
                  ? ja(
                      t,
                      q.wireframeLinewidth,
                      q.wireframeLinecap,
                      q.wireframeLinejoin
                    )
                  : ia(t))
            : q.wireframe
            ? ja(
                q.color,
                q.wireframeLinewidth,
                q.wireframeLinecap,
                q.wireframeLinejoin
              )
            : ia(q.color);
      else if (q instanceof THREE.MeshDepthMaterial)
        (ga = j.near),
          (ha = j.far),
          (A.r = A.g = A.b = 1 - na(a.positionScreen.z, ga, ha)),
          (x.r = x.g = x.b = 1 - na(d.positionScreen.z, ga, ha)),
          (y.r = y.g = y.b = 1 - na(f.positionScreen.z, ga, ha)),
          (M.r = (x.r + y.r) * 0.5),
          (M.g = (x.g + y.g) * 0.5),
          (M.b = (x.b + y.b) * 0.5),
          (ea = wa(A, x, y, M)),
          oa(G, H, I, Y, L, B, 0, 0, 1, 0, 0, 1, ea);
      else if (q instanceof THREE.MeshNormalMaterial)
        (t.r = pa(i.normalWorld.x)),
          (t.g = pa(i.normalWorld.y)),
          (t.b = pa(i.normalWorld.z)),
          q.wireframe
            ? ja(
                t,
                q.wireframeLinewidth,
                q.wireframeLinecap,
                q.wireframeLinejoin
              )
            : ia(t);
    }
    function Q(a, d, f, g, h, k, i, q, o) {
      e.info.render.vertices += 4;
      e.info.render.faces++;
      b(q.opacity);
      c(q.blending);
      if (q.map || q.envMap)
        C(a, d, g, 0, 1, 3, i, q, o), C(h, f, k, 1, 2, 3, i, q, o);
      else if (
        ((G = a.positionScreen.x),
        (H = a.positionScreen.y),
        (I = d.positionScreen.x),
        (Y = d.positionScreen.y),
        (L = f.positionScreen.x),
        (B = f.positionScreen.y),
        (S = g.positionScreen.x),
        (v = g.positionScreen.y),
        (R = h.positionScreen.x),
        (P = h.positionScreen.y),
        (V = k.positionScreen.x),
        (J = k.positionScreen.y),
        q instanceof THREE.MeshBasicMaterial)
      )
        O(G, H, I, Y, L, B, S, v),
          q.wireframe
            ? ja(
                q.color,
                q.wireframeLinewidth,
                q.wireframeLinecap,
                q.wireframeLinejoin
              )
            : ia(q.color);
      else if (q instanceof THREE.MeshLambertMaterial)
        ya
          ? !q.wireframe &&
            q.shading == THREE.SmoothShading &&
            i.vertexNormalsWorld.length == 4
            ? ((A.r = x.r = y.r = M.r = $.r),
              (A.g = x.g = y.g = M.g = $.g),
              (A.b = x.b = y.b = M.b = $.b),
              n(m, i.v1.positionWorld, i.vertexNormalsWorld[0], A),
              n(m, i.v2.positionWorld, i.vertexNormalsWorld[1], x),
              n(m, i.v4.positionWorld, i.vertexNormalsWorld[3], y),
              n(m, i.v3.positionWorld, i.vertexNormalsWorld[2], M),
              (A.r = Math.max(0, Math.min(q.color.r * A.r, 1))),
              (A.g = Math.max(0, Math.min(q.color.g * A.g, 1))),
              (A.b = Math.max(0, Math.min(q.color.b * A.b, 1))),
              (x.r = Math.max(0, Math.min(q.color.r * x.r, 1))),
              (x.g = Math.max(0, Math.min(q.color.g * x.g, 1))),
              (x.b = Math.max(0, Math.min(q.color.b * x.b, 1))),
              (y.r = Math.max(0, Math.min(q.color.r * y.r, 1))),
              (y.g = Math.max(0, Math.min(q.color.g * y.g, 1))),
              (y.b = Math.max(0, Math.min(q.color.b * y.b, 1))),
              (M.r = Math.max(0, Math.min(q.color.r * M.r, 1))),
              (M.g = Math.max(0, Math.min(q.color.g * M.g, 1))),
              (M.b = Math.max(0, Math.min(q.color.b * M.b, 1))),
              (ea = wa(A, x, y, M)),
              K(G, H, I, Y, S, v),
              oa(G, H, I, Y, S, v, 0, 0, 1, 0, 0, 1, ea),
              K(R, P, L, B, V, J),
              oa(R, P, L, B, V, J, 1, 0, 1, 1, 0, 1, ea))
            : ((t.r = $.r),
              (t.g = $.g),
              (t.b = $.b),
              n(m, i.centroidWorld, i.normalWorld, t),
              (t.r = Math.max(0, Math.min(q.color.r * t.r, 1))),
              (t.g = Math.max(0, Math.min(q.color.g * t.g, 1))),
              (t.b = Math.max(0, Math.min(q.color.b * t.b, 1))),
              O(G, H, I, Y, L, B, S, v),
              q.wireframe
                ? ja(
                    t,
                    q.wireframeLinewidth,
                    q.wireframeLinecap,
                    q.wireframeLinejoin
                  )
                : ia(t))
          : (O(G, H, I, Y, L, B, S, v),
            q.wireframe
              ? ja(
                  q.color,
                  q.wireframeLinewidth,
                  q.wireframeLinecap,
                  q.wireframeLinejoin
                )
              : ia(q.color));
      else if (q instanceof THREE.MeshNormalMaterial)
        (t.r = pa(i.normalWorld.x)),
          (t.g = pa(i.normalWorld.y)),
          (t.b = pa(i.normalWorld.z)),
          O(G, H, I, Y, L, B, S, v),
          q.wireframe
            ? ja(
                t,
                q.wireframeLinewidth,
                q.wireframeLinecap,
                q.wireframeLinejoin
              )
            : ia(t);
      else if (q instanceof THREE.MeshDepthMaterial)
        (ga = j.near),
          (ha = j.far),
          (A.r = A.g = A.b = 1 - na(a.positionScreen.z, ga, ha)),
          (x.r = x.g = x.b = 1 - na(d.positionScreen.z, ga, ha)),
          (y.r = y.g = y.b = 1 - na(g.positionScreen.z, ga, ha)),
          (M.r = M.g = M.b = 1 - na(f.positionScreen.z, ga, ha)),
          (ea = wa(A, x, y, M)),
          K(G, H, I, Y, S, v),
          oa(G, H, I, Y, S, v, 0, 0, 1, 0, 0, 1, ea),
          K(R, P, L, B, V, J),
          oa(R, P, L, B, V, J, 1, 0, 1, 1, 0, 1, ea);
    }
    function K(a, b, c, d, e, f) {
      k.beginPath();
      k.moveTo(a, b);
      k.lineTo(c, d);
      k.lineTo(e, f);
      k.lineTo(a, b);
      k.closePath();
    }
    function O(a, b, c, d, e, f, g, h) {
      k.beginPath();
      k.moveTo(a, b);
      k.lineTo(c, d);
      k.lineTo(e, f);
      k.lineTo(g, h);
      k.lineTo(a, b);
      k.closePath();
    }
    function ja(a, b, c, e) {
      if (F != b) k.lineWidth = F = b;
      if (z != c) k.lineCap = z = c;
      if (D != e) k.lineJoin = D = e;
      d(a.getContextStyle());
      k.stroke();
      X.inflate(b * 2);
    }
    function ia(a) {
      f(a.getContextStyle());
      k.fill();
    }
    function Aa(a, b, c, d, e, g, h, i, j, m, o, n, l) {
      if (l.image.width != 0) {
        if (l.needsUpdate == !0 || la[l.id] == void 0) {
          var p = l.wrapS == THREE.RepeatWrapping,
            r = l.wrapT == THREE.RepeatWrapping;
          la[l.id] = k.createPattern(
            l.image,
            p && r
              ? "repeat"
              : p && !r
              ? "repeat-x"
              : !p && r
              ? "repeat-y"
              : "no-repeat"
          );
          l.needsUpdate = !1;
        }
        f(la[l.id]);
        var p = l.offset.x / l.repeat.x,
          r = l.offset.y / l.repeat.y,
          s = l.image.width * l.repeat.x,
          u = l.image.height * l.repeat.y,
          h = (h + p) * s,
          i = (i + r) * u,
          j = (j + p) * s,
          m = (m + r) * u,
          o = (o + p) * s,
          n = (n + r) * u;
        c -= a;
        d -= b;
        e -= a;
        g -= b;
        j -= h;
        m -= i;
        o -= h;
        n -= i;
        p = j * n - o * m;
        if (p == 0) {
          if (fa[l.id] == void 0)
            (b = document.createElement("canvas")),
              (b.width = l.image.width),
              (b.height = l.image.height),
              (a = b.getContext("2d")),
              a.drawImage(l.image, 0, 0),
              (fa[l.id] = a.getImageData(
                0,
                0,
                l.image.width,
                l.image.height
              ).data),
              delete b;
          b = fa[l.id];
          h = (Math.floor(h) + Math.floor(i) * l.image.width) * 4;
          t.setRGB(b[h] / 255, b[h + 1] / 255, b[h + 2] / 255);
          ia(t);
        } else
          (p = 1 / p),
            (l = (n * c - m * e) * p),
            (m = (n * d - m * g) * p),
            (c = (j * e - o * c) * p),
            (d = (j * g - o * d) * p),
            (a = a - l * h - c * i),
            (h = b - m * h - d * i),
            k.save(),
            k.transform(l, m, c, d, a, h),
            k.fill(),
            k.restore();
      }
    }
    function oa(a, b, c, d, e, f, g, h, i, j, l, m, o) {
      var n, p;
      n = o.width - 1;
      p = o.height - 1;
      g *= n;
      h *= p;
      i *= n;
      j *= p;
      l *= n;
      m *= p;
      c -= a;
      d -= b;
      e -= a;
      f -= b;
      i -= g;
      j -= h;
      l -= g;
      m -= h;
      p = 1 / (i * m - l * j);
      n = (m * c - j * e) * p;
      j = (m * d - j * f) * p;
      c = (i * e - l * c) * p;
      d = (i * f - l * d) * p;
      a = a - n * g - c * h;
      b = b - j * g - d * h;
      k.save();
      k.transform(n, j, c, d, a, b);
      k.clip();
      k.drawImage(o, 0, 0);
      k.restore();
    }
    function wa(a, b, c, d) {
      var e = ~~(a.r * 255),
        f = ~~(a.g * 255),
        a = ~~(a.b * 255),
        g = ~~(b.r * 255),
        h = ~~(b.g * 255),
        b = ~~(b.b * 255),
        i = ~~(c.r * 255),
        j = ~~(c.g * 255),
        c = ~~(c.b * 255),
        k = ~~(d.r * 255),
        l = ~~(d.g * 255),
        d = ~~(d.b * 255);
      ba[0] = e < 0 ? 0 : e > 255 ? 255 : e;
      ba[1] = f < 0 ? 0 : f > 255 ? 255 : f;
      ba[2] = a < 0 ? 0 : a > 255 ? 255 : a;
      ba[4] = g < 0 ? 0 : g > 255 ? 255 : g;
      ba[5] = h < 0 ? 0 : h > 255 ? 255 : h;
      ba[6] = b < 0 ? 0 : b > 255 ? 255 : b;
      ba[8] = i < 0 ? 0 : i > 255 ? 255 : i;
      ba[9] = j < 0 ? 0 : j > 255 ? 255 : j;
      ba[10] = c < 0 ? 0 : c > 255 ? 255 : c;
      ba[12] = k < 0 ? 0 : k > 255 ? 255 : k;
      ba[13] = l < 0 ? 0 : l > 255 ? 255 : l;
      ba[14] = d < 0 ? 0 : d > 255 ? 255 : d;
      ra.putImageData(za, 0, 0);
      va.drawImage(qa, 0, 0);
      return sa;
    }
    function na(a, b, c) {
      a = (a - b) / (c - b);
      return a * a * (3 - 2 * a);
    }
    function pa(a) {
      a = (a + 1) * 0.5;
      return a < 0 ? 0 : a > 1 ? 1 : a;
    }
    function ka(a, b) {
      var c = b.x - a.x,
        d = b.y - a.y,
        e = c * c + d * d;
      e != 0 &&
        ((e = 1 / Math.sqrt(e)),
        (c *= e),
        (d *= e),
        (b.x += c),
        (b.y += d),
        (a.x -= c),
        (a.y -= d));
    }
    var xa, Ha, U, ca;
    this.autoClear ? this.clear() : k.setTransform(1, 0, 0, -1, o, p);
    e.info.render.vertices = 0;
    e.info.render.faces = 0;
    g = l.projectScene(a, j, this.sortElements);
    h = g.elements;
    m = g.lights;
    (ya = m.length > 0) && i(m);
    xa = 0;
    for (Ha = h.length; xa < Ha; xa++)
      if (
        ((U = h[xa]),
        (ca = U.material),
        (ca = ca instanceof THREE.MeshFaceMaterial ? U.faceMaterial : ca),
        !(ca == null || ca.opacity == 0))
      ) {
        X.empty();
        if (U instanceof THREE.RenderableParticle)
          (u = U), (u.x *= o), (u.y *= p), s(u, U, ca, a);
        else if (U instanceof THREE.RenderableLine)
          (u = U.v1),
            (r = U.v2),
            (u.positionScreen.x *= o),
            (u.positionScreen.y *= p),
            (r.positionScreen.x *= o),
            (r.positionScreen.y *= p),
            X.addPoint(u.positionScreen.x, u.positionScreen.y),
            X.addPoint(r.positionScreen.x, r.positionScreen.y),
            ma.intersects(X) && w(u, r, U, ca, a);
        else if (U instanceof THREE.RenderableFace3)
          (u = U.v1),
            (r = U.v2),
            (E = U.v3),
            (u.positionScreen.x *= o),
            (u.positionScreen.y *= p),
            (r.positionScreen.x *= o),
            (r.positionScreen.y *= p),
            (E.positionScreen.x *= o),
            (E.positionScreen.y *= p),
            ca.overdraw &&
              (ka(u.positionScreen, r.positionScreen),
              ka(r.positionScreen, E.positionScreen),
              ka(E.positionScreen, u.positionScreen)),
            X.add3Points(
              u.positionScreen.x,
              u.positionScreen.y,
              r.positionScreen.x,
              r.positionScreen.y,
              E.positionScreen.x,
              E.positionScreen.y
            ),
            ma.intersects(X) && C(u, r, E, 0, 1, 2, U, ca, a);
        else if (U instanceof THREE.RenderableFace4)
          (u = U.v1),
            (r = U.v2),
            (E = U.v3),
            (N = U.v4),
            (u.positionScreen.x *= o),
            (u.positionScreen.y *= p),
            (r.positionScreen.x *= o),
            (r.positionScreen.y *= p),
            (E.positionScreen.x *= o),
            (E.positionScreen.y *= p),
            (N.positionScreen.x *= o),
            (N.positionScreen.y *= p),
            W.positionScreen.copy(r.positionScreen),
            da.positionScreen.copy(N.positionScreen),
            ca.overdraw &&
              (ka(u.positionScreen, r.positionScreen),
              ka(r.positionScreen, N.positionScreen),
              ka(N.positionScreen, u.positionScreen),
              ka(E.positionScreen, W.positionScreen),
              ka(E.positionScreen, da.positionScreen)),
            X.addPoint(u.positionScreen.x, u.positionScreen.y),
            X.addPoint(r.positionScreen.x, r.positionScreen.y),
            X.addPoint(E.positionScreen.x, E.positionScreen.y),
            X.addPoint(N.positionScreen.x, N.positionScreen.y),
            ma.intersects(X) && Q(u, r, E, N, W, da, U, ca, a);
        Z.addRectangle(X);
      }
    k.setTransform(1, 0, 0, 1, 0, 0);
  };
};
THREE.RenderableVertex = function () {
  this.positionWorld = new THREE.Vector3();
  this.positionScreen = new THREE.Vector4();
  this.visible = !0;
};
THREE.RenderableVertex.prototype.copy = function (a) {
  this.positionWorld.copy(a.positionWorld);
  this.positionScreen.copy(a.positionScreen);
};
THREE.RenderableFace3 = function () {
  this.v1 = new THREE.RenderableVertex();
  this.v2 = new THREE.RenderableVertex();
  this.v3 = new THREE.RenderableVertex();
  this.centroidWorld = new THREE.Vector3();
  this.centroidScreen = new THREE.Vector3();
  this.normalWorld = new THREE.Vector3();
  this.vertexNormalsWorld = [
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ];
  this.faceMaterial = this.material = null;
  this.uvs = [[]];
  this.z = null;
};
THREE.RenderableFace4 = function () {
  this.v1 = new THREE.RenderableVertex();
  this.v2 = new THREE.RenderableVertex();
  this.v3 = new THREE.RenderableVertex();
  this.v4 = new THREE.RenderableVertex();
  this.centroidWorld = new THREE.Vector3();
  this.centroidScreen = new THREE.Vector3();
  this.normalWorld = new THREE.Vector3();
  this.vertexNormalsWorld = [
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ];
  this.faceMaterial = this.material = null;
  this.uvs = [[]];
  this.z = null;
};
THREE.RenderableObject = function () {
  this.z = this.object = null;
};
THREE.RenderableParticle = function () {
  this.rotation = this.z = this.y = this.x = null;
  this.scale = new THREE.Vector2();
  this.material = null;
};
THREE.RenderableLine = function () {
  this.z = null;
  this.v1 = new THREE.RenderableVertex();
  this.v2 = new THREE.RenderableVertex();
  this.material = null;
};
// Particle3D class
(Particle3D = function (t) {
  THREE.Particle.call(this, t),
    (this.velocity = new THREE.Vector3(0, -8, 0)),
    this.velocity.rotateX(randomRange(-45, 45)),
    this.velocity.rotateY(randomRange(0, 360)),
    (this.gravity = new THREE.Vector3(0, 0, 0)),
    (this.drag = 1);
}),
  (Particle3D.prototype = new THREE.Particle()),
  (Particle3D.prototype.constructor = Particle3D),
  (Particle3D.prototype.updatePhysics = function () {
    this.velocity.multiplyScalar(this.drag),
      this.velocity.addSelf(this.gravity),
      this.position.addSelf(this.velocity);
  });
var TO_RADIANS = Math.PI / 180;
(THREE.Vector3.prototype.rotateY = function (t) {
  (cosRY = Math.cos(t * TO_RADIANS)), (sinRY = Math.sin(t * TO_RADIANS));
  var i = this.z,
    s = this.x;
  (this.x = s * cosRY + i * sinRY), (this.z = s * -sinRY + i * cosRY);
}),
  (THREE.Vector3.prototype.rotateX = function (t) {
    (cosRY = Math.cos(t * TO_RADIANS)), (sinRY = Math.sin(t * TO_RADIANS));
    var i = this.z,
      s = this.y;
    (this.y = s * cosRY + i * sinRY), (this.z = s * -sinRY + i * cosRY);
  }),
  (THREE.Vector3.prototype.rotateZ = function (t) {
    (cosRY = Math.cos(t * TO_RADIANS)), (sinRY = Math.sin(t * TO_RADIANS));
    var i = this.x,
      s = this.y;
    (this.y = s * cosRY + i * sinRY), (this.x = s * -sinRY + i * cosRY);
  });
// returns a random number between the two limits provided
function randomRange(n, a) {
  return Math.random() * (a - n) + n;
}
//Main
jQuery(document).ready(function ($) {
  $("body").append(
    '<div class="shopifytipsSnowEffect" style="position: fixed;z-index: 9999;left: 0;right: 0;bottom: 0;pointer-events: none;"></div>'
  );
  var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    container,
    particle,
    camera,
    scene,
    renderer,
    mouseX = 0,
    mouseY = 0,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    particles = [],
    particleImage = new Image();
  function snowEffectBind() {
    (container = $(".shopifytipsSnowEffect")),
      ((camera = new THREE.PerspectiveCamera(
        75,
        SCREEN_WIDTH / SCREEN_HEIGHT,
        1,
        1e4
      )).position.z = 1e3),
      (scene = new THREE.Scene()).add(camera),
      (renderer = new THREE.CanvasRenderer()).setSize(
        SCREEN_WIDTH,
        SCREEN_HEIGHT
      );
    for (
      var e = new THREE.ParticleBasicMaterial({
          map: new THREE.Texture(particleImage),
        }),
        n = 0;
      n < 500;
      n++
    )
      ((particle = new Particle3D(e)).position.x = 2e3 * Math.random() - 1e3),
        (particle.position.y = 2e3 * Math.random() - 1e3),
        (particle.position.z = 2e3 * Math.random() - 1e3),
        (particle.scale.x = particle.scale.y = 1),
        scene.add(particle),
        particles.push(particle);
    container.html(renderer.domElement), setInterval(loop, 2000 / 60);
  }
  function onDocumentMouseMove(e) {
    (mouseX = e.clientX - windowHalfX), (mouseY = e.clientY - windowHalfY);
  }
  function onDocumentTouchStart(e) {
    1 == e.touches.length &&
      (e.preventDefault(),
      (mouseX = e.touches[0].pageX - windowHalfX),
      (mouseY = e.touches[0].pageY - windowHalfY));
  }
  function onDocumentTouchMove(e) {
    1 == e.touches.length &&
      (e.preventDefault(),
      (mouseX = e.touches[0].pageX - windowHalfX),
      (mouseY = e.touches[0].pageY - windowHalfY));
  }
  function loop() {
    for (var i = 0; i < particles.length; i++) {
      var particle = particles[i];
      with ((particle.updatePhysics(), particle.position))
        y < -1e3 && (y += 2e3),
          x > 1e3 ? (x -= 2e3) : x < -1e3 && (x += 2e3),
          z > 1e3 ? (z -= 2e3) : z < -1e3 && (z += 2e3);
    }
    (camera.position.x += 0.05 * (mouseX - camera.position.x)),
      (camera.position.y += 0.05 * (-mouseY - camera.position.y)),
      camera.lookAt(scene.position),
      renderer.render(scene, camera);
  }
  (particleImage.src =
    "https://cdn.shopify.com/s/files/1/0382/4185/files/snow2.png?15818908823886250399"),
    snowEffectBind();
});

$(function () {
  if (hura_show_effect || meta.page.pageType == "password") {
  } else {
    var appendCSS =
      "<style>.shopifytipsSnowEffect, .ShopifyTipsRainEffect{display:none!important;}</style>";
    $("head").append(appendCSS);
  }
});
