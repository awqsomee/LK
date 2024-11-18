import{r,j as i}from"./vendor-48260ac4.js";import{d0 as d,s as m,B as p,F as f,I as x,S as h,aj as b,j as g,c as F}from"./index-a4b9dc87.js";import{C as v}from"./error-fb7b5b65.js";const y=[{value:!1,title:"Общественная",files:[],maxFiles:1,required:!1,fieldName:"society",checkboxCondition:"straight",maxFileSizeInMegaBytes:3},{value:!1,title:"Научная",files:[],maxFileSizeInMegaBytes:3,maxFiles:1,required:!1,fieldName:"science",checkboxCondition:"straight"},{value:!1,title:"Спортивная",files:[],maxFiles:1,required:!1,fieldName:"sport",maxFileSizeInMegaBytes:3,checkboxCondition:"straight"},{value:!1,title:"Творческая",files:[],maxFiles:1,required:!1,maxFileSizeInMegaBytes:3,fieldName:"creativity",checkboxCondition:"straight"}],N=e=>{const{surname:t,name:a,patronymic:l,group:s,email:o,phone:u}=e;return{title:"Подача заявок доступна до 30.06.2024",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:u,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:d},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!1},{title:"Участие во внеучебной деятельности (Общий объем файлов - 1мб.)",value:null,fieldName:"extracurricular",type:"checkbox-docs",items:y,width:"10%",editable:!0},{title:"Комментарий",placeholder:"Укажите необходимость переселения",type:"textarea",fieldName:"comment",value:"",editable:!0,required:!0}],hint:"Приложите грамоты, дипломы и другие документы, подтверждающие Вашу активную деятельность в университете."}},j=()=>{var n;const[e,t]=r.useState(null),{data:{dataUserApplication:a}}=m.useApplications(),[l,s]=r.useState(!1),[o,u]=r.useState(!1),c=l??!1;return r.useEffect(()=>{a&&t(N(a))},[a]),new Date<new Date(2024,8,15)?i.jsx(v,{}):i.jsx(p,{isDone:c,children:!!e&&!!t&&i.jsxs(f,{children:[i.jsx(x,{...e,collapsed:c,setData:t}),i.jsx(h,{text:"Отправить",action:()=>b(g.USG_RELOCATION,[e],u,s,!1),isLoading:o,completed:l,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:c,isActive:F(e)&&(((n=e.optionalCheckbox)==null?void 0:n.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{j as default};
