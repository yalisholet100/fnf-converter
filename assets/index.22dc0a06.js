(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function p() {}
const ie = (e) => e;
function K(e, t) {
  for (const n in t) e[n] = t[n];
  return e;
}
function U(e) {
  return e();
}
function W() {
  return Object.create(null);
}
function $(e) {
  e.forEach(U);
}
function V(e) {
  return typeof e == "function";
}
function O(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
function le(e) {
  return Object.keys(e).length === 0;
}
function X(e, ...t) {
  if (e == null) return p;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ce(e, t, n) {
  e.$$.on_destroy.push(X(t, n));
}
const Z = typeof window < "u";
let ue = Z ? () => window.performance.now() : () => Date.now(),
  ee = Z ? (e) => requestAnimationFrame(e) : p;
const v = new Set();
function te(e) {
  v.forEach((t) => {
    t.c(e) || (v.delete(t), t.f());
  }),
    v.size !== 0 && ee(te);
}
function fe(e) {
  let t;
  return (
    v.size === 0 && ee(te),
    {
      promise: new Promise((n) => {
        v.add((t = { c: e, f: n }));
      }),
      abort() {
        v.delete(t);
      },
    }
  );
}
function y(e, t) {
  e.appendChild(t);
}
function P(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode.removeChild(e);
}
function g(e) {
  return document.createElement(e);
}
function ae(e) {
  return document.createTextNode(e);
}
function A() {
  return ae(" ");
}
function N(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function de(e) {
  return function (t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function d(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function pe(e) {
  return Array.from(e.childNodes);
}
function me(e, t, n, s) {
  n === null
    ? e.style.removeProperty(t)
    : e.style.setProperty(t, n, s ? "important" : "");
}
let B;
function x(e) {
  B = e;
}
const w = [],
  J = [],
  C = [],
  Q = [],
  he = Promise.resolve();
let q = !1;
function ye() {
  q || ((q = !0), he.then(ne));
}
function F(e) {
  C.push(e);
}
const j = new Set();
let S = 0;
function ne() {
  const e = B;
  do {
    for (; S < w.length; ) {
      const t = w[S];
      S++, x(t), ge(t.$$);
    }
    for (x(null), w.length = 0, S = 0; J.length; ) J.pop()();
    for (let t = 0; t < C.length; t += 1) {
      const n = C[t];
      j.has(n) || (j.add(n), n());
    }
    C.length = 0;
  } while (w.length);
  for (; Q.length; ) Q.pop()();
  (q = !1), j.clear(), x(e);
}
function ge(e) {
  if (e.fragment !== null) {
    e.update(), $(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(F);
  }
}
const k = new Set();
let _e;
function M(e, t) {
  e && e.i && (k.delete(e), e.i(t));
}
function re(e, t, n, s) {
  if (e && e.o) {
    if (k.has(e)) return;
    k.add(e),
      _e.c.push(() => {
        k.delete(e), s && (n && e.d(1), s());
      }),
      e.o(t);
  } else s && s();
}
function se(e) {
  e && e.c();
}
function z(e, t, n, s) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n),
    s ||
      F(() => {
        const i = e.$$.on_mount.map(U).filter(V);
        e.$$.on_destroy ? e.$$.on_destroy.push(...i) : $(i),
          (e.$$.on_mount = []);
      }),
    o.forEach(F);
}
function D(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    ($(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function be(e, t) {
  e.$$.dirty[0] === -1 && (w.push(e), ye(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function T(e, t, n, s, r, o, i, u = [-1]) {
  const c = B;
  x(e);
  const l = (e.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: p,
    not_equal: r,
    bound: W(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    callbacks: W(),
    dirty: u,
    skip_bound: !1,
    root: t.target || c.$$.root,
  });
  i && i(l.root);
  let h = !1;
  if (
    ((l.ctx = n
      ? n(e, t.props || {}, (f, _, ...a) => {
          const m = a.length ? a[0] : _;
          return (
            l.ctx &&
              r(l.ctx[f], (l.ctx[f] = m)) &&
              (!l.skip_bound && l.bound[f] && l.bound[f](m), h && be(e, f)),
            _
          );
        })
      : []),
    l.update(),
    (h = !0),
    $(l.before_update),
    (l.fragment = s ? s(l.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const f = pe(t.target);
      l.fragment && l.fragment.l(f), f.forEach(E);
    } else l.fragment && l.fragment.c();
    t.intro && M(e.$$.fragment),
      z(e, t.target, t.anchor, t.customElement),
      ne();
  }
  x(c);
}
class I {
  $destroy() {
    D(this, 1), (this.$destroy = p);
  }
  $on(t, n) {
    if (!V(n)) return p;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      s.push(n),
      () => {
        const r = s.indexOf(n);
        r !== -1 && s.splice(r, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !le(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const b = [];
function ve(e, t = p) {
  let n;
  const s = new Set();
  function r(u) {
    if (O(e, u) && ((e = u), n)) {
      const c = !b.length;
      for (const l of s) l[1](), b.push(l, e);
      if (c) {
        for (let l = 0; l < b.length; l += 2) b[l][0](b[l + 1]);
        b.length = 0;
      }
    }
  }
  function o(u) {
    r(u(e));
  }
  function i(u, c = p) {
    const l = [u, c];
    return (
      s.add(l),
      s.size === 1 && (n = t(r) || p),
      u(e),
      () => {
        s.delete(l), s.size === 0 && (n(), (n = null));
      }
    );
  }
  return { set: r, update: o, subscribe: i };
}
function oe(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function R(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function L(e, t) {
  if (e === t || e !== e) return () => e;
  const n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const s = t.map((r, o) => L(e[o], r));
    return (r) => s.map((o) => o(r));
  }
  if (n === "object") {
    if (!e || !t) throw new Error("Object cannot be null");
    if (R(e) && R(t)) {
      (e = e.getTime()), (t = t.getTime());
      const o = t - e;
      return (i) => new Date(e + i * o);
    }
    const s = Object.keys(t),
      r = {};
    return (
      s.forEach((o) => {
        r[o] = L(e[o], t[o]);
      }),
      (o) => {
        const i = {};
        return (
          s.forEach((u) => {
            i[u] = r[u](o);
          }),
          i
        );
      }
    );
  }
  if (n === "number") {
    const s = t - e;
    return (r) => e + r * s;
  }
  throw new Error(`Cannot interpolate ${n} values`);
}
function $e(e, t = {}) {
  const n = ve(e);
  let s,
    r = e;
  function o(i, u) {
    if (e == null) return n.set((e = i)), Promise.resolve();
    r = i;
    let c = s,
      l = !1,
      {
        delay: h = 0,
        duration: f = 400,
        easing: _ = ie,
        interpolate: a = L,
      } = K(K({}, t), u);
    if (f === 0)
      return c && (c.abort(), (c = null)), n.set((e = r)), Promise.resolve();
    const m = ue() + h;
    let G;
    return (
      (s = fe((Y) => {
        if (Y < m) return !0;
        l || ((G = a(e, i)), typeof f == "function" && (f = f(e, i)), (l = !0)),
          c && (c.abort(), (c = null));
        const H = Y - m;
        return H > f ? (n.set((e = i)), !1) : (n.set((e = G(_(H / f)))), !0);
      })),
      s.promise
    );
  }
  return { set: o, update: (i, u) => o(i(r, e), u), subscribe: n.subscribe };
}
function we(e) {
  let t, n, s, r, o, i, u;
  return {
    c() {
      (t = g("div")),
        (n = g("form")),
        (n.innerHTML = `<div class="form-option svelte-ht7now"><label for="chartindex">Select Chart</label> 
            <select name="chartindex" id="chartindex"></select></div> 
        
        <div class="form-option svelte-ht7now"><label for="songname">Song Name</label> 
            <input type="text" name="songname" id="songname" class="svelte-ht7now"/></div> 

        <div class="form-option svelte-ht7now"><label for="songspeed">Song Speed</label> 
            <input type="number" name="songspeed" id="songspeed" min="0" max="1000" step="0.1" value="1" class="svelte-ht7now"/></div> 

        <div class="form-option svelte-ht7now"><label for="player1">Name of Player 1</label> 
            <input type="text" name="player1" id="player1" value="bf" class="svelte-ht7now"/></div> 

        <div class="form-option svelte-ht7now"><label for="player2">Name of Player 2</label> 
            <input type="text" name="player2" id="player2" value="dad" class="svelte-ht7now"/></div> 
        
        <div class="form-option svelte-ht7now"><label for="gfversion">gf version</label> 
            <input type="text" name="gfversion" id="gfversion" value="gf" class="svelte-ht7now"/></div> 
        
        <div class="flip-chart svelte-ht7now"><label for="flipchart">Flip chart</label> 
            <input type="checkbox" name="flipchart" id="flipchart"/> 
            <div class="svelte-ht7now">Note: dance-single + flip-chart = bf sings all the notes</div></div> 
        
        <button id="generate-chart" class="svelte-ht7now">Generate FNF Chart!</button>`),
        (s = A()),
        (r = g("button")),
        (r.textContent = "< Go Back"),
        d(r, "id", "back-button"),
        d(r, "class", "svelte-ht7now"),
        d(
          t,
          "style",
          (o = `opacity: ${e[1]}; transform: translateY(${-500 * e[1]}px)`)
        ),
        d(t, "class", "svelte-ht7now");
    },
    m(c, l) {
      P(c, t, l),
        y(t, n),
        y(t, s),
        y(t, r),
        i || ((u = [N(n, "submit", de(xe)), N(r, "click", e[2])]), (i = !0));
    },
    p(c, [l]) {
      l & 2 &&
        o !==
          (o = `opacity: ${c[1]}; transform: translateY(${-500 * c[1]}px)`) &&
        d(t, "style", o);
    },
    i: p,
    o: p,
    d(c) {
      c && E(t), (i = !1), $(u);
    },
  };
}
const xe = (e) => {};
function Ee(e, t, n) {
  let s,
    r = p,
    o = () => (r(), (r = X(i, (c) => n(1, (s = c)))), i);
  e.$$.on_destroy.push(() => r());
  let { pos: i } = t;
  o();
  function u(c) {
    i.set(0, { duration: 400, easing: oe });
  }
  return (
    (e.$$set = (c) => {
      "pos" in c && o(n(0, (i = c.pos)));
    }),
    [i, s, u]
  );
}
class Se extends I {
  constructor(t) {
    super(), T(this, t, Ee, we, O, { pos: 0 });
  }
}
function Ae(e) {
  let t, n, s, r, o, i, u, c, l, h, f, _;
  return (
    (l = new Se({ props: { pos: e[1] } })),
    {
      c() {
        (t = g("div")),
          (n = g("h2")),
          (n.textContent = "Choose the Simfile you want to convert"),
          (s = A()),
          (r = g("button")),
          (r.textContent = "Select *.sm file"),
          (o = A()),
          (i = g("input")),
          (c = A()),
          se(l.$$.fragment),
          d(n, "class", "svelte-q1c71s"),
          d(r, "class", "svelte-q1c71s"),
          d(i, "type", "file"),
          d(i, "name", "fileupload"),
          d(i, "id", "fileupload"),
          me(i, "display", "none"),
          d(
            t,
            "style",
            (u = `position:relative; top:${-300 * e[0] - 150}px; opacity:${
              1 - e[0]
            }`)
          ),
          d(t, "class", "svelte-q1c71s");
      },
      m(a, m) {
        P(a, t, m),
          y(t, n),
          y(t, s),
          y(t, r),
          y(t, o),
          y(t, i),
          P(a, c, m),
          z(l, a, m),
          (h = !0),
          f || ((_ = [N(r, "click", Ce), N(i, "change", e[2])]), (f = !0));
      },
      p(a, [m]) {
        (!h ||
          (m & 1 &&
            u !==
              (u = `position:relative; top:${-300 * a[0] - 150}px; opacity:${
                1 - a[0]
              }`))) &&
          d(t, "style", u);
      },
      i(a) {
        h || (M(l.$$.fragment, a), (h = !0));
      },
      o(a) {
        re(l.$$.fragment, a), (h = !1);
      },
      d(a) {
        a && E(t), a && E(c), D(l, a), (f = !1), $(_);
      },
    }
  );
}
function Ce(e) {
  document.getElementById("fileupload").click();
}
function ke(e, t, n) {
  let s,
    r = $e(0);
  ce(e, r, (i) => n(0, (s = i)));
  function o(i) {
    i.target.files[0].name.endsWith(".sm") &&
      r.set(1, { duration: 400, easing: oe });
  }
  return [s, r, o];
}
class Pe extends I {
  constructor(t) {
    super(), T(this, t, ke, Ae, O, {});
  }
}
function Ne(e) {
  let t, n, s;
  return (
    (n = new Pe({})),
    {
      c() {
        (t = g("div")), se(n.$$.fragment), d(t, "class", "svelte-1gqq6jf");
      },
      m(r, o) {
        P(r, t, o), z(n, t, null), (s = !0);
      },
      p,
      i(r) {
        s || (M(n.$$.fragment, r), (s = !0));
      },
      o(r) {
        re(n.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && E(t), D(n);
      },
    }
  );
}
class Oe extends I {
  constructor(t) {
    super(), T(this, t, null, Ne, O, {});
  }
}
new Oe({ target: document.getElementById("app") });
