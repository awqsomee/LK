var g=Object.defineProperty,S=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(e,t,i)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&n(e,i,t[i]);if(u)for(var i of u(t))h.call(t,i)&&n(e,i,t[i]);return e},m=(e,t)=>S(e,F(t));import{r as s,j as o}from"./vendor-60fdf703.js";import{bw as A,b0 as N,b1 as v,bA as j,h as E,d6 as O,d1 as y,bB as q}from"./index-040a4e16.js";import{g as B}from"./get-method-obstaing-bad4fac3.js";import{g as C}from"./get-student-subdivisions-5a2f2c8d.js";import{g as M}from"./get-address-fields-cc7f3adf.js";import{g as R}from"./get-student-method-obtaining-fields-13347f29.js";import"./get-divisions-96cfa1b1.js";import"./consts-efab0afd.js";const k=[{id:0,title:"по месту требования"},{id:1,title:"работодателю"},{id:2,title:"на работу родителям"},{id:3,title:"в визовый центр"},{id:4,title:"в Федеральную налоговую службу (ФНС)"},{id:5,title:"в Федеральную службу охраны (ФСО)"},{id:6,title:"в Федеральную службу безопасности (ФСБ)"},{id:7,title:"в ОАО «РЖД»"},{id:8,title:"в музей"},{id:9,title:"в посольство"},{id:10,title:"в школу"},{id:11,title:"в управляющую компанию (УК)"}],w=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],L=e=>({title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...R(),...C(e),...M(),{title:"Место предоставления справки:",type:"select",width:"100",fieldName:"place_reference",value:null,editable:!0,required:!0,items:k},{title:"Количество копий",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:w},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),H=()=>{const[e,t]=s.useState(null),[i,r]=s.useState(!1),[c,f]=s.useState(!1),[d,b]=s.useState({}),l=i!=null?i:!1,{data:{dataUserApplication:a}}=A.useApplications();return s.useEffect(()=>{a&&t(L(a))},[a]),s.useEffect(()=>{e&&a&&b(B(e.data))},[e]),o.jsx(N,{isDone:l,children:!!e&&o.jsxs(v,{children:[o.jsx(j,m(p({},e),{collapsed:l,setData:t,specialFieldsNameConfig:d})),o.jsx(E,{text:l?"Отправлено":"Отправить",action:()=>O(y.STATUS_REGULAR,[e],f,r),isLoading:c,completed:i,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:q(e,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{H as default};
