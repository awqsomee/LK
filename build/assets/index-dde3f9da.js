var h=Object.defineProperty,N=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var c=(e,t,i)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))F.call(t,i)&&c(e,i,t[i]);if(m)for(var i of m(t))x.call(t,i)&&c(e,i,t[i]);return e},n=(e,t)=>N(e,_(t));import{r as a,j as s}from"./vendor-60fdf703.js";import{by as p,bw as q,b0 as S,b1 as w,bA as j,h as C,d6 as A,d1 as B,bB as E}from"./index-3e2d0793.js";import{g as T}from"./get-reason-for-receiving-eb30f0b2.js";import{g as M}from"./get-method-obstaing-bad4fac3.js";import{g as O}from"./get-student-subdivisions-5a2f2c8d.js";import{g as W}from"./get-address-fields-cc7f3adf.js";import{g as k}from"./get-student-method-obtaining-fields-13347f29.js";import"./get-divisions-96cfa1b1.js";import"./consts-efab0afd.js";const f=[{id:0,title:"Очная"},{id:1,title:"Заочная"},{id:2,title:"Очно-заочная"},{id:3,title:"Очная сокращённая"},{id:4,title:"Заочная сокращённая"},{id:5,title:"Очно-заочная сокращённая"}],b=[{id:0,title:"Бюджетная"},{id:1,title:"С оплатой обучения"}],D=[{id:0,title:"аттестат о среднем (полном) общем образовании"},{id:1,title:"диплом о среднем профессиональном образовании"},{id:2,title:"диплом о начальном профессиональном образовании"},{id:3,title:"академическая справка или диплом о неполном высшем образовании"},{id:4,title:"диплом о полном высшем образовании."}],R=[{id:0,title:"моим письменным заявлением"},{id:1,title:"отчислением из"}],z=e=>({title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...k(),...O(e),...W(),{title:"Прошу выдать мне справку об обучении в связи с:",type:"select",width:"100",fieldName:"reason",value:null,items:R,editable:!0,required:!0},{title:"Название вуза на момент отчисления",type:"text",value:"",editable:!0,fieldName:"vuz_otch",required:!0,specialType:"dueToWithdrawal"},{title:"Год отчисления",type:"number",value:"",editable:!0,fieldName:"vuz_otch_year",required:!0,specialType:"dueToWithdrawal"},{title:"Код направления подготовки",type:"text",value:e.specialty_code,editable:!0,fieldName:"specialty_code",required:!0},{title:"Наименование направления подготовки:",type:"text",value:e.specialty_name,editable:!0,fieldName:"specialty_name",required:!0},{title:"Форма обучения:",type:"select",value:p(f,e.educationForm),items:f,editable:!0,width:"100",fieldName:"academic_form",required:!0},{title:"Основа обучения:",type:"select",value:p(b,e.finance),editable:!0,items:b,width:"100",fieldName:"contract_form",required:!0},{title:"Год выдачи предудщего документа об образовании",placeholder:"Укажите год выдачи",type:"number",fieldName:"previous_doc_year",value:"",width:"100%",editable:!0,required:!0},{title:"Предудущий документ об образовании",type:"select",fieldName:"previous_doc_year_type",value:"",width:"100%",items:D,editable:!0,required:!0},{title:"Наименование вуза в момент зачисления",type:"text",value:"",editable:!0,fieldName:"uni_name",required:!0},{title:"Год зачисления",type:"number",value:"",editable:!0,fieldName:"uni_year",required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Y=()=>{const[e,t]=a.useState(null),[i,u]=a.useState(!1),[y,v]=a.useState(!1),[o,g]=a.useState({}),l=i!=null?i:!1,{data:{dataUserApplication:r}}=q.useApplications();return a.useEffect(()=>{r&&t(z(r))},[r]),a.useEffect(()=>{e&&r&&g(d(d({},M(e.data)),T(e.data)))},[e]),s.jsx(S,{isDone:l,children:!!e&&!!t&&s.jsxs(w,{children:[s.jsx(j,n(d({},e),{collapsed:l,setData:t,specialFieldsNameConfig:o})),s.jsx(C,{text:l?"Отправлено":"Отправить",action:()=>A(B.OBUCH,[e],v,u),isLoading:y,completed:i,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:E(e,o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Y as default};
