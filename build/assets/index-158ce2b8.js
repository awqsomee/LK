import{r as s,j as i}from"./vendor-8312535b.js";import{b7 as d,s as p,B as c,F as m,I as f,S as x,aj as b,j as F,c as S}from"./index-3ed27df5.js";const g=[{id:0,title:"по собственному желанию"},{id:1,title:"за академическую неуспеваемость"},{id:2,title:"за неоплату обучения"},{id:3,title:"в связи с переводом"},{id:4,title:"отчисление с расторжением договора"}],j=e=>({title:"Отчисление по инициативе обучающегося",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Причина отчисления",type:"select",fieldName:"reason",width:"100",value:null,required:!0,editable:!0,items:g},{title:"Дата отчисления c:",type:"date",fieldName:"time-before",value:"",minValueInput:d(0),editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),N=()=>{const[e,l]=s.useState(null),[t,o]=s.useState(!1),[n,u]=s.useState(!1),a=t!=null?t:!1,{data:{dataUserApplication:r}}=p.useApplications();return s.useEffect(()=>{r&&l(j(r))},[r]),i.jsx(c,{isDone:a,children:!!e&&!!l&&i.jsxs(m,{children:[i.jsx(f,{...e,collapsed:a,setData:l}),i.jsx(x,{text:a?"Отправлено":"Отправить",action:()=>b(F.CRS_EXPULSION,[e],u,o),isLoading:n,completed:t,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:S(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
