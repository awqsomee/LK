import{r as o,j as e,ay as r,T as l}from"./vendor-60fdf703.js";import{aW as c,aQ as x,j as p,P as d,aX as g,B as t,aY as h,d as f,aZ as j,aD as m,X as k}from"./index-cb5e8a53.js";const L=()=>{const{notifications:a,clearAllError:s,clearAllLoading:i}=c.useLkNotifications(),n=()=>{m.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>k.clearAll()})};return o.useEffect(()=>{s&&x.evokePopUpMessage({type:"failure",message:s})},[s]),e.jsx(p,{padding:"10px",children:e.jsxs(d,{topRightCornerElement:e.jsx(r,{to:g,children:e.jsx(t,{icon:e.jsx(l,{}),height:"35px",width:"35px"})}),children:[e.jsx(h,{}),a.length>0?i?e.jsx(f,{jc:"center",children:e.jsx(j,{width:"40px",height:"40px"})}):e.jsx(t,{text:"Очистить все",onClick:n,width:"100%"}):null]})})};export{L as default};
