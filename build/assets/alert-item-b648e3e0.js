import{$ as p,g as h,aD as x,X as l,bA as c,l as d,H as g,L as m,bB as v,u as f,aF as u}from"./index-38206beb.js";import{s as n,j as i,bl as w}from"./vendor-48260ac4.js";import{i as b}from"./is-valid-url-08a91344.js";const y=async()=>(await p.get(`?getAlerts&token=${h()}`)).data,j=t=>t.reduce((e,o)=>{const r=new Date(o.date).getFullYear();return e[r]?e[r].push(o):e[r]=[o],e},{}),R=x({api:{get:y},prepareData:j}),I=({alert:t})=>{const{content:e,time:o,date:r}=t;return i.jsxs(k,{children:[i.jsx(l,{fontSize:"0.9rem",children:i.jsx(c,{words:[d(r),o]})}),i.jsx(g,{width:"100%",margin:"12px 0"}),i.jsx("div",{dangerouslySetInnerHTML:{__html:e}})]})},k=n.div.withConfig({componentId:"sc-1xqy1zp-0"})(["display:flex;flex-direction:column;gap:5px;max-width:600px;& > div{width:100%;p{margin-top:10px;width:100%;opacity:0.9;line-height:1.7rem;}a{text-decoration:underline;}strong{font-weight:600;}p:nth-child(1){margin:0;opacity:1;text-align:left !important;}span{font-size:1rem !important;}img{width:100% !important;height:auto !important;object-fit:cover;border-radius:var(--brLight);margin-bottom:20px;box-shadow:var(--block-content-shadow);}}"]),C=t=>{const e=t.indexOf('src="')+5;let o=0;if(e===-1)return null;for(let a=e;a<t.length;a++)if(t[a]==='"'){o=a;break}const r=t.slice(e,o);return b(r)?r:null},A=n.div.withConfig({componentId:"sc-eyuv56-0"})(["width:100%;border-radius:",";background:",";box-shadow:",";position:relative;display:flex;flex-direction:",";align-items:",";height:",";overflow:hidden;padding:",";cursor:pointer;&:hover{filter:brightness(0.98);}"],({orientation:t})=>t==="vertical"?"calc(var(--brLight) - 3px)":"8px",({orientation:t})=>"var(--block-content)",({orientation:t})=>t==="vertical"?"var(--block-shadow)":"0 0 1px #707070",({orientation:t})=>t==="vertical"?"column":"row-reverse",({orientation:t})=>t==="vertical"?"flex-start":"stretch",({orientation:t})=>t==="vertical"?"150px":"fit-content",({orientation:t})=>t==="vertical"?"0":"12px"),S=n.div.withConfig({componentId:"sc-eyuv56-1"})(["height:",";width:",";min-width:",";min-height:",";overflow:hidden;background:",";border-radius:",";display:flex;align-items:center;justify-content:center;margin-left:",";margin-top:",";box-shadow:",";svg{width:40%;height:40%;}img{height:100%;width:100%;object-fit:cover;}"],({orientation:t})=>t==="vertical"?"50px":"auto",({orientation:t})=>t==="vertical"?"50px":"65px",({orientation:t})=>t==="vertical"?"50px":"65px",({orientation:t})=>t==="vertical"?"50px":"65px",m.purple.transparent2,({orientation:t})=>t==="vertical"?"calc(var(--brLight) - 3px)":"7px",({orientation:t})=>t==="vertical"?"12px":"0",({orientation:t})=>t==="vertical"?"12px":"0",({orientation:t})=>t==="vertical"?"0 0 30px rgba(0, 0, 0, 0.101)":"none"),D=n.div.withConfig({componentId:"sc-eyuv56-2"})(["min-height:60px;width:100%;padding:",";display:flex;gap:4px;flex-direction:column;justify-content:space-between;"],({orientation:t})=>t==="vertical"?"12px":"0"),L=n.div.withConfig({componentId:"sc-eyuv56-3"})(["font-weight:500;width:",";hyphens:auto;"],({orientation:t})=>t==="vertical"?"100%":"85%");n.div.withConfig({componentId:"sc-eyuv56-4"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:0.86rem;margin-bottom:6px;height:20px;opacity:0.8;p{text-align:left;}strong{font-weight:400;}img{display:none;}"]);const z=n(v).withConfig({componentId:"sc-eyuv56-5"})(["position:absolute;top:6px;right:-4px;"]),T=({news:t,orientation:e="vertical",isNew:o=!1})=>{const r=C(t.content),{open:a}=f(),s=()=>a(i.jsx(I,{alert:t}),t.title);return i.jsxs(A,{onClick:s,orientation:e,children:[i.jsx(S,{orientation:e,children:r?i.jsx("img",{src:r,alt:""}):i.jsx(w,{})}),i.jsxs(D,{orientation:e,children:[i.jsx(L,{orientation:e,children:e==="vertical"?u(t.title,38):t.title}),i.jsx(l,{children:i.jsx(c,{words:[d(t.date),t.time]})})]}),i.jsx(z,{visible:o,children:"New"})]})};export{T as A,R as a};
