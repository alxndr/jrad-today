import{m as a,u as o,_ as u}from"./q-7b43c872.js";function s(e){switch(e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:throw new Error(`Unrecognized month number: ${e}`)}}function i(){return new Date().getDate()}function D(){return new Date().getMonth()+1}function g(){return new Date().getFullYear()}function n(e,r){return new Date(`2000-${e<10?`0${e}`:e}-${r<10?`0${r}`:r}T00:01`)}const d=a(o(()=>u(()=>import("./q-68557daa.js").then(e=>e.e),["build/q-68557daa.js","build/q-7b43c872.js","build/q-e9e10aaf.css"]),"s_WehTHV2Vp3k"));function m({month:e,day:r}){const t=n(e,r);return t.setDate(t.getDate()+1),{month:t.getMonth()+1,day:t.getDate()}}function h({month:e,day:r}){const t=n(e,r);return t.setDate(t.getDate()-1),{month:t.getMonth()+1,day:t.getDate()}}const p={title:"Today in JRAD History \u2014 #TIJRADH",meta:[{property:"og:title",content:"Today in JRAD History"},{property:"og:image",content:"https://jrad.today/favicon.png"}],links:[]};export{n as createYearAgnosticDate,h as decrementDate,d as default,i as getDay,D as getMonth,g as getYear,p as head,m as incrementDate,s as monthNumToWord};