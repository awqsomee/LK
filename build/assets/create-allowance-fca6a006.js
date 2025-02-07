var U=Object.defineProperty,B=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var E=(e,s,l)=>s in e?U(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,V=(e,s)=>{for(var l in s||(s={}))P.call(s,l)&&E(e,l,s[l]);if(M)for(var l of M(s))W.call(s,l)&&E(e,l,s[l]);return e},b=(e,s)=>B(e,N(s));import{q as i,j as t,r as x}from"./vendor-93473b96.js";import{aY as d,J as h,i as I,h as z,K as A,p as w,av as m,ao as k,B as F,F as L,L as O,S as _,x as T,a1 as $,aZ as H,a_ as J,V as Y,a$ as K,d as Z,an as q}from"./index-7eec75d1.js";import{D as G}from"./dev-mode-message-63fc4dda.js";import{A as Q}from"./forbidden-2420159e.js";const X=({subordinate:{employeeId:e,employeeName:s,divisionName:l,position:a,employmentType:o,rate:r}})=>{const{addItem:f,removeItem:g,setValue:j,value:S}=i(d.employees),{minDate:c}=i(d.period),n=S.find(p=>p.id===e),u=!!n;return t.jsxs(h,{gap:"0.5rem",onClick:()=>u?g(e):f(e),cursor:"pointer",brad:"0.5rem",hoverBackground:"var(--theme-5)",p:"0.5rem",ai:"flex-start",children:[t.jsx(I,{checked:u,setChecked:()=>u?g(e):f(e)}),t.jsxs(h,{gap:"0.5rem",d:"column",ai:"flex-start",children:[t.jsx(z,{align:"left",size:4,children:s}),t.jsx(A,{children:l}),t.jsx(A,{children:a}),t.jsxs(A,{children:[o,r&&` (ставка: ${r})`]}),u&&t.jsxs(h,{jc:"space-between",ai:"flex-end",gap:"0.5rem",onClick:p=>p.stopPropagation(),cursor:"auto",children:[t.jsx(w,{title:"Сумма",value:(n==null?void 0:n.sum)||"",setValue:p=>{n&&j(b(V({},n),{sum:p}))},type:"number",required:!0,width:"38%",placeholder:"Сумма выплаты",isActive:u}),t.jsx(w,{title:"Дата начала",value:(n==null?void 0:n.startDate)||"",setValue:p=>{n&&j(b(V({},n),{startDate:p}))},type:"date",required:!0,width:"30%",isActive:u,minValue:c}),t.jsx(w,{title:"Дата окончания",value:(n==null?void 0:n.endDate)||"",setValue:p=>{n&&j(b(V({},n),{endDate:p}))},type:"date",required:!0,width:"30%",minValue:n==null?void 0:n.startDate,isActive:u})]})]})]})},he=()=>{const[e,s,l,a,o,r,f,g,j,S]=i([m.rolesPending,k.createSupplement,m.supplementCreating,k.pageMounted,m.roles,m.completed,k.setCompleted,m.isActive,m.jobRoles,m.errorMessage]),c=r!=null?r:!1,n=o.includes("Initiator");return x.useEffect(()=>{n&&a()},[n]),e?t.jsx(F,{isDone:c,children:t.jsx(L,{noHeader:!0,children:t.jsx(h,{w:"100%",jc:"center",ai:"center",children:t.jsx(O,{})})})}):n?t.jsx(F,{isDone:c,children:t.jsxs(L,{noHeader:!0,children:[t.jsx(G,{}),t.jsx(ee,{}),t.jsx(te,{}),t.jsx(se,{}),t.jsx(le,{}),t.jsx(ne,{}),t.jsx(ae,{}),t.jsx(ie,{}),t.jsx(_,{text:c?"Отправлено":"Отправить",action:s,isLoading:l,completed:r,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:c,isActive:g,popUpFailureMessage:S,popUpSuccessMessage:"Данные формы успешно отправлены"})]})}):t.jsx(Q,{jobRoles:j})};function ee(){const{value:e,setValue:s}=i(d.job),l=i(m.jobRoles);if(!l)return null;const a=x.useMemo(()=>l.filter(o=>o.roles.includes("Initiator")).map(o=>({id:o.employeeId,title:o.division})),l);return x.useEffect(()=>{a.length===1&&s(a[0])},[a]),t.jsx(T,{title:"Должность / Подразделение",items:a,selected:a.length===1?a[0]:e,setSelected:s,isActive:a.length>1,required:!0,width:"100%"})}function te(){const e=i(m.paymentIdentifiers),{value:s,setValue:l}=i(d.paymentIdentifier);return x.useEffect(()=>{e.length===1&&l(e[0])},[e]),t.jsx(T,{title:"Вид надбавки",items:e,selected:s,setSelected:l,isActive:e.length>1,required:!0,width:"100%",withSearch:!0,placeholder:"Вид надбавки"})}function se(){const{startDate:e,setStartDate:s,endDate:l,setEndDate:a,minDate:o}=i(d.period);return t.jsxs(h,{jc:"space-between",gap:"0.5rem",children:[t.jsx(w,{title:"Дата начала",value:e,setValue:s,type:"date",required:!0,width:"49%",minValue:o}),t.jsx(w,{title:"Дата окончания",value:l,setValue:a,type:"date",required:!0,width:"49%",minValue:e})]})}function le(){const{value:e,setValue:s}=i(d.commentary);return t.jsx($,{title:"Комментарий (предполагаемый источник финансирования)",placeholder:"Комментарий (предполагаемый источник финансирования, например, проект)",value:e,setValue:s})}function ne(){const[e,s,l,a,o]=i([m.employees,d.employees.value,d.employees.allSelected,d.employees.selectAll,d.employees.deselectAll]),{value:r}=i(d.job),[f,g]=x.useState(!0),[j,S]=x.useState(!1),[c,n]=x.useState(""),[u,p]=x.useState(!1),R=x.useMemo(()=>{if(!e||!r)return[];const y=s.map(v=>v.id),C=u?e[r==null?void 0:r.id].filter(v=>y.includes(v.employeeId)):e[r==null?void 0:r.id];if(!c)return C;const D=c.toLowerCase();return C.filter(v=>v.employeeName.toLowerCase().includes(D)||v.divisionName.toLowerCase().includes(D)||v.position.toLowerCase().includes(D))},[e,r,c,u,s]);return t.jsxs(H,{openArea:f,children:[t.jsx(J,{title:"Сотрудники",included:j,optional:!1,setOpenArea:g,setIncluded:S,collapsed:!1,openArea:f}),t.jsx("div",{className:"inputs",children:r&&e?t.jsxs(h,{gap:"1.5rem",ai:"flex-start",d:"column",children:[t.jsx(Y,{value:c,setValue:n,placeholder:"Поиск по сотрудникам"}),t.jsxs(h,{gap:"0.5rem",ai:"flex-start",d:"column",children:[t.jsx(I,{checked:u,setChecked:p,text:"Отобразить только выбранных"}),t.jsx(I,{checked:l,setChecked:y=>{y?a(e[r==null?void 0:r.id].map(C=>C.employeeId)):o()},text:"Выбрать всех"})]}),t.jsx(h,{gap:"1rem",ai:"flex-start",d:"column",children:R.map(y=>t.jsx(X,{subordinate:y},y.employeeId))})]}):t.jsx(A,{children:"Выберите должность"})})]})}function ae(){const{value:e,setValue:s}=i(d.files),l=i(m.fileUploading);return t.jsx(K,{files:e,formats:["doc","pdf","docx"],setFiles:a=>{if(e.length<a.length&&e.some(o=>o.name===a[a.length-1].name)){Z.evokePopUpMessage({message:"Имя файла не может повторятся",type:"failure"});return}s(a)},isActive:!l})}const re={fiveToNine:"сотрудников",one:"сотрудник",twoToFour:"сотрудника",zero:"сотрудников"},oe={fiveToNine:"Добавлено",one:"Добавлен",twoToFour:"Добавлено",zero:"Добавлено"};function ie(){const e=i(d.employees.value);return t.jsxs(A,{children:[q(Math.trunc(e==null?void 0:e.length),oe)," ",e==null?void 0:e.length," ",q(Math.trunc(e==null?void 0:e.length),re)]})}export{he as default};
