var g=Object.defineProperty,F=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var n=(e,t,i)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&n(e,i,t[i]);if(u)for(var i of u(t))S.call(t,i)&&n(e,i,t[i]);return e},p=(e,t)=>F(e,v(t));import{r as l,j as d}from"./vendor-8a1e4858.js";import{bv as N,bz as h,t as y,bA as A,i as q,d6 as O,d1 as j,bB as E}from"./index-5bf1da28.js";import{g as C}from"./get-method-obstaing-bad4fac3.js";import{g as B}from"./get-student-subdivisions-5a2f2c8d.js";import{g as D}from"./get-address-fields-cc7f3adf.js";import{g as M}from"./get-student-method-obtaining-fields-13347f29.js";import"./get-divisions-96cfa1b1.js";import"./consts-efab0afd.js";const k=[{id:0,title:"Лицензия на право ведения образовательной деятельности"},{id:1,title:"Свидетельство о государственной аккредитации"},{id:3,title:"Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации"}],w=[{id:0,title:"Московский государственный машиностроительный университет» (МАМИ)"},{id:1,title:"Московский государственный открытый университет им. В.С. Черномырдина» (МГОУ)"},{id:2,title:"Московский государственный вечерний металлургический институт» (МГВМИ)"},{id:3,title:"Московский государственный университет инженерной экологии» (МГУИЭ)"},{id:4,title:"Московский государственный индустриальный университет» (МГИУ)"},{id:5,title:"Московский государственный университет печати имени Ивана Фёдорова» (МГУП)"}],I=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"},{id:4,title:"4"},{id:5,title:"5"},{id:6,title:"6"},{id:7,title:"7"},{id:8,title:"8"},{id:9,title:"9"}],K=e=>({title:"Выдача лицензий и свидетельств о государственной аккредитации",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...M(),...B(e),...D(),{title:"Документ",type:"select",width:"100",fieldName:"document",value:null,editable:!0,required:!0,items:k},{title:"Университет",type:"select",fieldName:"university",value:null,editable:!0,required:!0,width:"100",items:w},{title:"Период",type:"text",value:"",editable:!0,fieldName:"period",required:!0},{title:"Количество копий",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:I},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),J=()=>{const[e,t]=l.useState(null),[i,r]=l.useState(!1),[c,f]=l.useState(!1),[o,b]=l.useState({}),s=i!=null?i:!1,{data:{dataUserApplication:a}}=N.useApplications();return l.useEffect(()=>{a&&t(K(a))},[a]),l.useEffect(()=>{e&&a&&b(C(e.data))},[e]),d.jsx(h,{isDone:s,children:!!e&&!!t&&d.jsxs(y,{children:[d.jsx(A,p(m({},e),{collapsed:s,setData:t,specialFieldsNameConfig:o})),d.jsx(q,{text:s?"Отправлено":"Отправить",action:()=>O(j.OKID_LICAKKRED,[e],f,r),isLoading:c,completed:i,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:E(e,o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{J as default};
