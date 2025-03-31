import{s as T,i as E,j as e,r as L,aJ as V,aK as J,cG as W}from"./vendor-fdf02817.js";import{bE as g,T as f,S as p,E as z,f as j,bG as w,d,bF as $,B as F,dh as _,di as G,dj as O,aR as K,a_ as R,dk as q,bJ as h,p as D,P as B,dl as y,R as N,D as C}from"./index-2172af78.js";import{A as H,F as Q}from"./forbidden-326c37cf.js";import{D as X}from"./test-database-message-50863021.js";const k=n=>n==="Approved"?"success":n==="Declined"||n==="Expired"?"failure":n==="Unknown"?"hint":"alert",P=({employee:n,role:t,userId:a,id:r})=>{var c,i,s;const[u,v]=E([g.approve,g.reject]),o=(n==null?void 0:n.approvalStatus)||(n!=null&&(c=n.employeeVerdicts)!==null&&c!==void 0&&c.every(l=>l.approvalStatus==="Approved")&&n.zkguApprovalStatus==="Approved"&&n.selfApprovalStatus==="Approved"&&n.orderStatus==="Ready"?"Approved":n!=null&&(i=n.employeeVerdicts)!==null&&i!==void 0&&i.some(l=>l.approvalStatus==="Declined")||n.zkguApprovalStatus==="Declined"||n.selfApprovalStatus==="Declined"?"Declined":"InProgress");return e.jsxs(Y,{children:[e.jsx(f,{align:"left",size:4,children:n.initials}),e.jsxs(f,{align:"left",size:5,children:[n.divisionName,", ",n.position]}),n.paymentIdentifier&&e.jsx(p,{children:n.paymentIdentifier.name}),e.jsxs(p,{children:["Сумма: ",n.sum," руб."]}),e.jsxs(p,{children:["Период: ",z(n.startDate)," - ",z(n.endDate)]}),e.jsx(j,{type:o==="Approved"?"success":o==="Declined"?"failure":"alert",title:w[o]||"—",align:"left",icon:null,children:n.commentary}),t==="Initiator"&&e.jsxs(e.Fragment,{children:[(s=n.employeeVerdicts)===null||s===void 0?void 0:s.map(l=>e.jsxs(d,{w:"100%",jc:"space-between",ai:"center",children:[e.jsxs(d,{d:"column",ai:"flex-start",children:[e.jsx(p,{fontSize:"0.9rem",children:l.approverPosition}),e.jsx(p,{children:l.approverName})]}),e.jsx(j,{minWidth:"180px",width:"180px",type:k(l.approvalStatus),icon:l.approvalStatus==="Unknown"?null:void 0,title:w[l.approvalStatus]||"—",align:l.approvalStatus==="Unknown"?"center":"left"})]},l.approverEmployeeId)),e.jsxs(d,{w:"100%",jc:"space-between",ai:"center",children:[e.jsx(p,{fontSize:"0.9rem",children:"Должностное лицо УЭФ"}),e.jsx(j,{width:"180px",type:k(n.zkguApprovalStatus),icon:n.zkguApprovalStatus==="Unknown"?null:void 0,title:w[n.zkguApprovalStatus]||"—",align:n.zkguApprovalStatus==="Unknown"?"center":"left"})]}),e.jsxs(d,{w:"100%",jc:"space-between",ai:"center",children:[e.jsxs(d,{d:"column",ai:"flex-start",children:[e.jsx(p,{fontSize:"0.9rem",children:"Работник (получатель надбавки)"}),e.jsx(p,{children:n.initials})]}),e.jsx(j,{minWidth:"180px",width:"180px",type:k(n.selfApprovalStatus),icon:n.selfApprovalStatus==="Unknown"?null:void 0,title:w[n.selfApprovalStatus]||"—",align:n.selfApprovalStatus==="Unknown"?"center":"left"})]}),n.orderStatus&&e.jsxs(d,{w:"100%",jc:"space-between",ai:"center",children:[e.jsx(d,{d:"column",ai:"flex-start",children:e.jsx(p,{fontSize:"0.9rem",children:"Статус приказа"})}),e.jsx(j,{minWidth:"180px",width:"180px",type:n.orderStatus==="Ready"?"success":"alert",title:$[n.orderStatus]||"—"})]})]}),t==="Approver"&&o!=="Approved"&&o!=="Declined"&&e.jsxs(d,{jc:"space-between",children:[e.jsx(F,{text:"Отказать",background:"var(--red)",textColor:"white",onClick:()=>{v({allowanceId:r,approverEmployeeId:a,employeeId:n.id})}}),e.jsx(F,{text:"Согласовать",background:"var(--green)",textColor:"white",onClick:()=>{u({allowanceId:r,approverEmployeeId:a,employeeId:n.id})}})]})]})},Y=T.div.withConfig({componentId:"sc-n1ez6c-0"})(["width:100%;display:flex;flex-direction:column;gap:0.5rem;background-color:var(--block-content);padding:1rem 0.5rem;border-radius:0.5rem;"]),U=({file:n})=>{const[t,a]=L.useState(!1);return e.jsx(_,{onClick:r=>r.preventDefault(),children:e.jsxs("div",{className:"file-body",onClick:()=>{n.sizeB?(a(!0),fetch(`${G}files?${new URLSearchParams({fileId:n.id})}`,{headers:{Authorization:`Bearer ${O()}`}}).then(r=>r.blob()).then(r=>{var c;(c=window.open(window.URL.createObjectURL(r),"_blank"))===null||c===void 0||c.focus()}).catch(r=>{console.log(r)}).finally(()=>a(!1))):K.evokePopUpMessage({message:"Файл недоступен",type:"failure"})},children:[e.jsx("div",{className:"image-container",children:t?e.jsx(R,{width:"16px",height:"16px"}):n.contentType.includes("image")?e.jsx(V,{}):e.jsx(J,{})}),e.jsxs("div",{className:"name-and-size",children:[e.jsxs("b",{className:"file-name",children:[n.name,".",n.extension]}),n.digitalSignature&&e.jsxs(p,{fontSize:"0.7em",children:["Подпись: ",n.digitalSignature]}),!!n.sizeB&&e.jsx(p,{fontSize:"0.7em",children:q(n.sizeB)})]})]})})},te=()=>{const{id:n}=W(),[t,a,r,c,i,s,u,v,o,l]=E([g.infoPageMounted,h.allowance.data,h.allowance.loading,h.allowance.error,D.roles,D.jobRoles,h.allowance.role,g.setCurrentRole,h.allowance.jobId,g.setCurrentJobId]),M=i.includes("Initiator"),b=i.includes("Approver"),m=M||b;if(m&&!o)if(b){var A;l((s==null||(A=s.find(x=>x.roles.includes("Approver")))===null||A===void 0?void 0:A.employeeId)||""),v("Approver")}else{var I;l((s==null||(I=s.find(x=>x.roles.includes("Initiator")))===null||I===void 0?void 0:I.employeeId)||""),v("Initiator")}return L.useEffect(()=>{m&&u&&o&&t({id:n,role:u,userId:o})},[n,u,o,m]),r?e.jsx(B,{children:e.jsx(d,{w:"100%",jc:"center",ai:"center",children:e.jsx(R,{})})}):m?e.jsx(B,{children:e.jsx(y,{load:()=>{},data:a,loading:r,error:c?c.message:null,children:u&&o?e.jsxs(e.Fragment,{children:[e.jsx(X,{}),i.length>1?e.jsx(N,{pages:[{id:"Approver",title:"Согласование",content:e.jsx(S,{id:n,role:u,jobId:o,files:a==null?void 0:a.files,employees:a==null?void 0:a.employees})},{id:"Initiator",title:"Установление",content:e.jsx(S,{id:n,role:u,jobId:o,files:a==null?void 0:a.files,employees:a==null?void 0:a.employees})}],currentPage:u==="Initiator"?1:0,onChangePage:x=>{v(x||"Approver")},appearance:!1}):i[0]==="Initiator"?e.jsx(S,{id:n,role:"Initiator",jobId:o,files:a==null?void 0:a.files,employees:a==null?void 0:a.employees}):e.jsx(S,{id:n,role:"Approver",jobId:o,files:a==null?void 0:a.files,employees:a==null?void 0:a.employees})]}):e.jsx(Q,{text:"Произошла ошибка"})})}):e.jsx(H,{jobRoles:s})};function S({id:n,files:t,employees:a,role:r,jobId:c}){return t!=null&&t.application.length||t!=null&&t.other.length?e.jsx(N,{pages:[{title:"Сотрудники",content:e.jsx(d,{d:"column",gap:"1rem",w:"100%",children:a==null?void 0:a.map((i,s)=>e.jsxs(e.Fragment,{children:[s!==0&&e.jsx(C,{}),e.jsx(P,{employee:i,role:r,userId:c,id:n},i.id)]}))})},{title:"Файлы",content:e.jsxs(d,{d:"column",gap:"2rem",children:[!!(t!=null&&t.application.length)&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:4,align:"left",children:"Файлы заявления"}),e.jsx(d,{d:"column",gap:"1rem",children:t==null?void 0:t.application.map(i=>e.jsx(U,{file:i},i.id))})]}),!!(t!=null&&t.other.length)&&e.jsxs(e.Fragment,{children:[!!(t!=null&&t.application.length)&&e.jsx(f,{size:4,align:"left",children:"Другое"}),e.jsx(d,{d:"column",gap:"0.5rem",children:t==null?void 0:t.other.map(i=>e.jsx(U,{file:i},i.id))})]})]})}]}):e.jsx(d,{d:"column",gap:"1rem",w:"100%",children:a==null?void 0:a.map((i,s)=>e.jsxs(e.Fragment,{children:[s!==0&&e.jsx(C,{}),e.jsx(P,{employee:i,role:r,userId:c,id:n},i.id)]}))})}export{te as default};
