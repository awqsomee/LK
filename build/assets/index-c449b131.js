var x=Object.defineProperty,N=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))v.call(e,a)&&m(t,a,e[a]);if(c)for(var a of c(e))F.call(e,a)&&m(t,a,e[a]);return t},b=(t,e)=>N(t,g(e));import{r as s,j as r}from"./vendor-31894644.js";import{s as S,B as j,F as A,I as h,S as y,aj as C,j as k,c as q}from"./index-0f8b6250.js";const E=t=>{const{surname:e,name:a,patronymic:i,group:l,email:o,phone:u}=t;return{title:"Расторжение договора найма",data:[{title:"ФИО",fieldName:"fio",value:e+" "+a+" "+i,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",mask:!0,value:u,editable:!0,required:!0},{title:"Номер договора",fieldName:"contract_number",value:"",editable:!0,required:!0},{title:"Дата договора",type:"date",fieldName:"contract_date",value:"",editable:!0,required:!0},{title:"Планируемая дата расторжения договора найма и выселения из общежития",type:"date",fieldName:"termination_date",value:"",editable:!0,required:!0}],optionalCheckbox:{title:"С порядком выселения ознакомлен(а).\nОбязуюсь вывезти личные вещи в указанную дату и передать жилое помещение в надлежащем состоянии администрации общежития по акту приема-передачи (подписать документ)",value:!1,fieldName:"isFamiliar"}}},I=()=>{var p,d;const[t,e]=s.useState(null),{data:{dataUserApplication:a}}=S.useApplications(),[i,l]=s.useState(!1),[o,u]=s.useState(!1),n=i!=null?i:!1;return s.useEffect(()=>{a&&e(E(a))},[a]),r.jsx(j,{isDone:n,children:!!t&&!!e&&r.jsxs(A,{children:[r.jsx(h,b(f({},t),{collapsed:n,setData:e})),r.jsx(y,{text:"Отправить",action:()=>C(k.USG_CONTR_TERMINATION,[t],u,l),isLoading:o,completed:i,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:q(t)&&((d=(p=t.optionalCheckbox)==null?void 0:p.value)!=null?d:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{I as default};
