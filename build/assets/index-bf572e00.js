import{r as s,j as r}from"./vendor-48260ac4.js";import{s as d,B as c,F as m,I as f,S as b,aj as x,j as N,c as g}from"./index-d3095a88.js";const v=e=>{const{surname:t,name:a,patronymic:l,group:i,email:o,phone:u}=e;return{title:"Расторжение договора найма",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:i,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",mask:!0,value:u,editable:!0,required:!0},{title:"Номер договора",fieldName:"contract_number",value:"",editable:!0,required:!0},{title:"Дата договора",type:"date",fieldName:"contract_date",value:"",editable:!0,required:!0},{title:"Планируемая дата расторжения договора найма и выселения из общежития",type:"date",fieldName:"termination_date",value:"",editable:!0,required:!0}],optionalCheckbox:{title:`С порядком выселения ознакомлен(а).
Обязуюсь вывезти личные вещи в указанную дату и передать жилое помещение в надлежащем состоянии администрации общежития по акту приема-передачи (подписать документ)`,value:!1,fieldName:"isFamiliar"}}},j=()=>{var p;const[e,t]=s.useState(null),{data:{dataUserApplication:a}}=d.useApplications(),[l,i]=s.useState(!1),[o,u]=s.useState(!1),n=l??!1;return s.useEffect(()=>{a&&t(v(a))},[a]),r.jsx(c,{isDone:n,children:!!e&&!!t&&r.jsxs(m,{children:[r.jsx(f,{...e,collapsed:n,setData:t}),r.jsx(b,{text:"Отправить",action:()=>x(N.USG_CONTR_TERMINATION,[e],u,i),isLoading:o,completed:l,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:g(e)&&(((p=e.optionalCheckbox)==null?void 0:p.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{j as default};
