(() => {
  "use strict";
  var r,
    e = {},
    t = {};
  function o(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var n = (t[r] = { exports: {} });
    return e[r].call(n.exports, n, n.exports, o), n.exports;
  }
  (o.m = e),
    (r = []),
    (o.O = (e, t, a, n) => {
      if (!t) {
        var i = 1 / 0;
        for (f = 0; f < r.length; f++) {
          for (var [t, a, n] = r[f], v = !0, l = 0; l < t.length; l++)
            (!1 & n || i >= n) && Object.keys(o.O).every((r) => o.O[r](t[l]))
              ? t.splice(l--, 1)
              : ((v = !1), n < i && (i = n));
          if (v) {
            r.splice(f--, 1);
            var s = a();
            void 0 !== s && (e = s);
          }
        }
        return e;
      }
      n = n || 0;
      for (var f = r.length; f > 0 && r[f - 1][2] > n; f--) r[f] = r[f - 1];
      r[f] = [t, a, n];
    }),
    (o.n = (r) => {
      var e = r && r.__esModule ? () => r.default : () => r;
      return o.d(e, { a: e }), e;
    }),
    (o.d = (r, e) => {
      for (var t in e)
        o.o(e, t) &&
          !o.o(r, t) &&
          Object.defineProperty(r, t, { enumerable: !0, get: e[t] });
    }),
    (o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (() => {
      var r = { 263: 0 };
      o.O.j = (e) => 0 === r[e];
      var e = (e, t) => {
          var a,
            n,
            [i, v, l] = t,
            s = 0;
          if (i.some((e) => 0 !== r[e])) {
            for (a in v) o.o(v, a) && (o.m[a] = v[a]);
            if (l) var f = l(o);
          }
          for (e && e(t); s < i.length; s++)
            (n = i[s]), o.o(r, n) && r[n] && r[n][0](), (r[n] = 0);
          return o.O(f);
        },
        t = (self.webpackChunkderiv_charts =
          self.webpackChunkderiv_charts || []);
      t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
    })();
  var a = o.O(void 0, [96, 934], () => o(934));
  a = o.O(a);
})();
