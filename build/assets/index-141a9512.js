import{j as i,a5 as f,bb as P,r as u}from"./vendor-9c916fad.js";import{az as m,aA as x,aB as h,ag as E,aC as d,aD as j,_ as M,P as U,ap as _}from"./index-dc58d1cc.js";const b=(a,n)=>a.reduce((e,t)=>{const{id:c,title:o,content:l,visible:r}=t;return(r==="staff"&&n||r==="student"&&!n||r==="all")&&e.push({id:c,title:o,content:i.jsx(m,{blocks:l,isStaff:n,title:o})}),e},[]),C=()=>{var p;const{allRoutes:a}=x.useMenu(),{replace:n}=f(),e=(p=P(h))==null?void 0:p.params,{data:t}=E.useUser(),c=u.useMemo(()=>{var s;return((s=t==null?void 0:t.user)==null?void 0:s.user_status)==="staff"},[t]),o=u.useMemo(()=>b(Object.values(d),c),[d,c]),l=u.useMemo(()=>e!=null&&e.infoType?o.findIndex(({id:s})=>s===e.infoType)??0:0,[]),r=u.useCallback(s=>{var g;s&&n(`${((g=a==null?void 0:a["helpful-information"])==null?void 0:g.path)??j}/${s}`)},[a]);return i.jsx(M,{padding:"10px",children:i.jsx(U,{children:i.jsx(_,{pages:o,currentPage:l,onChangePage:r,appearance:!1})})})};export{C as default};
