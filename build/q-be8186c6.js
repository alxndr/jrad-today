import{e as h,P as a,_ as d,B as e,m as u,d as i,g as _,b as w}from"./q-9f798d71.js";import{r as b}from"./q-4a6b334c.js";import"./q-dad816a1.js";const x=`.component-concertInfo{width:46%;min-width:17em;margin:1%;padding:1%;display:flex;flex-direction:column;flex-wrap:nowrap;background:aliceblue}.component-concertInfo h2{font-size:1.3em;text-align:center}.component-concertInfo a{text-decoration:none}.component-concertInfo a:hover{text-decoration:underline}.component-concertInfo .component-concertInfo--recordings{margin:0;padding:0;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;list-style:none;justify-content:center;font-size:.8em}.component-concertInfo li:after{content:"\\2022"}.component-concertInfo li:last-child:after{content:none}.component-concertInfo li>a{padding:.5em}iframe{width:100%;height:25em;margin-top:.5em;border:0;box-shadow:inset -1px -1px 4px 4px #0008;background:white;border-radius:.9em}
`,I=x,v=({data:{date:t,id:s,recordings:n,set1:f,tagline:o},today:p})=>{var l;if(h(a(()=>d(()=>Promise.resolve().then(()=>m),void 0),"s_YJ6mtqrUqEk")),p===t)return e("div",{class:"component-concertInfo component-concertInfo-today",children:e("h2",{children:["There\u2019s a show today!!!",o.slice(o.indexOf("@")+1)]})});if(Date.parse(t)>Date.now())return e("div",{class:"component-concertInfo component-concertInfo-future",children:[e("h2",{children:[Number(t.slice(-2))+2e3,":",o.slice(o.indexOf("@")+1)]}),e("p",{children:"Coming up!"})]});const r=u({viewSetlist:!1});return e("div",{class:"component-concertInfo",children:[e("h2",{children:e("a",{href:`https://almost-dead.net/show/${s}`,target:"_blank",children:[Number(t.slice(-2))+2e3,":",o.slice(o.indexOf("@")+1)]})}),(n==null?void 0:n.length)&&e("ul",{class:"component-concertInfo--recordings",children:(l=n.map)==null?void 0:l.call(n,c=>e("li",{children:e("a",{get href(){return c.url},target:"_blank",children:b(c.type),[i]:{href:_(c,"url")}})}))})||!1,f&&e("button",{onClick$:a(()=>d(()=>Promise.resolve().then(()=>m),void 0),"s_udDrW7Y0ztw",[r]),children:[r.viewSetlist?"hide":"show"," setlist"],[i]:{children:!1}}),r.viewSetlist?e("iframe",{src:`https://almost-dead.net/show/embed/${s}`}):!1],[i]:{children:!1}})},y=()=>{const[t]=w();return t.viewSetlist=!t.viewSetlist},m=Object.freeze(Object.defineProperty({__proto__:null,s_YJ6mtqrUqEk:I,s_zr0sXMkduGs:v,s_udDrW7Y0ztw:y},Symbol.toStringTag,{value:"Module"}));export{I as s_YJ6mtqrUqEk,y as s_udDrW7Y0ztw,v as s_zr0sXMkduGs};