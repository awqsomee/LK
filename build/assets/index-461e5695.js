import{j as c,X as g,b3 as m,r as d}from"./vendor-33947725.js";import{aI as P,aJ as _,aK as h,ai as x,aL as f,aM as M,_ as E,P as R,ay as j}from"./index-5c2dce5e.js";const I=(n,s)=>n.reduce((u,a)=>{const{id:t,title:o,content:i,visible:l}=a;return(l==="staff"&&s||l==="student"&&!s||l==="all")&&u.push({id:t,title:o,content:c.jsx(P,{blocks:i,isStaff:s,title:o})}),u},[]),L=()=>{var n;const{allRoutes:s}=_.useMenu(),{replace:u}=g(),a=(n=m(h))===null||n===void 0?void 0:n.params,{data:t}=x.useUser(),o=d.useMemo(()=>{var e;return(t==null||(e=t.user)===null||e===void 0?void 0:e.user_status)==="staff"},[t]),i=d.useMemo(()=>I(Object.values(f),o),[f,o]),l=d.useMemo(()=>{var e;return a!=null&&a.infoType&&(e=i.findIndex(({id:r})=>r===a.infoType))!==null&&e!==void 0?e:0},[]),v=d.useCallback(e=>{var r,p;e&&u(`${(r=s==null||(p=s["helpful-information"])===null||p===void 0?void 0:p.path)!==null&&r!==void 0?r:M}/${e}`)},[s]);return c.jsx(E,{padding:"10px",children:c.jsx(R,{children:c.jsx(j,{pages:i,currentPage:l,onChangePage:v,appearance:!1})})})};export{L as default};
