import{s as p,u as o,bb as l,j as e}from"./vendor-48260ac4.js";import{ai as g,W as x,P as m,b7 as P,b8 as c,w as j,v}from"./index-9ba9ab5c.js";const k=p.div.withConfig({componentId:"sc-2phkr-0"})(["width:100%;display:flex;justify-content:center;height:calc(100vh - var(--header-height) - 20px);@media (max-width:1000px){height:calc(100vh - 125px);}"]),M=()=>{const{$isPending:r,$items:d}=c,i=o(r),h=l(),t=o(d),{data:{user:a}}=g.useUser(),n=h.params.filter??(a==null?void 0:a.group)??"",u=s=>(s==null?void 0:s.title)==="Все"||!(s!=null&&s.id)?null:`Группа: ${s==null?void 0:s.id} • Всего: ${(t==null?void 0:t.length)??0}`;return e.jsx(x,{load:function(){},loading:i,error:null,data:t,children:e.jsx(k,{children:e.jsx(m,{children:e.jsx(P,{searchPlaceholder:"Поиск студентов",paginationList:c,filterRequest:j,filterPlaceholder:"Группа",defaultFilter:n,filter:(a==null?void 0:a.user_status)==="stud"?n:void 0,customMask:v.groupMask,underSearchText:u})})})})};export{M as default};
