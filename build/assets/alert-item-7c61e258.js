var p=(t,e,i)=>new Promise((o,n)=>{var l=a=>{try{c(i.next(a))}catch(d){n(d)}},m=a=>{try{c(i.throw(a))}catch(d){n(d)}},c=a=>a.done?o(a.value):Promise.resolve(a.value).then(l,m);c((i=i.apply(t,e)).next())});import{s,j as r,Q as v}from"./vendor-8a1e4858.js";import{as as f,at as u,au as w,X as b,R as y,av as j,S as h,aw as x,V as g,D as I}from"./index-5bf1da28.js";import{i as k}from"./is-valid-url-08a91344.js";import{B as C}from"./index-ebbac366.js";const S=()=>p(void 0,null,function*(){return(yield f.get(`?getAlerts&token=${u()}`)).data}),A=t=>t.reduce((e,i)=>{const o=new Date(i.date).getFullYear();return e[o]?e[o].push(i):e[o]=[i],e},{}),_=w({api:{get:S},prepareData:A}),D=t=>{const e=t.indexOf('src="')+5;let i=0;if(e===-1)return null;for(let n=e;n<t.length;n++)if(t[n]==='"'){i=n;break}const o=t.slice(e,i);return k(o)?o:null},L=s.div.withConfig({componentId:"sc-eyuv56-0"})(["width:100%;border-radius:",";background:",";box-shadow:",";position:relative;display:flex;flex-direction:",";align-items:",";height:",";overflow:hidden;padding:",";cursor:pointer;&:hover{filter:brightness(0.98);}"],({orientation:t})=>t==="vertical"?"calc(var(--brLight) - 3px)":"8px",({orientation:t})=>"var(--block-content)",({orientation:t})=>t==="vertical"?"var(--block-shadow)":"0 0 1px #707070",({orientation:t})=>t==="vertical"?"column":"row-reverse",({orientation:t})=>t==="vertical"?"flex-start":"stretch",({orientation:t})=>t==="vertical"?"150px":"fit-content",({orientation:t})=>t==="vertical"?"0":"12px"),M=s.div.withConfig({componentId:"sc-eyuv56-1"})(["height:",";width:",";min-width:",";min-height:",";overflow:hidden;background:",";border-radius:",";display:flex;align-items:center;justify-content:center;margin-left:",";margin-top:",";box-shadow:",";svg{width:40%;height:40%;}img{height:100%;width:100%;object-fit:cover;}"],({orientation:t})=>t==="vertical"?"50px":"auto",({orientation:t})=>t==="vertical"?"50px":"65px",({orientation:t})=>t==="vertical"?"50px":"65px",({orientation:t})=>t==="vertical"?"50px":"65px",b.purple.transparent2,({orientation:t})=>t==="vertical"?"calc(var(--brLight) - 3px)":"7px",({orientation:t})=>t==="vertical"?"12px":"0",({orientation:t})=>t==="vertical"?"12px":"0",({orientation:t})=>t==="vertical"?"0 0 30px rgba(0, 0, 0, 0.101)":"none"),z=s.div.withConfig({componentId:"sc-eyuv56-2"})(["min-height:60px;width:100%;padding:",";display:flex;gap:4px;flex-direction:column;justify-content:space-between;"],({orientation:t})=>t==="vertical"?"12px":"0"),B=s.div.withConfig({componentId:"sc-eyuv56-3"})(["font-weight:500;width:",";hyphens:auto;"],({orientation:t})=>t==="vertical"?"100%":"85%");s.div.withConfig({componentId:"sc-eyuv56-4"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:0.86rem;margin-bottom:6px;height:20px;opacity:0.8;p{text-align:left;}strong{font-weight:400;}img{display:none;}"]);const R=s(C).withConfig({componentId:"sc-eyuv56-5"})(["position:absolute;top:6px;right:-4px;"]),T=({alert:t})=>{const{content:e,time:i,date:o}=t;return r.jsxs(F,{children:[r.jsx(h,{fontSize:"0.9rem",children:r.jsx(x,{words:[g(o),i]})}),r.jsx(I,{width:"100%",margin:"12px 0"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:e}})]})},F=s.div.withConfig({componentId:"sc-16cu10k-0"})(["display:flex;flex-direction:column;gap:5px;max-width:600px;& > div{width:100%;p{margin-top:10px;width:100%;opacity:0.9;line-height:1.7rem;}a{text-decoration:underline;}strong{font-weight:600;}p:nth-child(1){margin:0;opacity:1;text-align:left !important;}span{font-size:1rem !important;}img{width:100% !important;height:auto !important;object-fit:cover;border-radius:var(--brLight);margin-bottom:20px;box-shadow:var(--block-content-shadow);}}"]),$=({news:t,orientation:e="vertical",isNew:i=!1})=>{const o=D(t.content),{open:n}=y(),l=()=>n(r.jsx(T,{alert:t}),t.title);return r.jsxs(L,{onClick:l,orientation:e,children:[r.jsx(M,{orientation:e,children:o?r.jsx("img",{src:o,alt:""}):r.jsx(v,{})}),r.jsxs(z,{orientation:e,children:[r.jsx(B,{orientation:e,children:e==="vertical"?j(t.title,38):t.title}),r.jsx(h,{children:r.jsx(x,{words:[g(t.date),t.time]})})]}),r.jsx(R,{visible:i,children:"New"})]})};export{$ as A,_ as a};
