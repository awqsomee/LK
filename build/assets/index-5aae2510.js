import{j as a,r as p,q as j}from"./vendor-48260ac4.js";import{bn as h,G as g,h as b,bj as f,bo as m,aI as P,ai as k,_ as O,P as E,bp as L,bq as R,br as S,Z as T}from"./index-d80b411e.js";const x={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Научная деятельность":4,"Находится в разработке":5},v=(r,o)=>r?Object.values(r).filter(({getIsVisibleForCurrentUser:e})=>e&&o?e(o):!0).reduce((e,t)=>{const n=t!=null&&t.group?h[t.group]:h.OTHER;return e[n]||(e[n]={}),e[n][t.id]=t,e},{}):{},G=({title:r,links:o,doNotShow:l,orientation:e,background:t,shadow:n=!0,mode:u})=>a.jsxs(g,{d:"column",children:[a.jsx(b,{size:4,align:"left",bottomGap:!0,children:r}),a.jsxs(g,{gap:"8px",$wrap:!0,children:[Object.values(o).map(s=>{if((s==null?void 0:s.show)!==!1&&l!==(s==null?void 0:s.id))return a.jsx(f,{background:t,orientation:e,mode:u,shadow:n,...s,color:s.color.length?s.color:"blue"},s.id)}),l!=="all"&&a.jsx(m,{})]})]}),y=()=>{const{visibleRoutes:r,allRoutes:o}=P.useMenu(),[l,e]=p.useState(null),[t,n]=p.useState(""),u=j(T.peTeacher),s=p.useMemo(()=>v(r,u),[r,u]),{data:{user:i}}=k.useUser();return r?a.jsx(O,{padding:"10px",children:a.jsxs(E,{children:[a.jsx(L,{placeholder:"Поиск разделов",whereToSearch:o??{},searchEngine:R,setResult:e,setExternalValue:n,validationCheck:!0,loadingOnType:!0}),!l&&a.jsx(g,{d:"column",gap:"24px",children:t.length===0&&Object.keys(s).sort((c,d)=>x[c]-x[d]).map(c=>{const d=s[c];return a.jsx(G,{title:c==="Кадровая среда"&&(i==null?void 0:i.user_status)==="stud"?"Договоры и оплаты":c,doNotShow:"all",align:"left",links:d},c)})}),a.jsx(S,{pages:l})]})}):null};export{y as default};
