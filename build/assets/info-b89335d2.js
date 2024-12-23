import{s as R,q as B,j as n,r as L,Q as T,T as W,cM as V}from"./vendor-48260ac4.js";import{aq as v,h as A,X as d,l as b,M as g,au as S,G as c,at as $,q as F,aU as q,aV as J,aW as O,d as X,V as E,aX as _,ax as u,P as D,aY as G,ay as M,H as U}from"./index-7f995b81.js";import{D as H}from"./dev-mode-message-e41bbeeb.js";import{A as Q,F as Y}from"./forbidden-b899db34.js";const I=e=>e==="Approved"?"success":e==="Declined"||e==="Expired"?"failure":e==="Unknown"?"hint":"alert",C=({employee:e,role:r,userId:t,id:i})=>{var x,j,l;const[p,a]=B([v.approve,v.reject]),s=(e==null?void 0:e.approvalStatus)||((x=e==null?void 0:e.employeeVerdicts)!=null&&x.every(o=>o.approvalStatus==="Approved")&&e.zkguApprovalStatus==="Approved"&&e.selfApprovalStatus==="Approved"&&e.orderStatus==="Ready"?"Approved":(j=e==null?void 0:e.employeeVerdicts)!=null&&j.some(o=>o.approvalStatus==="Declined")||e.zkguApprovalStatus==="Declined"||e.selfApprovalStatus==="Declined"?"Declined":"InProgress");return n.jsxs(K,{children:[n.jsx(A,{align:"left",size:4,children:e.initials}),n.jsxs(A,{align:"left",size:5,children:[e.divisionName,", ",e.position]}),e.paymentIdentifier&&n.jsx(d,{children:e.paymentIdentifier.name}),n.jsxs(d,{children:["Сумма: ",e.sum," руб."]}),n.jsxs(d,{children:["Период: ",b(e.startDate)," - ",b(e.endDate)]}),n.jsx(g,{type:s==="Approved"?"success":s==="Declined"?"failure":"alert",title:S[s]||"—",align:"left",icon:null,children:e.commentary}),r==="Initiator"&&n.jsxs(n.Fragment,{children:[(l=e.employeeVerdicts)==null?void 0:l.map(o=>n.jsxs(c,{w:"100%",jc:"space-between",ai:"center",children:[n.jsxs(c,{d:"column",ai:"flex-start",children:[n.jsx(d,{fontSize:"0.9rem",children:o.approverPosition}),n.jsx(d,{children:o.approverName})]}),n.jsx(g,{minWidth:"180px",width:"180px",type:I(o.approvalStatus),icon:o.approvalStatus==="Unknown"?null:void 0,title:S[o.approvalStatus]||"—",align:o.approvalStatus==="Unknown"?"center":"left"})]},o.approverEmployeeId)),n.jsxs(c,{w:"100%",jc:"space-between",ai:"center",children:[n.jsx(d,{fontSize:"0.9rem",children:"Должностное лицо УЭФ"}),n.jsx(g,{width:"180px",type:I(e.zkguApprovalStatus),icon:e.zkguApprovalStatus==="Unknown"?null:void 0,title:S[e.zkguApprovalStatus]||"—",align:e.zkguApprovalStatus==="Unknown"?"center":"left"})]}),n.jsxs(c,{w:"100%",jc:"space-between",ai:"center",children:[n.jsxs(c,{d:"column",ai:"flex-start",children:[n.jsx(d,{fontSize:"0.9rem",children:"Работник (получатель надбавки)"}),n.jsx(d,{children:e.initials})]}),n.jsx(g,{minWidth:"180px",width:"180px",type:I(e.selfApprovalStatus),icon:e.selfApprovalStatus==="Unknown"?null:void 0,title:S[e.selfApprovalStatus]||"—",align:e.selfApprovalStatus==="Unknown"?"center":"left"})]}),e.orderStatus&&n.jsxs(c,{w:"100%",jc:"space-between",ai:"center",children:[n.jsx(c,{d:"column",ai:"flex-start",children:n.jsx(d,{fontSize:"0.9rem",children:"Статус приказа"})}),n.jsx(g,{minWidth:"180px",width:"180px",type:e.orderStatus==="Ready"?"success":"alert",title:$[e.orderStatus]||"—"})]})]}),r==="Approver"&&s!=="Approved"&&s!=="Declined"&&n.jsxs(c,{jc:"space-between",children:[n.jsx(F,{text:"Отказать",background:"var(--red)",textColor:"white",onClick:()=>{a({allowanceId:i,approverEmployeeId:t,employeeId:e.id})}}),n.jsx(F,{text:"Согласовать",background:"var(--green)",textColor:"white",onClick:()=>{p({allowanceId:i,approverEmployeeId:t,employeeId:e.id})}})]})]})},K=R.div.withConfig({componentId:"sc-n1ez6c-0"})(["width:100%;display:flex;flex-direction:column;gap:0.5rem;background-color:var(--block-content);padding:1rem 0.5rem;border-radius:0.5rem;"]),P=({file:e})=>{const[r,t]=L.useState(!1);return n.jsx(q,{onClick:i=>i.preventDefault(),children:n.jsxs("div",{className:"file-body",onClick:()=>{e.sizeB?(t(!0),fetch(`${J}files?${new URLSearchParams({fileId:e.id})}`,{headers:{Authorization:`Bearer ${O()}`}}).then(i=>i.blob()).then(i=>{var p;(p=window.open(window.URL.createObjectURL(i),"_blank"))==null||p.focus()}).catch(i=>{console.log(i)}).finally(()=>t(!1))):X.evokePopUpMessage({message:"Файл недоступен",type:"failure"})},children:[n.jsx("div",{className:"image-container",children:r?n.jsx(E,{width:"16px",height:"16px"}):e.contentType.includes("image")?n.jsx(T,{}):n.jsx(W,{})}),n.jsxs("div",{className:"name-and-size",children:[n.jsxs("b",{className:"file-name",children:[e.name,".",e.extension]}),e.digitalSignature&&n.jsxs(d,{fontSize:"0.7em",children:["Подпись: ",e.digitalSignature]}),!!e.sizeB&&n.jsx(d,{fontSize:"0.7em",children:_(e.sizeB)})]})]})})},tn=()=>{var k,z;const{id:e}=V(),[r,t,i,p,a,s,x,j,l,o]=B([v.infoPageMounted,u.allowance.data,u.allowance.loading,u.allowance.error,u.roles,u.jobRoles,u.allowance.role,v.setCurrentRole,u.allowance.jobId,v.setCurrentJobId]),N=a.includes("Initiator"),f=a.includes("Approver"),w=N||f;return w&&(l||(f?(o(((k=s==null?void 0:s.find(h=>h.roles.includes("Approver")))==null?void 0:k.employeeId)||""),j("Approver")):(o(((z=s==null?void 0:s.find(h=>h.roles.includes("Initiator")))==null?void 0:z.employeeId)||""),j("Initiator")))),L.useEffect(()=>{w&&x&&l&&r({id:e,role:x,userId:l})},[e,x,l,w]),i?n.jsx(D,{children:n.jsx(c,{w:"100%",jc:"center",ai:"center",children:n.jsx(E,{})})}):w?n.jsx(D,{children:n.jsx(G,{load:()=>{},data:t,loading:i,error:p?p.message:null,children:x&&l?n.jsxs(n.Fragment,{children:[n.jsx(H,{}),a.length>1?n.jsx(M,{pages:[{id:"Approver",title:"Согласование",content:n.jsx(m,{id:e,role:x,jobId:l,files:t==null?void 0:t.files,employees:t==null?void 0:t.employees})},{id:"Initiator",title:"Установление",content:n.jsx(m,{id:e,role:x,jobId:l,files:t==null?void 0:t.files,employees:t==null?void 0:t.employees})}],currentPage:x==="Initiator"?1:0,onChangePage:h=>{j(h||"Approver")},appearance:!1}):a[0]==="Initiator"?n.jsx(m,{id:e,role:"Initiator",jobId:l,files:t==null?void 0:t.files,employees:t==null?void 0:t.employees}):n.jsx(m,{id:e,role:"Approver",jobId:l,files:t==null?void 0:t.files,employees:t==null?void 0:t.employees})]}):n.jsx(Y,{text:"Произошла ошибка"})})}):n.jsx(Q,{jobRoles:s})};function m({id:e,files:r,employees:t,role:i,jobId:p}){return r!=null&&r.application.length||r!=null&&r.other.length?n.jsx(M,{pages:[{title:"Сотрудники",content:n.jsx(c,{d:"column",gap:"1rem",w:"100%",children:t==null?void 0:t.map((a,s)=>n.jsxs(n.Fragment,{children:[s!==0&&n.jsx(U,{}),n.jsx(C,{employee:a,role:i,userId:p,id:e},a.id)]}))})},{title:"Файлы",content:n.jsxs(c,{d:"column",gap:"2rem",children:[!!(r!=null&&r.application.length)&&n.jsxs(n.Fragment,{children:[n.jsx(A,{size:4,align:"left",children:"Файлы заявления"}),n.jsx(c,{d:"column",gap:"1rem",children:r==null?void 0:r.application.map(a=>n.jsx(P,{file:a},a.id))})]}),!!(r!=null&&r.other.length)&&n.jsxs(n.Fragment,{children:[!!(r!=null&&r.application.length)&&n.jsx(A,{size:4,align:"left",children:"Другое"}),n.jsx(c,{d:"column",gap:"0.5rem",children:r==null?void 0:r.other.map(a=>n.jsx(P,{file:a},a.id))})]})]})}]}):n.jsx(c,{d:"column",gap:"1rem",w:"100%",children:t==null?void 0:t.map((a,s)=>n.jsxs(n.Fragment,{children:[s!==0&&n.jsx(U,{}),n.jsx(C,{employee:a,role:i,userId:p,id:e},a.id)]}))})}export{tn as default};
