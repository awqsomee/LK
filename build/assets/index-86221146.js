import{s as g,u as l,b2 as m,j as o}from"./vendor-60fdf703.js";import{s as x,W as f,P,t as j,v as $,w as k}from"./index-aa7cb4ff.js";import{p as d}from"./index-1df69147.js";const w=g.div.withConfig({componentId:"sc-2phkr-0"})(["width:100%;display:flex;justify-content:center;height:calc(100vh - var(--header-height) - 20px);@media (max-width:1000px){height:calc(100vh - 125px);}"]),R=()=>{var i,a;const{$isPending:u,$items:c}=d,h=l(u),p=m(),t=l(c),{data:{user:s}}=x.useUser(),r=(i=(a=p.params.filter)!==null&&a!==void 0?a:s==null?void 0:s.group)!==null&&i!==void 0?i:"",v=e=>{var n;return(e==null?void 0:e.title)==="Все"||!(e!=null&&e.id)?null:`Группа: ${e==null?void 0:e.id} • Всего: ${(n=t==null?void 0:t.length)!==null&&n!==void 0?n:0}`};return o.jsx(f,{load:function(){},loading:h,error:null,data:t,children:o.jsx(w,{children:o.jsx(P,{children:o.jsx(j,{searchPlaceholder:"Поиск студентов",paginationList:d,filterRequest:$,filterPlaceholder:"Группа",defaultFilter:r,filter:(s==null?void 0:s.user_status)==="stud"?r:void 0,customMask:k.groupMask,underSearchText:v})})})})};export{R as default};
