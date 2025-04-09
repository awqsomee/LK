import{j as t,ax as f,i as h,r as p,cI as R,aH as S}from"./vendor-8a1e4858.js";import{da as P,g as w,bI as v,q as u,bD as x,f as j,w as I,b4 as y,db as A,P as m,r as E,B as k,$ as M,dc as O,dd as _}from"./index-54a7c16c.js";import{D as F}from"./test-database-message-b5394de4.js";import{A as L}from"./forbidden-1195d4c0.js";const C=()=>{var i;return[{title:"Дата",field:"createdAt",priority:"one",sort:!0,type:"date",align:"center",width:"120px"},{title:"Тип",field:"paymentIdentifier",priority:"one",width:"150px",showFull:!0,render:s=>s||"-"},{title:"Статус",field:"allowanceStatus",priority:"one",width:"165px",showFull:!0,catalogs:[...(i=Object.values(P).map((s,r)=>({id:r.toString(),title:s})))!==null&&i!==void 0?i:[]],render:s=>t.jsx(w,{type:s==="Completed"?"success":s==="Cancelled"?"failure":"alert",title:s||"—",align:"center",icon:null})},{title:"Комментарий",width:"160px",field:"commentary",priority:"two",render:s=>s||"-"},{title:"Файлы",field:"files",priority:"two",width:"100px",align:"center",showFull:!0,render:s=>s.application.length+s.other.length||"-"}]},g=()=>{const i=f(),[s,r,l,a]=h([v.allowances,u.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[o,d]=p.useState(()=>{const e=r&&r.find(c=>c.roles.includes("Approver"));return e?{id:e.employeeId,title:e.division}:null}),n=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(j,{gap:"16px",d:"column",children:[n.length>1&&t.jsx(j,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(I,{items:n,selected:o,setSelected:d})}),t.jsx(y,{loading:!s,columns:C(),data:o&&s?s[o.id].approverAllowances:null,maxOnPage:7,onRowClick:e=>{l("Approver"),a((o==null?void 0:o.id.toString())||""),i.push(A+`/${e.id}`)}})]}):null},b=()=>{const i=f(),[s,r,l,a]=h([v.allowances,u.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[o,d]=p.useState(()=>{const e=r&&r.find(c=>c.roles.includes("Initiator"));return e?{id:e.employeeId,title:e.division}:null}),n=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(j,{gap:"16px",d:"column",children:[n.length>1&&t.jsx(j,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(I,{items:r.filter(e=>e.roles.includes("Initiator")).map(e=>({id:e.employeeId,title:e.division})),selected:o,setSelected:d})}),t.jsx(y,{loading:!s,columns:C(),data:o&&s?s[o.id].initiatorAllowances:null,maxOnPage:7,onRowClick:e=>{l("Initiator"),a((o==null?void 0:o.id.toString())||""),i.push(A+`/${e.id}`)}})]}):null},T=()=>{const i=f(),{role:s}=R(),r=c=>{i.push(O+`/${c}`)},[l,a,o,d]=h([x.pageMounted,u.rolesPending,u.roles,u.jobRoles]),n=()=>{i.push(_)},e=o.includes("Initiator")||o.includes("Approver");return p.useEffect(()=>{e&&l()},[e]),a?t.jsx(m,{children:t.jsx(j,{w:"100%",jc:"center",ai:"center",children:t.jsx(E,{})})}):e?t.jsxs(m,{topRightCornerElement:o.includes("Initiator")&&t.jsx(k,{onClick:n,text:"Подать служебную записку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(S,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(w,{type:"info",children:t.jsxs("p",{children:["Инструкция для инициаторов доступна"," ",t.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Ustanovlenie_nadbavok_(dlya_initsiatorov).pdf",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})}),t.jsx(F,{}),o.length>1?t.jsx(M,{pages:[{id:"approver",title:"Согласование надбавок",content:t.jsx(g,{})},{id:"initiator",title:"Установление надбавок",content:t.jsx(b,{})}],currentPage:s==="initiator"?1:0,onChangePage:r,appearance:!1}):o[0]==="Initiator"?t.jsx(b,{}):t.jsx(g,{})]}):t.jsx(L,{jobRoles:d})};export{T as default};
