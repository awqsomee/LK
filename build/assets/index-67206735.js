var g=Object.defineProperty,F=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))N.call(t,a)&&p(e,a,t[a]);if(d)for(var a of d(t))v.call(t,a)&&p(e,a,t[a]);return e},n=(e,t)=>F(e,S(t));import{r as i,j as r}from"./vendor-8a1e4858.js";import{bv as x,bz as h,t as A,bA as j,i as q,d6 as y,d1 as C,bB as E}from"./index-8977d86c.js";import{g as O}from"./get-method-obstaing-bad4fac3.js";import{g as B}from"./get-student-subdivisions-5a2f2c8d.js";import{g as M}from"./get-address-fields-cc7f3adf.js";import{g as k}from"./get-student-method-obtaining-fields-13347f29.js";import{N as D}from"./consts-efab0afd.js";import"./get-divisions-96cfa1b1.js";const I=e=>({title:"Справка-вызов",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...k(),...B(e),...M(),{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:D},{title:"Место предоставления справки",fieldName:"place_reference",value:null,editable:!0,required:!0},{title:"Период времени - с:",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"по:",type:"date",fieldName:"time-after",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),U=()=>{const[e,t]=i.useState(null),[a,o]=i.useState(!1),[c,f]=i.useState(!1),[u,b]=i.useState({}),s=a!=null?a:!1,{data:{dataUserApplication:l}}=x.useApplications();return i.useEffect(()=>{l&&t(I(l))},[l]),i.useEffect(()=>{e&&l&&b(O(e.data))},[e]),r.jsx(h,{isDone:s,children:!!e&&!!t&&r.jsxs(A,{children:[r.jsx(j,n(m({},e),{collapsed:s,setData:t,specialFieldsNameConfig:u})),r.jsx(q,{text:s?"Отправлено":"Отправить",action:()=>y(C.SPRVIZOV,[e],f,o),isLoading:c,completed:a,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:E(e,u),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{U as default};
