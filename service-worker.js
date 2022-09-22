/* Qwik Service Worker */
const appBundles=[["q-143c7194.js",[]],["q-1ac09039.js",[5]],["q-207609c7.js",[5,9],["AaAlzKH0KlQ","z1nvHyEppoI"]],["q-25fb828a.js",[5]],["q-620d6777.js",[5,9],["nd8yk3KO22c"]],["q-66288029.js",[]],["q-6a3ea105.js",[5],["LJXogu0s4bw"]],["q-7c63a5c9.js",[5,8,11],["udDrW7Y0ztw","YJ6mtqrUqEk","zr0sXMkduGs"]],["q-7e4e1039.js",[5]],["q-9d5d5546.js",[5],["0Ky05GxNoW8"]],["q-a1bd6d8a.js",[5,9],["vsKr0ZqSHfU"]],["q-a9d974b8.js",[5,8],["08Vu5jppeJk","asLbBTFH6kA","g5vxWnYSDFs","tEQuFot8caw","WehTHV2Vp3k","WjXpUuAf3ck"]],["q-ac91fc0a.js",[5,9],["hA9UPaY8sNQ","mYsiJcA4IBc","skxgNVWVOT8","uVE5iM9H73c"]],["q-d0ed713a.js",[5]],["q-e26f4926.js",[5],["6F5YqPRJUdg","gSIRXOSvTtA"]],["q-fe2c4ce2.js",[5]]];
const libraryBundleIds=[13];
const linkBundles=[[/^\/$/,[1,6,8,11]]];
const u="QwikBuild",g=new Set,k=new Map,E=(e,n)=>n.filter(c=>!e.some(l=>c.endsWith(l[0]))),C=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},W=(e,n)=>e.some(c=>n.endsWith("/"+c[0])),q=(e,n)=>e.find(c=>c[0]===n),y=(e,n)=>n.map(c=>e[c]?e[c][0]:null),L=(e,n,c,l)=>new Promise((t,o)=>{const s=l.url,r=c.get(s);if(r)r.push([t,o]);else{const i=a=>{const h=c.get(s);if(h){c.delete(s);for(const[m]of h)m(a.clone())}else t(a.clone())},f=a=>{const h=c.get(s);if(h){c.delete(s);for(const[m,b]of h)b(a)}else o(a)};c.set(s,[[t,o]]),e.match(s).then(a=>{if(C(l,a))i(a);else return n(l).then(h=>e.put(s,h.clone()).then(()=>{i(h)}))}).catch(a=>e.match(s).then(h=>{h?i(h):f(a)}))}}),d=(e,n,c,l,t)=>{const o=s=>{try{const r=q(e,s);if(r&&!g.has(s)){g.add(s);const i=y(e,r[1]),f=new URL(s,l),a=new Request(f);L(n,c,k,a),i.forEach(o)}}catch(r){console.error(r)}};Array.isArray(t)&&t.forEach(o)},A=(e,n,c,l,t,o,s)=>{try{d(e,l,t,o,y(e,n))}catch(r){console.error(r)}for(const r of s)try{for(const i of c){const[f,a]=i;if(f.test(r)){d(e,l,t,o,y(e,a));break}}}catch(i){console.error(i)}},U=(e,n,c,l)=>{try{const t=l.href.split("/"),o=t[t.length-1];t[t.length-1]="";const s=new URL(t.join("/"));d(e,n,c,s,[o])}catch(t){console.error(t)}},B=(e,n,c,l)=>{e.addEventListener("fetch",t=>{const o=t.request;if(o.method==="GET"){const s=new URL(o.url);if(W(n,s.pathname)){const r=e.fetch.bind(e);t.respondWith(e.caches.open(u).then(i=>(U(n,i,r,s),L(i,r,k,o))))}}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const o=e.fetch.bind(e),s=await e.caches.open(u),r=new URL(t.base,e.origin);Array.isArray(t.links)&&A(n,c,l,s,fetch,r,t.links),Array.isArray(t.bundles)&&d(n,s,o,r,t.bundles)}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(u),s=(await t.keys()).map(i=>i.url),r=E(n,s);await Promise.all(r.map(i=>t.delete(i)))}catch(t){console.error(t)}})},F=()=>{typeof self<"u"&&typeof appBundles<"u"&&B(self,appBundles,libraryBundleIds,linkBundles)};F();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
