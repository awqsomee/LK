import{r as o,j as e,Y as r,bu as l}from"./vendor-33947725.js";import{cS as c,d as x,_ as p,P as d,cT as g,q as t,cU as h,J as f,L as j,N as m,ax as u}from"./index-5c2dce5e.js";const C=()=>{const{notifications:a,clearAllError:s,clearAllLoading:i}=c.useLkNotifications(),n=()=>{m.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>u.clearAll()})};return o.useEffect(()=>{s&&x.evokePopUpMessage({type:"failure",message:s})},[s]),e.jsx(p,{padding:"10px",children:e.jsxs(d,{topRightCornerElement:e.jsx(r,{to:g,children:e.jsx(t,{icon:e.jsx(l,{}),height:"35px",width:"35px"})}),children:[e.jsx(h,{}),a.length>0?i?e.jsx(f,{jc:"center",children:e.jsx(j,{width:"40px",height:"40px"})}):e.jsx(t,{text:"Очистить все",onClick:n,width:"100%"}):null]})})};export{C as default};
