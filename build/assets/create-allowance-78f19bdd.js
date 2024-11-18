import{q as i,j as e,r as p}from"./vendor-48260ac4.js";import{aZ as c,G as m,i as D,h as q,X as w,p as A,ax as d,aq as y,B as k,F as E,V as L,S as T,x as F,a1 as R,a_ as N,a$ as O,N as U,b0 as B,d as P,ap as I}from"./index-a4b9dc87.js";import{D as W}from"./dev-mode-message-cc5e22b3.js";import{A as z}from"./forbidden-637b87be.js";const _=({subordinate:{employeeId:t,employeeName:n,divisionName:a,position:r,employmentType:u,rate:l}})=>{const{addItem:f,removeItem:v,setValue:j,value:x}=i(c.employees),s=x.find(o=>o.id===t),h=!!s;return e.jsxs(m,{gap:"0.5rem",onClick:()=>h?v(t):f(t),cursor:"pointer",brad:"0.5rem",hoverBackground:"var(--theme-5)",p:"0.5rem",ai:"flex-start",children:[e.jsx(D,{checked:h,setChecked:()=>h?v(t):f(t)}),e.jsxs(m,{gap:"0.5rem",d:"column",ai:"flex-start",children:[e.jsx(q,{align:"left",size:4,children:n}),e.jsx(w,{children:a}),e.jsx(w,{children:r}),e.jsxs(w,{children:[u,l&&` (ставка: ${l})`]}),h&&e.jsxs(m,{jc:"space-between",ai:"flex-end",gap:"0.5rem",onClick:o=>o.stopPropagation(),cursor:"auto",children:[e.jsx(A,{title:"Сумма",value:(s==null?void 0:s.sum)||"",setValue:o=>{s&&j({...s,sum:o})},type:"number",required:!0,width:"38%",placeholder:"Сумма выплаты",isActive:h}),e.jsx(A,{title:"Дата начала",value:(s==null?void 0:s.startDate)||"",setValue:o=>{s&&j({...s,startDate:o})},type:"date",required:!0,width:"30%",isActive:h}),e.jsx(A,{title:"Дата окончания",value:(s==null?void 0:s.endDate)||"",setValue:o=>{s&&j({...s,endDate:o})},type:"date",required:!0,width:"30%",minValue:s==null?void 0:s.startDate,isActive:h})]})]})]})},le=()=>{const[t,n,a,r,u,l,f,v,j]=i([d.rolesPending,y.createSupplement,d.supplementCreating,y.pageMounted,d.roles,d.completed,y.setCompleted,d.isActive,d.jobRoles]),x=l??!1,s=u.includes("Initiator");return p.useEffect(()=>{s&&r()},[s]),t?e.jsx(k,{isDone:x,children:e.jsx(E,{noHeader:!0,children:e.jsx(m,{w:"100%",jc:"center",ai:"center",children:e.jsx(L,{})})})}):s?e.jsx(k,{isDone:x,children:e.jsxs(E,{noHeader:!0,children:[e.jsx(W,{}),e.jsx($,{}),e.jsx(H,{}),e.jsx(G,{}),e.jsx(J,{}),e.jsx(X,{}),e.jsx(Y,{}),e.jsx(Z,{}),e.jsx(ee,{}),e.jsx(T,{text:x?"Отправлено":"Отправить",action:n,isLoading:a,completed:l,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:v,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})}):e.jsx(z,{jobRoles:j})};function $(){const{value:t,setValue:n}=i(c.job),a=i(d.jobRoles);if(!a)return null;const r=p.useMemo(()=>a.filter(u=>u.roles.includes("Initiator")).map(u=>({id:u.employeeId,title:u.division})),a);return p.useEffect(()=>{r.length===1&&n(r[0])},[r]),e.jsx(F,{title:"Должность / Подразделение",items:r,selected:r.length===1?r[0]:t,setSelected:n,isActive:r.length>1,required:!0,width:"100%"})}function H(){const t=i(d.sourcesOfFunding),{value:n,setValue:a}=i(c.sourceOfFunding);return p.useEffect(()=>{t.length===1&&a(t[0])},[t]),e.jsx(F,{title:"Источник финансирования",items:t,selected:n,setSelected:a,isActive:t.length>1,width:"100%",withSearch:!0,placeholder:"Источник финансирования"})}function G(){const t=i(d.paymentIdentifiers),{value:n,setValue:a}=i(c.paymentIdentifier);return p.useEffect(()=>{t.length===1&&a(t[0])},[t]),e.jsx(F,{title:"Вид набавки",items:t,selected:n,setSelected:a,isActive:t.length>1,required:!0,width:"100%",withSearch:!0,placeholder:"Вид набавки"})}function J(){const{startDate:t,setStartDate:n,endDate:a,setEndDate:r}=i(c.period);return e.jsxs(m,{jc:"space-between",gap:"0.5rem",children:[e.jsx(A,{title:"Дата начала",value:t,setValue:n,type:"date",required:!0,width:"49%"}),e.jsx(A,{title:"Дата окончания",value:a,setValue:r,type:"date",required:!0,width:"49%",minValue:t})]})}function X(){const{value:t,setValue:n}=i(c.commentary);return e.jsx(R,{title:"Комментарий",placeholder:"Комментарий",value:t,setValue:n})}function Y(){const[t,n,a,r,u]=i([d.employees,c.employees.value,c.employees.allSelected,c.employees.selectAll,c.employees.deselectAll]),{value:l}=i(c.job),[f,v]=p.useState(!0),[j,x]=p.useState(!1),[s,h]=p.useState(""),[o,b]=p.useState(!1),M=p.useMemo(()=>{if(!t||!l)return[];const S=n.map(g=>g.id),C=o?t[l==null?void 0:l.id].filter(g=>S.includes(g.employeeId)):t[l==null?void 0:l.id];if(!s)return C;const V=s.toLowerCase();return C.filter(g=>g.employeeName.toLowerCase().includes(V)||g.divisionName.toLowerCase().includes(V)||g.position.toLowerCase().includes(V))},[t,l,s,o,n]);return e.jsxs(N,{openArea:f,children:[e.jsx(O,{title:"Сотрудники",included:j,optional:!1,setOpenArea:v,setIncluded:x,collapsed:!1,openArea:f}),e.jsx("div",{className:"inputs",children:l&&t?e.jsxs(m,{gap:"1.5rem",ai:"flex-start",d:"column",children:[e.jsx(U,{value:s,setValue:h,placeholder:"Поиск по сотрудникам"}),e.jsxs(m,{gap:"0.5rem",ai:"flex-start",d:"column",children:[e.jsx(D,{checked:o,setChecked:b,text:"Отобразить только выбранных"}),e.jsx(D,{checked:a,setChecked:S=>{S?r(t[l==null?void 0:l.id].map(C=>C.employeeId)):u()},text:"Выбрать всех"})]}),e.jsx(m,{gap:"1rem",ai:"flex-start",d:"column",children:M.map(S=>e.jsx(_,{subordinate:S},S.employeeId))})]}):e.jsx(w,{children:"Выберите должность"})})]})}function Z(){const{value:t,setValue:n}=i(c.files),a=i(d.fileUploading);return e.jsx(B,{files:t,formats:["doc","pdf","docx"],setFiles:r=>{if(t.length<r.length&&t.some(u=>u.name===r[r.length-1].name)){P.evokePopUpMessage({message:"Имя файла не может повторятся",type:"failure"});return}n(r)},isActive:!a})}const K={fiveToNine:"сотрудников",one:"сотрудник",twoToFour:"сотрудника",zero:"сотрудников"},Q={fiveToNine:"Добавлено",one:"Добавлен",twoToFour:"Добавлено",zero:"Добавлено"};function ee(){const t=i(c.employees.value);return e.jsxs(w,{children:[I(Math.trunc(t==null?void 0:t.length),Q)," ",t==null?void 0:t.length," ",I(Math.trunc(t==null?void 0:t.length),K)]})}export{le as default};
