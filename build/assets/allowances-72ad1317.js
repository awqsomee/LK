import{j as t,X as f,q as h,r as p,cM as C,_ as R}from"./vendor-33947725.js";import{aO as S,M as v,av as n,ao as x,J as j,x as w,r as y,aP as A,P as m,L as P,q as M,ay as E,aQ as O,aR as _}from"./index-03c4ccbf.js";import{D as k}from"./dev-mode-message-6d3e12f4.js";import{A as L}from"./forbidden-983c4601.js";const I=()=>{var i;return[{title:"Дата",field:"createdAt",priority:"one",sort:!0,type:"date",align:"center",width:"120px"},{title:"Тип",field:"paymentIdentifier",priority:"one",width:"150px",showFull:!0,render:o=>o||"-"},{title:"Статус",field:"allowanceStatus",priority:"one",width:"165px",showFull:!0,catalogs:[...(i=Object.values(S).map((o,r)=>({id:r.toString(),title:o})))!==null&&i!==void 0?i:[]],render:o=>t.jsx(v,{type:o==="Completed"?"success":o==="Cancelled"?"failure":"alert",title:o||"—",align:"center",icon:null})},{title:"Комментарий",width:"160px",field:"commentary",priority:"two",render:o=>o||"-"},{title:"Файлы",field:"files",priority:"two",width:"100px",align:"center",showFull:!0,render:o=>o.application.length+o.other.length||"-"}]},g=()=>{const i=f(),[o,r,a,d]=h([n.allowances,n.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[s,c]=p.useState(()=>{const e=r&&r.find(u=>u.roles.includes("Approver"));return e?{id:e.employeeId,title:e.division}:null}),l=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(j,{gap:"16px",d:"column",children:[l.length>1&&t.jsx(j,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(w,{items:l,selected:s,setSelected:c})}),t.jsx(y,{loading:!o,columns:I(),data:s&&o?o[s.id].approverAllowances:null,maxOnPage:7,onRowClick:e=>{a("Approver"),d((s==null?void 0:s.id.toString())||""),i.push(A+`/${e.id}`)}})]}):null},b=()=>{const i=f(),[o,r,a,d]=h([n.allowances,n.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[s,c]=p.useState(()=>{const e=r&&r.find(u=>u.roles.includes("Initiator"));return e?{id:e.employeeId,title:e.division}:null}),l=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(j,{gap:"16px",d:"column",children:[l.length>1&&t.jsx(j,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(w,{items:r.filter(e=>e.roles.includes("Initiator")).map(e=>({id:e.employeeId,title:e.division})),selected:s,setSelected:c})}),t.jsx(y,{loading:!o,columns:I(),data:s&&o?o[s.id].initiatorAllowances:null,maxOnPage:7,onRowClick:e=>{a("Initiator"),d((s==null?void 0:s.id.toString())||""),i.push(A+`/${e.id}`)}})]}):null},T=()=>{const i=f(),{role:o}=C(),r=u=>{i.push(O+`/${u}`)},[a,d,s,c]=h([x.pageMounted,n.rolesPending,n.roles,n.jobRoles]),l=()=>{i.push(_)},e=s.includes("Initiator")||s.includes("Approver");return p.useEffect(()=>{e&&a()},[e]),d?t.jsx(m,{children:t.jsx(j,{w:"100%",jc:"center",ai:"center",children:t.jsx(P,{})})}):e?t.jsxs(m,{topRightCornerElement:s.includes("Initiator")&&t.jsx(M,{onClick:l,text:"Подать служебную записку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(R,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(v,{type:"info",children:t.jsxs("p",{children:["Инструкция для инициаторов доступна"," ",t.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Ustanovlenie_nadbavok_(dlya_initsiatorov).pdf",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})}),t.jsx(k,{}),s.length>1?t.jsx(E,{pages:[{id:"approver",title:"Согласование надбавок",content:t.jsx(g,{})},{id:"initiator",title:"Установление надбавок",content:t.jsx(b,{})}],currentPage:o==="initiator"?1:0,onChangePage:r,appearance:!1}):s[0]==="Initiator"?t.jsx(b,{}):t.jsx(g,{})]}):t.jsx(L,{jobRoles:c})};export{T as default};
