import{r as t,j as s}from"./vendor-48260ac4.js";import{cZ as n,s as c,B as f,F as b,I as g,S as F,aj as S,j as x,c as N}from"./index-078ea5cc.js";import{g as v,a as h}from"./get-method-obtaining-fields-d608a4c8.js";import{g as j}from"./get-student-subdivisions-5a2f2c8d.js";import{g as A}from"./get-method-obstaing-c0726de9.js";import"./get-divisions-96cfa1b1.js";const q=e=>({title:"Справка-вызов",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...v(),...j(e),...h(),{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:n},{title:"Место предоставления справки",fieldName:"place_reference",value:null,editable:!0,required:!0},{title:"Период времени - с:",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"по:",type:"date",fieldName:"time-after",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),k=()=>{const[e,l]=t.useState(null),[r,o]=t.useState(!1),[d,p]=t.useState(!1),[u,m]=t.useState({}),a=r??!1,{data:{dataUserApplication:i}}=c.useApplications();return t.useEffect(()=>{i&&l(q(i))},[i]),t.useEffect(()=>{e&&i&&m(A(e.data))},[e]),s.jsx(f,{isDone:a,children:!!e&&!!l&&s.jsxs(b,{children:[s.jsx(g,{...e,collapsed:a,setData:l,specialFieldsNameConfig:u}),s.jsx(F,{text:a?"Отправлено":"Отправить",action:()=>S(x.SPRVIZOV,[e],p,o),isLoading:d,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:N(e,u),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{k as default};
