var f=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(s,e,t)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,c=(s,e)=>{for(var t in e||(e={}))x.call(e,t)&&u(s,t,e[t]);if(p)for(var t of p(e))g.call(e,t)&&u(s,t,e[t]);return s},d=(s,e)=>b(s,h(e));import{r,j as n}from"./vendor-8a1e4858.js";import{bv as v,bz as S,t as _,bA as F,i as N,d6 as A,bu as E,bB as j}from"./index-8a3ccb59.js";import{g as k,a as y}from"./get-default-subdivision-17957fb0.js";const B=s=>{const{surname:e,name:t,patronymic:a,subdivisions:i}=s;return{title:"Запрос на изменение внутреннего телефона",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+a,editable:!1},{title:"Подразделение/должность",value:k(i),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:y(i),isSpecificSelect:!0},{fieldName:"phone_inner",title:"Внутренний телефон",type:"innerPhone",value:"",mask:!0,required:!0},{fieldName:"show_inner_phone_inner",title:"Показывать внутренний телефон внутри Личного кабинета",type:"checkbox",value:!1},{fieldName:"show_inner_phone_outer",title:"Показывать внутренний телефон на сайте",type:"checkbox",value:!1}]}},w=()=>{const[s,e]=r.useState(null),[t,a]=r.useState(!1),[i,m]=r.useState(!1),o=t!=null?t:!1,{data:{dataUserApplication:l}}=v.useApplications();return r.useEffect(()=>{l&&e(B(l))},[l]),n.jsx(S,{isDone:o,children:!!s&&!!e&&n.jsxs(_,{noHeader:!0,children:[n.jsx(F,d(c({},s),{collapsed:o,setData:e})),n.jsx(N,{text:o?"Отправлено":"Отправить",action:()=>A(E.EDIT_PHONEBOOK_INNER_PHONE,[s],m,a,!0),isLoading:i,completed:t,setCompleted:a,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:j(s),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{w as default};
