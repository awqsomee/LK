import{j as c,a5 as g,b9 as m,r as d}from"./vendor-3c67dcca.js";import{am as h,an as P,ao as _,a9 as x,ap as f,aq as E,J as M,N as R,ar as j}from"./index-838f6833.js";const U=(t,s)=>t.reduce((u,a)=>{const{id:n,title:o,content:i,visible:l}=a;return(l==="staff"&&s||l==="student"&&!s||l==="all")&&u.push({id:n,title:o,content:c.jsx(h,{blocks:i,isStaff:s,title:o})}),u},[]),O=()=>{var t;const{allRoutes:s}=P.useMenu(),{replace:u}=g(),a=(t=m(_))===null||t===void 0?void 0:t.params,{data:n}=x.useUser(),o=d.useMemo(()=>{var e;return(n==null||(e=n.user)===null||e===void 0?void 0:e.user_status)==="staff"},[n]),i=d.useMemo(()=>U(Object.values(f),o),[f,o]),l=d.useMemo(()=>{var e;return a!=null&&a.infoType&&(e=i.findIndex(({id:r})=>r===a.infoType))!==null&&e!==void 0?e:0},[]),v=d.useCallback(e=>{var r,p;e&&u(`${(r=s==null||(p=s["helpful-information"])===null||p===void 0?void 0:p.path)!==null&&r!==void 0?r:E}/${e}`)},[s]);return c.jsx(M,{padding:"10px",children:c.jsx(R,{children:c.jsx(j,{pages:i,currentPage:l,onChangePage:v,appearance:!1})})})};export{O as default};
