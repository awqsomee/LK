import{r as s,j as r}from"./vendor-4af360a6.js";import{cK as n,a2 as m,ar as p,F as f,I as x,S as h,aw as b,d as g,N as F}from"./index-c25f9d36.js";const v=[{value:!1,title:"Общественная",files:[],maxFiles:1,required:!1,fieldName:"society",checkboxCondition:"straight",maxFileSizeInMegaBytes:3},{value:!1,title:"Научная",files:[],maxFileSizeInMegaBytes:3,maxFiles:1,required:!1,fieldName:"science",checkboxCondition:"straight"},{value:!1,title:"Спортивная",files:[],maxFiles:1,required:!1,fieldName:"sport",maxFileSizeInMegaBytes:3,checkboxCondition:"straight"},{value:!1,title:"Творческая",files:[],maxFiles:1,required:!1,maxFileSizeInMegaBytes:3,fieldName:"creativity",checkboxCondition:"straight"}],N=e=>{const{surname:t,name:a,patronymic:i,group:l,email:o,phone:u}=e;return{title:"Переселение в другое общежитие (Подача заявок доступна с 08.06.2023 по 15.06.2023)",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+i,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:u,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:n},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!1},{title:"Участие во внеучебной деятельности (Общий объем файлов - 1мб.)",value:null,fieldName:"extracurricular",type:"checkbox-docs",items:v,width:"10%",editable:!0},{title:"Комментарий",placeholder:"Укажите необходимость переселения",type:"textarea",fieldName:"comment",value:"",editable:!0,required:!0}],hint:"Приложите грамоты, дипломы и другие документы, подтверждающие Вашу активную деятельность в университете."}},A=()=>{var d;const[e,t]=s.useState(null),{data:{dataUserApplication:a}}=m.useApplications(),[i,l]=s.useState(!1),[o,u]=s.useState(!1),c=i??!1;return s.useEffect(()=>{a&&t(N(a))},[a]),r.jsx(p,{isDone:c,children:!!e&&!!t&&r.jsxs(f,{children:[r.jsx(x,{...e,collapsed:c,setData:t}),r.jsx(h,{text:"Отправить",action:()=>b(g.USG_RELOCATION,[e],u,l,!1),isLoading:o,completed:i,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:c,isActive:F(e)&&(((d=e.optionalCheckbox)==null?void 0:d.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
