var O=Object.defineProperty,T=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var j=(e,s,t)=>s in e?O(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,m=(e,s)=>{for(var t in s||(s={}))C.call(s,t)&&j(e,t,s[t]);if(h)for(var t of h(s))N.call(s,t)&&j(e,t,s[t]);return e},v=(e,s)=>T(e,S(s));import{j as o,r as g,i as f}from"./vendor-60fdf703.js";import{d as x,T as R,m as b,A as k,n as A,o as G,s as I,j as L,P as M,p as _,q as $,r as F}from"./index-cb5e8a53.js";import{s as V}from"./model-50664fc4.js";const E={GENERAL:"Основное",FINANCES_DOCS:"Кадровая среда",LEARNING_ACTIVITIES:"Учебная деятельность",OTHER:"Находится в разработке",COMMUNICATION:"Коммуникация",SCIENCE:"Научная деятельность"},P={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Научная деятельность":4,"Находится в разработке":5},w=(e,s,t)=>e?Object.values(e).filter(({getIsVisibleForCurrentUser:n,guidsAllowed:r})=>(!(n&&s)||n(s))&&r?r.includes(t||""):!0).reduce((n,r)=>{const l=r!=null&&r.group?E[r.group]:E.OTHER;return n[l]||(n[l]={}),n[l][r.id]=r,n},{}):{},y=({title:e,links:s,doNotShow:t,orientation:c,background:n,shadow:r=!0,mode:l})=>o.jsxs(x,{d:"column",children:[o.jsx(R,{size:4,align:"left",bottomGap:!0,children:e}),o.jsxs(x,{gap:"8px",$wrap:!0,children:[Object.values(s).map(a=>{var u;if((a==null?void 0:a.show)!==!1&&t!==(a==null?void 0:a.id))return o.jsx(b,v(m({background:n,orientation:c,mode:l,shadow:r},a),{color:(u=a.color)!==null&&u!==void 0&&u.length?a.color:"blue"}),a.id)}),t!=="all"&&o.jsx(k,{})]})]}),D=()=>{const{visibleRoutes:e,allRoutes:s}=A.useMenu(),[t,c]=g.useState(null),[n,r]=g.useState(""),l=f(V.peTeacher),a=f(G.userGuid),u=g.useMemo(()=>w(e,l,a),[e,l]),{data:{user:d}}=I.useUser();return e?o.jsx(L,{padding:"10px",children:o.jsxs(M,{children:[o.jsx(_,{placeholder:"Поиск разделов",whereToSearch:s!=null?s:{},searchEngine:$,setResult:c,setExternalValue:r,validationCheck:!0,loadingOnType:!0}),!t&&o.jsx(x,{d:"column",gap:"24px",children:n.length===0&&Object.keys(u).sort((i,p)=>P[i]-P[p]).map(i=>{const p=u[i];return o.jsx(y,{title:i==="Кадровая среда"&&(d==null?void 0:d.user_status)==="stud"?"Договоры и оплаты":i,doNotShow:"all",align:"left",links:p},i)})}),o.jsx(F,{pages:t})]})}):null};export{D as default};
