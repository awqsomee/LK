import{r as s,j as a}from"./vendor-84bdec13.js";import{s as u,B as d,F as m,I as f,S as x,a3 as F,j as g,c as S}from"./index-403d189d.js";const j=e=>({title:"Отправить документы воинского учета",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!0},alert:"Прикрепите сканы документов для воинского учета"}),A=()=>{var n;const[e,i]=s.useState(null),[o,r]=s.useState(!1),[p,c]=s.useState(!1),t=o??!1,{data:{dataUserApplication:l}}=u.useApplications();return s.useEffect(()=>{l&&i(j(l))},[l]),a.jsx(d,{isDone:t,children:!!e&&!!i&&a.jsxs(m,{children:[a.jsx(f,{...e,collapsed:t,setData:i}),a.jsx(x,{text:t?"Отправлено":"Отправить",action:()=>F(g.MILDOCS,[e],c,r),isLoading:p,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:S(e)&&!!((n=e==null?void 0:e.documents)!=null&&n.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
