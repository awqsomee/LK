import{s as f,r as d,j as e,y as g}from"./vendor-3c67dcca.js";import{A as j,a as x}from"./alert-item-acbe2ff4.js";import{bh as h,T as v,D as w,E as b,a9 as A,aW as y,r as C,b0 as S,W as E,N as I,R as N}from"./index-c3cf5352.js";import"./is-valid-url-08a91344.js";const D=(t,n)=>Object.keys(n).reduce((s,l)=>{const o=n[l].filter(i=>h(i.title).includes(h(t)));return s[l],s[l]=o,s},{}),k=f.div.withConfig({componentId:"sc-n7iv4z-0"})(["width:100%;opacity:",";.top{cursor:pointer;display:flex;align-items:center;margin:10px 0;width:100%;justify-content:space-between;.title-wrapper{width:50px;}.left{display:flex;align-items:center;svg{transform:rotate(",");}}}.children{transition:0.2s;}.children.close{opacity:0;visibility:hidden;height:0;pointer-events:none;transform:translateY(-30px);}.children.open{opacity:1;visibility:visible;height:fit-content;pointer-events:all;transform:translateY(0px);}"],({noChildren:t})=>t?"0.5":"1",({collapsed:t})=>t?"0deg":"180deg"),F=({title:t,children:n,initiallyCollapsed:s,sideText:l,isCollapsed:o})=>{const[i,r]=d.useState(s!=null?s:!0),a=n==null,c=()=>r(p=>!p);return d.useEffect(()=>{o!==void 0&&r(a)},[o,n]),e.jsxs(k,{collapsed:i,noChildren:a,children:[e.jsxs("div",{className:"top",onClick:c,children:[e.jsxs("div",{className:"left",children:[e.jsx(v,{size:4,align:"left",children:t}),e.jsx(g,{})]}),e.jsx(w,{margin:"0 20px"}),e.jsx(b,{children:l})]}),e.jsx("div",{className:"children"+(i?" close":" open"),children:n})]})},T=f.div.withConfig({componentId:"sc-gyjwiw-0"})(["width:100%;display:flex;flex-direction:column;gap:12px;"]),z=({alerts:t,listView:n})=>{const{data:{user:s}}=A.useUser(),[l,o]=d.useState(null),i=l!=null?l:t;return e.jsxs(T,{children:[!n&&e.jsx(y,{placeholder:"Поиск новостей",whereToSearch:t,searchEngine:D,setResult:o,loadingOnType:!0,validationCheck:!0}),Object.keys(i).sort((r,a)=>Number.parseInt(a)-Number.parseInt(r)).map(r=>{const a=new Date().getFullYear().toString(),c=l===null?r!==a:!1,p=`Новостей: ${i[r].length}`;return e.jsx(F,{sideText:p,title:r,isCollapsed:c,initiallyCollapsed:c,children:e.jsx(C,{d:"column",gap:"8px",children:i[r].map((u,m)=>e.jsx(j,{isNew:r===a&&m===0&&(s==null?void 0:s.hasAlerts),news:u,orientation:"horizontal"},u.id))})},r)})]})},B=()=>{const{preparedData:t,error:n,loading:s}=x.selectors.useData();return d.useEffect(()=>{S.clearById({id:"alert",pageId:"alerts"})},[]),e.jsx(E,{load:x.effects.getFx,error:n,loading:s,data:t,children:e.jsx(I,{children:t?e.jsx(z,{alerts:t}):e.jsx(N,{text:"У вас нет оповещений"})})})};export{B as default};
