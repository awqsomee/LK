import{r as o,j as e,az as r,T as l}from"./vendor-8a1e4858.js";import{b1 as c,p as x,k as p,P as f,b2 as g,B as t,b3 as h,f as d,r as j,aL as m,a3 as k}from"./index-4256834b.js";const C=()=>{const{notifications:a,clearAllError:s,clearAllLoading:i}=c.useLkNotifications(),n=()=>{m.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>k.clearAll()})};return o.useEffect(()=>{s&&x.evokePopUpMessage({type:"failure",message:s})},[s]),e.jsx(p,{padding:"10px",children:e.jsxs(f,{topRightCornerElement:e.jsx(r,{to:g,children:e.jsx(t,{icon:e.jsx(l,{}),height:"35px",width:"35px"})}),children:[e.jsx(h,{}),a.length>0?i?e.jsx(d,{jc:"center",children:e.jsx(j,{width:"40px",height:"40px"})}):e.jsx(t,{text:"Очистить все",onClick:n,width:"100%"}):null]})})};export{C as default};
