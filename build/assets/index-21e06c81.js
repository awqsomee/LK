import{j as c,ax as g,b3 as m,r as d}from"./vendor-8a1e4858.js";import{y as P,s as h,d7 as f,d8 as x,k as _,P as E,$ as M,d9 as R}from"./index-54a7c16c.js";import{L as $}from"./links-list-66b771e3.js";const j=(n,s)=>n.reduce((u,a)=>{const{id:t,title:o,content:i,visible:l}=a;return(l==="staff"&&s||l==="student"&&!s||l==="all")&&u.push({id:t,title:o,content:c.jsx($,{blocks:i,isStaff:s,title:o})}),u},[]),O=()=>{var n;const{allRoutes:s}=P.useMenu(),{replace:u}=g(),a=(n=m(R))===null||n===void 0?void 0:n.params,{data:t}=h.useUser(),o=d.useMemo(()=>{var e;return(t==null||(e=t.user)===null||e===void 0?void 0:e.user_status)==="staff"},[t]),i=d.useMemo(()=>j(Object.values(f),o),[f,o]),l=d.useMemo(()=>{var e;return a!=null&&a.infoType&&(e=i.findIndex(({id:r})=>r===a.infoType))!==null&&e!==void 0?e:0},[]),v=d.useCallback(e=>{var r,p;e&&u(`${(r=s==null||(p=s["helpful-information"])===null||p===void 0?void 0:p.path)!==null&&r!==void 0?r:x}/${e}`)},[s]);return c.jsx(_,{padding:"10px",children:c.jsx(E,{children:c.jsx(M,{pages:i,currentPage:l,onChangePage:v,appearance:!1})})})};export{O as default};
