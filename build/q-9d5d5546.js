import{m,u as E,_ as g,X as l,R as C,w as j,n as H,A as y}from"./q-66288029.js";const nt=y("qc-c"),st=y("qc-ic"),V=y("qc-h"),B=y("qc-l"),K=y("qc-n"),N=m(E(()=>g(()=>import("./q-620d6777.js"),["build/q-620d6777.js","build/q-66288029.js","build/q-fcc6958d.css"]),"s_nd8yk3KO22c")),R=new WeakMap,ot=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const c=o[0].exec(n);if(c){const r=o[1],i=M(o[2],c),a=o[4],f=new Array(r.length),h=[],_=z(e,n);let w;return r.forEach((p,U)=>{L(p,h,W=>f[U]=W,s)}),L(_,h,p=>w=p==null?void 0:p.default,s),h.length>0&&await Promise.all(h),[i,f,w,a]}}return null},L=(t,e,s,n)=>{if(typeof t=="function"){const o=R.get(t);if(o)s(o);else{const c=t();typeof c.then=="function"?e.push(c.then(r=>{n!==!1&&R.set(t,r),s(r)})):c&&s(c)}}},z=(t,e)=>{if(t){const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},M=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++)s[t[n]]=e?e[n+1]:"";return s},ct=(t,e,s)=>{const n=Q(),o={data:t?t.body:null,head:n,...e};for(let c=s.length-1;c>=0;c--){const r=s[c]&&s[c].head;r&&(typeof r=="function"?D(n,r(o)):typeof r=="object"&&D(n,r))}return o.head},D=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),I(t.meta,e.meta),I(t.links,e.links),I(t.styles,e.styles)},I=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},Q=()=>({title:"",meta:[],links:[],styles:[]}),at=()=>C(V),rt=()=>C(B),it=()=>C(K),lt=()=>j(H("qwikcity")),k=t=>t.pathname+t.search+t.hash,d=(t,e)=>new URL(t,e.href),x=(t,e)=>t.origin===e.origin,O=(t,e)=>t.pathname+t.search===e.pathname+e.search,Y=(t,e)=>t.pathname===e.pathname,T=(t,e)=>x(t,e)&&!O(t,e),Z=t=>t+(t.endsWith("/")?"":"/")+"q-data.json",ft=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=d(s,e),o=d("",e);if(x(n,o))return k(n)}catch(n){console.error(n)}return null},ht=(t,e,s)=>{if(t.prefetch&&e){const n=d(e,s);if(!Y(n,d("",s)))return n+""}return null},ut=(t,e)=>{const s=t.location,n=d(e.path,s);T(s,n)&&(q(t,s,n),t.history.pushState("","",k(n))),t[S]||(t[S]=1,t.addEventListener("popstate",()=>{const o=t.location,c=d(e.path,o);T(o,c)&&(q(t,c,o),e.path=k(o))}))},q=async(t,e,s)=>{const n=t.document,o=s.hash;if(O(e,s))e.hash!==o&&(await v(),o?A(n,o):t.scrollTo(0,0));else if(o)for(let c=0;c<24&&(await v(),!A(n,o));c++);else await v(),t.scrollTo(0,0)},v=()=>new Promise(t=>setTimeout(t,12)),A=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},b=t=>dispatchEvent(new CustomEvent("qprefetch",{detail:t})),S=Symbol(),G=async t=>{const{cacheModules:e}=await g(()=>import("./q-d0ed713a.js"),["build/q-d0ed713a.js","build/q-66288029.js","build/q-fcc6958d.css"]),s=new URL(t).pathname,n=Z(s),o=Date.now(),c=e?6e5:15e3,r=u.findIndex(a=>a.u===n);let i=u[r];if(b({links:[s]}),!i||i.t+c<o){i={u:n,t:o,c:new Promise(a=>{fetch(n).then(f=>{const h=f.headers.get("content-type")||"";f.ok&&h.includes("json")?f.json().then(_=>{b({bundles:_.prefetch,links:[s]}),a(_)},()=>a(null)):a(null)},()=>a(null))})};for(let a=u.length-1;a>=0;a--)u[a].t+c<o&&u.splice(a,1);u.push(i)}return i.c.catch(a=>console.error(a)),i.c},u=[],J=m(E(()=>g(()=>import("./q-207609c7.js"),["build/q-207609c7.js","build/q-66288029.js","build/q-fcc6958d.css"]),"s_z1nvHyEppoI"));E(()=>g(()=>import("./q-ac91fc0a.js"),["build/q-ac91fc0a.js","build/q-66288029.js","build/q-fcc6958d.css"]),"s_mYsiJcA4IBc");const dt=(t,e)=>{var n;const s=(n=t==null?void 0:t.dataset)==null?void 0:n.prefetch;s&&(P||(P=window.innerWidth),(!e||e&&P<520)&&G(s))};let P=0;const X='((s,a,r,i)=>{r=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{i=()=>{a=e,r({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&i()}):e.active&&i()}).catch(e=>console.error(e))})([])',F=()=>l("script",{dangerouslySetInnerHTML:X}),$=m(E(()=>g(()=>import("./q-a1bd6d8a.js"),["build/q-a1bd6d8a.js","build/q-66288029.js","build/q-fcc6958d.css"]),"s_vsKr0ZqSHfU")),tt=()=>l(J,{children:[l("head",{children:[l("meta",{charSet:"utf-8"}),l($,{})]}),l("body",{lang:"en",children:[l(N,{}),l(F,{})]})]}),pt=Object.freeze(Object.defineProperty({__proto__:null,s_0Ky05GxNoW8:tt},Symbol.toStringTag,{value:"Module"}));export{st as C,V as D,B as R,G as a,Q as b,ut as c,nt as d,K as e,it as f,rt as g,ft as h,ht as i,at as j,pt as k,ot as l,dt as p,ct as r,k as t,lt as u};