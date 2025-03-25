var v=Object.defineProperty,x=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(a,e,t)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,c=(a,e)=>{for(var t in e||(e={}))g.call(e,t)&&p(a,t,e[t]);if(d)for(var t of d(e))h.call(e,t)&&p(a,t,e[t]);return a},m=(a,e)=>x(a,N(e));import{r as s,j as u}from"./vendor-60fdf703.js";import{bw as A,b0 as F,b1 as C,bA as S,h as k,d6 as y,d1 as _,bB as j}from"./index-27bbb5ce.js";const q=a=>{const{surname:e,name:t,patronymic:i,group:o,email:l,phone:r}=a;return{title:"Расторжение договора найма",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+i,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:l,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",mask:!0,value:r,editable:!0,required:!0},{title:"Номер договора",fieldName:"contract_number",value:"",editable:!0,required:!0},{title:"Дата договора",type:"date",fieldName:"contract_date",value:"",editable:!0,required:!0},{title:"Планируемая дата расторжения договора найма и выселения из общежития",type:"date",fieldName:"termination_date",value:"",editable:!0,required:!0}],optionalCheckbox:{title:`С порядком выселения ознакомлен(а).
Обязуюсь вывезти личные вещи в указанную дату и передать жилое помещение в надлежащем состоянии администрации общежития по акту приема-передачи (подписать документ)`,value:!1,fieldName:"isFamiliar"}}},U=()=>{var a,e;const[t,i]=s.useState(null),{data:{dataUserApplication:o}}=A.useApplications(),[l,r]=s.useState(!1),[f,b]=s.useState(!1),n=l!=null?l:!1;return s.useEffect(()=>{o&&i(q(o))},[o]),u.jsx(F,{isDone:n,children:!!t&&!!i&&u.jsxs(C,{children:[u.jsx(S,m(c({},t),{collapsed:n,setData:i})),u.jsx(k,{text:"Отправить",action:()=>y(_.USG_CONTR_TERMINATION,[t],b,r),isLoading:f,completed:l,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:j(t)&&((a=(e=t.optionalCheckbox)===null||e===void 0?void 0:e.value)!==null&&a!==void 0?a:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{U as default};
