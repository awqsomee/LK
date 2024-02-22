import{r as a,j as r}from"./vendor-4355a046.js";import{s as o,B as p,F as n,I as f,S as c,aM as b,m as x,b as y}from"./index-af042de3.js";const v=e=>({title:"Уточнение паспортных данных",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,editable:!0,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0},{title:"Дата рождения",type:"date",fieldName:"birthday",value:e.birthday,editable:!0,required:!0},{title:"Иностранное гражданство",type:"checkbox",value:!1,editable:!0,fieldName:"foreigner"},{title:"Серия",type:"text",value:e.passSer,editable:!0,fieldName:"series",required:!0},{title:"Номер",type:"text",value:e.passNum,editable:!0,fieldName:"number",required:!0},{title:"Кем выдан",type:"textarea",value:e.passDiv,editable:!0,fieldName:"issued_by",required:!0},{title:"Дата выдачи",type:"date",value:e.passDate,editable:!0,fieldName:"date_of_issue",required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1},hint:"Проверьте правильность указанных паспортных данных. Если есть ошибки - исправьте их и отправьте заявку."}),S=()=>{const[e,i]=a.useState(null),[s,u]=a.useState(!1),[d,m]=a.useState(!1),t=s??!1,{data:{dataUserApplication:l}}=o.useApplications();return a.useEffect(()=>{l&&i(v(l))},[l]),r.jsx(p,{isDone:t,children:!!e&&!!i&&r.jsxs(n,{children:[r.jsx(f,{...e,collapsed:t,setData:i}),r.jsx(c,{text:t?"Отправлено":"Отправить",action:()=>b(x.PASSPORT_DATA,[e],m,u),isLoading:d,completed:s,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:y(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{S as default};
