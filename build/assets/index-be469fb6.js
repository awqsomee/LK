var F=Object.defineProperty,b=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&p(e,a,t[a]);if(u)for(var a of u(t))h.call(t,a)&&p(e,a,t[a]);return e},c=(e,t)=>b(e,S(t));import{r as s,j as n}from"./vendor-0c8c29fe.js";import{s as v,B as N,F as j,I as A,S as M,aj as y,j as E,c as R}from"./index-179b6f61.js";import{g as q,a as B}from"./get-method-obtaining-fields-8429652d.js";import{g as I}from"./get-student-subdivisions-5a2f2c8d.js";import{g as k}from"./get-method-obstaing-c0726de9.js";import{g as C}from"./get-reason-for-receiving-ef71d2fc.js";import"./get-divisions-96cfa1b1.js";const L=[{id:0,title:"Среднее общее"},{id:1,title:"Среднее профессиональное"},{id:2,title:"Высшее - бакалавриат"},{id:3,title:"Высшее - специалитет, магистратура"}],O=e=>{const{surname:t,name:a,patronymic:m,email:i,phone:l}=e;return{title:"Заверенные копии документов по воинскому учету из личного дела",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+m,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:l,required:!0},{title:"Email",type:"email",fieldName:"email",value:i,editable:!0,required:!0},...q(),...I(e),...B(),{title:"Образование на момент поступления в университет",value:null,type:"select",fieldName:"education",items:L,width:"100%",editable:!0,required:!0},{title:"Наименование военного комиссариата, куда направляется справка",value:"",fieldName:"comissariat_name",width:"100%",editable:!0,required:!0},{title:"Комментарий к заявке",placeholder:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},z=()=>{const[e,t]=s.useState(null),[a,m]=s.useState({}),[i,l]=s.useState(!1),[f,g]=s.useState(!1),o=i!=null?i:!1,{data:{dataUserApplication:r}}=v.useApplications();return s.useEffect(()=>{r&&t(O(r))},[r]),s.useEffect(()=>{e&&r&&m(d(d({},k(e.data)),C(e.data)))},[e]),n.jsx(N,{isDone:o,children:!!e&&!!t&&n.jsxs(j,{noHeader:!0,children:[n.jsx(A,c(d({},e),{collapsed:o,setData:t,specialFieldsNameConfig:a})),n.jsx(M,{text:o?"Отправлено":"Отправить",action:()=>y(E.MILITARY_FORM_4,[e],g,l),isLoading:f,completed:i,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:R(e,a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{z as default};
