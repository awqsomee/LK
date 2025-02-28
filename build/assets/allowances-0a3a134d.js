import{j as t,aw as f,i as h,r as p,cF as R,aG as S}from"./vendor-60fdf703.js";import{da as P,f as w,bI as v,o as u,bD as x,d as j,b3 as y,b5 as A,db as I,P as m,aZ as E,B as k,Q as F,dc as M,dd as O}from"./index-aa7cb4ff.js";import{D as _}from"./test-database-message-a6d6b14a.js";import{A as L}from"./forbidden-98f601ca.js";const C=()=>{var i;return[{title:"Дата",field:"createdAt",priority:"one",sort:!0,type:"date",align:"center",width:"120px"},{title:"Тип",field:"paymentIdentifier",priority:"one",width:"150px",showFull:!0,render:o=>o||"-"},{title:"Статус",field:"allowanceStatus",priority:"one",width:"165px",showFull:!0,catalogs:[...(i=Object.values(P).map((o,r)=>({id:r.toString(),title:o})))!==null&&i!==void 0?i:[]],render:o=>t.jsx(w,{type:o==="Completed"?"success":o==="Cancelled"?"failure":"alert",title:o||"—",align:"center",icon:null})},{title:"Комментарий",width:"160px",field:"commentary",priority:"two",render:o=>o||"-"},{title:"Файлы",field:"files",priority:"two",width:"100px",align:"center",showFull:!0,render:o=>o.application.length+o.other.length||"-"}]},g=()=>{const i=f(),[o,r,l,a]=h([v.allowances,u.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[s,d]=p.useState(()=>{const e=r&&r.find(c=>c.roles.includes("Approver"));return e?{id:e.employeeId,title:e.division}:null}),n=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(j,{gap:"16px",d:"column",children:[n.length>1&&t.jsx(j,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(y,{items:n,selected:s,setSelected:d})}),t.jsx(A,{loading:!o,columns:C(),data:s&&o?o[s.id].approverAllowances:null,maxOnPage:7,onRowClick:e=>{l("Approver"),a((s==null?void 0:s.id.toString())||""),i.push(I+`/${e.id}`)}})]}):null},b=()=>{const i=f(),[o,r,l,a]=h([v.allowances,u.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[s,d]=p.useState(()=>{const e=r&&r.find(c=>c.roles.includes("Initiator"));return e?{id:e.employeeId,title:e.division}:null}),n=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(j,{gap:"16px",d:"column",children:[n.length>1&&t.jsx(j,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(y,{items:r.filter(e=>e.roles.includes("Initiator")).map(e=>({id:e.employeeId,title:e.division})),selected:s,setSelected:d})}),t.jsx(A,{loading:!o,columns:C(),data:s&&o?o[s.id].initiatorAllowances:null,maxOnPage:7,onRowClick:e=>{l("Initiator"),a((s==null?void 0:s.id.toString())||""),i.push(I+`/${e.id}`)}})]}):null},T=()=>{const i=f(),{role:o}=R(),r=c=>{i.push(M+`/${c}`)},[l,a,s,d]=h([x.pageMounted,u.rolesPending,u.roles,u.jobRoles]),n=()=>{i.push(O)},e=s.includes("Initiator")||s.includes("Approver");return p.useEffect(()=>{e&&l()},[e]),a?t.jsx(m,{children:t.jsx(j,{w:"100%",jc:"center",ai:"center",children:t.jsx(E,{})})}):e?t.jsxs(m,{topRightCornerElement:s.includes("Initiator")&&t.jsx(k,{onClick:n,text:"Подать служебную записку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(S,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(w,{type:"info",children:t.jsxs("p",{children:["Инструкция для инициаторов доступна"," ",t.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Ustanovlenie_nadbavok_(dlya_initsiatorov).pdf",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})}),t.jsx(_,{}),s.length>1?t.jsx(F,{pages:[{id:"approver",title:"Согласование надбавок",content:t.jsx(g,{})},{id:"initiator",title:"Установление надбавок",content:t.jsx(b,{})}],currentPage:o==="initiator"?1:0,onChangePage:r,appearance:!1}):s[0]==="Initiator"?t.jsx(b,{}):t.jsx(g,{})]}):t.jsx(L,{jobRoles:d})};export{T as default};
