import{j as c,aw as g,b2 as m,r as d}from"./vendor-60fdf703.js";import{n as P,s as h,d7 as f,d8 as _,j as x,P as j,Q as E,d9 as M}from"./index-ea554b7a.js";import{L as R}from"./links-list-a70ab0e0.js";const U=(n,s)=>n.reduce((u,a)=>{const{id:t,title:o,content:i,visible:l}=a;return(l==="staff"&&s||l==="student"&&!s||l==="all")&&u.push({id:t,title:o,content:c.jsx(R,{blocks:i,isStaff:s,title:o})}),u},[]),O=()=>{var n;const{allRoutes:s}=P.useMenu(),{replace:u}=g(),a=(n=m(M))===null||n===void 0?void 0:n.params,{data:t}=h.useUser(),o=d.useMemo(()=>{var e;return(t==null||(e=t.user)===null||e===void 0?void 0:e.user_status)==="staff"},[t]),i=d.useMemo(()=>U(Object.values(f),o),[f,o]),l=d.useMemo(()=>{var e;return a!=null&&a.infoType&&(e=i.findIndex(({id:r})=>r===a.infoType))!==null&&e!==void 0?e:0},[]),v=d.useCallback(e=>{var r,p;e&&u(`${(r=s==null||(p=s["helpful-information"])===null||p===void 0?void 0:p.path)!==null&&r!==void 0?r:_}/${e}`)},[s]);return c.jsx(x,{padding:"10px",children:c.jsx(j,{children:c.jsx(E,{pages:i,currentPage:l,onChangePage:v,appearance:!1})})})};export{O as default};
