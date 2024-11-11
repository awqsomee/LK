import{s as L,q as I,j as e,r as F,Q as U,T as B,cM as C}from"./vendor-48260ac4.js";import{ap as w,h as f,X as l,l as S,M as u,au as h,G as r,at as P,q as m,aS as E,aT as T,aU as M,d as N,V as D,aV as R,aw as g,P as k,aW as W,ax as V,H as A}from"./index-38206beb.js";import{F as $,D as q}from"./dev-mode-message-3aef4c57.js";const v=s=>s==="Approved"?"success":s==="Declined"||s==="Expired"?"failure":s==="Unknown"?"hint":"alert",z=({employee:s,role:c,userId:o,id:i})=>{var x,p,a;const[n,j]=I([w.approve,w.reject]),d=(s==null?void 0:s.approvalStatus)||((x=s==null?void 0:s.employeeVerdicts)!=null&&x.every(t=>t.approvalStatus==="Approved")&&s.zkguApprovalStatus==="Approved"&&s.selfApprovalStatus==="Approved"&&s.orderStatus==="Ready"?"Approved":(p=s==null?void 0:s.employeeVerdicts)!=null&&p.some(t=>t.approvalStatus==="Declined")||s.zkguApprovalStatus==="Declined"||s.selfApprovalStatus==="Declined"?"Declined":"InProgress");return e.jsxs(O,{children:[e.jsx(f,{align:"left",size:4,children:s.initials}),e.jsxs(f,{align:"left",size:5,children:[s.divisionName,", ",s.position]}),s.paymentIdentifier&&e.jsx(l,{children:s.paymentIdentifier}),e.jsxs(l,{children:["Сумма: ",s.sum," руб."]}),e.jsxs(l,{children:["Период: ",S(s.startDate)," - ",S(s.endDate)]}),e.jsx(u,{type:d==="Approved"?"success":d==="Declined"?"failure":"alert",title:h[d]||"—",align:"left",icon:null}),c==="Initiator".toLowerCase()&&e.jsxs(e.Fragment,{children:[(a=s.employeeVerdicts)==null?void 0:a.map(t=>e.jsxs(r,{w:"100%",jc:"space-between",ai:"center",children:[e.jsxs(r,{d:"column",ai:"flex-start",children:[e.jsx(l,{fontSize:"0.9rem",children:t.approverPosition}),e.jsx(l,{children:t.approverName})]}),e.jsx(u,{minWidth:"180px",width:"180px",type:v(t.approvalStatus),icon:t.approvalStatus==="Unknown"?null:void 0,title:h[t.approvalStatus]||"—",align:t.approvalStatus==="Unknown"?"center":"left"})]},t.approverEmployeeId)),e.jsxs(r,{w:"100%",jc:"space-between",ai:"center",children:[e.jsx(l,{fontSize:"0.9rem",children:"1С:ЗКГУ"}),e.jsx(u,{width:"180px",type:v(s.zkguApprovalStatus),icon:s.zkguApprovalStatus==="Unknown"?null:void 0,title:h[s.zkguApprovalStatus]||"—",align:s.zkguApprovalStatus==="Unknown"?"center":"left"})]}),e.jsxs(r,{w:"100%",jc:"space-between",ai:"center",children:[e.jsxs(r,{d:"column",ai:"flex-start",children:[e.jsx(l,{fontSize:"0.9rem",children:"Получатель надбавки"}),e.jsx(l,{children:s.initials})]}),e.jsx(u,{minWidth:"180px",width:"180px",type:v(s.selfApprovalStatus),icon:s.selfApprovalStatus==="Unknown"?null:void 0,title:h[s.selfApprovalStatus]||"—",align:s.selfApprovalStatus==="Unknown"?"center":"left"})]}),s.orderStatus&&e.jsxs(r,{w:"100%",jc:"space-between",ai:"center",children:[e.jsxs(r,{d:"column",ai:"flex-start",children:[e.jsx(l,{fontSize:"0.9rem",children:"Статус приказа"}),s.orderTitle&&e.jsx(l,{children:s.orderTitle})]}),e.jsx(u,{minWidth:"180px",width:"180px",type:s.orderStatus==="Ready"?"success":"alert",title:P[s.orderStatus]||"—"})]})]}),c==="Approver".toLowerCase()&&d!=="Approved"&&d!=="Declined"&&e.jsxs(r,{jc:"space-between",children:[e.jsx(m,{text:"Отказать",background:"var(--red)",textColor:"white",onClick:()=>{j({allowanceId:i,approverEmployeeId:o,employeeId:s.id})}}),e.jsx(m,{text:"Согласовать",background:"var(--green)",textColor:"white",onClick:()=>{n({allowanceId:i,approverEmployeeId:o,employeeId:s.id})}})]})]})},O=L.div.withConfig({componentId:"sc-n1ez6c-0"})(["width:100%;display:flex;flex-direction:column;gap:0.5rem;background-color:var(--block-content);padding:1rem 0.5rem;border-radius:0.5rem;"]),b=({file:s})=>{const[c,o]=F.useState(!1);return e.jsx(E,{onClick:i=>i.preventDefault(),children:e.jsxs("div",{className:"file-body",onClick:()=>{s.sizeB?(o(!0),fetch(`${T}files?${new URLSearchParams({fileId:s.id})}`,{headers:{Authorization:`Bearer ${M()}`}}).then(i=>i.blob()).then(i=>{var n;(n=window.open(window.URL.createObjectURL(i),"_blank"))==null||n.focus()}).catch(i=>{console.log(i)}).finally(()=>o(!1))):N.evokePopUpMessage({message:"Файл недоступен",type:"failure"})},children:[e.jsx("div",{className:"image-container",children:c?e.jsx(D,{width:"16px",height:"16px"}):s.contentType.includes("image")?e.jsx(U,{}):e.jsx(B,{})}),e.jsxs("div",{className:"name-and-size",children:[e.jsxs("b",{className:"file-name",children:[s.name,".",s.extension]}),s.digitalSignature&&e.jsxs(l,{fontSize:"0.7em",children:["Подпись: ",s.digitalSignature]}),!!s.sizeB&&e.jsx(l,{fontSize:"0.7em",children:R(s.sizeB)})]})]})})},J=()=>{const{id:s,role:c,jobId:o}=C(),[i,n,j,d,x]=I([w.infoPageMounted,g.allowance.data,g.allowance.loading,g.allowance.error,g.roles]),p=x.includes("Initiator")||x.includes("Approver");return F.useEffect(()=>{p&&i({id:s,role:c,userId:o})},[s,c,o,p]),j?e.jsx(k,{children:e.jsx(r,{w:"100%",jc:"center",ai:"center",children:e.jsx(D,{})})}):p?e.jsx(k,{children:e.jsx(W,{load:()=>{},data:n,loading:j,error:d?d.message:null,children:e.jsxs(e.Fragment,{children:[e.jsx(q,{}),n!=null&&n.files.application.length||n!=null&&n.files.other.length?e.jsx(V,{pages:[{title:"Сотрудники",content:e.jsx(r,{d:"column",gap:"1rem",w:"100%",children:n==null?void 0:n.employees.map((a,t)=>e.jsxs(e.Fragment,{children:[t!==0&&e.jsx(A,{}),e.jsx(z,{employee:a,role:c,userId:o,id:s},a.id)]}))})},{title:"Файлы",content:e.jsxs(r,{d:"column",gap:"2rem",children:[!!(n!=null&&n.files.application.length)&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:4,align:"left",children:"Файлы заявления"}),e.jsx(r,{d:"column",gap:"1rem",children:n==null?void 0:n.files.application.map(a=>e.jsx(b,{file:a},a.id))})]}),!!(n!=null&&n.files.other.length)&&e.jsxs(e.Fragment,{children:[!!(n!=null&&n.files.application.length)&&e.jsx(f,{size:4,align:"left",children:"Другое"}),e.jsx(r,{d:"column",gap:"0.5rem",children:n==null?void 0:n.files.other.map(a=>e.jsx(b,{file:a},a.id))})]})]})}]}):e.jsx(r,{d:"column",gap:"1rem",w:"100%",children:n==null?void 0:n.employees.map((a,t)=>e.jsxs(e.Fragment,{children:[t!==0&&e.jsx(A,{}),e.jsx(z,{employee:a,role:c,userId:o,id:s},a.id)]}))})]})})}):e.jsx($,{text:"У вас нет доступа к этому разделу"})};export{J as default};
