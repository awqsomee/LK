import{s as g,u as r,b3 as m,j as o}from"./vendor-33947725.js";import{ai as x,W as f,P,bz as j,bA as d,w as $,v as k}from"./index-03c4ccbf.js";const w=g.div.withConfig({componentId:"sc-2phkr-0"})(["width:100%;display:flex;justify-content:center;height:calc(100vh - var(--header-height) - 20px);@media (max-width:1000px){height:calc(100vh - 125px);}"]),b=()=>{var a,i;const{$isPending:u,$items:c}=d,h=r(u),v=m(),t=r(c),{data:{user:s}}=x.useUser(),l=(a=(i=v.params.filter)!==null&&i!==void 0?i:s==null?void 0:s.group)!==null&&a!==void 0?a:"",p=e=>{var n;return(e==null?void 0:e.title)==="Все"||!(e!=null&&e.id)?null:`Группа: ${e==null?void 0:e.id} • Всего: ${(n=t==null?void 0:t.length)!==null&&n!==void 0?n:0}`};return o.jsx(f,{load:function(){},loading:h,error:null,data:t,children:o.jsx(w,{children:o.jsx(P,{children:o.jsx(j,{searchPlaceholder:"Поиск студентов",paginationList:d,filterRequest:$,filterPlaceholder:"Группа",defaultFilter:l,filter:(s==null?void 0:s.user_status)==="stud"?l:void 0,customMask:k.groupMask,underSearchText:p})})})})};export{b as default};
