var f=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var d=(e,t,a)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))F.call(t,a)&&d(e,a,t[a]);return e},m=(e,t)=>b(e,x(t));import{r as i,j as l}from"./vendor-60fdf703.js";import{bw as g,b0 as S,b1 as E,bA as h,h as j,d6 as y,d1 as A,bB as N}from"./index-f39231fe.js";import{g as q}from"./get-divisions-96cfa1b1.js";const R=e=>({title:"Произвольный запрос",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Выберите структурное подразделение для обращения",type:"radio",fieldName:"structural-subdivision",value:null,editable:!0,items:q(e.divisions_all),isSpecificRadio:!0},{title:"Тематика обращения",type:"text",fieldName:"subject_appeal",value:"",editable:!0,required:!0},{title:"Суть обращения",type:"textarea",fieldName:"essence ",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1},alert:"Данный запрос позволит отправить Ваш запрос в любое доступное структурное подразделение. Используйте эту функцию только при крайней необходимости.",hint:"При необходимости получения скана готового документа по электронной почте или оригинала по обычной почте укажите это в поле комментария. Для получения оргигинала укажите также ваш почтовый адрес, включая индекс."}),C=()=>{const[e,t]=i.useState(null),[a,o]=i.useState(!1),[n,c]=i.useState(!1),s=a!=null?a:!1,{data:{dataUserApplication:r}}=g.useApplications();return i.useEffect(()=>{r&&t(R(r))},[r]),l.jsx(S,{isDone:s,children:!!e&&!!t&&l.jsxs(E,{children:[l.jsx(h,m(p({},e),{collapsed:s,setData:t})),l.jsx(j,{text:s?"Отправлено":"Отправить",action:()=>y(A.FREE_REQUEST,[e],c,o),isLoading:n,completed:a,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:N(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{C as default};
