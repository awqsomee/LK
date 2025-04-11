var O=Object.defineProperty,T=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var j=(e,s,t)=>s in e?O(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,f=(e,s)=>{for(var t in s||(s={}))k.call(s,t)&&j(e,t,s[t]);if(h)for(var t of h(s))C.call(s,t)&&j(e,t,s[t]);return e},v=(e,s)=>T(e,S(s));import{j as o,r as g,i as E}from"./vendor-8a1e4858.js";import{f as x,T as N,x as R,A as b,y as A,q as G,s as I,k as L,P as M,z as _,E as $,H as y}from"./index-4256834b.js";import{s as F}from"./model-0e3845c4.js";const m={GENERAL:"Основное",FINANCES_DOCS:"Кадровая среда",LEARNING_ACTIVITIES:"Учебная деятельность",OTHER:"Находится в разработке",COMMUNICATION:"Коммуникация",SCIENCE:"Научная деятельность"},P={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Научная деятельность":4,"Находится в разработке":5},H=(e,s,t)=>e?Object.values(e).filter(({getIsVisibleForCurrentUser:n,guidsAllowed:a})=>(!(n&&s)||n(s))&&a?a.includes(t||""):!0).reduce((n,a)=>{const l=a!=null&&a.group?m[a.group]:m.OTHER;return n[l]||(n[l]={}),n[l][a.id]=a,n},{}):{},V=({title:e,links:s,doNotShow:t,orientation:c,background:n,shadow:a=!0,mode:l})=>o.jsxs(x,{d:"column",children:[o.jsx(N,{size:4,align:"left",bottomGap:!0,children:e}),o.jsxs(x,{gap:"8px",$wrap:!0,children:[Object.values(s).map(r=>{var u;if((r==null?void 0:r.show)!==!1&&t!==(r==null?void 0:r.id))return o.jsx(R,v(f({background:n,orientation:c,mode:l,shadow:a},r),{color:(u=r.color)!==null&&u!==void 0&&u.length?r.color:"blue"}),r.id)}),t!=="all"&&o.jsx(b,{})]})]}),D=()=>{const{visibleRoutes:e,allRoutes:s}=A.useMenu(),[t,c]=g.useState(null),[n,a]=g.useState(""),l=E(F.peTeacher),r=E(G.userGuid),u=g.useMemo(()=>H(e,l,r),[e,l]),{data:{user:d}}=I.useUser();return e?o.jsx(L,{padding:"10px",children:o.jsxs(M,{children:[o.jsx(_,{placeholder:"Поиск разделов",whereToSearch:s!=null?s:{},searchEngine:$,setResult:c,setExternalValue:a,validationCheck:!0,loadingOnType:!0}),!t&&o.jsx(x,{d:"column",gap:"24px",children:n.length===0&&Object.keys(u).sort((i,p)=>P[i]-P[p]).map(i=>{const p=u[i];return o.jsx(V,{title:i==="Кадровая среда"&&(d==null?void 0:d.user_status)==="stud"?"Договоры и оплаты":i,doNotShow:"all",align:"left",links:p},i)})}),o.jsx(y,{pages:t})]})}):null};export{D as default};
