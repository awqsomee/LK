var S=Object.defineProperty,b=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(e,t,i)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&n(e,i,t[i]);if(u)for(var i of u(t))h.call(t,i)&&n(e,i,t[i]);return e},c=(e,t)=>b(e,F(t));import{r as s,j as o}from"./vendor-33947725.js";import{s as N,B as j,F as v,I as A,S as E,aj as O,j as y,c as q}from"./index-5c2dce5e.js";import{g as B}from"./get-method-obstaing-bad4fac3.js";import{g as C,a as M}from"./get-method-obtaining-fields-02edef78.js";import{g as R}from"./get-student-subdivisions-5a2f2c8d.js";import"./get-divisions-96cfa1b1.js";const k=[{id:0,title:"по месту требования"},{id:1,title:"работодателю"},{id:2,title:"на работу родителям"},{id:3,title:"в визовый центр"},{id:4,title:"в Федеральную налоговую службу (ФНС)"},{id:5,title:"в Федеральную службу охраны (ФСО)"},{id:6,title:"в Федеральную службу безопасности (ФСБ)"},{id:7,title:"в ОАО «РЖД»"},{id:8,title:"в музей"},{id:9,title:"в посольство"},{id:10,title:"в школу"},{id:11,title:"в управляющую компанию (УК)"}],L=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],T=e=>({title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...C(),...R(e),...M(),{title:"Место предоставления справки:",type:"select",width:"100",fieldName:"place_reference",value:null,editable:!0,required:!0,items:k},{title:"Количество копий",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:L},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),P=()=>{const[e,t]=s.useState(null),[i,r]=s.useState(!1),[m,f]=s.useState(!1),[d,g]=s.useState({}),a=i!=null?i:!1,{data:{dataUserApplication:l}}=N.useApplications();return s.useEffect(()=>{l&&t(T(l))},[l]),s.useEffect(()=>{e&&l&&g(B(e.data))},[e]),o.jsx(j,{isDone:a,children:!!e&&o.jsxs(v,{children:[o.jsx(A,c(p({},e),{collapsed:a,setData:t,specialFieldsNameConfig:d})),o.jsx(E,{text:a?"Отправлено":"Отправить",action:()=>O(y.STATUS_REGULAR,[e],f,r),isLoading:m,completed:i,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:q(e,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{P as default};
