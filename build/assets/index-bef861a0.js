import{r as t,j as d}from"./vendor-48260ac4.js";import{s as p,B as c,F as f,I as g,S as F,aj as b,j as S,c as x}from"./index-daf85513.js";import{g as h,a as v}from"./get-method-obtaining-fields-38c411d0.js";import{g as N}from"./get-student-subdivisions-5a2f2c8d.js";import{g as j}from"./get-method-obstaing-c0726de9.js";import{g as A}from"./get-reason-for-receiving-ef71d2fc.js";import"./get-divisions-96cfa1b1.js";const M=[{id:0,title:"Среднее общее"},{id:1,title:"Среднее профессиональное"},{id:2,title:"Высшее - бакалавриат"},{id:3,title:"Высшее - специалитет, магистратура"}],y=e=>{const{surname:a,name:i,patronymic:n,email:s,phone:l}=e;return{title:"Заверенные копии документов по воинскому учету из личного дела",data:[{title:"ФИО",fieldName:"fio",value:a+" "+i+" "+n,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:l,required:!0},{title:"Email",type:"email",fieldName:"email",value:s,editable:!0,required:!0},...h(),...N(e),...v(),{title:"Образование на момент поступления в университет",value:null,type:"select",fieldName:"education",items:M,width:"100%",editable:!0,required:!0},{title:"Наименование военного комиссариата, куда направляется справка",value:"",fieldName:"comissariat_name",width:"100%",editable:!0,required:!0},{title:"Комментарий к заявке",placeholder:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},L=()=>{const[e,a]=t.useState(null),[i,n]=t.useState({}),[s,l]=t.useState(!1),[m,u]=t.useState(!1),o=s??!1,{data:{dataUserApplication:r}}=p.useApplications();return t.useEffect(()=>{r&&a(y(r))},[r]),t.useEffect(()=>{e&&r&&n({...j(e.data),...A(e.data)})},[e]),d.jsx(c,{isDone:o,children:!!e&&!!a&&d.jsxs(f,{noHeader:!0,children:[d.jsx(g,{...e,collapsed:o,setData:a,specialFieldsNameConfig:i}),d.jsx(F,{text:o?"Отправлено":"Отправить",action:()=>b(S.MILITARY_FORM_4,[e],u,l),isLoading:m,completed:s,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:x(e,i),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{L as default};
