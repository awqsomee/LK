var v=Object.defineProperty,x=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var d=(a,e,t)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,c=(a,e)=>{for(var t in e||(e={}))g.call(e,t)&&d(a,t,e[t]);if(u)for(var t of u(e))A.call(e,t)&&d(a,t,e[t]);return a},m=(a,e)=>x(a,h(e));import{r as p,j as r}from"./vendor-60fdf703.js";import{bw as N,b0 as C,b1 as F,bA as S,h as j,d6 as E,d1 as _,bB as k}from"./index-154347a0.js";import{C as y}from"./error-83719802.js";const q=a=>{const{surname:e,name:t,patronymic:l,group:s,email:o,phone:i}=a;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"reason_for_relocation",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},U=()=>{var a,e;const[t,l]=p.useState(null),{data:{dataUserApplication:s}}=N.useApplications(),[o,i]=p.useState(!1),[f,b]=p.useState(!1),n=o!=null?o:!1;return p.useEffect(()=>{s&&l(q(s))},[s]),new Date<new Date(2024,8,15)?r.jsx(y,{}):r.jsx(C,{isDone:n,children:!!t&&!!l&&r.jsxs(F,{children:[r.jsx(S,m(c({},t),{collapsed:n,setData:l})),r.jsx(j,{text:"Отправить",action:()=>E(_.USG_RELOCATION_INNER,[t],b,i),isLoading:f,completed:o,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:k(t)&&((a=(e=t.optionalCheckbox)===null||e===void 0?void 0:e.value)!==null&&a!==void 0?a:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{U as default};
