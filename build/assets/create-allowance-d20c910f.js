var N=Object.defineProperty,P=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var F=(e,s,l)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,C=(e,s)=>{for(var l in s||(s={}))B.call(s,l)&&F(e,l,s[l]);if(E)for(var l of E(s))W.call(s,l)&&F(e,l,s[l]);return e},D=(e,s)=>P(e,z(s));import{i as a,j as t,r as m}from"./vendor-8a1e4858.js";import{dl as d,f as x,h as M,T as O,S as b,I as w,q as V,bD as k,bI as v,bz as L,t as q,r as $,i as H,w as R,v as _,dm as J,dn as Y,bn as G,dp as K,p as Q,bC as T}from"./index-8a3ccb59.js";import{D as X}from"./test-database-message-8d9c810b.js";import{A as Z}from"./forbidden-3408b2bd.js";const ee=({subordinate:{employeeId:e,employeeName:s,divisionName:l,position:r,employmentType:i,rate:o}})=>{const{addItem:h,removeItem:g,setValue:f,value:S}=a(d.employees),{minDate:c}=a(d.period),n=S.find(p=>p.id===e),u=!!n;return t.jsxs(x,{gap:"0.5rem",onClick:()=>u?g(e):h(e),cursor:"pointer",brad:"0.5rem",hoverBackground:"var(--theme-5)",p:"0.5rem",ai:"flex-start",children:[t.jsx(M,{checked:u,setChecked:()=>u?g(e):h(e)}),t.jsxs(x,{gap:"0.5rem",d:"column",ai:"flex-start",children:[t.jsx(O,{align:"left",size:4,children:s}),t.jsx(b,{children:l}),t.jsx(b,{children:r}),t.jsxs(b,{children:[i,o&&` (ставка: ${o})`]}),u&&t.jsxs(x,{jc:"space-between",ai:"flex-end",gap:"0.5rem",onClick:p=>p.stopPropagation(),cursor:"auto",children:[t.jsx(w,{title:"Сумма",value:(n==null?void 0:n.sum)||"",setValue:p=>{n&&f(D(C({},n),{sum:p}))},type:"number",required:!0,width:"38%",placeholder:"Сумма выплаты",isActive:u}),t.jsx(w,{title:"Дата начала",value:(n==null?void 0:n.startDate)||"",setValue:p=>{n&&f(D(C({},n),{startDate:p}))},type:"date",required:!0,width:"30%",isActive:u,minValue:c}),t.jsx(w,{title:"Дата окончания",value:(n==null?void 0:n.endDate)||"",setValue:p=>{n&&f(D(C({},n),{endDate:p}))},type:"date",required:!0,width:"30%",minValue:n==null?void 0:n.startDate,isActive:u})]})]})]})},fe=()=>{const[e,s,l,r,i,o,h,g,f,S]=a([V.rolesPending,k.createSupplement,v.supplementCreating,k.pageMounted,V.roles,v.completed,k.setCompleted,v.isActive,V.jobRoles,v.errorMessage]),c=o!=null?o:!1,n=i.includes("Initiator");return m.useEffect(()=>{n&&r()},[n]),e?t.jsx(L,{isDone:c,children:t.jsx(q,{noHeader:!0,children:t.jsx(x,{w:"100%",jc:"center",ai:"center",children:t.jsx($,{})})})}):n?t.jsx(L,{isDone:c,children:t.jsxs(q,{noHeader:!0,children:[t.jsx(X,{}),t.jsx(te,{}),t.jsx(se,{}),t.jsx(le,{}),t.jsx(ne,{}),t.jsx(re,{}),t.jsx(oe,{}),t.jsx(de,{}),t.jsx(H,{text:c?"Отправлено":"Отправить",action:s,isLoading:l,completed:o,setCompleted:h,repeatable:!1,buttonSuccessText:"Отправлено",isDone:c,isActive:g,popUpFailureMessage:S,popUpSuccessMessage:"Данные формы успешно отправлены"})]})}):t.jsx(Z,{jobRoles:f})};function te(){const{value:e,setValue:s}=a(d.job),l=a(V.jobRoles);if(!l)return null;const r=m.useMemo(()=>l.filter(i=>i.roles.includes("Initiator")).map(i=>({id:i.employeeId,title:i.division})),l);return m.useEffect(()=>{r.length===1&&s(r[0])},[r]),t.jsx(R,{title:"Должность / Подразделение",items:r,selected:r.length===1?r[0]:e,setSelected:s,isActive:r.length>1,required:!0,width:"100%"})}function se(){const e=a(v.paymentIdentifiers),{value:s,setValue:l}=a(d.paymentIdentifier);return m.useEffect(()=>{e.length===1&&l(e[0])},[e]),t.jsx(R,{title:"Вид надбавки",items:e,selected:s,setSelected:l,isActive:e.length>1,required:!0,width:"100%",withSearch:!0,placeholder:"Вид надбавки"})}function le(){const{startDate:e,setStartDate:s,endDate:l,setEndDate:r,minDate:i}=a(d.period);return t.jsxs(x,{jc:"space-between",gap:"0.5rem",children:[t.jsx(w,{title:"Дата начала",value:e,setValue:s,type:"date",required:!0,width:"49%",minValue:i}),t.jsx(w,{title:"Дата окончания",value:l,setValue:r,type:"date",required:!0,width:"49%",minValue:e})]})}function ne(){const{value:e,setValue:s}=a(d.commentary);return t.jsx(_,{title:"Комментарий (предполагаемый источник финансирования)",placeholder:"Комментарий (предполагаемый источник финансирования, например, проект)",value:e,setValue:s})}function re(){const[e,s,l,r,i]=a([v.employees,d.employees.value,d.employees.allSelected,d.employees.selectAll,d.employees.deselectAll]),{value:o}=a(d.job),[h,g]=m.useState(!0),[f,S]=m.useState(!1),[c,n]=m.useState(""),[u,p]=m.useState(!1),U=m.useMemo(()=>{if(!e||!o)return[];const y=s.map(j=>j.id),A=u?e[o==null?void 0:o.id].filter(j=>y.includes(j.employeeId)):e[o==null?void 0:o.id];if(!c)return A;const I=c.toLowerCase();return A.filter(j=>j.employeeName.toLowerCase().includes(I)||j.divisionName.toLowerCase().includes(I)||j.position.toLowerCase().includes(I))},[e,o,c,u,s]);return t.jsxs(J,{openArea:h,children:[t.jsx(Y,{title:"Сотрудники",included:f,optional:!1,setOpenArea:g,setIncluded:S,collapsed:!1,openArea:h}),t.jsx("div",{className:"inputs",children:o&&e?t.jsxs(x,{gap:"1.5rem",ai:"flex-start",d:"column",children:[t.jsx(G,{value:c,setValue:n,placeholder:"Поиск по сотрудникам"}),t.jsxs(x,{gap:"0.5rem",ai:"flex-start",d:"column",children:[t.jsx(M,{checked:u,setChecked:p,text:"Отобразить только выбранных"}),t.jsx(M,{checked:l,setChecked:y=>{y?r(e[o==null?void 0:o.id].map(A=>A.employeeId)):i()},text:"Выбрать всех"})]}),t.jsx(x,{gap:"1rem",ai:"flex-start",d:"column",children:U.map(y=>t.jsx(ee,{subordinate:y},y.employeeId))})]}):t.jsx(b,{children:"Выберите должность"})})]})}function oe(){const{value:e,setValue:s}=a(d.files),l=a(v.fileUploading);return t.jsx(K,{files:e,formats:["doc","pdf","docx"],setFiles:r=>{if(e.length<r.length&&e.some(i=>i.name===r[r.length-1].name)){Q.evokePopUpMessage({message:"Имя файла не может повторятся",type:"failure"});return}s(r)},isActive:!l})}const ie={fiveToNine:"сотрудников",one:"сотрудник",twoToFour:"сотрудника",zero:"сотрудников"},ae={fiveToNine:"Добавлено",one:"Добавлен",twoToFour:"Добавлено",zero:"Добавлено"};function de(){const e=a(d.employees.value);return t.jsxs(b,{children:[T(Math.trunc(e==null?void 0:e.length),ae)," ",e==null?void 0:e.length," ",T(Math.trunc(e==null?void 0:e.length),ie)]})}export{fe as default};
