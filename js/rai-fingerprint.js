var St = Object.defineProperty;
var xt = (e, n, t) =>
  n in e
    ? St(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[n] = t);
var j = (e, n, t) => (xt(e, typeof n != 'symbol' ? n + '' : n, t), t);
var fe = function (e, n) {
  return (
    (fe =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, r) {
          t.__proto__ = r;
        }) ||
      function (t, r) {
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
      }),
    fe(e, n)
  );
};
function X(e, n) {
  if (typeof n != 'function' && n !== null)
    throw new TypeError(
      'Class extends value ' + String(n) + ' is not a constructor or null'
    );
  fe(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype =
    n === null ? Object.create(n) : ((t.prototype = n.prototype), new t());
}
var de = function () {
  return (
    (de =
      Object.assign ||
      function (n) {
        for (var t, r = 1, o = arguments.length; r < o; r++) {
          t = arguments[r];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }
        return n;
      }),
    de.apply(this, arguments)
  );
};
function E(e, n, t, r) {
  function o(i) {
    return i instanceof t
      ? i
      : new t(function (a) {
          a(i);
        });
  }
  return new (t || (t = Promise))(function (i, a) {
    function s(f) {
      try {
        u(r.next(f));
      } catch (l) {
        a(l);
      }
    }
    function c(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        a(l);
      }
    }
    function u(f) {
      f.done ? i(f.value) : o(f.value).then(s, c);
    }
    u((r = r.apply(e, n || [])).next());
  });
}
function I(e, n) {
  var t = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    o,
    i,
    a;
  return (
    (a = { next: s(0), throw: s(1), return: s(2) }),
    typeof Symbol == 'function' &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function s(u) {
    return function (f) {
      return c([u, f]);
    };
  }
  function c(u) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; a && ((a = 0), u[0] && (t = 0)), t; )
      try {
        if (
          ((r = 1),
          o &&
            (i =
              u[0] & 2
                ? o.return
                : u[0]
                  ? o.throw || ((i = o.return) && i.call(o), 0)
                  : o.next) &&
            !(i = i.call(o, u[1])).done)
        )
          return i;
        switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, (o = u[1]), (u = [0]);
            continue;
          case 7:
            (u = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((i = t.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              (t.label = i[1]), (i = u);
              break;
            }
            if (i && t.label < i[2]) {
              (t.label = i[2]), t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = n.call(e, t);
      } catch (f) {
        (u = [6, f]), (o = 0);
      } finally {
        r = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ve(e) {
  var n = typeof Symbol == 'function' && Symbol.iterator,
    t = n && e[n],
    r = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  );
}
function he(e, n) {
  var t = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e),
    o,
    i = [],
    a;
  try {
    for (; (n === void 0 || n-- > 0) && !(o = r.next()).done; ) i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (t = r.return) && t.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function H(e, n, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = n.length, i; r < o; r++)
      (i || !(r in n)) &&
        (i || (i = Array.prototype.slice.call(n, 0, r)), (i[r] = n[r]));
  return e.concat(i || Array.prototype.slice.call(n));
}
function M(e) {
  return typeof e == 'function';
}
function we(e) {
  var n = function (r) {
      Error.call(r), (r.stack = new Error().stack);
    },
    t = e(n);
  return (
    (t.prototype = Object.create(Error.prototype)),
    (t.prototype.constructor = t),
    t
  );
}
var oe = we(function (e) {
  return function (t) {
    e(this),
      (this.message = t
        ? t.length +
          ` errors occurred during unsubscription:
` +
          t.map(function (r, o) {
            return o + 1 + ') ' + r.toString();
          }).join(`
  `)
        : ''),
      (this.name = 'UnsubscriptionError'),
      (this.errors = t);
  };
});
function me(e, n) {
  if (e) {
    var t = e.indexOf(n);
    0 <= t && e.splice(t, 1);
  }
}
var ee = (function () {
    function e(n) {
      (this.initialTeardown = n),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (e.prototype.unsubscribe = function () {
        var n, t, r, o, i;
        if (!this.closed) {
          this.closed = !0;
          var a = this._parentage;
          if (a)
            if (((this._parentage = null), Array.isArray(a)))
              try {
                for (var s = ve(a), c = s.next(); !c.done; c = s.next()) {
                  var u = c.value;
                  u.remove(this);
                }
              } catch (h) {
                n = { error: h };
              } finally {
                try {
                  c && !c.done && (t = s.return) && t.call(s);
                } finally {
                  if (n) throw n.error;
                }
              }
            else a.remove(this);
          var f = this.initialTeardown;
          if (M(f))
            try {
              f();
            } catch (h) {
              i = h instanceof oe ? h.errors : [h];
            }
          var l = this._finalizers;
          if (l) {
            this._finalizers = null;
            try {
              for (var d = ve(l), v = d.next(); !v.done; v = d.next()) {
                var b = v.value;
                try {
                  Me(b);
                } catch (h) {
                  (i = i ?? []),
                    h instanceof oe
                      ? (i = H(H([], he(i)), he(h.errors)))
                      : i.push(h);
                }
              }
            } catch (h) {
              r = { error: h };
            } finally {
              try {
                v && !v.done && (o = d.return) && o.call(d);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          if (i) throw new oe(i);
        }
      }),
      (e.prototype.add = function (n) {
        var t;
        if (n && n !== this)
          if (this.closed) Me(n);
          else {
            if (n instanceof e) {
              if (n.closed || n._hasParent(this)) return;
              n._addParent(this);
            }
            (this._finalizers =
              (t = this._finalizers) !== null && t !== void 0 ? t : []).push(n);
          }
      }),
      (e.prototype._hasParent = function (n) {
        var t = this._parentage;
        return t === n || (Array.isArray(t) && t.includes(n));
      }),
      (e.prototype._addParent = function (n) {
        var t = this._parentage;
        this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n;
      }),
      (e.prototype._removeParent = function (n) {
        var t = this._parentage;
        t === n ? (this._parentage = null) : Array.isArray(t) && me(t, n);
      }),
      (e.prototype.remove = function (n) {
        var t = this._finalizers;
        t && me(t, n), n instanceof e && n._removeParent(this);
      }),
      (e.EMPTY = (function () {
        var n = new e();
        return (n.closed = !0), n;
      })()),
      e
    );
  })(),
  $e = ee.EMPTY;
function qe(e) {
  return (
    e instanceof ee ||
    (e && 'closed' in e && M(e.remove) && M(e.add) && M(e.unsubscribe))
  );
}
function Me(e) {
  M(e) ? e() : e.unsubscribe();
}
var et = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  tt = {
    setTimeout: function (e, n) {
      for (var t = [], r = 2; r < arguments.length; r++)
        t[r - 2] = arguments[r];
      return setTimeout.apply(void 0, H([e, n], he(t)));
    },
    clearTimeout: function (e) {
      var n = tt.delegate;
      return ((n == null ? void 0 : n.clearTimeout) || clearTimeout)(e);
    },
    delegate: void 0,
  };
function kt(e) {
  tt.setTimeout(function () {
    throw e;
  });
}
function Re() {}
function K(e) {
  e();
}
var Se = (function (e) {
    X(n, e);
    function n(t) {
      var r = e.call(this) || this;
      return (
        (r.isStopped = !1),
        t ? ((r.destination = t), qe(t) && t.add(r)) : (r.destination = Et),
        r
      );
    }
    return (
      (n.create = function (t, r, o) {
        return new pe(t, r, o);
      }),
      (n.prototype.next = function (t) {
        this.isStopped || this._next(t);
      }),
      (n.prototype.error = function (t) {
        this.isStopped || ((this.isStopped = !0), this._error(t));
      }),
      (n.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (n.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          e.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (n.prototype._next = function (t) {
        this.destination.next(t);
      }),
      (n.prototype._error = function (t) {
        try {
          this.destination.error(t);
        } finally {
          this.unsubscribe();
        }
      }),
      (n.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      n
    );
  })(ee),
  Lt = Function.prototype.bind;
function ae(e, n) {
  return Lt.call(e, n);
}
var Pt = (function () {
    function e(n) {
      this.partialObserver = n;
    }
    return (
      (e.prototype.next = function (n) {
        var t = this.partialObserver;
        if (t.next)
          try {
            t.next(n);
          } catch (r) {
            J(r);
          }
      }),
      (e.prototype.error = function (n) {
        var t = this.partialObserver;
        if (t.error)
          try {
            t.error(n);
          } catch (r) {
            J(r);
          }
        else J(n);
      }),
      (e.prototype.complete = function () {
        var n = this.partialObserver;
        if (n.complete)
          try {
            n.complete();
          } catch (t) {
            J(t);
          }
      }),
      e
    );
  })(),
  pe = (function (e) {
    X(n, e);
    function n(t, r, o) {
      var i = e.call(this) || this,
        a;
      if (M(t) || !t)
        a = {
          next: t ?? void 0,
          error: r ?? void 0,
          complete: o ?? void 0,
        };
      else {
        var s;
        i && et.useDeprecatedNextContext
          ? ((s = Object.create(t)),
            (s.unsubscribe = function () {
              return i.unsubscribe();
            }),
            (a = {
              next: t.next && ae(t.next, s),
              error: t.error && ae(t.error, s),
              complete: t.complete && ae(t.complete, s),
            }))
          : (a = t);
      }
      return (i.destination = new Pt(a)), i;
    }
    return n;
  })(Se);
function J(e) {
  kt(e);
}
function Ft(e) {
  throw e;
}
var Et = {
    closed: !0,
    next: Re,
    error: Ft,
    complete: Re,
  },
  It = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })();
function nt(e) {
  return e;
}
function Ct(e) {
  return e.length === 0
    ? nt
    : e.length === 1
      ? e[0]
      : function (t) {
          return e.reduce(function (r, o) {
            return o(r);
          }, t);
        };
}
var ye = (function () {
  function e(n) {
    n && (this._subscribe = n);
  }
  return (
    (e.prototype.lift = function (n) {
      var t = new e();
      return (t.source = this), (t.operator = n), t;
    }),
    (e.prototype.subscribe = function (n, t, r) {
      var o = this,
        i = Mt(n) ? n : new pe(n, t, r);
      return (
        K(function () {
          var a = o,
            s = a.operator,
            c = a.source;
          i.add(s ? s.call(i, c) : c ? o._subscribe(i) : o._trySubscribe(i));
        }),
        i
      );
    }),
    (e.prototype._trySubscribe = function (n) {
      try {
        return this._subscribe(n);
      } catch (t) {
        n.error(t);
      }
    }),
    (e.prototype.forEach = function (n, t) {
      var r = this;
      return (
        (t = We(t)),
        new t(function (o, i) {
          var a = new pe({
            next: function (s) {
              try {
                n(s);
              } catch (c) {
                i(c), a.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          r.subscribe(a);
        })
      );
    }),
    (e.prototype._subscribe = function (n) {
      var t;
      return (t = this.source) === null || t === void 0
        ? void 0
        : t.subscribe(n);
    }),
    (e.prototype[It] = function () {
      return this;
    }),
    (e.prototype.pipe = function () {
      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
      return Ct(n)(this);
    }),
    (e.prototype.toPromise = function (n) {
      var t = this;
      return (
        (n = We(n)),
        new n(function (r, o) {
          var i;
          t.subscribe(
            function (a) {
              return (i = a);
            },
            function (a) {
              return o(a);
            },
            function () {
              return r(i);
            }
          );
        })
      );
    }),
    (e.create = function (n) {
      return new e(n);
    }),
    e
  );
})();
function We(e) {
  var n;
  return (n = e ?? et.Promise) !== null && n !== void 0 ? n : Promise;
}
function Vt(e) {
  return e && M(e.next) && M(e.error) && M(e.complete);
}
function Mt(e) {
  return (e && e instanceof Se) || (Vt(e) && qe(e));
}
function Rt(e) {
  return M(e == null ? void 0 : e.lift);
}
function te(e) {
  return function (n) {
    if (Rt(n))
      return n.lift(function (t) {
        try {
          return e(t, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
function ne(e, n, t, r, o) {
  return new Wt(e, n, t, r, o);
}
var Wt = (function (e) {
    X(n, e);
    function n(t, r, o, i, a, s) {
      var c = e.call(this, t) || this;
      return (
        (c.onFinalize = a),
        (c.shouldUnsubscribe = s),
        (c._next = r
          ? function (u) {
              try {
                r(u);
              } catch (f) {
                t.error(f);
              }
            }
          : e.prototype._next),
        (c._error = i
          ? function (u) {
              try {
                i(u);
              } catch (f) {
                t.error(f);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (c._complete = o
          ? function () {
              try {
                o();
              } catch (u) {
                t.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        c
      );
    }
    return (
      (n.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          e.prototype.unsubscribe.call(this),
            !r &&
              ((t = this.onFinalize) === null || t === void 0 || t.call(this));
        }
      }),
      n
    );
  })(Se),
  At = we(function (e) {
    return function () {
      e(this),
        (this.name = 'ObjectUnsubscribedError'),
        (this.message = 'object unsubscribed');
    };
  }),
  rt = (function (e) {
    X(n, e);
    function n() {
      var t = e.call(this) || this;
      return (
        (t.closed = !1),
        (t.currentObservers = null),
        (t.observers = []),
        (t.isStopped = !1),
        (t.hasError = !1),
        (t.thrownError = null),
        t
      );
    }
    return (
      (n.prototype.lift = function (t) {
        var r = new Ae(this, this);
        return (r.operator = t), r;
      }),
      (n.prototype._throwIfClosed = function () {
        if (this.closed) throw new At();
      }),
      (n.prototype.next = function (t) {
        var r = this;
        K(function () {
          var o, i;
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.currentObservers ||
              (r.currentObservers = Array.from(r.observers));
            try {
              for (
                var a = ve(r.currentObservers), s = a.next();
                !s.done;
                s = a.next()
              ) {
                var c = s.value;
                c.next(t);
              }
            } catch (u) {
              o = { error: u };
            } finally {
              try {
                s && !s.done && (i = a.return) && i.call(a);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        });
      }),
      (n.prototype.error = function (t) {
        var r = this;
        K(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            (r.hasError = r.isStopped = !0), (r.thrownError = t);
            for (var o = r.observers; o.length; ) o.shift().error(t);
          }
        });
      }),
      (n.prototype.complete = function () {
        var t = this;
        K(function () {
          if ((t._throwIfClosed(), !t.isStopped)) {
            t.isStopped = !0;
            for (var r = t.observers; r.length; ) r.shift().complete();
          }
        });
      }),
      (n.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(n.prototype, 'observed', {
        get: function () {
          var t;
          return (
            ((t = this.observers) === null || t === void 0
              ? void 0
              : t.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype._trySubscribe = function (t) {
        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
      }),
      (n.prototype._subscribe = function (t) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(t),
          this._innerSubscribe(t)
        );
      }),
      (n.prototype._innerSubscribe = function (t) {
        var r = this,
          o = this,
          i = o.hasError,
          a = o.isStopped,
          s = o.observers;
        return i || a
          ? $e
          : ((this.currentObservers = null),
            s.push(t),
            new ee(function () {
              (r.currentObservers = null), me(s, t);
            }));
      }),
      (n.prototype._checkFinalizedStatuses = function (t) {
        var r = this,
          o = r.hasError,
          i = r.thrownError,
          a = r.isStopped;
        o ? t.error(i) : a && t.complete();
      }),
      (n.prototype.asObservable = function () {
        var t = new ye();
        return (t.source = this), t;
      }),
      (n.create = function (t, r) {
        return new Ae(t, r);
      }),
      n
    );
  })(ye),
  Ae = (function (e) {
    X(n, e);
    function n(t, r) {
      var o = e.call(this) || this;
      return (o.destination = t), (o.source = r), o;
    }
    return (
      (n.prototype.next = function (t) {
        var r, o;
        (o =
          (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
          null ||
          o === void 0 ||
          o.call(r, t);
      }),
      (n.prototype.error = function (t) {
        var r, o;
        (o =
          (r = this.destination) === null || r === void 0
            ? void 0
            : r.error) === null ||
          o === void 0 ||
          o.call(r, t);
      }),
      (n.prototype.complete = function () {
        var t, r;
        (r =
          (t = this.destination) === null || t === void 0
            ? void 0
            : t.complete) === null ||
          r === void 0 ||
          r.call(t);
      }),
      (n.prototype._subscribe = function (t) {
        var r, o;
        return (o =
          (r = this.source) === null || r === void 0
            ? void 0
            : r.subscribe(t)) !== null && o !== void 0
          ? o
          : $e;
      }),
      n
    );
  })(rt),
  Tt = (function (e) {
    X(n, e);
    function n(t) {
      var r = e.call(this) || this;
      return (r._value = t), r;
    }
    return (
      Object.defineProperty(n.prototype, 'value', {
        get: function () {
          return this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype._subscribe = function (t) {
        var r = e.prototype._subscribe.call(this, t);
        return !r.closed && t.next(this._value), r;
      }),
      (n.prototype.getValue = function () {
        var t = this,
          r = t.hasError,
          o = t.thrownError,
          i = t._value;
        if (r) throw o;
        return this._throwIfClosed(), i;
      }),
      (n.prototype.next = function (t) {
        e.prototype.next.call(this, (this._value = t));
      }),
      n
    );
  })(rt),
  Zt = new ye(function (e) {
    return e.complete();
  }),
  it = we(function (e) {
    return function () {
      e(this),
        (this.name = 'EmptyError'),
        (this.message = 'no elements in sequence');
    };
  });
function xe(e, n) {
  return te(function (t, r) {
    var o = 0;
    t.subscribe(
      ne(r, function (i) {
        return e.call(n, i, o++) && r.next(i);
      })
    );
  });
}
function Gt(e) {
  return te(function (n, t) {
    var r = !1;
    n.subscribe(
      ne(
        t,
        function (o) {
          (r = !0), t.next(o);
        },
        function () {
          r || t.next(e), t.complete();
        }
      )
    );
  });
}
function jt(e) {
  return e <= 0
    ? function () {
        return Zt;
      }
    : te(function (n, t) {
        var r = 0;
        n.subscribe(
          ne(t, function (o) {
            ++r <= e && (t.next(o), e <= r && t.complete());
          })
        );
      });
}
function Yt(e) {
  return (
    e === void 0 && (e = Ot),
    te(function (n, t) {
      var r = !1;
      n.subscribe(
        ne(
          t,
          function (o) {
            (r = !0), t.next(o);
          },
          function () {
            return r ? t.complete() : t.error(e());
          }
        )
      );
    })
  );
}
function Ot() {
  return new it();
}
function Dt(e, n) {
  var t = arguments.length >= 2;
  return function (r) {
    return r.pipe(
      e
        ? xe(function (o, i) {
            return e(o, i, r);
          })
        : nt,
      jt(1),
      t
        ? Gt(n)
        : Yt(function () {
            return new it();
          })
    );
  };
}
var ot = '4.4.1';
function z(e, n) {
  return new Promise(function (t) {
    return setTimeout(t, e, n);
  });
}
function q() {
  return z(0);
}
function zt(e, n) {
  n === void 0 && (n = 1 / 0);
  var t = window.requestIdleCallback;
  return t
    ? new Promise(function (r) {
        return t.call(
          window,
          function () {
            return r();
          },
          { timeout: n }
        );
      })
    : z(Math.min(e, n));
}
function at(e) {
  return !!e && typeof e.then == 'function';
}
function Te(e, n) {
  try {
    var t = e();
    at(t)
      ? t.then(
          function (r) {
            return n(!0, r);
          },
          function (r) {
            return n(!1, r);
          }
        )
      : n(!0, t);
  } catch (r) {
    n(!1, r);
  }
}
function Ze(e, n, t) {
  return (
    t === void 0 && (t = 16),
    E(this, void 0, void 0, function () {
      var r, o, i, a;
      return I(this, function (s) {
        switch (s.label) {
          case 0:
            (r = Array(e.length)), (o = Date.now()), (i = 0), (s.label = 1);
          case 1:
            return i < e.length
              ? ((r[i] = n(e[i], i)),
                (a = Date.now()),
                a >= o + t ? ((o = a), [4, z(0)]) : [3, 3])
              : [3, 4];
          case 2:
            s.sent(), (s.label = 3);
          case 3:
            return ++i, [3, 1];
          case 4:
            return [2, r];
        }
      });
    })
  );
}
function _(e) {
  e.then(void 0, function () {});
}
function Xt(e, n) {
  for (var t = 0, r = e.length; t < r; ++t) if (e[t] === n) return !0;
  return !1;
}
function Ht(e, n) {
  return !Xt(e, n);
}
function ke(e) {
  return parseInt(e);
}
function C(e) {
  return parseFloat(e);
}
function R(e, n) {
  return typeof e == 'number' && isNaN(e) ? n : e;
}
function L(e) {
  return e.reduce(function (n, t) {
    return n + (t ? 1 : 0);
  }, 0);
}
function st(e, n) {
  if ((n === void 0 && (n = 1), Math.abs(n) >= 1)) return Math.round(e / n) * n;
  var t = 1 / n;
  return Math.round(e * t) / t;
}
function _t(e) {
  for (
    var n,
      t,
      r = "Unexpected syntax '".concat(e, "'"),
      o = /^\s*([a-z-]*)(.*)$/i.exec(e),
      i = o[1] || void 0,
      a = {},
      s = /([.:#][\w-]+|\[.+?\])/gi,
      c = function (d, v) {
        (a[d] = a[d] || []), a[d].push(v);
      };
    ;

  ) {
    var u = s.exec(o[2]);
    if (!u) break;
    var f = u[0];
    switch (f[0]) {
      case '.':
        c('class', f.slice(1));
        break;
      case '#':
        c('id', f.slice(1));
        break;
      case '[': {
        var l = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(
          f
        );
        if (l)
          c(
            l[1],
            (t = (n = l[4]) !== null && n !== void 0 ? n : l[5]) !== null &&
              t !== void 0
              ? t
              : ''
          );
        else throw new Error(r);
        break;
      }
      default:
        throw new Error(r);
    }
  }
  return [i, a];
}
function Nt(e) {
  for (var n = new Uint8Array(e.length), t = 0; t < e.length; t++) {
    var r = e.charCodeAt(t);
    if (r > 127) return new TextEncoder().encode(e);
    n[t] = r;
  }
  return n;
}
function A(e, n) {
  var t = e[0] >>> 16,
    r = e[0] & 65535,
    o = e[1] >>> 16,
    i = e[1] & 65535,
    a = n[0] >>> 16,
    s = n[0] & 65535,
    c = n[1] >>> 16,
    u = n[1] & 65535,
    f = 0,
    l = 0,
    d = 0,
    v = 0;
  (v += i + u),
    (d += v >>> 16),
    (v &= 65535),
    (d += o + c),
    (l += d >>> 16),
    (d &= 65535),
    (l += r + s),
    (f += l >>> 16),
    (l &= 65535),
    (f += t + a),
    (f &= 65535),
    (e[0] = (f << 16) | l),
    (e[1] = (d << 16) | v);
}
function F(e, n) {
  var t = e[0] >>> 16,
    r = e[0] & 65535,
    o = e[1] >>> 16,
    i = e[1] & 65535,
    a = n[0] >>> 16,
    s = n[0] & 65535,
    c = n[1] >>> 16,
    u = n[1] & 65535,
    f = 0,
    l = 0,
    d = 0,
    v = 0;
  (v += i * u),
    (d += v >>> 16),
    (v &= 65535),
    (d += o * u),
    (l += d >>> 16),
    (d &= 65535),
    (d += i * c),
    (l += d >>> 16),
    (d &= 65535),
    (l += r * u),
    (f += l >>> 16),
    (l &= 65535),
    (l += o * c),
    (f += l >>> 16),
    (l &= 65535),
    (l += i * s),
    (f += l >>> 16),
    (l &= 65535),
    (f += t * u + r * c + o * s + i * a),
    (f &= 65535),
    (e[0] = (f << 16) | l),
    (e[1] = (d << 16) | v);
}
function Y(e, n) {
  var t = e[0];
  (n %= 64),
    n === 32
      ? ((e[0] = e[1]), (e[1] = t))
      : n < 32
        ? ((e[0] = (t << n) | (e[1] >>> (32 - n))),
          (e[1] = (e[1] << n) | (t >>> (32 - n))))
        : ((n -= 32),
          (e[0] = (e[1] << n) | (t >>> (32 - n))),
          (e[1] = (t << n) | (e[1] >>> (32 - n))));
}
function P(e, n) {
  (n %= 64),
    n !== 0 &&
      (n < 32
        ? ((e[0] = e[1] >>> (32 - n)), (e[1] = e[1] << n))
        : ((e[0] = e[1] << (n - 32)), (e[1] = 0)));
}
function g(e, n) {
  (e[0] ^= n[0]), (e[1] ^= n[1]);
}
var Bt = [4283543511, 3981806797],
  Jt = [3301882366, 444984403];
function Ge(e) {
  var n = [0, e[0] >>> 1];
  g(e, n),
    F(e, Bt),
    (n[1] = e[0] >>> 1),
    g(e, n),
    F(e, Jt),
    (n[1] = e[0] >>> 1),
    g(e, n);
}
var U = [2277735313, 289559509],
  Q = [1291169091, 658871167],
  je = [0, 5],
  Ut = [0, 1390208809],
  Qt = [0, 944331445];
function Kt(e, n) {
  var t = Nt(e);
  n = n || 0;
  var r = [0, t.length],
    o = r[1] % 16,
    i = r[1] - o,
    a = [0, n],
    s = [0, n],
    c = [0, 0],
    u = [0, 0],
    f;
  for (f = 0; f < i; f = f + 16)
    (c[0] = t[f + 4] | (t[f + 5] << 8) | (t[f + 6] << 16) | (t[f + 7] << 24)),
      (c[1] = t[f] | (t[f + 1] << 8) | (t[f + 2] << 16) | (t[f + 3] << 24)),
      (u[0] =
        t[f + 12] | (t[f + 13] << 8) | (t[f + 14] << 16) | (t[f + 15] << 24)),
      (u[1] =
        t[f + 8] | (t[f + 9] << 8) | (t[f + 10] << 16) | (t[f + 11] << 24)),
      F(c, U),
      Y(c, 31),
      F(c, Q),
      g(a, c),
      Y(a, 27),
      A(a, s),
      F(a, je),
      A(a, Ut),
      F(u, Q),
      Y(u, 33),
      F(u, U),
      g(s, u),
      Y(s, 31),
      A(s, a),
      F(s, je),
      A(s, Qt);
  (c[0] = 0), (c[1] = 0), (u[0] = 0), (u[1] = 0);
  var l = [0, 0];
  switch (o) {
    case 15:
      (l[1] = t[f + 14]), P(l, 48), g(u, l);
    case 14:
      (l[1] = t[f + 13]), P(l, 40), g(u, l);
    case 13:
      (l[1] = t[f + 12]), P(l, 32), g(u, l);
    case 12:
      (l[1] = t[f + 11]), P(l, 24), g(u, l);
    case 11:
      (l[1] = t[f + 10]), P(l, 16), g(u, l);
    case 10:
      (l[1] = t[f + 9]), P(l, 8), g(u, l);
    case 9:
      (l[1] = t[f + 8]), g(u, l), F(u, Q), Y(u, 33), F(u, U), g(s, u);
    case 8:
      (l[1] = t[f + 7]), P(l, 56), g(c, l);
    case 7:
      (l[1] = t[f + 6]), P(l, 48), g(c, l);
    case 6:
      (l[1] = t[f + 5]), P(l, 40), g(c, l);
    case 5:
      (l[1] = t[f + 4]), P(l, 32), g(c, l);
    case 4:
      (l[1] = t[f + 3]), P(l, 24), g(c, l);
    case 3:
      (l[1] = t[f + 2]), P(l, 16), g(c, l);
    case 2:
      (l[1] = t[f + 1]), P(l, 8), g(c, l);
    case 1:
      (l[1] = t[f]), g(c, l), F(c, U), Y(c, 31), F(c, Q), g(a, c);
  }
  return (
    g(a, r),
    g(s, r),
    A(a, s),
    A(s, a),
    Ge(a),
    Ge(s),
    A(a, s),
    A(s, a),
    ('00000000' + (a[0] >>> 0).toString(16)).slice(-8) +
      ('00000000' + (a[1] >>> 0).toString(16)).slice(-8) +
      ('00000000' + (s[0] >>> 0).toString(16)).slice(-8) +
      ('00000000' + (s[1] >>> 0).toString(16)).slice(-8)
  );
}
function $t(e) {
  var n;
  return de(
    {
      name: e.name,
      message: e.message,
      stack:
        (n = e.stack) === null || n === void 0
          ? void 0
          : n.split(`
`),
    },
    e
  );
}
function qt(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e));
}
function en(e) {
  return typeof e != 'function';
}
function tn(e, n) {
  var t = new Promise(function (r) {
    var o = Date.now();
    Te(e.bind(null, n), function () {
      for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
      var s = Date.now() - o;
      if (!i[0])
        return r(function () {
          return { error: i[1], duration: s };
        });
      var c = i[1];
      if (en(c))
        return r(function () {
          return { value: c, duration: s };
        });
      r(function () {
        return new Promise(function (u) {
          var f = Date.now();
          Te(c, function () {
            for (var l = [], d = 0; d < arguments.length; d++)
              l[d] = arguments[d];
            var v = s + Date.now() - f;
            if (!l[0]) return u({ error: l[1], duration: v });
            u({ value: l[1], duration: v });
          });
        });
      });
    });
  });
  return (
    _(t),
    function () {
      return t.then(function (o) {
        return o();
      });
    }
  );
}
function nn(e, n, t) {
  var r = Object.keys(e).filter(function (i) {
      return Ht(t, i);
    }),
    o = Ze(r, function (i) {
      return tn(e[i], n);
    });
  return (
    _(o),
    function () {
      return E(this, void 0, void 0, function () {
        var a, s, c, u, f;
        return I(this, function (l) {
          switch (l.label) {
            case 0:
              return [4, o];
            case 1:
              return (
                (a = l.sent()),
                [
                  4,
                  Ze(a, function (d) {
                    var v = d();
                    return _(v), v;
                  }),
                ]
              );
            case 2:
              return (
                (s = l.sent()),
                [
                  4,
                  Promise.all(s),
                  // Keeping the component keys order the same as the source keys order
                ]
              );
            case 3:
              for (c = l.sent(), u = {}, f = 0; f < r.length; ++f)
                u[r[f]] = c[f];
              return [2, u];
          }
        });
      });
    }
  );
}
function ct() {
  var e = window,
    n = navigator;
  return (
    L([
      'MSCSSMatrix' in e,
      'msSetImmediate' in e,
      'msIndexedDB' in e,
      'msMaxTouchPoints' in n,
      'msPointerEnabled' in n,
    ]) >= 4
  );
}
function rn() {
  var e = window,
    n = navigator;
  return (
    L([
      'msWriteProfilerMark' in e,
      'MSStream' in e,
      'msLaunchUri' in n,
      'msSaveBlob' in n,
    ]) >= 3 && !ct()
  );
}
function re() {
  var e = window,
    n = navigator;
  return (
    L([
      'webkitPersistentStorage' in n,
      'webkitTemporaryStorage' in n,
      n.vendor.indexOf('Google') === 0,
      'webkitResolveLocalFileSystemURL' in e,
      'BatteryManager' in e,
      'webkitMediaStream' in e,
      'webkitSpeechGrammar' in e,
    ]) >= 5
  );
}
function V() {
  var e = window,
    n = navigator;
  return (
    L([
      'ApplePayError' in e,
      'CSSPrimitiveValue' in e,
      'Counter' in e,
      n.vendor.indexOf('Apple') === 0,
      'getStorageUpdates' in n,
      'WebKitMediaKeys' in e,
    ]) >= 4
  );
}
function Le() {
  var e = window,
    n = e.HTMLElement,
    t = e.Document;
  return (
    L([
      'safari' in e,
      !('ongestureend' in e),
      !('TouchEvent' in e),
      !('orientation' in e),
      n && !('autocapitalize' in n.prototype),
      t && 'pointerLockElement' in t.prototype,
    ]) >= 4
  );
}
function N() {
  var e = window;
  return qt(e.print)
    ? L([
        // Incorrect in Safari <= 14 (iOS and macOS)
        String(e.browser) === '[object WebPageNamespace]',
        // Incorrect in desktop Safari and iOS Safari <= 15
        'MicrodataExtractor' in e,
      ]) >= 1
    : !1;
}
function ut() {
  var e,
    n,
    t = window;
  return (
    L([
      'buildID' in navigator,
      'MozAppearance' in
        ((n =
          (e = document.documentElement) === null || e === void 0
            ? void 0
            : e.style) !== null && n !== void 0
          ? n
          : {}),
      'onmozfullscreenchange' in t,
      'mozInnerScreenX' in t,
      'CSSMozDocumentRule' in t,
      'CanvasCaptureMediaStream' in t,
    ]) >= 4
  );
}
function on() {
  var e = window;
  return (
    L([
      !('MediaSettingsRange' in e),
      'RTCEncodedAudioFrame' in e,
      '' + e.Intl == '[object Intl]',
      '' + e.Reflect == '[object Reflect]',
    ]) >= 3
  );
}
function an() {
  var e = window;
  return (
    L([
      'DOMRectList' in e,
      'RTCPeerConnectionIceEvent' in e,
      'SVGGeometryElement' in e,
      'ontransitioncancel' in e,
    ]) >= 3
  );
}
function B() {
  var e = window,
    n = navigator,
    t = e.CSS,
    r = e.HTMLButtonElement;
  return (
    L([
      !('getStorageUpdates' in n),
      r && 'popover' in r.prototype,
      'CSSCounterStyleRule' in e,
      t.supports('font-size-adjust: ex-height 0.5'),
      t.supports('text-transform: full-width'),
    ]) >= 4
  );
}
function sn() {
  if (navigator.platform === 'iPad') return !0;
  var e = screen,
    n = e.width / e.height;
  return (
    L([
      'MediaSource' in window,
      !!Element.prototype.webkitRequestFullscreen,
      // iPhone 4S that runs iOS 9 matches this, but it is not supported
      n > 0.65 && n < 1.53,
    ]) >= 2
  );
}
function cn() {
  var e = document;
  return (
    e.fullscreenElement ||
    e.msFullscreenElement ||
    e.mozFullScreenElement ||
    e.webkitFullscreenElement ||
    null
  );
}
function un() {
  var e = document;
  return (
    e.exitFullscreen ||
    e.msExitFullscreen ||
    e.mozCancelFullScreen ||
    e.webkitExitFullscreen
  ).call(e);
}
function Pe() {
  var e = re(),
    n = ut(),
    t = window,
    r = navigator,
    o = 'connection';
  return e
    ? L([
        !('SharedWorker' in t),
        // `typechange` is deprecated, but it's still present on Android (tested on Chrome Mobile 117)
        // Removal proposal https://bugs.chromium.org/p/chromium/issues/detail?id=699892
        // Note: this expression returns true on ChromeOS, so additional detectors are required to avoid false-positives
        r[o] && 'ontypechange' in r[o],
        !('sinkId' in new window.Audio()),
      ]) >= 2
    : n
      ? L([
          'onorientationchange' in t,
          'orientation' in t,
          /android/i.test(navigator.appVersion),
        ]) >= 2
      : !1;
}
function ln() {
  return vn() ? -4 : fn();
}
function fn() {
  var e = window,
    n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!n) return -2;
  if (dn()) return -1;
  var t = 4500,
    r = 5e3,
    o = new n(1, r, 44100),
    i = o.createOscillator();
  (i.type = 'triangle'), (i.frequency.value = 1e4);
  var a = o.createDynamicsCompressor();
  (a.threshold.value = -50),
    (a.knee.value = 40),
    (a.ratio.value = 12),
    (a.attack.value = 0),
    (a.release.value = 0.25),
    i.connect(a),
    a.connect(o.destination),
    i.start(0);
  var s = hn(o),
    c = s[0],
    u = s[1],
    f = c.then(
      function (l) {
        return mn(l.getChannelData(0).subarray(t));
      },
      function (l) {
        if (l.name === 'timeout' || l.name === 'suspended') return -3;
        throw l;
      }
    );
  return (
    _(f),
    function () {
      return u(), f;
    }
  );
}
function dn() {
  return V() && !Le() && !an();
}
function vn() {
  return V() && B() && N();
}
function hn(e) {
  var n = 3,
    t = 500,
    r = 500,
    o = 5e3,
    i = function () {},
    a = new Promise(function (s, c) {
      var u = !1,
        f = 0,
        l = 0;
      e.oncomplete = function (b) {
        return s(b.renderedBuffer);
      };
      var d = function () {
          setTimeout(
            function () {
              return c(
                Ye(
                  'timeout'
                  /* InnerErrorName.Timeout */
                )
              );
            },
            Math.min(r, l + o - Date.now())
          );
        },
        v = function () {
          try {
            var b = e.startRendering();
            switch ((at(b) && _(b), e.state)) {
              case 'running':
                (l = Date.now()), u && d();
                break;
              case 'suspended':
                document.hidden || f++,
                  u && f >= n
                    ? c(
                        Ye(
                          'suspended'
                          /* InnerErrorName.Suspended */
                        )
                      )
                    : setTimeout(v, t);
                break;
            }
          } catch (h) {
            c(h);
          }
        };
      v(),
        (i = function () {
          u || ((u = !0), l > 0 && d());
        });
    });
  return [a, i];
}
function mn(e) {
  for (var n = 0, t = 0; t < e.length; ++t) n += Math.abs(e[t]);
  return n;
}
function Ye(e) {
  var n = new Error(e);
  return (n.name = e), n;
}
function lt(e, n, t) {
  var r, o, i;
  return (
    t === void 0 && (t = 50),
    E(this, void 0, void 0, function () {
      var a, s;
      return I(this, function (c) {
        switch (c.label) {
          case 0:
            (a = document), (c.label = 1);
          case 1:
            return a.body ? [3, 3] : [4, z(t)];
          case 2:
            return c.sent(), [3, 1];
          case 3:
            (s = a.createElement('iframe')), (c.label = 4);
          case 4:
            return (
              c.trys.push([4, , 10, 11]),
              [
                4,
                new Promise(function (u, f) {
                  var l = !1,
                    d = function () {
                      (l = !0), u();
                    },
                    v = function (w) {
                      (l = !0), f(w);
                    };
                  (s.onload = d), (s.onerror = v);
                  var b = s.style;
                  b.setProperty('display', 'block', 'important'),
                    (b.position = 'absolute'),
                    (b.top = '0'),
                    (b.left = '0'),
                    (b.visibility = 'hidden'),
                    n && 'srcdoc' in s
                      ? (s.srcdoc = n)
                      : (s.src = 'about:blank'),
                    a.body.appendChild(s);
                  var h = function () {
                    var w, y;
                    l ||
                      (((y =
                        (w = s.contentWindow) === null || w === void 0
                          ? void 0
                          : w.document) === null || y === void 0
                        ? void 0
                        : y.readyState) === 'complete'
                        ? d()
                        : setTimeout(h, 10));
                  };
                  h();
                }),
              ]
            );
          case 5:
            c.sent(), (c.label = 6);
          case 6:
            return !(
              (o =
                (r = s.contentWindow) === null || r === void 0
                  ? void 0
                  : r.document) === null || o === void 0
            ) && o.body
              ? [3, 8]
              : [4, z(t)];
          case 7:
            return c.sent(), [3, 6];
          case 8:
            return [4, e(s, s.contentWindow)];
          case 9:
            return [2, c.sent()];
          case 10:
            return (
              (i = s.parentNode) === null || i === void 0 || i.removeChild(s),
              [
                7,
                /*endfinally*/
              ]
            );
          case 11:
            return [
              2,
              /*return*/
            ];
        }
      });
    })
  );
}
function pn(e) {
  for (
    var n = _t(e),
      t = n[0],
      r = n[1],
      o = document.createElement(t ?? 'div'),
      i = 0,
      a = Object.keys(r);
    i < a.length;
    i++
  ) {
    var s = a[i],
      c = r[s].join(' ');
    s === 'style' ? yn(o.style, c) : o.setAttribute(s, c);
  }
  return o;
}
function yn(e, n) {
  for (var t = 0, r = n.split(';'); t < r.length; t++) {
    var o = r[t],
      i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
    if (i) {
      var a = i[1],
        s = i[2],
        c = i[4];
      e.setProperty(a, s, c || '');
    }
  }
}
var gn = 'mmMwWLliI0O&1',
  bn = '48px',
  O = ['monospace', 'sans-serif', 'serif'],
  Oe = [
    // This is android-specific font from "Roboto" family
    'sans-serif-thin',
    'ARNO PRO',
    'Agency FB',
    'Arabic Typesetting',
    'Arial Unicode MS',
    'AvantGarde Bk BT',
    'BankGothic Md BT',
    'Batang',
    'Bitstream Vera Sans Mono',
    'Calibri',
    'Century',
    'Century Gothic',
    'Clarendon',
    'EUROSTILE',
    'Franklin Gothic',
    'Futura Bk BT',
    'Futura Md BT',
    'GOTHAM',
    'Gill Sans',
    'HELV',
    'Haettenschweiler',
    'Helvetica Neue',
    'Humanst521 BT',
    'Leelawadee',
    'Letter Gothic',
    'Levenim MT',
    'Lucida Bright',
    'Lucida Sans',
    'Menlo',
    'MS Mincho',
    'MS Outlook',
    'MS Reference Specialty',
    'MS UI Gothic',
    'MT Extra',
    'MYRIAD PRO',
    'Marlett',
    'Meiryo UI',
    'Microsoft Uighur',
    'Minion Pro',
    'Monotype Corsiva',
    'PMingLiU',
    'Pristina',
    'SCRIPTINA',
    'Segoe UI Light',
    'Serifa',
    'SimHei',
    'Small Fonts',
    'Staccato222 BT',
    'TRAJAN PRO',
    'Univers CE 55 Medium',
    'Vrinda',
    'ZWAdobeF',
  ];
function wn() {
  var e = this;
  return lt(function (n, t) {
    var r = t.document;
    return E(e, void 0, void 0, function () {
      var o, i, a, s, c, u, f, l, d, v, b, h;
      return I(this, function (w) {
        switch (w.label) {
          case 0:
            return (
              (o = r.body),
              (o.style.fontSize = bn),
              (i = r.createElement('div')),
              i.style.setProperty('visibility', 'hidden', 'important'),
              (a = {}),
              (s = {}),
              (c = function (y) {
                var S = r.createElement('span'),
                  x = S.style;
                return (
                  (x.position = 'absolute'),
                  (x.top = '0'),
                  (x.left = '0'),
                  (x.fontFamily = y),
                  (S.textContent = gn),
                  i.appendChild(S),
                  S
                );
              }),
              (u = function (y, S) {
                return c("'".concat(y, "',").concat(S));
              }),
              (f = function () {
                return O.map(c);
              }),
              (l = function () {
                for (
                  var y = {},
                    S = function (Z) {
                      y[Z] = O.map(function (G) {
                        return u(Z, G);
                      });
                    },
                    x = 0,
                    W = Oe;
                  x < W.length;
                  x++
                ) {
                  var T = W[x];
                  S(T);
                }
                return y;
              }),
              (d = function (y) {
                return O.some(function (S, x) {
                  return (
                    y[x].offsetWidth !== a[S] || y[x].offsetHeight !== s[S]
                  );
                });
              }),
              (v = f()),
              (b = l()),
              o.appendChild(i),
              [
                4,
                q(),
                // get the default width for the three base fonts
              ]
            );
          case 1:
            for (w.sent(), h = 0; h < O.length; h++)
              (a[O[h]] = v[h].offsetWidth), (s[O[h]] = v[h].offsetHeight);
            return [
              2,
              Oe.filter(function (y) {
                return d(b[y]);
              }),
            ];
        }
      });
    });
  });
}
function Sn() {
  var e = navigator.plugins;
  if (e) {
    for (var n = [], t = 0; t < e.length; ++t) {
      var r = e[t];
      if (r) {
        for (var o = [], i = 0; i < r.length; ++i) {
          var a = r[i];
          o.push({
            type: a.type,
            suffixes: a.suffixes,
          });
        }
        n.push({
          name: r.name,
          description: r.description,
          mimeTypes: o,
        });
      }
    }
    return n;
  }
}
function xn() {
  return kn(Vn());
}
function kn(e) {
  return E(this, void 0, void 0, function () {
    var n, t, r, o, i, a, s;
    return I(this, function (c) {
      switch (c.label) {
        case 0:
          return (
            (n = !1),
            (o = Ln()),
            (i = o[0]),
            (a = o[1]),
            Pn(i, a) ? [3, 1] : ((t = r = 'unsupported'), [3, 4])
          );
        case 1:
          return (n = Fn(a)), e ? ((t = r = 'skipped'), [3, 4]) : [3, 2];
        case 2:
          return [4, En(i, a)];
        case 3:
          (s = c.sent()), (t = s[0]), (r = s[1]), (c.label = 4);
        case 4:
          return [2, { winding: n, geometry: t, text: r }];
      }
    });
  });
}
function Ln() {
  var e = document.createElement('canvas');
  return (e.width = 1), (e.height = 1), [e, e.getContext('2d')];
}
function Pn(e, n) {
  return !!(n && e.toDataURL);
}
function Fn(e) {
  return (
    e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, 'evenodd')
  );
}
function En(e, n) {
  return E(this, void 0, void 0, function () {
    var t, r, o;
    return I(this, function (i) {
      switch (i.label) {
        case 0:
          return In(e, n), [4, q()];
        case 1:
          return (
            i.sent(),
            (t = se(e)),
            (r = se(e)),
            t !== r
              ? [
                  2,
                  [
                    'unstable',
                    'unstable',
                    /* ImageStatus.Unstable */
                  ],
                ]
              : (Cn(e, n), [4, q()])
          );
        case 2:
          return i.sent(), (o = se(e)), [2, [o, t]];
      }
    });
  });
}
function In(e, n) {
  (e.width = 240),
    (e.height = 60),
    (n.textBaseline = 'alphabetic'),
    (n.fillStyle = '#f60'),
    n.fillRect(100, 1, 62, 20),
    (n.fillStyle = '#069'),
    (n.font = '11pt "Times New Roman"');
  var t = 'Cwm fjordbank gly '.concat(
    '😃'
    /* 😃 */
  );
  n.fillText(t, 2, 15),
    (n.fillStyle = 'rgba(102, 204, 0, 0.2)'),
    (n.font = '18pt Arial'),
    n.fillText(t, 4, 45);
}
function Cn(e, n) {
  (e.width = 122), (e.height = 110), (n.globalCompositeOperation = 'multiply');
  for (
    var t = 0,
      r = [
        ['#f2f', 40, 40],
        ['#2ff', 80, 40],
        ['#ff2', 60, 80],
      ];
    t < r.length;
    t++
  ) {
    var o = r[t],
      i = o[0],
      a = o[1],
      s = o[2];
    (n.fillStyle = i),
      n.beginPath(),
      n.arc(a, s, 40, 0, Math.PI * 2, !0),
      n.closePath(),
      n.fill();
  }
  (n.fillStyle = '#f9c'),
    n.arc(60, 60, 60, 0, Math.PI * 2, !0),
    n.arc(60, 60, 20, 0, Math.PI * 2, !0),
    n.fill('evenodd');
}
function se(e) {
  return e.toDataURL();
}
function Vn() {
  return V() && B() && N();
}
function Mn() {
  var e = navigator,
    n = 0,
    t;
  e.maxTouchPoints !== void 0
    ? (n = ke(e.maxTouchPoints))
    : e.msMaxTouchPoints !== void 0 && (n = e.msMaxTouchPoints);
  try {
    document.createEvent('TouchEvent'), (t = !0);
  } catch {
    t = !1;
  }
  var r = 'ontouchstart' in window;
  return {
    maxTouchPoints: n,
    touchEvent: t,
    touchStart: r,
  };
}
function Rn() {
  return navigator.oscpu;
}
function Wn() {
  var e = navigator,
    n = [],
    t = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if ((t !== void 0 && n.push([t]), Array.isArray(e.languages)))
    (re() && on()) || n.push(e.languages);
  else if (typeof e.languages == 'string') {
    var r = e.languages;
    r && n.push(r.split(','));
  }
  return n;
}
function An() {
  return window.screen.colorDepth;
}
function Tn() {
  return R(C(navigator.deviceMemory), void 0);
}
function Zn() {
  if (!(V() && B() && N())) return Gn();
}
function Gn() {
  var e = screen,
    n = function (r) {
      return R(ke(r), null);
    },
    t = [n(e.width), n(e.height)];
  return t.sort().reverse(), t;
}
var jn = 2500,
  Yn = 10,
  $,
  ce;
function On() {
  if (ce === void 0) {
    var e = function () {
      var n = ge();
      be(n) ? (ce = setTimeout(e, jn)) : (($ = n), (ce = void 0));
    };
    e();
  }
}
function Dn() {
  var e = this;
  return (
    On(),
    function () {
      return E(e, void 0, void 0, function () {
        var n;
        return I(this, function (t) {
          switch (t.label) {
            case 0:
              return (
                (n = ge()),
                be(n)
                  ? $
                    ? [2, H([], $, !0)]
                    : cn()
                      ? [4, un()]
                      : [3, 2]
                  : [3, 2]
              );
            case 1:
              t.sent(), (n = ge()), (t.label = 2);
            case 2:
              return be(n) || ($ = n), [2, n];
          }
        });
      });
    }
  );
}
function zn() {
  var e = this;
  if (V() && B() && N())
    return function () {
      return Promise.resolve(void 0);
    };
  var n = Dn();
  return function () {
    return E(e, void 0, void 0, function () {
      var t, r;
      return I(this, function (o) {
        switch (o.label) {
          case 0:
            return [4, n()];
          case 1:
            return (
              (t = o.sent()),
              (r = function (i) {
                return i === null ? null : st(i, Yn);
              }),
              [2, [r(t[0]), r(t[1]), r(t[2]), r(t[3])]]
            );
        }
      });
    });
  };
}
function ge() {
  var e = screen;
  return [
    R(C(e.availTop), null),
    R(C(e.width) - C(e.availWidth) - R(C(e.availLeft), 0), null),
    R(C(e.height) - C(e.availHeight) - R(C(e.availTop), 0), null),
    R(C(e.availLeft), null),
  ];
}
function be(e) {
  for (var n = 0; n < 4; ++n) if (e[n]) return !1;
  return !0;
}
function Xn() {
  return R(ke(navigator.hardwareConcurrency), void 0);
}
function Hn() {
  var e,
    n = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (n) {
    var t = new n().resolvedOptions().timeZone;
    if (t) return t;
  }
  var r = -_n();
  return 'UTC'.concat(r >= 0 ? '+' : '').concat(r);
}
function _n() {
  var e = /* @__PURE__ */ new Date().getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    C(new Date(e, 0, 1).getTimezoneOffset()),
    C(new Date(e, 6, 1).getTimezoneOffset())
  );
}
function Nn() {
  try {
    return !!window.sessionStorage;
  } catch {
    return !0;
  }
}
function Bn() {
  try {
    return !!window.localStorage;
  } catch {
    return !0;
  }
}
function Jn() {
  if (!(ct() || rn()))
    try {
      return !!window.indexedDB;
    } catch {
      return !0;
    }
}
function Un() {
  return !!window.openDatabase;
}
function Qn() {
  return navigator.cpuClass;
}
function Kn() {
  var e = navigator.platform;
  return e === 'MacIntel' && V() && !Le() ? (sn() ? 'iPad' : 'iPhone') : e;
}
function $n() {
  return navigator.vendor || '';
}
function qn() {
  for (
    var e = [],
      n = 0,
      t = [
        // Blink and some browsers on iOS
        'chrome',
        // Safari on macOS
        'safari',
        // Chrome on iOS (checked in 85 on 13 and 87 on 14)
        '__crWeb',
        '__gCrWeb',
        // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
        'yandex',
        // Yandex Browser on iOS (checked in 21.2 on 14)
        '__yb',
        '__ybro',
        // Firefox on iOS (checked in 32 on 14)
        '__firefox__',
        // Edge on iOS (checked in 46 on 14)
        '__edgeTrackingPreventionStatistics',
        'webkit',
        // Opera Touch on iOS (checked in 2.6 on 14)
        'oprt',
        // Samsung Internet on Android (checked in 11.1)
        'samsungAr',
        // UC Browser on Android (checked in 12.10 and 13.0)
        'ucweb',
        'UCShellJava',
        // Puffin on Android (checked in 9.0)
        'puffinDevice',
        // UC on iOS and Opera on Android have no specific global variables
        // Edge for Android isn't checked
      ];
    n < t.length;
    n++
  ) {
    var r = t[n],
      o = window[r];
    o && typeof o == 'object' && e.push(r);
  }
  return e.sort();
}
function er() {
  var e = document;
  try {
    e.cookie = 'cookietest=1; SameSite=Strict;';
    var n = e.cookie.indexOf('cookietest=') !== -1;
    return (
      (e.cookie =
        'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT'),
      n
    );
  } catch {
    return !1;
  }
}
function tr() {
  var e = atob;
  return {
    abpIndo: [
      '#Iklan-Melayang',
      '#Kolom-Iklan-728',
      '#SidebarIklan-wrapper',
      '[title="ALIENBOLA" i]',
      e('I0JveC1CYW5uZXItYWRz'),
    ],
    abpvn: [
      '.quangcao',
      '#mobileCatfish',
      e('LmNsb3NlLWFkcw=='),
      '[id^="bn_bottom_fixed_"]',
      '#pmadv',
    ],
    adBlockFinland: [
      '.mainostila',
      e('LnNwb25zb3JpdA=='),
      '.ylamainos',
      e('YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd'),
      e('YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd'),
    ],
    adBlockPersian: [
      '#navbar_notice_50',
      '.kadr',
      'TABLE[width="140px"]',
      '#divAgahi',
      e('YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd'),
    ],
    adBlockWarningRemoval: [
      '#adblock-honeypot',
      '.adblocker-root',
      '.wp_adblock_detect',
      e('LmhlYWRlci1ibG9ja2VkLWFk'),
      e('I2FkX2Jsb2NrZXI='),
    ],
    adGuardAnnoyances: [
      '.hs-sosyal',
      '#cookieconsentdiv',
      'div[class^="app_gdpr"]',
      '.as-oil',
      '[data-cypress="soft-push-notification-modal"]',
    ],
    adGuardBase: [
      '.BetterJsPopOverlay',
      e('I2FkXzMwMFgyNTA='),
      e('I2Jhbm5lcmZsb2F0MjI='),
      e('I2NhbXBhaWduLWJhbm5lcg=='),
      e('I0FkLUNvbnRlbnQ='),
    ],
    adGuardChinese: [
      e('LlppX2FkX2FfSA=='),
      e('YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd'),
      '#widget-quan',
      e('YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd'),
      e('YVtocmVmKj0iLjE5NTZobC5jb20vIl0='),
    ],
    adGuardFrench: [
      '#pavePub',
      e('LmFkLWRlc2t0b3AtcmVjdGFuZ2xl'),
      '.mobile_adhesion',
      '.widgetadv',
      e('LmFkc19iYW4='),
    ],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: [
      '#kauli_yad_1',
      e('YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0='),
      e('Ll9wb3BJbl9pbmZpbml0ZV9hZA=='),
      e('LmFkZ29vZ2xl'),
      e('Ll9faXNib29zdFJldHVybkFk'),
    ],
    adGuardMobile: [
      e('YW1wLWF1dG8tYWRz'),
      e('LmFtcF9hZA=='),
      'amp-embed[type="24smi"]',
      '#mgid_iframe1',
      e('I2FkX2ludmlld19hcmVh'),
    ],
    adGuardRussian: [
      e('YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0='),
      e('LnJlY2xhbWE='),
      'div[id^="smi2adblock"]',
      e('ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd'),
      '#psyduckpockeball',
    ],
    adGuardSocial: [
      e('YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0='),
      e('YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0='),
      '.etsy-tweet',
      '#inlineShare',
      '.popup-social',
    ],
    adGuardSpanishPortuguese: [
      '#barraPublicidade',
      '#Publicidade',
      '#publiEspecial',
      '#queTooltip',
      '.cnt-publi',
    ],
    adGuardTrackingProtection: [
      '#qoo-counter',
      e('YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=='),
      e('YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0='),
      e('YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=='),
      '#top100counter',
    ],
    adGuardTurkish: [
      '#backkapat',
      e('I3Jla2xhbWk='),
      e('YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0='),
      e('YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd'),
      e('YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ=='),
    ],
    bulgarian: [
      e('dGQjZnJlZW5ldF90YWJsZV9hZHM='),
      '#ea_intext_div',
      '.lapni-pop-over',
      '#xenium_hot_offers',
    ],
    easyList: [
      '.yb-floorad',
      e('LndpZGdldF9wb19hZHNfd2lkZ2V0'),
      e('LnRyYWZmaWNqdW5reS1hZA=='),
      '.textad_headline',
      e('LnNwb25zb3JlZC10ZXh0LWxpbmtz'),
    ],
    easyListChina: [
      e('LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=='),
      e('LmZyb250cGFnZUFkdk0='),
      '#taotaole',
      '#aafoot.top_box',
      '.cfa_popup',
    ],
    easyListCookie: [
      '.ezmob-footer',
      '.cc-CookieWarning',
      '[data-cookie-number]',
      e('LmF3LWNvb2tpZS1iYW5uZXI='),
      '.sygnal24-gdpr-modal-wrap',
    ],
    easyListCzechSlovak: [
      '#onlajny-stickers',
      e('I3Jla2xhbW5pLWJveA=='),
      e('LnJla2xhbWEtbWVnYWJvYXJk'),
      '.sklik',
      e('W2lkXj0ic2tsaWtSZWtsYW1hIl0='),
    ],
    easyListDutch: [
      e('I2FkdmVydGVudGll'),
      e('I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=='),
      '.adstekst',
      e('YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0='),
      '#semilo-lrectangle',
    ],
    easyListGermany: [
      '#SSpotIMPopSlider',
      e('LnNwb25zb3JsaW5rZ3J1ZW4='),
      e('I3dlcmJ1bmdza3k='),
      e('I3Jla2xhbWUtcmVjaHRzLW1pdHRl'),
      e('YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0='),
    ],
    easyListItaly: [
      e('LmJveF9hZHZfYW5udW5jaQ=='),
      '.sb-box-pubbliredazionale',
      e('YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd'),
      e('YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd'),
      e('YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=='),
    ],
    easyListLithuania: [
      e('LnJla2xhbW9zX3RhcnBhcw=='),
      e('LnJla2xhbW9zX251b3JvZG9z'),
      e('aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd'),
      e('aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd'),
      e('aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd'),
    ],
    estonian: [e('QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==')],
    fanboyAnnoyances: [
      '#ac-lre-player',
      '.navigate-to-top',
      '#subscribe_popup',
      '.newsletter_holder',
      '#back-top',
    ],
    fanboyAntiFacebook: ['.util-bar-module-firefly-visible'],
    fanboyEnhancedTrackers: [
      '.open.pushModal',
      '#issuem-leaky-paywall-articles-zero-remaining-nag',
      '#sovrn_container',
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      '.BlockNag__Card',
    ],
    fanboySocial: [
      '#FollowUs',
      '#meteored_share',
      '#social_follow',
      '.article-sharer',
      '.community__social-desc',
    ],
    frellwitSwedish: [
      e('YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=='),
      e('YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=='),
      'article.category-samarbete',
      e('ZGl2LmhvbGlkQWRz'),
      'ul.adsmodern',
    ],
    greekAdBlock: [
      e('QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd'),
      e('QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=='),
      e('QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd'),
      'DIV.agores300',
      'TABLE.advright',
    ],
    hungarian: [
      '#cemp_doboz',
      '.optimonk-iframe-container',
      e('LmFkX19tYWlu'),
      e('W2NsYXNzKj0iR29vZ2xlQWRzIl0='),
      '#hirdetesek_box',
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      '.ModuleTemplateCookieIndicator',
      '.o--cookies--container',
      '#cookies-policy-sticky',
      '#stickyCookieBar',
    ],
    icelandicAbp: [
      e('QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ=='),
    ],
    latvian: [
      e(
        'YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0='
      ),
      e(
        'YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=='
      ),
    ],
    listKr: [
      e('YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0='),
      e('I2xpdmVyZUFkV3JhcHBlcg=='),
      e('YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=='),
      e('aW5zLmZhc3R2aWV3LWFk'),
      '.revenue_unit_item.dable',
    ],
    listeAr: [
      e('LmdlbWluaUxCMUFk'),
      '.right-and-left-sponsers',
      e('YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=='),
      e('YVtocmVmKj0iYm9vcmFxLm9yZyJd'),
      e('YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd'),
    ],
    listeFr: [
      e('YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=='),
      e('I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=='),
      e('YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0='),
      '.site-pub-interstitiel',
      'div[id^="crt-"][data-criteo-id]',
    ],
    officialPolish: [
      '#ceneo-placeholder-ceneo-12',
      e('W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd'),
      e('YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=='),
      e('YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=='),
      e('ZGl2I3NrYXBpZWNfYWQ='),
    ],
    ro: [
      e('YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd'),
      e('YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd'),
      e(
        'YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0='
      ),
      e('YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd'),
      'a[href^="/url/"]',
    ],
    ruAd: [
      e('YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd'),
      e('YVtocmVmKj0iLy91dGltZy5ydS8iXQ=='),
      e('YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0='),
      '#pgeldiz',
      '.yandex-rtb-block',
    ],
    thaiAds: [
      'a[href*=macau-uta-popup]',
      e('I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=='),
      e('LmFkczMwMHM='),
      '.bumq',
      '.img-kosana',
    ],
    webAnnoyancesUltralist: [
      '#mod-social-share-2',
      '#social-tools',
      e('LmN0cGwtZnVsbGJhbm5lcg=='),
      '.zergnet-recommend',
      '.yt.btn-link.btn-md.btn',
    ],
  };
}
function nr(e) {
  var n = e === void 0 ? {} : e,
    t = n.debug;
  return E(this, void 0, void 0, function () {
    var r, o, i, a, s, c;
    return I(this, function (u) {
      switch (u.label) {
        case 0:
          return rr()
            ? ((r = tr()),
              (o = Object.keys(r)),
              (i = (c = []).concat.apply(
                c,
                o.map(function (f) {
                  return r[f];
                })
              )),
              [4, ir(i)])
            : [2, void 0];
        case 1:
          return (
            (a = u.sent()),
            t && or(r, a),
            (s = o.filter(function (f) {
              var l = r[f],
                d = L(
                  l.map(function (v) {
                    return a[v];
                  })
                );
              return d > l.length * 0.6;
            })),
            s.sort(),
            [2, s]
          );
      }
    });
  });
}
function rr() {
  return V() || Pe();
}
function ir(e) {
  var n;
  return E(this, void 0, void 0, function () {
    var t, r, o, i, c, a, s, c;
    return I(this, function (u) {
      switch (u.label) {
        case 0:
          for (
            t = document,
              r = t.createElement('div'),
              o = new Array(e.length),
              i = {},
              De(r),
              c = 0;
            c < e.length;
            ++c
          )
            (a = pn(e[c])),
              a.tagName === 'DIALOG' && a.show(),
              (s = t.createElement('div')),
              De(s),
              s.appendChild(a),
              r.appendChild(s),
              (o[c] = a);
          u.label = 1;
        case 1:
          return t.body ? [3, 3] : [4, z(50)];
        case 2:
          return u.sent(), [3, 1];
        case 3:
          return t.body.appendChild(r), [4, q()];
        case 4:
          u.sent();
          try {
            for (c = 0; c < e.length; ++c) o[c].offsetParent || (i[e[c]] = !0);
          } finally {
            (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
          }
          return [2, i];
      }
    });
  });
}
function De(e) {
  e.style.setProperty('visibility', 'hidden', 'important'),
    e.style.setProperty('display', 'block', 'important');
}
function or(e, n) {
  for (
    var t = 'DOM blockers debug:\n```', r = 0, o = Object.keys(e);
    r < o.length;
    r++
  ) {
    var i = o[r];
    t += `
`.concat(i, ':');
    for (var a = 0, s = e[i]; a < s.length; a++) {
      var c = s[a];
      t += `
  `
        .concat(n[c] ? '🚫' : '➡️', ' ')
        .concat(c);
    }
  }
  console.log(''.concat(t, '\n```'));
}
function ar() {
  for (var e = 0, n = ['rec2020', 'p3', 'srgb']; e < n.length; e++) {
    var t = n[e];
    if (matchMedia('(color-gamut: '.concat(t, ')')).matches) return t;
  }
}
function sr() {
  if (ze('inverted')) return !0;
  if (ze('none')) return !1;
}
function ze(e) {
  return matchMedia('(inverted-colors: '.concat(e, ')')).matches;
}
function cr() {
  if (Xe('active')) return !0;
  if (Xe('none')) return !1;
}
function Xe(e) {
  return matchMedia('(forced-colors: '.concat(e, ')')).matches;
}
var ur = 100;
function lr() {
  if (matchMedia('(min-monochrome: 0)').matches) {
    for (var e = 0; e <= ur; ++e)
      if (matchMedia('(max-monochrome: '.concat(e, ')')).matches) return e;
    throw new Error('Too high value');
  }
}
function fr() {
  if (D('no-preference')) return 0;
  if (D('high') || D('more')) return 1;
  if (D('low') || D('less')) return -1;
  if (D('forced')) return 10;
}
function D(e) {
  return matchMedia('(prefers-contrast: '.concat(e, ')')).matches;
}
function dr() {
  if (He('reduce')) return !0;
  if (He('no-preference')) return !1;
}
function He(e) {
  return matchMedia('(prefers-reduced-motion: '.concat(e, ')')).matches;
}
function vr() {
  if (_e('reduce')) return !0;
  if (_e('no-preference')) return !1;
}
function _e(e) {
  return matchMedia('(prefers-reduced-transparency: '.concat(e, ')')).matches;
}
function hr() {
  if (Ne('high')) return !0;
  if (Ne('standard')) return !1;
}
function Ne(e) {
  return matchMedia('(dynamic-range: '.concat(e, ')')).matches;
}
var m = Math,
  k = function () {
    return 0;
  };
function mr() {
  var e = m.acos || k,
    n = m.acosh || k,
    t = m.asin || k,
    r = m.asinh || k,
    o = m.atanh || k,
    i = m.atan || k,
    a = m.sin || k,
    s = m.sinh || k,
    c = m.cos || k,
    u = m.cosh || k,
    f = m.tan || k,
    l = m.tanh || k,
    d = m.exp || k,
    v = m.expm1 || k,
    b = m.log1p || k,
    h = function (p) {
      return m.pow(m.PI, p);
    },
    w = function (p) {
      return m.log(p + m.sqrt(p * p - 1));
    },
    y = function (p) {
      return m.log(p + m.sqrt(p * p + 1));
    },
    S = function (p) {
      return m.log((1 + p) / (1 - p)) / 2;
    },
    x = function (p) {
      return m.exp(p) - 1 / m.exp(p) / 2;
    },
    W = function (p) {
      return (m.exp(p) + 1 / m.exp(p)) / 2;
    },
    T = function (p) {
      return m.exp(p) - 1;
    },
    Z = function (p) {
      return (m.exp(2 * p) - 1) / (m.exp(2 * p) + 1);
    },
    G = function (p) {
      return m.log(1 + p);
    };
  return {
    acos: e(0.12312423423423424),
    acosh: n(1e308),
    acoshPf: w(1e154),
    asin: t(0.12312423423423424),
    asinh: r(1),
    asinhPf: y(1),
    atanh: o(0.5),
    atanhPf: S(0.5),
    atan: i(0.5),
    sin: a(-1e300),
    sinh: s(1),
    sinhPf: x(1),
    cos: c(10.000000000123),
    cosh: u(1),
    coshPf: W(1),
    tan: f(-1e300),
    tanh: l(1),
    tanhPf: Z(1),
    exp: d(1),
    expm1: v(1),
    expm1Pf: T(1),
    log1p: b(10),
    log1pPf: G(10),
    powPI: h(-100),
  };
}
var pr = 'mmMwWLliI0fiflO&1',
  ue = {
    /**
     * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
     * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
     */
    default: [],
    /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
    apple: [{ font: '-apple-system-body' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    serif: [{ fontFamily: 'serif' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    sans: [{ fontFamily: 'sans-serif' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    mono: [{ fontFamily: 'monospace' }],
    /**
     * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
     * The height can be 0 in Chrome on a retina display.
     */
    min: [{ fontSize: '1px' }],
    /** Tells one OS from another in desktop Chrome. */
    system: [{ fontFamily: 'system-ui' }],
  };
function yr() {
  return gr(function (e, n) {
    for (var t = {}, r = {}, o = 0, i = Object.keys(ue); o < i.length; o++) {
      var a = i[o],
        s = ue[a],
        c = s[0],
        u = c === void 0 ? {} : c,
        f = s[1],
        l = f === void 0 ? pr : f,
        d = e.createElement('span');
      (d.textContent = l), (d.style.whiteSpace = 'nowrap');
      for (var v = 0, b = Object.keys(u); v < b.length; v++) {
        var h = b[v],
          w = u[h];
        w !== void 0 && (d.style[h] = w);
      }
      (t[a] = d), n.append(e.createElement('br'), d);
    }
    for (var y = 0, S = Object.keys(ue); y < S.length; y++) {
      var a = S[y];
      r[a] = t[a].getBoundingClientRect().width;
    }
    return r;
  });
}
function gr(e, n) {
  return (
    n === void 0 && (n = 4e3),
    lt(function (t, r) {
      var o = r.document,
        i = o.body,
        a = i.style;
      (a.width = ''.concat(n, 'px')),
        (a.webkitTextSizeAdjust = a.textSizeAdjust = 'none'),
        re()
          ? (i.style.zoom = ''.concat(1 / r.devicePixelRatio))
          : V() && (i.style.zoom = 'reset');
      var s = o.createElement('div');
      return (
        (s.textContent = H([], Array((n / 20) << 0), !0)
          .map(function () {
            return 'word';
          })
          .join(' ')),
        i.appendChild(s),
        e(o, i)
      );
    }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
  );
}
function br() {
  return navigator.pdfViewerEnabled;
}
function wr() {
  var e = new Float32Array(1),
    n = new Uint8Array(e.buffer);
  return (e[0] = 1 / 0), (e[0] = e[0] - e[0]), n[3];
}
function Sr() {
  var e = window.ApplePaySession;
  if (typeof (e == null ? void 0 : e.canMakePayments) != 'function') return -1;
  try {
    return e.canMakePayments() ? 1 : 0;
  } catch (n) {
    return xr(n);
  }
}
function xr(e) {
  if (e instanceof Error) {
    if (e.name === 'InvalidAccessError') {
      if (/\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
      if (/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message))
        return -3;
    }
    if (
      e.name === 'SecurityError' &&
      /\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message)
    )
      return -3;
  }
  throw e;
}
function kr() {
  var e,
    n = document.createElement('a'),
    t =
      (e = n.attributionSourceId) !== null && e !== void 0
        ? e
        : n.attributionsourceid;
  return t === void 0 ? void 0 : String(t);
}
var ft = -1,
  dt = -2,
  Lr = /* @__PURE__ */ new Set([
    10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961,
    2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089,
    3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939,
    32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902,
    34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816,
    34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739,
    36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937,
    7938,
    // SAMPLE_ALPHA_TO_COVERAGE (32926) and SAMPLE_COVERAGE (32928) are excluded because they trigger a console warning
    // in IE, Chrome ≤ 59 and Safari ≤ 13 and give no entropy.
  ]),
  Pr = /* @__PURE__ */ new Set([
    34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449,
    // MAX_VIEWS_OVR
  ]),
  Fr = ['FRAGMENT_SHADER', 'VERTEX_SHADER'],
  Er = [
    'LOW_FLOAT',
    'MEDIUM_FLOAT',
    'HIGH_FLOAT',
    'LOW_INT',
    'MEDIUM_INT',
    'HIGH_INT',
  ],
  vt = 'WEBGL_debug_renderer_info',
  Ir = 'WEBGL_polygon_mode';
function Cr(e) {
  var n,
    t,
    r,
    o,
    i,
    a,
    s = e.cache,
    c = ht(s);
  if (!c) return ft;
  if (!pt(c)) return dt;
  var u = mt() ? null : c.getExtension(vt);
  return {
    version:
      ((n = c.getParameter(c.VERSION)) === null || n === void 0
        ? void 0
        : n.toString()) || '',
    vendor:
      ((t = c.getParameter(c.VENDOR)) === null || t === void 0
        ? void 0
        : t.toString()) || '',
    vendorUnmasked: u
      ? (r = c.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0
        ? void 0
        : r.toString()
      : '',
    renderer:
      ((o = c.getParameter(c.RENDERER)) === null || o === void 0
        ? void 0
        : o.toString()) || '',
    rendererUnmasked: u
      ? (i = c.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || i === void 0
        ? void 0
        : i.toString()
      : '',
    shadingLanguageVersion:
      ((a = c.getParameter(c.SHADING_LANGUAGE_VERSION)) === null || a === void 0
        ? void 0
        : a.toString()) || '',
  };
}
function Vr(e) {
  var n = e.cache,
    t = ht(n);
  if (!t) return ft;
  if (!pt(t)) return dt;
  var r = t.getSupportedExtensions(),
    o = t.getContextAttributes(),
    i = [],
    a = [],
    s = [],
    c = [];
  if (o)
    for (var u = 0, f = Object.keys(o); u < f.length; u++) {
      var l = f[u];
      i.push(''.concat(l, '=').concat(o[l]));
    }
  for (var d = Be(t), v = 0, b = d; v < b.length; v++) {
    var h = b[v],
      w = t[h];
    a.push(
      ''
        .concat(h, '=')
        .concat(w)
        .concat(Lr.has(w) ? '='.concat(t.getParameter(w)) : '')
    );
  }
  if (r)
    for (var y = 0, S = r; y < S.length; y++) {
      var x = S[y];
      if (!((x === vt && mt()) || (x === Ir && Wr()))) {
        var W = t.getExtension(x);
        if (W)
          for (var T = 0, Z = Be(W); T < Z.length; T++) {
            var h = Z[T],
              w = W[h];
            s.push(
              ''
                .concat(h, '=')
                .concat(w)
                .concat(Pr.has(w) ? '='.concat(t.getParameter(w)) : '')
            );
          }
      }
    }
  for (var G = 0, p = Fr; G < p.length; G++)
    for (var Ie = p[G], ie = 0, Ce = Er; ie < Ce.length; ie++) {
      var Ve = Ce[ie],
        wt = Mr(t, Ie, Ve);
      c.push(''.concat(Ie, '.').concat(Ve, '=').concat(wt.join(',')));
    }
  return (
    s.sort(),
    a.sort(),
    {
      contextAttributes: i,
      parameters: a,
      shaderPrecisions: c,
      extensions: r,
      extensionParameters: s,
    }
  );
}
function ht(e) {
  if (e.webgl) return e.webgl.context;
  var n = document.createElement('canvas'),
    t;
  n.addEventListener('webglCreateContextError', function () {
    return (t = void 0);
  });
  for (var r = 0, o = ['webgl', 'experimental-webgl']; r < o.length; r++) {
    var i = o[r];
    try {
      t = n.getContext(i);
    } catch {}
    if (t) break;
  }
  return (e.webgl = { context: t }), t;
}
function Mr(e, n, t) {
  var r = e.getShaderPrecisionFormat(e[n], e[t]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : [];
}
function Be(e) {
  var n = Object.keys(e.__proto__);
  return n.filter(Rr);
}
function Rr(e) {
  return typeof e == 'string' && !e.match(/[^A-Z0-9_x]/);
}
function mt() {
  return ut();
}
function Wr() {
  return re() || V();
}
function pt(e) {
  return typeof e.getParameter == 'function';
}
function Ar() {
  var e,
    n = Pe() || V();
  return n
    ? window.AudioContext &&
      (e = new AudioContext().baseLatency) !== null &&
      e !== void 0
      ? e
      : -1
    : -2;
}
var Tr = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: wn,
  domBlockers: nr,
  fontPreferences: yr,
  audio: ln,
  screenFrame: zn,
  canvas: xn,
  osCpu: Rn,
  languages: Wn,
  colorDepth: An,
  deviceMemory: Tn,
  screenResolution: Zn,
  hardwareConcurrency: Xn,
  timezone: Hn,
  sessionStorage: Nn,
  localStorage: Bn,
  indexedDB: Jn,
  openDatabase: Un,
  cpuClass: Qn,
  platform: Kn,
  plugins: Sn,
  touchSupport: Mn,
  vendor: $n,
  vendorFlavors: qn,
  cookiesEnabled: er,
  colorGamut: ar,
  invertedColors: sr,
  forcedColors: cr,
  monochrome: lr,
  contrast: fr,
  reducedMotion: dr,
  reducedTransparency: vr,
  hdr: hr,
  math: mr,
  pdfViewerEnabled: br,
  architecture: wr,
  applePay: Sr,
  privateClickMeasurement: kr,
  audioBaseLatency: Ar,
  // Some sources can affect other sources (e.g. WebGL can affect canvas), so it's important to run these sources
  // after other sources.
  webGlBasics: Cr,
  webGlExtensions: Vr,
};
function Zr(e) {
  return nn(Tr, e, []);
}
var Gr = '$ if upgrade to Pro: https://fpjs.dev/pro';
function jr(e) {
  var n = Yr(e),
    t = Or(n);
  return { score: n, comment: Gr.replace(/\$/g, ''.concat(t)) };
}
function Yr(e) {
  if (Pe()) return 0.4;
  if (V()) return Le() && !(B() && N()) ? 0.5 : 0.3;
  var n = 'value' in e.platform ? e.platform.value : '';
  return /^Win/.test(n) ? 0.6 : /^Mac/.test(n) ? 0.5 : 0.7;
}
function Or(e) {
  return st(0.99 + 0.01 * e, 1e-4);
}
function Dr(e) {
  for (var n = '', t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
    var o = r[t],
      i = e[o],
      a = 'error' in i ? 'error' : JSON.stringify(i.value);
    n += ''
      .concat(n ? '|' : '')
      .concat(o.replace(/([:|\\])/g, '\\$1'), ':')
      .concat(a);
  }
  return n;
}
function zr(e) {
  return JSON.stringify(
    e,
    function (n, t) {
      return t instanceof Error ? $t(t) : t;
    },
    2
  );
}
function Xr(e) {
  return Kt(Dr(e));
}
function Hr(e) {
  var n,
    t = jr(e);
  return {
    get visitorId() {
      return n === void 0 && (n = Xr(this.components)), n;
    },
    set visitorId(r) {
      n = r;
    },
    confidence: t,
    components: e,
    version: ot,
  };
}
function _r(e) {
  return e === void 0 && (e = 50), zt(e, e * 2);
}
function Nr(e, n) {
  var t = Date.now();
  return {
    get: function (r) {
      return E(this, void 0, void 0, function () {
        var o, i, a;
        return I(this, function (s) {
          switch (s.label) {
            case 0:
              return (o = Date.now()), [4, e()];
            case 1:
              return (
                (i = s.sent()),
                (a = Hr(i)),
                (n || (r != null && r.debug)) &&
                  console.log(
                    'Copy the text below to get the debug data:\n\n```\nversion: '
                      .concat(
                        a.version,
                        `
userAgent: `
                      )
                      .concat(
                        navigator.userAgent,
                        `
timeBetweenLoadAndGet: `
                      )
                      .concat(
                        o - t,
                        `
visitorId: `
                      )
                      .concat(
                        a.visitorId,
                        `
components: `
                      )
                      .concat(zr(i), '\n```')
                  ),
                [2, a]
              );
          }
        });
      });
    },
  };
}
function Br() {
  if (!(window.__fpjs_d_m || Math.random() >= 1e-3))
    try {
      var e = new XMLHttpRequest();
      e.open(
        'get',
        'https://m1.openfpcdn.io/fingerprintjs/v'.concat(ot, '/npm-monitoring'),
        !0
      ),
        e.send();
    } catch (n) {
      console.error(n);
    }
}
function Jr(e) {
  var n;
  return (
    e === void 0 && (e = {}),
    E(this, void 0, void 0, function () {
      var t, r, o;
      return I(this, function (i) {
        switch (i.label) {
          case 0:
            return (
              (!((n = e.monitoring) !== null && n !== void 0) || n) && Br(),
              (t = e.delayFallback),
              (r = e.debug),
              [4, _r(t)]
            );
          case 1:
            return i.sent(), (o = Zr({ cache: {}, debug: r })), [2, Nr(o, r)];
        }
      });
    })
  );
}
class yt {
  constructor() {
    j(this, 'data', /* @__PURE__ */ new Map());
  }
  clear() {
    this.data.clear();
  }
  getItem(n) {
    return this.data.get(n) ?? null;
  }
  removeItem(n) {
    this.data.delete(n);
  }
  key(n) {
    return [...this.data.keys()][n] ?? null;
  }
  setItem(n, t) {
    this.data.set(n, t);
  }
  get length() {
    return this.data.size;
  }
}
function Ur() {
  try {
    const e = 'test_storage_analytics';
    return (
      sessionStorage.setItem(e, 'test'),
      sessionStorage.removeItem(e),
      sessionStorage
    );
  } catch {
    return new yt();
  }
}
function Qr() {
  try {
    const e = 'test_storage_analytics';
    return (
      localStorage.setItem(e, 'test'), localStorage.removeItem(e), localStorage
    );
  } catch {
    return new yt();
  }
}
const Fe = Ur(),
  Ee = Qr();
function Je(e, n, t) {
  gt(e, n, t, !1);
}
function Ue(e, n = 30 * 60) {
  return $r(e, n, !1);
}
function Kr(e) {
  return bt(e, !1);
}
function gt(e, n, t, r = !0) {
  const o = new Date(Date.now() + 864e5 * t).getTime(),
    i = {
      value: n,
      expires: o,
    };
  try {
    r ? Fe.setItem(e, JSON.stringify(i)) : Ee.setItem(e, JSON.stringify(i));
  } catch (a) {
    console.warn('[setSessionStorage] Storage not available', a);
  }
}
function $r(e, n = 30 * 60, t = !0) {
  let r = null;
  try {
    t ? (r = Fe.getItem(e)) : (r = Ee.getItem(e));
  } catch (o) {
    console.warn('[getStorage] Storage not available', o);
  }
  if (r) {
    const { value: o, expires: i } = JSON.parse(r);
    if (i >= Date.now()) return gt(e, o, n / (24 * 60 * 60), t), o;
    bt(e, t);
  }
  return '';
}
function bt(e, n = !0) {
  try {
    n ? Fe.removeItem(e) : Ee.removeItem(e);
  } catch (t) {
    console.warn('[clearStorage] Storage not available', t);
  }
}
async function qr() {
  var e;
  return (e = window.Rai) != null && e.PolicyManager
    ? window.Rai.PolicyManager
    : new Promise((n) => {
        window.Rai = new Proxy(window.Rai ?? {}, {
          set(t, r, o) {
            const i = Reflect.set(t, r, o);
            return (
              r === 'PolicyManager' &&
                setTimeout(() => {
                  n(window.Rai.PolicyManager);
                }, 0),
              i
            );
          },
        });
      });
}
async function ei() {
  const e = await qr();
  return new Promise((n) => {
    e.eventsCmpLoaded$
      .pipe(
        xe(Boolean),
        Dt((t) => t.type === e.events.CMP_LOADED_EVENT)
      )
      .subscribe((t) => {
        n(
          (window.Rai.PolicyManager &&
            window.Rai.PolicyManager.getCustomPurposesConsents &&
            window.Rai.PolicyManager.getCustomPurposesConsents()) ||
            {}
        );
      });
  });
}
const le = 'rai_fid',
  Qe = 'rai_fid19';
class ti {
  constructor() {
    j(this, 'fid', new Tt(null));
    j(this, 'fidPromise', null);
    j(this, 'initFidPromise', null);
    j(this, 'fingerprint');
    console.log('Init FingerPrintManager.'),
      (this.fingerprint = Jr()),
      this.init();
  }
  async init() {
    await this.initFid(),
      window.addEventListener('rai:opted_in', this.init.bind(this), {
        once: !0,
      });
  }
  async initFid() {
    return this.initFidPromise
      ? this.initFidPromise
      : ((this.initFidPromise = (async () => {
          var n, t;
          try {
            const r = await ei(),
              o =
                ((n = r[2]) == null ? void 0 : n.c) ||
                ((t = r[2]) == null ? void 0 : t.li),
              i = Ue(le, 365),
              a = Ue(Qe, 365),
              s = {
                anonymized: i || null,
                anonymized19: a || null,
              };
            o
              ? a
                ? i
                  ? this.fid.next(s)
                  : await this.generateFingerprint(o)
                : await this.generateFingerprint(o)
              : (i && (Kr(le), (s.anonymized = null), this.fid.next(s)),
                a ? this.fid.next(s) : await this.generateFingerprint(o));
          } finally {
            this.initFidPromise = null;
          }
        })()),
        this.initFidPromise);
  }
  async generateFingerprint(n) {
    const r = await (await this.fingerprint).get(),
      o = {
        anonymized: null,
        anonymized19: r.visitorId,
      },
      i = await this.getAnonymized(r.visitorId, n);
    i instanceof Error
      ? console.error('Errore servizio di anonymized')
      : ((o.anonymized = i.anonymized), (o.anonymized19 = i.anonymized19)),
      i.anonymized && Je(le, i.anonymized, 365),
      i.anonymized19 && Je(Qe, i.anonymized19, 365),
      this.fid.next(o);
  }
  async getAnonymized(n, t) {
    try {
      return await (
        await fetch('/atomatic/token-service/api/anonymize', {
          method: 'POST',
          headers: {
            accept: '*/*',
            'x-caller': 'web',
            'x-caller-version': '1.0',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key: n,
            generateFid: t,
          }),
        })
      ).json();
    } catch {
      throw new Error();
    }
  }
  async getFid() {
    return (
      this.initFidPromise && (await this.initFidPromise),
      this.fidPromise ||
        (this.fidPromise = new Promise((n) => {
          this.fid.pipe(xe(Boolean)).subscribe((t) => {
            (this.fidPromise = null), n(t);
          });
        })),
      this.fidPromise
    );
  }
}
var Ke;
((Ke = window.Rai) != null && Ke.FingerPrintManager) ||
  ((window.Rai = window.Rai ?? {}), (window.Rai.FingerPrintManager = new ti()));
