import{s as g,u as r,b9 as m,j as a}from"./vendor-a2a65e85.js";import{a9 as x,W as f,N as j,aZ as P,a_ as d,k as $,j as k}from"./index-6bf86a52.js";const _=g.div.withConfig({componentId:"sc-2phkr-0"})(["width:100%;display:flex;justify-content:center;height:calc(100vh - var(--header-height) - 20px);@media (max-width:1000px){height:calc(100vh - 125px);}"]),y=()=>{var o,i;const{$isPending:u,$items:c}=d,h=r(u),p=m(),t=r(c),{data:{user:s}}=x.useUser(),l=(o=(i=p.params.filter)!==null&&i!==void 0?i:s==null?void 0:s.group)!==null&&o!==void 0?o:"",v=e=>{var n;return(e==null?void 0:e.title)==="Все"||!(e!=null&&e.id)?null:`Группа: ${e==null?void 0:e.id} • Всего: ${(n=t==null?void 0:t.length)!==null&&n!==void 0?n:0}`};return a.jsx(f,{load:function(){},loading:h,error:null,data:t,children:a.jsx(_,{children:a.jsx(j,{children:a.jsx(P,{searchPlaceholder:"Поиск студентов",paginationList:d,filterRequest:$,filterPlaceholder:"Группа",defaultFilter:l,filter:(s==null?void 0:s.user_status)==="stud"?l:void 0,customMask:k.groupMask,underSearchText:v})})})})};export{y as default};
