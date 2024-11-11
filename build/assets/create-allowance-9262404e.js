import{q as i,j as e,r as p}from"./vendor-48260ac4.js";import{aX as o,G as m,i as y,h as b,X as w,p as A,aw as h,ap as F,B as k,F as E,V as q,S as T,x as D,a1 as N,aY as O,aZ as U,N as B,a_ as P,d as R,as as I}from"./index-38206beb.js";import{F as W,D as z}from"./dev-mode-message-3aef4c57.js";const _=({subordinate:{employeeId:t,employeeName:n,divisionName:a,position:r,employmentType:u,rate:l}})=>{const{addItem:f,removeItem:v,setValue:d,value:j}=i(o.employees),s=j.find(c=>c.id===t),x=!!s;return e.jsxs(m,{gap:"0.5rem",onClick:()=>x?v(t):f(t),cursor:"pointer",brad:"0.5rem",hoverBackground:"var(--theme-5)",p:"0.5rem",ai:"flex-start",children:[e.jsx(y,{checked:x,setChecked:()=>x?v(t):f(t)}),e.jsxs(m,{gap:"0.5rem",d:"column",ai:"flex-start",children:[e.jsx(b,{align:"left",size:4,children:n}),e.jsx(w,{children:a}),e.jsx(w,{children:r}),e.jsxs(w,{children:[u,l&&` (ставка: ${l})`]}),x&&e.jsxs(m,{jc:"space-between",ai:"flex-end",gap:"0.5rem",onClick:c=>c.stopPropagation(),cursor:"auto",children:[e.jsx(A,{title:"Сумма",value:(s==null?void 0:s.sum)||"",setValue:c=>{s&&d({...s,sum:c})},type:"number",required:!0,width:"38%",placeholder:"Сумма выплаты",isActive:x}),e.jsx(A,{title:"Дата начала",value:(s==null?void 0:s.startDate)||"",setValue:c=>{s&&d({...s,startDate:c})},type:"date",required:!0,width:"30%",isActive:x}),e.jsx(A,{title:"Дата окончания",value:(s==null?void 0:s.endDate)||"",setValue:c=>{s&&d({...s,endDate:c})},type:"date",required:!0,width:"30%",minValue:s==null?void 0:s.startDate,isActive:x})]})]})]})},ae=()=>{const[t,n,a,r,u,l,f,v]=i([h.rolesPending,F.createSupplement,h.supplementCreating,F.pageMounted,h.roles,h.completed,F.setCompleted,h.isActive]),d=l??!1,j=u.includes("Initiator");return p.useEffect(()=>{j&&r()},[j]),t?e.jsx(k,{isDone:d,children:e.jsx(E,{noHeader:!0,children:e.jsx(m,{w:"100%",jc:"center",ai:"center",children:e.jsx(q,{})})})}):j?e.jsx(k,{isDone:d,children:e.jsxs(E,{noHeader:!0,children:[e.jsx(z,{}),e.jsx(H,{}),e.jsx(X,{}),e.jsx(Y,{}),e.jsx($,{}),e.jsx(G,{}),e.jsx(J,{}),e.jsx(Z,{}),e.jsx(ee,{}),e.jsx(T,{text:d?"Отправлено":"Отправить",action:n,isLoading:a,completed:l,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:v,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})}):e.jsx(W,{text:"У вас нет доступа к этому разделу"})};function H(){const{value:t,setValue:n}=i(o.job),a=i(h.jobRoles);if(!a)return null;const r=p.useMemo(()=>a.filter(u=>u.roles.includes("Initiator")).map(u=>({id:u.employeeId,title:u.division})),a);return p.useEffect(()=>{r.length===1&&n(r[0])},[r]),e.jsx(D,{title:"Должность / Подразделение",items:r,selected:r.length===1?r[0]:t,setSelected:n,isActive:r.length>1,required:!0,width:"100%"})}function X(){const t=i(h.sourcesOfFunding),{value:n,setValue:a}=i(o.sourceOfFunding);return p.useEffect(()=>{t.length===1&&a(t[0])},[t]),e.jsx(D,{title:"Источник финансирования",items:t,selected:n,setSelected:a,isActive:t.length>1,width:"100%",withSearch:!0,placeholder:"Источник финансирования"})}function Y(){const t=i(h.paymentIdentifiers),{value:n,setValue:a}=i(o.paymentIdentifier);return p.useEffect(()=>{t.length===1&&a(t[0])},[t]),e.jsx(D,{title:"Вид набавки",items:t,selected:n,setSelected:a,isActive:t.length>1,required:!0,width:"100%",withSearch:!0,placeholder:"Вид набавки"})}function $(){const{startDate:t,setStartDate:n,endDate:a,setEndDate:r}=i(o.period);return e.jsxs(m,{jc:"space-between",gap:"0.5rem",children:[e.jsx(A,{title:"Дата начала",value:t,setValue:n,type:"date",required:!0,width:"49%"}),e.jsx(A,{title:"Дата окончания",value:a,setValue:r,type:"date",required:!0,width:"49%",minValue:t})]})}function G(){const{value:t,setValue:n}=i(o.commentary);return e.jsx(N,{title:"Комментарий",placeholder:"Комментарий",value:t,setValue:n})}function J(){const[t,n,a,r,u]=i([h.employees,o.employees.value,o.employees.allSelected,o.employees.selectAll,o.employees.deselectAll]),{value:l}=i(o.job),[f,v]=p.useState(!0),[d,j]=p.useState(!1),[s,x]=p.useState(""),[c,M]=p.useState(!1),L=p.useMemo(()=>{if(!t||!l)return[];const S=n.map(g=>g.id),C=c?t[l==null?void 0:l.id].filter(g=>S.includes(g.employeeId)):t[l==null?void 0:l.id];if(!s)return C;const V=s.toLowerCase();return C.filter(g=>g.employeeName.toLowerCase().includes(V)||g.divisionName.toLowerCase().includes(V)||g.position.toLowerCase().includes(V))},[t,l,s,c,n]);return e.jsxs(O,{openArea:f,children:[e.jsx(U,{title:"Сотрудники",included:d,optional:!1,setOpenArea:v,setIncluded:j,collapsed:!1,openArea:f}),e.jsx("div",{className:"inputs",children:l&&t?e.jsxs(m,{gap:"1.5rem",ai:"flex-start",d:"column",children:[e.jsx(B,{value:s,setValue:x,placeholder:"Поиск по сотрудникам"}),e.jsxs(m,{gap:"0.5rem",ai:"flex-start",d:"column",children:[e.jsx(y,{checked:c,setChecked:M,text:"Отобразить только выбранных"}),e.jsx(y,{checked:a,setChecked:S=>{S?r(t[l==null?void 0:l.id].map(C=>C.employeeId)):u()},text:"Выбрать всех"})]}),e.jsx(m,{gap:"1rem",ai:"flex-start",d:"column",children:L.map(S=>e.jsx(_,{subordinate:S},S.employeeId))})]}):e.jsx(w,{children:"Выберите должность"})})]})}function Z(){const{value:t,setValue:n}=i(o.files),a=i(h.fileUploading);return e.jsx(P,{files:t,formats:["doc","pdf","docx"],setFiles:r=>{if(t.length<r.length&&t.some(u=>u.name===r[r.length-1].name)){R.evokePopUpMessage({message:"Имя файла не может повторятся",type:"failure"});return}n(r)},isActive:!a})}const K={fiveToNine:"сотрудников",one:"сотрудник",twoToFour:"сотрудника",zero:"сотрудников"},Q={fiveToNine:"Добавлено",one:"Добавлен",twoToFour:"Добавлено",zero:"Добавлено"};function ee(){const t=i(o.employees.value);return e.jsxs(w,{children:[I(Math.trunc(t==null?void 0:t.length),Q)," ",t==null?void 0:t.length," ",I(Math.trunc(t==null?void 0:t.length),K)]})}export{ae as default};
