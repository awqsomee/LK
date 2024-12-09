import{j as t,a5 as h,q as j,r as p,cM as v,M as R}from"./vendor-48260ac4.js";import{aO as S,M as y,ax as i,aq as x,G as f,x as A,r as b,aP as I,P as m,V as M,q as P,ay as E,aQ as k,aR as O}from"./index-5c833ef5.js";import{D as F}from"./dev-mode-message-a467b5b3.js";import{A as L}from"./forbidden-80325786.js";const C=()=>[{title:"Дата",field:"createdAt",priority:"one",sort:!0,type:"date",align:"center",width:"120px"},{title:"Тип",field:"paymentIdentifier",priority:"one",width:"150px",showFull:!0,render:s=>s||"-"},{title:"Статус",field:"allowanceStatus",priority:"one",width:"165px",showFull:!0,catalogs:[...Object.values(S).map((s,n)=>({id:n.toString(),title:s}))??[]],render:s=>t.jsx(y,{type:s==="Completed"?"success":s==="Cancelled"?"failure":"alert",title:s||"—",align:"center",icon:null})},{title:"Комментарий",width:"160px",field:"commentary",priority:"two",render:s=>s||"-"},{title:"Файлы",field:"files",priority:"two",width:"100px",align:"center",showFull:!0,render:s=>s.application.length+s.other.length||"-"}],g=()=>{const s=h(),[n,r,a,d]=j([i.allowances,i.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[o,c]=p.useState(()=>{const e=r&&r.find(u=>u.roles.includes("Initiator"));return e?{id:e.employeeId,title:e.division}:null}),l=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(f,{gap:"16px",d:"column",children:[l.length>1&&t.jsx(f,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(A,{items:r.filter(e=>e.roles.includes("Initiator")).map(e=>({id:e.employeeId,title:e.division})),selected:o,setSelected:c})}),t.jsx(b,{loading:!n,columns:C(),data:o&&n?n[o.id].initiatorAllowances:null,maxOnPage:7,onRowClick:e=>{a("Initiator"),d((o==null?void 0:o.id.toString())||""),s.push(I+`/${e.id}`)}})]}):null},w=()=>{const s=h(),[n,r,a,d]=j([i.allowances,i.jobRoles,x.setCurrentRole,x.setCurrentJobId]),[o,c]=p.useState(()=>{const e=r&&r.find(u=>u.roles.includes("Approver"));return e?{id:e.employeeId,title:e.division}:null}),l=p.useMemo(()=>r?r.filter(e=>e.roles.includes("Approver")).map(e=>({id:e.employeeId,title:e.division})):[],[r]);return r?t.jsxs(f,{gap:"16px",d:"column",children:[l.length>1&&t.jsx(f,{d:"column",jc:"flex-start",ai:"flex-start",children:t.jsx(A,{items:l,selected:o,setSelected:c})}),t.jsx(b,{loading:!n,columns:C(),data:o&&n?n[o.id].approverAllowances:null,maxOnPage:7,onRowClick:e=>{a("Approver"),d((o==null?void 0:o.id.toString())||""),s.push(I+`/${e.id}`)}})]}):null},W=()=>{const s=h(),{role:n}=v(),r=u=>{s.push(k+`/${u}`)},[a,d,o,c]=j([x.pageMounted,i.rolesPending,i.roles,i.jobRoles]),l=()=>{s.push(O)},e=o.includes("Initiator")||o.includes("Approver");return p.useEffect(()=>{e&&a()},[e]),d?t.jsx(m,{children:t.jsx(f,{w:"100%",jc:"center",ai:"center",children:t.jsx(M,{})})}):e?t.jsxs(m,{topRightCornerElement:o.includes("Initiator")&&t.jsx(P,{onClick:l,text:"Подать служебную записку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(R,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(y,{type:"info",children:t.jsxs("p",{children:["Инструкция для инициаторов доступна"," ",t.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Ustanovlenie_nadbavok_(dlya_initsiatorov).pdf",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})}),t.jsx(F,{}),o.length>1?t.jsx(E,{pages:[{id:"approver",title:"Согласование надбавок",content:t.jsx(w,{})},{id:"initiator",title:"Установление надбавок",content:t.jsx(g,{})}],currentPage:n==="initiator"?1:0,onChangePage:r,appearance:!1}):o[0]==="Initiator"?t.jsx(g,{}):t.jsx(w,{})]}):t.jsx(L,{jobRoles:c})};export{W as default};
