import{j as u,a5 as g,bb as P,r as i}from"./vendor-48260ac4.js";import{az as m,aA as x,aB as h,ai as E,aC as f,aD as j,_ as M,P as U,ap as _}from"./index-19840145.js";const b=(a,n)=>a.reduce((e,t)=>{const{id:c,title:o,content:l,visible:r}=t;return(r==="staff"&&n||r==="student"&&!n||r==="all")&&e.push({id:c,title:o,content:u.jsx(m,{blocks:l,isStaff:n,title:o})}),e},[]),C=()=>{var p;const{allRoutes:a}=x.useMenu(),{replace:n}=g(),e=(p=P(h))==null?void 0:p.params,{data:t}=E.useUser(),c=i.useMemo(()=>{var s;return((s=t==null?void 0:t.user)==null?void 0:s.user_status)==="staff"},[t]),o=i.useMemo(()=>b(Object.values(f),c),[f,c]),l=i.useMemo(()=>e!=null&&e.infoType?o.findIndex(({id:s})=>s===e.infoType)??0:0,[]),r=i.useCallback(s=>{var d;s&&n(`${((d=a==null?void 0:a["helpful-information"])==null?void 0:d.path)??j}/${s}`)},[a]);return u.jsx(M,{padding:"10px",children:u.jsx(U,{children:u.jsx(_,{pages:o,currentPage:l,onChangePage:r,appearance:!1})})})};export{C as default};
