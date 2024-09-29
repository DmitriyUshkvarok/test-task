var at = Object.defineProperty;
var ot = (e, t, n) =>
  t in e
    ? at(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ee = (e, t, n) => (ot(e, typeof t != 'symbol' ? t + '' : t, n), n);
var _ =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
/*!
 * SJS 6.15.1
 */
(function () {
  function e(r, i) {
    return (
      (i || '') +
      ' (SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#' +
      r +
      ')'
    );
  }
  function t(r, i) {
    if (
      (r.indexOf('\\') !== -1 && (r = r.replace(Qe, '/')),
      r[0] === '/' && r[1] === '/')
    )
      return i.slice(0, i.indexOf(':') + 1) + r;
    if (
      (r[0] === '.' &&
        (r[1] === '/' ||
          (r[1] === '.' && (r[2] === '/' || (r.length === 2 && (r += '/')))) ||
          (r.length === 1 && (r += '/')))) ||
      r[0] === '/'
    ) {
      var u,
        c = i.slice(0, i.indexOf(':') + 1);
      if (
        ((u =
          i[c.length + 1] === '/'
            ? c !== 'file:'
              ? (u = i.slice(c.length + 2)).slice(u.indexOf('/') + 1)
              : i.slice(8)
            : i.slice(c.length + (i[c.length] === '/'))),
        r[0] === '/')
      )
        return i.slice(0, i.length - u.length - 1) + r;
      for (
        var d = u.slice(0, u.lastIndexOf('/') + 1) + r, S = [], m = -1, p = 0;
        p < d.length;
        p++
      )
        m !== -1
          ? d[p] === '/' && (S.push(d.slice(m, p + 1)), (m = -1))
          : d[p] === '.'
            ? d[p + 1] !== '.' || (d[p + 2] !== '/' && p + 2 !== d.length)
              ? d[p + 1] === '/' || p + 1 === d.length
                ? (p += 1)
                : (m = p)
              : (S.pop(), (p += 2))
            : (m = p);
      return (
        m !== -1 && S.push(d.slice(m)),
        i.slice(0, i.length - u.length) + S.join('')
      );
    }
  }
  function n(r, i) {
    return t(r, i) || (r.indexOf(':') !== -1 ? r : t('./' + r, i));
  }
  function a(r, i, u, c, d) {
    for (var S in r) {
      var m = t(S, u) || S,
        p = r[S];
      if (typeof p == 'string') {
        var $ = h(c, t(p, u) || p, d);
        $ ? (i[m] = $) : f('W1', S, p);
      }
    }
  }
  function o(r, i, u) {
    var c;
    for (c in (r.imports && a(r.imports, u.imports, i, u, null),
    r.scopes || {})) {
      var d = n(c, i);
      a(r.scopes[c], u.scopes[d] || (u.scopes[d] = {}), i, u, d);
    }
    for (c in r.depcache || {}) u.depcache[n(c, i)] = r.depcache[c];
    for (c in r.integrity || {}) u.integrity[n(c, i)] = r.integrity[c];
  }
  function s(r, i) {
    if (i[r]) return r;
    var u = r.length;
    do {
      var c = r.slice(0, u + 1);
      if (c in i) return c;
    } while ((u = r.lastIndexOf('/', u - 1)) !== -1);
  }
  function l(r, i) {
    var u = s(r, i);
    if (u) {
      var c = i[u];
      if (c === null) return;
      if (!(r.length > u.length && c[c.length - 1] !== '/'))
        return c + r.slice(u.length);
      f('W2', u, c);
    }
  }
  function f(r, i, u) {
    console.warn(e(r, [u, i].join(', ')));
  }
  function h(r, i, u) {
    for (var c = r.scopes, d = u && s(u, c); d; ) {
      var S = l(i, c[d]);
      if (S) return S;
      d = s(d.slice(0, d.lastIndexOf('/')), c);
    }
    return l(i, r.imports) || (i.indexOf(':') !== -1 && i);
  }
  function g() {
    this[ve] = {};
  }
  function v(r, i, u, c) {
    var d = r[ve][i];
    if (d) return d;
    var S = [],
      m = /* @__PURE__ */ Object.create(null);
    Ne && Object.defineProperty(m, Ne, { value: 'Module' });
    var p = Promise.resolve()
        .then(function () {
          return r.instantiate(i, u, c);
        })
        .then(
          function (U) {
            if (!U) throw Error(e(2, i));
            var k = U[1](
              function (N, A) {
                d.h = !0;
                var Z = !1;
                if (typeof N == 'string')
                  (N in m && m[N] === A) || ((m[N] = A), (Z = !0));
                else {
                  for (var F in N)
                    (A = N[F]),
                      (F in m && m[F] === A) || ((m[F] = A), (Z = !0));
                  N && N.__esModule && (m.__esModule = N.__esModule);
                }
                if (Z)
                  for (var D = 0; D < S.length; D++) {
                    var De = S[D];
                    De && De(m);
                  }
                return A;
              },
              U[1].length === 2
                ? {
                    import: function (N, A) {
                      return r.import(N, i, A);
                    },
                    meta: r.createContext(i),
                  }
                : void 0
            );
            return (
              (d.e = k.execute || function () {}),
              [U[0], k.setters || [], U[2] || []]
            );
          },
          function (U) {
            throw ((d.e = null), (d.er = U), U);
          }
        ),
      $ = p.then(function (U) {
        return Promise.all(
          U[0].map(function (k, N) {
            var A = U[1][N],
              Z = U[2][N];
            return Promise.resolve(r.resolve(k, i)).then(function (F) {
              var D = v(r, F, i, Z);
              return Promise.resolve(D.I).then(function () {
                return A && (D.i.push(A), (!D.h && D.I) || A(D.n)), D;
              });
            });
          })
        ).then(function (k) {
          d.d = k;
        });
      });
    return (d = r[ve][i] =
      {
        id: i,
        i: S,
        n: m,
        m: c,
        I: p,
        L: $,
        h: !1,
        d: void 0,
        e: void 0,
        er: void 0,
        E: void 0,
        C: void 0,
        p: void 0,
      });
  }
  function y(r, i, u, c) {
    if (!c[i.id])
      return (
        (c[i.id] = !0),
        Promise.resolve(i.L)
          .then(function () {
            return (
              (i.p && i.p.e !== null) || (i.p = u),
              Promise.all(
                i.d.map(function (d) {
                  return y(r, d, u, c);
                })
              )
            );
          })
          .catch(function (d) {
            throw (i.er || (i.e = null), d);
          })
      );
  }
  function b(r, i) {
    return (i.C = y(r, i, i, {})
      .then(function () {
        return O(r, i, {});
      })
      .then(function () {
        return i.n;
      }));
  }
  function O(r, i, u) {
    function c() {
      try {
        var m = S.call(xe);
        if (m)
          return (
            (m = m.then(
              function () {
                (i.C = i.n), (i.E = null);
              },
              function (p) {
                throw ((i.er = p), (i.E = null), p);
              }
            )),
            (i.E = m)
          );
        (i.C = i.n), (i.L = i.I = void 0);
      } catch (p) {
        throw ((i.er = p), p);
      }
    }
    if (!u[i.id]) {
      if (((u[i.id] = !0), !i.e)) {
        if (i.er) throw i.er;
        return i.E ? i.E : void 0;
      }
      var d,
        S = i.e;
      return (
        (i.e = null),
        i.d.forEach(function (m) {
          try {
            var p = O(r, m, u);
            p && (d = d || []).push(p);
          } catch ($) {
            throw ((i.er = $), $);
          }
        }),
        d ? Promise.all(d).then(c) : c()
      );
    }
  }
  function T() {
    [].forEach.call(document.querySelectorAll('script'), function (r) {
      if (!r.sp) {
        if (r.type === 'systemjs-module') {
          if (((r.sp = !0), !r.src)) return;
          System.import(
            r.src.slice(0, 7) === 'import:' ? r.src.slice(7) : n(r.src, w)
          ).catch(function (u) {
            if (
              u.message.indexOf(
                'https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3'
              ) > -1
            ) {
              var c = document.createEvent('Event');
              c.initEvent('error', !1, !1), r.dispatchEvent(c);
            }
            return Promise.reject(u);
          });
        } else if (r.type === 'systemjs-importmap') {
          r.sp = !0;
          var i = r.src
            ? (System.fetch || fetch)(r.src, {
                integrity: r.integrity,
                priority: r.fetchPriority,
                passThrough: !0,
              })
                .then(function (u) {
                  if (!u.ok) throw Error(u.status);
                  return u.text();
                })
                .catch(function (u) {
                  return (
                    (u.message =
                      e('W4', r.src) +
                      `
` +
                      u.message),
                    console.warn(u),
                    typeof r.onerror == 'function' && r.onerror(),
                    '{}'
                  );
                })
            : r.innerHTML;
          he = he
            .then(function () {
              return i;
            })
            .then(function (u) {
              (function (c, d, S) {
                var m = {};
                try {
                  m = JSON.parse(d);
                } catch {
                  console.warn(Error(e('W5')));
                }
                o(m, S, c);
              })(L, u, r.src || w);
            });
        }
      }
    });
  }
  var w,
    R = typeof Symbol < 'u',
    M = typeof self < 'u',
    E = typeof document < 'u',
    G = M ? self : _;
  if (E) {
    var x = document.querySelector('base[href]');
    x && (w = x.href);
  }
  if (!w && typeof location < 'u') {
    var Ee = (w = location.href.split('#')[0].split('?')[0]).lastIndexOf('/');
    Ee !== -1 && (w = w.slice(0, Ee + 1));
  }
  var de,
    Qe = /\\/g,
    Ne = R && Symbol.toStringTag,
    ve = R ? Symbol() : '@',
    I = g.prototype;
  (I.import = function (r, i, u) {
    var c = this;
    return (
      i && typeof i == 'object' && ((u = i), (i = void 0)),
      Promise.resolve(c.prepareImport())
        .then(function () {
          return c.resolve(r, i, u);
        })
        .then(function (d) {
          var S = v(c, d, void 0, u);
          return S.C || b(c, S);
        })
    );
  }),
    (I.createContext = function (r) {
      var i = this;
      return {
        url: r,
        resolve: function (u, c) {
          return Promise.resolve(i.resolve(u, c || r));
        },
      };
    }),
    (I.register = function (r, i, u) {
      de = [r, i, u];
    }),
    (I.getRegister = function () {
      var r = de;
      return (de = void 0), r;
    });
  var xe = Object.freeze(/* @__PURE__ */ Object.create(null));
  G.System = new g();
  var ge,
    je,
    he = Promise.resolve(),
    L = { imports: {}, scopes: {}, depcache: {}, integrity: {} },
    Te = E;
  if (
    ((I.prepareImport = function (r) {
      return (Te || r) && (T(), (Te = !1)), he;
    }),
    (I.getImportMap = function () {
      return JSON.parse(JSON.stringify(L));
    }),
    E && (T(), window.addEventListener('DOMContentLoaded', T)),
    (I.addImportMap = function (r, i) {
      o(r, i || w, L);
    }),
    E)
  ) {
    window.addEventListener('error', function (r) {
      (Ue = r.filename), (Ae = r.error);
    });
    var et = location.origin;
  }
  I.createScript = function (r) {
    var i = document.createElement('script');
    (i.async = !0), r.indexOf(et + '/') && (i.crossOrigin = 'anonymous');
    var u = L.integrity[r];
    return u && (i.integrity = u), (i.src = r), i;
  };
  var Ue,
    Ae,
    me = {},
    tt = I.register;
  (I.register = function (r, i) {
    if (E && document.readyState === 'loading' && typeof r != 'string') {
      var u = document.querySelectorAll('script[src]'),
        c = u[u.length - 1];
      if (c) {
        ge = r;
        var d = this;
        je = setTimeout(function () {
          (me[c.src] = [r, i]), d.import(c.src);
        });
      }
    } else ge = void 0;
    return tt.call(this, r, i);
  }),
    (I.instantiate = function (r, i) {
      var u = me[r];
      if (u) return delete me[r], u;
      var c = this;
      return Promise.resolve(I.createScript(r)).then(function (d) {
        return new Promise(function (S, m) {
          d.addEventListener('error', function () {
            m(Error(e(3, [r, i].join(', '))));
          }),
            d.addEventListener('load', function () {
              if ((document.head.removeChild(d), Ue === r)) m(Ae);
              else {
                var p = c.getRegister(r);
                p && p[0] === ge && clearTimeout(je), S(p);
              }
            }),
            document.head.appendChild(d);
        });
      });
    }),
    (I.shouldFetch = function () {
      return !1;
    }),
    typeof fetch < 'u' && (I.fetch = fetch);
  var rt = I.instantiate,
    nt = /^(text|application)\/(x-)?javascript(;|$)/;
  (I.instantiate = function (r, i, u) {
    var c = this;
    return this.shouldFetch(r, i, u)
      ? this.fetch(r, {
          credentials: 'same-origin',
          integrity: L.integrity[r],
          meta: u,
        }).then(function (d) {
          if (!d.ok)
            throw Error(e(7, [d.status, d.statusText, r, i].join(', ')));
          var S = d.headers.get('content-type');
          if (!S || !nt.test(S)) throw Error(e(4, S));
          return d.text().then(function (m) {
            return (
              m.indexOf('//# sourceURL=') < 0 &&
                (m +=
                  `
//# sourceURL=` + r),
              (0, eval)(m),
              c.getRegister(r)
            );
          });
        })
      : rt.apply(this, arguments);
  }),
    (I.resolve = function (r, i) {
      return (
        h(L, t(r, (i = i || w)) || r, i) ||
        (function (u, c) {
          throw Error(e(8, [u, c].join(', ')));
        })(r, i)
      );
    });
  var it = I.instantiate;
  (I.instantiate = function (r, i, u) {
    var c = L.depcache[r];
    if (c) for (var d = 0; d < c.length; d++) v(this, this.resolve(c[d], r), r);
    return it.call(this, r, i, u);
  }),
    M &&
      typeof importScripts == 'function' &&
      (I.instantiate = function (r) {
        var i = this;
        return Promise.resolve().then(function () {
          return importScripts(r), i.getRegister(r);
        });
      });
})();
(function (e) {
  function t(v) {
    return (
      !e.hasOwnProperty(v) ||
      (!isNaN(v) && v < e.length) ||
      (g && e[v] && typeof window < 'u' && e[v].parent === window)
    );
  }
  var n,
    a,
    o,
    s = e.System.constructor.prototype,
    l = s.import;
  s.import = function (v, y, b) {
    return (
      (function () {
        for (var O in ((n = a = void 0), e))
          t(O) || (n ? a || (a = O) : (n = O), (o = O));
      })(),
      l.call(this, v, y, b)
    );
  };
  var f = [
      [],
      function () {
        return {};
      },
    ],
    h = s.getRegister;
  s.getRegister = function () {
    var v = h.call(this);
    if (v) return v;
    var y,
      b = (function (O) {
        var T,
          w,
          R = 0;
        for (var M in e)
          if (!t(M)) {
            if ((R === 0 && M !== n) || (R === 1 && M !== a)) return M;
            T ? ((o = M), (w = (O && w) || M)) : (T = M === o), R++;
          }
        return w;
      })(this.firstGlobalProp);
    if (!b) return f;
    try {
      y = e[b];
    } catch {
      return f;
    }
    return [
      [],
      function (O) {
        return {
          execute: function () {
            O(y), O({ default: y, __useDefault: !0 });
          },
        };
      },
    ];
  };
  var g =
    typeof navigator < 'u' && navigator.userAgent.indexOf('Trident') !== -1;
})(typeof self < 'u' ? self : _);
var P = [];
for (var pe = 0; pe < 256; ++pe) P.push((pe + 256).toString(16).slice(1));
function st(e, t = 0) {
  return (
    P[e[t + 0]] +
    P[e[t + 1]] +
    P[e[t + 2]] +
    P[e[t + 3]] +
    '-' +
    P[e[t + 4]] +
    P[e[t + 5]] +
    '-' +
    P[e[t + 6]] +
    P[e[t + 7]] +
    '-' +
    P[e[t + 8]] +
    P[e[t + 9]] +
    '-' +
    P[e[t + 10]] +
    P[e[t + 11]] +
    P[e[t + 12]] +
    P[e[t + 13]] +
    P[e[t + 14]] +
    P[e[t + 15]]
  ).toLowerCase();
}
var te,
  ut = new Uint8Array(16);
function ct() {
  if (
    !te &&
    ((te =
      typeof crypto < 'u' &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !te)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    );
  return te(ut);
}
var lt =
  typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ce = {
  randomUUID: lt,
};
function ft(e, t, n) {
  if (Ce.randomUUID && !t && !e) return Ce.randomUUID();
  e = e || {};
  var a = e.random || (e.rng || ct)();
  return (a[6] = (a[6] & 15) | 64), (a[8] = (a[8] & 63) | 128), st(a);
}
const dt =
    'https://analyticsehnwe.servicebus.windows.net/analyticseh-wt-we/messages?timeout=60&api-version=2014-01',
  vt =
    'https://analyticsehnwe.servicebus.windows.net/analyticseh-wt-pl-we/messages?timeout=60&api-version=2014-01',
  gt = '/atomatic/token-service/api/geolocate',
  Je = 'raiazure_sid',
  We = 'raiazure_identifier';
var Ye = {},
  ne = {},
  Y = {},
  q = {},
  H = {},
  j = {};
(function (e) {
  var t =
    (_ && _.__assign) ||
    function () {
      return (
        (t =
          Object.assign ||
          function (g) {
            for (var v, y = 1, b = arguments.length; y < b; y++) {
              v = arguments[y];
              for (var O in v)
                Object.prototype.hasOwnProperty.call(v, O) && (g[O] = v[O]);
            }
            return g;
          }),
        t.apply(this, arguments)
      );
    };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.UNITS_META =
      e.UNITS =
      e.UNITS_META_MAP =
      e.UNITS_META_MAP_LITERAL =
      e.ZERO =
        void 0);
  var n = 1e3,
    a = n * 60,
    o = a * 60,
    s = o * 24,
    l = s * 7,
    f = s * 365,
    h = f / 12;
  (e.ZERO = Object.freeze({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })),
    (e.UNITS_META_MAP_LITERAL = {
      years: {
        milliseconds: f,
        months: 12,
        dateGetter: function (g) {
          return g.getFullYear();
        },
        ISOCharacter: 'Y',
        ISOPrecision: 'period',
      },
      months: {
        milliseconds: h,
        months: 1,
        dateGetter: function (g) {
          return g.getMonth();
        },
        ISOCharacter: 'M',
        ISOPrecision: 'period',
      },
      weeks: {
        milliseconds: l,
        dateGetter: function () {
          return 0;
        },
        ISOCharacter: 'W',
        ISOPrecision: 'period',
        stringifyConvertTo: 'days',
      },
      days: {
        milliseconds: s,
        dateGetter: function (g) {
          return g.getDate();
        },
        ISOCharacter: 'D',
        ISOPrecision: 'period',
      },
      hours: {
        milliseconds: o,
        dateGetter: function (g) {
          return g.getHours();
        },
        ISOCharacter: 'H',
        ISOPrecision: 'time',
      },
      minutes: {
        milliseconds: a,
        dateGetter: function (g) {
          return g.getMinutes();
        },
        ISOCharacter: 'M',
        ISOPrecision: 'time',
      },
      seconds: {
        milliseconds: n,
        dateGetter: function (g) {
          return g.getSeconds();
        },
        ISOCharacter: 'S',
        ISOPrecision: 'time',
      },
      milliseconds: {
        milliseconds: 1,
        dateGetter: function (g) {
          return g.getMilliseconds();
        },
        stringifyConvertTo: 'seconds',
      },
    }),
    (e.UNITS_META_MAP = e.UNITS_META_MAP_LITERAL),
    (e.UNITS = Object.freeze([
      'years',
      'months',
      'weeks',
      'days',
      'hours',
      'minutes',
      'seconds',
      'milliseconds',
    ])),
    (e.UNITS_META = Object.freeze(
      e.UNITS.map(function (g) {
        return t(t({}, e.UNITS_META_MAP[g]), { unit: g });
      })
    ));
})(j);
var J = {},
  W = {},
  Re;
function B() {
  if (Re) return W;
  Re = 1;
  var e =
    (_ && _.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (o) {
            for (var s, l = 1, f = arguments.length; l < f; l++) {
              s = arguments[l];
              for (var h in s)
                Object.prototype.hasOwnProperty.call(s, h) && (o[h] = s[h]);
            }
            return o;
          }),
        e.apply(this, arguments)
      );
    };
  Object.defineProperty(W, '__esModule', { value: !0 }), (W.negate = void 0);
  var t = j,
    n = C(),
    a = function (o) {
      var s = e({}, (0, n.parse)(o));
      return (
        t.UNITS.forEach(function (l) {
          s[l] = s[l] === 0 ? 0 : -s[l];
        }),
        s
      );
    };
  return (W.negate = a), W;
}
var ie = {};
Object.defineProperty(ie, '__esModule', { value: !0 });
ie.isNegativelySigned = void 0;
var ht = function (e) {
  return e < 0 || Object.is(e, -0);
};
ie.isNegativelySigned = ht;
var Le;
function mt() {
  if (Le) return J;
  Le = 1;
  var e =
    (_ && _.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (v) {
            for (var y, b = 1, O = arguments.length; b < O; b++) {
              y = arguments[b];
              for (var T in y)
                Object.prototype.hasOwnProperty.call(y, T) && (v[T] = y[T]);
            }
            return v;
          }),
        e.apply(this, arguments)
      );
    };
  Object.defineProperty(J, '__esModule', { value: !0 }),
    (J.parseISODuration = void 0);
  var t = j,
    n = B(),
    a = ie,
    o = '(?:[,.](\\d{1,3})\\d*)?',
    s = function (v) {
      return '(?:(-?\\d+)'.concat(v, ')?');
    },
    l = function (v, y) {
      return function (b) {
        var O = b.match(v);
        if (!O) return null;
        var T = O[1] === '-',
          w = O.slice(2);
        if (
          w.every(function (E) {
            return E === void 0;
          })
        )
          return null;
        var R = w.map(function (E, G) {
            E = E ?? '0';
            var x = G === w.length - 1;
            return Number(x ? E.padEnd(3, '0') : E);
          }),
          M = e({}, t.ZERO);
        return (
          y.forEach(function (E, G) {
            M[E] = R[G];
          }),
          (0, a.isNegativelySigned)(M.seconds) && (M.milliseconds *= -1),
          T ? (0, n.negate)(M) : M
        );
      };
    },
    f = l(
      new RegExp(
        [
          '^(-)?P',
          '(\\d{4})',
          '-?',
          '(\\d{2})',
          '-?',
          '(\\d{2})',
          'T',
          '(\\d{2})',
          ':?',
          '(\\d{2})',
          ':?',
          '(\\d{2})',
          o,
          '$',
        ].join('')
      ),
      ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']
    ),
    h = l(
      new RegExp(
        [
          '^(-)?P',
          s('Y'),
          s('M'),
          s('W'),
          s('D'),
          '(?:T',
          s('H'),
          s('M'),
          s(''.concat(o, 'S')),
          ')?$',
        ].join('')
      ),
      [
        'years',
        'months',
        'weeks',
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
      ]
    ),
    g = function (v) {
      var y = h(v) || f(v);
      if (y === null)
        throw new SyntaxError(
          'Failed to parse duration. "'.concat(
            v,
            '" is not a valid ISO duration string.'
          )
        );
      return y;
    };
  return (J.parseISODuration = g), J;
}
var ae = {};
Object.defineProperty(ae, '__esModule', { value: !0 });
ae.validate = void 0;
var pt = j,
  yt = function (e) {
    Object.keys(e).forEach(function (t) {
      if (!pt.UNITS.includes(t))
        throw new TypeError(
          'Unexpected property "'.concat(t, '" on Duration object.')
        );
      if (!Number.isInteger(e[t]))
        throw new TypeError(
          'Property "'
            .concat(t, '" must be a an integer. Received ')
            .concat(e[t], '.')
        );
    });
  };
ae.validate = yt;
var oe = {},
  ye =
    (_ && _.__assign) ||
    function () {
      return (
        (ye =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        ye.apply(this, arguments)
      );
    };
Object.defineProperty(oe, '__esModule', { value: !0 });
oe.cleanDurationObject = void 0;
var _t = j,
  St = function (e) {
    var t = ye({}, e);
    return (
      _t.UNITS.forEach(function (n) {
        t[n] === 0 && (t[n] = 0);
      }),
      t
    );
  };
oe.cleanDurationObject = St;
var $e;
function C() {
  if ($e) return H;
  $e = 1;
  var e =
    (_ && _.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (f) {
            for (var h, g = 1, v = arguments.length; g < v; g++) {
              h = arguments[g];
              for (var y in h)
                Object.prototype.hasOwnProperty.call(h, y) && (f[y] = h[y]);
            }
            return f;
          }),
        e.apply(this, arguments)
      );
    };
  Object.defineProperty(H, '__esModule', { value: !0 }), (H.parse = void 0);
  var t = j,
    n = mt(),
    a = ae,
    o = oe,
    s = function (f) {
      return typeof f == 'string'
        ? (0, n.parseISODuration)(f)
        : typeof f == 'number'
          ? e(e({}, t.ZERO), { milliseconds: f })
          : e(e({}, t.ZERO), f);
    },
    l = function (f) {
      var h = s(f);
      return (0, a.validate)(h), (0, o.cleanDurationObject)(h);
    };
  return (H.parse = l), H;
}
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.toYears =
      e.toMonths =
      e.toWeeks =
      e.toDays =
      e.toHours =
      e.toMinutes =
      e.toSeconds =
      e.toUnit =
      e.toMilliseconds =
        void 0);
  var t = C(),
    n = j,
    a = function (l) {
      var f = (0, t.parse)(l);
      return n.UNITS_META.reduce(function (h, g) {
        var v = g.unit,
          y = g.milliseconds;
        return h + f[v] * y;
      }, 0);
    };
  e.toMilliseconds = a;
  var o = function (l, f) {
    return (0, e.toMilliseconds)(l) / n.UNITS_META_MAP[f].milliseconds;
  };
  e.toUnit = o;
  var s = function (l) {
    return function (f) {
      return (0, e.toUnit)(f, l);
    };
  };
  (e.toSeconds = s('seconds')),
    (e.toMinutes = s('minutes')),
    (e.toHours = s('hours')),
    (e.toDays = s('days')),
    (e.toWeeks = s('weeks')),
    (e.toMonths = s('months')),
    (e.toYears = s('years'));
})(q);
Object.defineProperty(Y, '__esModule', { value: !0 });
Y.isNegative = void 0;
var Ot = q,
  It = function (e) {
    return (0, Ot.toMilliseconds)(e) < 0;
  };
Y.isNegative = It;
Object.defineProperty(ne, '__esModule', { value: !0 });
ne.abs = void 0;
var bt = Y,
  wt = B(),
  Pt = C(),
  Mt = function (e) {
    return (0, bt.isNegative)(e) ? (0, wt.negate)(e) : (0, Pt.parse)(e);
  };
ne.abs = Mt;
var V = {},
  qe = {};
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.addMonths = e.getDaysInMonth = void 0);
  var t = function (a) {
    var o = a.getMonth(),
      s = /* @__PURE__ */ new Date(0);
    return (
      s.setFullYear(a.getFullYear(), o + 1, 0),
      s.setHours(0, 0, 0, 0),
      s.getDate()
    );
  };
  e.getDaysInMonth = t;
  var n = function (a, o) {
    var s = a.getMonth() + o,
      l = /* @__PURE__ */ new Date(0);
    l.setFullYear(a.getFullYear(), s, 1), l.setHours(0, 0, 0, 0);
    var f = (0, e.getDaysInMonth)(l);
    a.setMonth(s, Math.min(f, a.getDate()));
  };
  e.addMonths = n;
})(qe);
Object.defineProperty(V, '__esModule', { value: !0 });
V.apply = void 0;
var Et = qe,
  Nt = C(),
  jt = function (e, t) {
    var n = new Date(e),
      a = (0, Nt.parse)(t),
      o = a.years,
      s = a.months,
      l = a.weeks,
      f = a.days,
      h = a.hours,
      g = a.minutes,
      v = a.seconds,
      y = a.milliseconds;
    return (
      (0, Et.addMonths)(n, o * 12 + s),
      n.setDate(n.getDate() + l * 7 + f),
      n.setHours(
        n.getHours() + h,
        n.getMinutes() + g,
        n.getSeconds() + v,
        n.getMilliseconds() + y
      ),
      n
    );
  };
V.apply = jt;
var K = {},
  _e =
    (_ && _.__assign) ||
    function () {
      return (
        (_e =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        _e.apply(this, arguments)
      );
    };
Object.defineProperty(K, '__esModule', { value: !0 });
K.between = void 0;
var ke = j,
  Tt = function (e, t) {
    var n = new Date(e),
      a = new Date(t),
      o = _e({}, ke.ZERO);
    return (
      ke.UNITS_META.forEach(function (s) {
        var l = s.unit,
          f = s.dateGetter;
        o[l] = f(a) - f(n);
      }),
      o
    );
  };
K.between = Tt;
var X = {};
Object.defineProperty(X, '__esModule', { value: !0 });
X.isZero = void 0;
var Ut = q,
  At = function (e) {
    return (0, Ut.toMilliseconds)(e) === 0;
  };
X.isZero = At;
var se = {},
  z =
    (_ && _.__assign) ||
    function () {
      return (
        (z =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        z.apply(this, arguments)
      );
    },
  Dt =
    (_ && _.__rest) ||
    function (e, t) {
      var n = {};
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) &&
          t.indexOf(a) < 0 &&
          (n[a] = e[a]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
          t.indexOf(a[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
            (n[a[o]] = e[a[o]]);
      return n;
    };
Object.defineProperty(se, '__esModule', { value: !0 });
se.normalize = void 0;
var be = j,
  Ct = K,
  Rt = V,
  Fe = q,
  Lt = C(),
  Be = function (e, t) {
    return function (n, a) {
      var o = z({}, n);
      return (
        e.forEach(function (s) {
          var l = t(s);
          (o[s] = ~~(a / l)), (a -= o[s] * l);
        }),
        o
      );
    };
  },
  $t = Be(['years', 'months'], function (e) {
    return be.UNITS_META_MAP_LITERAL[e].months;
  }),
  kt = Be(
    ['days', 'hours', 'minutes', 'seconds', 'milliseconds'],
    function (e) {
      return be.UNITS_META_MAP_LITERAL[e].milliseconds;
    }
  ),
  Ft = function (e) {
    var t = (0, Lt.parse)(e),
      n = t.years,
      a = t.months,
      o = t.weeks,
      s = t.days,
      l = Dt(t, ['years', 'months', 'weeks', 'days']),
      f = z({}, be.ZERO);
    return (
      (f = $t(f, (0, Fe.toMonths)({ years: n, months: a }))),
      (f = kt(f, (0, Fe.toMilliseconds)(z(z({}, l), { days: s + o * 7 })))),
      f
    );
  },
  zt = function (e, t) {
    var n = t != null ? (0, Ct.between)(t, (0, Rt.apply)(t, e)) : e;
    return Ft(n);
  };
se.normalize = zt;
var ue = {},
  Q = {},
  Se =
    (_ && _.__assign) ||
    function () {
      return (
        (Se =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        Se.apply(this, arguments)
      );
    };
Object.defineProperty(Q, '__esModule', { value: !0 });
Q.sum = void 0;
var ze = j,
  Gt = C(),
  Zt = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Se({}, ze.ZERO);
    return (
      e.map(Gt.parse).forEach(function (a) {
        ze.UNITS.forEach(function (o) {
          n[o] += a[o];
        });
      }),
      n
    );
  };
Q.sum = Zt;
var Ht =
  (_ && _.__spreadArray) ||
  function (e, t, n) {
    if (n || arguments.length === 2)
      for (var a = 0, o = t.length, s; a < o; a++)
        (s || !(a in t)) &&
          (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]));
    return e.concat(s || Array.prototype.slice.call(t));
  };
Object.defineProperty(ue, '__esModule', { value: !0 });
ue.subtract = void 0;
var Jt = B(),
  Wt = Q,
  Yt = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Wt.sum.apply(void 0, Ht([e], t.map(Jt.negate), !1));
  };
ue.subtract = Yt;
var ce = {},
  le = {},
  Oe =
    (_ && _.__assign) ||
    function () {
      return (
        (Oe =
          Object.assign ||
          function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        Oe.apply(this, arguments)
      );
    };
Object.defineProperty(le, '__esModule', { value: !0 });
le.getUnitCount = void 0;
var qt = j,
  Bt = C(),
  Vt = function (e) {
    var t = Oe({}, (0, Bt.parse)(e)),
      n = 0;
    return (
      qt.UNITS.forEach(function (a) {
        t[a] !== 0 && n++;
      }),
      n
    );
  };
le.getUnitCount = Vt;
var fe = {};
Object.defineProperty(fe, '__esModule', { value: !0 });
fe.checkAllUnitsNegative = void 0;
var Kt = B(),
  Xt = C(),
  Qt = j,
  xt = function (e) {
    var t = (0, Xt.parse)(e),
      n = !1,
      a = !1;
    return (
      Qt.UNITS.forEach(function (o) {
        var s = t[o];
        s < 0 ? (a = !0) : s > 0 && (n = !0);
      }),
      a && !n
        ? {
            isAllNegative: !0,
            maybeAbsDuration: (0, Kt.negate)(t),
          }
        : {
            isAllNegative: !1,
            maybeAbsDuration: t,
          }
    );
  };
fe.checkAllUnitsNegative = xt;
var Ie =
  (_ && _.__assign) ||
  function () {
    return (
      (Ie =
        Object.assign ||
        function (e) {
          for (var t, n = 1, a = arguments.length; n < a; n++) {
            t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        }),
      Ie.apply(this, arguments)
    );
  };
Object.defineProperty(ce, '__esModule', { value: !0 });
ce.toString = void 0;
var er = X,
  tr = le,
  re = j,
  rr = fe,
  Ge = function (e, t) {
    return e.join('').replace(/\./g, t);
  },
  nr = function (e, t) {
    t === void 0 && (t = {});
    var n = Ie(
      {
        // Commas are mentioned in the spec as the preferred decimal delimiter
        decimalDelimiter: ',',
      },
      t
    );
    if ((0, er.isZero)(e)) return 'P0D';
    var a = (0, rr.checkAllUnitsNegative)(e),
      o = a.maybeAbsDuration,
      s = a.isAllNegative;
    if ((0, tr.getUnitCount)(o) === 1 && o.weeks !== 0)
      return 'P'.concat(o.weeks, 'W');
    var l = {
      period: [],
      time: [],
    };
    re.UNITS_META.forEach(function (h) {
      var g = h.unit,
        v = h.stringifyConvertTo;
      if (v != null) {
        var y = o[g] * re.UNITS_META_MAP[g].milliseconds;
        (o[v] += y / re.UNITS_META_MAP[v].milliseconds), (o[g] = 0);
      }
    }),
      re.UNITS_META.forEach(function (h) {
        var g = h.unit,
          v = h.ISOPrecision,
          y = h.ISOCharacter,
          b = o[g];
        v != null && b !== 0 && l[v].push(''.concat(b).concat(y));
      });
    var f = 'P'.concat(Ge(l.period, n.decimalDelimiter));
    return (
      l.time.length && (f += 'T'.concat(Ge(l.time, n.decimalDelimiter))),
      s && (f = '-'.concat(f)),
      f
    );
  };
ce.toString = nr;
var Ve = {};
Object.defineProperty(Ve, '__esModule', { value: !0 });
(function (e) {
  var t =
      (_ && _.__createBinding) ||
      (Object.create
        ? function (o, s, l, f) {
            f === void 0 && (f = l);
            var h = Object.getOwnPropertyDescriptor(s, l);
            (!h ||
              ('get' in h ? !s.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return s[l];
                },
              }),
              Object.defineProperty(o, f, h);
          }
        : function (o, s, l, f) {
            f === void 0 && (f = l), (o[f] = s[l]);
          }),
    n =
      (_ && _.__exportStar) ||
      function (o, s) {
        for (var l in o)
          l !== 'default' &&
            !Object.prototype.hasOwnProperty.call(s, l) &&
            t(s, o, l);
      };
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.UNITS = void 0),
    n(ne, e),
    n(V, e),
    n(K, e),
    n(Y, e),
    n(X, e),
    n(B(), e),
    n(se, e),
    n(C(), e),
    n(ue, e),
    n(Q, e),
    n(ce, e),
    n(q, e),
    n(Ve, e);
  var a = j;
  Object.defineProperty(e, 'UNITS', {
    enumerable: !0,
    get: function () {
      return a.UNITS;
    },
  });
})(Ye);
class Ke {
  constructor() {
    ee(this, 'data', /* @__PURE__ */ new Map());
  }
  clear() {
    this.data.clear();
  }
  getItem(t) {
    return this.data.get(t) ?? null;
  }
  removeItem(t) {
    this.data.delete(t);
  }
  key(t) {
    return [...this.data.keys()][t] ?? null;
  }
  setItem(t, n) {
    this.data.set(t, n);
  }
  get length() {
    return this.data.size;
  }
}
function ir() {
  try {
    const e = 'test_storage_analytics';
    return (
      sessionStorage.setItem(e, 'test'),
      sessionStorage.removeItem(e),
      sessionStorage
    );
  } catch {
    return new Ke();
  }
}
function ar() {
  try {
    const e = 'test_storage_analytics';
    return (
      localStorage.setItem(e, 'test'), localStorage.removeItem(e), localStorage
    );
  } catch {
    return new Ke();
  }
}
const we = ir(),
  Pe = ar();
function or(e, t, n) {
  Me(e, t, n, !1);
}
function sr(e, t = 30 * 60) {
  return Xe(e, t, !1);
}
function Me(e, t, n, a = !0) {
  const o = new Date(Date.now() + 864e5 * n).getTime(),
    s = {
      value: t,
      expires: o,
    };
  try {
    a ? we.setItem(e, JSON.stringify(s)) : Pe.setItem(e, JSON.stringify(s));
  } catch (l) {
    console.warn('[setSessionStorage] Storage not available', l);
  }
}
function Xe(e, t = 30 * 60, n = !0) {
  let a = null;
  try {
    n ? (a = we.getItem(e)) : (a = Pe.getItem(e));
  } catch (o) {
    console.warn('[getStorage] Storage not available', o);
  }
  if (a) {
    const { value: o, expires: s } = JSON.parse(a);
    if (s >= Date.now()) return Me(e, o, t / (24 * 60 * 60), n), o;
    ur(e, n);
  }
  return '';
}
function ur(e, t = !0) {
  try {
    t ? we.removeItem(e) : Pe.removeItem(e);
  } catch (n) {
    console.warn('[clearStorage] Storage not available', n);
  }
}
function Ze(e) {
  const t = e ? JSON.stringify(e) : '',
    n = e != null && e.duration ? Ye.toSeconds(e.duration) : 30 * 60;
  Me(Je, t, n);
}
function cr() {
  return gt;
}
function lr(e, t = 365) {
  or(We, JSON.stringify(e), t);
}
class fr {
  constructor() {
    ee(this, 'fetchingSidPromise', null);
    ee(this, 'fetchingBidPromise', null);
    console.log('Init IdentifierService.');
  }
  getBid() {
    return this.fetchingBidPromise !== null
      ? this.fetchingBidPromise
      : ((this.fetchingBidPromise = new Promise(async (t, n) => {
          let a, o;
          const s = sr(We, 365);
          if ((s && (a = JSON.parse(s)), !a))
            try {
              const l = await this.getGeolocateFromServer(),
                { session: f, ...h } = l,
                { token: g, ...v } = f;
              (a = h), (o = v), f && Ze(f);
            } catch (l) {
              n(
                new Error('Errore nei dati del servizio ws-token', { cause: l })
              );
            } finally {
              this.fetchingBidPromise = null;
            }
          a
            ? (lr(a, 365),
              t({
                dy_p: a.dy_p,
                st_p: a.st_p,
                'X-Client-User-Agent': a.x_c_u_a,
              }))
            : n(
                new Error(
                  'An error has occurred while retrieving the "bidCookie".'
                )
              );
        })),
        this.fetchingBidPromise);
  }
  getSid() {
    return this.fetchingSidPromise !== null
      ? this.fetchingSidPromise
      : ((this.fetchingSidPromise = new Promise(async (t, n) => {
          const a = Xe(Je, 1800);
          if (a) return t(JSON.parse(a));
          try {
            const o = await this.getGeolocateFromServer(),
              { session: s } = o;
            s && Ze(s), t(s);
          } catch (o) {
            n(new Error('Errore nei dati del servizio ws-token', { cause: o }));
          } finally {
            this.fetchingSidPromise = null;
          }
        })),
        this.fetchingSidPromise);
  }
  async getGeolocateFromServer() {
    return new Promise(async (t, n) => {
      try {
        const a = ft(),
          o = {
            st_p: dt,
            dy_p: vt,
            x_c_u_a: navigator.userAgent,
            session: {
              s_id: a,
              startSession: Date.now(),
            },
          },
          s = cr(),
          l = await fetch(s, {
            credentials: 'include',
            mode: 'cors',
            headers: {
              accept: '*/*',
              'x-caller': 'web',
              'x-caller-version': '1.0',
              'Content-Type': 'application/json',
            },
          })
            .then((f) => (f.ok ? f.json() : o))
            .catch((f) => (console.error(f), o));
        l.session && (l.session.s_id = a), t(l);
      } catch {
        n('FINGERPRINT BID GENERATOR ERROR');
      }
    });
  }
}
var He;
((He = window.Rai) != null && He.IdentifierService) ||
  ((window.Rai = window.Rai ?? {}), (window.Rai.IdentifierService = new fr()));
