import{r as t,j as m}from"./vendor-48260ac4.js";import{s as c,B as u,F as f,I as g,S as F,aj as S,j as b,c as x}from"./index-b11f750d.js";import{g as h,a as j}from"./get-method-obtaining-fields-82747dda.js";import{g as v}from"./get-student-subdivisions-5a2f2c8d.js";import{g as A}from"./get-method-obstaing-c0726de9.js";import{g as N}from"./get-reason-for-receiving-ef71d2fc.js";import"./get-divisions-96cfa1b1.js";const M=e=>{const{surname:a,name:s,patronymic:n,email:i,phone:o}=e;return{title:"Заверенные копии документов по воинскому учету из личного дела",data:[{title:"ФИО",fieldName:"fio",value:a+" "+s+" "+n,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:o,required:!0},{title:"Email",type:"email",fieldName:"email",value:i,editable:!0,required:!0},...h(),...v(e),...j(),{title:"Наименование военного комиссариата, куда направляется справка",value:"",fieldName:"comissariat_name",width:"100%",editable:!0,required:!0},{title:"Комментарий к заявке",placeholder:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},C=()=>{const[e,a]=t.useState(null),[s,n]=t.useState({}),[i,o]=t.useState(!1),[p,d]=t.useState(!1),r=i??!1,{data:{dataUserApplication:l}}=c.useApplications();return t.useEffect(()=>{l&&a(M(l))},[l]),t.useEffect(()=>{e&&l&&n({...A(e.data),...N(e.data)})},[e]),m.jsx(u,{isDone:r,children:!!e&&!!a&&m.jsxs(f,{noHeader:!0,children:[m.jsx(g,{...e,collapsed:r,setData:a,specialFieldsNameConfig:s}),m.jsx(F,{text:r?"Отправлено":"Отправить",action:()=>S(b.MILITARY_FORM_5,[e],d,o),isLoading:p,completed:i,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:x(e,s),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{C as default};
