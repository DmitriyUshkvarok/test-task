(() => {
  'use strict';
  window.hasOwnProperty('__REACT_DEVTOOLS_GLOBAL_HOOK__') ||
    (!(function (e) {
      if (e.hasOwnProperty('__REACT_DEVTOOLS_GLOBAL_HOOK__')) return null;
      let n = console,
        t = {};
      for (const e in console) t[e] = console[e];
      let o = null;
      function patchConsoleForInitialCommitInStrictMode(e) {
        if (null !== o) return;
        const t = {};
        (o = () => {
          for (const e in t)
            try {
              n[e] = t[e];
            } catch (e) {}
        }),
          [
            'error',
            'group',
            'groupCollapsed',
            'info',
            'log',
            'trace',
            'warn',
          ].forEach((o) => {
            try {
              const r = (t[o] = n[o]
                  .__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
                  ? n[o].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
                  : n[o]),
                overrideMethod = (...n) => {
                  e ||
                    r(
                      '[2;38;2;124;124;124m%s[0m',
                      ...(function (e, ...n) {
                        if (0 === n.length || 'string' != typeof e)
                          return [e, ...n];
                        const t = n.slice();
                        let o = '',
                          r = 0;
                        for (let n = 0; n < e.length; ++n) {
                          const i = e[n];
                          if ('%' !== i) {
                            o += i;
                            continue;
                          }
                          const c = e[n + 1];
                          switch ((++n, c)) {
                            case 'c':
                            case 'O':
                            case 'o':
                              ++r, (o += `%${c}`);
                              break;
                            case 'd':
                            case 'i': {
                              const [e] = t.splice(r, 1);
                              o += parseInt(e, 10).toString();
                              break;
                            }
                            case 'f': {
                              const [e] = t.splice(r, 1);
                              o += parseFloat(e).toString();
                              break;
                            }
                            case 's': {
                              const [e] = t.splice(r, 1);
                              o += e.toString();
                            }
                          }
                        }
                        return [o, ...t];
                      })(...n)
                    );
                };
              (overrideMethod.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ =
                r),
                (r.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ =
                  overrideMethod),
                (n[o] = overrideMethod);
            } catch (e) {}
          });
      }
      let r = 0,
        i = !1;
      const c = [],
        _ = [];
      function getTopStackFrameString(e) {
        const n = e.stack.split('\n');
        return n.length > 1 ? n[1] : null;
      }
      const s = {},
        u = new Map(),
        l = {},
        O = new Map(),
        a = new Map(),
        d = {
          rendererInterfaces: u,
          listeners: l,
          backends: a,
          renderers: O,
          emit: function (e, n) {
            l[e] && l[e].map((e) => e(n));
          },
          getFiberRoots: function (e) {
            const n = s;
            return n[e] || (n[e] = new Set()), n[e];
          },
          inject: function (n) {
            const t = ++r;
            O.set(t, n);
            const o = i
              ? 'deadcode'
              : (function (e) {
                  try {
                    if ('string' == typeof e.version)
                      return e.bundleType > 0 ? 'development' : 'production';
                    const n = Function.prototype.toString;
                    if (e.Mount && e.Mount._renderNewRootComponent) {
                      const t = n.call(e.Mount._renderNewRootComponent);
                      return 0 !== t.indexOf('function')
                        ? 'production'
                        : -1 !== t.indexOf('storedMeasure')
                          ? 'development'
                          : -1 !== t.indexOf('should be a pure function')
                            ? -1 !== t.indexOf('NODE_ENV') ||
                              -1 !== t.indexOf('development') ||
                              -1 !== t.indexOf('true')
                              ? 'development'
                              : -1 !== t.indexOf('nextElement') ||
                                  -1 !== t.indexOf('nextComponent')
                                ? 'unminified'
                                : 'development'
                            : -1 !== t.indexOf('nextElement') ||
                                -1 !== t.indexOf('nextComponent')
                              ? 'unminified'
                              : 'outdated';
                    }
                  } catch (e) {}
                  return 'production';
                })(n);
            if (e.hasOwnProperty('__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__')) {
              const {
                registerRendererWithConsole: t,
                patchConsoleUsingWindowValues: o,
              } = e.__REACT_DEVTOOLS_CONSOLE_FUNCTIONS__;
              'function' == typeof t && 'function' == typeof o && (t(n), o());
            }
            const c = e.__REACT_DEVTOOLS_ATTACH__;
            if ('function' == typeof c) {
              const o = c(d, t, n, e);
              d.rendererInterfaces.set(t, o);
            }
            return (
              d.emit('renderer', {
                id: t,
                renderer: n,
                reactBuildType: o,
              }),
              t
            );
          },
          on: function (e, n) {
            l[e] || (l[e] = []), l[e].push(n);
          },
          off: function (e, n) {
            if (!l[e]) return;
            const t = l[e].indexOf(n);
            -1 !== t && l[e].splice(t, 1), l[e].length || delete l[e];
          },
          sub: function (e, n) {
            return d.on(e, n), () => d.off(e, n);
          },
          supportsFiber: !0,
          checkDCE: function (e) {
            try {
              Function.prototype.toString.call(e).indexOf('^_^') > -1 &&
                ((i = !0),
                setTimeout(function () {
                  throw new Error(
                    'React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://react.dev/link/perf-use-production-build'
                  );
                }));
            } catch (e) {}
          },
          onCommitFiberUnmount: function (e, n) {
            const t = u.get(e);
            null != t && t.handleCommitFiberUnmount(n);
          },
          onCommitFiberRoot: function (e, n, t) {
            const o = d.getFiberRoots(e),
              r = n.current,
              i = o.has(n),
              c = null == r.memoizedState || null == r.memoizedState.element;
            i || c ? i && c && o.delete(n) : o.add(n);
            const _ = u.get(e);
            null != _ && _.handleCommitFiberRoot(n, t);
          },
          onPostCommitFiberRoot: function (e, n) {
            const t = u.get(e);
            null != t && t.handlePostCommitFiberRoot(n);
          },
          setStrictMode: function (e, n) {
            const t = u.get(e);
            null != t
              ? n
                ? t.patchConsoleForStrictMode()
                : t.unpatchConsoleForStrictMode()
              : n
                ? patchConsoleForInitialCommitInStrictMode(
                    !0 ===
                      window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__
                  )
                : null !== o && (o(), (o = null));
          },
          getInternalModuleRanges: function () {
            return _;
          },
          registerInternalModuleStart: function (e) {
            const n = getTopStackFrameString(e);
            null !== n && c.push(n);
          },
          registerInternalModuleStop: function (e) {
            if (c.length > 0) {
              const n = c.pop(),
                t = getTopStackFrameString(e);
              null !== t && _.push([n, t]);
            }
          },
        };
      Object.defineProperty(e, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
        configurable: !1,
        enumerable: !1,
        get: () => d,
      });
    })(window),
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on(
      'renderer',
      function ({ reactBuildType: e }) {
        window.postMessage(
          {
            source: 'react-devtools-hook',
            payload: {
              type: 'react-renderer-attached',
              reactBuildType: e,
            },
          },
          '*'
        );
      }
    ),
    (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeObjectCreate = Object.create),
    (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeMap = Map),
    (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeWeakMap = WeakMap),
    (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeSet = Set));
})();
//# sourceMappingURL=installHook.js.map
