import{j as t,a5 as f,n as h,r as p,cM as C,M as R}from"./vendor-a2a65e85.js";import{as as S,M as w,at as i,au as x,r as j,m as v,h as y,av as A,N as m,L as M,B as E,ar as P,aw as k,ax as L}from"./index-6bf86a52.js";import{D as O}from"./dev-mode-message-5f2e8c5b.js";import{A as _}from"./forbidden-23580ac1.js";const I=()=>{var n;return[{title:"Дата",field:"createdAt",priority:"one",sort:!0,type:"date",align:"center",width:"120px"},{title:"Тип",field:"paymentIdentifier",priority:"one",width:"150px",showFull:!0,render:o=>o||"-"},{title:"Статус",field:"allowanceStatus",priority:"one",width:"165px",showFull:!0,catalogs:[...(n=Object.values(S).map((o,r)=>({id:r.toString(),title:o})))!==null&&n!==void 0?n:[]],render:o=>t.jsx(w,{type:o==="Completed"?"success":o==="Cancelled"?"failure":"alert",title:o||"—",align:"center",icon:null})},{title:"Комментарий",width:"160px",field:"commentary",priority:"two",render:o=>o||"-"},{title:"Файлы",field:"files",priority:"two",width:"100px",align:"center",showFull:!0,render:o=>o.application.length+o.other.length||"-"}]},g=()=>{const n=f(),[o,r,a,d]=h([i.allowances,i.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[s,c]=p.useState(()=>{const e=r&&r.find(u=>u.roles.includes("Initiator"));return e?{id:e.employeeId,title:e.division}:null}),l=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(j,{gap:"16px",d:"column",children:[l.length>1&&t.jsx(j,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(v,{items:r.filter(e=>e.roles.includes("Initiator")).map(e=>({id:e.employeeId,title:e.division})),selected:s,setSelected:c})}),t.jsx(y,{loading:!o,columns:I(),data:s&&o?o[s.id].initiatorAllowances:null,maxOnPage:7,onRowClick:e=>{a("Initiator"),d((s==null?void 0:s.id.toString())||""),n.push(A+`/${e.id}`)}})]}):null},b=()=>{const n=f(),[o,r,a,d]=h([i.allowances,i.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[s,c]=p.useState(()=>{const e=r&&r.find(u=>u.roles.includes("Approver"));return e?{id:e.employeeId,title:e.division}:null}),l=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(j,{gap:"16px",d:"column",children:[l.length>1&&t.jsx(j,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(v,{items:l,selected:s,setSelected:c})}),t.jsx(y,{loading:!o,columns:I(),data:s&&o?o[s.id].approverAllowances:null,maxOnPage:7,onRowClick:e=>{a("Approver"),d((s==null?void 0:s.id.toString())||""),n.push(A+`/${e.id}`)}})]}):null},B=()=>{const n=f(),{role:o}=C(),r=u=>{n.push(k+`/${u}`)},[a,d,s,c]=h([x.pageMounted,i.rolesPending,i.roles,i.jobRoles]),l=()=>{n.push(L)},e=s.includes("Initiator")||s.includes("Approver");return p.useEffect(()=>{e&&a()},[e]),d?t.jsx(m,{children:t.jsx(j,{w:"100%",jc:"center",ai:"center",children:t.jsx(M,{})})}):e?t.jsxs(m,{topRightCornerElement:s.includes("Initiator")&&t.jsx(E,{onClick:l,text:"Подать служебную записку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(R,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(w,{type:"info",children:t.jsxs("p",{children:["Инструкция для инициаторов доступна"," ",t.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Ustanovlenie_nadbavok_(dlya_initsiatorov).pdf",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})}),t.jsx(O,{}),s.length>1?t.jsx(P,{pages:[{id:"approver",title:"Согласование надбавок",content:t.jsx(b,{})},{id:"initiator",title:"Установление надбавок",content:t.jsx(g,{})}],currentPage:o==="initiator"?1:0,onChangePage:r,appearance:!1}):s[0]==="Initiator"?t.jsx(g,{}):t.jsx(b,{})]}):t.jsx(_,{jobRoles:c})};export{B as default};
