import{l as H,a as L,_,w as O,q as b,y as i,C as c,b as I,P as k,U as q,H as M,h as U}from"./q-74bbc837.js";import{h as ot}from"./q-74bbc837.js";import{l as j,a as N,r as Q,c as T,u as W,t as S,b as A,d as V,C as z,D as B,R as F,e as G}from"./q-ef8f7a75.js";const J=!1,K=!0,X=async({track:a})=>{const[n,o,e,l,t,s]=H(),m=L(""),{routes:f,menus:v,cacheModules:w}=await _(()=>import("./q-9c6c30ad.js"),["build/q-9c6c30ad.js","build/q-74bbc837.js"]),C=a(()=>s.path),u=new URL(C,t.href),h=u.pathname,g=j(f,v,w,h),y=J?l.response:N(u.href),p=await g;if(p){const[E,P,R]=p,d=P,D=d[d.length-1];t.href=u.href,t.pathname=h,t.params={...E},t.query=Object.fromEntries(u.searchParams.entries()),n.headings=D.headings,n.menu=R,o.contents=O(d);const x=await y,r=Q(x,t,d,m);e.links=r.links,e.meta=r.meta,e.styles=r.styles,e.title=r.title,e.frontmatter=r.frontmatter,K&&T(window,s)}},Y=()=>{const a=W();if(!(a!=null&&a.params))throw new Error("Missing Qwik City Env Data");const n=b("url");if(!n)throw new Error("Missing Qwik URL Env Data");const o=new URL(n),e=i({href:o.href,pathname:o.pathname,query:Object.fromEntries(o.searchParams.entries()),params:a.params}),l=i({path:S(o)}),t=i(A),s=i({headings:void 0,menu:void 0}),m=i({contents:void 0});return c(V,s),c(z,m),c(B,t),c(F,e),c(G,l),I(k(()=>_(()=>Promise.resolve().then(()=>Z),void 0),"s_2Eo7WCpaqI8",[s,m,t,a,e,l])),q(M,{})},Z=Object.freeze(Object.defineProperty({__proto__:null,s_2Eo7WCpaqI8:X,s_TxCFOy819ag:Y,_hW:U},Symbol.toStringTag,{value:"Module"}));export{ot as _hW,X as s_2Eo7WCpaqI8,Y as s_TxCFOy819ag};
