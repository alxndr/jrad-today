import{a as D,_,w as H,n as L,Y as r,C as i,j as K,u as b,X as j,x as k,K as A}from"./q-038992aa.js";import{K as et}from"./q-038992aa.js";import{l as I,a as M,r as O,c as Q,u as z,t as N,b as S,d as T,C as U,D as q,R as V,e as W}from"./q-5af37312.js";const Y=!1,B=!0,X=async({track:e})=>{const[o,a,n,c,t,s]=D(),{routes:l,menus:v,cacheModules:f}=await _(()=>import("./q-c0ba1430.js"),["build/q-c0ba1430.js","build/q-038992aa.js","build/q-0d6e6cba.css"]),w=e(s,"path"),u=new URL(w,t.href),h=u.pathname,g=I(l,v,f,h),C=Y?c.response:M(u.href),p=await g;if(p){const[E,y,R]=p,m=y,P=m[m.length-1];t.href=u.href,t.pathname=h,t.params={...E},t.query=Object.fromEntries(u.searchParams.entries()),o.headings=P.headings,o.menu=R,a.contents=H(m);const x=await C,d=O(x,t,m);n.links=d.links,n.meta=d.meta,n.styles=d.styles,n.title=d.title,B&&Q(window,s)}},F=()=>{const e=z();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const o=L("url");if(!o)throw new Error("Missing Qwik URL Env Data");const a=new URL(o),n=r({href:a.href,pathname:a.pathname,query:Object.fromEntries(a.searchParams.entries()),params:e.params}),c=r({path:N(a)}),t=r(S),s=r({headings:void 0,menu:void 0}),l=r({contents:void 0});return i(T,s),i(U,l),i(q,t),i(V,n),i(W,c),K(b(()=>_(()=>Promise.resolve().then(()=>G),void 0),"s_AaAlzKH0KlQ",[s,l,t,e,n,c])),j(k,{})},G=Object.freeze(Object.defineProperty({__proto__:null,s_AaAlzKH0KlQ:X,s_z1nvHyEppoI:F,_hW:A},Symbol.toStringTag,{value:"Module"}));export{et as _hW,X as s_AaAlzKH0KlQ,F as s_z1nvHyEppoI};
