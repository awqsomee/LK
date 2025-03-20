var c=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var o=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&o(e,a,t[a]);if(d)for(var a of d(t))v.call(t,a)&&o(e,a,t[a]);return e},p=(e,t)=>b(e,x(t));import{r as l,j as i}from"./vendor-60fdf703.js";import{bw as N,b0 as q,b1 as h,bA as S,h as F,d6 as g,d1 as j,bB as D}from"./index-ea554b7a.js";const k=e=>({title:"Уточнение паспортных данных",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,editable:!0,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0},{title:"Дата рождения",type:"date",fieldName:"birthday",value:e.birthday,editable:!0,required:!0},{title:"Иностранное гражданство",type:"checkbox",value:!1,editable:!0,fieldName:"foreigner"},{title:"Серия",type:"text",value:e.passSer,editable:!0,fieldName:"series",required:!0},{title:"Номер",type:"text",value:e.passNum,editable:!0,fieldName:"number",required:!0},{title:"Кем выдан",type:"textarea",value:e.passDiv,editable:!0,fieldName:"issued_by",required:!0},{title:"Дата выдачи",type:"date",value:e.passDate,editable:!0,fieldName:"date_of_issue",required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1},hint:"Проверьте правильность указанных паспортных данных. Если есть ошибки - исправьте их и отправьте заявку."}),A=()=>{const[e,t]=l.useState(null),[a,u]=l.useState(!1),[n,f]=l.useState(!1),r=a!=null?a:!1,{data:{dataUserApplication:s}}=N.useApplications();return l.useEffect(()=>{s&&t(k(s))},[s]),i.jsx(q,{isDone:r,children:!!e&&!!t&&i.jsxs(h,{children:[i.jsx(S,p(m({},e),{collapsed:r,setData:t})),i.jsx(F,{text:r?"Отправлено":"Отправить",action:()=>g(j.PASSPORT_DATA,[e],f,u),isLoading:n,completed:a,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:D(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
