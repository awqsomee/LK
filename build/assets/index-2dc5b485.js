var k=Object.defineProperty,O=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(e,s,t)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,b=(e,s)=>{for(var t in s||(s={}))G.call(s,t)&&j(e,t,s[t]);if(h)for(var t of h(s))L.call(s,t)&&j(e,t,s[t]);return e},v=(e,s)=>O(e,E(s));import{j as l,r as p,q as f}from"./vendor-33947725.js";import{bt as m,J as x,h as R,bi as S,bu as T,aJ as w,ai as $,_ as y,P as F,bv as J,bw as M,bx as V,Z as _,b as q}from"./index-1e8fb889.js";const P={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Научная деятельность":4,"Находится в разработке":5},z=(e,s,t)=>e?Object.values(e).filter(({getIsVisibleForCurrentUser:n,guidsAllowed:a})=>(!(n&&s)||n(s))&&a?a.includes(t||""):!0).reduce((n,a)=>{const o=a!=null&&a.group?m[a.group]:m.OTHER;return n[o]||(n[o]={}),n[o][a.id]=a,n},{}):{},A=({title:e,links:s,doNotShow:t,orientation:i,background:n,shadow:a=!0,mode:o})=>l.jsxs(x,{d:"column",children:[l.jsx(R,{size:4,align:"left",bottomGap:!0,children:e}),l.jsxs(x,{gap:"8px",$wrap:!0,children:[Object.values(s).map(r=>{if((r==null?void 0:r.show)!==!1&&t!==(r==null?void 0:r.id))return l.jsx(S,v(b({background:n,orientation:i,mode:o,shadow:a},r),{color:r.color.length?r.color:"blue"}),r.id)}),t!=="all"&&l.jsx(T,{})]})]}),Z=()=>{const{visibleRoutes:e,allRoutes:s}=w.useMenu(),[t,i]=p.useState(null),[n,a]=p.useState(""),o=f(_.peTeacher),r=f(q.userGuid),g=p.useMemo(()=>z(e,o,r),[e,o]),{data:{user:c}}=$.useUser();return e?l.jsx(y,{padding:"10px",children:l.jsxs(F,{children:[l.jsx(J,{placeholder:"Поиск разделов",whereToSearch:s!=null?s:{},searchEngine:M,setResult:i,setExternalValue:a,validationCheck:!0,loadingOnType:!0}),!t&&l.jsx(x,{d:"column",gap:"24px",children:n.length===0&&Object.keys(g).sort((u,d)=>P[u]-P[d]).map(u=>{const d=g[u];return l.jsx(A,{title:u==="Кадровая среда"&&(c==null?void 0:c.user_status)==="stud"?"Договоры и оплаты":u,doNotShow:"all",align:"left",links:d},u)})}),l.jsx(V,{pages:t})]})}):null};export{Z as default};
