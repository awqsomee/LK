import{r as n,j as e,aa as r,bq as l}from"./vendor-48260ac4.js";import{cL as c,d as x,_ as p,P as d,cM as g,q as t,cN as h,G as f,V as j,Y as m,ao as k}from"./index-38206beb.js";const C=()=>{const{notifications:a,clearAllError:s,clearAllLoading:i}=c.useLkNotifications(),o=()=>{m.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>k.clearAll()})};return n.useEffect(()=>{s&&x.evokePopUpMessage({type:"failure",message:s})},[s]),e.jsx(p,{padding:"10px",children:e.jsxs(d,{topRightCornerElement:e.jsx(r,{to:g,children:e.jsx(t,{icon:e.jsx(l,{}),height:"35px",width:"35px"})}),children:[e.jsx(h,{}),a.length>0?i?e.jsx(f,{jc:"center",children:e.jsx(j,{width:"40px",height:"40px"})}):e.jsx(t,{text:"Очистить все",onClick:o,width:"100%"}):null]})})};export{C as default};
