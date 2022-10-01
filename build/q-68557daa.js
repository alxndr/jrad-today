import{a as ot,m as Tt,u as $,_ as tt,c as Ct,Y as Bt,O as At,j as Et,X as M,d as jt,b as Ft,K as Dt}from"./q-7b43c872.js";import{createYearAgnosticDate as _t,getYear as It,getMonth as mt,getDay as gt,monthNumToWord as yt,incrementDate as Mt,decrementDate as St}from"./q-b2f25e51.js";const Jt=(m,{value:B})=>{var N;const[w]=ot(),d=Number(B),g=_t(d,w.day);(N=g.getDate)!=null&&N.call(g)&&(window.location.hash=`${d}-${w.day}`,w.month=d)},Pt=(m,{value:B})=>{var N;const[w]=ot(),d=Number(B),g=_t(w.month,d);(N=g.getDate)!=null&&N.call(g)&&(window.location.hash=`${w.month}-${d}`,w.day=d)};function Xt(m){switch(m){case"soundboard":return"SBD";case"audience":return"AUD";default:return m}}const Ot=Tt($(()=>tt(()=>import("./q-290f7bb4.js"),["build/q-290f7bb4.js","build/q-7b43c872.js","build/q-e9e10aaf.css","build/q-b2f25e51.js"]),"s_zr0sXMkduGs")),Lt=()=>{var et,c,K;Ct($(()=>tt(()=>Promise.resolve().then(()=>at),void 0),"s_08Vu5jppeJk"));const m=It(),B=mt(),w=gt(),d=`${B}/${w}/${m}`,g=Bt({concertData:null,concertsOnDate:null,day:w,isJsRunning:!1,month:B,recordingsData:null});At($(()=>tt(()=>Promise.resolve().then(()=>at),void 0),"s_WjXpUuAf3ck",[g])),Et($(()=>tt(()=>Promise.resolve().then(()=>at),void 0),"s_tEQuFot8caw",[g]));const Y=g.day===gt()&&g.month===mt()?"Today":"Then";return M("div",{class:"page-home",children:[M("h1",{children:[Y," "," ","in ",M("a",{href:"http://www.joerussosalmostdead.com",target:"_blank",children:"JRAD"})," History: ",yt(g.month)," ",g.day]}),g.concertsOnDate?(et=g.concertsOnDate)!=null&&et.length?(K=(c=g.concertsOnDate).map)==null?void 0:K.call(c,A=>M(Ot,{data:jt(A),today:jt(d)})):M(Ft,{children:[M("hr",{}),M("p",{children:[yt(g.month)," ",g.day," has always been a day off for JRAD..."]})]}):M("p",{children:"Loading..."}),g.isJsRunning&&M("p",{class:"component-datepicker",children:[M("span",{children:"Try another day?"}),M("ul",{children:[M("li",{class:"component-datepicker--month",children:M("input",{name:"month",placeholder:"month",type:"number",inputMode:"decimal",min:"1",max:"12",value:g.month,onInput$:$(()=>tt(()=>Promise.resolve().then(()=>at),void 0),"s_asLbBTFH6kA",[g])})}),M("li",{class:"component-datepicker--day",children:M("input",{name:"day",placeholder:"day",type:"number",inputMode:"decimal",min:"1",max:"31",value:g.day,onInput$:$(()=>tt(()=>Promise.resolve().then(()=>at),void 0),"s_g5vxWnYSDFs",[g])})})]}),M("button",{class:"component-datepicker--day-prev",onClick$:$(()=>tt(()=>Promise.resolve().then(()=>at),void 0),"s_6Fd8AjL5Bco",[g]),children:"day before"}),M("button",{class:"component-datepicker--day-next",onClick$:$(()=>tt(()=>Promise.resolve().then(()=>at),void 0),"s_tY5igJzCM5Q",[g]),children:"day after"})]})]})},Ut=()=>{const[m]=ot(),{month:B,day:w}=Mt({month:m.month,day:m.day});m.month=B,m.day=w,window.location.hash=`${m.month}-${m.day}`},zt=`.page-home{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}h1{width:100%;font-size:1.7em;text-align:center}h1 a{text-decoration:none}.component-datepicker{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}.component-datepicker ul{margin:0;padding:0;list-style:none;display:inline-flex;flex-direction:row;flex-wrap:wrap;break-after:always}.component-datepicker input{width:2.5em;margin:.2em;border:0;border-radius:.5em;padding:.1em;font-size:1.1em;line-height:1.9em;text-align:center}.component-datepicker--month:after{content:"/";font-size:1.2em;line-height:2em}
`,Nt=zt,Kt=async({track:m})=>{var et,c,K;const[B]=ot(),w=m(B,"concertData"),d=m(B,"recordingsData"),g=m(B,"day"),Y=`${m(B,"month")}/${g}/`;B.concertsOnDate=(K=(c=(et=w==null?void 0:w.filter)==null?void 0:et.call(w,A=>{var L;return(L=A==null?void 0:A.date)==null?void 0:L.startsWith(Y)}))==null?void 0:c.sort((A,L)=>Number(A.id)-Number(L.id)))==null?void 0:K.map(A=>{var L;return{...A,recordings:(L=d==null?void 0:d.filter)==null?void 0:L.call(d,rt=>rt.show===A.id)}})};var Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xt={exports:{}};/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/(function(m,B){(function(w,d){m.exports=d()})(Ht,function w(){var d=typeof self<"u"?self:typeof window<"u"?window:d!==void 0?d:{},g=!d.document&&!!d.postMessage,N=g&&/blob:/i.test((d.location||{}).protocol),Y={},et=0,c={parse:function(e,t){var a=(t=t||{}).dynamicTyping||!1;if(j(a)&&(t.dynamicTypingFunction=a,a={}),t.dynamicTyping=a,t.transform=!!j(t.transform)&&t.transform,t.worker&&c.WORKERS_SUPPORTED){var i=function(){if(!c.WORKERS_SUPPORTED)return!1;var u=(D=d.URL||d.webkitURL||null,_=w.toString(),c.BLOB_URL||(c.BLOB_URL=D.createObjectURL(new Blob(["(",_,")();"],{type:"text/javascript"})))),v=new d.Worker(u),D,_;return v.onmessage=Rt,v.id=et++,Y[v.id]=v}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=j(t.step),t.chunk=j(t.chunk),t.complete=j(t.complete),t.error=j(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var o=null;return c.NODE_STREAM_INPUT,typeof e=="string"?o=t.download?new L(t):new nt(t):e.readable===!0&&j(e.read)&&j(e.on)?o=new ht(t):(d.File&&e instanceof File||e instanceof Object)&&(o=new rt(t)),o.stream(e)},unparse:function(e,t){var a=!1,i=!0,o=",",u=`\r
`,v='"',D=v+v,_=!1,n=null,T=!1;(function(){if(typeof t=="object"){if(typeof t.delimiter!="string"||c.BAD_DELIMITERS.filter(function(r){return t.delimiter.indexOf(r)!==-1}).length||(o=t.delimiter),(typeof t.quotes=="boolean"||typeof t.quotes=="function"||Array.isArray(t.quotes))&&(a=t.quotes),typeof t.skipEmptyLines!="boolean"&&typeof t.skipEmptyLines!="string"||(_=t.skipEmptyLines),typeof t.newline=="string"&&(u=t.newline),typeof t.quoteChar=="string"&&(v=t.quoteChar),typeof t.header=="boolean"&&(i=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw new Error("Option columns is empty");n=t.columns}t.escapeChar!==void 0&&(D=t.escapeChar+v),(typeof t.escapeFormulae=="boolean"||t.escapeFormulae instanceof RegExp)&&(T=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var h=new RegExp(st(v),"g");if(typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return W(null,e,_);if(typeof e[0]=="object")return W(n||Object.keys(e[0]),e,_)}else if(typeof e=="object")return typeof e.data=="string"&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||n),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]=="object"?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]=="object"||(e.data=[e.data])),W(e.fields||[],e.data||[],_);throw new Error("Unable to serialize unrecognized input");function W(r,y,J){var x="";typeof r=="string"&&(r=JSON.parse(r)),typeof y=="string"&&(y=JSON.parse(y));var I=Array.isArray(r)&&0<r.length,E=!Array.isArray(y[0]);if(I&&i){for(var F=0;F<r.length;F++)0<F&&(x+=o),x+=S(r[F],F);0<y.length&&(x+=u)}for(var s=0;s<y.length;s++){var b=I?r.length:y[s].length,k=!1,C=I?Object.keys(y[s]).length===0:y[s].length===0;if(J&&!I&&(k=J==="greedy"?y[s].join("").trim()==="":y[s].length===1&&y[s][0].length===0),J==="greedy"&&I){for(var p=[],f=0;f<b;f++){var R=E?r[f]:f;p.push(y[s][R])}k=p.join("").trim()===""}if(!k){for(var l=0;l<b;l++){0<l&&!C&&(x+=o);var q=I&&E?r[l]:l;x+=S(y[s][q],l)}s<y.length-1&&(!J||0<b&&!C)&&(x+=u)}}return x}function S(r,y){if(r==null)return"";if(r.constructor===Date)return JSON.stringify(r).slice(1,25);var J=!1;T&&typeof r=="string"&&T.test(r)&&(r="'"+r,J=!0);var x=r.toString().replace(h,D);return(J=J||a===!0||typeof a=="function"&&a(r,y)||Array.isArray(a)&&a[y]||function(I,E){for(var F=0;F<E.length;F++)if(-1<I.indexOf(E[F]))return!0;return!1}(x,c.BAD_DELIMITERS)||-1<x.indexOf(o)||x.charAt(0)===" "||x.charAt(x.length-1)===" ")?v+x+v:x}}};if(c.RECORD_SEP=String.fromCharCode(30),c.UNIT_SEP=String.fromCharCode(31),c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!g&&!!d.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=ut,c.ParserHandle=vt,c.NetworkStreamer=L,c.FileStreamer=rt,c.StringStreamer=nt,c.ReadableStreamStreamer=ht,d.jQuery){var K=d.jQuery;K.fn.parse=function(e){var t=e.config||{},a=[];return this.each(function(u){if(!(K(this).prop("tagName").toUpperCase()==="INPUT"&&K(this).attr("type").toLowerCase()==="file"&&d.FileReader)||!this.files||this.files.length===0)return!0;for(var v=0;v<this.files.length;v++)a.push({file:this.files[v],inputElem:this,instanceConfig:K.extend({},t)})}),i(),this;function i(){if(a.length!==0){var u,v,D,_,n=a[0];if(j(e.before)){var T=e.before(n.file,n.inputElem);if(typeof T=="object"){if(T.action==="abort")return u="AbortError",v=n.file,D=n.inputElem,_=T.reason,void(j(e.error)&&e.error({name:u},v,D,_));if(T.action==="skip")return void o();typeof T.config=="object"&&(n.instanceConfig=K.extend(n.instanceConfig,T.config))}else if(T==="skip")return void o()}var h=n.instanceConfig.complete;n.instanceConfig.complete=function(W){j(h)&&h(W,n.file,n.inputElem),o()},c.parse(n.file,n.instanceConfig)}else j(e.complete)&&e.complete()}function o(){a.splice(0,1),i()}}}function A(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(t){var a=pt(t);a.chunkSize=parseInt(a.chunkSize),t.step||t.chunk||(a.chunkSize=null),this._handle=new vt(a),(this._handle.streamer=this)._config=a}.call(this,e),this.parseChunk=function(t,a){if(this.isFirstChunk&&j(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(t);i!==void 0&&(t=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+t;this._partialLine="";var u=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var v=u.meta.cursor;this._finished||(this._partialLine=o.substring(v-this._baseIndex),this._baseIndex=v),u&&u.data&&(this._rowCount+=u.data.length);var D=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(N)d.postMessage({results:u,workerId:c.WORKER_ID,finished:D});else if(j(this._config.chunk)&&!a){if(this._config.chunk(u,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);u=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(u.data),this._completeResults.errors=this._completeResults.errors.concat(u.errors),this._completeResults.meta=u.meta),this._completed||!D||!j(this._config.complete)||u&&u.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),D||u&&u.meta.paused||this._nextChunk(),u}this._halted=!0},this._sendError=function(t){j(this._config.error)?this._config.error(t):N&&this._config.error&&d.postMessage({workerId:c.WORKER_ID,error:t,finished:!1})}}function L(e){var t;(e=e||{}).chunkSize||(e.chunkSize=c.RemoteChunkSize),A.call(this,e),this._nextChunk=g?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(a){this._input=a,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),g||(t.onload=Q(this._chunkLoaded,this),t.onerror=Q(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!g),this._config.downloadRequestHeaders){var a=this._config.downloadRequestHeaders;for(var i in a)t.setRequestHeader(i,a[i])}if(this._config.chunkSize){var o=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+o)}try{t.send(this._config.downloadRequestBody)}catch(u){this._chunkError(u.message)}g&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(a){var i=a.getResponseHeader("Content-Range");return i===null?-1:parseInt(i.substring(i.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(a){var i=t.statusText||a;this._sendError(new Error(i))}}function rt(e){var t,a;(e=e||{}).chunkSize||(e.chunkSize=c.LocalChunkSize),A.call(this,e);var i=typeof FileReader<"u";this.stream=function(o){this._input=o,a=o.slice||o.webkitSlice||o.mozSlice,i?((t=new FileReader).onload=Q(this._chunkLoaded,this),t.onerror=Q(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var o=this._input;if(this._config.chunkSize){var u=Math.min(this._start+this._config.chunkSize,this._input.size);o=a.call(o,this._start,u)}var v=t.readAsText(o,this._config.encoding);i||this._chunkLoaded({target:{result:v}})},this._chunkLoaded=function(o){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(o.target.result)},this._chunkError=function(){this._sendError(t.error)}}function nt(e){var t;A.call(this,e=e||{}),this.stream=function(a){return t=a,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var a,i=this._config.chunkSize;return i?(a=t.substring(0,i),t=t.substring(i)):(a=t,t=""),this._finished=!t,this.parseChunk(a)}}}function ht(e){A.call(this,e=e||{});var t=[],a=!0,i=!1;this.pause=function(){A.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){A.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(o){this._input=o,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):a=!0},this._streamData=Q(function(o){try{t.push(typeof o=="string"?o:o.toString(this._config.encoding)),a&&(a=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(u){this._streamError(u)}},this),this._streamError=Q(function(o){this._streamCleanUp(),this._sendError(o)},this),this._streamEnd=Q(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=Q(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function vt(e){var t,a,i,o=Math.pow(2,53),u=-o,v=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,D=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,_=this,n=0,T=0,h=!1,W=!1,S=[],r={data:[],errors:[],meta:{}};if(j(e.step)){var y=e.step;e.step=function(s){if(r=s,I())x();else{if(x(),r.data.length===0)return;n+=s.data.length,e.preview&&n>e.preview?a.abort():(r.data=r.data[0],y(r,_))}}}function J(s){return e.skipEmptyLines==="greedy"?s.join("").trim()==="":s.length===1&&s[0].length===0}function x(){return r&&i&&(F("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(r.data=r.data.filter(function(s){return!J(s)})),I()&&function(){if(!r)return;function s(k,C){j(e.transformHeader)&&(k=e.transformHeader(k,C)),S.push(k)}if(Array.isArray(r.data[0])){for(var b=0;I()&&b<r.data.length;b++)r.data[b].forEach(s);r.data.splice(0,1)}else r.data.forEach(s)}(),function(){if(!r||!e.header&&!e.dynamicTyping&&!e.transform)return r;function s(k,C){var p,f=e.header?{}:[];for(p=0;p<k.length;p++){var R=p,l=k[p];e.header&&(R=p>=S.length?"__parsed_extra":S[p]),e.transform&&(l=e.transform(l,R)),l=E(R,l),R==="__parsed_extra"?(f[R]=f[R]||[],f[R].push(l)):f[R]=l}return e.header&&(p>S.length?F("FieldMismatch","TooManyFields","Too many fields: expected "+S.length+" fields but parsed "+p,T+C):p<S.length&&F("FieldMismatch","TooFewFields","Too few fields: expected "+S.length+" fields but parsed "+p,T+C)),f}var b=1;return!r.data.length||Array.isArray(r.data[0])?(r.data=r.data.map(s),b=r.data.length):r.data=s(r.data,0),e.header&&r.meta&&(r.meta.fields=S),T+=b,r}()}function I(){return e.header&&S.length===0}function E(s,b){return k=s,e.dynamicTypingFunction&&e.dynamicTyping[k]===void 0&&(e.dynamicTyping[k]=e.dynamicTypingFunction(k)),(e.dynamicTyping[k]||e.dynamicTyping)===!0?b==="true"||b==="TRUE"||b!=="false"&&b!=="FALSE"&&(function(C){if(v.test(C)){var p=parseFloat(C);if(u<p&&p<o)return!0}return!1}(b)?parseFloat(b):D.test(b)?new Date(b):b===""?null:b):b;var k}function F(s,b,k,C){var p={type:s,code:b,message:k};C!==void 0&&(p.row=C),r.errors.push(p)}this.parse=function(s,b,k){var C=e.quoteChar||'"';if(e.newline||(e.newline=function(R,l){R=R.substring(0,1048576);var q=new RegExp(st(l)+"([^]*?)"+st(l),"gm"),H=(R=R.replace(q,"")).split("\r"),U=R.split(`
`),X=1<U.length&&U[0].length<H[0].length;if(H.length===1||X)return`
`;for(var G=0,z=0;z<H.length;z++)H[z][0]===`
`&&G++;return G>=H.length/2?`\r
`:"\r"}(s,C)),i=!1,e.delimiter)j(e.delimiter)&&(e.delimiter=e.delimiter(s),r.meta.delimiter=e.delimiter);else{var p=function(R,l,q,H,U){var X,G,z,P;U=U||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var Z=0;Z<U.length;Z++){var O=U[Z],it=0,V=0,bt=0;z=void 0;for(var ct=new ut({comments:H,delimiter:O,newline:l,preview:10}).parse(R),lt=0;lt<ct.data.length;lt++)if(q&&J(ct.data[lt]))bt++;else{var dt=ct.data[lt].length;V+=dt,z!==void 0?0<dt&&(it+=Math.abs(dt-z),z=dt):z=dt}0<ct.data.length&&(V/=ct.data.length-bt),(G===void 0||it<=G)&&(P===void 0||P<V)&&1.99<V&&(G=it,X=O,P=V)}return{successful:!!(e.delimiter=X),bestDelimiter:X}}(s,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);p.successful?e.delimiter=p.bestDelimiter:(i=!0,e.delimiter=c.DefaultDelimiter),r.meta.delimiter=e.delimiter}var f=pt(e);return e.preview&&e.header&&f.preview++,t=s,a=new ut(f),r=a.parse(t,b,k),x(),h?{meta:{paused:!0}}:r||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,a.abort(),t=j(e.chunk)?"":t.substring(a.getCharIndex())},this.resume=function(){_.streamer._halted?(h=!1,_.streamer.parseChunk(t,!0)):setTimeout(_.resume,3)},this.aborted=function(){return W},this.abort=function(){W=!0,a.abort(),r.meta.aborted=!0,j(e.complete)&&e.complete(r),t=""}}function st(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ut(e){var t,a=(e=e||{}).delimiter,i=e.newline,o=e.comments,u=e.step,v=e.preview,D=e.fastMode,_=t=e.quoteChar===void 0||e.quoteChar===null?'"':e.quoteChar;if(e.escapeChar!==void 0&&(_=e.escapeChar),(typeof a!="string"||-1<c.BAD_DELIMITERS.indexOf(a))&&(a=","),o===a)throw new Error("Comment character same as delimiter");o===!0?o="#":(typeof o!="string"||-1<c.BAD_DELIMITERS.indexOf(o))&&(o=!1),i!==`
`&&i!=="\r"&&i!==`\r
`&&(i=`
`);var n=0,T=!1;this.parse=function(h,W,S){if(typeof h!="string")throw new Error("Input must be a string");var r=h.length,y=a.length,J=i.length,x=o.length,I=j(u),E=[],F=[],s=[],b=n=0;if(!h)return P();if(D||D!==!1&&h.indexOf(t)===-1){for(var k=h.split(i),C=0;C<k.length;C++){if(s=k[C],n+=s.length,C!==k.length-1)n+=i.length;else if(S)return P();if(!o||s.substring(0,x)!==o){if(I){if(E=[],U(s.split(a)),Z(),T)return P()}else U(s.split(a));if(v&&v<=C)return E=E.slice(0,v),P(!0)}}return P()}for(var p=h.indexOf(a,n),f=h.indexOf(i,n),R=new RegExp(st(_)+st(t),"g"),l=h.indexOf(t,n);;)if(h[n]!==t)if(o&&s.length===0&&h.substring(n,n+x)===o){if(f===-1)return P();n=f+J,f=h.indexOf(i,n),p=h.indexOf(a,n)}else if(p!==-1&&(p<f||f===-1))s.push(h.substring(n,p)),n=p+y,p=h.indexOf(a,n);else{if(f===-1)break;if(s.push(h.substring(n,f)),z(f+J),I&&(Z(),T))return P();if(v&&E.length>=v)return P(!0)}else for(l=n,n++;;){if((l=h.indexOf(t,l+1))===-1)return S||F.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:E.length,index:n}),G();if(l===r-1)return G(h.substring(n,l).replace(R,t));if(t!==_||h[l+1]!==_){if(t===_||l===0||h[l-1]!==_){p!==-1&&p<l+1&&(p=h.indexOf(a,l+1)),f!==-1&&f<l+1&&(f=h.indexOf(i,l+1));var q=X(f===-1?p:Math.min(p,f));if(h.substr(l+1+q,y)===a){s.push(h.substring(n,l).replace(R,t)),h[n=l+1+q+y]!==t&&(l=h.indexOf(t,n)),p=h.indexOf(a,n),f=h.indexOf(i,n);break}var H=X(f);if(h.substring(l+1+H,l+1+H+J)===i){if(s.push(h.substring(n,l).replace(R,t)),z(l+1+H+J),p=h.indexOf(a,n),l=h.indexOf(t,n),I&&(Z(),T))return P();if(v&&E.length>=v)return P(!0);break}F.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:E.length,index:n}),l++}}else l++}return G();function U(O){E.push(O),b=n}function X(O){var it=0;if(O!==-1){var V=h.substring(l+1,O);V&&V.trim()===""&&(it=V.length)}return it}function G(O){return S||(O===void 0&&(O=h.substring(n)),s.push(O),n=r,U(s),I&&Z()),P()}function z(O){n=O,U(s),s=[],f=h.indexOf(i,n)}function P(O){return{data:E,errors:F,meta:{delimiter:a,linebreak:i,aborted:T,truncated:!!O,cursor:b+(W||0)}}}function Z(){u(P()),E=[],F=[]}},this.abort=function(){T=!0},this.getCharIndex=function(){return n}}function Rt(e){var t=e.data,a=Y[t.workerId],i=!1;if(t.error)a.userError(t.error,t.file);else if(t.results&&t.results.data){var o={abort:function(){i=!0,wt(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:ft,resume:ft};if(j(a.userStep)){for(var u=0;u<t.results.data.length&&(a.userStep({data:t.results.data[u],errors:t.results.errors,meta:t.results.meta},o),!i);u++);delete t.results}else j(a.userChunk)&&(a.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!i&&wt(t.workerId,t.results)}function wt(e,t){var a=Y[e];j(a.userComplete)&&a.userComplete(t),a.terminate(),delete Y[e]}function ft(){throw new Error("Not implemented.")}function pt(e){if(typeof e!="object"||e===null)return e;var t=Array.isArray(e)?[]:{};for(var a in e)t[a]=pt(e[a]);return t}function Q(e,t){return function(){e.apply(t,arguments)}}function j(e){return typeof e=="function"}return N&&(d.onmessage=function(e){var t=e.data;if(c.WORKER_ID===void 0&&t&&(c.WORKER_ID=t.workerId),typeof t.input=="string")d.postMessage({workerId:c.WORKER_ID,results:c.parse(t.input,t.config),finished:!0});else if(d.File&&t.input instanceof File||t.input instanceof Object){var a=c.parse(t.input,t.config);a&&d.postMessage({workerId:c.WORKER_ID,results:a,finished:!0})}}),(L.prototype=Object.create(A.prototype)).constructor=L,(rt.prototype=Object.create(A.prototype)).constructor=rt,(nt.prototype=Object.create(nt.prototype)).constructor=nt,(ht.prototype=Object.create(A.prototype)).constructor=ht,c})})(xt);const kt=xt.exports,Wt=`id,show,date,type,url
2,1,1/26/13,soundboard,https://archive.org/details/jrad2013-01-26.mtx
1,1,1/26/13,audience,https://archive.org/details/JRAD2013-01-26.nyctaper
468,1,1/26/13,audience,https://archive.org/details/jrad2013-01-26.fob-bk4022.claymont.vgrm357.flac16
469,1,1/26/13,soundboard,https://archive.org/details/jrad2013-01-26.mk5.sbd.matrix.flac16
470,1,1/26/13,video,https://www.youtube.com/watch?v=k-imU0EJEso
471,1,1/26/13,video,https://www.youtube.com/watch?v=o5tNNvS00Ik
3,2,12/27/13,soundboard,https://archive.org/details/jrad2013-12-27.cmc64.sbd.matrix.flac16
4,2,12/27/13,audience,https://archive.org/details/jrad2013-12-27.cmc641.flac16
5,3,8/1/14,soundboard,https://archive.org/details/jrad2014-08-01.cmc621.sbd.matrix.flac16
6,3,8/1/14,audience,https://archive.org/details/JoeRussosAlmostDead2014-08-01
392,3,8/1/14,video,https://www.youtube.com/watch?v=LTeE_ncumJo
7,4,9/19/14,soundboard,https://archive.org/details/jrad2014-09-19.cmc621.sbd.matrix.flac16
8,5,9/20/14,soundboard,https://archive.org/details/jrad2014-09-20.cmc621.sbd.matrix.flac16
9,6,10/5/14,soundboard,https://archive.org/details/jrad2014-10-05.sbd.flac16
11,7,10/10/14,soundboard,https://archive.org/details/jrad2014-10-10.cmc621.sbd.matrix.flac16
12,7,10/10/14,audience,https://archive.org/details/JRAD2014-10-10
15,8,10/11/14,video,https://www.youtube.com/watch?v=CmcwDa5rfwE
16,8,10/11/14,video,https://www.youtube.com/watch?v=9rAZLVi5Az0
13,8,10/11/14,soundboard,https://archive.org/details/jrad2014-10-11.cmc621.sbd.matrix.flac16
14,8,10/11/14,audience,https://archive.org/details/jrad2014-10-11.fob.mc803.kindrec
17,9,11/2/14,video,https://www.youtube.com/watch?v=kZm8nOG6hhA
18,10,12/29/14,soundboard,"http://www.livedownloads.com/live-music/0,11763/PhilRAD-mp3-flac-download-12-29-2014-The-Capitol-Theatre-Port-Chester-NY.html"
19,10,12/29/14,audience,https://archive.org/details/philrad2014-12-29.cmc641xt.flac16
465,10,12/29/14,audience,https://archive.org/details/philrad2014-12-29.mk5.flac16
20,11,12/30/14,soundboard,"http://www.livedownloads.com/live-music/0,11765/PhilRAD-mp3-flac-download-12-30-2014-The-Capitol-Theatre-Port-Chester-NY.html"
21,11,12/30/14,audience,https://archive.org/details/philrad2014-12-30.cmc641xt.flac16
466,11,12/30/14,audience,https://archive.org/details/philrad2014-12-30.mk5.flac16
22,12,12/31/14,soundboard,"http://www.livedownloads.com/live-music/0,11764/PhilRAD-mp3-flac-download-12-31-2014-The-Capitol-Theatre-Port-Chester-NY.html"
23,12,12/31/14,audience,https://archive.org/details/philrad2014-12-31.cmc641xt.flac16
365,12,12/31/14,video,https://www.youtube.com/watch?v=QOnOHzR_424
467,12,12/31/14,audience,https://archive.org/details/philrad2014-12-31.mk5.flac16
24,13,1/23/15,soundboard,https://archive.org/details/jrad2015-01-23.cmc621.sbd.matrix.flac16
25,13,1/23/15,audience,https://archive.org/details/jrad2015-01-23.cmc65xt.flac16
26,14,1/24/15,soundboard,https://archive.org/details/jrad2015-01-24.cmc621.sbd.matrix.flac16
27,14,1/24/15,audience,https://archive.org/details/jrad2015-01-24.cmc65xt.flac16
459,14,1/24/15,video,https://www.youtube.com/watch?v=iCqTmaRaVa4
28,15,2/5/15,soundboard,https://archive.org/details/jrad2015-02-05.cmc621.sbd.matrix.flac16
29,15,2/5/15,audience,https://archive.org/details/JRAD2015-02-05
30,16,2/6/15,audience,https://archive.org/details/jrad2015-02-06.mk5.flac16
472,16,2/6/15,audience,http://bt.etree.org/details.php?torrentId=578009
31,17,2/7/15,audience,https://archive.org/details/jrad2015-02-07.dpa4011.flac16
473,17,2/7/15,audience,http://bt.etree.org/details.php?torrentId=578079
474,17,2/7/15,audience,http://bt.etree.org/details.php?torrentId=578080
32,18,2/8/15,audience,https://archive.org/details/JRAD2015-02-08._KM140
33,19,2/14/15,audience,https://archive.org/details/jrad2015-02-14.cmc641xt.flac16
475,19,2/14/15,audience,http://bt.etree.org/details.php?torrentId=578172
476,19,2/14/15,audience,http://bt.etree.org/details.php?torrentId=578171
34,20,2/15/15,audience,https://archive.org/details/jrad2015-02-15.cmc641xt.flac16
477,20,2/15/15,audience,http://bt.etree.org/details.php?torrentId=578297
478,20,2/15/15,audience,http://bt.etree.org/details.php?torrentId=578296
479,20,2/15/15,audience,http://bt.etree.org/details.php?torrentId=578192
35,21,2/16/15,audience,https://archive.org/details/jrad2015-02-16.cmc641xt.flac16
480,21,2/16/15,audience,http://bt.etree.org/details.php?torrentId=578206
481,21,2/16/15,audience,http://bt.etree.org/details.php?torrentId=578207
482,21,2/16/15,audience,http://bt.etree.org/details.php?torrentId=578220
36,22,4/22/15,soundboard,https://archive.org/details/jrad2015-04-22.cmc621.sbd.matrix.flac24
37,22,4/22/15,audience,http://bt.etree.org/details.php?id=579730
483,22,4/22/15,audience,http://bt.etree.org/details.php?torrentId=579766
484,22,4/22/15,audience,http://bt.etree.org/details.php?torrentId=579730
38,23,4/23/15,audience,https://archive.org/details/jrad2015-04-23.picklemic
39,24,4/24/15,audience,https://archive.org/details/jrad2015-04-24.akg481
40,25,4/25/15,soundboard,https://archive.org/details/jrad2015-04-25.cmc621.sbd.matrix.flac24
433,25,4/25/15,audience,https://archive.org/details/jrad2015-04-25.mk4v.flac16
485,25,4/25/15,audience,http://bt.etree.org/details.php?torrentId=579590
486,25,4/25/15,audience,http://bt.etree.org/details.php?torrentId=579591
41,26,5/1/15,soundboard,https://archive.org/details/jrad2015-05-01.cmc621.sbd.matrix.flac16
42,26,5/1/15,audience,https://archive.org/details/jrad2015-05-01.busman.bsc2.flac16
488,26,5/1/15,audience,http://bt.etree.org/details.php?torrentId=579798
43,27,5/2/15,audience,https://archive.org/details/JRAD2015-05-02.ADK-TL.FLAC24
487,27,5/2/15,audience,http://bt.etree.org/details.php?torrentId=579683
44,28,5/9/15,soundboard,http://www.nyctaper.com/2015/05/joe-russos-almost-dead-may-9-2015-capitol-theatre-flacmp3streaming-matrix/
45,28,5/9/15,audience,https://archive.org/details/jrad2015-05-09.cmc622xt.flac16
489,28,5/9/15,audience,http://bt.etree.org/details.php?torrentId=579857
490,28,5/9/15,audience,http://bt.etree.org/details.php?torrentId=579856
491,28,5/9/15,audience,http://bt.etree.org/details.php?torrentId=579765
492,28,5/9/15,audience,http://bt.etree.org/details.php?torrentId=579764
493,28,5/9/15,audience,http://bt.etree.org/details.php?torrentId=579763
494,28,5/9/15,audience,http://bt.etree.org/details.php?torrentId=579762
46,29,5/16/15,audience,https://archive.org/details/jrad2015-05-16.mk41remaster.flac16
47,31,5/23/15,audience,https://archive.org/details/JRAD2015-05-23
48,32,5/24/15,soundboard,https://archive.org/details/jrad2015-05-24.cmc621.sbd.matrix.flac16
49,32,5/24/15,audience,https://archive.org/details/jrad2015-05-24.bin.flac16
50,33,5/30/15,soundboard,https://archive.org/details/jrad2015-05-30.cmc621.sbd.matrix.flac16
51,34,6/3/15,soundboard,https://archive.org/details/jrad2015-06-03.cmc55.sbd.matrix.flac16
426,34,6/3/15,video,https://www.youtube.com/watch?v=PtcfOy_GopQ
52,35,6/5/15,audience,https://archive.org/details/JRAD2015-06-05.nyctaper
495,35,6/5/15,audience,http://bt.etree.org/details.php?torrentId=580192
496,35,6/5/15,audience,http://bt.etree.org/details.php?torrentId=580845
497,35,6/5/15,audience,http://bt.etree.org/details.php?torrentId=580846
53,36,6/6/15,soundboard,https://archive.org/details/jrad2015-06-06.cmc621.sbd.matrix.flac16
54,38,7/5/15,audience,https://archive.org/details/jrad2015-07-05.k41.bsc1
56,39,7/10/15,audience,https://archive.org/details/jrad2015-07-10.m934b_16bit
57,40,8/8/15,audience,https://archive.org/details/JRAD2015-08-08
58,41,8/14/15,audience,https://archive.org/details/JRAD2015-08-14.JradPeachMusicFestivalScrantonPA
498,41,8/14/15,audience,http://bt.etree.org/details.php?torrentId=581946
499,41,8/14/15,audience,http://bt.etree.org/details.php?torrentId=581858
500,41,8/14/15,audience,http://bt.etree.org/details.php?torrentId=581779
59,42,8/22/15,soundboard,https://archive.org/details/jrad2015-08-22.sbd.flac16
60,45,9/19/15,audience,https://archive.org/details/jrad2015-09-19.ca14.flac16
335,45,9/19/15,audience,https://archive.org/details/jrad2015-09-19.bsc1.flac16
61,46,10/2/15,soundboard,https://archive.org/details/jrad2015-10-02.cmc621.sbd.matrix.flac16
62,46,10/2/15,audience,http://bt.etree.org/details.php?id=582670
501,46,10/2/15,audience,http://bt.etree.org/details.php?torrentId=582670
63,47,10/3/15,soundboard,https://archive.org/details/jrad2015-10-03.cmc621.sbd.matrix.flac16
348,47,10/3/15,pro-shot,https://www.youtube.com/watch?v=jzCy5em0Zew
64,48,10/4/15,soundboard,https://archive.org/details/jrad2015-10-04.cmc621.sbd.matrix.flac16
65,48,10/4/15,audience,http://bt.etree.org/details.php?id=582710
66,49,10/28/15,audience,https://archive.org/details/jrad2015-10-28.flac16
67,50,10/29/15,soundboard,https://archive.org/details/jrad2015-10-29.cmc621.sbd.matrix.flac16
68,51,10/30/15,audience,https://archive.org/details/jrad2015-10-30.brennecke.flac16
464,51,10/30/15,audience,https://archive.org/details/jrad2015-10-30.partial.peluso.flac16
69,52,10/31/15,audience,https://archive.org/details/JRAD2015-10-31.mk4.flac16.RD
70,53,11/27/15,audience,https://archive.org/details/jrad2015-11-27.Schoeps.mk41v.sxr4.flac16
71,54,11/28/15,audience,https://archive.org/details/jrad2015-11-28.Schoeps.mk4v.sxr4.flac16
72,55,12/11/15,soundboard,https://archive.org/details/jrad2015-12-11.cmc621.sbd.matrix.flac16
73,56,12/12/15,soundboard,https://archive.org/details/jrad2015-12-12.cmc621.sbd.matrix.flac16
74,56,12/12/15,audience,https://archive.org/details/jrad2015-12-12.zoom-h6.flac24
75,57,12/19/15,soundboard,https://archive.org/details/jrad2015-12-19.cmc621.sbd.matrix.flac16
76,57,12/19/15,audience,https://archive.org/details/jrad2015-12-19.audixhc.kindrec
502,57,12/19/15,audience,http://bt.etree.org/details.php?torrentId=583989
77,58,12/31/15,soundboard,https://archive.org/details/jrad2015-12-31.cmc65.sbd.matrix.flac16
78,58,12/31/15,audience,https://archive.org/details/JRAD2015-12-31.schoepsMK4V.travitz.flac16
79,59,1/1/16,soundboard,https://archive.org/details/jrad2016-01-01.mk41v.sbd.matrix.flac16
344,59,1/1/16,pro-shot,https://www.youtube.com/watch?v=CJIDXzv8_g4
80,60,1/2/16,soundboard,https://archive.org/details/jrad2016-01-02.mk41v.sbd.matrix.flac16
81,60,1/2/16,audience,https://archive.org/details/jrad2016-01-02.aud.senn441.wav16
503,61,1/6/16,audience,http://bt.etree.org/details.php?torrentId=584633
504,61,1/6/16,audience,http://bt.etree.org/details.php?torrentId=584917
82,62,1/7/16,video,https://www.youtube.com/watch?v=CBzC7RcJ_zY
83,62,1/7/16,video,https://www.youtube.com/watch?v=wuHnf0KIpPg
505,62,1/7/16,audience,http://bt.etree.org/details.php?torrentId=584932
84,63,2/10/16,soundboard,https://archive.org/details/jrad2016-02-10.cmc621.sbd.matrix.flac16
506,63,2/10/16,audience,http://bt.etree.org/details.php?torrentId=584991
86,64,2/11/16,video,https://www.youtube.com/watch?v=lVobAG8WIYw
87,64,2/11/16,video,https://www.youtube.com/watch?v=ITVjj1hhqAA
85,64,2/11/16,audience,https://archive.org/details/JRAD2016-02-11.JoeRussosAlmostDeadCollegeStMusicHallNewHavenCT
88,65,2/12/16,soundboard,https://archive.org/details/jrad2016-02-12.cmc621.mk41v.sbd.matrix.flac16
89,66,2/13/16,soundboard,https://archive.org/details/jrad2016-02-13.cmc621.mk41v.sbd.matrix.flac16
90,67,2/14/16,soundboard,https://archive.org/details/jrad2016-02-14.cmc621.sbd.matrix.flac16
91,68,3/24/16,unknown,https://archive.org/details/jrad2016-03-24.jrad2016-03-24
353,68,3/24/16,pro-shot,https://www.youtube.com/watch?v=tPYiYRBVyyE
338,69,3/25/16,video,https://www.youtube.com/watch?v=zrefc52l_tI
92,69,3/25/16,soundboard,https://archive.org/details/jrad2016-03-25.cmc621.cmc641vxt.sbd.matrix.flac16
339,70,3/26/16,video,https://www.youtube.com/watch?v=nS1_c2TIy84
93,70,3/26/16,soundboard,https://archive.org/details/jrad2016-03-26.cmc621.cmc641vxt.sbd.matrix.flac16
94,71,4/29/16,audience,https://archive.org/details/JRAD2016-04-29.JoyTheaterNOLA-MBHO440
95,72,4/30/16,audience,https://archive.org/details/JRAD2016-04-30.JoyTheaterNOLA-MBHO440
96,75,7/2/16,soundboard,https://archive.org/details/jrad2016-07-02.cmc621.sbd.matrix.flac16
97,76,7/3/16,soundboard,https://archive.org/details/JRAD2016-07-03.stream
98,77,8/13/16,audience,https://archive.org/details/jrad2016-08-13.tfunk260
507,77,8/13/16,audience,http://bt.etree.org/details.php?torrentId=588229
508,77,8/13/16,audience,http://bt.etree.org/details.php?torrentId=588201
509,77,8/13/16,audience,http://bt.etree.org/details.php?torrentId=594130
510,77,8/13/16,audience,http://bt.etree.org/details.php?torrentId=588265
511,77,8/13/16,audience,http://bt.etree.org/details.php?torrentId=588266
99,78,8/20/16,audience,https://archive.org/details/jrad-oregon-ridge-park-2016-08-20
100,79,8/25/16,soundboard,https://archive.org/details/jrad2016-08-25.cmc621.sbd.matrix.flac16
397,79,8/25/16,video,https://www.youtube.com/watch?v=dwNDl1XHlhc
101,80,8/26/16, matrix,https://archive.org/details/jrad2016-08-26.cmc621.sbd.matrix.flac16
512,80,8/26/16,audience,http://bt.etree.org/details.php?torrentId=588456
102,81,10/6/16,soundboard,https://archive.org/details/jrad2016-10-06.cmc621.cmc641vxt.sbd.matrix.flac16
103,82,10/7/16,soundboard,https://archive.org/details/jrad2016-10-07.cmc621.cmc641vxt.sbd.matrix.flac16
513,82,10/7/16,audience,http://bt.etree.org/details.php?torrentId=589185
104,83,10/8/16,soundboard,https://archive.org/details/jrad2016-10-08.cmc621.cmc641vxt.sbd.matrix.flac16
514,83,10/8/16,audience,http://bt.etree.org/details.php?torrentId=589196
105,84,11/11/16,audience,https://archive.org/details/jrad2016-11-11.flac16
107,85,11/12/16,video,https://www.youtube.com/watch?v=Aab7-U_1PQ8
108,85,11/12/16,video,https://www.youtube.com/watch?v=j7He3e_AIXE&t=980s
106,85,11/12/16,soundboard,https://archive.org/details/jrad2016-11-12.cmc621.sbd.matrix.flac16
109,86,11/26/16,soundboard,https://archive.org/details/jrad2016-11-26.cmc621.cmc641vxt.sbd.matrix.flac16
110,87,12/2/16,soundboard,https://archive.org/details/jrad2016-12-02.cmc621.cmc641vxt.sbd.matrix.flac16
111,88,12/4/16,soundboard,https://archive.org/details/jrad2016-12-04.cmc621.sbd.matrix.flac24
112,89,12/15/16,soundboard,https://archive.org/details/jrad2016-12-15.cmc621.sbd.matrix.flac16
113,90,12/16/16,soundboard,https://archive.org/details/jrad2016-12-16.cmc621.sbd.matrix.flac16
115,91,12/17/16,video,https://www.youtube.com/watch?v=bRTS3htBR44
116,91,12/17/16,video,https://www.youtube.com/watch?v=AcHjkZ8hruA
114,91,12/17/16,soundboard,https://archive.org/details/jrad2016-12-17.cmc621.sbd.matrix.flac24
117,92,12/28/16,soundboard,https://archive.org/details/jrad2016-12-28.cmc621.cmc641vxt.sbd.matrix.flac16
118,93,12/29/16,soundboard,https://archive.org/details/jrad2016-12-29.cmc621.cmc641vxt.sbd.matrix.flac16
120,94,12/30/16,soundboard,https://archive.org/details/jrad2016-12-30.cmc621.cmc641vxt.sbd.matrix.flac24
515,94,12/30/16,audience,http://bt.etree.org/details.php?torrentId=590605
121,95,12/31/16,soundboard,https://archive.org/details/jrad2016-12-31.cmc621.cmc65xt.sbd.matrix.flac16
123,96,1/12/17,soundboard,https://archive.org/details/jrad2017-01-12.cmc621.cmc64.sbd.matrix.flac16
124,97,1/13/17,soundboard,https://archive.org/details/jrad2017-01-13.cmc621.cmc64.sbd.matrix.flac24
125,97,1/13/17,audience,https://archive.org/details/jrad2017-01-13.peluso.ck21.flac24
516,97,1/13/17,audience,http://bt.etree.org/details.php?torrentId=590801
517,97,1/13/17,audience,http://bt.etree.org/details.php?torrentId=590802
126,98,1/14/17,soundboard,https://archive.org/details/jrad2017-01-14.cmc621.sbd.matrix.flac16
463,98,1/14/17,audience,https://archive.org/details/JRAD2017-01-14.AKG483
518,98,1/14/17,audience,http://bt.etree.org/details.php?torrentId=591029
127,99,1/15/17,soundboard,https://archive.org/details/jrad2017-01-15.cmc621.sbd.matrix.flac16
128,100,3/9/17,soundboard,https://archive.org/details/jrad2017-03-09.cmc621.cmc641vxt.sbd.matrix.flac16
130,101,3/10/17,soundboard,https://archive.org/details/jrad2017-03-10.cmc621.cmc641vxt.sbd.matrix.flac16
131,102,3/11/17,soundboard,https://archive.org/details/jrad2017-03-11.cmc621.cmc641vxt.sbd.matrix.flac16
133,103,3/16/17,soundboard,https://archive.org/details/jrad2017-03-16.cmc621.cmc641vxt.sbd.matrix.flac16
135,104,3/17/17,soundboard,https://archive.org/details/jrad2017-03-17.cmc621.cmc64.sbd.matrix.flac16
137,105,3/18/17,soundboard,https://archive.org/details/jrad2017-03-18.cmc621.sbd.matrix.flac16
462,105,3/18/17,audience,https://archive.org/details/jrad2017-03-18.flac16
519,105,3/18/17,audience,http://bt.etree.org/details.php?torrentId=591914
138,106,3/31/17,video,https://www.youtube.com/watch?v=41j4cbNS_OA
139,107,4/28/17,soundboard,https://archive.org/details/jrad2017-04-28.cmc621.cmc64.sbd.matrix.flac16
520,107,4/28/17,audience,http://bt.etree.org/details.php?torrentId=592853
521,107,4/28/17,audience,http://bt.etree.org/details.php?torrentId=592669
522,107,4/28/17,audience,http://bt.etree.org/details.php?torrentId=592670
523,107,4/28/17,audience,http://bt.etree.org/details.php?torrentId=592671
140,108,4/29/17,soundboard,https://archive.org/details/jrad2017-04-29.cmc621.cmc64.sbd.matrix.flac16
524,108,4/29/17,audience,http://bt.etree.org/details.php?torrentId=592718
525,108,4/29/17,audience,http://bt.etree.org/details.php?torrentId=592719
526,108,4/29/17,audience,http://bt.etree.org/details.php?torrentId=592720
142,109,5/5/17,soundboard,https://archive.org/details/jrad2017-05-05.cmc621.cmc64.sbd.matrix.flac16
143,110,5/6/17,soundboard,https://archive.org/details/jrad2017-05-06.cmc621.cmc64.sbd.matrix.flac16
144,111,5/7/17,soundboard,https://archive.org/details/jrad2017-05-07.cmc621.cmc64.sbd.matrix.flac16
145,112,6/3/17,soundboard,https://archive.org/details/jrad2017-06-03.cmc621.sbd.matrix.flac16
527,112,6/3/17,audience,http://bt.etree.org/details.php?torrentId=593437
147,113,7/16/17,soundboard,https://archive.org/details/jrad2017-07-16.cmc621.cmc64.sbd.matrix.flac24
148,113,7/16/17,audience,https://archive.org/details/JRAD2017-07-16.aud.senn8040.flac24
414,113,7/16/17,video,https://www.youtube.com/watch?v=IdTruvIqEMw
149,114,7/21/17,soundboard,https://archive.org/details/jrad2017-07-21.cmc621.cmc641vxt.sbd.matrix.flac16
150,115,7/22/17,soundboard,https://archive.org/details/jrad2017-07-22.cmc621.cmc641vxt.sbd.matrix.flac16
151,116,8/10/17,soundboard,https://www.munck-music.com/products/joe-russos-almost-dead-live-at-2017-peach-music-festival
152,116,8/10/17,audience,https://archive.org/details/grad2017-08-10.elam260.ck8.f8.flac
460,116,8/10/17,audience,https://archive.org/details/jrad2017-08-10.mk4_24bit
461,116,8/10/17,audience,http://bt.etree.org/details.php?torrentId=594586
528,116,8/10/17,audience,http://bt.etree.org/details.php?torrentId=595538
529,116,8/10/17,audience,http://bt.etree.org/details.php?torrentId=595367
154,118,8/26/17,soundboard,https://archive.org/details/jrad2017-08-26.cmc621.cmc64.sbd.matrix.flac24
156,119,8/31/17,soundboard,https://archive.org/details/jrad2017-08-31.cmc621.cmc64.sbd.matrix.flac16
341,119,8/31/17,pro-shot,https://www.youtube.com/watch?v=mknicULdGy8
530,119,8/31/17,audience,http://bt.etree.org/details.php?torrentId=595070
157,120,9/2/17,audience,https://archive.org/details/jrad-ncmf2017
158,121,10/5/17,soundboard,https://archive.org/details/jrad2017-10-05.cmc621.cmc641vxt.sbd.matrix.flac16
159,121,10/5/17,audience,https://archive.org/details/JRAD2017-10-05.aud.senn8040.flac.24
379,121,10/5/17,video,https://www.youtube.com/watch?v=XMhi8h6Dgt0
161,122,10/6/17,soundboard,https://archive.org/details/jrad2017-10-06.cmc621.cmc641vxt.sbd.matrix.flac16
163,123,10/7/17,soundboard,https://archive.org/details/jrad2017-10-07.cmc621.cmc641vxt.sbd.matrix.flac24
358,123,10/7/17,pro-shot,https://www.youtube.com/watch?v=NdGziFG68eY
164,124,10/12/17,soundboard,https://archive.org/details/jrad2017-10-12.cmc621.cmc641vxt.sbd.matrix.flac16
165,124,10/12/17,audience,https://archive.org/details/JRAD2017-10-12.aud.senn8040.earthworksTC25.flac24
413,124,10/12/17,video,https://www.youtube.com/watch?v=paOkb4I-L0c
167,125,10/13/17,soundboard,https://archive.org/details/jrad2017-10-13.cmc621.cmc641vxt.sbd.matrix.flac16
169,126,10/14/17,soundboard,https://archive.org/details/jrad2017-10-14.cmc621.cmc641vxt.sbd.matrix.flac24
171,127,10/26/17,video,https://www.youtube.com/watch?v=5bZM8jmnY8A
172,128,11/9/17,soundboard,https://archive.org/details/jrad2017-11-09.cmc621.cmc64.sbd.matrix.flac16
173,128,11/9/17,audience,https://archive.org/details/russo2017-11-09.travitz.schoepsMK4V.flac16
430,128,11/9/17,video,https://www.youtube.com/watch?v=ksUZxad5nv8
174,129,11/10/17,soundboard,https://archive.org/details/jrad2017-11-10.cmc621.cmc64.sbd.matrix.flac16
175,129,11/10/17,audience,https://archive.org/details/russo2017-11-10.travitz.schoepsMK4V.flac16
429,129,11/10/17,video,https://www.youtube.com/watch?v=B1atkoRGJ_A
2,130,11/11/17,soundboard,https://archive.org/details/jrad2017-11-11.cmc621.cmc64.sbd.matrix.flac16
177,130,11/11/17,audience,https://archive.org/details/jrad2017-11-11.theocelot_akg
387,130,11/11/17,video,https://www.youtube.com/watch?v=TftNpXKnSTI
178,131,11/24/17,soundboard,https://archive.org/details/jrad2017-11-24.cmc621.cmc64.sbd.matrix.flac16
342,131,11/24/17,pro-shot,https://www.youtube.com/watch?v=ZhCBzyPFyac
179,131,11/24/17,audience,https://archive.org/details/jrad2017-11-24
181,132,11/25/17,soundboard,https://archive.org/details/jrad2017-11-25.cmc621.cmc64.sbd.matrix.flac16
182,132,11/25/17,audience,https://archive.org/details/jrad2017-11-25.akg300.flac16
531,132,11/25/17,audience,http://bt.etree.org/details.php?torrentId=596566
184,134,12/8/17,soundboard,https://archive.org/details/jrad2017-12-08.cmc621.cmc641vxt.cmc622.sbd.matrix.flac16
185,134,12/8/17,audience,https://archive.org/details/russo2017-12-08.travitz.schoepMK4v.flac16
532,134,12/8/17,audience,http://bt.etree.org/details.php?torrentId=596743
186,135,12/9/17,soundboard,https://archive.org/details/jrad2017-12-09.cmc621.cmc641vxt.cmc622.sbd.matrix.flac24
187,135,12/9/17,audience,https://archive.org/details/russo2017-12-09.travitz.schoepsMK4v.flac16
533,135,12/9/17,audience,http://bt.etree.org/details.php?torrentId=596743
188,136,1/12/18,soundboard,https://archive.org/details/jrad2018-01-12.cmc621.cmc641vxt.sbd.matrix.flac16
189,136,1/12/18,audience,https://archive.org/details/russo2018-01-12.travitz.schoepsMK4v.flac16
191,137,1/13/18,soundboard,https://archive.org/details/jrad2018-01-13.cmc621.cmc641vxt.sbd.matrix.flac16
192,137,1/13/18,audience,https://archive.org/details/jrad2018-01-13.km184
194,138,1/14/18,soundboard,https://archive.org/details/jrad2018-01-14.cmc621.cmc641vxt.sbd.matrix.flac16
195,138,1/14/18,audience,https://archive.org/details/jrad2018-01-14.km184
534,138,1/14/18,audience,http://bt.etree.org/details.php?torrentId=597433
197,139,2/15/18,soundboard,https://archive.org/details/jrad2018-02-15.cmc621.cmc64.sbd.matrix.flac16
351,139,2/15/18,pro-shot,https://www.youtube.com/watch?v=AHIxLtTkJxk
198,139,2/15/18,audience,https://archive.org/details/jrad2018-02-15.flac16
535,139,2/15/18,audience,http://bt.etree.org/details.php?torrentId=598082
536,139,2/15/18,audience,http://bt.etree.org/details.php?torrentId=598105
537,139,2/15/18,audience,http://bt.etree.org/details.php?torrentId=598106
538,139,2/15/18,audience,http://bt.etree.org/details.php?torrentId=598107
200,140,2/16/18,soundboard,https://archive.org/details/jrad2018-02-16.cmc621.cmc64.sbd.matrix.flac24
201,140,2/16/18,audience,https://archive.org/details/jrad2018-02-16.Gefell
203,141,2/17/18,audience,https://archive.org/details/jrad2018-02-17.akg481
457,141,2/17/18,pro-shot,https://www.youtube.com/watch?v=vTi9pNKUTMw
458,141,2/17/18,pro-shot,https://www.youtube.com/watch?v=4yu7PFu36-o
204,142,2/18/18,soundboard,https://archive.org/details/jrad2018-02-18.cmc621.cmc64.sbd.matrix.flac16
350,142,2/18/18,pro-shot,https://www.youtube.com/watch?v=iaivr2IFuDM
205,142,2/18/18,audience,https://archive.org/details/jrad2018-02-18.picklemic
407,142,2/18/18,video,https://www.youtube.com/watch?v=KfZGcdEPLwI
206,143,3/8/18,soundboard,https://archive.org/details/jrad2018-03-08.cmc621.cmc641vxt.sbd.matrix.flac16
207,143,3/8/18,audience,https://archive.org/details/JRAD2018-03-08.aud.senn8040.flac24
209,144,3/9/18,soundboard,https://archive.org/details/jrad2018-03-09.cmc621.cmc641vxt.sbd.matrix.flac16
210,144,3/9/18,audience,https://archive.org/details/russo2018-03-09.travitz.schoepsMK4V.flac16
539,144,3/9/18,audience,http://bt.etree.org/details.php?torrentId=598508
540,144,3/9/18,audience,http://bt.etree.org/details.php?torrentId=598502
212,145,3/10/18,soundboard,https://archive.org/details/jrad2018-03-10.cmc621.cmc641vxt.sbd.matrix.flac16
213,145,3/10/18,audience,https://archive.org/details/russo2018-03-10.travitz.schoepsMK4V.flac16
381,145,3/10/18,video,https://www.youtube.com/watch?v=eLP2EMApDcE
541,145,3/10/18,audience,http://bt.etree.org/details.php?torrentId=598551
215,146,3/15/18,soundboard,https://archive.org/details/jrad2018-03-15.cmc621.cmc64.sbd.matrix.flac16
216,146,3/15/18,audience,https://archive.org/details/JRAD2018-03-15
412,146,3/15/18,video,https://www.youtube.com/watch?v=JUFw3pDPyIU
542,146,3/15/18,audience,http://bt.etree.org/details.php?torrentId=598875
543,146,3/15/18,audience,http://bt.etree.org/details.php?torrentId=598876
544,146,3/15/18,audience,http://bt.etree.org/details.php?torrentId=598647
545,146,3/15/18,audience,http://bt.etree.org/details.php?torrentId=598655
217,147,3/16/18,soundboard,https://archive.org/details/jrad2018-03-16.cmc621.cmc64.sbd.matrix.flac24
218,147,3/16/18,audience,https://archive.org/details/JRAD2018-03-16
219,148,3/17/18,soundboard,https://archive.org/details/jrad2018-03-17.cmc621.cmc64.sbd.matrix.flac16
220,148,3/17/18,audience,https://archive.org/details/jrad2018-03-17.nickspicks
546,148,3/17/18,audience,http://bt.etree.org/details.php?torrentId=598654
222,149,4/21/18,soundboard,https://archive.org/details/jrad2018-04-21.cmc621.cmc64.sbd.matrix.flac16
547,149,4/21/18,audience,http://bt.etree.org/details.php?torrentId=599167
224,150,5/4/18,soundboard,https://archive.org/details/jrad2018-05-04.cmc621.cmc64.sbd.matrix.flac16
352,150,5/4/18,pro-shot,https://www.youtube.com/watch?v=5hPCaCW9DHM
382,150,5/4/18,video,https://www.youtube.com/watch?v=A4T1grYq0XA
226,151,5/5/18,soundboard,https://archive.org/details/jrad2018-05-05.cmc621.cmc64.sbd.matrix.flac16
345,151,5/5/18,pro-shot,https://www.youtube.com/watch?v=1mz43B4cK1I
421,151,5/5/18,video,https://www.youtube.com/watch?v=ln_XcEbRvrU
228,152,6/16/18,soundboard,https://archive.org/details/jrad2018-06-16.cmc621.cmc64.sbd.matrix.flac24
230,153,7/13/18,soundboard,https://archive.org/details/jrad2018-07-13.cmc621.cmc64.sbd.matrix.flac24
231,154,7/14/18,soundboard,https://archive.org/details/jrad2018-07-14.cmc621.cmc64.sbd.matrix.flac16
232,154,7/14/18,audience,https://archive.org/details/JRAD2018-07-14.aud.senn8040.nico11104.flac24
233,155,7/15/18,soundboard,https://archive.org/details/jrad2018-07-15.cmc621.sbd.matrix.flac16
234,155,7/15/18,audience,https://archive.org/details/jrad2018-07-15.schoepsCMC6mk4-TascsamDR70d-24bit
235,156,7/19/18,soundboard,https://archive.org/details/jrad2018-07-19.cmc621.cmc64.sbd.matrix.flac16
236,156,7/19/18,audience,https://archive.org/details/JRAD2018-07-19.aud.senn8040.nico11104.flac24
237,157,7/20/18,soundboard,https://archive.org/details/jrad2018-07-20.cmc621.cmc64.sbd.matrix.flac16
240,158,7/21/18,video,https://www.youtube.com/watch?v=uOdP0o4fOm4
238,158,7/21/18,soundboard,https://www.munck-music.com/products/joe-russos-almost-dead-live-at-2018-peach-music-festival
239,158,7/21/18,audience,https://archive.org/details/jrad2018-07-21.litz.neumannKM150.flac16
456,158,7/21/18,audience,https://archive.org/details/jrad2018-07-21.mbhoka200.akgck1.akgck92.flac16.matrix
548,158,7/21/18,audience,http://bt.etree.org/details.php?torrentId=602086
549,158,7/21/18,audience,http://bt.etree.org/details.php?torrentId=600788
550,158,7/21/18,audience,http://bt.etree.org/details.php?torrentId=600444
551,158,7/21/18,audience,http://bt.etree.org/details.php?torrentId=600809
552,158,7/21/18,audience,http://bt.etree.org/details.php?torrentId=600810
241,159,8/2/18,audience,https://archive.org/details/jrad2018-08-02.m934b_24bit
242,160,8/10/18,soundboard,https://archive.org/details/jrad2018-08-10.cmc621.cmc64.sbd.matrix.flac16
243,160,8/10/18,audience,https://archive.org/details/jrad2018-08-10.busmanbsc1
403,160,8/10/18,video,https://www.youtube.com/watch?v=Vj4SpsZ4J4U
244,161,8/11/18,soundboard,https://archive.org/details/jrad2018-08-11.cmc621.cmc64.sbd.matrix.flac16
245,161,8/11/18,audience,https://archive.org/details/joer2018-08-11
246,162,8/12/18,soundboard,https://archive.org/details/jrad2018-08-12.cmc621.cmc64.sbd.matrix.flac16
410,162,8/12/18,video,https://www.youtube.com/watch?v=GhAng7bBOiw
417,162,8/12/18,video,https://www.youtube.com/watch?v=GVqRfvynBpQ
247,163,8/16/18,soundboard,https://archive.org/details/jrad2018-08-16.cmc621.cmc64.sbd.matrix.flac16
248,163,8/16/18,audience,https://archive.org/details/russo2018-08-16.travitz.neumannKM185.flac16
370,163,8/16/18,video,https://www.youtube.com/watch?v=SvMmFtqjuno
553,163,8/16/18,audience,http://bt.etree.org/details.php?torrentId=601012
554,163,8/16/18,audience,http://bt.etree.org/details.php?torrentId=600979
555,163,8/16/18,audience,http://bt.etree.org/details.php?torrentId=600973
556,163,8/16/18,audience,http://bt.etree.org/details.php?torrentId=600972
250,164,8/23/18,video,https://www.youtube.com/watch?v=jVSf04PyUeM
249,164,8/23/18,soundboard,https://archive.org/details/jrad2018-08-23.cmc621.cmc64.sbd.matrix.flac16
251,165,8/24/18,soundboard,https://archive.org/details/jrad2018-08-24.cmc621.cmc64.sbd.matrix.flac16
253,166,9/8/18,soundboard,https://archive.org/details/jrad2018-09-08.cmc621.cmc64.sbd.matrix.flac16
254,166,9/8/18,audience,https://archive.org/details/JRAD2018-09-08.akg483.flac16
255,167,10/18/18,soundboard,https://archive.org/details/jrad2018-10-18.cmc621.cmc64.sbd.matrix.flac16
557,167,10/18/18,audience,http://bt.etree.org/details.php?torrentId=602488
256,168,10/19/18,soundboard,https://archive.org/details/JRAD2018-10-19.TowerTheater.Flac16
349,168,10/19/18,pro-shot,https://www.youtube.com/watch?v=freZl_oxA_g
257,169,10/20/18,soundboard,https://archive.org/details/jrad2018-10-20.cmc621.cmc64.sbd.matrix.flac16
258,169,10/20/18,audience,https://archive.org/details/jrad2018-10-20
388,169,10/20/18,video,https://www.youtube.com/watch?v=SfZLUM3LE1k
558,169,10/20/18,audience,http://bt.etree.org/details.php?torrentId=602287
259,170,10/25/18,soundboard,https://archive.org/details/jrad2018-10-25.cmc621.cmc64.sbd.matrix.flac16
260,171,11/8/18,audience,https://archive.org/details/jrad2018-11-08.akg-c568eb.logrippo.flac2448
455,171,11/8/18,video,https://www.youtube.com/watch?v=8T3ACWkEcM8
559,171,11/8/18,audience,http://bt.etree.org/details.php?torrentId=602983
263,172,11/9/18,video,https://www.youtube.com/watch?v=JpwClgYG0p4
261,172,11/9/18,soundboard,https://archive.org/details/jrad2018-11-09.cmc621.cmc64.sbd.matrix.flac16
262,172,11/9/18,audience,https://archive.org/details/jrad2018-11-09.akg-c568eb.logrippo.flac2448
356,172,11/9/18,pro-shot,https://www.youtube.com/watch?v=n2psXpIDNjU
366,172,11/9/18,video,https://www.youtube.com/watch?v=muhv4miCT-c
373,172,11/9/18,video,https://www.youtube.com/watch?v=0kb6xk1uuLc
560,172,11/9/18,audience,http://bt.etree.org/details.php?torrentId=602985
264,173,11/10/18,soundboard,https://archive.org/details/jrad2018-11-10.cmc621.cmc64.sbd.matrix.flac16
266,174,11/11/18,video,https://www.youtube.com/watch?v=3CBo4FJ2mvM
265,174,11/11/18,soundboard,https://archive.org/details/jrad2018-11-11.cmc621.cmc64.sbd.matrix.flac16
267,175,1/18/19,soundboard,https://archive.org/details/jrad2019-01-18.cmc621.cmc65xt.sbd.matrix.flac16
268,175,1/18/19,audience,https://archive.org/details/JRAD2019-01-18.aud.mkh8040.c480bck63.nico11104.flac24
380,175,1/18/19,video,https://www.youtube.com/watch?v=mhLQpX-_EKM
269,176,1/19/19,soundboard,https://archive.org/details/jrad2019-01-19.cmc621.cmc65xt.sbd.matrix.flac16
270,176,1/19/19,audience,https://archive.org/details/jrad2019-01-19.km184
271,177,1/20/19,soundboard,https://archive.org/details/jrad2019-01-20.cmc621.cmc65xt.sbd.matrix.flac16
336,177,1/20/19,audience,https://archive.org/details/JRAD2019-01-20.aud.C480B.C414XLS.nico11104.flac24
272,178,2/14/19,soundboard,https://archive.org/details/jrad2019-02-14.cmc621.cmc64.sbd.matrix.flac24
354,178,2/14/19,pro-shot,https://www.youtube.com/watch?v=nSD2Kq1ih7M
273,178,2/14/19,audience,https://archive.org/details/jrad2019-02-14.akg483.flac16
424,178,2/14/19,video,https://www.youtube.com/watch?v=eF9GwG2-bUg
274,179,2/15/19,soundboard,https://archive.org/details/jrad2019-02-15.cmc621.cmc64.sbd.matrix.flac24
275,179,2/15/19,audience,https://archive.org/details/jrad2019-02-15.mk41v.mk21.flac16
276,180,2/16/19,soundboard,https://archive.org/details/jrad2019-02-16.cmc621.cmc64.sbd.matrix.flac24
343,181,2/17/19,pro-shot,https://www.youtube.com/watch?v=v72W-S-hMsk
277,181,2/17/19,audience,https://archive.org/details/jrad2019-02-17.picklemic
422,181,2/17/19,video,https://www.youtube.com/watch?v=aKqUbfzDQoo
431,181,2/17/19,video,https://www.youtube.com/watch?v=rqXUwRpKnBw
278,182,3/1/19,soundboard,https://archive.org/details/jrad2019-03-01.cmc621.cmc64.sbd.matrix.flac24
346,182,3/1/19,pro-shot,https://www.youtube.com/watch?v=UbJaozcBWAU
279,182,3/1/19,audience,https://archive.org/details/jrad2019-03-01
280,183,3/2/19,soundboard,https://archive.org/details/jrad2019-03-02.cmc621.cmc64.sbd.matrix.flac16
376,183,3/2/19,video,https://www.youtube.com/watch?v=r1eyaLuY3QY
446,183,3/2/19,video,https://www.youtube.com/watch?v=JOyW993YFGY
281,184,3/3/19,soundboard,https://archive.org/details/jrad2019-03-03.cmc621.cmc64.sbd.matrix.flac16
282,184,3/3/19,audience,https://archive.org/details/jrad2019-03-03
394,184,3/3/19,video,https://www.youtube.com/watch?v=acbfGWLFuI4
283,185,3/13/19,soundboard,https://archive.org/details/jrad2019-03-13.cmc621.cmc64.sbd.matrix.flac24
284,185,3/13/19,audience,https://archive.org/details/JRAD2019-03-13.Aud.Matrix.Flac16
374,185,3/13/19,video,https://www.youtube.com/watch?v=GUlPVpIqtP0
415,185,3/13/19,video,https://www.youtube.com/watch?v=j6_Oa9UFuwg
285,186,3/14/19,soundboard,https://archive.org/details/jrad2019-03-14.cmc621.cmc64.sbd.matrix.flac24
402,186,3/14/19,video,https://www.youtube.com/watch?v=W49CowH524g
286,187,3/15/19,soundboard,https://archive.org/details/jrad2019-03-15.cmc621.cmc64.sbd.matrix.flac24
287,187,3/15/19,audience,https://archive.org/details/jrad2019-03-15.travitz.schoepsMK4v.flac16
359,187,3/15/19,video,https://www.youtube.com/watch?v=ZZSc18PP5gI
389,187,3/15/19,video,https://www.youtube.com/watch?v=VSssx234g3M
288,188,3/16/19,soundboard,https://archive.org/details/jrad2019-03-16.cmc621.cmc64.sbd.matrix.flac16/
289,188,3/16/19,audience,https://archive.org/details/jrad2019-03-16
364,188,3/16/19,video,https://www.youtube.com/watch?v=oinHjiOCtSk
290,189,4/19/19,soundboard,https://archive.org/details/jrad2019-04-19.cmc621.cmc64.sbd.matrix.flac24
291,189,4/19/19,audience,https://archive.org/details/jrad2019-04-19
292,190,4/26/19,soundboard,https://archive.org/details/jrad2019-04-26.cmc621.cmc64.sbd.matrix.flac16
428,190,4/26/19,video,https://www.youtube.com/watch?v=8M3YF9tqL9A
293,191,4/27/19,soundboard,https://archive.org/details/jrad2019-04-27.cmc621.cmc64.sbd.matrix.flac16
372,191,4/27/19,video,https://www.youtube.com/watch?v=B5FnxZOCzjg
294,192,5/31/19,soundboard,https://archive.org/details/jrad2019-05-31.cmc621.cmc64.sbd.matrix.flac24
295,192,5/31/19,audience,https://archive.org/details/jrad2019-05-31
384,192,5/31/19,video,https://www.youtube.com/watch?v=eQSRCjKkXvw
386,192,5/31/19,video,https://www.youtube.com/watch?v=5k2xdtQ09fI
296,193,6/1/19,soundboard,https://archive.org/details/jrad2019-06-01.cmc621.cmc64.sbd.matrix.flac24
297,193,6/1/19,audience,https://archive.org/details/jrad2019-06-01.Nak300.CP4.flac24
395,193,6/1/19,video,https://www.youtube.com/watch?v=WTSnTf-nDng
298,194,6/2/19,soundboard,https://archive.org/details/jrad2019-06-02.cmc64.sbd.matrix.flac16
299,194,6/2/19,audience,https://archive.org/details/jrad2019-06-02
300,195,6/14/19,audience,https://archive.org/details/jrad2019-06-14
454,195,6/14/19,audience,https://archive.org/details/jrad2019-06-14.spyder9.flac16
301,196,6/15/19,soundboard,https://archive.org/details/jrad2019-06-15.cmc621.cmc64.sbd.matrix.flac16
409,196,6/15/19,video,https://www.youtube.com/watch?v=eg_JVp-DGyc
302,197,7/11/19,soundboard,https://archive.org/details/jrad2019-07-11.cmc621.cmc64.sbd.matrix.flac24
303,197,7/11/19,audience,https://archive.org/details/jrad2019-07-11.akg481
385,197,7/11/19,video,https://www.youtube.com/watch?v=4FmFEA6k770
400,197,7/11/19,video,https://www.youtube.com/watch?v=cvN5J_E0drA
411,197,7/11/19,video,https://www.youtube.com/watch?v=Ru7o5LPFhy4
304,198,7/13/19,soundboard,https://archive.org/details/jrad2019-07-13.cmc621.cmc64.sbd.matrix.flac16
361,198,7/13/19,pro-shot,https://www.youtube.com/watch?v=3xdzMi6eh5M
306,199,7/27/19,video,https://www.youtube.com/watch?v=mccbbvPimnY
305,199,7/27/19,audience,https://archive.org/details/ajrad2019-07-27.travitz.litz.schoepsMK4v.flac16
369,199,7/27/19,video,https://www.youtube.com/watch?v=A1rI_ri7_1E
423,199,7/27/19,video,https://www.youtube.com/watch?v=9QTpiCXSQXA
453,199,7/27/19,audience,https://archive.org/details/jrad2019-07-27.mbhoka200.akgck63.matrix.flac16
307,200,7/28/19,audience,https://archive.org/details/jrad2019-07-28.BurlingtonVT
309,201,8/16/19,audience,https://archive.org/details/jrad2019-08-16.pavicich_oc818
378,201,8/16/19,video,https://www.youtube.com/watch?v=wIGoyTLkPbs
396,201,8/16/19,video,https://www.youtube.com/watch?v=ZNyNGiCsLhw
310,202,8/17/19,video,https://www.youtube.com/watch?v=xu1lkp0EiLE
347,202,8/17/19,pro-shot,https://www.youtube.com/watch?v=owybkfVxjZs
340,202,8/17/19,audience,https://archive.org/details/jrad2019-08-17.MK012
452,202,8/17/19,audience,https://archive.org/details/jrad2019-08-17
311,203,8/22/19,soundboard,https://archive.org/details/jrad2019-08-22.cmc621.cmc64.sbd.matrix.flac24
312,204,8/29/19,soundboard,https://archive.org/details/jrad2019-08-29.cmc621.cmc64.sbd.matrix.flac16
313,204,8/29/19,audience,https://archive.org/details/jrad2019-08-29.travitz.litz.schoepsCMC64v.flac16
362,204,8/29/19,pro-shot,https://www.youtube.com/watch?v=szky-sP7ok4
367,204,8/29/19,video,https://www.youtube.com/watch?v=pmNe9P-I9fc
391,204,8/29/19,video,https://www.youtube.com/watch?v=RrGiqXPZyJc
399,204,8/29/19,video,https://www.youtube.com/watch?v=2EVqkrT9ytQ
401,204,8/29/19,video,https://www.youtube.com/watch?v=lq7_cE1wUog
314,205,9/12/19,soundboard,https://archive.org/details/jrad2019-09-12.cmc621.cmc64.sbd.matrix.flac24
315,205,9/12/19,audience,https://archive.org/details/jrad2019-09-12.NeumannTLM102
316,206,9/13/19,audience,https://archive.org/details/jrad2019-09-13.ck63
377,206,9/13/19,video,https://www.youtube.com/watch?v=ysW9NQrzsDA
420,206,9/13/19,video,https://www.youtube.com/watch?v=cnteS3VQoR8
317,207,9/14/19,audience,https://archive.org/details/jrad2019-09-14.akg483.flac16
451,207,9/14/19,audience,https://archive.org/details/jrad2019-09-14.aud.mkh8040.c481b.mkh30.nico11104.flac24
318,208,9/26/19,soundboard,https://archive.org/details/jrad2019-09-26.cmc621.cmc64.sbd.matrix.flac16
319,208,9/26/19,audience,https://archive.org/details/JRAD2019-09-26.SPC4.Flac24
368,208,9/26/19,video,https://www.youtube.com/watch?v=KvESUYg6MJ0
320,209,9/27/19,soundboard,https://archive.org/details/jrad2019-09-27.cmc621.cmc64.sbd.matrix.flac16
321,209,9/27/19,audience,https://archive.org/details/jrad2019-09-27.travitz.schoepsMK4v.flac16
322,210,9/28/19,soundboard,https://archive.org/details/jrad2019-09-28.cmc621.cmc64.sbd.matrix.flac16
375,210,9/28/19,video,https://www.youtube.com/watch?v=KBpyDK4FNFo
404,210,9/28/19,video,https://www.youtube.com/watch?v=FyVXq4VBV3M
324,211,10/27/19,soundboard,https://archive.org/details/jrad2019-10-27.cmc621.cmc64.sbd.matrix.flac24
325,212,11/25/19,soundboard,https://archive.org/details/jrad2019-11-25.cmc621.cmc641vxt.sbd.matrix.flac24
371,212,11/25/19,video,https://www.youtube.com/watch?v=_-mxT_Cw-RU
383,212,11/25/19,video,https://www.youtube.com/watch?v=te10MlPnL4s
406,212,11/25/19,video,https://www.youtube.com/watch?v=LxNkgWyizFE
408,212,11/25/19,video,https://www.youtube.com/watch?v=sHXetrvYmgI
326,213,2/21/20,soundboard,https://archive.org/details/jrad2020-02-21.cmc621.cmc641v.sbd.matrix.flac24
327,213,2/21/20,audience,https://archive.org/details/jrad2020-02-21.travitz.schoepsCMC64v.flac16
363,213,2/21/20,pro-shot,https://www.youtube.com/watch?v=w7IBiJf60hY
416,213,2/21/20,video,https://www.youtube.com/watch?v=RGYCzg4RjdI
432,213,2/21/20,video,https://www.youtube.com/watch?v=-jwjhWJqeD8
328,214,2/22/20,soundboard,https://archive.org/details/jrad2020-02-22.cmc621.cmc641v.sbd.matrix.flac24
329,214,2/22/20,audience,https://archive.org/details/jrad2020-02-22.travitz.schoepsCMC64v.flac16
357,214,2/22/20,pro-shot,https://www.youtube.com/watch?v=aynX8ewj1Rw
330,215,2/23/20,soundboard,https://archive.org/details/jrad2020-02-23.cmc621.cmc641v.sbd.matrix.flac24
355,215,2/23/20,pro-shot,https://www.youtube.com/watch?v=WosCVCy6QnI
331,215,2/23/20,audience,https://archive.org/details/jrad2020-02-23.antaya.mg21.flac16
393,215,2/23/20,video,https://www.youtube.com/watch?v=_AmQSKpNWWo
405,215,2/23/20,video,https://www.youtube.com/watch?v=EGbu49rL6fc
425,215,2/23/20,video,https://www.youtube.com/watch?v=vu0Uw7xuGHM
434,215,2/23/20,video,https://www.youtube.com/watch?v=VBzI_G2fC38
334,216,10/1/20,video,https://www.youtube.com/watch?v=SRZD6hBUF6A
360,217,10/2/20,video,https://www.youtube.com/watch?v=fIf9sXYk_Aw
435,219,5/28/21,audience,https://archive.org/details/jrad2021-05-28.Z
436,219,5/28/21,audience,https://archive.org/details/jrad2021-05-28.aud.ck62.nbob.pfa.nico11104.flac24
437,219,5/28/21,video,https://www.youtube.com/watch?v=nS2TobcDI0E
438,219,5/28/21,pro-shot,https://www.youtube.com/watch?v=jbvUlXkUoWI
445,219,5/28/21,audience,https://archive.org/details/jrad2021-05-28.travitz.litz.schoepsCMC64v.flac16
448,219,5/28/21,soundboard,https://archive.org/details/jrad2021-05-28.cmc621.cmc65xt.sbd.matrix.flac16
439,220,5/29/21,audience,https://archive.org/details/jrad2021-05-29
444,220,5/29/21,audience,https://archive.org/details/jrad2021-05-29.travitz.litz.schoepsCMC64v.flac16
449,220,5/29/21,soundboard,https://archive.org/details/jrad2021-05-29.cmc621.cmc65xt.sbd.matrix.flac16
440,221,5/30/21,audience,https://archive.org/details/jrad2021-05-30
447,221,5/30/21,audience,https://archive.org/details/jrad2021-05-30.aud.ck62.nbob.pfa.nico11104.flac24
450,221,5/30/21,soundboard,https://archive.org/details/jrad2021-05-30.cmc621.cmc65xt.sbd.matrix.flac16
564,222,6/18/21,audience,https://archive.org/details/jrad2021-06-18.aud.ccm22.ck62.nico11104.flac24
565,222,6/18/21,audience,https://archive.org/details/jrad2021-06-18.JRAD2021-06-18JRAD2021-6-18
567,222,6/18/21,audience,https://archive.org/details/jrad2021-06-18
568,222,6/18/21,audience,http://bt.etree.org/details.php?id=612947
606,222,6/18/21,soundboard,https://archive.org/details/jrad2021-06-18.cmc621.cmc65xt.sbd.matrix.flac16
563,223,6/19/21,audience,https://archive.org/details/jrad2021-06-19.travitz.litz.schoepsCMC64v.flac16
566,223,6/19/21,audience,https://archive.org/details/jrad2021-06-19
570,223,6/19/21,audience,https://archive.org/details/jrad2021-06-19.JRAD2021-06-19JRAD2021-6-19
580,223,6/19/21,soundboard,https://archive.org/details/jrad2021-06-19.cmc621.cmc64.sbd.matrix.flac16
561,224,6/20/21,audience,https://archive.org/details/jrad2021-06-20
562,224,6/20/21,audience,https://archive.org/details/jrad2021-06-20.travitz.litz.schoepsCMC64v.flac16
569,224,6/20/21,audience,https://archive.org/details/jrad2021-06-20.aud.ccm22.nico11104.flac24
571,224,6/20/21,audience,https://archive.org/details/jrad2021-06-20.JRAD2021-06-20JRAD
579,224,6/20/21,soundboard,https://archive.org/details/jrad2021-06-20.cmc621.cmc65xt.sbd.matrix.flac24
572,225,7/2/21,audience,https://archive.org/details/jrad2021-07-02.travitz.litz.schoepsCMC64v.flac16
573,225,7/2/21,audience,https://archive.org/details/jrad2021-07-02
574,225,7/2/21,audience,http://bt.etree.org/details.php?torrentId=613188
575,225,7/2/21,audience,http://bt.etree.org/details.php?torrentId=613187
576,225,7/2/21,audience,https://archive.org/details/jrad2021-07-02.neumann_km150.sunboy.flac16
577,225,7/2/21,audience,http://bt.etree.org/details.php?torrentId=613260
578,225,7/2/21,audience,http://bt.etree.org/details.php?torrentId=613261
579,226,7/30/21,audience,https://archive.org/details/jrad2021-07-30.aud.ccm22.ck62.nico11104.flac24
610,226,7/30/21,soundboard,https://archive.org/details/jrad2021-07-30.cmc621.cmc65xt.sbd.matrix.flac16
611,227,7/31/21,soundboard,https://archive.org/details/jrad2021-07-31.cmc621.cmc65xt.sbd.matrix.flac16
581,228,8/14/21,audience,https://archive.org/details/jrad2021-08-14.travitz.litz.schoepsCMC64v.flac16
582,229,8/15/21,audience,https://archive.org/details/jrad2021-08-15.mc930.aud.flac24
583,229,8/15/21,audience,http://bt.etree.org/details.php?torrentId=613551
592,229,8/15/21,audience,https://archive.org/details/jrad2021-08-15.travitz.litz.schoepsCMC64v.flac16
584,230,8/19/21,audience,https://archive.org/details/JRAD2021-08-19.nfisher.schoeps.flac24
585,230,8/19/21,audience,https://archive.org/details/jrad2021-08-19.Flac
586,230,8/19/21,audience,https://archive.org/details/jrad2021-08-19
587,230,8/19/21,audience,http://bt.etree.org/details.php?torrentId=613554
655,230,8/19/21,soundboard,https://archive.org/details/jrad2021-08-19.cmc621.cmc64.sbd.matrix.flac16
589,231,8/20/21,audience,https://archive.org/details/jrad2021-08-20
644,231,8/20/21,soundboard,https://archive.org/details/jrad2021-08-20.cmc621.cmc64.sbd.matrix.flac16
588,232,8/21/21,audience,https://archive.org/details/JRAD2021-08-21.RodeNTG4Shotgun
669,233,8/23/21,soundboard,https://archive.org/details/jrad2021-08-23.cmc621.cmc64.sbd.matrix.flac16
590,234,9/4/21,audience,https://archive.org/details/jrad2021-09-04.JRADWestvilleMusicBowlNewHavenCT
591,234,9/4/21,audience,https://archive.org/details/jrad2021-09-04.travitz.litz.schoepsCMC64v.flac16
613,234,9/4/21,soundboard,https://archive.org/details/jrad2021-09-04.cmc621.cmc64.sbd.matrix.flac16
593,235,9/24/21,audience,https://archive.org/details/jrad2021-09-24
594,235,9/24/21,audience,http://bt.etree.org/details.php?torrentId=613965
595,235,9/24/21,audience,https://archive.org/details/jrad2021-09-24.peluso.flac24
596,235,9/24/21,audience,https://archive.org/details/jrad2021-09-24.m20.flac24
599,235,9/24/21,audience,https://archive.org/details/jrad2021-09-24.DPA4011
600,235,9/24/21,audience,https://archive.org/details/jrad2021-09-24.flac.24.bit
602,235,9/24/21,audience,http://bt.etree.org/details.php?torrentId=613976
603,235,9/24/21,audience,http://bt.etree.org/details.php?torrentId=613977
607,235,9/24/21,audience,http://bt.etree.org/details.php?torrentId=614346
608,235,9/24/21,audience,https://archive.org/details/jrad2021-09-24.jrad2021-09-24.mk41
620,235,9/24/21,soundboard,https://archive.org/details/jrad2021-09-24.cmc621.cmc64.sbd.matrix.flac16
597,236,9/25/21,audience,https://archive.org/details/jrad2021-09-25
601,236,9/25/21,audience,https://archive.org/details/jrad2021-09-25.flac.24
605,236,9/25/21,video,https://www.youtube.com/watch?v=7jFb0rpu9u8
621,236,9/25/21,soundboard,https://archive.org/details/jrad2021-09-25.cmc621.cmc64.sbd.matrix.flac16
604,238,10/7/21,audience,https://archive.org/details/jrad2021-10-07.aud.ccm22.ck63.nico11104.flac24
622,238,10/7/21,soundboard,https://archive.org/details/jrad2021-10-07.cmc621.cmc64.sbd.matrix.flac16
623,239,10/8/21,soundboard,https://archive.org/details/jrad2021-10-08.cmc621.cmc64.sbd.matrix.flac16
624,240,10/9/21,soundboard,https://archive.org/details/jrad2021-10-09.cmc621.cmc64.sbd.matrix.flac24
612,242,10/23/21,audience,https://archive.org/details/jrad2021-10-23.adka51
614,242,10/23/21,audience,https://archive.org/details/jrad2021-10-23.aud.jazzbuph.flac16
615,243,12/3/21,pro-shot,https://www.youtube.com/watch?v=ZNAGJg9AIOc
616,243,12/3/21,pro-shot,https://www.youtube.com/watch?v=pEz6pdGfhz4
617,243,12/3/21,audience,https://archive.org/details/jrad2021-12-03.dpa4022.flac24
618,243,12/3/21,audience,https://archive.org/details/jrad2021-12-03.ck930.flac24
619,243,12/3/21,audience,https://archive.org/details/jrad2021-12-03.akg61.stearns.flac16
639,243,12/3/21,soundboard,https://archive.org/details/jrad2021-12-03.cmc621.cmc64.sbd.matrix.flac16
625,244,2/10/22,audience,https://archive.org/details/JRAD2022-02-10.AUD.Matrix.Flac24
626,244,2/10/22,audience,https://archive.org/details/JRAD2022-02-10.SPC4.Flac16
630,244,2/10/22,audience,https://archive.org/details/jrad2022-02-10.travitz.litz.neumannKM185.flac16
641,244,2/10/22,soundboard,https://archive.org/details/jrad2022-02-10.cmc621.cmc64.sbd.matrix.flac16
627,245,2/11/22,audience,https://archive.org/details/JRAD2022-02-11.AKGCK61.Flac24
629,245,2/11/22,audience,https://archive.org/details/jrad2022-02-11.travitz.litz.neumannKM185.flac16
649,245,2/11/22,soundboard,https://archive.org/details/jrad2022-02-11.cmc621.cmc64.sbd.matrix.flac16
628,246,2/12/22,audience,https://archive.org/details/JRAD2022-02-12.AKGCK63.Flac24
631,246,2/12/22,audience,https://archive.org/details/jrad2022-02-12.travitz.litz.neumannKM185.flac16
650,246,2/12/22,soundboard,https://archive.org/details/jrad2022-02-12.cmc621.cmc64.sbd.matrix.flac16
632,251,4/28/22,audience,https://archive.org/details/jrad2022-04-28.Flac
633,253,4/30/22,audience,https://archive.org/details/jrad2022-04-30.m20.flac24
637,253,4/30/22,audience,http://bt.etree.org/details.php?torrentId=615534
651,253,4/30/22,audience,https://archive.org/details/jrad2022-04-30.jrad2022-04-30.DPA4011
634,254,5/1/22,audience,http://bt.etree.org/details.php?torrentId=615535
635,254,5/1/22,audience,https://archive.org/details/jrad2022-05-01
636,254,5/1/22,audience,https://archive.org/details/jrad2022-05-01.jrad
638,254,5/1/22,audience,http://bt.etree.org/details.php?torrentId=615539
640,254,5/1/22,audience,https://archive.org/details/jrad2022-05-01.ca14.flac16
642,255,5/14/22,audience,https://archive.org/details/jrad2022-05-14.aud.ck62.nbob.pfa.mkh8040.nico11104.flac24
643,255,5/14/22,audience,https://archive.org/details/jrad2022-05-14.travitz.schoepsCMC64v.flac24
648,255,5/14/22,soundboard,https://archive.org/details/jrad2022-05-14.cmc621.cmc64.sbd.matrix.flac16
645,258,6/1/22,audience,https://archive.org/details/jrad2022-06-01
652,258,6/1/22,soundboard,https://archive.org/details/jrad2022-06-01.cmc621.cmc64.sbd.matrix.flac16
646,259,6/2/22,audience,https://archive.org/details/jrad2022-06-02.schoeps
653,259,6/2/22,soundboard,https://archive.org/details/jrad2022-06-02.cmc621.cmc64.sbd.matrix.flac16
647,260,6/3/22,audience,https://archive.org/details/jrad2022-06-03
654,261,6/24/22,audience,https://archive.org/details/JRAD2022-06-24.JRAD2022-06-24
667,261,6/24/22,audience,https://archive.org/details/jrad2022-06-24.schoeps_mk4v_flac24
656,262,7/1/22,audience,https://archive.org/details/jrad2022-07-01
657,262,7/1/22,audience,https://archive.org/details/jrad2022-07-01.MK4V
663,262,7/1/22,soundboard,https://archive.org/details/jrad2022-07-01.cmc621.cmc64.sbd.matrix.flac16
658,263,7/3/22,audience,https://archive.org/details/jrad2022-07-03.at2022
659,263,7/3/22,radio,https://archive.org/details/jrad2022-07-03.kvmr.flac16
661,263,7/3/22,audience,https://archive.org/details/jrad2022-07-03
668,263,7/3/22,soundboard,https://archive.org/details/jrad2022-07-03.cmc621.cmc64.sbd.matrix.flac16
660,264,7/7/22,audience,https://archive.org/details/jrad2022-07-07.AKGCK61.Flac24
671,264,7/7/22,soundboard,https://archive.org/details/jrad2022-07-07.cmc621.cmc64.sbd.matrix.flac16
666,265,7/8/22,soundboard,https://archive.org/details/jrad2022-07-08.cmc621.cmc64.sbd.matrix.flac16
662,266,7/9/22,soundboard,https://archive.org/details/jrad2022-07-09.cmc621.cmc64.sbd.matrix.flac16
664,267,7/21/22,audience,https://archive.org/details/jrad2022-07-21.aud.flac
665,268,7/22/22,audience,https://archive.org/details/jrad2022-07-22.NWSS
670,270,8/13/22,audience,https://archive.org/details/jrad2022-08-13
672,273,8/27/22,soundboard,https://archive.org/details/jrad2022-08-27.cmc621.cmc64.sbd.matrix.flac16
673,271,8/25/22,audience,https://archive.org/details/jrad2022-08-25
674,272,8/26/22,audience,https://archive.org/details/jrad2022-08-26.AKG463.BSC1
675,272,8/26/22,audience,https://archive.org/details/jrad2022-08-26
676,271,8/25/22,audience,https://archive.org/details/jrad2022-08-25.JRADSPACSaratogaNY
677,272,8/26/22,audience,https://archive.org/details/jrad2022-08-26.jrad2022-08-26gman
678,273,8/27/22,audience,https://archive.org/details/jrad2022-08-27
679,273,8/27/22,audience,https://archive.org/details/jrad2022-08-27.AKG463.BSC-1
680,273,8/27/22,audience,https://archive.org/details/jrad2022-08-27.jrad2022-08-27gman
681,273,8/27/22,audience,https://archive.org/details/jrad2022-08-27.akg463
682,273,8/27/22,audience,https://archive.org/details/jrad2022-08-27.mbho603ka200.v3.flac24
683,273,8/27/22,audience,https://archive.org/details/jrad2022-08-27.akgck63.akgck92.flac24
684,273,8/27/22,audience,https://archive.org/details/jrad2022-08-27.mbhoka200.v3.akgck63.flac24
685,271,8/25/22,soundboard,https://archive.org/details/jrad2022-08-25.cmc621.cmc64.sbd.matrix.flac16
686,272,8/26/22,audience,https://archive.org/details/jrad2022-08-26.mbhoka200.akgck63.flac24
`,Gt=`id,date,venue_id,set1,set2,set3,encore1,encore2,soundcheck,notes,event,links,num recordings,tagline,sellout
1,1/26/2013,22,1,2,,3,,,first show,Freaks Ball,,6,1/26/13 @ Brooklyn Bowl (Brooklyn),
2,12/27/2013,76,4,5,,6,,,,,https://i.imgur.com/CSFAO6J.jpg,2,12/27/13 @ Capitol Theatre,
3,8/1/2014,19,7,,,,,,first festival; first single-set performance; first no-encore performance,Gathering of the Vibes,https://i.imgur.com/BFhv2Rx.jpg,3,8/1/14 @ Gathering of the Vibes,
4,9/19/2014,31,8,9,,10,,,first multi-night run,,https://i.imgur.com/m3Llo9G.jpg,1,9/19/14 @ Concord Music Hall,
5,9/20/2014,31,11,12,,13,,,first multi-night run,,https://i.imgur.com/m3Llo9G.jpg,1,9/20/14 @ Concord Music Hall,
6,10/5/2014,87,14,,,,,,final set on Arrow Stage,Hardly Strictly Bluegrass Festival,,1,10/5/14 @ Hardly Strictly Bluegrass Festival,
7,10/10/2014,18,15,16,,17,,,first multi-venue multi-night run; sold out,,https://i.imgur.com/1G3XmLd.jpg,2,10/10/14 @ Boulder Theater,
8,10/11/2014,37,18,19,,20,,,first multi-venue multi-night run; sold out,,https://i.imgur.com/1G3XmLd.jpg,4,10/11/14 @ Ogden Theatre,
9,11/2/2014,51,21,,,,,,no available audio recording,Suwannee Hulaween,,1,11/2/14 @ Suwannee Hulaween,
10,12/29/2014,76,22,23,,24,,,no Dave; first night of their first three-night-run,,https://i.imgur.com/VirzmvT.jpg,3,12/29/14 @ Capitol Theatre,
11,12/30/2014,76,25,26,,27,,,no Dave; middle night of first three-night-run,,https://i.imgur.com/VirzmvT.jpg,3,12/30/14 @ Capitol Theatre,
12,12/31/2014,76,28,29,,30,,,no Dave; last night of first three-night-run; first NYE show,,https://i.imgur.com/VirzmvT.jpg,4,12/31/14 @ Capitol Theatre,
13,1/23/2015,22,31,32,,33,,,all songs were debuts,Freaks Ball,https://i.imgur.com/CuNWMLP.jpg,2,1/23/15 @ Brooklyn Bowl (Brooklyn),
14,1/24/2015,22,34,35,,36,,,,Freaks Ball,https://i.imgur.com/CuNWMLP.jpg,3,1/24/15 @ Brooklyn Bowl (Brooklyn),
15,2/5/2015,24,39,40,,41,,,,,,2,2/5/15 @ Higher Ground,TRUE
16,2/6/2015,15,42,43,,44,,,,,,2,2/6/15 @ Paradise Rock Club,TRUE
17,2/7/2015,77,45,46,,47,,,,,,3,2/7/15 @ State Theater (Portland),
18,2/8/2015,79,48,49,,50,,,,,,1,2/8/15 @ Fete Ballroom,
19,2/14/2015,37,51,52,,53,,,,,https://i.imgur.com/w8yImAX.jpg,3,2/14/15 @ Ogden Theatre,TRUE
20,2/15/2015,37,54,55,,56,,,,,https://i.imgur.com/w8yImAX.jpg,4,2/15/15 @ Ogden Theatre,
21,2/16/2015,18,57,58,,59,,,,,https://i.imgur.com/w8yImAX.jpg,4,2/16/15 @ Boulder Theater,TRUE
22,4/22/2015,61,60,61,,62,,,,,https://i.imgur.com/ik3y9a6.jpg,4,4/22/15 @ First Avenue (Minneapolis),
23,4/23/2015,60,63,64,,65,,,,,https://i.imgur.com/ik3y9a6.jpg,1,4/23/15 @ Turner Hall Ballroom,
24,4/24/2015,31,66,67,,68,,,,,https://i.imgur.com/ik3y9a6.jpg,1,4/24/15 @ Concord Music Hall,
25,4/25/2015,92,69,70,,71,,,,,https://i.imgur.com/ik3y9a6.jpg,4,4/25/15 @ The Pageant,
26,5/1/2015,68,72,73,,74,,,,,https://i.imgur.com/CN6AuT6.jpg,3,5/1/15 @ Joy Theater,
27,5/2/2015,68,75,76,,77,,,sold out,,https://i.imgur.com/CN6AuT6.jpg,2,5/2/15 @ Joy Theater,TRUE
28,5/9/2015,76,78,79,,80,,,sold out,,https://i.imgur.com/lPPYH2M.jpg,8,5/9/15 @ Capitol Theatre,TRUE
29,5/16/2015,75,81,82,,83,,,,,https://i.imgur.com/HxL4RmJ.jpg,1,5/16/15 @ Theater of the Living Arts,
30,5/22/2015,49,84,,,,,,no available recording,CounterPoint Music Festival,,0,5/22/15 @ CounterPoint Music Festival,
31,5/23/2015,32,85,,,86,,,,Summer Camp,,1,5/23/15 @ Summer Camp,
32,5/24/2015,26,87,88,,89,,,,Ville Festival,,2,5/24/15 @ Ville Festival,
33,5/30/2015,13,90,91,,92,,,,Beanstalk Festival,https://i.imgur.com/kcbbdPB.jpg,1,5/30/15 @ Beanstalk Festival,
34,6/3/2015,69,93,94,,95,,,sold out: private benefit in the Marlin Room (silent auction at set break),Songs of Love,,2,6/3/15 @ Songs of Love,TRUE
35,6/5/2015,45,96,,,,,,East Stage,Mountain Jam,,4,6/5/15 @ Mountain Jam,
36,6/6/2015,72,97,,,,,,started after midnight on the 7th,Wakarusa,https://i.imgur.com/VsEgRvN.jpg,1,6/6/15 @ Wakarusa,
37,6/26/2015,84,98,,,,,,no available recordings; show started at 1:12am on the 27th,,,0,6/26/15 @ Electric Forest,
38,7/5/2015,81,99,100,,101,,,,High Sierra Music Festival,,1,7/5/15 @ High Sierra Music Festival,
39,7/10/2015,93,102,,,,,,,All Good Festival,,1,7/10/15 @ All Good Festival,
40,8/8/2015,55,106,,,,,,,Arise Festival,,1,8/8/15 @ Arise Festival,
41,8/14/2015,88,107,,,,,,venue sound cuts out towards end of UJB,Peach Music Festival,,4,8/14/15 @ Peach Music Festival,
42,8/22/2015,34,108,,,109,,,private benefit for Cleveland's Human Fund,,https://i.imgur.com/QHhHJyA.png,1,8/22/15 @ The Music Box,
43,9/4/2015,28,110,,,,,,no available recording,North Coast Music Festival,,0,9/4/15 @ North Coast Music Festival,
44,9/6/2015,70,111,112,,113,,,no available recording,,,0,9/6/15 @ Last Breath Farm,
45,9/19/2015,41,114,,,115,,,first show outside USA; show started 12:04am on the 20th,Harvest Jazz & Blues Festival,,2,9/19/15 @ Harvest Jazz & Blues Festival,
46,10/2/2015,22,116,117,,118,,,,,https://i.imgur.com/gcfkdtL.jpg,3,10/2/15 @ Brooklyn Bowl (Brooklyn),
47,10/3/2015,22,119,120,,,,,,,https://i.imgur.com/gcfkdtL.jpg,2,10/3/15 @ Brooklyn Bowl (Brooklyn),
48,10/4/2015,22,121,122,,123,,,,,https://i.imgur.com/gcfkdtL.jpg,2,10/4/15 @ Brooklyn Bowl (Brooklyn),
49,10/28/2015,4,124,125,,126,,,Dave plays trumpet,,,1,10/28/15 @ The Orange Peel,
50,10/29/2015,51,127,,,581,,,Amphitheater Stage; broadcast live on SiriusXM's Jam On station,Suwannee Hulaween,https://i.imgur.com/0PrOYJF.jpg,1,10/29/15 @ Suwannee Hulaween,
51,10/30/2015,27,128,129,,130,,,,,,2,10/30/15 @ Music Farm,
52,10/31/2015,82,131,132,,133,,,,,https://i.imgur.com/BBBKpg8.png,1,10/31/15 @ The Ritz,
53,11/27/2015,15,134,135,,136,,,,,,1,11/27/15 @ Paradise Rock Club,TRUE
54,11/28/2015,15,137,138,,139,,,,,,1,11/28/15 @ Paradise Rock Club,TRUE
55,12/11/2015,50,140,141,,142,,143,first known recorded soundcheck; webcast on nugs.tv,,https://i.imgur.com/mSkWh5I.jpg,1,12/11/15 @ Brooklyn Bowl (Las Vegas),
56,12/12/2015,71,144,145,,146,,582,,,https://i.imgur.com/mSkWh5I.jpg,2,12/12/15 @ Fox Theater (Oakland),
57,12/19/2015,38,147,148,,,,,,,https://i.imgur.com/o7CRfo6.jpg,3,12/19/15 @ The Fillmore (Denver),TRUE
58,12/31/2015,74,149,150,151,152,,,acoustic set 2; first acoustic set; first three-set show; first NYE with full band,,https://i.imgur.com/7Pt8HyE.jpg,2,12/31/15 @ The Fillmore (Philadelphia),
59,1/1/2016,76,153,154,,155,,,,,https://i.imgur.com/qWccEen.jpg,2,1/1/16 @ Capitol Theatre,
60,1/2/2016,76,156,157,,158,,,supported by the Speakeasy Jazz Babies,,https://i.imgur.com/qWccEen.jpg,2,1/2/16 @ Capitol Theatre,
61,1/6/2016,46,159,,,160,,,,Jam Cruise,,2,1/6/16 @ Jam Cruise,
62,1/7/2016,47,161,,,,,,,Jam Cruise,,3,1/7/16 @ Jam Cruise,The 9:30 Club
63,2/10/2016,99,162,163,,164,,,no Dave (who was on tour with Ween),,https://i.imgur.com/XQLj0Yc.jpg,2,2/10/16 @ The 9:30 Club,TRUE
64,2/11/2016,66,165,166,,167,,,no Dave (who was on tour with Ween),,https://i.imgur.com/XQLj0Yc.jpg,3,2/11/16 @ College Street Music Hall,
65,2/12/2016,78,168,169,,170,,,no Dave (who was on tour with Ween),,https://i.imgur.com/XQLj0Yc.jpg,1,2/12/16 @ Lupo's Heartbreak Hotel,
66,2/13/2016,77,171,172,,173,,,no Dave (who was on tour with Ween); one of Joe's drum mics died during first set resulting in clicks/pops coming through the venue sound,,https://i.imgur.com/XQLj0Yc.jpg,1,2/13/16 @ State Theater (Portland),TRUE
67,2/14/2016,24,174,175,,176,,,no Dave (who was on tour with Ween),,https://i.imgur.com/XQLj0Yc.jpg,1,2/14/16 @ Higher Ground,TRUE
68,3/24/2016,22,177,178,,179,,,,Freaks Ball,https://i.imgur.com/dEwq9xu.jpg,2,3/24/16 @ Brooklyn Bowl (Brooklyn),TRUE
69,3/25/2016,22,180,181,,182,,,,Freaks Ball,https://i.imgur.com/dEwq9xu.jpg,2,3/25/16 @ Brooklyn Bowl (Brooklyn),TRUE
70,3/26/2016,22,183,184,,185,,,"before the encore, Pete Shapiro ""knighted"" Sir Joe Russo with an engraved sword",Freaks Ball,https://i.imgur.com/dEwq9xu.jpg,2,3/26/16 @ Brooklyn Bowl (Brooklyn),TRUE
71,4/29/2016,68,186,187,,,,,,,,1,4/29/16 @ Joy Theater,TRUE
72,4/30/2016,68,188,189,,190,,,,, ,1,4/30/16 @ Joy Theater,TRUE
73,6/30/2016,81,191,192,,,,,no available recording,High Sierra Music Festival,https://i.imgur.com/v1atQHR.png,0,6/30/16 @ High Sierra Music Festival,
74,7/1/2016,85,193,194,,195,,,no available recording,,https://i.imgur.com/v1atQHR.png,0,7/1/16 @ The Depot,
75,7/2/2016,5,196,197,,198,,,,,https://i.imgur.com/v1atQHR.png https://lot.almost-dead.net/uploads/default/optimized/1X/2a10dfe2b902eedf94abcaba6c215368d99346f5_2_666x500.jpeg,1,7/2/16 @ Belly Up,TRUE
76,7/3/2016,63,199,,,,,,,,https://i.imgur.com/v1atQHR.png,1,7/3/16 @ Red Rocks,
77,8/13/2016,88,200,,,,,,,Peach Music Festival,,6,8/13/16 @ Peach Music Festival,
78,8/20/2016,35,201,,,,,,,Hot August Music Festival,,1,8/20/16 @ Hot August Music Festival,
79,8/25/2016,3,202,,,,,,started early a.m. 8/26,LOCKN',,2,8/25/16 @ LOCKN',
80,8/26/2016,3,203,,,204,,,started early a.m. 8/27,LOCKN',,2,8/26/16 @ LOCKN',
81,10/6/2016,22,205,206,207,208,,,first three-set show outside of NYE; second set was acoustic and on temporary stage above bowling lanes,Fall Ball,https://i.imgur.com/mCQdGia.jpg,1,10/6/16 @ Brooklyn Bowl (Brooklyn),TRUE
82,10/7/2016,22,209,210,211,212,,,second set acoustic and on temporary stage above bowling lanes; John Mayer sat in for 3rd set and encore,Fall Ball,https://i.imgur.com/mCQdGia.jpg,2,10/7/16 @ Brooklyn Bowl (Brooklyn),TRUE
83,10/8/2016,22,213,214,,215,216,,first double encore,Fall Ball,https://i.imgur.com/mCQdGia.jpg,2,10/8/16 @ Brooklyn Bowl (Brooklyn),TRUE
84,11/11/2016,86,217,218,,219,,,,,https://i.imgur.com/mUv2GsA.jpg,1,11/11/16 @ House of Blues (San Diego),
85,11/12/2016,71,220,221,222,223,,,acoustic 2nd set with Bob Weir; longest show to date (3h39m),,https://i.imgur.com/mUv2GsA.jpg,3,11/12/16 @ Fox Theater (Oakland),
86,11/26/2016,74,224,225,,226,,,no Dave (who was on tour with Ween),,https://i.imgur.com/0NNLahk.jpg,1,11/26/16 @ The Fillmore (Philadelphia),TRUE
87,12/2/2016,17,227,228,,229,,,,,https://i.imgur.com/IpA2Ogt.jpg,1,12/2/16 @ House of Blues (Boston),TRUE
88,12/4/2016,80,230,231,,232,,233,show started early morning 12/5,,,1,12/4/16 @ Breathless & Now Onyx Resorts,
89,12/15/2016,37,234,235,,236,,,,,https://i.imgur.com/NcpslwZ.jpg,1,12/15/16 @ Ogden Theatre,TRUE
90,12/16/2016,18,237,238,,239,,,,,https://i.imgur.com/NcpslwZ.jpg,1,12/16/16 @ Boulder Theater,TRUE
91,12/17/2016,5,240,241,,242,,,,,https://i.imgur.com/RSYFdQL.jpg,3,12/17/16 @ Belly Up,TRUE
92,12/28/2016,21,243,,,244,,,"acoustic show: ""Marco on Upright Piano, Tommy & Scott on Acoustic Guitars thru their amps, Dave on Upright Bass & Joe on a small kit, with Kick, Snare, Hat & 1 cymbal. Only the piano & vocals were sent thru the PA""; first all-acoustic show; free show performed as pseudonym ""Data Models"" (which is an anagram of ""Almost Dead"")",,,1,12/28/16 @ Threes Brewing,
93,12/29/2016,22,245,246,,247,,,,,https://i.imgur.com/cu32MSc.jpg,1,12/29/16 @ Brooklyn Bowl (Brooklyn),TRUE
94,12/30/2016,76,248,249,,250,,,,,https://i.imgur.com/cu32MSc.jpg,2,12/30/16 @ Capitol Theatre,TRUE
95,12/31/2016,76,251,252,253,254,,,,,https://i.imgur.com/cu32MSc.jpg,1,12/31/16 @ Capitol Theatre,TRUE
96,1/12/2017,65,255,256,,257,,,,,https://i.imgur.com/BSpovev.jpg,1,1/12/17 @ Ryman Auditorium,
97,1/13/2017,27,258,259,,260,,,,,https://i.imgur.com/BSpovev.jpg,4,1/13/17 @ Music Farm,
98,1/14/2017,100,261,,,262,,,,Sunshine Music Festival,https://i.imgur.com/LVZwIcz.jpg,3,1/14/17 @ Sunshine Music Festival,
99,1/15/2017,12,263,,,264,,,,Sunshine Music Festival,,1,1/15/17 @ Sunshine Music Festival,
100,3/9/2017,22,265,266,,,,,,,https://i.imgur.com/F5icBat.jpg,1,3/9/17 @ Brooklyn Bowl (Brooklyn),TRUE
101,3/10/2017,22,267,268,,269,,,,,https://i.imgur.com/NJVhRg1.png,1,3/10/17 @ Brooklyn Bowl (Brooklyn),TRUE
102,3/11/2017,22,270,271,,272,,,,,https://i.imgur.com/NJVhRg1.png,1,3/11/17 @ Brooklyn Bowl (Brooklyn),TRUE
103,3/16/2017,22,273,274,,275,,,no Dave (who was on tour with Ween),,https://i.imgur.com/NJVhRg1.png,1,3/16/17 @ Brooklyn Bowl (Brooklyn),TRUE
104,3/17/2017,22,276,277,,278,,,no Dave (who was on tour with Ween),,https://i.imgur.com/NJVhRg1.png,1,3/17/17 @ Brooklyn Bowl (Brooklyn),TRUE
105,3/18/2017,22,279,280,,281,,282,before the encore Shapiro made an announcement honoring Sean Aiken on his last night managing Brooklyn Bowl; no Dave (who was on tour with Ween),,https://i.imgur.com/NJVhRg1.png,3,3/18/17 @ Brooklyn Bowl (Brooklyn),TRUE
106,3/31/2017,91,283,,,,,,no available audio recordings; no Marco; Oteil joins towards the end of the set and Dave joins Joe on drums at some points,Fool's Paradise,https://i.imgur.com/jdCZNNj.jpg,1,3/31/17 @ Fool's Paradise,
107,4/28/2017,37,284,285,,286,,,,,https://i.imgur.com/iDCPAbR.png,5,4/28/17 @ Ogden Theatre,
108,4/29/2017,23,287,288,,289,290,,"second set started with percussion jam using instruments created and built by Adam Morford, set up on a riser behind Joe\u2019s kit, played by Adam, Billy Martin, John Medeski, and Joe; longest show to date (3h46m); new venue when blizzard forced cancellation of the scheduled show at Red Rocks (rescheduled for 8/31/17)",,https://i.imgur.com/iDCPAbR.png,4,4/29/17 @ 1stBank Center,TRUE
109,5/5/2017,68,291,292,,293,,,,,https://i.imgur.com/Pka7CIK.jpg,1,5/5/17 @ Joy Theater,TRUE
110,5/6/2017,68,294,295,,296,,,,,https://i.imgur.com/Pka7CIK.jpg,1,5/6/17 @ Joy Theater,TRUE
111,5/7/2017,68,297,298,,299,,,,,https://i.imgur.com/Pka7CIK.jpg,1,5/7/17 @ Joy Theater,TRUE
112,6/3/2017,7,300,,,,,,,Candler Park Music & Food Festival,https://i.imgur.com/CV9z58T.jpg,2,6/3/17 @ Candler Park Music & Food Festival,
113,7/16/2017,43,301,,,302,,,no Marco nor Dave; first ('official') show without two core members,Green River Festival,https://i.imgur.com/ERUOeBL.jpg,3,7/16/17 @ Green River Festival,
114,7/21/2017,76,303,304,,305,,,,,https://i.imgur.com/6ACQRQl.jpg,1,7/21/17 @ Capitol Theatre,TRUE
115,7/22/2017,76,306,307,,308,,,,,https://i.imgur.com/6ACQRQl.jpg,1,7/22/17 @ Capitol Theatre,TRUE
116,8/10/2017,88,309,310,,311,,,,Peach Music Festival,,6,8/10/17 @ Peach Music Festival,
117,8/25/2017,3,312,,,313,,,no available recordings,LOCKN',https://i.imgur.com/eTDulFj.png,0,8/25/17 @ LOCKN',
118,8/26/2017,3,314,,,315,,,,LOCKN',https://i.imgur.com/eTDulFj.png,1,8/26/17 @ LOCKN',
119,8/31/2017,63,316,317,,318,,,,,https://i.imgur.com/ocSWvSB.jpg,3,8/31/17 @ Red Rocks,TRUE
120,9/2/2017,28,319,,,,,,,North Coast Music Festival,,1,9/2/17 @ North Coast Music Festival,
121,10/5/2017,22,320,321,,322,,,,Fall Ball,https://i.imgur.com/19OjuYU.png,3,10/5/17 @ Brooklyn Bowl (Brooklyn),TRUE
122,10/6/2017,22,323,324,,325,,,,Fall Ball,https://i.imgur.com/19OjuYU.png,1,10/6/17 @ Brooklyn Bowl (Brooklyn),TRUE
123,10/7/2017,22,326,327,,328,,,,Fall Ball,https://i.imgur.com/19OjuYU.png,2,10/7/17 @ Brooklyn Bowl (Brooklyn),TRUE
124,10/12/2017,22,329,330,,331,,,,Fall Ball,https://i.imgur.com/19OjuYU.png,3,10/12/17 @ Brooklyn Bowl (Brooklyn),TRUE
125,10/13/2017,22,332,333,,334,,,,Fall Ball,https://i.imgur.com/19OjuYU.png,1,10/13/17 @ Brooklyn Bowl (Brooklyn),TRUE
126,10/14/2017,22,335,336,,337,,,,Fall Ball,https://i.imgur.com/19OjuYU.png,1,10/14/17 @ Brooklyn Bowl (Brooklyn),TRUE
127,10/26/2017,51,338,339,,,,,"""VIP Pre-Party"" ? no available audio recordings",Hulaween,,1,10/26/17 @ Hulaween,
128,11/9/2017,53,340,341,,342,,,,,https://i.imgur.com/JfFUfZ5.jpg,3,11/9/17 @ Teragram Ballroom,TRUE
129,11/10/2017,53,343,344,,345,,,,,https://i.imgur.com/JfFUfZ5.jpg,3,11/10/17 @ Teragram Ballroom,
130,11/11/2017,71,346,347,,348,349,,,,https://i.imgur.com/JfFUfZ5.jpg,3,11/11/17 @ Fox Theater (Oakland),
131,11/24/2017,74,350,351,,352,,,,,https://i.imgur.com/KkNEJ5h.jpg,3,11/24/17 @ The Fillmore (Philadelphia),TRUE
132,11/25/2017,74,353,354,,355,,,,,https://i.imgur.com/KkNEJ5h.jpg,3,11/25/17 @ The Fillmore (Philadelphia),TRUE
133,12/4/2017,80,356,,,357,,,no available recordings,Dominican Holidaze,,0,12/4/17 @ Dominican Holidaze,
134,12/8/2017,17,358,359,,360,,,Tom played Wolf (Jerry's guitar) for entire show,,https://i.imgur.com/LfdJDns.jpg,3,12/8/17 @ House of Blues (Boston),
135,12/9/2017,17,361,362,,363,,,,,https://i.imgur.com/LfdJDns.jpg,3,12/9/17 @ House of Blues (Boston),
136,1/12/2018,76,364,365,,366,,,Joe's sister's birthday,,https://i.imgur.com/uJrV63N.png,2,1/12/18 @ Capitol Theatre,
137,1/13/2018,76,367,368,,369,,,,,https://i.imgur.com/uJrV63N.png,2,1/13/18 @ Capitol Theatre,
138,1/14/2018,76,370,371,,372,,,,,https://i.imgur.com/uJrV63N.png,3,1/14/18 @ Capitol Theatre,
139,2/15/2018,64,373,374,,375,,,,,https://i.imgur.com/6PfKYRU.jpg,7,2/15/18 @ War Memorial Auditorium,
140,2/16/2018,92,376,377,,378,,,,,https://i.imgur.com/6PfKYRU.jpg,2,2/16/18 @ The Pageant,
141,2/17/2018,29,379,380,,381,,,,,https://i.imgur.com/6PfKYRU.jpg,3,2/17/18 @ Riviera Theatre,
142,2/18/2018,57,382,383,,384,,,,,https://i.imgur.com/6PfKYRU.jpg,4,2/18/18 @ Orpheum Theatre,
143,3/8/2018,22,385,386,,387,,,during the encore Joe announced that the previous night he had played with Living Colour (at a Led Zeppelin tribute at Carnegie Hall in New York City),,https://i.imgur.com/w5CzxuZ.jpg,2,3/8/18 @ Brooklyn Bowl (Brooklyn),
144,3/9/2018,22,388,389,,390,,,,,https://i.imgur.com/w5CzxuZ.jpg,4,3/9/18 @ Brooklyn Bowl (Brooklyn),
145,3/10/2018,22,391,392,,393,,,,,https://i.imgur.com/w5CzxuZ.jpg,4,3/10/18 @ Brooklyn Bowl (Brooklyn),
146,3/15/2018,94,394,,,395,,,,,https://i.imgur.com/klcrbTr.jpg,7,3/15/18 @ Landmark Theatre (Syracuse),
147,3/16/2018,1,396,397,,398,,,,,https://i.imgur.com/klcrbTr.jpg,2,3/16/18 @ Palace Theatre,
148,3/17/2018,77,399,400,,401,,,,,https://i.imgur.com/klcrbTr.jpg,3,3/17/18 @ State Theater (Portland),
149,4/21/2018,101,402,403,,,,,,SweetWater 420 Fest,https://i.imgur.com/pzsSD2T.jpg,2,4/21/18 @ SweetWater 420 Fest,
150,5/4/2018,67,404,405,,406,,,,,https://i.imgur.com/kvzOyoc.jpg,3,5/4/18 @ Mardi Gras World Ballroom,
151,5/5/2018,67,407,408,,409,,,,,https://i.imgur.com/kvzOyoc.jpg,3,5/5/18 @ Mardi Gras World Ballroom,
152,6/16/2018,42,410,,,,,,,Founders Fest,https://i.imgur.com/nZBXMkE.jpg,1,6/16/18 @ Founders Fest,
153,7/13/2018,2,37,,,38,,,no Marco,Targhee Fest,https://i.imgur.com/nbmayID.jpg,1,7/13/18 @ Targhee Fest,
154,7/14/2018,85,411,412,,413,,,no Marco,,https://i.imgur.com/M8geUUw.jpg,2,7/14/18 @ The Depot,
155,7/15/2018,95,414,,,,,,no Marco,RIDE Festival,https://i.imgur.com/ZcwILjq.jpg,2,7/15/18 @ RIDE Festival,
156,7/19/2018,20,415,416,,417,,,second set featured Liquid Light Projection by Mad Alchemy,BRIC Celebrate Brooklyn! Festival,https://i.imgur.com/1dS5RcH.jpg,2,7/19/18 @ BRIC Celebrate Brooklyn! Festival,
157,7/20/2018,16,418,419,,420,,,Tom played Wolf (Jerry's guitar) for entire show,,https://i.imgur.com/1dS5RcH.jpg,1,7/20/18 @ Blue Hills Bank Pavilion,
158,7/21/2018,88,427,428,,,,,,Peach Music Festival,https://i.imgur.com/SSGF7xK.jpg,9,7/21/18 @ Peach Music Festival,
159,8/2/2018,96,429,430,,,,,,Werk Out Music & Arts Festival,,1,8/2/18 @ Werk Out Music & Arts Festival,
160,8/10/2018,89,434,435,,436,,,,,https://i.imgur.com/TKsq6dJ.png,3,8/10/18 @ The Showbox,
161,8/11/2018,40,437,438,,439,,,,,https://i.imgur.com/TKsq6dJ.png,2,8/11/18 @ McDonald Theatre,
162,8/12/2018,10,457,458,,459,,,,,https://i.imgur.com/TKsq6dJ.png,3,8/12/18 @ Athletic Club of Bend,
163,8/16/2018,63,460,461,,462,,,,,https://i.imgur.com/FMo5PNm.jpg,7,8/16/18 @ Red Rocks,
164,8/23/2018,3,463,,,,,,,LOCKN',https://i.imgur.com/DrNB5So.jpg,2,8/23/18 @ LOCKN',
165,8/24/2018,3,464,,,,,,,LOCKN',https://i.imgur.com/DrNB5So.jpg,1,8/24/18 @ LOCKN',
166,9/8/2018,9,465,,,,,,,Waterloo Music Festival,https://i.imgur.com/uAuj7Gx.png,2,9/8/18 @ Waterloo Music Festival,
167,10/18/2018,97,466,467,,468,,,,,https://i.imgur.com/3ET3TlG.png,2,10/18/18 @ Tower Theater,
168,10/19/2018,97,469,470,,471,,,,,https://i.imgur.com/3ET3TlG.png,2,10/19/18 @ Tower Theater,
169,10/20/2018,98,472,473,,474,,,,,https://i.imgur.com/3ET3TlG.png,4,10/20/18 @ The Anthem,
170,10/25/2018,51,475,476,,477,,,pre-party for Hulaween,Hulaween,https://i.imgur.com/eWwOJeP.jpg,1,10/25/18 @ Hulaween,TRUE
171,11/8/2018,52,478,479,,480,,,,,https://i.imgur.com/nCUh9JE.jpg,3,11/8/18 @ The Wiltern,
172,11/9/2018,52,481,482,,483,,,John Mayer sat in for second set and encore,,https://i.imgur.com/nCUh9JE.jpg,7,11/9/18 @ The Wiltern,
173,11/10/2018,71,484,485,,486,,,,,https://i.imgur.com/nCUh9JE.jpg,1,11/10/18 @ Fox Theater (Oakland),
174,11/11/2018,71,487,488,,489,,,,,https://i.imgur.com/nCUh9JE.jpg,2,11/11/18 @ Fox Theater (Oakland),
175,1/18/2019,76,490,491,,492,,,Tyrone Cotton joined for encore,,https://i.imgur.com/8mbAC0s.jpg,3,1/18/19 @ Capitol Theatre,TRUE
176,1/19/2019,76,493,494,,495,,,"Jonathan Goldberger joined for second set; the encore began with Red Baraat (who had played an opening set next door at Garcia's) marching from the back of crowd to the stage to join Joe for a jam, before the remainder of JRAD plus Goldberger joined for NFA",,https://i.imgur.com/8mbAC0s.jpg,2,1/19/19 @ Capitol Theatre,TRUE
177,1/20/2019,76,496,497,,498,,,"After WBYG, Joe (?) said Thank You to Aaron Gittleman (JRAD's monitors engineer)",,https://i.imgur.com/8mbAC0s.jpg,2,1/20/19 @ Capitol Theatre,TRUE
178,2/14/2019,6,499,500,,501,,,,,https://i.imgur.com/1JBu5cD.jpg,4,2/14/19 @ Tabernacle,TRUE
179,2/15/2019,92,502,503,,504,,,,,https://i.imgur.com/1JBu5cD.jpg,2,2/15/19 @ The Pageant,
180,2/16/2019,92,505,506,,507,,,,,https://i.imgur.com/1JBu5cD.jpg,1,2/16/19 @ The Pageant,
181,2/17/2019,56,508,509,,510,,,,,https://i.imgur.com/1JBu5cD.jpg https://www.reddit.com/r/JRADs/comments/arps0m/live_thread_the_sylvee_madison_wi_21719/,4,2/17/19 @ The Sylvee,
182,3/1/2019,1,511,512,,513,,,,,https://i.imgur.com/EEakDNY.jpg,3,3/1/19 @ Palace Theatre,
183,3/2/2019,77,514,515,,516,,,,,https://i.imgur.com/EEakDNY.jpg,3,3/2/19 @ State Theater (Portland),
184,3/3/2019,77,517,518,,519,,,"the first letters of the song titles in the first set spells ""DAVIDK"" \u2014 Joe said Happy Birthday to the late David Kay at the end of the show",,https://i.imgur.com/EEakDNY.jpg,3,3/3/19 @ State Theater (Portland),
185,3/13/2019,48,520,521,,522,,,,,https://i.imgur.com/BEDuVoF.png,4,3/13/19 @ Penn's Peak,TRUE
186,3/14/2019,66,523,524,,525,,,,,https://i.imgur.com/BEDuVoF.png,2,3/14/19 @ College Street Music Hall,TRUE
187,3/15/2019,62,526,527,,528,,,"before the encore, Joe dedicated Box of Rain to Phil Lesh on his 79th birthday",,https://i.imgur.com/BEDuVoF.png,4,3/15/19 @ The Wellmont Theater,TRUE
188,3/16/2019,33,529,530,,531,,,,,https://i.imgur.com/BEDuVoF.png,3,3/16/19 @ Masonic Cleveland Auditorium,TRUE
189,4/19/2019,101,532,,,,,,,SweetWater 420 Fest,https://i.imgur.com/tRZ2YA9.jpg,2,4/19/19 @ SweetWater 420 Fest,
190,4/26/2019,67,533,534,,535,,,Jeff Chimenti sat in for a couple songs at the end of each set & encore,,https://i.imgur.com/EFCXJul.jpg,2,4/26/19 @ Mardi Gras World Ballroom,
191,4/27/2019,67,536,537,,538,,,,,https://i.imgur.com/EFCXJul.jpg,2,4/27/19 @ Mardi Gras World Ballroom,
192,5/31/2019,39,539,540,,541,,,,,https://i.imgur.com/BYaE0tS.png,4,5/31/19 @ Cuthbert Amphitheater,
193,6/1/2019,83,542,543,,544,,,,,https://i.imgur.com/BYaE0tS.png,3,6/1/19 @ Marymoor Amphitheater,
194,6/2/2019,14,545,546,,547,,,,,https://i.imgur.com/BYaE0tS.png,2,6/2/19 @ KettleHouse Amphitheater,
195,6/14/2019,11,548,549,,,,,,Mountain Jam Festival,,2,6/14/19 @ Mountain Jam Festival,
196,6/15/2019,58,550,,,,,,longest single set? started at 1am June 16th; at That Tent,Bonnaroo Music & Arts Festival,https://i.imgur.com/3vOE1mR.jpg,2,6/15/19 @ Bonnaroo Music & Arts Festival,
197,7/11/2019,30,551,552,,553,,,,,https://i.imgur.com/Ul3qStl.jpg,5,7/11/19 @ Huntington Bank Pavilion at Northerly Island,
198,7/13/2019,59,554,,,,,,Style Stage,Levitate Music Festival,https://i.imgur.com/3rZihtB.jpg,2,7/13/19 @ Levitate Music Festival,
199,7/27/2019,88,555,,,556,,,"""Almost"" Joe Russo's Almost Dead \u2014 Marco announced that Joe and his wife had their second child (Mila) three weeks early, and in his stead both Evan Roque (Joe's drum tech) and Ben Perowsky (part of Joe's BOYFRIEND project) would be sitting in on drums",Peach Music Festival,https://i.imgur.com/liQH9bh.jpg,5,7/27/19 @ Peach Music Festival,
200,7/28/2019,25,557,558,,559,,,"""Almost"" Joe Russo's Almost Dead \u2014 Marco announced that Joe and his wife had their second child (Mila) three weeks early, and in his stead both Evan Roque (Joe's drum tech) and John Kimock (Mike Gordon Band, etc) would be sitting in on drums",Lake Champlain Maritime Festival,,1,7/28/19 @ Lake Champlain Maritime Festival,
201,8/16/2019,54,560,561,,562,,,,,https://www.reddit.com/r/JRADs/comments/crbiis/live_thread_greek_theatre_los_angeles_ca_81619/,3,8/16/19 @ Greek Theatre (Los Angeles),
202,8/17/2019,90,563,564,,565,,,,,https://i.imgur.com/Vqz6cfw.png,4,8/17/19 @ Frost Ampitheater,
203,8/22/2019,3,566,567,,568,,,"""There were some technical difficulties as a result of the rain, including the band's recording getting started late"" \u2014Costello/Roberts?",LOCKN',https://i.imgur.com/xZxR9aN.jpg,1,8/22/19 @ LOCKN',
204,8/29/2019,63,569,570,,571,,,pre/setbreak/post-show music honored Neal Casal,,https://i.imgur.com/KmpvE2n.jpg,7,8/29/19 @ Red Rocks,TRUE
205,9/12/2019,36,572,573,,574,,,,,https://i.imgur.com/XrCKJL3.jpg,2,9/12/19 @ House of Blues (Dallas),
206,9/13/2019,44,454,455,,456,,,,,https://i.imgur.com/XrCKJL3.jpg,3,9/13/19 @ House of Blues (Houston),
207,9/14/2019,8,451,452,,453,,,,Austin City Limits Live,https://i.imgur.com/XrCKJL3.jpg,2,9/14/19 @ Austin City Limits Live,
208,9/26/2019,73,448,449,,450,,,"before the encore, a trophy was presented to Stevie Pancoast commemorating the 1364 day gap between the last Help>Slip>Franks (1/1/16) show gap of 148",,https://i.imgur.com/lIiL8Kh.jpg,3,9/26/19 @ Metropolitan Opera House,
209,9/27/2019,73,445,446,,447,,,,,https://i.imgur.com/lIiL8Kh.jpg,2,9/27/19 @ Metropolitan Opera House,
210,9/28/2019,98,442,443,,444,,,,,https://i.imgur.com/lIiL8Kh.jpg,3,9/28/19 @ The Anthem,
211,10/27/2019,51,440,441,,,,,Patch Stage,Hulaween,https://i.imgur.com/EiXdV2s.jpg,1,10/27/19 @ Hulaween,
212,11/25/2019,22,431,432,,433,,583,"""Make Democracy RAD Again! A HeadCount Benefit with Joe Russo's Almost Dead: Fans will be able to pick five songs from a list of 160 that will be tallied and then built into a full, two set show by Joe""",,https://i.imgur.com/Rs3Zr8j.jpg https://www.reddit.com/r/JRADs/comments/e1jnun/live_thread_brooklyn_bowl_brooklyn_ny_112519/,5,11/25/19 @ Brooklyn Bowl (Brooklyn),
213,2/21/2020,76,424,425,,426,,,,,https://i.imgur.com/VQXzNwA.png,5,2/21/20 @ Capitol Theatre,
214,2/22/2020,76,421,422,,423,,580,surprise soundcheck with Rock & Roll Playhouse,,https://i.imgur.com/VQXzNwA.png,3,2/22/20 @ Capitol Theatre,
215,2/23/2020,76,103,104,,105,,,Chris Harford & Jimmy Fallon joined for the encore,,https://i.imgur.com/VQXzNwA.png,7,2/23/20 @ Capitol Theatre,
216,10/1/2020,76,575,576,,,,,"first performance since COVID began; livestreamed; no audience ... ""The October 1 and 2 shows will stream for FREE at 8:00PM ET on Twitch.tv/therelixchannel, with in-stream donation options to support HeadCount"" ... After set 1, Joe mentioned that he hadn't seen any of the other members since their last show, more than 8 months prior",,,1,10/1/20 @ Capitol Theatre,
217,10/2/2020,76,577,578,,,,,"livestreamed; no audience ... ""The October 1 and 2 shows will stream for FREE at 8:00PM ET on Twitch.tv/therelixchannel, with in-stream donation options to support HeadCount""",,,1,10/2/20 @ Capitol Theatre,
218,10/3/2020,76,579,,,,,,"livestreamed; no audience ... ""the Saturday, October 3 livestream featuring Joe Russo's Almost Dead will offer the public a 'donate-what-you-can' option to Benefit HeadCount. The minimum will be $1"" ""FREE for LOCKN\u2019 2021 ticket purchasers""",,,0,10/3/20 @ Capitol Theatre,
219,5/28/2021,102,584,585,,586,,,"first performance with a live audience since COVID began (15 months); rain during the show; before the encore Joe said they were doing a ""mulligan"" of the encore from their last in-person show, then introduced Chris Harford",,https://i.imgur.com/iKYhASd.jpg,6,5/28/21 @ Westville Music Bowl,TRUE
220,5/29/2021,102,587,588,,589,,,light (?) rain during the show,,https://i.imgur.com/iKYhASd.jpg,3,5/29/21 @ Westville Music Bowl,TRUE
221,5/30/2021,102,590,591,,592,,,rain during the show,,https://i.imgur.com/iKYhASd.jpg,3,5/30/21 @ Westville Music Bowl,TRUE
222,6/18/2021,102,593,594,,,,,,,https://i.imgur.com/jf9pR54.jpeg,5,6/18/21 @ Westville Music Bowl,TRUE
223,6/19/2021,102,595,596,,597,,,,,https://i.imgur.com/jf9pR54.jpeg,4,6/19/21 @ Westville Music Bowl,
224,6/20/2021,102,598,599,,600,,,Antibalas Horns for much of the show; Katie Jacoby (recently engaged to Scott!) joined for a song,,https://i.imgur.com/jf9pR54.jpeg,5,6/20/21 @ Westville Music Bowl,
225,7/2/2021,88,601,602,,603,,,,Peach Music Festival,,7,7/2/21 @ Peach Music Festival,
226,7/30/2021,102,604,605,,606,,,Eric D Johnson (Fruit Bats) sat in for the end of 2nd set plus encore,,https://i.imgur.com/O2rbVNk.jpg,2,7/30/21 @ Westville Music Bowl,
227,7/31/2021,102,607,608,,609,,,,,https://i.imgur.com/O2rbVNk.jpg,1,7/31/21 @ Westville Music Bowl,
228,8/14/2021,3,610,611,,,,,"Andrew and Brad Barr (Barr Brothers) sat in for end of first set; the second set was the first ""JRAD Plays Other Shit"" set (featuring Pink Floyd songs)",LOCKN',,1,8/14/21 @ LOCKN',
229,8/15/2021,3,613,614,,615,,,"First set was the second ""JRAD Plays Other Shit"" set (featuring Allman Brothers songs) with Andrew Barr sitting in; Andrew and Brad Barr joined for some songs in second set. Before the first set, Medeski Martin & Friends performed an hour+ all-improv set with guests joining throughout the set, guests comprised all members of JRAD and the Slip (Andrew and Brad Barr, Mar Friedman) as well as Evan Roque (Joe's drum tech and also co-drummer)",LOCKN',,3,8/15/21 @ LOCKN',
230,8/19/2021,103,616,617,,618,,,no Dave,,https://imgur.com/IBFS5Fa.jpg https://i.imgur.com/5aibg8m.jpg,5,8/19/21 @ Jacobs Pavilion at Nautica,
231,8/20/2021,104,619,620,,626,,,no Dave,,https://imgur.com/IBFS5Fa.jpg https://www.reddit.com/r/JRADs/comments/p8h8fw/anyone_need_else_streaming_the_show_tonight/,2,8/20/21 @ Artpark,
232,8/21/2021,105,621,622,,623,,,no Dave,,https://imgur.com/IBFS5Fa.jpg https://www.reddit.com/r/JRADs/comments/p92pz9/mecu_pavilion_tonight/,1,8/21/21 @ MECU Pavilion,
233,8/23/2021,106,624,625,,,,,no Dave; this show was initially scheduled to be the day prior (Sunday) but was moved due to weather; show cut short due to weather,,https://imgur.com/IBFS5Fa.jpg https://www.reddit.com/r/JRADs/comments/pab1kr/beautiful_under_the_pavilion_in_boston/,1,8/23/21 @ Leader Bank Pavilion,TRUE
234,9/4/2021,102,627,628,,629,,,ninth show in ~3 months at Westville; during setbreak Dave Niedbalski from Westville thanked the crowd & a sports-championship-style banner was hung from the top deck,,,3,9/4/21 @ Westville Music Bowl,
235,9/24/2021,107,630,631,,632,,,,,,11,9/24/21 @ Salvage Station,
236,9/25/2021,107,633,634,,635,,,,,,4,9/25/21 @ Salvage Station,
237,10/1/2021,112,,,,,,,,,,0,10/1/21 @ (private show),
238,10/7/2021,62,636,637,,638,,,,,,2,10/7/21 @ The Wellmont Theater,
239,10/8/2021,62,642,643,,644,,,,,,1,10/8/21 @ The Wellmont Theater,
240,10/9/2021,62,639,640,,641,,,,,,1,10/9/21 @ The Wellmont Theater,
241,10/22/2021,108,645,646,,647,,,,,,0,10/22/21 @ Hollywood Palladium,
242,10/23/2021,90,648,649,,650,,,,,,2,10/23/21 @ Frost Ampitheater,
243,12/3/2021,23,651,652,,653,,,,,https://i.imgur.com/KtTttni.jpg,6,12/3/21 @ 1stBank Center,
244,2/10/2022,109,654,655,,656,,,,,"https://i.imgur.com/ZrGlMoS.jpg,https://www.reddit.com/r/JRADs/comments/spkvnx/setlist_thread_21022_brooklyn_bowl_philadelphia/?sort=new",4,2/10/22 @ Brooklyn Bowl (Philadelphia),
245,2/11/2022,74,657,658,,659,,,,,https://i.imgur.com/ZrGlMoS.jpg,3,2/11/22 @ The Fillmore (Philadelphia),
246,2/12/2022,74,660,661,,662,,,,,https://i.imgur.com/ZrGlMoS.jpg,3,2/12/22 @ The Fillmore (Philadelphia),
247,3/17/2022,56,664,665,,666,,,no Dave,,https://www.reddit.com/r/JRADs/comments/tgpfdk/st_paddys_the_sylvee_madison_wi/,0,3/17/22 @ The Sylvee,
248,3/18/2022,56,667,668,,669,,,no Dave,,https://www.reddit.com/r/jambands/comments/thuyag/jrad_31822_the_sylvee_madison_wi/,0,3/18/22 @ The Sylvee,
249,3/19/2022,92,670,671,,672,,,no Dave,,https://www.reddit.com/r/JRADs/comments/ti9t8z/setlist_31922_the_pageant_st_louis_mo/,0,3/19/22 @ The Pageant,
250,3/20/2022,92,673,674,,675,,,no Dave,,https://www.reddit.com/r/JRADs/comments/tizzdf/setlist_32022_the_pageant_st_louis_mo/,0,3/20/22 @ The Pageant,
251,4/28/2022,110,676,677,,678,,,first show in Kentucky; no Dave,,https://i.imgur.com/spkQWiz.jpg https://www.reddit.com/r/JRADs/comments/ueb7z7/42822_newport_ky_setlist_thread/,1,4/28/22 @ Promowest Pavilion at Ovation,
252,4/29/2022,111,679,680,,681,,,no Dave,,https://i.imgur.com/spkQWiz.jpg,0,4/29/22 @ Rabbit Rabbit,
253,4/30/2022,111,682,683,,684,,,no Dave,,https://i.imgur.com/spkQWiz.jpg,3,4/30/22 @ Rabbit Rabbit,
254,5/1/2022,101,685,686,,,,,no Dave,SweetWater 420 Fest,,5,5/1/22 @ SweetWater 420 Fest,
255,5/14/2022,102,687,688,,689,,,rain during show,,,3,5/14/22 @ Westville Music Bowl,
256,5/15/2022,113,690,,,,,,,BeachLife Festival,,0,5/15/22 @ BeachLife Festival,
257,5/27/2022,32,691,692,,,,,,Summer Camp,,0,5/27/22 @ Summer Camp,
258,6/1/2022,114,693,694,,695,,,,,,2,6/1/22 @ Gerald R. Ford Amphitheater,
259,6/2/2022,114,696,697,,698,,,,,,2,6/2/22 @ Gerald R. Ford Amphitheater,TRUE
260,6/3/2022,63,699,700,,701,,,Marco's daughter on lead vocals for a song in first set; Stu Bogie joins for second set & encore; Marco using new keyboards: Moog Sub Fatty & Sequential Prophet Rev2 16 Voice,,,1,6/3/22 @ Red Rocks,
261,6/24/2022,115,702,,,,,,no Dave nor Marco,Northlands Music & Art Festival,,2,6/24/22 @ Northlands Music & Art Festival,
262,7/1/2022,88,703,,,,,,no Dave; Stu Bogie joins for Throwing Stones onwards; show was delayed a couple hours due to rain,Peach Music Festival,,3,7/1/22 @ Peach Music Festival,
263,7/3/2022,81,704,705,,,,,no Dave,High Sierra Music Festival,,4,7/3/22 @ High Sierra Music Festival,
264,7/7/2022,116,706,,,,,,,4848 Festival,,2,7/7/22 @ 4848 Festival,
265,7/8/2022,117,707,708,,709,,,Scott technical difficulties in first set,,,1,7/8/22 @ Stage AE,
266,7/9/2022,118,710,,,,,,,Great South Bay Music Festival,,1,7/9/22 @ Great South Bay Music Festival,
267,7/21/2022,14,711,712,,713,,,,,,1,7/21/22 @ KettleHouse Amphitheater,
268,7/22/2022,119,714,,,,,,Paul Hoffman (of Greensky Bluegrass) joined for two songs,Northwest String Summit,,1,7/22/22 @ Northwest String Summit,
269,8/12/2022,108,715,716,,717,,,"Before the encore, Joe thanked and served cake to commemorate the 200th JRAD show of some audience members",,,0,8/12/22 @ Hollywood Palladium,
270,8/13/2022,90,718,719,,720,,,,,,1,8/13/22 @ Frost Ampitheater,
271,8/25/2022,120,724,725,,726,,730,,,,2,8/25/22 @ Saratoga Performing Arts Center,
272,8/26/2022,106,727,728,,729,,,Tom played Wolf (Jerry's guitar),,https://archive.org/download/jrad2022-08-26/300391274_10217067676803465_3781856480397367115_n.jpg,3,8/26/22 @ Leader Bank Pavilion,
273,8/27/2022,106,721,722,,723,,,,,https://archive.org/download/jrad2022-08-27.akg463/PXL_20220828_030042887.jpg,8,8/27/22 @ Leader Bank Pavilion,
274,9/29/2022,,,,,,,,,,,,"9/29/22 @ Wellmont Theater, Montclair NJ"
275,9/30/2022,,,,,,,,,,,,"9/30/22 @ Wellmont Theater, Montclair NJ"
276,10/1/2022,,,,,,,,,,,,"10/1/22 @ Wellmont Theater, Montclair NJ"
277,10/31/2022,,,,,,,,,,,,"10/31/22 @ Hulaween, Live Oak FL"
278,11/11/2022,,,,,,,,,,,,"11/11/22 @ The Met, Philadelphia"
279,11/12/2022,,,,,,,,,,,,"11/12/22 @ The Anthem, DC"
280,12/2/2022,,,,,,,,,,,,"12/2/22 @ The Riv, Chicago IL"
280,12/3/2022,,,,,,,,,,,,"12/3/22 @ The Riv, Chicago IL"
280,12/4/2022,,,,,,,,,,,,"12/4/22 @ The Riv, Chicago IL"
280,12/30/2022,,,,,,,,,,,,"12/30/22 @ 1st Bank Center, Broomfield CO"
280,12/31/2022,,,,,,,,,,,,"12/31/22 @ 1st Bank Center, Broomfield CO"
`,Vt=async()=>{var B;const[m]=ot();if(m.isJsRunning||(m.isJsRunning=!0,m.day=gt(),m.month=mt()),(B=window==null?void 0:window.location)!=null&&B.hash){const[w,d]=window.location.hash.slice(1).split("-").map(Number);w>=1&&w<=12&&d>=1&&d<=31&&(m.month=w,m.day=d)}kt.parse(Gt,{header:!0,worker:!1,complete:w=>{m.concertData=w==null?void 0:w.data,kt.parse(Wt,{header:!0,worker:!1,complete:d=>{m.recordingsData=d==null?void 0:d.data}})}})},Yt=()=>{const[m]=ot(),{month:B,day:w}=St({month:m.month,day:m.day});m.month=B,m.day=w,window.location.hash=`${m.month}-${m.day}`},at=Object.freeze(Object.defineProperty({__proto__:null,s_asLbBTFH6kA:Jt,s_g5vxWnYSDFs:Pt,s_WehTHV2Vp3k:Lt,s_tY5igJzCM5Q:Ut,s_08Vu5jppeJk:Nt,s_tEQuFot8caw:Kt,s_WjXpUuAf3ck:Vt,s_6Fd8AjL5Bco:Yt,_hW:Dt},Symbol.toStringTag,{value:"Module"}));export{at as e,Xt as r};
