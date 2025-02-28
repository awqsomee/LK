var N=Object.defineProperty,P=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(e,s,l)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,C=(e,s)=>{for(var l in s||(s={}))W.call(s,l)&&F(e,l,s[l]);if(E)for(var l of E(s))z.call(s,l)&&F(e,l,s[l]);return e},D=(e,s)=>P(e,B(s));import{i as a,j as t,r as m}from"./vendor-60fdf703.js";import{dl as d,d as x,g as M,T as O,S,I as A,o as V,bD as k,bI as v,b0 as L,b1 as T,aZ as $,h as H,b3 as R,b2 as _,dm as J,dn as Q,bo as Y,b4 as Z,aQ as G,bC as q}from"./index-aa7cb4ff.js";import{D as K}from"./test-database-message-a6d6b14a.js";import{A as X}from"./forbidden-98f601ca.js";const ee=({subordinate:{employeeId:e,employeeName:s,divisionName:l,position:o,employmentType:i,rate:r}})=>{const{addItem:h,removeItem:g,setValue:f,value:b}=a(d.employees),{minDate:c}=a(d.period),n=b.find(p=>p.id===e),u=!!n;return t.jsxs(x,{gap:"0.5rem",onClick:()=>u?g(e):h(e),cursor:"pointer",brad:"0.5rem",hoverBackground:"var(--theme-5)",p:"0.5rem",ai:"flex-start",children:[t.jsx(M,{checked:u,setChecked:()=>u?g(e):h(e)}),t.jsxs(x,{gap:"0.5rem",d:"column",ai:"flex-start",children:[t.jsx(O,{align:"left",size:4,children:s}),t.jsx(S,{children:l}),t.jsx(S,{children:o}),t.jsxs(S,{children:[i,r&&` (ставка: ${r})`]}),u&&t.jsxs(x,{jc:"space-between",ai:"flex-end",gap:"0.5rem",onClick:p=>p.stopPropagation(),cursor:"auto",children:[t.jsx(A,{title:"Сумма",value:(n==null?void 0:n.sum)||"",setValue:p=>{n&&f(D(C({},n),{sum:p}))},type:"number",required:!0,width:"38%",placeholder:"Сумма выплаты",isActive:u}),t.jsx(A,{title:"Дата начала",value:(n==null?void 0:n.startDate)||"",setValue:p=>{n&&f(D(C({},n),{startDate:p}))},type:"date",required:!0,width:"30%",isActive:u,minValue:c}),t.jsx(A,{title:"Дата окончания",value:(n==null?void 0:n.endDate)||"",setValue:p=>{n&&f(D(C({},n),{endDate:p}))},type:"date",required:!0,width:"30%",minValue:n==null?void 0:n.startDate,isActive:u})]})]})]})},fe=()=>{const[e,s,l,o,i,r,h,g,f,b]=a([V.rolesPending,k.createSupplement,v.supplementCreating,k.pageMounted,V.roles,v.completed,k.setCompleted,v.isActive,V.jobRoles,v.errorMessage]),c=r!=null?r:!1,n=i.includes("Initiator");return m.useEffect(()=>{n&&o()},[n]),e?t.jsx(L,{isDone:c,children:t.jsx(T,{noHeader:!0,children:t.jsx(x,{w:"100%",jc:"center",ai:"center",children:t.jsx($,{})})})}):n?t.jsx(L,{isDone:c,children:t.jsxs(T,{noHeader:!0,children:[t.jsx(K,{}),t.jsx(te,{}),t.jsx(se,{}),t.jsx(le,{}),t.jsx(ne,{}),t.jsx(oe,{}),t.jsx(re,{}),t.jsx(de,{}),t.jsx(H,{text:c?"Отправлено":"Отправить",action:s,isLoading:l,completed:r,setCompleted:h,repeatable:!1,buttonSuccessText:"Отправлено",isDone:c,isActive:g,popUpFailureMessage:b,popUpSuccessMessage:"Данные формы успешно отправлены"})]})}):t.jsx(X,{jobRoles:f})};function te(){const{value:e,setValue:s}=a(d.job),l=a(V.jobRoles);if(!l)return null;const o=m.useMemo(()=>l.filter(i=>i.roles.includes("Initiator")).map(i=>({id:i.employeeId,title:i.division})),l);return m.useEffect(()=>{o.length===1&&s(o[0])},[o]),t.jsx(R,{title:"Должность / Подразделение",items:o,selected:o.length===1?o[0]:e,setSelected:s,isActive:o.length>1,required:!0,width:"100%"})}function se(){const e=a(v.paymentIdentifiers),{value:s,setValue:l}=a(d.paymentIdentifier);return m.useEffect(()=>{e.length===1&&l(e[0])},[e]),t.jsx(R,{title:"Вид надбавки",items:e,selected:s,setSelected:l,isActive:e.length>1,required:!0,width:"100%",withSearch:!0,placeholder:"Вид надбавки"})}function le(){const{startDate:e,setStartDate:s,endDate:l,setEndDate:o,minDate:i}=a(d.period);return t.jsxs(x,{jc:"space-between",gap:"0.5rem",children:[t.jsx(A,{title:"Дата начала",value:e,setValue:s,type:"date",required:!0,width:"49%",minValue:i}),t.jsx(A,{title:"Дата окончания",value:l,setValue:o,type:"date",required:!0,width:"49%",minValue:e})]})}function ne(){const{value:e,setValue:s}=a(d.commentary);return t.jsx(_,{title:"Комментарий (предполагаемый источник финансирования)",placeholder:"Комментарий (предполагаемый источник финансирования, например, проект)",value:e,setValue:s})}function oe(){const[e,s,l,o,i]=a([v.employees,d.employees.value,d.employees.allSelected,d.employees.selectAll,d.employees.deselectAll]),{value:r}=a(d.job),[h,g]=m.useState(!0),[f,b]=m.useState(!1),[c,n]=m.useState(""),[u,p]=m.useState(!1),U=m.useMemo(()=>{if(!e||!r)return[];const y=s.map(j=>j.id),w=u?e[r==null?void 0:r.id].filter(j=>y.includes(j.employeeId)):e[r==null?void 0:r.id];if(!c)return w;const I=c.toLowerCase();return w.filter(j=>j.employeeName.toLowerCase().includes(I)||j.divisionName.toLowerCase().includes(I)||j.position.toLowerCase().includes(I))},[e,r,c,u,s]);return t.jsxs(J,{openArea:h,children:[t.jsx(Q,{title:"Сотрудники",included:f,optional:!1,setOpenArea:g,setIncluded:b,collapsed:!1,openArea:h}),t.jsx("div",{className:"inputs",children:r&&e?t.jsxs(x,{gap:"1.5rem",ai:"flex-start",d:"column",children:[t.jsx(Y,{value:c,setValue:n,placeholder:"Поиск по сотрудникам"}),t.jsxs(x,{gap:"0.5rem",ai:"flex-start",d:"column",children:[t.jsx(M,{checked:u,setChecked:p,text:"Отобразить только выбранных"}),t.jsx(M,{checked:l,setChecked:y=>{y?o(e[r==null?void 0:r.id].map(w=>w.employeeId)):i()},text:"Выбрать всех"})]}),t.jsx(x,{gap:"1rem",ai:"flex-start",d:"column",children:U.map(y=>t.jsx(ee,{subordinate:y},y.employeeId))})]}):t.jsx(S,{children:"Выберите должность"})})]})}function re(){const{value:e,setValue:s}=a(d.files),l=a(v.fileUploading);return t.jsx(Z,{files:e,formats:["doc","pdf","docx"],setFiles:o=>{if(e.length<o.length&&e.some(i=>i.name===o[o.length-1].name)){G.evokePopUpMessage({message:"Имя файла не может повторятся",type:"failure"});return}s(o)},isActive:!l})}const ie={fiveToNine:"сотрудников",one:"сотрудник",twoToFour:"сотрудника",zero:"сотрудников"},ae={fiveToNine:"Добавлено",one:"Добавлен",twoToFour:"Добавлено",zero:"Добавлено"};function de(){const e=a(d.employees.value);return t.jsxs(S,{children:[q(Math.trunc(e==null?void 0:e.length),ae)," ",e==null?void 0:e.length," ",q(Math.trunc(e==null?void 0:e.length),ie)]})}export{fe as default};
